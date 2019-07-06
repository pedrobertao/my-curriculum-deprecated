import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react'

import ProfileHeader from '../ProfileHeader/ProfileHeader';

import tl from '../../utils/translations'

class Profile extends Component {
    render() {
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
                        <Segment><h2>{tl.t('experience.title')}</h2></Segment>
                        <Segment.Group>
                            <Container>
                                <Segment>
                                    <h3>{tl.t('experience.aiesec.title')}</h3>
                                    {tl.t('experience.aiesec.description')}
                                </Segment>
                            </Container>
                            <Segment>
                                <Container>
                                    <h3>{tl.t('experience.thelatest.title')}</h3>
                                    {tl.t('experience.thelatest.description')}                                   
                                    </Container>
                            </Segment>
                            <Segment>
                                <Container>
                                    <h3>{tl.t('experience.pando.title')}</h3>
                                    {tl.t('experience.pando.description')}
                                </Container>
                            </Segment>
                            <Segment>
                            <Container>
                                <h3>{tl.t('experience.getty.title')}</h3>
                                {tl.t('experience.getty.description')}
                                </Container>
                            </Segment>
                        </Segment.Group>
                    </Segment.Group>
                </Container>
            </div>
        )
    }
}

export default Profile;