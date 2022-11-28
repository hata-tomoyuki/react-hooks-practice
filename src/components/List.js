import React from 'react'

const List = ({todos}) => {
  return (
    <div>
        {todos.map(todo => {
            return(
                <div key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })}
    </div>
  )
}

export default List
