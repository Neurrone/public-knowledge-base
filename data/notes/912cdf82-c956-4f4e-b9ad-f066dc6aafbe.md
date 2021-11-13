
Syntax: `mysqldump [options] > out.sql`

## Dumping Databases

* Back up a single database: `mysqldump -u root -p database_name > database_name.sql`
* Back up multiple databases: `mysqldump -u root -p --databases database_name_a database_name_b > databases_a_b.sql`
* Back up all databases: `mysqldump -u root -p --all-databases > all_databases.sql`

See [this article](https://linuxize.com/post/how-to-back-up-and-restore-mysql-databases-with-mysqldump/) for more examples.

## Dumping Databases Without Locking

By default, mysqldump locks the entire database till the dump completes. This is not practical for production use.

Mysqldump supports the [--single-transaction](http://download.nust.na/pub6/mysql/doc/refman/5.1/en/mysqldump.html#option_mysqldump_single-transaction) option which allows dumping a consistent state of the database. This only works with InnoDB tables, not MyISAM or Memory tables.

For large tables which won't fit into memory, consider using with [--quick](http://download.nust.na/pub6/mysql/doc/refman/5.1/en/mysqldump.html#option_mysqldump_quick)

## Restoring From Backup

```sh
# if the database already exists, delete it
# create the database first
mysql -u root -p -e "create database database_name";
mysql  database_name < file.sql
```

## Docker

The commands above work just fine when using the official docker containers:

```sh
docker exec [MYSQL_CONTAINER] /usr/bin/mysqldump \
  -u root -p database_name > database_name.sql
```

There are some tools which streamline backups of mysql databases on docker:

![[dendron://main/tools.docker.backup#mysql,1]]
