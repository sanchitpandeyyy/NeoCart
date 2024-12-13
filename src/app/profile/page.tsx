import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { getUserById } from "../actions/user";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

const Login = async () => {
  const { getUser } = getKindeServerSession();
  const { id } = await getUser();
  const user = await getUserById(id);
  if (!user) {
    redirect("/login");
  }
  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Image
              alt="User"
              height={500}
              width={500}
              className="w-20 h-20 rounded-full"
              src="/images/apple.jpg"
            />
            <div>
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">User ID:</p>
            <p className="font-mono text-sm">{user.id}</p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">Rating:</p>
            <p className="text-lg font-semibold">
              {user.ratings.toFixed(1)} / 5
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/add/dashboard">
              <Button>Add</Button>
            </Link>
            <Button>Edit</Button>
            <Button variant="outline">
              <LogoutLink>logout</LogoutLink>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
