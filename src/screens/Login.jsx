import { TextInput, View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import Checkbox from "expo-checkbox";
import WhiteButton from "../components/WhiteButton";
import GreenButton from "../components/GreenButton";
import { gray, green } from "../constants/Colors";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
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
    const [check, setCheck] = useState(false);


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
                        if (showPassword) setShowPassoword(false)
                        else setShowPassoword(true)
                    }}
                        style={{ marginRight: 20, marginTop: 4 }}
                    >
                        <Icon
                            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                            color={"#5351dac2"}
                            size={30}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={styles.checkboxContainer}>
                        <Checkbox style={styles.checkbox}
                            value={check}
                            onValueChange={setCheck}
                        />
                        <Text>Lembrar senha</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <GreenButton style={styles.button}>
                        <Text style={{ color: "#ffffff" }}>Acessar</Text>
                    </GreenButton>
                    <WhiteButton style={styles.button}>
                        <Text>Cadastrar</Text>
                    </WhiteButton>
                </View>

                <View style={styles.divContainer}>
                    <View style={styles.line} />
                    <Text style={{ color: styles.line.backgroundColor }}>Ou continue com</Text>
                    <View style={styles.line} />
                </View>

                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image source={require("../../assets/Google.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../../assets/Facebook.png")} />
                    </TouchableOpacity>
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
        bottom: 97,
        justifyContent: "center",
        width: "100%"
    },
    back: {
        bottom: 130
    },
    titles: {
        flex: 1,
        flexDirection: "column",
        bottom: 140,
    },
    titulo: {
        fontFamily: "Poppins-Medium",
        fontSize: 45,
        height: 60,
    },
    txt: {
        fontFamily: "Poppins-Regular",
        height: 17
    },
    inputContainer: {
        marginBottom: 20,
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#5c86e046",
        borderRadius: 5,
        paddingVertical: 8
    },
    input: {
        color: "#5351dac2",
        flex: 1,
        width: windowWidth * 0.50
    },
    checkboxContainer: {
        flexDirection: "row"
    },
    checkbox: {
        borderColor: green,
        marginRight: 10
    },
    button: {
        display: 'flex',
        flexDirection: "row",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 30,
        width: 150
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    divContainer: {
        marginTop: 45,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    line: {
        borderColor: "#5c5b5bff",
        borderWidth: 0.2,
        width: 90,
        height: 0.1
    },
    imageContainer: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:20
    }
})

export default Login;