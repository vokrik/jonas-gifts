import {Button as MaterialButton, styled} from "@mui/material";

export const Button = styled(MaterialButton)(({theme}) => ({
    marginTop: "auto",
    padding: "12px 24px",
    borderRadius: 8,
    textTransform: "none",
    fontWeight: 600,
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "scale(1.05)"
    }
}));