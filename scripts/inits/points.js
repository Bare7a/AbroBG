function initPoints()
{
	$("#pointsTake").click(function(e)
	{
		var output = '!furaj remove ' + $("#pointsUsername").val() + ' ' + $("#pointsPoints").val();
		copyToClipboard(output);
	});

	$("#pointsGive").click(function(e)
	{
		var output = '!furaj add ' + $("#pointsUsername").val() + ' ' + $("#pointsPoints").val();
		copyToClipboard(output);
	});
}