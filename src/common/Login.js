import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ToastAndroid, ScrollView,Dimensions} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
const {width,scale} = Dimensions.get('window');
const s = width;
export default class Login extends Component {
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
    login = ()=>{
      if(this.state.username!='' && this.state.pwd!=''){
        this.setState({isloading:true})
            // 根据返回状态进行判断，正确时跳转首页
            // if(res){

            // }
            AsyncStorage.getItem('user')
            .then(res=>{
              let user = JSON.parse(res)
              if(this.state.username==user.username && this.state.pwd==user.pwd){
              this.setState({isloading:false})
              ToastAndroid.show('登录成功',ToastAndroid.TOP);
              AsyncStorage.setItem('user',JSON.stringify({username:this.state.username,pwd:this.state.pwd,token:"0"}))
              Actions.homePage();}
              else{
                this.setState({isloading:false})
                ToastAndroid.show('密码输入错误',ToastAndroid.TOP);
              }
            })
      }
      else{
        ToastAndroid.show('输入不能为空！',ToastAndroid.TOP);
      }
    } 
  render() {
    return (
      // <ScrollView>
      <View style={{flex: 1,justifyContent: 'center'}}>
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
                    width: s*0.8,
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.login}>
                <Text>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Actions.register()}}>
              <Text style={{marginTop:20,color:'blue'}} >还没有账号？去注册</Text>
            </TouchableOpacity>
        </View>
        {
            this.state.isloading
            ?<View><Text>正在登录</Text></View>
            :null
        }
        
      </View>
      // </ScrollView>
    );
  }
}