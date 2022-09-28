const products = [
  {
    id: 0,
    name: "Nude",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 23,
    category: "foto",
    reserved: false,
    author: "Jesse",
    imgPath:
      "https://images.unsplash.com/photo-1598983870677-01e066a0b901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 1,
    name: "Jane",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 97,
    category: "audio",
    reserved: false,
    author: "Gustavo Fring",
    imgPath:
      "https://images.unsplash.com/photo-1660330120426-0f83806543cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 2,
    name: "Jack",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 2345,
    category: "video",
    reserved: false,
    author: "Eizenberg",
    imgPath:
      "https://images.unsplash.com/photo-1642918570585-e510c874a423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    id: 3,
    name: "Jill",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 14,
    category: "foto",
    reserved: false,
    author: "Brink",
    imgPath:
      "https://images.unsplash.com/photo-1627646393465-93969d6a6549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
  },
  {
    id: 4,
    name: "Jill",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 14,
    category: "foto",
    reserved: false,
    author: "Brink",
    imgPath:
      "https://images.unsplash.com/photo-1558016183-68d5d7b8851b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 5,
    name: "Jill",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 14,
    category: "foto",
    reserved: false,
    author: "Brink",
    imgPath:
      "https://images.unsplash.com/photo-1556997685-309989c1aa82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
  },
  {
    id: 6,
    name: "Jill",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 14,
    category: "audio",
    reserved: false,
    author: "Brink",
    imgPath:
      "https://images.unsplash.com/photo-1565551223391-be988013ee6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80",
  },
  {
    id: 7,
    name: "Jill",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 14,
    category: "video",
    reserved: false,
    author: "Brink",
    imgPath:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    id: 8,
    name: "Jill",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 14,
    category: "video",
    reserved: false,
    author: "Brink",
    imgPath:
      "https://images.unsplash.com/photo-1544377712-f7a323240581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
];

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

function check() {
  console.log("Jess papi, you clicked me!");
}

theUrl2 = "http://stealstoragehost.epizy.com/getAllRows.php";
theUrl = "https://random-data-api.com/api/v2/users"; 

function back(){
  fetch(theUrl,{
    method : 'GET',
    mode: 'no-cors',
    headers: {
    'Content-Type': 'application/json'
  },
  })
  .then(res => res.json())
  .then(json => JSON.parse());
  console.log(json);
}

async function test(){
  const resp = await fetch(theUrl2);
  const object = await resp.json();
  //console.log(object);
  return object;
}
test();
function test1() {
  return fetch(theUrl2, {
      method: 'GET',
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var userid = JSON.parse(JSON.stringify(data));
      //console.log(userid);
      return userid;
    })
}
var arr = [];
test().then(value => arr.push(value));
console.log(arr);
console.log(products);
/*
var array = [];
const obj = test();
array.push(obj);
console.log(array);
*/

function renderCards() {
  arr.forEach((p) => {
    let div = document.createElement("div");
    div.id = "renderedCard";
    div.innerHTML = `
    <div id="card">
    <img src="${p.p_avatar}" alt="screenshot">
    <h3 class="card-title">${p.username}</h3>
    <p>${p.desc}</p>
    <p style="font-style:italic;">By ${p.author}</p>
    <button type="button" onclick="test()">Buy for: ${p.price} $</button>
    </div>`;
    document.getElementsByClassName(p.category)[0].appendChild(div);
  });
}
