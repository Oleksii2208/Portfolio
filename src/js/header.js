const refs = {
  navList: document.querySelector('.menu-link-header'),
  navMenu: document.querySelector('.nav-header'),
};

navList.addEventListener('click', () => {
  navMenu.classList.remove('visually-hidden');
});
