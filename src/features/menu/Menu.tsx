import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { reducers, selectors } from './slice';
import { Menu } from 'semantic-ui-react';

function MenuFeature() {
    const selected = useAppSelector(selectors.selectCount);
    const dispatch = useAppDispatch();
	const items = [
		{ key: 'feed', active: false, icon: 'home', name: 'Feed' },
		{ key: 'notifs', active: false, icon: 'bell', name: 'Notifications' },
		{ key: 'settings', active: false, icon: 'cog', name: 'Settings' },
	]
    items[selected].active = true;
	return (
		<Menu vertical fluid items={items} onItemClick={(_, menuItem) => dispatch(reducers.setMenuItemSelected(menuItem.index || 0))}/>
	)
}

export default MenuFeature;
