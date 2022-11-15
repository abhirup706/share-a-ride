import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View,Image } from 'react-native'
import { useSelector } from 'react-redux'
import tailwind from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import MapNavigator from '../navigation/MapNavigator'
import { selectOrigin } from '../redux/slices/navSlice'
import { SafeAreaView } from 'react-native-safe-area-context'


const MapScreen_2 = () => {
    const origin = useSelector(selectOrigin)
    const navigation = useNavigation()

    useEffect(() => {
        if(!origin) navigation.replace('NavigateCard')
    }, [])

    return (
        <View>
            <View style={{height:"60%"}}>
                <SafeAreaView style={{alignItems:"center",justifyContent:"center",backgroundColor:"white",height:80, paddingTop:40,paddingBottom:10}}>
                <View style={{height:"40%",marginLeft:"5%",marginBottom:"20%", backgroundColor:"white"}}>
                    <Image source={require('../assets/logo.png')} style={{height:70,width:200}}/>
                </View>
                <View style={{height:"40%",marginLeft:"5%",marginBottom:"10%", backgroundColor:"white"}}>
                <Image source={require('../assets/rider.png')} style={{marginLeft:"10%", height:25,width:100}}/>
                </View>
                </SafeAreaView>
                <Map/>
                <View>
                    <MapNavigator />
                </View>
            </View>
            

        </View>
    )
}

export default MapScreen_2