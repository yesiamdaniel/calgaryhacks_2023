import { FlatList, Modal, StyleSheet, View } from "react-native"
import { Button, Text } from "@rneui/base";
import { useEffect, useState } from "react";
import { getUserStocks } from "../../services/userService";


const ManageStockModal = ({ isVisible, onClose, stockData, setModalVisible }) => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const fetchStocks = async () => {
            const fetchedStocks = await getUserStocks();
            if (fetchedStocks) {
                setStocks(fetchedStocks);
            } else {
                // Handle the case where no stocks are found or an error occurred
                console.log("No stocks found or an error occurred");
            }
        };

        if (isVisible) {
            fetchStocks();
        }
    }, [isVisible]);

    return (
        <View style={styles.modalContainer}>
            <Modal visible={isVisible} onRequestClose={onClose} animationType="slide">
                <View style={styles.modalContent}>
                    <Text style={styles.header}>Manage Your Stocks</Text>
                    {stocks.length > 0 ? (
                        <FlatList
                            data={stocks}
                            keyExtractor={(item, index) => item.ticker + index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.stockItem}>
                                    <Text style={styles.stockText}>{item.ticker}</Text>
                                    <Text style={styles.stockText}>{`$${item.purchasePrice.toFixed(2)}`}</Text>
                                    <Text style={styles.stockText}>{`Shares: ${item.shares}`}</Text>
                                    <View style={styles.buttonGroup}>
                                        <Button title="Buy" onPress={() => console.log(`Buying ${item.ticker}`)} />
                                        <Button title="Sell" onPress={() => console.log(`Selling ${item.ticker}`)} />
                                    </View>
                                </View>
                            )}
                        />
                    ) : (
                        <Text style={styles.noStocksText}>You don't currently own any stocks.</Text>
                    )}
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalContent: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    stockItem: {
      backgroundColor: '#f9f9f9',
      padding: 10,
      marginVertical: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 10,
      width: 300, // Adjust this width based on your screen size
    },
    stockText: {
      fontSize: 16,
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 120, // Adjust this width based on the size of your buttons
    },
    noStocksText: {
      fontSize: 18,
      color: 'gray',
      marginTop: 20,
      textAlign: 'center',
    },
  });
  

export default ManageStockModal;