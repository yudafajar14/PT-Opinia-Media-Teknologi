import React from 'react'
import { View, Text } from 'react-native'

export default function FilterHargaRasa() {


    function tambahObject(nama, harga, rasa) {

        buah.push({ Nama: nama, HARGA: harga, RASA: rasa })
        
        // filter harga buah kurang dari 10000 dan Rasa Manis
        const myData = [].concat(buah).sort((a, b) => a.Nama < b.Nama ? 1 : -1)

        const kondisiHargaRasa = myData.filter(item => {
            if (item.HARGA < 10000 && item.RASA == "MANIS") {
                return true;
            }
        })
        console.log(kondisiHargaRasa);
    }
    useEffect(() => {

        tambahObject("PISANG", 5000, "MANIS")

    }, [])


    return (
        <View>
            <Text></Text>
        </View>
    )
}
