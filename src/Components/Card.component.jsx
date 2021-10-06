import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { togleBookmarks } from '../Store/actions/AddBookmark.action';
import {Link}from 'react-router-dom';
const Card = (props) => {
    const [selected,setSelected]=useState([])
    const dispatch = useDispatch();
    const tglBookmarks = (empid) => {
        dispatch(togleBookmarks(empid))
    }
    useEffect(() => {
        setSelected(myEmpmark)
    }, [selected])
    let myEmpmark = useSelector((state) => state.bookmarkHandler.bookmark)
    // console.log("+++++++++++++++",myEmpmark);
    return (
                           
                        <div className="card">
                            <div>
                                <img src={props.img} alt="product-img" height="200" width="100%" />
                                <button className="btn btn-secondary" onClick={() => tglBookmarks(props.id)}>Add</button>
                                <p>{props.id}</p>
                                <p>{props.name}</p>
                                <p>{props.profession}</p>
                            </div>
                            <Link to={'/profile/'+ props.id} className="btn btn-primary btn-block">View Profile</Link>
                        </div>
        
    )
}

export default Card;



