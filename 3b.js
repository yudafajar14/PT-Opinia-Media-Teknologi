import React from 'react'
import { View, Text } from 'react-native'

export default function AddItem() {

    function tambah(data) {

        const data = [20, 10, 100, 30, 15, 5]
        data.push(data)
        // data.sort((a, b) => (a - b))
        // data.sort((a, b) => (b - a))
        console.log(data);
    }
    useEffect(() => {
        tambah(180)

    }, [])
    return (
        <View>
            <Text></Text>
        </View>
    )
}
