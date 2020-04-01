import React, { Component } from 'react'
import { Text, View,ToastAndroid, ScrollView,Dimensions} from 'react-native'
import { Icon, Button } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'
const {width} = Dimensions.get('window')
const s = width;
export default class Fabu extends Component {
    constructor(){
        super();
        this.state={
            titles:[],
            page:1,
            isloading:false       
        }
    }
    componentDidMount(page){
        this.setState({
            isloading:true
        })
        fetch('https://cnodejs.org/api/v1/topics?page='+page+'&limit=10')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    titles: res.data,
                    isloading:false
                });
            })
    }
    prevPage =(page) =>{
        page=this.state.page-1;
        if(page == 0){
            ToastAndroid.show('没有上一页', 20000)
        }
        else{
            fetch('https://cnodejs.org/api/v1/topics?page='+page+'&limit=10')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    titles: res.data,
                    page:page,
                    isloading:false
                })
            })
        }    
    }
    nextPage = (page) =>{
        page++;
        fetch('https://cnodejs.org/api/v1/topics?page='+page+'&limit=10')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    titles: res.data,
                    page:page,
                    isloading:false
                })
            })
    }
    color=()=>{
        const items=['已回复','待回复']
        if(items[Math.floor(Math.random()*items.length)]=='待回复'){
            return <Text style={{color:'red'}}>待回复</Text>;
        }
        else{
            return <Text style={{color:'black'}}>已回复</Text>;
        }
    }
    render() {
        return (
            <ScrollView>
            <View style={{backgroundColor:'white'}}>
                <View style={{
                    width:s,
                    height:60,
                    backgroundColor:'#f23030',
                    alignItems:'center',
                    flexDirection:'row',
                    justifyContent:'center'
                }}>
                    <Icon name='left' style={{marginLeft:s*0.02,color:'white'}} onPress={()=>Actions.pop()}/>
                    <Text style={{color:'white',fontSize:20,marginLeft:'30%'}}>我的发布</Text>
                    <Icon name='menu' style={{marginLeft:s*0.3,color:'white'}}/>
                </View>
                <View>
                    {
                        this.state.titles.map((item)=>(
                            <View style={{marginLeft:s*0.02,flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#eeeeee',height:50,backgroundColor:'white'}}>
                                <Text style={{fontSize:16,width:s*0.55}}>{item.title.substr(0,15)}...</Text>
                                <Text style={{marginLeft:s*0.05,float:'right',width:s*0.25}}>{item.create_at.slice(0,10)}</Text>
                                {this.color()}
                            </View>
                        ))
                    }
                    {
                        this.state.isloading
                        ?<View style={{alignItems:'center'}}><Text>正在努力加载中</Text></View>
                        :null
                    }
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:100}}>
                    <Button style={{width:s*0.3,height:40,border:0,borderRadius:28,backgroundColor:'#f23030'}}
                    onPress={()=>{this.prevPage()}} >
                        <Text style={{color:'white'}}>上一页</Text>
                    </Button>
                    <Text style={{marginLeft:s*0.08}}>第{this.state.page}页</Text>
                    <Button style={{width:s*0.3,height:40,border:0,borderRadius:28,backgroundColor:'#f23030',marginLeft:s*0.08}}
                    onPress={()=>{this.nextPage(this.state.page)}}>
                        <Text style={{color:'white'}}>下一页</Text>
                    </Button>
                </View>
            </View>
            </ScrollView>
        )
    }
}
