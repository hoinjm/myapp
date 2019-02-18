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


const myStlye = {
  textAlign : 'center'
}



class App extends Component {

   constructor (props){
     super (props)
     this.state = {index : 0}
     this.goNextNum = this.goNextNum.bind(this);
     this.goPrevNum = this.goPrevNum.bind(this);

  }

  goNextNum (props){
    this.setState ({index : this.state.index + 1})
  }
  
  goPrevNum (props){
    this.setState ({index : this.state.index - 1})
  }

  render() {

    return (
      <div>
        <h1 style={myStlye}>Español Número</h1>
        <MySpanishNumber data={data[this.state.index]} goNextNum={this.goNextNum} goPrevNum={this.goPrevNum}/>

      </div>
    );
  }
}


function MySpanishNumber (props){
  const {data, goNextNum, goPrevNum} = props
  return(
    <div>
      <h2 style ={myStlye}>{data.number}</h2>
      <p style={myStlye}>{data.spanish}</p>
      <p style={myStlye}>{data.english}</p>
      <button onClick={()=>goPrevNum()} style={myStlye} >Prev Num</button>
      <button onClick={goNextNum} style={myStlye}>Next Num</button>
    </div>
    
    
  )

}




export default App;
