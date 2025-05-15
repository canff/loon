
// change-ua.js
// ==UserScript==
// kelee-useragent.js
if ($request && $request.headers) {
  const headers = $request.headers;
  headers['User-Agent'] = 'Loon/859 CFNetwork/1410.1 Darwin/22.6.0';
  $done({ headers });
} else {
  $done({});
}
