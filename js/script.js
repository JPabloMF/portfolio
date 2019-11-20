AOS.init({ anchorPlacement: 'top-bottom' });

const App = (function() {
  const btnmenu = document.getElementById('btnmenu');
  const nav = document.getElementById('nav');

  const listItems = document.querySelectorAll('#menu li a');
  const sections = document.querySelectorAll('.section');
  const responsiveItems = document.querySelectorAll('.menu-responsive__item');
  const sectionPositions = {};
  let openIsOpened = false;

  // console.log(sections[1].getBoundingClientRect());
  // console.log(sections);

  function openMenu() {
    setTimeout(() => {
      nav.style.width = `${window.screen.width}%`;
      nav.style.height = `${window.screen.width}vh`;
      openIsOpened = true;
    }, 300);
  }

  function closeMenu() {
    setTimeout(() => {
      nav.style.width = `0`;
      nav.style.height = `0`;
      openIsOpened = false;
    }, 300);
  }

  function closeMenuWithItems() {
    responsiveItems.forEach((element) => {
      element.addEventListener('click', () => closeMenu());
    });
  }

  function setEventsBtnMenu() {
    btnmenu.addEventListener('click', () => {
      if (openIsOpened) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // nav.addEventListener('click', () => {
  //   // setTimeout(()=>{
  //   //   nav.style.transform = 'translateX(41vw) translateY(41vh)';
  //   // },300)

  // });

  function moveBackground() {
    const body = document.querySelector('body');
    let translation = 0;
    setInterval(() => {
      body.style.backgroundPositionX = -translation + 'px';
      body.style.backgroundPositionY = -translation + 'px';
      translation++;
    }, 100);
  }

  function selectItem(selectedElement) {
    listItems.forEach((element) => {
      if (element.hash === `#${selectedElement}`) {
        element.parentNode.classList.add('menu__item--active');
      } else if (selectedElement === '') {
        listItems[0].parentNode.classList.add('menu__item--active');
      } else {
        element.parentNode.classList.remove('menu__item--active');
      }
    });
  }

  function selectInitialItem() {
    const currentItem = window.location.hash;
    selectItem(currentItem.substr(1));
  }

  function getSectionPositions() {
    sections.forEach((element) => {
      sectionPositions[element.id] = element.getBoundingClientRect().top;
    });
  }

  function selectSectionWhenScroll() {
    window.onscroll = function(e) {
      if (
        this.scrollY >= sectionPositions.aboutme &&
        this.scrollY < sectionPositions.projects
      ) {
        selectItem('aboutme');
      } else if (
        this.scrollY >= sectionPositions.projects &&
        this.scrollY < sectionPositions.contact
      ) {
        selectItem('projects');
      } else if (this.scrollY >= sectionPositions.contact) {
        selectItem('contact');
      }
    };
  }

  // function scrollInSections() {
  //   window.onscroll = function(e) {
  //     // print "false" if direction is down and "true" if up
  //     console.log(this.oldScroll > this.scrollY);
  //     if (this.oldScroll > this.scrollY) {
  //     } else {
  //       // window.scrollTo({
  //       //   top: 500,
  //       //   behavior: 'smooth'
  //       // });
  //     }
  //     this.oldScroll = this.scrollY;
  //   };
  // }

  moveBackground();
  getSectionPositions();
  selectSectionWhenScroll();
  selectInitialItem();
  closeMenuWithItems();
  setEventsBtnMenu();
})();
