import Navigation from '../components/Navigation';
import RoundCircle from '../assets/img/roundCircle.png';
import RectangleBox from '../assets/img/rectangle-box.png';
import TiangleIcon from '../assets/img/triangle-icon.png';
import BannerImage from '../assets/img/banner-img.png';
import GroupImage from '../assets/img/group.png';
import PrimaryBtn from '../components/PrimaryBtn';
import './Home.style.scss';

function Home() {
  return (
    <>
      <div className="container">
        <header className="header">
          <Navigation />
          <div className="header__bottom">
            <div className="header__text-box">
              <img src={RoundCircle} alt="round circle" />
              <p className="header__text">
                Let's build skills with IFA & learn without limits...
              </p>
              <p className="header__text-small">
                Take your learning to the next level
              </p>
            </div>
            <div className="header__img-box">
              <div className="header__banner-img">
                <img src={BannerImage} alt="group of kids learning" />
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="section-experiences exp">
            <div className="exp__img-box">
              <img src={GroupImage} alt="group of students" />
            </div>
            <div className="exp__text-box">
              <h3>Learn Anywhere, Anytime</h3>
              <h2>Positive Learning Experiences At Your Fingertips</h2>
              <p>
                Access digital educational content directly on your mobile
                device and interact with a learning bot through any one of your
                preferred social messaging platforms. Come collaborate with
                peers and educators from around the world, and exchange
                knowledge and ideas as life-long learners.
              </p>

              <PrimaryBtn btnText={'Register as learner'} />
            </div>
          </section>

          <section className="section-community community"></section>
        </main>
      </div>
    </>
  );
}

export default Home;
