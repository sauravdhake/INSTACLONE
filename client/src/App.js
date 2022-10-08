import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Postview from './PostView/postview';
import Landingpage from './PostView/Landingpage';
import Addpost from './PostView/Addpost';

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/postview' element={<Postview/>}/>
        <Route path='/Addpost' element={<Addpost/>}/>
      </Routes>
   </BrowserRouter>
    
   {/*  <Header/>
    <Postview/> */}
   </>
  );
}

export default App;
