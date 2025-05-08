
# ZFS High Availability

[ZFS High-Availability NAS](https://github.com/ewwhite/zfs-ha/wiki) and a [corresponding NVMe build](https://github.com/efschu/AP-HA-CIAB-ISER/wiki) uses multipath SAS or NVMe for true high availability without data loss. This os overkill for a homelab though.

CEPH and other file systems are better suited for this, but have terrible single-threaded I/O performance (~1 ms for a write), which severely limits performance.

## Syncing data

Pseudo HA can be achieved by having periodic replication between a primary and a secondary. When the primary goes offline, the secondary can take over, with a small amount of data loss.

### Mirror with remote disk exposed via iSCSI or NVMe over Fabric

One possibility is instead of having a mirror on the same physical node, put half of the drives in a primary and the other half in a secondary node. Then create the vdev mirror with one local disk and one remote disk, exposed either via iSCSI or NVMe over fabric.

The main concerns with this approach are:

1. Network latency: need to investigate what the latency penalty is when doing this. Also requires fast 100GBE networks with RDMA support for best results.
2. Ensure that the pool is never being imported twice by the same node

See [Enterprise ZFS NVMe storage server](https://ghost.pegasi.fi/wiki/doku.php?id=tips_and_howtos:zfs_nvmeof_cluster)

### DRBD

DRBD replicates changes to a block device from one node to another. This is theoretically the best solution.

Concerns:

1. Lots of reports about split brain issues
2. The company is shady, Proxmox yanked support for this because of an abrupt change in licensing

## Failover

I'm planning on having a secondary on standby, but its safer to have a third witness node with the main purpose of preventing split brain scenarios.

Use corosync and Pacemaker to handle the failover. TODO: investigate

> Split brains are avoidable if you use multiple Corosync "rings" to mitigate network issues. You can configure fencing in Pacemaker to make it almost impossible to split brain, even in a two node cluster. You could also add a third node, even something like a raspberry pi, to act as a quorum node for DRBD to completely prevent split brains.

See [Pacemaker / Corosync fencing on Oracle Private Cloud Appliance X9-2](https://blogs.oracle.com/oracle-systems/post/pacemaker-corosync-fencing-on-oracle-private-cloud-appliance-x9-2)
