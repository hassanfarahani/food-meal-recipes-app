import axios from 'axios';

export class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`);
      this.title = res.data.meals[0].strMeal;
      this.area = res.data.meals[0].strArea;
      this.image = res.data.meals[0].strMealThumb;
      this.video = res.data.meals[0].strYoutube;
      this.instruction = res.data.meals[0].strInstructions;
      this.ingredient1 = res.data.meals[0].strIngredient1;
      this.ingredient2 = res.data.meals[0].strIngredient2;
      this.ingredient3 = res.data.meals[0].strIngredient3;
      this.ingredient4 = res.data.meals[0].strIngredient4;
      this.ingredient5 = res.data.meals[0].strIngredient5;
      this.ingredient6 = res.data.meals[0].strIngredient6;
      this.ingredient7 = res.data.meals[0].strIngredient7;
      this.ingredient8 = res.data.meals[0].strIngredient8;
      this.ingredient9 = res.data.meals[0].strIngredient9;
      this.ingredient10 = res.data.meals[0].strIngredient10;
      this.ingredient11 = res.data.meals[0].strIngredient11;
      this.ingredient12 = res.data.meals[0].strIngredient12;
      this.ingredient13 = res.data.meals[0].strIngredient13;
      this.ingredient14 = res.data.meals[0].strIngredient14;
      this.ingredient15 = res.data.meals[0].strIngredient15;
      this.ingredient16 = res.data.meals[0].strIngredient16;
      this.ingredient17 = res.data.meals[0].strIngredient17;
      this.ingredient18 = res.data.meals[0].strIngredient18;
      this.ingredient19 = res.data.meals[0].strIngredient19;
      this.ingredient20 = res.data.meals[0].strIngredient20;
      this.measure1 = res.data.meals[0].strMeasure1;
      this.measure2 = res.data.meals[0].strMeasure2;
      this.measure3 = res.data.meals[0].strMeasure3;
      this.measure4 = res.data.meals[0].strMeasure4;
      this.measure5 = res.data.meals[0].strMeasure5;
      this.measure6 = res.data.meals[0].strMeasure6;
      this.measure7 = res.data.meals[0].strMeasure7;
      this.measure8 = res.data.meals[0].strMeasure8;
      this.measure9 = res.data.meals[0].strMeasure9;
      this.measure10 = res.data.meals[0].strMeasure10;
      this.measure11 = res.data.meals[0].strMeasure11;
      this.measure12 = res.data.meals[0].strMeasure12;
      this.measure13 = res.data.meals[0].strMeasure13;
      this.measure14 = res.data.meals[0].strMeasure14;
      this.measure15 = res.data.meals[0].strMeasure15;
      this.measure16 = res.data.meals[0].strMeasure16;
      this.measure17 = res.data.meals[0].strMeasure17;
      this.measure18 = res.data.meals[0].strMeasure18;
      this.measure19 = res.data.meals[0].strMeasure19;
      this.measure20 = res.data.meals[0].strMeasure20;

    } catch (error) {
      console.log(error);
      alert('Something went wrong! :(');
    }
  }
}

