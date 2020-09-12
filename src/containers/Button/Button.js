import React, { Component } from 'react'
import styles from './Button.module.css'

export class Button extends Component {
    
    state = {
        clicked:false
    }

    afterClick = ()=>{
        alert("hi");
        this.setState({clicked:true});
    }
    render() {
        return (
            <div className={styles.Button} style={{backgroundcolor:this.props.backgroundColor}} onClick = {this.afterClick}>
                <p className={styles.ButtonText}>Chess Rocks</p>
            </div>
        )
    }
}

export default Button
