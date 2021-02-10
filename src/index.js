const spiceblendsUrl = 'http://localhost:3000/spiceblends'
const ingredientsUrl = 'http://localhost:3000/ingredients'
const spiceDetails = document.getElementById("spice-blend-detail")
const spiceImages = document.getElementById("spice-images")

function fetchSpices() {
    return fetch (spiceblendsUrl)
        .then (res => res.json())
        .then (spiceInfo => {
            spiceInfo.forEach(spice => renderOneSpice(spice));
            });
        }

fetchSpices()

 function renderOneSpice (spice) {
    const thisSpiceImage = spiceDetails.querySelector("img.detail-image")
    const thisSpiceTitle = spiceDetails.querySelector("h2.title")
    thisSpiceImage.src = spice.image;
    thisSpiceImage.alt = spice.id
    thisSpiceTitle.textContent = spice.title
    const thisSpiceIngredients = spiceDetails.querySelector("div.ingredients-container")
    console.log(spice)
 }

//   function renderOneToy (toy){
//     const card = document.createElement('div')
//     card.className = 'toy-card'
//   card.dataset.id = toy.id
//   let image = document.createElement(`img`)
//   image.setAttribute('src', toy.image)
//   card.innerHTML =`
//   <div class="card">
//     <h2${toy.name}</h2>
//     <img src=${toy.image} class='toy-avatar' </>
//     <p> ${toy.likes}</p>
//     <button class="like-btn">Like<3</button>
//   </div> `

// collection.append(card)
// }
// renderAllToys()