import React from 'react';
import { Button } from 'semantic-ui-react';
import { useAppDispatch } from '../../app/hooks';
import { SHOW_CREATE_NEW_TOUIT } from '../modal/modalKeys';
import { reducers as modalReducers } from '../modal/slice';

function NewTouit() {
    const dispatch = useAppDispatch();
	return (
        <Button icon='write' fluid content='Write new touit' onClick={() => dispatch(modalReducers.setOpenModal({ type: SHOW_CREATE_NEW_TOUIT, props: {} }))}/>
	);
};

export default NewTouit;
