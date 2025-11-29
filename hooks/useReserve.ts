import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { ReservePayload } from '../types/api'

const reserve = async (data: ReservePayload): Promise<void> => {
    const response = await fetch('https://hook.eu2.make.com/yyybkkqvox9qrsqjmjlixj4n2rnknvmi', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    })
}

const useReserve = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: reserve,
        onSuccess: () => {
            // After reserving, refresh unified event data
            queryClient.invalidateQueries({queryKey: ['event']})
        }
    })
}

export {useReserve, reserve}
