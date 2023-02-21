goog.provide('my_project.app.todo');
my_project.app.todo.todo_categories = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Entertainment","Work","Cooking","Sports"], null);
my_project.app.todo.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
/**
 * Get Color for the current activity status
 */
my_project.app.todo.get_status_color = (function my_project$app$todo$get_status_color(status){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"To-Do")){
return "paleturquoise";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"In-Progress")){
return "yellow";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"Complete")){
return "chartreuse";
} else {
return null;
}
}
}
});
/**
 * Push new To-Do
 */
my_project.app.todo.add_new_todo = (function my_project$app$todo$add_new_todo(todos,new_todo){
var id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.todo.counter,cljs.core.inc);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(todos,id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_todo,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
my_project.app.todo.todo_detail_validations = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Please provide a name",new cljs.core.Keyword(null,"validation","validation",-2141396518),cljs.core.not_empty], null),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Please provide a category",new cljs.core.Keyword(null,"validation","validation",-2141396518),cljs.core.not_empty], null)], null);
/**
 * Check that new input meets criteria
 */
my_project.app.todo.validate_inputs = (function my_project$app$todo$validate_inputs(to_validate){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (errors,validation){
var vec__29425 = validation;
var fieldname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29425,(0),null);
var validations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29425,(1),null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(to_validate,fieldname);
var no_error = (function (){var fexpr__29428 = new cljs.core.Keyword(null,"validation","validation",-2141396518).cljs$core$IFn$_invoke$arity$1(validations);
return (fexpr__29428.cljs$core$IFn$_invoke$arity$1 ? fexpr__29428.cljs$core$IFn$_invoke$arity$1(value) : fexpr__29428.call(null,value));
})();
if(cljs.core.truth_(no_error)){
return errors;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors,fieldname,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validations));
}
}),cljs.core.PersistentArrayMap.EMPTY,my_project.app.todo.todo_detail_validations);
});
/**
 * Get a single string with the error messages
 */
my_project.app.todo.format_error_message = (function my_project$app$todo$format_error_message(errors){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29429_SHARP_){
return cljs.core.second(p1__29429_SHARP_);
}),errors));
});
/**
 * Data will be input over here
 */
my_project.app.todo.todo_form = (function my_project$app$todo$todo_form(todo_list){
var name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var category = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-input-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Add activity"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-fields","div.input-fields",-684704957),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(name),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Activity name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29430_SHARP_){
return cljs.core.reset_BANG_(name,p1__29430_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(category),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29431_SHARP_){
return cljs.core.reset_BANG_(category,p1__29431_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"value","value",305978217),""], null),"Choose Category"], null),(function (){var iter__4529__auto__ = (function my_project$app$todo$todo_form_$_iter__29432(s__29433){
return (new cljs.core.LazySeq(null,(function (){
var s__29433__$1 = s__29433;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29433__$1);
if(temp__5735__auto__){
var s__29433__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29433__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29433__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29435 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29434 = (0);
while(true){
if((i__29434 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__29434);
cljs.core.chunk_append(b__29435,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__29447 = (i__29434 + (1));
i__29434 = G__29447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29435),my_project$app$todo$todo_form_$_iter__29432(cljs.core.chunk_rest(s__29433__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29435),null);
}
} else {
var item = cljs.core.first(s__29433__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),my_project$app$todo$todo_form_$_iter__29432(cljs.core.rest(s__29433__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(my_project.app.todo.todo_categories);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.add-button","button.add-button",-1341877874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var new_todo = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(name),new cljs.core.Keyword(null,"category","category",-593092832),cljs.core.deref(category),new cljs.core.Keyword(null,"status","status",-1997798413),"To-Do"], null);
var validations = my_project.app.todo.validate_inputs(new_todo);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(validations),(0))){
cljs.core.reset_BANG_(todo_list,my_project.app.todo.add_new_todo(cljs.core.deref(todo_list),new_todo));

cljs.core.reset_BANG_(category,"");

return cljs.core.reset_BANG_(name,"");
} else {
return alert(my_project.app.todo.format_error_message(validations));
}
})], null),"Add"], null)], null)], null);
});
});
my_project.app.todo.todo_item = (function my_project$app$todo$todo_item(p__29437,on_delete,on_status_change){
var map__29438 = p__29437;
var map__29438__$1 = (((((!((map__29438 == null))))?(((((map__29438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29438):map__29438);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29438__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29438__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29438__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.todo-item","li.todo-item",-909811764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),my_project.app.todo.get_status_color(status)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-details","div.todo-details",1682699242),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),category], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item-buttons","div.item-buttons",1203903617),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),status,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29436_SHARP_){
var G__29440 = p1__29436_SHARP_.target.value;
return (on_status_change.cljs$core$IFn$_invoke$arity$1 ? on_status_change.cljs$core$IFn$_invoke$arity$1(G__29440) : on_status_change.call(null,G__29440));
}),new cljs.core.Keyword(null,"className","className",-1983287057),"activity-status-dropdown"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"To-Do"], null),"To-Do"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"In-Progress"], null),"In-Progress"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Complete"], null),"Complete"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.delete-activity","button.delete-activity",1303602478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_delete], null),"Delete"], null)], null)], null);
});
/**
 * Renders the list
 */
