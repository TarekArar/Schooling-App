import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class CreateEtudiant extends Component {
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
            nom:'',
            prenom:'',
            matricule:0,
            dateNissance: new Date(),
        }
    }

    

    onChangeUsername(e) {
        this.setState({
            nom: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            prenom: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            matricule: e.target.value
        });
    }

    onChangeDate(dateNissance) {
        this.setState({
            dateNissance
        });
    }

    onSubmit(e) {
        // to prevent the event default effects
        e.preventDefault();

        const exercise = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            matricule: this.state.matricule,
            dateNissance: this.state.dateNissance
        }

        console.log(exercise);
        // Saving exercise to database 
        axios.post('http://localhost:8000/exercises/add', exercise)
        .then(res =>console.log(res.data))

        // got to home page
        
    }
    render() {
        return (
            <div>
                <h3>Creer Nouveau Etudiant</h3>
                <form action="" onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label htmlFor="">Nom: </label>
                        <input 
                        type="text"
                        required
                        className="form-control" 
                        value={this.state.nom} 
                        onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Prènom : </label>
                        <input 
                        type="text"
                        required
                        className="form-control" 
                        value={this.state.prenom} 
                        onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Matricule </label>
                        <input 
                        type="text"
                        required
                        className="form-control" 
                        value={this.state.matricule} 
                        onChange={this.onChangeDuration}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Date de Nissance: </label>
                        <DatePicker
                        className="form-control"
                        selected={this.state.dateNissance}
                        onChange={this.onChangeDate} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" >Creer Etudiant</button>
                    </div>
                </form>
            </div>
        )
    }
}

