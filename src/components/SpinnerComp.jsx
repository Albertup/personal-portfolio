import React, { useEffect, useState } from 'react'
import App from '../App';
import MainPage from '../pages/MainPage';

import "./SpinnComp.css";

const SpinnerComp = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

    useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setloading(true);
          setTimeout(() => {
          setcompleted(true);
          }, 1000);
        });
    }, 1000);
  }, []);

  return (
    <>
    {!completed ? (
      <>
        {!loading ? (
          <div className="c-spinner-container">
            <div className="center">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
          </div>
        ) : (
          <div className="c-spinner-logo">
          
          <div className="c-spinner-completed"></div>
          </div>
          
        )}
      </>
    ) : (
      <>
        
      </>
    )}
  </>
);
}

export default SpinnerComp