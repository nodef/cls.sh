Clear screen and scrollback on Linux.<br>
🐚 [Bash](https://www.npmjs.com/package/cls.sh),
📜 [Files](https://unpkg.com/cls.sh/).

[cls] (similar to [clear] in *Unix-like* systems) is a *builtin command* in
Windows [Command prompt], which **clears the screen and scrollback** (entire
screen buffer), and **resets the cursor** to the top-left corner of the screen.
The `cls` command actually has its origins in [BASIC]. This package provides the
same behaviour as mentioned above on **Linux** (with [bash] shell). I often
prefer this instead of **clear** when the output of a command is long. You can
install this with `npm install -g cls.sh`.

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[cls]: https://en.wikipedia.org/wiki/CLS_(command)
[clear]: https://en.wikipedia.org/wiki/Clear_(Unix)
[BASIC]: https://en.wikipedia.org/wiki/BASIC
[bash]: https://en.wikipedia.org/wiki/Bash_(Unix_shell)
[Command prompt]: https://en.wikipedia.org/wiki/Cmd.exe


<br>

```bash
# Clear screen, reset cursor, clear scrollback
$ cls
```

<br>
<br>


## References:

- [PuTTY: clear scrollback from commandline](https://superuser.com/a/889825/305990)
- [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_(Control_Sequence_Introducer)_sequences)
- [How to make git checkout files permission mode are 777?](https://stackoverflow.com/a/44616140/1413259)
- [cls command](https://ss64.com/nt/cls.html)

<br>
<br>

[![](https://img.youtube.com/vi/gUHejU7qyv8/maxresdefault.jpg)](https://www.youtube.com/watch?v=gUHejU7qyv8)
