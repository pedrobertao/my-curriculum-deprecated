import React, { Component } from 'react';
import { Container, Card, Icon, Image, Segment, Feed, Item } from 'semantic-ui-react'
import Aux from '../../hoc/Aux';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import Slider from 'react-slick';

class Profile extends Component {
    render() {

        var settings = {
            dots: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Container text style={{ marginBottom: '4em', marginTop: '3em' }}>
                    <Item.Group>
                        <Item>
                            <Item.Image circular size='medium' src='https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-9/12313840_10207641767979948_7805233275075676184_n.jpg?oh=0cdbec1c32a598f26547d532acfeea32&oe=5B185F0B' />
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

                    <Segment.Group>
                        <Segment>Formação Acadêmica</Segment>
                        <Segment.Group>
                            <Segment>Universidade Federal de Itajubá - 2013-Atual</Segment>
                            <Segment>California State University, Sacramento - 06/2015-08/2016</Segment>
                        </Segment.Group>
                    </Segment.Group>
                    <Segment.Group>
                        <Segment>Experiências Profissionais</Segment>
                        <Segment.Group>
                            <div>
                                <Container>
                                    <Segment>
                                        <h3>AIESEC – Diretor de Intercâmbios Internacionais (2014)</h3>
                                        Durante o ano de 2014 fiz parte da empresa global AIESEC com o objetivo de exercitar minhas habilidades de liderança, gestão,
                                            e trabalho de equipe. Meu trabalho principal realizado na AIESEC era de coordenar um time de 3 estudantes com o objetivo de
                                            oferecer intercâmbios internacionais advindos da organização para estudantes de todas faculdades do sul de Minas Gerais. Esse
                                            trabalho elevou meus conhecimentos relacionados à liderança e gestão de pessoas, além de me ensinar elementos chaves na área
                                            de administração.
                                    </Segment>
                                </Container>
                            </div>
                            <div>
                                <Segment>
                                    <Container>
                                        <h3>The Latest (StartUp) – Programador e Desenvolvedor de aplicação móvel (05-2016/07-2016) </h3>
                                        Trabalhei durante dois meses na StartUp <a href="https://www.thelastest.com">The Latest</a> como programador e desenvolvedor de aplicação móvel. Meu trabalho tinha
                                    como principal objetivo desenvolver um aplicativo para o site da empresa. A empresa estava perto de lançar seu produto final e
                                    fui encarregado de desenvolver o aplicativo para sistema android durante meu período lá. Foi uma ótima oportunidade para
                                    aprender sobre o mundo das StartUps e vivenciar um ambiente americano de empresa.

                                        </Container>
                                </Segment>
                            </div>
                            <div>
                                <Segment>
                                    <Container>
                                        <h3> PandôApps – Programador front/backend de aplicativos (2017)</h3>
                                        Atualmente estou trabalhando como programador de Front e Backend na empresa<a href="https://www.pandoapps.com.br/">Pandô Apps</a>. O projeto que estou envolvido é
                                            responsável por rastreamento de objetos de alto valor monetário. Minhas funções variam entre desenvolvimento do design, lógica
                                            e funcionalidades no frontend. No backend trabalhamos com Node.JS e Postgresql para o servidor e banco de dados da aplicação
                                            respectivamente. Este trabalho está sendo uma excelente oportunidade de vivenciar um ambiente de desenvolvimento ambicioso e
                                            desafiador. Além disso, também me ajuda a desenvolver minhas habilidades como engenheiro de software no geral, elevando
                                            minhas noções de demanda, qualidade e fabricação de softwares.
                                        </Container>
                                </Segment>
                            </div>
                        </Segment.Group>
                    </Segment.Group>
                </Container >
            </div>
        )
    }
}

export default Profile;