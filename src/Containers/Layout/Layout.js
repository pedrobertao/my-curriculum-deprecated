import React, { Component } from 'react';
import { Icon,  Menu,Sidebar, } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import Footer from '../../Components/Footer/Footer'
import LanguageDropdown from '../../Components/LanguageDropdown';

import tl from '../../utils/translations'

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
            <React.Fragment>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='overlay' width='thin' visible={this.state.sideBar} icon='labeled' vertical inverted>
                        <Menu.Item onClick={() => this.navigateSideBar('/')} name='MyPortfolio'>
                            <Icon name='home' />
                            {tl.t('myport')}
                    </Menu.Item>
                        <Menu.Item onClick={() => this.navigateSideBar('/about-me')} name='About Me'>
                            <Icon name='male' />
                            {tl.t('aboutme')}
                    </Menu.Item>
                    <Menu.Item>
                    <LanguageDropdown short />
                </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        {<Toolbar SideBarHandler={this.sideBarOpenHandler} />}
                        <div onClick={this.sideBarCloseHandler}>
                            {this.props.children}
                        </div>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                <Footer />
            </React.Fragment>
        )
    }
}

export default withRouter(Layout);