import { NavigationContainer } from "@react-navigation/native";
import { Route } from "expo-router/build/Route";
import Home from "../../app";
import Explore from "../Explore/Explore";
import Train from "../Pages/Train";
import Market from "../Pages/Market";

const Navigation = () => {
    <NavigationContainer>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/explore" component={Explore}></Route>
        <Route exact path="/train" component={Train}></Route>
        <Route exact path="/market" component={Market}></Route>
    </NavigationContainer>
}

export default Navigation;