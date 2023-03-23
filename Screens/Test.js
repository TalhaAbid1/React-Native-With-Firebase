import React , {useState , useCallback} from 'react';
import { View , Text , StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';

const Test = ({route , navigation}) =>{
    const Value = route.params.text;
    const [receiced , updateReceived] = useState(Value-1+1);
    // console.log();
    
    const [visible, setVisible] = useState(false);
    
    const toggleAlert = useCallback(() => {
        setVisible(!visible);
    }, [visible]);

    return(
        <View style={styles.Container}>
            
                    {/* UseState */}

            <View style={{alignSelf: 'center' ,marginTop:50}}>
                <Text style={{fontWeight:'bold', color:'#25857f', fontSize:75}}>{receiced}</Text>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:150}}>
                <TouchableOpacity onPress={()=>{ updateReceived(receiced=>receiced+1)}}>
                    <Text style={styles.ChangeValue}>Increment</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{
                        if(receiced<=0){
                            Alert.alert('Sorry Dear', 'Vlaue Can\'t be Less Then 0',);
                        }
                        else{
                            updateReceived(receiced => receiced-1)
                        }
                    }
                    }>
                    <Text style={styles.ChangeValue}>Decrement</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignSelf: 'center' ,marginTop:50 , borderColor:'#25857f', borderWidth:5 , borderRadius:9 ,padding:10}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home' , {receiced})}}>
                    <Text style={{fontWeight:'bold', color:'#25857f', fontSize:45}}>HOME</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignSelf: 'center' ,marginTop:50 , backgroundColor:'#25857f' , borderWidth:3 , borderRadius:25 ,padding:10 , elevation:7}}>
                <TouchableOpacity onPress={toggleAlert}>
                    <Text style={{fontWeight:'bold', color:'#114542', fontSize:45}}>Awesome Alert</Text>
                </TouchableOpacity>
            </View>

            <FancyAlert
                style={{ backgroundColor: '#fff'}}
                visible={visible}
                icon={<View style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d6794', borderRadius: 50, width: '100%',}}>
                        <TouchableOpacity onPress={toggleAlert}>
                            <Text style={{color:'#fff' , fontSize:30 }}>❤</Text>
                        </TouchableOpacity>
                    </View>}>
                <Text style={{ marginTop: -16, marginBottom: 32, color:'#0d6794' , fontWeight:'bold' }}>DEVELOVER</Text>
                <Text style={{ marginTop: -16, marginBottom: 32, color:'#0d6794' , fontWeight:'bold' }}>Countineous Effort Leads To Success</Text>
                <TouchableOpacity style={styles.btn} onPress={toggleAlert}>
                    <Text style={styles.btnText}>Stay Blessed</Text>
                </TouchableOpacity>
            </FancyAlert>

        </View>
    );
};

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#114542',
    },
    ChangeValue:{
        padding:15,
        fontWeight:'bold',
        backgroundColor: '#25857f',
        color:'#fff',
        alignSelf:'center',
        borderRadius:10,
    },
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

export default Test;
