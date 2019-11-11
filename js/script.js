(function() {
  AOS.init();
  
  function moveBackground() {
    const element = document.querySelector('body');
    let translation = 0;
    setInterval(()=>{
      element.style.backgroundPositionX = -translation + 'px';
      element.style.backgroundPositionY = -translation + 'px';
      translation++;
    },10)
  }
  
  function selectItemsMenu(){
    const elements = document.querySelectorAll('#menu li');
    const selectedElement = "";
  }

  var lastScrollTop = 0;
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  document.querySelector('body').addEventListener(
    'scroll',
    function() {
      // or window.addEventListener("scroll"....
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        // downscroll code
        console.log('downscroll');
      } else {
        // upscroll code
        console.log('upscroll');
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    false
  );

  moveBackground();
})();
