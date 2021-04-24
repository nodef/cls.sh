const cp = require('child_process');


function makeExec() {
  cp.execSync(`chmod +x index.sh`);
}
makeExec();
