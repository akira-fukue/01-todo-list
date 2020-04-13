import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCircle,
  faCheckCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

function List() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const userLocaStorage = JSON.parse(localStorage.getItem("userState"));
    console.log(userLocaStorage);
    const userState = userLocaStorage === null ? [] : userLocaStorage;
    setTodos(userState);
  }, []);

  const [_id, setId] = useState(0);

  function refreshLocalStorage(todosUpdated) {
    localStorage.setItem("userState", JSON.stringify(todosUpdated));
  }

  function handleAddTodo() {
    const itemText = document.getElementById("item").value;

    if (itemText == "") return alert("item vazio");

    document.getElementById("item").value = "";

    const todo = {
      id: _id,
      text: itemText,
      complete: false,
    };

    setId(_id + 1);

    const todosUpdated = [...todos, todo];

    setTodos(todosUpdated);
    refreshLocalStorage(todosUpdated);
  }

  function handleCompleteTodo(id) {
    const todosUpdated = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    setTodos(todosUpdated);
    refreshLocalStorage(todosUpdated);
  }

  function handleDeleteTodo(id) {
    const todosUpdated = todos.filter((todo) => todo.id !== id);

    setTodos(todosUpdated);
    refreshLocalStorage(todosUpdated);
  }

  return (
    <>
      <div className="content">
        <ul id="list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <div style={styles.list} className="row">
                {todo.complete === false ? (
                  <FontAwesomeIcon
                    style={styles.checkTodoUncheck}
                    icon={faCircle}
                    onClick={() => handleCompleteTodo(todo.id)}
                  />
                ) : (
                  <FontAwesomeIcon
                    style={styles.checkTodoChecked}
                    icon={faCheckCircle}
                    onClick={() => handleCompleteTodo(todo.id)}
                  />
                )}
                {todo.complete === false ? (
                  <p style={styles.todoTextUnchecked}>{todo.text}</p>
                ) : (
                  <p style={styles.todoTextChecked}>{todo.text}</p>
                )}
                <FontAwesomeIcon
                  style={styles.deleteTodo}
                  icon={faTrashAlt}
                  onClick={() => handleDeleteTodo(todo.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-to-do">
        <FontAwesomeIcon
          style={styles.plusIcon}
          icon={faPlusCircle}
          onClick={handleAddTodo}
        />
        <input type="text" id="item" placeholder="Add a to-do" />
      </div>
    </>
  );
}

const styles = {
  list: {
    display: "flex",
    flexDirection: "row",
    verticalAlign: "middle",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "baseline",
    width: "330px",
    height: "45px",
    minHeight: "45px",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    padding: "0",
  },
  plusIcon: {
    position: "absolute",
    fontSize: "40px",
    color: "#6B51C9",
  },
  checkTodoUncheck: {
    verticalAlign: "middle",
    fontSize: "25px",
    alignSelf: "center",
    marginLeft: "10px",
    color: "#F2F2F2",
  },
  checkTodoChecked: {
    verticalAlign: "middle",
    fontSize: "25px",
    alignSelf: "center",
    marginLeft: "10px",
    color: "#48A049",
  },
  deleteTodo: {
    alignSelf: "center",
    marginRight: "20px",
    color: "#666699",
  },
  todoTextUnchecked: {
    alignSelf: "center",
    fontSize: "20px",
    color: "#400080",
  },
  todoTextChecked: {
    alignSelf: "center",
    fontSize: "20px",
    color: "#8585ad",
    textDecoration: "line-through",
  },
};

export default List;
