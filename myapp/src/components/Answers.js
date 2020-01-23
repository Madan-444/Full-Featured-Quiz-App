import React, { useState } from 'react'
import '../style/gameSection.css'
import Ans from './Ans'

function Answers({ data }) {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(1)
    console.log(data)
    return (
        <div className='row gameSection'>
            {data.slice(min, max).map(qtn => (
                <div className='col-md-8 offset-md-3 upperImg'>
                    <div className='question'>
                        <div className=''>
                            <h3> Q.N {max} {qtn.question} </h3>

                        </div>
                    </div>
                    <div className='button0'> <button type="button" class="btn btn-outline-info btn-lg btn-block"> <h4> {qtn.correct_answer} </h4> </button></div>
                    <div className='button1'> <button type="button" class="btn btn-outline-info btn-lg btn-block"><h4>  {qtn.incorrect_answers[0]} </h4> </button></div>
                    <div className='button1'> <button type="button" class="btn btn-outline-info btn-lg btn-block"> <h4> {qtn.incorrect_answers[1]} </h4> </button> </div>
                    <div className='button1'> <button type="button" class="btn btn-outline-info btn-lg btn-block"><h4> {qtn.incorrect_answers[2]} </h4> </button></div>
                    <div className='btnNextpos'>
                    <button className='btnNext' onClick={()=> { setMin(min +1); setMax(max+1)}}> <h4> Next ? </h4> </button>
                    </div>
                   
    
                </div>
                

                
            ))}

        </div>
    )
}

export default Answers

