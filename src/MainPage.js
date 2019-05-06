import React, { Component } from 'react'
import './App.css';
import Qc from './Qc'
var arow;
export default class MainPage extends Component {
  state ={

  }
  changeHandler = (e) => {
  
    //  arow = e.target.textContent;
     arow = e.target.id;


    console.log("yee " +arow)

    this.props.changeMainPage(arow)
    

  }
 
  
  
  render() {



    return (
      <div>
     <div>

<h1 className = "yasser">Main Page </h1>
</div >
         <section className="boxs">
<div>
        <div  onClick={this.changeHandler} ><p id ="General_Knowledge">General Knowledge</p> <div id ="General_Knowledge" className = "GeneralKnowleg mm" > </div></div>
        <div onClick={this.changeHandler}><p id = "Mathematics">Mathematics</p> <div id = "Mathematics" className = "Mathematics mm"onClick={this.changeHandler} ></div></div>
        <div onClick={this.changeHandler}><p id = "History">History</p> <div id = "History"className = "History mm"onClick={this.changeHandler}></div></div>
        <div onClick={this.changeHandler}><p id = "Geography">Geography</p> <div  id = "Geography" className = "Geography mm"onClick={this.changeHandler}></div></div>
    </div>
    <div>
    <div onClick={this.changeHandler}><p id = "Films">Films</p>  <div id = "Films" className = "Films mm" ></div></div>
    <div onClick={this.changeHandler}><p id = "Animal">Animal</p> <div id = "Animal" className = "Animal mm" ></div></div>
    <div onClick={this.changeHandler}><p id ="Sport">Sport</p>  <div id ="Sport" className = "Sport mm" ></div></div>
    <div onClick={this.changeHandler}><p id ="Computer">Computer</p>  <div id ="Computer"className = "Computer mm" ></div></div>
        </div>
    </section>
      </div>
    )
  }
}
