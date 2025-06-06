import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';
import fields from '../data/fields.json'

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
    const { bus } = fields;

    // Prendre un paramètre en entrée, sortir une variable en sortie
    // Mixer ensuite les deux variables 
    // Les attribuer aux fonctions ensuite, avec leur corps à la suite

    const copyToClipboard = () => {
        const textToCopy = `${bus.title} ${data.transportType} ${data.busNumber}
${bus.price}

${bus.routeType}
Le ${data.date} de ${data.departureTime} à ${data.arrivalTime}

${bus.todo}

${data.generatedID}

${bus.url}`;

        Clipboard.setStringAsync(textToCopy);
    }

    const refreshTicket = () => {
        setGeneratedID(generateRandomNumbers());
    };

    const changeBusNumber = (num) => {
        // Cette fonction changera le bus sélectionné
        setBusNumber(num);
    };

    const getMessage = () => {
        var messageSended = `BUS${busNumber || "57"}`; // Utilise le state busNumber s'il existe, sinon "57"
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
        <View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
                    <Text style={styles.copyButtonText}>Copier le ticket</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={refreshTicket} style={styles.refreshButton}>
                    <Text style={styles.copyButtonText}>Actualiser</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => changeBusNumber("57")} style={styles.busButton}>
                    <Text style={styles.copyButtonText}>Bus 57</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => changeBusNumber("323")} style={styles.busButton}>
                    <Text style={styles.copyButtonText}>Bus 323</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.ticketContainer}>
                {/* Section titre et prix */}
                <View style={styles.headerSection}>
                    <Text style={styles.title}>{bus.title} {data.transportType} {data.busNumber}</Text>
                    <Text style={styles.price}>{bus.price}</Text>
                </View>

                {/* Section informations de trajet */}
                <View style={styles.infoSection}>
                    <Text style={styles.infoText}>{bus.routeType}</Text>
                    <Text style={styles.infoText}>Le {data.date} de {data.departureTime} à {data.arrivalTime}</Text>
                </View>

                {/* Section instruction */}
                <View style={styles.instructionSection}>
                    <Text style={styles.instructionText}>{bus.todo}</Text>
                </View>

                {/* Section code */}
                <View style={styles.codeSection}>
                    <Text style={styles.codeText}>{data.generatedID}</Text>
                </View>

                {/* Section URL */}
                <View style={styles.urlSection}>
                    <Text style={styles.urlText}>{bus.url}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', // Assure l'alignement vertical
        gap: 10,
        marginBottom: 10,
    },
    copyButton: {
        backgroundColor: '#005026',
        padding: 10,
        borderRadius: 8,
        // Supprimez alignSelf: 'center' et marginBottom: 10
    },
    refreshButton: {
        backgroundColor: '#005026',
        padding: 10,
        borderRadius: 8,
    },
    busButton: {
        backgroundColor: '#005026',
        padding: 10,
        borderRadius: 8,
    },
    copyButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center', // Assure que le texte est centré
    },
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