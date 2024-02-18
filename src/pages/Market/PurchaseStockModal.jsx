import { FlatList, Modal, TextInput, View } from "react-native"
import styles from "../../styles/styles"
import { Button, Text } from "@rneui/base";
import { setUserData, updateUserStocks } from "../../services/userService";
import { useState } from "react";


const PurchaseStockModal = ({ isVisible, stockData, setModalVisible, stockTicker }) => {

    const [shares, setShares] = useState('');

    const handlePurchase = async () => {
        if (!shares) {
            alert("Please enter the number of shares you would like to purchase")
        }

        const purchasePrice = stockData.datasets[0].data[0]; // This assumes the price is in the first position
        const purchaseDate = new Date();

        const newStock = {
            ticker: stockTicker,
            shares: parseInt(shares, 10),
            purchasePrice: purchasePrice,
            purchaseDate: purchaseDate,
        };
        console.log(newStock)

        try {
            await updateUserStocks(newStock);
            console.log("Stock purchased successfully")
            setModalVisible(false);
        } catch (error) {
            console.log("Error adding stock: ", error)
            alert("Failed To Purchase Stock")
        }
    }
    
    return (
        <View>
            <Modal visible={isVisible}>
                <View style={{marginTop: 22}}>
                    <View>
                        <Text style={styles.header}>Purchase a stock</Text>

                        <Text># of Shares</Text>
                        <TextInput value={shares} onChangeText={setShares} keyboardType="numeric"></TextInput>

                        <Button title="Purchase" onPress={() => {handlePurchase()}}></Button>
                        <Button
                        title="Cancel"
                        onPress={() => setModalVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default PurchaseStockModal;