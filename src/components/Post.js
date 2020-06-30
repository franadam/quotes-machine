import React from 'react';

import './Post.css';

const post = (props) => {

    return (
        <div className='Post' style={{color: props.color, transition: 'color ease-in 0.5s'}}>
            <p className='quote'>{props.post[props.index].quote}</p>
            <p className='author'>- {props.post[props.index].author}</p>
            <div>
            <div className='icons'>
                <a style={{color: props.color, transition: 'color ease-in 0.5s'}} href='https://twitter.com/lesdoggg?lang=fr' target='_blank' rel="noopener noreferrer"><i className="fab fa-twitter-square"/></a>
                <a style={{color: props.color, transition: 'color ease-in 0.5s'}} href='https://twitter.com/lesdoggg?lang=fr' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-square"/></a>
            </div>
            <button onClick={props.clicked} style={{backgroundColor: props.color, transition: 'background-color ease-in 0.5s'}}>New Quote</button>
            </div>
        </div>
    );
};

export default post;