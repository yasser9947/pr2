import React, { Component } from 'react'

export default class BoxOfchoes3 extends Component {

    state = {
        category: this.props.ele.category,
        index: this.props.i,
        correct_answer: this.props.ele.correct_answer,
        question: this.props.ele.question,
        incorrect_answers: this.props.ele.incorrect_answers,
        collect: [this.props.ele.incorrect_answers[0], this.props.ele.incorrect_answers[1], this.props.ele.incorrect_answers[2], this.props.ele.correct_answer],
        Level :this.props.ele.difficulty
,className : "box3"
    }    
    changeHandler = () => {
        this.props.the_question(this.state.question, this.state.collect ,this.correct_answer ,this.state.Level ); 
        this.setState({className:"boxC"});
    }
    render() {

        return (
            <div className= {this.state.className} onClick={this.changeHandler}  >
                <p> {this.state.index + 1}</p>

            </div>
        )
    }
}






