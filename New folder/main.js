alert("hello from me")
alert("oooookooo")
let box=document.querySelector(".box")
let LB= document.querySelector(".left")
let RB= document.querySelector(".right")
RB.addEventListener("click",function(){
	let distance= box.style.left;
	if(!distance){
		distance="0px";
	}
	let newdistance=parseInt(distance)+50+"px";
	box.style.left=newdistance;
})
LB.addEventListener("click",function(){
	let distance= box.style.left;
	if(!distance){
		distance="0px";
	}
	let newdistance=parseInt(distance)-50+"px";
	box.style.left=newdistance;
})
LB.addEventListener("click",function(){
	let distance= box.style.left;
	if(!distance){
		distance="0px";
	}
	let newdistance=parseInt(distance)-50+"px";
	box.style.left=newdistance;
})

