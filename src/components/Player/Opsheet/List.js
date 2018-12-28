import React, { Component } from 'react';

class List extends Component {
  render() {
    const { listClassName } = this.props

    return (
    < div className={listClassName}  >

      <h3>Op List</h3>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
    </div>
    );
  }
}

export default List;
