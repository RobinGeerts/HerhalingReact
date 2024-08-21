import axios from 'axios'
import IMotor from '../models/IMotor.ts'
import {useQuery, UseQueryResult} from '@tanstack/react-query'

const API_KEY = import.meta.env.VITE_Motorcycle

const client = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/motorcycles?data'
})

export const useGetMotor = (make: string, model : string): UseQueryResult<IMotor[]> => {
    return useQuery(['make', make], () => getMotor(make, model), {
        refetchInterval: 5 * 60 * 1000,
    })
}

const getMotor = async (make: string, model: string): Promise<IMotor[]> => {
    const {data} = await client.get<'https://api.api-ninjas.com/v1/motorcycles/data'>(`/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${API_KEY}`
        },
        params: {
            make: make,
            model: model
        },
    })
    return data
}
