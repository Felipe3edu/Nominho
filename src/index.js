import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

class Nome extends React.Component {
    state = {
        name: '',
    }
    render() {
        return (
            
            <View style={Styles.viewBackgroud}>
                <View >
                    <Text> Nome : {this.state.name}</Text>
                </View>
                <View>

                    <View style={{backgroundColor:"#1E90FF",
                                  width:200,
                                  alignItems:'center',
                                  borderRadius:15}}>
                    <TextInput 
                    style={Styles.input}
                    placeholder="Seu Nome"
                    onChangeText={(text) => this.setState({ name: text })}
                    />
                    </View>
                </View>
            </View>
        )
    }
}


const Styles = StyleSheet.create({
    viewBackgroud: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    name: {
        color: '#fff',
        fontSize: 65,

    },
    input:{
      backgroundColor:'#b9bec7',
      borderRadius: 15,
      textAlign:'center',
      width:140,
      height:40,
      marginVertical:20
    }
}
)
export default Nome