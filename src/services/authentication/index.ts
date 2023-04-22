import { apolloClient } from "../../graphql";
import { LoginUserPayload, User } from "../../graphql/__generated__/graphql";
import { LOGIN } from "./queries";

class AuthService {
  async login(email: String, password: String): Promise<LoginUserPayload> {
    try {
      const response = await apolloClient.mutate({
        mutation: LOGIN,
        variables: { email, password },
      });

      if (!response || !response.data) throw new Error("Cannot sign user in!");

      return response.data.login;
    } catch (err) {
      throw err;
    }
  }
}

export default new AuthService();