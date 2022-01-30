
# Unsafe Migrations

Some migrations are unsafe to run in production on large tables because they cause locks on the database. This will degrade performance and could cause downtime.

These migrations can usually be done in a way that avoids downtime. Don't worry about this for smaller tables.

## Adding Column with Default Value

Causes the table to be rewritten in older versions of MySQL (blocking writes) and Postgres (blocking both reads and writes).

This can be accomplished by adding the column without the default, then changing the default value later.

This is safe and no workarounds are needed from MySQL 8.0.12 and Postgres 11.

## Changing Column Type

Causes the entire table to be rewritten.

Blocks writes in MySQL except for the following changes which are safe:

- Increasing length limit of a `varchar` from < 255 to 255
- Increasing length limit of a `varchar` from over 255 to max limit

Blocks both reads and writes in Postgres except for the following:

- Increasing length limit of a `varchar` or removing length limits
- Changing `varchar` to `text`
- Changing `text` to `varchar` with no limit
- For `decimal` or `real` columns, increasing precision or making them unconstrained
- Changing between `timestamp` and `timestamptz` column when session timezone is UTC from Postgres 12

Instead, do the following:

1. Create a new column
2. Write to both columns
3. Update the new column with previous data from the old column
4. Read from the new column instead of the old column
5. Stop writes to the old column
6. Drop the old column

## Renaming Columns

Causes errors in the application if the column is still being used.

Instead, do the following:

1. Create a new column
2. Write to both columns
3. Update the new column with previous data from the old column
4. Read from the new column instead of the old column
5. Stop writes to the old column
6. Drop the old column

## Renaming Tables

Similar to renaming columns, this causes errors if the application is still using the table.

Instead, do the following:

1. Create the new table
2. Write to both tables
3. Update the new table with previous data from the old table
4. Read from the new table instead of the old table
5. Stop writes to the old table
6. Drop the old table

## Adding Check Constraints

Adding a check constraints causes all existing rows to be checked. This blocks writes in MySQL and both reads and writes in Postgres.

In Postgres:

1. Add the constraint without validating existing rows using the `not valid` keyword. This skips enforcement of the constraint on existing data, but subsequent inserts or updates are checked.
2. Validate the constraint in a separate statement for existing data: `ALTER TABLE my_table VALIDATE CONSTRAINT some_constraint;`
   Postgres acquires a SHARE UPDATE EXCLUSIVE lock while validating the constraint for existing data , so reads and writes will still go through.

   This 2-step process is also useful when there is existing data that violates the constraint. The process can be repeated until all violations are fixed.

## Setting Not Null On Existing Column

Blocks reads and writes while existing rows are checked.

For Postgres, do the following instead:

1. Add a check constraint on the column with the `not valid` keyword to skip checks for existing rows: `ALTER TABLE "my_table" ADD CONSTRAINT "my_constraint" CHECK ("some_column" IS NOT NULL) NOT VALID;`
2. Validate the constraint in a separate statement for existing data: `ALTER TABLE my_table VALIDATE CONSTRAINT my_constraint;`
3. From Postgres 12, it is safe to then set `not null` on the column, then remove the check constraint.

### Adding Index Non-currently In Postgres

Normally, creating an index blocks writes till the indexx has been built. [Postgres supports building indixes concurrently](https://www.postgresql.org/docs/current/sql-createindex.html#SQL-CREATEINDEX-CONCURRENTLY) in a way that doesn't block writes:

```sql
CREATE INDEX CONCURRENTLY some_index ON my_table(some_column);
```

This is also applicable to adding foreign keys or references.

This is not needed if the index is being created with a new table in the same migration.

## Linting

- [Strong Migrations](https://github.com/ankane/strong_migrations#checks) is a Ruby gem that can lint for such unsafe migrations

## References

- [PostgreSQL at Scale: Database Schema Changes Without Downtime](https://medium.com/paypal-tech/postgresql-at-scale-database-schema-changes-without-downtime-20d3749ed680)
- [reshape](https://github.com/fabianlindfors/reshape) is a new tool that tries to automate unsafe migrations for Postgres
