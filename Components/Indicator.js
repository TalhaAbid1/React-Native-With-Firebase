import React from 'react';
import { TouchableOpacity, Text, StyleSheet, FlatList, View} from "react-native";

// const  
const Indicator = ({handlePress , DisplayName}) => {
    return (
        <View style={{flex:1}}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.DispNamze}>{DisplayName.Namez}</Text>
                    <FlatList
                        horizontal={true}
                        data={DisplayName.arrays.slice(0,7)}
                        keyExtractor={(item , index) => index}
                        renderItem={({item})=>
                        <View style={[styles.ColorPallets , {backgroundColor: item.hexCode}]}>
                        </View> 
                        }
                        />
                    {/* <View style={{height:25, width:10 , backgroundColor:'pink', alignSelf:"center"}}></View> */}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    DispNamze:{
        fontSize:35,
        color:'#000',
        fontWeight:"bold",
        marginTop:23,
        borderRadius:15,
        padding:7,
    },
    ColorPallets:{
        marginHorizontal:10,
        height:25, 
        width:30 ,
        elevation:10,
    },
});

export default Indicator;
