import React from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'

const App = () => {
     return (
    <SafeAreaView style={style.container}>
     <Text style={{style.number}}>Hello !</Text>
     <TouchableOpacity>
         <text>Number Generator</text>
     </TouchableOpacity>
    </ SafeAreaView>  
     );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    number: {
        fontSize: 38,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    botao:{
        backgroundColor:'#FFFFFF',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
    }
})

export default App;