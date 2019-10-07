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
  headerCircle: {
    alignSelf: "stretch",
    padding: 20,
    alignItems: "center"
  },
  CircleShapeView: {
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    justifyContent: "center",
    alignItems: "center"
  }, 
  textStyle: {
    height: 40,
    width: "95%",
    borderColor: colors.appcolor,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 5,
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  textStyleLeft: {
    height: 40,
    flex : 2,
    borderColor: colors.appcolor,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 5,
    fontSize: 15,
    marginRight: 10,
    paddingLeft: 10,
    borderRadius: 5
    
  },
  textStyleRight: {
    height: 40,
    flex : 1,
    borderColor: colors.appcolor,
    borderWidth: 2,
    paddingRight: 10,
    borderRadius: 5,
    marginBottom: 5,
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  viewContain: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10
  },
  viewContainButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.appcolorButton,
    marginTop : 20,
    marginLeft: 15,
    marginRight: 15
  },
  viewContainSub: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10

  },
  headerText: {
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold"
  },
  buttonStyle: {
    height: 50,
    width: "95%",
    color: "#fff",
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 5,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10
  },
});
