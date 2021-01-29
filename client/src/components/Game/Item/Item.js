import React ,{useState} from 'react';
import {useDispatch} from "react-redux";
import {rightAnsAC} from "../../../redux/actionCreators/gameAC";

function Item({question, btn}) {
    const [answer,setAnswer] = useState('')
    const dispatch = useDispatch();
    const answerHandler = (event) => {
        const newState = event.target.value
        setAnswer(newState)
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        fetch(`${process.env.REACT_APP_URL}/api/game/${question.id}`)
            .then(res => res.json())
            .then(data => {
                if (answer == data.answer){
                    dispatch(rightAnsAC(question.cost))
                    btn.current.classList.add('disabled')
                } else {
                    console.log(btn.current.classList)
                    btn.current.classList.add('disabled')
                }
            })
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
       <p>{question.title}</p>
        <input onChange={answerHandler} value={answer}/>
        <button>Ответить</button>
      </form>
    </div>
  );
}

export default Item;
