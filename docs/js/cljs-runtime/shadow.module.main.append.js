
shadow.cljs.devtools.client.env.module_loaded('main');

try { my_project.app.core.main(); } catch (e) { console.error("An error occurred when calling (my-project.app.core/main)"); throw(e); }