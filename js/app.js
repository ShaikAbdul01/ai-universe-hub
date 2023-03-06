const loadPage = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  showCardDetails(data.data);
};
const showCardDetails = (cards) => {
  // console.log(cards)
  const cardContainer = document.getElementById("card-container");
  cards.tools.forEach((singleCard) => {
    // console.log(singleCard.id);
    const { image, name, features, published_in, id } = singleCard;
    const div = document.createElement("div");
    div.innerHTML = `
       
            <div class="col">
              <div class="card h-100">
                <img src="${image}" class="card-img-top p-3" alt="..." height="300">
                <div class="card-body">
                  <h5 class="card-title">Features</h5>
                  <ol>
                    <li>${features[0] ? features[0] : "Not available"}</li>
                    <li>${features[1] ? features[1] : "Not available"}</li>
                    <li>${features[2] ? features[2] : "Not available"}</li>
                </ol>
                <hr>
                </div>

                <div class="d-flex justify-content-between align-items-center mx-4">
                        <div class="">
                        <h5 class="">${name}</h5>
                        <p class=""><i class="fa-solid fa-calendar-days"></i> ${published_in}</p>
                    </div>
                    <div class="">
                        <p><span onclick="loadCardDetails('${id}')" data-bs-toggle="modal"
                        data-bs-target="#cardDetails">➔</span></p>
                    </div>
                    </div>
              </div>
            </div>
        
        `;
    cardContainer.appendChild(div);
  });
};

const loadCardDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  showModelCardDetails(data);
};
const showModelCardDetails = (data) => {
  console.log(data);
};
loadPage();
