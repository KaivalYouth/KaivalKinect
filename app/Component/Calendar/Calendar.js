import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Left, Icon, Button} from 'native-base'

export default class Calendar extends Component {
  render() {
    return (
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
          <Text>Calendar</Text>
        </Content>
      </Container>

    );
  }
}
