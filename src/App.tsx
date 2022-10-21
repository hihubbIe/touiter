import React from 'react';
import { Container, Grid, Rail, Segment, Placeholder, Divider, Input } from 'semantic-ui-react';
import Menu from './features/menu/Menu';
import Content from './features/content/Content';
import './App.css';

function App() {
  return (
    <Container className='App' style={{width: '100vw'}}>
      <Grid centered columns={3}>
        <Grid.Column>
          <Container style={{position: 'sticky', margin: '2vh', minHeight: '100vh'}}>
            <Content />

            <Rail close position='left'>
              <Container style={{position: 'sticky', top: '2vh', width: '100%'}}>
                  <Menu />
                  <Segment>My profile preview</Segment>
              </Container>
            </Rail>

            <Rail close position='right'>
              <Container style={{position: 'sticky', top: '2vh'}}>
                <Segment>
                  <Input fluid icon='search' placeholder='Search...' />
                  <Divider clearing />
                  <Placeholder>
                    <Placeholder.Paragraph>
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder.Paragraph>
                  </Placeholder>
                </Segment>
              </Container>
            </Rail>
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
