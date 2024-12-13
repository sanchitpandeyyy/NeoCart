import prisma from "@/lib/prisma";

export async function getUserById(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    console.log("User fetched:", user);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
