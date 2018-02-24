import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import {
    Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Sidebar,
} from 'semantic-ui-react'
import { Link, Redirect, withRouter } from 'react-router-dom';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import Footer from '../../Components/Footer/Footer'

class Layout extends Component {

    state = {
        sideBar: false
    }
    fetchDownload = async () => {
        window.location.href = 'http://localhost:5000/api/pdf';
    }

    sideBarOpenHandler = () => {
        this.setState({ sideBar: !this.state.sideBar })
    }

    sideBarCloseHandler = () => {
        this.setState({ sideBar: false })
    }
    navigateSideBar = (route) => {
        this.props.history.push(route);
        this.setState({ sideBar: false })
    }

    render() {
        return (
            <Aux>
                <Sidebar.Pushable >
                    <Sidebar as={Menu} animation='overlay' width='thin' visible={this.state.sideBar} icon='labeled' vertical inverted>
                        <Menu.Item onClick={() => this.navigateSideBar('/')} name='MyPortfolio'>
                            <Icon name='home' />
                            MyPortfolio
                    </Menu.Item>
                        <Menu.Item onClick={() => this.navigateSideBar('/about-me')} name='About Me'>
                            <Icon name='male' />
                            About Me
                    </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        {<Toolbar SideBarHandler={this.sideBarOpenHandler} />}
                        <div onClick={this.sideBarCloseHandler}>
                            {this.props.children}
                        </div>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                {<Footer />}
            </Aux>
        )
    }
}

export default withRouter(Layout);