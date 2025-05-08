
# Intel I225-V/I226-V Ethernet Controllers

These things are a nightmare, avoid them if at all possible.

I have the I225-v revision 1 controller on a motherboard being used in a TrueNas server, and it loses connectivity every few weeks and replugging the ethernet doesn't fix it. The only way is to restart the machine to restore connectivity.

When this happens, these entries appear in `/var/log/messages`

```
Nov  8 05:01:54 truenas kernel: igc 0000:06:00.0 enp6s0: NIC Link is Down
Nov  8 05:01:54 truenas kernel: br0: port 1(enp6s0) entered disabled state
Nov  8 05:02:00 truenas kernel: igc 0000:06:00.0 enp6s0: NIC Link is Up 1000 Mbps Full Duplex, Flow Control: RX
Nov  8 05:02:00 truenas kernel: br0: port 1(enp6s0) entered blocking state
Nov  8 05:02:00 truenas kernel: br0: port 1(enp6s0) entered listening state
Nov  8 05:02:06 truenas kernel: igc 0000:06:00.0 enp6s0: NIC Link is Down
Nov  8 05:02:06 truenas kernel: br0: port 1(enp6s0) entered disabled state
```

Apparently the v3 revision of the I225-v resolves the issues in the other revision, the I226-V may be a rebranded 225 v3.
Intel recommends [updating the NVM firmware](https://www.intel.com/content/www/us/en/support/articles/000057261/ethernet-products/gigabit-ethernet-controllers-up-to-2-5gbe.html). But for controllers integrated into the motherboard, the update has to be obtained from the motherboard manufacturer.

Other reports:

- [I225-V issues on Linux](https://www.reddit.com/r/buildapc/comments/xypn1m/network_card_intel_ethernet_controller_i225v_igc/)]
