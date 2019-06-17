import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: 'example@example.com',
      password: 'mypassword',
      verificationPassword: 'mypassword',
      firstname: 'jon',
      lastname: 'doe'
    }
  }

  updateField = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    console.log(`information submitted: ${JSON.stringify(this.state)}`);
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <h1>Sign Up</h1>
        <form action="POST" onSubmit={this.handleSubmit}>
          <input type="email" name="email" onChange={this.updateField} placeholder='example@example.com'/>
          <br/>
          <input type="password" name="password" onChange={this.updateField} placeholder='password'/>
          <br/>
          <input type="password" name="verificationPassword" onChange={this.updateField} placeholder='password'/>
          <br/>
          <input type="firstname" name="firstname" onChange={this.updateField} placeholder='John'/>
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