import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        email: 'isabellaafry@gmail.com',
        name: 'Isabella',
        lastname: 'Fry',
      },
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Your Profile</h1>
        <List>
          <ListItem>
            <ListItemText
              primary={this.state.profile.email}
              secondary='Email'
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={this.state.profile.name}
              secondary='First name'
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={this.state.profile.lastname}
              secondary='Last name'
            />
          </ListItem>
        </List>
        <br/>
        <Button
          color='secondary'
        >
          <Link className="linkButton" to= '/'>Sign Out</Link>
        </Button>

      </React.Fragment>
    );
  }
}

export default Profile;
