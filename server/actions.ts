import { defaultSession, SessionData, sessionOption } from "@/lib/interfaces";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getSession = async () => {
    "use server"
    const session = await getIronSession<SessionData>(cookies(), sessionOption);

    if(!session.isLoggedIn){
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    return session;
};

export const login = async (formData: FormData) => {
    "use server"
    const session = await getSession();
    
    const formEmail = formData.get('email') as string;
    const formPassword = formData.get('password') as string;
    //Check use in the DB
    //const user = await db.getUser({ email, password});
    const user = {
        id: 1,
        email: "test@test.com",
        username: "test_user",
        password: "test1234",
        isPremium: false
    };
   
    if(user.password !== formPassword) return redirect("/login")
    session.userId =  user.id.toString();
    session.username = user.username;
    session.isPremium = user.isPremium;
    session.isLoggedIn = true;
    await session.save();
    redirect("/");
};

export const logout = async () => {
    "use server"
    const session = await getSession();
    session.destroy()
    redirect('/');
};

export const changePremium = async () => {
    "use server"
    const session = await getSession();
    if(!session.userId) redirect("/login");

    session.isPremium = !session.isPremium;

    await session.save();
    revalidatePath("/profile")
}