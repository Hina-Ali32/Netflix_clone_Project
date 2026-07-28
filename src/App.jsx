import {BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignUp from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Movies from './pages/Movies.jsx'
import TVshows from './pages/Tvshows.jsx'
import NewandPopular from './pages/NewandPopular.jsx'
import Animation from './pages/Animation.jsx'
import Search from './pages/Search.jsx'
import MyList from './pages/MyList.jsx'
import PrivateRoute from './components/Privateroute.jsx'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>

       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/dashboard" element= {<PrivateRoute>{<Dashboard/>}</PrivateRoute>}/>
       <Route path="/movies" element={<PrivateRoute>{<Movies/>}</PrivateRoute>}/>
       <Route path="/tvshows" element={<PrivateRoute>{<TVshows/>}</PrivateRoute>}/>
<Route path="/newandpopular" element={<PrivateRoute>{<NewandPopular/>}</PrivateRoute>}/>
<Route path="/animation" element={<PrivateRoute>{<Animation/>}</PrivateRoute>}/>
<Route 
  path="/search/:query" 
  element={<PrivateRoute>{<Search />} </PrivateRoute>}
  
/>
<Route path="/mylist" element={<PrivateRoute>{<MyList/>}</PrivateRoute>}/>
    </Routes>
    
  
    </BrowserRouter>
  )  
}

export default App
