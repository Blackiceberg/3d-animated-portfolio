import "./hero.css";
import Speech from "./Speech";
const Hero = () => {
    return(
        <div className='hero'>
            <div className="hSection left">
                {/* TITLE */}
                <h1 className="hTitle">
                    Bonjour,
                    <br/>
                    <span>Moi c'est Kennedy!</span>
                </h1>
                 {/* TITLE */}
                <div className="awards">
                    <h2>Top Rated Designer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="awardList">
                        <img src="/award1.png" alt="" />
                        <img src="/award2.png" alt="" />
                        <img src="/award3.png" alt="" />
                    </div>
                </div>
                {/* SCROLL SVG */}
        <a href="#services" className="scroll">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
            </a>
            </div>
            <div className="hSection right">
             {/* SCROLL SVG */}
            <div className="follow">
                <a href="/">
                    <img src="/instagram.png" alt="" />
                </a>
                <a href="/">
                    <img src="/facebook.png" alt="" />
                </a>
                <a href="/">
                    <img src="/youtube.png" alt="" />
                </a>
                <div className="followTextContainer">
                  <div className="followText">FOLLOW ME</div>
                </div>
            </div>
              {/*BUBBLE*/}
              <Speech/>
            {/*CERTIFICATE*/}
                <div className="certificate">
                    <img src="/certificate.png" alt="" />
                    Ecole Multimédia
                </div>
            
            {/*CONTACT BUTTON*/}
            <a href="#contact" className="contactlink">
                <div className="contactButton">
                <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            white="50"
            height="50"
            fill="none"
            stroke="black"
            strokeWidth="2"
            >
            <path
            d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"/>
          </svg>
            </div>
                </div>
            </a>
            </div>
            <div className="bg">
              {/*3d*/}
              <div className="hImg">
                <img src="/hero.png" alt="" />
              </div>
            </div>
     </div>
    )
}

export default Hero
