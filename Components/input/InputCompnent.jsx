import { View } from 'react-native'
import React from 'react'
import AnimatedInput from "react-native-animated-input";
import styles from '../../Screens/Login.style';
const InputCompnent = (props) => {
    return (
        <View>
            <AnimatedInput
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
                autoCapitalize='none'
                autoCorrect={false}
                styleLabel={styles.styleLabel}
                styleBodyContent={styles.styleBodyContent}
                styleInput={styles.styleInput}
                styleContent={styles.styleContent}
                textInputFontSize={14}
                secureTextEntry={props.secureTextEntry}

            />
        </View>
    )
}

export default InputCompnent

