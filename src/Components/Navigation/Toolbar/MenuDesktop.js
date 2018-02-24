import React from 'react';
import {
    Button, Container, Icon, Image, Item, Menu, Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const menuDesktop = (props) => {
    return (
        <Container>
            <Menu.Item header>
                <Link to='/'> <Icon name='home' />MyPortfolio</Link>
            </Menu.Item>
            <Menu.Item header>
                <Link to="/about-me"><Icon name='male' /> About Me</Link>
            </Menu.Item>
            {/* <Menu.Item onClick={this.fetchDownload} position="right">
                    <Icon name='download' />
                    Resume</Menu.Item> */}
            <Menu.Menu position="right">
                <Menu.Item header onClick={this.fetchDownload}>
                    <a href="https://www.github.com/pedrobertao">GitHub <Icon name='github square' /></a>
                </Menu.Item>
                <Menu.Item headeronClick={this.fetchDownload}>
                    <a href="https://www.linkedin.com/in/pedro-bert%C3%A3o-7a574a87/">LinkedIn <Icon name='linkedin square' /></a></Menu.Item>
            </Menu.Menu>
        </Container>
    )
}

export default menuDesktop;