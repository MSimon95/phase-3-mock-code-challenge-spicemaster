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
    fetch (`http://localhost:3000/spiceblends/${spice.id}`)
    .then (res => res.json())
    .then (spiceWithIngredient => {
            console.log(spiceWithIngredient)
            spiceDetails.dataset.id = spiceWithIngredient.id;
            const thisSpiceImage = spiceDetails.querySelector("img.detail-image")
            const thisSpiceTitle = spiceDetails.querySelector("h2.title")
            const thisSpiceIngredients = spiceDetails.querySelector("div.ingredients-container")
            thisSpiceImage.src = spiceWithIngredient.image;
            thisSpiceImage.alt = spiceWithIngredient.id
            thisSpiceTitle.textContent = spiceWithIngredient.title
            spiceWithIngredient.ingredients.forEach(ingredient => {
                console.log(ingredient)
                if (spice.id === ingredient.spiceblendId ){  
                const thisIngredients = document.createElement("li")
                thisIngredients.textContent = ingredient.name
                thisSpiceIngredients.append(thisIngredients);}
         
            });
        })
    }
    
    
 