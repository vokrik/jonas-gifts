import React from "react";
import {Box, Typography, Card, CardContent, Grid, styled} from "@mui/material";
import {FaCheck} from "react-icons/fa";
import {Button} from "@components/Button";
import { useRouter } from 'next/navigation'

const StyledCard = styled(Card)(({theme}) => ({
    borderRadius: 16,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "translateY(-5px)"
    },
    background: "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)"
}));



const PricingCard = ({title, price, features, isPopular, period, onNavigate}) => (
    <StyledCard
        sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            border: isPopular ? "2px solid #1976d2" : "none"
        }}
    >
        {isPopular && (
            <Box
                sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    backgroundColor: "#1976d2",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: 12,
                    fontSize: 14
                }}
            >
                Popular
            </Box>
        )}
        <CardContent sx={{height: "100%", display: "flex", flexDirection: "column"}}>
            <Typography variant="h5" component="div" gutterBottom fontWeight="bold">
                {title}
            </Typography>
            <Box sx={{display: "flex", alignItems: "baseline", mb: 2}}>
                <Typography variant="h3" component="span" fontWeight="bold">
                    {price}
                </Typography>
                <Typography variant="subtitle1" component="span" sx={{ml: 1}}>
                    /{period}
                </Typography>
            </Box>
            <Box sx={{mb: 3}}>
                {features.map((feature, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 1,
                            color: "text.secondary"
                        }}
                    >
                        <FaCheck style={{marginRight: 8, color: "#1976d2"}}/>
                        <Typography>{feature}</Typography>
                    </Box>
                ))}
            </Box>
            <Button
                variant="contained"
                color={isPopular ? "primary" : "inherit"}
                fullWidth
                aria-label={`Choose ${title} plan`}
                onClick={onNavigate}
            >
                Zobrazit seznam
            </Button>
        </CardContent>
    </StyledCard>
);

const PricingPlan = () => {
    const router = useRouter()


    const plans = [
        {
            title: "Děláme Jonášovi radost",
            price: "1-500",
            period: "kč",
            features: [
                "Jonáš si bude mít s čím hrát",
                "Naplňuje filosofii méně je více",
                "Karma +10 bodů"
            ],
            isPopular: false,
            onNavigate: () => router.push('/delame-radost')
        },
        {
            title: "Rozmazlujeme Jonáše",
            price: "500+",
            period: "kč",
            features: [
                "Foto se štastným Jonášem a vybranou hračkou",
                "Jonáš bude o krok blíže k tomu být rozmazlené dítě",
                "Karma +100 bodů",
            ],
            isPopular: false,
            onNavigate: () => router.push('/rozmazlujeme')
        },
        {
            title: "Taťkova volba",
            price: "😅",
            period: "kč",
            features: [
                "Daddy approves!",
                "Jonáše naučíme vaše jméno mezi prvními",
                "Foto se štastným Jonášem a Taťkou",
                "Karma +1000 bodů",
            ],
            isPopular: true,
            onNavigate: () => router.push('/daddy'),
        }
    ]

    return (
        <Box sx={{maxWidth: 1200, margin: "0 auto", padding: 4}}>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{mb: 4, fontWeight: "bold"}}
            >
                Jonášovy Vánoce
            </Typography>
            <Grid container spacing={4}>
                {plans.map((plan, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <PricingCard {...plan} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PricingPlan;