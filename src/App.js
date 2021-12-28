import React, { useState } from 'react'
// import CounterApp from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import SimpleForm from './components/02-useEffect/SimpleForm';
// import SimpleFormWithHooks from './components/02-useEffect/SimpleFormWithHooks';
// import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
// import FocusScreen from './components/04-useRef/FocusScreen';
// import Memorize from './components/06-memos/Memorize';
// import CallBack from './components/06-memos/CallBack';
// import { Padre } from './components/07-tarea-memo/Padre';
// import TodoApp from './components/08-useReducer.js/TodoApp';
import AppRouter from './components/09-useContext/AppRouter';
import { UserContext } from './components/09-useContext/UserContext';

const App = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  )
}

export default App;
