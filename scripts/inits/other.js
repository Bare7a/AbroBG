function initOther()
{
	$("#otherSkip").click(function (e){
		var output = "!veto";
		copyToClipboard(output);
	});

	$("#otherVolume").click(function (e){
		var output = "!volume " + $("#otherVariable").val();
		copyToClipboard(output);
	});

	$("#otherBan").click(function (e){
		var output = "/w 6efaTuk !ban " + $("#otherVariable").val() + " " + $("#otherReason").val();
		copyToClipboard(output);
	});

	$("#otherTimeout").click(function (e){
		var output = "/w 6efaTuk !timeout " + $("#otherVariable").val() + " " + $("#otherReason").val();;
		copyToClipboard(output);
	});

	$("#otherName").click(function (e){
		var output = "!status " + $("#otherVariable").val();
		copyToClipboard(output);
	});

	$("#otherGame").click(function (e){
		var output = "!game " + $("#otherVariable").val();
		copyToClipboard(output);
	});
}