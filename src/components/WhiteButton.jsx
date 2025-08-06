import { TouchableOpacity, Text, StyleSheet } from "react-native"
import green from "../constants/greenColor.js"

const WhiteButton = ({children,style}) => {
    return(
        <TouchableOpacity style={[style,styles.Button]}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button:{
        borderColor: green,
        borderWidth:1,
        backgroundColor:"#ffffff"
    }
})

export default WhiteButton;