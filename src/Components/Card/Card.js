import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

export default function Card ({ title, children, ...rest }) {
    return (
      <>  
        <View style={styles.container} {...rest}>
            <Text style={styles.title}>{title}</Text>
            {children}    
        </View>
      </>
    )
}

const styles = StyleSheet.create({
    container: {      
      backgroundColor: '#d3d3d3',
      borderRadius: 10,      
      alignItems: "center",
      padding: 10,
      flexGrow: 1,
      margin: 10,
      width: 150                
    },
    title: {      
      fontSize: 18,
      paddingBottom: 10
    }
})