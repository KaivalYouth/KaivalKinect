import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, NavigatorIOS, ListView } from 'react-native';
import NewView from './NewView';
import customData from './data.json';
export default class MorningUpasnaList extends Component{

  constructor() {
    super();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([]),
    }
  }

  componentDidMount(){
    var titles = [];
    var details = [];

    var sections = customData.sections;
    for(var i=0; i < sections.length; i++){
      titles.push(sections[i].title);
      details.push(sections[i].verses);
    }
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(sections),
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }

  pressCell(dataRow){
    this.props.navigator.push({
      component: NewView,
      passProps: {dataRow}
    })
  }

    renderRow(dataRow){
      return(
        <TouchableHighlight onPress={() => this.pressCell(dataRow.verses)}>
          <View style={styles.cell}>
            <Text> {dataRow.title} </Text>
          </View>
        </TouchableHighlight>
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
