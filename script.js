const topButton=document.querySelector('.top-button');
const sections=[...document.querySelectorAll('.page')];
const navLinks=[...document.querySelectorAll('nav a')];
const update=()=>{topButton.classList.toggle('show',scrollY>700);let y=scrollY+120;let active=sections.find(s=>y>=s.offsetTop&&y<s.offsetTop+s.offsetHeight);navLinks.forEach(a=>a.classList.toggle('active',active&&a.getAttribute('href')==='#'+active.id));};
addEventListener('scroll',update,{passive:true}); update();
topButton.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>img.closest('figure,.hero-portrait')?.classList.add('missing')));
