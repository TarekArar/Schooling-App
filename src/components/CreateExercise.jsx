import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class CreateExercise extends Component {
    constructor(props){
        super(props);
        // binding methods
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // state initialization
        this.state = {
            username:'',
            description:'',
            duration:0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount(){
        this.setState({
            users: ["Tarek Arar","Aymen","Ayoub"],
            username: "Tarek Arar"
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date
        });
    }

    onSubmit(e) {
        // to prevent the event default effects
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);
        // Saving exercise to database 
        axios.post('http://localhost:8000/exercises/add', exercise)
        .then(res => console.log(res.data))
        // got to home page
        
    }
    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form action="" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Username :</label>
                        <select 
                        ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        >
                            {this.state.users.map( (user) => {
                                return(
                                    <option value={user} key={user}>{user}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description: </label>
                        <input 
                        type="text"
                        required
                        className="form-control" 
                        value={this.state.description} 
                        onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Duration (in minutes): </label>
                        <input 
                        type="text"
                        required
                        className="form-control" 
                        value={this.state.duration} 
                        onChange={this.onChangeDuration}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Date: </label>
                        <DatePicker
                        className="form-control"
                        selected={this.state.date}
                        onChange={this.onChangeDate} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" >Create Exercise</button>
                    </div>
                </form>
            </div>
        )
    }
}

