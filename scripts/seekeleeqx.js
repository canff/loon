/**
 * @fileoverview Online Preview for Remove_ads_by_keli.plugin
 */

const headers = $response.headers;

// 修改 Content-Disposition
if (headers["Content-Disposition"]) {
  headers["Content-Disposition"] = headers["Content-Disposition"].replace("attachment", "inline");
} else {
  headers["Content-Disposition"] = "inline";
}

// 修改 Content-Type（可选）
headers["Content-Type"] = "text/plain; charset=utf-8";

// 返回修改后的响应
$done({ headers });
