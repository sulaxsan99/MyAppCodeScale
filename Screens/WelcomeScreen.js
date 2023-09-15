import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://thronesapi.com/api/v2/Characters';

    // Use Axios to make an HTTP GET request to the API
    axios.get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        setCharacters(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setting} >
        <Text style={{ fontSize: 20, color: 'white', fontWeight: '500', lineHeight: 29 }}>Game of Thrones</Text>
       <View style={{display:"flex",flexDirection:"row",}}>
       <TouchableOpacity onPress={() => navigation.navigate("VoiceToText")}>
          <MaterialIcons name="settings-voice" size={35} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="settings" size={35} color="#FFFFFF" />
        </TouchableOpacity>
       </View>
      </View>
      <View style={{ width: 370, height: 40, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 5, backgroundColor: '#3D3D3D', padding: 10, marginTop: 8 }}>
        <Text style={styles.txt}> Full Name</Text>
        <Text style={styles.txt}> Character Title</Text>
        <Text style={styles.txt}> Image</Text>
      </View>

      <View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <ScrollView >
            {characters.map((character) => (
              <>
                <View style={{ width: 370, height: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 10, backgroundColor: '#3D3D3D', padding: 10, borderRadius: 15 }}>

                  <Text key={character.id} numberOfLines={2} style={styles.txt}>  {character.fullName}</Text>
                  <Text numberOfLines={5} style={styles.txt}>{character.title}</Text>
                  <Image source={{ uri: character.imageUrl }} style={{ width: 80, height: 80, borderRadius: 10 }} />


                </View>

              </>
            ))}
          </ScrollView>
        )}
      </View>


    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    flexDirection: "column"
  },
  setting: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 37,
    width: 370
  },
  txt: {
    width: 105,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '500',

  }
})
