const about = document.getElementById('aboutMe');
const project = document.getElementById('projects');

function fade(){
  const aboutPos = about.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (aboutPos < screenPos){
    about.style.opacity = '1';
    about.style.transform = 'translateY(0px)'
  }
}
function fadeForProject(){
  const projectPos = project.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (projectPos < screenPos){
    project.style.opacity = '1';
    project.style.transform = 'translateY(0px)'
  }
}
window.addEventListener('scroll', fade);
window.addEventListener('scroll', fadeForProject);