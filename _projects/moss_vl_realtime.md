---
layout: page
title: MOSS-VL-RealTime
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

MOSS-VL treats real-time interaction — perceiving while it speaks — as a first-class capability. Gated cross-attention with XRoPE lets the model keep watching incoming frames while generating, and a synthesized interaction corpus supervises when to speak, when to stay silent, and when to revise. MOSS-VL-Realtime posts the best average on three of four streaming benchmarks among open-source streaming models.

**My role — Core Contributor, SFT data owner:**

- Designed and finalized the SFT data recipe of 42 data buckets (QA-led mixture with category-uniform and per-bucket token-balanced sampling), and delivered three iterated versions; the final release (sft-0630-2) contains 7.56M training samples
- Independently developed `asb`, the team's automated training-data assembly tool: config-file driven, with per-bucket sampling, per-category deduplication, bitmap-based versioning and resumable assembly, plus built-in caption/OCR and interleaved-QA data augmenters
- Co-designed the team's data governance system: a three-axis dataset taxonomy with YAML-based configuration, legacy dataset migration, and automated category labeling
- Built needle-in-a-haystack (NIAH) synthetic augmentation data targeting the 8 task types of MMLongBench, in text and multi-image form
