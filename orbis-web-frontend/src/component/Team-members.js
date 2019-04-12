import React, { Component } from "react";

class TeamMembers extends Component{

    render(){
        return(
                <div>
                    <div id="team" className="wrapper">

                            <header>
                                <h1>Meet Our Team</h1>
                            </header>

                            <section className="columns">

                                <div className="father-column">
                                    <div className="column column-one">

                                    </div>
                                        <h3>Antonio Colmenares</h3>
                                </div>

                                <div className="father-column">
                                    <div className="column column-two">

                                    </div>
                                        <h3>Sebastian Grossmann</h3>
                                </div>

                                <div className="father-column">
                                    <div className="column column-three">

                                    </div>
                                        <h3>Javier Arrinda</h3>
                                </div>

                            </section>


                    </div>

                </div>
            )
        }
    }


export default TeamMembers;
