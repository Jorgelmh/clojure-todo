goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38814 = arguments.length;
var i__4737__auto___38815 = (0);
while(true){
if((i__4737__auto___38815 < len__4736__auto___38814)){
args__4742__auto__.push((arguments[i__4737__auto___38815]));

var G__38816 = (i__4737__auto___38815 + (1));
i__4737__auto___38815 = G__38816;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38634){
var G__38635 = cljs.core.first(seq38634);
var seq38634__$1 = cljs.core.next(seq38634);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38635,seq38634__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38636 = cljs.core.seq(sources);
var chunk__38637 = null;
var count__38638 = (0);
var i__38639 = (0);
while(true){
if((i__38639 < count__38638)){
var map__38646 = chunk__38637.cljs$core$IIndexed$_nth$arity$2(null,i__38639);
var map__38646__$1 = (((((!((map__38646 == null))))?(((((map__38646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38646):map__38646);
var src = map__38646__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38650){var e_38857 = e38650;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38857);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38857.message)].join('')));
}

var G__38858 = seq__38636;
var G__38859 = chunk__38637;
var G__38860 = count__38638;
var G__38861 = (i__38639 + (1));
seq__38636 = G__38858;
chunk__38637 = G__38859;
count__38638 = G__38860;
i__38639 = G__38861;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38636);
if(temp__5735__auto__){
var seq__38636__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38636__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38636__$1);
var G__38862 = cljs.core.chunk_rest(seq__38636__$1);
var G__38863 = c__4556__auto__;
var G__38864 = cljs.core.count(c__4556__auto__);
var G__38865 = (0);
seq__38636 = G__38862;
chunk__38637 = G__38863;
count__38638 = G__38864;
i__38639 = G__38865;
continue;
} else {
var map__38651 = cljs.core.first(seq__38636__$1);
var map__38651__$1 = (((((!((map__38651 == null))))?(((((map__38651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38651):map__38651);
var src = map__38651__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38651__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38651__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38651__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38651__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38653){var e_38866 = e38653;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38866);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38866.message)].join('')));
}

var G__38867 = cljs.core.next(seq__38636__$1);
var G__38868 = null;
var G__38869 = (0);
var G__38870 = (0);
seq__38636 = G__38867;
chunk__38637 = G__38868;
count__38638 = G__38869;
i__38639 = G__38870;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38654 = cljs.core.seq(js_requires);
var chunk__38655 = null;
var count__38656 = (0);
var i__38657 = (0);
while(true){
if((i__38657 < count__38656)){
var js_ns = chunk__38655.cljs$core$IIndexed$_nth$arity$2(null,i__38657);
var require_str_38871 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38871);


var G__38872 = seq__38654;
var G__38873 = chunk__38655;
var G__38874 = count__38656;
var G__38875 = (i__38657 + (1));
seq__38654 = G__38872;
chunk__38655 = G__38873;
count__38656 = G__38874;
i__38657 = G__38875;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38654);
if(temp__5735__auto__){
var seq__38654__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38654__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38654__$1);
var G__38876 = cljs.core.chunk_rest(seq__38654__$1);
var G__38877 = c__4556__auto__;
var G__38878 = cljs.core.count(c__4556__auto__);
var G__38879 = (0);
seq__38654 = G__38876;
chunk__38655 = G__38877;
count__38656 = G__38878;
i__38657 = G__38879;
continue;
} else {
var js_ns = cljs.core.first(seq__38654__$1);
var require_str_38888 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38888);


var G__38889 = cljs.core.next(seq__38654__$1);
var G__38890 = null;
var G__38891 = (0);
var G__38892 = (0);
seq__38654 = G__38889;
chunk__38655 = G__38890;
count__38656 = G__38891;
i__38657 = G__38892;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38659){
var map__38660 = p__38659;
var map__38660__$1 = (((((!((map__38660 == null))))?(((((map__38660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38660):map__38660);
var msg = map__38660__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38660__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38660__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38662(s__38663){
return (new cljs.core.LazySeq(null,(function (){
var s__38663__$1 = s__38663;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38663__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38668 = cljs.core.first(xs__6292__auto__);
var map__38668__$1 = (((((!((map__38668 == null))))?(((((map__38668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38668):map__38668);
var src = map__38668__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38668__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38668__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__38663__$1,map__38668,map__38668__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38660,map__38660__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38662_$_iter__38664(s__38665){
return (new cljs.core.LazySeq(null,((function (s__38663__$1,map__38668,map__38668__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38660,map__38660__$1,msg,info,reload_info){
return (function (){
var s__38665__$1 = s__38665;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38665__$1);
if(temp__5735__auto____$1){
var s__38665__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38665__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38665__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38667 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38666 = (0);
while(true){
if((i__38666 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__38666);
cljs.core.chunk_append(b__38667,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38899 = (i__38666 + (1));
i__38666 = G__38899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38667),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38662_$_iter__38664(cljs.core.chunk_rest(s__38665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38667),null);
}
} else {
var warning = cljs.core.first(s__38665__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38662_$_iter__38664(cljs.core.rest(s__38665__$2)));
}
} else {
return null;
}
break;
}
});})(s__38663__$1,map__38668,map__38668__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38660,map__38660__$1,msg,info,reload_info))
,null,null));
});})(s__38663__$1,map__38668,map__38668__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38660,map__38660__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38662(cljs.core.rest(s__38663__$1)));
} else {
var G__38900 = cljs.core.rest(s__38663__$1);
s__38663__$1 = G__38900;
continue;
}
} else {
var G__38901 = cljs.core.rest(s__38663__$1);
s__38663__$1 = G__38901;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38670_38902 = cljs.core.seq(warnings);
var chunk__38671_38903 = null;
var count__38672_38904 = (0);
var i__38673_38905 = (0);
while(true){
if((i__38673_38905 < count__38672_38904)){
var map__38678_38906 = chunk__38671_38903.cljs$core$IIndexed$_nth$arity$2(null,i__38673_38905);
var map__38678_38907__$1 = (((((!((map__38678_38906 == null))))?(((((map__38678_38906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38678_38906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38678_38906):map__38678_38906);
var w_38908 = map__38678_38907__$1;
var msg_38909__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38678_38907__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38678_38907__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38678_38907__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38678_38907__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38912)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38910),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38911),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38909__$1)].join(''));


var G__38913 = seq__38670_38902;
var G__38914 = chunk__38671_38903;
var G__38915 = count__38672_38904;
var G__38916 = (i__38673_38905 + (1));
seq__38670_38902 = G__38913;
chunk__38671_38903 = G__38914;
count__38672_38904 = G__38915;
i__38673_38905 = G__38916;
continue;
} else {
var temp__5735__auto___38917 = cljs.core.seq(seq__38670_38902);
if(temp__5735__auto___38917){
var seq__38670_38918__$1 = temp__5735__auto___38917;
if(cljs.core.chunked_seq_QMARK_(seq__38670_38918__$1)){
var c__4556__auto___38919 = cljs.core.chunk_first(seq__38670_38918__$1);
var G__38920 = cljs.core.chunk_rest(seq__38670_38918__$1);
var G__38921 = c__4556__auto___38919;
var G__38922 = cljs.core.count(c__4556__auto___38919);
var G__38923 = (0);
seq__38670_38902 = G__38920;
chunk__38671_38903 = G__38921;
count__38672_38904 = G__38922;
i__38673_38905 = G__38923;
continue;
} else {
var map__38680_38924 = cljs.core.first(seq__38670_38918__$1);
var map__38680_38925__$1 = (((((!((map__38680_38924 == null))))?(((((map__38680_38924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38680_38924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38680_38924):map__38680_38924);
var w_38926 = map__38680_38925__$1;
var msg_38927__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38680_38925__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38680_38925__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38680_38925__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38680_38925__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38930)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38928),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38929),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38927__$1)].join(''));


var G__38931 = cljs.core.next(seq__38670_38918__$1);
var G__38932 = null;
var G__38933 = (0);
var G__38934 = (0);
seq__38670_38902 = G__38931;
chunk__38671_38903 = G__38932;
count__38672_38904 = G__38933;
i__38673_38905 = G__38934;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38658_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38658_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38682){
var map__38683 = p__38682;
var map__38683__$1 = (((((!((map__38683 == null))))?(((((map__38683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38683):map__38683);
var msg = map__38683__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38683__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38685 = cljs.core.seq(updates);
var chunk__38687 = null;
var count__38688 = (0);
var i__38689 = (0);
while(true){
if((i__38689 < count__38688)){
var path = chunk__38687.cljs$core$IIndexed$_nth$arity$2(null,i__38689);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38719_38935 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38723_38936 = null;
var count__38724_38937 = (0);
var i__38725_38938 = (0);
while(true){
if((i__38725_38938 < count__38724_38937)){
var node_38939 = chunk__38723_38936.cljs$core$IIndexed$_nth$arity$2(null,i__38725_38938);
if(cljs.core.not(node_38939.shadow$old)){
var path_match_38940 = shadow.cljs.devtools.client.browser.match_paths(node_38939.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38940)){
var new_link_38941 = (function (){var G__38731 = node_38939.cloneNode(true);
G__38731.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38940),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38731;
})();
(node_38939.shadow$old = true);

(new_link_38941.onload = ((function (seq__38719_38935,chunk__38723_38936,count__38724_38937,i__38725_38938,seq__38685,chunk__38687,count__38688,i__38689,new_link_38941,path_match_38940,node_38939,path,map__38683,map__38683__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38939);
});})(seq__38719_38935,chunk__38723_38936,count__38724_38937,i__38725_38938,seq__38685,chunk__38687,count__38688,i__38689,new_link_38941,path_match_38940,node_38939,path,map__38683,map__38683__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38940], 0));

goog.dom.insertSiblingAfter(new_link_38941,node_38939);


var G__38942 = seq__38719_38935;
var G__38943 = chunk__38723_38936;
var G__38944 = count__38724_38937;
var G__38945 = (i__38725_38938 + (1));
seq__38719_38935 = G__38942;
chunk__38723_38936 = G__38943;
count__38724_38937 = G__38944;
i__38725_38938 = G__38945;
continue;
} else {
var G__38946 = seq__38719_38935;
var G__38947 = chunk__38723_38936;
var G__38948 = count__38724_38937;
var G__38949 = (i__38725_38938 + (1));
seq__38719_38935 = G__38946;
chunk__38723_38936 = G__38947;
count__38724_38937 = G__38948;
i__38725_38938 = G__38949;
continue;
}
} else {
var G__38950 = seq__38719_38935;
var G__38951 = chunk__38723_38936;
var G__38952 = count__38724_38937;
var G__38953 = (i__38725_38938 + (1));
seq__38719_38935 = G__38950;
chunk__38723_38936 = G__38951;
count__38724_38937 = G__38952;
i__38725_38938 = G__38953;
continue;
}
} else {
var temp__5735__auto___38954 = cljs.core.seq(seq__38719_38935);
if(temp__5735__auto___38954){
var seq__38719_38955__$1 = temp__5735__auto___38954;
if(cljs.core.chunked_seq_QMARK_(seq__38719_38955__$1)){
var c__4556__auto___38956 = cljs.core.chunk_first(seq__38719_38955__$1);
var G__38957 = cljs.core.chunk_rest(seq__38719_38955__$1);
var G__38958 = c__4556__auto___38956;
var G__38959 = cljs.core.count(c__4556__auto___38956);
var G__38960 = (0);
seq__38719_38935 = G__38957;
chunk__38723_38936 = G__38958;
count__38724_38937 = G__38959;
i__38725_38938 = G__38960;
continue;
} else {
var node_38961 = cljs.core.first(seq__38719_38955__$1);
if(cljs.core.not(node_38961.shadow$old)){
var path_match_38962 = shadow.cljs.devtools.client.browser.match_paths(node_38961.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38962)){
var new_link_38963 = (function (){var G__38732 = node_38961.cloneNode(true);
G__38732.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38962),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38732;
})();
(node_38961.shadow$old = true);

(new_link_38963.onload = ((function (seq__38719_38935,chunk__38723_38936,count__38724_38937,i__38725_38938,seq__38685,chunk__38687,count__38688,i__38689,new_link_38963,path_match_38962,node_38961,seq__38719_38955__$1,temp__5735__auto___38954,path,map__38683,map__38683__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38961);
});})(seq__38719_38935,chunk__38723_38936,count__38724_38937,i__38725_38938,seq__38685,chunk__38687,count__38688,i__38689,new_link_38963,path_match_38962,node_38961,seq__38719_38955__$1,temp__5735__auto___38954,path,map__38683,map__38683__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38962], 0));

goog.dom.insertSiblingAfter(new_link_38963,node_38961);


var G__38964 = cljs.core.next(seq__38719_38955__$1);
var G__38965 = null;
var G__38966 = (0);
var G__38967 = (0);
seq__38719_38935 = G__38964;
chunk__38723_38936 = G__38965;
count__38724_38937 = G__38966;
i__38725_38938 = G__38967;
continue;
} else {
var G__38968 = cljs.core.next(seq__38719_38955__$1);
var G__38969 = null;
var G__38970 = (0);
var G__38971 = (0);
seq__38719_38935 = G__38968;
chunk__38723_38936 = G__38969;
count__38724_38937 = G__38970;
i__38725_38938 = G__38971;
continue;
}
} else {
var G__38972 = cljs.core.next(seq__38719_38955__$1);
var G__38973 = null;
var G__38974 = (0);
var G__38975 = (0);
seq__38719_38935 = G__38972;
chunk__38723_38936 = G__38973;
count__38724_38937 = G__38974;
i__38725_38938 = G__38975;
continue;
}
}
} else {
}
}
break;
}


var G__38976 = seq__38685;
var G__38977 = chunk__38687;
var G__38978 = count__38688;
var G__38979 = (i__38689 + (1));
seq__38685 = G__38976;
chunk__38687 = G__38977;
count__38688 = G__38978;
i__38689 = G__38979;
continue;
} else {
var G__38980 = seq__38685;
var G__38981 = chunk__38687;
var G__38982 = count__38688;
var G__38983 = (i__38689 + (1));
seq__38685 = G__38980;
chunk__38687 = G__38981;
count__38688 = G__38982;
i__38689 = G__38983;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38685);
if(temp__5735__auto__){
var seq__38685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38685__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38685__$1);
var G__38984 = cljs.core.chunk_rest(seq__38685__$1);
var G__38985 = c__4556__auto__;
var G__38986 = cljs.core.count(c__4556__auto__);
var G__38987 = (0);
seq__38685 = G__38984;
chunk__38687 = G__38985;
count__38688 = G__38986;
i__38689 = G__38987;
continue;
} else {
var path = cljs.core.first(seq__38685__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38733_38988 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38737_38989 = null;
var count__38738_38990 = (0);
var i__38739_38991 = (0);
while(true){
if((i__38739_38991 < count__38738_38990)){
var node_38992 = chunk__38737_38989.cljs$core$IIndexed$_nth$arity$2(null,i__38739_38991);
if(cljs.core.not(node_38992.shadow$old)){
var path_match_38993 = shadow.cljs.devtools.client.browser.match_paths(node_38992.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38993)){
var new_link_38994 = (function (){var G__38745 = node_38992.cloneNode(true);
G__38745.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38993),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38745;
})();
(node_38992.shadow$old = true);

(new_link_38994.onload = ((function (seq__38733_38988,chunk__38737_38989,count__38738_38990,i__38739_38991,seq__38685,chunk__38687,count__38688,i__38689,new_link_38994,path_match_38993,node_38992,path,seq__38685__$1,temp__5735__auto__,map__38683,map__38683__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38992);
});})(seq__38733_38988,chunk__38737_38989,count__38738_38990,i__38739_38991,seq__38685,chunk__38687,count__38688,i__38689,new_link_38994,path_match_38993,node_38992,path,seq__38685__$1,temp__5735__auto__,map__38683,map__38683__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38993], 0));

goog.dom.insertSiblingAfter(new_link_38994,node_38992);


var G__38995 = seq__38733_38988;
var G__38996 = chunk__38737_38989;
var G__38997 = count__38738_38990;
var G__38998 = (i__38739_38991 + (1));
seq__38733_38988 = G__38995;
chunk__38737_38989 = G__38996;
count__38738_38990 = G__38997;
i__38739_38991 = G__38998;
continue;
} else {
var G__38999 = seq__38733_38988;
var G__39000 = chunk__38737_38989;
var G__39001 = count__38738_38990;
var G__39002 = (i__38739_38991 + (1));
seq__38733_38988 = G__38999;
chunk__38737_38989 = G__39000;
count__38738_38990 = G__39001;
i__38739_38991 = G__39002;
continue;
}
} else {
var G__39003 = seq__38733_38988;
var G__39004 = chunk__38737_38989;
var G__39005 = count__38738_38990;
var G__39006 = (i__38739_38991 + (1));
seq__38733_38988 = G__39003;
chunk__38737_38989 = G__39004;
count__38738_38990 = G__39005;
i__38739_38991 = G__39006;
continue;
}
} else {
var temp__5735__auto___39007__$1 = cljs.core.seq(seq__38733_38988);
if(temp__5735__auto___39007__$1){
var seq__38733_39008__$1 = temp__5735__auto___39007__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38733_39008__$1)){
var c__4556__auto___39009 = cljs.core.chunk_first(seq__38733_39008__$1);
var G__39010 = cljs.core.chunk_rest(seq__38733_39008__$1);
var G__39011 = c__4556__auto___39009;
var G__39012 = cljs.core.count(c__4556__auto___39009);
var G__39013 = (0);
seq__38733_38988 = G__39010;
chunk__38737_38989 = G__39011;
count__38738_38990 = G__39012;
i__38739_38991 = G__39013;
continue;
} else {
var node_39014 = cljs.core.first(seq__38733_39008__$1);
if(cljs.core.not(node_39014.shadow$old)){
var path_match_39015 = shadow.cljs.devtools.client.browser.match_paths(node_39014.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39015)){
var new_link_39016 = (function (){var G__38746 = node_39014.cloneNode(true);
G__38746.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39015),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38746;
})();
(node_39014.shadow$old = true);

(new_link_39016.onload = ((function (seq__38733_38988,chunk__38737_38989,count__38738_38990,i__38739_38991,seq__38685,chunk__38687,count__38688,i__38689,new_link_39016,path_match_39015,node_39014,seq__38733_39008__$1,temp__5735__auto___39007__$1,path,seq__38685__$1,temp__5735__auto__,map__38683,map__38683__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39014);
});})(seq__38733_38988,chunk__38737_38989,count__38738_38990,i__38739_38991,seq__38685,chunk__38687,count__38688,i__38689,new_link_39016,path_match_39015,node_39014,seq__38733_39008__$1,temp__5735__auto___39007__$1,path,seq__38685__$1,temp__5735__auto__,map__38683,map__38683__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39015], 0));

goog.dom.insertSiblingAfter(new_link_39016,node_39014);


var G__39017 = cljs.core.next(seq__38733_39008__$1);
var G__39018 = null;
var G__39019 = (0);
var G__39020 = (0);
seq__38733_38988 = G__39017;
chunk__38737_38989 = G__39018;
count__38738_38990 = G__39019;
i__38739_38991 = G__39020;
continue;
} else {
var G__39021 = cljs.core.next(seq__38733_39008__$1);
var G__39022 = null;
var G__39023 = (0);
var G__39024 = (0);
seq__38733_38988 = G__39021;
chunk__38737_38989 = G__39022;
count__38738_38990 = G__39023;
i__38739_38991 = G__39024;
continue;
}
} else {
var G__39025 = cljs.core.next(seq__38733_39008__$1);
var G__39026 = null;
var G__39027 = (0);
var G__39028 = (0);
seq__38733_38988 = G__39025;
chunk__38737_38989 = G__39026;
count__38738_38990 = G__39027;
i__38739_38991 = G__39028;
continue;
}
}
} else {
}
}
break;
}


var G__39029 = cljs.core.next(seq__38685__$1);
var G__39030 = null;
var G__39031 = (0);
var G__39032 = (0);
seq__38685 = G__39029;
chunk__38687 = G__39030;
count__38688 = G__39031;
i__38689 = G__39032;
continue;
} else {
var G__39033 = cljs.core.next(seq__38685__$1);
var G__39034 = null;
var G__39035 = (0);
var G__39036 = (0);
seq__38685 = G__39033;
chunk__38687 = G__39034;
count__38688 = G__39035;
i__38689 = G__39036;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38747){
var map__38748 = p__38747;
var map__38748__$1 = (((((!((map__38748 == null))))?(((((map__38748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38748):map__38748);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38748__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38771){
var map__38772 = p__38771;
var map__38772__$1 = (((((!((map__38772 == null))))?(((((map__38772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38772):map__38772);
var _ = map__38772__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38772__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38774,done,error){
var map__38775 = p__38774;
var map__38775__$1 = (((((!((map__38775 == null))))?(((((map__38775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38775):map__38775);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38777,done,error){
var map__38778 = p__38777;
var map__38778__$1 = (((((!((map__38778 == null))))?(((((map__38778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38778):map__38778);
var msg = map__38778__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38778__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38778__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38778__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38780){
var map__38781 = p__38780;
var map__38781__$1 = (((((!((map__38781 == null))))?(((((map__38781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38781):map__38781);
var src = map__38781__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38781__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38783 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38783) : done.call(null,G__38783));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38784){
var map__38785 = p__38784;
var map__38785__$1 = (((((!((map__38785 == null))))?(((((map__38785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38785):map__38785);
var msg__$1 = map__38785__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38785__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38787){var ex = e38787;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38788){
var map__38789 = p__38788;
var map__38789__$1 = (((((!((map__38789 == null))))?(((((map__38789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38789):map__38789);
var env = map__38789__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38789__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__38795){
var map__38796 = p__38795;
var map__38796__$1 = (((((!((map__38796 == null))))?(((((map__38796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38796):map__38796);
var msg = map__38796__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38796__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38803){
var map__38804 = p__38803;
var map__38804__$1 = (((((!((map__38804 == null))))?(((((map__38804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38804):map__38804);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38804__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38804__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38809){
var map__38810 = p__38809;
var map__38810__$1 = (((((!((map__38810 == null))))?(((((map__38810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38810):map__38810);
var svc = map__38810__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38810__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
