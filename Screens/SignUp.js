import React, { useState } from "react";
import {StatusBar, View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validate } from "react-email-validator";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const SignUp = ({navigation , route}) => {

    const netAvailability = (route.params.internet);

    const [userName , setUserName ] = useState('');
    const [email , setEmail ] = useState('');
    const [number , setNumber ] = useState('');
    const [password , setPassword] = useState('');
    const [rePassword , setRePassword] = useState('');
    const [errorMsg , setErrorMsg] = useState('');
    const [errorState , setErrorState] = useState(false);

    const validingCredentials = () =>{
        if(!userName || !email || !number || !password){
            setErrorState(true);
            setErrorMsg('All Fields Are Required');
        }

        // Commented Working Feature For Testing Purpose
        
        // else if(password !== rePassword){
        //     setErrorState(true);
        //     setErrorMsg('Passwords Doesn\'t Match');
        // }
        // else if(!validate(email)){
        //     setErrorState(true);
        //     setErrorMsg('Choose a Valid Email');
        // }        
        // else if(password.length < 8 ){
        //     setErrorState(true);
        //     setErrorMsg('Password Must Be 8  Character Long');
        // }
        // else if(number.length !== 11 ){
        //     setErrorState(true);
        //     setErrorMsg('Mobile Number Must Have 11 Digits');
        // }
        // else if(userName.length < 3 ){
        //     setErrorState(true);
        //     setErrorMsg('Name Hust Have More Than 3 Characters');
        // }
        else{
            setErrorState(false);
            Keyboard.dismiss()
            const data = auth().createUserWithEmailAndPassword(email,password).then((createduser)=>{
                setEmail('')
                setNumber('')
                setPassword('')
                setRePassword('')
                setUserName('')
                Alert.alert("Welcome","Account Created Successfully :" +  userName)
                navigation.navigate('Login')
                createduser.updateProfile({
                    displayName: userName
                }).then((console.log(createduser))).catch(err);
            }).catch((err)=> {
                if(err.code == "auth/email-already-in-use"){
                    Alert.alert("Sorry...","Email Allready In Use");
                }else{
                    console.log(err);
                }
            })

            firestore().collection('Users').add({
                email : email,
                number : number,
                // password : password,
                user   : userName,
            }).then(()=> console.log("User Added")).catch((err) => console.log("err : " + err))
        
        }
    }

    // DATABASE RELATED ISSUES`
    // const usersCollection = firestore().collection('Users');
    // const data = auth()
    const submit = () => { 
        console.log("data");
    }
    

    return (
        <View style={styles.ParentView}>
            <StatusBar backgroundColor="#0a2e2c"/>
            <View style={styles.CentreLogo}>
                <Image style={styles.logo} source={require('../res/energy.png')}/>
            </View>

            <KeyboardAwareScrollView style={styles.KeyboardAwareScrollView}>
                <View style={styles.AdjustInputs}>
                    <Text style={styles.credentials}>Fill-Up credentials To Create Account 🧾</Text>
                                    {/* ERRROR MSG */}
                    <Text style={[styles.ErrorText , errorState? styles.showError : styles.hideError ]}>{errorMsg}</Text>
                    <Text>{netAvailability}</Text>
                    
                    <TextInput style={styles.input} name="UserName" placeholder="Enter User Name 👤"     placeholderTextColor={'#25857f'} value={userName}   onChangeText={(userName) => setUserName(userName)}/>
                    <TextInput style={styles.input} name="Email"    placeholder="Enter Email 📧"         placeholderTextColor={'#25857f'} value={email}      onChangeText={(email) => setEmail(email)}/>
                    <TextInput style={styles.input} name="Number"   placeholder="Enter Mobile Number 📞" placeholderTextColor={'#25857f'} value={number}     onChangeText={(number) => setNumber(number)} keyboardType={'numeric'}/>
                    <TextInput style={styles.input} name="Password" placeholder="Enter Password 🔑"      placeholderTextColor={'#25857f'} value={password}   onChangeText={(password) => setPassword(password)} secureTextEntry={true}/>
                    {/* <TextInput style={styles.input} name="Repassword" placeholder="Re-Enter Password 🔑" placeholderTextColor={'#25857f'} value={rePassword} onChangeText={(rePassword) => setRePassword(rePassword)} secureTextEntry={true}/> */}
                </View>
                
                <TouchableOpacity onPress={validingCredentials}>
                    {/* Alert.alert("Credential" , "Name : " + userName.toUpperCase() + "\n"+ "Email : " + email + "\n"+ "Number : " + number+ "\n"+ "Password : " + password + "\n"+ "Confirm : " + rePassword ) */}
                    <View style={styles.Adjustsubmit}>
                        <Text style={styles.submit}>SignUp</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.AdjustSignUp}>
                    <Text style={{marginTop:1.7 , color:'#fff'}}>Allready Have an Account {'>'} </Text>
                    <TouchableOpacity onPress={()=> {navigation.navigate('Login')}}>
                        <Text style={[styles.submit , {color:'#8dd6d2'}]}> Login</Text>
                    </TouchableOpacity>
                </View>



                    {/* TESTING */}
                    <TouchableOpacity onPress={submit}>
                        <Text style={styles.DbTestBtn}> DB TEST</Text>
                    </TouchableOpacity>


            </KeyboardAwareScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    ParentView:{
        flex:1,
        backgroundColor:"#114542",
    },
    CentreLogo:{
        marginTop:17,
        marginBottom:30,
        alignSelf:"center",
    },
    logo:{
        height:125,
        width:125,
    },
    KeyboardAwareScrollView:{
        backgroundColor:"#114542",
        marginBottom:15,
    },
    AdjustInputs:{
        alignSelf:"center",
        alignItems:"center",
    },
    credentials:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:15,
        marginBottom:0,
    },
    ErrorText:{
        color:'red',
    },
    input:{
        borderBottomColor:'#25857f',
        borderBottomWidth:3,
        borderRadius:10,
        color:'#fff',
        width:300,
        paddingHorizontal:25,
        paddingBottom:3,
        marginVertical:12,
        fontSize:16,
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
        fontSize:16,
    },
    AdjustSignUp:{
        flexDirection:"row",
        alignSelf:'center',
        marginTop:25,
    },
    showError:{
        display:'flex',
    },
    hideError:{
        display:'none',
    },
    DbTestBtn:{
        alignSelf:"center",
        marginTop:15,
        fontSize:13,
        backgroundColor:'grey',
        color:'#000' , 
        padding:10 ,
        borderRadius:10,
        fontWeight:'bold',
    },
});

export default SignUp;
