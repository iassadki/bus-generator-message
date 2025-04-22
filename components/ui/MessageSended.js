import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageSended = () => {

    const data = {
        transportType: "bus",
        busNumber: "58",
        destination: "Gare du Nord",
        departureTime: "14:30",
        arrivalTime: "15:30",
    };

    return (
        <View style={styles.ticketContainer}>
            {/* Section titre et prix */}
            <View style={styles.headerSection}>
                <Text style={styles.title}>RATP - Ticket SMS {data.transportType} {data.busNumber}</Text>
                <Text style={styles.price}>2.50 euros TTC</Text>
            </View>

            {/* Section informations de trajet */}
            <View style={styles.infoSection}>
                <Text style={styles.infoText}>1 trajet sans corresp.</Text>
                <Text style={styles.infoText}>le 18.04.25 de 17:03 à 18:03</Text>
            </View>

            {/* Section instruction */}
            <View style={styles.instructionSection}>
                <Text style={styles.instructionText}>A PRESENTER AU CONDUCTEUR</Text>
            </View>

            {/* Section code */}
            <View style={styles.codeSection}>
                <Text style={styles.codeText}>60'49'23'35'45'22</Text>
            </View>

            {/* Section URL */}
            <View style={styles.urlSection}>
                <Text style={styles.urlText}>tab-sms.fr</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ticketContainer: {
        width: 280,
        backgroundColor: '#00843D', // Couleur verte RATP
        marginTop: 20,
        marginLeft: 15,
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    headerSection: {
        marginBottom: 15,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        color: 'white',
        fontSize: 16,
        marginTop: 3,
    },
    infoSection: {
        marginBottom: 15,
    },
    infoText: {
        color: 'white',
        fontSize: 14,
        marginBottom: 3,
    },
    instructionSection: {
        marginBottom: 15,
    },
    instructionText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    codeSection: {
        marginBottom: 15,
    },
    codeText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    urlSection: {
        marginTop: 5,
    },
    urlText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    }
});

export default MessageSended;