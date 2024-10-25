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
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyInputLogin, MyPicker, MyRadio } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth, Color } from '../../utils';
import { MYAPP, apiURL, api_token, getData, storeData } from '../../utils/localStorage';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color, Value } from 'react-native-reanimated';
import axios from 'axios';
import moment from 'moment';
import { useToast } from 'react-native-toast-notifications';
import MyLoading from '../../components/MyLoading';

export default function Register({ navigation, route }) {
    const [loading, setLoading] = useState(false)
    const img = new Animated.Value(0.8);
    const card = new Animated.Value(50);
    const toast = useToast();
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
    const [kirim, setKirim] = useState({
        api_token: api_token,
        nama_lengkap: '',
        tanggal_lahir: moment().format('YYYY-MM-DD'),
        jenis_kelamin: '',
        alamat:'',
        asal_sekolah:'',
        nomor_telepon: '',
        username:'',
        password: '',
        repassword: '',

    });
    const handleDateChange = (date) => {
        console.log("Tanggal yang dipilih:", date);
        setKirim((prevState) => ({ ...prevState, tanggal_lahir: date }));
    };

    const simpan = () => {



        if (
            kirim.nama_lengkap.length === 0 &&
            kirim.username.length === 0 &&
            kirim.password.length === 0

        ) {
            toast.show('Formulir pendaftaran tidak boleh kosong', {
                type: 'warning'
            })
        } else if (kirim.nama_lengkap.length === 0) {
            toast.show('Silahkan ketikan nama lengkap', {
                type: 'warning'
            })
        }

        else if (kirim.username.length === 0) {
            showMessage({
                message: 'Masukan username',
            });
        }
        else if (kirim.password.length === 0) {
            showMessage({
                message: 'Masukan kata sandi kamu',
            });
        } else if (kirim.repassword.length === 0) {
            showMessage({
                message: 'Ulangi kata sandi kamu',
            });
        } else {

            console.log(kirim);

            setLoading(true);
            axios
                .post(apiURL + 'register', kirim)
                .then(res => {
                    console.warn(res.data);
                    setLoading(false);
                    if (res.data.status == 404) {
                        toast.show(res.data.message, {
                            type: 'danger'
                        })

                    } else {
                        toast.show(res.data.message, {
                            type: 'success'
                        });
                        storeData('user', res.data.data);
                        navigation.replace('MainApp');

                    }


                });
        }
    };




    useEffect(() => {


        axios.post(apiURL + 'company').then(res => {
            setComp(res.data.data);
        })
    }, []);
    const [sama, setSama] = useState(true)

    const [usiaBayi, setUsiaBayi] = useState(0);

    
    // Fungsi untuk menghandle perubahan tanggal
    const handleTanggalLahirChange = (selectedDate) => {
        // Set tanggal lahir di state
        setKirim({ ...kirim, tanggal_lahir: selectedDate });

        // Hitung usia bayi berdasarkan tanggal yang dipilih
        const today = moment();
        const birthDate = moment(selectedDate);
        const usia = today.diff(birthDate, 'years');

        // Set usia bayi setelah tanggal dipilih
        setUsiaBayi(usia);
    };


    return (
        <SafeAreaView style={{
            flex: 1,
            width:'100%',
            height:'100%',
            backgroundColor:colors.white
        }}>
            {/* <MyHeader title="Daftar Akun" /> */}

            <ImageBackground source={require("../../assets/bgsplash.png")} style={{
                flex:1,
                width:"100%",
                height:'100%',

            }}>


            <ScrollView showsVerticalScrollIndicator={false}>

           

                <View style={{
                  padding:20,

                
                }}>

                {/* Nama lengkap siswa */}
                <MyInput 
                label="Nama Lengkap Siswa" 
                placeholder="Isi Nama Lengkap Siswa"
                value={kirim.nama_lengkap}
                onChangeText={(x) => setKirim({...kirim, nama_lengkap: x})}
                />
                <MyGap jarak={10}/>
                <MyCalendar 
                label="Tanggal Lahir"
                value={kirim.tanggal_lahir || new Date()}
                onDateChange={handleDateChange}
                
                />
                <MyGap jarak={10}/>
                <MyPicker label="Jenis Kelamin" data={[
                    {label: 'Pilih Jenis Kelamin'},
                    {label: 'Laki-laki', value: 'laki=laki'},
                    {label: 'Perempuan', value: 'perempuan'},
                    
                ]} value={kirim.jenis_kelamin}
                    onChangeText={(x) => setKirim({...kirim, jenis_kelamin: x})}
                />
                <MyGap jarak={10}/>
                <MyInput

                label="Alamat Siswa" 
                placeholder="Isi Alamat Siswa"
                value={kirim.alamat}
                onChangeText={(x) => setKirim({...kirim, alamat: x})}
                />
                <MyGap jarak={10}/>
                <MyInput
                label="Asal Sekolah Siswa" 
                placeholder="Isi Asal Sekolah Siswa"
                value={kirim.asal_sekolah}
                onChangeText={(x) => setKirim({...kirim, asal_sekolah: x})}
            
                 />
                <MyGap jarak={10}/>
                <MyInput

                label="Nomor Telepon SIswa"
                placeholder="Isi Nomor Telepon Siswa"
                value={kirim.nomor_telepon}
                onChangeText={(x) => setKirim({...kirim, nomor_telepon: x})}
                keyboardType='numeric'
                />
                <MyGap jarak={10}/>
                <MyInput 
                label="Username" 
                placeholder="Isi Username"
                value={kirim.username}
                onChangeText={(x) => setKirim({...kirim, username: x})}
                />
                <MyGap jarak={10}/>
                <MyInput 
                label="Buat Password" 
                placeholder="Isi Buat Password"
                value={kirim.password}
                onChangeText={(x) => setKirim({...kirim, password: x})}
                secureTextEntry={true}

                />
                <MyGap jarak={10}/>
                <MyInput 
                label="Konfirmasi Password" 
                placeholder="Isi Konfirmasi Password"
                value={kirim.repassword}
                onChangeText={(x) => setKirim({...kirim, repassword: x})}
                secureTextEntry={true}

                />
                
                
                {/* Button register */}
            <MyGap jarak={10}/>
            <MyButton title="Register"/>

            {/* Button back */}
            <MyGap jarak={10}/>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
              <View style={{padding:10}}>
                  <Text style={{
                    fontFamily:fonts.primary[500],
                    textAlign:"center",
                    color:colors.white,
                    fontSize:13
                    
                  }}><Text style={{fontWeight:"bold"}}>Siswa</Text> sudah memiliki akun?  Silakan <Text style={{
                    fontWeight:'bold'
                  }}>login</Text></Text>
              </View>
            </TouchableWithoutFeedback>
                </View>


            </ScrollView>
            </ImageBackground>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({});