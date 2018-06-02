import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class Header extends Component{
    static propTypes = {
        themeColor: PropTypes.string
    }
    render(){
        return (
            <div style={{color:this.props.themeColor}}>
                this is header
            </div>
        )
    }
}
