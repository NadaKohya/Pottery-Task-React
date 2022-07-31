import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home';
import { Albums } from './Components/Albums';
import { Details } from './Components/Details';
import { Form } from './Components/Form';
import { Error } from './Components/Error';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}> </Route>
       <Route path="/details/:id" element={<Details></Details>}></Route>
       <Route path="/form" element={<Form></Form>}></Route>
       <Route path="*" element={<Error></Error>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
