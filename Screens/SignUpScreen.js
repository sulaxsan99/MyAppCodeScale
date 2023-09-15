import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Fire_auth } from '../config'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Formik } from 'formik';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import styles from './Sigup.style'
import * as Yup from 'yup';

import InputCompnent from '../Components/input/InputCompnent';
import ButtonComponent from '../Components/input/ButtonComponent';
const SignUpScreen = () => {
    const navigation = useNavigation();
    const auth = Fire_auth;

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
            )
            .required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    });


    const handleSignUp = (email, password, username) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                saveUserName(user, username)
                alert("User Created successfully ")
                .then(()=>{
                      navigation.navigate('Login')
                }) .catch(() => {
                    console.error('Error saving username:', saveError);
                    
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Signup failed: ${errorMessage}`);
                // ..
            });
    }
    const saveUserName = async (user, name) => {
        try {
            await updateProfile(user, { displayName: name }).then((res) => {
                console.log(res)
                console.log("upadted successfully")
            }).catch((error) => {
                console.log(error)
            });
        } catch (error) {
            // Handle errors
            console.error('Error saving user name:', error);
        }
    };
    return (

        <SafeAreaView style={styles.container}>


            <Text style={styles.heading}>My App</Text>
            <View style={styles.inputContainer}>
                <Formik
                    initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        // Handle form submission here
                        handleSignUp(values.email, values.password, values.username);
                        // resetForm();
                    }}
                >
                    {(formikProps) => (
                        <View>
                            <View>
                                <InputCompnent

                                    onChangeText={formikProps.handleChange('username')}
                                    value={formikProps.values.username}
                                    placeholder="Username"
                                    secureTextEntry={false}
                                />
                                <View>
                                    {formikProps.touched.username && formikProps.errors.username && (
                                        <Text style={{ color: 'red' }}>{formikProps.errors.username}</Text>
                                    )}
                                </View>

                            </View>
                            <View style={{ marginTop: 18 }}>
                                <InputCompnent

                                    onChangeText={formikProps.handleChange('email')}
                                    value={formikProps.values.email}
                                    placeholder="Email"
                                    secureTextEntry={false}

                                />
                                <View>
                                    {formikProps.touched.email && formikProps.errors.email && (
                                        <Text style={{ color: 'red' }}>{formikProps.errors.email}</Text>
                                    )}
                                </View>

                            </View>
                            <View style={{ marginTop: 18 }}>
                                <InputCompnent

                                    onChangeText={formikProps.handleChange('password')}
                                    value={formikProps.values.password}
                                    placeholder="Password"
                                    secureTextEntry={true}

                                />
                                <View style={{ position: "absolute", marginTop: 22, marginLeft: 309.77 }}>
                                    <AntDesign name="eye" size={24} color="#9796A1" style={{}} />
                                </View>
                                <View>
                                    {formikProps.touched.password && formikProps.errors.password && (
                                        <Text style={{ color: 'red' }}>{formikProps.errors.password}</Text>
                                    )}
                                </View>
                            </View>


                            <View style={{ marginTop: 18 }}>
                                <InputCompnent
                                    onChangeText={formikProps.handleChange('confirmPassword')}
                                    value={formikProps.values.confirmPassword}
                                    placeholder="Confirm Password"
                                    secureTextEntry={true}

                                />
                                <View style={{ position: "absolute", marginTop: 22, marginLeft: 309.77 }}>
                                    <AntDesign name="eye" size={24} color="#9796A1" style={{}} />
                                </View>
                                <View>

                                    {formikProps.touched.confirmPassword && formikProps.errors.confirmPassword && (
                                        <Text style={{ color: 'red' }}>{formikProps.errors.confirmPassword}</Text>
                                    )}
                                </View>
                            </View>
                            <View>

                            </View>

                            <ButtonComponent onPress={formikProps.handleSubmit} style={styles.btn} txtStyle={styles.btnText} btnText="Sign Up" />
                        </View>
                    )}
                </Formik>

            </View>

            <View  style={{ marginTop: 150 ,alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"row"}}>
                <Text style={{ fontSize: 15, fontWeight: '600', color: "#FFFFFF" }}>
                    Have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}  >
                <Text style={{ color: "#FFD482", textDecorationLine: 'underline' ,fontSize: 15, fontWeight: '600', }}> Sign In</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default SignUpScreen
