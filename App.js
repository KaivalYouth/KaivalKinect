import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation'
import { Container, Header, Content, Left, Body, drawerPosition } from 'native-base'

import HomeScreen from './app/Component/HomeScreen/HomeScreen';
import Upasna from './app/Component/Upasna/Upasna';
import Calendar from './app/Component/Calendar/Calendar';
import AboutUs from './app/Component/AboutUs/AboutUs';
import UpasnaAudio from './app/Component/Audio/UpasnaAudio';

export default class App extends React.Component {
  render() {
    return (
      <MyApp />
    );
  }
}

//add customized header in the app drawer
const customDrawerContentComponent = (props) =>(
  <Container>
    <Header>
      <Body>
        <Text>
        Kaival Kinect
        </Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

//Side app drawer
const MyApp = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Upasna: {
    screen: Upasna
  },
  Calendar: {
    screen: Calendar
  },
  AboutUs: {
    screen: AboutUs
  },
  UpasnaAudio: {
    screen: UpasnaAudio
  }
},
{
  initialRouteName: 'Home',
  drawerPosition: 'Left',
  contentComponent: customDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})

AppRegistry.registerComponent('App', () => App);
