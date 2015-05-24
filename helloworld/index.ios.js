/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Canvas = require('./Canvas');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;
function renderCanvas(canvas) {
  var message = this.msg;
  var ctx = canvas.getContext('2d'),
      particles = [];
      patriclesNum = 50,
      w = 200,
      h = 200,
      colors = ['#f35d4f','#f36849','#c0d988','#6ddaf1','#f1e85b'];

  canvas.width = 200;
  canvas.height = 200;
  canvas.style.left = (window.innerWidth - 200)/2 + 'px';
  if (window.innerHeight > 200)
    canvas.style.top = (windows.innerHeight - 200)/2 + 'px';
  function draw(){
    ctx.font = "20px Georgia";
    ctx.fillText(mmessage, 10, 50);
  }
  draw();
};
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
    var context = {msg: "Hello!"};
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
        <View style={styles.canvasContainer}>
          <Canvas context={context} render={renderCanvas} />
        </View>
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
  },
  canvasContainer: {
    padding: 30,
    marginTop: 65,
    borderColor: '#e7e7e7',
  }
});


AppRegistry.registerComponent('helloworld', () => helloworld);
