var clicked = false
chrome.browserAction.onClicked.addListener(function(tab) {
	if (clicked == false){
		chrome.browserAction.setIcon({path:"icon.png"})
		chrome.tabs.executeScript(null, {file:"hide.js"})
		clicked = true
	}else{
		chrome.browserAction.setIcon({path:"icon1.png"})
		chrome.tabs.executeScript(null, {file:"resume.js"})
		clicked = false
	}
});