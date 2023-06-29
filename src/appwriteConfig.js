//

import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("649d650832b8ad91e687");

export const account = new Account(client);

export default client;
