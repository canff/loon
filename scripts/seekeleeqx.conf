/**
 * @fileoverview 在线预览 Remove_ads_by_keli.plugin 并修改 UA
 */

const headers = $response.headers;

// 修改响应头的 Content-Disposition 为 inline（实现在线预览）
if (headers["Content-Disposition"]) {
  headers["Content-Disposition"] = headers["Content-Disposition"].replace("attachment", "inline");
} else {
  headers["Content-Disposition"] = "inline";
}

// 修改 Content-Type 为 text/plain（确保内容直接显示）
headers["Content-Type"] = "text/plain; charset=utf-8";

// 修改 User-Agent
const requestHeaders = $request.headers;
requestHeaders["User-Agent"] = "Shadowrocket/2441 CFNetwork/1410.1 Darwin/22.6.0";

// 返回修改后的响应和请求头
$done({ headers });
