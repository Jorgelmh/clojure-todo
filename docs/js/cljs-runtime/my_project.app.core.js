goog.provide('my_project.app.core');
my_project.app.core.app = (function my_project$app$core$app(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.app.todo.todo_app], null);
});
my_project.app.core.render = (function my_project$app$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.app.core.app], null),document.getElementById("root"));
});
my_project.app.core.main = (function my_project$app$core$main(){
return my_project.app.core.render();
});
goog.exportSymbol('my_project.app.core.main', my_project.app.core.main);
my_project.app.core.reload_BANG_ = (function my_project$app$core$reload_BANG_(){
return my_project.app.core.render();
});

//# sourceMappingURL=my_project.app.core.js.map
