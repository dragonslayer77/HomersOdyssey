import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect } from 'react-router-dom'



class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: 'example@example.com',
      password: 'mypassword',
      flash: '',
      open: false,
      redirectRef: false
    }
  }
  
  updateField = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    fetch("/auth/signin",
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

    handleClose = () => {
      this.setState({open: false});
    };
    
    render(){
        const redirectRef = this.state.redirectRef;
        if(redirectRef===true){
            return <Redirect to="/profile" />
        }
      return(
        <div>
        <h1>Sign In</h1>
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
          <Button 
            color="secondary" 
            type="submit" 
            value='Submit'
            >
            Sign in
          </Button>
          <br/>
          <p>Dont have an account?</p>
          <Button
          color="secondary"
          >
             <Link className="linkButton" to="/signup">Sign Up</Link>
          </Button>

        </form>
      </div>
    );
  }
}

export default SignIn;