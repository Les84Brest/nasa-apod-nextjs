'use client'

import { FC } from "react";
import useFetchPhoto from '@/hooks/useFetchPhoto'
import { Loader } from "./Loader";
import Image from "next/image";

export const PhotoContent: FC = () => {
  const { isLoading, photo } = useFetchPhoto();

  if (!photo) {
    return <Loader />
  }

  return (
    <div className="photo content">
      <Image
        src={photo?.hdurl}
        width={1500}
        height={1080}
        alt={photo.title}
      />
    </div>
  )
}
export default PhotoContent;