import {
    Box,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

  const Thanks = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
    const desktopImage = "/images/003/GRACIAS.png";
    const mobileImage = "/images/003/GRACIAS.png";
  
   
  
    return (
      <Box
        sx={{
          position: "relative",
          height: "50vh",
          margin: 0,
          padding: 0,
          backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Capa oscura */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "transparent",
            zIndex: 1,
          }}
        />
  
        {/* Contenido principal */}
        <Box
          sx={{
            zIndex: 2,
            px: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "transform 1s ease",
          }}
        >
      
  
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            animation: "bounce 2s infinite",
            fontSize: "3rem",
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": {
                transform: "translateX(-50%) translateY(0)",
              },
              "40%": {
                transform: "translateX(-50%) translateY(-10px)",
              },
              "60%": {
                transform: "translateX(-50%) translateY(-5px)",
              },
            },
          }}
        >
          
        </Box>
      </Box>
    );
  };
  
  export default Thanks;
  