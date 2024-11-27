import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    // openssl rand -base64 32      NOTE: git bash terminal
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],

    pages:{
        signIn: "/auth/signin"
    }
}