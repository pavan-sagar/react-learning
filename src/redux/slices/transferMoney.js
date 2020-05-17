import { createSlice } from '@reduxjs/toolkit';

export const transferMoneySlice = createSlice({
    
    name:'transferMoney',
    
    initialState : { 0:{
        name:'Sucheta',
        balance:200,
        id:0
    },
    1:{
        name:'Pavan',
        balance:100,
        id:1
    },
    2:{
        name:'Kunal',
        balance:500,
        id:3
    },
    3:{
        name:'Sunny',
        balance:100,
        id:3
    }
    
    },

    reducers:{
        sendMoney(state=this.initialState,action){
            console.log(action.payload)
            state[action.payload.toID].balance += action.payload.amount;
            state[action.payload.fromID].balance -= action.payload.amount;
        }
    }

});

export const { sendMoney } = transferMoneySlice.actions;
export default transferMoneySlice.reducer;