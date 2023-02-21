goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33226 = arguments.length;
switch (G__33226) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33227 = (function (f,blockable,meta33228){
this.f = f;
this.blockable = blockable;
this.meta33228 = meta33228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33229,meta33228__$1){
var self__ = this;
var _33229__$1 = this;
return (new cljs.core.async.t_cljs$core$async33227(self__.f,self__.blockable,meta33228__$1));
}));

(cljs.core.async.t_cljs$core$async33227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33229){
var self__ = this;
var _33229__$1 = this;
return self__.meta33228;
}));

(cljs.core.async.t_cljs$core$async33227.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33227.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33228","meta33228",-520453793,null)], null);
}));

(cljs.core.async.t_cljs$core$async33227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33227");

(cljs.core.async.t_cljs$core$async33227.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33227.
 */
cljs.core.async.__GT_t_cljs$core$async33227 = (function cljs$core$async$__GT_t_cljs$core$async33227(f__$1,blockable__$1,meta33228){
return (new cljs.core.async.t_cljs$core$async33227(f__$1,blockable__$1,meta33228));
});

}

return (new cljs.core.async.t_cljs$core$async33227(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33232 = arguments.length;
switch (G__33232) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33234 = arguments.length;
switch (G__33234) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33236 = arguments.length;
switch (G__33236) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34696 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34696) : fn1.call(null,val_34696));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34696) : fn1.call(null,val_34696));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33238 = arguments.length;
switch (G__33238) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___34698 = n;
var x_34699 = (0);
while(true){
if((x_34699 < n__4613__auto___34698)){
(a[x_34699] = x_34699);

var G__34700 = (x_34699 + (1));
x_34699 = G__34700;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33239 = (function (flag,meta33240){
this.flag = flag;
this.meta33240 = meta33240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33241,meta33240__$1){
var self__ = this;
var _33241__$1 = this;
return (new cljs.core.async.t_cljs$core$async33239(self__.flag,meta33240__$1));
}));

(cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33241){
var self__ = this;
var _33241__$1 = this;
return self__.meta33240;
}));

(cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33240","meta33240",1950710290,null)], null);
}));

(cljs.core.async.t_cljs$core$async33239.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33239");

(cljs.core.async.t_cljs$core$async33239.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33239");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33239.
 */
cljs.core.async.__GT_t_cljs$core$async33239 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33239(flag__$1,meta33240){
return (new cljs.core.async.t_cljs$core$async33239(flag__$1,meta33240));
});

}

return (new cljs.core.async.t_cljs$core$async33239(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33242 = (function (flag,cb,meta33243){
this.flag = flag;
this.cb = cb;
this.meta33243 = meta33243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33244,meta33243__$1){
var self__ = this;
var _33244__$1 = this;
return (new cljs.core.async.t_cljs$core$async33242(self__.flag,self__.cb,meta33243__$1));
}));

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33244){
var self__ = this;
var _33244__$1 = this;
return self__.meta33243;
}));

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33243","meta33243",732534308,null)], null);
}));

(cljs.core.async.t_cljs$core$async33242.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33242");

(cljs.core.async.t_cljs$core$async33242.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33242");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33242.
 */
cljs.core.async.__GT_t_cljs$core$async33242 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33242(flag__$1,cb__$1,meta33243){
return (new cljs.core.async.t_cljs$core$async33242(flag__$1,cb__$1,meta33243));
});

}

