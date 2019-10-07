import { StyleSheet } from "react-native";
import {
  colors,
  grey,
  fontSize,
  fontFamily
} from "ReactSignUp/src/helper/appColor.js";
export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.while
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white
  },
  ShapeView: {
    width: "95%",
    height: "95%",
    justifyContent: "center",
    alignItems: "center"
  }, 
  textStyle: {
    textAlign: 'center', 
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonStyle: {
    height: 50,
    width: "95%",
    color: colors.white,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 5,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10
  },
});
