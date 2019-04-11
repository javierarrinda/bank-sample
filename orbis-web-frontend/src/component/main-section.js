import React from 'react'
import image1 from '../images/city-parallax.jpeg'
import image2 from '../images/parallax-dos.jpeg'
import image3 from '../images/tres-parallax.jpeg'
import AOS from 'aos'

const addimage1 = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover'  
  };
  const addimage2 = {
    width: '50%',
    height: '800px',
    backgroundImage: `url(${image2})`,
    backgroundSize: 'cover'  
  };
  const addimage3 = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${image3})`,
    backgroundSize: 'cover'  
  };
  
export default class MainSection extends React.Component {
    

    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
      AOS.init()

      }
      resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 200,
          headerEl = document.getElementById("navbar"),
          orbisLogo = document.getElementById("orbis-logo")
        //   orbisLogoShrunk = document.getElementById("orbis-logo-shrunk")

    
        if (distanceY > shrinkOn) {
          headerEl.classList.add("smaller")
          orbisLogo.style.visibility = "hidden"
        //   orbisLogoShrunk.style.visibility = "visible"

          
        } else {
          headerEl.classList.remove("smaller");
          orbisLogo.style.visibility = "visible"
        //   orbisLogoShrunk.style.visibility = "hidden"

        }
      }
          bringToTop(){
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0
    }


      render(){
        return(
            <div >
            <nav id="navbar" >
                <ul>
                    {/* <li><a href="">Home</a></li>
                    <li><a href="">Who?</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Set Up a Call</a></li> */}
                </ul>
                <img id="orbis-logo" height="20" src="https://banner2.kisspng.com/20180328/roq/kisspng-circle-logo-symbol-font-templates-5abbf957bfda53.1977074015222685037859.jpg" alt="orbis logo" />
                {/* <img id="orbis-logo-shrunk" src="https://www.shareicon.net/data/512x512/2015/10/18/658100_shapes_512x512.png" alt="orbis logo" /> */}

            </nav>
                    <span>
                        <button className="button-scroll" onClick={this.bringToTop}>Scroll up</button>
                    </span>

                <div className="pimg1" style={addimage1}>
                    <div className="ptext">
                        <span className="border">
                            Orbis Labs
                        </span>
                        <span className="border">
                            lleva
                        </span>
                    </div>
                </div>
            <section className="section section-light" >
                <div className="width-thirty">
                    {/* <h2>We make your vision, our own.</h2>
                    <p>As a company, we offer solutions to the most complex problems by implementing the best practices and technologies.</p>
                    <p>Not sure where to start? That's why we are here.</p>
                    <button>Consult With Us</button> */}
                    <div className="some-item" data-aos="fade-right" data-aos-duration="2000" >
                    <img className="special-logos" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1554481770/responsibility.png" alt="responsive-website" height="10"/>
                    example 1
                    </div>
                    <div className="some-item" data-aos="fade-left" data-aos-duration="2000" >
                    <img className="special-logos" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1554481770/responsibility.png" alt="responsive-website" height="10"/>
                    Example 2
                    </div>
                    <div className="some-item" data-aos="fade-right" data-aos-duration="2000" >
                    Example 3
                    <img className="special-logos" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1554481770/responsibility.png" alt="responsive-website" height="10"/>

                    </div>

                </div>
            </section>
    
                <div className="pimg2" style={addimage2}>
                    <div className="ptext">
                        <span className="border trans">
                            let us jump start your passion
                        </span>
                    </div>
                </div>
            <section className="section section-dark">
                <div className="width-thirty">
                    <h2>Why?</h2>
                    <p>Most great ideas come from sitting with a group of friends discussing ways your life could be improved. We realized early that the world was changing, and made it our mission to learn the skills that would allow us to create anything imaginable.</p>
                </div>
            </section>
    
                <div className="pimg3" style={addimage3}>
                        <div className="ptext">
                            <span className="border trans">
                                Make a consultation
                            </span>
                        </div>
                    </div>
            </div>
        )
      }
    
}