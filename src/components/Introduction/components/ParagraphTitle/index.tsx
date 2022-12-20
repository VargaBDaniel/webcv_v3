import React from "react"
import { Box, Typography } from "@mui/material"
import { styles } from "../../../../constants/config"

interface Props {
  text: string
}

const ParagraphTitle = ({ text }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "40px",
        marginBlockEnd: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: styles.color.secondary,
          width: "6px",
          height: "100%",
          marginInline: "5px 10px",
        }}
      />
      <Typography fontSize={24} color={styles.color.primary}>
        {text}
      </Typography>
    </Box>
  )
}

export default ParagraphTitle
