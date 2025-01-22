// -< Import Firestore >-
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/config'
import Link from 'next/link'

// Types
import IPost from '@/interfaces/IPost'
interface IProps {
  posts: IPost[]
}

export default function Home({ posts }: IProps) {
  return (
    <>
      <h1>Posts</h1>
    </>
  )
}

// -< Firestore >-
export async function getStaticProps() {
  const snapshot = await getDocs(collection(db, 'posts'))
  const posts = snapshot.docs.map((doc) => ({
    // * assign id property to each post (from Firestore document id)
    id: doc.id,
    ...doc.data(),
  }))

  return {
    props: {
      posts,
    },
  }
}
