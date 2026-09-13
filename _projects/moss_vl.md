---
layout: page
title: MOSS-VL
subtitle: An open vision-language model family for image and video understanding
img: assets/img/publication_preview/moss_vl.png
importance: 2
date_text: 2026.04
links:
  - label: GitHub
    url: https://github.com/OpenMOSS/MOSS-VL
  - label: Technical Report
    url: https://arxiv.org/abs/2608.15045
---

MOSS-VL is an open vision-language model family for image and video understanding. Its offline model, MOSS-VL-Instruct, is competitive at comparable scale and leads temporal-reasoning video benchmarks.

As a core contributor, my work on this release covered the training-data stack — infrastructure, assembly and synthesis:

- Built the team's training-data infrastructure: video/image/text preprocessing and deduplication pipelines, MongoDB schema iteration and data import/export flows
- Owned training-data assembly and versioned delivery for pre-training stages 1–4 and SFT: dataset curation, token statistics, and mixture-ratio sampling
- Designed and implemented image/video caption augmentation schemes (random perturbation, multi-image sequence expansion, multi-image collage, multi-video interleaving, etc.); restructured image-grounding data into multi-turn, multi-image form
- Ran the model identity data synthesis pipeline end to end, producing 200K samples for pre-training stage 4 (long-context and annealing) and 50K for SFT
