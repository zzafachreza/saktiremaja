import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils'
import { MyButton, MyGap, MyHeader, MyRadio } from '../../components'

export default function IsiScreening({navigation}) {
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

<MyRadio
    mainLabel="1. Apakah Anda sering merasa sakit kepala?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[1]}
    onPress={(value) => handleSelection(1, value)}
/>

<MyGap jarak={10}/>

<MyRadio
    mainLabel="2. Apakah Anda kehilangan nafsu makan?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[2]}
    onPress={(value) => handleSelection(2, value)}
/>

<MyGap jarak={10}/>

<MyRadio
    mainLabel="3. Apakah tidur Anda tidak nyenyak?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[3]}
    onPress={(value) => handleSelection(3, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="4. Apakah Anda mudah takut?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[4]}
    onPress={(value) => handleSelection(4, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="5.Apakah Anda mudah merasa cemas, tegang atau khawatir?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[5]}
    onPress={(value) => handleSelection(5, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="6. Apakah tangan Anda bergetar?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[6]}
    onPress={(value) => handleSelection(6, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="7. Apakah Anda mengalami gangguan pencernaan?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[7]}
    onPress={(value) => handleSelection(7, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="8. Apakah Anda merasa sulit berpikir jernih?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[8]}
    onPress={(value) => handleSelection(8, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="9. Apakah Anda tidak bahagia?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[9]}
    onPress={(value) => handleSelection(9, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="10. Apakah Anda lebih sering menangis?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[10]}
    onPress={(value) => handleSelection(10, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="11. Apakah Anda lebih sering menangis?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[11]}
    onPress={(value) => handleSelection(11, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="12. Apakah Anda merasa kesulitan untuk mengambil keputusan?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[12]}
    onPress={(value) => handleSelection(12, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="13. Apakah aktivitas tugas sehari-hari Anda terbengkalai?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[13]}
    onPress={(value) => handleSelection(13, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="14. Apakah Anda merasa tidak mampu berperan dalam kehidupan ini?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[14]}
    onPress={(value) => handleSelection(14, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="15. Apakah Anda kehilangan minat terhadap banyak hal?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[15]}
    onPress={(value) => handleSelection(15, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="16. Apakah Anda merasa tidak berharga?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[16]}
    onPress={(value) => handleSelection(16, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="17. Apakah Anda mempunyai pikiran untuk mengakhiri hidup Anda?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[17]}
    onPress={(value) => handleSelection(17, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="18. Apakah Anda merasa lelah sepanjang waktu?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[18]}
    onPress={(value) => handleSelection(18, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="19. Apakah Anda merasa tidak enak di perut?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[19]}
    onPress={(value) => handleSelection(19, value)}
/>
<MyGap jarak={10}/>

<MyRadio
    mainLabel="20. Apakah Anda mudah lelah?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[20]}
    onPress={(value) => handleSelection(20, value)}
/><MyGap jarak={10}/>

<MyRadio
    mainLabel="21. Apakah Anda lebih sering menggunakan alkohol atau zat terlarang?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[21]}
    onPress={(value) => handleSelection(21, value)}
/><MyGap jarak={10}/>

<MyRadio
    mainLabel="22. Apakah Anda merasa ada seseorang yang bermaksud mencelakai Anda?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[22]}
    onPress={(value) => handleSelection(22, value)}
/><MyGap jarak={10}/>

<MyRadio
    mainLabel="23. Apakah Anda merasa ada sesuatu yang mengganggu pikiran Anda?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[23]}
    onPress={(value) => handleSelection(23, value)}
/><MyGap jarak={10}/>

<MyRadio
    mainLabel="24. Apakah Anda mendengar suara-suara yang tidak didengar oleh orang lain?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[24]}
    onPress={(value) => handleSelection(24, value)}
/><MyGap jarak={10}/>

<MyRadio
    mainLabel="25. Apakah Anda mengalami mimpi tentang musibah atau seakan mengalami kembali?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[25]}
    onPress={(value) => handleSelection(25, value)}
/><MyGap jarak={10}/>

<MyRadio
    mainLabel="26. Apakah Anda menghindari berbagai kegiatan, tempat, orang atau pikiran yang mengingatkan akan musibah tersebut?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[26]}
    onPress={(value) => handleSelection(26, value)}
/><MyGap jarak={10}/>

<MyRadio
    mainLabel="27. Apakah Anda kurang tertarik terhadap teman-teman atau kegiatan sehari-hari?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[27]}
    onPress={(value) => handleSelection(27, value)}
/><MyGap jarak={10}/>

<MyRadio
    mainLabel="28. Apakah Anda merasa sangat sedih bila berada dalam situasi yang mengingatkan akan musibah tersebut?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[28]}
    onPress={(value) => handleSelection(28, value)}
/><MyGap jarak={10}/>

<MyRadio
    mainLabel="29. Apakah Anda sulit menghayati atau mengeluarkan perasaan?"
    options={['Ya', 'Tidak']}  // options harus berupa array
    selectedOption={answers[29]}
    onPress={(value) => handleSelection(29, value)}
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