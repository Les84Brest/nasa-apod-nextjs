'use client'

import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import { IDailyPhoto } from '@/types/types';

interface ApodCardProps {
  image: IDailyPhoto
}

export default function ApodCard({image}: ApodCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image.url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {image.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {image.explanation}
        </Typography>
      </CardContent>    
    </Card>
  );
}