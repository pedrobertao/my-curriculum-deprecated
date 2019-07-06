import React from 'react';
import { Container, Segment, List } from 'semantic-ui-react'

import ProfileHeader from '../ProfileHeader/ProfileHeader';

import tl from '../../utils/translations'

const About = () => {
    return (
        <div>
            <Container text style={{ fontFamily: 'Ubuntu', marginBottom: '4em', marginTop: '3em' }}>
                {window.innerWidth > 500 ? <ProfileHeader /> : null}
                <Segment.Group>
                    <Segment><h2>{tl.t('aboutme')}</h2></Segment>
                    <Segment.Group>
                        <Segment>
                            <span>{tl.t('myskills.introduction')}</span> 
                            <br />
                            <List>
                                <List.Item icon='dashboard' content={tl.t('myskills.proactive')} />
                                <List.Item icon='group' content={tl.t('myskills.team')}  />
                                <List.Item icon='settings' content={tl.t('myskills.adapt')} />
                                <List.Item icon='book' content={tl.t('myskills.learn')}/>
                                <List.Item icon='hand rock' content={tl.t('myskills.honor')} />
                                <List.Item icon='rocket' content={tl.t('myskills.resolution')}></List.Item></List>
                            <br />
                        </Segment>
                    </Segment.Group>
                </Segment.Group>
            </Container >
        </div>
    )
}

export default About;