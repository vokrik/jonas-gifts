import React from "react";
import {Box, Typography, Card, CardContent, Grid, styled} from "@mui/material";
import {FaCheck} from "react-icons/fa";
import {Button} from "@components/Button";
import type {PageSection} from "../types/event";
import ExtravagantButton from "@components/ExtravagantButton";

const StyledCard = styled(Card)(({theme}) => ({
    borderRadius: 16,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "translateY(-5px)"
    },
    background: "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)"
}));

type PricingCardProps = {
    title: string;
    price: string;
    features: string[];
    isPopular: boolean;
    period: string;
    onNavigate: () => void;
};

const PricingCard: React.FC<PricingCardProps> = ({title, price, features, isPopular, period, onNavigate}) => {
    const cardRef = React.useRef<HTMLDivElement>(null)
    const [offset, setOffset] = React.useState<{ x: number; y: number }>({x: 0, y: 0})
    const [duration, setDuration] = React.useState<number>(6.0)
    const [shouldStartMoving, setShouldStartMoving] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (!isPopular) return
        setTimeout(() => {
            setShouldStartMoving(true)
            const interval = setInterval(() => {
                setDuration((prev) => (prev > 0.8 ? prev - 0.1 : 0.8))
                setOffset((prevState) => ({x: prevState.x + 0.01, y: prevState.y + 0.01}))
                if (duration === 0.8) {
                    clearInterval(interval)
                }
            }, 100)
        }, 1500)


        const card = cardRef.current
        const btn = card.querySelector('button') as HTMLElement | null
        const br = btn.getBoundingClientRect()
        const x = br.left + br.width / 2
        const y = br.top + br.height / 2

        const buttonBasePosition = {x, y}

        let raf: number | null = null

        const handleMove = (e: MouseEvent) => {
            const dx = e.clientX - buttonBasePosition.x
            const dy = e.clientY - buttonBasePosition.y

            const targetX = dx
            const targetY = dy


            // Use rAF to avoid setting state too often
            if (raf) cancelAnimationFrame(raf)
            raf = requestAnimationFrame(() => {
                setOffset({x: targetX, y: targetY})
            })
        }

        const handleLeave = () => {
            // Smoothly reset to origin when mouse leaves viewport
            setOffset({x: 0, y: 0})
        }

        window.addEventListener('mousemove', handleMove)
        window.addEventListener('mouseleave', handleLeave)


        return () => {
            window.removeEventListener('mousemove', handleMove)
            window.removeEventListener('mouseleave', handleLeave)
            if (raf) cancelAnimationFrame(raf)
        }
    }, [isPopular, shouldStartMoving])
    return (
        <StyledCard
            ref={cardRef}
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: isPopular ? "2px solid #1976d2" : "none",
                transitionDuration: `${duration}s`,
                transitionDelay: 0,
                transitionTimingFunction: 'linear',
                // Disable hover lift for the chasing card to avoid transform conflicts
                '&:hover': isPopular ? {transform: 'none'} : undefined,
                willChange: isPopular ? 'transform' : undefined,
            }}
            style={isPopular && shouldStartMoving ? {
                zIndex: 10000,
                transform: `translate(${offset.x}px, ${offset.y}px)`
            } : undefined}
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
                {!isPopular ? (
                    <Button
                        variant="contained"
                        color={isPopular ? "primary" : "inherit"}
                        fullWidth
                        aria-label={`Choose ${title} plan`}
                        onClick={onNavigate}
                    >
                        Zobrazit seznam
                    </Button>
                ) : (
                    <ExtravagantButton onClick={onNavigate}>
                        Zobrazit seznam
                    </ExtravagantButton>
                )}


            </CardContent>
        </StyledCard>
    )
}

type PricingPlanProps = { eventTitle: string; pages: PageSection[]; onSelect?: (sectionId: string) => void };

const PricingPlan: React.FC<PricingPlanProps> = ({eventTitle, pages, onSelect}) => {
    const plans = pages.map(p => ({
        title: p.title,
        price: p.price,
        period: p.period,
        features: p.features,
        isPopular: p.isPopular,
        isEvergreen: p.isEvergreen,
        onNavigate: () => onSelect && onSelect(p.sectionId),
        sectionId: p.sectionId
    }))

    return (
        <Box sx={{maxWidth: 1200, margin: "0 auto", padding: 4}}>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{mb: 4, fontWeight: "bold"}}
            >
                {eventTitle}
            </Typography>
            <Grid container spacing={4}>
                {plans.filter(plan => !plan.isEvergreen).map((plan) => (
                    <Grid item xs={12} md={4} key={plan.sectionId}>
                        <PricingCard {...plan} />
                    </Grid>
                ))}
            </Grid>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{mb: 4, mt: 4, fontWeight: "bold"}}
            >
                Stálá nabídka
            </Typography>
            <Grid container spacing={4}>
                {plans.filter(plan => plan.isEvergreen).map((plan) => (
                    <Grid item xs={12} md={4} key={plan.sectionId}>
                        <PricingCard {...plan} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PricingPlan;
