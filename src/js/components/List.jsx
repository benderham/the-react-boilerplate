import React from 'react';
import ListItem from './ListItem.jsx';
import Reflux from 'reflux';
import Actions from './../reflux/actions.jsx';
import IngredientStore from './../reflux/ingredients-store.jsx';


class List extends React.Component {
  //mixins: [Reflux.listenTo(IngredientStore, 'onChange')],
  constructor() {
    super()
    this.state = {
      ingredients:[],
      newText: ""
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  componentWillMount() {
    Actions.getIngredients()
  }
  onChange(event, ingredients) {
    this.setState({ingredients})
  }
  onInputChange(e) {
    this.setState({newText: e.target.value})
  }
  onClick(e) {
    if (this.state.newText) {
      Actions.postIngredient(this.state.newText)
    }

    this.setState({
      newText: ""
    })
  }
  render() {
    const listItems = this.state.ingredients.map(item => <ListItem key={item.id} ingredient={item.text} />)

    return (
      <div>
      <input 
        placeholder="Add Item" 
        value={this.state.newText} 
        onChange={this.onInputChange}
      />
      <button onClick={this.onClick}>Add Item</button>
      <ul>{listItems}</ul>
      </div>
    )
  }
}

export default List
