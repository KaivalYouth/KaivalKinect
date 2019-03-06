import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView } from 'react-native';

export default class NewView extends Component{

  render(){
    return(
      <View style={styles.containerDetails}>
      <ScrollView>
        <Text> {this.props.dataRow} </Text>
      </ScrollView>
      </View>
    )
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
