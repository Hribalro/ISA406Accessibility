/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      PickerValue:"elevator"
    }
  };
  clickme=()=>{
    var data = this.state.PickerValue;
    if(data ==""){
      alert("Please pick an option");
    } else {
      alert(data)
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>Accessibility Demo</Text>
        <Picker 
        style = {{width: '80%'}} 
        selectedValue = {this.state.PickerValue} 
        onValueChange = {(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}>
        <Picker.Item label = "Elevator" value ="elevator" />
        <Picker.Item label = "Stairs" value = "stairs" />
        </Picker>
        <Button title = "Go" onPress = {this.clickme}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

