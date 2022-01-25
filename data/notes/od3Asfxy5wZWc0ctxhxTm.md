
# BSODs

I had a laptop that was periodically BSODing about once a day and the blue screen itself did not show any errors. This is how I analyzed the dump file that got created when the system crashed.

## BlueScreenView

[BlueScreenView](https://www.nirsoft.net/utils/blue_screen_view.html) is a free portable utility that displays information from dump files.

When running it, it displayed a few crash dumps with this info:

```
012422-12750-01.dmp; Crash Time: 1/24/2022 4:28:54 PM; Bug Check String: DRIVER_POWER_STATE_FAILURE; Bug Check Code: 0x0000009f; Parameter 1: 00000000`00000003; Parameter 2: ffffad8f`6b1d5060; Parameter 3: fffff801`3bb11850; Parameter 4: ffffad8f`77d7fb20; Caused By Driver: ntoskrnl.exe; Caused By Address: ntoskrnl.exe+3f72e0; Processor: x64; Crash Address: ntoskrnl.exe+3f72e0; Full Path: C:\Windows\Minidump\012422-12750-01.dmp; Processors Count: 16; Major Version: 15; Minor Version: 19041; Dump File Size: 4,609,580; Dump File Time: 1/24/2022 4:32:08 PM
```

That doesn't provide enough info to pin down specifically what caused it, but there is some useful info.

It shows that the crash was caused by an `DRIVER_POWER_STATE_FAILURE` with parameter 1 being 0x3.

Cross-referencing with [the docs on DRIVER_POWER_STATE_FAILURE](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/bug-check-0x9f--driver-power-state-failure), the other parameters describe the faulting driver.

## DumpChk

[DumpChk](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/dumpchk) is a free command line tool that is included in the debugging tools from the Windows SDK.

Running it on that dump, the last part of its output has the following information:

```sh
*                                                                             *
*                        Bugcheck Analysis                                    *
*                                                                             *
*******************************************************************************

DRIVER_POWER_STATE_FAILURE (9f)
A driver has failed to complete a power IRP within a specific time.
Arguments:
Arg1: 0000000000000003, A device object has been blocking an Irp for too long a time
Arg2: ffffad8f6b1d5060, Physical Device Object of the stack
Arg3: fffff8013bb11850, nt!TRIAGE_9F_POWER on Win7 and higher, otherwise the Functional Device Object of the stack
Arg4: ffffad8f77d7fb20, The blocked IRP

Debugging Details:
------------------

*** WARNING: Unable to verify timestamp for RtsPer.sys
*** WARNING: Unable to verify timestamp for win32k.sys

BUGCHECK_CODE:  9f

BUGCHECK_P1: 3

BUGCHECK_P2: ffffad8f6b1d5060

BUGCHECK_P3: fffff8013bb11850

BUGCHECK_P4: ffffad8f77d7fb20

IMAGE_NAME:  pci.sys

MODULE_NAME: pci

PROCESS_NAME:  System

FAILURE_BUCKET_ID:  0x9F_3_RtsPer_IMAGE_pci.sys

FAILURE_ID_HASH:  {ce555a86-e2a6-4bdd-cc96-f64b1a03e85a}

Followup:     MachineOwner
---------

Finished dump check
```

The most important part of this output is `FAILURE_BUCKET_ID: 0x9F_3_RtsPer_IMAGE_pci.sys`. This indicates that the responsible driver is RtsPer.sys, which after a quick Google search is the driver for the Realtek PCIE CardReader.

I've since disabled this device in device manager and am hoping that this solves the crashes that I've been experiencing.
