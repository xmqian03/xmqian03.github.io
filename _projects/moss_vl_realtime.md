---
layout: page
title: MOSS-VL-Realtime
subtitle: An open vision-language model family for real-time interaction
img: assets/img/publication_preview/moss_vl.png
importance: 1
date_text: 2026.07
links:
  - label: GitHub
    url: https://github.com/OpenMOSS/MOSS-VL
  - label: Technical Report
    url: https://arxiv.org/abs/2608.15045
  - label: Demo
    url: https://openmoss.github.io/MOSS-VL-Demo/#/
  - label: Blog
    url: https://openmoss.ai/MOSS-VL/
---

MOSS-VL-Realtime treats real-time interaction — perceiving while it speaks — as a first-class capability: gated cross-attention lets the model keep watching incoming frames while generating, and a synthesized interaction corpus supervises when to speak, stay silent, or revise. It posts the best average on three of four streaming benchmarks among open-source streaming models.

As a core contributor, my work on this release spanned data assembly, tooling, governance and synthesis:

- Owned training-data assembly and versioned delivery for pre-training stages 1–4 and SFT: dataset curation, token statistics, and mixture-ratio sampling
- Developed `asb`, the team's automated training-data assembly tool: config-file driven, per-bucket sampling, per-category deduplication, bitmap-based versioning and resumable assembly, with built-in caption/OCR and interleaved-QA augmenters
- Co-designed the team's data governance system: a dataset taxonomy of 32 categories with YAML-based configuration; migrated legacy datasets with old-to-new category mapping and model-assisted labeling
- Built homologous synthetic data for needle-in-a-haystack (NIAH) tasks, covering the 8 task types of MMLongBench's NIAH track (text and image needles) — 100K samples for pre-training stage-4 annealing and 30K for SFT
