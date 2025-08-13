import { TextInput, View, Image, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import WhiteButton from "../components/WhiteButton";
import GreenButton from "../components/GreenButton";

const Login = ({navigation}) => {
    return(
        <View>
            <View>
                <Text>Acesse</Text>
                <Text>com E-mail e senha</Text>
            </View>

            <View>
                <Text>E-mail</Text>
                <TextInput
                    keyboardType="email-address"
                    placeholder="Digite seu E-mail"
                />
            </View>

            <View>
                <Text></Text>
                <TextInput/>
            </View>

            <View>
                <Checkbox/>
                <Text></Text>
            </View>

            <View>
                <WhiteButton><Text></Text></WhiteButton>
                <GreenButton><Text></Text></GreenButton>
            </View>

            <View>
                <View/>
                <Text></Text>
                <View/>
            </View>

            <View>
                <Image source={require("../../assets/Google.png")}/>
                <Image source={require("../../assets/Facebook.png")}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default Login;