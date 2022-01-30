
# Importing And Exporting CSV Files Into Postgres

## Exporting CSVs

To export the result set of a query to a csv file:

```sh
# run this when connected to the db via psql
COPY (
    <some query>
) TO '/path/to/data.csv' DELIMITER ',' CSV HEADER;
```

## Importing CSVs

To import a CSV with column headers into a table that has the same columns as the csv:

```sh
# run this when connected to the db via psql
COPY my_table
FROM '/path/to/data.csv'
DELIMITER ',' CSV HEADER;
```
