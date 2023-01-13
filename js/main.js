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
    getGitUserData(searchInput)
    document.querySelector('.search-input').value = '';
  }
}


async function getGitUserData(username) {
  //
  //
  const displayInfoName = document.querySelector('.display-info-name')
  //
  // 
  const contentContainer = document.querySelector('.container')
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  contentContainer.innerHTML += `
  
   <div class="display-info-segment">
        <!---------->
        <!--       -->
        <div class="display-info-first-content">
          <!--  -->
          <div class="display-info-profile">
            ${data.avatar_url}
          </div>
          <!--  -->
          <div class="display-info-upper-info">
            <h4 class="display-info-name">${data.name}</h4>
            <h6 class="display-info-username">${data.login}</h6>
            <p class="display-info-date">Joined <span class="joined-date">${data.created_at}</span></p>
          </div>
        </div>
        <!---------->
        <!--      -->
        <div class="display-info-second-content">
          <p class="display-info-profile-about">${data.bio}</p>
        </div>
        <!---------->
        <!--      -->
        <div class="display-info-third-content">
          <!--  -->
          <div class="repos">
            <p class="repo">Repos</p>
            <p class="repo-num">${data.public_repos}</p>
          </div>
          <!--  -->
          <div class="followers">
            <p class="follower">Followers</p>
            <p class="followers-num">${data.followers}</p>
          </div>
          <!--  -->
          <div class="followings">
            <p class="following">Following</p>
            <p class="following-num">${data.following}</p>
          </div>
        </div>
        <!---------->
        <!--      -->
        <div class="display-info-fourth-content">
          <!--  -->
          <div class="profile-link">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#edf2ff" class="link--icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>

            <p class="profile--link"><a href="https://www.github.com/${data.login}">https://github.com</a></p>
          </div>
          <!--  -->
          <div class="builder-copyRight">
            <p class="builder">Builder:</p>
            <p class="copyRight">JamexTech &copy; <script>document.write(new Date().getFullYear())</script></p>
          </div>
        </div>
      </div>
  
  `
}