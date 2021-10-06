import React from 'react'
import Header from '../Components/Header.component'
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
    let myEmp = useSelector((state) => state.bookmarkHandler.empData)
    console.log("99999999999999999999999999999", myEmp);
    let Id = useParams()
    console.log("--->", Id.valueId);
    let alldatas = myEmp.filter((val) => {
        return val.id == Id.valueId

    })
    console.log("aaaaaaaaaaaaaaa", alldatas);
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="container">
                <div className="card">
                    <div className="m-3">
                        <img src={alldatas[0].img} alt="product-img" height="200" width="40%" />
                   
                    <p>{alldatas[0].id}</p>
                    <p>{alldatas[0].name}</p>
                    <p>{alldatas[0].profession}</p>
                    <p>{alldatas[0].description}</p>
                    </div>
                </div>
                <Link to="/" className="btn btn-primary btn-block">Back to Home</Link>
            </div>
        </div>
    )
}

export default Profile;
