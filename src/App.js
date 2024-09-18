import React from "react";
import TourGuide from "./components/TourGuide";

const App = () => {
  return (
    <div>
      <header className="page-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button
              data-mdb-collapse-init
              className="navbar-toggler"
              type="button"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Navbar brand */}
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  height={15}
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
              </ul>
              {/* Left links */}
            </div>
            {/* Collapsible wrapper */}
            {/* Right elements */}
            <div className="d-flex align-items-center">
              {/* Icon */}
              <a className="text-reset me-3" href="#">
                <i className="fas fa-shopping-cart" />
              </a>
              {/* Notifications */}
              <div className="dropdown">
                <a
                  data-mdb-dropdown-init
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell" />
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              {/* Avatar */}
              <div className="dropdown">
                <a
                  data-mdb-dropdown-init
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height={25}
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right elements */}
          </div>
          {/* Container wrapper */}
        </nav>
      </header>
      <nav className="top-nav">
        <div className="container-fluid px-4 py-5 my-5 text-center">
          <div className="lc-block mb-4">
            <div editable="rich">
              <h2 className="display-2 fw-bold">
                Level up your{" "}
                <span className="text-primary">WordPress page!</span>
              </h2>
            </div>
          </div>
          <div className="lc-block col-lg-6 mx-auto mb-5">
            <div editable="rich">
              <p className="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap
              </p>
            </div>
          </div>
          <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            {" "}
            <a
              className="btn btn-primary btn-lg px-4 gap-3"
              href="#"
              role="button"
            >
              Try it free
            </a>
            <a
              className="btn btn-outline-secondary btn-lg px-4"
              href="#"
              role="button"
            >
              Learn more
            </a>
          </div>
          <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
            <img
              className="img-fluid"
              src="https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/10/undraw_going_up_ttm5.svg"
              width
              height={783}
              srcSet
              sizes
              alt
            />
          </div>
        </div>
      </nav>
      <aside className="sidebar">
        <h1 className="text-info text-center ">Sidebar</h1>
      </aside>
      <footer className="footer">
        <div className="text-center text-lg-start bg-body-tertiary text-muted">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-twitter" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-google" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-instagram" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-linkedin" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className>
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />
                    Company name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3" /> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3" /> + 01 234 567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
          {/* Copyright */}
        </div>
      </footer>
      <TourGuide />
    </div>
  );
};

export default App;
