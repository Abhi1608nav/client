
import '../styles/App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
/** react routes */

const router=createBrowserRouter([
  {
    path :'/',
    element:<div>Root Element</div>
  },
  {
    path :'/quiz',
    element:<div>Quiz Component</div>
  },
  {
    path :'/',
    element:<div>result Component</div>
  },
])

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}

export default App;
