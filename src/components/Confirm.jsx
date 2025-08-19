import { Box, Typography } from "@mui/material";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const Confirm = () => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        backgroundColor: "#97B2CA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Contenedor interno */}
      <Box>
        {/* Icono animado */}
        <Box
          component="img"
          src="/images/003/DRESS.gif"
          alt="Ceremonia"
          sx={{
            width: 125,
            height: 125,
            mb: 1,
          }}
        />

        {/* Título principal cursiva */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Lejour'",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            color: "#5A7790",
            fontWeight: "semibold",
            mb: 2,
          }}
        >
          Confirmacion de asistencia
        </Typography>

        {/* Subtítulo más pequeño */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Catchy'",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            color: "#5A7790",
            mb: 4,
          }}
        >
          Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!
        </Typography>

        {/* Botón */}
        <ButtonLinks
          label="Confirmar Asistencia"
          href="https://docs.google.com/forms/d/e/1FAIpQLScxgDT68F2PwJIK1nRWFMeNmR_ZdwZzkcnVCX5l8q3i5-1L-A/viewform?usp=header"
          newTab
        />
      </Box>
    </Box>
  );
};

export default Confirm;
