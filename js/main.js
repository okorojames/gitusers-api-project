const body = document.querySelector('body')
const lightMode = document.querySelector('.light--mode')
const darkMode = document.querySelector('.dark--mode')
const appWrap = document.querySelector('.app-wrap')
// LIGHT MODE
lightMode.addEventListener('click', function () {
  lightMode.style.display = 'none';
  darkMode.style.display = 'block';
  body.style.background = '#edf2ff';
  appWrap.classList.add('darkIt')
})
// DARK MODE
darkMode.addEventListener('click', function () {
  lightMode.style.display = 'block';
  darkMode.style.display = 'none';
  body.style.background = '#050814'
  appWrap.classList.remove('darkIt')
})