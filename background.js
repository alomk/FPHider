var current_user_agent = "Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0"
var checked = false

function rewriteUserAgentHeader(e) {
  if (!checked){
     return;
  }
  e.requestHeaders.forEach(function(header){
    if (header.name.toLowerCase() == "user-agent") {
      header.value = current_user_agent;
    }
  });
  return {requestHeaders: e.requestHeaders};
}


browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
);

function change_user_agent(s){
    console.log("hit");
    current_user_agent = s
}
