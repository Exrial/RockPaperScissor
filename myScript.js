var array = [
	"rock",
	"paper",
	"scissor"
	];




	



function startRound(){
	let playerScore = 0;
	let compScore = 0;
	for(let i = 0;i<5;i++){
		var input= window.prompt("Enter input");
		var random= array[Math.floor(Math.random()*array.length)];
		console.log(random);
		var play = input.toLowerCase();
		if(play=="scissor" && random =="paper"){
			playerScore++;
			window.alert("Player wins this round");
		}
		else if(play=="scissor"&& random=="rock"){
			compScore++;
			window.alert("CPU wins this round!");
		}
		else if(play=="rock" && random == "paper"){
				compScore++;
				window.alert("CPU wins this round");
		}
		else if(play=="rock"&& random =="scissor"){
			playerScore++;
			window.alert("Player wins this round!");

		}
		else if(play=="paper" && random == "scissor"){
			compScore++;
			window.alert("CPU wins this round");
		}
		else if(play =="paper" && random =="rock"){
			playerScore++;
			window.alert("Player wins this round!");
		}
		else if(play == random){
			window.alert("Tie! No one wins this round");
		}
	}
	if(compScore>playerScore){
		window.alert("CPU Wins this game");
	}
	else if(playerScore>compScore){
		window.alert("Player wins this game");
	}
	else{
		window.alert("It is a tie");
	}

} 


startRound();