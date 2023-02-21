goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38427,p__38428){
var map__38429 = p__38427;
var map__38429__$1 = (((((!((map__38429 == null))))?(((((map__38429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38429):map__38429);
var svc = map__38429__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38430 = p__38428;
var map__38430__$1 = (((((!((map__38430 == null))))?(((((map__38430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38430):map__38430);
var msg = map__38430__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38430__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38430__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38430__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38430__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38433,p__38434){
var map__38435 = p__38433;
var map__38435__$1 = (((((!((map__38435 == null))))?(((((map__38435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38435):map__38435);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38435__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38436 = p__38434;
var map__38436__$1 = (((((!((map__38436 == null))))?(((((map__38436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38436):map__38436);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38436__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38439,p__38440){
var map__38441 = p__38439;
var map__38441__$1 = (((((!((map__38441 == null))))?(((((map__38441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38441):map__38441);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38441__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38441__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38442 = p__38440;
var map__38442__$1 = (((((!((map__38442 == null))))?(((((map__38442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38442):map__38442);
var msg = map__38442__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38442__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38445,tid){
var map__38446 = p__38445;
var map__38446__$1 = (((((!((map__38446 == null))))?(((((map__38446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38446):map__38446);
var svc = map__38446__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38446__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38452 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38453 = null;
var count__38454 = (0);
var i__38455 = (0);
while(true){
if((i__38455 < count__38454)){
var vec__38462 = chunk__38453.cljs$core$IIndexed$_nth$arity$2(null,i__38455);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38462,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38462,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38471 = seq__38452;
var G__38472 = chunk__38453;
var G__38473 = count__38454;
var G__38474 = (i__38455 + (1));
seq__38452 = G__38471;
chunk__38453 = G__38472;
count__38454 = G__38473;
i__38455 = G__38474;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38452);
if(temp__5735__auto__){
var seq__38452__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38452__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38452__$1);
var G__38475 = cljs.core.chunk_rest(seq__38452__$1);
var G__38476 = c__4556__auto__;
var G__38477 = cljs.core.count(c__4556__auto__);
var G__38478 = (0);
seq__38452 = G__38475;
chunk__38453 = G__38476;
count__38454 = G__38477;
i__38455 = G__38478;
continue;
} else {
var vec__38465 = cljs.core.first(seq__38452__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38465,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38465,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38479 = cljs.core.next(seq__38452__$1);
var G__38480 = null;
var G__38481 = (0);
var G__38482 = (0);
seq__38452 = G__38479;
chunk__38453 = G__38480;
count__38454 = G__38481;
i__38455 = G__38482;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38448_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38448_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38449_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38449_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38450_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38450_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38451_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38451_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38468){
var map__38469 = p__38468;
var map__38469__$1 = (((((!((map__38469 == null))))?(((((map__38469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38469):map__38469);
var svc = map__38469__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38469__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38469__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
