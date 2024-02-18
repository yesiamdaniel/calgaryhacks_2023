import styles from "../../styles/styles";
import { View } from "react-native";
import { LinearProgress } from "@rneui/base";

const ProgressBarContainer = ({ barColor, progress }) => {

    return (
        <View style={styles.progressBarContainer}>
            <LinearProgress style={styles.progressBar} color={barColor} value={progress} />
        </View>
    )
}

export default ProgressBarContainer;