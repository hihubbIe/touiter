import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { reducers, selectors } from './slice';
import { Grid, Modal, Segment, Image, Icon, Label, Input, Form, Container, Button, Message } from 'semantic-ui-react';
import defaultImage from '../../assets/default_icon.jpg'
import * as modalKeys from './modalKeys';
import Touit from '../../models/touit.model';
import User from '../../models/user.model';

const touitDetails = (props: any, dispatch: any): JSX.Element => {
    const msg: Touit = props.msg;
    const user: User = props.user;
    const profile: User = props.profile;
    const liked = msg.likes.includes(profile.id);
    const author = msg.userid === profile.id;
    return (
        <Container>
            <Segment raised>
                <Grid columns='2'>
                    <Grid.Column width='2'>
                        <Image size='tiny' floated='left' avatar verticalAlign='top' circular src={user?.photo ? user.photo : defaultImage} />
                    </Grid.Column>
                    <Grid.Column width='14' textAlign='left' verticalAlign='top'>
                        <div style={{cursor: 'pointer'}} onClick={() => dispatch(reducers.setOpenModal({ type: modalKeys.SHOW_USER_PROFILE, props: { user } }))}>
                            <b>{user?.id}</b>
                        </div>
                        <p>
                            Sent on {msg.date}
                        </p>
                        <p aria-multiline>
                            {msg?.content}
                        </p>
                        <Icon name='comment outline' color='teal'/> 0 <Icon name={liked ? 'heart' : 'heart outline'} color='red'/> {msg.likes.length}
                        {
                            author && 
                            <Label attached='top right'>
                                <div style={{display: 'inline-flex'}}>
                                    <div style={{cursor: 'pointer'}} onClick={() => dispatch(reducers.setOpenModal({ type: modalKeys.SHOW_EDIT_TOUIT, props: { msg } }))}><Icon name='edit'/></div>
                                    <div style={{cursor: 'pointer'}} onClick={() => dispatch(reducers.setOpenModal({ type: modalKeys.SHOW_CONFIRM_DELETE_TOUIT, props: { msg }}))}><Icon name='trash'/></div>
                                </div>
                            </Label>
                        }
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    )
}

const profileEdit = (props: any): JSX.Element => {
    const user: User = props.user;
    return (
        <Segment raised>
            <Form>
                <Message size='tiny' content='Profile edition' icon='edit'/>
                <Form.Group widths='equal'>
                    <Form.Input label='Nickname' defaultValue={user.id}/>
                    <Form.Input label='First name' defaultValue={user.firstname}/>
                    <Form.Input label='Last name' defaultValue={user.lastname}/>
                </Form.Group>
                <Form.Input label='Profile message' type='text' defaultValue={user.profileMessage}/>
                <Form.Input label='Email address' type='email' defaultValue={user.email}/>
                <Form.Input label='Photo' defaultValue={user.photo}/>
                <Button.Group fluid>
                    <Button content='Save'/>
                    <Button content='Cancel'/>
                </Button.Group>
            </Form>
        </Segment>
    )
}

const profileDetails = (props: any): JSX.Element => {
    const user: User = props.user;
    return (
        <Segment raised>
            <Grid columns={2}>
                <Grid.Column width={2}>
                    <Image size='tiny' floated='left' avatar verticalAlign='top' circular src={user.photo} />
                </Grid.Column>
                <Grid.Column width={14}>
                    <b>{user.id}</b>
                    <p>{user.firstname} {user.lastname}</p>
                    <p>Member since {user.creationDate}</p>
                    {user?.profileMessage?.length > 0 && <Segment>
                        <p aria-multiline>
                            {user.profileMessage}
                        </p>
                    </Segment>}
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

const editTouit = (props: any, dispatch: any): JSX.Element => {
    const msg: Touit = props.msg;
    return (
        <Segment raised>
            <Form>
                Hello
            </Form>
        </Segment>
    );
}

const confirmDeleteTouit = (props: any, dispatch: any): JSX.Element => {
    const msg: Touit = props.msg;
    return (
        <Segment raised>
            DELETE TOUIT ?
        </Segment>
    )
}

function ModalFeature() {
    const open = useAppSelector(selectors.selectOpen);
    const type = useAppSelector(selectors.selectType);
    const props = useAppSelector(selectors.selectProps)
    const dispatch = useAppDispatch();
	return (
		<Modal
            basic
            onClose={() => dispatch(reducers.setCloseModal())}
            open={open} 
            dimmer='blurring'
            size='small'
            centered={false}
            style={{color: 'black'}}
        >
            <Modal.Content>
                {type === modalKeys.SHOW_TOUIT_DETAILS && touitDetails(props, dispatch)}
                {type === modalKeys.SHOW_USER_PROFILE && props.edit && profileEdit(props)}
                {type === modalKeys.SHOW_USER_PROFILE && !props.edit && profileDetails(props)}
                {type === modalKeys.SHOW_EDIT_TOUIT && editTouit(props, dispatch)}
                {type === modalKeys.SHOW_CONFIRM_DELETE_TOUIT && confirmDeleteTouit(props, dispatch)}
            </Modal.Content>
        </Modal>
	)
}

export default ModalFeature;
