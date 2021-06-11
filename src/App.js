import React from 'react';
import './App.css';
import Task1 from './tasks/Task1';
import Task3 from './tasks/Task3';
import Season from './tasks/Task2';

/* const ValidationMsg = ({val}) => {
  if (val>=10) {
    return <h2>Great than 10 </h2>
  }  else {
    return <h3>Less than <em>10</em></h3>
  }
} */

/* const PrevComp = () => {
  const val = null;
  return (
    <div className="App">
      <ValidationMsg val={8}/>
      <div>
        {val >=10 ? <h2>Great than 10 </h2> : <h3>Less than <em>10</em></h3>}

        {val && <span>We have val</span>}
      </div>
    </div>
  )
} */



class App extends React.Component {
  render(){
    return (
      <>
        <h1>Домашняя работа № 6</h1>
        <h2>Задание 1</h2>
        <Task1/>
        <hr/>
        <h2>Задание 2</h2>
        <Season value={2}/>
        <hr/>
        <h2>Задание 3</h2>
        <Task3 />
        <hr/>
      </>
    )
  }
}

export default App;
