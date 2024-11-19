
// change-ua.js
// ==UserScript==
const modifiedUA = "Shadowrocket/2441 CFNetwork/1410.1 Darwin/22.6.0";

if ($request.headers) {
  let headers = $request.headers;
  headers['User-Agent'] = modifiedUA;
  $done({headers: headers});
} else {
  $done({});
}
// ==/UserScript==
