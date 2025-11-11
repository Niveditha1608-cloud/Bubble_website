import logo from './logo.svg';
import './App.css';
import Comp1 from './Components/Comp1';
import Jsxdemo from './Components/Jsxdemo';
import Propsdemo from './Components/Propsdemo';
import Greetings from './Components/Greetings';
import UseStatedemo from './Components/useStatedemo';
import Usercomp from './Components/Usercomp';
import Counter from './Components/Counter';
import BMI from './Components/BMI';
import Currency from './Components/Currency';
import { Suspense, useContext, useState } from 'react';
import Wrapper from './Components/Wrapper';
import Eventsdemo from './Components/Eventsdemo';
import Listdemo from './Components/Listdemo';
import Userlist from './Components/Userlist';
import Productlist from './Components/Products/Productlist';
import Useffectdemo from './Components/Hooks/Useffectdemo';
import Postlist from './Components/Hooks/Postlist';
import Usernamelist from './Components/Hooks/Usernamelist';

import Uncontrolledform from './Components/Forms/Uncontrolledform';
import Controlledform from './Components/Forms/Controlledform';
import Fetchdemo from './Components/APIdemo/Apidemo/Fetchdemo';
import Axiosdemo from './Components/APIdemo/Apidemo/Axiosdemo';
import { Route, Routes } from 'react-router-dom';
import Errrorcomp from './Errrorcomp';
import Topnavbar from './Components/Topnavbar';
import Productdetails from './Components/Products/Productdetails';
import Comments from './Components/Products/Comments';
import Description from './Components/Products/Description';
import { createContext } from 'react';
import { lazy } from 'react';
let Citylist=lazy(()=>import("./Components/Hooks/Citylist"))


export let UsernameContext = createContext()
export let ThemeContext = createContext()
function App() {
const[theme,settheme]=useState("dark")

  return (
    <div className="App">
      <UsernameContext.Provider value={"tendulkar"}>
        <ThemeContext.Provider value={theme}>
        <Topnavbar />
        <Routes>
          <Route path='/' element={<Greetings msg="Good evening" name="Sachin" age={50} />} />
          <Route path='/bmi' element={<BMI />} />
          <Route path='/postlist' element={<Postlist />} />
          <Route path="/products" element={<Productlist />} />
          <Route path="/productdetails/:pname/:pid" element={<Productdetails />}>
            <Route path="comments" element={<Comments />} />
            <Route path="description" element={<Description />} />
          </Route>
          <Route path="/Login" element={<Controlledform />} />
          <Route path="/citylist" element={<Suspense fallback={<p>Loading citylist...</p>}><Citylist/></Suspense>}/>
          <Route path="*" element={<Errrorcomp />} />
        </Routes>
        </ThemeContext.Provider>
      </UsernameContext.Provider>
    </div>
  );
}

export default App;
