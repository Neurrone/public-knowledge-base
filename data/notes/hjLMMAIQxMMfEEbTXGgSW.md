
# ZFS

## Zpool

Zpools are the uppermost ZFS structure. A zpool contains one or more vdevs, each of which in turn contains one or more devices.

Zpools are self-contained units—one physical computer may have two or more separate zpools on it, but each is entirely independent of any others. Zpools cannot share vdevs with one another.

## Tiering

ZFS doesn't have tiering, but [adding SSDs as metadata devices](https://forum.level1techs.com/t/zfs-metadata-special-device-z/159954) is close.

Also see [Special VDEV (sVDEV) Planning, Sizing, and Considerations](https://forums.truenas.com/t/special-vdev-svdev-planning-sizing-and-considerations/5086)

## References

- [ZFS 101—Understanding ZFS storage and performance](https://arstechnica.com/information-technology/2020/05/zfs-101-understanding-zfs-storage-and-performance/)
- [ZFS: You should use mirror vdevs, not RAIDZ](https://jrs-s.net/2015/02/06/zfs-you-should-use-mirror-vdevs-not-raidz/)
- [ZFS layouts whitepaper](https://www.truenas.com/wp-content/uploads/2023/11/ZFS_Storage_Pool_Layout_White_Paper_November_2023.pdf): this is the best explanation of the ZFS layouts I've seen so far
- [ZFS: The Final Word in File Systems](https://jro.io/truenas/openzfs/)