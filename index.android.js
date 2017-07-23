/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Tab, Drawer, Item, Header, Tabs, Input, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { AppRegistry } from 'react-native';
import SideBar from './src/sidebar';
import TabOne from './src/tab/tabOne';
import TabTwo from './src/tab/tabTwo';

export default class app extends Component {
  
  closeDrawer = () => {
    this.drawer._root.close()
  }
  
  openDrawer = () => {
    this.drawer._root.open()
  }

  render() {
    
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
        <Container>
          <Header searchBar rounded>
            <Item>
              <Icon name="search" />
              <Input placeholder="Search" />
              <Icon name="people" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
          <Header hasTabs>  
            <Tabs initialPage={1}>
          <Tab heading="Stats">
            <TabOne />
          </Tab>
          <Tab heading="Graphs">
            <TabTwo />
          </Tab>
        </Tabs>
          </Header>
          <Content>
            
          </Content>
          <Footer>
          <FooterTab>
            <Button>
              <Text>Social</Text>
            </Button>
            <Button active>
              <Text>Updates</Text>
            </Button>
            <Button>
              <Text>Mail</Text>
            </Button>
          </FooterTab>
        </Footer>
        </Container>
      </Drawer>
    );
      
  }
}
AppRegistry.registerComponent('app', () => app);
