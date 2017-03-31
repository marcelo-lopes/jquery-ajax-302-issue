# jquery-ajax-302-issue

you need nodejs installed to run.

npm-install to install expressjs

node app.js to start

go to http://localhost:3002 and look to the developer console.

The flow:
$.ajax get /redirect that returns res.status(302).json("/home");
On chrome, we get the status 302 on the error callback, as expected.

On Microsoft Edge we have an error "SCRIPT7002: XMLHttpRequest: Network Error 0x800c0008, The download of the specified resource has failed."
and get an status 0, while the expected would be status 302.
