import React, { useState } from 'react'

const Question = (props) => {
    const [choice, changeChoice] = useState(0)

    return (
    <div className='bg-cyan-500 p-5 text-[25px] rounded-lg my-2'>
        <h1 className='text-purple-900 font-bold mb-5'>{props.title}</h1>
        <span className='my-3 block'>
            <input type="checkbox" onChange={(e) => {changeChoice(1);props.onChange(1)}} checked={choice===1 ? true : false} />
            <label className='ml-1'>{props.options[0]}</label>
        </span>
        <span className='my-3 block'>
            <input type="checkbox" onChange={(e) => {changeChoice(2);props.onChange(2)}} checked={choice===2 ? true : false} />
            <label className='ml-1'>{props.options[1]}</label>
        </span>
        <span className='my-3 block'>
            <input type="checkbox" onChange={(e) => {changeChoice(3);props.onChange(3)}} checked={choice===3 ? true : false} />
            <label className='ml-1'>{props.options[2]}</label>
        </span>
        <p className='text-white'>{props.feedback}</p>
    </div>
  )
}

export default Question