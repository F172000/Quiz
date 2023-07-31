import React, { useEffect, useState } from 'react'
import style from '../styles/quiz.module.css';
import Questions from '../components/Questions';
import girl from '../assets/girl.png';
import { MoveNextQuestion } from '../hooks/FetchQuestions';
import { MovePrevQuestion } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/setResult';
import {Navigate} from 'react-router-dom'
/**redux store import */
import {useSelector,useDispatch} from 'react-redux';
export default function Quiz(){
  const [check,setchecked]=useState(undefined);
  const result=useSelector(state=>state.result.result);
  const {queue,trace}=useSelector(state=>state.questions);
  const dispatch=useDispatch();
  useEffect(()=>{
    console.log('this is quiz component',result);
  })
  /**next button event handler */
  function onNext(){
    console.log('on next click');
    if(trace<queue.length){
       /**update the trace value by using MoveNextAction */
      dispatch(MoveNextQuestion());
      /**insert a new result in the array */
    if(result.length<=trace){
      dispatch(PushAnswer(check));
    }
    }
    /**reset the value of the checked variable */
    setchecked(undefined);
  }
  /**prev button event handler */
  function onPrev(){
    console.log('on prev click');
    if(trace>0){
      dispatch(MovePrevQuestion());
    }
  }
  function onChecked(check){
console.log(check);
setchecked(check);
  }
  /**finished exam after the last question */
  if(result.length && result.length>=queue.length){
return <Navigate to={'/result'} replace='true'></Navigate>
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-8">
    <div >
      <img src={girl} className={style.people} alt="avatar" />
    </div>
    <div className="flex  flex-col justify-center items-center md:w-1/2">
        <div className={style.glass}>
  <h1 className="text-3xl font-bold flex flex-col items-center py-7">Quiz Application</h1>
 {/** display questions */}
 <Questions onChecked={onChecked}/>
 <div className='flex justify-between py-6 px-5'>
 {
  trace>0? <button className='prev ' onClick={onPrev}>Prev</button>:<div></div>
 }
    <button className='next ' onClick={onNext}>Next</button>
 </div>
 </div>
  </div>
  </div>
  )
}

