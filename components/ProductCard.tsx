import React from 'react'
import {
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Alert,
    Link as MuiLink,
    TextField,
    Box
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import {Button} from '@components/Button'
import type {Product} from '../types/event'

export type ProductCardProps = Product & { isReservable?: boolean; onReserve: (name: string) => void }

function ReserveForm({onReserve}: { onReserve: (name: string) => void }) {
    const [name, setName] = React.useState('')
    const [submitting, setSubmitting] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!name.trim()) return
        try {
            setSubmitting(true)
            await Promise.resolve(onReserve(name.trim()))
            setName('')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{width: '100%', display: 'flex', gap: 1}}>
            <TextField
                size="small"
                label="Vaše jméno"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
            />
            <Button type="submit" variant="contained" disabled={submitting || !name.trim()}>
                Rezervovat
            </Button>
        </Box>
    )
}

export default function ProductCard({
                                        isReservable,
                                        image,
                                        title,
                                        price,
                                        link,
                                        isReserved,
                                        onReserve
                                    }: ProductCardProps) {
    return (
        <Card variant="outlined" sx={{maxWidth: 500}}>
            <CardMedia component="img" height="350" image={image}/>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                <Typography variant="h6" sx={{color: 'text.secondary'}}>
                    Přibližná cena: {price} Kč
                </Typography>
                {link && (
                    <MuiLink target="_blank" href={link}>
                        Odkaz do e-shopu
                    </MuiLink>
                )}
            </CardContent>
            {isReservable ?? <CardActions>
                {!isReserved ? (
                    <ReserveForm onReserve={onReserve}/>
                ) : (
                    <Alert icon={<CheckIcon fontSize="inherit"/>} sx={{width: '100%'}} severity="success">
                        Rezervováno
                    </Alert>
                )}
            </CardActions>}

        </Card>
    )
}
