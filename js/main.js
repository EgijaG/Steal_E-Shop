let categories = [];
fetch("data/products.json")
  .then((resp) => resp.json())
  .then((prod) =>
    prod.forEach((p) => {
      if (!categories.includes(p.category)) {
        categories.push(p.category);
        console.log(p.category);
      }
    })
  );
document.getElementById("myHeader").innerHTML = `
<div class="header">
    <div class="header-items header-left">
        <a href="index.php" style="margin-bottom:5px"><img id="logo" src="./img/logo.png"></a>
        <a class="header-link nav">My Purchases</a>
        <a class="header-link nav" href="profile.php">My profile</a>
        <a class="header-link nav">Offers</a>

    </div>
    <div class="header-items header-right">
        <a class="header-link login" href="login.php" type="button">Log in</a>
        <a class="header-link signup" href="signup.php" type="button">Sign up</a>
    </div>
</div>
`;
document.getElementById("myFooter").innerHTML = `
<div class="footer">
    <a class="footer-item" href="help.php">Help</p>
    <a class="footer-item" href="contactUs.php">Contact us</p>
    <a class="footer-item" href="aboutUs.php">About us</p>
</div>
`;

theUrl2 = "http://stealstoragehost.epizy.com/getAllRows.php";
theUrl = "https://random-data-api.com/api/v2/users";

function back() {
  fetch(theUrl, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => JSON.parse());
  console.log(json);
}

async function test() {
  const resp = await fetch(theUrl2);
  const object = await resp.json();
  //console.log(object);
  return object;
}
// test();
function test1() {
  return fetch(theUrl2, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var userid = JSON.parse(JSON.stringify(data));
      //console.log(userid);
      return userid;
    });
}
// var arr = [];
// test().then((value) => arr.push(value));
// console.log(arr);
// console.log(products);
/*
var array = [];
const obj = test();
array.push(obj);
console.log(array);
*/

function renderCategories() {
  categories.forEach((c) => {
    let cat = document.createElement("div");
    cat.id = "category";
    cat.innerHTML = `
          <div class="${c} row cards">
              <div class="section-title">
                  <h5>${c}</h5>
              </div>
          </div>`;
    document.getElementsByClassName("fuck")[0].appendChild(cat);
  });
  renderCards();
}

async function renderCards() {
  fetch("data/products.json")
    .then((resp) => resp.json())
    .then((prod) =>
      prod.forEach((p) => {
        let div = document.createElement("div");
        div.id = "renderedCard";
        div.innerHTML = `
    <div id="card">
    <img src="${p.imgPath}" alt="screenshot">
    <h3 class="card-title">${p.name}</h3>
    <p>${p.description}</p>
    <p style="font-style:italic;">By ${p.author}</p>
    <button type="button" onclick="test()">Buy for: ${p.price} $</button>
    </div>`;
        document.getElementsByClassName(p.category)[0].appendChild(div);
      })
    );
  return;
}
