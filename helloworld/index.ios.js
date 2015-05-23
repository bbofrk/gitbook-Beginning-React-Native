/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;

var helloworld = React.createClass({
  getInitialState: function() {
    return {
      content: "Hello World"
    }
  },
  random: function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i=0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    this.setState({content: text});
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Random Password'
            value={this.state.content}
            onChangeText={(text) => this.setState({content: text})}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.random()}
            underlayColor='#19d9f4'
          >
            <Text style={styles.buttonText}>Random</Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.content}>
          {this.state.content}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1BBBEC',
    borderColor: '#1BBBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  content: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});


AppRegistry.registerComponent('helloworld', () => helloworld);
