import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { getUserById } from "../actions/user";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Login = async () => {
  const { getUser } = getKindeServerSession();
  const { id } = await getUser();
  const user = await getUserById(id);
  console.log(user);
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <img className="w-20 h-20 rounded-full" src="/images/apple.jpg" />
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
            <Button>Edit</Button>
            <Button variant="secondary">
              {" "}
              <LogoutLink>logout</LogoutLink>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
