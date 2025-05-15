if ($response && $response.headers) {
  const headers = $response.headers;

  // 移除触发下载的字段
  if (headers['Content-Disposition']) {
    delete headers['Content-Disposition'];
  }

  // 设置为纯文本
  headers['Content-Type'] = 'text/plain; charset=utf-8';

  $done({ headers });
} else {
  $done({});
}
