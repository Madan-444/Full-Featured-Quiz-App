import React from 'react'
import Answers from './Answers'


function Question(props) {
    console.log(props.datat)
    return (
        <div>
            {props.datat.map(qtn=> (
                <Answers data={qtn} />
            )
                
            )}
            <h1>hello Questions</h1>
        </div>
    )
}

export default Question
