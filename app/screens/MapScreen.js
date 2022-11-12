import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
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
        if(!origin) navigation.replace('Home')
    }, [])

    return (
        <View style={tw`bg-white h-full`}>
            <View style={tailwind`h-1/2 pb-0`}>
            <SafeAreaView style={{alignItems:"center",justifyContent:"left", flexDirection:"row", backgroundColor:"lightgrey",height:80, paddingTop:40,paddingBottom:0}}>
                <View style={{padding:0,paddingHorizontal:5,height:70,marginLeft:10,backgroundColor:"lightgrey",marginTop:0}}>
                    <TouchableOpacity style={{alignItems:"left", backgroundColor:"lightgrey",padding:10,marginLeft:1,marginTop:0,borderRadius:15,width:50}}>
                            <Icon 
                                type="entypo"
                                name="menu"
                                color="black"
                                size={30}
                                
                                style={{padding:1}}
                            />
                    </TouchableOpacity>
                </View>
                <View style={{padding:7,paddingHorizontal:5,height:70}}>
                    <TouchableOpacity style={{alignItems:"center", backgroundColor:"black",padding:10,borderRadius:15,width:80}}>
                        <Text style={{color:"white"}}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={{padding:7,paddingHorizontal:5,height:70}}>
                    <TouchableOpacity style={{alignItems:"center", backgroundColor:"black",padding:10,borderRadius:15,width:80}}>
                        <Text style={{color:"white"}}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <View style={{padding:7,paddingHorizontal:5,height:70}}>
                    <TouchableOpacity style={{alignItems:"center", backgroundColor:"black",padding:10,borderRadius:15,width:80}}>
                        <Text style={{color:"white"}}>About Us</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            
            <Map />
            </View>
            <View style={tailwind`h-1/2`}>
                <MapNavigator />
            </View>
        </View>
    )
}

export default MapScreen