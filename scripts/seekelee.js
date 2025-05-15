
// change-ua.js
// ==UserScript==
// kelee-useragent.js
// Surge 兼容脚本，确保只保留一个 User-Agent
if ($request && $request.headers) {
  const headers = $request.headers;

  // 移除所有可能的 User-Agent 变种
  for (const key of Object.keys(headers)) {
    if (key.toLowerCase() === 'user-agent') {
      delete headers[key];
    }
  }

  // 设置新的 User-Agent
  headers['User-Agent'] = 'Loon/859 CFNetwork/1410.1 Darwin/22.6.0';
  $done({ headers });
} else {
  $done({});
}
