if (document.querySelector('#element')){
  var typed = new Typed('#element', {
      strings: ['Web Developer', 'Machine Learning Enthusiast','Movie Lover','Game Enthusiast'],
      typeSpeed: 100,
      backSpeed:100,
      backDelay:1000,
      loop: true,
    });
}

  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-content");

  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
  }

  // Mobile menu toggle
  const menuToggleButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuCloseButton = document.querySelector('.menu-close');
  const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  function openMobileMenu(){
    if(!mobileMenu) return;
    mobileMenu.hidden = false;
    document.body.style.overflow = 'hidden';
    if(menuToggleButton){
      menuToggleButton.setAttribute('aria-expanded','true');
    }
  }

  function closeMobileMenu(){
    if(!mobileMenu) return;
    mobileMenu.hidden = true;
    document.body.style.overflow = '';
    if(menuToggleButton){
      menuToggleButton.setAttribute('aria-expanded','false');
    }
  }

  if(menuToggleButton && mobileMenu){
    menuToggleButton.addEventListener('click', openMobileMenu);
  }
  if(menuCloseButton && mobileMenu){
    menuCloseButton.addEventListener('click', closeMobileMenu);
  }
  if(mobileMenuLinks && mobileMenuLinks.length){
    mobileMenuLinks.forEach(function(link){
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // -------------cursor-------------

const cursor = document.querySelector(".cursor");

let timeout;

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.display = "block";

    // Reset the timer every time the mouse moves
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        cursor.style.display = "none";
    }, 1000);
});

// Hide cursor when mouse leaves the page
document.addEventListener("mouseout", (e) => {
    if (!e.relatedTarget) {
        cursor.style.display = "none";
    }
});

// ================= SEE MORE PROJECTS =================

/* =========================================================
   SEE MORE / SEE LESS PROJECTS
   ========================================================= */

const seeMoreBtn = document.getElementById("seeMoreBtn");
const portfolio = document.getElementById("portfolio");

if (seeMoreBtn && portfolio) {

    seeMoreBtn.addEventListener("click", function () {

        portfolio.classList.toggle("show-projects");


        if (portfolio.classList.contains("show-projects")) {

            seeMoreBtn.textContent = "See Less";

        } else {

            seeMoreBtn.textContent = "See More";

        }

    });

}



const mobileLinks = document.querySelectorAll(".mobile-menu ul li a");

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

mobileLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});