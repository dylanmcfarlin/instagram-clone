import { FC } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import StoriesComponent from './StoriesComponent';


const PostComponent:FC = () => {
    return (
        <ScrollView style={{flex: 1}}>
            <StoriesComponent />
            <Text>Post component</Text>
        </ScrollView>
    )
}

export default PostComponent;