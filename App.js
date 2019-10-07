import Signup from "./src/Screen/Signup";
import Details from "./src/Screen/DetailsScreen/Details";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator({
    Signup: { screen: Signup},
    Details: { screen: Details},
  });
  
  const App = createAppContainer(MainNavigator);

export default App


