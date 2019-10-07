(function() {
  const el = document.querySelector("main");

  el.addEventListener("mousemove", e => {
    el.style.backgroundPositionX = -e.offsetX + "px";
    el.style.backgroundPositionY = -e.offsetY + "px";
  });
})();
