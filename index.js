const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const recipeWrapper = document.getElementsByClassName('wrapper');

console.log('test1234');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {


    console.log("data: ", data);

    const title = data.meals[0].strMeal;
    const image = data.meals[0].strMealThumb;
    const ingredientsList = document.getElementById('ingredients-list');
    const instructions = data.meals[0].strInstructions;

    for (let i = 1; i <= 20; i++) {
        const ingredient = data.meals[0][`strIngredient${i}`];
        const measure = data.meals[0][`strMeasure${i}`];
        
        if (ingredient && ingredient.trim() !== "") {
            const listItem = document.createElement('li');
            listItem.textContent = `${measure} ${ingredient}`;
            ingredientsList.appendChild(listItem);
        }
    }

    document.getElementById("recipe-title").innerHTML = title;
    document.getElementById("recipe-image").src = image;
    document.getElementById("recipe-instructions").innerHTML = instructions;

  })
  .catch(error => {
    console.error('Error:', error);
  });