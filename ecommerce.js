let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menu.addEventListner('click', () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  
});
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  if(window.scrollY > 150){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
  }
let countDate = new Date('may 5, 2023 00:00:00').getTime();
function CountDown(){
  let now= new Date().getTime();
  gap=countDate - now;

  let second = 1000;
  let minute = second*60;
  let hour = minute*60;
  let day = hour * 24;

  let d= Math.floor(gap / (day));
  let h= Math.floor((gap % (day)) / (hour));
  let m=Math.floor((gap % (hour)) / (minute));
  let s= Math.floor((gap % (minute)) / (second));

  document.getElementById('day').inneText = d;
  document.getElementById('hour').inneText = h;
  document.getElementById('minute').inneText = m;
  document.getElementById('second').inneText = s;
}
setInterval(function(){
  CountDown();
},1000)