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
  ScrollView,
  FlatList
} from 'react-native';
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth, Color, POSTDataByTable } from '../../utils';
import { MYAPP, apiURL, api_token, getData, storeData } from '../../utils/localStorage';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import moment from 'moment';
import { useToast } from 'react-native-toast-notifications';
import MyLoading from '../../components/MyLoading';

import { Icon } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useIsFocused } from '@react-navigation/native';


const MyMenu = ({ onPress, img, label, backgroundColor, desc }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth / 4,
        height: windowWidth / 4,
      }}>
        <View style={{
          backgroundColor: backgroundColor,
          borderRadius: 12,
          width: windowWidth / 4,
          height: windowWidth / 4,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center'

        }}>
          <Image source={img} style={{
            width: windowWidth / 5, height: windowWidth / 5,
          }} />
        </View>
        <Text style={{
          marginTop: 10,
          color: colors.black,
          ...fonts.caption,
          textAlign: 'center',
          maxWidth: '85%'
        }}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default function Home({ navigation, route }) {
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  const __getUser = () => {
    getData('user').then(u => {
      setUser(u)
      if (u.level == 'Petugas UKS') {
        POSTDataByTable('hasil_uks', {
          fid_sekolah: u.fid_sekolah
        }).then(res => {
          console.log(res.data);
          setData(res.data)
        })
      }
    })
  }

  const filterData = (key) => {
    getData('user').then(u => {
      setUser(u)
      if (u.level == 'Petugas UKS') {
        POSTDataByTable('hasil_uks', {
          fid_sekolah: u.fid_sekolah,
          key: key
        }).then(res => {
          console.log(res.data);
          setData(res.data)
        })
      }
    })

  }

  const isFocus = useIsFocused();
  useEffect(() => {
    if (isFocus) {
      __getUser();
    }
  }, [isFocus])
  return (
    <ImageBackground source={require('../../assets/bghome.png')} style={{
      flex: 1,
      backgroundColor: colors.white,
      width: "100%",
      height: "100%"
    }}>





      <View style={{
        marginHorizontal: 10,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 50
      }}>
        <View>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 20,
            color: colors.white,

          }}>Hi, {user.nama_lengkap}</Text>

          <Text style={{
            fontFamily: fonts.secondary[700],
            fontSize: 20,
            color: colors.white,

          }}>SAKTI REMAJA</Text>
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: 14,
            color: colors.white,

          }}>{user.nama_sekolah}</Text>
        </View>

        <View style={{
          alignItems: "center"
        }}>
          <Image style={{
            width: 61,
            height: 54,

          }} source={require('../../assets/logohome.png')} />
        </View>

      </View>


      {user.level == 'Siswa' &&

        <ScrollView>
          {/* slider */}
          <View style={{
            padding: 10,

            marginTop: -0,
            alignItems: 'center'
          }}>

            <Image style={{
              width: 320,
              height: 213,
            }} source={require('../../assets/dummy_slider.png')} />

          </View>
          {/* end slider */}

          {/* main menu */}
          <View style={{
            margin: 10,
            padding: 0,
          }}>

            <View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Screening')}>
                <View style={{
                  flex: 1,
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: colors.primary

                }}>
                  <View>
                    <Text style={{
                      fontFamily: fonts.primary[700],
                      fontSize: 35,
                      color: colors.primary,
                      top: -2

                    }}>Screening</Text>
                  </View>

                  <View>
                    <Image style={{
                      width: 74,
                      height: 74,
                    }} source={require('../../assets/screening_logo.png')} />
                  </View>

                </View>
              </TouchableWithoutFeedback>
            </View>

            <MyGap jarak={20} />

            <View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Konsultasi')}>
                <View style={{
                  flex: 1,
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: colors.primary

                }}>
                  <View>
                    <Text style={{
                      fontFamily: fonts.primary[700],
                      fontSize: 35,
                      color: colors.primary,
                      top: -2

                    }}>Konsultasi</Text>
                  </View>

                  <View>
                    <Image style={{
                      width: 74,
                      height: 74,
                    }} source={require('../../assets/konsultasi_Logo.png')} />
                  </View>

                </View>
              </TouchableWithoutFeedback>
            </View>

          </View>

        </ScrollView>

      }

      {user.level == 'Petugas UKS' &&
        <View style={{
          flex: 1,
          padding: 16,
        }}>
          <View style={{
            marginBottom: 10,
            marginHorizontal: 8,
          }}>
            <MyInput onEndEditing={x => filterData(x.nativeEvent.text)} returnKeyType='search' placeholder="Cari data siswa . . ." iconname="search" />
          </View>
          <FlatList data={data} renderItem={({ item, index }) => {
            return (

              <TouchableWithoutFeedback onPress={() => {
                navigation.navigate('ScreeningDetail2', item)

              }}>
                <View style={{
                  backgroundColor: colors.white,
                  flex: 1,
                  borderWidth: 1,
                  borderColor: colors.primary,
                  padding: 10,
                  position: 'relative',
                  borderRadius: 10,
                  // margin: 10,
                  marginHorizontal: 5,
                  marginVertical: 10,
                  overflow: 'hidden'
                }}>
                  <View style={{
                    flexDirection: 'row'
                  }}>
                    <Text style={{
                      flex: 0.5,
                      ...fonts.body3,
                      color: colors.primary
                    }}>Nama Lengkap</Text>
                    <Text style={{
                      flex: 0.05,
                      ...fonts.body3,
                      color: colors.primary
                    }}>:</Text>
                    <Text style={{
                      flex: 1,
                      ...fonts.body3,
                      color: colors.primary
                    }}>{item.nama_lengkap}</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row'
                  }}>
                    <Text style={{
                      flex: 0.5,
                      ...fonts.body3,
                      color: colors.primary
                    }}>Umur</Text>
                    <Text style={{
                      flex: 0.05,
                      ...fonts.body3,
                      color: colors.primary
                    }}>:</Text>
                    <Text style={{
                      flex: 1,
                      ...fonts.body3,
                      color: colors.primary
                    }}>{moment().diff(item.tanggal_lahir, 'year')} Tahun</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row'
                  }}>
                    <Text style={{
                      flex: 0.5,
                      ...fonts.body3,
                      color: colors.primary
                    }}>Jenis Kelamin</Text>
                    <Text style={{
                      flex: 0.05,
                      ...fonts.body3,
                      color: colors.primary
                    }}>:</Text>
                    <Text style={{
                      flex: 1,
                      ...fonts.body3,
                      color: colors.primary
                    }}>{item.jenis_kelamin}</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row'
                  }}>
                    <Text style={{
                      flex: 0.5,
                      ...fonts.body3,
                      color: colors.primary
                    }}>Nomor Telepon</Text>
                    <Text style={{
                      flex: 0.05,
                      ...fonts.body3,
                      color: colors.primary
                    }}>:</Text>
                    <Text style={{
                      flex: 1,
                      ...fonts.body3,
                      color: colors.primary
                    }}>{item.telepon}</Text>
                  </View>
                  <View style={{
                    paddingBottom: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.blueGray[300],
                    flexDirection: 'row'
                  }}>
                    <Text style={{
                      flex: 0.5,
                      ...fonts.body3,
                      color: colors.primary
                    }}>Alamat</Text>
                    <Text style={{
                      flex: 0.05,
                      ...fonts.body3,
                      color: colors.primary
                    }}>:</Text>
                    <Text style={{
                      flex: 1,
                      ...fonts.body3,
                      color: colors.primary
                    }}>{item.alamat}</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}>
                    <Text style={{
                      flex: 1,
                      ...fonts.body3,
                      color: item.hasil == 'NORMAL' ? colors.success : colors.danger
                    }}>
                      {item.hasil == 'NORMAL' ? 'Selamat kamu tidak mengalami masalah psikologis dan emosional, yuk pelajari cara agar kamu tetap sehat dan jauh dari masalah psikososial.' : 'Kamu mengalami gejala gangguan mental emosional segera menghubungi petugas untuk mendapatkan bantuan'}
                    </Text>
                    <Image
                      source={item.hasil == 'NORMAL' ? require('../../assets/done_icon.png') : require('../../assets/warning_red.png')}
                      style={{
                        width: windowWidth / 8,
                        height: windowWidth / 8,
                      }}
                    />
                  </View>

                  <View style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}>
                    <Text style={{
                      flex: 1,
                      ...fonts.body3,
                      color: colors.primary,
                    }}>
                      {moment(item.tanggal).format('DD MMMM YYYY')}
                    </Text>
                    <Icon type='ionicon' name='search' color={colors.primary} />
                  </View>

                </View>
              </TouchableWithoutFeedback>
            )
          }} />

        </View>

      }



    </ImageBackground>
  )
}

const styles = StyleSheet.create({})