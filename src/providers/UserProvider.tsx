import React, { createContext, useEffect, useState } from 'react'
import useGetUser from '../hooks/useGetUser'
import getUserProfileApiModel from '../models/apiModel/getUserProfileApiModel';
import axiosInstance from '../api/apiInstance';
import { useNavigate } from 'react-router';

interface UserContextProps {
    user: getUserProfileApiModel | null;
    setUser: React.Dispatch<React.SetStateAction<getUserProfileApiModel | null>>;
}

const UserContext = createContext<UserContextProps | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {

    const navigate = useNavigate()

    if (localStorage.getItem('refreshTokenIsValid') === 'false') {
        navigate('/login')
      }

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | string>(null);
    const [success, setSuccess] = useState<boolean>(false);


    const [user, setUser] = useState<getUserProfileApiModel | null>(null);

    useEffect(() => {
        axiosInstance
            .get(`/api/userprofile/getuserprofile`)
            .then((response) => {
                setIsLoading(true);
                if (response.status === 200) {
                    setIsLoading(false);
                    setError(null);
                    setSuccess(true);
                    setIsLoading(false);
                    setUser(response.data);                    
                }
            })
            .catch((err) => {
                setError("couldnt get note");
                console.log(err);
            });
    }, [])


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserProvider, UserContext }
export type { UserContextProps }