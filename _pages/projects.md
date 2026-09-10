---
layout: page
title: Projects
permalink: /projects/
description: Model releases I have contributed to as a member of the OpenMOSS team.
nav: true
nav_order: 3
---

<!-- pages/projects.md -->
{% assign sorted_projects = site.projects | sort: "importance" %}

<div class="release-list">
  {% for project in sorted_projects %}
    <div class="release-item">
      {% if project.img %}
        <div class="release-thumb">
          <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
        </div>
      {% endif %}
      <div class="release-main">
        <div class="release-head">
          <span class="release-title">{{ project.title }}</span>
          {% if project.date_text %}
            <span class="release-date">{{ project.date_text }}</span>
          {% endif %}
        </div>
        {% if project.subtitle %}
          <p class="release-desc">{{ project.subtitle }}</p>
        {% endif %}
        {% if project.links %}
          <div class="release-links">
            {% for link in project.links %}
              <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
            {% endfor %}
          </div>
        {% endif %}
        <div class="release-content">
          {{ project.content }}
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<style>
  .release-list {
    margin-top: 0.5rem;
  }
  .release-item {
    display: flex;
    gap: 1.6rem;
    padding: 1.8rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .release-item:first-child {
    padding-top: 0.5rem;
  }
  .release-item:last-child {
    border-bottom: none;
  }
  .release-thumb {
    flex: 0 0 220px;
  }
  .release-thumb img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  }
  .release-main {
    flex: 1;
    min-width: 0;
  }
  .release-head {
    display: flex;
    align-items: baseline;
    gap: 0.7rem;
    flex-wrap: wrap;
  }
  .release-title {
    font-size: 1.3rem;
    font-weight: 600;
  }
  .release-date {
    font-size: 0.78rem;
    color: var(--global-theme-color);
    border: 1px solid var(--global-theme-color);
    border-radius: 999px;
    padding: 0 0.6rem;
    white-space: nowrap;
  }
  .release-desc {
    color: var(--global-text-color-light);
    margin: 0.15rem 0 0.5rem;
  }
  .release-links {
    margin-bottom: 0.6rem;
  }
  .release-links a {
    display: inline-block;
    font-size: 0.8rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    padding: 1px 10px;
    margin: 0 0.4rem 0.3rem 0;
    color: var(--global-text-color);
  }
  .release-links a:hover {
    color: var(--global-theme-color);
    border-color: var(--global-theme-color);
    text-decoration: none;
  }
  .release-content p {
    margin-bottom: 0.5rem;
  }
  .release-content ul {
    padding-left: 1.2rem;
    margin-bottom: 0;
  }

  @media (max-width: 640px) {
    .release-item {
      flex-direction: column;
      gap: 0.8rem;
    }
    .release-thumb {
      flex: none;
    }
    .release-thumb img {
      height: 160px;
    }
  }
</style>
