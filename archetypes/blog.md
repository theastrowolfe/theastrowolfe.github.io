---
title: "{{ replace .Name "-" " " | title }}"
bluf: ""
date: {{ .Date }}
lastmod: {{ .Date }}
tags: []
draft: true
toc: true
---

{{< figure
img="HERO.jpg"
caption="Caption of photo. [Credits]("http://gohugo.io.")"
command="Resize"
options=800x"
>}}

This is a paragraph. "This is a quote!"[^1]

{{< linebreak >}}

This is another paragraph, but with a link to [Hugo][hugo]!

[^1]: https://www.gohugo.io

[hugo]: https://www.gohugo.io
