import React from 'react';
import {  Segment, Menu, Container, Icon } from 'semantic-ui-react'

import tl from '../../utils/translations'

const style = {
   wrapper: {position: 'fixed',
    bottom: 0, 
    width: '100%',
    margin: '2em 0em 0em 0em', 
    borderRadius: 0
    },
    contact: { 
        color: 'white', 
        fontSize: '1.3em'
    }
}
const footer = () => {
    return (
        <Segment
            inverted
            style={style.wrapper}
        >
            <Container textAlign='center'>
                <Menu.Item header>
                    <a style={style.contact} href='mailto:pedrobertao11@hotmail.com?subject="Gostaria de saber sobre"'> 
                    <Icon name='mail' />{tl.t('contact')}
                    </a>
                </Menu.Item>
            </Container>
        </Segment>
    )
}

export default footer;