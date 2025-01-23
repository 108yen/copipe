import { withAuth } from "next-auth/middleware"

export default withAuth(
  // function middleware(req) {
  //   // callbacks.authorizedがtrueの場合のみ進入できる
  //   console.log("in middleware: ", req.nextauth.token);
  // },
  {
    callbacks: {
      authorized: ({ token }) => {
        return token?.email === "kazuking.1911@gmail.com"
      },
    },
  },
)

export const config = {
  matcher: ["/admin/:path*"],
}
