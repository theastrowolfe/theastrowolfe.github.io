---
title: "How I Made This Blog"
date: "2019-08-28"
tags: [Web, go]
---

{{% warning %}}
Warning: You are about to read a blog post on how this blog was made - It's
getting a little meta in here.
{{% /warning %}}

{{< figure
img="hugo.png"
caption="Hugo: The world's fastest framework for building websites. [Credits](https://gohugo.io/)"
command="Resize" 
options="400x"
>}}

This blog is made with [Hugo][hugo]. "The world’s fastest framework
for building websites."[^1] Basically, it's just a static site generator built
in [go][go]. When it comes time to compile, or build, the site it's pretty
fast. It obviously doesn't make actually building and tweaking the site fast
though.

<br>

I wouldn't agree with it's claim that it makes building websites fun again
either. There is a large theme selection which is nice. However, with so many
themes it's hard to find the right one. I ended up going with the
[cupper][cupper] theme since it was responsive and had a simple design to it.
I had to tweak a good bit of it after cloning to get the exact look and feel I
wanted. So, expect a pull request in the near future with my edits! 😁

<br>

Overall, the experience was decent and I'm happy with the results! I recommend
[Hugo][hugo] if you're okay with momentary confusion during development and
experimenting with themes, layouts, configs, taxonomies, pages, and more.

[^1]: https://www.gohugo.io

[hugo]: https://www.gohugo.io
[go]: https://www.golang.org
[cupper]: https://themes.gohugo.io/cupper-hugo-theme/

