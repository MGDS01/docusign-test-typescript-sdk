# WorkspaceUsers
(*workspaceUsers*)

## Overview

### Available Operations

* [getWorkspaceUsers](#getworkspaceusers) - Retrieves the list of users in the given workspace
* [addWorkspaceUser](#addworkspaceuser) - Adds a user to the workspace by email address
* [updateWorkspaceUser](#updateworkspaceuser) - Updates the specified user's role
* [revokeWorkspaceUserAccess](#revokeworkspaceuseraccess) - Revokes the specified user's access to the workspace
* [restoreWorkspaceUserAccess](#restoreworkspaceuseraccess) - Restores the specified user's access to the workspace

## getWorkspaceUsers

This operations retrieves the users in a workspace. Users sent envelopes or assigned tasks will automatically be added to the workspace with the Participate role.

Pagination is supported by passing `start_position` and `count` in the request. The response will include `resultSetSize`, `start_position`, and `end_position` which may be utilized for subsequent requests.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaceUsers.getWorkspaceUsers({
    accountId: "23f0ff88-a4bb-40fa-83e8-2e618ef6da3c",
    workspaceId: "47d954a1-024f-4fab-a017-999dd8078165",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocusignTypescriptTest2Core } from "docusign-typescript-test-2/core.js";
import { workspaceUsersGetWorkspaceUsers } from "docusign-typescript-test-2/funcs/workspaceUsersGetWorkspaceUsers.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspaceUsersGetWorkspaceUsers(docusignTypescriptTest2, {
    accountId: "23f0ff88-a4bb-40fa-83e8-2e618ef6da3c",
    workspaceId: "47d954a1-024f-4fab-a017-999dd8078165",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceUsersRequest](../../models/operations/getworkspaceusersrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceUsersResponse](../../models/components/getworkspaceusersresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## addWorkspaceUser

This operation manually adds an internal or external user to a specific workspace by email address. Users within the account are considered "Internal" and may be assigned any role. Users outside the account are considered "External" and may only be assigned the Participate role. This operation is not typically needed for adding external participants to a Workspace as they will be automatically added as tasks are assigned.

Available role IDs can be retrieved via the Assignable Roles operation on a workspace. If the `role_id` is not passed, the user is added with the Participate role.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaceUsers.addWorkspaceUser({
    accountId: "ccffb2a1-a160-42aa-9a14-0df308322637",
    workspaceId: "e089417f-24b7-40e9-b0ca-215b2cb24e7b",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocusignTypescriptTest2Core } from "docusign-typescript-test-2/core.js";
import { workspaceUsersAddWorkspaceUser } from "docusign-typescript-test-2/funcs/workspaceUsersAddWorkspaceUser.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspaceUsersAddWorkspaceUser(docusignTypescriptTest2, {
    accountId: "ccffb2a1-a160-42aa-9a14-0df308322637",
    workspaceId: "e089417f-24b7-40e9-b0ca-215b2cb24e7b",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddWorkspaceUserRequest](../../models/operations/addworkspaceuserrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateWorkspaceUserResponse](../../models/components/createworkspaceuserresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## updateWorkspaceUser

This operation updates the specified user's role in the workspace. Users within the account are considered "Internal" and may be assigned any role. Users outside the account are considered "External" and may only be assigned "External" roles.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaceUsers.updateWorkspaceUser({
    accountId: "e2f6bd9b-e417-4ccc-b2cd-ecdc76a9a4ca",
    workspaceId: "61e66166-7fc8-4df1-9b59-69afe5877b2b",
    userId: "00960462-d5ff-4660-808b-b42e1dc30b9e",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocusignTypescriptTest2Core } from "docusign-typescript-test-2/core.js";
import { workspaceUsersUpdateWorkspaceUser } from "docusign-typescript-test-2/funcs/workspaceUsersUpdateWorkspaceUser.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspaceUsersUpdateWorkspaceUser(docusignTypescriptTest2, {
    accountId: "e2f6bd9b-e417-4ccc-b2cd-ecdc76a9a4ca",
    workspaceId: "61e66166-7fc8-4df1-9b59-69afe5877b2b",
    userId: "00960462-d5ff-4660-808b-b42e1dc30b9e",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateWorkspaceUserRequest](../../models/operations/updateworkspaceuserrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UpdateWorkspaceUserResponse](../../models/components/updateworkspaceuserresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## revokeWorkspaceUserAccess

This operation revokes the specified user's access to the workspace. The optional `revocation_date` may be set to schedule revocation in the future. If not specified, the revocation will be immediate.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  await docusignTypescriptTest2.workspaceUsers.revokeWorkspaceUserAccess({
    accountId: "c5cf2322-7ff7-4a37-b361-cbcedd0d2da6",
    workspaceId: "eff7a823-195f-4533-b26f-3f00c48e15b0",
    userId: "a8f62da2-ab0f-4dd1-a202-1404e65d3855",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocusignTypescriptTest2Core } from "docusign-typescript-test-2/core.js";
import { workspaceUsersRevokeWorkspaceUserAccess } from "docusign-typescript-test-2/funcs/workspaceUsersRevokeWorkspaceUserAccess.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspaceUsersRevokeWorkspaceUserAccess(docusignTypescriptTest2, {
    accountId: "c5cf2322-7ff7-4a37-b361-cbcedd0d2da6",
    workspaceId: "eff7a823-195f-4533-b26f-3f00c48e15b0",
    userId: "a8f62da2-ab0f-4dd1-a202-1404e65d3855",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RevokeWorkspaceUserAccessRequest](../../models/operations/revokeworkspaceuseraccessrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## restoreWorkspaceUserAccess

This operation restores the specified user's access to the workspace. The user must have been previously revoked from the workspace. The access is immediately restored.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  await docusignTypescriptTest2.workspaceUsers.restoreWorkspaceUserAccess({
    accountId: "f2a0c30e-48e9-429a-8e7f-cb9b2912842a",
    workspaceId: "6bcb9933-72ad-4255-9471-f3a48f233c64",
    userId: "12447a3a-c25d-4b6e-a207-1450453e6c62",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocusignTypescriptTest2Core } from "docusign-typescript-test-2/core.js";
import { workspaceUsersRestoreWorkspaceUserAccess } from "docusign-typescript-test-2/funcs/workspaceUsersRestoreWorkspaceUserAccess.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspaceUsersRestoreWorkspaceUserAccess(docusignTypescriptTest2, {
    accountId: "f2a0c30e-48e9-429a-8e7f-cb9b2912842a",
    workspaceId: "6bcb9933-72ad-4255-9471-f3a48f233c64",
    userId: "12447a3a-c25d-4b6e-a207-1450453e6c62",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RestoreWorkspaceUserAccessRequest](../../models/operations/restoreworkspaceuseraccessrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |