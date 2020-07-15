import React from 'react'

const Numbers = props =>{
    return(
        <div className="numbers-div">
            <div><p>{props.firstNum}</p></div>
            <div><p>{props.secNum}</p></div>
            <div><p>{props.thirdNum}</p></div>
            <div><p>{props.fourthNum}</p></div>
            <div><p>{props.fifthNum}</p></div>
      </div>
    )
}

export default Numbers;