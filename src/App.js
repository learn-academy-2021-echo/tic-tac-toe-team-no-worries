import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: ["🏀", "🏀", "🏀", "🏀", "🏀", "🏀", "🏀", "🏀", "🏀"],
      blue: "⛹️‍♂️",
      red: "⛹️‍♀️",
      silver: "⛹️",
      playOne: true

    }
  }

  handleClick = (index) => {
    if (this.state.playOne === true) {
      let newSquares = this.state.squares
      newSquares[index] = this.state.red

      this.setState({
        squares: newSquares,
        playOne: !this.state.playOne
      })
    }
    else {
      let newSquares = this.state.squares
      newSquares[index] = this.state.blue

      this.setState({
        squares: newSquares,
        playOne: !this.state.playOne
      })
    }




  }
  // win conditions
  // 0,1,2
  // 0,3,6
  // 0,4,8

  // 1,4,7

  // 2,5,8
  // 2,4,6

  // 3,4,5

  // 6,7,8

  render() {
    return (
      <>
        <h1>Tic Tac Toe by Regina</h1>
        <div id="gameboard">


          {this.state.squares.map((value, index) => {
            return <Square
              curry={value}
              kobe={index}
              patSummit={this.handleClick} />

          })
          }
        </div>
      </>
    )
  }
}
export default App
