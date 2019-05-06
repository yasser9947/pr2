import React, { Component } from 'react'

export default class introPage extends Component {
  render() {
    return (
      <div>
          <div>
          <h1 className = "yasser">Welcome to Yasser's Game </h1>
          <div id="intro" class="header-container fs">
          
  <header class="wrapper">
    <p>The game is about four teams competing by asking multiple choices,It has 8 category
Of science, sports, etc، and the characteristic in this game is that the team can choose the level of question
, Each level has certain points,
It has three levels, easy, medium, and difficult</p>
  </header>
  <span onClick={this.props.ChangeToApp2Page} class="scroll-hint">Start Game</span>
  <div className = "picInto"> </div>

</div>


        
</div>
      </div>
    )
  }
}
