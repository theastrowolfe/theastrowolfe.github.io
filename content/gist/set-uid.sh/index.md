---
title: "set-uid.sh"
language: "bash"
bluf: "Set program's effective user ID to owner's ID"
date: 2021-03-09T01:19:23-06:00
tags: [linux]
draft: false
---

A Set-UID program is like any other Unix program, except that it has a special
marking, which is a single bit called a Set-UID bit. This tells the operating
system that when the process is executed it should have the **effective user
ID** of the **owner** user ID. This is privilege granted also applies to
child processes of this program.
