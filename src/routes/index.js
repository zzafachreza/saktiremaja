import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  StatusGizi,
  Imt,
  Take,
  StatusGiziHasil,
  DataIbuHamil,
  DataPemeriksaanIbuHami,
  SubDataPemeriksaanIbuHami,
  IbuHamil,
  TrisemesterI,
  TrisemesterII1,
  TrisemesterIII1,
  TrisemesterIII2,
  TrisemesterIII3,
  IbuBersalin,
  IbuNifas,
  IbuNifasKF,
  VideoMateri,
  TanyaJawab,
  Artikel,
  Kuesioner,
  TrisemesterII2,
  InfoLayananKesehatan,
  InfoEdukasiPenyakit,
  InfoEdukasiPenyakitKanker,
  InfoEdukasiPenyakitStroke,
  InfoEdukasiPenyakitJantung,
  InfoEdukasiPenyakitGinjal,
  InfoEdukasiPenyakitDiabetes,
  InteraksiBersamaTim,
  TentangAplikasi,
  InfoEdukasiPenyakitStunting,
  PrintKainRoll,
  PrintJersey,
  CetakSample,
  CetakSampleKainRoll,
  CetakSampleHijab,
  CetakSampleJersey,
  PrintHijab,
  Riwayat,
  MulaiPage,
  Indentitas,
  HasilTekananDarah,
  SubRiwayatPemeriksaanLaboratorium,
  Gula,
  ProfilLipid,
  LainLain,
  RiwayatPemeriksaanRadiologis,
  RiwayatObat,
  EKG,
  PenilaianNyeri,
  Rekomendasi,
  KalkulatorKompos,
  Petunjuk,
  Screening,
  IsiScreening,
  IsiScreeningLanjutan,
  HasilScreening,
  Konsultasi,
  HasilScreening2,
  ScreeningDetail,
  ScreeningDetail2,



} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import { getData } from '../utils/localStorage';



const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {

  const [user, setUser] = useState({});
  useEffect(() => {
    getData('user').then(u => setUser(u))
  }, [])

  return (
    <Tab.Navigator initialRouteName='Produk' tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      {user.level == 'Petugas UKS' && <Tab.Screen name="Pedoman" component={Petunjuk} />}
      <Tab.Screen name="Account" component={Account} />

    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName=''>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HasilScreening2"
        component={HasilScreening2}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ScreeningDetail"
        component={ScreeningDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ScreeningDetail2"
        component={ScreeningDetail2}
        options={{
          headerShown: false,
        }}
      />





      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Screening"
        component={Screening}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="IsiScreening"
        component={IsiScreening}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="IsiScreeningLanjutan"
        component={IsiScreeningLanjutan}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="HasilScreening"
        component={HasilScreening}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="Konsultasi"
        component={Konsultasi}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />
















    </Stack.Navigator>
  );
}
