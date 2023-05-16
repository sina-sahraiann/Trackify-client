import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import FormLayout from '../../components/layout/formLayout/FormLayout';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';


const LoginPage = () => {

  useEffect(() => {
    axios.post('http://trackify-api.bavand.top/api/Account/login', {
      email: "x@gmail.com",
      password: 'aliali123',
    }).then(res => { console.log(res.data.token) })
      .catch(err => { console.log(err) })

  }, [])


  type formValues = {
    username: string
    password: string
    Email: string
    check: boolean
  }

  const form = useForm<formValues>()
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState


  const onSubmit = (data: formValues) => {
    console.log(data);

  }

  return (
    <>
      <FormLayout>

        {/* <div className='text-center text-white pt-5'>
          <h2 className='text-3xl md:text-5xl'>Trackify!</h2>
          <h5 className='text-xl md:text-3xl mt-7'>We help you manage your notes</h5>
        </div> */}
        <div className='bg-slate-300
       w-72 md:w-96 mx-auto p-5 rounded-lg bg-opacity-50'>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex flex-col">
              <TextField id='username' label="user name" variant="outlined" className='mt-1 bg-slate-200 border-0'
                {...register("username", {
                  required: "username shouldn't be empty"
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.username?.message}</span>
              <TextField id='password' type={'password'} label="password" variant="outlined" className='mt-1 bg-slate-200 border-0'
                {...register("password", {
                  required: "password shouldn't be empty",
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.password?.message}</span>
              <TextField id='Email' type={'Email'} label="Email" variant="outlined" className='mt-1 bg-slate-200 border-0'
                {...register("Email", {
                  required: "Email shouldn't be empty",
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'inval email format'
                  }
                })}
              />
              <span className='text-left text-red-500 text-xs mb-2 ml-2'>{errors.Email?.message}</span>
              <FormGroup>
                <FormControlLabel
                  {...register("check", {
                    required: "must check"
                  })}
                  control={<Checkbox defaultChecked />} label="Remember me" />
              </FormGroup>
              <Button type='submit' variant='contained' color='primary'>Log in</Button>
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