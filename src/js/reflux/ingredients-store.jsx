import HTTP from '../services/httpservice'
import Reflux from 'reflux'
import Actions from './actions.jsx'

const IngredientStore = Reflux.createStore({
  listenables: [Actions],
  
  getIngredients() {
    HTTP.get('/ingredients')
    .then(json => {
      this.ingredients = json;
      this.fireUpdate();
    })
  },

  postIngredient(text) {
    if (!this.ingredients) {
      this.ingredients = []
    }

    const ingredient = {
      "text": text,
      "id": Math.floor(Date.now() / 1000) + text
    };

    this.ingredients.push(ingredient)
    this.fireUpdate();

    HTTP.post('/ingredients', ingredient)
    .then(response => {
      this.getIngredients()
    })

  },
  
  fireUpdate() {
    this.trigger('change', this.ingredients)
  }
})

export default IngredientStore