import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Typography } from '@mui/material';
import FormLayout from '../../components/layout/formLayout/FormLayout';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import useLoginApi from '../../hooks/useLoginApi';
import loginApiModel from '../../models/apiModel/loginApiModel';



const LoginPage = () => {

  useEffect(() => {
    localStorage.setItem("token", '')
    localStorage.setItem("refreshToken", '')
    } , [])

  type formValues = {
    password: string
    email: string
    check: boolean
  }

  // react hook form
  const form = useForm<formValues>()
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState

  //login custom hook
  const [login, loading, error, success] = useLoginApi();

  //send data to server
  const onSubmit = (data: formValues) => {
    const dataToSend: loginApiModel = {
      email: data.email,
      password: data.password,
    }

    login(dataToSend)
  }

  return (
    <>
      <FormLayout>
        
        <div className='bg-white
       w-72 md:w-96 mx-auto p-5 rounded-lg'>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {error && <span className='text-left text-red-800 text-xs mb-2 ml-2'>{error}</span>}
            <div className="flex flex-col">
              
              <TextField id='Email' key={`email`} type={'Email'} sx={{marginBottom : '0.5rem'}} label="Email" variant="outlined" className='mb-3 border-0'
                {...register("email", {
                  required: "Email shouldn't be empty",
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'inval email format'
                  }
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.email?.message}</span>
              <TextField id='password' key={'password'} type={'password'} sx={{marginBottom : '0.5rem'}} label="password" variant="outlined" className='mt-3 border-0'
                {...register("password", {
                  required: "password shouldn't be empty",
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.password?.message}</span>
              <div className='flex justify-center'>
                {loading && <CircularProgress color="secondary" />}
              </div>
              <FormGroup>
                <FormControlLabel
                  {...register("check")}
                  control={<Checkbox defaultChecked />} label="Remember me" />
              </FormGroup>
              <Button disabled={!formState.isValid} type='submit' variant='contained' color='primary'>Log in</Button>
            </div>
          </form>
          <Typography variant='subtitle2' sx={{ marginTop: '1rem' }} className=''>
            Don't have an account? <Link className='text-blue-600 hover:underline' to={'/SignUp'}>Create one</Link>
          </Typography>
        </div>
      </FormLayout>
    </>
  )
}

export default LoginPage