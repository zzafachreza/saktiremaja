import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import { MyButton, MyHeader } from '../../components'
import { Color, colors, fonts, POSTDataByTable, windowWidth } from '../../utils'
import YoutubePlayer from "react-native-youtube-iframe";
import { getData } from '../../utils/localStorage';
import moment from 'moment';
export default function HasilScreening2({ navigation, route }) {

    const ITEM = route.params;
    const dataISI = ITEM.soal2;
    const [youtube, setYoutube] = useState([]);
    const [user, setUser] = useState({});


    const UMUR = moment().diff(user.tanggal_lahir, 'year');
    console.log('umur', UMUR)


    let ARR = [null];
    dataISI.map(i => {
        ARR.push(i == 'Benar' ? 2 : i == 'Agak' ? 1 : 0)
    });

    console.log(ARR);

    let nilaiE = ARR[3] + ARR[8] + ARR[13] + ARR[16] + ARR[24];
    let nilaiC = ARR[5] + ARR[7] + ARR[12] + ARR[18] + ARR[22];
    let nilaiH = ARR[2] + ARR[10] + ARR[15] + ARR[21] + ARR[25];
    let nilaiP = ARR[6] + ARR[11] + ARR[14] + ARR[19] + ARR[23];
    let nilaiPR = ARR[1] + ARR[4] + ARR[9] + ARR[17] + ARR[20];



    let hasilE = 'test';
    let hasilC = 'test';
    let hasilH = 'test';
    let hasilP = 'test';
    let hasilPR = 'test';

    // RUMUS E
    if (UMUR >= 6 && UMUR <= 10) {

        if (nilaiE >= 0 && nilaiE <= 13) {
            hasilE = 'Normal';
        } else if (nilaiE >= 14 && nilaiE <= 16) {
            hasilE = 'Borderline';
        } else if (nilaiE >= 17 && nilaiE <= 40) {
            hasilE = 'Abnormal';
        }

        if (nilaiC >= 0 && nilaiC <= 13) {
            hasilC = 'Normal';
        } else if (nilaiC >= 14 && nilaiC <= 16) {
            hasilC = 'Borderline';
        } else if (nilaiC >= 17 && nilaiC <= 40) {
            hasilC = 'Abnormal';
        }

        if (nilaiH >= 0 && nilaiH <= 13) {
            hasilH = 'Normal';
        } else if (nilaiH >= 14 && nilaiH <= 16) {
            hasilH = 'Borderline';
        } else if (nilaiH >= 17 && nilaiH <= 40) {
            hasilH = 'Abnormal';
        }

        if (nilaiP >= 0 && nilaiP <= 13) {
            hasilP = 'Normal';
        } else if (nilaiP >= 14 && nilaiP <= 16) {
            hasilP = 'Borderline';
        } else if (nilaiP >= 17 && nilaiP <= 40) {
            hasilP = 'Abnormal';
        }


        if (nilaiPR >= 0 && nilaiPR <= 13) {
            hasilPR = 'Normal';
        } else if (nilaiPR >= 14 && nilaiPR <= 16) {
            hasilPR = 'Borderline';
        } else if (nilaiPR >= 17 && nilaiPR <= 40) {
            hasilPR = 'Abnormal';
        }

    } else if (UMUR >= 11) {

        if (nilaiE >= 0 && nilaiE <= 15) {
            hasilE = 'Normal';
        } else if (nilaiE >= 16 && nilaiE <= 19) {
            hasilE = 'Borderline';
        } else if (nilaiE >= 20 && nilaiE <= 40) {
            hasilE = 'Abnormal';
        }

        if (nilaiC >= 0 && nilaiC <= 15) {
            hasilC = 'Normal';
        } else if (nilaiC >= 16 && nilaiC <= 19) {
            hasilC = 'Borderline';
        } else if (nilaiC >= 20 && nilaiC <= 40) {
            hasilC = 'Abnormal';
        }

        if (nilaiH >= 0 && nilaiH <= 15) {
            hasilH = 'Normal';
        } else if (nilaiH >= 16 && nilaiH <= 19) {
            hasilH = 'Borderline';
        } else if (nilaiH >= 20 && nilaiH <= 40) {
            hasilH = 'Abnormal';
        }

        if (nilaiP >= 0 && nilaiP <= 15) {
            hasilP = 'Normal';
        } else if (nilaiP >= 16 && nilaiP <= 19) {
            hasilP = 'Borderline';
        } else if (nilaiP >= 20 && nilaiP <= 40) {
            hasilP = 'Abnormal';
        }


        if (nilaiPR >= 0 && nilaiPR <= 15) {
            hasilPR = 'Normal';
        } else if (nilaiPR >= 16 && nilaiPR <= 19) {
            hasilPR = 'Borderline';
        } else if (nilaiPR >= 20 && nilaiPR <= 40) {
            hasilPR = 'Abnormal';
        }

    }


    useEffect(() => {
        getData('user').then(u => setUser(u));
        POSTDataByTable('youtube', {
            fid_kategori: 2
        }).then(res => {
            console.log(res.data);
            setYoutube(res.data);
        })
    }, []);
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader title="Hasil Screening" />

            <ScrollView>
                <View style={{
                    padding: 20,

                }}>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../../assets/warning_red.png')} style={{
                            width: windowWidth / 2,
                            height: windowWidth / 2,
                            marginBottom: 20
                        }} />
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            textAlign: "center",
                            color: colors.danger,
                            marginBottom: 20,
                        }}>Kamu mengalami gejala gangguan mental emosional segera menghubungi petugas untuk mendapatkan bantuan.</Text>
                    </View>

                    <Text style={{
                        ...fonts.headline3,
                        color: colors.primary,
                        textAlign: 'center',
                        marginBottom: 10,
                    }}>HASIL SCREENING LANJUTAN</Text>

                    <Text style={{
                        ...fonts.headline3,
                        color: colors.primary,
                        textAlign: 'center',
                        marginBottom: 10,
                    }}>Usia {UMUR} Tahun</Text>

                    <View style={{
                        borderRightWidth: 1,
                        borderRightColor: Color.blueGray[300],
                        borderLeftWidth: 1,
                        borderLeftColor: Color.blueGray[300],
                        marginBottom: 20,
                    }}>


                        <View style={{
                            padding: 10,
                            backgroundColor: colors.primary
                        }}>
                            <Text style={{
                                ...fonts.headline3,
                                color: colors.white,
                                textAlign: 'center'
                            }}>SKOR KESULITAN</Text>
                        </View>
                        <View style={{
                            padding: 10,
                            backgroundColor: colors.white,
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: Color.blueGray[300]
                        }}>
                            <Text style={{
                                flex: 1,
                                ...fonts.headline4,
                                color: colors.black,
                            }}>Gejala Emosional (E)</Text>
                            <Text style={{
                                ...fonts.headline4,
                                color: colors.primary,
                            }}>{hasilE}</Text>
                        </View>
                        <View style={{
                            padding: 10,
                            backgroundColor: colors.white,
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: Color.blueGray[300]
                        }}>
                            <Text style={{
                                flex: 1,
                                ...fonts.headline4,
                                color: colors.black,
                            }}>Masalah Perilaku (C)</Text>
                            <Text style={{
                                ...fonts.headline4,
                                color: colors.primary,
                            }}>{hasilC}</Text>
                        </View>
                        <View style={{
                            padding: 10,
                            backgroundColor: colors.white,
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: Color.blueGray[300]
                        }}>
                            <Text style={{
                                flex: 1,
                                ...fonts.headline4,
                                color: colors.black,
                            }}>Hiperaktivitas (H)</Text>
                            <Text style={{
                                ...fonts.headline4,
                                color: colors.primary,
                            }}>{hasilH}</Text>
                        </View>
                        <View style={{
                            padding: 10,
                            backgroundColor: colors.white,
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: Color.blueGray[300]
                        }}>
                            <Text style={{
                                flex: 1,
                                ...fonts.headline4,
                                color: colors.black,
                            }}>Masalah Teman Sebaya (P)</Text>
                            <Text style={{
                                ...fonts.headline4,
                                color: colors.primary,
                            }}>{hasilP}</Text>
                        </View>
                        <View style={{
                            padding: 10,
                            backgroundColor: colors.primary
                        }}>
                            <Text style={{
                                ...fonts.headline3,
                                color: colors.white,
                                textAlign: 'center'
                            }}>SKOR KEKUATAN</Text>
                        </View>
                        <View style={{
                            padding: 10,
                            backgroundColor: colors.white,
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: Color.blueGray[300]
                        }}>
                            <Text style={{
                                flex: 1,
                                ...fonts.headline4,
                                color: colors.black,
                            }}>Perilaku Prososial (Pr)</Text>
                            <Text style={{
                                ...fonts.headline4,
                                color: colors.primary,
                            }}>{hasilPR}</Text>
                        </View>
                    </View>


                    {/* Video */}
                    <View>
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            textAlign: "center",
                            marginBottom: 10,
                            color: colors.primary,
                        }}>Silakan tonton video di bawah ini :</Text>
                    </View>

                    <FlatList data={youtube} renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                marginVertical: 8,
                            }}>
                                <YoutubePlayer
                                    height={windowWidth / 2}
                                    videoId={item.youtube}
                                />
                            </View>
                        )
                    }} />
                    <View style={{
                        paddingTop: 20
                    }}>
                        <MyButton onPress={() => navigation.navigate('Screening')} title="Selesai" />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}