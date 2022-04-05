import { View, Text, StyleSheet, Pressable, Switch } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-element-textinput';
import commonStyle from '../../commonStyle';
import { Picker } from '@react-native-picker/picker';

const Type = ({ route, navigation }) => {
    const [directPage, setDirectPage] = useState('');
    const [birim, setBirim] = useState('');
    const { medicineName } = route.params;

    useEffect(() => {
        if (directPage !== '') {
            navigation.navigate(directPage, {
                medicineName: medicineName,
                birim: birim,
            });
        }
    }, [directPage]);

    const forwardPage = () => {
        setDirectPage('NumberOfTimes');
    };

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>{medicineName}</Text>
            </View>
            <View style={styles.divider}>

            </View>
            <View>
                <Picker
                    selectedValue={birim}
                    onValueChange={(itemValue, itemIndex) =>
                        setBirim(itemValue)
                    }>
                    <Picker.Item label="Mililitre" value="Mililitre" />
                    <Picker.Item label="Damla" value="Damla" />
                    <Picker.Item label="Kapsül" value="Kapsül" />
                    <Picker.Item label="Birim" value="Birim" />
                    <Picker.Item label="Paket" value="Paket" />
                    <Picker.Item label="Ampul" value="Ampul" />
                    <Picker.Item label="Nefes" value="Nefes" />
                    <Picker.Item label="Sprey" value="Sprey" />
                    <Picker.Item label="Çay Kaşığı" value="Çay Kaşığı" />
                    <Picker.Item label="Çorba Kaşığı" value="Çorba Kaşığı" />
                    <Picker.Item label="Hap" value="Hap" />
                </Picker>
            </View>
            <Pressable style={styles.medicine_button} onPress={forwardPage}>
                <Text style={styles.medicine_button_text}>Next</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: 'black',
    },
    header: {
        display: 'flex',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 30,
        borderStyle: 'solid',
    },
    headerText: {
        fontSize: 30,
        color: 'black',
    },
    medicine_button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 1,
        borderRadius: 10,
        backgroundColor: '#24263a',
    },
    medicine_button_text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});
export default Type;