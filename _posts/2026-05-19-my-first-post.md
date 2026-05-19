---
layout: default
title: "AI及AI系统的学习材料汇总"
date: 2026-05-19
author: Xiaomin Liu
categories: [blog]
tags: [welcome]
---

# Welcome to My First Blog Post

- 并行通信（distributed training parallelsim）：https://zhuanlan.zhihu.com/p/655939356
- 中科大郑烇b站计算机网络 讲了类似alpha-beta计算https://www.bilibili.com/video/BV1JV411t7ow?spm_id_from=333.788.videopod.episodes&vd_source=c007795d296b25971bfa989ca8c1b43e&p=8
- 英伟达collective communication材料
    
    [NCCL-Woolley.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/d62e1969-cbf9-4d24-9e60-3d306ee8999d/NCCL-Woolley.pdf)
    
- Gurobi 学习材料

[Gurobi Tutorial](https://www.notion.so/Gurobi-Tutorial-f46231e26c7a445392a733d86a6461a7?pvs=21)

- TECCL talk
    
    GitHub：https://github.com/microsoft/TE-CCL
    
    Conference talk：https://www.youtube.com/watch?v=ChjWIwM87LY
    
- Collective Communication 的相关review！
    
    [Wei et al_2024_Communication Optimization for Distributed Training.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/f46a876b-fb4f-4e40-8314-01fff3d232e0/Wei_et_al_2024_Communication_Optimization_for_Distributed_Training.pdf)
    
- **深度学习的分布式训练与集合通信（by 昇腾AI开发者）**

Part1

https://www.bilibili.com/opus/997347047443005495?spm_id_from=333.1387.0.0

Part2

https://www.bilibili.com/opus/1002538906998013960

- 跨数据中心训练
    
    [智算时代全光运力应用研究报告.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/c7e6a31a-31cd-44f5-b4a2-db735ed37c73/%E6%99%BA%E7%AE%97%E6%97%B6%E4%BB%A3%E5%85%A8%E5%85%89%E8%BF%90%E5%8A%9B%E5%BA%94%E7%94%A8%E7%A0%94%E7%A9%B6%E6%8A%A5%E5%91%8A.pdf)
    
- 不同并行方式及对应通信范式整理
    - All-Reduce公式推导（Section 2.2）
        
        [Jiang 等 - A Uniﬁed Architecture for Accelerating Distributed.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/6dfe1467-2f02-4928-bcef-70b697f353a6/Jiang_%E7%AD%89_-_A_Unied_Architecture_for_Accelerating_Distributed.pdf)
        
    - 数据并行+流水线并行在跨云通信当中的公式推导
        
        [Strati 等 - 2024 - ML Training with Cloud GPU Shortages Is Cross-Reg.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/bef14108-23a7-4498-bdef-ccdd7e248bd6/Strati_%E7%AD%89_-_2024_-_ML_Training_with_Cloud_GPU_Shortages_Is_Cross-Reg.pdf)
        
    - 各种混合并行方式的整理
        
        [Kahira et al_2021_An Oracle for Guiding Large-Scale Model-Hybrid Parallel Training of.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/598c9cf5-d64c-4277-a84b-fa2b1eff6377/Kahira_et_al_2021_An_Oracle_for_Guiding_Large-Scale_Model-Hybrid_Parallel_Training_of.pdf)
        
    - 大模型分布式训练特性解读（包含不同并行方式的拆解）
        
        [Li et al_2024_Understanding Communication Characteristics of Distributed Training.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/33e750aa-9517-4d3b-ac28-8d8cd21c39d6/Li_et_al_2024_Understanding_Communication_Characteristics_of_Distributed_Training.pdf)
        
- 分布式训练并行方式论文库
    - https://github.com/DicardoX/Research-Space
- 一系列算力网络白皮书
    
    [绿色算力技术创新研究报告.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/b8a03a7e-ca09-47bd-9458-dbf042208b45/%E7%BB%BF%E8%89%B2%E7%AE%97%E5%8A%9B%E6%8A%80%E6%9C%AF%E5%88%9B%E6%96%B0%E7%A0%94%E7%A9%B6%E6%8A%A5%E5%91%8A.pdf)
    
    [全光运力研究报告.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/299b1ef5-8a06-4e88-83a8-8465cc9e7fee/%E5%85%A8%E5%85%89%E8%BF%90%E5%8A%9B%E7%A0%94%E7%A9%B6%E6%8A%A5%E5%91%8A.pdf)
    
    []()
    
    [数据中心智能化运维发展研究报告.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/c6c8a614-fa1c-4871-a9c5-a649fe26d61e/%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%99%BA%E8%83%BD%E5%8C%96%E8%BF%90%E7%BB%B4%E5%8F%91%E5%B1%95%E7%A0%94%E7%A9%B6%E6%8A%A5%E5%91%8A.pdf)
    
    [算力时代的全光底座白皮书.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/4a6f5704-8836-4bbc-bedc-e86c429ea302/%E7%AE%97%E5%8A%9B%E6%97%B6%E4%BB%A3%E7%9A%84%E5%85%A8%E5%85%89%E5%BA%95%E5%BA%A7%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf)
    
    [算力时代全光网架构研究报告.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/c2341005-0c22-4a89-a2b2-87e10080a039/%E7%AE%97%E5%8A%9B%E6%97%B6%E4%BB%A3%E5%85%A8%E5%85%89%E7%BD%91%E6%9E%B6%E6%9E%84%E7%A0%94%E7%A9%B6%E6%8A%A5%E5%91%8A.pdf)
    
    []()
    
    [智算基础设施发展研究报告_副本.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/e641a78d-2125-4326-9cef-00dc511038a5/%E6%99%BA%E7%AE%97%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD%E5%8F%91%E5%B1%95%E7%A0%94%E7%A9%B6%E6%8A%A5%E5%91%8A_%E5%89%AF%E6%9C%AC.pdf)
    
    [智算基础设施发展研究报告.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/a209de99-f304-4c2c-b624-4d293b1c9b0c/%E6%99%BA%E7%AE%97%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD%E5%8F%91%E5%B1%95%E7%A0%94%E7%A9%B6%E6%8A%A5%E5%91%8A.pdf)
    
    [中国人工智能系列白皮书-大模型系列.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/f354a516-89f9-4540-b63e-de246dcf8721/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E7%B3%BB%E5%88%97%E7%99%BD%E7%9A%AE%E4%B9%A6-%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%B3%BB%E5%88%97.pdf)
    
    [中国移动自动驾驶白皮书.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d511739-a6ff-4bbc-a1a9-d1f58cc216d2/d9a79365-2cbb-4969-b428-8a3f3423ce62/%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf)
    
- 华为HCCL手册
    
    https://www.hiascend.com/document/detail/zh/canncommercial/80RC3/developmentguide/hccl/hcclug/hcclug_000009.html
    
- 集合通信技术
    
    https://mp.weixin.qq.com/s/oTIYRJV-pqwgg8S7uBb25A