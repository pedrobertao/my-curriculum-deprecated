import React from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import LanguageDropdown from '../../../Components/LanguageDropdown'

import tl from '../../../utils/translations'

const menuDesktop = () => {
     return (
        <Container>
            <Menu.Item header>
                <Link to='/'> <Icon name='home' />{tl.t('myport')}</Link>
            </Menu.Item>
            <Menu.Item header>
                <Link to="/about-me"><Icon name='male' />{tl.t('aboutme')}</Link>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item header>
                    <a href="https://www.github.com/pedrobertao">
                    GitHub <Icon name='github square' />
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="https://www.linkedin.com/in/pedro-bert%C3%A3o-7a574a87/">
                    LinkedIn <Icon name='linkedin square' />
                    </a>
                </Menu.Item>
                <Menu.Item>
                <LanguageDropdown />
                </Menu.Item>
            </Menu.Menu>
        </Container>
    )
}

export default menuDesktop;