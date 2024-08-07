import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'
import './ExerciseCard.css'

    const ExerciseCard = ({exercise}) => {
    
    console.log('ExerciseCard props:', exercise);

    // if (!exercise) {
    //     console.error('No exercise data provided');
    //     return null;
    // }

  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl}  loading="lazy"/>
        <div className='button-desc'>
          <button className='button1'>{exercise.bodyPart}</button>
          <button className='button2'>{exercise.target}</button>
        </div>
        <Typography textTransform='capitalize'>{exercise.name}</Typography>
    </Link>
     
  )
}

export default ExerciseCard


