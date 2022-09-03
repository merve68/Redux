import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import * as $ from '../redux/actions'

export class Home extends Component {
 
    
    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:50}}>
                <TouchableOpacity onPress={()=>this.props.counterKucultme()} style={{height:20,width:20,borderWidth:1,borderColor:'gray',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:17}}>-</Text>
                </TouchableOpacity>
                <Text style={{fontSize:17,marginRight:'5%',marginLeft:'5%',color:"black"}}> Counter: {this.props.COUNTER} </Text>
                <TouchableOpacity onPress={()=>this.props.counterArttirma()} style={{height:20,width:20,borderWidth:1,borderColor:'gray',alignItems:'center',justifyContent:'center'}}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state, props) => {
    const {COUNTER} = state.default
    return {COUNTER}
}
const mapDispatchToProps = (dispatch, props) => ({
    counterKucultme: ()=>{
        dispatch({
            type:$.COUNTER_DECRASE
        })
    },
    counterArttirma: ()=>{
        dispatch({
            type:$.COUNTER_INCRASE
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)