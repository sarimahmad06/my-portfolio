let hirebtn = document.getElementById("hirebtn");
hirebtn.addEventListener("click" ,function  () {
 alert("Contact Page Coming Soon")
});

let herobtn = document.getElementById("herobtn");
let projects = document.getElementById("projects")

herobtn.addEventListener("click" ,function(){

    projects.scrollIntoView({
    behavior: "smooth"
});
});


const skillsSection = document.getElementById("skills") 
const progerssBars = document .querySelectorAll(".progress")
const observer = new IntersectionObserver (function(entries){
if(entries[0].isIntersecting)
{ progerssBars[0].style.width = "55%";
     progerssBars[1].style.width = "40%";
      progerssBars[2].style.width = "30%";
       progerssBars[3].style.width = "70%";
        progerssBars[4].style.width = "50%";
     } 
    }); 
     
     observer.observe(skillsSection);

