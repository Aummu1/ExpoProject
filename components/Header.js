import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Bluetooth</Text>
                <View style={styles.containericon}>
                    <Feather name="moon" size={24} color="white" />
                    <MaterialIcons name="logout" size={24} color="white" /></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'black',
        height: 80,
    },
    containericon:{
        flexDirection: 'row', // จัดวางไอคอนในแนวนอน
        justifyContent: 'space-between', // จัดระยะห่างระหว่างไอคอน
        alignItems: 'center', // จัดตรงกลางในแนวตั้ง
        gap: 20, // เพิ่มระยะห่างระหว่างไอคอน (ใช้ได้กับ RN เวอร์ชันใหม่)
    },
    header: {
        // height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color: 'white',
        fontSize: 22,
        marginRight: 10,
    },
});
