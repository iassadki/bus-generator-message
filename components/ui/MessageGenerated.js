import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

// const generateRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

const MessageGenerated = () => {

    const [transportType, setTransportType] = useState('');
    const [busNumber, setBusNumber] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [generatedID, setGeneratedID] = useState('');
    const now = new Date(); // Variable a manipuler pour les dates

    // Prendre un paramètre en entrée, sortir une variable en sortie
    // Mixer ensuite les deux variables 
    // Les attribuer aux fonctions ensuite, avec leur corps à la suite

    const getMessage = () => {
        var messageSended = "BUS57"; // Chaine a récupérer
        return messageSended;
    }

    const getTransportType = () => {
        var currentTransportType;
        var messageSended = getMessage();

        if (messageSended.includes("BUS")) {
            var transportType = messageSended.substring(0, 3);
            // var busNumber = messageSended.substring(3);
            currentTransportType = transportType;

        } else {
            var transportType = messageSended.substring(0, 3);
            // var busNumber = messageSended.substring(3);
            currentTransportType = transportType;
        }

        return currentTransportType;
    }

    const getBus = () => {
        var currentBus;
        var messageSended = getMessage();

        if (messageSended.includes("BUS")) {
            // var transportType = messageSended.substring(0, 3);
            var busNumber = messageSended.substring(3);
            currentBus = busNumber;

        } else {
            // var transportType = messageSended.substring(0, 3);
            var busNumber = messageSended.substring(3);
            currentBus = busNumber;
        }

        return currentBus;
    }

    const generateRandomNumbers = () => {
        let code = '';

        // Générer 6 paires de chiffres
        for (let i = 0; i < 6; i++) {
            // Générer une paire de chiffres entre 0 et 99
            const pair = Math.floor(Math.random() * 100).toString().padStart(2, '0');

            // Ajouter la paire au code
            code += pair;

            // Ajouter une apostrophe après chaque paire sauf la dernière
            if (i < 5) {
                code += "'";
            }
        }

        return code;
    };

    const getCurrentDate = () => {
        const theDate = new Date();
        const day = theDate.getDate().toString().padStart(2, '0');
        const month = (theDate.getMonth() + 1).toString().padStart(2, '0');
        const result = `${day}.${month}.${theDate.getFullYear()}`;
        return result;
    }

    const getCurrentTime = () => {
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const currentTime = `${hours}:${minutes}`;
        return currentTime;
    }

    const getArrival = () => {
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var currentTime = `${++hours}:${minutes}`;
        return currentTime
    }

    const data = {
        transportType: getTransportType().toLowerCase(),
        busNumber: getBus(),
        date: getCurrentDate(),
        departureTime: getCurrentTime(),
        arrivalTime: getArrival(),
        generatedID: generateRandomNumbers(),
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
                <Text style={styles.infoText}>Le {data.date} de {data.departureTime} à {data.arrivalTime}</Text>
            </View>

            {/* Section instruction */}
            <View style={styles.instructionSection}>
                <Text style={styles.instructionText}>A PRESENTER AU CONDUCTEUR</Text>
            </View>

            {/* Section code */}
            <View style={styles.codeSection}>
                <Text style={styles.codeText}>{data.generatedID}</Text>
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
        backgroundColor: '#00843D',
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
        fontSize: 16,
        marginBottom: 3,
    },
    instructionSection: {
        marginBottom: 15,
    },
    instructionText: {
        color: 'white',
        fontSize: 16,
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
        fontSize: 16,
        textAlign: 'left',
    }
});

export default MessageGenerated;