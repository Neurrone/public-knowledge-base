
# SQLite

## CSV

In the SQLite shell:

```sh
.mode csv
# don't add quotes around the filename, as that led to really weird results
# automatically creates table if doesn't exist
.import /path/to/links.csv table_name

# to use an existing table, skip the first row when importing
.import --skip 1 /path/to/links.csv table_name
```

Examine the schema with `.schema`

## Data Exploration

- [Datasette](https://datasette.io/): exploring SQLite databases in the browser
- [sqlite-utils CLI tool and Python library for manipulating SQLite databases](https://sqlite-utils.datasette.io/en/stable/index.html)
- [wddbfs: browse SQLite database contents on the filesystem](https://github.com/adamobeng/wddbfs?ref=selfh.st)

## Database Synchronization / replication

- [Litestream](https://litestream.io/): replicates change to dumb storage (e.g, S3)
- [LiteFS](https://github.com/superfly/litefs): replication to other SQLite nodes
- [mycelite](https://github.com/mycelial/mycelite): replicates changes to other nodes
