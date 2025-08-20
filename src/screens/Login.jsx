import { TextInput, View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import Checkbox from "expo-checkbox";
import WhiteButton from "../components/WhiteButton";
import GreenButton from "../components/GreenButton";
import { gray, green } from "../constants/Colors";
import { useFonts } from "expo-font";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;

const Login = ({ navigation }) => {
    const [fonts] = useFonts({
        "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf")
    });

    const [showPassword, setShowPassoword] = useState(false);


    return (
        <View style={styles.container}>
            <View style={styles.top} />
            <View style={{ padding: 30 }}>
                <View style={styles.back}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ fontSize: 50, color: green, fontFamily: "Poppins-Light" }}>{"<"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titles}>
                    <Text style={styles.titulo}>Acesse</Text>
                    <Text style={styles.txt}>com E-mail e senha</Text>
                </View>

                <Text>E-mail</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        keyboardType="email-address"
                        placeholder="Digite seu E-mail"
                        placeholderTextColor={styles.input.color}
                        style={styles.input}
                    />
                </View>

                <Text>Senha</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder="Digite sua senha"
                        placeholderTextColor={styles.input.color}
                        secureTextEntry={!showPassword}
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={() => {
                        if(showPassword) setShowPassoword(false)
                        else setShowPassoword(true)
                    }}
                        style={{marginRight:20, marginTop:4}}
                    >
                        <Icon
                            name={showPassword? 'eye' : 'eye-off'}
                            color={"#00000"}
                            size={30}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox style={styles.checkbox}/>
                    <Text>Lembrar senha</Text>
                </View>

                <View>
                    <WhiteButton><Text></Text></WhiteButton>
                    <GreenButton><Text></Text></GreenButton>
                </View>

                <View>
                    <View />
                    <Text></Text>
                    <View />
                </View>

                <View>
                    <Image source={require("../../assets/Google.png")} />
                    <Image source={require("../../assets/Facebook.png")} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center",
    },
    top: {
        backgroundColor: gray,
        height: 40,
        bottom: 102,
        justifyContent: "center",
        width: "100%"
    },
    back: {
        bottom: 120
    },
    titles: {
        flex: 1,
        flexDirection:"column",
        bottom: 140,
    },
    titulo: {
        fontFamily: "Poppins-Medium",
        fontSize: 45,
        height:60,
    },
    txt: {
        fontFamily: "Poppins-Regular",
        height:17
    },
    inputContainer:{
        marginBottom:20,
        flexDirection:"row",
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:"#5c86e046",
        borderRadius:5,
        paddingVertical:8
    },
    input:{
        color:"#5351dac2",
        flex: 1,
        width:windowWidth * 0.50
    },
    checkboxContainer:{
        flexDirection:"row"
    },
    checkbox:{
        borderColor:green,
        marginRight:10
    }
})

export default Login;