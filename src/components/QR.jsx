import { Box, Typography, Fade, Divider, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";

const QrButton = ({
  label,
  href,
  onClick,
  newTab = false,
  sx,
  bounce = true,
}) => {
  const baseSx = {
    borderRadius: 999,
    px: 4,
    backgroundColor: "#ffffff",
    fontFamily: "'Catchy'",
    color: "#5A7790",
    boxShadow: "none",
    transition: "all 0.3s ease",
    ...(bounce && { animation: "bounceBtn 2s infinite" }),
    "@keyframes bounceBtn": {
      "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
      "40%": { transform: "translateY(-6px)" },
      "60%": { transform: "translateY(-3px)" },
    },
    "&:hover": {
      backgroundColor: "#fff",
      color: "#536449",
      transform: "scale(1.05)",
    },
  };

  return (
    <Button
      {...(href
        ? {
            component: "a",
            href,
            target: newTab ? "_blank" : undefined,
            rel: newTab ? "noopener noreferrer" : undefined,
            style: { textDecoration: "none" },
          }
        : {})}
      onClick={onClick}
      variant="contained"
      sx={[baseSx, sx]}
    >
      {label}
    </Button>
  );
};

const Qr = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "30vh",
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
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.6s ease-out",
          }}
        >
          {/* Imagen centrada */}
          <Box display="flex" justifyContent="center" mb={2}>
            <Box
              component="img"
              src="/images/003/qr.png"
              alt="Código QR"
              sx={{ width: 200, height: 200, objectFit: "contain" }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Lejour'",
              fontSize: { xs: "2rem", md: "3.5rem" },
              color: "#ffffff",
              mb: 3,
            }}
          >
            Escanea este QR
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Catchy'",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#ffffff",
              mb: 2,
            }}
          >
            ¡Compartí las fotos que saques en mi cumpleaños conmigo!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Catchy'",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#ffffff",
              mb: 1,
            }}
          >
            O podés presionar aquí
          </Typography>

          <Box mt={2}>
            <QrButton
              label="Ir Al Album"
              href="https://photos.google.com/share/AF1QipNrbjwGmp91UljZg5KGeaKidRyuNzcJiyaPlZP4elnkH3FKRoISAJV_frMpwaeNjA?key=ZkNhRFQyNW12V1kwQXBadUFyaUh6WnFYQjQwZDB3"
              newTab
            />
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default Qr;
