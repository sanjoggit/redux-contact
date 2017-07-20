import {ADD_USER} from '../actions';


export default function (state=[], action) {
    switch (action.type){
        case "ADD_USER":
            return{
                users: [...state, action.payload]
            };

        default:
            return state

    }

}