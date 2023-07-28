import React from 'react'
import { Link } from 'react-router-dom';
import study from '../assets/study.png';
import style from '../styles/quiz.module.css'
import '../styles/result.css';
import ResultTable from './ResultTable';
export default function Result(){
  function onRestart(){
    console.log('on Restart');
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
        <span >Daily Tution</span>
          </div>
          <div className='flex justify-between'>
        <span>Total Quiz Points</span>
        <span >50</span>
          </div>
          <div className='flex justify-between'>
        <span>Total Questions</span>
        <span >05</span>
          </div>
          <div className='flex justify-between'>
        <span>Total Attempts</span>
        <span >03</span>
          </div>
          <div className='flex justify-between'>
        <span>Total Earn Points</span>
        <span >30</span>
          </div>
          <div className='flex justify-between'>
        <span>Quiz Result</span>
        <span >Passed</span>
          </div>
        </div>
        <div className="flex flex-col items-center py-5">
        <button className={style.btn} onClick={onRestart}>
              Restart
            </button>
        </div>
        <div className='container'>
          {/**Result table */}
   <ResultTable/>
 </div>
      </div>
    </div>
  </div>
 </div>
  )
}
