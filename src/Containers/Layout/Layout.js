import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import {
    Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div>
                <Menu fixed="top" inverted>
                    <Container>
                        <Menu.Item header>
                            <Link to='/'> <Icon name='home' />MyPortifolio</Link>
                        </Menu.Item>
                        <Menu.Item as='a' header>
                            <Icon name='male' />
                            Sobre Mim
                        </Menu.Item>
                        <Menu.Item as='a' position="right">
                            <Icon name='download' />
                            Resume</Menu.Item>
                    </Container>
                </Menu>
                {this.props.children}

            </div>
        )
    }
}

export default Layout;