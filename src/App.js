import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Mainbody from './Components/Mainbody';
import Reports from './Components/Reports';
import Items from './Components/Items';
import './sidebars.css'

let nextId = 0;

function App() {

  return (
    <BrowserRouter>
      {/* code for the button which collapses the Sidebar */}
      <div class="alert alert-primary" role="alert" style={{padding:"0px 0px 0px 0px "}}>
        <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <img src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1767512-1502509.png" alt="" style={{height:"40px"}} />
      </a>
      </div>
      

      {/* code for the  sidebar */}
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{width:"320px" ,padding:"0px 0px 0px 0px "}} >
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <div class="offcanvas-body" style={{width:"320px" ,padding:"0px 0px 0px 0px "}}>
          <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "270px" }}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
              <svg class="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
              <span class="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="#" class="nav-link" aria-current="page">
                  <svg class="bi pe-none me-2" width="16" height="16"><use xlinkHref="/"></use></svg>
                  <a href="/">Home</a>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-body-emphasis">
                  <svg class="bi pe-none me-2" width="16" height="16"><use xlinkHref="/report"></use></svg>
                  <a href="Reports">Reports</a>
                </a>
              </li>
              {/* <li>
                <a href="#" class="nav-link link-body-emphasis">
                  <svg class="bi pe-none me-2" width="16" height="16"><use xlinkHref="/export"></use></svg>
                  <a href="export">export</a>
                </a>
              </li> */}
              <li>
                <a href="#" class="nav-link link-body-emphasis">
                  <svg class="bi pe-none me-2" width="16" height="16"><use xlinkHref="/items"></use></svg>
                  <a href="items">items</a>
                </a>
              </li>
            </ul>
            <hr />
            <div class="dropdown">
              <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" class="rounded-circle me-2" width="32" height="32" />
                <strong>mdo</strong>
              </a>
              <ul class="dropdown-menu text-small shadow">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div>
        <Routes>
          {/* these are the routers we shall add more if needed  */}
          <Route index element={<Mainbody />} />
          <Route path="/items" element={<Items />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<Items />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
