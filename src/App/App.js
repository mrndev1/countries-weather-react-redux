import React from 'react';
import { Route, Routes } from 'react-router-dom';

// style
import './App.css';

// pages
import LandingPage from './Pages/LandingPage/LandingPage';
import Home from './Pages/Home/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

// pages sections
import Countries from './Pages/Home/sections/Countries/Countries';
import Weather from './Pages/Home/sections/Weather/Weather';


export default function App () { return routes };
const routes = (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Home' element={<Home/>}>
            <Route path='/Home' element={<Countries/>}/>
            <Route path='/Home/weather' element={<Weather/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
);