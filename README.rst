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
