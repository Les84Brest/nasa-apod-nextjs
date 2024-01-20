'use client'

import { FC, useState } from "react";
import useFetchPhoto from '@/hooks/useFetchPhoto'
import { Loader } from "./Loader";
import Image from "next/image";
import { Typography } from '@mui/material';
import s from './PhotoContent.module.css'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from "dayjs";
import { formatDate } from "@/utils/formatDate";

export const PhotoContent: FC = () => {

  const [photoDate, setPhotoDate] = useState<Dayjs | null>(dayjs());
  const { isLoading, photo } = useFetchPhoto(formatDate(photoDate));

  if (!photo) {
    return <Loader />
  }

  const handleChangeDate = (newValue: Dayjs | null) => setPhotoDate(newValue)

  return (
    <div className="photo">
      <div className={s.servise}>
        <Typography variant="h5" gutterBottom>
          {photo.title}
        </Typography>

        <DatePicker
          label="Day"
          value={photoDate}
          onChange={handleChangeDate}
        />
      </div>
      <img src={photo?.hdurl} className={s.photo__image} alt={photo.title} />
      <Typography variant="body1" gutterBottom>
        {photo.explanation}
      </Typography>
    </div>
  )
}
export default PhotoContent;