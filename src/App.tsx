import React from 'react';
import { Container, Grid, Rail, Segment, Icon, Label, Message, Divider } from 'semantic-ui-react';
import Menu from './features/menu/Menu';
import Content from './features/content/Content';
import FeedSearch from './features/feedSearch/FeedSearch';
import Modal from './features/modal/Modal';
import ProfilePreview from './features/profile/profilePreview';
import './App.css';
import LogoutFeature from './features/logout/Logout';

function App() {
  return (
    <Container className='App' style={{width: '100vw'}}>
      <Grid centered columns={3}>
        <Grid.Column>
          <Container style={{position: 'sticky', margin: '2vh', minHeight: '100vh'}}>
            <Content />

            <Rail close position='left'>
              <Container style={{position: 'sticky', top: '2vh', width: '100%'}}>
                <Message size='large'><Icon name='edit outline'/><b>Touiter</b></Message>
                <Menu />
                <ProfilePreview />
                <Divider clearing />
                <LogoutFeature />
              </Container>
            </Rail>

            <Rail close position='right'>
              <Container style={{position: 'sticky', top: '2vh'}}>
                <Segment>
                  <FeedSearch />
                </Segment>
              </Container>
            </Rail>
          </Container>
        </Grid.Column>
      </Grid>
      <Modal />
    </Container>
  );
}

export default App;
