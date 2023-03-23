/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React , {useState , useCallback , useEffect} from 'react';
import { StatusBar , View, Text, FlatList, TouchableOpacity, TextInput , StyleSheet } from 'react-native';
import Indicator from '../Components/Indicator';


//  ARRAYS
const QUOTES = [
    {
        id:1,
        quote:'VOLUNTEER FREELY',
        hexCode: '#013b4a',
    },
    {
        id:2,
        quote:'THINK POSITIVELY',
        hexCode: '#053642',
    },
    {
        id:3,
        quote:'EXERCISE DAILY',
        hexCode: '#586e75',
    },
    {
        id:4,
        quote:'LIVE FOREVER',
        hexCode: '#657b83',
    },
    {
        id:5,
        quote:'NETWORK WELL',
        hexCode: '#839496',
    },
    {
        id:6,
        quote:'EAT HEALTHY',
        hexCode: '#93a1a1',
    },
    {
        id:7,
        quote:'STAY STRONG',
        hexCode: '#eee8d5',
    },
    {
        id:8,
        quote:'BUILD FAITH',
        hexCode: '#fdf6e3',
    },
    {
        id:9,
        quote:'RELAX OFTEN',
        hexCode: '#b58900',
    },
    {
        id:10,
        quote:'LOVE ALWAYS',
        hexCode: '#cb4b16',
    },
    {
        id:11,
        quote:'WORRY LESS',
        hexCode: '#dc322f',
    },
    {
        id:12,
        quote:'READ MORE',
        hexCode: '#d33682',
    },
    {
        id:13,
        quote:'WORK HARD',
        hexCode: '#6c71c4',
    },
    {
        id:14,
        quote:'BE HAPPY',
        hexCode: '#268bd2',
    },
    {
        id:15,
        quote:'...ESPECIALLY...',
        hexCode: '#7542f5',
    },
    {
        id:16,
        quote:'Eat Sleep <CODE/ > Repeat',
        hexCode: '#2aa198',
    },
    {
        id:17,
        quote:'Go After Dreams, Not Peoples',
        hexCode: '#859900',
    },
];

const RAINBOW = [
    {
        id:1,
        quote: 'Make peace with past so it won’t mess with present',
        hexCode: '#FF0000',
    },
    {
        id:2,
        quote: 'What others think of you is none of your business',
        hexCode: '#FF7F00',
    },
    {
        id:3,
        quote: 'Time heals everything, so give it time',
        hexCode: '#FFFF00',
    },
    {
        id:4,
        quote:  'No one is in charge of your happiness, except you',
        hexCode: '#00FF00',
    },
    {
        id:5,
        quote: 'Don’t compare your life to others, and don’t judge them',
        hexCode: '#0000FF',
    },
    {
        id:6,
        quote: 'Stop thinking so much, it’s alright not to know the answers',
        hexCode: '#4B0082',
    },
    {
        id:7,
        quote: 'SMILE',
        hexCode: '#9400D3',
    },
];

const COLORS =[
    {
        id:1,
        quote: 'red'.toLocaleUpperCase(),
        hexCode: '#FE2712',  
    },
    {
        id:2,
        quote: 'redOrange',
        hexCode: '#FC600A',
    },
    {
        id:3,
        quote: 'orange',
        hexCode: '#FB9902',
    },
    {
        id:4,
        quote: 'yellowOrange',
        hexCode: '#FCCC1A',
    },
    {
        id:5,
        quote: 'yellow',
        hexCode: '#FEFE33',
    },
    {
        id:6,
        quote: 'yellowGreen',
        hexCode: '#B2D732',
    },
    {
        id:7,
        quote: 'green',
        hexCode: '#66B032',
    },
    {
        id:8,
        quote: 'blueGreen',
        hexCode: '#347C98',
    },
    {
        id:9,
        quote: 'blue',
        hexCode: '#0247FE',
    },
    {
        id:10,
        quote: 'bluePurple',
        hexCode: '#4424D6',
    },
    {
        id:11,
        quote: 'purple',
        hexCode: '#8601AF',
    },
    {
        id:12,
        quote: 'redPurple',
        hexCode: '#C21460',
    },
];

// FLATLIST
const COLLECTIONS = [
    {
        id:1,
        arrays: QUOTES,
        Namez: 'Motivation',
    },
    {
        id:2,
        arrays: RAINBOW,
        Namez: 'Rainbow',
    },
    {
        id:3,
        arrays: COLORS,
        Namez: 'Colors',
    },
];

const Home = ({ route , navigation})=>{
    // const updateReceivedValue = route.params.receiced;
    // console.log(updateReceivedValue);
    const [text, setText] = useState('0')

    // const [test , setTest] = useState([]);
    // const getingJsonColorPallet = useCallback(async ()=>{
    //     const results = await fetch("https://color-palette-api.kadikraman.vercel.app/palettes")
    //     if(results.ok){
    //         const pallets = await results.json();
    //         setTest(pallets);
    //     }
    // },[])
    // useEffect(()=>{
    //     getingJsonColorPallet();
    // },[])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#0a2e2c" />

            <View>
                <FlatList
                data={COLLECTIONS}
                keyExtractor={item => item.id}
                renderItem={({item}) =>

                <Indicator handlePress={()=>{
                    navigation.navigate('ColorPallet', {data: item.arrays , Name: item.Namez })
                }}
                DisplayName={item}
                />}/>
            </View>

                                        {/* TEXT INPUT FOR + & - UseState */}
            <View style={{borderTopColor:'#25857f' , borderBottomColor:'#25857f' , borderWidth:7 , borderRadius:35 , margin:10}}>
                <View style={{alignSelf:'center', marginTop:10, backgroundColor:'#25857f', paddingHorizontal:10 , borderRadius:10 , width:150 }}>
                    <TextInput 
                        // Value={text}
                        style={{color:'#fff'}}
                        keyboardType='numeric' 
                        placeholder='Enter Number Here'
                        placeholderTextColor={'#fff'}
                        onChangeText={(text)=>{
                            setText(text)
                        }}/>
                </View>
                <View style={{alignSelf:'center', marginVertical:5, backgroundColor:'#25857f', borderRadius:10}}>
                    <TouchableOpacity onPress={() => {
                        if(text < 0){
                            alert("Can not send any value less than 0. \n \n Like " + text)
                        }
                        else if(text == null){
                            alert("Can not send Empty Fields")
                        }
                        else{
                            navigation.navigate('Test', {text})
                        }
                    }}>
                        <Text style={{ padding:10 , fontWeight:'bold' , color: '#fff'}}>I am UseState</Text>
                    </TouchableOpacity>
                </View>
                {/* <View>
                    <Text>{updateReceivedValue}</Text> 
                </View> */}
            </View>

                                            {/* WEB VIEW */}

            <View style={{alignSelf:'center', marginVertical:10, backgroundColor:'#25857f', borderRadius:10}}>
                <TouchableOpacity onPress={()=> {navigation.navigate('MyWeb')}}>
                    <Text style={{ padding:10 , fontWeight:'bold' , color: '#fff'}}>ABID's github Using Web View</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#114542",
    },
});

export default Home;
