import React, { Component } from 'react'
import { Text, View,Dimensions, Image, FlatList, TouchableOpacity,AsyncStorage, ScrollView} from 'react-native'
import { Icon } from '@ant-design/react-native'
import Button from 'react-native-button';
// 引入ImagePicker、AsyncStorage
import ImagePicker from 'react-native-image-picker';
import {Actions } from 'react-native-router-flux';
import Fabu from './Fabu'
const {width} = Dimensions.get('window')
const s = width;
const user=[
    {
        title:'账户管理',
        icon:require('../../assets/set.jpg')
    },
    {
        title:'收货地址',
        icon:require('../../assets/position.jpg')
    },
    {
        title:'我的信息',
        icon:require('../../assets/card.jpg')
    },
    {
        title:'我的订单',
        icon:require('../../assets/set.jpg')
    },
    {
        title:'我的二维码',
        icon:require('../../assets/position.jpg')
    },
    {
        title:'我的积分',
        icon:require('../../assets/card.jpg')
    },
    {
        title:'我的收藏',
        icon:require('../../assets/set.jpg')
    }
]
const activity=[
    {
        title:'居家维修保养',
        icon:require('../../assets/set.jpg'),
        id:'baoyang'
    },
    {
        title:'出行接送',
        icon:require('../../assets/position.jpg'),
        id:'jiesong'
    },
    {
        title:'我的受赠人',
        icon:require('../../assets/card.jpg'),
        id:'shouzeng'
    },
    {
        title:'我的住宿优惠',
        icon:require('../../assets/set.jpg'),
        id:'youhui'
    },
    {
        title:'我的活动',
        icon:require('../../assets/position.jpg'),
        id:'huodong'
    },
    {
        title:'我的发布',
        icon:require('../../assets/card.jpg'),
        id:'fabu'
    } 
]
const options = {
    title: '选择图片', 
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '选择照片', 
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

export default class Userinfor extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            imageUrl:require('../../assets/touxiang.jpg')
        }
    }
//本地取图片数据
    componentDidMount(){
        var getData=()=>{
            AsyncStorage.getItem('imgUrl')
            .then((res)=>{
                this.setState({
                    imageUrl:JSON.parse(res)
                })
            })
        }
        getData();

    }
//拍照函数
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
              const source = { uri: response.uri };
              this.setState({
                imageUrl: source,
              });
            //将图片存到本地
              var storeImg=async ()=>{
                const source1 = JSON.stringify(source);
                await AsyncStorage.setItem('imgUrl',source1,
                ()=>{console.log('store success')}
                )}
                storeImg();
            }
          });
    }
    render() {
        return (
            <ScrollView>
            <View> 
                {/* 点击调用拍照函数  */}
                <View style={{width:s,height:220,backgroundColor:'#f23030',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity  onPress={()=>{this.takephoto()}}>
                        <Image style={{width:s*0.22,height:100}} source={this.state.imageUrl}/>           
                    </TouchableOpacity>
                    <Text  style={{color:'white',fontSize:18,marginTop:10}}>BINNU DHILLON</Text>
                </View>
                <View>
                    <View style={{flexDirection:'row',borderBottomWidth:0.4,borderBottomColor:'#eeeeee',backgroundColor:'white',height:35}}>
                        <Icon name='user' size='md' style={{marginTop:8,marginLeft:s*0.02}}/>
                        <Text style={{fontSize:15,marginLeft:s*0.02,marginTop:8}}> 我的个人中心 </Text>
                    </View>
                    <View style={{backgroundColor:'white',height:220}}>
                        <FlatList
                            numColumns={3}
                            data={user}
                            renderItem={({item})=>(
                                <View style={{
                                    width:width*0.22,
                                    marginLeft:width*0.1,
                                    marginTop:8,
                                    height:65,
                                    alignItems:'center',
                                    justifyContent:'center'
                                    }}>
                                    <Image source={item.icon} style={{width:s*0.05,height:25}}/>
                                    <Text>{item.title}</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>
                <View style={{marginTop:8}}>
                    <View style={{flexDirection:'row',borderBottomWidth:0.4,borderBottomColor:'#eeeeee',backgroundColor:'white',height:35}}>
                        <Icon name='user' size='md' style={{marginTop:8,marginLeft:s*0.02}}/>
                        <Text style={{fontSize:15,marginLeft:s*0.02,marginTop:8}}>E族活动</Text>
                    </View>
                    <View style={{backgroundColor:'white',height:170}}>
                        {/*点击我的发布跳转到我的发布页面 */}
                        <FlatList
                            numColumns={3}
                            data={activity}
                            renderItem={({item})=>(
                                <TouchableOpacity onPress={()=>{
                                    if(item.id=='fabu'){
                                        Actions.fabu();
                                    }}}>
                                    <View style={{
                                        width:width*0.22,
                                        marginLeft:width*0.1,
                                        marginTop:8,
                                        height:65,
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}>
                                        <Image source={item.icon} style={{width:s*0.05,height:25}}/>
                                        <Text>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>               
                <View style={{height:100}}>
                    <Button style={{
                        width:s*0.7,
                        height:42,
                        backgroundColor:'#f23030',
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius:6,
                        color:'white',
                        marginLeft:s*0.15,
                        paddingTop:10,
                        marginTop:20}} onPress={()=>{
                            console.log('out')
                            Actions.login();
                            AsyncStorage.getItem('user')
                            .then((res)=>{res=JSON.parse(res);
                                // console.log(res.pwd);
                                this.setState({username:res.username,pwd:res.pwd})
                                AsyncStorage.setItem('user',JSON.stringify({username:this.state.username,pwd:this.state.pwd,token:"0"}))
                                console.log(this.state.pwd)
                            }
                            )
                            
                            AsyncStorage.getItem('user').then(res=>console.log(res))
                        }}>
                    退出登录</Button>
                </View>
            </View>
            </ScrollView>
        )
    }
}
