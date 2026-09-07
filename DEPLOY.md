# 阿里云自动部署

推送到 `main`（或在 Actions 里手动 Run workflow）后，GitHub Actions 会：

1. 运行 `node build.mjs` 生成 `dist/`
2. 用 rsync 同步到 ECS `/var/www/portfolio/`（保留服务器上的 `.well-known`）
3. 执行 `sudo nginx -t && sudo systemctl reload nginx`

## 一次性配置

### 1. 服务器（Workbench）

把部署公钥追加到 `ecs-user` 的 `authorized_keys`，并允许无密码执行 nginx 重载。

### 2. GitHub Secrets

| Name | Value |
| --- | --- |
| `ALIYUN_HOST` | `47.94.159.13` |
| `ALIYUN_USER` | `ecs-user` |
| `ALIYUN_SSH_KEY` | 部署私钥全文 |
| `ALIYUN_PORT` | 可选；默认 22 |

### 3. 验证

Actions → Deploy to Aliyun → Run workflow。HTTPS 证书需另行检查。
