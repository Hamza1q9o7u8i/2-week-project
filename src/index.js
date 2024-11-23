
import React from 'react';
import ReactDOM from 'react-dom/client';  // Import ReactDOM
import {Route,Routes,BrowserRouter} from "react-router-dom"
import App from './App';
import CarQuestions from './Components/CarQuestion';
import SportQuestions from './Components/Sport';
import GeographyQuestions from './Components/Geography';
import GeneralQuestions from './Components/GeneralQuestion';
import NatureQuestions from './Components/NatureQuestion';
import EntertainmentQuestions from './Components/Entertainment';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<Routes>
  <Route path='/' element={  <App />}/>
  <Route path='/Question' element={<CarQuestions/>}/>
  <Route path='/SportQuestion' element={<SportQuestions/>}/>
  <Route path='/GeographyQuestion' element={<GeographyQuestions/>}/>
  <Route path='/GeneralQuestion' element={<GeneralQuestions/>}/>
  <Route path='/NatureQuestion' element={<NatureQuestions/>}/>

  <Route path='/FunQuestion' element={<EntertainmentQuestions/>}/>
  <Route path='/EntertainmentQuestion' element={<EntertainmentQuestions/>}/>
  {/* <Route path='/TotalResult' element={<TotalProgress/>}/>  */}
</Routes>
  

    </BrowserRouter>
    
  
  </React.StrictMode>
);
