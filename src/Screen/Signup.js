import React from 'react';
import { Button, Alert, FlatList, TextInput, ActivityIndicator, Text, View, Platform, TouchableWithoutFeedback, SafeAreaView, ScrollView, Image } from 'react-native';

import styles from "./styles";
import { StackNavigator } from 'react-navigation';
import { colors } from "ReactSignUp/src/helper/appColor.js"
import { Alerts } from "ReactSignUp/src/helper/Alerts.js"
import { Constant } from "ReactSignUp/src/helper/Constant.js"
const appicon = "ReactSignUp/assets/logo.png";
import KeyboardManager from 'react-native-keyboard-manager'
import { switchCase } from '@babel/types';

export default class Signup extends React.Component {
  static navigationOptions = {
    title: "Register",
  };
  constructor(props) {
    super(props);
    this.state = { buttonClick: true, firstName: "", lastName: "", streetAddress: "", city: "", state: "", zip: "", email: "", createPassword: "", confirmPassword: "" };
    if (Platform.OS === 'ios') {
      KeyboardManager.setToolbarPreviousNextButtonEnable(true);
    }
  }
  receivedValue = () => {
    this.setState({ buttonClick: true, firstName: "", lastName: "", streetAddress: "", city: "", state: "", zip: "", email: "", createPassword: "", confirmPassword: "" });
  }

  onSubmitClicked = () => {
    if (this.state.firstName == "") {
      Alerts.showAlert(Constant.messageFirstname)
    } else if (this.state.lastName == "") {
      Alerts.showAlert(Constant.messageLastName)
    } else if (this.state.streetAddress == "") {
      Alerts.showAlert(Constant.messageStreetAddress)
    } else if (this.state.city == "") {
      Alerts.showAlert(Constant.messageCity)
    } else if (this.state.state == "") {
      Alerts.showAlert(Constant.messageState)
    } else if (this.state.zip == "") {
      Alerts.showAlert(Constant.messageZipcode)
    } else if (this.state.email == "") {
      Alerts.showAlert(Constant.messageEmailAddress)
    } else if (Constant.reg.test(this.state.email) === false) {
      Alerts.showAlert(Constant.messageValidEmailAddress)
    } else if (this.state.createPassword == "") {
      Alerts.showAlert(Constant.messageCreatePassword)
    } else if (this.state.confirmPassword == "") {
      Alerts.showAlert(Constant.messageConfirmPassword)
    } else if (this.state.createPassword != this.state.confirmPassword) {
      Alerts.showAlert(Constant.messageNotMatchPassword)
    } else {
      const { navigate } = this.props.navigation;
      let userName = this.state.firstName + " " + this.state.lastName;
      navigate("Details", { receivedValue: this.receivedValue, userName: userName });
    }
  };

  handleSubmit = () => {
    if (this.state.firstName == "" || this.state.lastName == "" || this.state.streetAddress == "" || this.state.city == "" || this.state.state == "" || this.state.zip == "" || this.state.email == "") {
      this.setState({ buttonClick: true })
    } else {
      this.setState({ buttonClick: false })
    }
  };
  
  handleEvent = (text,tag) => {
    switch (tag) {
      case '1': this.setState({ firstName: text }); break
      case '2': this.setState({ lastName: text });  break
      case '3': this.setState({ streetAddress: text }); break
      case '4': this.setState({ city: text }); break
      case '5': this.setState({ state: text }); break
      case '6': this.setState({ zip: text });  break
      case '7': this.setState({ email: text });  break
      case '8': this.setState({ createPassword: text }); this.setState({ buttonClick: false }); break
      case '9': this.setState({ confirmPassword: text }); this.setState({ buttonClick: false }); break
      default:
        return '0';
    }
    this.handleSubmit();
};

  render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View>
            <View style={styles.headerCircle}>
              <View style={styles.CircleShapeView}>
                <Image source={require(appicon)} />
              </View>
            </View>
            <View>
              <Text style={styles.headerText}> {Constant.tital}
              </Text>
            </View>
            <View style={styles.viewContain}>
              <TextInput
                style={styles.textStyle}
                placeholder={Constant.firstnamePlaceholder}
                onChangeText={(text) => this.handleEvent(text,"1")}
                underlineColorAndroid="transparent"
                value={this.state.firstName}
                keyboardType='default'
              />
            </View>
            <View style={styles.viewContain}>
              <TextInput
                style={styles.textStyle}
                placeholder={Constant.lastnamePlaceholder}
                onChangeText={(text) => {this.handleEvent(text,"2")}}
                underlineColorAndroid="transparent"
                value={this.state.lastName}
                keyboardType='default'
              />
            </View>
            <View style={styles.viewContain}>
              <TextInput
                style={styles.textStyle}
                placeholder={Constant.streetAddressPlaceholder}
                onChangeText={(text) => {this.handleEvent(text,"3")}}
                underlineColorAndroid="transparent"
                value={this.state.streetAddress}
                keyboardType='default'
              />
            </View>
            <View style={styles.viewContain}>
              <TextInput
                style={styles.textStyle}
                placeholder={Constant.cityPlaceholder}
                onChangeText={(text) => {this.handleEvent(text,"4")}}
                underlineColorAndroid="transparent"
                value={this.state.city}
                keyboardType='default'
              />
            </View>
            <View style={styles.viewContainSub}>
              <TextInput
                style={styles.textStyleLeft}
                placeholder={Constant.statePlaceholder}
                onChangeText={(text) => {this.handleEvent(text,"5")}}
                underlineColorAndroid="transparent"
                value={this.state.state}
                keyboardType='default'
              />
              <TextInput
                style={styles.textStyleRight}
                placeholder={Constant.zipPlaceholder}
                onChangeText={(text) => {this.handleEvent(text,"6")}}
                underlineColorAndroid="transparent"
                value={this.state.zip}
                keyboardType='numeric'
              />
            </View>
            <View style={styles.viewContain}>
              <TextInput
                style={styles.textStyle}
                placeholder={Constant.emailPlaceholder}
                onChangeText={(text) => {this.handleEvent(text,"7")}}
                underlineColorAndroid="transparent"
                value={this.state.email}
                keyboardType='email-address'
              />
            </View>
            <View style={styles.viewContain}>
              <TextInput
                style={styles.textStyle}
                placeholder={Constant.createPasswordPlaceholder}
                onChangeText={(text) => {this.handleEvent(text,"8")}}
                underlineColorAndroid="transparent"
                value={this.state.createPassword}
                keyboardType='default'
                secureTextEntry={true}
              />
            </View>
            <View style={styles.viewContain}>
              <TextInput
                style={styles.textStyle}
                placeholder={Constant.confirmPasswordPlaceholder}
                onChangeText={(text) => {this.handleEvent(text,"9")}}
                underlineColorAndroid="transparent"
                value={this.state.confirmPassword}
                keyboardType='default'
                secureTextEntry={true}
              />
            </View>
            <View style={styles.viewContainButton}>
              <Button style={styles.buttonStyle}
                onPress={this.onSubmitClicked}
                title={Constant.submit}
                color="#fff"
                disabled={this.state.buttonClick}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

