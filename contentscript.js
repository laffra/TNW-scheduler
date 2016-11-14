//
// inject tnw_scheduler.js
//
var js = document.createElement('script');
js.src = chrome.extension.getURL("tnw_scheduler.js");
document.head.appendChild(js);

//
// inject tnw_scheduler.css
//
var css = document.createElement('link');
css.rel = "stylesheet";
css.type = "text/css";
css.href = chrome.extension.getURL("tnw_scheduler.css");
document.head.appendChild(css);

console.log("TNW Scheduling Assistant Extension: Successfully loaded");
