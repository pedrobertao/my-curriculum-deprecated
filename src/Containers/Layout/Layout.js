import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import {
    Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Layout extends Component {

    fetchDownload = () => {
        window.location.href = 'http://localhost:5000/api/pdf';
    }
    render() {
        return (
            <div>
                <Menu fixed="top" inverted>
                    <Container>
                        <Menu.Item header>
                            <Link to='/'> <Icon name='home' />MyPortifolio</Link>
                        </Menu.Item>
                        <Menu.Item header>
                            <Icon name='male' />
                            <Link to="/about-me">Sobre Mim</Link>
                        </Menu.Item>
                        <Menu.Item onClick={this.fetchDownload} position="right">
                            <Icon name='download' />
                            Resume</Menu.Item>
                    </Container>
                </Menu>
                {this.props.children}
                <Segment
                    inverted
                    style={{ position: 'fixed', bottom: 0, width: '100%', margin: '2em 0em 0em 0em', borderRadius: 0 }}
                >
                    <Container textAlign='center'>
                        <Menu.Item header>
                            <a href='mailto:pedrobertao11@example.com?subject="Gostaria de saber sobre"'> <Icon name='mail' />Contact</a>
                        </Menu.Item>

                    </Container>
                </Segment>

            </div >
        )
    }
}

export default Layout;