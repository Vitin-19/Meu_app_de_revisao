import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { green } from "../constants/Colors.js"

const GreenButton = ({children,style,onPress}) => {
    return(
        <TouchableOpacity style={[style,styles.Button]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button:{
        borderColor: green,
        borderWidth:1,
        backgroundColor: green,
    }
})

export default GreenButton;