import React, { Component } from 'react'
import { Text, View ,TextInput,Image,ScrollView, StyleSheet,Dimensions,FlatList} from 'react-native'
import Button from 'react-native-button';
import { Icon } from '@ant-design/react-native'
const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
    slide:{
        width: width,
        height: 200,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lists:{
        width:width,
        height:85,
        backgroundColor:'#ffffff',
        marginTop:6,
        alignItems:'center',
        flexDirection:'row'
    },
    btn:{
        width:width*0.8,
        height:45,
        backgroundColor:'#f23030',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6,
        color:'white',
        // marginLeft:width*0.1,
        paddingTop:10,
        marginTop:20
    }
})
const lists = [
    {
        title: '居家维修保养',
        img: require('../../assets/baoyang.png')
    },
    {
        title: '住宿优惠',
        img: require('../../assets/zhusu.png')
    },
    {
        title: '出行接送',
        img: require('../../assets/chuxing.png')
    },
    {
        title: 'E族活动',
        img: require('../../assets/huodong.png')
    },    
]
export default class Home extends Component {
    constructor(){
        super();
        let data = [];
        for(var i=0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data
        }
    }
    render() {
        return (
            <ScrollView>
            <View>
                <View style={{
                        flexDirection:'row',
                        height:60,
                        backgroundColor:'#f23030'
                        }}
                >
                    <View style={{
                        width:width*0.8,
                        height:40,
                        backgroundColor:'#fbb8b8',
                        borderRadius:20,
                        flexDirection:'row',
                        alignItems:'center',
                        paddingLeft:width*0.05,
                        marginRight:width*0.02,
                        marginLeft:width*0.05,
                        marginTop:12
                        }}
                    >
                        <Icon name='search' size='md' style={{color:'white'}}/>
                        <TextInput style={{fontSize:15}}
                         placeholderTextColor='white' 
                         placeholder={'请输入您想要搜索的关键字'}
                        />
                    </View>
                    <Icon name='car' size='lg' color='white' style={{marginTop:18,marginLeft:width*0.02}}/>
                </View>
                <ScrollView 
                    pagingEnabled={true} 
                    horizontal={true}
                    style={{height:200}}
                >
                    <View style={styles.slide}>
                        <Image source={require('../../assets/zhuanxiang.jpg')}></Image>
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/zhongchou.jpg')}></Image>
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/zhuanxiang.jpg')}></Image>
                    </View>
                </ScrollView>
                <FlatList 
                    style={{backgroundColor: '#f5f5f5'}}
                    data={lists}
                    numColumns={1}
                    renderItem={({item})=>(
                        <View style={styles.lists}>
                            <Image 
                                resizeMode="contain"
                                source={item.img}
                                style={{width:width*0.2,height:80,marginLeft:width*0.05}}
                            />
                            <Text style={{marginLeft:width*0.08,fontSize:16,color:'#333333'}}>{item.title}</Text>
                            
                        </View>
                    )}
                />
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Button style={styles.btn}>发布需求</Button>
                <Text style={{marginTop:35,color:'grey',fontSize:12}}>E族之家 版权所有</Text>               
                </View>
            </View>
            </ScrollView>
        )
    }
}
