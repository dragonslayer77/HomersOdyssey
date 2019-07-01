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
      flash: ''
    }
  }
  
  updateField = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  flashColor = () =>{
    this.state.flash === "User has been signed up!" ? this.setState({
      backgroundColor: 'green'
    }) : this.setState({
      backgroundColor: 'red'
    }) 
  }
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
      res  =>  this.setState({flash:  res.flash}),
      err  =>  this.setState({flash:  err.flash})
      )
      console.log(`information submitted: ${JSON.stringify(this.state)}`);
      e.preventDefault();
    }
    
    render(){
      return(
        <div>
        <div className={this.state.flash === "User has been signed up!" ? 'green': 'red'}>
          <Snackbar
            open={this.state.submitted}
            onClose={this.handleClose}
            TransitionComponent={this.state.Transition}
            ContentProps={{'aria-describedby': 'message-id'}}
            message={<span id='message-id'>{this.state.flash}</span>}/>
        {/* <p>{this.state.flash}</p> */}
        </div>
        <h1>Sign Up</h1>
        <form action="POST" onSubmit={this.handleSubmit}>
          <TextField type="email" name="email" onChange={this.updateField} placeholder='example@example.com'/>
          <br/>
          <TextField type="password" name="password" onChange={this.updateField} placeholder='password'/>
          <br/>
          <TextField type="password" name="verificationPassword" onChange={this.updateField} placeholder='password'/>
          <br/>
          <TextField type="name" name="name" onChange={this.updateField} placeholder='John'/>
          <br/>
          <TextField type="lastname" name="lastname" onChange={this.updateField} placeholder='Doe'/>
          <br/>
          <Button color="secondary" type="submit" value='Submit'>Submit</Button>

        </form>
      </div>
    );
  }
}

export default SignUp;