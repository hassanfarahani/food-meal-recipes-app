import axios from 'axios';


export class SearchCateg {

  async getCategories() {
    try {
      const res = await axios('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      this.mealCategories = res.data.meals;
      // console.log(this.categories);
    } catch(error) {
      alert(error);
    }
  }

}


export class SearchMeals {
  constructor(query) {
    this.query = query;
  }

  async getMealsList() {
    try {
      const res = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.query}`);
      this.listOfMeals = res.data.meals;
    } catch(error) {
      alert(error);
    }
  }
}
 
 