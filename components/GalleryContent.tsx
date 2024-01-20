'use client'

import dayjs, { Dayjs } from "dayjs";
import { FC, useState } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material'
import s from './GalleryContent.module.css';
import useFetchGallery from "@/hooks/useFetchGallery";
import { formatDate } from "@/utils/formatDate";
import { Loader } from "./Loader";
import ApodCard from "./ApodCard";

export const GalleryContent: FC = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs().subtract(30, 'day'));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());

  const { isLoading, photoGallery } = useFetchGallery(formatDate(startDate), formatDate(endDate));
  console.log('%cphoto gal', 'padding: 5px; background: DarkKhaki; color: Yellow;', photoGallery);

  const handleEndDateChange = (newValue: Dayjs | null) => setEndDate(newValue)
  const handleStartDateChange = (newValue: Dayjs | null) => setStartDate(newValue)

  if (!photoGallery) {
    return <Loader />
  }

  const renderGallery = () => {
    return photoGallery.map((item, index) => {
      return (
        <Grid item xs={4} key={index}>
          <Card key={index}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.url}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="h5" component="h2">
                Date: {item.date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )
    })
  }
  return (

    <div className="gallery">
      <div className={s.servise}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
      <Grid container spacing={3}>
        {renderGallery()}
      </Grid>

    </div>
  )
}