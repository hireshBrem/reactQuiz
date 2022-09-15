
import './App.css';
import { useState } from 'react';
import Question from './components/Question';

function App() {
  const[markingList, changeList] = useState("")
  const [counter, addCount] = useState(0)

  const questions = [{
    id:1,
    title:"What is the capital of Portugal?",
    options:["Rabat", "Madrid", "Lisbon"],
    answer:3,
    choice: "",
    feedback:markingList[0]
  }, {
    id:2,
    title:"What continent is Egypt in?",
    options:["Europe", "Africa", "Asia"],
    answer:2,
    choice: "",
    feedback:markingList[1]
  }, {
    id:3,
    title:"How many planets are in our solar system?",
    options:["7", "8", "9"],
    answer:2,
    choice: "",
    feedback:markingList[2]
  },{
    id:4,
    title:"What galaxy are we in?",
    options:["Dromudus", "MilkyKay", "MilkyWay"],
    answer:3,
    choice: "",
    feedback:markingList[3]
  },{
    id:5,
    title:"What is the capital of China?",
    options:["Beijing", "HongKong", "Seoul"],
    answer:1,
    choice: "",
    feedback:markingList[4]
  },
]

  const handleSubmit = (e) => {
    changeList("")
    questions.forEach((question, index)=>{
      console.log(question)
      if(question.choice == question.answer) {
        changeList(current=> [...current, "Correct!"])
        addCount(prevCount=>{return prevCount+1})
      } else {
        changeList(current=> [...current, "Incorrect!"])
      }
    })

  }

  return (
    <>
      <h1 className="underline text-center mt-20 text-[45px]">React Quiz App</h1>
      { counter==0 ? <h1></h1> : <h1 className='text-center text-[30px]'>Your score: {counter} / {questions.length}</h1>}
      <div className="mt-10 mb-10 max-w-3xl m-auto">
        <form className='' onSubmit={e=>e.preventDefault()}>
          <div className='text-center'>
            {
              questions.map((question) => {
                return <Question key={question.id} onChange={(value)=>question.choice=value} title={question.title} options={question.options} answer={question.answer} feedback={question.feedback} />
              })
            }
            <button type="submit" className='bg-cyan-300 font-bold rounded-md py-3 w-[100%]' onClick={(e)=>handleSubmit(e)}>Submit Quiz</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
