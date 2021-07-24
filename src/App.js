import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import React,{ useState , useEffect} from 'react';
import {AddTodo} from './MyComponents/AddTodo';
import {About} from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//this is JavaScript Syntx Xtension (A mixture of JS and HTML)
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];      //initTodos
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log('I m ondelete of todo' , todo);

    setTodos(todos.filter((e)=>{
         return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addToDo = (title,desc) => {
    console.log('I m adding this todo',title,desc)
    let sno;
    if (todos.length === 0){
      sno = 1;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);

    
    
    

  }
  

  const [todos , setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])
  
  return (
    //stuffs to be returned must be wrapped in something,be it empty tags
    //Breaking our site into components
    <>
    <Router>
      <Header title="MyTodos List" searchBar={false}/>

      <Switch>

          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addToDo={addToDo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>)
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
                    
      </Switch>      
            
      <Footer/>
    </Router>   
    </>
  );
}

export default App;
