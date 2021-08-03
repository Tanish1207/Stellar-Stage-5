import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar, ImageBackground, Image } from 'react-native'


export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <SafeAreaView style={styles.heading}

                />
                <ImageBackground style={styles.backgroundImage} source={require('../assets/stars.gif')}>
                    <View style={styles.titleBar}>
                        <Text style={styles.textContainer}>
                            ISS Tracker App 
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate("SpaceCraftsScreen")
                    }}>
                        <Text style={styles.routeText}>
                            ISS Location
                        </Text>
                        <Text style={styles.knowText}>
                            {"KNOW MORE ---->"}
                        </Text>
                        <Image

                        source={require("../assets/space_crafts.png")}
                        style={styles.iconImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate("StarMapScreen")
                    }}>
                        <Text style={styles.routeText}>
                            Star Map
                        </Text>
                        <Text style={styles.knowText}>
                            {"KNOW MORE ---->"}
                        </Text>
                        <Image
                        source={require("../assets/star_map.png")}
                        style={styles.iconImage}
                        />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate("DailyPicScreen")
                    }}>
                        <Text style={styles.routeText}>
                            Daily Pic
                        </Text>
                        <Text style={styles.knowText}>
                            {"KNOW MORE ---->"}
                        </Text>
                        <Image
                        source={require("../assets/daily_pictures.png")}
                        style={styles.iconImage}
                        />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({
     heading:{
         marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
     },
     titleBar:{
         justifyContent:'center',
         alignItems:'center',
         flex:0.15,
         color:'white'
     },
     textContainer:{
         fontSize:24,
         fontFamily:'Georgia',
         fontWeight:'bold',
         color:'white'
     },
     routeCard:{
        flex:0.25,
        marginTop:50,
        marginLeft:50,
        marginRight:50,
        borderRadius:40,
        backgroundColor:'lightblue'
    },
    routeText:{
        fontSize:18,
        paddingLeft:35,
        fontFamily:'Georgia',
        color:'black',
        fontWeight:'bold',
        marginTop:75

    },
    knowText:{
        fontSize:14,
        fontFamily:'Georgia',
        paddingLeft:35,
        color:'purple'
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    iconImage:{
        position:'absolute',
        height:130,
        width:130,
        resizeMode:'contain',
        right:20,
        top:-60
    }
})