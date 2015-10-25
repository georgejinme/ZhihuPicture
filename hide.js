$(".zm-editable-content").each(function(){
	if ($(this).find("img").length == 0){
		$(this).css("display", "none")
	}else{
		var content = $(this).html()
		var startPos = -1;
		var realContent = ""
		while(true){
			var startPos = content.indexOf('<', startPos + 1)
			if (content.substr(startPos + 1, 8) == "noscript"){
				var begin = startPos
				while (true){
					startPos = content.indexOf('<', startPos + 1)
					if (content.substr(startPos + 1, 3) == "img"){
						var endPos = content.indexOf('>', startPos + 1)
						console.log(endPos + " end")
						realContent += content.substring(begin, endPos + 1)
						break;
					}
				}
			}
			if (startPos == -1){
				$(this).html(realContent)
				break;
			}
		}
		$(this).find("img").each(function(){
			var src = $(this).attr("data-actualsrc")
			$(this).attr("src", src)
		})
	}
})