import { ActivityIndicator, FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyDimensi, POSTDataByTable, colors, fonts, getDataByTable, windowHeight, windowWidth } from '../../utils'
import { Icon } from 'react-native-elements';
import YoutubePlayer from "react-native-youtube-iframe";
import axios from 'axios';
import { apiURL, getData } from '../../utils/localStorage';
import moment from 'moment';
import { MyButton, MyHeader, MyRadio } from '../../components';
import { useToast } from 'react-native-toast-notifications';
export default function IsiScreeningLanjutan({ navigation, route }) {
    const ITEM = route.params;

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const getDataTransaksi = () => {

        getData('user').then(u => setUser(u))
        // setLoading(true);
        getDataByTable('soal_lanjutan').then(res => {
            console.log(res.data);
            setData(res.data)
        })
    }

    const toast = useToast();

    const simpan = () => {


        const UMUR = moment().diff(user.tanggal_lahir, 'year');
        console.log('umur', UMUR)


        let ARR = [null];
        data.map(i => i.nilai).map(i => {
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



        POSTDataByTable('insert_hasil', {
            ...ITEM,
            hasile_nilai: nilaiE,
            hasilc_nilai: nilaiC,
            hasilh_nilai: nilaiH,
            hasilp_nilai: nilaiP,
            hasilpr_nilai: nilaiPR,
            hasile: hasilE,
            hasilc: hasilC,
            hasilh: hasilH,
            hasilp: hasilP,
            hasilpr: hasilPR,

            soal2: data.map(i => i.nilai),

        }).then(res => {
            console.log(res.data);
            if (res.data.status == 200) {
                toast.show(res.data.message, {
                    type: 'success'
                });
                navigation.navigate('HasilScreening2', {
                    ...ITEM,
                    soal2: data.map(i => i.nilai)
                })
            }
        })





    }

    useEffect(() => {
        getDataTransaksi();
    }, []);

    const __renderItem = ({ item, index }) => {
        return (
            <View style={{
                padding: 8,
                marginVertical: 4,
            }}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        ...fonts.headline5,
                        color: colors.primary
                    }}>
                        {item.nomor}
                    </Text>
                    <View style={{
                        flex: 1,
                        paddingLeft: 10,
                    }}>
                        <Text style={{
                            ...fonts.subheadline3,
                            color: colors.primary
                        }}>
                            {item.soal}
                        </Text>
                        <View>
                            <MyRadio horizontal value={item.nilai} onPress={(x) => {
                                let tmp = [...data];
                                tmp[index].nilai = x;
                                setData(tmp)
                            }} nolabel options={['Tidak', 'Agak', 'Benar']} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }



    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>

            <MyHeader title="Isi Screening" onPress={() => navigation.goBack()} />
            {!loading &&
                <View style={{
                    flex: 1,
                }}>
                    <Text style={{
                        marginVertical: 10,
                        textAlign: 'center',
                        ...fonts.headline2,
                        color: colors.primary,
                    }}>
                        Screening Lanjutan
                    </Text>
                    <FlatList data={data} showsVerticalScrollIndicator={false} renderItem={__renderItem} />

                </View>
            }


            {loading &&
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large" color={colors.primary} />

                </View>
            }

            <View style={{
                paddingHorizontal: 16,
                paddingVertical: 10,
            }}><MyButton onPress={simpan} title="Simpan" />

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})