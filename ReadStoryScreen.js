import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ReadScreen extends React.Component {
    render() {
        return(
            <Text style={styles.text}>Read Story</Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        marginTop: 300,
        fontSize: 50
    }
})