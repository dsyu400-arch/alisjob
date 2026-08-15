# 投资收益仪表盘

根据参考截图制作的响应式投资收益仪表盘，使用原生 HTML、CSS 和 JavaScript 实现，无需构建工具即可运行。

## 功能

- 总资产、当日、本月和年度收益概览
- SVG 折线图、仓位环形图和盈亏柱状图
- 持仓列表、清仓记录与交易记录标签切换
- 一键导出 UTF-8 CSV 持仓数据
- 桌面端、平板和移动端自适应布局
- 键盘可操作按钮与语义化辅助标签

## 本地运行

```bash
python3 -m http.server 4173
```

浏览器打开 `http://localhost:4173`。

## GitHub Packages

每次发布 GitHub Release 后，仓库会自动构建并发布两种包：

- npm：`@dsyu400-arch/alisjob`
- 容器镜像：`ghcr.io/dsyu400-arch/alisjob`

安装 npm 包：

```bash
npm install @dsyu400-arch/alisjob --registry=https://npm.pkg.github.com
```

运行容器镜像：

```bash
docker run --rm -p 8080:80 ghcr.io/dsyu400-arch/alisjob:latest
```

然后打开 `http://localhost:8080`。
