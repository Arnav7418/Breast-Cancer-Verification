let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const appointmentDate = document.getElementById('appointmentDate').value;
  const doctor = document.getElementById('doctor').value;
  const listItem = document.createElement('li');
  listItem.textContent = `${name} - ${appointmentDate} with ${doctor}`;
  ul.appendChild(listItem);
  form.reset();
});