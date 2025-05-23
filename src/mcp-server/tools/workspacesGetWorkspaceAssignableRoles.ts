/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workspacesGetWorkspaceAssignableRoles } from "../../funcs/workspacesGetWorkspaceAssignableRoles.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetWorkspaceAssignableRolesRequest$inboundSchema,
};

export const tool$workspacesGetWorkspaceAssignableRoles: ToolDefinition<
  typeof args
> = {
  name: "workspaces-get-workspace-assignable-roles",
  description: `Returns the roles the caller can assign to workspace users

This operation returns roles that are assignable to users in the workspace based on the caller's role in the workspace. Roles available include Manage (internal) and Participate (external). Participate is the default role.

Users within the account are considered "Internal" and may be assigned any role. Users outside the account are considered "External" and may only be assigned "External" roles.

Pagination is supported by passing \`start_position\` and \`count\` in the request. The response will include \`resultSetSize\`, \`start_position\`, and \`end_position\` which may be utilized for subsequent requests.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await workspacesGetWorkspaceAssignableRoles(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
