import React from 'react';

class List extends React.Component {
  render() {
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    )
  }
}

export default ListItem;
