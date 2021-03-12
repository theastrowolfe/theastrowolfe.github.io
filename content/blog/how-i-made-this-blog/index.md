---
Title: "How I Made This Blog"
Date: "2019-08-28"
Tags: [web]
---

{{< warning >}}
Warning: You are about to read a blog post on how this blog was made - It's
getting meta.
{{< /warning >}}

{{< figure
img="hugo.png"
caption="Hugo: The world's fastest framework for building websites. [Credits](https://gohugo.io/)"
command="Resize"
options="400x"
>}}

This blog is made with [Hugo][hugo]. "The world’s fastest framework
for building websites."[^1] Basically, it is a static site generator built in
[go][go]. This means when it is time to build a website, it's very fast. However,
it doesn't make the actual building and tweaking of the site fast...

{{< linebreak >}}

I wouldn't agree with it's claim that it makes building websites fun again
either.  There is a large theme selection, which is initially helpful, but it was
impossible to find the right theme that had *everything*.  I ended up going with the
[Cupper][cupper] theme due to its simplistic design.  However, I had to tweak a
significant amount of small things to achieve the **exact** look and feel I wanted.

{{< linebreak >}}

Difficulties didn't stop there.  After revisiting this blog over a year later, I
quickly realized Hugo projects **are not** very portable.  This could be due to my
novice understanding of how Hugo worked, but was still an annoying inconvenience.
To build my website and begin posting again, I ended up learning the inner workings
of Hugo.  While this wasn't the easiest task, it did present the opportunity to
incorporate new features into my website.

{{< linebreak >}}

Overall, the experience was decent and I'm happy with the final result!  I recommend
[Hugo][hugo] if you're okay with momentary confusion throughout development and
experimenting with themes, layouts, configs, taxonomies, pages, and more.

[^1]: https://www.gohugo.io

[hugo]: https://www.gohugo.io
[go]: https://www.golang.org
[cupper]: https://themes.gohugo.io/cupper-hugo-theme/

