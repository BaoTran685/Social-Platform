'use server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions';
import { PROFILE_ITEMS } from '@/components/constantsFolder/profileFolder/profile';

const endPoint = process.env.BASE_URL + '/api/profile/profile'

export const getProfile = async () => {
  const session = await getServerSession(authOptions);
  const id = session?.user?.id;
  console.log('session', session);
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
  return {message: 'fail', content: PROFILE_ITEMS.initProfile}
}
