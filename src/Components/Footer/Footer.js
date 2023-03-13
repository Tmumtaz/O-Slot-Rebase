import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>O' Slot</h1>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <a href="/">Privacy</a>
          <a href="/">Cookies</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
