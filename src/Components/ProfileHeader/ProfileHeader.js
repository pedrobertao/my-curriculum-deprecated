import React from 'react';
import { Item, Icon } from 'semantic-ui-react'

const profileImg = require('../../assets/profile.png');
const profileHeader = (props) => {
    let imageSize = !window.innerWidth < 500 ? 'medium' : 'mini';
    return (
        <Item.Group>
            <Item>
                <Item.Image circular avatar size={imageSize} src={profileImg}/>
                <Item.Content verticalAlign='middle'>
                    <Item.Header>
                        Pedro Henrique Bertão Matos
                            </Item.Header>
                    <Item.Extra><Icon name='student' />Estudante de Engenharia da Computação</Item.Extra>
                    <Item.Extra><Icon name='code' />Engenheiro de Software </Item.Extra>
                    <Item.Extra><Icon name='hand rock' />eSport Entusiasta</Item.Extra>
                    <Item.Extra><Icon name='world' />Aspirante a empreendedor</Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default profileHeader;