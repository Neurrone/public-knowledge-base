
Using a YubiKey in web browsers works great.

Unfortunately, it is not so great when attempting to do so with SSH or within WSL2.

## SSH

[OpenSSH 8.2 and above supports fido2](https://buttondown.email/cryptography-dispatches/archive/cryptography-dispatches-openssh-82-just-works/), which makes the process of using a Fido2 authenticator for SSH much simpler.

However, the [version of OpenSSH that ships with Windows 10 does not support fido2](https://github.com/PowerShell/Win32-OpenSSH/issues/1804) at time of writing. This is something that is being actively worked on, although it will probably be several months before this is a fixed.

Ironically, the easiest workaround for this is to use the version of ssh that comes with [Git For Windows](https://gitforwindows.org/).

1. Install Git For Windows. These instructions assume that its in the default location of `C:\Program Files\Git`, adjust as needed.
2. The version of ssh that comes with Git For Windows does support fido2. However, it isn't able to talk to the YubiKey or other compatible devices on Windows.

   This is where the [openssh-sk-winhello](https://github.com/tavrez/openssh-sk-winhello) middleware comes in. It allows ssh to connect with these authenticators via the Windows Hello API.

   Download the appropriate release of `winhello.dll` depending on the version of ssh in Git for Windows (v2.0 for my case).

3. Copy `winhello.dll` to `C:\Program Files\Git\usr\lib\ssh`
4. Add the following lines to `~/.ssh/config` (this will map back to `c:\users\<username>\.ssh\config` on windows):

   ```
   Host *
       SecurityKeyProvider winhello.dll
   ```

5. Configure Bash to have ssh-keygen and ssh-agent use `winhello.dll`. Add this line to `~/.bashrc` (which will be in your user folder on windows):

   ```bash
   # this must be an absolute path, relative paths won't work
   export SSH_SK_PROVIDER=/usr/lib/ssh/winhello.dll
   ```

   `/usr/lib` from within git bash maps back to `C:\Program Files\Git\usr\lib` on windows.

6. Launch git bash by typing "git bash" in the start menu to get to the shortcut.
7. Generate a SSH keypair resident on the YubiKey:

   ```sh
   ssh-keygen -t ed25519-sk -O resident -C 'YubiKey 5C NFC' -f ~/.ssh/id_ed25519_sk
   ```

   If everything is set up correctly, you should be prompted to enter the pin for the YubiKey and to touch the device.

8. There should be 2 new files in your ssh folder. Copy the public key to a server you want to access. The private key is a stub that refers to the authenticator. From within git bash, try accessing a server via ssh with this new key.

### Alternative Solutions

- [windows-fido-bridge](https://github.com/mgbowen/windows-fido-bridge) is another OpenSSH middleware that has similar functionality as winhelper. However, it requires ssh 8.3 and above, which doesn't come with Ubuntu 20.04.

## WSL2

WSL2 has experimental support for USB devices, although it [doesn't work with Fido2 devices yet](https://github.com/dorssel/usbipd-win/discussions/127).

To work around this issue, [openssh-sk-winhello can be set to accessed from WSL2](https://github.com/tavrez/openssh-sk-winhello/blob/master/WSL.md) via ssh-sk-helper, which acts as a bridge from WSL2 to the ssh tools set up above in git bash.

Git bash comes with ssh-sk-helper already, so that doesn't need to be installed separately.

1. In WSL2, add the following to `~/.ssh/config` (note the windows-style path):

   ```
   Host *
     SecurityKeyProvider "c:/Program Files/Git/usr/lib/ssh/winhello.dll"
   ```

2. Add the following environment variables to configure ssh in WSL2 to use ssh-sk-helper and winhello:

   ```sh
   # see https://github.com/tavrez/openssh-sk-winhello/blob/master/WSL.md
   export SSH_SK_HELPER="/mnt/c/Program Files/Git/usr/lib/ssh/ssh-sk-helper.exe"
   export SSH_SK_PROVIDER="c:/Program Files/Git/usr/lib/ssh/winhello.dll"
   ```

3. Copy the following .dll files from `C:\Program Files\Git\usr\bin` to `C:\Program Files\Git\usr\lib\ssh` so that ssh-sk-helper has the DLLs it needs to run when invoked from WSL2:

   - msys-2.0.dll
   - msys-cbor-0.8.dll
   - msys-crypto-1.1.dll
   - msys-fido2-1.dll
   - msys-gcc_s-seh-1.dll
   - msys-z.dll

4. If everything is set up correctly, you should be prompted to enter a pin and touch the device when generating an ssh keypair via the YubiKey.

## References

- [Setting up FIDO2 authentication on Linux from Windows - mooltipass/minible Wiki](https://github-wiki-see.page/m/mooltipass/minible/wiki/Setting-up-FIDO2-authentication-on-Linux-from-Windows)
- [A Better Windows 10+WSL SSH Experience](https://polansky.co/blog/a-better-windows-wsl-openssh-experience/)
