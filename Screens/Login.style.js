import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A2A2A',
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: 114
    },
    heading: {
        fontSize: 24,
        marginTop: 129,
        color: '#FFFFFF',
        fontWeight:'600',
        lineHeight:29.05,
        

    },
    styleLabel: {
        fontWeight: "400",
        fontSize: 12,
        color: '#C0C0C0',
        marginBottom: 0,
        lineHeight: 14.52,
        // backgroundColor: 'red',
        //  width:31,
        height: 15
    },
    styleBodyContent: {
        //  borderBottomWidth:0,
        paddingBottom: 2,
        //  backgroundColor:'blue',
        height: 40,
        padding: 8,
        borderBottomColor: '#3D3D3D',
        fontWeight: "500",
        lineHeight: 20,
    },
    styleInput: {
        color: '#FFFFFF',
        // backgroundColor:'green',
        height: 20,
        marginBottom: 1
    },
    styleContent: {
        // height:30,
        backgroundColor: '#3D3D3D',
        borderRadius: 12,
        padding: 3,
        marginBottom: 0,
        width: 345,
        height: 64,

    },
    btn:{
        width:345,
        height:48,
        backgroundColor:'#FFD482',
        marginTop:68,
        display:'flex',
        flexDirection:"column",
        alignItems:"center",
        justifyContent:'center',
        borderRadius:10,
    },
    btnText:{
        fontSize:20,
        lineHeight:24.2,
        fontWeight:'600',
        color:"#000000"
    },
    forgotPassword:{
        fontSize:14,
        fontWeight:400,
        lineHeight:20,
        color:'#FFFFFF'
    }

})


export default styles