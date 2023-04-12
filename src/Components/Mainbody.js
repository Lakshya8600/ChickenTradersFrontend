import React from 'react'
// import { useState } from 'react';W

export default function Mainbody() {

  return (
    // this is the code for the form , duplicate them and use accordingly  , you can remove the type = password text
    <div class="container" style={{margin:"20px 10px 10px 10px"}}>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
      </div>
    </div>
  )
}
