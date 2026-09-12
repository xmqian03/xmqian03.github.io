---
layout: about
title: About
permalink: /
subtitle:

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info:

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a first-year PhD student at [Fudan University](https://www.fudan.edu.cn/en/), working with the Vision Group of the [OpenMOSS](https://www.open-moss.com/) team (also known as [FNLP-Vision](https://github.com/fnlp-vision)), under the supervision of Prof. [Xipeng Qiu](https://xpqiu.github.io/). I received my B.Eng. degree from the [School of Software](https://software.nju.edu.cn/), [Nanjing University](https://www.nju.edu.cn/en/). I conduct my research as a research intern at [MOSI Intelligence](http://mosi-ai.com/) (模思智能), the startup founded by Prof. Qiu, where the MOSS-VL model family is built.

My research focuses on **multimodal video understanding** with large foundation models. I am broadly interested in building and improving multimodal foundation models, with the goal of enabling machines to perceive, comprehend, and reason over visual content — particularly in the video domain. My current work explores how to effectively integrate visual and linguistic information to advance video understanding capabilities.

I am a core contributor to the [MOSS-VL](https://github.com/OpenMOSS/MOSS-VL) model family, where I work on training data end to end. I built the team's data infrastructure — preprocessing and deduplication pipelines, MongoDB schema iteration and import/export flows — and I own training-data assembly and versioned delivery across pre-training stages and SFT, most recently designing and delivering the 42-bucket SFT recipe (7.6M samples) behind the MOSS-VL-Realtime release. I also design large-scale data synthesis and enhancement pipelines (image/video captioning, identity data, needle-in-a-haystack tasks) and contribute to the team's data governance system.
