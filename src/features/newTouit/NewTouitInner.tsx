import React from 'react';
import { connect } from 'react-redux';
import { Segment, Form, Message, Label, Button, TextAreaProps } from 'semantic-ui-react';
import User from '../../models/user.model';
import { selectors } from '../newTouit/slice';
import { selectors as profileSelectors } from '../profile/slice';
import { postTouit, setInput } from './actions';
import { setCloseModal } from '../modal/actions';

interface IProps {
    profile: User;
    input: string;
    postTouit: any;
    setInput: any;
    setCloseModal?: any;
}

const mapStateToProps = (state: any) => {
	return {
		profile: profileSelectors.selectProfile(state),
        input: selectors.selectInput(state),
	}
};

class NewTouitInner extends React.Component<IProps> {

    _postTouit = () => {
        const { postTouit, profile, input } = this.props;
        const touit = {
            id: `${Array.from("xxxxx").map(c => `${Math.floor(Math.random() * 10)}`).join('')}`,
            userid: `${profile.id}`,
            content: `${input}`,
            date: `${(new Date()).toISOString()}`,
            attachments: [],
            replyTo: "",
            likes: []
        }
        postTouit(touit);
    }

    render () {
        const { setCloseModal, input, setInput } = this.props;
        const length = (input || '').length;
        return (
            <Segment raised>
                <Form>
                    <Message size='tiny' content='Post a new touit' icon='edit'/>
                    <Form.TextArea placeholder='My amazing new touit...'
                        onChange={(_, data: TextAreaProps) => setInput(`${data.value}`)}
                        defaultValue={input} error={length > 512 ? {content: 'Length must not exceed 512 characters', pointing: 'above'} : false}/>
                    <Label attached='bottom right' content={`${length}/512`} />
                    <Button content='Post' color='green' disabled={length > 512 || length === 0} onClick={() => {setCloseModal({}); this._postTouit()}} />
                    <Button content='Cancel' color='red' onClick={() => {setCloseModal({}); setInput('');}} />
                </Form>
            </Segment>
        )
    }
}


export default connect(mapStateToProps, { postTouit, setInput, setCloseModal })(NewTouitInner);
