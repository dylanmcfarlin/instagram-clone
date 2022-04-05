import { FC } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import image1 from '../Images/image1.jpeg';

const StoriesComponent:FC = () => {
    return (
        <ScrollView horizontal style={{paddingTop:5, paddingBottom:5, backgroundColor:'black'}}>
            <Image 
                source={image1}
                style={{height: 50, width:50, borderRadius:50, marginRight: 20}}
            />
            <Image 
                source={image1}
                style={{height: 50, width:50, borderRadius:50, marginRight: 20}}
            />
            <Image 
                source={image1}
                style={{height: 50, width:50, borderRadius:50, marginRight: 20}}
            />
            <Image 
                source={image1}
                style={{height: 50, width:50, borderRadius:50, marginRight: 20}}
            />
            <Image 
                source={image1}
                style={{height: 50, width:50, borderRadius:50, marginRight: 20}}
            />
            <Image 
                source={image1}
                style={{height: 50, width:50, borderRadius:50, marginRight: 20}}
            />
            <Image 
                source={image1}
                style={{height: 50, width:50, borderRadius:50, marginRight: 20}}
            />
            <Image 
                source={image1}
                style={{height: 50, width:50, borderRadius:50, marginRight: 20}}
            />
            <Image 
                source={image1}
                style={{height: 50, width:50, borderRadius:50, marginRight: 20}}
            />
        </ScrollView>
    )
}

export default StoriesComponent;