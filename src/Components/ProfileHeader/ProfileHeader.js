import React from 'react';
import { Item, Icon } from 'semantic-ui-react'

import tl from '../../utils/translations'

const profileImg = require('../../assets/profile.png');

const profileHeader = () => {
    let imageSize = !window.innerWidth < 500 ? 'medium' : 'mini';
    return (
        <Item.Group>
            <Item>
                <Item.Image circular avatar size={imageSize} src={profileImg}/>
                <Item.Content verticalAlign='middle'>
                    <Item.Header>Pedro Henrique Bertão Matos</Item.Header>
                    <Item.Extra><Icon name='code' />{tl.t('maininfo.job')} <a href='https://getty.io/'>Getty/io</a></Item.Extra>
                    <Item.Extra><Icon name='block layout' />{tl.t('maininfo.blockchain')}</Item.Extra>
                    <Item.Extra><Icon name='hand rock' />{tl.t('maininfo.esport')}</Item.Extra>
                    <Item.Extra><Icon name='world' />{tl.t('maininfo.ent')}</Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default profileHeader;