/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateWorkspaceUserRequest = {
  /**
   * The ID of the account
   */
  accountId: string;
  /**
   * The ID of the workspace
   */
  workspaceId: string;
  /**
   * The ID of the user to update
   */
  userId: string;
  /**
   * The user details to update to including the RoleId
   */
  workspaceUserForUpdate?: components.WorkspaceUserForUpdate | undefined;
};

/** @internal */
export const UpdateWorkspaceUserRequest$inboundSchema: z.ZodType<
  UpdateWorkspaceUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountId: z.string(),
  workspaceId: z.string(),
  userId: z.string(),
  WorkspaceUserForUpdate: components.WorkspaceUserForUpdate$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "WorkspaceUserForUpdate": "workspaceUserForUpdate",
  });
});

/** @internal */
export type UpdateWorkspaceUserRequest$Outbound = {
  accountId: string;
  workspaceId: string;
  userId: string;
  WorkspaceUserForUpdate?:
    | components.WorkspaceUserForUpdate$Outbound
    | undefined;
};

/** @internal */
export const UpdateWorkspaceUserRequest$outboundSchema: z.ZodType<
  UpdateWorkspaceUserRequest$Outbound,
  z.ZodTypeDef,
  UpdateWorkspaceUserRequest
> = z.object({
  accountId: z.string(),
  workspaceId: z.string(),
  userId: z.string(),
  workspaceUserForUpdate: components.WorkspaceUserForUpdate$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    workspaceUserForUpdate: "WorkspaceUserForUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWorkspaceUserRequest$ {
  /** @deprecated use `UpdateWorkspaceUserRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateWorkspaceUserRequest$inboundSchema;
  /** @deprecated use `UpdateWorkspaceUserRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateWorkspaceUserRequest$outboundSchema;
  /** @deprecated use `UpdateWorkspaceUserRequest$Outbound` instead. */
  export type Outbound = UpdateWorkspaceUserRequest$Outbound;
}

export function updateWorkspaceUserRequestToJSON(
  updateWorkspaceUserRequest: UpdateWorkspaceUserRequest,
): string {
  return JSON.stringify(
    UpdateWorkspaceUserRequest$outboundSchema.parse(updateWorkspaceUserRequest),
  );
}

export function updateWorkspaceUserRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateWorkspaceUserRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateWorkspaceUserRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateWorkspaceUserRequest' from JSON`,
  );
}
