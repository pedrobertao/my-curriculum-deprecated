import React from 'react';
import {
    Segment, Menu, Container, Icon
} from 'semantic-ui-react'

const footer = (props) => {
    return (
        <Segment
            inverted
            style={{ position: 'fixed', bottom: 0, width: '100%', margin: '2em 0em 0em 0em', borderRadius: 0 }}
        >
            <Container textAlign='center'>
                <Menu.Item header>
                    <a style={{ color: 'white', fontSize: '1.3em' }} href='mailto:pedrobertao11@hotmail.com?subject="Gostaria de saber sobre"'> <Icon name='mail' />Contact</a>
                </Menu.Item>
            </Container>
        </Segment>
    )
}

export default footer;