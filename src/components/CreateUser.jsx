import React, { Component } from 'react';
import axios from 'axios';
export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        // binding methods
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // state initialization
        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        // to prevent the event default effects
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        axios.post('http://localhost:8000/users/add', user)
        .then(res => console.log(res.data))

        this.setState({
            username: ''
        });
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form action="" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">UserName: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" >Create User</button>
                    </div>
                </form>
            </div>
                )
            }
        }
