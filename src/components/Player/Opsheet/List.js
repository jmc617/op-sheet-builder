import React from 'react';

function List(props) {
  return <div className={props.listClassName}  >

    <h3>Op List</h3>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
  </div>
}

export default List;
