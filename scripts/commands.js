var commandsEN = [];
var commandsBG = [];
var commandsLength = commandsENText.length;
var commandSplit = [];
var i;

for(i = 0; i < commandsLength; i++){
	commandSplit = commandsENText[i].split(' - ');
	commandsEN.push(commandSplit);
	commandSplit = commandsBGText[i].split(' - ');
	commandsBG.push(commandSplit);
}

function changeCommandLanguage(commandsLanguage){
	$('#commands').html('');

	for(i = 0; i < commandsLength; i++){
		var tr = $('<tr/>');
		var commandName = $('<td/>').text(commandsLanguage[i][0]).css('width', '300px');
		var commandDescription = $('<td/>').text(commandsLanguage[i][1]);
		tr.append(commandName);
		tr.append(commandDescription);

		$('#commands').append(tr);
	}
}

$('#changeLanguage').click(function(){
	console.log($('#changeLanguage').val());
	switch($('#changeLanguage').val()){
		case 'Български': changeCommandLanguage(commandsBG); $('#changeLanguage').val('English'); document.title = 'Команди'; break;
		case 'English': changeCommandLanguage(commandsEN); $('#changeLanguage').val('Български'); document.title = 'Commands';break;
	}
});

changeCommandLanguage(commandsBG);
document.title = 'Команди';