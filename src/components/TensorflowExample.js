import React, { useState } from 'react';
import update from 'immutability-helper';

import './TensorflowExample.css';

const TensorflowExample = () =>{
    //Value Pairs
    const [valuePairsState, setValuePairsState] = useState([
        {x:-1, y:-3},
        {x:0, y:-1},
        {x:1, y:1},
        {x:2, y:3},
        {x:3, y:5},
        {x:4, y:7},
        
    ]);

    //Define the Model State 
    const [modelState, setModelState] = useState({
        model: null,
        trained: false,
        predictedValue: 'Click on train',
        valueToPredict:1,
    });


    // EVent Handlers 
    const handleValuePairChange =(e) =>{
        const updatedValuePairs = update(valuePairsState,{
            [e.target.dataset.index]:{
                [e.target.name]: {$set: parseInt(e.target.value)}
            }
        })
        setValuePairsState(
            updatedValuePairs
        )

        const handleAddItem = () => {
            setValuePairsState([
                ...valuePairsState,
                {x:1,y:1}
            ]);
        };
        

        const handleModelChange = e => setModelState({
            ...modelState,
            [e.target.name]: [parseInt(e.target.value)],
        });
        const handleTrainModel = () => {

        }
        const predictPredict = () => {
            
        }
    }
    return(
        <div className="tensorflow-example">  
        <div className='train-controls'>
            <h2 className='section'> Training Data (x,y) pairs </h2>
            <div className='row labels'>
                <div className='field-label column'>X</div>
                <div className='field-label column'>Y</div>
            </div>

            {valuePairsState.map((val,index) =>{
                return (
                    <div key ={index} className="row">
                        <input
                        className='field field-x column'
                        value={val.x}
                        name = "x"
                        data-index = {index}
                        onChange ={handleValuePairChange}
                        type ="number" pattern='[0-9]*'  />

                        
                        <input     
                        className='field field-y column'
                        value={val.y}
                        name = "y"
                        data-index = {index}
                        onChange ={handleValuePairChange}
                        type ="number"  
                         />

                    </div>
                );
            })}
            <button className='button-add-example button--green'
            onClick={handleAddItem}>
                +
                </button>

                <button className='button-add-example button--green'
            onClick={handleTrainModel}>
                +
                </button>
        </div>
        </div>
    );
};

export default TensorflowExample;