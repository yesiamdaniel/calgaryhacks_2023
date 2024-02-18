import { FlatList, Modal, TextInput, View } from "react-native"
import styles from "../../styles/styles"
import { Button, Text } from "@rneui/base";
import { setUserData, updateUserStocks } from "../../services/userService";
import { useState } from "react";


const PurchaseStockModal = ({ isVisible, stockData, setModalVisible }) => {

    const [shares, setShares] = useState('');

    const handlePurchase = async () => {
        if (!shares) {
            alert("Please enter the number of shares you would like to purchase")
        }

        const stock = stockData[0]
        console.log("Stock: ", stock)
        const newStock = {
            ticker: stockData[0],
            shares: parseInt(shares, 10),
            purchasePrice: stockData.currentPrice,
            purchaseDate: new Date(),
        };

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