import React, { useState, useEffect } from 'react'
import Card from '../Components/Card.component';
import Header from '../Components/Header.component';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {

  const [allEmployees, setAllEmployees] = useState([]);

  let employees = useSelector((state) => state.bookmarkHandler.empData);

  useEffect(() => {
    setAllEmployees(employees);
  }, [])


  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="col-md-14">
        <div className="row">
          {
            allEmployees.map((val) => {
              return (
                <div className="card col-md-4">
                  <Card {...val} />
                </div>            
                )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
