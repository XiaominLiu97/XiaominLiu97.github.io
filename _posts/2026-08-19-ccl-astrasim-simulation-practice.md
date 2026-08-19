---
layout: default
title: "ccl算法astrasim仿真实践"
date: 2026-08-19
author: Xiaomin Liu
categories: [blog]
tags: [CCL, AstraSim, TE-CCL, distributed-training, simulation]
excerpt: "把 SIGCOMM 2024 的 TE-CCL 集合通信调度算法接入 AstraSim，并通过交互式拓扑、调度回放与仿真结果对比理解整个实践过程。"
---

<style>
  .ccl-sim-intro {
    margin: 1.25rem 0;
    padding: 1.2rem 1.35rem;
    border: 1px solid #dbe3ec;
    border-radius: 12px;
    background: linear-gradient(135deg, #f7fbff 0%, #f5f3ff 100%);
  }
  .ccl-sim-actions {
    display: flex;
    flex-wrap: wrap;
    gap: .7rem;
    margin-top: 1rem;
  }
  .ccl-sim-actions a {
    display: inline-block;
    padding: .6rem .95rem;
    border-radius: 8px;
    color: #fff;
    background: #2563eb;
    text-decoration: none;
    font-weight: 600;
  }
  .ccl-sim-actions a:last-child { background: #475569; }
  .ccl-sim-frame {
    width: 100%;
    height: min(78vh, 920px);
    min-height: 640px;
    margin-top: 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    background: #fff;
  }
  @media (max-width: 640px) {
    .ccl-sim-frame { min-height: 560px; height: 72vh; }
  }
</style>

# ccl算法astrasim仿真实践

<div class="ccl-sim-intro">
  本实践把 SIGCOMM 2024 的 TE-CCL 流量工程集合通信调度接入 AstraSim，展示从调度计划转换、Chakra 轨迹生成、自定义拓扑扩展，到仿真结果对比的完整流程。下方报告支持拓扑切换、链路查看和集合通信调度回放。

  <div class="ccl-sim-actions">
    <a href="{{ '/assets/astrasim-teccl/teccl.html' | relative_url }}" target="_blank" rel="noopener">全屏打开实验报告</a>
    <a href="{{ '/assets/astrasim-teccl/index.html' | relative_url }}" target="_blank" rel="noopener">查看 AstraSim 学习指南</a>
  </div>
</div>

<iframe
  class="ccl-sim-frame"
  src="{{ '/assets/astrasim-teccl/teccl.html' | relative_url }}"
  title="TE-CCL × AstraSim 交互式仿真实践"
  loading="lazy"
  allowfullscreen>
</iframe>

如果当前设备屏幕较小，建议点击“全屏打开实验报告”获得更完整的交互体验。
