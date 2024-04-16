let icon = document.querySelector("#icon");
let nav = document.querySelector(".navdiv");
let header = document.querySelector("header");
let box = document.querySelector(".box");
let flag = 0;

icon.addEventListener("click", function () {
    if (flag == 0) {
        icon.innerHTML = '<i class="ri-close-line text-3xl"></i>'
        header.style.color = "#ECECEC"
        box.style.display = "block";
        gsap.to(nav, {
            y:"0%",
            ease: Power4,
        })
        flag = 1;
    }
    else {
         icon.innerHTML = '<i class="ri-menu-5-line text-2xl"></i>'
        header.style.color = "#0E0E0E"
        gsap.to(nav, {
            y:"-100%",
            ease: Power4,
        })
        box.style.display = "none";
        flag = 0;
    }

})

// box.addEventListener("click", function() {
//      if (flag == 0) {
//         flag = 1;
//     }
//     else {
//         flag = 0;
//     }
// })
