import type { CodegenConfig } from "@graphql-codegen/cli";

const API_HOST =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4000"
    : "https://https://dev-api.frappy.app/graphql";

export default {
  schema: `${API_HOST}/graphql`,
  documents: ["src/**/*.graphql"],
  generates: {
    "src/@generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
} as CodegenConfig;
