import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { Icon, Card } from 'react-native-elements'
import Screen from './Screen'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../redux/slices/navSlice'



const SEARCH_CHARGE_RATE = 1.5

const HostDetails = ({ route}) => {

    const { data } = route.params;
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)

    useEffect(() =>{
        if(!origin || !destination) navigation.push('NavigateCard')
    }, [origin, destination])

    const travelConst = (item) => {
        return ((travelTimeInformation?.duration?.value * SEARCH_CHARGE_RATE * item?.multiplier) / 100).toFixed(2)
    }

    const onChoose = () =>{
        if(!selected) return Alert.alert('Please select a ride option')
        navigation.push('SuccessScreen', { data: {...selected, distance: travelTimeInformation?.distance?.text, time: travelTimeInformation?.duration.text, price: travelConst(selected)} })
    }
    const riderName = `Rider Name: ${data?.title}`
    return (
        <Screen style={[tailwind`bg-white pl-3 pt-10 h-full`,{justifyContent:"center"}]}>
        <View style={{marginBottom:50, paddingTop:10, position: 'absolute', top: 0, left: 0, right: 0, bottom: 100, justifyContent: 'center', alignItems: 'center'}}>
        <Card containerStyle={{justifyContent:"center",width:"90%", alignItems:"left",alignSelf:"center",
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
        }}
            title='HELLO WORLD'
            // image={require('')}>
            >
            <View style={{flex:1,flexDirection:"row"}}>
                <View style={{marginTop:"15%"}}>
                <Image 
                    
                    source={{
                        uri: 'https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg'
                    }} 
                    style={{width: 100, height: 100, borderRadius: 400/ 2,borderColor:"grey",borderWidth:2}} 
                />
                </View>
                <View style={{marginLeft:15}}>
                    <View >
                        <Text style={tailwind`text-center text-black text-2xl font-bold`}>Rider Details</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row",paddingTop:10,marginBottom:0}}>
                        <Text style={tailwind`text-center text-black text-xl`}>Name: </Text>
                        <Text style={tailwind`text-center text-black text-lg pl-5`}>Riya Bhargava</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row",marginTop:0}}>
                        <Text style={tailwind`text-center text-black text-xl`}>Rating: </Text>
                        <Text style={tailwind`text-center text-black text-lg pl-5`}>4.25</Text>
                        <Icon
                        type="antdesign"
                        name="star"
                        color="goldenrod"
                        size={20}
                        style={tailwind`pl-2 pt-0.5`}
                    />
                    </View>
                    <View style={{flex:1,flexDirection:"row",marginTop:0}}>
                        <Text style={tailwind`text-center text-black text-xl`}>Gender: </Text>
                        <Text style={tailwind`text-center text-black text-lg pl-2`}>Female</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row",marginTop:0}}>
                        <Text style={tailwind`text-center text-black text-xl`}>Host Since: </Text>
                        <Text style={tailwind`text-center text-black text-lg pl-2`}>7 years</Text>
                    </View>
                </View>
            </View>
            <View>
                <View>
                    
                </View>

            </View>
            
        </Card>
        </View>
            {/* <View> */}
                <TouchableOpacity
                    style={[tailwind`bg-black py-3 mr-4 rounded-lg`,{backgroundColor:"olivedrab",position:"center",position: 'relative', top: 100, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}]}
                    disabled={!selected}
                    onPress={onChoose}
                >
                    <Text style={tailwind`text-center text-white text-xl`}>Continue</Text>
                </TouchableOpacity>
            {/* </View> */}

        </Screen>
    )
}

export default HostDetails

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
})
