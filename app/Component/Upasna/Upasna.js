import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, NavigatorIOS, ListView, AlertIOS } from 'react-native';
import { Container, Header, Content, Left, Icon, Button} from 'native-base'
import MorningUpasnaList from './MorningUpasnaList';

export default class Upasna extends Component {
  onPress=()=>{
    this.setState({
      text: "Button Pressed"
    })
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="ios-menu" onPress={
              ()=>this.props.navigation.navigate('DrawerOpen')}/>
          </Left>
        </Header>

        <NavigatorIOS
          initialRoute={{
            component: MorningUpasnaList,
            title: "Morning Upasna"
          }}
          style={{flex: 1}}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  cell: {
    paddingTop: 20
  },
  containerDetails:{
    paddingTop: 80
  }
})
