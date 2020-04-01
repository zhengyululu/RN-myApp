import React, { Component } from 'react'
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ToastAndroid, ScrollView,Dimensions} from 'react-native';
import { Icon, Button } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'
import {myFetch} from '../utils'
const {width,scale} = Dimensions.get('window');
const s = width;
export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    register = ()=>{
      if(this.state.username!='' && this.state.pwd!=''){
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
            // 根据返回状态进行判断，正确时跳转首页
            // if(res){

            // }
            AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({isloading:false})
                    ToastAndroid.show('注册成功',ToastAndroid.TOP);
                    Actions.login();
                })
                AsyncStorage.getItem('user')
                .then(res=>console.log(res))
        })
      }
      else{
        ToastAndroid.show('输入不能为空！',ToastAndroid.TOP);
      }
    } 
    render() {
        return (
            <ScrollView>
            <View>
                <Icon name='left' style={{marginLeft:s*0.05,marginTop:20,color:'red'}} onPress={()=>Actions.pop()}/>
                <View
                    style={{ alignItems: 'center'}}>
                    <View
                        style={{
                        width: s*0.8,
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: s*0.1,
                        marginTop:280
                        }}>
                        <Icon name="user" color="red"/>
                        <TextInput placeholder="用户名" 
                            onChangeText={this.userhandle}
                        />
                    </View>
                    <View
                        style={{
                        width: s*0.8,
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: s*0.1,
                        }}>
                        <Icon name="user" color="red"/>
                        <TextInput 
                            onChangeText={this.pwdhandle}
                            placeholder="密码" 
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity 
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={this.register}>
                        <Text>注册</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        )
    }
}
