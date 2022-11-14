import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text,Image } from 'react-native'
import { useSelector } from 'react-redux'
import tailwind from 'tailwind-react-native-classnames'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import MapNavigator from '../navigation/MapNavigator'
import { selectOrigin } from '../redux/slices/navSlice'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'

const MapScreen = () => {
    const origin = useSelector(selectOrigin)
    const navigation = useNavigation()
    

    useEffect(() => {
        if(!origin) navigation.replace('NavigateCard')
    }, [])

    return (
        <View style={tw`bg-white h-full`}>
            <View style={{height:"60%"}}>
            <SafeAreaView style={{alignItems:"center",justifyContent:"left", flexDirection:"row", backgroundColor:"white",height:80, paddingTop:40,paddingBottom:10}}>
                <View style={{padding:0,paddingHorizontal:5,paddingLeft:0, height:70,marginLeft:10,backgroundColor:"white",marginTop:0}}>
                    <Image source={require('../assets/logo.png')} style={{height:70,width:200}}/>
                    
                </View>
                <View>
                <Image source={require('../assets/rider.png')} style={{marginLeft:30, height:25,width:100}}/>
                </View>

            </SafeAreaView>
            
            <Map/>
            </View>
            <View style={tailwind`h-1/2`}>
                <MapNavigator />
            </View>
        </View>
    )
}

export default MapScreen