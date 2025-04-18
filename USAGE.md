<!-- Start SDK Example Usage [usage] -->
```typescript
import { DocusignTypescriptTest2 } from "docusign-typescript-test-2";

const docusignTypescriptTest2 = new DocusignTypescriptTest2({
  oAuth2: process.env["DOCUSIGNTYPESCRIPTTEST2_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTypescriptTest2.workspaceDocuments
    .getWorkspaceDocuments({
      accountId: "9cc31b33-195e-4e49-afbc-7023822fc19b",
      workspaceId: "d88e63cd-2368-4f35-a54c-1bb45e45a7b7",
    });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->