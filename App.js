import 'react-native-gesture-handler';
import React , {useEffect , useState , useCallback} from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import Home from './Screens/Home';
import ColorPallet from './Screens/ColorPallet';
import Test from './Screens/Test';
import {MyGiHubWebView , GhatGPT} from './Screens/WebView';
import NetInfo from "@react-native-community/netinfo";
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import LogedInHome from './Screens/LogedInHome';


const stack = createStackNavigator();

const app = () => {

  const [netAvailibilityMsg , setNetAvailibilityMsg] = useState("");
  
  const [visible, setVisible] = useState(false);
  const toggleAlert = useCallback(() => {
      setVisible(!visible);
  }, [visible]);

  // SPLASH SCREEN
  useEffect(()=>{
    SplashScreen.hide();
  },[]);

  // Testing Net Availibnibty
  NetInfo.fetch().then(state => {
    if (state.isConnected){
      setNetAvailibilityMsg(val => val = "")
    } else {
      setNetAvailibilityMsg(val => val ="🌐 Internet isn\'t Available")
    }
  })


  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Login"
        screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
          headerStyle: {backgroundColor: '#0d3836'},
          headerTintColor: '#25857f',
          headerTitleStyle: {fontWeight: 'bold'},
          }}>
      <stack.Screen name="Home" component={Home} options={{
          headerTitle: 'ABID',
          headerRight: () => (
            <View style={{marginHorizontal:10}}>
              <Button
                onPress={toggleAlert}
                title="DEVELOPER"
                color="#25857f"/>
                <FancyAlert
                  style={{ backgroundColor: '#fff'}}
                  visible={visible}
                  icon={<View style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d6794', borderRadius: 50, width: '100%',}}>
                          <TouchableOpacity onPress={toggleAlert}>
                              <Text style={{color:'#fff' , fontSize:30 }}>👨‍💻</Text>
                          </TouchableOpacity>
                      </View>}>
                  <Text style={{ marginTop: -16, marginBottom: 32, color:'#0d6794' , fontWeight:'bold' }}>DEVELOVERS</Text>
                  <Text style={{ marginTop: -16, marginBottom: 32, color:'#0d6794' , fontWeight:'bold' }}>Born To Develope</Text>
                  <TouchableOpacity style={styles.btn} onPress={toggleAlert}>
                      <Text style={styles.btnText}>Stay Focused</Text>
                  </TouchableOpacity>
                </FancyAlert>
              </View>
          )
        }}/>
        <stack.Screen name="ColorPallet" component={ColorPallet} options={({ route }) => ({ title: route.params.Name })}/>
        <stack.Screen name="Test" component={Test} />
        <stack.Screen name="MyWeb" component={MyGiHubWebView} />
        <stack.Screen name="GhatGPT" component={GhatGPT} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="SignUp" component={SignUp} initialParams={{internet:netAvailibilityMsg}}/>
        <stack.Screen name="LogedInHome" component={LogedInHome} options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignSelf: 'stretch',
    backgroundColor: '#0d6794',
    marginTop:6,
    marginBottom:3,
    minWidth: '50%',
    paddingHorizontal: 16,
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight:'bold',
  },
});


export default app;
