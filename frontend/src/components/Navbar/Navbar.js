import { Button, Text } from "@rneui/base";
import strings from "../../constants/strings";
import { View } from "react-native";
import styles from "../../styles/styles";
import { useRouter } from "expo-router";

const Navbar = () => {

    const router = useRouter();

    return (
        <View style={styles.navbar}>
            <Link to="/home"><Button>Home</Button></Link>
            <Link to="/explore"><Text>explore</Text></Link>
            <Button title={strings.Train}></Button>
            <Button title={strings.Market}></Button>
            <Button title={strings.Profile}></Button>
        </View>
    );
};



export default Navbar;