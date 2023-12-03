let details = [];

Data();
async function Data() {
  let response = await fetch("https://api.openbrewerydb.org/v1/breweries");
  let result = await response.json();
  details.push(...result);
  return result;
}

// export const barId;
async function addTODOM() {
  // console.log(cond)
  // let res = await Data()
  let parentDiv = document.getElementById("card-listings");
  details.forEach((ele) => {
    if (ele.name === null || ele.city == null || ele.brewery_type === null) {
      return;
    } else {
      if (
        ele.name == cond.name &&
        ele.city == cond.city &&
        ele.brewery_type == cond.type
      ) {
        let singleCard = cardStructure(ele);
        parentDiv.innerHTML += singleCard;
      }
    }
  });
}

// addTODOM();

function cardStructure(data) {
  let cardHtml = `            
              <a href="../Details/detail.html?id=${data.id}" target="_blank">
                <div class="card">
                    <div class="card-img">
                    <img src="../../Images/cardimage.jpg" alt="" srcset="">
                    </div>
                    <div class="card-details">
                    <div class="card-details-1">
                        <h2>${data.name}</h2>
                        <h1>*****</h1>
                    </div>
                    <p>${data.city}, ${data.state}</p>
                    <div class="card-details-2">
                        <p>${data.address_1}</p>
                        <p>|</p>
                        <p>${data.phone}</p>
                        <p>|</p>
                        <p><a id="anc" href="${data.website_url}" target="_blank">Visit Bar</a></p>
                    </div>
                </div>
              </a>
                    `;

  return cardHtml;
}

var cond = {
  name: "",
  city: "",
  type: "",
};

document.getElementById("name").addEventListener("blur", (e) => {
  cond.name = e.target.value;
});

document.getElementById("city").addEventListener("blur", (e) => {
  cond.city = e.target.value;
});

document.getElementById("opt").addEventListener("blur", (e) => {
  cond.type = e.target.value;
});

document.getElementById("btn").addEventListener("click", () => {
  addTODOM();
});