my_project.app.todo.todo_iter = (function my_project$app$todo$todo_iter(todo_list){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"List of activities"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(todo_list)),(0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"15px"], null)], null),"No items added yet"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function my_project$app$todo$todo_iter_$_iter__29443(s__29444){
return (new cljs.core.LazySeq(null,(function (){
var s__29444__$1 = s__29444;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29444__$1);
if(temp__5735__auto__){
var s__29444__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29444__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29444__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29446 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29445 = (0);
while(true){
if((i__29445 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__29445);
cljs.core.chunk_append(b__29446,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.app.todo.todo_item,item,((function (i__29445,item,c__4527__auto__,size__4528__auto__,b__29446,s__29444__$2,temp__5735__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(todo_list,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
});})(i__29445,item,c__4527__auto__,size__4528__auto__,b__29446,s__29444__$2,temp__5735__auto__))
,((function (i__29445,item,c__4527__auto__,size__4528__auto__,b__29446,s__29444__$2,temp__5735__auto__){
return (function (p1__29442_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo_list,cljs.core.update,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"status","status",-1997798413),p1__29442_SHARP_], 0));
});})(i__29445,item,c__4527__auto__,size__4528__auto__,b__29446,s__29444__$2,temp__5735__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__29448 = (i__29445 + (1));
i__29445 = G__29448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29446),my_project$app$todo$todo_iter_$_iter__29443(cljs.core.chunk_rest(s__29444__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29446),null);
}
} else {
var item = cljs.core.first(s__29444__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.app.todo.todo_item,item,((function (item,s__29444__$2,temp__5735__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(todo_list,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
});})(item,s__29444__$2,temp__5735__auto__))
,((function (item,s__29444__$2,temp__5735__auto__){
return (function (p1__29442_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo_list,cljs.core.update,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"status","status",-1997798413),p1__29442_SHARP_], 0));
});})(item,s__29444__$2,temp__5735__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)),my_project$app$todo$todo_iter_$_iter__29443(cljs.core.rest(s__29444__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29441_SHARP_){
return cljs.core.second(p1__29441_SHARP_);
}),cljs.core.deref(todo_list)));
})()], null))], null);
});
/**
 * My Todo Application using clojure
 */
my_project.app.todo.todo_app = (function my_project$app$todo$todo_app(){
var todo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app-container","div.app-container",-164087897),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sub-container","div.sub-container",481214270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"To-Do App in ClojureScript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.app.todo.todo_form,todo_list], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.app.todo.todo_iter,todo_list], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.status-note","p.status-note",1385438216),"Note: Change status to see real-time color updates"], null)], null)], null);
});
});

//# sourceMappingURL=my_project.app.todo.js.map
