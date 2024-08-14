let tabcontents = document.querySelector(".tab-content");
let tabs = document.querySelector(".tab-links");
tabs.addEventListener("onclick", function (tabname) {
  for (tabs of tabs) {
    tabs.classList.remove("active");
  }
  for (tabcontents of tabcontents) {
    tabcontents.classList.remove("active");
  }
});
