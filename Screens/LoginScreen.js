import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Fire_auth } from '../config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from 'formik';
import * as Yup from 'yup';
import AnimatedInput from "react-native-animated-input";
import InputCompnent from '../Components/input/InputCompnent';
import styles from './Login.style';
import ButtonComponent from '../Components/input/ButtonComponent';
const LoginScreen = () => {
    const navigation = useNavigation();
    const auth = Fire_auth;
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                'one uppercase letter,one lowercase letter,one digit'
            ).
            required('Password is required'),
    });

    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                alert("login success fullly ")
                navigation.navigate('Welcome')
                console.log("message")
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("1", error.code)
                console.log("2", error.message)

                alert("'Invalid email or password. Please try again.'")
            });

    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.heading}>My App </Text>
            </View>
            <View style={styles.inputContainer}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        // Your form submission logic goes here
                        console.log(values.email)
                        handleSignIn(values.email, values.password);
                        resetForm(); // Optionally reset the form after submission
                    }}
                >
                    {(formikProps) => (
                        <View>
                            <View>

                                <InputCompnent
                                    onChangeText={formikProps.handleChange('email')}
                                    value={formikProps.values.email}
                                    placeholder="Email"
                                    secureTextEntry={false}

                                />
                                <View style={{ marginTop: 2 }}>
                                    {formikProps.touched.email && formikProps.errors.email && (
                                        <Text style={{ color: 'red' }}>{formikProps.errors.email}</Text>
                                    )}
                                </View>
                            </View>
                            <View style={{ marginTop: 16 }}>
                                <InputCompnent
                                    onChangeText={formikProps.handleChange('password')}
                                    value={formikProps.values.password}
                                    placeholder="password"
                                    secureTextEntry={true}
                                />
                                <View style={{ position: "absolute", marginTop: 22, marginLeft: 309.77 }}>
                                    <AntDesign name="eye" size={24} color="#9796A1" style={{}} />
                                </View>
                                <View style={{ marginTop: 2 }}>
                                    {formikProps.touched.password && formikProps.errors.password && (
                                        <Text style={{ color: 'red' }}>{formikProps.errors.password}</Text>
                                    )}
                                </View>

                            </View>
                            <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                                <Text style={styles.forgotPassword} >
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>
                            <ButtonComponent onPress={formikProps.handleSubmit} style={styles.btn} txtStyle={styles.btnText} btnText="Sign In" />
                        </View>
                    )}
                </Formik>

            </View>

            <View style={{ marginTop: 170 ,alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"row" }}>
                <Text style={{ fontSize: 15, fontWeight: '600', color: "#FFFFFF" ,}}>
                    Don't Have Account? 
                    
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={{ color: "#FFD482", textDecorationLine: 'underline', fontSize: 15, fontWeight: '600',marginBottom:0 }}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

