import React from 'react';
// import Child from './components/Child.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx'; 
import Skills from './pages/Skills.jsx';
import Hooks from './pages/Hooks.jsx';
import State from './Hooks/State.jsx';
import Effect from './Hooks/Effect.jsx';
import Effect2 from './Hooks/Effect2.jsx';
import './index.css'
import LoginTemp from './pages/LoginTemp.jsx';
// import Counter from './components/Counter.jsx';
import Navbar from './components/Navbar.jsx';
import Ref from './Hooks/Ref.jsx';
import  { Route,Routes} from 'react-router-dom';
import Reducer from './Hooks/Reducer.jsx';
const App = () => {
  // <h1>Hello World</h1>
  var fruits = ["Pen", "Pencil", "Eraser"];
  var user = { username: "Inba", password: "1234" };

  return (
    <div>
      
      {/* <Child name="Inba" phnNum="9876578912" dept="IT" />
      <Home items={fruits} users={user} />
      <Skills />
      <About />
      <Contact />
      <LoginTemp/>*/}
      {/* <Counter/> */}
      {/* <LoginTemp/> */}
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home items={fruits} users={user} />} />
        <Route path='/about' element={<About items={fruits} users={user}/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/hooks' element={<Hooks/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/effect' element={<Effect/>}/>
        <Route path='/effect2' element={<Effect2/>}/>
        <Route path='/login' element={<LoginTemp/>}/>
        <Route path='/ref' element={<Ref/>}/>
        <Route path='/red' element={<Reducer/>}/>
      </Routes>
    </div>
  );
};

export default App;
