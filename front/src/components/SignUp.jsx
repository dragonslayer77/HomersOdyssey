import React, {Component} from 'react';

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
        <p>{this.state.flash}</p>
        </div>
        <h1>Sign Up</h1>
        <form action="POST" onSubmit={this.handleSubmit}>
          <input type="email" name="email" onChange={this.updateField} placeholder='example@example.com'/>
          <br/>
          <input type="password" name="password" onChange={this.updateField} placeholder='password'/>
          <br/>
          <input type="password" name="verificationPassword" onChange={this.updateField} placeholder='password'/>
          <br/>
          <input type="name" name="name" onChange={this.updateField} placeholder='John'/>
          <br/>
          <input type="lastname" name="lastname" onChange={this.updateField} placeholder='Doe'/>
          <br/>
          <input type="submit" value='Submit'/>

        </form>
      </div>
    );
  }
}

export default SignUp;