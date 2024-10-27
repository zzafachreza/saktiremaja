import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Linking,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { windowWidth, fonts, MyDimensi } from '../../utils/fonts';
import { getData, MYAPP, storeData, urlAPI, urlApp, urlAvatar } from '../../utils/localStorage';
import { Color, colors } from '../../utils/colors';
import { MyButton, MyGap, MyHeader } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { ScrollView } from 'react-native';

export default function ({ navigation, route }) {
    const [user, setUser] = useState({});
    const [com, setCom] = useState({});
    const isFocused = useIsFocused();
    const [wa, setWA] = useState('');
    const [open, setOpen] = useState(false);



    useEffect(() => {


        if (isFocused) {
            getData('user').then(res => {
                console.log(res)
                setOpen(true);
                setUser(res);

            });
        }




    }, [isFocused]);



    const btnKeluar = () => {
        Alert.alert(MYAPP, 'Apakah kamu yakin akan keluar ?', [
            {
                text: 'Batal',
                style: "cancel"
            },
            {
                text: 'Keluar',
                onPress: () => {
                    storeData('user', null);

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Splash' }],
                    });
                }
            }
        ])
    };

    const MyList = ({ label, value }) => {
        return (
            <View
                style={{
                    marginVertical: 2,
                    padding: 5,
                    paddingHorizontal: 10,
                    backgroundColor: Color.blueGray[50],
                    borderRadius: 5,
                }}>
                <Text
                    style={{
                        ...fonts.headline5,
                        color: colors.primary,
                    }}>
                    {label}
                </Text>
                <Text
                    style={{
                        ...fonts.body3,
                        color: Color.blueGray[900],
                    }}>
                    {value}
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>


            <MyHeader title="Akun Saya" onPress={() => navigation.goBack()} />
            {!open && <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>}
            <ScrollView showsVerticalScrollIndicator={false}>
                {open &&

                    <View style={{
                        margin: 5,
                        flex: 1,
                    }}>

                        <View style={{ padding: 10, }}>

                            <MyList label="Nama Sekolah" value={user.nama_sekolah} />
                            <MyList label="Nama Lengkap" value={user.nama_lengkap} />
                            <MyList label="Username" value={user.username} />
                            <MyList label="Telepon" value={user.telepon} />


                            {user.level == 'Siswa' && <>
                                <MyList label="Tanggal Lahir" value={moment(user.tanggal_lahir).format('dddd, DD MMMM YYYY') + ' ( ' + moment().diff(user.tanggal_lahir, 'year') + ' Tahun )'} />
                                <MyList label="Jenis Kelamin" value={user.jenis_kelamin} />
                                <MyList label="Alamat" value={user.alamat} />
                            </>}



                        </View>
                        {/* data detail */}
                    </View>

                }
                <View style={{
                    padding: 20,
                }}>
                    {user.level == 'Siswa' &&
                        <MyButton warna={colors.primary} title="Edit Profile" Icons="create-outline" iconColor={colors.white} onPress={() => navigation.navigate('AccountEdit', user)} />

                    }
                    <MyGap jarak={10} />
                    <MyButton onPress={btnKeluar} warna={colors.black} title="Log Out" Icons="log-out-outline" iconColor={colors.white} colorText={colors.white} />
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({});
