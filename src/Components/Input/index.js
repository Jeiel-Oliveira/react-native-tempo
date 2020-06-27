import React from 'react'

import { TextInput, StyleSheet } from 'react-native'

export default function Input ({ ...rest }) {

    return (
        <TextInput {...rest} style={styles.input} />
    )
}

const styles = StyleSheet.create({
    input: {
        flexGrow: 1,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})