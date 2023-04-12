import React from 'react'
import { useState } from 'react';

// let za = fetch("https://lakshyak.pythonanywhere.com/getall" , {mode:"cors"})
// za.then(res => res.json()).then(d => {console.log(d)})

export default function Reports() {
  // react set to store the data 
  const [dbData, setdbData] = useState([]);

  // fetching data from database 
  const url = new URL('https://lakshyak.pythonanywhere.com/getall');
  fetch(url).then(response => response.json()).then(data => {
    console.log(data)
    setdbData(data)
  });

  return (
    <div className='container' style={{margin:"40px 0px 0px 0px" }}>
      <div className="resultList">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {dbData.map((artist) => (
              <tr>
                <th scope="row">{artist[0]}</th>
                <td colspan="2">{artist[1]}</td>
                <td >{artist[2]}</td>
                <td >{artist[3]}</td>
                <td >{artist[4]}</td>
                <td >{artist[5]}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>

  )
}
