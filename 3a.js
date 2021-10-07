import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'

export default function Urutan() {
  



    function Urut(jenis) {
    const data = [20, 10, 100, 30, 15, 5]
        if(jenis=="ASC"){
            data.sort((a, b) => (a - b))
        }else{
            data.sort((a, b) => (b - a))
        }
               console.log(data);

        }

    useEffect(() => {
        Urut("ASC");
        
    }, [])

    return (
      <View>
        <Text>Hello World</Text>
      </View>
    )
}
