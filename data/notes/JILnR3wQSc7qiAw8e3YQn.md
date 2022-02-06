
# Yubikey Manager Cli

[docs](https://docs.yubico.com/software/yubikey/tools/ykman/Base_Commands.html)

## Set new Fido pin

```sh
# omit -p if no pin is currently set
ykman fido access change-pin -P <current-pin> -n <new pin>
```
