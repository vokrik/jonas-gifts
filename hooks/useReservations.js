import { useQuery } from '@tanstack/react-query'

const fetchReservations = async ()=> {
    const response = await fetch('https://hook.eu2.make.com/lpjfxqbbmovky7jk9g1bamefhc1o62y7')
    const data = await response.json()
    return data.reservations
}

const useReservations = () => {
    return useQuery({
        queryKey: ['reservations'],
        queryFn: () => fetchReservations(),
    })
}

export { useReservations, fetchReservations }
