import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ImageBackground, SafeAreaView, StatusBar, Alert, TextInput } from 'react-native'
import {WebView} from 'react-native-webview'


export default class StarMapScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
           longitude:'',
           latitude:''
        }
    }
    
    render(){
        const {longitude, latitude} = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`

        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.heading}/>
                <View style={StyleSheet.titleContainer}>
                    <Text style={styles.textContainer}>ISS Location</Text>
          
              
                <TextInput
                style={{height:40, borderColor:'gray', borderWidth:1}}
                placeholder="Enter Latitude"
                placeholderTextColor="white"
                onChange={(text)=>{
                    this.setState({
                        latitude:text
                    })
                }}
                />
                <TextInput
                style={{height:40, borderColor:'gray', borderWidth:1}}
                placeholder="Enter Longitude"
                placeholderTextColor="white"
                onChange={(text)=>{
                    this.setState({
                        longitude:text
                    })
                }}
                />
                      </View>
                  <WebView
                scalesPageToFit={true}
                source={{uri:path}}
                style={{marginTop:20,marginBottom:20}}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'purple'
    },
    heading:{
        marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
    },
    titleContainer:{
        flex:0.1,
        justifyContent:'center',
        alignItems:'center'
    },
    textContainer:{
        fontSize:25,
        fontFamily:'Georgia',
        fontWeight:'bold',
        color:'white'
    }
    
})