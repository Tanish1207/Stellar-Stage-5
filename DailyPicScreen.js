import React from 'react'
import { Text, View, TouchableOpacity, Image, ImageBackground, SafeAreaView, Alert, Platform, StatusBar, ScrollView, Linking, StyleSheet } from 'react-native'
import axios from 'axios'


export default class DailyPicScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            apod:[]
        }
    }
    componentDidMount(){
        this.getAPOD()
    }

    getAPOD = () =>{
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=e8nflbGQvzvTybhEjm2eCNkch3kDOPFY917Ce57s")
        .then(response=>{
            this.setState({apod:response.data})
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    renderItem=(url)=>{
        <Image source={{"url":url}} style={{width:"100%", height:350, margin:3, borderRadius:2.5}}></Image>
    }

    renderVideo=()=>{
        <TouchableOpacity style={styleSheets.videoContainer}
            onPress={()=>Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't find page", err))}>
                <View style={styles.iconContainer}>
                    <Image source={require("../assets/play-video.png")} style={{width:50, height:50}}></Image>
                </View>
        </TouchableOpacity>
    }
    render(){
        const url=this.state.url
        if(Object.keys(this.state.apod).length===0){
            return(
<View style={styles.container}>
<Text>Loading</Text>
</View>
            )
        }
        else{
            return(
                <View style={styles.container}>
                    <SafeAreaView style={styles.driodSafeArea}/>
                    <ImageBackground 
                    source={require('../assets/stars.gif')}
                    style={styles.backgroundImage}
                    >
                    <View style={styles.duocontainer}>
                        <Text style={styles.textContainer}>Daily Picture</Text>
                    </View>
                    <ScrollView style={styles.listContainer}>
                      <TouchableOpacity
                       onPress={()=>Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't find page", err))}>
                       <Image source={{"url":url}} style={{width:"100%", height:300,borderRadius:10}}></Image>
                      </TouchableOpacity>
                      <View>
                      <Text style={styles.titleText}>{this.state.apod.title}</Text>
                                <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                      </View>
                    </ScrollView>
                    </ImageBackground>
                </View>
            )
        }
    }
}


const styles=StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       width:'100%',
       height:'100%'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#ec63ff",
    },
    explanationText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        marginTop: 10
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",

    },
    videoContainer:{
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    duoContainer:{
        flex:0.3,
        justifyContent:'center',
        alignItems:'center',

    },
    textContainer:{
        textAlign:'center',
        fontFamily:'Georgia',
        fontWeight:'bold',
        fontSize:27,
        color:'white'
    }
})