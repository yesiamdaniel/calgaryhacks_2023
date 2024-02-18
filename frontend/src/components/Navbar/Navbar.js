import { Button, Text } from "@rneui/base";
import strings from "../../constants/strings";
import { View } from "react-native";
import styles from "../../styles/styles";
import { Link, useRouter } from "expo-router";

const Navbar = () => {

    const router = useRouter();

    return (
        <View style={styles.navbar}>
            <Button title={strings.Home}></Button>
            <Button title={strings.Explore}></Button>
            <Button title={strings.Train}></Button>
            <Button title={strings.Market}></Button>
            <Button title={strings.Profile}></Button>
        </View>
    );
};



export default Navbar;