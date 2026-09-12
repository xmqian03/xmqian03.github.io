---
layout: page
title: MOSS-VL (0408)
subtitle: Data infrastructure and full-stage training data assembly
img: assets/img/publication_preview/moss_vl.png
importance: 2
date_text: 2026.04
links:
  - label: GitHub
    url: https://github.com/OpenMOSS/MOSS-VL
  - label: Technical Report
    url: https://arxiv.org/abs/2608.15045
---

The first independently trained run of the MOSS-VL architecture, released alongside the 0708 family for research continuity. My work on this cycle covered the data stack from raw datasets to delivered training mixtures.

**My role — Core Contributor, data infrastructure, assembly & synthesis:**

- Built the team's training-data infrastructure: video/image/text preprocessing and deduplication pipelines, MongoDB schema iteration and data import/export flows
- Owned training-data assembly and versioned delivery for pre-training stages 1–4 and SFT: dataset curation, token statistics, and mixture-ratio sampling
- Designed and implemented image/video caption augmentation schemes (random perturbation, multi-image sequence expansion, multi-image collage, multi-video interleaving, etc.); restructured image-grounding data into multi-turn, multi-image form
- Ran the model identity data synthesis pipeline end to end, producing 200K samples for pre-training stage 4 (long-context and annealing) and 50K for SFT
