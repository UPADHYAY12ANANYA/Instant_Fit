import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../../assets/body-part.png'
import TargetImage from '../../assets/target.png'
import EquipmentImage from '../../assets/equipment.png'


const Detail = ({exerciseDetail}) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

  const extraDetail = [
      {
         icon: BodyPartImage,
         name: bodyPart,
      },
      {
         icon: TargetImage,
         name: target,
      },
      {
         icon: EquipmentImage,
         name: equipment,
      },
   ]

  return (
   <Stack gap="160px" sx={{flexDirection: {lg: 'row'}, p: '20px', marginTop:'20px',
          alignItems:'center'}}>
    <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
    <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
       <Typography variant="h4" textTransform="capitalize">
        {name} 
       </Typography>
       <Typography variant="h6">
          Exercises keep you strong. {name} {' '} <br/>
          is one of the best exercise to target your {target}. <br/>
          It will help you inprove your mood and gain energy.
       </Typography>
       {extraDetail.map(({name, icon})=>(
         <Stack key={name} direction="row" gap="24px" alignItems="center">
            <Button sx={{background: '#fff2db', borderRadius: '50%', width:'100px', height: '100px'}}>
               <img src={icon} alt={bodyPart} style={{ width:'50px', height:'50px'}} />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
               {name}
            </Typography>
         </Stack>
       ))}
    </Stack>
   </Stack>
    
  )
}

export default Detail