/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import {StatusBar, Animated, View, SafeAreaView, Text ,StyleSheet, TouchableOpacity, Linking,} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import MarqueeText from 'react-native-marquee';
import Box from '../Components/Box';

// LINKING

// ANIMATION
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: props.time,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim, props.time]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};
// ANIMATION ENDS


const ColorPallet = ({route}) => {
  const {data , Name} = route.params;
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor="#0a2e2c" />
          <SafeAreaView>
            <FlatList
            ListHeaderComponent={
              <View>
                <MarqueeText style={{ fontSize:23, marginBottom:10, color:'#25857f' }} speed={0.3} marqueeOnStart={true} loop={true} delay={100}>Set Some Text Or News Here, Like Updaes About Apps.</MarqueeText>
                <FadeInView time="900">
                  <Text style={styles.Abid}>WELCOME</Text>
                  <Text style={styles.Abid}>Mr.ABID</Text>
                </FadeInView>
                <Text style={{color:'#fff' , alignSelf:"center"}}>{Name}</Text>
              </View>}
            data={data}
            // If Data Have Uniqeue "Key" Or "Id" In Array, Developer Not Need To Add keyExtractor
            // keyExtractor={item => item.id}
            renderItem={({item}) => (
              <FadeInView time="3000">
                <Box quote={item.quote}  color={item.hexCode} />
              </FadeInView>
            )}
            ListFooterComponent={
              <View style={{marginBottom:25}}>
                <View style={styles.SpecialQuote}>
                  <Text style={styles.Developer}>Keep Calm</Text>
                  <Text style={styles.Developer}>&</Text>
                  <Text style={styles.Developer}>Let The</Text>
                  <Text style={[styles.Developer , styles.SoftwareDeveloper]}>"SOFTWARE DEVELOPER"</Text>
                  <Text style={styles.Developer}>Handle It.</Text>
                </View>


                <View style={{justifyContent:'center', alignItems:'center' , borderColor:'#25857f' , borderWidth:3, borderRadius:10 , bottom:0, marginTop:25}}>
                  <TouchableOpacity onPress={()=> Linking.openURL("https://github.com/talhaAbid1")}>
                    <Text style={{fontSize:25, color:'#25857f'}}>ABID's GitHub</Text>
                  </TouchableOpacity>
                </View>
              </View>}
              />
          </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:'#000d17',
  },
  Abid: {
    color: '#25857f',
    fontSize: 70,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  SpecialQuote:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#25857f',
    borderRadius:25,
    marginHorizontal:25,
    marginVertical:15,
  },
  SoftwareDeveloper:{
    color:'#000d17',
    fontSize:27,
    fontWeight:'bold',
  },
  Developer:{
    color:'#fff',
    fontSize:23,
  },
});

export default ColorPallet;
