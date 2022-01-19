import React from 'react';
import userImg from '../images/abstract-user.png';
import {Link} from "react-router-dom";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;

    return (
        <>
            <div className="item" >
                <img src={userImg} alt="user" className="ui avatar image"/>
                <div className="content">
                    <Link to={{pathname : `/contact/${id}`, state:{contact: props.contact}}}>
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>

                </div>
                <Link to={{pathname : `/delete/${id}`, state:{contact: props.contact}}}>
                    <i
                        className="trash alternate outline icon"
                        style={{color: "red", marginTop:"7px", marginLeft:"10px"}}

                    ></i>



                </Link>

                <Link to={{pathname : `/edit`, state : {contact : props.contact }}} >
                    <i
                        className="edit alternate outline icon"
                        style={{color: "orange", marginTop:"7px"}}

                    ></i>
                </Link>

            </div>
        </>
    );
}

// onClick={() => props.onDelete(id) } // for delete button action
export default ContactCard;