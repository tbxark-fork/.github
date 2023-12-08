# Hi there 👋, I'm TBXark.

![overview](https://raw.githubusercontent.com/tbxark-arc/.github/master/status/generated/overview.svg) ![languages](https://raw.githubusercontent.com/tbxark-arc/.github/master/status/generated/languages.svg)

```shell
gh repo list tbxark-fork --fork --visibility public --json owner,name | jq -r 'map(.owner.login + "/" + .name) | .[]' | xargs -t -L1 gh repo sync --force
```
