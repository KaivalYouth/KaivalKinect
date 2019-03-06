import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Left, Icon, Button} from 'native-base'

export default class AboutUs extends Component {
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
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Kaival Kinect
          </Text>
          <Text style={styles.instructions}>
            Copyright 2017 Kaival Gyan Sampradaya. All Rights Reserved.
          </Text>
        </View>
        </Content>

      </Container>
    );
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
