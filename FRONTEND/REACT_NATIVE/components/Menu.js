import { TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export const Menu = () => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.container} onPress={ () => {
            navigation.openDrawer()
            }}>
            <Entypo name="menu" size={28} color="black"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 35,
        width: 35,
        borderRadius: 16.5,
        backgroundColor: 'lightgrey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 5
    },
})