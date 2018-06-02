import React, {Component} from 'react'
import PropTypes from 'prop-types'

import ThemeSwitch from './ThemeSwitch'

export  default class Content extends Component {
    static propTypes = {
        themeColor:PropTypes.string
    }
    render(){
        return (
            <div style={{color : this.props.themeColor}} >
                this is content
                <ThemeSwitch />
            </div>
        )
    }
}


