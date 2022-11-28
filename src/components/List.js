import React from 'react'

const List = ({todos}) => {
  return (
    <div>
        {todos.map(todo => {
            return(
                <div>
                    <span>{todo.content}</span>
                </div>
            )
        })}
    </div>
  )
}

export default List
