var f=0;
var sq=document.querySelectorAll(".square");
var buttons=document.querySelectorAll("button");
var h1=document.querySelector("h1");
var fspan=document.querySelector("span");

var colors=["rgb(255, 0, 0)",
			"rgb(255, 0, 255)",
			"rgb(0, 255, 0)",
			"rgb(0, 255, 255)",
			"rgb(255, 255, 0)",
			"rgb(0, 0, 255)"];

colorGenerator();
setcolor();
buttons[2].classList.add("cl");

// I CAN USE {
// 	button:hover{
// 		background-color: steelblue;
// 		color: white;
// 	}
// } IN CSS FILE 
// INSTEAD OF USING ALL THIS IN JS
// for(var i=0;i<buttons.length;i++){
// 	buttons[i].addEventListener("mouseover",function(){
// 		this.classList.add("cl");
// 	});
// }

// buttons[0].addEventListener("mouseout",function(){
// 	this.classList.remove("cl");
// });

// buttons[1].addEventListener("mouseout",function(){
// 	if(colors.length==6)
// 		this.classList.remove("cl");
// });

// buttons[2].addEventListener("mouseout",function(){
// 	if(colors.length==3)
// 		this.classList.remove("cl");
// });

for(var i=1;i<buttons.length;i++){
	buttons[i].addEventListener("click",function(){
		if(this.textContent==="easy"){
			colors=["rgb(255, 0, 0)",
					"rgb(0, 255, 0)",
					"rgb(0, 0, 255)"];
			for(var j=3;j<sq.length;j++){
				sq[j].style.display="none";
				//sq[j].style.backgroundColor="#232323";
			}
			f=0;
			colorGenerator();
			setcolor();
			fspan.textContent=" ";
			buttons[0].textContent="new colors";
			document.querySelector("#first").style.backgroundColor="steelblue";
			buttons[1].classList.add("cl");
			buttons[2].classList.remove("cl");
			buttons[3].classList.remove("cl");
		}
		else if(this.textContent==="hard"){
			colors=["rgb(255, 0, 0)",
					"rgb(255, 0, 255)",
					"rgb(0, 255, 0)",
					"rgb(0, 255, 255)",
					"rgb(255, 255, 0)",
					"rgb(0, 0, 255)"];
			for(var j=3;j<sq.length;j++){
				sq[j].style.display="block";
			}
			f=0;
			colorGenerator();
			setcolor();
			fspan.textContent=" ";
			buttons[0].textContent="new colors";
			document.querySelector("#first").style.backgroundColor="steelblue";
			buttons[1].classList.remove("cl");
			buttons[2].classList.add("cl");
			buttons[3].classList.remove("cl");
		}
		else{
			colors=["rgb(255, 0, 0)",
					"rgb(255, 0, 255)",
					"rgb(0, 255, 0)",
					"rgb(0, 255, 255)",
					"rgb(255, 255, 0)",
					"rgb(0, 0, 255)"];
			for(var j=3;j<sq.length;j++){
				sq[j].style.display="block";
			}
			f=1;
			colorGenerator();
			setcolor();
			fspan.textContent=" ";
			buttons[0].textContent="new colors";
			document.querySelector("#first").style.backgroundColor="steelblue";
			buttons[1].classList.remove("cl");
			buttons[2].classList.remove("cl");
			buttons[3].classList.add("cl");
		}
	});
}

buttons[0].addEventListener("click",function(){
	colorGenerator();
	setcolor();
	fspan.textContent=" ";
	buttons[0].textContent="new colors";
	document.querySelector("#first").style.backgroundColor="steelblue";
});

for(var i=0;i<colors.length;i++){
	sq[i].addEventListener("click",function(){
		if(h1.textContent===this.style.backgroundColor){
			fspan.textContent="correct";
			for(var j=0;j<colors.length;j++){
				sq[j].style.backgroundColor=h1.textContent;
			}
			document.querySelector("#first").style.backgroundColor=h1.textContent;
			buttons[0].textContent="play again?";
		}
		else{
			this.style.backgroundColor="#232323";
			if(f){
				fspan.textContent="game over";
				buttons[0].textContent="play again?";
				for(var i=0;i<colors.length;i++){
					sq[i].style.backgroundColor="#232323";
				}
			}
			else
				fspan.textContent="try again";
		}	
	});
}

function colorGenerator(){
	for(var i=0;i<colors.length;i++){
		var r=[];
		for(var j=0;j<3;j++){
			r.push(Math.floor(Math.random()*256));
		}
		colors[i]="rgb(" +r[0]+ ", " +r[1]+ ", " +r[2]+")";
	}
}

function setcolor(){
	for(var i=0;i<colors.length;i++){
		sq[i].style.backgroundColor=colors[i];
	}
	var i=Math.floor(Math.random()*(colors.length));
	h1.textContent=colors[i];
}
