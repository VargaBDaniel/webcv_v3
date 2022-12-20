import { Container, Typography } from "@mui/material"
import ParagraphTitle from "./components/ParagraphTitle"

const Introduction = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "600px",
        maxWidth: "800px",
      }}
    >
      <ParagraphTitle text={"Introduction"} />
      <Typography variant={"body1"} sx={{ textIndent: "10px" }}>
        {/* TODO::write content */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus neque, vulputate
        vel ante id, sagittis fringilla libero. Nullam sodales ut odio sed pharetra. Phasellus
        fringilla tristique consequat. Suspendisse condimentum ornare ipsum in commodo. Nam quam
        diam, maximus in lectus quis, commodo sollicitudin lectus. Vivamus vel nisl sagittis,
        dignissim nisl in, eleifend elit. Praesent ante eros, facilisis nec diam eget, feugiat
        maximus turpis. Vivamus eget quam sagittis, scelerisque sem sagittis, bibendum lacus.
        Pellentesque posuere eleifend velit, rhoncus tempor lacus vehicula vehicula. Suspendisse
        commodo felis vitae commodo imperdiet. Aliquam sollicitudin orci sed dui lobortis, id
        condimentum neque porta. Sed sed imperdiet mi, in rutrum sem. Integer in posuere velit, eget
        porta quam. Curabitur id bibendum felis.
      </Typography>
    </Container>
  )
}

export default Introduction
