import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { reducers, selectors } from './menuSlice';
import { Menu } from 'semantic-ui-react';

function MenuFeature() {
    const selected = useAppSelector(selectors.selectCount);
    const dispatch = useAppDispatch();
	const items = [
		{ key: 'feed', active: false, name: 'Feed' },
		{ key: 'notifs', active: false, name: 'Notifications' },
		{ key: 'settings', active: false, name: 'Settings' },
	]
    items[selected].active = true;
	return (
		<Menu vertical fluid items={items} onItemClick={(_, menuItem) => dispatch(reducers.setMenuItemSelected(menuItem.index || 0))}/>
	)
}

export default MenuFeature;
