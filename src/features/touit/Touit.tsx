import React from 'react';
import { connect } from 'react-redux';
import { Segment, Image, Label, List, Grid, Icon, Container, Divider } from 'semantic-ui-react';
import User from '../../models/user.model';
import { selectors } from './slice';
import { selectors as profileSelectors } from '../profile/slice';
import defaultImage from '../../assets/default_icon.jpg'
import TouitModel from '../../models/touit.model';
import * as actions from '../touit/actions';

interface IProps {
	profile?: User;
	user?: User;
	msg: TouitModel;
	getUser?: any;
	openDetails?: any;
	openProfile?: any;
}

const mapStateToProps = (state: any, props: IProps) => {
	return {
		user: selectors.selectUserById(state, props.msg.userid),
		profile: profileSelectors.selectProfile(state),
	}
};

class TouitComponent extends React.Component<IProps> {
	
	componentDidMount(): void {
		this.props.getUser(this.props.msg.userid);
	}

	render() {
		const { user, msg, profile, openDetails, openProfile } = this.props;
		const liked = profile && msg.likes.includes(profile.id);
		return (
			<List.Item>
				<Segment raised>
					<Grid columns={2}>
						<Grid.Column width={2}>
							<Image floated='left' verticalAlign='top' circular src={user?.photo ? user.photo : defaultImage} />
						</Grid.Column>
						<Grid.Column width={12} textAlign='left' verticalAlign='top'>
							<div style={{cursor: 'pointer'}} onClick={() => openProfile({ user })}><b>{user?.id}</b></div>
							<p aria-multiline onClick={() => openDetails({ msg, user, profile })} style={{cursor: 'pointer'}}>
								{msg?.content}
							</p>
							<div style={{display: 'inline-flex'}}>
								<div style={{cursor: 'pointer'}}>
									<Icon name='comment outline' color='teal'/> 0
								</div>
								<div style={{cursor: 'pointer', paddingLeft: '10px'}}>
									<Icon name={liked ? 'heart' : 'heart outline'} color='red' /> {msg.likes.length}
								</div>
							</div>
						</Grid.Column>
					</Grid>
					<Label attached='top right'>{msg?.date}</Label>
				</Segment>
			</List.Item>
		)
	}
}

export default connect(mapStateToProps, actions)(TouitComponent);
