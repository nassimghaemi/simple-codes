import React, {Component} from 'react';
import './Timer.css';

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            time:0
        };
      }
      componentDidMount() {
          this.TimerDispliay=setInterval(
              ()=>this.timer(),
              1000
          );
      }
      componentWillUnmount() {
        clearInterval(this.TimerDispliay);
      }
      timer() {
        this.setState(prevState => ({
            time: prevState.time + 1
          }));

      }
      setToZero(){
          this.setState({
              time:0
          })

      }
  
    render() {
        console.log(this.state.time)
        return (
        <div className="container">
            <div className="timer">
            {this.state.time.toLocaleString()}
          
            </div>
            <button onClick={()=>this.setToZero()}>Reset Timer</button>
        </div>
        )
    }
}
