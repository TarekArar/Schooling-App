import React from 'react';
import {Link} from 'react-router-dom'

const Exercise = ({ ...props }) => {

    return (
        <tr>
            <th>{props.exerciseData.nom}</th>
            <th>{props.exerciseData.prenom}</th>
            <th>{props.exerciseData.matricule}</th>
            <th>{props.exerciseData.dateNissance.substring(0,10)}</th>
            <th>
                <Link to={'/edit/'+props.exerciseData._id}>Edit</Link> |
                 <a href="#" onClick={() => props.deleteExercise(props.exerciseData._id)}>Delete</a>
            </th>
        </tr>
    );
}

export default Exercise;
