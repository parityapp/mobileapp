import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
​export default class Tabs extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs initialPage={1}>
          <Tab heading="Channel1">
            <Tab1 />
          </Tab>
          <Tab heading="Channel2">
            <Tab2 />
          </Tab>
          <Tab heading="Channel3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

AppRegistry.registerComponent('app', () => Tabs);
