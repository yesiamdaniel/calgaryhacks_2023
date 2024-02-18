import { FlatList, Modal, View } from "react-native"
import styles from "../../styles/styles"
import { Button, Text } from "@rneui/base";


const ManageStockModal = ({ isVisible, onClose, stockData, setModalVisible }) => {

    return (
        <View>
            <Modal visible={isVisible}>
                <View style={{marginTop: 22}}>
                    <View>
                        <Text style={styles.header}>Manage Your Stocks Here</Text>
                        {stockData ? (
                           <FlatList
                           data={stockData}
                           keyExtractor={item => item.id.toString()}
                           renderItem={({ item }) => (
                               <View style={styles.stockItem}>
                               <Text style={styles.stockText}>{item.stock}</Text>
                               <Text style={styles.stockText}>{`$${item.currentPrice}`}</Text>
                               <Button title="Buy" onPress={() => console.log(`Buying ${item.stock}`)} />
                               <Button title="Sell" onPress={() => console.log(`Selling ${item.stock}`)} />
                               </View>
                           )}
                           /> ): (<View><Text>You Don't Currently own any stocks</Text></View>
                        )}
                        
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

export default ManageStockModal;