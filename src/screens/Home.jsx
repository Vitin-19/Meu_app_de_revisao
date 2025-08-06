import { View,Text,Image, StyleSheet } from "react-native";
import WhiteButton from "../components/WhiteButton";
import GreenButton from "../components/GreenButton";

const Home = () => {
    <View>
        <View/>
        <Image source={require('../../assets/casual_dog.png')}/>

        <Text>Ótimo dia</Text>
        <Text>Como deseja acessar?</Text>

        <GreenButton>
            <Image source={require('../../assets/Google.png')}/>
            <Text></Text>
        </GreenButton>

        <WhiteButton>
            <Text></Text>
        </WhiteButton>


    </View>
}

const styles = StyleSheet.create({
    
})

export default Home;