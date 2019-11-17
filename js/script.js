AOS.init({ anchorPlacement: 'top-bottom' });

const listItems = document.querySelectorAll('#menu li a');
const sections = document.querySelectorAll('.section');
const sectionPositions = {};
const currentSection = "aboutme"

// console.log(sections[1].getBoundingClientRect());
// console.log(sections);

function moveBackground() {
  const body = document.querySelector('body');
  let translation = 0;
  setInterval(() => {
    body.style.backgroundPositionX = -translation + 'px';
    body.style.backgroundPositionY = -translation + 'px';
    translation++;
  }, 10);
}

function selectItem(selectedElement) {
  listItems.forEach((element) => {
    if (element.hash === `#${selectedElement}`) {
      element.parentNode.classList.add('menu__item--active');
    } else {
      element.parentNode.classList.remove('menu__item--active');
    }
  });
}

function getSectionPositions() {
  sections.forEach((element) => {
    sectionPositions[element.id] = element.getBoundingClientRect().top;
  });
  console.log(sectionPositions);
}

function scrollInSections() {
  window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    console.log(this.oldScroll > this.scrollY);
    if (this.oldScroll > this.scrollY) {

    } else {
      window.scrollTo({
        top: 500,
        behavior: 'smooth'
      });
    }
    this.oldScroll = this.scrollY;
  };
}

moveBackground();
getSectionPositions();
scrollInSections();
