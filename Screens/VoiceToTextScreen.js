import { StyleSheet, Text, View, SafeAreaView,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
// import Voice from '@react-native-voice/voice'

const VoiceToTextScreen = () => {
    const [isListening, setIsListening] = useState(false);
    const [recognizedText, setRecognizedText] = useState('');

    // useEffect(() => {
    //     Voice.onSpeechResults = (results) => {
    //         // Handle recognized speech results
    //         setRecognizedText(results[0]);
    //     };

    //     return () => {
    //         Voice.destroy().then(Voice.removeAllListeners);
    //     };
    // }, []);
    // const startListening = async () => {
    //     try {
    //       await Voice.start('en-US'); // You can specify the language here
    //       setIsListening(true);
    //     } catch (e) {
    //       console.error('Error starting voice recognition:', e);
    //     }
    //   };

    //   const stopListening = async () => {
    //     try {
    //       await Voice.stop();
    //       setIsListening(false);
    //     } catch (e) {
    //       console.error('Error stopping voice recognition:', e);
    //     }
    //   };    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button
                    title={isListening ? 'Stop Listening' : 'Start Listening'}
                    // onPress={isListening ? stopListening : startListening}
                />
                {/* <Text>Recognized Text: {recognizedText}</Text> */}
            </View>
        </SafeAreaView>
    )
}

export default VoiceToTextScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A2A2A',
        alignItems: 'center',
    }, 
})