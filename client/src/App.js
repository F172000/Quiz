
import './App.css';
import Main from './components/Main';
import Quiz from './components/Quiz';
import Result from './components/Result';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
/** react routes */
const router=createBrowserRouter([
  {
    path:'/',
    element:<Main/>
  },
  {
    path:'/quiz',
    element:<Quiz/>
  },
  {
    path:'/result',
    element:<Result/>
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
