# hma-browser-ext
![hma](http://i.imgur.com/9NcMIFQ.png)
![hma](http://i.imgur.com/DX9iY81.png)


PC World warning about malicious browser extensions:
http://www.pcworld.com/article/2049540/malicious-browser-extensions-pose-a-serious-threat-and-defenses-are-lacking.html

And AGL (!!) on the same topic - mentioning Fiddler... which cyberghost has bundled in their Windows installer.
https://www.imperialviolet.org/2011/05/04/pinning.html

Quoting Adam:

"What about MITM proxies, Fiddler etc?

There are a number of cases where HTTPS connections are intercepted by using local, ephemeral certificates. These certificates are signed by a root certificate that has to be manually installed on the client. Corporate MITM proxies may do this, several anti-virus/parental control products do this and debugging tools like Fiddler can also do this. Since we cannot break in these situations, user installed root CAs are given the authority to override pins. We don't believe that there will be any incompatibility issues."
