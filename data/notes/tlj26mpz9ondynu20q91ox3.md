
# ZFS Backups

## ZFS Targets

This is the ideal option, but is very expensive. Hence why I'm looking for alternatives

- Rsync.net
- Zfs.rent

Tools to simplify ZFS replication:

- [Zrepl](https://zrepl.github.io/)
- [sanoid and Syncoid](https://github.com/jimsalterjrs/sanoid/?tab=readme-ov-file)
- [pyznap](https://github.com/yboetz/pyznap)

## Setting up a ZFS replication target

### Cheap Storage VPS

The idea is to get a VPS, attach block storage to it for more space.

- BuyVM: $5 / TB, but it is actually hard to get since any new capacity released is instantly sold out
- [AlphaVPS](https://alphavps.com/storage-vps.html): eur 5 / TB
- [LetBox](https://letbox.com/page/storage): $4 / TB
- [OneCloud](https://oneprovider.com/onecloud/pricing#storage): tried calling support, no response. No email listed too
- [Crunchbits](https://crunchbits.com/vps/storage#Plans): plans were sold out
- [HostHatch](https://hosthatch.com/products#storage): $4 / TB, they have a nearby data centre
- [Serverica](https://servarica.com/) has an "unlimited" storage offering

Deals:

- [Low-end storage deals](https://lowend-deals.xbit.win/#storage)
- *[ServerHunter](https://www.serverhunter.com/#query=storage_capacity%3A%3E%3D2000+stock%3A%28in_stock+OR+unknown%29+region%3A%28Oceania+OR+Singapore%29) 

## Using Cloud As a vdev

- [s3blkdev](https://ogris.de/s3blkdev/): last updated in 2017, probably not safe to use
- [Advice on how to use remote storage to back a ZFS pool](https://www.reddit.com/r/zfs/comments/sq0u5u/zfs_writeback_cache_like_bcache/): TLDR this is hard
- [ZFS on a network block device](https://www.rath.org/zfs-on-nbd-my-verdict.html): problematic due to varying block size and other challenges
- [S3Backer supports network block device mode](https://github.com/archiecobbs/s3backer/wiki/Network-Block-Device-(NBD)-Mode)

ZFS will have support for object storage like S3, but there hasn't been any news about object storage support since 2021.

## Snapshots to dumb storage

Though you can ZFS send a snapshot to dumb storage, its going to be a pain to consolodated incrementals, since you need a full snapshot + all incrementals in the chain.

- [Z3](https://github.com/presslabs/z3)
- [ZFSBackup Go](https://github.com/someone1/zfsbackup-go)
- [zfs3backup](https://github.com/mmontagna/zfs3backup)

## ZFS Ov