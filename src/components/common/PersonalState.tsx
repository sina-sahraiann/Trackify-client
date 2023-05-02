import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import { Avatar, Hidden, Stack, Typography } from '@mui/material';
import { blue, green, orange } from '@mui/material/colors';


const PersonalState = ({ health, happiness, satisfaction }: {
  health?: number,
  happiness?: number,
  satisfaction?: number
}) => {

  const isUndefined = (state: number | undefined) => {
    if (state) {
      return ''
    } else {
      return 'hidden'
    }
  }

  return (
    <Stack className='w-full text-center mt-4' direction={'row'} spacing={'12'} justifyContent={'space-around'}>

      <div className={isUndefined(satisfaction)}>
        <Stack direction={'column'} alignItems={'center'}>
          <Avatar sx={{ bgcolor: blue[900], marginBottom: '5px' }}>
            < ThumbUpOffAltRoundedIcon />
          </Avatar>
          <Typography sx={{fontWeight:900}} >
            {satisfaction + '%'}
          </Typography>
        </Stack>
      </div>

      <div className={isUndefined(happiness)}>
        <Stack direction={'column'} alignItems={'center'}>
          <Avatar sx={{ bgcolor: orange[700] }}>
            < InsertEmoticonRoundedIcon />
          </Avatar>
          <Typography sx={{fontWeight:900}}>
            {happiness + '%'}
          </Typography>
        </Stack>
      </div>

      <div className={isUndefined(health)}>
        <Stack className={'hidden'} direction={'column'} alignItems={'center'}>
          <Avatar sx={{ bgcolor: green[700] }}>
            < HealthAndSafetyIcon />
          </Avatar>
          <Typography sx={{fontWeight:900}}>
            {health + '%'}
          </Typography>
        </Stack>
      </div>

    </Stack>

  )
}

export default PersonalState