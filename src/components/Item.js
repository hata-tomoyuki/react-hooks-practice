import React, { useState } from 'react'

const Item = ({todo, complete, updateTodo}) => {
    const [editingContent, setEditingContent] = useState(todo.content);

    const changeContent = (e) => {
        setEditingContent(e.target.value);
    }

    const toggleEditMode = () => {
        const newTodo = { ...todo, editing: !todo.editing };
        updateTodo(newTodo);
    }

    const confirmContent = (e) => {
        e.preventDefault();
        const newTodo = { ...todo, editing: !todo.editing, content: editingContent };
        updateTodo(newTodo);
    }

  return (
    <div>
        <button
            onClick={() => complete(todo.id)}
        >
            完了
        </button>
        <form style={{display: "inline"}} onSubmit={confirmContent}>
            {
                todo.editing ? (
                    <input
                        type="text"
                        value={editingContent}
                        onChange={changeContent}
                    />
                ) : (
                    <span onDoubleClick={toggleEditMode}>{todo.content}</span>
                )
            }
        </form>
    </div>
  )
}

export default Item
