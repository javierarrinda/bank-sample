import React from 'react'
import image1 from '../images/boston-skyline-one.jpg'
import image2 from '../images/parallax-dos.jpeg'
import image3 from '../images/tres-parallax.jpeg'
import AOS from 'aos'

const addimage1 = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover',
    overflow: 'hidden'
  };
  const addimage2 = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${image2})`,
    backgroundSize: 'cover'
  };
  const addimage3 = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${image3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

export default class MainSection extends React.Component {


    componentDidMount() {
      AOS.init()

      }

          bringToTop(){
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0
    }

      render(){
        return(
            <div>
                 <span>
                <img className="button-scroll" onClick={this.bringToTop} src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1555008473/chevron-up.png" alt="scroll up arrows"/>
                </span>

                <div className="pimg1" style={addimage1}>
                    <h2> We got you covered, learn more about us.</h2>
                <div className="ptext-pimg1">
                     
                        <p className="border trans">
                            Lorem ipsum ipsum, ipsum mas wnvijwbviwvb ebiwh evj i j we v jk
                        </p>
                  
                </div>
                </div>

            <section className="section section-light" >
                <div className="width-thirty">
                    {/* <h2>We make your vision, our own.</h2>
                    <p>As a company, we offer solutions to the most complex problems by implementing the best practices and technologies.</p>
                    <p>Not sure where to start? That's why we are here.</p>
                    <button>Consult With Us</button> */}
                    <div className="some-item" data-aos="fade-right" data-aos-duration="2000" >
                    <img className="special-logos" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1555011919/piggy-bank.png" alt="responsive-website" height="10"/>
                    <p>Higher returns, with lower interests.</p>
                    </div>
                    <div className="some-item" data-aos="fade-left" data-aos-duration="2000" >
                    <img className="special-logos" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1555011916/headphones.png" alt="responsive-website" height="10"/>
                    <p>One-on-one consulting with our dedicated staff.</p>
                    </div>
                    <div className="some-item" data-aos="fade-right" data-aos-duration="2000" >
                    <img className="special-logos" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1555011916/headphones.png" alt="responsive-website" height="10"/>
                    <p>24 hour 7 day a week service. Whenever, wherever.  </p>
                    </div>
                    <div className="some-item" data-aos="fade-left" data-aos-duration="2000" >
                    <img className="special-logos" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1555011916/headphones.png" alt="responsive-website" height="10"/>
                    <p>Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave..</p>
                    </div>
                </div>
            </section>

                <div className="pimg2" style={addimage2}>
                    <div className="ptext">
                        <span className="border trans">
                            Lorem Ipsum Ipsum
                        </span>
                    </div>
                </div>

            <section className="section section-dark">
                <div className="width-thirty">
                    <h2>Why?</h2>

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