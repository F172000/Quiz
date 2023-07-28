// import React, { useEffect, useState } from 'react'
// import data from '../database/data';
// import {useSelector} from 'react-redux';
// /**custom hook */
// import useFetchQuestion  from '../hooks/FetchQuestions';
// export default function Questions() {
//     const [checked,setchecked]=useState(undefined);
//     const [{isLoading,apiData,serverError}]=useFetchQuestion();
//     const question=data[0];
//     const data1=state=>state.questions.queue[state.questions.trace];
//     const questions=useSelector(data1);
//     const trace =useSelector(state=>state.questions.trace);
//     useEffect(()=>{
//       console.log(questions);
//       console.log(trace);
//     },[questions, trace]);
//     function onSelect(){
//         // setchecked()
//         console.log('radio button is changed');
//     }
//     if(isLoading) return <h3 className='text-light'>isLoading</h3>
//     if(serverError) return <h3 className='text-light'>{serverError||'unknown error'}</h3>
//   return (
//     <div className='questions py-5'>
//       <h2 className='text-light'>{questions?.question}</h2>
//       <ul key={questions?.id}>
//        {
//         questions?.options.map((q,i)=>(
//             <li key={i}>
//                 <input
//                 type='radio'
//                 value={false}
//                 name='options'
//                 id={`q${i}-option `}
//                 onChange={{onSelect}}/>
//                 <label className='text-primary' htmlFor={`q${i}-option `}>  {q}</label>
//                 <div className='check'></div>

//             </li>
//         ))
//        }
//       </ul>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import data from '../database/data';
import { useSelector } from 'react-redux';
import useFetchQuestion from '../hooks/FetchQuestions';

export default function Questions() {
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const [checked, setchecked] = useState(undefined);

  // Correctly access the 'queue' property from the Redux store
  const questions = useSelector(state => state.questions.queue[state.questions.trace]);
  const trace = useSelector(state => state.questions.trace);

  useEffect(() => {
    console.log(questions);
    console.log(trace);
  }, [questions, trace]);

  function onSelect() {
    console.log('radio button is changed');
  }

  if (isLoading) return <h3 className='text-light'>isLoading</h3>;
  if (serverError) return <h3 className='text-light'>{serverError || 'unknown error'}</h3>;

  return (
    <div className='questions py-5'>
        {questions ? (
        <>
          <h2 className='text-light'>{questions.question}</h2>
          <ul key={questions.id}>
            {questions.options.map((q, i) => (
              <li key={i}>
                <input
                  type='radio'
                  value={false}
                  name='options'
                  id={`q${i}-option`}
                  onChange={onSelect}
                />
                <label className='text-primary' htmlFor={`q${i}-option`}> {q}</label>
                <div className='check'></div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h3 className='text-light'>No questions available</h3>
      )}
    </div>
  );
}

