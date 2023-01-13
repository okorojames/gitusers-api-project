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
//
// working on the functions
// 
const searchBtn = document.querySelector('.search-btn')
searchBtn.addEventListener('click', addInfoDetails)
// 
// 
function addInfoDetails(e) {
  //
  // VARIABLES
  // 
  e.preventDefault();
  const searchInput = document.querySelector('.search-input').value.trim();
  //
  // PROGRAMS
  if (searchInput === '') {
    alert('Enter username')
  } else {
    getGitUserDate()
    document.querySelector('.search-input').value = '';
  }
}
async function getGitUserDate() {
  const response = await fetch('https://api.github.com/users')
}