import React, {useState, useEffect} from 'react';
import Exercise from './Exercise';
import axios from 'axios'

const ExerciseList = () => {
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
             <h3>Logged Exercises</h3>
             <table className="table">
                 <thead className="thead-light">
                     <tr>
                         <th>Username</th>
                         <th>Description</th>
                         <th>Duration</th>
                         <th>Date</th>
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

export default ExerciseList;
