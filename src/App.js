import React, { Component } from 'react'
import App2 from './App2'
import IntroPage from './IntroPage'
export default class App extends Component {
  
  state = {
introPage : true ,
App2Page : false,


}

  ChangeToApp2Page = () =>{
var Data = {... this.state}
Data.App2Page = true ;
Data.introPage = false ;
this.setState(Data)

  }
  render() {
    var ChangePage = <IntroPage ChangeToApp2Page = {this.ChangeToApp2Page} />
    if ( this.state.App2Page){
      ChangePage= <App2 />
    }
    return (
      <div>
      
        {ChangePage}
      </div>
    )
  }
}

