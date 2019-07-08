import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';


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
      submitted: false
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
        submitted: true
      }),
      err  =>  this.setState({
        flash:  err.flash,
        submitted: true
      })
      )
      console.log(`information submitted: ${JSON.stringify(this.state)}`);
      e.preventDefault();
    }

    handleClose = () => {
      this.setState({submitted: false});
    };
    
    render(){
      return(
        <div>
        <div className={this.state.flash === "User has been signed up!" ? 'green': 'red'}>
          <Snackbar
              open={this.state.submitted}
              onClose={this.handleClose}
              // TransitionComponent={this.state.submitted}
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
            value='Submit'>Submit</Button>

        </form>
      </div>
    );
  }
}

export default SignUp;