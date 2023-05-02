import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Typography } from '@mui/material';
import FormLayout from '../../components/layout/formLayout/FormLayout';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

  useEffect(() => {
    axios.post('http://trackify-api.bavand.top/api/Account/login', {
      fristName: 'sina',
      lastName: 'sahraian',
      googleAuthCode: 'sadasda',
      gender: 1,
      birthDate: '2010-05-02T13:30:15-04:00',
      password: 'sdfsdfsd',
      confirmPassword: 'sdfsdfsd',
      email: 'sinasahraian@gmail.com',
    }).then(res => console.log(res))
      .catch(err => console.log(err))

  }, [])

  const navigate = useNavigate()

  type signUpValues = {
    firstname: string
    lastname: string
    email: string
    username: string
    password: string
    remember: boolean
  }

  const form = useForm<signUpValues>();
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState
  const onSubmit = (data: signUpValues) => {
    console.log(data);
  }

  return (
    <>
      <FormLayout>
        <div className='bg-gray-100
       w-72 md:w-96 mx-auto p-5 rounded-lg bg-opacity-20'>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex flex-col gap-2">
              <TextField size='small' id="outlined-basic" label="First name" variant="outlined" className='my-4 bg-slate-200 border-0 rounded-lg'
                {...register('firstname', {
                  required: 'firstname shouldnt be empty',
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.firstname?.message}</span>
              <TextField size='small' id="outlined-basic" label="Last name" variant="outlined" className='my-4 bg-slate-200 border-0 rounded-lg' 
                {...register('lastname', {
                  required: 'lastname shouldnt be empty',
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.lastname?.message}</span>
              <TextField type={'email'} size='small' id="outlined-basic" label="Email" variant="outlined" className='my-4 bg-slate-200 border-0 rounded-lg'
                {...register('email', {
                  required: 'email shouldnt be empty',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'inval email format'
                  }
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.email?.message}</span>
              <TextField size='small' id="outlined-basic" label="user name" variant="outlined" className='my-4 bg-slate-200 border-0 rounded-lg'
                {...register('username', {
                  required: 'username shouldnt be empty',
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.username?.message}</span>
              <TextField size='small' id="outlined-basic" type={'password'} label="password" variant="outlined" className='my-4 bg-slate-200 border-0 rounded-lg'
                {...register('password', {
                  required: 'password shouldnt be empty',
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.password?.message}</span>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me"
                  {...register('remember')}
                />
              </FormGroup>
              {
                formState.isValidating && <CircularProgress color="secondary" />
              }
              <Button disabled={!formState.isValid} type="submit" variant='contained' color='primary'>Log in</Button>
            </div>
          </form>
          <Typography variant='subtitle2' sx={{ marginTop: '1rem' }} className=''>
            Don't have an account? <Link className='text-blue-600' to={'/SignUp'}>Create one</Link>
          </Typography>
        </div>


      </FormLayout>
    </>
  )
}

export default SignUp