
# Unable to serve javascript files with Go on Windows

I was running a Golang based application. It exposes a local webserver for a frontend. However, visiting the url on Firefox gave me this error and a blank screen:

> Loading module from “http://127.0.0.1:5228/assets/index.c2bda7ec.js” was blocked because of a disallowed MIME type (“text/plain”).

It turns out that some applications on Windows such as VS incorrectly modify the registry, causing Javascript to be associated with an invalid mimetype of text/plain instead of text/javascript.

This is compounded by the [mimetype package relying on this info in the registry](https://github.com/golang/go/issues/32350#issuecomment-700202218), which causes js files to be served with this incorrect mimetype.

## Workaround

To edit the registry to correct the invalid mimetype for .js files, save the following as a .reg file and run it.

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\.js]
"Content Type"="text/javascript"

[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\.js]
"Content Type"="text/javascript"
```

Restart the application and the problem should be fixed.
