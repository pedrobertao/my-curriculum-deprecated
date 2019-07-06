import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react'

import ProfileHeader from '../ProfileHeader/ProfileHeader';

import tl from '../../utils/translations'

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
                <Container text style={{ fontFamily: 'Ubuntu', marginBottom: '4em', marginTop: '3em' }}>
                    <ProfileHeader />
                    <Segment.Group>
                        <Segment><h2>{tl.t('education')}</h2></Segment>
                        <Segment.Group>
                            <Segment>Universidade Federal de Itajubá 2013-2018</Segment>
                            <Segment>California State University, Sacramento 06/2015-08/2016</Segment>
                        </Segment.Group>
                    </Segment.Group>
                    <Segment.Group>
                        <Segment><h2>Experiências Profissionais</h2></Segment>
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
                                        <h3>{tl.t('experience.thelatest.title')}</h3>
                                        {tl.t('experience.thelatest.description')}                                   
                                        </Container>
                                </Segment>
                            </div>
                            <div>
                                <Segment>
                                    <Container>
                                        <h3> PandôApps – Programador front/backend de aplicativos (2017)</h3>
                                        Atualmente estou trabalhando como programador de Front e Backend na empresa <a href="https://www.pandoapps.com.br/">Pandô Apps</a>. O projeto que estou envolvido é
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