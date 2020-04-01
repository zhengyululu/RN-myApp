import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    Image ,
    Dimensions
} from 'react-native'
import {Gird,Icon} from '@ant-design/react-native';
const {width,scale} = Dimensions.get('window');
const s = width;
const styles = StyleSheet.create({
    box:{
        width:s*0.46,
        height:320,
        backgroundColor:'white',
        marginTop:8,
        padding:26
      },
    text:{
        marginRight:s*0.08,
        fontSize:18,
        marginTop:25,
        color:'#747474'
    }
});

export default class Goods extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <View style={{
                        height:130,
                        marginTop:10,
                        alignItems:'center',
                        backgroundColor:'white',
                        width:s
                    }}>
                        <View style={{
                            width:s*0.85,
                            backgroundColor:'#eeeeee',
                            borderRadius:8,
                            flexDirection:'row',
                            alignItems:'center',
                            paddingLeft:20,
                            marginRight:10
                        }}>
                            <TextInput placeholderTextColor='#b8b8b8' placeholder={'请输入商品名称'}/>
                            <Icon style={{marginLeft:s*0.4}} name='search'/>
                        </View>
                        <View style={{
                            flexDirection:'row',
                            // alignItems:'center',
                            // width:s*0.9                        
                        }}>
                            <Text style={styles.text}>综合</Text>
                            <Text style={styles.text}>销量</Text>
                            <Text style={styles.text}>新品</Text>
                            <Text style={styles.text}>价格</Text>
                            <Text style={styles.text}>信用</Text>
                        </View>                        
                    </View>
                <ScrollView>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-evenly',
                        flexWrap:'wrap',
                        backgroundColor:'#f4f4f4',
                        height:1120
                    }}>
                        <View style={styles.box}>
                            <Image style={{width:s*0.33,height:200}} source={require('../../assets/ymj.jpg')}/>
                            <Text style={{marginTop:20,color:'#747474'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={{color:'red',marginTop:10}}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={{width:s*0.36,height:200}} source={require('../../assets/sp.jpg')}/>
                            <Text style={{marginTop:20,color:'#747474'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={{color:'red',marginTop:10}}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={{width:s*0.33,height:200}} source={require('../../assets/ymj.jpg')}/>
                            <Text style={{marginTop:20,color:'#747474'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={{color:'red',marginTop:10}}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={{width:s*0.36,height:200}} source={require('../../assets/sp.jpg')}/>
                            <Text style={{marginTop:20,color:'#747474'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={{color:'red',marginTop:10}}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={{width:s*0.33,height:200}} source={require('../../assets/ymj.jpg')}/>
                            <Text style={{marginTop:20,color:'#747474'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={{color:'red',marginTop:10}}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={{width:s*0.36,height:200}} source={require('../../assets/sp.jpg')}/>
                            <Text style={{marginTop:20,color:'#747474'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={{color:'red',marginTop:10}}>36.00</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
