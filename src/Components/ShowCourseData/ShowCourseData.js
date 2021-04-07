import React from 'react';

const ShowCourseData = (props) => {
    const data = props.data;
    const {CourseName, email, image, Coursefree, trainer} = data;
    const handleClick = props.handleClick;

    return (
        <div>
            <div style={{backgroundColor:'gray', marginBottom: '10px'}}>
               <img width="250px" src={image} alt=""/>
               <h3>Course Name : {CourseName}</h3>
               <h3>Trainer : {trainer}</h3>
               <h3>Email : {email}</h3>
               <h3>Course fee : {Coursefree}tk</h3>
               <button onClick={() => handleClick(data)}>Buy Course</button>
            </div>
        </div>
    );
};

export default ShowCourseData;