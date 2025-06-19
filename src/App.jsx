import React from 'react';
// import Child from './components/Child.jsx';
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Contact from './pages/Contact.jsx'; 
// import Skills from './pages/Skills.jsx';
// import LoginTemp from './pages/LoginTemp.jsx';
import Counter from './components/Counter.jsx';

const App = () => {
  var fruits = ["Pen", "Pencil", "Eraser"];
  var user = { username: "Inba", password: "1234" };

  return (
    <div>
      <h1>Hello World</h1>
      {/* <Child name="Inba" phnNum="9876578912" dept="IT" />
      <Home items={fruits} users={user} />
      <Skills />
      <About />
      <Contact />
      <LoginTemp/>*/}
      <Counter/>
    </div>
  );
};

export default App;
