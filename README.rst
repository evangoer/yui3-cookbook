YUI 3 Cookbook Examples
=======================

This repo contains over 170 examples and related resource files for 
the `YUI 3 Cookbook <http://shop.oreilly.com/product/0636920013303.do>`_, 
to be published this year from O'Reilly Press. 
All code in the YUI 3 Cookbook is built and tested 
to run against YUI 3.5.0. 

Some things to keep in mind when you run these examples:

* Some examples make a visible change to the DOM, 
  while others only produce browser log output.
  If you open an example and nothing appears to be happening, 
  **check your browser console** for useful activity (or errors).
* A few oddball examples involving ``localStorage``
  actually require you to reload the page
  in order to verify that the example is working as expected. 
* Most examples can run from your local filesystem, 
  but some require an actual web server.
* Some examples that deal with YUI modules
  declare absolute filepaths, 
  like ``/js/some/path.js``.
  You can either run these examples in a real web server,
  or change the filepath to be relative, 
  as in ``./js/some/path.js``.

In general, be sure to read the recipe in the YUI 3 Cookbook
(or at least read the example code carefully) before proceeding.


License
-------

The industry practice is not to license code samples that are very small, as
they could be considered too insignificant to get a legal copyright status (de
minimis rule). However Yahoo! grants an Open Source licence to all the code in
this collection that would be governed by copyright under the 3-clause BSD Open
Source license:

Copyright (c) 2012, Yahoo! Inc. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright notice, this
list of conditions and the following disclaimer in the documentation and/or
other materials provided with the distribution.

Neither the name of the Yahoo! Inc. nor the names of its contributors may be
used to endorse or promote products derived from this software without specific
prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
