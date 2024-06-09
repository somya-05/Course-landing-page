import {Navbar} from './components/navbar';
import { ExpertText } from './components/expertText';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <ExpertText/>
  <div className="main-info d-flex flex-column">
    <div className="flex-fill">
      <span className="badge fs-5 fw-normal pe-4">
        <img src="./images/expert.png" className="expert-img pe-2" />
        Experts verified
      </span>
    </div>
    <p className="info flex-fill fw-bold">
      Choose the right course <br />
      for your learning...
    </p>
    <button
      className="play-btn btn btn-outline-light flex-fill py-2"
      type="button"
    >
      <img src="./images/play-button.svg" class="pe-2" />
        Get Started
    </button>
  </div>
  <div className="reviews">
    <p className="text-white">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div className="review-photo">
      <button className="bt-1 rounded-circle">
        <img src="./images/review.png" />
      </button>
      <button className="bt-2 rounded-circle">
        <img src="./images/review.png" />
      </button>
      <button className="bt-3 rounded-circle">
        <img src="./images/review.png" />
      </button>
      <button className="bt-4 rounded-circle text-white">+9</button>
    </div>
  </div>
  <div className="page-back d-flex justify-content-center align-items-center mt-5">
    <img src="./images/bg_image.png" className="bg-image" />
  </div>
  <div className="footer row py-4 px-4">
    <div className="col-sm-3">
      <div className="card-1 card rounded-pill">
        <div className="card-body">
          <p className="card-text text-center text-white">
            Leading Customer
            <br /> Delivery Platform
          </p>
          <img src="./images/purple.png" />
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card-2 card rounded-pill">
        <div className="card-body">
          <p className="card-text text-center text-white">
            Leading Customer
            <br /> Delivery Platform
          </p>
          <img src="./images/green.png" />
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card-3 card rounded-pill">
        <div className="card-body">
          <p className="card-text text-center text-white">
            Leading Customer
            <br /> Delivery Platform
          </p>
          <img src="./images/blue.png" />
        </div>
      </div>
    </div>
    <div className="links col-sm-3">
      <img src="/images/linkedin.png" />
      <img src="/images/insta.png" />
      <img src="/images/twitter.png" />
    </div>
  </div>
    </main>
  );
}
