import React, { useState } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import '../style/FormBackground.css'
import Question from './Question'

function DataFetching() {
    const [valuenum, setValue] = useState(0)
    const [category, setCatagory] = useState(22)
    const [level, setLevel] = useState('Easy')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const setNumber = (e) => {
        setValue(e.target.value)
    }
    const handleSelect = (e) => {
        setCatagory(e.target.value)

    }


    console.log(data)

    var generateData = (e) => {
        e.preventDefault()
        console.log(valuenum)
        console.log(category)
        console.log(level)

        axios.get(`https://opentdb.com/api.php?amount=${valuenum}&category=${category}&difficulty=${level}&type=multiple`)
            .then((res) => {
                setData([...data, res.data.results])
                setLoading(true)
            })
            .catch(err => console.log('error'))

    }

    return (

        <div className='container-fluid hero-image'>
            <div className='  row text-center'>
                <div className='col-lg-12 offset-md-3'>

                    <div className=' boxx shadow-none p-3 mb-5 bg-light rounded' style={{ width: '700px' }}>
                        <div className='mt-5'>
                            <form>
                                <h2 className='text-primary'><label>Find Your Questions  :</label></h2>
                                <hr />
                                <h4 className='pt-2'><label>Number of Question :</label></h4>

                                <input type='number' placeholder='Choose Number' min='0' max='20' style={{ width: '500px' }} value={valuenum} onChange={setNumber} />
                                <h4><label className='mt-2'>Select Category :</label></h4>
                                <select style={{ width: '500px' }} onChange={handleSelect} >
                                    <option value={22}>Geography</option>
                                    <option value={9}>General Knowledge</option>
                                    <option value={17}>Science & Nature</option>
                                    <option value={19}>Science : Mathematics</option>
                                    <option value={23}>History</option>
                                    <option value={24}>Politics</option>
                                    <option value={27}>Animals</option>
                                </select>
                                <h4><label className='mt-2'>Select Difficulty: </label></h4>
                                <select style={{ width: '500px' }} defaultValue={level} onChange={(e) => {
                                    setLevel(e.target.value)
                                }}>
                                    <option value='easy'>Easy</option>
                                    <option value='medium'>Medium</option>
                                    <option value='hard'>Hard</option>
                                </select>
                                <h2 className='m-4 '><button type="button" className="btn text-light bg-dark" onClick={generateData}>Generate Questions :</button></h2>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DataFetching
