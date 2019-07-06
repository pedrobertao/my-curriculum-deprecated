import React from 'react';
import { Container, Icon, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import tl from '../../../utils/translations'

const languageOptions = [
    { key: 'English', text: 'English', value: 'en' },
    { key: 'Portuguese', text: 'Português', value: 'pt' },
]

const dropdownStyle = {
    backgroundColor: 'eeeee',
    padding: 8
}
  
const menuDesktop = () => {
    const onSelectLanguage = (_,data) => {
        const {  value } = languageOptions.find(l => data.value === l.value)
        window.localStorage.setItem('language', value)
        window.location.reload()
    }
    const languageSelected = languageOptions.find(l => l.value === tl.locale).text
    return (
        <Container>
            <Menu.Item header>
                <Link to='/'> <Icon name='home' />MyPortfolio</Link>
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
                <Dropdown
                    button
                    className='icon'
                    style={dropdownStyle}
                    floating
                    labeled
                    icon='world'
                    options={languageOptions}
                    search
                    onChange={onSelectLanguage}
                    text={languageSelected}
                />
                </Menu.Item>
            </Menu.Menu>
        </Container>
    )
}

export default menuDesktop;