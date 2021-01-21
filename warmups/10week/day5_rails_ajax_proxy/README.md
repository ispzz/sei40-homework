# Warmup: AJAX Proxy in Rails

Doesn't it suck how most of the web pages you might want to load as data via AJAX return that damned _"No 'Access-Control-Allow-Origin' header is present on the requested resource"_ Cross-Origin-Resource-Sharing exception? They just won't let you load their precious pages via Javascript! (Or they don't care and haven't thought to enable it, and it's deny-by-default.)

A proxy is a server that sits between your computer and some other computer on the network, and interacts with the remote computer on your behalf, for some reason - perhaps to cache files for quicker retrieval, or to provide anonymity, or to fake your location, etc.

### Task

Your warmup task is to write a simple AJAX proxy by using a Rails server and HTTParty, to respond to an AJAX request made in the browser (in the Chrome Developer console will be fine, to test it, but you'll probably want jQuery to be loaded) by retrieving the contents of any specified URL for you, and passing it back to your AJAX Javascript handler, thereby getting around the CORS security restrictions.

Your Rails server will need only one route, one controller, and one action. This action should take the URL specified on the query string, retrieve its data, and pass it back to your AJAX request in the browser. To avoid the same CORS security problems from being thrown by your proxy, you will need to look up how to tell Rails to set the correct headers to allow any CORS request.