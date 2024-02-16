import './App.css';
import { useState } from 'react';

// Create varying state.
  // 1. with the array below - hard code out a piece of state called todos. Figure out a way to loop through the todos and render then to the page.
  // const todos = ['wash car', 'call mom', 'make money']

  // 2. Create a piece of state called count.
    // Create buttons that will increase and decrease the count based off which is clicked.
    // If the count gets below -10 or above 10, it resets to 0
    
    
function App() {
    //declare new state variable todos, which will be preserved between function calls
    const [ todos, setTodos ] = useState(['wash car', 'call mom', 'make money']); //this array is the initial state, passed into useState
    //useState returns current state (todos) and function that updates it (setTodos)
    const [ count, setCount ] = useState(0);
    
    const setTodosHandler = () => {
      return <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              index: {index} | {todo}
            </li>);
          })
        }
      </ul>;
    }

    const clickAddHandler = () => {
      if (count >= 10) {
        return setCount(0);
      } else {
        return setCount(count + 1);
      }
    }

    const clickSubHandler = () => {
      if (count <= -10) {
        return setCount(0);
      } else {
        return setCount(count - 1);
      }
    }

  return (  
    <div>
      <div>
        {setTodosHandler()}
      </div>
      <div>
        <button id="add" onClick={clickAddHandler}>+</button>
        <div>{count}</div>
        <button id="subtract" onClick={clickSubHandler}>-</button> 
      </div>
    </div>
  );
}

export default App;
