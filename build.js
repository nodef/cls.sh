const cp    = require('child_process');
const build = require('extra-build');

const owner  = 'nodef';


// Publish a root package to NPM, GitHub.
function publishRootPackage(ds, ver, typ) {
  var _package = build.readDocument('package.json');
  var _readme  = build.readDocument('README.md');
  var m  = build.readMetadata('.');
  m.version  = ver;
  build.writeMetadata('.', m);
  build.publish('.');
  try { build.publishGithub('.', owner); }
  catch {}
  build.writeDocument(_package);
  build.writeDocument(_readme);
}


// Publish root packages to NPM, GitHub.
function publishRootPackages(ds, ver) {
  cp.execSync(`chmod +x index.sh`);
  publishRootPackage(ds, ver, '');
}


// Pushish root, sub packages to NPM, GitHub.
function publishPackages(ds) {
  var m   = build.readMetadata('.');
  var ver = build.nextUnpublishedVersion(m.name, m.version);
  publishRootPackages(ds, ver);
}


// Finally.
function main(a) {
  if (a[2]==='publish-packages') publishPackages([]);
  else bundleScript([]);
}
main(process.argv);
