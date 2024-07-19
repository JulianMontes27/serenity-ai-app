//The clerkMiddleware helper enables authentication and is where you'll configure your protected routes.
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/auth(.*)", "/portal(.*)", "/images(.*)"],
  ignoredRoutes: ["/chatbot"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
