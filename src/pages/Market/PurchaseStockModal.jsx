import { FlatList, Modal, View } from "react-native"
import styles from "../../styles/styles"
import { Button, Text } from "@rneui/base";


const PurchaseStockModal = ({ isVisible, stockData, setModalVisible }) => {

    
    
    return (
        <View>
            <Modal visible={isVisible}>
                <View style={{marginTop: 22}}>
                    <View>
                        <Text style={styles.header}>Purchase a stock</Text>
                        <Button
                        title="Close"
                        onPress={() => setModalVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default PurchaseStockModal;