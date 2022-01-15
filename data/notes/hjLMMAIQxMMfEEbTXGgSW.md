
# ZFS

## Zpool

Zpools are the uppermost ZFS structure. A zpool contains one or more vdevs, each of which in turn contains one or more devices.

Zpools are self-contained units—one physical computer may have two or more separate zpools on it, but each is entirely independent of any others. Zpools cannot share vdevs with one another.

## References

- [ZFS 101—Understanding ZFS storage and performance](https://arstechnica.com/information-technology/2020/05/zfs-101-understanding-zfs-storage-and-performance/)
- [ZFS: You should use mirror vdevs, not RAIDZ](https://jrs-s.net/2015/02/06/zfs-you-should-use-mirror-vdevs-not-raidz/)
