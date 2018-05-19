$(".RichContent-inner").each(function(){
	if ($(this).find("img").length == 0){
		$(this).css("display", "none")
	}else{
		var content = "";
		$(this).find("img").each(function(index, img) {
			content += img.outerHTML;
		})
		$(this).html(content);
	}
})