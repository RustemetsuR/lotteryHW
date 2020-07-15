import React, { Component } from 'react';
import './App.css';
import Numbers from './Numbers/Numbers';

class App extends Component {
  state = {
    lotteryNumbers: [
      {
        firstLotteryNumber: 0,
        secLotteryNumber: 0,
        thirdLotteryNumber: 0,
        fourthLotteryNumber: 0,
        fifthLotteryNumber: 0
      }
    ]
  }

  getRandom = () => {
    const number = this.state.lotteryNumbers;
    let numLotteryArr = [];
    let numberArrRandom = [];
    for(let i = 5; i <= 36;i++){
      numberArrRandom.push(i);
    }

    for (let i = 0; i < 5; i++) {
      let randomNumber = Math.floor(Math.random() * numberArrRandom.length);
      numLotteryArr.push(numberArrRandom[randomNumber]);
      numberArrRandom.splice(randomNumber,1);
      numLotteryArr.sort(function (a, b) { return a - b; })
    }

    number[0].firstLotteryNumber = numLotteryArr[0];
    number[0].secLotteryNumber = numLotteryArr[1];
    number[0].thirdLotteryNumber = numLotteryArr[2];
    number[0].fourthLotteryNumber = numLotteryArr[3];
    number[0].fifthLotteryNumber = numLotteryArr[4];
    this.setState({ number });
  };


  render() {
    return (
      <div className="App">
        <div className="container">
          <button type="button" onClick={this.getRandom}>New Numbers</button>
          <Numbers firstNum={this.state.lotteryNumbers[0].firstLotteryNumber} 
                   secNum={this.state.lotteryNumbers[0].secLotteryNumber} 
                   thirdNum={this.state.lotteryNumbers[0].thirdLotteryNumber} 
                   fourthNum={this.state.lotteryNumbers[0].fourthLotteryNumber} 
                   fifthNum={this.state.lotteryNumbers[0].fifthLotteryNumber} />
        </div>
      </div>
    );
  }

}


export default App;
