import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Button } from "@rneui/base";
import { login, signup } from "../../services/auth";
import { useRouter } from "expo-router";

const Login = () => {

    const router = useRouter();
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const handleLogin = async () => {
        try {
            const user = await login("nicksavino2@gmail.com", "Test123")
            if (user) {
                router.navigate("/Home")
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleRegister = async () => {
        try {
            console.log("SigningUp")
            const user = await signup(email, password);
            if (user) {
                router.navigate("/Home")
            }
        } catch (error) {
            console.error(error.Message)
        }
    }

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        
        <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={onChangeEmail}
                placeholder="Enter an email"
                keyboardType="email-address"
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={onChangePassword}
                placeholder="Enter a password"
                secureTextEntry={true} // Hides the password
            />
        </View>

        <View style={styles.buttonContainer}>
            <Button title="Login" onPress={handleLogin} />
            <Button title="Register" onPress={handleRegister} />
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centers content along the main axis
        alignItems: 'center', // Centers content along the cross axis
        padding: 20,
        backgroundColor: '#fff', // Consider setting a background color
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%', // Ensures TextInput takes full width of the container
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5, // Rounds the corners of the input field
    },
    buttonContainer: {
        flexDirection: 'row', // Aligns buttons in a row
        justifyContent: 'space-around', // Distributes buttons evenly
        width: '100%', // Ensures container takes full width
        marginTop: 20,
    },
});


export default Login;