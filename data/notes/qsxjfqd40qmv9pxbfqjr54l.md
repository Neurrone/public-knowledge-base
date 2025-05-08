
# High Performance Networking

At speeds beyond 10GBE, the CPU overhead of processing packets so quickly adds up.

Hence, higher end NICs have offloads like RDMA which allows applications direct access to the NIC without going through the CPU.
Some guides on enabling this:

- [100 Gbe & TrueNAS Scale 23.10 iSCSI - Performance Unleashed](https://forum.level1techs.com/t/100-gbe-truenas-scale-23-10-iscsi-performance-unleashed/206452)

## Switches

- [Mikrotik supports ROCe in their switches](https://help.mikrotik.com/docs/spaces/ROS/pages/189497483/Quality+of+Service#QualityofService-RDMAoverConvergedEthernet%28RoCE%29)] as of RouterOS 7.17, [forum thread](https://forum.mikrotik.com/viewtopic.php?t=187501). This is still in beta.
