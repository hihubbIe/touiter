import React from 'react';
import { Segment, Image, Header, Label, Placeholder, Container, List, Modal } from 'semantic-ui-react';
import defaultImage from '../../assets/default_icon.jpg'
import Touit from '../../models/touit.model';

interface IProps {
	msg: Touit,
}

function FeedMessageComponent({msg}: IProps) {
	const [open, setOpen] = React.useState(false);
	return (
		<List.Item>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				dimmer='blurring'
			>
				<Modal.Header>Message</Modal.Header>
				<Modal.Content>
					{msg?.content}
				</Modal.Content>
			</Modal>
			<Segment>
				<Container style={{display: 'flex', flexDirection: 'column'}}>
					<Header size='small' floated='left'>
						<Image circular src={defaultImage} />{msg?.userid}
					</Header>
					<div style={{paddingTop: '1%', cursor: 'pointer'}} onClick={() => setOpen(true)}>
						<Placeholder>
							<Placeholder.Paragraph>
								<Placeholder.Line />
								<Placeholder.Line />
								<Placeholder.Line />
							</Placeholder.Paragraph>
						</Placeholder>
					</div>
					<Label attached='top right'>
						{msg?.date}
					</Label>
				</Container>
			</Segment>
		</List.Item>
	)
}

export default FeedMessageComponent;
