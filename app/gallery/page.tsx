'use client'

import { GalleryContent } from "@/components/GalleryContent";
import { Container, Typography } from '@mui/material';

export default function Gallery() {

  return (
    <Container maxWidth="xl">
      <Typography variant='h3'>
        Pictures for the last 30 days
      </Typography>
      <GalleryContent />
    </Container>
  )

  return
}