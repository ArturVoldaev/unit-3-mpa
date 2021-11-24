import './App.css';
import Home from './Home';
import Header from './Header';
import Category from './Category';
import About from './About';
import CategoryDescription from './CategoryDescription';
import Error from './Error';
//import Footer from './Footer';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div >
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route exact path='/cat' element={<Category/>}/>
          <Route path='/cat/:nameCategory' element={<CategoryDescription/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
