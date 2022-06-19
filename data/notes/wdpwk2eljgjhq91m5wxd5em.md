
# DynamoDB

## Global Secondary Indixes (GSIs)

Data needs to be synchronized to GSIs, and this is only eventually consistent.

This can cause problems when reading data by querying a GSI assumes that the data is up to date.
