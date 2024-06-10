'use server';

import prisma from '@/lib/prisma'; // Import Prisma client
import { CreatePost_ResponseFromServer } from "@/components/Types/Profile/createPost"; // Ensure this import path is correct

interface savePostProps {
  title: string;
  content: string;
  date: string;
  id: string;
}

//savePost function 
export const savePost = async ({
  title,
  content,
  date,
  id
}: savePostProps): Promise<CreatePost_ResponseFromServer> => {
  try {

    // In case title or content is empty 
    if (title == "" || content == "") {
      if (content) {return { errorMessage: { validation: 'Title are required' }, message:  'Title are required', ok: false };}
      if (title){return { errorMessage: { validation: 'Content are required' }, message:  'Content are required', ok: false };}
      return { errorMessage: { validation: 'Title and Content are required' }, message:  'Title and Content are required', ok: false }
      
    }

    // Create a new post 
    await prisma.post.create({
      data: {
        title: title,
        content: content,
        authorId: id, 
        createdAt: new Date(date),
      }
    });

    // Success response if the post is created
    return { errorMessage: {}, message: 'Successfully created', ok: true };
  } catch (e) {
    // Log any errors
    console.log('Error in savePost', e);
  }

  // Failure response if an error occurs
  return { errorMessage: {}, message: 'Failed to create post', ok: false };
};
