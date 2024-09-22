
# ThinkPads

## Panel Self Refresh Causing Mouse Stuttering in AMD ThinkPads

Only seems to affect Windows 11 (and probably linux where PSR is enabled).

For Windows:

1. Go to `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Class\{4d36e968-e325-11ce-bfc1-08002be10318}\0000`
2. Set `DalPSRFeatureEnable` to `0`
3. Reboot

[Source Lenovo forum thread](https://forums.lenovo.com/t5/ThinkPad-T400-T500-and-newer-T-series-Laptops/T14s-Gen4-AMD-Display-driver-lag-mouse-cursor-stuttering-YouTube-dropping-frames/m-p/5278032?page=4#6286098)

## AMD ThinkPads / ThinkBooks Artificially Hiked CPU Clocks

Seems to be caused by buggy AMD chipset drivers, [fixed in some models by Lenovo](https://forums.lenovo.com/t5/ThinkBook-Laptops/Battery-drain-after-last-batch-of-updates/m-p/5242788?page=2#6127963)
