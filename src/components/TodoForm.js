import React from 'react'

export default props =>
  <form>
    <input
      type='text'
      autoFocus
      value={props.currentTodo}
      className="new-todo"
      placeholder="What needs to be done?"/>
  </form>
