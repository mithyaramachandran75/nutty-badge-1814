// import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login'
import { Routes, Route } from 'react-router-dom';
const AllRoutes = ()=>{

    return (
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>        
    )
}

export default AllRoutes;