import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class ThemeSwitch extends Component {
    static propTypes = {
        themeColor : PropTypes.string
    }
    handleSwitchColor = (color) =>{
       this.props.onSwitchColor(color)
    }
    render(){
       return(
           <div>
               <button
                   style={{color : this.props.themeColor}}
                   onClick={()=>this.handleSwitchColor('red')}
               >红色</button>
               <button
                   style={{color : this.props.themeColor}}
                   onClick={()=>this.handleSwitchColor('blue')}
               >蓝色</button>
           </div>
       )
    }
}
const mapProps = (state) =>{
    return {
        themeColor: state.themeColor
    }
}
const mapDispatchProps = (dispatch) =>{
    return {
        onSwitchColor : (color) =>{
            dispatch({
                type:'CHANGE_COLOR',
                themeColor:color
            })
        }
    }
}




export default connect( mapProps,mapDispatchProps)(ThemeSwitch)
