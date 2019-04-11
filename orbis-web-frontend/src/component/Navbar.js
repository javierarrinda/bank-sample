import React from 'react'
import { Link } from 'react-router-dom'
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
                    <Link>About us</Link>
                    <Link>Learn More</Link>
                    <Link>Team</Link>
                    
                </div>
    
            </div>
        )

      }

}