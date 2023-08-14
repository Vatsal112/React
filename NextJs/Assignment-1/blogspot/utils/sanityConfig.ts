import { createClient, type ClientConfig } from "@sanity/client";

export const config: ClientConfig = {
  projectId: "kga4x4qi",
  dataset: "production",
  apiVersion: "2023-10-10",
  useCdn: false,
};

const client = createClient(config);

export default client;