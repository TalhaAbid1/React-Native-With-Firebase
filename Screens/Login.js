import React, { useCallback, useEffect, useState } from "react";
import {StatusBar, View, Text, TextInput, Image,StyleSheet, TouchableOpacity, Alert, ActivityIndicator, Keyboard } from "react-native";
import { validate } from "react-email-validator";
import auth from '@react-native-firebase/auth';
import BackgroundAnimation from '../Components/BackgroundAnimation';

const Login = ({route , navigation}) => {

    const logOutMsg = route.params;

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [emailError , setEmailError] = useState(false)
    const [emailErrorDis , setEmailErrorDis] = useState('')
    const [loading, setLoading] = useState(false)


    const emptyFieldTest = () => {
        if(!email || !password){
            setEmailError(true);
            setEmailErrorDis('Required Credentials')
        }
        else if(!validate(email)){
            setEmailError(true);
            setEmailErrorDis('Invalid Email')
        }
        else{
            setEmailError(false);
            Keyboard.dismiss()
            const check = auth().signInWithEmailAndPassword(email,password).then((userCheck)=>{
                setLoading(val => val = true)
                setTimeout(() => {
                    navigation.navigate('LogedInHome')
                    setLoading(val => val = false)
                    // setEmail(val => val = "")
                    // setPassword(val => val = "")
                }, 1500);
            }).catch((err) => {
                if(err.code == "auth/wrong-password" || err.code == "auth/user-not-found"){
                    setEmailError(true)
                    setEmailErrorDis("Invalid Email Or Password")
                }
                else if(err.code = "auth/network-request-failed"){
                    setEmailError(true)
                    setEmailErrorDis("Internet Connection Error")
                }
                else if(err.code = "auth/unknown"){
                    setEmailError(true)
                    setEmailErrorDis("Internet Connection Is Not Valid")
                }
                else{
                    setEmailError(false)
                    alert(err)
                }
            })
        }
    };

    // Password Toggle Hide & Show
    const[passwordVisible , setPasswordVisible] = useState(true)    
    const passwordToggle = useCallback(() =>{
        setPasswordVisible(!passwordVisible);
    } , [passwordVisible])
    
    const submit = () => { Alert.alert( 'Sorry Develover' , 'This Feature is Under Construction') }


    const signUp = () =>{
        // setEmail(val => val = "")
        setPassword(val => val = "")
        navigation.navigate('SignUp')
    }
    setTimeout(() => {"ABID"}, 1000)

    return(
        <View style={styles.ParentView}>
            <StatusBar backgroundColor="#0a2e2c"/>

            <View style={styles.CentreLogo}>
                <Image style={styles.logo} source={require('../res/energy.png')}/>
            </View>

            <View style={styles.AdjustInputs}>
                <Text style={styles.credentials}>Enter credentials 🧾</Text>    
                <Text style={[styles.EmailErrorDis , emailError? styles.showError : styles.hideError ]}>{emailErrorDis}</Text>
                <Text style={{color:'#fff'}}>{logOutMsg ? 'Successfully Loged_Out' : "" }</Text>
                <TextInput style={styles.input} value={email}    placeholder="Enter Email Address 📧" placeholderTextColor={'#25857f'} onChangeText={(email)=> setEmail(email)}/>
            
                <View style={styles.Password_Toggle}>
                    <TextInput style={styles.input} value={password} placeholder="Enter Password 🔑" placeholderTextColor={'#25857f'} onChangeText={(password)=> setPassword(password)} secureTextEntry={passwordVisible}/>
                    <TouchableOpacity onPress={passwordToggle}>
                        <Text style={styles.hide_show}>{passwordVisible ? "Show" : "Hide"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <TouchableOpacity onPress={emptyFieldTest}>
                <View style={styles.Adjustsubmit}>
                    <Text style={styles.submit}>Login</Text>
                </View>
            </TouchableOpacity>

            
                <View style={styles.AdjustSignUp}>
                    <Text style={{marginTop:1.7 , color:'#fff'}}>Click Here To Create Account {'>'} </Text>
                    <TouchableOpacity onPress={() => signUp()}>
                        <Text style={[styles.submit , {color:'#8dd6d2'}]}> SignUp</Text>
                    </TouchableOpacity>
                </View>

            <View style={styles.AdjustInputs}>
                <Text style={styles.Or}>OR</Text>
            </View>

            <View style={styles.AdjustInputs}>
                <TouchableOpacity onPress={submit}>
                    <Text style={styles.LoginWithGoogle}> Google</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.loading , loading?  styles.showError : styles.hideError ]}>
                <BackgroundAnimation/>
                <Text style={styles.check}>Welcome To Home</Text>
                <ActivityIndicator size="small" color="#0ff"/>
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
        marginTop:18,
        marginBottom:30,
        alignSelf:"center",
    },
    logo:{
        height:180,
        width:180,
    },
    AdjustInputs:{
        alignSelf:"center",
        alignItems:"center",
    },
    credentials:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:25,
    },
    input:{
        borderBottomColor:'#25857f',
        borderBottomWidth:3,
        borderRadius:10,
        color:'#fff',
        width:300,
        paddingHorizontal:25,
        paddingBottom:3,
        marginTop:15,
        marginBottom:7,
        fontSize:16,
    },
    Password_Toggle:{
        flexDirection:'row',
        alignSelf:"center",
        alignItems:"center",
    },
    hide_show:{
        position:"absolute",
        color:'#fff',
        marginLeft:-35,
        backgroundColor:'#25857f',
        paddingHorizontal:3,
        borderRadius:5,
    },
    Adjustsubmit:{
        backgroundColor:'#25857f',
        borderRadius:15,
        width:300,
        paddingVertical:10,
        marginTop:25,
        alignSelf:"center",
        alignItems:"center",
    },
    submit:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:17,
    },
    AdjustSignUp:{
        flexDirection:"row",
        alignSelf:'center',
        marginTop:25,
    },
    Or:{
        marginVertical:10,
        fontWeight:'bold',
        color: '#9bd1ce',
    },
    LoginWithGoogle:{
        borderBottomColor:'#4285F4',
        borderTopColor:'#EA4335',
        borderRightColor:'#34A853',
        borderLeftColor:'#FBBC05',
        borderWidth:2,
        borderRadius:10,
        paddingHorizontal:9,
        paddingVertical:10,
        color:'#fff',
        fontWeight:'bold',
    },
    EmailErrorDis:{
        color:'red'
    },
    showError:{
        display:'flex',
    },
    hideError:{
        display:'none',
    },
    check:{
        marginVertical:13,
        fontSize:25,
        fontWeight:'bold',
        color:'#9bd1ce',
        justifyContent:"center",
    },
    loading:{
        flex:1,
        backgroundColor:"#114542",
        position:"absolute",
        top:0,
        bottom:0,
        right:0,
        left:0,
        alignContent:"center",
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
    },
});

export default Login;
