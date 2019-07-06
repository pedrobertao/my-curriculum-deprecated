import React from 'react';
import { Item, Icon } from 'semantic-ui-react'

const profileImg = require('../../assets/profile.png');

const profileHeader = () => {
    let imageSize = !window.innerWidth < 500 ? 'medium' : 'mini';
    return (
        <Item.Group>
            <Item>
                <Item.Image circular avatar size={imageSize} src={profileImg}/>
                <Item.Content verticalAlign='middle'>
                    <Item.Header>Pedro Henrique Bertão Matos</Item.Header>
                    <Item.Extra><Icon name='code' />Engenheiro de Software pleno at <a href="https://getty.io/">Getty/io</a></Item.Extra>
                    <Item.Extra><Icon name='hand rock' />Blockchain Entusiasta</Item.Extra>
                    <Item.Extra><Icon name='world' />Aspirante a empreendedor</Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default profileHeader;