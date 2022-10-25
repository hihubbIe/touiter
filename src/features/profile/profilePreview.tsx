import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { reducers, selectors } from './slice';
import { Button, Segment, Image, Divider, Grid, Label, Container, Icon } from 'semantic-ui-react';
import { reducers as modalReducers } from '../modal/slice';
import { SHOW_USER_PROFILE } from '../modal/modalKeys';

function ProfilePreview() {
    const profile = useAppSelector(selectors.selectProfile);
	const dispatch = useAppDispatch();
	return (
		<Container>
			<Segment attached>
				<Grid textAlign='left' columns={2}>
					<Grid.Column width={4}>
						<Image size='tiny' circular src={profile.photo} />
					</Grid.Column>
					<Grid.Column width={12}>
						<Grid.Row>
							<b>{profile.id}</b>
						</Grid.Row>
						<Grid.Row>
							{`${profile.firstname} ${profile.lastname}`}
						</Grid.Row>
						<Grid.Row>
							{`Member since ${profile.creationDate}`}
						</Grid.Row>
					</Grid.Column>
				</Grid>
			</Segment>
			<Button.Group attached='bottom'>
				<Button onClick={() => dispatch(modalReducers.setOpenModal({ type: SHOW_USER_PROFILE, props: { user: profile } }))}>
					<Icon name='eye' color='teal'/>View
				</Button>
				<Button onClick={() => dispatch(modalReducers.setOpenModal({ type: SHOW_USER_PROFILE, props: { user: profile, edit: true } }))}>
					<Icon name='edit' color='green'/>Edit
				</Button>
			</Button.Group>
		</Container>
	)
}

export default ProfilePreview;
