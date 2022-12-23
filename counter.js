import React, { Component } from 'react'

export class counter extends Component {
  constructor(){
    super()
    this.state=({
      count:0
    })
  }
  change(){
    this.setState({
      count:this.state.count+1
    })
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={() => this.change()} className="btn btn-success" >count</button>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        </div>
    )
  }
}

export default counter