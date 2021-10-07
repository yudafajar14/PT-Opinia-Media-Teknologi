import React from 'react'
import { View, Text } from 'react-native'

export default function FilterArrays() {

    function tambahObject(nama, harga, rasa) {

        buah.push({ Nama: nama, HARGA: harga, RASA: rasa })
        // filter object item buah terdapat huruf k
        const myData = [].concat(buah).sort((a, b) => a.Nama < b.Nama ? 1 : -1)

        var text = "k";
        const newData = myData.filter(item => {
            const itemData = `${item.Nama.toUpperCase()}  `;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        console.log(newData);

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
