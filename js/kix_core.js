function f(a) {
    throw a;
}
var i = true,
    k = null,
    l = false,
    aa = "vertical",
    ba = "J",
    ca = "F",
    da = "S",
    ea = "O",
    fa = "T",
    ga = "W",
    ha = "G",
    ia = "E",
    ja = "K",
    ka = "H",
    la = "Q",
    na = "Z",
    oa = "%",
    pa = "html",
    qa = "em",
    ra = "ex",
    sa = "$1",
    ta = ": ",
    ua = "name",
    va = "op",
    wa = "</div>",
    ya = "0px",
    za = "1px",
    Aa = "|",
    Ba = "100%",
    Ca = "inner",
    Da = "unicode",
    Ea = "fi",
    Fa = "Error",
    n, Ga = [];

function Ha(a) {
    return function () {
        return Ga[a].apply(this, arguments)
    }
}
function Ia(a, b) {
    return Ga[a] = b
}
var Ja = Ja || {},
    La = this,
    Ma = k,
    Na = ".";

function Oa(a, b) {
    for (var c = a.split(Na), d = b || La, e; e = c.shift();) if (d[e]) d = d[e];
    else return k;
    return d
}
function Pa() {}
function Qa(a) {
    a.N = function () {
        return a.pY || (a.pY = new a)
    }
}
var Ra = "object",
    aaa = "[object Array]",
    Sa = "number",
    baa = "splice",
    Ta = "array",
    caa = "[object Function]",
    daa = "call",
    Ua = "function",
    Va = "null";

function Wa(a) {
    var b = typeof a;
    if (b == Ra) if (a) {
        if (a instanceof Array || !(a instanceof Object) && Object.prototype.toString.call(a) == aaa || typeof a.length == Sa && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable(baa)) return Ta;
        if (!(a instanceof Object) && (Object.prototype.toString.call(a) == caa || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable(daa))) return Ua
    } else return Va;
    else if (b == Ua && typeof a.call == "undefined") return Ra;
    return b
}
function p(a) {
    return a !== undefined
}
function Xa(a) {
    return a === k
}
function Za(a) {
    return a != k
}
function $a(a) {
    return Wa(a) == Ta
}
function ab(a) {
    var b = Wa(a);
    return b == Ta || b == Ra && typeof a.length == Sa
}
var bb = "string";

function cb(a) {
    return typeof a == bb
}
var db = "boolean";

function eb(a) {
    return typeof a == db
}
function fb(a) {
    return typeof a == Sa
}
function gb(a) {
    return Wa(a) == Ua
}
function hb(a) {
    a = Wa(a);
    return a == Ra || a == Ta || a == Ua
}

function ib(a) {
    if (a.hasOwnProperty && a.hasOwnProperty(jb)) return a[jb];
    a[jb] || (a[jb] = ++eaa);
    return a[jb]
}
var jb = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36),
    eaa = 0;

function r(a, b) {
    var c = b || La;
    if (arguments.length > 2) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(c, e)
        }
    } else return function () {
        return a.apply(c, arguments)
    }
}

function kb(a) {
    var b = Array.prototype.slice.call(arguments, 1);
    return function () {
        var c = Array.prototype.slice.call(arguments);
        c.unshift.apply(c, b);
        return a.apply(this, c)
    }
}
var lb = Date.now ||
function () {
    return +new Date
};

function s(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.p = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
}
Function.prototype.ij = function (a) {
    if (arguments.length > 1) {
        var b = Array.prototype.slice.call(arguments, 1);
        b.unshift(this, a);
        return r.apply(k, b)
    } else return r(this, a)
};

function t() {}
t.prototype.wj = l;
t.prototype.G = function () {
    if (!this.wj) {
        this.wj = i;
        this.q()
    }
};
t.prototype.q = function () {};

function mb(a) {
    a && typeof a.G == Ua && a.G()
};

function nb(a, b) {
    a = Number(a);
    b = Number(b);
    this.start = a < b ? a : b;this.end = a < b ? b : a
}
nb.prototype.sa = function () {
    return new nb(this.start, this.end)
};

function ob(a, b) {
    var c = Math.max(a.start, b.start),
        d = Math.min(a.end, b.end);
    return c <= d ? new nb(c, d) : k
}
function pb(a, b) {
    return a.start <= b && a.end >= b
};

function qb(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}
function faa(a, b, c) {
    for (var d in a) if (b.call(c, a[d], d, a)) return i;
    return l
}
function rb(a) {
    var b = [],
        c = 0;
    for (var d in a) b[c++] = a[d];
    return b
}
function tb(a) {
    var b = [],
        c = 0;
    for (var d in a) b[c++] = d;
    return b
}
function ub(a) {
    for (var b in a) return l;
    return i
}
function vb(a, b) {
    var c;
    if (c = b in a) delete a[b];
    return c
}
var wb = '"';

function xb(a, b, c) {
    if (b in a) f(Error('The object already contains the key "' + b + wb));
    a[b] = c
}

function yb(a) {
    var b = {};
    for (var c in a) b[c] = a[c];
    return b
}
var zb = "toString",
    Ab = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", zb, "valueOf"];

function Bb(a) {
    for (var b, c, d = 1; d < arguments.length; d++) {
        c = arguments[d];
        for (b in c) a[b] = c[b];
        for (var e = 0; e < Ab.length; e++) {
            b = Ab[e];
            if (Object.prototype.hasOwnProperty.call(c, b)) a[b] = c[b]
        }
    }
}
var Cb = "Uneven number of arguments";

function Db() {
    var a = arguments.length;
    if (a == 1 && $a(arguments[0])) return Db.apply(k, arguments[0]);
    if (a % 2) f(Error(Cb));
    for (var b = {}, c = 0; c < a; c += 2) b[arguments[c]] = arguments[c + 1];
    return b
}
function Eb() {
    var a = arguments.length;
    if (a == 1 && $a(arguments[0])) return Eb.apply(k, arguments[0]);
    for (var b = {}, c = 0; c < a; c++) b[arguments[c]] = i;
    return b
};
var Fb = {},
    v = "";

function Gb(a) {
    this.stack = Error().stack || v;
    if (a) this.message = String(a)
}
s(Gb, Error);
Gb.prototype.name = "CustomError";

function Hb(a, b) {
    return a.lastIndexOf(b, 0) == 0
}
function Ib(a, b) {
    var c = a.length - b.length;
    return c >= 0 && a.indexOf(b, c) == c
}
function Jb(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, v)
}
function Kb(a) {
    return a.replace(/^[\s\xa0]+/, v)
}
function Lb(a, b) {
    var c = String(a).toLowerCase(),
        d = String(b).toLowerCase();
    return c < d ? -1 : c == d ? 0 : 1
}
var gaa = /^[a-zA-Z0-9\-_.!~*'()]*$/;

function Mb(a) {
    a = String(a);
    if (!gaa.test(a)) return encodeURIComponent(a);
    return a
}
var x = " ";

function Nb(a) {
    return decodeURIComponent(a.replace(/\+/g, x))
}
var Ob = "&amp;",
    Pb = "&lt;",
    Qb = "&gt;",
    Rb = "&quot;",
    Sb = "&",
    Tb = "<",
    Ub = ">";

function Vb(a, b) {
    if (b) return a.replace(Wb, Ob).replace(Xb, Pb).replace(Yb, Qb).replace(Zb, Rb);
    else {
        if (!haa.test(a)) return a;
        if (a.indexOf(Sb) != -1) a = a.replace(Wb, Ob);
        if (a.indexOf(Tb) != -1) a = a.replace(Xb, Pb);
        if (a.indexOf(Ub) != -1) a = a.replace(Yb, Qb);
        if (a.indexOf(wb) != -1) a = a.replace(Zb, Rb);
        return a
    }
}
var Wb = /&/g,
    Xb = /</g,
    Yb = />/g,
    Zb = /\"/g,
    haa = /[&<>\"]/,
    iaa = "\\$1",
    jaa = "\\x08";

function $b(a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, iaa).replace(/\x08/g, jaa)
}
function ac(a, b) {
    return Array(b + 1).join(a)
}
function bc() {
    return Array.prototype.join.call(arguments, v)
}
function cc() {
    return Math.floor(Math.random() * 2147483648).toString(36) + (Math.floor(Math.random() * 2147483648) ^ lb()).toString(36)
}
var dc = "(\\d*)(\\D*)",
    ec = "g";

function fc(a, b) {
    for (var c = 0, d = Jb(String(a)).split(Na), e = Jb(String(b)).split(Na), g = Math.max(d.length, e.length), h = 0; c == 0 && h < g; h++) {
        var j = d[h] || v,
            m = e[h] || v,
            o = RegExp(dc, ec),
            q = RegExp(dc, ec);
        do {
            var u = o.exec(j) || [v, v, v],
                w = q.exec(m) || [v, v, v];
            if (u[0].length == 0 && w[0].length == 0) break;
            c = gc(u[1].length == 0 ? 0 : parseInt(u[1], 10),
            w[1].length == 0 ? 0 : parseInt(w[1], 10)) || gc(u[2].length == 0, w[2].length == 0) || gc(u[2], w[2])
        } while (c == 0)
    }
    return c
}
function gc(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0
};

function hc(a) {
    return a[a.length - 1]
}
var ic = Array.prototype,
    jc = ic.indexOf ?
    function (a, b, c) {
        return ic.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
        if (cb(a)) {
            if (!cb(b) || b.length != 1) return -1;
            return a.indexOf(b, c)
        }
        for (c = c; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    },
    kc = ic.forEach ?
    function (a, b, c) {
        ic.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = cb(a) ? a.split(v) : a,
            g = 0;g < d;g++) g in e && b.call(c, e[g], g, a)
    };

function lc(a, b, c) {
    var d = a.length,
        e = cb(a) ? a.split(v) : a;
    for (d = d - 1; d >= 0; --d) d in e && b.call(c, e[d], d, a)
}
var mc = ic.filter ?
function (a, b, c) {
    return ic.filter.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = [], g = 0, h = cb(a) ? a.split(v) : a,
        j = 0;j < d;j++) if (j in h) {
        var m = h[j];
        if (b.call(c, m, j, a)) e[g++] = m
    }
    return e
},
    nc = ic.map ?
    function (a, b, c) {
        return ic.map.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = Array(d), g = cb(a) ? a.split(v) : a,
            h = 0;h < d;h++) if (h in g) e[h] = b.call(c, g[h], h, a);
        return e
    },
    oc = ic.some ?
    function (a, b, c) {
        return ic.some.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = cb(a) ? a.split(v) : a,
            g = 0;g < d;g++) if (g in e && b.call(c, e[g], g, a)) return i;
        return l
    },
    pc = ic.every ?
    function (a, b, c) {
        return ic.every.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = cb(a) ? a.split(v) : a,
            g = 0;g < d;g++) if (g in e && !b.call(c, e[g], g, a)) return l;
        return i
    };

function qc(a, b, c) {
    b = rc(a, b, c);
    return b < 0 ? k : cb(a) ? a.charAt(b) : a[b]
}
function rc(a, b, c) {
    for (var d = a.length, e = cb(a) ? a.split(v) : a,
        g = 0;g < d;g++) if (g in e && b.call(c, e[g], g, a)) return g;
    return -1
}
function sc(a, b) {
    return jc(a, b) >= 0
}

function tc(a) {
    if (!$a(a)) for (var b = a.length - 1; b >= 0; b--) delete a[b];
    a.length = 0
}
function uc(a, b) {
    sc(a, b) || a.push(b)
}
function vc(a, b, c) {
    kb(wc, a, c, 0).apply(k, b)
}
function xc(a, b) {
    var c = jc(a, b),
        d;
    if (d = c >= 0) yc(a, c);
    return d
}
function yc(a, b) {
    return ic.splice.call(a, b, 1).length == 1
}
function zc() {
    return ic.concat.apply(ic, arguments)
}
function Ac(a) {
    if ($a(a)) return zc(a);
    else {
        for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = a[c];
        return b
    }
}
var kaa = "callee";

function Bc(a) {
    for (var b = 1; b < arguments.length; b++) {
        var c = arguments[b],
            d;
        if ($a(c) || (d = ab(c)) && c.hasOwnProperty(kaa)) a.push.apply(a, c);
        else if (d) for (var e = a.length, g = c.length, h = 0; h < g; h++) a[e + h] = c[h];
        else a.push(c)
    }
}
function wc(a) {
    return ic.splice.apply(a, Cc(arguments, 1))
}
function Cc(a, b, c) {
    return arguments.length <= 2 ? ic.slice.call(a, b) : ic.slice.call(a, b, c)
}

function Dc(a, b) {
    for (var c = b || a, d = {}, e = 0, g = 0; g < a.length;) {
        var h = a[g++],
            j = hb(h) ? ib(h) : h;
        if (!Object.prototype.hasOwnProperty.call(d, j)) {
            d[j] = i;
            c[e++] = h
        }
    }
    c.length = e
}
function Ec(a, b, c) {
    c = c || Fc;
    for (var d = 0, e = a.length, g; d < e;) {
        var h = d + e >> 1,
            j;
        j = c(b, a[h]);
        if (j > 0) d = h + 1;
        else {
            e = h;
            g = !j
        }
    }
    return g ? d : ~d
}
function Gc(a, b) {
    ic.sort.call(a, b || Fc)
}

function Hc(a, b) {
    for (var c = 0; c < a.length; c++) a[c] = {
        index: c,
        value: a[c]
    };
    var d = b || Fc;
    Gc(a, function (e, g) {
        return d(e.value, g.value) || e.index - g.index
    });
    for (c = 0; c < a.length; c++) a[c] = a[c].value
}
function Ic(a, b, c) {
    if (!ab(a) || !ab(b) || a.length != b.length) return l;
    var d = a.length;
    c = c || laa;
    for (var e = 0; e < d; e++) if (!c(a[e], b[e])) return l;
    return i
}
function Fc(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
}
function laa(a, b) {
    return a === b
}
function Kc(a, b, c) {
    c = Ec(a, b, c);
    if (c < 0) {
        wc(a, -(c + 1), 0, b);
        return i
    }
    return l
}

function Lc(a, b, c) {
    b = Ec(a, b, c);
    return b >= 0 ? yc(a, b) : l
}
function Mc() {
    for (var a = [], b = 0; b < arguments.length; b++) {
        var c = arguments[b];
        $a(c) ? a.push.apply(a, Mc.apply(k, c)) : a.push(c)
    }
    return a
};
var Nc = "StopIteration" in La ? La.StopIteration : Error("StopIteration");

function Oc() {}
Oc.prototype.next = function () {
    f(Nc)
};Oc.prototype.Uh = function () {
    return this
};

function maa(a) {
    if (a instanceof Oc) return a;
    if (typeof a.Uh == Ua) return a.Uh(l);
    if (ab(a)) {
        var b = 0,
            c = new Oc;
        c.next = function () {
            for (;;) {
                if (b >= a.length) f(Nc);
                if (b in a) return a[b++];
                else b++
            }
        };
        return c
    }
    f(Error("Not implemented"))
};

function Pc(a) {
    if (typeof a.$g == Ua) return a.$g();
    if (ab(a) || cb(a)) return a.length;
    var b = 0;
    for (var c in a) b++;
    return b
}
function Qc(a) {
    if (typeof a.Qb == Ua) return a.Qb();
    if (cb(a)) return a.split(v);
    if (ab(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    return rb(a)
}
function Rc(a) {
    if (typeof a.Ue == Ua) return a.Ue();
    if (typeof a.Qb != Ua) {
        if (ab(a) || cb(a)) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b
        }
        return tb(a)
    }
}

function naa(a, b) {
    if (typeof a.contains == Ua) return a.contains(b);
    if (typeof a.Tz == Ua) return a.Tz(b);
    if (ab(a) || cb(a)) return sc(a, b);
    var c;
    a: {
        for (c in a) if (a[c] == b) {
            c = i;
            break a
        }
        c = l
    }
    return c
}
function Sc(a, b, c) {
    if (typeof a.forEach == Ua) a.forEach(b, c);
    else if (ab(a) || cb(a)) kc(a, b, c);
    else for (var d = Rc(a), e = Qc(a), g = e.length, h = 0; h < g; h++) b.call(c, e[h], d && d[h], a)
}

function oaa(a, b, c) {
    if (typeof a.every == Ua) return a.every(b, c);
    if (ab(a) || cb(a)) return pc(a, b, c);
    for (var d = Rc(a), e = Qc(a), g = e.length, h = 0; h < g; h++) if (!b.call(c, e[h], d && d[h], a)) return l;
    return i
};

function Tc(a) {
    this.ze = {};
    this.xb = [];
    var b = arguments.length;
    if (b > 1) {
        if (b % 2) f(Error(Cb));
        for (var c = 0; c < b; c += 2) this.set(arguments[c], arguments[c + 1])
    } else a && Uc(this, a)
}
n = Tc.prototype;n.Db = 0;n.iu = 0;n.$g = function () {
    return this.Db
};n.Qb = function () {
    Vc(this);
    for (var a = [], b = 0; b < this.xb.length; b++) a.push(this.ze[this.xb[b]]);
    return a
};n.Ue = function () {
    Vc(this);
    return this.xb.concat()
};n.Ad = function (a) {
    return Wc(this.ze, a)
};
n.Tz = function (a) {
    for (var b = 0; b < this.xb.length; b++) {
        var c = this.xb[b];
        if (Wc(this.ze, c) && this.ze[c] == a) return i
    }
    return l
};n.Qa = function (a, b) {
    if (this === a) return i;
    if (this.Db != a.$g()) return l;
    var c = b || paa;
    Vc(this);
    for (var d, e = 0; d = this.xb[e]; e++) if (!c(this.get(d), a.get(d))) return l;
    return i
};

function paa(a, b) {
    return a === b
}
n.Df = function () {
    return this.Db == 0
};n.clear = function () {
    this.ze = {};
    this.iu = this.Db = this.xb.length = 0
};
n.remove = function (a) {
    if (Wc(this.ze, a)) {
        delete this.ze[a];
        this.Db--;
        this.iu++;
        this.xb.length > 2 * this.Db && Vc(this);
        return i
    }
    return l
};

function Vc(a) {
    if (a.Db != a.xb.length) {
        for (var b = 0, c = 0; b < a.xb.length;) {
            var d = a.xb[b];
            if (Wc(a.ze, d)) a.xb[c++] = d;
            b++
        }
        a.xb.length = c
    }
    if (a.Db != a.xb.length) {
        var e = {};
        for (c = b = 0; b < a.xb.length;) {
            d = a.xb[b];
            if (!Wc(e, d)) {
                a.xb[c++] = d;
                e[d] = 1
            }
            b++
        }
        a.xb.length = c
    }
}
n.get = function (a, b) {
    if (Wc(this.ze, a)) return this.ze[a];
    return b
};
n.set = function (a, b) {
    if (!Wc(this.ze, a)) {
        this.Db++;
        this.xb.push(a);
        this.iu++
    }
    this.ze[a] = b
};

function Uc(a, b) {
    var c, d;
    if (b instanceof Tc) {
        c = b.Ue();
        d = b.Qb()
    } else {
        c = tb(b);
        d = rb(b)
    }
    for (var e = 0; e < c.length; e++) a.set(c[e], d[e])
}
n.sa = function () {
    return new Tc(this)
};n.Uh = function (a) {
    Vc(this);
    var b = 0,
        c = this.xb,
        d = this.ze,
        e = this.iu,
        g = this,
        h = new Oc;
    h.next = function () {
        for (;;) {
            if (e != g.iu) f(Error("The map has changed since the iterator was created"));
            if (b >= c.length) f(Nc);
            var j = c[b++];
            return a ? j : d[j]
        }
    };
    return h
};

function Wc(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};

function Xc(a) {
    this.a = new Tc;
    a && Yc(this, a)
}
var Zc = "o";

function $c(a) {
    var b = typeof a;
    return b == Ra && a || b == Ua ? Zc + ib(a) : b.substr(0, 1) + a
}
n = Xc.prototype;n.$g = function () {
    return this.a.$g()
};n.add = function (a) {
    this.a.set($c(a), a)
};

function Yc(a, b) {
    for (var c = Qc(b), d = c.length, e = 0; e < d; e++) a.add(c[e])
}
n.remove = function (a) {
    return this.a.remove($c(a))
};n.clear = function () {
    this.a.clear()
};n.Df = function () {
    return this.a.Df()
};n.contains = function (a) {
    return this.a.Ad($c(a))
};n.Qb = function () {
    return this.a.Qb()
};n.sa = function () {
    return new Xc(this)
};
n.Qa = function (a) {
    return this.$g() == Pc(a) && qaa(this, a)
};

function qaa(a, b) {
    var c = Pc(b);
    if (a.$g() > c) return l;
    if (!(b instanceof Xc) && c > 5) b = new Xc(b);
    return oaa(a, function (d) {
        return naa(b, d)
    })
}
n.Uh = function () {
    return this.a.Uh(l)
};

function raa(a, b, c) {
    c = c || La;
    var d = c.onerror;
    c.onerror = function (e, g, h) {
        d && d(e, g, h);
        g = String(g).split(/[\/\\]/).pop();
        a({
            message: e,
            fileName: g,
            t_: h
        });
        return Boolean(b)
    }
}
var saa = "()\n",
    taa = "[exception trying to get caller]\n",
    uaa = "[...long stack...]",
    vaa = "[...reached max depth limit...]",
    waa = "[end]";

function xaa(a) {
    for (var b = [], c = arguments.callee.caller, d = 0; c && (!a || d < a);) {
        b.push(yaa(c));
        b.push(saa);
        try {
            c = c.caller
        } catch (e) {
            b.push(taa);
            break
        }
        d++;
        if (d >= 50) {
            b.push(uaa);
            break
        }
    }
    a && d >= a ? b.push(vaa) : b.push(waa);
    return b.join(v)
}
var zaa = "[Anonymous]";

function yaa(a) {
    a = String(a);
    if (!ad[a]) {
        var b = /function ([^\(]+)/.exec(a);
        ad[a] = b ? b[1] : zaa
    }
    return ad[a]
}
var ad = {};

function bd(a, b) {
    this.x = p(a) ? a : 0;this.y = p(b) ? b : 0
}
bd.prototype.sa = function () {
    return new bd(this.x, this.y)
};

function cd(a, b) {
    this.width = a;
    this.height = b
}
function dd(a, b) {
    if (a == b) return i;
    if (!a || !b) return l;
    return a.width == b.width && a.height == b.height
}
n = cd.prototype;n.sa = function () {
    return new cd(this.width, this.height)
};n.Df = function () {
    return !(this.width * this.height)
};n.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};n.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
n.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};n.scale = Ha(9);
var y = {};y.Yy = l;y.VE = l;y.bF = l;y.Zy = l;y.az = l;y.wn = y.Yy || y.VE || y.Zy || y.bF || y.az;y.XA = function () {
    return La.navigator ? La.navigator.userAgent : k
};y.gw = function () {
    return La.navigator
};
var ed = "Opera",
    fd = "MSIE",
    Aaa = "WebKit",
    Baa = "Mobile",
    Caa = "Gecko";y.jm = function () {
    y.xr = l;
    y.nH = l;
    y.Cv = l;
    y.qH = l;
    y.mH = l;
    var a;
    if (!y.wn && (a = y.XA())) {
        var b = y.gw();
        y.xr = a.indexOf(ed) == 0;
        y.nH = !y.xr && a.indexOf(fd) != -1;
        y.Cv = !y.xr && a.indexOf(Aaa) != -1;
        y.qH = y.Cv && a.indexOf(Baa) != -1;
        y.mH = !y.xr && !y.Cv && b.product == Caa
    }
};y.wn || y.jm();
y.Gc = y.wn ? y.az : y.xr;y.ia = y.wn ? y.Yy : y.nH;y.Ua = y.wn ? y.VE : y.mH;y.La = y.wn ? y.bF || y.Zy : y.Cv;y.pO = y.Zy || y.qH;y.nz = y.La;y.jR = function () {
    var a = y.gw();
    return a && a.platform || v
};y.hz = y.jR();y.ZE = l;y.cF = l;y.YE = l;y.dF = l;y.Cq = y.ZE || y.cF || y.YE || y.dF;
var Daa = "Mac",
    Eaa = "Win",
    Faa = "Linux",
    Gaa = "X11";y.mY = function () {
    y.gR = y.hz.indexOf(Daa) != -1;
    y.hR = y.hz.indexOf(Eaa) != -1;
    y.fR = y.hz.indexOf(Faa) != -1;
    y.iR = !! y.gw() && (y.gw().appVersion || v).indexOf(Gaa) != -1
};y.Cq || y.mY();y.Fc = y.Cq ? y.ZE : y.gR;y.Xk = y.Cq ? y.cF : y.hR;
y.GF = y.Cq ? y.YE : y.fR;y.GP = y.Cq ? y.dF : y.iR;y.kR = function () {
    var a = v,
        b;
    if (y.Gc && La.opera) {
        a = La.opera.version;
        a = typeof a == Ua ? a() : a
    } else {
        if (y.Ua) b = /rv\:([^\);]+)(\)|;)/;
        else if (y.ia) b = /MSIE\s+([^\);]+)(\)|;)/;
        else if (y.La) b = /WebKit\/(\S+)/;
        if (b) a = (a = b.exec(y.XA())) ? a[1] : v
    }
    return a
};y.Mu = y.kR();y.Le = function (a, b) {
    return fc(a, b)
};y.RJ = {};y.Xb = function (a) {
    return y.RJ[a] || (y.RJ[a] = fc(y.Mu, a) >= 0)
};
var z = {};z.ba = {};z.ba.set = function (a, b) {
    a.className = b
};z.ba.get = function (a) {
    return (a = a.className) && typeof a.split == Ua ? a.split(/\s+/) : []
};z.ba.add = function (a) {
    var b = z.ba.get(a),
        c = Cc(arguments, 1);
    c = z.ba.kG(b, c);
    a.className = b.join(x);
    return c
};z.ba.remove = function (a) {
    var b = z.ba.get(a),
        c = Cc(arguments, 1);
    c = z.ba.SL(b, c);
    a.className = b.join(x);
    return c
};z.ba.kG = function (a, b) {
    for (var c = 0, d = 0; d < b.length; d++) if (!sc(a, b[d])) {
        a.push(b[d]);
        c++
    }
    return c == b.length
};
z.ba.SL = function (a, b) {
    for (var c = 0, d = 0; d < a.length; d++) if (sc(b, a[d])) {
        wc(a, d--, 1);
        c++
    }
    return c == b.length
};z.ba.d6 = function (a, b, c) {
    for (var d = z.ba.get(a), e = l, g = 0; g < d.length; g++) if (d[g] == b) {
        wc(d, g--, 1);
        e = i
    }
    if (e) {
        d.push(c);
        a.className = d.join(x)
    }
    return e
};z.ba.O4 = function (a, b, c) {
    var d = z.ba.get(a);
    if (cb(b)) xc(d, b);
    else $a(b) && z.ba.SL(d, b);
    if (cb(c) && !sc(d, c)) d.push(c);
    else $a(c) && z.ba.kG(d, c);
    a.className = d.join(x)
};z.ba.Pd = function (a, b) {
    return sc(z.ba.get(a), b)
};
z.ba.md = function (a, b, c) {
    c ? z.ba.add(a, b) : z.ba.remove(a, b)
};z.ba.i6 = function (a, b) {
    var c = !z.ba.Pd(a, b);
    z.ba.md(a, b, c);
    return c
};z.fN = l;z.aF = l;z.oN = z.fN || z.aF;z.J = function (a) {
    return a ? new gd(z.wb(a)) : z.RQ || (z.RQ = new gd)
};z.Va = function () {
    return document
};z.z = function (a) {
    return cb(a) ? document.getElementById(a) : a
};z.$M = z.z;z.oc = function (a, b, c) {
    return z.NA(document, a, b, c)
};
var hd = "*";z.MA = function (a, b) {
    var c = b || document;
    if (z.Iz(c)) return c.querySelectorAll(Na + a);
    else if (c.getElementsByClassName) return c.getElementsByClassName(a);
    return z.NA(document, hd, a, b)
};
z.nI = function (a, b) {
    var c = b || document,
        d = k;
    return (d = z.Iz(c) ? c.querySelector(Na + a) : z.MA(a, b)[0]) || k
};
var id = "528";z.Iz = function (a) {
    return a.querySelectorAll && a.querySelector && (!y.La || z.So(document) || y.Xb(id))
};
z.NA = function (a, b, c, d) {
    a = d || a;
    b = b && b != hd ? b.toUpperCase() : v;
    if (z.Iz(a) && (b || c)) return a.querySelectorAll(b + (c ? Na + c : v));
    if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
            d = {};
            for (var e = 0, g = 0, h; h = a[g]; g++) if (b == h.nodeName) d[e++] = h;
            d.length = e;
            return d
        } else return a
    }
    a = a.getElementsByTagName(b || hd);
    if (c) {
        d = {};
        for (g = e = 0; h = a[g]; g++) {
            b = h.className;
            if (typeof b.split == Ua && sc(b.split(/\s+/), c)) d[e++] = h
        }
        d.length = e;
        return d
    } else return a
};z.aN = z.oc;
var jd = "style",
    kd = "class",
    ld = "for";
z.oy = function (a, b) {
    qb(b, function (c, d) {
        if (d == jd) a.style.cssText = c;
        else if (d == kd) a.className = c;
        else if (d == ld) a.htmlFor = c;
        else if (d in z.sF) a.setAttribute(z.sF[d], c);
        else a[d] = c
    })
};
var md = "height",
    pd = "width",
    qd = "type";z.sF = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    rowspan: "rowSpan",
    valign: "vAlign",
    height: md,
    width: pd,
    usemap: "useMap",
    frameborder: "frameBorder",
    type: qd
};z.fe = function (a) {
    return z.GI(a || window)
};
var Haa = "500",
    Iaa = "9.50";
z.GI = function (a) {
    var b = a.document;
    if (y.La && !y.Xb(Haa) && !y.pO) {
        if (typeof a.innerHeight == "undefined") a = window;
        b = a.innerHeight;
        var c = a.document.documentElement.scrollHeight;
        if (a == a.top) if (c < b) b -= 15;
        return new cd(a.innerWidth, b)
    }
    a = z.So(b);
    if (y.Gc && !y.Xb(Iaa)) a = l;
    a = a ? b.documentElement : b.body;
    return new cd(a.clientWidth, a.clientHeight)
};z.yS = function () {
    return z.lI(window)
};
z.lI = function (a) {
    var b = a.document,
        c = 0;
    if (b) {
        a = z.GI(a).height;
        c = b.body;
        var d = b.documentElement;
        if (z.So(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
        else {
            b = d.scrollHeight;
            var e = d.offsetHeight;
            if (d.clientHeight != e) {
                b = c.scrollHeight;
                e = c.offsetHeight
            }
            c = b > a ? b > e ? b : e : b < e ? b : e
        }
    }
    return c
};z.u5 = function (a) {
    return z.J((a || La || window).document).hg()
};z.hg = function () {
    return z.mI(document)
};z.mI = function (a) {
    a = z.LA(a);
    return new bd(a.scrollLeft, a.scrollTop)
};z.KA = function () {
    return z.LA(document)
};
z.LA = function (a) {
    return !y.La && z.So(a) ? a.documentElement : a.body
};z.fc = function (a) {
    return a ? z.ZA(a) : window
};z.ZA = function (a) {
    return a.parentWindow || a.defaultView
};z.F = function () {
    return z.vv(document, arguments)
};
var Jaa = ' name="',
    Kaa = ' type="';
z.vv = function (a, b) {
    var c = b[0],
        d = b[1];
    if (y.ia && d && (d.name || d.type)) {
        c = [Tb, c];
        d.name && c.push(Jaa, Vb(d.name), wb);
        if (d.type) {
            c.push(Kaa, Vb(d.type), wb);
            var e = {};
            Bb(e, d);
            d = e;
            delete d.type
        }
        c.push(Ub);
        c = c.join(v)
    }
    c = a.createElement(c);
    if (d) if (cb(d)) c.className = d;
    else z.oy(c, d);
    b.length > 2 && z.oG(a, c, b, 2);
    return c
};z.oG = function (a, b, c, d) {
    function e(h) {
        if (h) b.appendChild(cb(h) ? a.createTextNode(h) : h)
    }
    for (d = d; d < c.length; d++) {
        var g = c[d];
        ab(g) && !z.Qw(g) ? kc(z.tY(g) ? Ac(g) : g,
        e) : e(g)
    }
};z.cN = z.F;z.createElement = function (a) {
    return document.createElement(a)
};
z.createTextNode = function (a) {
    return document.createTextNode(a)
};z.Zz = function (a, b, c) {
    return z.aH(document, a, b, !! c)
};
var rd = "<tr>",
    Laa = "<td>&nbsp;</td>",
    Maa = "<td></td>",
    Naa = "</tr>",
    Oaa = "<table>",
    Paa = "</table>",
    sd = "DIV";z.aH = function (a, b, c, d) {
    for (var e = [rd], g = 0; g < c; g++) e.push(d ? Laa : Maa);
    e.push(Naa);
    e = e.join(v);
    c = [Oaa];
    for (g = 0; g < b; g++) c.push(e);
    c.push(Paa);
    a = a.createElement(sd);
    a.innerHTML = c.join(v);
    return a.removeChild(a.firstChild)
};z.he = function (a) {
    return z.GJ(document, a)
};
var A = "div";
z.GJ = function (a, b) {
    var c = a.createElement(A);
    c.innerHTML = b;
    if (c.childNodes.length == 1) return c.removeChild(c.firstChild);
    else {
        for (var d = a.createDocumentFragment(); c.firstChild;) d.appendChild(c.firstChild);
        return d
    }
};
var td = "CSS1Compat",
    ud = "BackCompat";z.jS = function () {
    return z.Ro() ? td : ud
};z.Ro = function () {
    return z.So(document)
};z.So = function (a) {
    if (z.oN) return z.aF;
    return a.compatMode == td
};
var Qaa = "canHaveChildren",
    Raa = "APPLET",
    Saa = "AREA",
    Taa = "BASE",
    vd = "BR",
    Uaa = "COL",
    Vaa = "FRAME",
    wd = "HR",
    xd = "IMG",
    yd = "INPUT",
    zd = "IFRAME",
    Ad = "ISINDEX",
    Bd = "LINK",
    Cd = "NOFRAMES",
    Waa = "NOSCRIPT",
    Dd = "META",
    Xaa = "OBJECT",
    Yaa = "PARAM",
    Ed = "SCRIPT",
    Fd = "STYLE";z.canHaveChildren = function (a) {
    if (a.nodeType != 1) return l;
    if (Qaa in a) return a.canHaveChildren;
    switch (a.tagName) {
    case Raa:
    case Saa:
    case Taa:
    case vd:
    case Uaa:
    case Vaa:
    case wd:
    case xd:
    case yd:
    case zd:
    case Ad:
    case Bd:
    case Cd:
    case Waa:
    case Dd:
    case Xaa:
    case Yaa:
    case Ed:
    case Fd:
        return l
    }
    return i
};
z.appendChild = function (a, b) {
    a.appendChild(b)
};z.append = function (a) {
    z.oG(z.wb(a), a, arguments, 1)
};z.Jh = function (a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
};z.No = function (a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b)
};z.RB = function (a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
};z.removeNode = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : k
};z.Dt = function (a, b) {
    var c = b.parentNode;
    c && c.replaceChild(a, b)
};
z.aI = function (a) {
    var b, c = a.parentNode;
    if (c && c.nodeType != 11) if (a.removeNode) return a.removeNode(l);
    else {
        for (; b = a.firstChild;) c.insertBefore(b, a);
        return z.removeNode(a)
    }
};z.pd = function (a) {
    return z.hw(a.firstChild, i)
};z.QA = function (a) {
    return z.hw(a.lastChild, l)
};z.jw = function (a) {
    return z.hw(a.nextSibling, i)
};z.BI = function (a) {
    return z.hw(a.previousSibling, l)
};z.hw = function (a, b) {
    for (; a && a.nodeType != 1;) a = b ? a.nextSibling : a.previousSibling;
    return a
};
z.wI = function (a) {
    if (!a) return k;
    if (a.firstChild) return a.firstChild;
    for (; a && !a.nextSibling;) a = a.parentNode;
    return a ? a.nextSibling : k
};z.CI = function (a) {
    if (!a) return k;
    if (!a.previousSibling) return a.parentNode;
    for (a = a.previousSibling; a && a.lastChild;) a = a.lastChild;
    return a
};z.Qw = function (a) {
    return hb(a) && a.nodeType > 0
};
z.contains = function (a, b) {
    if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
    if (typeof a.compareDocumentPosition != "undefined") return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
};
var Gd = "sourceIndex";
z.CQ = function (a, b) {
    if (a == b) return 0;
    if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    if (Gd in a || a.parentNode && Gd in a.parentNode) {
        var c = a.nodeType == 1,
            d = b.nodeType == 1;
        if (c && d) return a.sourceIndex - b.sourceIndex;
        else {
            var e = a.parentNode,
                g = b.parentNode;
            if (e == g) return z.VG(a, b);
            if (!c && z.contains(e, b)) return -1 * z.UG(a, b);
            if (!d && z.contains(g, a)) return z.UG(b, a);
            return (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
        }
    }
    d = z.wb(a);c = d.createRange();c.selectNode(a);c.collapse(i);
    d = d.createRange();d.selectNode(b);d.collapse(i);
    return c.compareBoundaryPoints(La.Range.START_TO_END, d)
};z.UG = function (a, b) {
    var c = a.parentNode;
    if (c == b) return -1;
    for (var d = b; d.parentNode != c;) d = d.parentNode;
    return z.VG(d, a)
};z.VG = function (a, b) {
    for (var c = b; c = c.previousSibling;) if (c == a) return -1;
    return 1
};
z.YH = function () {
    var a, b = arguments.length;
    if (b) {
        if (b == 1) return arguments[0]
    } else return k;
    var c = [],
        d = Infinity;
    for (a = 0; a < b; a++) {
        for (var e = [], g = arguments[a]; g;) {
            e.unshift(g);
            g = g.parentNode
        }
        c.push(e);
        d = Math.min(d, e.length)
    }
    e = k;
    for (a = 0; a < d; a++) {
        g = c[0][a];
        for (var h = 1; h < b; h++) if (g != c[h][a]) return e;
        e = g
    }
    return e
};z.wb = function (a) {
    return a.nodeType == 9 ? a : a.ownerDocument || a.document
};z.Te = function (a) {
    return y.La ? a.document || a.contentWindow.document : a.contentDocument || a.contentWindow.document
};
z.ew = function (a) {
    return a.contentWindow || z.ZA(z.Te(a))
};
var Zaa = "textContent";z.Ud = function (a, b) {
    if (Zaa in a) a.textContent = b;
    else if (a.firstChild && a.firstChild.nodeType == 3) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else {
        z.Jh(a);
        var c = z.wb(a);
        a.appendChild(c.createTextNode(b))
    }
};
var $aa = "outerHTML";z.t5 = function (a) {
    if ($aa in a) return a.outerHTML;
    else {
        var b = z.wb(a).createElement(A);
        b.appendChild(a.cloneNode(i));
        return b.innerHTML
    }
};
z.ZH = function (a, b) {
    var c = [];
    return z.CA(a, b, c, i) ? c[0] : undefined
};z.$H = function (a, b) {
    var c = [];
    z.CA(a, b, c, l);
    return c
};z.CA = function (a, b, c, d) {
    if (a != k) for (var e = 0, g; g = a.childNodes[e]; e++) {
        if (b(g)) {
            c.push(g);
            if (d) return i
        }
        if (z.CA(g, b, c, d)) return i
    }
    return l
};z.$F = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
};
var Hd = "\n";z.Hu = {
    IMG: x,
    BR: Hd
};
var Id = "tabindex";z.NJ = function (a) {
    var b = a.getAttributeNode(Id);
    if (b && b.specified) {
        a = a.tabIndex;
        return fb(a) && a >= 0
    }
    return l
};
var aba = "tabIndex";
z.iE = function (a, b) {
    if (b) a.tabIndex = 0;
    else a.removeAttribute(aba)
};
var bba = "innerText";z.$c = function (a) {
    if (y.ia && bba in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, Hd);
    else {
        var b = [];
        z.UA(a, b, i);
        a = b.join(v)
    }
    a = a.replace(/\xAD/g, v);
    a = a.replace(/ +/g, x);
    if (a != x) a = a.replace(/^\s*/, v);
    return a
};z.x5 = function (a) {
    var b = [];
    z.UA(a, b, l);
    return b.join(v)
};
z.UA = function (a, b, c) {
    if (!(a.nodeName in z.$F)) if (a.nodeType == 3) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, v)) : b.push(a.nodeValue);
    else if (a.nodeName in z.Hu) b.push(z.Hu[a.nodeName]);
    else for (a = a.firstChild; a;) {
        z.UA(a, b, c);
        a = a.nextSibling
    }
};z.xI = function (a) {
    return z.$c(a).length
};z.yI = function (a, b) {
    for (var c = b || z.wb(a).body, d = []; a && a != c;) {
        for (var e = a; e = e.previousSibling;) d.unshift(z.$c(e));
        a = a.parentNode
    }
    return Kb(d.join(v)).replace(/ +/g, x).length
};
z.s5 = function (a, b, c) {
    a = [a];
    for (var d = 0, e; a.length > 0 && d < b;) {
        e = a.pop();
        if (!(e.nodeName in z.$F)) if (e.nodeType == 3) {
            var g = e.nodeValue.replace(/(\r\n|\r|\n)/g, v).replace(/ +/g, x);
            d += g.length
        } else if (e.nodeName in z.Hu) d += z.Hu[e.nodeName].length;
        else for (g = e.childNodes.length - 1; g >= 0; g--) a.push(e.childNodes[g])
    }
    if (hb(c)) {
        c.O5 = e ? e.nodeValue.length + b - d - 1 : 0;c.Qd = e
    }
    return e
};
z.tY = function (a) {
    if (a && typeof a.length == Sa) if (hb(a)) return typeof a.item == Ua || typeof a.item == bb;
    else if (gb(a)) return typeof a.item == Ua;
    return l
};z.hI = function (a, b, c) {
    var d = b ? b.toUpperCase() : k;
    return z.cw(a, function (e) {
        return (!d || e.nodeName == d) && (!c || z.ba.Pd(e, c))
    }, i)
};z.cw = function (a, b, c, d) {
    if (!c) a = a.parentNode;
    c = d == k;
    for (var e = 0; a && (c || e <= d);) {
        if (b(a)) return a;
        a = a.parentNode;
        e++
    }
    return k
};

function gd(a) {
    this.a = a || La.document || document
}
n = gd.prototype;n.J = z.J;n.Va = function () {
    return this.a
};
n.z = function (a) {
    return cb(a) ? this.a.getElementById(a) : a
};n.$M = gd.prototype.z;n.oc = function (a, b, c) {
    return z.NA(this.a, a, b, c)
};n.MA = function (a, b) {
    return z.MA(a, b || this.a)
};n.nI = function (a, b) {
    return z.nI(a, b || this.a)
};n.aN = gd.prototype.oc;n.oy = z.oy;n.fe = function (a) {
    return z.fe(a || this.fc())
};n.yS = function () {
    return z.lI(this.fc())
};n.F = function () {
    return z.vv(this.a, arguments)
};n.cN = gd.prototype.F;n.createElement = function (a) {
    return this.a.createElement(a)
};n.createTextNode = function (a) {
    return this.a.createTextNode(a)
};
n.Zz = function (a, b, c) {
    return z.aH(this.a, a, b, !! c)
};n.he = function (a) {
    return z.GJ(this.a, a)
};n.jS = function () {
    return this.Ro() ? td : ud
};n.Ro = function () {
    return z.So(this.a)
};n.fc = function () {
    return z.ZA(this.a)
};n.KA = function () {
    return z.LA(this.a)
};n.hg = function () {
    return z.mI(this.a)
};n.appendChild = z.appendChild;n.append = z.append;n.Jh = z.Jh;n.No = z.No;n.RB = z.RB;n.removeNode = z.removeNode;n.Dt = z.Dt;n.aI = z.aI;n.pd = z.pd;n.QA = z.QA;n.jw = z.jw;n.BI = z.BI;n.wI = z.wI;n.CI = z.CI;n.Qw = z.Qw;n.contains = z.contains;n.wb = z.wb;
n.Te = z.Te;n.ew = z.ew;n.Ud = z.Ud;n.ZH = z.ZH;n.$H = z.$H;n.$c = z.$c;n.xI = z.xI;n.yI = z.yI;n.hI = z.hI;n.cw = z.cw;z.ie = {};
var Jd = 'javascript:""';z.ie.vn = Jd;z.ie.fP = "border:0;vertical-align:bottom;";
var Kd = "iframe";z.ie.ZG = function (a, b) {
    return a.F(Kd, {
        frameborder: 0,
        style: z.ie.fP + (b || v),
        src: z.ie.vn
    })
};z.ie.P2 = function (a, b) {
    var c = z.Te(a);
    c.open();
    c.write(b);
    c.close()
};
var cba = "<!DOCTYPE html>",
    dba = "<html><head>",
    eba = "</head><body>",
    fba = "</body></html>";z.ie.d5 = function (a, b, c, d, e) {
    var g = z.J(a),
        h = [];
    e || h.push(cba);
    h.push(dba, b, eba, c, fba);
    b = z.ie.ZG(g, d);
    a.appendChild(b);
    z.ie.P2(b, h.join(v));
    return b
};

function Ld(a, b) {
    this.n = b;
    this.f = [];
    if (a > this.n) f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
    for (var c = 0; c < a; c++) this.f.push(this.a ? this.a() : {})
}
s(Ld, t);Ld.prototype.a = k;Ld.prototype.g = k;Ld.prototype.Cc = function () {
    if (this.f.length) return this.f.pop();
    return this.a ? this.a() : {}
};

function Md(a, b) {
    a.f.length < a.n ? a.f.push(b) : Nd(a, b)
}
function Nd(a, b) {
    if (a.g) a.g(b);
    else if (hb(b)) if (gb(b.G)) b.G();
    else for (var c in b) delete b[c]
}
Ld.prototype.q = function () {
    Ld.p.q.call(this);
    for (var a = this.f; a.length;) Nd(this, a.pop());
    delete this.f
};
var Od;

function Pd(a, b) {
    this.type = a;
    this.currentTarget = this.target = b
}
s(Pd, t);n = Pd.prototype;n.q = function () {
    delete this.type;
    delete this.target;
    delete this.currentTarget
};n.ok = l;n.Jp = i;n.stopPropagation = function () {
    this.ok = i
};n.preventDefault = function () {
    this.Jp = l
};

function gba(a) {
    a.preventDefault()
};

function Qd(a, b) {
    a && this.init(a, b)
}
s(Qd, Pd);
var hba = [1, 4, 2];n = Qd.prototype;n.target = k;n.Ve = k;n.aB = 0;n.HI = 0;n.clientX = 0;n.clientY = 0;n.qw = 0;n.sw = 0;n.FT = 0;n.keyCode = 0;n.ow = 0;n.ctrlKey = l;n.ig = l;n.Cd = l;n.fh = l;n.O0 = l;n.Zc = k;
var Rd = "mouseover",
    Sd = "mouseout",
    Td = "keypress";
n.init = function (a, b) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (y.Ua) try {
            d = d.nodeName && d
        } catch (e) {
            d = k
        }
    } else if (c == Rd) d = a.fromElement;
    else if (c == Sd) d = a.toElement;
    this.Ve = d;
    this.aB = a.offsetX !== undefined ? a.offsetX : a.layerX;this.HI = a.offsetY !== undefined ? a.offsetY : a.layerY;this.clientX = a.clientX !== undefined ? a.clientX : a.pageX;this.clientY = a.clientY !== undefined ? a.clientY : a.pageY;this.qw = a.screenX || 0;this.sw = a.screenY || 0;this.FT = a.button;
    this.keyCode = a.keyCode || 0;this.ow = a.charCode || (c == Td ? a.keyCode : 0);this.ctrlKey = a.ctrlKey;this.ig = a.altKey;this.Cd = a.shiftKey;this.fh = a.metaKey;this.O0 = y.Fc ? a.metaKey : a.ctrlKey;this.Zc = a;delete this.Jp;delete this.ok
};
var Ud = "click";

function Vd(a, b) {
    return y.ia ? a.type == Ud ? b == 0 : !! (a.Zc.button & hba[b]) : a.Zc.button == b
}
n.stopPropagation = function () {
    this.ok = i;
    if (this.Zc.stopPropagation) this.Zc.stopPropagation();
    else this.Zc.cancelBubble = i
};
var Wd = "8",
    iba = y.ia && !y.Xb(Wd);
Qd.prototype.preventDefault = function () {
    this.Jp = l;
    var a = this.Zc;
    if (a.preventDefault) a.preventDefault();
    else {
        a.returnValue = l;
        if (iba) try {
            if (a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) a.keyCode = -1
        } catch (b) {}
    }
};Qd.prototype.q = function () {
    Qd.p.q.call(this);
    this.Ve = this.currentTarget = this.target = this.Zc = k
};y.Kc = {};y.Kc.$y = l;
var jba = "ScriptEngine",
    kba = "JScript",
    Xd = "0";y.Kc.jm = function () {
    y.Kc.rF = jba in La && La.ScriptEngine() == kba;
    y.Kc.AN = y.Kc.rF ? La.ScriptEngineMajorVersion() + Na + La.ScriptEngineMinorVersion() + Na + La.ScriptEngineBuildVersion() : Xd
};y.Kc.$y || y.Kc.jm();y.Kc.vq = y.Kc.$y ? l : y.Kc.rF;y.Kc.Mu = y.Kc.$y ? Xd : y.Kc.AN;y.Kc.Xb = function (a) {
    return fc(y.Kc.Mu, a) >= 0
};

function Yd() {}
var lba = 0;n = Yd.prototype;n.key = 0;n.Fp = l;n.Hz = l;
var Zd = "Invalid listener argument";n.init = function (a, b, c, d, e, g) {
    if (gb(a)) this.a = i;
    else if (a && a.handleEvent && gb(a.handleEvent)) this.a = l;
    else f(Error(Zd));
    this.Ch = a;
    this.f = b;
    this.src = c;
    this.type = d;
    this.capture = !! e;
    this.Dw = g;
    this.Hz = l;
    this.key = ++lba;
    this.Fp = l
};n.handleEvent = function (a) {
    if (this.a) return this.Ch.call(this.Dw || this.src, a);
    return this.Ch.handleEvent.call(this.Ch, a)
};
var $d, ae, be, ce, de, ee, fe, ge, he, ie, je, mba = "5.7";
(function () {
    function a() {
        return {
            Db: 0,
            wg: 0
        }
    }
    function b() {
        return []
    }
    function c() {
        function w(C) {
            return h.call(w.src, w.key, C)
        }
        return w
    }
    function d() {
        return new Yd
    }
    function e() {
        return new Qd
    }
    var g = y.Kc.vq && !y.Kc.Xb(mba),
        h;
    ee = function (w) {
        h = w
    };
    if (g) {
        $d = function () {
            return j.Cc()
        };
        ae = function (w) {
            Md(j, w)
        };
        be = function () {
            return m.Cc()
        };
        ce = function (w) {
            Md(m, w)
        };
        de = function () {
            return o.Cc()
        };
        fe = function () {
            Md(o, c())
        };
        ge = function () {
            return q.Cc()
        };
        he = function (w) {
            Md(q, w)
        };
        ie = function () {
            return u.Cc()
        };
        je = function (w) {
            Md(u, w)
        };
        var j = new Ld(0, 600);
        j.a = a;
        var m = new Ld(0, 600);
        m.a = b;
        var o = new Ld(0, 600);
        o.a = c;
        var q = new Ld(0, 600);
        q.a = d;
        var u = new Ld(0, 600);
        u.a = e
    } else {
        $d = a;
        ae = Pa;
        be = b;
        ce = Pa;
        de = c;
        fe = Pa;
        ge = d;
        he = Pa;
        ie = e;
        je = Pa
    }
})();
var ke = {},
    le = {},
    me = {},
    ne = {};

function oe(a, b, c, d, e) {
    if (b) if ($a(b)) {
        for (var g = 0; g < b.length; g++) oe(a, b[g], c, d, e);
        return k
    } else {
        d = !! d;
        var h = le;
        b in h || (h[b] = $d());
        h = h[b];
        if (!(d in h)) {
            h[d] = $d();
            h.Db++
        }
        h = h[d];
        var j = ib(a),
            m;
        h.wg++;
        if (h[j]) {
            m = h[j];
            for (g = 0; g < m.length; g++) {
                h = m[g];
                if (h.Ch == c && h.Dw == e) {
                    if (h.Fp) break;
                    return m[g].key
                }
            }
        } else {
            m = h[j] = be();
            h.Db++
        }
        g = de();
        g.src = a;
        h = ge();
        h.init(c, g, a, b, d, e);
        c = h.key;
        g.key = c;
        m.push(h);
        ke[c] = h;
        me[j] || (me[j] = be());
        me[j].push(h);
        if (a.addEventListener) {
            if (a == La || !a.bH) a.addEventListener(b, g, d)
        } else a.attachEvent(pe(b), g);
        return c
    } else f(Error("Invalid event type"))
}
function qe(a, b, c, d, e) {
    if ($a(b)) {
        for (var g = 0; g < b.length; g++) qe(a, b[g], c, d, e);
        return k
    }
    a = oe(a, b, c, d, e);
    ke[a].Hz = i;
    return a
}
function re(a, b, c, d, e) {
    if ($a(b)) {
        for (var g = 0; g < b.length; g++) re(a, b[g], c, d, e);
        return k
    }
    d = !! d;
    a = se(a, b, d);
    if (!a) return l;
    for (g = 0; g < a.length; g++) if (a[g].Ch == c && a[g].capture == d && a[g].Dw == e) return te(a[g].key);
    return l
}

function te(a) {
    if (!ke[a]) return l;
    var b = ke[a];
    if (b.Fp) return l;
    var c = b.src,
        d = b.type,
        e = b.f,
        g = b.capture;
    if (c.removeEventListener) {
        if (c == La || !c.bH) c.removeEventListener(d, e, g)
    } else c.detachEvent && c.detachEvent(pe(d), e);
    c = ib(c);
    e = le[d][g][c];
    if (me[c]) {
        var h = me[c];
        xc(h, b);
        h.length == 0 && delete me[c]
    }
    b.Fp = i;
    e.kL = i;
    ue(d, g, c, e);
    delete ke[a];
    return i
}

function ue(a, b, c, d) {
    if (!d.vx) if (d.kL) {
        for (var e = 0, g = 0; e < d.length; e++) if (d[e].Fp) {
            var h = d[e].f;
            h.src = k;
            fe(h);
            he(d[e])
        } else {
            if (e != g) d[g] = d[e];
            g++
        }
        d.length = g;
        d.kL = l;
        if (g == 0) {
            ce(d);
            delete le[a][b][c];
            le[a][b].Db--;
            if (le[a][b].Db == 0) {
                ae(le[a][b]);
                delete le[a][b];
                le[a].Db--
            }
            if (le[a].Db == 0) {
                ae(le[a]);
                delete le[a]
            }
        }
    }
}

function nba(a, b, c) {
    var d = 0,
        e = a == k,
        g = b == k,
        h = c == k;
    c = !! c;
    if (e) qb(me, function (m) {
        for (var o = m.length - 1; o >= 0; o--) {
            var q = m[o];
            if ((g || b == q.type) && (h || c == q.capture)) {
                te(q.key);
                d++
            }
        }
    });
    else {
        a = ib(a);
        if (me[a]) {
            a = me[a];
            for (e = a.length - 1; e >= 0; e--) {
                var j = a[e];
                if ((g || b == j.type) && (h || c == j.capture)) {
                    te(j.key);
                    d++
                }
            }
        }
    }
    return d
}
function se(a, b, c) {
    var d = le;
    if (b in d) {
        d = d[b];
        if (c in d) {
            d = d[c];
            a = ib(a);
            if (d[a]) return d[a]
        }
    }
    return k
}
var ve = "on";

function pe(a) {
    if (a in ne) return ne[a];
    return ne[a] = ve + a
}

function we(a, b, c, d, e) {
    var g = 1;
    b = ib(b);
    if (a[b]) {
        a.wg--;
        a = a[b];
        if (a.vx) a.vx++;
        else a.vx = 1;
        try {
            for (var h = a.length, j = 0; j < h; j++) {
                var m = a[j];
                if (m && !m.Fp) g &= xe(m, e) !== l
            }
        } finally {
            a.vx--;
            ue(c, d, b, a)
        }
    }
    return Boolean(g)
}
function xe(a, b) {
    var c = a.handleEvent(b);
    a.Hz && te(a.key);
    return c
}
var oba = "window.event";

function ye(a, b) {
    if (!ke[a]) return i;
    var c = ke[a],
        d = c.type,
        e = le;
    if (!(d in e)) return i;
    e = e[d];
    var g, h;
    if (Od === undefined) Od = y.ia && !La.addEventListener;
    if (Od) {
        g = b || Oa(oba);
        var j = i in e,
            m = l in e;
        if (j) {
            if (g.keyCode < 0 || g.returnValue != undefined) return i;
            a: {
                var o = l;
                if (g.keyCode == 0) try {
                    g.keyCode = -1;
                    break a
                } catch (q) {
                    o = i
                }
                if (o || g.returnValue == undefined) g.returnValue = i
            }
        }
        o = ie();
        o.init(g, this);
        g = i;
        try {
            if (j) {
                for (var u = be(), w = o.currentTarget; w; w = w.parentNode) u.push(w);
                h = e[i];
                h.wg = h.Db;
                for (var C = u.length - 1; !o.ok && C >= 0 && h.wg; C--) {
                    o.currentTarget = u[C];
                    g &= we(h, u[C], d, i, o)
                }
                if (m) {
                    h = e[l];
                    h.wg = h.Db;
                    for (C = 0; !o.ok && C < u.length && h.wg; C++) {
                        o.currentTarget = u[C];
                        g &= we(h, u[C], d, l, o)
                    }
                }
            } else g = xe(c, o)
        } finally {
            if (u) {
                u.length = 0;
                ce(u)
            }
            o.G();
            je(o)
        }
        return g
    }
    d = new Qd(b, this);
    try {
        g = xe(c, d)
    } finally {
        d.G()
    }
    return g
}
ee(ye);

function ze(a) {
    this.f = a
}
s(ze, t);
var Ae = new Ld(0, 100);ze.prototype.C = function (a, b, c, d, e) {
    if ($a(b)) for (var g = 0; g < b.length; g++) this.C(a, b[g], c, d, e);
    else Be(this, oe(a, b, c || this, d || l, e || this.f || this));
    return this
};

function Ce(a, b, c, d, e, g) {
    if ($a(c)) for (var h = 0; h < c.length; h++) Ce(a, b, c[h], d, e, g);
    else Be(a, qe(b, c, d || a, e || l, g || a.f || a));
    return a
}
function Be(a, b) {
    if (a.xb) a.xb[b] = i;
    else if (a.mg) {
        a.xb = Ae.Cc();
        a.xb[a.mg] = i;
        a.mg = k;
        a.xb[b] = i
    } else a.mg = b
}
ze.prototype.a = function (a, b, c, d, e) {
    if (this.mg || this.xb) if ($a(b)) for (var g = 0; g < b.length; g++) this.a(a, b[g], c, d, e);
    else {
        a: {
            c = c || this;
            e = e || this.f || this;
            d = !! (d || l);
            if (a = se(a, b, d)) for (b = 0; b < a.length; b++) if (a[b].Ch == c && a[b].capture == d && a[b].Dw == e) {
                a = a[b];
                break a
            }
            a = k
        }
        if (a) {
            a = a.key;
            te(a);
            if (this.xb) vb(this.xb, a);
            else if (this.mg == a) this.mg = k
        }
    }
    return this
};

function De(a) {
    if (a.xb) {
        for (var b in a.xb) {
            te(b);
            delete a.xb[b]
        }
        Md(Ae, a.xb);
        a.xb = k
    } else a.mg && te(a.mg)
}
ze.prototype.q = function () {
    ze.p.q.call(this);
    De(this)
};
ze.prototype.handleEvent = function () {
    f(Error("EventHandler.handleEvent not implemented"))
};
var Ee = "span",
    Fe = "position: absolute; top: -50000px; white-space:nowrap;";

function Ge() {
    this.a = z.F(Ee, {
        style: Fe
    });
    z.appendChild(z.Va().body, this.a);
    this.f = this.a;
    this.g = {};
    this.n = {};
    this.L = new ze(this)
}
s(Ge, t);Qa(Ge);
var He = "1.9",
    pba = y.Ua && y.Xb(He),
    Ie = 72 / 2.54,
    Je = 72 / 25.4;n = Ge.prototype;n.Bt = k;n.jy = k;n.gm = k;n.Ho = k;n.pD = l;n.nx = 0;

function Le(a, b, c, d) {
    if (b != a.nx) {
        a.nx = b;
        a.pD = b != 0;
        a.Bt = k;
        a.gm && c && Me(a, i, i, d)
    }
}
var qba = "position: absolute; top: -50000px; border: 0; z-index: -50000; width: 50000px",
    Ne = "SPAN",
    rba = "position: absolute; top: -50000px; white-space:nowrap;overflow: hidden",
    Oe = "load";

function Me(a, b, c, d) {
    if (b && (!a.gm || c)) {
        z.removeNode(a.gm);
        c = a.gm = z.F(zd, {
            style: qba,
            frameborder: 0,
            src: z.ie.vn
        });
        var e = z.F(Ne, {
            style: rba
        }, c);
        z.appendChild(z.Va().body, e);
        if ((y.La ? c.document : c.contentDocument) || c.contentWindow && c.contentWindow.document) a.ZI(d);
        else {
            a.Ho = k;
            Ce(a.L, c, Oe, r(a.ZI, a, d))
        }
    }
    a.f = b && a.Ho ? a.Ho : a.a
}
var sba = '<!DOCTYPE html><html><body><span style="position:absolute; white-space:nowrap;',
    tba = " overflow:auto;",
    uba = '"></span></body></html>';
n.ZI = function (a) {
    var b = z.Te(this.gm);
    b.open();
    b.write(sba + (y.ia ? tba : v) + uba);
    b.close();
    this.f = this.Ho = b.body.firstChild;
    a && a()
};
var Pe = '<span style="',
    Qe = '">',
    Re = "</span>";

function Se(a, b, c) {
    var d = a.g,
        e = a.nx;
    d[e] || (d[e] = {});
    d = d[e];
    d[b] || (d[b] = {});
    if (!d[b][c]) {
        e = a.pD ? 50 : 1;a = Te(a, bc(Pe, b, Qe, ac(c, e), Re), i);a.width /= e;d[b][c] = a
    }
    return d[b][c]
}
function Ue(a, b, c) {
    var d = a.n,
        e = a.nx;
    d[e] || (d[e] = {});
    d = d[e];
    if (!d[b]) {
        e = a.pD ? 50 : 1;a = Te(a, ac(b, e), c);a.width /= e;d[b] = a
    }
    return d[b]
}

function Ve(a, b, c) {
    if (pba) {
        a = b.getBoundingClientRect();
        a = a.right - a.left
    } else a = b.offsetWidth;
    return new cd(a, (c ? b.firstChild || b : b).offsetHeight)
}
function Te(a, b, c) {
    a.f.innerHTML = b;
    return Ve(a, a.f, c)
}
function We(a, b) {
    var c = !(y.ia ? !! b.parentElement : !! b.parentNode);
    if (c) {
        a.a.innerHTML = v;
        z.appendChild(a.a, b)
    }
    var d = Ve(a, b);
    c && z.removeNode(b);
    return d
}
function Xe(a, b, c) {
    a = b * Ye(a);
    return c ? a : Math.round(a)
}
var Ze = "1in";

function Ye(a) {
    if (a.Bt) return a.Bt;
    a.a.innerHTML = v;
    a.a.style.width = Ze;
    a.a.style.height = Ze;
    a.Bt = a.a.offsetHeight / 72;
    a.a.style.width = v;
    a.a.style.height = v;
    return a.Bt
}
var $e = "100px",
    af = "scroll";

function bf(a) {
    if (a.jy) return a.jy;
    a.a.innerHTML = v;
    a.a.style.width = $e;
    a.a.style.height = $e;
    a.a.style.overflowY = af;
    a.jy = a.a.offsetWidth - a.a.scrollWidth;
    a.a.style.width = v;
    a.a.style.height = v;
    a.a.style.overflowY = v;
    return a.jy
}
n.q = function () {
    Ge.p.q.call(this);
    this.L.G();
    delete this.L;
    delete this.g;
    delete this.n;
    delete this.a;
    delete this.f;
    delete this.gm;
    delete this.Ho
};
var cf = "en",
    df = "US";

function ef(a) {
    this.X_ = a;
    this.CM = new nb(a.mip || 0, Za(a.map) ? a.map : Number.MAX_VALUE);
    this.g = a.am || 4;
    this.IM = a.bl || v;
    this.FO = !! a.ci;
    this.GA = a.cpn || 0;
    this.rB = a.crn || 0;
    this.r_ = !! a.ccs;
    this.OM = a.csie || [];
    this.P = a.docid;
    this.$u = a.domain || v;
    this.FF = a.durl || v;
    this.ua = a.element;
    this.M = a.email || v;
    this.lb = !! a.emb;
    this.SM = !! a.ear;
    this.IB = !! a.eac;
    this.JD = !! a.ebc;
    this.Cb = !! a.ebk;
    this.U5 = !! a.ecer;
    this.dC = !! a.ecqs;
    this.HF = !! a.ecb;
    this.WM = !! a.ecs;
    this.u = !! a.ec;
    this.YM = !! a.ecsc;
    this.ZM = !! a.ecm;
    this.JO = !! a.ecd;
    this.LO = !! a.ecdx;
    this.eF = !! a.ecsi;
    this.hF = !! a.edm;
    this.jF = !! a.edlr;
    this.MC = !! a.ed;
    this.cc = !! a.edr;
    this.gP = !! a.eeafc;
    this.n = !! a.eeq;
    this.Lu = !! a.eex;
    this.K = !! a.eff;
    this.Wc = !! a.efr;
    this.Ie = !! a.efayt;
    this.aa = !! a.ef;
    this.Oa = !! a.ehf;
    this.tP = !! a.eis;
    this.ZC = !! a.eir;
    this.zP = !! a.eipad;
    this.tF = !! a.ej;
    this.VR = !! a.esco;
    this.DP = !! a.els;
    this.FP = !! a.elis;
    this.vF = !! a.eld;
    this.HP = !! a.em;
    this.yF = !! a.enc;
    this.IP = !! a.ens;
    this.Ya = !! a.epb;
    this.Ou = !! a.epcol;
    this.An = !! a.epset;
    this.JP = !! a.ep;
    this.bN = !! a.epc;
    this.KP = !! a.epf;
    this.pQ = !! a.epps;
    this.nD = !! a.eps;
    this.PQ = !! a.epub;
    this.Aq = !! a.erts;
    this.zF = !! a.erh;
    this.ER = !! a.erd;
    this.Ig = !! a.ertl;
    this.Aa = !! a.er;
    this.Pu = !! a.esvcm;
    this.e6 = !! a.essus;
    this.Qu = !! a.esc;
    this.Ru = !! a.esud;
    this.bY = !! a.est;
    this.Su = !! a.etoc;
    this.Qh = !! a.etrs;
    this.f = !! a.ets;
    this.a = !! a.et;
    this.fY = !! a.etcq;
    this.AF = !! a.etm;
    this.sD = !! a.etr;
    this.xY = !! a.eu;
    this.zY = !! a.eupc;
    this.DF = !! a.ewd;
    this.EF = !! a.ewf;
    this.yD = !! a.ewc;
    this.l6 = !! a.ol;
    this.xa = this.Ig && a.rtl;
    this.f0 = a.mau || v;
    this.L0 = a.mdu || v;
    this.WD = a.ogi || v;
    this.g1 = a.iiu;
    this.OF = a.odu;
    this.Tv = a.psi || v;
    var b = a.l,
        c;
    if (b) c = (c = b.match(/[-_]([a-zA-Z]{2}|\d{3})([-_]|$)/)) ? c[0].replace(/[_-]/g, v) : v;
    else c = v;c = c;this.i1 = b == cf || c == df ? df : c;this.Bq = a.up;this.Dq = a.upd;this.KF = a.ud;this.KD = a.un;this.RF = a.wf || k
}
s(ef, t);ef.prototype.Hv = k;

function ff(a) {
    return a.g
}
ef.prototype.z = function () {
    return this.ua
};

function gf(a) {
    return a.SM
}
function hf(a) {
    return a.Oa
}
function vba(a) {
    return a.IP
}
function jf(a) {
    return a.g != 4
}
ef.prototype.sa = function (a) {
    var b = yb(this.X_);
    if (a) for (var c in a) b[c] = a[c];
    return new ef(b)
};ef.prototype.q = function () {
    ef.p.q.call(this);
    delete this.CM;
    delete this.OM;
    delete this.ua;
    delete this.Hv
};

function lf() {}
s(lf, t);lf.prototype.update = function (a) {
    for (var b in a) {
        var c = a[b];
        p(c) && this.Gb(b, c)
    }
};

function mf(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
mf.prototype.sa = function () {
    return new mf(this.left, this.top, this.width, this.height)
};

function nf(a, b) {
    if (a == b) return i;
    if (!a || !b) return l;
    return a.left == b.left && a.width == b.width && a.top == b.top && a.height == b.height
}
mf.prototype.contains = function (a) {
    return a instanceof mf ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};

function of(a, b) {
    var c = z.wb(a);
    if (c.defaultView && c.defaultView.getComputedStyle) if (c = c.defaultView.getComputedStyle(a, v)) return c[b];
    return k
}
function pf(a, b) {
    return of(a, b) || (a.currentStyle ? a.currentStyle[b] : k) || a.style[b]
}
var qf = "position";

function rf(a) {
    return pf(a, qf)
}
var sf = "left",
    tf = "top";

function uf(a, b, c) {
    var d, e = y.Ua && (y.Fc || y.GP) && y.Xb(He);
    if (b instanceof bd) {
        d = b.x;
        b = b.y
    } else {
        d = b;
        b = c
    }
    vf(sf, e, a, d);
    vf(tf, e, a, b)
}

function wf(a) {
    a = a ? a.nodeType == 9 ? a : z.wb(a) : z.Va();
    if (y.ia && !z.J(a).Ro()) return a.body;
    return a.documentElement
}
function xf(a) {
    var b = a.getBoundingClientRect();
    if (y.ia) {
        a = a.ownerDocument;
        b.left -= a.documentElement.clientLeft + a.body.clientLeft;
        b.top -= a.documentElement.clientTop + a.body.clientTop
    }
    return b
}
var yf = "fixed",
    zf = "absolute",
    Af = "static";

function Bf(a) {
    if (y.ia) return a.offsetParent;
    var b = z.wb(a),
        c = pf(a, qf),
        d = c == yf || c == zf;
    for (a = a.parentNode; a && a != b; a = a.parentNode) {
        c = pf(a, qf);
        d = d && c == Af && a != b.documentElement && a != b.body;
        if (!d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || c == yf || c == zf)) return a
    }
    return k
}
var Cf = "TR";

function Df(a) {
    var b, c = z.wb(a),
        d = pf(a, qf),
        e = y.Ua && c.getBoxObjectFor && !a.getBoundingClientRect && d == zf && (b = c.getBoxObjectFor(a)) && (b.screenX < 0 || b.screenY < 0),
        g = new bd(0, 0),
        h = wf(c);
    if (a == h) return g;
    if (a.getBoundingClientRect) {
        b = xf(a);
        a = z.J(c).hg();
        g.x = b.left + a.x;
        g.y = b.top + a.y
    } else if (c.getBoxObjectFor && !e) {
        b = c.getBoxObjectFor(a);
        a = c.getBoxObjectFor(h);
        g.x = b.screenX - a.screenX;
        g.y = b.screenY - a.screenY
    } else {
        b = a;
        do {
            g.x += b.offsetLeft;
            g.y += b.offsetTop;
            if (b != a) {
                g.x += b.clientLeft || 0;
                g.y += b.clientTop || 0
            }
            if (y.La && rf(b) == yf) {
                g.x += c.body.scrollLeft;
                g.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while (b && b != a);
        if (y.Gc || y.La && d == zf) g.y -= c.body.offsetTop;
        for (b = a;
        (b = Bf(b)) && b != c.body && b != h;) {
            g.x -= b.scrollLeft;
            if (!y.Gc || b.tagName != Cf) g.y -= b.scrollTop
        }
    }
    return g
}
function Ef(a) {
    var b = new bd;
    if (a.nodeType == 1) if (a.getBoundingClientRect) {
        var c = xf(a);
        b.x = c.left;
        b.y = c.top
    } else {
        c = z.J(a).hg();
        a = Df(a);
        b.x = a.x - c.x;
        b.y = a.y - c.y
    } else {
        b.x = a.clientX;
        b.y = a.clientY
    }
    return b
}

function Ff(a, b, c) {
    if (b instanceof cd) {
        c = b.height;
        b = b.width
    } else {
        if (c == undefined) f(Error("missing height argument"));
        c = c
    }
    wba(a, b);
    xba(a, c)
}
var D = "px";

function vf(a, b, c, d) {
    if (typeof d == Sa) d = (b ? Math.round(d) : d) + D;
    c.style[a] = d
}
var xba = kb(vf, md, i),
    wba = kb(vf, pd, i),
    Gf = "10",
    yba = "display",
    Hf = "none",
    Kf = "hidden",
    Lf = "inline";

function Mf(a) {
    var b = y.Gc && !y.Xb(Gf);
    if (pf(a, yba) != Hf) return b ? new cd(a.offsetWidth || a.clientWidth, a.offsetHeight || a.clientHeight) : new cd(a.offsetWidth, a.offsetHeight);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        g = c.position;c.visibility = Kf;c.position = zf;c.display = Lf;
    if (b) {
        b = a.offsetWidth || a.clientWidth;
        a = a.offsetHeight || a.clientHeight
    } else {
        b = a.offsetWidth;
        a = a.offsetHeight
    }
    c.display = d;c.position = g;c.visibility = e;
    return new cd(b, a)
}
var Nf = {},
    zba = "opacity",
    Aba = "MozOpacity",
    Bba = "filter",
    Cba = "alpha(opacity=",
    Of = ")";

function Pf(a, b) {
    var c = a.style;
    if (zba in c) c.opacity = b;
    else if (Aba in c) c.MozOpacity = b;
    else if (Bba in c) c.filter = b === v ? v : Cba + b * 100 + Of
}
function Qf(a, b) {
    a.style.display = b ? v : Hf
}
var Rf = y.Ua ? "MozUserSelect" : y.La ? "WebkitUserSelect" : k,
    Dba = "-$1",
    Sf = ":",
    Tf = ";";

function Uf(a) {
    var b = [];
    qb(a, function (c, d) {
        b.push(Nf[d] || (Nf[d] = d.replace(/([A-Z])/g, Dba).toLowerCase()), Sf, c, Tf)
    });
    return b.join(v)
};

function Vf() {}
s(Vf, lf);n = Vf.prototype;n.Uc = function (a) {
    var b = {};
    for (var c in a) {
        var d;
        if (this.oh(c)) {
            var e = this.ea(c);
            d = k;
            if (e) {
                d = a[c];
                d = Za(d) ? e.Uc(d) : e.Z()
            }
        } else d = this.ea(c);
        b[c] = d
    }
    return b
};n.ea = function () {};n.oh = function () {
    return l
};n.mf = function (a) {
    for (var b in a) {
        var c = this.ea(b);
        if (this.oh(b)) {
            if (!c.mf(a[b])) return l
        } else if (c != a[b]) return l
    }
    return i
};n.Qa = function (a) {
    if (!a) return l;
    if (this == a) return i;
    return this.mf(a.Z())
};

function Wf() {
    this.a = []
}
s(Wf, Vf);n = Wf.prototype;n.Qb = function () {
    return this.a
};
var Xf = "cv";n.Uc = function (a) {
    for (var b in a) switch (b) {
    case Xf:
        return Eba(this, a[b])
    }
    return {}
};
var Yf = "delete",
    Zf = "insert",
    $f = "reference",
    ag = "set";

function Eba(a, b) {
    var c = b.opIndex,
        d = b.opValue;
    switch (b.op) {
    case Yf:
        d = a.fE(a.a[c]);
        return bg(Zf, c, d);
    case Zf:
        return cg(c);
    case $f:
        d = a.a[c].Uc(d);
        return dg(c, d);
    case ag:
        return a.Z()
    }
    return {}
}
n.ea = function (a) {
    switch (a) {
    case Xf:
        return this.a
    }
};
n.eq = function (a) {
    a = a || 1;
    if (a == 1) return Ac(this.a);
    else {
        for (var b = [], c = 0; c < this.a.length; c++) b.push(this.a[c].eq(a - 1));
        return b
    }
};n.mf = function (a) {
    for (var b in a) switch (b) {
    case Xf:
        return Fba(this, a[b])
    }
    return l
};
n.Gb = function (a, b) {
    switch (a) {
    case Xf:
        var c = b.opIndex,
            d = b.opValue;
        switch (b.op) {
        case Yf:
            if (!yc(this.a, c) && 0) f(Error("Invalid index for delete: " + c));
            break;
        case Zf:
            var e = this.Bv(d);
            wc(this.a, c, 0, e);
            break;
        case $f:
            c < this.a.length && this.a[c].update(d);
            break;
        case ag:
            tc(this.a);
            for (c = 0; c < d.length; c++) {
                e = this.Bv(d[c]);
                this.a.push(e)
            }
            break
        }
        break
    }
};n.Z = function () {
    var a = nc(this.a, this.fE, this);
    return bg(ag, undefined, a)
};

function Fba(a, b) {
    var c = b.opIndex,
        d = b.opValue;
    switch (b.op) {
    case Yf:
    case Zf:
        return l;
    case $f:
        return a.a[c].mf(d);
    case ag:
        c = a.a;
        if (d.length != c.length) return l;
        for (var e = 0; e < c.length; e++) if (!a.NH(c[e], d[e])) return l;
        return i;
    default:
        return l
    }
}
n.NH = function (a, b) {
    return a == this.Bv(b)
};n.Bv = function (a) {
    return a
};n.fE = function (a) {
    return a
};n.vH = function () {};n.q = function () {
    Wf.p.q.call(this);
    for (var a = 0; a < this.a.length; a++) this.vH(this.a[a]);
    delete this.a
};

function bg(a, b, c) {
    var d = {};
    d.op = a;
    if (Za(b)) d.opIndex = b;
    if (Za(c)) d.opValue = c;
    a = {};
    a.cv = d;
    return a
}
function dg(a, b) {
    for (var c = $a(a) ? a : [a],
        d = c.length - 1;d >= 0;d--) b = bg($f, c[d], b);
    return b
}
function cg(a) {
    return bg(Yf, a)
};

function eg(a) {
    this.a = [];
    this.f = a
}
s(eg, Wf);n = eg.prototype;n.NH = function (a, b) {
    return a.mf(b)
};n.Bv = function (a) {
    return this.f(a)
};n.fE = function (a) {
    return a.Z()
};n.vH = function (a) {
    a.G()
};n.q = function () {
    eg.p.q.call(this);
    delete this.f
};

function fg(a) {
    this.V = a
}
s(fg, t);

function gg(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = i;
    return b
}
var hg = "\uefff",
    ig = "\ueffe",
    jg = "\u0003",
    kg = "\u0010",
    lg = "\u0012",
    mg = "\u001c",
    ng = "\u0011",
    og = [hg, ig, Hd, jg, kg, lg, mg, ng],
    pg = gg(og),
    qg = "\u001d",
    rg = "\u001e",
    sg = "\u001b",
    ug = "\u0019",
    vg = "\u001f",
    wg = "\u001a",
    xg = "\u000c",
    Gba = gg([hg, ig, qg, rg, sg, ug, vg, wg, xg, Hd, jg, mg, ng, lg, kg]),
    yg = RegExp("[\u0000-\u0008\n\u000c-\u001f\ue000-\uf8ff]", ec),
    zg = gg([hg, ig, jg, kg, lg, mg, ng]),
    Hba = "For performance reasons, get indices of markers that are not paragraph markers or are not being tracked in the marker index cache is not allowed.";
fg.prototype.f = function (a) {
    a != Hd && this.V.log(Error(Hba));
    return Ag(this, a, 0, Bg(this) - 1)
};

function Ag(a, b, c, d) {
    var e = [];
    for (c = c; c <= d; c++) {
        c = a.indexOf(b, c);
        if (c == -1 || c > d) break;
        e.push(c)
    }
    return e
}
function Cg(a, b) {
    if (b > Bg(a) - 1) return Dg(a, Bg(a) - 1) + 1;
    if (b <= 1) return 1;
    var c = a.lastIndexOf(Hd, b - 1);
    for (c = Math.max(c, 0); c < b - 1 && pg[E(a, c + 1)];) c++;
    return c + 1
}
var Iba = "Should not call getParagraphEndIndex with an index past the last spacer index.";

function Eg(a, b) {
    var c = Bg(a) - 1;
    b > c && a.V.log(Error(Iba));
    var d = a.indexOf(Hd, b);
    return d == -1 || d > c ? c : d
}
var Jba = "Should not call getStartOfSection with an out of bounds spacer index: ";

function Dg(a, b) {
    if (b < 0 || b > Bg(a)) {
        a.V.log(Error(Jba + b));
        return 0
    }
    return a.lastIndexOf(jg, b)
}
var Kba = "Cannot check for paragraph start with an out of bounds spacer index: ";

function Fg(a, b) {
    if (b < 1) {
        a.V.log(Error(Kba + b));
        return l
    }
    for (var c = b - 1; c >= 0; c--) if (Gg(a, c)) return Hg(a, c);
    return i
}

function Hg(a, b) {
    return E(a, b) == Hd
}
function Gg(a, b) {
    return !zg[E(a, b)]
}
var Ig = "\u000b",
    Jg = "\t";

function Kg(a) {
    return a == Hd || a == Ig || a == Jg || a == x
}
var Lg = "[",
    Mg = "]";

function Ng(a, b) {
    return a.length > 0 ? RegExp(Lg + $b(a.join(v)) + Mg, b ? v : ec) : k
}
fg.prototype.q = function () {
    fg.p.q.call(this);
    delete this.V
};

function Og(a, b, c) {
    return mc(a, function (d) {
        return Ec(b, d, c) < 0
    })
}
function Pg(a, b, c) {
    for (var d in a) if (d.length != 0) {
        var e = Number(d);
        if (!isNaN(e)) if (b.call(c, e, a[e], a)) return
    }
}
function Qg(a) {
    var b = [];
    Pg(a, function (c) {
        b.push(c);
        return l
    });
    Gc(b);
    return b
}
function Rg(a, b, c) {
    var d = [];
    Pg(a, function (e, g, h) {
        d[e >= b ? e + c : e] = h[e];
        return l
    });
    return d
};

function Sg(a) {
    this.a = a
}
s(Sg, Vf);
var Tg = "autogen",
    Ug = "cell",
    Xg = "comment",
    Yg = "document",
    Zg = "equation",
    $g = "equation_function",
    ah = "footnote",
    bh = "horizontal_rule",
    ch = "link",
    dh = "list",
    eh = "paragraph",
    fh = "row",
    gh = "spellcheck",
    hh = "tbl",
    ih = "text",
    jh = {
        Z2: Tg,
        g3: Ug,
        l3: Xg,
        p3: Yg,
        r3: Zg,
        s3: $g,
        x3: ah,
        E3: bh,
        lO: ch,
        S3: dh,
        m4: eh,
        r4: fh,
        w4: gh,
        z4: hh,
        TEXT: ih
    },
    kh = {},
    lh = {},
    mh = {},
    nh = [],
    oh = {};n = Sg.prototype;n.O = function () {
    return this.a
};n.fg = function () {
    return []
};n.cf = function () {
    return l
};n.Uo = function () {
    return l
};n.hK = function () {
    return l
};
n.Xu = function () {
    return i
};n.Nj = function () {
    return i
};n.Uq = function () {
    return i
};

function ph(a) {
    oh[a.a] || (oh[a.a] = a.be());
    return oh[a.a]
}
n.Yr = function () {
    return []
};n.mm = function (a, b) {
    var c = this.ea(a);
    return this.oh(a) ? c.Qa(b) : c == b
};n.Qa = function (a) {
    if (!a) return l;
    if (this == a) return i;
    if (this.O() != a.O()) return l;
    for (var b = ph(this), c = 0; c < b.length; c++) {
        var d = b[c];
        if (!this.mm(d, a.ea(d))) return l
    }
    return i
};

function Lba(a, b) {
    var c, d = k;
    Pg(a, function (e, g) {
        if (d) {
            for (var h = d, j = c || h.Z(), m = ph(h), o = 0; o < m.length; o++) {
                var q = m[o];
                h.mm(q, g.ea(q)) || (j[q] = undefined)
            }
            c = j
        } else {
            d = g;
            if (b) {
                h = d;
                j = ph(h);
                for (m = 0; m < j.length; m++) {
                    o = j[m];
                    if (h.oh(o) || !h.mm(o, b[o])) b[o] = undefined
                }
                h = b
            } else h = d.Z();
            c = h
        }
        return l
    });
    return c || {}
}
function qh(a) {
    var b = a();
    kh[b.O()] = b;
    lh[b.O()] = a;
    if (b.cf()) {
        b = b.fg();
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            if (!mh[d]) {
                nh.push(d);
                mh[d] = []
            }
            mh[d].push(a)
        }
    }
}

function rh(a) {
    var b = lh[a];
    if (!b) f(Error("The style for type: " + a + " is not registered."));
    return b()
}
function sh(a) {
    return (a = kh[a]) ? a.cf() : i
}
function th(a) {
    return (a = kh[a]) ? a.hK() : l
}
function vh(a) {
    if (!a) return l;
    var b = kh[a.O()];
    return b ? b.Qa(a) : l
};

function wh(a) {
    this.update(a)
}
s(wh, Vf);n = wh.prototype;n.Os = 0;n.Mm = 0;n.ii = function () {
    return this.Os
};

function xh(a) {
    return Xe(Ge.N(), a.Mm)
}
function yh(a) {
    var b = Ge.N();
    a = a / Ye(b);
    return Xe(b, (Math.floor(a / 36) + 1) * 36)
}
var zh = "tbs_al",
    Ah = "tbs_of";n.Gb = function (a, b) {
    switch (a) {
    case zh:
        this.Os = b;
        break;
    case Ah:
        this.Mm = b;
        break
    }
};n.ea = function (a) {
    switch (a) {
    case zh:
        return this.Os;
    case Ah:
        return this.Mm
    }
};n.Uc = function (a) {
    var b = {};
    for (var c in a) switch (c) {
    case zh:
        b[c] = this.Os;
        break;
    case Ah:
        b[c] = this.Mm;
        break
    }
    return b
};
n.Z = function () {
    var a = {};
    a.tbs_al = this.Os;
    a.tbs_of = this.Mm;
    return a
};

function Mba(a) {
    return new wh(a)
};

function Bh(a) {
    this.a = eh;
    this.n = new eg(Mba);
    this.f = Ch;
    this.update(a || {})
}
s(Bh, Sg);
var Dh = "ps_al",
    Eh = "ps_hd",
    Fh = "ps_hdid",
    Gh = "ps_ifl",
    Hh = "ps_il",
    Ih = "ps_ir",
    Jh = "ps_ls",
    Kh = "ps_ltr",
    Lh = "ps_sa",
    Mh = "ps_sb",
    Nh = "ps_ts",
    Nba = {
        W2: Dh,
        C3: Eh,
        D3: Fh,
        I3: Gh,
        J3: Hh,
        G3: Ih,
        Q3: Jh,
        U3: Kh,
        u4: Lh,
        v4: Mh,
        A4: Nh
    },
    Ch = i;n = Bh.prototype;n.Ns = 0;n.kh = 0;n.Go = v;n.Ei = 0;n.Uj = 0;n.zs = 0;n.$s = 1.15;n.Vp = 0;n.Ut = 0;n.fg = function () {
    return [Hd]
};n.cf = function () {
    return i
};n.Uo = function () {
    return i
};

function Oh(a) {
    switch (a.Ns) {
    case 1:
        return 1;
    case 3:
        return 3;
    case 0:
        return a.f ? 0 : 2;
    case 2:
        return a.f ? 2 : 0;
    default:
        return 0
    }
}
n.ii = function () {
    return this.Ns
};

function Ph(a) {
    return Xe(Ge.N(), a.Ei)
}
function Qh(a) {
    return Xe(Ge.N(), a.Uj)
}
function Rh(a) {
    return Xe(Ge.N(), a.zs)
}
function Sh(a) {
    return a.f
}
function Th(a) {
    return a.n.Qb()
}
n.Gb = function (a, b) {
    switch (a) {
    case Dh:
        this.Ns = b;
        break;
    case Eh:
        this.kh = b;
        break;
    case Fh:
        this.Go = b;
        break;
    case Gh:
        this.Ei = b;
        break;
    case Hh:
        this.Uj = b;
        break;
    case Ih:
        this.zs = b;
        break;
    case Jh:
        this.$s = b;
        break;
    case Kh:
        this.f = b;
        break;
    case Lh:
        this.Vp = b;
        break;
    case Mh:
        this.Ut = b;
        break;
    case Nh:
        this.n.update(b);
        break
    }
    return k
};
n.Z = function () {
    var a = {};
    a.ps_al = this.Ns;
    a.ps_hd = this.kh;
    a.ps_hdid = this.Go;
    a.ps_ifl = this.Ei;
    a.ps_il = this.Uj;
    a.ps_ir = this.zs;
    a.ps_ltr = this.f;
    a.ps_ls = this.$s;
    a.ps_sa = this.Vp;
    a.ps_sb = this.Ut;
    a.ps_ts = this.n.Z();
    return a
};
n.ea = function (a) {
    switch (a) {
    case Dh:
        return this.Ns;
    case Eh:
        return this.kh;
    case Fh:
        return this.Go;
    case Gh:
        return this.Ei;
    case Hh:
        return this.Uj;
    case Ih:
        return this.zs;
    case Jh:
        return this.$s;
    case Kh:
        return this.f;
    case Lh:
        return this.Vp;
    case Mh:
        return this.Ut;
    case Nh:
        return this.n
    }
    return Bh.p.ea.call(this, a)
};n.oh = function (a) {
    return a == Nh
};n.be = function () {
    return rb(Nba)
};n.sa = function () {
    return new Bh(this.Z())
};n.q = function () {
    Bh.p.q.call(this);
    this.n.G();
    delete this.n
};qh(function () {
    return new Bh
});

function Uh(a) {
    this.a = ih;
    this.update(a || {})
}
s(Uh, Sg);
var Vh = "ts_bgc",
    Wh = "ts_bd",
    Xh = "ts_fgc",
    Yh = "ts_ff",
    Zh = "ts_fs",
    $h = "ts_it",
    ai = "ts_st",
    bi = "ts_un",
    ci = "ts_va",
    Oba = {
        gN: Vh,
        Ok: Wh,
        z3: Xh,
        sq: Yh,
        tq: Zh,
        Qk: $h,
        Gq: ai,
        Vk: bi,
        BP: ci
    };n = Uh.prototype;n.gl = l;n.Wo = k;
var di = "#000000";n.Mr = di;
var ei = "Arial";n.eo = ei;n.eg = 11;n.Oj = l;n.Vt = l;n.bu = l;
var gi = "nor";n.wm = gi;n.rf = k;n.Tr = function () {
    return this.eo
};

function hi(a) {
    return a.wm != gi ? a.eg * 0.6 : a.eg
}
n.po = function () {
    return this.wm
};

function ii(a) {
    if (!a.rf) a.rf = Uf(ji(a));
    return a.rf
}
var ki = "pt",
    li = "transparent",
    F = "bold",
    G = "normal",
    J = "italic",
    mi = "underline",
    Pba = "line-through",
    Qba = "baseline",
    ni = "sub",
    oi = "sup",
    Rba = "super";

function ji(a) {
    var b = {};
    b.fontSize = hi(a) + ki;
    b.fontFamily = a.eo;
    b.color = a.Mr;
    b.backgroundColor = a.Wo == k ? li : a.Wo;b.fontWeight = a.gl ? F : G;b.fontStyle = a.Oj ? J : G;
    var c = [];a.bu && c.push(mi);a.Vt && c.push(Pba);b.textDecoration = c.length > 0 ? c.join(x) : Hf;
    switch (a.wm) {
    case gi:
        b.verticalAlign = Qba;
        break;
    case ni:
        b.verticalAlign = ni;
        break;
    case oi:
        b.verticalAlign = Rba;
        break
    }
    return b
}
n.Gb = function (a, b) {
    switch (a) {
    case Vh:
        if (this.Wo != b) {
            this.Wo = b;
            this.rf = k
        }
        break;
    case Wh:
        if (this.gl != b) {
            this.gl = b;
            this.rf = k
        }
        break;
    case Xh:
        if (this.Mr != b) {
            this.Mr = b;
            this.rf = k
        }
        break;
    case Yh:
        if (this.eo != b) {
            this.eo = b;
            this.rf = k
        }
        break;
    case Zh:
        if (this.eg != b) {
            this.eg = b;
            this.rf = k
        }
        break;
    case $h:
        if (this.Oj != b) {
            this.Oj = b;
            this.rf = k
        }
        break;
    case ai:
        if (this.Vt != b) {
            this.Vt = b;
            this.rf = k
        }
        break;
    case bi:
        if (this.bu != b) {
            this.bu = b;
            this.rf = k
        }
        break;
    case ci:
        if (this.wm != b) {
            this.wm = b;
            this.rf = k
        }
        break;
    default:
        break
    }
};
n.Z = function () {
    var a = {};
    a.ts_bgc = this.Wo;
    a.ts_bd = this.gl;
    a.ts_fgc = this.Mr;
    a.ts_fs = this.eg;
    a.ts_ff = this.eo;
    a.ts_it = this.Oj;
    a.ts_st = this.Vt;
    a.ts_un = this.bu;
    a.ts_va = this.wm;
    return a
};n.ea = function (a) {
    switch (a) {
    case Vh:
        return this.Wo;
    case Wh:
        return this.gl;
    case Xh:
        return this.Mr;
    case Yh:
        return this.eo;
    case Zh:
        return this.eg;
    case $h:
        return this.Oj;
    case ai:
        return this.Vt;
    case bi:
        return this.bu;
    case ci:
        return this.wm
    }
    return Uh.p.ea.call(this, a)
};n.be = function () {
    return rb(Oba)
};
n.Qa = function (a) {
    if (!a) return l;
    if (this == a) return i;
    if (this.O() != a.O()) return l;
    return ii(this) == ii(a)
};n.sa = function () {
    return new Uh(this.Z())
};

function pi() {
    var a = {};
    a.ts_un = l;
    a.ts_fgc = di;
    return a
}
qh(function () {
    return new Uh
});

function qi(a) {
    this.a = new Uh;
    this.update(a)
}
s(qi, lf);
var Sba = [3, 5, 7],
    Tba = [0, 1, 2];n = qi.prototype;n.Fj = 0;n.pC = 0;n.qC = 0;n.Ay = 1;

function ri(a) {
    return a.Fj
}
function si(a) {
    switch (a.Fj) {
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
        return i;
    default:
        return l
    }
}
var ti = "b_gt",
    ui = "b_ts",
    vi = "b_ifl",
    wi = "b_il",
    xi = "b_sn";n.Gb = function (a, b) {
    switch (a) {
    case ti:
        this.Fj = b;
        break;
    case ui:
        this.a.update(b);
        break;
    case vi:
        this.pC = b;
        break;
    case wi:
        this.qC = b;
        break;
    case xi:
        this.Ay = b;
        break
    }
};
n.Uc = function (a) {
    var b = {};
    for (var c in a) switch (c) {
    case ti:
        b.b_gt = this.Fj;
        break;
    case ui:
        b.b_ts = this.a.Z();
        break;
    case vi:
        b.b_ifl = this.pC;
        break;
    case wi:
        b.b_il = this.qC;
        break;
    case xi:
        b.b_sn = this.Ay;
        break
    }
    return b
};n.Z = function () {
    var a = {};
    a.b_gt = this.Fj;
    a.b_ts = this.a.Z();
    a.b_ifl = this.pC;
    a.b_il = this.qC;
    a.b_sn = this.Ay;
    return a
};n.q = function () {
    qi.p.q.call(this);
    this.a.G();
    delete this.a
};

function yi() {
    this.L = new ze(this);
    this.a = {}
}
s(yi, t);
var zi = "document-creation";yi.prototype.ij = function (a) {
    if (this.Wa && Ai(this.Wa)) a.la(i, zi);
    else {
        this.a[a.ma()] = a;
        a.la(l, zi)
    }
};yi.prototype.f = function () {
    for (var a in this.a) this.a[a].la(i, zi)
};yi.prototype.q = function () {
    yi.p.q.call(this);
    this.L.G();
    delete this.L;
    delete this.Wa;
    delete this.a
};

function Bi() {
    this.a = [];
    this.f = {}
}
s(Bi, t);n = Bi.prototype;n.mg = 1;n.Xx = 0;n.Za = function (a, b, c) {
    var d = this.f[a];
    d || (d = this.f[a] = []);
    var e = this.mg;
    this.a[e] = a;
    this.a[e + 1] = b;
    this.a[e + 2] = c;
    this.mg = e + 3;
    d.push(e);
    return e
};n.of = function (a, b, c) {
    if (a = this.f[a]) {
        var d = this.a;
        if (a = qc(a, function (e) {
            return d[e + 1] == b && d[e + 2] == c
        })) return this.jq(a)
    }
    return l
};
n.jq = function (a) {
    if (this.Xx != 0) {
        if (!this.g) this.g = [];
        this.g.push(a);
        return l
    }
    var b = this.a[a];
    if (b) {
        var c = this.f[b];
        c && xc(c, a);
        delete this.a[a];
        delete this.a[a + 1];
        delete this.a[a + 2]
    }
    return !!b
};n.Wx = function (a) {
    var b = this.f[a];
    if (b) {
        this.Xx++;
        for (var c = Cc(arguments, 1), d = 0, e = b.length; d < e; d++) {
            var g = b[d];
            this.a[g + 1].apply(this.a[g + 2], c)
        }
        this.Xx--;
        if (this.g && this.Xx == 0) for (; b = this.g.pop();) this.jq(b);
        return d != 0
    }
    return l
};
n.clear = function (a) {
    if (a) {
        var b = this.f[a];
        if (b) {
            kc(b, this.jq, this);
            delete this.f[a]
        }
    } else {
        this.a.length = 0;
        this.f = {}
    }
};n.$g = function (a) {
    if (a) {
        var b = this.f[a];
        return b ? b.length : 0
    }
    a = 0;
    for (b in this.f) a += this.$g(b);
    return a
};n.q = function () {
    Bi.p.q.call(this);
    delete this.a;
    delete this.f;
    delete this.g
};
var Ci = "default";

function Di(a, b) {
    this.n = a;
    this.g = {};
    this.f = b ? yb(b) : {};this.Ab() || (this.g[Ci] = i);this.a = new Bi
}
s(Di, t);
var Ei = l;n = Di.prototype;n.q = function () {
    Di.p.q.call(this);
    this.a.G();
    delete this.a;
    delete this.f
};n.ma = function () {
    return this.n
};
var Fi = "enabled";n.Ab = function () {
    return !!this.pc(Fi)
};n.la = function (a, b) {
    var c = b || Ci,
        d = i;
    if (a) {
        delete this.g[c];
        for (var e in this.g) {
            d = l;
            break
        }
    } else {
        this.g[c] = i;
        d = l
    }
    this.setProperty(Fi, d)
};
var Gi = "visible";n.Da = function () {
    return !!this.pc(Gi)
};
n.X = function (a) {
    this.setProperty(Gi, a)
};
var Hi = "selected";

function Ii(a) {
    return !!a.pc(Hi)
}
n.hd = function (a) {
    this.setProperty(Hi, a)
};
var Ji = "keys";n.Ue = function () {
    return this.pc(Ji)
};
var Ki = "value";n.ea = function () {
    return this.pc(Ki)
};n.zb = function (a) {
    this.setProperty(Ki, a)
};n.pc = function (a) {
    return this.f[a]
};
var Li = "change";n.setProperty = function (a, b) {
    var c = this.f[a];
    if (b != c) {
        this.f[a] = b;
        this.a.Wx(Li, a, b, c)
    }
};
var Mi = "action";

function Ni(a, b) {
    a.Ab() && !Ei && a.a.Wx(Mi, b)
}
n.Za = function (a, b, c) {
    return this.a.Za(a, b, c)
};n.of = function (a, b, c) {
    return this.a.of(a, b, c)
};n.jq = function (a) {
    return this.a.jq(a)
};
var Oi = "radio";

function Uba(a, b) {
    kc(a, function (c) {
        b && c.setProperty(Oi, i);
        c.Za(Li, function (d, e) {
            d == Hi && e && kc(a, function (g) {
                g != c && g.hd(l)
            })
        })
    })
};

function Pi() {}
s(Pi, t);n = Pi.prototype;n.bH = i;n.vp = k;n.kE = function (a) {
    this.vp = a
};n.addEventListener = function (a, b, c, d) {
    oe(this, a, b, c, d)
};n.removeEventListener = function (a, b, c, d) {
    re(this, a, b, c, d)
};
n.dispatchEvent = function (a) {
    a = a;
    if (cb(a)) a = new Pd(a, this);
    else if (a instanceof Pd) a.target = a.target || this;
    else {
        var b = a;
        a = new Pd(a.type, this);
        Bb(a, b)
    }
    b = 1;
    var c, d = a.type,
        e = le;
    if (d in e) {
        e = e[d];
        d = i in e;
        var g;
        if (d) {
            c = [];
            for (g = this; g; g = g.vp) c.push(g);
            g = e[i];
            g.wg = g.Db;
            for (var h = c.length - 1; !a.ok && h >= 0 && g.wg; h--) {
                a.currentTarget = c[h];
                b &= we(g, c[h], a.type, i, a) && a.Jp != l
            }
        }
        if (l in e) {
            g = e[l];
            g.wg = g.Db;
            if (d) for (h = 0; !a.ok && h < c.length && g.wg; h++) {
                a.currentTarget = c[h];
                b &= we(g, c[h], a.type, l, a) && a.Jp != l
            } else for (c = this; !a.ok && c && g.wg; c = c.vp) {
                a.currentTarget = c;
                b &= we(g, c, a.type, l, a) && a.Jp != l
            }
        }
        a = Boolean(b)
    } else a = i;
    return a
};n.q = function () {
    Pi.p.q.call(this);
    nba(this);
    this.vp = k
};
var Qi = "525";

function Vba(a, b, c, d, e) {
    if (!y.ia && !(y.La && y.Xb(Qi))) return i;
    if (y.Fc && e) return Ri(a);
    if (e && !d) return l;
    if (!c && (b == 17 || b == 18)) return l;
    if (y.ia && d && b == a) return l;
    switch (a) {
    case 13:
        return i;
    case 27:
        return !y.La
    }
    return Ri(a)
}

function Ri(a) {
    if (a >= 48 && a <= 57) return i;
    if (a >= 96 && a <= 106) return i;
    if (a >= 65 && a <= 90) return i;
    if (y.La && a == 0) return i;
    switch (a) {
    case 32:
    case 63:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 189:
    case 187:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
        return i;
    default:
        return l
    }
};
var Si = "backspace",
    Ti = "tab",
    Ui = "enter",
    Vi = "shift",
    Wi = "ctrl",
    Xi = "alt",
    Yi = "space",
    Zi = "end",
    $i = "right",
    aj = "1",
    bj = "2",
    cj = "3",
    dj = "4",
    ej = "5",
    fj = "6",
    gj = "7",
    hj = "9",
    ij = "a",
    jj = "b",
    kj = "c",
    lj = "d",
    mj = "e",
    nj = "f",
    oj = "h",
    pj = "i",
    qj = "j",
    rj = "k",
    sj = "l",
    tj = "m",
    uj = "n",
    vj = "p",
    wj = "q",
    xj = "r",
    yj = "s",
    zj = "t",
    Aj = "u",
    Bj = "v",
    Cj = "w",
    Dj = "x",
    Ej = "y",
    Fj = "z",
    Gj = ",",
    Hj = "/",
    Ij = "\\",
    Jj = {
        8: Si,
        9: Ti,
        13: Ui,
        16: Vi,
        17: Wi,
        18: Xi,
        19: "pause",
        20: "caps-lock",
        27: "esc",
        32: Yi,
        33: "pg-up",
        34: "pg-down",
        35: Zi,
        36: "home",
        37: sf,
        38: "up",
        39: $i,
        40: "down",
        45: Zf,
        46: Yf,
        48: Xd,
        49: aj,
        50: bj,
        51: cj,
        52: dj,
        53: ej,
        54: fj,
        55: gj,
        56: Wd,
        57: hj,
        65: ij,
        66: jj,
        67: kj,
        68: lj,
        69: mj,
        70: nj,
        71: ec,
        72: oj,
        73: pj,
        74: qj,
        75: rj,
        76: sj,
        77: tj,
        78: uj,
        79: Zc,
        80: vj,
        81: wj,
        82: xj,
        83: yj,
        84: zj,
        85: Aj,
        86: Bj,
        87: Cj,
        88: Dj,
        89: Ej,
        90: Fj,
        93: "context",
        107: "num-plus",
        109: "num-minus",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        187: "equals",
        188: Gj,
        190: Na,
        191: Hj,
        220: Ij,
        224: "win"
    };

function Kj(a, b) {
    this.f = a || 1;
    this.g = b || Lj;
    this.n = r(this.D2, this);
    this.u = lb()
}
s(Kj, Pi);Kj.prototype.a = l;
var Lj = La.window;n = Kj.prototype;n.Ta = k;n.setInterval = function (a) {
    this.f = a;
    if (this.Ta && this.a) {
        Mj(this);
        this.start()
    } else this.Ta && Mj(this)
};
var Nj = "tick";n.D2 = function () {
    if (this.a) {
        var a = lb() - this.u;
        if (a > 0 && a < this.f * 0.8) this.Ta = this.g.setTimeout(this.n, this.f - a);
        else {
            this.dispatchEvent(Nj);
            if (this.a) {
                this.Ta = this.g.setTimeout(this.n, this.f);
                this.u = lb()
            }
        }
    }
};
n.start = function () {
    this.a = i;
    if (!this.Ta) {
        this.Ta = this.g.setTimeout(this.n, this.f);
        this.u = lb()
    }
};

function Mj(a) {
    a.a = l;
    if (a.Ta) {
        a.g.clearTimeout(a.Ta);
        a.Ta = k
    }
}
n.q = function () {
    Kj.p.q.call(this);
    Mj(this);
    delete this.g
};

function Oj(a, b, c) {
    if (gb(a)) {
        if (c) a = r(a, c)
    } else if (a && typeof a.handleEvent == Ua) a = r(a.handleEvent, a);
    else f(Error(Zd));
    return b > 2147483647 ? -1 : Lj.setTimeout(a, b || 0)
}
function Pj(a) {
    Lj.clearTimeout(a)
};
var Qj = "keydown",
    Rj = "1.8",
    Sj = "keyup";

function Tj(a) {
    this.g = {};
    this.f = {
        nn: [],
        Hy: 0
    };
    this.P = Eb(Wba);
    this.u = i;
    this.n = this.M = l;
    this.aa = i;
    this.a = a;
    oe(this.a, Qj, this.yw, l, this);
    y.Fc && y.Ua && y.Xb(Rj) && oe(this.a, Sj, this.gJ, l, this);
    if (y.Xk && !y.Ua) {
        oe(this.a, Td, this.vJ, l, this);
        oe(this.a, Sj, this.wJ, l, this)
    }
}
var Uj;s(Tj, Pi);
var Wba = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
    Vj = "shortcut",
    Wj = {
        TO: Vj,
        SO: "shortcut_"
    };n = Tj.prototype;
var Xj = "+",
    Yj = "meta";
n.Zx = function (a) {
    var b = Zj,
        c = this.g,
        d = arguments;
    if (cb(d[1])) {
        d = d[1];
        d = d.replace(/[ +]*\+[ +]*/g, Xj).replace(/[ ]+/g, x).toLowerCase();
        d = d.split(x);
        for (var e = [], g, h = 0; g = d[h]; h++) {
            var j = g.split(Xj),
                m;
            g = 0;
            for (var o, q = 0; o = j[q]; q++) {
                switch (o) {
                case Vi:
                    g |= 1;
                    continue;
                case Wi:
                    g |= 2;
                    continue;
                case Xi:
                    g |= 4;
                    continue;
                case Yj:
                    g |= 8;
                    continue
                }
                m = o;
                if (!Uj) {
                    j = {};
                    for (var u in Jj) j[Jj[u]] = u;
                    Uj = j
                }
                m = Uj[m];
                break
            }
            e.push({
                keyCode: m,
                Gx: g
            })
        }
        d = e
    } else {
        u = d;
        e = 1;
        if ($a(d[1])) {
            u = d[1];
            e = 0
        }
        for (d = []; e < u.length; e += 2) d.push({
            keyCode: u[e],
            Gx: u[e + 1]
        })
    }
    b(c, d, a)
};n.q = function () {
    Tj.p.q.call(this);
    this.g = {};
    re(this.a, Qj, this.yw, l, this);
    y.Fc && y.Ua && y.Xb(Rj) && re(this.a, Sj, this.gJ, l, this);
    if (y.Xk && !y.Ua) {
        re(this.a, Td, this.vJ, l, this);
        re(this.a, Sj, this.wJ, l, this)
    }
    this.a = k
};n.gJ = function (a) {
    if (a.keyCode == 224) {
        this.OK = i;
        Oj(function () {
            this.OK = l
        }, 400, this)
    } else {
        var b = a.fh || this.OK;
        if ((a.keyCode == 67 || a.keyCode == 88 || a.keyCode == 86) && b) {
            a.fh = b;
            this.yw(a)
        }
    }
};

function $j(a, b) {
    return y.Xk && !y.Ua && b.ctrlKey && b.ig && !b.Cd
}
n.vJ = function (a) {
    if (a.keyCode > 32 && $j(this, a)) this.K = i
};n.wJ = function (a) {
    !this.K && $j(this, a) && this.yw(a)
};

function Zj(a, b, c) {
    var d = b.shift();
    d = d.keyCode & 255 | d.Gx << 8;
    var e = a[d];
    if (e && c && (b.length == 0 || cb(e))) f(Error("Keyboard shortcut conflicts with existing shortcut"));
    if (b.length) {
        e || (e = a[d] = {});
        Zj(e, b, c)
    } else a[d] = c
}
function ak(a, b, c, d) {
    c = c || 0;
    if ((d = (d || a.g)[b[c]]) && !cb(d) && b.length - c > 1) return ak(a, b, c + 1, d);
    return d
}
n.yw = function (a) {
    if (Xba(this, a)) if (a.type == Qj && $j(this, a)) this.K = l;
    else {
        var b = a.keyCode & 255 | ((a.Cd ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.ig ? 4 : 0) | (a.fh ? 8 : 0)) << 8,
            c, d, e = lb();
        if (this.f.nn.length && e - this.f.Hy <= 1500) c = ak(this, this.f.nn);
        else this.f.nn.length = 0;
        c = c ? c[b] : this.g[b];
        if (!c) {
            c = this.g[b];
            this.f.nn = []
        }
        if (c && cb(c)) d = c;
        else if (c) {
            this.f.nn.push(b);
            this.f.Hy = e;
            y.Ua && a.preventDefault()
        } else this.f.nn.length = 0;
        if (d) {
            this.u && a.preventDefault();
            this.M && a.stopPropagation();
            b = this.dispatchEvent(new bk(Wj.TO, d, a.target));
            b &= this.dispatchEvent(new bk(Wj.SO + d, d, a.target));
            b || a.preventDefault();
            this.f.nn.length = 0
        }
    }
};
var ck = "TEXTAREA",
    dk = "BUTTON",
    ek = "SELECT",
    Yba = "password";

function Xba(a, b) {
    var c = b.keyCode;
    if (c == 16 || c == 17 || c == 18) return l;
    var d = b.target,
        e = d.tagName == ck || d.tagName == yd || d.tagName == dk || d.tagName == ek,
        g = !e && (d.isContentEditable || d.ownerDocument && d.ownerDocument.designMode == ve);
    if (!e && !g) return i;
    if (a.P[c] || a.n) return i;
    if (g) return l;
    if (a.aa && (b.ig || b.ctrlKey || b.fh)) return i;
    if (d.tagName == yd && (d.type == ih || d.type == Yba)) return c == 13;
    if (d.tagName == yd || d.tagName == dk) return c != 32;
    return l
}
function bk(a, b, c) {
    Pd.call(this, a, c);
    this.identifier = b
}
s(bk, Pd);

function Zba(a) {
    return function () {
        f(Error(a))
    }
};y.product = {};y.product.UE = l;y.product.SE = l;y.product.XE = l;y.product.WE = l;y.product.RE = l;y.product.TE = l;y.product.$E = l;y.product.cj = y.Yy || y.az || y.product.UE || y.product.SE || y.product.XE || y.product.WE || y.product.RE || y.product.TE || y.product.$E;
var fk = "Firefox",
    $ba = "Camino",
    aca = "iPhone",
    bca = "iPod",
    cca = "iPad",
    dca = "Android",
    hk = "Chrome",
    ik = "Safari";
y.product.jm = function () {
    y.product.lH = l;
    y.product.jH = l;
    y.product.pH = l;
    y.product.oH = l;
    y.product.iH = l;
    y.product.kH = l;
    y.product.rH = l;
    var a = y.XA();
    if (a) if (a.indexOf(fk) != -1) y.product.lH = i;
    else if (a.indexOf($ba) != -1) y.product.jH = i;
    else if (a.indexOf(aca) != -1 || a.indexOf(bca) != -1) y.product.pH = i;
    else if (a.indexOf(cca) != -1) y.product.oH = i;
    else if (a.indexOf(dca) != -1) y.product.iH = i;
    else if (a.indexOf(hk) != -1) y.product.kH = i;
    else if (a.indexOf(ik) != -1) y.product.rH = i
};y.product.cj || y.product.jm();y.product.Gc = y.Gc;
y.product.ia = y.ia;y.product.u3 = y.product.cj ? y.product.UE : y.product.lH;y.product.f3 = y.product.cj ? y.product.SE : y.product.jH;y.product.O3 = y.product.cj ? y.product.XE : y.product.pH;y.product.jO = y.product.cj ? y.product.WE : y.product.oH;y.product.X2 = y.product.cj ? y.product.RE : y.product.iH;y.product.qq = y.product.cj ? y.product.TE : y.product.kH;y.product.nz = y.product.cj ? y.product.$E : y.product.rH;
var jk = l;

function kk(a, b, c, d, e) {
    var g = {};
    g.label = b;
    g.visible = i;
    g.hint = e || b;
    if (c) g.keys = c;
    if (d) g.icon = d;
    return new Di(a, g)
}
function lk(a, b) {
    var c = a.pc(Ji);
    $a(c) || (c = [c]);
    c.push(b);
    a.setProperty(Ji, c)
}
var eca = "docs-icon-img docs-icon-",
    fca = "docs-new-menu",
    gca = "New",
    hca = "docs-document",
    mk = "Document",
    ica = "docs-presentation",
    jca = "Presentation",
    kca = "presentation",
    lca = "docs-spreadsheet",
    mca = "Spreadsheet",
    nca = "spreadsheet",
    oca = "docs-form",
    pca = "Form",
    qca = "form",
    rca = "docs-drawing",
    nk = "Drawing",
    ok = "drawing",
    sca = "docs-template",
    tca = "From template...",
    uca = "docs-new-custom",
    vca = "docs-download-menu",
    wca = "Download as",
    pk = "docs-file-menu",
    xca = "docs-open",
    yca = "Open...",
    zca = "Ctrl+O",
    Aca = "docs-upload-custom",
    Bca = "docs-upload",
    Cca = "Upload...",
    Dca = "docs-revisions",
    Eca = "See revision history",
    Fca = "docs-file-custom",
    Gca = "docs-rename",
    Hca = "Rename...",
    Ica = "docs-make-copy",
    Jca = "Make a copy...",
    Kca = "docs-save",
    qk = "Save",
    Lca = "Ctrl+S",
    rk = "save",
    Mca = "docs-save-close",
    sk = "Save & Close",
    Nca = "docs-custom-inline",
    Oca = "docs-print-preview",
    Pca = "Print preview",
    Qca = "docs-print",
    tk = "Print",
    Rca = "Ctrl+P",
    Sca = "print",
    uk = "docs-edit-menu",
    Tca = "docs-copy",
    vk = "Copy",
    Uca = "Ctrl+C",
    wk = "copy",
    Vca = "docs-copypaste-custom",
    Wca = "docs-cut",
    xk = "Cut",
    Xca = "Ctrl+X",
    yk = "cut",
    Yca = "docs-edit-custom",
    Zca = "docs-paste",
    zk = "Paste",
    $ca = "Ctrl+V",
    Ak = "paste",
    ada = "docs-redo",
    bda = "Redo",
    cda = "Ctrl+Y",
    dda = "Ctrl+Shift+Z",
    eda = "redo",
    Bk = "-rtl",
    fda = "docs-select-all",
    gda = "Select all",
    hda = "Ctrl+A",
    ida = "docs-select-none",
    jda = "Select none",
    kda = "Ctrl+Shift+A",
    lda = "docs-undo",
    mda = "Undo",
    nda = "Ctrl+Z",
    oda = "undo",
    Ck = "docs-insert-menu",
    pda = "docs-shape",
    qda = "Shape",
    Dk = "shapes",
    rda = "docs-text-box",
    sda = "Text box",
    tda = "textbox",
    uda = "docs-image",
    Ek = "Image...",
    Fk = "image",
    Gk = "docs-format-menu",
    vda = "docs-bold",
    wda = "Bold",
    xda = "Ctrl+B",
    yda = "docs-font-family",
    zda = "Font",
    Ada = "docs-font-size",
    Bda = "Font size",
    Cda = "docs-italic",
    Dda = "Italic",
    Eda = "Ctrl+I",
    Fda = "docs-strikethrough",
    Gda = "Strikethrough",
    Hda = "strikethrough",
    Ida = "docs-subscript",
    Hk = "Subscript",
    Jda = "Ctrl+,",
    Ik = "subscript",
    Kda = "docs-superscript",
    Jk = "Superscript",
    Lda = "Ctrl+.",
    Kk = "superscript",
    Mda = "docs-text-color",
    Nda = "Text color",
    Lk = "text-color",
    Oda = "docs-text-bgcolor",
    Pda = "Text background color",
    Qda = "text-bgcolor",
    Rda = "docs-underline",
    Sda = "Underline",
    Tda = "Ctrl+U",
    Uda = "docs-no-fill",
    Mk = "Transparent",
    Nk = "no-color",
    Vda = "docs-no-line",
    Wda = "docs-fill-color",
    Xda = "Fill color",
    Yda = "fill-color",
    Zda = "docs-line-color",
    $da = "Line color",
    aea = "line-color",
    bea = "docs-line-width",
    cea = "Line width",
    dea = "line-width",
    Ok = "docs-view-menu",
    eea = "docs-zoom-in",
    Pk = "Zoom in",
    fea = "Ctrl+Shift+Right",
    gea = "docs-zoom-out",
    Qk = "Zoom out",
    hea = "Ctrl+Shift+Left",
    Rk = "docs-tools-menu",
    Sk = "docs-table-menu",
    Tk = "docs-help-menu",
    iea = "docs-help-center",
    jea = "Google Docs Help Center",
    kea = "docs-help-forum",
    lea = "Learn from other Google users",
    mea = "docs-help-video",
    nea = "Watch a video introduction",
    oea = "docs-help-shortcuts",
    Uk = "Keyboard shortcuts",
    pea = "Ctrl+/",
    qea = "docs-feedback",
    rea = "Report an issue",
    sea = "docs-help-custom",
    tea = "docs-clipboard",
    uea = "Web clipboard",
    vea = "clipboard",
    wea = "docs-clipboard-copy",
    xea = "docs-clipboard-paste-from-server",
    yea = "Paste from server",
    zea = "docs-clipboard-clear-items",
    Aea = "Clear all items",
    Bea = "docs-clipboard-help",
    Cea = "Web clipboard help",
    Dea = "docs-create",
    Vk = "docs-revisions-zoomin",
    Wk = "docs-revisions-zoomout",
    Xk = "docs-revisions-revert",
    Eea = "docs-revisions-show",
    Yk = "docs-revisions-close",
    Fea = "Shift+Delete",
    Gea = "Ctrl+Insert",
    Hea = "Shift+Insert",
    Iea = "Ctrl+Shift+V",
    Jea = "docs-menubar-focus",
    Kea = "Alt+Shift+F",
    Lea = "Alt+F";

function Mea(a) {
    function b(c, d, e, g, h) {
        return kk(c, d, e, g ? eca + g : g,
        h)
    }
    jk = i;
    a = !! a;
    K = {
        zq: b(fca, gca),
        Du: b(hca, mk, k, Yg),
        Gu: b(ica, jca, k, kca),
        NF: b(lca, mca, k, nca),
        Fu: b(oca, pca, k, qca),
        Eu: b(rca, nk, k, ok),
        AO: b(sca, tca),
        gz: b(uca, v),
        tu: b(vca, wca),
        KN: b(pk, v),
        OPEN: b(xca, yca, zca),
        eG: b(Aca, v),
        Lq: b(Bca, Cca),
        Uk: b(Dca, Eca),
        JN: b(Fca, v),
        Tk: b(Gca, Hca),
        yq: b(Ica, Jca),
        dj: b(Kca, qk, Lca, rk),
        oz: b(Mca, sk),
        SF: b(Nca, v),
        Sk: b(Oca, Pca),
        Rk: b(Qca, tk, Rca, Sca),
        DN: b(uk, v),
        Fg: b(Tca, vk, Uca, wk),
        rN: b(Vca, v),
        Gg: b(Wca, xk, Xca, yk),
        uF: b(Yca, v),
        Rh: b(Zca, zk, $ca, Ak),
        Eq: b(ada, bda, [cda, dda], eda + (a ? Bk : v)),
        Bn: b(fda, gda, hda),
        YF: b(ida, jda, kda),
        Kq: b(lda, mda, nda, oda + (a ? Bk : v)),
        iO: b(Ck, v),
        L3: b(pda, qda, k, Dk),
        M3: b(rda, sda, k, tda),
        K3: b(uda, Ek, k, Fk),
        MN: b(Gk, v),
        Ok: b(vda, wda, xda, F),
        sq: b(yda, zda),
        tq: b(Ada, Bda),
        Qk: b(Cda, Dda, Eda, J),
        Gq: b(Fda, Gda, k, Hda),
        Hq: b(Ida, Hk, Jda, Ik),
        Iq: b(Kda, Jk, Lda, Kk),
        Ku: b(Mda, Nda, k, Lk),
        Ju: b(Oda, Pda, k, Qda),
        Vk: b(Rda, Sda, Tda, mi),
        d4: b(Uda, Mk, k, Nk),
        e4: b(Vda, Mk, k, Nk),
        t3: b(Wda, Xda, k, Yda),
        P3: b(Zda, $da, k, aea),
        R3: b(bea, cea, k, dea),
        CP: b(Ok, v),
        fG: b(eea, Pk, fea),
        gG: b(gea, Qk, hea),
        rP: b(Rk, v),
        pP: b(Sk, v),
        RN: b(Tk, v),
        uu: b(iea, jea),
        vu: b(kea, lea),
        wu: b(mea, nea),
        yn: b(oea, Uk, pea),
        xn: b(qea, rea),
        QN: b(sea, v),
        rq: b(tea, uea, k, vea),
        bz: b(wea, v, k, wk),
        nN: b(xea, yea, k, Ak),
        qu: b(zea, Aea),
        cz: b(Bea, Cea),
        n3: b(Dea, v),
        lz: b(Vk, Pk),
        mz: b(Wk, Qk),
        Iu: b(Xk, v),
        kz: b(Eea, v),
        Fq: b(Yk, v)
    };
    K.YF.X(l);
    if (!y.Fc) {
        lk(K.Gg, Fea);
        lk(K.Fg, Gea);
        lk(K.Rh, Hea)
    }
    y.product.qq && lk(K.Rh, Iea);
    Zk = {
        Cu: kk(Jea, v, Kea)
    };
    y.product.qq && lk(Zk.Cu, Lea)
}
var K = {},
    Zk = {};

function $k(a, b) {
    this.P = a;
    this.f = {};
    this.M = b;
    this.a = {};
    jk || Mea(a.xa);
    this.u(a);
    for (var c in this.a) {
        var d = this.a[c],
            e = [];
        for (var g in d) {
            var h = this.f[d[g]];
            e.push(h);
            h.hd(l)
        }
        Uba(e, i)
    }
    this.g = {};
    al(this, K.tu);
    al(this, K.yq);
    al(this, K.gz);
    al(this, K.Du);
    al(this, K.Eu);
    al(this, K.Fu);
    al(this, K.zq);
    al(this, K.Gu);
    al(this, K.OPEN);
    al(this, K.Sk);
    al(this, K.Rk);
    al(this, K.Tk);
    al(this, K.Uk);
    al(this, K.dj);
    al(this, K.oz);
    al(this, K.Lq);
    al(this, K.Fg);
    al(this, K.Gg);
    al(this, K.Rh);
    al(this, K.Eq);
    al(this, K.Bn);
    al(this, K.Kq);
    al(this, K.uu);
    al(this, K.vu);
    al(this, K.yn);
    al(this, K.wu);
    al(this, K.xn);
    al(this, K.Ok);
    al(this, K.sq);
    al(this, K.tq);
    al(this, K.Qk);
    al(this, K.Gq);
    al(this, K.Hq);
    al(this, K.Iq);
    al(this, K.Ku);
    al(this, K.Ju);
    al(this, K.Vk);
    bl(this)
}
s($k, t);

function bl(a) {
    for (var b in a.g) a.g[b].la(l);
    a.K(a.P)
}
function al(a, b) {
    a.g[b.ma()] = b
}
var Nea = "docs-icon-",
    Oea = "docs-icon-img ",
    Pea = "kix-icon-accessible-img kix-icon-";

function L(a, b, c, d, e, g, h, j, m, o) {
    e = e && (Hb(e, Nea) ? Oea + e : Pea + e);
    var q = {};
    q.enabled = !j;
    q.hint = d;
    q.icon = e;
    q.keys = g;
    q.label = c;
    q.value = h;
    q.visible = i;
    c = a.f[b] = new Di(b, q);
    o && a.M.ij(c);
    if (m) {
        a.a[m] || (a.a[m] = {});
        a.a[m][Za(h) && (cb(h) || eb(h) || fb(h)) ? h : b] = b
    }
    return c
}
function cl(a, b, c, d) {
    if (a.g[b.ma()]) {
        a.f[b.ma()] = b;
        c && b.la(i);
        d && a.M.ij(b)
    }
}
function M(a, b) {
    return a.f[b] || k
}
function dl(a, b, c) {
    (a = M(a, b)) && a.la(c)
}
var el = "icon";

function fl(a, b, c) {
    if (a = M(a, b)) {
        b = a.pc(el);
        var d = !Ib(b, Bk);
        if (c && !d) a.setProperty(el, b.substring(0, b.length - 4));
        else!c && d && a.setProperty(el, b + Bk)
    }
}
function gl(a, b, c) {
    if (!a.a[b]) return k;
    return M(a, a.a[b][c])
}
function hl(a, b, c) {
    (a = gl(a, b, c)) && a.hd(i)
}
$k.prototype.q = function () {
    $k.p.q.call(this);
    delete this.P;
    for (var a in this.f)!a in K && this.f[a].G();
    delete this.f;
    delete this.a;
    delete this.g
};

function il(a, b) {
    $k.call(this, a, b)
}
s(il, $k);
var jl = "kix-import-document",
    Qea = "Import...",
    Rea = "Import",
    kl = "kix-page-setup-dialog",
    Sea = "Page setup...",
    ll = "kix-print-settings-dialog",
    Tea = "Print settings...",
    ml = "kix-show-comments",
    nl = "Show comments",
    ol = "kix-export-odt",
    Uea = "ODT",
    pl = "kix-export-pdf",
    Vea = "PDF",
    ql = "kix-export-rtf",
    Wea = "RTF",
    rl = "kix-export-txt",
    Xea = "Text",
    sl = "kix-export-word",
    Yea = "Word",
    tl = "kix-export-zip",
    Zea = "HTML (Zipped)";
il.prototype.u = function (a) {
    if (a.Dq) L(this, jl, Qea, Rea, undefined, undefined, undefined, !a.OF || !a.M, undefined, i);
    a.An && L(this, kl, Sea, undefined, undefined, undefined, undefined, jf(a));
    a.nD && L(this, ll, Tea);
    L(this, ml, nl, nl, undefined, undefined, undefined, !a.u);
    if (a.Lu) {
        ul(this, ol, Uea);
        ul(this, pl, Vea);
        ul(this, ql, Wea);
        ul(this, rl, Xea);
        ul(this, sl, Yea);
        L(this, tl, Zea)
    }
};

function ul(a, b, c) {
    L(a, b, c, undefined, undefined, undefined, undefined, undefined, undefined, i)
}
il.prototype.K = function (a) {
    cl(this, K.yq, !! a.M, i);
    cl(this, K.gz, i, i);
    cl(this, K.Du, !! a.M, i);
    cl(this, K.Eu, i, i);
    cl(this, K.Fu, i, i);
    cl(this, K.zq, !! a.M, i);
    cl(this, K.Gu, i, i);
    cl(this, K.OPEN, !! a.M, i);
    cl(this, K.Rk, !! a.Tv, i);
    cl(this, K.Sk, !! a.Tv, i);
    cl(this, K.Lq, i, i);
    a.Dq && K.Lq.X(l);
    cl(this, K.tu, a.Lu, i);
    cl(this, K.Fg, i, l);
    cl(this, K.Bn, i);
    cl(this, K.uu, i, i);
    cl(this, K.vu, i, i);
    cl(this, K.yn, i, i);
    cl(this, K.xn, i, i);
    cl(this, K.wu, i, i)
};

function vl(a, b, c) {
    var d = this.n = new yi;
    d.Wa = c;
    Ai(d.Wa) ? d.f() : Ce(d.L, d.Wa, kj, d.f);$k.call(this, a, b)
}
s(vl, il);
var wl = "kix-add-bullet",
    $ea = "Bullet",
    xl = "Bulleted list",
    yl = "docs-icon-list-bullet",
    afa = "Ctrl+Shift+8",
    zl = "kix-bullet-circle",
    bfa = "Bullet \u25cf",
    Al = "kix-list",
    Bl = "kix-bullet-hollow",
    cfa = "Hollow \u25cb",
    dfa = "Hollow list",
    Cl = "kix-bullet-square",
    efa = "Square \u25a0",
    ffa = "Square list",
    El = "kix-list-style-menu",
    Fl = "List styles",
    Gl = "kix-clear-formatting",
    gfa = "Clear formatting",
    hfa = "Clear all style formatting",
    ifa = "Ctrl+\\",
    Hl = "kix-document-margins",
    jfa = "kix-page-size",
    Il = "kix-page-color",
    Jl = "kix-delete-link",
    Kl = "kix-find-and-replace-start",
    kfa = "Find and replace...",
    Ll = "Ctrl+F",
    Ml = "kix-find-and-replace-stop",
    Nl = "kix-replace",
    Ol = "kix-replace-all",
    Pl = "kix-find-start",
    Ql = "kix-find-stop",
    Rl = "kix-find",
    Sl = "kix-heading-0",
    lfa = "Normal text",
    Tl = "Set the heading style for text",
    mfa = "Ctrl+Alt+0",
    Ul = "kix-heading",
    Vl = "kix-heading-1",
    nfa = "Heading 1",
    ofa = "Ctrl+Alt+1",
    Wl = "kix-heading-2",
    pfa = "Heading 2",
    qfa = "Ctrl+Alt+2",
    Xl = "kix-heading-3",
    rfa = "Heading 3",
    sfa = "Ctrl+Alt+3",
    Yl = "kix-heading-4",
    tfa = "Heading 4",
    ufa = "Ctrl+Alt+4",
    Zl = "kix-heading-5",
    vfa = "Heading 5",
    wfa = "Ctrl+Alt+5",
    $l = "kix-heading-6",
    xfa = "Heading 6",
    yfa = "Ctrl+Alt+6",
    am = "kix-indent",
    bm = "Increase indent",
    zfa = "docs-icon-indent",
    cm = "kix-insert-horizontal-line",
    dm = "Horizontal line",
    em = "insert-horizontal-line",
    fm = "kix-insert-image",
    Afa = "Insert image",
    Bfa = "docs-icon-image",
    gm = "kix-insert-drawing",
    Cfa = "Drawing...",
    Dfa = "Insert drawing",
    Efa = "docs-icon-drawing",
    hm = "kix-update-drawing",
    im = "kix-insert-special-characters",
    Ffa = "Special characters...",
    Gfa = "Insert special characters...",
    jm = "kix-publish",
    km = "Publish to the Web...",
    lm = "kix-tools-translate",
    mm = "Translate document...",
    nm = "kix-tools-define",
    Hfa = "Define...",
    Ifa = "Get definitions",
    om = "kix-apply-spellcheck-suggestion",
    pm = "kix-override-spellcheck-sugestion",
    qm = "kix-tools-word-count",
    rm = "Word count",
    Jfa = "Count words",
    Kfa = "Ctrl+Shift+C",
    sm = "kix-insert-link-dialog",
    Lfa = "Link...",
    Mfa = "Insert link",
    Nfa = "insert-link",
    Ofa = "Ctrl+K",
    tm = "kix-insert-link",
    um = "kix-line-spacing-double",
    Pfa = "2.0",
    Qfa = "Double spaced",
    vm = "kix-line-spacing",
    wm = "kix-line-spacing-one-point-five",
    Rfa = "1.5",
    Sfa = "1.5 lines spaced",
    xm = "kix-line-spacing-one-point-one-five",
    Tfa = "1.15",
    Ufa = "1.15 lines spaced",
    ym = "kix-line-spacing-single",
    Vfa = "1.0",
    Wfa = "Single spaced",
    zm = "kix-heading-menu",
    Am = "Styles",
    Bm = "kix-move-positioned-entity",
    Cm = "kix-update-embedded-entity-position",
    Dm = "kix-add-numbered-bullet",
    Em = "Numbered list",
    Xfa = "docs-icon-list-number",
    Yfa = "Ctrl+Shift+7",
    Fm = "kix-numbered-bullet-number",
    Zfa = "1, 2, 3",
    $fa = "Numbers",
    Gm = "kix-numbered-bullet-latin-upper",
    aga = "A, B, C",
    bga = "Uppercase Latin Letters",
    Hm = "kix-numbered-bullet-latin-lower",
    cga = "a, b, c",
    dga = "Lowercase Latin Letters",
    Im = "kix-numbered-bullet-roman-upper",
    ega = "I, II, III",
    fga = "Uppercase Roman Numerals",
    Jm = "kix-numbered-bullet-roman-lower",
    gga = "i, ii, iii",
    hga = "Lowercase Roman Numberals",
    Km = "kix-outdent",
    Lm = "Decrease indent",
    iga = "docs-icon-outdent",
    Mm = "kix-paragraph-align-center",
    Nm = "Center",
    jga = "Center align",
    kga = "docs-icon-align-center",
    lga = "Ctrl+Shift+E",
    Om = "kix-paragraph-align-left",
    Pm = "Left",
    mga = "Left align",
    nga = "docs-icon-align-left",
    oga = "Ctrl+Shift+L",
    Qm = "kix-paragraph-align-right",
    Rm = "Right",
    pga = "Right align",
    qga = "docs-icon-align-right",
    rga = "Ctrl+Shift+R",
    Sm = "kix-paragraph-align-justify",
    sga = "Justified",
    tga = "Justify",
    uga = "align-justify",
    vga = "Ctrl+Shift+J",
    Tm = "kix-paragraph-indent-first-line",
    wga = "Paragraph Indent First Line",
    xga = "Set paragraph first line indent",
    Um = "kix-paragraph-indent-start",
    yga = "Paragraph Indent Start",
    zga = "Set paragraph start indent",
    Vm = "kix-paragraph-indent-end",
    Aga = "Paragraph Indent End",
    Bga = "Set paragraph end indent",
    Wm = "kix-paragraph-spacing-after-remove",
    Xm = "Remove space after paragraph",
    Ym = "kix-paragraph-spacing-before-remove",
    Zm = "Remove space before paragraph",
    $m = "kix-resize-image",
    an = "kix-insert-table-of-contents",
    Cga = "Table of contents",
    Dga = "Insert table of contents",
    bn = "kix-refresh-autogenerated-region",
    cn = "Update now",
    dn = "kix-text-ltr",
    Ega = "Left-to-right text",
    Fga = "Set text direction to left-to-right.",
    Gga = "text-ltr",
    en = "kix-text-rtl",
    Hga = "Right-to-left text",
    Iga = "Set text direction to right-to-left.",
    Jga = "text-rtl",
    fn = "kix-show-ruler",
    gn = "Show ruler",
    hn = "kix-add-tab-stop",
    jn = "kix-delete-tab-stop",
    kn = "kix-update-tab-stop",
    ln = "kix-show-spell-suggestions",
    Kga = "Show spelling suggestions",
    mn = "kix-align-menu",
    Lga = "Align",
    nn = "kix-line-spacing-menu",
    on = "Line spacing",
    Mga = "line-spacing",
    pn = "kix-styles-menu",
    Nga = "Paragraph styles",
    qn = "kix-renumber-bullet",
    Oga = "Restart numbering",
    rn = "kix-enable-curly-quotes",
    Pga = "Use smart quotes",
    sn = "kix-performance-dialog",
    Qga = "Performance Dialog",
    Rga = "Ctrl+Alt+Shift+P",
    tn = "kix-show-equation-toolbar",
    un = "Show equation toolbar",
    vn = "kix-insert-equation",
    wn = "Equation...",
    xn = "Insert equation",
    yn = "insert-equation",
    zn = "kix-insert-function",
    An = "Insert function",
    Bn = "kix-insert-header",
    Cn = "Header",
    Dn = "Insert header",
    En = "kix-insert-footer",
    Fn = "Footer",
    Gn = "Insert footer",
    Hn = "kix-insert-footnote",
    In = "Footnote",
    Jn = "kix-delete-footnote",
    Kn = "Delete Footnote",
    Ln = "kix-insert-page-break",
    Mn = "Page break (for printing)",
    Nn = "insert-page-break",
    On = "kix-insert-comment",
    Pn = "Comment",
    Qn = "Insert comment",
    Rn = "docs-icon-comment",
    Sn = "Ctrl+Alt+M",
    Tn = "kix-delete-comment",
    Un = "Delete Comment",
    Vn = "kix-reply-to-comment",
    Wn = "kix-insert-bookmark",
    Xn = "Bookmark",
    Sga = "Insert bookmark",
    Yn = "kix-delete-bookmark",
    Zn = "Delete bookmark",
    $n = "kix-insert-table",
    ao = "Insert table",
    bo = "insert-table-menu",
    co = "kix-delete-table",
    eo = "Delete table",
    fo = "kix-delete-column",
    go = "Delete column",
    ho = "kix-delete-row",
    io = "Delete row",
    jo = "kix-insert-row-above",
    ko = "Insert row above",
    lo = "kix-insert-row-below",
    mo = "Insert row below",
    no = "kix-insert-column-left",
    oo = "Insert column left",
    po = "kix-insert-column-right",
    qo = "Insert column right",
    ro = "kix-table-dialog",
    so = "Table properties...",
    to = "kix-apply-table-style",
    uo = "kix-resize-table";
vl.prototype.u = function (a) {
    vl.p.u.call(this, a);
    L(this, wl, $ea, xl, yl, afa);
    L(this, zl, bfa, xl, undefined, undefined, 0, l, Al);
    L(this, Bl, cfa, dfa, undefined, undefined, 1, l, Al);
    L(this, Cl, efa, ffa, undefined, undefined, 2, l, Al);
    L(this, El, Fl, Fl, yl + (a.xa ? Bk : v));
    L(this, Gl, gfa, hfa, undefined, ifa);
    L(this, Hl, v, undefined, undefined, undefined, undefined, !a.Aa);
    L(this, jfa, v, undefined, undefined, undefined, undefined, !a.An);
    L(this, Il, v, undefined, undefined, undefined, undefined, !a.An && !a.Ou);
    L(this, Jl, v);
    if (a.Wc) {
        L(this, Kl, kfa, undefined, undefined, a.Ie ? v : Ll);
        L(this, Ml, v);
        L(this, Nl, v);
        L(this, Ol, v)
    }
    if (a.Ie) {
        L(this, Pl, v, undefined, undefined, Ll);
        L(this, Ql, v)
    }
    if (a.Wc || a.Ie) L(this, Rl, v);
    L(this, Sl, lfa, Tl, undefined, mfa, 0, l, Ul);
    L(this, Vl, nfa, Tl, undefined, ofa, 1, l, Ul);
    L(this, Wl, pfa, Tl, undefined, qfa, 2, l, Ul);
    L(this, Xl, rfa, Tl, undefined, sfa, 3, l, Ul);
    L(this, Yl, tfa, Tl, undefined, ufa, 4, l, Ul);
    L(this, Zl, vfa, Tl, undefined, wfa, 5, l, Ul);
    L(this, $l, xfa, Tl, undefined, yfa, 6, l, Ul);
    L(this, am, bm, bm, zfa);
    L(this, cm, dm, dm, em);
    L(this, fm, Ek, Afa, Bfa, undefined, undefined, undefined, undefined, i);
    L(this, gm, Cfa, Dfa, Efa, undefined, undefined, !a.cc, undefined, i);
    a.cc && L(this, hm, v);
    L(this, im, Ffa, Gfa, undefined, undefined, undefined, !a.Qu);
    L(this, jm, km, km, undefined, undefined, undefined, !(a.PQ && a.FO));
    L(this, lm, mm, mm, undefined, undefined, undefined, !a.sD || !a.M, undefined, i);
    L(this, nm, Hfa, Ifa, undefined, undefined, undefined, !a.MC);
    L(this, om, v);
    a.Ru && L(this, pm, v);
    L(this, qm, rm, Jfa, undefined, Kfa, undefined, !a.yD);
    L(this, sm, Lfa, Mfa, Nfa, Ofa, undefined, !a.vF);
    L(this, tm, v);
    L(this, um, Pfa, Qfa, undefined, undefined, 2, l, vm);
    L(this, wm, Rfa, Sfa, undefined, undefined, 1.5, l, vm);
    L(this, xm, Tfa, Ufa, undefined, undefined, 1.15, l, vm);
    L(this, ym, Vfa, Wfa, undefined, undefined, 1, l, vm);
    L(this, zm, Am, Am);
    L(this, Bm, v);
    L(this, Cm, v);
    L(this, Dm, Em, Em, Xfa, Yfa);
    L(this, Fm, Zfa, $fa, undefined, undefined, 3, l, Al);
    L(this, Gm, aga, bga, undefined, undefined, 4, l, Al);
    L(this, Hm, cga, dga, undefined, undefined, 5, l, Al);
    L(this, Im, ega, fga, undefined, undefined, 6, l, Al);
    L(this, Jm, gga, hga, undefined, undefined, 7, l, Al);
    L(this, Km, Lm, Lm, iga);
    L(this, Mm, Nm, jga, kga, lga);
    L(this, Om, Pm, mga, nga, oga);
    L(this, Qm, Rm, pga, qga, rga);
    L(this, Sm, sga, tga, uga, vga, undefined, !a.tF);
    L(this, Tm, wga, xga);
    L(this, Um, yga, zga);
    L(this, Vm, Aga, Bga);
    L(this, Wm, Xm, Xm);
    L(this, Ym, Zm, Zm);
    L(this, $m, v, v, undefined, undefined, undefined, !a.ZC);
    L(this, an, Cga, Dga, undefined, undefined, undefined, !a.Su);
    L(this, bn, cn, cn);
    L(this, dn, Ega, Fga, Gga, undefined, undefined, !a.Ig);
    L(this, en, Hga, Iga, Jga, undefined, undefined, !a.Ig);
    L(this, fn, gn, gn, undefined, undefined, undefined, !a.Aa);
    L(this, hn, v, undefined, undefined, undefined, undefined, !a.Aa);
    L(this, jn, v, undefined, undefined, undefined, undefined, !a.Aa);
    L(this, kn, v, undefined, undefined, undefined, undefined, !a.Aa);
    L(this, ln, Kga);
    L(this, mn, Lga);
    L(this, nn, on, on, Mga + (a.xa ? Bk : v));
    L(this, pn, Nga);
    L(this, qn, Oga, undefined, undefined, undefined, undefined, i);
    L(this, rn, Pga, undefined, undefined, undefined, undefined, l);
    a.hF && L(this, sn, Qga, undefined, undefined, Rga);
    if (!a.K) {
        L(this, tn, un, un, undefined, undefined, undefined, !a.n);
        L(this, vn, wn, xn, yn, undefined, undefined, !a.n, undefined, i);
        L(this, zn, v, An, undefined, undefined, undefined, !a.n);
        L(this, Bn, Cn, Dn);
        L(this, En, Fn, Gn);
        L(this, Hn, In, undefined, undefined, undefined, undefined, !a.aa);
        L(this, Jn, Kn, Kn, undefined, undefined, undefined, !a.aa);
        L(this, Ln, Mn, undefined, Nn, undefined, undefined, !a.Ya);
        L(this, On, Pn, Qn, Rn, Sn, undefined, !a.u);
        L(this, Tn, Un, Un, undefined, undefined, undefined, !a.u);
        L(this, Vn, v, v, undefined, undefined, undefined, !a.u);
        L(this, Wn, Xn, Sga, undefined, undefined, undefined, !a.Cb);
        L(this, Yn, Zn, Zn, undefined, undefined, undefined, !a.Cb);
        L(this, $n, ao, ao, undefined, undefined, new cd(0, 0), !a.a);
        L(this, bo, ao, ao, undefined, undefined, undefined, !a.a);
        L(this, co, eo, undefined, undefined, undefined, undefined, !a.a);
        L(this, fo, go, undefined, undefined, undefined, undefined, !a.a);
        L(this, ho, io, undefined, undefined, undefined, undefined, !a.a);
        L(this, jo, ko, undefined, undefined, undefined, undefined, !a.a);
        L(this, lo, mo, undefined, undefined, undefined, undefined, !a.a);
        L(this, no, oo, undefined, undefined, undefined, undefined, !a.a);
        L(this, po, qo, undefined, undefined, undefined, undefined, !a.a);
        L(this, ro, so, undefined, undefined, undefined, undefined, !a.a);
        L(this, to, v, undefined, undefined, undefined, undefined, !a.a || !a.f);
        L(this, uo, v, undefined, undefined, undefined, undefined, !a.a || !a.f || !a.Qh)
    }
};
vl.prototype.K = function (a) {
    vl.p.K.call(this, a);
    cl(this, K.Tk, !! a.M, i);
    cl(this, K.dj, i, i);
    cl(this, K.oz, i, i);
    cl(this, K.Uk, a.zF && !! a.M, i);
    this.n.ij(K.Uk);
    cl(this, K.Gg, i);
    cl(this, K.Rh, i);
    cl(this, K.Eq, i);
    cl(this, K.Kq, i);
    cl(this, K.Ok, i);
    cl(this, K.sq, i);
    cl(this, K.tq, i);
    cl(this, K.Qk, i);
    cl(this, K.Gq, i);
    cl(this, K.Hq, i);
    cl(this, K.Iq, i);
    cl(this, K.Ku, i);
    cl(this, K.Ju, i);
    cl(this, K.Vk, i)
};vl.prototype.q = function () {
    vl.p.q.call(this);
    this.n.G();
    delete this.n
};z.qb = {};
var Tga = "role";z.qb.Mh = function (a, b) {
    if (y.Ua || z.qb.rD) {
        a.setAttribute(Tga, b);
        a.f = b
    }
};z.qb.ki = function (a) {
    return a.f || v
};
var vo = "aria-";z.qb.Ka = function (a, b, c) {
    if (y.Ua || z.qb.rD) a.setAttribute(vo + b, c)
};z.qb.tb = function (a, b) {
    return a.getAttribute(vo + b) || v
};z.qb.r5 = function () {
    return !!z.qb.rD
};z.qb.Z5 = function (a) {
    z.qb.rD = a
};
var wo = "activedescendant";z.qb.j5 = function (a) {
    var b = z.qb.tb(a, wo);
    return z.wb(a).getElementById(b)
};z.qb.Y5 = function (a, b) {
    z.qb.Ka(a, wo, b ? b.id : v)
};
var xo = "focusout",
    yo = "blur",
    zo = "focusin",
    Ao = "focus";

function Bo(a) {
    this.ua = a;
    a = y.ia ? xo : yo;this.a = oe(this.ua, y.ia ? zo : Ao,
    this,
    !y.ia);this.f = oe(this.ua, a, this, !y.ia)
}
s(Bo, Pi);Bo.prototype.handleEvent = function (a) {
    var b = new Qd(a.Zc);
    b.type = a.type == zo || a.type == Ao ? zo : xo;
    try {
        this.dispatchEvent(b)
    } finally {
        b.G()
    }
};Bo.prototype.q = function () {
    Bo.p.q.call(this);
    te(this.a);
    te(this.f);
    delete this.ua
};
var Co = "mousedown";

function Do(a, b, c) {
    this.target = a;
    this.u = b || a;
    this.Bh = c || new mf(NaN, NaN, NaN, NaN);
    this.n = z.wb(a);
    this.L = new ze(this);
    oe(this.u, Co, this.xM, l, this)
}
s(Do, Pi);
var Eo = y.ia || y.Ua && y.Xb("1.9.3");n = Do.prototype;n.gs = 0;n.hs = 0;n.yM = 0;n.zM = 0;n.ur = 0;n.vr = 0;n.bB = i;n.xj = l;n.HB = 0;n.H_ = 0;n.gY = l;n.la = function (a) {
    this.bB = a
};n.q = function () {
    Do.p.q.call(this);
    re(this.u, Co, this.xM, l, this);
    this.L.G();
    delete this.target;
    delete this.u;
    delete this.L
};
var Fo = "mousemove",
    Go = "mouseup",
    Uga = "losecapture",
    Vga = "dragstart";
n.xM = function (a) {
    if (this.bB && !this.xj && (a.type != Co || Vd(a, 0))) {
        if (this.HB == 0) {
            Ho(this, a);
            if (this.xj) a.preventDefault();
            else return
        } else a.preventDefault();
        var b = this.n,
            c = b.documentElement,
            d = !Eo;
        this.L.C(b, Fo, this.I_, d);
        this.L.C(b, Go, this.Pv, d);
        if (Eo) {
            c.setCapture(l);
            this.L.C(c, Uga, this.Pv)
        } else this.L.C(z.fc(b), yo, this.Pv);
        y.ia && this.gY && this.L.C(b, Vga, gba);
        this.M && this.L.C(this.M, af, this.v0, d);
        this.gs = this.yM = a.qw;
        this.hs = this.zM = a.sw;
        this.ur = this.target.offsetLeft;
        this.vr = this.target.offsetTop;
        this.g =
        z.J(this.n).hg();
        this.H_ = lb()
    }
};
var Io = "start";

function Ho(a, b) {
    if (a.dispatchEvent(new Jo(Io, a, b.clientX, b.clientY, b)) !== l) a.xj = i
}
n.Pv = function (a, b) {
    De(this.L);
    Eo && this.n.releaseCapture();
    if (this.xj) {
        this.xj = l;
        this.dispatchEvent(new Jo(Zi, this, a.clientX, a.clientY, a, Ko(this, this.ur), Lo(this, this.vr), b))
    }
};
var Mo = "beforedrag";
n.I_ = function (a) {
    if (this.bB) {
        var b = a.qw - this.gs,
            c = a.sw - this.hs;
        this.gs = a.qw;
        this.hs = a.sw;
        if (!this.xj) {
            var d = this.yM - this.gs,
                e = this.zM - this.hs;
            if (d * d + e * e > this.HB) {
                Ho(this, a);
                if (!this.xj) {
                    this.Pv(a);
                    return
                }
            }
        }
        c = No(this, b, c);
        b = c.x;
        c = c.y;
        if (this.xj) if (this.dispatchEvent(new Jo(Mo, this, a.clientX, a.clientY, a, b, c)) !== l) {
            this.kA(a, b, c, l);
            a.preventDefault()
        }
    }
};

function No(a, b, c) {
    var d = z.J(a.n).hg();
    b += d.x - a.g.x;
    c += d.y - a.g.y;
    a.g = d;
    a.ur += b;
    a.vr += c;
    return new bd(Ko(a, a.ur), Lo(a, a.vr))
}
n.v0 = function (a) {
    var b = No(this, 0, 0);
    a.clientX = this.g.x - this.gs;
    a.clientY = this.g.x - this.hs;
    this.kA(a, b.x, b.y, i)
};
var Oo = "drag";n.kA = function (a, b, c) {
    this.target.style.left = b + D;
    this.target.style.top = c + D;
    this.dispatchEvent(new Jo(Oo, this, a.clientX, a.clientY, a, b, c))
};

function Ko(a, b) {
    var c = a.Bh,
        d = !isNaN(c.left) ? c.left : k;c = !isNaN(c.width) ? c.width : 0;
    return Math.min(d != k ? d + c : Infinity,
    Math.max(d != k ? d : -Infinity,
    b))
}

function Lo(a, b) {
    var c = a.Bh,
        d = !isNaN(c.top) ? c.top : k;c = !isNaN(c.height) ? c.height : 0;
    return Math.min(d != k ? d + c : Infinity,
    Math.max(d != k ? d : -Infinity,
    b))
}
function Jo(a, b, c, d, e, g, h, j) {
    Pd.call(this, a);
    this.clientX = c;
    this.clientY = d;
    this.g = e;
    this.left = p(g) ? g : b.ur;this.top = p(h) ? h : b.vr;this.a = b;this.u = !! j
}
s(Jo, Pd);

function Po() {}
Qa(Po);Po.prototype.a = 0;Po.N();

function Qo(a) {
    this.Xe = a || z.J();
    this.dy = Ro
}
s(Qo, Pi);Qo.prototype.lb = Po.N();
var Ro = k;n = Qo.prototype;n.zo = k;n.Xe = k;n.cb = l;n.ua = k;n.dy = k;n.gD = k;n.ib = k;n.bd = k;n.Uf = k;n.OE = l;n.ma = function () {
    return this.zo || (this.zo = Sf + (this.lb.a++).toString(36))
};n.z = function () {
    return this.ua
};n.sb = function (a) {
    this.ua = a
};

function So(a) {
    return a.K || (a.K = new ze(a))
}
var To = "Unable to set parent component";

function Uo(a, b) {
    if (a == b) f(Error(To));
    if (b && a.ib && a.zo && Vo(a.ib, a.zo) && a.ib != b) f(Error(To));
    a.ib = b;
    Qo.p.kE.call(a, b)
}
var Wo = "Method not supported";n.kE = function (a) {
    if (this.ib && this.ib != a) f(Error(Wo));
    Qo.p.kE.call(this, a)
};n.J = function () {
    return this.Xe
};n.F = function () {
    this.ua = this.Xe.createElement(A)
};n.Ja = function (a) {
    Xo(this, a)
};n.QD = function (a) {
    Xo(this, a.parentNode, a)
};
var Yo = "Component already rendered";

function Xo(a, b, c) {
    if (a.cb) f(Error(Yo));
    a.ua || a.F();
    b ? b.insertBefore(a.ua, c || k) : a.Xe.Va().body.appendChild(a.ua);
    if (!a.ib || a.ib.cb) a.ga()
}
function Zo(a, b) {
    if (a.cb) f(Error(Yo));
    else if (b && a.We(b)) {
        a.OE = i;
        if (!a.Xe || a.Xe.Va() != z.wb(b)) a.Xe = z.J(b);
        a.ob(b);
        a.ga()
    } else f(Error("Invalid element to decorate"))
}
n.We = function () {
    return i
};n.ob = function (a) {
    this.ua = a
};n.ga = function () {
    this.cb = i;
    $o(this, function (a) {
        !a.cb && a.z() && a.ga()
    })
};
n.pb = function () {
    $o(this, function (a) {
        a.cb && a.pb()
    });
    this.K && De(this.K);
    this.cb = l
};n.q = function () {
    Qo.p.q.call(this);
    this.cb && this.pb();
    if (this.K) {
        this.K.G();
        delete this.K
    }
    $o(this, function (a) {
        a.G()
    });
    !this.OE && this.ua && z.removeNode(this.ua);
    this.ib = this.gD = this.ua = this.Uf = this.bd = k
};n.Il = function () {
    return this.gD
};n.Nt = function (a) {
    this.gD = a
};n.ya = function (a, b) {
    this.fj(a, ap(this), b)
};
n.fj = function (a, b, c) {
    if (a.cb && (c || !this.cb)) f(Error(Yo));
    if (b < 0 || b > ap(this)) f(Error("Child component index out of bounds"));
    if (!this.Uf || !this.bd) {
        this.Uf = {};
        this.bd = []
    }
    if (a.ib == this) {
        this.Uf[a.ma()] = a;
        xc(this.bd, a)
    } else xb(this.Uf, a.ma(), a);
    Uo(a, this);
    wc(this.bd, b, 0, a);
    if (a.cb && this.cb && a.ib == this) {
        c = this.db();
        c.insertBefore(a.z(), c.childNodes[b] || k)
    } else if (c) {
        this.ua || this.F();
        b = bp(this, b + 1);
        Xo(a, this.db(), b ? b.ua : k)
    } else this.cb && !a.cb && a.ua && a.ga()
};n.db = function () {
    return this.ua
};

function ap(a) {
    return a.bd ? a.bd.length : 0
}
function Vo(a, b) {
    var c;
    if (a.Uf && b) {
        c = a.Uf;
        c = b in c ? c[b] : void 0;c = c || k
    } else c = k;
    return c
}
function bp(a, b) {
    return a.bd ? a.bd[b] || k : k
}
function $o(a, b, c) {
    a.bd && kc(a.bd, b, c)
}
n.removeChild = function (a, b) {
    if (a) {
        var c = cb(a) ? a : a.ma();a = Vo(this, c);
        if (c && a) {
            vb(this.Uf, c);
            xc(this.bd, a);
            if (b) {
                a.pb();
                a.ua && z.removeNode(a.ua)
            }
            Uo(a, k)
        }
    }
    if (!a) f(Error("Child is not in parent component"));
    return a
};n.Jh = function (a) {
    for (; this.bd && this.bd.length != 0;) this.removeChild(bp(this, 0), a)
};
var Wga = "modal-dialog";

function cp(a, b, c) {
    Qo.call(this, c);
    this.Nc = a || Wga;
    this.KE = !! b;
    this.Bc = dp
}
s(cp, Qo);n = cp.prototype;n.Xv = k;n.UH = i;n.ts = i;n.KE = l;n.ht = i;n.JH = i;n.vz = 0.5;n.xw = v;n.lc = v;n.Bc = k;n.Ao = k;n.kb = l;n.Vn = l;n.sc = k;n.Ac = k;n.Qf = k;n.ih = k;n.FE = k;n.Bf = k;n.Af = k;n.zd = k;n.setTitle = function (a) {
    this.xw = a;
    this.ih && z.Ud(this.ih, a)
};

function ep(a, b) {
    a.lc = b;
    if (a.Af) a.Af.innerHTML = b
}
n.Pc = Ha(2);

function fp(a) {
    a.z() || a.Ja()
}
n.db = function () {
    fp(this);
    return this.Af
};

function gp(a) {
    fp(a);
    return a.z()
}

function hp(a) {
    fp(a);
    return a.sc
}
function ip(a, b) {
    a.ht = b;
    jp(a);
    var c = a.J();
    if (a.cb && b && a.Da()) {
        a.Ac && c.No(a.Ac, a.z());
        a.sc && c.No(a.sc, a.z());
        kp(a)
    }
}
var lp = "-title",
    mp = "-title-text",
    np = "-title-close",
    op = "-content",
    pp = "-buttons",
    qp = "dialog",
    rp = "labelledby";
n.F = function () {
    jp(this);
    var a = this.J();
    this.sb(a.F(A, {
        className: this.Nc,
        tabIndex: 0
    }, this.Qf = a.F(A, {
        className: this.Nc + lp,
        id: this.ma()
    }, this.ih = a.F(Ee, this.Nc + mp, this.xw), this.Bf = a.F(Ee, this.Nc + np)), this.Af = a.F(A, this.Nc + op), this.zd = a.F(A, this.Nc + pp), this.Ya = a.F(Ee, {
        tabIndex: 0
    })));
    this.FE = this.Qf.id;
    z.qb.Mh(this.z(), qp);
    z.qb.Ka(this.z(), rp, this.FE || v);
    if (this.lc) this.Af.innerHTML = this.lc;
    Qf(this.Bf, this.ts);
    Qf(this.z(), l);
    if (this.Bc) {
        a = this.Bc;
        a.ua = this.zd;
        a.Ja()
    }
};
var sp = "-bg";

function jp(a) {
    if (a.KE && a.ht && !a.Ac) {
        a.Ac = z.ie.ZG(a.J());
        a.Ac.className = a.Nc + sp;
        Qf(a.Ac, l);
        Pf(a.Ac, 0)
    } else if ((!a.KE || !a.ht) && a.Ac) {
        z.removeNode(a.Ac);
        a.Ac = k
    }
    if (a.ht && !a.sc) {
        a.sc = a.J().F(A, a.Nc + sp);
        Pf(a.sc, a.vz);
        Qf(a.sc, l)
    } else if (!a.ht && a.sc) {
        z.removeNode(a.sc);
        a.sc = k
    }
}
n.Ja = function (a) {
    if (this.cb) f(Error(Yo));
    this.z() || this.F();
    a = a || this.J().Va().body;
    tp(this, a);
    cp.p.Ja.call(this, a)
};

function tp(a, b) {
    a.Ac && b.appendChild(a.Ac);
    a.sc && b.appendChild(a.sc)
}
n.QD = function () {
    f(Error(Wo))
};
n.We = function (a) {
    return a && a.tagName && a.tagName == sd && cp.p.We.call(this, a)
};
var up = "button",
    vp = "cancel",
    wp = "-default";
n.ob = function (a) {
    cp.p.ob.call(this, a);
    z.ba.add(this.z(), this.Nc);
    a = this.Nc + op;
    if (this.Af = z.oc(k, a, this.z())[0]) this.lc = this.Af.innerHTML;
    else {
        this.Af = this.J().F(A, a);
        if (this.lc) this.Af.innerHTML = this.lc;
        this.z().appendChild(this.Af)
    }
    a = this.Nc + lp;
    var b = this.Nc + mp,
        c = this.Nc + np;
    if (this.Qf = z.oc(k, a, this.z())[0]) {
        this.ih = z.oc(k, b, this.Qf)[0];
        this.Bf = z.oc(k, c, this.Qf)[0]
    } else {
        this.Qf = this.J().F(A, a);
        this.z().insertBefore(this.Qf, this.Af)
    }
    if (this.ih) this.xw = z.$c(this.ih);
    else {
        this.ih = this.J().F(Ee, b, this.xw);
        this.Qf.appendChild(this.ih)
    }
    z.qb.Ka(this.z(), rp, this.FE || v);
    if (!this.Bf) {
        this.Bf = this.J().F(Ee, c);
        this.Qf.appendChild(this.Bf)
    }
    Qf(this.Bf, this.ts);
    a = this.Nc + pp;
    if (this.zd = z.oc(k, a, this.z())[0]) {
        a = this.Bc = new xp(this.J());
        b = this.zd;
        if (!(!b || b.nodeType != 1)) {
            a.ua = b;
            b = a.ua.getElementsByTagName(up);
            c = 0;
            for (var d, e, g; d = b[c]; c++) {
                e = d.name || d.id;
                g = z.$c(d) || d.value;
                if (e) {
                    var h = c == 0;
                    a.set(e, g, h, d.name == vp);
                    h && z.ba.add(d, a.Nc + wp)
                }
            }
        }
    } else {
        this.zd = this.J().F(A, a);
        this.z().appendChild(this.zd);
        if (this.Bc) {
            a = this.Bc;
            a.ua = this.zd;
            a.Ja()
        }
    }
    jp(this);
    tp(this, z.wb(this.z()).body);
    Qf(this.z(), l)
};
var Xga = "-title-draggable";n.ga = function () {
    cp.p.ga.call(this);
    this.Xv = new Bo(this.J().Va());
    if (this.JH && !this.Ao) {
        var a = new Do(this.z(), this.Qf);
        z.ba.add(this.Qf, this.Nc + Xga);
        this.Ao = a
    }
    So(this).C(this.Bf, Ud, this.A0).C(this.Xv, zo, this.r0);
    z.qb.Mh(this.z(), qp);
    this.ih.id !== v && z.qb.Ka(this.z(), rp, this.ih.id)
};n.pb = function () {
    this.Da() && this.X(l);
    this.Xv.G();
    this.Xv = k;
    if (this.Ao) {
        this.Ao.G();
        this.Ao = k
    }
    cp.p.pb.call(this)
};
var yp = "resize",
    zp = "afterhide";
n.X = function (a) {
    if (a != this.kb) {
        var b = this.J().Va(),
            c = z.fc(b) || window;
        this.cb || this.Ja(b.body);
        if (a) {
            kp(this);
            b = this.J().Va();
            var d = z.fc(b) || window;
            if (rf(this.z()) == yf) var e = b = 0;
            else {
                e = this.J().hg();
                b = e.x;
                e = e.y
            }
            var g = Mf(this.z());
            d = z.fe(d);
            b = Math.max(b + d.width / 2 - g.width / 2, 0);
            e = Math.max(e + d.height / 2 - g.height / 2, 0);
            uf(this.z(), b, e);
            So(this).C(this.z(), Qj, this.Nx, i).C(this.z(), Td, this.Nx, i).C(c, yp, this.MI, i)
        } else So(this).a(this.z(), Qj, this.Nx, i).a(this.z(), Td, this.Nx, i).a(c, yp, this.MI, i);
        this.Ac && Qf(this.Ac, a);
        this.sc && Qf(this.sc, a);
        Qf(this.z(), a);
        a && this.focus();
        if (this.kb = a) So(this).C(this.zd, Ud, this.pL);
        else {
            So(this).a(this.zd, Ud, this.pL);
            this.dispatchEvent(zp);
            this.Vn && this.G()
        }
    }
};n.Da = function () {
    return this.kb
};
var Ap = "input",
    Yga = "position:fixed;width:0;height:0;left:0;top:0;";
n.focus = function () {
    try {
        this.z().focus()
    } catch (a) {}
    if (this.Bc) {
        var b = this.Bc.pj;
        if (b) for (var c = this.J().Va(), d = this.zd.getElementsByTagName(up), e = 0, g; g = d[e]; e++) if (g.name == b) {
            try {
                if (y.La || y.Gc) {
                    var h = c.createElement(Ap);
                    h.style.cssText = Yga;
                    this.z().appendChild(h);
                    h.focus();
                    this.z().removeChild(h)
                }
                g.focus()
            } catch (j) {}
            break
        }
    }
};

function kp(a) {
    a.Ac && Qf(a.Ac, l);
    a.sc && Qf(a.sc, l);
    var b = a.J().Va(),
        c = z.fc(b) || window,
        d = z.fe(c);
    c = b.body.scrollWidth;
    b = Math.max(b.body.scrollHeight, d.height);
    if (a.Ac) {
        Qf(a.Ac, i);
        Ff(a.Ac, c, b)
    }
    if (a.sc) {
        Qf(a.sc, i);
        Ff(a.sc, c, b)
    }
    if (a.JH) {
        d = Mf(a.z());
        a.Ao.Bh = new mf(0, 0, c - d.width, b - d.height)
    }
}
n.A0 = function () {
    if (this.ts) {
        var a = this.Bc,
            b = a && a.il;
        if (b) {
            a = a.get(b);
            this.dispatchEvent(new Bp(b, a)) && this.X(l)
        } else this.X(l)
    }
};
n.q = function () {
    cp.p.q.call(this);
    if (this.sc) {
        z.removeNode(this.sc);
        this.sc = k
    }
    if (this.Ac) {
        z.removeNode(this.Ac);
        this.Ac = k
    }
    this.Ya = this.zd = this.Bf = k
};

function Cp(a, b) {
    a.Bc = b;
    if (a.zd) if (a.Bc) {
        var c = a.Bc;
        c.ua = a.zd;
        c.Ja()
    } else a.zd.innerHTML = v
}
n.pL = function (a) {
    a: {
        for (a = a.target; a != k && a != this.zd;) {
            if (a.tagName == dk) {
                a = a;
                break a
            }
            a = a.parentNode
        }
        a = k
    }
    if (a && !a.disabled) {
        a = a.name;
        var b = this.Bc.get(a);
        this.dispatchEvent(new Bp(a, b)) && this.X(l)
    }
};
n.Nx = function (a) {
    var b = l,
        c = l,
        d = this.Bc,
        e = a.target;
    if (a.type == Qj) if (this.UH && a.keyCode == 27) {
        var g = d && d.il;
        e = e.tagName == ek && !e.disabled;
        if (g && !e) {
            c = i;
            b = d.get(g);
            b = this.dispatchEvent(new Bp(g, b))
        } else e || (b = i)
    } else {
        if (a.keyCode == 9 && a.Cd && e == this.z()) c = i
    } else if (a.keyCode == 13) {
        if (e.tagName == dk) g = e.name;
        else if (d) {
            var h = d.pj,
                j = h && Dp(d, h);
            e = (e.tagName == ck || e.tagName == ek) && !e.disabled;
            if (j && !j.disabled && !e) g = h
        }
        if (g) {
            c = i;
            b = this.dispatchEvent(new Bp(g, String(d.get(g))))
        }
    }
    if (b || c) {
        a.stopPropagation();
        a.preventDefault()
    }
    b && this.X(l)
};n.MI = function () {
    kp(this)
};n.r0 = function (a) {
    this.Ya == a.target && Oj(this.QT, 0, this)
};n.QT = function () {
    y.ia && this.J().Va().body.focus();
    this.z().focus()
};
var Ep = "dialogselect";

function Bp(a, b) {
    this.type = Ep;
    this.key = a;
    this.caption = b
}
s(Bp, Pd);

function xp(a) {
    this.a = a || z.J();
    Tc.call(this)
}
var dp, Fp;s(xp, Tc);n = xp.prototype;n.Nc = "goog-buttonset";n.pj = k;n.ua = k;n.il = k;n.set = function (a, b, c, d) {
    Tc.prototype.set.call(this, a, b);
    if (c) this.pj = a;
    if (d) this.il = a;
    return this
};
n.Ja = function () {
    if (this.ua) {
        this.ua.innerHTML = v;
        var a = z.J(this.ua);
        Sc(this, function (b, c) {
            var d = a.F(up, {
                name: c
            }, b);
            if (c == this.pj) d.className = this.Nc + wp;
            this.ua.appendChild(d)
        }, this)
    }
};

function Dp(a, b) {
    for (var c = a.ua.getElementsByTagName(dk), d = 0, e; e = c[d]; d++) if (e.name == b || e.id == b) return e;
    return k
}
var Gp = "ok",
    Hp = "OK";Fp = (new xp).set(Gp, Hp, i, i);
var Ip = "Cancel";dp = (new xp).set(Gp, Hp, i).set(vp, Ip, l, i);
var Jp = "no";
(new xp).set("yes", "Yes", i).set(Jp, "No", l, i);
(new xp).set("yes", "Yes").set(Jp, "No", i).set(vp, Ip, l, i);
(new xp).set("continue", "Continue").set(rk, qk).set(vp, Ip, i, i);
var Kp = "close",
    Lp = "Close",
    Zga = "docs-dialog-modal-bg",
    $ga = "docs-dialog-alert",
    aha = "zIndex";

function Mp(a, b, c, d) {
    var e = new cp;
    e.setTitle(a);
    ep(e, b);
    fp(e);
    e.Bf.style.display = Hf;
    e.Vn = i;
    c && oe(e, Ep, c);
    Cp(e, (new xp).set(Kp, Lp, i));
    ip(e, i);
    e.vz = 0.5;
    e.sc && Pf(e.sc, e.vz);
    z.ba.add(hp(e), Zga);
    z.ba.add(gp(e), $ga);
    if (d) if (a = gp(d)) {
        a = pf(a, aha);
        hp(e).style.zIndex = a + 1;
        gp(e).style.zIndex = a + 2
    }
    e.X(i)
};

function Np() {}
s(Np, t);

function Op(a, b, c, d, e) {
    this.a = !! b;
    a && Pp(this, a, d);
    this.f = e != undefined ? e : this.Fe || 0;
    if (this.a) this.f *= -1;this.g = !c
}
s(Op, Oc);n = Op.prototype;n.Qd = k;n.Fe = k;n.wE = l;

function Pp(a, b, c, d) {
    if (a.Qd = b) a.Fe = fb(c) ? c : a.Qd.nodeType != 1 ? 0 : a.a ? -1 : 1;
    if (fb(d)) a.f = d
}
n.$h = function (a) {
    this.Qd = a.Qd;
    this.Fe = a.Fe;
    this.f = a.f;
    this.a = a.a;
    this.g = a.g
};n.sa = function () {
    return new Op(this.Qd, this.a, !this.g, this.Fe, this.f)
};
n.next = function () {
    var a;
    if (this.wE) {
        if (!this.Qd || this.g && this.f == 0) f(Nc);
        a = this.Qd;
        var b = this.a ? -1 : 1;
        if (this.Fe == b) {
            var c = this.a ? a.lastChild : a.firstChild;c ? Pp(this, c) : Pp(this, a, b * -1)
        } else(c = this.a ? a.previousSibling : a.nextSibling) ? Pp(this, c) : Pp(this, a.parentNode, b * -1);this.f += this.Fe * (this.a ? -1 : 1)
    } else this.wE = i;
    a = this.Qd;
    if (!this.Qd) f(Nc);
    return a
};n.Qa = function (a) {
    return a.Qd == this.Qd && (!this.Qd || a.Fe == this.Fe)
};
n.splice = function () {
    var a = this.Qd,
        b = this.a ? 1 : -1;
    if (this.Fe == b) {
        this.Fe = b * -1;
        this.f += this.Fe * (this.a ? -1 : 1)
    }
    this.a = !this.a;Op.prototype.next.call(this);this.a = !this.a;b = ab(arguments[0]) ? arguments[0] : arguments;
    for (var c = b.length - 1; c >= 0; c--) z.RB(b[c], a);z.removeNode(a)
};

function Qp() {}
function Rp(a) {
    if (a.getSelection) return a.getSelection();
    else {
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a) return k
                } else if (!c.length || c.item(0).document != a) return k
            } catch (d) {
                return k
            }
            return b
        }
        return k
    }
}
function Sp(a) {
    for (var b = [], c = 0, d = a.as(); c < d; c++) b.push(a.$r(c));
    return b
}
Qp.prototype.Bi = function () {
    return l
};Qp.prototype.Va = function () {
    return z.wb(y.ia ? this.lw() : this.Tb())
};Qp.prototype.fc = function () {
    return z.fc(this.Va())
};
Qp.prototype.containsNode = function (a, b) {
    return this.nj(z.uc.Wz(a), b)
};

function Tp(a, b) {
    Op.call(this, a, b, i)
}
s(Tp, Op);

function Up() {}
s(Up, Qp);Up.prototype.nj = function (a, b) {
    var c = Sp(this),
        d = Sp(a);
    return (b ? oc : pc)(d, function (e) {
        return oc(c, function (g) {
            return g.nj(e, b)
        })
    })
};

function Vp(a, b, c, d, e) {
    var g;
    if (a) {
        this.Gj = a;
        this.fs = b;
        this.dh = c;
        this.uo = d;
        if (a.nodeType == 1 && a.tagName != vd) {
            a = a.childNodes;
            if (b = a[b]) {
                this.Gj = b;
                this.fs = 0
            } else {
                if (a.length) this.Gj = hc(a);
                g = i
            }
        }
        if (c.nodeType == 1) if (this.dh = c.childNodes[d]) this.uo = 0;
        else this.dh = c
    }
    Tp.call(this, e ? this.dh : this.Gj,
    e);
    if (g) try {
        this.next()
    } catch (h) {
        if (h != Nc) f(h)
    }
}
s(Vp, Tp);n = Vp.prototype;n.Gj = k;n.dh = k;n.fs = 0;n.uo = 0;n.Tb = function () {
    return this.Gj
};n.yc = function () {
    return this.dh
};
n.Cs = function () {
    return this.wE && this.Qd == this.dh && (!this.uo || this.Fe != 1)
};n.next = function () {
    if (this.Cs()) f(Nc);
    return Vp.p.next.call(this)
};n.$h = function (a) {
    this.Gj = a.Gj;
    this.dh = a.dh;
    this.fs = a.fs;
    this.uo = a.uo;
    this.qh = a.qh;
    Vp.p.$h.call(this, a)
};n.sa = function () {
    var a = new Vp(this.Gj, this.fs, this.dh, this.uo, this.qh);
    a.$h(this);
    return a
};

function N(a) {
    this.a = y.Kc.vq ? [] : v;a != k && this.append.apply(this, arguments)
}
N.prototype.set = function (a) {
    this.clear();
    this.append(a)
};
if (y.Kc.vq) {
    N.prototype.f = 0;
    N.prototype.append = function (a, b) {
        if (b == k) this.a[this.f++] = a;
        else {
            this.a.push.apply(this.a, arguments);
            this.f = this.a.length
        }
        return this
    }
} else N.prototype.append = function (a, b) {
    this.a += a;
    if (b != k) for (var c = 1; c < arguments.length; c++) this.a += arguments[c];
    return this
};N.prototype.clear = function () {
    if (y.Kc.vq) this.f = this.a.length = 0;
    else this.a = v
};
N.prototype.toString = function () {
    if (y.Kc.vq) {
        var a = this.a.join(v);
        this.clear();
        a && this.append(a);
        return a
    } else return this.a
};z.Tf = {};

function Wp() {}
Wp.prototype.nj = function (a, b) {
    var c = b && !a.eh(),
        d = a.Or();
    try {
        return c ? this.Wf(d, 0, 1) >= 0 && this.Wf(d, 1, 0) <= 0 : this.Wf(d, 0, 0) >= 0 && this.Wf(d, 1, 1) <= 0
    } catch (e) {
        if (!y.ia) f(e);
        return l
    }
};Wp.prototype.containsNode = function (a, b) {
    return this.nj(z.Tf.kr(a), b)
};Wp.prototype.Uh = function () {
    return new Vp(this.Tb(), this.Qc(), this.yc(), this.Bd())
};

function Xp(a) {
    this.a = a
}
s(Xp, Wp);

function Yp(a) {
    var b = z.wb(a).createRange();
    if (a.nodeType == 3) {
        b.setStart(a, 0);
        b.setEnd(a, a.length)
    } else {
        for (var c, d = a; c = d.firstChild;) d = c;
        b.setStart(d, 0);
        for (d = a; c = d.lastChild;) d = c;
        b.setEnd(d, d.nodeType == 1 ? d.childNodes.length : d.length)
    }
    return b
}
function Zp(a, b, c, d) {
    var e = z.wb(a).createRange();
    e.setStart(a, b);
    e.setEnd(c, d);
    return e
}
n = Xp.prototype;n.sa = function () {
    return new this.constructor(this.a.cloneRange())
};n.Or = function () {
    return this.a
};n.$A = function () {
    return this.a.commonAncestorContainer
};
n.Tb = function () {
    return this.a.startContainer
};n.Qc = function () {
    return this.a.startOffset
};n.yc = function () {
    return this.a.endContainer
};n.Bd = function () {
    return this.a.endOffset
};n.Wf = function (a, b, c) {
    return this.a.compareBoundaryPoints(c == 1 ? b == 1 ? La.Range.START_TO_START : La.Range.START_TO_END : b == 1 ? La.Range.END_TO_START : La.Range.END_TO_END,
    a)
};n.eh = function () {
    return this.a.collapsed
};n.ee = Ha(8);n.select = function (a) {
    this.ky(z.fc(z.wb(this.Tb())).getSelection(), a)
};n.ky = function (a) {
    a.removeAllRanges();
    a.addRange(this.a)
};

function $p(a) {
    this.a = a
}
s($p, Xp);$p.prototype.ky = function (a, b) {
    var c = b ? this.yc() : this.Tb(),
        d = b ? this.Bd() : this.Qc(),
        e = b ? this.Tb() : this.yc(),
        g = b ? this.Qc() : this.Bd();a.collapse(c, d);
    if (c != e || d != g) a.extend(e, g)
};

function aq(a, b) {
    this.a = a;
    this.f = b
}
s(aq, Wp);
var bq = "character";

function cq(a) {
    var b = z.wb(a).body.createTextRange();
    if (a.nodeType == 1) b.moveToElementText(a);
    else {
        for (var c = 0, d = a; d = d.previousSibling;) {
            var e = d.nodeType;
            if (e == 3) c += d.length;
            else if (e == 1) {
                b.moveToElementText(d);
                break
            }
        }
        d || b.moveToElementText(a.parentNode);
        b.collapse(!d);
        c && b.move(bq, c);
        b.moveEnd(bq, a.length)
    }
    return b
}
n = aq.prototype;n.Sm = k;n.Ol = k;n.Nl = k;n.Ij = -1;n.Hj = -1;
n.sa = function () {
    var a = new aq(this.a.duplicate(), this.f);
    a.Sm = this.Sm;
    a.Ol = this.Ol;
    a.Nl = this.Nl;
    return a
};n.Or = function () {
    return this.a
};
n.$A = function () {
    if (!this.Sm) {
        var a = this.a.text,
            b = this.a.duplicate(),
            c = a.replace(/ +$/, v);
        (c = a.length - c.length) && b.moveEnd(bq, -c);
        c = b.parentElement();
        b = b.htmlText.replace(/(\r\n|\r|\n)+/g, x).length;
        if (this.eh() && b > 0) return this.Sm = c;
        for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, x).length;) c = c.parentNode;
        for (; c.childNodes.length == 1 && c.innerText == (c.firstChild.nodeType == 3 ? c.firstChild.nodeValue : c.firstChild.innerText);) {
            if (!(z.canHaveChildren(c.firstChild) || c.firstChild.nodeType == 3)) break;
            c = c.firstChild
        }
        if (a.length == 0) c = eq(this, c);
        this.Sm = c
    }
    return this.Sm
};

function eq(a, b) {
    for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
        var g = c[d];
        if (g.nodeType == 1) {
            var h = cq(g);
            if (a.a.inRange(h) || a.eh() && h.htmlText != g.outerHTML && a.Wf(h, 1, 1) >= 0) return eq(a, g)
        }
    }
    return b
}
n.Tb = function () {
    if (!this.Ol) {
        this.Ol = fq(this, 1);
        if (this.eh()) this.Nl = this.Ol
    }
    return this.Ol
};n.Qc = function () {
    if (this.Ij < 0) {
        this.Ij = gq(this, 1);
        if (this.eh()) this.Hj = this.Ij
    }
    return this.Ij
};
n.yc = function () {
    if (this.eh()) return this.Tb();
    if (!this.Nl) this.Nl = fq(this, 0);
    return this.Nl
};n.Bd = function () {
    if (this.eh()) return this.Qc();
    if (this.Hj < 0) {
        this.Hj = gq(this, 0);
        if (this.eh()) this.Ij = this.Hj
    }
    return this.Hj
};
var hq = "Start",
    iq = "End",
    jq = "To";n.Wf = function (a, b, c) {
    return this.a.compareEndPoints((b == 1 ? hq : iq) + jq + (c == 1 ? hq : iq), a)
};

function fq(a, b, c) {
    c = c || a.$A();
    if (!c || !c.firstChild) return c;
    for (var d = b == 1, e = d ? c.firstChild : c.lastChild,
        g = 0;e;) {
        var h = z.Tf.kr(e),
            j = h.Or();
        if (a.eh()) if (z.canHaveChildren(e) || e.nodeType == 3) {
            if (h.nj(a)) return fq(a, b, e)
        } else {
            if (a.Wf(j, 1, 1) == 0) {
                a.Ij = a.Hj = g;
                return c
            }
        } else if (a.nj(h)) {
            if (!(z.canHaveChildren(e) || e.nodeType == 3)) {
                if (d) a.Ij = g;
                else a.Hj = c.childNodes.length - g;
                return c
            }
            return fq(a, b, e)
        } else if (a.Wf(j, 1, 0) < 0 && a.Wf(j, 0, 1) > 0) return fq(a, b, e);
        e = d ? e.nextSibling : e.previousSibling;g++
    }
    return c
}
var kq = "EndToEnd",
    lq = "StartToStart";

function gq(a, b, c) {
    var d = b == 1;
    c = c || (d ? a.Tb() : a.yc());
    if (c.nodeType == 1) {
        c = c.childNodes;
        for (var e = c.length, g = d ? 1 : -1,
            h = d ? 0 : e - 1;h >= 0 && h < e;h += g) {
            var j = c[h];
            if (!(z.canHaveChildren(j) || j.nodeType == 3)) if (a.a.compareEndPoints((b == 1 ? hq : iq) + jq + (b == 1 ? hq : iq), z.Tf.kr(j).Or()) == 0) return d ? h : h + 1
        }
        return h == -1 ? 0 : h
    } else {
        a = a.a.duplicate();
        b = cq(c);
        a.setEndPoint(d ? kq : lq,
        b);
        a = a.text.length;
        return d ? c.length - a : a
    }
}
n.eh = function () {
    return this.a.text == v
};n.ee = Ha(7);n.select = function () {
    this.a.select()
};

function mq(a) {
    this.a = a
}
s(mq, Xp);mq.prototype.ky = function (a) {
    a.collapse(this.Tb(), this.Qc());
    if (this.yc() != this.Tb() || this.Bd() != this.Qc()) a.extend(this.yc(), this.Bd());
    a.rangeCount == 0 && a.addRange(this.a)
};

function nq(a) {
    this.a = a
}
s(nq, Xp);nq.prototype.Wf = function (a, b, c) {
    if (y.Xb(id)) return nq.p.Wf.call(this, a, b, c);
    return this.a.compareBoundaryPoints(c == 1 ? b == 1 ? La.Range.START_TO_START : La.Range.END_TO_START : b == 1 ? La.Range.START_TO_END : La.Range.END_TO_END,
    a)
};nq.prototype.ky = function (a, b) {
    a.removeAllRanges();
    b ? a.setBaseAndExtent(this.yc(), this.Bd(), this.Tb(), this.Qc()) : a.setBaseAndExtent(this.Tb(), this.Qc(), this.yc(), this.Bd())
};z.Tf.createRange = function (a) {
    return y.ia ? new aq(a, z.wb(a.parentElement())) : y.La ? new nq(a) : y.Ua ? new $p(a) : y.Gc ? new mq(a) : new Xp(a)
};z.Tf.kr = function (a) {
    if (y.ia) {
        var b = new aq(cq(a), z.wb(a));
        b.Sm = a;
        a = b
    } else a = y.La ? new nq(Yp(a)) : y.Ua ? new $p(Yp(a)) : y.Gc ? new mq(Yp(a)) : new Xp(Yp(a));
    return a
};
z.Tf.MQ = function (a, b, c, d) {
    if (y.ia) {
        var e = a,
            g = b,
            h = c,
            j = d,
            m = l;
        if (e.nodeType == 1) {
            g = e.childNodes[g];
            m = !g;
            e = g || e.lastChild || e;
            g = 0
        }
        e = cq(e);
        g && e.move(bq, g);
        m && e.collapse(l);
        m = l;
        if (h.nodeType == 1) {
            h = (g = h.childNodes[j]) || h.lastChild || h;
            j = 0;
            m = !g
        }
        h = cq(h);
        h.collapse(!m);
        j && h.moveEnd(bq, j);
        e.setEndPoint(kq, h);
        j = new aq(e, z.wb(a));
        j.Ol = a;
        j.Ij = b;
        j.Nl = c;
        j.Hj = d;
        a = j
    } else a = y.La ? new nq(Zp(a, b, c, d)) : y.Ua ? new $p(Zp(a, b, c, d)) : y.Gc ? new mq(Zp(a, b, c, d)) : new Xp(Zp(a, b, c, d));
    return a
};

function oq() {}
s(oq, Qp);

function pq(a, b) {
    var c = new oq;
    c.Rq = a;
    c.qh = !! b;
    return c
}
function qq(a, b, c, d) {
    var e = new oq;
    e.qh = z.uc.Bi(a, b, c, d);
    if (a.tagName == vd) {
        var g = a.parentNode;
        b = jc(g.childNodes, a);
        a = g
    }
    if (c.tagName == vd) {
        g = c.parentNode;
        d = jc(g.childNodes, c);
        c = g
    }
    if (e.qh) {
        e.wo = c;
        e.Ll = d;
        e.vo = a;
        e.Kl = b
    } else {
        e.wo = a;
        e.Ll = b;
        e.vo = c;
        e.Kl = d
    }
    return e
}
n = oq.prototype;n.Rq = k;n.wo = k;n.Ll = k;n.vo = k;n.Kl = k;n.qh = l;n.sa = function () {
    var a = new oq;
    a.Rq = this.Rq;
    a.wo = this.wo;
    a.Ll = this.Ll;
    a.vo = this.vo;
    a.Kl = this.Kl;
    a.qh = this.qh;
    return a
};
n.O = function () {
    return ih
};n.IA = function () {
    return rq(this).Or()
};n.as = function () {
    return 1
};n.$r = function () {
    return this
};

function rq(a) {
    return a.Rq || (a.Rq = z.Tf.MQ(a.Tb(), a.Qc(), a.yc(), a.Bd()))
}
n.lw = function () {
    return rq(this).$A()
};n.Tb = function () {
    return this.wo || (this.wo = rq(this).Tb())
};n.Qc = function () {
    return this.Ll != k ? this.Ll : this.Ll = rq(this).Qc()
};n.yc = function () {
    return this.vo || (this.vo = rq(this).yc())
};n.Bd = function () {
    return this.Kl != k ? this.Kl : this.Kl = rq(this).Bd()
};n.Bi = function () {
    return this.qh
};
var sq = "control";n.nj = function (a, b) {
    var c = a.O();
    if (c == ih) return rq(this).nj(rq(a), b);
    else if (c == sq) {
        c = a.Dj();
        return (b ? oc : pc)(c, function (d) {
            return this.containsNode(d, b)
        }, this)
    }
    return l
};n.ee = Ha(6);n.Uh = function () {
    return new Vp(this.Tb(), this.Qc(), this.yc(), this.Bd())
};n.select = function () {
    rq(this).select(this.qh)
};n.YD = function () {
    return new tq(this)
};

function tq(a) {
    this.a = a.Bi() ? a.yc() : a.Tb();this.g = a.Bi() ? a.Bd() : a.Qc();this.f = a.Bi() ? a.Tb() : a.yc();this.n = a.Bi() ? a.Qc() : a.Bd()
}
s(tq, Np);
tq.prototype.q = function () {
    tq.p.q.call(this);
    this.f = this.a = k
};

function uq() {}
s(uq, Up);

function vq(a) {
    var b = new uq;
    b.bh = a;
    return b
}
function bha() {
    for (var a = z.wb(arguments[0]).body.createControlRange(), b = 0, c = arguments.length; b < c; b++) a.addElement(arguments[b]);
    return vq(a)
}
n = uq.prototype;n.bh = k;n.nw = k;n.yy = k;n.sa = function () {
    return bha.apply(this, this.Dj())
};n.O = function () {
    return sq
};n.IA = function () {
    return this.bh || document.body.createControlRange()
};n.as = function () {
    return this.bh ? this.bh.length : 0
};n.$r = function (a) {
    a = this.bh.item(a);
    return pq(z.Tf.kr(a), void 0)
};
n.lw = function () {
    return z.YH.apply(k, this.Dj())
};n.Tb = function () {
    return wq(this)[0]
};n.Qc = function () {
    return 0
};n.yc = function () {
    var a = wq(this),
        b = hc(a);
    return qc(a, function (c) {
        return z.contains(c, b)
    })
};n.Bd = function () {
    return this.yc().childNodes.length
};n.Dj = function () {
    if (!this.nw) {
        this.nw = [];
        if (this.bh) for (var a = 0; a < this.bh.length; a++) this.nw.push(this.bh.item(a))
    }
    return this.nw
};

function wq(a) {
    if (!a.yy) {
        a.yy = a.Dj().concat();
        a.yy.sort(function (b, c) {
            return b.sourceIndex - c.sourceIndex
        })
    }
    return a.yy
}
n.ee = Ha(5);n.Uh = function () {
    return new xq(this)
};n.select = function () {
    this.bh && this.bh.select()
};n.YD = function () {
    return new yq(this)
};

function yq(a) {
    this.a = a.Dj()
}
s(yq, Np);yq.prototype.q = function () {
    yq.p.q.call(this);
    delete this.a
};

function xq(a) {
    if (a) {
        this.Jl = wq(a);
        this.so = this.Jl.shift();
        this.mw = hc(this.Jl) || this.so
    }
    Tp.call(this, this.so, l)
}
s(xq, Tp);n = xq.prototype;n.so = k;n.mw = k;n.Jl = k;n.Tb = function () {
    return this.so
};n.yc = function () {
    return this.mw
};n.Cs = function () {
    return !this.f && !this.Jl.length
};
n.next = function () {
    if (this.Cs()) f(Nc);
    else if (!this.f) {
        var a = this.Jl.shift();
        Pp(this, a, 1, 1);
        return a
    }
    return xq.p.next.call(this)
};n.$h = function (a) {
    this.Jl = a.Jl;
    this.so = a.so;
    this.mw = a.mw;
    xq.p.$h.call(this, a)
};n.sa = function () {
    var a = new xq(k);
    a.$h(this);
    return a
};

function zq() {
    this.a = [];
    this.n = [];
    this.g = this.f = k
}
s(zq, Up);n = zq.prototype;n.sa = function () {
    var a = new zq;
    a.a = Ac(this.a);
    return a
};
var cha = "mutli";n.O = function () {
    return cha
};n.IA = function () {
    return this.a[0]
};n.as = function () {
    return this.a.length
};n.$r = function (a) {
    this.n[a] || (this.n[a] = pq(z.Tf.createRange(this.a[a]), void 0));
    return this.n[a]
};n.lw = function () {
    if (!this.g) {
        for (var a = [], b = 0, c = this.as(); b < c; b++) a.push(this.$r(b).lw());
        this.g = z.YH.apply(k, a)
    }
    return this.g
};

function Aq(a) {
    if (!a.f) {
        a.f = Sp(a);
        a.f.sort(function (b, c) {
            var d = b.Tb(),
                e = b.Qc(),
                g = c.Tb(),
                h = c.Qc();
            if (d == g && e == h) return 0;
            return z.uc.Bi(d, e, g, h) ? 1 : -1
        })
    }
    return a.f
}
n.Tb = function () {
    return Aq(this)[0].Tb()
};n.Qc = function () {
    return Aq(this)[0].Qc()
};n.yc = function () {
    return hc(Aq(this)).yc()
};n.Bd = function () {
    return hc(Aq(this)).Bd()
};n.ee = Ha(4);n.Uh = function () {
    return new Bq(this)
};n.select = function () {
    var a = Rp(this.fc());
    a.removeAllRanges();
    for (var b = 0, c = this.as(); b < c; b++) a.addRange(this.$r(b).IA())
};
n.YD = function () {
    return new Cq(this)
};

function Cq(a) {
    this.a = nc(Sp(a), function (b) {
        return b.YD()
    })
}
s(Cq, Np);Cq.prototype.q = function () {
    Cq.p.q.call(this);
    kc(this.a, function (a) {
        a.G()
    });
    delete this.a
};

function Bq(a) {
    if (a) this.Pj = nc(Aq(a), function (b) {
        return maa(b)
    });
    Tp.call(this, a ? this.Tb() : k,
    l)
}
s(Bq, Tp);n = Bq.prototype;n.Pj = k;n.wv = 0;n.Tb = function () {
    return this.Pj[0].Tb()
};n.yc = function () {
    return hc(this.Pj).yc()
};n.Cs = function () {
    return this.Pj[this.wv].Cs()
};
n.next = function () {
    try {
        var a = this.Pj[this.wv],
            b = a.next();
        Pp(this, a.Qd, a.Fe, a.f);
        return b
    } catch (c) {
        if (c !== Nc || this.Pj.length - 1 == this.wv) f(c);
        else {
            this.wv++;
            return this.next()
        }
    }
};n.$h = function (a) {
    this.Pj = Ac(a.Pj);
    Bq.p.$h.call(this, a)
};n.sa = function () {
    var a = new Bq(k);
    a.$h(this);
    return a
};z.uc = {};z.uc.c5 = function (a) {
    return (a = Rp(a || window)) && z.uc.KQ(a)
};z.uc.KQ = function (a) {
    var b, c = l;
    if (a.createRange) try {
        b = a.createRange()
    } catch (d) {
        return k
    } else if (a.rangeCount) if (a.rangeCount > 1) {
        b = new zq;
        c = 0;
        for (var e = a.rangeCount; c < e; c++) b.a.push(a.getRangeAt(c));
        return b
    } else {
        b = a.getRangeAt(0);
        c = z.uc.Bi(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
    } else return k;
    return z.uc.JQ(b, c)
};z.uc.JQ = function (a, b) {
    return a && a.addElement ? vq(a) : pq(z.Tf.createRange(a), b)
};
z.uc.Wz = function (a, b) {
    return pq(z.Tf.kr(a), b)
};z.uc.a5 = function (a, b) {
    return qq(a, b, a, b)
};z.uc.b5 = function (a, b, c, d) {
    return qq(a, b, c, d)
};z.uc.T4 = function (a) {
    if (a = Rp(a || window)) if (a.empty) try {
        a.empty()
    } catch (b) {} else a.removeAllRanges()
};
var Dq = "None";z.uc.Kb = function (a) {
    a = Rp(a || window);
    return !!a && (y.ia ? a.type != Dq : !! a.rangeCount)
};
z.uc.Bi = function (a, b, c, d) {
    if (a == c) return d < b;
    var e;
    if (a.nodeType == 1 && b) if (e = a.childNodes[b]) {
        a = e;
        b = 0
    } else if (z.contains(a, c)) return i;
    if (c.nodeType == 1 && d) if (e = c.childNodes[d]) {
        c = e;
        d = 0
    } else if (z.contains(c, a)) return l;
    return (z.CQ(a, c) || b - d) > 0
};
var Eq = "kix-clipboard-iframe",
    Fq = "true",
    dha = "-webkit-nbsp-mode";

function Gq(a, b, c, d, e, g) {
    this.f = g = g || z.J();
    this.V = a;
    this.u = c && y.product.jO;
    this.M = d;
    this.K = e;
    this.g = {};
    this.n = {};
    a = {
        className: Eq,
        src: z.ie.vn
    };
    if (y.ia) {
        a.frameborder = Xd;
        a.allowTransparency = Fq
    }
    a = g.F(zd, a);
    if (b) a.name = Eq;
    if (y.La) a.style[dha] = G;
    g.Va().body.appendChild(a);
    this.a = a;
    this.L = new ze(this);
    y.La ? this.YJ() : this.L.C(this.a, Oe, this.YJ)
}
s(Gq, Pi);
var Hq = y.Ua && y.Xb(He),
    Iq = y.ia || y.La,
    eha = y.ia,
    Jq = y.ia || Hq || y.La,
    fha = !y.La,
    Kq = "internal-source-marker_" + Math.random();n = Gq.prototype;n.Gs = l;n.kb = i;n.cI = l;n.Rj = l;n.On = k;n.Vf = k;n.rl = k;n.Yq = k;n.Qo = k;n.Uw = l;n.ML = 0;n.lu = k;

function Lq(a, b, c, d, e, g, h, j) {
    a.a.style.top = b + D;
    a.a.style.left = c + D;
    a.a.style.width = d + D;
    a.a.style.height = e + D;
    a = Mq(a);
    a.style.textIndent = (g || 0) + D;
    a.style.marginLeft = (h || 0) + D;
    if (j) a.style.fontSize = j + ki
}
function Mq(a) {
    return a.u ? a.Yq : a.rl
}
n.$c = function () {
    var a = Mq(this);
    return y.ia ? a.innerText : a.textContent
};

function Nq(a) {
    a = Mq(a);
    if (y.ia) a.innerText = v;
    else a.textContent = v
}
n.X = function (a) {
    if (this.kb != a) {
        this.a.style.display = a ? v : Hf;this.kb = a
    }
};
var gha = "autocapitalize",
    hha = "off",
    Oq = "initialize";
n.YJ = function () {
    if (!this.Rj) {
        var a;
        b: {
            this.On = this.a.contentWindow;
            try {
                this.Vf = this.On.document
            } catch (b) {
                if (!fha) f(b);
                if (this.ML > 3) f(Error("Attempt to initialize clipboard iframe failed."));
                this.a.src = z.ie.vn;
                this.ML++;
                a = l;
                break b
            }
            this.rl = this.Vf.body;
            this.rl.style.margin = 0;
            this.rl.style.backgroundColor = li;
            a = i
        }
        if (a) {
            if (this.u) {
                this.Yq = this.f.F(ck);
                this.Yq.setAttribute(gha, hha);
                this.f.appendChild(this.rl, this.Yq)
            } else if (y.Ua) this.Vf.designMode = ve;
            else this.rl.contentEditable = i;
            a = Mq(this);
            Jq && this.L.C(a, Ak, Pq(this.V, this.MY, this)).C(a, wk, Pq(this.V, this.KY, this)).C(a, yk, Pq(this.V, this.LY, this));
            if (y.La && y.GF) {
                this.lu = Pq(this.V, this.ZX, this);
                document.addEventListener(Ak, this.lu, l)
            }
            a = this.On;
            this.L.C(a, Ao, Pq(this.V, this.NY, this), i).C(a, yo, Pq(this.V, this.JY, this), i);
            a = i
        } else a = l;
        if (a) {
            this.Rj = i;
            this.cI && this.EA();
            this.dispatchEvent(Oq)
        }
    }
};n.NY = function () {
    this.Uw = i;
    this.dispatchEvent(Ao)
};n.JY = function () {
    this.Uw = l;
    this.dispatchEvent(yo)
};n.Ef = function () {
    if (this.Gs) {
        y.ia || Oj(this.EA, 0, this);
        this.EA()
    }
};
n.EA = function () {
    if (this.Rj) {
        if (this.Gs) {
            this.On.focus();
            this.u && Mq(this).focus();
            if (y.La) {
                var a = document.createRange();
                a.selectNodeContents(Mq(this));
                y.product.qq && y.Xk && a.collapse(i);
                window.getSelection().addRange(a)
            }
        }
    } else this.cI = i
};n.co = function () {
    this.On.focus();
    Mq(this).focus();
    z.uc.Wz(Mq(this)).select()
};
var iha = "\u200b<br>",
    jha = "\u200b",
    kha = '<meta charset="utf-8">',
    lha = '<meta charset="utf-8">\u200b',
    mha = '<meta charset="utf-8"><br>\u200b',
    nha = '<meta charset="utf-8">\u200b<br>';
n.Df = function () {
    var a;
    if (a = Mq(this)) {
        a = a.innerHTML;
        a = a == v || y.La && (a == iha || a == jha || a == kha || a == lha || a == mha || a == nha)
    } else a = i;
    return a
};
var Qq = "P",
    oha = "Apple-style-span";

function pha(a, b) {
    var c = b.pd(a);
    if (!c) return l;
    if (c.id == Kq) return i;
    if (y.ia && c.tagName == Qq) {
        c = b.pd(c);
        return !!c && c.id == Kq
    }
    if (y.La) {
        for (; c && c.className == oha;) c = b.pd(c);
        for (; c && c.tagName == Dd;) c = b.jw(c);
        if (c) {
            if (c.id == Kq) return i;
            if (c = b.pd(c)) return c.id == Kq
        }
    }
    return l
}
var Rq = "\u2318",
    qha = "Ctrl",
    rha = "Your browser does not allow access to your computer's clipboard.",
    Sq = "<br/>",
    sha = "Instead, please use ",
    tha = "-C for Copy, ",
    uha = "-X for Cut and",
    vha = "-V for Paste, or use your browser's Edit menu.",
    Tq = "Attention";

function Uq(a, b, c, d) {
    if (c) {
        a.co();
        y.ia ? Oj(r(a.GL, a, b, d)) : a.GL(b, d)
    } else {
        b = y.Fc ? Rq : qha;b = rha + (Sq + (Sq + (sha + (b + (tha + (b + (uha + (Sq + (b + vha)))))))));Vq(a.K, i);Mp(Tq, b, r(a.IY, a))
    }
}
n.GL = function (a, b) {
    if (this.Vf) {
        this.n[a] = i;
        this.Vf.execCommand(a);
        this.n[a] = l;
        b && b()
    }
};
n.KY = function () {
    Wq(this, vk, wk)
};n.LY = function () {
    Wq(this, xk, yk)
};n.MY = function () {
    Wq(this, zk, Ak)
};
var Xq = "text/plain",
    wha = "white-space: pre;";n.ZX = function (a) {
    if (this.K.tb() == 5) if (a = a && a.clipboardData && a.clipboardData.getData(Xq)) {
        var b = Mq(this);
        b.innerHTML = v;
        z.appendChild(b, z.F(sd, {
            style: wha
        }, a.toString()));
        Wq(this, zk, Ak)
    }
};

function Wq(a, b, c) {
    b == zk && Hq && Yq(a);
    a.n[b] || Zq(a, c)
}
function Zq(a, b) {
    if (!a.g[b]) {
        a.g[b] = i;
        Oj(r(a.SR, a, b), 0)
    }
}
n.SR = function (a) {
    this.dispatchEvent(a);
    a == Ak && Yq(this);
    delete this.g[a]
};

function Yq(a) {
    Mq(a).innerHTML = v;
    y.La && z.uc.Wz(Mq(a)).select()
}
n.IY = function () {
    Vq(this.K, l)
};n.q = function () {
    Gq.p.q.call(this);
    this.f.removeNode(this.a);
    delete this.a;
    delete this.Yq;
    delete this.rl;
    delete this.Vf;
    delete this.On;
    delete this.f;
    delete this.g;
    delete this.Qo;
    if (this.lu) {
        document.removeEventListener(Ak, this.lu, l);
        delete this.lu
    }
    this.L.G();
    delete this.L
};

function $q(a, b, c, d, e, g) {
    this.f = a;
    this.M = b;
    this.g = c;
    this.u = d;
    this.K = e;
    this.n = g;
    this.a = []
}
s($q, t);n = $q.prototype;n.init = function () {
    Oj(this.dM, this.f, this)
};n.log = function (a, b) {
    this.a.push([a, b])
};n.bI = function (a, b) {
    ar(this, b, a, this.u)
};

function ar(a, b, c, d) {
    if (Za(window.jstiming)) {
        var e = new window.jstiming.Timer(c);
        e.name = d;
        for (d = 0; d < b.length; d++) {
            var g = a.n(b[d][0]),
                h = b[d][1];
            g && e.tick(g, undefined, c + h)
        }
        window.jstiming.report(e, a.g, a.M)
    }
}
n.dM = function () {
    if (this.a.length > 0) {
        var a = this.a,
            b = lb();
        ar(this, a, b, this.K);
        this.clear()
    }
    Oj(this.dM, this.f, this)
};n.clear = function () {
    this.a.length = 0
};n.q = function () {
    $q.p.q.call(this);
    this.a = k
};

function br() {}
br.prototype.init = Pa;br.prototype.clear = Pa;br.prototype.bI = Pa;br.prototype.log = Pa;

function cr(a) {
    return (new dr).Z(a)
}
function dr() {}
dr.prototype.Z = function (a) {
    var b = [];
    er(this, a, b);
    return b.join(v)
};
var fr = "{",
    gr = "}";

function er(a, b, c) {
    switch (typeof b) {
    case bb:
        hr(a, b, c);
        break;
    case Sa:
        c.push(isFinite(b) && !isNaN(b) ? b : Va);
        break;
    case db:
        c.push(b);
        break;
    case "undefined":
        c.push(Va);
        break;
    case Ra:
        if (b == k) {
            c.push(Va);
            break
        }
        if ($a(b)) {
            var d = b.length;
            c.push(Lg);
            for (var e = v, g = 0; g < d; g++) {
                c.push(e);
                er(a, b[g], c);
                e = Gj
            }
            c.push(Mg);
            break
        }
        c.push(fr);
        d = v;
        for (e in b) if (b.hasOwnProperty(e)) {
            g = b[e];
            if (typeof g != Ua) {
                c.push(d);
                hr(a, e, c);
                c.push(Sf);
                er(a, g, c);
                d = Gj
            }
        }
        c.push(gr);
        break;
    case Ua:
        break;
    default:
        f(Error("Unknown type: " + typeof b))
    }
}
var ir = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\u0008": "\\b",
    "\u000c": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\u000b": "\\u000b"
},
    xha = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
    yha = "\\u",
    zha = "000",
    Aha = "00";

function hr(a, b, c) {
    c.push(wb, b.replace(xha, function (d) {
        if (d in ir) return ir[d];
        var e = d.charCodeAt(0),
            g = yha;
        if (e < 16) g += zha;
        else if (e < 256) g += Aha;
        else if (e < 4096) g += Xd;
        return ir[d] = g + e.toString(16)
    }), wb)
};
var jr = "https:",
    Bha = document.location.protocol == jr ? "https://gg.google.com/csi" : "http://csi.gstatic.com/csi",
    kr = {},
    lr = "unknown";

function Cha(a) {
    return a ? a.toString() : lr
};

function mr(a) {
    this.n = a || lb;
    this.a = {};
    this.f = [];
    this.g = new br;
    this.saveInitialLoadStats = this.y1;
    this.getInitialLoadStats = this.KS
}
s(mr, t);Qa(mr);
var nr = {
    sP: Xd,
    mN: aj,
    mO: bj,
    sN: cj,
    nO: dj,
    qN: ej,
    pN: fj,
    DO: gj,
    lN: Wd,
    RO: hj,
    eN: Gf
};n = mr.prototype;n.nC = l;n.$e = k;n.Ab = function () {
    return this.nC
};n.la = function (a) {
    this.nC = a
};
var or = "tl",
    Dha = "lj",
    Eha = "ka",
    Fha = "cf",
    Gha = "slka",
    Hha = "al",
    Iha = "chv",
    Jha = "cov",
    Kha = "coe",
    Lha = "lm",
    Mha = "pm";
n.y1 = function (a) {
    var b = a.el - a.sl,
        c = a.ejl - a.sjl,
        d = a.eac - a.sac,
        e = a.ecf - a.scf,
        g = a.easl - a.sasl,
        h = a.al - a.sl,
        j = a.chv - a.sl,
        m = a.cov - a.sl,
        o = a.coe - a.sl,
        q = a.ml,
        u = a.mp;
    this.$e = {};
    this.$e[nr.sP] = b;
    this.$e[nr.mO] = c;
    this.$e[nr.sN] = d;
    this.$e[nr.lN] = e;
    this.$e[nr.RO] = g;
    this.$e[nr.eN] = h;
    this.$e[nr.mN] = j;
    this.$e[nr.qN] = m;
    this.$e[nr.pN] = o;
    this.$e[nr.nO] = q;
    this.$e[nr.DO] = u;
    this.g.bI(a.sl, [
        [or, b],
        [Dha, c],
        [Eha, d],
        [Fha, e],
        [Gha, g],
        [Hha, h],
        [Iha, j],
        [Jha, m],
        [Kha, o],
        [Lha, q],
        [Mha, u]
    ])
};n.KS = function () {
    return cr(this.$e)
};

function pr(a, b, c) {
    if (a.nC) {
        var d = a.n();
        a.a[b] || (a.a[b] = {});
        a.a[b][c] || (a.a[b][c] = []);
        a = a.a[b][c];
        for (b = a.length - 1; b >= 0; b--) if (d >= a[b]) break;
        a.splice(b + 1, 0, d)
    }
}
function qr(a, b, c) {
    if (a.Ab()) {
        var d = a.a[b];
        if (d) {
            d = d[c];
            if (!(!d || d.length == 0)) {
                d = d.pop();
                b = {
                    Lg: b,
                    name: c,
                    startTime: d,
                    duration: a.n() - d
                };
                c = a.f.length;
                for (d = 0; d < c; d++) a.f[d](b)
            }
        }
    }
}
n.q = function () {
    mr.p.q.call(this);
    delete this.f;
    delete this.a
};

function rr(a) {
    this.a = new Tc;
    this.f = a || k
}
s(rr, t);n = rr.prototype;n.set = function (a, b) {
    this.a.set(a, b)
};n.Ue = function () {
    return this.a.Ue()
};n.Ad = function (a) {
    return this.a.Ad(a)
};n.remove = function (a) {
    this.a.remove(a)
};n.execute = function (a) {
    var b = this.a.get(a) || this.f;
    if (b) return b.apply(undefined, Array.prototype.slice.call(arguments, 1));
    return k
};n.q = function () {
    rr.p.q.call(this);
    this.a.clear();
    delete this.a;
    delete this.f
};

function O(a, b) {
    this.n = a;
    this.A = b;
    this.f = [];
    this.g = []
}
s(O, t);n = O.prototype;n.Pg = uj;n.Rg = k;n.Qg = k;n.uz = k;n.jC = function () {
    return this.g
};n.nh = function () {
    return i
};n.O = function () {
    return this.n
};
var sr = "apTSty",
    tr = "csi",
    ur = "applyTextStyle";n.execute = function (a) {
    if (this.Pg == uj) {
        this.n == sr && pr(mr.N(), tr, ur);
        this.uz = a;
        var b = this.A.ra();
        this.Rg = b.sa();
        this.a(a);
        this.Qg = b.sa();
        this.Pg = mj;
        this.A.xc();
        this.n == sr && qr(mr.N(), tr, ur)
    }
    return this.f
};
n.XJ = function () {
    if (this.Pg != Aj && this.Pg != uj) {
        vr(this, this.g);
        var a = this.Rg;
        wr(this.A, a.Fa(), i, a.Dc);
        this.A.xc();
        this.Pg = Aj;
        return this.g
    }
    return []
};n.WJ = function () {
    if (this.Pg == Aj) {
        for (var a = this.f, b = [], c = 0, d; d = a[c]; c++) d.QJ() && b.push(d);
        vr(this, b);
        a = this.Qg;
        wr(this.A, a.Fa(), i, a.Dc);
        this.A.xc();
        this.Pg = xj;
        return b
    }
    return []
};n.pa = function (a) {
    if (this.Pg == uj) {
        a.a();
        this.nh() && vc(this.g, a.K, 0);
        Bc(this.f, a.g)
    }
};
n.na = function (a) {
    if (this.Pg == uj) {
        if (this.nh()) {
            var b = a.Sj(this.A);
            vc(this.g, b, 0)
        }
        this.A.na(a);
        this.f.push(a)
    }
};

function vr(a, b) {
    for (var c = a.A, d = 0; d < b.length; d++) c.na(b[d])
}
n.q = function () {
    O.p.q.call(this);
    delete this.A;
    delete this.uz;
    kc(this.f, function (a) {
        a.G()
    });
    delete this.f;
    this.Rg && this.Rg.G();
    delete this.Rg;
    this.Qg && this.Qg.G();
    delete this.Qg
};
var xr = new rr;

function yr(a, b) {
    xr.set(a, b)
};

function zr(a) {
    this.g = a
}
n = zr.prototype;n.O = function () {
    return this.g
};n.shift = function () {
    return this
};n.Z = function () {
    var a = {};
    a.loc_type = this.g;
    return a
};n.Le = function (a) {
    return !a || this.g != a.O() ? 1 : 0
};n.Qa = function (a) {
    return this.Le(a) == 0
};

function Ar(a, b, c) {
    this.Dm = a;
    this.n = b || 0;
    this.f = c;
    this.g = r(this.u, this)
}
s(Ar, t);Ar.prototype.a = 0;Ar.prototype.q = function () {
    Ar.p.q.call(this);
    Br(this);
    delete this.Dm;
    delete this.f
};Ar.prototype.start = function (a) {
    Br(this);
    this.a = Oj(this.g, p(a) ? a : this.n)
};

function Br(a) {
    a.a != 0 && Pj(a.a);
    a.a = 0
}
Ar.prototype.u = function () {
    this.a = 0;
    this.Dm && this.Dm.call(this.f)
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/

function Cr(a, b) {
    this.n = [];
    this.a = [k, k];
    this.g = a;
    this.u = b || k
}
n = Cr.prototype;n.dg = -1;n.zt = 0;n.qE = l;n.qQ = l;n.cancel = Ha(3);n.GQ = function (a) {
    Dr(this, a);
    this.zt--;
    this.zt == 0 && this.dg >= 0 && Er(this)
};

function Dr(a, b) {
    a.dg = b instanceof Error ? 1 : 0;a.a[a.dg] = b;Er(a)
}
function Fr(a) {
    if (a.dg >= 0) {
        if (!a.qE) f(new Gr(a));
        a.qE = l
    }
}
n.Tq = function (a) {
    Fr(this);
    Dr(this, a)
};n.vA = function (a) {
    Fr(this);
    Dr(this, a instanceof Error ? a : Error(a))
};

function Nha(a, b, c, d) {
    a.n.push([b, c, d]);
    a.dg >= 0 && Er(a);
    return a
}

function Er(a) {
    if (a.f && a.dg != 0) {
        Pj(a.f);
        delete a.f
    }
    for (var b = a.n, c = a.dg, d = a.a[c], e = l, g; b.length > 0 && a.zt == 0;) {
        var h = b.shift(),
            j = h[c];
        if (j) try {
            var m = j.call(h[2] || a.u, d);
            if (m !== undefined) d = m;
            c = d instanceof Error ? 1 : 0;
            if (d instanceof Cr) {
                g = r(a.GQ, a);
                a.zt++
            }
        } catch (o) {
            c = 1;
            d = o;
            b.length || (e = i)
        }
    }
    a.dg = c;
    a.a[c] = d;
    if (g && a.zt) {
        Nha(d, g, g, void 0);
        d.qQ = i
    }
    if (e) a.f = Oj(function () {
        f(d)
    })
}
function Gr(a) {
    Gb.call(this);
    this.a = a
}
s(Gr, Gb);Gr.prototype.message = "Already called";

function Hr() {}
s(Hr, t);Hr.prototype.cd = function () {};

function Ir(a, b) {
    this.a = a;
    this.f = b
}
Ir.prototype.execute = function (a) {
    if (this.a) {
        this.a.call(this.f || k, a);
        this.a = this.f = k
    }
};

function Jr(a, b) {
    this.fH = a;
    this.g = b;
    this.a = [];
    this.Mx = [];
    this.f = []
}
s(Jr, t);n = Jr.prototype;n.II = k;n.hD = Hr;n.jc = k;n.ma = function () {
    return this.g
};n.WA = function () {
    return this.II
};

function Kr(a, b) {
    if (a.hD === Hr) a.hD = b;
    else f(Error("Cannot set module constructor more than once."))
}
n.Ct = function (a, b) {
    return Lr(this, this.a, a, b)
};

function Lr(a, b, c, d) {
    a = new Ir(c, d);
    b.push(a);
    return a
}
n.Nb = function () {
    return !!this.jc
};

function Mr(a) {
    return a.jc
}

function Nr(a, b) {
    var c = new a.hD;
    c.cd(b());
    a.jc = c;
    c = Or(a, a.f, b());
    if (c = !! c | !! Or(a, a.a, b())) Pr(a, 4);
    else a.Mx.length = 0
}
var Oha = "Module errback failures: ";

function Pr(a, b) {
    var c = Or(a, a.Mx, b);
    c && Oj(Zba(Oha + c));
    a.f.length = 0;
    a.a.length = 0
}
function Or(a, b, c) {
    a = [];
    for (var d = 0; d < b.length; d++) try {
        b[d].execute(c)
    } catch (e) {
        a.push(e)
    }
    b.length = 0;
    return a.length ? a : k
}
n.q = function () {
    Jr.p.q.call(this);
    mb(this.jc)
};

function Qr() {
    this.a = {};
    this.f = [];
    this.g = [];
    this.u = [];
    this.K = {};
    this.n = this.M = new Jr([], v)
}
s(Qr, t);Qa(Qr);n = Qr.prototype;n.gQ = l;n.JK = k;n.IK = k;n.Qz = 0;n.AK = l;n.NM = l;n.iD = k;

function Rr(a, b) {
    return a.a[b]
}
n.tI = function () {
    return this.iD
};
var Pha = "active",
    Qha = "idle",
    Rha = "userActive",
    Sha = "userIdle";

function Sr(a) {
    var b = a.f.length > 0;
    if (b != a.AK) {
        Tr(a, b ? Pha : Qha);
        a.AK = b
    }
    b = a.u.length > 0;
    if (b != a.NM) {
        Tr(a, b ? Rha : Sha);
        a.NM = b
    }
}
function Ur(a, b) {
    if (a.f.length == 0) Vr(a, b);
    else {
        a.g.push(b);
        Sr(a)
    }
}

function Vr(a, b, c, d) {
    if (a.a[b].Nb()) f(Error("Module already loaded: " + b));
    b = Wr(a, b);
    if (!a.gQ && b.length > 1) {
        var e = b.shift();
        a.g = b.concat(a.g);
        b = [e]
    }
    if (!c) a.Qz = 0;
    a.f = b;
    Sr(a);
    c = Ac(b);
    b = r(a.fW, a);
    e = r(a.gW, a);
    a.JK.g(c, a.a, k, b, e, !! d)
}
function Wr(a, b) {
    for (var c = [b], d = Ac(a.a[b].fH); d.length;) {
        var e = d.pop();
        if (!a.a[e].Nb()) {
            c.unshift(e);
            Array.prototype.unshift.apply(d, a.a[e].fH)
        }
    }
    Dc(c);
    return c
}
function Xr(a, b) {
    Nr(a.a[b], r(a.tI, a));
    xc(a.u, b);
    xc(a.f, b);
    a.f.length == 0 && Yr(a);
    Sr(a)
}

function Zr(a, b, c, d, e, g, h) {
    var j = a.a[b];
    if (j.Nb()) {
        c = new Ir(c, d);
        h ? c.execute(a.iD) : window.setTimeout(r(c.execute, c), 0)
    } else if (sc(a.f, b) || sc(a.g, b)) {
        c = j.Ct(c, d);
        if (g) {
            a.u.push(b);
            Sr(a)
        }
    } else {
        c = j.Ct(c, d);
        if (!e) {
            g && a.u.push(b);
            Ur(a, b)
        }
    }
    return c
}
n.load = function (a, b) {
    var c = this.a[a],
        d = new Cr;
    if (c.Nb()) d.Tq(this.iD);
    else if (sc(this.f, a) || sc(this.g, a)) {
        c.Ct(d.Tq, d);
        Lr(c, c.Mx, d.vA, d);
        if (b) {
            this.u.push(a);
            Sr(this)
        }
    } else {
        c.Ct(d.Tq, d);
        Lr(c, c.Mx, d.vA, d);
        b && this.u.push(a);
        Ur(this, a)
    }
    return d
};
n.fW = function (a) {
    this.Qz++;
    if (a == 401) {
        $r(this, 0);
        this.g.length = 0
    } else if (a == 410) {
        $r(this, 3);
        Yr(this)
    } else if (this.Qz >= 3) {
        $r(this, 1);
        Yr(this)
    } else {
        var b = this.f.pop();
        this.f.length = 0;
        Vr(this, b, i, a == 8001)
    }
};n.gW = function () {
    $r(this, 2);
    Yr(this)
};
var as = "error";

function $r(a, b) {
    var c = a.f.pop();
    a.f.length = 0;
    var d = mc(a.g, function (m) {
        return sc(Wr(a, m), c)
    });
    c && uc(d, c);
    for (var e = 0; e < d.length; e++) {
        xc(a.g, d[e]);
        xc(a.u, d[e])
    }
    var g = a.K.error;
    if (g) for (e = 0; e < g.length; e++) for (var h = g[e], j = 0; j < d.length; j++) h(as, d[j], b);
    a.a[c] && Pr(a.a[c], b);
    Sr(a)
}
function Yr(a) {
    for (; a.g.length;) {
        var b = a.g.shift();
        if (!a.a[b].Nb()) {
            Vr(a, b);
            return
        }
    }
    Sr(a)
}
n.Ct = function (a, b) {
    $a(a) || (a = [a]);
    for (var c = 0; c < a.length; c++) {
        var d = a[c],
            e = b,
            g = this.K;
        g[d] || (g[d] = []);
        g[d].push(e)
    }
};

function Tr(a, b) {
    for (var c = a.K[b], d = 0; c && d < c.length; d++) c[d](b)
}
n.q = function () {
    Qr.p.q.call(this);
    kc(rb(this.a), mb);
    this.K = this.g = this.u = this.f = this.a = k
};
var Tha = "batch";

function bs(a, b) {
    O.call(this, Tha, b);
    this.K = a.O();
    this.Pg = mj;
    this.Rg = a.Rg
}
s(bs, O);bs.prototype.append = function (a) {
    if (a.O() == this.K) {
        Bc(this.f, a.f);
        vc(this.jC(), a.jC(), 0);
        this.Qg = a.Qg
    }
};
var cs = "collab";

function ds(a) {
    O.call(this, cs, a)
}
s(ds, O);ds.prototype.a = function (a) {
    for (var b = this.A, c = a.colMut, d = 0; d < c.length; d++) this.na(c[d]);
    (a = a.tsCr) && wr(b, a.Fa(), i, a.Dc, i)
};ds.prototype.nh = function () {
    return l
};ds.prototype.XJ = function () {
    return []
};ds.prototype.WJ = function () {
    return []
};yr(cs, function (a) {
    return new ds(a)
});
var es = "kix_app";

function fs(a, b) {
    this.A = a;
    this.V = b;
    this.a = [];
    this.f = [];
    this.g = [];
    this.n = new Ar(Pa, 1E4, this);
    this.L = new ze(this);
    Zr(Qr.N(), es, this.HY, this)
}
s(fs, t);n = fs.prototype;n.VJ = i;n.Uz = i;n.om = k;n.pv = i;n.mD = k;n.pr = k;n.la = function (a) {
    this.VJ = a
};n.HY = function () {
    var a = Mr(Rr(Qr.N(), es));
    this.mD = a.uI();
    this.pr = a.uS()
};
var gs = "del",
    hs = "bksp",
    is = "rvrt",
    js = "rplc",
    ks = "inCh";
n.execute = function (a, b) {
    if (this.VJ) if (!(!this.Uz && a != gs && a != hs)) {
        var c = xr.execute(a, this.A);
        if (c) {
            var d = c.execute(b);
            c.nh() && ls(this, d);
            for (var e = 0; e < d.length; e++) {
                var g = d[e].O();
                if (g == is || g == js) {
                    this.a.length = 0;
                    this.f.length = 0;
                    this.pv = i;
                    return
                }
            }
            if (c.f.length > 0 || !c.nh()) {
                if (this.a.length > 0 || c.nh()) if (c.nh()) {
                    if (this.n.a != 0 && this.a.length > 0) if (c.O() != this.a[0].K || c.O() != ks && c.O() != gs && c.O() != hs) Br(this.n);
                    if (this.n.a == 0 || this.a.length == 0) {
                        this.a.unshift(new bs(c, this.A));
                        this.n.start()
                    }
                    this.a[0].append(c)
                } else {
                    this.a.unshift(c);
                    Br(this.n)
                }
                if (c.nh()) {
                    this.pv = i;
                    this.f.length = 0
                } else this.f.length > 0 && this.f.unshift(c)
            }
        }
    }
};

function ms(a, b) {
    if (a.mD && a.pr) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d];
            if (e.nh()) {
                yc(b, d);
                d = e;
                c = c;
                var g = a.mD,
                    h = a.pr;
                d.f = g(d.f, c).Mn;
                d.g = g(d.g, c).Mn;
                if (d.Rg) d.Rg = h(d.Rg, c);
                if (d.Qg) d.Qg = h(d.Qg, c);
                return e
            } else vc(c, e.f, 0)
        }
        b.length = 0;
        return k
    }
    e = b.shift();
    if (!e.nh()) f(Error("Encountered non-local command before network communication was initialized."));
    return e
}

function ls(a, b) {
    if (b.length != 0) if (a.om) a.om.bE(b);
    else a.g = a.g.concat(b)
}
n.QW = function (a) {
    ns(this, a.a)
};

function ns(a, b) {
    var c = a.A,
        d = {};
    d.colMut = b;
    c = c.ra();
    var e = c.Fa();
    if (a.pr && e.O() == 0) d.tsCr = a.pr(c, b);
    a.execute(cs, d)
}
n.q = function () {
    fs.p.q.call(this);
    delete this.A;
    delete this.om;
    delete this.g;
    for (var a = 0; a < this.a.length; a++) this.a[a].G();
    delete this.a;
    for (a = 0; a < this.f.length; a++) this.f[a].G();
    delete this.f;
    this.L.G();
    delete this.L
};

function os() {
    this.a = {}
}
s(os, t);Qa(os);os.prototype.g = function (a) {
    this.a[a.Lg] || (this.a[a.Lg] = {});
    this.a[a.Lg][a.name] || (this.a[a.Lg][a.name] = new Uha);
    var b = a.duration;
    a = this.a[a.Lg][a.name];
    a.a += 1;
    a.f += b
};
var Vha = "\nEvent trace:\n",
    Wha = "\nCategory: ",
    Xha = " Number: ",
    Yha = " total: ",
    Zha = " average: ";os.prototype.f = function () {
    var a = [Vha];
    for (var b in this.a) {
        a.push(Wha + b + Hd);
        var c = b,
            d = a;
        for (var e in this.a[c]) {
            var g = this.a[c][e];
            d.push(e + Xha + g.a + Yha + g.f + Zha + g.f / g.a + Hd)
        }
        this.a[b] = {}
    }
    return a.join(v)
};
os.prototype.q = function () {
    os.p.q.call(this);
    delete this.a
};

function Uha() {
    this.f = this.a = 0
};

function ps() {}
s(ps, Pi);
var qs = "preferenceChange";

function rs(a, b) {
    Pd.call(this, qs, a);
    this.a = b
}
s(rs, Pd);rs.prototype.q = function () {
    rs.p.q.call(this);
    delete this.a
};

function ss() {
    this.a = {}
}
s(ss, ps);Qa(ss);
var ts = "userDictionaryChange",
    us = "kix-uDi";

function vs(a, b, c) {
    a.a[b.toLowerCase()] = i;
    if (c) {
        a.dispatchEvent(ts);
        a.dispatchEvent(new rs(a, {
            name: us,
            hM: [b]
        }))
    }
}
ss.prototype.update = function (a) {
    if ($a(a)) if ((a = a[1]) && $a(a)) {
        for (var b = l, c = 0; c < a.length; c++) {
            var d = a[c];
            if (hb(d)) {
                d = d[1];
                if (cb(d)) {
                    vs(this, d, l);
                    b = i
                }
            }
        }
        b && this.dispatchEvent(ts)
    }
};ss.prototype.q = function () {
    ss.p.q.call(this);
    delete this.a
};

function ws(a) {
    this.a = Ug;
    this.update(a || {})
}
s(ws, Sg);
var xs = "cell_bgc",
    ys = "cell_pb",
    zs = "cell_pl",
    As = "cell_pr",
    Bs = "cell_pt",
    Cs = "cell_va",
    $ha = {
        gN: xs,
        g4: ys,
        h4: zs,
        i4: As,
        j4: Bs,
        BP: Cs
    },
    Ds = "bottom",
    aia = {
        0: Ds,
        1: "middle",
        2: tf
    };n = ws.prototype;n.Ww = v;n.tm = 5;n.Js = 5;n.Ks = 5;n.Ls = 5;n.Ms = 2;n.Nr = function () {
    return this.Ww
};n.po = function () {
    return this.Ms
};n.fg = function () {
    return [mg]
};n.cf = function () {
    return i
};
n.Gb = function (a, b) {
    switch (a) {
    case xs:
        this.Ww = b;
        break;
    case Bs:
        this.tm = b;
        break;
    case ys:
        this.Js = b;
        break;
    case zs:
        this.Ks = b;
        break;
    case As:
        this.Ls = b;
        break;
    case Cs:
        this.Ms = b;
        break
    }
};n.Z = function () {
    var a = {};
    a.cell_bgc = this.Ww;
    a.cell_pt = this.tm;
    a.cell_pb = this.Js;
    a.cell_pl = this.Ks;
    a.cell_pr = this.Ls;
    a.cell_va = this.Ms;
    return a
};
n.ea = function (a) {
    switch (a) {
    case xs:
        return this.Ww;
    case Bs:
        return this.tm;
    case ys:
        return this.Js;
    case zs:
        return this.Ks;
    case As:
        return this.Ls;
    case Cs:
        return this.Ms
    }
    return ws.p.ea.call(this, a)
};n.Nj = function () {
    return l
};n.Uq = function () {
    return l
};n.be = function () {
    return rb($ha)
};n.sa = function () {
    return new ws(this.Z())
};qh(function () {
    return new ws
});

function Es(a) {
    this.update(a)
}
s(Es, Vf);n = Es.prototype;n.tn = 1;n.pq = 0;
var Fs = "col_wt",
    Gs = "col_wv";n.Gb = function (a, b) {
    switch (a) {
    case Fs:
        this.tn = b;
        break;
    case Gs:
        this.pq = b;
        break
    }
};n.ea = function (a) {
    switch (a) {
    case Fs:
        return this.tn;
    case Gs:
        return this.pq
    }
    return Es.p.ea.call(this, a)
};n.Uc = function (a) {
    var b = {};
    for (var c in a) switch (c) {
    case Fs:
        b[c] = this.tn;
        break;
    case Gs:
        b[c] = this.pq;
        break
    }
    return b
};n.Z = function () {
    var a = {};
    a.col_wt = this.tn;
    a.col_wv = this.pq;
    return a
};

function bia(a) {
    return new Es(a)
};

function Hs() {}
s(Hs, Vf);n = Hs.prototype;n.Vw = k;n.Cj = function () {
    return this.Vw
};
var Is = "bg_c";n.Gb = function (a, b) {
    switch (a) {
    case Is:
        this.Vw = b;
        break
    }
};n.ea = function (a) {
    switch (a) {
    case Is:
        return this.Vw
    }
    Hs.p.ea.call(this, a)
};n.Z = function () {
    var a = {};
    a.bg_c = this.Vw;
    return a
};

function Js(a) {
    this.a = Yg;
    this.g = new Hs;
    this.update(a || {})
}
s(Js, Sg);
var Ks = "ds_b",
    Ls = "ds_mb",
    Ms = "ds_ml",
    Ns = "ds_mr",
    Os = "ds_mt",
    Ps = "ds_pw",
    Qs = "ds_ph",
    cia = {
        b3: Ks,
        V3: Ls,
        W3: Ms,
        X3: Ns,
        Y3: Os,
        l4: Ps,
        k4: Qs
    };n = Js.prototype;n.Eh = 72;n.Fm = 72;n.hk = 72;n.Em = 72;n.yt = 612;n.rp = 792;

function Rs(a) {
    return Xe(Ge.N(), a.hk)
}
function Ss(a) {
    return Xe(Ge.N(), a.Em)
}
function Ts(a) {
    return Xe(Ge.N(), a.Fm)
}
function Us(a) {
    return Xe(Ge.N(), a.yt)
}
n.cf = function () {
    return i
};n.fg = function () {
    return [jg]
};
n.Gb = function (a, b) {
    switch (a) {
    case Ks:
        this.g.update(b);
        break;
    case Ls:
        this.hk = b;
        break;
    case Ms:
        this.Em = b;
        break;
    case Ns:
        this.Fm = b;
        break;
    case Os:
        this.Eh = b;
        break;
    case Qs:
        this.rp = b;
        break;
    case Ps:
        this.yt = b;
        break
    }
};n.Z = function () {
    var a = {};
    a.ds_b = this.g.Z();
    a.ds_mb = this.hk;
    a.ds_ml = this.Em;
    a.ds_mr = this.Fm;
    a.ds_mt = this.Eh;
    a.ds_ph = this.rp;
    a.ds_pw = this.yt;
    return a
};
n.ea = function (a) {
    switch (a) {
    case Ks:
        return this.g;
    case Ls:
        return this.hk;
    case Ms:
        return this.Em;
    case Ns:
        return this.Fm;
    case Os:
        return this.Eh;
    case Qs:
        return this.rp;
    case Ps:
        return this.yt
    }
    return Js.p.ea.call(this, a)
};n.oh = function (a) {
    switch (a) {
    case Ks:
        return i
    }
    return l
};n.be = function () {
    return rb(cia)
};n.sa = function () {
    return new Js(this.Z())
};n.q = function () {
    Js.p.q.call(this);
    this.g.G();
    delete this.g
};qh(function () {
    return new Js
});

function Vs(a, b) {
    this.a = a;
    this.update(b)
}
s(Vs, lf);n = Vs.prototype;n.$w = 0;n.Zw = 0;n.YA = function () {
    return this.$w
};

function Ws(a) {
    return Xe(Ge.N(), a.YA())
}
n.PA = function () {
    return this.Zw
};

function Xs(a) {
    return Xe(Ge.N(), a.PA())
}
n.O = function () {
    return this.a
};
var Ys = "i_ht",
    Zs = "i_wth";n.Gb = function (a, b) {
    switch (a) {
    case Ys:
        this.Zw = b;
        break;
    case Zs:
        this.$w = b;
        break
    }
};n.Uc = function (a) {
    var b = {};
    b.eo_type = this.a;
    for (var c in a) switch (c) {
    case Ys:
        b[c] = this.Zw;
        break;
    case Zs:
        b[c] = this.$w;
        break
    }
    return b
};
n.Z = function () {
    var a = {};
    a.eo_type = this.a;
    a.i_wth = this.$w;
    a.i_ht = this.Zw;
    return a
};

function $s(a) {
    Vs.call(this, 2, a);
    this.update(a)
}
s($s, Vs);n = $s.prototype;n.Xw = v;n.Yw = 0;n.ma = function () {
    return this.Xw
};n.ji = function () {
    return this.Yw
};
var at = "d_id",
    bt = "d_revision";n.Gb = function (a, b) {
    switch (a) {
    case at:
        this.Xw = b;
        break;
    case bt:
        this.Yw = b;
        break;
    default:
        $s.p.Gb.call(this, a, b)
    }
};n.Uc = function (a) {
    var b = $s.p.Uc.call(this, a);
    for (var c in a) switch (c) {
    case at:
        b[c] = this.Xw;
        break;
    case bt:
        b[c] = this.Yw;
        break
    }
    return b
};n.Z = function () {
    var a = $s.p.Z.call(this);
    a.d_id = this.Xw;
    a.d_revision = this.Yw;
    return a
};

function ct(a) {
    Vs.call(this, 0, a);
    this.update(a)
}
s(ct, Vs);n = ct.prototype;n.Vo = v;n.uh = v;
var dt = "KIX-0-system-box";n.YA = function () {
    return this.uh == dt ? 16 : ct.p.YA.call(this)
};n.PA = function () {
    return this.uh == dt ? 16 : ct.p.PA.call(this)
};
var et = "KIX-0-system-stretchbox";

function ft(a) {
    return a.uh == dt || a.uh == et
}
var gt = "i_cid",
    ht = "i_src";n.Gb = function (a, b) {
    switch (a) {
    case gt:
        this.uh = b;
        break;
    case ht:
        this.Vo = b;
        break;
    default:
        ct.p.Gb.call(this, a, b);
        break
    }
};
n.Uc = function (a) {
    var b = ct.p.Uc.call(this, a);
    for (var c in a) switch (c) {
    case gt:
        b[c] = this.uh;
        break;
    case ht:
        b[c] = this.Vo;
        break
    }
    return b
};n.Z = function () {
    var a = ct.p.Z.call(this);
    a.i_cid = this.uh;
    a.i_src = this.Vo;
    return a
};

function it(a, b, c) {
    this.n = a;
    this.g = b;
    c && this.update(c)
}
s(it, lf);
var jt = "bookmark",
    kt = [jt];it.prototype.O = function () {
    return this.n
};it.prototype.ma = function () {
    return this.g
};
var lt = new rr;

function mt(a, b, c) {
    return lt.execute(a, b, c)
}
it.prototype.Gb = function () {};it.prototype.Uc = function () {
    return {}
};it.prototype.Z = function () {
    return {}
};

function nt(a, b, c) {
    it.call(this, a, b);
    a: {
        a = c.ee_eo;
        switch (a.eo_type) {
        case 0:
            a = new ct(a);
            break a;
        case 2:
            a = new $s(a);
            break a
        }
        a = k
    }
    this.a = a
}
s(nt, it);
var dia = "ee_eo";nt.prototype.Gb = function (a, b) {
    switch (a) {
    case dia:
        this.a.update(b);
        break
    }
};nt.prototype.Uc = function (a) {
    var b = {};
    if (a = a.ee_eo) b.ee_eo = this.a.Uc(a);
    return b
};nt.prototype.Z = function () {
    var a = {};
    a.ee_eo = this.a.Z();
    return a
};nt.prototype.q = function () {
    nt.p.q.call(this);
    this.a.G();
    delete this.a
};

function ot(a) {
    this.a = Zg;
    this.update(a || {})
}
s(ot, Sg);
var pt = "eqs_p",
    eia = {
        o4: pt
    };n = ot.prototype;
var qt = "$";n.GD = qt;n.fg = function () {
    return [wg]
};n.cf = function () {
    return i
};n.Uo = function () {
    return l
};n.Gb = function (a, b) {
    switch (a) {
    case pt:
        this.GD = b;
        break
    }
};n.Z = function () {
    var a = {};
    a.eqs_p = this.GD;
    return a
};n.ea = function (a) {
    switch (a) {
    case pt:
        return this.GD
    }
    return ot.p.ea.call(this, a)
};n.be = function () {
    return rb(eia)
};n.sa = function () {
    return new ot(this.Z())
};qh(function () {
    return new ot
});
var rt = "header-footer";

function st(a, b) {
    it.call(this, rt, a, b);
    this.f = b.hfe_hft
}
s(st, it);st.prototype.Z = function () {
    var a = {};
    a.hfe_hft = this.f;
    return a
};lt.set(rt, function (a, b) {
    return new st(a, b)
});

function P(a, b) {
    this.g = 0;
    this.a = a;
    this.f = !! b
}
s(P, zr);P.prototype.Z = function () {
    var a = P.p.Z.call(this);
    a.si = this.a;
    a.aps = this.f;
    return a
};P.prototype.Le = function (a) {
    var b = P.p.Le.call(this, a);
    if (b != 0) return b;
    if (a.O() == 0) return this.a - a.a;
    return -1
};P.prototype.shift = function (a, b) {
    return new P(this.a + a, p(b) ? b : this.f)
};

function tt(a) {
    this.f = a
}
s(tt, Vf);tt.prototype.O = function () {
    return this.f
};tt.prototype.Gb = function () {};
var fia = "lnk_type";tt.prototype.ea = function (a) {
    switch (a) {
    case fia:
        return this.f
    }
};tt.prototype.Z = function () {
    var a = {};
    a.lnk_type = this.f;
    return a
};
var ut = "positioned";

function vt(a, b) {
    nt.call(this, ut, a, b);
    this.update(b)
}
s(vt, nt);n = vt.prototype;n.qt = 0;n.rt = 0;
var wt = "pe_lo",
    xt = "pe_to";n.Gb = function (a, b) {
    switch (a) {
    case wt:
        this.qt = b;
        break;
    case xt:
        this.rt = b;
        break;
    default:
        vt.p.Gb.call(this, a, b);
        break
    }
};n.Uc = function (a) {
    var b = vt.p.Uc.call(this, a);
    for (var c in a) switch (c) {
    case wt:
        b[c] = this.qt;
        break;
    case xt:
        b[c] = this.rt;
        break
    }
    return b
};n.Z = function () {
    var a = vt.p.Z.call(this);
    a.pe_lo = this.qt;
    a.pe_to = this.rt;
    return a
};
lt.set(ut, function (a, b) {
    return new vt(a, b)
});

function yt(a) {
    this.a = fh;
    this.update(a || {})
}
s(yt, Sg);
var zt = "row_mh",
    gia = {
        Z3: zt
    };n = yt.prototype;n.Vj = 0;n.fg = function () {
    return [lg]
};n.cf = function () {
    return i
};n.Gb = function (a, b) {
    switch (a) {
    case zt:
        this.Vj = b;
        break
    }
};n.Z = function () {
    var a = {};
    a.row_mh = this.Vj;
    return a
};n.ea = function (a) {
    switch (a) {
    case zt:
        return this.Vj
    }
    return yt.p.ea.call(this, a)
};n.Nj = function () {
    return l
};n.Uq = function () {
    return l
};n.be = function () {
    return rb(gia)
};n.sa = function () {
    return new yt(this.Z())
};qh(function () {
    return new yt
});

function At(a) {
    this.a = hh;
    this.g = new eg(bia);
    this.update(a || {})
}
s(At, Sg);
var Bt = "tbls_bc",
    Dt = "tbls_bw",
    Et = "tbls_cols",
    hia = {
        d3: Bt,
        e3: Dt,
        k3: Et
    };n = At.prototype;n.um = di;n.vm = 1;n.fg = function () {
    return [kg]
};n.cf = function () {
    return i
};

function Ft(a) {
    return a.g.Qb()
}
n.Gb = function (a, b) {
    switch (a) {
    case Bt:
        this.um = b;
        break;
    case Dt:
        this.vm = b;
        break;
    case Et:
        this.g.update(b);
        break
    }
};n.Z = function () {
    var a = {};
    a.tbls_bc = this.um;
    a.tbls_bw = this.vm;
    a.tbls_cols = this.g.Z();
    return a
};
n.ea = function (a) {
    switch (a) {
    case Bt:
        return this.um;
    case Dt:
        return this.vm;
    case Et:
        return this.g
    }
    return At.p.ea.call(this, a)
};n.oh = function (a) {
    switch (a) {
    case Et:
        return i
    }
    return l
};n.Nj = function () {
    return l
};n.Uq = function () {
    return l
};n.be = function () {
    return rb(hia)
};n.sa = function () {
    return new At(this.Z())
};qh(function () {
    return new At
});
var Gt = "//",
    Ht = "@",
    It = "?",
    Jt = "#";

function Kt(a, b, c, d, e, g, h) {
    var j = [];
    a && j.push(a, Sf);
    if (c) {
        j.push(Gt);
        b && j.push(b, Ht);
        j.push(c);
        d && j.push(Sf, d)
    }
    e && j.push(e);
    g && j.push(It, g);
    h && j.push(Jt, h);
    return j.join(v)
}
var iia = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

function Lt(a) {
    return a.match(iia)
}
function Mt(a) {
    return a && decodeURIComponent(a)
}
function Nt(a) {
    var b = a.indexOf(Jt);
    return b < 0 ? k : a.substr(b + 1)
}

function Ot(a) {
    if (a[1]) {
        var b = a[0],
            c = b.indexOf(Jt);
        if (c >= 0) {
            a.push(b.substr(c));
            a[0] = b = b.substr(0, c)
        }
        c = b.indexOf(It);
        if (c < 0) a[1] = It;
        else if (c == b.length - 1) a[1] = undefined
    }
    return a.join(v)
}
var Pt = "=";

function Qt(a, b, c) {
    if ($a(b)) for (var d = 0; d < b.length; d++) {
        c.push(Sb, a);
        b[d] !== v && c.push(Pt, Mb(b[d]))
    } else if (b != k) {
        c.push(Sb, a);
        b !== v && c.push(Pt, Mb(b))
    }
}
function Rt(a, b, c) {
    for (c = c || 0; c < b.length; c += 2) Qt(b[c], b[c + 1], a);
    return a
}
function St(a, b) {
    var c = Rt([], a, b);
    c[0] = v;
    return c.join(v)
}

function Tt(a, b) {
    for (var c in b) Qt(c, b[c], a);
    return a
}
function Ut(a) {
    a = Tt([], a);
    a[0] = v;
    return a.join(v)
}
function Vt(a) {
    return Ot(arguments.length == 2 ? Rt([a], arguments[1], 0) : Rt([a], arguments, 1))
}
function Wt(a, b, c, d) {
    b = b;
    for (var e = c.length;
    (b = a.indexOf(c, b)) >= 0 && b < d;) {
        var g = a.charCodeAt(b - 1);
        if (g == 38 || g == 63) {
            g = a.charCodeAt(b + e);
            if (!g || g == 61 || g == 38 || g == 35) return b
        }
        b += e + 1
    }
    return -1
}
var Xt = /#|$/;

function Yt(a, b) {
    var c = a.search(Xt),
        d = Wt(a, 0, b, c);
    if (d < 0) return k;
    else {
        var e = a.indexOf(Sb, d);
        if (e < 0 || e > c) e = c;
        d += b.length + 1;
        return Nb(a.substr(d, e - d))
    }
};

function Zt(a) {
    this.f = 0;
    this.update(a)
}
s(Zt, tt);Zt.prototype.a = v;
var $t = "ulnk_url";Zt.prototype.ea = function (a) {
    switch (a) {
    case $t:
        return this.a
    }
    return Zt.p.ea.call(this, a)
};
var au = "http://";Zt.prototype.Gb = function (a, b) {
    switch (a) {
    case $t:
        var c = b;
        if (c && c.charAt(0) != Jt && !(Lt(c)[1] || 0)) c = au + c;
        this.a = c;
        break;
    default:
        Zt.p.Gb.call(this, a, b);
        break
    }
};Zt.prototype.Z = function () {
    var a = Zt.p.Z.call(this);
    a.ulnk_url = this.a.toString();
    return a
};
var jia = RegExp("[\\u0028\\u005B\\u00AB\\u2018\\u201C\\u3008\\u300A\\u300C\\u300E\\u3010\\u3014\\u3016\\u3018\\u301D\\uFF08\\uFF3B\\uFF5F\\uFF5B]"),
    kia = RegExp("[\\u002C\\u0029\\u005D\\u00BB\\u2019\\u201D\\u3001\\u3009\\u300B\\u300D\\u300F\\u3011\\u3015\\u3017\\u3019\\u301F\\u3005\\u303B\\u30FC\\u30FD\\u30FE\\u30A1\\u30A3\\u30A5\\u30A7\\u30A9\\u30C3\\u30E3\\u30E5\\u30E7\\u30EE\\u30F5\\u30F6\\u3041\\u3043\\u3045\\u3047\\u3049\\u3063\\u3083\\u3085\\u3087\\u308E\\u3095\\u3096\\u31F0\\u31F1\\u31F2\\u31F3\\u31F4\\u31F5\\u31F6\\u31F7\\u31F8\\u31F9\\u31FA\\u31FB\\u31FC\\u31FD\\u31FE\\u31FF\\u2010\\u2013\\u301C\\u30A0\\u0021\\u002E\\u003A\\u003B\\u003F\\u203C\\u2047\\u2048\\u2049\\u3001\\u3002\\u30FB\\uFF01\\uFF1F\\uFF09\\uFF3D\\uFF5D\\uFF60]"),
    lia = RegExp("[\\u2F00-\\u30FF\\u3190-\\u319F\\u31C0-\\u3AEF\\u4E00-\\u9FCF\\uF900-\\uFAFF\\uFE10-\\uFE1F\\uFE30-\\uFE4F\\uFF00-\\uFFEF]"),
    mia = RegExp("[\\u3000-\\u30FF\\u3200-\\u9FFF\\uF900-\\uFAFF\\uFF00-\\uFFEF]");
for (var nia = {
    "!": i,
    "@": i,
    "#": i,
    $: i,
    "%": i,
    "^": i,
    "&": i,
    "*": i,
    "(": i,
    ")": i,
    "+": i,
    "=": i,
    "\\": i,
    "|": i,
    "{": i,
    "}": i,
    "[": i,
    "]": i,
    ";": i,
    ":": i,
    "'": i,
    '"': i,
    "/": i,
    "?": i,
    ".": i,
    ",": i,
    "<": i,
    ">": i,
    "~": i,
    "`": i,
    "\u201c": i,
    "\u201d": i,
    "\u00bf": i,
    "\u00a1": i
}, bu = [qg, rg, sg, ug, vg, wg, xg], cu = {}, du = 0; du < bu.length; du++) cu[bu[du]] = i;

function eu(a, b) {
    for (var c = a; c < Bg(b); c++) {
        if (c != a && fu(c, b)) break;
        if (gu(c, b, i) && hu(c + 1, b) != yj) return c + 1
    }
    return c
}
function iu(a, b) {
    for (var c = a - 1; c >= 0; c--) if (fu(c, b) || ju(c, b)) return c;
    return 0
}

function hu(a, b) {
    return Kg(E(b, a)) || !Gg(b, a) ? yj : E(b, a) in nia ? vj : cu[E(b, a)] ? Zc : Cj
}
function gu(a, b, c) {
    var d = c ? a + 1 : a - 1;
    return d < 0 || d >= Bg(b) || fu(a, b) || hu(a, b) != hu(d, b) || mia.test(E(b, c ? a + 1 : a))
}
function ku(a, b) {
    for (var c = a, d = Bg(b), e = a; e < d; e++) if (e == d - 1 || gu(e, b, i) && !Kg(E(b, e))) {
        c = e + 1;
        break
    }
    return c
}
function lu(a, b) {
    for (var c = a; c >= 0; c--) if (gu(c, b, l)) return c;
    return a
}
function ju(a, b) {
    if (fu(a, b)) return i;
    return gu(a, b, l) && hu(a, b) != yj
}
function fu(a, b) {
    return Hg(b, a) || E(b, a) == Jg || !Gg(b, a)
}

function mu(a, b, c) {
    var d = b.start,
        e = b.end;
    if (ju(d, a) && ku(e, a) == e + 1 && hu(d, a) != yj && hu(e, a) != yj && hu(d - 1, a) == yj) if (E(a, e + 1) == x) return new nb(d, e + 1);
    else if (!Hg(a, e + 1) && E(a, d - 1) == x && !c) return new nb(d - 1, e);
    return b.sa()
};

function nu(a, b, c, d) {
    c = a.f(c);
    if (!c.length) return l;
    c = Ec(c, b);
    if (c >= 0) return i;
    c = -c - 1;
    a = a.f(d);
    b = Ec(a, b);
    if (b >= 0) return i;
    b = -b - 1;
    return c > b
}
function oia(a, b, c, d) {
    c = a.f(c);
    if (!c.length) return 1;
    a = a.f(d);
    d = Ec(c, b);
    if (d >= 0) return c[d];
    else d = -d - 2;
    b = Ec(a, b);
    if (b < 0) b = -b - 2;
    else b--;
    if (b >= d) return -1;
    for (; d >= 0;) {
        if (b < 0 || d == 0) return c[d];
        if (c[d] > a[b]) return c[d];
        d--;
        b--
    }
    return c[d]
}

function pia(a, b, c, d) {
    c = a.f(c);
    if (!c.length) return 1;
    a = a.f(d);
    d = Ec(c, b);
    if (d < 0) d = -d - 2;
    d++;
    b = Ec(a, b);
    if (b < 0) b = -b - 1;
    else return a[b];
    if (b >= d) return -1;
    for (; b < a.length;) {
        if (d >= c.length) return a[b];
        if (a[b] < c[d]) return a[b];
        d++;
        b++
    }
    return a[b]
};

function ou(a) {
    return pu(a, qu(a))
}
function pu(a, b) {
    return nu(a.Y(), b, kg, ng)
}
function ru(a, b, c, d) {
    a = a.Y();
    var e = Bg(a),
        g = 0,
        h = E(a, b);
    if (h == kg) {
        h = c.call(d, h, b);
        if (h == l) return b;
        b++
    }
    for (b = b; b <= e; b++) {
        h = E(a, b);
        switch (h) {
        case kg:
            g++;
            break;
        case ng:
            g--;
            if (g == 0) continue;
            break
        }
        if (g <= 0) {
            h = c.call(d, h, b);
            if (g < 0 || h == l) return b
        }
    }
    return Bg(a)
}
var su = " is not inside a table.";

function tu(a, b) {
    var c = oia(a.Y(), b, kg, ng);
    if (c < 0) f(Error("TableUtil.getTableStartIndex: Spacer index " + c + su));
    return c
}

function uu(a, b) {
    var c = pia(a.Y(), b, kg, ng);
    if (c < 0) f(Error("TableUtil.getTableEndIndex: Spacer index " + c + su));
    return c
}
function qia(a, b) {
    if (E(a.Y(), b) != kg) f(Error("tableStartIndex should be a table start marker."));
    var c = 0,
        d = 0;
    ru(a, b, function (e) {
        switch (e) {
        case kg:
            return i;
        case lg:
            d = Math.max(c, d);
            c = 0;
            break;
        case mg:
            c++;
            break
        }
    });
    return c
}

function vu(a, b, c) {
    var d = a.Y(),
        e = E(d, b);
    if (e == c) return b;
    e == kg && b--;
    e = tu(a, b);
    for (var g = b;;) {
        E(d, g) == ng && g--;
        b = d.lastIndexOf(ng, g);
        if (b < 0) b = 1;
        g = d.lastIndexOf(c, g);
        if (g < e) break;
        if (g > b) return g;
        g = tu(a, b - 1)
    }
    return 1
}
function wu(a, b) {
    return vu(a, b, lg)
}

function xu(a, b, c) {
    var d = a.Y();
    c.indexOf(E(d, b)) >= 0 && b++;
    for (var e = uu(a, b), g = b;;) {
        b = d.indexOf(kg, g);
        if (b < 0 || b > e) b = Bg(d) - 1;
        var h = d.indexOf(ng, g);
        if (h > e + 1) h = -1;
        var j;
        j = d;
        g = g;
        for (var m = c, o = e, q = [], u = 0; u < m.length; u++) {
            var w = j.indexOf(m.charAt(u), g);
            if (w > 0 && (!o || w < o)) q.push(w)
        }
        j = q.length > 0 ? Math.min.apply(k, q) : -1;
        var C;
        if (h >= 0 && j >= 0) C = Math.min(h, j);
        else if (h >= 0) C = h;
        else if (j >= 0) C = j;
        if (!C) break;
        if (C < b) return C - 1;g = uu(a, b) + 1
    }
    return e - 1
}
function yu(a, b) {
    return xu(a, b, lg)
}

function zu(a, b) {
    return vu(a, b, mg)
}
var ria = "\u0012\u001c";

function Au(a, b) {
    return xu(a, b, ria)
}
function sia(a, b) {
    var c = a.ra();
    if (c.Fa().O() != 0) return b;
    c = c.Dc.a;
    if (b >= c) {
        c = a.Y();
        if (E(c, b - 1) == ng) for (b++; !Gg(c, b);) b++;
        return b
    }
    if (!pu(a, b)) return b;
    c = c - 1;
    if (b == c) return b;
    var d = Au(a, b);
    if (c <= d) return b;
    var e = yu(a, b);
    if (c <= e) return d + 2;
    return e + 3
}

function tia(a, b) {
    var c = a.ra();
    if (c.Fa().O() != 0) return b;
    c = c.Dc.a;
    if (b < c) return b;
    if (!pu(a, b)) return b;
    var d = zu(a, b);
    if (c >= d) return b;
    var e = wu(a, b);
    if (c >= e) return d - 1;
    return E(a.Y(), e - 1) == kg ? e - 2 : e - 1
}

function uia(a, b, c) {
    var d = pu(a, b),
        e = pu(a, c + 1);
    if (d && e) {
        var g = tu(a, b),
            h = tu(a, c);
        if (g == h) {
            a: {
                h = b;
                e = c;
                c = wu(a, h);
                d = wu(a, e);
                if (c == d) {
                    b = zu(a, h);
                    g = zu(a, e);
                    if (b > c && g > d) {
                        if (b != g) {
                            a = Au(a, e);
                            a = {
                                start: b + 1,
                                end: a,
                                jp: i,
                                Hm: i
                            }
                        } else a = {
                            start: h,
                            end: e,
                            jp: l,
                            Hm: l
                        };
                        break a
                    }
                }
                a = yu(a, e);
                a = {
                    start: c + 2,
                    end: a,
                    jp: i,
                    Hm: i
                }
            }
            return a
        } else if (g > h) {
            b = b;
            c = c;
            e = l;
            d = wu(a, c);
            g = b;
            if (d < b) {
                d = zu(a, c);
                if (d < b) {
                    h = Bu(a, b, h);
                    g = wu(a, h);
                    b = g + 2
                } else {
                    c = Au(a, c);
                    e = i;
                    for (g = d; g > b;) g = zu(a, g - 1);
                    b = g + 1
                }
            } else {
                c = yu(a, c);
                e = i;
                for (g = d; g > b;) g = wu(a, g - 1);
                b = g + 2
            }
            return {
                start: b,
                end: c,
                jp: i,
                Hm: e
            }
        } else {
            h = uu(a, b);
            g = uu(a, c);
            if (h > g) {
                b = b;
                e = c;
                c = l;
                d = yu(a, b);
                g = e;
                if (d > e) {
                    d = Au(a, b);
                    if (d > e) {
                        h = Cu(a, e, h);
                        g = yu(a, h)
                    } else {
                        b = zu(a, b);
                        c = i;
                        for (g = d; g < e;) g = Au(a, g + 1)
                    }
                } else {
                    b = wu(a, b);
                    c = i;
                    for (g = d; g < e;) g = yu(a, g + 1)
                }
                return {
                    start: b,
                    end: g,
                    jp: c,
                    Hm: i
                }
            }
        }
    }
    g = h = l;
    if (d) {
        d = Bu(a, b, 1);
        b = wu(a, d) + 2;
        h = i
    }
    if (e) {
        d = Cu(a, c, -1);
        c = yu(a, d);
        g = i
    }
    return {
        start: b,
        end: c,
        jp: h,
        Hm: g
    }
}
function Bu(a, b, c) {
    var d = tu(a, b);
    for (b = b + 1; pu(a, d - 1);) {
        var e = tu(a, d - 1);
        if (e <= c) break;
        b = d;
        d = e
    }
    return b - 1
}

function Cu(a, b, c) {
    var d = uu(a, b);
    for (b = b - 1; pu(a, d + 1);) {
        var e = uu(a, d + 1);
        if (e >= c && c > 0) break;
        b = d;
        d = e
    }
    return b + 1
};

function Du(a, b, c, d) {
    this.A = a;
    this.V = b;
    this.va = c;
    this.a = d
}
s(Du, t);n = Du.prototype;n.kD = function (a) {
    var b = this.A,
        c = Eu(this.va);
    wr(b, new P(c.start), a)
};n.jD = function (a) {
    var b = this.A,
        c = Eu(this.va),
        d = (Hg(b.a, c.end) || E(b.a, c.end) == Ig) && a ? c.end : c.end + 1,
        e = i;
    if (c.start == c.end) e = l;wr(b, new P(d, e), a)
};n.O_ = function (a) {
    var b = this.A;
    wr(b, new P(Fu(b).start), a)
};n.VK = function (a) {
    var b = this.A,
        c = qu(b),
        d = Gu(b);
    if (c == d && d != 1) d = Cg(b.Y(), d - 1);
    wr(b, new P(d), a)
};
n.L_ = function (a) {
    var b = this.A,
        c = qu(b),
        d = Fu(b).end;
    if (c == d && d != Hu(b)) d = Eg(b.Y(), d + 1);
    wr(b, new P(d), a)
};n.K_ = function (a) {
    var b = this.A;
    wr(b, new P(Fu(b).end), a)
};n.P_ = function (a) {
    var b = this.A,
        c = Fu(b).end;
    c != Hu(b) && c++;
    wr(b, new P(c), a)
};n.XK = function (a) {
    var b = this.A;
    wr(b, new P(Iu(b, qu(b)) + 1), a)
};n.UK = function (a) {
    var b = this.A,
        c = Ju(b, qu(b)) + (a ? 0 : 1);
    wr(b, new P(c, !a), a)
};n.YK = function (a) {
    var b = Ku(this);
    b && Lu(this, a, b)
};n.TK = function (a) {
    var b = Ku(this);
    b && Mu(this, a, b)
};
var via = "Could not get coordinates for cursor location.";

function Ku(a) {
    var b = a.a.a;
    if (!b) {
        b = Nu(a.va, a.A.ra().Fa());
        if (!b) {
            a.V.log(Error(via));
            return k
        }
        b = b.x;
        a.a.a = b
    }
    return b
}
n.WK = function (a) {
    this.bA(a, i)
};n.N_ = function (a) {
    this.Jw(a, i)
};n.M_ = function (a) {
    this.Jw(a, l, i)
};
n.Jw = function (a, b, c) {
    var d = this.A,
        e = d.Y(),
        g = d.ra(),
        h = qu(d);
    if (!(h > Hu(d))) {
        var j = Ju(d, h);
        if (g.Kb() && a && !b) h = Ou(d, Pu(g)) + 1;
        else if (h < j && E(d.a, h) != jg) if (b) h = eu(h, d.Y());
        else if (c) {
            b = ku(h, d.Y());
            if (b == h) {
                h = eu(h, d.Y());
                h = ku(h, d.Y())
            } else h = b
        } else {
            for (h++; h <= j && !Gg(e, h);) h++;
            a || (h = sia(d, h))
        } else h == j && !a && h++;
        wr(d, new P(h, !a), a)
    }
};
n.bA = function (a, b) {
    var c = this.A,
        d = c.Y(),
        e = c.ra(),
        g = qu(c),
        h = e.Fa();
    h = Iu(c, h.O() == 0 && h.f ? g - 1 : g);
    if (e.Kb() && a && !b) g = Qu(c);
    else if (g > h + 1) if (b) {
        g = iu(g, c.Y());
        if (g < 1) g = 1
    } else {
        for (g--; g > 1 && !Gg(d, g);) g--;
        a || (g = tia(c, g))
    }
    wr(c, new P(g), a)
};

function Lu(a, b, c) {
    var d = a.A,
        e = d.ra();
    if (!(e.Fa().O() != 0 || Ru(e).O() != 0)) {
        var g = e.Fa();
        e = Ru(e);
        if (b && (!g.Qa(e) || g.f != e.f)) {
            g = e;
            c = Nu(a.va, g).x
        }
        a = a.va.qd(g, i, c);
        if (!a) {
            g = Iu(d, g.f ? g.a - 1 : g.a) + 1;
            a = new P(g)
        }
        wr(d, a, b)
    }
}

function Mu(a, b, c) {
    var d = a.A,
        e = d.ra();
    if (!(e.Fa().O() != 0 || Pu(e).O() != 0)) {
        var g = e.Fa();
        e = Pu(e);
        if (b && (!g.Qa(e) || g.f != e.f)) {
            g = e;
            c = Nu(a.va, g).x
        }
        a = a.va.qd(g, l, c);
        if (!a) {
            g = Ju(d, g.f ? g.a - 1 : g.a);
            a = new P(g)
        }
        wr(d, a, b)
    }
}
n.Q_ = function (a) {
    Su(this, i, a)
};n.J_ = function (a) {
    Su(this, l, a)
};

function Su(a, b, c) {
    var d = a.A,
        e = d.ra().Fa();
    a = a.va;
    var g = Q(a.getContext()).ra().Fa(),
        h = Nu(a, g);
    g = Tu(a, g);
    var j;
    if (j = g) j = g.y >= a.$d && g.y <= a.$d + Uu(a) ? new bd(g.x - a.qA, g.y - a.$d) : k;j = j;
    var m = a.$d,
        o = Uu(a),
        q = m + o * (b ? -1 : 1),
        u = Vu(a) - o;q = Math.min(Math.max(q, 0), u);a.$d = a.ld.scrollTop = q;
    if (h) if (q != m && g && !(g.y >= a.$d && g.y <= a.$d + Uu(a))) {
        g = g.y - h.y;
        a = a.P.Sb(h.x, (j ? j.y : Math.floor(o / 2)) + a.$d - g)
    } else a = k;
    else a = k;
    if (!a || a.Qa(e)) if (b) a = new P(Iu(d, qu(d)) + 1);
    else {
        b = Ju(d, qu(d)) + (c ? 0 : 1);
        a = new P(b, !c)
    }
    wr(d, a, c)
}
n.q = function () {
    Du.p.q.call(this);
    delete this.A;
    delete this.V;
    delete this.va;
    delete this.a
};

function Wu(a) {
    this.g = a
}
Wu.prototype.a = k;Wu.prototype.f = l;Wu.prototype.tb = function () {
    return this.g
};Wu.prototype.Ka = function (a) {
    this.g = a
};

function Xu(a, b, c, d, e, g, h, j, m, o, q, u) {
    this.u = a;
    this.f = b;
    this.A = c;
    this.a = d;
    this.V = e;
    this.P = g;
    this.va = h;
    this.n = j;
    this.cc = m;
    this.Ya = o;
    this.K = q;
    this.Cb = u;
    this.L = new ze(this)
}
s(Xu, Pi);n = Xu.prototype;n.Hs = l;n.J = function () {
    return this.Cb
};n.Ga = function () {
    return this.L
};

function Yu(a, b) {
    if (a.Hs != b) {
        b ? a.Nq() : a.PD();a.jM(b);a.Hs = b
    }
}
n.jM = function () {};n.PD = function () {
    De(this.L)
};
var Zu = "dd";

function $u(a, b) {
    var c = a.n,
        d = c.tb();
    if (d != b) {
        Oj(a.f.Ef, 0, a.f);
        var e = a.P,
            g = a.va;
        if (b == 0) switch (d) {
        case 3:
        case 4:
        case 2:
            av(a);
            if (e) {
                e.Ix = l;
                bv(e)
            }
            break;
        case 1:
            var h = cv(g);
            if (h) {
                var j = {};
                j.l = h;
                a.dispatchEvent(new dv(Zu, j, a))
            }
            break
        }
        d == 1 && b != 1 && g.Ne && ev(g.Ne, l);
        if (b == 2 && e) {
            e.Ix = i;
            bv(e)
        }
        c.Ka(b)
    }
}
var fv = ' id="',
    gv = "&nbsp;";

function av(a) {
    var b = a.f;
    a = hv(a.cc);
    if (b.Rj) {
        if (a) {
            var c = a.indexOf(Ub);
            if (c > 0 && a.charAt(0) == Tb) a = bc(a.substring(0, c), fv, Kq, wb, a.substring(c));
            if (y.La) a += gv
        }
        Mq(b).innerHTML = a;
        if (!b.M || a) {
            b.co();
            b.Ef()
        }
    }
}
n.q = function () {
    Xu.p.q.call(this);
    this.L.G();
    delete this.L;
    delete this.u;
    delete this.f;
    delete this.A;
    delete this.a;
    delete this.V;
    delete this.cc;
    delete this.P;
    delete this.va;
    delete this.n;
    delete this.K;
    delete this.Cb;
    this.Ya.G();
    delete this.Ya
};

function dv(a, b, c) {
    Pd.call(this, a, c);
    this.f = b || {}
}
s(dv, Pd);

function iv(a, b) {
    Qo.call(this, b);
    this.M = a
}
s(iv, Qo);n = iv.prototype;n.tx = 0;n.Jy = 0;n.KL = l;

function jv(a, b, c) {
    if (a.z()) {
        b = Math.round(b);
        c = Math.round(c);
        if (!(a.KL && a.Jy == c && a.tx == b)) {
            var d = c;
            a.tx = b;
            a.Jy = d;
            if (a.z()) {
                uf(a.z(), b, c);
                a.KL = i
            }
        }
    }
}
n.Ic = function () {
    return this.tx
};n.Wb = function () {
    return this.Jy
};n.Ts = l;n.kb = i;n.L = k;n.getContext = function () {
    return this.M
};n.sg = function (a) {
    this.Ts = a
};n.Da = function () {
    return this.kb
};n.X = function (a) {
    if (this.z() && a != this.kb) {
        this.z().style.display = a ? v : Hf;this.kb = a
    }
};
n.Ga = function () {
    return this.L || (this.L = new ze(this))
};n.pb = function () {
    iv.p.pb.call(this);
    this.L && De(this.L)
};n.oa = function (a, b) {
    var c = this.M.A;
    b > 0 && Hg(c.a, b) && a != eh && a != dh && b--;
    return c.oa(a, b)
};

function kv(a, b) {
    return lv(a.oa(dh, b)) != k
}
n.q = function () {
    iv.p.q.call(this);
    delete this.M;
    this.L && this.L.G();
    delete this.L
};

function mv(a, b, c) {
    iv.call(this, a, c);
    this.a = b
}
s(mv, iv);n = mv.prototype;n.Wv = k;n.Fh = k;n.Ff = k;n.tf = k;n.Ix = l;n.ob = function (a) {
    mv.p.ob.call(this, a);
    Zr(Qr.N(), es, this.tZ, this, undefined, undefined, i)
};
var nv = "cursorMove",
    ov = "flush";n.ga = function () {
    mv.p.ga.call(this);
    var a = this.Ga(),
        b = pv(this.getContext()),
        c = Q(this.getContext());
    a.C(c, nv, Pq(b, this.sZ, this)).C(c, ov, Pq(b, this.nK, this));
    (b = qv(this.getContext())) && a.C(b, ov, this.nK);
    Rr(Qr.N(), es).Nb() && rv(this)
};
var sv = "docs-bars";

function tv(a) {
    if (!a.tf) {
        var b = Rr(Qr.N(), es);
        if (!b.Nb()) return k;
        b = b.jc;
        var c = b.DS(),
            d = a.J();
        a.tf = new c(undefined, undefined, d);
        a.ya(a.tf);
        a.tf.X(l);
        (c = d.z(sv)) && a.tf.Ja(c);
        c = a.getContext();
        a.tf.xz(uv(c, b.Rr()), c.f)
    }
    return a.tf
}
n.la = function (a) {
    this.Fh.la(a);
    this.Ff.la(a);
    this.tf && this.tf.la(a)
};
var vv = "docs-menubar",
    wia = "docs-toolbar";
n.tZ = function () {
    var a = wv(this.getContext()),
        b = a.g;
    if (!(a.lb || b != 4 && b != 3)) {
        var c = Mr(Rr(Qr.N(), es)),
            d = this.J(),
            e = d.z(vv);
        if (e) {
            this.Fh = new(c.RS())(undefined, d);
            this.ya(this.Fh)
        }
        if (b == 4) {
            b = c.uT();
            var g = c.QS()(a.RF);
            this.Ff = new b(g, !! a.M && a.HF, a.JD, a.Ig, new(c.vT()), undefined, d);
            this.ya(this.Ff)
        }
        this.Fh && Zo(this.Fh, e);
        this.Ff && Zo(this.Ff, d.z(wia));
        this.cb && rv(this)
    }
};

function rv(a) {
    if (a.Ff) {
        var b = Mr(Rr(Qr.N(), es)),
            c = a.getContext();
        a.Ff.xz(uv(c, b.Rr()), c.f, xv(c, b.fw()))
    }
    b = wv(a.getContext());
    b.g == 4 && b.n && M(yv(a.getContext()), tn).Za(Mi, a.KX, a);
    bv(a)
}
n.sZ = function (a) {
    a.g || bv(this)
};n.nK = function () {
    bv(this)
};n.pV = function () {
    Ni(M(yv(this.getContext()), Ql));
    Vq(this.a, l)
};n.qV = function (a) {
    var b = {};
    b.ch = a.g;
    b.finc = a.u;
    b.fb = a.a;
    Ni(M(yv(this.getContext()), Rl), b)
};

function bv(a) {
    var b = Q(a.getContext());
    a.Ff && !a.Ix && a.Ff.o_(b, yv(a.getContext()));
    if (b = a.tf) {
        if (b = !a.Ix) b = !wv(a.getContext()).K;
        b = b
    }
    b && a.tf.zZ(Q(a.getContext()), yv(a.getContext()))
}
var xia = "handleToggleEquationToolbar_ called when an equation toolbar does not exist.";n.KX = function () {
    var a = tv(this);
    if (a) {
        var b = !a.Da();
        a.X(b);
        M(yv(this.getContext()), tn).hd(b);
        this.dispatchEvent(yp)
    } else pv(this.getContext()).log(Error(xia))
};
n.q = function () {
    mv.p.q.call(this);
    delete this.Wv;
    delete this.Fh;
    delete this.Ff;
    delete this.tf
};
var yia = "www.google.com",
    zia = "/url";

function zv(a) {
    var b = a;
    if (Mt(Lt(a)[3] || k) == yia && Mt(Lt(a)[5] || k) == zia) b = Yt(a, wj);
    return b ? b : v
};
var Av = /^[\w-]+(\.[\w-]+)*\@([\w-]+\.)+(\d+|\w\w+)$/i;

function Bv(a) {
    if (a.ra().Fa().O() != 0) return k;
    return Cv(a.oa(ch, Qu(a)))
}
function Dv(a, b) {
    var c = Ev(a.ra()),
        d, e;
    if (c) {
        d = Cv(a.oa(ch, c.start));
        e = Cv(a.oa(ch, c.end));
        d = d ? Fv(a.g, ch, c.start) : c.start;e = e ? e = Gv(a, ch, c.end) : c.end;c = 0
    } else {
        c = qu(a);
        if (Cv(a.oa(ch, c))) {
            d = Fv(a.g, ch, c);
            e = Gv(a, ch, c);
            c = 1
        } else {
            e = d = c;
            c = 2
        }
    }
    b.start = d;
    b.end = e;
    return c
}
function Hv(a, b) {
    var c = Cv(a.oa(ch, b.start));
    if (c) return c;
    c = Gv(a, ch, b.start);
    return c + 1 > b.end ? k : Cv(a.oa(ch, c + 1))
}
var Iv = "id";

function Jv(a, b) {
    if (a.charAt(0) == Jt) return i;
    var c = b || window.location.href;
    return Yt(a, Iv) == Yt(c, Iv)
}
var Aia = "mailto",
    Bia = "aim";

function Kv(a) {
    if (/\s/.test(a)) return l;
    if (Av.test(a)) return l;
    var b = l;
    if (!/^[^:\/?#.]+:/.test(a)) {
        a = au + a;
        b = i
    }
    a = Lt(a);
    if (jc([Aia, Bia], a[1]) != -1) return i;
    var c = a[3];
    if (!c || b && c.indexOf(Na) == -1) return l;
    b = a[5];
    return !b || b.indexOf(Hj) == 0
}
function Lv(a, b, c) {
    var d = {};
    d.text = b;
    d.url = c;
    Ni(M(a, tm), d)
};
var Mv = [],
    Nv = "M";Mv[1E3] = Nv;Mv[900] = "CM";
var Ov = "D";Mv[500] = Ov;Mv[400] = "CD";
var Pv = "C";Mv[100] = Pv;Mv[90] = "XC";
var Qv = "L";Mv[50] = Qv;Mv[40] = "XL";
var Rv = "X";Mv[10] = Rv;Mv[9] = "IX";
var Sv = "V";Mv[5] = Sv;Mv[4] = "IV";
var Tv = "I";Mv[1] = Tv;
var Uv = [1E3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function Vv(a, b) {
    for (var c = v, d = 0; d < Uv.length; d++) for (var e = Uv[d]; a >= e;) {
        a -= e;
        c += Mv[e]
    }
    return b ? c : c.toLowerCase()
}
function Wv(a, b) {
    var c = b ? 65 : 97;a--;
    for (var d = a / 26, e = a % 26, g = v, h = 0; h <= d; h++) g += String.fromCharCode(c + e);
    return g
}

function Xv(a, b) {
    if (b.length && Yv(a, b)) {
        var c = a.Ub(dh, b[0]),
            d = c.Bb;
        if (d) if (si(Zv(a.Pa(d), c.yb))) return i
    }
    return l
};

function $v(a) {
    this.f = a;
    this.a = []
}
s($v, t);$v.prototype.Za = function (a, b, c, d) {
    b = a.Za(b, c, d || this.f);
    this.a.push(a, b)
};

function aw(a) {
    for (var b, c; c = a.a.pop();)(b = a.a.pop()) && !b.wj && b.jq(c)
}
$v.prototype.q = function () {
    $v.p.q.call(this);
    aw(this);
    delete this.f;
    delete this.a
};

function bw(a, b) {
    this.f = a || v;
    this.g = b || v;
    this.a = new cw(16);
    this.L = new ze(this)
}
s(bw, Pi);n = bw.prototype;n.zl = v;n.SC = v;n.rx = k;n.Ys = k;

function dw(a, b) {
    var c = a.a;
    if (!c.Qa(b)) {
        Ai(a) || !ew(c, 2);
        a.a = b;
        a.dispatchEvent(new fw(c));
        return i
    }
    return l
}
function Ai(a) {
    return ew(a.a, 2)
}
function gw(a) {
    dw(a, hw(hw(a.a, 1, l), 2, i)) && a.dispatchEvent(kj)
}
function iw(a) {
    return ew(a.a, 8)
}
function jw(a) {
    return ew(a.a, 4)
}
n.setTitle = function (a, b) {
    if (this.zl != a) {
        this.zl = a;
        this.dispatchEvent(new kw(ec, !! b))
    }
};

function lw(a, b, c, d) {
    if (a.rx != b || a.Ys != c) {
        a.rx = b;
        a.Ys = c;
        a.SC = v;
        a.dispatchEvent(new kw(mj, !! d))
    }
}
function mw(a, b) {
    if (!iw(a) && !jw(a)) b();
    else var c = oe(a, nj, function () {
        if (!iw(a) && !jw(a)) {
            te(c);
            b()
        }
    })
}
n.q = function () {
    bw.p.q.call(this);
    this.L.G()
};

function kw(a, b) {
    Pd.call(this, a);
    this.a = b || l
}
s(kw, Pd);

function fw(a) {
    Pd.call(this, nj);
    this.a = a
}
s(fw, Pd);
var Cia = new
function (a) {
    this.a = a
}("/#documents");

function cw(a) {
    this.a = hb(a) ? a.a : a;!ew(this, 2) || !ew(this, 1)
}
cw.prototype.ea = function () {
    return this.a
};

function ew(a, b) {
    return !!(a.a & b)
}
function hw(a, b, c) {
    return ew(a, b) == c ? a : new cw(a.a ^ b)
}
cw.prototype.Qa = function (a) {
    return this.a == a.a
};
var Dia = /#(.)(.)(.)/,
    nw = "'",
    Eia = "#$1$1$2$2$3$3";

function ow(a) {
    if (!pw.test(a)) f(Error(nw + a + "' is not a valid hex color"));
    if (a.length == 4) a = a.replace(Dia, Eia);
    return a.toLowerCase()
}
var pw = /^#(?:[0-9a-f]{3}){1,2}$/i;

function qw() {
    this.a = {};
    this.f = []
}
s(qw, t);qw.prototype.q = function () {
    qw.p.q.call(this);
    delete this.a;
    delete this.f
};

function rw() {
    this.a = {}
}
s(rw, t);rw.prototype.Bj = function () {
    return this.a
};rw.prototype.q = function () {
    rw.p.q.call(this);
    delete this.a
};

function sw(a, b) {
    it.call(this, dh, a);
    this.f = tw(i, (new Uh).Z());
    this.update(b)
}
s(sw, it);
var uw = k;

function Zv(a, b) {
    return a.f[b] || new qi({})
}
var Fia = "le_nb";sw.prototype.Gb = function (a, b) {
    switch (a) {
    case Fia:
        for (var c in b) this.f[vw(c)].update(b[c]);
        break
    }
};sw.prototype.Uc = function (a) {
    var b = {},
        c = this.f,
        d = {};
    a = a.le_nb;
    for (var e in a) {
        var g = c[vw(e)];
        d[e] = g.Uc(a[e])
    }
    b.le_nb = d;
    return b
};
var ww = "nl_";sw.prototype.Z = function () {
    for (var a = this.f, b = {}, c = 0; c < a.length; c++) b[ww + c] = a[c].Z();
    a = {};
    a.le_nb = b;
    return a
};
sw.prototype.q = function () {
    sw.p.q.call(this);
    for (var a in this.f) this.f[Number(a)].G();
    delete this.f
};

function tw(a, b, c, d) {
    var e = [];
    a = a ? Sba : Tba;
    for (var g = 0; g <= 8; g++) {
        var h = 36 * g,
            j = {};
        j.b_gt = Za(c) && g == d ? c : a[g % a.length];j.b_ts = b;j.b_ifl = 18 + h;j.b_il = 36 + h;e[g] = new qi(j)
    }
    return e
}
function vw(a) {
    if (!uw) for (var b = uw = {}, c = 0; c <= 8; c++) b[ww + c] = c;
    return uw[a]
}
lt.set(dh, function (a, b) {
    return new sw(a, b)
});

function xw(a) {
    this.a = dh;
    this.update(a || {})
}
s(xw, Sg);
var yw = "ls_id",
    zw = "ls_nest",
    Gia = {
        T3: yw,
        c4: zw
    };n = xw.prototype;n.Bb = k;n.yb = 0;n.fg = function () {
    return [Hd]
};n.cf = function () {
    return i
};n.Uo = function () {
    return i
};

function lv(a) {
    return a.Bb
}
n.Gb = function (a, b) {
    switch (a) {
    case yw:
        this.Bb = b;
        break;
    case zw:
        this.yb = b;
        break
    }
};n.Z = function () {
    var a = {};
    a.ls_nest = this.yb;
    a.ls_id = this.Bb;
    return a
};n.ea = function (a) {
    switch (a) {
    case zw:
        return this.yb;
    case yw:
        return this.Bb
    }
    return xw.p.ea.call(this, a)
};n.be = function () {
    return rb(Gia)
};
n.sa = function () {
    return new xw(this.Z())
};qh(function () {
    return new xw
});

function Aw(a) {
    var b = Bw(a.ra());
    return Cw(a.n, jt, b).length > 0
}
function Bw(a) {
    if (a.Kb()) return Ev(a).start;
    else if (a.Fa().O() == 0) return a.Fa().a;
    return -1
};

function Dw(a, b, c) {
    b = Iu(a, b);
    return Cw(a.n, c, b).length > 0
};

function Hia(a) {
    return Dw(a, Qu(a), Xg)
}
function Ew(a) {
    var b = Qu(a);
    return Dw(a, b, Xg) || Dw(a, b, ah)
};
var Fw = [0, 2];

function Gw(a, b) {
    if (!b || b.start != b.end) return k;
    return Hw(a, Fw, b.start)
}
function Iw(a, b) {
    if (b.O() == 0) return Hw(a, Fw, b.a);
    else for (var c = a.Pa(b.ma()), d = c.a, e = 0; e < Fw.length; e++) if (d.O() == Fw[e]) return c;
    return k
}
function Hw(a, b, c) {
    c = Cw(a.n, Lf, c);
    if (c.length > 0) {
        a = a.Pa(c[0]);
        if (a.O() == Lf) {
            c = a.a;
            for (var d = 0; d < b.length; ++d) if (c.O() == b[d]) return a
        }
    }
    return k
};
var Jw = Ng([wg, rg, Ig, jg, Jg, kg, ng, lg, mg, xg, Hd]);

function Kw(a, b) {
    var c = a.lastIndexOf(wg, b - 1);
    if (c < 1) return k;
    var d = a.indexOf(rg, c);
    return b <= d ? new nb(c, d) : k
}
function Lw(a, b) {
    return !!Kw(a, b)
}

function Mw(a, b) {
    b = b.sa();
    var c = a.indexOf(wg, b.start),
        d = a.indexOf(rg, b.start);
    if (c < 1 && d < 1) return b;
    var e = c > 1 && c < d ? c : b.start;c = a.lastIndexOf(wg, b.end);d = a.lastIndexOf(rg, b.end);
    var g = c > 1 && c < d ? d : b.end;
    var h = c = 0;d = 1;
    for (e = e; e <= g; e++) {
        var j = E(a, e);
        switch (j) {
        case wg:
        case ug:
            h++;
            break;
        case rg:
        case sg:
            h--;
            break;
        case qg:
            if (h < d) d = h;
            break
        }
        if (h < c) c = h;
        if (j == rg && e < g) {
            e = a.indexOf(wg, e);
            if (e < 1) break;
            e = e - 1
        }
    }
    g = -c;h = h - c;
    if (d == c) {
        g++;
        h++
    }
    c = b;d = g;
    for (h = h; d > 0 && c.start > 0;) {
        c.start--;
        g = E(a, c.start);
        switch (g) {
        case wg:
        case ug:
            d--;
            break;
        case rg:
        case sg:
            d++;
            break
        }
    }
    for (d = Bg(a); h > 0 && c.end < d;) {
        c.end++;
        g = E(a, c.end);
        switch (g) {
        case wg:
        case ug:
            h++;
            break;
        case rg:
        case sg:
            h--;
            break
        }
    }
    return b
};

function Nw(a) {
    this.Ml = a || window;
    this.ux = oe(this.Ml, yp, this.DT, l, this);
    this.jb = z.fe(this.Ml);
    if (y.La && y.Xk || y.Gc && this.Ml.self != this.Ml.top) this.Uy = window.setInterval(r(this.OG, this), 500)
}
s(Nw, Pi);n = Nw.prototype;n.ux = k;n.Ml = k;n.jb = k;n.Uy = k;n.q = function () {
    Nw.p.q.call(this);
    if (this.ux) {
        te(this.ux);
        this.ux = k
    }
    if (this.Uy) {
        window.clearInterval(this.Uy);
        this.Uy = k
    }
    this.jb = this.Ml = k
};n.DT = function () {
    this.OG()
};n.OG = function () {
    var a = z.fe(this.Ml);
    if (!dd(a, this.jb)) {
        this.jb = a;
        this.dispatchEvent(yp)
    }
};

function Ow(a, b) {
    this.g = a;
    this.f = b;
    this.a = new Nw;
    this.L = new ze(this);
    this.L.C(this.a, yp, this.n)
}
s(Ow, Pi);Ow.prototype.n = function (a) {
    this.dispatchEvent(a);
    this.f()
};Ow.prototype.fe = function () {
    return this.a.jb ? this.a.jb.sa() : k
};Ow.prototype.q = function () {
    Ow.p.q.call(this);
    this.L.G();
    this.a.G();
    this.f = this.g = k
};
var Iia = "position:absolute;width:9em;height:9em;top:-99em";

function Pw(a) {
    a = this.u = a || z.J();
    this.f = a.F(Kd, {
        style: Iia
    });
    a = a.Va().body;
    a.insertBefore(this.f, a.firstChild);
    this.g = z.ew(this.f);
    this.vv();
    this.n();
    oe(this.g, yp, this.n, l, this)
}
s(Pw, Pi);Pw.prototype.a = 0;
var Jia = {
    "-4": [6, 14, 22, 32, 42, 54, 66, 80, 94],
    "-3": [6, 13, 22, 31, 41, 51, 63, 77, 91],
    "-2": [5, 12, 21, 30, 40, 51, 64, 77, 92],
    "-1": [6, 13, 21, 31, 42, 54, 66, 79, 93],
    "0": [7, 15, 24, 34, 45, 57, 70, 84, 99],
    "1": [7, 14, 23, 33, 44, 55, 68, 81, 96],
    "2": [7, 15, 23, 33, 43, 55, 68, 81, 96],
    "3": [7, 15, 23, 33, 44, 56, 68, 82, 97],
    "4": [7, 14, 23, 33, 43, 55, 67, 81, 96],
    "5": [7, 14, 23, 33, 44, 55, 68, 82, 97],
    "6": [7, 14, 23, 33, 43, 55, 68, 82, 96]
},
    Qw = {
        "-4": 0.5,
        "-3": Math.pow(1.2, -3),
        "-2": Math.pow(1.2, -2),
        "-1": Math.pow(1.2, -1),
        "0": 1,
        "1": 1.2,
        "2": Math.pow(1.2, 2),
        "3": Math.pow(1.2, 3),
        "4": Math.pow(1.2, 4),
        "5": Math.pow(1.2, 5),
        "6": Math.pow(1.2, 6),
        "7": 3
    },
    Kia = "position: absolute; visibility: hidden; top: -1000px",
    Lia = "height:7px",
    Mia = "height:8px",
    Nia = "height:9px",
    Oia = "height:10px",
    Pia = "height:11px",
    Qia = "height:12px",
    Ria = "height:13px",
    Sia = "height:14px",
    Tia = "height:15px",
    Uia = "height:16px";
Pw.prototype.vv = function () {
    var a = this.u;
    this.ua = a.F(A, {
        style: Kia
    }, a.F(A, {
        style: Lia
    }, oj), a.F(A, {
        style: Mia
    }, mj), a.F(A, {
        style: Nia
    }, sj), a.F(A, {
        style: Oia
    }, sj), a.F(A, {
        style: Pia
    }, Zc), a.F(A, {
        style: Qia
    }, Cj), a.F(A, {
        style: Ria
    }, Zc), a.F(A, {
        style: Sia
    }, xj), a.F(A, {
        style: Tia
    }, sj), a.F(A, {
        style: Uia
    }, lj));
    a.Va().body.appendChild(this.ua)
};
Pw.prototype.n = function () {
    for (var a = this.ua, b = a.childNodes.length, c = [], d = 1; d < b; d++) c.push(a.childNodes[d].offsetTop);
    var e = 0;
    faa(Jia, function (g, h) {
        for (var j = 0; j < b - 1; j++) if (c[j] - g[j] != 0) return l;
        e = h;
        return i
    });
    if (e == 0) if (window.outerWidth / window.innerWidth > 2) e = 7;
    if (this.a != e) {
        this.a = e;
        this.dispatchEvent(Li)
    }
};Pw.prototype.q = function () {
    Pw.p.q.call(this);
    re(this.g, yp, this.n, l, this);
    this.g = k;
    z.removeNode(this.f);
    delete this.f;
    z.removeNode(this.ua);
    delete this.ua
};

function Rw(a, b, c) {
    this.Dm = a;
    this.g = b;
    this.f = c;
    this.a = r(this.z0, this)
}
s(Rw, t);n = Rw.prototype;n.sy = l;n.DL = 0;n.Ta = k;n.q = function () {
    Rw.p.q.call(this);
    if (this.Ta) {
        Pj(this.Ta);
        this.Ta = k;
        this.sy = l
    }
};n.z0 = function () {
    this.Ta = k;
    if (this.sy && !this.DL) {
        this.sy = l;
        Sw(this)
    }
};

function Sw(a) {
    a.Ta = Oj(a.a, a.g);
    a.Dm.call(a.f)
};

function Tw(a) {
    this.type = a
};

function Uw(a) {
    this.g = 1;
    this.n = a
}
s(Uw, zr);Uw.prototype.ma = function () {
    return this.n
};Uw.prototype.Z = function () {
    var a = Uw.p.Z.call(this);
    a.id = this.n;
    return a
};Uw.prototype.Le = function (a) {
    var b = Uw.p.Le.call(this, a);
    if (b != 0) return b;
    if (a.O() == 1) return Lb(this.n, a.ma());
    return 1
};
var Vw = "kix";

function Ww(a) {
    return (a || Vw) + Na + cc()
};

function Xw(a, b, c, d) {
    iv.call(this, b, d);
    this.P = a;
    this.a = c
}
s(Xw, iv);
var Via = "kix-blockview";Xw.prototype.F = function () {
    this.sb(this.J().F(sd, Via))
};Xw.prototype.O = function () {
    return this.P
};Xw.prototype.xm = function () {
    return this.z().offsetHeight
};Xw.prototype.q = function () {
    Xw.p.q.call(this);
    delete this.a
};

function Yw() {
    this.a = [];
    this.f = 0
}
Yw.prototype.add = function (a) {
    this.f += a;
    this.a.push(this.f)
};Yw.prototype.g = function (a) {
    if (a < 0) return 0;
    return this.a[a]
};Yw.prototype.n = function (a) {
    a = Math.min(this.a.length, a);
    this.a.length = a;
    this.f = a <= 0 ? 0 : this.a[a - 1]
};

function Zw(a) {
    this.a = [];
    this.u = a;
    this.f = new Yw
}
Zw.prototype.add = function (a, b) {
    b && this.u.a < 0 ? this.a.push(a - b, b) : this.a.push(a);this.f.add(a, b)
};Zw.prototype.g = function (a) {
    var b;
    if (this.u.a != 0) {
        b = this.u;
        a = this.a.slice(0, a + 1);
        for (var c = Qw[b.a], d = 0, e = 0; e < a.length; e++) {
            var g = a[e],
                h = Qw[b.a];
            d += g == 0 ? 0 : Math.max(1, Math.floor(g * h))
        }
        c > 1 && d++;
        b = Math.floor(d / c)
    } else b = this.f.g(a);
    return b
};Zw.prototype.n = function (a) {
    this.a.length = Math.min(this.a.length, a);
    this.f.n(a)
};

function $w(a) {
    this.a = [];
    this.f = [];
    this.g = a
}
s($w, t);$w.prototype.ea = function (a) {
    var b = this.a,
        c;
    if (b.length > a) {
        var d = 0,
            e = this.f;
        for (c = e.length - 1; c >= 0; c--) {
            if (e[c].index > a) break;
            d += e[c].lk
        }
        return b[a] + d
    }
    ax(this, a);
    if (b.length <= a) {
        d = this.g;
        for (c = b.length; c <= a; c++) b[c] = d(c - 1, b[c - 1])
    }
    return b[a]
};$w.prototype.indexOf = function (a) {
    var b = this.a;
    ax(this, b.length);
    if (a <= b[b.length - 1]) {
        a = Ec(b, a);
        return a < 0 ? -a - 2 : a
    }
    var c = this.g,
        d, e;
    do {
        e = b.length;
        d = c(e - 1, b[e - 1]);
        b.push(d)
    } while (b[e] < a);
    return a == d ? e : e - 1
};

function bx(a, b) {
    ax(a, b);
    a.f.length = 0;
    a.a.length = Math.min(a.a.length, b)
}
function Wia(a, b) {
    var c = b.index;
    return a > c ? -1 : a < c ? 1 : 0
}
function ax(a, b) {
    var c = a.f;
    if (c.length != 0) {
        var d = 0,
            e = c.length - 1,
            g = c[e].index;
        b = Math.min(b, a.a.length - 1);
        if (!(g > b)) {
            for (; g <= b; g++) {
                if (e >= 0 && c[e].index == g) d += c[e--].lk;
                a.a[g] += d
            }
            c.length = e + 1;
            if (g + 1 < a.a.length && d != 0) c[e + 1] = {
                index: g + 1,
                lk: d
            }
        }
    }
}
$w.prototype.q = function () {
    $w.p.q.call(this);
    delete this.a;
    delete this.g
};

function cx(a, b, c, d) {
    Xw.call(this, 1, a, c, d);
    this.f = b;
    this.ya(b)
}
s(cx, Xw);n = cx.prototype;n.ga = function () {
    cx.p.ga.call(this);
    this.f.Ja(this.z())
};n.uC = function (a, b, c) {
    this.f.pg(a, b, c)
};n.og = function () {
    return this.f.tc()
};n.cx = function () {};n.mK = function (a, b, c) {
    return this.f.Gf(a, b, c)
};

function dx(a, b) {
    iv.call(this, a, b)
}
s(dx, iv);

function ex(a, b) {
    iv.call(this, a, b)
}
s(ex, dx);ex.prototype.Gf = function () {
    return k
};

function fx(a, b, c) {
    this.f = a;
    this.a = b;
    this.g = c
}
fx.prototype.n = 0;

function gx(a) {
    return Ec(a.g, a.n, function (b, c) {
        if (c.top < b && c.top + c.height > b) return 0;
        return Fc(b, c.top)
    }) < 0
};

function hx(a, b, c) {
    this.height = a;
    this.a = b;
    this.f = c
};

function ix() {
    this.f = {}
}
s(ix, t);ix.prototype.n = function (a, b, c) {
    for (var d = this.f[ib(b.A)] || [], e = 0, g; g = d[e]; e++) if (g = g.n(a, b, c)) return g;
    return k
};ix.prototype.a = function (a, b) {
    for (var c = this.f[ib(b)] || [], d = 0, e; e = c[d]; d++) if (e.a(a, b)) return i;
    return l
};ix.prototype.register = function (a, b) {
    var c = ib(b);
    this.f[c] || (this.f[c] = []);
    this.f[c].push(a)
};ix.prototype.q = function () {
    rr.p.q.call(this);
    delete this.f
};

function jx(a, b, c) {
    this.a = a;
    this.u = b || k;
    this.n = !! c
}
s(jx, t);n = jx.prototype;n.Ce = k;n.Xn = k;n.Il = function () {
    return k
};n.Nt = function () {};n.Dj = function () {
    return this.Ce
};n.Sr = function () {
    return this.Xn
};n.Ca = function () {
    return this.u
};n.uv = function (a) {
    return a.F(sd, this.Ca())
};

function kx(a, b) {
    return a.Le(b)
}
n.Le = function (a) {
    var b = this.a.start - a.a.start;
    return b != 0 ? b : this.a.end - a.a.end
};n.q = function () {
    jx.p.q.call(this);
    this.Ce = k
};

function lx(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
n = lx.prototype;
n.Ic = function () {
    return this.left
};n.Wb = function () {
    return this.top
};n.Rc = function () {
    return this.width
};n.uf = function () {
    return this.height
};n.Qa = function (a) {
    if (!a) return l;
    return this.left == a.left && this.width == a.width && this.top == a.top && this.height == a.height
};

function mx(a, b) {
    return a.Qa(b)
}
function nx(a, b, c, d) {
    lx.call(this, a, b, c, d)
}
s(nx, lx);

function Xia(a) {
    this.V = a;
    this.a = [];
    this.f = [];
    this.g = []
}
var Yia = "Spacer is in block, but not in any of its words.";

function Zia(a, b) {
    var c = a.g,
        d = a.g.length,
        e = a.f,
        g = a.f.length,
        h = b.a,
        j = c[c.length - 1].nc;
    if (d == 1 && g == 0) return {
        x: c[0].zg,
        Vy: k
    };
    var m = b.f || h > j;
    m && h > 0 && h--;
    h = Math.min(h, j);
    var o, q;
    for (j = 0; j < d; j++) {
        o = c[j];
        if (h <= o.nc) {
            q = c[j + 1];
            break
        }
    }
    c = o.zg;
    j = q ? q.a : g;
    for (g = o.a; g < j; g++) {
        o = e[g];
        if (h >= o.a && h <= o.nc) {
            if (h == o.nc && m && !o.g) return {
                x: c + o.width,
                Vy: o
            };
            if (o.f) return {
                x: c,
                Vy: o
            };
            else {
                m && h++;
                if (o.g) {
                    e = h;
                    h = o.nc;
                    c -= 1
                } else {
                    e = o.a;
                    h = h - 1
                }
                for (j = e; j <= h; j++) c += a.a[j].width;
                return {
                    x: c,
                    Vy: o
                }
            }
        }
        c += o.width
    }
    a.V.log(Error(Yia));
    return k
}

function ox(a, b, c, d, e) {
    var g = a.length;
    if (g > 0) {
        g = a[g - 1];
        if (b == g.Ic() + g.Rc()) {
            g.width += c;
            return
        }
    }
    a.push(new nx(b, d, c, e))
}
function px(a, b, c, d, e, g, h, j, m) {
    if (d > c || e < b) return i;
    if (d >= b && e <= c) {
        ox(a, g, h, j, m);
        return i
    }
    return l
}
function qx(a, b, c, d, e, g) {
    this.a = b - a;
    this.nc = c - a;
    this.width = d;
    this.g = e;
    this.f = g || k
}
function $ia(a, b, c, d, e) {
    this.nc = b - a;
    this.a = c;
    this.zg = d;
    this.zj = e
};

function rx() {
    this.a = {}
}
Qa(rx);
var aja = RegExp("([\\u05BE\\u05C0\\u05C3\\u05C6\\u05D0-\\u05F4\\u07C0-\\u07EA\\u07F4-\\u07F5\\u07FA-\\u0815\\u081A\\u0824\\u0828\\u0830-\\u083E\\u200F\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB4F])|([\\u0030-\\u0039\\u00B2-\\u00B3\\u00B9\\u06F0-\\u06F9\\u2070\\u2074-\\u2079\\u2080-\\u2089\\u2488-\\u249B\\uFF10-\\uFF19])|([\\u002B\\u002D\\u207A-\\u207B\\u208A-\\u208B\\u2212\\uFB29\\uFE62-\\uFE63\\uFF0B\\uFF0D])|([\\u0023-\\u0025\\u00A2-\\u00A5\\u00B0-\\u00B1\\u0609-\\u060A\\u066A\\u09F2-\\u09F3\\u09FB\\u0AF1\\u0BF9\\u0E3F\\u17DB\\u2030-\\u2034\\u20A0-\\u20B8\\u212E\\u2213\\uA838-\\uA839\\uFE5F\\uFE69-\\uFE6A\\uFF03-\\uFF05\\uFFE0-\\uFFE1\\uFFE5-\\uFFE6])|([\\u0600-\\u0603\\u0660-\\u0669\\u066B-\\u066C\\u06DD])|([\\u002C\\u002E-\\u002F\\u003A\\u00A0\\u060C\\u202F\\u2044\\uFE50\\uFE52\\uFE55\\uFF0C\\uFF0E-\\uFF0F\\uFF1A])|([\\u000A\\u000D\\u001C-\\u001E\\u0085\\u2029])|([\\u0009\\u000B\\u001F])|([\\u000C\\u0020\\u1680\\u180E\\u2000-\\u200A\\u2028\\u205F\\u3000])|([\\u0021-\\u0022\\u0026-\\u002A\\u003B-\\u0040\\u005B-\\u0060\\u007B-\\u007E\\u00A1\\u00A6-\\u00A9\\u00AB-\\u00AC\\u00AE-\\u00AF\\u00B4\\u00B6-\\u00B8\\u00BB-\\u00BF\\u00D7\\u00F7\\u02B9-\\u02BA\\u02C2-\\u02CF\\u02D2-\\u02DF\\u02E5-\\u02ED\\u02EF-\\u02FF\\u0374-\\u0375\\u037E-\\u0385\\u0387\\u03F6\\u058A\\u0606-\\u0607\\u060E-\\u060F\\u06E9\\u07F6-\\u07F9\\u0BF3-\\u0BF8\\u0BFA\\u0C78-\\u0C7E\\u0CF1-\\u0CF2\\u0F3A-\\u0F3D\\u1390-\\u1399\\u1400\\u169B-\\u169C\\u17F0-\\u180A\\u1940-\\u1945\\u19DE-\\u19FF\\u1FBD\\u1FBF-\\u1FC1\\u1FCD-\\u1FCF\\u1FDD-\\u1FDF\\u1FED-\\u1FEF\\u1FFD-\\u1FFE\\u2010-\\u2027\\u2035-\\u2043\\u2045-\\u205E\\u207C-\\u207E\\u208C-\\u208E\\u2100-\\u2101\\u2103-\\u2106\\u2108-\\u2109\\u2114\\u2116-\\u2118\\u211E-\\u2123\\u2125\\u2127\\u2129\\u213A-\\u213B\\u2140-\\u2144\\u214A-\\u214D\\u2150-\\u215F\\u2189-\\u2211\\u2214-\\u2335\\u237B-\\u2394\\u2396-\\u2487\\u24EA-\\u26AB\\u26AD-\\u27FF\\u2900-\\u2B59\\u2CE5-\\u2CEA\\u2CF9-\\u2CFF\\u2E00-\\u2FFB\\u3001-\\u3004\\u3008-\\u3020\\u3030\\u3036-\\u3037\\u303D-\\u303F\\u309B-\\u309C\\u30A0\\u30FB\\u31C0-\\u31E3\\u321D-\\u321E\\u3250-\\u325F\\u327C-\\u327E\\u32B1-\\u32BF\\u32CC-\\u32CF\\u3377-\\u337A\\u33DE-\\u33DF\\u33FF\\u4DC0-\\u4DFF\\uA490-\\uA4C6\\uA60D-\\uA60F\\uA673\\uA67E-\\uA67F\\uA700-\\uA721\\uA788\\uA828-\\uA82B\\uA874-\\uA877\\uFD3E-\\uFD3F\\uFDFD\\uFE10-\\uFE19\\uFE30-\\uFE4F\\uFE51\\uFE54\\uFE56-\\uFE5E\\uFE60-\\uFE61\\uFE64-\\uFE68\\uFE6B\\uFF01-\\uFF02\\uFF06-\\uFF0A\\uFF1B-\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF65\\uFFE2-\\uFFE4\\uFFE8-\\uFFFD])|([\\u202A])|([\\u202D])|([\\u0608\\u060B\\u060D\\u061B-\\u064A\\u066D-\\u066F\\u0671-\\u06D5\\u06E5-\\u06E6\\u06EE-\\u06EF\\u06FA-\\u070D\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\uFB50-\\uFD3D\\uFD50-\\uFDFC\\uFE70-\\uFEFC])|([\\u202B])|([\\u202E])|([\\u202C])|([\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1-\\u05C2\\u05C4-\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DE-\\u06E4\\u06E7-\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962-\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2-\\u09E3\\u0A01-\\u0A02\\u0A3C\\u0A41-\\u0A51\\u0A70-\\u0A71\\u0A75-\\u0A82\\u0ABC\\u0AC1-\\u0AC8\\u0ACD\\u0AE2-\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D-\\u0B56\\u0B62-\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C56\\u0C62-\\u0C63\\u0CBC\\u0CCC-\\u0CCD\\u0CE2-\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62-\\u0D63\\u0DCA\\u0DD2-\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECD\\u0F18-\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86-\\u0F87\\u0F90-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039-\\u103A\\u103D-\\u103E\\u1058-\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085-\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752-\\u1753\\u1772-\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927-\\u1928\\u1932\\u1939-\\u193B\\u1A17-\\u1A18\\u1A56\\u1A58-\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80-\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BA9\\u1C2C-\\u1C33\\u1C36-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DFF\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099-\\u309A\\uA66F-\\uA672\\uA67C-\\uA67D\\uA6F0-\\uA6F1\\uA802\\uA806\\uA80B\\uA825-\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31-\\uAA32\\uAA35-\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7-\\uAAB8\\uAABE-\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26])|([\\u0000-\\u0008\\u000E-\\u001B\\u007F-\\u0084\\u0086-\\u009F\\u00AD\\u070F\\u200B-\\u200D\\u2060-\\u206F\\uFEFF])");

function sx(a, b) {
    var c = a.a[b];
    if (c == k) {
        for (var d = aja.exec(b), e = d ? d.length : 0,
            g = 1;c == k;g++) if (g >= e) c = 0;
        else if (d[g]) c = g;
        a.a[b] = c
    }
    return c
};
/*

 Copyright (C) 2001-2009, International Business Machines Corporation and
 others.  All Rights Reserved.
*/

function bja() {
    this.f = 0;
    this.n = [];
    this.g = [];
    this.K = this.P = this.a = this.M = this.aa = this.u = 0;
    this.xa = []
}
function tx(a, b, c) {
    if (a.M == 2 && b < c) return a.g[b];
    return ux(a, b)
}
function vx(a) {
    return 1 << (a & -65)
}
var wx = [1, 2],
    cja = [2048, 16384],
    dja = [4096, 32768];

function ux(a, b) {
    return a.aa ? a.n[b] >> 6 : a.u
}
function xx(a) {
    if (!(a.a & 57346) && !(a.a & 32 && a.a & 384984)) return 0;
    if (!(a.a & 6181)) return 1;
    return 2
}
var eja = [0, 1, 2, 7, 8, 3, 9, 6, 5, 4, 4, 10, 10, 12, 10, 10, 10, 11, 10],
    yx = [
        [1, 2, 4, 5, 7, 15, 17, 7, 9, 7, 0, 7, 3, 4],
        [1, 34, 36, 37, 39, 47, 49, 39, 41, 39, 1, 1, 35, 0],
        [33, 2, 36, 37, 39, 47, 49, 39, 41, 39, 2, 2, 35, 1],
        [33, 34, 38, 38, 40, 48, 49, 40, 40, 40, 3, 3, 3, 1],
        [33, 34, 4, 37, 39, 47, 49, 74, 11, 74, 4, 4, 35, 2],
        [33, 34, 36, 5, 39, 47, 49, 39, 41, 76, 5, 5, 35, 3],
        [33, 34, 6, 6, 40, 48, 49, 40, 40, 77, 6, 6, 35, 3],
        [33, 34, 36, 37, 7, 47, 49, 7, 78, 7, 7, 7, 35, 4],
        [33, 34, 38, 38, 8, 48, 49, 8, 8, 8, 8, 8, 35, 4],
        [33, 34, 4, 37, 7, 47, 49, 7, 9, 7, 9, 9, 35, 4],
        [97, 98, 4, 101, 135, 111, 113, 135, 142, 135, 10, 135, 99, 2],
        [33, 34, 4, 37, 39, 47, 49, 39, 11, 39, 11, 11, 35, 2],
        [97, 98, 100, 5, 135, 111, 113, 135, 142, 135, 12, 135, 99, 3],
        [97, 98, 6, 6, 136, 112, 113, 136, 136, 136, 13, 136, 99, 3],
        [33, 34, 132, 37, 7, 47, 49, 7, 14, 7, 14, 14, 35, 4],
        [33, 34, 36, 37, 39, 15, 49, 39, 41, 39, 15, 39, 35, 5],
        [33, 34, 38, 38, 40, 16, 49, 40, 40, 40, 16, 40, 35, 5],
        [33, 34, 36, 37, 39, 47, 17, 39, 41, 39, 17, 39, 35, 6]
    ],
    fja = [
        [
            [0, 1, 0, 2, 0, 0, 0, 0],
            [0, 1, 3, 3, 20, 20, 0, 1],
            [0, 1, 0, 2, 21, 21, 0, 2],
            [0, 1, 3, 3, 20, 20, 0, 2],
            [32, 1, 3, 3, 4, 4, 32, 1],
            [32, 1, 32, 2, 5, 5, 32, 1]
        ],
        [
            [1, 0, 2, 2, 0, 0, 0, 0],
            [1, 0, 1, 3, 20, 20, 0, 1],
            [1, 0, 2, 2, 0, 0, 0, 1],
            [1, 0, 1, 3, 5, 5, 0, 1],
            [33, 0, 33, 3, 4, 4, 0, 0],
            [1, 0, 1, 3, 5, 5, 0, 0]
        ]
    ];

function zx(a, b, c, d, e) {
    var g = b.f,
        h;
    h = d;
    c = g[b.Ui][c];
    b.Ui = c & 15;
    c = c >> 4;
    g = g[b.Ui][7];
    if (c != 0) switch (c) {
    case 1:
        b.g = h;
        break;
    case 2:
        d = b.g;
        break;
    default:
        f("Internal ICU error in processPropertySeq_")
    }
    if (g != 0 || d < h) {
        b = b.a + g;
        for (d = d; d < e; d++) a.g[d] = b
    }
}

function Ax(a, b, c, d, e) {
    var g = new gja,
        h, j, m, o;
    g.Ui = 0;
    g.a = a.g[b];
    g.f = fja[g.a & 1];
    zx(a, g, d, b, b);
    m = a.n[b] == 17 ? 1 + d : 0;d = b;h = 0;
    for (b = b; b <= c; b++) {
        o = b >= c ? e : eja[a.n[b] & -65];j = m;o = yx[j][o];m = o & 31;o = o >> 5;
        if (b == c && o == 0) o = 1;
        if (o != 0) {
            j = yx[j][13];
            switch (o) {
            case 1:
                zx(a, g, j, d, b);
                d = b;
                break;
            case 2:
                h = b;
                break;
            case 3:
                zx(a, g, j, d, h);
                zx(a, g, 4, h, b);
                d = b;
                break;
            case 4:
                zx(a, g, j, d, h);
                d = h;
                h = b;
                break;
            default:
                f("Internal ICU error in resolveImplicitLevels_")
            }
        }
    }
    zx(a, g, e, c, c)
}
function gja() {}

function hja(a, b) {
    this.a = a;
    this.u = b || Bx || (Bx = new Cx)
}
var Bx = k;

function Dx(a, b, c) {
    for (var d = a.n;;) {
        for (var e = b, g; b < a.g;) {
            g = tx(a.a, b, a.f);
            if (g != c) break;
            b++
        }
        b > e && d.push(a.u.f(e, b, c));
        if (b >= a.g || g < c) return b;
        e = d.length - 1;
        b = Dx(a, b, c + 1);
        for (var h = d.length; ++e < --h;) {
            var j = d[e];
            d[e] = d[h];
            d[h] = j
        }
    }
}
function Ex(a, b, c) {
    this.f = a;
    this.g = b;
    this.a = c
}
Ex.prototype.SA = Ha(10);

function Cx() {}
Cx.prototype.f = function (a, b, c) {
    return new Ex(a, b, c)
};
var ija = RegExp("[\u0626\u0628\u062a-\u062e\u0633-\u0647\u0649-\u064a\u066e-\u066f\u0678-\u0687\u069a-\u06bf\u06c1-\u06c2\u06cc\u06ce\u06d0-\u06d1\u06fa-\u06fc\u06ff\u0712-\u0714\u071a-\u071d\u071f-\u0727\u0729\u072b\u072d-\u072e\u074e-\u0758\u075c-\u076a\u076d-\u0770\u0772\u0775-\u0777\u077a-\u077f\u07ca-\u07ea\u07fa\u200d]"),
    jja = RegExp("[\u0622-\u0625\u0627\u0629\u062f-\u0632\u0648\u0671-\u0673\u0675-\u0677\u0688-\u0699\u06c0\u06c3-\u06cb\u06cd\u06cf\u06d2-\u06d3\u06d5\u06ee-\u06ef\u0710\u0715-\u0719\u071e\u0728\u072a\u072c\u072f\u074d\u0759-\u075b\u076b-\u076c\u0771\u0773-\u0774\u0778-\u0779]"),
    Fx = {};

function Gx(a, b) {
    for (var c = b - 1; c >= 1; --c) {
        var d = E(a, c);
        if (sx(rx.N(), d) != 17) return d
    }
    return k
}
var Hx = "R",
    Ix = "N";

function Jx(a) {
    var b = Fx[a];
    if (!b) {
        b = ija.test(a) ? Ov : jja.test(a) ? Hx : Ix;Fx[a] = b
    }
    return b
};

function Kx(a, b, c, d, e) {
    this.g = new N;
    this.u = a;
    this.aa = new cd(0, 0);
    this.xa = this.n = b;
    this.K = this.M = c;
    this.P = l;
    this.f = this.a = d;
    this.Aa = e
}
n = Kx.prototype;n.lx = 0;n.cC = 0;n.gr = 0;n.kx = 0;n.qv = 0;n.gq = 0;n.Pz = v;n.Rx = k;n.EL = v;n.xp = 0;n.Sx = 0;n.ED = 0;n.Sz = l;n.At = k;n.PJ = l;n.yK = 0;n.zB = l;
var Lx = '<a href="',
    kja = '" style="text-decoration: none;"',
    lja = ' target="_blank"';

function Mx(a, b, c) {
    if (b) {
        b = b.a;
        c.append(Lx, b, kja);
        Jv(b) || c.append(lja);
        c.append(Ub)
    }
    c.append(Pe, a, Qe)
}
var Nx = "\u2018",
    Ox = "&lsquo;",
    Px = "\u2019",
    Qx = "&rsquo;",
    Rx = "\u201c",
    Sx = "&ldquo;",
    Tx = "\u201d",
    Ux = "&rdquo;";

function Vx(a) {
    switch (a) {
    case x:
        return gv;
    case Jg:
        return v;
    case Ub:
        return Qb;
    case Tb:
        return Pb;
    case Sb:
        return Ob;
    case Nx:
        return Ox;
    case Px:
        return Qx;
    case Rx:
        return Sx;
    case Tx:
        return Ux;
    default:
        return a
    }
}
var mja = '<bdo dir="',
    Wx = "ltr",
    Xx = "rtl",
    nja = '"><span style="',
    oja = "</span></bdo>";

function Yx(a, b, c, d) {
    return Ue(a, bc(mja, d ? Wx : Xx,
    nja,
    c,
    Qe,
    b,
    oja))
}

function Zx(a) {
    if (!a.Sz) return a.lx;
    if (a.gr > 0) return a.gr;
    $x(a);
    return a.gr
}
n.uf = function () {
    if (!this.Sz) return this.kx;
    if (this.qv > 0) return this.qv;
    $x(this);
    return this.qv
};

function $x(a) {
    var b = Yx(a.u, a.Pz, a.n, a.Aa);
    a.qv = b.height;
    a.gr = a.cC > 0 ? a.cC : b.width
}
function ay(a, b, c) {
    a.g.append(b);
    a.Rx = c;
    a.Sx = a.lx + c.width;
    a.ED = Math.max(a.kx, c.height)
}
var by = "</a>";

function cy(a, b, c) {
    if (a.xa != b || a.K != c) {
        var d = a.g,
            e = a.K;
        d.append(Re);
        e && d.append(by);
        Mx(b, c, d);
        a.xa = b;
        a.K = c
    }
}

function dy(a, b) {
    if (b) a.At = b;
    if (a.EL != x) a.gq = 0;
    a.Pz = a.g.toString();
    a.lx = a.Sx;
    a.kx = a.ED;
    a.f = a.xp;
    var c = a.Rx;
    a.aa = c ? c : new cd(0, 0);a.Rx = k;a.gr = 0;a.zB = i
};

function ey(a, b, c, d, e, g, h, j, m) {
    this.n = a;
    this.g = b;
    this.Aa = c;
    this.u = d;
    this.a = e;
    this.f = g;
    this.xa = h;
    this.M = j;
    this.K = m ? m : Ge.N()
}
n = ey.prototype;n.oj = 0;n.Rn = 0;n.nr = 0;n.ku = l;n.bq = v;n.Oy = k;n.Xp = k;n.Ey = 0;n.yk = 0;n.CE = k;n.YC = k;
var fy = '<span id="',
    pja = '_temp"></span>',
    gy = "\u0640",
    qja = '<span class="goog-inline-block" style="width:',
    rja = 'px;">&nbsp;</span>',
    sja = "&lrm;",
    tja = "&rlm;",
    uja = '<bdo dir="ltr">',
    vja = '<bdo dir="rtl">',
    wja = "</bdo>",
    xja = "Unable to calculate bidi runs.",
    hy = "<span>",
    yja = '">&nbsp;',
    iy = '<span class="',
    jy = "goog-inline-block",
    ky = "kix-lineview-text-block",
    zja = '" style="width:',
    ly = "px;",
    Aja = 'unicode-bidi:bidi-override;">';

function my(a, b, c, d, e, g, h, j, m, o, q) {
    var u = Math.max(d.end - d.start, 0),
        w = a.a.f.length,
        C = b,
        B = Bg(a.n) - 1,
        H = new N,
        I = [],
        T = a.f.a >= 0;
    a.ku = l;
    a.oj = 0;
    a.Rn = 0;
    a.nr = 0;
    a.Xp = k;
    a.Ey = 0;
    a.yk = 0;
    a.aa = l;
    a.P = 0;
    a.bq = v;
    a.CE = a.g.td(ih);
    a.YC = a.g.td(ch);
    ny(a, b, i);
    var X = 0;
    if (o) X = Ue(a.K, o).height;
    a.Rn = Math.max(X, Yx(a.K, gv, a.bq, g).height);
    a.nr = a.Rn;
    var V = u,
        ma = [],
        Ka = b,
        xa = k;
    for (X = k;
    (V >= 0 || q || Hg(a.n, Ka)) && C < B && Ka <= B;) {
        h = h && a.oj == 0;
        a: {
            xa = a;
            var gk = b;
            Ka = Ka;
            for (var e8 = B, qP = c, Yxa = V, Zxa = u, $xa = j, aya = m, rP = T, f8 = d.start, bya = h, cya = q, sP = xa.n, g8 =
            xa.xa, h8 = xa.u, i8 = xa.Aa, Ya = 0, tP = rP ? oy(xa.f, Ka) : NaN,
                tg = new Kx(xa.K, xa.bq, xa.Oy, Ka, rP ? !(tP & 1) : g),
                uh = E(sP, Ka),
                sb = i8.n(Ka, h8, g8),
                dq = void 0,
                dya = xa.P;Ka <= e8;Ka += Ya) {
                if (uh == Hd || uh == Ig) {
                    tg.PJ = i;
                    xa = tg;
                    break a
                }
                if (Ya = uh == Jg) if (Ka > gk) {
                    xa.aa = i;
                    xa = k;
                    break a
                }
                ny(xa, Ka);
                if (dq = sb) {
                    var nd = xa;
                    sb = dq;
                    var Vg = Ka;
                    Ya = tg;
                    sb.cd(Vg, Zxa);
                    for (var Jc = sb.Am(), Ke = void 0, If = void 0, Wg = Vg + Jc; Wg >= Vg; Wg--) {
                        Ke || (Ke = nd.CE[Wg]);
                        if (nd.M && !If) If = nd.YC[Wg];
                        if (Ke && (!nd.M || If)) break
                    }
                    Vg = Ke ? py(nd, Ke) : Ya.n;nd = If ? qy(nd, If) : Ya.M;
                    if (!(Ya.xp >= Ya.a)) {
                        ay(Ya, bc(fy, ib(sb), pja), sb.rg());
                        cy(Ya, Vg, nd);
                        Ya.xp = Ya.a + sb.Am() - 1
                    }
                    Ya = Jc
                } else if (Ya) {
                    sb = xa;
                    b: {
                        If = xa;
                        Vg = qP;
                        Ya = f8;
                        Jc = k;
                        nd = If.g.oa(eh, gk);
                        Ke = Th(nd);
                        for (Wg = 0; Wg < Ke.length; Wg++) {
                            var Jf = Ke[Wg],
                                od = xh(Jf);
                            if (od > Ya && (!Jc || od < xh(Jc))) Jc = Jf
                        }
                        If = Fg(If.n, Vg);
                        Vg = Ph(nd);
                        Ke = Qh(nd);
                        if (If && Vg < Ke && Ke > Ya) if (!Jc || xh(Jc) > Ke) {
                            Ya = {
                                lk: Qh(nd),
                                lG: 0
                            };
                            break b
                        }
                        Ya = Jc ? {
                            lk: xh(Jc),
                            lG: Jc.ii()
                        } : k
                    }
                    sb = sb;Jc = Ya;nd = f8;Ya = tg;sb.Xp = Jc ? Jc.lG : 0;sb.Ey = Jc ? Jc.lk : yh(nd);sb.yk = sb.Xp == 0 ? sb.Ey - nd : 0;
                    if (!(Ya.xp >= Ya.a)) {
                        sb = new cd(sb.yk, 0);
                        ay(Ya, Vx(Jg), sb);
                        Ya.P = i;
                        Ya.xp = Ya.a
                    }
                    Ya = 1
                } else {
                    sb = tg;
                    var fi = uh;
                    Jf = sP;
                    Ya = Ka;
                    Jc = xa.bq;
                    nd = xa.Oy;
                    If = $xa + (aya > dya ? 1 : 0);
                    var kf = rP;
                    if (sb.P) Ya = 1;
                    else {
                        sb.Sz = i;
                        Vg = Ya;
                        Ke = fi;
                        Wg = Vx(fi);
                        od = void 0;
                        if (kf) {
                            kf = void 0;
                            kf = void 0;
                            for (var uP = Bg(Jf), Ct = Ya + 1; Ct < uP; Ct++) {
                                var Dl = E(Jf, Ct);
                                if (sx(rx.N(), Dl) == 17) {
                                    kf || (kf = new N);
                                    kf.append(Dl)
                                } else break
                            }
                            if (kf = kf ? kf.toString() : v) {
                                Vg += kf.length;
                                Ke += kf;
                                Wg += kf
                            }
                            fi = sx(rx.N(), fi);
                            if (fi == 13) {
                                uP = Ke;
                                Ct = Vg;
                                od = sb.u;
                                kf = fi = v;
                                Dl = E(Jf, Ya);
                                if (Jx(Dl) == Ov) {
                                    if ((Dl = Gx(Jf, Ya)) && Jx(Dl) == Ov) fi = gy;
                                    if (Ct + 1 < Bg(Jf)) {
                                        Jf = E(Jf, Ct + 1);
                                        if (Jx(Jf) == Ov || Jx(Jf) == Hx) kf = gy
                                    }
                                } else if (Jx(Dl) == Hx) if ((Dl = Gx(Jf, Ya)) && Jx(Dl) == Ov) fi = gy;
                                if (fi != v || kf != v) {
                                    Jf = Se(od, Jc, fi + uP + kf);
                                    od = Se(od, Jc, fi + kf);
                                    od = new cd(Jf.width - od.width, Jf.height)
                                } else od = k
                            } else if (1 << fi & 120832) {
                                od = new cd(0, 0);
                                Wg = v
                            }
                        }
                        if (!od) {
                            od = Se(sb.u, Jc, Wg);
                            if (Ke == x && If > 0) {
                                od = new cd(od.width + If, od.height);
                                Wg = bc(qja, od.width, rja);
                                sb.cC += od.width
                            }
                        }
                        cy(sb, Jc, nd);
                        sb.g.append(Wg);
                        if (Ke == x) sb.gq += od.width;
                        sb.Sx = sb.lx + od.width;
                        sb.ED = Math.max(sb.kx, od.height);
                        sb.Rx = od;
                        sb.EL = Ke;
                        sb.xp = Vg;
                        Ya = Vg - Ya + 1;
                        sb.yK += Ya;
                        Ya = Ya
                    }
                }
                if (tg.Sx - tg.gq > Yxa) {
                    if (cya) {
                        if (!tg.zB) {
                            dy(tg, dq);
                            ry(xa, tg, qP, Ka, Ya)
                        }
                        xa = tg
                    } else xa = bya && uh != Jg ? tg : k;
                    break a
                }
                dy(tg, dq);
                uh == x && xa.P++;
                ry(xa, tg, qP, Ka, Ya);
                nd = Ka + Ya;
                Jc = E(sP, nd);
                sb = i8.n(nd, h8, g8);
                uh = uh;
                If = Jc;
                dq = Ka == e8 ? i : dq || sb ? i : uh == Jg ? i : tP >= 0 && tP != oy(xa.f, nd) ? i : lia.test(uh) && !jia.test(uh) && !kia.test(If) ? i : sy(uh) != sy(If);
                if (dq) break;uh = Jc
            }
            xa = tg
        }
        if (!xa) break;C = xa.f;gk = Zx(xa);
        if (xa.zB) {
            ma.push(xa);
            a.oj += gk;
            a.Rn = Math.max(a.Rn, xa.uf());
            if (!xa.At) a.nr = Math.max(a.nr, xa.uf())
        } else break;X = xa;
        if (q) q = l;V -= gk;Ka = C + 1
    }
    if (h = ma.length) if (T) {
        B = a.f;
        T = ma.length;
        if (T == 0) T = B.a >= 0 ? [] : k;
        else {
            m = ma[T - 1];
            T = ma[0].a - B.a;
            j = m.f + 1 - B.a;
            if (T >= 0 && T <= j && j <= B.f.f) {
                q = m.gq > 0 ? m.a - B.a : j;m = new ty(B.a, ma);V = B.f;B = V.aa ? 0 : V.u;V = new hja(V, m);V.g = Za(j) && j < V.a.f ? j : V.a.f;V.f = V.a.P;
                if (q < V.f) V.f = q;V.n = [];Dx(V, T || 0, B);T = V.n;T = m.a == m.g.length ? T : k
            } else T = k
        }
        if (T) {
            ma = l;
            h = T.length;
            for (j = 0; j < h; j++) {
                B = T[j];
                m = B.QE;
                if (q = m.length) {
                    B = !(B.a & 1);
                    if (V = B != g) {
                        if (ma) H.append(g ? sja : tja);
                        H.append(B ? uja : vja)
                    }
                    ma = V;
                    uy(a, m, q, V, c, H, I, j == h - 1 && !V);
                    V && H.append(wja)
                }
            }
        } else {
            a.u.V.log(Error(xja));
            uy(a, ma, h, l, c, H, I, i)
        }
    } else uy(a, ma, h, l, c, H, I, i);
    g = 0;
    if (X && X.gq > 0) {
        a.oj -= Zx(X);
        g = X.yK
    }
    if (!Xa(a.Xp) && a.Xp != 0) {
        a: {
            X = a.Ey - d.start;
            ma = a.oj;
            switch (a.Xp) {
            case 2:
                u = Math.max(X - ma, 0);
                break a;
            case 1:
                u = Math.min(Math.max(X - ma / 2, 0), u - ma);
                break a;
            case 0:
            default:
                u = X;
                break a
            }
        }
        a.yk = u;a.oj += a.yk;a.a.a[b - c] = new cd(a.yk, 0);a.a.f.splice(w, 0, new qx(c, b, b, a.yk, l, k))
    }
    b = C;
    C = g;
    d = d ? d.start : 0;c = new $ia(c, xa && xa.PJ ? b - 1 : b,
    w,
    d,
    d + a.oj);
    if (o) {
        e.append(hy, o, Re);
        a.ku || e.append(Pe, a.bq, yja, Re)
    }
    if (a.ku) e.append(iy, jy, x, ky, zja, Math.ceil(a.oj - a.yk) + ly, a.f.a >= 0 ? Aja : Qe,
    H.toString(),
    Re);
    return new Bja(b, a.aa, c, a.Rn, a.nr, a.P - C, a.ku, I)
}
function uy(a, b, c, d, e, g, h, j) {
    var m = a.a.f,
        o = m.length;
    Mx(b[0].n, b[0].M, g);
    for (var q = c - 1, u = 0; u < c; u++) {
        var w = b[u];
        if (!j || u != q || !(w.gq > 0)) g.append(w.Pz);
        m[o + (d ? c - 1 - u : u)] = new qx(e, w.a, w.f, Zx(w), d, w.At);
        w.At && h.push(w.At)
    }
    if (c) a.ku = i;
    a = a.Oy;
    g.append(Re);
    a && g.append(by)
}

function ry(a, b, c, d, e) {
    b = b.aa;
    if (e == 1) a.a.a[d - c] = b;
    else {
        var g = b.width,
            h = g % e;
        g = (g - h) / e;
        e = d + e;
        for (d = d; d < e; ++d) {
            var j = new cd(g + h, b.height);
            h = 0;
            a.a.a[d - c] = j
        }
    }
}
function sy(a) {
    if (a == Hd) return Hd;
    else if (a == Ig) return Ig;
    else if (a == Jg) return Jg;
    else if (Kg(a)) return x;
    return ij
}
function ny(a, b, c) {
    if (c) {
        c = a.g.oa(ih, b);
        b = a.g.oa(ch, b)
    } else {
        c = a.CE[b];
        b = a.YC[b]
    }
    if (c) a.bq = py(a, c);
    if (b) a.Oy = qy(a, b)
}
function py(a, b) {
    var c = a.u.Aa;
    if (c) return vy(c, b);
    return ii(b)
}

function qy(a, b) {
    if (!a.M) return k;
    var c = b.Ed;
    return c && c.O() == 0 ? c : k
}
function Bja(a, b, c, d, e, g, h, j) {
    this.nc = a;
    this.g = !! b;
    this.Gy = c;
    this.u = h;
    this.height = d;
    this.n = e;
    this.f = g;
    this.a = j
};

function wy(a, b, c) {
    Xw.call(this, 0, a, b, c);
    this.g = new Xia(a.V);
    this.n = {};
    c = a.A;
    this.u = new ey(c.Y(), c, xy, a, this.g, b.a, this.J(), jf(wv(this.getContext())))
}
s(wy, Xw);n = wy.prototype;n.Yf = 0;n.aq = 0;n.bk = 0;n.Qn = 0;n.Xf = k;n.DC = 0;n.Fd = i;n.ck = 0;n.gk = k;n.Oz = 0;n.OH = i;n.uf = function () {
    return this.bk
};n.xm = function () {
    return this.bk
};n.og = function () {
    return this.DC
};
var Cja = "kix-lineview-content",
    Dja = "kix-lineview";n.F = function () {
    var a = this.J();
    this.Xf = a.F(sd, Cja);
    this.sb(a.F(sd, Dja, this.Xf))
};
n.cx = function () {
    this.Yf = this.bk = this.aq = 0;
    var a = this.g;
    a.a = [];
    a.f = [];
    a.g = []
};
var yy = "redraw",
    zy = "lineviewRedraw",
    Eja = "&#9675;",
    Fja = "&#9632;",
    Gja = "&#9679;",
    Hja = '" style="';
n.Rb = function (a, b, c, d, e) {
    pr(mr.N(), yy, zy);
    this.ck = b;
    var g = Q(this.getContext()),
        h = this.oa(eh, a);
    this.Fd = h.f;
    var j = Fg(g.a, a),
        m = j ? Ph(h) : Qh(h),
        o = Rh(h);b = Math.max(0, b - m - o);o = j && kv(this, a);
    var q, u = 0;
    if (o) {
        q = Q(this.getContext());
        u = this.oa(dh, a);
        u = Zv(q.Pa(u.Bb), u.yb);
        switch (u.Fj) {
        case 1:
            q = Eja;
            break;
        case 2:
            q = Fja;
            break;
        case 3:
            q = Ay(Q(this.getContext()), a) + Na;
            break;
        case 4:
            q = Wv(Ay(Q(this.getContext()), a), i) + Na;
            break;
        case 5:
            q = Wv(Ay(Q(this.getContext()), a), l) + Na;
            break;
        case 6:
            q = Vv(Ay(Q(this.getContext()), a), i) + Na;
            break;
        case 7:
            q = Vv(Ay(Q(this.getContext()), a), l) + Na;
            break;
        case 0:
        default:
            q = Gja;
            break
        }
        u = ii(u.a);
        q = bc(iy, jy, x, ky, Hja, u, Qe, q, Re);
        u = Ue(Ge.N(), q).width
    }
    d = By(this, a, m, b, c, 0, d, o, q, u);b = this.og();this.DC = d.nc - a + 1;this.OH = this.DC == 1 && (Hg(g.a, a) || E(g.a, a) == Ig);g = 0;
    if (Hg(this.M.A.a, d.nc) && !(kv(this, a) && kv(this, d.nc + 1))) g = Xe(Ge.N(), h.Vp);m = 0;
    if (j && !(kv(this, a) && kv(this, a - 1))) {
        j = 0;
        if (a > 1) {
            j = this.oa(eh, a - 1);
            j = Xe(Ge.N(), j.Vp)
        }
        m = Math.max(Xe(Ge.N(), h.Ut) - j, 0)
    }
    j = this.Qn = Math.max(d.g, m);this.bk = Math.round(this.Yf * h.$s + g + j);h = d.nc;c = c + this.Qn + this.bk;g = Q(this.getContext());h = h + this.og();
    if (Hg(this.M.A.a, h) && E(g.Y(), h + 1) == kg) this.bk += Math.max(0, this.Oz - c);this.z().style.height = this.bk + D;c = this.z();c.style.direction = this.Fd ? Wx : Xx;c.style.textAlign = this.Fd ? sf : $i;y.ia && this.J().Jh(this.Xf);this.gk = d;
    if (!(c = e)) c = !wv(this.getContext()).jF;c && Cy(this, a);this.Xf.style.paddingTop = j + D;e && this.uC(a);qr(mr.N(), yy, zy);
    return this.og() - b
};
var Ija = "_temp",
    Jja = "margin",
    Dy = "padding",
    Kja = "Should have a content element during redraw.";

function Cy(a, b) {
    if (a.gk) {
        a.Xf.innerHTML = a.gk.n;
        for (var c = a.gk.f, d = 0; d < c.length; d++) {
            var e = c[d];
            e.z() || e.F();
            var g = a.J(),
                h = g.z(bc(ib(e), Ija));
            g.Dt(e.z(), h);
            a.cb && !e.cb && e.ga()
        }
        var j = a.gk.a,
            m = a.gk.u;
        if (a.Xf) {
            c = a.g;
            d = c.g;
            e = a.Xf.childNodes;
            var o = a.oa(eh, b);
            g = m;
            h = 0;
            Ey(a, a.Xf, Jja, m + D);
            if (j) {
                h = d[0].zg;
                o = Qh(o);
                m = o - m < j ? yh(m + j) : o;h = h - m;Ey(a, e[0], Dy, h + D);g += j + h;h = 1
            }
            for (j = m = 0; j < d.length; j++) {
                g = d[j].zg - g;
                o = Q(a.getContext());
                if (E(o.a, m + b) == Jg) g += c.a[m].width;
                (m = e[j + h]) && Ey(a, m, Dy, Math.floor(g) + D);
                m = d[j].nc + 1;
                g = d[j].zj
            }
        } else pv(a.getContext()).log(Error(Kja));
        a.gk = k
    }
}
n.uC = function (a, b, c) {
    if (!(this.og() <= 0)) {
        var d = a + this.og() - 1;
        if (!(b && (d < b.start || a > b.end))) {
            b = new nb(a, d);
            d = Fy(this.getContext());
            c = c ? [c] : d.a.Ue();
            for (var e = 0; e < c.length; e++) {
                var g = c[e],
                    h = d.a.execute(g, b) || [],
                    j = this.n[g];
                if (j == k) {
                    j = [];
                    this.n[g] = j
                }
                for (var m = g = Og(j, h, kx), o = 0; o < m.length; o++) {
                    var q = m[o];
                    Gy(this, q);
                    q.G()
                }
                m = j;
                g = g;
                o = kx;
                for (q = 0; q < g.length; q++) Lc(m, g[q], o);
                for (g = 0; g < j.length; g++) j[g].Nt(h[g].Il());
                m = mc(j, r(this.I0, this, a));
                g = a;
                m = m;
                for (o = 0; o < m.length; o++) Gy(this, m[o]);
                Hy(this, g, m);
                h = Og(h, j, kx);
                Hy(this, a, h);
                j = j;
                h = h;
                g = kx;
                for (m = 0; m < h.length; m++) Kc(j, h[m], g)
            }
        }
    }
};

function Gy(a, b) {
    var c = b.Dj();
    if (c) for (var d = 0; d < c.length; d++) a.J().removeNode(c[d])
}
n.I0 = function (a, b) {
    var c = Iy(this, a, b.a, b.n);
    return !( !! b.Xn && Ic(b.Xn, c, mx))
};
var Lja = "kix-overlay",
    Jy = "kix-unprintable",
    Mja = "top: ",
    Nja = "px; left: ",
    Oja = "px; width: ",
    Ky = "px; height: ";

function Hy(a, b, c) {
    for (var d = 0; d < c.length; d++) {
        var e = c[d],
            g = Iy(a, b, e.a, e.n);
        e = e;
        g = g;
        var h = a.J();
        if (!(e.Ce && e.Xn && Ic(e.Xn, g, mx))) {
            e.Xn = g;
            if (!e.Ce) e.Ce = [];
            g = e.Sr();
            var j = g.length;
            if (e.Ce.length < j) for (var m = e.Ce.length; m < j; m++) {
                var o = e.uv(h);
                z.ba.add(o, Lja, Jy);
                e.Ce.push(o)
            } else if (e.Ce.length > j) e.Ce = Cc(e.Ce, 0, j);
            for (h = 0; h < e.Ce.length; h++) {
                j = e.Ce[h].style;
                m = j.cssText;
                o = g[h].Rc();
                var q = g[h].uf();
                j.cssText = m + bc(Mja, g[h].Wb(), Nja, g[h].Ic(), Oja, o, Ky, q, ly)
            }
        }
        e = e.Ce;
        for (g = 0; g < e.length; g++) a.J().appendChild(a.z(), e[g])
    }
}

function Iy(a, b, c, d) {
    var e = a.g,
        g = d ? a.Qn : 0;d = d ? a.Yf : a.bk;
    var h = c.start - b,
        j = c.end - b,
        m = e.g,
        o = e.f,
        q = m.length;
    if (q == 0) b = [new nx(0, 0, 0, 0)];
    else if (h > m[q - 1].nc) b = [new nx(m[q - 1].zj, g, 0, d)];
    else {
        for (var u = [], w = 0, C, B = 0; B < q; B++, w = C) {
            var H = m[B],
                I = H.zg;
            C = H.nc;
            if (!px(u, h, j, w, C, I, H.zj - I, g, d)) {
                w = B == q - 1 ? o.length : m[B + 1].a;I = I;
                for (var T = H.a; T < w; T++, I += H) {
                    var X = o[T];
                    H = X.width;
                    if (!px(u, h, j, X.a, X.nc, I, H, g, d)) if (X.f) {
                        var V = b + X.a,
                            ma = X.nc - X.a + 1;
                        ma = X.f.rK(new nb(Math.max(c.start - V, 0), Math.min(c.end - V, ma)));
                        for (V = 0; V < ma.length; ++V) {
                            X =
                            ma[V];
                            X.left += I;
                            X.top += 0
                        }
                        X = u;
                        V = ma;
                        ma = void 0;
                        ma = void 0;
                        if (V.length > 0) {
                            ma = V[0];
                            ox(X, ma.Ic(), ma.Rc(), ma.Wb(), ma.uf());
                            for (ma = 1; ma < V.length; ma++) X.push(V[ma])
                        }
                    } else {
                        var Ka = ma = 0;
                        for (V = X.a; V <= X.nc; V++) {
                            var xa = e.a[V].width;
                            if (V < h || V > j) {
                                if (V > j == X.g) ma += xa
                            } else Ka += xa
                        }
                        ox(u, I + ma, Ka, g, d)
                    }
                }
            }
        }
        b = u
    }
    if (!a.Fd) {
        b.reverse();
        for (c = b.length - 1; c >= 0; c--) {
            e = b[c];
            e.left = a.ck - e.left - e.width
        }
    }
    return b
}
var Pja = "Should have been able to place at least one spacer.";

function By(a, b, c, d, e, g, h, j, m, o) {
    var q = Q(a.getContext()),
        u = new N,
        w = [];
    a.cx();
    var C = new nb(c, c + d),
        B = Ly(a, b, b, C, u, w, i, j, m, o, i);
    Xa(B) && pv(a.getContext()).log(Error(Pja));
    if (C = Qja(a, C, e + g, h)) {
        tc(w);
        u.clear();
        a.cx();
        for (var H = b, I = C.f, T = l, X = 0; X < I.length; X++) {
            var V = Ly(a, H, b, I[X], u, w, l, j && !T, m, o);
            if (!Xa(V)) {
                H = V + 1;
                B = V;
                T = i
            }
            if (H > b && (H > Hu(q) || Hg(q.a, B))) break
        }
        if (!T) {
            tc(w);
            u.clear();
            return By(a, b, c, d, e, C.a - e + 1, h, j, m, o)
        }
    }
    return new Rja(g, B, u.toString(), w, c, o)
}

function Ly(a, b, c, d, e, g, h, j, m, o, q) {
    var u = a.oa(eh, b),
        w = [],
        C, B = new nb(d.start, d.end),
        H = Q(a.getContext());
    for (j = j;;) {
        if (j) {
            C = B;
            var I;
            I = B.start;
            var T = o || 0,
                X = Qh(u);
            I = X - I < T ? yh(I + T) : X;C.start = I;
            if (B.start >= B.end) break
        }
        if (b >= Bg(H.Y())) break;
        I = new N;
        C = my(a.u, b, c, B, I, a.Fd, h, 0, 0, j ? m : undefined);
        a.Yf = Math.max(a.Yf, C.height);
        a.aq = Math.max(a.aq, C.n);
        T = C.a;
        if (!C.u) break;
        if (!C.g && u.ii() == 3 && C.nc != Eg(H.Y(), b)) {
            T = C.Gy;
            X = B.end - B.start - (T.zj - T.zg);
            T = Math.floor(X / C.f);
            C = Math.max(Math.floor(X) % C.f - 1, 0);
            I.clear();
            C = my(a.u, b, c, B, e, a.Fd, h, T, C, j ? m : undefined);
            T = C.a
        }
        T.length > 0 && Bc(g, T);
        e.append(I);
        w.push(C);
        if (!C.g) break;
        h = l;
        b = C.nc + 1;
        B.start = C.Gy.zj;
        j = l
    }
    if (w.length == 0) if (q) {
        C = my(a.u, b, c, B, e, a.Fd, h, 0, 0, j ? m : undefined,
        i);
        C.a.length > 0 && Bc(g, C.a);
        a.Yf = Math.max(a.Yf, C.height);
        a.aq = Math.max(a.aq, C.n);
        w.push(C)
    } else return k;
    C = w[w.length - 1];
    a: {
        b = C.Gy.zj - d.start;
        switch (u.ii()) {
        case 1:
            d = (d.end - d.start - b) / 2;
            break a;
        case 2:
            d = d.end - d.start - b;
            break a;
        case 0:
        default:
            d = 0;
            break a
        }
    }
    a = a.g.g;
    for (u = 0; u < w.length; u++) {
        b = w[u].Gy;
        b.zg += d;
        b.zj += d;
        a.push(b)
    }
    return C.nc
}

function Qja(a, b, c, d) {
    for (var e = c + a.Yf, g = [], h = 0, j; j = d[h]; h++) if (!(j.top + j.height <= c)) {
        if (j.top > e) break;
        g.push(j)
    }
    if (g.length == 0) return k;
    Gc(g, function (q, u) {
        return Fc(q.left, u.left)
    });
    if (a.Fd) {
        c = b.start;
        b = b.end
    } else {
        c = a.ck - b.end;
        b = a.ck - b.start
    }
    d = [];
    e = Number.MAX_VALUE;
    j = g.length - 1;
    for (h = 0; h <= j; h++) {
        var m, o;
        if (a.Fd) {
            m = g[h];
            o = m.left
        } else {
            m = g[j - h];
            o = a.ck - m.left - m.width
        }
        c < o && d.push(new nb(c, o));
        c = Math.max(o + m.width, c);
        m = m.top + m.height;
        e = Math.min(e, m);
        a.Oz = Math.max(a.Oz, m)
    }
    c < b && d.push(new nb(c, b));
    return new Sja(d, e)
}
function Ey(a, b, c, d) {
    b.style[c + (a.Fd ? Pm : Rm)] = d;
    b.style[c + (a.Fd ? Rm : Pm)] = v
}

function My(a, b) {
    b = a.Fd ? b : a.ck - 1 - b;
    var c = a.g,
        d = c.g,
        e = d[0];
    if (!e) return k;
    if (b < e.zg || a.OH) return new P(0);
    for (var g = 0, h;; e = h) {
        h = d[++g];
        if (!(h && e.zg == e.zj)) if (!h || b < h.zg) break
    }
    c = c.f;d = e.zg;g = h ? h.a : c.length;
    for (var j = e.a; j < g; j++) {
        h = c[j];
        if (d + h.width > b) {
            if (!h.f) {
                a: {
                    e = b - d;
                    c = a.g;
                    d = void 0;
                    if (h.g) {
                        g = -1;
                        for (d = h.a; d <= h.nc; d++) g += c.a[d].width;
                        e = g - e
                    }
                    for (d = h.a; d <= h.nc; d++) {
                        g = c.a[d].width;
                        if (e < g / 2) {
                            h = new P(d);
                            break a
                        }
                        e -= g
                    }
                    h = new P(d, i)
                }
                return h
            }
            b -= d;
            a.Fd || (b = h.width - 1 - b);
            if ((e = h.f.Sb(b, 0)) && e.O() != 0) return e;
            return new P(h.a + (e ? e.a : 0))
        }
        d += h.width
    }
    return new P(e.nc + 1, i)
}
function Ny(a, b, c) {
    if (y.ia && c && b < c) return b;
    return 1.7 * b
}
function Oy(a, b) {
    var c = Py(Q(a.getContext()), ih, b),
        d = c.eg;
    return Ny(a, hi(c), d)
}
n.mK = function (a, b, c) {
    if (a.O() != 0) return k;
    var d = Zia(this.g, a.shift(-b));
    if (!d) return k;
    var e = d.Vy,
        g = d.x;
    d = this.Fd != (e ? e.g : l);
    if (e && e.f) {
        var h = e.f.CC(a, b + e.a, c);
        if (h) {
            this.Fd || (g += e.width - 1);
            h.a.x = Math.floor((this.Fd ? g : this.ck - 1 - g) + h.a.x);
            h.a.y += this.Qn;
            if (!c && h.height == k) h.height = Oy(this, a, b);
            if (h.f == k) h.f = d;
            return h
        }
    }
    e = Math.floor(this.Fd ? g : this.ck - 1 - g);
    g = this.Qn;
    var j = Py(Q(this.getContext()), ih, a),
        m = j.eg;
    h = this.aq;
    var o = Ny(this, m);
    m = Ny(this, hi(j), m);
    var q = this.Yf;
    j = j.po();
    if (o < q || j == ni) switch (j) {
    case gi:
    case oi:
        g += (h < q ? 4 : 0) + q - o - (y.ia ? h / o : 1.5 * h / o);
        break;
    case ni:
        g += q - m / 2 - 2;
        break
    }
    e = new bd(e, g);
    a = c ? k : Oy(this, a, b);
    return new hx(a, e, d)
};n.q = function () {
    wy.p.q.call(this);
    delete this.g;
    for (var a in this.n) for (var b = this.n[a], c = 0; c < b.length; c++) b[c].G();
    delete this.n;
    delete this.gk;
    this.Xf = k
};

function Sja(a, b) {
    this.f = a;
    this.a = b
}
function Rja(a, b, c, d, e, g) {
    this.g = a;
    this.nc = b;
    this.n = c;
    this.f = d;
    this.u = e;
    this.a = g || 0
}
var xy = new ix;

function Qy() {
    this.f = new bja
}
Qy.prototype.a = NaN;Qy.prototype.g = k;Qy.prototype.n = 0;Qy.prototype.qc = function () {
    return this.a
};

function oy(a, b) {
    b -= a.a;
    return b >= 0 && b < a.f.f ? tx(a.f, b, a.f.P) : NaN
}
function Tja(a, b, c) {
    this.g = a;
    this.f = b;
    this.a = c
}
var Uja = rx.N();

function Ry(a, b, c, d) {
    Ex.call(this, a, b, c);
    this.QE = d
}
s(Ry, Ex);

function ty(a, b) {
    this.n = a;
    this.g = b;
    this.a = 0
}
s(ty, Cx);
ty.prototype.f = function (a, b, c) {
    for (var d = this.n + b, e = this.g, g = this.a, h = g, j = e.length; h < j && e[h].f < d;) h++;
    d = g == 0 && h == j ? e : e.slice(g, h);this.a = h;
    return new Ry(a, b, c, d)
};

function Sy() {
    this.a = new Qy
};

function Vja(a, b, c) {
    this.tM = a;
    this.offsetLeft = b;
    this.offsetTop = c
};

function Ty(a, b, c, d) {
    this.n = a;
    this.a = b || [];
    this.g = c || k;
    this.f = d || k
}
s(Ty, t);Ty.prototype.O = function () {
    return this.n
};

function Uy(a) {
    return a.a
}
Ty.prototype.Z = function () {
    var a = {};
    a.stsl_type = this.n;
    if (this.g) {
        a.stsl_leading = this.g.Z();
        a.stsl_leadingType = this.g.O()
    }
    if (this.f) {
        a.stsl_trailing = this.f.Z();
        a.stsl_trailingType = this.f.O()
    }
    var b = [];
    Pg(this.a, function (c, d) {
        b[c] = d.Z();
        return l
    });
    a.stsl_styles = b;
    return a
};

function Vy(a, b) {
    var c = b.stsl_type,
        d = b.stsl_leadingType,
        e = k;
    if (d) {
        e = rh(d);
        e.update(b.stsl_leading)
    }
    d = b.stsl_trailingType;
    var g = k;
    if (d) {
        g = rh(d);
        g.update(b.stsl_trailing)
    }
    var h = [];
    Pg(b.stsl_styles, function (j, m) {
        if (m) {
            var o = rh(c);
            o.update(m);
            h[j] = o
        }
        return l
    });
    return new Ty(c, h, e, g)
}
Ty.prototype.q = function () {
    Ty.p.q.call(this);
    this.a && Pg(this.a, function (a, b) {
        b.G();
        return l
    });
    delete this.a;
    this.g && this.g.G();
    delete this.g;
    this.f && this.f.G();
    delete this.f
};

function Wy(a, b, c, d, e, g) {
    this.K = a;
    this.g = b;
    this.u = c || [];
    this.f = d || {};
    this.a = e || {};
    this.n = g || {}
}
s(Wy, t);Wy.prototype.Y = function () {
    return this.K
};

function Xy(a, b) {
    for (var c = a.g, d = 0; d < c.length; d++) if (c[d].O() == b) return c[d];
    c = a.u;
    for (d = 0; d < c.length; d++) if (c[d].O() == b) return c[d];
    return k
}
Wy.prototype.Z = function () {
    var a = {};
    a.dsl_spacers = this.Y();
    var b = [];
    Pg(this.g, function (h, j) {
        b[h] = j.Z();
        return l
    });
    a.dsl_styleslices = b;
    var c = [];
    Pg(this.u, function (h, j) {
        c[h] = j.Z();
        return l
    });
    a.dsl_metastyleslices = c;
    a.dsl_entitypositionmap = this.f;
    var d = {},
        e = {};
    for (var g in this.a) {
        d[g] = this.a[g].Z();
        e[g] = this.a[g].O()
    }
    a.dsl_entitymap = d;
    a.dsl_entitytypemap = e;
    d = {};
    for (g in this.n) d[g] = this.n[g].Z();
    a.dsl_relateddocslices = d;
    return a
};
Wy.prototype.q = function () {
    Wy.p.q.call(this);
    for (var a = 0; a < this.g.length; a++) this.g[a].G();
    delete this.g;
    delete this.f;
    for (var b in this.a) this.a[b].G();
    delete this.a
};

function Yy(a, b, c) {
    var d = a.Y();
    c = p(c) ? c : d.length - 1;
    if (b == c) return new Wy(v, []);d = d.substring(b, c + 1);
    var e = Zy(a.g, b, c),
        g = Zy(a.u, b, c),
        h = a.f,
        j = {};
    for (var m in h) {
        var o = m;
        j[o] = h[o].slice(b, c + 1)
    }
    var q = {},
        u = a.a;
    for (o in j) Pg(j[o], function (w, C) {
        for (var B = 0, H; H = C[B]; B++) q[H] = u[H];
        return l
    });a = yb(a.n);
    return new Wy(d, e, g, j, q, a)
}

function Zy(a, b, c) {
    for (var d = [], e = 0, g; g = a[e]; e++) {
        var h = g.a.slice(b, c + 1);
        d.push(new Ty(g.O(), h))
    }
    return d
}
function $y(a) {
    for (var b = [], c = a.g, d = 0, e; e = c[d]; ++d) b.push(new Ty(e.O(), undefined, e.g));
    b = new Wy(v, b);
    return az(a, b, 0, i)
}

function az(a, b, c, d) {
    var e = a.Y(),
        g = b.Y(),
        h = g.length,
        j = e.length;
    e = bc(e.substr(0, c), g, e.substr(c));
    g = bz(a.g, b.g, c, j, h, d);
    j = bz(a.u, b.u, c, j, h, d);
    c = Wja(a.f, b.f, c, h);
    h = yb(a.a);
    var m = b.a;
    for (var o in m) h[o] = m[o];
    if (d) for (o in h) {
        m = h[o];
        h[o] = mt(m.O(), o, m.Z())
    }
    a = yb(a.n);
    b = b.n;
    for (o in b) a[o] = b[o];
    if (d) for (o in a) a[o] = $y(a[o]);
    return new Wy(e, g, j, c, h, a)
}

function Wja(a, b, c, d) {
    var e = new Xc;
    Yc(e, tb(a));
    Yc(e, tb(b));
    var g = {};
    e = e.Qb();
    for (var h = 0, j; j = e[h]; h++) {
        var m = [],
            o = a[j];
        o && Pg(o, function (C) {
            var B = C >= c ? C + d : C;
            if (o[C]) m[B] = Ac(o[C]);
            return l
        });
        for (var q = Qg(b[j]), u = 0; u < q.length; u++) {
            var w = q[u];
            m[w + c] = Ac(b[j][w])
        }
        g[j] = m
    }
    return g
}

function bz(a, b, c, d, e, g) {
    for (var h = {}, j = {}, m = {}, o = 0, q; q = a[o]; o++) {
        var u = q.O();
        h[u] = [];
        Pg(q.a, function (C, B) {
            h[u][C >= c ? C + e : C] = g ? B.sa() : B;
            return l
        });
        if (c == 0) {
            if (q = q.f) m[u] = g ? q.sa() : q
        } else if (c == d) if (q = q.g) j[u] = g ? q.sa() : q
    }
    for (o = 0; a = b[o]; o++) {
        u = a.O();
        h[u] = h[u] || {};
        q = Rg(a.a, 0, c);
        for (var w in q) h[u][w] = g ? q[w].sa() : q[w];
        if (c == 0) {
            if (q = a.g) j[u] = g ? q.sa() : q
        } else if (c == d) if (q = a.f) m[u] = g ? q.sa() : q
    }
    b = [];
    for (w in h) {
        d = w;
        b.push(new Ty(d, h[d], j[d], m[d]))
    }
    return b
}

function cz(a) {
    var b = a.dsl_spacers,
        c = [];
    Pg(a.dsl_styleslices, function (m, o) {
        c[m] = Vy(Ty.prototype, o);
        return l
    });
    var d = [];
    Pg(a.dsl_metastyleslices, function (m, o) {
        d[m] = Vy(Ty.prototype, o);
        return l
    });
    var e = a.dsl_entitypositionmap,
        g = a.dsl_entitymap,
        h = a.dsl_entitytypemap;
    for (var j in g) g[j] = mt(h[j], j, g[j]);
    a = a.dsl_relateddocslices;
    for (j in a) a[j] = cz(a[j]);
    return new Wy(b, c, d, e, g, a)
};

function dz(a, b) {
    this.A = a;
    this.a = new ez;
    this.f = new ez;
    this.wc = [];
    this.sj = [];
    this.V = b
}
s(dz, t);n = dz.prototype;n.wk = k;
var Xja = "Calling insertDelta with invalid parameters - index:",
    Yja = " delta:";

function fz(a, b, c) {
    if (b < 0 || c <= 0) a.V.log(Error(Xja + b + Yja + c));
    else {
        a.f.shift(b, c);
        gz(a, b, c);
        a.wk = k;
        a.a.shift(b, c) || a.a.add(b, b + c - 1)
    }
}
var Zja = "Calling redrawRange with an invalid range: [",
    hz = ", ";

function iz(a, b, c) {
    b < 0 || c < 0 || c < b ? a.V.log(Error(Zja + b + hz + c + Mg)) : a.f.add(b, c)
}
var $ja = "Calling deleteSpacers with invalid params: startIndex =",
    aka = ", number of spacers = ";

function jz(a, b, c) {
    var d = c.Y().length;
    if (b < 0 || d == 0) a.V.log(Error($ja + b + aka + d));
    else {
        var e = b + d - 1;
        a.wk = k;
        a.f.remove(b, e);
        for (var g = a.a.remove(b, e), h = 0; h < g.length; h++) {
            var j = g[h].end - b,
                m = Yy(c, 0, g[h].start - b - 1);
            c = Yy(c, j + 1);
            c = az(c, m, 0, void 0)
        }
        c = c;
        j = Qg(a.sj);
        h = [];
        for (g = 0; g < j.length; g++) {
            m = j[g];
            if (m > e) break;
            m >= b && m <= e && h.push(m)
        }
        if (h.length == 0) g = c;
        else {
            c = new kz(c);
            for (g = 0; m = h[g]; g++) {
                j = 0;
                for (var o; o = a.sj[m][j]; j++) {
                    var q = c,
                        u = m - b;
                    o = o;
                    var w = o.ma(),
                        C = o.O(),
                        B = q.f[C];
                    B || (B = q.f[C] = []);
                    (C = B[u]) || (C = B[u] = []);
                    C.push(w);
                    q.a[w] = o
                }
                delete a.sj[m]
            }
            g = c
        }
        m = 0;
        c = Qg(a.wc);
        for (h = 0; h < c.length; h++) {
            j = c[h];
            if (j >= b && j <= e + 1) {
                q = a.wc[j];
                g = az(g, q, j - b + m);
                m += q.Y().length;
                delete a.wc[j]
            }
            if (j > e) break
        }
        if (g.Y().length > 0) a.wc[b] = g;
        else delete a.wc[b];
        gz(a, b + 1, -d)
    }
}
function lz(a, b, c) {
    var d = a.sj[b];
    d || (d = a.sj[b] = []);
    (a = mt(c.O(), c.ma(), c.Z())) && d.push(a)
}
function gz(a, b, c) {
    var d = [];
    Pg(a.wc, function (g) {
        d[g > b ? g + c : g] = this.wc[g];
        return l
    }, a);
    a.wc = d;
    var e = [];
    Pg(a.sj, function (g) {
        e[g > b ? g + c : g] = this.sj[g];
        return l
    }, a);
    a.sj = e
}

function mz(a) {
    return a.wk || (a.wk = Qg(a.wc))
}
function nz(a) {
    return oz(a, a.vf())
}
var pz = "range";

function oz(a, b) {
    switch (b) {
    case pz:
        return qz(a.f).start;
    case Zf:
        return qz(a.a).start;
    case Yf:
        return mz(a)[0];
    default:
        return -1
    }
}
n.vf = function () {
    var a = qz(this.f),
        b = qz(this.a),
        c = mz(this)[0];
    if (a && (!b || a.start < b.start) && (!p(c) || a.start < c)) return pz;
    if (b && (!p(c) || b.start < c)) return Zf;
    if (p(c)) return Yf;
    return Hf
};

function rz(a, b) {
    var c = a.wc[b];
    return c ? c.Y() : v
}

function sz(a, b, c, d) {
    d && a.Lc(d);
    d = tz(a, b);
    uz(a, b - 1, c, [], d)
}
function tz(a, b) {
    for (var c = [], d = mz(a), e = 0; e < d.length; e++) {
        var g = d[e];
        if (g <= b) {
            c[g] = a.wc[g];
            delete a.wc[g];
            a.wk = k
        }
    }
    return c
}
function vz(a, b, c, d) {
    d && a.Lc(d);
    wz(a.f, b);
    d = wz(a.a, b);
    var e = tz(a, b);
    uz(a, b, c, d, e)
}
n.Lc = function () {};
n.Zv = function (a, b) {
    var c = Cc(arguments, 2);
    wc(c, 0, 0, k);
    wc(c, 0, 0, k);
    for (var d = this.vf(), e = oz(this, d); d != Hf;) {
        c[0] = e;
        c[1] = d;
        var g = e,
            h = d,
            j = h == Yf ? rz(this, g).length : 0;
        if (a.apply(b, c)) return;d = this.vf();e = oz(this, d);
        if (e == g && d == h && (d != Yf || j == rz(this, e).length)) switch (this.vf()) {
        case Zf:
            vz(this, nz(this), 1);
            break;
        case Yf:
            sz(this, nz(this), -1);
            break;
        case pz:
            vz(this, nz(this), 0);
            break
        }
    }
};

function uz(a, b, c, d, e) {
    for (var g = 0, h = 0, j; j = d[h]; h++) g += j.end - j.start + 1;
    Pg(e, function (m, o) {
        g -= o.Y().length;
        return l
    });
    c = g - c;
    if (c > 0) bka(a, b, c);
    else c < 0 && cka(a, b, c, d, e)
}

function bka(a, b, c) {
    for (b = b + 1; c > 0;) {
        var d;
        a: {
            d = 0;
            for (var e = void 0; e = a.a.a[d]; d++) if (e.end >= b) {
                d = e;
                break a
            }
            d = k
        }
        var g = d ? Math.max(d.start, b) : Number.MAX_VALUE,
            h = b;e = mz(a);h = Ec(e, h);
        if (h < 0) h = -h - 1;e = (h < e.length ? e[h] : k) || Number.MAX_VALUE;g = Math.min(g, e);
        if (b < g) {
            d = Math.min(c, g - b);
            a.a.add(b, b + d - 1);
            c -= d;
            b = g
        } else if (g == e) {
            d = a.wc[e];
            g = Yy(d, c);
            h = g.Y().length;
            if (h > 0) a.wc[e] = g;
            else delete a.wc[e];
            a.wk = k;
            c -= d.Y().length - h
        } else b = Math.min(e, d.end + 1)
    }
}

function cka(a, b, c, d, e) {
    var g = b;
    c = Math.abs(c);
    for (var h = Qg(e), j = k, m = -1; c > 0;) {
        j || (j = d.pop());
        var o = j ? Math.min(j.end, g) : -1;
        if (m < 0 && h.length > 0) m = h.pop() - 1;
        var q = Math.max(o, m);
        if (g > q) {
            g = xz(a.A, g - Math.min(c, g - q) + 1, g);
            o = a.wc[b + 1];
            a.wc[b + 1] = o ? az(o, g, 0) : g;a.wk = k;c -= g.Y().length;g = q
        } else if (q == m) {
            m = e[m + 1];
            m = Yy(m, m.Y().length - c);
            o = a.wc[b + 1];
            a.wc[b + 1] = o ? az(o, m, 0) : m;a.wk = k;c -= m.Y().length;m = -1
        } else {
            g = Math.max(m, j.start - 1);
            if (g < j.start) j = k
        }
    }
}
n.clear = function () {
    wz(this.a, Number.MAX_VALUE);
    wz(this.f, Number.MAX_VALUE);
    this.wc.length = 0
};n.q = function () {
    dz.p.q.call(this);
    this.a.G();
    delete this.a;
    this.f.G();
    delete this.f;
    delete this.wc
};

function ez() {
    this.a = []
}
s(ez, t);n = ez.prototype;n.eq = function () {
    return this.a
};

function qz(a) {
    return a.a[0] || k
}
function wz(a, b) {
    for (var c = [], d = a.a[0]; d && d.end <= b;) {
        c.push(a.a.shift());
        d = a.a[0]
    }
    if (d && d.start <= b) {
        c.push(new nb(d.start, b));
        d.start = b + 1
    }
    return c
}
n.add = function (a, b) {
    for (var c = new nb(a, b), d = l, e = [], g = 0; g < this.a.length; g++) {
        var h = this.a[g];
        if (Math.max(c.start, h.start) > Math.min(c.end, h.end) + 1) {
            if (!d && c.end < h.start) {
                e.push(c);
                d = i
            }
            e.push(h)
        } else {
            if (!(c.start <= h.start && c.end >= h.end)) {
                c.start = Math.min(c.start, h.start);
                c.end = Math.max(c.end, h.end)
            }
            if (!d) {
                e.push(c);
                d = i
            }
        }
    }
    d || e.push(c);
    this.a = e
};
n.shift = function (a, b) {
    if (b <= 0) return l;
    for (var c = l, d = 0; d < this.a.length; d++) {
        var e = this.a[d];
        if (a <= e.start) {
            e.start += b;
            e.end += b
        } else if (a <= e.end + 1) {
            e.end += b;
            c = i
        }
    }
    return c
};
n.remove = function (a, b) {
    for (var c = [], d = b - a + 1, e = [], g = 0; g < this.a.length; g++) {
        var h = this.a[g];
        if (h.end < a) c.push(h);
        else if (h.start > b) {
            h.start -= d;
            h.end -= d;
            c.push(h)
        } else if (h.start == a && h.end == b) e.push(new nb(a, b));
        else if (h.start <= a && h.end >= b) {
            e.push(new nb(a, b));
            h.end -= d;
            c.push(h)
        } else if (pb(h, a)) {
            e.push(new nb(a, h.end));
            h.end = a - 1;
            c.push(h)
        } else {
            if (pb(h, b)) {
                e.push(new nb(h.start, b));
                var j = hc(c),
                    m = h.end - b;
                if (j && j.end == a - 1) j.end += m;
                else {
                    h.start = a;
                    h.end = h.start + m - 1;
                    c.push(h)
                }
            }
            e.push(new nb(h.start, h.end))
        }
    }
    this.a =
    c;
    return e
};n.q = function () {
    ez.p.q.call(this);
    delete this.a
};

function kz(a) {
    Wy.call(this, a.Y(), a.g, a.u, a.f, a.a, a.n)
}
s(kz, Wy);

function yz(a, b, c) {
    iv.call(this, a, c);
    this.n = b;
    this.P = new nb(0, 0);
    this.a = [];
    this.f = new $w(r(this.d1, this));
    this.g = new $w(r(this.b1, this));
    this.aa = a.n ? new Zw(a.n) : new Yw
}
s(yz, ex);
var dka = y.ia && !y.Xb(7);n = yz.prototype;n.sA = function (a, b) {
    return b >= Hu(a) || b == Ju(a, b)
};n.TL = 0;n.UL = 0;n.Xj = 0;n.dx = 0;n.ym = 0;n.Qs = 0;n.vC = 0;n.j2 = k;n.d0 = 0;n.iy = 0;n.gy = 0;n.sn = k;n.MD = 0;n.yE = l;
var eka = "Attempted to set invalid width: ";

function zz(a, b) {
    if (b != a.n) b < 1 ? pv(a.getContext()).log(Error(eka + b)) : Az(a, b, a.ym, a.UL, a.Qs, a.TL)
}
n.Rc = function () {
    return this.n
};

function Bz(a) {
    return a.n - a.Xj - a.dx
}
function Cz(a, b, c, d, e) {
    if (p(c)) a.UL = c;
    if (p(e)) a.TL = e;
    Az(a, a.n, p(b) ? b : a.ym,
    p(c) ? c : a.dx,
    p(d) ? d : a.Qs,
    p(e) ? e : a.Xj)
}

function Az(a, b, c, d, e, g) {
    for (; b - g - d < 1 && g + d > 0;) {
        d = Math.max(0, d - 1);
        g = Math.max(0, g - 1)
    }
    if (c != a.ym) {
        a.db().style.paddingTop = c + D;
        a.ym = c
    }
    if (e != a.Qs) {
        a.db().style.paddingBottom = e + D;
        a.Qs = e
    }
    c = l;
    if (g != a.Xj) {
        a.db().style.paddingLeft = g + D;
        a.Xj = g;
        c = i
    }
    if (d != a.dx) {
        a.db().style.paddingRight = d + D;
        a.dx = d;
        c = i
    }
    if (b != a.n || c) {
        a.n = b;
        a.db().style.width = Bz(a) + D
    }
}
n.tc = function () {
    return this.f.ea(this.a.length)
};
var fka = "Provider asked for index past the end of the plugins array.";
n.d1 = function (a, b) {
    if (a < 0) return 0;
    if (a >= this.a.length) {
        pv(this.getContext()).log(Error(fka));
        return b + 1
    }
    return b + this.a[a].og()
};n.b1 = function (a) {
    if (a < 0) {
        this.aa.add(this.ym);
        return this.ym
    }
    if (a >= this.a.length) return Number.MAX_VALUE;
    this.aa.add(this.a[a].xm());
    return this.aa.g(a + 1)
};

function Dz(a, b) {
    bx(a.g, b);
    a.aa.n(b)
}
n.ga = function () {
    yz.p.ga.call(this);
    var a = new Sy;
    a = new wy(this.getContext(), a, this.J());
    this.a[0] = a;
    this.fj(a, 0, i)
};
var gka = "kix-boxview-content",
    hka = "kix-boxview";
n.F = function () {
    var a = this.Xf = this.tv();
    z.ba.add(a, gka);
    this.sb(this.J().F(sd, hka, a))
};
var Ez = "width: ";n.tv = function () {
    return this.J().F(sd, {
        style: Ez + Bz(this) + ly
    })
};n.db = function () {
    return this.Xf
};

function Fz(a, b, c) {
    if (c < a.a.length) {
        a.ya(b);
        b.QD(a.a[c].z())
    } else a.ya(b, i);
    bx(a.f, c);
    Dz(a, c);
    wc(a.a, c, 0, b)
}
var ika = "Should never remove the first paragraph.";

function Gz(a, b, c) {
    if (a.a.length <= 1) pv(a.getContext()).log(Error(ika));
    else {
        var d = a.a[b];
        Hz(a, c, b, -d.xm());
        sz(Iz(a.getContext()), c.f + a.f.ea(b), -d.og());
        if (a.a.length == 1) d.cx();
        else {
            bx(a.f, b);
            Dz(a, b);
            yc(a.a, b);
            a.removeChild(d, i);
            d.G()
        }
    }
}
function Hz(a, b, c, d) {
    if (!(d == 0 || b.g.length == 0)) {
        var e = l,
            g = a.g.ea(c);
        c = c;
        for (var h, j; h = a.a[c], j = a.a[c + 1]; c++) {
            g += h.xm();
            if (h.a != j.a) {
                e = i;
                break
            }
        }
        if (e) {
            a = g;
            a -= d;
            for (e = 0; g = b.g[e]; e++) if (g.top >= a) g.top += d
        }
    }
}
var jka = "Missing positioned embedded object view.";

function Jz(a, b, c) {
    var d = a.a[b],
        e = c.f + a.f.ea(b),
        g = d.xm(),
        h = Q(a.getContext()),
        j = Kz(Lz(a.getContext()));
    if (b <= 0 || a.a[b].a != a.a[b - 1].a) for (var m = Mz(h, e), o = 0; o < m.length; o++) {
        var q = m[o],
            u = j[q];
        if (u) {
            if (!u.cb || u.zm != d) {
                u = a;
                q = h.Pa(q);
                var w = d,
                    C = c.g,
                    B = Kz(Lz(u.getContext()))[q.ma()];
                B.z() || B.F();
                B.z().style.position = zf;
                jv(B, Xe(Ge.N(), q.qt), Xe(Ge.N(), q.rt));
                B.cb ? u.J().appendChild(w.z(), B.z()) : B.Ja(w.z());B.zm = w;Nz(u, B, C)
            }
        } else pv(a.getContext()).log(Error(jka))
    }
    j = d.a.a;
    if (a.yE) {
        if (j.g != a.MD) {
            m = a.MD;
            q = h.Y();
            o = Cg(q, e);
            w = Eg(q, e) + 1;
            u = h.oa(eh, o).f;
            j.g = k;
            j.a = NaN;
            if (w >= o) {
                q = new Tja(q, o, w - o);
                j.n = u ? 0 : 1;u = j.f;w = j.n;
                if (w < 0 || w > 61) w = 126 | w & 1;u.f = q.a;u.u = w;u.M = 0;u.K = 1;u.n = [];u.g = [];u.xa = [];u.aa = (w & 126) == 126 ? w : 0;
                if (u.f) {
                    w = 0;
                    var H;
                    C = u.a = 0;
                    B = (u.u & 126) == 126;
                    var I = 0,
                        T, X;
                    if (X = B) T = C = u.u & 1 ? 64 : 0;
                    else T = 0;
                    for (w = 0; w < u.f;) {
                        H = sx(Uja, E(q.g, q.f + w));
                        u.a |= 1 << H;
                        u.n[w++] = H | T;
                        if (X) {
                            if (H == 0) {
                                X = l;
                                if (T != 0) {
                                    T = 0;
                                    for (H = I; H < w; H++) u.n[H] &= -65
                                }
                                continue
                            }
                            if (H == 1 || H == 13) {
                                X = l;
                                if (T == 0) {
                                    T = 64;
                                    for (H = I; H < w; H++) u.n[H] |= 64
                                }
                                continue
                            }
                        }
                        if (H == 7) if (w < u.f) {
                            u.K++;
                            if (X = B) {
                                I = w;
                                T = C
                            }
                        }
                    }
                    if (B) u.u = ux(u, 0);u.a |= wx[u.u & 1];u.P = u.f;u.xa[u.K - 1] = u.f;q = 0;w = ux(u, 0);C = 0;B = xx(u);
                    if (!(B != 2 && u.K == 1)) if (u.K == 1 && !(u.a & 120832)) for (q = 0; q < u.f; ++q) u.g[q] = w;
                    else {
                        I = w;
                        X = 0;
                        H = [];
                        var V = 0,
                            ma = 0;
                        for (q = u.a = 0; q < u.f; ++q) {
                            B = u.n[q] & -65;
                            switch (B) {
                            case 11:
                            case 12:
                                T = I + 2 & -130;
                                if (T <= 61) {
                                    H[X++] = I;
                                    I = T;
                                    if (B == 12) I |= 128
                                } else if ((I & -129) == 61)++ma;
                                else++V;
                                u.a |= 262144;
                                break;
                            case 14:
                            case 15:
                                T = (I & -129) + 1 | 1;
                                if (T <= 61) {
                                    H[X++] = I;
                                    I = T;
                                    if (B == 15) I |= 128
                                } else++ma;
                                u.a |= 262144;
                                break;
                            case 16:
                                if (ma > 0)--ma;
                                else if (V > 0 && (I & -129) != 61)--V;
                                else if (X > 0) {
                                    --X;
                                    I = H[X]
                                }
                                u.a |= 262144;
                                break;
                            case 7:
                                ma = V = X = 0;
                                w = ux(u, q);
                                if (q + 1 < u.f) {
                                    I = ux(u, q + 1);
                                    u.xa[C++] = q + 1
                                }
                                u.a |= 128;
                                break;
                            case 18:
                                u.a |= 262144;
                                break;
                            default:
                                if (w != I) {
                                    w = I;
                                    u.a |= (w & 128) != 0 ? dja[w & 1] | -2147483648 : cja[w & 1] | -2147483648
                                }
                                if ((w & 128) == 0) u.a |= 1 << B;
                                break
                            }
                            u.g[q] = w
                        }
                        if ((u.a & 516056) != 0) u.a |= wx[u.u & 1];
                        B = xx(u)
                    }
                    u.M = B;
                    switch (u.M) {
                    case 0:
                        u.P = 0;
                        break;
                    case 1:
                        u.P = 0;
                        break;
                    default:
                        if (u.K <= 1 && (u.a & -2147483648) == 0) Ax(u, 0, u.f, ux(u, 0) & 1, ux(u, u.f - 1) & 1);
                        else {
                            w = 0;
                            C = ux(u, 0);
                            B = u.g[0];
                            T = C < B ? B & 1 : C & 1;do {
                                q = w;
                                C = B;
                                for (I =
                                q > 0 && (u.n[q - 1] & -65) == 7 ? ux(u, q) & 1 : T;++w < u.f && u.g[w] == C;);
                                B = w < u.f ? u.g[w] : ux(u, u.f - 1);T = (C & -129) < (B & -129) ? B & 1 : C & 1;
                                if ((C & 128) == 0) Ax(u, q, w, I, T);
                                else {
                                    do u.g[q++] &= -129;
                                    while (q < w)
                                }
                            }
                            while (w < u.f)
                        }
                        if ((u.a & 383872) != 0) for (q = u.P; q > 0;) {
                            for (; q > 0;) {
                                w = vx(u.n[--q]);
                                if (!(w & 383872)) break;
                                u.g[q] = ux(u, q)
                            }
                            for (; q > 0;) {
                                w = vx(u.n[--q]);
                                if ((w & 382976) != 0) u.g[q] = u.g[q + 1];
                                else if ((w & 384) != 0) {
                                    u.g[q] = ux(u, q);
                                    break
                                }
                            }
                        }
                    }
                } else {
                    if ((w & 126) == 126) u.u &= 1;
                    if (u.u & 1) {
                        u.a = 2;
                        u.M = 1
                    } else {
                        u.a = 1;
                        u.M = 0
                    }
                    u.K = 0
                }
                j.a = o;j.g = m == undefined ? k : m
            }
        }
    } else {
        j.g = k;
        j.a = NaN
    }
    j = a.g.ea(b);
    m = a.Wb() + a.g.ea(b + 1) < a.P.start ? 0 : a.Wb() + a.g.ea(b) > a.P.end ? 2 : 1;o = d.Rb(e, Bz(a), j, c.g, m == 1);q = a.f;u = b + 1;
    if (!(!o || u >= q.a.length)) {
        q = q.f;
        if (q.length == 0) q[0] = {
            index: u,
            lk: o
        };
        else {
            w = Ec(q, u, Wia);
            if (w >= 0) q[w].lk += o;
            else q.splice(-(w + 1), 0, {
                index: u,
                lk: o
            })
        }
    }
    a.d0++;e = e + d.og() - 1;vz(Iz(a.getContext()), e, o, m);
    if (g = d.xm() - g) {
        Dz(a, b);
        Hz(a, c, b, g)
    }
    a = j + d.xm();c.n = a;
    return Hg(h.a, e)
}
n.Rb = function (a, b) {
    var c = Oz(Q(this.getContext()));
    if (Za(c)) this.yE = c;
    else {
        c = wv(this.getContext());
        this.yE = c.Ig && (c.xa || c.JD)
    }
    this.MD++;
    this.sn = k;
    c = b || [];
    Iz(this.getContext()).Zv(this.rZ, this, a, c)
};
var kka = "nextRedrawIndex: ",
    lka = " is before start of spacerIndex: ",
    mka = "A paragraph redraw was triggered at the end of the document.";
n.rZ = function (a, b, c, d) {
    if (a < c) {
        pv(this.getContext()).log(Error(kka + a + lka + c));
        return i
    }
    if (a > c + this.tc()) return i;
    b = this.f.indexOf(a - c);
    b = Math.min(b, this.a.length - 1);
    c = new fx(c, b, d);
    d = Iz(this.getContext());
    a: {
        a = c.a;
        b = a - 1;
        a = this.a[a];
        var e = this.a[b];
        if (e && e.O() == 0) if (Jz(this, b, c) && e.a == a.a) {
            c.a = b;
            break a
        }
        Pz(this, c)
    }
    for (;;) {
        b = this.f.ea(c.a + 1) + c.f;
        if (gx(c) && nz(d) != b) break;
        b = d.vf();
        if (b == Hf) return i;
        if (b == Yf) {
            if (c.a >= this.a.length - 1) a = l;
            else {
                a = c.a + 1;
                Qz(this, a, this.a[a].a, c);
                a = i
            }
            if (a) continue
        }
        a = c.f + this.f.ea(c.a + 1) - 1;
        if (this.sA.call(this, Q(this.getContext()), a)) {
            d = c.a + 1;
            for (c = c; this.a[d];) Gz(this, d, c);
            return i
        }
        if (b == Zf) Rz(this, c);
        else {
            c.a++;
            if (c.a >= this.a.length) {
                pv(this.getContext()).log(Error(mka));
                break
            }
            Pz(this, c)
        }
    }
    return l
};

function Rz(a, b) {
    var c = b.f + a.f.ea(b.a + 1),
        d = E(Q(a.getContext()).Y(), c);
    if (Sz.Ad(d)) {
        d = Sz.execute(d, a.getContext(), c, a.J());
        var e = new cx(a.getContext(), d, new Sy, a.J()),
            g = b.a + 1;
        Fz(a, e, g);
        d.Lc(c, a.iy - a.g.ea(g), a.gy);
        d.Rb(c);
        b.a++
    } else {
        c = Iz(a.getContext());
        for (d = new Sy;;) {
            if (c.vf() != Zf) break;
            b.a++;
            e = a;
            g = d;
            var h = b.a;
            Fz(e, new wy(e.getContext(), g, e.J()), h);
            if (Jz(a, b.a, b)) break
        }
    }
}

function Pz(a, b) {
    var c = Iz(a.getContext()),
        d = nz(c),
        e = a.a[b.a],
        g = a.f.ea(b.a);
    switch (c.vf()) {
    case Hf:
        return;
    case Yf:
        var h = rz(c, d).charAt(0);
        if (d == g && rz(c, d).length >= e.og() && Sz.Ad(h)) {
            Qz(a, b.a, e.a, b);
            return
        }
        break;
    case Zf:
        c = E(Q(a.getContext()).Y(), d);
        if (d == g && Sz.Ad(c)) {
            b.a > 0 && b.a--;
            Rz(a, b);
            return
        }
        break
    }
    if (e.O() == 1) {
        d = b.a;
        bx(a.f, d);
        Dz(a, d);
        e.f.Rb(b.f + g)
    } else {
        e = b.a;
        for (g = a.a[e].a;;) {
            if (Jz(a, e, b)) {
                Qz(a, e + 1, g, b);
                break
            }
            d = nz(Iz(a.getContext()));
            if (gx(b) && d != a.f.ea(e + 1) + b.f) break;
            d = a.a[e + 1];
            if (!d || d.a != g) {
                d =
                a;
                c = g;
                h = e + 1;
                Fz(d, new wy(d.getContext(), c, d.J()), h)
            }
            e++
        }
        b.a = e
    }
}
function Qz(a, b, c, d) {
    for (var e; e = a.a[b];) {
        if (e.a != c) return;
        Gz(a, b, d)
    }
}
function Nz(a, b, c) {
    var d = b.zm;
    if (d) {
        a = b.Wb() + Tz(a, d);
        d = b.rg();
        Kc(c, new mf(b.Ic(), a, d.width, d.height), function (e, g) {
            return Fc(e.top, g.top)
        })
    }
}
n.pg = function (a, b, c) {
    Uz(this, a, b, c, i)
};

function Uz(a, b, c, d, e) {
    for (var g = a.sn || (a.sn = Vz(a)), h = g.Kr; h < g.Kr + g.Vz; h++) {
        var j = a.a[h];
        if (e || j.O() != 1) j.uC(b + a.f.ea(h), c, d)
    }
}
n.Gf = function (a, b, c) {
    switch (a.O()) {
    case 0:
        var d = Wz(this, a.shift(-b)),
            e = this.a[d];
        if (!e) return k;
        var g = this.f.ea(d);
        a = e.mK(a, b + g, c);
        if (!a) return k;
        a.a.x += this.Xj;
        a.a.y += this.g.ea(d);
        return a;
    case 1:
        a = Kz(Lz(this.getContext()))[a.ma()];
        d = a.Ic() + 2 + this.Xj;
        a = a.Wb() + 2 + Tz(this, a.zm);
        return a = new hx(k, new bd(d, a), i)
    }
    return k
};

function Xz(a, b, c, d) {
    var e = Q(a.getContext()),
        g = Yz(e),
        h = Kz(Lz(a.getContext())),
        j = h[b],
        m = j.rg(),
        o = j.Ic(),
        q = j.Wb();
    j = Ss(g);
    c = j + Math.max(o + c, 0);
    o = a.n - Ts(g) - m.width;
    if (c > o) c = Math.max(o, j);
    o = a.g.ea(0);
    b = Math.max(Tz(a, h[b].zm) + q + d, o);
    g = a.vd() - a.Wb() - Rs(g) - m.height;
    if (b > g) b = Math.max(g, 0);
    g = a.Sb(c, b, i);
    if (!g) return k;
    if ((m = a.a[Wz(a, g)] || k) && m.O() != 0) return k;
    g = Cg(e.Y(), Ou(e, g));
    j = c - j;
    c = a.f.indexOf(g - 1);
    a = b - a.g.ea(c);
    g = Eg(e.Y(), g);
    return new Vja(g, j, a)
}
var nka = "Unknown plugin type: ";
n.Sb = function (a, b, c) {
    a -= this.Xj;
    var d = Kz(Lz(this.getContext()));
    if (!c) for (var e in d) {
        var g = d[e];
        c = Tz(this, g.zm) + g.Wb();
        var h = g.Ic(),
            j = g.rg().width;
        g = g.rg().height;
        if (a >= h && a <= h + j && b >= c && b <= c + g) return new Uw(e)
    }
    d = this.g.indexOf(b);
    d = Math.max(0, Math.min(this.a.length - 1, d));
    e = this.a[d];
    switch (e.O()) {
    case 0:
        a = My(e, a);
        break;
    case 1:
        a = e.f.Sb(Math.max(a, 0), b - this.g.ea(d));
        break;
    default:
        pv(this.getContext()).log(Error(nka + e.O()));
        return k
    }
    return a ? a.shift(this.f.ea(d)) : k
};
n.qd = function (a, b, c) {
    c -= this.Xj;
    var d = Wz(this, a),
        e = this.f.ea(d),
        g = this.a[d];
    if (!g) return k;
    if (g.O() == 0) return Zz(this, d, b, c);
    if (a = g.f.qd(a.shift(-e), b, c)) return a.shift(e);
    return Zz(this, d, b, c)
};

function Zz(a, b, c, d) {
    b += c ? -1 : 1;
    var e = a.a[b];
    if (!e) return k;a = a.f.ea(b);
    if (e.O() == 0) return My(e, d).shift(a);
    if (c = e.f.Sb(d, c ? Number.MAX_VALUE : 0,
    i)) return c.shift(a);
    return k
}
n.ye = function (a) {
    var b = Wz(this, a),
        c = this.a[b];
    if (!c) return k;
    switch (c.O()) {
    case 1:
        b = this.f.ea(b);
        return c.f.ye(a.shift(-b));
    case 0:
        return c;
    default:
        return k
    }
};

function Wz(a, b) {
    var c = Ou(Q(a.getContext()), b);
    if (c > a.f.ea(a.a.length)) return -1;
    var d = a.f.indexOf(c),
        e;
    if (b.O() == 0) e = b.f;
    else if (b.O() == 1) c = Cg(Q(a.getContext()).Y(), c);
    if (e && a.f.ea(d) == c) return Math.max(d - 1, 0);
    return d
}
var oka = "Requested plugin was not within this boxview.";

function Tz(a, b) {
    for (var c = 0, d; d = a.a[c]; c++) if (d == b) return a.g.ea(c);
    pv(a.getContext()).log(Error(oka));
    return a.Wb()
}
n.xe = function (a) {
    var b = Wz(this, a),
        c = this.f.ea(b);
    b = this.a[b];
    if (!b) return k;
    if (b.O() == 0) return new nb(c, c + b.og() - 1);
    if (a = b.f.xe(a.shift(-c))) {
        a.start += c;
        a.end += c;
        return a
    }
    return k
};
n.Lc = function (a, b, c) {
    this.sn = k;
    this.iy = b;
    this.gy = c;
    this.P = new nb(this.iy - this.gy * 1, this.iy + this.gy * 2);
    for (var d = 0, e; e = this.a[d]; d++) e.O() == 1 && e.f.Lc(this.f.ea(d) + a, b - this.g.ea(d), c);
    d = this.tc();
    d > 0 && Uz(this, a, new nb(a, a + d));
    if (wv(this.getContext()).jF) {
        b = this.sn || (this.sn = Vz(this));
        for (d = b.Kr; d < b.Kr + b.Vz; d++) {
            e = this.a[d];
            e.O() == 0 && Cy(e, this.f.ea(d) + a)
        }
    }
};

function Vz(a) {
    var b = a.g.indexOf(a.P.start - a.Wb());
    if (b < a.a.length) {
        var c = a.g.indexOf(a.P.end - a.Wb());
        if (c >= 0) {
            b = Math.max(b, 0);
            c = Math.min(a.a.length - 1, c);
            return {
                Kr: b,
                Vz: c - b + 1
            }
        }
    }
    return {
        Kr: 0,
        Vz: 0
    }
}
var pka = "minHeight";

function $z(a, b) {
    b = Math.max(0, b);
    if (b != a.vC) {
        a.vC = b;
        var c = dka ? md : pka;a.db().style[c] = b + D
    }
}
n.vd = function () {
    return Math.max(this.g.ea(this.a.length), this.vC + this.ym) + this.Qs
};n.xc = function () {
    for (var a = 0, b; b = this.a[a]; a++) b.O() == 1 && b.f.xc()
};
n.q = function () {
    yz.p.q.call(this);
    delete this.a;
    delete this.j2;
    delete this.sn
};
var Sz = new rr;

function aA(a, b, c) {
    yz.call(this, a, 0, c);
    a.Oa.register(this.ma(), b);
    this.sA = qka
}
s(aA, yz);n = aA.prototype;n.tC = l;n.sC = l;n.$x = k;n.fv = k;

function qka(a, b) {
    return E(a.Y(), b + 1) == ig
}
var rka = "kix-autogenregionview-border",
    ska = "kix-autogenregionview-reload-button",
    tka = "kix-autogenregionview";n.tv = function () {
    this.fv = this.J().F(sd, rka);
    this.$x = this.J().F(sd, ska);
    return this.J().F(sd, tka, this.$x, this.fv)
};n.fT = function () {
    var a = {};
    a.ind = bA(this);
    return a
};

function bA(a) {
    var b = cA(a.getContext());
    return dA(b, a.ma())
}
var uka = "kix-autogenregionview-highlighted";

function eA(a, b) {
    if (a.Io != b) {
        a.Io = b;
        a.u && a.u.X(b);
        z.ba.md(a.z(), uka, b);
        Qf(a.fv, b)
    }
}
n.lZ = function () {
    var a;
    a = qu(Q(this.getContext()));
    a = a > bA(this) && a < bA(this) + this.tc();
    eA(this, a)
};n.ga = function () {
    aA.p.ga.call(this);
    jf(wv(this.getContext())) ? eA(this, l) : Zr(Qr.N(), es, this.mZ, this, undefined, undefined, i)
};
n.mZ = function () {
    var a = this.getContext(),
        b = Mr(Rr(Qr.N(), es));
    this.u = new(b.gT());
    this.ya(this.u);
    var c = a.f,
        d = a.A;
    this.u.Ja(this.$x);
    this.u.X(this.Io);
    c = M(c, bn);
    uv(a, b.Rr()).a(this.u, c, b.mS(), r(this.fT, this));
    this.Ga().C(d, nv, this.lZ)
};n.ye = function (a) {
    return aA.p.ye.call(this, a.shift(-1))
};n.Sb = function (a, b) {
    var c = aA.p.Sb.call(this, a, b, i);
    return c ? c.shift(1) : k
};n.Gf = function (a, b) {
    return aA.p.Gf.call(this, a, b + 1)
};n.xe = function (a) {
    if (a = aA.p.xe.call(this, a.shift(-1))) {
        a.start += 1;
        a.end += 1;
        return a
    }
    return k
};
n.qd = function (a, b, c) {
    return (a = aA.p.qd.call(this, a.shift(-1), b, c)) ? a.shift(1) : k
};n.tc = function () {
    return aA.p.tc.call(this) + (this.tC ? 1 : 0) + (this.sC ? 1 : 0)
};n.Rb = function (a) {
    zz(this, Bz(this.ib.ib));
    var b = Q(this.getContext()),
        c = b.Y().indexOf(ig, a + 1);
    if (c == -1) c = Hu(b);
    Iz(this.getContext()).Zv(this.m1, this, a, c)
};
n.m1 = function (a, b, c, d) {
    if (a > d) return i;
    switch (b) {
    case Zf:
        b = Iz(this.getContext());
        switch (E(Q(this.getContext()).Y(), a)) {
        case hg:
            this.tC = i;
            vz(b, a, 1);
            break;
        case ig:
            this.sC = i;
            vz(b, a, 1);
            break;
        default:
            aA.p.Rb.call(this, c + 1)
        }
        break;
    case Yf:
        b = Iz(this.getContext());
        switch (rz(b, a).charAt(0)) {
        case hg:
            this.tC = l;
            sz(b, a, -1);
            break;
        case ig:
            this.sC = l;
            sz(b, a, -1);
            break;
        default:
            aA.p.Rb.call(this, c + 1)
        }
        break;
    default:
        b = Iz(this.getContext());
        switch (E(Q(this.getContext()).Y(), a)) {
        case hg:
        case ig:
            vz(b, a, 0);
            break;
        default:
            aA.p.Rb.call(this, c + 1)
        }
        break
    }
    return l
};n.pg = function (a, b, c) {
    aA.p.pg.call(this, a + 1, b, c)
};n.q = function () {
    cA(this.getContext()).unregister(this.ma());
    delete this.$x;
    delete this.fv;
    delete this.u;
    aA.p.q.call(this)
};Sz.set(hg, function (a, b, c) {
    return new aA(a, b, c)
});
var vka = "docs-icon-img-container",
    wka = "kix-icon-accessible-img",
    xka = "-sprite",
    yka = "docs-icon";

function fA(a, b, c) {
    var d = z.F(sd, bc(vka, x, wka, x, a, xka));
    d.innerHTML = gv;
    a = new N(yka, x, jy, x, a);
    if (b) for (var e = 0; e < b.length; e++) {
        var g = b[e];
        a.append(x);
        a.append(g)
    }
    b = z.F(sd, a.toString(), [d]);
    if (c) b.title = c;
    return b
};

function gA(a, b, c, d) {
    if (!$a(a) || !$a(b)) f(Error("Start and end parameters must be arrays"));
    if (a.length != b.length) f(Error("Start and end points must be the same length"));
    this.g = a;
    this.K = b;
    this.duration = c;
    this.u = d;
    this.a = []
}
s(gA, Pi);
var hA = {},
    iA = k;

function jA() {
    Lj.clearTimeout(iA);
    var a = lb();
    for (var b in hA) kA(hA[b], a);
    iA = ub(hA) ? k : Lj.setTimeout(jA, 20)
}
function lA(a) {
    a = ib(a);
    delete hA[a];
    if (iA && ub(hA)) {
        Lj.clearTimeout(iA);
        iA = k
    }
}
n = gA.prototype;n.gh = 0;n.eI = 0;n.hf = 0;n.startTime = k;n.SH = k;n.PC = k;
var zka = "play",
    Aka = "resume";

function mA(a, b) {
    if (b || a.gh == 0) {
        a.hf = 0;
        a.a = a.g
    } else if (a.gh == 1) return l;
    lA(a);
    a.startTime = lb();
    if (a.gh == -1) a.startTime -= a.duration * a.hf;
    a.SH = a.startTime + a.duration;
    a.PC = a.startTime;
    a.hf || a.Ji();
    nA(a, zka);
    a.gh == -1 && nA(a, Aka);
    a.gh = 1;
    var c = ib(a);
    c in hA || (hA[c] = a);
    iA || (iA = Lj.setTimeout(jA, 20));
    kA(a, a.startTime);
    return i
}
var oA = "stop",
    Bka = "destroy";n.q = function () {
    if (this.gh != 0) {
        lA(this);
        this.gh = 0;
        pA(this, this.hf);
        nA(this, oA);
        this.pp()
    }
    nA(this, Bka);
    gA.p.q.call(this)
};
var Cka = "finish";

function kA(a, b) {
    a.hf = (b - a.startTime) / (a.SH - a.startTime);
    if (a.hf >= 1) a.hf = 1;
    a.eI = 1E3 / (b - a.PC);
    a.PC = b;
    gb(a.u) ? pA(a, a.u(a.hf)) : pA(a, a.hf);
    if (a.hf == 1) {
        a.gh = 0;
        lA(a);
        nA(a, Cka);
        a.pp()
    } else a.gh == 1 && a.uD()
}
function pA(a, b) {
    a.a = Array(a.g.length);
    for (var c = 0; c < a.g.length; c++) a.a[c] = (a.K[c] - a.g[c]) * b + a.g[c]
}
var Dka = "animate";n.uD = function () {
    nA(this, Dka)
};
var qA = "begin";n.Ji = function () {
    nA(this, qA)
};n.pp = function () {
    nA(this, Zi)
};

function nA(a, b) {
    a.dispatchEvent(new rA(b, a))
}

function rA(a, b) {
    Pd.call(this, a);
    this.u = b.a;
    this.x = b.a[0];
    this.y = b.a[1];
    this.M = b.a[2];
    this.duration = b.duration;
    this.hf = b.hf;
    this.g = b.eI;
    this.Ui = b.gh;
    this.a = b
}
s(rA, Pd);

function sA(a, b, c, d, e) {
    gA.call(this, b, c, d, e);
    this.f = a
}
s(sA, gA);sA.prototype.n = Pa;sA.prototype.uD = function () {
    this.n();
    sA.p.uD.call(this)
};sA.prototype.pp = function () {
    this.n();
    sA.p.pp.call(this)
};sA.prototype.Ji = function () {
    this.n();
    sA.p.Ji.call(this)
};

function tA(a, b, c) {
    if (b.length != 2 || c.length != 2) f(Error("Start and end points must be 2D"));
    sA.apply(this, arguments)
}
s(tA, sA);tA.prototype.n = function () {
    this.f.style.left = Math.round(this.a[0]) + D;
    this.f.style.top = Math.round(this.a[1]) + D
};

function uA(a, b, c, d) {
    tA.call(this, a, [a.offsetLeft, a.offsetTop], b, c, d)
}
s(uA, tA);uA.prototype.Ji = function () {
    this.g = [this.f.offsetLeft, this.f.offsetTop];
    uA.p.Ji.call(this)
};

function vA(a, b, c, d, e) {
    if (fb(b)) b = [b];
    if (fb(c)) c = [c];
    sA.call(this, a, b, c, d, e);
    if (b.length != 1 || c.length != 1) f(Error("Start and end points must be 1D"))
}
s(vA, sA);vA.prototype.n = function () {
    Pf(this.f, this.a[0])
};vA.prototype.show = function () {
    this.f.style.display = v
};

function wA(a, b, c) {
    vA.call(this, a, 1, 0, b, c)
}
s(wA, vA);
wA.prototype.Ji = function () {
    this.show();
    wA.p.Ji.call(this)
};wA.prototype.pp = function () {
    this.f.style.display = Hf;
    wA.p.pp.call(this)
};

function xA(a, b, c) {
    vA.call(this, a, 0, 1, b, c)
}
s(xA, vA);xA.prototype.Ji = function () {
    this.show();
    xA.p.Ji.call(this)
};

function Eka(a) {
    return 1 - Math.pow(1 - a, 3)
};

function yA(a, b, c, d, e, g) {
    yz.call(this, a, c, g);
    this.Aa = d;
    this.cg = b;
    this.u = e
}
s(yA, yz);n = yA.prototype;n.BB = k;n.Un = k;n.Io = l;
var Fka = "kix-icon-delete-note";n.Xz = function () {
    var a = [];
    if (!jf(wv(this.getContext()))) {
        this.J();
        this.Un = fA(Fka);
        a.push(this.Un)
    }
    return a
};n.F = function () {
    yA.p.F.call(this);
    var a = this.z();
    a.style.position = zf;
    z.ba.add(a, this.u)
};
var Gka = "kix-noteview-header";n.tv = function () {
    var a = this.J(),
        b = this.Xz();
    this.BB = a.F(sd, Gka, b);
    return a.F(sd, undefined, this.BB)
};
n.ga = function () {
    yA.p.ga.call(this);
    var a = Xe(Ge.N(), 7);
    Cz(this, a + 16, a, a, a);
    a = pv(this.getContext());
    this.Un && this.Ga().C(this.Un, Ud, Pq(a, this.NU, this)).C(this.Un, Co, Pq(a, this.FC, this));
    this.X(!this.Aa)
};
var Hka = "kix-noteview-highlighted";n.gd = function (a) {
    if (a != this.Io) {
        z.ba.md(this.z(), Hka, a);
        this.Io = a
    }
};n.NU = function () {
    this.X(l);
    var a = this.kI();
    if (a) if (a = M(yv(this.getContext()), a)) {
        var b = {};
        b.entityId = this.cg;
        Ni(a, b)
    }
};n.FC = function (a) {
    a.stopPropagation()
};

function zA(a, b, c, d) {
    if (!(!p(c) || !p(b) || !a.Da())) if (d) {
        if (d = a.z()) {
            b = Math.round(b);
            c = Math.round(c);
            if (!(a.Wb() == c && a.Ic() == b)) {
                mA(new uA(d, [b, c], 500, Eka));
                c = c;
                a.tx = b;
                a.Jy = c
            }
        }
    } else jv(a, b, c)
}
n.vd = function () {
    return yA.p.vd.call(this) + 4
};n.q = function () {
    yA.p.q.call(this);
    this.Un = this.BB = k
};
var Ika = "kix-commentview";

function AA(a, b, c, d, e) {
    yA.call(this, a, b, c, d, Ika, e)
}
s(AA, yA);n = AA.prototype;n.Zq = k;n.Gp = k;n.DB = k;
var Jka = "kix-icon-reply-comment",
    Kka = "kix-icon-close-comment";n.Xz = function () {
    var a = AA.p.Xz.call(this);
    this.J();
    if (!jf(wv(this.getContext()))) {
        this.Gp = fA(Jka);
        a.push(this.Gp)
    }
    this.Zq = fA(Kka);
    a.push(this.Zq);
    return a
};
var Lka = "kix-commentview-highlighted-arrow";n.F = function () {
    AA.p.F.call(this);
    var a = this.J();
    this.DB = fA(Lka);
    a.appendChild(this.z(), this.DB)
};
n.ga = function () {
    AA.p.ga.call(this);
    this.Ga().C(this.Zq, Ud, this.CU).C(this.Zq, Co, this.FC);
    this.Gp && this.Ga().C(this.Gp, Ud, this.YW).C(this.Gp, Co, this.FC)
};n.kI = function () {
    return Tn
};n.CU = function () {
    this.X(l);
    this.dispatchEvent(Kp)
};n.gd = function (a) {
    AA.p.gd.call(this, a);
    this.DB.style.visibility = a ? Gi : Kf
};n.YW = function () {
    var a = {};
    a.entityId = this.cg;
    Ni(M(yv(this.getContext()), Vn), a)
};n.q = function () {
    AA.p.q.call(this);
    this.Gp = this.Zq = k
};

function BA(a, b, c) {
    iv.call(this, a, c);
    this.u = b
}
s(BA, dx);

function CA(a, b, c) {
    BA.call(this, a, b, c);
    this.a = {}
}
s(CA, BA);n = CA.prototype;n.MH = 0;n.KH = 0;n.HA = function (a, b) {
    return this.a[DA(this, a, b)] || k
};

function DA(a, b, c) {
    for (var d in a.a) {
        var e = a.a[d],
            g;
        if (g = e.Da()) {
            g = b;
            var h = c,
                j = e.z();
            if (j) {
                e = j.offsetLeft;
                var m = e + j.offsetWidth,
                    o = j.offsetTop;
                j = o + j.offsetHeight;
                g = g > e && g < m && h > o && h < j
            } else g = l
        }
        if (g) return d
    }
    return k
}
n.iI = function (a) {
    return this.a[EA(this, a)] || k
};

function EA(a, b) {
    var c = Q(a.getContext()),
        d = a.a;
    for (var e in d) {
        var g = d[e],
            h = FA(c, e);
        if (b >= h && b <= h + g.tc()) return e
    }
    return k
}
n.xc = function () {
    var a = this.a;
    for (var b in a) a[b].xc()
};n.Lc = function (a, b) {
    this.MH = a;
    this.KH = b;
    var c = this.a,
        d = Q(this.getContext());
    for (var e in c) {
        var g = FA(d, e);
        g > 0 && c[e].Lc(g, a, b)
    }
};n.jK = function (a, b) {
    var c = this.a,
        d = Q(this.getContext());
    for (var e in c) c[e].pg(FA(d, e) + 1, a, b)
};
n.ye = function (a) {
    var b = Q(this.getContext()),
        c = EA(this, Ou(b, a));
    if (!c) return k;
    return this.a[c].ye(a.shift(-FA(b, c) - 1))
};n.Sb = function (a, b, c) {
    var d = DA(this, a, b);
    if (!d) return k;
    var e = this.a[d];
    b -= e.Wb();
    a -= e.Ic();
    if (a = e.Sb(a, b, c)) return a.shift(FA(Q(this.getContext()), d) + 1);
    return k
};n.xe = function (a) {
    var b = EA(this, a.a);
    if (!b) return k;
    var c = this.a[b];
    b = FA(Q(this.getContext()), b) + 1;
    if (a = c.xe(a.shift(-b))) {
        a.start += b;
        a.end += b;
        return a
    }
    return k
};
n.qd = function (a, b, c) {
    var d = EA(this, a.a);
    if (!d) return k;
    var e = this.a[d];
    d = FA(Q(this.getContext()), d);
    if (a = e.qd(a.shift(-d - 1), b, c)) return a.shift(d + 1);
    return k
};n.rC = function (a, b, c) {
    var d = EA(this, a.a);
    if (!d) return k;
    b = this.a[d];
    d = FA(Q(this.getContext()), d);
    return b.Gf(a, d + 1, c)
};n.q = function () {
    CA.p.q.call(this);
    for (var a in this.a) this.a[a].G()
};

function GA(a, b, c) {
    CA.call(this, a, b, c)
}
s(GA, CA);n = GA.prototype;n.FB = k;
var Mka = "kix-noteviewmanager-fade1",
    Nka = "kix-noteviewmanager-fade2",
    Oka = "kix-noteviewmanager-fade3",
    Pka = "kix-noteviewmanager";n.F = function () {
    for (var a = this.J(), b = Xe(Ge.N(), 150), c = [Mka, Nka, Oka], d = [], e = 0, g; g = c[e]; e++) d.push(a.F(sd, {
        "class": g,
        style: Ez + b + ly
    }));
    this.sb(a.F(sd, Pka, d))
};n.ga = function () {
    GA.p.ga.call(this);
    var a = Q(this.getContext());
    this.Ga().C(a, nv, this.NZ).C(a, ov, this.OZ)
};
n.Rb = function () {
    var a = Q(this.getContext()),
        b = HA(a, this.ix()),
        c = this.a,
        d = Iz(this.getContext()),
        e = nz(d),
        g = l,
        h = l;
    switch (d.vf()) {
    case Yf:
        h = d.wc[e] || k;
        if (h.Y().charAt(0) == jg) {
            if ((c = h.f[this.ix()]) && c[0]) {
                c = c[0][0];
                h = this.a;
                Q(this.getContext());
                if (g = h[c]) {
                    a = g.tc() + 1;
                    this.PL(g);
                    this.removeChild(g, i);
                    delete h[c];
                    g.G();
                    c = a
                } else c = 0;
                sz(d, e, -c);
                g = i
            }
            break
        }
    case Zf:
        h = i;
    case pz:
        a = Iu(a, e);
        if (a < b.length) if (b = b[a]) {
            g = b[0];
            if (!c[g]) {
                b = Xe(Ge.N(), 150);
                b = this.$G(g, b, this.J());
                this.ya(b, i);
                b.Lc(FA(Q(this.getContext()), g), this.MH, this.KH);
                this.a[g] = b;
                IA(this)
            }
            vz(d, a, a == e && h ? 1 : 0);
            c[g].Rb(a + 1);
            c[g].xc();
            g = i
        }
        break
    }
    g && IA(this);
    return g
};n.Rc = function () {
    return Xe(Ge.N(), 150) + 4
};n.PL = function () {};n.X = function (a) {
    if (a != this.Da()) {
        GA.p.X.call(this, a);
        a && IA(this)
    }
};
n.NZ = function () {
    var a = Q(this.getContext());
    if (a.ra().Fa().O() == 0) {
        var b = Qu(a),
            c = this.a,
            d = this.EI(b);
        d = d ? this.hx(d) : [];
        for (var e in c) c[e].gd(sc(d, e));
        for (var g = 0; e = d[g]; g++) {
            var h = c[e];
            h && h.X(i)
        }
        d = Ew(a);e = k;
        if (d) {
            b = Iu(a, b);
            e = Cw(a.n, this.ix(), b)[0];
            if (h = c[e]) {
                this.X(i);
                h.X(i);
                h.gd(i)
            }
        }
        this.KM(e);IA(this)
    }
};n.KM = function () {};n.OZ = function () {
    var a = Q(this.getContext());
    Ew(a) || IA(this)
};

function IA(a) {
    if (a.Da()) {
        var b = Q(a.getContext()),
            c = a.a;
        if (!ub(c)) {
            for (var d = l, e = a.FI(), g = Hu(b), h = {}, j = a.ib, m = 0; m < e.length; ++m) {
                var o = e[m];
                if (o >= g) break;
                for (var q = a.hx(b.oa(a.wh(), o)), u = 0, w; w = q[u]; u++) {
                    var C = c[w];
                    if (!h[w] && C && C.Da()) {
                        var B = Tu(j, new P(o));
                        if (B) {
                            h[w] = B.y + a.Wb();
                            if (C.Io) {
                                d = w != a.FB;
                                a.FB = w
                            }
                        }
                    }
                }
            }
            b = tb(h);
            Hc(b, function (H, I) {
                return Fc(h[H], h[I])
            });
            vba(wv(a.getContext())) ? Qka(a, b, h, d) : Rka(a, b, h)
        }
    }
}

function Rka(a, b, c) {
    a = a.a;
    for (var d = 0, e = 0, g; g = b[e]; e++) {
        var h = a[g];
        d = Math.max(d, c[g]);
        jv(h, 0, d);
        d = d + h.vd() + 5
    }
}
function Qka(a, b, c, d) {
    var e = a.a;
    a = a.FB;
    for (var g = jc(b, a), h = a ? c[a] - 5 : Number.MAX_VALUE,
        j = g - 1,
        m;m = b[j];j--) {
        var o = e[m],
            q = o.vd();
        h = Math.min(h - q, c[m]);
        zA(o, 0, h, d);
        h -= 5
    }
    h = 0;
    if ((j = e[a]) && j.Da()) {
        zA(j, 0, c[a], d);
        h = j.Wb() + j.vd() + 5
    }
    for (j = g + 1; m = b[j]; j++) {
        o = e[m];
        q = o.vd();
        h = Math.max(h, c[m]);
        zA(o, 0, h, d);
        h = h + q + 5
    }
};

function JA(a, b) {
    this.type = 1;
    this.anchor = a;
    this.position = b
}
s(JA, Tw);
var KA = "main_page";

function LA(a, b) {
    CA.call(this, a, new JA(KA, $i), b);
    this.f = {};
    this.g = r(this.hS, this)
}
s(LA, GA);n = LA.prototype;n.EB = k;n.jn = k;
var MA = "kix-overlay-comment";n.ga = function () {
    LA.p.ga.call(this);
    Fy(this.getContext()).Sd(MA, this.g);
    this.jn = M(yv(this.getContext()), ml);
    this.jn.Za(Mi, this.oJ, this);
    this.jn.hd(i)
};n.pb = function () {
    LA.p.pb.call(this);
    this.jn.of(Mi, this.oJ, this)
};
n.$G = function (a, b, c) {
    var d = this.getContext(),
        e = i,
        g = Q(this.getContext()).td(Xg);
    Pg(g, function (h, j) {
        if (sc(j.Ke.Qb(), a)) {
            e = l;
            return i
        }
        return l
    });
    b = new AA(d, a, b, e, c);
    this.Ga().C(b, Kp, this.HU);
    NA(Fy(this.getContext()), undefined, MA);
    return b
};n.hx = function (a) {
    return a.Ke.Qb()
};n.ix = function () {
    return Xg
};n.EI = function (a) {
    return Q(this.getContext()).oa(this.wh(), a)
};n.FI = function () {
    var a = Q(this.getContext()),
        b = [],
        c = 1,
        d = Gv(a, this.wh(), c),
        e = Hu(a);
    for (b.push(c); c < e;) {
        c = d + 1;
        b.push(c);
        d = Gv(a, this.wh(), c)
    }
    return b
};
n.wh = function () {
    return Xg
};n.PL = function (a) {
    this.Ga().a(a, Kp);
    delete this.f[a.cg]
};n.X = function (a) {
    var b = this.Da();
    LA.p.X.call(this, a);
    if (a != b) {
        this.jn.hd(a);
        a ? Fy(this.getContext()).Sd(MA, this.g) : OA(Fy(this.getContext()), MA)
    }
};n.KM = function (a) {
    this.jn.la(!Hia(Q(this.getContext())));
    if (a != this.EB) {
        PA(this, this.EB, l);
        PA(this, a, i);
        this.EB = a
    }
};
var Ska = "kix-commentviewmanager-overlay";
n.hS = function (a) {
    if (!this.Da()) return k;
    for (var b = Q(this.getContext()), c = [], d = a.start, e = Math.min(Gv(b, this.wh(), d), a.end); d < a.end;) {
        for (var g = this.hx(b.oa(this.wh(), d)), h = k, j = 0, m; m = g[j]; j++) {
            this.f[m] = this.f[m] || [];
            if (FA(b, m) >= 0) {
                if (!h) {
                    h = new jx(new nb(d, e), Ska);
                    c.push(h)
                }
                this.f[m].push(h)
            }
        }
        d = e + 1;
        e = Math.min(Gv(b, this.wh(), d), a.end)
    }
    return c
};n.HU = function () {
    IA(this)
};n.oJ = function () {
    this.X(!this.Da())
};
var Tka = "kix-commentviewmanager-overlay-highlighted";

function PA(a, b, c) {
    a.f[b] && lc(a.f[b], function (d, e, g) {
        if (d.wj) yc(g, e);
        else if (d = d.Dj()) for (e = 0; e < d.length; e++) z.ba.md(d[e], Tka, c)
    })
}
n.q = function () {
    LA.p.q.call(this);
    for (var a in this.f) for (var b = this.f[a], c = 0; c < b.length; c++) b[c].G();
    delete this.f;
    delete this.jn
};
var QA = 0;
var Uka = "nw",
    Vka = "ne",
    RA = "sw",
    Wka = "se";

function SA(a, b, c) {
    Qo.call(this, c);
    this.V = a;
    this.n = b;
    this.f = [];
    this.a = [];
    this.g = [new TA(Uka, 0, 0), new TA(uj, 0.5, 0), new TA(Vka, 1, 0), new TA(mj, 0, 0.5), new TA(Cj, 1, 0.5), new TA(RA, 0, 1), new TA(yj, 0.5, 1), new TA(Wka, 1, 1)];
    this.L = new ze(this)
}
s(SA, Qo);n = SA.prototype;n.jf = k;n.Ap = k;n.bn = k;
var Xka = "kix-selection-box",
    Yka = "kix-selection-box-handle",
    Zka = "cursor:",
    $ka = "-resize";
n.F = function () {
    var a = this.J();
    this.bn = a.F(sd, Xka);
    for (var b = 0, c; c = this.g[b]; b++) this.a.push(a.F(sd, {
        "class": Yka,
        style: Zka + c.g + $ka
    }));
    this.sb(a.F(sd, Jy, this.bn, this.a))
};n.ga = function () {
    SA.p.ga.call(this);
    if (this.n) {
        this.L.C(this.z(), Co, this.ZZ);
        for (var a = 0, b; b = this.a[a]; a++) this.f.push(new Do(b));
        for (a = 0; b = this.f[a]; a++) this.L.C(b, Mo, this.VZ).C(b, Io, this.XZ).C(b, Oo, this.YZ).C(b, Zi, this.WZ)
    }
};n.ZZ = function (a) {
    a.stopPropagation()
};n.XZ = function () {
    this.Ap = this.jf.sa()
};
n.VZ = function (a) {
    var b = UA(this, a);
    if (b) if (b.width < 20 || b.height < 20) {
        a.preventDefault();
        a.stopPropagation()
    }
};n.YZ = function (a) {
    (a = UA(this, a)) && VA(this, a)
};
var WA = "Failed to cache previous rect prior to drag.",
    XA = "resize-end";n.WZ = function () {
    !this.Ap || !this.jf ? this.V.log(Error(WA)) : this.dispatchEvent(new YA(XA, this.Ap, this.jf))
};

function UA(a, b) {
    if (!a.Ap) {
        a.V.log(Error(WA));
        return k
    }
    var c = a.g[jc(a.f, b.a)],
        d = b.left + 4,
        e = b.top + 4,
        g = a.Ap,
        h = g.sa();
    switch (c.f) {
    case 0:
        h.top = e;
        h.height = g.height + g.top - e;
        break;
    case 1:
        h.height = e - g.top;
        break
    }
    switch (c.a) {
    case 0:
        h.left = d;
        h.width = g.width + g.left - d;
        break;
    case 1:
        h.width = d - g.left;
        break
    }
    if (c.a != 0.5 && c.f != 0.5) {
        d = h;
        e = g.width / g.height;
        g = d.sa();
        e = Math.round(d.height * e);
        if (c.a == 0) g.left += d.width - e;
        g.width = e;
        h = g
    }
    return h
}

function VA(a, b) {
    a.jf = b;
    var c = a.jf.height - 2;
    a.bn.style.width = a.jf.width - 2 + D;
    a.bn.style.height = c + D;
    a.bn.style.left = a.jf.left + D;
    a.bn.style.top = a.jf.top + D;
    c = 0;
    for (var d; d = a.a[c]; c++) {
        var e = a.g[c],
            g = e.f * a.jf.height + a.jf.top - 4;
        d.style.left = e.a * a.jf.width + a.jf.left - 4 + D;
        d.style.top = g + D
    }
}
n.q = function () {
    SA.p.q.call(this);
    delete this.f;
    delete this.a;
    delete this.g;
    this.L.G();
    delete this.L;
    delete this.jf;
    delete this.Ap;
    delete this.bn
};

function TA(a, b, c) {
    this.g = a;
    this.a = b;
    this.f = c
}

function YA(a, b, c) {
    Pd.call(this, a);
    this.g = b;
    this.a = c
}
s(YA, Pd);

function ZA(a, b, c, d, e, g) {
    iv.call(this, a, g);
    this.g = b || k;
    this.P = c || di;
    this.a = (this.u = this.n = !! d) ? new Kj(500) : k;this.f = !! e
}
s(ZA, iv);n = ZA.prototype;n.Yo = k;n.uZ = k;n.FA = i;n.Br = i;n.iA = i;n.jl = k;n.Sn = k;n.ik = k;n.jA = l;n.fq = k;n.kt = k;n.Fa = function () {
    return this.Yo
};n.ra = function () {
    return this.g
};n.sg = function (a) {
    ZA.p.sg.call(this, a);
    $A(this)
};

function $A(a) {
    var b = !a.Yo || a.Yo.O() == 0,
        c = a.Ts;
    b = (a.f || c && a.Br && (!a.g || !a.g.Kb())) && b;
    if (a.a) a.u && b && a.FA ? a.a.start() : Mj(a.a);aB(a, b)
}
var ala = "kix-cursorview-caret",
    bla = "border-color: ",
    cla = "kix-cursorview kix-unprintable",
    dla = "kix-cursorview-top",
    bB = "background-color: ",
    ela = "kix-cursorview-name";n.F = function () {
    var a = this.J();
    this.jl = a.F(sd, {
        "class": ala,
        style: bla + this.P + Tf
    });
    this.Sn = a.F(sd, cla, this.jl);
    this.sb(this.Sn);
    if (this.f) {
        this.fq = a.F(sd, {
            "class": dla,
            style: bB + this.P + Tf
        });
        this.ik = a.F(sd, {
            "class": ela,
            style: bB + this.P + Tf
        }, this.g.od());
        this.ik.style.display = Hf;
        this.Sn.appendChild(this.fq);
        this.Sn.appendChild(this.ik)
    }
};
n.ga = function () {
    ZA.p.ga.call(this);
    if (this.n) {
        this.Ga().C(this.a, Nj, this.oU);
        $A(this)
    }
    var a = cB(this.getContext());
    this.Ga().C(a, Ao, this.jV).C(a, yo, this.iV);
    this.f && this.Ga().C(this.Sn, Rd, this.sW).C(this.Sn, Sd, this.rW)
};n.sW = function () {
    dB(this, l)
};n.rW = function () {
    dB(this, i)
};

function dB(a, b) {
    if (a.ik && a.fq) {
        if (a.kt) {
            Pj(a.kt);
            a.kt = k
        }
        if (!a.jA) {
            var c = new xA(a.ik, 100);
            a.fq.style.display = Hf;
            mA(c);
            a.jA = i
        }
        if (b) a.kt = Oj(a.dY, 1300, a)
    }
}
n.dY = function () {
    if (this.ik && this.fq) {
        this.kt = k;
        var a = new wA(this.ik, 200),
            b = new xA(this.fq, 200);
        mA(a);
        mA(b);
        this.jA = l
    }
};n.iV = function () {
    this.FA = l;
    $A(this)
};n.jV = function () {
    this.FA = i;
    $A(this)
};n.pb = function () {
    ZA.p.pb.call(this);
    this.n && Mj(this.a)
};n.oU = function () {
    aB(this, !this.iA)
};
var fla = "Redrawing at an inline location with wrong params.",
    gla = "kix-cursorview-italic",
    hla = 'progid:DXImageTransform.Microsoft.Matrix(M11="0.97", M12="-0.22",M21="0.22", M22="0.97", SizingMethod="auto expand"';
n.Rb = function (a, b, c) {
    var d = this.Ts || this.f;
    if (this.Br && d) {
        d = this.g;
        if (b = b || (d ? d.Fa() : k)) {
            this.Yo = b;
            d && this.f && z.Ud(this.ik, d.od());
            d = !d || !d.Kb() || this.f;
            $A(this);
            if (d) {
                if (b.O() == 0) {
                    if (!a) {
                        pv(this.getContext()).log(Error(fla));
                        return
                    }
                    if (this.Yo) {
                        b = Q(this.getContext());
                        if (!this.f) {
                            b = eB(b).Oj;
                            z.ba.md(this.jl, gla, b);
                            if (y.ia) this.jl.style.filter = b ? hla : v
                        }
                        b = a.a.x;
                        a.f || (b -= 1);
                        jv(this, b, a.a.y);
                        this.jl.style.height = a.height + D
                    }
                    if (this.u) {
                        fB(this, l);
                        fB(this, i)
                    }
                }
                c && dB(this, i);
                if (a = this.z()) QA = a.offsetHeight
            }
        }
    }
};

function ev(a, b) {
    if (a.Br != b) {
        a.Br = b;
        fB(a, b);
        $A(a)
    }
}
function aB(a, b) {
    if (a.iA != b) {
        a.jl.style.display = b ? v : Hf;a.iA = b
    }
}
function fB(a, b) {
    if (a.n && b != a.u) {
        a.u = b;
        a.cb && $A(a)
    }
}
n.q = function () {
    ZA.p.q.call(this);
    this.a && this.a.G();
    delete this.a;
    delete this.g;
    delete this.Yo;
    delete this.uZ
};

function gB(a, b, c) {
    yz.call(this, a, b, c)
}
s(gB, yz);n = gB.prototype;n.we = function () {
    return 1
};n.ye = function (a) {
    var b = this.we();
    if (Xa(b)) return k;
    return gB.p.ye.call(this, a.shift(-b))
};n.Sb = function (a, b, c) {
    var d = this.we();
    if (Xa(d)) return k;
    return (a = gB.p.Sb.call(this, a, b, c)) ? a.shift(d) : k
};n.Gf = function (a, b) {
    var c = this.we();
    if (Xa(c)) return k;
    return gB.p.Gf.call(this, a, c, b)
};n.xe = function (a) {
    var b = this.we();
    if (Xa(b)) return k;
    if (a = gB.p.xe.call(this, a.shift(-b))) {
        a.start += b;
        a.end += b;
        return a
    }
    return k
};
n.qd = function (a, b, c) {
    var d = this.we();
    if (Xa(d)) return k;
    return (a = gB.p.qd.call(this, a.shift(-d), b, c)) ? a.shift(d) : k
};
var hB = "Spacer index must be first spacer index.";n.pg = function (a, b, c) {
    var d = this.we();
    p(a) && a != d && pv(this.getContext()).log(Error(hB));
    Xa(d) || b.start < d + this.tc() && gB.p.pg.call(this, d, b, c)
};n.Rb = function (a, b) {
    var c = this.we();
    p(a) && a != c && pv(this.getContext()).log(Error(hB));
    Xa(c) || gB.p.Rb.call(this, c, b)
};
n.Lc = function (a, b, c) {
    var d = this.we();
    p(a) && a != d && pv(this.getContext()).log(Error(hB));
    Xa(d) || gB.p.Lc.call(this, d, b, c)
};

function iB(a) {
    this.type = 0;
    this.anchor = a
}
s(iB, Tw);

function jB(a, b, c, d, e) {
    yz.call(this, a, b, e);
    this.Wg = c;
    this.u = d
}
s(jB, gB);n = jB.prototype;n.cg = k;n.AB = l;n.we = function () {
    var a = kB(this);
    return a ? FA(Q(this.getContext()), a) + 1 : k
};
var ila = "kix-headerview",
    jla = "kix-footerview";n.tv = function () {
    return this.J().F(sd, this.Wg == 0 ? ila : jla)
};n.ga = function () {
    jB.p.ga.call(this);
    lB(this);
    this.Ga().C(Q(this.getContext()), nv, this.IZ)
};
var kla = "kix-headerview-hascontent",
    lla = "kix-footerview-hascontent";
n.IZ = function () {
    var a;
    var b = kB(this);
    if (b) if (this.tc() > 1) a = i;
    else {
        var c = Q(this.getContext());
        a = Iu(c, qu(c));
        b = FA(c, b);
        a = a == b
    } else a = l;
    if (a != this.AB) {
        z.ba.md(this.z(), this.Wg == 0 ? kla : lla,
        a);
        this.AB = a;
        lB(this)
    }
};n.Rb = function (a, b) {
    if (!kB(this)) return l;
    return jB.p.Rb.call(this, this.we(), b)
};

function kB(a) {
    if (a.cg) return a.cg;
    var b = Q(a.getContext()),
        c = HA(b, rt);
    c && Pg(c, function (d, e) {
        for (var g = 0; g < e.length; g++) {
            var h = e[g],
                j = b.Pa(h);
            if (j && j.f == this.Wg) {
                this.cg = h;
                return
            }
        }
        return l
    }, a);
    return a.cg
}

function lB(a) {
    var b = Yz(Q(a.getContext())),
        c, d, e;
    if (wv(a.getContext()).Aa) {
        c = Xe(Ge.N(), b.Eh);
        d = Rs(b);
        e = Ss(b);
        b = Ts(b)
    } else c = d = e = b = a.u;
    c = a.Wg == 0 ? c : d;c -= 14;a.AB && c--;Cz(a, 7, b, 7, e);$z(a, c)
};

function mB(a, b, c) {
    BA.call(this, a, new iB(KA), c);
    this.a = b;
    this.ya(b);
    var d = hf(wv(this.getContext())),
        e = Us(Yz(a.A)),
        g = d ? new jB(a, e, 0, 5, c) : k;g && this.ya(g);this.f = g;
    (a = d ? new jB(a, e, 1, 5, c) : k) && this.ya(a);this.g = a;this.n = d ? [b, g, a] : [b]
}
s(mB, BA);n = mB.prototype;n.RM = k;n.QM = k;n.BJ = k;n.IG = k;
var mla = "kix-documentview";n.F = function () {
    this.sb(this.J().F(sd, {
        "class": mla
    }))
};
var nla = "kix-body-view";
n.ga = function () {
    mB.p.ga.call(this);
    var a = this.z(),
        b = this.f,
        c = this.g;
    b && b.Ja(a);
    this.a.Ja(a);
    c && c.Ja(a);
    if (wv(this.getContext()).DF) this.a.z().id = nla;
    nB(this)
};
var oB = "#fff";

function nB(a) {
    var b = Yz(Q(a.getContext())),
        c, d, e, g;
    if (wv(a.getContext()).Aa) {
        c = Xe(Ge.N(), b.Eh);
        d = Rs(b);
        g = Ss(b);
        e = Ts(b)
    } else c = d = g = e = 5;
    var h = a.f,
        j = a.g;
    Cz(a.a, h ? 0 : c,
    e,
    j ? 0 : d,
    g);
    h && lB(h);
    j && lB(j);
    c = Xe(Ge.N(), b.rp);
    d = Yz(Q(a.getContext()));
    $z(a.a, c - Xe(Ge.N(), d.Eh) - Rs(d));
    c = Us(b);
    zz(a.a, c);
    a.f && zz(a.f, c);
    a.g && zz(a.g, c);
    b = b.g;
    a.z().style.backgroundColor = b.Cj() || oB
}
n.Rc = function () {
    return this.a.Rc() + 2
};n.ye = function (a) {
    for (var b = this.n, c = 0; c < b.length; c++) {
        var d = b[c].ye(a);
        if (d) return d
    }
    return k
};
n.iI = function (a) {
    for (var b = this.n, c = 0, d; d = b[c]; c++) {
        var e = d.we();
        if (e !== k && a >= e && a < e + d.tc()) return d
    }
    return k
};n.HA = function (a, b) {
    if (a < 0 || b < 0) return k;
    var c = this.f,
        d = 0;
    if (c) {
        d = c.vd();
        if (b < d && a < c.Rc()) return c
    }
    c = this.a;
    d = d + c.vd();
    if (b < d && a < c.Rc()) return c;
    if (c = this.g) {
        d = d + c.vd();
        if (b < d && a < c.Rc()) return c
    }
    return k
};

function pB(a, b) {
    if (b == a.a) return a.f ? a.f.vd() : 0;
    else if (b == a.g) return (a.f ? a.f.vd() : 0) + a.a.vd();
    return 0
}
n.Sb = function (a, b, c) {
    var d = this.HA(a, b);
    if (!d || Xa(d.we())) d = this.a;
    return d.Sb(a, b - pB(this, d), d == this.a ? c : i)
};n.rC = function (a, b, c) {
    for (var d = this.n, e = 0; e < d.length; e++) {
        var g = d[e].Gf(a, c);
        if (g) {
            if (g.a && b) g.a.y += pB(this, d[e]);
            return g
        }
    }
    return k
};n.xe = function (a) {
    for (var b = this.n, c = 0; c < b.length; c++) {
        var d = b[c].xe(a);
        if (d) return d
    }
    return k
};n.qd = function (a, b, c) {
    for (var d = this.n, e = 0; e < d.length; e++) {
        var g = d[e].qd(a, b, c);
        if (g) return g
    }
    return k
};
n.jK = function (a, b) {
    for (var c = this.n, d = 0; d < c.length; d++) c[d].pg(undefined, a, b)
};n.Rb = function () {
    for (var a = Iz(this.getContext()), b = nz(a), c = l, d = this.n, e = 0, g; g = d[e]; e++) {
        var h = g == this.a,
            j = g.we();
        if (Xa(j) || b < j || b > j + g.tc()) if (b == g.we() - (h ? 0 : 1)) {
            c = i;
            h || vz(a, b, a.vf() == Zf ? 1 : 0)
        } else continue;
        if (h) {
            h = g;
            j = Kz(Lz(h.getContext()));
            var m = [];
            for (var o in j) Nz(h, j[o], m);
            h = m
        } else h = [];
        g.Rb(undefined, h)
    }
    qB(this, c);
    return i
};n.xc = function () {
    for (var a = this.n, b = 0; b < a.length; b++) a[b].xc()
};
n.Lc = function (a, b) {
    qB(this, i, a, b)
};

function qB(a, b, c, d) {
    var e = a.f && a.f.vd(),
        g = a.a.vd(),
        h = a.BJ != e,
        j = a.IG != g;
    if (!(!b && !h && !j)) {
        a.BJ = e;
        a.IG = g;
        c = c;
        d = d;
        if (p(c)) a.RM = c;
        else c = a.RM;
        if (p(d)) a.QM = d;
        else d = a.QM;
        if (Za(d) && Za(c)) {
            a.f && b && a.f.Lc(undefined, c, d);
            if (b || h) a.a.Lc(undefined, c - pB(a, a.a), d);
            if (a.g && (b || h || j)) a.g.Lc(undefined, c - pB(a, a.g), d)
        }
    }
}
n.q = function () {
    mB.p.q.call(this);
    delete this.a;
    delete this.f;
    delete this.g;
    delete this.n
};

function rB(a, b) {
    var c = new gB(a, Us(Yz(a.A)), b);
    return new mB(a, c, b)
};
var sB = "/a/";

function tB(a, b, c, d, e, g) {
    a = Lt(a);
    if (b) a[1] = b.replace(Sf, v);
    b = d || a[5] || Hj;
    if (c) b = sB + c + b;
    Ib(b, Hj) || (b += Hj);
    if (e) b += e.replace(Hj, v);
    return Kt(a[1], a[2], a[3], a[4], b, g)
};
var ola = "/drawings/a/",
    pla = "/a/drawings/",
    qla = "/a/$1/drawings/";

function uB(a) {
    a = a.replace(ola, pla);
    return a = a.replace(/\/a\/drawings\/([^\/]+)\//, qla)
};

function vB(a, b) {
    iv.call(this, a, b)
}
s(vB, dx);vB.prototype.CC = function () {
    return k
};vB.prototype.rK = function () {
    return []
};

function wB(a, b, c, d, e) {
    iv.call(this, a, e);
    this.g = c;
    this.a = b;
    this.f = !! d
}
s(wB, vB);n = wB.prototype;n.Oe = k;n.zm = k;n.Yj = k;n.IH = l;n.rg = function () {
    var a = this.z();
    if (!a) {
        this.F();
        a = this.z()
    }
    a = We(Ge.N(), a);
    a.width += 2;
    a.height += 2;
    return a
};n.cd = function () {
    this.$o()
};n.$o = function () {
    var a = this.z();
    if (a) {
        var b = Ws(this.a),
            c = Xs(this.a);
        a.style.width = b + D;
        a.style.height = c + D;
        if (this.Oe) {
            this.Oe.style.width = b + D;
            this.Oe.style.height = c + D
        }
    }
};n.CC = function () {
    return new hx(k, new bd(2, 2), k)
};
var rla = "kix-embeddedobjectview-drag",
    xB = "images/cleardot.gif";n.ga = function () {
    wB.p.ga.call(this);
    if (this.f && this.g) {
        if (!this.Yj) {
            var a = bc(Ez, Ws(this.a), Ky, Xs(this.a), ly);
            this.Oe = this.J().F(xd, {
                "class": rla,
                style: a,
                src: xB
            });
            y.ia || Pf(this.Oe, 0.5);
            this.J().appendChild(this.z(), this.Oe);
            this.Yj = new Do(this.Oe);
            this.Yj.HB = Math.pow(6, 2)
        }
        this.Ga().C(this.Yj, Mo, this.wZ).C(this.Yj, Zi, this.xZ)
    }
};n.sb = function (a) {
    wB.p.sb.call(this, a);
    this.f || z.ba.add(a, jy)
};n.wZ = function () {
    yB(this, i)
};
var zB = "delta-x",
    AB = "delta-y";n.xZ = function (a) {
    yB(this, l);
    var b = {};
    b[zB] = a.left;
    b[AB] = a.top;
    Ni(M(yv(this.getContext()), Bm), b)
};

function yB(a, b) {
    if (a.IH != b) {
        if (a.Oe) if (b) {
            y.ia && Pf(a.Oe, 0.5);
            a.Oe.src = a.Ej()
        } else {
            y.ia && Pf(a.Oe, v);
            a.Oe.src = xB;
            uf(a.Oe, 0, 0)
        }
        a.IH = b
    }
}
n.q = function () {
    wB.p.q.call(this);
    delete this.a;
    this.Yj && this.Yj.G();
    delete this.Yj
};
var BB = new rr;

function CB(a, b, c, d) {
    var e = wv(a).g == 4;
    return BB.execute(b.O(), a, b, e, c, d)
};

function DB(a, b, c, d, e) {
    wB.call(this, a, b, c, d, e)
}
s(DB, wB);n = DB.prototype;n.Zo = k;n.rg = function () {
    return new cd(4 + Ws(this.a), 4 + Xs(this.a))
};n.Ej = function () {
    var a = this.a,
        b = new cd(Ws(this.a), Xs(this.a)),
        c = wv(this.getContext());
    c = tB(c.FF, window.location.protocol, c.$u, undefined, Fk);
    var d = a.ma();
    a = a.ji();
    c = uB(c);
    b = {
        id: d,
        w: String(Math.ceil(b.width)),
        h: String(Math.ceil(b.height))
    };
    if (a != k) b.rev = String(a);
    b.ac = 1;
    return Ot(Tt([c], b))
};
var EB = "padding: 2px";
n.F = function () {
    var a = bc(Ez, Ws(this.a), Ky, Xs(this.a), ly),
        b = this.J(),
        c = this.Ej() || xB;
    this.Zo = b.F(xd, {
        style: a,
        src: c
    });
    this.sb(b.F(sd, {
        style: a + EB
    }, this.Zo));
    this.jb = k
};
var FB = '<img src="',
    GB = '" width="',
    HB = 'px;" height="',
    IB = 'px;" />';n.oK = function () {
    var a = this.Ej();
    return a ? bc(FB, a, GB, Ws(this.a), HB, Xs(this.a), IB) : v
};n.$o = function () {
    DB.p.$o.call(this);
    if (this.Zo) {
        var a = this.a;
        this.Zo.style.width = Ws(a) + D;
        this.Zo.style.height = Xs(a) + D;
        a = this.Ej() || xB;
        z.oy(this.Zo, {
            src: a
        })
    }
};n.Am = function () {
    return 1
};
n.Sb = function () {
    return new P(0)
};n.xc = function () {};
var sla = "DrawingViews can be created only from drawings.";BB.set(2, function (a, b, c, d, e) {
    if (b.O() != 2) {
        a.V.log(Error(sla));
        return k
    }
    return new DB(a, b, c, d, e)
});
var JB = "kix_jstex";

function KB(a, b) {
    iv.call(this, a, b);
    Zr(Qr.N(), JB, this.a2, this, l, l, i)
}
s(KB, vB);n = KB.prototype;n.zC = 0;n.gx = 0;n.AC = v;n.jb = k;n.qg = k;n.Zn = k;n.oD = l;n.Ew = k;n.a2 = function () {
    this.Zn = Mr(Rr(Qr.N(), JB)).a()(Q(this.getContext()), pv(this.getContext()));
    if (this.oD) {
        iz(Iz(this.getContext()), this.zC, this.zC + this.gx - 1);
        Q(this.getContext()).dispatchEvent(ov)
    }
};n.rg = function () {
    return this.jb || new cd(0, 0)
};n.F = function () {
    var a = this.J().F(sd, jy);
    a.dir = Wx;
    a.innerHTML = this.Ew;
    this.sb(a)
};n.Am = function () {
    return this.gx
};
var LB = "Loading...";n.cd = function (a) {
    var b = Q(this.getContext()).Y().indexOf(rg, a);
    if (b < 0) b = a;
    this.gx = b - a + 1;
    this.AC = ii(Q(this.getContext()).oa(ih, a));
    if (this.Zn) {
        this.Ew = this.Zn.Ja(a, this.AC);
        this.jb = this.Zn.jb;
        this.qg = this.Zn.n;
        this.f = this.Zn.f;
        this.oD = l
    } else {
        this.Ew = LB;
        this.jb = Se(Ge.N(), this.AC, this.Ew);
        this.f = this.qg = k;
        this.oD = i
    }
    this.F();
    this.zC = a
};n.xc = function () {};
n.Sb = function (a, b) {
    if (!this.qg) return k;
    for (var c = Number.MAX_VALUE, d = k, e = 0; e < this.qg.length; ++e) {
        var g = this.qg[e];
        if (g) {
            g = (a - g.x) * (a - g.x) + (b - g.y) * (b - g.y);
            if (g < c) {
                c = g;
                d = e
            }
        }
    }
    if (d == k) return k;
    return new P(d)
};n.CC = function (a, b, c) {
    if (!this.qg) return k;
    if (!c && !this.f) return k;
    if (a.O() != 0) return k;
    b = a.a - b;
    if (b < 0 || b >= this.gx) return k;
    a = this.qg[b];
    b = this.f[b];
    return a ? new hx(b, a.sa(), i) : k
};
n.rK = function (a) {
    if (!this.qg) return [];
    var b = this.qg[a.start],
        c = this.qg[a.end + 1];
    if (!b || !c) return [];
    b = b.x;
    c = c.x;
    for (var d = Number.MAX_VALUE, e = -Number.MAX_VALUE, g = a.start; g <= a.end; g++) {
        var h = this.qg[g],
            j = this.f[g];
        if (h && j) {
            d = Math.min(h.y, d);
            e = Math.max(h.y + j, e)
        }
    }
    if (d >= e) return [];
    return [new nx(b, d, c - b, e - d)]
};n.q = function () {
    KB.p.q.call(this);
    delete this.jb
};

function MB() {}
Qa(MB);MB.prototype.n = function (a, b, c) {
    if (this.a(a, b.A)) return new KB(b, c);
    return k
};
MB.prototype.a = function (a, b) {
    return E(b.Y(), a) == wg
};
var tla = "kix-footnoteview";

function NB(a, b, c, d, e) {
    yA.call(this, a, b, c, d, tla, e)
}
s(NB, yA);NB.prototype.kI = function () {
    return Jn
};

function OB(a, b) {
    CA.call(this, a, new JA(KA, sf), b)
}
s(OB, GA);n = OB.prototype;n.$G = function (a, b, c) {
    return new NB(this.getContext(), a, b, l, c)
};n.hx = function (a) {
    return [a.u]
};n.ix = function () {
    return ah
};n.EI = function (a) {
    return Q(this.getContext()).Ub(this.wh(), a)
};n.FI = function () {
    var a = Q(this.getContext());
    return PB(a.g, this.wh())
};n.wh = function () {
    return ah
};

function QB(a, b) {
    iv.call(this, a, b)
}
s(QB, vB);n = QB.prototype;n.BC = 0;n.rg = function () {
    return new cd(this.BC, 0)
};
var ula = "px; margin: 0 ",
    vla = "kix-horizontalruleview";n.F = function () {
    var a = bc(Ez, this.BC - 8, ula, 4, ly);
    this.sb(this.J().F(wd, {
        "class": vla,
        style: a
    }))
};n.cd = function (a, b) {
    this.BC = b
};n.xc = function () {};n.Am = function () {
    return 1
};n.Sb = function () {
    return new P(0)
};

function RB() {}
Qa(RB);RB.prototype.n = function (a, b, c) {
    if (this.a(a, b.A)) return new QB(b, c);
    return k
};
var SB = "-";
RB.prototype.a = function (a, b) {
    return E(b.Y(), a) == SB && Za(b.Ub(bh, a))
};

function TB(a, b, c, d, e) {
    wB.call(this, a, b, c, d, e)
}
s(TB, wB);n = TB.prototype;n.jb = k;n.ap = k;n.JZ = k;n.ak = k;n.rg = function () {
    return new cd(4 + Ws(this.a), 4 + Xs(this.a))
};
var wla = "/imageurl";n.Ej = function () {
    if (!this.ap && !ft(this.a)) {
        var a = this.a.uh;
        if (a) {
            var b;
            b = this.getContext().xa;
            var c = b.a[a] || k;
            if (c) return c;
            c = r(this.I2, this);
            var d = b.a[a] || k;
            if (d) Oj(kb(c, d), 0);
            else {
                c = r(b.u, b, c, a);
                a = {
                    id: b.g,
                    image: a
                };
                b.f && xla(b.f, wla, a, r(b.n, b, c))
            }
            return k
        } else if (wv(this.getContext()).FP) this.ap = this.a.Vo
    }
    return this.ap
};
var UB = "kix-imageview";n.I2 = function (a) {
    if (!this.wj) {
        this.ap = a;
        this.z() && z.ba.remove(this.z(), UB);
        if (this.ak) this.ak.src = this.ap
    }
};n.F = function () {
    var a = bc(Ez, Ws(this.a), Ky, Xs(this.a), ly),
        b = this.J(),
        c = this.Ej();
    this.ak = b.F(xd, {
        style: a,
        src: c || xB
    });
    this.sb(b.F(sd, {
        "class": c ? v : UB,
        style: a + EB
    }, this.ak));
    this.jb = k
};n.oK = function () {
    var a = this.Ej();
    return a ? bc(FB, a, GB, Ws(this.a), HB, Xs(this.a), IB) : v
};
n.$o = function () {
    TB.p.$o.call(this);
    if (this.ak) {
        var a = Ws(this.a),
            b = Xs(this.a);
        this.ak.style.width = a + D;
        this.ak.style.height = b + D;
        if (this.z() && this.a.uh != this.JZ) {
            this.ap = k;
            this.Ej()
        }
    }
};n.Am = function () {
    return 1
};n.Sb = function () {
    return new P(0)
};n.xc = function () {};n.q = function () {
    TB.p.q.call(this);
    delete this.jb;
    delete this.ak
};
var yla = "ImageViews can be created only from images.";BB.set(0, function (a, b, c, d, e) {
    if (b.O() != 0) {
        a.V.log(Error(yla));
        return k
    }
    return new TB(a, b, c, d, e)
});

function VB(a, b) {
    iv.call(this, a, b)
}
s(VB, iv);
var zla = "kix-bubbleview-bubble kix-unprintable";VB.prototype.F = function () {
    this.sb(this.J().F(sd, zla))
};VB.prototype.ga = function () {
    VB.p.ga.call(this);
    this.Ga().C(this.z(), Co, this.f, l, this)
};VB.prototype.f = function (a) {
    a.stopPropagation()
};

function WB(a, b) {
    iv.call(this, a, b)
}
s(WB, VB);n = WB.prototype;n.dk = k;n.gp = k;n.KG = k;n.OL = k;
var XB = "A",
    YB = "_blank",
    ZB = "kix-bubbleview-link",
    Ala = "Change",
    $B = "Remove",
    Bla = "Go to link: ",
    aC = " - ";
n.F = function () {
    WB.p.F.call(this);
    var a = this.J(),
        b = this.gp = a.F(XB, {
            target: YB
        }),
        c = this.KG = a.F(Ne, ZB, Ala),
        d = this.OL = a.F(Ne, ZB, $B);
    this.X(l);
    var e = this.z();
    a.appendChild(e, a.createTextNode(Bla));
    a.appendChild(e, b);
    a.appendChild(e, a.createTextNode(aC));
    a.appendChild(e, c);
    a.appendChild(e, a.createTextNode(aC));
    a.appendChild(e, d)
};
var bC = "contextmenu";n.ga = function () {
    WB.p.ga.call(this);
    this.Ga().C(this.gp, Ud, this.LZ).C(this.KG, Ud, this.vU).C(this.OL, Ud, this.VW).C(this.gp, bC, this.KZ)
};
n.LZ = function (a) {
    switch (this.dk.O()) {
    case 0:
        if (Jv(this.dk.a)) {
            var b = Mt(Nt(this.dk.a));
            window.location.hash = b;
            a.preventDefault()
        }
        break;
    default:
        a.preventDefault();
        break
    }
};n.vU = function () {
    Ni(M(yv(this.getContext()), sm))
};n.VW = function () {
    Ni(M(yv(this.getContext()), Jl));
    this.X(l)
};n.KZ = function (a) {
    a.stopPropagation()
};n.X = function (a) {
    if (a && this.dk.O() == 0) {
        cC(this);
        var b = this.dk.a;
        if (Jv(b) && Mt(Nt(b)) == window.location.hash) window.location.hash = v
    }
    WB.p.X.call(this, a)
};
var dC = "mailto:",
    Cla = "http://www.google.com/url?q=";

function cC(a) {
    if (a.gp && a.dk) {
        var b = a.dk.a,
            c = a.gp,
            d;
        if (Jv(b, void 0) || Hb(b, dC)) d = b;
        else d = zv(b) != b ? b : Cla + encodeURIComponent(b);c.href = d;a.J().Ud(a.gp, zv(b))
    }
};

function eC() {}
Qa(eC);eC.prototype.f = Ha(0);

function fC() {
    this.a = new rr
}
s(fC, Pi);fC.prototype.Sd = function (a, b) {
    this.a.set(a, b);
    NA(this, k, a)
};

function OA(a, b) {
    a.a.remove(b);
    NA(a, k, b)
}
function NA(a, b, c) {
    a.dispatchEvent(new gC(b, c))
}
var hC = "updateoverlays";

function gC(a, b) {
    Pd.call(this, hC);
    this.a = a || k;
    this.key = b || k
}
s(gC, Pd);

function iC(a) {
    this.a = a
}
iC.prototype.toString = function () {
    return this.a
};
var jC = "all";

function kC() {
    this.a = jC
}
s(kC, iC);Qa(kC);kC.prototype.uy = function () {
    return l
};

function lC() {
    this.a = Gi
}
s(lC, iC);Qa(lC);lC.prototype.uy = function (a) {
    return a == 2
};
var Dla = "time";

function mC(a) {
    this.a = Dla;
    this.f = a || lb;
    this.g = this.f()
}
s(mC, iC);
var Ela = Number(Yt(window.location.href, "redrawTime")) || 100;mC.prototype.uy = function () {
    return this.f() > this.g + Ela
};
var Fla = "spacerIndex";

function nC(a) {
    this.a = Fla;
    this.f = a
}
s(nC, iC);
nC.prototype.uy = function (a, b) {
    return b > this.f
};

function oC(a, b) {
    iv.call(this, a, b)
}
s(oC, iv);n = oC.prototype;n.ek = k;n.Bs = k;n.Lr = k;n.JL = k;
var Gla = "Inline",
    Hla = "Fixed",
    Ila = "Position: ";n.F = function () {
    var a = this.J(),
        b = this.Bs = a.F(Ne, k, Gla),
        c = this.Lr = a.F(Ne, k, Hla),
        d = this.JL = a.createTextNode(Ila);
    this.sb(a.F(sd, jy, d, b, a.createTextNode(aC), c))
};n.ga = function () {
    oC.p.ga.call(this);
    this.Ga().C(this.Bs, Ud, r(this.sK, this, l)).C(this.Lr, Ud, r(this.sK, this, i))
};
n.sK = function (a) {
    var b = a ? ut : Lf;
    if (this.ek.O() != b) {
        b = {};
        b.entityId = this.ek.ma();
        b.posd = a;
        Ni(M(yv(this.getContext()), Cm), b)
    }
};
var pC = "kix-bubbleview-label";

function qC(a, b) {
    a.ek = b;
    if (a.ek) if (a.ek.O() == Lf) {
        a.Lr.className = ZB;
        a.Bs.className = pC
    } else {
        a.Bs.className = ZB;
        a.Lr.className = pC
    }
}
n.q = function () {
    oC.p.q.call(this);
    delete this.ek;
    delete this.Bs;
    delete this.Lr;
    delete this.JL
};

function rC(a, b) {
    iv.call(this, a, b);
    this.a = new oC(a, b);
    this.ya(this.a)
}
s(rC, VB);n = rC.prototype;n.pA = k;n.fM = k;
var sC = "Edit";n.F = function () {
    rC.p.F.call(this);
    var a = this.J(),
        b = this.pA = a.F(Ne, ZB, sC),
        c = this.fM = a.createTextNode(aC),
        d = this.z();
    a.appendChild(d, b);
    a.appendChild(d, c);
    this.a.Ja(d)
};n.ga = function () {
    rC.p.ga.call(this);
    this.Ga().C(this.pA, Ud, r(this.hV, this), l, this)
};n.hV = function () {
    var a = {};
    a.drawingId = this.a.ek.a.ma();
    a.entityId = this.a.ek.ma();
    Ni(M(yv(this.getContext()), hm), a)
};
n.q = function () {
    rC.p.q.call(this);
    delete this.a;
    delete this.pA;
    delete this.fM
};

function tC(a, b) {
    iv.call(this, a, b);
    this.a = new oC(a, b);
    this.ya(this.a)
}
s(tC, VB);tC.prototype.F = function () {
    tC.p.F.call(this);
    this.a.Ja(this.z())
};tC.prototype.q = function () {
    tC.p.q.call(this);
    delete this.a
};

function uC(a, b) {
    iv.call(this, a, b);
    this.a = new rC(a, this.J());
    this.ya(this.a);
    this.f = new tC(a, this.J());
    this.ya(this.f);
    this.g = new SA(a.V, wv(a).ZC, b);
    this.ya(this.g)
}
s(uC, iv);n = uC.prototype;n.HC = k;n.F = function () {
    uC.p.F.call(this);
    this.f.Ja(this.z());
    this.a.Ja(this.z());
    this.g.Ja(this.z())
};n.ga = function () {
    uC.p.ga.call(this);
    this.Ga().C(this.g, XA, this.lV)
};
n.lV = function (a) {
    var b = {};
    b.entityId = this.HC.ma();
    b.size = new cd(a.a.width, a.a.height);
    b[zB] = a.a.left - a.g.left;
    b[AB] = a.a.top - a.g.top;
    Ni(M(yv(this.getContext()), $m), b)
};n.q = function () {
    uC.p.q.call(this);
    delete this.f;
    delete this.a;
    delete this.g;
    delete this.HC
};

function vC(a, b, c) {
    this.A = a;
    this.a = b;
    this.L = new ze(this);
    this.L.C(a, nv, this.u);
    this.n = r(this.g, this);
    this.f = c;
    this.X(i)
}
s(vC, t);
var Jla = y.Fc ? "kix-selection-overlay-mac" : "kix-selection-overlay",
    wC = "kix-overlay-selection";vC.prototype.X = function (a) {
    a ? this.a.Sd(wC, r(this.n, this)) : OA(this.a, wC)
};

function xC(a, b, c, d) {
    var e = k;
    if (c.O() == 0 && d.O() == 0) {
        c = c.a;
        d = d.a;
        if (c != d) {
            e = new nb(c, d);
            e.end--
        }
    }
    b = Ev(b);
    if (Gw(a.A, b)) b = k;
    if (e || b) if (e && b && Math.max(e.start, b.start) <= Math.min(e.end, b.end)) NA(a.a, new nb(Math.min(b.start, e.start), Math.max(b.end, e.end)), wC);
    else {
        e && NA(a.a, e, wC);
        b && NA(a.a, b, wC)
    }
}
vC.prototype.u = function (a) {
    xC(this, this.A.ra(), a.a, a.u)
};

function yC(a, b, c, d, e) {
    c = Ev(c);
    if (!c) return k;
    if (Gw(a.A, c)) return k;
    if (b = ob(b, c)) return new zC(b, a.A, d, e);
    return k
}
var Kla = "self";
vC.prototype.g = function (a) {
    var b = [],
        c = this.f.Bj();
    for (var d in c) {
        var e = c[d];
        (e = yC(this, a, e.ra(), d, e.Cj())) && b.push(e)
    }(e = yC(this, a, this.A.ra(), Kla)) && b.push(e);
    return b.length > 0 ? b : k
};vC.prototype.q = function () {
    vC.p.q.call(this);
    this.L.G();
    delete this.L;
    delete this.A;
    delete this.a;
    delete this.f
};

function zC(a, b, c, d) {
    jx.call(this, a, Jla);
    this.A = b;
    this.f = c;
    this.g = d || k
}
s(zC, jx);n = zC.prototype;n.$Z = function () {
    return this.f
};
n.Sr = function () {
    var a = zC.p.Sr.call(this);
    if (!a || a.length == 0) return a;
    a = Ac(a);
    var b = this.a.end;
    if (Hg(this.A.a, b) || E(this.A.a, b) == Ig) if (Sh(this.A.oa(eh, b))) {
        b = a.length - 1;
        a[b] = new lx(a[b].Ic(), a[b].Wb(), a[b].Rc() + 7, a[b].uf())
    } else a[0] = new lx(a[0].Ic() - 7, a[0].Wb(), a[0].Rc() + 7, a[0].uf());
    for (b = 0; b < a.length; b++) a[b] = new lx(a[b].Ic(), a[b].Wb(), a[b].Rc(), a[b].uf() - 2);
    return a
};n.Le = function (a) {
    if (a.$Z) {
        var b = this.f,
            c = a.f;
        if (b < c) return -1;
        else if (b > c) return 1
    }
    return zC.p.Le.call(this, a)
};
var AC = "background-color:",
    Lla = ";border-top-color:",
    Mla = ";border-bottom-color:";n.uv = function (a) {
    a = zC.p.uv.call(this, a);
    if (this.g) a.style.cssText = bc(AC, this.g, Lla, this.g, Mla, this.g, Tf);
    return a
};n.q = function () {
    zC.p.q.call(this);
    delete this.A
};

function BC() {
    this.g = [];
    this.u = [];
    this.f = [];
    this.a = [];
    this.n = {}
}
s(BC, t);n = BC.prototype;n.yr = i;n.uj = i;n.BA = 0;n.Zm = 0;n.Fi = 0;n.SG = k;

function CC(a, b) {
    if (a.yr) {
        var c = a.SG || [],
            d = 0,
            e = a.Fi;
        if (c) for (var g = 0; g < c.length; g++) {
            var h = c[g];
            if (p(h)) {
                d += h;
                e--
            }
        }
        d = (a.BA - d) / e;
        d = Math.floor(d);
        d = Math.max(d, Xe(Ge.N(), 18));
        for (g = 0; g < a.Fi; g++) p(c[g]) || (c[g] = d);
        a.u = c;
        a.yr = l
    }
    return a.u[b]
}
function DC(a, b) {
    a.uj && EC(a);
    return a.g[b]
}
function FC(a, b, c, d) {
    a.a[b] || (a.a[b] = []);
    if (d != a.a[b][c]) {
        a.a[b][c] = d;
        a.uj = i
    }
}

function EC(a) {
    for (var b = [], c = 0; c < a.Zm; c++) {
        var d = 0,
            e = a.a[c];
        if (e) for (var g = 0; g < e.length; g++) d = Math.max(d, e[g]);
        b[c] = Math.max(a.f[c] || 0, d)
    }
    for (c = 0; c < b.length; c++) if (b[c] != a.g[c]) a.n[c] = c;
    a.g = b;
    a.uj = l
}
n.q = function () {
    BC.p.q.call(this);
    delete this.g;
    delete this.u;
    delete this.f;
    delete this.a;
    delete this.n
};

function GC(a, b, c) {
    iv.call(this, a, c);
    this.g = b;
    this.f = Xe(Ge.N(), 1);
    this.a = new yz(a, b - this.f, c);
    this.a.sA = Nla;
    this.ya(this.a)
}
s(GC, ex);n = GC.prototype;n.xC = 0;n.wC = v;n.fx = 2;n.Rs = di;n.ex = k;
var Ola = "kix-cellview-inner",
    HC = "TD",
    Pla = "kix-cellview",
    Qla = "border: ",
    Rla = "px solid ";n.F = function () {
    this.a.F();
    var a = this.J();
    this.ex = a.F(sd, Ola, this.a.z());
    this.sb(a.F(HC, {
        "class": Pla,
        style: Qla + this.f + Rla + this.Rs
    }, this.ex))
};n.Rb = function (a) {
    this.a.Rb(a);
    IC(this)
};

function JC(a, b) {
    var c = Ge.N(),
        d = Q(a.getContext());
    if (d.f.f) {
        d = d.oa(Ug, b);
        var e = d.Nr();
        if (e != a.wC) {
            a.wC = e;
            a.z().style.backgroundColor = e
        }
        e = d.po();
        if (e != a.fx) {
            a.fx = e;
            IC(a)
        }
        Cz(a.a, Xe(c, d.tm), Xe(c, d.Ls), Xe(c, d.Js), Xe(c, d.Ks))
    } else {
        c = Xe(c, 5);
        Cz(a.a, c, c, c, c)
    }
}
function KC(a, b) {
    if (b != a.f) {
        a.f = b;
        a.z().style.borderWidth = b + D;
        zz(a.a, a.g - b)
    }
}
n.Nr = function () {
    return this.wC
};n.po = function () {
    return this.fx
};

function IC(a) {
    var b = a.a;
    a: {
        var c = a.xC,
            d = a.a.vd();
        switch (a.fx) {
        case 0:
            a = c - d;
            break a;
        case 1:
            a = (c - d) / 2;
            break a
        }
        a = 0
    }
    jv(b, 0, a)
}
n.pg = function (a, b, c) {
    this.a.pg(a, b, c)
};n.Lc = function (a, b, c) {
    this.a.Lc(a, b, c)
};n.tc = function () {
    return this.a.tc()
};n.ye = function (a) {
    return this.a.ye(a)
};n.Sb = function (a, b, c) {
    var d = this.a;
    return this.a.Sb(a - d.Ic(), b - d.Wb(), c)
};n.Gf = function (a, b, c) {
    if (a = this.a.Gf(a, b, c)) {
        a.a.x += this.a.Ic();
        a.a.y += this.a.Wb()
    }
    return a
};n.qd = function (a, b, c) {
    return this.a.qd(a, b, c)
};n.xe = function (a) {
    return this.a.xe(a)
};
n.xc = function () {
    this.a.xc()
};n.q = function () {
    GC.p.q.call(this);
    delete this.a
};

function Nla(a, b) {
    switch (E(a.Y(), b + 1)) {
    case mg:
    case ng:
    case lg:
        return i;
    default:
        return l
    }
};

function LC(a, b, c) {
    Qo.call(this, c);
    this.a = a;
    this.V = b
}
s(LC, Qo);n = LC.prototype;n.uK = 1;n.zh = k;n.ve = k;n.fk = k;n.SI = k;n.Fv = k;n.vt = k;n.on = k;n.rA = i;n.vK = v;n.nA = 0;n.oA = 0;
var Sla = "kix-table-resize-dragger",
    Tla = "kix-table-resize-guide";n.F = function () {
    var a = this.J();
    this.ve = a.F(sd, Sla);
    this.ve.style.display = Hf;
    this.zh = a.F(sd, Tla);
    this.zh.style.display = Hf;
    this.sb(a.F(sd, undefined, [this.ve, this.zh]))
};n.ga = function () {
    this.fk = new Do(this.ve)
};

function MC(a, b) {
    if (b) {
        a.ve.style.display = v;
        So(a).C(a.ve, Co, a.j_).C(a.fk, Io, a.h_).C(a.fk, Oo, a.i_).C(a.fk, Zi, a.g_)
    } else {
        a.ve.style.display = Hf;
        So(a).a(a.ve, Co);
        So(a).a(a.fk, Io).a(a.fk, Oo).a(a.fk, Zi)
    }
}
n.j_ = function (a) {
    a.stopPropagation()
};n.h_ = function (a) {
    this.rA = l;
    var b = NC(this, this.Fv);
    this.nA = a.clientX;
    this.oA = a.clientY;
    this.vt = b.sa();
    OC(this, b);
    this.zh.style.display = v
};
n.i_ = function (a) {
    var b = this.on.a,
        c = this.vt.sa();
    if (b == tf || b == Ds) c.top = this.vt.top + (a.clientY - this.oA);
    else c.left = this.vt.left + (a.clientX - this.nA);
    OC(this, NC(this, c))
};
var PC = "rowresize",
    Ula = "Cannot create row resize event, bad input.",
    QC = "columnresize",
    Vla = "Cannot create column resize event, bad input.";
n.g_ = function (a) {
    var b = this.on.a;
    if (b == tf || b == Ds) {
        b = this.on;
        var c = this.oA;
        if (b) b = new RC(PC, [b.a == tf ? b.qe - 1 : b.qe], k, [a.clientY - c], k);
        else {
            this.V.log(Error(Ula));
            b = k
        }
        b && this.dispatchEvent(b)
    } else {
        var d = this.on;
        b = this.a.Fi;
        c = this.nA;
        if (d) {
            c = a.clientX - c;
            var e, g = [],
                h = [];
            if (d.a == $i) {
                e = d.se;
                d = d.se + 1
            } else {
                e = d.se - 1;
                d = d.se
            }
            if (d < b) {
                g.push(e);
                h.push(c);
                g.push(d);
                h.push(c * -1)
            } else {
                for (d = 0; d < b - 1; d++) {
                    g.push(d);
                    h.push(0)
                }
                g.push(e);
                h.push(c)
            }
            b = new RC(QC, k, g, k, h)
        } else {
            this.V.log(Error(Vla));
            b = k
        }
        b && this.dispatchEvent(b)
    }
    this.zh.style.display =
    Hf;
    this.rA = i;
    SC(this, this.uK, a.left, a.top, i)
};
var Wla = "Cannot create Guide Rectangle.";

function NC(a, b) {
    if (!b) {
        a.V.log(Error(Wla));
        return new mf(0, 0, 0, 0)
    }
    var c = b.sa();
    if (b.width < b.height) {
        c.width = 1;
        c.left += b.width / 2
    } else {
        c.height = 1;
        c.top += b.height / 2
    }
    return c
}
function OC(a, b) {
    a.SI = b;
    a.zh.style.top = b.top + D;
    a.zh.style.left = b.left + D;
    a.zh.style.width = b.width + D;
    a.zh.style.height = b.height + D
}
var Xla = "row-resize",
    Yla = "col-resize";

function SC(a, b, c, d, e) {
    if (e || a.rA && a.a.Zm > 0 && a.a.Fi > 0) {
        a.uK = b;
        for (var g, h = a.a, j = g = 0, m = 0, o = DC(h, g) + b; o < d && g < h.Zm - 1;) {
            m = o;
            o += DC(h, ++g) + b
        }
        for (var q = 0, u = CC(h, j); u < c && j < h.Fi - 1;) {
            q = u;
            u += CC(h, ++j)
        }
        a: {
            h = d - m;
            d = o - d;
            u = u - c;
            c = c - q;
            q = 0;
            q = g == 0 && j == 0 ? Math.min(d, u) : g == 0 ? Math.min(d, u, c) : j == 0 ? Math.min(h, d, u) : Math.min(h, d, u, c);
            switch (q) {
            case h:
                c = tf;
                break a;
            case d:
                c = Ds;
                break a;
            case c:
                c = sf;
                break a;
            case u:
            default:
                c = $i;
                break a
            }
        }
        g = new TC(g, j, c);
        if (!(j = e)) {
            j = a.on;
            j = j == g ? i : !j || !g ? l : j.qe == g.qe && j.se == g.se && j.a == g.a;j = !j
        }
        if (j) {
            a.on =
            g;
            j = g.qe;
            c = g.se;
            q = g.a;
            h = a.a;
            if (u = !h) {
                b: {
                    if (!(j < 0 || c < 0 || j >= h.Zm || c >= h.Fi)) switch (q) {
                    case tf:
                        u = j != 0;
                        break b;
                    case Ds:
                    case $i:
                        u = i;
                        break b;
                    case sf:
                        u = c != 0;
                        break b
                    }
                    u = l
                }
                u = !u
            }
            if (u) b = new mf(0, 0, 0, 0);
            else {
                m = o = d = u = 0;
                y.La && d++;
                if (q == tf || q == Ds) {
                    for (var w = 0; w < j; w++) u += DC(h, w) + b;
                    for (w = 0; w < h.Fi; w++) m += CC(h, w);
                    o = 7;
                    u += b / 2 - o / 2
                }
                if (q == $i || q == sf) {
                    for (w = 0; w < c; w++) d += CC(h, w);
                    d -= b / 2;
                    for (w = 0; w < h.Zm; w++) o += DC(h, w) + b;
                    o += b;
                    m = 7;
                    d += b / 2 - m / 2
                }
                switch (q) {
                case Ds:
                    u += DC(h, j) + b;
                    break;
                case $i:
                    d += CC(h, c);
                    break
                }
                b = new mf(d, u, m, o)
            }
            a: switch (g.a) {
            case tf:
            case Ds:
                g =
                Xla;
                break a;
            case $i:
            case sf:
                g = Yla;
                break a;
            default:
                g = v;
                break a
            }
            if (e || b && Za(g) && (!nf(a.Fv, b) || a.vK != g)) {
                e = b;
                b = g;
                a.Fv = e;
                a.vK = b;
                a.ve.style.top = e.top + D;
                a.ve.style.left = e.left + D;
                a.ve.style.width = e.width + D;
                a.ve.style.height = e.height + D;
                a.ve.style.cursor = b
            }
        }
    }
}
n.q = function () {
    LC.p.q.call(this);
    delete this.zh;
    delete this.ve;
    delete this.fk;
    delete this.SI;
    delete this.Fv;
    delete this.vt;
    delete this.on
};

function TC(a, b, c) {
    this.qe = a;
    this.se = b;
    this.a = c
}
TC.prototype.sa = function () {
    return new TC(this.qe, this.se, this.a)
};

function RC(a, b, c, d, e) {
    Pd.call(this, a);
    this.rows = b;
    this.br = c;
    this.P = d;
    this.K = e
}
s(RC, Pd);

function UC(a, b, c) {
    iv.call(this, a, c);
    a.Oa.register(this.ma(), b);
    this.P = [];
    this.a = [];
    this.f = new BC;
    this.g = k;
    a = Q(this.getContext()).f;
    if (a.Qh && a.g == 4) this.g = new LC(this.f, pv(this.getContext()));
    this.n = Xe(Ge.N(), 1);
    this.u = new $w(r(this.c1, this))
}
s(UC, ex);n = UC.prototype;n.JC = l;n.IC = l;n.zE = k;n.Zp = k;n.xl = k;n.or = k;n.wK = di;n.$v = l;n.xv = l;
var Zla = "TBODY",
    VC = "TABLE",
    $la = "kix-tableview",
    ama = "margin-left:",
    bma = "kix-tableview-container";
n.F = function () {
    var a = this.J();
    this.zE = a.F(Zla);
    this.Zp = a.F(VC, {
        "class": $la,
        style: ama + -this.n,
        direction: Wx
    }, this.zE);
    this.sb(a.F(sd, bma, this.Zp));
    this.g && this.g.Ja(this.z())
};n.ga = function () {
    UC.p.ga.call(this);
    this.g && this.Ga().C(Q(this.getContext()), nv, this.k_).C(this.g, QC, this.VI).C(this.g, PC, this.mJ)
};n.l_ = function (a) {
    var b = Ef(this.z());
    SC(this.g, this.n, a.clientX - b.x, a.clientY - b.y)
};
n.VI = function (a) {
    for (var b = {}, c = Ge.N(), d = [], e = [], g = 0; g < a.br.length; g++) {
        e.push(0);
        var h = (CC(this.f, a.br[g]) + a.K[g]) / Ye(c);
        d.push(Math.max(h, 18))
    }
    b.rscolI = a.br;
    b.rscolWT = e;
    b.rscolWV = d;
    b.tblST = WC(this);
    Ni(M(yv(this.getContext()), uo), b)
};n.mJ = function (a) {
    for (var b = {}, c = Ge.N(), d = [], e = [], g = WC(this), h = 0; h < a.rows.length; h++) {
        var j = XC(this, a.rows[h], 0);
        if (j != 0) {
            j += g - 2;
            d.push(j);
            j = (DC(this.f, a.rows[h]) + a.P[h]) / Ye(c);
            e.push(Math.max(j, 0))
        }
    }
    b.rrSI = d;
    b.rrH = e;
    Ni(M(yv(this.getContext()), uo), b)
};
n.k_ = function () {
    var a;
    a = qu(Q(this.getContext()));
    var b = WC(this),
        c = uu(Q(this.getContext()), WC(this));
    if ((a = a > b && a < c) && !this.xv) {
        this.xv = i;
        MC(this.g, i);
        this.Ga().C(this.z(), Fo, this.l_).C(this.g, QC, this.VI).C(this.g, PC, this.mJ)
    } else if (!a && this.xv) {
        this.xv = l;
        MC(this.g, l);
        this.Ga().a(this.z(), Fo).a(this.g, QC).a(this.g, PC)
    }
};

function WC(a) {
    var b = cA(a.getContext());
    return dA(b, a.ma())
}
var cma = "Should not redraw the table until the visible state is updated.",
    dma = "Attempted to set cell height with null inner element.",
    ema = "separate",
    fma = "collapse";
n.Rb = function (a) {
    if (this.xl == k || this.or == k) pv(this.getContext()).log(Error(cma));
    var b = Q(this.getContext()),
        c = uu(b, a),
        d = this.f,
        e = Bz(this.ib.ib);
    if (e != d.BA) {
        d.BA = e;
        d.yr = i
    }
    d = this.f;
    b = qia(b, a);
    if (b != d.Fi) {
        d.Fi = b;
        d.yr = i
    }
    Iz(this.getContext()).Zv(this.m_, this, a, c);
    a = this.f;
    a.uj && EC(a);
    c = a.n;
    a.n = {};
    for (var g in c) {
        d = c[g];
        if (b = this.a[d]) {
            d = DC(a, d);
            e = 0;
            for (var h; h = b[e]; e++) {
                h = h;
                var j = d;
                if (h.ex) {
                    if (j != h.xC) {
                        h.ex.style.height = j + D;
                        h.xC = j;
                        IC(h)
                    }
                } else pv(h.getContext()).log(Error(dma))
            }
        }
    }
    if (this.$v) {
        this.$v = l;
        this.Zp.style.borderCollapse = ema;
        if (g = this.Zp) QA = g.offsetHeight;
        this.Zp.style.borderCollapse = fma
    }
};
n.m_ = function (a, b, c, d) {
    if (a > d) return i;
    if (tu(Q(this.getContext()), a) != c) {
        YC(this, c, a);
        bx(this.u, ZC(this, c, a));
        return l
    }
    switch (b) {
    case Zf:
        a: {
            b = E(Q(this.getContext()).Y(), a);
            d = Iz(this.getContext());
            switch (b) {
            case kg:
                this.JC = i;
                $C(this, c);
                vz(d, a, 1);
                break a;
            case ng:
                this.IC = i;
                vz(d, a, 1);
                break a;
            case lg:
                d = Q(this.getContext());
                b = ZC(this, c, a);
                var e = this.f;
                e.Zm++;
                e.uj = i;
                wc(e.a, b, 0, []);
                wc(e.f, b, 0, 0);
                if (d.f.f) {
                    e = d.oa(fh, a);
                    d = this.f;
                    e = Xe(Ge.N(), e.Vj);
                    if (e != d.f[b]) {
                        d.f[b] = e;
                        d.uj = i
                    }
                }
                d = this.J();
                e = d.F(Cf);
                var g = this.P[b];
                g ? d.No(e, g) : d.appendChild(this.zE, e);wc(this.a, b, 0, []);wc(this.P, b, 0, e);vz(Iz(this.getContext()), a, 1);
                break;
            case mg:
                g = Q(this.getContext());b = ZC(this, c, a - 1);d = aD(this, c, a - 1, b) + 1;e = this.J();e = new GC(this.getContext(), CC(this.f, d), e);this.ya(e);
                var h = this.a[b][d];h ? e.QD(h.z()) : e.Ja(this.P[b]);wc(this.a[b], d, 0, e);
                if (g.f.f) {
                    g = g.oa(hh, c);
                    JC(e, a);
                    h = g.um;
                    if (h != e.Rs) e.z().style.borderColor = e.Rs = h;
                    KC(e, Xe(Ge.N(), g.vm))
                }
                Za(this.or) && Za(this.xl) && this.xl && e.Lc(a + 1, this.or - e.z().offsetTop, this.xl);vz(Iz(this.getContext()), a, 1);FC(this.f, b, d, e.a.vd());
                if (y.Ua) this.$v = i;
                break;
            default:
                YC(this, c, a)
            }
            bx(this.u, ZC(this, c, a))
        }
        break;
    case Yf:
        a: {
            b = rz(Iz(this.getContext()), a).charAt(0);
            d = Iz(this.getContext());
            switch (b) {
            case kg:
                this.JC = l;
                sz(d, a, -1);
                break a;
            case ng:
                this.IC = l;
                sz(d, a, -1);
                break a;
            case lg:
                b = E(Q(this.getContext()).Y(), a) == ng ? this.P.length - 1 : ZC(this, c, a);d = 1;e = this.a[b];
                for (g = 0; h = e[g]; g++) {
                    d += h.tc() + 1;
                    this.removeChild(h, i);
                    h.G()
                }
                yc(this.a, b);e = this.P[b];this.J().removeNode(e);yc(this.P, b);e = this.f;e.Zm--;e.uj = i;yc(e.a, b);yc(e.f, b);sz(Iz(this.getContext()), a, -d);
                break;
            case mg:
                b = E(Q(this.getContext()).Y(), a);
                if (b == ng) {
                    b = this.a.length - 1;
                    d = this.a[b].length - 1
                } else if (b == lg) {
                    b = ZC(this, c, a);
                    d = this.a[b].length - 1
                } else {
                    b = ZC(this, c, a);
                    d = aD(this, c, a, b)
                }
                e = this.a[b][d];g = e.tc() + 1;this.removeChild(e, i);e.G();yc(this.a[b], d);sz(Iz(this.getContext()), a, -g);
                break;
            default:
                YC(this, c, a)
            }
            bx(this.u, ZC(this, c, a))
        }
        break;
    default:
        a: {
            b = E(Q(this.getContext()).Y(), a);
            d = Iz(this.getContext());
            switch (b) {
            case kg:
                $C(this, c);
                vz(d, a, 0);
                break a;
            case ng:
                vz(d, a, 0);
                break a;
            case lg:
                b = Q(this.getContext());
                if (b.f.f) {
                    e = b.oa(fh, a);
                    b = this.f;
                    d = ZC(this, c, a);
                    e = Xe(Ge.N(), e.Vj);
                    if (e != b.f[d]) {
                        b.f[d] = e;
                        b.uj = i
                    }
                }
                vz(Iz(this.getContext()), a, 0);
                break;
            case mg:
                if (Q(this.getContext()).f.f) {
                    b = ZC(this, c, a);
                    d = aD(this, c, a, b);
                    JC(this.a[b][d], a);
                    vz(Iz(this.getContext()), a, 0)
                }
                break;
            default:
                YC(this, c, a)
            }
            bx(this.u, ZC(this, c, a))
        }
        break
    }
    return l
};
var gma = "Provider asked for index past the end of the rows element array.",
    hma = "Requested row index past the end of the rows element array.";
n.c1 = function (a, b) {
    if (a < 0) return 0;
    if (a >= this.a.length) {
        pv(this.getContext()).log(Error(gma));
        return b + 1
    }
    var c;
    if (a >= this.a.length || a < 0) {
        pv(this.getContext()).log(Error(hma));
        c = 0
    } else {
        c = 0;
        var d = this.a[a];
        if (d) {
            c++;
            for (var e = 0, g; g = d[e]; e++) c += g.tc() + 1
        }
        c = c
    }
    return b + c
};

function ZC(a, b, c) {
    return a.u.indexOf(c - b - 1)
}
function aD(a, b, c, d) {
    var e = a.a[d];
    a = a.u.ea(d) + b + 1;
    b = -1;
    if (a == c) return b;
    for (var g = d = 0, h; h = e[g]; g++) {
        b++;
        d += h.tc() + 1;
        if (c <= d + a) return b
    }
    return b
}

function $C(a, b) {
    var c = Q(a.getContext());
    if (c.f.f) {
        var d = c.oa(hh, b);
        c = a.f;
        for (var e = Ft(d), g = [], h = Ge.N(), j = 0; j < e.length; j++) {
            var m = e[j];
            if (m && m.tn != 1) g[j] = Math.max(Xe(h, 18), Xe(h, m.pq))
        }
        c.SG = g;
        c.yr = i;
        c = Xe(Ge.N(), d.vm);
        d = d.um;
        if (c != a.n) {
            a.Zp.style.marginLeft = -Math.floor(c / 2) + D;
            if (y.Ua) a.$v = i
        }
        if (c != a.n || d != a.wK) for (e = 0; g = a.a[e]; e++) for (h = 0; j = g[h]; h++) {
            m = j;
            var o = d;
            if (o != m.Rs) m.z().style.borderColor = m.Rs = o;
            KC(j, c)
        }
        a.n = c;
        a.wK = d
    }
}

function YC(a, b, c) {
    var d = ZC(a, b, c - 1);
    c = aD(a, b, c - 1, d);
    b = b + XC(a, d, c);
    var e = a.a[d][c],
        g = CC(a.f, c);
    if (g != e.g) {
        zz(e.a, g - e.f);
        e.g = g
    }
    e.Rb(b);
    FC(a.f, d, c, e.a.vd())
}
n.pg = function (a, b, c) {
    for (var d = 1, e = 0, g; g = this.a[e]; e++) {
        d++;
        for (var h = 0, j; j = g[h]; h++) {
            d++;
            j.pg(a + d, b, c);
            d += j.tc()
        }
    }
};n.Lc = function (a, b, c) {
    this.or = b;
    this.xl = c;
    b = 1;
    c = 0;
    for (var d; d = this.a[c]; c++) {
        b++;
        for (var e = 0, g; g = d[e]; e++) {
            b++;
            this.xl && g.Lc(a + b, this.or - g.z().offsetTop, this.xl);
            b += g.tc()
        }
    }
};
n.tc = function () {
    return this.u.ea(this.a.length) + (this.JC ? 1 : 0) + (this.IC ? 1 : 0)
};

function bD(a, b) {
    return b > 0 && b < a.tc() && aD(a, 0, b, ZC(a, 0, b)) != -1
}
n.ye = function (a) {
    var b = Ou(Q(this.getContext()), a);
    if (!bD(this, b)) return k;
    var c = ZC(this, 0, b);
    b = aD(this, 0, b, c);
    return this.a[c][b].ye(a.shift(-XC(this, c, b)))
};
n.Sb = function (a, b) {
    for (var c = 1, d = this.n, e = 0, g; g = this.a[e]; e++) {
        c++;
        for (var h = e == this.a.length - 1, j = e == 0, m = DC(this.f, e), o = Math.ceil(this.n / 2), q = 0, u; u = g[q]; q++) {
            c++;
            var w = q == 0,
                C = q == g.length - 1,
                B = CC(this.f, q);
            if ((j || d <= b) && (w || o <= a) && (h || d + m >= b) && (C || o + B >= a)) if (w = u.Sb(a - o, b - d, i)) return w.shift(c);
            o += B;
            c += u.tc()
        }
        d += m + this.n
    }
    return new P(c, i)
};
n.Gf = function (a, b) {
    var c = Ou(Q(this.getContext()), a);
    if (!bD(this, c - b)) return k;
    var d = ZC(this, b, c);
    c = aD(this, b, c, d);
    var e = XC(this, d, c) + b;
    if (e = this.a[d][c].Gf(a, e)) {
        for (var g = Math.ceil(this.n / 2), h = 0; h < c; h++) g += CC(this.f, h);
        c = this.n;
        for (h = 0; h < d; h++) c += DC(this.f, h) + this.n;
        e.a.x += g;
        e.a.y += c
    }
    return e
};
n.qd = function (a, b, c) {
    var d = a.a;
    if (!bD(this, d)) return k;
    var e = ZC(this, 0, d),
        g = aD(this, 0, d, e),
        h = XC(this, e, g),
        j = this.a[e][g];
    d = j.z().offsetLeft;
    if (a = j.qd(a.shift(-h), b, c - d)) return a.shift(h);
    a = e + (b ? -1 : 1);
    e = this.a[a] && this.a[a][g];
    if (!e) return k;
    b = b ? Number.MAX_VALUE : 0;g = XC(this, a, g);
    return e.Sb(c - d, b, i).shift(g)
};n.xe = function (a) {
    var b = Ou(Q(this.getContext()), a);
    if (!bD(this, b)) return k;
    var c = ZC(this, 0, b),
        d = aD(this, 0, b, c);
    b = XC(this, c, d);
    if (a = this.a[c][d].xe(a.shift(-b))) {
        a.start += b;
        a.end += b
    }
    return a
};
var ima = "Row/column index is out of table's range.";

function XC(a, b, c) {
    if (a.a.length <= b || a.a[b].length <= c) {
        pv(a.getContext()).log(Error(ima));
        return 0
    }
    var d = a.u.ea(b) + 3;
    a = a.a[b];
    for (b = 0; b < c; b++) d += a[b].tc() + 1;
    return d
}
n.xc = function () {
    for (var a = 0, b; b = this.a[a]; a++) for (var c = 0, d; d = b[c]; c++) d.xc()
};n.q = function () {
    UC.p.q.call(this);
    delete this.a;
    this.f.G();
    delete this.f;
    delete this.g
};Sz.set(kg, function (a, b, c) {
    return new UC(a, b, c)
});

function cD(a, b, c, d, e, g) {
    iv.call(this, a, g);
    this.Xa = b;
    this.P = this.n = b = c.a;
    g = this.J();
    this.u = c;
    this.Ya = d;
    this.a = [];
    d = wv(a);
    this.Aa = e;
    this.f = new ZA(a, a.A.ra(), jf(d) ? li : undefined,
    !jf(d),
    l,
    g);
    this.g = {};
    this.Oa = new Rw(this.bx, 50, this);
    this.aa = new vC(a.A, a.g, new rw);
    dD(this, b, c, this.f)
}
s(cD, iv);n = cD.prototype;n.rk = k;n.ev = k;n.Rv = k;n.ld = k;n.$d = 0;n.qA = 0;n.Mv = k;n.Vv = k;n.xt = 0;n.Px = 0;n.Kv = k;n.Jv = k;n.Lv = k;n.Ne = k;n.Zf = k;n.Cm = k;n.Xm = k;n.Wj = k;n.sz = l;n.SK = l;n.As = l;n.Wh = k;

function dD(a, b, c, d) {
    var e = a.getContext(),
        g = a.J(),
        h = wv(e);
    a.P = a.n = b;
    a.u = c;
    a.a = [a.u];
    h.aa && a.a.push(new OB(e, g));
    h.u && a.a.push(new LA(e, g));
    for (b = 0; c = a.a[b]; b++) a.ya(c);
    a.f = d;
    a.ya(a.f)
}
var eD = "kix-appview",
    jma = "kix-appview-editor";n.F = function () {
    var a = this.J();
    this.sb(a.F(sd, eD, this.ld = a.F(sd, jma)));
    fD(this)
};n.We = function (a) {
    return z.ba.Pd(a, eD)
};n.ob = function (a) {
    cD.p.ob.call(this, a);
    this.ld = this.J().QA(a);
    fD(this)
};
var gD = "mutation",
    hD = "viewdecorate";
n.ga = function () {
    cD.p.ga.call(this);
    this.z().dir = Wx;
    for (var a = this.Ga(), b = pv(this.getContext()), c = this.ld, d = 0, e; e = this.a[d]; d++) e.Ja(c);
    d = Q(this.getContext());
    e = Hu(d) - 1 + 1;
    fz(Iz(this.getContext()), 1, e);
    this.Rb();
    this.f.Ja(this.P.db());
    a.C(c, af, Pq(b, this.iZ, this)).C(Fy(this.getContext()), hC, this.GW).C(d, nv, Pq(b, this.gZ, this)).C(d, gD, Pq(b, this.lK, this)).C(d, ov, Pq(b, this.kK, this)).C(cB(this.getContext()), yo, this.du).C(cB(this.getContext()), Ao, this.du);
    (c = qv(this.getContext())) && a.C(c, gD, Pq(b, this.lK, this)).C(c, ov, Pq(b, this.kK, this));
    (c = this.getContext().n) && a.C(c, Li, Pq(b, this.aY, this));
    if (!wv(this.getContext()).lb) {
        this.Wj = new Ow(this.z(), Pq(b, this.Ps, this));
        this.Ps()
    }
    Rr(Qr.N(), es).Nb() && iD(this);
    this.bx();
    this.dispatchEvent(new Pd(hD))
};

function fD(a) {
    Zr(Qr.N(), es, r(a.kZ, a), a, undefined, undefined, i)
}
n.kZ = function () {
    var a = wv(this.getContext()),
        b = a.g;
    if (!a.lb && (b == 4 || b == 3) && this.cb) iD(this);
    b = Mr(Rr(Qr.N(), es));
    if (a.Cb) this.ev = b.nS()(this.getContext(), this);
    this.Ya && jD(this);
    if (M(yv(this.getContext()), Rl) && (a.Wc || a.Ie)) this.Vv = new(b.GS())(Q(this.getContext()), yv(this.getContext()), Fy(this.getContext()));
    if (a.n) this.Rv = b.CS()(Q(this.getContext()), Fy(this.getContext()))
};
var kD = "visibility";

function jD(a) {
    var b = Mr(Rr(Qr.N(), es));
    if (b && a.z()) {
        var c = a.J();
        a.rk = b.oS()(a.getContext(), c);
        a.ya(a.rk);
        Zo(a.rk, c.pd(a.z()));
        a.Ga().C(a.rk, kD, Pq(pv(a.getContext()), a.Ps, a))
    }
}
function iD(a) {
    var b = Mr(Rr(Qr.N(), es));
    if (!a.sz) {
        a.sz = i;
        var c = b.aT();
        a.Ga().C(a, b.AI().SN, r(a.hZ, a, c)).C(a, b.AI().hN, r(a.mW, a, c));
        lD(a)
    }
}
n.sg = function (a) {
    cD.p.sg.call(this, a);
    this.f.sg(a);
    this.Ne && this.Ne.sg(a);
    a && mD(this, l);
    this.du(a)
};n.du = function (a) {
    this.aa.X(a)
};n.hZ = function (a, b) {
    b.target instanceof a && Vq(this.Aa, l)
};
n.mW = function (a, b) {
    b.target instanceof a && Vq(this.Aa, i)
};

function nD(a, b) {
    for (var c = 0, d; d = a.a[c]; c++) if (d = d.ye(b)) return d;
    return k
}
function oD(a, b) {
    for (var c = 0, d; d = a.a[c]; c++) if (d = d.iI(b)) return d;
    return k
}
n.Sb = function (a, b, c) {
    b += this.$d;
    a += this.qA;
    a: {
        a = a;
        b = b;
        for (var d = 0, e; e = this.a[d]; d++) {
            var g = a - e.Ic(),
                h = b - e.Wb();
            if (e.HA(g, h)) {
                c = e.Sb(g, h, e == this.u ? c : i);
                break a
            }
        }
        c = k
    }
    return c
};

function mD(a, b) {
    for (var c in a.g) pD(a, a.g[c]);
    var d = Q(a.getContext());
    c = d.ra();
    if (d = oD(a, Ou(d, c.Fa()))) {
        a.n = d;
        pD(a, a.f);
        b && a.scrollIntoView(c.Fa())
    }
}
function pD(a, b, c, d) {
    var e = c || b.ra().Fa();
    if (e) if (!(!nD(a, e) && e.O() == 0)) {
        e = qD(a, e);
        if (a.As || e) b.Rb(e, c, d)
    }
}
function rD(a, b) {
    a && b && a.parentNode != b && b.appendChild(a)
}
n.scrollIntoView = function (a, b) {
    var c = l;
    if (a.O() == 0) {
        var d = Nu(this, a);
        if (d) {
            var e = this.$d,
                g = bf(Ge.N()),
                h = Uu(this),
                j = e + h,
                m = nD(this, a);
            d = this.n.z().offsetTop + d.y + m.Qn;
            d += jf(wv(this.getContext())) ? 10 : 5;
            var o = d + m.Yf + 5;
            if (this.Mv == k) this.Mv = this.ld.scrollWidth;
            if (this.Mv + g > sD(this)) o += g;m = m.uf() > h;
            var q = d < j && o > e;
            if (!(m && q)) {
                if (o > j && !b) {
                    this.$d = this.ld.scrollTop = o - h;
                    c = i
                } else if (d < e || b) {
                    this.$d = Math.min(d, Vu(this) - h + g);
                    this.ld.scrollTop = this.$d;
                    c = i
                }
                y.ia && c && this.bx()
            }
        }
    }
};

function Nu(a, b) {
    var c = qD(a, b, i);
    return c ? c.a : k
}
function qD(a, b, c) {
    for (var d = 0, e; e = a.a[d]; d++) if (e = e.rC(b, undefined, c)) return e;
    return k
}
function Tu(a, b) {
    var c = a.u,
        d;
    if (d = (d = c.rC(b, i, i)) ? d.a : k) {
        d.x += c.Ic();
        d.y += c.Wb();
        return d
    }
    return k
}
var tD = "#808080";

function uD(a, b) {
    var c = a.Ne;
    if (!c) {
        c = a.Ne = new ZA(a.getContext(), undefined, tD, undefined, l, a.J());
        a.ya(c);
        c.Ja(a.n.db());
        c.sg(a.Ts)
    }
    ev(c, i);
    pD(a, c, b);
    a.scrollIntoView(b)
}
function cv(a) {
    return a.Ne && a.Ne.Br ? a.Ne.Fa() : k
}

function sD(a) {
    if (a.Kv == k) a.Kv = a.ld.offsetWidth;
    return a.Kv
}
function Uu(a) {
    if (a.Jv == k) a.Jv = a.ld.offsetHeight;
    return a.Jv
}
function Vu(a) {
    if (a.Lv == k) a.Lv = a.ld.scrollHeight;
    return a.Lv
}
function Eu(a) {
    var b = Q(a.getContext()).ra().Fa();
    if (b.O() != 0) return k;
    for (var c = 0, d; d = a.a[c]; c++) if (d = d.xe(b)) return d;
    return k
}
n.qd = function (a, b, c) {
    for (var d = 0, e; e = this.a[d]; d++) if (e = e.qd(a, b, c)) return e;
    return k
};
n.GW = function (a) {
    var b = a.key;
    a = a.a || new nb(1, Hu(Q(this.getContext())));
    for (var c = 0, d; d = this.a[c]; c++) d.jK(a, b)
};n.gZ = function (a) {
    var b = Q(this.getContext()),
        c = Qu(b);
    this.Rb(new nC(c));
    if (c = oD(this, c)) {
        rD(this.f.z(), c.db());
        this.n = c;
        mD(this, a.n && !a.M);
        a.g || lD(this);
        if (b.ra().Kb() || !a.a.Qa(a.u)) {
            a = this.getContext();
            vD(a.M);
            this.Aa.Ka(5)
        }
    }
};
var wD = "ds",
    xD = "is",
    yD = "ae",
    kma = "An add entity event was fired for an entity that doesn't exist: ",
    zD = "ue",
    lma = "An update entity event was fired for an entity that doesn't exist.",
    AD = "de",
    BD = "kix-overlay-bookmark",
    CD = "kix-overlay-bookmark-selection",
    mma = "A delete entity event was fired for an entity that doesn't exist.",
    DD = "te",
    nma = "A tether entity event was fired for an entity that doesn't exist: ",
    ED = "as",
    oma = "#4cb052";
n.lK = function (a) {
    switch (a.a.O()) {
    case wD:
        pma(this, a.a, a.M);
        break;
    case xD:
        a = a.a;
        var b = a.a;
        a = a.Y();
        var c = Q(this.getContext());
        if (a.length != 0) {
            fz(Iz(this.getContext()), b, a.length);
            var d = Ng([Hd]);
            if (d && d.test(a)) {
                var e, g;
                for (d = Ng([Hd]); g = d.exec(a);) if (g = FD(c, b + g.index)) {
                    e || (e = new Xc);
                    Yc(e, g)
                }
                e && GD(this, e)
            }
        }
        break;
    case yD:
        e = a.a.ma();
        if (b = Q(this.getContext()).Pa(e)) switch (b.O()) {
        case ut:
            b = Lz(this.getContext());
            a = this.getContext();
            c = this.J();
            if (a = CB(a, a.A.Pa(e).a, i, c)) b.g[e] = a;
            break;
        case Lf:
            b = Lz(this.getContext());
            a = this.getContext();
            c = this.J();
            if (a = CB(a, a.A.Pa(e).a, l, c)) b.f[e] = a;
            break
        } else pv(this.getContext()).log(Error(kma + e));
        break;
    case zD:
        b = a.a.ma();
        if (a = Q(this.getContext()).Pa(b)) {
            e = Q(this.getContext());
            switch (a.O()) {
            case ut:
                if (a = Lz(this.getContext()).g[b]) {
                    a.$o();
                    yB(a, l);
                    c = Q(a.getContext()).Pa(b);
                    jv(a, Xe(Ge.N(), c.qt), Xe(Ge.N(), c.rt))
                }
                HD(this, FA(e, b));
                break;
            case Lf:
                e = FA(e, b);
                ID(this, e, e);
                break;
            case dh:
                a = new Xc;
                b = JD(e, b);
                for (c = 0; c < b.length; c++) a.add(Cg(e.Y(), b[c]));
                GD(this, a);
                break
            }
        } else pv(this.getContext()).log(Error(lma));
        break;
    case AD:
        c = a.M;
        b = a.a.ma();
        if (e = Q(this.getContext()).Pa(b)) {
            a = c.g;
            switch (e.O()) {
            case ut:
                c = Lz(this.getContext());
                if (d = c.g[b]) {
                    KD(c, b);
                    delete c.g[b];
                    d.G()
                }
                HD(this, a);
                break;
            case Lf:
                c = Lz(this.getContext());
                if (d = c.f[b]) {
                    delete c.f[b];
                    d.G()
                }
                break;
            case jt:
                if (a > 0) {
                    b = new nb(a, a);
                    NA(Fy(this.getContext()), b, BD);
                    NA(Fy(this.getContext()), b, CD);
                    break
                }
            }
            a >= 0 && lz(Iz(this.getContext()), a, e)
        } else pv(this.getContext()).log(Error(mma));
        break;
    case DD:
        b = a.a;
        a = a.M;
        c = b.ma();
        if (e = Q(this.getContext()).Pa(c)) {
            switch (e.O()) {
            case ut:
                KD(Lz(this.getContext()), c);
                HD(this, b.n);
                HD(this, a.f);
                break;
            case jt:
                d = a.f;
                c = Fy(this.getContext());
                if (d > 0) {
                    d = new nb(d, d);
                    NA(c, d, BD);
                    NA(c, d, CD)
                }
                b = b.n;
                d = new nb(b, b);
                NA(c, d, BD);
                NA(c, d, CD);
                break
            }
            b = a.f;
            b >= 0 && lz(Iz(this.getContext()), b, e)
        } else pv(this.getContext()).log(Error(nma + c));
        break;
    case ED:
        qma(this, a.a, a.M);
        break;
    case is:
    case js:
        this.pb();
        this.removeChild(this.f);
        this.f.G();
        if (this.Ne) {
            this.removeChild(this.Ne);
            this.Ne.G();
            this.Cb = k
        }
        if (this.Cm) {
            this.removeChild(this.Cm);
            this.Cm.G();
            this.Cm = k
        }
        if (this.Xm) {
            this.removeChild(this.Xm);
            this.Xm.G();
            this.Xm = k
        }
        e = this.getContext();
        b = wv(e);
        a = this.J();
        if (c = this.rk) {
            this.removeChild(c);
            c.G();
            jD(this)
        }
        for (c = 0; d = this.a[c]; c++) {
            this.removeChild(d);
            d.G()
        }
        c = rB(e, a);
        d = c.a;
        b = new ZA(e, e.A.ra(), jf(b) ? oma : undefined,
        !jf(b),
        l,
        a);
        dD(this, d, c, b);
        this.g = {};
        e.P.clear();
        this.ga();
        b.sg(this.Ts);
        break
    }
};
var rma = "Should not async redraw once initial redraw is done.";
n.Rb = function (a) {
    this.Lv = k;
    var b = Iz(this.getContext()),
        c = gf(wv(this.getContext()));
    if (c) {
        (a = a) || (a = this.As ? kC.N() : lC.N());
        b.u = a
    }
    b.Zv(this.jZ, this);
    a = 0;
    for (var d; d = this.a[a]; a++) d.xc();
    if (c) if (sma(b)) {
        this.As && pv(this.getContext()).log(Error(rma));
        if (!this.Wh) {
            this.Wh = new Kj(b.n);
            this.Ga().C(this.Wh, Nj, function () {
                this.Rb(new mC)
            })
        }
        this.Wh.start()
    } else {
        this.Wh && Mj(this.Wh);
        if (this.SK) this.As = i
    }
};n.jZ = function () {
    for (var a = 0, b; b = this.a[a]; a++) b.Rb()
};n.kK = function () {
    this.Rb();
    mD(this);
    lD(this)
};
var tma = "Add space before paragraph",
    LD = "label",
    uma = "Add space after paragraph";

function lD(a) {
    var b = Q(a.getContext()),
        c = yv(a.getContext()),
        d = Py(b, eh, b.ra().Fa()),
        e = M(c, Ym);
    if (e) {
        var g, h;
        if (d.Ut > 0) {
            g = Zm;
            h = 0
        } else {
            g = tma;
            h = 10
        }
        e.setProperty(LD, g);
        e.setProperty(Ki, h)
    }
    if (e = M(c, Wm)) {
        if (d.Vp > 0) {
            g = Xm;
            h = 0
        } else {
            g = uma;
            h = 10
        }
        e.setProperty(LD, g);
        e.setProperty(Ki, h)
    }
    fl(c, am, d.f);
    fl(c, Km, d.f);
    fl(c, wl, d.f);
    fl(c, Dm, d.f);
    hl(c, vm, d.$s);
    hl(c, Ul, d.kh);
    d = Q(a.getContext());
    g = yv(a.getContext());
    h = k;
    e = MD(d);
    if (Yv(d, e)) {
        e = d.Ub(dh, e[0]);
        var j = e.Bb;
        if (j) h = ri(Zv(d.Pa(j), e.yb))
    }
    if (Za(h)) hl(g, Al, h);
    else for (var m in g.a[Al]) gl(g, Al, m).hd(l);
    d = Q(a.getContext());
    g = Ru(d.ra());
    m = a.Cm;
    h = Bv(d);
    j = g.O();
    e = ff(wv(a.getContext())) == 4;
    j = j == 0;
    if (e && j && h) {
        if (!m) {
            m = a.Cm = new WB(a.getContext(), a.J());
            a.ya(m);
            m.Ja(a.n.z())
        }
        e = m;
        e.dk = h;
        cC(e);
        h = new P(Fv(d.g, ch, g.a));
        d = m;
        rD(d.z(), a.n.z());
        g = Nu(a, h);
        (h = nD(a, h)) && jv(d, g.x, g.y + h.Yf);
        m.X(i)
    } else m && m.X(l);
    d = a.getContext();
    if (wv(d).g == 4) {
        h = Q(a.getContext());
        g = a.Xm;
        m = h.ra();
        e = m.Fa();
        if (m = e.O() == 0 ? Gw(h, Ev(m)) : Iw(h, e)) {
            e = e;
            if (m.O() == Lf) e = new P(FA(h, m.ma()));
            if (!g) {
                g = a.Xm = new uC(d, a.J());
                a.ya(g);
                g.Ja(a.n.db())
            }
            if (d =
            Nu(a, e)) {
                g = g;
                g.HC = m;
                g.X(i);
                var o = m.a;
                h = Ws(o);
                e = Xs(o);
                j = k;
                if (o.O() == 2) {
                    qC(g.a.a, m);
                    j = g.a;
                    g.f.X(l)
                } else if (o.O() == 0) {
                    qC(g.f.a, m);
                    j = g.f;
                    g.a.X(l)
                }
                j.X(i);
                m = h / 2 - j.z().offsetWidth / 2;
                jv(j, d.x + m, d.y + e);
                VA(g.g, new mf(d.x, d.y, h, e))
            }
        } else g && g.X(l)
    }
    g = a.getContext();
    m = wv(g);
    d = b.ra().Kb();
    K.Fg.la(d);
    K.Gg.la(d && m.g == 4);
    if (m.g == 4) {
        if (m.a) {
            d = ou(b);
            dl(c, fo, d);
            dl(c, ho, d);
            dl(c, co, d);
            dl(c, no, d);
            dl(c, po, d);
            dl(c, jo, d);
            dl(c, lo, d);
            if (m.f) {
                dl(c, to, d);
                dl(c, ro, d)
            }
            m.Qh && dl(c, uo, d);
            m.Ya && !m.K && dl(c, Ln, !d)
        }
        d = Ew(b);
        h = Dw(b, qu(b), rt);
        if (m.u || m.aa || m.Oa) {
            m.u && !m.K && dl(c, On, !d && !b.Df());
            m.aa && !m.K && dl(c, Hn, !d && !h && !b.Df());
            dl(c, fm, !! m.M && !d && !h);
            m.cc && dl(c, gm, !d && !h);
            dl(c, bo, !d);
            m.Ya && !m.K && dl(c, Ln, !d && !h);
            if (m.Oa && !m.K) {
                j = e = l;
                if (h) {
                    e = Iu(b, qu(b));
                    j = b.Pa(Cw(b.n, rt, e)[0]).f;
                    e = j == 0;
                    j = j == 1
                }
                dl(c, Bn, !e);
                dl(c, En, !j)
            }
        }
        m.Cb && !m.K && dl(c, Wn, !d && !b.Df() && !Aw(b));
        if (m.Su) {
            e = nu(b.Y(), qu(b), hg, ig);
            j = Lw(b.Y(), qu(b));
            dl(c, an, !d && !e && !h && !j);
            dl(c, bn, e)
        }
        dl(c, sm, b.ra().Fa().O() == 0);
        m.K || dl(c, cm, i);
        m.Qu && dl(c, im, i);
        if (m.n) {
            c = g.f;
            g = Lw(b.Y(), qu(b));
            h = Ew(b);
            b = Dw(b, qu(b), rt);
            if (!m.K) {
                dl(c, vn, !g && !h && !b);
                dl(c, zn, g)
            }
            if (g) {
                dl(c, fm, l);
                m.cc && dl(c, gm, l);
                m.a && dl(c, bo, l);
                dl(c, sm, l);
                if (!m.K) {
                    dl(c, cm, l);
                    m.u && dl(c, On, l);
                    m.Ya && dl(c, Ln, l);
                    if (m.Oa) {
                        dl(c, Bn, l);
                        dl(c, En, l)
                    }
                    m.aa && dl(c, Hn, l)
                }
            }
        }
        if (b = a.rk) b = wv(a.getContext()).u;
        b && a.rk.la(!d)
    }
}
var ND = "kix-overlay-spelling-error";

function qma(a, b, c) {
    var d = Q(a.getContext()),
        e, g = b.K;
    switch (b.f) {
    case Yg:
        nB(a.u);
        Ps in g && OD(a, PD(a));
        if (Ls in g || Ms in g || Ns in g || Os in g || Qs in g || Ps in g) {
            ID(a, b.qc(), Ju(d, b.qc()));
            if (hf(wv(a.getContext()))) {
                var h = HA(d, rt);
                h && Pg(h, function (u, w) {
                    for (var C = 0; C < w.length; C++) {
                        var B = FA(d, w[C]);
                        ID(this, B, Ju(d, B))
                    }
                    return l
                }, a)
            }
        }
        break;
    case dh:
        h = Cg(d.Y(), b.qc());
        ID(a, h, Eg(d.Y(), h));
        e = new Xc;
        c = c.f.a;
        if (zw in g) {
            var j = FD(d, b.qc());
            j && Yc(e, j);
            (j = FD(d, b.Se(), undefined, c[0].yb)) && Yc(e, j)
        }
        if (yw in g && Xa(g.ls_id)) for (var m in c) {
            j =
            c[m];
            g = j.Bb;
            j = j.yb;
            for (var o = b.qc() + Number(m), q = j; q <= 8; q++)(j = FD(d, o, g, q)) && Yc(e, j)
        }
        h = h - 1;
        h > Iu(d, h) && QD(d, h) && ID(a, Cg(d.Y(), h), h);
        break;
    case eh:
        h = Cg(d.Y(), b.qc());
        ID(a, h, Eg(d.Y(), h));
        break;
    case hh:
        h = b.qc();
        m = uu(d, h);
        ID(a, h, m);
        break;
    case Ug:
        h = b.qc();
        m = Au(d, h);
        ID(a, h, m);
        break;
    case gh:
        NA(Fy(a.getContext()), new nb(b.qc(), b.Se()), ND);
        return
    }
    ID(a, b.qc(), b.Se());
    e && GD(a, e)
}

function RD(a, b) {
    if (b) {
        var c = Q(a.getContext()),
            d = c.oa(eh, qu(c)),
            e = Qh(d),
            g = Rh(d),
            h = Ph(d);
        d = a.f.z();
        var j = nD(a, c.ra().Fa()).z(),
            m = Df(d),
            o = Df(j);
        d = o.y;
        g = j.offsetWidth - (e + g);
        if (e < h) {
            j = e + o.x;
            e = 0;
            h = m.x - j
        } else {
            j = h + o.x;
            e = e - h;
            h = m.x - j - e;
            g += e
        }
        c = eB(c);
        Lq(cB(a.getContext()), d, j, g, 400, h, e, c.eg)
    } else Lq(cB(a.getContext()), -1E3, -1E3, 1, 1);
    a.f.jl.style.visibility = b ? Kf : Gi
}

function pma(a, b, c) {
    var d = b.qc();
    b = c.a;
    jz(Iz(a.getContext()), d, b);
    (c = b.f.positioned) && Pg(c, function (h, j) {
        for (var m = 0; m < j.length; m++) {
            KD(Lz(this.getContext()), j[m]);
            HD(this, d + h)
        }
        return l
    }, a);
    var e = Q(a.getContext()),
        g;
    Pg(Xy(b, dh).a, function (h, j) {
        var m = FD(e, d - 1, j.ls_id, j.ls_nest);
        if (m) {
            g || (g = new Xc);
            Yc(g, m)
        }
        return l
    });
    g && GD(a, g);
    b = e.Y();
    c = Cg(b, d) - 1;
    if (c == 0) c = 1;
    QD(e, c) && ID(a, Cg(b, c), c)
}
function HD(a, b) {
    b < 0 || ID(a, Cg(Q(a.getContext()).Y(), b), Math.min(b + 2E3, Hu(Q(a.getContext()))))
}

function GD(a, b) {
    var c = b.Qb();
    Gc(c);
    for (var d = 0; d < c.length; d++) {
        var e = c[d];
        ID(a, e, e)
    }
}
var vma = "Invalid redraw range: ";

function ID(a, b, c) {
    b = Za(b) ? Math.max(b, 1) : 1;c = Za(c) ? Math.max(c, 1) : Hu(Q(a.getContext()));b > c ? pv(a.getContext()).log(Error(vma + b + hz + c)) : iz(Iz(a.getContext()), b, c)
}
n.iZ = function () {
    var a = this.Oa;
    if (!a.Ta && !a.DL) Sw(a);
    else a.sy = i
};n.aY = function () {
    var a;
    (a = this.getContext().n) && Le(Ge.N(), a.a, i, r(this.l1, this))
};
n.l1 = function () {
    var a = this.getContext();
    iz(a.P, 1, Hu(a.A) - 1 + 1);
    this.Rb();
    mD(this);
    lD(this)
};n.bx = function () {
    var a = this.ld;
    this.$d = a.scrollTop;
    this.qA = a.scrollLeft;
    a = Uu(this);
    var b = Iz(this.getContext());
    if (qz(b.f) || qz(b.a) || !ub(b.wc)) if (!gf(wv(this.getContext())) || this.As) return;
    b = 0;
    for (var c; c = this.a[b]; b++) c.Lc(this.$d, a)
};
var wma = "Invalid type when repositioning anchored plugin.";

function PD(a) {
    for (var b = {}, c = 0, d; d = a.a[c]; c++) {
        var e = d.u;
        if (e.type == 0) {
            var g;
            switch (e.anchor) {
            case KA:
                e = jf(wv(a.getContext())) ? 10 : 5;g = (sD(a) - d.Rc() - bf(Ge.N())) / 2;b.main_page = d;
                break;
            default:
                pv(a.getContext()).log(Error(wma));
                continue
            }
            jv(d, g, e)
        }
    }
    return b
}
var xma = "Invalid type when repositioning relative plugin.";

function OD(a, b) {
    for (var c = 0, d; d = a.a[c]; c++) {
        var e = d.u;
        if (e.type == 1) {
            e = e;
            var g;
            if (g = b[e.anchor]) {
                switch (e.position) {
                case sf:
                    e = g.Ic() - d.Rc();
                    g = g.Wb();
                    break;
                case $i:
                    e = g.Ic() + g.Rc();
                    g = g.Wb();
                    break;
                default:
                    pv(a.getContext()).log(Error(xma));
                    continue
                }
                jv(d, e, g)
            }
        }
    }
}
n.Ps = function () {
    if (this.Wj) {
        var a = this.ld,
            b = this.Wj.fe().height;
        this.xt = Df(a).y;
        this.Px = Df(a).x;
        b = b - this.xt;
        a.style.height = b + D;
        this.Jv = b;
        this.Mv = this.Kv = k;
        OD(this, PD(this));
        this.bx()
    }
};
n.q = function () {
    cD.p.q.call(this);
    delete this.ld;
    delete this.n;
    delete this.P;
    delete this.u;
    delete this.a;
    delete this.g;
    delete this.Aa;
    delete this.f;
    delete this.Ne;
    delete this.Cm;
    delete this.Xm;
    delete this.sz;
    delete this.Xa;
    delete this.rk;
    this.Oa.G();
    delete this.Oa;
    this.aa.G();
    delete this.aa;
    this.Zf && this.Zf.G();
    delete this.Zf;
    this.Wj && this.Wj.G();
    delete this.Wj;
    this.ev && this.ev.G();
    delete this.ev;
    this.Rv && this.Rv.G();
    delete this.Rv;
    this.Vv && this.Vv.G();
    delete this.Vv;
    this.Wh && this.Wh.G();
    delete this.Wh
};

function SD(a) {
    a && TD(this, a)
}
s(SD, Pi);n = SD.prototype;n.ua = k;n.Sw = k;n.eC = k;n.Tw = k;n.Xs = -1;n.Qj = -1;
var UD = {
    "3": 13,
    "12": 144,
    "63232": 38,
    "63233": 40,
    "63234": 37,
    "63235": 39,
    "63236": 112,
    "63237": 113,
    "63238": 114,
    "63239": 115,
    "63240": 116,
    "63241": 117,
    "63242": 118,
    "63243": 119,
    "63244": 120,
    "63245": 121,
    "63246": 122,
    "63247": 123,
    "63248": 44,
    "63272": 46,
    "63273": 36,
    "63275": 35,
    "63276": 33,
    "63277": 34,
    "63289": 144,
    "63302": 45
},
    VD = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    WD = {
        61: 187,
        59: 186
    },
    yma = y.ia || y.La && y.Xb(Qi);n = SD.prototype;n.GT = function (a) {
    if (yma && !Vba(a.keyCode, this.Xs, a.Cd, a.ctrlKey, a.ig)) this.handleEvent(a);
    else if (y.Ua && a.keyCode in WD) this.Qj = WD[a.keyCode];
    else this.Qj = a.keyCode
};n.aW = function () {
    this.Qj = this.Xs = -1
};
n.handleEvent = function (a) {
    var b = a.Zc,
        c, d;
    if (y.ia && a.type == Td) {
        c = this.Qj;
        d = c != 13 && c != 27 ? b.keyCode : 0
    } else if (y.La && a.type == Td) {
        c = this.Qj;
        d = b.charCode >= 0 && b.charCode < 63232 && Ri(c) ? b.charCode : 0
    } else if (y.Gc) {
        c = this.Qj;
        d = Ri(c) ? b.keyCode : 0
    } else {
        c = b.keyCode || this.Qj;
        d = b.charCode || 0;
        if (y.Fc && d == 63 && !c) c = 191
    }
    var e = c,
        g = b.keyIdentifier;
    if (c) if (c >= 63232 && c in UD) e = UD[c];
    else {
        if (c == 25 && a.Cd) e = 9
    } else if (g && g in VD) e = VD[g];
    a = e == this.Xs;
    this.Xs = e;
    b = new XD(e, d, a, b);
    try {
        this.dispatchEvent(b)
    } finally {
        b.G()
    }
};n.z = function () {
    return this.ua
};

function TD(a, b) {
    a.Tw && YD(a);
    a.ua = b;
    a.Sw = oe(a.ua, Td, a);
    a.eC = oe(a.ua, Qj, a.GT, l, a);
    a.Tw = oe(a.ua, Sj, a.aW, l, a)
}
function YD(a) {
    if (a.Sw) {
        te(a.Sw);
        te(a.eC);
        te(a.Tw);
        a.Sw = k;
        a.eC = k;
        a.Tw = k
    }
    a.ua = k;
    a.Xs = -1;
    a.Qj = -1
}
n.q = function () {
    SD.p.q.call(this);
    YD(this)
};
var ZD = "key";

function XD(a, b, c, d) {
    d && this.init(d, void 0);
    this.type = ZD;
    this.keyCode = a;
    this.ow = b;
    this.repeat = c
}
s(XD, Qd);

function $D(a) {
    this.dd = a;
    this.a = {};
    this.L = new ze(this);
    this.L.C(this.dd, ZD, this.f)
}
s($D, Pi);
var aE = k;$D.prototype.Zx = function (a, b) {
    var c, d = b;
    d = d.replace(/[ +]*\+[ +]*/g, Xj).toLowerCase();
    var e = d.split(Xj);
    d = 0;
    for (var g = -1, h, j = 0; h = e[j]; j++) {
        switch (h) {
        case Vi:
            d |= 1;
            continue;
        case Wi:
            d |= 2;
            continue;
        case Xi:
            d |= 4;
            continue;
        case Yj:
            d |= 8;
            continue
        }
        e = h;
        if (!aE) {
            g = {};
            for (c in Jj) g[Jj[c]] = Number(c);
            aE = g
        }
        g = aE[e];
        break
    }
    c = {
        keyCode: g,
        Gx: d
    };
    this.a[c.keyCode & 255 | c.Gx << 8] = a
};
$D.prototype.f = function (a) {
    if (!(a.keyCode == 16 || a.keyCode == 17 || a.keyCode == 18)) {
        var b = a.Zc;
        if (b) {
            var c = this.a[a.keyCode & 255 | ((a.Cd ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.ig ? 4 : 0) | (a.fh ? 8 : 0)) << 8];
            if (c) {
                var d = !y.Fc && (a.ctrlKey && a.keyCode == 45 || a.Cd && (a.keyCode == 46 || a.keyCode == 45));
                !((a.ctrlKey || a.fh) && (a.keyCode == 67 || a.keyCode == 88 || a.keyCode == 86) || d) && b.preventDefault();
                this.dispatchEvent(new bk(Vj, c, a.target))
            }
        }
    }
};$D.prototype.q = function () {
    $D.p.q.call(this);
    this.L.G();
    delete this.L;
    delete this.dd;
    delete this.a
};

function bE(a) {
    this.a = {};
    this.f = !! a
}
s(bE, t);

function cE(a, b) {
    var c = Jj[b];
    if (Za(c)) return c;
    return String(b)
}
var dE = "command",
    eE = "option";

function fE(a, b) {
    var c = cE(a, b.keyCode),
        d;
    d = v;
    if (b.fh) d += dE;
    if (b.ctrlKey) d += Wi;
    if (b.ig) d += eE;
    if (a.f ? l : b.Cd) d += Vi;
    d = d;
    return (d ? d + Xj : v) + c
}
bE.prototype.q = function () {
    bE.p.q.call(this);
    delete this.a
};

function gE(a, b) {
    this.a = a;
    this.g = this.f = new bE(i);
    this.n = b;
    hE(this, b)
}
s(gE, t);n = gE.prototype;n.aK = i;n.Lp = k;n.Mo = 39;n.Tn = 37;

function hE(a, b) {
    iE(a, k, 38, a.a.YK);
    iE(a, k, 40, a.a.TK);
    iE(a, k, a.Tn, a.a.bA);
    iE(a, k, a.Mo, a.a.Jw);
    iE(a, k, 36, a.a.kD);
    iE(a, k, 35, a.a.jD);
    iE(a, k, 33, a.a.Q_);
    iE(a, k, 34, a.a.J_);
    if (b) {
        iE(a, eE, 38, a.a.VK);
        iE(a, dE, 38, a.a.XK);
        iE(a, eE, 40, a.a.L_);
        iE(a, dE, 40, a.a.UK);
        iE(a, eE, a.Tn, a.a.WK);
        iE(a, dE, a.Tn, a.a.kD);
        iE(a, Wi, a.Tn, a.a.kD);
        iE(a, eE, a.Mo, a.a.M_);
        iE(a, dE, a.Mo, a.a.jD);
        iE(a, Wi, a.Mo, a.a.jD);
        iE(a, Wi, 65, a.a.O_);
        iE(a, Wi, 66, a.a.bA);
        iE(a, Wi, 69, a.a.K_);
        iE(a, Wi, 70, a.a.Jw);
        iE(a, Wi, 78, a.a.TK);
        iE(a, Wi, 80, a.a.YK)
    } else {
        iE(a, Wi, 38, a.a.VK);
        iE(a, Wi, 40, a.a.P_);
        iE(a, Wi, a.Tn, a.a.WK);
        iE(a, Wi, a.Mo, a.a.N_);
        iE(a, Wi, 36, a.a.XK);
        iE(a, Wi, 35, a.a.UK)
    }
}
function iE(a, b, c, d) {
    var e = a.f;
    e.a[(b ? b + Xj : v) + cE(e, c)] = r(d, a.a)
}
n.q = function () {
    gE.p.q.call(this);
    this.f.G();
    this.g && this.g.G();
    this.Lp && this.Lp.G();
    delete this.f;
    delete this.g;
    delete this.Lp;
    delete this.a
};

function jE(a) {
    this.a = new bE;
    kE(this, k, 8, this.wz);
    kE(this, k, 46, this.eA);
    kE(this, k, 13, this.FL);
    kE(this, k, 9, this.lY);
    kE(this, Vi, 9, this.QQ);
    kE(this, Vi, 8, this.wz);
    kE(this, Vi, 13, this.oY);
    if (a) {
        kE(this, Vi, 46, this.eA);
        kE(this, eE, 8, this.FG);
        kE(this, eE, 46, this.dH);
        kE(this, Wi, 68, this.eA);
        kE(this, Wi, 72, this.wz);
        kE(this, Wi, 75, this.WQ);
        kE(this, Wi, 79, this.FL);
        kE(this, dE, 8, this.fQ)
    } else {
        kE(this, Wi, 46, this.dH);
        kE(this, Wi, 8, this.FG)
    }
}
s(jE, t);

function kE(a, b, c, d) {
    a = a.a;
    a.a[(b ? b + Xj : v) + cE(a, c)] = r(d, void 0)
}
n = jE.prototype;
var lE = "at";n.lY = function () {
    return new mE(lE, {})
};n.QQ = function () {
    var a = {};
    a.shift = i;
    return new mE(lE, a)
};
var nE = "cr";n.FL = function () {
    return new mE(nE, {})
};
var oE = "ic";n.oY = function () {
    var a = {};
    a.ch = Ig;
    return new mE(oE, a)
};n.eA = function () {
    return new mE(gs, {})
};n.dH = function () {
    var a = {};
    a.delrW = i;
    return new mE(gs, a)
};n.WQ = function () {
    var a = {};
    a.delrP = i;
    return new mE(gs, a)
};
var pE = "bs";n.wz = function () {
    return new mE(pE, {})
};n.FG = function () {
    var a = {};
    a.delbW = i;
    return new mE(pE, a)
};
n.fQ = function () {
    var a = {};
    a.delbL = i;
    return new mE(pE, a)
};n.q = function () {
    jE.p.q.call(this);
    this.a.G();
    delete this.a
};

function mE(a, b) {
    this.type = a;
    this.a = b
};

function qE(a, b, c, d, e, g, h, j, m, o, q, u, w, C) {
    Xu.call(this, a, b, c, d, e, g, h, j, m, o, w, C);
    this.g = q;
    this.M = u;
    a = this.Ga();
    b.Rj ? this.cK(k) : a.C(b, Oq, this.cK);this.va.cb ? this.dK(k) : a.C(this.va, hD, this.dK)
}
s(qE, Xu);
var rE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];n = qE.prototype;n.Ht = 0;n.RC = 0;n.qx = k;n.Nn = k;n.yj = k;n.eK = l;n.Lj = 1;n.cK = function () {
    this.Nn = sE(this, this.f.Vf);
    tE(this)
};n.dK = function () {
    var a = this.va;
    if (jf(wv(a.getContext()))) if (a = a.ld) this.yj = sE(this, a);
    tE(this)
};
var uE = "Meta";

function tE(a) {
    if (!(a.eK || !a.f.Rj || !a.va.cb)) {
        a.eK = i;
        for (var b = tb(a.u.f), c = 0; c < b.length; c++) {
            var d = a,
                e = b[c],
                g = M(d.u, e);
            if (g) if (g = g.pc(Ji)) {
                g = cb(g) ? [g] : g;
                for (var h = g.length > 1, j = 0, m = g.length; j < m; j++) {
                    var o = d,
                        q = g[j],
                        u = h ? j : undefined;u = Za(u) ? e + x + u : e;q = y.Fc ? q.replace(/Ctrl/ig, uE) : q;o.Nn.Zx(u, q);o.yj && o.yj.Zx(u, q)
                }
            }
        }
        a.Hs && a.Nq()
    }
}
function sE(a, b) {
    var c;
    if (y.Ua) c = new $D(new SD(b));
    else {
        c = new Tj(b);
        c.u = l;
        c.n = i
    }
    return c
}
var zma = "compositionstart",
    Ama = "compositionend",
    Bma = "compositionupdate",
    Cma = "textInput";
n.Nq = function () {
    var a = this.f;
    if (a.Rj) {
        var b = this.Ga();
        a = a.Vf;
        b.C(a, zma, this.xV).C(a, Ama, this.zV).C(a, Bma, this.$I).C(a, ih, this.$I).C(a, Qj, this.aZ).C(a, Td, this.$V).C(this.Nn, Vj, this.nJ).C(a, Cma, this.BV);
        this.yj && b.C(this.yj, Vj, this.nJ)
    }
};

function vE(a) {
    switch (a.keyCode) {
    case 16:
    case 17:
        return l;
    default:
        return i
    }
}
n.eJ = function (a) {
    if (this.n.f) switch (a.keyCode) {
    case 13:
    case 9:
    case 27:
        wE(this);
        this.Ga().a(this.f.Vf, Sj, this.eJ);
        break
    }
};n.xV = function () {
    xE(this)
};

function xE(a) {
    var b = a.A;
    if (b.ra().Kb()) {
        var c = Qu(b);
        a.Lj = c;
        a.aa = a.f.$c();
        wr(b, new P(c), i)
    } else {
        a.Lj = qu(a.A);
        a.aa = k
    }
    y.product.nz && a.Ga().C(a.f.Vf, Sj, a.eJ);
    a.n.f = i;
    RD(a.va, i);
    yE(a)
}
n.zV = function () {
    wE(this)
};
var zE = "kix-overlay-ime-whiteout";

function wE(a) {
    a.n.f = l;
    if (y.La) {
        if (y.GF) a.RC = 229;
        Nq(a.f)
    }
    yE(a);
    if (!y.La) {
        var b = a.f.$c();
        wr(a.A, new P(a.Lj + b.length), i)
    }
    Nq(a.f);
    OA(Fy(a.va.getContext()), zE);
    RD(a.va, l);
    a.f.Ef()
}
n.$I = function () {
    yE(this)
};
var AE = "imeIn";

function yE(a) {
    var b = a.f.$c();
    if (b.length >= 0) {
        var c = {},
            d = a.Lj;
        c.ch = b;
        c.pimec = a.aa ? a.aa : k;c.ind = d;a.n.f && Fy(a.va.getContext()).Sd(zE, r(a.kS, a));a.dispatchEvent(new dv(AE, c, a))
    }
    a.aa = b
}
n.kS = function (a) {
    var b = this.f.$c(),
        c = this.Lj,
        d = c,
        e = d + b.length - 1;
    if (d > a.end || e < a.start || b.length == 0) return [];
    d = Math.max(c, a.start);
    e = Math.min(c + b.length - 1, a.end);
    return [new jx(new nb(d, e), zE)]
};
n.BV = function (a) {
    if (y.La && this.RC == 229) {
        this.n.f && wE(this);
        if (a.Zc) {
            var b = {},
                c = a.Zc.data;
            b.ch = c;
            b.ind = this.Lj;
            this.dispatchEvent(new dv(AE, b, this));
            wr(this.A, new P(this.Lj + c.length), i)
        }
        a.preventDefault()
    }
};
var BE = "typing",
    CE = "keyEvent",
    DE = "sc",
    EE = "delpe";
n.aZ = function (a) {
    pr(mr.N(), BE, CE);
    if (rE[this.Ht] == a.keyCode) {
        this.Ht++;
        if (this.Ht >= rE.length) {
            this.dispatchEvent(new dv(DE, {}, this));
            this.Ht = 0
        }
    } else this.Ht = 0;
    if (!(y.Ua || y.product.qq)) {
        var b = this.n.f;
        if (!b && a.keyCode == 229) xE(this);
        else if (b && a.keyCode != 229) vE(a) && wE(this);
        else b && yE(this)
    }
    if (this.A.ra().Fa().O() == 0) {
        y.Ua || FE(this, a);
        this.qx = a;
        if (vE(a)) this.RC = a.keyCode;
        GE(a) || this.f.Ef()
    } else {
        b = i;
        switch (a.keyCode) {
        case 46:
        case 8:
            this.dispatchEvent(new dv(EE, this));
            break;
        default:
            b = l;
            break
        }
        GE(a) || this.f.Ef();
        b && a.preventDefault()
    }
    qr(mr.N(), BE, CE)
};n.xQ = function () {
    Nq(this.f);
    RD(this.va, l);
    this.f.Ef()
};

function FE(a, b, c) {
    var d = a.A,
        e = qu(d),
        g = Hu(d),
        h = a.g;
    d = Sh(d.oa(eh, Eg(d.Y(), e <= g ? e : g)));
    if (h.aK != d) {
        h.aK = d;
        h.Mo = d ? 39 : 37;h.Tn = d ? 37 : 39;
        if (d) h.f = h.g;
        else if (h.Lp) h.f = h.Lp;
        else {
            h.f = h.Lp = new bE(i);
            hE(h, h.n)
        }
    }
    if (p(a.g.f.a[fE(a.g.f, b)])) {
        pr(mr.N(), tr, nv);
        (h = a.g.f.a[fE(a.g.f, b)]) && h(!b.Cd);
        av(a);
        Br(a.a.n);
        c || b.preventDefault();
        qr(mr.N(), tr, nv)
    } else if (p(a.M.a.a[fE(a.M.a, b)])) {
        h = (h = a.M.a.a[fE(a.M.a, b)]) ? h() : k;
        if (h) {
            h.type == pE && pr(mr.N(), tr, Si);
            a.dispatchEvent(new dv(h.type, h.a, a));
            h.type == pE && qr(mr.N(), tr, Si)
        }
        c || b.preventDefault()
    }
    if (b.keyCode != 40 && b.keyCode != 38) a.n.a = k
}
function GE(a) {
    return a.ctrlKey || a.ig || a.fh && y.Fc
}
var HE = "selectAll";
n.nJ = function (a) {
    var b = a.identifier.split(x);
    a = b[0];
    var c = M(this.u, a);
    if (!c) return i;
    if (c.Ab()) {
        var d;
        if (b.length > 1) d = b[1];
        if (a == K.Gg.ma() || a == K.Fg.ma() || a == K.Rh.ma()) {
            b = l;
            this.f.co();
            if (!Jq) {
                d = this.f;
                switch (a) {
                case K.Gg.ma():
                    Zq(d, yk);
                    break;
                case K.Fg.ma():
                    Zq(d, wk);
                    break;
                case K.Rh.ma():
                    Zq(d, Ak);
                    break
                }
            }
        } else {
            b = i;
            a == K.Bn.ma() && pr(mr.N(), tr, HE);
            Ni(c, d);
            a == K.Bn.ma() && qr(mr.N(), tr, HE)
        }
        return !b
    } else return l
};
var IE = "typeChar";
n.$V = function (a) {
    if (this.A.ra().Fa().O() == 0) {
        pr(mr.N(), BE, CE);
        var b = a.ctrlKey,
            c = a.Cd,
            d = a.ig,
            e = a.keyCode,
            g = a.ow,
            h = GE(a);
        if (y.Ua) {
            if (y.Xk && e == 192) g = 0;
            y.Fc && b && e == 0 && this.qx != k && FE(this, this.qx, i);
            FE(this, a)
        } else if (y.Fc && d && g >= 128) h = l;
        if ((!y.Ua || Ri(e) || e == 0) && g >= 32 && (!h || d && b && !(g >= 48 && g <= 54 || g == 109))) {
            b = String.fromCharCode(g);
            pr(mr.N(), tr, IE);
            d = {};
            d.ch = b;
            this.dispatchEvent(new dv(oE, d, this));
            qr(mr.N(), tr, IE)
        }
        if (!h && (!y.Ua || e < 112 || e > 123) && !(c && e == 45)) {
            this.f.Ef();
            a.preventDefault()
        }
        qr(mr.N(), BE, CE)
    }
};
n.q = function () {
    qE.p.q.call(this);
    this.Nn && this.Nn.G();
    delete this.Nn;
    this.yj && this.yj.G();
    delete this.yj;
    this.g.G();
    delete this.g;
    this.M.G();
    delete this.M;
    delete this.qx
};

function JE(a, b, c, d, e, g, h, j, m, o, q, u, w) {
    Xu.call(this, a, b, c, d, e, g, h, j, o, q, u, w);
    this.aa = m;
    this.g = new Kj(15);
    this.M = new Ar(Pa, 500, this);
    if (y.ia) b.Rj ? this.fK(k) : this.Ga().C(b, Oq, this.fK)
}
s(JE, Xu);
var KE = y.Ua && y.Xb(He),
    LE = !(y.Ua && y.Xb("1.9.2"));n = JE.prototype;n.Us = k;n.Lm = 0;n.ir = k;n.ZD = 1;n.fZ = function () {
    this.Hs && this.Nq()
};
var ME = "dblclick";
n.Nq = function () {
    if (this.va.cb) {
        var a = this.Ga(),
            b = this.va.ld;
        y.ia && a.C(b, ME, this.fV);
        a.C(b, Ud, this.bZ).C(b, Co, this.dZ).C(b, Go, this.uW).C(b, Fo, this.eZ).C(this.J().Va(), Fo, this.qW).C(this.J().Va(), Go, this.tW).C(this.g, Nj, this.hX);
        var c = wv(this.va.getContext());
        if (c.ZM && !jf(c)) {
            a.C(b, bC, this.cZ);
            (b = this.P && this.P.J().z(sv)) && a.C(b, bC, this.IU)
        }
    } else this.Ga().C(this.va, hD, this.fZ)
};n.fK = function () {
    this.Ga().C(Mq(this.f), Co, this.BU)
};n.BU = function () {
    NE(this)
};n.bZ = function (a) {
    if (Vd(a, 0)) {
        Br(this.a.n);
        this.K.Ka(5)
    }
};
n.IU = function (a) {
    KE && a.stopPropagation();
    a.preventDefault()
};
n.cZ = function (a) {
    var b = this.A;
    if (!a.Cd) {
        if (!b.ra().Kb()) {
            var c = OE(this, a);
            if (c) {
                c.O() == 0 && $u(this, 0);
                wr(b, c, i)
            }
        }
        a: {
            b = this.va;
            c = a.clientX;
            var d = a.clientY;
            if (wv(b.getContext()).ZM) {
                if (!b.Zf) {
                    var e;
                    e = Rr(Qr.N(), es);
                    if (e.Nb()) {
                        e = e.jc;
                        var g = e.lS(),
                            h = b.getContext();
                        b.Zf = new g(h.f, h.A, xv(h, e.fw()), uv(h, e.Rr()), b.J());
                        b.ya(b.Zf, i);
                        g = wv(h);
                        g.Aq && b.Zf.Sd(e.qT());
                        b.Zf.Sd(e.vS());
                        g.a && b.Zf.Sd(e.sT());
                        b.Zf.Sd(eC.N());
                        e = i
                    } else e = l;
                    if (!e) break a
                }
                b.Zf.vy(c, d)
            }
        }
        KE && a.stopPropagation();a.preventDefault()
    }
};
n.fV = function (a) {
    PE(this, a);
    this.Lm = 2;
    this.Us = a;
    this.M.start()
};

function PE(a, b) {
    var c = OE(a, b);
    if (c && c.O() == 0) {
        var d = a.A;
        if (!d.Df()) {
            var e = d.Y(),
                g = c.a;
            c = lu(g, e);
            var h;
            h = g;
            var j = Bg(e);
            for (g = g; g < j; g++) if (g == j - 1 || gu(g, e, i)) {
                h = g + 1;
                break
            }
            h = h;
            if (y.Xk) {
                e = mu(e, new nb(c, h - 1), i);
                c = e.start;
                h = e.end + 1
            }
            wr(d, new P(h), i, new P(c), l, i);
            a.ir = new nb(c, h);
            a.n.a = k
        }
        av(a)
    }
    a.K.Ka(5);
    b.preventDefault()
}

function QE(a, b) {
    var c = a.A,
        d = Ou(c, b),
        e = a.ir;
    d < e.end ? wr(c, new P(iu(d, c.Y())), i, new P(e.end)) : wr(c, new P(eu(d, c.Y())), i, new P(e.start))
}
function RE(a, b) {
    var c = a.A,
        d = Ou(c, b),
        e = a.ir;
    d < e.end ? wr(c, new P(Cg(c.Y(), d)), i, new P(e.end)) : wr(c, new P(Eg(c.Y(), d) + 1), i, new P(e.start))
}
n.eZ = function (a) {
    var b = this.n.tb();
    if (b != 0) {
        a.preventDefault();
        if ((a = OE(this, a, i)) && a.O() == 0) {
            var c = this.A,
                d = c.ra();
            switch (b) {
            case 2:
                a.Qa(d.Fa()) || wr(c, a, l);
                break;
            case 3:
                QE(this, a);
                break;
            case 4:
                RE(this, a);
                break;
            case 1:
                b = this.va;
                ff(wv(b.getContext())) == 4 && uD(b, a);
                break
            }
        }
    }
};n.tW = function (a) {
    if (Vd(a, 0)) {
        Mj(this.g);
        $u(this, 0);
        LE && this.K.tb() == 5 && a.preventDefault()
    }
};
n.uW = function (a) {
    if (Vd(a, 0)) if (this.n.tb() == 1) {
        if (!cv(this.va)) {
            var b = OE(this, a);
            if (b) {
                var c = this.A;
                if (c.ra().Fa() != b) {
                    wr(c, b, !a.Cd);
                    av(this)
                }
            }
        }
    } else SE(this, a)
};

function SE(a, b) {
    var c = a.n,
        d = c.tb();
    if (d == 0 || d == 2 || d == 3 || d == 4) if (d = OE(a, b)) {
        d = Nu(a.va, d);
        c.a = d ? Math.max(0, d.x) : 0
    } else c.a = k
}
var TE = "imeCommit";

function NE(a, b) {
    var c = {};
    if (b && b.O() == 0) c.l = b;
    a.dispatchEvent(new dv(TE, c, a))
}
n.dZ = function (a) {
    if (Vd(a, 0)) {
        var b = UE(a) - this.va.Px,
            c = VE(a) - this.va.xt,
            d = this.va;
        if (d.ld.clientWidth >= b && d.ld.clientHeight >= c) {
            b = this.Lm;
            if (this.M.a != 0 && this.Us.clientX == a.clientX && this.Us.clientY == a.clientY) if (b == 1 || b == 3) {
                PE(this, a);
                this.Lm = 2
            } else {
                if ((b = OE(this, a)) && b.O() == 0) {
                    b = this.A;
                    c = Fu(b);
                    wr(b, new P(c.end), i, new P(c.start), l, i);
                    this.ir = c;
                    this.n.a = k;
                    av(this)
                }
                this.K.Ka(5);
                this.Lm = 3
            } else this.Lm = 1;
            this.Us = a;
            this.M.start();
            c = this.n;
            c.a = k;
            if (b = OE(this, a)) {
                c.f && y.ia && NE(this, b);
                if (b.O() == 0) {
                    c = this.A;
                    if (this.Lm == 2) {
                        $u(this, 3);
                        SE(this, a)
                    } else if (this.Lm == 3) {
                        $u(this, 4);
                        SE(this, a)
                    } else if (WE(c, Ou(c, b))) if (jf(wv(d.getContext()))) {
                        wr(c, b, i);
                        av(this)
                    } else $u(this, 1);
                    else if (Iw(c, b)) {
                        wr(c, b, i, b.shift(1));
                        av(this)
                    } else {
                        $u(this, 2);
                        SE(this, a);
                        wr(c, b, !a.Cd)
                    }
                } else wr(this.A, b, i)
            }
            this.K.Ka(5);
            LE || a.preventDefault()
        }
        LE && a.preventDefault()
    }
};
n.qW = function (a) {
    var b = this.n.tb();
    if (b != 0) {
        var c = UE(a),
            d = VE(a),
            e = this.va,
            g = e.Px,
            h = e.xt,
            j = sD(e),
            m = Uu(e);
        if (c > g && c < g + j && d > h && d < h + m) Mj(this.g);
        else {
            c = Math.min(Math.max(c - g, 0), j);
            g = Math.min(Math.max(d - h, 0), m);
            if (d < h) {
                this.ZD = 1;
                this.g.start()
            } else if (d > h + m) {
                this.ZD = 2;
                this.g.start()
            }
            if (d = e.Sb(c, g)) {
                e = this.A;
                if (!d.Qa(e.ra().Fa())) {
                    if (b == 2) wr(e, d, l);
                    else if (d.O() == 0) if (b == 3) QE(this, d);
                    else b == 4 && RE(this, d);
                    a.preventDefault()
                }
            }
        }
    }
};
var Dma = "Cursor x position should always be set before trying to move the cursor.";
n.hX = function () {
    var a = this.ZD == 1,
        b = this.va;
    switch (this.n.tb()) {
    case 1:
        var c = cv(b);
        if (c && c.O() == 0)(a = b.qd(c, a, Nu(b, c).x)) && uD(b, a);
        break;
    case 2:
    case 3:
    case 4:
        b = this.Ya;
        c = b.a.a;
        if (Za(c)) a ? Lu(b, l, c) : Mu(b, l, c);
        else b.V.log(Error(Dma));
        break
    }
};

function OE(a, b, c) {
    return a.va.Sb(UE(b) - a.va.Px, VE(b) - a.va.xt, c)
}
function UE(a) {
    return y.ia ? a.clientX + document.documentElement.scrollLeft + document.body.scrollLeft : a.clientX + window.pageXOffset
}

function VE(a) {
    return y.ia ? a.clientY + document.documentElement.scrollTop + document.body.scrollTop : a.clientY + window.pageYOffset
}
n.q = function () {
    JE.p.q.call(this);
    this.g.G();
    delete this.g;
    delete this.Us;
    delete this.ir
};

function XE(a, b, c, d, e, g, h, j, m, o, q, u, w, C, B, H, I, T, X, V) {
    Xu.call(this, b, c, d, q, e, g, h, j, w, C, X, B);
    this.Aa = m;
    this.M = o;
    this.lb = u;
    this.aa = H;
    this.Xa = I;
    this.g = T;
    this.xa = V;
    this.Oa = new $v(this);
    Zr(Qr.N(), es, r(this.ZY, this, a, w, c), this)
}
s(XE, Xu);n = XE.prototype;n.qm = k;n.mA = k;n.Ug = k;n.Om = k;n.km = k;n.bo = k;n.yp = k;n.mv = k;n.ng = k;n.Dv = 0;
var YE = [],
    ZE = "receiveMutations";

function Ema(a, b) {
    a.qm = b;
    var c = a.a;
    if (!c.om) {
        c.om = b.Tj;
        c.L.C(c.om, ZE, Pq(c.V, c.QW, c));
        if (c.g && c.g.length > 0) {
            c.om.bE(c.g);
            c.g = k
        }
    }
}
n = XE.prototype;
n.jM = function (a) {
    a && bl(this.u);
    Yu(this.Aa, a);
    Yu(this.M, a)
};n.Nq = function () {
    this.qa(K.Fg, this.gU);
    this.qa(K.Bn, this.kX);
    var a = this.M;
    this.Ga().C(this.f, wk, this.SY);
    if (!this.lb) {
        this.qa(K.Gg, this.hU);
        this.Ga().C(a, oE, this.IV).C(a, gs, this.WU).C(a, pE, this.nU).C(this.f, yk, this.TY).C(this.Aa, TE, this.yV)
    }
    this.A.f.VR && this.Ga().C(a, DE, this.iX);
    Zr(Qr.N(), es, this.OY, this, undefined, undefined, i)
};
var Fma = "kix-migration-accept",
    Gma = "kix-migration-decline",
    $E = "menuHide",
    aF = "open",
    Hma = "odt",
    bF = "pdf",
    Ima = "rtf",
    Jma = "txt",
    Kma = "doc",
    Lma = "zip";
n.OY = function () {
    var a = this.u,
        b = this.A.f;
    if (b.HP) {
        var c = this.J(),
            d = c.z(Fma);
        d && this.Ga().C(d, Ud, this.oW);
        (c = c.z(Gma)) && this.Ga().C(c, Ud, this.pW)
    }
    if (!this.lb) {
        this.qa(M(a, wl), this.jh, l);
        this.qa(M(a, zl), this.jh, l, 0);
        this.qa(M(a, Bl), this.jh, l, 1);
        this.qa(M(a, Cl), this.jh, l, 2);
        this.qa(M(a, Dm), this.jh, i);
        this.qa(M(a, Fm), this.jh, i, 3);
        this.qa(M(a, Gm), this.jh, i, 4);
        this.qa(M(a, Hm), this.jh, i, 5);
        this.qa(M(a, Im), this.jh, i, 6);
        this.qa(M(a, Jm), this.jh, i, 7);
        this.qa(M(a, qn), this.dW);
        this.qa(K.Ok, this.Cw, Wh);
        this.qa(M(a, Gl), this.yU);
        this.qa(M(a, Jl), this.QU);
        this.qa(M(a, Hl), this.ZU);
        this.qa(K.sq, this.sV);
        this.qa(K.tq, this.tV);
        this.qa(M(a, am), this.iJ, i);
        if (b.cc) {
            this.Xd(M(a, gm), this.LV);
            this.Xd(M(a, hm), this.SX)
        }
        this.Xd(M(a, fm), this.RV);
        b.vF && this.Xd(M(a, sm), this.SV);
        this.qa(M(a, tm), this.TV);
        this.qa(M(a, an), this.XV);
        this.qa(K.Qk, this.Cw, $h);
        this.qa(M(a, um), this.Aw, 2);
        this.qa(M(a, wm), this.Aw, 1.5);
        this.qa(M(a, xm), this.Aw, 1.15);
        this.qa(M(a, ym), this.Aw, 1);
        this.qa(M(a, Bm), this.vW);
        this.qa(M(a, Cm), this.TX);
        this.qa(M(a, Km), this.iJ, l);
        b.Ou && this.qa(M(a, Il), this.IW);
        this.qa(K.Rh, this.iU);
        this.qa(M(a, Om), this.Bw, 0);
        this.qa(M(a, Mm), this.Bw, 1);
        this.qa(M(a, Qm), this.Bw, 2);
        this.qa(M(a, Sm), this.Bw, 3);
        this.qa(M(a, bn), this.SW);
        this.qa(M(a, rn), this.PY);
        if (b.Wc) {
            this.Xd(M(a, Kl), this.VY);
            this.qa(M(a, Nl), this.kJ, l);
            this.qa(M(a, Ol), this.kJ, i)
        }
        b.Ie && this.Xd(M(a, Pl), this.rV);
        if (b.Wc || b.Ie) this.Xd(M(a, Rl), this.WY);
        b.sD && this.Xd(M(a, lm), this.NX);
        b.MC && this.Xd(M(a, nm), this.LX);
        b.Aq && this.qa(M(a, om), this.jU);
        b.Ru && this.qa(M(a, pm), this.HW);
        b.Qu && this.qa(M(a, im), this.VV);
        b.yD && this.Xd(M(a, qm), this.MX);
        c = this.V;
        d = this.P;
        var e = this.Ga(),
            g = Pq(c, this.XY, this);
        d && e.C(d, yp, Pq(c, this.xU, this));
        d && d.Ff && e.C(d.Ff, $E, g);
        d && tv(d) && e.C(tv(d), $E, g);
        d && d.Fh && e.C(d.Fh, aF, Pq(c, this.YY, this)).C(d.Fh, $E, g);
        this.qa(M(a, Sl), this.fm, 0);
        this.qa(M(a, Vl), this.fm, 1);
        this.qa(M(a, Wl), this.fm, 2);
        this.qa(M(a, Xl), this.fm, 3);
        this.qa(M(a, Yl), this.fm, 4);
        this.qa(M(a, Zl), this.fm, 5);
        this.qa(M(a, $l), this.fm, 6);
        this.qa(M(a, Tm), this.TI, Gh);
        this.qa(M(a, Um), this.pX);
        this.qa(M(a, Vm), this.TI, Ih);
        b.f && this.Xd(M(a, ro), this.FX);
        b.An && this.Xd(M(a, kl), this.KW);
        b.ZC && this.qa(M(a, $m), this.$W);
        c = M(a, Ym);
        this.qa(c, this.jJ, c, Mh);
        c = M(a, Wm);
        this.qa(c, this.jJ, c, Lh);
        this.qa(M(a, hn), this.dU);
        this.qa(M(a, jn), this.SU);
        this.qa(M(a, kn), this.UX);
        this.qa(M(a, dn), this.UI, Kh, i);
        this.qa(M(a, en), this.UI, Kh, l);
        this.qa(K.Eq, this.RW);
        this.qa(K.Gq, this.Cw, ai);
        this.qa(K.Hq, this.vX);
        this.qa(K.Iq, this.wX);
        this.qa(K.Ku, this.uV);
        this.qa(K.Ju, this.mU);
        this.qa(K.Vk, this.Cw, bi);
        this.qa(K.Kq, this.PX);
        b.hF && this.Xd(M(a, sn), this.LW);
        if (!b.K) {
            this.qa(M(a, Bn), this.aJ, 0);
            this.qa(M(a, En), this.aJ, 1);
            this.qa(M(a, Jn), this.PU);
            this.qa(M(a, Hn), this.NV);
            this.qa(M(a, Ln), this.UV);
            this.qa(M(a, vn), this.MV);
            this.qa(M(a, zn), this.OV);
            this.qa(M(a, Tn), this.OU);
            this.qa(M(a, On), this.JV);
            this.qa(M(a, Vn), this.ZW);
            this.qa(M(a, Wn), this.HV);
            this.qa(M(a, Yn), this.MU);
            this.qa(M(a, cm), this.PV);
            this.qa(M(a, co), this.VU);
            this.qa(M(a, fo), this.TU);
            this.qa(M(a, ho), this.UU);
            this.qa(M(a, $n), this.YV);
            this.qa(M(a, jo), this.cJ, i);
            this.qa(M(a, lo), this.cJ, l);
            this.qa(M(a, no), this.bJ, l);
            this.qa(M(a, po), this.bJ, i);
            b.f && this.qa(M(a, to), this.lU);
            b.f && b.Qh && this.qa(M(a, uo), this.GX)
        }
    }
    b.Dq && this.Xd(M(a, jl), this.CV);
    if (b.Lu) {
        this.qa(M(a, ol), this.Do, Hma);
        this.qa(M(a, pl), this.Do, bF);
        this.qa(M(a, ql), this.Do, Ima);
        this.qa(M(a, rl), this.Do, Jma);
        this.qa(M(a, sl), this.Do, Kma);
        this.qa(M(a, tl), this.Do, Lma);
        this.qa(K.Rk, this.OW)
    }
    b.nD && this.Xd(M(a, ll), this.NW);
    a = this.M;
    this.lb || this.Ga().C(a, AE, this.AV).C(a, EE, this.RU).C(a, nE, this.sU).C(a, lE, this.kU).C(this.f, Ak, this.UY).C(this.Aa, Zu, this.gV)
};n.PD = function () {
    XE.p.PD.call(this);
    aw(this.Oa)
};
var Mma = "Binding a non-existent action to function ";

function cF(a, b, c, d, e) {
    if (b) {
        e.unshift(c, a);
        c = r.apply(k, e);
        d = r(a.QY, a, d, c);
        d = Pq(a.V, d, a);
        a.Oa.Za(b, Mi, d)
    } else a.V.log(Error(Mma + c))
}
n.Xd = function (a, b) {
    cF(this, a, b, l, Cc(arguments, 2))
};n.qa = function (a, b) {
    cF(this, a, b, i, Cc(arguments, 2))
};n.QY = function (a, b, c) {
    a && this.K.Ka(5);
    b(c)
};n.XY = function () {};n.xU = function () {
    this.va.Ps()
};n.YY = function () {
    var a = this.va.M.a;
    !y.ia && a.Uw && Mq(a).blur()
};
var dF = "apHeSty";n.fm = function (a) {
    var b = {};
    b.styVal = a;
    this.a.execute(dF, b)
};n.Do = function (a) {
    this.qm && this.qm.WH(a)
};n.Cw = function (a) {
    var b = {};
    b.styProp = a;
    b.styVal = i;
    this.a.execute(sr, b)
};n.rV = function () {
    var a = this.P;
    if (a) a: {
        if (!a.Wv) {
            var b = Rr(Qr.N(), es);
            if (!b.Nb()) break a;
            b = b.jc;
            var c = new(b.HS())(a.J());
            a.ya(c, i);
            a.Ga().C(c, b.pI().dz, a.pV).C(c, b.pI().LN, a.qV);
            a.Wv = c
        }
        a.Wv.X(i);
        Vq(a.a, i)
    }
};n.VY = function () {
    if (!this.bo) this.bo = new(Mr(Rr(Qr.N(), es)).FS())(this.u, this.J());
    eF(this.g, this.bo)
};
var fF = "fr";n.WY = function (a) {
    var b = {};
    b.fndFS = a.ch;
    b.fndMC = !! a.mc;
    b.fndBwd = !! a.fb;
    b.fndInc = !! a.finc;
    this.a.execute(fF, b)
};n.kJ = function (a, b) {
    var c = {};
    c.fndFS = b.ch;
    c.fndMC = !! b.mc;
    c.rplW = b.rw;
    c.rplA = a;
    this.a.execute(fF, c)
};n.sV = function (a) {
    var b = {};
    b.ts_ff = a;
    a = {};
    a.styMap = b;
    this.a.execute(sr, a)
};n.tV = function (a) {
    var b = {};
    b.ts_fs = a;
    a = {};
    a.styMap = b;
    this.a.execute(sr, a)
};n.TI = function (a, b) {
    var c = {};
    c[a] = b;
    gF(this, c, i)
};n.pX = function (a) {
    var b = {};
    b.ps_ifl = a.idtFL;
    b.ps_il = a.idtS;
    gF(this, b, i)
};
n.UI = function (a, b) {
    var c = {};
    c[a] = b;
    gF(this, c)
};
var hF = "apPaSty";

function gF(a, b, c) {
    var d = {};
    d.styMap = b;
    if (c) d.ignUnchVal = i;
    a.a.execute(hF, d)
}
var iF = "apPaAlgn";n.Bw = function (a) {
    var b = {};
    b.aPaAlign = a;
    this.a.execute(iF, b)
};
var jF = "inHdrFtr";n.aJ = function (a) {
    var b = {};
    b.hdrFtrType = a;
    this.a.execute(jF, b)
};
n.dW = function () {
    var a = this.A;
    var b = [],
        c = MD(a);
    if (Xv(a, c)) {
        c = a.Ub(dh, c[0]);
        var d = c.Bb;
        if (d) {
            switch (ri(Zv(a.Pa(d), c.yb))) {
            case 4:
            case 5:
                b.push(2);
                break;
            case 6:
            case 7:
                b.push(1);
                break
            }
            b.push(0)
        }
    }
    c = MD(a);
    c = a.oa(dh, c[0]);
    if (d = c.Bb) {
        switch (ri(Zv(a.Pa(d), c.yb))) {
        case 3:
            a = String(1);
            break;
        case 4:
            a = Wv(1, i);
            break;
        case 5:
            a = Wv(1, l);
            break;
        case 6:
            a = Vv(1, i);
            break;
        case 7:
            a = Vv(1, l);
            break;
        case 0:
        default:
            a = aj;
            break
        }
        a = a
    } else a = v;
    c = r(this.eW, this);
    eF(this.g, new(Mr(Rr(Qr.N(), es)).WS())(b, a, c, this.J()))
};
var kF = "rln";
n.eW = function (a) {
    var b = {};
    b.rn = a;
    this.a.execute(kF, b)
};
var lF = "tb";n.jh = function (a, b) {
    var c = {};
    c.ordered = a;
    if (Za(b)) c.bulGlyph = b;
    this.a.execute(lF, c)
};
var mF = "indP";n.iJ = function (a) {
    var b = {};
    b.ind = a;
    this.a.execute(mF, b)
};n.gU = function () {
    var a = r(this.ZJ, this);
    Uq(this.f, vk, Iq, a)
};n.SY = function () {
    this.ZJ()
};n.ZJ = function () {
    this.f.Qo = nF(this.A);
    this.f.Ef()
};n.hU = function () {
    var a = r(this.cH, this);
    Uq(this.f, xk, Iq, a)
};n.TY = function () {
    this.cH()
};
n.cH = function () {
    this.f.Qo = nF(this.A);
    var a = {};
    a.dso = i;
    this.a.execute(gs, a);
    this.f.Ef()
};n.iU = function () {
    var a = r(this.$J, this);
    Uq(this.f, zk, eha, a)
};n.UY = function () {
    this.$J()
};
n.$J = function () {
    var a = Rr(Qr.N(), es);
    if (a.Nb() && this.aa) {
        a = a.jc;
        var b = this.f;
        if (b.Df() || pha(Mq(b), b.f)) b = this.f.Qo;
        else {
            b = Mq(b);
            if (!b) return;
            b = (new(a.AS())(Yz(this.A), qv(this.va.getContext()))).zK(b);
            this.f.Qo = b
        }
        if (b) {
            var c = {};
            c.dss = this.mA;
            c.pstDocSl = b;
            c.pstEmEnIm = new(a.oI())(this.Xa, this.A, this.aa, this.a, this.V, l);
            this.a.execute(vj, c);
            this.f.Ef()
        }
    }
};n.NX = function () {
    var a = Rr(Qr.N(), es);
    if (a.Nb()) {
        var b = this.A.f;
        eF(this.g, new(a.jc.wT())(this.Xa.f, this.Xa.zl, b.Bq))
    }
};
n.LX = function () {
    if (this.Dv == 2) oF(this);
    else if (this.Dv != 1) {
        var a = Rr(Qr.N(), es);
        if (a.Nb()) {
            a = a.jc.wS();
            this.Dv = 1;
            a.load(r(this.X0, this), this.J())
        }
    }
};n.X0 = function () {
    this.Dv = 2;
    oF(this)
};

function oF(a) {
    var b = Rr(Qr.N(), es);
    b.Nb() && eF(a.g, new(b.jc.xS())(a.A, a.J()))
}
var pF = "apSpSug";n.jU = function (a) {
    var b = {};
    b.ch = a;
    this.a.execute(pF, b)
};n.MX = function () {
    var a = Rr(Qr.N(), es);
    a.Nb() && eF(this.g, new(a.jc.zS())(this.A, this.J()))
};
var qF = "delTC";n.TU = function () {
    var a = {};
    a.eTS = this.A.f.f;
    this.a.execute(qF, a)
};
var rF = "delTR";n.UU = function () {
    this.a.execute(rF, {})
};
var sF = "delT";n.VU = function () {
    this.a.execute(sF, {})
};
var tF = "apDocSty";n.ZU = function (a) {
    var b = a.mb,
        c = a.ml,
        d = a.mr,
        e = a.mt,
        g = l,
        h = Yz(this.A),
        j = {};
    if (b >= 0 && b != h.hk) {
        j.ds_mb = b;
        g = i
    }
    if (c >= 0 && c != h.Em) {
        j.ds_ml = c;
        g = i
    }
    if (d >= 0 && d != h.Fm) {
        j.ds_mr = d;
        g = i
    }
    if (e >= 0 && e != h.Eh) {
        j.ds_mt = e;
        g = i
    }
    b = a.ph;
    a = a.pw;
    if (b > 0 && b != h.ea(Qs)) {
        j.ds_ph = b;
        g = i
    }
    if (a > 0 && a != h.ea(Ps)) {
        j.ds_pw = a;
        g = i
    }
    if (g) {
        g = {};
        g.styMap = j;
        this.a.execute(tF, g)
    }
};
n.IW = function (a) {
    a = a ? ow(a) : k;
    var b = Yz(this.A);
    if (a != b.g.Cj()) {
        b = {};
        b.col = a;
        this.a.execute(tF, b)
    }
};n.OW = function () {
    mw(this.Xa, r(this.T0, this))
};
var Nma = ":showComments=",
    Oma = ":footnotesAsEndnotes=",
    Pma = ":pageNumberLocation=";n.pT = function () {
    var a = this.A.f,
        b = this.ng,
        c = new N(a.P);
    b && a.pQ && c.append(Nma, b.wy, Oma, b.Yv, Pma, b.RA());
    return c.toString()
};
var Qma = "showComments",
    Rma = "footnotesAsEndnotes",
    Sma = "pageNumberLocation";
n.T0 = function () {
    var a = [];
    if (this.ng) a = [Qma, this.ng.wy, Rma, this.ng.Yv, Sma, this.ng.RA()];
    this.qm && this.qm.WH(bF, a)
};
var uF = "inBk";n.HV = function () {
    this.a.execute(uF, {})
};
var vF = "inCo";n.JV = function () {
    var a = {};
    a.usrNm = this.A.f.KD;
    this.a.execute(vF, a)
};
var wF = "inFo";n.NV = function () {
    this.a.execute(wF, {})
};
var xF = "inHR";n.PV = function () {
    this.a.execute(xF, {})
};

function yF(a) {
    var b = Rr(Qr.N(), es);
    if (b.Nb()) {
        var c = a.A.f;
        return new(b.jc.nT())(a.Xa, c.FF, window.location.protocol, c.P, c.$u)
    }
    return k
}
n.LV = function () {
    if (this.Ug = yF(this)) {
        this.Ug.Nd.Z_(r(this.KV, this));
        eF(this.g, this.Ug)
    }
};n.SX = function (a) {
    if (this.Ug = yF(this)) {
        var b = r(this.RX, this, a.entityId);
        this.Ug.Nd.v_(a.drawingId, b);
        eF(this.g, this.Ug)
    }
};n.RV = function () {
    var a = this.km;
    a ? eF(this.g, a) : Zr(Qr.N(), es, this.c2, this)
};n.c2 = function () {
    var a = this.V;
    this.km = zF(this, this.A.f.g1, r(this.QV, this));
    this.Ga().C(this.km, zp, Pq(a, this.XI, this))
};
n.QV = function (a) {
    if (this.aa) {
        var b = Rr(Qr.N(), es);
        if (b.Nb()) {
            var c = b.jc;
            this.km.X(l);
            AF(this.aa, r(function (d) {
                c.XS()(a, this.Xa, d, r(this.wV, this))
            }, this))
        }
    }
};
var BF = "inInEnt";n.KV = function (a) {
    if (a.close) {
        this.Ug.X(l);
        var b = Rr(Qr.N(), es);
        if (b.Nb()) {
            b = b.jc.oT()(a.f || a.size);
            var c = CF(this, b.width, b.height),
                d = Ge.N();
            b = {};
            b.eo_type = 2;
            b.i_wth = c.width / Ye(d);
            b.i_ht = c.height / Ye(d);
            b.d_revision = a.a;
            b.d_id = a.id;
            a = {};
            a.ee_eo = b;
            b = {};
            b.ePM = a;
            this.a.execute(BF, b)
        }
    }
};
var DF = "upD";
n.RX = function (a, b) {
    this.Ug.X(l);
    var c = {};
    c.eId = a;
    c.dId = b.id;
    c.dRev = b.a;
    this.a.execute(DF, c)
};n.wV = function (a, b, c, d) {
    d = CF(this, c, d);
    var e = Ge.N();
    c = {};
    c.eo_type = 0;
    c.i_wth = d.width / Ye(e);
    c.i_ht = d.height / Ye(e);
    c.i_src = a;
    c.i_cid = b;
    a = {};
    a.ee_eo = c;
    b = {};
    b.ePM = a;
    this.a.execute(BF, b)
};
var Tma = "Failed to calculate new position for image during resize.",
    EF = "upEESize";
n.$W = function (a) {
    var b = a.entityId,
        c = this.A.Pa(b);
    if (c && c.a) {
        var d = {};
        d.eId = b;
        d.size = a.size;
        if (c.O() == ut) {
            b = a[zB];
            a = a[AB];
            c = c.ma();
            c = Xz(this.va.P, c, b, a);
            if (!c) {
                this.V.log(Error(Tma));
                return
            }
            d.pos = c
        }
        this.a.execute(EF, d)
    }
};

function CF(a, b, c) {
    a = Xe(Ge.N(), 600);
    return b > a ? new cd(a, Math.round(a / b * c)) : new cd(b, c)
}
var FF = "inEq";n.MV = function () {
    var a = M(this.u, tn);
    a && !Ii(a) && Ni(a);
    a = {};
    a.eqP = qt;
    this.a.execute(FF, a)
};
var GF = "inFunc";
n.OV = function (a) {
    var b = {};
    b.funcCode = a.code;
    b.funcNumArgs = a.Kx;
    this.a.execute(GF, b)
};
var HF = "inPB";n.UV = function () {
    this.a.execute(HF, {})
};n.VV = function () {
    var a = Rr(Qr.N(), es);
    if (a.Nb()) {
        var b = r(this.WV, this),
            c = Ev(this.A.ra());
        c = c ? this.A.Y().slice(c.start, c.end) : v;eF(this.g, a.jc.pS()(b, YE, c, this.J()))
    }
};n.WV = function (a, b) {
    var c = {};
    c.ch = a;
    this.a.execute(ks, c);
    YE = b
};n.HW = function (a) {
    var b = ss.N();
    vs(b, a, i)
};
var IF = "delBk";n.MU = function (a) {
    var b = {};
    b.eId = a.entityId;
    this.a.execute(IF, b)
};
var JF = "delCo";
n.OU = function (a) {
    var b = {};
    b.eId = a.entityId;
    this.a.execute(JF, b)
};
var KF = "delFo";n.PU = function (a) {
    var b = {};
    b.eId = a.entityId;
    this.a.execute(KF, b)
};
var LF = "rtc";n.ZW = function (a) {
    var b = {};
    b.eId = a.entityId;
    b.usrNm = this.A.f.KD;
    this.a.execute(LF, b)
};
var MF = "delL";n.QU = function () {
    this.a.execute(MF, {})
};
n.SV = function () {
    var a = Rr(Qr.N(), es);
    if (a.Nb()) {
        var b = this.A;
        a = a.jc;
        var c = new nb(0, 0),
            d = Dv(b, c),
            e, g, h = l;
        if (d == 0) if (d = Hv(b, c)) {
            if (d.O() == 0) {
                g = d.a;
                e = b.Y().slice(c.start, c.end)
            }
            h = i
        } else {
            e = b.Y().slice(c.start, c.end);
            g = e;
            d = Kv(g);
            var j = !d && Av.test(g);
            g = !d && !j ? v : j && !(Lt(g)[1] || 0) ? dC + g : g;
            if (g) {
                Lv(this.u, e, g);
                return
            }
        } else if (d == 1) {
            e = b.Y().slice(c.start, c.end);
            h = Cv(b.oa(ch, c.end));
            if (h.O() == 0) g = h.a;
            h = i
        } else g = e = v;
        h && wr(b, new P(c.start), i, new P(c.end + 1));
        eF(this.g, new(a.OS())(b, this.u, !h, g, e, this.J()))
    }
};
var NF = "inL";n.TV = function (a) {
    this.a.execute(NF, a)
};n.CV = function () {
    var a = this.Om;
    a ? eF(this.g, a) : Zr(Qr.N(), es, this.b2, this)
};n.b2 = function () {
    var a = this.V;
    this.Om = zF(this, this.A.f.OF, r(this.bV, this));
    this.Ga().C(this.Om, zp, Pq(a, this.XI, this))
};

function zF(a, b, c) {
    b = new(Mr(Rr(Qr.N(), es)).$S())(b, i);
    b.M1(c);
    eF(a.g, b);
    return b
}
n.ZY = function (a, b, c) {
    var d = Mr(Rr(Qr.N(), es));
    if (a.M && a.HF) {
        var e = d.fS(),
            g = xv(this.va.getContext(), d.fw());
        d = new(d.oI())(this.Xa, this.A, this.aa, this.a, this.V, l);
        this.mv = new e(a.P, a.$u, g, b, this.A, this.a, c, d, this.J())
    }
};
var OF = "picked";n.bV = function (a) {
    switch (a.action) {
    case OF:
        if ((a = a.docs) && a.length > 0) {
            a = a[0];
            if (a.serviceId == Vw) window.location = a.url;
            else this.qm && this.qm.I1(a.id, Uma, r(this.cV, this))
        }
        break;
    case vp:
        break;
    default:
        return
    }
    this.Om.X(l)
};

function Uma(a) {
    Oj(function () {
        window.location = a
    })
}
var Vma = "Import failed",
    Wma = "Sorry we were unable to convert your document.";n.cV = function () {
    Vq(this.K, i);
    Mp(Vma, Wma, r(this.RY, this))
};n.RY = function () {
    Vq(this.K, l)
};
var Xma = "Insert table called without row / column data.",
    PF = "inT";n.YV = function (a) {
    if (!a || !a.height || !a.width) this.V.log(Error(Xma));
    else {
        var b = {};
        b.tblCC = a.width;
        b.tblRC = a.height;
        b.eTS = this.A.f.f;
        this.a.execute(PF, b)
    }
};
var QF = "inTR";
n.cJ = function (a) {
    var b = {};
    b.tblRA = a;
    this.a.execute(QF, b)
};
var RF = "inTC";n.bJ = function (a) {
    var b = {};
    b.tblCR = a;
    b.eTS = this.A.f.f;
    this.a.execute(RF, b)
};
var SF = "inTOC";n.XV = function () {
    this.a.execute(SF, {})
};
var TF = "rfrAuto";n.SW = function (a) {
    var b = {};
    b.spi = a.ind;
    this.a.execute(TF, b)
};
var UF = "apTblSty";
n.lU = function (a) {
    var b = {},
        c = a.tblBC,
        d = a.tblBW;
    if (p(c) || p(d)) {
        var e = {};
        if (p(c)) e.tbls_bc = c;
        if (p(d)) e.tbls_bw = d;
        b.tblSM = e
    }
    c = a.colWT;
    d = a.colWV;
    if (p(c)) {
        b.colWT = c;
        if (p(d)) b.colWV = d
    }
    c = a.rowHV;
    if (p(c)) {
        d = {};
        d.row_mh = c;
        b.rowSM = d
    }
    c = a.cellBC;
    d = a.cellP;
    a = a.cellVA;
    if (p(c) || p(d) || p(a)) {
        e = {};
        if (p(c)) e.cell_bgc = c;
        if (p(d)) {
            e.cell_pt = d;
            e.cell_pb = d;
            e.cell_pl = d;
            e.cell_pr = d
        }
        if (p(a)) e.cell_va = a;
        b.cellSM = e
    }
    this.a.execute(UF, b)
};
var VF = "rTbl";
n.GX = function (a) {
    var b = {};
    if (a.rrSI) {
        b.rrSI = a.rrSI;
        for (var c = a.rrH, d = [], e = 0; e < c.length; e++) {
            var g = {};
            g.row_mh = c[e];
            d.push(g)
        }
        b.rrSM = d
    }
    if (a.rscolI) {
        b.tblST = a.tblST;
        b.rscolI = a.rscolI;
        b.rscolWT = a.rscolWT;
        b.rscolWV = a.rscolWV
    }
    this.a.execute(VF, b)
};n.oW = function () {
    var a = Rr(Qr.N(), es);
    if (a.Nb()) {
        a = a.jc;
        var b = this.J(),
            c = wv(this.va.getContext());
        a = new(a.TS())(c.f0, b);
        a.Ja(k);
        eF(this.g, a)
    }
};
n.pW = function () {
    var a = Rr(Qr.N(), es);
    if (a.Nb()) {
        a = a.jc;
        var b = this.J(),
            c = wv(this.va.getContext());
        a = new(a.US())(c.L0, b);
        a.Ja(k);
        eF(this.g, a)
    }
};n.KW = function () {
    var a = Rr(Qr.N(), es);
    a.Nb() && eF(this.g, new(a.jc.YS())(this.u, this.A, this.J()))
};n.NW = function () {
    var a = Rr(Qr.N(), es);
    if (a.Nb()) {
        a = a.jc;
        if (!this.ng) this.ng = new(a.cT());
        eF(this.g, new(a.dT())(this.A, this.ng, this.J()))
    }
};n.FX = function () {
    var a = Rr(Qr.N(), es);
    a.Nb() && eF(this.g, new(a.jc.tT())(this.u, this.A, this.J()))
};
n.mU = function (a) {
    var b = a ? ow(a) : k;a = {};a.ts_bgc = b;b = {};b.styMap = a;this.a.execute(sr, b)
};n.uV = function (a) {
    var b = {};
    b.ts_fgc = a;
    a = {};
    a.styMap = b;
    this.a.execute(sr, a)
};n.wX = function () {
    var a = {};
    a.styProp = ci;
    a.styVal = oi;
    this.a.execute(sr, a)
};n.vX = function () {
    var a = {};
    a.styProp = ci;
    a.styVal = ni;
    this.a.execute(sr, a)
};n.WU = function (a) {
    var b = {};
    b.delrW = a.f.delrW;
    b.delrP = a.f.delrP;
    this.a.execute(gs, b)
};
var WF = "delPE";n.RU = function () {
    this.a.execute(WF, {})
};
n.nU = function (a) {
    var b = {};
    b.delbW = a.f.delbW;
    b.delbL = a.f.delbL;
    b.view = this.va;
    this.a.execute(hs, b)
};n.sU = function () {
    this.a.execute(nE, {})
};
var XF = "apTab";n.kU = function (a) {
    var b = {};
    b.sh = a.f.shift;
    this.a.execute(XF, b);
    av(this)
};
var YF = "aC";
n.IV = function (a) {
    var b = {};
    b.ch = a.f.ch;
    this.a.execute(ks, b);
    b = this.A;
    if (b.f.IB) {
        a = this.xa;
        var c = b.Y();
        b = qu(b) - 1;
        b = E(c, b);
        var d = k;
        if (b > 0 && gu(b, c, l) && hu(b - 1, c) == Cj) {
            c = 0;
            for (var e; e = a.f[c]; c++) {
                d || (d = []);
                d.push(e)
            }
        }
        if (a.a[b]) for (c = 0; e = a.a[b][c]; c++) {
            d || (d = []);
            d.push(e)
        }
        if (a = d) {
            b = {};
            b.aCR = a;
            this.a.execute(YF, b)
        }
    }
};n.iX = function () {
    var a = Rr(Qr.N(), es);
    a.Nb() && eF(this.g, new(a.jc.iT())(this.J()))
};n.AV = function (a) {
    var b = {};
    b.ch = a.f.ch;
    b.pimc = a.f.pimec;
    b.spi = a.f.ind;
    this.a.execute(AE, b)
};
n.yV = function (a) {
    var b = this.M;
    a = a.f.l;
    if (b.n.f) {
        a = a && a.O() == 0 ? a.a : b.Lj + b.f.$c().length;b.n.f = l;OA(Fy(b.va.getContext()), zE);yE(b);wr(b.A, new P(a), i);Oj(b.xQ, 0, b)
    }
};n.Aw = function (a) {
    var b = {};
    b.ps_ls = a;
    a = {};
    a.styMap = b;
    this.a.execute(hF, a)
};
var ZF = "mvPE";n.vW = function (a) {
    var b = this.A.ra().Fa().ma();
    if (a = Xz(this.va.P, b, a[zB], a[AB])) {
        var c = Ge.N();
        b = {};
        b.pe_lo = a.offsetLeft / Ye(c);
        b.pe_to = a.offsetTop / Ye(c);
        c = {};
        c.ePM = b;
        c.spi = a.tM;
        this.a.execute(ZF, c)
    }
};
var $F = "upEEPos";
n.TX = function (a) {
    var b = {};
    b.eId = a.entityId;
    b.view = this.va;
    b.posd = a.posd;
    this.a.execute($F, b)
};n.jJ = function (a, b) {
    var c;
    if (a) c = a.pc(Ki);
    if (fb(c)) {
        var d = {};
        d[b] = c;
        c = {};
        c.styMap = d;
        this.a.execute(hF, c)
    }
};
var aG = "clrFmt";n.yU = function () {
    this.a.execute(aG, {})
};n.gV = function (a) {
    var b = {};
    b.loc = a.f.l;
    b.dss = this.mA;
    this.a.execute(Zu, b)
};n.kX = function () {
    var a = this.A,
        b = qu(a);
    wr(a, new P(Iu(a, b) + 1), i, new P(Ju(a, b) + 1, i), l, i);
    av(this)
};
n.PX = function () {
    var a = this.a;
    if (a.a.length != 0) {
        a.pv = l;
        var b = ms(a, a.a);
        if (b) {
            ls(a, b.XJ());
            a.f.unshift(b)
        }
    }
};n.RW = function () {
    var a = this.a;
    if (a.f.length != 0) {
        var b = ms(a, a.f);
        if (b) {
            var c = b.WJ();
            ls(a, c);
            a.a.unshift(b)
        }
    } else if (a.pv && a.a.length != 0) {
        b = a.a[0];
        a.execute(b.O(), b.uz || {})
    }
};
var bG = "kix_debug";n.LW = function () {
    Zr(Qr.N(), bG, this.G0, this, l, l, i)
};n.G0 = function () {
    if (!this.yp) {
        var a = Mr(Rr(Qr.N(), bG)),
            b = a.v5();
        a = new(a.w5())(this.A, this.u, this.a, this.Ya, this.f);
        this.yp = new b(a, this.J())
    }
    eF(this.g, this.yp)
};
n.XI = function () {
    this.K.Ka(5)
};n.dU = function (a) {
    var b = a.ind,
        c = a.off,
        d = {};
    d.tbs_al = a.aln;
    d.tbs_of = c;
    b = bg(Zf, b, d);
    a = {};
    a.ps_ts = b;
    b = {};
    b.styMap = a;
    this.a.execute(hF, b)
};
var cG = "delTS";n.SU = function (a) {
    var b = {};
    b.delI = a.ind;
    this.a.execute(cG, b)
};
var dG = "upTS";n.UX = function (a) {
    var b = {};
    b.tSA = a.aln;
    b.tSI = a.ind;
    b.tSO = a.off;
    this.a.execute(dG, b)
};n.PY = function () {
    this.A.gK = Ii(M(this.u, rn))
};
n.q = function () {
    this.a.G();
    XE.p.q.call(this);
    this.Aa.G();
    delete this.Aa;
    this.M.G();
    delete this.M;
    if (this.xa) {
        this.xa.G();
        delete this.xa
    }
    this.bo && this.bo.G();
    delete this.bo;
    this.Om && this.Om.G();
    delete this.Om;
    this.km && this.km.G();
    delete this.km;
    this.yp && this.yp.G();
    delete this.yp;
    this.Oa.G();
    delete this.Oa;
    this.mv && this.mv.G();
    delete this.mv;
    delete this.aa;
    delete this.Xa;
    this.ng && this.ng.G();
    delete this.ng
};

function eG(a, b, c, d, e, g, h, j, m, o, q, u, w, C) {
    var B = new Wu(0),
        H = new Du(d, e, h, B),
        I = new fs(d, e),
        T = new JE(b, c, d, I, e, g, h, B, j, m, H, C, o),
        X;
    X = new gE(H, y.Fc);
    var V = new jE(y.Fc);
    X = new qE(b, c, d, I, e, g, h, B, m, H, X, V, C, o);
    return new XE(a, b, c, d, e, g, h, B, T, X, I, j, m, H, o, q, u, w, C, new qw)
};

function fG(a) {
    this.a = a;
    this.L = new ze(this)
}
s(fG, Pi);

function eF(a, b) {
    a.L.C(b, zp, a.f);
    Vq(a.a, i);
    b.X(i)
}
fG.prototype.f = function () {
    Vq(this.a, l)
};fG.prototype.q = function () {
    fG.p.q.call(this);
    this.L.G();
    delete this.L
};

function gG() {}
s(gG, t);gG.prototype.cd = function (a, b) {
    switch (b) {
    case 4:
        this.a(a);
    case 3:
    }
};gG.prototype.a = function () {};

function hG() {}
s(hG, gG);hG.prototype.a = function (a) {
    L(a, Wn, Xn);
    L(a, Yn, Zn)
};

function iG() {}
s(iG, gG);iG.prototype.a = function (a) {
    L(a, On, Pn, Qn, Rn, Sn, undefined, i);
    L(a, Tn, Un, Un, undefined, undefined, undefined, i);
    L(a, Vn, v)
};

function jG(a) {
    this.f = a
}
s(jG, gG);jG.prototype.a = function (a) {
    this.f && L(a, tn, un, un);
    L(a, vn, wn, xn, yn, undefined, undefined, i, undefined, i);
    L(a, zn, v, An)
};

function kG() {}
s(kG, gG);kG.prototype.a = function (a) {
    L(a, En, Fn, Gn)
};

function lG() {}
s(lG, gG);lG.prototype.a = function (a) {
    L(a, Hn, In);
    L(a, Jn, Kn)
};

function mG() {}
s(mG, gG);mG.prototype.a = function (a) {
    L(a, Bn, Cn, Dn)
};

function nG() {}
s(nG, gG);nG.prototype.a = function (a) {
    L(a, cm, dm, dm, em)
};

function oG() {}
s(oG, gG);oG.prototype.a = function (a) {
    L(a, Ln, Mn, undefined, Nn)
};

function pG(a, b) {
    this.f = a;
    this.g = b
}
s(pG, gG);pG.prototype.a = function (a) {
    L(a, $n, ao, ao, undefined, undefined, new cd(0, 0));
    L(a, bo, ao, ao);
    L(a, co, eo);
    L(a, jo, ko);
    L(a, lo, mo);
    L(a, ho, io);
    L(a, no, oo);
    L(a, po, qo);
    L(a, fo, go);
    L(a, ro, so);
    L(a, to, v, undefined, undefined, undefined, undefined, !this.f);
    L(a, uo, v, undefined, undefined, undefined, undefined, !this.f || !this.g)
};

function qG(a, b) {
    this.g = b;
    this.f = a
}
s(qG, t);qG.prototype.a = k;qG.prototype.ND = function (a) {
    var b = {};
    if (a.Cb) b[2] = new hG;
    if (a.u) b[4] = new iG;
    if (a.n) b[8] = new jG(a.g == 4);
    if (a.Oa) {
        b[64] = new mG;
        b[16] = new kG
    }
    b[128] = new nG;
    if (a.aa) b[32] = new lG;
    if (a.Ya) b[256] = new oG;
    if (a.a) b[512] = new pG(a.f, a.Qh);
    this.a = b;
    for (var c in this.a) this.a[c].cd(this.f, this.g)
};qG.prototype.q = function () {
    qG.p.q.call(this);
    delete this.f;
    delete this.a
};

function rG(a) {
    this.a = a
}
rG.prototype.f = function (a) {
    a.Lg == tr && this.a.log(a.name, a.duration)
};

function sG() {
    var a = r(this.f, this);
    window.KX_getEditStats = a
}
Qa(sG);sG.prototype.a = 0;sG.prototype.g = function (a) {
    if (a.Lg == BE && a.name == CE) this.a += a.duration
};sG.prototype.f = function () {
    return cr({
        "0": this.a
    })
};
var Yma = "edit_new",
    Zma = "edit",
    $ma = "view",
    ana = "published",
    tG = "preview";

function bna(a, b) {
    switch (a) {
    case 4:
        return b ? Yma : Zma;
    case 3:
        return $ma;
    case 1:
        return ana;
    case 2:
        return tG;
    default:
        return k
    }
};

function uG(a) {
    this.g = a
}
s(uG, t);n = uG.prototype;n.O = function () {
    return this.g
};n.wl = function () {
    return k
};n.QJ = function () {
    return i
};n.Z = function () {
    var a = {};
    a.ty = this.g;
    return a
};n.shift = function () {};
var vG = new rr;

function wG(a) {
    return vG.execute(a.ty, a)
};

function xG(a, b, c) {
    this.g = yD;
    this.Wg = a;
    this.u = b;
    this.n = c
}
s(xG, uG);n = xG.prototype;n.ma = function () {
    return this.u
};n.Sj = function () {
    if (dh == this.Wg) return [];
    var a = {};
    a.id = this.u;
    return [vG.execute(AD, a)]
};n.QJ = function () {
    return dh != this.Wg
};n.Z = function () {
    var a = xG.p.Z.call(this);
    a.et = this.Wg;
    a.id = this.u;
    a.epm = this.n;
    return a
};n.q = function () {
    xG.p.q.call(this);
    delete this.n
};vG.set(yD, function (a) {
    return new xG(a.et, a.id, a.epm)
});

function yG() {}
s(yG, t);

function zG(a) {
    this.f = a
}
s(zG, yG);zG.prototype.q = function () {
    zG.p.q.call(this);
    this.f.G();
    delete this.f
};

function AG(a, b, c, d) {
    this.g = ED;
    this.f = a;
    this.n = b;
    this.u = c;
    this.K = d
}
s(AG, uG);n = AG.prototype;n.qc = function () {
    return this.n
};n.Se = function () {
    return this.u
};n.wl = function (a) {
    a = BG(a, this.f, this.n, this.u);
    return new zG(a)
};n.Sj = function (a) {
    var b = [];
    a = Uy(BG(a, this.f, this.n, this.u));
    for (var c = Qg(a), d = 0; d < c.length; d++) {
        var e = new AG(this.f, this.n + c[d], c[d + 1] ? this.n + c[d + 1] - 1 : this.u,
        a[c[d]].Z());
        b.push(e)
    }
    return b
};
n.Z = function () {
    if (th(this.f)) return {};
    var a = AG.p.Z.call(this);
    a.st = this.f;
    a.si = this.n;
    a.ei = this.u;
    a.sm = this.K;
    return a
};n.shift = function (a) {
    this.n += a;
    this.u += a;
    if (this.n < 0 || this.u < 0) f(Error("Apply style mutation indices shifted to be negative."))
};n.q = function () {
    AG.p.q.call(this);
    delete this.K
};vG.set(ED, function (a) {
    return new AG(a.st, a.si, a.ei, a.sm)
});

function CG(a, b, c) {
    this.n = a;
    this.f = b;
    this.g = c
}
s(CG, yG);CG.prototype.q = function () {
    CG.p.q.call(this);
    delete this.f
};

function DG(a) {
    this.g = AD;
    this.n = a
}
s(DG, uG);DG.prototype.ma = function () {
    return this.n
};DG.prototype.wl = function (a) {
    var b = a.Pa(this.n);
    if (b) {
        a = FA(a, this.n);
        return new CG(b.O(), b.Z(), a)
    }
    return k
};DG.prototype.Sj = function (a) {
    var b = [],
        c = a.Pa(this.n);
    if (!c) return [];
    a = FA(a, this.n);
    var d = {};
    d.et = c.O();
    d.id = this.n;
    d.epm = c.Z();
    c = vG.execute(yD, d);
    b.push(c);
    if (a >= 0) {
        d = {};
        d.id = this.n;
        d.spi = a;
        c = vG.execute(DD, d);
        b.push(c)
    }
    return b
};DG.prototype.Z = function () {
    var a = DG.p.Z.call(this);
    a.id = this.n;
    return a
};
vG.set(AD, function (a) {
    return new DG(a.id)
});

function EG(a) {
    this.a = a
}
s(EG, yG);EG.prototype.q = function () {
    EG.p.q.call(this);
    this.a.G();
    delete this.a
};

function FG(a, b) {
    this.g = wD;
    this.n = a;
    this.u = b
}
s(FG, uG);n = FG.prototype;n.qc = function () {
    return this.n
};n.Se = function () {
    return this.u
};n.wl = function (a) {
    a = xz(a, this.n, this.u, i);
    return new EG(a)
};
n.Sj = function (a) {
    var b = [],
        c = this.n,
        d = xz(a, c, this.u, i),
        e = {};
    e.ibi = c;
    e.s = d.Y();
    var g = vG.execute(xD, e);
    b.push(g);
    for (var h = d.g, j = 0; j < h.length; j++) {
        var m = h[j],
            o = m.O(),
            q = sh(o);
        m = m.a;
        for (var u = Qg(m), w = 0; w < u.length; w++) {
            var C = m[u[w]];
            e = {};
            e.st = o;
            e.si = c + u[w];
            e.ei = q ? this.n + u[w] : u[w + 1] ? this.n + u[w + 1] - 1 : this.u;e.sm = C.Z();g = vG.execute(ED, e);b.push(g)
        }
    }
    d = d.f;
    for (var B in d) {
        var H = B;
        Pg(d[H], function (I, T) {
            for (var X in T) {
                var V = T[Number(X)],
                    ma = a.Pa(V);
                if (ma) {
                    ma = ma.Z();
                    e = {};
                    e.et = H;
                    e.id = V;
                    e.epm = ma;
                    g = vG.execute(yD, e);
                    b.push(g);
                    ma = c + I;
                    e = {};
                    e.id = V;
                    e.spi = ma;
                    g = vG.execute(DD, e);
                    b.push(g)
                }
            }
            return l
        })
    }
    return b
};n.Z = function () {
    var a = FG.p.Z.call(this);
    a.si = this.n;
    a.ei = this.u;
    return a
};n.shift = function (a) {
    this.n += a;
    this.u += a;
    if (this.n < 0 || this.u < 0) f(Error("Delete spacers mutation indices shifted to be negative."))
};vG.set(wD, function (a) {
    return new FG(a.si, a.ei)
});

function GG(a, b) {
    this.g = xD;
    this.a = a;
    this.n = b
}
s(GG, uG);GG.prototype.Y = function () {
    return this.n
};GG.prototype.Sj = function () {
    var a = this.a,
        b = {};
    b.si = a;
    b.ei = a + this.n.length - 1;
    return [vG.execute(wD, b)]
};GG.prototype.Z = function () {
    var a = GG.p.Z.call(this);
    a.ibi = this.a;
    a.s = this.n;
    return a
};
var HG = "Apply meta style mutation indices shifted to be negative.";GG.prototype.shift = function (a) {
    this.a += a;
    if (this.a < 0) f(Error(HG))
};vG.set(xD, function (a) {
    return new GG(a.ibi, a.s)
});

function IG(a, b) {
    this.g = b;
    this.n = a
}
s(IG, uG);

function JG(a) {
    var b = [];
    a = a.snapshot;
    for (var c = 0; c < a.length; c++) {
        var d = wG(a[c]);
        b.push(d)
    }
    return b
}
IG.prototype.q = function () {
    IG.p.q.call(this);
    delete this.n
};

function KG(a) {
    IG.call(this, a, js)
}
s(KG, IG);vG.set(js, function (a) {
    return new KG(JG(a))
});

function LG(a) {
    IG.call(this, a, is)
}
s(LG, IG);vG.set(is, function (a) {
    return new LG(JG(a))
});

function MG(a) {
    this.f = a
}
s(MG, yG);

function NG(a, b) {
    this.g = DD;
    this.u = a;
    this.n = b
}
s(NG, uG);n = NG.prototype;n.ma = function () {
    return this.u
};n.wl = function (a) {
    a = FA(a, this.u);
    return new MG(a)
};n.Sj = function (a) {
    var b = {};
    b.id = this.u;
    b.spi = FA(a, this.u);
    return [vG.execute(DD, b)]
};n.Z = function () {
    var a = NG.p.Z.call(this);
    a.id = this.u;
    a.spi = this.n;
    return a
};n.shift = function (a) {
    this.n += a;
    if (this.n < 0) f(Error(HG))
};vG.set(DD, function (a) {
    return new NG(a.id, a.spi)
});

function OG(a) {
    this.f = a
}
s(OG, yG);OG.prototype.q = function () {
    OG.p.q.call(this);
    delete this.f
};

function PG(a, b) {
    this.g = zD;
    this.u = a;
    this.n = b
}
s(PG, uG);n = PG.prototype;n.ma = function () {
    return this.u
};n.wl = function (a) {
    if (a = a.Pa(this.u)) {
        a = a.Uc(this.n);
        return new OG(a)
    }
    return k
};n.Sj = function (a) {
    if (a = a.Pa(this.u)) {
        a = a.Uc(this.n);
        return [new PG(this.u, a)]
    }
    return []
};n.Z = function () {
    var a = PG.p.Z.call(this);
    a.id = this.u;
    a.epm = this.n;
    return a
};n.q = function () {
    PG.p.q.call(this);
    delete this.n
};vG.set(zD, function (a) {
    return new PG(a.id, a.epm)
});
var cna = "Received a server message with an empty list of mutations that did not originate from a user session: ",
    dna = "Received a server message with an empty list of mutations and a null cursor: ";

function QG(a, b) {
    this.f = a.sid;
    this.M = !! a.catchup;
    this.n = a.editedBy || k;
    this.u = isNaN(a.editedAt) ? k : a.editedAt;
    var c = -1;this.a = k;
    var d = a.mutations;
    if (d) {
        for (var e = [], g = 0; g < d.length; g++) {
            var h = d[g].rev;
            if (Za(h) && h != -1) c = h;
            e[g] = wG(d[g])
        }!this.f && e.length == 0 && b.log(Error(cna + a));
        this.a = e
    }
    this.g = Za(a.rev) ? a.rev : c;
    if (Za(a.startRev)) this.xk = a.startRev;
    else if (this.g < 1) this.xk = this.g;
    else {
        c = this.g;
        d = this.a;
        if (!d || d.length == 0) d = 0;
        else {
            for (g = e = 0; g < d.length; g++) {
                if (d[g].O() == ED) if (th(d[g].f)) continue;
                e++
            }
            d = e
        }
        this.xk =
        c - d + 1
    }
    this.K = k;
    if (a.cursorLoc) {
        d = a.cursorLoc;
        c = RG(d.cl);
        d = RG(d.sml);
        c = new SG(c);
        TG(c, d);
        this.K = c
    }!this.a && !this.K && b.log(Error(dna + a))
}
QG.prototype.ji = function () {
    return this.g
};QG.prototype.ra = function () {
    return this.K
};

function RG(a) {
    var b = a.loc_type;
    switch (b) {
    case 0:
        return new P(a.si, a.aps);
    case 1:
        return new Uw(a.id);
    default:
        f(Error("Unrecognized cursor type field " + b))
    }
};

function UG() {
    this.f = [];
    this.g = []
}
s(UG, t);UG.prototype.a = k;

function VG(a, b, c) {
    a.a ? c(a.a.Gd(b)) : a.f.push({
        path: b,
        t1: c
    })
}
function xla(a, b, c, d) {
    VG(a, b, function (e) {
        d && e.Pf(d);
        e.Lh(c).Ld()
    })
}
function AF(a, b) {
    a.a ? b(a.a) : a.g.push(b)
}
UG.prototype.q = function () {
    UG.p.q.call(this);
    delete this.a;
    delete this.f;
    delete this.g
};
var WG = "test";

function XG() {
    try {
        var a = window.localStorage;
        if (a && (y.product.qq || y.product.nz || y.product.ia)) {
            a.setItem(WG, WG);
            if (a.getItem(WG) == WG) {
                a.removeItem(WG);
                if (a.getItem(WG) == k) return i
            }
        }
    } catch (b) {}
    return l
};

function YG(a, b) {
    this.A = a;
    this.f = b;
    this.a = new N
}
s(YG, t);
var ena = /^ +/,
    fna = /  +/g,
    gna = /\t/g,
    hna = /</g,
    ina = />/g,
    jna = /&/g,
    kna = RegExp(Nx, ec),
    lna = RegExp(Px, ec),
    mna = RegExp(Rx, ec),
    nna = RegExp(Tx, ec),
    ona = Ng([Jg, Tb, Ub, Sb, Nx, Px, Rx, Tx, Ig], i),
    pna = y.La ? "white-space:pre-wrap;" : v,
    qna = ["h1", "h2", "h3", "h4", "h5", "h6"];n = YG.prototype;n.Di = k;n.zp = k;n.dn = k;n.Vm = k;n.Gi = k;n.Tx = k;n.sp = k;n.Rm = v;n.Qi = k;n.gf = k;n.Np = k;
var rna = '<span class="Apple-tab-span" style="white-space:pre;">\t</span>',
    sna = "&nbsp;&nbsp;&nbsp; ",
    tna = '<br class="kix-line-break">';

function ZG(a, b) {
    if (ona.test(a)) {
        if (a.indexOf(Sb) != -1) a = a.replace(jna, Ob);
        if (a.indexOf(Tb) != -1) a = a.replace(hna, Pb);
        if (a.indexOf(Ub) != -1) a = a.replace(ina, Qb);
        if (a.indexOf(Nx) != -1) a = a.replace(kna, Ox);
        if (a.indexOf(Px) != -1) a = a.replace(lna, Qx);
        if (a.indexOf(Rx) != -1) a = a.replace(mna, Sx);
        if (a.indexOf(Tx) != -1) a = a.replace(nna, Ux);
        if (a.indexOf(Jg) != -1) a = a.replace(gna, y.La ? rna : sna);
        if (a.indexOf(Ig) != -1) a = a.replace(Ig, tna)
    }
    if (b) a = a.replace(ena, una);
    return a = a.replace(fna, vna)
}

function una(a) {
    for (var b = v, c = 0; c < a.length; c++) b += gv;
    return b
}
function vna(a) {
    for (var b = x, c = 0; c < a.length - 1; c++) b += gv;
    return b
}
function vD(a) {
    a.Di = k;
    a.Np = k;
    a.a.clear();
    a.zp = k;
    a.dn = k;
    a.Vm = k;
    a.Gi = k;
    a.gf = k;
    a.Qi = k;
    a.sp = k;
    a.Rm = v;
    a.Tx = k
}
function $G(a) {
    if (a.zp) {
        a.a.append(Re);
        a.zp = k
    }
}
function aH(a) {
    if (a.Vm && a.Vm.Ed) {
        a.a.append(by);
        a.Vm = k
    }
}
var wna = "</";

function bH(a) {
    if (a.Rm) {
        a.a.append(wna, a.Rm, Ub);
        a.Rm = v
    }
    a.Tx = a.sp;
    a.sp = k
}
var xna = "</li>";

function cH(a, b) {
    if (a.Qi) {
        a.a.append(xna);
        var c = a.Qi.yb,
            d = -1;
        if (!b && a.gf && !vh(a.gf) && a.gf.Bb == a.Qi.Bb) d = a.gf.yb;
        for (var e = dH(a, a.Qi); c > d; c--) eH(a, e, 1, i);
        c = a.Qi;
        a.Qi = k;
        return c
    }
    return k
}
var yna = "</ol>",
    zna = '<ol start="',
    Ana = "<ol>",
    Bna = "</ul>",
    Cna = "<ul>";

function eH(a, b, c, d) {
    if (b && si(b)) d ? a.a.append(yna) : a.a.append(c > 1 ? zna + c + Qe : Ana);
    else a.a.append(d ? Bna : Cna)
}
var Dna = "circle",
    Ena = "square",
    Fna = "decimal",
    Gna = "upper-alpha",
    Hna = "lower-alpha",
    Ina = "upper-roman",
    Jna = "lower-roman",
    fH = "disc";

function Kna(a) {
    if (a) switch (a.Fj) {
    case 1:
        return Dna;
    case 2:
        return Ena;
    case 3:
        return Fna;
    case 4:
        return Gna;
    case 5:
        return Hna;
    case 6:
        return Ina;
    case 7:
        return Jna;
    case 0:
        return fH;
    default:
        return fH
    }
    return fH
}
function dH(a, b) {
    var c = b.Bb;
    if (c) return Zv(a.A.Pa(c), b.yb);
    return k
}
var gH = Ng([wg, rg, qg, vg, ug, sg, kg, ng, lg, mg, Hd]),
    Lna = "Cannot check for paragraph start with ",
    Mna = "an out of bounds spacer range: ",
    Nna = "]+[^",
    Ona = "]?",
    Pna = '<li style="list-style-type:',
    Qna = "<br>",
    hH = "center",
    iH = "justify",
    Rna = ' style="',
    Sna = "margin-left: ",
    jH = "pt;",
    Tna = "margin-right: ",
    Una = "text-indent: ",
    Vna = "text-align: ",
    Wna = ' margin-top: 0pt; margin-bottom: 0pt;"';

function hv(a) {
    var b = a.A.ra(),
        c = Ev(b);
    if (!c) return v;
    var d;
    if (d = a.Np) {
        d = a.Di;
        d = d == c ? i : !d || !c ? l : d.start == c.start && d.end == c.end
    }
    if (d) return a.Np;
    a.Di = c;
    a.dn = a.A.oa(ih, a.Di.start);
    a.Gi = a.A.oa(ch, a.Di.start);
    a.gf = a.A.oa(dh, a.Di.start);
    c = a.Di.start;
    d = a.Di.end;
    var e = a.A.Y(),
        g = a.A.td(ih),
        h = a.A.td(ch);
    kH(a, b.Kt);
    var j = [],
        m;
    m = a.A.a;
    var o = c;
    if (o < 1) {
        m.V.log(Error(Lna + +Mna + o + hz + d));
        o = 1
    }
    var q = [],
        u = l;
    if (!pg[E(m, o)] && Fg(m, o)) {
        u = i;
        q.push(o)
    }
    for (var w = m.slice(o, d), C = RegExp(Lg + $b(og.join(v)) + Nna + $b(og.join(v)) + Ona, ec), B; B = C.exec(w);) {
        var H = B[0];
        B = B.index;
        if (!u) {
            Fg(m, o + B) && q.push(o + B);
            u = i
        }
        for (var I = 1; I < H.length; I++) q.push(o + B + I)
    }
    m = q;
    j = j.concat(PB(a.A.g, ih), PB(a.A.g, ch), PB(a.A.g, bh), Qg(HA(a.A, Lf)), m);
    Dc(j);
    Gc(j);
    C = Ec(j, c);
    C = C < 0 ? -C - 1 : C;o = Ec(j, d);o = o < 0 ? -o - 2 : o;q = v;
    if ((u = C > o) || c < j[C]) {
        u = u ? d : j[C] - 1;w = lH(a, e, c, u, q);
        if (w.length > 0) {
            mH(a);
            a.a.append(w);
            q = E(e, u)
        }
    }
    B = k;m = m.concat(Eg(e, d));u = -1;w = 0;
    for (C = C; C <= o; C++) {
        for (H = j[C]; u < H;) u = m[w++];
        if (!Xa(B) && B < H) {
            a.a.append(lH(a, e, B, H - 1, q));
            B = k;
            q = E(e, H - 1)
        }
        if (g[H]) a.dn = g[H];
        if (h[H]) a.Gi = h[H];
        I = Cw(a.A.n, Lf, H);
        if (I.length) {
            $G(a);
            aH(a);
            a.a.append(a.f[I[0]].oK())
        } else {
            if (Gg(e, H) && Fg(a.A.a, H)) {
                $G(a);
                aH(a);
                bH(a);
                a.gf = a.A.oa(dh, H);
                B = !nH(a.A, H);
                I = a;
                var T = a.gf,
                    X = H;
                if (T) if (vh(T)) {
                    I.gf = k;
                    cH(I, i);
                    I = l
                } else {
                    var V = dH(I, T),
                        ma = cH(I),
                        Ka = -1;
                    if (ma && ma.Bb == T.Bb) Ka = ma.yb;
                    T = T.yb;
                    for (ma = void 0; Ka < T; Ka++) {
                        p(ma) || (ma = Ay(I.A, X));
                        eH(I, V, ma)
                    }
                    X = I;
                    Ka = V;
                    T = v;
                    V = Kna(Ka);
                    if (Ka) T = (Ka = Ka.a) ? ii(Ka) : v;X.a.append(Pna, V, Tf, T, Qe);I.Qi = I.gf;I = i
                } else I = l;
                if (!I) {
                    if (a.gf) B = l;
                    H > c && a.Tx == k && E(e, H - 1) != mg && a.a.append(Qna)
                }
                if (B) {
                    B =
                    a;
                    I = a.A.oa(eh, u);
                    X = V = 0;
                    if (!a.gf) {
                        V = I.Uj;
                        X = I.Ei - V
                    }
                    Ka = I.zs;
                    T = k;
                    switch (Oh(I)) {
                    case 0:
                        break;
                    case 1:
                        T = hH;
                        break;
                    case 2:
                        T = $i;
                        break;
                    case 3:
                        T = iH;
                        break;
                    default:
                    }
                    if ((ma = V || Ka || T || X) || I.kh) {
                        B.Rm = I.kh == 0 ? vj : qna[Math.min(I.kh, 6) - 1];B.a.append(Tb, B.Rm);
                        if (ma) {
                            B.a.append(Rna);
                            V && B.a.append(Sna, V, jH);
                            Ka && B.a.append(Tna, Ka, jH);
                            X && B.a.append(Una, X, jH);
                            T && B.a.append(Vna, T, Tf);
                            B.a.append(Wna)
                        }
                        B.a.append(Ub);B.sp = I
                    } else {
                        B.Rm = v;
                        B.sp = k
                    }
                }
            }
            B = oH(a, E(e, H), E(e, H - 1), l, H) ? H : H + 1
        }
    }
    Xa(B) || a.a.append(lH(a, e, B, d, q));$G(a);aH(a);bH(a);
    cH(a, i);kH(a, b.Jt);a.Np = a.a.toString();
    return a.Np
}
function kH(a, b) {
    if (b) for (var c = v, d = 0; d < b.length; d++) {
        var e = b.charAt(d);
        e != Hd && oH(a, e, c, i);
        c = e
    }
}
var Xna = '<table style="border:none;border-collapse:collapse">',
    pH = "</td></tr></table>",
    Yna = "</td>",
    Zna = '<td style="border:1px dotted #aaa;vertical-align:',
    $na = "padding:",
    qH = "px ",
    rH = 'px">',
    aoa = '<td style="border:1px dotted #aaa;padding:',
    boa = 'px;vertical-align:top;">',
    sH = "</td></tr>",
    coa = '<tr style="height:',
    doa = "<hr>";

function oH(a, b, c, d, e) {
    if (b == kg || b == ng || b == mg || b == lg) {
        $G(a);
        aH(a);
        bH(a)
    }
    var g = l,
        h = l;
    switch (b) {
    case kg:
        a.a.append(Xna);
        break;
    case ng:
        a.a.append(pH);
        break;
    case mg:
        c != lg && a.a.append(Yna);
        var j = Ge.N();
        if (a.A.f.f) {
            e = Za(e) ? a.A.Ub(Ug, e) : new rh(Ug);a.a.append(Zna, aia[e.Ms], Tf);
            var m = e.Nr();m && a.a.append(AC, m, Tf);a.a.append($na, Xe(j, e.tm), qH, Xe(j, e.Ls), qH, Xe(j, e.Js), qH, Xe(j, e.Ks), rH)
        } else a.a.append(aoa, Xe(j, 5), boa);
        break;
    case lg:
        c != kg && a.a.append(sH);
        if (a.A.f.f) {
            if (Za(e)) j = a.A.Ub(fh, e);
            j || (j = new rh(fh));
            a.a.append(coa, Xe(Ge.N(), j.Vj), rH)
        } else a.a.append(rd);
        break;
    case SB:
        if (e && a.A.Ub(bh, e)) {
            a.a.append(doa);
            mH(a)
        } else g = i;
        break;
    default:
        g = i
    }
    if (g) {
        mH(a);
        if (d) a.a.append(ZG(b.replace(gH, v), c == x));
        else h = i
    }
    return h
}
function mH(a) {
    if (!a.Gi.Qa(a.Vm)) {
        $G(a);
        aH(a);
        a.Gi && a.Gi.Ed && a.a.append(Lx, zv(a.Gi.Ed.a), Qe);
        a.Vm = a.Gi
    }
    if (!a.dn.Qa(a.zp)) {
        $G(a);
        a.a.append(Pe, ii(a.dn), pna, Qe);
        a.zp = a.dn
    }
}
function lH(a, b, c, d, e) {
    a = b.slice(c, d);
    return ZG(a.replace(gH, v), e == x)
}
YG.prototype.q = function () {
    YG.p.q.call(this);
    vD(this);
    delete this.a;
    delete this.Di;
    delete this.Np;
    delete this.zp;
    delete this.dn;
    delete this.Vm;
    delete this.Gi;
    delete this.gf;
    delete this.Qi;
    delete this.sp;
    delete this.Tx;
    delete this.A;
    delete this.f
};

function tH(a, b, c) {
    this.g = a;
    this.f = !! b;
    this.a = c || k;
    if (c) {
        c.Za(Mi, this.qJ, this);
        c.hd(this.f)
    }
}
s(tH, ps);n = tH.prototype;n.qJ = function () {
    this.zb(!this.f)
};n.zb = function (a) {
    uH(this, a);
    this.dispatchEvent(new rs(this, {
        name: this.g,
        hM: a
    }))
};
var vH = "booleanPreferenceChange";

function uH(a, b) {
    if (a.f != b) {
        a.f = b;
        a.a && a.a.hd( !! b);
        a.dispatchEvent(vH)
    }
}
n.ea = function () {
    return this.f
};n.update = function (a) {
    eb(a) && uH(this, a)
};n.q = function () {
    tH.p.q.call(this);
    this.a && this.a.of(Mi, this.qJ, this);
    delete this.a
};

function SG(a, b) {
    this.n = this.Dc = this.g = this.f = a;
    this.u = b || v;
    this.a = {}
}
s(SG, t);n = SG.prototype;n.Jn = k;n.Kt = k;n.Jt = k;n.Fa = function () {
    return this.f
};n.Qp = function (a, b) {
    this.g = this.f;
    this.f = a;
    this.Jn = k;
    if (!ub(this.a) && !b) this.a = {}
};

function TG(a, b) {
    a.n = a.Dc;
    a.Dc = b;
    a.Jn = k
}
n.Kb = function () {
    return Za(Ev(this))
};

function Ev(a) {
    var b = a.Dc,
        c = a.f,
        d = c.Le(b);
    if (!a.Jn && d != 0) a.Jn = new nb((d < 0 ? c : b).a, (d > 0 ? c : b).a - 1);
    return a.Jn
}
function Ru(a) {
    return a.f.Le(a.Dc) <= 0 ? a.f : a.Dc
}

function Pu(a) {
    var b = a.Dc;
    a = a.f;
    var c = a.Le(b);
    if (c == 0) return a;
    return c > 0 ? a.shift(-1) : b.shift(-1)
}
n.od = function () {
    return this.u
};n.Z = function () {
    var a = this.f.Z(),
        b = this.Dc.Z(),
        c = {};
    c.cl = a;
    c.sml = b;
    return c
};n.sa = function () {
    var a = new SG(this.f);
    TG(a, this.Dc);
    return a
};n.q = function () {
    SG.p.q.call(this);
    delete this.f;
    delete this.Dc;
    delete this.Jn;
    delete this.a
};

function wH(a) {
    this.f = a;
    this.a = {};
    for (var b = 0; b < a.length; b++) this.a[a[b]] = []
}
s(wH, t);

function xH(a, b, c, d) {
    if (!a.a[b]) return -1;
    a = a.a[b];
    c = Ec(a, c);
    if (c < 0) c = -c - (d ? 2 : 1);
    return c >= 0 && c < a.length ? a[c] : -1
}
wH.prototype.indexOf = function (a, b) {
    return xH(this, a, b, l)
};wH.prototype.lastIndexOf = function (a, b) {
    return xH(this, a, b, i)
};wH.prototype.remove = function (a, b) {
    var c = b - a + 1;
    for (var d in this.a) {
        for (var e = this.a[d], g = [], h = 0; h < e.length; h++) {
            var j = e[h];
            if (j < a) g.push(j);
            else j > b && g.push(j - c)
        }
        this.a[d] = g
    }
};
wH.prototype.q = function () {
    wH.p.q.call(this);
    delete this.f;
    delete this.a
};
var yH = "\u0003\n";

function zH(a, b) {
    this.V = a;
    this.a = new wH(b);
    this.ax(0, yH)
}
s(zH, fg);zH.prototype.ax = function (a, b) {
    var c = this.a,
        d = b.length;
    for (var e in c.a) {
        for (var g = c.a[e], h = [], j = 0; j < g.length; j++) {
            var m = g[j];
            h.push(m >= a ? m + d : m)
        }
        c.a[e] = h
    }
    if ((d = Ng(c.f)) && d.test(b)) for (d = Ng(c.f); j = d.exec(b);) {
        e = j[0];
        j = j.index;
        Kc(c.a[e], j + a, Fc)
    }
};zH.prototype.remove = function (a, b) {
    this.a.remove(a, b)
};zH.prototype.f = function (a) {
    if (this.a.a[a]) return (a = this.a.a[a] || k) ? a : [];
    return zH.p.f.call(this, a)
};
zH.prototype.q = function () {
    zH.p.q.call(this);
    delete this.a
};

function AH(a, b) {
    zH.call(this, a, b || []);
    this.g = {}
}
s(AH, zH);
var eoa = RegExp(nw, ec),
    foa = RegExp(wb, ec);n = AH.prototype;n.vh = v;

function Bg(a) {
    return a.vh.length
}
function E(a, b) {
    return a.vh.charAt(b)
}
n.slice = function (a, b) {
    return this.vh.slice(a, b + 1)
};n.indexOf = function (a, b) {
    var c;
    c = this.a.a[a] ? this.a.indexOf(a, b || 1) : k;
    return Za(c) ? c : this.vh.indexOf(a, b)
};n.lastIndexOf = function (a, b) {
    var c;
    c = this.a.a[a] ? this.a.lastIndexOf(a, Za(b) ? b : Bg(this)) : k;
    return Za(c) ? c : this.vh.lastIndexOf(a, b)
};
n.search = function (a, b, c, d) {
    a = BH(this, a, b);
    if (a.length == 0) return -1;
    if (!d) return a[c ? a.length - 1 : 0].start;
    if (c && d < 0 || !c && d >= Bg(this) - 1) return -1;
    d = Ec(a, d, function (e, g) {
        return e < g.start ? -1 : e > g.start ? 1 : 0
    });
    if (d >= 0) return a[d].start;
    return (c = a[-d - (c ? 2 : 1)]) ? c.start : -1
};
var goa = "[\\'\u2018\u2019]",
    hoa = '[\\"\u201c\u201d]',
    ioa = "gi";

function BH(a, b, c) {
    var d = $b(b).replace(eoa, goa).replace(foa, hoa),
        e = (p(c) ? c : i) ? ec : ioa;c = d + Sf + e;
    if (a.g[c]) return a.g[c];
    var g = [];
    for (d = RegExp(d, e); d.exec(a.vh) != k;) g.push(new nb(d.lastIndex - b.length, d.lastIndex - 1));
    return a.g[c] = g
}
n.ax = function (a, b) {
    AH.p.ax.call(this, a, b);
    var c = this.vh;
    this.vh = bc(c.slice(0, a), b, c.slice(a));
    this.g = {}
};n.remove = function (a, b) {
    AH.p.remove.call(this, a, b);
    var c = this.vh;
    this.vh = bc(c.slice(0, a), c.slice(b + 1));
    this.g = {}
};

function joa(a) {
    this.a = !! a
}
joa.prototype.f = l;
var koa = RegExp("[\\u05BE\\u05C0\\u05C3\\u05C6\\u05D0-\\u05F4\\u07C0-\\u07EA\\u07F4-\\u07F5\\u07FA-\\u0815\\u081A\\u0824\\u0828\\u0830-\\u083E\\u200F\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB4F\\u0608\\u060B\\u060D\\u061B-\\u064A\\u066D-\\u066F\\u0671-\\u06D5\\u06E5-\\u06E6\\u06EE-\\u06EF\\u06FA-\\u070D\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\uFB50-\\uFD3D\\uFD50-\\uFDFC\\uFE70-\\uFEFC\\u202B\\u202E\\u0600-\\u0603\\u0660-\\u0669\\u066B-\\u066C\\u06DD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1-\\u05C2\\u05C4-\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DE-\\u06E4\\u06E7-\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962-\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2-\\u09E3\\u0A01-\\u0A02\\u0A3C\\u0A41-\\u0A51\\u0A70-\\u0A71\\u0A75-\\u0A82\\u0ABC\\u0AC1-\\u0AC8\\u0ACD\\u0AE2-\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D-\\u0B56\\u0B62-\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C56\\u0C62-\\u0C63\\u0CBC\\u0CCC-\\u0CCD\\u0CE2-\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62-\\u0D63\\u0DCA\\u0DD2-\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECD\\u0F18-\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86-\\u0F87\\u0F90-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039-\\u103A\\u103D-\\u103E\\u1058-\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085-\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752-\\u1753\\u1772-\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927-\\u1928\\u1932\\u1939-\\u193B\\u1A17-\\u1A18\\u1A56\\u1A58-\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80-\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BA9\\u1C2C-\\u1C33\\u1C36-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DFF\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099-\\u309A\\uA66F-\\uA672\\uA67C-\\uA67D\\uA6F0-\\uA6F1\\uA802\\uA806\\uA80B\\uA825-\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31-\\uAA32\\uAA35-\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7-\\uAAB8\\uAABE-\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26\\u202A\\u202D\\u202C]");

function loa(a, b, c, d, e, g) {
    Pd.call(this, nv, a);
    this.a = b;
    this.u = c;
    this.n = d;
    this.g = e;
    this.M = !! g
}
s(loa, Pd);

function moa(a, b) {
    it.call(this, jt, a);
    this.update(b)
}
s(moa, it);lt.set(jt, function (a, b) {
    return new moa(a, b)
});

function noa(a, b) {
    it.call(this, Xg, a, b)
}
s(noa, it);lt.set(Xg, function (a, b) {
    return new noa(a, b)
});

function ooa(a, b) {
    it.call(this, ah, a, b)
}
s(ooa, it);lt.set(ah, function (a, b) {
    return new ooa(a, b)
});

function poa(a, b) {
    nt.call(this, Lf, a, b)
}
s(poa, nt);

function qoa(a, b) {
    return new poa(a, b)
}
lt.set(Lf, qoa);

function CH() {
    this.a = {};
    this.f = {}
}
s(CH, t);CH.prototype.Pa = function (a) {
    return this.f[a]
};

function Cw(a, b, c) {
    return a.a[b] && a.a[b][c] || []
}
function roa(a, b) {
    var c = -1,
        d = a.Pa(b);
    if (d) {
        d = a.a[d.O()];
        if (!d) return c;
        Pg(d, function (e, g) {
            if (sc(g, b)) {
                c = e;
                return i
            }
        })
    }
    return c
}
function soa(a, b, c, d) {
    var e = {};
    a = a.a;
    var g = d ? d : 0;
    for (var h in a) {
        d = h;
        var j = a[d].slice(b, c + 1),
            m = [];
        Pg(j, function (o) {
            m[o + g] = Ac(j[o]);
            return l
        });
        e[d] = m
    }
    return e
}

function DH(a, b, c) {
    b = soa(a, b, c);
    var d = {};
    for (var e in b) Pg(b[e], function (g, h) {
        for (var j = 0; j < h.length; j++) {
            var m = h[j];
            d[m] = mt(e, m, this.Pa(m).Z())
        }
        return l
    }, a);
    return d
}
function toa(a) {
    var b = {};
    for (var c in a.f) {
        var d = a.Pa(c),
            e = d.O();
        dh != e || (b[c] = mt(e, c, d.Z()))
    }
    return b
}
function EH(a, b) {
    var c = a.Pa(b);
    if (c) {
        var d = a.a[c.O()];
        Pg(d, function (e, g) {
            xc(g, b);
            g.length == 0 && delete d[e];
            return l
        })
    }
}
CH.prototype.shift = function (a, b) {
    var c = this.a;
    for (var d in c) {
        var e = d;
        c[e] = Rg(c[e], a, b)
    }
};
CH.prototype.splice = function (a, b) {
    var c = b - a + 1,
        d = this.a;
    for (var e in d) d[e].splice(a, c)
};CH.prototype.q = function () {
    CH.p.q.call(this);
    for (var a in this.f) this.f[a].G();
    delete this.f;
    delete this.a
};

function FH(a, b, c) {
    Pd.call(this, gD, a);
    this.a = b;
    this.M = c
}
s(FH, Pd);FH.prototype.q = function () {
    FH.p.q.call(this);
    delete this.a;
    delete this.M
};

function GH(a, b) {
    this.n = a;
    this.V = b;
    this.a = {};
    this.f = {};
    this.g = {}
}
s(GH, t);GH.prototype.clear = function (a) {
    if (a) {
        delete this.a[a];
        delete this.f[a];
        delete this.g[a]
    } else {
        this.a = {};
        this.f = {};
        this.g = {}
    }
};

function HH(a, b, c, d) {
    if (a = a.g[b]) if (c = a[c]) return c[d] || k;
    return k
}
function IH(a, b, c, d) {
    var e = a.n(b, c, d);
    uoa(a, b, c, d, e);
    return e
}

function uoa(a, b, c, d, e) {
    var g = a.g[b];
    g || (g = a.g[b] = []);
    var h = g[c];
    h || (h = g[c] = []);
    h[d] = e;
    (e = a.a[b]) || (e = a.a[b] = []);
    if (g = e[c]) Kc(g, d);
    else e[c] = [d];
    (e = a.f[b]) || (e = a.f[b] = []);
    if (a = e[d]) Kc(a, c);
    else e[d] = [c]
}
var voa = "Should never call StyleIntersectionCache#get with start index > end index.",
    woa = "The style intersection cache invariant has been broken. The end indices correspodning to ",
    xoa = " should not contain ",
    yoa = "since the style intersection is not present in the style intersection cache map.";
GH.prototype.get = function (a, b, c) {
    if (b > c) {
        this.V.log(Error(voa));
        return {}
    }
    var d = HH(this, a, b, c);
    if (d) return d;
    d = (d = this.a[a]) ? d[b] || k : k;
    if (d) {
        var e = Ec(d, c);
        if (e >= 0) {
            this.log(woa + b + xoa + c + yoa);
            this.clear();
            return IH(this, a, b, c)
        }
        e = -e - 2;
        if (e < 0) return IH(this, a, b, c);
        e = d[e];
        d = HH(this, a, b, e);
        d = this.n(a, e + 1, c, yb(d))
    } else {
        d = (d = this.f[a]) ? d[c] || k : k;
        if (d) {
            e = Ec(d, b);
            if (e >= 0) {
                this.clear();
                return IH(this, a, b, c)
            }
            e = -e - 1;
            if (e >= d.length) return IH(this, a, b, c);
            e = d[e];
            d = HH(this, a, e, c);
            d = this.n(a, b, e - 1, yb(d))
        } else return IH(this, a, b, c)
    }
    uoa(this, a, b, c, d);
    return d
};GH.prototype.q = function () {
    GH.p.q.call(this);
    delete this.n;
    delete this.V;
    delete this.a;
    delete this.f;
    delete this.g
};

function JH(a) {
    this.a = Tg;
    this.update(a || {})
}
s(JH, Sg);JH.prototype.M = 0;
var KH = "autogen_type",
    zoa = {
        B4: KH
    };n = JH.prototype;n.Xu = function () {
    return l
};n.fg = function () {
    return [hg]
};n.cf = function () {
    return i
};n.Gb = function (a, b) {
    switch (a) {
    case KH:
        this.M = b;
        break
    }
};n.Z = function () {
    var a = {};
    a.autogen_type = this.M;
    return a
};n.ea = function (a) {
    switch (a) {
    case KH:
        return this.M
    }
    return JH.p.ea.call(this, a)
};n.Nj = function () {
    return l
};n.be = function () {
    return rb(zoa)
};n.sa = function () {
    return new JH(this.Z())
};qh(function () {
    return new JH
});

function LH(a) {
    this.a = Xg;
    this.Ke = new Wf;
    this.update(a || {})
}
s(LH, Sg);
var MH = "cs_cids",
    Aoa = {
        m3: MH
    };n = LH.prototype;n.Yr = function () {
    return this.Ke.Qb()
};n.Gb = function (a, b) {
    switch (a) {
    case MH:
        this.Ke.update(b);
        break
    }
};n.Z = function () {
    var a = {};
    a.cs_cids = this.Ke.Z();
    return a
};n.ea = function (a) {
    switch (a) {
    case MH:
        return this.Ke
    }
    return LH.p.ea.call(this, a)
};n.oh = function (a) {
    return a == MH
};n.Nj = function () {
    return l
};n.be = function () {
    return rb(Aoa)
};
n.mm = function (a, b) {
    var c = this.ea(a);
    return a == MH ? Ic(c.eq(), b.eq()) : LH.p.mm.call(this, a, b)
};n.sa = function () {
    return new LH(this.Z())
};n.q = function () {
    LH.p.q.call(this);
    this.Ke.G();
    delete this.Ke
};qh(function () {
    return new LH
});

function NH(a) {
    this.a = $g;
    this.update(a || {})
}
s(NH, Sg);
var OH = "eqfs_c",
    Boa = {
        j3: OH
    };n = NH.prototype;n.nv = v;n.cf = function () {
    return i
};n.Uo = function () {
    return l
};n.Gb = function (a, b) {
    switch (a) {
    case OH:
        this.nv = b;
        break
    }
};n.Z = function () {
    var a = {};
    a.eqfs_c = this.nv;
    return a
};n.ea = function (a) {
    switch (a) {
    case OH:
        return this.nv
    }
    return NH.p.ea.call(this, a)
};n.be = function () {
    return rb(Boa)
};n.sa = function () {
    return new NH(this.Z())
};qh(function () {
    return new NH
});

function PH(a) {
    this.a = ah;
    this.update(a || {})
}
s(PH, Sg);PH.prototype.u = v;
var QH = "fs_id",
    Coa = {
        y3: QH
    };n = PH.prototype;n.Xu = function () {
    return l
};n.cf = function () {
    return i
};n.Gb = function (a, b) {
    switch (a) {
    case QH:
        this.u = b;
        break
    }
};n.Z = function () {
    var a = {};
    a.fs_id = this.u;
    return a
};n.ea = function (a) {
    switch (a) {
    case QH:
        return this.u
    }
    return PH.p.ea.call(this, a)
};n.Nj = function () {
    return l
};n.Yr = function () {
    return [this.u]
};n.be = function () {
    return rb(Coa)
};n.sa = function () {
    return new PH(this.Z())
};qh(function () {
    return new PH
});

function RH() {
    this.a = bh
}
s(RH, Sg);n = RH.prototype;n.fg = function () {
    return [SB]
};n.cf = function () {
    return i
};n.Uo = function () {
    return l
};n.Xu = function () {
    return l
};n.Gb = function () {
    return k
};n.Z = function () {
    return {}
};n.be = function () {
    return []
};n.sa = function () {
    return new RH(this.Z())
};qh(function () {
    return new RH
});

function SH(a) {
    this.a = ch;
    this.update(a || {})
}
s(SH, Sg);
var TH = "lnks_link",
    Doa = {
        lO: TH
    };n = SH.prototype;n.Ed = k;

function Cv(a) {
    return a.Ed
}
n.Gb = function (a, b) {
    switch (a) {
    case TH:
        if (b) {
            var c = b.lnk_type;
            if (this.Ed && (this.Ed.O() == c || !c)) this.Ed.update(b);
            else {
                a: {
                    switch (b.lnk_type) {
                    case 0:
                        c = new Zt(b);
                        break a
                    }
                    c = k
                }
                this.Ed = c
            }
        } else this.Ed = k;
        break
    }
};n.Z = function () {
    var a = {};
    a.lnks_link = this.Ed ? this.Ed.Z() : k;
    return a
};n.ea = function (a) {
    switch (a) {
    case TH:
        return this.Ed
    }
    return SH.p.ea.call(this, a)
};n.oh = function (a) {
    switch (a) {
    case TH:
        return i
    }
    return l
};
n.Nj = function () {
    return l
};n.Uq = function () {
    return l
};n.be = function () {
    return rb(Doa)
};n.mf = function (a) {
    for (var b in a) {
        var c = a[b];
        switch (b) {
        case TH:
            if (c && this.Ed && !this.Ed.mf(c)) return l;
            if (this.Ed && !c || !this.Ed && c) return l
        }
    }
    return i
};n.mm = function (a, b) {
    var c = this.ea(a);
    if (a == TH) {
        if (c == b) return i;
        if (c && !b || !c && b) return l;
        return c == k && b == k || c.Qa(b)
    } else return SH.p.mm.call(this, a, b)
};n.sa = function () {
    return new SH(this.Z())
};qh(function () {
    return new SH
});

function UH(a) {
    this.a = gh;
    this.K = new Wf;
    this.update(a || {})
}
s(UH, Sg);
var VH = "sc_ow",
    WH = "sc_sugg",
    Eoa = {
        f4: VH,
        x4: WH
    };n = UH.prototype;n.wt = k;n.hK = function () {
    return i
};n.Gb = function (a, b) {
    switch (a) {
    case VH:
        this.wt = b;
        break;
    case WH:
        this.K.update(b);
        break
    }
    return k
};n.Z = function () {
    var a = {};
    a.sc_ow = this.wt;
    a.sc_sugg = this.K.Z();
    return a
};n.ea = function (a) {
    switch (a) {
    case VH:
        return this.wt;
    case WH:
        return this.K
    }
    return UH.p.ea.call(this, a)
};n.oh = function (a) {
    return a == WH
};n.be = function () {
    return rb(Eoa)
};n.sa = function () {
    return new UH(this.Z())
};
n.q = function () {
    UH.p.q.call(this);
    this.K.G();
    delete this.K
};qh(function () {
    return new UH
});

function XH() {
    this.a = []
}
s(XH, t);n = XH.prototype;n.lh = k;n.get = function (a) {
    return this.a[a]
};n.set = function (a, b) {
    this.a[a] = b;
    this.lh && Kc(this.lh, a)
};n.remove = function (a) {
    delete this.a[a];
    this.lh && Lc(this.lh, a)
};n.shift = function (a, b) {
    this.a = Rg(this.a, a, b);
    var c = this.lh;
    if (c) {
        var d = Ec(c, a);
        for (d = d < 0 ? -d - 1 : d;d < c.length;d++) c[d] += b
    }
};
n.splice = function (a, b) {
    if (!(a >= this.a.length)) {
        var c = this.lh;
        if (c) {
            if (c.length != 0) {
                var d = Ec(c, a);
                d = d < 0 ? -d - 1 : d;
                var e = Ec(c, a + b);e = e < 0 ? -e - 1 : e;
                for (var g = e - d, h = [], j = [], m = this.a, o = 0, q = 0; q < d; q++) {
                    o = c[q];
                    h[o] = m[o];
                    j[q] = o
                }
                for (q = e; q < c.length; q++) {
                    o = c[q];
                    h[o - b] = m[o];
                    j[q - g] = o - b
                }
                h.length = Math.max(m.length, a + b) - b;this.a = h;this.lh = j
            }
        } else this.a.splice(a, b)
    }
};n.q = function () {
    XH.p.q.call(this);
    Pg(this.a, function (a, b) {
        mb(b);
        return l
    });
    delete this.a;
    delete this.lh
};

function YH() {
    this.a = {};
    this.f = []
}
s(YH, t);n = YH.prototype;n.set = function (a, b, c) {
    ZH(this, a).set(b, c)
};n.remove = function (a, b) {
    ZH(this, a).remove(b)
};n.oa = function (a, b) {
    return ZH(this, a).get(b) || k
};n.cd = function (a) {
    Foa(this, a)
};

function ZH(a, b) {
    a.a[b] || Foa(a, b);
    return a.a[b]
}
function Foa(a, b) {
    if (!a.a[b]) {
        a.a[b] = new XH;
        a.f.push(b)
    }
}
function $H(a, b) {
    var c = ZH(a, b);
    return c.lh || (c.lh = Qg(c.a))
}
n.shift = function (a, b, c) {
    ZH(this, a).shift(b, c)
};n.splice = function (a, b, c) {
    ZH(this, a).splice(b, c)
};
n.q = function () {
    YH.p.q.call(this);
    for (var a = this.f, b = this.a, c = 0; c < a.length; c++) b[a[c]].G();
    delete this.a;
    delete this.f
};

function aI(a) {
    this.f = a;
    this.a = new YH;
    this.n = [eh, dh];
    this.g = [];
    a = this.a;
    for (var b = [], c = Goa(this), d = 0, e; e = c[d]; d++) {
        a.cd(e);
        sh(e) ? b.push(e) : a.set(e, 0, rh(e))
    }
    for (d = 0; c = b[d]; d++) {
        e = rh(c);
        var g = e.fg();
        sc(g, jg) && a.set(c, 0, e);
        sc(g, Hd) && a.set(c, 1, e)
    }
}
s(aI, t);n = aI.prototype;n.td = function (a) {
    return ZH(this.a, a).a
};

function bI(a, b) {
    var c = i;
    switch (b) {
    case Tg:
        c = a.f.Su;
        break;
    case Xg:
        c = a.f.u;
        break;
    case ah:
        c = a.f.aa;
        break;
    case Zg:
    case $g:
        c = a.f.n;
        break;
    case gh:
        c = a.f.Aq;
        break;
    case Ug:
    case fh:
    case hh:
        c = a.f.a && a.f.f;
        break
    }
    return c && b in kh
}
function Goa(a) {
    if (a.g.length == 0) for (var b in jh) {
        var c = jh[b];
        bI(a, c) && a.g.push(c)
    }
    return a.g
}
n.oa = function (a, b) {
    var c = this.a.oa(a, b);
    if (c) return c;
    c = $H(this.a, a);
    var d = kh[a];
    c = c[cI(this, c, b, d ? d.Uo() : l)];
    return this.a.oa(a, c) || rh(a)
};
n.Ub = function (a, b) {
    if (!sh(a)) return k;
    return this.a.oa(a, b)
};

function PB(a, b) {
    return $H(a.a, b)
}
function dI(a, b, c, d) {
    a = cI(a, c, d);
    return b[c[a]]
}
function Fv(a, b, c) {
    var d = PB(a, b),
        e = cI(a, d, c);
    c = d[e];
    a = ZH(a.a, b).a;
    b = a[c];
    for (e = e - 1; e >= 0; e--) {
        var g = d[e];
        if (!b.Qa(a[g])) break;
        c = g
    }
    return c
}
function Hoa(a, b, c) {
    var d = PB(a, b);
    c = cI(a, d, c);
    a = ZH(a.a, b).a;
    b = a[d[c]];
    for (var e = c + 1; e < d.length; e++) {
        if (!b.Qa(a[d[e]])) break;
        c = e
    }
    return d[c + 1] ? d[c + 1] - 1 : k
}
function cI(a, b, c, d) {
    a = Ec(b, c);
    if (a < 0) a = -a - (d ? 1 : 2);
    return a
}

function Ioa(a, b, c, d, e, g) {
    for (var h = [], j = a.a.f, m = 0; m < j.length; m++) {
        var o = th(j[m]);
        if (e && o || !e && !o) h.push(eI(a, j[m], b, c, d, g))
    }
    return h
}

function eI(a, b, c, d, e, g) {
    var h, j, m;
    if (!(b in a.a.a)) return new Ty(b, []);
    if (b == Yg) {
        d = a.oa(Yg, 0).sa();
        if (c == 0) h = [d];
        else j = d
    } else if (sh(b)) if (sc(a.n, b)) {
        var o = [];
        h = Ag(e, Hd, c, d);
        for (var q = 0; q < h.length; q++) {
            var u = h[q],
                w = a.oa(b, u);
            o[u - c] = w.sa()
        }
        h = o;
        Hg(e, d) || (m = a.oa(b, d).sa())
    } else {
        m = [];
        o = ZH(a.a, b).a;
        e = $H(a.a, b);
        h = Ec(e, c);
        for (h = h = h < 0 ? -h - 1 : h;h < e.length;h++) {
            q = e[h];
            if (q > d) break;
            m[q - c] = o[q].sa()
        }
        h = m;
        m = a.oa(b, d).sa()
    } else {
        e = [];
        h = ZH(a.a, b).a;
        q = PB(a, b);
        if (th(b)) {
            a = dI(a, h, q, c - 1);
            a = h[c] && !h[c].Qa(a) ? h[c].sa() : rh(b)
        } else a = dI(a, h, q, c);
        if (a) e[0] = a.sa();
        for (a = 0; a < q.length; a++) {
            u = q[a];
            if (u > c && u <= d) {
                e[u - c] = h[u].sa();
                o = u
            } else if (u > d) break
        }
        if (th(b)) if (!h[d + 1] || h[d + 1].Qa(h[o])) e[o - c] = rh(b);
        h = e
    }
    if (g && h) h = Rg(h, 0, g);
    return new Ty(b, h, j, m)
}
n.shift = function (a, b) {
    for (var c = this.a.f, d = 0; d < c.length; d++) {
        var e = c[d];
        if (th(e) && !sh(e)) {
            fI(this, e, a - 1);
            fI(this, e, a)
        }
        this.a.shift(e, a, b)
    }
};
n.splice = function (a, b, c) {
    for (var d = this.a.f, e = b - a + 1, g = 0; g < d.length; g++) {
        var h = d[g];
        if (th(h) && !sh(h)) {
            fI(this, h, a - 1);
            b + 1 < c && fI(this, h, b + 1)
        } else if (!sh(h)) {
            var j = b + 1;
            if (j < c) {
                var m = ZH(this.a, h).a,
                    o = PB(this, h),
                    q = dI(this, m, o, j);
                o = dI(this, m, o, a - 1);
                if (!q.Qa(o) && !m[j]) this.a.set(h, j, q);
                else q.Qa(o) && this.a.remove(h, j)
            }
        }
        this.a.splice(h, a, e)
    }
};

function fI(a, b, c) {
    var d = a.td(b),
        e = PB(a, b);
    c = cI(a, e, c);
    var g = e.length,
        h = e[c],
        j = e[c + 1];
    e = d[e[c - 1]];
    var m = d[j];
    d = d[h];
    var o = rh(b);
    if (!d.Qa(o)) {
        a.a.set(b, h, o);
        c > 0 && e.Qa(o) && a.a.remove(b, h);
        c < g - 1 && m.Qa(o) && a.a.remove(b, j)
    }
}
n.q = function () {
    aI.p.q.call(this);
    delete this.f;
    this.a.G();
    delete this.a;
    delete this.g
};

function gI(a, b, c) {
    this.V = a;
    this.f = b;
    this.K = c;
    this.u = new SG(new P(1));
    this.M = [];
    if (b.n) {
        this.M.push(wg);
        this.M.push(rg)
    }
    if (b.a) {
        this.M.push(kg);
        this.M.push(ng)
    }
    this.M.push(hg);
    this.M.push(ig);
    this.a = new AH(this.V, this.M);
    this.g = new aI(b);
    this.n = new CH;
    this.P = new GH(r(this.qY, this), this.V);
    this.L = new ze(this)
}
s(gI, Pi);n = gI.prototype;n.Is = l;n.qr = l;n.yv = l;n.gK = i;

function Oz(a) {
    if (a.K) return a.K.a
}
n.ra = function () {
    return this.u
};

function qu(a) {
    return Ou(a, a.ra().Fa())
}

function Qu(a) {
    return Ou(a, Ru(a.ra()))
}
n.Y = function () {
    return this.a
};n.Df = function () {
    return Bg(this.a) == 2
};
var Joa = "Cannot check for empty paragraph at 0";

function nH(a, b) {
    if (b == 0) {
        a.V.log(Error(Joa));
        return l
    }
    return Hg(a.a, b) && Fg(a.a, b)
}
function JD(a, b) {
    for (var c = a.g, d = PB(c, dh), e = [], g = 0; g < d.length; g++) {
        var h = d[g],
            j = c.Ub(dh, h);
        j && j.Bb == b && e.push(h)
    }
    return e
}
var Koa = "Every paragraph marker should have a list style at index: ",
    Loa = " with character: ";

function Yv(a, b) {
    if (b.length == 0) return l;
    var c = a.g,
        d = b[0],
        e = c.Ub(dh, d);
    if (!e) {
        a.V.log(Error(Koa + d + Loa + E(a.a, d)));
        return l
    }
    d = e.Bb;
    if (!d) return l;
    for (var g = 0; g < b.length; g++) {
        var h = b[g];
        e = c.Ub(dh, h);
        if (!e) {
            a.V.log(Error(Koa + h + Loa + E(a.a, h)));
            return l
        }
        if (e.Bb != d) return l
    }
    return i
}
function QD(a, b) {
    return lv(a.oa(dh, b)) != k
}
function Hu(a) {
    return Bg(a.a) - 1
}
function Iu(a, b) {
    return Dg(a.a, b)
}
var Moa = "Should not call getEndOfSection with an out of bounds spacer index: ";

function Ju(a, b) {
    var c;
    var d = a.a;
    c = Bg(d) - 1;
    if (b < 0 || b > c) {
        d.V.log(Error(Moa + b));
        c = c
    } else {
        d = d.indexOf(jg, b + 1);
        c = d >= 0 ? d - 1 : c
    }
    return c
}
n.Pa = function (a) {
    return this.n.Pa(a)
};

function HA(a, b) {
    return a.n.a[b] || []
}
function FA(a, b) {
    return roa(a.n, b)
}
function Ou(a, b) {
    var c;
    switch (b.O()) {
    case 0:
        c = b.a;
        break;
    case 1:
        c = FA(a, b.ma());
        break
    }
    return c
}
n.oa = function (a, b) {
    return this.g.oa(a, b)
};n.Ub = function (a, b) {
    return this.g.Ub(a, b)
};n.td = function (a) {
    return this.g.td(a)
};

function Py(a, b, c) {
    c = Ou(a, c);
    c > 0 && !Fg(a.a, c) && c--;
    return a.g.oa(b, c)
}
function Yz(a) {
    return a.g.oa(Yg, 0)
}
function Gv(a, b, c) {
    b = Hoa(a.g, b, c);
    if (Za(b)) return b;
    return Hu(a)
}
function Ay(a, b) {
    var c = a.g.oa(dh, b),
        d = 1,
        e = c.Bb;
    if (e) d = Zv(a.Pa(e), c.yb).Ay;
    return hI(a, b).length + d
}
function hI(a, b) {
    var c = a.g,
        d = PB(c, dh),
        e = c.td(dh);
    c = c.oa(dh, b);
    var g = [];
    b = Cg(a.a, b) - 1;
    var h = Ec(d, b);
    for (h = h < 0 ? -h - 2 : h;h >= 0;h--) {
        var j = e[d[h]];
        if (j.Qa(c)) g.unshift((d[h - 1] || 0) + 1);
        else if (j.Bb == c.Bb && j.yb < c.yb) break
    }
    return g
}
var Noa = "Nesting level should be defined for getting next paragraph starts for an ordered list.";

function FD(a, b, c, d) {
    var e;
    d = d;
    if (c) e = a.Pa(c);
    else if (QD(a, b)) {
        c = a.oa(dh, b);
        var g = c.Bb;
        if (g) e = a.Pa(g);
        p(d) || (d = c.yb)
    }
    if (!e || !Za(d) || !si(Zv(e, d))) {
        e && !Za(d) && a.V.log(Error(Noa));
        return k
    }
    b = b;
    c = e.ma();
    g = d;
    e = PB(a.g, dh);
    d = a.td(dh);
    var h = a.oa(dh, b);
    c = c || h.Bb;
    g = Za(g) ? g : h.yb;h = [];b = Eg(a.a, b) + 1;
    for (a = 0; a < e.length; a++) {
        var j = e[a];
        if (!(j < b)) {
            var m = d[j];
            j = m.Bb;
            m = m.yb;
            if (j == c && m == g) h.push((e[a - 1] || 0) + 1);
            else if (j == c && m < g) break
        }
    }
    return h
}

function MD(a) {
    var b = a.u,
        c = a.a,
        d, e;
    d = e = qu(a);
    if (b = Ev(b)) {
        d = b.start;
        e = b.end
    }
    e = Eg(c, e);
    c = [];
    a = PB(a.g, eh);
    for (b = 0; b < a.length; b++) {
        var g = a[b];
        g >= d && g <= e && c.push(g)
    }
    return c
}
function Fu(a) {
    var b = Ou(a, Ru(a.u)),
        c = Ou(a, Pu(a.u));
    return new nb(Cg(a.a, b), Eg(a.a, c))
}
function Gu(a) {
    if (a.u.Fa().O() != 0) return 1;
    return Cg(a.a, qu(a))
}
var Ooa = "There should be at least one style of type ",
    Poa = " in range [",
    Qoa = "].";

function BG(a, b, c, d) {
    var e = eI(a.g, b, c, d, a.a);
    e.a.length == 0 && !e.g && !e.f && a.V.log(Error(Ooa + b + Poa + c + hz + d + Qoa));
    return e
}

function xz(a, b, c, d, e, g, h) {
    var j = a.a.slice(b, c),
        m = 0;
    if (e) {
        j = e + j;
        m = e.length
    }
    if (g) j += g;
    e = Ioa(a.g, b, c, a.a, l, m);
    g = Ioa(a.g, b, c, a.a, i, m);
    m = soa(a.n, b, c, m);
    b = d ? {} : DH(a.n, b, c);
    if (h) {
        h = toa(a.n);
        for (var o in h) b[o] || (b[o] = h[o])
    }
    o = {};
    if (!d) {
        var q = new Xc;
        for (d = 0; h = e[d]; d++) Pg(h.a, function (C, B) {
            var H = B.Yr();
            H.length > 0 && Yc(q, H);
            return l
        });
        h = q.Qb();
        for (d = 0; c = h[d]; d++) {
            var u = FA(a, c),
                w = Ju(a, u + 1);
            o[c] = xz(a, u, w, l)
        }
    }
    return new Wy(j, e, g, m, b, o)
}
function Mz(a, b) {
    b = Eg(a.a, b);
    return Cw(a.n, ut, b)
}
var iI = "spacers",
    Roa = "Deleting non-tethered entity.",
    Soa = "revert",
    Toa = "replace";
n.na = function (a) {
    if (a.O() == ED) {
        var b = a;
        if (!bI(this.g, b.f)) return
    }
    var c = a.wl(this),
        d = i;
    switch (a.O()) {
    case xD:
        this.P.clear();
        var e = a.a,
            g = a.Y();
        pr(mr.N(), iI, Zf);
        if (this.K) {
            var h = this.K;
            if (!h.a && h.f) h.a = koa.test(g)
        }
        this.a.ax(e, g);
        h = g.length;
        this.g.shift(e, h);
        this.n.shift(e, h);
        h = this.g;
        var j = Ng(nh);
        if (j && j.test(g)) {
            var m;
            for (j = Ng(nh); m = j.exec(g);) {
                b = m.index;
                m = mh[m[0]] || [];
                for (var o = [], q = 0; q < m.length; q++) o.push(m[q]());
                m = o;
                for (o = 0; q = m[o]; o++) {
                    var u = q.O();
                    bI(h, u) && q.Xu() && h.a.set(u, e + b, q)
                }
            }
        }
        qr(mr.N(), iI, Zf);
        break;
    case wD:
        this.P.clear();
        e = a.qc();
        g = a.Se();
        pr(mr.N(), iI, Yf);
        this.g.splice(e, g, Bg(this.a));
        this.n.splice(e, g);
        this.a.remove(e, g);
        qr(mr.N(), iI, Yf);
        break;
    case yD:
        e = this.n;
        g = a.ma();
        if (h = mt(a.Wg, g, a.n)) e.f[g] = h;
        break;
    case zD:
        (e = this.n.f[a.ma()]) && e.update(a.n);
        break;
    case AD:
        e = a.ma();
        g = this.u.Fa();
        g.O() == 1 && e == g.ma() && wr(this, new P(FA(this, e)), i);
        (g = this.Pa(e)) && dh == g.O() && this.V.log(Error(Roa));
        EH(this.n, e);
        break;
    case DD:
        j = this.n;
        e = a.ma();
        g = a.n;
        if (g >= 0) {
            EH(j, e);
            if (b = j.Pa(e)) {
                (h = j.a[b.O()]) || (h = []);
                j.a[b.O()] = h;
                (j = h[g]) || (j = []);
                j.push(e);
                h[g] = j
            }
        } else EH(j, e);
        break;
    case ED:
        b = a;
        this.P.clear(b.f);
        if (this.K) {
            d = this.K;
            if (!d.a && d.f && b.f == eh) {
                g = (b.K || []).ps_ltr;
                d.a = Za(g) && !g
            }
        }
        a: {
            d = this.g;
            g = b.f;
            h = b.qc();
            j = b.Se();
            b = b.K;
            o = Hu(this);
            if (m = th(g) && !sh(g)) {
                q = Ac(PB(d, g));
                var w = cI(d, q, h);
                u = cI(d, q, j);
                var C = l,
                    B = d.td(g),
                    H = rh(g);
                H.update(b);
                for (w = w; w <= u; w++) {
                    var I = q[w];
                    if (!H.Qa(B[I])) {
                        fI(d, g, I);
                        C = i
                    }
                }
                if (!C) {
                    d = l;
                    break a
                }
            }
            if (sh(g)) {
                e = d.a.oa(g, h);
                if (!e) {
                    e = rh(g);
                    d.a.set(g, h, e)
                }
                if (e.mf(b)) d = l;
                else {
                    e.update(b);
                    d = i
                }
            } else {
                q =
                l;
                u = d.td(g);
                C = PB(d, g);
                B = j + 1;
                if (B <= o && !u[B]) {
                    H = dI(d, u, C, B);
                    H.mf(b) || d.a.set(g, B, H.sa())
                }
                o = u[h];
                if (H = u[h]) {
                    if (!H.mf(b)) {
                        u[h].update(b);
                        q = i
                    }
                } else {
                    H = dI(d, u, C, h);
                    if (!H.mf(b)) {
                        H = H.sa();
                        H.update(b);
                        q = i;
                        d.a.set(g, h, H)
                    }
                    o = H
                }
                for (w = 0; w < C.length; w++) {
                    I = C[w];
                    if (I < h) e = I;
                    else if (I > h && I <= j) {
                        if (H = u[I]) {
                            if (!H.mf(b)) {
                                H.update(b);
                                q = i
                            }
                            if (o.Qa(H)) {
                                d.a.remove(g, I);
                                w--
                            } else o = H
                        }
                    } else if (I > j) break
                }
                p(e) && u[e].Qa(u[h]) && d.a.remove(g, h);
                u[B] && o.Qa(u[B]) && d.a.remove(g, B);
                d = q || m
            }
            d = d
        }
        break;
    case is:
    case js:
        d = a.O() == is ? Soa : Toa;pr(mr.N(), iI, d);e = a.wl(this);Uoa(this);this.a = new AH(this.V, this.M);this.g = new aI(this.f);this.n = new CH;this.yv = this.qr = this.Is = l;this.u.Qp(new P(1));this.dispatchEvent(new FH(this, a, e));e = a.n;
        for (g = 0; g < e.length; g++) this.na(e[g]);qr(mr.N(), iI, d);this.Is = i;d = l
    }
    if (d) {
        this.Is = i;
        this.dispatchEvent(new FH(this, a, c))
    }
};

function WE(a, b) {
    var c = Ev(a.u);
    if (!c) return l;
    return c.start <= b && b <= c.end
}
var Voa = "\n\u0010\u0012\u001c",
    Woa = "\n\u0011",
    Xoa = "Selection mark type must be the same as cursor type";

function wr(a, b, c, d, e, g) {
    var h = a.u,
        j = h.Fa(),
        m = b;
    if (b.O() == 0) {
        m = jI(a, b, j);
        var o = m.a;
        j = h.Dc;
        if (c) j = d ? jI(a, d, j) : m;
        var q = j.a,
            u = o != q;m = o = kI(a, o, u);
        if (c) {
            if (d) m = kI(a, j.a, u)
        } else m = q;
        if (o != m) {
            q = a.a;
            d = Dg(q, b.f ? o - 1 : o);
            q = Dg(q, j.f ? m - 1 : m);
            if (d != q) return;
            h.Jt = k;
            h.Kt = k;
            if (a.f.n) {
                d = o;
                q = m;
                o = d < q;
                q = new nb(d, q);
                q.end--;
                d = a.Y();
                q = Mw(d, q);
                if (Lw(d, q.start)) {
                    h.Kt = wg;
                    h.Jt = rg
                }
                d = o ? q.start : q.end + 1;q = o ? q.end + 1 : q.start;d = {
                    ai: d,
                    yg: q
                };
                if (d.yg != m) c = i;o = d.ai;m = d.yg
            }
            if (a.f.a) {
                d = o;
                u = m;
                if (o = d < u) {
                    q = d;
                    d = u - 1
                } else {
                    q = u;
                    d = d - 1
                }
                q = uia(a, q, d);
                q.Hm && q.end--;
                if (q.jp) h.Kt = Voa;
                if (q.Hm) h.Jt = Woa;
                d = o ? q.start : q.end + 1;u = o ? q.end + 1 : q.start;d = {
                    ai: d,
                    yg: u
                };
                if (d.yg != m) c = i;o = d.ai;m = d.yg
            }
        }
        b = new P(o, b.f);m = new P(m, j.f)
    }
    h.Qp(b, e);
    if (c) {
        if (m && b.O() != m.O()) {
            a.V.log(Error(Xoa));
            m = b
        }
        TG(h, m)
    }
    if (e) a.yv = i;
    else a.qr = i;
    Yoa(a, l, g)
}
function Yoa(a, b, c) {
    if ((a.qr || a.yv) && !a.Is) {
        a.dispatchEvent(new loa(a, a.u.g, a.u.n, a.qr, b, c));
        a.qr = l;
        a.yv = l
    }
}
function kI(a, b, c) {
    var d = a.a;
    a = Hu(a);
    var e = b;
    if (b > a) e = a + (c ? 1 : 0);
    if (E(d, e) == jg) e -= c ? 0 : 1;
    return e = Math.max(e, 1)
}

function jI(a, b, c) {
    if (b.O() != 0) return b;
    a = a.a;
    c = c && c.O() == 0 && b.a < c.a;
    var d = b.a,
        e = Bg(a);
    if (c) for (; d > 1; d--) {
        if (Gg(a, d) || E(a, d) == jg) break
    } else for (; d < e; d++) if (Gg(a, d) || E(a, d) == jg) break;
    if (d != b.a) return new P(d, b.f);
    return b
}
n.qY = function (a, b, c, d) {
    a = eI(this.g, a, b, c, this.a);
    b = [];
    a.g && b.push(a.g);
    c = a.a;
    for (var e in c) b.push(c[e]);
    a.f && b.push(a.f);
    return Lba(b, d)
};

function eB(a) {
    var b = a.u.Fa(),
        c = Py(a, ih, b).sa(),
        d = Py(a, ch, b);
    b = Py(a, ch, b.shift(1));
    if (!d.Qa(b)) {
        d = pi();
        c.update(d)
    }
    c.update(a.u.a);
    return c
}

function nF(a) {
    var b = a.u,
        c = Ev(b);
    if (c) return xz(a, c.start, c.end, l, b.Kt, b.Jt, i);
    return k
}
n.xc = function () {
    this.dispatchEvent(ov);
    this.Is = l;
    Yoa(this, i)
};

function Uoa(a) {
    a.a.G();
    delete a.a;
    a.g.G();
    delete a.g;
    a.n.G();
    delete a.n
}
n.q = function () {
    gI.p.q.call(this);
    delete this.V;
    delete this.f;
    this.u.G();
    delete this.u;
    this.L.G();
    delete this.L;
    delete this.K;
    this.P.G();
    delete this.P;
    Uoa(this)
};
var lI = {};lI.l5 = function (a) {
    return lI.gI(a || document.styleSheets, i)
};lI.k5 = function (a) {
    return lI.gI(a || document.styleSheets, l)
};lI.JA = function (a) {
    var b = k;
    try {
        b = a.rules || a.cssRules
    } catch (c) {
        if (c.code == 15) f(c)
    }
    return b
};
lI.bw = function (a, b) {
    var c = [],
        d = a || document.styleSheets,
        e = p(b) ? b : l;
    if (d.imports && d.imports.length) for (var g = 0, h = d.imports.length; g < h; g++) Bc(c, lI.bw(d.imports[g]));
    else if (d.length) {
        g = 0;
        for (h = d.length; g < h; g++) Bc(c, lI.bw(d[g]))
    } else {
        var j = lI.JA(d);
        if (j && j.length) {
            g = 0;
            h = j.length;
            for (var m; g < h; g++) {
                m = j[g];
                m.styleSheet && Bc(c, lI.bw(m.styleSheet))
            }
        }
    }
    if ((d.type || d.rules) && (!d.disabled || e)) c.push(d);
    return c
};
var Zoa = " { ",
    $oa = " }";
lI.sS = function (a) {
    var b = v;
    if (a.cssText) b = a.cssText;
    else if (a.style && a.style.cssText && a.selectorText) {
        b = a.style.cssText.replace(/\s*-closure-parent-stylesheet:\s*\[object\];?\s*/gi, v).replace(/\s*-closure-rule-index:\s*[\d]+;?\s*/gi, v);
        b = a.selectorText + Zoa + b + $oa
    }
    return b
};
var mI = "-closure-rule-index";lI.rS = function (a, b) {
    if (a.style[mI]) return a.style[mI];
    var c = b || lI.zI(a);
    if (!c) f(Error("Cannot find a parentStyleSheet."));
    if ((c = lI.JA(c)) && c.length) for (var d = 0, e = c.length, g; d < e; d++) {
        g = c[d];
        if (g == a) return d
    }
    return -1
};
var apa = "-closure-parent-stylesheet";lI.zI = function (a) {
    return a.parentStyleSheet || a.style[apa]
};lI.P5 = function (a, b, c, d) {
    if (c = c || lI.zI(a)) if (a = d >= 0 ? d : lI.rS(a, c)) {
        lI.q1(c, a);
        lI.MP(c, b, a)
    } else f(Error("Cannot proceed without the index of the cssRule."));
    else f(Error("Cannot proceed without the parentStyleSheet."))
};
lI.MP = function (a, b, c) {
    c = c;
    if (c < 0 || c == undefined) c = (a.rules || a.cssRules).length;
    if (a.insertRule) a.insertRule(b, c);
    else {
        b = /^([^\{]+)\{([^\{]+)\}/.exec(b);
        if (b.length == 3) a.addRule(b[1], b[2], c);
        else f(Error("Your CSSRule appears to be ill-formatted."))
    }
};lI.q1 = function (a, b) {
    a.deleteRule ? a.deleteRule(b) : a.removeRule(b)
};
var nI = "text/css",
    oI = "head";
lI.jG = function (a, b) {
    var c = b ? b.Va() : z.Va(),
        d = c.createElement(jd);d.type = nI;c.getElementsByTagName(oI)[0].appendChild(d);
    if (d.styleSheet) d.styleSheet.cssText = a;
    else {
        a = c.createTextNode(a);
        d.appendChild(a)
    }
    return d
};lI.o5 = function (a) {
    a = a.href;
    if (!a) return k;
    return /([^\/\?]+)[^\/]*$/.exec(a)[1]
};
lI.gI = function (a, b) {
    for (var c = [], d = lI.bw(a), e = 0; a = d[e]; e++) {
        var g = lI.JA(a);
        if (g && g.length) {
            if (!b) var h = 0;
            for (var j = 0, m = g.length, o; j < m; j++) {
                o = g[j];
                if (b && !o.href) {
                    o = lI.sS(o);
                    c.push(o)
                } else if (!o.href) {
                    if (o.style) {
                        o.parentStyleSheet || (o.style[apa] = a);
                        o.style[mI] = h
                    }
                    c.push(o)
                }
                b || h++
            }
        }
    }
    return b ? c.join(x) : c
};

function bpa(a, b) {
    this.a = a;
    this.f = b
}
var cpa = "position:absolute;top:-5000px;border:0;",
    dpa = '<!DOCTYPE html><html><head></head><body><span style="position:absolute;white-space:nowrap;"></span></body></html>';

function epa() {
    if (pI == k) {
        if (qI == k) {
            var a = z.F(Kd, {
                style: cpa,
                frameborder: 0
            });
            z.appendChild(z.Va().body, a);
            var b = z.Te(a);
            b.open();
            b.write(dpa);
            b.close();
            qI = a
        }
        pI = new bpa(z.Te(qI).body.firstChild, y)
    }
    return pI
}
var pI = k,
    qI = k,
    fpa = "font-family:'",
    gpa = "',_,'DejaVu Sans','Times',arial,helvetica;font-weight:",
    hpa = ";font-style:";

function rI(a, b, c) {
    z.Jh(a.a);
    var d = z.J(z.Te(qI));
    b = d.F(Ee, {
        style: fpa + b.Tr() + gpa + b.UM + hpa + b.oa()
    }, c);
    d.appendChild(a.a, b);
    d = a.a.offsetWidth;
    c = a.a.offsetHeight;
    a.a.removeChild(b);
    return new cd(d, c)
}
function ipa() {
    return qI
};

function jpa(a, b, c, d, e) {
    this.K = a;
    this.u = b;
    this.n = c;
    this.f = d;
    this.a = e;
    this.g = {}
}
var sI = k,
    tI = k;

function kpa() {
    if (tI == k) f(Error("The json wasn't set prior to creating the CssInstaller.\nPlease call themes.fonts.CssInstaller.setJson before instantiatingCssInstaller."));
    if (sI == k) sI = new jpa(tI.fontMenuLink, tI.fontMap, z.Va().getElementsByTagName(oI)[0], z, lI);
    return sI
};

function uI() {
    this.a = {}
}
uI.prototype.contains = function (a) {
    return p(this.get(a))
};uI.prototype.get = function (a) {
    return this.a[a.xs]
};

function vI(a, b, c) {
    this.XH = a;
    this.UM = p(b) ? b : G;this.BM = p(c) ? c : G;this.xs = this.XH + SB + this.UM + SB + this.BM
}
vI.prototype.JS = function () {
    return this.xs
};vI.prototype.Tr = function () {
    return this.XH
};vI.prototype.oa = function () {
    return this.BM
};vI.prototype.Qa = function (a) {
    return Za(a) && Za(a.JS) && this.xs == a.xs
};

function wI(a) {
    this.f = a;
    this.a = []
}
wI.prototype.mo = function () {
    return this.f
};

function lpa(a, b) {
    for (var c = b.length, d = [], e = 0; e < c; e++) {
        var g;
        a: {
            g = a.a.length;
            for (var h = 0; h < g; h++) if (b.charCodeAt(e) >= a.a[h].fl && b.charCodeAt(e) <= a.a[h].Bl) {
                g = i;
                break a
            }
            g = l
        }
        g || d.push(b.charAt(e))
    }
    return d.join(v)
}
wI.prototype.Qa = function (a) {
    return Za(a) && Za(a.mo) && this.f.Qa(a.mo())
};
var mpa = "loaded";

function xI(a, b, c) {
    Pd.call(this, mpa, a);
    this.id = b;
    this.a = c
}
s(xI, Pd);xI.prototype.q = function () {
    xI.p.q.call(this);
    delete this.id;
    delete this.a
};

function npa(a, b, c, d, e, g, h) {
    this.aa = a;
    this.M = b;
    this.K = c;
    this.g = d;
    this.f = e;
    this.a = g;
    this.u = h;
    this.n = 0;
    this.L = new ze(this)
}
function opa(a, b, c) {
    return new npa(function () {
        return new Kj(500)
    }, 200, 300, epa(), a, b, c)
}
npa.prototype.P = function (a, b) {
    this.n++;
    var c = rI(this.g, this.f, this.a.a);
    c = !dd(c, a);
    var d = this.n >= this.K;
    if (c || d) {
        Mj(b);
        this.L.a(b, Nj);
        this.u(this.f, this.a, c || !d)
    }
};

function yI(a, b, c) {
    this.n = a;
    this.g = b;
    this.a = c;
    this.f = i
}
yI.prototype.mo = function () {
    return this.g
};yI.prototype.ma = function () {
    return this.n
};yI.prototype.Nb = function () {
    return this.a.length == 0
};

function zI(a, b, c) {
    this.fl = a;
    this.Bl = b;
    this.a = c
}
zI.prototype.contains = function (a) {
    if (p(a.fl) && p(a.Bl)) return a.fl >= this.fl && a.Bl <= this.Bl;
    return l
};zI.prototype.Qa = function (a) {
    return Za(a) && p(a.fl) && p(a.Bl) && this.fl == a.fl && this.Bl == a.Bl
};

function ppa(a) {
    this.a = a
}
var AI = k,
    BI = k;

function CI(a, b, c, d, e) {
    this.g = a;
    this.M = b;
    this.f = c;
    this.n = d;
    this.K = e;
    this.u = 0;
    this.a = {}
}
s(CI, Pi);n = CI.prototype;n.aC = function (a, b) {
    return qpa(this, a, b).length == 0
};n.OJ = function (a) {
    return this.f.contains(a)
};

function qpa(a, b, c) {
    if (a.f.contains(b)) return lpa(a.f.get(b), c);
    return c
}
n.load = function (a, b) {
    return this.HK(a, qpa(this, a, b))
};
n.HK = function (a, b) {
    var c;
    var d = this.M.a[a.Tr()];
    if (d) {
        d = d.unicodeRanges;
        var e = d.length;
        c = [];
        for (var g = 0; g < e; g++) {
            var h = d[g],
                j = new wI(new vI(v));
            h = new zI(h.begin, h.end, h.testString);
            j.a.push(h);
            lpa(j, b) != b && c.push(h)
        }
        c = c
    } else c = [];
    if (c.length == 0) return -1;
    d = this.u++;
    e = Ac(c);
    g = [];
    for (var m in this.a) {
        j = this.a[m];
        j.mo().Qa(a) && vc(g, j.a)
    }
    m = g.length;
    for (j = 0; j < m; j++) {
        h = g[j];
        for (var o = e.length, q = 0; q < o; q++) if (h.Qa(e[q])) {
            e.splice(q, 1);
            break
        }
    }
    m = this.a[d];
    if (!Za(m)) {
        m = new yI(d, a, c);
        this.a[d] = m
    }
    if (e.length > 0) {
        m =
        this.g;
        c = a.Tr();
        if (!m.g[c]) {
            g = m.u[c];
            if (Za(g)) {
                m.a.jG(g.css);
                m.a.jG(g.css, z.J(z.Te(ipa(epa()))));
                m.g[c] = i
            }
        }
        m = e.length;
        for (c = 0; c < m; c++) {
            g = this.n(a, e[c], r(this.QX, this));
            j = rI(g.g, new vI(v), g.a.a);
            h = rI(g.g, g.f, g.a.a);
            if (dd(h, j)) {
                h = g.aa(g.M);
                g.L.C(h, Nj, r(g.P, g, j, h));
                h.start()
            } else g.u(g.f, g.a, i)
        }
    }
    return d
};
n.QX = function (a, b, c) {
    if (c) {
        var d = this.f,
            e = d.get(a);
        if (!Za(e)) {
            e = new wI(a);
            d.a[a.xs] = e
        }
        e.a.push(b)
    }
    for (var g in this.a) {
        d = this.a[g];
        if (d.mo().Qa(a)) {
            e = d;
            for (var h = b, j = c, m = e.a.length, o = 0; o < m; o++) if (e.a[o].Qa(h)) {
                e.a.splice(o, 1);
                break
            }
            if (!j) e.f = l;
            if (d.Nb()) {
                delete this.a[g];
                this.K.setTimeout(r(this.dispatchEvent, this, new xI(this, d.ma(), d.f)), 0)
            }
        }
    }
};

function DI(a, b, c, d, e) {
    CI.call(this, a, b, c, d, e)
}
s(DI, CI);DI.prototype.aC = function (a, b) {
    var c = DI.p.aC;
    if (this.f.contains(a) && b == Hd && y.Ua) return i;
    return !y.Ua && c.call(this, a, b)
};DI.prototype.OJ = function (a) {
    if (y.Ua) {
        a: {
            for (var b in this.a) if (this.a[b].mo().Qa(a)) {
                a = i;
                break a
            }
            a = l
        }
        a = !a
    } else a = this.f.contains(a);
    return a
};DI.prototype.load = function (a, b) {
    return DI.p.HK.call(this, a, b)
};

function rpa(a, b) {
    this.g = a.fontMenuLink;
    var c = a.fontMap;
    for (var d in c) for (var e = b.length, g = 0; g < e; g++) if (b[g] == d) {
        delete c[d];
        break
    }
    this.a = c;
    c = [];
    for (var h in this.a) c.push(h);
    this.f = c
};

function EI(a, b, c, d, e, g) {
    this.A = b;
    this.f = c;
    this.V = d;
    this.M = e;
    this.g = g || k;
    this.L = new ze(this);
    this.a = {};
    this.L.C(this.A, gD, Pq(this.V, this.u, this)).C(this.f, mpa, Pq(this.V, this.n, this));
    Zr(a, es, this.K, this)
}
s(EI, Pi);
for (var FI = "Times New Roman", GI = [ei, FI, "Arial Black", "Arial Narrow", "Comic Sans MS", "Courier New", "Garamond", "Georgia", "Tahoma", "Trebuchet MS", "Verdana"], spa = {}, HI = 0; HI < GI.length; HI++) {
    var tpa = GI[HI];
    spa[tpa.toLowerCase()] = tpa
}
var upa = {
    serif: FI,
    "sans-serif": ei,
    cursive: FI,
    fantasy: "Comic Sans MS",
    monospace: "Verdana"
};EI.prototype.cd = function () {
    qI = Ge.N().gm
};EI.prototype.K = function () {
    this.g = Mr(Rr(Qr.N(), es)).uI()
};EI.prototype.n = function (a) {
    var b = this.a[a.id];
    delete this.a[a.id];
    a = this.g ? this.g([b.a], b.f).Mn[0] : b.a;this.dispatchEvent(new FH(this, a, a.M));this.dispatchEvent(ov)
};

function II(a) {
    if (a) return spa[a.toLowerCase()] || k;
    return k
}

function vpa(a, b, c, d) {
    var e = d.Tr(),
        g = d.gl ? F : G,
        h = d.Oj ? J : G;
    if (!(!e || II(e) || upa[e])) {
        g = new vI(e, g, h);
        if (!a.f.aC(g, c)) {
            g = a.f.load(g, c);
            if (g != -1) {
                if (b.O() == xD) {
                    h = {};
                    h.ts_bd = d.gl;
                    h.ts_it = d.Oj;
                    h.ts_ff = e;
                    b = new AG(ih, b.a, b.a + c.length, h)
                }
                a.a[g] = new JI(b)
            }
        }
    }
}
EI.prototype.u = function (a) {
    a = a.a;
    for (var b in this.a) this.a[b].f.push(a);
    switch (a.O()) {
    case xD:
        b = this.A.oa(ih, a.a);
        vpa(this, a, a.Y(), b);
        break;
    case ED:
        if (a.f == ih) {
            b = this.A.Y().slice(a.qc(), a.Se());
            var c = this.A.oa(ih, a.qc());
            vpa(this, a, b, c)
        }
        break;
    default:
        break
    }
};

function vy(a, b) {
    var c = ji(b),
        d = c.fontFamily,
        e = new vI(d, c.fontWeight, c.fontStyle);
    if (!II(d) && !a.f.OJ(e)) c.fontFamily = ei;
    return Uf(c)
}
function JI(a) {
    this.a = a;
    this.f = []
}
s(JI, t);JI.prototype.q = function () {
    JI.p.q.call(this);
    delete this.a
};

function KI(a) {
    this.a = {};
    this.L = new ze(this);
    this.f = a
}
s(KI, t);

function wpa(a, b, c) {
    a.a[c] = b;
    a.L.C(b, qs, a.n)
}
var xpa = "preferences",
    ypa = "/prefs";KI.prototype.n = function (a) {
    a = [a.a];
    if (this.f) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c].name] = a[c].hM;
        a = [xpa, cr(b)];
        VG(this.f, ypa, r(this.g, this, a))
    }
};KI.prototype.g = function (a, b) {
    var c = St(a);
    b.Cr(c).Ld()
};KI.prototype.q = function () {
    KI.p.q.call(this);
    this.L.G();
    delete this.L;
    delete this.a;
    delete this.f
};
var zpa = "redrawTimeout";

function LI(a, b) {
    dz.call(this, a, b);
    this.n = Number(Yt(window.location.href, zpa)) || 200
}
s(LI, dz);LI.prototype.K = 0;LI.prototype.g = 0;LI.prototype.vf = function () {
    var a = LI.p.vf.call(this);
    if (this.u.uy(this.g, oz(this, a))) return Hf;
    return a
};LI.prototype.Lc = function (a) {
    this.g = a
};

function sma(a) {
    a.K = 0;
    a.g = 0;
    return LI.p.vf.call(a) != Hf
};

function MI() {
    this.g = {};
    this.f = {}
}
s(MI, t);

function Kz(a) {
    return a.g
}
MI.prototype.n = function (a, b) {
    var c = b.A;
    if (this.a(a, c)) return this.f[Cw(c.n, Lf, a)[0]];
    return k
};MI.prototype.a = function (a, b) {
    return Za(this.f[Cw(b.n, Lf, a)[0]])
};

function KD(a, b) {
    var c = a.g[b];
    if (c) {
        c.pb();
        c.J().removeNode(c.z());
        c.zm = k
    }
}
MI.prototype.q = function () {
    MI.p.q.call(this);
    for (var a in this.g) this.g[a].G();
    delete this.g;
    for (a in this.f) this.f[a].G();
    delete this.f
};

function NI(a, b) {
    iv.call(this, a, b)
}
s(NI, vB);n = NI.prototype;n.IJ = 1;n.rg = function () {
    var a = this.z();
    if (!a) {
        this.F();
        a = this.z()
    }
    return We(Ge.N(), a)
};
var Apa = "kix-footnotenumberview";n.F = function () {
    var a = this.J(),
        b = Q(this.getContext()).oa(ih, this.IJ).sa(),
        c = {};
    c.ts_va = oi;
    c.ts_it = i;
    b.update(c);
    b = (c = qv(this.getContext())) ? vy(c, b) : ii(b);this.sb(a.F(Ne, {
        "class": Apa,
        style: b
    }, Jt))
};n.cd = function (a) {
    this.IJ = a
};n.xc = function () {};n.Am = function () {
    return 1
};n.Sb = function () {
    return new P(0)
};

function OI() {}
Qa(OI);
OI.prototype.n = function (a, b, c) {
    if (this.a(a, b.A)) return new NI(b, c);
    return k
};OI.prototype.a = function (a, b) {
    return E(b.Y(), a) == Jt && Za(b.Ub(ah, a))
};

function PI(a, b, c) {
    this.g = a;
    this.V = b || k;
    this.a = c || {}
}
s(PI, t);
var Bpa = "Server returned null image URL: ";PI.prototype.u = function (a, b, c) {
    if (!this.wj) {
        var d = c ? c[b] : k;
        if (d) {
            this.a[b] = d;
            a(d)
        } else this.V && this.V.log(Error(Bpa + c))
    }
};PI.prototype.q = function () {
    PI.p.q.call(this);
    this.V && delete this.V;
    delete this.a
};

function QI(a, b, c, d) {
    PI.call(this, a, c, d);
    this.f = b
}
s(QI, PI);QI.prototype.n = function (a, b) {
    a(b.Cc())
};QI.prototype.q = function () {
    QI.p.q.call(this);
    delete this.f
};

function RI(a, b) {
    iv.call(this, a, b)
}
s(RI, vB);n = RI.prototype;n.GC = 0;n.rg = function () {
    return new cd(this.GC, 3)
};
var Cpa = "kix-pagebreakview";n.F = function () {
    this.sb(this.J().F(wd, {
        "class": Cpa,
        style: bc(Ez, this.GC, D)
    }))
};n.cd = function (a, b) {
    this.GC = b
};n.xc = function () {};n.Am = function () {
    return 1
};n.Sb = function () {
    return new P(0)
};

function SI() {}
Qa(SI);SI.prototype.n = function (a, b, c) {
    if (this.a(a, b.A)) return new RI(b, c);
    return k
};SI.prototype.a = function (a, b) {
    return E(b.Y(), a) == xg
};

function TI(a) {
    this.Ai = new XH;
    this.L = new ze(this);
    this.L.C(a, gD, this.a)
}
s(TI, t);TI.prototype.a = function (a) {
    a = a.a;
    switch (a.O()) {
    case xD:
        this.Ai.shift(a.a, a.Y().length);
        break;
    case wD:
        var b = a.qc();
        this.Ai.splice(b, a.Se() - b + 1);
        break
    }
};TI.prototype.register = function (a, b) {
    var c = this.Ai.get(b);
    if (!c) {
        c = [];
        this.Ai.set(b, c)
    }
    c.push(a)
};TI.prototype.unregister = function (a) {
    Pg(this.Ai.a, function (b, c) {
        xc(c, a);
        c.length == 0 && this.Ai.remove(b);
        return l
    }, this)
};

function dA(a, b) {
    var c = -1;
    Pg(a.Ai.a, function (d, e) {
        if (sc(e, b)) {
            c = d;
            return i
        }
    });
    return c
}
TI.prototype.q = function () {
    this.L.G();
    delete this.L;
    this.Ai.G();
    delete this.Ai;
    TI.p.q.call(this)
};

function UI(a, b, c, d, e, g, h, j, m, o, q, u, w, C) {
    this.A = a;
    this.f = b;
    this.g = c;
    this.a = d;
    this.aa = e;
    this.V = g;
    this.P = h;
    this.M = j;
    this.Aa = m;
    this.lb = o;
    this.n = q;
    this.Oa = u;
    this.Ya = w;
    this.xa = C
}
s(UI, t);UI.prototype.K = k;UI.prototype.u = k;

function xv(a, b) {
    if (!a.K) a.K = new b;
    return a.K
}
function uv(a, b) {
    if (!a.u) a.u = new b;
    return a.u
}
function Q(a) {
    return a.A
}
function yv(a) {
    return a.f
}
function Fy(a) {
    return a.g
}
function cB(a) {
    return a.a
}
function wv(a) {
    return a.A.f
}
function Lz(a) {
    return a.aa
}
function pv(a) {
    return a.V
}

function Iz(a) {
    return a.P
}
function qv(a) {
    return a.Aa
}
function cA(a) {
    return a.Oa
}
UI.prototype.q = function () {
    UI.p.q.call(this);
    this.A.G();
    delete this.A;
    this.g.G();
    delete this.g;
    delete this.a;
    this.u && this.u.G();
    delete this.u;
    this.K && this.K.G();
    delete this.K;
    this.aa.G();
    delete this.aa;
    this.P.G();
    delete this.P;
    this.M.G();
    delete this.M;
    delete this.lb;
    delete this.f;
    delete this.V;
    this.n && this.n.G();
    delete this.n;
    this.xa.G();
    delete this.xa
};
var Dpa = "stylesheet",
    VI = "kix-sr";

function Epa(a, b, c, d, e, g, h) {
    var j = new gI(c, a, a.YM ? new joa(a.r_) : k),
        m = new fC,
        o = new MI;
    xy.register(o, j);
    var q = new YG(j, o.f);
    if (a.n) {
        var u = MB.N();
        xy.register(u, j)
    }
    if (a.aa) {
        u = OI.N();
        xy.register(u, j)
    }
    u = RB.N();
    xy.register(u, j);
    if (a.Ya) {
        u = SI.N();
        xy.register(u, j)
    }
    u = a.SM ? new LI(j, c) : new dz(j, c);
    var w;
    if (a.EF) {
        BI = tI = w = a.RF || {};
        var C = kpa();
        C.f.appendChild(C.n, C.f.F(ch, {
            rel: Dpa,
            type: nI,
            href: C.K
        }));
        C = Qr.N();
        var B = kpa();
        if (BI == k) f(Error("The json wasn't set prior to creating the UnicodeRangeMapper.\nPlease call themes.fonts.UnicodeRangeMapper.setJson before instantiatingUnicodeRangeMapper."));
        if (AI == k) AI = new ppa(BI.fontMap);
        w = new EI(C, j, new DI(B, AI, new uI, opa, window), c, new rpa(w, GI))
    } else w = k;w = w;g = y.La ? new Pw(g) : k;C = new TI(j);B = new KI(a.M && a.zY ? e : k);a.Ru && wpa(B, ss.N(), us);a.Aa && wpa(B, new tH(VI, i, M(b, fn)), VI);
    return new UI(j, b, m, d, o, c, u, q, w, e, g, C, B, new QI(a.P, e, c, h))
};

function WI() {
    this.L = new ze(this);
    this.a = k;
    this.g = {};
    this.f = {}
}
s(WI, t);WI.prototype.ij = function (a, b) {
    var c = b ? this.f : this.g;
    (b ? this.g : this.f)[a.ma()];
    if (!c[a.ma()]) {
        c[a.ma()] = a;
        XI(this, a, !b)
    }
};WI.prototype.n = function (a) {
    a.g.a() != a.a.a() && YI(this)
};

function YI(a) {
    for (var b in a.g) XI(a, a.g[b], i);
    for (b in a.f) XI(a, a.f[b], l)
}
var Fpa = "network";

function XI(a, b, c) {
    a = !! a.a && a.a.tb().a();
    b.la(a == c, Fpa)
}
WI.prototype.q = function () {
    WI.p.q.call(this);
    this.L.G();
    delete this.a;
    delete this.g;
    delete this.f
};
var Gpa = "This document has unsaved changes. Do you want to leave the page and discard your changes?";

function Hpa(a) {
    return jw(a) || iw(a) ? Gpa : undefined
}
function ZI(a) {
    a.onbeforeunload = Pa;
    a.location.reload()
};
var Ipa = "Debug=true",
    Jpa = "docs.debug.DebugService";

function $I(a, b, c) {
    b = (b || window).location.href;
    if (this.f = a || !! b && b.indexOf(Ipa) != -1) {
        this.a = c || new Fb.A3(Jpa);
        this.a.la(i);
        this.a.a(i)
    }
}
s($I, t);$I.prototype.q = function () {
    $I.p.q.call(this);
    if (this.a) {
        this.a.a(l);
        delete this.a
    }
};
var Kpa = new $I;
var Lpa = "http://www.google.com/support/forum/p/Google+Docs";

function Mpa() {
    return Lpa
}
var Npa = '" target="_blank">';

function Opa(a) {
    return Lx + Vb(a) + Npa
};
var Ppa = "Google Docs error",
    Qpa = "Reload";

function aJ() {
    cp.call(this);
    this.f = kb(ZI, window);
    this.a = [];
    this.setTitle(Ppa);
    Cp(this, (new xp).set(Gp, Qpa, l, l));
    So(this).C(this, Ep, this.g)
}
s(aJ, cp);Qa(aJ);aJ.prototype.F = function () {
    aJ.p.F.call(this);
    this.z().style.zIndex = 999999
};
var Rpa = "To discuss this or other issues, visit the ",
    Spa = "Google Docs Help Forum",
    Tpa = ".  To see the status of Google applications, check the ",
    Upa = "http://www.google.com/appsstatus",
    Vpa = "Google Apps Status Dashboard</a>.",
    Wpa = 'Google Docs has encountered a server error or bug. We are looking into the problem now.<br><br>Please try one of these interim solutions:<br><ul><li>Reload this page.<li>Download the document by right-clicking it in the main document list and selecting "Export."</ul>',
    Xpa = 'Debug text:<div><textarea style="width:90%;height:200px;font-size:85%" readonly="readonly">',
    Ypa = "\n------------\n",
    Zpa = "</textarea></div>";aJ.prototype.show = function (a, b, c) {
    a = a || (c ? c() : undefined);
    c = Rpa + (Opa(Mpa()) + (Spa + (by + (Tpa + (Opa(Upa) + Vpa)))));
    a && this.a.push(a);
    ep(this, Wpa + (this.a.length ? Xpa + Vb(this.a.join(Ypa)) + Zpa : v) + c);
    this.X(i);
    if (b) this.f = b
};aJ.prototype.g = function (a) {
    a.key == Gp && this.f.call(k)
};aJ.prototype.q = function () {
    aJ.p.q.call(this)
};

function $pa() {}
$pa.prototype.gv = k;

function aqa() {
    return bJ.Yz()
}
var bJ;

function cJ() {}
s(cJ, $pa);cJ.prototype.Yz = function () {
    var a = bqa(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest
};

function cqa(a) {
    var b = {};
    if (bqa(a)) {
        b[0] = i;
        b[1] = i
    }
    return b
}
cJ.prototype.n = k;
var dqa = "MSXML2.XMLHTTP.6.0",
    eqa = "MSXML2.XMLHTTP.3.0",
    fqa = "MSXML2.XMLHTTP",
    gqa = "Microsoft.XMLHTTP";

function bqa(a) {
    if (!a.n && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
        for (var b = [dqa, eqa, fqa, gqa], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                new ActiveXObject(d);
                return a.n = d
            } catch (e) {}
        }
        f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
    }
    return a.n
}
bJ = new cJ;

function dJ(a) {
    this.headers = new Tc;
    this.a = a || k
}
s(dJ, Pi);
var hqa = [];

function iqa(a) {
    a.G();
    xc(hqa, a)
}
n = dJ.prototype;n.ri = l;n.Hb = k;n.Wy = k;n.GK = v;n.q_ = v;n.Ah = 0;n.Rl = v;n.wA = l;n.Iw = l;n.LB = l;n.hm = l;n.Yt = 0;n.pn = k;
var eJ = "GET",
    fJ = "POST",
    gJ = "Content-Type",
    jqa = "application/x-www-form-urlencoded;charset=utf-8";
n.send = function (a, b, c, d) {
    if (this.ri) f(Error("[goog.net.XhrIo] Object is active with another request"));
    b = b || eJ;
    this.GK = a;
    this.Rl = v;
    this.Ah = 0;
    this.q_ = b;
    this.wA = l;
    this.ri = i;
    this.Hb = this.a ? this.a.Yz() : new aqa;this.Wy = this.a ? this.a.gv || (this.a.gv = cqa(this.a)) : bJ.gv || (bJ.gv = cqa(bJ));this.Hb.onreadystatechange = r(this.vL, this);
    try {
        this.LB = i;
        this.Hb.open(b, a, i);
        this.LB = l
    } catch (e) {
        kqa(this, 5, e);
        return
    }
    a = c || v;
    var g = this.headers.sa();d && Sc(d, function (j, m) {
        g.set(m, j)
    });b == fJ && !g.Ad(gJ) && g.set(gJ, jqa);Sc(g, function (j, m) {
        this.Hb.setRequestHeader(m, j)
    }, this);
    try {
        if (this.pn) {
            Lj.clearTimeout(this.pn);
            this.pn = k
        }
        if (this.Yt > 0) this.pn = Lj.setTimeout(r(this.HT, this), this.Yt);
        this.Iw = i;
        this.Hb.send(a);
        this.Iw = l
    } catch (h) {
        kqa(this, 5, h)
    }
};n.dispatchEvent = function (a) {
    return dJ.p.dispatchEvent.call(this, a)
};
var lqa = "Timed out after ",
    mqa = "ms, aborting",
    nqa = "timeout";n.HT = function () {
    if (typeof Ja != "undefined") if (this.Hb) {
        this.Rl = lqa + this.Yt + mqa;
        this.Ah = 8;
        this.dispatchEvent(nqa);
        hJ(this, 8)
    }
};

function kqa(a, b, c) {
    a.ri = l;
    if (a.Hb) {
        a.hm = i;
        a.Hb.abort();
        a.hm = l
    }
    a.Rl = c;
    a.Ah = b;
    oqa(a);
    iJ(a)
}
var jJ = "complete";

function oqa(a) {
    if (!a.wA) {
        a.wA = i;
        a.dispatchEvent(jJ);
        a.dispatchEvent(as)
    }
}
var pqa = "abort";

function hJ(a, b) {
    if (a.Hb) {
        a.ri = l;
        a.hm = i;
        a.Hb.abort();
        a.hm = l;
        a.Ah = b || 7;
        a.dispatchEvent(jJ);
        a.dispatchEvent(pqa);
        iJ(a)
    }
}
n.q = function () {
    if (this.Hb) {
        if (this.ri) {
            this.ri = l;
            this.hm = i;
            this.Hb.abort();
            this.hm = l
        }
        iJ(this, i)
    }
    dJ.p.q.call(this)
};n.vL = function () {
    !this.LB && !this.Iw && !this.hm ? this.wD() : qqa(this)
};
n.wD = function () {
    qqa(this)
};
var kJ = "readystatechange",
    lJ = "success",
    rqa = " [";

function qqa(a) {
    if (a.ri) if (typeof Ja != "undefined") if (!(a.Wy[1] && mJ(a) == 4 && a.ce() == 2)) if (a.Iw && mJ(a) == 4) Lj.setTimeout(r(a.vL, a), 0);
    else {
        a.dispatchEvent(kJ);
        if (mJ(a) == 4) {
            a.ri = l;
            if (nJ(a)) {
                a.dispatchEvent(jJ);
                a.dispatchEvent(lJ)
            } else {
                a.Ah = 6;
                var b;
                try {
                    b = mJ(a) > 2 ? a.Hb.statusText : v
                } catch (c) {
                    b = v
                }
                a.Rl = b + rqa + a.ce() + Mg;
                oqa(a)
            }
            iJ(a)
        }
    }
}
var sqa = "ready";

function iJ(a, b) {
    if (a.Hb) {
        var c = a.Hb,
            d = a.Wy[0] ? Pa : k;a.Hb = k;a.Wy = k;
        if (a.pn) {
            Lj.clearTimeout(a.pn);
            a.pn = k
        }
        b || a.dispatchEvent(sqa);
        try {
            c.onreadystatechange = d
        } catch (e) {}
    }
}
function nJ(a) {
    switch (a.ce()) {
    case 0:
    case 200:
    case 204:
    case 304:
        return i;
    default:
        return l
    }
}
function mJ(a) {
    return a.Hb ? a.Hb.readyState : 0
}
n.ce = function () {
    try {
        return mJ(this) > 2 ? this.Hb.status : -1
    } catch (a) {
        return -1
    }
};

function oJ(a) {
    return a.Hb ? a.Hb.responseText : v
}
n.Wr = Ha(11);

function tqa(a) {
    this.a = a
}
var uqa = "__protected_",
    pJ = "_",
    vqa = "__";

function qJ(a, b, c) {
    c = !! c;
    var d = uqa + ib(a) + pJ + c + vqa;
    b[d] || (b[d] = wqa(a, b, c));
    return b[d]
}
function wqa(a, b, c) {
    c && xaa(15);
    return function () {
        try {
            return b.apply(this, arguments)
        } catch (d) {
            a.a(d);
            f(d)
        } finally {}
    }
}
var xqa = "window";

function yqa(a, b) {
    var c = Oa(xqa),
        d = c.setTimeout;
    c.setTimeout = function (e, g) {
        e = qJ(a, e, b);
        return d.call ? d.call(this, e, g) : d(e, g)
    }
}

function zqa(a, b) {
    var c = Oa(xqa),
        d = c.setInterval;
    c.setInterval = function (e, g) {
        e = qJ(a, e, b);
        return d.call ? d.call(this, e, g) : d(e, g)
    }
};

function rJ(a, b) {
    this.g = b || k;
    this.K = Aqa;
    this.u = a;
    if (y.ia) raa(r(this.f, this), l, k);
    else {
        this.a = new tqa(r(this.f, this));
        yqa(this.a);
        zqa(this.a);
        ye = qJ(this.a, ye, void 0);
        ee(ye);
        dJ.prototype.wD = qJ(this.a, dJ.prototype.wD, void 0)
    }
}
s(rJ, Pi);

function Bqa(a, b) {
    Pd.call(this, sj);
    this.error = a;
    this.a = b
}
s(Bqa, Pd);rJ.prototype.a = k;

function Aqa(a, b, c, d) {
    var e = new dJ;
    hqa.push(e);
    oe(e, sqa, kb(iqa, e));
    e.send(a, b, c, d)
}
var Cqa = "window.location.href",
    Dqa = "Unknown error",
    sJ = "Not available",
    tJ = "script",
    Eqa = "line",
    Fqa = "context.";
rJ.prototype.f = function (a, b) {
    var c;
    c = Oa(Cqa);
    c = typeof a == bb ? {
        message: a,
        name: Dqa,
        lineNumber: sJ,
        fileName: c,
        stack: sJ
    } : !a.lineNumber || !a.fileName || !a.stack ? {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber || a.t_ || sJ,
        fileName: a.fileName || a.filename || a.sourceURL || c,
        stack: a.stack || sJ
    } : a;
    var d = String(c.fileName).split(/[\/\\]/).pop();d = String(d).split(It, 2)[0];
    var e = b ? yb(b) : {};
    if (this.g) try {
        this.g(c, e)
    } catch (g) {}
    var h = c.stack;
    try {
        var j = Vt(this.u, tJ, d, as, c.message, Eqa, c.lineNumber);
        d = {};
        d.trace = h;
        if (e) for (var m in e) d[Fqa + m] = e[m];
        var o = Ut(d);
        this.K(j, fJ, o, this.n)
    } catch (q) {}
    try {
        this.dispatchEvent(new Bqa(c, e))
    } catch (u) {}
};
var Gqa = "/jserror",
    uJ = "X-Same-Domain";

function vJ(a, b) {
    this.V = k;
    this.a = {};
    this.L = new ze(this);
    this.f = !! b;
    var c = r(this.a1, this);
    this.V = new rJ((a || v) + Gqa, c);
    c = {};
    c[uJ] = aj;
    this.V.n = c;
    this.L.C(this.V, sj, this.EU)
}
s(vJ, Pi);
var Hqa = "fatal";

function wJ(a, b, c) {
    c = Iqa(a, Hqa, c);
    if (!a.V) f(b);
    a.V.f(b, c)
}
n = vJ.prototype;
var Jqa = "incident";n.log = function (a, b) {
    var c = Iqa(this, Jqa, b);
    if (!this.V) f(a);
    this.V.f(a, c)
};

function Pq(a, b, c) {
    return r(a.w1, a, b, c)
}
n.w1 = function (a, b) {
    try {
        a.apply(b, Cc(arguments, 2))
    } catch (c) {
        wJ(this, c)
    }
};

function Iqa(a, b, c) {
    a = c ? yb(c) : {};a.severity = b;
    return a
}
n.EU = function (a) {
    if (a.a.severity == Jqa) this.dispatchEvent(uj);
    else {
        var b = yb(a.error);
        Bb(b, a.a);
        if (this.f) {
            a = cr(b);
            aJ.N().show(a, undefined, void 0)
        } else aJ.N().show(void 0, undefined, void 0);
        this.dispatchEvent(tj)
    }
};n.a1 = function (a, b) {
    Bb(b, this.a)
};n.q = function () {
    vJ.p.q.call(this);
    this.L.G();
    delete this.L;
    this.V && this.V.G();
    delete this.V;
    delete this.a
};

function xJ() {
    this.a = {};
    var a = La._docs_flag_initialData;
    a && Bb(this.a, a)
}
Qa(xJ);xJ.prototype.get = function (a) {
    return this.a[a]
};xJ.prototype.getString = Ha(1);
var Kqa = "/xhrf";

function yJ(a, b, c, d, e) {
    this.a = d || z.J();
    this.V = c;
    this.M = a;
    Ib(a, Hj);
    this.K = e || k;
    this.P = b;
    this.u = new Ar(this.aa, 15E3, this);
    this.f = this.a.createElement(Kd);
    Qf(this.f, l);
    this.a.Va().body.appendChild(this.f);
    this.a.Va().domain = this.a.Va().domain;
    this.u.start();
    this.a.fc().xhrFactoryReady = r(this.xa, this);
    a = this.f;
    b = Lt(this.a.fc().location.href);
    b = Kt(b[1], k, this.P + Na + b[3], b[4], this.M + Kqa);
    a.src = b
}
s(yJ, cJ);yJ.prototype.g = k;yJ.prototype.Yz = function () {
    return this.g()
};
var Lqa = "XHR factory iFrame did not load successfully";
yJ.prototype.xa = function () {
    Br(this.u);
    delete this.a.fc().xhrFactoryReady;
    var a = this.f.contentWindow.document.makeXhr;
    if (gb(a)) {
        this.g = a;
        this.K && this.K()
    } else wJ(this.V, Error(Lqa))
};
var Mqa = "Timeout loading the XHR factory iFrame";yJ.prototype.aa = function () {
    delete this.a.fc().xhrFactoryReady;
    wJ(this.V, Error(Mqa))
};
var zJ = 0;

function AJ(a, b) {
    this.A = a;
    this.f = b
}
s(AJ, t);AJ.prototype.g = 0;AJ.prototype.a = l;AJ.prototype.n = function (a) {
    var b = 0;
    if (this.a) {
        b = Bg(this.A.Y()) - this.g;
        if (b != 0) for (var c = 0; c < a.length; c++) a[c].shift(b)
    } else this.a = i;
    ns(this.f, a);
    this.g = Bg(this.A.Y()) - b
};AJ.prototype.q = function () {
    AJ.p.q.call(this);
    delete this.A;
    delete this.f
};

function BJ() {
    this.L = new ze(this)
}
s(BJ, Pi);n = BJ.prototype;n.JB = i;n.DD = l;n.fA = 0;n.iC = 1;n.tb = function () {
    return this.iC
};n.AU = function () {
    this.Ka(5)
};n.zU = function () {
    this.Ka(y.ia && this.JB ? 4 : 3)
};n.XX = function () {
    if (y.ia) this.JB = i;
    this.Ka(4)
};n.WX = function () {
    if (y.ia) this.JB = l;
    this.Ka(3)
};
n.Ka = function (a) {
    if (this.iC != a) if (!(this.fA > 0)) {
        if (a == 2) f(Error("Disabled state is not yet implemented."));
        if (a == 1) f(Error("Cannot transition into the loading state."));
        this.iC = a;
        if (!this.DD) {
            Oj(this.SQ, 200, this);
            this.DD = i
        }
    }
};

function Vq(a, b) {
    if (b) {
        a.Ka(4);
        a.fA++
    } else {
        a.fA--;
        a.Ka(5)
    }
}
var Nqa = "transition";n.SQ = function () {
    this.DD = l;
    this.dispatchEvent(Nqa)
};n.q = function () {
    BJ.p.q.call(this);
    this.L.G();
    delete this.L
};
var Oqa = "build-label",
    Pqa = "protocol-number",
    Qqa = "release-number",
    Rqa = "server_time_ms";

function CJ(a, b, c, d, e, g, h) {
    this.M = a;
    this.Xa = b;
    this.cc = c;
    this.f = a.Pu ? e || k : k;this.Ie = g;this.Aa = new WI;this.P = a.g == 4 ? new vl(a, this.Aa, b) : new il(a, this.Aa);this.u = new BJ;this.Qh = new fG(this.u);this.V = new vJ(a.Bq, a.bY);this.V.a[Oqa] = a.IM;this.V.a[Pqa] = a.GA.toString();this.V.a[Qqa] = a.rB.toString();this.V.a.sid = this.cc;this.n = z.J(a.z());this.Cb = k;
    if (a.LO) {
        b = r(this.cD, this);
        c = y.ia ? k : new yJ(a.Bq, c, this.V, this.n, b);this.Cb = c
    }
    this.xa = new Gq(this.V, a.DF, a.zP, jf(a), this.u, this.n);this.aa = a.Pu ? new UG : k;Ch = !a.xa;
    this.a = Epa(a, this.P, this.V, this.xa, this.aa, this.n, h);this.K = !a.lb && (a.g == 4 || a.g == 3) ? new mv(this.a, this.u, this.n) : k;h = this.a;c = this.Xa;b = a.Aa && !jf(a);e = this.u;g = this.n;
    var j = rB(h, g);this.va = new cD(h, c, j, b, e, g);this.g = eG(a, this.P, this.a.a, this.a.A, this.V, this.K, this.va, jf(a), this.a.M, this.n, this.aa, this.Xa, this.Qh, this.u);this.Ya = new AJ(this.a.A, this.g.a);this.L = new ze(this);h = a.OM;c = a.IM;d = bna(a.g, !! d);
    if (!a.eF || !d) d = new br;
    else {
        if (h.length) kr.e = h.join(Gj);
        if (c) kr.rls = c;
        d = new $q(6E4, Bha, kr, d, d, Cha)
    }
    this.Oa =
    d;this.Wc = new rG(this.Oa);this.attachDocumentHandlers = this.bQ;this.dispose = this.G;this.getPerformanceManager = this.ZS;this.loadInitialModel = this.w_;this.loadPreferences = this.x_;this.resize = this.EY;this.setLoaded = this.FY;Ro = a.xa;a = xJ.N();a = Number(a.get(Rqa));d = lb() + zJ;
    if (Math.abs(d - a) >= 3E4) zJ = a - lb()
}
s(CJ, t);n = CJ.prototype;n.PB = k;n.LH = l;n.Ds = l;n.tD = k;n.Sy = l;n.df = k;n.Ik = k;n.hC = l;n.cy = k;n.zy = k;n.ao = k;
var Sqa = "writely";
n.GY = function () {
    var a = Mr(Rr(Qr.N(), es)),
        b = wv(this.a);
    if (b.Pu && !this.f) {
        this.f = new(a.VS());
        this.f.Z1(this.M.Bq);
        this.f.U1(this.M.GA, this.M.rB);
        var c = this.Aa,
            d = this.f.ce();
        c.a = d;
        c.L.C(d, rj, c.n);
        YI(c)
    }
    if (b.K) {
        this.ao = new(a.ES())(this.g.a, this.P, this.a.A, this.V, this.u, this.g.M, this.g.xa);
        this.ao.ND(b);
        this.g.mA = this.ao
    }
    if (c = this.K.Fh) {
        d = xv(this.a, a.fw());
        c.TQ(wv(this.a), uv(this.a, a.Rr()), d, this.a.f);
        a.YR()(d, c, this.xa.Vf)
    }
    this.cD();
    if (this.aa && this.f) {
        c = this.aa;
        d = this.f;
        c.a = d;
        for (var e = 0, g; g = c.f[e]; e++) g.t1(d.Gd(g.path));
        for (e = 0; g = c.g[e]; e++) g(d);
        c.f = [];
        c.g = []
    }
    c = k;
    if (this.f) c = new(a.NS())(window, this.f, this.Xa.f, this.cc);
    if (!b.lb) {
        a.WR()(this.Xa);
        b.Tv && (new(a.bT())(b.Tv, b.P, this.va.Wj, b.KF, r(this.g.pT, this.g))).Ja();
        a.lQ(this.P, jf(b));
        d = b.KF;
        if (b.M) {
            b.JO && this.f && a.XR()(this.Xa, this.f);
            a.ZR()(Yg, d);
            a.$R()(this.Xa, d, Cia);
            a.aS()(this.Xa)
        }
        e = M(this.P, jm);
        this.f ? a.bS()(this.Xa, this.f, Vw, Sqa, d, e ? [e] : undefined) : dl(this.P, jm, l);e && e.Za(Mi, this.PW, this);c && c.L1(kb(Hpa, this.Xa));a.PS()(this.n)
    }
    b.Dq || a.cS()(b.$u);
    c = this.a.g;
    d = this.a.A;
    if (b.zF && this.f) this.cy = new(a.hT())(this.va, this.g, this.M, this.Xa, this.aa, this.f, this.V, this.xa, this.n);
    if (b.g == 4 && b.Aq) this.zy = new(a.rT())(d, M(this.P, ln), c, this.V);
    this.M.g == 4 && this.f && this.L.C(this.f.ce(), rj, this.BY);
    DJ(this);
    (this.Ik = a.qS()(this.va, d, this.n)) && this.Ds && this.Ik.f()
};
var Tqa = "docs-chrome",
    Uqa = "-fe",
    EJ = "-pq-";
n.cd = function () {
    if (!this.hC) {
        var a = wv(this.a),
            b = Ge.N(),
            c = this.a.n;
        Me(b, a.tP, l);
        Le(b, c ? c.a : 0,
        l);
        a.EF && this.a.Aa.cd();
        if (a.K) {
            this.Ig = new qG(this.P, a.g);
            this.Ig.ND(a)
        }
        this.L.C(this.a.A, nv, this.AY).C(this.u, Nqa, this.CY);
        if (a.lb) this.va.Ja(a.z());
        else {
            this.K && Zo(this.K, this.n.z(Tqa));
            Zo(this.va, this.n.z(eD))
        }
        b = mr.N();
        b.g = this.Oa;
        if (a.eF) {
            b.la(i);
            c = r(this.Wc.f, this.Wc);
            b.f.push(c);
            this.Oa.init()
        }
        if (a.DP) {
            b.la(i);
            var d = sG.N();
            c = os.N();
            d = r(d.g, d);
            b.f.push(d);
            c = r(c.g, c);
            b.f.push(c);
            b = r(os.N().f, os.N());
            La.getEventTrace =
            b
        }
        var e;
        a: {
            try {
                var g = a.P + (a.WD ? SB + a.WD : v);
                if (a.dC && XG()) {
                    var h = window.localStorage,
                        j = parseInt(h.getItem(g + Uqa), 10);
                    if (!isNaN(j)) {
                        e = h.getItem(g + EJ + j) != k;
                        break a
                    }
                }
            } catch (m) {}
            e = l
        }
        this.Sy = e;Zr(Qr.N(), es, this.GY, this);this.hC = i
    }
};
var Vqa = "Trying to load the initial model before the application has been initialized.";n.w_ = function (a) {
    if (this.hC) {
        if (a) {
            a = new QG(a, this.V);
            this.PB = a.ji();
            a.n && a.u && lw(this.Xa, a.n, a.u);
            var b = !this.Ya.a;
            Pq(this.V, this.Ya.n, this.Ya)(a.a);
            wv(this.a).gP && b && Wqa(this)
        }
    } else this.V.log(Error(Vqa))
};
n.FY = function () {
    this.Ds = i;
    if (this.M.YM) {
        var a = this.a.A;
        if (a.K) a.K.f = i
    }
    this.cD();
    DJ(this);
    this.Ik && this.Ds && this.Ik.f();
    this.va.SK = i
};
n.cD = function () {
    if (wv(this.a).Pu) {
        var a = Rr(Qr.N(), es),
            b = !this.Cb || !! this.Cb.g;
        if (!(!a.Nb() || !this.Ds || !b)) {
            if (!Za(this.PB)) f(Error("The initial revision should be set before trying to create the communications manager."));
            a = a.jc;
            this.df = new(a.iS())(wv(this.a), this.cc, this.Xa, this.f, this.PB, this.V, this.Cb, this.Ie);
            b = new(a.mT())(this.df.oC, this.f, this.Xa.f, a.gS(), this.a.A, this.va, this.df.Tj, this.V);
            if (!wv(this.a).lb && wv(this.a).JP)(this.lb = a.LQ(b, this.va.Wj, this.f.ce())) && this.lb.o1(r(function (c) {
                this.va.scrollIntoView(c.ra().Fa())
            }, this));
            a = this.df.lA;
            this.L.C(a, Zc, this.dV).C(a, vj, this.eV);
            this.Sy = this.df.Tj.D_(r(this.LP, this));
            Ema(this.g, this.df)
        }
    }
};n.LP = function () {
    this.Sy = l;
    DJ(this)
};

function DJ(a) {
    if (!a.Sy && a.Ds && !a.LH) {
        a.LH = i;
        a.g.Hs || Wqa(a)
    }
}
function Wqa(a) {
    a.u.Ka(5);
    Yu(a.g, a.M.g != 1)
}
n.AY = function (a) {
    var b = this.a.A.ra();
    if (jf(wv(this.a))) {
        Xqa(this, i);
        this.a.a.X(b.Kb())
    } else this.df && a.n && this.df.Tj.G1(b)
};n.ZS = function () {
    return mr.N()
};n.DY = function (a) {
    this.G();
    a()
};
var Yqa = "onfocusout",
    Zqa = "onblur",
    $qa = "onfocusin",
    ara = "onfocus";n.bQ = function (a, b) {
    a.onunload = r(this.DY, this, b);
    var c = this.u,
        d = this.xa,
        e = y.Ua ? a.ownerDocument : a;c.L.C(d, Ao, c.AU).C(d, yo, c.zU);d = y.ia ? Yqa : Zqa;e[y.ia ? $qa : ara] = r(c.XX, c);e[d] = r(c.WX, c)
};n.CY = function () {
    var a = this.u.tb(),
        b = a == 5;
    a = a == 4;
    Xqa(this, b);
    this.va.sg(b || a)
};

function Xqa(a, b) {
    if (b) if (jf(wv(a.a)) && !a.a.A.ra().Kb()) {
        a.a.a.Gs = l;
        a.va.ld.focus()
    } else {
        var c = a.a.a;
        c.Gs = i;
        c.Ef()
    } else {
        c = a.a.a;
        c.Gs = l;
        !y.ia && c.Uw && Mq(c).blur()
    }
}
n.BY = function (a) {
    if (FJ(this, a.g) != FJ(this, a.a)) if (FJ(this, a.a)) {
        a = this.va;
        a.f.X(l);
        a.du(i);
        this.K.la(l);
        this.g.a.la(l)
    } else {
        a = this.va;
        a.f.X(i);
        a.du(i);
        this.K.la(i);
        this.g.a.la(i)
    }
};n.dV = function () {
    this.g.a.Uz = l;
    this.K.la(l)
};n.eV = function () {
    this.g.a.Uz = i;
    this.K.la(i)
};

function FJ(a, b) {
    return b && a.M.dC ? b.n() : b.g()
}
n.PW = function () {
    if (this.f && this.df) {
        var a = Rr(Qr.N(), es);
        a.Nb() && (new(a.jc.eT())(this.M.P, this.f, this.df.Tj.tS())).show()
    }
};
n.x_ = function (a) {
    var b = this.a.Ya;
    for (var c in a) {
        var d = b.a[c] || k;
        d && d.update(a[c])
    }
};n.EY = function () {
    this.va.Ps()
};
n.q = function () {
    CJ.p.q.call(this);
    this.M.G();
    delete this.M;
    this.P.G();
    delete this.P;
    this.df && this.df.G();
    delete this.df;
    this.Ik && this.Ik.G();
    delete this.Ik;
    this.Aa.G();
    delete this.Aa;
    this.Xa.G();
    delete this.Xa;
    this.lb && this.lb.G();
    delete this.lb;
    this.K && this.K.G();
    delete this.K;
    this.va.G();
    delete this.va;
    this.g.G();
    delete this.g;
    delete this.n;
    this.xa.G();
    delete this.xa;
    this.aa && this.aa.G();
    delete this.aa;
    this.f && this.f.G();
    delete this.f;
    this.tD && this.tD.G();
    delete this.tD;
    this.a.G();
    delete this.a;
    this.L.G();
    delete this.L;
    this.V.G();
    delete this.V;
    this.Ya.G();
    delete this.Ya;
    this.zy && this.zy.G();
    delete this.zy;
    this.u.G();
    delete this.u;
    mb(this.Oa);
    delete this.Oa;
    this.cy && this.cy.G();
    delete this.cy;
    Kpa.G();
    this.ao && this.ao.G();
    delete this.ao
};La._createKixApplication = function (a, b, c, d, e) {
    b = new ef(b);
    var g = new bw(b.P, b.M);
    g.setTitle(c || v, i);
    dw(g, hw(g.a, 16, b.g == 4));
    d || gw(g);
    a = new CJ(b, g, a, d, undefined, undefined, e);
    a.cd();
    return a
};

function GJ(a) {
    this.A = a;
    this.g = [];
    this.K = []
}
s(GJ, t);GJ.prototype.na = function (a) {
    var b = a.Sj(this.A);
    vc(this.K, b, 0);
    this.A.na(a);
    this.g.push(a)
};GJ.prototype.pa = function (a) {
    a.a();
    vc(this.K, a.K, 0);
    Bc(this.g, a.g)
};GJ.prototype.q = function () {
    GJ.p.q.call(this);
    delete this.A;
    delete this.g
};

function HJ(a, b, c) {
    GJ.call(this, a);
    this.f = b;
    this.n = !! c
}
s(HJ, GJ);HJ.prototype.a = function () {
    var a = MD(this.A),
        b;
    if (b = this.n) {
        a: {
            for (b = 0; b < a.length; b++) if (!this.A.Ub(eh, a[b]).mf(this.f)) {
                b = i;
                break a
            }
            b = l
        }
        b = !b
    }
    if (!b) {
        b = this.f;
        for (var c = 0; c < a.length; c++) this.na(new AG(eh, a[c], a[c], b))
    }
};HJ.prototype.q = function () {
    HJ.p.q.call(this);
    delete this.f
};

function IJ(a, b, c) {
    GJ.call(this, a);
    this.f = b;
    this.n = c
}
s(IJ, GJ);IJ.prototype.a = function () {
    var a = this.A,
        b = this.f;
    Pg(a.td(Xg), function (e, g) {
        var h = jc(g.Ke.Qb(), b);
        if (h != -1) {
            var j = Gv(this.A, Xg, e),
                m = {};
            m.cs_cids = cg(h);
            this.na(new AG(Xg, e, j, m))
        }
        return l
    }, this);
    var c = FA(a, b);
    if (c != -1) {
        var d = Ju(a, c);
        this.pa(this.n(a, new nb(c, d), i))
    }
};

function JJ(a, b) {
    GJ.call(this, a);
    this.cg = b
}
s(JJ, GJ);JJ.prototype.a = function () {
    this.A.Pa(this.cg) && this.na(new DG(this.cg))
};

function KJ(a, b, c, d) {
    GJ.call(this, a);
    this.u = c;
    this.f = b;
    this.n = d
}
s(KJ, GJ);KJ.prototype.a = function () {
    var a = this.A;
    this.f != -1 && this.pa(this.n(a, new nb(this.f, this.f), i, l, i));
    var b = FA(a, this.u),
        c = Ju(a, b);
    this.pa(this.n(a, new nb(b, c), i))
};KJ.prototype.q = function () {
    KJ.p.q.call(this);
    delete this.n
};

function LJ(a, b, c, d, e, g, h, j) {
    GJ.call(this, a);
    this.n = b || k;
    this.u = !! c;
    this.M = !! d;
    this.P = !! e;
    this.xa = !! g;
    this.aa = !! h;
    this.Aa = !! j
}
s(LJ, GJ);LJ.prototype.f = 0;
LJ.prototype.a = function () {
    var a = this.A,
        b = this.n || Ev(a.ra()),
        c = 0;
    this.f = 0;
    if (b) {
        if (a.f.n) b = Mw(a.Y(), b);
        var d = b.start,
            e = b.end,
            g = k,
            h = k,
            j = k,
            m;
        if (this.xa) {
            g = qu(a);
            h = a.ra().Kb() && this.n ? Ou(a, a.ra().Dc) : k;m = Hu(a);
            if (h && b.end >= m - 1) {
                g == m + 1 && g--;
                h == m + 1 && h--
            }
            m = a.oa(ih, d).Z()
        }
        if (this.u)(j = MJ(this, d, e, g, h)) && bra(this, j.ai, m, j.yg);
        else if (!(e > Hu(a))) {
            b = a.Y();
            if (e == Ju(a, d) && Iu(a, e) < d) {
                e--;
                c++
            }
            for (var o = a.f.a, q = l, u = d; u <= e; u++) {
                j = E(b, u);
                if (j == kg && o) {
                    var w = uu(a, u);
                    if (w <= e) {
                        d--;
                        u = w;
                        continue
                    }
                }
                if (j == hg) {
                    q = i;
                    w = a.Y().indexOf(ig, u);
                    if (w <= e) {
                        d--;
                        u = w;
                        continue
                    }
                }
                if (!q && j == ig) {
                    g = e = u - 1;
                    if (h) h = e;
                    break
                }
                if (zg[j] || j == Hd && !Gg(b, u + 1)) {
                    if (j = MJ(this, d, u - 1, g, h)) {
                        g = j.ai;
                        h = j.yg
                    }
                    e -= u - d;
                    u = d;
                    d = u + 1;
                    c++
                }
            }(j = MJ(this, d, e, g, h)) && bra(this, j.ai, m, j.yg);
            this.f = c
        }
    }
};

function MJ(a, b, c, d, e) {
    if (c < b) return d ? {
        ai: d,
        yg: e
    } : k;
    var g = a.A;
    if (b > Hu(g)) return d ? {
        ai: d,
        yg: e
    } : k;
    var h = g.Y(),
        j;
    if (j = c < Hu(g)) a: {
        j = a.A.Y();
        for (var m = b; m <= c; m++) if (Hg(j, m)) {
            j = i;
            break a
        }
        j = l
    }
    if (j) {
        m = g.oa(eh, b);
        var o = g.oa(dh, b);
        j = Eg(h, c + 1);
        a.na(new AG(eh, j, j, m.Z()));
        a.na(new AG(dh, j, j, o.Z()));
        m = Eg(h, b);
        h = a.A;
        m = Cw(h.n, ut, m);
        o = 0;
        for (var q; q = m[o]; o++) {
            q = h.Pa(q);
            var u = q.a;
            if (u.O() == 0 || u.O() == 2) a.na(new NG(q.ma(), j))
        }
    }
    var w, C;
    if (b == c) {
        C = a.A;
        j = C.Y();
        C = b > 1 && Gg(j, b - 1) ? b - 1 : b < Hu(C) - 1 && Gg(j, b + 1) ? b : -1;
        if (C > 0) for (j =
        0; j < kt.length; j++) {
            h = Cw(g.n, kt[j], b);
            if (h.length != 0) {
                w || (w = []);
                for (m = 0; m < h.length; m++) w.push(g.Pa(h[m]))
            }
        }
    }
    j = DH(g.n, b, c);
    for (var B in j) a.pa(new JJ(g, B));a.M || g.f.u && cra(a, g, b, c);a.P || g.f.aa && dra(a, g, b, c);a.na(new FG(b, c));
    if (w) for (j = 0; j < w.length; j++) {
        g = w[j];
        a.na(new xG(g.O(), g.ma(), g.Z()));
        a.na(new NG(g.ma(), C))
    }
    if (d) d = era(a, b, c, d);
    if (e) e = era(a, b, c, e);
    return d ? {
        ai: d,
        yg: e
    } : k
}
function era(a, b, c, d) {
    if (d > c) return d - (c - b + 1);
    else if (d > b) return b;
    return d
}

function cra(a, b, c, d) {
    var e = Uy(BG(b, Xg, c, d));
    if (!(e.length == 1 && e[0].Ke.Qb().length == 0)) {
        var g = new Xc;
        Pg(e, function (m, o) {
            var q = o.Ke.Qb();
            Yc(g, q);
            return l
        }, a);
        d = [b.oa(Xg, c - 1), b.oa(Xg, d + 1)];
        for (c = 0; e = d[c]; c++) for (var h = e.Ke.Qb(), j = 0; e = h[j]; j++) g.remove(e);
        d = g.Qb();
        for (c = 0; e = d[c]; c++) a.pa(new IJ(b, e, NJ))
    }
}
function dra(a, b, c, d) {
    c = Uy(BG(b, ah, c, d));
    Pg(c, function (e, g) {
        var h = g.u;
        h && this.pa(new KJ(b, -1, h, NJ));
        return l
    }, a)
}
function NJ(a, b, c, d, e) {
    return new LJ(a, b, c, d, e)
}

function bra(a, b, c, d) {
    var e = a.A;
    wr(e, new P(b, a.aa), i, d ? new P(d, a.Aa) : undefined);
    Bb(e.u.a, c)
};

function OJ(a) {
    GJ.call(this, a)
}
s(OJ, GJ);OJ.prototype.a = function () {
    var a = this.A,
        b = MD(a),
        c = {};
    c.ls_id = k;
    for (var d = 0; d < b.length; d++) {
        var e = b[d],
            g = a.Ub(dh, e);
        e = e;
        g = g.yb * 36;
        var h = {};
        h.ps_il = g;
        h.ps_ifl = g;
        this.na(new AG(eh, e, e, h));
        this.na(new AG(dh, b[d], b[d], c))
    }
};

function PJ(a) {
    O.call(this, hs, a)
}
s(PJ, O);
PJ.prototype.a = function (a) {
    var b = this.A,
        c = Ev(b.ra()),
        d = Qu(b),
        e = a.delbW,
        g = a.delbL;
    if (!e && c) {
        c = mu(b.Y(), c);
        QJ(this, c.start, c.end)
    } else {
        if (!c && Fg(b.a, d)) {
            if (QD(b, d)) {
                this.pa(new OJ(b));
                if (g) {
                    d = d - 1;
                    QJ(this, d, d)
                }
                return
            }
            var h = b.oa(eh, d);
            if (h.ii() == 1) {
                d = {};
                d.ps_al = 0;
                this.pa(new HJ(b, d));
                return
            } else if (h.ii() == 2) {
                d = {};
                d.ps_al = 1;
                this.pa(new HJ(b, d));
                return
            }
            c = h.Ei;
            h = h.Uj;
            if (h > 0 || c > 0) {
                d = {};
                if (h == c) {
                    d.ps_ifl = 0;
                    d.ps_il = 0
                } else {
                    a = Math.min(h, c);
                    d.ps_ifl = a;
                    d.ps_il = a
                }
                this.pa(new HJ(b, d));
                return
            }
        }
        if (d != Iu(b, d) + 1) {
            b =
            b.Y();
            c = E(b, d - 1);
            if (!(fra(this, c) || c == Hd && fra(this, E(b, d)))) if (g) {
                a = Eu(a.view).start;
                if (d != a) QJ(this, a, d - 1);
                else {
                    d = d - 1;
                    QJ(this, d, d)
                }
            } else if (e) {
                a = iu(d, b);
                d = mu(b, new nb(a, d - 1));
                QJ(this, d.start, d.end)
            } else {
                d = d - 1;
                QJ(this, d, d)
            }
        }
    }
};

function fra(a, b) {
    return b == kg || b == lg || b == mg || b == ng
}
function QJ(a, b, c, d) {
    a.pa(new LJ(a.A, new nb(b, c), l, l, l, i, d))
}
yr(hs, function (a) {
    return new PJ(a)
});

function RJ(a) {
    O.call(this, gs, a)
}
s(RJ, O);RJ.prototype.a = function (a) {
    var b = this.A,
        c = b.ra(),
        d = Ev(c);
    c = c.Fa().f;
    var e = qu(b),
        g = !! a.dso;
    if (!(!d && g)) if (d) {
        d = mu(b.Y(), d);
        this.pa(new LJ(b, d, l, l, l, i))
    } else {
        d = b.Y();
        g = a.delrW;
        if (a.delrP) if (Hg(d, e)) e != Ju(b, e) && this.pa(new LJ(b, new nb(e, e), l, l, l, i, c));
        else {
            a = Eg(d, e) - 1;
            this.pa(new LJ(b, new nb(e, a), l, l, l, i, c))
        } else if (g && !Hg(d, e)) {
            a = ju(e, d) ? eu(e, d) : ku(e, d);a--;this.pa(new LJ(b, new nb(e, a), l, l, l, i))
        } else e != Ju(b, e) && this.pa(new LJ(b, new nb(e, e), l, l, l, i))
    }
};
yr(gs, function (a) {
    return new RJ(a)
});

function SJ(a, b, c, d) {
    GJ.call(this, a);
    this.f = b;
    this.n = c;
    this.u = d ? d : {}
}
s(SJ, GJ);
var TJ = "(";
SJ.prototype.a = function () {
    if (this.f.length != 0) {
        var a = this.A,
            b = a.ra(),
            c = this.n,
            d = this.u,
            e = Ou(a, c),
            g = Fg(a.a, e);
        if (!a.f.IB) {
            var h = this.f == wb,
                j = this.f == nw,
                m;
            if (m = a.gK) {
                if (m = j || h) {
                    m = this.A;
                    m = Oz(m) ? Sh(m.oa(eh, e)) : i
                }
                m = m
            }
            if (m) {
                if (g) j = i;
                else {
                    m = E(a.Y(), e - 1);
                    j = Kg(m) || m == TJ || m == Lg || m == fr || m == Nx && h || m == Rx && j
                }
                this.f = h ? j ? Rx : Tx : j ? Nx : Px
            }
        }
        if (a.f.n && Lw(a.Y(), e)) {
            this.f = this.f.replace(Jw, v);
            if (this.f.length == 0) return
        }
        if (g) {
            g = {};
            c = Py(a, ih, c).Z();
            for (var o in c) g[o] = c[o];
            for (o in d) g[o] = d[o];
            d = g
        }
        b = b.a;
        for (o in b) d[o] =
        b[o];
        c = a.oa(eh, e).Z();
        g = a.oa(dh, e).Z();
        j = e <= Hu(a) ? Mz(a, e) : [];this.na(new GG(e, this.f));b = this.f;h = [];
        for (m = 0; m < b.length; m++) {
            m = b.indexOf(Hd, m);
            if (m < 0) break;
            h.push(m)
        }
        if (h.length > 0 && j.length > 0) {
            m = h[0] + e;
            for (b = 0; b < j.length; b++) this.na(new NG(j[b], m))
        }
        for (b = 0; b < h.length; b++) {
            j = h[b] + e;
            if (c.ps_hdid) {
                c = yb(c);
                c.ps_hdid = Ww(oj)
            }
            this.na(new AG(eh, j, j, c));
            this.na(new AG(dh, j, j, g))
        }
        c = e + this.f.length - 1;g = Goa(a.g);
        for (b = 0; b < g.length; b++) {
            h = g[b];
            m = (j = kh[h]) ? j.Nj() : i;
            var q;q = (j = kh[h]) ? j.Uq() : i;
            if (!(m && q || sh(h))) {
                var u =
                a.oa(h, e),
                    w = a.oa(h, e + 1);
                j = rh(h);
                w = !u.Qa(w);
                m = !m && w;
                q = !q && !u.Qa(j) && Hg(a.a, e);
                if (m || q) {
                    this.na(new AG(h, e, c, j.Z()));
                    if (h == ch) {
                        h = pi();
                        for (o in h) d[o] = h[o]
                    }
                }
            }
        }
        ub(d) || this.na(new AG(ih, e, c, d))
    }
};SJ.prototype.q = function () {
    SJ.p.q.call(this);
    delete this.n;
    delete this.u
};

function UJ(a, b) {
    GJ.call(this, a);
    this.f = b
}
s(UJ, GJ);UJ.prototype.a = function () {
    var a = this.A,
        b = a.ra(),
        c = Ru(b),
        d = {};
    if (b.Kb()) {
        d = a.oa(ih, Qu(a)).Z();
        this.pa(new LJ(a))
    }
    this.pa(new SJ(a, this.f, c, d))
};

function VJ(a) {
    O.call(this, ks, a)
}
s(VJ, O);VJ.prototype.a = function (a) {
    var b = a.ch;
    a = this.A;
    this.pa(new UJ(a, b));
    var c = Ev(a.ra());
    b = (c ? c.start : qu(a)) + b.length;
    wr(a, new P(b), i)
};yr(ks, function (a) {
    return new VJ(a)
});

function WJ(a) {
    this.f = a;
    this.a = []
}
s(WJ, t);WJ.prototype.WA = function () {
    return this.f
};WJ.prototype.q = function () {
    WJ.p.q.call(this);
    this.a = this.f = k
};

function XJ(a) {
    this.a = new WJ(a);
    this.L = new ze(this)
}
s(XJ, Pi);XJ.prototype.load = function () {
    for (var a = this.L, b = this.a.WA(), c = 0; c < b.length; c++) {
        var d = new dJ;
        a.C(d, jJ, r(this.f, this, c));
        d.send(b[c])
    }
};XJ.prototype.f = function (a, b) {
    var c = b.target;
    if (nJ(c)) {
        this.a.a[a] = oJ(c);
        var d;
        a: {
            var e = this.a;
            d = e.a;
            if (d.length == e.f.length) {
                for (e = 0; e < d.length; e++) if (!Za(d[e])) {
                    d = l;
                    break a
                }
                d = i
            } else d = l
        }
        d && this.dispatchEvent(lJ)
    } else this.dispatchEvent(as);
    c.G()
};
XJ.prototype.q = function () {
    XJ.p.q.call(this);
    this.L.G();
    this.L = k;
    this.a.G();
    this.a = k
};

function YJ() {}
s(YJ, t);YJ.prototype.f = l;YJ.prototype.a = k;YJ.prototype.g = function () {};

function ZJ() {
    this.L = new ze(this)
}
s(ZJ, YJ);
var $J = "text/javascript";ZJ.prototype.g = function (a, b, c, d) {
    for (var e = [], g = 0; g < a.length; g++) Bc(e, b[a[g]].WA());
    if (this.f && y.Ua) for (g = 0; g < e.length; g++) {
        a = z.createElement(tJ);
        a.src = e[g];
        a.type = $J;
        document.documentElement.appendChild(a)
    } else {
        e = new XJ(e);
        g = this.L;
        g.C(e, lJ, r(this.u, this, e, a, c, d), l, k);
        g.C(e, as, r(this.n, this, e, a, d), l, k);
        e.load()
    }
};
var gra = "JavaScript",
    hra = "var _et_ = 1;";
ZJ.prototype.u = function (a, b, c, d) {
    var e;
    b = a.a.a.join(Hd);
    var g = i;
    try {
        if (this.a ? Ib(b, this.a) : i) if (La.execScript) La.execScript(b, gra);
        else if (La.eval) {
            if (Ma == k) {
                La.eval(hra);
                if (typeof La._et_ != "undefined") {
                    delete La._et_;
                    Ma = i
                } else Ma = l
            }
            if (Ma) La.eval(b);
            else {
                e = La.document;
                var h = e.createElement(tJ);
                h.type = $J;
                h.defer = l;
                h.appendChild(e.createTextNode(b));
                e.body.appendChild(h);
                e.body.removeChild(h)
            }
        } else f(Error("goog.globalEval not available"));
        else g = l
    } catch (j) {
        g = l
    }
    if (e = g) e && c && c();
    else d && d(k);
    Oj(a.G, 5, a)
};ZJ.prototype.n = function (a, b, c, d) {
    c && c(d);
    Oj(a.G, 5, a)
};ZJ.prototype.q = function () {
    ZJ.p.q.call(this);
    this.L.G();
    this.L = k
};

function _initializeModules(a, b, c) {
    var d = new ZJ;
    d.f = l;
    var e = Qr.N();
    e.JK = d;
    for (var g in a) e.a[g] = new Jr(a[g], g);
    if (e.n == e.M) {
        e.n = k;
        Nr(e.M, r(e.tI, e))
    }
    for (var h in b) e.a[h].II = b[h];
    c && Xr(e, c)
};
