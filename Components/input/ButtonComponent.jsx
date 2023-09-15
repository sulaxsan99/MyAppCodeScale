import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComponent = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <Text style={props.txtStyle}>{props.btnText}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent

