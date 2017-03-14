//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
function getTarget(e) {
    if (e.target) return getNonIETarget(e);
    if (e.srcElement) return getIETarget(e)
}

function getNonIETarget(e) {
    return e.target.nodeType == 3 ? getSafariTextTarget(e) : e.target
}

function getSafariTextTarget(e) {
    return e.target.parentNode
}

function getIETarget(e) {
    return e.srcElement
}

function pretty_error_messages(e) {
    var t = "";
    if (e) {
        t = "<p>";
        var n = e.length;
        for (var r = 0; r < n; r++) t = t + e[r] + "</br>";
        return t + "</p>"
    }
    return t
}(function() {
    var e = this,
        t = e._,
        n = Array.prototype,
        r = Object.prototype,
        i = Function.prototype,
        s = n.push,
        o = n.slice,
        u = n.concat,
        a = r.toString,
        f = r.hasOwnProperty,
        l = Array.isArray,
        c = Object.keys,
        h = i.bind,
        p = function(e) {
            if (e instanceof p) return e;
            if (!(this instanceof p)) return new p(e);
            this._wrapped = e
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = p), exports._ = p) : e._ = p, p.VERSION = "1.7.0";
    var d = function(e, t, n) {
        if (t === void 0) return e;
        switch (n == null ? 3 : n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                };
            case 4:
                return function(n, r, i, s) {
                    return e.call(t, n, r, i, s)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    };
    p.iteratee = function(e, t, n) {
        return e == null ? p.identity : p.isFunction(e) ? d(e, t, n) : p.isObject(e) ? p.matches(e) : p.property(e)
    }, p.each = p.forEach = function(e, t, n) {
        if (e == null) return e;
        t = d(t, n);
        var r, i = e.length;
        if (i === +i)
            for (r = 0; r < i; r++) t(e[r], r, e);
        else {
            var s = p.keys(e);
            for (r = 0, i = s.length; r < i; r++) t(e[s[r]], s[r], e)
        }
        return e
    }, p.map = p.collect = function(e, t, n) {
        if (e == null) return [];
        t = p.iteratee(t, n);
        var r = e.length !== +e.length && p.keys(e),
            i = (r || e).length,
            s = Array(i),
            o;
        for (var u = 0; u < i; u++) o = r ? r[u] : u, s[u] = t(e[o], o, e);
        return s
    };
    var v = "Reduce of empty array with no initial value";
    p.reduce = p.foldl = p.inject = function(e, t, n, r) {
        e == null && (e = []), t = d(t, r, 4);
        var i = e.length !== +e.length && p.keys(e),
            s = (i || e).length,
            o = 0,
            u;
        if (arguments.length < 3) {
            if (!s) throw new TypeError(v);
            n = e[i ? i[o++] : o++]
        }
        for (; o < s; o++) u = i ? i[o] : o, n = t(n, e[u], u, e);
        return n
    }, p.reduceRight = p.foldr = function(e, t, n, r) {
        e == null && (e = []), t = d(t, r, 4);
        var i = e.length !== +e.length && p.keys(e),
            s = (i || e).length,
            o;
        if (arguments.length < 3) {
            if (!s) throw new TypeError(v);
            n = e[i ? i[--s] : --s]
        }
        while (s--) o = i ? i[s] : s, n = t(n, e[o], o, e);
        return n
    }, p.find = p.detect = function(e, t, n) {
        var r;
        return t = p.iteratee(t, n), p.some(e, function(e, n, i) {
            if (t(e, n, i)) return r = e, !0
        }), r
    }, p.filter = p.select = function(e, t, n) {
        var r = [];
        return e == null ? r : (t = p.iteratee(t, n), p.each(e, function(e, n, i) {
            t(e, n, i) && r.push(e)
        }), r)
    }, p.reject = function(e, t, n) {
        return p.filter(e, p.negate(p.iteratee(t)), n)
    }, p.every = p.all = function(e, t, n) {
        if (e == null) return !0;
        t = p.iteratee(t, n);
        var r = e.length !== +e.length && p.keys(e),
            i = (r || e).length,
            s, o;
        for (s = 0; s < i; s++) {
            o = r ? r[s] : s;
            if (!t(e[o], o, e)) return !1
        }
        return !0
    }, p.some = p.any = function(e, t, n) {
        if (e == null) return !1;
        t = p.iteratee(t, n);
        var r = e.length !== +e.length && p.keys(e),
            i = (r || e).length,
            s, o;
        for (s = 0; s < i; s++) {
            o = r ? r[s] : s;
            if (t(e[o], o, e)) return !0
        }
        return !1
    }, p.contains = p.include = function(e, t) {
        return e == null ? !1 : (e.length !== +e.length && (e = p.values(e)), p.indexOf(e, t) >= 0)
    }, p.invoke = function(e, t) {
        var n = o.call(arguments, 2),
            r = p.isFunction(t);
        return p.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, p.pluck = function(e, t) {
        return p.map(e, p.property(t))
    }, p.where = function(e, t) {
        return p.filter(e, p.matches(t))
    }, p.findWhere = function(e, t) {
        return p.find(e, p.matches(t))
    }, p.max = function(e, t, n) {
        var r = -Infinity,
            i = -Infinity,
            s, o;
        if (t == null && e != null) {
            e = e.length === +e.length ? e : p.values(e);
            for (var u = 0, a = e.length; u < a; u++) s = e[u], s > r && (r = s)
        } else t = p.iteratee(t, n), p.each(e, function(e, n, s) {
            o = t(e, n, s);
            if (o > i || o === -Infinity && r === -Infinity) r = e, i = o
        });
        return r
    }, p.min = function(e, t, n) {
        var r = Infinity,
            i = Infinity,
            s, o;
        if (t == null && e != null) {
            e = e.length === +e.length ? e : p.values(e);
            for (var u = 0, a = e.length; u < a; u++) s = e[u], s < r && (r = s)
        } else t = p.iteratee(t, n), p.each(e, function(e, n, s) {
            o = t(e, n, s);
            if (o < i || o === Infinity && r === Infinity) r = e, i = o
        });
        return r
    }, p.shuffle = function(e) {
        var t = e && e.length === +e.length ? e : p.values(e),
            n = t.length,
            r = Array(n);
        for (var i = 0, s; i < n; i++) s = p.random(0, i), s !== i && (r[i] = r[s]), r[s] = t[i];
        return r
    }, p.sample = function(e, t, n) {
        return t == null || n ? (e.length !== +e.length && (e = p.values(e)), e[p.random(e.length - 1)]) : p.shuffle(e).slice(0, Math.max(0, t))
    }, p.sortBy = function(e, t, n) {
        return t = p.iteratee(t, n), p.pluck(p.map(e, function(e, n, r) {
            return {
                value: e,
                index: n,
                criteria: t(e, n, r)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (n < r || r === void 0) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var m = function(e) {
        return function(t, n, r) {
            var i = {};
            return n = p.iteratee(n, r), p.each(t, function(r, s) {
                var o = n(r, s, t);
                e(i, r, o)
            }), i
        }
    };
    p.groupBy = m(function(e, t, n) {
        p.has(e, n) ? e[n].push(t) : e[n] = [t]
    }), p.indexBy = m(function(e, t, n) {
        e[n] = t
    }), p.countBy = m(function(e, t, n) {
        p.has(e, n) ? e[n]++ : e[n] = 1
    }), p.sortedIndex = function(e, t, n, r) {
        n = p.iteratee(n, r, 1);
        var i = n(t),
            s = 0,
            o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n(e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, p.toArray = function(e) {
        return e ? p.isArray(e) ? o.call(e) : e.length === +e.length ? p.map(e, p.identity) : p.values(e) : []
    }, p.size = function(e) {
        return e == null ? 0 : e.length === +e.length ? e.length : p.keys(e).length
    }, p.partition = function(e, t, n) {
        t = p.iteratee(t, n);
        var r = [],
            i = [];
        return p.each(e, function(e, n, s) {
            (t(e, n, s) ? r : i).push(e)
        }), [r, i]
    }, p.first = p.head = p.take = function(e, t, n) {
        return e == null ? void 0 : t == null || n ? e[0] : t < 0 ? [] : o.call(e, 0, t)
    }, p.initial = function(e, t, n) {
        return o.call(e, 0, Math.max(0, e.length - (t == null || n ? 1 : t)))
    }, p.last = function(e, t, n) {
        return e == null ? void 0 : t == null || n ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
    }, p.rest = p.tail = p.drop = function(e, t, n) {
        return o.call(e, t == null || n ? 1 : t)
    }, p.compact = function(e) {
        return p.filter(e, p.identity)
    };
    var g = function(e, t, n, r) {
        if (t && p.every(e, p.isArray)) return u.apply(r, e);
        for (var i = 0, o = e.length; i < o; i++) {
            var a = e[i];
            !p.isArray(a) && !p.isArguments(a) ? n || r.push(a) : t ? s.apply(r, a) : g(a, t, n, r)
        }
        return r
    };
    p.flatten = function(e, t) {
        return g(e, t, !1, [])
    }, p.without = function(e) {
        return p.difference(e, o.call(arguments, 1))
    }, p.uniq = p.unique = function(e, t, n, r) {
        if (e == null) return [];
        p.isBoolean(t) || (r = n, n = t, t = !1), n != null && (n = p.iteratee(n, r));
        var i = [],
            s = [];
        for (var o = 0, u = e.length; o < u; o++) {
            var a = e[o];
            if (t)(!o || s !== a) && i.push(a), s = a;
            else if (n) {
                var f = n(a, o, e);
                p.indexOf(s, f) < 0 && (s.push(f), i.push(a))
            } else p.indexOf(i, a) < 0 && i.push(a)
        }
        return i
    }, p.union = function() {
        return p.uniq(g(arguments, !0, !0, []))
    }, p.intersection = function(e) {
        if (e == null) return [];
        var t = [],
            n = arguments.length;
        for (var r = 0, i = e.length; r < i; r++) {
            var s = e[r];
            if (p.contains(t, s)) continue;
            for (var o = 1; o < n; o++)
                if (!p.contains(arguments[o], s)) break;
            o === n && t.push(s)
        }
        return t
    }, p.difference = function(e) {
        var t = g(o.call(arguments, 1), !0, !0, []);
        return p.filter(e, function(e) {
            return !p.contains(t, e)
        })
    }, p.zip = function(e) {
        if (e == null) return [];
        var t = p.max(arguments, "length").length,
            n = Array(t);
        for (var r = 0; r < t; r++) n[r] = p.pluck(arguments, r);
        return n
    }, p.object = function(e, t) {
        if (e == null) return {};
        var n = {};
        for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, p.indexOf = function(e, t, n) {
        if (e == null) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if (typeof n != "number") return r = p.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        for (; r < i; r++)
            if (e[r] === t) return r;
        return -1
    }, p.lastIndexOf = function(e, t, n) {
        if (e == null) return -1;
        var r = e.length;
        typeof n == "number" && (r = n < 0 ? r + n + 1 : Math.min(r, n + 1));
        while (--r >= 0)
            if (e[r] === t) return r;
        return -1
    }, p.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0),
            i = Array(r);
        for (var s = 0; s < r; s++, e += n) i[s] = e;
        return i
    };
    var y = function() {};
    p.bind = function(e, t) {
        var n, r;
        if (h && e.bind === h) return h.apply(e, o.call(arguments, 1));
        if (!p.isFunction(e)) throw new TypeError("Bind must be called on a function");
        return n = o.call(arguments, 2), r = function() {
            if (this instanceof r) {
                y.prototype = e.prototype;
                var i = new y;
                y.prototype = null;
                var s = e.apply(i, n.concat(o.call(arguments)));
                return p.isObject(s) ? s : i
            }
            return e.apply(t, n.concat(o.call(arguments)))
        }, r
    }, p.partial = function(e) {
        var t = o.call(arguments, 1);
        return function() {
            var n = 0,
                r = t.slice();
            for (var i = 0, s = r.length; i < s; i++) r[i] === p && (r[i] = arguments[n++]);
            while (n < arguments.length) r.push(arguments[n++]);
            return e.apply(this, r)
        }
    }, p.bindAll = function(e) {
        var t, n = arguments.length,
            r;
        if (n <= 1) throw new Error("bindAll must be passed function names");
        for (t = 1; t < n; t++) r = arguments[t], e[r] = p.bind(e[r], e);
        return e
    }, p.memoize = function(e, t) {
        var n = function(r) {
            var i = n.cache,
                s = t ? t.apply(this, arguments) : r;
            return p.has(i, s) || (i[s] = e.apply(this, arguments)), i[s]
        };
        return n.cache = {}, n
    }, p.delay = function(e, t) {
        var n = o.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, p.defer = function(e) {
        return p.delay.apply(p, [e, 1].concat(o.call(arguments, 1)))
    }, p.throttle = function(e, t, n) {
        var r, i, s, o = null,
            u = 0;
        n || (n = {});
        var a = function() {
            u = n.leading === !1 ? 0 : p.now(), o = null, s = e.apply(r, i), o || (r = i = null)
        };
        return function() {
            var f = p.now();
            !u && n.leading === !1 && (u = f);
            var l = t - (f - u);
            return r = this, i = arguments, l <= 0 || l > t ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i), o || (r = i = null)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s
        }
    }, p.debounce = function(e, t, n) {
        var r, i, s, o, u, a = function() {
            var f = p.now() - o;
            f < t && f > 0 ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), r || (s = i = null)))
        };
        return function() {
            s = this, i = arguments, o = p.now();
            var f = n && !r;
            return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i), s = i = null), u
        }
    }, p.wrap = function(e, t) {
        return p.partial(t, e)
    }, p.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }, p.compose = function() {
        var e = arguments,
            t = e.length - 1;
        return function() {
            var n = t,
                r = e[t].apply(this, arguments);
            while (n--) r = e[n].call(this, r);
            return r
        }
    }, p.after = function(e, t) {
        return function() {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, p.before = function(e, t) {
        var n;
        return function() {
            return --e > 0 ? n = t.apply(this, arguments) : t = null, n
        }
    }, p.once = p.partial(p.before, 2), p.keys = function(e) {
        if (!p.isObject(e)) return [];
        if (c) return c(e);
        var t = [];
        for (var n in e) p.has(e, n) && t.push(n);
        return t
    }, p.values = function(e) {
        var t = p.keys(e),
            n = t.length,
            r = Array(n);
        for (var i = 0; i < n; i++) r[i] = e[t[i]];
        return r
    }, p.pairs = function(e) {
        var t = p.keys(e),
            n = t.length,
            r = Array(n);
        for (var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, p.invert = function(e) {
        var t = {},
            n = p.keys(e);
        for (var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t
    }, p.functions = p.methods = function(e) {
        var t = [];
        for (var n in e) p.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, p.extend = function(e) {
        if (!p.isObject(e)) return e;
        var t, n;
        for (var r = 1, i = arguments.length; r < i; r++) {
            t = arguments[r];
            for (n in t) f.call(t, n) && (e[n] = t[n])
        }
        return e
    }, p.pick = function(e, t, n) {
        var r = {},
            i;
        if (e == null) return r;
        if (p.isFunction(t)) {
            t = d(t, n);
            for (i in e) {
                var s = e[i];
                t(s, i, e) && (r[i] = s)
            }
        } else {
            var a = u.apply([], o.call(arguments, 1));
            e = new Object(e);
            for (var f = 0, l = a.length; f < l; f++) i = a[f], i in e && (r[i] = e[i])
        }
        return r
    }, p.omit = function(e, t, n) {
        if (p.isFunction(t)) t = p.negate(t);
        else {
            var r = p.map(u.apply([], o.call(arguments, 1)), String);
            t = function(e, t) {
                return !p.contains(r, t)
            }
        }
        return p.pick(e, t, n)
    }, p.defaults = function(e) {
        if (!p.isObject(e)) return e;
        for (var t = 1, n = arguments.length; t < n; t++) {
            var r = arguments[t];
            for (var i in r) e[i] === void 0 && (e[i] = r[i])
        }
        return e
    }, p.clone = function(e) {
        return p.isObject(e) ? p.isArray(e) ? e.slice() : p.extend({}, e) : e
    }, p.tap = function(e, t) {
        return t(e), e
    };
    var b = function(e, t, n, r) {
        if (e === t) return e !== 0 || 1 / e === 1 / t;
        if (e == null || t == null) return e === t;
        e instanceof p && (e = e._wrapped), t instanceof p && (t = t._wrapped);
        var i = a.call(e);
        if (i !== a.call(t)) return !1;
        switch (i) {
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                if (+e !== +e) return +t !== +t;
                return +e === 0 ? 1 / +e === 1 / t : +e === +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e === +t
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var s = n.length;
        while (s--)
            if (n[s] === e) return r[s] === t;
        var o = e.constructor,
            u = t.constructor;
        if (o !== u && "constructor" in e && "constructor" in t && !(p.isFunction(o) && o instanceof o && p.isFunction(u) && u instanceof u)) return !1;
        n.push(e), r.push(t);
        var f, l;
        if (i === "[object Array]") {
            f = e.length, l = f === t.length;
            if (l)
                while (f--)
                    if (!(l = b(e[f], t[f], n, r))) break
        } else {
            var c = p.keys(e),
                h;
            f = c.length, l = p.keys(t).length === f;
            if (l)
                while (f--) {
                    h = c[f];
                    if (!(l = p.has(t, h) && b(e[h], t[h], n, r))) break
                }
        }
        return n.pop(), r.pop(), l
    };
    p.isEqual = function(e, t) {
        return b(e, t, [], [])
    }, p.isEmpty = function(e) {
        if (e == null) return !0;
        if (p.isArray(e) || p.isString(e) || p.isArguments(e)) return e.length === 0;
        for (var t in e)
            if (p.has(e, t)) return !1;
        return !0
    }, p.isElement = function(e) {
        return !!e && e.nodeType === 1
    }, p.isArray = l || function(e) {
        return a.call(e) === "[object Array]"
    }, p.isObject = function(e) {
        var t = typeof e;
        return t === "function" || t === "object" && !!e
    }, p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        p["is" + e] = function(t) {
            return a.call(t) === "[object " + e + "]"
        }
    }), p.isArguments(arguments) || (p.isArguments = function(e) {
        return p.has(e, "callee")
    }), typeof /./ != "function" && (p.isFunction = function(e) {
        return typeof e == "function" || !1
    }), p.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, p.isNaN = function(e) {
        return p.isNumber(e) && e !== +e
    }, p.isBoolean = function(e) {
        return e === !0 || e === !1 || a.call(e) === "[object Boolean]"
    }, p.isNull = function(e) {
        return e === null
    }, p.isUndefined = function(e) {
        return e === void 0
    }, p.has = function(e, t) {
        return e != null && f.call(e, t)
    }, p.noConflict = function() {
        return e._ = t, this
    }, p.identity = function(e) {
        return e
    }, p.constant = function(e) {
        return function() {
            return e
        }
    }, p.noop = function() {}, p.property = function(e) {
        return function(t) {
            return t[e]
        }
    }, p.matches = function(e) {
        var t = p.pairs(e),
            n = t.length;
        return function(e) {
            if (e == null) return !n;
            e = new Object(e);
            for (var r = 0; r < n; r++) {
                var i = t[r],
                    s = i[0];
                if (i[1] !== e[s] || !(s in e)) return !1
            }
            return !0
        }
    }, p.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        t = d(t, n, 1);
        for (var i = 0; i < e; i++) r[i] = t(i);
        return r
    }, p.random = function(e, t) {
        return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, p.now = Date.now || function() {
        return (new Date).getTime()
    };
    var w = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        E = p.invert(w),
        S = function(e) {
            var t = function(t) {
                    return e[t]
                },
                n = "(?:" + p.keys(e).join("|") + ")",
                r = RegExp(n),
                i = RegExp(n, "g");
            return function(e) {
                return e = e == null ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
            }
        };
    p.escape = S(w), p.unescape = S(E), p.result = function(e, t) {
        if (e == null) return void 0;
        var n = e[t];
        return p.isFunction(n) ? e[t]() : n
    };
    var x = 0;
    p.uniqueId = function(e) {
        var t = ++x + "";
        return e ? e + t : t
    }, p.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var T = /(.)^/,
        N = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        C = /\\|'|\r|\n|\u2028|\u2029/g,
        k = function(e) {
            return "\\" + N[e]
        };
    p.template = function(e, t, n) {
        !t && n && (t = n), t = p.defaults({}, t, p.templateSettings);
        var r = RegExp([(t.escape || T).source, (t.interpolate || T).source, (t.evaluate || T).source].join("|") + "|$", "g"),
            i = 0,
            s = "__p+='";
        e.replace(r, function(t, n, r, o, u) {
            return s += e.slice(i, u).replace(C, k), i = u + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), t
        }), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj", "_", s)
        } catch (u) {
            throw u.source = s, u
        }
        var a = function(e) {
                return o.call(this, e, p)
            },
            f = t.variable || "obj";
        return a.source = "function(" + f + "){\n" + s + "}", a
    }, p.chain = function(e) {
        var t = p(e);
        return t._chain = !0, t
    };
    var L = function(e) {
        return this._chain ? p(e).chain() : e
    };
    p.mixin = function(e) {
        p.each(p.functions(e), function(t) {
            var n = p[t] = e[t];
            p.prototype[t] = function() {
                var e = [this._wrapped];
                return s.apply(e, arguments), L.call(this, n.apply(p, e))
            }
        })
    }, p.mixin(p), p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = n[e];
        p.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), (e === "shift" || e === "splice") && n.length === 0 && delete n[0], L.call(this, n)
        }
    }), p.each(["concat", "join", "slice"], function(e) {
        var t = n[e];
        p.prototype[e] = function() {
            return L.call(this, t.apply(this._wrapped, arguments))
        }
    }), p.prototype.value = function() {
        return this._wrapped
    }, typeof define == "function" && define.amd && define("underscore", [], function() {
        return p
    })
}).call(this),
    function(e, t) {
        if (typeof define == "function" && define.amd) define(["underscore", "jquery", "exports"], function(n, r, i) {
            e.Backbone = t(e, i, n, r)
        });
        else if (typeof exports != "undefined") {
            var n = require("underscore");
            t(e, exports, n)
        } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
    }(this, function(e, t, n, r) {
        var i = e.Backbone,
            s = [],
            o = s.push,
            u = s.slice,
            a = s.splice;
        t.VERSION = "1.1.2", t.$ = r, t.noConflict = function() {
            return e.Backbone = i, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var f = t.Events = {
                on: function(e, t, n) {
                    if (!c(this, "on", e, [t, n]) || !t) return this;
                    this._events || (this._events = {});
                    var r = this._events[e] || (this._events[e] = []);
                    return r.push({
                        callback: t,
                        context: n,
                        ctx: n || this
                    }), this
                },
                once: function(e, t, r) {
                    if (!c(this, "once", e, [t, r]) || !t) return this;
                    var i = this,
                        s = n.once(function() {
                            i.off(e, s), t.apply(this, arguments)
                        });
                    return s._callback = t, this.on(e, s, r)
                },
                off: function(e, t, r) {
                    var i, s, o, u, a, f, l, h;
                    if (!this._events || !c(this, "off", e, [t, r])) return this;
                    if (!e && !t && !r) return this._events = void 0, this;
                    u = e ? [e] : n.keys(this._events);
                    for (a = 0, f = u.length; a < f; a++) {
                        e = u[a];
                        if (o = this._events[e]) {
                            this._events[e] = i = [];
                            if (t || r)
                                for (l = 0, h = o.length; l < h; l++) s = o[l], (t && t !== s.callback && t !== s.callback._callback || r && r !== s.context) && i.push(s);
                            i.length || delete this._events[e]
                        }
                    }
                    return this
                },
                trigger: function(e) {
                    if (!this._events) return this;
                    var t = u.call(arguments, 1);
                    if (!c(this, "trigger", e, t)) return this;
                    var n = this._events[e],
                        r = this._events.all;
                    return n && h(n, t), r && h(r, arguments), this
                },
                stopListening: function(e, t, r) {
                    var i = this._listeningTo;
                    if (!i) return this;
                    var s = !t && !r;
                    !r && typeof t == "object" && (r = this), e && ((i = {})[e._listenId] = e);
                    for (var o in i) e = i[o], e.off(t, r, this), (s || n.isEmpty(e._events)) && delete this._listeningTo[o];
                    return this
                }
            },
            l = /\s+/,
            c = function(e, t, n, r) {
                if (!n) return !0;
                if (typeof n == "object") {
                    for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                    return !1
                }
                if (l.test(n)) {
                    var s = n.split(l);
                    for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r));
                    return !1
                }
                return !0
            },
            h = function(e, t) {
                var n, r = -1,
                    i = e.length,
                    s = t[0],
                    o = t[1],
                    u = t[2];
                switch (t.length) {
                    case 0:
                        while (++r < i)(n = e[r]).callback.call(n.ctx);
                        return;
                    case 1:
                        while (++r < i)(n = e[r]).callback.call(n.ctx, s);
                        return;
                    case 2:
                        while (++r < i)(n = e[r]).callback.call(n.ctx, s, o);
                        return;
                    case 3:
                        while (++r < i)(n = e[r]).callback.call(n.ctx, s, o, u);
                        return;
                    default:
                        while (++r < i)(n = e[r]).callback.apply(n.ctx, t);
                        return
                }
            },
            p = {
                listenTo: "on",
                listenToOnce: "once"
            };
        n.each(p, function(e, t) {
            f[t] = function(t, r, i) {
                var s = this._listeningTo || (this._listeningTo = {}),
                    o = t._listenId || (t._listenId = n.uniqueId("l"));
                return s[o] = t, !i && typeof r == "object" && (i = this), t[e](r, i, this), this
            }
        }), f.bind = f.on, f.unbind = f.off, n.extend(t, f);
        var d = t.Model = function(e, t) {
            var r = e || {};
            t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (r = this.parse(r, t) || {}), r = n.defaults({}, r, n.result(this, "defaults")), this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(d.prototype, f, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(e) {
                return n.clone(this.attributes)
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            get: function(e) {
                return this.attributes[e]
            },
            escape: function(e) {
                return n.escape(this.get(e))
            },
            has: function(e) {
                return this.get(e) != null
            },
            set: function(e, t, r) {
                var i, s, o, u, a, f, l, c;
                if (e == null) return this;
                typeof e == "object" ? (s = e, r = t) : (s = {})[e] = t, r || (r = {});
                if (!this._validate(s, r)) return !1;
                o = r.unset, a = r.silent, u = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in s && (this.id = s[this.idAttribute]);
                for (i in s) t = s[i], n.isEqual(c[i], t) || u.push(i), n.isEqual(l[i], t) ? delete this.changed[i] : this.changed[i] = t, o ? delete c[i] : c[i] = t;
                if (!a) {
                    u.length && (this._pending = r);
                    for (var h = 0, p = u.length; h < p; h++) this.trigger("change:" + u[h], this, c[u[h]], r)
                }
                if (f) return this;
                if (!a)
                    while (this._pending) r = this._pending, this._pending = !1, this.trigger("change", this, r);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(e, t) {
                return this.set(e, void 0, n.extend({}, t, {
                    unset: !0
                }))
            },
            clear: function(e) {
                var t = {};
                for (var r in this.attributes) t[r] = void 0;
                return this.set(t, n.extend({}, e, {
                    unset: !0
                }))
            },
            hasChanged: function(e) {
                return e == null ? !n.isEmpty(this.changed) : n.has(this.changed, e)
            },
            changedAttributes: function(e) {
                if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
                var t, r = !1,
                    i = this._changing ? this._previousAttributes : this.attributes;
                for (var s in e) {
                    if (n.isEqual(i[s], t = e[s])) continue;
                    (r || (r = {}))[s] = t
                }
                return r
            },
            previous: function(e) {
                return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
            },
            previousAttributes: function() {
                return n.clone(this._previousAttributes)
            },
            fetch: function(e) {
                e = e ? n.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                var t = this,
                    r = e.success;
                return e.success = function(n) {
                    if (!t.set(t.parse(n, e), e)) return !1;
                    r && r(t, n, e), t.trigger("sync", t, n, e)
                }, I(this, e), this.sync("read", this, e)
            },
            save: function(e, t, r) {
                var i, s, o, u = this.attributes;
                e == null || typeof e == "object" ? (i = e, r = t) : (i = {})[e] = t, r = n.extend({
                    validate: !0
                }, r);
                if (i && !r.wait) {
                    if (!this.set(i, r)) return !1
                } else if (!this._validate(i, r)) return !1;
                i && r.wait && (this.attributes = n.extend({}, u, i)), r.parse === void 0 && (r.parse = !0);
                var a = this,
                    f = r.success;
                return r.success = function(e) {
                    a.attributes = u;
                    var t = a.parse(e, r);
                    r.wait && (t = n.extend(i || {}, t));
                    if (n.isObject(t) && !a.set(t, r)) return !1;
                    f && f(a, e, r), a.trigger("sync", a, e, r)
                }, I(this, r), s = this.isNew() ? "create" : r.patch ? "patch" : "update", s === "patch" && (r.attrs = i), o = this.sync(s, this, r), i && r.wait && (this.attributes = u), o
            },
            destroy: function(e) {
                e = e ? n.clone(e) : {};
                var t = this,
                    r = e.success,
                    i = function() {
                        t.trigger("destroy", t, t.collection, e)
                    };
                e.success = function(n) {
                    (e.wait || t.isNew()) && i(), r && r(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                };
                if (this.isNew()) return e.success(), !1;
                I(this, e);
                var s = this.sync("delete", this, e);
                return e.wait || i(), s
            },
            url: function() {
                var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || F();
                return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(e) {
                return this._validate({}, n.extend(e || {}, {
                    validate: !0
                }))
            },
            _validate: function(e, t) {
                if (!t.validate || !this.validate) return !0;
                e = n.extend({}, this.attributes, e);
                var r = this.validationError = this.validate(e, t) || null;
                return r ? (this.trigger("invalid", this, r, n.extend(t, {
                    validationError: r
                })), !1) : !0
            }
        });
        var v = ["keys", "values", "pairs", "invert", "pick", "omit"];
        n.each(v, function(e) {
            d.prototype[e] = function() {
                var t = u.call(arguments);
                return t.unshift(this.attributes), n[e].apply(n, t)
            }
        });
        var m = t.Collection = function(e, t) {
                t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                    silent: !0
                }, t))
            },
            g = {
                add: !0,
                remove: !0,
                merge: !0
            },
            y = {
                add: !0,
                remove: !1
            };
        n.extend(m.prototype, f, {
            model: d,
            initialize: function() {},
            toJSON: function(e) {
                return this.map(function(t) {
                    return t.toJSON(e)
                })
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            add: function(e, t) {
                return this.set(e, n.extend({
                    merge: !1
                }, t, y))
            },
            remove: function(e, t) {
                var r = !n.isArray(e);
                e = r ? [e] : n.clone(e), t || (t = {});
                var i, s, o, u;
                for (i = 0, s = e.length; i < s; i++) {
                    u = e[i] = this.get(e[i]);
                    if (!u) continue;
                    delete this._byId[u.id], delete this._byId[u.cid], o = this.indexOf(u), this.models.splice(o, 1), this.length--, t.silent || (t.index = o, u.trigger("remove", u, this, t)), this._removeReference(u, t)
                }
                return r ? e[0] : e
            },
            set: function(e, t) {
                t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
                var r = !n.isArray(e);
                e = r ? e ? [e] : [] : n.clone(e);
                var i, s, o, u, a, f, l, c = t.at,
                    h = this.model,
                    p = this.comparator && c == null && t.sort !== !1,
                    v = n.isString(this.comparator) ? this.comparator : null,
                    m = [],
                    y = [],
                    b = {},
                    w = t.add,
                    E = t.merge,
                    S = t.remove,
                    x = !p && w && S ? [] : !1;
                for (i = 0, s = e.length; i < s; i++) {
                    a = e[i] || {}, a instanceof d ? o = u = a : o = a[h.prototype.idAttribute || "id"];
                    if (f = this.get(o)) S && (b[f.cid] = !0), E && (a = a === u ? u.attributes : a, t.parse && (a = f.parse(a, t)), f.set(a, t), p && !l && f.hasChanged(v) && (l = !0)), e[i] = f;
                    else if (w) {
                        u = e[i] = this._prepareModel(a, t);
                        if (!u) continue;
                        m.push(u), this._addReference(u, t)
                    }
                    u = f || u, x && (u.isNew() || !b[u.id]) && x.push(u), b[u.id] = !0
                }
                if (S) {
                    for (i = 0, s = this.length; i < s; ++i) b[(u = this.models[i]).cid] || y.push(u);
                    y.length && this.remove(y, t)
                }
                if (m.length || x && x.length) {
                    p && (l = !0), this.length += m.length;
                    if (c != null)
                        for (i = 0, s = m.length; i < s; i++) this.models.splice(c + i, 0, m[i]);
                    else {
                        x && (this.models.length = 0);
                        var T = x || m;
                        for (i = 0, s = T.length; i < s; i++) this.models.push(T[i])
                    }
                }
                l && this.sort({
                    silent: !0
                });
                if (!t.silent) {
                    for (i = 0, s = m.length; i < s; i++)(u = m[i]).trigger("add", u, this, t);
                    (l || x && x.length) && this.trigger("sort", this, t)
                }
                return r ? e[0] : e
            },
            reset: function(e, t) {
                t || (t = {});
                for (var r = 0, i = this.models.length; r < i; r++) this._removeReference(this.models[r], t);
                return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), e
            },
            push: function(e, t) {
                return this.add(e, n.extend({
                    at: this.length
                }, t))
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t
            },
            unshift: function(e, t) {
                return this.add(e, n.extend({
                    at: 0
                }, t))
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e), t
            },
            slice: function() {
                return u.apply(this.models, arguments)
            },
            get: function(e) {
                return e == null ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
            },
            at: function(e) {
                return this.models[e]
            },
            where: function(e, t) {
                return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                    for (var n in e)
                        if (e[n] !== t.get(n)) return !1;
                    return !0
                })
            },
            findWhere: function(e) {
                return this.where(e, !0)
            },
            sort: function(e) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return e || (e = {}), n.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
            },
            pluck: function(e) {
                return n.invoke(this.models, "get", e)
            },
            fetch: function(e) {
                e = e ? n.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                var t = e.success,
                    r = this;
                return e.success = function(n) {
                    var i = e.reset ? "reset" : "set";
                    r[i](n, e), t && t(r, n, e), r.trigger("sync", r, n, e)
                }, I(this, e), this.sync("read", this, e)
            },
            create: function(e, t) {
                t = t ? n.clone(t) : {};
                if (!(e = this._prepareModel(e, t))) return !1;
                t.wait || this.add(e, t);
                var r = this,
                    i = t.success;
                return t.success = function(e, n) {
                    t.wait && r.add(e, t), i && i(e, n, t)
                }, e.save(null, t), e
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(e, t) {
                if (e instanceof d) return e;
                t = t ? n.clone(t) : {}, t.collection = this;
                var r = new this.model(e, t);
                return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r
            },
            _addReference: function(e, t) {
                this._byId[e.cid] = e, e.id != null && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
            },
            _removeReference: function(e, t) {
                this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(e, t, n, r) {
                if ((e === "add" || e === "remove") && n !== this) return;
                e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
            }
        });
        var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        n.each(b, function(e) {
            m.prototype[e] = function() {
                var t = u.call(arguments);
                return t.unshift(this.models), n[e].apply(n, t)
            }
        });
        var w = ["groupBy", "countBy", "sortBy", "indexBy"];
        n.each(w, function(e) {
            m.prototype[e] = function(t, r) {
                var i = n.isFunction(t) ? t : function(e) {
                    return e.get(t)
                };
                return n[e](this.models, i, r)
            }
        });
        var E = t.View = function(e) {
                this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, x)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            S = /^(\S+)\s*(.*)$/,
            x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(E.prototype, f, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(e, n) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(e) {
                if (!e && !(e = n.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var t in e) {
                    var r = e[t];
                    n.isFunction(r) || (r = this[e[t]]);
                    if (!r) continue;
                    var i = t.match(S),
                        s = i[1],
                        o = i[2];
                    r = n.bind(r, this), s += ".delegateEvents" + this.cid, o === "" ? this.$el.on(s, r) : this.$el.on(s, o, r)
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (!this.el) {
                    var e = n.extend({}, n.result(this, "attributes"));
                    this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                    var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                    this.setElement(r, !1)
                } else this.setElement(n.result(this, "el"), !1)
            }
        }), t.sync = function(e, r, i) {
            var s = N[e];
            n.defaults(i || (i = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var o = {
                type: s,
                dataType: "json"
            };
            i.url || (o.url = n.result(r, "url") || F()), i.data == null && r && (e === "create" || e === "update" || e === "patch") && (o.contentType = "application/json", o.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                model: o.data
            } : {});
            if (i.emulateHTTP && (s === "PUT" || s === "DELETE" || s === "PATCH")) {
                o.type = "POST", i.emulateJSON && (o.data._method = s);
                var u = i.beforeSend;
                i.beforeSend = function(e) {
                    e.setRequestHeader("X-HTTP-Method-Override", s);
                    if (u) return u.apply(this, arguments)
                }
            }
            o.type !== "GET" && !i.emulateJSON && (o.processData = !1), o.type === "PATCH" && T && (o.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var a = i.xhr = t.ajax(n.extend(o, i));
            return r.trigger("request", r, a, i), a
        };
        var T = typeof window != "undefined" && !!window.ActiveXObject && (!window.XMLHttpRequest || !(new XMLHttpRequest).dispatchEvent),
            N = {
                create: "POST",
                update: "PUT",
                patch: "PUT",
                "delete": "DELETE",
                read: "GET"
            };
        t.ajax = function() {
            return t.$.ajax.apply(t.$, arguments)
        };
        var C = t.Router = function(e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            k = /\((.*?)\)/g,
            L = /(\(\?)?:\w+/g,
            A = /\*\w+/g,
            O = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend(C.prototype, f, {
            initialize: function() {},
            route: function(e, r, i) {
                n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(r) && (i = r, r = ""), i || (i = this[r]);
                var s = this;
                return t.history.route(e, function(n) {
                    var o = s._extractParameters(e, n);
                    s.execute(i, o), s.trigger.apply(s, ["route:" + r].concat(o)), s.trigger("route", r, o), t.history.trigger("route", s, r, o)
                }), this
            },
            execute: function(e, t) {
                e && e.apply(this, t)
            },
            navigate: function(e, n) {
                return t.history.navigate(e, n), this
            },
            _bindRoutes: function() {
                if (!this.routes) return;
                this.routes = n.result(this, "routes");
                var e, t = n.keys(this.routes);
                while ((e = t.pop()) != null) this.route(e, this.routes[e])
            },
            _routeToRegExp: function(e) {
                return e = e.replace(O, "\\$&").replace(k, "(?:$1)?").replace(L, function(e, t) {
                    return t ? e : "([^/?]+)"
                }).replace(A, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(e, t) {
                var r = e.exec(t).slice(1);
                return n.map(r, function(e, t) {
                    return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                })
            }
        });
        var M = t.History = function() {
                this.handlers = [], n.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
            },
            _ = /^[#\/]|\s+$/g,
            D = /^\/+|\/+$/g,
            P = /msie [\w.]+/,
            H = /\/$/,
            B = /#.*$/;
        M.started = !1, n.extend(M.prototype, f, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            },
            getHash: function(e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : ""
            },
            getFragment: function(e, t) {
                if (e == null)
                    if (this._hasPushState || !this._wantsHashChange || t) {
                        e = decodeURI(this.location.pathname + this.location.search);
                        var n = this.root.replace(H, "");
                        e.indexOf(n) || (e = e.slice(n.length))
                    } else e = this.getHash();
                return e.replace(_, "")
            },
            start: function(e) {
                if (M.started) throw new Error("Backbone.history has already been started");
                M.started = !0, this.options = n.extend({
                    root: "/"
                }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var r = this.getFragment(),
                    i = document.documentMode,
                    s = P.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
                this.root = ("/" + this.root + "/").replace(D, "/");
                if (s && this._wantsHashChange) {
                    var o = t.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = o.hide().appendTo("body")[0].contentWindow, this.navigate(r)
                }
                this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !s ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = r;
                var u = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && u.hash && (this.fragment = this.getHash().replace(_, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                if (!this.options.silent) return this.loadUrl()
            },
            stop: function() {
                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), M.started = !1
            },
            route: function(e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function(e) {
                var t = this.getFragment();
                t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
                if (t === this.fragment) return !1;
                this.iframe && this.navigate(t), this.loadUrl()
            },
            loadUrl: function(e) {
                return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
                    if (t.route.test(e)) return t.callback(e), !0
                })
            },
            navigate: function(e, t) {
                if (!M.started) return !1;
                if (!t || t === !0) t = {
                    trigger: !!t
                };
                var n = this.root + (e = this.getFragment(e || ""));
                e = e.replace(B, "");
                if (this.fragment === e) return;
                this.fragment = e, e === "" && n !== "/" && (n = n.slice(0, -1));
                if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                else {
                    if (!this._wantsHashChange) return this.location.assign(n);
                    this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                }
                if (t.trigger) return this.loadUrl(e)
            },
            _updateHash: function(e, t, n) {
                if (n) {
                    var r = e.href.replace(/(javascript:|#).*$/, "");
                    e.replace(r + "#" + t)
                } else e.hash = "#" + t
            }
        }), t.history = new M;
        var j = function(e, t) {
            var r = this,
                i;
            e && n.has(e, "constructor") ? i = e.constructor : i = function() {
                return r.apply(this, arguments)
            }, n.extend(i, r, t);
            var s = function() {
                this.constructor = i
            };
            return s.prototype = r.prototype, i.prototype = new s, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
        };
        d.extend = m.extend = C.extend = E.extend = M.extend = j;
        var F = function() {
                throw new Error('A "url" property or function must be specified')
            },
            I = function(e, t) {
                var n = t.error;
                t.error = function(r) {
                    n && n(e, r, t), e.trigger("error", e, r, t)
                }
            };
        return t
    }),
    function(e) {
        typeof define == "function" && define.amd ? define(["underscore", "backbone", "exports"], e) : typeof exports == "object" ? e(require("underscore"), require("backbone"), exports) : e(_, Backbone, {})
    }(function(e, t, n) {
        t.Stickit = n, n._handlers = [], n.addHandler = function(t) {
            t = e.map(e.flatten([t]), function(t) {
                return e.defaults({}, t, {
                    updateModel: !0,
                    updateView: !0,
                    updateMethod: "text"
                })
            }), this._handlers = this._handlers.concat(t)
        }, n.ViewMixin = {
            _modelBindings: null,
            unstickit: function(t, n) {
                if (e.isObject(n)) {
                    e.each(n, function(e, n) {
                        this.unstickit(t, n)
                    }, this);
                    return
                }
                var r = [],
                    i = [];
                this._modelBindings = e.reject(this._modelBindings, function(e) {
                    if (t && e.model !== t) return;
                    if (n && e.config.selector != n) return;
                    return e.model.off(e.event, e.fn), i.push(e.config._destroy), r.push(e.model), !0
                }), e.invoke(e.uniq(r), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(i), function(e) {
                    e.call(this)
                }, this), this.$el.off(".stickit" + (t ? "." + t.cid : ""), n)
            },
            stickit: function(t, n) {
                var r = t || this.model,
                    i = n || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(r, i);
                var s = this.remove;
                return s.stickitWrapped || (this.remove = function() {
                    var e = this;
                    return this.unstickit(), s && (e = s.apply(this, arguments)), e
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(t, n, i) {
                var v = t || this.model,
                    m = ".stickit." + v.cid;
                i = i || {};
                if (e.isObject(n)) {
                    var g = n;
                    e.each(g, function(e, t) {
                        this.addBinding(v, t, e)
                    }, this);
                    return
                }
                var y = n === ":el" ? this.$el : this.$(n);
                this.unstickit(v, n);
                if (!y.length) return;
                e.isString(i) && (i = {
                    observe: i
                }), e.isFunction(i.observe) && (i.observe = i.observe.call(this));
                var b = l(y, i),
                    w = b.observe;
                b.selector = n, b.view = this;
                var E = b.bindId = e.uniqueId(),
                    S = e.extend({
                        stickitChange: b
                    }, b.setOptions);
                b._destroy = function() {
                    s.call(this, b.destroy, y, v, b)
                }, c(y, b, v, w), p(y, b, v, w), h(y, b, v, w);
                if (w) {
                    e.each(b.events, function(t) {
                        var i = t + m,
                            u = function(e) {
                                var t = s.call(this, b.getVal, y, e, b, r.call(arguments, 1)),
                                    n = o(b.updateModel, t, e, b);
                                n && a(v, w, t, S, b)
                            },
                            f = n === ":el" ? "" : n;
                        this.$el.on(i, f, e.bind(u, this))
                    }, this), e.each(e.flatten([w]), function(e) {
                        u(v, "change:" + e, b, function(e, t, n) {
                            var r = n && n.stickitChange && n.stickitChange.bindId;
                            if (r !== E) {
                                var i = f(v, w, b);
                                d(y, b, i, v)
                            }
                        })
                    });
                    var x = f(v, w, b);
                    d(y, b, x, v, !0)
                }
                s.call(this, b.initialize, y, v, b)
            }
        }, e.extend(t.View.prototype, n.ViewMixin);
        var r = [].slice,
            i = function(t, n) {
                var r = (n || "").split("."),
                    i = e.reduce(r, function(e, t) {
                        return e[t]
                    }, t);
                return i == null ? t : i
            },
            s = function(t) {
                t = e.isString(t) ? i(this, t) : t;
                if (t) return t.apply(this, r.call(arguments, 1))
            },
            o = function(t, n, r) {
                if (e.isBoolean(t)) return t;
                if (e.isFunction(t) || e.isString(t)) {
                    var i = e.last(arguments).view;
                    return s.apply(i, arguments)
                }
                return !1
            },
            u = function(e, t, n, r) {
                var i = n.view;
                e.on(t, r, i), i._modelBindings.push({
                    model: e,
                    event: t,
                    fn: r,
                    config: n
                })
            },
            a = function(t, n, r, i, o) {
                var u = {},
                    a = o.view;
                o.onSet && (r = s.call(a, o.onSet, r, o)), o.set ? s.call(a, o.set, n, r, i, o) : (u[n] = r, e.isArray(n) && e.isArray(r) && (u = e.reduce(n, function(t, n, i) {
                    return t[n] = e.has(r, i) ? r[i] : null, t
                }, {})), t.set(u, i))
            },
            f = function(t, n, r) {
                var i = r.view,
                    o = function(e) {
                        return t[r.escape ? "escape" : "get"](e)
                    },
                    u = function(e) {
                        return e == null ? "" : e
                    },
                    a = e.isArray(n) ? e.map(n, o) : o(n);
                return r.onGet && (a = s.call(i, r.onGet, a, r)), e.isArray(a) ? e.map(a, u) : u(a)
            },
            l = n.getConfiguration = function(t, r) {
                var i = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(e, t, n, r) {
                        e[r.updateMethod] && e[r.updateMethod](t)
                    },
                    getVal: function(e, t, n) {
                        return e[n.updateMethod]()
                    }
                }];
                i = i.concat(e.filter(n._handlers, function(e) {
                    return t.is(e.selector)
                })), i.push(r);
                var s = e.extend.apply(e, i);
                return e.has(s, "updateView") || (s.updateView = !s.visible), s
            },
            c = function(t, n, r, i) {
                var s = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    o = n.view;
                e.each(n.attributes || [], function(a) {
                    a = e.clone(a), a.view = o;
                    var l = "",
                        c = a.observe || (a.observe = i),
                        h = function() {
                            var n = e.contains(s, a.name) ? "prop" : "attr",
                                i = f(r, c, a);
                            a.name === "class" ? (t.removeClass(l).addClass(i), l = i) : t[n](a.name, i)
                        };
                    e.each(e.flatten([c]), function(e) {
                        u(r, "change:" + e, n, h)
                    }), h()
                })
            },
            h = function(t, n, r, i) {
                e.each(n.classes || [], function(i, s) {
                    e.isString(i) && (i = {
                        observe: i
                    }), i.view = n.view;
                    var o = i.observe,
                        a = function() {
                            var e = f(r, o, i);
                            t.toggleClass(s, !!e)
                        };
                    e.each(e.flatten([o]), function(e) {
                        u(r, "change:" + e, n, a)
                    }), a()
                })
            },
            p = function(t, n, r, i) {
                if (n.visible == null) return;
                var o = n.view,
                    a = function() {
                        var u = n.visible,
                            a = n.visibleFn,
                            l = f(r, i, n),
                            c = !!l;
                        if (e.isFunction(u) || e.isString(u)) c = !!s.call(o, u, l, n);
                        a ? s.call(o, a, t, c, n) : t.toggle(c)
                    };
                e.each(e.flatten([i]), function(e) {
                    u(r, "change:" + e, n, a)
                }), a()
            },
            d = function(e, t, n, r, i) {
                var u = t.view;
                if (!o(t.updateView, n, t)) return;
                s.call(u, t.update, e, n, r, t), i || s.call(u, t.afterUpdate, e, n, t)
            };
        return n.addHandler([{
            selector: "[contenteditable]",
            updateMethod: "html",
            events: ["input", "change"]
        }, {
            selector: "input",
            events: ["propertychange", "input", "change"],
            update: function(e, t) {
                e.val(t)
            },
            getVal: function(e) {
                return e.val()
            }
        }, {
            selector: "textarea",
            events: ["propertychange", "input", "change"],
            update: function(e, t) {
                e.val(t)
            },
            getVal: function(e) {
                return e.val()
            }
        }, {
            selector: 'input[type="radio"]',
            events: ["change"],
            update: function(e, t) {
                e.filter('[value="' + t + '"]').prop("checked", !0)
            },
            getVal: function(e) {
                return e.filter(":checked").val()
            }
        }, {
            selector: 'input[type="checkbox"]',
            events: ["change"],
            update: function(n, r, i, s) {
                if (n.length > 1) r || (r = []), n.each(function(n, i) {
                    var s = t.$(i),
                        o = e.contains(r, s.val());
                    s.prop("checked", o)
                });
                else {
                    var o = e.isBoolean(r) ? r : r === n.val();
                    n.prop("checked", o)
                }
            },
            getVal: function(n) {
                var r;
                if (n.length > 1) r = e.reduce(n, function(e, n) {
                    var r = t.$(n);
                    return r.prop("checked") && e.push(r.val()), e
                }, []);
                else {
                    r = n.prop("checked");
                    var i = n.val();
                    i !== "on" && i != null && (r = r ? n.val() : null)
                }
                return r
            }
        }, {
            selector: "select",
            events: ["change"],
            update: function(n, r, o, u) {
                var a, l = u.selectOptions,
                    c = l && l.collection || undefined,
                    h = n.prop("multiple");
                if (!l) {
                    l = {};
                    var p = function(e) {
                        return e.map(function(e, n) {
                            var r = t.$(n).data("stickit-bind-val");
                            return {
                                value: r !== undefined ? r : n.value,
                                label: n.text
                            }
                        }).get()
                    };
                    n.find("optgroup").length ? (c = {
                        opt_labels: []
                    }, n.find("> option").length && (c.opt_labels.push(undefined), e.each(n.find("> option"), function(e) {
                        c[undefined] = p(t.$(e))
                    })), e.each(n.find("optgroup"), function(e) {
                        var n = t.$(e).attr("label");
                        c.opt_labels.push(n), c[n] = p(t.$(e).find("option"))
                    })) : c = p(n.find("option"))
                }
                l.valuePath = l.valuePath || "value", l.labelPath = l.labelPath || "label", l.disabledPath = l.disabledPath || "disabled";
                var d = function(n, r, s) {
                    e.each(n, function(n) {
                        var o = t.$("<option/>"),
                            u = n,
                            a = function(t, n, r) {
                                o.text(t), u = n, o.data("stickit-bind-val", u), !e.isArray(u) && !e.isObject(u) && o.val(u), r === !0 && o.prop("disabled", "disabled")
                            },
                            f, c, p;
                        n === "__default__" ? (f = s.label, c = s.value, p = s.disabled) : (f = i(n, l.labelPath), c = i(n, l.valuePath), p = i(n, l.disabledPath)), a(f, c, p);
                        var d = function() {
                            return !h && u != null && s != null && u === s ? !0 : e.isObject(s) && e.isEqual(u, s) ? !0 : !1
                        };
                        d() ? o.prop("selected", !0) : h && e.isArray(s) && e.each(s, function(t) {
                            e.isObject(t) && (t = i(t, l.valuePath)), (t === u || e.isObject(t) && e.isEqual(u, t)) && o.prop("selected", !0)
                        }), r.append(o)
                    })
                };
                n.find("*").remove();
                if (e.isString(c)) {
                    var v = window;
                    c.indexOf("this.") === 0 && (v = this), c = c.replace(/^[a-z]*\.(.+)$/, "$1"), a = i(v, c)
                } else e.isFunction(c) ? a = s.call(this, c, n, u) : a = c;
                if (a instanceof t.Collection) {
                    var m = a,
                        g = function() {
                            var e = f(o, u.observe, u);
                            s.call(this, u.update, n, e, o, u)
                        },
                        y = function() {
                            m.off("add remove reset sort", g)
                        },
                        b = function() {
                            y(), m.off("stickit:selectRefresh"), o.off("stickit:selectRefresh")
                        };
                    m.trigger("stickit:selectRefresh"), m.once("stickit:selectRefresh", y, this), m.on("add remove reset sort", g, this), o.trigger("stickit:selectRefresh"), o.once("stickit:selectRefresh", function() {
                        o.off("stickit:unstuck", b)
                    }), o.once("stickit:unstuck", b, this), a = a.toJSON()
                }
                if (l.defaultOption) {
                    var w = e.isFunction(l.defaultOption) ? l.defaultOption.call(this, n, u) : l.defaultOption;
                    d(["__default__"], n, w)
                }
                if (e.isArray(a)) d(a, n, r);
                else if (a.opt_labels) e.each(a.opt_labels, function(e) {
                    var i = t.$("<optgroup/>").attr("label", e);
                    d(a[e], i, r), n.append(i)
                });
                else {
                    var E = [],
                        S;
                    for (var x in a) S = {}, S[l.valuePath] = x, S[l.labelPath] = a[x], E.push(S);
                    E = e.sortBy(E, l.comparator || l.labelPath), d(E, n, r)
                }
            },
            getVal: function(n) {
                var r = n.find("option:selected");
                return n.prop("multiple") ? e.map(r, function(e) {
                    return t.$(e).data("stickit-bind-val")
                }) : r.data("stickit-bind-val")
            }
        }]), n
    }),
    function() {
        var e = [],
            t = function(t) {
                _.isEmpty(t._unsavedChanges) ? e = _.filter(e, function(e) {
                    return t.cid != e.cid
                }) : _.findWhere(e, {
                    cid: t.cid
                }) || e.push(t)
            },
            n = function(t) {
                var n, r = _.rest(arguments),
                    i = function(e, t) {
                        return _.isBoolean(t) ? t : (_.isString(t) ? e[t] : t).apply(e, r)
                    };
                return _.each(e, function(e) {
                    !n && i(e, e._unsavedConfig[t]) && (n = e._unsavedConfig.prompt)
                }), n
            };
        Backbone.History.prototype.navigate = _.wrap(Backbone.History.prototype.navigate, function(e, t, r) {
            var i = n("unloadRouterPrompt", t, r);
            i ? confirm(i + " \n\nAre you sure you want to leave this page?") && e.call(this, t, r) : e.call(this, t, r)
        }), window.onbeforeunload = function(e) {
            return n("unloadWindowPrompt", e)
        }, _.extend(Backbone.Model.prototype, {
            unsaved: {},
            _trackingChanges: !1,
            _originalAttrs: {},
            _unsavedChanges: {},
            startTracking: function() {
                return this._unsavedConfig = _.extend({}, {
                    prompt: "You have unsaved changes!",
                    unloadRouterPrompt: !1,
                    unloadWindowPrompt: !1
                }, this.unsaved || {}), this._trackingChanges = !0, this._resetTracking(), this._triggerUnsavedChanges(), this
            },
            stopTracking: function() {
                return this._trackingChanges = !1, this._originalAttrs = {}, this._unsavedChanges = {}, this._triggerUnsavedChanges(), this
            },
            restartTracking: function() {
                return this._resetTracking(), this._triggerUnsavedChanges(), this
            },
            resetAttributes: function() {
                if (!this._trackingChanges) return;
                return this.set(this._originalAttrs), this._resetTracking(), this._triggerUnsavedChanges(), this
            },
            unsavedAttributes: function(e) {
                if (!e) return _.isEmpty(this._unsavedChanges) ? !1 : _.clone(this._unsavedChanges);
                var t, n = !1,
                    r = this._unsavedChanges;
                for (var i in e) {
                    if (_.isEqual(r[i], t = e[i])) continue;
                    (n || (n = {}))[i] = t
                }
                return n
            },
            _resetTracking: function() {
                this._originalAttrs = _.clone(this.attributes), this._unsavedChanges = {}
            },
            _triggerUnsavedChanges: function() {
                this.trigger("unsavedChanges", !_.isEmpty(this._unsavedChanges), _.clone(this._unsavedChanges), this), this.unsaved && t(this)
            }
        }), Backbone.Model.prototype.set = _.wrap(Backbone.Model.prototype.set, function(e, t, n, r) {
            var i, s;
            return t == null ? this : (typeof t == "object" ? (i = t, r = n) : (i = {})[t] = n, r || (r = {}), s = e.call(this, i, r), this._trackingChanges && !r.silent && !r.trackit_silent && (_.each(i, _.bind(function(e, t) {
                _.isEqual(this._originalAttrs[t], e) ? delete this._unsavedChanges[t] : this._unsavedChanges[t] = e
            }, this)), this._triggerUnsavedChanges()), s)
        }), Backbone.sync = _.wrap(Backbone.sync, function(e, t, n, r) {
            r || (r = {});
            if (t == "update" || t == "create" || t == "patch") r.success = _.wrap(r.success, _.bind(function(e, t, r, i) {
                var s;
                return e && (s = e.call(this, t, r, i)), n._trackingChanges && (n._resetTracking(), n._triggerUnsavedChanges()), s
            }, this));
            return e(t, n, r)
        })
    }(), Backbone.ComputedFields = function(e, t) {
        var n = function(e) {
            this.model = e, this._computedFields = [], this.initialize()
        };
        return t.extend(n.prototype, {
            initialize: function() {
                t.bindAll(this, "_bindModelEvents", "_computeFieldValue", "_dependentFields", "_isModelInitialized", "_lookUpComputedFields", "_thenComputedChanges", "_thenDependentChanges", "_toJSON", "_wrapJSON", "initialize"), this._lookUpComputedFields(), this._bindModelEvents(), this._wrapJSON()
            },
            _lookUpComputedFields: function() {
                for (var e in this.model.computed) {
                    var t = this.model.computed[e];
                    t && (t.set || t.get) && this._computedFields.push({
                        name: e,
                        field: t
                    })
                }
            },
            _bindModelEvents: function() {
                t.each(this._computedFields, function(e) {
                    var n = e.name,
                        r = e.field,
                        i = t.bind(function() {
                            var e = this._computeFieldValue(r);
                            this.model.set(n, e, {
                                skipChangeEvent: !0
                            })
                        }, this),
                        s = t.bind(function(e, t, i) {
                            if (i && i.skipChangeEvent) return;
                            if (r.set) {
                                var s = this._dependentFields(r.depends);
                                t = t || this.model.get(n), r.set.call(this.model, t, s), this.model.set(s, i)
                            }
                        }, this);
                    this._thenDependentChanges(r.depends, i), this._thenComputedChanges(n, s), this._isModelInitialized() && i()
                }, this)
            },
            _isModelInitialized: function() {
                return !t.isEmpty(this.model.attributes)
            },
            _thenDependentChanges: function(e, n) {
                t.each(e, function(e) {
                    typeof e == "string" && this.model.on("change:" + e, n), typeof e == "function" && e.call(this.model, n)
                }, this)
            },
            _thenComputedChanges: function(e, t) {
                this.model.on("change:" + e, t)
            },
            _wrapJSON: function() {
                this.model.toJSON = t.wrap(this.model.toJSON, this._toJSON)
            },
            _toJSON: function(e) {
                var n = Array.prototype.slice.call(arguments, 1),
                    r = e.apply(this.model, n),
                    i = !!(n[0] || {}).computedFields,
                    s = i ? {} : t.reduce(this._computedFields, function(e, t) {
                        return t.field.toJSON === !1 && e.push(t.name), e
                    }, []);
                return t.omit(r, s)
            },
            _computeFieldValue: function(e) {
                if (e && e.get) {
                    var t = this._dependentFields(e.depends);
                    return e.get.call(this.model, t)
                }
            },
            _dependentFields: function(e) {
                return t.reduce(e, function(e, t) {
                    return e[t] = this.model.get(t), e
                }, {}, this)
            }
        }), n
    }(Backbone, _),
    function(e) {
        Backbone._sync = Backbone.sync, Backbone.sync = function(t, n, r) {
            if (!r.noCSRF) {
                var i = r.beforeSend;
                r.beforeSend = function(t) {
                    var n = e('meta[name="csrf-token"]').attr("content");
                    n && t.setRequestHeader("X-CSRF-Token", n);
                    if (i) return i.apply(this, arguments)
                }
            }
            return r.data == null && n && (t === "create" || t === "update" || t === "patch") && (r.contentType = "application/json", data = JSON.stringify(r.attrs || n.toJSON(r)), n.paramRoot ? (data = {}, data[n.paramRoot] = n.toJSON(r)) : data = n.toJSON(), r.data = JSON.stringify(data)), Backbone._sync(t, n, r)
        }
    }(jQuery),
    function(e, t) {
        typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? module.exports = t() : e.Handlebars = e.Handlebars || t()
    }(this, function() {
        var e = function() {
                "use strict";

                function t(e) {
                    this.string = e
                }
                var e;
                return t.prototype.toString = function() {
                    return "" + this.string
                }, e = t, e
            }(),
            t = function(e) {
                "use strict";

                function o(e) {
                    return r[e]
                }

                function u(e) {
                    for (var t = 1; t < arguments.length; t++)
                        for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
                    return e
                }

                function c(e) {
                    return e instanceof n ? e.toString() : e == null ? "" : e ? (e = "" + e, s.test(e) ? e.replace(i, o) : e) : e + ""
                }

                function h(e) {
                    return !e && e !== 0 ? !0 : l(e) && e.length === 0 ? !0 : !1
                }

                function p(e, t) {
                    return (e ? e + "." : "") + t
                }
                var t = {},
                    n = e,
                    r = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "`": "&#x60;"
                    },
                    i = /[&<>"'`]/g,
                    s = /[&<>"'`]/;
                t.extend = u;
                var a = Object.prototype.toString;
                t.toString = a;
                var f = function(e) {
                    return typeof e == "function"
                };
                f(/x/) && (f = function(e) {
                    return typeof e == "function" && a.call(e) === "[object Function]"
                });
                var f;
                t.isFunction = f;
                var l = Array.isArray || function(e) {
                    return e && typeof e == "object" ? a.call(e) === "[object Array]" : !1
                };
                return t.isArray = l, t.escapeExpression = c, t.isEmpty = h, t.appendContextPath = p, t
            }(e),
            n = function() {
                "use strict";

                function n(e, n) {
                    var r;
                    n && n.firstLine && (r = n.firstLine, e += " - " + r + ":" + n.firstColumn);
                    var i = Error.prototype.constructor.call(this, e);
                    for (var s = 0; s < t.length; s++) this[t[s]] = i[t[s]];
                    r && (this.lineNumber = r, this.column = n.firstColumn)
                }
                var e, t = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
                return n.prototype = new Error, e = n, e
            }(),
            r = function(e, t) {
                "use strict";

                function h(e, t) {
                    this.helpers = e || {}, this.partials = t || {}, p(this)
                }

                function p(e) {
                    e.registerHelper("helperMissing", function() {
                        if (arguments.length === 1) return undefined;
                        throw new i("Missing helper: '" + arguments[arguments.length - 1].name + "'")
                    }), e.registerHelper("blockHelperMissing", function(t, n) {
                        var i = n.inverse,
                            s = n.fn;
                        if (t === !0) return s(this);
                        if (t === !1 || t == null) return i(this);
                        if (a(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : i(this);
                        if (n.data && n.ids) {
                            var o = m(n.data);
                            o.contextPath = r.appendContextPath(n.data.contextPath, n.name), n = {
                                data: o
                            }
                        }
                        return s(t, n)
                    }), e.registerHelper("each", function(e, t) {
                        if (!t) throw new i("Must pass iterator to #each");
                        var n = t.fn,
                            s = t.inverse,
                            o = 0,
                            u = "",
                            l, c;
                        t.data && t.ids && (c = r.appendContextPath(t.data.contextPath, t.ids[0]) + "."), f(e) && (e = e.call(this)), t.data && (l = m(t.data));
                        if (e && typeof e == "object")
                            if (a(e))
                                for (var h = e.length; o < h; o++) l && (l.index = o, l.first = o === 0, l.last = o === e.length - 1, c && (l.contextPath = c + o)), u += n(e[o], {
                                    data: l
                                });
                            else
                                for (var p in e) e.hasOwnProperty(p) && (l && (l.key = p, l.index = o, l.first = o === 0, c && (l.contextPath = c + p)), u += n(e[p], {
                                    data: l
                                }), o++);
                        return o === 0 && (u = s(this)), u
                    }), e.registerHelper("if", function(e, t) {
                        return f(e) && (e = e.call(this)), !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
                    }), e.registerHelper("unless", function(t, n) {
                        return e.helpers["if"].call(this, t, {
                            fn: n.inverse,
                            inverse: n.fn,
                            hash: n.hash
                        })
                    }), e.registerHelper("with", function(e, t) {
                        f(e) && (e = e.call(this));
                        var n = t.fn;
                        if (!r.isEmpty(e)) {
                            if (t.data && t.ids) {
                                var i = m(t.data);
                                i.contextPath = r.appendContextPath(t.data.contextPath, t.ids[0]), t = {
                                    data: i
                                }
                            }
                            return n(e, t)
                        }
                        return t.inverse(this)
                    }), e.registerHelper("log", function(t, n) {
                        var r = n.data && n.data.level != null ? parseInt(n.data.level, 10) : 1;
                        e.log(r, t)
                    }), e.registerHelper("lookup", function(e, t) {
                        return e && e[t]
                    })
                }
                var n = {},
                    r = e,
                    i = t,
                    s = "2.0.0";
                n.VERSION = s;
                var o = 6;
                n.COMPILER_REVISION = o;
                var u = {
                    1: "<= 1.0.rc.2",
                    2: "== 1.0.0-rc.3",
                    3: "== 1.0.0-rc.4",
                    4: "== 1.x.x",
                    5: "== 2.0.0-alpha.x",
                    6: ">= 2.0.0-beta.1"
                };
                n.REVISION_CHANGES = u;
                var a = r.isArray,
                    f = r.isFunction,
                    l = r.toString,
                    c = "[object Object]";
                n.HandlebarsEnvironment = h, h.prototype = {
                    constructor: h,
                    logger: d,
                    log: v,
                    registerHelper: function(e, t) {
                        if (l.call(e) === c) {
                            if (t) throw new i("Arg not supported with multiple helpers");
                            r.extend(this.helpers, e)
                        } else this.helpers[e] = t
                    },
                    unregisterHelper: function(e) {
                        delete this.helpers[e]
                    },
                    registerPartial: function(e, t) {
                        l.call(e) === c ? r.extend(this.partials, e) : this.partials[e] = t
                    },
                    unregisterPartial: function(e) {
                        delete this.partials[e]
                    }
                };
                var d = {
                    methodMap: {
                        0: "debug",
                        1: "info",
                        2: "warn",
                        3: "error"
                    },
                    DEBUG: 0,
                    INFO: 1,
                    WARN: 2,
                    ERROR: 3,
                    level: 3,
                    log: function(e, t) {
                        if (d.level <= e) {
                            var n = d.methodMap[e];
                            typeof console != "undefined" && console[n] && console[n].call(console, t)
                        }
                    }
                };
                n.logger = d;
                var v = d.log;
                n.log = v;
                var m = function(e) {
                    var t = r.extend({}, e);
                    return t._parent = e, t
                };
                return n.createFrame = m, n
            }(t, n),
            i = function(e, t, n) {
                "use strict";

                function f(e) {
                    var t = e && e[0] || 1,
                        n = o;
                    if (t !== n) {
                        if (t < n) {
                            var r = u[n],
                                i = u[t];
                            throw new s("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").")
                        }
                        throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
                    }
                }

                function l(e, t) {
                    if (!t) throw new s("No environment passed to template");
                    if (!e || !e.main) throw new s("Unknown template object: " + typeof e);
                    t.VM.checkRevision(e.compiler);
                    var n = function(n, r, o, u, a, f, l, c, h) {
                            a && (u = i.extend({}, u, a));
                            var p = t.VM.invokePartial.call(this, n, o, u, f, l, c, h);
                            if (p == null && t.compile) {
                                var d = {
                                    helpers: f,
                                    partials: l,
                                    data: c,
                                    depths: h
                                };
                                l[o] = t.compile(n, {
                                    data: c !== undefined,
                                    compat: e.compat
                                }, t), p = l[o](u, d)
                            }
                            if (p != null) {
                                if (r) {
                                    var v = p.split("\n");
                                    for (var m = 0, g = v.length; m < g; m++) {
                                        if (!v[m] && m + 1 === g) break;
                                        v[m] = r + v[m]
                                    }
                                    p = v.join("\n")
                                }
                                return p
                            }
                            throw new s("The partial " + o + " could not be compiled when running in runtime-only mode")
                        },
                        r = {
                            lookup: function(e, t) {
                                var n = e.length;
                                for (var r = 0; r < n; r++)
                                    if (e[r] && e[r][t] != null) return e[r][t]
                            },
                            lambda: function(e, t) {
                                return typeof e == "function" ? e.call(t) : e
                            },
                            escapeExpression: i.escapeExpression,
                            invokePartial: n,
                            fn: function(t) {
                                return e[t]
                            },
                            programs: [],
                            program: function(e, t, n) {
                                var r = this.programs[e],
                                    i = this.fn(e);
                                return t || n ? r = c(this, e, i, t, n) : r || (r = this.programs[e] = c(this, e, i)), r
                            },
                            data: function(e, t) {
                                while (e && t--) e = e._parent;
                                return e
                            },
                            merge: function(e, t) {
                                var n = e || t;
                                return e && t && e !== t && (n = i.extend({}, t, e)), n
                            },
                            noop: t.VM.noop,
                            compilerInfo: e.compiler
                        },
                        o = function(t, n) {
                            n = n || {};
                            var i = n.data;
                            o._setup(n), !n.partial && e.useData && (i = d(t, i));
                            var s;
                            return e.useDepths && (s = n.depths ? [t].concat(n.depths) : [t]), e.main.call(r, t, r.helpers, r.partials, i, s)
                        };
                    return o.isTop = !0, o._setup = function(n) {
                        n.partial ? (r.helpers = n.helpers, r.partials = n.partials) : (r.helpers = r.merge(n.helpers, t.helpers), e.usePartial && (r.partials = r.merge(n.partials, t.partials)))
                    }, o._child = function(t, n, i) {
                        if (e.useDepths && !i) throw new s("must pass parent depths");
                        return c(r, t, e[t], n, i)
                    }, o
                }

                function c(e, t, n, r, i) {
                    var s = function(t, s) {
                        return s = s || {}, n.call(e, t, e.helpers, e.partials, s.data || r, i && [t].concat(i))
                    };
                    return s.program = t, s.depth = i ? i.length : 0, s
                }

                function h(e, t, n, r, i, o, u) {
                    var a = {
                        partial: !0,
                        helpers: r,
                        partials: i,
                        data: o,
                        depths: u
                    };
                    if (e === undefined) throw new s("The partial " + t + " could not be found");
                    if (e instanceof Function) return e(n, a)
                }

                function p() {
                    return ""
                }

                function d(e, t) {
                    if (!t || !("root" in t)) t = t ? a(t) : {}, t.root = e;
                    return t
                }
                var r = {},
                    i = e,
                    s = t,
                    o = n.COMPILER_REVISION,
                    u = n.REVISION_CHANGES,
                    a = n.createFrame;
                return r.checkRevision = f, r.template = l, r.program = c, r.invokePartial = h, r.noop = p, r
            }(t, n, r),
            s = function(e, t, n, r, i) {
                "use strict";
                var s, o = e,
                    u = t,
                    a = n,
                    f = r,
                    l = i,
                    c = function() {
                        var e = new o.HandlebarsEnvironment;
                        return f.extend(e, o), e.SafeString = u, e.Exception = a, e.Utils = f, e.escapeExpression = f.escapeExpression, e.VM = l, e.template = function(t) {
                            return l.template(t, e)
                        }, e
                    },
                    h = c();
                return h.create = c, h["default"] = h, s = h, s
            }(r, e, n, t, i),
            o = function(e) {
                "use strict";

                function r(e) {
                    e = e || {}, this.firstLine = e.first_line, this.firstColumn = e.first_column, this.lastColumn = e.last_column, this.lastLine = e.last_line
                }
                var t, n = e,
                    i = {
                        ProgramNode: function(e, t, n) {
                            r.call(this, n), this.type = "program", this.statements = e, this.strip = t
                        },
                        MustacheNode: function(e, t, n, s, o) {
                            r.call(this, o), this.type = "mustache", this.strip = s;
                            if (n != null && n.charAt) {
                                var u = n.charAt(3) || n.charAt(2);
                                this.escaped = u !== "{" && u !== "&"
                            } else this.escaped = !!n;
                            e instanceof i.SexprNode ? this.sexpr = e : this.sexpr = new i.SexprNode(e, t), this.id = this.sexpr.id, this.params = this.sexpr.params, this.hash = this.sexpr.hash, this.eligibleHelper = this.sexpr.eligibleHelper, this.isHelper = this.sexpr.isHelper
                        },
                        SexprNode: function(e, t, n) {
                            r.call(this, n), this.type = "sexpr", this.hash = t;
                            var i = this.id = e[0],
                                s = this.params = e.slice(1);
                            this.isHelper = !!s.length || !!t, this.eligibleHelper = this.isHelper || i.isSimple
                        },
                        PartialNode: function(e, t, n, i, s) {
                            r.call(this, s), this.type = "partial", this.partialName = e, this.context = t, this.hash = n, this.strip = i, this.strip.inlineStandalone = !0
                        },
                        BlockNode: function(e, t, n, i, s) {
                            r.call(this, s), this.type = "block", this.mustache = e, this.program = t, this.inverse = n, this.strip = i, n && !t && (this.isInverse = !0)
                        },
                        RawBlockNode: function(e, t, s, o) {
                            r.call(this, o);
                            if (e.sexpr.id.original !== s) throw new n(e.sexpr.id.original + " doesn't match " + s, this);
                            t = new i.ContentNode(t, o), this.type = "block", this.mustache = e, this.program = new i.ProgramNode([t], {}, o)
                        },
                        ContentNode: function(e, t) {
                            r.call(this, t), this.type = "content", this.original = this.string = e
                        },
                        HashNode: function(e, t) {
                            r.call(this, t), this.type = "hash", this.pairs = e
                        },
                        IdNode: function(e, t) {
                            r.call(this, t), this.type = "ID";
                            var i = "",
                                s = [],
                                o = 0,
                                u = "";
                            for (var a = 0, f = e.length; a < f; a++) {
                                var l = e[a].part;
                                i += (e[a].separator || "") + l;
                                if (l === ".." || l === "." || l === "this") {
                                    if (s.length > 0) throw new n("Invalid path: " + i, this);
                                    l === ".." ? (o++, u += "../") : this.isScoped = !0
                                } else s.push(l)
                            }
                            this.original = i, this.parts = s, this.string = s.join("."), this.depth = o, this.idName = u + this.string, this.isSimple = e.length === 1 && !this.isScoped && o === 0, this.stringModeValue = this.string
                        },
                        PartialNameNode: function(e, t) {
                            r.call(this, t), this.type = "PARTIAL_NAME", this.name = e.original
                        },
                        DataNode: function(e, t) {
                            r.call(this, t), this.type = "DATA", this.id = e, this.stringModeValue = e.stringModeValue, this.idName = "@" + e.stringModeValue
                        },
                        StringNode: function(e, t) {
                            r.call(this, t), this.type = "STRING", this.original = this.string = this.stringModeValue = e
                        },
                        NumberNode: function(e, t) {
                            r.call(this, t), this.type = "NUMBER", this.original = this.number = e, this.stringModeValue = Number(e)
                        },
                        BooleanNode: function(e, t) {
                            r.call(this, t), this.type = "BOOLEAN", this.bool = e, this.stringModeValue = e === "true"
                        },
                        CommentNode: function(e, t) {
                            r.call(this, t), this.type = "comment", this.comment = e, this.strip = {
                                inlineStandalone: !0
                            }
                        }
                    };
                return t = i, t
            }(n),
            u = function() {
                "use strict";
                var e, t = function() {
                    function n() {
                        this.yy = {}
                    }
                    var e = {
                            trace: function() {},
                            yy: {},
                            symbols_: {
                                error: 2,
                                root: 3,
                                program: 4,
                                EOF: 5,
                                program_repetition0: 6,
                                statement: 7,
                                mustache: 8,
                                block: 9,
                                rawBlock: 10,
                                partial: 11,
                                CONTENT: 12,
                                COMMENT: 13,
                                openRawBlock: 14,
                                END_RAW_BLOCK: 15,
                                OPEN_RAW_BLOCK: 16,
                                sexpr: 17,
                                CLOSE_RAW_BLOCK: 18,
                                openBlock: 19,
                                block_option0: 20,
                                closeBlock: 21,
                                openInverse: 22,
                                block_option1: 23,
                                OPEN_BLOCK: 24,
                                CLOSE: 25,
                                OPEN_INVERSE: 26,
                                inverseAndProgram: 27,
                                INVERSE: 28,
                                OPEN_ENDBLOCK: 29,
                                path: 30,
                                OPEN: 31,
                                OPEN_UNESCAPED: 32,
                                CLOSE_UNESCAPED: 33,
                                OPEN_PARTIAL: 34,
                                partialName: 35,
                                param: 36,
                                partial_option0: 37,
                                partial_option1: 38,
                                sexpr_repetition0: 39,
                                sexpr_option0: 40,
                                dataName: 41,
                                STRING: 42,
                                NUMBER: 43,
                                BOOLEAN: 44,
                                OPEN_SEXPR: 45,
                                CLOSE_SEXPR: 46,
                                hash: 47,
                                hash_repetition_plus0: 48,
                                hashSegment: 49,
                                ID: 50,
                                EQUALS: 51,
                                DATA: 52,
                                pathSegments: 53,
                                SEP: 54,
                                $accept: 0,
                                $end: 1
                            },
                            terminals_: {
                                2: "error",
                                5: "EOF",
                                12: "CONTENT",
                                13: "COMMENT",
                                15: "END_RAW_BLOCK",
                                16: "OPEN_RAW_BLOCK",
                                18: "CLOSE_RAW_BLOCK",
                                24: "OPEN_BLOCK",
                                25: "CLOSE",
                                26: "OPEN_INVERSE",
                                28: "INVERSE",
                                29: "OPEN_ENDBLOCK",
                                31: "OPEN",
                                32: "OPEN_UNESCAPED",
                                33: "CLOSE_UNESCAPED",
                                34: "OPEN_PARTIAL",
                                42: "STRING",
                                43: "NUMBER",
                                44: "BOOLEAN",
                                45: "OPEN_SEXPR",
                                46: "CLOSE_SEXPR",
                                50: "ID",
                                51: "EQUALS",
                                52: "DATA",
                                54: "SEP"
                            },
                            productions_: [0, [3, 2],
                                [4, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [10, 3],
                                [14, 3],
                                [9, 4],
                                [9, 4],
                                [19, 3],
                                [22, 3],
                                [27, 2],
                                [21, 3],
                                [8, 3],
                                [8, 3],
                                [11, 5],
                                [11, 4],
                                [17, 3],
                                [17, 1],
                                [36, 1],
                                [36, 1],
                                [36, 1],
                                [36, 1],
                                [36, 1],
                                [36, 3],
                                [47, 1],
                                [49, 3],
                                [35, 1],
                                [35, 1],
                                [35, 1],
                                [41, 2],
                                [30, 1],
                                [53, 3],
                                [53, 1],
                                [6, 0],
                                [6, 2],
                                [20, 0],
                                [20, 1],
                                [23, 0],
                                [23, 1],
                                [37, 0],
                                [37, 1],
                                [38, 0],
                                [38, 1],
                                [39, 0],
                                [39, 2],
                                [40, 0],
                                [40, 1],
                                [48, 1],
                                [48, 2]
                            ],
                            performAction: function(t, n, r, i, s, o, u) {
                                var a = o.length - 1;
                                switch (s) {
                                    case 1:
                                        return i.prepareProgram(o[a - 1].statements, !0), o[a - 1];
                                    case 2:
                                        this.$ = new i.ProgramNode(i.prepareProgram(o[a]), {}, this._$);
                                        break;
                                    case 3:
                                        this.$ = o[a];
                                        break;
                                    case 4:
                                        this.$ = o[a];
                                        break;
                                    case 5:
                                        this.$ = o[a];
                                        break;
                                    case 6:
                                        this.$ = o[a];
                                        break;
                                    case 7:
                                        this.$ = new i.ContentNode(o[a], this._$);
                                        break;
                                    case 8:
                                        this.$ = new i.CommentNode(o[a], this._$);
                                        break;
                                    case 9:
                                        this.$ = new i.RawBlockNode(o[a - 2], o[a - 1], o[a], this._$);
                                        break;
                                    case 10:
                                        this.$ = new i.MustacheNode(o[a - 1], null, "", "", this._$);
                                        break;
                                    case 11:
                                        this.$ = i.prepareBlock(o[a - 3], o[a - 2], o[a - 1], o[a], !1, this._$);
                                        break;
                                    case 12:
                                        this.$ = i.prepareBlock(o[a - 3], o[a - 2], o[a - 1], o[a], !0, this._$);
                                        break;
                                    case 13:
                                        this.$ = new i.MustacheNode(o[a - 1], null, o[a - 2], i.stripFlags(o[a - 2], o[a]), this._$);
                                        break;
                                    case 14:
                                        this.$ = new i.MustacheNode(o[a - 1], null, o[a - 2], i.stripFlags(o[a - 2], o[a]), this._$);
                                        break;
                                    case 15:
                                        this.$ = {
                                            strip: i.stripFlags(o[a - 1], o[a - 1]),
                                            program: o[a]
                                        };
                                        break;
                                    case 16:
                                        this.$ = {
                                            path: o[a - 1],
                                            strip: i.stripFlags(o[a - 2], o[a])
                                        };
                                        break;
                                    case 17:
                                        this.$ = new i.MustacheNode(o[a - 1], null, o[a - 2], i.stripFlags(o[a - 2], o[a]), this._$);
                                        break;
                                    case 18:
                                        this.$ = new i.MustacheNode(o[a - 1], null, o[a - 2], i.stripFlags(o[a - 2], o[a]), this._$);
                                        break;
                                    case 19:
                                        this.$ = new i.PartialNode(o[a - 3], o[a - 2], o[a - 1], i.stripFlags(o[a - 4], o[a]), this._$);
                                        break;
                                    case 20:
                                        this.$ = new i.PartialNode(o[a - 2], undefined, o[a - 1], i.stripFlags(o[a - 3], o[a]), this._$);
                                        break;
                                    case 21:
                                        this.$ = new i.SexprNode([o[a - 2]].concat(o[a - 1]), o[a], this._$);
                                        break;
                                    case 22:
                                        this.$ = new i.SexprNode([o[a]], null, this._$);
                                        break;
                                    case 23:
                                        this.$ = o[a];
                                        break;
                                    case 24:
                                        this.$ = new i.StringNode(o[a], this._$);
                                        break;
                                    case 25:
                                        this.$ = new i.NumberNode(o[a], this._$);
                                        break;
                                    case 26:
                                        this.$ = new i.BooleanNode(o[a], this._$);
                                        break;
                                    case 27:
                                        this.$ = o[a];
                                        break;
                                    case 28:
                                        o[a - 1].isHelper = !0, this.$ = o[a - 1];
                                        break;
                                    case 29:
                                        this.$ = new i.HashNode(o[a], this._$);
                                        break;
                                    case 30:
                                        this.$ = [o[a - 2], o[a]];
                                        break;
                                    case 31:
                                        this.$ = new i.PartialNameNode(o[a], this._$);
                                        break;
                                    case 32:
                                        this.$ = new i.PartialNameNode(new i.StringNode(o[a], this._$), this._$);
                                        break;
                                    case 33:
                                        this.$ = new i.PartialNameNode(new i.NumberNode(o[a], this._$));
                                        break;
                                    case 34:
                                        this.$ = new i.DataNode(o[a], this._$);
                                        break;
                                    case 35:
                                        this.$ = new i.IdNode(o[a], this._$);
                                        break;
                                    case 36:
                                        o[a - 2].push({
                                            part: o[a],
                                            separator: o[a - 1]
                                        }), this.$ = o[a - 2];
                                        break;
                                    case 37:
                                        this.$ = [{
                                            part: o[a]
                                        }];
                                        break;
                                    case 38:
                                        this.$ = [];
                                        break;
                                    case 39:
                                        o[a - 1].push(o[a]);
                                        break;
                                    case 48:
                                        this.$ = [];
                                        break;
                                    case 49:
                                        o[a - 1].push(o[a]);
                                        break;
                                    case 52:
                                        this.$ = [o[a]];
                                        break;
                                    case 53:
                                        o[a - 1].push(o[a])
                                }
                            },
                            table: [{
                                3: 1,
                                4: 2,
                                5: [2, 38],
                                6: 3,
                                12: [2, 38],
                                13: [2, 38],
                                16: [2, 38],
                                24: [2, 38],
                                26: [2, 38],
                                31: [2, 38],
                                32: [2, 38],
                                34: [2, 38]
                            }, {
                                1: [3]
                            }, {
                                5: [1, 4]
                            }, {
                                5: [2, 2],
                                7: 5,
                                8: 6,
                                9: 7,
                                10: 8,
                                11: 9,
                                12: [1, 10],
                                13: [1, 11],
                                14: 16,
                                16: [1, 20],
                                19: 14,
                                22: 15,
                                24: [1, 18],
                                26: [1, 19],
                                28: [2, 2],
                                29: [2, 2],
                                31: [1, 12],
                                32: [1, 13],
                                34: [1, 17]
                            }, {
                                1: [2, 1]
                            }, {
                                5: [2, 39],
                                12: [2, 39],
                                13: [2, 39],
                                16: [2, 39],
                                24: [2, 39],
                                26: [2, 39],
                                28: [2, 39],
                                29: [2, 39],
                                31: [2, 39],
                                32: [2, 39],
                                34: [2, 39]
                            }, {
                                5: [2, 3],
                                12: [2, 3],
                                13: [2, 3],
                                16: [2, 3],
                                24: [2, 3],
                                26: [2, 3],
                                28: [2, 3],
                                29: [2, 3],
                                31: [2, 3],
                                32: [2, 3],
                                34: [2, 3]
                            }, {
                                5: [2, 4],
                                12: [2, 4],
                                13: [2, 4],
                                16: [2, 4],
                                24: [2, 4],
                                26: [2, 4],
                                28: [2, 4],
                                29: [2, 4],
                                31: [2, 4],
                                32: [2, 4],
                                34: [2, 4]
                            }, {
                                5: [2, 5],
                                12: [2, 5],
                                13: [2, 5],
                                16: [2, 5],
                                24: [2, 5],
                                26: [2, 5],
                                28: [2, 5],
                                29: [2, 5],
                                31: [2, 5],
                                32: [2, 5],
                                34: [2, 5]
                            }, {
                                5: [2, 6],
                                12: [2, 6],
                                13: [2, 6],
                                16: [2, 6],
                                24: [2, 6],
                                26: [2, 6],
                                28: [2, 6],
                                29: [2, 6],
                                31: [2, 6],
                                32: [2, 6],
                                34: [2, 6]
                            }, {
                                5: [2, 7],
                                12: [2, 7],
                                13: [2, 7],
                                16: [2, 7],
                                24: [2, 7],
                                26: [2, 7],
                                28: [2, 7],
                                29: [2, 7],
                                31: [2, 7],
                                32: [2, 7],
                                34: [2, 7]
                            }, {
                                5: [2, 8],
                                12: [2, 8],
                                13: [2, 8],
                                16: [2, 8],
                                24: [2, 8],
                                26: [2, 8],
                                28: [2, 8],
                                29: [2, 8],
                                31: [2, 8],
                                32: [2, 8],
                                34: [2, 8]
                            }, {
                                17: 21,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                17: 27,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                4: 28,
                                6: 3,
                                12: [2, 38],
                                13: [2, 38],
                                16: [2, 38],
                                24: [2, 38],
                                26: [2, 38],
                                28: [2, 38],
                                29: [2, 38],
                                31: [2, 38],
                                32: [2, 38],
                                34: [2, 38]
                            }, {
                                4: 29,
                                6: 3,
                                12: [2, 38],
                                13: [2, 38],
                                16: [2, 38],
                                24: [2, 38],
                                26: [2, 38],
                                28: [2, 38],
                                29: [2, 38],
                                31: [2, 38],
                                32: [2, 38],
                                34: [2, 38]
                            }, {
                                12: [1, 30]
                            }, {
                                30: 32,
                                35: 31,
                                42: [1, 33],
                                43: [1, 34],
                                50: [1, 26],
                                53: 24
                            }, {
                                17: 35,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                17: 36,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                17: 37,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                25: [1, 38]
                            }, {
                                18: [2, 48],
                                25: [2, 48],
                                33: [2, 48],
                                39: 39,
                                42: [2, 48],
                                43: [2, 48],
                                44: [2, 48],
                                45: [2, 48],
                                46: [2, 48],
                                50: [2, 48],
                                52: [2, 48]
                            }, {
                                18: [2, 22],
                                25: [2, 22],
                                33: [2, 22],
                                46: [2, 22]
                            }, {
                                18: [2, 35],
                                25: [2, 35],
                                33: [2, 35],
                                42: [2, 35],
                                43: [2, 35],
                                44: [2, 35],
                                45: [2, 35],
                                46: [2, 35],
                                50: [2, 35],
                                52: [2, 35],
                                54: [1, 40]
                            }, {
                                30: 41,
                                50: [1, 26],
                                53: 24
                            }, {
                                18: [2, 37],
                                25: [2, 37],
                                33: [2, 37],
                                42: [2, 37],
                                43: [2, 37],
                                44: [2, 37],
                                45: [2, 37],
                                46: [2, 37],
                                50: [2, 37],
                                52: [2, 37],
                                54: [2, 37]
                            }, {
                                33: [1, 42]
                            }, {
                                20: 43,
                                27: 44,
                                28: [1, 45],
                                29: [2, 40]
                            }, {
                                23: 46,
                                27: 47,
                                28: [1, 45],
                                29: [2, 42]
                            }, {
                                15: [1, 48]
                            }, {
                                25: [2, 46],
                                30: 51,
                                36: 49,
                                38: 50,
                                41: 55,
                                42: [1, 52],
                                43: [1, 53],
                                44: [1, 54],
                                45: [1, 56],
                                47: 57,
                                48: 58,
                                49: 60,
                                50: [1, 59],
                                52: [1, 25],
                                53: 24
                            }, {
                                25: [2, 31],
                                42: [2, 31],
                                43: [2, 31],
                                44: [2, 31],
                                45: [2, 31],
                                50: [2, 31],
                                52: [2, 31]
                            }, {
                                25: [2, 32],
                                42: [2, 32],
                                43: [2, 32],
                                44: [2, 32],
                                45: [2, 32],
                                50: [2, 32],
                                52: [2, 32]
                            }, {
                                25: [2, 33],
                                42: [2, 33],
                                43: [2, 33],
                                44: [2, 33],
                                45: [2, 33],
                                50: [2, 33],
                                52: [2, 33]
                            }, {
                                25: [1, 61]
                            }, {
                                25: [1, 62]
                            }, {
                                18: [1, 63]
                            }, {
                                5: [2, 17],
                                12: [2, 17],
                                13: [2, 17],
                                16: [2, 17],
                                24: [2, 17],
                                26: [2, 17],
                                28: [2, 17],
                                29: [2, 17],
                                31: [2, 17],
                                32: [2, 17],
                                34: [2, 17]
                            }, {
                                18: [2, 50],
                                25: [2, 50],
                                30: 51,
                                33: [2, 50],
                                36: 65,
                                40: 64,
                                41: 55,
                                42: [1, 52],
                                43: [1, 53],
                                44: [1, 54],
                                45: [1, 56],
                                46: [2, 50],
                                47: 66,
                                48: 58,
                                49: 60,
                                50: [1, 59],
                                52: [1, 25],
                                53: 24
                            }, {
                                50: [1, 67]
                            }, {
                                18: [2, 34],
                                25: [2, 34],
                                33: [2, 34],
                                42: [2, 34],
                                43: [2, 34],
                                44: [2, 34],
                                45: [2, 34],
                                46: [2, 34],
                                50: [2, 34],
                                52: [2, 34]
                            }, {
                                5: [2, 18],
                                12: [2, 18],
                                13: [2, 18],
                                16: [2, 18],
                                24: [2, 18],
                                26: [2, 18],
                                28: [2, 18],
                                29: [2, 18],
                                31: [2, 18],
                                32: [2, 18],
                                34: [2, 18]
                            }, {
                                21: 68,
                                29: [1, 69]
                            }, {
                                29: [2, 41]
                            }, {
                                4: 70,
                                6: 3,
                                12: [2, 38],
                                13: [2, 38],
                                16: [2, 38],
                                24: [2, 38],
                                26: [2, 38],
                                29: [2, 38],
                                31: [2, 38],
                                32: [2, 38],
                                34: [2, 38]
                            }, {
                                21: 71,
                                29: [1, 69]
                            }, {
                                29: [2, 43]
                            }, {
                                5: [2, 9],
                                12: [2, 9],
                                13: [2, 9],
                                16: [2, 9],
                                24: [2, 9],
                                26: [2, 9],
                                28: [2, 9],
                                29: [2, 9],
                                31: [2, 9],
                                32: [2, 9],
                                34: [2, 9]
                            }, {
                                25: [2, 44],
                                37: 72,
                                47: 73,
                                48: 58,
                                49: 60,
                                50: [1, 74]
                            }, {
                                25: [1, 75]
                            }, {
                                18: [2, 23],
                                25: [2, 23],
                                33: [2, 23],
                                42: [2, 23],
                                43: [2, 23],
                                44: [2, 23],
                                45: [2, 23],
                                46: [2, 23],
                                50: [2, 23],
                                52: [2, 23]
                            }, {
                                18: [2, 24],
                                25: [2, 24],
                                33: [2, 24],
                                42: [2, 24],
                                43: [2, 24],
                                44: [2, 24],
                                45: [2, 24],
                                46: [2, 24],
                                50: [2, 24],
                                52: [2, 24]
                            }, {
                                18: [2, 25],
                                25: [2, 25],
                                33: [2, 25],
                                42: [2, 25],
                                43: [2, 25],
                                44: [2, 25],
                                45: [2, 25],
                                46: [2, 25],
                                50: [2, 25],
                                52: [2, 25]
                            }, {
                                18: [2, 26],
                                25: [2, 26],
                                33: [2, 26],
                                42: [2, 26],
                                43: [2, 26],
                                44: [2, 26],
                                45: [2, 26],
                                46: [2, 26],
                                50: [2, 26],
                                52: [2, 26]
                            }, {
                                18: [2, 27],
                                25: [2, 27],
                                33: [2, 27],
                                42: [2, 27],
                                43: [2, 27],
                                44: [2, 27],
                                45: [2, 27],
                                46: [2, 27],
                                50: [2, 27],
                                52: [2, 27]
                            }, {
                                17: 76,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                25: [2, 47]
                            }, {
                                18: [2, 29],
                                25: [2, 29],
                                33: [2, 29],
                                46: [2, 29],
                                49: 77,
                                50: [1, 74]
                            }, {
                                18: [2, 37],
                                25: [2, 37],
                                33: [2, 37],
                                42: [2, 37],
                                43: [2, 37],
                                44: [2, 37],
                                45: [2, 37],
                                46: [2, 37],
                                50: [2, 37],
                                51: [1, 78],
                                52: [2, 37],
                                54: [2, 37]
                            }, {
                                18: [2, 52],
                                25: [2, 52],
                                33: [2, 52],
                                46: [2, 52],
                                50: [2, 52]
                            }, {
                                12: [2, 13],
                                13: [2, 13],
                                16: [2, 13],
                                24: [2, 13],
                                26: [2, 13],
                                28: [2, 13],
                                29: [2, 13],
                                31: [2, 13],
                                32: [2, 13],
                                34: [2, 13]
                            }, {
                                12: [2, 14],
                                13: [2, 14],
                                16: [2, 14],
                                24: [2, 14],
                                26: [2, 14],
                                28: [2, 14],
                                29: [2, 14],
                                31: [2, 14],
                                32: [2, 14],
                                34: [2, 14]
                            }, {
                                12: [2, 10]
                            }, {
                                18: [2, 21],
                                25: [2, 21],
                                33: [2, 21],
                                46: [2, 21]
                            }, {
                                18: [2, 49],
                                25: [2, 49],
                                33: [2, 49],
                                42: [2, 49],
                                43: [2, 49],
                                44: [2, 49],
                                45: [2, 49],
                                46: [2, 49],
                                50: [2, 49],
                                52: [2, 49]
                            }, {
                                18: [2, 51],
                                25: [2, 51],
                                33: [2, 51],
                                46: [2, 51]
                            }, {
                                18: [2, 36],
                                25: [2, 36],
                                33: [2, 36],
                                42: [2, 36],
                                43: [2, 36],
                                44: [2, 36],
                                45: [2, 36],
                                46: [2, 36],
                                50: [2, 36],
                                52: [2, 36],
                                54: [2, 36]
                            }, {
                                5: [2, 11],
                                12: [2, 11],
                                13: [2, 11],
                                16: [2, 11],
                                24: [2, 11],
                                26: [2, 11],
                                28: [2, 11],
                                29: [2, 11],
                                31: [2, 11],
                                32: [2, 11],
                                34: [2, 11]
                            }, {
                                30: 79,
                                50: [1, 26],
                                53: 24
                            }, {
                                29: [2, 15]
                            }, {
                                5: [2, 12],
                                12: [2, 12],
                                13: [2, 12],
                                16: [2, 12],
                                24: [2, 12],
                                26: [2, 12],
                                28: [2, 12],
                                29: [2, 12],
                                31: [2, 12],
                                32: [2, 12],
                                34: [2, 12]
                            }, {
                                25: [1, 80]
                            }, {
                                25: [2, 45]
                            }, {
                                51: [1, 78]
                            }, {
                                5: [2, 20],
                                12: [2, 20],
                                13: [2, 20],
                                16: [2, 20],
                                24: [2, 20],
                                26: [2, 20],
                                28: [2, 20],
                                29: [2, 20],
                                31: [2, 20],
                                32: [2, 20],
                                34: [2, 20]
                            }, {
                                46: [1, 81]
                            }, {
                                18: [2, 53],
                                25: [2, 53],
                                33: [2, 53],
                                46: [2, 53],
                                50: [2, 53]
                            }, {
                                30: 51,
                                36: 82,
                                41: 55,
                                42: [1, 52],
                                43: [1, 53],
                                44: [1, 54],
                                45: [1, 56],
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                25: [1, 83]
                            }, {
                                5: [2, 19],
                                12: [2, 19],
                                13: [2, 19],
                                16: [2, 19],
                                24: [2, 19],
                                26: [2, 19],
                                28: [2, 19],
                                29: [2, 19],
                                31: [2, 19],
                                32: [2, 19],
                                34: [2, 19]
                            }, {
                                18: [2, 28],
                                25: [2, 28],
                                33: [2, 28],
                                42: [2, 28],
                                43: [2, 28],
                                44: [2, 28],
                                45: [2, 28],
                                46: [2, 28],
                                50: [2, 28],
                                52: [2, 28]
                            }, {
                                18: [2, 30],
                                25: [2, 30],
                                33: [2, 30],
                                46: [2, 30],
                                50: [2, 30]
                            }, {
                                5: [2, 16],
                                12: [2, 16],
                                13: [2, 16],
                                16: [2, 16],
                                24: [2, 16],
                                26: [2, 16],
                                28: [2, 16],
                                29: [2, 16],
                                31: [2, 16],
                                32: [2, 16],
                                34: [2, 16]
                            }],
                            defaultActions: {
                                4: [2, 1],
                                44: [2, 41],
                                47: [2, 43],
                                57: [2, 47],
                                63: [2, 10],
                                70: [2, 15],
                                73: [2, 45]
                            },
                            parseError: function(t, n) {
                                throw new Error(t)
                            },
                            parse: function(t) {
                                function v(e) {
                                    r.length = r.length - 2 * e, i.length = i.length - e, s.length = s.length - e
                                }

                                function m() {
                                    var e;
                                    return e = n.lexer.lex() || 1, typeof e != "number" && (e = n.symbols_[e] || e), e
                                }
                                var n = this,
                                    r = [0],
                                    i = [null],
                                    s = [],
                                    o = this.table,
                                    u = "",
                                    a = 0,
                                    f = 0,
                                    l = 0,
                                    c = 2,
                                    h = 1;
                                this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
                                var p = this.lexer.yylloc;
                                s.push(p);
                                var d = this.lexer.options && this.lexer.options.ranges;
                                typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
                                var g, y, b, w, E, S, x = {},
                                    T, N, C, k;
                                for (;;) {
                                    b = r[r.length - 1];
                                    if (this.defaultActions[b]) w = this.defaultActions[b];
                                    else {
                                        if (g === null || typeof g == "undefined") g = m();
                                        w = o[b] && o[b][g]
                                    }
                                    if (typeof w == "undefined" || !w.length || !w[0]) {
                                        var L = "";
                                        if (!l) {
                                            k = [];
                                            for (T in o[b]) this.terminals_[T] && T > 2 && k.push("'" + this.terminals_[T] + "'");
                                            this.lexer.showPosition ? L = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : L = "Parse error on line " + (a + 1) + ": Unexpected " + (g == 1 ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError(L, {
                                                text: this.lexer.match,
                                                token: this.terminals_[g] || g,
                                                line: this.lexer.yylineno,
                                                loc: p,
                                                expected: k
                                            })
                                        }
                                    }
                                    if (w[0] instanceof Array && w.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + g);
                                    switch (w[0]) {
                                        case 1:
                                            r.push(g), i.push(this.lexer.yytext), s.push(this.lexer.yylloc), r.push(w[1]), g = null, y ? (g = y, y = null) : (f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, p = this.lexer.yylloc, l > 0 && l--);
                                            break;
                                        case 2:
                                            N = this.productions_[w[1]][1], x.$ = i[i.length - N], x._$ = {
                                                first_line: s[s.length - (N || 1)].first_line,
                                                last_line: s[s.length - 1].last_line,
                                                first_column: s[s.length - (N || 1)].first_column,
                                                last_column: s[s.length - 1].last_column
                                            }, d && (x._$.range = [s[s.length - (N || 1)].range[0], s[s.length - 1].range[1]]), S = this.performAction.call(x, u, f, a, this.yy, w[1], i, s);
                                            if (typeof S != "undefined") return S;
                                            N && (r = r.slice(0, -1 * N * 2), i = i.slice(0, -1 * N), s = s.slice(0, -1 * N)), r.push(this.productions_[w[1]][0]), i.push(x.$), s.push(x._$), C = o[r[r.length - 2]][r[r.length - 1]], r.push(C);
                                            break;
                                        case 3:
                                            return !0
                                    }
                                }
                                return !0
                            }
                        },
                        t = function() {
                            var e = {
                                EOF: 1,
                                parseError: function(t, n) {
                                    if (!this.yy.parser) throw new Error(t);
                                    this.yy.parser.parseError(t, n)
                                },
                                setInput: function(e) {
                                    return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                        first_line: 1,
                                        first_column: 0,
                                        last_line: 1,
                                        last_column: 0
                                    }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                                },
                                input: function() {
                                    var e = this._input[0];
                                    this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
                                    var t = e.match(/(?:\r\n?|\n).*/g);
                                    return t ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
                                },
                                unput: function(e) {
                                    var t = e.length,
                                        n = e.split(/(?:\r\n?|\n)/g);
                                    this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
                                    var r = this.match.split(/(?:\r\n?|\n)/g);
                                    this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
                                    var i = this.yylloc.range;
                                    return this.yylloc = {
                                        first_line: this.yylloc.first_line,
                                        last_line: this.yylineno + 1,
                                        first_column: this.yylloc.first_column,
                                        last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
                                    }, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this
                                },
                                more: function() {
                                    return this._more = !0, this
                                },
                                less: function(e) {
                                    this.unput(this.match.slice(e))
                                },
                                pastInput: function() {
                                    var e = this.matched.substr(0, this.matched.length - this.match.length);
                                    return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                                },
                                upcomingInput: function() {
                                    var e = this.match;
                                    return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                                },
                                showPosition: function() {
                                    var e = this.pastInput(),
                                        t = (new Array(e.length + 1)).join("-");
                                    return e + this.upcomingInput() + "\n" + t + "^"
                                },
                                next: function() {
                                    if (this.done) return this.EOF;
                                    this._input || (this.done = !0);
                                    var e, t, n, r, i, s;
                                    this._more || (this.yytext = "", this.match = "");
                                    var o = this._currentRules();
                                    for (var u = 0; u < o.length; u++) {
                                        n = this._input.match(this.rules[o[u]]);
                                        if (n && (!t || n[0].length > t[0].length)) {
                                            t = n, r = u;
                                            if (!this.options.flex) break
                                        }
                                    }
                                    if (t) {
                                        s = t[0].match(/(?:\r\n?|\n).*/g), s && (this.yylineno += s.length), this.yylloc = {
                                            first_line: this.yylloc.last_line,
                                            last_line: this.yylineno + 1,
                                            first_column: this.yylloc.last_column,
                                            last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                                        }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1);
                                        if (e) return e;
                                        return
                                    }
                                    return this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                        text: "",
                                        token: null,
                                        line: this.yylineno
                                    })
                                },
                                lex: function() {
                                    var t = this.next();
                                    return typeof t != "undefined" ? t : this.lex()
                                },
                                begin: function(t) {
                                    this.conditionStack.push(t)
                                },
                                popState: function() {
                                    return this.conditionStack.pop()
                                },
                                _currentRules: function() {
                                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                                },
                                topState: function() {
                                    return this.conditionStack[this.conditionStack.length - 2]
                                },
                                pushState: function(t) {
                                    this.begin(t)
                                }
                            };
                            return e.options = {}, e.performAction = function(t, n, r, i) {
                                function s(e, t) {
                                    return n.yytext = n.yytext.substr(e, n.yyleng - t)
                                }
                                var o = i;
                                switch (r) {
                                    case 0:
                                        n.yytext.slice(-2) === "\\\\" ? (s(0, 1), this.begin("mu")) : n.yytext.slice(-1) === "\\" ? (s(0, 1), this.begin("emu")) : this.begin("mu");
                                        if (n.yytext) return 12;
                                        break;
                                    case 1:
                                        return 12;
                                    case 2:
                                        return this.popState(), 12;
                                    case 3:
                                        return n.yytext = n.yytext.substr(5, n.yyleng - 9), this.popState(), 15;
                                    case 4:
                                        return 12;
                                    case 5:
                                        return s(0, 4), this.popState(), 13;
                                    case 6:
                                        return 45;
                                    case 7:
                                        return 46;
                                    case 8:
                                        return 16;
                                    case 9:
                                        return this.popState(), this.begin("raw"), 18;
                                    case 10:
                                        return 34;
                                    case 11:
                                        return 24;
                                    case 12:
                                        return 29;
                                    case 13:
                                        return this.popState(), 28;
                                    case 14:
                                        return this.popState(), 28;
                                    case 15:
                                        return 26;
                                    case 16:
                                        return 26;
                                    case 17:
                                        return 32;
                                    case 18:
                                        return 31;
                                    case 19:
                                        this.popState(), this.begin("com");
                                        break;
                                    case 20:
                                        return s(3, 5), this.popState(), 13;
                                    case 21:
                                        return 31;
                                    case 22:
                                        return 51;
                                    case 23:
                                        return 50;
                                    case 24:
                                        return 50;
                                    case 25:
                                        return 54;
                                    case 26:
                                        break;
                                    case 27:
                                        return this.popState(), 33;
                                    case 28:
                                        return this.popState(), 25;
                                    case 29:
                                        return n.yytext = s(1, 2).replace(/\\"/g, '"'), 42;
                                    case 30:
                                        return n.yytext = s(1, 2).replace(/\\'/g, "'"), 42;
                                    case 31:
                                        return 52;
                                    case 32:
                                        return 44;
                                    case 33:
                                        return 44;
                                    case 34:
                                        return 43;
                                    case 35:
                                        return 50;
                                    case 36:
                                        return n.yytext = s(1, 2), 50;
                                    case 37:
                                        return "INVALID";
                                    case 38:
                                        return 5
                                }
                            }, e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], e.conditions = {
                                mu: {
                                    rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
                                    inclusive: !1
                                },
                                emu: {
                                    rules: [2],
                                    inclusive: !1
                                },
                                com: {
                                    rules: [5],
                                    inclusive: !1
                                },
                                raw: {
                                    rules: [3, 4],
                                    inclusive: !1
                                },
                                INITIAL: {
                                    rules: [0, 1, 38],
                                    inclusive: !0
                                }
                            }, e
                        }();
                    return e.lexer = t, n.prototype = e, e.Parser = n, new n
                }();
                return e = t, e
            }(),
            a = function(e) {
                "use strict";

                function r(e, t) {
                    return {
                        left: e.charAt(2) === "~",
                        right: t.charAt(t.length - 3) === "~"
                    }
                }

                function i(e, t, r, i, s, l) {
                    if (e.sexpr.id.original !== i.path.original) throw new n(e.sexpr.id.original + " doesn't match " + i.path.original, e);
                    var c = r && r.program,
                        h = {
                            left: e.strip.left,
                            right: i.strip.right,
                            openStandalone: u(t.statements),
                            closeStandalone: o((c || t).statements)
                        };
                    e.strip.right && a(t.statements, null, !0);
                    if (c) {
                        var p = r.strip;
                        p.left && f(t.statements, null, !0), p.right && a(c.statements, null, !0), i.strip.left && f(c.statements, null, !0), o(t.statements) && u(c.statements) && (f(t.statements), a(c.statements))
                    } else i.strip.left && f(t.statements, null, !0);
                    return s ? new this.BlockNode(e, c, t, h, l) : new this.BlockNode(e, t, c, h, l)
                }

                function s(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) {
                        var i = e[n],
                            s = i.strip;
                        if (!s) continue;
                        var l = o(e, n, t, i.type === "partial"),
                            c = u(e, n, t),
                            h = s.openStandalone && l,
                            p = s.closeStandalone && c,
                            d = s.inlineStandalone && l && c;
                        s.right && a(e, n, !0), s.left && f(e, n, !0), d && (a(e, n), f(e, n) && i.type === "partial" && (i.indent = /([ \t]+$)/.exec(e[n - 1].original) ? RegExp.$1 : "")), h && (a((i.program || i.inverse).statements), f(e, n)), p && (a(e, n), f((i.inverse || i.program).statements))
                    }
                    return e
                }

                function o(e, t, n) {
                    t === undefined && (t = e.length);
                    var r = e[t - 1],
                        i = e[t - 2];
                    if (!r) return n;
                    if (r.type === "content") return (i || !n ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(r.original)
                }

                function u(e, t, n) {
                    t === undefined && (t = -1);
                    var r = e[t + 1],
                        i = e[t + 2];
                    if (!r) return n;
                    if (r.type === "content") return (i || !n ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(r.original)
                }

                function a(e, t, n) {
                    var r = e[t == null ? 0 : t + 1];
                    if (!r || r.type !== "content" || !n && r.rightStripped) return;
                    var i = r.string;
                    r.string = r.string.replace(n ? /^\s+/ : /^[ \t]*\r?\n?/, ""), r.rightStripped = r.string !== i
                }

                function f(e, t, n) {
                    var r = e[t == null ? e.length - 1 : t - 1];
                    if (!r || r.type !== "content" || !n && r.leftStripped) return;
                    var i = r.string;
                    return r.string = r.string.replace(n ? /\s+$/ : /[ \t]+$/, ""), r.leftStripped = r.string !== i, r.leftStripped
                }
                var t = {},
                    n = e;
                return t.stripFlags = r, t.prepareBlock = i, t.prepareProgram = s, t
            }(n),
            f = function(e, t, n, r) {
                "use strict";

                function l(e) {
                    return e.constructor === o.ProgramNode ? e : (s.yy = f, s.parse(e))
                }
                var i = {},
                    s = e,
                    o = t,
                    u = n,
                    a = r.extend;
                i.parser = s;
                var f = {};
                return a(f, u, o), i.parse = l, i
            }(u, o, a, t),
            l = function(e, t) {
                "use strict";

                function o() {}

                function u(e, t, n) {
                    if (e == null || typeof e != "string" && e.constructor !== n.AST.ProgramNode) throw new r("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
                    t = t || {}, "data" in t || (t.data = !0), t.compat && (t.useDepths = !0);
                    var i = n.parse(e),
                        s = (new n.Compiler).compile(i, t);
                    return (new n.JavaScriptCompiler).compile(s, t)
                }

                function a(e, t, n) {
                    function s() {
                        var r = n.parse(e),
                            i = (new n.Compiler).compile(r, t),
                            s = (new n.JavaScriptCompiler).compile(i, t, undefined, !0);
                        return n.template(s)
                    }
                    if (e == null || typeof e != "string" && e.constructor !== n.AST.ProgramNode) throw new r("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
                    t = t || {}, "data" in t || (t.data = !0), t.compat && (t.useDepths = !0);
                    var i, o = function(e, t) {
                        return i || (i = s()), i.call(this, e, t)
                    };
                    return o._setup = function(e) {
                        return i || (i = s()), i._setup(e)
                    }, o._child = function(e, t, n) {
                        return i || (i = s()), i._child(e, t, n)
                    }, o
                }

                function f(e, t) {
                    if (e === t) return !0;
                    if (i(e) && i(t) && e.length === t.length) {
                        for (var n = 0; n < e.length; n++)
                            if (!f(e[n], t[n])) return !1;
                        return !0
                    }
                }
                var n = {},
                    r = e,
                    i = t.isArray,
                    s = [].slice;
                return n.Compiler = o, o.prototype = {
                    compiler: o,
                    equals: function(e) {
                        var t = this.opcodes.length;
                        if (e.opcodes.length !== t) return !1;
                        for (var n = 0; n < t; n++) {
                            var r = this.opcodes[n],
                                i = e.opcodes[n];
                            if (r.opcode !== i.opcode || !f(r.args, i.args)) return !1
                        }
                        t = this.children.length;
                        for (n = 0; n < t; n++)
                            if (!this.children[n].equals(e.children[n])) return !1;
                        return !0
                    },
                    guid: 0,
                    compile: function(e, t) {
                        this.opcodes = [], this.children = [], this.depths = {
                            list: []
                        }, this.options = t, this.stringParams = t.stringParams, this.trackIds = t.trackIds;
                        var n = this.options.knownHelpers;
                        this.options.knownHelpers = {
                            helperMissing: !0,
                            blockHelperMissing: !0,
                            each: !0,
                            "if": !0,
                            unless: !0,
                            "with": !0,
                            log: !0,
                            lookup: !0
                        };
                        if (n)
                            for (var r in n) this.options.knownHelpers[r] = n[r];
                        return this.accept(e)
                    },
                    accept: function(e) {
                        return this[e.type](e)
                    },
                    program: function(e) {
                        var t = e.statements;
                        for (var n = 0, r = t.length; n < r; n++) this.accept(t[n]);
                        return this.isSimple = r === 1, this.depths.list = this.depths.list.sort(function(e, t) {
                            return e - t
                        }), this
                    },
                    compileProgram: function(e) {
                        var t = (new this.compiler).compile(e, this.options),
                            n = this.guid++,
                            r;
                        this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
                        for (var i = 0, s = t.depths.list.length; i < s; i++) {
                            r = t.depths.list[i];
                            if (r < 2) continue;
                            this.addDepth(r - 1)
                        }
                        return n
                    },
                    block: function(e) {
                        var t = e.mustache,
                            n = e.program,
                            r = e.inverse;
                        n && (n = this.compileProgram(n)), r && (r = this.compileProgram(r));
                        var i = t.sexpr,
                            s = this.classifySexpr(i);
                        s === "helper" ? this.helperSexpr(i, n, r) : s === "simple" ? (this.simpleSexpr(i), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("blockValue", i.id.original)) : (this.ambiguousSexpr(i, n, r), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
                    },
                    hash: function(e) {
                        var t = e.pairs,
                            n, r;
                        this.opcode("pushHash");
                        for (n = 0, r = t.length; n < r; n++) this.pushParam(t[n][1]);
                        while (n--) this.opcode("assignToHash", t[n][0]);
                        this.opcode("popHash")
                    },
                    partial: function(e) {
                        var t = e.partialName;
                        this.usePartial = !0, e.hash ? this.accept(e.hash) : this.opcode("push", "undefined"), e.context ? this.accept(e.context) : (this.opcode("getContext", 0), this.opcode("pushContext")), this.opcode("invokePartial", t.name, e.indent || ""), this.opcode("append")
                    },
                    content: function(e) {
                        e.string && this.opcode("appendContent", e.string)
                    },
                    mustache: function(e) {
                        this.sexpr(e.sexpr), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
                    },
                    ambiguousSexpr: function(e, t, n) {
                        var r = e.id,
                            i = r.parts[0],
                            s = t != null || n != null;
                        this.opcode("getContext", r.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.ID(r), this.opcode("invokeAmbiguous", i, s)
                    },
                    simpleSexpr: function(e) {
                        var t = e.id;
                        t.type === "DATA" ? this.DATA(t) : t.parts.length ? this.ID(t) : (this.addDepth(t.depth), this.opcode("getContext", t.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
                    },
                    helperSexpr: function(e, t, n) {
                        var i = this.setupFullMustacheParams(e, t, n),
                            s = e.id,
                            o = s.parts[0];
                        if (this.options.knownHelpers[o]) this.opcode("invokeKnownHelper", i.length, o);
                        else {
                            if (this.options.knownHelpersOnly) throw new r("You specified knownHelpersOnly, but used the unknown helper " + o, e);
                            s.falsy = !0, this.ID(s), this.opcode("invokeHelper", i.length, s.original, s.isSimple)
                        }
                    },
                    sexpr: function(e) {
                        var t = this.classifySexpr(e);
                        t === "simple" ? this.simpleSexpr(e) : t === "helper" ? this.helperSexpr(e) : this.ambiguousSexpr(e)
                    },
                    ID: function(e) {
                        this.addDepth(e.depth), this.opcode("getContext", e.depth);
                        var t = e.parts[0];
                        t ? this.opcode("lookupOnContext", e.parts, e.falsy, e.isScoped) : this.opcode("pushContext")
                    },
                    DATA: function(e) {
                        this.options.data = !0, this.opcode("lookupData", e.id.depth, e.id.parts)
                    },
                    STRING: function(e) {
                        this.opcode("pushString", e.string)
                    },
                    NUMBER: function(e) {
                        this.opcode("pushLiteral", e.number)
                    },
                    BOOLEAN: function(e) {
                        this.opcode("pushLiteral", e.bool)
                    },
                    comment: function() {},
                    opcode: function(e) {
                        this.opcodes.push({
                            opcode: e,
                            args: s.call(arguments, 1)
                        })
                    },
                    addDepth: function(e) {
                        if (e === 0) return;
                        this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e))
                    },
                    classifySexpr: function(e) {
                        var t = e.isHelper,
                            n = e.eligibleHelper,
                            r = this.options;
                        if (n && !t) {
                            var i = e.id.parts[0];
                            r.knownHelpers[i] ? t = !0 : r.knownHelpersOnly && (n = !1)
                        }
                        return t ? "helper" : n ? "ambiguous" : "simple"
                    },
                    pushParams: function(e) {
                        for (var t = 0, n = e.length; t < n; t++) this.pushParam(e[t])
                    },
                    pushParam: function(e) {
                        this.stringParams ? (e.depth && this.addDepth(e.depth), this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", e.stringModeValue, e.type), e.type === "sexpr" && this.sexpr(e)) : (this.trackIds && this.opcode("pushId", e.type, e.idName || e.stringModeValue), this.accept(e))
                    },
                    setupFullMustacheParams: function(e, t, n) {
                        var r = e.params;
                        return this.pushParams(r), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.hash(e.hash) : this.opcode("emptyHash"), r
                    }
                }, n.precompile = u, n.compile = a, n
            }(n, t),
            c = function(e, t) {
                "use strict";

                function o(e) {
                    this.value = e
                }

                function u() {}
                var n, r = e.COMPILER_REVISION,
                    i = e.REVISION_CHANGES,
                    s = t;
                u.prototype = {
                    nameLookup: function(e, t) {
                        return u.isValidJavaScriptVariableName(t) ? e + "." + t : e + "['" + t + "']"
                    },
                    depthedLookup: function(e) {
                        return this.aliases.lookup = "this.lookup", 'lookup(depths, "' + e + '")'
                    },
                    compilerInfo: function() {
                        var e = r,
                            t = i[e];
                        return [e, t]
                    },
                    appendToBuffer: function(e) {
                        return this.environment.isSimple ? "return " + e + ";" : {
                            appendToBuffer: !0,
                            content: e,
                            toString: function() {
                                return "buffer += " + e + ";"
                            }
                        }
                    },
                    initializeBuffer: function() {
                        return this.quotedString("")
                    },
                    namespace: "Handlebars",
                    compile: function(e, t, n, r) {
                        this.environment = e, this.options = t, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !r, this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                            programs: [],
                            environments: []
                        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
                            list: []
                        }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.compileChildren(e, t), this.useDepths = this.useDepths || e.depths.list.length || this.options.compat;
                        var i = e.opcodes,
                            o, u, a;
                        for (u = 0, a = i.length; u < a; u++) o = i[u], this[o.opcode].apply(this, o.args);
                        this.pushSource("");
                        if (this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new s("Compile completed with content left on stack");
                        var f = this.createFunctionContext(r);
                        if (!this.isChild) {
                            var l = {
                                    compiler: this.compilerInfo(),
                                    main: f
                                },
                                c = this.context.programs;
                            for (u = 0, a = c.length; u < a; u++) c[u] && (l[u] = c[u]);
                            return this.environment.usePartial && (l.usePartial = !0), this.options.data && (l.useData = !0), this.useDepths && (l.useDepths = !0), this.options.compat && (l.compat = !0), r || (l.compiler = JSON.stringify(l.compiler), l = this.objectLiteral(l)), l
                        }
                        return f
                    },
                    preamble: function() {
                        this.lastContext = 0, this.source = []
                    },
                    createFunctionContext: function(e) {
                        var t = "",
                            n = this.stackVars.concat(this.registers.list);
                        n.length > 0 && (t += ", " + n.join(", "));
                        for (var r in this.aliases) this.aliases.hasOwnProperty(r) && (t += ", " + r + "=" + this.aliases[r]);
                        var i = ["depth0", "helpers", "partials", "data"];
                        this.useDepths && i.push("depths");
                        var s = this.mergeSource(t);
                        return e ? (i.push(s), Function.apply(this, i)) : "function(" + i.join(",") + ") {\n  " + s + "}"
                    },
                    mergeSource: function(e) {
                        var t = "",
                            n, r = !this.forceBuffer,
                            i;
                        for (var s = 0, o = this.source.length; s < o; s++) {
                            var u = this.source[s];
                            u.appendToBuffer ? n ? n = n + "\n    + " + u.content : n = u.content : (n && (t ? t += "buffer += " + n + ";\n  " : (i = !0, t = n + ";\n  "), n = undefined), t += u + "\n  ", this.environment.isSimple || (r = !1))
                        }
                        if (r) {
                            if (n || !t) t += "return " + (n || '""') + ";\n"
                        } else e += ", buffer = " + (i ? "" : this.initializeBuffer()), n ? t += "return buffer + " + n + ";\n" : t += "return buffer;\n";
                        return e && (t = "var " + e.substring(2) + (i ? "" : ";\n  ") + t), t
                    },
                    blockValue: function(e) {
                        this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                        var t = [this.contextName(0)];
                        this.setupParams(e, 0, t);
                        var n = this.popStack();
                        t.splice(1, 0, n), this.push("blockHelperMissing.call(" + t.join(", ") + ")")
                    },
                    ambiguousBlockValue: function() {
                        this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                        var e = [this.contextName(0)];
                        this.setupParams("", 0, e, !0), this.flushInline();
                        var t = this.topStack();
                        e.splice(1, 0, t), this.pushSource("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
                    },
                    appendContent: function(e) {
                        this.pendingContent && (e = this.pendingContent + e), this.pendingContent = e
                    },
                    append: function() {
                        this.flushInline();
                        var e = this.popStack();
                        this.pushSource("if (" + e + " != null) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
                    },
                    appendEscaped: function() {
                        this.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
                    },
                    getContext: function(e) {
                        this.lastContext = e
                    },
                    pushContext: function() {
                        this.pushStackLiteral(this.contextName(this.lastContext))
                    },
                    lookupOnContext: function(e, t, n) {
                        var r = 0,
                            i = e.length;
                        !n && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(e[r++])) : this.pushContext();
                        for (; r < i; r++) this.replaceStack(function(n) {
                            var i = this.nameLookup(n, e[r], "context");
                            return t ? " && " + i : " != null ? " + i + " : " + n
                        })
                    },
                    lookupData: function(e, t) {
                        e ? this.pushStackLiteral("this.data(data, " + e + ")") : this.pushStackLiteral("data");
                        var n = t.length;
                        for (var r = 0; r < n; r++) this.replaceStack(function(e) {
                            return " && " + this.nameLookup(e, t[r], "data")
                        })
                    },
                    resolvePossibleLambda: function() {
                        this.aliases.lambda = "this.lambda", this.push("lambda(" + this.popStack() + ", " + this.contextName(0) + ")")
                    },
                    pushStringParam: function(e, t) {
                        this.pushContext(), this.pushString(t), t !== "sexpr" && (typeof e == "string" ? this.pushString(e) : this.pushStackLiteral(e))
                    },
                    emptyHash: function() {
                        this.pushStackLiteral("{}"), this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}"))
                    },
                    pushHash: function() {
                        this.hash && this.hashes.push(this.hash), this.hash = {
                            values: [],
                            types: [],
                            contexts: [],
                            ids: []
                        }
                    },
                    popHash: function() {
                        var e = this.hash;
                        this.hash = this.hashes.pop(), this.trackIds && this.push("{" + e.ids.join(",") + "}"), this.stringParams && (this.push("{" + e.contexts.join(",") + "}"), this.push("{" + e.types.join(",") + "}")), this.push("{\n    " + e.values.join(",\n    ") + "\n  }")
                    },
                    pushString: function(e) {
                        this.pushStackLiteral(this.quotedString(e))
                    },
                    push: function(e) {
                        return this.inlineStack.push(e), e
                    },
                    pushLiteral: function(e) {
                        this.pushStackLiteral(e)
                    },
                    pushProgram: function(e) {
                        e != null ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
                    },
                    invokeHelper: function(e, t, n) {
                        this.aliases.helperMissing = "helpers.helperMissing";
                        var r = this.popStack(),
                            i = this.setupHelper(e, t),
                            s = (n ? i.name + " || " : "") + r + " || helperMissing";
                        this.push("((" + s + ").call(" + i.callParams + "))")
                    },
                    invokeKnownHelper: function(e, t) {
                        var n = this.setupHelper(e, t);
                        this.push(n.name + ".call(" + n.callParams + ")")
                    },
                    invokeAmbiguous: function(e, t) {
                        this.aliases.functionType = '"function"', this.aliases.helperMissing = "helpers.helperMissing", this.useRegister("helper");
                        var n = this.popStack();
                        this.emptyHash();
                        var r = this.setupHelper(0, e, t),
                            i = this.lastHelper = this.nameLookup("helpers", e, "helper");
                        this.push("((helper = (helper = " + i + " || " + n + ") != null ? helper : helperMissing" + (r.paramsInit ? "),(" + r.paramsInit : "") + ")," + "(typeof helper === functionType ? helper.call(" + r.callParams + ") : helper))")
                    },
                    invokePartial: function(e, t) {
                        var n = [this.nameLookup("partials", e, "partial"), "'" + t + "'", "'" + e + "'", this.popStack(), this.popStack(), "helpers", "partials"];
                        this.options.data ? n.push("data") : this.options.compat && n.push("undefined"), this.options.compat && n.push("depths"), this.push("this.invokePartial(" + n.join(", ") + ")")
                    },
                    assignToHash: function(e) {
                        var t = this.popStack(),
                            n, r, i;
                        this.trackIds && (i = this.popStack()), this.stringParams && (r = this.popStack(), n = this.popStack());
                        var s = this.hash;
                        n && s.contexts.push("'" + e + "': " + n), r && s.types.push("'" + e + "': " + r), i && s.ids.push("'" + e + "': " + i), s.values.push("'" + e + "': (" + t + ")")
                    },
                    pushId: function(e, t) {
                        e === "ID" || e === "DATA" ? this.pushString(t) : e === "sexpr" ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
                    },
                    compiler: u,
                    compileChildren: function(e, t) {
                        var n = e.children,
                            r, i;
                        for (var s = 0, o = n.length; s < o; s++) {
                            r = n[s], i = new this.compiler;
                            var u = this.matchExistingProgram(r);
                            u == null ? (this.context.programs.push(""), u = this.context.programs.length, r.index = u, r.name = "program" + u, this.context.programs[u] = i.compile(r, t, this.context, !this.precompile), this.context.environments[u] = r, this.useDepths = this.useDepths || i.useDepths) : (r.index = u, r.name = "program" + u)
                        }
                    },
                    matchExistingProgram: function(e) {
                        for (var t = 0, n = this.context.environments.length; t < n; t++) {
                            var r = this.context.environments[t];
                            if (r && r.equals(e)) return t
                        }
                    },
                    programExpression: function(e) {
                        var t = this.environment.children[e],
                            n = t.depths.list,
                            r = this.useDepths,
                            i, s = [t.index, "data"];
                        return r && s.push("depths"), "this.program(" + s.join(", ") + ")"
                    },
                    useRegister: function(e) {
                        this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e))
                    },
                    pushStackLiteral: function(e) {
                        return this.push(new o(e))
                    },
                    pushSource: function(e) {
                        this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = undefined), e && this.source.push(e)
                    },
                    pushStack: function(e) {
                        this.flushInline();
                        var t = this.incrStack();
                        return this.pushSource(t + " = " + e + ";"), this.compileStack.push(t), t
                    },
                    replaceStack: function(e) {
                        var t = "",
                            n = this.isInline(),
                            r, i, u;
                        if (!this.isInline()) throw new s("replaceStack on non-inline");
                        var a = this.popStack(!0);
                        if (a instanceof o) t = r = a.value, u = !0;
                        else {
                            i = !this.stackSlot;
                            var f = i ? this.incrStack() : this.topStackName();
                            t = "(" + this.push(f) + " = " + a + ")", r = this.topStack()
                        }
                        var l = e.call(this, r);
                        u || this.popStack(), i && this.stackSlot--, this.push("(" + t + l + ")")
                    },
                    incrStack: function() {
                        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                    },
                    topStackName: function() {
                        return "stack" + this.stackSlot
                    },
                    flushInline: function() {
                        var e = this.inlineStack;
                        if (e.length) {
                            this.inlineStack = [];
                            for (var t = 0, n = e.length; t < n; t++) {
                                var r = e[t];
                                r instanceof o ? this.compileStack.push(r) : this.pushStack(r)
                            }
                        }
                    },
                    isInline: function() {
                        return this.inlineStack.length
                    },
                    popStack: function(e) {
                        var t = this.isInline(),
                            n = (t ? this.inlineStack : this.compileStack).pop();
                        if (!e && n instanceof o) return n.value;
                        if (!t) {
                            if (!this.stackSlot) throw new s("Invalid stack pop");
                            this.stackSlot--
                        }
                        return n
                    },
                    topStack: function() {
                        var e = this.isInline() ? this.inlineStack : this.compileStack,
                            t = e[e.length - 1];
                        return t instanceof o ? t.value : t
                    },
                    contextName: function(e) {
                        return this.useDepths && e ? "depths[" + e + "]" : "depth" + e
                    },
                    quotedString: function(e) {
                        return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
                    },
                    objectLiteral: function(e) {
                        var t = [];
                        for (var n in e) e.hasOwnProperty(n) && t.push(this.quotedString(n) + ":" + e[n]);
                        return "{" + t.join(",") + "}"
                    },
                    setupHelper: function(e, t, n) {
                        var r = [],
                            i = this.setupParams(t, e, r, n),
                            s = this.nameLookup("helpers", t, "helper");
                        return {
                            params: r,
                            paramsInit: i,
                            name: s,
                            callParams: [this.contextName(0)].concat(r).join(", ")
                        }
                    },
                    setupOptions: function(e, t, n) {
                        var r = {},
                            i = [],
                            s = [],
                            o = [],
                            u, a, f;
                        r.name = this.quotedString(e), r.hash = this.popStack(), this.trackIds && (r.hashIds = this.popStack()), this.stringParams && (r.hashTypes = this.popStack(), r.hashContexts = this.popStack()), a = this.popStack(), f = this.popStack();
                        if (f || a) f || (f = "this.noop"), a || (a = "this.noop"), r.fn = f, r.inverse = a;
                        var l = t;
                        while (l--) u = this.popStack(), n[l] = u, this.trackIds && (o[l] = this.popStack()), this.stringParams && (s[l] = this.popStack(), i[l] = this.popStack());
                        return this.trackIds && (r.ids = "[" + o.join(",") + "]"), this.stringParams && (r.types = "[" + s.join(",") + "]", r.contexts = "[" + i.join(",") + "]"), this.options.data && (r.data = "data"), r
                    },
                    setupParams: function(e, t, n, r) {
                        var i = this.objectLiteral(this.setupOptions(e, t, n));
                        return r ? (this.useRegister("options"), n.push("options"), "options=" + i) : (n.push(i), "")
                    }
                };
                var a = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),
                    f = u.RESERVED_WORDS = {};
                for (var l = 0, c = a.length; l < c; l++) f[a[l]] = !0;
                return u.isValidJavaScriptVariableName = function(e) {
                    return !u.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)
                }, n = u, n
            }(r, n),
            h = function(e, t, n, r, i) {
                "use strict";
                var s, o = e,
                    u = t,
                    a = n.parser,
                    f = n.parse,
                    l = r.Compiler,
                    c = r.compile,
                    h = r.precompile,
                    p = i,
                    d = o.create,
                    v = function() {
                        var e = d();
                        return e.compile = function(t, n) {
                            return c(t, n, e)
                        }, e.precompile = function(t, n) {
                            return h(t, n, e)
                        }, e.AST = u, e.Compiler = l, e.JavaScriptCompiler = p, e.Parser = a, e.parse = f, e
                    };
                return o = v(), o.create = v, o["default"] = o, s = o, s
            }(s, o, f, l, c);
        return h
    }),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.activity_summary = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "    <tr>\n    <td><strong>" + u((i = (i = t.name || (e != null ? e.name : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "name",
                    hash: {},
                    data: r
                }) : i)) + "</strong></td>\n    <td>" + u((t.toFixed || e && e.toFixed || o).call(e, e != null ? e.hours : e, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n    <td>" + u((t.toFixed || e && e.toFixed || o).call(e, e != null ? e.pas : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n    </tr>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = t.helperMissing,
                    o = this.escapeExpression,
                    u = "<table>\n  <thead>\n    <tr>\n      <th>&nbsp;</th>\n      <th>Hours</th>\n      <th>PAs</th>\n    </tr>\n  </thead>\n  <tbody>\n";
                return i = t.each.call(e, e != null ? e.categories : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (u += i), u + "  </tbody>\n  <tbody>\n    <tr>\n      <td>Core</td>\n      <td>" + o((t.toFixed || e && e.toFixed || s).call(e, (i = (i = e != null ? e.sub_totals : e) != null ? i.core : i) != null ? i.hours : i, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n      <td>" + o((t.toFixed || e && e.toFixed || s).call(e, (i = (i = e != null ? e.sub_totals : e) != null ? i.core : i) != null ? i.pas : i, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n    </tr>\n    <tr>\n      <td>APA</td>\n      <td>" + o((t.toFixed || e && e.toFixed || s).call(e, (i = (i = e != null ? e.sub_totals : e) != null ? i.apa : i) != null ? i.hours : i, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n      <td>" + o((t.toFixed || e && e.toFixed || s).call(e, (i = (i = e != null ? e.sub_totals : e) != null ? i.apa : i) != null ? i.pas : i, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n    </tr>\n    <tr>\n      <td>ATC</td>\n      <td>" + o((t.toFixed || e && e.toFixed || s).call(e, (i = (i = e != null ? e.sub_totals : e) != null ? i.atc : i) != null ? i.hours : i, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n      <td>" + o((t.toFixed || e && e.toFixed || s).call(e, (i = (i = e != null ? e.sub_totals : e) !=
                    null ? i.atc : i) != null ? i.pas : i, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td>Total</td>\n      <td>" + o((t.toFixed || e && e.toFixed || s).call(e, (i = e != null ? e.total : e) != null ? i.hours : i, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n      <td>" + o((t.toFixed || e && e.toFixed || s).call(e, (i = e != null ? e.total : e) != null ? i.pas : i, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n    </tr>\n  </tfoot>\n</table>"
            },
            useData: !0
        }), this.HandlebarsTemplates.activity_summary
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.additional_external = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<div class='header'>\n  <h3>Additional NHS responsibilities and / or external duties</h3>\n</div>\n<div class='main'>\n  <div class='rc job_plan_gn_additional_responsibilities'></div>\n  <p>Your ARs and EDs from the Timetable in Section 3:</p>\n  <table class='ars'>\n    <thead>\n      <tr>\n        <th>Repeat</th>\n        <th class='start_time'>Start</th>\n        <th class='end_time'>End</th>\n        <th>Activity / Location</th>\n        <th class='hours'>Hours</th>\n        <th class='pas'>PA</th>\n      </tr>\n    </thead>\n    <tbody></tbody>\n  </table>\n  <p>Use this section to go into more details on exactly what AR and/or ED activities are undertaken.</p>\n  <table id='ars_notes'>\n    <thead>\n      <tr>\n        <th>Duty / Responsibility</th>\n        <th>Estimate of time involved</th>\n        <th>When will the work be scheduled? i.e. during NHS Time, annual leave, other personal time etc</th>\n        <th>If the work is undertaken during NHS time, how will the NHS be reimbursed? i.e fees paid to Trust, time shifting etc</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class='blank'>\n        <td>-</td>\n        <td>-</td>\n        <td>-</td>\n        <td>-</td>\n      </tr>\n    </tbody>\n  </table>\n  <p class='right'>\n    <a class='button positive add-ars-note' href='#'>Add Note</a>\n  </p>\n  <div id='ars-note-forms'></div>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.additional_external
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.additional_pas = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<div class='header'>\n  <h3>Additional PAs / Additional to Contract</h3>\n</div>\n<div class='main'>\n  <h3>Additional PAs (APA)</h3>\n  <div class='rc job_plan_gn_additional_programmed_activities'></div>\n  <h4>APA Activities</h4>\n  <table id='apa_activities'></table>\n  <form>\n    <fieldset>\n      <ol>\n        <li>\n          <fieldset>\n            <legend>Are you undertaking private medical practice as defined in the terms of service?</legend>\n            <label>\n              <input class='private_practice' id='private_practice_yes' name='private_practice' type='radio' value='true' />\n              Yes\n            </label>\n            <label>\n              <input class='private_practice' id='private_practice_no' name='private_practice' type='radio' value='false' />\n              No\n            </label>\n          </fieldset>\n        </li>\n        <li>\n          <fieldset>\n            <legend>If yes, is this indicated in your job plan?</legend>\n            <label>\n              <input class='in_job_plan' id='in_job_plan_yes' name='in_job_plan' type='radio' value='true' />\n              Yes\n            </label>\n            <label>\n              <input class='in_job_plan' id='in_job_plan_no' name='in_job_plan' type='radio' value='false' />\n              No\n            </label>\n          </fieldset>\n        </li>\n        <li>\n          <fieldset>\n            <legend>Are you already working an additional programmed activity above your main commitment?</legend>\n            <label>\n              <input class='additional_activity' id='additional_activity_yes' name='additional_activity' type='radio' value='true' />\n              Yes\n            </label>\n            <label>\n              <input class='additional_activity' id='additional_activity_no' name='additional_activity' type='radio' value='false' />\n              No\n            </label>\n          </fieldset>\n        </li>\n        <li class='last'>\n          <p class='right'>\n            <a class='button positive save' href='#'>Save</a>\n            <a class='button cancel' href='#'>Cancel</a>\n          </p>\n        </li>\n      </ol>\n    </fieldset>\n  </form>\n  <h3>Additional to Contract (ATC)</h3>\n  <h4>ATC Activities</h4>\n  <table id='atc_activities'></table>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.additional_pas
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.ars_note_form = Handlebars.template({
            1: function(e, t, n, r) {
                return "<h3>Add AR Note</h3>\n"
            },
            3: function(e, t, n, r) {
                return "<h3>Editing AR Note</h3>"
            },
            5: function(e, t, n, r) {
                var i, s = "<div id='errorExplanation'>\n  <h2>There was a problem saving this AR Note to the database.</h2>\n  <p>There were problems with the following fields:</p>\n  <ul>\n";
                return i = t.each.call(e, e != null ? e.error_messages : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(6, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s + "  </ul>\n</div>"
            },
            6: function(e, t, n, r) {
                var i = this.lambda,
                    s = this.escapeExpression;
                return "    <li>" + s(i(e, e)) + "</li>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "";
                return i = t["if"].call(e, e != null ? e.is_new : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.program(3, r),
                    data: r
                }), i != null && (f += i), f += "\n", i = t["if"].call(e, e != null ? e.error_messages : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + "\n<fieldset>\n  <ol>\n    <li class='first'>\n      <label for='responsibility'>Duty / Responsibility</label>\n      <textarea class='responsibility' id='responsibility' type='text' value='" + a((s = (s = t.responsibility || (e != null ? e.responsibility : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "responsibility",
                    hash: {},
                    data: r
                }) : s)) + "'></textarea>\n    </li>\n    <li>\n      <label for='time_invloved'>Number of SPAs per week</label>\n      <input class='time_invloved' id='time_invloved' type='text' value='" + a((s = (s = t.time_invloved || (e != null ? e.time_invloved : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "time_invloved",
                    hash: {},
                    data: r
                }) : s)) + "' />\n    </li>\n    <li>\n      <label for='when_work_scheduled'>When will the work be scheduled?  i.e. during NHS Time, annual leave, other personal time etc.</label>\n      <textarea class='when_work_scheduled' id='when_work_scheduled' type='text' value='" + a((s = (s = t.when_work_scheduled || (e != null ? e.when_work_scheduled : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "when_work_scheduled",
                    hash: {},
                    data: r
                }) : s)) + "'></textarea>\n    </li>\n    <li>\n      <label for='how_nhs_reimbursed'>If the work is undertaken during NHS time, how will the NHS be reimbursed? i.e fees paid to Trust, time shifting etc.</label>\n      <textarea class='how_nhs_reimbursed' id='how_nhs_reimbursed' type='text' value='" + a((s = (s = t.how_nhs_reimbursed || (e != null ? e.how_nhs_reimbursed : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "how_nhs_reimbursed",
                    hash: {},
                    data: r
                }) : s)) + "'></textarea>\n    </li>\n    <li class='last'>\n      <p class='right'>\n        <a class='button positive save' href='#'>Save</a>\n        <a class='button cancel' href='#'>Cancel</a>\n      </p>\n    </li>\n  </ol>\n</fieldset>"
            },
            useData: !0
        }), this.HandlebarsTemplates.ars_note_form
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.ars_note_row = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<td class='responsibility'>" + u((i = (i = t.responsibility || (e != null ? e.responsibility : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "responsibility",
                    hash: {},
                    data: r
                }) : i)) + "</td>\n<td class='time_invloved'>" + u((i = (i = t.time_invloved || (e != null ? e.time_invloved : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "time_invloved",
                    hash: {},
                    data: r
                }) : i)) + "</td>\n<td class='when_work_scheduled'>" + u((i = (i = t.when_work_scheduled || (e != null ? e.when_work_scheduled : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "when_work_scheduled",
                    hash: {},
                    data: r
                }) : i)) + "</td>\n<td class='how_nhs_reimbursed'>" + u((i = (i = t.how_nhs_reimbursed || (e != null ? e.how_nhs_reimbursed : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "how_nhs_reimbursed",
                    hash: {},
                    data: r
                }) : i)) + "</td>\n<td>\n  <a class='no-pdf edit' href='#'>Edit</a>\n</td>\n<td>\n  <a class='no-pdf destroy' href='#'>Remove</a>\n</td>"
            },
            useData: !0
        }), this.HandlebarsTemplates.ars_note_row
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.ars_table = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return '  <tr>    \n    <td class="schedule_description">' + u((i = (i = t.schedule_description || (e != null ? e.schedule_description : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "schedule_description",
                    hash: {},
                    data: r
                }) : i)) + '</td>\n    <td class="start_time">' + u((i = (i = t.start_time || (e != null ? e.start_time : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "start_time",
                    hash: {},
                    data: r
                }) : i)) + '</td>\n    <td class="end_time">' + u((i = (i = t.end_time || (e != null ? e.end_time : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "end_time",
                    hash: {},
                    data: r
                }) : i)) + '</td>\n    <td class="activity">\n      ' + u((i = (i = t.categorisation || (e != null ? e.categorisation : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "categorisation",
                    hash: {},
                    data: r
                }) : i)) + ": " + u((i = (i = t.subcategorisation || (e != null ? e.subcategorisation : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "subcategorisation",
                    hash: {},
                    data: r
                }) : i)) + "<br/>\n      " + u((i = (i = t.location || (e != null ? e.location : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "location",
                    hash: {},
                    data: r
                }) : i)) + "<br/>\n      " + u((i = (i = t.description || (e != null ? e.description : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "description",
                    hash: {},
                    data: r
                }) : i)) + '\n    </td>\n    <td class="hours">' + u((t.toFixed || e && e.toFixed || o).call(e, e != null ? e.hours : e, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + '</td>\n    <td class="pas">' + u((t.toFixed || e && e.toFixed || o).call(e, e != null ? e.pas : e, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n  <tr>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i;
                return i = t.each.call(e, e != null ? e.rows : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null ? i : ""
            },
            useData: !0
        }), this.HandlebarsTemplates.ars_table
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.breakdown_footer_row = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<td>\n  <strong>Total</strong>\n</td>\n<td>\n  <div id='hours'></div>\n</td>\n<td>\n  <div id='pas'></div>\n</td>\n<td>\n  <div id='hours_per_pa'></div>\n</td>\n<td colspan='4'></td>"
            },
            useData: !0
        }), this.HandlebarsTemplates.breakdown_footer_row
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.breakdown_header_row = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<td colspan='6'>\n  <h3>\n    <strong>" + u((i = (i = t.categorisation || (e != null ? e.categorisation : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "categorisation",
                    hash: {},
                    data: r
                }) : i)) + "</strong>\n  </h3>\n</td>"
            },
            useData: !0
        }), this.HandlebarsTemplates.breakdown_header_row
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.breakdown_job_content_row = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "<td class='edit activity'>";
                return i = (s = (s = t.one_line_summary || (e != null ? e.one_line_summary : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "one_line_summary",
                    hash: {},
                    data: r
                }) : s), i != null && (f += i), f + "</td>\n<td class='edit hours_per_week'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.hours : e, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n<td class='edit pas_per_week'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.pas : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n<td class='edit hours_per_pa'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.hours_per_pa : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n<td class='edit'>\n  <a class='no-pdf edit' href='#'>Edit</a>\n</td>\n<td>\n  <a class='no-pdf destroy' href='#'>Remove</a>\n</td>"
            },
            useData: !0
        }), this.HandlebarsTemplates.breakdown_job_content_row
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.breakdown_job_content_table = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<thead class='no-pdf'>\n  <tr>\n    <th class='activity'>Activity</th>\n    <th class='hours_per_week'>Hours / week</th>\n    <th class='pas_per_week'>PAs / week</th>\n    <th class='hours_per_pa'>Hours / PA</th>\n    <th class='edit'></th>\n    <th class='destroy'></th>\n  </tr>\n</thead>\n<tbody class='no-pdf'>\n  <tr class='blank'>\n    <td>-</td>\n    <td>-</td>\n    <td>-</td>\n    <td>-</td>\n    <td>-</td>\n    <td>-</td>\n  </tr>\n</tbody>"
            },
            useData: !0
        }), this.HandlebarsTemplates.breakdown_job_content_table
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.calendar_selector = Handlebars.template({
            1: function(e, t, n, r) {
                return '      <td class="dot"></td>\n'
            },
            3: function(e, t, n, r) {
                var i, s = "";
                return i = t["if"].call(e, e != null ? e.first_monday_week : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s
            },
            4: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return '        <td class="dot month-name" colspan="' + u((i = (i = t.week_of_month || (e != null ? e.week_of_month : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "week_of_month",
                    hash: {},
                    data: r
                }) : i)) + '">&nbsp;' + u((t.subString || e && e.subString || o).call(e, e != null ? e.month_name : e, 3, {
                    name: "subString",
                    hash: {},
                    data: r
                })) + "</td>\n"
            },
            6: function(e, t, n, r) {
                var i, s = t.helperMissing,
                    o = this.escapeExpression,
                    u = '      <tr>\n        <td class="day-letter">' + o((t.subString || e && e.subString || s).call(e, r && r.key, 1, {
                        name: "subString",
                        hash: {},
                        data: r
                    })) + "</td>\n";
                return i = t.each.call(e, e, {
                    name: "each",
                    hash: {},
                    fn: this.program(7, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (u += i), u + "      </tr>\n"
            },
            7: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = '          <td class="dot day ' + a((s = (s = t.css_class || (e != null ? e.css_class : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "css_class",
                        hash: {},
                        data: r
                    }) : s)) + " ";
                return i = t.each.call(e, e != null ? e.job_contents : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(8, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + '" style="background: ' + a((s = (s = t.color || (e != null ? e.color : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "color",
                    hash: {},
                    data: r
                }) : s)) + ';" data-week-number="' + a((s = (s = t.week_number || (e != null ? e.week_number : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "week_number",
                    hash: {},
                    data: r
                }) : s)) + '"></td>\n'
            },
            8: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return u((i = (i = t.job_content_id || (e != null ? e.job_content_id : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "job_content_id",
                    hash: {},
                    data: r
                }) : i)) + " "
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = this.lambda,
                    o = this.escapeExpression,
                    u = '<table class="cal-select">\n  <tbody>\n    <tr class="month-names">\n      <td>&nbsp;</td>\n';
                return i = t.unless.call(e, (i = (i = (i = e != null ? e.days : e) != null ? i.Monday : i) != null ? i["0"] : i) != null ? i.first_monday_week : i, {
                    name: "unless",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (u += i), i = t.each.call(e, (i = e != null ? e.days : e) != null ? i.Monday : i, {
                    name: "each",
                    hash: {},
                    fn: this.program(3, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (u += i), u += "    </tr>\n", i = t.each.call(e, e != null ? e.days : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(6, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (u += i), u + '  </tbody>\n</table>\n\n<div id="cal-select-heading" class="no-pdf">\n  <h3><span class="week-start">' + o(s((i = e != null ? e.selected : e) != null ? i.week_start : i, e)) + '</span> - <span class="week-end">' + o(s((i = e != null ? e.selected : e) != null ? i.week_end : i, e)) + '</span></h3>\n</div>\n\n<div id="cal-select-buttons">\n  <a class="last_week button navigation">\n    prev\n  </a>\n  <a class="next_week button navigation">\n    next\n  </a>\n</div>'
            },
            useData: !0
        }), this.HandlebarsTemplates.calendar_selector
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.calendar_table = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<div class='panel job-content-view'>\n  <form>\n    <fieldset>\n      <div id='calendar-selector'></div>\n    </fieldset>\n  </form>\n</div>\n<table class='no-pdf' id='calendar-days'>\n  <thead>\n    <tr>\n      <th class='day'>&nbsp;</th>\n      <th class='start_time'>Start</th>\n      <th class='end_time'>End</th>\n      <th class='categorisation'></th>\n      <th class='activity'>Activity</th>\n      <th class='hours'>Hours</th>\n      <th class='pas'>PAs</th>\n      <th class='edit'></th>\n      <th class='destroy'></th>\n    </tr>\n  </thead>\n</table>"
            },
            useData: !0
        }), this.HandlebarsTemplates.calendar_table
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.calendar_table_day_row = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s = t.helperMissing,
                    o = this.escapeExpression,
                    u = "function";
                return '<tr>\n<td class="day">' + o((t.subString || e && e.subString || s).call(e, e != null ? e.day_name : e, 3, {
                    name: "subString",
                    hash: {},
                    data: r
                })) + "&nbsp;<span class='grayed'>" + o((i = (i = t.mday || (e != null ? e.mday : e)) != null ? i : s, typeof i === u ? i.call(e, {
                    name: "mday",
                    hash: {},
                    data: r
                }) : i)) + " " + o((t.subString || e && e.subString || s).call(e, e != null ? e.month_name : e, 3, {
                    name: "subString",
                    hash: {},
                    data: r
                })) + '</span></td>\n<td class="day_start">-</td>\n<td class="day_end">-</td>\n<td class="categorisation">-</td>\n<td class="activity">-</td>\n<td class="hours">-</td>\n<td class="pas">-</td>\n<td class="edit">-</td>\n<td class="destroy">-</td>\n</tr>\n'
            },
            3: function(e, t, n, r, i) {
                var s, o, u = "function",
                    a = t.helperMissing,
                    f = this.escapeExpression,
                    l = this.lambda,
                    c = '<tr class="job-content jc-' + f((o = (o = t.job_content_id || (e != null ? e.job_content_id : e)) != null ? o : a, typeof o === u ? o.call(e, {
                        name: "job_content_id",
                        hash: {},
                        data: r
                    }) : o)) + '" data-job-content-id="' + f((o = (o = t.job_content_id || (e != null ? e.job_content_id : e)) != null ? o : a, typeof o === u ? o.call(e, {
                        name: "job_content_id",
                        hash: {},
                        data: r
                    }) : o)) + '">\n<td class="day edit">' + f((t.subString || e && e.subString || a).call(e, i[1] != null ? i[1].day_name : i[1], 3, {
                        name: "subString",
                        hash: {},
                        data: r
                    })) + "&nbsp;<span class='grayed'>" + f(l(i[1] != null ? i[1].mday : i[1], e)) + " " + f((t.subString || e && e.subString || a).call(e, i[1] != null ? i[1].month_name : i[1], 3, {
                        name: "subString",
                        hash: {},
                        data: r
                    })) + '</span></td>\n<td class="day_start edit">' + f((o = (o = t.day_start || (e != null ? e.day_start : e)) != null ? o : a, typeof o === u ? o.call(e, {
                        name: "day_start",
                        hash: {},
                        data: r
                    }) : o)) + '</td>\n<td class="day_end edit">' + f((o = (o = t.day_end || (e != null ? e.day_end : e)) != null ? o : a, typeof o === u ? o.call(e, {
                        name: "day_end",
                        hash: {},
                        data: r
                    }) : o)) + '</td>\n<td class="categorisation edit"><strong>' + f((o = (o = t.categorisation || (e != null ? e.categorisation : e)) != null ? o : a, typeof o === u ? o.call(e, {
                        name: "categorisation",
                        hash: {},
                        data: r
                    }) : o)) + '</strong></td>\n<td class="activity edit">\n  ';
                return s = t["if"].call(e, e != null ? e.benchmark : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, r, i),
                    inverse: this.noop,
                    data: r
                }), s != null && (c += s), c += "\n  ", s = t["if"].call(e, e != null ? e.annualised : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, r, i),
                    inverse: this.noop,
                    data: r
                }), s != null && (c += s), c += "\n  ", s = t["if"].call(e, e != null ? e.prospective_cover : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, r, i),
                    inverse: this.noop,
                    data: r
                }), s != null && (c += s), c += "\n  ", s = t["if"].call(e, e != null ? e.additional_to_contract : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(10, r, i),
                    inverse: this.noop,
                    data: r
                }), s != null && (c += s), c += "\n  ", s = t["if"].call(e, e != null ? e.subcategorisation : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(12, r, i),
                    inverse: this.noop,
                    data: r
                }), s != null && (c += s), c += "\n  ", s = t["if"].call(e, e != null ? e.location : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(14, r, i),
                    inverse: this.noop,
                    data: r
                }), s != null && (c += s), c += "\n  ", s = t["if"].call(e, e != null ? e.description : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(16, r, i),
                    inverse: this.noop,
                    data: r
                }), s != null && (c += s), c + '\n</td>\n<td class="hours edit">' + f((t.toFixed || e && e.toFixed || a).call(e, e != null ? e.hours : e, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + '</td>\n<td class="pas edit">' + f((t.toFixed || e && e.toFixed || a).call(e, e != null ? e.pas_by_day : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + '</td>\n<td class="edit"><a href="#">Edit</a></td>\n<td><a data-job-content-id="' + f((o = (o = t.job_content_id || (e != null ? e.job_content_id : e)) != null ? o : a, typeof o === u ? o.call(e, {
                    name: "job_content_id",
                    hash: {},
                    data: r
                }) : o)) + '" class="destroy" href="#">Remove</a></td>\n</tr>\n'
            },
            4: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div>" + u((i = (i = t.benchmark || (e != null ? e.benchmark : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "benchmark",
                    hash: {},
                    data: r
                }) : i)) + "</div>"
            },
            6: function(e, t, n, r) {
                var i = t.helperMissing,
                    s = this.escapeExpression;
                return "<div>OVERRIDE: " + s((t.toFixed || e && e.toFixed || i).call(e, e != null ? e.number_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + " per year</div>"
            },
            8: function(e, t, n, r) {
                return "<div>PROSPECTIVE COVER</div>"
            },
            10: function(e, t, n, r) {
                return "<div>ADDITIONAL TO CONTRACT</div>"
            },
            12: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div>" + u((i = (i = t.subcategorisation || (e != null ? e.subcategorisation : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "subcategorisation",
                    hash: {},
                    data: r
                }) : i)) + "</div>"
            },
            14: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div><em>" + u((i = (i = t.location || (e != null ? e.location : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "location",
                    hash: {},
                    data: r
                }) : i)) + "</em></div>"
            },
            16: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div>" + u((i = (i = t.description || (e != null ? e.description : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "description",
                    hash: {},
                    data: r
                }) : i)) + "</div>"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r, i) {
                var s, o = "";
                return s = t.unless.call(e, e != null ? e.events : e, {
                    name: "unless",
                    hash: {},
                    fn: this.program(1, r, i),
                    inverse: this.noop,
                    data: r
                }), s != null && (o += s), s = t.each.call(e, e != null ? e.events : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(3, r, i),
                    inverse: this.noop,
                    data: r
                }), s != null && (o += s), o
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsTemplates.calendar_table_day_row
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.comment = Handlebars.template({
            1: function(e, t, n, r) {
                return "    <br />\n    <a class='no-pdf destroy' href='#'>Remove Comment</a>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "<div class='icon'>\n  C\n</div>\n<div class='detail'>\n  <div class='content'>\n    ";
                return i = (s = (s = t.html_content || (e != null ? e.html_content : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "html_content",
                    hash: {},
                    data: r
                }) : s), i != null && (f += i), f += "\n  </div>\n  <p class='meta'>\n    <strong>\n      By:\n      " + a((s = (s = t.commenter_name || (e != null ? e.commenter_name : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "commenter_name",
                    hash: {},
                    data: r
                }) : s)) + "\n    </strong>\n    <br />\n    " + a((s = (s = t.created_at_formatted || (e != null ? e.created_at_formatted : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "created_at_formatted",
                    hash: {},
                    data: r
                }) : s)) + "\n", i = t["if"].call(e, e != null ? e["permission_to_destroy?"] : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + "  </p>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.comment
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.comment_form = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s = "<div id='errorExplanation'>\n  <h2>There was a problem saving this comment to the database.</h2>\n  <p>There were problems with the following fields:</p>\n  <ul>\n";
                return i = t.each.call(e, e != null ? e.error_messages : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(2, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s + "  </ul>\n</div>"
            },
            2: function(e, t, n, r) {
                var i = this.lambda,
                    s = this.escapeExpression;
                return "    <li>" + s(i(e, e)) + "</li>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "";
                return i = t["if"].call(e, e != null ? e.error_messages : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + "\n<form>\n  <textarea class='content' id='content' type='text' value='" + a((s = (s = t.content || (e != null ? e.content : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "content",
                    hash: {},
                    data: r
                }) : s)) + "'></textarea>\n  <p>\n    <a class='button positive save' href='#'>Add Comment</a>\n  </p>\n</form>"
            },
            useData: !0
        }), this.HandlebarsTemplates.comment_form
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.compulsory_signator_roles = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s = "  <h3>Compulsory Signatories</h3>\n  <p> The job plan must be signed off by";
                return i = t.each.call(e, e != null ? e.collection : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(2, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s + '</p>\n  <div class="signatory_roles"></div>\n'
            },
            2: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "";
                return i = t.unless.call(e, r && r.first, {
                    name: "unless",
                    hash: {},
                    fn: this.program(3, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "&nbsp;a&nbsp;<strong>" + a((s = (s = t.name || (e != null ? e.name : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "name",
                    hash: {},
                    data: r
                }) : s)) + "</strong>", i = t["if"].call(e, r && r.last, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f
            },
            3: function(e, t, n, r) {
                var i, s = "";
                return i = t["if"].call(e, r && r.last, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, r),
                    inverse: this.program(6, r),
                    data: r
                }), i != null && (s += i), s
            },
            4: function(e, t, n, r) {
                return "&nbsp;and"
            },
            6: function(e, t, n, r) {
                return ","
            },
            8: function(e, t, n, r) {
                return "."
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i;
                return i = t["if"].call(e, e != null ? e.collection : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null ? i : ""
            },
            useData: !0
        }), this.HandlebarsTemplates.compulsory_signator_roles
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.contracted_pas = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<h3>Contracted PAs</h3>\n<div class='rc job_plan_gn_contract_pas'></div>\n<p>Please enter the number of PAs in your contract for:</p>\n<form>\n  <fieldset>\n    <ol>\n      <li>\n        <label for='contracted_dcc'>Direct clinical care</label>\n        <input class='contracted_dcc' id='contracted_dcc' type='text' value='" + u((i = (i = t.contracted_dcc || (e != null ? e.contracted_dcc : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "contracted_dcc",
                    hash: {},
                    data: r
                }) : i)) + "' />\n      </li>\n      <li>\n        <label for='contracted_spa'>Supporting professional activities</label>\n        <input class='contracted_spa' id='contracted_spa' type='text' value='" + u((i = (i = t.contracted_spa || (e != null ? e.contracted_spa : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "contracted_spa",
                    hash: {},
                    data: r
                }) : i)) + "' />\n      </li>\n      <li>\n        <label for='contracted_other'>Other activities</label>\n        <input class='contracted_other' id='contracted_other' type='text' value='" + u((i = (i = t.contracted_other || (e != null ? e.contracted_other : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "contracted_other",
                    hash: {},
                    data: r
                }) : i)) + "' />\n      </li>\n      <li>\n        <label for='reason_for_increase' style='text-align:left;'>\n          If there is a discrepancy between the number of PAs in your job plan and those in your contract, please indicate the reason\n        </label>\n        <textarea class='autosizejs reason_for_increase' id='reason_for_increase' name='reason_for_increase'>" + u((i = (i = t.reason_for_increase || (e != null ? e.reason_for_increase : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "reason_for_increase",
                    hash: {},
                    data: r
                }) : i)) + "</textarea>\n      </li>\n      <li class='last'>\n        <p class='right'>\n          <a class='button positive save' href='#'>Save</a>\n          <a class='button cancel' href='#'>Cancel</a>\n        </p>\n      </li>\n    </ol>\n  </fieldset>\n</form>"
            },
            useData: !0
        }), this.HandlebarsTemplates.contracted_pas
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.edocs_table = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "    <tr>\n    <td><a href='" + u((i = (i = t.source_url || (e != null ? e.source_url : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "source_url",
                    hash: {},
                    data: r
                }) : i)) + "' target='_blank'>" + u((i = (i = t.title || (e != null ? e.title : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "title",
                    hash: {},
                    data: r
                }) : i)) + "</a></td>\n    <td><a href='#' class='destroy' data-edoc-id='" + u((i = (i = t.id || (e != null ? e.id : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "id",
                    hash: {},
                    data: r
                }) : i)) + "'>Remove</a></td>\n    </tr>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "<table class='table'>\n  <thead>\n    <tr>\n      <th>Document</th>\n    </tr>\n  </thead>\n  <tbody>\n";
                return i = t.each.call(e, e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s + "  </tbody>\n</table>"
            },
            useData: !0
        }), this.HandlebarsTemplates.edocs_table
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.fee_paying_services = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<div class='header'>\n  <h3>Fee Paying Services</h3>\n</div>\n<div class='main'>\n  <div class='rc job_plan_gn_fee_paying_services'></div>\n  <form>\n    <fieldset>\n      <ol>\n        <li>\n          <p>\n            Fee Paying services are defined in Schedule 10 of â€˜Terms and Conditions â€“ Consultants (England) 2003â€™ available here:\n            <br />\n            <a href='http://www.nhsemployers.org/SiteCollectionDocuments/Consultant_Contract_V8_Revised_Terms_and_Conditions_220808_aw.pdf'>\n              Terms and Conditions\n            </a>\n          </p>\n        </li>\n        <li>\n          <fieldset>\n            <legend>Do you undertake fee paying services?</legend>\n            <label>\n              <input class='fee_paying_services' id='fee_paying_services_yes' name='fee_paying_services' type='radio' value='true' />\n              Yes\n            </label>\n            <label>\n              <input class='fee_paying_services' id='fee_paying_services_no' name='fee_paying_services' type='radio' value='false' />\n              No\n            </label>\n          </fieldset>\n        </li>\n        <li>\n          <fieldset>\n            <legend>If yes, is the fee associated with this work appropriately managed in accordance with terms of the contract?\"</legend>\n            <label>\n              <input class='fee_in_contract' id='fee_in_contract_yes' name='fee_in_contract' type='radio' value='true' />\n              Yes\n            </label>\n            <label>\n              <input class='fee_in_contract' id='fee_in_contract_no' name='fee_in_contract' type='radio' value='false' />\n              No\n            </label>\n          </fieldset>\n        </li>\n        <li class='last'>\n          <p class='right'>\n            <a class='button positive save' href='#'>Save</a>\n            <a class='button cancel' href='#'>Cancel</a>\n          </p>\n        </li>\n      </ol>\n    </fieldset>\n  </form>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.fee_paying_services
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.general_discussion = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div class='header'>\n  <h3>" + u((i = (i = t.title || (e != null ? e.title : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "title",
                    hash: {},
                    data: r
                }) : i)) + "</h3>\n</div>\n<div class='main'>\n  <div class='rc'></div>\n  <form>\n    <fieldset>\n      <ol>\n        <li>\n          <label for='general_discussion' style='text-align:left;'>\n            " + u((i = (i = t.title || (e != null ? e.title : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "title",
                    hash: {},
                    data: r
                }) : i)) + "\n          </label>\n          <textarea class='general_discussion' id='general_discussion' name='general_discussion'>" + u((i = (i = t.general_discussion ||
                    (e != null ? e.general_discussion : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "general_discussion",
                    hash: {},
                    data: r
                }) : i)) + "</textarea>\n        </li>\n        <li class='last'>\n          <p class='right'>\n            <a class='button positive save' href='#'>Save</a>\n            <a class='button cancel' href='#'>Cancel</a>\n          </p>\n        </li>\n      </ol>\n    </fieldset>\n  </form>\n  <h3>Attached Documents</h3>\n  <div id='edocs'></div>\n  <form id='edoc_form'></form>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.general_discussion
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.general_info = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s = "<div id='errorExplanation'>\n    <h2>There was a problem saving this job plan</h2>\n    <p>There were problems with the following fields:</p>\n    <ul>\n";
                return i = t.each.call(e, e != null ? e.error_messages : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(2, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s + "    </ul>\n  </div>"
            },
            2: function(e, t, n, r) {
                var i = this.lambda,
                    s = this.escapeExpression;
                return "      <li>" + s(i(e, e)) + "</li>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "<div class='header'>\n  <h3>General Information</h3>\n</div>\n<div class='main'>\n  <div class='rc job_plan_gn_general_information'></div>\n  ";
                return i = t["if"].call(e, e != null ? e.error_messages : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + "\n  <form>\n    <fieldset>\n      <ol>\n        <li>\n          <label for='effective_date'>\n            Effective Date <br/>\n            e.g. 1st April 2017\n          </label>\n          <input class='effective_date' id='effective_date' type='text' value='" + a((s = (s = t.effective_date || (e != null ? e.effective_date : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "effective_date",
                    hash: {},
                    data: r
                }) : s)) + "' />\n        </li>\n        <li>\n          <label for='working_weeks'>Attending / Working Weeks</label>\n          <input class='working_weeks' id='working_weeks' type='text' value='" + a((s = (s = t.working_weeks || (e != null ? e.working_weeks : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "working_weeks",
                    hash: {},
                    data: r
                }) : s)) + "' />\n        </li>\n        <li>\n          <label for='job_title'>Job Title</label>\n          <input class='job_title' id='job_title' type='text' value='" + a((s = (s = t.job_title || (e != null ? e.job_title : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "job_title",
                    hash: {},
                    data: r
                }) : s)) + "' />\n        </li>\n        <li>\n          <label for='speciality'>Speciality</label>\n          <select id='speciality'></select>\n        </li>\n        <li>\n          <label for='directorate'>Directorate</label>\n          <select id='directorate'></select>\n        </li>\n        <li>\n          <label for='default_employer'>Main Employer</label>\n          <select id='default_employer'></select>\n        </li>\n        <li>\n          <label for='default_location'>Main place of work</label>\n          <input class='default_location' id='default_location' type='text' value='" + a((s = (s = t.default_location || (e != null ? e.default_location : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "default_location",
                    hash: {},
                    data: r
                }) : s)) + "' />\n          <select id='default_location_dropdown'></select>\n        </li>\n        <li>\n          <fieldset>\n            <legend>Contract type</legend>\n            <label for='contract_type_Pre 2003 Contract'>\n              <input class='contract_type' name='contract_type' type='radio' value='Pre 2003 Contract' />\n              Pre 2003 Contract\n            </label>\n            <label for='contract_type_Post 2003 Contract'>\n              <input class='contract_type' name='contract_type' type='radio' value='Post 2003 Contract' />\n              Post 2003 Contract\n            </label>\n            <label for='contract_type_Clinical Academic Contract'>\n              <input class='contract_type' name='contract_type' type='radio' value='Clinical Academic Contract' />\n              Clinical Academic Contract\n            </label>\n            <label for='contract_type_SAS 2008 Contract'>\n              <input class='contract_type' name='contract_type' type='radio' value='SAS 2008 Contract' />\n              SAS 2008 Contract\n            </label>\n          </fieldset>\n        </li>\n        <li>\n          <label for='european_working_directive_opt_out'>Do you wish to opt out of the European Working Time Directive?</label>\n          <input class='european_working_directive_opt_out' name='european_working_directive_opt_out' type='checkbox' value='1' />\n          Yes\n        </li>\n        <li>\n          <label for='current_pay_threshold'>Current pay threshold</label>\n          <input class='current_pay_threshold' id='current_pay_threshold' type='text' value='" + a((s = (s = t.current_pay_threshold || (e != null ? e.current_pay_threshold : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "current_pay_threshold",
                    hash: {},
                    data: r
                }) : s)) + "' />\n        </li>\n        <li class='last'>\n          <p class='right'>\n            <a class='button positive save' href='#'>Save</a>\n            <a class='button cancel' href='#'>Cancel</a>\n          </p>\n        </li>\n      </ol>\n    </fieldset>\n  </form>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.general_info
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.instructions = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<div class='header'>\n  <h3>Instructions</h3>\n</div>\n<div class='main'>\n  <div class='rc'></div>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.instructions
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.job_content_form = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s = "<div id='errorExplanation'>\n  <h2>There was a problem saving this activity to the database.</h2>\n  <p>There were problems with the following fields:</p>\n  <ul>\n";
                return i = t.each.call(e, e != null ? e.error_messages : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(2, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s + "  </ul>\n</div>"
            },
            2: function(e, t, n, r) {
                var i = this.lambda,
                    s = this.escapeExpression;
                return "    <li>" + s(i(e, e)) + "</li>\n"
            },
            4: function(e, t, n, r) {
                return "        <p>\n          <label for='benchmarks'>Subcategory</label>\n          <select id='benchmarks'></select>\n        </p>\n"
            },
            6: function(e, t, n, r) {
                return "          <a class='button big positive create save' href='#'>Create</a>\n"
            },
            8: function(e, t, n, r) {
                return "          <a class='button big positive edit save' href='#'>Save</a>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "";
                return i = t["if"].call(e, e != null ? e.error_messages : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "\n<form>\n  <h2>Categorisation</h2>\n  <fieldset>\n    <ol>\n      <li class='first'>\n        <p>\n          <label for='categorisation'>Category</label>\n          <select id='categorisation'></select>\n        </p>\n", i = t["if"].call(e, e != null ? e.has_benchmarks : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "        <p>\n          <label>Activity</label>\n          <select id='subcategorisation'></select>\n        </p>\n        <p>\n          <label for='on_call_true'>Type</label>\n          <input checked='checked' class='activity_type' name='activity_type' type='radio' value='Core'>Core (default)</input>\n          <input class='activity_type' name='activity_type' type='radio' value='ATC'>Additional to Contract</input>\n          <input class='activity_type' name='activity_type' type='radio' value='APA'>Additional Programmed Activity</input>\n        </p>\n      </li>\n      <li class='tags'>\n        <p>\n          <label>Tags:</label>\n          <select data-placeholder='Select tags...' id='tags' multiple='multiple'></select>\n        </p>\n      </li>\n      <li>\n        <p>\n          <label>Employer</label>\n          <select id='employer'></select>\n        </p>\n      </li>\n      <li>\n        <p>\n          <label for='location'>Location</label>\n          <input class='location' id='location' placeholder='Enter a location...' type='text' value='" + a((s = (s = t.location || (e != null ? e.location : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "location",
                    hash: {},
                    data: r
                }) : s)) + "' />\n          <select id='location_dropdown'></select>\n        </p>\n      </li>\n      <li>\n        <p>\n          <label for='location'>Description</label>\n          <br />\n          <textarea class='description' id='description' placeholder='Enter a brief description...' type='text' value='" + a((s = (s = t.description || (e != null ? e.description : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "description",
                    hash: {},
                    data: r
                }) : s)) + "'></textarea>\n        </p>\n      </li>\n      <li>\n        <p>\n          <label for='on_call_true'>On Call</label>\n          <input class='on_call' name='on_call' type='radio' value='true'>Yes</input>\n          <input class='on_call' name='on_call' type='radio' value='false'>No</input>\n        </p>\n      </li>\n    </ol>\n  </fieldset>\n  <br />\n  <br />\n  <h2>Schedule</h2>\n  <fieldset>\n    <ol>\n      <li>\n        <p>\n          <label>Scheduled</label>\n          <input class='scheduled' id='scheduled_true' name='scheduled' type='radio' value='true'>Yes</input>\n          <input class='scheduled' id='scheduled_false' name='scheduled' type='radio' value='false'>No</input>\n        </p>\n      </li>\n    </ol>\n  </fieldset>\n  <fieldset class='schedule'>\n    <ol>\n      <li>\n        <p>\n          <label for='repeats'>Repeats</label>\n          <select id='repeats'></select>\n        </p>\n      </li>\n      <li class='repeats daily'>\n        <p>\n          <strong>Every</strong>\n          <select class='every_n repeats_every_n_days' id='repeats_every_n_days' style='width: 40px;' value='" + a((s = (s = t.repeats_every_n_days || (e != null ? e.repeats_every_n_days : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "repeats_every_n_days",
                    hash: {},
                    data: r
                }) : s)) + "'></select>\n          day(s)\n        </p>\n      </li>\n      <li class='repeats weekly'>\n        <p>\n          <strong>Every</strong>\n          <select class='every_n repeats_every_n_weeks' id='repeats_every_n_weeks' style='width: 40px;' value='" + a((s = (s = t.repeats_every_n_weeks || (e != null ? e.repeats_every_n_weeks : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "repeats_every_n_weeks",
                    hash: {},
                    data: r
                }) : s)) + "'></select>\n          week(s) on\n        </p>\n        <table class='days_of_week'>\n          <tbody>\n            <tr>\n              <td class='clickable_td' data-value='Monday'>Monday</td>\n              <td class='clickable_td' data-value='Tuesday'>Tuesday</td>\n              <td class='clickable_td' data-value='Wednesday'>Wednesday</td>\n              <td class='clickable_td' data-value='Thursday'>Thursday</td>\n              <td class='clickable_td' data-value='Friday'>Friday</td>\n              <td class='clickable_td' data-value='Saturday'>Saturday</td>\n              <td class='clickable_td' data-value='Sunday'>Sunday</td>\n            </tr>\n          </tbody>\n        </table>\n        <div class='rota-weeks'>\n          <p>On weeks:</p>\n          <table class='rota'>\n            <tbody>\n              <tr class='rota-week-selector'></tr>\n            </tbody>\n          </table>\n        </div>\n      </li>\n      <li class='repeats monthly'>\n        <p>\n          <strong>Every</strong>\n          <select class='every_n repeats_every_n_months' id='repeats_every_n_months' style='width: 40px;' value='" + a((s = (s = t.repeats_every_n_months || (e != null ? e.repeats_every_n_months : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "repeats_every_n_months",
                    hash: {},
                    data: r
                }) : s)) + "'></select>\n          month(s)\n        </p>\n        <p>\n          <input class='repeats_monthly' name='repeats_monthly' type='radio' value='on'>On the...</input>\n          <input class='repeats_monthly' name='repeats_monthly' type='radio' value='each'>Each...</input>\n        </p>\n        <p>\n          <select class='monthly_on' id='repeats_monthly_on_ordinals' multiple='multiple' style='width: 60px; height: 10em;'></select>\n          <select class='monthly_on' id='repeats_monthly_on_days_of_the_week' multiple='multiple' style='height: 10em;'></select>\n        </p>\n        <table class='days_of_month'>\n          <tbody>\n            <tr>\n              <td class='clickable_td' data-value='1'>1</td>\n              <td class='clickable_td' data-value='2'>2</td>\n              <td class='clickable_td' data-value='3'>3</td>\n              <td class='clickable_td' data-value='4'>4</td>\n              <td class='clickable_td' data-value='5'>5</td>\n              <td class='clickable_td' data-value='6'>6</td>\n              <td class='clickable_td' data-value='7'>7</td>\n            </tr>\n            <tr>\n              <td class='clickable_td' data-value='8'>8</td>\n              <td class='clickable_td' data-value='9'>9</td>\n              <td class='clickable_td' data-value='10'>10</td>\n              <td class='clickable_td' data-value='11'>11</td>\n              <td class='clickable_td' data-value='12'>12</td>\n              <td class='clickable_td' data-value='13'>13</td>\n              <td class='clickable_td' data-value='14'>14</td>\n            </tr>\n            <tr>\n              <td class='clickable_td' data-value='15'>15</td>\n              <td class='clickable_td' data-value='16'>16</td>\n              <td class='clickable_td' data-value='17'>17</td>\n              <td class='clickable_td' data-value='18'>18</td>\n              <td class='clickable_td' data-value='19'>19</td>\n              <td class='clickable_td' data-value='20'>20</td>\n              <td class='clickable_td' data-value='21'>21</td>\n            </tr>\n            <tr>\n              <td class='clickable_td' data-value='22'>22</td>\n              <td class='clickable_td' data-value='23'>23</td>\n              <td class='clickable_td' data-value='24'>24</td>\n              <td class='clickable_td' data-value='25'>25</td>\n              <td class='clickable_td' data-value='26'>26</td>\n              <td class='clickable_td' data-value='27'>27</td>\n              <td class='clickable_td' data-value='28'>28</td>\n            </tr>\n            <tr>\n              <td class='clickable_td' data-value='29'>29</td>\n              <td class='clickable_td' data-value='30'>30</td>\n              <td class='clickable_td' data-value='31'>31</td>\n            </tr>\n          </tbody>\n        </table>\n      </li>\n      <li class='repeats yearly'>\n        <p>\n          <strong>Every</strong>\n          <input class='every_n repeats_every_n_years' id='repeats_every_n_years' placeholder='0' type='text' value='" + a((s = (s = t.repeats_every_n_years || (e != null ? e.repeats_every_n_years : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "repeats_every_n_years",
                    hash: {},
                    data: r
                }) : s)) + "' />\n          year(s) in\n        </p>\n        <table class='months_of_year'>\n          <tbody>\n            <tr>\n              <td class='clickable_td' data-value='1'>January</td>\n              <td class='clickable_td' data-value='2'>February</td>\n              <td class='clickable_td' data-value='3'>March</td>\n              <td class='clickable_td' data-value='4'>April</td>\n            </tr>\n            <tr>\n              <td class='clickable_td' data-value='5'>May</td>\n              <td class='clickable_td' data-value='6'>June</td>\n              <td class='clickable_td' data-value='7'>July</td>\n              <td class='clickable_td' data-value='8'>August</td>\n            </tr>\n            <tr>\n              <td class='clickable_td' data-value='9'>September</td>\n              <td class='clickable_td' data-value='10'>October</td>\n              <td class='clickable_td' data-value='11'>November</td>\n              <td class='clickable_td' data-value='12'>December</td>\n            </tr>\n          </tbody>\n        </table>\n      </li>\n      <li>\n        <p>\n          <label for='start_time'>Start Time</label>\n          <select class='start_time_hours time' style='width: 50px;'></select>\n          <span>:</span>\n          <select class='start_time_minutes time' style='width: 50px;'></select>\n        </p>\n      </li>\n      <li>\n        <p>\n          <label for='end_time'>End Time</label>\n          <select class='end_time_hours time' style='width: 50px;'></select>\n          <span>:</span>\n          <select class='end_time_minutes time' style='width: 50px;'></select>\n        </p>\n      </li>\n    </ol>\n  </fieldset>\n  <br />\n  <br />\n  <h2>Summary</h2>\n  <fieldset class='schedule'>\n    <br />\n    <a class='button positive recalculate' href='#'>Save & Recalculate</a>\n    <ol>\n      <li>\n        <table class='summary per_occurrence'>\n          <thead>\n            <tr>\n              <th>Per Occurrence</th>\n              <th class='non_premium'>Non-Premium Time</th>\n              <th class='premium'>Premium Time</th>\n              <th class='total_title'></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Hours Worked</td>\n              <td class='summary_data non_premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.non_premium_hours_per_occurrence : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.premium_hours_per_occurrence : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.hours_per_occurrence : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n            </tr>\n            <tr>\n              <td>PAs Accumulated</td>\n              <td class='summary_data non_premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.non_premium_pas_per_occurrence : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.premium_pas_per_occurrence : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.pas_per_occurrence : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n            </tr>\n          </tbody>\n        </table>\n        <table class='summary'>\n          <thead>\n            <tr>\n              <th>Per Worked Week</th>\n              <th class='non_premium'>Non-Premium Time</th>\n              <th class='premium'>Premium Time</th>\n              <th class='total_title'></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Occurrences</td>\n              <td class='summary_data non_premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.non_premium_occurrences_per_week : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.premium_occurrences_per_week : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.occurrences_per_week : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n            </tr>\n            <tr>\n              <td>Hours Worked</td>\n              <td class='summary_data non_premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.non_premium_hours_per_week : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.premium_hours_per_week : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.hours_per_week : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n            </tr>\n            <tr>\n              <td>PAs Accumulated</td>\n              <td class='summary_data non_premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.non_premium_pas_per_week : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.premium_pas_per_week : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.pas_per_week : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n            </tr>\n          </tbody>\n        </table>\n        <table class='summary'>\n          <thead>\n            <tr>\n              <th>Per Year</th>\n              <th class='non_premium'>Non-Premium Time</th>\n              <th class='premium'>Premium Time</th>\n              <th class='total_title'></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Occurrences</td>\n              <td class='summary_data non_premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.worked_non_premium_occurrences_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.worked_premium_occurrences_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td>\n                <div id='prospective_cover'>\n                  Prospective Cover?\n                  <input class='prospective_cover' name='prospective_cover' type='checkbox' value='1' />\n                </div>\n                <div class='summary_data'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.worked_occurrences_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</div>\n              </td>\n            </tr>\n            <tr>\n              <td>Hours Worked</td>\n              <td class='summary_data non_premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.worked_non_premium_hours_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.worked_premium_hours_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              <td class='summary_data'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.worked_hours_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n            </tr>\n          </tbody>\n        </table>\n        <br />\n        <a class='summary' href='#' id='view_breakdown_toggle'>Override Occurrences</a>\n        <div class='view_breakdown'>\n          <table class='summary'>\n            <thead>\n              <tr>\n                <th>Per Year, Ignoring Leave</th>\n                <th class='non_premium'>Non-Premium Time</th>\n                <th class='premium'>Premium Time</th>\n                <th class='total_title'></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Occurrences (if no leave were taken)</td>\n                <td class='summary_data non_premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.non_premium_occurrences_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n                <td class='summary_data premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.premium_occurrences_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n                <td>\n                  <div id='annualised'>\n                    Override?\n                    <input class='annualised' name='annualised' type='checkbox' value='1' />\n                  </div>\n                  <div class='number_per_year'>\n                    <select class='every_n number_per_year' id='number_per_year' style='width: 50px;' value='" + a((s = (s = t.repeats_every_n_months || (e != null ? e.repeats_every_n_months : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "repeats_every_n_months",
                    hash: {},
                    data: r
                }) : s)) + "'></select>\n                  </div>\n                  <div class='occurrences_per_year summary_data'>\n                    " + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.occurrences_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td>Hours Worked (if no leave were taken)</td>\n                <td class='summary_data non_premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.non_premium_hours_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n                <td class='summary_data premium'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.premium_hours_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n                <td class='summary_data'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.hours_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </li>\n      <br />\n      <a href='#' id='advanced_when_toggle'>Advanced</a>\n      <input class='advanced_when' id='advanced_when' name='advanced_when' type='checkbox' />\n    </ol>\n  </fieldset>\n  <fieldset class='advanced_when'>\n    <ol>\n      <li>\n        <p>\n          <label for='from_date'>Start Date</label>\n          <input class='from_date' id='from_date' placeholder='yyyy-mm-dd' readonly='readonly' type='text' value='" + a((s = (s = t.from_date || (e != null ? e.from_date : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "from_date",
                    hash: {},
                    data: r
                }) : s)) + "' />\n        </p>\n      </li>\n      <li>\n        <p>\n          <label for='until_date'>End Date</label>\n          <input class='from_date' id='until_date' placeholder='yyyy-mm-dd' readonly='readonly' type='text' value='" + a((s = (s = t.until_date || (e != null ? e.until_date : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "until_date",
                    hash: {},
                    data: r
                }) : s)) + "' />\n        </p>\n      </li>\n      <li>\n        <p>\n          <label>Override Hours and PAs</label>\n          <input class='override_calculations' name='override_calculations' type='radio' value='true'>Yes</input>\n          <input class='override_calculations' name='override_calculations' type='radio' value='false'>No</input>\n        </p>\n      </li>\n    </ol>\n  </fieldset>\n  <fieldset class='hours_and_pas'>\n    <ol>\n      <li>\n        <p>\n          <label>Hours per week</label>\n          <input class='hours' id='hours' placeholder='0' type='text' value='" + a((s = (s = t.hours || (e != null ? e.hours : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "hours",
                    hash: {},
                    data: r
                }) : s)) + "' />\n        </p>\n      </li>\n      <li>\n        <p>\n          <label>PAs per week</label>\n          <input class='pas' id='pas' placeholder='0' type='text' value='" + a((s = (s = t.pas || (e != null ? e.pas : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "pas",
                    hash: {},
                    data: r
                }) : s)) + "' />\n        </p>\n      </li>\n    </ol>\n  </fieldset>\n  <fieldset>\n    <ol>\n      <li class='last buttons'>\n        <p class='right'>\n", i = t["if"].call(e, e != null ? e.is_new : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, r),
                    inverse: this.program(8, r),
                    data: r
                }), i != null && (f += i), f + "          <a class='button big cancel' href='#'>Cancel</a>\n        </p>\n      </li>\n    </ol>\n  </fieldset>\n</form>"
            },
            useData: !0
        }), this.HandlebarsTemplates.job_content_form
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.job_content_row = Handlebars.template({
            1: function(e, t, n, r) {
                return "<td></td>\n"
            },
            3: function(e, t, n, r) {
                return "<td class='drag_handle'></td>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "";
                return i = t["if"].call(e, e != null ? e.is_pdf : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.program(3, r),
                    data: r
                }), i != null && (f += i), f += "<td class='edit start_time'>" + a((s = (s = t.start_time_formatted || (e != null ? e.start_time_formatted : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "start_time_formatted",
                    hash: {},
                    data: r
                }) : s)) + "</td>\n<td class='edit end_time'>" + a((s = (s = t.end_time_formatted || (e != null ? e.end_time_formatted : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "end_time_formatted",
                    hash: {},
                    data: r
                }) : s)) + "</td>\n<td class='edit categorisation'>\n  <strong>" + a((s = (s = t.categorisation || (e != null ? e.categorisation : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "categorisation",
                    hash: {},
                    data: r
                }) : s)) + "</strong>\n</td>\n<td class='edit activity'>", i = (s = (s = t.summary || (e != null ? e.summary : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "summary",
                    hash: {},
                    data: r
                }) : s), i != null && (f += i), f + "</td>\n<td class='edit hours_per_week'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.hours : e, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n<td class='edit pas_per_week'>" + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.pas : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n<td class='edit'>\n  <a class='no-pdf edit' href='#'>Edit</a>\n</td>\n<td>\n  <a class='no-pdf destroy' href='#'>Remove</a>\n</td>"
            },
            useData: !0
        }), this.HandlebarsTemplates.job_content_row
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.job_content_sort_picker = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<div class='no-pdf'>\n  Sort by:\n</div>\n<label class='no-pdf'>\n  <input class='sort' name='sort_method' type='radio' value='chronological_order' />\n  Weekday\n</label>\n<label class='no-pdf'>\n  <input class='sort' name='sort_method' type='radio' value='order' />\n  Custom\n</label>\n<label class='no-pdf'>\n  <input class='sort' name='sort_method' type='radio' value='categorisation' />\n  Category\n</label>"
            },
            useData: !0
        }), this.HandlebarsTemplates.job_content_sort_picker
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.job_content_table = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<thead>\n  <tr>\n    <th class='drag_handle_header'></th>\n    <th class='start_time'>Start</th>\n    <th class='end_time'>End</th>\n    <th class='categorisation'></th>\n    <th class='activity'>Activity</th>\n    <th class='hours_per_week'>Hours / week</th>\n    <th class='pas_per_week'>PAs / week</th>\n    <th class='edit'></th>\n    <th class='destroy'></th>\n  </tr>\n</thead>\n<tbody>\n  <tr class='blank'>\n    <td>-</td>\n    <td>-</td>\n    <td>-</td>\n    <td>-</td>\n    <td>-</td>\n    <td>-</td>\n    <td>-</td>\n    <td>-</td>\n    <td>-</td>\n  </tr>\n</tbody>"
            },
            useData: !0
        }), this.HandlebarsTemplates.job_content_table
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.job_plan_status = Handlebars.template({
            1: function(e, t, n, r) {
                return "<p>\n  <a class='button positive big send_for_sign_off' href='#'>\n    Submit for Sign Off\n  </a>\n</p>"
            },
            3: function(e, t, n, r) {
                return "<p>\n  <a class='button negative big revert_to_draft' href='#'>\n    Revert to Draft\n  </a>\n</p>"
            },
            5: function(e, t, n, r) {
                return "<p>\n  <a class='button negative big reject_job_plan' href='#'>\n    Revert to Submitted\n  </a>\n</p>"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "";
                return i = t["if"].call(e, e != null ? e["permission_to_send_for_sign_off?"] : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s += "\n", i = t["if"].call(e, e != null ? e["permission_to_revert_to_draft?"] : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s += "\n", i = t["if"].call(e, e != null ? e["permission_to_reject_job_plan?"] : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s
            },
            useData: !0
        }), this.HandlebarsTemplates.job_plan_status
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.meetings = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div class='header'>\n  <h3>Meetings</h3>\n</div>\n<div class='main'>\n  <div class='rc job_plan_gn_meetings'></div>\n  <form>\n    <fieldset>\n      <ol>\n        <li>\n          <label for='meetings_info' style='text-align:left;'>\n            Dates of job plan meetings and names of those present\n          </label>\n          <textarea class='meetings_info' id='meetings_info' name='meetings_info'>" + u((i = (i = t.meetings_info || (e != null ? e.meetings_info : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "meetings_info",
                    hash: {},
                    data: r
                }) : i)) + "</textarea>\n        </li>\n        <li class='last'>\n          <p class='right'>\n            <a class='button positive save' href='#'>Save</a>\n            <a class='button cancel' href='#'>Cancel</a>\n          </p>\n        </li>\n      </ol>\n    </fieldset>\n  </form>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.meetings
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.nav_col = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return ""
            },
            useData: !0
        }), this.HandlebarsTemplates.nav_col
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.nav_row = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<a href='#section/" + u((i = (i = t.id || (e != null ? e.id : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "id",
                    hash: {},
                    data: r
                }) : i)) + "'>\n  <div class='number'>\n    <h3>" + u((i = (i = t.number || (e != null ? e.number : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "number",
                    hash: {},
                    data: r
                }) : i)) + "</h3>\n  </div>\n  <div class='title'>\n    <h3>" + u((i = (i = t.title || (e != null ? e.title : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "title",
                    hash: {},
                    data: r
                }) : i)) + "</h3>\n  </div>\n</a>"
            },
            useData: !0
        }), this.HandlebarsTemplates.nav_row
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.new_activity = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<a class='button positive big new_activity' href='#'>\n  New Activity\n</a>"
            },
            useData: !0
        }), this.HandlebarsTemplates.new_activity
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.non_compulsory_signator_roles = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "  <h3>" + a((s = (s = t.title || (e != null ? e.title : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "title",
                        hash: {},
                        data: r
                    }) : s)) + "</h3>\n  <p> The job plan may be signed off by";
                return i = t.each.call(e, e != null ? e.collection : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(2, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + '</p>\n  <div class="signatory_roles"></div>\n'
            },
            2: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "";
                return i = t.unless.call(e, r && r.first, {
                    name: "unless",
                    hash: {},
                    fn: this.program(3, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "&nbsp;a&nbsp;<strong>" + a((s = (s = t.name || (e != null ? e.name : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "name",
                    hash: {},
                    data: r
                }) : s)) + "</strong>", i = t["if"].call(e, r && r.last, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f
            },
            3: function(e, t, n, r) {
                var i, s = "";
                return i = t["if"].call(e, r && r.last, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, r),
                    inverse: this.program(6, r),
                    data: r
                }), i != null && (s += i), s
            },
            4: function(e, t, n, r) {
                return "&nbsp;and/or"
            },
            6: function(e, t, n, r) {
                return ","
            },
            8: function(e, t, n, r) {
                return "."
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i;
                return i = t["if"].call(e, e != null ? e.collection : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null ? i : ""
            },
            useData: !0
        }), this.HandlebarsTemplates.non_compulsory_signator_roles
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.objectives = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<div class='header'>\n  <h3>Objectives</h3>\n</div>\n<div class='main'>\n  <h2>The SMART mnemonic</h2>\n  <dl>\n    <dt>SPECIFIC</dt>\n    <dd>What would you like to achieve?</dd>\n    <dt>MEASURABLE</dt>\n    <dd>How will you know when you've achieved it?</dd>\n    <dt>ATTAINABLE</dt>\n    <dd>Is the objective achievable and attainable?</dd>\n    <dt>REALISTIC</dt>\n    <dd>Can you realistically achieve the objective with the resources you have?</dd>\n    <dt>TIME BOUNDED</dt>\n    <dd>When do you hope to achieve it by?</dd>\n  </dl>\n  <div class='rc job_plan_gn_objectives'></div>\n  <h2>Trust Objectives</h2>\n  <div class='rc job_plan_trust_objectives'></div>\n  <h2>Speciality Objectives</h2>\n  <div class='rc job_plan_gn_speciality_objectives'></div>\n  <table id='speciality_objectives'>\n    <thead>\n      <tr>\n        <th>SMART objective</th>\n      </tr>\n    </thead>\n    <tbody></tbody>\n  </table>\n  <p class='right'>\n    <a class='button positive new-speciality-objective' href='#'>Add Speciality Objective</a>\n  </p>\n  <div id='speciality-objective-forms'></div>\n  <h2>Personal Objectives</h2>\n  <div class='rc job_plan_gn_personal_objectives'></div>\n  <table id='personal_objectives'>\n    <thead>\n      <tr>\n        <th>SMART objective</th>\n      </tr>\n    </thead>\n    <tbody></tbody>\n  </table>\n  <p class='right'>\n    <a class='button positive new-personal-objective' href='#'>Add Personal Objective</a>\n  </p>\n  <div id='personal-objective-forms'></div>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.objectives
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.on_call_supplement = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div class='header'>\n  <h3>On Call Availability Supplement</h3>\n</div>\n<div class='main'>\n  <div class='rc job_plan_gn_on_call_supplement'></div>\n  <h4>On Call Activities</h4>\n  <table id='on_call_activities'></table>\n  <form>\n    <fieldset>\n      <ol>\n        <li>\n          <label>On-Call Frequency</label>\n          <fieldset>\n            <label for='ocas_freq_High frequency: 1 in 1 to 1 in 4'>\n              <input class='ocas_freq' name='ocas_freq' type='radio' value='High frequency: 1 in 1 to 1 in 4' />\n              High frequency: 1 in 1 to 1 in 4\n            </label>\n            <label for='ocas_freq_Medium frequency: 1 in 5 to 1 in 8'>\n              <input class='ocas_freq' name='ocas_freq' type='radio' value='Medium frequency: 1 in 5 to 1 in 8' />\n              Medium frequency: 1 in 5 to 1 in 8\n            </label>\n            <label for='ocas_freq_Low frequency: 1 in 9 or less frequent'>\n              <input class='ocas_freq' name='ocas_freq' type='radio' value='Low frequency: 1 in 9 or less frequent' />\n              Low frequency: 1 in 9 or less frequent\n            </label>\n          </fieldset>\n        </li>\n        <li>\n          <label for='on_call_category'>Agreed category (A,B or SAS)</label>\n          <select id='on_call_category'></select>\n        </li>\n        <li>\n          <label for='on_call_supplement'>On call supplement</label>\n          <input class='on_call_supplement' id=':on_call_supplement' type='text' value='" + u((i = (i = t[":on_call_supplement"] || (e != null ? e[":on_call_supplement"] : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: ":on_call_supplement",
                    hash: {},
                    data: r
                }) : i)) + "' />\n        </li>\n        <li>\n          <label for='on_call_rota' style='text-align:left;'>\n            Additional breakdown of frequency e.g. 1:12 midweek nights, 1:6 weekend\n          </label>\n          <textarea class='autosizejs on_call_rota' id='on_call_rota' name='on_call_rota'>" + u((i = (i = t.on_call_rota || (e != null ? e.on_call_rota : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "on_call_rota",
                    hash: {},
                    data: r
                }) : i)) + "</textarea>\n        </li>\n        <li class='last'>\n          <p class='right'>\n            <a class='button positive save' href='#'>Save</a>\n            <a class='button cancel' href='#'>Cancel</a>\n          </p>\n        </li>\n      </ol>\n    </fieldset>\n  </form>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.on_call_supplement
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.other_agreements = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div class='header'>\n  <h3>Other Agreements</h3>\n</div>\n<div class='main'>\n  <div class='rc job_plan_gn_other_agreements'></div>\n  <form>\n    <fieldset>\n      <ol>\n        <li>\n          <label for='other_agreements' style='text-align:left;'>\n            Detail any other specific agreements in place regarding how the job plan operates.\n          </label>\n          <textarea class='other_agreements' id='other_agreements' name='other_agreements'>" + u((i = (i = t.other_agreements || (e != null ? e.other_agreements : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "other_agreements",
                    hash: {},
                    data: r
                }) : i)) + "</textarea>\n        </li>\n        <li class='last'>\n          <p class='right'>\n            <a class='button positive save' href='#'>Save</a>\n            <a class='button cancel' href='#'>Cancel</a>\n          </p>\n        </li>\n      </ol>\n    </fieldset>\n  </form>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.other_agreements
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.overlapping_event_row = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div>" + u((i = (i = t.benchmark || (e != null ? e.benchmark : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "benchmark",
                    hash: {},
                    data: r
                }) : i)) + "</div>"
            },
            3: function(e, t, n, r) {
                var i = t.helperMissing,
                    s = this.escapeExpression;
                return "<div>OVERRIDE: " + s((t.toFixed || e && e.toFixed || i).call(e, e != null ? e.number_per_year : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + " per year</div>"
            },
            5: function(e, t, n, r) {
                return "<div>PROSPECTIVE COVER</div>"
            },
            7: function(e, t, n, r) {
                return "<div>ADDITIONAL TO CONTRACT</div>"
            },
            9: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div>" + u((i = (i = t.subcategorisation || (e != null ? e.subcategorisation : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "subcategorisation",
                    hash: {},
                    data: r
                }) : i)) + "</div>"
            },
            11: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div><em>" + u((i = (i = t.location || (e != null ? e.location : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "location",
                    hash: {},
                    data: r
                }) : i)) + "</em></div>"
            },
            13: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div>" + u((i = (i = t.description || (e != null ? e.description : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "description",
                    hash: {},
                    data: r
                }) : i)) + "</div>"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = '<tr class="job-content jc-' + a((s = (s = t.job_content_id || (e != null ? e.job_content_id : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "job_content_id",
                        hash: {},
                        data: r
                    }) : s)) + '" data-job-content-id="' + a((s = (s = t.job_content_id || (e != null ? e.job_content_id : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "job_content_id",
                        hash: {},
                        data: r
                    }) : s)) + '">\n  <td class="day edit">' + a((t.subString || e && e.subString || u).call(e, e != null ? e.day_name : e, 3, {
                        name: "subString",
                        hash: {},
                        data: r
                    })) + "&nbsp;<span class='grayed'>" + a((s = (s = t.mday || (e != null ? e.mday : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "mday",
                        hash: {},
                        data: r
                    }) : s)) + " " + a((t.subString || e && e.subString || u).call(e, e != null ? e.month_name : e, 3, {
                        name: "subString",
                        hash: {},
                        data: r
                    })) + '</span></td>\n  <td class="day_start edit">' + a((s = (s = t.day_start || (e != null ? e.day_start : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "day_start",
                        hash: {},
                        data: r
                    }) : s)) + '</td>\n  <td class="day_end edit">' + a((s = (s = t.day_end || (e != null ? e.day_end : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "day_end",
                        hash: {},
                        data: r
                    }) : s)) + '</td>\n  <td class="categorisation edit"><strong>' + a((s = (s = t.categorisation || (e != null ? e.categorisation : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "categorisation",
                        hash: {},
                        data: r
                    }) : s)) + '</strong></td>\n  <td class="activity edit">\n    ';
                return i = t["if"].call(e, e != null ? e.benchmark : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "\n    ", i = t["if"].call(e, e != null ? e.annualised : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "\n    ", i = t["if"].call(e, e != null ? e.prospective_cover : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "\n    ", i = t["if"].call(e, e != null ? e.additional_to_contract : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(7, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "\n    ", i = t["if"].call(e, e != null ? e.subcategorisation : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(9, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "\n    ", i = t["if"].call(e, e != null ? e.location : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(11, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "\n    ", i = t["if"].call(e, e != null ? e.description : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(13, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + '\n  </td>\n  <td class="hours edit">' + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.hours : e, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + '</td>\n  <td class="pas edit">' + a((t.toFixed || e && e.toFixed || u).call(e, e != null ? e.pas_by_day : e, 3, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + '</td>\n  <td class="edit"><a href="#">Edit</a></td>\n  <td><a data-job-content-id="' + a((s = (s = t.job_content_id || (e != null ? e.job_content_id : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "job_content_id",
                    hash: {},
                    data: r
                }) : s)) + '" class="destroy" href="#">Remove</a></td>\n</tr>'
            },
            useData: !0
        }), this.HandlebarsTemplates.overlapping_event_row
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.overlapping_events_table = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<table class='no-pdf' id='overlapping-events'>\n  <caption>Please note: Depending on how you and your trust utilise the system, clashes DO NOT necessarily mean that the job plan is incorrect. They are highlighted to help avoid accidental mistakes, and can be ignored if you are aware of the reason for the clash.</caption>\n  <thead>\n    <tr>\n      <th class='day'>&nbsp;</th>\n      <th class='start_time'>Start</th>\n      <th class='end_time'>End</th>\n      <th class='categorisation'></th>\n      <th class='activity'>Activity</th>\n      <th class='hours'>Hours</th>\n      <th class='pas'>PAs</th>\n      <th class='edit'></th>\n      <th class='destroy'></th>\n    </tr>\n  </thead>\n  <tfoot id='summary'>\n    <tr>\n      <td colspan='9'>Displaying first 10 clashes</td>\n    </tr>\n  </tfoot>\n</table>"
            },
            useData: !0
        }), this.HandlebarsTemplates.overlapping_events_table
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.sign_off = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<div class='header'>\n  <h3>Sign Off</h3>\n</div>\n<div class='main'>\n  <div class='rc job_plan_gn_sign_off'></div>\n  <table>\n    <tbody></tbody>\n  </table>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.sign_off
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.signatories = Handlebars.template({
            1: function(e, t, n, r) {
                return "<p class='right'>\n    <a class='button positive new-signatory' href='#'>Add Signatory</a>\n  </p>"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "<div class='header'>\n  <h3>Signatories</h3>\n</div>\n<div class='main'>\n  <div class='rc job_plan_gn_signators'></div>\n  <h4>" + a((s = (s = t.text_where_job_plan_owner_cannot_manage_signatories || (e != null ? e.text_where_job_plan_owner_cannot_manage_signatories : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "text_where_job_plan_owner_cannot_manage_signatories",
                        hash: {},
                        data: r
                    }) : s)) + "</h4>\n  <div id='compulsory_signator_roles'></div>\n  <div id='non_compulsory_signator_roles'></div>\n  <table class='additional-signatories'>\n    <thead>\n      <tr>\n        <th>Tier</th>\n        <th>Name</th>\n        <th>Role</th>\n        <th>Email</th>\n      </tr>\n    </thead>\n    <tbody></tbody>\n  </table>\n  ";
                return i = t["if"].call(e, e != null ? e.can_create_signatories : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + "\n  <div id='signatory-forms'></div>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.signatories
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.signatory_form = Handlebars.template({
            1: function(e, t, n, r) {
                return "<h3>Add Signatory</h3>\n"
            },
            3: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<h3>Editing Signatory: " + u((i = (i = t.first_name || (e != null ? e.first_name : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "first_name",
                    hash: {},
                    data: r
                }) : i)) + " " + u((i = (i = t.last_name || (e != null ? e.last_name : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "last_name",
                    hash: {},
                    data: r
                }) : i)) + "</h3>"
            },
            5: function(e, t, n, r) {
                var i, s = "<div id='errorExplanation'>\n  <h2>There was a problem saving this signatory to the database.</h2>\n  <p>There were problems with the following fields:</p>\n  <ul>\n";
                return i = t.each.call(e, e != null ? e.error_messages : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(6, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s + "  </ul>\n</div>"
            },
            6: function(e, t, n, r) {
                var i = this.lambda,
                    s = this.escapeExpression;
                return "    <li>" + s(i(e, e)) + "</li>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "";
                return i = t["if"].call(e, e != null ? e.is_new : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.program(3, r),
                    data: r
                }), i != null && (f += i), f += "\n", i = t["if"].call(e, e != null ? e.error_messages : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + "\n<fieldset>\n  <ol>\n    <li class='first'>\n      <label for='tier'>Tier</label>\n      <input class='tier' id='tier' type='text' value='" + a((s = (s = t.tier || (e != null ? e.tier : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "tier",
                    hash: {},
                    data: r
                }) : s)) + "' />\n    </li>\n    <li>\n      <label for='email'>Email</label>\n      <input class='email' id='email' type='text' value='" + a((s = (s = t.email || (e != null ? e.email : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "email",
                    hash: {},
                    data: r
                }) : s)) + "' />\n    </li>\n    <li>\n      <label for='first_name'>First Name</label>\n      <input class='first_name' id='first_name' type='text' value='" + a((s = (s = t.first_name || (e != null ? e.first_name : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "first_name",
                    hash: {},
                    data: r
                }) : s)) + "' />\n    </li>\n    <li>\n      <label for='last_name'>Last Name</label>\n      <input class='last_name' id='last_name' type='text' value='" + a((s = (s = t.last_name || (e != null ? e.last_name : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "last_name",
                    hash: {},
                    data: r
                }) : s)) + "' />\n    </li>\n    <li>\n      <label for='role'>Role</label>\n      <input class='role' id='role' type='text' value='" + a((s = (s = t.role || (e != null ? e.role : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "role",
                    hash: {},
                    data: r
                }) : s)) + "' />\n    </li>\n    <li class='last'>\n      <p class='right'>\n        <a class='button positive save' href='#'>Save</a>\n        <a class='button cancel' href='#'>Cancel</a>\n      </p>\n    </li>\n  </ol>\n</fieldset>"
            },
            useData: !0
        }), this.HandlebarsTemplates.signatory_form
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.signatory_from_role_form = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s = "<div id='errorExplanation'>\n  <h2>There was a problem saving this signatory to the database.</h2>\n  <p>There were problems with the following fields:</p>\n  <ul>\n";
                return i = t.each.call(e, e != null ? e.error_messages : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(2, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s + "  </ul>\n</div>"
            },
            2: function(e, t, n, r) {
                var i = this.lambda,
                    s = this.escapeExpression;
                return "    <li>" + s(i(e, e)) + "</li>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "";
                return i = t["if"].call(e, e != null ? e.error_messages : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s + "\n<p>\n  <select class='possible-signatories'></select>\n  <a class='button positive add-signatory'>Add</a>\n</p>"
            },
            useData: !0
        }), this.HandlebarsTemplates.signatory_from_role_form
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.signatory_role = Handlebars.template({
            1: function(e, t, n, r) {
                return "<div class='new-signatory-from-role no-pdf'></div>"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "<h4>" + a((s = (s = t.name || (e != null ? e.name : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "name",
                        hash: {},
                        data: r
                    }) : s)) + "</h4>\n";
                return i = t["if"].call(e, e != null ? e.can_create_signatories : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f
            },
            useData: !0
        }), this.HandlebarsTemplates.signatory_role
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.signatory_row = Handlebars.template({
            1: function(e, t, n, r) {
                return "<a class='no-pdf edit' href='#'>Edit</a>"
            },
            3: function(e, t, n, r) {
                return "<a class='no-pdf destroy' href='#'>Remove</a>"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "<td class='tier'>" + a((s = (s = t.tier || (e != null ? e.tier : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "tier",
                        hash: {},
                        data: r
                    }) : s)) + "</td>\n<td class='name'>" + a((s = (s = t.first_name || (e != null ? e.first_name : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "first_name",
                        hash: {},
                        data: r
                    }) : s)) + " " + a((s = (s = t.last_name || (e != null ? e.last_name : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "last_name",
                        hash: {},
                        data: r
                    }) : s)) + "</td>\n<td class='role'>" + a((s = (s = t.role || (e != null ? e.role : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "role",
                        hash: {},
                        data: r
                    }) : s)) + "</td>\n<td class='email'>" + a((s = (s = t.email || (e != null ? e.email : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "email",
                        hash: {},
                        data: r
                    }) : s)) + "</td>\n<td>\n  ";
                return i = t["if"].call(e, e != null ? e.can_update_signatories : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "\n</td>\n<td>\n  ", i = t["if"].call(e, e != null ? e.can_destroy_signatories : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + "\n</td>"
            },
            useData: !0
        }), this.HandlebarsTemplates.signatory_row
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.signatory_table = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<tr class='blank'>\n  <td>-</td>\n  <td>-</td>\n  <td>-</td>\n  <td>-</td>\n</tr>"
            },
            useData: !0
        }), this.HandlebarsTemplates.signatory_table
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.signature_row = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s = "";
                return i = t.unless.call(e, e != null ? e["signed?"] : e, {
                    name: "unless",
                    hash: {},
                    fn: this.program(2, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s
            },
            2: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "      <br/><strong>Signature requested " + u((i = (i = t.sent_signature_request_at_formatted || (e != null ? e.sent_signature_request_at_formatted : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "sent_signature_request_at_formatted",
                    hash: {},
                    data: r
                }) : i)) + "</strong>\n"
            },
            4: function(e, t, n, r) {
                return '    <br/>\n    <br/>\n    <a href="#" class="request-signature button">Send Reminder</a>\n'
            },
            6: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "        " + u((i = (i = t.full_name_without_symbols || (e != null ? e.full_name_without_symbols : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "full_name_without_symbols",
                    hash: {},
                    data: r
                }) : i)) + "\n"
            },
            8: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return '        <span style="text-decoration:line-through">' + u((i = (i = t.full_name_without_symbols || (e != null ? e.full_name_without_symbols : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "full_name_without_symbols",
                    hash: {},
                    data: r
                }) : i)) + "</span>\n"
            },
            10: function(e, t, n, r) {
                return '      <a href="#" class="sign button positive">Sign</a>\n'
            },
            12: function(e, t, n, r) {
                return '      <a href="#" class="revoke button negative">Revoke</a>\n'
            },
            14: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "    Signed on: " + u((i = (i = t.signed_at_formatted || (e != null ? e.signed_at_formatted : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "signed_at_formatted",
                    hash: {},
                    data: r
                }) : i)) + "\n"
            },
            16: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "    Revoked on: " + u((i = (i = t.revoked_at_formatted || (e != null ? e.revoked_at_formatted : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "revoked_at_formatted",
                    hash: {},
                    data: r
                }) : i)) + "\n"
            },
            18: function(e, t, n, r) {
                var i, s = '      <div id="errorExplanation">\n        <h2>Action is required before this job plan can be signed:</h2>\n        <ul>\n';
                return i = t.each.call(e, e != null ? e.error_messages : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(19, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s + "        </ul>\n      </div>\n"
            },
            19: function(e, t, n, r) {
                var i = this.lambda,
                    s = this.escapeExpression;
                return "            <li>" + s(i(e, e)) + "</li>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = '<td class="name">\n  <strong>' + a((s = (s = t.first_name || (e != null ? e.first_name : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "first_name",
                        hash: {},
                        data: r
                    }) : s)) + " " + a((s = (s = t.last_name || (e != null ? e.last_name : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "last_name",
                        hash: {},
                        data: r
                    }) : s)) + "</strong><br/>\n  Tier: " + a((s = (s = t.tier || (e != null ? e.tier : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "tier",
                        hash: {},
                        data: r
                    }) : s)) + "<br/>\n  " + a((s = (s = t.role || (e != null ? e.role : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "role",
                        hash: {},
                        data: r
                    }) : s)) + "\n  <br/>\n  " + a((s = (s = t.email || (e != null ? e.email : e)) != null ? s : u, typeof s === o ? s.call(e, {
                        name: "email",
                        hash: {},
                        data: r
                    }) : s)) + "\n  <br/>\n";
                return i = t["if"].call(e, e != null ? e.sent_signature_request_at_formatted : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), i = t["if"].call(e, e != null ? e["permission_to_request_signature?"] : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += '</td>\n<td class="signature">\n  <p class="signature">\n    <span class="signature-font">\n', i = t["if"].call(e, e != null ? e["signed?"] : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), i = t["if"].call(e, e != null ? e["revoked?"] : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "    </span>\n", i = t["if"].call(e, e != null ? e["permission_to_sign?"] : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(10, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), i = t["if"].call(e, e != null ? e["permission_to_revoke?"] : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(12, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += '    <span class="signature-font">&nbsp;</span>\n  </p>\n  <p>\n', i = t["if"].call(e, e != null ? e.signed_at_formatted : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(14, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "  <br/>\n", i = t["if"].call(e, e != null ? e["revoked?"] : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(16, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f += "  </p>\n", i = t["if"].call(e, e != null ? e.error_messages : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(18, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + "</td>\n\n"
            },
            useData: !0
        }), this.HandlebarsTemplates.signature_row
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.smart_form = Handlebars.template({
            1: function(e, t, n, r) {
                return "<h3>Add SMART Objective</h3>\n"
            },
            3: function(e, t, n, r) {
                return "<h3>Editing SMART Objective</h3>"
            },
            5: function(e, t, n, r) {
                var i, s = "<div id='errorExplanation'>\n  <h2>There was a problem saving this objective to the database.</h2>\n  <p>There were problems with the following fields:</p>\n  <ul>\n";
                return i = t.each.call(e, e != null ? e.error_messages : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(6, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s + "  </ul>\n</div>"
            },
            6: function(e, t, n, r) {
                var i = this.lambda,
                    s = this.escapeExpression;
                return "    <li>" + s(i(e, e)) + "</li>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "";
                return i = t["if"].call(e, e != null ? e.is_new : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.program(3, r),
                    data: r
                }), i != null && (f += i), f += "\n", i = t["if"].call(e, e != null ? e.error_messages : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + "\n<fieldset>\n  <ol>\n    <li class='first'>\n      <label for='specific'>\n        SPECIFIC\n        <br />\n        What would you like to achieve?\n      </label>\n      <textarea class='specific' id='specific' type='text' value='" + a((s = (s = t.specific || (e != null ? e.specific : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "specific",
                    hash: {},
                    data: r
                }) : s)) + "'></textarea>\n    </li>\n    <li>\n      <label for='measurable'>\n        MEASURABLE\n        <br />\n        How will you know when you've achieved it?\n      </label>\n      <textarea class='measurable' id='measurable' type='text' value='" + a((s = (s = t.measurable || (e != null ? e.measurable : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "measurable",
                    hash: {},
                    data: r
                }) : s)) + "'></textarea>\n    </li>\n    <li>\n      <label for='attainable'>\n        ATTAINABLE\n        <br />\n        Is the objective achievable and attainable?\n      </label>\n      <textarea class='attainable' id='attainable' type='text' value='" + a((s = (s = t.attainable || (e != null ? e.attainable : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "attainable",
                    hash: {},
                    data: r
                }) : s)) + "'></textarea>\n    </li>\n    <li>\n      <label for='relevant'>\n        REALISTIC\n        <br />\n        Can you realistically achieve the objective with the resources you have?\n      </label>\n      <textarea class='relevant' id='relevant' type='text' value='" + a((s = (s = t.relevant || (e != null ? e.relevant : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "relevant",
                    hash: {},
                    data: r
                }) : s)) + "'></textarea>\n    </li>\n    <li>\n      <label for='timely'>\n        TIME BOUNDED\n        <br />\n        When do you hope to achieve it by?\n      </label>\n      <textarea class='timely' id='timely' type='text' value='" + a((s = (s = t.timely || (e != null ? e.timely : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "timely",
                    hash: {},
                    data: r
                }) : s)) + "'></textarea>\n    </li>\n    <li class='last'>\n      <p class='right'>\n        <a class='button positive save' href='#'>Save</a>\n        <a class='button cancel' href='#'>Cancel</a>\n      </p>\n    </li>\n  </ol>\n</fieldset>"
            },
            useData: !0
        }), this.HandlebarsTemplates.smart_form
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.smart_row = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<td class='specific'>\n  <strong>S:</strong>\n  " + u((i = (i = t.specific || (e != null ? e.specific : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "specific",
                    hash: {},
                    data: r
                }) : i)) + "\n  <br />\n  <strong>M:</strong>\n  " + u((i = (i = t.measurable || (e != null ? e.measurable : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "measurable",
                    hash: {},
                    data: r
                }) : i)) + "\n  <br />\n  <strong>A:</strong>\n  " + u((i = (i = t.attainable || (e != null ? e.attainable : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "attainable",
                    hash: {},
                    data: r
                }) : i)) + "\n  <br />\n  <strong>R:</strong>\n  " + u((i = (i = t.relevant || (e != null ? e.relevant : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "relevant",
                    hash: {},
                    data: r
                }) : i)) + "\n  <br />\n  <strong>T:</strong>\n  " + u((i = (i = t.timely || (e != null ? e.timely : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "timely",
                    hash: {},
                    data: r
                }) : i)) + "\n</td>\n<td>\n  <a class='no-pdf edit' href='#'>Edit</a>\n</td>\n<td>\n  <a class='no-pdf destroy' href='#'>Remove</a>\n</td>"
            },
            useData: !0
        }), this.HandlebarsTemplates.smart_row
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.smart_table = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<tr class='blank'>\n  <td>-</td>\n</tr>"
            },
            useData: !0
        }), this.HandlebarsTemplates.smart_table
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.spa_note_form = Handlebars.template({
            1: function(e, t, n, r) {
                return "<h3>Add SPA Note</h3>\n"
            },
            3: function(e, t, n, r) {
                return "<h3>Editing SPA Note</h3>"
            },
            5: function(e, t, n, r) {
                var i, s = "<div id='errorExplanation'>\n  <h2>There was a problem saving this SPA Note to the database.</h2>\n  <p>There were problems with the following fields:</p>\n  <ul>\n";
                return i = t.each.call(e, e != null ? e.error_messages : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(6, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (s += i), s + "  </ul>\n</div>"
            },
            6: function(e, t, n, r) {
                var i = this.lambda,
                    s = this.escapeExpression;
                return "    <li>" + s(i(e, e)) + "</li>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s, o = "function",
                    u = t.helperMissing,
                    a = this.escapeExpression,
                    f = "";
                return i = t["if"].call(e, e != null ? e.is_new : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.program(3, r),
                    data: r
                }), i != null && (f += i), f += "\n", i = t["if"].call(e, e != null ? e.error_messages : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, r),
                    inverse: this.noop,
                    data: r
                }), i != null && (f += i), f + "\n<fieldset>\n  <ol>\n    <li class='first'>\n      <label for='description'>Notes / Detail</label>\n      <textarea class='description' id='description' type='text' value='" + a((s = (s = t.description || (e != null ? e.description : e)) != null ? s : u, typeof s ===
                    o ? s.call(e, {
                        name: "description",
                        hash: {},
                        data: r
                    }) : s)) + "'></textarea>\n    </li>\n    <li>\n      <label for='spa_number'>Number of SPAs per week</label>\n      <input class='spa_number' id='spa_number' type='text' value='" + a((s = (s = t.spa_number || (e != null ? e.spa_number : e)) != null ? s : u, typeof s === o ? s.call(e, {
                    name: "spa_number",
                    hash: {},
                    data: r
                }) : s)) + "' />\n    </li>\n    <li class='last'>\n      <p class='right'>\n        <a class='button positive save' href='#'>Save</a>\n        <a class='button cancel' href='#'>Cancel</a>\n      </p>\n    </li>\n  </ol>\n</fieldset>"
            },
            useData: !0
        }), this.HandlebarsTemplates.spa_note_form
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.spa_note_row = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<td class='description'>" + u((i = (i = t.description || (e != null ? e.description : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "description",
                    hash: {},
                    data: r
                }) : i)) + "</td>\n<td class='spa_number'>" + u((i = (i = t.spa_number || (e != null ? e.spa_number : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "spa_number",
                    hash: {},
                    data: r
                }) : i)) + "</td>\n<td>\n  <a class='no-pdf edit' href='#'>Edit</a>\n</td>\n<td>\n  <a class='no-pdf destroy' href='#'>Remove</a>\n</td>"
            },
            useData: !0
        }), this.HandlebarsTemplates.spa_note_row
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.spa_notes = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<div class='header'>\n  <h3>Agreed SPA Activity</h3>\n</div>\n<div class='main'>\n  <div class='rc job_plan_gn_spa_activity'></div>\n  <p>Your SPAs from the Timetable in Section 3:</p>\n  <table class='spas'>\n    <thead>\n      <tr>\n        <th>Repeat</th>\n        <th class='start_time'>Start</th>\n        <th class='end_time'>End</th>\n        <th>Activity / Location</th>\n        <th class='hours'>Hours</th>\n        <th class='pas'>PA</th>\n      </tr>\n    </thead>\n    <tbody></tbody>\n  </table>\n  <p>Use this section to go into more details on exactly what SPA activities are undertaken.</p>\n  <table id='spa_notes'>\n    <thead>\n      <tr>\n        <th>Notes / Detail â€“ please record activity</th>\n        <th>Number of SPAs per week</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class='blank'>\n        <td>-</td>\n        <td>-</td>\n      </tr>\n    </tbody>\n  </table>\n  <p class='right'>\n    <a class='button positive add-spa-note' href='#'>Add SPA Note</a>\n  </p>\n  <div id='spa-note-forms'></div>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.spa_notes
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.spa_table = Handlebars.template({
            1: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return '  <tr>    \n    <td class="schedule_description">' + u((i = (i = t.schedule_description || (e != null ? e.schedule_description : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "schedule_description",
                    hash: {},
                    data: r
                }) : i)) + '</td>\n    <td class="start_time">' + u((i = (i = t.start_time || (e != null ? e.start_time : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "start_time",
                    hash: {},
                    data: r
                }) : i)) + '</td>\n    <td class="end_time">' + u((i = (i = t.end_time || (e != null ? e.end_time : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "end_time",
                    hash: {},
                    data: r
                }) : i)) + '</td>\n    <td class="activity">\n      ' + u((i = (i = t.categorisation || (e != null ? e.categorisation : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "categorisation",
                    hash: {},
                    data: r
                }) : i)) + ": " + u((i = (i = t.subcategorisation || (e != null ? e.subcategorisation : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "subcategorisation",
                    hash: {},
                    data: r
                }) : i)) + "<br/>\n      " + u((i = (i = t.location || (e != null ? e.location : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "location",
                    hash: {},
                    data: r
                }) : i)) + "<br/>\n      " + u((i = (i = t.description || (e != null ? e.description : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "description",
                    hash: {},
                    data: r
                }) : i)) + '\n    </td>\n    <td class="hours">' + u((t.toFixed || e && e.toFixed || o).call(e, e != null ? e.hours : e, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + '</td>\n    <td class="pas">' + u((t.toFixed || e && e.toFixed || o).call(e, e != null ? e.pas : e, 2, {
                    name: "toFixed",
                    hash: {},
                    data: r
                })) + "</td>\n  <tr>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i;
                return i = t.each.call(e, e != null ? e.rows : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, r),
                    inverse: this.noop,
                    data: r
                }), i != null ? i : ""
            },
            useData: !0
        }), this.HandlebarsTemplates.spa_table
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.supporting_resources = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div class='header'>\n  <h3>Supporting Resources</h3>\n</div>\n<div class='main'>\n  <div class='rc job_plan_gn_supporting_resources'></div>\n  <form>\n    <fieldset>\n      <ol>\n        <li>\n          <p>\n            Facilities and resources required for delivery of duties and objectives\n          </p>\n        </li>\n        <li>\n          <label for='staffing_support' style='text-align:left;'>\n            Staffing support\n          </label>\n          <textarea class='staffing_support' id='staffing_support' name='staffing_support'>" + u((i = (i = t.staffing_support || (e != null ? e.staffing_support : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "staffing_support",
                    hash: {},
                    data: r
                }) : i)) + "</textarea>\n        </li>\n        <li>\n          <label for='accomodation' style='text-align:left;'>\n            Accommodation\n          </label>\n          <textarea class='accomodation' id='accomodation' name='accomodation'>" + u((i = (i = t.accomodation || (e != null ? e.accomodation : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "accomodation",
                    hash: {},
                    data: r
                }) : i)) + "</textarea>\n        </li>\n        <li>\n          <label for='equipment' style='text-align:left;'>\n            Equipment\n          </label>\n          <textarea class='equipment' id='equipment' name='equipment'>" + u((i = (i = t.equipment || (e != null ? e.equipment : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "equipment",
                    hash: {},
                    data: r
                }) : i)) + "</textarea>\n        </li>\n        <li>\n          <label for='any_other_resources' style='text-align:left;'>\n            Any other required resources\n          </label>\n          <textarea class='any_other_resources' id='any_other_resources' name='any_other_resources'>" + u((i = (i = t.any_other_resources || (e != null ? e.any_other_resources : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "any_other_resources",
                    hash: {},
                    data: r
                }) : i)) + "</textarea>\n        </li>\n        <li class='last'>\n          <p class='right'>\n            <a class='button positive save' href='#'>Save</a>\n            <a class='button cancel' href='#'>Cancel</a>\n          </p>\n        </li>\n      </ol>\n    </fieldset>\n  </form>\n</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.supporting_resources
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.timetable = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<div class='header'>\n  <h3>Timetable</h3>\n</div>\n<div id='new-activity'></div>\n<div id='timetable-tabs'></div>\n<div id='calendar'></div>\n<div id='breakdown'>\n  <table id='breakdown_job_contents'></table>\n</div>\n<div id='all-activities'>\n  <div id='job-content-sort-picker'></div>\n  <table id='job-contents'></table>\n</div>\n<div id='warning'></div>\n<div class='panel'>\n  <div class='rc job_plan_gn_job_content'></div>\n</div>\n<div class='panel' id='contracted-pas' style='margin-bottom: 0px;'></div>\n<div class='clear'></div>"
            },
            useData: !0
        }), this.HandlebarsTemplates.timetable
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.timetable_tabs = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<ul class='no-pdf' id='subnav'>\n  <li class='tab' id='all-activities-tab'>\n    <a>\n      <h3>Overview</h3>\n    </a>\n  </li>\n  <li class='tab' id='breakdown-tab'>\n    <a>\n      <h3>Breakdown</h3>\n    </a>\n  </li>\n  <li class='tab' id='calendar-tab'>\n    <a>\n      <h3>Weekly Calendar</h3>\n    </a>\n  </li>\n</ul>"
            },
            useData: !0
        }), this.HandlebarsTemplates.timetable_tabs
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.title_header = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                var i, s = "function",
                    o = t.helperMissing,
                    u = this.escapeExpression;
                return "<div class='page-title-with-state'>\n  " + u((i = (i = t.title || (e != null ? e.title : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "title",
                    hash: {},
                    data: r
                }) : i)) + " for\n  <span class='bold'>" + u((i = (i = t.owner_name || (e != null ? e.owner_name : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "owner_name",
                    hash: {},
                    data: r
                }) : i)) + "</span>\n</div>\n<div class='state " + u((i = (i = t.human_state_name_downcase || (e != null ? e.human_state_name_downcase : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "human_state_name_downcase",
                    hash: {},
                    data: r
                }) : i)) + "'>" + u((i = (i = t.human_state_name_upcase || (e != null ? e.human_state_name_upcase : e)) != null ? i : o, typeof i === s ? i.call(e, {
                    name: "human_state_name_upcase",
                    hash: {},
                    data: r
                }) : i)) + "</div>\n<br class='clear' />"
            },
            useData: !0
        }), this.HandlebarsTemplates.title_header
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.warning_tab = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, r) {
                return "<li class='tab' id='warning-tab'>\n  <a>\n    <h3>Clashing Activities</h3>\n  </a>\n</li>"
            },
            useData: !0
        }), this.HandlebarsTemplates.warning_tab
    }.call(this), Handlebars.registerHelper("toFixed", function(e, t) {
        return typeof e != "undefined" && e !== null ? Number(e.toFixed(t)) : Number(0..toFixed(t))
    }), Handlebars.registerHelper("subString", function(e, t) {
        return typeof e != "string" ? null : e.substring(0, t)
    }), Handlebars.registerHelper("valueAt", function(e, t) {
        return e[t]
    }), Handlebars.registerHelper("capitalize", function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }),
    function() {
        window.JPApp = {
            Router: {},
            Models: {},
            Collections: {},
            Views: {},
            Helpers: {},
            dispatcher: _.clone(Backbone.Events),
            debug: {},
            job_content_categories: [],
            LOG_EVENTS: !1,
            ON_CALL_MATRIX: {
                High: {
                    A: "8.0%",
                    B: "3.0%",
                    SAS: "6.0%"
                },
                Medium: {
                    A: "5.0%",
                    B: "2.0%",
                    SAS: "4.0%"
                },
                Low: {
                    A: "3.0%",
                    B: "1.0%",
                    SAS: "2.0%"
                }
            }
        }, JPApp.App = function() {
            function e(e) {
                this.options = e, this.options.bootstrap_data.current_user_id ? JPApp.current_user_id = this.options.bootstrap_data.current_user_id : JPApp.current_guest_user_id = this.options.bootstrap_data.current_guest_user_id, JPApp.permissions = this.options.bootstrap_data.permissions, JPApp.pdf_action = this.options.bootstrap_data.pdf_action, JPApp.current_week_number = this.options.bootstrap_data.current_week_number, JPApp.day_names = this.options.bootstrap_data.day_names, JPApp.repeats_options = this.options.bootstrap_data.repeats_options, JPApp.sections = this.options.bootstrap_data.sections, JPApp.suggested_signatories_title = this.options.bootstrap_data.suggested_signatories_title, JPApp.directorates = this.options.bootstrap_data.directorates, JPApp.job_content_categories = new JPApp.Collections.Categories(this.options.bootstrap_data.job_content_categories), JPApp.job_content_benchmarks = new JPApp.Collections.Benchmarks(this.options.bootstrap_data.job_content_benchmarks), JPApp.job_content_subcategories = new JPApp.Collections.Subcategories(this.options.bootstrap_data.job_content_subcategories), JPApp.job_content_locations = new JPApp.Collections.Locations(this.options.bootstrap_data.job_content_locations), JPApp.common_employers = new JPApp.Collections.Employers(this.options.bootstrap_data.common_employers), JPApp.has_location_dropdown = this.options.bootstrap_data.has_location_dropdown, JPApp.has_benchmarks = this.options.bootstrap_data.has_benchmarks, JPApp.has_jp_tags = this.options.bootstrap_data.has_jp_tags, JPApp.tags = new JPApp.Collections.Tags(this.options.bootstrap_data.tags), JPApp.has_overlap_check = this.options.bootstrap_data.has_overlap_check, window.job_plan = new JPApp.Models.JobPlan(this.options.bootstrap_data.job_plan), window.specialities = new JPApp.Collections.Specialities(this.options.bootstrap_data.specialities)
            }
            return e.prototype.start = function() {
                return JPApp.Helpers.disable_forms(), window.nav_rows = new JPApp.Collections.NavRows(JPApp.sections), window.nav_col_view = new JPApp.Views.NavCol({
                    collection: window.nav_rows
                }), window.activity_summary = new JPApp.Models.ActivitySummary, window.job_contents = new JPApp.Collections.JobContents, window.calendar_selector = new JPApp.Models.CalendarSelector({}), window.job_contents.fetch(), window.calendar_table_day_rows = new JPApp.Collections.CalendarTableDayRows, window.calendar_selector_view = new JPApp.Views.CalendarSelector({
                    collection: window.calendar_table_day_rows,
                    model: window.calendar_selector
                }), window.signatories = new JPApp.Collections.Signatories, window.spa_notes = new JPApp.Collections.SPANotes, window.ars_notes = new JPApp.Collections.ARSNotes, window.speciality_objectives = new JPApp.Collections.SpecialityObjectives, window.personal_objectives = new JPApp.Collections.PersonalObjectives, window.comments = new JPApp.Collections.Comments, window.activity_summary_view = new JPApp.Views.ActivitySummary({
                    el: "#left-activity-summary",
                    model: window.activity_summary
                }), window.title_header = new JPApp.Views.TitleHeader({
                    model: window.job_plan
                }), window.compulsory_signator_roles = new JPApp.Collections.SignatorRoles(window.job_plan.get("compulsory_signatories"), {
                    compulsory: !0
                }), window.non_compulsory_signator_roles = new JPApp.Collections.SignatorRoles(window.job_plan.get("non_compulsory_signatories"), {
                    compulsory: !1
                }), window.suggested_signatories_title = JPApp.suggested_signatories_title, window.edocs = new JPApp.Collections.Edocs, window.max_week_number = window.job_plan.get("max_week_number"), JPApp.has_overlap_check && (window.overlapping_events = new JPApp.Collections.OverlappingEvents), JPApp.section_views = {
                    instructions: new JPApp.Views.Instructions,
                    general_info: new JPApp.Views.GeneralInfo({
                        model: window.job_plan
                    }),
                    signatories: new JPApp.Views.Signatories({
                        model: window.job_plan
                    }),
                    timetable: new JPApp.Views.Timetable({
                        model: window.job_plan
                    }),
                    on_call_supplement: new JPApp.Views.OnCallSupplement({
                        model: window.job_plan
                    }),
                    spa_notes: new JPApp.Views.SPANotes,
                    additional_external: new JPApp.Views.AdditionalExternal,
                    other_agreements: new JPApp.Views.OtherAgreements({
                        model: window.job_plan
                    }),
                    additional_pas: new JPApp.Views.AdditionalPAs({
                        model: window.job_plan
                    }),
                    fee_paying_services: new JPApp.Views.FeePayingServices({
                        model: window.job_plan
                    }),
                    objectives: new JPApp.Views.Objectives({
                        model: window.job_plan
                    }),
                    supporting_resources: new JPApp.Views.SupportingResources({
                        model: window.job_plan
                    }),
                    general_discussion: new JPApp.Views.GeneralDiscussion({
                        model: window.job_plan
                    }),
                    meetings: new JPApp.Views.Meetings({
                        model: window.job_plan
                    }),
                    sign_off: new JPApp.Views.SignOff
                }, JPApp.Helpers.disable_section_views(), window.job_plan_status = new JPApp.Views.JobPlanStatus({
                    model: window.job_plan
                }), window.comment_list_view = new JPApp.Views.CommentListView({
                    collection: window.comments
                }), new JPApp.Router, Backbone.history.start(), JPApp.Helpers.AutosizeTextareas()
            }, e
        }()
    }.call(this),
    function() {
        JPApp.Helpers.AutosizeTextareas = function() {
            return $("textarea").autosize({
                append: "\n"
            })
        }
    }.call(this),
    function() {
        JPApp.Helpers.Capitalize = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
        }
    }.call(this),
    function() {
        Backbone.View.prototype.disable_form_elements = function(e) {
            var t, n;
            t = {
                disabled: !0
            }, n = $.extend({}, t, e || {}), this.$("input").prop("disabled", n.disabled), this.$("select").prop("disabled", n.disabled), this.$("textarea").prop("disabled", n.disabled), this.$("button").prop("disabled", n.disabled), this.$(".clickable_td").prop("disabled", n.disabled)
        }
    }.call(this),
    function() {
        JPApp.Helpers.disable_form_wrap = function(e) {
            e.render = function(e) {
                return function() {
                    var t;
                    return t = e.apply(this, arguments), this.disable_form_elements({
                        disabled: !JPApp.permissions.can_edit_job_plan
                    }), t
                }
            }(e.render)
        }
    }.call(this),
    function() {
        JPApp.Helpers.disable_forms = function() {
            return _.each(JPApp.Views, function(e) {
                JPApp.Helpers.disable_form_wrap(e.prototype)
            }, this)
        }
    }.call(this),
    function() {
        JPApp.Helpers.disable_section_views = function() {
            return _.each(JPApp.section_views, function(e) {
                e.disable_form_elements({
                    disabled: !JPApp.permissions.can_edit_job_plan
                })
            }, this)
        }
    }.call(this),
    function() {
        JPApp.dispatcher.on("all", function(e, t) {
            JPApp.LOG_EVENTS && console.log(e, t.cid)
        })
    }.call(this),
    function() {
        JPApp.Helpers.PublishEvents = function(e, t, n) {
            JPApp.dispatcher.trigger(e + ":" + t + ":new", n), n.on("all", function(r) {
                JPApp.dispatcher.trigger(e + ":" + t + ":" + r, n)
            })
        }
    }.call(this),
    function() {
        JPApp.Helpers.ZombieTracker = function() {
            _.each(JPApp.Views, function(e) {
                e.prototype.initialize = function(e) {
                    return function() {
                        return (JPApp.views = JPApp.views || []).push(this), e.apply(this, arguments)
                    }
                }(e.prototype.initialize)
            }, this), _.each(JPApp.Models, function(e) {
                e.prototype.initialize = function(e) {
                    return function() {
                        return (JPApp.models = JPApp.models || []).push(this), e.apply(this, arguments)
                    }
                }(e.prototype.initialize)
            }, this), _.each(JPApp.Collections, function(e) {
                e.prototype.initialize = function(e) {
                    return function() {
                        return (JPApp.collections = JPApp.models || []).push(this), e.apply(this, arguments)
                    }
                }(e.prototype.initialize)
            }, this)
        }
    }.call(this),
    function() {
        JPApp.Router = Backbone.Router.extend({
            initialize: function() {
                JPApp.Helpers.PublishEvents("router", "jpapp", this)
            },
            routes: {
                "": "sectionController",
                "section/:id": "sectionController"
            },
            sectionController: function(e) {
                JPApp.pdf_action ? _.each(JPApp.section_views, function(e) {
                    $("#section-view").append(e.$el)
                }, this) : ($("#nav-col .active").removeClass("active"), window.nav_rows.get(e || "instructions").nav_view.$el.addClass("active"), $("#section-view .section").detach(), $("#section-view").append(JPApp.section_views[e || "instructions"].$el), e === "timetable" && ($("#timetable-tabs .active").removeClass("active"), $("#all-activities-tab").addClass("active"), $("#breakdown").hide(), $("#calendar").hide(), $("#warning").hide(), $("#all-activities").show()))
            }
        })
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.ActivitySummary = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "activity_summary", this), this.listenTo(JPApp.dispatcher, "collection:job_contents:sync collection:job_contents:remove", this.fetch)
            }, n.prototype.urlRoot = function() {
                return window.job_plan.url() + "/activity_summary"
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.ARSNote = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "_id", n.prototype.paramRoot = "additional_responsibility", n.prototype.urlRoot = function() {
                return window.job_plan.url() + "/additional_responsibilities"
            }, n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "ars_note", this), this.on("request", function() {
                    $.blockUI({
                        message: "Saving AR Note..."
                    })
                }, this), this.on("sync", function() {
                    $.blockUI({
                        message: "Saved."
                    }), setTimeout($.unblockUI, 1e3)
                }, this), this.on("error", function(e, t, n) {
                    $.blockUI({
                        message: "Error saving AR Note"
                    }), setTimeout($.unblockUI, 1e3), this.set("error_messages", $.parseJSON(t.responseText).error_messages), this.set("errors", $.parseJSON(t.responseText).errors)
                }, this), this.computedFields = new Backbone.ComputedFields(this)
            }, n.prototype.defaults = {
                is_new: !0
            }, n.prototype.computed = {
                is_new: {
                    depends: ["_id"],
                    get: function() {
                        return this.isNew()
                    }
                }
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.CalendarSelector = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.CalendarTableDayRow = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "calendar_table_day_row", this)
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.Comment = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "id", n.prototype.paramRoot = "embedded_comment", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "comment", this), this.on("request", function() {
                    $.blockUI({
                        message: "Saving comment..."
                    })
                }, this), this.on("sync", function() {
                    $.blockUI({
                        message: "Comment saved."
                    }), setTimeout($.unblockUI, 1e3)
                }, this), this.on("error", function(e, t, n) {
                    $.blockUI({
                        message: "Error saving comment"
                    }), setTimeout($.unblockUI, 1e3), this.set("error_messages", $.parseJSON(t.responseText).error_messages), this.set("errors", $.parseJSON(t.responseText).errors)
                }, this)
            }, n.prototype.defaults = function() {
                return JPApp.current_user_id ? {
                    user_commenter_id: JPApp.current_user_id
                } : {
                    guest_user_commenter_id: JPApp.current_guest_user_id
                }
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.Edoc = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "id", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "edoc", this), this.on("deleting", function(e) {
                    $.blockUI({
                        message: "Removing Edoc..."
                    }), this.destroy({
                        success: function(e, t, n) {
                            e.trigger("deleted", this), setTimeout($.unblockUI, 300)
                        },
                        error: function(e, t, n) {
                            e.trigger("error_deleting", this), setTimeout($.unblockUI, 300), alert("There was a problem removing the edoc")
                        }
                    })
                }, this), this.on("deleted", function(e) {
                    window.edocs.fetch()
                }, this)
            }, n.prototype.addAttachment = function(e, t) {
                window.edocs.create(t)
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.JobContent = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "id", n.prototype.paramRoot = "job_content", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "job_content", this), this.on("error", function(e, t, n) {
                    this.set("error_messages", $.parseJSON(t.responseText).error_messages), this.set("errors", $.parseJSON(t.responseText).errors), $.blockUI({
                        message: "<h3>Error saving activity:</h3>" + pretty_error_messages(this.get("error_messages"))
                    }), setTimeout($.unblockUI, 3e3)
                }, this), this.on("saving", function(e) {
                    $.blockUI({
                        message: "Saving Activity..."
                    }), this.save(null, {
                        success: function(e, t, n) {
                            e.trigger("saved", this), $.unblockUI()
                        }
                    })
                }, this), this.on("deleting", function(e) {
                    $.blockUI({
                        message: "Deleting Activity..."
                    }), this.destroy({
                        success: function(e, t, n) {
                            e.trigger("deleted", this), setTimeout($.unblockUI, 300)
                        }
                    })
                }, this), this.listenTo(this, this.scheduleChanges(), function(e) {
                    return this.set("dirty_schedule", !0)
                }, this), this.computedFields = new Backbone.ComputedFields(this), this.set("has_benchmarks", JPApp.has_benchmarks)
            }, n.prototype.recalculate = function() {
                return $.blockUI({
                    message: "Saving Activity..."
                }), this.save(null, {
                    success: function(e, t, n) {
                        return e.set("dirty_schedule", !1), $.unblockUI()
                    }
                })
            }, n.prototype.defaults = function() {
                return {
                    employer: window.job_plan.get("default_employer"),
                    location: window.job_plan.get("default_location"),
                    start_time: "08:00",
                    end_time: "12:00",
                    repeats: "weekly",
                    repeats_weekly_each_days_of_the_week: ["Monday"],
                    repeats_monthly_on_days_of_the_week: ["monday"],
                    repeats_monthly_each_days_of_the_month: [1],
                    repeats_monthly_on_ordinals: [1],
                    repeats_every_n_days: 1,
                    repeats_every_n_weeks: 1,
                    repeats_every_n_months: 1,
                    repeats_every_n_years: 1,
                    repeats_monthly: "on",
                    repeats_rota: [1],
                    categorisation: "DCC",
                    days: [],
                    is_new: !1,
                    on_call: !1,
                    annualised: !1,
                    prospective_cover: !1,
                    additional_programmed_activity: !1,
                    additional_to_contract: !1,
                    scheduled: !0,
                    is_pdf: JPApp.pdf_action,
                    number_per_year: 52,
                    dirty_schedule: !1,
                    breakdown_total_title: "Non-Premium Time",
                    hours_per_occurrence: 4,
                    pas_per_occurrence: 1,
                    occurrences_per_week: 1,
                    hours_per_week: 4,
                    pas_per_week: 1,
                    worked_occurrences_per_year: 42,
                    worked_hours_per_year: 168,
                    occurrences_per_year: 52,
                    hours_per_year: 208
                }
            }, n.prototype.scheduleChanges = function() {
                return ["change:scheduled", "change:prospective_cover", "change:annualised", "change:number_per_year", "change:start_time", "change:end_time", "change:repeats", "change:repeats_weekly_each_days_of_the_week", "change:repeats_every_n_days", "change:repeats_every_n_weeks", "change:repeats_every_n_months", "change:repeats_every_n_years", "change:repeats_monthly_on_days_of_the_week", "change:repeats_monthly_each_days_of_the_month", "change:repeats_monthly_on_ordinals", "change:repeats_monthly", "change:repeats_rota", "change:days", "change:from_date", "change:until_date"].join(" ")
            }, n.prototype.computed = {
                is_new: {
                    depends: ["id"],
                    get: function() {
                        return this.isNew()
                    }
                },
                advanced_when: {
                    get: function() {
                        return this.get("from_date") || this.get("until_date") || this.get("override_calculations")
                    }
                },
                hours_per_pa: {
                    depends: ["hours", "pas"],
                    get: function() {
                        return this.get("hours") / this.get("pas")
                    }
                }
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.JobPlan = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "_id", n.prototype.paramRoot = "online_job_plan", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "job_plan", this), this.on("request", function() {
                    $.blockUI({
                        message: "Saving Job Plan..."
                    })
                }, this), this.on("sync", function() {
                    this.unset("error_messages"), this.unset("errors"), $.blockUI({
                        message: "Saved Job Plan."
                    }), setTimeout($.unblockUI, 1e3)
                }, this), this.on("error", function(e, t, n) {
                    this.set("error_messages", $.parseJSON(t.responseText).error_messages), this.set("errors", $.parseJSON(t.responseText).errors), $.blockUI({
                        message: "<h3>Error saving job plan</h3>" + pretty_error_messages(this.get("error_messages"))
                    }), setTimeout($.unblockUI, 1e3)
                }, this), this.listenTo(JPApp.dispatcher, "model:job_content:saved model:job_content:deleted ", this.fetch), this.listenTo(JPApp.dispatcher, "collection:job_plan_events:sync", this.fetch), this.listenTo(JPApp.dispatcher, "collection:signature_events:sync", this.fetch), this.on("change:on_call_category change:ocas_freq", function() {
                    var e, t;
                    this.get("ocas_freq") && (t = this.get("ocas_freq").split(" ")[0], e = this.get("on_call_category"), this.set("on_call_supplement", JPApp.ON_CALL_MATRIX[t][e]))
                }, this), this.job_plan_events = new JPApp.Collections.JobPlanEvents([], {
                    job_plan: this
                })
            }, n.prototype.url = function() {
                return "/online_job_plans/" + this.id
            }, n.prototype.defaults = {
                can_edit: !0,
                sort_method: "chronological_order"
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.JobPlanEvent = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "_id", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "job_plan_event", this), this.on("error", function(e, t, n) {
                    this.set("error_messages", $.parseJSON(t.responseText).error_messages), this.set("errors", $.parseJSON(t.responseText).errors), $.blockUI({
                        message: "<h3>Error changing job plan state:</h3>" + pretty_error_messages(this.get("error_messages"))
                    }), setTimeout($.unblockUI, 3e3)
                }, this), this.on("sending_for_sign_off", function() {
                    $.blockUI({
                        message: "Sending for sign off..."
                    }), this.save(null, {
                        success: function(e, t, n) {
                            e.trigger("sent_ready_for_sign_off", this)
                        }
                    })
                }, this), this.on("sent_ready_for_sign_off", function(e, t, n) {
                    $.blockUI({
                        message: "Sent for sign off."
                    }), setTimeout($.unblockUI, 1e3)
                }, this), this.on("reverting_to_draft", function() {
                    $.blockUI({
                        message: "Reverting to draft..."
                    }), this.save(null, {
                        success: function(e, t, n) {
                            e.trigger("reverted_to_draft", this)
                        }
                    })
                }, this), this.on("reverted_to_draft", function(e, t, n) {
                    $.blockUI({
                        message: "Reverted to draft."
                    }), setTimeout($.unblockUI, 1e3)
                }, this), this.on("rejecting_job_plan", function() {
                    $.blockUI({
                        message: "Rejecting job plan..."
                    }), this.save(null, {
                        success: function(e, t, n) {
                            e.trigger("rejected_job_plan", this)
                        }
                    })
                }, this), this.on("rejected_job_plan", function(e, t, n) {
                    $.blockUI({
                        message: "Rejected job plan."
                    }), setTimeout($.unblockUI, 1e3)
                }, this)
            }, n.prototype.urlRoot = function() {
                return this.collection.job_plan.url() + "/" + this.get("event_name")
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.NavRow = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.nav_view = {}, n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "nav_row", this), this.nav_view = new JPApp.Views.NavRow({
                    id: "#nav-" + this.get("id"),
                    model: this
                })
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.OverlappingEvent = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.PersonalObjective = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "_id", n.prototype.paramRoot = "personal_objective", n.prototype.urlRoot = function() {
                return window.job_plan.url() + "/personal_objectives"
            }, n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "personal_objective", this), this.on("request", function() {
                    $.blockUI({
                        message: "Saving personal objective..."
                    })
                }, this), this.on("sync", function() {
                    $.blockUI({
                        message: "Saved."
                    }), setTimeout($.unblockUI, 1e3)
                }, this), this.on("error", function(e, t, n) {
                    $.blockUI({
                        message: "Error saving personal objective"
                    }), setTimeout($.unblockUI, 1e3), this.set("error_messages", $.parseJSON(t.responseText).error_messages), this.set("errors", $.parseJSON(t.responseText).errors)
                }, this), this.computedFields = new Backbone.ComputedFields(this)
            }, n.prototype.defaults = {
                is_new: !0
            }, n.prototype.computed = {
                is_new: {
                    depends: ["_id"],
                    get: function() {
                        return this.isNew()
                    }
                }
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.SignatorRole = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "_id", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "signator_role", this), this.possible_signatories = new JPApp.Collections.PossibleSignatories(this.get("possible_signatories")), this.updateSignatories(), this.listenTo(JPApp.dispatcher, "collection:signatories:sync", this.updateSignatories)
            }, n.prototype.updateSignatories = function() {
                this.signatories = window.signatories.byRole(this.get("name"))
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.Signatory = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "_id", n.prototype.paramRoot = "job_plan_signatory", n.prototype.urlRoot = function() {
                    return window.job_plan.url() + "/job_plan_signatories"
                }, n.prototype
                .initialize = function() {
                    JPApp.Helpers.PublishEvents("model", "signatory", this), this.on("request", function() {
                        $.blockUI({
                            message: "Saving signatory..."
                        })
                    }, this), this.on("sync", function() {
                        $.blockUI({
                            message: "Saved."
                        }), setTimeout($.unblockUI, 1e3)
                    }, this), this.on("error", function(e, t, n) {
                        this.set("error_messages", $.parseJSON(t.responseText).error_messages), this.set("errors", $.parseJSON(t.responseText).errors), $.blockUI({
                            message: "Error saving signatory"
                        }), setTimeout($.unblockUI, 1e3)
                    }, this), this.signature_events = new JPApp.Collections.SignatureEvents([], {
                        signature: this
                    }), this.computedFields = new Backbone.ComputedFields(this)
                }, n.prototype.defaults = {
                    is_new: !0,
                    signed_off: !1
                }, n.prototype.computed = {
                    is_new: {
                        depends: ["_id"],
                        get: function() {
                            return this.isNew()
                        }
                    }
                }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.SignatureEvent = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "_id", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "signature_event", this), this.on("error", function(e, t, n) {
                    this.set("error_messages", $.parseJSON(t.responseText).error_messages), this.set("errors", $.parseJSON(t.responseText).errors), $.blockUI({
                        message: "<h3>Error signing</h3>" + pretty_error_messages(this.get("error_messages"))
                    }), setTimeout($.unblockUI, 5e3)
                }, this), this.on("signing", function(e) {
                    $.blockUI({
                        message: "Signing..."
                    }), this.save(null, {
                        success: function(e, t, n) {
                            e.trigger("signed", this)
                        }
                    })
                }, this), this.on("signed", function(e, t, n) {
                    $.blockUI({
                        message: "Signed."
                    }), setTimeout($.unblockUI, 1e3)
                }, this), this.on("revoking", function(e) {
                    $.blockUI({
                        message: "Revoking signature..."
                    }), this.save(null, {
                        success: function(e, t, n) {
                            e.trigger("revoked", this)
                        }
                    })
                }, this), this.on("revoked", function(e, t, n) {
                    $.blockUI({
                        message: "Signature revoked."
                    }), setTimeout($.unblockUI, 1e3)
                }, this), this.on("requesting_signature", function(e) {
                    $.blockUI({
                        message: "Sending reminder..."
                    }), this.save(null, {
                        success: function(e, t, n) {
                            e.trigger("requested_signature", this)
                        }
                    })
                }, this), this.on("requested_signature", function(e, t, n) {
                    $.blockUI({
                        message: "Signature requested."
                    }), setTimeout($.unblockUI, 1e3)
                }, this)
            }, n.prototype.urlRoot = function() {
                return this.collection.signature.url() + "/" + this.get("event_name")
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.SPANote = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "_id", n.prototype.paramRoot = "spa_activity", n.prototype.urlRoot = function() {
                return window.job_plan.url() + "/spa_activities"
            }, n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "spa_note", this), this.on("request", function() {
                    $.blockUI({
                        message: "Saving SPA Note..."
                    })
                }, this), this.on("sync", function() {
                    $.blockUI({
                        message: "Saved."
                    }), setTimeout($.unblockUI, 1e3)
                }, this), this.on("error", function(e, t, n) {
                    $.blockUI({
                        message: "Error saving SPA Note"
                    }), setTimeout($.unblockUI, 1e3), this.set("error_messages", $.parseJSON(t.responseText).error_messages), this.set("errors", $.parseJSON(t.responseText).errors)
                }, this), this.computedFields = new Backbone.ComputedFields(this)
            }, n.prototype.defaults = {
                is_new: !0
            }, n.prototype.computed = {
                is_new: {
                    depends: ["_id"],
                    get: function() {
                        return this.isNew()
                    }
                }
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.Speciality = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "_id", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "speciality", this)
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Models.SpecialityObjective = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "_id", n.prototype.paramRoot = "specialtiy_objective", n.prototype.urlRoot = function() {
                return window.job_plan.url() + "/speciality_objectives"
            }, n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("model", "speciality_objective", this), this.on("request", function() {
                    $.blockUI({
                        message: "Saving specialty objective..."
                    })
                }, this), this.on("sync", function() {
                    $.blockUI({
                        message: "Saved."
                    }), setTimeout($.unblockUI, 1e3)
                }, this), this.on("error", function(e, t, n) {
                    $.blockUI({
                        message: "Error saving specialty objective"
                    }), setTimeout($.unblockUI, 1e3), this.set("error_messages", $.parseJSON(t.responseText).error_messages), this.set("errors", $.parseJSON(t.responseText).errors)
                }, this), this.computedFields = new Backbone.ComputedFields(this)
            }, n.prototype.defaults = {
                is_new: !0
            }, n.prototype.computed = {
                is_new: {
                    depends: ["_id"],
                    get: function() {
                        return this.isNew()
                    }
                }
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        JPApp.Models.Tag = Backbone.Model.extend({})
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.ARSNotes = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "ars_notes", this)
            }, n.prototype.model = JPApp.Models.ARSNote, n.prototype.url = function() {
                return window.job_plan.url() + "/additional_responsibilities"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.Benchmarks = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "benchmarks", this)
            }, n.prototype.byCategory = function(e) {
                var t;
                return t = this.filter(function(t) {
                    return t.get("parent_category") === e
                }), t
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.CalendarTableDayRows = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.model = JPApp.Models.CalendarTableDayRow, n.prototype.initialize = function(e, t) {
                JPApp.Helpers.PublishEvents("collection", "calendar_table_day_rows", this), this.listenTo(window.job_contents, "remove sync", this.fetch)
            }, n.prototype.grouped_by_day_name = function() {
                return _.groupBy(this.toJSON(), function(e) {
                    return e.day_name
                })
            }, n.prototype.grouped_by_week_number = function() {
                return this.groupBy(function(e) {
                    return e.get("week_number")
                })
            }, n.prototype.url = function() {
                return window.job_plan.url() + "/calendar"
            }, n.prototype.set_week_label = function(e) {
                e.set("week_start", this.date_of_weekday(e.get("week_number"), 0)), e.set("week_end", this.date_of_weekday(e.get("week_number"), 6))
            }, n.prototype.date_of_weekday = function(e, t) {
                var n;
                return n = this.grouped_by_week_number()[e][t].attributes, n.mday + " " + n.month_name
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.Categories = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "categories", this)
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.Comments = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "comments", this), this.on("created", function() {
                    window.new_comment_form = new JPApp.Views.CommentFormView({
                        model: new JPApp.Models.Comment,
                        collection: window.comments
                    })
                }, this), this.on("error", function(e, t, n) {
                    $.blockUI({
                        message: "<h3>Error fetching comments</h3><p>Code:" + t.status + "</p>" + "<p>" + t.statusText + "</p>"
                    }), setTimeout($.unblockUI, 5e3)
                }, this)
            }, n.prototype.model = JPApp.Models.Comment, n.prototype.url = function() {
                return window.job_plan.url() + "/job_plan_comments"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.Edocs = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.model = JPApp.Models.Edoc, n.prototype.initialize = function(e, t) {
                JPApp.Helpers.PublishEvents("collection", "edocs", this)
            }, n.prototype.url = function() {
                return window.job_plan.url() + "/edocs"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.Employers = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "employers", this)
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.JobContents = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.model = JPApp.Models.JobContent, n.prototype.paramRoot = "job_contents", n.prototype.comparator = function(e) {
                return e.get(window.job_plan.get("sort_method"))
            }, n.prototype.initialize = function(e, t) {
                this.listenTo(window.job_plan, "change:sort_method", this.sort), JPApp.Helpers.PublishEvents("collection", "job_contents", this), this.on("sync", function() {
                    this.editing = !1, this.changed = !1
                }, this)
            }, n.prototype.url = function() {
                return window.job_plan.url() + "/job_contents"
            }, n.prototype.order_updated = function() {
                this.sort(), this.save()
            }, n.prototype.save = function() {
                Backbone.sync("update", this, {})
            }, n.prototype.byCategory = function(e) {
                var t;
                return t = this.filter(function(t) {
                    return t.get("categorisation") === e
                }), t
            }, n.prototype.byNotNew = function() {
                var e;
                return e = this.filter(function(e) {
                    return e.get("is_new") !== !0
                }), e
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.JobPlanEvents = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e, t) {
                JPApp.Helpers.PublishEvents("collection", "job_plan_events", this), this.job_plan = t.job_plan
            }, n.prototype.model = JPApp.Models.JobPlanEvent, n.prototype.url = function() {
                return this.job_plan.url() + "/online_job_plan_events"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.Locations = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "locations", this)
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.NavRows = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.model = JPApp.Models.NavRow, n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "nav_rows", this)
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.OverlappingEvents = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.model = JPApp.Models.OverlappingEvent, n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "overlapping_events", this), this.listenTo(window.job_contents, "remove sync", this.fetch)
            }, n.prototype.url = function() {
                return window.job_plan.url() + "/overlapping_events"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.PersonalObjectives = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "personal_objectives", this)
            }, n.prototype.model = JPApp.Models.PersonalObjective, n.prototype.url = function() {
                return window.job_plan.url() + "/personal_objectives"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.PossibleSignatories = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.SignatorRoles = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e, t) {
                JPApp.Helpers.PublishEvents("collection", "signator_roles", this), this.compulsory = t.compulsory
            }, n.prototype.model = JPApp.Models.SignatorRole, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.Signatories = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.comparator = "tier", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "signatories", this), this.on("error", function(e, t, n) {
                    $.blockUI({
                        message: "<h3>Error fetching signatories:</h3>" + pretty_error_messages(this.get("error_messages"))
                    }), setTimeout($.unblockUI, 5e3)
                }, this), this.listenTo(JPApp.dispatcher, "model:job_plan_event:sync model:signature_event:sync model:signatory:sync", this.fetch)
            }, n.prototype.model = JPApp.Models.Signatory, n.prototype.byRole = function(e) {
                return _(this.filter(function(t) {
                    return t.get("role") === e
                }))
            }, n.prototype.url = function() {
                return window.job_plan.url() + "/job_plan_signatories"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.SignatureEvents = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e, t) {
                JPApp.Helpers.PublishEvents("collection", "signature_events", this), this.signature = t.signature
            }, n.prototype.model = JPApp.Models.SignatureEvent, n.prototype.url = function() {
                return this.signature.url() + "/signature_events"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.SPANotes = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "spa_notes", this)
            }, n.prototype.model = JPApp.Models.SPANote, n.prototype.url = function() {
                return window.job_plan.url() + "/spa_activities"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.Specialities = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "specialities", this)
            }, n.prototype.model = JPApp.Models.Speciality, n.prototype.url = function() {
                return "/specialities"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.SpecialityObjectives = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "speciality_objectives", this)
            }, n.prototype.model = JPApp.Models.SpecialityObjective, n.prototype.url = function() {
                return window.job_plan.url() + "/speciality_objectives"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.Subcategories = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "subcategories", this)
            }, n.prototype.byCategory = function(e) {
                var t;
                return t = this.filter(function(t) {
                    return t.get("parent_category") === e
                }), t
            }, n.prototype.byCategoryBenchmark = function(e, t) {
                var n;
                return n = this.filter(function(n) {
                    return n.get("parent_category") === e && n.get("benchmark") === t
                }), n
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Collections.Tags = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.model = JPApp.Models.Tag, n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("collection", "tags", this)
            }, n.prototype.url = function() {
                return "/job_plan_tags"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.ActivitySummary = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                this.listenTo(JPApp.dispatcher, "model:activity_summary:sync", function() {
                    this.render(), this.$el.effect("highlight", 3e3)
                }, this), this.render()
            }, n.prototype.className = "activity_summary", n.prototype.template = HandlebarsTemplates.activity_summary, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.APAActivitiesTable = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "apa_activities_table", this), this.listenTo(JPApp.dispatcher, "collection:job_contents:sync collection:job_contents:destroy", this.render), this.row_views = []
            }, n.prototype.template = HandlebarsTemplates.job_content_table, n.prototype.render = function() {
                var e;
                return _.each(this.row_views, function(e) {
                    e.remove()
                }, this), this.row_views = [], e = this.collection.filter(function(e) {
                    return e.get("activity_type") === "APA"
                }), _.each(e, function(e) {
                    var t;
                    t = new JPApp.Views.JobContentRow({
                        model: e
                    }), this.row_views.push(t)
                }, this), this.$el.html(this.template()), _.isEmpty(e) || this.$("tbody").empty(), _.each(this.row_views, function(e) {
                    this.$("tbody").append(e.render().$el)
                }, this), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.ARSNoteFormView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.className = "ars-note", n.prototype.tagName = "form", n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "ars_note_form", this), this.model = this.model || new JPApp.Models.ARSNote, this.listenTo(this.model, "sync", this.remove), this.listenTo(this.model, "error", this.render), this.render()
            }, n.prototype.bindings = {
                "textarea.responsibility": "responsibility",
                "input.time_invloved": "time_invloved",
                "textarea.when_work_scheduled": "when_work_scheduled",
                "textarea.how_nhs_reimbursed": "how_nhs_reimbursed"
            }, n.prototype.template = HandlebarsTemplates.ars_note_form, n.prototype.events = {
                "click .button.save": function() {
                    return window.ars_notes.create(this.model), !1
                },
                "click .button.cancel": function() {
                    return this.remove(), !1
                }
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.model.unset("error_messages"), this.model.unset("errors"), this.stickit(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.ARSNoteRowView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.tagName = "tr", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "ars_note_row", this), this.listenTo(this.model, "destroy", this.remove)
            }, n.prototype.events = {
                "click .destroy": "destroy",
                "click .edit": "edit"
            }, n.prototype.template = HandlebarsTemplates.ars_note_row, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this
            }, n.prototype.edit = function(e) {
                e.preventDefault(), this.model.trigger("edit", this.model)
            }, n.prototype.destroy = function(e) {
                e.preventDefault(), confirm("Are you sure you want to remove this AR note?") && this.model.destroy()
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.ARSNotesTableBodyView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "ars_notes_table_body", this), this.collection.fetch(), this.listenTo(JPApp.dispatcher, "collection:ars_notes:sync", this.render)
            }, n.prototype.render = function() {
                return this.collection.each(function(e) {
                    this.$("tr.blank").remove(), e.row_view = e.row_view || new JPApp.Views.ARSNoteRowView({
                        model: e
                    }), this.$el.append(e.row_view.render().$el)
                }, this), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.ARSTableBodyView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "ars_table", this), this.listenTo(JPApp.dispatcher, "collection:job_contents:sync", this.render)
            }, n.prototype.template = HandlebarsTemplates.ars_table, n.prototype.render = function() {
                var e;
                return e = {
                    rows: _.map(this.collection.byCategory("AR").concat(this.collection.byCategory("ED")), function(e) {
                        return e.toJSON()
                    })
                }, this.$el.html(this.template(e)), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.ATCActivitiesTable = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "atc_activities_table", this), this.listenTo(JPApp.dispatcher, "collection:job_contents:sync collection:job_contents:destroy", this.render), this.row_views = []
            }, n.prototype.template = HandlebarsTemplates.job_content_table, n.prototype.render = function() {
                var e;
                return _.each(this.row_views, function(e) {
                    e.remove()
                }, this), this.row_views = [], e = this.collection.filter(function(e) {
                    return e.get("activity_type") === "ATC"
                }), _.each(e, function(e) {
                    var t;
                    t = new JPApp.Views.JobContentRow({
                        model: e
                    }), this.row_views.push(t)
                }, this), this.$el.html(this.template()), _.isEmpty(e) || this.$("tbody").empty(), _.each(this.row_views, function(e) {
                    this.$("tbody").append(e.render().$el)
                }, this), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.BreakdownFooterRow = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                this.categorisation = e.categorisation, this.model = window.activity_summary
            }, n.prototype.getCategory = function(e) {
                var t;
                if (e && e[0]) return t = this, _.filter(e[0], function(e) {
                    return e.name === t.categorisation
                })[0]
            }, n.prototype.bindings = {
                "#hours": {
                    observe: ["categories"],
                    onGet: function(e) {
                        if (this.getCategory(e)) return Number(this.getCategory(e).hours.toFixed(2))
                    }
                },
                "#pas": {
                    observe: ["categories"],
                    onGet: function(e) {
                        if (this.getCategory(e)) return Number(this.getCategory(e).pas.toFixed(3))
                    }
                },
                "#hours_per_pa": {
                    observe: ["categories"],
                    onGet: function(e) {
                        if (this.getCategory(e)) return Number((this.getCategory(e).hours / this.getCategory(e).pas).toFixed(3))
                    }
                }
            }, n.prototype.className = "job-content-row", n.prototype.tagName = "tr", n.prototype.template = HandlebarsTemplates.breakdown_footer_row, n.prototype.render = function() {
                return this.$el.html(this.template()), this.stickit(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.BreakdownHeaderRow = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                this.category = e
            }, n.prototype.className = "job-content-row", n.prototype.tagName = "tr", n.prototype.template = HandlebarsTemplates.breakdown_header_row, n.prototype.render = function() {
                return this.$el.html(this.template(this.category)), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.BreakdownJobContentRow = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "job_content_row", this)
            }, n.prototype.className = "job-content-row", n.prototype.tagName = "tr", n.prototype.template = HandlebarsTemplates.breakdown_job_content_row, n.prototype.events = {
                "click .edit": function() {
                    return this.model.trigger("edit"), !1
                },
                "click .destroy": "destroy"
            }, n.prototype.destroy = function(e) {
                e.preventDefault(), confirm("Are you sure you want to remove this activity?") && this.model.trigger("deleting")
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.delegateEvents(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.BreakdownJobContentTable = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "job_content_table", this), this.listenTo(JPApp.dispatcher, "collection:job_contents:sync collection:job_contents:destroy", this.render), this.row_views = []
            }, n.prototype.template = HandlebarsTemplates.breakdown_job_content_table, n.prototype.render = function() {
                return _.each(this.row_views, function(e) {
                    e.remove()
                }, this), this.row_views = [], _.each(this.collection.groupBy("categorisation"), function(e, t, n) {
                    var r;
                    r = new JPApp.Views.BreakdownHeaderRow({
                        categorisation: t
                    }), this.row_views.push(r), _.each(e, function(e) {
                        r = new JPApp.Views.BreakdownJobContentRow({
                            model: e
                        }), this.row_views.push(r)
                    }, this), r = new JPApp.Views.BreakdownFooterRow({
                        categorisation: t
                    }), this.row_views.push(r)
                }, this), this.$el.html(this.template()), this.$("tbody").empty(), _.each(this.row_views, function(e) {
                    this.$("tbody").append(e.render().$el)
                }, this), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.CalendarSelector = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "calendar_selector", this)
            }, n.prototype.bindings = {
                ".week-start": "week_start",
                ".week-end": "week_end"
            }, n.prototype.events = {
                "click td.dot.day": function(e) {
                    var t;
                    return t = $(getTarget(e)).attr("data-week-number"), this.set_week(t), !1
                },
                "click .last_week": "set_last_week",
                "click .next_week": "set_next_week"
            }, n.prototype.leading_zero = function(e) {
                return e > 9 ? "" + e : "0" + e
            }, n.prototype.template = HandlebarsTemplates.calendar_selector, n.prototype.set_week = function(e) {
                this.model.set("week_number", e), this.$("td").removeClass("week-selected"), this.$('[data-week-number="' + e + '"]').addClass("week-selected"), this.collection.set_week_label(this.model)
            }, n.prototype.set_last_week = function() {
                var e;
                e = Number(this.model.get("week_number")) - 1, e > 0 ? this.set_week(this.leading_zero(e)) : this.set_week(window.max_week_number)
            }, n.prototype.set_next_week = function() {
                var e;
                e = Number(this.model.get("week_number")) + 1, e > window.max_week_number ? this.set_week("01") : this.set_week(this.leading_zero(e))
            }, n.prototype.render = function() {
                var e;
                return e = this.template({
                    days: this.collection.grouped_by_day_name(),
                    selected: this.model.toJSON()
                }), this.$el.html(e), JPApp.pdf_action || this.$('[data-week-number="' + this.model.get("week_number") + '"]').addClass("week-selected"), this.stickit(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.CalendarTable = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "calendar_table", this), this.child_views = [], this.listenTo(this.collection, "sync", this.render_day_rows), this.listenTo(this.collection, "sync", this.render_calendar_selector), this.listenTo(this.collection, "sync", this.set_week_label), this.listenTo(this.model, "change", this.render_day_rows), this.model.set("week_number", JPApp.current_week_number), this.render()
            }, n.prototype.template = HandlebarsTemplates.calendar_table, n.prototype.render = function() {
                this.$el.html(this.template())
            }, n.prototype.render_calendar_selector = function() {
                window.calendar_selector_view.setElement(this.$("#calendar-selector")).render()
            }, n.prototype.render_day_rows = function() {
                _.each(this.child_views, function(e) {
                    e.remove()
                }, this), this.child_views = [], _.each(this.collection.grouped_by_week_number()[this.model.get("week_number")], function(e) {
                    var t;
                    t = new JPApp.Views.CalendarTableDayRow({
                        model: e
                    }), this.child_views.push(t), this.$("table#calendar-days").append(t.el)
                }, this)
            }, n.prototype.set_week_label = function() {
                this.collection.set_week_label(this.model)
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.CalendarTableDayRow = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.tagName = "tbody", n.prototype.className = function() {
                return "calendar-table-day-row " + this.model.get("day_name")
            }, n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "calendar_table_day_row", this), this.render()
            }, n.prototype.events = {
                "click .edit": function(e) {
                    var t;
                    return t = $(getTarget(e)).closest("tr").attr("data-job-content-id"), window.job_contents.find({
                        id: t
                    }).trigger("edit"), !1
                },
                "click .destroy": "destroy"
            }, n.prototype.destroy = function(e) {
                var t;
                e.preventDefault(), t = $(getTarget(e)).closest("tr").attr("data-job-content-id"), confirm("Are you sure you want to remove this activity?") && window.job_contents.find({
                    id: t
                }).trigger("deleting")
            }, n.prototype.template = HandlebarsTemplates.calendar_table_day_row, n.prototype.render = function() {
                var e;
                return e = this.template(this.model.toJSON()), this.$el.html(e), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.CommentFormView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.className = "new-comment", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "comment_form", this), this.listenTo(this.model, "sync", this.createdComment), this.render()
            }, n.prototype.bindings = {
                "textarea.content": "content"
            }, n.prototype.events = {
                "click .button.save": function() {
                    return this.collection.create(this.model), !1
                }
            }, n.prototype.template = HandlebarsTemplates.comment_form, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.model.unset("error_messages"), this.model.unset("errors"), this.stickit(), this
            }, n.prototype.createdComment = function() {
                this.model.trigger("created"), this.remove()
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.CommentListView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.el = "#comments", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "comment_list", this), this.collection.fetch(), this.listenTo(JPApp.dispatcher, "collection:comments:sync", this.render)
            }, n.prototype.render = function() {
                var e;
                return e = new JPApp.Views.CommentFormView({
                    model: new JPApp.Models.Comment,
                    collection: window.comments
                }), this.collection.each(function(e) {
                    e.view = e.view || new JPApp.Views.CommentView({
                        model: e
                    }), this.$("#comment-list").prepend(e.view.render().$el)
                }, this), this.$("#comment-list").prepend(e.render().$el), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.CommentView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.id = function() {
                return "comment-" + this.model.get("id")
            }, n.prototype.className = "comment", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "comment", this), this.listenTo(this.model, "destroy", this.remove)
            }, n.prototype.events = {
                "click .destroy": "destroy"
            }, n.prototype.template = HandlebarsTemplates.comment, n.prototype.render = function() {
                return this.trigger("render"), this.$el.html(this.template(this.model.toJSON())), this
            }, n.prototype.destroy = function(e) {
                e.preventDefault(), confirm("Are you sure you want to remove this comment?") && this.model.destroy()
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.ContractedPAs = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.className = "contracted-pas", n.prototype.template = HandlebarsTemplates.contracted_pas, n.prototype.bindings = {
                "input.contracted_dcc": "contracted_dcc",
                "input.contracted_spa": "contracted_spa",
                "input.contracted_other": "contracted_other",
                "textarea.reason_for_increase": "reason_for_increase"
            }, n.prototype.events = {
                "click .save": function() {
                    return this.model.save(), !1
                },
                "click .cancel": function() {
                    return this.model.fetch(), !1
                }
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.$(".rc.job_plan_gn_contract_pas").html($("#slugs .job_plan_gn_contract_pas").html()), this.stickit(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.EdocsTable = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "edocs_table", this), this.collection.fetch(), this.listenTo(this.collection, "sync", this.render)
            }, n.prototype.events = {
                "click a.destroy": "destroy"
            }, n.prototype.destroy = function(e) {
                var t;
                return e.preventDefault(), t = $(getTarget(e)).data("edocId"), confirm("Are you sure you want to remove this document from the job plan?") && window.edocs.findWhere({
                    id: t
                }).trigger("deleting"), !1
            }, n.prototype.template = HandlebarsTemplates.edocs_table, n.prototype.render = function() {
                this.$el.html(this.template(this.collection.toJSON()))
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.JobContentForm = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.id = "job-content-form", n.prototype.className = "panel job-content-view", n.prototype.template = HandlebarsTemplates.job_content_form, n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "job_content_form", this), this.model = this.model || new JPApp.Models.JobContent, this.listenTo(this.model, "change", function() {
                    this.$(".buttons a.save").show()
                }), this.listenTo(this.model, "sync", this.render), this.listenTo(this.model, "error", this.render), this.listenTo(JPApp.dispatcher, "model:job_plan:change", function() {
                    this.model.trigger("sync")
                }), this.listenTo(this.model, "saved", this.close_facebox)
            }, n.prototype.events = {
                "click .button.save": "saving",
                "click .button.cancel": "close_facebox",
                "click table.days_of_week tr td": "day_clicked",
                "click table.days_of_month tr td": "days_in_month_clicked",
                "click table.months_of_year tr td": "months_of_year_clicked",
                "click table.rota tr td": "repeats_rota_clicked",
                "change select#repeats": "showOnlyOptionsForRepeat",
                "click a#advanced_when_toggle": "toggleAdvancedWhen",
                "click a#view_breakdown_toggle": "toggleViewBreakdown",
                "click a.recalculate": "recalculate"
            }, n.prototype.recalculate = function() {
                return this.model.recalculate(), !1
            }, n.prototype.showScheduledFields = function() {
                this.model.get("scheduled") ? this.$("fieldset.schedule").show() : this.$("fieldset.schedule").hide(), this.showViewBreakdownFields(), this.showAdvancedWhenFields()
            }, n.prototype.toggleAdvancedWhen = function() {
                var e;
                return e = $('input:checkbox[name="advanced_when"]'), e.prop("checked", !e.prop("checked")), this.model.set({
                    advanced_when: !this.model.get("advanced_when")
                }), !1
            }, n.prototype.showAdvancedWhenFields = function() {
                this.model.get("scheduled") && this.model.get("advanced_when") ? this.$el.find("fieldset.advanced_when").show() : this.$el.find("fieldset.advanced_when").hide(), this.showHoursAndPasFields()
            }, n.prototype.toggleViewBreakdown = function() {
                return $(".view_breakdown").toggle(), !1
            }, n.prototype.showOverrides = function() {
                return this.model.get("scheduled") && this.model.get("annualised")
            }, n.prototype.showViewBreakdownFields = function() {
                this.showOverrides() ? this.$el.find(".view_breakdown").show() : this.$el.find(".view_breakdown").hide()
            }, n.prototype.showHoursAndPasFields = function() {
                !this.model.get("scheduled") || this.model.get("override_calculations") && this.model.get("advanced_when") ? this.$("fieldset.hours_and_pas").show() : this.$("fieldset.hours_and_pas").hide()
            }, n.prototype.showNumberPerYear = function() {
                this.model.get("annualised") ? (this.$(".number_per_year").show(), this.$(".occurrences_per_year").hide()) : (this.$(".number_per_year").hide(), this.$(".occurrences_per_year").show())
            }, n.prototype.showMonthlyOnAndEachFields = function() {
                this.model.get("repeats_monthly") === "on" ? (this.$("table.days_of_month").hide(), this.$("select.monthly_on").show()) : (this.$("select.monthly_on").hide(), this.$("table.days_of_month").show())
            }, n.prototype.showRotaWeeks = function(e, t, n) {
                t ? this.$(".rota-weeks").show() : this.$(".rota-weeks").hide()
            }, n.prototype.formatInterval = function(e, t) {
                return "".concat(_.map(_.range(1, +this.model.get("repeats_every_n_weeks") + 1), function(e) {
                    return "<td data-value=" + e + (_.contains(this.model.get("repeats_rota"), e) ? " class='selected clickable_td'" : " class='clickable_td'") + ">" + e + "</td>"
                }, this))
            }, n.prototype.bindings = {
                "input.activity_type": "activity_type",
                "select.number_per_year": {
                    observe: "number_per_year",
                    selectOptions: {
                        collection: function(e, t) {
                            return _.union(_.range(1, 53), [t.view.model.get("number_per_year")])
                        }
                    },
                    visible: function(e, t) {
                        return e !== 1
                    },
                    visibleFn: "showRotaWeeks"
                },
                "input.prospective_cover": {
                    observe: "prospective_cover",
                    onGet: function(e) {
                        return e ? "1" : "0"
                    },
                    onSet: function(e) {
                        return e === "1"
                    }
                },
                "input.annualised": {
                    observe: "annualised",
                    onGet: function(e) {
                        return e ? "1" : "0"
                    },
                    onSet: function(e) {
                        return e === "1"
                    },
                    visible: function(e, t) {
                        return e === "1"
                    },
                    visibleFn: "showNumberPerYear"
                },
                "input.on_call": "on_call",
                "input.hours": "hours",
                "input.pas": "pas",
                "input.scheduled": {
                    observe: "scheduled",
                    onGet: function(e) {
                        return e ? "true" : "false"
                    },
                    onSet: function(e) {
                        return e === "true"
                    },
                    visible: function(e, t) {
                        return e === "true"
                    },
                    visibleFn: "showScheduledFields"
                },
                "input.override_calculations": {
                    observe: "override_calculations",
                    onGet: function(e) {
                        return e ? "true" : "false"
                    },
                    onSet: function(e) {
                        return e === "true"
                    },
                    visible: function(e, t) {
                        return e === "true"
                    },
                    visibleFn: "showHoursAndPasFields"
                },
                "input.advanced_when": {
                    observe: "advanced_when",
                    visible: function(e, t) {
                        return e === "true"
                    },
                    visibleFn: "showAdvancedWhenFields"
                },
                "input[name='repeats_weekly_each_days_of_the_week']": "repeats_weekly_each_days_of_the_week",
                "select.start_time_hours": {
                    observe: "start_time",
                    selectOptions: {
                        collection: function() {
                            return _.map(_.range(24), function(e) {
                                return e < 10 ? "0" + e.toString() : e.toString()
                            })
                        }
                    },
                    onGet: function(e) {
                        if (e) return e.substring(0, 2)
                    },
                    onSet: function(e, t) {
                        return e + t.view.model.get("start_time").substring(2, 5)
                    }
                },
                "select.start_time_minutes": {
                    observe: "start_time",
                    selectOptions: {
                        collection: function() {
                            return _.map(_.range(60), function(e) {
                                return e < 10 ? "0" + e.toString() : e.toString()
                            })
                        }
                    },
                    onGet: function(e) {
                        if (e) return e.substring(3, 5)
                    },
                    onSet: function(e, t) {
                        return t.view.model.get("start_time").substring(0, 3) + e
                    }
                },
                "select.end_time_hours": {
                    observe: "end_time",
                    selectOptions: {
                        collection: function() {
                            return _.map(_.range(24), function(e) {
                                return e < 10 ? "0" + e.toString() : e.toString()
                            })
                        }
                    },
                    onGet: function(e) {
                        if (e) return e.substring(0, 2)
                    },
                    onSet: function(e, t) {
                        return e + t.view.model.get("end_time").substring(2, 5)
                    }
                },
                "select.end_time_minutes": {
                    observe: "end_time",
                    selectOptions: {
                        collection: function() {
                            return _.map(_.range(60), function(e) {
                                return e < 10 ? "0" + e.toString() : e.toString()
                            })
                        }
                    },
                    onGet: function(e) {
                        if (e) return e.substring(3, 5)
                    },
                    onSet: function(e, t) {
                        return t.view.model.get("end_time").substring(0, 3) + e
                    }
                },
                "input.from_date": {
                    observe: "from_date",
                    onGet: function(e) {
                        return this.model.get("from_date_formatted")
                    },
                    updateView: !1
                },
                "input.until_date": {
                    observe: "until_date",
                    onGet: function(e) {
                        return this.model.get("until_date_formatted")
                    },
                    updateView: !1
                },
                "table.days_of_week": {
                    observe: "repeats_weekly_each_days_of_the_week",
                    onGet: function(e) {
                        this.$el.find("table.days_of_week td").removeClass("selected"), _.each(e, function(e) {
                            this.$("table.days_of_week td[data-value='" + JPApp.Helpers.Capitalize(e) + "']").addClass("selected")
                        }, this)
                    },
                    updateView: !1
                },
                "table.days_of_month": {
                    observe: "repeats_monthly_each_days_of_the_month",
                    onGet: function(e) {
                        this.$el.find("table.days_of_month td").removeClass("selected"), _.each(e, function(e) {
                            this.$("table.days_of_month td[data-value='" + e + "']").addClass("selected")
                        }, this)
                    },
                    updateView: !1
                },
                "table.months_of_year": {
                    observe: "repeats_yearly_each_months_of_the_year",
                    onGet: function(e) {
                        this.$el.find("table.months_of_year td").removeClass("selected"), _.each(e, function(e) {
                            this.$("table.months_of_year td[data-value='" + e + "']").addClass("selected")
                        }, this)
                    },
                    updateView: !1
                },
                "input.repeats_monthly": {
                    observe: "repeats_monthly",
                    visible: function(e, t) {
                        return e === "true"
                    },
                    visibleFn: "showMonthlyOnAndEachFields"
                },
                "select#repeats_monthly_on_ordinals": {
                    observe: "repeats_monthly_on_ordinals",
                    selectOptions: {
                        collection: function() {
                            return [{
                                name: "1st",
                                val: 1
                            }, {
                                name: "2nd",
                                val: 2
                            }, {
                                name: "3rd",
                                val: 3
                            }, {
                                name: "4th",
                                val: 4
                            }, {
                                name: "5th",
                                val: 5
                            }, {
                                name: "last",
                                val: -1
                            }, {
                                name: "2nd last",
                                val: -2
                            }]
                        },
                        labelPath: "name",
                        valuePath: "val"
                    }
                },
                "select#repeats_monthly_on_days_of_the_week": {
                    observe: "repeats_monthly_on_days_of_the_week",
                    selectOptions: {
                        collection: "JPApp.day_names",
                        labelPath: "name",
                        valuePath: "val"
                    }
                },
                "select#repeats": {
                    observe: "repeats",
                    selectOptions: {
                        collection: "JPApp.repeats_options",
                        labelPath: "name",
                        valuePath: "val"
                    }
                },
                "select#tags": {
                    observe: "tags",
                    selectOptions: {
                        collection: function(e, t) {
                            return _.union(JPApp.tags.map(function(e) {
                                return e.get("name")
                            }), this.model.get("tags"))
                        }
                    },
                    initialize: function(e, t, n) {
                        var r;
                        e.chosen({
                            width: "100%",
                            create_option: !0,
                            create_option_text: "Create tag"
                        }), r = function(t, n, r) {
                            r.bindKey || e.trigger("chosen:updated")
                        }, this.listenTo(t, "change:" + n.observe, r)
                    },
                    getVal: function(e) {
                        var t, n;
                        return n = void 0, t = e.find("option").not(function() {
                            return !this.selected
                        }), n = Backbone.$(t.map(function() {
                            return Backbone.$(this).val()
                        })).get(), n
                    },
                    visible: function() {
                        return JPApp.has_jp_tags
                    },
                    visibleFn: "visibilityOfTags"
                },
                "select.repeats_every_n_days": {
                    observe: "repeats_every_n_days",
                    selectOptions: {
                        collection: function(e, t) {
                            return _.union(_.range(1, 366), [t.view.model.get("repeats_every_n_days")])
                        }
                    }
                },
                "select.repeats_every_n_weeks": {
                    observe: "repeats_every_n_weeks",
                    selectOptions: {
                        collection: function(e, t) {
                            return _.union(_.range(1, 53), [t.view.model.get("repeats_every_n_weeks")])
                        }
                    },
                    visible: function(e, t) {
                        return e !== 1
                    },
                    visibleFn: "showRotaWeeks"
                },
                ".rota-week-selector": {
                    observe: ["repeats_rota", "repeats_every_n_weeks"],
                    onGet: "formatInterval",
                    updateMethod: "html"
                },
                "span.categorisation": "categorisation",
                "select#categorisation": {
                    observe: "categorisation",
                    onSet: function(e) {
                        return this.model.set("benchmark", null), this.model.set("subcategorisation", null), e
                    },
                    selectOptions: {
                        collection: "JPApp.job_content_categories",
                        labelPath: "name",
                        valuePath: "val"
                    }
                },
                "select#benchmarks": {
                    observe: ["benchmark", "categorisation"],
                    onGet: function(e) {
                        return e[0]
                    },
                    onSet: function(e) {
                        return this.model.set("benchmark", e), this.model.set("subcategorisation", null), e
                    },
                    selectOptions: {
                        collection: function() {
                            return this.speciality_benchmarks()
                        },
                        labelPath: "label",
                        valuePath: "value",
                        defaultOption: {
                            label: "Choose one...",
                            value: null
                        }
                    }
                },
                "select#subcategorisation": {
                    observe: ["subcategorisation", "benchmark", "categorisation"],
                    onGet: function(e) {
                        return e[0]
                    },
                    onSet: function(e) {
                        return this.model.set("subcategorisation", e), e
                    },
                    selectOptions: {
                        collection: function() {
                            return this.speciality_subcategories()
                        },
                        labelPath: "label",
                        valuePath: "value",
                        defaultOption: {
                            label: "Choose one...",
                            value: null
                        }
                    }
                },
                "input.location": {
                    observe: "location",
                    visible: function() {
                        return !JPApp.has_location_dropdown
                    }
                },
                "select#location_dropdown": {
                    observe: "location",
                    onSet: function(e) {
                        return this.model.set("location", e), e
                    },
                    selectOptions: {
                        collection: "JPApp.job_content_locations",
                        labelPath: "name",
                        valuePath: "name",
                        defaultOption: {
                            label: "Choose one...",
                            value: null
                        }
                    },
                    visible: function() {
                        return JPApp.has_location_dropdown
                    }
                },
                "select#employer": {
                    observe: "employer",
                    selectOptions: {
                        collection: "JPApp.common_employers",
                        labelPath: "name",
                        valuePath: "name",
                        defaultOption: {
                            label: "Choose one...",
                            value: null
                        }
                    }
                },
                "textarea.description": "description",
                "select.repeats_every_n_months": {
                    observe: "repeats_every_n_months",
                    selectOptions: {
                        collection: function(e, t) {
                            return _.union(_.range(1, 13), [t.view.model.get("repeats_every_n_months")])
                        }
                    }
                },
                "input.repeats_every_n_years": "repeats_every_n_years",
                ".total_title": "breakdown_total_title",
                ".recalculate": {
                    observe: "dirty_schedule",
                    visible: !0
                },
                ".summary_data": {
                    observe: "dirty_schedule",
                    visible: !0,
                    visibleFn: function(e, t, n) {
                        if (t) return e.addClass("old_data")
                    }
                }
            }, n.prototype.visibilityOfTags = function(e, t, n) {
                t ? $("li.tags").show() : this.$el.find("li.tags").hide()
            }, n.prototype.filtered_speciality_subcategories = function() {
                return JPApp.has_benchmarks ? JPApp.job_content_subcategories.byCategoryBenchmark(this.model.get("categorisation"), this.model.get("benchmark")) : JPApp.job_content_subcategories.byCategory(this.model.get("categorisation"))
            }, n.prototype.speciality_subcategories = function() {
                var e, t;
                return e = this.filtered_speciality_subcategories(), t = _.map(e, function(e) {
                    return {
                        label: e.get("name"),
                        value: e.get("name")
                    }
                }), t
            }, n.prototype.speciality_benchmarks = function() {
                var e, t;
                return e = JPApp.job_content_benchmarks.byCategory(this.model.get("categorisation")), t = _.map(e, function(e) {
                    return {
                        label: e.get("name"),
                        value: e.get("name")
                    }
                }), t
            }, n.prototype.day_clicked = function(e) {
                var t;
                $(e.target).toggleClass("selected"), t = _.map(this.$("table.days_of_week .selected"), function(e) {
                    return $(e).data("value")
                }), t.length > 0 ? this.model.set("repeats_weekly_each_days_of_the_week", t) : $(e.target).toggleClass("selected")
            }, n.prototype.days_in_month_clicked = function(e) {
                var t;
                $(e.target).toggleClass("selected"), t = _.map(this.$("table.days_of_month .selected"), function(e) {
                    return $(e).data("value")
                }), t.length > 0 ? this.model.set("repeats_monthly_each_days_of_the_month", t) : $(e.target).toggleClass("selected")
            }, n.prototype.repeats_rota_clicked = function(e) {
                var t;
                $(e.target).toggleClass("selected"), t = _.map(this.$("table.rota .selected"), function(e) {
                    return $(e).data("value")
                }), t.length > 0 ? this.model.set("repeats_rota", t) : $(e.target).toggleClass("selected")
            }, n.prototype.months_of_year_clicked = function(e) {
                var t;
                $(e.target).toggleClass("selected"), t = _.map(this.$("table.months_of_year .selected"), function(e) {
                    return $(e).data("value")
                }), this.model.set("repeats_yearly_each_months_of_the_year", t)
            }, n.prototype.showOnlyOptionsForRepeat = function(e) {
                var t;
                t = this.$el.find("select#repeats option").not(function() {
                    return !this.selected
                }).val(), this.$el.find("li.repeats").hide(), this.$el.find("li." + t).show()
            }, n.prototype.close_facebox = function() {
                return $(document).trigger("close.facebox"), !1
            }, n.prototype.saving = function() {
                return this.model.trigger("saving", this.model), !1
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.model.unset("error_messages"), this.model.unset("errors"), this.addDatepickers(), this.stickit(), this.showOnlyOptionsForRepeat(), this.hideSaveAndCancel(), this.hideSummaryColumns(), this
            }, n.prototype.hideSummaryColumns = function() {
                if (this.model.get("breakdown_total_title") !== "Total") return this.$el.find(".premium").hide(), this.$el.find(".non_premium").hide(), this.tableColumnFixIE8()
            }, n.prototype.tableColumnFixIE8 = function() {
                return _.each(_.range(0, 4), function(e) {
                    var t;
                    t = this.$el.find("table.summary")[e], t.style.display = "none", window.setTimeout(function() {
                        t.style.display = ""
                    }, 0)
                }, this)
            }, n.prototype.addDatepickers = function() {
                this.$el.find("#from_date").datepicker({
                    dateFormat: "yy-mm-dd"
                }), this.$el.find("#until_date").datepicker({
                    dateFormat: "yy-mm-dd"
                })
            }, n.prototype.hideSaveAndCancel = function() {
                window.job_plan.get("state") === "complete" && (this.$el.find(".save").hide(), this.$el.find(".cancel").hide())
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.JobContentRow = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "job_content_row", this)
            }, n.prototype.className = "job-content-row", n.prototype.tagName = "tr", n.prototype.template = HandlebarsTemplates.job_content_row, n.prototype.events = {
                "click .edit": function() {
                    return this.model.trigger("edit"), !1
                },
                "click .destroy": "destroy"
            }, n.prototype.destroy = function(e) {
                e.preventDefault(), confirm("Are you sure you want to remove this activity?") && this.model.trigger("deleting")
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.delegateEvents(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.JobContentSortPicker = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.bindings = {
                "input.sort": "sort_method"
            }, n.prototype.template = HandlebarsTemplates.job_content_sort_picker, n.prototype.render = function() {
                return this.$el.html(this.template()), this.stickit(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.JobContentTable = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "job_content_table", this), this.listenTo(JPApp.dispatcher, "collection:job_contents:sync collection:job_contents:destroy", this.render), this.listenTo(window.job_plan, "change:sort_method", this.render), this.row_views = []
            }, n.prototype.template = HandlebarsTemplates.job_content_table, n.prototype.render = function() {
                return _.each(this.row_views, function(e) {
                    e.remove()
                }, this), this.row_views = [], _.each(this.collection.byNotNew(), function(e) {
                    var t;
                    t = new JPApp.Views.JobContentRow({
                        model: e
                    }), this.row_views.push(t)
                }, this), this.$el.html(this.template()), this.$("tbody").empty(), _.each(this.row_views, function(e) {
                    this.$("tbody").append(e.render().$el)
                }, this), this.sortable(), this
            }, n.prototype.sortable = function() {
                var e;
                window.job_plan.get("sort_method") === "order" ? (e = this, this.$("tbody").sortable({
                    update: function() {
                        e.updateOrder()
                    }
                })) : this.hideSortHandle()
            }, n.prototype.hideSortHandle = function() {
                this.$el.find(".drag_handle").hide(), this.$el.find(".drag_handle_header").hide()
            }, n.prototype.updateOrder = function() {
                _.each(this.row_views, function(e) {
                    e.model.set("order", e.$el.index())
                }), this.collection.order_updated()
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.JobPlanStatus = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.el = "#job-plan-status", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "job_plan_status", this), this.listenTo(this.model, "sync", this.render), this.render()
            }, n.prototype.template = HandlebarsTemplates.job_plan_status, n.prototype.events = {
                "click a.send_for_sign_off": "send_for_sign_off",
                "click a.revert_to_draft": "revert_to_draft",
                "click a.reject_job_plan": "reject_job_plan"
            }, n.prototype.send_for_sign_off = function() {
                var e;
                return e = this.model.job_plan_events.add(new JPApp.Models.JobPlanEvent({
                    event_name: "send_for_sign_off"
                })), e.trigger("sending_for_sign_off"), !1
            }, n.prototype.revert_to_draft = function() {
                var e;
                return e = this.model.job_plan_events.add(new JPApp.Models.JobPlanEvent({
                    event_name: "revert_to_draft"
                })), e.trigger("reverting_to_draft"), !1
            }, n.prototype.reject_job_plan = function() {
                var e;
                return e = this.model.job_plan_events.add(new JPApp.Models.JobPlanEvent({
                    event_name: "reject_job_plan"
                })), e.trigger("rejecting_job_plan"), !1
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.delegateEvents(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.NavCol = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.el = "#nav-col", n.prototype.nav_row_views = [], n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "nav_col", this), this.render()
            }, n.prototype.template = HandlebarsTemplates.nav_col, n.prototype.render = function() {
                this.$el.html(this.template()), this.collection.each(function(e, t) {
                    this.$el.append(e.nav_view.render({
                        number: t
                    }).$el)
                }, this)
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.NavRow = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "nav_row", this)
            }, n.prototype.className = "nav-row", n.prototype.template = HandlebarsTemplates.nav_row, n.prototype.render = function(e) {
                return this.$el.html(this.template($.extend(this.model.toJSON(), e))), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.NewActivity = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "new_activity", this)
            }, n.prototype.events = {
                "click a.new_activity": "new_activity"
            }, n.prototype.new_activity = function(e) {
                e.preventDefault(), this.model.trigger("new_activity", this.model)
            }, n.prototype.className = "new_activity", n.prototype.template = HandlebarsTemplates.new_activity, n.prototype.render = function() {
                return this.$el.html(this.template()), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.OnCallActivitiesTable = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "on_call_activities_table", this), this.listenTo(JPApp.dispatcher, "collection:job_contents:sync collection:job_contents:destroy", this.render), this.row_views = []
            }, n.prototype.template = HandlebarsTemplates.job_content_table, n.prototype.render = function() {
                var e;
                return _.each(this.row_views, function(e) {
                    e.remove()
                }, this), this.row_views = [], e = this.collection.filter(function(e) {
                    return e.get("on_call")
                }), _.each(e, function(e) {
                    var t;
                    t = new JPApp.Views.JobContentRow({
                        model: e
                    }), this.row_views.push(t)
                }, this), this.$el.html(this.template()), this.$("tbody").empty(), _.each(this.row_views, function(e) {
                    this.$("tbody").append(e.render().$el)
                }, this), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.OverlappingEventRow = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.tagName = "tbody", n.prototype.className = function() {
                return "overlapping-event-row" + this.model.get("day_name")
            }, n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "overlapping-event-row", this), this.render()
            }, n.prototype.events = {
                "click .edit": function(e) {
                    var t;
                    return t = $(getTarget(e)).closest("tr").attr("data-job-content-id"), window.job_contents.find({
                        id: t
                    }).trigger("edit"), !1
                },
                "click .destroy": "destroy"
            }, n.prototype.destroy = function(e) {
                var t;
                e.preventDefault(), t = $(getTarget(e)).closest("tr").attr("data-job-content-id"), confirm("Are you sure you want to remove this activity?") && window.job_contents.find({
                    id: t
                }).trigger("deleting")
            }, n.prototype.template = HandlebarsTemplates.overlapping_event_row, n.prototype.render = function() {
                var e;
                return e = this.template(this.model.toJSON()), this.$el.html(e), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.OverlappingEventsTable = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "overlapping_events_table", this), this.child_views = [], this.listenTo(this.collection, "sync", this.render_day_rows), this.listenTo(this.collection, "sync", this.toggleSummary), this.toggleSummary(), this.render()
            }, n.prototype.toggleSummary = function() {
                this.child_views.length >= 10 ? $("#summary").show() : $("#summary").hide()
            }, n.prototype.template = HandlebarsTemplates.overlapping_events_table, n.prototype.render = function() {
                this.$el.html(this.template())
            }, n.prototype.render_day_rows = function() {
                var e;
                _.each(this.child_views, function(e) {
                    e.remove()
                }, this), this.child_views = [], e = this, this.collection.each(function(t) {
                    var n;
                    n = new JPApp.Views.OverlappingEventRow({
                        model: t
                    }), e.child_views.push(n), e.$("table#overlapping-events").append(n.el)
                })
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SectionView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.className = "section", n.prototype.render = function() {
                return this.$el.html(this.template()), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.AdditionalExternal = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "additional_external", this), this.ars_table_view = new JPApp.Views.ARSTableBodyView({
                    collection: window.job_contents
                }), this.ars_notes_view = new JPApp.Views.ARSNotesTableBodyView({
                    collection: window.ars_notes
                }), this.listenTo(window.ars_notes, "edit", this.editARSNote), this.render()
            }, n.prototype.events = {
                "click .add-ars-note": "newARSNote"
            }, n.prototype.newARSNote = function() {
                return this.$("#ars-note-forms").append((new JPApp.Views.ARSNoteFormView).$el), !1
            }, n.prototype.editARSNote = function(e) {
                this.$("#ars-note-forms").append((new JPApp.Views.ARSNoteFormView({
                    model: e
                })).$el)
            }, n.prototype.template = HandlebarsTemplates.additional_external, n.prototype.render = function() {
                return this.$el.html(this.template()), this.ars_table_view.setElement(this.$("table.ars tbody")), this.ars_notes_view.setElement(this.$("table#ars_notes tbody")), this.$(".rc.job_plan_gn_additional_responsibilities").html($("#slugs .job_plan_gn_additional_responsibilities").html()), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.AdditionalPAs = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "additional_pas", this), this.apa_activities_table = new JPApp.Views.APAActivitiesTable({
                    collection: window.job_contents
                }), this.atc_activities_table = new JPApp.Views.ATCActivitiesTable({
                    collection: window.job_contents
                }), this.render()
            }, n.prototype.bindings = {
                "input.private_practice": "private_practice",
                "input.in_job_plan": "in_job_plan",
                "input.additional_activity": "additional_activity"
            }, n.prototype.events = {
                "click .button.save": function() {
                    return this.model.save(), !1
                },
                "click .button.cancel": function() {
                    return this.model.fetch(), !1
                }
            }, n.prototype.template = HandlebarsTemplates.additional_pas, n.prototype.render = function() {
                return this.$el.html(this.template()), this.apa_activities_table.setElement(this.$("#apa_activities")).render(), this.atc_activities_table.setElement(this.$("#atc_activities")).render(), this.$(".rc.job_plan_gn_additional_programmed_activities").html($("#slugs .job_plan_gn_additional_programmed_activities").html()), this.stickit(), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.FeePayingServices = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "fee_paying_services", this), this.render()
            }, n.prototype.bindings = {
                "input.fee_paying_services": "fee_paying_services",
                "input.fee_in_contract": "fee_in_contract"
            }, n.prototype.events = {
                "click .button.save": function() {
                    return this.model.save(), !1
                },
                "click .button.cancel": function() {
                    return this.model.fetch(), !1
                }
            }, n.prototype.template = HandlebarsTemplates.fee_paying_services, n.prototype.render = function() {
                return this.$el.html(this.template()), this.$(".rc.job_plan_gn_fee_paying_services").html($("#slugs .job_plan_gn_fee_paying_services").html()), this.stickit(), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.GeneralDiscussion = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "general_discussion", this), this.edocs_table = new JPApp.Views.EdocsTable({
                    collection: window.edocs
                }), this.new_attachment_view = new NewAttachmentView({
                    model: new JPApp.Models.Edoc,
                    type: "edocs",
                    user_id: window.job_plan.get("owner_id")
                }), this.render()
            }, n.prototype.template = HandlebarsTemplates.general_discussion, n.prototype.bindings = {
                "textarea.general_discussion": "general_discussion"
            }, n.prototype.events = {
                "click .button.save": function() {
                    return this.model.save(), !1
                },
                "click .button.cancel": function() {
                    return this.model.fetch(), !1
                }
            }, n.prototype.render = function() {
                return this.$el.html(this.template(window.nav_rows.find(function(e) {
                    return e.id === "general_discussion"
                }).toJSON())), this.edocs_table.setElement(this.$("#edocs")).render(), this.new_attachment_view.setElement(this.$("#edoc_form")).render(), this.$(".rc").html($("#slugs .job_plan_gn_general_discussion").html()), this.stickit(), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.GeneralInfo = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "general_info", this), this.listenTo(this.model, "error sync", this.render), this.render()
            }, n.prototype.template = HandlebarsTemplates.general_info, n.prototype.bindings = {
                "input.effective_date": {
                    observe: "effective_date",
                    onGet: function(e) {
                        return this.model.get("effective_date_formatted")
                    }
                },
                "input.working_weeks": {
                    observe: "working_weeks"
                },
                "input.job_title": {
                    observe: "job_title"
                },
                "select#directorate": {
                    observe: "directorate",
                    selectOptions: {
                        collection: "JPApp.directorates",
                        labelPath: "name",
                        valuePath: "name",
                        defaultOption: {
                            label: "Choose one...",
                            value: null
                        }
                    }
                },
                "select#speciality": {
                    observe: "speciality",
                    selectOptions: {
                        collection: "window.specialities",
                        labelPath: "name",
                        valuePath: "name",
                        defaultOption: {
                            label: "Choose one...",
                            value: null
                        }
                    }
                },
                "select#default_employer": {
                    observe: "default_employer",
                    selectOptions: {
                        collection: "JPApp.common_employers",
                        labelPath: "name",
                        valuePath: "name",
                        defaultOption: {
                            label: "Choose one...",
                            value: null
                        }
                    }
                },
                "input.default_location": {
                    observe: "default_location",
                    visible: function() {
                        return !JPApp.has_location_dropdown
                    }
                },
                "select#default_location_dropdown": {
                    observe: "default_location",
                    onSet: function(e) {
                        return this.model.set("default_location", e), e
                    },
                    selectOptions: {
                        collection: "JPApp.job_content_locations",
                        labelPath: "name",
                        valuePath: "name",
                        defaultOption: {
                            label: "Choose one...",
                            value: null
                        }
                    },
                    visible: function() {
                        return JPApp.has_location_dropdown
                    }
                },
                "input.contract_type": {
                    observe: "contract_type"
                },
                "input.european_working_directive_opt_out": {
                    observe: "european_working_directive_opt_out"
                },
                "input.current_pay_threshold": {
                    observe: "current_pay_threshold"
                }
            }, n.prototype.events = {
                "click .button.save": function() {
                    return this.model.save(), !1
                },
                "click .button.cancel": function() {
                    return this.model.fetch(), !1
                }
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.$(".rc.job_plan_gn_general_information").html($("#slugs .job_plan_gn_general_information").html()), this.stickit(), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.Instructions = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "instructions", this), this.render()
            }, n.prototype.template = HandlebarsTemplates.instructions, n.prototype.render = function() {
                return this.$el.html(this.template()), this.$(".rc").html($("#slugs .job_plan_instructions").html()), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.Meetings = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "meetings", this), this.render()
            }, n.prototype.template = HandlebarsTemplates.meetings, n.prototype.bindings = {
                "textarea.meetings_info": "meetings_info"
            }, n.prototype.events = {
                "click .button.save": function() {
                    return this.model.save(), !1
                },
                "click .button.cancel": function() {
                    return this.model.fetch(), !1
                }
            }, n.prototype.render = function() {
                return this.$el.html(this.template()), this.$(".rc.job_plan_gn_meetings").html($("#slugs .job_plan_gn_meetings").html()), this.stickit(), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.Objectives = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "objectives", this), this.speciality_objectives_view = new JPApp.Views.SMARTTableBodyView({
                    collection: window.speciality_objectives
                }), this.personal_objectives_view = new JPApp.Views.SMARTTableBodyView({
                    collection: window.personal_objectives
                }), this.listenTo(window.speciality_objectives, "edit", this.editSpecialityObjective), this.listenTo(window.personal_objectives, "edit", this.editPersonalObjective), this.render()
            }, n.prototype.events = {
                "click .new-speciality-objective": "newSpecialityObjective",
                "click .new-personal-objective": "newPersonalObjective"
            }, n.prototype.template = HandlebarsTemplates.objectives, n.prototype.newSpecialityObjective = function() {
                return this.$("#speciality-objective-forms").append((new JPApp.Views.SMARTFormView({
                    collection: window.speciality_objectives
                })).$el), !1
            }, n.prototype.editSpecialityObjective = function(e) {
                this.$("#speciality-objective-forms").append((new JPApp.Views.SMARTFormView({
                    model: e,
                    collection: window.speciality_objectives
                })).$el)
            }, n.prototype.newPersonalObjective = function() {
                var e;
                return e = new JPApp.Models.PersonalObjective, this.$("#personal-objective-forms").append((new JPApp.Views.SMARTFormView({
                    model: e,
                    collection: window.personal_objectives
                })).$el), !1
            }, n.prototype.editPersonalObjective = function(e) {
                this.$("#personal-objective-forms").append((new JPApp.Views.SMARTFormView({
                    model: e,
                    collection: window.personal_objectives
                })).$el)
            }, n.prototype.render = function() {
                return this.$el.html(this.template()), this.speciality_objectives_view.setElement(this.$("table#speciality_objectives tbody")), this.personal_objectives_view.setElement(this.$("table#personal_objectives tbody")), this.$(".rc.job_plan_gn_objectives").html($("#slugs .job_plan_gn_objectives").html()), this.$(".rc.job_plan_trust_objectives").html($("#slugs .job_plan_trust_objectives").html()), this.$(".rc.job_plan_gn_speciality_objectives").html($("#slugs .job_plan_gn_speciality_objectives").html()), this.$(".rc.job_plan_gn_personal_objectives").html($("#slugs .job_plan_gn_personal_objectives").html()), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.OnCallSupplement = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "on_call_supplement", this), this.on_call_activities_table = new JPApp.Views.OnCallActivitiesTable({
                    collection: window.job_contents
                }), this.render()
            }, n.prototype.template = HandlebarsTemplates.on_call_supplement, n.prototype.bindings = {
                "input.ocas_freq": {
                    observe: "ocas_freq"
                },
                "select#on_call_category": {
                    observe: "on_call_category",
                    selectOptions: {
                        collection: [{
                            name: "A"
                        }, {
                            name: "B"
                        }, {
                            name: "SAS"
                        }],
                        labelPath: "name",
                        valuePath: "name",
                        defaultOption: {
                            label: "Choose one...",
                            value: null
                        }
                    }
                },
                "input.on_call_supplement": "on_call_supplement",
                "textarea.on_call_rota": "on_call_rota"
            }, n.prototype.events = {
                "click .button.save": function() {
                    return this.model.save(), !1
                },
                "click .button.cancel": function() {
                    return this.model.fetch(), !1
                }
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.on_call_activities_table.setElement(this.$("#on_call_activities")).render(), this.$(".rc.job_plan_gn_on_call_supplement").html($("#slugs .job_plan_gn_on_call_supplement").html()), this.stickit(), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.OtherAgreements = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "other_agreements", this), this.render()
            }, n.prototype.template = HandlebarsTemplates.other_agreements, n.prototype.bindings = {
                "textarea.other_agreements": "other_agreements"
            }, n.prototype.events = {
                "click .button.save": function() {
                    return this.model.save(), !1
                },
                "click .button.cancel": function() {
                    return this.model.fetch(), !1
                }
            }, n.prototype.render = function() {
                return this.$el.html(this.template()), this.$(".rc.job_plan_gn_other_agreements").html($("#slugs .job_plan_gn_other_agreements").html()), this.stickit(), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SignOff = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.id = "sign_off", n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "sign_off", this), this.listenTo(JPApp.dispatcher, "collection:signatories:sync collection:signatories:destroy", this.render)
            }, n.prototype.template = HandlebarsTemplates.sign_off, n.prototype.render = function() {
                return this.$el.html(this.template()), window.signatories.each(function(e) {
                    e.signature_view = e.signature_view || new JPApp.Views.SignatureRowView({
                        model: e
                    }), this.$("tbody").append(e.signature_view.render().$el)
                }, this), this.$(".rc.job_plan_gn_sign_off").html($("#slugs .job_plan_gn_sign_off").html()), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.Signatories = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.id = "signatories", n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "signatories", this), this.signatory_form_view = new JPApp.Views.SignatoryFormView, this.signatory_table_view = new JPApp.Views.SignatoryTableBodyView({
                    collection: window.signatories
                }), _.isEmpty(window.compulsory_signator_roles) || (this.compulsory_signator_roles_view = new JPApp.Views.SignatorRoles({
                    collection: window.compulsory_signator_roles,
                    compulsory: !0
                })), _.isEmpty(window.non_compulsory_signator_roles) || (this.non_compulsory_signator_roles_view = new JPApp.Views.SignatorRoles({
                    collection: window.non_compulsory_signator_roles,
                    compulsory: !1
                })), this.listenTo(window.signatories, "edit", this.editSignatory), this.render()
            }, n.prototype.events = {
                "click .new-signatory": "newSignatory"
            }, n.prototype.template = HandlebarsTemplates.signatories, n.prototype.newSignatory = function() {
                return this.$("#signatory-forms").append((new JPApp.Views.SignatoryFormView).$el), !1
            }, n.prototype.editSignatory = function(e) {
                this.$("#signatory-forms").append((new JPApp.Views.SignatoryFormView({
                    model: e
                })).$el)
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.compulsory_signator_roles_view.setElement(this.$("#compulsory_signator_roles")).render(), this.non_compulsory_signator_roles_view.setElement(this.$("#non_compulsory_signator_roles")).render(), this.signatory_table_view.setElement(this.$("table.additional-signatories tbody")), this.$(".rc.job_plan_gn_signators").html($("#slugs .job_plan_gn_signators").html()), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SPANotes = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "spa_notes", this), this.spa_table_view = new JPApp.Views.SPATableBodyView({
                    collection: window.job_contents
                }), this.spa_notes_view = new JPApp.Views.SPANotesTableBodyView({
                    collection: window.spa_notes
                }), this.listenTo(window.spa_notes, "edit", this.editSPANote), this.render()
            }, n.prototype.events = {
                "click .add-spa-note": "newSPANote"
            }, n.prototype.newSPANote = function() {
                return this.$("#spa-note-forms").append((new JPApp.Views.SPANoteFormView).$el), !1
            }, n.prototype.editSPANote = function(e) {
                this.$("#spa-note-forms").append((new JPApp.Views.SPANoteFormView({
                    model: e
                })).$el)
            }, n.prototype.template = HandlebarsTemplates.spa_notes, n.prototype.render = function() {
                return this.$el.html(this.template()), this.spa_table_view.setElement(this.$("table.spas tbody")), this.spa_notes_view.setElement(this.$("table#spa_notes tbody")), this.$(".rc.job_plan_gn_spa_activity").html($("#slugs .job_plan_gn_spa_activity").html()), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SupportingResources = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "supporting_resources", this), this.render()
            }, n.prototype.bindings = {
                "textarea.staffing_support": "staffing_support",
                "textarea.accomodation": "accomodation",
                "textarea.equipment": "equipment",
                "textarea.any_other_resources": "any_other_resources"
            }, n.prototype.events = {
                "click .button.save": function() {
                    return this.model.save(), !1
                },
                "click .button.cancel": function() {
                    return this.model.fetch(), !1
                }
            }, n.prototype.template = HandlebarsTemplates.supporting_resources, n.prototype.render = function() {
                return this.$el.html(this.template()), this.$(".rc.job_plan_gn_supporting_resources").html($("#slugs .job_plan_gn_supporting_resources").html()), this.stickit(), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.Timetable = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.id = "timetable", n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "timetable", this), this.new_activity = new JPApp.Views.NewActivity({
                    model: this
                }), this.timetable_tabs = new JPApp.Views.TimetableTabs, this.calendar_view = new JPApp.Views.CalendarTable({
                    model: window.calendar_selector,
                    collection: window.calendar_table_day_rows
                }), this.job_content_view = new JPApp.Views.JobContentForm, this.breakdown_job_content_table = new JPApp.Views.BreakdownJobContentTable({
                    collection: window.job_contents
                }), this.job_content_table = new JPApp.Views.JobContentTable({
                    collection: window.job_contents
                }), this.job_content_sort_picker = new JPApp.Views.JobContentSortPicker({
                    model: window.job_plan
                }), JPApp.has_overlap_check && (this.warning_view = new JPApp.Views.OverlappingEventsTable({
                    collection: window.overlapping_events
                })), this.contracted_pas_view = new JPApp.Views.ContractedPAs({
                    model: window.job_plan
                }), this.listenTo(JPApp.dispatcher, "model:job_content:edit", this.renderFormJC, this), this.listenTo(JPApp.dispatcher, "view:timetable:new_activity", this.renderNewFormJC, this), this.render()
            }, n.prototype.renderNewFormJC = function() {
                this.job_content_view.remove(), this.job_content_view = new JPApp.Views.JobContentForm({
                    model: window.job_contents.add({})
                }), $.facebox(this.job_content_view.render().$el), setPlaceholders()
            }, n.prototype.renderFormJC = function(e) {
                this.job_content_view.remove(), this.job_content_view = new JPApp.Views.JobContentForm({
                    model: e
                }), $.facebox(this.job_content_view.render().$el), setPlaceholders()
            }, n.prototype.template = HandlebarsTemplates.timetable, n.prototype.jc_row_template = HandlebarsTemplates.job_content_row, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.new_activity.setElement(this.$("#new-activity")).render(), this.timetable_tabs.setElement(this.$("#timetable-tabs")).render(), this.calendar_view.setElement(this.$("#calendar")).render(), this.breakdown_job_content_table.setElement(this.$("#breakdown_job_contents")).render(), this.job_content_table.setElement(this.$("#job-contents")).render(), this.job_content_sort_picker.setElement(this.$("#job-content-sort-picker")).render(), JPApp.has_overlap_check && this.warning_view.setElement(this.$("#warning")).render(), this.contracted_pas_view.setElement(this.$("#contracted-pas")).render(), this.$(".rc.job_plan_gn_job_content").html($("#slugs .job_plan_gn_job_content").html()), this.stickit(), this
            }, n
        }(JPApp.Views.SectionView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SignatorRoles = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "signator_roles", this)
            }, n.prototype.template = function(e) {
                return HandlebarsTemplates[this.collection.compulsory ? "compulsory_signator_roles" : "non_compulsory_signator_roles"](e)
            }, n.prototype.render = function() {
                return this.$el.append(this.template({
                    collection: this.collection.toJSON(),
                    title: window.suggested_signatories_title
                })), this.collection.each(function(e) {
                    e.signatory_role_view = e.signatory_role_view || new JPApp.Views.SignatoryRole({
                        model: e
                    }), this.$(".signatory_roles").append(e.signatory_role_view.render().$el)
                }, this), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SignatoryFormView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.className = "signatory", n.prototype.tagName = "form", n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "signatory_form", this), this.model = this.model || new JPApp.Models.Signatory, this.listenTo(this.model, "sync", this.remove), this.listenTo(this.model, "error", this.render), this.render()
            }, n.prototype.bindings = {
                "input.tier": "tier",
                "input.email": "email",
                "input.first_name": "first_name",
                "input.last_name": "last_name",
                "input.role": "role"
            }, n.prototype.template = HandlebarsTemplates.signatory_form, n.prototype.events = {
                "click .button.save": function() {
                    return window.signatories.create(this.model), !1
                },
                "click .button.cancel": function() {
                    return this.remove(), !1
                }
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.model.unset("error_messages"), this.model.unset("errors"), this.stickit(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SignatoryFromRoleForm = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.className = "signatory-from-role", n.prototype.tagName = "form", n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "signatory_from_role_form", this), this.model = this.model || new JPApp.Models.Signatory, this.listenTo(this.model, "error", this.render), this.role = e.role, this.render()
            }, n.prototype.bindings = {
                "select.possible-signatories": {
                    observe: "email",
                    selectOptions: {
                        collection: "this.role.possible_signatories",
                        labelPath: "full_name",
                        valuePath: "email",
                        defaultOption: {
                            label: "Choose one...",
                            value: null
                        }
                    },
                    onSet: function(e) {
                        var t;
                        return t = this.role.possible_signatories.findWhere({
                            email: e
                        }), this.model.set({
                            first_name: t.get("first_name"),
                            last_name: t.get("last_name"),
                            role: this.role.get("name")
                        }), e
                    }
                }
            }, n.prototype.template = HandlebarsTemplates.signatory_from_role_form, n.prototype.events = {
                "click .button.add-signatory": function() {
                    return window.signatories.create(this.model), !1
                }
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.model.unset("error_messages"), this.model.unset("errors"), this.stickit(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SignatoryRole = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "signatory_role", this), this.listenTo(JPApp.dispatcher, "view:signatory_table:render", this.render)
            }, n.prototype.template = HandlebarsTemplates.signatory_role, n.prototype.render = function() {
                return this.$el.html(this.template(_.extend(this.model.toJSON(), {
                    signatories: this.model.signatories,
                    can_create_signatories: window.job_plan.get("can_create_signatories")
                }))), this.$(".new-signatory-from-role").append((new JPApp.Views.SignatoryFromRoleForm({
                    role: this.model
                })).$el), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SignatoryRowView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.tagName = "tr", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "signatory_row", this), this.listenTo(this.model, "destroy", this.remove)
            }, n.prototype.events = {
                "click .destroy": "destroy",
                "click .edit": "edit"
            }, n.prototype.template = HandlebarsTemplates.signatory_row, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.delegateEvents(), this
            }, n.prototype.edit = function(e) {
                e.preventDefault(), this.model.trigger("edit", this.model)
            }, n.prototype.destroy = function(e) {
                e.preventDefault(), confirm("Are you sure you want to remove this signatory?") && this.model.destroy()
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SignatoryTableBodyView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "signatory_table", this), this.collection.fetch(), this.listenTo(JPApp.dispatcher, "collection:signatories:sync", this.render)
            }, n.prototype.template = HandlebarsTemplates.signatory_table, n.prototype.render = function() {
                return this.$el.append(this.template()), this.collection.each(function(e) {
                    this.$("tr.blank").remove(), e.row_view = e.row_view || new JPApp.Views.SignatoryRowView({
                        model: e
                    }), this.$el.append(e.row_view.render().$el)
                }, this), this.trigger("render"), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SignatureRowView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.tagName = "tr", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "signature_row", this)
            }, n.prototype.template = HandlebarsTemplates.signature_row, n.prototype.events = {
                "click a.sign": "sign",
                "click a.revoke": "revoke",
                "click a.request-signature": "requestSignature"
            }, n.prototype.sign = function() {
                var e;
                return e = this.model.signature_events.add(new JPApp.Models.SignatureEvent({
                    event_name: "sign"
                })), e.trigger("signing"), !1
            }, n.prototype.revoke = function() {
                var e;
                return e = this.model.signature_events.add(new JPApp.Models.SignatureEvent({
                    event_name: "revoke"
                })), e.trigger("revoking"), !1
            }, n.prototype.requestSignature = function() {
                var e;
                return e = this.model.signature_events.add(new JPApp.Models.SignatureEvent({
                    event_name: "request_signature"
                })), e.trigger("requesting_signature"), !1
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.delegateEvents(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SMARTFormView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.className = "smart", n.prototype.tagName = "form", n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "smart_form", this), this.model = this.model || new JPApp.Models.SpecialityObjective, this.listenTo(this.model, "sync", this.remove), this.listenTo(this.model, "error", this.render), this.render()
            }, n.prototype.bindings = {
                "textarea.specific": "specific",
                "textarea.measurable": "measurable",
                "textarea.attainable": "attainable",
                "textarea.relevant": "relevant",
                "textarea.timely": "timely"
            }, n.prototype.template = HandlebarsTemplates.smart_form, n.prototype.events = {
                "click .button.save": function() {
                    return this.collection.create(this.model), !1
                },
                "click .button.cancel": function() {
                    return this.remove(), !1
                }
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.model.unset("error_messages"), this.model.unset("errors"), this.stickit(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SMARTRowView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.tagName = "tr", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "smart_row", this), this.listenTo(this.model, "destroy", this.remove)
            }, n.prototype.events = {
                "click .destroy": "destroy",
                "click .edit": "edit"
            }, n.prototype.template = HandlebarsTemplates.smart_row, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this
            }, n.prototype.edit = function(e) {
                e.preventDefault(), this.model.trigger("edit", this.model)
            }, n.prototype.destroy = function(e) {
                e.preventDefault(), confirm("Are you sure you want to remove this objective?") && this.model.destroy()
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SMARTTableBodyView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "smart_table", this), this.collection.fetch(), this.listenTo(JPApp.dispatcher, "collection:speciality_objectives:sync", this.render), this.listenTo(JPApp.dispatcher, "collection:personal_objectives:sync", this.render)
            }, n.prototype.template = HandlebarsTemplates.smart_table, n.prototype.render = function() {
                return this.$el.append(this.template()), this.collection.each(function(e) {
                    this.$("tr.blank").remove(), e.row_view = e.row_view || new JPApp.Views.SMARTRowView({
                        model: e
                    }), this.$el.append(e.row_view.render().$el)
                }, this), this.trigger("render"), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SPANoteFormView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.className = "spa-note", n.prototype.tagName = "form", n.prototype.initialize = function(e) {
                JPApp.Helpers.PublishEvents("view", "spa_note_form", this), this.model = this.model || new JPApp.Models.SPANote, this.listenTo(this.model, "sync", this.remove), this.listenTo(this.model, "error", this.render), this.render()
            }, n.prototype.bindings = {
                "textarea.description": "description",
                "input.spa_number": "spa_number"
            }, n.prototype.template = HandlebarsTemplates.spa_note_form, n.prototype.events = {
                "click .button.save": function() {
                    return window.spa_notes.create(this.model), !1
                },
                "click .button.cancel": function() {
                    return this.remove(), !1
                }
            }, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.model.unset("error_messages"), this.model.unset("errors"), this.stickit(), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SPANoteRowView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.tagName = "tr", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "spa_note_row", this), this.listenTo(this.model, "destroy", this.remove)
            }, n.prototype.events = {
                "click .destroy": "destroy",
                "click .edit": "edit"
            }, n.prototype.template = HandlebarsTemplates.spa_note_row, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this
            }, n.prototype.edit = function(e) {
                e.preventDefault(), this.model.trigger("edit", this.model)
            }, n.prototype.destroy = function(e) {
                e.preventDefault(), confirm("Are you sure you want to remove this SPA note?") && this.model.destroy()
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SPANotesTableBodyView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "spa_notes_table_body", this), this.collection.fetch(), this.listenTo(JPApp.dispatcher, "collection:spa_notes:sync", this.render)
            }, n.prototype.render = function() {
                return this.collection.each(function(e) {
                    this.$("tr.blank").remove(), e.row_view = e.row_view || new JPApp.Views.SPANoteRowView({
                        model: e
                    }), this.$el.append(e.row_view.render().$el)
                }, this), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.SPATableBodyView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "spa_table", this), this.listenTo(JPApp.dispatcher, "collection:job_contents:sync", this.render)
            }, n.prototype.template = HandlebarsTemplates.spa_table, n.prototype.render = function() {
                var e;
                return e = {
                    rows: _.map(this.collection.byCategory("SPA"), function(e) {
                        return e.toJSON()
                    })
                }, this.$el.html(this.template(e)), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.TimetableTabs = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "timetable_tabs", this), this.listenTo(window.job_contents, "remove sync", this.checkWarning), this.listenTo(JPApp.dispatcher, "collection:overlapping_events:sync", this.checkWarning)
            }, n.prototype.events = {
                "click li#all-activities-tab": "activateAllActivities",
                "click li#breakdown-tab": "activateBreakdown",
                "click li#calendar-tab": "activateCalendar",
                "click li#warning-tab": "activateWarning"
            }, n.prototype.hideAllTabs = function() {
                $("#timetable-tabs .active").removeClass("active"), $("#all-activities").hide(), $("#breakdown").hide(), $("#calendar").hide(), $("#warning").hide()
            }, n.prototype.activateAllActivities = function() {
                this.hideAllTabs(), $("#all-activities-tab").addClass("active"), $("#all-activities").show()
            }, n.prototype.activateBreakdown = function() {
                this.hideAllTabs(), $("#breakdown-tab").addClass("active"), $("#breakdown").show()
            }, n.prototype.activateCalendar = function() {
                this.hideAllTabs(), $("#calendar-tab").addClass("active"), $("#calendar").show()
            }, n.prototype.activateWarning = function() {
                this.hideAllTabs(), $("#warning-tab").addClass("active"), $("#warning").show()
            }, n.prototype.checkWarning = function() {
                JPApp.has_overlap_check && window.overlapping_events.length > 0 ? this.addWarning() : this.removeWarning()
            }, n.prototype.addWarning = function() {
                this._warning_appended || (this._warning_appended = !0, this.$("#subnav").append(this.warningTemplate()))
            }, n.prototype.removeWarning = function() {
                this._warning_appended && ($("#warning-tab").hasClass("active") && this.activateCalendar(), this._warning_appended = !1, this.$("#warning-tab").remove())
            }, n.prototype.className = "timetable-tabs", n.prototype.template = HandlebarsTemplates.timetable_tabs, n.prototype.warningTemplate = HandlebarsTemplates.warning_tab, n.prototype.render = function() {
                return this.$el.html(this.template()), this
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        JPApp.Views.TitleHeader = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.el = "#title-header", n.prototype.initialize = function() {
                JPApp.Helpers.PublishEvents("view", "title_header", this), this.listenTo(this.model, "sync", this.render), this.render()
            }, n.prototype.template = HandlebarsTemplates.title_header, n.prototype.render = function() {
                return this.$el.html(this.template(this.model.toJSON())), this.delegateEvents(), this
            }, n
        }(Backbone.View)
    }.call(this);