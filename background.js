chrome.devtools.network.onRequestFinished.addListener(
    function(request) {
    //   if (request.response.bodySize > 40*1024) {
    //     chrome.devtools.inspectedWindow.eval(
    //         'console.log("Large image: " + unescape("' +
    //         escape(request.request.url) + '"))');
    //   }
    console.log(request)
    }
  );

// ScriptInjection = {
//     func : ()=>console.log("hi")
// }

// chrome.scripting.executeScript(
//     injection= ScriptInjection,
//     // callback = function,
//   )

// InjectDetails = {
//     file:"script.js"
// }

// chrome.tabs.executeScript(
//     // tabId?: number,
//     details= InjectDetails,
//     // callback?: function,
//   )