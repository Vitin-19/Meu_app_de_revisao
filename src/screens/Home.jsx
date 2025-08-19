import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import WhiteButton from "../components/WhiteButton.jsx";
import GreenButton from "../components/GreenButton.jsx";
import { gray } from "../constants/Colors.js";
import { useFonts } from "expo-font";


const Home = ({ navigation }) => {
    // Carregar as fontes corretas
    const [fonts] = useFonts({
        "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf")
    });

    return (
        <View style={styles.container}>
            <View style={styles.top}></View>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/casual_dog.png')} style={styles.dog} />
            </View>

            <View style={{ display: "flex", alignItems: "center" }}>
                <Text style={styles.titulo}>Ótimo dia</Text>
                <Text style={styles.txt}>Como deseja acessar?</Text>
            </View>

            <View style={{padding:30}}>
                <GreenButton style={styles.button} onPress={() => navigation.navigate("Login")}>
                    <View style={styles.googleContainer}>
                        <Image source={require('../../assets/Google.png')} style={styles.google} />
                    </View>
                    <Text style={{ color: "#ffffff",width:"80%", paddingLeft:38 }}>Como deseja acessar</Text>
                </GreenButton>
                <WhiteButton style={styles.button}>
                    <Text>Outras opções</Text>
                </WhiteButton>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center"
    },
    top: {
        backgroundColor: gray,
        height: 40,
        bottom:68,
        justifyContent:"center",
        width:"100%"
    },
    button: {
        display: 'flex',
        flexDirection: "row",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 30,
    },
    titulo: {
        fontFamily: "Poppins-Medium",
        fontSize: 45
    },
    txt:{
        fontFamily:"Poppins-Regular"
    },
    googleContainer: {
        display:"flex",
        justifyContent:"left",
        width:"20%",
        paddingLeft:30
    },
    google: {
        width: 35,
        height: 35,
        backgroundColor: "white",
        borderRadius:5,
    },
    imageContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"fixed",
    },
    dog:{
        resizeMode:"contain",
        height:300
    }
})

export default Home;