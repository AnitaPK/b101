const renderMealElmt = document.querySelector("#renderMeal")
const loaderElmt = document.querySelector("#loader")
const exampleModalLabelElmt = document.querySelector("#exampleModalLabel")
const modalDataMEalElmt = document.querySelector("#modalDataMEal")

let mealsData = []



// Bootstrap Modal Instance
const mealModal = new bootstrap.Modal(
    document.querySelector("#mealDetailsModal")
);



function renderMeals(meals){
    renderMealElmt.innerHTML = meals.map((meal)=>`
    <div class="col-12">
        <div class="card mb-3">
  <img src=${meal.strMealThumb} class="card-img-top customIMGCARD" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p> 
    <span class="badge text-bg-secondary">${meal.strCategory}</span> 
    <span class="badge text-bg-warning">${meal.strCountry}</span>
    </p>
    <button class='btn btn-primary' 
    onclick="viewMealDetails('${meal.idMeal}')"
    >View More Information</button>
    <a class='btn btn-outline-primary' href=${meal.strYoutube} target="_blank">Video </a>
  </div>
</div>
    </div>
    `).join('')
}
function viewMealDetails(mealId){
    const selectedMeal = mealsData.find((meal) => meal.idMeal === mealId);

    if (!selectedMeal) return;

    exampleModalLabelElmt.innerText = selectedMeal.strMeal;

    // Get Ingredients and Measurements
    let ingredientsHTML = "";

    for (let i = 1; i <= 20; i++) {
        const ingredient = selectedMeal[`strIngredient${i}`];
        const measure = selectedMeal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredientsHTML += `
                <li>${measure} - ${ingredient}</li>`;
        }
    }

    modalDataMEalElmt.innerHTML = `
        <div class="row">
            <div class="col-md-5">
                <img src="${selectedMeal.strMealThumb}"
                     class="img-fluid rounded mb-3"
                     alt="${selectedMeal.strMeal}">
            </div>
            <div class="col-md-7">
                <h5>${selectedMeal.strMeal}</h5>
                <p>
                    <strong>Category:</strong>
                    ${selectedMeal.strCategory}
                </p>
                <p>
                    <strong>Area:</strong>
                    ${selectedMeal.strArea}
                </p>
                <p>
                    <strong>Tags:</strong>
                    ${selectedMeal.strTags || "Not Available"}
                </p>
            </div>
        </div>
        <hr>
        <h5>Ingredients</h5>

        <ul>${ingredientsHTML}</ul>

        <hr>
        <h5>Instructions</h5>
        <p>${selectedMeal.strInstructions}</p>
        <a href="${selectedMeal.strYoutube}"
           target="_blank"
           class="btn btn-danger">
           Watch Recipe Video
        </a>
    `;

    mealModal.show();
}

async function fetchData(){
    await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        mealsData = data.meals
        m = data.meals
        renderMeals(m)
    })
    .catch(err=>{
        console.log("ERRRO",err)
        renderMealElmt.innerHTML = '<h1>REcipes not Available </h1>'
    })
    loaderElmt.classList.add("d-none")
}

window.addEventListener('DOMContentLoaded', ()=>{
    fetchData()
})