
function onRequest(info, tab) {
	var selection = info.selectionText;
//do something with the selection
  var serviceCall = 'https://www.startpage.com/do/dsearch?cat=web&pl=opensearch&language=english&query=' + encodeURIComponent(selection);
  chrome.tabs.create({url: serviceCall});
};

chrome.contextMenus.create({
	id: "startpage_search",
	title: "Search with Startpage",
	"contexts":["selection"],
	"onclick" : onRequest
});
