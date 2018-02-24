import React from 'react';
import { Item, Icon } from 'semantic-ui-react'

const profileHeader = (props) => {
    let imageSize = window.innerWidth < 500 ? 'tiny' : 'medium';
    return (
        <Item.Group>
            <Item>
                <Item.Image bordered circular size={imageSize} src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmlAAAAJGY5YzAwYjFiLWFmM2QtNGUxYi04OWZkLWRlZDVlYmExYmExOQ.jpg' />
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