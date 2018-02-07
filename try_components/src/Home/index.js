import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import { styles } from './style'
import SquireImage from '../Components/SquireImage'
import TestText from '../Components/TestText'
import LinkText from '../Components/LinkText'

export default class Home extends Component {
 constructor(){

 }
  render() {
    return(
      <View style={styles.container}>
        <Text> Hello react home! </Text>
        <SquireImage url='https://cdn.pixabay.com/photo/2018/02/02/22/28/nature-3126513_960_720.jpg' hello='aaaa'/>
        <TestText param1='Hello' param2='World'/>
        <LinkText text='Touch the line' onPress={ () => Alert.alert('Hi') }/>
        { this.getViewWithFunc() }
        { this.getViewWithArrow() }
      </View>
    );
  }

  getViewWithArrow = () => (
    <LinkText text='touch allow' onPress={ () => Alert.alert('Hi') }/>
  );

  getViewWithArrow = () => {
    return (
      <LinkText text='touch allow' onPress={ () => Alert.alert('Hi') }/>
    );
  }

  getViewWithFunc() {
    return (
      <LinkText text='touch func' onPress={ () => Alert.alert('Hi') }/>
    )
  }
}