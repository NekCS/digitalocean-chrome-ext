
// chrome.tabs.onUpdated.addListener(function(id, info, tab) {
// 	console.log(tab.url);
//   // if (tab.url.toLowerCase().indexOf("flipkart.com") > -1) {
//   //   chrome.pageAction.show(tab.id);
//   // }
// });

// on extension installed
 chrome.runtime.onInstalled.addListener(function() {
 	console.log('Extension installed')
 	
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      	chrome.declarativeContent.onPageChanged.addRules([{
        	conditions: [new chrome.declarativeContent.PageStateMatcher({
          	pageUrl: {urlContains: 'www.digitalocean.com/community/tutorials/'},
        	})
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      	}]);
    });

    chrome.webNavigation.onCompleted.addListener(function() {
	    alert("This is my favorite website!");
	    //chrome.declarativeContent.ShowPageAction();
	}, {url: [{urlMatches : 'https://www.google.com/'}]});
 });
