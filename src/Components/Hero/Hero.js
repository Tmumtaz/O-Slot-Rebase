import "./Hero.scss";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img alt="Hero Image" src={require("../../Assets/HomeHero.jpg")} />
      </div>

      <div className="hero-text">
        <h1>{props.title}</h1>
        <a href={props.url} className={props.btnClass}>
          {props.btnName}
        </a>
      </div>
    </>
  );
};

export default Hero;
