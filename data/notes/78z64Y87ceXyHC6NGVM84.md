
# SQS With Aws Lambda

Aws Lambda can be configured to process messages from SQS.

## Troubleshooting SQS Invocations

When configuring a lambda function to run on receipt of an SQS message, I ran into the following problems, these are useful things to check to troubleshoot the problem.

* Check if the event source mapping got disabled. I had this happen to me even though at the code level it was enabled, so I am not sure why.
    
    ```sh
    aws lambda list-event-source-mappings --function-name <function-name>
    # if the state shows as being disabled, re-enable it:
    aws lambda   update-event-source-mapping --uuid <uuid from previous command> --enabled
    ```
* Check if the queue has the expected attributes set, especially if using encryption: `aws sqs get-queue-attributes --queue-url <url> --attribute-names All`
* If the queue uses encryption, ensure that the lambda has the [[necessary permissions to encrypt / decrypt the messages|tools.aws.sqs]]. Otherwise, messages get dropped silently.
