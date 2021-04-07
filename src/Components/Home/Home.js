import React, {useEffect, useState } from 'react';
import './Home.css';
import fakedata from '../../fakeData/fakeData.json';
import ShowCourseData from '../ShowCourseData/ShowCourseData';
import Cart from '../Cart/Cart';


const Home = () => {
    const [Data , setData] = useState([]);

    useEffect(() => {
        setData(fakedata)
    },[]);

    const [exatData , setExatData] = useState([]);
    const handleClick = (id) => {
        const newCart = [...exatData,id]
        setExatData(newCart);
    }

    return (
        <div>
            <div className="left_side">
                 {
                     Data.map(td => <ShowCourseData data={td} handleClick={handleClick}></ShowCourseData>)
                 }
            </div>
            <div className="right_side">
                 <Cart data={exatData}></Cart>
            </div>
        </div>
    );
};

export default Home;