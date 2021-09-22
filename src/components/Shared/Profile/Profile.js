import React from 'react';
import {useContext} from 'react'
import { userContext } from '../../../App';
const Profile = () => {
    const [loggedInUser ] = useContext(userContext)
    return (
       <div>
            Name: {loggedInUser.CustomerName}          
        </div>
    );
};

export default Profile;