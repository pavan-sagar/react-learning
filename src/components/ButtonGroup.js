import React from 'react';
import { store } from '../redux/store';
import { changeMember } from '../actions/changeMember';

export const ButtonGroup = ({members}) => {

    return (


<div>

    {members.map((mem,idx) =>
        (<button key={`btn-${idx}`} type='submit' style={{marginRight:'4rem'}} onClick={dispatchBtnAction} data-mem={mem} className='btn btn-primary'>{mem} </button>))}
</div>
);
    }

function dispatchBtnAction(e){
    
    console.log('Passing action of type'+ typeof (e.target.dataset.mem) +' and passing value : '+e.target.dataset.mem);
    
     store.dispatch(changeMember(e.target.dataset.mem));
 }

 