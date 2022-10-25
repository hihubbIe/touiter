import React from "react";
import { Segment, Form, Message, Button } from 'semantic-ui-react';
import { useAppDispatch } from "../../app/hooks";
import { reducers } from "./slice";
import { emailValidator, password2Validator, passwordValidator, stringValidator, CLEAN_STRING } from '../../validators/validators';
import * as actions from './actions';
import hashString from "../../sha256/sha256";

const signup = (nick: string, fname: string, lname: string, email: string, pwd: string, dispatch: any) => {
    const newUser = {
        id: nick,
        firstname: fname,
        lastname: lname,
        email,
        passwordHash: hashString(pwd)
    }
    actions.signup(newUser)(dispatch);
}

function Signup (): JSX.Element {
    const [nick, setNick] = React.useState(CLEAN_STRING);
    const [fname, seFname] = React.useState(CLEAN_STRING);
    const [lname, setLname] = React.useState(CLEAN_STRING);
    const [email, setEmail] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [pwd2, setPwd2] = React.useState('');
    const dispatch = useAppDispatch();
    return (
        <Segment raised>
            <Form>
                <Message><h1>Creating an account</h1></Message>
                <Form.Group widths='equal'>
                    <Form.Input label='Nickname' error={stringValidator(nick)} placeholder='TouiterUser154865' onChange={(_, data) => {setNick(data.value)}} defaultValue={nick} />
                    <Form.Input label='First name' error={stringValidator(fname)} placeholder='Léo' onChange={(_, data) => {seFname(data.value)}} defaultValue={fname} />
                    <Form.Input label='Last name' error={stringValidator(lname)} placeholder='Lallier' onChange={(_, data) => {setLname(data.value)}} defaultValue={lname} />
                </Form.Group>
                <Form.Input label='Email address' type='email' error={emailValidator(email)} placeholder='leo.lallier@gmail.com' onChange={(_, data) => {setEmail(data.value)}} defaultValue={email} />
                <Form.Input label='Password' type='password' error={passwordValidator(pwd)} onChange={(_, data) => {setPwd(data.value)}} defaultValue={pwd} />
                <Form.Input label='Password (confirmation)' type='password' error={password2Validator(pwd, pwd2)} onChange={(_, data) => {setPwd2(data.value)}} defaultValue={pwd2} />
                <Button.Group fluid>
                    <Button content='Sign up' color='green' onClick={() => signup(nick, fname, lname, email, pwd, dispatch)} />
                    <Button content='Already have an account ?' color='teal' onClick={() => dispatch(reducers.switch())}/>
                </Button.Group>
            </Form>
        </Segment>
    )
}

export default Signup;
