import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { MyButton, MyGap, MyInput, MyInputLogin, MyRadio } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth, Color } from '../../utils';
import { MYAPP, apiURL, api_token, getData, storeData } from '../../utils/localStorage';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import MyLoading from '../../components/MyLoading';
import { useToast } from 'react-native-toast-notifications';

export default function Login({ navigation, route }) {
  const [loading, setLoading] = useState(false)
  const img = new Animated.Value(0.8);
  const card = new Animated.Value(50);
  const toast = useToast();
  const [pilih, setPilih] = useState('Siswa')

  const masuk = () => {
    if (kirim.username.length == 0 && kirim.length == 0) {
      toast.show('Username dan kata sandi tidak boleh kosong', { type: 'warning' })

    } else if (kirim.username.length == 0) {
      toast.show('Username tidak boleh kosong', { type: 'warning' })
    } else if (kirim.password.length == 0) {
      toast.show('Kata sandi tidak boleh kosong', { type: 'warning' })
    } else {
      setLoading(true);
      console.log(kirim);
      axios.post(apiURL + 'login', {
        ...kirim,
        level: pilih
      })
        .then(res => {
          setLoading(false);
          console.log(res.data);
          if (res.data.status == 404) {
            toast.show(res.data.message, { type: 'danger' })
          } else {
            storeData('user', {
              ...res.data.data,
              level: pilih
            });
            navigation.replace('MainApp')
          }
        });
    }
  }

  const [kirim, setKirim] = useState({
    api_token: api_token,
    username: '',
    password: '',
  })

  const [comp, setComp] = useState({})

  useEffect(() => {

    Animated.timing(img, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
    Animated.timing(card, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })
  }, []);

  return (
    <SafeAreaView style={{
      flex: 1,
      width: '100%',
      height: '100%',
      padding: 0,
      margin: 0

    }}
    >

      <ImageBackground style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }} source={require('../../assets/bgsplash.png')}>

        <ScrollView>

          <View style={{
            padding: 10
          }}>
            <View style={{
              alignItems: 'center',
              marginTop: '10%'
            }}>

              <Image style={{
                width: 312,
                height: 238,

              }} source={require('../../assets/logosplash.png')} />
            </View>


            <View style={{
              padding: 20,
              marginTop: '10%'
            }}>
              {/* FORM VIEW */}

              {/* username */}
              <MyInput
                label="Username"
                placeholder="Isi Username"
                value={kirim.username}
                onChangeText={(x) => setKirim({ ...kirim, username: x })} />

              <MyGap jarak={10} />
              {/* Pasword */}
              <MyInput
                label="Password"
                placeholder="Isi Password"
                value={kirim.password}
                onChangeText={(x) => setKirim({ ...kirim, password: x })}
                secureTextEntry={true}
              />
              <View style={{

                borderRadius: 10,
                padding: 10,
                marginTop: 10,
              }}>
                <MyRadio label="Masuk Sebagai" value={pilih} onPress={x => {
                  console.log(x);
                  setPilih(x)
                }} options={['Siswa', 'Petugas UKS']} />
              </View>
              {/* Button */}
              <MyGap jarak={10} />
              <MyButton onPress={masuk} title="Masuk" />


              {/* Button Daftar */}
              <MyGap jarak={10} />
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
                <View style={{ padding: 10 }}>
                  <Text style={{
                    fontFamily: fonts.primary[500],
                    textAlign: "center",
                    color: colors.white,
                    fontSize: 13

                  }}><Text style={{ fontWeight: "bold" }}>Siswa</Text> belum memiliki akun? Silahkan <Text style={{
                    fontWeight: 'bold'
                  }}>daftar</Text></Text>
                </View>
              </TouchableWithoutFeedback>


            </View>

          </View>

        </ScrollView>


      </ImageBackground>

    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({});