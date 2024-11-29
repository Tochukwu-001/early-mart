import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

const SignInPage = async () => {
    const session = await auth()

    if (session) {
        redirect("/post-product")
    }
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <button type="submit">Signin with Google</button>
        </form>
    );
};

export default SignInPage;
