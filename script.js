const dom_container_scroll = document.querySelector(".teste");
const dom_bar_progress = document.createElement('div');

dom_bar_progress.style.backgroundColor ="#d1d1d1";
dom_bar_progress.style.height = "10px";
dom_bar_progress.style.width = "0"
dom_bar_progress.style.position = "fixed";
dom_bar_progress.style.top = "0";
dom_bar_progress.style.left = "0";
dom_bar_progress.style.zIndex = "999";
dom_bar_progress.style.transition = "0.2s";

document.body.append(dom_bar_progress);

const update_barProgress = () => {
  const dom_container = dom_container_scroll.offsetHeight;
  const dom_positionY_page= window.pageYOffset;
  const status_bar_progress = dom_positionY_page * 100 / dom_container;
  console.log(status_bar_progress);
	dom_bar_progress.style.width = status_bar_progress + "%";
}

window.addEventListener( "load", () => {
	document.addEventListener( "scroll", update_barProgress );
})