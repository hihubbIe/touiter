import React from 'react';
import { connect } from 'react-redux';
import { Segment, Form, Message, Label, Button, TextAreaProps } from 'semantic-ui-react';
import User from '../../models/user.model';
import { selectors } from './slice';
import { selectors as profileSelectors } from '../profile/slice';
import { setInput } from './actions';
import { update } from '../touit/actions';
import { setCloseModal } from '../modal/actions';
import Touit from '../../models/touit.model';

interface IProps {
    touit: Touit;
    profile: User;
    input: string;
    setInput: any;
    update: any;
    setCloseModal?: any;
}

const mapStateToProps = (state: any) => {
	return {
		profile: profileSelectors.selectProfile(state),
        input: selectors.selectInput(state),
	}
};

class EditTouitInner extends React.Component<IProps> {

    componentDidMount(): void {
        const { setInput, touit } = this.props;
        setInput(touit.content);
    }

    render () {
        const { touit, setCloseModal, input, setInput, update } = this.props;
        const length = (input || '').length;
        return (
            <Segment raised>
                <Form>
                    <Message size='tiny' content='Post a new touit' icon='edit'/>
                    <Form.TextArea
                        onChange={(_, data: TextAreaProps) => setInput(`${data.value}`)}
                        defaultValue={touit.content} error={length > 512 ? {content: 'Length must not exceed 512 characters', pointing: 'above'} : false}/>
                    <Label attached='bottom right' content={`${length}/512`} />
                    <Button content='Save' color='green' disabled={length > 512 || length === 0} onClick={() => {setCloseModal({}); update(touit, input)}} />
                    <Button content='Cancel' color='grey' onClick={() => {setCloseModal({}); setInput('');}} />
                </Form>
            </Segment>
        )
    }
}


export default connect(mapStateToProps, { update, setInput, setCloseModal })(EditTouitInner);
