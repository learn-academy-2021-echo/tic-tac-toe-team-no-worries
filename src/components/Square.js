import React, { Component } from 'react'

class Square extends Component {

  render() {
    return (
      <>
        <div className="square" onClick={() => { this.props.patSummit(this.props.kobe) }}>

          {this.props.curry}

        </div>

      </>
    )
  }
}
export default Square
