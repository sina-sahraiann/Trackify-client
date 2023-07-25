import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import { Avatar, CircularProgress, Hidden, Stack, Typography } from '@mui/material';
import { blue, green, orange } from '@mui/material/colors';
import classes from './personalState.module.css'


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

  const happinessCirclurProgress: React.CSSProperties = {
    ['--clr' as any]: 'red',
    ['--num' as any]: happiness,
  }

  const satisfactionCirclurProgress: React.CSSProperties = {
    ['--clr' as any]: 'blue',
    ['--num' as any]: satisfaction,
  }

  const healthCirclurProgress: React.CSSProperties = {
    ['--clr' as any]: 'green',
    ['--num' as any]: health,
  }

  return (
    <Stack className='w-full text-center mt-4 flex-wrap gap-y-5 gap-x-4' direction={'row'} spacing={'14'} justifyContent={'space-around'}>

      <div className={classes.card}>
        <div className={classes.percent} style={happinessCirclurProgress}>
          {/* <div className={classes.dot}></div> */}
          <svg>
            <circle cx='30px' cy='30px' r='30px' ></circle>
            <circle cx='30px' cy='30px' r='30px' ></circle>
          </svg>
          <div className={classes.number}>
            <h2>{happiness}<span>%</span></h2>
            <p>Happiness</p>
          </div>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.percent} style={satisfactionCirclurProgress}>
          {/* <div className={classes.dot}></div> */}
          <svg>
            <circle cx='30px' cy='30px' r='30px' ></circle>
            <circle cx='30px' cy='30px' r='30px' ></circle>
          </svg>
          <div className={classes.number}>
            <h2>{satisfaction}<span>%</span></h2>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.percent} style={healthCirclurProgress}>
          {/* <div className={classes.dot}></div> */}
          <svg>
            <circle cx='30px' cy='30px' r='30px' ></circle>
            <circle cx='30px' cy='30px' r='30px' ></circle>
          </svg>
          <div className={classes.number}>
            <h2>{health}<span>%</span></h2>
            <p>Health</p>
          </div>
        </div>
      </div>


    </Stack>

  )
}

export default PersonalState