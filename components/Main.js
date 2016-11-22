import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TabBarIOS
} from 'react-native';

const food_background = require ('../Images/foodbackground.png');
const clothing_background = require('../Images/clothing.png');
const social_background = require('../Images/social.png');
const mis_background = require('../Images/mis.png')
const avatar = require('../Images/avatar_fox.png');

class Main extends Component {
  onButtonPress(){
    this.props.navigator.push({
      id:'404 User Not Found'
    });
  }

  //context
  constructor(){
    super();
    //automatically set state to tabOne
    this.state = {selectedTab: 'tabOne'};
  }

  //updates the state of the tabe
  setTab(tabId){
    //set selected tab to tabId
    this.setState({selectedTab: tabId});
  }

  render() {
    return (
      <View style ={styles.container}>

        <View style ={styles.header}>

          <TouchableOpacity onPress ={this.onButtonPress.bind(this)} >
            <Image source={avatar} ></Image>
            </TouchableOpacity>
          </View>

        <ScrollView style ={styles.categories}>

          <TouchableOpacity onPress={this.onButtonPress.bind(this)} >
            <Image source= {food_background} style = {styles.food}>
              <Text style={styles.text} >
                FOOD
              </Text>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onButtonPress.bind(this)} >
            <Image source= {clothing_background} style = {styles.food}>
              <Text style={styles.text} >
                CLOTHING
              </Text>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onButtonPress.bind(this)} >
            <Image source= {social_background} style = {styles.food}>
              <Text style={styles.text} >
                SOCIAL
              </Text>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onButtonPress.bind(this)} >
            <Image source= {mis_background} style = {styles.food}>
              <Text style={styles.text} >
                MISCELLANEOUS
              </Text>
            </Image>
          </TouchableOpacity>

        </ScrollView>
        <TabBarIOS >
          <TabBarIOS.Item
            systemIcon = "featured"
            selected = { this.state.selectedTab === 'tabOne' }
            onPress = {() => this.setTab('tabOne')}>
              <View style = { styles.tabContent }>
                <Text style = { styles.tabText }>Tab One</Text>
              </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon = "most-recent"
            selected = { this.state.selectedTab === 'tabTwo' }
            onPress = {() => this.setTab('tabTwo')}>
              <View>
                <Text style = { styles.tabText }>Tab Two</Text>
              </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon = "history"
            selected = { this.state.selectedTab === 'tabThree' }
            onPress = {() => this.setTab('tabThree')}>
              <View>
                <Text style = { styles.tabText }>Tab Three</Text>
              </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon = "more"
            selected = { this.state.selectedTab === 'tabFour' }
            onPress = {() => this.setTab('tabFour')}>
              <View>
                <Text style = { styles.tabText }>Tab Four</Text>
              </View>
          </TabBarIOS.Item>
        </TabBarIOS>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex:1,
    backgroundColor: 'burlywood',
    alignItems:'center',
    justifyContent: 'center'
  },
  categories:{
    flex:2,
    backgroundColor: 'transparent'
  },
  food:{
    width: null,
    height:150,
    flex:1,
    opacity: .5,
  },

  text:{
    color:'black',
    fontWeight:'bold',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Cochin',
  },

  tabContent: {
    flex: 1,
    alignItems: 'center'

  },
  tabText:{
    margin: 50,
    fontSize: 45,
  },


});


module.exports = Main;
