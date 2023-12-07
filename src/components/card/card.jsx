import React from 'react'
import './style.css';

function Card(props) {
    return (

        <div className='card'>
            <div className='img_section'>
                <img src={props?.details?.show} className='image' />
            </div>
            <div className='card_detail'>
            <p className='title'> {props?.details?.title} </p>
            <div className='author_section'>
                <p className='author'> {props?.details?.educator} </p>
                <p>|</p>
                <p className='date'> {props?.details?.date} </p>
            </div>
            <p className='description'> {props?.details?.description} </p>
            </div>
        </div>
    )
}
export default Card;