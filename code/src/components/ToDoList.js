import React from 'react';
import { useSelector } from 'react-redux';

const ToDoList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  return (
    <section>
      <ul>
        {taskList.map((singleTodo) => {
          return (
            <>
              <li key={singleTodo.id}>{singleTodo.description}</li>
              <hr />
            </>
          )
        })}
      </ul>
    </section>
  )
}

export default ToDoList;