/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WorkspaceEnvelopeSummary,
  WorkspaceEnvelopeSummary$inboundSchema,
  WorkspaceEnvelopeSummary$Outbound,
  WorkspaceEnvelopeSummary$outboundSchema,
} from "./workspaceenvelopesummary.js";

export type GetWorkspaceEnvelopesResponse = {
  /**
   * The summary list of envelopes associated with the workspace
   */
  envelopes: Array<WorkspaceEnvelopeSummary> | null;
};

/** @internal */
export const GetWorkspaceEnvelopesResponse$inboundSchema: z.ZodType<
  GetWorkspaceEnvelopesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  envelopes: z.nullable(z.array(WorkspaceEnvelopeSummary$inboundSchema)),
});

/** @internal */
export type GetWorkspaceEnvelopesResponse$Outbound = {
  envelopes: Array<WorkspaceEnvelopeSummary$Outbound> | null;
};

/** @internal */
export const GetWorkspaceEnvelopesResponse$outboundSchema: z.ZodType<
  GetWorkspaceEnvelopesResponse$Outbound,
  z.ZodTypeDef,
  GetWorkspaceEnvelopesResponse
> = z.object({
  envelopes: z.nullable(z.array(WorkspaceEnvelopeSummary$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkspaceEnvelopesResponse$ {
  /** @deprecated use `GetWorkspaceEnvelopesResponse$inboundSchema` instead. */
  export const inboundSchema = GetWorkspaceEnvelopesResponse$inboundSchema;
  /** @deprecated use `GetWorkspaceEnvelopesResponse$outboundSchema` instead. */
  export const outboundSchema = GetWorkspaceEnvelopesResponse$outboundSchema;
  /** @deprecated use `GetWorkspaceEnvelopesResponse$Outbound` instead. */
  export type Outbound = GetWorkspaceEnvelopesResponse$Outbound;
}

export function getWorkspaceEnvelopesResponseToJSON(
  getWorkspaceEnvelopesResponse: GetWorkspaceEnvelopesResponse,
): string {
  return JSON.stringify(
    GetWorkspaceEnvelopesResponse$outboundSchema.parse(
      getWorkspaceEnvelopesResponse,
    ),
  );
}

export function getWorkspaceEnvelopesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetWorkspaceEnvelopesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetWorkspaceEnvelopesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetWorkspaceEnvelopesResponse' from JSON`,
  );
}
