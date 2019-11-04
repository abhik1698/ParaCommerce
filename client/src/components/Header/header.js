
import React, {Component} from 'react';
import {Menu, Segment, Icon, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <center>        
        <Segment inverted> 
            <h1 style={{color: 'white', display: 'inline'}}>Para&nbsp;</h1>
            <Image style={{display: 'inline'}} src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' size='small' />
            <h1 style={{color: 'white', display: 'inline'}}>&nbsp;Commerce</h1>
        <Menu inverted pointing secondary>

            <Menu.Item
              position='right'
              as={Link}
              name='home'
              to='/'
              active={activeItem==='home'}
              onClick={this.handleItemClick}
            ><Icon name='home' />Home
            </Menu.Item>

            <Menu.Item as={Link}
              position='right'
              name='blogs'
              to='/blogs'
              active={activeItem==='blogs'}
              onClick={this.handleItemClick}
            ><Icon loading name='certificate' />
              Blogs
            </Menu.Item>

          <Menu.Item as={Link}
              position='right'
              name='login'
              to='/login'
              active={activeItem==='login'}
              onClick={this.handleItemClick}
            ><Icon name='user' />Login
            </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
              ><Icon name='log out' />
                Logout
            </Menu.Item>

          </Menu.Menu>
          </Menu>          
        </Segment>
      </center>
    )
  }
}