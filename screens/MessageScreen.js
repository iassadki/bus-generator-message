import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, Button } from 'react-native';
import MessageGenerated from '../components/ui/MessageGenerated';

export default function MessageScreen({ navigation }) {

    const [busInfo, setBusInfo] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <MessageGenerated
                    busNumber={busInfo ? busInfo.busNumber : "Loading..."}
                    destination={busInfo ? busInfo.destination : "Loading..."}
                    departureTime={busInfo ? busInfo.departureTime : "Loading..."}
                    arrivalTime={busInfo ? busInfo.arrivalTime : "Loading..."}
                    // onPress={() => navigation.navigate('TicketScreen')}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0B0B',
        padding: 10,
    },
    pageTitle: {
        marginTop: 40,
        marginLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'white',
    },
});