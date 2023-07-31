import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import study from '../assets/study.png';
import style from '../styles/quiz.module.css'
import '../styles/result.css';
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux'; 
import { resetResultAction } from '../redux/result_reducer';
import { resetallAction } from '../redux/question_reducer';
import {attempts_Number,earnpoints_Number,flagResult} from '../helper/helper';
export default function Result(){
  const dispatch=useDispatch();
  const {questions:{queue,answers},result:{result,userId}}=useSelector(state=>state);
  useEffect(()=>{
    console.log(flag);
  })
  const user=userId;
  const totalPoints=queue.length*10;
  const attempts=attempts_Number(result);
  const earnpoints=earnpoints_Number(result,answers,10);
  const flag=flagResult(totalPoints,earnpoints);
  function onRestart(){
    // console.log('on Restart');
    dispatch(resetallAction())
    dispatch(resetResultAction())
  }
  return (
    <div>
    <div className="flex m-5 flex-col md:flex-row gap-8 md:gap-16 py-8">
    <div >
      <img src={study} className={style.people} alt="avatar" />
    </div>
    <div className="flex flex-col justify-center items-center md:w-1/2">
      <div className={style.glass}>
        <h1 className="text-3xl font-bold flex flex-col items-center py-5 list">Quiz Application</h1>
        <div className='result flex-center m-3'>
          <div className='flex justify-between '>
        <span>username</span>
        <span style={{color:'indigo'}}>{user||"Daily tution"}</span>
          </div>
          <div className='flex justify-between'>
        <span>Total Quiz Points</span>
        <span >{totalPoints||0}</span>
          </div>
          <div className='flex justify-between'>
        <span>Total Questions</span>
        <span >{queue.length||0}</span>
          </div>
          <div className='flex justify-between'>
        <span>Total Attempts</span>
        <span >{attempts||0}</span>
          </div>
          <div className='flex justify-between'>
        <span>Total Earn Points</span>
        <span >{earnpoints||0}</span>
          </div>
          <div className='flex justify-between'>
        <span>Quiz Result</span>
        <span style={{color:`${flag? "green":"#ff2a66"}`}}>{flag? "Passed":"Fail"}</span>
          </div>
        </div>
        <div className="flex flex-col items-center py-5">
        <Link to={'/'} className={style.btn} onClick={onRestart}>
              Restart
            </Link>
        </div>
        {/* <div className='container'>
   <ResultTable/>
 </div> */}
      </div>
    </div>
  </div>
 </div>
  )
}
