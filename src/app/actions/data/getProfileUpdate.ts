'use server'
import { getServerSession } from 'next-auth'
import { PROFILE_UPDATE_ITEMS } from '@/components/constants/profile/profileUpdate';
import { authOptions } from '@/lib/authOptions';

const endPoint = process.env.BASE_URL + '/api/profile/update'

export const getProfileUpdate = async () => {
  const session = await getServerSession(authOptions);
  const id = session?.user?.id
  console.log('session', session)
  if (id) {
    const response = await fetch(endPoint + `?id=${id}`, {
      method: 'GET',
      next: {
        revalidate: 0
      }
    })
    if (response.ok === true) {
      return response.json();
    }
  }
  return {message: 'fail', content: PROFILE_UPDATE_ITEMS.initNewInfo}
}
