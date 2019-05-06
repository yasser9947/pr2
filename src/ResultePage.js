import React, { Component } from 'react'
import Header from './Imge'
export default class ResultePage extends Component {
    render() {
        var color1
        if (this.props.Score[0] == Math.max(...this.props.Score)) {
            color1= "red"
        }
        else if (this.props.Score[1] == Math.max(...this.props.Score)) {
            color1 = "rgb(156, 156, 8)"
        }
        else if (this.props.Score[2] == Math.max(...this.props.Score)) {
            color1 = "blue"
        }
else {
    color1 = "Purple"
}
console.log(color1);

        return (
            <div>
                <h1 className="yasser" style={{ color: color1 }} >Teem {this.props.Score.indexOf(Math.max(...this.props.Score)) + 1} is wiineeer !!!</h1>
                <div> {Header}</div>
                <img className="img3" src ="https://thumbs.gfycat.com/ZanyExcellentGoldfinch-size_restricted.gif" />
                 <h2 className="img3" > The team got the :{Math.max(...this.props.Score)} points</h2>
            </div>
        )
    }
}
