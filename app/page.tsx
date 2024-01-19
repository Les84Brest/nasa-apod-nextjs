import Image from 'next/image'
import styles from './page.module.css'
import PhotoContent from '@/components/PhotoContent'

export default function Home() {

  return (
    <main className={styles.main}>
      <PhotoContent />

    </main>
  )
}
