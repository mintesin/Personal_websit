import React from "react";



function Heading() {


  return (
    <section className="head-sec" >

      <div className="header">
        <nav class="  navbar navbar-expand-sm ">
          <div class="container-fluid">

            <button class="nav-item navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"><svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="menu nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="menu nav-link" href="#education">Education</a>
                </li>

                <li class="nav-item">
                  <a class="menu nav-link" href="#certification">Certification</a>
                </li>
                <li class="nav-item">
                  <a class="menu nav-link" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="menu nav-link" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                  <a class="menu nav-link" href="#contact">Contact</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>

      </div>
    </section>
  );
}

export default Heading;