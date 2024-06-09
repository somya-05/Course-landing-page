export function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg">
        {    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <img src="./images/course.png" className="course-img my-2 ps-5" />
      <p className="nav-head my-2 fw-bold fs-5">CourseEra</p>
      <ul className="navbar-nav mx-auto fs-5">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Program
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Price
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <button
        className="btn btn-light my-2 my-sm-0 mx-5 fw-bold rounded-pill"
        type="button"
      >
        Log In
      </button>
    </div>}
      </nav>
    );
  }