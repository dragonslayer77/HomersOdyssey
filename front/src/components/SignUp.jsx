import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import { Link, Redirect } from 'react-router-dom';


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: 'example@example.com',
      password: 'mypassword',
      verificationPassword: 'mypassword',
      name: 'jon',
      lastname: 'doe',
      flash: '',
      open: false,
      redirectRef: false

    }
  }
  
  updateField = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  // flashColor = () =>{
  //   this.state.flash === "User has been signed up!" ? this.setState({
  //     backgroundColor: 'green'
  //   }) : this.setState({
  //     backgroundColor: 'red'
  //   }) 
  // }
  handleSubmit = (e) => {
    fetch("/auth/signup",
    {
      method:  'POST',
          headers:  new Headers({
            'Content-Type':  'application/json'
          }),
          body:  JSON.stringify(this.state),
    })
    .then(res  =>  res.json())
    .then(
      res  =>  this.setState({
        flash:  res.flash,
        open: true,
        redirectRef: true
      }),
      err  =>  this.setState({
        flash:  err.flash,
        open: true,
        redirectRef: true
      })
      )
      console.log(`information submitted: ${JSON.stringify(this.state)}`);
      e.preventDefault();
    }

    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
        }

      this.setState({open: false});

  }
    
    render(){
      const redirectRef = this.state.redirectRef;
        if(redirectRef===true){
            return <Redirect to="/" />
        }
      return(
        <div>
        <div className={this.state.flash === "User has been signed up!" ? 'green': 'red'}>
          <Snackbar
              open={this.state.open}
              onClose={this.handleClose}
              autoHideDuration={6000}
              // TransitionComponent={this.state.open}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id='message-id'>{this.state.flash}</span>}
            />
        </div>
        <h1>Sign Up</h1>
        <form action="POST" onSubmit={this.handleSubmit}>
          <TextField 
            type="email" 
            label="Email:"
            name="email" 
            onChange={this.updateField} 
            placeholder='example@example.com'/>
          <br/>
          <TextField 
            type="password" 
            label="Password:"
            name="password" 
            onChange={this.updateField} 
            placeholder='password'/>
          <br/>
          <TextField 
            type="password"
            label="Password Copy:" 
            name="verificationPassword" 
            onChange={this.updateField} 
            placeholder='password'/>
          <br/>
          <TextField 
            type="name" 
            label="Firstname:"
            name="name" 
            onChange={this.updateField} 
            placeholder='John'/>
          <br/>
          <TextField 
            type="lastname" 
            label="Lastname:"
            name="lastname" 
            onChange={this.updateField} 
            placeholder='Doe'/>
          <br/>
          <Button 
            color="secondary" 
            type="submit" 
            value='Submit'>Submit
          </Button>
          <br/>
          <p>Already have an account?</p>
          <Button color="secondary">
             <Link className="linkButton" to="/signin">Sign In</Link>
          </Button>

        </form>
      </div>
    );
  }
}

export default SignUp;