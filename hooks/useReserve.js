import {useMutation, useQueryClient} from '@tanstack/react-query'

const reserve = async (data) => {
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
            queryClient.invalidateQueries([{queryKey: ['reservations']}])
        }
    })
}

export {useReserve, reserve}
