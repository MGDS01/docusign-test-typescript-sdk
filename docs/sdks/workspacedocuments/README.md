# WorkspaceDocuments
(*workspaceDocuments*)

## Overview

### Available Operations

* [getWorkspaceDocuments](#getworkspacedocuments) - Get documents in the workspace accessible to the calling user
* [getWorkspaceDocument](#getworkspacedocument) - Get information about the document
* [deleteWorkspaceDocument](#deleteworkspacedocument) - Deletes a document in the workspace
* [getWorkspaceDocumentContents](#getworkspacedocumentcontents) - Get the file contents of the document

## getWorkspaceDocuments

This operation retrieves the documents in the workspace that are accessible to the calling user. Documents may be added directly or automatically through tasks such as envelopes. Documents may be used to create envelopes.

Pagination is supported by passing `start_position` and `count` in the request. The response will include `resultSetSize`, `start_position`, and `end_position` which may be utilized for subsequent requests.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaceDocuments.getWorkspaceDocuments({
    accountId: "9cc31b33-195e-4e49-afbc-7023822fc19b",
    workspaceId: "d88e63cd-2368-4f35-a54c-1bb45e45a7b7",
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
import { workspaceDocumentsGetWorkspaceDocuments } from "docusign-typescript-test-2/funcs/workspaceDocumentsGetWorkspaceDocuments.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspaceDocumentsGetWorkspaceDocuments(docusignTypescriptTest2, {
    accountId: "9cc31b33-195e-4e49-afbc-7023822fc19b",
    workspaceId: "d88e63cd-2368-4f35-a54c-1bb45e45a7b7",
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
| `request`                                                                                                                                                                      | [operations.GetWorkspaceDocumentsRequest](../../models/operations/getworkspacedocumentsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceDocumentsResponse](../../models/components/getworkspacedocumentsresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getWorkspaceDocument

This operation retrieves information about the document. The response includes the document ID, name, and metadata.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaceDocuments.getWorkspaceDocument({
    accountId: "013770a4-c521-421c-9da0-b3bd672b65a9",
    workspaceId: "0e82675f-e05a-4b78-93f4-17e818108125",
    documentId: "679ce20a-e8fb-42c0-ae82-756d1743a4eb",
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
import { workspaceDocumentsGetWorkspaceDocument } from "docusign-typescript-test-2/funcs/workspaceDocumentsGetWorkspaceDocument.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspaceDocumentsGetWorkspaceDocument(docusignTypescriptTest2, {
    accountId: "013770a4-c521-421c-9da0-b3bd672b65a9",
    workspaceId: "0e82675f-e05a-4b78-93f4-17e818108125",
    documentId: "679ce20a-e8fb-42c0-ae82-756d1743a4eb",
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
| `request`                                                                                                                                                                      | [operations.GetWorkspaceDocumentRequest](../../models/operations/getworkspacedocumentrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceDocumentResponse](../../models/components/getworkspacedocumentresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## deleteWorkspaceDocument

This operation permanently deletes a document by ID.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  await docusignTypescriptTest2.workspaceDocuments.deleteWorkspaceDocument({
    accountId: "58b71070-3b46-4d9b-bccd-d2840fb7cecd",
    workspaceId: "f742ff03-9c13-46ba-bafc-3ece0d4ebf14",
    documentId: "4d6c2f3a-7293-419c-8ff2-3669540deffc",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocusignTypescriptTest2Core } from "docusign-typescript-test-2/core.js";
import { workspaceDocumentsDeleteWorkspaceDocument } from "docusign-typescript-test-2/funcs/workspaceDocumentsDeleteWorkspaceDocument.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspaceDocumentsDeleteWorkspaceDocument(docusignTypescriptTest2, {
    accountId: "58b71070-3b46-4d9b-bccd-d2840fb7cecd",
    workspaceId: "f742ff03-9c13-46ba-bafc-3ece0d4ebf14",
    documentId: "4d6c2f3a-7293-419c-8ff2-3669540deffc",
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
| `request`                                                                                                                                                                      | [operations.DeleteWorkspaceDocumentRequest](../../models/operations/deleteworkspacedocumentrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getWorkspaceDocumentContents

This operation retrieves the file contents of the document. The file is returned as a stream in the response body. The Content-Disposition response header contains the document name as the `filename`.

### Example Usage

```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaceDocuments.getWorkspaceDocumentContents({
    accountId: "2c39894d-e20a-48b0-b42f-fed5a3b9d88b",
    workspaceId: "fd4cc718-b4a2-4e0f-baee-56dcbf0b79c8",
    documentId: "12360a44-8764-4fea-ae1a-0b0c0f7e1ff3",
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
import { workspaceDocumentsGetWorkspaceDocumentContents } from "docusign-typescript-test-2/funcs/workspaceDocumentsGetWorkspaceDocumentContents.js";

// Use `DocusignTypescriptTest2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const docusignTypescriptTest2 = new DocusignTypescriptTest2Core({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const res = await workspaceDocumentsGetWorkspaceDocumentContents(docusignTypescriptTest2, {
    accountId: "2c39894d-e20a-48b0-b42f-fed5a3b9d88b",
    workspaceId: "fd4cc718-b4a2-4e0f-baee-56dcbf0b79c8",
    documentId: "12360a44-8764-4fea-ae1a-0b0c0f7e1ff3",
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
| `request`                                                                                                                                                                      | [operations.GetWorkspaceDocumentContentsRequest](../../models/operations/getworkspacedocumentcontentsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |