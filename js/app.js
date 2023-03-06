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
                    <div class="text-danger">
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
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  showModelCardDetails(data.data);
};
const showModelCardDetails = (data) => {
  console.log(data);
  const modal = document.getElementById("modal");
  modal.innerHTML=''
  // const cardTitle=document.getElementById('cardTitle')
  // cardTitle.innerText=data.description
  // const basic=document.getElementById('basic')
  // basic.innerText=data.pricing[0].price ? data.pricing[0].price: 'Not Found'
  // const pro=document.getElementById('pro')
  // pro.innerText=data.pricing[1].price ? data.pricing[1].price:'Not Found'
  // const features1=document.getElementById('features1')
  // features1.innerText=features.feature_name

  const { tool_name, description, features } = data;

  const div = document.createElement("div");
  
  div.innerHTML = `
  <div class="row row-cols-1 row-cols-md-2 g-4">
                  <div class="col">
                    <div class="card h-100">
                      <div class="card-body">
                        <h5 id="" class="card-title">${description}</h5>
                        <div 
                          class="d-flex justify-content-between align-items-center gap-2 mt-2 mb-2"
                        >
                        <p id="basic" class="text-success bg-light p-4">${
                          data.pricing[0].price
                            ? data.pricing[0].price
                            : "Not Found"
                        }
                        </p>
                        <p id="pro" class="text-warning bg-light p-4">${
                          data.pricing[1].price
                            ? data.pricing[1].price
                            : "Not Found"
                        }
                        </p>
                        <p class="text-danger bg-light p-4">${data.pricing[2].price
                          ? data.pricing[2].price
                          : "Not Found"}
                        </p>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center gap-2"
                        >
                          <div class="modal-features">
                            <h4 class="">${tool_name}</h4>
                            <ul>
                            <li>${
                              features.feature_name
                                ? features.feature_name
                                : "No data Found"
                            }</li>
                            <li>${
                              features.feature_name
                                ? features.feature_name
                                : "No data Found"
                            }</li>
                            <li>${
                              features.feature_name
                                ? features.feature_name
                                : "No data Found"
                            }</li>
                            </ul>
                          </div>
                          <div>
                            <h4>Integrations</h4>
                            <ul>
                            <li>${
                              data.integrations[0]
                                ? data.integrations[0]
                                : "No data Found"
                            }</li>
                            <li>${
                              data.integrations[1]
                                ? data.integrations[1]
                                : "No data Found"
                            }</li>
                            <li>${
                              data.integrations[2]
                                ? data.integrations[2]
                                : "No data Found"
                            }</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img class="p-3" src="${
                        data.image_link[0]
                      }" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">${data.accuracy.description}</h5>
                        <p class="card-text">${data.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
  `;

  modal.appendChild(div);
};
loadPage();
