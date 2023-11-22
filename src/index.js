import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './MyComps/Header';
import MartialArts from './MyComps/MartialArts';
import Home from './MyComps/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>

<BrowserRouter>
<Routes>
    <Route path='/' element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path='martialarts' element={<MartialArts/>}/>
    </Route>
</Routes>
</BrowserRouter>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
