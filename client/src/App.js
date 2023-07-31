
import './App.css';
import Main from './components/Main';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { CheckUserExist } from './helper/helper';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
/** react routes */
const router=createBrowserRouter([
  {
    path:'/',
    element:<Main/>
  },
  {
    path:'/quiz',
    element:<CheckUserExist><Quiz/></CheckUserExist>
  },
  {
    path:'/result',
    element:<CheckUserExist><Result/></CheckUserExist>
  }
])
function App() {
  return (
  <>
  <RouterProvider router={router}/>
  </>
  );
}

export default App;
