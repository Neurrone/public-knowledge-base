
# Dig

Dig's command format is:

```sh
dig [format] [@server] [type] [name]
```

where:

- `format` are arguments for controlling Dig's output format. Useful options to make the output more manageable are:

  - `+noall +answer` prints just the answer part of the response
  - `+short` is like the above but prints only the content of the record

- `server` is the DNS resolver to use. Defaults to whatever is in /etc/resolv.conf
- `type` is the DNS query type e.g, `A` or `CNAME`. Defaults to`A`
- `name`, e.g `kb.neurrone.com`. Defaults to the query for the empty name, `.`

## Examples

- `dig @1.1.1.1 kb.neurrone.com` queries cloudflare's DNS resolver for info on `kb.neurrone.com`
- `dig ns kb.neurrone.com` queries the default DNS resolver for the NS record for `kb.neurrone.com`

## Setting Default Format

Dig's output format can be configured by adding a `.digrc` file in the home directory. E.g, putting `+noall +answer`

See [How to use dig](https://jvns.ca/blog/2021/12/04/how-to-use-dig/)
