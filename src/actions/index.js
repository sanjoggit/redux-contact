

export const ADD_USER = 'add_user';
export const DELETE_USER = 'delete_user';

export function addUser(values) {
    console.log(values);
    return{
        type: ADD_USER,
        payload: values
    }
}

export function deleteUser(id) {
    return{
        type: DELETE_USER,
        payload: id
    }
}