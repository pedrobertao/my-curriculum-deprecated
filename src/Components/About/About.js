import React, { Component } from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import { Container, Card, Icon, Image, Segment, List, Item } from 'semantic-ui-react'


const About = (props) => {

    return (
        <div>
            <Container text style={{ fontFamily: 'Ubuntu', marginBottom: '4em', marginTop: '3em' }}>
                {window.innerWidth > 500 ? <ProfileHeader /> : null}
                <Segment.Group>
                    <Segment><h2>Sobre mim</h2></Segment>
                    <Segment.Group>
                        <Segment>
                            Através dos meus anos de faculdade, adquiri certas habilidades necessárias para prosperar no cenário da engenharia :
                            <br />
                            <List>
                                <List.Item icon='dashboard' content='Altamente Proativo – Sempre buscando a solução, não esperando por ela.' />
                                <List.Item icon='group' content='Trabalho de equipe - Em um projeto, um bom relacionamento entre os membros da equipe leva à um produto melhor.' />
                                <List.Item icon='settings' content='Adaptável - Capaz de se adaptar e aprender de uma forma rápida e eficiente novas capacidades e tópicos gerais.' />
                                <List.Item icon='book' content='Auto-didata - Sempre evoluindo e em busca de aumentar meu conhecimento em minha área de estudo e adjacentes.' />
                                <List.Item icon='hand rock' content='Honra e Honestidade - Ser honesto com você mesmo e todos ao seu redor para atingir resultados poderosos.' />
                                <List.Item icon='rocket' content='Resolução de Problemas - Básico para qualquer aspirante à engenheiro, minhas habilidades para a resolução de problemas só tem
                                    aumentado ao longo dos anos.Problemas são obstáculos que devem ser resolvidos de maneira rápida, com qualidade e de forma
                            eficiente. Isto é o lema de minha carreira como engenheiro.' />
                            </List>
                            <br />
                        </Segment>
                    </Segment.Group>
                </Segment.Group>
            </Container >
        </div>
    )
}

export default About;