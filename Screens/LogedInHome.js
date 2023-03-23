import React, { useState  } from "react";
import {StatusBar, View, Text, Image, StyleSheet, TouchableOpacity, Linking , Alert } from "react-native";

const LogedInHome = ({navigation}) => {

    // const [logoutMsg , setLogoutMsg] = useState('false');
    
    const dataLogoutMsg = (logoutMsg) => {
        Alert.alert(
            "Confirm",
            "Are You Sure..!",
            [
              {
                text: "No",
              },
              { text: "Yes", onPress: () =>  navigation.navigate('Login' , true)}
            ]
          );
    }

    return(
        <View style={styles.ParentView}>
            <StatusBar backgroundColor="#0a2e2c"/>
            <View style={styles.CentreLogo}>
                <Image style={styles.logo} source={require('../res/energy.png')}/>
            </View>

            <View style={styles.HomeView}>
                <Text style={styles.Home}>
                    Welcome Home
                </Text>
            </View>

            <View style={{marginTop:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('GhatGPT')}>
                    <View style={styles.Adjustsubmit}>
                        <Text style={styles.submit}>Chat GPT</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{marginTop:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <View style={styles.Adjustsubmit}>
                        <Text style={styles.submit}>Get Access To Multiple Features</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{position:"absolute" ,  bottom:10 , left: 10}}>
                <TouchableOpacity onPress={dataLogoutMsg}>
                    <View style={styles.Adjustsubmit}>
                        <Text style={styles.submit}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.ViewWhatsaapLogo}>
                <TouchableOpacity onPress={()=> Linking.openURL('whatsapp://send?text=ABID&phone=03054945593')}>
                    <Image style={styles.WhatsaapLogo} source={require('../res/WhatsaapLogo.png')}/>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    ParentView:{
        flex:1,
        backgroundColor:"#114542",
    },
    CentreLogo:{
        marginTop:8,
        marginBottom:8,
        alignSelf:"center",
    },
    logo:{
        height:180,
        width:180,
    },
    HomeView:{
        alignSelf:'center',
    },
    Home:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:25,
    },
    Adjustsubmit:{
        backgroundColor:'#25857f',
        borderRadius:15,
        width:300,
        paddingVertical:10,
        alignSelf:"center",
        alignItems:"center",
    },
    submit:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:17,
    },
    ViewWhatsaapLogo:{
        position:"absolute",
        bottom:3,
        alignSelf:'flex-end',
    },
    WhatsaapLogo:{
        height:75,
        width:75
    }
});

export default LogedInHome;
