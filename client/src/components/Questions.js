// import React, { useEffect, useState } from 'react';
// import data from '../database/data';
// import { useDispatch, useSelector } from 'react-redux';
// import useFetchQuestion from '../hooks/FetchQuestions';
// import { updateResultAction } from '../redux/result_reducer';
// import { updateResult } from '../hooks/setResult';
// export default function Questions({onChecked}) {
// //   const [{ isLoading, apiData, serverError }] = useFetchQuestion();
// //   const [checked, setchecked] = useState(undefined);
// // const {trace}=useSelector(state=>state.questions);
// // const result=useSelector(state=>state.result.result);
// const [checked, setChecked] = useState(undefined)
// const { trace } = useSelector(state => state.questions);
// const result = useSelector(state => state.result.result);
// const [{ isLoading, apiData, serverError}] = useFetchQuestion() 
//   // Correctly access the 'queue' property from the Redux store
//   const questions = useSelector(state => state.questions.queue[state.questions.trace]);
//   const dispatch=useDispatch();
//   // const trace = useSelector(state => state.questions.trace);

//   useEffect(() => {
//     console.log(result[0]);
//     console.log({trace,checked});
//     dispatch(updateResult({trace,checked}))
//   },[checked]);

//   function onSelect(i) {
//     console.log('selected option is',i);
//     onChecked(i);
//     setChecked(i);
//     dispatch(updateResult({trace,checked}))
//   }

//   if (isLoading) return <h3 className='text-light'>isLoading</h3>;
//   if (serverError) return <h3 className='text-light'>{serverError || 'unknown error'}</h3>;

//   return (
//     <div className='questions py-5'>
//         {questions ? (
//         <>
//           <h2 className='text-light'>{questions?.question}</h2>
//           <ul key={questions?.id}>
//             {questions?.options.map((q, i) => (
//               <li key={i}>
//                 <input
//                   type='radio'
//                   value={false}
//                   name='options'
//                   className='radiostyle'
//                   id={`q${i}-option`}
//                   onChange={()=>onSelect(i)}
//                 />
//                 <label className='text-primary' htmlFor={`q${i}-option`}> {q}</label>
//                 <div className={`check ${result[trace] === i ? 'radiostyle' : ''}`}></div>
//               </li>
//             ))}
//           </ul>
//         </>
//       ) : (
//         <h3 className='text-light'>No questions available</h3>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetchQuestion from '../hooks/FetchQuestions';
import { updateResultAction } from '../redux/result_reducer';
import { updateResult } from '../hooks/setResult';

export default function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector(state => state.questions);
  useSelector(state=>console.log(state));
  const result = useSelector(state => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions.queue[state.questions.trace]);

  useEffect(() => {
    console.log(result);
    console.log({ trace, checked });
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  useEffect(() => {
    // When the question changes, update the 'checked' state to reflect the selected option
    setChecked(result[trace]);
  }, [trace]);

  function onSelect(i) {
    onChecked(i);
    setChecked(i);
  }

  if (isLoading) return <h3 className='text-light'>isLoading</h3>;
  if (serverError) return <h3 className='text-light'>{serverError || 'unknown error'}</h3>;

  return (
    <div className='questions py-5'>
      {questions ? (
        <>
          <h2 className='text-light'>{questions?.question}</h2>
          <ul key={questions?.id}>
            {questions?.options.map((q, i) => (
              <li key={i}>
                <input
                  type='radio'
                  value={false}
                  name='options'
                  className='radiostyle'
                  id={`q${i}-option`}
                  onChange={() => onSelect(i)}
                  checked={checked === i} // Set the checked attribute based on the local state
                />
                <label className='text-primary' htmlFor={`q${i}-option`}> {q}</label>
                <div className={`check ${checked === i ? 'radiostyle' : ''}`}></div>
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

