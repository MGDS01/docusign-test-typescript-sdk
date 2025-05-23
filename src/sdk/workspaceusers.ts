/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workspaceUsersAddWorkspaceUser } from "../funcs/workspaceUsersAddWorkspaceUser.js";
import { workspaceUsersGetWorkspaceUsers } from "../funcs/workspaceUsersGetWorkspaceUsers.js";
import { workspaceUsersRestoreWorkspaceUserAccess } from "../funcs/workspaceUsersRestoreWorkspaceUserAccess.js";
import { workspaceUsersRevokeWorkspaceUserAccess } from "../funcs/workspaceUsersRevokeWorkspaceUserAccess.js";
import { workspaceUsersUpdateWorkspaceUser } from "../funcs/workspaceUsersUpdateWorkspaceUser.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class WorkspaceUsers extends ClientSDK {
  /**
   * Retrieves the list of users in the given workspace
   *
   * @remarks
   * This operations retrieves the users in a workspace. Users sent envelopes or assigned tasks will automatically be added to the workspace with the Participate role.
   *
   * Pagination is supported by passing `start_position` and `count` in the request. The response will include `resultSetSize`, `start_position`, and `end_position` which may be utilized for subsequent requests.
   */
  async getWorkspaceUsers(
    request: operations.GetWorkspaceUsersRequest,
    options?: RequestOptions,
  ): Promise<components.GetWorkspaceUsersResponse> {
    return unwrapAsync(workspaceUsersGetWorkspaceUsers(
      this,
      request,
      options,
    ));
  }

  /**
   * Adds a user to the workspace by email address
   *
   * @remarks
   * This operation manually adds an internal or external user to a specific workspace by email address. Users within the account are considered "Internal" and may be assigned any role. Users outside the account are considered "External" and may only be assigned the Participate role. This operation is not typically needed for adding external participants to a Workspace as they will be automatically added as tasks are assigned.
   *
   * Available role IDs can be retrieved via the Assignable Roles operation on a workspace. If the `role_id` is not passed, the user is added with the Participate role.
   */
  async addWorkspaceUser(
    request: operations.AddWorkspaceUserRequest,
    options?: RequestOptions,
  ): Promise<components.CreateWorkspaceUserResponse> {
    return unwrapAsync(workspaceUsersAddWorkspaceUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Updates the specified user's role
   *
   * @remarks
   * This operation updates the specified user's role in the workspace. Users within the account are considered "Internal" and may be assigned any role. Users outside the account are considered "External" and may only be assigned "External" roles.
   */
  async updateWorkspaceUser(
    request: operations.UpdateWorkspaceUserRequest,
    options?: RequestOptions,
  ): Promise<components.UpdateWorkspaceUserResponse> {
    return unwrapAsync(workspaceUsersUpdateWorkspaceUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Revokes the specified user's access to the workspace
   *
   * @remarks
   * This operation revokes the specified user's access to the workspace. The optional `revocation_date` may be set to schedule revocation in the future. If not specified, the revocation will be immediate.
   */
  async revokeWorkspaceUserAccess(
    request: operations.RevokeWorkspaceUserAccessRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(workspaceUsersRevokeWorkspaceUserAccess(
      this,
      request,
      options,
    ));
  }

  /**
   * Restores the specified user's access to the workspace
   *
   * @remarks
   * This operation restores the specified user's access to the workspace. The user must have been previously revoked from the workspace. The access is immediately restored.
   */
  async restoreWorkspaceUserAccess(
    request: operations.RestoreWorkspaceUserAccessRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(workspaceUsersRestoreWorkspaceUserAccess(
      this,
      request,
      options,
    ));
  }
}
