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
        </div>
    )
}

export default Question
