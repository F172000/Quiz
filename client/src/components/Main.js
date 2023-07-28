
import React, { useRef } from 'react';
import style from '../styles/quiz.module.css';
import { Link,useNavigate } from 'react-router-dom';
import people from '../assets/people.png';

export default function Main() {
    const navigate=useNavigate();
    const inputRef=useRef(null);
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-8">
      <div >
        <img src={people} className={style.people} alt="avatar" />
      </div>
      <div className="flex flex-col justify-center items-center md:w-1/2">
        <div className={style.glass}>
          <h1 className="text-3xl font-bold flex flex-col items-center py-5 list">Quiz Application</h1>
          <ol className="list-decimal py-3 px-3">
            <li>You will be asked 10 questions one after the other.</li>
            <li>10 points are awarded for the correct answer.</li>
            <li>Each question has three options.</li>
            <li>You can review and change answers before the quiz finishes.</li>
            <li>The result will be declared at the end of the quiz.</li>
          </ol>
          <form id="form" className="flex flex-col items-center py-5">
            <input ref={inputRef} type="text" placeholder="username*" className={`${style.textbox} justify-center text-center`} />
          </form>
          <div className="flex flex-col items-center py-5">
            <button className={style.btn} onClick={()=>navigate('/quiz')}>
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



