import styles from './page.module.css'
import PhotoContent from '@/components/PhotoContent'
import { Container, Typography } from '@mui/material';

export default function Home() {

  return (
    <div className={styles.main}>
      <Container maxWidth="xl">
        <Typography variant='h3'>
          NASA Astronomy Picture of the Day
        </Typography>
        
        <PhotoContent />
      </Container>
    </div>
  )
}
