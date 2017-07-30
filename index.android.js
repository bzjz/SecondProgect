/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

class SceondProfect extends Component {
  //初始化方法-->返回具体的组件内容
    //写结构和内容
  render() {
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor: 'red'}}>这是第一个</Text>
        <Text style={{backgroundColor: 'blue'}}>这是第二个</Text>
        <Text style={{backgroundColor: 'yellow'}}>这是第三个</Text>
        <Text style={{backgroundColor: 'green'}}>这是第四个</Text>
        <Text>当前屏幕的宽度：{Dimensions.get('window').width}</Text>
        <Text>当前屏幕的宽度：{Dimensions.get('window').height}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        //改变主轴方向
        flexDirection: 'column',
        marginTop: 50,
        backgroundColor: 'deepskyblue',
    },
});
export default class SceondProfect1 extends Component {
    //初始化方法-->返回具体的组件内容
    //写结构和内容
    render() {
        return (
            <View style={styles2.container}>
              <Text>当前屏幕的宽度：{Dimensions.get('window').width}</Text>
              <Text>当前屏幕的高度：{Dimensions.get('window').height}</Text>
              <Text>当前屏幕的分辨率：{Dimensions.get('window').scale}</Text>
              <Text>我是git的部分</Text>
              <Text>我是第二次的git</Text>
              <Text>我是第三次的git</Text>
            </View>
        );
    }
}

const styles2 = StyleSheet.create({
    container: {
        //改变主轴方向
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'deepskyblue',
    },
});
AppRegistry.registerComponent('SceondProfect', () => SceondProfect1);
