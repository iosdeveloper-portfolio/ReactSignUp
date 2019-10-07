import React from 'react';
import { Button, Alert, FlatList, TextInput, ActivityIndicator, Text, View, TouchableWithoutFeedback, SafeAreaView, ScrollView, Image } from 'react-native';
// import { ListItem, SearchBar } from 'react-native-elements';
import styles from "./styles";
import { Constant } from "ReactSignUp/src/helper/Constant.js"
import { StackNavigator } from 'react-navigation';
import { colors, grey, fontSize, fontFamily } from "ReactSignUp/src/helper/appColor.js"

export default class Details extends React.Component {

  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.userName = this.props.navigation.getParam('userName', 'nothing sent')
    this.receivedValue = this.props.navigation.getParam('receivedValue', () => { });
    this.state = { textDetails: `Congratulations ${this.userName}, your registration is complete!` };
  }

  onResetClicked = () => {
    this.receivedValue()
    this.props.navigation.goBack();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView>
        <View style={styles.mainView}>
          <View style={styles.header}>
            <View style={styles.ShapeView}>
              <Text style={styles.textStyle}>{this.state.textDetails}
              </Text>
              <View style={styles.viewContainButton}>
                <Button style={styles.buttonStyle}
                  onPress={this.onResetClicked}
                  title={Constant.reset} />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
