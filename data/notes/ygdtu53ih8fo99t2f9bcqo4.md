
## Intel

- [P4501: lower power PCIe 3.0 x 4](https://www.anandtech.com/show/11514/intel-announces-ssd-dc-p4501-lowpower-nvme-ssd-with-3d-nand)
- DC P4510: PCIe 3.0 x 4, [seems to have extremely major issues](https://forum.level1techs.com/t/what-the-heck-is-this-intel-dc-p4500-series-8tb-ssd-marked-as-ssdpedkx080t7/222886/5)
- D7-P5510: PCIe 4.0 x 4

### Optane

- [ZIL recommendations](https://www.servethehome.com/buyers-guides/top-hardware-components-for-truenas-freenas-nas-servers/top-picks-freenas-zil-slog-drives/)
- [forum post with some stats](https://www.truenas.com/community/resources/a-bit-about-ssd-perfomance-and-optane-ssds-when-youre-planning-your-next-ssd.149/)

- P1600X: looks like a great ZIL device, m.22110
- 905P: m.22110
- DC P5800X: high idle power consumption, over 15w under load

## Samsung

- PM883: sata, energy efficient

## U.2 adaptors

- [Delock adaptors](https://forum.level1techs.com/t/supermicro-h13sae-mf-weird-bifurcation-u-2-problems/202217/4?u=dendryte) seem reliable for PCIe 4.0, but are expensive though. Specifically, the [90169](https://www.delock.com/produkt/90169/merkmale.html)
  - [reichelt](https://www.reichelt.com/sg/en/pcie-4-0-x16-4x-u-2-nvme-sff-8639-delock-90169-p368157.html?&nbc=1) ships internationally
- [LRNV94NF: PCIe 4.0 x16 to 4 U.2](https://www.lr-link.com/products/lrnv94nf.html), can be found on [Newegg](https://www.newegg.com/linkreal-lrnv94nf-pci-express-controller-card/p/17Z-00TX-000B2)
- [10Gtek PCIe 3.0 x16 to 4 Ports SFF-8639](https://www.ebay.com/itm/166302229513)

## MCIO

Server motherboards can have MCIO ports which carry either 8 lanes of PCIe 5.0 or 8 Sata, depends on which cables are connected to the port. MCIO only carries data and not power.

Someone had a [good experience with c-pane](https://forum.level1techs.com/t/solved-working-nvme-solution-kioxia-cm7-v-u-3-on-oem-w790/214430)

- [LetLinkSo PCIe 5.0 MCIO x8 to 2 x SFF-8639 Cable for U.2 NVMe SSD with 15Pin Power, 2.1ft(65 cm)](https://www.amazon.com/dp/B0D9J8GVZX): has 3.3v power used by some drives, unlike most other cables. [Works with Optane 905P](https://www.reddit.com/r/homelab/comments/12i4wbp/nvme_mcio_connector_help/m2okqle/)
- [MCIO SFF-TA-1016 8i to 2x SFF-8639 U.2/U.3 cable - PCIe gen4](https://c-payne.com/products/mcio-sff-ta-1016-8i-to-2x-sff-8639-u-2-u-3-cable-pcie-gen4?variant=44833239728395)
- [MCIO PCIe gen5 Host Adapter x16 -RETIMER](https://c-payne.com/products/mcio-pcie-gen5-host-adapter-x16-retimer)
- [M.2 M-key PCIe 5.0 with ReDriver to MCIO 38P](https://www.microsatacables.com/redriver-to-mcio-38p): M.2 to MCIO 8I
- [Gen 5 MCIO x4(SFF-TA-1016) 38P to MCIO x4 (SFF-TA-1016) 38P, ultra low loss 29AWG wire](https://serialcables.com/product/pcie-gen5/serial-cables-gen-5-mcio-x4sff-ta-1016-38p-to-mcio-x4-sff-ta-1016-38p-ultra-low-loss-29awg-wire-skumcio5-4xl-4xl-id28): carries MCIO

## NVMe Namespaces

Most enterprise SSDs support [NVMe namespaces](https://nvmexpress.org/resource/nvme-namespaces/) which allows the drive's capacity to be split into logically separate partitions. The OS sees multiple namespaces on a drive as separate devices.

Could be useful to divide a larger SSD into smaller chunks to use some of it for a slog, some for storage, OS etc. They can also apparently be passed into VMs as well, though I'm checking if it requires PCie passthrough and whether that works on each namespace.

- [NVMe Namespaces](https://www.drewthorst.com/posts/nvme/namespaces/readme/)
- [Managing Nvme Namespaces](https://narasimhan-v.github.io/2020/06/12/Managing-NVMe-Namespaces.html)
- [List of drives with NVMe namespace support](https://forum.level1techs.com/t/nvme-namespaces-little-known-cool-features-of-most-nvme-and-user-programmable-endurance/172660/18?u=dendryte)
