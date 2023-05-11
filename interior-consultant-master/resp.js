
burger = document.querySelector('.burger')
headlist = document.querySelector('.head_list')
header = document.querySelector('.header')
lefthead = document.querySelector('.left_head')

burger.addEventListener('click', ()=>{
    headlist.classList.toggle('nav_visi');
    lefthead.classList.toggle('nav_visi');
    header.classList.toggle('nav_height');
    lefthead.classList.toggle('left_head_width');
}) 