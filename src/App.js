import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage'
import Qc from './Qc'
import Test from './Test'


class App extends Component {
  state = {
     mainPage: false ,
    qcPage: false ,
    ChangThePage: 0,
    url :"",
    switchPlayer : 0,
    scoor : [0,0,0,0], 
    aroow1:"aroow",
    aroow2:"",
    aroow3:"",
    aroow4:""
  }
  changeMainPageHandle = (url) => {
    const data = {...this.state} //copy state object
    data.mainPage = !data.mainPage //opposite of whatever mainpage is
    data.url=url

    this.setState(data)
  }
  switchPlayer = (switchPlayer) => {
    console.log(switchPlayer)
    const data = {...this.state} 
    data.switchPlayer = switchPlayer 
    
    this.setState(data)
    this.aroow(switchPlayer)
  }

  IncreaseScoor = (i , j)=>{
    const data = {...this.state} 
    data.scoor[i] += j
    this.setState(data)

  }
  aroow =(player)=> {
    const data = {...this.state} 

    if  (player == 1) {
          data.aroow1 = ""
          data.aroow2="aroow";
          data.aroow3="";
          data.aroow4="";
        }
    else if ( player== 2){

            data.aroow1 = ""
            data.aroow2="";
            data.aroow3="aroow";
            data.aroow4="";
      }
            else if ( player == 3){

            data.aroow1 = ""
            data.aroow2="";
            data.aroow3="";
            data.aroow4="aroow";
      }
            else if ( player == 4){
            data.aroow1 = "aroow"
            data.aroow2="";
            data.aroow3="";
            data.aroow4="";
      }
  this.setState(data)
      
    // }

  }


  render() {
    const mainpage = <MainPage qcPage={this.state.qcPage} mainPage={this.state.mainPage} changeMainPage={this.changeMainPageHandle} url ={this.TheUrl} />
var ChangePAge =mainpage;
    if (this.state.mainPage ){
    ChangePAge = <Qc qcPage={this.state.qcPage} mainPage={this.state.mainPage} changeMainPage={this.changeMainPageHandle} url ={this.state.url} switchPlayer ={this.switchPlayer} IncreaseScoor= {this.IncreaseScoor} aroow={this.aroow} />
    }
    else {
      ChangePAge =mainpage;

    }
    // this.aroow()
//     if ( this.state.switchPlayer === 5 ){

//       const data = {...this.state} //copy state object
// data.switchPlayer = 1   
//       this.setState(data)
//     }
// console.log(this.state.switchPlayer)
    return (
      <div className="App">
        <header >
          {/* <button onClick={this.aroow}>Test</button> */}
          <div className = "hedder1">
          <div><h4>one: </h4> <h4>{this.state.scoor[0]}</h4></div>
          <div><h4>two: </h4> <h4>{this.state.scoor[1]}</h4></div>
          <div><h4>three: </h4> <h4>{this.state.scoor[2]}</h4></div>
          <div><h4>four: </h4> <h4>{this.state.scoor[3]}</h4></div>
</div>
        </header>
        <header>
          <div className = "hedder2">
          <div className = {this.state.aroow1} ></div>
          <div className =  {this.state.aroow2}> </div>
          <div className =  {this.state.aroow3}></div>
          <div className = {this.state.aroow4}> </div>
</div>
        </header>
        <div>

          <h1>Main Page </h1>
        </div >
        {ChangePAge}

      </div>
    );
  }
}

export default App;
