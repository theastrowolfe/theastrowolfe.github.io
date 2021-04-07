---
title: "set-uid.sh"
bluf: "Set program's effective user ID to owner's ID"
description: "
A Set-UID program is like any other Unix program,
except that it has a special marking, which is a
single bit called a Set-UID bit. This tells the
operating system that when the process is executed
it should have the **effective user ID** of the **owner**
user ID. This is privilege granted also applies to
child processes of this program.
"
usage: "./set-uid.sh myzsh"
output: "\n
"
date: 2021-03-09T01:19:23-06:00
tags: [bash, cybersecurity, unix]
draft: false
---

```bash
{{< readFile file="set-uid.sh" >}}
```


