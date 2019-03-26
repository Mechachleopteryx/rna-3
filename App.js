/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Switch,
  Slider
} from 'react-native';
import codePush from "react-native-code-push";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      favouriteMacedonian: '',
      like: 0,
      likeReactNative: false
    };
  }

  onSubmit() {
    Alert.alert(`Hey ${this.state.name}!`,    
`I see we both share the love of ${this.state.favouriteMacedonian}.

And it looks like you like me a lot. ${(this.state.like / 10) * 100}%

Oh, and you ${this.state.likeReactNative ? 'like' : 'do not like'} React Native. Good for you!

Best,
Something inside!`);
  }

  render() {
    return (
      <View style={{padding: 10, flex: 1, justifyContent: 'space-between'}}>
      <View>
      <Text style={{fontSize: 16}}> Name </Text>
        <TextInput
          style={{height: 40}}
          placeholder="What's your name?"
          onChangeText={(text) => this.setState({name: text})}
          />
      </View>
        
      <View>
        <Text style={{fontSize: 16}}> Who is your favourite Macedonian? </Text>
        <TextInput
          style={{height: 40}}
          placeholder="hint: it's Nikola"
          onChangeText={(text) => this.setState({favouriteMacedonian: text})}
          />
      </View>

      <View>
        <Text style={{fontSize: 16}}> How much do you like me (on a scale of 9.99 - 10)? </Text>
        <Slider
          style={{height: 40}}
          maximumValue={10}
          minimumValue={0}
          onValueChange={(value)=> this.setState({like: value})}
          />
      </View>

      <View>
        <Text style={{fontSize: 16}}> Do you like React Native? </Text>
        <Switch
          style={{height: 40}}
          onValueChange={(value)=> this.setState({likeReactNative: value})}
          />
      </View>
        
        <Button
          onPress={() => this.onSubmit()}
          title="Submit"
          />
      </View>
    );
  }
}

App = codePush(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
