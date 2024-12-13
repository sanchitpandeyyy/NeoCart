// import prisma from "@/lib/prisma";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) {
      return NextResponse.json(
        { error: "User not found in session." },
        { status: 401 }
      );
    }

    let dbUser = await prisma.user.findUnique({
      where: { id: user.id },
    });

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          id: user.id,
          name: ((user.given_name as string) +
            " " +
            user.family_name) as string,
          email: user.email as string,
        },
      });
    }

    return NextResponse.redirect(process.env.NEXT_PUBLIC_URL + "/profile", 307);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
};
