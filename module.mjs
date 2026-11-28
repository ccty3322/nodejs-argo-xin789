// @ts-check
import { appRoot } from "@prisma/composer";
import nodejsArgoService from "./service.mjs";

export default appRoot("nodejs-argo-xin789", ({ provision }) => {
  provision(nodejsArgoService, { id: "nodejsargo" });
});
