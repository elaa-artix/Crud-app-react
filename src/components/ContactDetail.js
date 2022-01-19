import React from 'react';
import userImg from '../images/abstract-user.png';
import {Link} from "react-router-dom";

const ContactDetail = (props) => {
    const {name, email} = props.location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={userImg} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>


            </div>

            <div className="center-div">
                <Link to='/'>
                    <button className="ui button center blue "> Back To Contact List</button>
                </Link>
            </div>


        </div>
    );
};

export default ContactDetail;