import React, { Component } from 'react'
import './App.css';
import Qc from './Qc'
var arow;
export default class MainPage extends Component {
  state ={

  }
  changeHandler = (e) => {
  
     arow = e.target.textContent;
    // console.log("yee " +arow)
    this.props.changeMainPage(arow)
    

  }
 
  
  
  render() {



    return (
      <div>
    
         <section className="boxs">
<div>
        <div onClick={this.changeHandler}><p>General_Knowleg</p> <div className = "GeneralKnowleg mm" > </div></div>
        <div onClick={this.changeHandler}><p>Mathematics</p> <div className = "Mathematics mm"onClick={this.changeHandler} ></div></div>
        <div onClick={this.changeHandler}><p>History</p> <div className = "History mm"onClick={this.changeHandler}></div></div>
        <div onClick={this.changeHandler}><p>Geography</p> <div className = "Geography mm"onClick={this.changeHandler}></div></div>
    </div>
    <div>
    <div onClick={this.changeHandler}><p>Films</p>  <div className = "Films mm" ></div></div>
    <div onClick={this.changeHandler}><p>Animal</p> <div className = "Animal mm" ></div></div>
    <div onClick={this.changeHandler}><p>Sport</p>  <div className = "Sport mm" ></div></div>
    <div onClick={this.changeHandler}><p>Computer</p>  <div className = "Computer mm" ></div></div>
        </div>
    </section>
      </div>
    )
  }
}
