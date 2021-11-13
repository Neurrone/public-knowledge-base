
# Notes On Using Synology NAS Devices

## Setting Up a Cron Job

`crontab -e` won't work on a Synology; `/etc/crontab` needs to be edited directly under root.

1. Become root: `sudo -i`
2. Edit crontab: `nano /etc/crontab`. Note that the columns are separated by tabs.
3. Restart the cron daemon: `synoservice -restart crond`
