
# B2

B2 is Backblaze's block storage service and also the name of its command line tool to access it.

## Creating Application Keys

To create a new application key with limited permissions for a bucket:

```sh
b2 create-key --bucket <bucket> <keyName> deleteFiles,listBuckets,listFiles,readFiles,writeFiles
```
