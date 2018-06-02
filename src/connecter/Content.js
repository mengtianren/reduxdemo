// import React, {Component} from 'react'
import {connect} from 'react-redux'
import Content from '../components/Content'



const mapStateProps = (state) =>{
    return {
        themeColor:state.themeColor
    }
}


export  default connect(mapStateProps)(Content)
