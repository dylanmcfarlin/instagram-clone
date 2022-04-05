import { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FooterComponent:FC = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={{color:'white'}}>Footer</Text>
            <Text style={{color:'white'}}>Footer</Text>
            <Text style={{color:'white'}}>Footer</Text>
            <Text style={{color:'white'}}>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: 'black',
        paddingBottom:60, 
        flexDirection:'row',
        justifyContent: 'space-evenly'
    }
})

export default FooterComponent;