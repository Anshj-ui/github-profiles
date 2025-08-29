const input_val = document.getElementById("input");
const Api_url = "api.github.com/users/";
const Form = document.getElementById("form");
const Main_tag = document.getElementById("main");
let users = `https://api.github.com/users/${input_val.value}`;
async function fetch_one() {
  let resp = await fetch(`https://api.github.com/users/${input_val.value}`);
  var data = await resp.json();
  try {
    console.log(data.name);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  user_card(data);
}

function user_card(data) {
  let url_git_hub = `https://github.com/${input_val.value}`;
  Main_tag.innerHTML += `
  <div class="card">
          <img src="${data.avatar_url}" alt="${data.name}" class="animate-bounce" />
               <div class="card_s">
                     <h2>${data.name}</h2>
                     <p>${data.bio}</p>
                     <ul class="head">
                     <li> Followers</li>
                     <li> Following</li>
                     <li> Repository</li>
                     </ul>
                    <ul class="sub">
                         <li>${data.followers}</li>
                         <li>${data.following}</li>
                         <li>${data.public_repos}</li>
                    </ul>
               </div>
               <div class="Link">
      <Button class="btn btn-primary">
      <a href="${url_git_hub}" target="_blank" >
      Git-Hub
      </a>
      </Button>
    </div>
  </div>
  `;
}
function dual() {
  input_val.addEventListener("input", () => {
    location.reload();
  });
}
Form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input_val.value);
  fetch_one();
  dual();
});