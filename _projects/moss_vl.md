---
layout: page
title: MOSS-VL (0408)
description: 0408 release — data infrastructure and full-stage training data assembly
img: assets/img/publication_preview/moss_vl.png
importance: 2
category: work
---

**2026.04 release** · [GitHub](https://github.com/OpenMOSS/MOSS-VL) · [Technical Report](https://arxiv.org/abs/2608.15045)

The first independently trained run of the MOSS-VL architecture, released alongside the 0708 family for research continuity. My work on this cycle covered the data stack from raw datasets to delivered training mixtures.

**My role — Core Contributor, data infrastructure & assembly:**

- Built the team's training-data infrastructure from scratch: video/image/text preprocessing, exact-match deduplication (streamed to bound memory), and MongoDB ingestion — the first batch onboarded 478 datasets with ~66M QA pairs, ~66.4M images and ~4.1M videos
- Owned training-data assembly and iterated delivery for all four pre-training stages and SFT: dataset curation, token statistics, and mixture-ratio sampling
- Designed and implemented image/video caption augmentation schemes (multi-image sequence expansion, multi-image collage, multi-video interleaving, etc.)
- Ran the full identity-data pipeline — detection, rewriting, and synthesis — delivering 200K samples for annealing and 50K for SFT
