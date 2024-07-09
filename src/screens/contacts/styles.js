import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerActivity : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    container : {
        flex: 1, 
        paddingVertical: 10
    },
    containerCard : {
        flexDirection: "row",
        margin: 4,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        alignItems: 'center',
        height: 60
    },
    containerImage : {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    containerName : {
        flex: 1,
        paddingHorizontal: 10
    },
    textName : {
        fontSize: 16
    }
});

export default styles