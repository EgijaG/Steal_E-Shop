// koda gabals kas nodrosina datu ieguvi DONT TOUCH PLEAS
let a;
const address = fetch("https://stealstorage.000webhostapp.com/getAllRows.php")
  .then((response) => response.json())
  .then((data) => {
    return data;
  });
/* mosh noderes naktone
 const printAddress = () => {
  address.then((a) => {
    console.log(a);
  });
};
*/
const printAddress = (id) => {
  address.then((a) => {
    a.forEach((p) => {
      console.log(p.p_id);
      if(p.p_id == id){
        console.log("banana");
      }
    })

  });
}
printAddress(2);


let categories = [];
address.then((a) => {
      a.forEach((p) => {
      if (!categories.includes(p.p_category)) {
        categories.push(p.p_category);
        console.log(p.p_category);
      }
    })}
  );

function scroll(cat) {
  if (categories.length > 0) {
    const element = document.getElementsByClassName(cat)[0];
    console.log(element);
    element.scrollTo();
  }
}
document.getElementById("myHeader").innerHTML = `
<div class="header">
    <div class="header-items header-left">
        <a href="index.php" style="margin-bottom:5px"><img id="logo" src="./img/logo.png"></a>
        <a class="header-link nav">My Purchases</a>
        <a class="header-link nav" href="profile.php">My profile</a>
        <a class="header-link nav" href="addProduct.php">Add product</a>

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

theUrl2 = "https://stealstorage.000webhostapp.com/getAllRows.php";
theUrl = "https://random-data-api.com/api/v2/users";

async function renderCategories() {
  address.then((a) => {
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
})};

function renderCards() {
  address.then((a) => {
      a.forEach((p) => {
        let div = document.createElement("div");
        div.id = "renderedCard";
        div.innerHTML = `
    <div id="card"> 
    <img src="${p.p_imgPath}" alt="screenshot">
    <h3 class="card-title">${p.p_name}</h3>
    <p>${p.p_desc}</p>
    <p style="font-style:italic;">By ${p.p_author}</p>
    <button type="button" class="btnSubmit" onclick="location.href='http://localhost:3000/login?accountName=steal%inc.&accountNumber=isbs4444444444&amount=${p.p_price}&details=${p.p_name}&goodLink=http://localhost/Steal_E-Shop/successfulPayment.php&badLink=http://localhost/Steal_E-Shop/failedPayment.php';">Buy for: ${p.p_price} $</button>
    </div>`;
        document.getElementsByClassName(p.p_category)[0].appendChild(div);
      })});
  return;
}
