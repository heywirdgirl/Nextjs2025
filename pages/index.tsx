// -< Import Firestore >-
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/config'
import Link from 'next/link'

// Types
import IPost from '@/interfaces/IPost'


export default function Home() {
  return (
    <>
      <h1>Posts</h1>
    </>
  )
}