return (new cljs.core.async.t_cljs$core$async33242(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33245_SHARP_){
var G__33247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33245_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33247) : fret.call(null,G__33247));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33246_SHARP_){
var G__33248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33246_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33248) : fret.call(null,G__33248));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34701 = (i + (1));
i = G__34701;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34702 = arguments.length;
var i__4737__auto___34703 = (0);
while(true){
if((i__4737__auto___34703 < len__4736__auto___34702)){
args__4742__auto__.push((arguments[i__4737__auto___34703]));

var G__34704 = (i__4737__auto___34703 + (1));
i__4737__auto___34703 = G__34704;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33251){
var map__33252 = p__33251;
var map__33252__$1 = (((((!((map__33252 == null))))?(((((map__33252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33252):map__33252);
var opts = map__33252__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33249){
var G__33250 = cljs.core.first(seq33249);
var seq33249__$1 = cljs.core.next(seq33249);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33250,seq33249__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33255 = arguments.length;
switch (G__33255) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33164__auto___34706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_33279){
var state_val_33280 = (state_33279[(1)]);
if((state_val_33280 === (7))){
var inst_33275 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33281_34707 = state_33279__$1;
(statearr_33281_34707[(2)] = inst_33275);

(statearr_33281_34707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (1))){
var state_33279__$1 = state_33279;
var statearr_33282_34708 = state_33279__$1;
(statearr_33282_34708[(2)] = null);

(statearr_33282_34708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (4))){
var inst_33258 = (state_33279[(7)]);
var inst_33258__$1 = (state_33279[(2)]);
var inst_33259 = (inst_33258__$1 == null);
var state_33279__$1 = (function (){var statearr_33283 = state_33279;
(statearr_33283[(7)] = inst_33258__$1);

return statearr_33283;
})();
if(cljs.core.truth_(inst_33259)){
var statearr_33284_34709 = state_33279__$1;
(statearr_33284_34709[(1)] = (5));

} else {
var statearr_33285_34710 = state_33279__$1;
(statearr_33285_34710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (13))){
var state_33279__$1 = state_33279;
var statearr_33286_34711 = state_33279__$1;
(statearr_33286_34711[(2)] = null);

(statearr_33286_34711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (6))){
var inst_33258 = (state_33279[(7)]);
var state_33279__$1 = state_33279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33279__$1,(11),to,inst_33258);
} else {
if((state_val_33280 === (3))){
var inst_33277 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33279__$1,inst_33277);
} else {
if((state_val_33280 === (12))){
var state_33279__$1 = state_33279;
var statearr_33287_34712 = state_33279__$1;
(statearr_33287_34712[(2)] = null);

(statearr_33287_34712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (2))){
var state_33279__$1 = state_33279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33279__$1,(4),from);
} else {
if((state_val_33280 === (11))){
var inst_33268 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
if(cljs.core.truth_(inst_33268)){
var statearr_33288_34713 = state_33279__$1;
(statearr_33288_34713[(1)] = (12));

} else {
var statearr_33289_34714 = state_33279__$1;
(statearr_33289_34714[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (9))){
var state_33279__$1 = state_33279;
var statearr_33290_34715 = state_33279__$1;
(statearr_33290_34715[(2)] = null);

(statearr_33290_34715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (5))){
var state_33279__$1 = state_33279;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33291_34716 = state_33279__$1;
(statearr_33291_34716[(1)] = (8));

} else {
var statearr_33292_34717 = state_33279__$1;
(statearr_33292_34717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (14))){
var inst_33273 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33293_34718 = state_33279__$1;
(statearr_33293_34718[(2)] = inst_33273);

(statearr_33293_34718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (10))){
var inst_33265 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33294_34719 = state_33279__$1;
(statearr_33294_34719[(2)] = inst_33265);

(statearr_33294_34719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (8))){
var inst_33262 = cljs.core.async.close_BANG_(to);
var state_33279__$1 = state_33279;
var statearr_33295_34720 = state_33279__$1;
(statearr_33295_34720[(2)] = inst_33262);

(statearr_33295_34720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_33296 = [null,null,null,null,null,null,null,null];
(statearr_33296[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_33296[(1)] = (1));

return statearr_33296;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_33279){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33279);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33297){var ex__33136__auto__ = e33297;
var statearr_33298_34721 = state_33279;
(statearr_33298_34721[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33279[(4)]))){
var statearr_33299_34722 = state_33279;
(statearr_33299_34722[(1)] = cljs.core.first((state_33279[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34723 = state_33279;
state_33279 = G__34723;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_33279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_33279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_33300 = f__33165__auto__();
(statearr_33300[(6)] = c__33164__auto___34706);

return statearr_33300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33301){
var vec__33302 = p__33301;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33302,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33302,(1),null);
var job = vec__33302;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33164__auto___34724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_33309){
var state_val_33310 = (state_33309[(1)]);
if((state_val_33310 === (1))){
var state_33309__$1 = state_33309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33309__$1,(2),res,v);
} else {
if((state_val_33310 === (2))){
var inst_33306 = (state_33309[(2)]);
var inst_33307 = cljs.core.async.close_BANG_(res);
var state_33309__$1 = (function (){var statearr_33311 = state_33309;
(statearr_33311[(7)] = inst_33306);

return statearr_33311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33309__$1,inst_33307);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0 = (function (){
var statearr_33312 = [null,null,null,null,null,null,null,null];
(statearr_33312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__);

(statearr_33312[(1)] = (1));

return statearr_33312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1 = (function (state_33309){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33309);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33313){var ex__33136__auto__ = e33313;
var statearr_33314_34746 = state_33309;
(statearr_33314_34746[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33309[(4)]))){
var statearr_33315_34747 = state_33309;
(statearr_33315_34747[(1)] = cljs.core.first((state_33309[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34748 = state_33309;
state_33309 = G__34748;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = function(state_33309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1.call(this,state_33309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_33316 = f__33165__auto__();
(statearr_33316[(6)] = c__33164__auto___34724);

return statearr_33316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33317){
var vec__33318 = p__33317;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33318,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33318,(1),null);
var job = vec__33318;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___34749 = n;
var __34750 = (0);
while(true){
if((__34750 < n__4613__auto___34749)){
var G__33321_34751 = type;
var G__33321_34752__$1 = (((G__33321_34751 instanceof cljs.core.Keyword))?G__33321_34751.fqn:null);
switch (G__33321_34752__$1) {
case "compute":
var c__33164__auto___34754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34750,c__33164__auto___34754,G__33321_34751,G__33321_34752__$1,n__4613__auto___34749,jobs,results,process,async){
return (function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = ((function (__34750,c__33164__auto___34754,G__33321_34751,G__33321_34752__$1,n__4613__auto___34749,jobs,results,process,async){
return (function (state_33334){
var state_val_33335 = (state_33334[(1)]);
if((state_val_33335 === (1))){
var state_33334__$1 = state_33334;
var statearr_33336_34755 = state_33334__$1;
(statearr_33336_34755[(2)] = null);

(statearr_33336_34755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (2))){
var state_33334__$1 = state_33334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33334__$1,(4),jobs);
} else {
if((state_val_33335 === (3))){
var inst_33332 = (state_33334[(2)]);
var state_33334__$1 = state_33334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33334__$1,inst_33332);
} else {
if((state_val_33335 === (4))){
var inst_33324 = (state_33334[(2)]);
var inst_33325 = process(inst_33324);
var state_33334__$1 = state_33334;
if(cljs.core.truth_(inst_33325)){
var statearr_33337_34756 = state_33334__$1;
(statearr_33337_34756[(1)] = (5));

} else {
var statearr_33338_34757 = state_33334__$1;
(statearr_33338_34757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (5))){
var state_33334__$1 = state_33334;
var statearr_33339_34758 = state_33334__$1;
(statearr_33339_34758[(2)] = null);

(statearr_33339_34758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (6))){
var state_33334__$1 = state_33334;
var statearr_33340_34759 = state_33334__$1;
(statearr_33340_34759[(2)] = null);

(statearr_33340_34759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (7))){
var inst_33330 = (state_33334[(2)]);
var state_33334__$1 = state_33334;
var statearr_33341_34760 = state_33334__$1;
(statearr_33341_34760[(2)] = inst_33330);

(statearr_33341_34760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34750,c__33164__auto___34754,G__33321_34751,G__33321_34752__$1,n__4613__auto___34749,jobs,results,process,async))
;
return ((function (__34750,switch__33132__auto__,c__33164__auto___34754,G__33321_34751,G__33321_34752__$1,n__4613__auto___34749,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0 = (function (){
var statearr_33342 = [null,null,null,null,null,null,null];
(statearr_33342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__);

(statearr_33342[(1)] = (1));

return statearr_33342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1 = (function (state_33334){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33334);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33343){var ex__33136__auto__ = e33343;
var statearr_33344_34761 = state_33334;
(statearr_33344_34761[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33334[(4)]))){
var statearr_33345_34762 = state_33334;
(statearr_33345_34762[(1)] = cljs.core.first((state_33334[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34763 = state_33334;
state_33334 = G__34763;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = function(state_33334){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1.call(this,state_33334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__;
})()
;})(__34750,switch__33132__auto__,c__33164__auto___34754,G__33321_34751,G__33321_34752__$1,n__4613__auto___34749,jobs,results,process,async))
})();
var state__33166__auto__ = (function (){var statearr_33346 = f__33165__auto__();
(statearr_33346[(6)] = c__33164__auto___34754);

return statearr_33346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
});})(__34750,c__33164__auto___34754,G__33321_34751,G__33321_34752__$1,n__4613__auto___34749,jobs,results,process,async))
);


break;
case "async":
var c__33164__auto___34764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34750,c__33164__auto___34764,G__33321_34751,G__33321_34752__$1,n__4613__auto___34749,jobs,results,process,async){
return (function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = ((function (__34750,c__33164__auto___34764,G__33321_34751,G__33321_34752__$1,n__4613__auto___34749,jobs,results,process,async){
return (function (state_33359){
var state_val_33360 = (state_33359[(1)]);
if((state_val_33360 === (1))){
var state_33359__$1 = state_33359;
var statearr_33361_34765 = state_33359__$1;
(statearr_33361_34765[(2)] = null);

(statearr_33361_34765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (2))){
var state_33359__$1 = state_33359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33359__$1,(4),jobs);
} else {
if((state_val_33360 === (3))){
var inst_33357 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33359__$1,inst_33357);
} else {
if((state_val_33360 === (4))){
var inst_33349 = (state_33359[(2)]);
var inst_33350 = async(inst_33349);
var state_33359__$1 = state_33359;
if(cljs.core.truth_(inst_33350)){
var statearr_33362_34766 = state_33359__$1;
(statearr_33362_34766[(1)] = (5));

} else {
var statearr_33363_34767 = state_33359__$1;
(statearr_33363_34767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (5))){
var state_33359__$1 = state_33359;
var statearr_33364_34768 = state_33359__$1;
(statearr_33364_34768[(2)] = null);

(statearr_33364_34768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (6))){
var state_33359__$1 = state_33359;
var statearr_33365_34769 = state_33359__$1;
(statearr_33365_34769[(2)] = null);

(statearr_33365_34769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (7))){
var inst_33355 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
var statearr_33366_34770 = state_33359__$1;
(statearr_33366_34770[(2)] = inst_33355);

(statearr_33366_34770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34750,c__33164__auto___34764,G__33321_34751,G__33321_34752__$1,n__4613__auto___34749,jobs,results,process,async))
;
return ((function (__34750,switch__33132__auto__,c__33164__auto___34764,G__33321_34751,G__33321_34752__$1,n__4613__auto___34749,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0 = (function (){
var statearr_33367 = [null,null,null,null,null,null,null];
(statearr_33367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__);

(statearr_33367[(1)] = (1));

return statearr_33367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1 = (function (state_33359){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33359);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33368){var ex__33136__auto__ = e33368;
var statearr_33369_34771 = state_33359;
(statearr_33369_34771[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33359[(4)]))){
var statearr_33370_34772 = state_33359;
(statearr_33370_34772[(1)] = cljs.core.first((state_33359[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34773 = state_33359;
state_33359 = G__34773;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = function(state_33359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1.call(this,state_33359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__;
})()
;})(__34750,switch__33132__auto__,c__33164__auto___34764,G__33321_34751,G__33321_34752__$1,n__4613__auto___34749,jobs,results,process,async))
})();
var state__33166__auto__ = (function (){var statearr_33371 = f__33165__auto__();
(statearr_33371[(6)] = c__33164__auto___34764);

return statearr_33371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
});})(__34750,c__33164__auto___34764,G__33321_34751,G__33321_34752__$1,n__4613__auto___34749,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33321_34752__$1)].join('')));

}

var G__34774 = (__34750 + (1));
__34750 = G__34774;
continue;
} else {
}
break;
}

var c__33164__auto___34775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_33393){
var state_val_33394 = (state_33393[(1)]);
if((state_val_33394 === (7))){
var inst_33389 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
var statearr_33395_34776 = state_33393__$1;
(statearr_33395_34776[(2)] = inst_33389);

(statearr_33395_34776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (1))){
var state_33393__$1 = state_33393;
var statearr_33396_34777 = state_33393__$1;
(statearr_33396_34777[(2)] = null);

(statearr_33396_34777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (4))){
var inst_33374 = (state_33393[(7)]);
var inst_33374__$1 = (state_33393[(2)]);
var inst_33375 = (inst_33374__$1 == null);
var state_33393__$1 = (function (){var statearr_33397 = state_33393;
(statearr_33397[(7)] = inst_33374__$1);

return statearr_33397;
})();
if(cljs.core.truth_(inst_33375)){
var statearr_33398_34778 = state_33393__$1;
(statearr_33398_34778[(1)] = (5));

} else {
var statearr_33399_34779 = state_33393__$1;
(statearr_33399_34779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (6))){
var inst_33379 = (state_33393[(8)]);
var inst_33374 = (state_33393[(7)]);
var inst_33379__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33380 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33381 = [inst_33374,inst_33379__$1];
var inst_33382 = (new cljs.core.PersistentVector(null,2,(5),inst_33380,inst_33381,null));
var state_33393__$1 = (function (){var statearr_33400 = state_33393;
(statearr_33400[(8)] = inst_33379__$1);

return statearr_33400;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33393__$1,(8),jobs,inst_33382);
} else {
if((state_val_33394 === (3))){
var inst_33391 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33393__$1,inst_33391);
} else {
if((state_val_33394 === (2))){
var state_33393__$1 = state_33393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33393__$1,(4),from);
} else {
if((state_val_33394 === (9))){
var inst_33386 = (state_33393[(2)]);
var state_33393__$1 = (function (){var statearr_33401 = state_33393;
(statearr_33401[(9)] = inst_33386);

return statearr_33401;
})();
var statearr_33402_34780 = state_33393__$1;
(statearr_33402_34780[(2)] = null);

(statearr_33402_34780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (5))){
var inst_33377 = cljs.core.async.close_BANG_(jobs);
var state_33393__$1 = state_33393;
var statearr_33403_34781 = state_33393__$1;
(statearr_33403_34781[(2)] = inst_33377);

(statearr_33403_34781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (8))){
var inst_33379 = (state_33393[(8)]);
var inst_33384 = (state_33393[(2)]);
var state_33393__$1 = (function (){var statearr_33404 = state_33393;
(statearr_33404[(10)] = inst_33384);

return statearr_33404;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33393__$1,(9),results,inst_33379);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0 = (function (){
var statearr_33405 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33405[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__);

(statearr_33405[(1)] = (1));

return statearr_33405;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1 = (function (state_33393){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33393);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33406){var ex__33136__auto__ = e33406;
var statearr_33407_34782 = state_33393;
(statearr_33407_34782[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33393[(4)]))){
var statearr_33408_34783 = state_33393;
(statearr_33408_34783[(1)] = cljs.core.first((state_33393[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34784 = state_33393;
state_33393 = G__34784;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = function(state_33393){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1.call(this,state_33393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_33409 = f__33165__auto__();
(statearr_33409[(6)] = c__33164__auto___34775);

return statearr_33409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


var c__33164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_33447){
var state_val_33448 = (state_33447[(1)]);
if((state_val_33448 === (7))){
var inst_33443 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33449_34785 = state_33447__$1;
(statearr_33449_34785[(2)] = inst_33443);

(statearr_33449_34785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (20))){
var state_33447__$1 = state_33447;
var statearr_33450_34786 = state_33447__$1;
(statearr_33450_34786[(2)] = null);

(statearr_33450_34786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (1))){
var state_33447__$1 = state_33447;
var statearr_33451_34787 = state_33447__$1;
(statearr_33451_34787[(2)] = null);

(statearr_33451_34787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (4))){
var inst_33412 = (state_33447[(7)]);
var inst_33412__$1 = (state_33447[(2)]);
var inst_33413 = (inst_33412__$1 == null);
var state_33447__$1 = (function (){var statearr_33452 = state_33447;
(statearr_33452[(7)] = inst_33412__$1);

return statearr_33452;
})();
if(cljs.core.truth_(inst_33413)){
var statearr_33453_34788 = state_33447__$1;
(statearr_33453_34788[(1)] = (5));

} else {
var statearr_33454_34789 = state_33447__$1;
(statearr_33454_34789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (15))){
var inst_33425 = (state_33447[(8)]);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33447__$1,(18),to,inst_33425);
} else {
if((state_val_33448 === (21))){
var inst_33438 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33455_34790 = state_33447__$1;
(statearr_33455_34790[(2)] = inst_33438);

(statearr_33455_34790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (13))){
var inst_33440 = (state_33447[(2)]);
var state_33447__$1 = (function (){var statearr_33456 = state_33447;
(statearr_33456[(9)] = inst_33440);

return statearr_33456;
})();
var statearr_33457_34791 = state_33447__$1;
(statearr_33457_34791[(2)] = null);

(statearr_33457_34791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (6))){
var inst_33412 = (state_33447[(7)]);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33447__$1,(11),inst_33412);
} else {
if((state_val_33448 === (17))){
var inst_33433 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
if(cljs.core.truth_(inst_33433)){
var statearr_33458_34792 = state_33447__$1;
(statearr_33458_34792[(1)] = (19));

} else {
var statearr_33459_34793 = state_33447__$1;
(statearr_33459_34793[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (3))){
var inst_33445 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33447__$1,inst_33445);
} else {
if((state_val_33448 === (12))){
var inst_33422 = (state_33447[(10)]);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33447__$1,(14),inst_33422);
} else {
if((state_val_33448 === (2))){
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33447__$1,(4),results);
} else {
if((state_val_33448 === (19))){
var state_33447__$1 = state_33447;
var statearr_33460_34794 = state_33447__$1;
(statearr_33460_34794[(2)] = null);

(statearr_33460_34794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (11))){
var inst_33422 = (state_33447[(2)]);
var state_33447__$1 = (function (){var statearr_33461 = state_33447;
(statearr_33461[(10)] = inst_33422);

return statearr_33461;
})();
var statearr_33462_34795 = state_33447__$1;
(statearr_33462_34795[(2)] = null);

(statearr_33462_34795[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (9))){
var state_33447__$1 = state_33447;
var statearr_33463_34796 = state_33447__$1;
(statearr_33463_34796[(2)] = null);

(statearr_33463_34796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (5))){
var state_33447__$1 = state_33447;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33464_34797 = state_33447__$1;
(statearr_33464_34797[(1)] = (8));

} else {
var statearr_33465_34798 = state_33447__$1;
(statearr_33465_34798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (14))){
var inst_33425 = (state_33447[(8)]);
var inst_33425__$1 = (state_33447[(2)]);
var inst_33426 = (inst_33425__$1 == null);
var inst_33427 = cljs.core.not(inst_33426);
var state_33447__$1 = (function (){var statearr_33466 = state_33447;
(statearr_33466[(8)] = inst_33425__$1);

return statearr_33466;
})();
if(inst_33427){
var statearr_33467_34799 = state_33447__$1;
(statearr_33467_34799[(1)] = (15));

} else {
var statearr_33468_34800 = state_33447__$1;
(statearr_33468_34800[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (16))){
var state_33447__$1 = state_33447;
var statearr_33469_34801 = state_33447__$1;
(statearr_33469_34801[(2)] = false);

(statearr_33469_34801[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (10))){
var inst_33419 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33470_34802 = state_33447__$1;
(statearr_33470_34802[(2)] = inst_33419);

(statearr_33470_34802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (18))){
var inst_33430 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33471_34803 = state_33447__$1;
(statearr_33471_34803[(2)] = inst_33430);

(statearr_33471_34803[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (8))){
var inst_33416 = cljs.core.async.close_BANG_(to);
var state_33447__$1 = state_33447;
var statearr_33472_34804 = state_33447__$1;
(statearr_33472_34804[(2)] = inst_33416);

(statearr_33472_34804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0 = (function (){
var statearr_33473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__);

(statearr_33473[(1)] = (1));

return statearr_33473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1 = (function (state_33447){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33447);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33474){var ex__33136__auto__ = e33474;
var statearr_33475_34805 = state_33447;
(statearr_33475_34805[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33447[(4)]))){
var statearr_33476_34806 = state_33447;
(statearr_33476_34806[(1)] = cljs.core.first((state_33447[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34807 = state_33447;
state_33447 = G__34807;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = function(state_33447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1.call(this,state_33447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_33477 = f__33165__auto__();
(statearr_33477[(6)] = c__33164__auto__);

return statearr_33477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));

return c__33164__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33479 = arguments.length;
switch (G__33479) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33481 = arguments.length;
switch (G__33481) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33483 = arguments.length;
switch (G__33483) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33164__auto___34824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_33509){
var state_val_33510 = (state_33509[(1)]);
if((state_val_33510 === (7))){
var inst_33505 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33511_34825 = state_33509__$1;
(statearr_33511_34825[(2)] = inst_33505);

(statearr_33511_34825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (1))){
var state_33509__$1 = state_33509;
var statearr_33512_34826 = state_33509__$1;
(statearr_33512_34826[(2)] = null);

(statearr_33512_34826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (4))){
var inst_33486 = (state_33509[(7)]);
var inst_33486__$1 = (state_33509[(2)]);
var inst_33487 = (inst_33486__$1 == null);
var state_33509__$1 = (function (){var statearr_33513 = state_33509;
(statearr_33513[(7)] = inst_33486__$1);

return statearr_33513;
})();
if(cljs.core.truth_(inst_33487)){
var statearr_33514_34827 = state_33509__$1;
(statearr_33514_34827[(1)] = (5));

} else {
var statearr_33515_34828 = state_33509__$1;
(statearr_33515_34828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (13))){
var state_33509__$1 = state_33509;
var statearr_33516_34829 = state_33509__$1;
(statearr_33516_34829[(2)] = null);

(statearr_33516_34829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (6))){
var inst_33486 = (state_33509[(7)]);
var inst_33492 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33486) : p.call(null,inst_33486));
var state_33509__$1 = state_33509;
if(cljs.core.truth_(inst_33492)){
var statearr_33517_34830 = state_33509__$1;
(statearr_33517_34830[(1)] = (9));

} else {
var statearr_33518_34831 = state_33509__$1;
(statearr_33518_34831[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (3))){
var inst_33507 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33509__$1,inst_33507);
} else {
if((state_val_33510 === (12))){
var state_33509__$1 = state_33509;
var statearr_33519_34832 = state_33509__$1;
(statearr_33519_34832[(2)] = null);

(statearr_33519_34832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (2))){
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33509__$1,(4),ch);
} else {
if((state_val_33510 === (11))){
var inst_33486 = (state_33509[(7)]);
var inst_33496 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33509__$1,(8),inst_33496,inst_33486);
} else {
if((state_val_33510 === (9))){
var state_33509__$1 = state_33509;
var statearr_33520_34833 = state_33509__$1;
(statearr_33520_34833[(2)] = tc);

(statearr_33520_34833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (5))){
var inst_33489 = cljs.core.async.close_BANG_(tc);
var inst_33490 = cljs.core.async.close_BANG_(fc);
var state_33509__$1 = (function (){var statearr_33521 = state_33509;
(statearr_33521[(8)] = inst_33489);

return statearr_33521;
})();
var statearr_33522_34834 = state_33509__$1;
(statearr_33522_34834[(2)] = inst_33490);

(statearr_33522_34834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (14))){
var inst_33503 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33523_34835 = state_33509__$1;
(statearr_33523_34835[(2)] = inst_33503);

(statearr_33523_34835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (10))){
var state_33509__$1 = state_33509;
var statearr_33524_34836 = state_33509__$1;
(statearr_33524_34836[(2)] = fc);

(statearr_33524_34836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (8))){
var inst_33498 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
if(cljs.core.truth_(inst_33498)){
var statearr_33525_34837 = state_33509__$1;
(statearr_33525_34837[(1)] = (12));

} else {
var statearr_33526_34838 = state_33509__$1;
(statearr_33526_34838[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_33527 = [null,null,null,null,null,null,null,null,null];
(statearr_33527[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_33527[(1)] = (1));

return statearr_33527;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_33509){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33509);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33528){var ex__33136__auto__ = e33528;
var statearr_33529_34839 = state_33509;
(statearr_33529_34839[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33509[(4)]))){
var statearr_33530_34840 = state_33509;
(statearr_33530_34840[(1)] = cljs.core.first((state_33509[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34841 = state_33509;
state_33509 = G__34841;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_33509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_33509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_33531 = f__33165__auto__();
(statearr_33531[(6)] = c__33164__auto___34824);

return statearr_33531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_33553){
var state_val_33554 = (state_33553[(1)]);
if((state_val_33554 === (7))){
var inst_33549 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33555_34842 = state_33553__$1;
(statearr_33555_34842[(2)] = inst_33549);

(statearr_33555_34842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (1))){
var inst_33532 = init;
var inst_33533 = inst_33532;
var state_33553__$1 = (function (){var statearr_33556 = state_33553;
(statearr_33556[(7)] = inst_33533);

return statearr_33556;
})();
var statearr_33557_34843 = state_33553__$1;
(statearr_33557_34843[(2)] = null);

(statearr_33557_34843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (4))){
var inst_33536 = (state_33553[(8)]);
var inst_33536__$1 = (state_33553[(2)]);
var inst_33537 = (inst_33536__$1 == null);
var state_33553__$1 = (function (){var statearr_33558 = state_33553;
(statearr_33558[(8)] = inst_33536__$1);

return statearr_33558;
})();
if(cljs.core.truth_(inst_33537)){
var statearr_33559_34844 = state_33553__$1;
(statearr_33559_34844[(1)] = (5));

} else {
var statearr_33560_34845 = state_33553__$1;
(statearr_33560_34845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (6))){
var inst_33540 = (state_33553[(9)]);
var inst_33536 = (state_33553[(8)]);
var inst_33533 = (state_33553[(7)]);
var inst_33540__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33533,inst_33536) : f.call(null,inst_33533,inst_33536));
var inst_33541 = cljs.core.reduced_QMARK_(inst_33540__$1);
var state_33553__$1 = (function (){var statearr_33561 = state_33553;
(statearr_33561[(9)] = inst_33540__$1);

return statearr_33561;
})();
if(inst_33541){
var statearr_33562_34846 = state_33553__$1;
(statearr_33562_34846[(1)] = (8));

} else {
var statearr_33563_34847 = state_33553__$1;
(statearr_33563_34847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (3))){
var inst_33551 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33553__$1,inst_33551);
} else {
if((state_val_33554 === (2))){
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33553__$1,(4),ch);
} else {
if((state_val_33554 === (9))){
var inst_33540 = (state_33553[(9)]);
var inst_33533 = inst_33540;
var state_33553__$1 = (function (){var statearr_33564 = state_33553;
(statearr_33564[(7)] = inst_33533);

return statearr_33564;
})();
var statearr_33565_34848 = state_33553__$1;
(statearr_33565_34848[(2)] = null);

(statearr_33565_34848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (5))){
var inst_33533 = (state_33553[(7)]);
var state_33553__$1 = state_33553;
var statearr_33566_34849 = state_33553__$1;
(statearr_33566_34849[(2)] = inst_33533);

(statearr_33566_34849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (10))){
var inst_33547 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33567_34850 = state_33553__$1;
(statearr_33567_34850[(2)] = inst_33547);

(statearr_33567_34850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (8))){
var inst_33540 = (state_33553[(9)]);
var inst_33543 = cljs.core.deref(inst_33540);
var state_33553__$1 = state_33553;
var statearr_33568_34851 = state_33553__$1;
(statearr_33568_34851[(2)] = inst_33543);

(statearr_33568_34851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33133__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33133__auto____0 = (function (){
var statearr_33569 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33569[(0)] = cljs$core$async$reduce_$_state_machine__33133__auto__);

(statearr_33569[(1)] = (1));

return statearr_33569;
});
var cljs$core$async$reduce_$_state_machine__33133__auto____1 = (function (state_33553){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33553);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33570){var ex__33136__auto__ = e33570;
var statearr_33571_34852 = state_33553;
(statearr_33571_34852[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33553[(4)]))){
var statearr_33572_34853 = state_33553;
(statearr_33572_34853[(1)] = cljs.core.first((state_33553[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34854 = state_33553;
state_33553 = G__34854;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33133__auto__ = function(state_33553){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33133__auto____1.call(this,state_33553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33133__auto____0;
cljs$core$async$reduce_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33133__auto____1;
return cljs$core$async$reduce_$_state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_33573 = f__33165__auto__();
(statearr_33573[(6)] = c__33164__auto__);

return statearr_33573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));

return c__33164__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_33579){
var state_val_33580 = (state_33579[(1)]);
if((state_val_33580 === (1))){
var inst_33574 = cljs.core.async.reduce(f__$1,init,ch);
var state_33579__$1 = state_33579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33579__$1,(2),inst_33574);
} else {
if((state_val_33580 === (2))){
var inst_33576 = (state_33579[(2)]);
var inst_33577 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33576) : f__$1.call(null,inst_33576));
var state_33579__$1 = state_33579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33579__$1,inst_33577);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33133__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33133__auto____0 = (function (){
var statearr_33581 = [null,null,null,null,null,null,null];
(statearr_33581[(0)] = cljs$core$async$transduce_$_state_machine__33133__auto__);

(statearr_33581[(1)] = (1));

return statearr_33581;
});
var cljs$core$async$transduce_$_state_machine__33133__auto____1 = (function (state_33579){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33579);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33582){var ex__33136__auto__ = e33582;
var statearr_33583_34855 = state_33579;
(statearr_33583_34855[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33579[(4)]))){
var statearr_33584_34856 = state_33579;
(statearr_33584_34856[(1)] = cljs.core.first((state_33579[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34857 = state_33579;
state_33579 = G__34857;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33133__auto__ = function(state_33579){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33133__auto____1.call(this,state_33579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33133__auto____0;
cljs$core$async$transduce_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33133__auto____1;
return cljs$core$async$transduce_$_state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_33585 = f__33165__auto__();
(statearr_33585[(6)] = c__33164__auto__);

return statearr_33585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));

return c__33164__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33587 = arguments.length;
switch (G__33587) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_33612){
var state_val_33613 = (state_33612[(1)]);
if((state_val_33613 === (7))){
var inst_33594 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
var statearr_33614_34859 = state_33612__$1;
(statearr_33614_34859[(2)] = inst_33594);

(statearr_33614_34859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (1))){
var inst_33588 = cljs.core.seq(coll);
var inst_33589 = inst_33588;
var state_33612__$1 = (function (){var statearr_33615 = state_33612;
(statearr_33615[(7)] = inst_33589);

return statearr_33615;
})();
var statearr_33616_34860 = state_33612__$1;
(statearr_33616_34860[(2)] = null);

(statearr_33616_34860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (4))){
var inst_33589 = (state_33612[(7)]);
var inst_33592 = cljs.core.first(inst_33589);
var state_33612__$1 = state_33612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33612__$1,(7),ch,inst_33592);
} else {
if((state_val_33613 === (13))){
var inst_33606 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
var statearr_33617_34861 = state_33612__$1;
(statearr_33617_34861[(2)] = inst_33606);

(statearr_33617_34861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (6))){
var inst_33597 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
if(cljs.core.truth_(inst_33597)){
var statearr_33618_34862 = state_33612__$1;
(statearr_33618_34862[(1)] = (8));

} else {
var statearr_33619_34863 = state_33612__$1;
(statearr_33619_34863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (3))){
var inst_33610 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33612__$1,inst_33610);
} else {
if((state_val_33613 === (12))){
var state_33612__$1 = state_33612;
var statearr_33620_34864 = state_33612__$1;
(statearr_33620_34864[(2)] = null);

(statearr_33620_34864[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (2))){
var inst_33589 = (state_33612[(7)]);
var state_33612__$1 = state_33612;
if(cljs.core.truth_(inst_33589)){
var statearr_33621_34865 = state_33612__$1;
(statearr_33621_34865[(1)] = (4));

} else {
var statearr_33622_34866 = state_33612__$1;
(statearr_33622_34866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (11))){
var inst_33603 = cljs.core.async.close_BANG_(ch);
var state_33612__$1 = state_33612;
var statearr_33623_34867 = state_33612__$1;
(statearr_33623_34867[(2)] = inst_33603);

(statearr_33623_34867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (9))){
var state_33612__$1 = state_33612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33624_34868 = state_33612__$1;
(statearr_33624_34868[(1)] = (11));

} else {
var statearr_33625_34869 = state_33612__$1;
(statearr_33625_34869[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (5))){
var inst_33589 = (state_33612[(7)]);
var state_33612__$1 = state_33612;
var statearr_33626_34870 = state_33612__$1;
(statearr_33626_34870[(2)] = inst_33589);

(statearr_33626_34870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (10))){
var inst_33608 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
var statearr_33627_34871 = state_33612__$1;
(statearr_33627_34871[(2)] = inst_33608);

(statearr_33627_34871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (8))){
var inst_33589 = (state_33612[(7)]);
var inst_33599 = cljs.core.next(inst_33589);
var inst_33589__$1 = inst_33599;
var state_33612__$1 = (function (){var statearr_33628 = state_33612;
(statearr_33628[(7)] = inst_33589__$1);

return statearr_33628;
})();
var statearr_33629_34911 = state_33612__$1;
(statearr_33629_34911[(2)] = null);

(statearr_33629_34911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_33630 = [null,null,null,null,null,null,null,null];
(statearr_33630[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_33630[(1)] = (1));

return statearr_33630;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_33612){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33612);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33631){var ex__33136__auto__ = e33631;
var statearr_33632_34912 = state_33612;
(statearr_33632_34912[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33612[(4)]))){
var statearr_33633_34913 = state_33612;
(statearr_33633_34913[(1)] = cljs.core.first((state_33612[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34914 = state_33612;
state_33612 = G__34914;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_33612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_33612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_33634 = f__33165__auto__();
(statearr_33634[(6)] = c__33164__auto__);

return statearr_33634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));

return c__33164__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33636 = arguments.length;
switch (G__33636) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34916 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34916(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34917 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34917(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34918 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34918(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34919 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34919(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33637 = (function (ch,cs,meta33638){
this.ch = ch;
this.cs = cs;
this.meta33638 = meta33638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33639,meta33638__$1){
var self__ = this;
var _33639__$1 = this;
return (new cljs.core.async.t_cljs$core$async33637(self__.ch,self__.cs,meta33638__$1));
}));

(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33639){
var self__ = this;
var _33639__$1 = this;
return self__.meta33638;
}));

(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33638","meta33638",484244953,null)], null);
}));

(cljs.core.async.t_cljs$core$async33637.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33637");

(cljs.core.async.t_cljs$core$async33637.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33637");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33637.
 */
cljs.core.async.__GT_t_cljs$core$async33637 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33637(ch__$1,cs__$1,meta33638){
return (new cljs.core.async.t_cljs$core$async33637(ch__$1,cs__$1,meta33638));
});

}

return (new cljs.core.async.t_cljs$core$async33637(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33164__auto___34920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_33772){
var state_val_33773 = (state_33772[(1)]);
if((state_val_33773 === (7))){
var inst_33768 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33774_34921 = state_33772__$1;
(statearr_33774_34921[(2)] = inst_33768);

(statearr_33774_34921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (20))){
var inst_33673 = (state_33772[(7)]);
var inst_33685 = cljs.core.first(inst_33673);
var inst_33686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33685,(0),null);
var inst_33687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33685,(1),null);
var state_33772__$1 = (function (){var statearr_33775 = state_33772;
(statearr_33775[(8)] = inst_33686);

return statearr_33775;
})();
if(cljs.core.truth_(inst_33687)){
var statearr_33776_34922 = state_33772__$1;
(statearr_33776_34922[(1)] = (22));

} else {
var statearr_33777_34923 = state_33772__$1;
(statearr_33777_34923[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (27))){
var inst_33722 = (state_33772[(9)]);
var inst_33715 = (state_33772[(10)]);
var inst_33717 = (state_33772[(11)]);
var inst_33642 = (state_33772[(12)]);
var inst_33722__$1 = cljs.core._nth(inst_33715,inst_33717);
var inst_33723 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33722__$1,inst_33642,done);
var state_33772__$1 = (function (){var statearr_33778 = state_33772;
(statearr_33778[(9)] = inst_33722__$1);

return statearr_33778;
})();
if(cljs.core.truth_(inst_33723)){
var statearr_33779_34924 = state_33772__$1;
(statearr_33779_34924[(1)] = (30));

} else {
var statearr_33780_34925 = state_33772__$1;
(statearr_33780_34925[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (1))){
var state_33772__$1 = state_33772;
var statearr_33781_34926 = state_33772__$1;
(statearr_33781_34926[(2)] = null);

(statearr_33781_34926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (24))){
var inst_33673 = (state_33772[(7)]);
var inst_33692 = (state_33772[(2)]);
var inst_33693 = cljs.core.next(inst_33673);
var inst_33651 = inst_33693;
var inst_33652 = null;
var inst_33653 = (0);
var inst_33654 = (0);
var state_33772__$1 = (function (){var statearr_33782 = state_33772;
(statearr_33782[(13)] = inst_33652);

(statearr_33782[(14)] = inst_33654);

(statearr_33782[(15)] = inst_33653);

(statearr_33782[(16)] = inst_33692);

(statearr_33782[(17)] = inst_33651);

return statearr_33782;
})();
var statearr_33783_34927 = state_33772__$1;
(statearr_33783_34927[(2)] = null);

(statearr_33783_34927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (39))){
var state_33772__$1 = state_33772;
var statearr_33787_34928 = state_33772__$1;
(statearr_33787_34928[(2)] = null);

(statearr_33787_34928[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (4))){
var inst_33642 = (state_33772[(12)]);
var inst_33642__$1 = (state_33772[(2)]);
var inst_33643 = (inst_33642__$1 == null);
var state_33772__$1 = (function (){var statearr_33788 = state_33772;
(statearr_33788[(12)] = inst_33642__$1);

return statearr_33788;
})();
if(cljs.core.truth_(inst_33643)){
var statearr_33789_34929 = state_33772__$1;
(statearr_33789_34929[(1)] = (5));

} else {
var statearr_33790_34930 = state_33772__$1;
(statearr_33790_34930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (15))){
var inst_33652 = (state_33772[(13)]);
var inst_33654 = (state_33772[(14)]);
var inst_33653 = (state_33772[(15)]);
var inst_33651 = (state_33772[(17)]);
var inst_33669 = (state_33772[(2)]);
var inst_33670 = (inst_33654 + (1));
var tmp33784 = inst_33652;
var tmp33785 = inst_33653;
var tmp33786 = inst_33651;
var inst_33651__$1 = tmp33786;
var inst_33652__$1 = tmp33784;
var inst_33653__$1 = tmp33785;
var inst_33654__$1 = inst_33670;
var state_33772__$1 = (function (){var statearr_33791 = state_33772;
(statearr_33791[(18)] = inst_33669);

(statearr_33791[(13)] = inst_33652__$1);

(statearr_33791[(14)] = inst_33654__$1);

(statearr_33791[(15)] = inst_33653__$1);

(statearr_33791[(17)] = inst_33651__$1);

return statearr_33791;
})();
var statearr_33792_34931 = state_33772__$1;
(statearr_33792_34931[(2)] = null);

(statearr_33792_34931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (21))){
var inst_33696 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33796_34932 = state_33772__$1;
(statearr_33796_34932[(2)] = inst_33696);

(statearr_33796_34932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (31))){
var inst_33722 = (state_33772[(9)]);
var inst_33726 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33722);
var state_33772__$1 = state_33772;
var statearr_33797_34933 = state_33772__$1;
(statearr_33797_34933[(2)] = inst_33726);

(statearr_33797_34933[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (32))){
var inst_33715 = (state_33772[(10)]);
var inst_33716 = (state_33772[(19)]);
var inst_33714 = (state_33772[(20)]);
var inst_33717 = (state_33772[(11)]);
var inst_33728 = (state_33772[(2)]);
var inst_33729 = (inst_33717 + (1));
var tmp33793 = inst_33715;
var tmp33794 = inst_33716;
var tmp33795 = inst_33714;
var inst_33714__$1 = tmp33795;
var inst_33715__$1 = tmp33793;
var inst_33716__$1 = tmp33794;
var inst_33717__$1 = inst_33729;
var state_33772__$1 = (function (){var statearr_33798 = state_33772;
(statearr_33798[(10)] = inst_33715__$1);

(statearr_33798[(19)] = inst_33716__$1);

(statearr_33798[(20)] = inst_33714__$1);

(statearr_33798[(21)] = inst_33728);

(statearr_33798[(11)] = inst_33717__$1);

return statearr_33798;
})();
var statearr_33799_34934 = state_33772__$1;
(statearr_33799_34934[(2)] = null);

(statearr_33799_34934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (40))){
var inst_33741 = (state_33772[(22)]);
var inst_33745 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33741);
var state_33772__$1 = state_33772;
var statearr_33800_34935 = state_33772__$1;
(statearr_33800_34935[(2)] = inst_33745);

(statearr_33800_34935[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (33))){
var inst_33732 = (state_33772[(23)]);
var inst_33734 = cljs.core.chunked_seq_QMARK_(inst_33732);
var state_33772__$1 = state_33772;
if(inst_33734){
var statearr_33801_34936 = state_33772__$1;
(statearr_33801_34936[(1)] = (36));

} else {
var statearr_33802_34937 = state_33772__$1;
(statearr_33802_34937[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (13))){
var inst_33663 = (state_33772[(24)]);
var inst_33666 = cljs.core.async.close_BANG_(inst_33663);
var state_33772__$1 = state_33772;
var statearr_33803_34938 = state_33772__$1;
(statearr_33803_34938[(2)] = inst_33666);

(statearr_33803_34938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (22))){
var inst_33686 = (state_33772[(8)]);
var inst_33689 = cljs.core.async.close_BANG_(inst_33686);
var state_33772__$1 = state_33772;
var statearr_33804_34939 = state_33772__$1;
(statearr_33804_34939[(2)] = inst_33689);

(statearr_33804_34939[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (36))){
var inst_33732 = (state_33772[(23)]);
var inst_33736 = cljs.core.chunk_first(inst_33732);
var inst_33737 = cljs.core.chunk_rest(inst_33732);
var inst_33738 = cljs.core.count(inst_33736);
var inst_33714 = inst_33737;
var inst_33715 = inst_33736;
var inst_33716 = inst_33738;
var inst_33717 = (0);
var state_33772__$1 = (function (){var statearr_33805 = state_33772;
(statearr_33805[(10)] = inst_33715);

(statearr_33805[(19)] = inst_33716);

(statearr_33805[(20)] = inst_33714);

(statearr_33805[(11)] = inst_33717);

return statearr_33805;
})();
var statearr_33806_34940 = state_33772__$1;
(statearr_33806_34940[(2)] = null);

(statearr_33806_34940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (41))){
var inst_33732 = (state_33772[(23)]);
var inst_33747 = (state_33772[(2)]);
var inst_33748 = cljs.core.next(inst_33732);
var inst_33714 = inst_33748;
var inst_33715 = null;
var inst_33716 = (0);
var inst_33717 = (0);
var state_33772__$1 = (function (){var statearr_33807 = state_33772;
(statearr_33807[(10)] = inst_33715);

(statearr_33807[(19)] = inst_33716);

(statearr_33807[(20)] = inst_33714);

(statearr_33807[(11)] = inst_33717);

(statearr_33807[(25)] = inst_33747);

return statearr_33807;
})();
var statearr_33808_34941 = state_33772__$1;
(statearr_33808_34941[(2)] = null);

(statearr_33808_34941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (43))){
var state_33772__$1 = state_33772;
var statearr_33809_34942 = state_33772__$1;
(statearr_33809_34942[(2)] = null);

(statearr_33809_34942[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (29))){
var inst_33756 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33810_34943 = state_33772__$1;
(statearr_33810_34943[(2)] = inst_33756);

(statearr_33810_34943[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (44))){
var inst_33765 = (state_33772[(2)]);
var state_33772__$1 = (function (){var statearr_33811 = state_33772;
(statearr_33811[(26)] = inst_33765);

return statearr_33811;
})();
var statearr_33812_34944 = state_33772__$1;
(statearr_33812_34944[(2)] = null);

(statearr_33812_34944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (6))){
var inst_33706 = (state_33772[(27)]);
var inst_33705 = cljs.core.deref(cs);
var inst_33706__$1 = cljs.core.keys(inst_33705);
var inst_33707 = cljs.core.count(inst_33706__$1);
var inst_33708 = cljs.core.reset_BANG_(dctr,inst_33707);
var inst_33713 = cljs.core.seq(inst_33706__$1);
var inst_33714 = inst_33713;
var inst_33715 = null;
var inst_33716 = (0);
var inst_33717 = (0);
var state_33772__$1 = (function (){var statearr_33813 = state_33772;
(statearr_33813[(10)] = inst_33715);

(statearr_33813[(28)] = inst_33708);

(statearr_33813[(19)] = inst_33716);

(statearr_33813[(20)] = inst_33714);

(statearr_33813[(27)] = inst_33706__$1);

(statearr_33813[(11)] = inst_33717);

return statearr_33813;
})();
var statearr_33814_34945 = state_33772__$1;
(statearr_33814_34945[(2)] = null);

(statearr_33814_34945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (28))){
var inst_33714 = (state_33772[(20)]);
var inst_33732 = (state_33772[(23)]);
var inst_33732__$1 = cljs.core.seq(inst_33714);
var state_33772__$1 = (function (){var statearr_33815 = state_33772;
(statearr_33815[(23)] = inst_33732__$1);

return statearr_33815;
})();
if(inst_33732__$1){
var statearr_33816_34946 = state_33772__$1;
(statearr_33816_34946[(1)] = (33));

} else {
var statearr_33817_34947 = state_33772__$1;
(statearr_33817_34947[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (25))){
var inst_33716 = (state_33772[(19)]);
var inst_33717 = (state_33772[(11)]);
var inst_33719 = (inst_33717 < inst_33716);
var inst_33720 = inst_33719;
var state_33772__$1 = state_33772;
if(cljs.core.truth_(inst_33720)){
var statearr_33818_34948 = state_33772__$1;
(statearr_33818_34948[(1)] = (27));

} else {
var statearr_33819_34949 = state_33772__$1;
(statearr_33819_34949[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (34))){
var state_33772__$1 = state_33772;
var statearr_33820_34950 = state_33772__$1;
(statearr_33820_34950[(2)] = null);

(statearr_33820_34950[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (17))){
var state_33772__$1 = state_33772;
var statearr_33821_34951 = state_33772__$1;
(statearr_33821_34951[(2)] = null);

(statearr_33821_34951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (3))){
var inst_33770 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33772__$1,inst_33770);
} else {
if((state_val_33773 === (12))){
var inst_33701 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33822_34983 = state_33772__$1;
(statearr_33822_34983[(2)] = inst_33701);

(statearr_33822_34983[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (2))){
var state_33772__$1 = state_33772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33772__$1,(4),ch);
} else {
if((state_val_33773 === (23))){
var state_33772__$1 = state_33772;
var statearr_33823_34984 = state_33772__$1;
(statearr_33823_34984[(2)] = null);

(statearr_33823_34984[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (35))){
var inst_33754 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33824_34985 = state_33772__$1;
(statearr_33824_34985[(2)] = inst_33754);

(statearr_33824_34985[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (19))){
var inst_33673 = (state_33772[(7)]);
var inst_33677 = cljs.core.chunk_first(inst_33673);
var inst_33678 = cljs.core.chunk_rest(inst_33673);
var inst_33679 = cljs.core.count(inst_33677);
var inst_33651 = inst_33678;
var inst_33652 = inst_33677;
var inst_33653 = inst_33679;
var inst_33654 = (0);
var state_33772__$1 = (function (){var statearr_33825 = state_33772;
(statearr_33825[(13)] = inst_33652);

(statearr_33825[(14)] = inst_33654);

(statearr_33825[(15)] = inst_33653);

(statearr_33825[(17)] = inst_33651);

return statearr_33825;
})();
var statearr_33826_34986 = state_33772__$1;
(statearr_33826_34986[(2)] = null);

(statearr_33826_34986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (11))){
var inst_33673 = (state_33772[(7)]);
var inst_33651 = (state_33772[(17)]);
var inst_33673__$1 = cljs.core.seq(inst_33651);
var state_33772__$1 = (function (){var statearr_33827 = state_33772;
(statearr_33827[(7)] = inst_33673__$1);

return statearr_33827;
})();
if(inst_33673__$1){
var statearr_33828_34987 = state_33772__$1;
(statearr_33828_34987[(1)] = (16));

} else {
var statearr_33829_34988 = state_33772__$1;
(statearr_33829_34988[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (9))){
var inst_33703 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33830_34989 = state_33772__$1;
(statearr_33830_34989[(2)] = inst_33703);

(statearr_33830_34989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (5))){
var inst_33649 = cljs.core.deref(cs);
var inst_33650 = cljs.core.seq(inst_33649);
var inst_33651 = inst_33650;
var inst_33652 = null;
var inst_33653 = (0);
var inst_33654 = (0);
var state_33772__$1 = (function (){var statearr_33831 = state_33772;
(statearr_33831[(13)] = inst_33652);

(statearr_33831[(14)] = inst_33654);

(statearr_33831[(15)] = inst_33653);

(statearr_33831[(17)] = inst_33651);

return statearr_33831;
})();
var statearr_33832_34990 = state_33772__$1;
(statearr_33832_34990[(2)] = null);

(statearr_33832_34990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (14))){
var state_33772__$1 = state_33772;
var statearr_33833_34991 = state_33772__$1;
(statearr_33833_34991[(2)] = null);

(statearr_33833_34991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (45))){
var inst_33762 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33834_34992 = state_33772__$1;
(statearr_33834_34992[(2)] = inst_33762);

(statearr_33834_34992[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (26))){
var inst_33706 = (state_33772[(27)]);
var inst_33758 = (state_33772[(2)]);
var inst_33759 = cljs.core.seq(inst_33706);
var state_33772__$1 = (function (){var statearr_33835 = state_33772;
(statearr_33835[(29)] = inst_33758);

return statearr_33835;
})();
if(inst_33759){
var statearr_33836_34993 = state_33772__$1;
(statearr_33836_34993[(1)] = (42));

} else {
var statearr_33837_34994 = state_33772__$1;
(statearr_33837_34994[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (16))){
var inst_33673 = (state_33772[(7)]);
var inst_33675 = cljs.core.chunked_seq_QMARK_(inst_33673);
var state_33772__$1 = state_33772;
if(inst_33675){
var statearr_33838_34995 = state_33772__$1;
(statearr_33838_34995[(1)] = (19));

} else {
var statearr_33839_34996 = state_33772__$1;
(statearr_33839_34996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (38))){
var inst_33751 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33840_34997 = state_33772__$1;
(statearr_33840_34997[(2)] = inst_33751);

(statearr_33840_34997[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (30))){
var state_33772__$1 = state_33772;
var statearr_33841_34998 = state_33772__$1;
(statearr_33841_34998[(2)] = null);

(statearr_33841_34998[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (10))){
var inst_33652 = (state_33772[(13)]);
var inst_33654 = (state_33772[(14)]);
var inst_33662 = cljs.core._nth(inst_33652,inst_33654);
var inst_33663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33662,(0),null);
var inst_33664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33662,(1),null);
var state_33772__$1 = (function (){var statearr_33842 = state_33772;
(statearr_33842[(24)] = inst_33663);

return statearr_33842;
})();
if(cljs.core.truth_(inst_33664)){
var statearr_33843_34999 = state_33772__$1;
(statearr_33843_34999[(1)] = (13));

} else {
var statearr_33844_35000 = state_33772__$1;
(statearr_33844_35000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (18))){
var inst_33699 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33845_35001 = state_33772__$1;
(statearr_33845_35001[(2)] = inst_33699);

(statearr_33845_35001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (42))){
var state_33772__$1 = state_33772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33772__$1,(45),dchan);
} else {
if((state_val_33773 === (37))){
var inst_33741 = (state_33772[(22)]);
var inst_33732 = (state_33772[(23)]);
var inst_33642 = (state_33772[(12)]);
var inst_33741__$1 = cljs.core.first(inst_33732);
var inst_33742 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33741__$1,inst_33642,done);
var state_33772__$1 = (function (){var statearr_33846 = state_33772;
(statearr_33846[(22)] = inst_33741__$1);

return statearr_33846;
})();
if(cljs.core.truth_(inst_33742)){
var statearr_33847_35002 = state_33772__$1;
(statearr_33847_35002[(1)] = (39));

} else {
var statearr_33848_35003 = state_33772__$1;
(statearr_33848_35003[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (8))){
var inst_33654 = (state_33772[(14)]);
var inst_33653 = (state_33772[(15)]);
var inst_33656 = (inst_33654 < inst_33653);
var inst_33657 = inst_33656;
var state_33772__$1 = state_33772;
if(cljs.core.truth_(inst_33657)){
var statearr_33849_35004 = state_33772__$1;
(statearr_33849_35004[(1)] = (10));

} else {
var statearr_33850_35005 = state_33772__$1;
(statearr_33850_35005[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33133__auto__ = null;
var cljs$core$async$mult_$_state_machine__33133__auto____0 = (function (){
var statearr_33851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33851[(0)] = cljs$core$async$mult_$_state_machine__33133__auto__);

(statearr_33851[(1)] = (1));

return statearr_33851;
});
var cljs$core$async$mult_$_state_machine__33133__auto____1 = (function (state_33772){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33772);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33852){var ex__33136__auto__ = e33852;
var statearr_33853_35006 = state_33772;
(statearr_33853_35006[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33772[(4)]))){
var statearr_33854_35007 = state_33772;
(statearr_33854_35007[(1)] = cljs.core.first((state_33772[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35008 = state_33772;
state_33772 = G__35008;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33133__auto__ = function(state_33772){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33133__auto____1.call(this,state_33772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33133__auto____0;
cljs$core$async$mult_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33133__auto____1;
return cljs$core$async$mult_$_state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_33855 = f__33165__auto__();
(statearr_33855[(6)] = c__33164__auto___34920);

return statearr_33855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33857 = arguments.length;
switch (G__33857) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35010 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35010(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35011 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35011(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35012 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35012(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35013 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35013(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35014 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35014(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35015 = arguments.length;
var i__4737__auto___35016 = (0);
while(true){
if((i__4737__auto___35016 < len__4736__auto___35015)){
args__4742__auto__.push((arguments[i__4737__auto___35016]));

var G__35017 = (i__4737__auto___35016 + (1));
i__4737__auto___35016 = G__35017;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33862){
var map__33863 = p__33862;
var map__33863__$1 = (((((!((map__33863 == null))))?(((((map__33863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33863):map__33863);
var opts = map__33863__$1;
var statearr_33865_35018 = state;
(statearr_33865_35018[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33866_35019 = state;
(statearr_33866_35019[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33867_35020 = state;
(statearr_33867_35020[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33858){
var G__33859 = cljs.core.first(seq33858);
var seq33858__$1 = cljs.core.next(seq33858);
var G__33860 = cljs.core.first(seq33858__$1);
var seq33858__$2 = cljs.core.next(seq33858__$1);
var G__33861 = cljs.core.first(seq33858__$2);
var seq33858__$3 = cljs.core.next(seq33858__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33859,G__33860,G__33861,seq33858__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33868 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33869){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33869 = meta33869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33870,meta33869__$1){
var self__ = this;
var _33870__$1 = this;
return (new cljs.core.async.t_cljs$core$async33868(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33869__$1));
}));

(cljs.core.async.t_cljs$core$async33868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33870){
var self__ = this;
var _33870__$1 = this;
return self__.meta33869;
}));

(cljs.core.async.t_cljs$core$async33868.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33868.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33868.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33868.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33868.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33868.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33868.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33869","meta33869",1884749868,null)], null);
}));

(cljs.core.async.t_cljs$core$async33868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33868");

(cljs.core.async.t_cljs$core$async33868.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33868.
 */
cljs.core.async.__GT_t_cljs$core$async33868 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33868(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33869){
return (new cljs.core.async.t_cljs$core$async33868(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33869));
});

}

return (new cljs.core.async.t_cljs$core$async33868(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33164__auto___35046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_33972){
var state_val_33973 = (state_33972[(1)]);
if((state_val_33973 === (7))){
var inst_33887 = (state_33972[(2)]);
var state_33972__$1 = state_33972;
var statearr_33974_35047 = state_33972__$1;
(statearr_33974_35047[(2)] = inst_33887);

(statearr_33974_35047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (20))){
var inst_33899 = (state_33972[(7)]);
var state_33972__$1 = state_33972;
var statearr_33975_35048 = state_33972__$1;
(statearr_33975_35048[(2)] = inst_33899);

(statearr_33975_35048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (27))){
var state_33972__$1 = state_33972;
var statearr_33976_35049 = state_33972__$1;
(statearr_33976_35049[(2)] = null);

(statearr_33976_35049[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (1))){
var inst_33874 = (state_33972[(8)]);
var inst_33874__$1 = calc_state();
var inst_33876 = (inst_33874__$1 == null);
var inst_33877 = cljs.core.not(inst_33876);
var state_33972__$1 = (function (){var statearr_33977 = state_33972;
(statearr_33977[(8)] = inst_33874__$1);

return statearr_33977;
})();
if(inst_33877){
var statearr_33978_35050 = state_33972__$1;
(statearr_33978_35050[(1)] = (2));

} else {
var statearr_33979_35051 = state_33972__$1;
(statearr_33979_35051[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (24))){
var inst_33932 = (state_33972[(9)]);
var inst_33923 = (state_33972[(10)]);
var inst_33946 = (state_33972[(11)]);
var inst_33946__$1 = (inst_33923.cljs$core$IFn$_invoke$arity$1 ? inst_33923.cljs$core$IFn$_invoke$arity$1(inst_33932) : inst_33923.call(null,inst_33932));
var state_33972__$1 = (function (){var statearr_33980 = state_33972;
(statearr_33980[(11)] = inst_33946__$1);

return statearr_33980;
})();
if(cljs.core.truth_(inst_33946__$1)){
var statearr_33981_35052 = state_33972__$1;
(statearr_33981_35052[(1)] = (29));

} else {
var statearr_33982_35053 = state_33972__$1;
(statearr_33982_35053[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (4))){
var inst_33890 = (state_33972[(2)]);
var state_33972__$1 = state_33972;
if(cljs.core.truth_(inst_33890)){
var statearr_33983_35054 = state_33972__$1;
(statearr_33983_35054[(1)] = (8));

} else {
var statearr_33984_35055 = state_33972__$1;
(statearr_33984_35055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (15))){
var inst_33917 = (state_33972[(2)]);
var state_33972__$1 = state_33972;
if(cljs.core.truth_(inst_33917)){
var statearr_33985_35056 = state_33972__$1;
(statearr_33985_35056[(1)] = (19));

} else {
var statearr_33986_35057 = state_33972__$1;
(statearr_33986_35057[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (21))){
var inst_33922 = (state_33972[(12)]);
var inst_33922__$1 = (state_33972[(2)]);
var inst_33923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33922__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33922__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33922__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33972__$1 = (function (){var statearr_33987 = state_33972;
(statearr_33987[(13)] = inst_33924);

(statearr_33987[(10)] = inst_33923);

(statearr_33987[(12)] = inst_33922__$1);

return statearr_33987;
})();
return cljs.core.async.ioc_alts_BANG_(state_33972__$1,(22),inst_33925);
} else {
if((state_val_33973 === (31))){
var inst_33954 = (state_33972[(2)]);
var state_33972__$1 = state_33972;
if(cljs.core.truth_(inst_33954)){
var statearr_33988_35058 = state_33972__$1;
(statearr_33988_35058[(1)] = (32));

} else {
var statearr_33989_35059 = state_33972__$1;
(statearr_33989_35059[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (32))){
var inst_33931 = (state_33972[(14)]);
var state_33972__$1 = state_33972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33972__$1,(35),out,inst_33931);
} else {
if((state_val_33973 === (33))){
var inst_33922 = (state_33972[(12)]);
var inst_33899 = inst_33922;
var state_33972__$1 = (function (){var statearr_33990 = state_33972;
(statearr_33990[(7)] = inst_33899);

return statearr_33990;
})();
var statearr_33991_35060 = state_33972__$1;
(statearr_33991_35060[(2)] = null);

(statearr_33991_35060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (13))){
var inst_33899 = (state_33972[(7)]);
var inst_33906 = inst_33899.cljs$lang$protocol_mask$partition0$;
var inst_33907 = (inst_33906 & (64));
var inst_33908 = inst_33899.cljs$core$ISeq$;
var inst_33909 = (cljs.core.PROTOCOL_SENTINEL === inst_33908);
var inst_33910 = ((inst_33907) || (inst_33909));
var state_33972__$1 = state_33972;
if(cljs.core.truth_(inst_33910)){
var statearr_33992_35090 = state_33972__$1;
(statearr_33992_35090[(1)] = (16));

} else {
var statearr_33993_35091 = state_33972__$1;
(statearr_33993_35091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (22))){
var inst_33931 = (state_33972[(14)]);
var inst_33932 = (state_33972[(9)]);
var inst_33930 = (state_33972[(2)]);
var inst_33931__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33930,(0),null);
var inst_33932__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33930,(1),null);
var inst_33933 = (inst_33931__$1 == null);
var inst_33934 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33932__$1,change);
var inst_33935 = ((inst_33933) || (inst_33934));
var state_33972__$1 = (function (){var statearr_33994 = state_33972;
(statearr_33994[(14)] = inst_33931__$1);

(statearr_33994[(9)] = inst_33932__$1);

return statearr_33994;
})();
if(cljs.core.truth_(inst_33935)){
var statearr_33995_35092 = state_33972__$1;
(statearr_33995_35092[(1)] = (23));

} else {
var statearr_33996_35093 = state_33972__$1;
(statearr_33996_35093[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (36))){
var inst_33922 = (state_33972[(12)]);
var inst_33899 = inst_33922;
var state_33972__$1 = (function (){var statearr_33997 = state_33972;
(statearr_33997[(7)] = inst_33899);

return statearr_33997;
})();
var statearr_33998_35094 = state_33972__$1;
(statearr_33998_35094[(2)] = null);

(statearr_33998_35094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (29))){
var inst_33946 = (state_33972[(11)]);
var state_33972__$1 = state_33972;
var statearr_33999_35095 = state_33972__$1;
(statearr_33999_35095[(2)] = inst_33946);

(statearr_33999_35095[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (6))){
var state_33972__$1 = state_33972;
var statearr_34000_35096 = state_33972__$1;
(statearr_34000_35096[(2)] = false);

(statearr_34000_35096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (28))){
var inst_33942 = (state_33972[(2)]);
var inst_33943 = calc_state();
var inst_33899 = inst_33943;
var state_33972__$1 = (function (){var statearr_34001 = state_33972;
(statearr_34001[(7)] = inst_33899);

(statearr_34001[(15)] = inst_33942);

return statearr_34001;
})();
var statearr_34002_35097 = state_33972__$1;
(statearr_34002_35097[(2)] = null);

(statearr_34002_35097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (25))){
var inst_33968 = (state_33972[(2)]);
var state_33972__$1 = state_33972;
var statearr_34003_35098 = state_33972__$1;
(statearr_34003_35098[(2)] = inst_33968);

(statearr_34003_35098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (34))){
var inst_33966 = (state_33972[(2)]);
var state_33972__$1 = state_33972;
var statearr_34004_35099 = state_33972__$1;
(statearr_34004_35099[(2)] = inst_33966);

(statearr_34004_35099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (17))){
var state_33972__$1 = state_33972;
var statearr_34005_35100 = state_33972__$1;
(statearr_34005_35100[(2)] = false);

(statearr_34005_35100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (3))){
var state_33972__$1 = state_33972;
var statearr_34006_35101 = state_33972__$1;
(statearr_34006_35101[(2)] = false);

(statearr_34006_35101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (12))){
var inst_33970 = (state_33972[(2)]);
var state_33972__$1 = state_33972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33972__$1,inst_33970);
} else {
if((state_val_33973 === (2))){
var inst_33874 = (state_33972[(8)]);
var inst_33879 = inst_33874.cljs$lang$protocol_mask$partition0$;
var inst_33880 = (inst_33879 & (64));
var inst_33881 = inst_33874.cljs$core$ISeq$;
var inst_33882 = (cljs.core.PROTOCOL_SENTINEL === inst_33881);
var inst_33883 = ((inst_33880) || (inst_33882));
var state_33972__$1 = state_33972;
if(cljs.core.truth_(inst_33883)){
var statearr_34007_35102 = state_33972__$1;
(statearr_34007_35102[(1)] = (5));

} else {
var statearr_34008_35103 = state_33972__$1;
(statearr_34008_35103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (23))){
var inst_33931 = (state_33972[(14)]);
var inst_33937 = (inst_33931 == null);
var state_33972__$1 = state_33972;
if(cljs.core.truth_(inst_33937)){
var statearr_34009_35104 = state_33972__$1;
(statearr_34009_35104[(1)] = (26));

} else {
var statearr_34010_35105 = state_33972__$1;
(statearr_34010_35105[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (35))){
var inst_33957 = (state_33972[(2)]);
var state_33972__$1 = state_33972;
if(cljs.core.truth_(inst_33957)){
var statearr_34011_35106 = state_33972__$1;
(statearr_34011_35106[(1)] = (36));

} else {
var statearr_34012_35107 = state_33972__$1;
(statearr_34012_35107[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (19))){
var inst_33899 = (state_33972[(7)]);
var inst_33919 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33899);
var state_33972__$1 = state_33972;
var statearr_34013_35108 = state_33972__$1;
(statearr_34013_35108[(2)] = inst_33919);

(statearr_34013_35108[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (11))){
var inst_33899 = (state_33972[(7)]);
var inst_33903 = (inst_33899 == null);
var inst_33904 = cljs.core.not(inst_33903);
var state_33972__$1 = state_33972;
if(inst_33904){
var statearr_34014_35109 = state_33972__$1;
(statearr_34014_35109[(1)] = (13));

} else {
var statearr_34015_35110 = state_33972__$1;
(statearr_34015_35110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (9))){
var inst_33874 = (state_33972[(8)]);
var state_33972__$1 = state_33972;
var statearr_34016_35111 = state_33972__$1;
(statearr_34016_35111[(2)] = inst_33874);

(statearr_34016_35111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (5))){
var state_33972__$1 = state_33972;
var statearr_34017_35112 = state_33972__$1;
(statearr_34017_35112[(2)] = true);

(statearr_34017_35112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (14))){
var state_33972__$1 = state_33972;
var statearr_34018_35113 = state_33972__$1;
(statearr_34018_35113[(2)] = false);

(statearr_34018_35113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (26))){
var inst_33932 = (state_33972[(9)]);
var inst_33939 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33932);
var state_33972__$1 = state_33972;
var statearr_34019_35114 = state_33972__$1;
(statearr_34019_35114[(2)] = inst_33939);

(statearr_34019_35114[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (16))){
var state_33972__$1 = state_33972;
var statearr_34020_35115 = state_33972__$1;
(statearr_34020_35115[(2)] = true);

(statearr_34020_35115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (38))){
var inst_33962 = (state_33972[(2)]);
var state_33972__$1 = state_33972;
var statearr_34021_35116 = state_33972__$1;
(statearr_34021_35116[(2)] = inst_33962);

(statearr_34021_35116[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (30))){
var inst_33924 = (state_33972[(13)]);
var inst_33932 = (state_33972[(9)]);
var inst_33923 = (state_33972[(10)]);
var inst_33949 = cljs.core.empty_QMARK_(inst_33923);
var inst_33950 = (inst_33924.cljs$core$IFn$_invoke$arity$1 ? inst_33924.cljs$core$IFn$_invoke$arity$1(inst_33932) : inst_33924.call(null,inst_33932));
var inst_33951 = cljs.core.not(inst_33950);
var inst_33952 = ((inst_33949) && (inst_33951));
var state_33972__$1 = state_33972;
var statearr_34022_35117 = state_33972__$1;
(statearr_34022_35117[(2)] = inst_33952);

(statearr_34022_35117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (10))){
var inst_33874 = (state_33972[(8)]);
var inst_33895 = (state_33972[(2)]);
var inst_33896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33895,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33895,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33895,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33899 = inst_33874;
var state_33972__$1 = (function (){var statearr_34023 = state_33972;
(statearr_34023[(16)] = inst_33898);

(statearr_34023[(7)] = inst_33899);

(statearr_34023[(17)] = inst_33897);

(statearr_34023[(18)] = inst_33896);

return statearr_34023;
})();
var statearr_34024_35118 = state_33972__$1;
(statearr_34024_35118[(2)] = null);

(statearr_34024_35118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (18))){
var inst_33914 = (state_33972[(2)]);
var state_33972__$1 = state_33972;
var statearr_34025_35119 = state_33972__$1;
(statearr_34025_35119[(2)] = inst_33914);

(statearr_34025_35119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (37))){
var state_33972__$1 = state_33972;
var statearr_34026_35120 = state_33972__$1;
(statearr_34026_35120[(2)] = null);

(statearr_34026_35120[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (8))){
var inst_33874 = (state_33972[(8)]);
var inst_33892 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33874);
var state_33972__$1 = state_33972;
var statearr_34027_35121 = state_33972__$1;
(statearr_34027_35121[(2)] = inst_33892);

(statearr_34027_35121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33133__auto__ = null;
var cljs$core$async$mix_$_state_machine__33133__auto____0 = (function (){
var statearr_34028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34028[(0)] = cljs$core$async$mix_$_state_machine__33133__auto__);

(statearr_34028[(1)] = (1));

return statearr_34028;
});
var cljs$core$async$mix_$_state_machine__33133__auto____1 = (function (state_33972){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33972);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34029){var ex__33136__auto__ = e34029;
var statearr_34030_35122 = state_33972;
(statearr_34030_35122[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33972[(4)]))){
var statearr_34031_35123 = state_33972;
(statearr_34031_35123[(1)] = cljs.core.first((state_33972[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35124 = state_33972;
state_33972 = G__35124;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33133__auto__ = function(state_33972){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33133__auto____1.call(this,state_33972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33133__auto____0;
cljs$core$async$mix_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33133__auto____1;
return cljs$core$async$mix_$_state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_34032 = f__33165__auto__();
(statearr_34032[(6)] = c__33164__auto___35046);

return statearr_34032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35125 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35125(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35126 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35126(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35127 = (function() {
var G__35128 = null;
var G__35128__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35128__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35128 = function(p,v){
switch(arguments.length){
case 1:
return G__35128__1.call(this,p);
case 2:
return G__35128__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35128.cljs$core$IFn$_invoke$arity$1 = G__35128__1;
G__35128.cljs$core$IFn$_invoke$arity$2 = G__35128__2;
return G__35128;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34034 = arguments.length;
switch (G__34034) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35127(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35127(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34037 = arguments.length;
switch (G__34037) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34035_SHARP_){
if(cljs.core.truth_((p1__34035_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34035_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34035_SHARP_.call(null,topic)))){
return p1__34035_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34035_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34038 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34039){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34039 = meta34039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34040,meta34039__$1){
var self__ = this;
var _34040__$1 = this;
return (new cljs.core.async.t_cljs$core$async34038(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34039__$1));
}));

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34040){
var self__ = this;
var _34040__$1 = this;
return self__.meta34039;
}));

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34039","meta34039",-221063598,null)], null);
}));

(cljs.core.async.t_cljs$core$async34038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34038");

(cljs.core.async.t_cljs$core$async34038.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34038.
 */
cljs.core.async.__GT_t_cljs$core$async34038 = (function cljs$core$async$__GT_t_cljs$core$async34038(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34039){
return (new cljs.core.async.t_cljs$core$async34038(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34039));
});

}

return (new cljs.core.async.t_cljs$core$async34038(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33164__auto___35147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_34112){
var state_val_34113 = (state_34112[(1)]);
if((state_val_34113 === (7))){
var inst_34108 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
var statearr_34114_35151 = state_34112__$1;
(statearr_34114_35151[(2)] = inst_34108);

(statearr_34114_35151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (20))){
var state_34112__$1 = state_34112;
var statearr_34115_35152 = state_34112__$1;
(statearr_34115_35152[(2)] = null);

(statearr_34115_35152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (1))){
var state_34112__$1 = state_34112;
var statearr_34116_35153 = state_34112__$1;
(statearr_34116_35153[(2)] = null);

(statearr_34116_35153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (24))){
var inst_34091 = (state_34112[(7)]);
var inst_34100 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34091);
var state_34112__$1 = state_34112;
var statearr_34117_35154 = state_34112__$1;
(statearr_34117_35154[(2)] = inst_34100);

(statearr_34117_35154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (4))){
var inst_34043 = (state_34112[(8)]);
var inst_34043__$1 = (state_34112[(2)]);
var inst_34044 = (inst_34043__$1 == null);
var state_34112__$1 = (function (){var statearr_34118 = state_34112;
(statearr_34118[(8)] = inst_34043__$1);

return statearr_34118;
})();
if(cljs.core.truth_(inst_34044)){
var statearr_34119_35155 = state_34112__$1;
(statearr_34119_35155[(1)] = (5));

} else {
var statearr_34120_35156 = state_34112__$1;
(statearr_34120_35156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (15))){
var inst_34085 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
var statearr_34121_35157 = state_34112__$1;
(statearr_34121_35157[(2)] = inst_34085);

(statearr_34121_35157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (21))){
var inst_34105 = (state_34112[(2)]);
var state_34112__$1 = (function (){var statearr_34122 = state_34112;
(statearr_34122[(9)] = inst_34105);

return statearr_34122;
})();
var statearr_34123_35158 = state_34112__$1;
(statearr_34123_35158[(2)] = null);

(statearr_34123_35158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (13))){
var inst_34067 = (state_34112[(10)]);
var inst_34069 = cljs.core.chunked_seq_QMARK_(inst_34067);
var state_34112__$1 = state_34112;
if(inst_34069){
var statearr_34124_35159 = state_34112__$1;
(statearr_34124_35159[(1)] = (16));

} else {
var statearr_34125_35160 = state_34112__$1;
(statearr_34125_35160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (22))){
var inst_34097 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
if(cljs.core.truth_(inst_34097)){
var statearr_34126_35161 = state_34112__$1;
(statearr_34126_35161[(1)] = (23));

} else {
var statearr_34127_35162 = state_34112__$1;
(statearr_34127_35162[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (6))){
var inst_34091 = (state_34112[(7)]);
var inst_34043 = (state_34112[(8)]);
var inst_34093 = (state_34112[(11)]);
var inst_34091__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34043) : topic_fn.call(null,inst_34043));
var inst_34092 = cljs.core.deref(mults);
var inst_34093__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34092,inst_34091__$1);
var state_34112__$1 = (function (){var statearr_34128 = state_34112;
(statearr_34128[(7)] = inst_34091__$1);

(statearr_34128[(11)] = inst_34093__$1);

return statearr_34128;
})();
if(cljs.core.truth_(inst_34093__$1)){
var statearr_34129_35163 = state_34112__$1;
(statearr_34129_35163[(1)] = (19));

} else {
var statearr_34130_35164 = state_34112__$1;
(statearr_34130_35164[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (25))){
var inst_34102 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
var statearr_34131_35165 = state_34112__$1;
(statearr_34131_35165[(2)] = inst_34102);

(statearr_34131_35165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (17))){
var inst_34067 = (state_34112[(10)]);
var inst_34076 = cljs.core.first(inst_34067);
var inst_34077 = cljs.core.async.muxch_STAR_(inst_34076);
var inst_34078 = cljs.core.async.close_BANG_(inst_34077);
var inst_34079 = cljs.core.next(inst_34067);
var inst_34053 = inst_34079;
var inst_34054 = null;
var inst_34055 = (0);
var inst_34056 = (0);
var state_34112__$1 = (function (){var statearr_34132 = state_34112;
(statearr_34132[(12)] = inst_34055);

(statearr_34132[(13)] = inst_34054);

(statearr_34132[(14)] = inst_34056);

(statearr_34132[(15)] = inst_34078);

(statearr_34132[(16)] = inst_34053);

return statearr_34132;
})();
var statearr_34133_35166 = state_34112__$1;
(statearr_34133_35166[(2)] = null);

(statearr_34133_35166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (3))){
var inst_34110 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34112__$1,inst_34110);
} else {
if((state_val_34113 === (12))){
var inst_34087 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
var statearr_34134_35167 = state_34112__$1;
(statearr_34134_35167[(2)] = inst_34087);

(statearr_34134_35167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (2))){
var state_34112__$1 = state_34112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34112__$1,(4),ch);
} else {
if((state_val_34113 === (23))){
var state_34112__$1 = state_34112;
var statearr_34135_35168 = state_34112__$1;
(statearr_34135_35168[(2)] = null);

(statearr_34135_35168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (19))){
var inst_34043 = (state_34112[(8)]);
var inst_34093 = (state_34112[(11)]);
var inst_34095 = cljs.core.async.muxch_STAR_(inst_34093);
var state_34112__$1 = state_34112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34112__$1,(22),inst_34095,inst_34043);
} else {
if((state_val_34113 === (11))){
var inst_34053 = (state_34112[(16)]);
var inst_34067 = (state_34112[(10)]);
var inst_34067__$1 = cljs.core.seq(inst_34053);
var state_34112__$1 = (function (){var statearr_34136 = state_34112;
(statearr_34136[(10)] = inst_34067__$1);

return statearr_34136;
})();
if(inst_34067__$1){
var statearr_34137_35169 = state_34112__$1;
(statearr_34137_35169[(1)] = (13));

} else {
var statearr_34138_35170 = state_34112__$1;
(statearr_34138_35170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (9))){
var inst_34089 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
var statearr_34139_35171 = state_34112__$1;
(statearr_34139_35171[(2)] = inst_34089);

(statearr_34139_35171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (5))){
var inst_34050 = cljs.core.deref(mults);
var inst_34051 = cljs.core.vals(inst_34050);
var inst_34052 = cljs.core.seq(inst_34051);
var inst_34053 = inst_34052;
var inst_34054 = null;
var inst_34055 = (0);
var inst_34056 = (0);
var state_34112__$1 = (function (){var statearr_34140 = state_34112;
(statearr_34140[(12)] = inst_34055);

(statearr_34140[(13)] = inst_34054);

(statearr_34140[(14)] = inst_34056);

(statearr_34140[(16)] = inst_34053);

return statearr_34140;
})();
var statearr_34141_35172 = state_34112__$1;
(statearr_34141_35172[(2)] = null);

(statearr_34141_35172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (14))){
var state_34112__$1 = state_34112;
var statearr_34145_35173 = state_34112__$1;
(statearr_34145_35173[(2)] = null);

(statearr_34145_35173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (16))){
var inst_34067 = (state_34112[(10)]);
var inst_34071 = cljs.core.chunk_first(inst_34067);
var inst_34072 = cljs.core.chunk_rest(inst_34067);
var inst_34073 = cljs.core.count(inst_34071);
var inst_34053 = inst_34072;
var inst_34054 = inst_34071;
var inst_34055 = inst_34073;
var inst_34056 = (0);
var state_34112__$1 = (function (){var statearr_34146 = state_34112;
(statearr_34146[(12)] = inst_34055);

(statearr_34146[(13)] = inst_34054);

(statearr_34146[(14)] = inst_34056);

(statearr_34146[(16)] = inst_34053);

return statearr_34146;
})();
var statearr_34147_35174 = state_34112__$1;
(statearr_34147_35174[(2)] = null);

(statearr_34147_35174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (10))){
var inst_34055 = (state_34112[(12)]);
var inst_34054 = (state_34112[(13)]);
var inst_34056 = (state_34112[(14)]);
var inst_34053 = (state_34112[(16)]);
var inst_34061 = cljs.core._nth(inst_34054,inst_34056);
var inst_34062 = cljs.core.async.muxch_STAR_(inst_34061);
var inst_34063 = cljs.core.async.close_BANG_(inst_34062);
var inst_34064 = (inst_34056 + (1));
var tmp34142 = inst_34055;
var tmp34143 = inst_34054;
var tmp34144 = inst_34053;
var inst_34053__$1 = tmp34144;
var inst_34054__$1 = tmp34143;
var inst_34055__$1 = tmp34142;
var inst_34056__$1 = inst_34064;
var state_34112__$1 = (function (){var statearr_34148 = state_34112;
(statearr_34148[(17)] = inst_34063);

(statearr_34148[(12)] = inst_34055__$1);

(statearr_34148[(13)] = inst_34054__$1);

(statearr_34148[(14)] = inst_34056__$1);

(statearr_34148[(16)] = inst_34053__$1);

return statearr_34148;
})();
var statearr_34149_35175 = state_34112__$1;
(statearr_34149_35175[(2)] = null);

(statearr_34149_35175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (18))){
var inst_34082 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
var statearr_34150_35176 = state_34112__$1;
(statearr_34150_35176[(2)] = inst_34082);

(statearr_34150_35176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (8))){
var inst_34055 = (state_34112[(12)]);
var inst_34056 = (state_34112[(14)]);
var inst_34058 = (inst_34056 < inst_34055);
var inst_34059 = inst_34058;
var state_34112__$1 = state_34112;
if(cljs.core.truth_(inst_34059)){
var statearr_34151_35177 = state_34112__$1;
(statearr_34151_35177[(1)] = (10));

} else {
var statearr_34152_35178 = state_34112__$1;
(statearr_34152_35178[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34153[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34153[(1)] = (1));

return statearr_34153;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34112){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34112);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34154){var ex__33136__auto__ = e34154;
var statearr_34155_35179 = state_34112;
(statearr_34155_35179[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34112[(4)]))){
var statearr_34156_35180 = state_34112;
(statearr_34156_35180[(1)] = cljs.core.first((state_34112[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35181 = state_34112;
state_34112 = G__35181;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_34157 = f__33165__auto__();
(statearr_34157[(6)] = c__33164__auto___35147);

return statearr_34157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34159 = arguments.length;
switch (G__34159) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34161 = arguments.length;
switch (G__34161) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34163 = arguments.length;
switch (G__34163) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33164__auto___35185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_34206){
var state_val_34207 = (state_34206[(1)]);
if((state_val_34207 === (7))){
var state_34206__$1 = state_34206;
var statearr_34208_35186 = state_34206__$1;
(statearr_34208_35186[(2)] = null);

(statearr_34208_35186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (1))){
var state_34206__$1 = state_34206;
var statearr_34209_35193 = state_34206__$1;
(statearr_34209_35193[(2)] = null);

(statearr_34209_35193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (4))){
var inst_34167 = (state_34206[(7)]);
var inst_34166 = (state_34206[(8)]);
var inst_34169 = (inst_34167 < inst_34166);
var state_34206__$1 = state_34206;
if(cljs.core.truth_(inst_34169)){
var statearr_34210_35194 = state_34206__$1;
(statearr_34210_35194[(1)] = (6));

} else {
var statearr_34211_35195 = state_34206__$1;
(statearr_34211_35195[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (15))){
var inst_34192 = (state_34206[(9)]);
var inst_34197 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34192);
var state_34206__$1 = state_34206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34206__$1,(17),out,inst_34197);
} else {
if((state_val_34207 === (13))){
var inst_34192 = (state_34206[(9)]);
var inst_34192__$1 = (state_34206[(2)]);
var inst_34193 = cljs.core.some(cljs.core.nil_QMARK_,inst_34192__$1);
var state_34206__$1 = (function (){var statearr_34212 = state_34206;
(statearr_34212[(9)] = inst_34192__$1);

return statearr_34212;
})();
if(cljs.core.truth_(inst_34193)){
var statearr_34213_35196 = state_34206__$1;
(statearr_34213_35196[(1)] = (14));

} else {
var statearr_34214_35197 = state_34206__$1;
(statearr_34214_35197[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (6))){
var state_34206__$1 = state_34206;
var statearr_34215_35199 = state_34206__$1;
(statearr_34215_35199[(2)] = null);

(statearr_34215_35199[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (17))){
var inst_34199 = (state_34206[(2)]);
var state_34206__$1 = (function (){var statearr_34217 = state_34206;
(statearr_34217[(10)] = inst_34199);

return statearr_34217;
})();
var statearr_34218_35200 = state_34206__$1;
(statearr_34218_35200[(2)] = null);

(statearr_34218_35200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (3))){
var inst_34204 = (state_34206[(2)]);
var state_34206__$1 = state_34206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34206__$1,inst_34204);
} else {
if((state_val_34207 === (12))){
var _ = (function (){var statearr_34219 = state_34206;
(statearr_34219[(4)] = cljs.core.rest((state_34206[(4)])));

return statearr_34219;
})();
var state_34206__$1 = state_34206;
var ex34216 = (state_34206__$1[(2)]);
var statearr_34220_35205 = state_34206__$1;
(statearr_34220_35205[(5)] = ex34216);


if((ex34216 instanceof Object)){
var statearr_34221_35206 = state_34206__$1;
(statearr_34221_35206[(1)] = (11));

(statearr_34221_35206[(5)] = null);

} else {
throw ex34216;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (2))){
var inst_34165 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34166 = cnt;
var inst_34167 = (0);
var state_34206__$1 = (function (){var statearr_34222 = state_34206;
(statearr_34222[(11)] = inst_34165);

(statearr_34222[(7)] = inst_34167);

(statearr_34222[(8)] = inst_34166);

return statearr_34222;
})();
var statearr_34223_35207 = state_34206__$1;
(statearr_34223_35207[(2)] = null);

(statearr_34223_35207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (11))){
var inst_34171 = (state_34206[(2)]);
var inst_34172 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34206__$1 = (function (){var statearr_34224 = state_34206;
(statearr_34224[(12)] = inst_34171);

return statearr_34224;
})();
var statearr_34225_35208 = state_34206__$1;
(statearr_34225_35208[(2)] = inst_34172);

(statearr_34225_35208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (9))){
var inst_34167 = (state_34206[(7)]);
var _ = (function (){var statearr_34226 = state_34206;
(statearr_34226[(4)] = cljs.core.cons((12),(state_34206[(4)])));

return statearr_34226;
})();
var inst_34178 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34167) : chs__$1.call(null,inst_34167));
var inst_34179 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34167) : done.call(null,inst_34167));
var inst_34180 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34178,inst_34179);
var ___$1 = (function (){var statearr_34227 = state_34206;
(statearr_34227[(4)] = cljs.core.rest((state_34206[(4)])));

return statearr_34227;
})();
var state_34206__$1 = state_34206;
var statearr_34228_35209 = state_34206__$1;
(statearr_34228_35209[(2)] = inst_34180);

(statearr_34228_35209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (5))){
var inst_34190 = (state_34206[(2)]);
var state_34206__$1 = (function (){var statearr_34229 = state_34206;
(statearr_34229[(13)] = inst_34190);

return statearr_34229;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34206__$1,(13),dchan);
} else {
if((state_val_34207 === (14))){
var inst_34195 = cljs.core.async.close_BANG_(out);
var state_34206__$1 = state_34206;
var statearr_34230_35210 = state_34206__$1;
(statearr_34230_35210[(2)] = inst_34195);

(statearr_34230_35210[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (16))){
var inst_34202 = (state_34206[(2)]);
var state_34206__$1 = state_34206;
var statearr_34231_35211 = state_34206__$1;
(statearr_34231_35211[(2)] = inst_34202);

(statearr_34231_35211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (10))){
var inst_34167 = (state_34206[(7)]);
var inst_34183 = (state_34206[(2)]);
var inst_34184 = (inst_34167 + (1));
var inst_34167__$1 = inst_34184;
var state_34206__$1 = (function (){var statearr_34232 = state_34206;
(statearr_34232[(14)] = inst_34183);

(statearr_34232[(7)] = inst_34167__$1);

return statearr_34232;
})();
var statearr_34233_35212 = state_34206__$1;
(statearr_34233_35212[(2)] = null);

(statearr_34233_35212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (8))){
var inst_34188 = (state_34206[(2)]);
var state_34206__$1 = state_34206;
var statearr_34234_35213 = state_34206__$1;
(statearr_34234_35213[(2)] = inst_34188);

(statearr_34234_35213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34235[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34235[(1)] = (1));

return statearr_34235;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34206){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34206);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34236){var ex__33136__auto__ = e34236;
var statearr_34237_35214 = state_34206;
(statearr_34237_35214[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34206[(4)]))){
var statearr_34238_35215 = state_34206;
(statearr_34238_35215[(1)] = cljs.core.first((state_34206[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35216 = state_34206;
state_34206 = G__35216;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_34239 = f__33165__auto__();
(statearr_34239[(6)] = c__33164__auto___35185);

return statearr_34239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34242 = arguments.length;
switch (G__34242) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33164__auto___35221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_34274){
var state_val_34275 = (state_34274[(1)]);
if((state_val_34275 === (7))){
var inst_34254 = (state_34274[(7)]);
var inst_34253 = (state_34274[(8)]);
var inst_34253__$1 = (state_34274[(2)]);
var inst_34254__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34253__$1,(0),null);
var inst_34255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34253__$1,(1),null);
var inst_34256 = (inst_34254__$1 == null);
var state_34274__$1 = (function (){var statearr_34276 = state_34274;
(statearr_34276[(7)] = inst_34254__$1);

(statearr_34276[(8)] = inst_34253__$1);

(statearr_34276[(9)] = inst_34255);

return statearr_34276;
})();
if(cljs.core.truth_(inst_34256)){
var statearr_34277_35222 = state_34274__$1;
(statearr_34277_35222[(1)] = (8));

} else {
var statearr_34278_35223 = state_34274__$1;
(statearr_34278_35223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (1))){
var inst_34243 = cljs.core.vec(chs);
var inst_34244 = inst_34243;
var state_34274__$1 = (function (){var statearr_34279 = state_34274;
(statearr_34279[(10)] = inst_34244);

return statearr_34279;
})();
var statearr_34280_35224 = state_34274__$1;
(statearr_34280_35224[(2)] = null);

(statearr_34280_35224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (4))){
var inst_34244 = (state_34274[(10)]);
var state_34274__$1 = state_34274;
return cljs.core.async.ioc_alts_BANG_(state_34274__$1,(7),inst_34244);
} else {
if((state_val_34275 === (6))){
var inst_34270 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34281_35225 = state_34274__$1;
(statearr_34281_35225[(2)] = inst_34270);

(statearr_34281_35225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (3))){
var inst_34272 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34274__$1,inst_34272);
} else {
if((state_val_34275 === (2))){
var inst_34244 = (state_34274[(10)]);
var inst_34246 = cljs.core.count(inst_34244);
var inst_34247 = (inst_34246 > (0));
var state_34274__$1 = state_34274;
if(cljs.core.truth_(inst_34247)){
var statearr_34283_35226 = state_34274__$1;
(statearr_34283_35226[(1)] = (4));

} else {
var statearr_34284_35227 = state_34274__$1;
(statearr_34284_35227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (11))){
var inst_34244 = (state_34274[(10)]);
var inst_34263 = (state_34274[(2)]);
var tmp34282 = inst_34244;
var inst_34244__$1 = tmp34282;
var state_34274__$1 = (function (){var statearr_34285 = state_34274;
(statearr_34285[(10)] = inst_34244__$1);

(statearr_34285[(11)] = inst_34263);

return statearr_34285;
})();
var statearr_34286_35229 = state_34274__$1;
(statearr_34286_35229[(2)] = null);

(statearr_34286_35229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (9))){
var inst_34254 = (state_34274[(7)]);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34274__$1,(11),out,inst_34254);
} else {
if((state_val_34275 === (5))){
var inst_34268 = cljs.core.async.close_BANG_(out);
var state_34274__$1 = state_34274;
var statearr_34287_35230 = state_34274__$1;
(statearr_34287_35230[(2)] = inst_34268);

(statearr_34287_35230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (10))){
var inst_34266 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34288_35231 = state_34274__$1;
(statearr_34288_35231[(2)] = inst_34266);

(statearr_34288_35231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (8))){
var inst_34254 = (state_34274[(7)]);
var inst_34244 = (state_34274[(10)]);
var inst_34253 = (state_34274[(8)]);
var inst_34255 = (state_34274[(9)]);
var inst_34258 = (function (){var cs = inst_34244;
var vec__34249 = inst_34253;
var v = inst_34254;
var c = inst_34255;
return (function (p1__34240_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34240_SHARP_);
});
})();
var inst_34259 = cljs.core.filterv(inst_34258,inst_34244);
var inst_34244__$1 = inst_34259;
var state_34274__$1 = (function (){var statearr_34289 = state_34274;
(statearr_34289[(10)] = inst_34244__$1);

return statearr_34289;
})();
var statearr_34290_35232 = state_34274__$1;
(statearr_34290_35232[(2)] = null);

(statearr_34290_35232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34291 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34291[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34291[(1)] = (1));

return statearr_34291;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34274){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34274);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34292){var ex__33136__auto__ = e34292;
var statearr_34293_35233 = state_34274;
(statearr_34293_35233[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34274[(4)]))){
var statearr_34294_35234 = state_34274;
(statearr_34294_35234[(1)] = cljs.core.first((state_34274[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35235 = state_34274;
state_34274 = G__35235;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_34295 = f__33165__auto__();
(statearr_34295[(6)] = c__33164__auto___35221);

return statearr_34295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34297 = arguments.length;
switch (G__34297) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33164__auto___35254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_34321){
var state_val_34322 = (state_34321[(1)]);
if((state_val_34322 === (7))){
var inst_34303 = (state_34321[(7)]);
var inst_34303__$1 = (state_34321[(2)]);
var inst_34304 = (inst_34303__$1 == null);
var inst_34305 = cljs.core.not(inst_34304);
var state_34321__$1 = (function (){var statearr_34323 = state_34321;
(statearr_34323[(7)] = inst_34303__$1);

return statearr_34323;
})();
if(inst_34305){
var statearr_34324_35255 = state_34321__$1;
(statearr_34324_35255[(1)] = (8));

} else {
var statearr_34325_35256 = state_34321__$1;
(statearr_34325_35256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (1))){
var inst_34298 = (0);
var state_34321__$1 = (function (){var statearr_34326 = state_34321;
(statearr_34326[(8)] = inst_34298);

return statearr_34326;
})();
var statearr_34327_35257 = state_34321__$1;
(statearr_34327_35257[(2)] = null);

(statearr_34327_35257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (4))){
var state_34321__$1 = state_34321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34321__$1,(7),ch);
} else {
if((state_val_34322 === (6))){
var inst_34316 = (state_34321[(2)]);
var state_34321__$1 = state_34321;
var statearr_34328_35258 = state_34321__$1;
(statearr_34328_35258[(2)] = inst_34316);

(statearr_34328_35258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (3))){
var inst_34318 = (state_34321[(2)]);
var inst_34319 = cljs.core.async.close_BANG_(out);
var state_34321__$1 = (function (){var statearr_34329 = state_34321;
(statearr_34329[(9)] = inst_34318);

return statearr_34329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34321__$1,inst_34319);
} else {
if((state_val_34322 === (2))){
var inst_34298 = (state_34321[(8)]);
var inst_34300 = (inst_34298 < n);
var state_34321__$1 = state_34321;
if(cljs.core.truth_(inst_34300)){
var statearr_34330_35259 = state_34321__$1;
(statearr_34330_35259[(1)] = (4));

} else {
var statearr_34331_35260 = state_34321__$1;
(statearr_34331_35260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (11))){
var inst_34298 = (state_34321[(8)]);
var inst_34308 = (state_34321[(2)]);
var inst_34309 = (inst_34298 + (1));
var inst_34298__$1 = inst_34309;
var state_34321__$1 = (function (){var statearr_34332 = state_34321;
(statearr_34332[(10)] = inst_34308);

(statearr_34332[(8)] = inst_34298__$1);

return statearr_34332;
})();
var statearr_34333_35261 = state_34321__$1;
(statearr_34333_35261[(2)] = null);

(statearr_34333_35261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (9))){
var state_34321__$1 = state_34321;
var statearr_34334_35262 = state_34321__$1;
(statearr_34334_35262[(2)] = null);

(statearr_34334_35262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (5))){
var state_34321__$1 = state_34321;
var statearr_34335_35263 = state_34321__$1;
(statearr_34335_35263[(2)] = null);

(statearr_34335_35263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (10))){
var inst_34313 = (state_34321[(2)]);
var state_34321__$1 = state_34321;
var statearr_34336_35264 = state_34321__$1;
(statearr_34336_35264[(2)] = inst_34313);

(statearr_34336_35264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (8))){
var inst_34303 = (state_34321[(7)]);
var state_34321__$1 = state_34321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34321__$1,(11),out,inst_34303);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34337[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34337[(1)] = (1));

return statearr_34337;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34321){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34321);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34338){var ex__33136__auto__ = e34338;
var statearr_34339_35265 = state_34321;
(statearr_34339_35265[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34321[(4)]))){
var statearr_34340_35266 = state_34321;
(statearr_34340_35266[(1)] = cljs.core.first((state_34321[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35267 = state_34321;
state_34321 = G__35267;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_34341 = f__33165__auto__();
(statearr_34341[(6)] = c__33164__auto___35254);

return statearr_34341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34343 = (function (f,ch,meta34344){
this.f = f;
this.ch = ch;
this.meta34344 = meta34344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34345,meta34344__$1){
var self__ = this;
var _34345__$1 = this;
return (new cljs.core.async.t_cljs$core$async34343(self__.f,self__.ch,meta34344__$1));
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34345){
var self__ = this;
var _34345__$1 = this;
return self__.meta34344;
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34346 = (function (f,ch,meta34344,_,fn1,meta34347){
this.f = f;
this.ch = ch;
this.meta34344 = meta34344;
this._ = _;
this.fn1 = fn1;
this.meta34347 = meta34347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34348,meta34347__$1){
var self__ = this;
var _34348__$1 = this;
return (new cljs.core.async.t_cljs$core$async34346(self__.f,self__.ch,self__.meta34344,self__._,self__.fn1,meta34347__$1));
}));

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34348){
var self__ = this;
var _34348__$1 = this;
return self__.meta34347;
}));

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34342_SHARP_){
var G__34349 = (((p1__34342_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34342_SHARP_) : self__.f.call(null,p1__34342_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34349) : f1.call(null,G__34349));
});
}));

(cljs.core.async.t_cljs$core$async34346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34344","meta34344",-506745894,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34343","cljs.core.async/t_cljs$core$async34343",-149666189,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34347","meta34347",-471984320,null)], null);
}));

(cljs.core.async.t_cljs$core$async34346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34346");

(cljs.core.async.t_cljs$core$async34346.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34346.
 */
cljs.core.async.__GT_t_cljs$core$async34346 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34346(f__$1,ch__$1,meta34344__$1,___$2,fn1__$1,meta34347){
return (new cljs.core.async.t_cljs$core$async34346(f__$1,ch__$1,meta34344__$1,___$2,fn1__$1,meta34347));
});

}

return (new cljs.core.async.t_cljs$core$async34346(self__.f,self__.ch,self__.meta34344,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34350 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34350) : self__.f.call(null,G__34350));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34344","meta34344",-506745894,null)], null);
}));

(cljs.core.async.t_cljs$core$async34343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34343");

(cljs.core.async.t_cljs$core$async34343.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34343.
 */
cljs.core.async.__GT_t_cljs$core$async34343 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34343(f__$1,ch__$1,meta34344){
return (new cljs.core.async.t_cljs$core$async34343(f__$1,ch__$1,meta34344));
});

}

return (new cljs.core.async.t_cljs$core$async34343(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34351 = (function (f,ch,meta34352){
this.f = f;
this.ch = ch;
this.meta34352 = meta34352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34353,meta34352__$1){
var self__ = this;
var _34353__$1 = this;
return (new cljs.core.async.t_cljs$core$async34351(self__.f,self__.ch,meta34352__$1));
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34353){
var self__ = this;
var _34353__$1 = this;
return self__.meta34352;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34352","meta34352",58586617,null)], null);
}));

(cljs.core.async.t_cljs$core$async34351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34351");

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34351.
 */
cljs.core.async.__GT_t_cljs$core$async34351 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34351(f__$1,ch__$1,meta34352){
return (new cljs.core.async.t_cljs$core$async34351(f__$1,ch__$1,meta34352));
});

}

return (new cljs.core.async.t_cljs$core$async34351(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34354 = (function (p,ch,meta34355){
this.p = p;
this.ch = ch;
this.meta34355 = meta34355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34356,meta34355__$1){
var self__ = this;
var _34356__$1 = this;
return (new cljs.core.async.t_cljs$core$async34354(self__.p,self__.ch,meta34355__$1));
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34356){
var self__ = this;
var _34356__$1 = this;
return self__.meta34355;
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34355","meta34355",-157438434,null)], null);
}));

(cljs.core.async.t_cljs$core$async34354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34354");

(cljs.core.async.t_cljs$core$async34354.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34354.
 */
cljs.core.async.__GT_t_cljs$core$async34354 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34354(p__$1,ch__$1,meta34355){
return (new cljs.core.async.t_cljs$core$async34354(p__$1,ch__$1,meta34355));
});

}

return (new cljs.core.async.t_cljs$core$async34354(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34358 = arguments.length;
switch (G__34358) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33164__auto___35315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_34379){
var state_val_34380 = (state_34379[(1)]);
if((state_val_34380 === (7))){
var inst_34375 = (state_34379[(2)]);
var state_34379__$1 = state_34379;
var statearr_34381_35316 = state_34379__$1;
(statearr_34381_35316[(2)] = inst_34375);

(statearr_34381_35316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (1))){
var state_34379__$1 = state_34379;
var statearr_34382_35317 = state_34379__$1;
(statearr_34382_35317[(2)] = null);

(statearr_34382_35317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (4))){
var inst_34361 = (state_34379[(7)]);
var inst_34361__$1 = (state_34379[(2)]);
var inst_34362 = (inst_34361__$1 == null);
var state_34379__$1 = (function (){var statearr_34383 = state_34379;
(statearr_34383[(7)] = inst_34361__$1);

return statearr_34383;
})();
if(cljs.core.truth_(inst_34362)){
var statearr_34384_35318 = state_34379__$1;
(statearr_34384_35318[(1)] = (5));

} else {
var statearr_34385_35319 = state_34379__$1;
(statearr_34385_35319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (6))){
var inst_34361 = (state_34379[(7)]);
var inst_34366 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34361) : p.call(null,inst_34361));
var state_34379__$1 = state_34379;
if(cljs.core.truth_(inst_34366)){
var statearr_34386_35320 = state_34379__$1;
(statearr_34386_35320[(1)] = (8));

} else {
var statearr_34387_35321 = state_34379__$1;
(statearr_34387_35321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (3))){
var inst_34377 = (state_34379[(2)]);
var state_34379__$1 = state_34379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34379__$1,inst_34377);
} else {
if((state_val_34380 === (2))){
var state_34379__$1 = state_34379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34379__$1,(4),ch);
} else {
if((state_val_34380 === (11))){
var inst_34369 = (state_34379[(2)]);
var state_34379__$1 = state_34379;
var statearr_34388_35322 = state_34379__$1;
(statearr_34388_35322[(2)] = inst_34369);

(statearr_34388_35322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (9))){
var state_34379__$1 = state_34379;
var statearr_34389_35323 = state_34379__$1;
(statearr_34389_35323[(2)] = null);

(statearr_34389_35323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (5))){
var inst_34364 = cljs.core.async.close_BANG_(out);
var state_34379__$1 = state_34379;
var statearr_34390_35324 = state_34379__$1;
(statearr_34390_35324[(2)] = inst_34364);

(statearr_34390_35324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (10))){
var inst_34372 = (state_34379[(2)]);
var state_34379__$1 = (function (){var statearr_34391 = state_34379;
(statearr_34391[(8)] = inst_34372);

return statearr_34391;
})();
var statearr_34392_35325 = state_34379__$1;
(statearr_34392_35325[(2)] = null);

(statearr_34392_35325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (8))){
var inst_34361 = (state_34379[(7)]);
var state_34379__$1 = state_34379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34379__$1,(11),out,inst_34361);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34393 = [null,null,null,null,null,null,null,null,null];
(statearr_34393[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34393[(1)] = (1));

return statearr_34393;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34379){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34379);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34394){var ex__33136__auto__ = e34394;
var statearr_34395_35326 = state_34379;
(statearr_34395_35326[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34379[(4)]))){
var statearr_34396_35327 = state_34379;
(statearr_34396_35327[(1)] = cljs.core.first((state_34379[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35328 = state_34379;
state_34379 = G__35328;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_34397 = f__33165__auto__();
(statearr_34397[(6)] = c__33164__auto___35315);

return statearr_34397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34399 = arguments.length;
switch (G__34399) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_34461){
var state_val_34462 = (state_34461[(1)]);
if((state_val_34462 === (7))){
var inst_34457 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
var statearr_34463_35330 = state_34461__$1;
(statearr_34463_35330[(2)] = inst_34457);

(statearr_34463_35330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (20))){
var inst_34427 = (state_34461[(7)]);
var inst_34438 = (state_34461[(2)]);
var inst_34439 = cljs.core.next(inst_34427);
var inst_34413 = inst_34439;
var inst_34414 = null;
var inst_34415 = (0);
var inst_34416 = (0);
var state_34461__$1 = (function (){var statearr_34464 = state_34461;
(statearr_34464[(8)] = inst_34438);

(statearr_34464[(9)] = inst_34414);

(statearr_34464[(10)] = inst_34413);

(statearr_34464[(11)] = inst_34416);

(statearr_34464[(12)] = inst_34415);

return statearr_34464;
})();
var statearr_34465_35331 = state_34461__$1;
(statearr_34465_35331[(2)] = null);

(statearr_34465_35331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (1))){
var state_34461__$1 = state_34461;
var statearr_34466_35332 = state_34461__$1;
(statearr_34466_35332[(2)] = null);

(statearr_34466_35332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (4))){
var inst_34402 = (state_34461[(13)]);
var inst_34402__$1 = (state_34461[(2)]);
var inst_34403 = (inst_34402__$1 == null);
var state_34461__$1 = (function (){var statearr_34467 = state_34461;
(statearr_34467[(13)] = inst_34402__$1);

return statearr_34467;
})();
if(cljs.core.truth_(inst_34403)){
var statearr_34468_35333 = state_34461__$1;
(statearr_34468_35333[(1)] = (5));

} else {
var statearr_34469_35334 = state_34461__$1;
(statearr_34469_35334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (15))){
var state_34461__$1 = state_34461;
var statearr_34473_35352 = state_34461__$1;
(statearr_34473_35352[(2)] = null);

(statearr_34473_35352[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (21))){
var state_34461__$1 = state_34461;
var statearr_34474_35353 = state_34461__$1;
(statearr_34474_35353[(2)] = null);

(statearr_34474_35353[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (13))){
var inst_34414 = (state_34461[(9)]);
var inst_34413 = (state_34461[(10)]);
var inst_34416 = (state_34461[(11)]);
var inst_34415 = (state_34461[(12)]);
var inst_34423 = (state_34461[(2)]);
var inst_34424 = (inst_34416 + (1));
var tmp34470 = inst_34414;
var tmp34471 = inst_34413;
var tmp34472 = inst_34415;
var inst_34413__$1 = tmp34471;
var inst_34414__$1 = tmp34470;
var inst_34415__$1 = tmp34472;
var inst_34416__$1 = inst_34424;
var state_34461__$1 = (function (){var statearr_34475 = state_34461;
(statearr_34475[(9)] = inst_34414__$1);

(statearr_34475[(10)] = inst_34413__$1);

(statearr_34475[(14)] = inst_34423);

(statearr_34475[(11)] = inst_34416__$1);

(statearr_34475[(12)] = inst_34415__$1);

return statearr_34475;
})();
var statearr_34476_35354 = state_34461__$1;
(statearr_34476_35354[(2)] = null);

(statearr_34476_35354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (22))){
var state_34461__$1 = state_34461;
var statearr_34477_35355 = state_34461__$1;
(statearr_34477_35355[(2)] = null);

(statearr_34477_35355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (6))){
var inst_34402 = (state_34461[(13)]);
var inst_34411 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34402) : f.call(null,inst_34402));
var inst_34412 = cljs.core.seq(inst_34411);
var inst_34413 = inst_34412;
var inst_34414 = null;
var inst_34415 = (0);
var inst_34416 = (0);
var state_34461__$1 = (function (){var statearr_34478 = state_34461;
(statearr_34478[(9)] = inst_34414);

(statearr_34478[(10)] = inst_34413);

(statearr_34478[(11)] = inst_34416);

(statearr_34478[(12)] = inst_34415);

return statearr_34478;
})();
var statearr_34479_35356 = state_34461__$1;
(statearr_34479_35356[(2)] = null);

(statearr_34479_35356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (17))){
var inst_34427 = (state_34461[(7)]);
var inst_34431 = cljs.core.chunk_first(inst_34427);
var inst_34432 = cljs.core.chunk_rest(inst_34427);
var inst_34433 = cljs.core.count(inst_34431);
var inst_34413 = inst_34432;
var inst_34414 = inst_34431;
var inst_34415 = inst_34433;
var inst_34416 = (0);
var state_34461__$1 = (function (){var statearr_34480 = state_34461;
(statearr_34480[(9)] = inst_34414);

(statearr_34480[(10)] = inst_34413);

(statearr_34480[(11)] = inst_34416);

(statearr_34480[(12)] = inst_34415);

return statearr_34480;
})();
var statearr_34481_35357 = state_34461__$1;
(statearr_34481_35357[(2)] = null);

(statearr_34481_35357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (3))){
var inst_34459 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34461__$1,inst_34459);
} else {
if((state_val_34462 === (12))){
var inst_34447 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
var statearr_34482_35358 = state_34461__$1;
(statearr_34482_35358[(2)] = inst_34447);

(statearr_34482_35358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (2))){
var state_34461__$1 = state_34461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34461__$1,(4),in$);
} else {
if((state_val_34462 === (23))){
var inst_34455 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
var statearr_34483_35359 = state_34461__$1;
(statearr_34483_35359[(2)] = inst_34455);

(statearr_34483_35359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (19))){
var inst_34442 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
var statearr_34484_35360 = state_34461__$1;
(statearr_34484_35360[(2)] = inst_34442);

(statearr_34484_35360[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (11))){
var inst_34427 = (state_34461[(7)]);
var inst_34413 = (state_34461[(10)]);
var inst_34427__$1 = cljs.core.seq(inst_34413);
var state_34461__$1 = (function (){var statearr_34485 = state_34461;
(statearr_34485[(7)] = inst_34427__$1);

return statearr_34485;
})();
if(inst_34427__$1){
var statearr_34486_35361 = state_34461__$1;
(statearr_34486_35361[(1)] = (14));

} else {
var statearr_34487_35362 = state_34461__$1;
(statearr_34487_35362[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (9))){
var inst_34449 = (state_34461[(2)]);
var inst_34450 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34461__$1 = (function (){var statearr_34488 = state_34461;
(statearr_34488[(15)] = inst_34449);

return statearr_34488;
})();
if(cljs.core.truth_(inst_34450)){
var statearr_34489_35363 = state_34461__$1;
(statearr_34489_35363[(1)] = (21));

} else {
var statearr_34490_35364 = state_34461__$1;
(statearr_34490_35364[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (5))){
var inst_34405 = cljs.core.async.close_BANG_(out);
var state_34461__$1 = state_34461;
var statearr_34491_35365 = state_34461__$1;
(statearr_34491_35365[(2)] = inst_34405);

(statearr_34491_35365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (14))){
var inst_34427 = (state_34461[(7)]);
var inst_34429 = cljs.core.chunked_seq_QMARK_(inst_34427);
var state_34461__$1 = state_34461;
if(inst_34429){
var statearr_34492_35366 = state_34461__$1;
(statearr_34492_35366[(1)] = (17));

} else {
var statearr_34493_35367 = state_34461__$1;
(statearr_34493_35367[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (16))){
var inst_34445 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
var statearr_34494_35368 = state_34461__$1;
(statearr_34494_35368[(2)] = inst_34445);

(statearr_34494_35368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (10))){
var inst_34414 = (state_34461[(9)]);
var inst_34416 = (state_34461[(11)]);
var inst_34421 = cljs.core._nth(inst_34414,inst_34416);
var state_34461__$1 = state_34461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34461__$1,(13),out,inst_34421);
} else {
if((state_val_34462 === (18))){
var inst_34427 = (state_34461[(7)]);
var inst_34436 = cljs.core.first(inst_34427);
var state_34461__$1 = state_34461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34461__$1,(20),out,inst_34436);
} else {
if((state_val_34462 === (8))){
var inst_34416 = (state_34461[(11)]);
var inst_34415 = (state_34461[(12)]);
var inst_34418 = (inst_34416 < inst_34415);
var inst_34419 = inst_34418;
var state_34461__$1 = state_34461;
if(cljs.core.truth_(inst_34419)){
var statearr_34495_35369 = state_34461__$1;
(statearr_34495_35369[(1)] = (10));

} else {
var statearr_34496_35370 = state_34461__$1;
(statearr_34496_35370[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33133__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33133__auto____0 = (function (){
var statearr_34497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34497[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33133__auto__);

(statearr_34497[(1)] = (1));

return statearr_34497;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33133__auto____1 = (function (state_34461){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34461);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34498){var ex__33136__auto__ = e34498;
var statearr_34499_35371 = state_34461;
(statearr_34499_35371[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34461[(4)]))){
var statearr_34500_35372 = state_34461;
(statearr_34500_35372[(1)] = cljs.core.first((state_34461[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35373 = state_34461;
state_34461 = G__35373;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33133__auto__ = function(state_34461){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33133__auto____1.call(this,state_34461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33133__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33133__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_34501 = f__33165__auto__();
(statearr_34501[(6)] = c__33164__auto__);

return statearr_34501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));

return c__33164__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34503 = arguments.length;
switch (G__34503) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34505 = arguments.length;
switch (G__34505) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34507 = arguments.length;
switch (G__34507) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33164__auto___35377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_34531){
var state_val_34532 = (state_34531[(1)]);
if((state_val_34532 === (7))){
var inst_34526 = (state_34531[(2)]);
var state_34531__$1 = state_34531;
var statearr_34533_35378 = state_34531__$1;
(statearr_34533_35378[(2)] = inst_34526);

(statearr_34533_35378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (1))){
var inst_34508 = null;
var state_34531__$1 = (function (){var statearr_34534 = state_34531;
(statearr_34534[(7)] = inst_34508);

return statearr_34534;
})();
var statearr_34535_35379 = state_34531__$1;
(statearr_34535_35379[(2)] = null);

(statearr_34535_35379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (4))){
var inst_34511 = (state_34531[(8)]);
var inst_34511__$1 = (state_34531[(2)]);
var inst_34512 = (inst_34511__$1 == null);
var inst_34513 = cljs.core.not(inst_34512);
var state_34531__$1 = (function (){var statearr_34536 = state_34531;
(statearr_34536[(8)] = inst_34511__$1);

return statearr_34536;
})();
if(inst_34513){
var statearr_34537_35380 = state_34531__$1;
(statearr_34537_35380[(1)] = (5));

} else {
var statearr_34538_35381 = state_34531__$1;
(statearr_34538_35381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (6))){
var state_34531__$1 = state_34531;
var statearr_34539_35382 = state_34531__$1;
(statearr_34539_35382[(2)] = null);

(statearr_34539_35382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (3))){
var inst_34528 = (state_34531[(2)]);
var inst_34529 = cljs.core.async.close_BANG_(out);
var state_34531__$1 = (function (){var statearr_34540 = state_34531;
(statearr_34540[(9)] = inst_34528);

return statearr_34540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34531__$1,inst_34529);
} else {
if((state_val_34532 === (2))){
var state_34531__$1 = state_34531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34531__$1,(4),ch);
} else {
if((state_val_34532 === (11))){
var inst_34511 = (state_34531[(8)]);
var inst_34520 = (state_34531[(2)]);
var inst_34508 = inst_34511;
var state_34531__$1 = (function (){var statearr_34541 = state_34531;
(statearr_34541[(10)] = inst_34520);

(statearr_34541[(7)] = inst_34508);

return statearr_34541;
})();
var statearr_34542_35383 = state_34531__$1;
(statearr_34542_35383[(2)] = null);

(statearr_34542_35383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (9))){
var inst_34511 = (state_34531[(8)]);
var state_34531__$1 = state_34531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34531__$1,(11),out,inst_34511);
} else {
if((state_val_34532 === (5))){
var inst_34511 = (state_34531[(8)]);
var inst_34508 = (state_34531[(7)]);
var inst_34515 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34511,inst_34508);
var state_34531__$1 = state_34531;
if(inst_34515){
var statearr_34544_35384 = state_34531__$1;
(statearr_34544_35384[(1)] = (8));

} else {
var statearr_34545_35385 = state_34531__$1;
(statearr_34545_35385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (10))){
var inst_34523 = (state_34531[(2)]);
var state_34531__$1 = state_34531;
var statearr_34546_35386 = state_34531__$1;
(statearr_34546_35386[(2)] = inst_34523);

(statearr_34546_35386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (8))){
var inst_34508 = (state_34531[(7)]);
var tmp34543 = inst_34508;
var inst_34508__$1 = tmp34543;
var state_34531__$1 = (function (){var statearr_34547 = state_34531;
(statearr_34547[(7)] = inst_34508__$1);

return statearr_34547;
})();
var statearr_34548_35387 = state_34531__$1;
(statearr_34548_35387[(2)] = null);

(statearr_34548_35387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34549 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34549[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34549[(1)] = (1));

return statearr_34549;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34531){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34531);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34550){var ex__33136__auto__ = e34550;
var statearr_34551_35388 = state_34531;
(statearr_34551_35388[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34531[(4)]))){
var statearr_34552_35389 = state_34531;
(statearr_34552_35389[(1)] = cljs.core.first((state_34531[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35390 = state_34531;
state_34531 = G__35390;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_34553 = f__33165__auto__();
(statearr_34553[(6)] = c__33164__auto___35377);

return statearr_34553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34555 = arguments.length;
switch (G__34555) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33164__auto___35392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_34593){
var state_val_34594 = (state_34593[(1)]);
if((state_val_34594 === (7))){
var inst_34589 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34595_35393 = state_34593__$1;
(statearr_34595_35393[(2)] = inst_34589);

(statearr_34595_35393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (1))){
var inst_34556 = (new Array(n));
var inst_34557 = inst_34556;
var inst_34558 = (0);
var state_34593__$1 = (function (){var statearr_34596 = state_34593;
(statearr_34596[(7)] = inst_34558);

(statearr_34596[(8)] = inst_34557);

return statearr_34596;
})();
var statearr_34597_35394 = state_34593__$1;
(statearr_34597_35394[(2)] = null);

(statearr_34597_35394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (4))){
var inst_34561 = (state_34593[(9)]);
var inst_34561__$1 = (state_34593[(2)]);
var inst_34562 = (inst_34561__$1 == null);
var inst_34563 = cljs.core.not(inst_34562);
var state_34593__$1 = (function (){var statearr_34598 = state_34593;
(statearr_34598[(9)] = inst_34561__$1);

return statearr_34598;
})();
if(inst_34563){
var statearr_34599_35395 = state_34593__$1;
(statearr_34599_35395[(1)] = (5));

} else {
var statearr_34600_35396 = state_34593__$1;
(statearr_34600_35396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (15))){
var inst_34583 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34601_35397 = state_34593__$1;
(statearr_34601_35397[(2)] = inst_34583);

(statearr_34601_35397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (13))){
var state_34593__$1 = state_34593;
var statearr_34602_35448 = state_34593__$1;
(statearr_34602_35448[(2)] = null);

(statearr_34602_35448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (6))){
var inst_34558 = (state_34593[(7)]);
var inst_34579 = (inst_34558 > (0));
var state_34593__$1 = state_34593;
if(cljs.core.truth_(inst_34579)){
var statearr_34603_35449 = state_34593__$1;
(statearr_34603_35449[(1)] = (12));

} else {
var statearr_34604_35450 = state_34593__$1;
(statearr_34604_35450[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (3))){
var inst_34591 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34593__$1,inst_34591);
} else {
if((state_val_34594 === (12))){
var inst_34557 = (state_34593[(8)]);
var inst_34581 = cljs.core.vec(inst_34557);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34593__$1,(15),out,inst_34581);
} else {
if((state_val_34594 === (2))){
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34593__$1,(4),ch);
} else {
if((state_val_34594 === (11))){
var inst_34573 = (state_34593[(2)]);
var inst_34574 = (new Array(n));
var inst_34557 = inst_34574;
var inst_34558 = (0);
var state_34593__$1 = (function (){var statearr_34605 = state_34593;
(statearr_34605[(7)] = inst_34558);

(statearr_34605[(8)] = inst_34557);

(statearr_34605[(10)] = inst_34573);

return statearr_34605;
})();
var statearr_34606_35451 = state_34593__$1;
(statearr_34606_35451[(2)] = null);

(statearr_34606_35451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (9))){
var inst_34557 = (state_34593[(8)]);
var inst_34571 = cljs.core.vec(inst_34557);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34593__$1,(11),out,inst_34571);
} else {
if((state_val_34594 === (5))){
var inst_34558 = (state_34593[(7)]);
var inst_34561 = (state_34593[(9)]);
var inst_34557 = (state_34593[(8)]);
var inst_34566 = (state_34593[(11)]);
var inst_34565 = (inst_34557[inst_34558] = inst_34561);
var inst_34566__$1 = (inst_34558 + (1));
var inst_34567 = (inst_34566__$1 < n);
var state_34593__$1 = (function (){var statearr_34607 = state_34593;
(statearr_34607[(12)] = inst_34565);

(statearr_34607[(11)] = inst_34566__$1);

return statearr_34607;
})();
if(cljs.core.truth_(inst_34567)){
var statearr_34608_35452 = state_34593__$1;
(statearr_34608_35452[(1)] = (8));

} else {
var statearr_34609_35453 = state_34593__$1;
(statearr_34609_35453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (14))){
var inst_34586 = (state_34593[(2)]);
var inst_34587 = cljs.core.async.close_BANG_(out);
var state_34593__$1 = (function (){var statearr_34611 = state_34593;
(statearr_34611[(13)] = inst_34586);

return statearr_34611;
})();
var statearr_34612_35454 = state_34593__$1;
(statearr_34612_35454[(2)] = inst_34587);

(statearr_34612_35454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (10))){
var inst_34577 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34613_35455 = state_34593__$1;
(statearr_34613_35455[(2)] = inst_34577);

(statearr_34613_35455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (8))){
var inst_34557 = (state_34593[(8)]);
var inst_34566 = (state_34593[(11)]);
var tmp34610 = inst_34557;
var inst_34557__$1 = tmp34610;
var inst_34558 = inst_34566;
var state_34593__$1 = (function (){var statearr_34614 = state_34593;
(statearr_34614[(7)] = inst_34558);

(statearr_34614[(8)] = inst_34557__$1);

return statearr_34614;
})();
var statearr_34615_35456 = state_34593__$1;
(statearr_34615_35456[(2)] = null);

(statearr_34615_35456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34616[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34616[(1)] = (1));

return statearr_34616;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34593){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34593);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34617){var ex__33136__auto__ = e34617;
var statearr_34618_35457 = state_34593;
(statearr_34618_35457[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34593[(4)]))){
var statearr_34619_35458 = state_34593;
(statearr_34619_35458[(1)] = cljs.core.first((state_34593[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35459 = state_34593;
state_34593 = G__35459;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_34620 = f__33165__auto__();
(statearr_34620[(6)] = c__33164__auto___35392);

return statearr_34620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34622 = arguments.length;
switch (G__34622) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33164__auto___35461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33165__auto__ = (function (){var switch__33132__auto__ = (function (state_34664){
var state_val_34665 = (state_34664[(1)]);
if((state_val_34665 === (7))){
var inst_34660 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34666_35462 = state_34664__$1;
(statearr_34666_35462[(2)] = inst_34660);

(statearr_34666_35462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (1))){
var inst_34623 = [];
var inst_34624 = inst_34623;
var inst_34625 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34664__$1 = (function (){var statearr_34667 = state_34664;
(statearr_34667[(7)] = inst_34624);

(statearr_34667[(8)] = inst_34625);

return statearr_34667;
})();
var statearr_34668_35463 = state_34664__$1;
(statearr_34668_35463[(2)] = null);

(statearr_34668_35463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (4))){
var inst_34628 = (state_34664[(9)]);
var inst_34628__$1 = (state_34664[(2)]);
var inst_34629 = (inst_34628__$1 == null);
var inst_34630 = cljs.core.not(inst_34629);
var state_34664__$1 = (function (){var statearr_34669 = state_34664;
(statearr_34669[(9)] = inst_34628__$1);

return statearr_34669;
})();
if(inst_34630){
var statearr_34670_35464 = state_34664__$1;
(statearr_34670_35464[(1)] = (5));

} else {
var statearr_34671_35465 = state_34664__$1;
(statearr_34671_35465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (15))){
var inst_34654 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34672_35466 = state_34664__$1;
(statearr_34672_35466[(2)] = inst_34654);

(statearr_34672_35466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (13))){
var state_34664__$1 = state_34664;
var statearr_34673_35467 = state_34664__$1;
(statearr_34673_35467[(2)] = null);

(statearr_34673_35467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (6))){
var inst_34624 = (state_34664[(7)]);
var inst_34649 = inst_34624.length;
var inst_34650 = (inst_34649 > (0));
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34650)){
var statearr_34674_35468 = state_34664__$1;
(statearr_34674_35468[(1)] = (12));

} else {
var statearr_34675_35469 = state_34664__$1;
(statearr_34675_35469[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (3))){
var inst_34662 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34664__$1,inst_34662);
} else {
if((state_val_34665 === (12))){
var inst_34624 = (state_34664[(7)]);
var inst_34652 = cljs.core.vec(inst_34624);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34664__$1,(15),out,inst_34652);
} else {
if((state_val_34665 === (2))){
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34664__$1,(4),ch);
} else {
if((state_val_34665 === (11))){
var inst_34632 = (state_34664[(10)]);
var inst_34628 = (state_34664[(9)]);
var inst_34642 = (state_34664[(2)]);
var inst_34643 = [];
var inst_34644 = inst_34643.push(inst_34628);
var inst_34624 = inst_34643;
var inst_34625 = inst_34632;
var state_34664__$1 = (function (){var statearr_34676 = state_34664;
(statearr_34676[(7)] = inst_34624);

(statearr_34676[(8)] = inst_34625);

(statearr_34676[(11)] = inst_34642);

(statearr_34676[(12)] = inst_34644);

return statearr_34676;
})();
var statearr_34677_35470 = state_34664__$1;
(statearr_34677_35470[(2)] = null);

(statearr_34677_35470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (9))){
var inst_34624 = (state_34664[(7)]);
var inst_34640 = cljs.core.vec(inst_34624);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34664__$1,(11),out,inst_34640);
} else {
if((state_val_34665 === (5))){
var inst_34632 = (state_34664[(10)]);
var inst_34625 = (state_34664[(8)]);
var inst_34628 = (state_34664[(9)]);
var inst_34632__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34628) : f.call(null,inst_34628));
var inst_34633 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34632__$1,inst_34625);
var inst_34634 = cljs.core.keyword_identical_QMARK_(inst_34625,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34635 = ((inst_34633) || (inst_34634));
var state_34664__$1 = (function (){var statearr_34678 = state_34664;
(statearr_34678[(10)] = inst_34632__$1);

return statearr_34678;
})();
if(cljs.core.truth_(inst_34635)){
var statearr_34679_35471 = state_34664__$1;
(statearr_34679_35471[(1)] = (8));

} else {
var statearr_34680_35472 = state_34664__$1;
(statearr_34680_35472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (14))){
var inst_34657 = (state_34664[(2)]);
var inst_34658 = cljs.core.async.close_BANG_(out);
var state_34664__$1 = (function (){var statearr_34682 = state_34664;
(statearr_34682[(13)] = inst_34657);

return statearr_34682;
})();
var statearr_34683_35473 = state_34664__$1;
(statearr_34683_35473[(2)] = inst_34658);

(statearr_34683_35473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (10))){
var inst_34647 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34684_35474 = state_34664__$1;
(statearr_34684_35474[(2)] = inst_34647);

(statearr_34684_35474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (8))){
var inst_34624 = (state_34664[(7)]);
var inst_34632 = (state_34664[(10)]);
var inst_34628 = (state_34664[(9)]);
var inst_34637 = inst_34624.push(inst_34628);
var tmp34681 = inst_34624;
var inst_34624__$1 = tmp34681;
var inst_34625 = inst_34632;
var state_34664__$1 = (function (){var statearr_34685 = state_34664;
(statearr_34685[(7)] = inst_34624__$1);

(statearr_34685[(8)] = inst_34625);

(statearr_34685[(14)] = inst_34637);

return statearr_34685;
})();
var statearr_34686_35475 = state_34664__$1;
(statearr_34686_35475[(2)] = null);

(statearr_34686_35475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34687[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34687[(1)] = (1));

return statearr_34687;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34664){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34664);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34688){var ex__33136__auto__ = e34688;
var statearr_34689_35476 = state_34664;
(statearr_34689_35476[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34664[(4)]))){
var statearr_34690_35477 = state_34664;
(statearr_34690_35477[(1)] = cljs.core.first((state_34664[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35478 = state_34664;
state_34664 = G__35478;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33166__auto__ = (function (){var statearr_34691 = f__33165__auto__();
(statearr_34691[(6)] = c__33164__auto___35461);

return statearr_34691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33166__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
