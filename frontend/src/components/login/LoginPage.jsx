import { View, Text, TextInput } from "react-native";
import styles from "../../styles/styles";
import { useState } from "react";
import { Button } from "@rneui/base";
import { login, signup } from "../../../../backend/services/auth";

const Login = () => {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    
    const handleLogin = async () => {
        try {
            await login(email, password)
        } catch (error) {
            console.log(error)
        }
    };

    const handleRegister = async () => {
        try {
            console.log("SigningUp")
            await signup(email, password);
        } catch (error) {
            console.error(error.Message)
        }
    }

    return (
        <View style={styles.main}>
            <Text>Login</Text>
            <Text>E-mail</Text>
            <TextInput value={email} onChangeText={onChangeEmail} placeholder="Enter an email"></TextInput>
            <Text>Password</Text>
            <TextInput value={password} onChangeText={onChangePassword} placeholder="Enter a password"></TextInput>

            <Button title="Login" onPress={handleLogin}></Button>
            <Button title="Register" onPress={handleRegister}></Button>
        </View>
    );
};

export default Login;