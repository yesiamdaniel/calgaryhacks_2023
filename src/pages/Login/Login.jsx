import { View, Text, TextInput } from "react-native";
import styles from "../../styles/styles";
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
            const user = await login(email, password)
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