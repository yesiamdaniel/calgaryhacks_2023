import { Button } from '@rneui/base'
import { useRouter } from 'expo-router'
import { View, Text } from 'react-native'

const Profile = () => {
    const router = useRouter();
    return (
        <View>
            <Text>Profile</Text>
            <Button title="Logout" onPress={() => {router.navigate("landing/Login")}}></Button>
        </View>
    )
}

export default Profile