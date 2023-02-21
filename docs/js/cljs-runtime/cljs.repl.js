goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37930){
var map__37931 = p__37930;
var map__37931__$1 = (((((!((map__37931 == null))))?(((((map__37931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37931):map__37931);
var m = map__37931__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37931__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37931__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37933_38147 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37934_38148 = null;
var count__37935_38149 = (0);
var i__37936_38150 = (0);
while(true){
if((i__37936_38150 < count__37935_38149)){
var f_38151 = chunk__37934_38148.cljs$core$IIndexed$_nth$arity$2(null,i__37936_38150);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38151], 0));


var G__38152 = seq__37933_38147;
var G__38153 = chunk__37934_38148;
var G__38154 = count__37935_38149;
var G__38155 = (i__37936_38150 + (1));
seq__37933_38147 = G__38152;
chunk__37934_38148 = G__38153;
count__37935_38149 = G__38154;
i__37936_38150 = G__38155;
continue;
} else {
var temp__5735__auto___38156 = cljs.core.seq(seq__37933_38147);
if(temp__5735__auto___38156){
var seq__37933_38157__$1 = temp__5735__auto___38156;
if(cljs.core.chunked_seq_QMARK_(seq__37933_38157__$1)){
var c__4556__auto___38158 = cljs.core.chunk_first(seq__37933_38157__$1);
var G__38159 = cljs.core.chunk_rest(seq__37933_38157__$1);
var G__38160 = c__4556__auto___38158;
var G__38161 = cljs.core.count(c__4556__auto___38158);
var G__38162 = (0);
seq__37933_38147 = G__38159;
chunk__37934_38148 = G__38160;
count__37935_38149 = G__38161;
i__37936_38150 = G__38162;
continue;
} else {
var f_38163 = cljs.core.first(seq__37933_38157__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38163], 0));


var G__38164 = cljs.core.next(seq__37933_38157__$1);
var G__38165 = null;
var G__38166 = (0);
var G__38167 = (0);
seq__37933_38147 = G__38164;
chunk__37934_38148 = G__38165;
count__37935_38149 = G__38166;
i__37936_38150 = G__38167;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38168 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38168], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38168)))?cljs.core.second(arglists_38168):arglists_38168)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37937_38169 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37938_38170 = null;
var count__37939_38171 = (0);
var i__37940_38172 = (0);
while(true){
if((i__37940_38172 < count__37939_38171)){
var vec__37951_38173 = chunk__37938_38170.cljs$core$IIndexed$_nth$arity$2(null,i__37940_38172);
var name_38174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37951_38173,(0),null);
var map__37954_38175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37951_38173,(1),null);
var map__37954_38176__$1 = (((((!((map__37954_38175 == null))))?(((((map__37954_38175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37954_38175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37954_38175):map__37954_38175);
var doc_38177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37954_38176__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37954_38176__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38174], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38178], 0));

if(cljs.core.truth_(doc_38177)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38177], 0));
} else {
}


var G__38179 = seq__37937_38169;
var G__38180 = chunk__37938_38170;
var G__38181 = count__37939_38171;
var G__38182 = (i__37940_38172 + (1));
seq__37937_38169 = G__38179;
chunk__37938_38170 = G__38180;
count__37939_38171 = G__38181;
i__37940_38172 = G__38182;
continue;
} else {
var temp__5735__auto___38183 = cljs.core.seq(seq__37937_38169);
if(temp__5735__auto___38183){
var seq__37937_38184__$1 = temp__5735__auto___38183;
if(cljs.core.chunked_seq_QMARK_(seq__37937_38184__$1)){
var c__4556__auto___38185 = cljs.core.chunk_first(seq__37937_38184__$1);
var G__38186 = cljs.core.chunk_rest(seq__37937_38184__$1);
var G__38187 = c__4556__auto___38185;
var G__38188 = cljs.core.count(c__4556__auto___38185);
var G__38189 = (0);
seq__37937_38169 = G__38186;
chunk__37938_38170 = G__38187;
count__37939_38171 = G__38188;
i__37940_38172 = G__38189;
continue;
} else {
var vec__37956_38190 = cljs.core.first(seq__37937_38184__$1);
var name_38191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37956_38190,(0),null);
var map__37959_38192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37956_38190,(1),null);
var map__37959_38193__$1 = (((((!((map__37959_38192 == null))))?(((((map__37959_38192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37959_38192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37959_38192):map__37959_38192);
var doc_38194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37959_38193__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37959_38193__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38191], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38195], 0));

if(cljs.core.truth_(doc_38194)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38194], 0));
} else {
}


var G__38196 = cljs.core.next(seq__37937_38184__$1);
var G__38197 = null;
var G__38198 = (0);
var G__38199 = (0);
seq__37937_38169 = G__38196;
chunk__37938_38170 = G__38197;
count__37939_38171 = G__38198;
i__37940_38172 = G__38199;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37990 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37991 = null;
var count__37992 = (0);
var i__37993 = (0);
while(true){
if((i__37993 < count__37992)){
var role = chunk__37991.cljs$core$IIndexed$_nth$arity$2(null,i__37993);
var temp__5735__auto___38200__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38200__$1)){
var spec_38201 = temp__5735__auto___38200__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38201)], 0));
} else {
}


