import NextAuth from "next-auth";
import github from "next-auth/providers/github";

const authOptions = {
  // 在 providers 中配置更多授权服务
  providers: [github],
  debug: true,
};
export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
