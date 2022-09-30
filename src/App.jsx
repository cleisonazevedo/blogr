import { Route, Routes } from 'react-router-dom';

import BlogLayout from './templates/BlogLayout';

import './App.css';


function App() {
  

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<BlogLayout/>}/>
     </Routes>
    </div>
  )
};

export default App;
