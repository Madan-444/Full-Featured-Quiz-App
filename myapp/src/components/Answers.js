import React, { useState } from 'react'
import '../style/gameSection.css'
import {UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import AutoCounter from './AutoCounter'
import MyModal from './Modal'

function Answers({ data }) {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(1)
    const [correct,setCorrect] = useState(0)
    const [alreadyClicked,ansAlready] = useState(false)
    const [clicked, seClick] = useState(true)
    const [btnClick1, setBtnClick1] = useState('button1')
    const [btnClick2, setBtnClick2] = useState('button1')
    const [btnClick3, setBtnClick3] = useState('button1')
    const [btnClick4, setBtnClick4] = useState('button1')

    console.log(data)
    return (
        <div className='row gameSection'>
            {data.slice(min, max).map(qtn => (
                <div key={qtn.question} className='col-md-8 offset-md-3 upperImg'>

                    <div className='question'>
                        <div className=''>
                            <h3> Q.N {max} {qtn.question} </h3>

                        </div>
                    </div>


                    <div className={btnClick1} style={{ marginTop: '60px' }}> <button type="button" class="btn btn-outline-info btn-lg btn-block" onClick={() => {if(!alreadyClicked){setCorrect(correct +1);ansAlready(true)} else{setCorrect(correct)}; seClick(false); setBtnClick1('btnClick'); setBtnClick2('button1'); setBtnClick3('button1'); setBtnClick4('button1') }} > <h4> {qtn.correct_answer} </h4> </button></div>

                    <div className={btnClick2}> <button type="button" className="btn btn-outline-info btn-lg btn-block" onClick={() => { seClick(false); setBtnClick1('button1'); setBtnClick2('btnClick'); setBtnClick3('button1'); setBtnClick4('button1') }}  ><h4>  {qtn.incorrect_answers[0]} </h4> </button></div>

                    <div className={btnClick3}> <button type="button" class="btn btn-outline-info btn-lg btn-block" onClick={() => { seClick(false); setBtnClick1('button1'); setBtnClick2('button1'); setBtnClick3('btnClick'); setBtnClick4('button1') }}  > <h4> {qtn.incorrect_answers[1]} </h4> </button> </div>
                    <div className={btnClick4}> <button type="button" class="btn btn-outline-info btn-lg btn-block" onClick={() => { seClick(false); setBtnClick1('button1'); setBtnClick2('button1'); setBtnClick3('button1'); setBtnClick4('btnClick') }}  ><h4> {qtn.incorrect_answers[2]} </h4> </button></div>
    
                    {max < data.length ? (<div className='btnNextpos'>
                            {!clicked ? <button className='btnNext' id="UncontrolledPopover" type="button" onClick={() => {ansAlready(false); seClick(true); setMin(min + 1); setMax(max + 1); setBtnClick1('button1'); setBtnClick2('button1'); setBtnClick3('button1'); setBtnClick4('button1'); }}> <h4> Next ? </h4> </button> : <div>
                                <button className='btnNext' id="UncontrolledPopover" type="button" onClick={() => { setMin(min); setMax(max); }}> <h4> Next ? </h4> </button>
                                <UncontrolledPopover placement="right" target="UncontrolledPopover">
                                    <PopoverHeader>WARNING</PopoverHeader>
                                    <PopoverBody>Select anyone Answer first then i will let you go Haha.</PopoverBody>
                                </UncontrolledPopover>
                            </div>}


                        </div>)
                         : (<MyModal clasbtn='btnNext' ans={correct} />)}

                    <div className='lcqs'>
                        
                        <div>Question Solved: {max}/{data.length} </div>
                        <div>Category: {qtn.category} </div>
                        <div>Level: {qtn.difficulty} </div>
                        <h2 className='counter'> <AutoCounter /> </h2>

                    </div>



                </div>

            ))}

        </div>
    )
}

export default Answers


