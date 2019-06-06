//let num = 37555;


function setup() {
  noCanvas();

	var bot = new RiveScript();
	bot.loadFile("brain.rive").then(brainok).catch(brainerror);

	function brainok(){
		console.log('chat bot load ok');
		 bot.sortReplies();
		 let num = floor(random(100))+1;
		  console.log(num);
		  let reply = bot.reply("local-user",'set '+num).then();
	}
	function brainerror(){
		console.log('chat bot error');
	}

  let button = select('#submit');
  let user_input = select('#user_input');
  let output = select('#output');
		button.mousePressed(chat);

	

  function chat()
  {
  	  let username = "local-user";
  		let input = user_input.value();
  		let reply =  bot.reply(username,input).then(function(reply)
  		 { console.log("The bot says: " + reply);
  	
  		 		output.html(reply);
			});
  	
  		
	}
}

