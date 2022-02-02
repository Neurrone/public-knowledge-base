
# Postgres Backups

## Pgdumpall

[pg_dumpall](https://www.postgresql.org/docs/current/app-pg-dumpall.html) extracts a PostgreSQL database cluster into a script file.

```sh
PGPASSWORD=abc pg_dumpall -U myuser --clean
```

This writes to stdout, so redirect as needed.

The `--clean` option includes commands to drop and recreate the database in the output dump.
