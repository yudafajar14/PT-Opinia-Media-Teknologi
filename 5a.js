import React from 'react'
import { View, Text } from 'react-native'

export default function AddObjectArray() {
    var buah = [
        { Nama: "JERUK", HARGA: 5000, RASA: "ASAM" },
        { Nama: "MANGGA", HARGA: 20000, RASA: "MANIS" },
        { Nama: "APEL", HARGA: 5000, RASA: "MANIS" },
        { Nama: "DURIAN", HARGA: 50000, RASA: "MANIS" },
        { Nama: "DUKU", HARGA: 10000, RASA: "ASAM" },
        { Nama: "NANAS", HARGA: 5000, RASA: "ASAM" },

    ]

    function tambahObject(nama, harga, rasa) {
        buah.push({ Nama: nama, HARGA: harga, RASA: rasa })

        const myData = [].concat(buah).sort((a, b) => a.Nama < b.Nama ? 1 : -1)

        console.log(myData);

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
