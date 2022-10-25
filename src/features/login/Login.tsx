import React from 'react';
import { Segment, Form, Message, Label, Button, TextAreaProps, InputOnChangeData } from 'semantic-ui-react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { reducers } from "./slice";
import { emailValidator } from '../../validators/validators';
import hashString from '../../sha256/sha256';
import * as actions from './actions';

const login = async (email: string, password: string, dispatch: any) => {
    const creds = {
        email,
        passwordHash: hashString(password)
    }
    actions.login(creds)(dispatch);
}

function Login () {
    const dispatch = useAppDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <Segment raised>
            <Form>
                <Message><h1>Log into your account</h1></Message>
                <Form.Input label='email' placeholder='leo.lallier@gmail.com' error={emailValidator(email)} onChange={(_, data: InputOnChangeData) => setEmail(data.value)} defaultValue={email}/>
                <Form.Input label='password' type='password' onChange={(_, data: InputOnChangeData) => setPassword(data.value)} defaultValue={password}/>
                <Button.Group fluid>
                    <Button content='Log in' color='green' onClick={() => login(email, password, dispatch)}/>
                    <Button content='Sign up' color='teal' onClick={() => dispatch(reducers.switch())} />
                </Button.Group>
            </Form>
        </Segment>
    )
}

export default Login;
