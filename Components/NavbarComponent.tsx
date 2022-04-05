import { FC, useEffect } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, Platform } from 'react-native';

const NavbarComponent:FC = () => {

    useEffect(() => {
        console.log(Platform.OS);
        console.log(Dimensions.get('window').height);
        console.log(Dimensions.get('window').width);
    })

    return (
        <View style={styles.headerContainer}>
            {/* <Image
                style={styles.logoTxt}
                source={{
                    uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AInstagram_logo.svg&psig=AOvVaw3n1_sNJim02avlBop7YkxZ&ust=1649267055010000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNDZptq8_fYCFQAAAAAdAAAAABAY',
                  }}
            /> */}
            <View style={{paddingRight: 100 }}>
                <Text style={[styles.whiteTxt, styles.headerTxt]}>Instagram</Text>
            </View>
            <View style={[{ paddingRight: 15 }, styles.centerMain]}>
                <Text style={[styles.whiteTxt, styles.headerTxt2]}>Notifications</Text>
            </View>
             <View style={styles.centerMain}>
                <Text style={[styles.whiteTxt, styles.headerTxt2]}>Profile</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 50,
        backgroundColor: 'black',
        flexDirection: 'row'
    }, 
    whiteTxt: {
        color: 'white'
    }, 
    headerTxt: {
        fontSize: 30
    },
    logoTxt: {
        width: 100,
        height: 100,
        // backgroundColor: 'white'
    },
    centerMain:{
        justifyContent: 'center'
    }, 
    headerTxt2: {
        fontSize: 20
    }
})

export default NavbarComponent;