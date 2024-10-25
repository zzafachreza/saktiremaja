import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../utils'
import { MyButton, MyGap, MyHeader, MyRadio } from '../../components'
import MyRadioSecond from '../../components/MyRadioSecond';

export default function IsiScreeningLanjutan({navigation}) {
    const [answers, setAnswers] = useState({});

    // Fungsi untuk menangani pilihan
  // Fungsi untuk menangani pilihan
  const handleSelection = (questionId, value) => {
    setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: value,  // Simpan jawaban berdasarkan id soal
    }));
};

  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
     <MyHeader title="Isi Screening"/>
     <ScrollView>
        <View style={{
            padding:10
        }}>

    <View style={{
        marginBottom:20
    }}>
        <Text style={{
            fontFamily:fonts.primary[800],
            fontSize:20,
            textAlign:"center",
            color:colors.primary,

        }}>Screening Lanjutan</Text>
    </View>

<MyRadioSecond
    mainLabel="1. Saya berusaha bersikap baik kepada orang lain. Saya peduli dengan perasaan mereka."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[1]}
    onPress={(value) => handleSelection(1, value)}
/>

<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="2. Saya gelisah, saya tidak dapat diam untuk waktu lama."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[2]}
    onPress={(value) => handleSelection(2, value)}
/>

<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="3. Saya sering sakit kepala, sakit perut atau macam2 sakit lain."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[3]}
    onPress={(value) => handleSelection(3, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="4. Kalau saya memiliki mainan CD atau makanan saya biasanya berbagi dengan orang lain."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[4]}
    onPress={(value) => handleSelection(4, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="5. Saya menjadi sangat marah dan sering tidak bisa mengendalikan kemarahan saya."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[5]}
    onPress={(value) => handleSelection(5, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="6. Saya lebih suka sendirian daripada bersama dengan orang-orang yang seumur saya."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[6]}
    onPress={(value) => handleSelection(6, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="7. Saya biasanya melakukan apa yang diperintahkan oleh orang lain."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[7]}
    onPress={(value) => handleSelection(7, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="8. Saya banyak merasa cemas atau khawatir terhadap apapun."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[8]}
    onPress={(value) => handleSelection(8, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="9. Saya selalu siap menolong jika ada orang terluka, kecewa atau merasa sakit."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[9]}
    onPress={(value) => handleSelection(9, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="10. Bila sedang gelisah atau cemas badan saya sering bergerak-gerak tanpa saya sadari."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[10]}
    onPress={(value) => handleSelection(10, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="11. Saya mempunyai satu teman baik atau lebih"
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[11]}
    onPress={(value) => handleSelection(11, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="12. Saya sering bertengkar dengan orang lain. Saya dapat memaksa orang lain melakukannya apa yang saya inginkan."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[12]}
    onPress={(value) => handleSelection(12, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="13. Saya sering merasa tidak bahagia, sedih atau menangis."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[13]}
    onPress={(value) => handleSelection(13, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="14. Orang lain seumur saya pada umumnya menyukai saya."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[14]}
    onPress={(value) => handleSelection(14, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="15. Perhatian saya mudah teralihkan. Saya sulit memusatkan perhatian pada apapun."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[15]}
    onPress={(value) => handleSelection(15, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="16. Saya merasa gugup dalam situasi baru. Saya mudah kehilangan rasa percaya diri."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[16]}
    onPress={(value) => handleSelection(16, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="17. Saya bersikap baik pada anak-anak yang lebih muda dari saya"
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[17]}
    onPress={(value) => handleSelection(17, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="18. Saya sering dituduh berbohong atau berbuat curang."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[18]}
    onPress={(value) => handleSelection(18, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="19. Saya sering diganggu atau dipermainkan oleh anak-anak atau remaja lainnya"
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[19]}
    onPress={(value) => handleSelection(19, value)}
/>
<MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="20. Saya  sering menawarkan diri untuk membantu orang lain, orang tua, guru atau anak-anak."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[20]}
    onPress={(value) => handleSelection(20, value)}
/><MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="21. Sebelum melakukan sesuatu saya berpikir dahulu tentang akibatnya."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[21]}
    onPress={(value) => handleSelection(21, value)}
/><MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="22. Saya mengambil barang yang bukan milik saya dari  rumah, sekolah, atau darimana saja."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[22]}
    onPress={(value) => handleSelection(22, value)}
/><MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="23. Saya lebih mudah berteman dengan orang dewasa daripada dengan orang-orang seumur saya."
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[23]}
    onPress={(value) => handleSelection(23, value)}
/><MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="24. Banyak yang saya takuti. Saya mudah menjadi takut"
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[24]}
    onPress={(value) => handleSelection(24, value)}
/><MyGap jarak={10}/>

<MyRadioSecond
    mainLabel="25. Saya menyelesaikan pekerjaan yang sedang saya lakukan. Saya mempunyai perhatian yang baik terhadap apapun"
    options={['Tidak', 'Agak', 'Benar']}
    selectedOption={answers[25]}
    onPress={(value) => handleSelection(25, value)}
/><MyGap jarak={10}/>



<View style={{
    padding:10,
    marginBottom:20
}}>
    <MyButton title="Selesai"/>
</View>


        </View>
     </ScrollView>
    </View>
  )
}