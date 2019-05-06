import React, { Component } from 'react'
import BoxOfchoes from './BoxOfchoes'
import BoxOfchoes2 from './BoxOfchoes2'
import BoxOfchoes3 from './BoxOfchoes3'
import MainPage from './MainPage'
import swal from 'sweetalert';


var list = [0, 1, 2, 3]
var z = 0;

export default class Qc extends Component {

    state = {
        General_Knowledge: ["https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple"],
        Mathematics: ["https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=19&difficulty=hard&type=multiple"],
        History: ["https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple"],
        Geography: ["https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=22&difficulty=hard&type=multiple"],
        Films: ["https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple"],
        Animal: ["https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=27&difficulty=hard&type=multiple"],
        Sport: ["https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple"],
        Computer: ["https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple"],
        server: [],
        server2: [],
        server3: [],
        the_question: "the_question",
        Options: ["Options 1", "Options 2", "Options 3", "Options 4"],
        correctAnswer: '',
        url: this.props.url,
        NameOftype: [],
        Level: "",
        flash: ['', '', '', '']




    }
    checkState = (opject) => {
        const data = { ...this.state }
        // data.Name = this.state.['s']
        this.setState(data)



    }
    componentDidMount() {
        fetch(this.state[`${this.state.url}`][0])
            .then(response => {
                return response.json()
            }).then(data => {
                // console.log(data.results[0].question)

                return this.setState(prevState => ({
                    server: data.results
                }))


            })
        fetch(this.state[`${this.state.url}`][1])
            .then(response => {
                return response.json()
            }).then(data => {
                // console.log(data.results[0].question)

                return this.setState(prevState => ({
                    server2: data.results
                }))


            })
        fetch(this.state[`${this.state.url}`][2])
            .then(response => {
                return response.json()
            }).then(data => {
                // console.log(data.results[0].question)

                return this.setState(prevState => ({
                    server3: data.results
                }))


            })
    }


    // ===========================================  3 mithod 

    theQuestion = (question, Options, correctAnswer, Level, i) => {
        const data = { ...this.state }
        data.the_question = question
        data.Options = Options
        data.correctAnswer = correctAnswer
        data.correctAnswer = Options[3]
        data.Level = Level
        this.shuffle(data.Options)
        data.flash[0] = "r"
        data.flash[1] = "r"
        data.flash[2] = "r"
        data.flash[3] = "r"
        // data.server.splice(9, 1)
        this.setState(data)
    }

    //fetch
    changeHandler = (e) => {

        console.log()

        this.props.changeMainPage()

    }
    // chick to win 
    checkWin = (e) => {
        var rightAnswer = e.target.textContent;
        var RightAnswer = rightAnswer.split("-")

        if (z > 3) {
            z = 0
        }

        if (RightAnswer[1] === this.state.correctAnswer) {


            swal({
                title: "Good job!",
                text: "You answered correctly!",
                icon: "success",
                button: "Next",
            });

            console.log(RightAnswer[0])
            const data = { ...this.state }
            data.flash[RightAnswer[0] - 1] = "blink"
            this.setState(data)

            // if ( )
            if (this.state.Level == 'easy') {
                this.props.IncreaseScoor(z, 5)
            }
            if (this.state.Level == 'medium') {
                this.props.IncreaseScoor(z, 7)
            }
            if (this.state.Level == 'hard') {
                this.props.IncreaseScoor(z, 9)
            }
            z++
            this.props.switchPlayer(z)
        }
        else {
            const data = { ...this.state }
            data.flash[RightAnswer[0] - 1] = "blink2"
            data.flash[this.state.Options.indexOf(this.state.correctAnswer)] = "blink"
            this.setState(data)
            swal({
                title: "Wrong Answer",
                text: "Hopefully you can answer correctly next time!",
                icon: "error",
                button: "Next",
            });
            z++

            this.props.switchPlayer(z)

        }

    }

    shuffle = (o) => {

        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    // ---------------------------------------------------------

    render() {

        // this.checkState()
        // this.shuffle(this.state.Options)
        // console.log(this.state.server)
        // console.log(this.state.server2)
        // console.log(this.state.server3)
        // console.log(this.state[`${this.state.url}`][0])
        // Level ={this.state.server}
        console.log(this.state.Level)
        var Data1 = this.state.server.map((ele, i) => {

            return <BoxOfchoes ele={ele} i={i} the_question={this.theQuestion} />
        })
        var Data2 = this.state.server2.map((ele, i) => {

            return <BoxOfchoes2 ele={ele} i={i} the_question={this.theQuestion} />
        })
        var Data3 = this.state.server3.map((ele, i) => {

            return <BoxOfchoes3 ele={ele} i={i} the_question={this.theQuestion} />
        })

        return (
            <div>
                <h1 className="yasser">{this.state.url} </h1>

                <div onClick={this.changeHandler} className="main_top">
                </div>
                <div className="qc_Part">
                    <div className="question">
                        <h2>{this.state.the_question}</h2>

                    </div>
                    <div>
                        <div>
                            <h4 className={this.state.flash[0]} onClick={this.checkWin} >1-{this.state.Options[0]}</h4>
                            <h4 className={this.state.flash[1]} onClick={this.checkWin}>2-{this.state.Options[1]}</h4>
                        </div>
                        <div>
                            <h4 className={this.state.flash[2]} onClick={this.checkWin}>3-{this.state.Options[2]}</h4>
                            <h4 className={this.state.flash[3]} onClick={this.checkWin}>4-{this.state.Options[3]}</h4>
                        </div>
                    </div>
                </div>
                <section className="qc">
                    <div>
                        <div className="box1"> <p>.... Easy .... (5 points)</p></div>  {Data1}

                    </div>

                    <div>
                        <div className="box2"> <p>..Medium.. (7 points)</p> '</div>     {Data2}

                    </div>
                    <div>
                        <div className="box3"> <p>.... Hard .... (9 points)</p></div>     {Data3}

                    </div>
                </section>
            </div>
        )
    }
}
