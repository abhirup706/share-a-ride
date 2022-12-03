import React from 'react';
import { View, Text, Image, TouchableOpacity,Linking } from 'react-native';
import Screen from '../components/Screen';
import tw from 'tailwind-react-native-classnames';
import Constants from 'expo-constants'
import tailwind from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const SuccessScreenProvider = ({ route }) => {
    const { data } = route.params;
    const navigation = useNavigation()

    const openDialScreen = () => {
        let number = '';
        if (Platform.OS === 'ios') {
          number = 'telprompt:${091123456789}';
        } else {
          number = 'tel:${091123456789}';
        }
        Linking.openURL(number);
      };

      const openMessageApp = () => {
        let number = '';
        if (Platform.OS === 'ios') {
          number = 'telprompt:${091123456789}';
        } else {
          number = 'tel:${091123456789}';
        }
        Linking.openURL(`sms:091123456789`);
      };


    return (
        <Screen style={tw`bg-white h-full justify-center`}>
            <TouchableOpacity
                style={[tailwind`bg-white p-3 rounded-full shadow-lg`, { top: Constants.statusBarHeight, left: 20, position: 'absolute', zIndex: 50 }]}
                onPress={() => navigation.navigate("WelcomeScreen")}
            >
                <Icon
                    type="antdesign"
                    name="home"
                    color="black"
                    size={16}
                />
            </TouchableOpacity>
            <View style={tw`self-center mt-20`}>
                <View>
                
                        <Icon
                        type="feather"
                        name="check-circle"
                        color="green"
                        size={40}
                        style={tailwind`pl-2 pt-0.5`}
                        />
                        <Text style={[tailwind`text-center text-3xl font-bold pl-5`,{color:"green"}]}>You're All Set!</Text>
                </View>
                <View style={tw`p-5 w-full self-center`}>
                    <Image
                        source={require('../assets/waiting.jpg')}
                        style={[tw`w-60 h-40`,{resizeMode:"contain"}]}
                    />
                </View>
                <View style={tw`p-5 text-center self-center`}>
                    <Text style={tw`font-bold text-lg mb-3 text-center`}>{data?.title} is waiting for you</Text>
                    <Text style={tw`text-base text-center`}>Ride cost: ${data?.price}</Text>
                    <Text style={tw`text-base text-center`}>Passengers: {data?.passengers}</Text>
                    <Text style={tw`text-base text-center`}>Estimated time: {data?.time}</Text>
                    <Text style={tw`text-base text-center`}>Estimated distance: {data?.distance}</Text>
                </View>
                <View style={{flex:1,flexDirection:"row",justifyContent:"center",paddingLeft:25}}>
                <TouchableOpacity
                        style={{
                            borderWidth:1,
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:160,
                            height:40,
                            backgroundColor:'#01a699',
                            borderRadius:50,
                            paddingTop:5
                            }}
                            onPress={()=>openDialScreen()}
                    >
                        <View style={{flex:1,flexDirection:"row"}}>
                        <Text style={[tw`text-base text-center text-white`,{marginTop:1}]}>Call Rider</Text><Icon name="phone" type="fontawesome" size={30} style={{marginBottom:5,marginLeft:5}} color="white" />
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={{
                            borderWidth:1,
                            marginHorizontal:30,
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:150,
                            height:40,
                            backgroundColor:'cornflowerblue',
                            borderRadius:50,
                            paddingTop:5
                            
                            }}
                            onPress={()=>openMessageApp()}
                    >
                        <View style={{flex:1,flexDirection:"row"}}>
                        <Text style={tw`text-base text-center text-white`}>Message Rider </Text><Icon name="chat-bubble" type="materialicons" size={25} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    );
}

export default SuccessScreenProvider;
