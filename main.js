const wordpressPanel = document.querySelector(".panels-container .wordpress");
const bloggerPanel = document.querySelector(".panels-container .blogger");
const wixPanel = document.querySelector(".panels-container .wix");

const wordpressBtn = document.querySelector(".tabs-container .wordpress-btn");
const bloggerBtn = document.querySelector(".tabs-container .blogger-btn");
const wixBtn = document.querySelector(".tabs-container .wix-btn");

const tabsContainer = document.querySelector(".tabs-container");

let activePanel = wordpressPanel;

const calculateHeight = () => {
  let panelHeight = activePanel.clientHeight;
  tabsContainer.style.marginBottom = panelHeight + "px";
};

calculateHeight();

const removeActiveFromAllPanels = () => {
  wordpressPanel.classList.remove("active");
  bloggerPanel.classList.remove("active");
  wixPanel.classList.remove("active");
};

const removeActiveFromAllBtns = () => {
  wordpressBtn.classList.remove("active");
  bloggerBtn.classList.remove("active");
  wixBtn.classList.remove("active");
};

wordpressBtn.addEventListener("click", () => {
  removeActiveFromAllPanels();
  wordpressPanel.classList.add("active");

  removeActiveFromAllBtns();
  wordpressBtn.classList.add("active");

  activePanel = wordpressPanel;
  calculateHeight();
});

bloggerBtn.addEventListener("click", () => {
  removeActiveFromAllPanels();
  bloggerPanel.classList.add("active");

  removeActiveFromAllBtns();
  bloggerBtn.classList.add("active");

  activePanel = bloggerPanel;
  calculateHeight();
});

wixBtn.addEventListener("click", () => {
  removeActiveFromAllPanels();
  wixPanel.classList.add("active");

  removeActiveFromAllBtns();
  wixBtn.classList.add("active");

  activePanel = wixPanel;
  calculateHeight();
});
