import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>Bus Message Generator</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#1E1E1E',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Header;