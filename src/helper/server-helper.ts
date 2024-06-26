import prisma from "@/lib/prisma"

export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.log(error);
    throw new Error("Unable to Connect to the MongoDb Database");
  }
}