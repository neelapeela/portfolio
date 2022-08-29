import logo from './logo.svg';
import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from './components/home.js'

const App = () =>{
  return(
    <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </HashRouter>
  )
}

export default App;
