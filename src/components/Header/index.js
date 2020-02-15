import React from 'react'
import "./styles.css"


class Header extends React.Component {
    render() {
        return <header id="main-header">{this.props.title}</header>
    }
}

export default Header;