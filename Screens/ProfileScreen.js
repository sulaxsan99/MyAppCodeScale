import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth';
import { Fire_auth } from '../config'
import { useNavigation } from '@react-navigation/native'
import AnimatedInput from "react-native-animated-input";
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './Profile.style';
import ButtonComponent from '../Components/input/ButtonComponent';

const ProfileScreen = () => {
  const auth = Fire_auth;
  const navigation = useNavigation();
  const user = auth.currentUser;

  const onSignOut = () => {
    signOut(auth).then(() => {
      // navigation.navigate('Login')
      console.log("sign out")
    }).catch((error) => {
      console.log(error)
    });
    // alert("kfndbf")
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  return (
    <SafeAreaView style={styles.container}>


      <Text style={styles.heading}>My App</Text>

      <View style={styles.inputContainer}>
        <Formik
          initialValues={{ email: user.email, username: user.displayName }}
          validationSchema={validationSchema}
        // onSubmit={(values, { resetForm }) => {
        //   // Your form submission logic goes here
        //   console.log(values.email)
        //   // handleSignIn(values.email, values.password);
        //   resetForm(); // Optionally reset the form after submission
        // }}
        >
          {(formikProps) => (
            <View>
              <View>
                <AnimatedInput

                  onChangeText={formikProps.handleChange('username')}
                  value={formikProps.values.username}
                  placeholder="Username"
                  autoCapitalize='none'
                  autoCorrect={false}
                  styleLabel={styles.styleLabel}
                  styleBodyContent={styles.styleBodyContent}
                  styleInput={styles.styleInput}
                  styleContent={styles.styleContent}
                  textInputFontSize={14}
                />
                {/* <View>
                  {formikProps.touched.username && formikProps.errors.username && (
                    <Text style={{ color: 'red' }}>{formikProps.errors.username}</Text>
                  )}
                </View> */}

              </View>
              <View style={{ marginTop: 18 }}>
                <AnimatedInput
                  onChangeText={formikProps.handleChange('email')}
                  value={formikProps.values.email}
                  placeholder="Email"
                  autoCapitalize='none'
                  autoCorrect={false}
                  styleLabel={styles.styleLabel}
                  styleBodyContent={styles.styleBodyContent}
                  styleInput={styles.styleInput}
                  styleContent={styles.styleContent}
                  textInputFontSize={14}
                />
                {/* <View style={{ marginTop: 2 }}>
                                    {formikProps.touched.email && formikProps.errors.email && (
                                        <Text style={{ color: 'red' }}>{formikProps.errors.email}</Text>
                                    )}
                                </View> */}

              </View>

              <ButtonComponent onPress={onSignOut} style={styles.btn} txtStyle={styles.btnText} btnText="Log Out" />

            </View>
          )}
        </Formik>

      </View>

    </SafeAreaView>
  )
}

export default ProfileScreen