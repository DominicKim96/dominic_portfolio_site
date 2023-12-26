
/******************** welcome **********************/
let welcomeTxt = document.getElementsByClassName('welcomeTxt')[0];
let welcome = document.getElementsByClassName('welcome')[0];
let main = document.getElementsByClassName('main')[0];
let moonImgBox = document.getElementsByClassName('moonImgBox')[0];

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {
        welcomeTxt.style.transform = "translateY(0)";
    }, 1000);

    setTimeout(function () {
        welcomeTxt.style.transform = "translateY(-100%)";
    }, 3000);

    setTimeout(function () {
        welcome.style.height = "0";
    }, 3500);

    /************* main ***************/
    setTimeout(function () {
        main.style.opacity = "1";
    }, 3600);
    setTimeout(function () {
        moonImgBox.style.opacity = "1";
    }, 5000);

});

/************************************* 스크롤시 효과 **************************************/
let innerHeight = window.innerHeight;
let scrollY = window.scrollY;
let viewHeight = scrollY + innerHeight;

/********************* about me ************************/
let aboutmeLeft = document.getElementsByClassName('aboutmeLeft')[0];
let aboutmeRight = document.getElementsByClassName('aboutmeRight')[0];
let aboutmeActive = document.getElementsByClassName('aboutmeActive')[0];
/********************* skill ************************/
let skillBox = document.getElementsByClassName('skillBox')[0];
let skillBoxActive = document.getElementsByClassName('skillBoxActive')[0];
/********************* portfolio ************************/
let nudakeBack = document.getElementsByClassName('nudakeBack')[0];
let dogomiBack = document.getElementsByClassName('dogomiBack')[0];
let bottleJayBack = document.getElementsByClassName('bottleJayBack')[0];
/* **************** contact ***************** */
let contSL1 = document.getElementsByClassName('contSL1')[0];
let contSL2 = document.getElementsByClassName('contSL2')[0];
let contSL3 = document.getElementsByClassName('contSL3')[0];
let contactLine = document.getElementsByClassName('contactLine')[0];
window.addEventListener('scroll', function(){
    viewHeight = window.scrollY + innerHeight;
console.log("viewHeight: " + viewHeight);
/* aboutMe, skill, sideMenu */
    if(viewHeight >= 5020) {
         /* sideMenu */
        sideContact.style.transform = "translateX(-15%)";
        sideContact.style.fontSize = "30px";
        sideMain.style.transform = "translateX(0)";
        sideMain.style.fontSize = "20px";
        sideAboutme.style.transform = "translateX(0)";
        sideAboutme.style.fontSize = "20px";
        sideSkills.style.transform = "translateX(0)";
        sideSkills.style.fontSize = "20px";
        sideportfolio.style.transform = "translateX(0)";
        sideportfolio.style.fontSize = "20px";
    }
    else if(viewHeight >= 3120) {
        /* sideMenu */
        sideportfolio.style.transform = "translateX(-15%)";
        sideportfolio.style.fontSize = "30px";
        sideMain.style.transform = "translateX(0)";
        sideMain.style.fontSize = "20px";
        sideAboutme.style.transform = "translateX(0)";
        sideAboutme.style.fontSize = "20px";
        sideSkills.style.transform = "translateX(0)";
        sideSkills.style.fontSize = "20px";
        sideContact.style.transform = "translateX(0)";
        sideContact.style.fontSize = "20px";
    }
    else if(viewHeight >= 2130) {
        skillBox.classList.add('skillBoxActive');
        /* sideMenu */
        sideSkills.style.transform = "translateX(-15%)";
        sideSkills.style.fontSize = "30px";
        sideMain.style.transform = "translateX(0)";
        sideMain.style.fontSize = "20px";
        sideAboutme.style.transform = "translateX(0)";
        sideAboutme.style.fontSize = "20px";
        sideportfolio.style.transform = "translateX(0)";
        sideportfolio.style.fontSize = "20px";
        sideContact.style.transform = "translateX(0)";
        sideContact.style.fontSize = "20px";
    }
    else if(viewHeight >= 1400) {
        aboutmeLeft.classList.add('aboutmeActive');
        aboutmeRight.classList.add('aboutmeActive');
        /* sideMenu */
        sideAboutme.style.transform = "translateX(-15%)";
        sideAboutme.style.fontSize = "30px";
        sideMain.style.transform = "translateX(0)";
        sideMain.style.fontSize = "20px";
        sideSkills.style.transform = "translateX(0)";
        sideSkills.style.fontSize = "20px";
        sideportfolio.style.transform = "translateX(0)";
        sideportfolio.style.fontSize = "20px";
        sideContact.style.transform = "translateX(0)";
        sideContact.style.fontSize = "20px";
    }
    else if(viewHeight >= 0 && viewHeight <= 1400) {
        /* sideMenu */
        sideMain.style.transform = "translateX(-15%)";
        sideMain.style.fontSize = "30px";
        sideAboutme.style.transform = "translateX(0)";
        sideAboutme.style.fontSize = "20px";
        sideSkills.style.transform = "translateX(0)";
        sideSkills.style.fontSize = "20px";
        sideportfolio.style.transform = "translateX(0)";
        sideportfolio.style.fontSize = "20px";
        sideContact.style.transform = "translateX(0)";
        sideContact.style.fontSize = "20px";
    }

    /* portfolio */
    if(viewHeight >=3425) {
        // sideNav.style.color = "black";
        if(viewHeight >=3809) {
            nudakeBack.style.position = "fixed";
            nudakeBack.style.left = "50%";
            nudakeBack.style.width = "50%";
            dogomiBack.style.display = "block";
            // sideNav.style.color = "black";
            if(viewHeight >= 4200) {
                nudakeBack.style.opacity = "0";
                nudakeBack.style.transition = "0.5s";
                dogomiBack.style.opacity = "1";
                dogomiBack.style.transition = "0.5s";
                // sideNav.style.color = "black";
                if(viewHeight >= 5251) {
                    // sideNav.style.color = "white"; 
                }
            }
            else {
                nudakeBack.style.opacity = "1";
                dogomiBack.style.opacity = "0";
                dogomiBack.style.transition = "0s";
            }
        }
        else {
            nudakeBack.style.position = "absolute";
            nudakeBack.style.left = "100%";
            nudakeBack.style.width = "100%";
            nudakeBack.style.transition = "0s";
            dogomiBack.style.display = "none";
        }
    }
    // else { sideNav.style.color = "white"; }
/* contact */
    let scrollY = window.scrollY || document.documentElement.scrollTop;
// console.log(scrollY);
    if (scrollY >= 4050) {
        contactLine.style.opacity = '1';
        contSL1.style.transform = 'translate(-12%, -75%)';
        contSL2.style.transform = 'translate(2%, -75%)';
        contSL3.style.transform = 'translate(-12%, -75%)';
        if (scrollY >= 4150) {
            contSL1.style.transform = 'translate(-10%, -75%)';
            contSL2.style.transform = 'translate(0%, -75%)';
            contSL3.style.transform = 'translate(-10%, -75%)';
            if (scrollY >= 4250) {
                contSL1.style.transform = 'translate(-8%, -75%)';
                contSL2.style.transform = 'translate(-2%, -75%)';
                contSL3.style.transform = 'translate(-8%, -75%)';
                if (scrollY >= 4350) {
                    contSL1.style.transform = 'translate(-6%, -75%)';
                    contSL2.style.transform = 'translate(-4%, -75%)';
                    contSL3.style.transform = 'translate(-6%, -75%)';
                    if (scrollY >= 4450) {
                        contSL1.style.transform = 'translate(-4%, -75%)';
                        contSL2.style.transform = 'translate(-6%, -75%)';
                        contSL3.style.transform = 'translate(-4%, -75%)';
                        if (scrollY >= 4650) {
                            contSL1.style.transform = 'translate(-2%, -75%)';
                            contSL2.style.transform = 'translate(-8%, -75%)';
                            contSL3.style.transform = 'translate(-2%, -75%)';
                            if (scrollY >= 4750) {
                                contSL1.style.transform = 'translate(0%, -75%)';
                                contSL2.style.transform = 'translate(-10%, -75%)';
                                contSL3.style.transform = 'translate(0%, -75%)';
                                if (scrollY >= 4850) {
                                    contSL1.style.transform = 'translate(2%, -75%)';
                                    contSL2.style.transform = 'translate(-12%, -75%)';
                                    contSL3.style.transform = 'translate(2%, -75%)';
                                }
                            } 
                        } 
                    } 
                } 
            }  
        } 
    } 
    else {
        contSL1.style.transform = 'translate(-14%, -75%)';
        contSL2.style.transform = 'translate(4%, -75%)';
        contSL3.style.transform = 'translate(-14%, -75%)';
    }
});

/******************** sideNav **********************/
let sideNav = document.getElementsByClassName('sideNav')[0];
let sideMain = document.getElementsByClassName('sideMain')[0];
let sideAboutme = document.getElementsByClassName('sideAboutme')[0];
let sideSkills = document.getElementsByClassName('sideSkills')[0];
let sideportfolio = document.getElementsByClassName('sideportfolio')[0];
let sideContact = document.getElementsByClassName('sideContact')[0];

/* 클릭 */
sideMain.addEventListener("click", function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

sideAboutme.addEventListener("click", function() {
    window.scroll({
        top: 931,
        left: 0,
        behavior: 'smooth'
    });
});

sideSkills.addEventListener("click", function() {
    window.scroll({
        top: 1862,
        left: 0,
        behavior: 'smooth'
    });
});

sideportfolio.addEventListener("click", function() {
    window.scroll({
        top: 2793,
        left: 0,
        behavior: 'smooth'
    });
});

sideContact.addEventListener("click", function() {
    window.scroll({
        top: 5641,
        left: 0,
        behavior: 'smooth'
    });
});
