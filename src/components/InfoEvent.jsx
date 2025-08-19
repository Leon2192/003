import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  Slide,
} from "@mui/material";
import ChurchIcon from "@mui/icons-material/Church";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { useInView } from "react-intersection-observer";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        py: 6,
        px: 2,
        backgroundColor: "#97B2CA",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {/* Columna Izquierda */}
        <Grid item xs={12} md={6}>
          <Slide in={inView} direction="left" timeout={800}>
            <Box sx={{ textAlign: "center" }}>
            <Box
  component="img"
  src="/images/003/FIESTA.gif"
  alt="Ceremonia"
  sx={{
    width: 200,       // equivalente a fontSize: 100
    height: 200,
    mb: 1
  }}
/>

              <Typography
                variant="h5"
                fontWeight="semibold"
                gutterBottom
                sx={{
                  fontFamily: "'Lejour'",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  color: "#5A7790"
                }}
              >
                Fiesta
              </Typography>
              <Typography 
  variant="body1" 
  color="text.secondary" 
  sx={{mb: 1, fontFamily: "'Catchy', serif", fontSize: { xs: "0.9rem", md: "1.5em" }, color: "#5A7790",   fontWeight: "bold", }}
>
 08 de Noviembre de 2025
</Typography>

<Typography 
  variant="body1" 
  color="text.secondary" 
  sx={{ mb: 1, fontFamily: "'Catchy', serif", fontSize: { xs: "0.9rem", md: "1.5rem" },  color: "#5A7790",   fontWeight: "bold",}}
>
  21:00 hs.
</Typography>

<Typography 
  variant="body1" 
  color="text.secondary" 
  sx={{ mb: 4, fontFamily: "'Catchy', serif", fontSize: { xs: "0.9rem", md: "1.5em" } ,  color: "#5A7790",   fontWeight: "bold",}}
>
  Costanera Laguna La Rosita, Castelli, Buenos Aires
</Typography>

 
<ButtonLinks
  label="Como llegar"
  href="https://www.google.com/maps/place/Club+Pesca+y+N%C3%A1utica+Castelli/@-36.0916687,-57.7922211,17z/data=!3m1!4b1!4m6!3m5!1s0x9599ae4fef1d10d9:0x56a3ff27f296dfe!8m2!3d-36.0916687!4d-57.7922211!16s%2Fg%2F11c1xm6nzm?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
  newTab
/>
            </Box>
          </Slide>
        </Grid>

   
      </Grid>
    </Box>
  );
};

export default InfoEvent;
