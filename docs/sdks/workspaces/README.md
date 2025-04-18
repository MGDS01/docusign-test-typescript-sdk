# Workspaces
(*workspaces*)

## Overview

### Available Operations

* [getWorkspaces](#getworkspaces) - Gets workspaces available to the calling user
* [createWorkspace](#createworkspace) - Creates a new workspace
* [getWorkspace](#getworkspace) - Returns details about the workspace
* [getWorkspaceAssignableRoles](#getworkspaceassignableroles) - Returns the roles the caller can assign to workspace users
* [createWorkspaceEnvelope](#createworkspaceenvelope) - Creates an envelope with the given documents. Returns the ID of the created envelope
* [getWorkspaceEnvelopes](#getworkspaceenvelopes) - Returns the envelopes associated with the given workspace

## getWorkspaces

This operation retrieves a list of workspaces available to the calling user. It returns basic information about each workspace, including its unique identifier (ID), name, and metadata such as when it was created and by whom.

Pagination is supported by passing `start_position` and `count` in the request. The response will include `resultSetSize`, `start_position`, and `end_position` which may be utilized for subsequent requests.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaces.getWorkspaces({
    accountId: "d1bb97d0-cd2e-4197-a211-df866518b12e",
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
import { workspacesGetWorkspaces } from "docusign-typescript-test-2/funcs/workspacesGetWorkspaces.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspacesGetWorkspaces(docusignTypescriptTest2, {
    accountId: "d1bb97d0-cd2e-4197-a211-df866518b12e",
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
| `request`                                                                                                                                                                      | [operations.GetWorkspacesRequest](../../models/operations/getworkspacesrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspacesResponse](../../models/components/getworkspacesresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## createWorkspace

This operation creates a new workspace. The calling user is automatically added as a member of the workspace with the role of Manage.

Once created, the `workspace_id` is utilized to associate tasks such as envelopes. Participants on tasks will automatically be added to the workspace with the Participate role.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaces.createWorkspace({
    accountId: "20438055-b036-4cd0-bcf0-425b53b0c039",
    createWorkspaceBody: {
      name: "<value>",
    },
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
import { workspacesCreateWorkspace } from "docusign-typescript-test-2/funcs/workspacesCreateWorkspace.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspacesCreateWorkspace(docusignTypescriptTest2, {
    accountId: "20438055-b036-4cd0-bcf0-425b53b0c039",
    createWorkspaceBody: {
      name: "<value>",
    },
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
| `request`                                                                                                                                                                      | [operations.CreateWorkspaceRequest](../../models/operations/createworkspacerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateWorkspaceResponse](../../models/components/createworkspaceresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getWorkspace

This operation retrieves details about a specific workspace. It returns the workspace's unique identifier (ID), name, and metadata such as when it was created and by whom.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaces.getWorkspace({
    accountId: "d0731b89-4f40-4d47-a8c6-a1c6b63228dc",
    workspaceId: "6dbccd48-3f7c-402f-b6de-3e36daff3b94",
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
import { workspacesGetWorkspace } from "docusign-typescript-test-2/funcs/workspacesGetWorkspace.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspacesGetWorkspace(docusignTypescriptTest2, {
    accountId: "d0731b89-4f40-4d47-a8c6-a1c6b63228dc",
    workspaceId: "6dbccd48-3f7c-402f-b6de-3e36daff3b94",
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
| `request`                                                                                                                                                                      | [operations.GetWorkspaceRequest](../../models/operations/getworkspacerequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceResponse](../../models/components/getworkspaceresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getWorkspaceAssignableRoles

This operation returns roles that are assignable to users in the workspace based on the caller's role in the workspace. Roles available include Manage (internal) and Participate (external). Participate is the default role.

Users within the account are considered "Internal" and may be assigned any role. Users outside the account are considered "External" and may only be assigned "External" roles.

Pagination is supported by passing `start_position` and `count` in the request. The response will include `resultSetSize`, `start_position`, and `end_position` which may be utilized for subsequent requests.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaces.getWorkspaceAssignableRoles({
    accountId: "412ae55e-dd69-47c7-bc4a-568d48d1542a",
    workspaceId: "d243e618-a66a-493b-be80-92ab46fe07df",
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
import { workspacesGetWorkspaceAssignableRoles } from "docusign-typescript-test-2/funcs/workspacesGetWorkspaceAssignableRoles.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspacesGetWorkspaceAssignableRoles(docusignTypescriptTest2, {
    accountId: "412ae55e-dd69-47c7-bc4a-568d48d1542a",
    workspaceId: "d243e618-a66a-493b-be80-92ab46fe07df",
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
| `request`                                                                                                                                                                      | [operations.GetWorkspaceAssignableRolesRequest](../../models/operations/getworkspaceassignablerolesrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceAssignableRolesResponse](../../models/components/getworkspaceassignablerolesresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## createWorkspaceEnvelope

This operation creates an envelope associated with the workspace. Using the `envelope_id` from the response, eSignature APIs may be utilized to modify the envelope and ultimately send it.

Envelope recipients will automatically be granted Participate access to the workspace. Envelope recipients will receive consolidated notifications from Docusign Workspaces rather than standard individual envelope notifications.

Docusign Connect events may be utilized to receive updates to individual envelope events.

The `envelopes` operation on the workspace may be utilized to query the status of all the envelopes in the workspace.

When `document_ids` is empty or excluded, the envelope is created without any documents from the workspace. eSignature API calls, including adding documents and templates, may be utilized to modify the envelope before it is sent. The eSignature API must be utilized to send the envelope.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaces.createWorkspaceEnvelope({
    accountId: "ef54239d-b3ad-476f-9f59-503044654ad9",
    workspaceId: "d0076563-8120-4784-85c4-5d6c143bc0ff",
    workspaceEnvelopeForCreate: {
      envelopeName: "<value>",
    },
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
import { workspacesCreateWorkspaceEnvelope } from "docusign-typescript-test-2/funcs/workspacesCreateWorkspaceEnvelope.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspacesCreateWorkspaceEnvelope(docusignTypescriptTest2, {
    accountId: "ef54239d-b3ad-476f-9f59-503044654ad9",
    workspaceId: "d0076563-8120-4784-85c4-5d6c143bc0ff",
    workspaceEnvelopeForCreate: {
      envelopeName: "<value>",
    },
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
| `request`                                                                                                                                                                      | [operations.CreateWorkspaceEnvelopeRequest](../../models/operations/createworkspaceenveloperequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateWorkspaceEnvelopeResponse](../../models/components/createworkspaceenveloperesponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getWorkspaceEnvelopes

This operation retrieves a list of all associated workspace envelopes. The `status` on each envelope can be used to track envelope progress. Based on the permissions of the caller, additional envelope details may be retrieved from the eSignature API using the `envelope_id`.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaces.getWorkspaceEnvelopes({
    accountId: "16c71e73-b096-4a64-9ed9-f726eeb4ea96",
    workspaceId: "79dd5386-9d8b-4599-9854-8e07cf8abd0b",
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
import { workspacesGetWorkspaceEnvelopes } from "docusign-typescript-test-2/funcs/workspacesGetWorkspaceEnvelopes.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspacesGetWorkspaceEnvelopes(docusignTypescriptTest2, {
    accountId: "16c71e73-b096-4a64-9ed9-f726eeb4ea96",
    workspaceId: "79dd5386-9d8b-4599-9854-8e07cf8abd0b",
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
| `request`                                                                                                                                                                      | [operations.GetWorkspaceEnvelopesRequest](../../models/operations/getworkspaceenvelopesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceEnvelopesResponse](../../models/components/getworkspaceenvelopesresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |