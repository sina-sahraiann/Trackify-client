import { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Typography } from '@mui/material';
import FormLayout from '../../components/layout/formLayout/FormLayout';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useSignupApi from '../../hooks/useSignupApi';
import signupApiModel from '../../models/apiModel/signupApiModel';

const SignUp = () => {

  useEffect(() => {
    localStorage.setItem("token", '')
    localStorage.setItem("refreshToken", '')
  }, [])

  const navigate = useNavigate()

  type signUpValues = {
    firstname: string
    lastname: string
    email: string
    password: string
    remember: boolean
  }

  const form = useForm<signUpValues>();
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState
  const [signUp, loading, error, success] = useSignupApi();

  const onSubmit = (data: any) => {
    // const dataToSend: any = {
    //   email: data.email,
    //   birthDate: new Date().toISOString(),
    //   firstName: data.firstName,
    //   confirmPassword: data.password,
    //   gender: 0,
    //   googleAuthCode: 'asdasd',
    //   lastName: data.lastname,
    //   password: data.password,
    // }

    const dataToSend: any = {
      email: data.email,
      birthDate: new Date().toISOString(),
      confirmPassword: data.password,
      gender: 0,
      firstName: data.firstname,
      googleAuthCode: 'asdasd',
      lastName: data.lastname,
      password: data.password,
    }

    console.log(dataToSend);


    signUp(dataToSend)

  }





  return (
    <>
      <FormLayout>
        <div className='bg-white
       w-72 md:w-96 mx-auto p-5 rounded-lg'>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {error && <span className='text-left text-red-500 text-xs mb-2 ml-2'>{error}</span>}
            <div className="flex flex-col gap-2">
              <TextField key={'firstName'} size='small' id="outlined-basic" label="First name" variant="outlined" className='my-4 border border-3 rounded-lg'
                {...register('firstname', {
                  required: 'firstname shouldnt be empty',
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.firstname?.message}</span>
              <TextField key={'lastName'} size='small' id="outlined-basic" label="Last name" variant="outlined" className='my-4 border border-3 rounded-lg'
                {...register('lastname', {
                  required: 'lastname shouldnt be empty',
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.lastname?.message}</span>
              <TextField key={'email'} type={'email'} size='small' id="outlined-basic" label="Email" variant="outlined" className='my-4 border border-3 rounded-lg'
                {...register('email', {
                  required: 'email shouldnt be empty',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'inval email format'
                  }
                })}
              />

              <span className='text-left text-red-500 text-xs mb-2 ml-2'></span>
              <TextField key={'password'} size='small' id="outlined-basic" type={'password'} label="password" variant="outlined" className='my-4 border border-3 rounded-lg'
                {...register('password', {
                  required: 'password shouldnt be empty',
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.password?.message}</span>
              <div className='flex justify-center'>
                {loading && <CircularProgress color="secondary" />}
              </div>
              <FormGroup>
                <FormControlLabel key={'rememberMe'} control={<Checkbox defaultChecked />} label="Remember me"
                  {...register('remember')}
                />
              </FormGroup>
              {
                formState.isValidating && <CircularProgress color="secondary" />
              }

              <Button disabled={!formState.isValid} type="submit" variant='contained' color='primary'>Sign up</Button>
            </div>
          </form>


          <Typography variant='subtitle2' sx={{ marginTop: '1rem' }} className=''>
            Already have an account? <Link className='text-blue-600' to={'/login'}>Log in</Link>
          </Typography>
        </div>


      </FormLayout>
    </>
  )
}

export default SignUp