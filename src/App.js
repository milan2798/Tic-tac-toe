import React from 'react';
import moduleName from 'module'
import { useState } from 'react';
import appcss from './App.css'
import Square from './Component/Square'
import celebration from './Component/celebration'
import calculateWinner from './Component/calculate'


const App = () => {

    const istate = {
        square: Array(9).fill(null),
        xIsNext: true,
        color:true
    }

    const [state, setState] = useState(istate);
    const handleClick = (i, e) => {
        let square = [...state.square];
        if (square[i] != null) {
            alert("alredy filled!!")
        }
        else {
            square[i] = state.xIsNext ? 'X' : 'O';
            setState({ square: square, xIsNext: !state.xIsNext,color:false });
        }

    }


    const ticitem = (i) => {
        return <Square value={state.square[i]} color={state.color} onClick={(e) => handleClick(i, e)} />
    }

    const restart = () => {

        setState(istate);
    }


    
    const winner = calculateWinner(state.square)
    let status;
    if (winner) {
        status = <h1>winner: {winner}</h1>;
        celebration();
    }
    else {
        status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
    }

    return (
        <div>

            {status}

            <h1><i>Tic Tac Toe </i></h1>
            <div className="ticbox">
                <div className="ticrow">
                    {ticitem(0)}
                    {ticitem(1)}
                    {ticitem(2)}
                </div>
                <div className="ticrow">
                    {ticitem(3)}
                    {ticitem(4)}
                    {ticitem(5)}
                </div>
                <div className="ticrow">
                    {ticitem(6)}
                    {ticitem(7)}
                    {ticitem(8)}
                </div>
                <button className="restart" onClick={restart}>Click to Restart!</button>
            </div>
            <canvas id="celebration"></canvas>

        </div>
    );

}

export default App;