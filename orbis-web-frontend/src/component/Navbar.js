import React from 'react'
// import { NavLink } from 'react-router-dom'
import { HashLink as NavLink } from 'react-router-hash-link'
import MainSection from './main-section'
export default class Nav extends React.Component{

    componentDidMount(){
        // window.addEventListener("scroll", this.resizeHeaderOnScroll);

    }
    // resizeHeaderOnScroll() {
    //     const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    //       shrinkOn = 200,
    //       headerEl = document.getElementById("navbar"),
    //       orbisLogo = document.getElementById("orbis-logo")
    //     //   orbisLogoShrunk = document.getElementById("orbis-logo-shrunk")


    //     if (distanceY > shrinkOn) {
    //       headerEl.classList.add("smaller")
    //       orbisLogo.style.visibility = "hidden"
    //     //   orbisLogoShrunk.style.visibility = "visible"


    //     } else {
    //       headerEl.classList.remove("smaller");
    //       orbisLogo.style.visibility = "visible"
    //     //   orbisLogoShrunk.style.visibility = "hidden"

    //     }
    //   }
      render(){
        return(
            <div>
                <div className="navbar">

                        <img id="company-logo" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1555015324/bank-logo-gif.gif" alt="company-logo" />

                    <NavLink id="links-nav" to="#aboutus">About us</NavLink>

                    <NavLink id="links-nav" to="#learnmore">Learn More</NavLink>

                    <NavLink id="links-nav" to="#team">Team</NavLink>

                </div>

            </div>
        )

      }

}
