
# SQS

## Useful Commands

* Inspect queue attributes: `aws sqs get-queue-attributes --attribute-names All --queue-url <url>`
* Get queue url: `aws sqs get-queue-url --queue-name <queue>`

## Permissions For Using Server-side Encryption

To enable use of a aliased KMS key:

```json
    {
      Effect: "Allow",
      Action: ["kms:Decrypt", "kms:Encrypt"],
      Resource: "*",
      Condition: {
        // see https://docs.aws.amazon.com/kms/latest/developerguide/alias-authorization.html
        "ForAnyValue:StringLike": {
          "kms:ResourceAliases": "alias/SQS_ENCRYPTION_KEY",
        },
      },
    },
```