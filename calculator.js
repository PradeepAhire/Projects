//custom function
function calculateTip(){
	//store data input
	let billAmount=document.getElementById("billAmount").value;
		let serviceQuality=document.getElementById("serviceQuality").value;
	let numPeople=document.getElementById("totalPeople").value;
	//Quick validation
	if(billAmount==="" || serviceQuality===0){
		window.alert("please enter the value first to get this working!");
		return;  //this will prevent the function from continuing
	}
	
	//check to see if this input is empty or less than equal to 1
	if(numPeople===""|| numPeople <=1 ) {
		numPeople=1;
		document.getElementById('each').style.display="none";
	}else{
		document.getElementById('each').style.display="block";
	}
	//do math
	let total=(billAmount * serviceQuality)/numPeople;
	 total= Math.round(total*100)/100;
	 total=total.toFixed(2);
	 //display the tip
	 document.getElementById("totalTip").style.display="block";
	 document.getElementById("tip").innerHTML=total;
}

//hide the tip amount on the load
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

//clicking the button calls our custom function
document.getElementById("calculate").onclick= function(){calculateTip();};