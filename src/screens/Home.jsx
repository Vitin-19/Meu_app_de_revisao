import { View, Text, Image, StyleSheet } from "react-native";
import WhiteButton from "../components/WhiteButton.jsx";
import GreenButton from "../components/GreenButton.jsx";
import { gray } from "../constants/Colors.js";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/casual_dog.png')} style={{ width: 300, height: 300 }} />

            <View style={{ display: "flex", alignItems: "center" }}>
                <Text style={styles.titulo}>Ótimo dia</Text>
                <Text style={styles.txt}>Como deseja acessar?</Text>
            </View>

            <View>
                <GreenButton style={styles.button}>
                    <Image source={require('../../assets/Google.png')} style={styles.imagem} />
                    <Text style={{ color: "#ffffff" }}>Ótimo dia!</Text>
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
        padding: 30,
        backgroundColor: "#ffffff",
        justifyContent: "center"
    },
    top: {
        backgroundColor: gray,
        height: 20
    },

    button: {
        display: 'flex',
        flexDirection: "row",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginTop: 30,
    },
    titulo: {
        fontFamily: 'Roboto',
        fontSize: 45
    },
    imagem: {
        width: 35,
        height: 35,
        paddingRight: 30,
        backgroundColor: "white"
    }
})

export default Home;