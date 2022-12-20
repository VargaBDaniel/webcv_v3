import { Box, Typography } from "@mui/material"
import { styles } from "../../../constants/config"

const Title = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography fontSize={80}>Daniel Varga</Typography>
      <Typography fontSize={24} color={styles.color.secondary}>
        Frontend developer
      </Typography>
    </Box>
  )
}

export default Title
