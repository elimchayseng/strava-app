import NextAuth from "next-auth"
import StravaProvider from "next-auth/providers/strava"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    StravaProvider({
      clientId: process.env.STRAVA_CLIENT_ID,
      clientSecret: process.env.STRAVA_CLIENT_SECRET,
    })
  ]
})