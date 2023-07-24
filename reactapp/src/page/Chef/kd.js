import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Get.css'

function View() {
  const [taskData, setTaskData] = useState([]); // Fix variable name here

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8080/get', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setTaskData(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  useEffect(() => {
    console.log(taskData); // This will log the updated dataList whenever it changes.
  }, [taskData]);

  return (
    <div>
      
      <table className="gen">
      <div className="container12">
        <thead>
          <tr className="form-title">
            <th className="header-cell">Concert ID</th>
            <th className="header-cell">Concert Lead</th>
            <th className="header-cell">Show Title</th>
            <th className="header-cell">Genre</th>
            <th className="header-cell">Type</th>
            <th className="header-cell">Date</th>
            <th className="header-cell">Start Time</th>
            <th className="header-cell">End Time</th>
            <th className="header-cell">Location</th>
          
          </tr>
        </thead>
        <tbody>
          {taskData.map((events) => (
            <tr key={events.concertid}>
              <td>{events.concertid}</td>
              <td>{events.concertlead}</td>
              <td>{events.showtitle}</td>
              <td>{events.genre}</td>
              <td>{events.type}</td>
              <td>{events.date}</td>
              <td>{events.timefrom}</td>
              <td>{events.timeto}</td>
              <td>{events.location}</td>
            
              
            </tr>
          ))}
        </tbody>
        </div>
      </table>
    </div>
  );
}

export default View;