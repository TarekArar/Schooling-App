import React, {useState, useEffect} from 'react';
import Exercise from './Exercise';
import axios from 'axios'

const EtudiantList = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/exercises/')
        .then((res) =>  setExercises(res.data))   
        .catch((err) => console.log('Error', err))  
     })

    
    function deleteExercise(id)  {
        axios.delete('http://localhost:8000/exercises/' +id)
        .catch((err) => console.log('Error', err));
        setExercises(exercises.filter(el => el._id !== id));
    }

    return (
         <div>
             <h3>Liste Etudiants</h3>
             <table className="table">
                 <thead className="thead-light">
                     <tr>
                         <th>Nom</th>
                         <th>Prenom</th>
                         <th>Matricule</th>
                         <th>Date Nissance</th>
                         <th>Actions</th>
                     </tr>
                 </thead>
                 <tbody>
                     { exercises.map(exercise =>  <Exercise exerciseData={exercise} key={exercise._id} deleteExercise={deleteExercise}/> ) }
                 </tbody>
             </table>
         </div>
    );
}

export default EtudiantList;
