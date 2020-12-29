import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'
import { reset } from '../actions/auth'
import AppNavbar from './navbar';

class Reset extends Component {

    state = { 
        msg : null,
        variant : "success",
        token : localStorage.getItem('token')
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidUpdate(){
        if(this.context.isAuthenticated){
            this.props.history.push('/login')
        }
    }

    onSubmit = e => {
        e.preventDefault();

        const {email, token} = this.state;
        const data = {email, token};

        //Attempt to login
        reset(data, res => {
            console.log(res)
            if(res.data.success){
                this.setState({
                    msg : res.data.msg,
                    variant : "success"
                })
                this.context.login(res)
            } else {
                this.setState({
                    msg : res.data.msg,
                    variant : "danger"
                })
            }
        }) 
    }

    render() { 
        return ( 
            <div>
            <AppNavbar/>
            <Form onSubmit={this.onSubmit} id="reset">

            {this.state.msg ? (
                <Alert variant={this.state.variant}>{this.state.msg}</Alert>
            ) : null }

            <Form.Group>
              <h4>Reset Password</h4>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" onChange={this.onChange} type="email" placeholder="Enter email" />
              </Form.Group>

              {/*<Button variant="dark" type="submit">
                  Submit
                </Button> <hr/> */}

                <a className="forget" href="/reset">Reset Password</a>
          </Form>
            </div>
        );
    }
}
 
export default Reset;