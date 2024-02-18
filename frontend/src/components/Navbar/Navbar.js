import { Button, Text } from "@rneui/base";
import strings from "../../constants/strings";
import { View } from "react-native";
import styles from "../../styles/styles";
import { Link, useRouter } from "expo-router";
import { setPage } from "../../redux/slice/pageSlice";
import { PAGES } from "../../constants/actions";
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const dispatch = useDispatch();

    const router = useRouter();

    const dispatchSetPage = (page) => {
        dispatch(setPage(page));
    }

    return (
        <View style={styles.navbar}>
            <Button title={strings.Home} onPress={() => dispatchSetPage(PAGES.HOME)}></Button>
            <Button title={strings.Explore} onPress={() => dispatchSetPage(PAGES.EXPLORE)} ></Button>
            <Button title={strings.Train} onPress={() => dispatchSetPage(PAGES.LEARN)}></Button>
            <Button title={strings.Market} onPress={() => dispatchSetPage(PAGES.PROGRESS)}></Button>
            <Button title={strings.Profile} onPress={() => dispatchSetPage(PAGES.PROFILE)}></Button>
        </View>
    );
};



export default Navbar;