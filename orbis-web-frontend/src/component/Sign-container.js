import React, { Component } from "react";
import axios from "axios";

class SignContainer extends Component{
    state={

    }



    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3000/contact", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent.");
                document.getElementById("contact-form").reset()
                
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }


    render(){
        return(
            <div className="contact-page">

                <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                    {/* <div className="form-group"> */}
                        {/* <label htmlFor="name">Name</label> */}
                        <input placeholder="name"type="text" className="form-control" id="name" />
                    {/* </div> */}
                    {/* <div className="form-group"> */}
                        {/* <label htmlFor="exampleInputEplaceholder="name"mail1">Email address</label> */}
                        <input placeholder="email"type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    {/* </div> */}
                    {/* <div className="form-group"> */}
                        {/* <label htmlFor="message">Message</label> */}
                        <input placeholder="message"className="form-control" id="message"></input>
                    {/* </div> */}
                    <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignContainer;