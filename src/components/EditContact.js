import React, {Component} from 'react';

class EditContact extends Component {

    constructor(props) {
        super(props);
        const {id, name, email} = props.location.state.contact;
        this.state = {
            id : id,
            name : name,
            email : email
        };
    }

    state = {
        name: "",
        email: "",
    };

    handleChange = (evt) => {
        const value = evt.target.value;
        const tragetName = evt.target.name;
        this.setState({
            [tragetName]: value
        });
    }

    update = (evt) => {
        evt.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory!");
            return;
        }
        console.log(this.state);
        this.props.updateContactHandler(this.state);
        this.setState(
            {
                name: "",
                email: "",
            }
        );

        this.props.history.push("/");

    }


    render() {
        return (
            <>
                <div className="ui main mt-8">
                    <h2>Add Contact </h2>
                    <form action="" className="ui form" autoComplete="off" onSubmit={this.update}>
                        <div className="field">
                            <label > Name</label>
                            <input type="text"
                                   name="name" placeholder="Please enter your name"
                                   value={this.state.name}
                                   onChange={this.handleChange}
                            />
                        </div>

                        <div className="field">
                            <label > Email</label>
                            <input type="email"
                                   name="email" placeholder="Please enter your email"
                                   value={this.state.email}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <button className="ui button blue"> Update </button>

                    </form>

                    {/*{this.state.name}
                    {this.seperator(this.state.name)}
                    {this.state.email}*/}
                </div>
            </>

        );
    }

    /*seperator = (name) => {
        if(name !== "" )
        {
            return <> | </>
        }
    }*/
}

export default EditContact;