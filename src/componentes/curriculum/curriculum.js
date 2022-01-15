import React from 'react';
import cv from '../curriculum/cv.jpg';
import './curriculum.css';
import { Image } from 'react-bootstrap';

const Curriculum = () => {
    return (
        <div>
            <Image className='imagenCv' src={cv} />
        </div>
    )
}



export default Curriculum;
