import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollBar from '../HorizontalScrollBar/HorizontalScrollBar'
import Loader from '../Loader/Loader'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs:'0'}}}>
      <Typography variant="h4" marginBottom={5} marginLeft={2}>Exercises that <span style={{color: '#ff2625'}}>target</span> the same muscle group</Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/> : <Loader />}
      </Stack>

      <Typography variant="h4" marginBottom={5} marginLeft={2}>Exercises that <span style={{color: '#ff2625'}}>use</span> same equipment</Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises}/> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises