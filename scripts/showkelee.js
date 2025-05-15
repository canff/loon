// Loon Surge compatible
if ($response && $response.headers) {
  const headers = $response.headers;

  // 删除 Content-Disposition，避免下载
  if (headers['Content-Disposition']) {
    delete headers['Content-Disposition'];
  }

  // 设置文本显示类型
  headers['Content-Type'] = 'text/plain; charset=utf-8';

  $done({ headers });
} else {
  $done({});
}
