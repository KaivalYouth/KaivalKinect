import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, WebView} from 'react-native';
import { Container, Header, Content, Left, Icon, Button} from 'native-base'
import { Player, Recorder, MediaStates} from 'react-native-audio-toolkit';
//import testMusic from './testMusic.mp3';
import sound from 'react-native-sound';

export default class UpasnaAudio extends Component {

  constructor(){
    super();
    //new Player.play(testMusic)
  }

  render() {
    return(
      <Container>
      <Header>
        <Left>
          <Icon name="ios-menu" onPress={
            ()=>this.props.navigation.navigate('DrawerOpen')}/>
        </Left>
      </Header>
      <Content contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <Text>Upasna Audio</Text>
        </Content>
      </Container>
    );
  }
}
