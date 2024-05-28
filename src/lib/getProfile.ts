import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

const endPoint = process.env.BASE_URL + '/api/profile/profile'

export const getProfile = async () => {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  console.log('session', session)
  const profile = await fetch(endPoint, {
    method: 'POST',
    body: JSON.stringify({ id }),
    next: {
      revalidate: 0
    }
  })
  return profile.json();
}
