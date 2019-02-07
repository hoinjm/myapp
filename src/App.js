import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
  { number: '0', spanish: 'cero', english: 'zero'},
  { number: '1', spanish: 'uno', english: 'one'},
  { number: '2', spanish: 'dos', english: 'two'},
  { number: '3', spanish: 'tres', english: 'three'},
  { number: '4', spanish: 'cuatro', english: 'four'},
  { number: '5', spanish: 'cinco', english: 'five'},
  { number: '6', spanish: 'seis', english: 'six'},
  { number: '7', spanish: 'siete', english: 'seven'},
  { number: '8', spanish: 'ocho', english: 'eight'},
  { number: '9', spanish: 'nueve', english: 'nine'},
  { number: '10', spanish: 'diez', english: 'ten'},
  
]




class App extends Component {

  render() {

    const Yes = function(props){
      return <h1>YES</h1>
    }

    const No = function(props){
      return <h1>NO</h1>
    }


    const NumberListRender = ({number, spanish, english, onClick}) => (
      <div onClick={onClick}>
        <p>{number}</p>
        <button onClick="NumberClick({spanish})">Spanish</button>
        <button onClick>English</button>
       <hr/>
      </div>
      )

    

    return (
      <div className = "App">
        <h1>Español Número</h1>
        <MySpanishNumber
          boardId={()=> Math.random()}
          data={data}
          ListRender={NumberListRender}
        />


        <HolaWorld text= "Adios"/>
        <HolaWorld text = "Buenas noches"/>
        <HelloWorld Yes={Yes} No={No} myCurrentState={true}/>
        <HelloWorld Yes={Yes} No={No} myCurrentState={false}/>
      </div>
    );
  }
}


function NumberClick (props){
  const {num} = props
    alert({num})

}

function HelloWorld(props){
  const { Yes, No, myCurrentState } = props
  return (
    <div>
      {myCurrentState ? <Yes/> : <No/>}
    </div>
  )
}

function HolaWorld(props){
  const {text} = props
  return (
    <h1>{text}</h1>
  )
}



function MySpanishNumber(props){
  const {boardId, data, ListRender, onClick} = props
  return (
    <div id={boardId()}>
      {data.map(function(entry, entryIdx) {
        return <ListRender
          number={entry.number}
          spanish={entry.spanish}
          english={entry.english}
          key={entryIdx}
          onClick={onClick}
        />       
      })}
    </div>
  )
}



export default App;
