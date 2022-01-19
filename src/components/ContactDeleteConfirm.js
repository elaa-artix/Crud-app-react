import React from 'react';

function ContactDeleteConfirm(props) {

    const {id} = props.location.state.contact;

    const handleYes = () => {
        alert("Id to be deleted: " + id);
        props.removeContactHandler(id);
        props.history.push("/");

    }

    const handleCancel = () => {
        props.history.push("/");
    }


    return (
        <div>
            <div className="main">
                <div className="ui card centered">
                    <p> Are you sure you want to delete contact? </p>
                    <button className="ui button left red floated" onClick={handleYes}> Yes</button>

                    <button className="ui button right floated" onClick={handleCancel}> Cancel </button>
                </div>

            </div>
        </div>
    );
}

export default ContactDeleteConfirm;