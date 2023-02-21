goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35351 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35351(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35398 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35398(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34744 = coll;
var G__34745 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34744,G__34745) : shadow.dom.lazy_native_coll_seq.call(null,G__34744,G__34745));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34810 = arguments.length;
switch (G__34810) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34812 = arguments.length;
switch (G__34812) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34814 = arguments.length;
switch (G__34814) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34816 = arguments.length;
switch (G__34816) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34818 = arguments.length;
switch (G__34818) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34820 = arguments.length;
switch (G__34820) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34872){if((e34872 instanceof Object)){
var e = e34872;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34872;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34873 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34874 = null;
var count__34875 = (0);
var i__34876 = (0);
while(true){
if((i__34876 < count__34875)){
var el = chunk__34874.cljs$core$IIndexed$_nth$arity$2(null,i__34876);
var handler_35405__$1 = ((function (seq__34873,chunk__34874,count__34875,i__34876,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34873,chunk__34874,count__34875,i__34876,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35405__$1);


var G__35406 = seq__34873;
var G__35407 = chunk__34874;
var G__35408 = count__34875;
var G__35409 = (i__34876 + (1));
seq__34873 = G__35406;
chunk__34874 = G__35407;
count__34875 = G__35408;
i__34876 = G__35409;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34873);
if(temp__5735__auto__){
var seq__34873__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34873__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34873__$1);
var G__35410 = cljs.core.chunk_rest(seq__34873__$1);
var G__35411 = c__4556__auto__;
var G__35412 = cljs.core.count(c__4556__auto__);
var G__35413 = (0);
seq__34873 = G__35410;
chunk__34874 = G__35411;
count__34875 = G__35412;
i__34876 = G__35413;
continue;
} else {
var el = cljs.core.first(seq__34873__$1);
var handler_35414__$1 = ((function (seq__34873,chunk__34874,count__34875,i__34876,el,seq__34873__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34873,chunk__34874,count__34875,i__34876,el,seq__34873__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35414__$1);


var G__35415 = cljs.core.next(seq__34873__$1);
var G__35416 = null;
var G__35417 = (0);
var G__35418 = (0);
seq__34873 = G__35415;
chunk__34874 = G__35416;
count__34875 = G__35417;
i__34876 = G__35418;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34878 = arguments.length;
switch (G__34878) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34879 = cljs.core.seq(events);
var chunk__34880 = null;
var count__34881 = (0);
var i__34882 = (0);
while(true){
if((i__34882 < count__34881)){
var vec__34889 = chunk__34880.cljs$core$IIndexed$_nth$arity$2(null,i__34882);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34889,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34889,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35420 = seq__34879;
var G__35421 = chunk__34880;
var G__35422 = count__34881;
var G__35423 = (i__34882 + (1));
seq__34879 = G__35420;
chunk__34880 = G__35421;
count__34881 = G__35422;
i__34882 = G__35423;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34879);
if(temp__5735__auto__){
var seq__34879__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34879__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34879__$1);
var G__35424 = cljs.core.chunk_rest(seq__34879__$1);
var G__35425 = c__4556__auto__;
var G__35426 = cljs.core.count(c__4556__auto__);
var G__35427 = (0);
seq__34879 = G__35424;
chunk__34880 = G__35425;
count__34881 = G__35426;
i__34882 = G__35427;
continue;
} else {
var vec__34892 = cljs.core.first(seq__34879__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34892,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34892,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35428 = cljs.core.next(seq__34879__$1);
var G__35429 = null;
var G__35430 = (0);
var G__35431 = (0);
seq__34879 = G__35428;
chunk__34880 = G__35429;
count__34881 = G__35430;
i__34882 = G__35431;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34895 = cljs.core.seq(styles);
var chunk__34896 = null;
var count__34897 = (0);
var i__34898 = (0);
while(true){
if((i__34898 < count__34897)){
var vec__34905 = chunk__34896.cljs$core$IIndexed$_nth$arity$2(null,i__34898);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34905,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34905,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35432 = seq__34895;
var G__35433 = chunk__34896;
var G__35434 = count__34897;
var G__35435 = (i__34898 + (1));
seq__34895 = G__35432;
chunk__34896 = G__35433;
count__34897 = G__35434;
i__34898 = G__35435;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34895);
if(temp__5735__auto__){
var seq__34895__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34895__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34895__$1);
var G__35436 = cljs.core.chunk_rest(seq__34895__$1);
var G__35437 = c__4556__auto__;
var G__35438 = cljs.core.count(c__4556__auto__);
var G__35439 = (0);
seq__34895 = G__35436;
chunk__34896 = G__35437;
count__34897 = G__35438;
i__34898 = G__35439;
continue;
} else {
var vec__34908 = cljs.core.first(seq__34895__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34908,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34908,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35440 = cljs.core.next(seq__34895__$1);
var G__35441 = null;
var G__35442 = (0);
var G__35443 = (0);
seq__34895 = G__35440;
chunk__34896 = G__35441;
count__34897 = G__35442;
i__34898 = G__35443;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34952_35444 = key;
var G__34952_35445__$1 = (((G__34952_35444 instanceof cljs.core.Keyword))?G__34952_35444.fqn:null);
switch (G__34952_35445__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35447 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_35447,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_35447,"aria-");
}
})())){
el.setAttribute(ks_35447,value);
} else {
(el[ks_35447] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34953){
var map__34954 = p__34953;
var map__34954__$1 = (((((!((map__34954 == null))))?(((((map__34954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34954):map__34954);
var props = map__34954__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34954__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34956 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34956,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34956,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34956,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34959 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34959,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34959;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34961 = arguments.length;
switch (G__34961) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34962){
var vec__34963 = p__34962;
var seq__34964 = cljs.core.seq(vec__34963);
var first__34965 = cljs.core.first(seq__34964);
var seq__34964__$1 = cljs.core.next(seq__34964);
var nn = first__34965;
var first__34965__$1 = cljs.core.first(seq__34964__$1);
var seq__34964__$2 = cljs.core.next(seq__34964__$1);
var np = first__34965__$1;
var nc = seq__34964__$2;
var node = vec__34963;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34966 = nn;
var G__34967 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34966,G__34967) : create_fn.call(null,G__34966,G__34967));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34968 = nn;
var G__34969 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34968,G__34969) : create_fn.call(null,G__34968,G__34969));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34970 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34970,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34970,(1),null);
var seq__34973_35480 = cljs.core.seq(node_children);
var chunk__34974_35481 = null;
var count__34975_35482 = (0);
var i__34976_35483 = (0);
while(true){
if((i__34976_35483 < count__34975_35482)){
var child_struct_35484 = chunk__34974_35481.cljs$core$IIndexed$_nth$arity$2(null,i__34976_35483);
var children_35485 = shadow.dom.dom_node(child_struct_35484);
if(cljs.core.seq_QMARK_(children_35485)){
var seq__35027_35486 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35485));
var chunk__35029_35487 = null;
var count__35030_35488 = (0);
var i__35031_35489 = (0);
while(true){
if((i__35031_35489 < count__35030_35488)){
var child_35490 = chunk__35029_35487.cljs$core$IIndexed$_nth$arity$2(null,i__35031_35489);
if(cljs.core.truth_(child_35490)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35490);


var G__35491 = seq__35027_35486;
var G__35492 = chunk__35029_35487;
var G__35493 = count__35030_35488;
var G__35494 = (i__35031_35489 + (1));
seq__35027_35486 = G__35491;
chunk__35029_35487 = G__35492;
count__35030_35488 = G__35493;
i__35031_35489 = G__35494;
continue;
} else {
var G__35495 = seq__35027_35486;
var G__35496 = chunk__35029_35487;
var G__35497 = count__35030_35488;
var G__35498 = (i__35031_35489 + (1));
seq__35027_35486 = G__35495;
chunk__35029_35487 = G__35496;
count__35030_35488 = G__35497;
i__35031_35489 = G__35498;
continue;
}
} else {
var temp__5735__auto___35499 = cljs.core.seq(seq__35027_35486);
if(temp__5735__auto___35499){
var seq__35027_35500__$1 = temp__5735__auto___35499;
if(cljs.core.chunked_seq_QMARK_(seq__35027_35500__$1)){
var c__4556__auto___35501 = cljs.core.chunk_first(seq__35027_35500__$1);
var G__35502 = cljs.core.chunk_rest(seq__35027_35500__$1);
var G__35503 = c__4556__auto___35501;
var G__35504 = cljs.core.count(c__4556__auto___35501);
var G__35505 = (0);
seq__35027_35486 = G__35502;
chunk__35029_35487 = G__35503;
count__35030_35488 = G__35504;
i__35031_35489 = G__35505;
continue;
} else {
var child_35506 = cljs.core.first(seq__35027_35500__$1);
if(cljs.core.truth_(child_35506)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35506);


var G__35507 = cljs.core.next(seq__35027_35500__$1);
var G__35508 = null;
var G__35509 = (0);
var G__35510 = (0);
seq__35027_35486 = G__35507;
chunk__35029_35487 = G__35508;
count__35030_35488 = G__35509;
i__35031_35489 = G__35510;
continue;
} else {
var G__35511 = cljs.core.next(seq__35027_35500__$1);
var G__35512 = null;
var G__35513 = (0);
var G__35514 = (0);
seq__35027_35486 = G__35511;
chunk__35029_35487 = G__35512;
count__35030_35488 = G__35513;
i__35031_35489 = G__35514;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35485);
}


var G__35515 = seq__34973_35480;
var G__35516 = chunk__34974_35481;
var G__35517 = count__34975_35482;
var G__35518 = (i__34976_35483 + (1));
seq__34973_35480 = G__35515;
chunk__34974_35481 = G__35516;
count__34975_35482 = G__35517;
i__34976_35483 = G__35518;
continue;
} else {
var temp__5735__auto___35519 = cljs.core.seq(seq__34973_35480);
if(temp__5735__auto___35519){
var seq__34973_35520__$1 = temp__5735__auto___35519;
if(cljs.core.chunked_seq_QMARK_(seq__34973_35520__$1)){
var c__4556__auto___35521 = cljs.core.chunk_first(seq__34973_35520__$1);
var G__35522 = cljs.core.chunk_rest(seq__34973_35520__$1);
var G__35523 = c__4556__auto___35521;
var G__35524 = cljs.core.count(c__4556__auto___35521);
var G__35525 = (0);
seq__34973_35480 = G__35522;
chunk__34974_35481 = G__35523;
count__34975_35482 = G__35524;
i__34976_35483 = G__35525;
continue;
} else {
var child_struct_35526 = cljs.core.first(seq__34973_35520__$1);
var children_35527 = shadow.dom.dom_node(child_struct_35526);
if(cljs.core.seq_QMARK_(children_35527)){
var seq__35033_35528 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35527));
var chunk__35035_35529 = null;
var count__35036_35530 = (0);
var i__35037_35531 = (0);
while(true){
if((i__35037_35531 < count__35036_35530)){
var child_35532 = chunk__35035_35529.cljs$core$IIndexed$_nth$arity$2(null,i__35037_35531);
if(cljs.core.truth_(child_35532)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35532);


var G__35533 = seq__35033_35528;
var G__35534 = chunk__35035_35529;
var G__35535 = count__35036_35530;
var G__35536 = (i__35037_35531 + (1));
seq__35033_35528 = G__35533;
chunk__35035_35529 = G__35534;
count__35036_35530 = G__35535;
i__35037_35531 = G__35536;
continue;
} else {
var G__35537 = seq__35033_35528;
var G__35538 = chunk__35035_35529;
var G__35539 = count__35036_35530;
var G__35540 = (i__35037_35531 + (1));
seq__35033_35528 = G__35537;
chunk__35035_35529 = G__35538;
count__35036_35530 = G__35539;
i__35037_35531 = G__35540;
continue;
}
} else {
var temp__5735__auto___35541__$1 = cljs.core.seq(seq__35033_35528);
if(temp__5735__auto___35541__$1){
var seq__35033_35542__$1 = temp__5735__auto___35541__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35033_35542__$1)){
var c__4556__auto___35543 = cljs.core.chunk_first(seq__35033_35542__$1);
var G__35544 = cljs.core.chunk_rest(seq__35033_35542__$1);
var G__35545 = c__4556__auto___35543;
var G__35546 = cljs.core.count(c__4556__auto___35543);
var G__35547 = (0);
seq__35033_35528 = G__35544;
chunk__35035_35529 = G__35545;
count__35036_35530 = G__35546;
i__35037_35531 = G__35547;
continue;
} else {
var child_35548 = cljs.core.first(seq__35033_35542__$1);
if(cljs.core.truth_(child_35548)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35548);


var G__35549 = cljs.core.next(seq__35033_35542__$1);
var G__35550 = null;
var G__35551 = (0);
var G__35552 = (0);
seq__35033_35528 = G__35549;
chunk__35035_35529 = G__35550;
count__35036_35530 = G__35551;
i__35037_35531 = G__35552;
continue;
} else {
var G__35553 = cljs.core.next(seq__35033_35542__$1);
var G__35554 = null;
var G__35555 = (0);
var G__35556 = (0);
seq__35033_35528 = G__35553;
chunk__35035_35529 = G__35554;
count__35036_35530 = G__35555;
i__35037_35531 = G__35556;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35527);
}


var G__35557 = cljs.core.next(seq__34973_35520__$1);
var G__35558 = null;
var G__35559 = (0);
var G__35560 = (0);
seq__34973_35480 = G__35557;
chunk__34974_35481 = G__35558;
count__34975_35482 = G__35559;
i__34976_35483 = G__35560;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35040 = cljs.core.seq(node);
var chunk__35041 = null;
var count__35042 = (0);
var i__35043 = (0);
while(true){
if((i__35043 < count__35042)){
var n = chunk__35041.cljs$core$IIndexed$_nth$arity$2(null,i__35043);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35561 = seq__35040;
var G__35562 = chunk__35041;
var G__35563 = count__35042;
var G__35564 = (i__35043 + (1));
seq__35040 = G__35561;
chunk__35041 = G__35562;
count__35042 = G__35563;
i__35043 = G__35564;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35040);
if(temp__5735__auto__){
var seq__35040__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35040__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35040__$1);
var G__35565 = cljs.core.chunk_rest(seq__35040__$1);
var G__35566 = c__4556__auto__;
var G__35567 = cljs.core.count(c__4556__auto__);
var G__35568 = (0);
seq__35040 = G__35565;
chunk__35041 = G__35566;
count__35042 = G__35567;
i__35043 = G__35568;
continue;
} else {
var n = cljs.core.first(seq__35040__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35569 = cljs.core.next(seq__35040__$1);
var G__35570 = null;
var G__35571 = (0);
var G__35572 = (0);
seq__35040 = G__35569;
chunk__35041 = G__35570;
count__35042 = G__35571;
i__35043 = G__35572;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35045 = arguments.length;
switch (G__35045) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35062 = arguments.length;
switch (G__35062) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35064 = arguments.length;
switch (G__35064) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35576 = arguments.length;
var i__4737__auto___35577 = (0);
while(true){
if((i__4737__auto___35577 < len__4736__auto___35576)){
args__4742__auto__.push((arguments[i__4737__auto___35577]));

var G__35578 = (i__4737__auto___35577 + (1));
i__4737__auto___35577 = G__35578;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35066_35579 = cljs.core.seq(nodes);
var chunk__35067_35580 = null;
var count__35068_35581 = (0);
var i__35069_35582 = (0);
while(true){
if((i__35069_35582 < count__35068_35581)){
var node_35583 = chunk__35067_35580.cljs$core$IIndexed$_nth$arity$2(null,i__35069_35582);
fragment.appendChild(shadow.dom._to_dom(node_35583));


var G__35584 = seq__35066_35579;
var G__35585 = chunk__35067_35580;
var G__35586 = count__35068_35581;
var G__35587 = (i__35069_35582 + (1));
seq__35066_35579 = G__35584;
chunk__35067_35580 = G__35585;
count__35068_35581 = G__35586;
i__35069_35582 = G__35587;
continue;
} else {
var temp__5735__auto___35588 = cljs.core.seq(seq__35066_35579);
if(temp__5735__auto___35588){
var seq__35066_35589__$1 = temp__5735__auto___35588;
if(cljs.core.chunked_seq_QMARK_(seq__35066_35589__$1)){
var c__4556__auto___35590 = cljs.core.chunk_first(seq__35066_35589__$1);
var G__35591 = cljs.core.chunk_rest(seq__35066_35589__$1);
var G__35592 = c__4556__auto___35590;
var G__35593 = cljs.core.count(c__4556__auto___35590);
var G__35594 = (0);
seq__35066_35579 = G__35591;
chunk__35067_35580 = G__35592;
count__35068_35581 = G__35593;
i__35069_35582 = G__35594;
continue;
} else {
var node_35595 = cljs.core.first(seq__35066_35589__$1);
fragment.appendChild(shadow.dom._to_dom(node_35595));


var G__35596 = cljs.core.next(seq__35066_35589__$1);
var G__35597 = null;
var G__35598 = (0);
var G__35599 = (0);
seq__35066_35579 = G__35596;
chunk__35067_35580 = G__35597;
count__35068_35581 = G__35598;
i__35069_35582 = G__35599;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35065){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35065));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35070_35600 = cljs.core.seq(scripts);
var chunk__35071_35601 = null;
var count__35072_35602 = (0);
var i__35073_35603 = (0);
while(true){
if((i__35073_35603 < count__35072_35602)){
var vec__35080_35604 = chunk__35071_35601.cljs$core$IIndexed$_nth$arity$2(null,i__35073_35603);
var script_tag_35605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35604,(0),null);
var script_body_35606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35604,(1),null);
eval(script_body_35606);


var G__35607 = seq__35070_35600;
var G__35608 = chunk__35071_35601;
var G__35609 = count__35072_35602;
var G__35610 = (i__35073_35603 + (1));
seq__35070_35600 = G__35607;
chunk__35071_35601 = G__35608;
count__35072_35602 = G__35609;
i__35073_35603 = G__35610;
continue;
} else {
var temp__5735__auto___35611 = cljs.core.seq(seq__35070_35600);
if(temp__5735__auto___35611){
var seq__35070_35612__$1 = temp__5735__auto___35611;
if(cljs.core.chunked_seq_QMARK_(seq__35070_35612__$1)){
var c__4556__auto___35613 = cljs.core.chunk_first(seq__35070_35612__$1);
var G__35614 = cljs.core.chunk_rest(seq__35070_35612__$1);
var G__35615 = c__4556__auto___35613;
var G__35616 = cljs.core.count(c__4556__auto___35613);
var G__35617 = (0);
seq__35070_35600 = G__35614;
chunk__35071_35601 = G__35615;
count__35072_35602 = G__35616;
i__35073_35603 = G__35617;
continue;
} else {
var vec__35083_35618 = cljs.core.first(seq__35070_35612__$1);
var script_tag_35619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35083_35618,(0),null);
var script_body_35620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35083_35618,(1),null);
eval(script_body_35620);


var G__35621 = cljs.core.next(seq__35070_35612__$1);
var G__35622 = null;
var G__35623 = (0);
var G__35624 = (0);
seq__35070_35600 = G__35621;
chunk__35071_35601 = G__35622;
count__35072_35602 = G__35623;
i__35073_35603 = G__35624;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35086){
var vec__35087 = p__35086;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35130 = arguments.length;
switch (G__35130) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35131 = cljs.core.seq(style_keys);
var chunk__35132 = null;
var count__35133 = (0);
var i__35134 = (0);
while(true){
if((i__35134 < count__35133)){
var it = chunk__35132.cljs$core$IIndexed$_nth$arity$2(null,i__35134);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35626 = seq__35131;
var G__35627 = chunk__35132;
var G__35628 = count__35133;
var G__35629 = (i__35134 + (1));
seq__35131 = G__35626;
chunk__35132 = G__35627;
count__35133 = G__35628;
i__35134 = G__35629;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35131);
if(temp__5735__auto__){
var seq__35131__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35131__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35131__$1);
var G__35630 = cljs.core.chunk_rest(seq__35131__$1);
var G__35631 = c__4556__auto__;
var G__35632 = cljs.core.count(c__4556__auto__);
var G__35633 = (0);
seq__35131 = G__35630;
chunk__35132 = G__35631;
count__35133 = G__35632;
i__35134 = G__35633;
continue;
} else {
var it = cljs.core.first(seq__35131__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35634 = cljs.core.next(seq__35131__$1);
var G__35635 = null;
var G__35636 = (0);
var G__35637 = (0);
seq__35131 = G__35634;
chunk__35132 = G__35635;
count__35133 = G__35636;
i__35134 = G__35637;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35136,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35140 = k35136;
var G__35140__$1 = (((G__35140 instanceof cljs.core.Keyword))?G__35140.fqn:null);
switch (G__35140__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35136,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35141){
var vec__35142 = p__35141;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35135){
var self__ = this;
var G__35135__$1 = this;
return (new cljs.core.RecordIter((0),G__35135__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35137,other35138){
var self__ = this;
var this35137__$1 = this;
return (((!((other35138 == null)))) && ((this35137__$1.constructor === other35138.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35137__$1.x,other35138.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35137__$1.y,other35138.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35137__$1.__extmap,other35138.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35135){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35148 = cljs.core.keyword_identical_QMARK_;
var expr__35149 = k__4388__auto__;
if(cljs.core.truth_((pred__35148.cljs$core$IFn$_invoke$arity$2 ? pred__35148.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35149) : pred__35148.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35149)))){
return (new shadow.dom.Coordinate(G__35135,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35148.cljs$core$IFn$_invoke$arity$2 ? pred__35148.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35149) : pred__35148.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35149)))){
return (new shadow.dom.Coordinate(self__.x,G__35135,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35135),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35135){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35135,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35139){
var extmap__4419__auto__ = (function (){var G__35187 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35139,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35139)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35187);
} else {
return G__35187;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35139),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35139),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35189,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35198 = k35189;
var G__35198__$1 = (((G__35198 instanceof cljs.core.Keyword))?G__35198.fqn:null);
switch (G__35198__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35189,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35201){
var vec__35202 = p__35201;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35202,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35202,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35188){
var self__ = this;
var G__35188__$1 = this;
return (new cljs.core.RecordIter((0),G__35188__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35190,other35191){
var self__ = this;
var this35190__$1 = this;
return (((!((other35191 == null)))) && ((this35190__$1.constructor === other35191.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35190__$1.w,other35191.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35190__$1.h,other35191.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35190__$1.__extmap,other35191.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35188){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35218 = cljs.core.keyword_identical_QMARK_;
var expr__35219 = k__4388__auto__;
if(cljs.core.truth_((pred__35218.cljs$core$IFn$_invoke$arity$2 ? pred__35218.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35219) : pred__35218.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35219)))){
return (new shadow.dom.Size(G__35188,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35218.cljs$core$IFn$_invoke$arity$2 ? pred__35218.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35219) : pred__35218.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35219)))){
return (new shadow.dom.Size(self__.w,G__35188,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35188),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35188){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35188,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35192){
var extmap__4419__auto__ = (function (){var G__35228 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35192,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35192)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35228);
} else {
return G__35228;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35192),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35192),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__35640 = (i + (1));
var G__35641 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35640;
ret = G__35641;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35241){
var vec__35242 = p__35241;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35246 = arguments.length;
switch (G__35246) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35643 = ps;
var G__35644 = (i + (1));
el__$1 = G__35643;
i = G__35644;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35247 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35250_35645 = cljs.core.seq(props);
var chunk__35251_35646 = null;
var count__35252_35647 = (0);
var i__35253_35648 = (0);
while(true){
if((i__35253_35648 < count__35252_35647)){
var vec__35274_35649 = chunk__35251_35646.cljs$core$IIndexed$_nth$arity$2(null,i__35253_35648);
var k_35650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35274_35649,(0),null);
var v_35651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35274_35649,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35650);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35650),v_35651);


var G__35652 = seq__35250_35645;
var G__35653 = chunk__35251_35646;
var G__35654 = count__35252_35647;
var G__35655 = (i__35253_35648 + (1));
seq__35250_35645 = G__35652;
chunk__35251_35646 = G__35653;
count__35252_35647 = G__35654;
i__35253_35648 = G__35655;
continue;
} else {
var temp__5735__auto___35656 = cljs.core.seq(seq__35250_35645);
if(temp__5735__auto___35656){
var seq__35250_35657__$1 = temp__5735__auto___35656;
if(cljs.core.chunked_seq_QMARK_(seq__35250_35657__$1)){
var c__4556__auto___35658 = cljs.core.chunk_first(seq__35250_35657__$1);
var G__35659 = cljs.core.chunk_rest(seq__35250_35657__$1);
var G__35660 = c__4556__auto___35658;
var G__35661 = cljs.core.count(c__4556__auto___35658);
var G__35662 = (0);
seq__35250_35645 = G__35659;
chunk__35251_35646 = G__35660;
count__35252_35647 = G__35661;
i__35253_35648 = G__35662;
continue;
} else {
var vec__35277_35663 = cljs.core.first(seq__35250_35657__$1);
var k_35664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35277_35663,(0),null);
var v_35665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35277_35663,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35664);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35664),v_35665);


var G__35666 = cljs.core.next(seq__35250_35657__$1);
var G__35667 = null;
var G__35668 = (0);
var G__35669 = (0);
seq__35250_35645 = G__35666;
chunk__35251_35646 = G__35667;
count__35252_35647 = G__35668;
i__35253_35648 = G__35669;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35281 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35281,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35281,(1),null);
var seq__35284_35670 = cljs.core.seq(node_children);
var chunk__35286_35671 = null;
var count__35287_35672 = (0);
var i__35288_35673 = (0);
while(true){
if((i__35288_35673 < count__35287_35672)){
var child_struct_35674 = chunk__35286_35671.cljs$core$IIndexed$_nth$arity$2(null,i__35288_35673);
if((!((child_struct_35674 == null)))){
if(typeof child_struct_35674 === 'string'){
var text_35675 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35675),child_struct_35674].join(''));
} else {
var children_35676 = shadow.dom.svg_node(child_struct_35674);
if(cljs.core.seq_QMARK_(children_35676)){
var seq__35302_35677 = cljs.core.seq(children_35676);
var chunk__35304_35678 = null;
var count__35305_35679 = (0);
var i__35306_35680 = (0);
while(true){
if((i__35306_35680 < count__35305_35679)){
var child_35681 = chunk__35304_35678.cljs$core$IIndexed$_nth$arity$2(null,i__35306_35680);
if(cljs.core.truth_(child_35681)){
node.appendChild(child_35681);


var G__35682 = seq__35302_35677;
var G__35683 = chunk__35304_35678;
var G__35684 = count__35305_35679;
var G__35685 = (i__35306_35680 + (1));
seq__35302_35677 = G__35682;
chunk__35304_35678 = G__35683;
count__35305_35679 = G__35684;
i__35306_35680 = G__35685;
continue;
} else {
var G__35686 = seq__35302_35677;
var G__35687 = chunk__35304_35678;
var G__35688 = count__35305_35679;
var G__35689 = (i__35306_35680 + (1));
seq__35302_35677 = G__35686;
chunk__35304_35678 = G__35687;
count__35305_35679 = G__35688;
i__35306_35680 = G__35689;
continue;
}
} else {
var temp__5735__auto___35690 = cljs.core.seq(seq__35302_35677);
if(temp__5735__auto___35690){
var seq__35302_35691__$1 = temp__5735__auto___35690;
if(cljs.core.chunked_seq_QMARK_(seq__35302_35691__$1)){
var c__4556__auto___35692 = cljs.core.chunk_first(seq__35302_35691__$1);
var G__35693 = cljs.core.chunk_rest(seq__35302_35691__$1);
var G__35694 = c__4556__auto___35692;
var G__35695 = cljs.core.count(c__4556__auto___35692);
var G__35696 = (0);
seq__35302_35677 = G__35693;
chunk__35304_35678 = G__35694;
count__35305_35679 = G__35695;
i__35306_35680 = G__35696;
continue;
} else {
var child_35697 = cljs.core.first(seq__35302_35691__$1);
if(cljs.core.truth_(child_35697)){
node.appendChild(child_35697);


var G__35698 = cljs.core.next(seq__35302_35691__$1);
var G__35699 = null;
var G__35700 = (0);
var G__35701 = (0);
seq__35302_35677 = G__35698;
chunk__35304_35678 = G__35699;
count__35305_35679 = G__35700;
i__35306_35680 = G__35701;
continue;
} else {
var G__35702 = cljs.core.next(seq__35302_35691__$1);
var G__35703 = null;
var G__35704 = (0);
var G__35705 = (0);
seq__35302_35677 = G__35702;
chunk__35304_35678 = G__35703;
count__35305_35679 = G__35704;
i__35306_35680 = G__35705;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35676);
}
}


var G__35706 = seq__35284_35670;
var G__35707 = chunk__35286_35671;
var G__35708 = count__35287_35672;
var G__35709 = (i__35288_35673 + (1));
seq__35284_35670 = G__35706;
chunk__35286_35671 = G__35707;
count__35287_35672 = G__35708;
i__35288_35673 = G__35709;
continue;
} else {
var G__35710 = seq__35284_35670;
var G__35711 = chunk__35286_35671;
var G__35712 = count__35287_35672;
var G__35713 = (i__35288_35673 + (1));
seq__35284_35670 = G__35710;
chunk__35286_35671 = G__35711;
count__35287_35672 = G__35712;
i__35288_35673 = G__35713;
continue;
}
} else {
var temp__5735__auto___35714 = cljs.core.seq(seq__35284_35670);
if(temp__5735__auto___35714){
var seq__35284_35715__$1 = temp__5735__auto___35714;
if(cljs.core.chunked_seq_QMARK_(seq__35284_35715__$1)){
var c__4556__auto___35716 = cljs.core.chunk_first(seq__35284_35715__$1);
var G__35717 = cljs.core.chunk_rest(seq__35284_35715__$1);
var G__35718 = c__4556__auto___35716;
var G__35719 = cljs.core.count(c__4556__auto___35716);
var G__35720 = (0);
seq__35284_35670 = G__35717;
chunk__35286_35671 = G__35718;
count__35287_35672 = G__35719;
i__35288_35673 = G__35720;
continue;
} else {
var child_struct_35721 = cljs.core.first(seq__35284_35715__$1);
if((!((child_struct_35721 == null)))){
if(typeof child_struct_35721 === 'string'){
var text_35722 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35722),child_struct_35721].join(''));
} else {
var children_35723 = shadow.dom.svg_node(child_struct_35721);
if(cljs.core.seq_QMARK_(children_35723)){
var seq__35308_35724 = cljs.core.seq(children_35723);
var chunk__35310_35725 = null;
var count__35311_35726 = (0);
var i__35312_35727 = (0);
while(true){
if((i__35312_35727 < count__35311_35726)){
var child_35728 = chunk__35310_35725.cljs$core$IIndexed$_nth$arity$2(null,i__35312_35727);
if(cljs.core.truth_(child_35728)){
node.appendChild(child_35728);


var G__35729 = seq__35308_35724;
var G__35730 = chunk__35310_35725;
var G__35731 = count__35311_35726;
var G__35732 = (i__35312_35727 + (1));
seq__35308_35724 = G__35729;
chunk__35310_35725 = G__35730;
count__35311_35726 = G__35731;
i__35312_35727 = G__35732;
continue;
} else {
var G__35733 = seq__35308_35724;
var G__35734 = chunk__35310_35725;
var G__35735 = count__35311_35726;
var G__35736 = (i__35312_35727 + (1));
seq__35308_35724 = G__35733;
chunk__35310_35725 = G__35734;
count__35311_35726 = G__35735;
i__35312_35727 = G__35736;
continue;
}
} else {
var temp__5735__auto___35737__$1 = cljs.core.seq(seq__35308_35724);
if(temp__5735__auto___35737__$1){
var seq__35308_35738__$1 = temp__5735__auto___35737__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35308_35738__$1)){
var c__4556__auto___35739 = cljs.core.chunk_first(seq__35308_35738__$1);
var G__35740 = cljs.core.chunk_rest(seq__35308_35738__$1);
var G__35741 = c__4556__auto___35739;
var G__35742 = cljs.core.count(c__4556__auto___35739);
var G__35743 = (0);
seq__35308_35724 = G__35740;
chunk__35310_35725 = G__35741;
count__35311_35726 = G__35742;
i__35312_35727 = G__35743;
continue;
} else {
var child_35744 = cljs.core.first(seq__35308_35738__$1);
if(cljs.core.truth_(child_35744)){
node.appendChild(child_35744);


var G__35745 = cljs.core.next(seq__35308_35738__$1);
var G__35746 = null;
var G__35747 = (0);
var G__35748 = (0);
seq__35308_35724 = G__35745;
chunk__35310_35725 = G__35746;
count__35311_35726 = G__35747;
i__35312_35727 = G__35748;
continue;
} else {
var G__35749 = cljs.core.next(seq__35308_35738__$1);
var G__35750 = null;
var G__35751 = (0);
var G__35752 = (0);
seq__35308_35724 = G__35749;
chunk__35310_35725 = G__35750;
count__35311_35726 = G__35751;
i__35312_35727 = G__35752;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35723);
}
}


var G__35753 = cljs.core.next(seq__35284_35715__$1);
var G__35754 = null;
var G__35755 = (0);
var G__35756 = (0);
seq__35284_35670 = G__35753;
chunk__35286_35671 = G__35754;
count__35287_35672 = G__35755;
i__35288_35673 = G__35756;
continue;
} else {
var G__35757 = cljs.core.next(seq__35284_35715__$1);
var G__35758 = null;
var G__35759 = (0);
var G__35760 = (0);
seq__35284_35670 = G__35757;
chunk__35286_35671 = G__35758;
count__35287_35672 = G__35759;
i__35288_35673 = G__35760;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35761 = arguments.length;
var i__4737__auto___35762 = (0);
while(true){
if((i__4737__auto___35762 < len__4736__auto___35761)){
args__4742__auto__.push((arguments[i__4737__auto___35762]));

var G__35763 = (i__4737__auto___35762 + (1));
i__4737__auto___35762 = G__35763;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35335){
var G__35336 = cljs.core.first(seq35335);
var seq35335__$1 = cljs.core.next(seq35335);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35336,seq35335__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35338 = arguments.length;
switch (G__35338) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__33164__auto___35765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_35343){
var state_val_35344 = (state_35343[(1)]);
if((state_val_35344 === (1))){
var state_35343__$1 = state_35343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35343__$1,(2),once_or_cleanup);
} else {
if((state_val_35344 === (2))){
var inst_35340 = (state_35343[(2)]);
var inst_35341 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35343__$1 = (function (){var statearr_35345 = state_35343;
(statearr_35345[(7)] = inst_35340);

return statearr_35345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35343__$1,inst_35341);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33133__auto__ = null;
var shadow$dom$state_machine__33133__auto____0 = (function (){
var statearr_35346 = [null,null,null,null,null,null,null,null];
(statearr_35346[(0)] = shadow$dom$state_machine__33133__auto__);

(statearr_35346[(1)] = (1));

return statearr_35346;
});
var shadow$dom$state_machine__33133__auto____1 = (function (state_35343){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_35343);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e35347){var ex__33136__auto__ = e35347;
var statearr_35348_35766 = state_35343;
(statearr_35348_35766[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_35343[(4)]))){
var statearr_35349_35767 = state_35343;
(statearr_35349_35767[(1)] = cljs.core.first((state_35343[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35768 = state_35343;
state_35343 = G__35768;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
shadow$dom$state_machine__33133__auto__ = function(state_35343){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33133__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33133__auto____1.call(this,state_35343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33133__auto____0;
shadow$dom$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33133__auto____1;
return shadow$dom$state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_35350 = f__33165__auto__();
(statearr_35350[(6)] = c__33164__auto___35765);

return statearr_35350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
