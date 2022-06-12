import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import ProjectsDetail from './Components/ProjectDetails/ProjectsDetail';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/blogs' element={<Blogs></Blogs>}></Route>
  <Route path='/project/:id' element={<ProjectsDetail></ProjectsDetail>}></Route>
  <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
