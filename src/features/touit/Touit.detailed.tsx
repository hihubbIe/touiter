import React from 'react';
import { Segment, Image, List, Grid, Divider, Icon } from 'semantic-ui-react';
import defaultImage from '../../assets/default_icon.jpg'
import TouitModel from '../../models/touit.model';

interface IProps {
	msg: TouitModel,
}

function TouitDetailed({msg}: IProps) {
	return (
		<List.Item>
            <div style={{color: 'black'}}>
                <Segment raised>
                    <Grid columns='2'>
                        <Grid.Column width='2'>
                            <Image size='tiny' floated='left' avatar verticalAlign='top' circular src={defaultImage} />
                        </Grid.Column>
                        <Grid.Column width='14' textAlign='left' verticalAlign='top'>
                            <Grid columns='2'>
                                <Grid.Column>
                                    <div style={{cursor: 'pointer'}} onClick={() => alert(msg?.userid)}>{msg?.userid} - {msg?.date}</div>
                                </Grid.Column>
                                <Grid.Column textAlign='right'>
                                    <div style={{cursor: 'pointer'}} onClick={() => alert('click')}>
                                        <Icon name='ellipsis vertical' />
                                    </div>
                                </Grid.Column>
                            </Grid>
                            <Divider clearing />
                            <p aria-multiline>
                                {msg?.content}
                            </p>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
		</List.Item>
	)
}

export default TouitDetailed;
