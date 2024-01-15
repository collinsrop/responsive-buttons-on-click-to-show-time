"use strict";
const daysOfTheWeek =["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];
let currentDay=new Date().getDay();
let point1=document.querySelector("#day");
document.querySelector("#btn1").addEventListener("click", ()=>{
    point1.innerHTML=daysOfTheWeek[currentDay];
	if (point1.innerHTML == "Sun") {
    point1.style.color = "blue";
  } else if (point1.innerHTML == "Mon") {
    point1.style.color = "green";
  }else if (point1.innerHTML == "Tue") {
    point1.style.color = "Red";
  }else if (point1.innerHTML=="Wed") {
	point1.style.color = "grey";
  }else if (point1.innerHTML=="Thu") {
	point1.style.color = "Yellow";
  }else if (point1.innerHTML=="Fri") {
	point1.style.color = "Orange";
  }else if (point1.innerHTML=="Sat") {
	point1.style.color ="red";
  };
})
const monthsOfTheYear=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
let currentMonth=new Date().getMonth();
let point2=document.querySelector("#month");
document.querySelector("#btn2").addEventListener("click",()=>{
	point2.innerHTML=monthsOfTheYear[currentMonth];
});
document.querySelector("#btn3").addEventListener("click",()=>{
	document.querySelector("#year").innerHTML=new Date().getFullYear();
});
document.querySelector("body").style.background="linear-gradient(45deg,darkRed,black)";
//div combinations
document.querySelector("div").style.position="absolute";
document.querySelector("div").style.top="50%";
document.querySelector("div").style.left="50%";
document.querySelector("div").style.transform="translate(-50%, -50%)";
document.querySelector("div").style.padding="30px";
document.querySelector("div").style.fontFamily="cursive";
document.querySelector("div").style.fontSize="70px";
document.querySelector("div").style.border="1px solid red";
document.querySelector("div").style.borderRadius="10px";
document.querySelector("div").style.background="rgba(196,146,146)";
//display part
document.querySelector("#out").style.display="flex";
document.querySelector("#out").style.gap="40px";
//button part
document.querySelector("#btns").style.display="flex";//vertical display taken
document.querySelector("#btns").style.gap="150px";
//button background color
document.querySelector("#btn1").style.backgroundColor="red";
document.querySelector("#btn2").style.backgroundColor = "red";
document.querySelector("#btn3").style.backgroundColor = "red";
//border radius part
document.querySelector("#btn1").style.borderRadius = "50%";
document.querySelector("#btn2").style.borderRadius = "50%";
document.querySelector("#btn3").style.borderRadius = "50%";
//width  dimensions
document.querySelector("#btn1").style.width = "55px";
document.querySelector("#btn2").style.width = "55px";
document.querySelector("#btn3").style.width = "55px";
//height dimensions
document.querySelector("#btn1").style.height = "55px";
document.querySelector("#btn2").style.height = "55px";
document.querySelector("#btn3").style.height = "55px";
//light mode/dark mode
//switch case

