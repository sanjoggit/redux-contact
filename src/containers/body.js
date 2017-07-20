import React from 'react';
import UserForm from './user_form';
import {connect} from 'react-redux';
import {deleteUser} from  '../actions';


class Body extends React.Component{



    onDelete(){
        //console.log(this.props.users.id);
       this.props.deleteUser(this.props.user.id);
    }

    renderList(){
        return this.props.users.map((user)=>{
            return(
                <tr key={user.id}>
                    <td>
                        {user.name}
                    </td>
                    <td>
                        {user.email}
                    </td>
                    <td>
                        {user.phone}
                    </td>
                    <td>
                        <span><i className="fa fa-pencil" aria-hidden="true"></i></span>
                        <span><i className="fa fa-trash" aria-hidden="true" onClick={this.onDelete.bind(this)}></i></span>
                    </td>
                </tr>
            )
        });
    }


    render(){
        return(
            <div className="body">
                <h2>List of participants</h2>
                <UserForm/>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-mail address</th>
                            <th>Phone number</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>

        )
    }
}

function mapStateToProps(state) {
   return{
       users: state.users
   }
}

export default connect(mapStateToProps, {deleteUser})(Body);