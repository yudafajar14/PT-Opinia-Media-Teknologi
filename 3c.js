import React from 'react'
import { View, Text } from 'react-native'

export default function DeleteItem() {

    function hapus() {
        var bilangan;
        var data = [20, 10, 100, 30, 15, 5]
        bilangan = data.indexOf(30);

        if (bilangan > -1) {
            data.splice(bilangan, 1);
        }
        console.log(data);

    }
    useEffect(() => {
        hapus()
    }, [])

    return (
        <View>
            <Text></Text>
        </View>
    )
}
