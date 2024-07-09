import React, {useEffect, useState} from 'react'

import {
    View,
    Text,
    ActivityIndicator,
    Image,
    TouchableOpacity
} from 'react-native'

import {Feather as Icon, MaterialCommunityIcons} from '@expo/vector-icons'

import axios from 'axios'

import styles from './styles'
import { FlatList } from 'react-native-gesture-handler'

export const Contacts = () => {
    function ContactCart({item}){
        return (
            <View style={styles.containerCard}>
                <View>
                    <Image 
                    style={styles.containerImage}
                    source={{uri: item.picture.thumbnail}}
                    />
                </View>
                <View style={styles.containerName}>
                    <Text style={styles.textName}>{`${item.name.first} ${item.name.last}`}</Text>
                    <Text style={styles.textName}>{`${item.cell}`}</Text>
                </View>
            </View>
        )
    }

    const [contacts, setContacts] = useState(null)

    useEffect(() => {
        axios.get('http://randomuser.me/api/?results=50&nat=br&inc=name,nat,phone,cell,picture,email').then(({data}) => {
            console.log(data.results)

            setContacts(data.results)
        })
    }, [])


    return(
        <>
            {!contacts ? (
                <View style={styles.containerActivity}>
                    <ActivityIndicator size='large'/>
                </View>
            ):(
                <View style={styles.container}>
                    <FlatList 
                    data={contacts}
                    keyExtractor={(_,index) => index.toString()}
                    renderItem={ContactCart}/>
                </View>
            )}
        </>
    );
}