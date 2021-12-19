import './Header.css';
import Switch from './Switch';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-g">G</span>
          <span className="logo-i">I</span>
          <span className="logo-f">F</span>
          <span className="logo-o">O</span>
          <span className="logo-s">S</span>
        </div>
        <Switch />
      </div>
    </header>
  );
}

export default Header;
