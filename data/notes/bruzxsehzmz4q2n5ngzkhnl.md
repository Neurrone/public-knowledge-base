
# GitHub Actions

## Avoid duplicate runs with push and pull_request

Run push only on the default branch (main/master):

```yaml
on:
  push:
    branches:
      - main
  pull_request:
```

## SSH into runners for debugging

Use the [action-tmate action](https://github.com/mxschmitt/action-tmate) to expose SSH into a running action's container.

Source: [4 tips for GitHub Actions usability (+2 bonus tips for debugging)](https://fleetdm.com/engineering/tips-for-github-actions-usability)
