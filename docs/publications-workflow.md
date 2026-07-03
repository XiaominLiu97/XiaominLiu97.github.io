# Publications Workflow

论文项目现在存放在 `content/publications/`。每个项目一个文件夹，便于本地编辑，也会随 GitHub 仓库一起同步到云端。

## Folder Layout

```text
content/publications/
  manifest.json
  project-slug/
    metadata.json
    description.md
    image.jpg
```

`manifest.json` 控制首页说明文字、分区顺序和项目显示顺序。

每个项目的 `metadata.json` 控制标题、作者、链接、会议/期刊 badge、所属分区和图片路径。

每个项目的 `description.md` 控制网页上显示的要点描述，可以直接写 Markdown 列表。

## Update Locally

编辑某个项目文件夹里的 `metadata.json` 或 `description.md` 后，运行：

```powershell
python scripts\build_publications.py
```

这会重新生成 `_pages/includes/pub.md`，网站仍然按原来的样式显示。

## Add A New Paper

1. 在 `content/publications/` 下新建一个项目文件夹，例如 `my-new-paper/`。
2. 放入图片，例如 `my-new-paper.jpg`。
3. 新建 `metadata.json` 和 `description.md`。
4. 把 `my-new-paper` 加入 `content/publications/manifest.json` 的 `projects` 列表。
5. 运行 `python scripts\build_publications.py`。

## Sync To GitHub

本地更新完成后，运行：

```powershell
powershell -ExecutionPolicy Bypass -File scripts\sync_publications.ps1 -Message "Update publications"
```

脚本会拉取 GitHub 最新版本、重新生成 publications 页面、提交并推送到 `main` 分支。默认使用 `http://127.0.0.1:10808` 代理；如果你的代理端口变了，可以传入：

```powershell
powershell -ExecutionPolicy Bypass -File scripts\sync_publications.ps1 -Proxy "http://127.0.0.1:你的端口" -Message "Update publications"
```
