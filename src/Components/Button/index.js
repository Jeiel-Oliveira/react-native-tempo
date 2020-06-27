import React from 'react'

import { Button, StyleSheet } from 'react-native'

export default function MyButton ({ ...rest }) {

    return (
        <Button {...rest} />
    )
}