var G__38202 = seq__37990;
var G__38203 = chunk__37991;
var G__38204 = count__37992;
var G__38205 = (i__37993 + (1));
seq__37990 = G__38202;
chunk__37991 = G__38203;
count__37992 = G__38204;
i__37993 = G__38205;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37990);
if(temp__5735__auto____$1){
var seq__37990__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37990__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37990__$1);
var G__38206 = cljs.core.chunk_rest(seq__37990__$1);
var G__38207 = c__4556__auto__;
var G__38208 = cljs.core.count(c__4556__auto__);
var G__38209 = (0);
seq__37990 = G__38206;
chunk__37991 = G__38207;
count__37992 = G__38208;
i__37993 = G__38209;
continue;
} else {
var role = cljs.core.first(seq__37990__$1);
var temp__5735__auto___38210__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38210__$2)){
var spec_38211 = temp__5735__auto___38210__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38211)], 0));
} else {
}


var G__38212 = cljs.core.next(seq__37990__$1);
var G__38213 = null;
var G__38214 = (0);
var G__38215 = (0);
seq__37990 = G__38212;
chunk__37991 = G__38213;
count__37992 = G__38214;
i__37993 = G__38215;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38226 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38227 = cljs.core.ex_cause(t);
via = G__38226;
t = G__38227;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37996 = datafied_throwable;
var map__37996__$1 = (((((!((map__37996 == null))))?(((((map__37996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37996):map__37996);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37996__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37996__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37996__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37997 = cljs.core.last(via);
var map__37997__$1 = (((((!((map__37997 == null))))?(((((map__37997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37997):map__37997);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37997__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37997__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37997__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37998 = data;
var map__37998__$1 = (((((!((map__37998 == null))))?(((((map__37998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37998):map__37998);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37999 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37999__$1 = (((((!((map__37999 == null))))?(((((map__37999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37999):map__37999);
var top_data = map__37999__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38004 = phase;
var G__38004__$1 = (((G__38004 instanceof cljs.core.Keyword))?G__38004.fqn:null);
switch (G__38004__$1) {
case "read-source":
var map__38005 = data;
var map__38005__$1 = (((((!((map__38005 == null))))?(((((map__38005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38005):map__38005);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38005__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38005__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38007 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38007__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38007,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38007);
var G__38007__$2 = (cljs.core.truth_((function (){var fexpr__38008 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38008.cljs$core$IFn$_invoke$arity$1 ? fexpr__38008.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38008.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38007__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38007__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38007__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38007__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38009 = top_data;
var G__38009__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38009,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38009);
var G__38009__$2 = (cljs.core.truth_((function (){var fexpr__38010 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38010.cljs$core$IFn$_invoke$arity$1 ? fexpr__38010.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38010.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38009__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38009__$1);
var G__38009__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38009__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38009__$2);
var G__38009__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38009__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38009__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38009__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38009__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38011 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38011,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38011,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38011,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38011,(3),null);
var G__38014 = top_data;
var G__38014__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38014,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38014);
var G__38014__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38014__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38014__$1);
var G__38014__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38014__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38014__$2);
var G__38014__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38014__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38014__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38014__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38014__$4;
}

break;
case "execution":
var vec__38015 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38015,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38015,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38015,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38015,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37995_SHARP_){
var or__4126__auto__ = (p1__37995_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38019 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38019.cljs$core$IFn$_invoke$arity$1 ? fexpr__38019.cljs$core$IFn$_invoke$arity$1(p1__37995_SHARP_) : fexpr__38019.call(null,p1__37995_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38104 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38104__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38104,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38104);
var G__38104__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38104__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38104__$1);
var G__38104__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38104__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38104__$2);
var G__38104__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38104__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38104__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38104__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38104__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38004__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38107){
var map__38108 = p__38107;
var map__38108__$1 = (((((!((map__38108 == null))))?(((((map__38108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38108):map__38108);
var triage_data = map__38108__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38110 = phase;
var G__38110__$1 = (((G__38110 instanceof cljs.core.Keyword))?G__38110.fqn:null);
switch (G__38110__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38111 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38112 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38113 = loc;
var G__38114 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38115_38230 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38116_38231 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38117_38232 = true;
var _STAR_print_fn_STAR__temp_val__38118_38233 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38117_38232);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38118_38233);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38105_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38105_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38116_38231);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38115_38230);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38111,G__38112,G__38113,G__38114) : format.call(null,G__38111,G__38112,G__38113,G__38114));

break;
case "macroexpansion":
var G__38119 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38120 = cause_type;
var G__38121 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38122 = loc;
var G__38123 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38119,G__38120,G__38121,G__38122,G__38123) : format.call(null,G__38119,G__38120,G__38121,G__38122,G__38123));

break;
case "compile-syntax-check":
var G__38124 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38125 = cause_type;
var G__38126 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38127 = loc;
var G__38128 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38124,G__38125,G__38126,G__38127,G__38128) : format.call(null,G__38124,G__38125,G__38126,G__38127,G__38128));

break;
case "compilation":
var G__38129 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38130 = cause_type;
var G__38131 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38132 = loc;
var G__38133 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38129,G__38130,G__38131,G__38132,G__38133) : format.call(null,G__38129,G__38130,G__38131,G__38132,G__38133));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38134 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38135 = symbol;
var G__38136 = loc;
var G__38137 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38138_38234 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38139_38235 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38140_38236 = true;
var _STAR_print_fn_STAR__temp_val__38141_38237 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38140_38236);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38141_38237);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38106_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38106_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38139_38235);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38138_38234);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38134,G__38135,G__38136,G__38137) : format.call(null,G__38134,G__38135,G__38136,G__38137));
} else {
var G__38142 = "Execution error%s at %s(%s).\n%s\n";
var G__38143 = cause_type;
var G__38144 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38145 = loc;
var G__38146 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38142,G__38143,G__38144,G__38145,G__38146) : format.call(null,G__38142,G__38143,G__38144,G__38145,G__38146));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38110__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
