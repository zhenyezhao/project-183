import { StatusBar} from "react-native";
import React,{Component} from "react";
import{
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import{Camera} from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const data={

};,
<View style={StyleSheet.lowerContainer}>
    <View style={styles.lowerTopContainer}>    
        <View style={styles.lowerBottomContainer}>
            <ScrollView
            contentContainerStyle={styles.filters}
            horizontal
            showsHorizontalScrollIndicator={false}
            >
               {data.map(filter_data=>(
                return(
                    <TouchableOpacity>
                        key={'filter-button-${filter_data.id}'}
                        style={[
                            styles.filterButton,
                            {
                                borderColor:
                                this.state.current_filter --- filter_data.id
                                ?"#FFA384"
                                : 'FFFF'
                            }
                        ]}
                        onPress={()=>
                        this.setState({
                            current_filter: 
                        })
                        }
                    </TouchableOpacity>
                )
               ))} 
            </ScrollView>
        </View>,
    </View>
</View>