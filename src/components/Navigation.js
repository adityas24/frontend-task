import logo from '../assets/img/logo.png';
import country from '../assets/img/country.png';
import './Navigation.style.scss';

function Navigation() {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="logo__img" />
      </div>

      <nav className="nav">
        <ul className="nav__list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">about us</a>
          </li>
          <li>
            <a href="#">courses</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>

      <div className="nav__right">
        <div className="nav__country">
          <img src={country} alt="United Kingdom" />
        </div>
        <a href="#" className="nav__login">
          Login
        </a>
        <a href="#" className="nav__started">
          Get started
        </a>
      </div>
    </div>
  );
}

export default Navigation;
