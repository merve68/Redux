import React from "react";
import { View ,Text} from "react-native";
import Home from "./screen/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App =() =>{
  return(
    <Provider store={store}>
    <View>
      <Home/>
    </View>
    </Provider>
  )
}

export default App;