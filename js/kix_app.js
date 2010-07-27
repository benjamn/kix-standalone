function aK(a, b, c) {
    this.f = a;
    this.a = b || a;
    this.UP = c || a
}
aK.prototype.od = function () {
    return this.f
};

function bK(a) {
    Gb.call(this);
    this.a = a
}
s(bK, Gb);
bK.prototype.message = "Deferred was cancelled";

function ira(a) {
    return function () {
        return a.call(this)
    }
}
function jra(a, b, c, d) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    else {
        var e = a.style[c],
            g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = g;
        return b
    }
}
var kra = "direction";

function cK(a) {
    return Xx == pf(a, kra)
}
function dK(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
dK.prototype.sa = function () {
    return new dK(this.top, this.right, this.bottom, this.left)
};
dK.prototype.contains = function (a) {
    a = !this || !a ? l : a instanceof dK ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom;
    return a
};

function eK(a, b) {
    this.f = a;
    this.a = b
}
eK.prototype.O = function () {
    return this.f
};
dJ.prototype.Wr = Ia(11, function () {
    return cb(this.Rl) ? this.Rl : String(this.Rl)
});
Ex.prototype.SA = Ia(10, function () {
    return this.f
});
Xp.prototype.ee = Ia(8, function () {
    return this.a.toString()
});
aq.prototype.ee = Ia(7, function () {
    return this.a.text
});
oq.prototype.ee = Ia(6, function () {
    return rq(this).ee()
});
uq.prototype.ee = Ia(5, function () {
    return v
});
zq.prototype.ee = Ia(4, function () {
    return nc(Sp(this), function (a) {
        return a.ee()
    }).join(v)
});
Cr.prototype.cancel = Ia(3, function () {
    if (this.dg >= 0)!this.dg && this.a[0] instanceof Cr && this.a[0].cancel();
    else {
        if (this.g) this.g.call(this.u, this);
        else this.qE = i;
        this.dg >= 0 || this.vA(new bK(this))
    }
});
cp.prototype.Pc = Ia(2, function () {
    return this.lc
});
xJ.prototype.getString = Ia(1, function (a) {
    a = this.get(a);
    return Za(a) ? String(a) : v
});
eC.prototype.f = Ia(0, function (a, b) {
    var c = qu(b);
    if (QD(b, c)) {
        c = MD(b);
        if (Xv(b, c)) {
            c = M(a, qn);
            c.la(i);
            return [c]
        }
    }
    return k
});

function lra(a, b) {
    var c = a.get(b);
    return cb(c) ? c == Fq || c == aj : !! c
}
function fK(a, b) {
    return a.Hb && mJ(a) == 4 ? a.Hb.getResponseHeader(b) : undefined
}
function mra(a, b) {
    var c = II(a) || upa[a.toLowerCase()];
    if (c) return c;
    if (b) return k;
    return k
}
function nra(a) {
    var b = [];
    for (var c in a.a) b.push(new aK(c, a.a[c].menuFont));
    return b
}
function ora(a) {
    var b = MD(a);
    if (b.length == 0) return k;
    for (var c = Oh(a.oa(eh, b[0])), d = 0; d < b.length; d++) {
        var e = Oh(a.oa(eh, b[d]));
        if (c != e) return k
    }
    return c
}

function pra(a, b, c) {
    var d = a.a,
        e = d[b];
    if (e) {
        var g = mt(e.O(), c, e.Z());
        if (g) {
            d[c] = g;
            Pg(a.f[e.O()], function (h, j) {
                for (var m, o = 0; m = j[o]; ++o) if (m == b) j[o] = c;
                return l
            });
            delete d[b]
        }
    }
}
var qra = "wb";

function rra(a, b) {
    var c = b.a;
    if (c.O() == qra) a.f.push(b);
    else {
        c = c.Y();
        for (var d = 0, e; e = c[d]; d++) if (a.a[e]) a.a[e].push(b);
        else a.a[e] = [b]
    }
}
function gK(a, b) {
    if (Ai(a)) b();
    else {
        Ce(a.L, a, kj, ira(b));
        ew(a.a, 1) || a.dispatchEvent(lj)
    }
}
function sra(a, b) {
    a.J().z(sv).style.display = b ? v : Hf;a.dispatchEvent(yp)
}

function hK(a) {
    return a.yt - a.Em - a.Fm
}
function tra(a) {
    fp(a);
    return a.zd
}
function iK(a, b) {
    return a.bd && b ? jc(a.bd, b) : -1
}
function ura(a) {
    var b = [];
    $o(a, function (c) {
        b.push(c.ma())
    });
    return b
}
function jK(a) {
    if (a.dy == k) a.dy = cK(a.cb ? a.ua : a.Xe.Va().body);
    return a.dy
}
function vra(a, b) {
    if (a.ib && a.ib.Uf) {
        vb(a.ib.Uf, a.zo);
        xb(a.ib.Uf, b, a)
    }
    a.zo = b
}
var wra = "pixelLeft";

function kK(a, b) {
    return jra(a, a.currentStyle ? a.currentStyle[b] : k,
    sf,
    wra)
}
function xra(a) {
    return new dK(a.top, a.left + a.width, a.top + a.height, a.left)
}

function lK(a) {
    if (!a.Hv) a.Hv = (a.xY ? a.i1 : df) == df ? new eK(0, 72) : new eK(1, Je * 10);
    return a.Hv
}
function mK(a, b) {
    return b / a.a
}
function nK(a, b) {
    return b * a.a
}
function oK(a, b) {
    return b / Ye(a)
}
function pK(a) {
    return a.length == 1 ? Xd + a : a
}
function yra(a, b, c, d) {
    a = a.Y();
    var e = 0,
        g = E(a, b);
    if (g == ng) {
        g = c.call(d, g, b);
        if (g == l) return b;
        b--
    }
    for (b = b; b > 0; b--) {
        g = E(a, b);
        switch (g) {
        case ng:
            e++;
            break;
        case kg:
            e--;
            if (e == 0) continue;
            break
        }
        if (e <= 0) {
            g = c.call(d, g, b);
            if (e < 0 || g == l) return b
        }
    }
    return 1
}
var zra = /[?&]($|#)/,
    Ara = {
        thin: 2,
        medium: 4,
        thick: 6
    },
    Bra = {},
    Cra = {
        Mu: Bj,
        qP: zj,
        XO: yj
    },
    Dra = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
    Era = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

function qK(a, b, c, d) {
    ru(a, b, c, d);
    if (E(a.Y(), b) != kg) {
        b = b - 1;
        if (E(a.Y(), b) == ng) b = tu(a, b) - 1;
        yra(a, b, c, d)
    }
}
function rK(a) {
    return eval(TJ + a + Of)
}
var Fra = "Style",
    Gra = "Width";

function sK(a, b) {
    if ((a.currentStyle ? a.currentStyle[b + Fra] : k) == Hf) return 0;
    var c = a.currentStyle ? a.currentStyle[b + Gra] : k;
    if (c in Ara) return Ara[c];
    return jra(a, c, sf, wra)
}
function tK(a) {
    return Bra[a] || (Bra[a] = String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase()
    }))
}
var Hra = "amp",
    Ira = "lt",
    Jra = "gt",
    Kra = "quot";

function Lra(a) {
    return a.replace(/&([^;]+);/g, function (b, c) {
        switch (c) {
        case Hra:
            return Sb;
        case Ira:
            return Tb;
        case Jra:
            return Ub;
        case Kra:
            return wb;
        default:
            if (c.charAt(0) == Jt) {
                var d = Number(Xd + c.substr(1));
                if (!isNaN(d)) return String.fromCharCode(d)
            }
            return b
        }
    })
}
function uK(a) {
    return /^[\s\xa0]*$/.test(a)
}
function Mra(a) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(new aK(a[d]));
    return b
}
var Nra = "-lock",
    Ora = "Deserializing the lock failed ";

function vK(a, b) {
    var c = window.localStorage.getItem(a + Nra);
    if (c == k) return k;
    try {
        var d = Cra,
            e = rK(c.toString());
        if (lb() - e[d.qP] > 35E3) return k
    } catch (g) {
        b.info(Ora, g);
        return k
    }
    return e[d.XO]
}
function Pra(a) {
    var b = [];
    a = HA(a, jt);
    for (var c = Qg(a), d = 0; d < c.length; d++) for (var e = a[c[d]], g = 0; g < e.length; g++) b.push(e[g]);
    return b
}
var Qra = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: di,
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: tD,
    green: "#008000",
    greenyellow: "#adff2f",
    grey: tD,
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function Rra(a, b) {
    var c = 0;
    qK(a, b, function (d) {
        d == lg && c++;
        return i
    });
    return c
}

function wK(a, b) {
    var c = 0,
        d = 0;
    yra(a, b, function (e) {
        switch (e) {
        case mg:
            d == 0 && c++;
            break;
        case lg:
            d++;
            break
        }
        return i
    });
    return {
        qe: d - 1,
        se: c - 1
    }
}
function xK(a) {
    return tu(a, qu(a))
}
function Sra(a) {
    a = Lt(a);
    return Kt(a[1], a[2], a[3], a[4])
}
var Tra = [],
    Ura = [0, 13, 7, 3, 1, 0, -1],
    yK, Vra = [];

function Wra(a, b, c) {
    a.style[tK(c)] = b
}
function zK(a, b) {
    return new bd(a.x - b.x, a.y - b.y)
}

function AK(a) {
    if (a.indexOf(Sb) != -1) {
        if (Yg in La && a.indexOf(Tb) == -1) {
            a = a;
            var b = La.document.createElement(ij);
            b.innerHTML = a;
            b.normalize && b.normalize();
            a = b.firstChild.nodeValue;
            b.innerHTML = v;
            a = a
        } else a = Lra(a);
        return a
    }
    return a
}
var Xra = "http://docs.google.com/support/bin/answer.py?answer=";

function Yra(a) {
    return Xra + a
}
function Zra(a, b) {
    Pd.call(this, rj);
    this.g = a;
    this.a = b
}
s(Zra, Pd);

function $ra(a) {
    var b = Mra(GI);
    if (a) {
        a = new rpa(a, GI);
        b = zc(nra(a), b);
        Gc(b, function (c, d) {
            return Lb(c.od(), d.od())
        })
    }
    return b
}
function asa(a, b, c, d, e) {
    this.id = a;
    this.a = b;
    this.size = c;
    this.f = d;
    this.close = e
}
function bsa(a) {
    return {
        width: Math.max(1, Math.round(a.width / 381)),
        height: Math.max(1, Math.round(a.height / 381))
    }
}
var csa = "kix-dummy-css-class";

function dsa(a) {
    if (a) {
        z.ba.add(a, csa);
        z.ba.remove(a, csa)
    }
}
var esa = [Ug, Zg, bh, ch, dh, eh, fh, hh];

function BK(a) {
    this.a = a
}
s(BK, t);
BK.prototype.O = function () {
    return this.a
};
var fsa = "hex",
    gsa = "rgb",
    hsa = "named";

function CK(a) {
    var b = {};
    a = String(a);
    var c = a.charAt(0) == Jt ? a : Jt + a;
    if (pw.test(c)) {
        b.us = ow(c);
        b.type = fsa;
        return b
    } else {
        a: {
            var d = a.match(Dra);
            if (d) {
                c = Number(d[1]);
                var e = Number(d[2]);
                d = Number(d[3]);
                if (c >= 0 && c <= 255 && e >= 0 && e <= 255 && d >= 0 && d <= 255) {
                    c = [c, e, d];
                    break a
                }
            }
            c = []
        }
        if (c.length) {
            e = c[0];
            a = c[1];
            c = c[2];
            e = Number(e);
            a = Number(a);
            c = Number(c);
            if (isNaN(e) || e < 0 || e > 255 || isNaN(a) || a < 0 || a > 255 || isNaN(c) || c < 0 || c > 255) f(Error('"(' + e + Gj + a + Gj + c + '") is not a valid RGB color'));
            e = pK(e.toString(16));
            a = pK(a.toString(16));
            c =
            pK(c.toString(16));
            b.us = Jt + e + a + c;
            b.type = gsa;
            return b
        } else if (Qra) if (c = Qra[a.toLowerCase()]) {
            b.us = c;
            b.type = hsa;
            return b
        }
    }
    f(Error(a + " is not a valid color string"))
}
function isa(a, b, c) {
    if (b < 0 || c > Bg(a)) return 0;
    var d = 0;
    for (b = b; b < c; b++) if (E(a, b) == Jg) d++;
    else return d;
    return d
}

function jsa(a, b) {
    if (!uK(a)) {
        var c;
        a = a.replace(/[\s\xa0]+/g, x).replace(/^\s+|\s+$/g, v).toUpperCase();
        for (var d = 0; d < b.length; d++) switch (b[d]) {
        case 0:
            c = Number(a);
            if (!isNaN(c)) return c;
            break;
        case 1:
            c = a.toUpperCase();
            if (uK(c) || !Era.test(c)) c = void 0;
            else {
                for (var e = 0, g = 0; c.length > 0 && g < Uv.length; g++) {
                    var h = Mv[Uv[g]];
                    if (Hb(c, h)) {
                        e += Uv[g];
                        c = c.substring(h.length);
                        g--
                    }
                }
                c = e
            }
            if (Za(c)) return c;
            break;
        case 2:
            c = a.charCodeAt(0);
            if (c < 65 || c > 90) c = k;
            else {
                e = c - 64;
                for (g = 1; g < a.length; g++) if (a.charCodeAt(g) == c) e += 26;
                else break;
                c = e
            }
            if (Za(c)) return c;
            break
        }
    }
    return k
}
function ksa(a, b, c) {
    b = wu(a, b) + 1;
    for (var d = 0; d < c;) {
        b = Au(a, b) + 1;
        d++
    }
    return b
}
function lsa(a) {
    if (!a.ra().Kb()) return [];
    var b = [],
        c = Ev(a.ra());
    b.push(zu(a, c.start));
    qK(a, c.start, function (d, e) {
        if (c.start > e || c.end < e) return l;
        switch (d) {
        case mg:
            b.push(e);
            break;
        case kg:
        case ng:
            return l
        }
    });
    return b
}
function msa(a, b) {
    var c = 0;
    qK(a, b, function (d) {
        switch (d) {
        case mg:
            c++;
            break;
        case kg:
        case lg:
            return l
        }
    });
    return c
}

function nsa(a) {
    var b = a.ra();
    if (!b.Kb() || !ou(a)) return l;
    var c = xK(a);
    a = uu(a, qu(a));
    b = Ev(b);
    return c < b.start && a > b.end
}
function DK(a) {
    a = String(a);
    var b;
    b = /^\s*$/.test(a) ? l : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, Ht).replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Mg).replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, v));
    if (b) try {
        return eval(TJ + a + Of)
    } catch (c) {}
    f(Error("Invalid JSON string: " + a))
}
var EK = "disable",
    osa = "enable",
    FK = "highlight",
    GK = "unhighlight",
    psa = "activate",
    qsa = "deactivate",
    HK = "select",
    rsa = "unselect",
    IK = "check",
    ssa = "uncheck";

function tsa(a, b) {
    switch (a) {
    case 1:
        return b ? EK : osa;
    case 2:
        return b ? FK : GK;
    case 4:
        return b ? psa : qsa;
    case 8:
        return b ? HK : rsa;
    case 16:
        return b ? IK : ssa;
    case 32:
        return b ? Ao : yo;
    case 64:
        return b ? aF : Kp;
    default:
    }
    f(Error("Invalid component state"))
}
function usa(a) {
    return a
}

function vsa(a, b, c) {
    b = b || z.Va();
    b = new Tj(b);
    b.n = !! c;
    var d = {};
    kc(a, function (g) {
        var h = g.pc(Ji);
        if (h) {
            h = $a(h) ? h : [h];kc(h, function (j) {
                if (y.Fc) j = j.replace(/Ctrl/ig, uE);
                (d[j] || (d[j] = [])).push(g)
            })
        }
    });
    for (var e in d) b.Zx(e, e);
    oe(b, Vj, function (g) {
        var h = mc(d[g.identifier], function (j) {
            return j.Ab()
        });
        if (h.length == 1 && !Ei) {
            g.stopPropagation();
            Ni(h[0], g)
        } else if (h.length > 1) f(Error("Conflicting keyboard shortcuts."))
    });
    return b
}

function JK(a, b) {
    var c = b ? k : Tra[a];
    if (c) return c;c = {};
    var d = b ? b.eg : 11;
    if (a < 0 || a > 6) a = 6;c.ts_fs = d + Ura[a];c.ts_bd = a != 0 || l;b || (Tra[a] = c);
    return c
}
function wsa() {
    var a = rh(ih).Z();
    a.ts_ff = ei;
    return a
}
function xsa() {
    var a = rh(ih).Z();
    a.ts_ff = ei;
    return a
}
function KK() {
    var a = rh(ih).Z();
    a.ts_fs = 10;
    a.ts_ff = ei;
    return a
}
var ysa = "#000099";

function LK() {
    var a = {};
    a.ts_un = i;
    a.ts_fgc = ysa;
    return a
}
function zsa(a) {
    yK || (yK = new Uh);
    return yK.ea(a)
}

function MK(a) {
    var b = Vra[a];
    if (b) return b;
    b = {};
    switch (a) {
    case 0:
        b.ps_sa = 0;
        b.ps_sb = 0;
        break;
    case 1:
        b.ps_sa = 6;
        b.ps_sb = 24;
        break;
    case 2:
        b.ps_sa = 4;
        b.ps_sb = 18;
        break;
    case 3:
        b.ps_sa = 4;
        b.ps_sb = 14;
        break;
    case 4:
        b.ps_sa = 2;
        b.ps_sb = 12;
        break;
    case 5:
        b.ps_sa = 2;
        b.ps_sb = 11;
        break;
    case 6:
    default:
        a = 6;
        b.ps_sa = 2;
        b.ps_sb = 10;
        break
    }
    return Vra[a] = b
}
function NK(a) {
    var b = {};
    b.ps_il = (a + 1) * 36;
    b.ps_ifl = (a + 0.5) * 36;
    return b
}
function Asa() {
    var a = {};
    a.ps_ls = 1.15;
    a.ps_sa = 0;
    a.ps_sb = 0;
    return a
}

function Bsa() {
    var a = {};
    a.ps_ls = 1.15;
    a.ps_sa = 0;
    a.ps_sb = 0;
    return a
}
function Csa() {
    var a = {};
    a.ps_ls = 1.15;
    a.ps_sa = 0;
    a.ps_sb = 0;
    return a
}
function OK() {
    var a = {};
    a.ps_ls = 1;
    a.ps_sa = 0;
    a.ps_sb = 0;
    return a
}
var Dsa = "unselectable";

function PK(a, b, c) {
    c = !c ? a.getElementsByTagName(hd) : k;
    if (Rf) {
        b = b ? Hf : v;a.style[Rf] = b;
        if (c) {
            a = 0;
            for (var d; d = c[a]; a++) d.style[Rf] = b
        }
    } else if (y.ia || y.Gc) {
        b = b ? ve : v;a.setAttribute(Dsa, b);
        if (c) for (a = 0; d = c[a]; a++) d.setAttribute(Dsa, b)
    }
}

function QK(a) {
    var b = Df(a);
    a = Mf(a);
    return new mf(b.x, b.y, a.width, a.height)
}
function Esa(a, b) {
    var c = Ef(a),
        d = Ef(b);
    return new bd(c.x - d.x, c.y - d.y)
}
var Fsa = "overflow",
    Gsa = "borderLeftWidth",
    Hsa = "borderRightWidth",
    Isa = "borderTopWidth";

function RK(a) {
    var b = new dK(0, Infinity, Infinity, 0),
        c = z.J(a),
        d = c.Va().body,
        e = c.KA(),
        g;
    for (a = a; a = Bf(a);) if ((!y.ia || a.clientWidth != 0) && (!y.La || a.clientHeight != 0 || a != d) && (a.scrollWidth != a.clientWidth || a.scrollHeight != a.clientHeight) && pf(a, Fsa) != Gi) {
        var h = Df(a),
            j;
        j = a;
        if (y.Ua && !y.Xb(He)) {
            var m = parseFloat(of(j, Gsa));
            if (cK(j)) {
                var o = j.offsetWidth - j.clientWidth - m - parseFloat(of(j, Hsa));
                m += o
            }
            j = new bd(m, parseFloat(of(j, Isa)))
        } else j = new bd(j.clientLeft, j.clientTop);
        h.x += j.x;
        h.y += j.y;
        b.top = Math.max(b.top, h.y);
        b.right = Math.min(b.right, h.x + a.clientWidth);
        b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
        b.left = Math.max(b.left, h.x);
        g = g || a != e
    }
    d = e.scrollLeft;
    e = e.scrollTop;
    if (y.La) {
        b.left += d;
        b.top += e
    } else {
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, e)
    }
    if (!g || y.La) {
        b.right += d;
        b.bottom += e
    }
    c = c.fe();
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, e + c.height);
    return b.top >= 0 && b.left >= 0 && b.bottom > b.top && b.right > b.left ? b : k
}
function SK(a, b, c) {
    cb(b) ? Wra(a, c, b) : qb(b, kb(Wra, a))
}

function Jsa(a, b) {
    if (b.x >= a.left && b.x <= a.right) {
        if (b.y >= a.top && b.y <= a.bottom) return 0;
        return b.y < a.top ? a.top - b.y : b.y - a.bottom
    }
    if (b.y >= a.top && b.y <= a.bottom) return b.x < a.left ? a.left - b.x : b.x - a.right;
    var c = new bd(b.x < a.left ? a.left : a.right,
    b.y < a.top ? a.top : a.bottom),
        d = b.x - c.x;c = b.y - c.y;
    return Math.sqrt(d * d + c * c)
}
function Ksa(a) {
    a.stopPropagation()
}
function Lsa(a, b, c) {
    b = rc(a, b, c);
    if (b >= 0) {
        yc(a, b);
        return i
    }
    return l
}
function TK(a) {
    return a
}

function UK(a, b, c) {
    a = p(c) ? a.toFixed(c) : String(a);c = a.indexOf(Na);
    if (c == -1) c = a.length;
    return ac(Xd, Math.max(0, b - c)) + a
}
var VK = "...";

function Msa(a, b, c) {
    if (c) a = AK(a);
    if (a.length > b) a = a.substring(0, b - 3) + VK;
    if (c) a = Vb(a);
    return a
}
function WK(a) {
    return uK(a == k ? v : String(a))
}
var Nsa = "$$$$";

function XK(a) {
    for (var b = 1; b < arguments.length; b++) {
        var c = String(arguments[b]).replace(/\$/g, Nsa);
        a = a.replace(/\%s/, c)
    }
    return a
}
function Osa(a) {
    var b = {};
    for (var c in a) b[a[c]] = c;
    return b
}

function Psa(a, b, c) {
    var d = {};
    for (var e in a) d[e] = b.call(c, a[e], e, a);
    return d
}
function YK(a, b, c) {
    var d = {};
    for (var e in a) if (b.call(c, a[e], e, a)) d[e] = a[e];
    return d
}
var ZK = Qr.N();
ZK.IK = k;
ZK.n = ZK.a.kix_app;

function $K(a, b, c, d, e) {
    GJ.call(this, a);
    this.f = b;
    this.u = c;
    this.n = d;
    this.M = e
}
s($K, GJ);
$K.prototype.a = function () {
    var a = this.A;
    if (!pu(a, this.u)) {
        var b = Ge.N(),
            c = this.n,
            d;
        d = this.f;
        var e = new P(this.u),
            g = Q(d.getContext()),
            h = Ou(g, e);
        g = Cg(g.Y(), h);
        g = Nu(d, new P(g)).y;
        d = Nu(d, e).y - g;
        c.pe_to = d / Ye(b);
        c = this.n;
        g = new P(this.u);
        d = Nu(this.f, g).x - Ss(Yz(Q(this.f.getContext())));
        e = this.f;
        g = g.shift(1, i);
        e = Nu(e, g).x - Ss(Yz(Q(e.getContext())));
        if (e < d) d = e + 1;
        c.pe_lo = d / Ye(b);
        this.na(new xG(ut, this.M, this.n));
        a = Eg(a.Y(), this.u);
        this.na(new NG(this.M, a))
    }
};
$K.prototype.q = function () {
    $K.p.q.call(this);
    delete this.f;
    delete this.n
};
var Qsa = "addPE";

function aL(a) {
    O.call(this, Qsa, a)
}
s(aL, O);
aL.prototype.a = function (a) {
    var b = this.A,
        c = b.ra();
    c.Kb() && this.pa(new LJ(b));
    var d = a.view;
    c = Ou(b, c.Fa());
    a = a.ePM;
    var e = Ww();
    this.pa(new $K(b, d, c, a, e));
    wr(b, new Uw(e), i)
};
yr(Qsa, function (a) {
    return new aL(a)
});

function bL(a) {
    O.call(this, tF, a)
}
s(bL, O);
bL.prototype.a = function (a) {
    var b = a.styMap || {};
    if (a = a.col) {
        var c = {};
        c.bg_c = a;
        b.ds_b = c
    }
    this.na(new AG(Yg, 0, 0, b))
};
yr(tF, function (a) {
    return new bL(a)
});

function cL(a) {
    O.call(this, dF, a)
}
s(cL, O);
cL.prototype.a = function (a) {
    var b = this.A;
    a = Number(a.styVal);
    var c = MK(a);
    c.ps_hd = a;
    c.ps_hdid = a == 0 ? v : Ww(oj);this.pa(new HJ(b, c));
    var d = Fu(b);c = JK(a);this.na(new AG(ih, d.start, d.end, c));Bb(b.u.a, c)
};
yr(dF, function (a) {
    return new cL(a)
});

function dL(a) {
    O.call(this, iF, a)
}
s(dL, O);
dL.prototype.a = function (a) {
    a = a.aPaAlign;
    for (var b = this.A, c = MD(b), d = [], e = 0; e < c.length; e++) {
        var g = b.oa(eh, c[e]);
        d[e] = g.f
    }
    b = [];
    for (e = 0; e < c.length; e++) {
        g = d[e];
        switch (a) {
        case 0:
            g = g ? 0 : 2;
            break;
        case 2:
            g = g ? 2 : 0;
            break;
        case 1:
            g = 1;
            break;
        case 3:
            g = 3;
            break;
        default:
            if (Fb) f(Error("AbsoluteAlignmentType " + a + " not supported by ApplyParagraphAlignCommand."));
            continue
        }
        var h = {};
        h.ps_al = g;
        b[e] = new AG(eh, c[e], c[e], h)
    }
    for (a = 0; a < b.length; a++)(c = b[a]) && this.na(c)
};
yr(iF, function (a) {
    return new dL(a)
});

function eL(a) {
    O.call(this, hF, a)
}
s(eL, O);
eL.prototype.a = function (a) {
    this.pa(new HJ(this.A, a.styMap, a.ignUnchVal))
};
yr(hF, function (a) {
    return new eL(a)
});

function fL(a) {
    O.call(this, pF, a)
}
s(fL, O);
fL.prototype.a = function (a) {
    a = a.ch;
    var b = this.A,
        c = qu(b),
        d = Fv(b.g, gh, c);
    c = Gv(b, gh, c);
    this.pa(new LJ(b, new nb(d, c)));
    this.pa(new SJ(b, a, new P(d)))
};
yr(pF, function (a) {
    return new fL(a)
});

function gL(a, b) {
    GJ.call(this, a);
    this.f = b
}
s(gL, GJ);
gL.prototype.a = function () {
    var a = [],
        b = this.f ? 1 : -1,
        c = this.A,
        d = c.ra(),
        e = d.Kb() ? Ru(d) : d.Fa();d = MD(c);
    if (Yv(c, d)) {
        var g = Ou(c, e),
            h = c.oa(dh, g);
        if (Fg(c.a, g) && h.Bb && h.yb == 0 && hI(c, g).length == 0) {
            d = c.oa(dh, Ou(c, e));
            d = JD(c, d.Bb);
            hL(this, d, b, a)
        } else {
            hL(this, d, b, a);
            for (e = 0; e < d.length; e++) {
                g = d[e];
                h = c.Ub(dh, g);
                if (h.Bb) {
                    var j = h.yb;
                    if (j == 8 && this.f || j == 0 && !this.f) return;
                    j = {};
                    j.ls_nest = Math.max(h.yb + b, 0);
                    a.push(new AG(dh, g, g, j))
                }
            }
        }
    } else hL(this, d, b, a);
    for (e = 0; e < a.length; e++) this.na(a[e])
};

function hL(a, b, c, d) {
    a = a.A;
    for (var e = 0; e < b.length; e++) {
        var g = b[e],
            h = a.Ub(eh, g),
            j = hK(Yz(a)),
            m = Math.min(h.Uj + c * 36, j);
        if (m < 0) return;
        h = Math.min(h.Ei + c * 36, j);
        if (h < 0) return;
        j = {};
        j.ps_il = m;
        j.ps_ifl = h;
        d.push(new AG(eh, g, g, j))
    }
};

function iL(a, b) {
    GJ.call(this, a);
    this.f = b
}
s(iL, GJ);
var jL = "\u001c\n";
iL.prototype.a = function () {
    var a = this.A,
        b = qu(a);
    if (ou(a)) {
        var c = lg + ac(jL, msa(a, b));
        b = this.f ? wu(a, b) : yu(a, b) + 1;this.pa(new SJ(a, c, new P(b)));
        for (var d = OK(), e = 0;
        (e = c.indexOf(Hd, e + 1)) > 0;) this.na(new AG(eh, b + e, b + e, d));wr(a, new P(b + 2), i)
    }
};

function kL(a) {
    O.call(this, XF, a)
}
s(kL, O);
kL.prototype.a = function (a) {
    var b = this.A;
    a = a.sh;
    if (ou(b)) if (a) {
        a = this.A;
        b = a.Y();
        a = zu(a, a.ra().Fa().a);
        switch (E(b, a - 1)) {
        case lg:
            E(b, a - 2) != kg && lL(this, a - 2, l);
            break;
        case Hd:
            lL(this, a - 1, l);
            break
        }
    } else {
        b = this.A;
        a = b.Y();
        var c = Au(b, b.ra().Fa().a);
        switch (E(a, c + 1)) {
        case ng:
            this.pa(new iL(b, l));
            break;
        case lg:
            lL(this, c + 3, i);
            break;
        case mg:
            lL(this, c + 2, i);
            break
        }
    } else {
        c = Ev(b.ra());
        var d;
        var e = b.u;
        if (e.Kb()) {
            d = Ou(b, Ru(e));
            e = Ou(b, Pu(e));
            d = Eg(b.a, d) != Eg(b.a, e)
        } else d = l;
        if (!(d = d)) d = (d = Ev(b.u)) ? Fg(b.a, d.start) && Eg(b.a, d.start) == d.end : l;
        if (d) this.pa(new gL(b, !a));
        else if (c && Fg(b.a, c.start)) Rsa(this, b, c.start, a);
        else if (c) Ssa(this, b);
        else {
            c = qu(b);
            d = b.oa(eh, c);
            d = !nH(b, c) && !! !d.n.Qb().length;
            Fg(b.a, c) && (d || QD(b, c)) ? Rsa(this, b, c, a) : Ssa(this, b)
        }
    }
};

function lL(a, b, c) {
    a = a.A;
    var d = c ? b : zu(a, b) + 1;b = c ? Au(a, b) : b;wr(a, new P(d), i, new P(b))
}
function Ssa(a, b) {
    a.pa(new UJ(b, Jg));
    var c = Qu(b);
    wr(b, new P(c + 1), i)
}

function Rsa(a, b, c, d) {
    var e = b.oa(eh, c),
        g = e.Ei;
    e = e.Uj;
    if (!QD(b, c) && g == e && !d || g > e && d) {
        c = d ? e : (Math.floor(g / 36) + 1) * 36;d = hK(Yz(b));g = {};g.ps_ifl = Math.min(c, d);a.pa(new HJ(b, g))
    } else a.pa(new gL(b, !d))
}
yr(XF, function (a) {
    return new kL(a)
});

function mL(a, b) {
    GJ.call(this, a);
    this.f = b
}
s(mL, GJ);
mL.prototype.a = function () {
    var a = this.A;
    if (a.ra().Kb()) {
        if (!nsa(a)) return;
        a = lsa(a)
    } else a = [zu(a, qu(a))];
    for (var b = 0; b < a.length; b++) {
        var c = a[b];
        this.na(new AG(Ug, c, c, this.f))
    }
};

function nL(a, b, c) {
    GJ.call(this, a);
    this.f = b;
    this.n = c
}
s(nL, GJ);
nL.prototype.a = function () {
    for (var a = 0; a < this.f.length; a++) this.na(new AG(fh, this.f[a], this.f[a], this.n))
};
nL.prototype.q = function () {
    nL.p.q.call(this);
    delete this.f;
    delete this.n
};

function oL(a, b) {
    GJ.call(this, a);
    this.f = b
}
s(oL, GJ);
oL.prototype.a = function () {
    var a = xK(this.A);
    this.na(new AG(hh, a, a, this.f))
};

function pL(a, b, c) {
    GJ.call(this, a);
    this.f = b;
    this.n = c
}
s(pL, GJ);
pL.prototype.a = function () {
    var a = this.n.cv;
    if (a) {
        var b = a.opIndex;
        switch (a.op) {
        case Zf:
            Tsa(this, b);
            qL(this);
            break;
        case $f:
            Tsa(this, b + 1);
            qL(this);
            break;
        case Yf:
            a = Ft(this.A.oa(hh, this.f)).length - 1;
            b > a || qL(this);
            break
        }
    }
};

function qL(a) {
    var b = {};
    b.tbls_cols = a.n;
    a.na(new AG(hh, a.f, a.f, b))
}
function Tsa(a, b) {
    for (var c = Ft(a.A.oa(hh, a.f)).length; c < b; c++) {
        var d = a,
            e = {};
        e.tbls_cols = bg(Zf, c, {});
        d.na(new AG(hh, d.f, d.f, e))
    }
}
pL.prototype.q = function () {
    pL.p.q.call(this);
    delete this.n
};

function rL(a) {
    O.call(this, UF, a)
}
s(rL, O);
rL.prototype.a = function (a) {
    var b = this.A;
    if (ou(b)) {
        var c = a.tblSM;
        c && this.pa(new oL(b, c));
        if (c = a.rowSM) {
            var d = wu(b, qu(b));
            this.pa(new nL(b, [d], c))
        }
        c = a.colWT;
        d = a.colWV;
        if (p(c)) {
            var e = wK(b, qu(b)).se,
                g = xK(b),
                h = {};
            h.col_wt = c;
            if (c != 1) h.col_wv = d;
            this.pa(new pL(b, g, dg(e, h)))
        }(a = a.cellSM) && this.pa(new mL(b, a))
    }
};

function Usa(a) {
    return new rL(a)
}
yr(UF, Usa);

function sL(a) {
    O.call(this, sr, a)
}
s(sL, O);
sL.prototype.a = function (a) {
    var b = this.A,
        c = b.ra(),
        d = a.styMap,
        e = a.styProp;
    a = a.styVal;
    var g = Ev(c);
    if (g) {
        c = g.start;
        g = g.end;
        if (!d) if (e) {
            var h = zsa(e);
            d = b.td(ih);
            b = b.oa(ih, c);
            for (var j = c; j <= g; j++) {
                if (d[j]) b = d[j];
                if (b.ea(e) != a) {
                    h = a;
                    break
                }
            }
            d = {};
            d[e] = h
        }
        this.na(new AG(ih, c, g, d))
    } else {
        c = c.Fa();
        if (c.O() == 0) {
            if (!d) a: {
                d = eB(b);
                a = a;
                switch (e) {
                case Wh:
                case $h:
                case bi:
                case ai:
                    g = {};
                    g[e] = !d.ea(e);
                    d = g;
                    break a;
                case ci:
                    if (a == d.ea(e)) a = gi;
                    g = {};
                    g[e] = a;
                    d = g;
                    break a;
                default:
                    d = k;
                    break a
                }
            }
            Bb(b.u.a, d);e = c.a;Hg(b.a, e) && this.na(new AG(ih, e, e, d))
        }
    }
};
yr(sr, function (a) {
    return new sL(a)
});

function tL(a) {
    O.call(this, YF, a)
}
s(tL, O);
tL.prototype.a = function (a) {
    a = a.aCR;
    for (var b = 0; a[b]; b++) {
        var c = new uL(this.A);
        c && this.pa(c)
    }
};
yr(YF, function (a) {
    return new tL(a)
});

function vL(a) {
    O.call(this, nE, a)
}
s(vL, O);
vL.prototype.a = function () {
    var a = this.A,
        b = Ev(a.ra()),
        c = Qu(a);
    if (!b && nH(a, c)) {
        b = a.oa(dh, c);
        if (b.Bb) {
            b.yb == 0 ? this.pa(new OJ(a)) : this.pa(new gL(a, l));
            return
        }
    }
    b = a.oa(eh, c).kh != 0 && Hg(a.a, c);
    var d;
    b || (d = eB(a).Z());
    this.pa(new UJ(a, Hd));
    wr(a, new P(c + 1), i);
    if (b) {
        a.u.a = {};
        d = MK(0);
        d.ps_hd = 0;
        d.ps_hdid = v;
        this.pa(new HJ(a, d));
        this.na(new AG(ih, c + 1, c + 1, JK(0)))
    } else Bb(a.u.a, d)
};
yr(nE, function (a) {
    return new vL(a)
});

function wL(a) {
    O.call(this, aG, a)
}
s(wL, O);
wL.prototype.a = function () {
    var a = this.A,
        b = Ev(a.ra()),
        c = !! Bv(a);
    if (b) {
        var d = b.start,
            e = k,
            g = k;
        do {
            var h;
            if (c) {
                g || (g = (new Uh(LK())).Z());
                h = g
            } else {
                e || (e = (new Uh).Z());
                h = e
            }
            var j = Math.min(b.end, Gv(a, ch, d));
            this.na(new AG(ih, d, j, h));
            d = j + 1;
            c = !c
        } while (d <= b.end)
    } else if (c) {
        b = new Uh(LK());
        a.u.a = b ? b.Z() : (new Uh).Z()
    } else a.u.a = (new Uh).Z()
};
yr(aG, function (a) {
    return new wL(a)
});

function xL(a) {
    O.call(this, IF, a)
}
s(xL, O);
xL.prototype.a = function (a) {
    this.pa(new JJ(this.A, a.eId))
};

function Vsa(a) {
    return new xL(a)
}
yr(IF, Vsa);

function yL(a) {
    O.call(this, JF, a)
}
s(yL, O);
yL.prototype.a = function (a) {
    var b = this.A;
    if (a = a.eId) {
        for (var c = 1, d = b.td(Xg), e = Qg(d), g = 0; g < e.length; g++) {
            var h = e[g];
            if (sc(d[h].Ke.Qb(), a)) {
                c = h;
                break
            }
        }
        this.pa(new IJ(b, a, NJ));
        wr(b, new P(c), i)
    }
};

function Wsa(a) {
    return new yL(a)
}
yr(JF, Wsa);

function zL(a) {
    O.call(this, KF, a)
}
s(zL, O);
zL.prototype.a = function (a) {
    var b = this.A;
    if (a = a.eId) {
        for (var c = -1, d = b.td(ah), e = Qg(d), g = 0; g < e.length; g++) {
            var h = e[g];
            if (d[h].u == a) {
                c = h;
                break
            }
        }
        this.pa(new KJ(b, c, a, NJ));
        if (c == -1) c = 1;
        wr(b, new P(c), i)
    } else if (Fb) f(Error("No footnoteId specified in deletefootnotecommand."))
};

function Xsa(a) {
    return new zL(a)
}
yr(KF, Xsa);

function AL(a) {
    O.call(this, WF, a)
}
s(AL, O);
AL.prototype.a = function () {
    var a = this.A,
        b = a.ra().Fa();
    if (b.O() == 1) {
        var c = b.ma();
        b = Cg(a.Y(), Ou(a, b));
        wr(a, new P(b), i);
        this.pa(new JJ(a, c))
    }
};
yr(WF, function (a) {
    return new AL(a)
});

function BL(a) {
    O.call(this, cG, a)
}
s(BL, O);
BL.prototype.a = function (a) {
    var b = MD(this.A);
    a = a.delI;
    var c = cg(a),
        d = {};
    d.ps_ts = c;
    for (c = 0; c < b.length; c++) {
        var e = this.A.Ub(eh, b[c]);
        if (!e.n.Qb().length || !Th(e)[a]) return
    }
    this.pa(new HJ(this.A, d))
};
yr(cG, function (a) {
    return new BL(a)
});

function CL(a) {
    O.call(this, qF, a)
}
s(CL, O);
CL.prototype.a = function (a) {
    var b = this.A;
    if (ou(b)) {
        for (var c = wK(b, qu(b)).se, d = Rra(b, qu(b)), e = [], g = xK(b), h = g + 1, j = 0; j < d; j++) {
            h = ksa(b, h, c);
            var m = Au(b, h);
            e.push(new nb(h, m));
            h = yu(b, h) + 1
        }
        lc(e, function (o) {
            this.pa(new LJ(b, o, i))
        }, this);
        a.eTS && this.pa(new pL(this.A, g, cg(c)));
        e.length > 0 && wr(b, new P(e[0].start - 1), i)
    }
};

function Ysa(a) {
    return new CL(a)
}
yr(qF, Ysa);

function DL(a) {
    O.call(this, sF, a)
}
s(DL, O);
DL.prototype.a = function () {
    var a = this.A;
    if (ou(a)) {
        var b = xK(a) - 1,
            c = uu(a, qu(a));
        this.pa(new LJ(a, new nb(b, c), i));
        wr(this.A, new P(b), i)
    }
};

function Zsa(a) {
    return new DL(a)
}
yr(sF, Zsa);

function EL(a) {
    O.call(this, rF, a)
}
s(EL, O);
EL.prototype.a = function () {
    var a = this.A;
    if (ou(a)) {
        var b = wu(a, qu(a)),
            c = yu(a, qu(a));
        this.pa(new LJ(a, new nb(b, c), i));
        wr(a, new P(b), i)
    }
};

function $sa(a) {
    return new EL(a)
}
yr(rF, $sa);

function FL(a) {
    O.call(this, MF, a)
}
s(FL, O);
FL.prototype.a = function () {
    var a = this.A,
        b = Ev(a.ra()),
        c;
    if (b) {
        c = Cv(a.oa(ch, b.start));
        var d = Cv(a.oa(ch, b.end));
        c = c ? Fv(a.g, ch, b.start) : b.start;a = d ? a = Gv(a, ch, b.end) : b.end
    } else {
        b = qu(a);
        c = Fv(a.g, ch, b);
        a = Gv(a, ch, b)
    }
    b = {};
    b.lnks_link = k;
    this.na(new AG(ch, c, a, b));
    b = pi();
    this.na(new AG(ih, c, a, b))
};
yr(MF, function (a) {
    return new FL(a)
});

function GL(a, b, c, d) {
    GJ.call(this, a);
    this.n = b;
    this.u = c;
    this.OD = d || k
}
s(GL, GJ);
var ata = [Ug, fh, hh];
GL.prototype.f = 0;
GL.prototype.a = function () {
    var a = this.n,
        b = this.u;
    if (a.Y().length != 0) {
        var c = this.A,
            d = bta(c, b),
            e = a.Y().indexOf(xg) != -1 && (bta(c, b) || pu(c, b) || Lw(c.Y(), b)),
            g = cta(a),
            h = dta(c, b),
            j = Lw(c.Y(), b);
        if (g || d || e || h) {
            g = [];
            h && g.push(Xg);
            d && g.push(ah);
            j && Bc(g, esa);
            a = eta(a, e, j, g)
        }
        d = a.Y();
        e = this.f = d.length;
        if (e != 0) {
            this.pa(new SJ(c, d, new P(b)));
            d = b + e - 1;
            e = a.f;
            var m = a.a,
                o = {};
            for (var q in e) {
                var u = q;
                Pg(e[u], function (X, V) {
                    for (var ma in V) {
                        var Ka = V[Number(ma)],
                            xa = m[Ka];
                        if (xa) {
                            o[Ka] = i;
                            var gk = Ka;
                            if (u != ah && u != Xg) {
                                gk = Ww();
                                if (this.OD) this.OD[Ka] = gk
                            }
                            this.na(new xG(xa.O(), gk, xa.Z()));
                            this.na(new NG(gk, b + X))
                        }
                    }
                    return l
                }, this)
            }
            for (var w in m) if (!o[w]) {
                q = m[w];
                e = w;
                if (h = c.Pa(w)) {
                    if (h.O() == q.O()) continue;
                    e = Ww()
                }
                this.na(new xG(q.O(), e, q.Z()))
            }
            w = a.g;
            q = this.OD || {};
            for (e = 0; e < w.length; e++) {
                j = w[e];
                h = j.O();
                j = j.a;
                g = sh(h);
                for (var C = Qg(j), B = 0; B < C.length; B++) {
                    var H = j[C[B]],
                        I = b + C[B],
                        T = g ? I : C[B + 1] ? b + C[B + 1] - 1 : d;H = fta(this, H, a, q);this.na(new AG(h, I, T, H.Z()))
                }
            }
            c = Eg(c.Y(), d);
            (d = Xy(a, eh)) && d.a.length > 0 && d.f && this.na(new AG(eh, c, c, d.f.Z()));
            (a = Xy(a, dh)) && a.a.length > 0 && a.f && this.na(new AG(dh, c, c, a.f.Z()))
        }
    }
};

function fta(a, b, c, d) {
    for (var e = a.A, g = [], h = b.Yr(), j = 0, m; m = h[j]; j++) {
        var o = c.n[m];
        if (o) {
            var q = d[m];
            if (q) g.push(q);
            else {
                q = Ww();
                g.push(q);
                o = eta(o, l, l, [Xg, ah]);
                pra(o, m, q);
                a.pa(new GL(e, o, Hu(e) + 1));
                d[m] = q
            }
        }
    }
    if (g.length > 0) switch (b.O()) {
    case ah:
        b = b.sa();
        a = {};
        a.fs_id = g[0];
        b.update(a);
        break;
    case Xg:
        b = b.sa();
        a = {};
        a.cs_cids = bg(ag, undefined, g);
        b.update(a);
        break
    }
    return b
}

function bta(a, b) {
    var c = Iu(a, b);
    c = DH(a.n, c, c);
    for (var d in c) switch (c[d].O()) {
    case ah:
    case Xg:
    case rt:
        return i
    }
    return l
}
function eta(a, b, c, d) {
    a = $y(a);
    var e = a.Y();
    if (b) e = e.replace(xg, x);
    if (c) e = e.replace(Jw, x);
    b = e;
    d = zc(ata, d || []);
    c = a.g;
    e = [];
    for (var g = 0; g < c.length; g++) sc(d, c[g].O()) || e.push(c[g]);
    return new Wy(b, e, a.u, a.f, a.a, a.n)
}
function cta(a) {
    a = a.g;
    for (var b = 0; b < a.length; b++) if (!sc(ata, a[b].O())) return i;
    return l
}

function dta(a, b) {
    if (a.oa(Xg, b).Yr().length > 0) return i;
    var c = Iu(a, b);
    c = DH(a.n, c, c);
    for (var d in c) switch (c[d].O()) {
    case ah:
    case Xg:
        return i
    }
    return l
}
GL.prototype.q = function () {
    GL.p.q.call(this);
    this.n.G();
    delete this.n
};

function HL(a) {
    O.call(this, Zu, a)
}
s(HL, O);
HL.prototype.a = function (a) {
    var b = a.loc;
    if (b.O() == 0) {
        var c = this.A,
            d = Ev(c.ra()),
            e = d.start,
            g = Ou(c, b);
        if (!d || WE(c, g) || Iu(c, g) != Iu(c, e)) wr(c, b, i);
        else {
            var h = nF(c);
            if (a = a.dss) h = gta(a, h, b);
            b = d.end;
            d = new LJ(c);
            this.pa(d);
            e = b - e - (d.f - 1);
            g = g > b ? g - e : g;h = new GL(c, h, g);this.pa(h);h = h.f;wr(c, new P(g), i, new P(g + h))
        }
    }
};
yr(Zu, function (a) {
    return new HL(a)
});

function IL(a) {
    O.call(this, AE, a)
}
s(IL, O);
IL.prototype.a = function (a) {
    var b = a.ch,
        c = a.spi,
        d = a.pimc;
    a = this.A;
    d && this.pa(new LJ(a, new nb(c, c + d.length - 1)));
    d = eB(a).Z();
    this.pa(new SJ(a, b, new P(c), d))
};
yr(AE, function (a) {
    return new IL(a)
});

function JL(a) {
    O.call(this, mF, a)
}
s(JL, O);
JL.prototype.a = function (a) {
    this.pa(new gL(this.A, a.ind))
};
yr(mF, function (a) {
    return new JL(a)
});

function KL(a) {
    O.call(this, uF, a)
}
s(KL, O);
KL.prototype.a = function () {
    var a = this.A;
    if (!Aw(a)) {
        a = Bw(a.ra());
        if (a != -1) {
            var b = Ww(Iv);
            this.na(new xG(jt, b, {}));
            this.na(new NG(b, a))
        }
    }
};

function hta(a) {
    return new KL(a)
}
yr(uF, hta);

function LL(a) {
    O.call(this, vF, a)
}
s(LL, O);
LL.prototype.a = function (a) {
    var b = ita(this);
    if (b) {
        var c = this.A,
            d = Hd;
        if (!c.f.yF) {
            a = a.usrNm;
            d = (a ? aC + a : v) + d
        }
        a = Ww();
        for (var e = b.start, g = Gv(c, Xg, e); g < b.end;) {
            jta(this, e, g, a);
            e = g + 1;
            g = Gv(c, Xg, e)
        }
        jta(this, e, b.end, a);
        this.na(new xG(Xg, a, {}));
        b = Hu(c) + 1;
        this.na(new GG(b, jg + d));
        d = b + d.length;
        this.na(new AG(ih, b, d, KK()));
        this.na(new AG(eh, d, d, Csa()));
        this.na(new NG(a, b));
        wr(c, new P(b + 1), i)
    }
};

function ita(a) {
    var b = a.A;
    if (b.Df()) return k;
    a = b.ra();
    var c = a.Fa();
    if (c.O() != 0) return k;
    b = b.Y();
    if (a.Kb()) {
        c = Ev(a).start;
        a = Ev(a).end;
        if (a > c && Hg(b, a)) a -= 1;
        return new nb(c, a)
    }
    for (a = c.a; Gg(b, a) && Kg(E(b, a));) a--;
    if (!Gg(b, a)) return k;
    c = lu(a, b);
    a = ku(a, b) - 1;
    return new nb(c, a)
}
function jta(a, b, c, d) {
    var e = {};
    e.cs_cids = bg(Zf, 0, d);
    a.na(new AG(Xg, b, c, e))
}
function kta(a) {
    return new LL(a)
}
yr(vF, kta);

function ML(a) {
    O.call(this, FF, a)
}
s(ML, O);
var lta = "\u001a\u001e";
ML.prototype.a = function (a) {
    var b = this.A,
        c = b.ra(),
        d = c.Fa();
    c = Ev(c);
    if (!(!c && d.O() != 0)) {
        d = c ? c.start : qu(b);
        if (!Lw(b.Y(), d)) {
            a = a.eqP;
            this.pa(new UJ(b, lta));
            c = {};
            c.eqs_p = a;
            this.na(new AG(Zg, d, d, c));
            wr(b, new P(d + 1), i)
        }
    }
};

function mta(a) {
    return new ML(a)
}
yr(FF, mta);

function NL(a) {
    O.call(this, wF, a)
}
s(NL, O);
NL.prototype.a = function () {
    var a = Ww(),
        b = this.A,
        c;
    c = this.A;
    var d = c.ra();
    if (d.Kb()) {
        d = Ou(c, Pu(d)) + 1;
        if (d >= Bg(c.Y()) || E(c.a, d) == jg) d -= 1;
        c = d
    } else c = qu(c);
    c = c;
    this.pa(new SJ(this.A, Jt, new P(c)));
    d = {};
    d.fs_id = a;
    this.na(new AG(ah, c, c, d));
    this.na(new xG(ah, a, {}));
    c = Hu(b) + 1;
    this.na(new GG(c, yH));
    d = c + 1;
    this.na(new AG(ih, c, d, xsa()));
    this.na(new AG(eh, d, d, Bsa()));
    this.na(new NG(a, c));
    wr(b, new P(c + 1), i)
};

function nta(a) {
    return new NL(a)
}
yr(wF, nta);

function OL(a) {
    O.call(this, GF, a)
}
s(OL, O);
OL.prototype.a = function (a) {
    var b = this.A,
        c = b.ra(),
        d = c.Fa();
    c = Ev(c);
    if (!(!c && d.O() != 0)) {
        d = c ? c.start : qu(b);
        if (Lw(b.Y(), d)) {
            c = a.funcCode;
            a = a.funcNumArgs;
            var e;
            e = a == 0 ? vg : ug + ac(qg, a - 1) + sg;
            var g = nF(b);this.pa(new UJ(b, e));
            if (a > 0 && g) {
                this.pa(new GL(b, g, d + 1));
                wr(b, new P(d + 2 + g.Y().length), i)
            } else wr(b, new P(d + 1), i);b = {};b.eqfs_c = c;this.na(new AG($g, d, d, b))
        }
    }
};

function ota(a) {
    return new OL(a)
}
yr(GF, ota);

function PL(a) {
    O.call(this, jF, a)
}
s(PL, O);
PL.prototype.a = function (a) {
    var b = this.A;
    a = a.hdrFtrType;
    var c;
    var d = pta(this, a);
    for (var e in d) if (!c || e < c) c = e;
    c = c ? d[c] : -1;
    if (c < 1) {
        b = this.A;
        c = Ww();
        e = {};
        e.hfe_hft = a;
        this.na(new xG(rt, c, e));
        a = Hu(b) + 1;
        this.na(new GG(a, yH));
        e = a + 1;
        this.na(new AG(ih, a, e, wsa()));
        this.na(new AG(eh, e, e, Asa()));
        this.na(new NG(c, a));
        wr(b, new P(a + 1), i)
    } else wr(b, new P(c + 1), i)
};

function pta(a, b) {
    var c = a.A,
        d = HA(c, rt),
        e = {};
    d && Pg(d, function (g, h) {
        for (var j = 0; j < h.length; j++) {
            var m = h[j],
                o = c.Pa(m);
            if (o && o.f == b) e[m] = g
        }
        return l
    });
    return e
}
function qta(a) {
    return new PL(a)
}
yr(jF, qta);

function QL(a, b) {
    GJ.call(this, a);
    this.f = b
}
s(QL, GJ);
QL.prototype.a = function () {
    this.pa(new SJ(this.A, SB, new P(this.f)));
    this.na(new AG(bh, this.f, this.f, {}))
};

function RL(a) {
    O.call(this, xF, a)
}
s(RL, O);
RL.prototype.a = function () {
    var a = this.A,
        b = a.ra(),
        c = Ou(a, Ru(b));
    b.Kb() && this.pa(new LJ(a));
    this.pa(new QL(a, c));
    wr(a, new P(c + 1), i)
};

function rta(a) {
    return new RL(a)
}
yr(xF, rta);

function SL(a, b, c) {
    GJ.call(this, a);
    this.f = b;
    this.n = c
}
s(SL, GJ);
SL.prototype.a = function () {
    var a = this.A;
    a.ra().Kb() && this.pa(new LJ(a));
    this.pa(new SJ(a, hd, new P(this.n)));
    a = Ww();
    this.na(new xG(Lf, a, this.f));
    this.na(new NG(a, this.n))
};
SL.prototype.q = function () {
    SL.p.q.call(this);
    delete this.f
};

function TL(a) {
    O.call(this, BF, a)
}
s(TL, O);
TL.prototype.a = function (a) {
    var b = this.A,
        c = b.ra();
    if (!(!c.Kb() && c.Fa().O() != 0)) {
        c = Qu(b);
        this.pa(new SL(b, a.ePM, c));
        wr(b, new P(c + 1), i)
    }
};
yr(BF, function (a) {
    return new TL(a)
});

function UL(a) {
    O.call(this, HF, a)
}
s(UL, O);
UL.prototype.a = function () {
    var a = this.A,
        b = a.ra(),
        c = Ou(a, Ru(b));
    b.Kb() && this.pa(new LJ(a));
    this.pa(new SJ(this.A, xg, new P(c)));
    wr(a, new P(c + 1), i)
};

function sta(a) {
    return new UL(a)
}
yr(HF, sta);

function VL(a) {
    O.call(this, PF, a)
}
s(VL, O);
VL.prototype.a = function (a) {
    var b = this.A,
        c = b.ra(),
        d = c.Fa(),
        e;
    if (d.O() == 0) {
        e = Ru(c);
        c.Kb() && this.pa(new LJ(b))
    } else {
        e = new P(Ou(b, d));
        this.pa(new JJ(b, d.ma()))
    }
    c = e.a;
    d = a.tblCC;
    var g = a.tblRC;
    if (!(!Za(d) || !Za(g) || d <= 0 || g <= 0)) {
        for (var h = new N(Hd, kg), j = 0; j < g; j++) h.append(lg, ac(jL, d));
        h.append(ng);
        g = h.toString();
        this.pa(new SJ(b, g, e));
        if (a.eTS) {
            a = c + 1;
            h = {};
            e = [];
            for (j = 0; j < d; j++) e[j] = h;
            d = {};
            d.tbls_cols = bg(ag, undefined, e);
            this.na(new AG(hh, a, a, d))
        }
        d = OK();
        for (a = 0;
        (a = g.indexOf(Hd, a + 1)) > 0;) this.na(new AG(eh, c + a, c + a, d));
        wr(b, new P(c + 1), i)
    }
};

function tta(a) {
    return new VL(a)
}
yr(PF, tta);

function WL(a) {
    O.call(this, RF, a)
}
s(WL, O);
WL.prototype.a = function (a) {
    var b = this.A;
    if (ou(b)) {
        var c = xK(b),
            d = c + 1,
            e = a.tblCR;
        e = wK(b, qu(b)).se += e ? 1 : 0;
        for (var g, h = Rra(b, c), j = 0; j < h; j++) {
            var m = ksa(b, d, e);
            if (j == 0) g = m;
            this.pa(new SJ(b, jL, new P(m)));
            m = m + 1;
            this.na(new AG(eh, m, m, OK()));
            d = yu(b, d) + 1
        }
        a.eTS && this.pa(new pL(this.A, c, bg(Zf, e, {})));wr(b, new P(g + 1), i)
    }
};

function uta(a) {
    return new WL(a)
}
yr(RF, uta);

function XL(a, b) {
    GJ.call(this, a);
    this.f = b
}
s(XL, GJ);
var vta = "Add Headings (Format > Paragraph styles) and they will appear in your table of contents.\n",
    wta = "#heading=";
XL.prototype.a = function () {
    var a = this.f,
        b = xta(this);
    if (b.length == 0) {
        b = a;
        this.pa(new SJ(this.A, vta, new P(b)));
        a = b + 88;
        var c = (new Uh(void 0)).Z();
        this.na(new AG(ih, b, a, c));
        b = (new Bh(void 0)).Z();
        this.na(new AG(eh, a, a, b))
    } else for (c = 0; c < b.length; c++) {
        var d = b[c],
            e = d.text + Hd;
        d = d.style;
        var g = a + e.length - 1;
        this.pa(new SJ(this.A, e, new P(a)));
        var h = {};
        h.lnk_type = 0;
        h.ulnk_url = wta + d.Go;
        var j = {};
        j.lnks_link = h;
        this.na(new AG(ch, a, g - 1, j));
        h = (new Uh(LK())).Z();
        this.na(new AG(ih, a, g, h));
        g = g;
        d = d.kh;
        h = (new Bh).Z();
        h.ps_il =
        d * 36 * 0.5;
        h.ps_ifl = d * 36 * 0.5;
        this.na(new AG(eh, g, g, h));
        a += e.length
    }
};

function xta(a) {
    var b = [],
        c = a.A,
        d = c.Y();
    c = c.td(eh);
    Pg(c, function (e, g) {
        if (g.kh == 0) return l;
        if (!g.Go) {
            var h = {};
            h.ps_hdid = Ww(oj);
            this.na(new AG(eh, e, e, h))
        }
        h = Cg(d, e);
        h = Jb(d.slice(h, e));
        if (h.length == 0) return l;
        b.push({
            style: g,
            text: h,
            index: e
        });
        return l
    }, a);
    Gc(b, yta);
    return b
}
function yta(a, b) {
    return a.index - b.index
};

function YL(a, b) {
    O.call(this, b, a)
}
s(YL, O);
var ZL = new rr;

function $L(a, b, c) {
    O.call(this, b, a);
    this.u = c
}
s($L, YL);
var zta = "\n\uefff\n\ueffe\n";
$L.prototype.a = function () {
    var a = this.A,
        b = Ou(a, Ru(a.ra())),
        c = Bg(a.Y());
    this.pa(new UJ(this.A, zta));
    var d = {};
    d.autogen_type = this.u;
    this.na(new AG(Tg, b + 1, b + 1, d));
    this.na(new AG(ih, b + 1, b + 3, (new Uh).Z()));
    d = (new Bh).Z();
    this.na(new AG(eh, b + 2, b + 2, d));
    this.pa(ZL.execute(this.u, this.A, b + 2));
    wr(a, new P(b + (Bg(a.Y()) - c) - 3), i)
};

function Ata(a) {
    $L.call(this, a, SF, 0)
}
s(Ata, $L);
yr(SF, function (a) {
    return new Ata(a)
});
ZL.set(0, function (a, b) {
    return new XL(a, b)
});

function aM(a) {
    O.call(this, QF, a)
}
s(aM, O);
aM.prototype.a = function (a) {
    var b = this.A;
    ou(b) && this.pa(new iL(b, a.tblRA))
};

function Bta(a) {
    return new aM(a)
}
yr(QF, Bta);

function bM(a) {
    O.call(this, NF, a)
}
s(bM, O);
bM.prototype.a = function (a) {
    var b = a.url,
        c = a.text;
    a = this.A;
    var d = new nb(0, 0),
        e = Dv(a, d),
        g = new nb(0, 0),
        h = Dv(a, g);
    (h == 0 && Hv(a, g) || h == 1) && wr(a, new P(d.start), i, new P(d.end + 1));
    d.end = d.start + c.length - 1;
    this.pa(new UJ(a, c));
    a: {
        c = a.a;
        for (g = d.start; g <= d.end; g++) if (Gg(c, g) && !Hg(c, g)) {
            c = i;
            break a
        }
        c = l
    }
    if (c) {
        c = {};
        c.lnk_type = 0;
        c.ulnk_url = b;
        b = {};
        b.lnks_link = c;
        this.na(new AG(ch, d.start, d.end, b));
        b = LK();
        this.na(new AG(ih, d.start, d.end, b));
        e == 2 ? wr(a, new P(d.end + 1, i), i) : wr(a, new P(d.end + 1), i, new P(d.start))
    }
};
yr(NF, function (a) {
    return new bM(a)
});

function cM(a) {
    O.call(this, ZF, a)
}
s(cM, O);
cM.prototype.a = function (a) {
    var b = this.A.ra().Fa();
    if (b.O() == 1) {
        var c = a.ePM;
        this.na(new PG(b.ma(), c));
        a = a.spi;
        this.na(new NG(b.ma(), a))
    }
};
yr(ZF, function (a) {
    return new cM(a)
});

function dM(a) {
    O.call(this, vj, a)
}
s(dM, O);
var Cta = "You have attempted to paste too many drawings. Only the first 50 drawings will be pasted";
dM.prototype.a = function (a) {
    var b = this.A,
        c = a.pstDocSl;
    if (c) {
        var d = Ru(b.ra()),
            e = a.dss;
        if (e) c = gta(e, c, d);
        if (!(c.Y().length <= 0)) {
            this.pa(new LJ(b));
            a = (e = a.pstEmEnIm) ? {} : k;d = Ou(b, d);c = new GL(b, c, d, a);this.pa(c);wr(b, new P(d + c.f), i);
            if (e) {
                var g;
                e.Hw && Dta(e.Hw, a);
                if (e.Gv) {
                    b = e.Gv;
                    c = l;
                    d = {};
                    e = [];
                    var h = 50;
                    for (g in a) {
                        var j = a[g],
                            m = b.A.Pa(j);
                        m = m && m.O() == Lf ? m.a : k;
                        if (h < 0) break;
                        else if (m && m.O() == 2) {
                            d[j] = m;
                            c = i;
                            h--;
                            m = {};
                            m.d_id = v;
                            m.d_revision = 0;
                            var o = {};
                            o.ee_eo = m;
                            e[e.length] = new PG(j, o)
                        }
                    }
                    c && Eta(b, d);
                    h < 0 && Mp(Tq, Cta);
                    g = e
                } else g = [];
                g = g;
                for (a = 0; a < g.length; a++) this.na(g[a])
            }
        }
    }
};
yr(vj, function (a) {
    return new dM(a)
});

function eM(a) {
    O.call(this, fF, a)
}
s(eM, O);
eM.prototype.a = function (a) {
    var b = this.A,
        c = a.fndFS,
        d = !! a.fndBwd,
        e = !! a.fndMC,
        g = a.rplW,
        h = !! a.rplA,
        j = !! a.fndInc;
    if (c) {
        var m = b.ra();
        if (a = p(g)) {
            if (c == g) return;
            if (h) {
                b = this.A;
                c = BH(b.Y(), c, e);
                if (c.length > 0) {
                    var o;
                    for (e = c.length - 1; d = c[e]; e--) {
                        this.pa(new LJ(b, d));
                        o = new P(d.start);
                        g.length > 0 && this.pa(new SJ(b, g, o))
                    }
                    wr(b, o, i)
                }
                return
            }
            if (m.Kb()) {
                o = Ev(m);
                o = b.Y().slice(o.start, o.end);
                (e ? o == c : Lb(o, c) == 0) || (a = l)
            } else a = l
        }
        o = m.Kb() ? j || a ? Ou(b, Ru(m)) : d ? Ou(b, Ru(m)) - 1 : Ou(b, Pu(m)) + 1 : m.Fa().a;o = Fta(this, c, e, d, o);
        if (o != -1) if (a) {
            this.pa(new UJ(b, g));
            Fta(this, c, e, l, o) == -1 && wr(b, new P(o), i)
        }
    }
};

function Fta(a, b, c, d, e) {
    a = a.A;
    var g = a.Y();
    e = g.search(b, c, d, e);
    if (e == -1) e = g.search(b, c, d);
    e != -1 && wr(a, new P(e), i, new P(e + b.length, i));
    return e
}
yr(fF, function (a) {
    return new eM(a)
});

function fM(a) {
    O.call(this, TF, a)
}
s(fM, YL);
fM.prototype.a = function (a) {
    var b = this.A;
    a = a.spi;
    var c = b.Y().indexOf(ig, a),
        d;
    d = b.oa(Tg, a).M;
    var e = Bg(b.Y());
    this.na(new FG(a + 1, c - 1));
    this.na(new GG(a + 1, Hd));
    this.pa(ZL.execute(d, this.A, a + 1));
    wr(b, new P(c + 1 + (Bg(b.Y()) - e)), i)
};
yr(TF, function (a) {
    return new fM(a)
});

function gM(a) {
    O.call(this, LF, a)
}
s(gM, O);
var Gta = "#777777",
    Hta = "\n\n";
gM.prototype.a = function (a) {
    if (this.A.f.yF) {
        var b = a.eId;
        if (b) {
            var c = this.A,
                d = FA(c, b);
            if (d != -1) {
                b = Ju(c, d);
                var e = a.usrNm;
                a = (a.text || v) + Hd + (e ? aC + e : v);
                (d = b == d + 1) || (a = Hd + a);
                this.na(new GG(b, a));
                a = b + a.length - 1;
                if (!d) {
                    this.pa(new QL(c, b + 1));
                    a += 1
                }
                if (e) {
                    c = KK();
                    this.na(new AG(ih, b, a, c));
                    b = a - e.length - 2;
                    c = KK();
                    c.ts_fgc = Gta;
                    this.na(new AG(ih, b, a, c))
                }
            }
        }
    } else if (b = a.eId) {
        c = this.A;
        b = FA(c, b);
        if (b != -1) {
            b = Ju(c, b);
            a = a.usrNm;
            this.na(new GG(b, Hta + (a ? aC + a : v)));
            this.pa(new QL(c, b + 1));
            wr(c, new P(b + 3), i)
        }
    }
};

function Ita(a) {
    return new gM(a)
}
yr(LF, Ita);

function hM(a) {
    O.call(this, VF, a)
}
s(hM, O);
hM.prototype.a = function (a) {
    var b = this.A;
    if (ou(b)) {
        var c = a.rrSI;
        if (c) for (var d = a.rrSM, e = 0; e < c.length; e++) this.pa(new nL(b, [c[e]], d[e]));
        if (c = a.rscolI) {
            d = a.rscolWT;
            var g = a.rscolWV;
            a = a.tblST;
            for (e = 0; e < c.length; e++) {
                var h = {};
                h.col_wt = d[e];
                if (d[e] != 1) h.col_wv = g[e];
                this.pa(new pL(b, a, dg(c[e], h)))
            }
        }
    }
};

function Jta(a) {
    return new hM(a)
}
yr(VF, Jta);

function iM(a) {
    O.call(this, kF, a)
}
s(iM, O);
iM.prototype.a = function (a) {
    var b = this.A,
        c = MD(b),
        d = a.rn;
    Za(d) || (d = 1);
    if (Xv(b, c)) {
        c = c[0];
        a = b.Ub(dh, c);
        var e = a.Bb;
        a = a.yb;
        var g = b.Pa(e).Z();
        g.le_nb[ww + a].b_sn = d;
        if (lv(b.oa(dh, c)) && hI(b, c).length == 0) this.na(new PG(e, g));
        else {
            d = Ww();
            this.na(new xG(dh, d, g));
            e = JD(b, e);
            for (g = 0; g < e.length; g++) {
                var h = e[g];
                if (h >= c) {
                    var j;
                    j = b.Ub(dh, h).yb;
                    if (j < a) break;
                    if (j == a) {
                        j = {};
                        j.ls_id = d;
                        this.na(new AG(dh, h, h, j))
                    }
                }
            }
        }
    }
};
yr(kF, function (a) {
    return new iM(a)
});

function jM(a, b) {
    GJ.call(this, a);
    this.f = b
}
s(jM, GJ);
jM.prototype.a = function () {
    for (var a = this.A, b = this.f, c = MD(a), d = Ww(), e = {}, g = {}, h = 0; h < b.length; h++) g[ww + h] = b[h].Z();
    e.le_nb = g;
    this.na(new xG(dh, d, e));
    b = [];
    e = 0;
    g = Cg(a.Y(), c[0]);
    for (h = 0; h < c.length; h++) {
        var j = c[h],
            m = a.oa(eh, j);
        m = Math.max(0, Math.floor(m.Ei / 36));
        var o = h == 0 ? g : c[h - 1] + 1,
            q = isa(a.Y(), o, j);
        if (q > 0) {
            e += q;
            b.push(new nb(o, o + q - 1))
        }
        m = Math.min(m + q, 8);o = {};o.ls_id = d;o.ls_nest = m;this.na(new AG(dh, j, j, o));j = j;m = NK(m);this.na(new AG(eh, j, j, m))
    }
    if (b.length > 0) {
        c = a.ra().Fa();
        d = a.ra().Dc;
        for (e = b.length - 1; e >= 0; e--) this.pa(new LJ(a, b[e], undefined, undefined, undefined, i, c.O() == zr.fO ? c.f : l,
        d.O() == zr.fO ? d.f : l))
    }
};
jM.prototype.q = function () {
    jM.p.q.call(this);
    delete this.f
};

function kM(a) {
    O.call(this, lF, a)
}
s(kM, O);
kM.prototype.a = function (a) {
    var b = this.A,
        c = MD(b),
        d = a.ordered;
    a = a.bulGlyph;
    for (var e = !Za(a), g = 0; e && g < c.length; g++) {
        var h = b.Ub(dh, c[g]),
            j = h.Bb;
        if (!j || si(Zv(b.Pa(j), h.yb)) != d) e = l
    }
    if (e) this.pa(new OJ(b));
    else {
        if (c.length == 1 && !QD(b, c[0])) {
            e = Gu(b);
            h = e - 1;
            g = this.A;
            if (h < 1) g = k;
            else if (h = g.Ub(dh, h)) if (j = h.Bb) {
                g = Zv(g.Pa(j), h.yb);
                g = si(g) == d && (!p(a) || g.Fj == a) ? h : k
            } else g = k;
            else g = k;
            if (g) {
                b = c[0];
                d = g;
                c = this.A;
                a = d.Z();
                this.na(new AG(dh, b, b, a));
                d = NK(d.yb);
                this.na(new AG(eh, b, b, d));
                b = isa(c.Y(), e, b);
                b > 0 && this.pa(new LJ(c, new nb(e, e + b - 1), undefined, undefined, undefined, i));
                return
            }
        }
        g = Ru(b.ra());
        h = Py(b, ih, g);
        e = h.Z();
        e.ts_un = l;
        if (Cv(Py(b, ch, g))) {
            g = h.ea(Xh);
            h = LK().ts_fgc;
            if (g == h) e.ts_fgc = zsa(Xh)
        }
        g = b.Ub(dh, c[0]);
        a = tw(d, e, a, g.Bb ? g.yb : 0);
        if (Yv(b, c)) {
            d = {};
            for (e = 0; e < a.length; e++) d[ww + e] = a[e].Z();
            a = {};
            e = lv(b.oa(dh, c[0]));
            a: {
                g = this.A;
                h = c[0];
                j = c[c.length - 1];
                for (var m = PB(g.g, dh), o = 0; o < m.length; o++) {
                    var q = m[o];
                    if (q < h || q > j) if (lv(g.Ub(dh, q)) == e) {
                        g = l;
                        break a
                    }
                }
                g = i
            }
            if (g) a = d;
            else for (g = 0; g < c.length; g++) {
                h = ww + b.Ub(dh, c[g]).yb;
                a[h] = d[h]
            }
            b = {};b.le_nb = a;this.na(new PG(e, b))
        } else this.pa(new jM(b, a))
    }
};
yr(lF, function (a) {
    return new kM(a)
});

function lM(a) {
    O.call(this, DF, a)
}
s(lM, O);
lM.prototype.a = function (a) {
    var b = a.eId;
    if (this.A.Pa(b)) {
        var c = {};
        c.d_id = a.dId;
        c.d_revision = a.dRev;
        a = {};
        a.ee_eo = c;
        this.na(new PG(b, a))
    }
};
yr(DF, function (a) {
    return new lM(a)
});

function mM(a) {
    O.call(this, $F, a)
}
s(mM, O);
mM.prototype.a = function (a) {
    var b = a.eId,
        c = a.posd ? ut : Lf,
        d = a.view;
    if (a = this.A.Pa(b)) if (c != a.O()) {
        var e = a.a.Z();
        a = {};
        a.ee_eo = e;
        if (c == Lf) {
            d = this.A;
            c = FA(d, b);
            this.pa(new JJ(d, b));
            b = Cg(d.Y(), c);
            this.pa(new SL(d, a, b));
            wr(d, new P(b), i)
        } else {
            c = this.A;
            b = FA(c, b);
            if (!pu(c, b)) if (!nu(c.Y(), b, hg, ig)) {
                this.pa(new LJ(c, new nb(b, b)));
                e = Ww();
                this.pa(new $K(c, d, b, a, e));
                wr(c, new Uw(e), i)
            }
        }
    }
};
yr($F, function (a) {
    return new mM(a)
});

function nM(a) {
    O.call(this, EF, a)
}
s(nM, O);
nM.prototype.a = function (a) {
    var b = a.eId;
    if (this.A.Pa(b)) {
        var c = a.size;
        a = a.pos;
        var d = Ge.N(),
            e = {};
        e.i_wth = c.width / Ye(d);
        e.i_ht = c.height / Ye(d);
        c = {};
        c.ee_eo = e;
        if (a) {
            c.pe_lo = a.offsetLeft / Ye(d);
            c.pe_to = a.offsetTop / Ye(d)
        }
        this.na(new PG(b, c));
        a && this.na(new NG(b, a.tM))
    }
};
yr(EF, function (a) {
    return new nM(a)
});
var oM = "upImage";

function pM(a) {
    O.call(this, oM, a)
}
s(pM, O);
pM.prototype.a = function (a) {
    var b = a.eId;
    a = a.imgProps;
    if (this.A.Pa(b)) {
        var c = {};
        c.ee_eo = a;
        this.na(new PG(b, c))
    }
};
pM.prototype.jC = function () {
    return []
};
yr(oM, function (a) {
    return new pM(a)
});

function qM(a) {
    O.call(this, dG, a)
}
s(qM, O);
qM.prototype.a = function (a) {
    var b;
    b = a.tSI;
    var c = a.tSA;
    a = a.tSO;
    var d = this.A;
    d = Th(d.oa(eh, d.ra().Fa().a));
    if (d[b].Mm == a && d[b].ii() == c) b = [];
    else {
        var e = [],
            g = {};
        if (p(c)) g.tbs_al = c;
        if (p(a)) g.tbs_of = a;
        c = dg(b, g);
        e.push(c);
        for (c = 0; c < d.length; c++) if (c != b && d[c].Mm == a) {
            e.push(cg(c));
            break
        }
        b = e
    }
    for (a = 0; a < b.length; a++) {
        c = {};
        c.ps_ts = b[a];
        this.pa(new HJ(this.A, c, i))
    }
};
yr(dG, function (a) {
    return new qM(a)
});

function Kta(a, b) {
    dz.call(this, a, b)
}
s(Kta, dz);

function rM(a, b, c) {
    this.f = a;
    this.A = b;
    this.V = c;
    this.a = new Kta(b, c);
    this.L = new ze(this)
}
s(rM, t);
rM.prototype.g = function (a) {
    var b = a.a;
    a = a.M;
    switch (b.O()) {
    case wD:
        jz(this.a, b.qc(), a.a);
        break;
    case xD:
        a = b.Y().length;
        a > 0 && fz(this.a, b.a, a);
        break;
    case ED:
        iz(this.a, b.qc(), b.Se());
        break
    }
};
var Lta = "kix-diffoverlayprovider-insertion-overlay";
rM.prototype.n = function (a) {
    return Mta(this, a, this.a.a.eq(), Lta)
};
var Nta = "kix-diffoverlayprovider-style-change-overlay";
rM.prototype.u = function (a) {
    return Mta(this, a, this.a.f.eq(), Nta)
};

function Mta(a, b, c, d) {
    a = [];
    for (var e = 0; e < c.length; e++) {
        var g = ob(b, c[e]);
        g && a.push(new jx(g, d))
    }
    return a
}
rM.prototype.q = function () {
    rM.p.q.call(this);
    this.a.G();
    delete this.a;
    this.L.G();
    delete this.L;
    delete this.f;
    delete this.A
};

function sM(a, b) {
    this.f = new ze(this);
    this.g = new $v(this);
    this.vg = {};
    this.n = b || Eb(el, Ji, LD);
    this.vg.enabled = function (d, e, g, h, j) {
        d.la( !! j)
    };
    this.vg.hint = this.K;
    this.vg.value = function (d, e, g, h, j) {
        gb(d.zb) && d.zb(j)
    };
    this.vg.visible = function (d, e, g, h, j) {
        d.X( !! j)
    };
    this.vg.selected = function (d, e, g, h, j) {
        d.Vc & 16 && tM(d, j)
    };
    for (var c in this.n) this.vg[c] = this.u;
    a && Bb(this.vg, a)
}
s(sM, t);
sM.prototype.q = function () {
    sM.p.q.call(this);
    this.f.G();
    this.g.G();
    delete this.f;
    delete this.g;
    delete this.vg;
    delete this.n
};
var Ota = "-accel";
sM.prototype.u = function (a, b, c) {
    var d = [],
        e = c.pc(el);
    e && el in b && d.push(Pta(this, a, e));
    (e = c.pc(Ji)) && Ji in b && d.push(a.J().F(Ne, {
        "class": a.zc().Ca() + Ota
    }, Qta(this, e)));
    if ((c = c.pc(LD)) && LD in b) {
        b = c;
        b = z.Qw(c) ? c.cloneNode(i) : a.J().createTextNode(String(c));d.push(b)
    }
    uM(a, d)
};
var vM = "hint",
    Rta = " (";
sM.prototype.K = function (a, b, c) {
    if (a.Ti) {
        if (b = c.pc(vM)) if (c = c.Ue()) b += Rta + Qta(this, c) + Of;
        a.Ti(b || v)
    }
};
var Sta = "-icon";

function Pta(a, b, c) {
    a = b.zc().Ca() + Sta;
    return Tta(c, b.J(), a)
}
var Uta = "docs-icon-img-container ",
    Vta = "docs-icon goog-inline-block";

function Tta(a, b, c, d) {
    b = b || z.J();
    var e = {};
    e[kd] = Uta + a;
    if (d) e.title = d;
    return b.F(sd, {
        "class": Vta + (c ? x + c : v)
    }, b.F(sd, e))
}
var Wta = "\u21e7",
    Xta = "\u2325";

function Qta(a, b) {
    if ($a(b)) b = b[0];
    for (var c in Yta) b = b.replace(RegExp(c, ioa), Yta[c]);
    if (y.Fc) {
        b = b.replace(/Ctrl\+/g, Rq);
        b = b.replace(/Shift\+/g, Wta);
        b = b.replace(/Alt\+/g, Xta)
    }
    return b
}
var Yta = {
    left: "\u2190",
    up: "\u2191",
    right: "\u2192",
    down: "\u2193"
};
sM.prototype.a = function (a, b, c, d) {
    var e = c || Zta,
        g = d || Pa;
    $ta(this, a, b, e);
    this.g.Za(b, Li, function (h, j, m) {
        !a.wj && h in e && this.vg[h].call(this, a, e, b, h, j, m)
    });
    this.f.C(a, Mi, function (h) {
        Ni(b, g(h))
    });
    if (Hi in e && a.Vc & 16) {
        wM(a, 16, i);
        this.f.C(a, [IK, ssa], function (h) {
            b.setProperty(Hi, h.type == IK)
        })
    }
};

function $ta(a, b, c, d) {
    eb(c.pc(Hi)) && gb(b.M) && b.M(i);
    var e = b.OE;
    for (var g in d) if (g in a.vg) {
        if (g in a.n) if (e) continue;
        else e = i;
        a.vg[g].call(a, b, d, c, g, c.pc(g), k)
    }
}
var Zta = Eb(Fi, Ki, Gi),
    aua = Eb(Fi, vM, LD, Hi, Ki, Gi),
    bua = Eb(Fi, el, Ji, LD, Hi, Ki, Gi);
Eb(Fi, vM, Ki, Gi);
var xM = Eb(Fi, vM, el, Ki, Gi);

function yM(a, b) {
    if (!a) f(Error("Invalid class name " + a));
    if (!gb(b)) f(Error("Invalid decorator function " + b));
    zM[a] = b
}
var cua = {},
    zM = {};

function AM() {}
var BM;
Qa(AM);

function dua(a, b) {
    var c = new a;
    c.Ca = function () {
        return b
    };
    return c
}
n = AM.prototype;
n.Wl = function () {};
n.F = function (a) {
    return a.J().F(A, CM(this, a).join(x), a.Pc())
};
n.Od = function (a) {
    return a
};

function DM(a, b, c, d) {
    if (b = b.z ? b.z() : b) if (y.ia && !y.Xb(gj)) {
        a = EM(a, z.ba.get(b), c);
        a.push(c);
        kb(d ? z.ba.add : z.ba.remove,
        b).apply(k, a)
    } else z.ba.md(b, c, d)
}
n.Vl = function () {
    return i
};
n.gc = function (a, b) {
    b.id && vra(a, b.id);
    var c = this.Od(b);
    c && c.firstChild ? a.Pp(c.firstChild.nextSibling ? Ac(c.childNodes) : c.firstChild) : a.Pp(k);
    var d = 0,
        e = this.Ca(),
        g = this.Ca(),
        h = l,
        j = l;c = l;
    var m = z.ba.get(b);kc(m, function (u) {
        if (!h && u == e) {
            h = i;
            if (g == e) j = i
        } else if (!j && u == g) j = i;
        else d |= this.TA(u)
    }, this);a.Zl = d;
    if (!h) {
        m.push(e);
        if (g == e) j = i
    }
    j || m.push(g);
    var o = a.Fl;o && m.push.apply(m, o);
    if (y.ia && !y.Xb(gj)) {
        var q = EM(this, m);
        if (q.length > 0) {
            m.push.apply(m, q);
            c = i
        }
    }
    if (!h || !j || o || c) z.ba.set(b, m.join(x));
    return b
};
n.hh = function (a) {
    jK(a) && this.LI(a.z(), i);
    a.Ab() && this.os(a, a.Da())
};

function eua(a, b) {
    if (y.Ua) {
        var c = a.Wl();
        c && z.qb.Mh(b, c)
    }
}
n.lB = function (a, b) {
    PK(a, !b, !y.ia && !y.Gc)
};
n.LI = function (a, b) {
    DM(this, a, this.Ca() + Bk, b)
};
n.KI = function (a) {
    var b;
    if (a.Vc & 32 && (b = a.z())) return z.NJ(b);
    return l
};
n.os = function (a, b) {
    var c;
    if (a.Vc & 32 && (c = a.z())) {
        if (!b && FM(a, 32)) {
            try {
                c.blur()
            } catch (d) {}
            FM(a, 32) && a.Ze(k)
        }
        z.NJ(c) != b && z.iE(c, b)
    }
};
n.X = function (a, b) {
    Qf(a, b)
};
n.Ka = function (a, b, c) {
    var d = a.z();
    if (d) {
        var e = this.Qr(b);
        e && DM(this, a, e, c);
        this.kq(d, b, c)
    }
};
var fua = "disabled",
    gua = "pressed",
    hua = "checked",
    iua = "expanded";
n.kq = function (a, b, c) {
    if (y.Ua) {
        BM || (BM = Db(1, fua, 4, gua, 8, Hi, 16, hua, 64, iua));
        (b = BM[b]) && z.qb.Ka(a, b, c)
    }
};
var jua = "nodeType";
n.Xl = function (a, b) {
    var c = this.Od(a);
    if (c) {
        z.Jh(c);
        if (b) if (cb(b)) z.Ud(c, b);
        else {
            var d = function (e) {
                if (e) {
                    var g = z.wb(c);
                    c.appendChild(cb(e) ? g.createTextNode(e) : e)
                }
            };
            if ($a(b)) kc(b, d);
            else ab(b) && !(jua in b) ? kc(Ac(b), d) : d(b)
        }
    }
};
var kua = "goog-control";
n.Ca = function () {
    return kua
};

function CM(a, b) {
    var c = a.Ca(),
        d = [c],
        e = a.Ca();
    e != c && d.push(e);
    c = b.tb();
    for (e = []; c;) {
        var g = c & -c;
        e.push(a.Qr(g));
        c &= ~g
    }
    d.push.apply(d, e);
    (c = b.Fl) && d.push.apply(d, c);
    y.ia && !y.Xb(gj) && d.push.apply(d, EM(a, d));
    return d
}
function EM(a, b, c) {
    var d = [];
    if (c) b = b.concat([c]);
    kc([], function (e) {
        if (pc(e, kb(sc, b)) && (!c || sc(e, c))) d.push(e.join(pJ))
    });
    return d
}
n.Qr = function (a) {
    this.a || lua(this);
    return this.a[a]
};
n.TA = function (a) {
    if (!this.g) {
        this.a || lua(this);
        this.g = Osa(this.a)
    }
    a = parseInt(this.g[a], 10);
    return isNaN(a) ? 0 : a
};
var GM = "-disabled",
    mua = "-hover",
    nua = "-active",
    oua = "-selected",
    pua = "-checked",
    qua = "-focused",
    rua = "-open";

function lua(a) {
    var b = a.Ca();
    a.a = Db(1, b + GM, 2, b + mua, 4, b + nua, 8, b + oua, 16, b + pua, 32, b + qua, 64, b + rua)
};

function HM(a, b, c) {
    Qo.call(this, c);
    if (!(b = b)) {
        b = this.constructor;
        for (var d; b;) {
            d = ib(b);
            if (d = cua[d]) break;
            b = b.p ? b.p.constructor : k
        }
        b = d ? gb(d.N) ? d.N() : new d : k
    }
    this.f = b;
    this.Pp(a)
}
s(HM, Qo);
n = HM.prototype;
n.lc = k;
n.Zl = 0;
n.Vc = 39;
n.CG = 255;
n.By = 0;
n.kb = i;
n.Fl = k;
n.uB = i;
n.qz = l;

function IM(a, b) {
    a.cb && b != a.uB && sua(a, b);
    a.uB = b
}
n.zc = function () {
    return this.f
};
n.F = function () {
    var a = this.f.F(this);
    this.sb(a);
    eua(this.f, a);
    this.qz || this.f.lB(a, l);
    this.Da() || this.f.X(a, l)
};
n.db = function () {
    return this.f.Od(this.z())
};
n.We = function (a) {
    return this.f.Vl(a)
};
n.ob = function (a) {
    a = this.f.gc(this, a);
    this.sb(a);
    eua(this.f, a);
    this.qz || this.f.lB(a, l);
    this.kb = a.style.display != Hf
};
n.ga = function () {
    HM.p.ga.call(this);
    this.f.hh(this);
    if (this.Vc & -2) {
        this.uB && sua(this, i);
        if (this.Vc & 32) {
            var a = this.z();
            if (a) {
                var b = this.dd || (this.dd = new SD);
                TD(b, a);
                So(this).C(b, ZD, this.ti).C(a, Ao, this.PT).C(a, yo, this.Ze)
            }
        }
    }
};

function sua(a, b) {
    var c = So(a),
        d = a.z();
    if (b) {
        c.C(d, Rd, a.Yl).C(d, Co, a.ui).C(d, Go, a.ss).C(d, Sd, a.rs);
        y.ia && c.C(d, ME, a.WI)
    } else {
        c.a(d, Rd, a.Yl).a(d, Co, a.ui).a(d, Go, a.ss).a(d, Sd, a.rs);
        y.ia && c.a(d, ME, a.WI)
    }
}
n.pb = function () {
    HM.p.pb.call(this);
    this.dd && YD(this.dd);
    this.Da() && this.Ab() && this.f.os(this, l)
};
n.q = function () {
    HM.p.q.call(this);
    if (this.dd) {
        this.dd.G();
        delete this.dd
    }
    delete this.f;
    this.Fl = this.lc = k
};
n.Pc = function () {
    return this.lc
};

function uM(a, b) {
    a.f.Xl(a.z(), b);
    a.Pp(b)
}
n.Pp = function (a) {
    this.lc = a
};

function tua(a, b) {
    var c = a.Pc();
    if (!c || cb(c)) return c;
    return (c = $a(c) ? nc(c, b).join(v) : z.$c(c)) && Jb(c)
}
n.lo = function () {
    return tua(this, z.$c)
};
n.Mt = function (a) {
    uM(this, a)
};
n.Da = function () {
    return this.kb
};
var JM = "show",
    KM = "hide";
n.X = function (a, b) {
    if (b || this.kb != a && this.dispatchEvent(a ? JM : KM)) {
        var c = this.z();
        c && this.f.X(c, a);
        this.Ab() && this.f.os(this, a);
        this.kb = a;
        return i
    }
    return l
};
n.Ab = function () {
    return !FM(this, 1)
};
n.la = function (a) {
    var b = this.ib;
    if (!(b && typeof b.Ab == Ua && !b.Ab()) && LM(this, 1, !a)) {
        if (!a) {
            MM(this, l);
            this.gd(l)
        }
        this.Da() && this.f.os(this, a);
        this.Ka(1, !a)
    }
};
n.gd = function (a) {
    LM(this, 2, a) && this.Ka(2, a)
};

function MM(a, b) {
    LM(a, 4, b) && a.Ka(4, b)
}
n.hd = function (a) {
    LM(this, 8, a) && this.Ka(8, a)
};

function tM(a, b) {
    LM(a, 16, b) && a.Ka(16, b)
}
n.$b = function (a) {
    LM(this, 64, a) && this.Ka(64, a)
};
n.tb = function () {
    return this.Zl
};

function FM(a, b) {
    return !!(a.Zl & b)
}
n.Ka = function (a, b) {
    if (this.Vc & a && b != FM(this, a)) {
        this.f.Ka(this, a, b);
        this.Zl = b ? this.Zl | a : this.Zl & ~a
    }
};

function NM(a, b, c) {
    if (a.cb && FM(a, b) && !c) f(Error(Yo));
    !c && FM(a, b) && a.Ka(b, l);
    a.Vc = c ? a.Vc | b : a.Vc & ~b
}
function OM(a, b) {
    return !!(a.CG & b) && !! (a.Vc & b)
}
function wM(a, b, c) {
    a.By = c ? a.By | b : a.By & ~b
}
function LM(a, b, c) {
    return !!(a.Vc & b) && FM(a, b) != c && (!(a.By & b) || a.dispatchEvent(tsa(b, c))) && !a.wj
}
n.Yl = function (a) {
    !uua(a, this.z()) && this.dispatchEvent(Ui) && this.Ab() && OM(this, 2) && this.gd(i)
};
var vua = "leave";
n.rs = function (a) {
    if (!uua(a, this.z()) && this.dispatchEvent(vua)) {
        OM(this, 4) && MM(this, l);
        OM(this, 2) && this.gd(l)
    }
};

function uua(a, b) {
    return !!a.Ve && z.contains(b, a.Ve)
}
n.ui = function (a) {
    if (this.Ab()) {
        OM(this, 2) && this.gd(i);
        if (Vd(a, 0)) {
            OM(this, 4) && MM(this, i);
            this.f.KI(this) && this.z().focus()
        }
    }!this.qz && Vd(a, 0) && a.preventDefault()
};
n.ss = function (a) {
    if (this.Ab()) {
        OM(this, 2) && this.gd(i);
        FM(this, 4) && this.Kf(a) && OM(this, 4) && MM(this, l)
    }
};
n.WI = function (a) {
    this.Ab() && this.Kf(a)
};
var wua = "altKey",
    xua = "ctrlKey",
    yua = "metaKey",
    zua = "shiftKey",
    Aua = "platformModifierKey";
n.Kf = function (a) {
    OM(this, 16) && tM(this, !FM(this, 16));
    OM(this, 8) && this.hd(i);
    OM(this, 64) && this.$b(!FM(this, 64));
    var b = new Pd(Mi, this);
    if (a) for (var c = [wua, xua, yua, zua, Aua], d, e = 0; d = c[e]; e++) b[d] = a[d];
    return this.dispatchEvent(b)
};
n.PT = function () {
    OM(this, 32) && LM(this, 32, i) && this.Ka(32, i)
};
n.Ze = function () {
    OM(this, 4) && MM(this, l);
    OM(this, 32) && LM(this, 32, l) && this.Ka(32, l)
};
n.ti = function (a) {
    if (this.Da() && this.Ab() && this.ww(a)) {
        a.preventDefault();
        a.stopPropagation();
        return i
    }
    return l
};
n.ww = function (a) {
    return a.keyCode == 13 && this.Kf(a)
};
if (!gb(HM)) f(Error("Invalid component class " + HM));
if (!gb(AM)) f(Error("Invalid renderer class " + AM));
var Bua = ib(HM);
cua[Bua] = AM;
yM(kua, function () {
    return new HM(k)
});

function PM() {}
s(PM, AM);
Qa(PM);
PM.prototype.F = function (a) {
    return a.J().F(A, this.Ca())
};
PM.prototype.gc = function (a, b) {
    if (b.tagName == wd) {
        var c = b;
        b = this.F(a);
        z.No(b, c);
        z.removeNode(c)
    } else z.ba.add(b, this.Ca());
    return b
};
PM.prototype.Xl = function () {};
var QM = "goog-menuseparator";
PM.prototype.Ca = function () {
    return QM
};

function RM(a, b) {
    HM.call(this, k, a || PM.N(), b);
    NM(this, 1, l);
    NM(this, 2, l);
    NM(this, 4, l);
    NM(this, 32, l);
    this.Zl = 1
}
s(RM, HM);
var SM = "separator";
RM.prototype.ga = function () {
    RM.p.ga.call(this);
    z.qb.Mh(this.z(), SM)
};
yM(QM, function () {
    return new RM
});

function TM() {}
Qa(TM);
n = TM.prototype;
n.uw = function () {};

function UM(a, b, c) {
    if (b) b.tabIndex = c ? 0 : -1
}
n.F = function (a) {
    return a.J().F(A, this.iB(a).join(x))
};
n.hB = function (a) {
    return a.tagName == sd
};

function Cua(a, b, c) {
    c.id && vra(b, c.id);
    var d = a.Ca(),
        e = l,
        g = z.ba.get(c);
    g && kc(g, function (h) {
        if (h == d) e = i;
        else h && this.lE(b, h, d)
    }, a);
    e || z.ba.add(c, d);
    Dua(a, b, c);
    return c
}
var Eua = "-horizontal",
    VM = "horizontal",
    Fua = "-vertical";
n.lE = function (a, b, c) {
    if (b == c + GM) a.la(l);
    else if (b == c + Eua) WM(a, VM);
    else b == c + Fua && WM(a, aa)
};

function Dua(a, b, c, d) {
    if (c) {
        d = d || c.firstChild;
        for (var e; d && d.parentNode == c;) {
            e = d.nextSibling;
            if (d.nodeType == 1) {
                var g = a.Hl(d);
                if (g) {
                    g.sb(d);
                    b.Ab() || g.la(l);
                    b.ya(g);
                    Zo(g, d)
                }
            } else if (!d.nodeValue || Jb(d.nodeValue) == v) c.removeChild(d);
            d = e
        }
    }
}
n.Hl = function (a) {
    a: {
        for (var b = z.ba.get(a), c = 0, d = b.length; c < d; c++) if (a = b[c] in zM ? zM[b[c]]() : k) {
            a = a;
            break a
        }
        a = k
    }
    return a
};
n.jB = function (a) {
    a = a.z();
    PK(a, i, y.Ua);
    if (y.ia) a.hideFocus = i;
    var b = this.uw();
    b && z.qb.Mh(a, b)
};
var XM = "goog-container";
n.Ca = function () {
    return XM
};
n.iB = function (a) {
    var b = this.Ca(),
        c = [b, a.Kj == VM ? b + Eua : b + Fua];
    a.Ab() || c.push(b + GM);
    return c
};
n.jI = function () {
    return aa
};

function YM(a, b, c) {
    Qo.call(this, c);
    this.kg = b || TM.N();
    this.Kj = a || this.kg.jI()
}
s(YM, Qo);
n = YM.prototype;
n.UJ = k;
n.dd = k;
n.kg = k;
n.Kj = k;
n.kb = i;
n.Tl = i;
n.Ul = i;
n.zf = -1;
n.fd = k;
n.Hh = l;
n.RP = l;
n.F0 = i;
n.kj = k;

function ZM(a) {
    return a.UJ || a.z()
}
n.zc = function () {
    return this.kg
};
n.F = function () {
    this.sb(this.kg.F(this))
};
n.db = function () {
    return this.z()
};
n.We = function (a) {
    return this.kg.hB(a)
};
n.ob = function (a) {
    this.sb(Cua(this.kg, this, a));
    if (a.style.display == Hf) this.kb = l
};
n.ga = function () {
    YM.p.ga.call(this);
    $o(this, function (b) {
        b.cb && Gua(this, b)
    }, this);
    var a = this.z();
    this.kg.jB(this);
    this.X(this.kb, i);
    So(this).C(this, Ui, this.sB).C(this, FK, this.MT).C(this, GK, this.OT).C(this, aF, this.FW).C(this, Kp, this.DU).C(a, Co, this.NT).C(z.wb(a), Go, this.aV).C(a, [Co, Go, Rd, Sd], this.wU);
    this.Ul && Hua(this, i)
};

function Hua(a, b) {
    var c = So(a),
        d = ZM(a);
    b ? c.C(d, Ao, a.kB).C(d, yo, a.Ze).C(a.dd || (a.dd = new SD(ZM(a))), ZD, a.vw) : c.a(d, Ao, a.kB).a(d, yo, a.Ze).a(a.dd || (a.dd = new SD(ZM(a))), ZD, a.vw)
}
n.pb = function () {
    $M(this, -1);
    this.fd && this.fd.$b(l);
    this.Hh = l;
    YM.p.pb.call(this)
};
n.q = function () {
    YM.p.q.call(this);
    if (this.dd) {
        this.dd.G();
        this.dd = k
    }
    this.kg = this.fd = this.kj = k
};
n.sB = function () {
    return i
};
n.MT = function (a) {
    var b = iK(this, a.target);
    if (b > -1 && b != this.zf) {
        var c = aN(this);
        c && c.gd(l);
        this.zf = b;
        c = aN(this);
        this.Hh && MM(c, i);
        if (this.F0 && this.fd && c != this.fd) c.Vc & 64 ? c.$b(i) : this.fd.$b(l)
    }
    z.qb.Ka(this.z(), wo, a.target.z().id)
};
n.OT = function (a) {
    if (a.target == aN(this)) this.zf = -1;
    z.qb.Ka(this.z(), wo, v)
};
n.FW = function (a) {
    if ((a = a.target) && a != this.fd && a.ib == this) {
        this.fd && this.fd.$b(l);
        this.fd = a
    }
};
n.DU = function (a) {
    if (a.target == this.fd) this.fd = k
};
n.NT = function (a) {
    if (this.Tl) this.Hh = i;
    var b = ZM(this),
        c;
    a: {
        if (b) if ((c = b.getAttributeNode(Id)) && c.specified) {
            c = b.tabIndex;
            c = fb(c) && c >= 0;
            break a
        }
        c = l
    }
    c ? b.focus() : a.preventDefault()
};
n.aV = function () {
    this.Hh = l
};
n.wU = function (a) {
    var b;
    a: {
        b = a.target;
        if (this.kj) for (var c = this.z(); b && b.parentNode && b != c;) {
            var d = b.id;
            if (d in this.kj) {
                b = this.kj[d];
                break a
            }
            b = b.parentNode
        }
        b = k
    }
    if (b) switch (a.type) {
    case Co:
        b.ui(a);
        break;
    case Go:
        b.ss(a);
        break;
    case Rd:
        b.Yl(a);
        break;
    case Sd:
        b.rs(a);
        break
    }
};
n.kB = function () {};
n.Ze = function () {
    $M(this, -1);
    this.Hh = l;
    this.fd && this.fd.$b(l)
};
n.vw = function (a) {
    if (this.Ab() && this.Da() && (ap(this) != 0 || this.UJ) && Iua(this, a)) {
        a.preventDefault();
        a.stopPropagation();
        return i
    }
    return l
};

function Iua(a, b) {
    var c = aN(a);
    if (c && typeof c.ti == Ua && c.ti(b)) return i;
    if (a.fd && a.fd != c && typeof a.fd.ti == Ua && a.fd.ti(b)) return i;
    switch (b.keyCode) {
    case 27:
        if (a.Ul) ZM(a).blur();
        else return l;
        break;
    case 36:
        Jua(a);
        break;
    case 35:
        Kua(a);
        break;
    case 38:
        if (a.Kj == aa) bN(a);
        else return l;
        break;
    case 37:
        if (a.Kj == VM) jK(a) ? cN(a) : bN(a);
        else return l;
        break;
    case 40:
        if (a.Kj == aa) cN(a);
        else return l;
        break;
    case 39:
        if (a.Kj == VM) jK(a) ? bN(a) : cN(a);
        else return l;
        break;
    default:
        return l
    }
    return i
}

function Gua(a, b) {
    var c = b.z();
    c = c.id || (c.id = b.ma());
    if (!a.kj) a.kj = {};
    a.kj[c] = b
}
n.ya = function (a, b) {
    YM.p.ya.call(this, a, b)
};
n.fj = function (a, b, c) {
    wM(a, 2, i);
    wM(a, 64, i);
    if (this.Ul || !this.RP) NM(a, 32, l);
    IM(a, l);
    YM.p.fj.call(this, a, b, c);
    c && this.cb && Gua(this, a);
    b <= this.zf && this.zf++
};
n.removeChild = function (a, b) {
    if (a = cb(a) ? Vo(this, a) : a) {
        var c = iK(this, a);
        if (c != -1) if (c == this.zf) a.gd(l);
        else c < this.zf && this.zf--;
        (c = a.z()) && c.id && vb(this.kj, c.id)
    }
    a = YM.p.removeChild.call(this, a, b);
    IM(a, i);
    return a
};

function WM(a, b) {
    if (a.z()) f(Error(Yo));
    a.Kj = b
}
n.Da = function () {
    return this.kb
};
var Lua = "aftershow";
n.X = function (a, b) {
    if (b || this.kb != a && this.dispatchEvent(a ? JM : KM)) {
        this.kb = a;
        var c = this.z();
        if (c) {
            Qf(c, a);
            this.Ul && UM(this.kg, ZM(this), this.Tl && this.kb);
            b || this.dispatchEvent(this.kb ? Lua : zp)
        }
        return i
    }
    return l
};
n.Ab = function () {
    return this.Tl
};
n.la = function (a) {
    if (this.Tl != a && this.dispatchEvent(a ? osa : EK)) {
        if (a) {
            this.Tl = i;
            $o(this, function (b) {
                if (b.TM) delete b.TM;
                else b.la(i)
            })
        } else {
            $o(this, function (b) {
                if (b.Ab()) b.la(l);
                else b.TM = i
            });
            this.Hh = this.Tl = l
        }
        this.Ul && UM(this.kg, ZM(this), a && this.kb)
    }
};

function dN(a, b) {
    b != a.Ul && a.cb && Hua(a, b);
    a.Ul = b;
    a.Tl && a.kb && UM(a.kg, ZM(a), b)
}
function $M(a, b) {
    var c = bp(a, b);
    if (c) c.gd(i);
    else a.zf > -1 && aN(a).gd(l)
}
n.gd = function (a) {
    $M(this, iK(this, a))
};

function aN(a) {
    return bp(a, a.zf)
}

function Jua(a) {
    eN(a, function (b, c) {
        return (b + 1) % c
    }, ap(a) - 1)
}
function Kua(a) {
    eN(a, function (b, c) {
        b--;
        return b < 0 ? c - 1 : b
    }, 0)
}
function cN(a) {
    eN(a, function (b, c) {
        return (b + 1) % c
    }, a.zf)
}
function bN(a) {
    eN(a, function (b, c) {
        b--;
        return b < 0 ? c - 1 : b
    }, a.zf)
}
function eN(a, b, c) {
    c = c < 0 ? iK(a, a.fd) : c;
    var d = ap(a);c = b.call(a, c, d);
    for (var e = 0; e <= d;) {
        var g = bp(a, c);
        if (g && a.JG(g)) {
            a.jE(c);
            return i
        }
        e++;
        c = b.call(a, c, d)
    }
    return l
}
n.JG = function (a) {
    return a.Da() && a.Ab() && !! (a.Vc & 2)
};
n.jE = function (a) {
    $M(this, a)
};

function fN() {
    this.f = []
}
s(fN, AM);
Qa(fN);
var Mua = "-highlight",
    Nua = "-checkbox";

function gN(a, b) {
    var c = a.f[b];
    if (!c) {
        switch (b) {
        case 0:
            c = a.Ca() + Mua;
            break;
        case 1:
            c = a.Ca() + Nua;
            break;
        case 2:
            c = a.Ca() + op;
            break
        }
        a.f[b] = c
    }
    return c
}
n = fN.prototype;
var Oua = "menuitem";
n.Wl = function () {
    return Oua
};
n.F = function (a) {
    var b = a.J().F(A, CM(this, a).join(x), Pua(this, a.Pc(), a.J()));
    hN(this, a, b, !! (a.Vc & 8) || !! (a.Vc & 16));
    return b
};
n.Od = function (a) {
    return a && a.firstChild
};
var iN = "goog-option";
n.gc = function (a, b) {
    var c = z.pd(b),
        d = gN(this, 2);
    c && c.className.indexOf(d) != -1 || b.appendChild(Pua(this, b.childNodes, a.J()));
    if (z.ba.Pd(b, iN)) {
        a.M(i);
        Qua(this, a, b, i)
    }
    return fN.p.gc.call(this, a, b)
};
n.Xl = function (a, b) {
    var c = this.Od(a),
        d = jN(this, a) ? c.firstChild : k;fN.p.Xl.call(this, a, b);
    if (d && !jN(this, a)) c.insertBefore(d, c.firstChild || k)
};

function Pua(a, b, c) {
    a = gN(a, 2);
    return c.F(A, a, b)
}
var Rua = "menuitemcheckbox";

function Qua(a, b, c, d) {
    if (c) {
        z.qb.Mh(c, d ? Rua : a.Wl());
        hN(a, b, c, d)
    }
}

function jN(a, b) {
    var c = a.Od(b);
    if (c) {
        c = c.firstChild;
        var d = gN(a, 1);
        return !!c && !! c.className && c.className.indexOf(d) != -1
    }
    return l
}
function hN(a, b, c, d) {
    if (d != jN(a, c)) {
        z.ba.md(c, iN, d);
        c = a.Od(c);
        if (d) {
            a = gN(a, 1);
            c.insertBefore(b.J().F(A, a), c.firstChild || k)
        } else c.removeChild(c.firstChild)
    }
}
var Sua = "goog-option-selected";
n.Qr = function (a) {
    switch (a) {
    case 2:
        return gN(this, 0);
    case 16:
    case 8:
        return Sua;
    default:
        return fN.p.Qr.call(this, a)
    }
};
n.TA = function (a) {
    var b = gN(this, 0);
    switch (a) {
    case Sua:
        return 16;
    case b:
        return 2;
    default:
        return fN.p.TA.call(this, a)
    }
};
var Tua = "goog-menuitem";
n.Ca = function () {
    return Tua
};

function kN(a, b, c, d) {
    HM.call(this, a, d || fN.N(), c);
    this.zb(b)
}
s(kN, HM);
kN.prototype.ea = function () {
    var a = this.Il();
    return a != k ? a : this.lo()
};
kN.prototype.zb = function (a) {
    this.Nt(a)
};
kN.prototype.M = function (a) {
    NM(this, 16, a);
    var b = this.z();
    b && Qua(this.f, this, b, a)
};
var Uua = "goog-menuitem-accel";
kN.prototype.lo = function () {
    return tua(this, function (a) {
        return z.ba.Pd(a, Uua) ? v : z.$c(a)
    })
};
yM(Tua, function () {
    return new kN(k)
});

function lN() {}
s(lN, TM);
Qa(lN);
n = lN.prototype;
var Vua = "menu";
n.uw = function () {
    return Vua
};
var Wua = "UL";
n.hB = function (a) {
    return a.tagName == Wua || lN.p.hB.call(this, a)
};
n.Hl = function (a) {
    return a.tagName == wd ? new RM : lN.p.Hl.call(this, a)
};
n.Ng = function (a, b) {
    return z.contains(a.z(), b)
};
var mN = "goog-menu";
n.Ca = function () {
    return mN
};
var nN = "haspopup";
n.jB = function (a) {
    lN.p.jB.call(this, a);
    a = a.z();
    z.qb.Ka(a, nN, Fq)
};

function oN(a) {
    RM.call(this, PM.N(), a)
}
s(oN, RM);
yM(QM, function () {
    return new RM
});

function pN(a, b) {
    YM.call(this, aa, b || lN.N(), a);
    dN(this, l)
}
s(pN, YM);
n = pN.prototype;
n.nB = i;
n.SP = l;
n.Ca = function () {
    return this.zc().Ca()
};
n.Ng = function (a) {
    if (this.zc().Ng(this, a)) return i;
    for (var b = 0, c = ap(this); b < c; b++) {
        var d = bp(this, b);
        if (typeof d.Ng == Ua && d.Ng(a)) return i
    }
    return l
};
n.xd = function (a) {
    this.ya(a, i)
};
n.removeItem = function (a) {
    (a = this.removeChild(a, i)) && a.G()
};
n.Vr = function () {
    return this.bd || []
};

function qN(a, b) {
    (a.nB = b) && dN(a, i)
}
n.X = function (a, b) {
    var c = pN.p.X.call(this, a, b);
    c && a && this.cb && this.nB && ZM(this).focus();
    return c
};
n.sB = function (a) {
    this.nB && ZM(this).focus();
    return pN.p.sB.call(this, a)
};
n.JG = function (a) {
    return (this.SP || a.Ab()) && a.Da() && !! (a.Vc & 2)
};
n.ob = function (a) {
    for (var b = this.zc(), c = this.J().oc(A, b.Ca() + op, a), d, e = 0; d = c[e]; e++) Dua(b, this, d);
    pN.p.ob.call(this, a)
};
var Xua = "menuitemradio";

function rN(a, b, c) {
    kN.call(this, a, b, c);
    NM(this, 8, i);
    FM(this, 16) && 0 && tM(this, l);
    if (a = this.z()) {
        b = this.f;
        if (a) {
            z.qb.Mh(a, Xua);
            hN(b, this, a, i)
        }
    }
}
s(rN, kN);
rN.prototype.Kf = function () {
    return this.dispatchEvent(Mi)
};
yM(iN, function () {
    return new rN(k)
});

function sN() {}
s(sN, PM);
Qa(sN);
var Yua = " goog-inline-block",
    tN = "\u00a0";
sN.prototype.F = function (a) {
    return a.J().F(A, this.Ca() + Yua, tN)
};
sN.prototype.gc = function (a, b) {
    b = sN.p.gc.call(this, a, b);
    z.ba.add(b, jy);
    return b
};
var Zua = "goog-toolbar-separator";
sN.prototype.Ca = function () {
    return Zua
};

function uN() {}
s(uN, TM);
Qa(uN);
var $ua = "toolbar";
uN.prototype.uw = function () {
    return $ua
};
uN.prototype.Hl = function (a) {
    return a.tagName == wd ? new RM(sN.N()) : uN.p.Hl.call(this, a)
};
var vN = "goog-toolbar";
uN.prototype.Ca = function () {
    return vN
};
uN.prototype.jI = function () {
    return VM
};

function wN(a, b, c) {
    YM.call(this, b, a || uN.N(), c)
}
s(wN, YM);

function xN() {}
s(xN, AM);
Qa(xN);
n = xN.prototype;
n.Wl = function () {
    return up
};
n.kq = function (a, b, c) {
    if (y.Ua) b == 16 ? z.qb.Ka(a, gua, c) : xN.p.kq.call(this, a, b, c)
};
n.F = function (a) {
    var b = xN.p.F.call(this, a),
        c = a.xf();
    c && this.Ti(b, c);
    (c = a.ea()) && this.zb(b, c);
    a.Vc & 16 && this.kq(b, 16, l);
    return b
};
n.gc = function (a, b) {
    b = xN.p.gc.call(this, a, b);
    var c = this.ea(b);
    a.u = c;
    a.qy(this.xf(b));
    a.Vc & 16 && this.kq(b, 16, l);
    return b
};
n.ea = Pa;
n.zb = Pa;
n.xf = function (a) {
    return a.title
};
n.Ti = function (a, b) {
    if (a) a.title = b || v
};
var ava = "goog-button";
n.Ca = function () {
    return ava
};

function yN() {}
s(yN, xN);
Qa(yN);
n = yN.prototype;
n.Wl = function () {};
n.F = function (a) {
    bva(this, a);
    return a.J().F(up, {
        "class": CM(this, a).join(x),
        disabled: !a.Ab(),
        title: a.xf() || v,
        value: a.ea() || v
    }, a.lo() || v)
};
var zN = "submit",
    cva = "reset";
n.Vl = function (a) {
    return a.tagName == dk || a.tagName == yd && (a.type == up || a.type == zN || a.type == cva)
};
n.gc = function (a, b) {
    bva(this, a);
    b.disabled && z.ba.add(b, this.Qr(1));
    return yN.p.gc.call(this, a, b)
};
n.hh = function (a) {
    So(a).C(a.z(), Ud, a.Kf)
};
n.lB = Pa;
n.LI = Pa;
n.KI = function (a) {
    return a.Ab()
};
n.os = Pa;
n.Ka = function (a, b, c) {
    yN.p.Ka.call(this, a, b, c);
    if ((a = a.z()) && b == 1) a.disabled = c
};
n.ea = function (a) {
    return a.value
};
n.zb = function (a, b) {
    if (a) a.value = b
};
n.kq = Pa;

function bva(a, b) {
    IM(b, l);
    b.CG &= -256;
    NM(b, 32, l)
};

function AN(a, b, c) {
    HM.call(this, a, b || yN.N(), c)
}
s(AN, HM);
n = AN.prototype;
n.ea = function () {
    return this.u
};
n.zb = function (a) {
    this.u = a;
    this.zc().zb(this.z(), a)
};
n.xf = function () {
    return this.n
};
n.Ti = function (a) {
    this.n = a;
    this.zc().Ti(this.z(), a)
};
n.qy = function (a) {
    this.n = a
};
n.q = function () {
    AN.p.q.call(this);
    delete this.u;
    delete this.n
};
n.ga = function () {
    AN.p.ga.call(this);
    if (this.Vc & 32) {
        var a = this.z();
        a && So(this).C(a, Sj, this.ww)
    }
};
n.ww = function (a) {
    if (a.keyCode == 13 && a.type == ZD || a.keyCode == 32 && a.type == Sj) return this.Kf(a);
    return a.keyCode == 32
};
yM(ava, function () {
    return new AN(k)
});

function BN() {}
s(BN, xN);
Qa(BN);
n = BN.prototype;
var CN = "goog-inline-block ";
n.F = function (a) {
    var b = {
        "class": CN + CM(this, a).join(x),
        title: a.xf() || v
    };
    return a.J().F(A, b, this.jr(a.Pc(), a.J()))
};
n.Od = function (a) {
    return a && a.firstChild.firstChild
};
var DN = "-outer-box",
    EN = "-inner-box";
n.jr = function (a, b) {
    return b.F(A, CN + (this.Ca() + DN), b.F(A, CN + (this.Ca() + EN), a))
};
n.Vl = function (a) {
    return a.tagName == sd
};
n.yJ = function (a, b) {
    var c = a.J().pd(b);
    if (c && c.className.indexOf(this.Ca() + DN) != -1) if ((c = a.J().pd(c)) && c.className.indexOf(this.Ca() + EN) != -1) return i;
    return l
};
n.gc = function (a, b) {
    dva(b, i);
    dva(b, l);
    this.yJ(a, b) || b.appendChild(this.jr(b.childNodes, a.J()));
    z.ba.add(b, jy, this.Ca());
    return BN.p.gc.call(this, a, b)
};
var FN = "goog-custom-button";
n.Ca = function () {
    return FN
};

function dva(a, b) {
    if (a) for (var c = b ? a.firstChild : a.lastChild,
        d;c && c.parentNode == a;) {
        d = b ? c.nextSibling : c.previousSibling;
        if (c.nodeType == 3) {
            var e = c.nodeValue;
            if (Jb(e) == v) a.removeChild(c);
            else {
                c.nodeValue = b ? Kb(e) : e.replace(/[\s\xa0]+$/, v);
                break
            }
        } else break;c = d
    }
};

function GN() {}
s(GN, BN);
Qa(GN);
var HN = "goog-toolbar-button";
GN.prototype.Ca = function () {
    return HN
};

function eva(a, b, c) {
    AN.call(this, a, b || GN.N(), c)
}
s(eva, AN);
yM(HN, function () {
    return new eva(k)
});
var IN = "HTML",
    fva = "BODY";

function JN(a, b, c, d, e, g, h, j) {
    var m, o = c.offsetParent;
    if (o) {
        var q = o.tagName == IN || o.tagName == fva;
        if (!q || rf(o) != Af) {
            m = Df(o);
            q || (m = zK(m, new bd(o.scrollLeft, o.scrollTop)))
        }
    }
    o = QK(a);
    if (q = RK(a)) {
        var u = new mf(q.left, q.top, q.right - q.left, q.bottom - q.top);
        q = Math.max(o.left, u.left);
        var w = Math.min(o.left + o.width, u.left + u.width);
        if (q <= w) {
            var C = Math.max(o.top, u.top);
            u = Math.min(o.top + o.height, u.top + u.height);
            if (C <= u) {
                o.left = q;
                o.top = C;
                o.width = w - q;
                o.height = u - C
            }
        }
    }
    q = z.J(a);
    C = z.J(c);
    if (q.Va() != C.Va()) {
        w = q.Va().body;
        C =
        C.fc();
        u = new bd(0, 0);
        var B = z.fc(z.wb(w)),
            H = w;
        do {
            var I = B == C ? Df(H) : Ef(H);u.x += I.x;u.y += I.y
        }
        while (B && B != C && (H = B.frameElement) && (B = B.parent));
        C = u;
        C = zK(C, Df(w));
        if (y.ia && !q.Ro()) C = zK(C, q.hg());
        o.left += C.x;
        o.top += C.y
    }
    a = (b & 4 && cK(a) ? b ^ 2 : b) & -5;
    b = new bd(a & 2 ? o.left + o.width : o.left,
    a & 1 ? o.top + o.height : o.top);
    if (m) b = zK(b, m);
    if (e) {
        b.x += (a & 2 ? -1 : 1) * e.x;
        b.y += (a & 1 ? -1 : 1) * e.y
    }
    var T;
    if (h) if ((T = RK(c)) && m) {
        T.top = Math.max(0, T.top - m.y);
        T.right -= m.x;
        T.bottom -= m.y;
        T.left = Math.max(0, T.left - m.x)
    }
    return KN(b, c, d, g, T, h, j)
}

function KN(a, b, c, d, e, g, h) {
    a = a.sa();
    var j = 0,
        m = (c & 4 && cK(b) ? c ^ 2 : c) & -5;
    c = Mf(b);
    h = h ? h.sa() : c;
    if (d || m != 0) {
        if (m & 2) a.x -= h.width + (d ? d.right : 0);
        else if (d) a.x += d.left;
        if (m & 1) a.y -= h.height + (d ? d.bottom : 0);
        else if (d) a.y += d.top
    }
    if (g) {
        if (e) {
            d = a;
            j = 0;
            if (d.x < e.left && g & 1) {
                d.x = e.left;
                j |= 1
            }
            if (d.x < e.left && d.x + h.width > e.right && g & 16) {
                h.width -= d.x + h.width - e.right;
                j |= 4
            }
            if (d.x + h.width > e.right && g & 1) {
                d.x = Math.max(e.right - h.width, e.left);
                j |= 1
            }
            if (g & 2) j |= (d.x < e.left ? 16 : 0) | (d.x + h.width > e.right ? 32 : 0);
            if (d.y < e.top && g & 4) {
                d.y = e.top;
                j |= 2
            }
            if (d.y >= e.top && d.y + h.height > e.bottom && g & 32) {
                h.height -= d.y + h.height - e.bottom;
                j |= 8
            }
            if (d.y + h.height > e.bottom && g & 4) {
                d.y = Math.max(e.bottom - h.height, e.top);
                j |= 2
            }
            if (g & 8) j |= (d.y < e.top ? 64 : 0) | (d.y + h.height > e.bottom ? 128 : 0);
            e = j
        } else e = 256;
        j = e;
        if (j & 496) return j
    }
    uf(b, a);dd(c, h) || Ff(b, h);
    return j
};

function LN() {}
LN.prototype.a = function () {};

function MN(a, b) {
    this.f = a;
    this.g = b
}
s(MN, LN);
MN.prototype.a = function (a, b, c) {
    JN(this.f, this.g, a, b, undefined, c)
};

function NN(a, b, c) {
    MN.call(this, a, b);
    this.n = c
}
s(NN, MN);
NN.prototype.a = function (a, b, c, d) {
    var e = JN(this.f, this.g, a, b, k, c, 10, d);
    if (e & 496) {
        var g = this.g,
            h = b;
        if (e & 48) {
            g ^= 2;
            h ^= 2
        }
        if (e & 192) {
            g ^= 1;
            h ^= 1
        }
        e = JN(this.f, g, a, h, k, c, 10, d);
        if (e & 496) this.n ? JN(this.f, this.g, a, b, k, c, 5, d) : JN(this.f, this.g, a, b, k, c, 0, d)
    }
};

function ON(a, b, c, d) {
    NN.call(this, a, b, c);
    this.u = d
}
s(ON, NN);
ON.prototype.a = function (a, b, c, d) {
    this.u ? JN(this.f, this.g, a, b, k, c, 33, d) : ON.p.a.call(this, a, b, c, d)
};

function PN() {}
s(PN, BN);
Qa(PN);
if (y.Ua) PN.prototype.Xl = function (a, b) {
    var c = PN.p.Od.call(this, a && a.firstChild);
    c && z.Dt(this.ps(b, z.J(a)), c)
};
n = PN.prototype;
n.Od = function (a) {
    a = PN.p.Od.call(this, a && a.firstChild);
    if (y.Ua && a && a.__goog_wrapper_div) a = a.firstChild;
    return a
};
n.gc = function (a, b) {
    var c = z.oc(hd, mN, b)[0];
    if (c) {
        Qf(c, l);
        z.appendChild(z.wb(c).body, c);
        var d = new pN;
        Zo(d, c);
        a.Td(d)
    }
    return PN.p.gc.call(this, a, b)
};
var gva = "-dropdown";
n.jr = function (a, b) {
    return PN.p.jr.call(this, [this.ps(a, b), b.F(A, CN + (this.Ca() + gva), tN)], b)
};
n.ps = function (a, b) {
    return hva(a, this.Ca(), b)
};
var iva = "-caption";

function hva(a, b, c) {
    return c.F(A, CN + (b + iva), a)
}
var jva = "goog-menu-button";
n.Ca = function () {
    return jva
};

function QN(a, b, c, d) {
    AN.call(this, a, c || PN.N(), d);
    NM(this, 64, i);
    b && this.Td(b);
    this.Ta = new Kj(500)
}
s(QN, AN);
n = QN.prototype;
n.pz = i;
n.hy = l;
n.$B = l;
n.ga = function () {
    QN.p.ga.call(this);
    this.a && RN(this, this.a, i);
    z.qb.Ka(this.z(), nN, Fq)
};
n.pb = function () {
    QN.p.pb.call(this);
    if (this.a) {
        this.$b(l);
        this.a.pb();
        RN(this, this.a, l);
        var a = this.a.z();
        a && z.removeNode(a)
    }
};
n.q = function () {
    QN.p.q.call(this);
    if (this.a) {
        this.a.G();
        delete this.a
    }
    this.Ta.G()
};
n.ui = function (a) {
    QN.p.ui.call(this, a);
    if (FM(this, 4)) {
        this.$b(!FM(this, 64));
        if (this.a) this.a.Hh = FM(this, 64)
    }
};
n.ss = function (a) {
    QN.p.ss.call(this, a);
    if (this.a && !FM(this, 4)) this.a.Hh = l
};
n.Kf = function () {
    MM(this, l);
    return i
};
n.$U = function (a) {
    this.a && this.a.Da() && !this.Ng(a.target) && this.$b(l)
};
n.Ng = function (a) {
    return a && z.contains(this.z(), a) || this.a && this.a.Ng(a) || l
};
n.ww = function (a) {
    if (a.type != (a.keyCode == 32 ? Sj : ZD)) return l;
    if (this.a && this.a.Da()) {
        var b = this.a.vw(a);
        if (a.keyCode == 27) {
            this.$b(l);
            return i
        }
        return b
    }
    if (a.keyCode == 40 || a.keyCode == 38 || a.keyCode == 32) {
        this.$b(i);
        return i
    }
    return l
};
n.qs = function () {
    this.$b(l)
};
n.lW = function () {
    FM(this, 4) || this.$b(l)
};
n.Ze = function (a) {
    this.$B || this.$b(l);
    QN.p.Ze.call(this, a)
};
n.gb = function () {
    this.a || this.Td(new pN(this.J()));
    return this.a || k
};
n.Td = function (a) {
    var b = this.a;
    if (a != b) {
        if (b) {
            this.$b(l);
            this.cb && RN(this, b, l);
            delete this.a
        }
        if (a) {
            this.a = a;
            Uo(a, this);
            a.X(l);
            qN(a, this.$B);
            this.cb && RN(this, a, i)
        }
    }
    return b
};
n.xd = function (a) {
    this.gb().ya(a, i)
};
n.removeItem = function (a) {
    (a = this.gb().removeChild(a, i)) && a.G()
};
n.mB = function (a) {
    var b = this.gb();
    (a = b.removeChild(bp(b, a), i)) && a.G()
};

function SN(a) {
    return a.a ? ap(a.a) : 0
}
n.X = function (a, b) {
    var c = QN.p.X.call(this, a, b);
    c && !this.Da() && this.$b(l);
    return c
};
n.la = function (a) {
    QN.p.la.call(this, a);
    this.Ab() || this.$b(l)
};
n.$b = function (a) {
    QN.p.$b.call(this, a);
    if (this.a && FM(this, 64) == a) {
        if (a) {
            this.a.cb || this.a.Ja();
            this.aa = RK(this.z());
            this.P = QK(this.z());
            this.FD();
            $M(this.a, -1)
        } else {
            MM(this, l);
            this.a.Hh = l;
            if (Za(this.g)) {
                this.g = undefined;
                var b = this.a.z();
                b && Ff(b, v, v)
            }
        }
        this.a.X(a);
        b = So(this);
        var c = a ? b.C : b.a;c.call(b, this.J().Va(), Co, this.$U, i);this.$B && c.call(b, this.a, yo, this.lW);c.call(b, this.Ta, Nj, this.y0);a ? this.Ta.start() : Mj(this.Ta)
    }
};
n.FD = function () {
    if (this.a.cb) {
        var a = this.pz ? 5 : 7;a = new ON(this.z(), a, !this.hy, this.hy);
        var b = this.a.z();
        if (!this.a.Da()) {
            b.style.visibility = Kf;
            Qf(b, i)
        }
        if (!this.g && this.hy) this.g = Mf(b);a.a(b, this.pz ? 4 : 6,
        k,
        this.g);
        if (!this.a.Da()) {
            Qf(b, l);
            b.style.visibility = Gi
        }
    }
};
n.y0 = function () {
    var a = QK(this.z()),
        b = RK(this.z()),
        c;
    if (!(c = !nf(this.P, a))) {
        c = this.aa;
        c = c == b ? i : !c || !b ? l : c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left;c = !c
    }
    if (c) {
        this.P = a;
        this.aa = b;
        this.FD()
    }
};

function RN(a, b, c) {
    var d = So(a);
    c = c ? d.C : d.a;c.call(d, b, Mi, a.qs);c.call(d, b, FK, a.TT);c.call(d, b, GK, a.UT)
}
n.TT = function (a) {
    z.qb.Ka(this.z(), wo, a.target.z().id)
};
n.UT = function () {
    aN(this.a) || z.qb.Ka(this.z(), wo, v)
};
yM(jva, function () {
    return new QN(k)
});

function TN(a) {
    this.a = [];
    kva(this, a)
}
s(TN, Pi);
n = TN.prototype;
n.Kh = k;
n.aE = k;

function kva(a, b) {
    if (b) {
        kc(b, function (c) {
            this.Mp(c, l)
        }, a);
        Bc(a.a, b)
    }
}
n.xd = function (a) {
    var b = this.a.length;
    if (a) {
        this.Mp(a, l);
        wc(this.a, b, 0, a)
    }
};
n.removeItem = function (a) {
    if (a && xc(this.a, a)) if (a == this.Kh) {
        this.Kh = k;
        this.dispatchEvent(HK)
    }
};
n.mi = function () {
    return this.Kh
};

function UN(a, b) {
    if (b != a.Kh) {
        a.Mp(a.Kh, l);
        a.Kh = b;
        a.Mp(b, i)
    }
    a.dispatchEvent(HK)
}
function VN(a) {
    return a.Kh ? jc(a.a, a.Kh) : -1
}
n.clear = function () {
    tc(this.a);
    this.Kh = k
};
n.q = function () {
    TN.p.q.call(this);
    delete this.a;
    this.Kh = k
};
n.Mp = function (a, b) {
    if (a) if (typeof this.aE == Ua) this.aE(a, b);
    else typeof a.hd == Ua && a.hd(b)
};

function WN(a, b, c, d) {
    QN.call(this, a, b, c, d);
    this.zv = a;
    XN(this)
}
s(WN, QN);
n = WN.prototype;
n.Ia = k;
n.zv = k;
n.ga = function () {
    WN.p.ga.call(this);
    XN(this)
};
n.ob = function (a) {
    WN.p.ob.call(this, a);
    if (a = this.lo()) {
        this.zv = a;
        XN(this)
    } else YN(this, 0)
};
n.q = function () {
    WN.p.q.call(this);
    if (this.Ia) {
        this.Ia.G();
        this.Ia = k
    }
    this.zv = k
};
n.qs = function (a) {
    ZN(this, a.target);
    WN.p.qs.call(this, a);
    a.stopPropagation();
    this.dispatchEvent(Mi)
};
n.aU = function () {
    var a = this.mi();
    WN.p.zb.call(this, a && a.ea());
    XN(this)
};
n.Td = function (a) {
    var b = WN.p.Td.call(this, a);
    if (a != b) {
        this.Ia && this.Ia.clear();
        if (a) this.Ia ? $o(a, function (c) {
            this.Ia.xd(c)
        }, this) : lva(this, a)
    }
    return b
};
n.xd = function (a) {
    WN.p.xd.call(this, a);
    this.Ia ? this.Ia.xd(a) : lva(this, this.gb())
};
n.removeItem = function (a) {
    WN.p.removeItem.call(this, a);
    this.Ia && this.Ia.removeItem(a)
};
n.mB = function (a) {
    WN.p.mB.call(this, a);
    if (this.Ia) {
        var b = this.Ia;
        b.removeItem(b.a[a] || k)
    }
};

function ZN(a, b) {
    a.Ia && UN(a.Ia, b)
}
function YN(a, b) {
    a.Ia && ZN(a, a.Ia.a[b] || k)
}
n.zb = function (a) {
    if (Za(a) && this.Ia) for (var b = 0, c; c = this.Ia.a[b] || k; b++) if (c && typeof c.ea == Ua && c.ea() == a) {
        ZN(this, c);
        return
    }
    ZN(this, k)
};
n.mi = function () {
    return this.Ia ? this.Ia.mi() : k
};

function $N(a) {
    return a.Ia ? VN(a.Ia) : -1
}
function lva(a, b) {
    a.Ia = new TN;
    b && $o(b, function (c) {
        this.Ia.xd(c)
    }, a);
    So(a).C(a.Ia, HK, a.aU)
}
function XN(a) {
    var b = a.mi();
    uM(a, b ? b.lo() : a.zv)
}
n.$b = function (a) {
    WN.p.$b.call(this, a);
    FM(this, 64) && $M(this.gb(), $N(this))
};
yM("goog-select", function () {
    return new WN(k)
});

function aO() {}
s(aO, PN);
Qa(aO);
var bO = "goog-toolbar-menu-button";
aO.prototype.Ca = function () {
    return bO
};

function mva(a, b, c, d) {
    WN.call(this, a, b, c || aO.N(), d)
}
s(mva, WN);
var nva = "goog-toolbar-select";
yM(nva, function () {
    return new mva(k)
});
var ova = "MMM d",
    cO = {
        FN: ["BC", "AD"],
        EN: ["Before Christ", "Anno Domini"],
        yO: [ba, ca, Nv, XB, Nv, ba, ba, XB, da, ea, Ix, Ov],
        $O: [ba, ca, Nv, XB, Nv, ba, ba, XB, da, ea, Ix, Ov],
        qO: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        ZO: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        UO: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        bP: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        EP: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dP: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        WO: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        cP: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        b4: [da, Nv, fa, ga, fa, ca, da],
        aP: [da, Nv, fa, ga, fa, ca, da],
        VO: ["Q1", "Q2", "Q3", "Q4"],
        IO: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        dN: ["AM", "PM"],
        qF: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
        aG: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
        a3: {
            Md: "M/d",
            MMMMd: "MMMM d",
            MMMd: ova
        },
        v3: 6,
        J4: [5, 6],
        w3: 2
    };

function pva() {}
var qva = "Etc/GMT",
    rva = "UTC";

function dO(a) {
    if (typeof a == Sa) {
        var b = new pva;
        b.a = a;
        var c;
        c = a;
        if (c == 0) c = qva;
        else {
            var d = [qva, c < 0 ? SB : Xj];
            c = Math.abs(c);
            d.push(Math.floor(c / 60) % 100);
            c %= 60;
            c != 0 && d.push(Sf, UK(c, 2));
            c = d.join(v)
        }
        b.n = c;
        a = a;
        if (a == 0) a = rva;
        else {
            c = [rva, a < 0 ? Xj : SB];
            a = Math.abs(a);
            c.push(Math.floor(a / 60) % 100);
            a %= 60;
            a != 0 && c.push(Sf, a);
            a = c.join(v)
        }
        b.g = [a, a];
        b.f = [];
        return b
    }
    b = new pva;
    b.n = a.id;
    b.a = -a.std_offset;
    b.g = a.names;
    b.f = a.transitions;
    return b
}

function eO(a, b) {
    for (var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0; d < a.f.length && c >= a.f[d];) d += 2;
    return d == 0 ? 0 : a.f[d - 1]
};

function fO(a) {
    this.a = [];
    typeof a == Sa ? sva(this, a) : tva(this, a)
}
var uva = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvzZ]+/],
    vva = "''";

function tva(a, b) {
    for (; b;) for (var c = 0; c < uva.length; ++c) {
        var d = b.match(uva[c]);
        if (d) {
            d = d[0];
            b = b.substring(d.length);
            if (c == 0) if (d == vva) d = nw;
            else {
                d = d.substring(1, d.length - 1);
                d = d.replace(/\'\'/, nw)
            }
            a.a.push({
                text: d,
                type: c
            });
            break
        }
    }
}
fO.prototype.nd = function (a, b) {
    var c = b ? (a.getTimezoneOffset() - (b.a - eO(b, a))) * 6E4 : 0,
        d = c ? new Date(a.getTime() + c) : a,
        e = d;
    if (b && d.getTimezoneOffset() != a.getTimezoneOffset()) {
        c += c > 0 ? -864E5 : 864E5;e = new Date(a.getTime() + c)
    }
    c = [];
    for (var g = 0; g < this.a.length; ++g) {
        var h = this.a[g].text;
        1 == this.a[g].type ? c.push(wva(this, h, a, d, e, b)) : c.push(h)
    }
    return c.join(v)
};

function sva(a, b) {
    var c;
    if (b < 4) c = cO.qF[b];
    else if (b < 8) c = cO.aG[b - 4];
    else if (b < 12) c = cO.qF[b - 8] + x + cO.aG[b - 8];
    else {
        sva(a, 10);
        return
    }
    tva(a, c)
}
var xva = "GMT";

function wva(a, b, c, d, e, g) {
    a = b.length;
    switch (b.charAt(0)) {
    case ha:
        c = d.getFullYear() > 0 ? 1 : 0;
        return a >= 4 ? cO.EN[c] : cO.FN[c];
    case Ej:
        c = d.getFullYear();
        if (c < 0) c = -c;
        return a == 2 ? UK(c % 100, 2) : String(c);
    case Nv:
        a: {
            c = d.getMonth();
            switch (a) {
            case 5:
                a = cO.yO[c];
                break a;
            case 4:
                a = cO.qO[c];
                break a;
            case 3:
                a = cO.UO[c];
                break a;
            default:
                a = UK(c + 1, a);
                break a
            }
        }
        return a;
    case rj:
        return UK(e.getHours() || 24, a);
    case da:
        return (e.getTime() % 1E3 / 1E3).toFixed(Math.min(3, a)).substr(2) + (a > 3 ? UK(0, a - 3) : v);
    case ia:
        c = d.getDay();
        return a >= 4 ? cO.EP[c] : cO.WO[c];
    case ij:
        a = e.getHours();
        return cO.dN[a >= 12 && a < 24 ? 1 : 0];
    case oj:
        return UK(e.getHours() % 12 || 12, a);
    case ja:
        return UK(e.getHours() % 12, a);
    case ka:
        return UK(e.getHours(), a);
    case kj:
        a: {
            c = d.getDay();
            switch (a) {
            case 5:
                a = cO.aP[c];
                break a;
            case 4:
                a = cO.dP[c];
                break a;
            case 3:
                a = cO.cP[c];
                break a;
            default:
                a = UK(c, 1);
                break a
            }
        }
        return a;
    case Qv:
        a: {
            c = d.getMonth();
            switch (a) {
            case 5:
                a = cO.$O[c];
                break a;
            case 4:
                a = cO.ZO[c];
                break a;
            case 3:
                a = cO.bP[c];
                break a;
            default:
                a = UK(c + 1, a);
                break a
            }
        }
        return a;
    case la:
        c = Math.floor(d.getMonth() / 3);
        return a < 4 ? cO.VO[c] : cO.IO[c];
    case lj:
        return UK(d.getDate(), a);
    case tj:
        return UK(e.getMinutes(), a);
    case yj:
        return UK(e.getSeconds(), a);
    case Bj:
        a = (a = g) || dO(c.getTimezoneOffset());
        return a.n;
    case Fj:
        b = (b = g) || dO(c.getTimezoneOffset());
        return a < 4 ? b.g[eO(b, c) > 0 ? 2 : 0] : b.g[eO(b, c) > 0 ? 3 : 1];
    case na:
        b = (b = g) || dO(c.getTimezoneOffset());
        if (a < 4) {
            a = -(b.a - eO(b, c));
            c = [a < 0 ? SB : Xj];
            a = Math.abs(a);
            c.push(UK(Math.floor(a / 60) % 100, 2), UK(a % 60, 2));
            a = c.join(v)
        } else {
            a = b.a - eO(b, c);
            c = [xva];
            c.push(a <= 0 ? Xj : SB);
            a = Math.abs(a);
            c.push(UK(Math.floor(a / 60) % 100, 2), Sf, UK(a % 60, 2));
            a = c.join(v)
        }
        return a;
    default:
        return v
    }
};

function yva(a) {
    this.a = a;
    this.g = new fO(3);
    this.f = new fO(ova);
    this.n = new fO(7)
}
yva.prototype.nd = function (a) {
    return this.a.getFullYear() != a.getFullYear() ? this.g.nd(a) : this.a.getMonth() != a.getMonth() || this.a.getDate() != a.getDate() ? this.f.nd(a) : this.n.nd(a)
};
var zva = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
    Ava = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]"),
    Bva = /^http:\/\/.*/,
    Cva = /\s+/,
    Dva = /\d/;

function gO(a, b) {
    function c() {}
    c.prototype = a;
    var d = new c;
    for (var e in b) d[e] = b[e];
    return d
}
function hO(a) {
    return Vb(String(a))
};
var Eva = '<div id="docs-revisionsbar" class="docs-revisions-bar goog-toolbar"><div id="docs-revisions-close" class="goog-toolbar-button goog-inline-block">&laquo; ',
    Fva = "Back to editing",
    Gva = '</div><div id="docs-revisions-older" class="goog-toolbar-button goog-inline-block">&laquo; ',
    Hva = "Older",
    Iva = '</div><div id="docs-revisions-newer" class="goog-toolbar-button goog-inline-block">',
    Jva = "Newer",
    Kva = ' &raquo;</div><div id="docs-revisions-select" class="goog-toolbar-select goog-toolbar-menu-button goog-inline-block"></div><div id="docs-revisions-revert" class="goog-toolbar-button goog-inline-block">',
    Lva = "Revert to this one",
    iO = "</div></div>";

function Mva(a, b) {
    var c = b || new N;
    c.append(Eva, Fva, Gva, Hva, Iva, Jva, Kva, Lva, iO);
    if (!b) return c.toString()
}
var Nva = '<div><span class="docs-revisions-select-item-time docs-revisions-select-item goog-inline-block">',
    Ova = '&nbsp;</span><span class="docs-revisions-select-item-detail docs-revisions-select-item goog-inline-block">',
    Pva = "</span></div>";

function Qva(a, b) {
    var c = b || new N;
    c.append(Nva, hO(a.Hy), Ova, hO(a.detail), Pva);
    if (!b) return c.toString()
}
var Rva = '<div class="docs-revisions-centered-text"><div id="docs-revisions-zoomin" class="docs-revisions-select-item-zoom">',
    Sva = "Show more detail below",
    Tva = '</div><div id="docs-revisions-zoomout" class="docs-revisions-select-item-zoom" style="display: none;">',
    Uva = "Show less detail below";

function Vva(a, b) {
    var c = b || new N;
    c.append(Rva, Sva, Tva, Uva, iO);
    if (!b) return c.toString()
};

function jO(a) {
    YM.call(this, VM, undefined, a);
    this.g = new sM;
    this.a = k;
    this.n = 1;
    this.f = k
}
s(jO, wN);
var Wva = "docs-revisions-select",
    kO = {
        dz: Yk,
        fG: Vk,
        gG: Wk,
        Uk: Wva,
        PF: "docs-revisions-older",
        MF: "docs-revisions-newer",
        UF: Xk
    },
    Xva = /@.*/,
    Yva = "Unable to display revision",
    Zva = "Google Docs could not open this revision because of a server error or a problem with the network connection. Please try another revision or come back again later.";

function $va() {
    Mp(Yva, Zva)
}
n = jO.prototype;
n.F = function () {
    this.ob(this.J().he(Mva()))
};
n.ob = function (a) {
    jO.p.ob.call(this, a);
    this.a = Vo(this, Wva);
    var b = new pN(this.J());
    b.X(l);
    b.Ja(a);
    this.a.Td(b);
    this.a.hy = i;
    a = this.J().he(Vva());
    this.a.xd(new kN(a, undefined, this.J()));
    this.a.Mt(LB)
};
n.ga = function () {
    jO.p.ga.call(this);
    K.kz.la(i);
    var a = So(this);
    a.C(this.a, Mi, this.jX);
    a.C(Vo(this, kO.PF), Mi, this.EW);
    a.C(Vo(this, kO.MF), Mi, this.BW);
    this.g.a(Vo(this, kO.dz), K.Fq);
    this.g.a(Vo(this, kO.UF), K.Iu)
};
n.q = function () {
    jO.p.q.call(this);
    this.g.G();
    delete this.g;
    delete this.a;
    delete this.n;
    delete this.f
};

function awa(a, b, c) {
    a = a.J();
    Qf(a.z(kO.fG), b);
    Qf(a.z(kO.gG), c)
}
n.jX = function () {
    if ($N(this.a) == 0) {
        this.a.Mt(LB);
        if (this.n == 1) {
            Ni(K.lz);
            awa(this, l, i);
            this.n = 0
        } else {
            Ni(K.mz);
            awa(this, i, l);
            this.n = 1
        }
    } else lO(this)
};
n.EW = function () {
    YN(this.a, $N(this.a) + 1);
    lO(this)
};
n.BW = function () {
    YN(this.a, $N(this.a) - 1);
    lO(this)
};

function bwa(a, b, c, d, e) {
    for (var g = [], h = 0; h < b.length; h++) g.push(b[h][1] ? b[h][1].replace(Xva, v) : lr);
    b = {
        Hy: e,
        detail: g.join(hz)
    };
    b = a.J().he(Qva(b));
    a.a.xd(new kN(b, [c, d], a.J()))
}

function lO(a) {
    var b = $N(a.a),
        c = SN(a.a);
    Vo(a, kO.PF).la(b < c - 1);
    Vo(a, kO.MF).la(b > 1);
    Vo(a, kO.UF).la(b > 1);
    a.f = a.a.mi().ea();
    Ni(K.kz, a.f)
};

function mO(a, b, c) {
    Qo.call(this);
    this.f = a;
    this.g = b;
    this.a = new jO(c);
    this.ya(this.a)
}
s(mO, Qo);
n = mO.prototype;
n.va = k;
var cwa = "docs-revisions-container";
n.F = function () {
    var a = this.J();
    this.ob(a.F(sd, {
        "class": cwa
    }, a.he(Mva())))
};
n.ob = function (a) {
    mO.p.ob.call(this, a);
    Zo(this.a, z.pd(a));
    this.SD()
};
n.ga = function () {
    mO.p.ga.call(this);
    So(this).C(this.f, yp, this.SD);
    K.Fq.la(i)
};
n.pb = function () {
    mO.p.pb.call(this);
    So(this).a(this.f, yp, this.SD);
    K.Fq.la(l)
};
n.SD = function () {
    var a = Df(this.g).y,
        b = Mf(this.g),
        c = this.z();
    c.style.top = a + D;
    c.style.height = b.height + D
};
n.q = function () {
    mO.p.q.call(this);
    delete this.f;
    delete this.g;
    this.va && this.va.G();
    delete this.va;
    delete this.a
};

function nO(a, b, c) {
    this.f = a;
    this.n = b;
    this.a = k;
    this.u = c;
    this.g = new $v(this);
    this.g.Za(K.lz, Mi, this.xR);
    this.g.Za(K.mz, Mi, this.yR);
    this.g.Za(K.Iu, Mi, this.v1);
    oO(this)
}
s(nO, Pi);
n = nO.prototype;
n.l2 = 1;
n.NR = -1;
n.Dr = 0;
n.MK = 0;
n.xR = function () {
    this.Dr++;
    pO(this);
    oO(this)
};
n.yR = function () {
    this.Dr--;
    pO(this);
    oO(this)
};

function pO(a) {
    K.lz.la(a.Dr < a.MK);
    K.mz.la(a.Dr > 0)
}
var dwa = "/revisions/revert";
n.v1 = function () {
    K.Iu.la(l);
    var a = this.u.f;
    qO(this.n.Gd(dwa).Lh({
        id: this.f,
        rev: a[1]
    }).Pf(this.dX, this), this.cX, this).Ld()
};
n.dX = function () {
    Ni(K.Fq)
};
var ewa = "Unable to revert",
    fwa = "Google Docs could not revert to this revision because of a server error or a problem with the network connection. Please try again later.";
n.cX = function () {
    Mp(ewa, fwa)
};
var gwa = "/revisions/history",
    hwa = "zoom_level";

function oO(a) {
    mb(a.a);
    a.a = qO(a.n.Gd(gwa).Lk(Iv, a.f, Io, a.l2, Zi, a.NR, hwa, a.Dr).Pf(a.UW, a), a.TW, a).Ld()
}
var iwa = "docs-revisions-select-menu";
n.UW = function (a) {
    this.a = k;
    this.MK = Number(a.Cc()[1]);
    pO(this);
    K.Iu.la(i);
    var b = this.u;
    for (a = TK(a.Cc()[2]); SN(b.a) > 1;) b.a.mB(1);
    for (var c = new yva(new Date), d = a.length - 1; d >= 0; d--) {
        var e = a[d],
            g = e[1],
            h = e[2],
            j = e[3],
            m = e[5];
        if (e = e[6]) for (var o = e.length - 1; o >= 0; o--) {
            var q = e[o],
                u = q[1];
            q = q[2];
            if (u != j) {
                bwa(b, g, u + 1, j, c.nd(new Date(m)));
                j = u;
                m = q
            }
        }
        bwa(b, g, h, j, c.nd(new Date(m)))
    }
    a = b.f;
    c = 1;
    if (a) {
        for (c = 1; c < SN(b.a); c++) {
            d = (b.a.a ? bp(b.a.a, c) : k).ea();
            if (a[1] >= d[1]) break
        }
        c = Math.min(c, SN(b.a) - 1)
    }
    YN(b.a, c);
    lO(b);
    (b = b.a.gb().db()) && z.ba.add(b, iwa)
};
var jwa = "Revision history unavailable",
    kwa = "Google Docs could not display the revision history because of a server error or a problem with the network connection. Please try again later.";
n.TW = function () {
    this.a = k;
    Mp(jwa, kwa);
    Ni(K.Uk)
};
n.q = function () {
    nO.p.q.call(this);
    this.g.G();
    delete this.g;
    mb(this.a);
    delete this.a
};

function rO(a, b) {
    var c;
    if (a instanceof rO) {
        sO(this, b == k ? a.qo : b);
        tO(this, a.ah);
        uO(this, a.qn);
        vO(this, a.Tg);
        wO(this, a.nk);
        xO(this, a.yf);
        yO(this, a.a.sa());
        zO(this, a.Gl)
    } else if (a && (c = Lt(String(a)))) {
        sO(this, !! b);
        tO(this, c[1] || v, i);
        uO(this, c[2] || v, i);
        vO(this, c[3] || v, i);
        wO(this, c[4]);
        xO(this, c[5] || v, i);
        yO(this, c[6] || v, i);
        zO(this, c[7] || v, i)
    } else {
        sO(this, !! b);
        this.a = new AO(k, this, this.qo)
    }
}
n = rO.prototype;
n.ah = v;
n.qn = v;
n.Tg = v;
n.nk = k;
n.yf = v;
n.Gl = v;
n.vY = l;
n.qo = l;
n.toString = function () {
    if (this.sf) return this.sf;
    var a = [];
    this.ah && a.push(BO(this.ah, lwa), Sf);
    if (this.Tg) {
        a.push(Gt);
        this.qn && a.push(BO(this.qn, lwa), Ht);
        var b;
        b = this.Tg;
        b = cb(b) ? encodeURIComponent(b) : k;a.push(b);this.nk != k && a.push(Sf, String(this.nk))
    }
    if (this.yf) {
        this.Tg && this.yf.charAt(0) != Hj && a.push(Hj);
        a.push(BO(this.yf, mwa))
    }(b = String(this.a)) && a.push(It, b);
    this.Gl && a.push(Jt, BO(this.Gl, nwa));
    return this.sf = a.join(v)
};
var CO = "..",
    owa = "./",
    pwa = "/.";

function qwa(a, b) {
    var c = a.sa(),
        d = !! b.ah;
    if (d) tO(c, b.ah);
    else d = !! b.qn;
    if (d) uO(c, b.qn);
    else d = !! b.Tg;
    if (d) vO(c, b.Tg);
    else d = b.nk != k;
    var e = b.yf;
    if (d) wO(c, b.nk);
    else if (d = !! b.yf) {
        if (e.charAt(0) != Hj) if (a.Tg && !a.yf) e = Hj + e;
        else {
            var g = c.yf.lastIndexOf(Hj);
            if (g != -1) e = c.yf.substr(0, g + 1) + e
        }
        g = e;
        if (g == CO || g == Na) e = v;
        else if (g.indexOf(owa) == -1 && g.indexOf(pwa) == -1) e = g;
        else {
            e = Hb(g, Hj);
            g = g.split(Hj);
            for (var h = [], j = 0; j < g.length;) {
                var m = g[j++];
                if (m == Na) e && j == g.length && h.push(v);
                else if (m == CO) {
                    if (h.length > 1 || h.length == 1 && h[0] != v) h.pop();
                    e && j == g.length && h.push(v)
                } else {
                    h.push(m);
                    e = i
                }
            }
            e = h.join(Hj)
        }
    }
    if (d) xO(c, e);
    else d = b.a.toString() !== v;
    if (d) {
        e = b.a;
        if (!e.f) e.f = DO(e.toString());
        yO(c, e.f, void 0)
    } else d = !! b.Gl;
    d && zO(c, b.Gl);
    return c
}
n.sa = function () {
    return rwa(this.ah, this.qn, this.Tg, this.nk, this.yf, this.a.sa(), this.Gl, this.qo)
};

function tO(a, b, c) {
    EO(a);
    delete a.sf;
    a.ah = c ? DO(b) : b;
    if (a.ah) a.ah = a.ah.replace(/:$/, v);
    return a
}
function uO(a, b, c) {
    EO(a);
    delete a.sf;
    a.qn = c ? DO(b) : b;
    return a
}

function vO(a, b, c) {
    EO(a);
    delete a.sf;
    a.Tg = c ? DO(b) : b;
    return a
}
function wO(a, b) {
    EO(a);
    delete a.sf;
    if (b) {
        b = Number(b);
        if (isNaN(b) || b < 0) f(Error("Bad port number " + b));
        a.nk = b
    } else a.nk = k;
    return a
}
function xO(a, b, c) {
    EO(a);
    delete a.sf;
    a.yf = c ? DO(b) : b;
    return a
}
function yO(a, b, c) {
    EO(a);
    delete a.sf;
    if (b instanceof AO) {
        a.a = b;
        a.a.n = a;
        swa(a.a, a.qo)
    } else {
        c || (b = BO(b, twa));
        a.a = new AO(b, a, a.qo)
    }
    return a
}
function FO(a, b, c) {
    EO(a);
    delete a.sf;
    a.a.set(b, c);
    return a
}

function GO(a, b, c) {
    EO(a);
    delete a.sf;
    $a(c) || (c = [String(c)]);
    var d = a.a;
    b = b;
    c = c;
    HO(d);
    IO(d);
    b = JO(d, b);
    if (d.Ad(b)) {
        var e = d.Yb.get(b);
        if ($a(e)) d.Db -= e.length;
        else d.Db--
    }
    if (c.length > 0) {
        d.Yb.set(b, c);
        d.Db += c.length
    }
    return a
}
function uwa(a, b) {
    return a.a.get(b)
}
function zO(a, b, c) {
    EO(a);
    delete a.sf;
    a.Gl = c ? DO(b) : b;
    return a
}
var KO = "zx";

function LO(a) {
    EO(a);
    FO(a, KO, cc());
    return a
}
function vwa(a, b) {
    EO(a);
    a.a.remove(b);
    return a
}
function EO(a) {
    if (a.vY) f(Error("Tried to modify a read-only Uri"))
}

function sO(a, b) {
    a.qo = b;
    a.a && swa(a.a, b)
}
function rwa(a, b, c, d, e, g, h, j) {
    j = new rO(k, j);
    a && tO(j, a);
    b && uO(j, b);
    c && vO(j, c);
    d && wO(j, d);
    e && xO(j, e);
    g && yO(j, g);
    h && zO(j, h);
    return j
}
function DO(a) {
    return a ? decodeURIComponent(a) : v
}
var wwa = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;

function BO(a, b) {
    var c = k;
    if (cb(a)) {
        c = a;
        wwa.test(c) || (c = encodeURI(a));
        if (c.search(b) >= 0) c = c.replace(b, xwa)
    }
    return c
}
function xwa(a) {
    a = a.charCodeAt(0);
    return oa + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var lwa = /[#\/\?@]/g,
    mwa = /[\#\?]/g,
    twa = /[\#\?@]/g,
    nwa = /#/g;

function AO(a, b, c) {
    this.a = a || k;
    this.n = b || k;
    this.g = !! c
}
function HO(a) {
    if (!a.Yb) {
        a.Yb = new Tc;
        if (a.a) for (var b = a.a.split(Sb), c = 0; c < b.length; c++) {
            var d = b[c].indexOf(Pt),
                e = k,
                g = k;
            if (d >= 0) {
                e = b[c].substring(0, d);
                g = b[c].substring(d + 1)
            } else e = b[c];
            e = Nb(e);
            e = JO(a, e);
            a.add(e, g ? Nb(g) : v)
        }
    }
}
n = AO.prototype;
n.Yb = k;
n.Db = k;
n.$g = function () {
    HO(this);
    return this.Db
};
n.add = function (a, b) {
    HO(this);
    IO(this);
    a = JO(this, a);
    if (this.Ad(a)) {
        var c = this.Yb.get(a);
        $a(c) ? c.push(b) : this.Yb.set(a, [c, b])
    } else this.Yb.set(a, b);
    this.Db++;
    return this
};
n.remove = function (a) {
    HO(this);
    a = JO(this, a);
    if (this.Yb.Ad(a)) {
        IO(this);
        var b = this.Yb.get(a);
        if ($a(b)) this.Db -= b.length;
        else this.Db--;
        return this.Yb.remove(a)
    }
    return l
};
n.clear = function () {
    IO(this);
    this.Yb && this.Yb.clear();
    this.Db = 0
};
n.Df = function () {
    HO(this);
    return this.Db == 0
};
n.Ad = function (a) {
    HO(this);
    a = JO(this, a);
    return this.Yb.Ad(a)
};
n.Tz = function (a) {
    var b = this.Qb();
    return sc(b, a)
};
n.Ue = function () {
    HO(this);
    for (var a = this.Yb.Qb(), b = this.Yb.Ue(), c = [], d = 0; d < b.length; d++) {
        var e = a[d];
        if ($a(e)) for (var g = 0; g < e.length; g++) c.push(b[d]);
        else c.push(b[d])
    }
    return c
};
n.Qb = function (a) {
    HO(this);
    if (a) {
        a = JO(this, a);
        if (this.Ad(a)) {
            var b = this.Yb.get(a);
            if ($a(b)) return b;
            else {
                a = [];
                a.push(b)
            }
        } else a = []
    } else {
        b = this.Yb.Qb();
        a = [];
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            $a(d) ? Bc(a, d) : a.push(d)
        }
    }
    return a
};
n.set = function (a, b) {
    HO(this);
    IO(this);
    a = JO(this, a);
    if (this.Ad(a)) {
        var c = this.Yb.get(a);
        if ($a(c)) this.Db -= c.length;
        else this.Db--
    }
    this.Yb.set(a, b);
    this.Db++;
    return this
};
n.get = function (a, b) {
    HO(this);
    a = JO(this, a);
    if (this.Ad(a)) {
        var c = this.Yb.get(a);
        return $a(c) ? c[0] : c
    } else return b
};
n.toString = function () {
    if (this.a) return this.a;
    if (!this.Yb) return v;
    for (var a = [], b = 0, c = this.Yb.Ue(), d = 0; d < c.length; d++) {
        var e = c[d],
            g = Mb(e);
        e = this.Yb.get(e);
        if ($a(e)) for (var h = 0; h < e.length; h++) {
            b > 0 && a.push(Sb);
            a.push(g);
            e[h] !== v && a.push(Pt, Mb(e[h]));
            b++
        } else {
            b > 0 && a.push(Sb);
            a.push(g);
            e !== v && a.push(Pt, Mb(e));
            b++
        }
    }
    return this.a = a.join(v)
};

function IO(a) {
    delete a.f;
    delete a.a;
    a.n && delete a.n.sf
}
n.sa = function () {
    var a = new AO;
    if (this.f) a.f = this.f;
    if (this.a) a.a = this.a;
    if (this.Yb) a.Yb = this.Yb.sa();
    return a
};

function JO(a, b) {
    var c = String(b);
    if (a.g) c = c.toLowerCase();
    return c
}
function swa(a, b) {
    if (b && !a.g) {
        HO(a);
        IO(a);
        Sc(a.Yb, function (c, d) {
            var e = d.toLowerCase();
            if (d != e) {
                this.remove(d);
                this.add(e, c)
            }
        }, a)
    }
    a.g = b
}
n.CT = function () {
    for (var a = 0; a < arguments.length; a++) Sc(arguments[a], function (b, c) {
        this.add(c, b)
    }, this)
};

function MO() {}
var ywa = "XMLHTTP TEXT (",
    NO = "): ";

function OO(a, b, c, d) {
    a.info(ywa + b + NO + zwa(a, c) + (d ? x + d : v))
}
function Awa(a, b) {
    a.info(b)
}
MO.prototype.info = function () {};
var Bwa = "y2f%",
    Cwa = "noop",
    Dwa = "Exception parsing expected JS array - probably was not JS";

function zwa(a, b) {
    if (!b || b == Bwa) return b;
    try {
        for (var c = rK(b), d = 0; d < c.length; d++) if ($a(c[d])) {
            var e = c[d];
            if (!(e.length < 2)) {
                var g = e[1];
                if ($a(g)) if (!(g.length < 1)) {
                    var h = g[0];
                    if (h != kj && h != Cwa && h != oA) for (var j = 1; j < g.length; j++) g[j] = v
                }
            }
        }
        return cr(c)
    } catch (m) {
        a.info(Dwa);
        return b
    }
}
var Ewa = "=redacted&";

function Fwa(a, b) {
    if (!b) return k;
    for (var c = v, d = b.split(Sb), e = 0; e < d.length; e++) {
        var g = d[e].split(Pt);
        if (g.length > 1) {
            var h = g[0];
            g = g[1];
            var j = h.split(pJ);
            c += j.length >= 2 && j[1] == qd ? h + Pt + g + Sb : h + Ewa
        }
    }
    return c
};
var Gwa = "TestLoadImageWithRetries: ";

function Hwa(a, b, c, d, e) {
    Awa(new MO, Gwa + e);
    if (d == 0) c(l);
    else {
        var g = e || 0;
        d--;
        Iwa(a, b, function (h) {
            h ? c(i) : La.setTimeout(function () {
                Hwa(a, b, c, d, g)
            }, g)
        })
    }
}
var Jwa = "TestLoadImage: loading ",
    Kwa = "TestLoadImage: loaded",
    Lwa = "TestLoadImage: error",
    Mwa = "TestLoadImage: abort",
    Nwa = "TestLoadImage: timeout";

function Iwa(a, b, c) {
    var d = new MO;
    d.info(Jwa + a);
    var e = new Image;
    e.onload = function () {
        try {
            d.info(Kwa);
            PO(e);
            c(i)
        } catch (g) {}
    };
    e.onerror = function () {
        try {
            d.info(Lwa);
            PO(e);
            c(l)
        } catch (g) {}
    };
    e.onabort = function () {
        try {
            d.info(Mwa);
            PO(e);
            c(l)
        } catch (g) {}
    };
    e.a = function () {
        try {
            d.info(Nwa);
            PO(e);
            c(l)
        } catch (g) {}
    };
    La.setTimeout(function () {
        e.a && e.a()
    }, b);
    e.src = a
}
function PO(a) {
    a.onload = k;
    a.onerror = k;
    a.onabort = k;
    a.a = k
};

function QO(a, b, c, d, e) {
    this.wa = a;
    this.a = b;
    this.f = c;
    this.g = d;
    this.n = e || 1;
    this.M = 45E3;
    this.L = new ze(this);
    this.u = new Kj;
    this.u.setInterval(250)
}
n = QO.prototype;
n.Pl = k;
n.Oh = l;
n.oq = k;
n.PE = k;
n.Ip = k;
n.yo = k;
n.qi = k;
n.kf = k;
n.Oi = k;
n.He = k;
n.ou = 0;
n.Bg = k;
n.mq = k;
n.Ql = k;
n.ns = -1;
n.cM = i;
n.Kn = l;
var Owa = "Non-200 return code (",
    Pwa = "XMLHTTP failure (no data)",
    Qwa = "HttpConnection timeout";

function Rwa(a, b) {
    switch (a) {
    case 0:
        return Owa + b + Of;
    case 1:
        return Pwa;
    case 2:
        return Qwa;
    default:
        return Dqa
    }
}
var Swa = {},
    RO = {};
n = QO.prototype;
n.setTimeout = function (a) {
    this.M = a
};

function SO(a, b, c, d, e) {
    a.yo = 1;
    a.qi = LO(b.sa());
    a.Oi = k;
    a.K = c;
    if (e) a.cM = l;
    TO(a, d)
}
var Twa = "application/x-www-form-urlencoded",
    Uwa = "XMLHTTP REQ (",
    Vwa = ") [attempt ",
    Wwa = "]: ";

function TO(a, b) {
    a.kf = a.qi.sa();
    GO(a.kf, zj, a.n);
    a.ou = 0;
    a.He = a.wa.lr(a.wa.Tp() ? b : k);
    oe(a.He, kJ, a.XM, l, a);
    var c = a.Pl ? yb(a.Pl) : {};
    if (a.Oi) {
        a.mq = fJ;
        c[gJ] = Twa;
        a.He.send(a.kf, a.mq, a.Oi, c)
    } else {
        a.mq = eJ;
        if (a.cM && !y.La) c.Connection = Kp;
        a.He.send(a.kf, a.mq, k, c)
    }
    a.Ip = lb();c = a.a;c.info(Uwa + a.g + Vwa + a.n + Wwa + a.mq + Hd + a.kf + Hd + Fwa(c, a.Oi));UO(a)
}
var Xwa = "420+",
    Ywa = "No response text for uri ",
    Zwa = " status ",
    $wa = "XMLHTTP RESP (",
    axa = ") [ attempt ",
    bxa = "Unknown SID",
    cxa = "Failed call to OnXmlHttpReadyStateChanged_";
n.XM = function (a) {
    a = a.target;
    try {
        if (a == this.He) a: {
            var b = mJ(this.He);
            if (y.ia || y.La && !y.Xb(Xwa)) {
                if (b < 4) break a
            } else if (b < 3 || b == 3 && !y.Gc && !oJ(this.He)) break a;
            VO(this);
            var c = this.He.ce();
            this.ns = c;
            var d = oJ(this.He);
            d || this.a.info(Ywa + this.kf + Zwa + c);
            this.Oh = c == 200;
            this.a.info($wa + this.g + axa + this.n + Wwa + this.mq + Hd + this.kf + Hd + b + x + c);
            if (this.Oh) {
                b == 4 && WO(this);
                if (this.K) {
                    dxa(this, b, d);
                    if (y.Gc && b == 3) {
                        this.L.C(this.u, Nj, this.P0);
                        this.u.start()
                    }
                } else {
                    OO(this.a, this.g, d, k);
                    XO(this, d)
                }
                if (this.Oh) if (!this.Kn) if (b == 4) this.wa.Ox(this);
                else {
                    this.Oh = l;
                    UO(this)
                }
            } else {
                if (c == 400 && d.indexOf(bxa) > 0) {
                    this.Ql = 3;
                    YO(13)
                } else {
                    this.Ql = 0;
                    YO(14)
                }
                OO(this.a, this.g, d);
                WO(this);
                ZO(this)
            }
        }
    } catch (e) {
        this.a.info(cxa)
    } finally {}
};
var exa = "[Incomplete Response]",
    fxa = "[Invalid Chunk]",
    gxa = "[Invalid Chunked Response]";

function dxa(a, b, c) {
    for (var d = i; !a.Kn && a.ou < c.length;) {
        var e = hxa(a, c);
        if (e == RO) {
            if (b == 4) {
                a.Ql = 4;
                YO(15);
                d = l
            }
            OO(a.a, a.g, k, exa);
            break
        } else if (e == Swa) {
            a.Ql = 4;
            YO(16);
            OO(a.a, a.g, c, fxa);
            d = l;
            break
        } else {
            OO(a.a, a.g, e, k);
            XO(a, e)
        }
    }
    if (b == 4 && c.length == 0) {
        a.Ql = 1;
        YO(17);
        d = l
    }
    a.Oh = a.Oh && d;
    if (!d) {
        OO(a.a, a.g, c, gxa);
        WO(a);
        ZO(a)
    }
}
n.P0 = function () {
    var a = mJ(this.He),
        b = oJ(this.He);
    if (this.ou < b.length) {
        VO(this);
        dxa(this, a, b);
        this.Oh && a != 4 && UO(this)
    }
};

function hxa(a, b) {
    var c = a.ou,
        d = b.indexOf(Hd, c);
    if (d == -1) return RO;
    c = Number(b.substring(c, d));
    if (isNaN(c)) return Swa;
    d = d + 1;
    if (d + c > b.length) return RO;
    var e = b.substr(d, c);
    a.ou = d + c;
    return e
}
var ixa = "htmlfile",
    jxa = "<html>",
    kxa = '<script>document.domain="',
    lxa = '"<\/script>',
    mxa = "</html>",
    nxa = "DOMAIN",
    oxa = '<iframe src="',
    $O = '"></iframe>',
    pxa = "TRIDENT REQ (",
    qxa = "]: GET\n";

function rxa(a, b) {
    a.Bg = new ActiveXObject(ixa);
    var c = v,
        d = jxa;
    if (b) {
        c = window.location.hostname;
        d += kxa + c + lxa
    }
    d += mxa;
    a.Bg.open();
    a.Bg.write(d);
    a.Bg.close();
    a.Bg.parentWindow.m = r(a.D0, a);
    a.Bg.parentWindow.d = r(a.zL, a, i);
    a.Bg.parentWindow.rpcClose = r(a.zL, a, l);
    d = a.Bg.createElement(A);
    a.Bg.appendChild(d);
    a.kf = a.qi.sa();
    FO(a.kf, nxa, c);
    FO(a.kf, zj, a.n);
    d.innerHTML = oxa + a.kf + $O;
    a.Ip = lb();
    a.a.info(pxa + a.g + axa + a.n + qxa + a.kf);
    UO(a)
}
n.D0 = function (a) {
    aP(r(this.C0, this, a), 0)
};
var sxa = "TRIDENT TEXT (";
n.C0 = function (a) {
    if (!this.Kn) {
        var b = this.a;
        b.info(sxa + this.g + NO + zwa(b, a));
        VO(this);
        XO(this, a);
        UO(this)
    }
};
n.zL = function (a) {
    aP(r(this.B0, this, a), 0)
};
var txa = "failure";
n.B0 = function (a) {
    if (!this.Kn) {
        this.a.info(sxa + this.g + NO + a ? lJ : txa);
        VO(this);
        WO(this);
        this.Oh = a;
        this.wa.Ox(this)
    }
};
n.cancel = function () {
    this.Kn = i;
    VO(this);
    WO(this)
};

function UO(a) {
    a.PE = lb() + a.M;
    uxa(a, a.M)
}
function uxa(a, b) {
    if (a.oq != k) f(Error("WatchDog timer not null"));
    a.oq = aP(r(a.E0, a), b)
}

function VO(a) {
    if (a.oq) {
        La.clearTimeout(a.oq);
        a.oq = k
    }
}
var vxa = "TIMEOUT: ";
n.E0 = function () {
    this.oq = k;
    var a = lb();
    if (a - this.PE >= 0) {
        this.a.info(vxa + this.kf);
        WO(this);
        this.Ql = 2;
        YO(18);
        ZO(this)
    } else uxa(this, this.PE - a)
};

function ZO(a) {
    a.wa.MJ() || a.Kn || a.wa.Ox(a)
}
function WO(a) {
    Mj(a.u);
    De(a.L);
    if (a.He) {
        var b = a.He;
        a.He = k;
        re(b, kJ, a.XM, l, a);
        hJ(b)
    }
    if (a.Bg) a.Bg = k
}
n.Wr = function () {
    return this.Ql
};

function XO(a, b) {
    try {
        a.wa.wL(a, b)
    } catch (c) {}
};

function wxa(a, b) {
    this.wa = a;
    this.a = b
}
n = wxa.prototype;
n.dB = k;
n.lf = k;
n.Yx = l;
n.DA = k;
n.eB = k;
n.fB = k;
n.jg = k;
n.xo = -1;
n.ls = k;
n.zz = k;
var xxa = "MODE",
    bP = "init";
n.te = function (a) {
    this.fB = a;
    a = yxa(this.wa, this.fB);
    YO(3);
    GO(a, xxa, bP);
    this.lf = new QO(this, this.a, void 0, void 0, void 0);
    this.lf.Pl = this.dB;
    SO(this.lf, a, l, k, i);
    this.jg = 0
};
var zxa = "Test Connection Blocked";
n.rQ = function (a) {
    if (a) {
        this.jg = 2;
        Axa(this)
    } else {
        YO(4);
        a = this.wa;
        a.a.info(zxa);
        a.oi = a.ul.xo;
        cP(a, 9)
    }
};
var Bxa = "TestConnection: starting stage 2",
    dP = "TYPE",
    Cxa = "xmlhttp";

function Axa(a) {
    a.a.info(Bxa);
    a.lf = new QO(a, a.a, void 0, void 0, void 0);
    a.lf.Pl = a.dB;
    var b = Dxa(a.wa, a.ls, a.fB);
    YO(5);
    if (y.ia) {
        GO(b, dP, pa);
        var c = a.lf;
        a = Boolean(a.ls);
        c.yo = 3;
        c.qi = LO(b.sa());
        rxa(c, a)
    } else {
        GO(b, dP, Cxa);
        SO(a.lf, b, l, a.ls, l)
    }
}
n.lr = function (a) {
    return this.wa.lr(a)
};
n.MJ = function () {
    return l
};
var Exa = "TestConnection: Got data for stage 1",
    Fxa = "TestConnection: Null responseText",
    Gxa = "11111";
n.wL = function (a, b) {
    this.xo = a.ns;
    if (this.jg == 0) {
        this.a.info(Exa);
        if (b) {
            try {
                var c = rK(b)
            } catch (d) {
                eP(this.wa, this, 4);
                return
            }
            if (this.wa.mG) this.ls = c[0];
            else this.ls = k;
            this.zz = c[1]
        } else {
            this.a.info(Fxa);
            eP(this.wa, this, 4)
        }
    } else if (this.jg == 2) if (this.Yx) {
        YO(7);
        this.eB = lb()
    } else if (b == Gxa) {
        YO(6);
        this.Yx = i;
        this.DA = lb()
    } else {
        YO(8);
        this.DA = this.eB = lb();
        this.Yx = l
    }
};
var Hxa = "TestConnection: request complete for initial check",
    Ixa = "images/cleardot.gif",
    Jxa = "TestConnection: request complete for stage 2",
    Kxa = "Test connection succeeded; using streaming connection",
    Lxa = "Test connection failed; not using streaming",
    Mxa = "TestConnection: request failed, in state ";
n.Ox = function () {
    this.xo = this.lf.ns;
    if (this.lf.Oh) if (this.jg == 0) {
        this.a.info(Hxa);
        if (this.zz) {
            this.jg = 1;
            var a = fP(this.wa, this.zz, Ixa);
            LO(a);
            Hwa(a.toString(), 5E3, r(this.rQ, this), 3, 2E3)
        } else {
            this.jg = 2;
            Axa(this)
        }
    } else {
        if (this.jg == 2) {
            this.a.info(Jxa);
            a = l;
            if (a = y.ia ? this.eB - this.DA < 200 ? l : i : this.Yx) {
                this.a.info(Kxa);
                YO(12);
                Nxa(this.wa, this, i)
            } else {
                this.a.info(Lxa);
                YO(11);
                Nxa(this.wa, this, l)
            }
        }
    } else {
        this.a.info(Mxa + this.jg);
        if (this.jg == 0) YO(9);
        else this.jg == 2 && YO(10);
        eP(this.wa, this, this.lf.Wr())
    }
};
n.Tp = function () {
    return this.wa.Tp()
};

function gP(a) {
    this.M = a;
    this.g = 1;
    this.n = [];
    this.u = [];
    this.a = new MO
}
n = gP.prototype;
n.js = k;
n.Jr = k;
n.Pe = k;
n.Yc = k;
n.cB = k;
n.aw = k;
n.EG = k;
n.ks = k;
n.mG = i;
n.ot = 0;
n.RR = l;
n.ad = k;
n.Aj = k;
n.Yh = k;
n.yl = k;
n.ul = k;
n.JE = k;
n.QP = i;
n.ox = -1;
n.CK = -1;
n.oi = -1;
n.ho = 0;
n.Hn = 0;
n.kl = 8;
var hP = new Pi,
    Oxa = "statevent";

function Pxa(a, b) {
    Pd.call(this, Oxa, a);
    this.a = b
}
s(Pxa, Pd);
var Qxa = "timingevent";

function Rxa(a, b, c, d) {
    Pd.call(this, Qxa, a);
    this.size = b;
    this.g = c;
    this.a = d
}
s(Rxa, Pd);
n = gP.prototype;
var Sxa = "connect()",
    Txa = "connectTest_()";
n.te = function (a, b, c, d, e) {
    this.a.info(Sxa);
    YO(0);
    this.cB = b;
    this.Jr = c || {};
    if (d && p(e)) {
        this.Jr.OSID = d;
        this.Jr.OAID = e
    }
    this.a.info(Txa);
    this.ul = new wxa(this, this.a);
    this.ul.dB = this.js;
    this.ul.te(a)
};

function Uxa(a) {
    if (a.ul) {
        var b = a.ul;
        if (b.lf) {
            b.lf.cancel();
            b.lf = k
        }
        b.xo = -1;
        a.ul = k
    }
    if (a.Yc) {
        a.Yc.cancel();
        a.Yc = k
    }
    if (a.Yh) {
        La.clearTimeout(a.Yh);
        a.Yh = k
    }
    iP(a);
    if (a.Pe) {
        a.Pe.cancel();
        a.Pe = k
    }
    if (a.Aj) {
        La.clearTimeout(a.Aj);
        a.Aj = k
    }
}
n.MJ = function () {
    return this.g == 0
};
n.tb = function () {
    return this.g
};

function Vxa(a) {
    if (!a.Pe) if (!a.Aj) {
        a.Aj = aP(r(a.yL, a), 0);
        a.ho = 0
    }
}
var Wxa = "startForwardChannel_",
    Xxa = "open_()",
    jP = "RID",
    eya = "CVER",
    fya = "startForwardChannel_ returned: nothing to send",
    gya = "startForwardChannel_ finished, sent request";
n.yL = function (a) {
    this.Aj = k;
    this.a.info(Wxa);
    if (this.g == 1) {
        if (!a) {
            this.a.info(Xxa);
            this.ot = Math.floor(Math.random() * 1E5);
            a = this.ot++;
            var b = new QO(this, this.a, v, a, void 0);
            b.Pl = this.js;
            var c = kP(this),
                d = this.aw.sa();
            FO(d, jP, a);
            this.M && FO(d, eya, this.M);
            lP(this, d);
            b.yo = 1;
            b.qi = LO(d.sa());
            b.Oi = c;
            b.K = i;
            TO(b, k);
            this.Pe = b;
            this.g = 2
        }
    } else if (this.g == 3) if (a) hya(this, a);
    else if (this.n.length == 0) this.a.info(fya);
    else if (!this.Pe) {
        hya(this);
        this.a.info(gya)
    }
};
var mP = "SID",
    iya = "AID";

function hya(a, b) {
    var c, d;
    if (b) if (a.kl > 6) {
        a.n = a.u.concat(a.n);
        a.u.length = 0;
        c = a.ot - 1;
        d = kP(a)
    } else {
        c = b.g;
        d = b.Oi
    } else {
        c = a.ot++;
        d = kP(a)
    }
    var e = a.aw.sa();
    FO(e, mP, a.f);
    FO(e, jP, c);
    FO(e, iya, a.ox);
    lP(a, e);
    c = new QO(a, a.a, a.f, c, a.ho + 1);
    c.Pl = a.js;
    c.setTimeout(Math.round(1E4) + Math.round(1E4 * Math.random()));
    a.Pe = c;
    d = d;
    c.yo = 1;
    c.qi = LO(e.sa());
    c.Oi = d;
    c.K = i;
    TO(c, k)
}
function lP(a, b) {
    if (a.ad) {
        var c = a.ad.fI(a);
        c && Sc(c, function (d, e) {
            FO(b, e, d)
        })
    }
}
var jya = "count=",
    kya = "ofs=",
    lya = "req",
    mya = "_type=",
    nya = "_badmap";

function kP(a) {
    var b = Math.min(a.n.length, 1E3),
        c = [jya + b],
        d;
    if (a.kl > 6 && b > 0) {
        d = a.n[0].a;
        c.push(kya + d)
    } else d = 0;
    for (var e = 0; e < b; e++) {
        var g = a.n[e].a,
            h = a.n[e].map;
        if (a.kl <= 6) g = e;
        else g -= d;
        try {
            Sc(h, function (m, o) {
                c.push(lya + g + pJ + o + Pt + encodeURIComponent(m))
            })
        } catch (j) {
            c.push(lya + g + mya + encodeURIComponent(nya))
        }
    }
    a.u = a.u.concat(a.n.splice(0, b));
    return c.join(Sb)
}
function oya(a) {
    if (!a.Yc) if (!a.Yh) {
        a.K = 1;
        a.Yh = aP(r(a.xL, a), 0);
        a.Hn = 0
    }
}
var pya = "Going to retry GET";

function nP(a) {
    if (a.Yc || a.Yh) return l;
    if (a.Hn >= 3) return l;
    a.a.info(pya);
    a.K++;
    a.Yh = aP(r(a.xL, a), qya(a, a.Hn));
    a.Hn++;
    return i
}
var rya = "Creating new HttpRequest",
    sya = "rpc",
    tya = "CI",
    uya = "New Request created";
n.xL = function () {
    this.Yh = k;
    this.a.info(rya);
    this.Yc = new QO(this, this.a, this.f, sya, this.K);
    this.Yc.Pl = this.js;
    var a = this.EG.sa();
    FO(a, jP, sya);
    FO(a, mP, this.f);
    FO(a, tya, this.JE ? Xd : aj);
    FO(a, iya, this.ox);
    lP(this, a);
    if (y.ia) {
        FO(a, dP, pa);
        var b = this.Yc,
            c = Boolean(this.ks);
        b.yo = 3;
        b.qi = LO(a.sa());
        rxa(b, c)
    } else {
        FO(a, dP, Cxa);
        SO(this.Yc, a, i, this.ks, l)
    }
    this.a.info(uya)
};
var vya = "Test Connection Finished",
    wya = "connectChannel_()";

function Nxa(a, b, c) {
    a.a.info(vya);
    a.JE = a.QP && c;
    a.oi = b.xo;
    a.a.info(wya);
    a.OR(1, 0);
    a.aw = yxa(a, a.cB);
    Vxa(a)
}
var xya = "Test Connection Failed";

function eP(a, b) {
    a.a.info(xya);
    a.oi = b.xo;
    cP(a, 2)
}
var yya = "Server claims our backchannel is missing.",
    zya = "But we are currently starting the request.",
    Aya = " bytes (in ",
    Bya = " arrays) are outstanding on the BackChannel",
    Cya = "Bad POST response data returned",
    Dya = "Bad data returned - missing/invald magic cookie";
n.wL = function (a, b) {
    if (!(this.g == 0 || this.Yc != a && this.Pe != a)) {
        this.oi = a.ns;
        if (this.Pe == a && this.g == 3) if (this.kl > 7) {
            var c;
            try {
                c = rK(b)
            } catch (d) {
                c = k
            }
            if ($a(c) && c.length == 3) {
                var e = c;
                if (e[0] == 0) a: {
                    this.a.info(yya);
                    if (this.Yh) this.a.info(zya);
                    else {
                        if (this.Yc) if (this.Yc.Ip + 3E3 < this.Pe.Ip) {
                            iP(this);
                            this.Yc.cancel();
                            this.Yc = k
                        } else break a;
                        nP(this);
                        YO(19)
                    }
                } else {
                    this.CK = e[1];
                    c = this.CK - this.ox;
                    if (0 < c) {
                        e = e[2];
                        this.a.info(e + Aya + c + Bya);
                        if (e < 37500 && this.JE && this.Hn == 0) if (!this.yl) this.yl = aP(r(this.i0, this), 6E3)
                    }
                }
            } else {
                this.a.info(Cya);
                cP(this, 11)
            }
        } else {
            if (b != Bwa) {
                this.a.info(Dya);
                cP(this, 11)
            }
        } else {
            this.Yc == a && iP(this);
            if (!uK(b)) {
                c = rK(b);
                e = this.ad && this.ad.Lz ? [] : k;
                for (var g = 0; g < c.length; g++) {
                    var h = c[g];
                    this.ox = h[0];
                    h = h[1];
                    if (this.g == 2) if (h[0] == kj) {
                        this.f = h[1];
                        if (this.mG) this.ks = h[2];
                        else this.ks = k;
                        h = h[3];
                        if (Za(h)) this.kl = h;
                        else this.kl = 6;
                        this.g = 3;
                        this.ad && this.ad.NG(this);
                        this.EG = Dxa(this, this.ks, this.cB);
                        oya(this)
                    } else h[0] == oA && cP(this, 7);
                    else if (this.g == 3) {
                        if (h[0] == oA) {
                            if (e && e.length) {
                                this.ad.Lz(this, e);
                                e.length = 0
                            }
                            cP(this, 7)
                        } else if (h[0] != Cwa) if (e) e.push(h);
                        else this.ad && this.ad.MG(this, h);
                        this.Hn = 0
                    }
                }
                e && e.length && this.ad.Lz(this, e)
            }
        }
    }
};
n.i0 = function () {
    if (Za(this.yl)) {
        this.yl = k;
        this.Yc.cancel();
        this.Yc = k;
        nP(this);
        YO(20)
    }
};

function iP(a) {
    if (Za(a.yl)) {
        La.clearTimeout(a.yl);
        a.yl = k
    }
}
var Eya = "Request complete",
    Fya = "Not retrying due to error type",
    Gya = "Maybe retrying, last error: ",
    Hya = "Going to retry POST",
    Iya = "Exceeded max number of retries",
    Jya = "Error: HTTP request failed";
n.Ox = function (a) {
    this.a.info(Eya);
    var b;
    if (this.Yc == a) {
        iP(this);
        this.Yc = k;
        b = 2
    } else if (this.Pe == a) {
        this.Pe = k;
        b = 1
    } else return;
    this.oi = a.ns;
    if (this.g != 0) if (a.Oh) if (b == 1) {
        b = lb() - a.Ip;
        hP.dispatchEvent(new Rxa(hP, a.Oi ? a.Oi.length : 0,
        b,
        this.ho));
        Vxa(this);
        this.u.length = 0
    } else oya(this);
    else {
        var c = a.Wr();
        if (c == 3 || c == 0 && this.oi > 0) this.a.info(Fya);
        else {
            this.a.info(Gya + Rwa(c, this.oi));
            if (b == 1) {
                if (this.Pe || this.Aj) a = l;
                else if (this.g == 1 || this.ho >= (this.RR ? 0 : 2)) a = l;
                else {
                    this.a.info(Hya);
                    this.Aj = aP(r(this.yL, this, a), qya(this, this.ho));
                    this.ho++;
                    a = i
                }
                if (a) return
            }
            if (b == 2) if (nP(this)) return;
            this.a.info(Iya)
        }
        this.a.info(Jya);
        switch (c) {
        case 1:
            cP(this, 5);
            break;
        case 4:
            cP(this, 10);
            break;
        case 3:
            cP(this, 6);
            break;
        default:
            cP(this, 2);
            break
        }
    }
};

function qya(a, b) {
    var c = 5E3 + Math.floor(Math.random() * 1E4);
    c *= b;
    return c
}
n.OR = function () {
    if (!sc(arguments, this.g)) f(Error("Unexpected channel state: " + this.g))
};
var Kya = "Error code ";

function cP(a, b) {
    a.a.info(Kya + b);
    if (b == 2 || b == 9) {
        var c = k;
        if (a.ad) c = a.ad.vI(a);
        var d = r(a.w2, a);
        c = c;
        if (!c) {
            c = new rO(xB);
            LO(c)
        }
        Iwa(c.toString(), 1E4, d)
    } else YO(2);
    Lya(a, b)
}
var Mya = "Successfully pinged google.com",
    Nya = "Failed to ping google.com";
n.w2 = function (a) {
    if (a) {
        this.a.info(Mya);
        YO(2)
    } else {
        this.a.info(Nya);
        YO(1);
        Lya(this, 8)
    }
};
var Oya = "HttpChannel: error - ";

function Lya(a, b) {
    a.a.info(Oya + b);
    a.g = 0;
    a.ad && a.ad.LG(a, b);
    Pya(a);
    Uxa(a)
}
var Qya = "Number of undelivered maps, pending: ",
    Rya = ", outgoing: ";

function Pya(a) {
    a.g = 0;
    a.oi = -1;
    if (a.ad) if (a.u.length == 0 && a.n.length == 0) a.ad.Kz(a);
    else {
        a.a.info(Qya + a.u.length + Rya + a.n.length);
        var b = Ac(a.u),
            c = Ac(a.n);
        a.u.length = 0;
        a.n.length = 0;
        a.ad.Kz(a, b, c)
    }
}
var Sya = "GetForwardChannelUri: ";

function yxa(a, b) {
    var c = fP(a, k, b);
    a.a.info(Sya + c);
    return c
}
var Tya = "GetBackChannelUri: ";

function Dxa(a, b, c) {
    b = fP(a, a.Tp() ? b : k,
    c);
    a.a.info(Tya + b);
    return b
}
var Uya = "VER";

function fP(a, b, c, d) {
    var e = window.location,
        g = rwa(e.protocol, k, b ? b + Na + e.hostname : e.hostname,
        d || e.port,
        c);
    a.Jr && Sc(a.Jr, function (h, j) {
        FO(g, j, h)
    });
    FO(g, Uya, a.kl);
    lP(a, g);
    return g
}
n.lr = function (a) {
    if (a) f(Error("Can't create secondary domain capable XhrIo object."));
    else return new dJ
};

function aP(a, b) {
    if (!gb(a)) f(Error("Fn must not be null and must be a function"));
    return La.setTimeout(function () {
        a()
    }, b)
}
function YO(a) {
    hP.dispatchEvent(new Pxa(hP, a))
}
n.Tp = function () {
    return y.ia
};

function Vya() {}
n = Vya.prototype;
n.Lz = k;
n.NG = function () {};
n.MG = function () {};
n.LG = function () {};
n.Kz = function () {};
n.fI = function () {
    return {}
};
n.vI = function () {
    return k
};

function oP(a, b) {
    gP.call(this, a);
    this.P = b || k
}
s(oP, gP);
oP.prototype.lr = function (a) {
    if (a) return new dJ(this.P);
    return oP.p.lr.call(this, a)
};
oP.prototype.Tp = function () {
    return !!this.P || oP.p.Tp.call(this)
};

function pP(a, b, c) {
    this.n = this.f = this.P = this.xa = k;
    this.Wc = a || Wya;
    this.Cb = k;
    this.K = new Bi;
    this.lb = b;
    this.cc = c || k;
    this.g = Xya(this);
    this.u = this.Ya = this.Aa = this.a = l;
    this.Oa = -1;
    this.M = 0;
    this.aa = {}
}
s(pP, Vya);
n = pP.prototype;
n.VH = l;
n.Za = function (a, b, c) {
    this.K.Za(a, b, c)
};
n.of = function (a, b, c) {
    return this.K.of(a, b, c)
};

function Wya(a) {
    if (a.length == 1 && cb(a[0])) a = rK(a[0]);
    return {
        type: a[0],
        gM: a[1],
        data: a[2],
        EE: a[3] || k
    }
}
var vP = "tfe_changed";
n.MG = function (a, b) {
    var c = this.Wc.call(k, b);
    hb(c.data);
    if (c.gM > this.Oa) {
        this.Oa = c.gM;
        if (this.Cb != c.EE) {
            this.Cb = c.EE;
            this.K.Wx(vP, c.EE)
        }
        this.K.Wx(String(c.type), c.data)
    }
};
n.fI = function () {
    var a = yb(this.aa);
    a.lsq = this.Oa;
    if (this.VH) a.w = aj;
    return a
};
n.NG = function () {
    this.a = i;
    this.u = l;
    Yya(this, 0)
};
n.Kz = function () {
    this.a = l;
    this.u || this.LL(5E3)
};

function wP(a, b, c, d) {
    a.P = b || a.P;
    a.f = c || a.f;
    a.n = d || a.n || v;
    Ib(a.n, Hj);
    if (!a.a && !a.u) {
        a.Ya = i;
        Zya(a)
    }
}
var $ya = "/test",
    aza = "/bind";

function Zya(a) {
    a.g.te(a.n + $ya, a.n + aza, {
        id: a.P,
        sid: a.f
    })
}
var bza = "disconnect()",
    cza = "terminate";

function dza(a) {
    if (a.a) {
        a.Ya = l;
        a.u = l;
        a = a.g;
        a.a.info(bza);
        Uxa(a);
        if (a.g == 3) {
            var b = a.ot++,
                c = a.aw.sa();
            FO(c, mP, a.f);
            FO(c, jP, b);
            FO(c, dP, cza);
            lP(a, c);
            b = new QO(a, a.a, a.f, b, void 0);
            b.yo = 2;
            b.qi = LO(c.sa());
            (new Image).src = b.qi;
            b.Ip = lb();
            UO(b);
            Pya(a)
        }
    }
}
n.LL = function (a) {
    if (this.Ya && !this.a) {
        this.u = i;
        this.g.ad = k;
        this.g = Xya(this);
        Zya(this);
        Oj(r(this.LL, this, Math.min(Math.round(a * 2), 45E3)), a)
    }
};

function Xya(a) {
    var b = a.lb ? a.lb() : new oP(aj, a.cc),
        c = Db(uJ, aj);b.js = c;b.ad = a;
    return b
}
n.LG = function (a, b) {
    Yya(this, b)
};

function Yya(a, b) {
    if (!a.Aa && b == 6) {
        a.Aa = i;
        wP(a)
    } else {
        a.Aa = l;
        if (b != a.M) {
            a.M = b;
            a.xa && a.xa.call(La, b)
        }
    }
}
n.vI = function () {
    return new rO(xB)
};

function xP(a, b, c, d) {
    Pd.call(this, a);
    this.u = b;
    this.a = c;
    this.M = d;
    this.g = k
}
s(xP, Pd);

function yP(a, b, c, d) {
    d = d || {};
    d.docs_net_NetEvent_type = a.type;
    if (a.g) {
        a = a.g;
        d.message = c
    } else a = Error(c);
    wJ(b, a, d)
};

function zP(a, b, c, d, e, g) {
    this.f = a;
    this.a = b;
    this.hE = c;
    this.u = d;
    this.n = e;
    this.g = g
}
s(zP, t);
n = zP.prototype;
n.AG = 0;
n.EK = 0;
n.DK = 0;
n.Nk = k;
n.VL = k;
n.q = function () {
    zP.p.q.call(this);
    this.Op && this.Op.unregister(this);
    if (this.Nk) {
        this.Nk.G();
        this.Nk = k
    }
    delete this.Op;
    delete this.g;
    delete this.n;
    delete this.a;
    delete this.f
};

function eza(a, b) {
    this.g = a;
    this.a = b
}
n = eza.prototype;
n.iM = 3;
n.m2 = l;
n.CH = Pa;
n.DH = Pa;
n.Lk = function () {
    var a = [this.a];
    Bc(a, arguments);
    this.a = Vt.apply(k, a);
    return this
};
n.Cr = function (a) {
    this.lc = a;
    return this
};
n.Lh = function (a) {
    a = Psa(a, function (b) {
        return cb(b) ? b : cr(b)
    });
    return this.Cr(Ut(a))
};

function qO(a, b, c) {
    a.CH = b;
    a.f = c;
    return a
}
function AP(a, b) {
    a.iM = b;
    return a
}
n.Pf = function (a, b) {
    this.DH = a;
    this.n = b;
    return this
};
n.Ld = function () {
    var a = fza(this);
    this.g.send(a);
    return a
};

function fza(a) {
    return new zP(a.a, a.lc, a.iM, a.m2, r(a.DH, a.n), r(a.CH, a.f))
}
n.Pc = function () {
    return this.lc
};

function BP(a) {
    this.f = a
}
BP.prototype.getString = function () {
    return this.f
};
BP.prototype.Cc = function () {
    if (!p(this.a)) {
        var a = this.f;
        this.a = a && rK(a.replace(/^[^[{]+/, v)) || k
    }
    return this.a
};

function CP(a, b) {
    var c = a.Cc()[b];
    return p(c) ? String(a.Cc()[b]) : k
};

function DP() {
    this.a = EP
}
s(DP, Pi);
DP.prototype.Ka = function (a) {
    var b = this.a;
    if (a != b) {
        this.a = a;
        this.dispatchEvent(new Zra(b, a))
    }
};
DP.prototype.tb = function () {
    return this.a
};

function FP(a) {
    this.f = a
}
FP.prototype.g = function () {
    return this.f != 1
};
FP.prototype.a = function () {
    return this.f == 1
};

function GP(a) {
    return a.f >= 5
}
FP.prototype.n = function () {
    return this.f >= 4
};
var EP = new FP(1),
    gza = new FP(1),
    HP = new FP(2),
    IP = new FP(3),
    JP = new FP(3),
    KP = new FP(4),
    LP = new FP(4),
    MP = new FP(5),
    NP = new FP(5);
var OP = "authkey";

function PP(a, b, c) {
    this.f = k;
    this.L = new ze(this);
    c && this.L.C(c, tj, this.oV);
    this.xa = 5E3 * (0.75 + Math.random() * 0.5);
    this.K = Db(uJ, aj);
    this.a = new DP;
    this.dq = [];
    this.P = v;
    this.aa = a || window;
    this.M = b || k;
    this.g = [];
    this.u = [];
    this.Aa = hza;
    this.n = {};
    a = Yt(this.aa.location.href, OP);
    iza(this, OP, a)
}
s(PP, Pi);
n = PP.prototype;
n.q = function () {
    PP.p.q.call(this);
    for (var a = 0; a < this.dq.length; a++) window.clearTimeout(this.dq[a]);
    kc(this.g, mb);
    this.dq = [];
    this.g = [];
    this.u = [];
    if (this.f) {
        this.f.of(vP, this.xB, this);
        dza(this.f)
    }
    this.f = k;
    this.a.Ka(EP);
    this.L.G();
    delete this.L;
    delete this.K;
    delete this.Oa;
    delete this.dq;
    delete this.aa;
    delete this.M;
    delete this.g;
    delete this.u
};
var jza = "X-Rel-Id";
n.U1 = function (a, b) {
    this.K[jza] = a.toString(16) + Na + b.toString(16)
};
n.Gd = function (a) {
    Hb(a, Hj);
    return new eza(this, this.P + a)
};
n.send = function (a) {
    if (!GP(this.a.tb())) {
        a.Nk && a.Nk.G();
        a.Op = this;
        a.EK = lb();
        var b = a.a ? fJ : eJ,
            c = a.Nk = this.M ? this.M() : new dJ;oe(c, jJ, r(this.$X, this, a));c.Yt = Math.max(0, 2E4);
        var d = a.f;a.u || (d = Ot(Tt([d], this.n)));uc(this.g, a);this.a.tb() == EP && this.a.Ka(gza);c.send(d, b, a.a, this.K)
    }
};
var kza = "X-Restart",
    lza = "SOON",
    mza = "NOW";
n.$X = function (a) {
    var b = a.Nk,
        c = v;
    try {
        c = oJ(b)
    } catch (d) {}
    a.VL = new BP(c);
    fK(b, kza) == lza && this.a.dispatchEvent(Ej);
    c = fK(b, kza) == mza ? new xP(Dj, b.Ah, b.ce()) : this.Aa(b, a);
    if (c) {
        var e = i;
        if (c.type == zj) {
            try {
                a.n(a.VL);
                QP(this, a)
            } catch (g) {
                c = new xP(Cj, c.u, c.a);
                c.g = g;
                QP(this, a, NP)
            }
            a.G()
        } else if (c.type == Aj || c.type == Bj) {
            var h;
            h = c;
            h.a == 409 && this.xB(k);
            if (GP(this.a.tb())) h = 1;
            else {
                var j = h.type == Bj;
                if (a.hE != 1 && a.AG < 3) {
                    nza(this, a, l);
                    h = 3
                } else if (a.hE == 3) {
                    this.f && !j ? this.u.push(a) : nza(this, a, j);oza(this);this.a.Ka(RP(this, h.a));h = 2
                } else h = 1
            }
            switch (h) {
            case 1:
                c.type = yj;
                break;
            case 3:
                e = l;
                break;
            case 2:
            }
        } else if (c.type == Dj) {
            QP(this, a, MP);
            e = l
        }
        if (c.type == yj) {
            try {
                if (a.g(c) == l) e = l;
                QP(this, a, RP(this, c.a))
            } catch (m) {
                c = new xP(Cj, c.u, c.a);
                c.g = m;
                QP(this, a, NP)
            }
            a.G()
        }
        b.G();
        a.Nk = k;
        e && this.dispatchEvent(c)
    }
};
n.unregister = function (a) {
    QP(this, a)
};

function QP(a, b, c) {
    var d = a.a.tb(),
        e = d,
        g = c || IP;
    c = !c;
    b.Op = k;
    xc(a.g, b);
    xc(a.u, b);
    if (!GP(d)) if (GP(g)) a.a.Ka(g);
    else {
        b = a.f || oc(a.g, function (h) {
            return h.hE == 3
        });
        if (d == gza) if (c || !b) {
            if (a.g.length == 0) e = EP
        } else {
            oza(a);
            e = g
        } else if (c) if (a.g.length > 0) {
            e = HP;
            pza(a)
        } else {
            if (!a.f || !a.f.M) e = EP
        } else e = g;
        a.a.Ka(e)
    }
}
function oza(a) {
    if (a.f && a.a.tb().a()) {
        dza(a.f);
        wP(a.f)
    }
}
n.ce = function () {
    return this.a
};

function nza(a, b, c) {
    b.AG++;
    var d = a.xa,
        e = b.DK;
    if (c && e != 0) d = e < 3E4 ? e * 1.5 : e;b.DK = d;c = Math.max(0, d - (lb() - b.EK));
    var g = window.setTimeout(r(function () {
        xc(this.dq, g);
        this.send(b)
    }, a), c);a.dq.push(g)
}
n.rU = function (a) {
    var b = this.a.tb();
    if (a) this.a.Ka(RP(this, this.f.g.oi));
    else if (b.g() && !GP(b)) if (this.g.length > 0) {
        this.a.Ka(HP);
        pza(this)
    } else this.a.Ka(EP)
};

function pza(a) {
    var b = a.u.shift();
    b && a.send(b)
}
n.Z1 = function (a) {
    a == v || Hb(a, Hj) && !Ib(a, Hj);
    this.P = a
};

function hza(a) {
    var b = a.Ah,
        c = a.ce();
    if (b == 7) return k;
    else {
        if (qza(a)) a = Aj;
        else {
            var d;
            d = a.Ah;
            var e = a.ce();
            d = d == 6 && (e == 401 || e == 403 || e == 202 || e >= 500 && e <= 599) ? i : e == 200 && !fK(a, gJ) ? i : l;a = d ? Bj : nJ(a) ? zj : yj
        }
        a = a
    }
    return new xP(a, b, c)
}
function qza(a) {
    var b = a.Ah,
        c = a.ce();
    if (nJ(a)) {
        if (b == 0 && c == 0 && !oJ(a)) return i;
        return l
    }
    if (b == 8) return i;
    if (b == 5) return i;
    if (b == 6) {
        if (c <= 0 || c == 503) return i;
        if (c == 409) return i;
        if (c == 405) return i;
        if (y.ia && c >= 12001 && c <= 12156) return i
    }
    return l
}

function RP(a, b) {
    return b == 401 ? LP : b == 403 ? KP : b >= 500 && b <= 599 || b == 409 || b == 202 || b == 405 ? JP : b >= 400 && b <= 499 ? NP : IP
}
var rza = "tfe";
n.xB = function (a) {
    iza(this, rza, a)
};

function iza(a, b, c) {
    if (c) a.n[b] = c;
    else delete a.n[b];
    if (a.f) a.f.aa = yb(a.n);
    return a
}
n.oV = function () {
    this.a.Ka(NP)
};

function SP(a, b, c, d) {
    this.g = a;
    this.f = b;
    this.u = c;
    this.n = d;
    this.a = k
}
s(SP, Pi);
var sza = "/revisions/load";
SP.prototype.load = function (a, b, c) {
    mb(this.a);
    this.a = qO(this.g.Gd(sza).Lk(Iv, a, Io, b, Zi, c).Pf(this.M, this), this.K, this).Ld()
};
SP.prototype.M = function (a) {
    this.a = k;
    this.u.call(this.f, TK(a.Cc().chunkedSnapshot), TK(a.Cc().changes))
};
SP.prototype.K = function (a) {
    this.P = k;
    this.n.call(this.f, a)
};
SP.prototype.q = function () {
    SP.p.q.call(this);
    delete this.g;
    delete this.f;
    delete this.u;
    delete this.n;
    mb(this.a);
    delete this.a
};

function TP(a, b, c, d, e, g, h, j) {
    this.u = j;
    j = this.g = new WI;
    h = h.ce();
    j.a = h;
    j.L.C(h, rj, j.n);
    YI(j);
    h = new il(a, this.g);
    this.a = Epa(a, h, c, d, g, this.u);
    this.f = new BJ;
    c = this.a;
    d = this.f;
    j = this.u;
    var m = rB(c, j);
    this.va = new cD(c, b, m, e, d, j);
    this.n = eG(a, h, this.a.a, this.a.A, this.a.V, k, this.va, i, this.a.M, this.u, g, b, new fG(this.f), this.f);
    Yu(this.n, i)
}
s(TP, t);
TP.prototype.q = function () {
    TP.p.q.call(this);
    this.g.G();
    delete this.g;
    this.va.G();
    delete this.va;
    this.a.G();
    delete this.a;
    this.n.G();
    delete this.n;
    this.f.G();
    delete this.f
};

function UP(a, b, c, d, e, g, h, j, m) {
    this.K = a;
    this.f = b;
    this.Xa = d;
    this.aa = e;
    this.u = g;
    this.V = h;
    this.P = j;
    this.n = m;
    a = {};
    a.am = 3;
    this.a = c.sa(a);
    this.g = c.ER;
    this.M = new SP(g, this, this.y_, $va);
    K.Uk.Za(Mi, this.pM, this);
    K.Fq.Za(Mi, this.pM, this);
    K.kz.Za(Mi, this.z_, this)
}
s(UP, t);
n = UP.prototype;
n.Nf = k;
n.xg = k;
n.Ym = k;
n.by = 0;
n.tj = k;
n.z_ = function (a) {
    this.M.load(this.Xa.f, a[0], a[1])
};
n.pM = function () {
    var a = this.f.P;
    if (this.xg) {
        Yu(this.f, i);
        this.K.sg(i);
        this.Nf && this.Nf.G();
        this.Nf = k;
        this.xg && this.xg.G();
        this.xg = k;
        this.Ym && this.Ym.G();
        this.Ym = k;
        a && sra(a, i)
    } else {
        Yu(this.f, l);
        this.K.sg(l);
        a && sra(a, l);
        a = this.a.z();
        this.xg = new mO(new Nw, a, this.n);
        this.xg.Ja(a.parentNode);
        tza(this);
        this.Ym = new nO(this.a.P, this.u, this.xg.a)
    }
};

function tza(a) {
    var b = new TP(a.a, a.Xa, a.V, a.P, l, a.aa, a.u, a.n);
    a.Nf && a.Nf.G();
    a.Nf = b;
    b = a.xg;
    a = a.Nf.va;
    b.va && b.va.G();
    b.va = a;
    b.va.Ja(b.z())
}
n.y_ = function (a, b) {
    tza(this);
    var c = this.Nf.a.A;
    if (this.g) {
        this.tj && this.tj.G();
        this.tj = new rM(this.Nf.a.g, c, this.V)
    }
    this.by++;
    this.tG(c, a, 0, b, this.by)
};
n.tG = function (a, b, c, d, e) {
    if (this.by == e) {
        for (var g = b[c], h = 0; h < g.length; h++) {
            var j = a,
                m = wG(g[h]);
            m && j.na(m)
        }
        b.length > c + 1 ? Oj(r(this.tG, this, a, b, c + 1, d, e), 100) : Oj(r(this.XP, this, a, d, e), 100);a.xc()
    }
};
var uza = "kix-overlay-diff-insertion",
    vza = "kix-overlay-diff-style-change";
n.XP = function (a, b, c) {
    if (this.by == c) {
        if (this.g) {
            c = this.tj;
            OA(c.f, uza);
            OA(c.f, vza);
            c.a.clear();
            c.L.C(c.A, gD, c.g)
        }
        for (c = 0; c < b.length; c++) {
            var d = a,
                e = wG(b[c]);
            e && d.na(e)
        }
        a.xc()
    }
    if (this.g) {
        a = this.tj;
        a.L.a(a.A, gD, a.g, undefined, a);
        a.f.Sd(uza, r(a.n, a));
        a.f.Sd(vza, r(a.u, a))
    }
};
n.q = function () {
    UP.p.q.call(this);
    delete this.K;
    delete this.f;
    delete this.Xa;
    delete this.aa;
    delete this.u;
    delete this.n;
    delete this.V;
    delete this.P;
    this.M.G();
    delete this.M;
    this.Nf && this.Nf.G();
    delete this.Nf;
    this.xg && this.xg.G();
    delete this.xg;
    this.Ym && this.Ym.G();
    delete this.Ym;
    this.tj && this.tj.G();
    delete this.tj;
    this.a.G();
    delete this.a
};

function VP(a, b, c, d, e) {
    this.a = a;
    this.u = b;
    this.n = c;
    this.g = d;
    this.To = !! e
}
s(VP, t);
VP.prototype.od = function () {
    return this.n
};
VP.prototype.Cj = function () {
    return this.g
};

function WP(a, b, c) {
    Pd.call(this, oj, a);
    this.a = b;
    this.message = c
}
s(WP, Pd);

function wza(a, b, c) {
    Pd.call(this, pj, a);
    this.a = b;
    this.g = c
}
s(wza, Pd);

function xza(a, b) {
    Pd.call(this, qj, a);
    this.a = b
}
s(xza, Pd);

function yza() {}
s(yza, Pi);

function XP(a, b, c, d, e) {
    this.g = a;
    a.Za(ej, this.dJ, this);
    a.Za(fj, this.fJ, this);
    a.Za(gj, this.AH, this);
    this.M = b;
    this.K = c;
    this.u = d;
    this.a = e || {};
    this.f = k
}
s(XP, yza);
var zza = ["#109618", "#D51", "#8C6D8C", "#7083A8", "#6633CC", "#C33", "#22AA99", "#888", "#B08B59", "#949"];
n = XP.prototype;
n.aA = 0;
n.Bj = function () {
    return this.a
};
var Aza = "#000";
n.dJ = function (a) {
    var b = a.sid;
    if (!this.a[b]) {
        if (!a.color) {
            var c;
            if (a.isMe) c = Aza;
            else {
                this.aA = (this.aA + 1) % zza.length;
                c = zza[this.aA]
            }
            a.color = c
        }
        c = this.u(a);
        if (c.To) this.f = c;
        this.a[b] = c;
        this.dispatchEvent(new wza(this, c, a.isNew))
    }
};
n.fJ = function (a) {
    a = a.sid;
    var b = this.a[a];
    if (b) {
        delete this.a[a];
        this.dispatchEvent(new xza(this, b))
    }
};
n.AH = function (a) {
    this.dispatchEvent(new WP(this, this.a[a.sid], a.msg))
};
n.q = function () {
    XP.p.q.call(this);
    var a = this.g;
    a.of(ej, this.dJ, this);
    a.of(fj, this.fJ, this);
    a.of(gj, this.AH, this);
    delete this.g
};
var Bza = "receiveCursorLoc";

function YP(a, b, c, d, e, g, h, j, m) {
    XP.call(this, a, b, c, d, m);
    this.A = e;
    this.va = g;
    if (wv(g.getContext()).WM) g.aa.f = this;
    this.n = h;
    this.V = j;
    this.L = new ze(this);
    this.L.C(e, gD, this.xa).C(h, Bza, Pq(j, this.P, this)).C(this, qj, Pq(j, this.aa, this))
}
s(YP, XP);

function Cza(a, b, c, d) {
    a = b;
    if (b > c) a = d > 0 ? b + d : b < c - d ? c : b + d;
    return a
}
YP.prototype.xa = function (a) {
    var b;
    switch (a.a.O()) {
    case wD:
        b = a.a;
        a = b.qc();
        b = -(b.Se() - a + 1);
        break;
    case xD:
        b = a.a;
        a = b.a;
        b = b.Y().length;
        break;
    default:
        return
    }
    var c = this.Bj();
    for (var d in c) {
        var e = c[d];
        if (!e.To) {
            var g = e.ra();
            e = g.Fa();
            if (e.O() == 0) {
                e = e;
                g = g.Dc;
                var h = e.a,
                    j = g.a,
                    m = Cza(this, h, a, b),
                    o = Cza(this, j, a, b);
                if (m != h || o != j) Dza(this, d, new P(m, e.f), new P(o, g.f), l)
            }
        }
    }
};
YP.prototype.P = function (a) {
    var b = a.u;
    b != this.n.f && Dza(this, b, a.a, a.g, i)
};
YP.prototype.aa = function (a) {
    var b = this.va;
    a = a.a.a;
    var c = b.g[a];
    if (c) {
        delete b.g[a];
        b.removeChild(c, i);
        c.G()
    }
};
var Eza = "There is no collaborator for sid ";

function Dza(a, b, c, d, e) {
    if (c.O() == 0) {
        var g = jI(a.A, c);
        c = g.a;
        d = jI(a.A, d);
        var h = kI(a.A, c, c != d.a);
        if (h != c) g = new P(h);
        if (c = a.Bj()[b]) {
            b = c.ra();
            b.Qp(g);
            TG(b, d);
            if (e) {
                a = a.va;
                if (!c.To) {
                    e = a.getContext();
                    g = e.A;
                    b = c.ra();
                    if (g = oD(a, Ou(g, b.Fa()))) {
                        d = c.a;
                        if (!a.g[d]) {
                            a.g[d] = new ZA(e, b, c.Cj(), l, i, a.J());
                            a.ya(a.g[d]);
                            a.g[d].Ja(g.db())
                        }
                        b = a.g[d];
                        rD(b.z(), g.db());
                        ev(b, i);
                        pD(a, b, undefined, i);
                        if (wv(e).WM) {
                            c = c.ra();
                            xC(a.aa, c, c.g, c.n)
                        }
                    }
                }
            }
        } else a.V.log(Error(Eza + b))
    }
}
YP.prototype.q = function () {
    YP.p.q.call(this);
    delete this.A;
    delete this.va;
    delete this.n;
    delete this.V
};
var Fza = "BLOCKQUOTE",
    Gza = "CENTER",
    Hza = "DD",
    Iza = "DIR",
    Jza = "DL",
    Kza = "DT",
    Lza = "FORM",
    Mza = "H1",
    Nza = "H2",
    Oza = "H3",
    Pza = "H4",
    Qza = "H5",
    Rza = "H6",
    Sza = "HEAD",
    Tza = "MENU",
    Uza = "PRE",
    Vza = "TH",
    Wza = "TITLE",
    Xza = "pre",
    ZP = "margin-bottom",
    $P = "margin-left",
    aQ = "margin-right",
    bQ = "margin-top",
    Yza = "text-indent";

function cQ(a, b) {
    this.n = a;
    this.xa = b || k;
    this.u = [];
    for (var c = {}, d = 0; d < dQ.length; d++) c[dQ[d]] = [];
    this.M = c;
    this.K = {};
    this.P = {};
    c = [Fza, fva, Gza, Hza, Iza, sd, Jza, Kza, Lza, Mza, Nza, Oza, Pza, Qza, Rza, Sza, IN, Ad, Tza, Cd, Qq, Uza, VC, HC, Vza, Wza, Cf];
    d = {};
    for (var e = 0; e < c.length; e++) d[c[e]] = i;
    this.aa = d;
    this.Oa = {
        B: [this.Oq, Wh, i],
        EM: [this.Oq, $h, i],
        FONT: [this.j1],
        H1: [this.Ep, 1],
        H2: [this.Ep, 2],
        H3: [this.Ep, 3],
        H4: [this.Ep, 4],
        H5: [this.Ep, 5],
        H6: [this.Ep, 6],
        HR: [this.k1],
        I: [this.Oq, $h, i],
        PRE: [this.sG, Xza],
        STRONG: [this.Oq, Wh, i],
        U: [this.Oq, bi, i]
    };
    this.Ya = {
        align: [this.rG]
    };
    this.Aa = {
        background: [this.WP],
        "background-color": [this.Wu, Vh],
        color: [this.Wu, Xh],
        "font-family": [this.pG],
        "font-size": [this.qG, l],
        "font-style": [this.tz, $h, G, J],
        "font-weight": [this.tz, Wh, G, F],
        margin: [this.VP],
        "margin-bottom": [this.Hc, ZP],
        "margin-left": [this.Hc, $P],
        "margin-right": [this.Hc, aQ],
        "margin-top": [this.Hc, bQ],
        "text-indent": [this.Hc, Yza],
        "text-align": [this.rG],
        "text-decoration": [this.tz, bi, Hf, mi],
        "white-space": [this.sG]
    };
    this.f = {};
    this.g = eQ(dQ, k);
    this.a = eQ(dQ, k);
    this.lb = eQ(Zza, k)
}
s(cQ, t);
var dQ = [ih, ch, dh, eh, hh, Ug, bh],
    Zza = [dh, eh],
    fQ = {
        "xx-small": 8,
        "x-small": 10,
        small: 11,
        medium: 12,
        large: 14,
        "x-large": 18,
        "xx-large": 24,
        "1": 8,
        "2": 10,
        "3": 11,
        "4": 12,
        "5": 14,
        "6": 18,
        "7": 24
    },
    $za = /^(([+-]|)[0-9.]+)[\s]*(pt|em|ex|%|px|)$/,
    aAa = RegExp("([^\\s]+\\([^\\)]*\\)|[^\\s]+([\\s]+|$))", ec),
    bAa = {
        inherit: i,
        fixed: i,
        scroll: i,
        local: i,
        none: i,
        bottom: i,
        center: i,
        left: i,
        right: i,
        top: i,
        "no-repeat": i,
        repeat: i,
        "repeat-x": i,
        "repeat-y": i
    },
    cAa = / width=['"]?([^>'" ]+)/i,
    dAa = / height=['"]?([^>'" ]+)/i,
    eAa = RegExp("[\n\r ]+", ec),
    fAa = RegExp("(\r\n|\r|\n)", ec),
    gAa = /^ /,
    hAa = / $/,
    iAa = RegExp("\u00a0{3} ", ec),
    jAa = RegExp(tN, ec),
    kAa = {},
    lAa = {};

function eQ(a, b) {
    for (var c = {}, d = 0; d < a.length; d++) c[a[d]] = b;
    return c
}
n = cQ.prototype;
n.Nh = k;
n.BD = l;
n.Qx = 0;
n.VC = 0;
n.Tt = 0;
n.zK = function (a) {
    this.f[ib(a)] = {
        next: k,
        object: {}
    };
    var b = rh(ih),
        c = b.sa();
    gQ(this, a, c);
    hQ(this, a, c);
    iQ(this);
    a = this.g.text;
    c = this.M.text;
    if (c.length == 1 && (a == k || b.Qa(a))) c.length = 0;
    b = this.M;
    a = [];
    for (var d in b) {
        c = d;
        a.push(new Ty(c, b[c]))
    }
    d = new Wy(this.u.join(v), a, undefined, this.P, this.K, undefined);
    this.G();
    return d
};

function mAa(a, b, c) {
    var d = !! a.aa[b.tagName],
        e = a.a.paragraph;
    gQ(a, b, c);
    d && jQ(a, l);
    hQ(a, b, c);
    d && jQ(a);
    a.a.paragraph = e
}
var nAa = "href",
    oAa = "https://",
    pAa = "kix-line-break",
    qAa = "OL",
    rAa = "LI";

function hQ(a, b, c) {
    b = b.childNodes;
    for (var d = 0, e; e = b[d]; d++) {
        var g = a;
        e = e;
        var h = c.sa();
        if (e.nodeType == 3) {
            g = g;
            e = e;
            h = h;
            var j = e.nodeValue,
                m = g.Tt == 0,
                o = kQ(g, e.parentNode, 2, l);
            e = kQ(g, e.parentNode, 3, l);
            j = j.replace(iAa, Jg);
            if (e) j = j.replace(fAa, Ig);
            o || (j = j.replace(eAa, x));
            j = j.replace(yg, v);
            if (j == v || j == x) {
                if (j == x && !m && g.Nh == k) g.Nh = h
            } else {
                if (iQ(g) || m) j = j.replace(gAa, v);
                if (hAa.test(j)) {
                    g.Nh = h;
                    j = j.replace(hAa, v)
                }
                j = j.replace(jAa, x);
                lQ(g, j, h)
            }
        } else if (e.nodeType == 1) switch (e.tagName) {
        case xd:
            sAa(g, e, h);
            break;
        case XB:
            g =
            g;
            e = e;
            h = h;
            gQ(g, e, h);
            j = l;
            m = g.a.link;
            if (m == k) {
                j = g.a;
                if ((o = e.getAttribute(nAa)) && (Lb(au, o.substr(0, 7)) == 0 || Lb(oAa, o.substr(0, 8)) == 0)) {
                    m = {};
                    m.lnk_type = 0;
                    m.ulnk_url = o;
                    o = {};
                    o.lnks_link = m;
                    m = new SH(o)
                } else m = k;
                m = j.link = m;
                j = i;
                m && h.update(LK())
            }
            mAa(g, e, h);
            if (j) {
                g.g.link = m;
                g.a.link = k
            }
            break;
        case vd:
            g = g;
            e.className == pAa ? lQ(g, Ig, k) : jQ(g, i);
            break;
        case Wua:
        case qAa:
            g = g;e = e;h = h;gQ(g, e, h);jQ(g);j = g.a.list;m = g.a.paragraph;o = 0;
            var q = l;
            if (j) {
                q = i;
                o = j.yb + 1
            }
            var u = q ? j.Bb : k;u || (u = Ww());
            var w = {};w.ls_id = u;w.ls_nest = o;w = new xw(w);
            for (var C = tw(e.tagName == qAa, h.Z()), B = {}, H = 0; H < C.length; H++) B[ww + H] = C[H].Z();C = void 0;H = {};
            if (q) {
                C = g.K[u];
                q = ww + o;
                H[q] = B[q]
            } else {
                C = new sw(u, {});
                H = B
            }
            q = {};q.le_nb = H;C.update(q);g.K[u] || (g.K[u] = C);g.a.list = w;g.a.paragraph = new Bh(NK(o));hQ(g, e, h);g.a.paragraph = m;g.a.list = j;
            break;
        case rAa:
            g = g;e = e;h = h;gQ(g, e, h);hQ(g, e, h);jQ(g);g.a.list || jQ(g);
            break;
        case VC:
            g = g;e = e;h = h;gQ(g, e, h);jQ(g, g.VC == g.Qx);j = tAa(g, e);lQ(g, kg, k);uAa(g, e, h, j);lQ(g, ng, k);
            break;
        case Fd:
        case Ed:
            break;
        default:
            mAa(g, e, h);
            break
        }
    }
}

function gQ(a, b, c) {
    var d = a.Oa[b.tagName];
    d && d[0].call(a, b, c, d[1], d[2]);
    for (var e = b.attributes ? b.attributes.length : 0,
        g = 0;g < e;g++) {
        var h = b.attributes[g];
        if (h.specified)(d = a.Ya[h.nodeName]) && d[0].call(a, b, c, h.nodeValue, d[1], d[2])
    }
    vAa(a, b, c, a.Aa)
}

function vAa(a, b, c, d) {
    var e = b.getAttribute(jd);
    if (e) {
        cb(e) || (e = e.cssText || v);
        e = kAa[e] || (kAa[e] = e.split(Tf));
        for (var g = 0; g < e.length; g++) {
            var h = lAa[e[g]];
            if (!h) {
                h = lAa[e[g]] = e[g].toLowerCase().split(Sf);
                h[0] = Jb(h[0] == k ? v : String(h[0]));
                h[1] = Jb(h[1] == k ? v : String(h[1]))
            }
            var j = h[1];
            (h = d[h[0]]) && h[0].call(a, b, c, j, h[1], h[2], h[3])
        }
    }
}
n.Oq = function (a, b, c, d) {
    a = {};
    a[c] = d;
    b.update(a)
};
n.tz = function (a, b, c, d, e, g) {
    if (c == e || c == g) {
        a = {};
        a[d] = c == g;
        b.update(a)
    }
};
n.pG = function (a, b, c) {
    if (!WK(c)) {
        a = c.split(/,/);
        c = 0;
        for (var d; d = a[c]; c++) {
            d = Jb(d.replace(/['"\s]+/g, x)).toLowerCase();
            var e = k;
            if (e = this.xa ? mra(d, this.xa.M) : mra(d)) {
                b.update(Db(Yh, e));
                return
            }
        }
    }
};
n.VP = function (a, b, c) {
    if (!WK(c)) {
        c = Jb(c).split(eAa);
        if (!(c.length > 4)) switch (c.length) {
        case 1:
            this.Hc(a, b, c[0], bQ, i);
            this.Hc(a, b, c[0], ZP, i);
            this.Hc(a, b, c[0], $P, i);
            this.Hc(a, b, c[0], aQ);
            break;
        case 2:
            this.Hc(a, b, c[0], bQ, i);
            this.Hc(a, b, c[0], ZP, i);
            this.Hc(a, b, c[1], $P, i);
            this.Hc(a, b, c[1], aQ);
            break;
        case 3:
            this.Hc(a, b, c[0], bQ, i);
            this.Hc(a, b, c[1], $P, i);
            this.Hc(a, b, c[1], aQ, i);
            this.Hc(a, b, c[2], ZP);
            break;
        case 4:
            this.Hc(a, b, c[0], bQ, i);
            this.Hc(a, b, c[1], aQ, i);
            this.Hc(a, b, c[2], ZP, i);
            this.Hc(a, b, c[3], $P);
            break;
        default:
        }
    }
};
n.Hc = function (a, b, c, d, e) {
    if (!WK(c)) {
        var g = d == bQ || d == ZP;
        if (!g) if (b = mQ(this, b, c, l, i, g ? this.n.rp - this.n.Eh - this.n.hk : hK(this.n))) {
            c = yb(kQ(this, a, 1, {}));
            switch (d) {
            case $P:
                c.ps_il = (c.ps_il || 0) + b;
                c.ps_ifl = (c.ps_ifl || 0) + b;
                break;
            case aQ:
                c.ps_ir = (c.ps_ir || 0) + b;
                break;
            case bQ:
                break;
            case ZP:
                break;
            case Yza:
                d = c.ps_ifl || 0;
                b = b - (d - (c.ps_il || 0));
                c.ps_ifl = d + b;
                break;
            default:
                return
            }
            kQ(this, a, 1, k, c);
            e || nQ(this).update(c)
        }
    }
};

function kQ(a, b, c, d, e) {
    var g = [],
        h = ib(b);
    if (!a.f[h]) {
        for (var j = b; j && !a.f[ib(j)];) {
            g.push(j);
            j = j.parentNode
        }
        b = j ? ib(j) : k;
        if (j) for (j = a.f[b].next; j;) {
            j = ib(j);
            var m = a.f[j].next;
            delete a.f[j];
            j = m
        } else {
            a.f = {};
            j = g.pop();
            b = ib(j);
            a.f[b] = {}
        }
        for (j = k; j = g.pop();) {
            m = a.f[b];
            b = {};
            b.object = yb(m.object);
            b.next = k;
            m.next = j;
            j = ib(j);
            a.f[j] = b;
            b = j
        }
    }
    g = a.f[h].object[c];
    if (e !== undefined) a.f[h].object[c] = e;
    return g !== undefined ? g : d
}
n.qG = function (a, b, c, d) {
    if (!WK(c)) {
        a = fQ[c.toLowerCase()];
        if (a == k) a = mQ(this, b, c, d);
        if (a != k) {
            a = Math.min(a, 512);
            a = Math.max(a, 1);
            b.update(Db(Zh, a))
        }
    }
};
var wAa = "+px",
    xAa = "+pt",
    yAa = "+em",
    zAa = "+ex",
    AAa = "+%",
    BAa = "-pt",
    CAa = "-ex",
    DAa = "-em",
    EAa = "-%",
    FAa = "-px";

function mQ(a, b, c, d, e, g) {
    a = $za.exec(c);
    if (!a || a.length != 4) return k;
    c = parseFloat(a[1]);
    var h = Math.round(c);
    if (isNaN(h)) return k;
    b = b.eg;
    if (e && a[2] == SB) a[2] = v;
    switch (a[2] + a[3]) {
    case Xj:
    case SB:
        if (d && h > -4 && h < 4) h = fQ[h + 4];
        break;
    case v:
        if (d && h > 0 && h < 8) h = fQ[h];
        break;
    case wAa:
    case D:
        break;
    case xAa:
    case ki:
        break;
    case yAa:
    case qa:
        h = Math.round(c * b);
        break;
    case zAa:
    case ra:
        h = Math.round(c * b * 0.5);
        break;
    case AAa:
    case oa:
        h = Math.round(c * (g || b) * 0.01);
        break;
    case BAa:
    case CAa:
    case DAa:
    case EAa:
    case FAa:
        return k;
    default:
    }
    return h
}
var GAa = "url";
n.WP = function (a, b, c) {
    if (!WK(c)) if ((c = c.match(aAa)) && c.length > 0) for (var d = 0; d < c.length; d++) {
        var e = Jb(c[d].toLowerCase());
        if (!(bAa[e] || e.indexOf(GAa) == 0 || $za.test(e))) {
            this.Wu(a, b, e, Vh);
            break
        }
    }
};
n.Wu = function (a, b, c, d) {
    if (!WK(c)) try {
        var e = CK(c);
        a = {};
        a[d] = e.us;
        b.update(a)
    } catch (g) {}
};
n.rG = function (a, b, c) {
    if (!WK(c)) {
        a = k;
        switch (c.toLowerCase()) {
        case sf:
            a = 0;
            break;
        case $i:
            a = 2;
            break;
        case hH:
            a = 1;
            break;
        case iH:
            a = 3;
            break;
        default:
            return
        }
        c = {};
        c.ps_al = a;
        nQ(this).update(c)
    }
};
var HAa = "nowrap",
    IAa = "pre-line",
    JAa = "pre-wrap",
    KAa = "inherit";
n.sG = function (a, b, c) {
    if (!WK(c)) {
        var d = b = l;
        switch (c.toLowerCase()) {
        case G:
            break;
        case HAa:
            break;
        case IAa:
            d = i;
            break;
        case Xza:
            d = b = i;
            break;
        case JAa:
            d = b = i;
            break;
        case KAa:
            break;
        default:
            return
        }
        kQ(this, a, 2, k, b);
        kQ(this, a, 3, k, d)
    }
};

function nQ(a) {
    var b = a.a.paragraph;
    if (!b) {
        b = rh(eh);
        a.a.paragraph = b
    }
    return b
}
function jQ(a, b) {
    if (a.Tt > 0 || b) {
        oQ(a, eh);
        oQ(a, dh);
        a.BD = i;
        a.u.push(Hd);
        a.Qx++;
        a.Tt = 0;
        a.Nh = k;
        if (!a.BD) a.BD = i
    }
}

function iQ(a) {
    if (a.Nh) {
        lQ(a, x, a.Nh);
        a.Nh = k;
        return i
    }
    return l
}
var LAa = "src";

function sAa(a, b, c) {
    if (b.getAttribute(LAa)) {
        iQ(a);
        var d = {};
        d.eo_type = 0;
        var e = k,
            g = k;
        vAa(a, b, c, {
            width: [function (m, o, q) {
                e = q
            }],
            height: [function (m, o, q) {
                g = q
            }]
        });
        e = b.getAttribute(pd) || e;
        g = b.getAttribute(md) || g;
        if (y.ia) {
            var h = k;
            if (!e)(h = cAa.exec(b.outerHTML)) && (e = h[1]);
            if (!g)(h = dAa.exec(b.outerHTML)) && (g = h[1])
        }
        h = dt;
        if (e && g) {
            var j = mQ(a, c, e, l, l, hK(a.n));
            c = mQ(a, c, g, l, l, a.n.rp - a.n.Eh - a.n.hk);
            if (j && c) {
                j = Math.min(600, j);
                c = Math.min(600, c);
                d.i_wth = j;
                d.i_ht = c;
                h = et
            }
        }
        d.i_cid = h;
        d.i_src = b.src;
        b = {};
        b.ee_eo = d;
        d = Ww();
        a.K[d] =
        qoa(d, b);
        lQ(a, hd, k);
        MAa(a, Lf, d)
    }
}
n.j1 = function (a, b) {
    a.face && this.pG(a, b, a.face);
    a.size && this.qG(a, b, a.size, i);
    a.color && this.Wu(a, b, a.color, Xh)
};
n.k1 = function (a, b) {
    var c = new RH;
    this.M.horizontal_rule[this.u.join(v).length] = c;
    lQ(this, SB, b)
};
n.Ep = function (a, b, c) {
    a = MK(c);
    a.ps_hd = c;
    nQ(this).update(a);
    b.update(JK(c, b))
};

function tAa(a, b) {
    var c = 0,
        d = 0,
        e = 0,
        g = 0;
    pQ(a, b, function () {
        c = Math.max(c, e);
        d = Math.max(d, g);
        g = e = 0
    }, function (h) {
        var j = 1;
        if (h.colSpan) {
            j = parseInt(h.colSpan, 10);
            j = j > 1 ? j : 1
        }
        e += j;
        g++
    });
    c = Math.max(c, e);
    d = Math.max(d, g);
    return Math.min(2 * d + 10, c)
}

function uAa(a, b, c, d) {
    var e = {},
        g = -1,
        h = 0;
    pQ(a, b, function () {
        g++;
        g > 0 && qQ(this, d - h);
        h = 0;
        lQ(this, lg, k)
    }, function (j) {
        for (; e[h];) {
            var m = e[h];
            if (g >= m.top + m.height) delete e[h];
            else {
                qQ(this, Math.min(m.width, d - h));
                h += m.width
            }
        }
        m = parseInt(j.colSpan, 10);
        var o = parseInt(j.rowSpan, 10);
        m = m > 1 ? m : 1;o = o > 1 ? o : 1;
        if (o > 1) e[h] = new mf(h, g, m, o);lQ(this, mg, k);this.Tt = 0;this.VC = this.Qx;hQ(this, j, c);jQ(this, this.VC == this.Qx);
        if (m <= d - h) qQ(this, m - 1);
        else m = 1;h += m
    });
    qQ(a, d - h)
}

function pQ(a, b, c, d) {
    if (b.nodeType == 1) {
        switch (b.tagName) {
        case Cf:
            c.call(a, b);
            break;
        case Vza:
        case HC:
            d.call(a, b);
            return;
        default:
            break
        }
        for (b = b.firstChild; b != k; b = b.nextSibling) pQ(a, b, c, d)
    }
}
function qQ(a, b) {
    for (; b-- > 0;) {
        lQ(a, mg, k);
        jQ(a)
    }
}
function lQ(a, b, c) {
    if (c) {
        oQ(a, ih, c);
        oQ(a, ch)
    }
    a.u.push(b);
    a.Tt += b.length
}

function oQ(a, b, c) {
    c = (c = c ? c : a.a[b]) ? c.sa() : k;
    var d = a.g[b],
        e = rh(b);
    if (c && (d == k || !d.Qa(c) || sh(b))) {
        a.M[b][a.u.join(v).length] = c;
        a.g[b] = c.sa()
    } else if (c == k && d) {
        a.M[b][a.u.join(v).length] = e.sa();
        a.g[b] = k
    }
}
function MAa(a, b, c, d) {
    b = a.P[b] || (a.P[b] = []);
    a = d || a.u.join(v).length - 1;
    (b[a] || (b[a] = [])).push(c)
}
n.q = function () {
    cQ.p.q.call(this);
    delete this.u;
    delete this.M;
    delete this.aa;
    delete this.Oa;
    delete this.Aa;
    delete this.K;
    delete this.f;
    delete this.P;
    for (var a in this.a) {
        var b = a;
        this.a[b] && this.a[b].G()
    }
    delete this.a;
    for (a in this.g) {
        b = a;
        this.g[b] && this.g[b].G()
    }
    delete this.g;
    this.Nh && this.Nh.G();
    delete this.Nh
};

function rQ(a, b) {
    this.name = a;
    this.Ex = b || eJ
};
var sQ = new rQ("add", fJ),
    tQ = new rQ("clear", fJ),
    NAa = new rQ(Yf, fJ),
    OAa = new rQ("detail"),
    uQ = new rQ("fetch"),
    vQ = new rQ(dh),
    wQ = "native",
    PAa = new rQ(wQ),
    QAa = new rQ("thumb"),
    RAa = "translate",
    SAa = new rQ(RAa, fJ);

function TAa(a) {
    a = a.replace(/\r\n/g, Hd);
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        if (e < 128) b[c++] = e;
        else {
            if (e < 2048) b[c++] = e >> 6 | 192;
            else {
                b[c++] = e >> 12 | 224;
                b[c++] = e >> 6 & 63 | 128
            }
            b[c++] = e & 63 | 128
        }
    }
    return b
}
function UAa(a) {
    for (var b = [], c = 0, d = 0; c < a.length;) {
        var e = a[c++];
        if (e < 128) b[d++] = String.fromCharCode(e);
        else if (e > 191 && e < 224) {
            var g = a[c++];
            b[d++] = String.fromCharCode((e & 31) << 6 | g & 63)
        } else {
            g = a[c++];
            var h = a[c++];
            b[d++] = String.fromCharCode((e & 15) << 12 | (g & 63) << 6 | h & 63)
        }
    }
    return b.join(v)
};
var xQ = k,
    yQ = k,
    zQ = k,
    AQ = k;

function VAa(a, b) {
    if (!ab(a)) f(Error("encodeByteArray takes an array as a parameter"));
    WAa();
    for (var c = b ? zQ : xQ,
        d = [],
        e = 0;e < a.length;e += 3) {
        var g = a[e],
            h = e + 1 < a.length,
            j = h ? a[e + 1] : 0,
            m = e + 2 < a.length,
            o = m ? a[e + 2] : 0,
            q = g >> 2;g = (g & 3) << 4 | j >> 4;j = (j & 15) << 2 | o >> 6;o = o & 63;
        if (!m) {
            o = 64;
            h || (j = 64)
        }
        d.push(c[q], c[g], c[j], c[o])
    }
    return d.join(v)
}

function XAa(a, b) {
    if (a.length % 4) f(Error("Length of b64-encoded data must be zero mod four"));
    WAa();
    for (var c = b ? AQ : yQ,
        d = [],
        e = 0;e < a.length;e += 4) {
        var g = c[a.charAt(e)],
            h = c[a.charAt(e + 1)],
            j = c[a.charAt(e + 2)],
            m = c[a.charAt(e + 3)];
        if (g == k || h == k || j == k || m == k) f(Error());
        d.push(g << 2 | h >> 4);
        if (j != 64) {
            d.push(h << 4 & 240 | j >> 2);
            m != 64 && d.push(j << 6 & 192 | m)
        }
    }
    return d
}

function WAa() {
    if (!xQ) {
        xQ = {};
        yQ = {};
        zQ = {};
        AQ = {};
        for (var a = 0; a < 65; a++) {
            xQ[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);
            yQ[xQ[a]] = a;
            zQ[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a);
            AQ[zQ[a]] = a
        }
    }
};
var BQ = "table",
    YAa = new Tc(1, "plain text", 2, IN, 3, "JPEG image", 4, "PNG image", 5, "comma-separated values", 6, "JavaScript object", 7, "XML", 8, "LaTeX", 9, "SVG image", 10, "rich text", 11, "Graphviz", 12, "HTML table", 900, "tabular data", 1E3, "spreadsheet range", 1001, "presentation clipping", 1002, ok, 1003, "embedded YouTube video", 1004, "GMail clipping", 1005, "calendar item", 1006, "Google Earth view", 1008, BQ, 5E3, "Excel range");
for (var ZAa = "text/html", CQ = new Tc(Xq, 1, ZAa, 2, "image/jpeg", 3, "image/png", 4, "text/csv", 5, "application/json", 6, "text/xml", 7, "application/x-latex", 8, "image/svg+xml", 9, "text/rtf", 10, "text/vnd.graphviz", 11, "text/html+table", 12, "application/vnd.google-grid", 900, "application/vnd.google-image", 901, "application/vnd.google-ss", 1E3, "application/vnd.google-preso", 1001, "application/vnd.google-apps.drawing+ref", 1002, "application/vnd.google-yt.embed", 1003, "application/vnd.google-mail", 1004, "application/vnd.google-cal", 1005, "application/vnd.google-earth.kml+xml", 1006, "application/vnd.google-clipboard-hash", 1007, "application/vnd.google-preso+table", 1008, "application/vnd.google-apps.drawing-snapshot", 1009, "application/vnd.google-apps.drawing-shapes-ref", 1010, "application/vnd.google-apps.document-slice", 1011, "application/vnd.ms-excel", 5E3), DQ = new Tc, EQ = 0; EQ < CQ.xb.length; EQ++) {
    var $Aa = CQ.xb[EQ];
    DQ.set(CQ.ze[$Aa], $Aa)
};

function FQ(a, b) {
    if ($a(a)) {
        if (a.length > 1) b = a[1];
        a = a[0]
    }
    var c = DQ.get(a.toString());
    if (c) a = c;
    this.a = a.toString();
    this.mh = b || k
}
var aBa = '; access-type=URL; URL="';
FQ.prototype.toString = function () {
    var a = this.a;
    if (this.mh) a += aBa + this.mh + wb;
    return a
};

function GQ(a) {
    var b = CQ.get(a.a);
    return b ? b.valueOf() : a.a
}
function bBa(a) {
    if (a.mh) return [GQ(a), a.mh];
    return [GQ(a)]
}
FQ.prototype.Iy = function () {
    var a = {};
    a.t = GQ(this);
    if (this.mh) a.url = this.mh;
    return a
};

function cBa(a) {
    if (!hb(a)) return k;
    return new FQ(a.t, a.url)
}
function HQ(a, b, c) {
    this.Gh = a;
    this.g = b;
    this.a = c || k;
    this.f = new Tc
}
s(HQ, t);
n = HQ.prototype;
n.KJ = v;
n.q = function () {
    HQ.p.q.call(this);
    delete this.Gh;
    delete this.a;
    delete this.f
};
n.setProperty = function (a, b) {
    this.f.set(a, b)
};
n.pc = function (a) {
    return this.f.get(a)
};

function dBa(a) {
    var b = a.getData() || v;
    b = VAa(TAa(b));
    b = [bBa(a.Gh), b];
    a.a != k && b.push(bBa(a.a));
    return b
}
n.Iy = function () {
    var a = this.getData() || v;
    a = VAa(TAa(a));
    var b = {};
    b.mt = this.Gh.Iy();
    b.d = a;
    b.doc = this.KJ;
    if (this.a != k) b.dt = this.a.Iy();
    return b
};

function eBa(a) {
    if (!$a(a)) {
        if (hb(a)) if (hb(a)) {
            var b = cBa(a.mt);
            if (b) {
                var c = a.d || v;
                if (c && c.length > 1) c = UAa(XAa(c));
                b = new HQ(b, c);
                if (a.doc) {
                    a = a.doc;
                    b.KJ = a ? a : v
                }
                a = b
            } else a = k
        } else a = k;
        else a = k;
        return a
    }
    b = a[0];
    b = $a(b) ? new FQ(b[0], b.length > 1 ? b[1] : k) : k;
    if (!b) return k;c = v;
    if (a.length > 1 && a[1] != k) c = UAa(XAa(a[1]));
    return new HQ(b, c)
}
n.getData = function () {
    return this.g
};
var fBa = "cloudboardUpdate";

function IQ(a, b, c) {
    Pd.call(this, fBa);
    this.a = a;
    this.g = b;
    this.u = c
}
s(IQ, Pd);
var JQ = "cloudboardError";

function gBa(a, b, c) {
    Pd.call(this, JQ);
    this.a = a;
    this.message = b;
    this.g = c
}
s(gBa, Pd);

function KQ(a, b, c, d, e, g, h) {
    this.u = a;
    this.P = b;
    this.n = c;
    this.K = d;
    this.M = e ? e : (new Date).getTime();this.a = g;this.f = h || 0
}
KQ.prototype.ma = function () {
    return this.u
};

function hBa(a) {
    for (var b = [], c = 0; c < a[7].length; c++) b.push(new HQ(new FQ(a[7][c]), k));
    b = new KQ(a[0], a[1], a[2], a[4], a[5], b, a[3]);
    a = a[6];
    if (a != k) {
        a = eBa(a);
        b.g = a
    }
    return b
};

function LQ(a) {
    this.f = a;
    this.a = []
}
s(LQ, t);
LQ.prototype.q = function () {
    LQ.p.q.call(this);
    this.a = k
};

function MQ() {}
s(MQ, Pi);
MQ.prototype.Et = function () {};
var iBa = "cbServerResponse";

function NQ(a, b, c) {
    Pd.call(this, iBa);
    this.a = a;
    this.Ui = c;
    try {
        this.data = rK(b)
    } catch (d) {
        f(Error("Could not parse result from server!"))
    }
}
s(NQ, Pd);

function OQ() {
    this.a = new ze(this)
}
s(OQ, MQ);
n = OQ.prototype;
n.s1 = v;
n.q = function () {
    this.a.G();
    this.a = k
};
n.init = function (a) {
    this.Hb = a || new dJ;
    this.Hb.Yt = Math.max(0, 15E3);
    this.a.C(this.Hb, jJ, this.n0);
    this.a.C(this.Hb, lJ, this.w0);
    this.a.C(this.Hb, as, this.RG);
    this.a.C(this.Hb, pqa, this.RG)
};
n.n0 = function () {};
n.w0 = function () {
    this.dispatchEvent(new NQ(i, oJ(this.Hb).replace(/^[^[{]+/, v), this.f))
};
n.RG = function (a) {
    var b = a.target.Ah;
    if (b != 7) {
        var c = {};
        c.uri = String(a.target.GK);
        c.msg = a.target.Wr();
        c.code = b;
        this.dispatchEvent(new NQ(l, cr(c), this.f))
    }
};
n.Et = function (a, b, c, d, e) {
    this.Hb.ri && hJ(this.Hb);
    var g = new Tc(uJ, Fq);
    this.f = e || {};
    this.f.BQ = a;
    this.Hb.send(this.s1 + c, b, d, g)
};

function PQ(a, b, c, d, e, g) {
    this.$q = a;
    this.f = b;
    this.K = fb(d) ? Math.abs(d) : 10;a = this.f;b = [];
    for (d = 0; d < a.length; d++) {
        b[d] = GQ(a[d]);
        if (a[d].mh != k) b[d] += hd;
        b[d] = Mb(b[d])
    }
    this.TG = b.join();this.Ec = c || new OQ;this.aa = e || 1E3;this.a = g || new LQ(this.$q + Sf + this.TG + Sf + this.K);this.g = new ze(this)
}
s(PQ, Pi);
n = PQ.prototype;
n.dQ = l;
n.FK = 0;
n.Hp = Hj;
n.St = v;
n.init = function () {
    if (this.Ec) {
        this.g.C(this.Ec, iBa, this.OX);
        this.Ec.init()
    }
};
n.q = function () {
    PQ.p.q.call(this);
    this.M = this.n = this.u = k;
    this.g.G();
    this.g = k;
    this.a.G();
    this.a = k
};

function jBa(a, b) {
    return nc(b, function (c) {
        return cBa(c)
    })
}
var kBa = "refresh",
    lBa = "cloudboardItemDetail";
n.OX = function (a) {
    var b = a.Ui.BQ,
        c = a.a,
        d = !c;
    switch (b) {
    case vQ.name:
        if (c) {
            this.xa = a.data;
            c = a.data.items;
            for (var e = [], g = 0; g < c.length; g++) e.push(hBa(c[g]));
            this.a.a = e;
            this.Aa = (new Date).getTime();
            this.dispatchEvent(new IQ(kBa))
        }
        break;
    case sQ.name:
        c && QQ(this);
        break;
    case NAa.name:
        c && QQ(this);
        break;
    case tQ.name:
        c && QQ(this);
        break;
    case uQ.name:
    case PAa.name:
        this.u.call(this.n, c ? eBa(a.data.rep) : k);
        this.n = this.u = k;
        d = l;
        break;
    case OAa.name:
        if (c) {
            c = a.data;
            c.nt = jBa(this, c[wQ]);
            c.tt = jBa(this, c.translated);
            this.dispatchEvent(new IQ(lBa, c.id, c))
        }
        break;
    case SAa.name:
        this.M.call(this, c ? a.data.translated : undefined);
        this.M = k;
        d = l;
        break;
    default:
        break
    }
    d && this.dispatchEvent(new gBa(b, a.data.msg, a))
};

function QQ(a) {
    a.dQ && Oj(function () {
        mBa(this, i)
    }, 100, a)
}
var nBa = "item=";
n.xd = function (a, b) {
    var c = nc(a.a, function (e) {
        return e.Iy()
    }),
        d = a.g;
    c = {
        desc: a.n,
        icon: a.f,
        src: a.K,
        thumb: d ? dBa(d) : k,
        reps: c,
        v: 2
    };
    c.app = this.$q;
    if (this.St) c.docid = this.St;
    if (b) c[wQ] = b;
    this.Ec.Et(sQ.name, sQ.Ex, this.Hp + sQ.name, nBa + Mb(cr(c)), {
        "native": b != v
    })
};

function oBa(a, b) {
    return qc(a.a.a, function (c) {
        return c.ma() == b
    })
}
n.Vr = function () {
    return this.a.a
};
var pBa = "?max=",
    qBa = "&app=",
    rBa = "&ins=1";

function mBa(a, b, c, d) {
    if (b || (new Date).getTime() - a.FK > a.aa) {
        if (a.f.length == 0) return l;
        var e = fb(c) ? c : a.K;a.FK = (new Date).getTime();a.P = new Ar(function () {
            this.Ec.Et(vQ.name, vQ.Ex, (this.Hp + vQ.name + Hj + this.TG + pBa + e + qBa + this.$q + (d ? rBa : v)).toString())
        }, 50, a);a.P.start();
        return i
    } else return l
};
var sBa = "/cb/";

function RQ(a, b, c, d, e) {
    this.L = new ze(this);
    this.f = [];
    this.a = e || new PQ(a, c);
    this.a.Hp = (d ? sB + d : v) + sBa;
    this.a.St = b;
    this.L.C(this.a, fBa, this.n);
    this.L.C(this.a, JQ, this.g);
    this.a.init()
}
s(RQ, Pi);
RQ.prototype.n = function (a, b) {
    var c = b || this.f;
    a.a == kBa && c.length > 0 && c.pop().call(k, this.a.Vr())
};
RQ.prototype.g = function (a) {
    this.dispatchEvent(a)
};
RQ.prototype.q = function () {
    RQ.p.q.call(this);
    this.L.G();
    delete this.L;
    this.a.G();
    delete this.a
};
var tBa = DQ.get(3).toString(),
    uBa = DQ.get(4).toString(),
    vBa = DQ.get(901).toString(),
    wBa = DQ.get(1).toString(),
    SQ = DQ.get(2).toString();
DQ.get(12).toString();
DQ.get(5).toString();
DQ.get(900).toString();
DQ.get(1002).toString();
DQ.get(1009).toString();
DQ.get(1010).toString();
var TQ = DQ.get(1011).toString();
var xBa = /<style.*?>.*?<\/style[^>]*>/ig,
    yBa = /<script.*?>.*?<\/script[^>]*>/ig,
    zBa = /(<(\/h\d|\/?p|br.*?|\/div)>)/ig;

function UQ(a, b, c) {
    this.n = a;
    this.g = b;
    this.f = c
}
UQ.prototype.gb = function () {
    return this.n.gb(this.g.ma())
};

function VQ(a) {
    UQ.call(this, a, K.rq, K.bz);
    WQ(a, K.rq.ma(), [K.bz, k, k, K.qu, k, K.cz])
}
s(VQ, UQ);
VQ.prototype.a = 0;
var ABa = "docs-clipboard-clearall";
VQ.prototype.init = function () {
    K.qu.X(l);
    z.ba.add(bp(this.gb(), 3).db(), ABa)
};

function BBa(a, b) {
    var c = a.gb(),
        d = bp(c, 3);
    lc(b, function (e) {
        c.fj(e, 2, i)
    });
    d.X(b.length > 0);
    a.a = b.length
};

function XQ(a, b, c, d) {
    this.n = a;
    this.g = b || k;
    this.f = c || k;
    this.a = d || k
}
new FQ(vBa);
XQ.prototype.Rc = function () {
    return this.f
};
XQ.prototype.uf = function () {
    return this.a
};

function YQ(a, b) {
    this.f = a instanceof bd ? a : new bd(a, b)
}
s(YQ, LN);
YQ.prototype.a = function (a, b, c, d) {
    var e = wf(a);
    JN(e, 0, a, b, new bd(this.f.x + e.scrollLeft, this.f.y + e.scrollTop), c, k, d)
};

function ZQ(a, b) {
    YQ.call(this, a, b)
}
s(ZQ, YQ);
ZQ.prototype.a = function (a, b, c, d) {
    var e = wf(a);
    e = RK(e);
    var g = z.J(a).KA();
    g = new bd(this.f.x + g.scrollLeft, this.f.y + g.scrollTop);
    var h = b,
        j = KN(g, a, h, c, e, 10, d);
    if ((j & 496) != 0) {
        if (j & 16 || j & 32) h ^= 2;
        if (j & 64 || j & 128) h ^= 1;
        j = KN(g, a, h, c, e, 10, d);
        (j & 496) != 0 && KN(g, a, b, c, e, undefined, d)
    }
};

function $Q(a, b) {
    this.a = new ze(this);
    this.my(a || k);
    if (b) this.Bo = b
}
s($Q, Pi);
n = $Q.prototype;
n.ua = k;
n.cQ = i;
n.BG = k;
n.nm = l;
n.e2 = l;
n.UC = -1;
n.QC = -1;
n.EJ = l;
n.JR = i;
var aR = "toggle_display";
n.Bo = aR;
var bR = "beforeshow",
    CBa = "beforehide",
    DBa = {
        hN: bR,
        s4: JM,
        c3: CBa,
        SN: KM
    };
n = $Q.prototype;
n.O = function () {
    return this.Bo
};
n.z = function () {
    return this.ua
};
n.my = function (a) {
    EBa(this);
    this.ua = a
};

function EBa(a) {
    if (a.nm) f(Error("Can not change this state of the popup while showing."))
}
n.Da = function () {
    return this.nm
};
var cR = "move_offscreen";
n.X = function (a) {
    if (a) {
        if (!this.nm) if (this.vD()) {
            if (!this.ua) f(Error("Caller must call setElement before trying to show the popup"));
            this.dm();
            a = z.wb(this.ua);
            this.EJ && this.a.C(a, Qj, this.o0, i);
            if (this.cQ) {
                this.a.C(a, Co, this.sL, i);
                if (y.ia) {
                    for (var b = a.activeElement; b && b.nodeName == zd;) {
                        try {
                            var c = z.Te(b)
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.a.C(a, Co, this.sL, i);
                    this.a.C(a, qsa, this.rL)
                } else this.a.C(a, yo, this.rL)
            }
            if (this.Bo == aR) {
                this.ua.style.visibility = Gi;
                Qf(this.ua, i)
            } else this.Bo == cR && this.dm();
            this.nm = i;
            this.oB()
        }
    } else dR(this)
};
n.dm = Pa;
var FBa = "-200px";

function dR(a, b) {
    if (!a.nm || !a.dispatchEvent({
        type: CBa,
        target: b
    })) return l;
    a.a && De(a.a);
    if (a.Bo == aR) a.e2 ? Oj(a.FJ, 0, a) : a.FJ();
    else if (a.Bo == cR) {
        a.ua.style.left = FBa;
        a.ua.style.top = FBa
    }
    a.nm = l;a.cm(b);
    return i
}
n.FJ = function () {
    this.ua.style.visibility = Kf;
    Qf(this.ua, l)
};
n.vD = function () {
    return this.dispatchEvent(bR)
};
n.oB = function () {
    this.UC = lb();
    this.QC = -1;
    this.dispatchEvent(JM)
};
n.cm = function (a) {
    this.QC = lb();
    this.dispatchEvent({
        type: KM,
        target: a
    })
};
n.sL = function (a) {
    a = a.target;
    if (!z.contains(this.ua, a) && (!this.BG || z.contains(this.BG, a)) && !(lb() - this.UC < 150)) dR(this, a)
};
n.o0 = function (a) {
    if (a.keyCode == 27) if (dR(this, a.target)) {
        a.preventDefault();
        a.stopPropagation()
    }
};
n.rL = function (a) {
    if (this.JR) {
        var b = z.wb(this.ua);
        if (y.ia || y.Gc) {
            if ((a = b.activeElement) && z.contains(this.ua, a)) return
        } else if (a.target != b) return;
        lb() - this.UC < 150 || dR(this)
    }
};
n.q = function () {
    $Q.p.q.call(this);
    this.a.G();
    delete this.ua;
    delete this.a
};

function eR(a, b) {
    pN.call(this, a, b);
    qN(this, i);
    this.X(l, i);
    this.a = new Tc
}
s(eR, pN);
n = eR.prototype;
n.$T = l;
n.BK = 0;
n.QI = k;
n.ob = function (a) {
    eR.p.ob.call(this, a);
    if (a = a.getAttribute(ld) || a.htmlFor) {
        a = this.J().z(a);
        if (!(a ? this.a.Ad(ib(a)) : l)) {
            if (a) {
                var b = {
                    ua: a,
                    DM: 1,
                    F_: void 0,
                    QR: Co,
                    Bx: void 0
                };
                this.a.set(ib(a), b);
                a = b
            } else a = k;
            this.cb && this.wG(a)
        }
    }
};
n.ga = function () {
    eR.p.ga.call(this);
    Sc(this.a, this.wG, this);
    var a = So(this);
    a.C(this, Mi, this.g0);
    a.C(this.J().Va(), Co, this.qL, i);
    y.La && a.C(this.J().Va(), bC, this.qL, i)
};
n.wG = function (a) {
    So(this).C(a.ua, a.QR, this.x0)
};

function GBa(a, b, c, d, e) {
    var g = a.Da();
    if ((g || lb() - a.BK < 150) && a.$T) fR(a);
    else {
        a.QI = e || k;
        if (a.dispatchEvent(bR)) {
            c = typeof c != "undefined" ? c : 4;
            if (!g) a.z().style.visibility = Kf;Qf(a.z(), i);b.a(a.z(), c, d);
            if (!g) a.z().style.visibility = Gi;$M(a, -1);a.X(i)
        }
    }
}
n.vy = function (a, b, c) {
    GBa(this, new ZQ(a, b), c)
};

function fR(a) {
    a.X(l);
    if (!a.Da()) {
        a.BK = lb();
        a.QI = k
    }
}
n.g0 = function () {
    fR(this)
};
n.x0 = function (a) {
    for (var b = this.a.Ue(), c = 0; c < b.length; c++) {
        var d = this.a.get(b[c]);
        if (d.ua == a.currentTarget) {
            GBa(this, p(d.DM) ? new NN(d.ua, d.DM, i) : new ZQ(a.clientX, a.clientY),
            d.F_,
            d.Bx,
            d.ua);
            a.preventDefault();
            a.stopPropagation();
            return
        }
    }
};
n.qL = function (a) {
    this.Da() && !this.Ng(a.target) && fR(this)
};
n.Ze = function (a) {
    eR.p.Ze.call(this, a);
    fR(this)
};
n.q = function () {
    eR.p.q.call(this);
    if (this.a) {
        this.a.clear();
        delete this.a
    }
};

function gR() {
    this.f = []
}
s(gR, fN);
Qa(gR);
var hR = "goog-submenu";
gR.prototype.F = function (a) {
    var b = gR.p.F.call(this, a);
    z.ba.add(b, hR);
    HBa(this, a, b);
    return b
};
gR.prototype.gc = function (a, b) {
    b = gR.p.gc.call(this, a, b);
    z.ba.add(b, hR);
    HBa(this, a, b);
    var c = z.oc(A, mN, b);
    if (c.length) {
        var d = new pN(a.J());
        c = c[0];
        Qf(c, l);
        a.J().Va().body.appendChild(c);
        Zo(d, c);
        a.Td(d, i)
    }
    return b
};
var IBa = "goog-submenu-arrow";
gR.prototype.hh = function (a) {
    gR.p.hh.call(this, a);
    var b = a.db(),
        c = a.J().oc(Ee, IBa, b)[0];
    JBa(a, c);
    c != b.lastChild && b.appendChild(c);
    z.qb.Ka(a.z(), nN, Fq)
};

function HBa(a, b, c) {
    var d = b.J().F(Ee);
    d.className = IBa;
    JBa(b, d);
    a.Od(c).appendChild(d)
}
var KBa = "goog-submenu-arrow-rtl",
    LBa = "\u25c4",
    MBa = "\u25ba";

function JBa(a, b) {
    if (jK(a)) {
        z.ba.add(b, KBa);
        z.Ud(b, a.Uu ? LBa : MBa)
    } else {
        z.ba.remove(b, KBa);
        z.Ud(b, a.Uu ? MBa : LBa)
    }
};

function iR(a, b, c, d) {
    kN.call(this, a, b, c, d || gR.N())
}
s(iR, kN);
n = iR.prototype;
n.zr = k;
n.pE = k;
n.AJ = l;
n.jd = k;
n.Sv = l;
n.Uu = i;
n.bC = l;
n.ga = function () {
    iR.p.ga.call(this);
    So(this).C(this.ib, KM, this.tL);
    this.jd && jR(this, this.jd, i)
};
n.pb = function () {
    So(this).a(this.ib, KM, this.tL);
    if (this.jd) {
        jR(this, this.jd, l);
        if (!this.Sv) {
            this.jd.pb();
            z.removeNode(this.jd.z())
        }
    }
    iR.p.pb.call(this)
};
n.q = function () {
    this.jd && !this.Sv && this.jd.G();
    this.jd = k;
    iR.p.q.call(this)
};
n.gd = function (a, b) {
    iR.p.gd.call(this, a);
    if (b) this.gb().Hh = i;
    if (!a) {
        this.zr && Pj(this.zr);
        this.zr = Oj(this.di, 350, this)
    }
};
n.oE = function () {
    var a = this.ib;
    if (a && aN(a) == this) {
        NBa(this, i);
        OBa(this);
        this.n = l
    }
};
n.di = function () {
    var a = this.jd;
    if (a && a.ib == this) {
        NBa(this, l);
        $o(a, function (b) {
            typeof b.di == Ua && b.di()
        })
    }
};

function kR(a) {
    a.zr && Pj(a.zr);
    a.pE && Pj(a.pE)
}
n.X = function (a, b) {
    var c = iR.p.X.call(this, a, b);
    c && !this.Da() && this.di();
    return c
};

function OBa(a) {
    for (var b = a.ib.Vr(), c = 0; c < b.length; c++) if (b[c] != a && typeof b[c].di == Ua) {
        b[c].di();
        kR(b[c])
    }
}
n.ti = function (a) {
    var b = a.keyCode;
    if (this.AJ) {
        if (!this.gb().vw(a)) if (b == 37) this.di();
        else return l
    } else if (this.Ab() && b == 39) {
        this.oE();
        Jua(this.gb());
        kR(this)
    } else return l;
    a.preventDefault();
    return i
};
n.j0 = function () {
    if (this.jd.ib == this) {
        kR(this);
        this.vp.gd(this);
        OBa(this)
    }
};
n.tL = function (a) {
    if (a.target == this.vp) {
        this.di();
        kR(this)
    }
};
n.Yl = function (a) {
    if (this.Ab()) {
        kR(this);
        this.pE = Oj(this.oE, 350, this)
    }
    iR.p.Yl.call(this, a)
};
n.Kf = function () {
    kR(this);
    this.oE();
    return i
};
var PBa = "goog-submenu-open";

function NBa(a, b) {
    a.dispatchEvent(tsa(64, b));
    var c = a.gb();
    if (b != c.Da()) {
        if (b) {
            c.cb || c.Ja();
            var d = new NN(a.z(), a.Uu ? 6 : 4,
            a.bC),
                e = a.gb(),
                g = e.z();
            if (!e.Da()) {
                g.style.visibility = Kf;
                Qf(g, i)
            }
            d.a(g, a.Uu ? 4 : 6);
            if (!e.Da()) {
                Qf(g, l);
                g.style.visibility = Gi
            }
            $M(c, -1)
        }
        a.AJ = b;
        z.ba.md(a.z(), PBa, b);
        c.X(b)
    }
}

function jR(a, b, c) {
    var d = So(a);
    (c ? d.C : d.a).call(d, b, FK, a.j0)
}
n.xd = function (a) {
    this.gb().ya(a, i)
};
n.removeItem = function (a) {
    (a = this.gb().removeChild(a, i)) && a.G()
};
n.Vr = function () {
    return this.gb().Vr()
};
n.gb = function () {
    if (this.jd) this.Sv && this.jd.ib != this && Uo(this.jd, this);
    else this.Td(new pN(this.J()), i);
    this.jd.z() || this.jd.F();
    return this.jd
};
n.Td = function (a, b) {
    var c = this.jd;
    if (a != c) {
        if (c) {
            this.di();
            this.cb && jR(this, c, l)
        }
        this.jd = a;
        this.Sv = !b;
        if (a) {
            Uo(a, this);
            a.X(l, i);
            qN(a, l);
            dN(a, l);
            this.cb && jR(this, a, i)
        }
    }
};
n.Ng = function (a) {
    return this.gb().Ng(a)
};
yM(hR, function () {
    return new iR(k)
});

function lR(a) {
    this.a = {};
    this.f = {};
    this.g = a || new sM
}
s(lR, t);
var QBa = [],
    RBa = Eb(Fi, el, LD, Gi);
lR.prototype.q = function () {
    lR.p.q.call(this);
    for (var a in this.f) this.f[a].G();
    this.g.G();
    delete this.a;
    delete this.f;
    delete this.g
};

function mR(a, b) {
    var c = a.a[b];
    return c ? c.Es : QBa
}
function WQ(a, b, c, d) {
    xb(a.a, b, {
        Es: c,
        M2: d || k
    })
}
lR.prototype.gb = function (a) {
    var b = this.a[a];
    a = a + 1;
    var c = this.f[a];
    if (!c) {
        c = this.f[a] = new pN;
        nR(this, c, b.Es)
    }
    return c
};
var oR = "goog-menu-noaccel",
    pR = "goog-menu-noicon";

function nR(a, b, c) {
    var d = l,
        e = l,
        g = l,
        h = b.J();
    c = Mc(c);
    for (var j = 0, m = c.length; j < m; j++) {
        var o = c[j];
        if (o) if (gb(o)) {
            e = g = i;
            o(b)
        } else {
            o = o;
            e = e || o.pc(Ji);
            g = g || o.pc(el) || eb(o.pc(Hi));
            var q, u = a.a[o.ma()];
            if (u) {
                var w = new iR(k, o.ma(), h);
                w.bC = i;
                q = w;
                d = i;
                Qf(w.gb().z(), l);
                a.g.a(q, o, RBa, u.M2)
            } else {
                q = new qR(h, o);
                a.g.a(q, o, bua)
            }
            b.ya(q, i)
        } else b.ya(new oN, i)
    }
    if (!b.cb) {
        b.X(l, i);
        b.Ja()
    }
    d && oe(b, aF, a.n, l, a);
    e || z.ba.add(b.z(), oR);
    g || z.ba.add(b.z(), pR);
    oe(b, [JM, KM], SBa);
    TBa(b);
    return b
}

function qR(a, b) {
    kN.call(this, k, k, a);
    this.n = b
}
s(qR, kN);
qR.prototype.Kf = function (a) {
    if (OM(this, 16) && FM(this, 16) && this.n.pc(Oi)) return l;
    return qR.p.Kf.call(this, a)
};
lR.prototype.n = function (a) {
    var b = a.target;
    if (b.ib == a.currentTarget) {
        a = b.gb();
        if (!a || ap(a) == 0) {
            a = b.Il() || b.z().id;
            b.Td(this.gb(a))
        }
    }
};

function SBa(a) {
    var b = a.target;
    b.ib == a.currentTarget && b instanceof kN && !(b instanceof oN) && TBa(a.currentTarget, b)
}

function TBa(a, b) {
    var c = k,
        d = i;
    $o(a, function (e) {
        var g = e instanceof oN;
        g && e.X(!d);
        if (e.Da() != (e == b)) if (d = g) c = e
    });
    d && c && c.X(l)
};

function rR(a, b) {
    this.f = a instanceof bd ? a : new bd(a, b)
}
s(rR, LN);
rR.prototype.a = function (a, b, c, d) {
    JN(wf(a), 0, a, b, this.f, c, k, d)
};

function sR(a, b) {
    this.Ya = 4;
    this.aa = b || undefined;
    $Q.call(this, a)
}
s(sR, $Q);

function tR(a, b) {
    a.aa = b || undefined;
    a.Da() && a.dm()
}
sR.prototype.dm = function () {
    if (this.aa) {
        var a = !this.Da() && this.O() != cR,
            b = this.z();
        if (a) {
            b.style.visibility = Kf;
            Qf(b, i)
        }
        this.aa.a(b, this.Ya, this.Bx);
        a && Qf(b, l)
    }
};
var uR = '<div class="',
    UBa = "CSS_SHORTCUTS_HELP_POPUP_CONTAINER",
    VBa = '" role="alert" tabindex="-1"><table cellpadding="0" class="',
    vR = "CSS_APP_TABLE",
    WBa = "CSS_SHORTCUTS_HELP_POPUP_HEADER",
    XBa = '"><tr><td class="',
    YBa = "CSS_SHORTCUTS_HELP_POPUP_TITLE",
    ZBa = "CSS_SHORTCUTS_HELP_POPUP_HEADER_TABLE_ELEMENT",
    $Ba = '</td><td class="',
    aCa = "CSS_SHORTCUTS_HELP_POPUP_TEAROFF_LINK_CONTAINER",
    bCa = '"><a id="',
    cCa = '" target="keyboard_shortcuts_help_window" href="',
    dCa = '" class="',
    eCa = "CSS_SHORTCUTS_HELP_POPUP_TEAROFF_LINK",
    fCa = "Open in a new window",
    gCa = '</a> | <span id="',
    hCa = '</span></td></tr></table><table cellpadding="0" class="',
    iCa = "CSS_SHORTCUTS_HELP_POPUP_CONTENT",
    jCa = '"><tr>',
    kCa = '<td class="',
    wR = "CSS_SHORTCUTS_HELP_POPUP_CONTENT_ELEMENT",
    lCa = '"><table cellpadding="0" class="',
    mCa = '"><tbody>',
    nCa = '<tr><th class="',
    oCa = "CSS_SHORTCUTS_HELP_POPUP_CONTENT_HEADER",
    pCa = '" /><th class="',
    qCa = "</th></tr>",
    rCa = '<tr><td class="',
    sCa = "CSS_SHORTCUTS_HELP_POPUP_KEY",
    tCa = ':</td><td class="',
    uCa = "CSS_SHORTCUTS_HELP_POPUP_DESCRIPTION",
    vCa = "</tbody></table></td>",
    wCa = "</tr></table></div>";

function xCa(a, b) {
    var c = b || new N;
    c.append(uR, UBa, VBa, vR, x, WBa, XBa, YBa, x, ZBa, Qe, Uk, $Ba, aCa, x, ZBa, bCa, a.v2, cCa, hO(a.d2), dCa, eCa, Qe, fCa, gCa, a.AQ, dCa, eCa, Qe, Lp, hCa, vR, x, iCa, jCa);
    for (var d = a.br, e = d.length, g = 0; g < e; g++) {
        var h = d[g];
        c.append(kCa, wR, lCa, vR, mCa);
        h = h;
        for (var j = h.length, m = 0; m < j; m++) {
            var o = h[m];
            c.append(nCa, oCa, pCa, oCa, Qe, hO(o.title), qCa);
            o = o.Rt;
            for (var q = o.length, u = 0; u < q; u++) {
                var w = o[u];
                c.append(rCa, sCa, x, wR, Qe, w.key, tCa, uCa, x, wR, Qe, hO(w.description), sH)
            }
        }
        c.append(vCa)
    }
    c.append(wCa);
    if (!b) return c.toString()
}
var yCa = "CSS_SHORTCUTS_HELP_POPUP_AUXILIARY_WORD",
    zCa = "CSS_SHORTCUTS_HELP_POPUP_KEY_MNEMONIC",
    ACa = "</span> ";

function BCa(a, b) {
    for (var c = b || new N, d = a.QE, e = d.length, g = 0; g < e; g++) c.append(iy, g % 2 ? yCa : zCa,
    Qe,
    hO(d[g]),
    ACa);
    if (!b) return c.toString()
};
var CCa = "CSS_SHORTCUTS_HELP_POPUP";

function DCa(a, b, c, d) {
    d = d || z.J();
    var e = d.F(A);
    z.ba.add(e, CCa);
    (c || d.Va().body).appendChild(e);
    Pf(e, 0.85);
    Qf(e, l);
    sR.call(this, e);
    a = nc(a, function (h) {
        return nc(h, function (j) {
            var m = nc(j.Rt, ECa);
            return {
                title: j.title,
                Rt: m
            }
        })
    });
    var g = Po.N();
    c = Sf + (g.a++).toString(36);
    g = Sf + (g.a++).toString(36);
    e.innerHTML = xCa({
        d2: b,
        v2: c,
        AQ: g,
        br: a
    });
    oe(d.z(c), Ud, r(this.X, this, l));
    oe(d.z(g), Ud, r(this.X, this, l));
    EBa(this);
    this.EJ = i
}
s(DCa, sR);
var FCa = {
    Alt: Xta,
    Ctrl: Rq,
    Shift: Wta
};

function ECa(a) {
    var b;
    if ($a(a)) {
        b = a[0];
        a = a[1]
    } else {
        b = a.Ue();
        a = a.pc(LD)
    }
    b = nc(b.split(/\b/), function (c) {
        return y.Fc && FCa[c] || c
    });
    b = BCa({
        QE: b
    });
    return {
        key: b,
        description: a
    }
};
var GCa = "target",
    HCa = "noreferrer",
    ICa = '<META HTTP-EQUIV="refresh" content="0; url=';

function xR(a, b, c) {
    b || (b = {});
    var d = c || window;
    c = typeof a.href != "undefined" ? a.href : String(a);a = b.target || a.target;
    var e = [];
    for (var g in b) switch (g) {
    case pd:
    case md:
    case tf:
    case sf:
        e.push(g + Pt + b[g]);
        break;
    case GCa:
    case HCa:
        break;
    default:
        e.push(g + Pt + (b[g] ? 1 : 0))
    }
    g = e.join(Gj);
    if (b.noreferrer) {
        if (b = d.open(v, a, g)) {
            b.document.write(ICa + Vb(c) + Qe);
            b.document.close()
        }
    } else b = d.open(c, a, g);
    return b
}
var JCa = 'javascript:"';

function KCa(a, b, c) {
    a = a ? Vb(a) : v;
    return xR(JCa + encodeURI(a) + wb, b, c)
};
var LCa = {
    en: 1,
    ar: 1,
    bg: 1,
    ca: 1,
    cs: 1,
    da: 1,
    de: 1,
    el: 1,
    en_GB: 1,
    es: 1,
    et: 1,
    fi: 1,
    fil: 1,
    fr: 1,
    hi: 1,
    hr: 1,
    hu: 1,
    id: 1,
    is: 1,
    it: 1,
    iw: 1,
    ja: 1,
    ko: 1,
    lt: 1,
    lv: 1,
    ms: 1,
    nl: 1,
    no: 1,
    pl: 1,
    pt_BR: 1,
    pt_PT: 1,
    ro: 1,
    ru: 1,
    sk: 1,
    sl: 1,
    sr: 1,
    sv: 1,
    th: 1,
    tr: 1,
    uk: 1,
    vi: 1,
    zh_CN: 1,
    zh_TW: 1
},
    MCa = "//www.google.com/tools/feedback";

function NCa(a, b) {
    return a.serverUri || (b ? jr : v) + MCa
}
function OCa(a) {
    return (a = (a.locale || a.language || v).replace(SB, pJ)) ? a in LCa ? a : cf : v
};
var PCa = ".copy-checkbox",
    QCa = ".copy-filename-input",
    RCa = "Copy Document?",
    SCa = "<div>Would you like to create a new copy of the document?</div>",
    TCa = '<div><br><input id="',
    UCa = '" type="text" style="width: 250px;"></div>',
    VCa = '<div><br><label for="',
    WCa = '<input id="',
    XCa = '" type="checkbox">',
    YCa = "Also copy document collaborators",
    ZCa = "</label></div>";

function yR(a, b, c) {
    cp.call(this, a, b, c);
    this.f = this.ZB = this.YB = l;
    this.n = i;
    this.g = v;
    this.kv = this.ma() + PCa;
    this.a = this.ma() + QCa;
    this.setTitle(RCa);
    ep(this, bc(SCa, TCa, this.a, UCa, VCa, this.kv, Qe, WCa, this.kv, XCa, YCa, ZCa))
}
s(yR, cp);
yR.prototype.X = function (a) {
    yR.p.X.call(this, a);
    if (a) {
        zR(this);
        if (a = this.J().z(this.a)) {
            a.value = this.g;
            Qf(a.parentNode, !this.n)
        }
    }
};

function zR(a) {
    var b = a.J().z(a.kv);
    if (b) {
        b.disabled = l;
        b.checked = a.YB;
        b.disabled = a.ZB;
        Qf(b.parentNode.parentNode, !a.f)
    }
}

function $Ca(a, b) {
    a.YB = b;
    zR(a)
}
function aDa(a, b) {
    a.ZB = b;
    zR(a)
}
function bDa(a, b) {
    a.f = b;
    zR(a)
};
yM("menu-button", function () {
    return new QN(k, k, AM.N())
});

function AR(a, b, c) {
    YM.call(this, a, b, c)
}
s(AR, YM);
AR.prototype.We = function (a) {
    return z.ba.Pd(a, XM)
};
AR.prototype.f = function () {
    cDa(this);
    $M(this, -1);
    bp(this, 0).$b(i);
    if (y.Fc) try {
        this.z().focus()
    } catch (a) {} else Oj(function () {
        try {
            this.z().focus()
        } catch (b) {}
    }, 0, this)
};

function cDa(a) {
    for (var b = 0; b < ap(a); b++) bp(a, b).$b(l)
}
function dDa(a, b, c) {
    y.ia ? b.Td(c) : qe(b, aF, function () {
        b.Td(c)
    });oe(c, Kp, r(a.a, a, c))
}
AR.prototype.a = function (a, b) {
    a == b.target && Oj(function () {
        aN(this) || this.Ze()
    }, 0, this)
};
AR.prototype.Ze = function () {
    cDa(this);
    $M(this, -1)
};
var eDa = "<br><br>";

function BR(a, b, c, d, e, g, h) {
    cp.call(this, e, g, h);
    this.setTitle(a);
    ep(this, b + eDa);
    this.qB = c;
    this.cA = p(d) ? d : v;oe(this, Ep, this.uL);a = new xp(h);a.set(Gp, Hp, i);a.set(vp, Ip, l, i);Cp(this, a)
}
s(BR, cp);
n = BR.prototype;
n.qB = Pa;
n.cA = v;
n.pf = k;
n.XB = l;
n.VD = 1;
n.ov = 0;
var fDa = "-userInput",
    CR = "textarea",
    gDa = "overflow: auto";
n.F = function () {
    BR.p.F.call(this);
    var a = {
        className: this.Nc + fDa,
        value: this.cA
    };
    if (this.VD == 1) {
        this.pf = this.J().F(Ap, a);
        this.pf.type = ih;
        if (this.ov) this.pf.size = this.ov
    } else {
        this.pf = this.J().F(CR, a);
        this.pf.rows = this.VD;
        if (this.ov) this.pf.cols = this.ov
    }
    this.db().appendChild(this.J().F(A, {
        style: gDa
    }, this.pf));
    if (this.VD > 1) this.Bc.pj = k
};
n.X = function (a) {
    cp.prototype.X.call(this, a);
    if (a) {
        this.XB = l;
        this.pf.value = this.cA;
        y.Gc && this.pf.focus();
        this.pf.select()
    }
};
n.uL = function (a) {
    if (!this.XB) {
        this.XB = i;
        a.key == Gp ? Oj(r(this.qB, this, this.pf.value), 1) : Oj(r(this.qB, this, k), 1)
    }
};
n.q = function () {
    z.removeNode(this.pf);
    re(this, Ep, this.uL, i, this);
    BR.p.q.call(this);
    this.pf = this.a = k
};
var hDa = "Rename Document",
    iDa = "Enter a new document name:",
    jDa = "docs-rename-dialog";

function kDa(a) {
    var b = new BR(hDa, iDa, function (c) {
        c && a.setTitle(c)
    }, a.zl);
    b.Vn = i;
    b.X(i);
    z.ba.add(b.z(), jDa)
};

function DR(a) {
    this.Wa = a;
    this.L = new ze(this);
    this.tJ();
    this.L.C(this.Wa, nj, this.tJ)
}
s(DR, Pi);
n = DR.prototype;
n.Al = 2;
n.ds = 2;
n.Ta = k;
n.tb = function () {
    return this.Al
};
n.nY = function () {
    Ai(this.Wa) || gK(this.Wa, Pa);
    ER(this, 1)
};
n.tJ = function () {
    var a;
    a = jw(this.Wa) || !Ai(this.Wa) && !ew(this.Wa.a, 1) ? 0 : iw(this.Wa) || ew(this.Wa.a, 1) ? 1 : 2;
    if (this.ds != a) {
        this.ds = a;
        lDa(this)
    }
};

function ER(a, b) {
    if (a.Al != b) {
        a.Al = b;
        a.dispatchEvent(Fj)
    }
    a.Ta && Pj(a.Ta);
    a.Ta = k;
    if (b != 2) a.Ta = Oj(a.IX, b == 0 ? 5E3 : 300,
    a)
}
n.IX = function () {
    this.Ta = k;
    if (this.ds != this.Al) this.Al == 1 && iw(this.Wa) || lDa(this)
};

function lDa(a) {
    if (a.ds > a.Al) a.Ta || ER(a, a.Al == 0 ? 1 : 2);
    else ER(a, a.ds)
}
n.q = function () {
    DR.p.q.call(this);
    this.Ta && Pj(this.Ta);
    this.Ta = k;
    this.L.G()
};

function FR(a) {
    return Za(a) && (!cb(a) || !WK(a)) && (!$a(a) || a.length != 0) && (!hb(a) || !ub(a))
};

function GR(a, b, c, d) {
    this.f = a;
    this.g = b;
    this.n = c;
    this.a = d
}
GR.prototype.Ge = function () {
    var a = {};
    a.canShareIn = this.f;
    a.canShareOut = this.g;
    a.showShareOutWarning = this.n;
    a.canPublishOut = this.a;
    return a
};

function mDa(a, b) {
    switch (a) {
    case 0:
        return new GR(i, i, l, b);
    case 1:
        return new GR(i, i, i, b);
    case 2:
        return new GR(i, l, i, b);
    case 3:
    default:
        return new GR(l, l, i, b)
    }
};
var nDa = "user";

function HR(a, b, c, d, e, g) {
    this.g = a;
    this.a = String(b);
    this.M = c || nDa;
    this.f = !! d;
    this.u = e || k;
    this.K = !! g
}
var IR = new Tc;
HR.prototype.ma = function () {
    return this.a
};
HR.prototype.sa = function (a) {
    var b = this.Ge();
    a && Bb(b, a);
    return JR(b)
};
HR.prototype.Ge = function () {
    var a = {};
    a.iconUrl = this.u;
    a.scopeType = this.M;
    a.name = this.g;
    a.id = this.a;
    a.me = this.f;
    a.requiresKey = this.K;
    return YK(a, FR)
};

function JR(a) {
    var b = a.scopeType;
    if (IR.Ad(b)) return IR.get(b).call(undefined, a);
    return new HR(a.name, a.id, a.scopeType, a.me, a.iconUrl, a.requiresKey)
};
var KR = "domain";

function LR(a, b, c, d, e, g, h) {
    HR.call(this, a, b, KR, e, g, h);
    this.oM = d;
    this.n = c
}
s(LR, HR);
LR.prototype.Ge = function () {
    var a = LR.p.Ge.call(this);
    a.sharingPolicy = this.oM.Ge();
    a.domainName = this.n;
    return YK(a, FR)
};
IR.set(KR, function (a) {
    var b = a.sharingPolicy,
        c = b.access;
    return new LR(a.name, a.id, a.domainName, Za(c) ? mDa(c, !! b.canPublishOut) : new GR( !! b.canShareIn, !! b.canShareOut, !! b.showShareOutWarning, !! b.canPublishOut),
    a.me,
    a.iconUrl,
    a.requiresKey)
});
var MR = "DEFAULT",
    oDa = new LR(v, MR, v, mDa(0, i), i);

function NR(a, b, c, d, e, g) {
    this.K = a;
    this.f = b;
    this.a = d || 0;
    this.u = p(e) ? e : i;this.n = g || k;this.g = c || k
}
NR.prototype.ki = function () {
    return this.a
};
NR.prototype.Ge = function () {
    var a = {};
    a.visibilityState = this.K;
    a.summary = this.f;
    a.role = this.a;
    a.restrictedToDomain = this.u;
    if (this.n) a.domainDisplayNames = Ac(this.n);
    a.details = this.g;
    return YK(a, FR)
};

function pDa(a) {
    var b = {};
    b.summary = a.f;
    b.eR = a.g;
    return b
};

function OR(a, b, c, d, e, g, h) {
    this.g = a;
    this.K = b;
    this.f = c || 0;
    this.u = p(d) ? d : i;this.M = e || k;this.a = g || k;this.n = h || [new NR(this.g, this.K, k, this.f, this.u, this.a ? [this.a] : undefined)]
}
OR.prototype.ki = function () {
    return this.f
};
OR.prototype.Ge = function () {
    var a = {};
    a.visibilityState = this.g;
    a.summary = this.K;
    a.role = this.f;
    a.restrictedToDomain = this.u;
    for (var b = [], c = 0; c < this.n.length; c++) b.push(this.n[c].Ge());
    a.visibilityEntries = b;
    if (this.M) a.key = this.M;
    if (this.a) a.domainDisplayName = this.a;
    return YK(a, FR)
};

function qDa(a) {
    var b, c;
    if (c = a.visibilityEntries) {
        b = [];
        for (var d = 0; d < c.length; d++) b.push(new NR(c[d].visibilityState, c[d].summary, c[d].details, c[d].role, c[d].restrictedToDomain, c[d].domainDisplayNames))
    }
    return new OR(a.visibilityState, a.summary, a.role, a.restrictedToDomain, a.key, a.domainDisplayName, b)
};

function PR(a) {
    this.aa = a.userRole || 0;
    this.K = Za(a.maxAnyoneRole) ? a.maxDomainRole : 30;this.M = Za(a.maxAnyoneRole) ? a.maxDomainRole : 30;this.xa = !! a.editorsCanInvite;this.Aa = a.numSharedUsers || 0;this.P = !! a.shareable;this.g = a.userDomain || oDa;
    var b = a.itemDomains;this.n = nc($a(b) ? b : [b || k],


    function (c) {
        return c || oDa
    });this.u = !! a.exportable;this.a = a.visibilitySetting || k;this.f = a.shareableUrl || k
}
s(PR, t);
PR.prototype.Ge = function () {
    var a = {};
    a.userRole = this.aa;
    a.editorsCanInvite = this.xa;
    a.numSharedUsers = this.Aa;
    a.shareable = this.P;
    a.userDomain = this.g.Ge();
    a.itemDomains = nc(this.n, function (b) {
        return b.Ge()
    });
    a.maxAnyoneRole = this.K;
    a.maxDomainRole = this.M;
    a.exportable = this.u;
    if (this.a) a.visibilitySetting = this.a.Ge();
    a.shareableUrl = this.f;
    return a
};

function rDa(a) {
    a = yb(a);
    var b = a.userDomain;
    if (b) a.userDomain = JR(b);
    b = a.itemDomains;
    b = $a(b) ? b : [b || k];a.itemDomains = nc(b, function (c) {
        return c ? JR(c) : c
    });
    if (b = a.visibilitySetting) a.visibilitySetting = qDa(b);
    return new PR(a)
};

function QR(a) {
    this.lc = a.content || v;
    this.a = a.header || v;
    this.g = a.type || v;
    this.f = a.learnMoreUrl || v
}
QR.prototype.Pc = function () {
    return this.lc
};
QR.prototype.O = function () {
    return this.g
};
QR.prototype.Ge = function () {
    var a = {};
    a.content = this.Pc();
    a.header = this.a;
    a.type = this.O();
    a.learnMoreUrl = this.f;
    return a
};

function RR() {}
s(RR, t);
RR.prototype.gb = function (a, b, c, d, e, g) {
    e = new pN(d, e);
    sDa(this, e, a, b, c, d, undefined, g);
    return e
};
var SR = "invite",
    TR = "access",
    UR = "settings",
    VR = "email",
    WR = "emailAttach";

function XR(a, b, c, d, e, g, h, j) {
    $o(b, function (m) {
        switch (m.Il()) {
        case SR:
            p(c) && m.la(c);
            break;
        case ch:
            if (p(g) || p(e)) m.la(g || e);
            break;
        case TR:
            p(d) && m.la(d);
            break;
        case UR:
            p(d) && m.la(d);
            break;
        case VR:
            p(j) && m.la(j);
            break;
        case WR:
            p(h) && m.la(h);
            break
        }
    })
}

function sDa(a, b, c, d, e, g, h, j) {
    a = a.a(c, d, g, j);
    e && a.push(new oN);
    fb(h) ? lc(a, function (m) {
        b.fj(m, h, i)
    }) : kc(a, function (m) {
        b.ya(m, i)
    });e = b.z();z.ba.Pd(e, pR) && z.ba.remove(e, pR)
};

function YR(a, b, c, d, e, g) {
    kN.call(this, a, d, e, g || tDa || (tDa = new ZR));
    this.g = b || k;
    this.a = c || k
}
s(YR, kN);
YR.prototype.q = function () {
    YR.p.q.call(this);
    this.a = this.g = k
};

function ZR() {
    this.f = []
}
s(ZR, fN);
var tDa = k,
    uDa = "goog-menuitem-icon apps-share-sprite",
    vDa = "share-menu-hint";
ZR.prototype.F = function (a) {
    var b = ZR.p.F.call(this, a),
        c = a.J(),
        d = a.g;
    d = c.F(Ee, d ? {
        "class": [d, uDa].join(x)
    } : k);
    var e = a.a,
        g = k;
    if (e) g = c.F(Ee, {
        "class": vDa
    }, x + e);
    this.Xl(b, [d, a.Pc(), g]);
    return b
};

function $R() {}
s($R, RR);
var wDa = "Invite people...",
    xDa = "share-menu-invite-icon",
    yDa = "Get the link to share...",
    zDa = "share-menu-link-icon",
    ADa = "See who has access...",
    BDa = "Email as attachment...";
$R.prototype.a = function (a, b, c, d) {
    b = $a(b) ? b : [b];
    var e = [],
        g = new YR(wDa, xDa, undefined, SR, c);e.push(g);
    if (a.ma() != MR || pc(b, function (h) {
        return h.oM.a || h.ma() == MR
    })) {
        a = new YR(yDa, zDa, undefined, ch, c);
        e.push(a)
    }
    a = new YR(ADa, undefined, undefined, TR, c);e.push(a);
    if (d) {
        c = new YR(BDa, undefined, undefined, WR, c);
        e.push(c)
    }
    return e
};

function aS() {}
s(aS, RR);
var CDa = "Sharing settings...",
    DDa = "Email editors/viewers...";
aS.prototype.a = function (a, b, c) {
    $a(b) || 1;
    a = [];
    b = new YR(CDa, undefined, undefined, UR, c);
    a.push(b);
    b = new oN(c);
    b.Nt(SM);
    a.push(b);
    b = new YR(DDa, undefined, undefined, VR, c);
    a.push(b);
    c = new YR(BDa, undefined, undefined, WR, c);
    a.push(c);
    return a
};

function bS() {}
var EDa = new bS,
    cS = [Ud, Td];
bS.prototype.C = function (a, b, c, d, e) {
    function g(h) {
        if (h.type == Ud && Vd(h, 0) || h.type == Td && (h.keyCode == 13 || h.keyCode == 3)) b.call(d, h)
    }
    g.Dm = b;
    g.A1 = d;
    e ? e.C(a, cS, g) : oe(a, cS, g)
};
bS.prototype.ET = function (a, b, c, d, e) {
    for (var g = 0; c = cS[g]; g++) for (var h = se(a, c, l) || [], j, m = 0; j = h[m]; m++) if (j.Ch.Dm == b && j.Ch.A1 == d) {
        e ? e.a(a, c, j.Ch) : re(a, c, j.Ch);
        break
    }
};
var FDa = "position:absolute;display:none;";

function dS(a, b, c) {
    this.P = c || (a ? z.J(z.z(a)) : z.J());
    sR.call(this, this.P.F(A, {
        style: FDa
    }));
    this.g = new bd(1, 1);
    this.n = new Xc;
    a && GDa(this, a);
    b != k && this.nM(b)
}
s(dS, sR);
var eS = [];
n = dS.prototype;
n.Mc = k;
n.className = "goog-tooltip";
n.f2 = 500;
n.CJ = 0;
n.J = function () {
    return this.P
};

function GDa(a, b) {
    b = z.z(b);
    a.n.add(b);
    oe(b, Rd, a.zw, l, a);
    oe(b, Sd, a.Eo, l, a);
    oe(b, Fo, a.Co, l, a);
    oe(b, Ao, a.RI, l, a);
    oe(b, yo, a.Eo, l, a)
}

function HDa(a, b) {
    if (b) {
        var c = z.z(b);
        IDa(a, c);
        a.n.remove(c)
    } else {
        for (var d = a.n.Qb(), e = 0; c = d[e]; e++) IDa(a, c);
        a.n.clear()
    }
}
function IDa(a, b) {
    re(b, Rd, a.zw, l, a);
    re(b, Sd, a.Eo, l, a);
    re(b, Fo, a.Co, l, a);
    re(b, Ao, a.RI, l, a);
    re(b, yo, a.Eo, l, a)
}
n.rI = function () {
    return this.CJ
};
n.nM = function (a) {
    z.Ud(this.z(), a)
};
n.my = function (a) {
    var b = this.z();
    b && z.removeNode(b);
    dS.p.my.call(this, a);
    if (a) {
        b = this.P.Va().body;
        b.insertBefore(a, b.lastChild)
    }
};
n.ee = function () {
    return z.$c(this.z())
};
n.tb = function () {
    return this.K ? this.Da() ? 4 : 1 : this.u ? 3 : this.Da() ? 2 : 0
};
n.Pw = function (a) {
    if (!this.Da()) return l;
    var b = Df(this.z()),
        c = Mf(this.z());
    return b.x <= a.x && a.x <= b.x + c.width && b.y <= a.y && a.y <= b.y + c.height
};
n.vD = function () {
    if (!$Q.prototype.vD.call(this)) return l;
    if (this.anchor) for (var a, b = 0; a = eS[b]; b++) z.contains(a.z(), this.anchor) || a.X(l);
    uc(eS, this);
    a = this.z();
    a.className = this.className;
    fS(this);
    oe(a, Rd, this.yB, l, this);
    oe(a, Sd, this.rJ, l, this);
    gS(this);
    return i
};
n.cm = function () {
    xc(eS, this);
    for (var a = this.z(), b, c = 0; b = eS[c]; c++) b.anchor && z.contains(a, b.anchor) && b.X(l);
    this.Wc && hS(this.Wc);
    re(a, Rd, this.yB, l, this);
    re(a, Sd, this.rJ, l, this);
    this.anchor = undefined;
    if (this.tb() == 0) this.Aa = l;
    $Q.prototype.cm.call(this)
};
n.dD = function (a, b) {
    if (this.anchor == a) if (this.Aa || !this.An) {
        this.X(l);
        if (!this.Da()) {
            var c;
            if (b) c = b;
            else {
                c = this.g.sa();
                c = new iS(c)
            }
            this.anchor = a;
            tR(this, c);
            this.X(i)
        }
    } else this.anchor = undefined;
    this.K = undefined
};
n.NK = function (a) {
    this.u = undefined;
    if (a == this.anchor) if ((this.Mc == k || this.Mc != this.z() && !this.n.contains(this.Mc)) && !(this.f && this.f.Mc)) this.X(l)
};

function JDa(a, b) {
    var c = a.P.hg();
    a.g.x = b.clientX + c.x;
    a.g.y = b.clientY + c.y
}
n.zw = function (a) {
    var b = jS(this, a.target);
    this.Mc = b;
    fS(this);
    if (b != this.anchor) {
        this.anchor = b;
        kS(this, b);
        KDa(this);
        JDa(this, a)
    }
};

function jS(a, b) {
    try {
        for (; b && !a.n.contains(b);) b = b.parentNode;
        return b
    } catch (c) {
        return k
    }
}
n.Co = function (a) {
    JDa(this, a);
    this.Aa = i
};
n.RI = function (a) {
    this.Mc = a = jS(this, a.target);
    this.Aa = i;
    if (this.anchor != a) {
        this.anchor = a;
        var b = new lS(this.Mc);
        fS(this);
        kS(this, a, b);
        KDa(this)
    }
};

function KDa(a) {
    if (a.anchor) for (var b, c = 0; b = eS[c]; c++) if (z.contains(b.z(), a.anchor)) {
        b.f = a;
        a.Wc = b
    }
}
n.Eo = function (a) {
    var b = jS(this, a.target),
        c = jS(this, a.Ve);
    if (b != c) {
        if (b == this.Mc) this.Mc = k;
        gS(this);
        this.Aa = l;
        if (this.Da() && (!a.Ve || !z.contains(this.z(), a.Ve))) hS(this);
        else this.anchor = undefined
    }
};
n.yB = function () {
    var a = this.z();
    if (this.Mc != a) {
        fS(this);
        this.Mc = a
    }
};
n.rJ = function (a) {
    var b = this.z();
    if (this.Mc == b && (!a.Ve || !z.contains(b, a.Ve))) {
        this.Mc = k;
        hS(this)
    }
};

function kS(a, b, c) {
    if (!a.K) a.K = Oj(r(a.dD, a, b, c), a.f2)
}
function gS(a) {
    if (a.K) {
        Pj(a.K);
        a.K = undefined
    }
}
function hS(a) {
    if (a.tb() == 2) a.u = Oj(r(a.NK, a, a.anchor), a.rI())
}
function fS(a) {
    if (a.u) {
        Pj(a.u);
        a.u = undefined
    }
}
n.q = function () {
    this.X(l);
    gS(this);
    HDa(this);
    this.z() && z.removeNode(this.z());
    this.Mc = k;
    delete this.P;
    dS.p.q.call(this)
};

function iS(a, b) {
    rR.call(this, a, b)
}
s(iS, rR);
iS.prototype.a = function (a, b, c) {
    b = wf(a);
    b = RK(b);
    c = c ? new dK(c.top + 10, c.right, c.bottom, c.left + 10) : new dK(10, 0, 0, 10);KN(this.f, a, 4, c, b, 9) & 496 && KN(this.f, a, 4, c, b, 5)
};

function lS(a) {
    MN.call(this, a, 3)
}
s(lS, MN);
lS.prototype.a = function (a, b, c) {
    var d = new bd(10, 0);
    JN(this.f, this.g, a, b, d, c, 9) & 496 && JN(this.f, 2, a, 1, d, c, 5)
};

function mS() {}
s(mS, AM);
Qa(mS);
n = mS.prototype;
n.F = function (a) {
    return a.J().createElement(Ee)
};
n.Vl = function () {
    return i
};
var LDa = "vsjson";
n.gc = function (a, b) {
    mS.p.gc.call(this, a, b);
    var c;
    c = b.childNodes;
    var d = k;
    if (c && c.length) if ((c = c[0].childNodes) && c.length > 0) d = c[0];
    if (d) if (c = d.getAttribute(LDa)) c = (c = DK(AK(c))) ? qDa(c) : k;
    else c = k;
    else c = k;a.Pq = c;nS(a.zc(), a);
    return b
};
var MDa = "share-pill",
    NDa = "  ",
    ODa = "private",
    PDa = "share-pill-private",
    oS = "unlisted",
    QDa = "share-pill-unlisted",
    RDa = "public",
    SDa = "share-pill-public",
    TDa = "   ",
    UDa = "apps-share-sprite",
    VDa = "share-pill-private-icon",
    WDa = "share-pill-domain-unlisted-icon",
    XDa = "share-pill-unlisted-icon",
    YDa = "share-pill-domain-public-icon",
    ZDa = "share-pill-public-icon",
    $Da = '" vhsh="true" vsjson="',
    aEa = '">&nbsp;</span>',
    bEa = "share-pill-text",
    cEa = "</span></span>",
    dEa = "share-pill-tooltip",
    eEa = '"><span class="',
    fEa = "share-pill-tooltip-title",
    gEa = '</span><br/><span class="',
    hEa = "share-pill-tooltip-description";

function nS(a, b) {
    var c = b.z(),
        d;
    if (d = b.Pq) {
        var e = {};
        e.Ui = d.g;
        e.summary = d.K;
        e.WL = d.u;
        if (d.a) e.K5 = d.a;
        e.R5 = d.f;
        e.N2 = cr(d.Ge());
        for (var g = [], h = 0; h < d.n.length; h++) g.push(pDa(d.n[h]));
        e.PR = g;
        d = e
    } else d = k;
    d = d;
    if (c && d) {
        e = new N;
        e.append(iy, MDa, NDa);
        switch (d.Ui) {
        case ODa:
            e.append(PDa);
            break;
        case oS:
            e.append(QDa);
            break;
        case RDa:
            e.append(SDa);
            break
        }
        e.append(Qe);
        g = e || new N;
        g.append(iy, jy, TDa, UDa, NDa);
        switch (d.Ui) {
        case ODa:
            g.append(VDa);
            break;
        case oS:
            g.append(d.WL ? WDa : XDa);
            break;
        case RDa:
            g.append(d.WL ? YDa : ZDa);
            break
        }
        g.append($Da, hO(d.N2), aEa);
        e || g.toString();
        e.append(iy, bEa, Qe, hO(d.summary), cEa);
        e = e.toString();
        c.innerHTML = e;
        c = b.xf();
        e = new N;
        d = d.PR;
        g = d.length;
        for (h = 0; h < g; h++) {
            var j = d[h];
            e.append(uR, dEa, eEa, fEa, Qe, hO(j.summary), gEa, hEa, Qe, hO(j.eR), Pva)
        }
        d = e.toString();
        c.z().innerHTML = d
    }
}
n.Wl = function () {
    return ch
};
var iEa = "share-pill-container";
n.Ca = function () {
    return iEa
};

function pS(a, b) {
    HM.call(this, k, a || mS.N(), b)
}
s(pS, HM);
n = pS.prototype;
n.Pq = k;
n.Fn = k;
n.xf = function () {
    if (!this.Fn) this.Fn = new dS(this.z());
    return this.Fn
};
n.ga = function () {
    pS.p.ga.call(this);
    nS(this.zc(), this)
};
n.q = function () {
    pS.p.q.call(this);
    if (this.Fn) {
        this.Fn.G();
        this.Fn = k
    }
    this.Pq = k
};

function qS() {}
s(qS, BN);
Qa(qS);
n = qS.prototype;
n.F = qS.p.F;
n.Od = function (a) {
    return a && a.firstChild && a.firstChild.firstChild && a.firstChild.firstChild.firstChild.lastChild
};
var jEa = "-pos",
    kEa = "-top-shadow";
n.jr = function (a, b) {
    var c = this.Ca();
    return b.F(A, CN + (c + DN), b.F(A, CN + (c + EN), b.F(A, c + jEa, b.F(A, c + kEa, tN), b.F(A, c + op, a))))
};
n.yJ = function (a, b) {
    var c = a.J().pd(b);
    if (c && c.className.indexOf(this.Ca() + DN) != -1) if ((c = a.J().pd(c)) && c.className.indexOf(this.Ca() + EN) != -1) if ((c = a.J().pd(c)) && c.className.indexOf(this.Ca() + jEa) != -1) if ((c = a.J().pd(c)) && c.className.indexOf(this.Ca() + kEa) != -1) if ((c = a.J().jw(c)) && c.className.indexOf(this.Ca() + op) != -1) return i;
    return l
};
var lEa = "goog-imageless-button";
n.Ca = function () {
    return lEa
};
yM(lEa, function () {
    return new AN(k, qS.N())
});
yM("goog-imageless-toggle-button", function () {
    var a = new AN(k, qS.N());
    NM(a, 16, i);
    return a
});

function rS(a, b, c) {
    Qo.call(this, c);
    this.lc = a;
    this.g = b
}
s(rS, Qo);
n = rS.prototype;
var mEa = "apps-promo",
    nEa = "apps-promo-arrow-container",
    oEa = "apps-promo-arrow",
    pEa = "apps-promo-popup",
    qEa = "apps-promo-header",
    rEa = "apps-promo-close",
    sEa = "apps-promo-header-content",
    tEa = "apps-promo-content",
    uEa = "apps-promo-buttons",
    vEa = "apps-promo-buttons-inner";
n.F = function () {
    var a = this.J();
    a = a.F(A, mEa, a.F(A, nEa, a.F(A, oEa)), a.F(A, pEa, a.F(A, qEa, a.F(A, rEa), a.F(Ee, sEa, a.he(this.g))), a.F(A, tEa, a.he(this.lc)), a.F(A, uEa, a.F(A, vEa))));
    this.sb(a);
    Qf(a, l)
};
n.db = function () {
    return this.J().oc(A, vEa, this.z())[0]
};
n.ga = function () {
    rS.p.ga.call(this);
    So(this).C(this.z(), Ud, this.ZP)
};
n.X = function (a) {
    Qf(this.z(), a)
};
var sS = "69px",
    tS = "33px",
    wEa = "-33px -33px",
    xEa = "-30px",
    yEa = "-33px 0px",
    zEa = "0px 0px",
    AEa = "-102px 0px";

function BEa(a, b, c) {
    var d = a.J();
    a = a.z();
    var e = QK(a),
        g = QK(b);
    d = d.oc(A, oEa, a)[0];
    var h, j, m, o;
    switch (c) {
    case 0:
        h = -(e.width / 2) + g.width / 2;
        j = -25;
        m = 6;
        o = 7;
        d.style.width = sS;
        d.style.height = tS;
        d.style.left = e.width / 2 - 34.5 + D;
        d.style.top = e.height - 3 + D;
        d.style.backgroundPosition = wEa;
        break;
    case 1:
        h = -(e.width / 2) + g.width / 2;
        j = -25;
        m = 7;
        o = 6;
        d.style.width = sS;
        d.style.height = tS;
        d.style.left = e.width / 2 - 34.5 + D;
        d.style.top = xEa;
        d.style.backgroundPosition = yEa;
        break;
    case 2:
        h = -25;
        j = e.height / 2 + g.height / 2;
        m = 7;
        o = 4;
        d.style.width = tS;
        d.style.height =
        sS;
        d.style.top = e.height / 2 - 34.5 + D;
        d.style.left = xEa;
        d.style.backgroundPosition = zEa;
        break;
    case 3:
        h = -25;
        j = e.height / 2 + g.height / 2;
        m = 5;
        o = 6;
        d.style.width = tS;
        d.style.height = sS;
        d.style.top = e.height / 2 - 34.5 + D;
        d.style.left = e.width - 3 + D;
        d.style.backgroundPosition = AEa;
        break
    }
    JN(b, m, a, o, new bd(Math.round(h), Math.round(j)))
}
n.ZP = function (a) {
    if (a.target && z.ba.Pd(a.target, rEa)) {
        this.X(l);
        this.dispatchEvent(KM)
    }
};

function uS(a, b, c, d, e) {
    rS.call(this, a, b, e);
    this.n = c || v;
    this.f = d || v;
    this.a = new AN(this.JF, qS.N(), e);
    this.ya(this.a)
}
s(uS, rS);
n = uS.prototype;
n.JF = "Okay, thanks";
n.sO = "Learn more";
n.O = function () {
    return this.n
};
var CEa = "share-client-promo";
n.F = function () {
    uS.p.F.call(this);
    z.ba.add(this.z(), CEa);
    var a = this.db();
    this.a.Ja(a);
    this.f && a.appendChild(this.J().F(ij, {
        target: YB,
        href: this.f
    }, this.sO))
};
n.ga = function () {
    uS.p.ga.call(this);
    Oj(this.FQ, 0, this);
    So(this).C(this.a, Mi, this.DW)
};
n.FQ = function () {
    uM(this.a, this.JF)
};
n.DW = function () {
    this.X(l);
    this.dispatchEvent(KM)
};
n.q = function () {
    uS.p.q.call(this);
    this.a.G();
    delete this.a
};
var DEa = "stjw",
    EEa = "classic";

function vS(a, b, c, d, e, g, h, j) {
    var m = h == DEa;
    this.M = m;
    this.xa = a;
    if (a = e) ap(a) && a.fj(new oN(d), 0, i);
    else a = new pN(d);
    if (g) if (this.M) {
        e = wS(this);
        var o = this.Ni;
        if (o) {
            var q = o.z();
            EDa.ET(q, this.vB, void 0, e.f, e);
            o.G()
        }
        o = k;
        if (g) {
            o = new pS;
            if (this.Cn) {
                q = o;
                q.Pq = this.a.a;
                nS(q.zc(), q)
            }
            Zo(o, g);
            EDa.C(g, this.vB, void 0, e.f, e)
        }
        this.Ni = o
    }
    g = a.z();
    if (!g) {
        a.F();
        g = a.z()
    }
    z.ba.add(g, oR);
    this.QF && a.X(l);
    this.f = a;
    (this.n = new kN(this.rO)).la(l);
    (this.K = new kN(this.tO)).la(l);
    d = new cp(undefined, l, d);
    Cp(d, k);
    this.Nd = d;
    this.lb = b;
    this.Oa = c;
    this.a = new PR({});
    this.g = a.J();
    this.Aa = j || k;
    this.u = m ? new aS : new $R;
    var u;a: switch (h || EEa) {
    case EEa:
        u = 1;
        break a;
    case DEa:
        u = Math.max(1, 2);
        break a;
    default:
        f(Error("Unknown share UI"))
    }
    this.Ya = u;window.SC_setTitle = r(this.Y1, this);window.SC_resize = r(this.vG, this);window.SC_setVisible = r(this.O1, this);window.SC_prepareForVisible = r(this.Q0, this);window.SC_setAclInfo = r(this.kM, this);window.SC_setClientModel = r(this.kM, this);window.SC_dispatchEvent = r(this.Ar, this);window.SC_handleError = r(this.YP, this);
    window.SC_handleCommandComplete = r(this.GU, this);window.SC_setExecuteCommandFn = r(this.Q1, this);window.SC_setSetShareSystemVisibleFn = r(this.X1, this);window.SC_setGetInterfaceVersionNumberFn = r(this.S1, this);window.SC_getVersionNumber = r(this.yT, this);window.SC_showPromo = r(this.h2, this);b = wS(this);b.C(a, JM, this.uG);b.C(a, Mi, this.sX);b.C(d, zp, this.XU)
}
s(vS, Pi);
n = vS.prototype;
n.eP = l;
n.QF = i;
n.EO = i;
n.My = k;
n.xA = k;
n.Jz = k;
n.Yu = k;
n.Cn = l;
n.hn = l;
n.tH = l;
n.El = k;
n.py = k;
n.L = k;
n.Ci = k;
n.Dl = k;
n.Vx = k;
n.Kw = k;
n.NE = l;
n.Ry = l;
n.Cg = l;
n.$z = k;
n.Lx = 0;
n.Ov = l;
n.gA = l;
n.px = 0;
n.Pt = k;
n.Ni = k;
n.mE = l;
n.p1 = l;
n.OB = l;
n.rO = LB;
n.tO = "Sharing unavailable";
n.uO = "Sorry, sharing is unavailable at this time.";

function xS(a, b) {
    var c = {};
    c.impressionType = b;
    return c
}
n.vB = function (a) {
    yS(this) ? this.$n(UR, xS(this, 1)) : this.dispatchEvent(new zS(r(this.vB, this, a), a))
};
n.yT = function () {
    return 2
};
var AS = "menuUpdated",
    FEa = "aclInfoUpdated";
n.kM = function (a) {
    var b = this.a;
    this.a = rDa(a);
    if (this.Cn && b.f != this.a.f) this.mE = i;
    this.Cn = i;
    this.Ry = l;
    BS(this);
    var c = this.a;
    this.Lx = this.u.a(c.g, c.n, this.g, this.Ov).length;
    a = this.u;
    b = this.f;
    var d = c.aa,
        e = c.g,
        g = c.n,
        h = c.P,
        j = c.K,
        m = c.M;
    c = c.u && this.Ov;
    for (var o = this.Ci.length, q = this.g, u = this.Ov, w = ura(b), C = 0; C < w.length; C++) {
        var B = Vo(b, w[C]);
        switch (B.Il()) {
        case TR:
        case VR:
        case WR:
        case SR:
        case ch:
        case SM:
        case UR:
            b.removeChild(B, i);
            break
        }
    }
    sDa(a, b, e, g, k, q, 0, u);
    e = j >= 20;
    m = m >= 20;
    o = !fb(o) || o == 1;
    if (h) XR(a, b, i, i, m && o, e && o, o && !! c, o);
    else d >= 30 ? XR(a, b, l, i, l, l, o && !! c, o) : XR(a, b, l, l, l, l, o && !! c, l);this.Ar(AS);
    if (this.Ni) {
        a = this.Ni;
        a.Pq = this.a.a;
        nS(a.zc(), a)
    }
    this.Ar(FEa)
};
n.uG = function (a) {
    if (yS(this)) if (this.Cn) GEa(this);
    else {
        this.f.Da() || this.f.X(i, i);
        this.Ny(i)
    } else {
        CS(this, this.n);
        this.dispatchEvent(new zS(r(this.uG, this, a), a))
    }
};
n.YP = function (a, b) {
    switch (a) {
    case bP:
        BS(this);
        if (b) {
            var c = new kN(z.he(b));
            c.la(l);
            CS(this, c)
        } else CS(this, this.K);
        this.Cn = this.OB = i;
        break
    }
};
var HEa = "init_share",
    DS = "data",
    IEa = "promo_closed";
n.GU = function (a, b) {
    switch (a) {
    case bP:
        JEa(this);
        break;
    case HEa:
    case DS:
        this.px = lb();
        var c = b == lJ;
        this.Cg = l;
        var d = this.$z;
        if (d) {
            c && this.El(d, this.P, this.aa);
            this.$z = k;
            delete this.P;
            delete this.aa
        }
        break;
    case IEa:
        this.QL();
        break
    }
};
n.MS = function () {
    return -1
};
n.S1 = function (a) {
    this.MS = a
};
n.Q1 = function (a) {
    this.hn = i;
    this.El = a
};
n.X1 = function (a) {
    this.py = a
};
n.h2 = function (a) {
    var b = this.Ni ? this.Ni.z() : k;
    if (b) {
        a = new QR(a);
        a = new uS(a.Pc(), a.a, a.O(), a.f, this.g);
        a.Ja();
        BEa(a, b, 1);
        a.X(i);
        qe(a, KM, r(this.eY, this, a))
    }
};
n.eY = function (a) {
    var b = a.O();
    Oj(this.QL, 6E4, this);
    var c = {};
    if (b) c.promoType = b;
    b = this.Vx;
    if (!b) this.Vx = b = KEa(this);
    b.src = ES(this, IEa, c);
    a.G()
};
n.Y1 = function (a) {
    this.Nd.setTitle(a)
};
n.Ny = function (a, b) {
    if (!(!this.Ci || this.Ci.length == 0)) if (LEa(this)) this.My = r(this.Ny, this, a, b);
    else {
        if (a) {
            BS(this);
            CS(this, this.n);
            Oj(this.vQ, 1E4, this)
        }
        if (!this.Ry) if (this.hn) {
            this.Ry = i;
            this.El(DS, void 0, void 0)
        } else {
            var c;
            c = this.M ? i : !this.QF || this.f.Da() ? i : l;
            if (c) {
                this.Ry = i;
                if (this.M && this.eP) {
                    this.Cg = i;
                    FS(this, i)
                } else {
                    this.NE = i;
                    c = this.Kw;
                    if (!c) this.Kw = c = KEa(this);
                    c.src = ES(this, bP);
                    Oj(this.tQ, 6E4, this);
                    a && GEa(this)
                }
            }
        }
    }
};

function GEa(a) {
    if (a.EO && !a.OB) if (!a.Cg && !a.hn) {
        a.Cg = i;
        FS(a, i)
    } else if (a.hn && lb() - a.px > 2E4) {
        a.Cg = i;
        a.El(DS, void 0, void 0)
    }
}
var MEa = '<iframe frameborder=0 src="';

function FS(a, b) {
    var c = {};
    c.preload = !! b;
    ep(a.Nd, bc(MEa, ES(a, HEa, c), $O));
    GS(a, i, i)
}
function BS(a) {
    for (var b = a.f, c = a.Lx, d = 0; d < c; d++) b.removeChild(bp(b, 0), i);
    a.Lx = 0;
    a.Ar(AS)
}
function CS(a, b) {
    if (!b.ib) {
        a.f.fj(b, 0, i);
        a.Lx++;
        a.Ar(AS)
    }
}
function wS(a) {
    return a.L || (a.L = new ze(a))
}
var NEa = "foreignService",
    OEa = "gaiaService",
    PEa = "shareProtocolVersion",
    QEa = "subapp",
    REa = "hl",
    SEa = "authuser",
    TEa = "rand";

function ES(a, b, c) {
    if (!a.Yu) return Jd;
    var d = a.Yu.sa();
    FO(d, Iv, a.Ci);
    FO(d, NEa, a.lb);
    FO(d, OEa, a.Oa);
    FO(d, PEa, a.Ya);
    FO(d, dE, b);
    FO(d, QEa, 10);
    a.Aa && FO(d, REa, a.Aa);
    a.xa && FO(d, SEa, a.xa);
    FO(d, TEa, lb());
    c && d.a.CT(c);
    return d.toString()
}
n.$n = function (a, b) {
    if (a == bP) this.Ny(l, i);
    else if (yS(this)) if (this.hn && !(lb() - this.px > 2E4)) this.El(a, b, void 0);
    else {
        this.$z = a;
        this.P = b;
        this.aa = (new Date).getTime();
        fb(this.xA) && Pj(this.xA);
        fb(this.Jz) && Pj(this.Jz);
        this.xA = Oj(this.uQ, 25E3, this);
        this.Jz = Oj(this.sQ, 6E4, this);
        if (!this.Cg) {
            this.Cg = i;
            this.hn ? this.El(DS, void 0, void 0) : FS(this)
        }
    } else this.dispatchEvent(new zS(r(this.$n, this, a, b)))
};
var UEa = "10px",
    VEa = "-99px",
    WEa = "-10px";

function KEa() {
    var a = z.F(Kd);
    a.src = Jd;
    var b = a.style;
    b.visibility = Kf;
    b.width = b.height = UEa;
    if (y.La) b.marginTop = b.marginLeft = VEa;
    else {
        b.position = zf;
        b.top = b.left = WEa
    }
    z.Va().body.appendChild(a);
    return a
}
function JEa(a) {
    var b = a.Kw;
    if (b) {
        z.removeNode(b);
        a.Kw = k
    }
}
n.QL = function () {
    var a = this.Vx;
    if (a) {
        z.removeNode(a);
        this.Vx = k
    }
};
n.tQ = function () {
    if (this.NE) {
        JEa(this);
        this.NE = l
    }
};
n.vQ = function () {
    if (lb() - this.px > 2E4 && !this.OB) {
        BS(this);
        CS(this, this.K)
    }
};

function yS(a) {
    return a.Ci ? !! a.Ci.length : l
}
var XEa = "share-client-error-dialog";
n.uQ = function () {
    if (this.Cg) {
        this.Cb = k;
        var a = this.Dl;
        if (!a) {
            a = new cp(undefined, i, this.g);
            ep(a, this.uO);
            Cp(a, Fp);
            a.Ja();
            z.ba.add(a.z(), XEa);
            this.Dl = a
        }
        a.X(i)
    }
};
n.sQ = function () {
    if (this.Cg) {
        ep(this.Nd, v);
        GS(this, l);
        this.Cg = l
    }
};
n.wB = function (a) {
    yS(this) ? this.$n(UR, xS(this, 3)) : this.dispatchEvent(new zS(r(this.wB, this, a), a))
};
var YEa = "email_attach";
n.sX = function (a) {
    var b, c;
    switch (a.target.ea()) {
    case TR:
        b = TR;
        break;
    case VR:
        b = VR;
        break;
    case WR:
        b = YEa;
        break;
    case SR:
        b = SR;
        break;
    case ch:
        b = ch;
        break;
    case UR:
        b = UR;
        c = xS(this, 2);
        break
    }
    b && this.$n(b, c)
};
n.vG = function (a, b) {
    var c = this.Nd.db();
    c.style.width = a + D;
    c.style.height = b + D;
    if (y.ia) {
        c = z.Ro() ? 0 : 18;this.Nd.z().style.width = a + c + D
    }
};
n.O1 = function (a) {
    if (a) {
        this.Cg = l;
        this.Dl && this.Dl.X(l)
    }
    GS(this, a)
};
n.Q0 = function () {
    this.Nd.Da() || GS(this, i, i)
};
var ZEa = "share-client-dialog";

function GS(a, b, c) {
    if (!a.tH) {
        var d = a.Nd;
        d.cb || d.Ja();
        a.vG(1, 1);
        z.ba.add(d.z(), ZEa);
        a.tH = i
    }
    d = a.Nd;
    c = c ? Kf : Gi;d.z().style.visibility = c;hp(d).style.visibility = c;
    if (b) {
        a.gA = i;
        d.X(l);
        a.gA = l
    }
    d.X(b);
    if (!b) {
        if (a.My) {
            a.My();
            a.My = k
        }
        if (a.mE) {
            a.mE = l;
            b = a.a.f;
            c = a.a.a;
            if (b && c && c.g == oS) {
                b = new $Ea(b);
                a.p1 ? aFa(b) : a.dispatchEvent(b)
            }
        }
    }
}
function LEa(a) {
    a = a.Nd;
    return a.Da() && !! a.z() && a.z().style.visibility != Kf
}
n.XU = function () {
    !this.gA && this.py && this.py(l)
};
n.Ar = function (a) {
    this.dispatchEvent(new Pd(a))
};
n.q = function () {
    vS.p.q.call(this);
    this.f.G();
    delete this.f;
    if (this.Pt) {
        this.Pt.G();
        delete this.Pt
    }
    if (this.Ni) {
        this.Ni.G();
        this.Ni = k
    }
    this.n.G();
    delete this.n;
    this.K.G();
    delete this.K;
    delete this.g;
    this.u.G();
    delete this.u;
    this.Nd.G();
    delete this.Nd;
    if (this.Dl) {
        this.Dl.G();
        this.Dl = k
    }
    if (this.L) {
        this.L.G();
        this.L = k
    }
    this.Yu = this.Ci = k;
    this.a.G();
    delete this.a;
    this.py = this.El = k
};
var bFa = "createItems";

function zS(a, b) {
    Pd.call(this, bFa);
    this.a = a;
    this.g = b || k
}
s(zS, Pd);
var cFa = "reloadSuggested";

function $Ea(a) {
    Pd.call(this, cFa);
    this.a = a
}
s($Ea, Pd);
var dFa = "userstoinvite";

function aFa(a, b) {
    var c = a.target;
    c && c.G();
    var d = uwa(a.a instanceof rO ? a.a.sa() : new rO(a.a, void 0),
    OP),
        e = b || window;
    e.setTimeout(function () {
        e.location.href = FO(vwa(e.location.href instanceof rO ? e.location.href.sa() : new rO(e.location.href, void 0),
        dFa), OP, d).toString()
    }, 0)
};

function eFa(a, b, c, d) {
    var e = {};
    if (a) e.recipient = a;
    if (b) e.subject = b;
    if (c) e.message = c;
    if (d) e.optionValues = d;
    return e
};

function HS(a, b) {
    this.L = new ze(this);
    this.Wa = a;
    this.a = b
}
s(HS, t);
n = HS.prototype;
n.NB = function () {
    Ai(this.Wa);
    if (!this.f) {
        var a = this.Qt,
            b = this.Wa.f;
        b = $a(b) ? b : [b];Gc(b);
        if (!Ic(b, a.Ci)) {
            a.Ci = b;
            a.Ny(l);
            a.Cn = l;
            a.hn = l;
            LEa(a) && GS(a, l)
        }
        this.f = i
    }
};
n.qX = function (a) {
    gK(this.Wa, r(function () {
        this.NB();
        a.a && a.a()
    }, this))
};
var fFa = "/clearitemcache";
n.rX = function (a) {
    this.a.Gd(fFa).Lh({
        id: this.Wa.f
    }).Pf(r(function () {
        mw(this.Wa, function () {
            aFa(a)
        })
    }, this)).Ld()
};
n.cU = function () {
    this.Qt.$n(bP)
};
var gFa = "notificationInfo";

function hFa(a, b) {
    var c = Yt(b, dFa);
    c && gK(a.Wa, r(function () {
        this.Qt.$n(SR, Db(gFa, eFa(c)))
    }, a))
}
n.q = function () {
    this.Qt.G();
    delete this.Qt;
    this.L.G();
    delete this.L
};

function IS(a) {
    this.Wa = a;
    this.L = new ze(this);
    this.L.C(a, mj, this.bW);
    this.L.C(a, nj, this.Ev);
    this.Ev()
}
s(IS, Pi);
n = IS.prototype;
n.yH = 0;
n.Ta = k;
n.DE = v;
n.ee = function () {
    return this.DE
};

function iFa(a) {
    if (a.Ta) {
        Pj(a.Ta);
        a.Ta = k
    }
}
function JS(a, b) {
    if (b != a.DE) {
        a.DE = b;
        a.dispatchEvent(XB)
    }
}
n.bW = function () {
    var a = this.Wa.Ys,
        b = this.Wa.rx;
    if (!a || !b || a - this.yH > 2E4) this.Ev()
};
var jFa = "View only";
n.Ev = function () {
    var a = this.Wa,
        b = a.Ys;
    iFa(this);
    if (Ai(a)) if (ew(a.a, 16)) if (b) {
        this.yH = b;
        b = lb() + zJ - b;
        JS(this, kFa(b, a.rx));
        a = 0;
        var c = 18E5;
        if (b < 6E6) {
            a = 3E4;
            c = 6E4
        }
        this.Ta = Oj(this.Ev, c - (b + a) % c, this)
    } else JS(this, a.SC);
    else JS(this, jFa);
    else JS(this, v)
};
n.q = function () {
    IS.p.q.call(this);
    iFa(this);
    this.L.G()
};
var lFa = "Updated seconds ago by ",
    mFa = "Saved seconds ago",
    KS = "Updated ",
    nFa = " minutes ago by ",
    LS = "Saved ",
    oFa = " minutes ago",
    pFa = " hours ago by ",
    qFa = " hours ago",
    rFa = " days ago by ",
    sFa = " days ago";

function kFa(a, b) {
    var c = a / 6E4;
    if (c < 1.5) return b ? lFa + b : mFa;
    else if (c < 99.5) {
        c = String(Math.round(c));
        return b ? KS + (c + (nFa + b)) : LS + (c + oFa)
    } else if (c < 2160) {
        c = String(Math.round(c / 60));
        return b ? KS + (c + (pFa + b)) : LS + (c + qFa)
    } else {
        c = String(Math.round(c / 1440));
        return b ? KS + (c + (rFa + b)) : LS + (c + sFa)
    }
};

function MS(a) {
    Qo.call(this);
    this.a = a
}
s(MS, Qo);
n = MS.prototype;
n.Ak = k;
n.gn = k;
n.ry = k;
n.Ft = k;
n.XD = k;
n.Jx = k;
n.fu = k;
n.fy = k;
n.q = function () {
    MS.p.q.call(this);
    mb(this.Ak);
    mb(this.gn);
    mb(this.ry);
    mb(this.Ft);
    mb(this.XD);
    delete this.Jx
};

function tFa(a, b) {
    return z.ba.Pd(b, FN) ? BN.N() : qS.N()
}
function NS(a, b) {
    var c = new AN(k, tFa(a, b));
    Zo(c, b);
    return c
}
var uFa = "docs-title",
    vFa = "docs-titlebar-share",
    wFa = "docs-titlebar-share-action",
    xFa = "docs-titlebar-save",
    yFa = "docs-titlebar-save-text",
    zFa = "docs-titlebar-saved",
    AFa = "docs-titlebar-saving",
    BFa = "docs-titlebar-savenow",
    CFa = "docs-titlebar-save-close",
    DFa = "docs-notice";
n.ga = function () {
    MS.p.ga.call(this);
    var a = So(this),
        b = this.J();
    this.Ak = new HM(k, dua(AM, uFa));
    Zo(this.Ak, b.z(uFa));
    var c = b.z(vFa);
    if (c) {
        this.gn = new QN(k, undefined, tFa(this, c));
        Zo(this.gn, c);
        wM(this.gn, 64, i)
    }
    if (c = b.z(wFa)) this.ry = NS(this, c);
    if (c = b.z(xFa)) {
        this.Ft = NS(this, c);
        if (this.g = b.oc(undefined, yFa, c)[0]) {
            this.u = b.$c(b.oc(undefined, zFa, c)[0]);
            this.M = b.$c(b.oc(undefined, AFa, c)[0]);
            this.n = b.$c(b.oc(undefined, BFa, c)[0])
        }
    }
    if (c = b.z(CFa)) this.XD = NS(this, c);
    this.Jx = b.z(DFa);
    a.C(this.a, ec, this.MM);
    this.MM();
    this.fu ? a.C(this.fu, XB, this.IE) : a.C(this.a, mj, this.IE);
    if (this.fy && this.g) {
        a.C(this.fy, Fj, this.wH);
        this.wH()
    }
    this.IE()
};
var EFa = "docs-title-inner",
    FFa = "docs-title-fade",
    GFa = "docs-title-untitled";
n.MM = function () {
    var a = this.a.zl;
    if (this.Ak) {
        if (a) {
            var b = this.J(),
                c = this.Ak.z(),
                d = b.oc(undefined, EFa, c)[0];
            z.Ud(d, a);
            for (var e = 0, g = 0, h = l, j = a.split(Cva), m = 0; m < j.length; m++) {
                var o = j[m];
                if (Ava.test(o)) {
                    e++;
                    g++
                } else if (Bva.test(o)) h = i;
                else if (zva.test(o)) g++;
                else if (Dva.test(o)) h = i
            }
            e = (g == 0 ? h ? 1 : 0 : e / g > 0.4 ? -1 : 1) == -1;
            d.dir = e ? Xx : Wx;b = b.oc(undefined, FFa, c)[0];Qf(b, e == jK(this.Ak))
        }
        ew(this.a.a, 16) && z.ba.md(this.Ak.z(), GFa, !a)
    }
};
n.IE = function () {
    if (this.Jx) {
        var a = this.fu ? this.fu.ee() : this.a.SC;z.Ud(this.Jx, a || tN)
    }
};
n.wH = function () {
    var a = this.Ft,
        b = this.fy.tb();
    this.g.innerHTML = b == 2 ? this.u : b == 1 ? this.M : this.n;a.la(b == 0)
};

function OS(a) {
    MS.call(this, a);
    this.f = new sM;
    this.fu = new IS(this.a)
}
s(OS, MS);
OS.prototype.q = function () {
    OS.p.q.call(this);
    this.f.G()
};
OS.prototype.ga = function () {
    OS.p.ga.call(this);
    So(this);
    this.f.a(this.Ak, K.Tk);
    this.Ft && this.f.a(this.Ft, K.dj);
    var a = this.XD;
    a && this.f.a(a, K.oz, aua)
};
var HFa = "docs-titlebar",
    IFa = "gaia_session_id",
    JFa = "share_ui",
    KFa = "docs-title-pill",
    LFa = "/a/e/",
    MFa = "/share",
    NFa = "/e/share";

function OFa(a, b, c, d, e, g) {
    var h = z.z(HFa);
    if (h) {
        var j = new OS(a),
            m = PFa(a);
        j.fy = m;
        Zo(j, h);
        g && j.gn.Td(nR(new lR, new pN, g));
        if (a.f && a.g) {
            a = new HS(a, b);
            g = xJ.N();
            b = g.getString(IFa) || k;
            g = g.getString(JFa);
            c = new vS(b, c, d, k, j.gn.gb(), j.J().z(KFa), g);
            c.Ov = i;
            e = e ? LFa + e + MFa : NFa;
            if (cb(e)) e = new rO(e);c.Yu = e;
            if (j.ry) {
                e = j.ry;
                d = wS(c);
                (b = c.Pt) && d.a(b, Mi, c.wB);
                if (c.Pt = e) {
                    e.la(i);
                    d.C(e, Mi, c.wB)
                }
            }
            j = j.gn;j.pz = l;j.la(i);a.L.C(c, AS, j.FD, l, j);a.L.C(c, bFa, a.qX);a.L.C(c, cFa, a.rX);a.L.C(a.Wa, ij, a.cU);a.Qt = c;Ai(a.Wa) ? a.NB() : a.L.C(a.Wa, kj, a.NB);hFa(a, window.location.href)
        }
    }
}
var QFa = "Saved",
    RFa = "Saving now",
    SFa = "Save now";

function PFa(a) {
    function b() {
        var d = c.tb();
        K.dj.la(d == 0);
        K.dj.setProperty(LD, d == 2 ? QFa : d == 1 ? RFa : SFa)
    }
    var c = new DR(a);
    oe(c, Fj, b);
    K.dj.Za(Mi, c.nY, c);
    ew(a.a, 16) || K.dj.X(l);
    b();
    return c
}
function TFa(a, b) {
    if (ew(a.a, 16)) {
        if (a.g) {
            K.Tk.la(i);
            K.Tk.Za(Mi, ira(kb(b || kDa, a)))
        }
    } else K.Tk.la(l)
}

function UFa(a, b, c, d) {
    if (a.g) {
        K.yq.la(i);
        K.yq.Za(Mi, function () {
            var e = c || new yR;
            if (!c) e.Vn = i;
            $Ca(e, l);
            if (!ew(a.a, 16)) {
                aDa(e, i);
                bDa(e, i)
            }
            oe(e, Ep, function (g) {
                if (g.key == Gp) {
                    g = VFa;
                    var h = e.J().z(e.kv);
                    g(a, b, h ? !h.disabled && h.checked : !e.ZB && e.YB,
                    d)
                }
            });
            e.X(i)
        })
    }
}
var WFa = "/copy",
    XFa = "/create";

function VFa(a, b, c, d) {
    var e = d || window;
    if (Ai(a)) {
        var g = YFa();
        qO(AP(b.Gd(WFa).Lh({
            id: a.f,
            copyCollaborators: c
        }), 2).Pf(function (h) {
            g(Vt(e.location.pathname, Iv, CP(h, Iv)))
        }), function () {
            g(k)
        }).Ld()
    } else ZFa(e.location.pathname.replace(/\/[^/]+$/, XFa))
}
var $Fa = " - Google Docs";

function aGa(a, b) {
    var c = b || document;
    oe(a, ec, function () {
        c.title = a.zl + $Fa
    })
}

function bGa(a, b, c) {
    b = b || new AR;
    try {
        if (!b.cb) {
            var d = z.z(vv);
            if (!d) f(Error('Element with id "docs-menubar" not found.'));
            Zo(b, d)
        }
    } catch (e) {
        return k
    }
    d = ap(b);
    for (var g = 0; g < d; g++) {
        var h = bp(b, g),
            j = k;
        try {
            j = a.gb(h.ma())
        } catch (m) {}
        if (j && ap(j) > 0) {
            dDa(b, h, j);
            h.la(i)
        }
    }
    vsa([Zk.Cu], c, i);
    Zk.Cu.la(i);
    Zk.Cu.Za(Mi, b.f, b);
    return b
}
var cGa = ".google.com",
    dGa = "presentations",
    PS = "docs",
    eGa = "/present/",
    QS = "create",
    fGa = "/document/",
    RS = "spreadsheets",
    gGa = "ccc?new",
    hGa = "newform",
    iGa = "drawings",
    jGa = "/drawings/",
    kGa = "templates?type=";

function lGa(a, b) {
    function c(e, g, h, j, m) {
        SS(e, g == a ? m : window.location.protocol + Gt + h + cGa + j + m)
    }
    var d = b ? sB + b : v;c(K.Gu, dGa, PS, d + eGa, QS);c(K.Du, PS, PS, d + fGa, QS);c(K.NF, RS, RS, d + Hj, gGa);c(K.Fu, RS, RS, d + Hj, hGa);c(K.Eu, iGa, PS, d + jGa, QS);c(K.AO, k, PS, d + Hj, kGa + a);K.zq.la(i)
}
var mGa = "//docs.google.com";

function nGa(a, b, c) {
    !a.g || SS(K.OPEN, window.location.protocol + mGa + (b ? sB + b : v) + (c ? c.a : Hj))
}
var oGa = "/DocAction?action=updoc";

function pGa(a) {
    SS(K.Lq, window.location.protocol + mGa + (a ? sB + a : v) + oGa)
}
var qGa = "http://docs.google.com/support/bin/topic.py?topic=",
    rGa = "http://docs.google.com/support/",
    sGa = "http://www.youtube.com/watch?v=eRqUE6IHTEA",
    tGa = "enable_feedback";

function uGa(a, b, c) {
    SS(K.uu, a ? qGa + a : rGa);
    SS(K.vu, Mpa());
    SS(K.wu, sGa);
    a = Yra(c || 66280);
    if (b) {
        b = new DCa(b, a);
        K.yn.la(i);
        K.yn.Za(Mi, r(b.X, b, i))
    } else SS(K.yn, a);
    if (lra(xJ.N(), tGa)) {
        K.xn.la(i);
        K.xn.Za(Mi, kb(vGa))
    } else K.xn.X(l)
}
var wGa = "createEvent",
    xGa = "Event",
    yGa = "GoogleFeedbackStart",
    zGa = "data-language",
    AGa = "gf",
    BGa = "/open?url=",
    CGa = "&frame=",
    DGa = "&sid=",
    EGa = "&hl=",
    FGa = "GOOGLE_FEEDBACK_MAIN_START",
    GGa = "/feedback",
    HGa = ".js";

function vGa() {
    var a = {
        productId: 35,
        locale: cf,
        disableScrolling: i
    },
        b;
    a: {
        if (wGa in document) {
            var c = document.createEvent(xGa);
            c.initEvent(yGa, i, i);
            var d = document.createElement(Ee);
            d.style.display = Hf;
            var e = OCa(a);
            e && d.setAttribute(zGa, e);
            document.body.appendChild(d);
            try {
                b = !d.dispatchEvent(c);
                break a
            } finally {
                document.body.removeChild(d)
            }
        }
        b = l
    }
    if (!b) {
        b = window.top;
        d = AGa + cc();
        e = NCa(a, i);
        var g = e + BGa + encodeURIComponent(document.location.href) + CGa + d + DGa + d;
        if (c = OCa(a)) g += EGa + c;
        var h = {};
        if (a.disableScrolling) b.open(g);
        else h.openUri = g;
        h.relayUri = a.relayUri;
        h.pollUri = a.pollUri;
        h.serverUri = e;
        h.elementToScroll = a.elementToScroll;
        h.frameId = d;
        h.productData = void 0;
        b.GOOGLE_FEEDBACK_PARAMETERS = h;
        a = NCa(a, l);
        if (FGa in b) b.GOOGLE_FEEDBACK_MAIN_START();
        else {
            a = a + GGa + (c ? vqa + c.toLowerCase() : v) + HGa;
            b = b.document;
            c = b.createElement(tJ);
            c.src = a;
            b.body.appendChild(c)
        }
    }
}
function SS(a, b) {
    a.Za(Mi, function () {
        ZFa(b)
    });
    a.la(i)
}

function ZFa(a) {
    if (y.La) {
        var b = cc();
        a = a;
        for (var c = a.search(Xt), d = 0, e, g = [];
        (e = Wt(a, d, KO, c)) >= 0;) {
            g.push(a.substring(d, e));
            d = Math.min(a.indexOf(Sb, e) + 1 || c, c)
        }
        g.push(a.substr(d));
        a = g.join(v).replace(zra, sa);
        a = Ot([a, Sb, KO, Pt, Mb(b)])
    }
    window.open(a, YB).focus()
}
function YFa() {
    var a = KCa(LB, {
        target: YB
    });
    return function (b) {
        if (b) {
            a.location.href = b;
            a.focus()
        } else a.close();
        return a
    }
};

function TS(a) {
    Qo.call(this, a)
}
s(TS, Qo);
var IGa = "apps-marquee";
TS.prototype.F = function () {
    this.sb(this.J().F(A, IGa))
};

function US(a) {
    Qo.call(this, a)
}
s(US, Qo);
n = US.prototype;
var JGa = "apps-marquee-text",
    KGa = "apps-marquee-round-top",
    LGa = "apps-marquee-round-bottom",
    MGa = "polite";
n.F = function () {
    var a = this.J();
    this.lc = a.F(A, JGa);
    this.a = a.F(A, KGa);
    this.f = a.F(A, LGa);
    this.sb(a.F(Ee, {
        "aria-live": MGa,
        "aria-relevant": jC
    }, this.a, this.lc, this.f));
    NGa(this, l);
    Qf(this.a, l);
    this.X(l)
};
n.db = function () {
    return this.lc
};
n.ny = function (a) {
    OGa(this, a ? z.createTextNode(a) : k)
};

function OGa(a, b) {
    if (b != a.g) {
        a.g && z.Jh(a.lc);
        a.g = b;
        a.X( !! b);
        b && z.appendChild(a.lc, b)
    }
}
n.X = function (a) {
    Qf(this.z(), a);
    this.kb = a
};
n.Da = function () {
    return this.kb
};
var PGa = "apps-marquee-item",
    QGa = " apps-marquee-warning";

function NGa(a, b) {
    a.z().className = PGa + (b ? QGa : v)
}
n.q = function () {
    US.p.q.call(this);
    delete this.lc;
    delete this.a;
    delete this.f
};

function VS(a, b, c, d, e, g, h, j) {
    this.a = a;
    this.f = b;
    this.g = c;
    this.u = d;
    this.M = j ? r(this.K0, this, e) : e;this.n = g || Pa;this.K = !! h;this.L = new ze(this);
    if (j) {
        this.Mi = new US;
        j.ya(this.Mi, i)
    }
    this.jm()
}
s(VS, t);
var RGa = Yra(161768);
n = VS.prototype;
n.Mi = k;
n.Fs = k;
n.Tm = k;
n.Lf = k;
n.Ux = k;
var SGa = "Pasting from server...",
    TGa = "docs-clipboard-preview";
n.jm = function () {
    this.a.init();
    if (this.Mi) this.Tm = new Ar(r(this.Mi.ny, this.Mi, SGa), 500);
    this.Fs = new Ar(this.g2, 50, this);
    var a = this.a.gb(),
        b = this.a.gb();
    this.L.C(a, JM, this.u0);
    this.L.C(b, [Ui, vua], this.R0);
    this.L.C(b, Mi, this.rR);
    this.L.C(this.f, JQ, this.k0);
    this.a.f.Za(Mi, this.qR, this);
    K.qu.Za(Mi, this.yQ, this);
    K.cz.Za(Mi, this.zT, this);
    a = a.J();
    b = a.F(A, TGa);
    a.appendChild(a.Va().body, b);
    this.Lf = new sR(b);
    UGa(this)
};
n.k0 = function (a, b) {
    if (vQ.name == a.a)(b || this.Fs).start()
};
n.qR = function () {
    var a = this.u();
    a && this.f.a.xd(a)
};
var VGa = "Are you sure you want to clear all items from your web clipboard?",
    WGa = "?app=";
n.yQ = function (a) {
    if (a || window.confirm(VGa)) {
        a = this.f.a;
        a.Ec.Et(tQ.name, tQ.Ex, a.Hp + tQ.name + WGa + a.$q)
    }
};
n.zT = function () {
    window.open(RGa, YB).focus()
};
n.K0 = function (a, b) {
    if (this.Tm) {
        Br(this.Tm);
        this.Mi.ny(k)
    }
    a(b)
};
var XGa = "&docid=";
n.rR = function (a) {
    a = a.target;
    if (a.ea != k) {
        var b = a.ea();
        if (b && b.PK) {
            this.Tm && this.Tm.start();
            a = this.f.a;
            var c = b.id,
                d = this.M;
            if (!(b = b.PK)) b: {
                if (b = oBa(a, c)) {
                    b = b.a;
                    for (var e = 0; e < b.length; e++) for (var g = GQ(b[e].Gh), h = 0; h < a.f.length; h++) if (g == GQ(a.f[h])) {
                        b = a.f[h];
                        break b
                    }
                }
                b = k
            }
            if ((b = b) && b instanceof FQ) {
                a.u = d;
                a.n = k;
                a.Ec.Et(uQ.name, uQ.Ex, a.Hp + uQ.name + Hj + Mb(c) + Hj + Mb(GQ(b)) + (b.mh != k ? hd : v) + WGa + a.$q + (a.St ? XGa + Mb(a.St) : v))
            }
        }
    }
};
n.g2 = function () {};
var YGa = "Nothing to copy";

function UGa(a) {
    var b = a.g();
    b = b || YGa;
    a.a.f.setProperty(LD, b)
}
n.J2 = function (a, b) {
    (b || this.Fs).start();
    for (var c = this.a.gb().J(), d = this.a, e = d.gb(), g = 0; g < d.a; g++) e.removeChild(bp(e, 2), i);
    d.a = 0;
    ZGa(this, a, c)
};

function ZGa(a, b, c) {
    BBa(a.a, nc(b, function (d) {
        return $Ga(this, d, c)
    }, a))
}
var aHa = "Paste as ";

function $Ga(a, b, c) {
    var d = b.a.length > 1,
        e = Msa(b.n, 32),
        g = b.ma();
    if (d) {
        var h = WS(a, g, k, b.f, e, i, c);
        h.bC = i;
        z.ba.add(h.gb().z(), oR);
        z.ba.add(h.gb().z(), pR);
        kc(b.a, function (j) {
            var m = YAa.get(GQ(j.Gh));
            m || (m = j.Gh.a);
            h.xd(WS(this, g, j, k, aHa + m, l, c))
        }, a);
        return h
    } else return WS(a, g, b.a[0], b.f, e, i, c)
}
var bHa = "goog-menuitem-icon docs-icon docs-icon-";

function WS(a, b, c, d, e, g, h) {
    a = [d ? h.F(sd, bHa + cHa(a, d)) : k,
    e];
    b = new dHa(b, c ? c.Gh : k,
    g);
    return c ? new kN(a, b, h) : new iR(a, b, h)
}

function cHa(a, b) {
    switch (b) {
    case 5:
        return Dk;
    case 1:
        return Lk;
    case 2:
        return BQ;
    default:
        return v
    }
}
n.u0 = function (a) {
    if (a.target == this.a.gb()) {
        UGa(this);
        if (!this.K) {
            a = this.f;
            a.f.unshift(r(this.J2, this));
            mBa(a.a)
        }
    }
};
var eHa = ' style="max-width:',
    fHa = " >",
    gHa = '" ',
    hHa = "width=",
    iHa = "height=",
    jHa = 'title="',
    kHa = "/>",
    lHa = '<!DOCTYPE html><body style="text-align:center;">',
    mHa = "</body>";
n.R0 = function (a) {
    var b = a.target;
    if (b.ea != k) if (a.type == Ui) if ((a = b.ea()) && a.S0) {
        var c = a.id;
        b = b.ib;
        this.Lf.X(l);
        var d = (a = oBa(this.f.a, c)) ? a.g : k,
            e;
        if (d) a: switch (d.Gh.a) {
        case tBa:
        case uBa:
            e = d.Gh;
            e = FB + (e.mh != k ? e.mh : this.f.a.Hp + QAa.name + Hj + c) + wb;
            var g = this.Lf.z().offsetWidth;
            if (g) e += eHa + g + wb;
            e += fHa;
            e = e;
            break a;
        case vBa:
            try {
                g = rK(d.getData() || v);
                e = new XQ(g.url, g.title, g.width, g.height)
            } catch (h) {
                e = k
            }
            e = e;
            g = new N(FB);
            g.append(e.n, gHa);
            e.f && g.append(hHa, e.f, x);
            e.a && g.append(iHa, e.a, x);
            e.g && g.append(jHa, e.g, gHa);
            g.append(kHa);
            e = g.toString();
            break a;
        case wBa:
        case SQ:
            e = d.getData();
            break a;
        default:
            e = this.n(d);
            break a
        } else e = k;e = e;
        if (!(a == k || d == k || e == k)) {
            a = this.a.gb().J();
            if (!this.Ux) {
                this.Ux = a.F(Kd, {
                    scrolling: Jp,
                    frameborder: 0
                });
                this.Lf.z().appendChild(this.Ux)
            }
            a = a.Te(this.Ux);
            a.open();
            a.write(lHa + e + mHa);
            a.close();
            a = this.Lf;
            a.Ya = 0;
            a.Da() && a.dm();
            a = this.Lf;
            d = new dK(5, 0, 0, 0);
            if (d == k || d instanceof dK) a.Bx = d;
            else a.Bx = new dK(d, void 0, void 0, void 0);
            a.Da() && a.dm();
            b = b.z();
            tR(this.Lf, new NN(b, 1));
            this.Lf.X(i)
        }
    } else this.Lf.X(l);
    else this.Lf.X(l)
};
n.q = function () {
    VS.p.q.call(this);
    this.L.G();
    delete this.L;
    this.Fs.G();
    delete this.Fs;
    this.Lf.G();
    delete this.Lf;
    if (this.Mi) {
        this.Mi.G();
        delete this.Mi;
        this.Tm.G();
        delete this.Tm
    }
};

function dHa(a, b, c) {
    this.id = a;
    this.PK = b;
    this.S0 = c
};

function XS(a, b, c, d, e, g, h, j, m) {
    K.rq.la(i);
    K.qu.la(i);
    K.cz.la(i);
    K.nN.la(l);
    this.g = d;
    this.A = e;
    this.u = g;
    this.f = h;
    this.n = j;
    this.K = m || z.J();
    this.a = new RQ(11, a, [new FQ(TQ)], b);
    this.M = new VS(new VQ(c), this.a, r(this.P, this), r(this.aa, this), r(this.xa, this))
}
s(XS, t);
var nHa = "Copy selection to web clipboard";
XS.prototype.P = function () {
    var a = !! hv(this.g);
    K.bz.la(a);
    return a ? nHa : k
};
XS.prototype.aa = function () {
    var a = hv(this.g),
        b = nF(this.A);
    if (!a || !b) return k;
    var c;
    var d = a;
    d = d.replace(yBa, v);
    d = d.replace(xBa, v);
    d = d.replace(zBa, Hd);
    d = d.replace(/<[^>]+>/g, v);
    d = AK(d).replace(/\xa0|[ \t]+/g, x);
    c = d == a ? a : Jb(d);d = new HQ(new FQ(SQ), a);a = new HQ(new FQ(SQ), a);b = new HQ(new FQ(TQ), cr(b.Z()));b = new KQ(k, 11, c, window.location.href, k, [a, b], 1);b.g = d;
    return b
};
XS.prototype.xa = function (a) {
    var b = a.getData();
    if (b) switch (a.Gh.a) {
    case SQ:
        a = new cQ(Yz(this.A));
        var c = this.K.F(sd);
        c.innerHTML = b;
        b = a.zK(c);
        a.G();
        b && oHa(this, b);
        break;
    case TQ:
        if (b = DK(b)) {
            b = cz(b);
            oHa(this, b);
            this.f.Qo = b
        }
        break;
    default:
    }
};

function oHa(a, b) {
    var c = {};
    c.pstDocSl = b;
    c.pstEmEnIm = a.n;
    a.u.execute(vj, c);
    a.f.Ef()
}
XS.prototype.q = function () {
    XS.p.q.call(this);
    delete this.g;
    delete this.A;
    delete this.u;
    delete this.f;
    delete this.K;
    delete this.n;
    this.a.G();
    delete this.a;
    this.M.G();
    delete this.M
};

function uL(a) {
    GJ.call(this, a)
}
s(uL, GJ);
uL.prototype.a = function () {
    var a = this.A,
        b = qu(a) - 1,
        c;
    c = this.A;
    c = Oz(c) ? Sh(c.oa(eh, b)) : i;
    if (c) {
        var d = Fg(a.a, b),
            e = E(a.Y(), b);
        c = e == nw;
        e = e == wb;
        if (d) c = i;
        else {
            d = E(this.A.Y(), b - 1);
            c = Kg(d) || d == TJ || d == Lg || d == fr || d == Nx && e || d == Rx && c
        }
        c = e ? c ? Rx : Tx : c ? Nx : Px;this.pa(new LJ(a, new nb(b, b)));this.pa(new SJ(a, c, new P(qu(a) - 1)))
    }
};
var pHa = "sp";

function YS(a) {
    this.a = pHa;
    this.f = a
}
s(YS, BK);
YS.prototype.Y = function () {
    return this.f
};
YS.prototype.q = function () {
    YS.p.q.call(this);
    delete this.f
};

function ZS() {
    this.a = new YS([nw, wb])
}
s(ZS, t);
ZS.prototype.q = function () {
    ZS.p.q.call(this);
    this.a.G();
    delete this.a
};

function $S() {
    this.u = new $v(this);
    this.M = 0;
    this.P = 2147483647;
    this.n = {}
}
s($S, t);
n = $S.prototype;
n.lC = k;
n.ff = k;
n.V = k;
n.mC = k;
n.$Y = k;
n.wM = k;
n.vM = k;
n.xE = k;
n.tA = k;
n.cd = function (a, b, c, d, e, g) {
    this.lC = b;
    this.ff = a;
    this.V = c;
    this.mC = d;
    this.$Y = e;
    this.K = g;
    this.a();
    if (this.wM = a = this.kw()) this.vM = Ng(a);
    this.xE = this.oo();
    this.tA = this.dw()
};
n.kw = function () {
    return k
};
n.oo = function () {
    return k
};
n.dw = function () {
    return k
};
n.bK = function (a, b, c) {
    a && this.mC.Ka(5);
    b(c)
};

function aT(a, b, c, d, e) {
    yr(b, c);
    c = 0;
    if (d) for (var g = 0; g < d.length; g++) c |= d[g];
    d = 0;
    if (e) for (g = 0; g < e.length; g++) d |= e[g];
    a.n[b] = new bT(b, c, d)
}
function cT(a, b, c) {
    b.Ab() && a.execute(b.ma(), c)
}
function qHa(a) {
    for (var b = 0, c = 0; c < a.length; c++) b |= a[c];
    return b
}
function dT(a, b, c, d, e) {
    if ((c = a.n[c]) && b) {
        c.a.push(b);
        b.la(l);
        e = kb(e || cT, a.lC, c);
        d = Pq(a.V, r(a.bK, a, d, e), a);
        a.u.Za(b, Mi, d)
    }
}
function eT(a, b, c) {
    a.M = qHa(b);
    a.P = qHa(c)
}
n.q = function () {
    $S.p.q.call(this);
    delete this.ff;
    delete this.n;
    delete this.lC;
    delete this.V;
    delete this.mC;
    this.u.G();
    delete this.u
};

function bT(a, b, c) {
    this.n = a;
    this.f = b || 0;
    this.g = c || 0;
    this.a = []
}
s(bT, t);
n = bT.prototype;
n.kC = l;
n.Ab = function () {
    return this.kC
};
n.ma = function () {
    return this.n
};
n.la = function (a) {
    if (this.kC != a) {
        this.kC = a;
        for (var b = 0, c; c = this.a[b]; ++b) c.la(a)
    }
};
n.q = function () {
    bT.p.q.call(this);
    delete this.a;
    delete this.f;
    delete this.g
};

function fT() {
    $S.call(this);
    this.g = new ZS
}
s(fT, $S);
fT.prototype.a = function () {
    rra(this.K, this.g);
    var a = M(this.ff, rn),
        b = r(this.aa, this);
    if (a) {
        b = Pq(this.V, r(this.bK, this, l, b), this);
        this.u.Za(a, Mi, b)
    }
};
fT.prototype.aa = function () {
    if (Ii(M(this.ff, rn))) rra(this.K, this.g);
    else {
        var a = this.K,
            b = this.g,
            c = b.a;
        if (c.O() == qra) xc(a.f, b);
        else {
            c = c.Y();
            for (var d = 0, e; e = c[d]; d++) xc(a.a[e], b)
        }
    }
};
fT.prototype.f = function () {
    return l
};
fT.prototype.q = function () {
    fT.p.q.call(this);
    this.g.G();
    delete this.g
};

function gT() {
    $S.call(this)
}
s(gT, $S);
gT.prototype.a = function () {
    var a = [2, 4, 64, 16, 32];
    eT(this, [], a);
    aT(this, uF, hta, [], a);
    aT(this, IF, Vsa);
    a = this.ff;
    var b = M(a, Wn);
    dT(this, b, uF, i);
    b = M(a, Yn);
    dT(this, b, IF, i, rHa)
};
gT.prototype.dw = function () {
    return [jt]
};

function rHa(a, b, c) {
    var d = {};
    d.eId = c.entityId;
    cT(a, b, d)
}
gT.prototype.f = function (a, b) {
    if (b.O() != 0) return l;
    return Aw(a)
};

function hT(a) {
    $S.call(this);
    this.g = a
}
s(hT, $S);
hT.prototype.a = function () {
    var a = [4, 8, 32];
    aT(this, vF, kta, [], a);
    eT(this, [], a);
    aT(this, JF, Wsa);
    aT(this, LF, Ita);
    a = this.ff;
    var b = M(a, On);
    dT(this, b, vF, i, kb(sHa, this.g));
    b = M(a, Tn);
    dT(this, b, JF, i, tHa);
    b = M(a, Vn);
    dT(this, b, LF, i, kb(uHa, this.g))
};
hT.prototype.dw = function () {
    return [Xg]
};
hT.prototype.oo = function () {
    return [Xg]
};

function sHa(a, b, c) {
    var d = {};
    d.usrNm = a;
    cT(b, c, d)
}
function tHa(a, b, c) {
    var d = {};
    d.eId = c.entityId;
    cT(a, b, d)
}

function uHa(a, b, c, d) {
    var e = {};
    e.eId = d.entityId;
    e.usrNm = a;
    cT(b, c, e)
}
hT.prototype.f = function (a, b) {
    if (b.O() != 0) return l;
    return Dw(a, b.a, Xg)
};

function iT() {
    $S.call(this)
}
s(iT, $S);
iT.prototype.a = function () {
    var a = [4, 8, 16, 32, 64];
    eT(this, [], a);
    aT(this, FF, mta, [], a);
    aT(this, GF, ota, [8]);
    a = this.ff;
    var b = M(a, vn);
    dT(this, b, FF, i, kb(vHa, M(a, tn)));
    b = M(a, zn);
    dT(this, b, GF, i, wHa)
};
iT.prototype.kw = function () {
    return [qg, rg, sg, ug, vg, wg]
};
iT.prototype.oo = function () {
    return [Zg, $g]
};

function vHa(a, b, c) {
    a && !Ii(a) && Ni(a);
    a = {};
    a.eqP = qt;
    cT(b, c, a)
}
function wHa(a, b, c) {
    var d = {};
    d.funcCode = c.code;
    d.funcNumArgs = c.Kx;
    cT(a, b, d)
}
iT.prototype.f = function (a, b) {
    if (b.O() != 0) return l;
    var c = b.a;
    return Lw(a.Y(), c)
};

function jT(a) {
    $S.call(this);
    this.g = a
}
s(jT, $S);
jT.prototype.ij = function (a, b) {
    aT(this, jF, qta, [], b);
    dT(this, a, jF, i, r(this.aa, this))
};
jT.prototype.f = function (a, b) {
    if (b.O() != 0) return l;
    var c = Iu(a, b.a);
    c = DH(a.n, c, c);
    for (var d in c) {
        var e = c[d];
        if (e.O() == rt) if (e.f == this.g) return i
    }
    return l
};
jT.prototype.aa = function (a, b) {
    var c = {};
    c.hdrFtrType = this.g;
    cT(a, b, c)
};

function kT() {
    jT.call(this, 1)
}
s(kT, jT);
kT.prototype.a = function () {
    this.ij(M(this.ff, En), [8, 16])
};

function lT() {
    $S.call(this)
}
s(lT, $S);
lT.prototype.a = function () {
    var a = [4, 8, 16, 32, 64];
    eT(this, [], a);
    aT(this, wF, nta, [], a);
    aT(this, KF, Xsa);
    a = this.ff;
    var b = M(a, Hn);
    dT(this, b, wF, i);
    b = M(a, Jn);
    dT(this, b, KF, i, xHa)
};
lT.prototype.dw = function () {
    return [ah]
};
lT.prototype.oo = function () {
    return [ah]
};

function xHa(a, b, c) {
    var d = {};
    d.eId = c.entityId;
    cT(a, b, d)
}
lT.prototype.f = function (a, b) {
    if (b.O() != 0) return l;
    return Dw(a, b.a, ah)
};

function mT() {
    jT.call(this, 0)
}
s(mT, jT);
mT.prototype.a = function () {
    this.ij(M(this.ff, Bn), [8, 64])
};

function nT() {
    $S.call(this)
}
s(nT, $S);
nT.prototype.a = function () {
    var a = [8];
    eT(this, [], a);
    aT(this, xF, rta, [], a);
    dT(this, M(this.ff, cm), xF, i)
};
nT.prototype.oo = function () {
    return [bh]
};
nT.prototype.f = function (a, b) {
    if (b.O() != 0) return l;
    return E(a.Y(), b.a) == SB
};

function oT() {
    $S.call(this)
}
s(oT, $S);
oT.prototype.a = function () {
    var a = [4, 8, 16, 32, 64, 512];
    eT(this, [], a);
    aT(this, HF, sta, [], a);
    dT(this, M(this.ff, Ln), HF, i)
};
oT.prototype.kw = function () {
    return [xg]
};
oT.prototype.f = function (a, b) {
    if (b.O() != 0) return l;
    return E(a.Y(), b.a) == xg
};

function pT(a, b) {
    $S.call(this);
    this.g = a;
    this.aa = b
}
s(pT, $S);
pT.prototype.a = function () {
    var a = [4, 8, 32];
    eT(this, [], a);
    aT(this, PF, tta, [], a);
    aT(this, UF, Usa, [512]);
    aT(this, qF, Ysa, [512]);
    aT(this, sF, Zsa, [512]);
    aT(this, rF, $sa, [512]);
    aT(this, RF, uta, [512]);
    aT(this, QF, Bta, [512]);
    aT(this, VF, Jta, [512]);
    a = this.ff;
    var b = M(a, $n);
    dT(this, b, PF, i, kb(yHa, this.g));
    b = M(a, co);
    dT(this, b, sF, i);
    b = M(a, jo);
    dT(this, b, QF, i, kb(zHa, i));
    b = M(a, lo);
    dT(this, b, QF, i, kb(zHa, l));
    b = M(a, ho);
    dT(this, b, rF, i);
    b = M(a, no);
    dT(this, b, RF, i, kb(AHa, l, this.g));
    b = M(a, po);
    dT(this, b, RF, i, kb(AHa, i, this.g));
    b = M(a, fo);
    dT(this, b, qF, i, kb(BHa, this.g));
    if (this.g) {
        b = M(a, to);
        dT(this, b, UF, i, CHa)
    }
    if (this.g && this.aa) {
        b = M(a, uo);
        dT(this, b, VF, i, DHa)
    }
};
pT.prototype.kw = function () {
    return [mg, ng, lg, kg]
};
pT.prototype.oo = function () {
    return [Ug, fh, hh]
};

function yHa(a, b, c, d) {
    if (!(!d || !d.height || !d.width)) {
        var e = {};
        e.tblCC = d.width;
        e.tblRC = d.height;
        e.eTS = a;
        cT(b, c, e)
    }
}
function BHa(a, b, c) {
    var d = {};
    d.eTS = a;
    cT(b, c, d)
}
function zHa(a, b, c) {
    var d = {};
    d.tblRA = a;
    cT(b, c, d)
}
function AHa(a, b, c, d) {
    var e = {};
    e.tblCR = a;
    e.eTS = b;
    cT(c, d, e)
}

function CHa(a, b, c) {
    var d = {},
        e = c.tblBC,
        g = c.tblBW;
    if (p(e) || p(g)) {
        var h = {};
        if (p(e)) h.tbls_bc = e;
        if (p(g)) h.tbls_bw = g;
        d.tblSM = h
    }
    e = c.colWT;
    g = c.colWV;
    if (p(e)) {
        d.colWT = e;
        if (p(g)) d.colWV = g
    }
    e = c.rowHV;
    if (p(e)) {
        g = {};
        g.row_mh = e;
        d.rowSM = g
    }
    e = c.cellBC;
    g = c.cellP;
    c = c.cellVA;
    if (p(e) || p(g) || p(c)) {
        h = {};
        if (p(e)) h.cell_bgc = e;
        if (p(g)) {
            h.cell_pt = g;
            h.cell_pb = g;
            h.cell_pl = g;
            h.cell_pr = g
        }
        if (p(c)) h.cell_va = c;
        d.cellSM = h
    }
    cT(a, b, d)
}

function DHa(a, b, c) {
    var d = {};
    if (c.rrSI) {
        d.rrSI = c.rrSI;
        for (var e = c.rrH, g = [], h = 0; h < e.length; h++) {
            var j = {};
            j.row_mh = e[h];
            g.push(j)
        }
        d.rrSM = g
    }
    if (c.rscolI) {
        d.tblST = c.tblST;
        d.rscolI = c.rscolI;
        d.rscolWT = c.rscolWT;
        d.rscolWV = c.rscolWV
    }
    cT(a, b, d)
}
pT.prototype.f = function (a, b) {
    if (b.O() != 0) return l;
    return pu(a, b.a)
};

function qT(a, b, c, d, e, g, h) {
    this.g = a;
    this.f = b;
    this.A = c;
    this.V = d;
    this.u = e;
    this.n = g;
    this.K = h;
    this.L = new ze(this)
}
s(qT, Pi);
qT.prototype.a = k;
qT.prototype.ND = function (a) {
    var b = {};
    if (a.IB) b[1] = new fT;
    if (a.Cb) b[2] = new gT;
    if (a.u) b[4] = new hT(a.KD);
    if (a.n) b[8] = new iT;
    if (a.Oa) {
        b[64] = new mT;
        b[16] = new kT
    }
    b[128] = new nT;
    if (a.aa) b[32] = new lT;
    if (a.Ya) b[256] = new oT;
    if (a.a) b[512] = new pT(a.f, a.Qh);
    this.a = b;
    for (var c in this.a) this.a[c].cd(this.f, this.g, this.V, this.u, this.n, this.K);
    this.L.C(this.A, nv, Pq(this.V, this.M, this));
    EHa(this)
};

function FHa(a, b) {
    var c = 0;
    for (var d in a.a) if (a.a[d].f(a.A, b)) c |= d;
    return c
}
qT.prototype.M = function () {
    EHa(this)
};

function EHa(a) {
    var b = FHa(a, Ru(a.A.ra()));
    for (var c in a.a) {
        var d = a.a[c],
            e = b;
        for (var g in d.n) {
            var h = d.n[g];
            h.la((e & h.g) == 0 && (e & h.f) == h.f)
        }
    }
}

function gta(a, b, c) {
    c = FHa(a, c);
    var d = b.u,
        e = b.f,
        g = b.a,
        h = b.n,
        j = b.Y();
    b = b.g;
    for (var m in a.a) {
        var o = a.a[m];
        if (!((c & o.P) == 0 && (c & o.M) == o.M)) {
            j = o.wM ? j.replace(o.vM, x) : j;
            var q = o;b = b;
            if (q.xE) {
                for (var u = [], w = 0; w < b.length; w++) sc(q.xE, b[w].O()) || u.push(b[w]);
                b = u
            } else b = b;o = o;e = e;
            if (o.tA) {
                q = {};
                for (var C in e) {
                    u = C;
                    sc(o.tA, u) || (q[u] = e[u])
                }
                e = q
            } else e = e
        }
    }
    return new Wy(j, b, d, e, g, h)
}
qT.prototype.q = function () {
    qT.p.q.call(this);
    delete this.f;
    delete this.g;
    delete this.A;
    delete this.V;
    delete this.a;
    delete this.n;
    delete this.u;
    this.L.G();
    delete this.L
};

function rT(a, b, c, d) {
    if (!c) {
        c = new US(b.J());
        b.ya(c, i)
    }
    this.f = c;
    this.L = new ze(this);
    this.Wa = a;
    this.L.C(a, nj, this.mR);
    if (d) {
        d.tb() == EP;
        this.L.C(d, rj, this.lR)
    }
    this.a = new Ar(r(this.mM, this, i), 7E3)
}
s(rT, t);
n = rT.prototype;
n.qM = l;
n.qD = k;
n.mR = function (a) {
    a = a.a;
    a = ew(a, 8) || ew(a, 1);
    var b = iw(this.Wa) || ew(this.Wa.a, 1);
    if (b && !a) this.a.start();
    else if (!b && a) {
        Br(this.a);
        this.mM(l)
    }
};
n.mM = function (a) {
    this.qM = a;
    GHa(this)
};
n.lR = function (a) {
    this.qD = HHa(this, a.a);
    GHa(this)
};
var IHa = "Reconnecting...",
    JHa = "Trying to reach google.com...",
    KHa = "The server is unavailable. Trying to reconnect...",
    LHa = "You no longer have permission to access this document.  If you believe this is an error, contact the document owner.",
    MHa = "You are signed out. Refresh the page, or sign in from another tab.",
    NHa = "An error has occurred, and we cannot save your changes. Please refresh the page.",
    OHa = "This application is out of date, and must be restarted.  Your changes cannot be saved";

function HHa(a, b) {
    switch (b) {
    case HP:
        return IHa;
    case IP:
        return JHa;
    case JP:
        return KHa;
    case KP:
        return LHa;
    case LP:
        return MHa;
    case NP:
        return NHa;
    case MP:
        return OHa;
    default:
        return k
    }
}
var PHa = "Saving...";

function GHa(a) {
    var b = k;
    if (a.qD) b = a.qD;
    else if (a.qM) b = PHa;
    a.f.ny(b)
}
n.q = function () {
    rT.p.q.call(this);
    this.a.G();
    this.L.G()
};

function sT(a, b, c) {
    cp.call(this, undefined, undefined, b);
    this.Wa = a;
    this.a = c || l;
    So(this).C(this, Ep, this.f)
}
s(sT, cp);
var QHa = "Signed out",
    RHa = "You have been signed out in another tab or for security reasons. You must sign in again to save changes to this document.",
    SHa = "si",
    THa = "Sign in",
    UHa = "Access denied",
    VHa = "You no longer have permission to access this document, so your changes can't be saved. If you believe this is an error, contact the document owner.  If your access is restored, you will be able to continue working.",
    WHa = "Server unavailable",
    XHa = "Your changes cannot be saved because the server is currently unavailable. Please resume your work when the server becomes available.",
    YHa = "Application out of date",
    ZHa = "Your changes cannot be saved because this application is out of date. You must reload this page to continue editing. Unfortunately any unsaved changes will be lost.",
    $Ha = "Connection error",
    aIa = "Your changes cannot be saved because of a problem with the network connection. Access will be restored when you re-establish your connection.",
    bIa = "<br><br>If you leave or reload the page, your unsaved changes may be lost.",
    cIa = "rl",
    dIa = "Reload without your unsaved changes";

function eIa(a, b) {
    var c = a.Wa;
    c = iw(c) || jw(c);
    var d, e, g = k,
        h = !a.a,
        j = i;
    if (b == 0) {
        e = QHa;
        d = RHa;
        g = (new xp).set(SHa, THa, l, l)
    } else if (b == 1) {
        e = UHa;
        d = VHa
    } else if (b == 2) {
        e = WHa;
        d = XHa
    } else if (b == 3) {
        j = l;
        e = YHa;
        d = ZHa
    } else if (b == 4) {
        e = $Ha;
        d = aIa
    }
    if (c && j) d += bIa;
    a.setTitle(e);
    ep(a, d);
    g || (g = (new xp).set(cIa, c ? dIa : Qpa,
    l,
    l));
    Cp(a, g);
    a.UH = h;
    a.ts = h;
    a.Bf && Qf(a.Bf, a.ts)
}
var fIa = "auth";
sT.prototype.f = function (a) {
    a = a.key;
    if (a == SHa) iw(this.Wa) || jw(this.Wa) ? window.open(fIa, YB).focus() : ZI(window);
    else a == cIa && ZI(window)
};
var gIa = "docs-error-dialog";
sT.prototype.F = function () {
    sT.p.F.call(this);
    z.ba.add(this.z(), gIa)
};

function tT(a, b, c, d, e, g) {
    !iw(a) && !jw(a);
    this.u = new Ar(this.DV, 6E5, this);
    this.Wa = a;
    this.V = g || k;
    this.f = new Kj(12E4);
    this.P = b;
    this.g = b.ce();
    this.n = c;
    this.a = new Ar(this.gX, 12E4, this);
    this.M = d || l;
    this.K = new Ar(this.aX, (Za(e) ? e : 1728E5) * (0.8 + 0.2 * Math.random()), this);
    this.L = new ze(this);
    this.L.C(a, nj, this.pR).C(this.g, rj, this.oR).C(this.g, Ej, this.bX).C(this.f, Nj, this.yW)
}
s(tT, Pi);
n = tT.prototype;
n.Tu = k;
n.MB = i;
n.Gt = l;
n.ay = l;
n.oR = function (a) {
    if (a.g.a() && !a.a.a()) Br(this.a);
    else if (!a.g.a() && a.a.a()) {
        this.Gt = l;
        iw(this.Wa) && this.a.start()
    }
    uT(this)
};
n.bX = function () {
    !this.ay && this.K.a == 0 && this.K.start()
};
n.aX = function () {
    this.ay = i;
    uT(this)
};
n.pR = function () {
    if (iw(this.Wa)) {
        this.Gt || this.a.start();
        this.MB = l;
        Br(this.u)
    } else {
        Br(this.a);
        this.Gt = l;
        jw(this.Wa) || this.u.start()
    }
    uT(this)
};
n.DV = function () {
    this.MB = i;
    uT(this)
};
n.gX = function () {
    this.Gt = i;
    uT(this)
};
var hIa = "At the end of an extended period in the saving state, the net service was found to be online. This is illegal.";

function uT(a) {
    var b = a.g.tb();
    if (a.M && b === JP) vT(a, 2, i);
    else if (b === KP) vT(a, 1, i);
    else if (b === LP) vT(a, 0, i);
    else if (b === MP) vT(a, 3, i);
    else if (a.Gt && b.a()) {
        b = Error(hIa);
        if (a.V) wJ(a.V, b);
        else f(b)
    } else if (a.M && b.g()) vT(a, 4, i);
    else if (a.ay && a.MB && b === EP) window.location.reload();
    else b.a() && b != HP && !a.ay && vT(a, k)
}
function vT(a, b, c) {
    if (b != a.Tu) {
        a.Tu = b;
        Mj(a.f);
        if (b == k) a.n.X(l);
        else {
            a.f.start();
            if (c) {
                a = a.n;
                eIa(a, b);
                a.X(i)
            }
        }
    }
}
n.yW = function () {
    if (this.Tu != k) {
        var a = this.n;
        eIa(a, this.Tu);
        a.X(i)
    }
};
n.q = function () {
    tT.p.q.call(this);
    this.u.G();
    this.f.G();
    this.a.G();
    this.K.G();
    this.L.G()
};

function wT(a, b, c, d, e, g, h) {
    this.Wa = a;
    this.V = h || k;
    this.u = b;
    this.n = c;
    this.a = g || new TS(c);
    this.a.Ja();
    this.aa = !g;
    this.K = new rT(a, this.a, undefined, b.ce());
    this.M = d || l;
    this.P = e || l
}
s(wT, t);
wT.prototype.g = k;
wT.prototype.f = k;
wT.prototype.q = function () {
    wT.p.q.call(this);
    this.K.G();
    delete this.K;
    if (this.aa) {
        this.a.G();
        delete this.a
    }
    mb(this.g);
    delete this.g;
    mb(this.f);
    delete this.f;
    delete this.u
};

function xT(a, b, c) {
    this.Wa = a;
    this.f = b;
    this.f.Za(Wd, this.g, this);
    this.n = c
}
s(xT, Pi);
var iIa = "This document is above the file size limit.<br>You must delete content to continue editing.";
xT.prototype.g = function (a) {
    if (!this.a) {
        var b = this.n,
            c = new US(b.n);
        b.a.ya(c, i);
        this.a = c
    }
    switch (a.type) {
    case 0:
        NGa(this.a, i);
        OGa(this.a, z.he(iIa));
        this.dispatchEvent(Zc);
        break;
    case 1:
        this.a.ny(k);
        this.dispatchEvent(vj);
        break
    }
};
xT.prototype.q = function () {
    xT.p.q.call(this);
    this.f.of(Wd, this.g, this)
};

function yT(a, b, c) {
    this.Wa = a;
    this.g = b;
    this.a = c || k;
    this.L = new ze(this);
    this.L.C(this.Wa, ec, this.n);
    this.a && this.a.Za(aj, this.f, this)
}
s(yT, t);
yT.prototype.q = function () {
    yT.p.q.call(this);
    this.L.q();
    this.a && this.a.of(aj, this.f, this)
};
var jIa = "/chrome";
yT.prototype.n = function (a) {
    if (!a.a) {
        var b = this.Wa,
            c = this.g;
        gK(b, function () {
            c.Gd(jIa).Lh({
                id: b.f,
                title: b.zl
            }).Ld()
        })
    }
};
yT.prototype.f = function (a) {
    var b = a.TITLE;
    b && this.Wa.setTitle(b, i);
    a.ACL && this.Wa.dispatchEvent(new kw(ij, i))
};

function zT() {}
s(zT, Pi);

function AT() {
    this.f = [];
    this.a = [];
    this.g = -1
}
s(AT, zT);
n = AT.prototype;
n.iK = function (a) {
    Bc(this.f, a)
};
n.Zr = function () {
    return Ac(this.a)
};
n.bs = function () {
    return Ac(this.f)
};
n.RL = function () {
    tc(this.a)
};
n.replace = function (a, b) {
    this.a = Ac(a);
    this.f = Ac(b)
};
n.Xo = function () {
    return this.f.length + this.a.length
};
n.VA = function () {
    return this.f.length
};
n.lM = function (a) {
    this.g = a
};
n.DI = function () {
    return this.g
};
var kIa = "Tried to copy unsent queue to sent queue when sent queue was not empty.";
n.bM = function () {
    if (this.a.length != 0) f(Error(kIa));
    this.a = this.f;
    this.f = [];
    return Ac(this.a)
};
n.q = function () {
    AT.p.q.call(this);
    delete this.a;
    delete this.f
};
var lIa = "-pn",
    mIa = "-rc",
    nIa = "-rn",
    oIa = "-qv";

function BT(a, b, c, d, e, g, h, j) {
    XG();
    this.Ya = d;
    this.Cb = g;
    this.f = window.localStorage;
    this.a = a + (b ? SB + b : v);
    vK(this.a, h) == k;
    this.xa = this.a + Uqa;
    this.Oa = this.a + Nra;
    this.Aa = c;
    this.aa = new Kj(3E4);
    this.L = new ze(this);
    this.L.C(this.aa, Nj, this.n1);
    this.aa.start();
    this.P = this.a + lIa;
    this.M = this.a + mIa;
    this.lb = this.a + nIa;
    this.Ie = this.a + oIa;
    this.V = h;
    this.cc = j || wG;
    this.g = [];
    this.n = [];
    var m, o, q;
    try {
        o = m = CT(this, this.xa);
        for (var u;
        (u = pIa(this, o)) != k;) {
            this.n.push(u);
            ++o
        }
        q = CT(this, this.Ie);
        if (this.Xo() > 0) {
            this.Jo = i;
            pb(e, CT(this, this.P));
            CT(this, this.M) <= 0;
            DT(this, this.M, 1)
        } else {
            DT(this, this.M, 0);
            DT(this, this.P, this.Ya);
            DT(this, this.lb, this.Cb)
        }
    } catch (w) {
        a = this.a;
        b = window.localStorage;
        for (c = i; c;) {
            c = l;
            for (d = b.length - 1; d >= 0; --d) try {
                var C = b.key(d);
                if (Hb(C, a)) {
                    c = i;
                    b.removeItem(C)
                }
            } catch (B) {}
        }
        m = 0;
        DT(this, this.xa, 0);
        DT(this, this.M, 0);
        DT(this, this.P, this.Ya);
        DT(this, this.lb, this.Cb);
        q = -1;
        o = 0;
        this.g = [];
        this.n = [];
        this.Jo = l
    }
    qIa(this);
    this.u = m;
    this.K = o;
    this.Wc = q
}
s(BT, zT);
n = BT.prototype;
n.Jo = l;

function qIa(a) {
    var b = {};
    b.v = 0;
    b.t = lb();
    b.s = a.Aa;
    a.f.setItem(a.Oa, cr(b))
}
var rIa = "This queue is available to other sessions; another queue may clobber this one",
    sIa = "This queue isn't locked by this session. Another session may have clobbered the data in this queue";
n.n1 = function () {
    vK(this.a, this.V) != k || this.V.log(Error(rIa));
    vK(this.a, this.V) == this.Aa || this.V.log(Error(sIa));
    qIa(this)
};
var tIa = "This queue is holding state from a previous session";
n.iK = function (a) {
    !this.Jo || this.V.log(Error(tIa));
    Bc(this.n, a);
    for (var b = 0; b < a.length; ++b) {
        var c = cr(a[b].Z());
        this.f.setItem(this.a + EJ + (this.K + b), c)
    }
    this.K += a.length
};
n.Zr = function () {
    return Ac(this.g)
};
n.bs = function () {
    return Ac(this.n)
};
n.RL = function () {
    var a = this.u;
    this.u += this.g.length;
    tc(this.g);
    DT(this, this.xa, this.u);
    for (a = a; a < this.u; ++a) this.f.removeItem(this.a + EJ + a);
    if (this.Jo) {
        this.Jo = l;
        DT(this, this.M, 0);
        DT(this, this.P, this.Ya);
        DT(this, this.lb, this.Cb)
    }
};
n.replace = function (a, b) {
    !this.Jo || this.V.log(Error(tIa));
    this.g = Ac(a);
    this.n = Ac(b);
    for (var c = 0; c < a.length; ++c) {
        var d = cr(a[c].Z());
        this.f.setItem(this.a + EJ + (this.u + c), d)
    }
    for (c = 0; c < b.length; ++c) {
        d = cr(b[c].Z());
        this.f.setItem(this.a + EJ + (this.u + a.length + c), d)
    }
    d = this.K;
    for (c = this.K = this.u + a.length + b.length; c < d; ++c) this.f.removeItem(this.a + EJ + c)
};
n.Xo = function () {
    return this.g.length + this.n.length
};
n.VA = function () {
    return this.n.length
};
n.bM = function () {
    this.g.length != 0 && this.V.log(Error(kIa));
    this.g = this.n;
    this.n = [];
    return Ac(this.g)
};
n.lM = function (a) {
    this.Wc = a;
    DT(this, this.Ie, a)
};
n.DI = function () {
    return this.Wc
};

function pIa(a, b) {
    var c = a.f.getItem(a.a + EJ + b);
    if (c != k) return a.cc(DK(c));
    return k
}
function CT(a, b) {
    var c = parseInt(a.f.getItem(b), 10);
    if (c < 0 || isNaN(c)) f(Error("Invalid integer value"));
    return c
}
function DT(a, b, c) {
    c = c.toString();
    a.f.setItem(b, c)
}
n.q = function () {
    BT.p.q.call(this);
    this.L.G();
    delete this.L;
    this.aa.G();
    delete this.aa;
    this.f.removeItem(this.Oa);
    delete this.f;
    delete this.Aa;
    delete this.Oa;
    delete this.cc;
    delete this.g;
    delete this.n;
    delete this.V
};
var uIa = "},\n ";

function vIa(a) {
    a = cr(a);
    a = a.replace(/,/g, hz);
    return a.replace(/}, /g, uIa)
};

function wIa(a, b, c) {
    this.HE = a;
    this.c6 = b ? b : k;this.Hx = c ? c : 0
}
function R(a, b) {
    return new wIa(a, b)
}
function ET(a) {
    return a.HE
}
var xIa = "interface ",
    yIa = "class ";
wIa.prototype.toString = function () {
    return ((this.Hx & 2) != 0 ? xIa : (this.Hx & 1) != 0 ? v : yIa) + this.HE
};
var FT;

function GT(a, b) {
    return a && a.ab ? a.ab(b) : a === b
}
var zIa = "getClass";

function HT(a) {
    if (a && a.hasOwnProperty(zIa)) return a.Nc;
    FT || (FT = R(k, k));
    return FT
}
function IT(a) {
    return a && a.eb ? a.eb() : typeof a === bb ? JT(a) : ib(a)
}
function KT(a) {
    return a && a.$a ? a.$a() : typeof a === bb ? a : ET(HT(a)) + Ht + IT(a).toString(16)
};

function LT(a, b) {
    if (!cb(b)) return l;
    return a == b
}
function MT(a, b, c) {
    if ($a(a)) {
        var d = undefined;
        if (b != undefined && c != undefined) d = b + c;
        a = a;
        if (b != undefined || d != undefined) a = a.slice(b, d);
        return String.fromCharCode.apply(k, a)
    }
    return v + a
}
var AIa = {},
    NT = 0,
    OT = {};

function JT(a) {
    var b = Sf + a,
        c = OT[b];
    if (c != k) return c;
    c = AIa[b];
    if (c == k) {
        c = a.length;
        for (var d = c < 64 ? 1 : c / 32,
            e = 0,
            g = 0;g < c;g += d) {
            e <<= 1;
            e += a.charCodeAt(g)
        }
        e |= 0;
        c = e
    }
    if (NT == 256) {
        AIa = OT;
        OT = {};
        NT = 0
    }++NT;
    return OT[b] = c
}
String.prototype.Me = function (a) {
    var b = this;
    b = String(b);
    a = b == a ? 0 : b < a ? -1 : 1;
    return a
};

function PT() {}
var QT;
n = PT.prototype;
n.Nz = k;
n.AA = k;
n.XC = 0;
n.fD = k;
n.Q = function () {
    QT || (QT = R(k, HT()));
    return QT
};
n.$a = function () {
    return this.Nz + Na + this.fD + TJ + this.AA + Sf + this.XC + Of
};

function RT() {}
var ST;
RT.prototype.Q = function () {
    ST || (ST = R(k, HT()));
    return ST
};

function TT(a, b) {
    a.a.append(MT(b));
    return a
}
RT.prototype.$a = function () {
    return this.a.toString()
};

function UT() {}
var VT;
UT.prototype.Q = function () {
    VT || (VT = R(k, HT()));
    return VT
};

function WT(a, b) {
    a.a.append(MT(b));
    return a
}

function XT(a, b) {
    a.a.append(MT(b));
    return a
}
UT.prototype.$a = function () {
    return this.a.toString()
};

function YT() {}
var ZT;
n = YT.prototype;
n.hH = k;
n.k2 = k;
n.Q = function () {
    ZT || (ZT = R(k, HT()));
    return ZT
};
n.sI = function () {
    return this.hH
};

function BIa(a, b) {
    for (var c = $T(aU(k, k), 0, 0, b.length, 0), d = 0, e = b.length; d < e; ++d) {
        if (b[d] === k) f(bU(new cU));
        c[d] = b[d]
    }
    a.k2 = c
}
n.$a = function () {
    var a = ET(HT(this)),
        b = this.sI();
    return b !== k ? a + ta + b : a
};

function dU() {}
var eU;
s(dU, YT);
dU.prototype.Q = function () {
    eU || (eU = R(k, YT.prototype.Q.call(k)));
    return eU
};

function CIa() {}
var fU;
s(CIa, dU);
CIa.prototype.Q = function () {
    fU || (fU = R(k, dU.prototype.Q.call(k)));
    return fU
};

function gU() {}
var hU;
s(gU, YT);
gU.prototype.Q = function () {
    hU || (hU = R(k, YT.prototype.Q.call(k)));
    return hU
};

function iU() {}
var jU;
s(iU, gU);
iU.prototype.Q = function () {
    jU || (jU = R(k, gU.prototype.Q.call(k)));
    return jU
};

function kU(a) {
    DIa(a);
    return a
}
function lU(a, b) {
    DIa(a);
    a.hH = b;
    return a
}
function mU() {}
var nU;
s(mU, iU);
n = mU.prototype;
n.gH = k;
n.eD = k;
n.iL = k;
n.Q = function () {
    nU || (nU = R(k, iU.prototype.Q.call(k)));
    return nU
};
var EIa = "String",
    oU = "message",
    FIa = "\n ";
n.sI = function () {
    if (this.eD === k) {
        this.iL = this.a === k ? Va : this.a instanceof Object ? this.a == k ? k : this.a.name : typeof this.a == bb ? EIa : ET(HT(this.a));this.gH = this.a instanceof Object ? this.a == k ? k : this.a.message : this.a + v;
        var a;
        if (this.a instanceof Object) {
            a = this.a;
            var b = v;
            for (var c in a) if (c != ua && c != oU && c != zb) try {
                b += FIa + c + ta + a[c]
            } catch (d) {}
            a = b
        } else a = v;this.eD = TJ + this.iL + NO + this.gH + a
    }
    return this.eD
};

function GIa() {}
var pU;
s(GIa, iU);
GIa.prototype.Q = function () {
    pU || (pU = R(k, iU.prototype.Q.call(k)));
    return pU
};

function qU() {}
var rU;
s(qU, iU);
qU.prototype.Q = function () {
    rU || (rU = R(k, iU.prototype.Q.call(k)));
    return rU
};

function HIa(a) {
    kU(a);
    return a
}
function sU() {}
var tU;
s(sU, iU);
sU.prototype.Q = function () {
    tU || (tU = R(k, iU.prototype.Q.call(k)));
    return tU
};

function IIa(a) {
    kU(a);
    return a
}
function uU(a, b) {
    lU(a, b);
    return a
}
function vU() {}
var wU;
s(vU, iU);
vU.prototype.Q = function () {
    wU || (wU = R(k, iU.prototype.Q.call(k)));
    return wU
};

function JIa(a) {
    kU(a);
    return a
}
function xU(a, b) {
    lU(a, b);
    return a
}
function yU() {}
var zU;
s(yU, iU);
yU.prototype.Q = function () {
    zU || (zU = R(k, iU.prototype.Q.call(k)));
    return zU
};

function KIa(a, b) {
    lU(a, b);
    return a
}
function cU() {}
var AU;
s(cU, iU);
cU.prototype.Q = function () {
    AU || (AU = R(k, iU.prototype.Q.call(k)));
    return AU
};

function bU(a) {
    kU(a);
    return a
}
function BU(a, b) {
    lU(a, b);
    return a
}
function CU() {}
var DU;
s(CU, iU);
CU.prototype.Q = function () {
    DU || (DU = R(k, iU.prototype.Q.call(k)));
    return DU
};

function EU(a) {
    kU(a);
    return a
}
function FU(a, b) {
    lU(a, b);
    return a
}
function GU() {}
var HU;
n = GU.prototype;
n.af = i;
n.Q = function () {
    HU || (HU = R(k, HT()));
    return HU
};
n.dc = function () {
    f(FU(new CU, "Add not supported on this collection"))
};
n.Zk = function (a) {
    a = a.Na();
    for (var b = l; a.Ra();) if (this.dc(a.Sa())) b = i;
    return b
};
n.vc = function (a) {
    return LIa(this, this.Na(), a) === k ? l : i
};
n.Mg = function (a) {
    for (a = a.Na(); a.Ra();) if (!this.vc(a.Sa())) return l;
    return i
};
n.ub = function () {
    return this.Ha() === 0
};
n.Hd = function (a) {
    a = LIa(this, this.Na(), a);
    if (a !== k) {
        a.wd();
        return i
    } else return l
};
n.nf = function () {
    return this.Jd($T(aU(k, k), 0, 0, this.Ha(), 0))
};
n.Jd = function (a) {
    var b = this.Ha();
    if (a.length < b) a = IU(a, b);
    for (var c = a, d = this.Na(), e = 0; e < b; ++e) JU(c, e, d.Sa());
    a.length > b && JU(a, b, k);
    return a
};
n.$a = function () {
    var a = new RT;
    a.a = new N;
    var b = k;
    TT(a, Lg);
    for (var c = this.Na(); c.Ra();) {
        if (b !== k) TT(a, b);
        else b = hz;
        TT(a, MT(c.Sa()))
    }
    TT(a, Mg);
    return a.$a()
};

function LIa(a, b, c) {
    for (; b.Ra();) {
        a = b.Sa();
        if (c === k ? a === k : GT(c, a)) return b
    }
    return k
}
n.Na = function () {
    return this.Na()
};
n.Ha = function () {
    return this.Ha()
};

function KU() {}
var LU;
s(KU, GU);
n = KU.prototype;
n.af = i;
n.Lw = i;
n.Q = function () {
    LU || (LU = R(k, GU.prototype.Q.call(k)));
    return LU
};

function MU(a, b) {
    if (a < 0 || a >= b) MIa(a, b)
}
function MIa(a, b) {
    f(KIa(new yU, "Index: " + a + ", Size: " + b))
}
n.dc = function (a) {
    this.Yk(this.Ha(), a);
    return i
};
n.Yk = function () {
    f(FU(new CU, "Add not supported on this list"))
};
n.ab = function (a) {
    if (a === this) return i;
    if (!(a && a.Lw)) return l;
    if (this.Ha() !== a.Ha()) return l;
    var b = this.Na();
    for (a = a.Na(); b.Ra();) {
        var c = b.Sa(),
            d = a.Sa();
        if (!(c === k ? d === k : GT(c, d))) return l
    }
    return i
};
n.eb = function () {
    for (var a = 1, b = this.Na(); b.Ra();) {
        var c = b.Sa();
        a = 31 * a + (c === k ? 0 : IT(c));
        a = ~~a
    }
    return a
};
n.Mj = function (a) {
    for (var b = 0, c = this.Ha(); b < c; ++b) if (a === k ? this.Oc(b) === k : GT(a, this.Oc(b))) return b;
    return -1
};
n.Na = function () {
    var a = new NU;
    a.a = this;
    return a
};
n.Wm = function () {
    f(FU(new CU, "Remove not supported on this list"))
};
n.fn = function () {
    f(FU(new CU, "Set not supported on this list"))
};
n.Oc = function (a) {
    return this.Oc(a)
};

function OU() {}
var PU;
n = OU.prototype;
n.Mw = i;
n.Q = function () {
    PU || (PU = R(k, HT()));
    return PU
};
n.ue = function (a) {
    return QU(this, a, l) !== k
};
n.vl = function (a) {
    for (var b = this.ae().Na(); b.Ra();) {
        var c = b.Sa().hb();
        if (a === k ? c === k : GT(a, c)) return i
    }
    return l
};
n.ab = function (a) {
    if (a === this) return i;
    if (!(a && a.Mw)) return l;
    if (this.Ha() !== a.Ha()) return l;
    for (a = a.ae().Na(); a.Ra();) {
        var b = a.Sa(),
            c = b.nb();
        b = b.hb();
        if (!this.ue(c)) return l;
        if (!RU(b, this.Qe(c))) return l
    }
    return i
};
n.Qe = function (a) {
    a = QU(this, a, l);
    return a === k ? k : a.hb()
};
n.eb = function () {
    for (var a = 0, b = this.ae().Na(); b.Ra();) {
        var c = b.Sa();
        a += c.eb();
        a = ~~a
    }
    return a
};
n.ub = function () {
    return this.Ha() === 0
};
n.rh = function () {
    var a = this.ae(),
        b = new SU;
    b.C2 = this;
    b.PM = a;
    return b
};
n.Ob = function () {
    f(FU(new CU, "Put not supported on this map"))
};
n.Hd = function (a) {
    a = QU(this, a, i);
    return a === k ? k : a.hb()
};
n.Ha = function () {
    return this.ae().Ha()
};
n.$a = function () {
    for (var a = fr, b = l, c = this.ae().Na(); c.Ra();) {
        var d = c.Sa();
        if (b) a += hz;
        else b = i;
        a += MT(d.nb());
        a += Pt;
        a += MT(d.hb())
    }
    return a + gr
};

function QU(a, b, c) {
    for (a = a.ae().Na(); a.Ra();) {
        var d = a.Sa(),
            e = d.nb();
        if (b === k ? e === k : GT(b, e)) {
            c && a.wd();
            return d
        }
    }
    return k
}
n.ae = function () {
    return this.ae()
};

function TU() {}
var UU;
s(TU, OU);
n = TU.prototype;
n.yi = k;
n.kk = k;
n.jk = l;
n.vk = 0;
n.mn = k;
n.Q = function () {
    UU || (UU = R(k, OU.prototype.Q.call(k)));
    return UU
};
n.ue = function (a) {
    if (a === k) a = this.jk;
    else {
        if (typeof a != bb) a: {
            var b = this.yi[this.Ur(a)];
            if (b) for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].nb();
                if (this.gi(a, e)) {
                    a = i;
                    break a
                }
            }
            a = l
        } else a = Sf + a in this.mn;a = a
    }
    return a
};
n.vl = function (a) {
    if (this.jk && this.gi(this.kk, a)) return i;
    else {
        var b;
        a: {
            b = this.mn;
            for (var c in b) if (c.charCodeAt(0) == 58) if (this.gi(a, b[c])) {
                b = i;
                break a
            }
            b = l
        }
        if (b) return i;
        else {
            a: {
                b = this.yi;
                for (var d in b) if (d == parseInt(d, 10)) {
                    c = b[d];
                    for (var e = 0, g = c.length; e < g; ++e) {
                        var h = c[e].hb();
                        if (this.gi(a, h)) {
                            a = i;
                            break a
                        }
                    }
                }
                a = l
            }
            if (a) return i
        }
    }
    return l
};
n.ae = function () {
    var a = new VU;
    a.a = this;
    return a
};
n.Qe = function (a) {
    if (a === k) a = this.kk;
    else {
        if (typeof a != bb) a: {
            var b = this.yi[this.Ur(a)];
            if (b) for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c],
                    g = e.nb();
                if (this.gi(a, g)) {
                    a = e.hb();
                    break a
                }
            }
            a = k
        } else a = NIa(this, a);a = a
    }
    return a
};
n.Ob = function (a, b) {
    var c;
    if (a === k) c = OIa(this, b);
    else {
        if (typeof a != bb) a: {
            var d = this.Ur(a);
            if (c = this.yi[d]) for (var e = 0, g = c.length; e < g; ++e) {
                d = c[e];
                var h = d.nb();
                if (this.gi(a, h)) {
                    c = d.hb();
                    d.Sp(b);
                    c = c;
                    break a
                }
            } else c = this.yi[d] = [];
            d = new WU;
            d.gC = a;
            d.Qy = b;
            d = d;
            c.push(d);
            ++this.vk;
            c = k
        } else c = PIa(this, a, b);c = c
    }
    return c
};
n.Hd = function (a) {
    if (a === k) {
        a = this.kk;
        this.kk = k;
        if (this.jk) {
            this.jk = l;
            --this.vk
        }
        a = a
    } else {
        if (typeof a != bb) a: {
            var b = this.Ur(a),
                c = this.yi[b];
            if (c) for (var d = 0, e = c.length; d < e; ++d) {
                var g = c[d],
                    h = g.nb();
                if (this.gi(a, h)) {
                    if (c.length == 1) delete this.yi[b];
                    else c.splice(d, 1);
                    --this.vk;
                    a = g.hb();
                    break a
                }
            }
            a = k
        } else {
            a = a;
            c = this.mn;
            a = Sf + a;
            if (a in c) {
                b = c[a];
                --this.vk;
                delete c[a]
            }
            a = b
        }
        a = a
    }
    return a
};
n.Ha = function () {
    return this.vk
};
n.gi = function () {};
n.Ur = function () {};

function QIa(a) {
    a.yi = [];
    a.mn = {};
    a.jk = l;
    a.kk = k;
    a.vk = 0
}

function NIa(a, b) {
    var c = a.mn[Sf + b];
    return c == k ? k : c
}
function OIa(a, b) {
    var c = a.kk;
    a.kk = b;
    if (!a.jk) {
        a.jk = i;
        ++a.vk
    }
    return c
}
function PIa(a, b, c) {
    var d = k,
        e = a.mn;
    b = Sf + b;
    if (b in e) d = e[b];
    else++a.vk;
    e[b] = c;
    return d
}
function XU() {}
var YU;
n = XU.prototype;
n.lm = i;
n.Q = function () {
    YU || (YU = R(k, HT()));
    return YU
};
n.ab = function (a) {
    if (a && a.lm) if (RU(this.nb(), a.nb()) && RU(this.hb(), a.hb())) return i;
    return l
};
n.eb = function () {
    var a = 0,
        b = 0;
    if (this.nb() !== k) a = IT(this.nb());
    if (this.hb() !== k) b = IT(this.hb());
    return a ^ b
};
n.$a = function () {
    return this.nb() + Pt + this.hb()
};

function ZU() {}
var $U;
s(ZU, XU);
ZU.prototype.Q = function () {
    $U || ($U = R(k, XU.prototype.Q.call(k)));
    return $U
};

function RIa(a, b) {
    a.a = b;
    return a
}
ZU.prototype.nb = function () {
    return k
};
ZU.prototype.hb = function () {
    return this.a.kk
};
ZU.prototype.Sp = function (a) {
    return OIa(this.a, a)
};

function aV() {}
var bV;
s(aV, XU);
aV.prototype.Q = function () {
    bV || (bV = R(k, XU.prototype.Q.call(k)));
    return bV
};
aV.prototype.nb = function () {
    return this.a
};
aV.prototype.hb = function () {
    return NIa(this.f, this.a)
};
aV.prototype.Sp = function (a) {
    return PIa(this.f, this.a, a)
};

function cV() {}
var dV;
s(cV, GU);
n = cV.prototype;
n.af = i;
n.Po = i;
n.Q = function () {
    dV || (dV = R(k, GU.prototype.Q.call(k)));
    return dV
};
n.ab = function (a) {
    if (a === this) return i;
    if (!(a && a.Po)) return l;
    if (a.Ha() !== this.Ha()) return l;
    for (a = a.Na(); a.Ra();) if (!this.vc(a.Sa())) return l;
    return i
};
n.eb = function () {
    for (var a = 0, b = this.Na(); b.Ra();) {
        var c = b.Sa();
        if (c !== k) {
            a += IT(c);
            a = ~~a
        }
    }
    return a
};

function VU() {}
var eV;
s(VU, cV);
n = VU.prototype;
n.Q = function () {
    eV || (eV = R(k, cV.prototype.Q.call(k)));
    return eV
};
n.vc = function (a) {
    if (a && a.lm) {
        var b = a.nb();
        if (this.a.ue(b)) {
            b = this.a.Qe(b);
            return this.a.gi(a.hb(), b)
        }
    }
    return l
};
n.Na = function () {
    var a = new SIa;
    a.a = this.a;
    var b = fV(new gV);
    a.a.jk && b.dc(RIa(new ZU, a.a));
    var c = a.a,
        d = c.mn;
    for (var e in d) if (e.charCodeAt(0) == 58) {
        var g = e.substring(1),
            h = new aV;
        h.f = c;
        h.a = g;
        b.dc(h)
    }
    c = a.a.yi;
    for (var j in c) if (j == parseInt(j, 10)) {
        d = c[j];
        e = 0;
        for (g = d.length; e < g; ++e) b.dc(d[e])
    }
    a.f = b.Na();
    return a
};
n.Hd = function (a) {
    if (this.vc(a)) {
        this.a.Hd(a.nb());
        return i
    }
    return l
};
n.Ha = function () {
    return this.a.Ha()
};

function SU() {}
var hV;
s(SU, cV);
SU.prototype.Q = function () {
    hV || (hV = R(k, cV.prototype.Q.call(k)));
    return hV
};
SU.prototype.vc = function (a) {
    return this.C2.ue(a)
};
SU.prototype.Na = function () {
    var a = this.PM.Na(),
        b = new iV;
    b.f = this;
    b.a = a;
    return b
};
SU.prototype.Ha = function () {
    return this.PM.Ha()
};

function gV() {}
var jV;
s(gV, KU);
n = gV.prototype;
n.af = i;
n.Lw = i;
n.Nw = i;
n.Id = 0;

function TIa(a) {
    a.a = $T(aU(k, k), 0, 0, 0, 0)
}
n.Q = function () {
    jV || (jV = R(k, KU.prototype.Q.call(k)));
    return jV
};

function fV(a) {
    TIa(a);
    return a
}
n.dc = function (a) {
    JU(this.a, this.Id++, a);
    return i
};
n.Yk = function (a, b) {
    if (a < 0 || a > this.Id) MIa(a, this.Id);
    this.a.splice(a, 0, b);
    ++this.Id
};
n.Zk = function (a) {
    a = a.nf();
    var b = a.length;
    if (b === 0) return l;
    Array.prototype.splice.apply(this.a, [this.Id, 0].concat(a));
    this.Id += b;
    return i
};
n.vc = function (a) {
    return this.Mj(a) !== -1
};
n.Oc = function (a) {
    MU(a, this.Id);
    return this.a[a]
};
n.Mj = function (a) {
    a: {
        for (var b = 0; b < this.Id; ++b) if (RU(a, this.a[b])) {
            a = b;
            break a
        }
        a = -1
    }
    return a
};
n.ub = function () {
    return this.Id === 0
};
n.Wm = function (a) {
    var b = this.Oc(a);
    this.a.splice(a, 1);
    --this.Id;
    return b
};
n.Hd = function (a) {
    a = this.Mj(a);
    if (a === -1) return l;
    this.Wm(a);
    return i
};
n.fn = function (a, b) {
    var c = this.Oc(a);
    JU(this.a, a, b);
    return c
};
n.Ha = function () {
    return this.Id
};
n.nf = function () {
    return UIa(this.a, 0, this.Id)
};
n.Jd = function (a) {
    if (a.length < this.Id) a = IU(a, this.Id);
    for (var b = 0; b < this.Id; ++b) JU(a, b, this.a[b]);
    a.length > this.Id && JU(a, this.Id, k);
    return a
};
var kV, VIa, WIa;

function lV() {
    lV = Pa;
    kV = mV(fV(new gV));
    VIa = nV(oV(new pV));
    var a = new qV;
    a.Hi = oV(new pV);
    WIa = rV(new sV, a)
}
function tV(a) {
    var b = new gV;
    TIa(b);
    b.a.length = 1;
    b.dc(a);
    return mV(b)
}
function mV(a) {
    if (a && a.Nw) {
        var b = new uV;
        XIa(b, a);
        a = b
    } else a = XIa(new vV, a);
    return a
}
function nV(a) {
    var b = new YIa;
    b.a = a;
    return b
}
function pV() {}
var wV;
s(pV, TU);
pV.prototype.Q = function () {
    wV || (wV = R(k, TU.prototype.Q.call(k)));
    return wV
};

function oV(a) {
    QIa(a);
    return a
}
function ZIa(a, b) {
    QIa(a);
    if (b < 0) f(uU(new sU, "initial capacity was negative or load factor was non-positive"));
    return a
}
pV.prototype.gi = function (a, b) {
    return RU(a, b)
};
pV.prototype.Ur = function (a) {
    return~~IT(a)
};

function qV() {}
var xV;
s(qV, cV);
n = qV.prototype;
n.af = i;
n.Po = i;
n.Hi = k;
n.Q = function () {
    xV || (xV = R(k, cV.prototype.Q.call(k)));
    return xV
};
n.dc = function (a) {
    return this.Hi.Ob(a, this) === k
};
n.vc = function (a) {
    return this.Hi.ue(a)
};
n.ub = function () {
    return this.Hi.ub()
};
n.Na = function () {
    return this.Hi.rh().Na()
};
n.Hd = function (a) {
    return this.Hi.Hd(a) !== k
};
n.Ha = function () {
    return this.Hi.Ha()
};
n.$a = function () {
    return KT(this.Hi.rh())
};

function yV() {}
var zV;
s(yV, pV);
n = yV.prototype;
n.Mw = i;
n.iG = l;
n.Q = function () {
    zV || (zV = R(k, pV.prototype.Q.call(k)));
    return zV
};
n.ue = function (a) {
    return this.f.ue(a)
};
n.vl = function (a) {
    for (var b = this.a.Hf; b !== this.a;) {
        if (RU(b.hb(), a)) return i;
        b = b.Hf
    }
    return l
};
n.ae = function () {
    var a = new AV;
    a.a = this;
    return a
};
n.Qe = function (a) {
    a = this.f.Qe(a);
    if (a !== k) {
        if (this.iG) {
            a.wd();
            BV(a)
        }
        return a.hb()
    }
    return k
};
n.Ob = function (a, b) {
    var c = this.f.Qe(a);
    if (c === k) {
        c = $Ia(new CV, a, b, this);
        this.f.Ob(a, c);
        BV(c);
        return k
    } else {
        var d = c.hb();
        c.Sp(b);
        if (this.iG) {
            c.wd();
            BV(c)
        }
        return d
    }
};
n.Hd = function (a) {
    a = this.f.Hd(a);
    if (a !== k) {
        a.wd();
        return a.hb()
    }
    return k
};
n.Ha = function () {
    return this.f.Ha()
};

function WU() {}
var DV;
s(WU, XU);
n = WU.prototype;
n.gC = k;
n.Qy = k;
n.Q = function () {
    DV || (DV = R(k, XU.prototype.Q.call(k)));
    return DV
};
n.nb = function () {
    return this.gC
};
n.hb = function () {
    return this.Qy
};
n.Sp = function (a) {
    var b = this.hb();
    this.Qy = a;
    return b
};

function CV() {}
var EV;
s(CV, WU);
CV.prototype.Hf = k;
CV.prototype.Ri = k;
CV.prototype.Q = function () {
    EV || (EV = R(k, WU.prototype.Q.call(k)));
    return EV
};

function $Ia(a, b, c, d) {
    a.a = d;
    a.gC = b;
    a.Qy = c;
    a.Hf = a.Ri = k;
    return a
}
function BV(a) {
    var b = a.a.a.Ri;
    a.Ri = b;
    a.Hf = a.a.a;
    b.Hf = a.a.a.Ri = a
}
CV.prototype.wd = function () {
    this.Hf.Ri = this.Ri;
    this.Ri.Hf = this.Hf;
    this.Hf = this.Ri = k
};

function FV() {}
var GV;
s(FV, iU);
FV.prototype.Q = function () {
    GV || (GV = R(k, iU.prototype.Q.call(k)));
    return GV
};

function HV(a) {
    kU(a);
    return a
}
function RU(a, b) {
    return a === b || a !== k && GT(a, b)
}
var aJa = "Unknown",
    bJa = "Unknown source";

function DIa(a) {
    for (var b = (new IV).a(), c = $T(aU(k, k), 0, 0, b.length, 0), d = 0, e = c.length; d < e; d++) {
        var g = c,
            h = d,
            j = new PT,
            m = b[d];
        j.Nz = aJa;
        j.fD = m;
        j.AA = bJa;
        j.XC = 0;
        g[h] = j
    }
    BIa(a, c)
}
function JV() {}
var KV;
JV.prototype.length = 0;
JV.prototype.$P = k;
JV.prototype.Cp = 0;

function UIa(a, b, c) {
    b = a.slice(b, c);
    LV(a.Q(), a.au, a.Cp, b);
    return b
}
function IU(a, b) {
    var c = cJa(0, b);
    LV(a.Q(), a.au, a.Cp, c);
    return c
}
function $T(a, b, c, d, e) {
    d = cJa(e, d);
    LV(a, b, c, d);
    return d
}
function LV(a, b, c, d) {
    dJa();
    for (var e = MV, g = NV, h = 0, j = e.length; h < j; ++h) d[e[h]] = g[h];
    d.$P = a;
    d.au = b;
    d.Cp = c;
    return d
}
function JU(a, b, c) {
    if (c !== k) {
        if (a.Cp > 0 && (!c.au || !k[c.au][a.Cp])) f(HIa(new qU));
        if (a.Cp < 0 && (c.j6 === eJa() || c.au === 2)) f(HIa(new qU))
    }
    return a[b] = c
}

function cJa(a, b) {
    for (var c = Array(b), d = [k, 0, l, [0, 0]][a], e = 0; e < b; ++e) c[e] = d;
    return c
}
JV.prototype.Q = function () {
    KV || (KV = R(k, HT()));
    return KV
};

function eJa() {
    return function () {}
}
function OV(a) {
    if (a instanceof YT) return a;
    var b = new mU;
    kU(b);
    b.a = a;
    a = [];
    for (var c = $T(aU(k, k), 0, 0, a.length, 0), d = 0, e = c.length; d < e; d++) {
        var g = c,
            h = d,
            j = new PT,
            m = a[d];
        j.Nz = aJa;
        j.fD = m;
        j.AA = bJa;
        j.XC = 0;
        g[h] = j
    }
    BIa(b, c);
    return b
}
function PV() {}
var QV;

function RV() {
    RV = Pa;
    PV.prototype.Q.call(k)
}
n = PV.prototype;
n.Q = function () {
    QV || (QV = R(k, HT()));
    return QV
};

function SV(a) {
    if (a < 128) {
        var b = (TV(), UV)[a];
        if (b === k) {
            b = (TV(), UV);
            var c = new PV;
            RV();
            c.Jk = a;
            b = b[a] = c
        }
        return b
    }
    b = new PV;
    RV();
    b.Jk = a;
    return b
}
n.ab = function (a) {
    return a instanceof PV && a.Jk === this.Jk
};
n.eb = function () {
    return this.Jk
};
n.$a = function () {
    return String.fromCharCode(this.Jk)
};
n.Me = function (a) {
    return this.Jk - a.Jk
};

function fJa() {}
var VV;
n = fJa.prototype;
n.G_ = 0;
n.DQ = k;
n.u2 = k;
n.Q = function () {
    VV || (VV = R(k, HT()));
    return VV
};
var gJa = "Class$";

function aU(a, b, c) {
    var d = new fJa;
    d.typeName = gJa + (a + b);
    d.G_ = 4;
    d.u2 = HT();
    d.DQ = c;
    return d
}
n.$a = function () {
    return ((this.Hx & 2) != 0 ? xIa : (this.Hx & 1) != 0 ? v : yIa) + this.HE
};

function WV() {}
var XV;
n = WV.prototype;
n.Q = function () {
    XV || (XV = R(k, HT()));
    return XV
};

function YV(a, b, c) {
    a.jL = b;
    a.qp = c;
    return a
}
n.ab = function (a) {
    return this === a
};
n.eb = function () {
    return typeof this === bb ? JT(this) : ib(this)
};
n.$a = function () {
    return this.jL
};
n.Me = function (a) {
    return this.qp - a.qp
};

function ZV() {}
var $V;
ZV.prototype.Q = function () {
    $V || ($V = R(k, HT()));
    return $V
};
ZV.prototype.Jc = function () {};

function aW() {}
var bW;
s(aW, ZV);
n = aW.prototype;
n.Q = function () {
    bW || (bW = R(k, ZV.prototype.Q.call(k)));
    return bW
};

function cW(a) {
    if (a > -129 && a < 128) {
        var b = a + 128,
            c = (dW(), eW)[b];
        if (c === k) c = (dW(), eW)[b] = fW(new aW, a);
        return c
    }
    return fW(new aW, a)
}
function fW(a, b) {
    a.Yi = b;
    return a
}
n.ab = function (a) {
    return a instanceof aW && a.Yi === this.Yi
};
n.eb = function () {
    return this.Yi
};
n.Jc = function () {
    return this.Yi
};
n.$a = function () {
    return MT(this.Yi)
};
n.Me = function (a) {
    return this.Yi < a.Yi ? -1 : this.Yi > a.Yi ? 1 : 0
};

function SIa() {}
var gW;
n = SIa.prototype;
n.sx = k;
n.Q = function () {
    gW || (gW = R(k, HT()));
    return gW
};
n.Ra = function () {
    return this.f.Ra()
};
n.Sa = function () {
    return this.sx = this.f.Sa()
};
n.wd = function () {
    if (this.sx === k) f(xU(new vU, "Must call next() before remove()."));
    else {
        this.f.wd();
        this.a.Hd(this.sx.nb());
        this.sx = k
    }
};

function NU() {}
var hW;
n = NU.prototype;
n.Fw = 0;
n.dp = -1;
n.Q = function () {
    hW || (hW = R(k, HT()));
    return hW
};
n.Ra = function () {
    return this.Fw < this.a.Ha()
};
n.Sa = function () {
    if (!this.Ra()) f(HV(new FV));
    return this.a.Oc(this.dp = this.Fw++)
};
n.wd = function () {
    if (this.dp < 0) f(JIa(new vU));
    this.a.Wm(this.dp);
    this.Fw = this.dp;
    this.dp = -1
};

function iW() {}
var jW;
s(iW, NU);
iW.prototype.Q = function () {
    jW || (jW = R(k, NU.prototype.Q.call(k)));
    return jW
};
iW.prototype.dc = function (a) {
    this.f.Yk(this.Fw++, a);
    this.dp = -1
};

function hJa() {}
var kW;
s(hJa, KU);
n = hJa.prototype;
n.kn = 0;
n.Q = function () {
    kW || (kW = R(k, KU.prototype.Q.call(k)));
    return kW
};
n.Yk = function (a, b) {
    MU(a, this.kn - 1);
    this.kn++;
    this.f.Yk(this.a + a, b)
};
n.Oc = function (a) {
    MU(a, this.kn);
    return this.f.Oc(this.a + a)
};
n.Wm = function (a) {
    MU(a, this.kn);
    a = this.f.Wm(this.a + a);
    this.kn--;
    return a
};
n.fn = function (a, b) {
    MU(a, this.kn);
    return this.f.fn(this.a + a, b)
};
n.Ha = function () {
    return this.kn
};

function iV() {}
var lW;
iV.prototype.Q = function () {
    lW || (lW = R(k, HT()));
    return lW
};
iV.prototype.Ra = function () {
    return this.a.Ra()
};
iV.prototype.Sa = function () {
    return this.a.Sa().nb()
};
iV.prototype.wd = function () {
    this.a.wd()
};

function mW() {}
var nW;
s(mW, GU);
mW.prototype.Q = function () {
    nW || (nW = R(k, GU.prototype.Q.call(k)));
    return nW
};
mW.prototype.vc = function (a) {
    return this.h6.vl(a)
};
mW.prototype.Na = function () {
    var a = this.L2.Na(),
        b = new oW;
    b.f = this;
    b.a = a;
    return b
};
mW.prototype.Ha = function () {
    return this.L2.Ha()
};

function oW() {}
var pW;
oW.prototype.Q = function () {
    pW || (pW = R(k, HT()));
    return pW
};
oW.prototype.Ra = function () {
    return this.a.Ra()
};
oW.prototype.Sa = function () {
    return this.a.Sa().hb()
};
oW.prototype.wd = function () {
    this.a.wd()
};

function iJa() {}
var qW;
s(iJa, KU);
n = iJa.prototype;
n.Nw = i;
n.$k = k;
n.Q = function () {
    qW || (qW = R(k, KU.prototype.Q.call(k)));
    return qW
};
n.vc = function (a) {
    return this.Mj(a) !== -1
};
n.Oc = function (a) {
    MU(a, this.Ha());
    return this.$k[a]
};
n.fn = function (a, b) {
    MU(a, this.Ha());
    var c = this.$k[a];
    JU(this.$k, a, b);
    return c
};
n.Ha = function () {
    return this.$k.length
};
n.nf = function () {
    return UIa(this.$k, 0, this.$k.length)
};
n.Jd = function (a) {
    var b = this.Ha();
    if (a.length < b) a = IU(a, b);
    for (var c = 0; c < b; ++c) JU(a, c, this.$k[c]);
    a.length > b && JU(a, b, k);
    return a
};

function rW() {}
var sW;
n = rW.prototype;
n.af = i;
n.Q = function () {
    sW || (sW = R(k, HT()));
    return sW
};
n.dc = function () {
    f(EU(new CU))
};
n.Zk = function () {
    f(EU(new CU))
};
n.vc = function (a) {
    return this.Zd.vc(a)
};
n.Mg = function (a) {
    return this.Zd.Mg(a)
};
n.ub = function () {
    return this.Zd.ub()
};
n.Na = function () {
    var a = new tW,
        b = this.Zd.Na();
    a.a = b;
    return a
};
n.Hd = function () {
    f(EU(new CU))
};
n.Ha = function () {
    return this.Zd.Ha()
};
n.nf = function () {
    return this.Zd.nf()
};
n.Jd = function (a) {
    return this.Zd.Jd(a)
};
n.$a = function () {
    return KT(this.Zd)
};

function tW() {}
var uW;
tW.prototype.Q = function () {
    uW || (uW = R(k, HT()));
    return uW
};
tW.prototype.Ra = function () {
    return this.a.Ra()
};
tW.prototype.Sa = function () {
    return this.a.Sa()
};
tW.prototype.wd = function () {
    f(EU(new CU))
};

function vV() {}
var vW;
s(vV, rW);
n = vV.prototype;
n.af = i;
n.Lw = i;
n.Q = function () {
    vW || (vW = R(k, rW.prototype.Q.call(k)));
    return vW
};

function XIa(a, b) {
    a.Zd = b;
    a.a = b;
    return a
}
n.Yk = function () {
    f(EU(new CU))
};
n.ab = function (a) {
    return this.a.ab(a)
};
n.Oc = function (a) {
    return this.a.Oc(a)
};
n.eb = function () {
    return this.a.eb()
};
n.Mj = function (a) {
    return this.a.Mj(a)
};
n.ub = function () {
    return this.a.ub()
};
n.Wm = function () {
    f(EU(new CU))
};
n.fn = function () {
    f(EU(new CU))
};

function wW() {}
var xW;
s(wW, tW);
wW.prototype.Q = function () {
    xW || (xW = R(k, tW.prototype.Q.call(k)));
    return xW
};
wW.prototype.dc = function () {
    f(EU(new CU))
};

function YIa() {}
var yW;
n = YIa.prototype;
n.Mw = i;
n.uA = k;
n.fC = k;
n.Q = function () {
    yW || (yW = R(k, HT()));
    return yW
};
n.ue = function (a) {
    return this.a.ue(a)
};
n.vl = function (a) {
    return this.a.vl(a)
};
n.ae = function () {
    if (this.uA === k) {
        var a = new zW,
            b = this.a.ae();
        rV(a, b);
        this.uA = a
    }
    return this.uA
};
n.ab = function (a) {
    return this.a.ab(a)
};
n.Qe = function (a) {
    return this.a.Qe(a)
};
n.eb = function () {
    return this.a.eb()
};
n.ub = function () {
    return this.a.ub()
};
n.rh = function () {
    if (this.fC === k) this.fC = rV(new sV, this.a.rh());
    return this.fC
};
n.Ob = function () {
    f(EU(new CU))
};
n.Hd = function () {
    f(EU(new CU))
};
n.Ha = function () {
    return this.a.Ha()
};
n.$a = function () {
    return KT(this.a)
};

function AW() {}
var BW;
AW.prototype.Q = function () {
    BW || (BW = R(k, HT()));
    return BW
};
AW.prototype.Ra = function () {
    return this.a.Ra()
};
AW.prototype.Sa = function () {
    var a = new CW,
        b = this.a.Sa();
    a.Cl = b;
    return a
};
AW.prototype.wd = function () {
    f(EU(new CU))
};

function CW() {}
var DW;
n = CW.prototype;
n.lm = i;
n.Cl = k;
n.Q = function () {
    DW || (DW = R(k, HT()));
    return DW
};
n.ab = function (a) {
    return this.Cl.ab(a)
};
n.nb = function () {
    return this.Cl.nb()
};
n.hb = function () {
    return this.Cl.hb()
};
n.eb = function () {
    return this.Cl.eb()
};
n.Sp = function () {
    f(EU(new CU))
};
n.$a = function () {
    return KT(this.Cl)
};

function uV() {}
var EW;
s(uV, vV);
uV.prototype.Nw = i;
uV.prototype.Q = function () {
    EW || (EW = R(k, vV.prototype.Q.call(k)));
    return EW
};

function sV() {}
var FW;
s(sV, rW);
n = sV.prototype;
n.af = i;
n.Po = i;
n.Q = function () {
    FW || (FW = R(k, rW.prototype.Q.call(k)));
    return FW
};

function rV(a, b) {
    a.Zd = b;
    return a
}
n.ab = function (a) {
    return this.Zd.ab(a)
};
n.eb = function () {
    return this.Zd.eb()
};

function AV() {}
var GW;
s(AV, cV);
AV.prototype.Q = function () {
    GW || (GW = R(k, cV.prototype.Q.call(k)));
    return GW
};
AV.prototype.vc = function (a) {
    if (!(a && a.lm)) return l;
    var b = a.nb();
    if (this.a.ue(b)) {
        b = this.a.Qe(b);
        return RU(a.hb(), b)
    }
    return l
};
AV.prototype.Na = function () {
    var a = new jJa;
    a.a = this;
    a.kp = a.a.a.a.Hf;
    return a
};
AV.prototype.Ha = function () {
    return this.a.f.Ha()
};

function jJa() {}
var HW;
n = jJa.prototype;
n.fp = k;
n.kp = k;
n.Q = function () {
    HW || (HW = R(k, HT()));
    return HW
};
n.Ra = function () {
    return this.kp !== this.a.a.a
};
n.Sa = function () {
    if (this.kp === this.a.a.a) f(HV(new FV));
    this.fp = this.kp;
    this.kp = this.kp.Hf;
    return this.fp
};
n.wd = function () {
    if (this.fp === k) f(xU(new vU, "No current entry"));
    this.fp.wd();
    this.a.a.f.Hd(this.fp.nb());
    this.fp = k
};

function IV() {}
var IW;
IV.prototype.Q = function () {
    IW || (IW = R(k, HT()));
    return IW
};
var kJa = "anonymous";
IV.prototype.a = function () {
    for (var a = {}, b = [], c = arguments.callee.caller.caller; c;) {
        var d;
        d = c.toString();
        var e = v;
        d = Jb(d);
        var g = d.indexOf(fb(TJ) ? String.fromCharCode(TJ) : TJ,
        void 0);
        if (g !== -1) {
            e = d;
            e = p(void 0) ? void 0 >= e.length ? l : e.indexOf(Ua, void 0) == void 0 : Hb(e, Ua);e = e ? 8 : 0;e = Jb(p(g) ? d.substring(e, g) : d.substring(e))
        }
        d = e.length > 0 ? e : kJa;b.push(d);d = Sf + d;
        if (g = a[d]) {
            var h;
            e = 0;
            for (h = g.length; e < h; e++) if (g[e] === c) return b
        }(g || (a[d] = [])).push(c);c = c.caller
    }
    return b
};
var MV, NV;

function dJa() {
    dJa = Pa;
    MV = [];
    NV = [];
    var a = new JV,
        b = MV,
        c = NV,
        d = 0,
        e;
    for (var g in a) if (e = a[g]) {
        b[d] = g;
        c[d] = e;
        ++d
    }
}
var UV;

function TV() {
    TV = Pa;
    UV = $T(aU(k, k), 0, 0, 128, 0)
}
var eW;

function dW() {
    dW = Pa;
    eW = $T(aU(k, k), 0, 0, 256, 0)
}
function zW() {}
var JW;
s(zW, sV);
n = zW.prototype;
n.Q = function () {
    JW || (JW = R(k, sV.prototype.Q.call(k)));
    return JW
};
n.vc = function (a) {
    return this.Zd.vc(a)
};
n.Mg = function (a) {
    return this.Zd.Mg(a)
};
n.Na = function () {
    var a = this.Zd.Na(),
        b = new AW;
    b.f = this;
    b.a = a;
    return b
};
n.nf = function () {
    var a = rW.prototype.nf.call(this);
    lJa(this, a, a.length);
    return a
};
n.Jd = function (a) {
    a = rW.prototype.Jd.call(this, a);
    lJa(this, a, this.Zd.Ha());
    return a
};

function lJa(a, b, c) {
    for (a = 0; a < c; ++a) {
        var d = b,
            e = a,
            g = new CW;
        g.Cl = b[a];
        JU(d, e, g)
    }
};

function KW() {}
var LW;
n = KW.prototype;
n.lm = i;
n.Q = function () {
    LW || (LW = R(k, HT()));
    return LW
};
n.Sp = function () {
    f(EU(new CU))
};
n.ab = function (a) {
    if (a && a.lm) return MW(this.nb(), a.nb()) && MW(this.hb(), a.hb());
    return l
};
n.eb = function () {
    var a = this.nb(),
        b = this.hb();
    return (a === k ? 0 : IT(a)) ^ (b === k ? 0 : IT(b))
};
n.$a = function () {
    return this.nb() + Pt + this.hb()
};
n.nb = function () {
    return this.nb()
};
n.hb = function () {
    return this.hb()
};
var mJa;

function NW() {
    NW = Pa;
    var a = new nJa;
    a.X5 = OW(hz);
    mJa = a
}
function PW() {}
var QW;
PW.prototype.Q = function () {
    QW || (QW = R(k, HT()));
    return QW
};
PW.prototype.kd = function () {};
PW.prototype.$a = function () {
    return KT(this.kd())
};

function RW() {}
var SW;
s(RW, PW);
n = RW.prototype;
n.af = i;
n.Q = function () {
    SW || (SW = R(k, PW.prototype.Q.call(k)));
    return SW
};
n.Na = function () {
    return this.kd().Na()
};
n.Ha = function () {
    return this.kd().Ha()
};
n.ub = function () {
    return this.kd().ub()
};
n.vc = function (a) {
    return this.kd().vc(a)
};
n.nf = function () {
    return this.kd().nf()
};
n.Jd = function (a) {
    return this.kd().Jd(a)
};
n.dc = function (a) {
    return this.kd().dc(a)
};
n.Hd = function (a) {
    return this.kd().Hd(a)
};
n.Mg = function (a) {
    return this.kd().Mg(a)
};
n.Zk = function (a) {
    return this.kd().Zk(a)
};
n.kd = function () {
    return this.kd()
};

function TW() {}
var UW;
s(TW, RW);
n = TW.prototype;
n.af = i;
n.Po = i;
n.Q = function () {
    UW || (UW = R(k, RW.prototype.Q.call(k)));
    return UW
};
n.ab = function (a) {
    return a === this || this.kd().ab(a)
};
n.eb = function () {
    return this.kd().eb()
};
n.kd = function () {
    return this.kd()
};

function VW() {}
var WW;
s(VW, KW);
VW.prototype.Q = function () {
    WW || (WW = R(k, KW.prototype.Q.call(k)));
    return WW
};
VW.prototype.nb = function () {
    return this.a
};
VW.prototype.hb = function () {
    return this.f
};

function XW() {
    XW = Pa;
    var a = (NW(), mJa),
        b = new oJa,
        c = OW(Pt);
    b.a = a;
    b.f = c
}
function pJa(a, b) {
    var c = new VW;
    c.a = a;
    c.f = b;
    return c
}
function YW() {}
var ZW;
YW.prototype.Q = function () {
    ZW || (ZW = R(k, HT()));
    return ZW
};
YW.prototype.wd = function () {
    f(EU(new CU))
};

function nJa() {}
var $W;
nJa.prototype.Q = function () {
    $W || ($W = R(k, HT()));
    return $W
};

function MW(a, b) {
    return a === b || a !== k && GT(a, b)
}

function aX(a) {
    if (a === k) a = 0;
    else {
        for (var b = 1, c = 0, d = a.length; c < d; ++c) {
            var e = a[c];
            b = 31 * b + (e === k ? 0 : IT(e)) | 0
        }
        a = b
    }
    return a
}
function bX() {}
var cX;
bX.prototype.Q = function () {
    cX || (cX = R(k, HT()));
    return cX
};
bX.prototype.ab = function (a) {
    if (a instanceof bX) return MW(this.a, a.a) && MW(this.f, a.f);
    return l
};
bX.prototype.eb = function () {
    return aX(LV(aU(k, k), 0, 0, [this.a, this.f]))
};
bX.prototype.$a = function () {
    return TJ + this.a + hz + this.f + Of
};

function dX(a, b) {
    if (!a) f(uU(new sU, MT(b)))
}

function eX(a, b, c) {
    if (!a) f(uU(new sU, qJa(b, c)))
}
function OW(a) {
    if (a === k) f(bU(new cU));
    return a
}
function rJa(a, b) {
    if (a === k) f(BU(new cU, MT(b)));
    return a
}
function sJa(a) {
    if (a === k) return i;
    if (a && a.af) try {
        return a.vc(k)
    } catch (b) {
        b = OV(b);
        if (b instanceof cU) return l;
        else f(b)
    } else {
        for (a = a.Na(); a.Ra();) if (a.Sa() === k) return i;
        return l
    }
}
var fX = "%s";

function qJa(a, b) {
    a = MT(a);
    var c = new UT;
    c.a = new N;
    for (var d = 0, e = 0; e < b.length;) {
        var g = a.indexOf(fb(fX) ? String.fromCharCode(fX) : fX,
        d);
        if (g === -1) break;
        XT(c, p(g) ? a.substring(d, g) : a.substring(d));
        WT(c, b[e++]);
        d = g + 2
    }
    XT(c, p(void 0) ? a.substring(d, void 0) : a.substring(d));
    if (e < b.length) {
        XT(c, rqa);
        for (WT(c, b[e++]); e < b.length;) {
            XT(c, hz);
            WT(c, b[e++])
        }
        XT(c, Mg)
    }
    return c.$a()
}
function gX() {}
var hX;
n = gX.prototype;
n.UB = i;
n.Q = function () {
    hX || (hX = R(k, HT()));
    return hX
};

function iX(a, b, c) {
    if (b === k) f(BU(new cU, "Parameter 'min' is null."));
    if (c === k) f(BU(new cU, "Parameter 'max' is null."));
    if (b.Me(c) > 0) f(uU(new sU, "Parameter 'min' cannot be greater than Parameter 'max'."));
    a.f = b;
    a.a = c;
    return a
}
n.Rz = function (a) {
    return a !== k && this.f.Me(a) < 1 && this.a.Me(a) > -1
};
n.RH = function (a) {
    if (a === k) return this;
    if (this.ub()) return iX(new gX, a, a);
    return this.f.Me(a) > 0 ? iX(new gX, a, this.a) : this.a.Me(a) < 0 ? iX(new gX, this.f, a) : this
};
var tJa = "[Range:";
n.$a = function () {
    return tJa + this.f + hz + this.a + Mg
};
n.ab = function (a) {
    if (a && a.UB) try {
        if (a.ub()) return l;
        return GT(a.pe(), this.f) && GT(a.oe(), this.a)
    } catch (b) {
        b = OV(b);
        f(b)
    } else return l
};
n.eb = function () {
    return IT(this.f) * 555557 + IT(this.a)
};
n.Ow = function (a) {
    if (this.VB(a) === l) return jX(), kX;
    else {
        var b = a.pe();
        a = a.oe();
        return iX(new gX, b.Me(this.f) > 0 ? b : this.f,
        a.Me(this.a) < 0 ? a : this.a)
    }
};
n.VB = function (a) {
    return a.ub() ? l : this.a.Me(a.pe()) > -1 && this.f.Me(a.oe()) < 1
};
n.ub = function () {
    return l
};
n.oe = function () {
    return this.a
};
n.pe = function () {
    return this.f
};

function lX(a, b) {
    if (b.Me(a) > -1) return iX(new gX, a, b);
    return jX(), kX
}
function uJa(a, b) {
    for (var c = a, d = 0, e = b.length; d < e; ++d) c = c.Ow(b[d]);
    return c
}
function mX() {}
var nX;
n = mX.prototype;
n.af = i;

function oX() {
    oX = Pa;
    vJa(new pX, (lV(), kV))
}
n.Q = function () {
    nX || (nX = R(k, HT()));
    return nX
};
n.nf = function () {
    return this.Jd($T(aU(k, k), 0, 0, this.Ha(), 0))
};
n.Jd = function (a) {
    var b = this.Ha();
    if (a.length < b) a = IU(a, b);
    else a.length > b && JU(a, b, k);
    b = a;
    for (var c = 0, d = this.Na(); d.Ra();) {
        var e = d.Sa();
        JU(b, c++, e)
    }
    return a
};
n.vc = function (a) {
    if (a === k) return l;
    for (var b = this.Na(); b.Ra();) {
        var c = b.Sa();
        if (GT(c, a)) return i
    }
    return l
};
n.Mg = function (a) {
    for (a = a.Na(); a.Ra();) if (!this.vc(a.Sa())) return l;
    return i
};
n.ub = function () {
    return this.Ha() === 0
};
n.dc = function () {
    f(EU(new CU))
};
n.Hd = function () {
    f(EU(new CU))
};
n.Zk = function () {
    f(EU(new CU))
};
n.Na = function () {
    return this.Na()
};

function pX() {}
var qX;
s(pX, mX);

function rX() {
    rX = Pa;
    oX()
}
n = pX.prototype;
n.Q = function () {
    qX || (qX = R(k, mX.prototype.Q.call(k)));
    return qX
};

function vJa(a, b) {
    rX();
    oX();
    a.a = b;
    return a
}
n.Na = function () {
    sX();
    var a = this.a.Na();
    OW(a);
    var b = new tX;
    b.a = a;
    return b
};
n.vc = function (a) {
    return a !== k && this.a.vc(a)
};
n.Mg = function (a) {
    return this.a.Mg(a)
};
n.Ha = function () {
    return this.a.Ha()
};
n.ub = function () {
    return this.a.ub()
};
n.nf = function () {
    return this.a.nf()
};
n.Jd = function (a) {
    return this.a.Jd(a)
};
n.$a = function () {
    return KT(this.a)
};

function uX() {}
var vX;
s(uX, pX);
n = uX.prototype;
n.af = i;
n.Lw = i;
n.Nw = i;
n.Q = function () {
    vX || (vX = R(k, pX.prototype.Q.call(k)));
    return vX
};
n.Mj = function (a) {
    return this.f.Mj(a)
};
n.fn = function () {
    f(EU(new CU))
};
n.Yk = function () {
    f(EU(new CU))
};
n.Wm = function () {
    f(EU(new CU))
};
n.Oc = function (a) {
    return this.f.Oc(a)
};
n.nf = function () {
    return this.f.Jd($T(aU(k, k), 0, 0, this.Ha(), 0))
};
n.ab = function (a) {
    return this.f.ab(a)
};
n.eb = function () {
    return this.f.eb()
};

function wJa() {}
var wX;
s(wJa, uX);
wJa.prototype.Q = function () {
    wX || (wX = R(k, uX.prototype.Q.call(k)));
    return wX
};

function xX() {}
var yX;
n = xX.prototype;
n.Mw = i;
n.Ez = k;
n.Fz = k;
n.Q = function () {
    yX || (yX = R(k, HT()));
    return yX
};
n.Ob = function () {
    f(EU(new CU))
};
n.Hd = function () {
    f(EU(new CU))
};
n.ub = function () {
    return this.a.ub()
};
n.ue = function (a) {
    XW();
    var b;
    try {
        b = this.a.ue(a)
    } catch (c) {
        c = OV(c);
        f(c)
    }
    return b
};
n.vl = function (a) {
    return this.a.vl(a)
};
n.Qe = function (a) {
    XW();
    var b;
    try {
        b = this.a.Qe(a)
    } catch (c) {
        c = OV(c);
        f(c)
    }
    return b
};
n.ae = function () {
    if (this.Ez !== k) return this.Ez;
    zX();
    var a = new AX;
    a.a = this;
    return this.Ez = xJa(a)
};
n.rh = function () {
    if (this.Fz !== k) return this.Fz;
    return this.Fz = (zX(), xJa(this.a.rh()))
};
n.Ha = function () {
    return this.a.Ha()
};
n.ab = function (a) {
    return this.a.ab(a)
};
n.eb = function () {
    return this.a.eb()
};
n.$a = function () {
    return KT(this.a)
};

function BX() {}
var yJa, CX;
s(BX, xX);

function DX() {
    DX = Pa;
    var a = new BX;
    DX();
    a.a = (lV(), VIa);
    yJa = a
}
BX.prototype.Q = function () {
    CX || (CX = R(k, xX.prototype.Q.call(k)));
    return CX
};

function EX() {}
var FX;
s(EX, pX);
n = EX.prototype;
n.af = i;
n.Po = i;

function zX() {
    zX = Pa;
    rX()
}
n.Q = function () {
    FX || (FX = R(k, pX.prototype.Q.call(k)));
    return FX
};

function GX(a, b) {
    zX();
    vJa(a, (lV(), rV(new sV, b)));
    return a
}
function xJa(a) {
    switch (a.Ha()) {
    case 0:
        return HX(), zJa;
    case 1:
        var b = new IX;
        a = a.Na().Sa();
        AJa();
        lV();
        var c;
        c = OW(a);
        var d = new qV;
        d.Hi = ZIa(new pV, 1);
        d.dc(c);
        c = rV(new sV, d);
        GX(b, c);
        b.f = a;
        return b;
    default:
        b = new JX;
        BJa();
        GX(b, a);
        return b
    }
}
n.ab = function (a) {
    NW();
    a = a === this ? i : a && a.Po ? this.Ha() === a.Ha() && this.Mg(a) : l;
    return a
};
n.eb = function () {
    return this.a.eb()
};

function KX() {}
var zJa, LX;
s(KX, EX);

function HX() {
    HX = Pa;
    zX();
    var a = new KX;
    HX();
    zX();
    GX(a, (lV(), WIa));
    zJa = a
}
KX.prototype.Q = function () {
    LX || (LX = R(k, EX.prototype.Q.call(k)));
    return LX
};

function CJa() {}
var MX;
s(CJa, uX);
CJa.prototype.Q = function () {
    MX || (MX = R(k, uX.prototype.Q.call(k)));
    return MX
};

function NX() {}
var OX;
s(NX, xX);
NX.prototype.Q = function () {
    OX || (OX = R(k, xX.prototype.Q.call(k)));
    return OX
};

function JX() {}
var PX;
s(JX, EX);

function BJa() {
    BJa = Pa;
    zX()
}
JX.prototype.Q = function () {
    PX || (PX = R(k, EX.prototype.Q.call(k)));
    return PX
};

function DJa() {}
var QX;
s(DJa, uX);
DJa.prototype.Q = function () {
    QX || (QX = R(k, uX.prototype.Q.call(k)));
    return QX
};

function RX() {}
var SX;
s(RX, xX);
RX.prototype.f = k;
RX.prototype.g = k;
RX.prototype.Q = function () {
    SX || (SX = R(k, xX.prototype.Q.call(k)));
    return SX
};

function IX() {}
var TX;
s(IX, EX);
IX.prototype.f = k;

function AJa() {
    AJa = Pa;
    zX()
}
IX.prototype.Q = function () {
    TX || (TX = R(k, EX.prototype.Q.call(k)));
    return TX
};

function sX() {
    sX = Pa
}
function oJa() {}
var UX;
oJa.prototype.Q = function () {
    UX || (UX = R(k, HT()));
    return UX
};

function EJa() {}
var kX, VX;
n = EJa.prototype;
n.UB = i;

function jX() {
    jX = Pa;
    var a = new EJa;
    jX();
    kX = a
}
n.Q = function () {
    VX || (VX = R(k, HT()));
    return VX
};
n.Rz = function () {
    return l
};
n.RH = function (a) {
    return lX(a, a)
};
n.oe = function () {
    f(HV(new FV))
};
n.ab = function (a) {
    return a && !! a.UB && a.ub()
};
n.eb = function () {
    return 0
};
n.Ow = function () {
    return this
};
n.VB = function () {
    return l
};
n.ub = function () {
    return i
};
n.pe = function () {
    f(HV(new FV))
};
var FJa = "[Empty Range]";
n.$a = function () {
    return FJa
};

function AX() {}
var WX;
s(AX, TW);
AX.prototype.Q = function () {
    WX || (WX = R(k, TW.prototype.Q.call(k)));
    return WX
};
AX.prototype.kd = function () {
    return this.a.a.ae()
};
AX.prototype.vc = function (a) {
    if (a && a.lm && a.nb() === k) return l;
    try {
        return RW.prototype.vc.call(this, a)
    } catch (b) {
        b = OV(b);
        f(b)
    }
};
AX.prototype.Jd = function (a) {
    a = RW.prototype.Jd.call(this, a);
    this.Ha() < a.length && JU(a, this.Ha(), k);
    return a
};

function XX() {}
var YX;
XX.prototype.Q = function () {
    YX || (YX = R(k, HT()));
    return YX
};
XX.prototype.Ob = function (a, b) {
    this.a.dc((XW(), pJa(OW(a), OW(b))));
    return this
};

function ZX() {}
var $X;
s(ZX, YW);
ZX.prototype.Q = function () {
    $X || ($X = R(k, YW.prototype.Q.call(k)));
    return $X
};
ZX.prototype.Ra = function () {
    return l
};
ZX.prototype.Sa = function () {
    f(HV(new FV))
};

function aY() {}
var bY;
aY.prototype.Q = function () {
    bY || (bY = R(k, HT()));
    return bY
};
aY.prototype.Ra = function () {
    return l
};
aY.prototype.Sa = function () {
    f(HV(new FV))
};
aY.prototype.wd = function () {
    f(JIa(new vU))
};

function tX() {}
var cY;
s(tX, YW);
tX.prototype.Q = function () {
    cY || (cY = R(k, YW.prototype.Q.call(k)));
    return cY
};
tX.prototype.Ra = function () {
    return this.a.Ra()
};
tX.prototype.Sa = function () {
    return this.a.Sa()
};

function dY() {}
var eY;
dY.prototype.Q = function () {
    eY || (eY = R(k, HT()));
    return eY
};
dY.prototype.hq = function () {
    return this
};

function fY() {}
var gY;
fY.prototype.Q = function () {
    gY || (gY = R(k, HT()));
    return gY
};

function GJa(a, b) {
    a.a = hY(new iY, b);
    return a
}
fY.prototype.hq = function (a, b) {
    if (a instanceof fY && !b) return jY(), kY;
    return this
};
fY.prototype.eb = function () {
    return this.a.eb()
};

function lY(a, b, c) {
    var d = fV(new gV);
    for (b = b.Na(); b.Ra();) {
        var e = b.Sa();
        d.Zk(mY(e))
    }
    b = fV(new gV);
    for (a = a.Na(); a.Ra();) {
        e = a.Sa();
        for (var g = 0; g < d.Ha(); g++) {
            var h = e;
            e = h.hq(d.Oc(g), c);
            d.fn(g, d.Oc(g).hq(h, !c))
        }
        b.dc(e)
    }
    return lV(), mV(b)
}
function mY(a) {
    return a && a.TB ? a.JM() : (lV(), tV(a))
}
function nY() {}
var oY;
nY.prototype.Q = function () {
    oY || (oY = R(k, HT()));
    return oY
};
nY.prototype.a = function (a, b, c) {
    return lY(a, b, c)
};

function iY() {}
var pY;
n = iY.prototype;
n.TB = i;
n.Q = function () {
    pY || (pY = R(k, HT()));
    return pY
};

function hY(a, b) {
    if (sJa(b)) f(bU(new cU));
    for (var c = fV(new gV), d = b.Na(); d.Ra();) {
        var e = d.Sa();
        c.dc(e)
    }
    a.a = (lV(), mV(c));
    a: {
        for (d = b.Na(); d.Ra();) if ((e = d.Sa()) && e.TB) {
            d = i;
            break a
        }
        d = l
    }
    if (d) {
        c = fV(new gV);
        for (d = b.Na(); d.Ra();) {
            e = d.Sa();
            c.Zk(mY(e))
        }
        a.f = (lV(), mV(c))
    } else a.f = a.a;
    return a
}
n.hq = function (a, b) {
    return hY(new iY, lY(this.a, (lV(), tV(a)), b))
};
n.JM = function () {
    return this.f
};
n.eb = function () {
    return 740 + this.a.eb()
};
n.ab = function (a) {
    return a instanceof iY && a.a.ab(this.a)
};
var HJa = "Multi";
n.$a = function () {
    return HJa + this.a
};

function qY() {}
var rY;
n = qY.prototype;
n.TB = i;

function jY() {
    jY = Pa;
    var a = new qY;
    jY();
    kY = a
}
n.Q = function () {
    rY || (rY = R(k, HT()));
    return rY
};
n.hq = function () {
    return this
};
n.JM = function () {
    return lV(), kV
};
var IJa = "Null{}";
n.$a = function () {
    return IJa
};

function kY() {
    jY();
    return kY
}
function sY() {}
var tY;
s(sY, fY);
sY.prototype.Q = function () {
    tY || (tY = R(k, fY.prototype.Q.call(k)));
    return tY
};
sY.prototype.eb = function () {
    return 629 * this.f + this.a.eb()
};
sY.prototype.ab = function (a) {
    if (!(a instanceof sY)) return l;
    return this.f === a.f && this.a.ab(a.a)
};
var JJa = "Revert[";
sY.prototype.$a = function () {
    return JJa + this.f + hz + this.a + Mg
};

function uY() {}
var vY;
s(uY, fY);
uY.prototype.Q = function () {
    vY || (vY = R(k, fY.prototype.Q.call(k)));
    return vY
};
uY.prototype.ab = function (a) {
    if (!(a instanceof uY)) return l;
    return this.a.ab(a.a)
};
var KJa = "Replace[";
uY.prototype.$a = function () {
    return KJa + this.a + Mg
};

function wY() {
    wY = Pa
}
function xY(a, b, c) {
    return a >= b ? a + c : a
}
function LJa(a, b, c) {
    a = LV(aU(k, k), 0, -1, [xY(a.pe().Jc(), b, c), xY(a.oe().Jc(), b, c)]);
    if (a.length === 0) a = (jX(), kX);
    else {
        b = a[0];
        c = a[0];
        for (var d = 0, e = a.length; d < e; ++d) {
            var g = a[d];
            if (b > g) b = g;
            if (c < g) c = g
        }
        a = lX(cW(b), cW(c))
    }
    return a
}
function yY(a, b) {
    var c = a - 1,
        d = b.oe().Jc();
    c = (c < d ? c : d) - b.pe().Jc() + 1;
    return a - (0 > c ? 0 : c)
}
function MJa(a, b) {
    var c = yY(a.pe().Jc(), b),
        d = b.Rz(a.oe());
    d = yY(a.oe().Jc(), b) - (d ? 1 : 0);
    return lX(cW(c), cW(d))
};

function zY() {}
var AY;
n = zY.prototype;
n.Oo = i;
n.Mf = k;
n.Q = function () {
    AY || (AY = R(k, HT()));
    return AY
};

function BY(a) {
    a.Mf = oV(new pV);
    return a
}
n.rv = function () {
    var a = new zY;
    BY(a);
    for (var b = this.Mf.rh().Na(); b.Ra();) {
        var c = b.Sa();
        a.mj(c, this.jo(c))
    }
    return a
};
n.ub = function () {
    return this.Mf.ub()
};
n.jo = function (a) {
    return this.Mf.Qe(a)
};
n.zJ = function (a) {
    return this.Mf.ue(a)
};
n.mj = function (a, b) {
    this.Mf.Ob(a, b && b.Oo ? b.rv() : b);
    return this
};
var NJa = "It should not be possible to transform a non-annotation against an annotation. Validation checks in the property setters should have prevented this.";
n.Ky = function (a, b) {
    for (var c = BY(new zY), d = this.Mf.ae().Na(); d.Ra();) {
        var e = d.Sa();
        if (a.zJ(e.nb())) if (e.hb() && e.hb().Oo) {
            var g = a.jo(e.nb());
            if (g === k) b && c.mj(e.nb(), e.hb());
            else if (e.hb() === k) b && c.mj(e.nb(), k);
            else {
                dX(g && !! g.Oo, NJa);
                g = e.hb().Ky(g, b);
                g !== k && !g.ub() && c.mj(e.nb(), g)
            }
        } else b && c.mj(e.nb(), e.hb());
        else c.mj(e.nb(), e.hb())
    }
    return c
};
var OJa = "Annotation<";
n.$a = function () {
    return OJa + KT(this.Mf) + Ub
};
n.ab = function (a) {
    if (this === a) return i;
    if (!(a && a.Oo)) return l;
    for (var b = this.Mf.rh().Na(), c = a.Mf.rh().Na(); b.Ra() && c.Ra();) {
        var d = b.Sa();
        c.Sa();
        if (!MW(this.jo(d), a.jo(d))) return l
    }
    return b.Ra() === c.Ra()
};
n.eb = function () {
    return aX(LV(aU(k, k), 0, 0, [this.Mf]))
};

function CY() {}
var DY;
s(CY, zY);
n = CY.prototype;
n.Oo = i;
n.LJ = i;
n.Tc = k;
n.im = k;
n.Kk = k;
n.Q = function () {
    DY || (DY = R(k, zY.prototype.Q.call(k)));
    return DY
};
var PJa = "The number of elements inserted or referenced: ",
    QJa = " should be 1",
    RJa = "Delete operation should not specify any values";

function EY(a, b, c, d) {
    BY(a);
    a.Tc = OW(b);
    if (b !== (FY(), GY)) {
        OW(c);
        a.im = c
    }
    a.Kk = fV(new gV);
    if (b === (FY(), HY) || b === (FY(), IY)) dX(d.Ha() === 1, PJa + d.Ha() + QJa);
    else if (b === (FY(), JY)) dX(d.ub(), RJa);
    for (b = d.Na(); b.Ra();) {
        c = b.Sa();
        a.Kk.dc(c && c.Oo ? c.rv() : c)
    }
    return a
}
var SJa = "Query<";
n.$a = function () {
    return this.im !== k ? SJa + this.Tc + Ht + this.im + Sf + this.Kk + Ub : SJa + this.Tc + Ht + this.Kk + Ub
};
n.rv = function () {
    var a = new CY;
    EY(a, this.Tc, this.im, this.Kk);
    return a
};

function KY(a) {
    return a.im.Jc()
}

function LY(a) {
    return lV(), mV(a.Kk)
}
var MY = "Unknown query operation: ";
n.Ky = function (a, b) {
    if (!(a && a.LJ)) f(IIa(new sU));
    switch (a.Tc.qp) {
    case 3:
        var c;
        a: switch (this.Tc.qp) {
        case 3:
            c = b ? this : a;
            break a;
        case 0:
        case 1:
        case 2:
            c = k;
            break a;
        default:
            f(uU(new sU, MY + a.Tc))
        }
        return c;
    case 0:
        var d;a: switch (this.Tc.qp) {
        case 3:
            d = this;
            break a;
        case 0:
            if (KY(a) === KY(this) && b) {
                d = this;
                break a
            }
        case 1:
        case 2:
            d = EY(new CY, this.Tc, cW((wY(), xY(KY(this), KY(a), 1))), LY(this));
            break a;
        default:
            f(uU(new sU, MY + a.Tc))
        }
        return d;
    case 1:
        return TJa(this, a, b);
    case 2:
        return this;
    default:
        f(uU(new sU, MY + a.Tc))
    }
};

function TJa(a, b, c) {
    switch (a.Tc.qp) {
    case 3:
        return a;
    case 0:
        return EY(new CY, a.Tc, cW((wY(), yY(KY(a), lX(cW(KY(b)), cW(KY(b)))))), LY(a));
    case 1:
        if (KY(b) === KY(a) && c) return a;
    case 2:
        if (KY(b) === KY(a)) return k;
        return EY(new CY, a.Tc, cW((wY(), xY(KY(a), KY(b), -1))), LY(a));
    default:
        f(uU(new sU, MY + b.Tc))
    }
}
n.ub = function () {
    return l
};
n.jo = function () {
    f(EU(new CU))
};
n.zJ = function () {
    return l
};
n.mj = function () {
    f(EU(new CU))
};
n.ab = function (a) {
    return a && a.LJ ? zY.prototype.ab.call(this, a) && MW(this.Tc, a.Tc) && (this.Tc === (FY(), GY) || MW(cW(KY(this)), cW(KY(a)))) && MW(LY(this), LY(a)) : l
};
n.eb = function () {
    return zY.prototype.eb.call(this) * 31 + aX(LV(aU(k, k), 0, 0, [this.Tc, this.im, this.Kk]))
};
var NY, UJa = "expected one element but was: <",
    VJa = ", ...";

function WJa() {
    WJa = Pa;
    var a = new XX;
    a.a = fV(new gV);
    a: {
        a = a.Ob((RV(), SV(61439)), (RV(), SV(123))).Ob((RV(), SV(61438)), (RV(), SV(125))).Ob((RV(), SV(26)), (RV(), SV(91))).Ob((RV(), SV(30)), (RV(), SV(93))).Ob((RV(), SV(25)), (RV(), SV(40))).Ob((RV(), SV(27)), (RV(), SV(41))).Ob((RV(), SV(29)), (RV(), SV(44))).Ob((RV(), SV(31)), (RV(), SV(33))).Ob((RV(), SV(35)), (RV(), SV(38))).Ob((RV(), SV(45)), (RV(), SV(47))).Ob((RV(), SV(42)), (RV(), SV(94))).Ob((RV(), SV(11)), (RV(), SV(37))).Ob((RV(), SV(12)), (RV(), SV(61))).Ob((RV(), SV(10)), (RV(), SV(42))).Ob((RV(), SV(3)), (RV(), SV(124))).Ob((RV(), SV(9)), (RV(), SV(45))).Ob((RV(), SV(28)), (RV(), SV(36))).Ob((RV(), SV(17)), (RV(), SV(62))).Ob((RV(), SV(18)), (RV(), SV(35))).Ob((RV(), SV(16)), (RV(), SV(60))).a;
        switch (a.Ha()) {
        case 0:
            NY = (DX(), yJa);
            break a;
        case 1:
            sX();
            var b;
            a = a.Na();
            var c = a.Sa();
            if (a.Ra()) {
                var d = new UT;
                d.a = new N;
                XT(d, UJa + c);
                for (c = 0; c < 4 && a.Ra(); c++) XT(d, hz + a.Sa());
                a.Ra() && XT(d, VJa);
                XT(d, Ub);
                f(uU(new sU, d.$a()))
            } else b = c;
            d = b;
            b = new RX;
            a = d.nb();
            d = d.hb();
            lV();
            c = OW(a);
            var e = OW(d),
                g = ZIa(new pV, 1);
            g.Ob(c, e);
            c = nV(g);
            b.a = (lV(), nV(c));
            b.f = a;
            b.g = d;
            NY = b;
            break a;
        default:
            b = a.Jd($T(aU(k, k), 0, 0, a.Ha(), 0));
            a = new NX;
            XW();
            d = new yV;
            oV(d);
            c = new CV;
            $Ia(c, k, k, d);
            d.a = c;
            d.f = oV(new pV);
            d.a.Ri = d.a;
            d.a.Hf = d.a;
            c = 0;
            for (e = b.length; c < e; ++c) {
                g = b[c];
                var h = OW(g.nb());
                if (d.Ob(h, OW(g.hb())) !== k) f(uU(new sU, "duplicate key: " + h))
            }
            a.a = (lV(), nV(d));
            NY = a;
            break a
        }
    }
}
function OY() {}
var XJa, YJa, ZJa, $Ja, aKa, bKa, cKa, PY;
s(OY, WV);
var dKa = "BOOKMARK",
    eKa = "COMMENT",
    fKa = "FOOTNOTE",
    gKa = "HEADER_FOOTER",
    hKa = "INLINE",
    iKa = "LIST",
    jKa = "POSITIONED";

function QY() {
    QY = Pa;
    XJa = RY(new OY, dKa, 0, jt);
    YJa = RY(new OY, eKa, 1, Xg);
    ZJa = RY(new OY, fKa, 2, ah);
    $Ja = RY(new OY, gKa, 3, rt);
    aKa = RY(new OY, hKa, 4, Lf);
    bKa = RY(new OY, iKa, 5, dh);
    cKa = RY(new OY, jKa, 6, ut)
}
OY.prototype.Q = function () {
    PY || (PY = R(k, WV.prototype.Q.call(k)));
    return PY
};

function RY(a, b, c, d) {
    QY();
    YV(a, b, c);
    a.type = d;
    return a
}
OY.prototype.$a = function () {
    return this.type
};

function SY() {}
var GY, HY, IY, JY, TY, UY;
s(SY, WV);
var kKa = "INSERT",
    lKa = "DELETE",
    mKa = "REFERENCE",
    nKa = "SET";

function FY() {
    FY = Pa;
    HY = VY(new SY, kKa, 0, Zf);
    JY = VY(new SY, lKa, 1, Yf);
    IY = VY(new SY, mKa, 2, $f);
    GY = VY(new SY, nKa, 3, ag);
    TY = {
        L4: HY,
        K4: JY,
        M4: IY,
        N4: GY
    }
}
SY.prototype.Q = function () {
    UY || (UY = R(k, WV.prototype.Q.call(k)));
    return UY
};

function VY(a, b, c, d) {
    FY();
    YV(a, b, c);
    a.a = d;
    return a
}
SY.prototype.$a = function () {
    return this.a
};

function WY() {}
var oKa, pKa, qKa, rKa, sKa, tKa, uKa, vKa, wKa, xKa, yKa, zKa, AKa, BKa, CKa, XY;
s(WY, WV);
var DKa = "AUTOGENERATED_REGION",
    EKa = "CELL",
    FKa = "DOCUMENT",
    GKa = "EQUATION",
    HKa = "EQUATION_FUNCTION",
    IKa = "HORIZONTAL_RULE",
    JKa = "PARAGRAPH",
    KKa = "ROW",
    LKa = "SPELLCHECK",
    MKa = "TEXT";

function YY() {
    YY = Pa;
    oKa = ZY(new WY, DKa, 0, Tg, l, LV(aU(k, k), 0, -1, [61439]));
    pKa = ZY(new WY, EKa, 1, Ug, l, LV(aU(k, k), 0, -1, [28]));
    qKa = ZY(new WY, eKa, 2, Xg, l, LV(aU(k, k), 0, -1, []));
    rKa = ZY(new WY, FKa, 3, Yg, l, LV(aU(k, k), 0, -1, [3]));
    sKa = ZY(new WY, GKa, 4, Zg, l, LV(aU(k, k), 0, -1, [26]));
    tKa = ZY(new WY, HKa, 5, $g, l, LV(aU(k, k), 0, -1, [25, 31]));
    uKa = ZY(new WY, fKa, 6, ah, l, LV(aU(k, k), 0, -1, [35]));
    vKa = ZY(new WY, IKa, 7, bh, l, LV(aU(k, k), 0, -1, [45]));
    wKa = ZY(new WY, Bd, 8, ch, l, LV(aU(k, k), 0, -1, []));
    xKa = ZY(new WY, iKa, 9, dh, l, LV(aU(k, k), 0, -1, [10]));
    yKa =
    ZY(new WY, JKa, 10, eh, l, LV(aU(k, k), 0, -1, [10]));
    zKa = ZY(new WY, KKa, 11, fh, l, LV(aU(k, k), 0, -1, [18]));
    AKa = ZY(new WY, LKa, 12, gh, i, LV(aU(k, k), 0, -1, []));
    BKa = ZY(new WY, VC, 13, hh, l, LV(aU(k, k), 0, -1, [16]));
    CKa = ZY(new WY, MKa, 14, ih, l, LV(aU(k, k), 0, -1, []))
}
WY.prototype.Q = function () {
    XY || (XY = R(k, WV.prototype.Q.call(k)));
    return XY
};

function ZY(a, b, c, d, e, g) {
    YY();
    YV(a, b, c);
    a.type = d;
    a.dr = e;
    a.a = g;
    return a
}
WY.prototype.$a = function () {
    return this.type
};

function $Y(a) {
    return a.a !== k && a.a.length > 0
}
WY.prototype.dr = function () {
    return this.dr
};

function aZ() {}
var bZ;
s(aZ, dY);
n = aZ.prototype;
n.Q = function () {
    bZ || (bZ = R(k, dY.prototype.Q.call(k)));
    return bZ
};

function cZ(a, b) {
    a.u = b;
    return a
}
n.hq = function (a, b) {
    if (a instanceof qY) return this;
    if (a instanceof fY) return jY(), kY;
    if (a instanceof iY) {
        var c = a.a;
        c = lY((lV(), tV(this)), c, b);
        if (c.ub()) f(xU(new vU, MT("Empty result when transforming a mutation against: " + a)));
        return c.Ha() > 1 ? hY(new iY, c) : c.Oc(0)
    }
    if (!(a instanceof aZ)) f(xU(new vU, MT("Mutation cannot be transformed against: " + a)));
    return a.vj(this, b)
};
n.vj = function () {};
n.Bk = function () {};
n.Ck = function () {};
n.Dk = function () {};
n.Ek = function () {};
n.Fk = function () {};
n.Gk = function () {};
n.Hk = function () {};

function dZ() {}
var eZ;
s(dZ, aZ);
n = dZ.prototype;
n.Q = function () {
    eZ || (eZ = R(k, aZ.prototype.Q.call(k)));
    return eZ
};
n.vj = function (a, b) {
    return a.Bk(this, b)
};
n.Bk = function () {
    return this
};
n.Ck = function () {
    return this
};
n.Dk = function (a) {
    if (LT(a.a, this.a)) f(FU(new CU, "There should be no way for a delete entity mutation to be transformed against another entity mutation with the same id."));
    return this
};
n.Ek = function () {
    return this
};
n.Fk = function () {
    return this
};
n.Gk = function () {
    return this
};
n.Hk = function () {
    return this
};
n.ab = function (a) {
    if (this === a) return i;
    if (!(a instanceof dZ)) return l;
    return MW(this.g, a.g) && MW(this.a, a.a) && MW(this.f, a.f)
};
n.eb = function () {
    return aX(LV(aU(k, k), 0, 0, [this.g, this.a, this.f]))
};
var NKa = "AddEntityMutation: Type(",
    OKa = ") Id(",
    PKa = ") PropertyMap(";
n.$a = function () {
    return NKa + this.g + OKa + this.a + PKa + this.f + Of
};

function fZ() {}
var gZ;
s(fZ, aZ);
n = fZ.prototype;
n.Q = function () {
    gZ || (gZ = R(k, aZ.prototype.Q.call(k)));
    return gZ
};
var QKa = "negative start index (%s) for style type (%s)",
    RKa = "negative end index (%s) for style type (%s)",
    SKa = "end index (%s) < start index (%s) for style type (%s)";

function TKa(a, b, c, d, e, g) {
    cZ(a, b);
    a.a = OW(c);
    a.f = d;
    a.g = e;
    a.n = g;
    eX(a.f >= 0, QKa, LV(aU(k, k), 0, 0, [cW(d), c]));
    eX(a.g >= 0, RKa, LV(aU(k, k), 0, 0, [cW(e), c]));
    eX(a.f <= a.g, SKa, LV(aU(k, k), 0, 0, [cW(a.g), cW(a.f), c]));
    return a
}
function hZ(a) {
    return lX(cW(a.f), cW(a.g))
}
n.vj = function (a, b) {
    return a.Ck(this, b)
};
n.Bk = function () {
    return this
};
n.Ck = function (a, b) {
    if (!a.a.ab(this.a)) return this;
    if (!hZ(a).VB(hZ(this))) return this;
    if (this.a.dr) return this;
    var c = this.n.Ky(a.n, b);
    if (GT(c, this.n)) return this;
    var d = fV(new gV),
        e = hZ(this).Ow(hZ(a));
    wY();
    var g = hZ(this),
        h = hZ(a),
        j = uJa(g, LV(aU(k, k), 0, 0, [lX(g.pe(), cW(h.pe().Jc() - 1))]));
    h = uJa(g, LV(aU(k, k), 0, 0, [lX(cW(h.oe().Jc() + 1), g.oe())]));
    g = new bX;
    g.a = j;
    g.f = h;
    if (!g.a.ub()) {
        j = iZ(this, this.a, g.a.pe().Jc(), g.a.oe().Jc(), this.n);
        d.dc(j)
    }
    if (!c.ub()) {
        j = iZ(this, this.a, e.pe().Jc(), e.oe().Jc(), c);
        d.dc(j)
    }
    if (!g.f.ub()) {
        j =
        iZ(this, this.a, g.f.pe().Jc(), g.f.oe().Jc(), this.n);
        d.dc(j)
    }
    return d.Ha() === 0 ? (jY(), kY) : d.Ha() === 1 ? d.Oc(0) : hY(new iY, d)
};
n.Dk = function () {
    return this
};
n.Ek = function (a) {
    if (this.a.dr && !$Y(this.a)) {
        var b = lX(cW(this.f - 1 > 0 ? this.f - 1 : 0), cW(this.g + 1)),
            c = jZ(a);
        if (!b.Ow(c).ub()) return jY(), kY
    }
    return kZ(this, (wY(), MJa(hZ(this), jZ(a))))
};
n.Fk = function (a) {
    if (this.a.dr && !$Y(this.a)) if (lX(cW(this.f > 0 ? this.f : 0), cW(this.g + 1)).Rz(cW(a.a))) return jY(), kY;
    if ($Y(this.a)) {
        a = (wY(), xY(hZ(this).pe().Jc(), a.a, a.f.length));
        return kZ(this, lX(cW(a), cW(a)))
    } else return a.a === this.g + 1 ? kZ(this, hZ(this).RH(cW(a.a + a.f.length - 1))) : kZ(this, (wY(), LJa(hZ(this), a.a, a.f.length)))
};
n.Gk = function () {
    return this
};
n.Hk = function () {
    return this
};

function iZ(a, b, c, d, e) {
    a = new fZ;
    TKa(a, (lZ(), mZ), b, c, d, e);
    return a
}

function kZ(a, b) {
    if (b.ub()) return jY(), kY;
    if (b.ab(hZ(a))) return a;
    return iZ(a, a.a, b.pe().Jc(), b.oe().Jc(), a.n)
}
n.ab = function (a) {
    if (this === a) return i;
    if (!(a instanceof fZ)) return l;
    return MW(this.a, a.a) && MW(cW(this.f), cW(a.f)) && MW(cW(this.g), cW(a.g)) && MW(this.n, a.n)
};
n.eb = function () {
    return aX(LV(aU(k, k), 0, 0, [this.u, this.a, cW(this.f), cW(this.g), this.n]))
};
var UKa = "ApplyStyleMutation: Type(",
    VKa = ") StartIndex(",
    WKa = ") EndIndex(",
    XKa = ") StyleMap(";
n.$a = function () {
    return UKa + this.a + VKa + this.f + WKa + this.g + XKa + this.n + Of
};

function nZ() {}
var oZ;
s(nZ, aZ);
n = nZ.prototype;
n.Q = function () {
    oZ || (oZ = R(k, aZ.prototype.Q.call(k)));
    return oZ
};
n.vj = function (a, b) {
    return a.Dk(this, b)
};
n.Bk = function () {
    return this
};
n.Ck = function () {
    return this
};
n.Dk = function () {
    return this
};
n.Ek = function () {
    return this
};
n.Fk = function () {
    return this
};
n.Gk = function () {
    return this
};
n.Hk = function () {
    return this
};
n.ab = function (a) {
    if (this === a) return i;
    if (!(a instanceof nZ)) return l;
    return MW(this.a, a.a)
};
n.eb = function () {
    return JT(this.a)
};
var YKa = "DeleteEntityMutation: Id(";
n.$a = function () {
    return YKa + this.a + Of
};

function pZ() {}
var qZ;
s(pZ, aZ);
n = pZ.prototype;
n.Q = function () {
    qZ || (qZ = R(k, aZ.prototype.Q.call(k)));
    return qZ
};
var ZKa = "negative start index (%s) ",
    $Ka = "negative end index (%s) ",
    aLa = "end index (%s) < start index (%s) ";

function bLa(a, b, c) {
    cZ(a, (lZ(), cLa));
    a.a = b;
    a.f = c;
    eX(a.a >= 0, ZKa, LV(aU(k, k), 0, 0, [cW(b)]));
    eX(a.f >= 0, $Ka, LV(aU(k, k), 0, 0, [cW(c)]));
    eX(a.a <= a.f, aLa, LV(aU(k, k), 0, 0, [cW(a.f), cW(a.a)]));
    return a
}
function jZ(a) {
    return lX(cW(a.a), cW(a.f))
}
n.vj = function (a, b) {
    return a.Ek(this, b)
};
n.Bk = function () {
    return this
};
n.Ck = function () {
    return this
};
n.Dk = function () {
    return this
};
n.Ek = function (a) {
    return dLa(this, (wY(), MJa(jZ(this), jZ(a))))
};
n.Fk = function (a) {
    return dLa(this, (wY(), LJa(jZ(this), a.a, a.f.length)))
};
n.Gk = function () {
    return this
};
n.Hk = function () {
    return this
};

function dLa(a, b) {
    if (b.ub()) return jY(), kY;
    return b.ab(jZ(a)) ? a : bLa(new pZ, b.pe().Jc(), b.oe().Jc())
}
n.ab = function (a) {
    if (this === a) return i;
    if (!(a instanceof pZ)) return l;
    return this.a === a.a && this.f === a.f
};
n.eb = function () {
    return aX(LV(aU(k, k), 0, 0, [cW(this.a), cW(this.f)]))
};
var eLa = "DeleteSpacersMutation: ",
    fLa = " to ";
n.$a = function () {
    return eLa + this.a + fLa + this.f
};

function rZ() {}
var sZ;
s(rZ, aZ);
n = rZ.prototype;
n.rz = k;
n.Q = function () {
    sZ || (sZ = R(k, aZ.prototype.Q.call(k)));
    return sZ
};
var gLa = "negative insertBefore index (%s) ";

function tZ(a, b, c) {
    cZ(a, (lZ(), hLa));
    a.a = b;
    a.f = OW(c);
    eX(a.a >= 0, gLa, LV(aU(k, k), 0, 0, [cW(b)]));
    return a
}
n.vj = function (a, b) {
    return a.Fk(this, b)
};
n.Bk = function () {
    return this
};
n.Ck = function () {
    return this
};
n.Dk = function () {
    return this
};
n.Ek = function (a) {
    if (a.a < this.a && a.f >= this.a) return jY(), kY;
    a = (wY(), xY(this.a, a.a + 1, -(a.f - a.a + 1)));
    return tZ(new rZ, a, this.f)
};
n.Fk = function (a, b) {
    if (a.a === this.a && b) return this;
    var c = (wY(), xY(this.a, a.a, a.f.length));
    return tZ(new rZ, c, this.f)
};
n.Gk = function () {
    return this
};
n.Hk = function () {
    return this
};
n.ab = function (a) {
    if (this === a) return i;
    if (!(a instanceof rZ)) return l;
    return MW(cW(this.a), cW(a.a)) && MW(this.f, a.f)
};
n.eb = function () {
    return aX(LV(aU(k, k), 0, 0, [cW(this.a), this.f]))
};
var iLa = "[^\\.\\?, \uefff\ueffe\u001d\u001e\u001b\u0019\u001f\u001a#-*\u000b\u000c\n\u0003\t\u001c\u0011\u0012\u0010]",
    jLa = "InsertSpacersMutation @";
n.$a = function () {
    if (this.rz === k) {
        WJa();
        var a = this.f,
            b = Dj;
        b = b;
        for (var c = 0; 0 <= (c = b.indexOf(Ij, c));) b = b.charCodeAt(c + 1) == qt ? b.substring(0, c) + qt + b.substring(++c) : b.substring(0, c) + b.substring(++c);b = b;b = a.replace(RegExp(iLa, ec), b);a = [];c = b.length;
        for (var d = 0, e = 0; e < c; ++e) a[d++] = b.charCodeAt(e);
        for (b = 0; b < a.length; b++) if (NY.ue((RV(), SV(a[b])))) {
            c = a;
            d = b;
            e = NY.Qe((RV(), SV(a[b])));
            c[d] = e.Jk
        }
        this.rz = MT(a)
    }
    return jLa + this.a + hz + this.rz
};

function uZ() {}
var kLa, mZ, lLa, cLa, hLa, mLa, nLa, vZ;
s(uZ, WV);
var oLa = "INSERT_SPACERS",
    pLa = "DELETE_SPACERS",
    qLa = "ADD_ENTITY",
    rLa = "UPDATE_ENTITY",
    sLa = "DELETE_ENTITY",
    tLa = "TETHER_ENTITY",
    uLa = "APPLY_STYLE",
    vLa = "MOVE_CURSOR",
    wLa = "mc";

function lZ() {
    lZ = Pa;
    hLa = wZ(new uZ, oLa, 0, xD);
    cLa = wZ(new uZ, pLa, 1, wD);
    kLa = wZ(new uZ, qLa, 2, yD);
    mLa = wZ(new uZ, rLa, 3, zD);
    lLa = wZ(new uZ, sLa, 4, AD);
    nLa = wZ(new uZ, tLa, 5, DD);
    mZ = wZ(new uZ, uLa, 6, ED);
    wZ(new uZ, vLa, 7, wLa)
}
uZ.prototype.Q = function () {
    vZ || (vZ = R(k, WV.prototype.Q.call(k)));
    return vZ
};

function wZ(a, b, c, d) {
    lZ();
    YV(a, b, c);
    a.type = d;
    return a
}
uZ.prototype.$a = function () {
    return this.type
};

function xZ() {}
var yZ;
s(xZ, aZ);
n = xZ.prototype;
n.Q = function () {
    yZ || (yZ = R(k, aZ.prototype.Q.call(k)));
    return yZ
};

function zZ(a, b, c) {
    cZ(a, (lZ(), nLa));
    a.f = OW(b);
    a.a = c;
    return a
}
n.vj = function (a, b) {
    return a.Gk(this, b)
};
n.Bk = function () {
    return this
};
n.Ck = function () {
    return this
};
n.Dk = function () {
    return this
};
n.Ek = function (a) {
    if (a.a <= this.a && a.f >= this.a) return jY(), kY;
    return this.a >= a.a ? zZ(new xZ, this.f, this.a + -(a.f - a.a + 1)) : this
};
n.Fk = function (a) {
    return this.a >= a.a ? zZ(new xZ, this.f, this.a + a.f.length) : this
};
n.Gk = function (a, b) {
    return LT(a.f, this.f) && !b ? a : this
};
n.Hk = function () {
    return this
};
n.ab = function (a) {
    if (this === a) return i;
    if (!(a instanceof xZ)) return l;
    return MW(this.f, a.f) && MW(cW(this.a), cW(a.a))
};
n.eb = function () {
    return aX(LV(aU(k, k), 0, 0, [this.f, cW(this.a)]))
};
var xLa = "TetherEntityMutation: Id(",
    yLa = ") SpacerIndex(";
n.$a = function () {
    return xLa + this.f + yLa + this.a + Of
};

function AZ() {}
var BZ;
s(AZ, nY);
AZ.prototype.Q = function () {
    BZ || (BZ = R(k, nY.prototype.Q.call(k)));
    return BZ
};
AZ.prototype.a = function (a, b, c) {
    b = nY.prototype.a.call(this, a, b, c);
    a = fV(new gV);
    for (b = b.Na(); b.Ra();) {
        c = b.Sa();
        for (c = mY(c).Na(); c.Ra();) {
            var d = c.Sa();
            a.dc(d)
        }
    }
    return lV(), mV(a)
};

function CZ() {}
var DZ;
s(CZ, aZ);
n = CZ.prototype;
n.Q = function () {
    DZ || (DZ = R(k, aZ.prototype.Q.call(k)));
    return DZ
};

function zLa(a, b, c) {
    cZ(a, (lZ(), mLa));
    a.a = OW(b);
    a.f = OW(c);
    return a
}
n.vj = function (a, b) {
    return a.Hk(this, b)
};
n.Bk = function () {
    return this
};
n.Ck = function () {
    return this
};
n.Dk = function () {
    return this
};
n.Ek = function () {
    return this
};
n.Fk = function () {
    return this
};
n.Gk = function () {
    return this
};
n.Hk = function (a, b) {
    if (b || !LT(a.a, this.a)) return this;
    var c = this.f.Ky(a.f, b);
    if (c === k || c.ub()) return jY(), kY;
    return zLa(new CZ, this.a, c)
};
n.ab = function (a) {
    if (this === a) return i;
    if (!(a instanceof CZ)) return l;
    return MW(this.a, a.a) && MW(this.f, a.f)
};
n.eb = function () {
    return aX(LV(aU(k, k), 0, 0, [this.a, this.f]))
};
var ALa = "UpdateEntityMutation: Id(";
n.$a = function () {
    return ALa + this.a + PKa + this.f + Of
};

function EZ(a, b, c) {
    if (b.length == 0 || c.length == 0) return {
        Mn: b,
        gE: c
    };
    b = FZ(b);
    var d = FZ(c);
    c = a.a(b, d, i);
    a = a.a(d, b, l);
    b = GZ(c);
    a = GZ(a);
    return {
        Mn: b,
        gE: a
    }
}

function BLa(a) {
    if (a instanceof sY) {
        a = a.a.a;
        return new LG(GZ(a))
    }
    if (a instanceof uY) {
        a = a.a.a;
        return new KG(GZ(a))
    }
    switch (a.u.$a()) {
    case xD:
        var b = a.a;
        return new GG(b, a.f);
    case wD:
        var c = a.a;
        b = a.f;
        return new FG(c, b);
    case yD:
        b = HZ(a.f);
        c = a.a;
        a = a.g.$a().toLowerCase();
        return new xG(a, c, b);
    case zD:
        b = HZ(a.f);
        c = a.a;
        return new PG(c, b);
    case AD:
        c = a.a;
        return new DG(c);
    case DD:
        c = a.f;
        b = a.a;
        return new NG(c, b);
    case ED:
        var d = HZ(a.n);
        c = a.f;
        b = a.g;
        a = a.a.$a().toLowerCase();
        return new AG(a, c, b, d);
    default:
        f(Error("Unknown bach mutation type " + a.u))
    }
}
function IZ(a) {
    if (va in a) {
        var b = a.op,
            c = a.opIndex,
            d = a.opValue;
        FY();
        a = b.toUpperCase();
        var e;
        a: {
            for (e in TY) {
                b = TY[e];
                if (b.jL == a) {
                    e = b;
                    break a
                }
            }
            e = k
        }
        if (e === k) f(uU(new sU, a));e = e;c = !Za(c) ? k : fW(new aW, c);
        if (d == k) a = (lV(), kV);
        else if ($a(d)) {
            a = fV(new gV);
            for (b = 0; b < d.length; b++) a.dc(JZ(d[b]))
        } else a = (lV(), tV(JZ(d)));
        return EY(new CY, e, c, a)
    }
    e = BY(new zY);
    for (c in a) {
        d = JZ(a[c]);
        e.mj(c, d)
    }
    return e
}
function JZ(a) {
    if (cb(a) || eb(a) || fb(a)) return a;
    if (!Za(a)) return k;
    return IZ(a)
}

function KZ(a) {
    return a instanceof CY || a instanceof zY ? HZ(a) : a instanceof String || a instanceof Boolean || a instanceof Number ? a.valueOf() : a
}

function HZ(a) {
    if (a instanceof CY) {
        var b = a.Tc.$a().toLowerCase(),
            c = a.im !== k ? KY(a) : undefined,
            d;
        if (b == Zf || b == $f) {
            var e = a.Kk.Na();
            a = e.Sa();
            if (e.Ra()) f(uU(new sU, "Multiple values available"));
            d = KZ(a)
        } else if (b == ag) {
            d = [];
            a = LY(a);
            for (var g = 0; g < a.Ha(); g++) {
                e = a.Oc(g);
                d[g] = KZ(e)
            }
        }
        g = {};g.op = b;
        if (Za(c)) g.opIndex = c;
        if (Za(d)) g.opValue = d;
        return g
    }
    g = {};
    for (b = a.Mf.rh().Na(); b.Ra();) {
        c = b.Sa();
        e = a.jo(c);
        g[c] = KZ(e)
    }
    return g
}

function GZ(a) {
    var b = [];
    if (a) for (var c = 0; c < a.Ha(); c++) {
        var d = BLa(a.Oc(c));
        b.push(d)
    }
    return b
}
function FZ(a) {
    for (var b = fV(new gV), c = 0; c < a.length; c++) {
        var d = CLa(a[c]);
        b.dc(d)
    }
    return b
}
var DLa = "The string specified for entity type should not be null",
    ELa = "Invalid enum string specified: ",
    FLa = "The string specified for style type should not be null";

function CLa(a) {
    switch (a.O()) {
    case xD:
        var b = a.Y(),
            c = a.a;
        return tZ(new rZ, c, b);
    case wD:
        c = a.qc();
        b = a.Se();
        return bLa(new pZ, c, b);
    case yD:
        var d = a.Wg;
        b = a.ma();
        var e = a.n;
        QY();
        a: {
            rJa(d, DLa);
            a = LV(aU(k, k), 0, 0, [XJa, YJa, ZJa, $Ja, aKa, bKa, cKa]);
            for (var g = 0, h = a.length; g < h; ++g) {
                var j = a[g];
                if (LT(j.type, d)) {
                    c = j;
                    break a
                }
            }
            f(uU(new sU, ELa + d))
        }
        c = c;d = IZ(e);e = new dZ;b = b;d = d;cZ(e, (lZ(), kLa));e.g = c;e.a = OW(b);e.f = d.rv();
        return e;
    case zD:
        b = a.ma();e = a.n;d = IZ(e);
        return zLa(new CZ, b, d);
    case AD:
        b = a.ma();c = new nZ;b = b;cZ(c, (lZ(), lLa));c.a = OW(b);
        return c;
    case DD:
        b = a.ma();c = a.n;
        return zZ(new xZ, b, c);
    case ED:
        c = a.qc();b = a.Se();d = a.K;a = a.f;YY();a: {
            rJa(a, FLa);
            g = LV(aU(k, k), 0, 0, [oKa, pKa, qKa, rKa, sKa, tKa, uKa, vKa, wKa, xKa, yKa, zKa, AKa, BKa, CKa]);
            h = 0;
            for (j = g.length; h < j; ++h) {
                var m = g[h];
                if (LT(m.type, a)) {
                    e = m;
                    break a
                }
            }
            f(uU(new sU, ELa + a))
        }
        e = e;d = IZ(d);a = new fZ;c = c;b = b;d = d;TKa(a, (lZ(), mZ), e, c, b, d);
        return a;
    case is:
        b = a.n;c = new sY;b = FZ(b);GJa(c, b);c.f = 0;
        return c;
    case js:
        b = a.n;c = new uY;b = FZ(b);GJa(c, b);
        return c;
    default:
        f(Error("Unknown kix mutation type " + a.O()))
    }
};
var GLa = new AZ;

function HLa(a, b) {
    return EZ(GLa, a, b)
}
function LZ(a, b) {
    if (a.O() == 0) {
        for (var c = a.a, d = 0; d < b.length; d++) switch (b[d].O()) {
        case xD:
            if (c != b[d].a) c = (wY(), xY(c, b[d].a, b[d].Y().length));
            break;
        case wD:
            var e = b[d],
                g = fW(new aW, e.qc());
            e = fW(new aW, e.Se());
            g = lX(g, e);
            c = yY(c, g);
            break
        }
        return new P(c, a.f)
    } else return a
}
function ILa(a, b) {
    var c = LZ(a.Fa(), b);
    c = new SG(c);
    if (a.Kb()) {
        var d = LZ(a.Dc, b);
        TG(c, d)
    }
    return c
};

function MZ(a, b, c) {
    this.a = a;
    this.g = c || new AZ;
    this.f = a.Xo() > 0;
    NZ(this, b)
}
s(MZ, t);
n = MZ.prototype;
n.TC = -1;
n.Fx = -1;
n.sY = i;
n.Zi = l;
n.ly = k;
n.Um = k;

function OZ(a) {
    return a.a.DI()
}
function NZ(a, b) {
    a.Fx = b;
    a.f || a.a.lM(b)
}
n.q = function () {
    MZ.p.q.call(this);
    this.a.G();
    delete this.a;
    delete this.g
};

function PZ(a, b, c, d) {
    Pd.call(this, Bza, a);
    this.a = b;
    this.g = c;
    this.u = d
}
s(PZ, Pd);
PZ.prototype.q = function () {
    PZ.p.q.call(this);
    delete this.a
};

function QZ(a, b) {
    Pd.call(this, ZE, a);
    this.a = b
}
s(QZ, Pd);
QZ.prototype.q = function () {
    QZ.p.q.call(this);
    delete this.a
};

function RZ(a, b, c, d, e, g, h, j, m) {
    this.Xa = a;
    this.f = b;
    this.M = c;
    this.a = d;
    this.V = e;
    this.u = h;
    this.n = j;
    this.K = m;
    this.g = [];
    this.L = new ze(this);
    this.L.C(h, Nj, this.nX).C(j, Nj, this.mX).C(m, Nj, this.bU).C(a, lj, this.JU);
    g.Za(Xd, this.oX, this)
}
s(RZ, Pi);
n = RZ.prototype;
n.Mq = k;
n.yA = -1;
n.Ir = -1;
n.KB = i;
n.Gm = l;
n.Vs = k;
n.lL = 0;
n.Zs = k;
n.Zh = l;
n.tS = function () {
    return OZ(this.a)
};
var JLa = "Changes took too long to be received by server. Shutting down to prevent data loss.";
n.bE = function (a) {
    var b;
    b: {
        b = Za(this.a.ly) ? lb() - this.a.ly : k;
        if (Za(b)) if (b > 18E4) {
            b = i;
            break b
        }
        b = Za(this.a.Um) ? lb() - this.a.Um : k;
        if (Za(b)) if (b > 18E4) {
            b = i;
            break b
        }
        b = l
    }
    if (b) {
        wJ(this.V, Error(JLa), SZ(this));
        b = i
    } else b = l;
    if (!b) {
        b = this.a;
        b.a.iK(a);
        if (!Za(b.Um)) b.Um = lb();
        if (!Ai(this.Xa)) {
            a = this.Xa;
            dw(a, hw(a.a, 1, i))
        }
        TZ(this);
        Mj(this.n);
        this.u.start()
    }
};

function KLa(a, b, c, d, e) {
    if (e) d = b;
    else a: {
        e = a.a;
        if (e.Fx > 0 && d >= 0) {
            var g = e.Fx + 1;
            if (c < g) {
                d = [];
                break a
            } else if (c == g) e.sY = l;
            else {
                d = k;
                break a
            }
        }
        if (e.f) b = b;
        else {
            c = e.a.Zr();
            b = EZ(e.g, c, b);
            c = b.Mn;
            g = e.a.bs();
            b = EZ(e.g, g, b.gE);
            e.a.replace(c, b.Mn);
            if (!(e.a.VA() > 0)) e.Um = k;
            b = b.gE
        }
        d > 0 && NZ(e, d);
        d = b
    }(d = d) && d.length > 0 && a.dispatchEvent(new QZ(a, d));
    return !!d
}
n.G1 = function (a) {
    if (LLa(this, a)) {
        this.Vs = a.sa();
        Mj(this.n);
        this.n.start()
    }
};

function LLa(a, b) {
    if (!b || !Ai(a.Xa)) return l;
    var c = b.Fa();
    if (c.O() != 0) return l;
    var d = b.Dc;
    return !a.Zs || !c.Qa(a.Zs.Fa()) || !d.Qa(a.Zs.Dc)
}
n.nX = function () {
    Pq(this.V, this.cE, this)()
};
n.mX = function () {
    this.cE(i)
};
var MLa = "sid",
    NLa = "rev",
    OLa = "mutations",
    PLa = "cursorLoc",
    QLa = "reqId",
    RLa = "/mutate";
n.cE = function (a) {
    if (!this.a.Zi) if (!this.Gm) {
        var b = !this.a.Zi && this.a.a.Xo() > 0;
        a = LLa(this, this.Vs) && (b || !! a);
        if (b || a) {
            var c = k;
            if (b) {
                c = this.a;
                if (!(!c.Zi && c.a.Xo() > 0)) f(Error("Attempted to dequeue mutations to send while in unready state."));
                var d = OZ(c);
                if (c.TC == d) f(Error("Client invariant failed. Sent the revision number " + d + " twice in a row."));
                c.TC = d;
                d = c.a.bM();
                c.ly = c.Um;
                c.Um = k;
                c.Zi = i;
                c = d;
                TZ(this)
            }
            d = k;
            if (a) {
                this.Zs = d = this.Vs;
                this.Vs = k;
                Mj(this.n)
            }
            a = this.lL++;
            c = c;
            var e = d;
            if (!c && !e) f(Error("Cannot send an empty message to the server."));
            d = [MLa, this.f, NLa, OZ(this.a)];
            if (c) {
                d.push(OLa);
                for (var g = [], h = 0; h < c.length; h++) g[h] = c[h].Z();
                d.push(cr(g))
            }
            if (e) {
                c = e.Z();
                c.ty = wLa;
                d.push(PLa);
                d.push(cr(c))
            }
            d.push(QLa);
            d.push(a);
            this.Gm = i;
            this.KB = b;
            qO(this.M.Gd(RLa).Lk(Iv, this.Xa.f).Cr(St(d)).Pf(this.xW, this), this.wW, this).Ld()
        }
        Mj(this.u)
    }
};
var SLa = "CREATING",
    TLa = "CREATED",
    ULa = "PENDING",
    VLa = "SAVING",
    WLa = "EDITABLE";

function SZ(a) {
    var b = {
        currentRevision: OZ(a.a),
        transformmgr_hasUnsavedChanges: a.a.a.Xo() > 0,
        transformmgr_isHoldingOfflineMutations: a.a.f,
        transformmgr_isWaitingForAck: a.a.Zi,
        transformmgr_lastSentRevision: a.a.TC,
        transformmgr_unsentMutations: vIa(a.a.a.bs()),
        transformmgr_sentMutations: vIa(a.a.a.Zr())
    };
    b.mutationTransporter_mutationsInFlight = a.Gm;
    b.docInfo_LastModifiedTime = a.Xa.Ys;
    var c = a.Xa.a,
        d = [];
    ew(c, 1) && d.push(SLa);
    ew(c, 2) && d.push(TLa);
    ew(c, 4) && d.push(ULa);
    ew(c, 8) && d.push(VLa);
    ew(c, 16) && d.push(WLa);
    b.docInfo_SaveState = d.join(Gj);
    if (a.Zh) b.mutationTransporter_catchupCache_length = a.g.length;
    return b
}
var XLa = "handleMutationsRequestFailure_";
n.wW = function (a) {
    yP(a, this.V, XLa, SZ(this))
};
n.xW = function (a) {
    a = a.Cc();
    Pq(this.V, r(this.$0, this, a), this)()
};
n.$0 = function (a) {
    this.Gm = l;
    if (a) {
        this.KB = l;
        var b = a.startRev;
        a = a.endRev;
        if (!Za(b)) f(Error("processMutationsRequestSuccess_: response did not include ack start revision"));
        if (!Za(a)) f(Error("processMutationsRequestSuccess_: response did not include ack end revision"));
        if (a < b) f(Error("processMutationsRequestSuccess_: Expected ack end rev (" + a + ") < expected ack start rev (" + b + Of));
        if (this.a.Zi) {
            if (b <= OZ(this.a)) f(Error("processMutationsRequestSuccess_: waitingForAck and mutate/ response reported expected revision range [" + b + SB + a + "], but this is lower than the currently syncd revision " + OZ(this.a)));
            this.yA = b;
            this.Ir = a;
            if (this.K.a) f(Error("processMutationsRequestSuccess_: Tried to restart already-enabled ack timer."));
            this.K.start()
        } else if (a > OZ(this.a)) f(Error("processMutationsRequestSuccess_: not waitingForAck and response reported expected revision range [" + b + SB + a + "], but this is higher than the currently syncd revision " + OZ(this.a)));
        !this.Gm && this.Zh && YLa(this);
        Ai(this.Xa) || gw(this.Xa)
    } else if (this.KB) f(Error("processMutationsRequestSuccess_: Got unexpected empty response after sending mutations."))
};
n.bU = function () {
    Mj(this.K);
    Pq(this.V, r(this.vE, this, k), this)()
};
n.vE = function (a) {
    if (this.Zh) f(Error("startCatchup_: Cannot start catchup mode while in catchup mode."));
    this.Zh = i;
    a && this.g.unshift(a);
    !this.Gm && this.Zh && YLa(this)
};
var ZLa = "startRev",
    $La = "endRev",
    aMa = "ackStartRev",
    bMa = "ackEndRev",
    cMa = "/deltachanges";

function YLa(a) {
    if (a.Gm) f(Error("Illegal state: Cannot send a catchup request while mutations are in flight."));
    if (a.Ir == -1 && a.g.length == 0) f(Error("Illegal state: Called sendCatchupRequest_ with no initiating message and no expected ack numbers."));
    var b = OZ(a.a) + 1,
        c = a.g.length > 0 ? a.g[0].xk - 1 : a.Ir,
        d;d = a.lL++;d = [MLa, a.f, ZLa, b, $La, c, QLa, d, aMa, a.yA, bMa, a.Ir];qO(a.M.Gd(cMa).Lk(Iv, a.Xa.f).Cr(St(d)).Pf(r(a.uU, a, b, c), a), a.tU, a).Ld()
}
n.uU = function (a, b, c) {
    Pq(this.V, r(this.U0, this, c.Cc(), a, b), this)()
};
var dMa = "XHR to recover from catchup error failed.";
n.tU = function (a) {
    yP(a, this.V, bc(dMa), SZ(this))
};
n.U0 = function (a, b, c) {
    if (!this.Zh) f(Error("processCatchupResponse_: Received catchup results while not in catchup mode."));
    if (!a) f(Error("processCatchupResponse_: Empty response object received for catchup request for revisions " + b + aC + c));
    if (!ab(a)) f(Error("processCatchupResponse_: Non array object received for catchup request."));
    if (a.length == 0) f(Error("processCatchupResponse_: Empty list received for catchup request."));
    for (var d = [], e = 0; e < a.length; e++) {
        var g = new QG(a[e], this.V);
        if (!g.M) f(Error("processCatchupResponse_: Non-catchup message received in catchup request."));
        d.push(g)
    }
    if (b != d[0].xk || c != d[d.length - 1].ji()) f(Error("processCatchupResponse_: Bad revision range on catchup message. Expected " + b + aC + c + " but got " + d[0].xk + aC + d[d.length - 1].ji()));
    this.Zh = l;
    for (e = 0; e < d.length; e++) this.ID(d[e]);
    for (; a = this.g.shift();) {
        this.ID(a);
        if (this.Zh) return
    }
};
n.oX = function (a) {
    a = new QG(a, this.V);
    Pq(this.V, r(this.ID, this, a), this)()
};
n.ID = function (a) {
    if (this.Zh) this.g.push(a);
    else if (this.f == a.f) {
        if (a.a) {
            Mj(this.K);
            if (this.a.f) {
                KLa(this, a.a, a.xk, a.ji(), i);
                this.Mq && this.Mq()
            }
            var b;
            b = this.a;
            var c = a.xk,
                d = a.ji();
            if (OZ(b) > 0 && c != b.Fx + 1) b = c < OZ(b) + 1;
            else {
                if (!b.Zi) f(Error('Client invariant failed. Session  received a "mutations received" acknowledgement but no mutations had been sent.'));
                b.f = l;
                NZ(b, d);
                b.a.RL();
                b.ly = k;
                b.Zi = l;
                b = i
            }
            if (b) {
                this.Ir = this.yA = -1;
                lw(this.Xa, k, lb() + zJ);
                TZ(this)
            } else this.vE(a)
        }
    } else a: {
        if (a.a) {
            if (!KLa(this, a.a, a.xk, a.ji())) {
                this.vE(a);
                break a
            }
            a.n && a.u && lw(this.Xa, a.n, a.u)
        }
        if (b = a.ra()) {
            a = a.f;
            c = LZ(b.Fa(), zc(this.a.a.Zr(), this.a.a.bs()));
            b = LZ(b.Dc, zc(this.a.a.Zr(), this.a.a.bs()));
            this.dispatchEvent(new PZ(this, c, b, a))
        }
    }
};
n.D_ = function (a) {
    if (this.a.f) {
        if (!this.Mq) {
            this.Mq = a;
            Pq(this.V, this.cE, this)()
        }
        return i
    }
    return l
};

function TZ(a) {
    var b = a.Xa,
        c = a.a.a.VA() > 0;
    dw(b, hw(hw(b.a, 8, a.a.Zi), 4, c))
}
n.JU = function () {
    this.bE([new GG(1, v)])
};
n.q = function () {
    RZ.p.q.call(this);
    delete this.Mq;
    delete this.Xa;
    delete this.V;
    delete this.Vs;
    delete this.Zs;
    delete this.M;
    this.a.G();
    delete this.a;
    this.L.G();
    delete this.L;
    this.u.G();
    delete this.u;
    this.n.G();
    delete this.n
};

function UZ(a, b, c, d, e, g, h, j) {
    this.g = a;
    this.f = d;
    this.V = g;
    h = this.oC = new pP(undefined, j, h);
    h.VH = !jf(a);
    h.Za(bj, this.YU, this);
    d.f = h;
    j = r(d.rU, d);
    h.xa = j;
    h.Za(vP, d.xB, d);
    d.f.aa = yb(d.n);
    wP(h, a.P, b, a.Bq);
    j = new Kj(200);
    var m = new Kj(200),
        o = new Kj(3E4),
        q;
    q = a.P;
    var u = a.WD,
        w = q + (u ? SB + u : v);
    q = a.dC && XG() && vK(w, g) == k ? new BT(q, u, b, a.GA, a.CM, a.rB, g) : new AT;e = new MZ(q, e);this.Tj = new RZ(c, b, d, e, g, h, j, m, o);this.a = new wT(c, d, z.J(), undefined, undefined, undefined, g);
    if (!jf(a)) {
        a = this.a;
        a.f = new sT(a.Wa, a.n, a.P);
        a.g = new tT(a.Wa, a.u, a.f, a.M, undefined, a.V || undefined)
    }
    this.n = new yT(c, d, h);this.lA = new xT(c, h, this.a);this.L = new ze(this);this.L.C(d, Cj, this.zW)
}
s(UZ, Pi);
n = UZ.prototype;
var eMa = "handleNetServiceClientError_";
n.zW = function (a) {
    yP(a, this.V, eMa, SZ(this.Tj))
};
var fMa = "documentDelete";
n.YU = function () {
    this.dispatchEvent(fMa)
};
var gMa = "format",
    hMa = "export?";
n.WH = function (a, b) {
    var c = [gMa, a, Iv, this.g.P],
        d = [],
        e = this.f.n;
    for (var g in e) d.push(g, e[g]);
    c = hMa + St(zc(c, d, b || []));
    xR(c)
};
var iMa = "wid",
    jMa = "/import";
n.I1 = function (a, b, c) {
    a = St([iMa, a]);
    AP(qO(this.f.Gd(jMa).Cr(a).Pf(function (d) {
        b(d.getString())
    }), c), 2).Ld()
};
n.q = function () {
    UZ.p.q.call(this);
    delete this.g;
    delete this.oC;
    delete this.V;
    delete this.f;
    this.Tj.G();
    delete this.Tj;
    this.a.G();
    delete this.a;
    this.n.G();
    delete this.n;
    this.lA.G();
    delete this.lA;
    this.L.G();
    delete this.L
};

function VZ(a, b, c, d, e, g) {
    VP.call(this, a, b, c, d, g);
    this.f = e || new SG(new P(1), c)
}
s(VZ, VP);
VZ.prototype.ra = function () {
    return this.f
};
VZ.prototype.q = function () {
    VZ.p.q.call(this);
    this.f.G()
};

function kMa(a) {
    return new VZ(a.sid, a.userId, a.displayName, a.color, undefined, a.isMe)
};

function WZ(a, b) {
    iv.call(this, a, b)
}
s(WZ, VB);
n = WZ.prototype;
n.ga = function () {
    WZ.p.ga.call(this);
    this.Ga().C(this.z(), bC, this.nZ)
};
n.nZ = function (a) {
    a.stopPropagation()
};
var XZ = "#bookmark=",
    YZ = "<div>",
    lMa = "&nbsp;<a href='",
    mMa = "'>",
    nMa = "&nbsp;<a class='kix-bubbleview-link' id='kix-bookmark-remove-",
    oMa = "kix-bookmark-remove-";
n.update = function (a) {
    var b = [];
    for (var c in a) {
        var d = {};
        d.In = c;
        d.Cz = XZ + c;
        b.push(d)
    }
    b.sort(r(this.nQ, this, Q(this.getContext())));
    d = {};
    d.oQ = b;
    d.Iv = ff(wv(this.getContext())) == 4;
    b = this.z();
    var e;
    e = new N;
    for (var g = d.oQ, h = g.length, j = 0; j < h; j++) {
        var m = g[j];
        m = {
            In: m.In,
            Cz: m.Cz,
            Iv: d.Iv
        };
        var o = e,
            q = o || new N,
            u = hO(m.In);
        q.append(YZ, Xn, lMa, hO(m.Cz), mMa, u, by);
        m.Iv && q.append(gv, SB, nMa, hO(m.In), mMa, $B, by);
        q.append(wa);
        o || q.toString()
    }
    e = e.toString();
    b.innerHTML = e;
    if (d.Iv) {
        d = this.J();
        for (c in a) {
            b = d.z(oMa + c);
            this.Ga().C(b, Ud, r(this.VQ, this, c))
        }
    }
};
n.nQ = function (a, b, c) {
    b = FA(a, b.In);
    a = FA(a, c.In);
    return b - a
};
n.VQ = function (a) {
    var b = M(yv(this.getContext()), Yn),
        c = {};
    c.entityId = a;
    Ni(b, c)
};

function ZZ(a, b) {
    this.a = a;
    this.va = b;
    this.Ia = new pMa;
    this.L = new ze(this)
}
s(ZZ, t);
n = ZZ.prototype;
n.hl = k;
n.dS = function (a) {
    var b;
    a: {
        b = a.end;
        for (var c = {}, d = HA(this.a.A, jt), e = 0, g = a.start; g <= b; g++) if (d[g]) for (var h = 0; h < d[g].length; h++) {
            var j = d[g][h];
            c[j] = j;
            e++;
            if (p(void 0) && e >= void 0) {
                b = c;
                break a
            }
        }
        b = c
    }
    if (!ub(b)) {
        c = [];
        c.push(new $Z(this.Ia, b, a));
        return c
    }
    return k
};
var qMa = "kix-bookmarkviewmanager-overlay-selected",
    rMa = "kix-bookmarkviewmanager-overlay-selected-highlighted";
n.eS = function (a) {
    if (ub(this.Ia.tk)) return k;
    var b = [],
        c = a.start;
    Pg(HA(this.a.A, jt), function (d, e) {
        if (!pb(a, d)) return l;
        for (var g = 0; g < e.length; g++) if (e[g] in this.Ia.tk) {
            d - c > 0 && b.push(new jx(new nb(c, d - 1), qMa));
            b.push(new jx(new nb(d, d), rMa));
            c = d + 1
        }
        return l
    }, this);
    return b
};
n.pU = function (a) {
    NA(this.a.g, undefined, CD);
    if (ub(a.g)) this.hl && this.hl.X(l);
    else {
        var b = a.a;
        a = this.hl;
        if (b) {
            var c = this.va.n.z();
            if (!a) {
                a = this.hl = new WZ(this.a, this.va.J());
                this.va.ya(a);
                a.Ja(c)
            }
            b = Esa(b, c);
            jv(a, b.x, b.y + 18)
        }
        if (a) {
            a.update(this.Ia.tk);
            a.X(i)
        }
    }
};
n.pZ = function (a) {
    a.n && a_(this.Ia, {})
};
n.qZ = function () {
    var a = this.Ia.tk;
    if (!ub(a)) {
        var b = {},
            c = this.a.A;
        for (var d in a) if (c.Pa(d) && FA(c, d) >= 0) b[d] = d;
        a_(this.Ia, b)
    }
};
n.q = function () {
    ZZ.p.q.call(this);
    this.Ia.G();
    delete this.Ia;
    this.hl && this.hl.G();
    delete this.hl;
    this.L.G();
    delete this.L
};
var sMa = "bookmarksselected";

function tMa(a, b) {
    var c = new ZZ(a, b),
        d = c.a.g;
    d.Sd(BD, r(c.dS, c));
    d.Sd(CD, r(c.eS, c));
    d = c.a.A;
    c.L.C(d, ov, c.qZ).C(d, nv, c.pZ).C(c.Ia, sMa, c.pU);
    return c
}
function pMa() {
    this.tk = {}
}
s(pMa, Pi);

function a_(a, b, c) {
    var d = l;
    for (var e in a.tk) if (a.tk[e] != b[e]) {
        d = i;
        break
    }
    if (!d) for (e in b) if (a.tk[e] != b[e]) {
        d = i;
        break
    }
    if (d) {
        a.tk = yb(b);
        a.dispatchEvent(new uMa(b, c))
    }
}

function $Z(a, b, c) {
    jx.call(this, c);
    this.Ia = a;
    this.f = b;
    this.L = new ze(this)
}
s($Z, jx);
n = $Z.prototype;
n.Gw = k;
n.Il = function () {
    return this.f
};
n.Nt = function (a) {
    this.f = a
};
n.Sr = function () {
    var a = $Z.p.Sr.call(this);
    if (!a || a.length == 0) return a;
    var b = a[0].Ic() - 12,
        c = a[0].Rc() + 12;
    if (a.length > 1) c += a[a.length - 1].Ic() - a[0].Rc() + a[a.length - 1].Rc();
    return [new lx(b, a[0].Wb(), c, a[0].uf())]
};
var vMa = "kix-bookmarkviewmanager-icon-outer",
    wMa = "kix-bookmarkviewmanager-icon-top",
    xMa = "kix-icon-bookmark-bottom";
n.uv = function (a) {
    var b = a.F(A),
        c = a.F(A, vMa);
    this.Gw = c;
    var d = a.F(A, wMa),
        e = fA(xMa);
    this.L.C(c, Co, this.oZ, undefined, this);
    a.appendChild(b, c);
    a.appendChild(c, d);
    a.appendChild(c, e);
    return b
};
n.oZ = function (a) {
    a.stopPropagation();
    a_(this.Ia, this.f, this.Gw ? this.Gw : undefined)
};
n.q = function () {
    $Z.p.q.call(this);
    this.L.G();
    delete this.L;
    delete this.Gw;
    delete this.Ia;
    delete this.f
};

function uMa(a, b) {
    Pd.call(this, sMa);
    this.a = b || k;
    this.g = a
}
s(uMa, Pd);

function b_(a, b, c, d, e) {
    eR.call(this, e);
    this.n = a;
    this.A = b;
    this.g = c;
    this.u = d;
    this.f = []
}
s(b_, eR);
b_.prototype.vy = function (a, b) {
    var c = this.g;
    this.Jh(i);
    for (var d = [], e = 0, g; g = this.f[e]; e++) if (g = g.f(this.n, this.A, this.g, this.u)) {
        e > 0 && d.push(k);
        Bc(d, g)
    }
    nR(c, this, d);
    d.length > 0 && b_.p.vy.call(this, a, b)
};
b_.prototype.Sd = function (a) {
    this.f.push(a)
};
b_.prototype.q = function () {
    delete this.n;
    delete this.f;
    delete this.u;
    delete this.A;
    delete this.g
};

function c_() {}
Qa(c_);
c_.prototype.a = k;
c_.prototype.f = function (a) {
    if (!this.a) {
        this.a = y.ia ? [K.Gg, K.Fg, K.Rh] : y.La ? [K.Gg, K.Fg] : [];this.a.length > 0 && this.a.push(k);this.a.push(M(a, sm))
    }
    return this.a
};

function d_() {}
s(d_, AM);
Qa(d_);
n = d_.prototype;
var yMa = "goog-tab";
n.Ca = function () {
    return yMa
};
n.Wl = function () {
    return Ti
};
n.F = function (a) {
    var b = d_.p.F.call(this, a);
    (a = a.xf()) && this.Ti(b, a);
    return b
};
n.gc = function (a, b) {
    b = d_.p.gc.call(this, a, b);
    var c = this.xf(b);
    c && a.qy(c);
    if (FM(a, 8)) if ((c = a.ib) && gb(c.Rp)) {
        a.Ka(8, l);
        c.Rp(a)
    }
    return b
};
n.xf = function (a) {
    return a.title || v
};
n.Ti = function (a, b) {
    if (a) a.title = b || v
};

function e_(a, b, c) {
    HM.call(this, a, b || d_.N(), c);
    NM(this, 8, i);
    wM(this, 9, i)
}
s(e_, HM);
e_.prototype.xf = function () {
    return this.a
};
e_.prototype.Ti = function (a) {
    this.zc().Ti(this.z(), a);
    this.qy(a)
};
e_.prototype.qy = function (a) {
    this.a = a
};
yM(yMa, function () {
    return new e_(k)
});

function f_() {}
s(f_, TM);
Qa(f_);
var zMa = "goog-tab-bar";
f_.prototype.Ca = function () {
    return zMa
};
var AMa = "tablist";
f_.prototype.uw = function () {
    return AMa
};
f_.prototype.lE = function (a, b, c) {
    if (!this.f) {
        this.a || BMa(this);
        this.f = Osa(this.a)
    }
    var d = this.f[b];
    d ? a.Qp(d) : f_.p.lE.call(this, a, b, c)
};
f_.prototype.iB = function (a) {
    var b = f_.p.iB.call(this, a);
    this.a || BMa(this);
    b.push(this.a[a.Fa()]);
    return b
};
var CMa = "-top",
    DMa = "-bottom",
    EMa = "-start",
    FMa = "-end";

function BMa(a) {
    var b = a.Ca();
    a.a = Db(tf, b + CMa, Ds, b + DMa, Io, b + EMa, Zi, b + FMa)
};

function g_(a, b, c) {
    this.Qp(a || tf);
    YM.call(this, this.Kj, b || f_.N(), c);
    a = So(this);
    a.C(this, HK, this.zX);
    a.C(this, rsa, this.EX);
    a.C(this, EK, this.xX);
    a.C(this, KM, this.yX)
}
s(g_, YM);
n = g_.prototype;
n.eQ = i;
n.Of = k;
n.q = function () {
    g_.p.q.call(this);
    this.Of = k
};
n.removeChild = function (a, b) {
    h_(this, a);
    return g_.p.removeChild.call(this, a, b)
};
n.Fa = function () {
    return this.a
};
n.Qp = function (a) {
    WM(this, a == Io || a == Zi ? aa : VM);
    this.a = a
};
n.jE = function (a) {
    g_.p.jE.call(this, a);
    this.eQ && this.Rp(bp(this, a))
};
n.Rp = function (a) {
    if (a) a.hd(i);
    else this.Of && this.Of.hd(l)
};

function h_(a, b) {
    if (b && b == a.Of) {
        for (var c = iK(a, b), d = c - 1; b = bp(a, d); d--) if (b.Da() && b.Ab()) {
            a.Rp(b);
            return
        }
        for (c = c + 1; b = bp(a, c); c++) if (b.Da() && b.Ab()) {
            a.Rp(b);
            return
        }
        a.Rp(k)
    }
}
n.zX = function (a) {
    this.Of && this.Of != a.target && this.Of.hd(l);
    this.Of = a.target
};
n.EX = function (a) {
    if (a.target == this.Of) this.Of = k
};
n.xX = function (a) {
    h_(this, a.target)
};
n.yX = function (a) {
    h_(this, a.target)
};
n.kB = function () {
    aN(this) || this.gd(this.Of || bp(this, 0))
};
yM(zMa, function () {
    return new g_
});
z.selection = {};
z.selection.setStart = function (a, b) {
    if (z.selection.lq(a)) a.selectionStart = b;
    else if (y.ia) {
        var c = z.selection.Xr(a),
            d = c[0];
        if (d.inRange(c[1])) {
            b = z.selection.hv(a, b);
            d.collapse(i);
            d.move(bq, b);
            d.select()
        }
    }
};
z.selection.SA = function (a) {
    return z.selection.OA(a, i)[0]
};
var i_ = "StartToEnd",
    j_ = "\r\n";
z.selection.BS = function (a, b, c) {
    b = b.duplicate();
    for (var d = a.text, e = d, g = b.text, h = g, j = l; !j;) if (a.compareEndPoints(i_, a) == 0) j = i;
    else {
        a.moveEnd(bq, -1);
        if (a.text == d) e += j_;
        else j = i
    }
    if (c) return [e.length, -1];
    for (a = l; !a;) if (b.compareEndPoints(i_, b) == 0) a = i;
    else {
        b.moveEnd(bq, -1);
        if (b.text == g) h += j_;
        else a = i
    }
    return [e.length, e.length + h.length]
};
z.selection.n5 = function (a) {
    return z.selection.OA(a, l)
};
var GMa = "EndToStart";
z.selection.OA = function (a, b) {
    var c = 0,
        d = 0;
    if (z.selection.lq(a)) {
        c = a.selectionStart;
        d = b ? -1 : a.selectionEnd
    } else if (y.ia) {
        var e = z.selection.Xr(a),
            g = e[0];
        e = e[1];
        if (g.inRange(e)) {
            g.setEndPoint(GMa, e);
            if (a.type == CR) return z.selection.BS(g, e, b);
            c = g.text.length;
            d = b ? -1 : g.text.length + e.text.length
        }
    }
    return [c, d]
};
z.selection.setEnd = function (a, b) {
    if (z.selection.lq(a)) a.selectionEnd = b;
    else if (y.ia) {
        var c = z.selection.Xr(a),
            d = c[1];
        if (c[0].inRange(d)) {
            b = z.selection.hv(a, b);
            c = z.selection.hv(a, z.selection.SA(a));
            d.collapse(i);
            d.moveEnd(bq, b - c);
            d.select()
        }
    }
};
z.selection.m5 = function (a) {
    return z.selection.OA(a, l)[1]
};
z.selection.N1 = function (a, b) {
    if (z.selection.lq(a)) {
        a.selectionStart = b;
        a.selectionEnd = b
    } else if (y.ia) {
        b = z.selection.hv(a, b);
        var c = a.createTextRange();
        c.collapse(i);
        c.move(bq, b);
        c.select()
    }
};
z.selection.nM = function (a, b) {
    if (z.selection.lq(a)) {
        var c = a.value,
            d = a.selectionStart;
        a.value = c.substr(0, d) + b + c.substr(a.selectionEnd);
        a.selectionStart = d;
        a.selectionEnd = d + b.length
    } else if (y.ia) {
        d = z.selection.Xr(a);
        c = d[1];
        if (d[0].inRange(c)) {
            d = c.duplicate();
            c.text = b;
            c.setEndPoint(lq, d);
            c.select()
        }
    } else f(Error("Cannot set the selection end"))
};
z.selection.ee = function (a) {
    if (z.selection.lq(a)) return a.value.substring(a.selectionStart, a.selectionEnd);
    if (y.ia) {
        var b = z.selection.Xr(a),
            c = b[1];
        if (b[0].inRange(c)) {
            if (a.type == CR) return z.selection.lT(c)
        } else return v;
        return c.text
    }
    f(Error("Cannot get the selection text"))
};
z.selection.lT = function (a) {
    a = a.duplicate();
    for (var b = a.text, c = b, d = l; !d;) if (a.compareEndPoints(i_, a) == 0) d = i;
    else {
        a.moveEnd(bq, -1);
        if (a.text == b) c += j_;
        else d = i
    }
    return c
};
z.selection.Xr = function (a) {
    var b = a.ownerDocument || a.document,
        c = b.selection.createRange();
    if (a.type == CR) {
        b = b.body.createTextRange();
        b.moveToElementText(a)
    } else b = a.createTextRange();
    return [b, c]
};
z.selection.hv = function (a, b) {
    if (a.type == CR) b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, Hd).length;
    return b
};
z.selection.lq = function (a) {
    try {
        return typeof a.selectionStart == Sa
    } catch (b) {
        return l
    }
};

function k_(a, b) {
    cp.call(this, undefined, undefined, b);
    this.Vn = a
}
s(k_, cp);
k_.prototype.L = k;

function l_(a) {
    if (a) {
        a.focus();
        z.selection.N1(a, a.value.length)
    }
}
k_.prototype.Ga = function () {
    return this.L || (this.L = new ze(this))
};
k_.prototype.pb = function () {
    k_.p.pb.call(this);
    this.L && De(this.L)
};
k_.prototype.q = function () {
    k_.p.q.call(this);
    this.L && this.L.G();
    delete this.L
};
var HMa = "Dictionary";

function m_(a, b) {
    k_.call(this, i, b);
    this.A = a;
    this.f = new g_;
    this.ya(this.f);
    this.a = [];
    this.setTitle(HMa);
    Cp(this, Fp);
    this.Bc.pj = k
}
s(m_, k_);
n = m_.prototype;
n.yC = 0;
n.Av = k;
n.rr = k;
n.qj = k;
n.rj = k;
var IMa = "Chinese (Simplified)",
    JMa = "Chinese (Traditional)",
    n_ = [
        [cf, "English"],
        [AD, "German"],
        [fF, "French"],
        ["nl", "Dutch"],
        ["ru", "Russian"],
        ["cs", "Czech"],
        ["es", "Spanish"],
        ["it", "Italian"],
        ["ko", "Korean"],
        [ki, "Portugese"],
        ["zh-Hans", IMa],
        ["zh-Hant", JMa]
    ].sort(function (a, b) {
        var c = a[1],
            d = b[1];
        if (c < d) return -1;
        if (c == d) return 0;
        return 1
    });
n = m_.prototype;
var KMa = '<div class="kix-dialog-content-tabbed"><div class="goog-tab-bar goog-tab-bar-horizontal goog-tab-bar-top" id="kix-dictionarydialog-tab-bar"><div class="goog-tab goog-tab-selected">',
    LMa = "Define",
    MMa = '</div></div><div class="goog-tab-bar-clear"></div><div class="kix-dictionarydialog-tab-content">',
    NMa = '<div class="kix-dictionarydialog-tab-content-inner" id="kix-dictionarydialog-tab-define"><div class="kix-dictionarydialog-control goog-inline-block"><input type="text" size="30" id="kix-dictionarydialog-define-textbox"/><span class="kix-dictionarydialog-prepositional-label">',
    OMa = "In",
    PMa = '</span><select id="kix-dictionarydialog-define-language"></select><input type="button" id="kix-dictionarydialog-define-button"/></div><div class="kix-dictionarydialog-tab-define-content" id="kix-dictionarydialog-tab-define-content"></div></div>',
    QMa = "kix-dialog-content-tabbed";
n.F = function () {
    m_.p.F.call(this);
    var a = this.db(),
        b;
    b = new N;
    b.append(KMa, LMa, MMa);
    var c = b || new N;
    c.append(NMa, OMa, PMa);
    b || c.toString();
    b.append(iO);
    b = b.toString();
    a.innerHTML = b;
    z.ba.add(a, QMa)
};
var RMa = "kix-dictionarydialog-tab-bar",
    SMa = "kix-dictionarydialog-tab-define",
    TMa = "kix-dictionarydialog-define-button",
    UMa = "kix-dictionarydialog-define-language",
    VMa = "kix-dictionarydialog-define-textbox",
    WMa = "kix-dictionarydialog-tab-define-content",
    XMa = "OPTION",
    o_ = "block";
n.ga = function () {
    m_.p.ga.call(this);
    var a = this.J();
    Zo(this.f, a.z(RMa));
    this.a.push(a.z(SMa));
    this.Av = a.z(TMa);
    this.rr = a.z(UMa);
    this.qj = a.z(VMa);
    this.rj = a.z(WMa);
    this.Av.value = LMa;
    a = this.J();
    for (var b = cf, c = 0; c < n_.length; c++) if (n_[c][0] == cf) b = cf;
    for (c = 0; c < n_.length; c++) {
        var d = a.F(XMa, {
            value: n_[c][0]
        }, n_[c][1]);
        if (d.value == b) d.selected = i;
        a.appendChild(this.rr, d)
    }
    a = this.A;
    b = Ev(a.ra());
    this.qj.value = b ? a.Y().slice(b.start, b.end) : v;this.cu();a = this.yC;
    for (b = 0; b < this.a.length; b++) this.a[b].style.display = a == b ? o_ : Hf;this.Ga().C(this.qj, Qj, this.vZ).C(this.Av, Ud, this.KU)
};
var YMa = "dct-lnk",
    ZMa = "dct-rlnk";
n.LU = function (a) {
    var b;
    if (!a.error && a.status.code == 200) b = google.language.dictionary.createResultHtml(a);
    if (b) {
        this.rj.innerHTML = b;
        a = this.rj.getElementsByTagName(XB);
        b = 0;
        for (var c; c = a[b]; b++) c.target = YB;
        $Ma(this, YMa, this.cu);
        $Ma(this, ZMa, this.cu)
    } else this.rj.innerHTML = aNa(this, this.qj.value)
};
n.KU = function () {
    this.cu()
};
n.vZ = function (a) {
    a.keyCode == 13 && this.yC == 0 && this.cu()
};
n.uX = function (a, b) {
    this.qj.value = b.target.innerHTML;
    a.call(this)
};
var bNa = "No definitions found for <i>",
    cNa = "</i>.";

function aNa(a, b) {
    return bNa + (Vb(b) + cNa)
}
function $Ma(a, b, c) {
    var d = a.rj.getElementsByTagName(Ne);
    c = r(a.uX, a, c);
    for (var e = 0, g; g = d[e]; e++) z.ba.Pd(g, b) && So(a).C(g, Ud, c)
}
var dNa = "pr,de,sy";
n.cu = function () {
    var a = this.qj.value;
    if (a) {
        var b = this.rr.options[this.rr.selectedIndex].value;
        try {
            var c = r(this.LU, this);
            google.language.define(a, b, b, c, {
                restricts: dNa
            })
        } catch (d) {
            this.rj.innerHTML = aNa(this, a)
        }
    } else this.rj.innerHTML = v
};
n.X = function (a) {
    m_.p.X.call(this, a);
    a && y.ia && this.A.f.xa && dsa(this.db());
    a && this.yC == 0 && l_(this.qj)
};
n.q = function () {
    m_.p.q.call(this);
    delete this.Av;
    delete this.rr;
    delete this.qj;
    delete this.rj;
    delete this.A;
    delete this.f;
    delete this.a
};

function p_(a, b, c, d) {
    this.a = a;
    this.n = b;
    this.g = c;
    this.f = d;
    b = a = i;
    for (c = this.n + 1; c < this.g; c++) {
        d = hu(c, this.a);
        var e = this.f && c >= this.f.start && c <= this.f.end;
        if (!Gba[E(this.a, c)]) {
            this.EH++;
            E(this.a, c) != x && this.FH++;
            if (e) {
                this.ZL++;
                E(this.a, c) != x && this.$L++
            }
        }
        if (d != Cj) b = a = i;
        else {
            if (a) {
                this.GH++;
                a = l
            }
            if (b && e) {
                this.aM++;
                b = l
            }
        }
    }
}
s(p_, t);
n = p_.prototype;
n.EH = 0;
n.ZL = 0;
n.FH = 0;
n.$L = 0;
n.GH = 0;
n.aM = 0;
n.q = function () {
    p_.p.q.call(this);
    delete this.a;
    delete this.f
};

function q_(a, b) {
    k_.call(this, i, b);
    this.A = a;
    this.setTitle(rm);
    Cp(this, Fp)
}
s(q_, k_);
var eNa = '<table class="kix-documentmetricsdialog-content"><tbody><tr><td class="kix-documentmetricsdialog-label-header">',
    fNa = "Counts",
    gNa = '</td><td class="kix-documentmetricsdialog-label-header">',
    hNa = "Selection",
    r_ = "</td></tr><tr><td>",
    iNa = "Words:",
    s_ = "</td><td>",
    jNa = "Characters (no spaces):",
    kNa = "Characters (with spaces):",
    lNa = "</td></tr></tbody></table>";
q_.prototype.F = function () {
    q_.p.F.call(this);
    var a = this.A,
        b = new p_(a.Y(), Iu(a, 1), Ju(a, 1), Ev(a.ra()));
    a = this.db();
    b = {
        E1: b.aM,
        DR: b.GH,
        D1: b.$L,
        AR: b.FH,
        C1: b.ZL,
        zR: b.EH
    };
    var c = new N;
    c.append(eNa, fNa, gNa, hNa, gNa, mk, r_, iNa, s_, hO(b.E1), s_, hO(b.DR), r_, jNa, s_, hO(b.D1), s_, hO(b.AR), r_, kNa, s_, hO(b.C1), s_, hO(b.zR), lNa);
    b = c.toString();
    a.innerHTML = b
};
q_.prototype.q = function () {
    q_.p.q.call(this);
    delete this.A
};

function t_(a, b) {
    this.A = a;
    this.a = b;
    this.L = new ze(this)
}
s(t_, t);
var mNa = "kix-equation-highlight";
t_.prototype.f = function (a) {
    var b = qu(this.A);
    if (b < a.start || b > a.end) return k;
    a = Kw(this.A.Y(), b);
    if (!a) return k;
    return [new jx(a, mNa, i)]
};
var u_ = "kix-overlay-equation";
t_.prototype.g = function (a) {
    if (Lw(this.A.Y(), qu(this.A))) {
        var b = qu(this.A);
        NA(this.a, new nb(b, b), u_)
    }
    a = Ou(this.A, a.a);
    Lw(this.A.Y(), a) && NA(this.a, new nb(a, a), u_)
};
t_.prototype.q = function () {
    t_.p.q.call(this);
    delete this.A;
    delete this.a;
    this.L.G();
    delete this.L
};

function nNa(a, b) {
    var c = new t_(a, b);
    c.a.Sd(u_, r(c.f, c));
    c.L.C(c.A, nv, c.g);
    return c
};
var oNa = '<div class="goog-color-menu-button-indicator">',
    v_ = "goog-toolbar-color-menu-button";

function pNa(a, b) {
    var c = b || new N,
        d = new N(oNa);
    w_(a, d);
    d.append(wa);
    x_(gO(a, {
        Xg: v_,
        Vq: d.toString()
    }), c);
    if (!b) return c.toString()
}
var qNa = '<div class="docs-icon goog-inline-block"><div class="docs-icon-img-container ',
    rNa = ">&nbsp;</div></div>";

function w_(a, b) {
    var c = b || new N;
    c.append(qNa, hO(a.Ko), wb, hO(a.title ? jHa + a.title + wb : v), rNa);
    if (!b) return c.toString()
}
var sNa = '-caption goog-inline-block">',
    tNa = '</div><div class="',
    uNa = '-dropdown goog-inline-block ">&nbsp;</div>';

function x_(a, b) {
    var c = b || new N;
    var d = gO(a, {
        $f: bO
    }),
        e = c || new N;
    y_(gO(d, {
        Og: uR + hO(d.$f) + sNa + d.Vq + tNa + hO(d.$f) + uNa
    }), e);
    c || e.toString();
    if (!b) return c.toString()
}
var z_ = "<div",
    vNa = ' class="',
    wNa = 'goog-inline-block goog-imageless-button goog-imageless-button-disabled" tabIndex="0"><div class="goog-inline-block goog-imageless-button-outer-box"><div class="goog-imageless-button-inner-box"><div class="goog-imageless-button-pos-box"><div class="goog-imageless-button-top-shadow">&nbsp;</div><div class="goog-imageless-button-content">',
    xNa = "</div></div></div></div></div>";

function A_(a, b) {
    var c = b || new N;
    if (a.C5) {
        var d = c || new N;
        d.append(z_, a.id ? fv + hO(a.id) + wb : v,
        vNa,
        a.Xg ? hO(a.Xg) + x : v,
        wNa,
        a.Og,
        xNa);
        c || d.toString()
    } else y_(gO(a, {
        $f: FN
    }), c);
    if (!b) return c.toString()
}
var yNa = '-disabled goog-inline-block"><div class="',
    zNa = '-outer-box goog-inline-block "><div class="',
    ANa = '-inner-box goog-inline-block">',
    BNa = "</div></div></div>";

function y_(a, b) {
    var c = b || new N;
    c.append(z_, a.id ? fv + hO(a.id) + wb : v,
    vNa,
    a.Xg ? hO(a.Xg) + x : v,
    hO(a.$f),
    x,
    hO(a.$f),
    yNa,
    hO(a.$f),
    zNa,
    hO(a.$f),
    ANa,
    a.Og,
    BNa);
    if (!b) return c.toString()
}
var CNa = '<div id="',
    DNa = '" role="menuitem" class="menu-button goog-control goog-control-disabled goog-inline-block">';

function B_(a, b) {
    var c = b || new N;
    c.append(CNa, hO(a.id), DNa, hO(a.label), wa);
    if (!b) return c.toString()
}
var ENa = '<div class="goog-toolbar-separator goog-inline-block">&nbsp;</div>';

function C_(a, b) {
    var c = b || new N;
    c.append(ENa);
    if (!b) return c.toString()
};
var FNa = "printButton",
    GNa = "docs-icon-img docs-icon-print",
    D_ = "undoButton",
    HNa = "docs-icon-img docs-icon-undo-rtl",
    E_ = "redoButton",
    INa = "docs-icon-img docs-icon-redo-rtl",
    JNa = "docs-icon-img docs-icon-undo",
    KNa = "docs-icon-img docs-icon-redo",
    F_ = "cloudboardMenuButton",
    LNa = "docs-icon-img docs-icon-clipboard",
    G_ = "headingStyleSelect",
    H_ = "fontFamilySelect",
    I_ = "fontSizeSelect",
    J_ = "boldButton",
    MNa = "docs-icon-img docs-icon-bold",
    K_ = "italicButton",
    NNa = "docs-icon-img docs-icon-italic",
    L_ = "underlineButton",
    ONa = "docs-icon-img docs-icon-underline",
    M_ = "foregroundColorButton",
    PNa = "docs-icon-img docs-icon-text-color",
    N_ = "backgroundColorButton",
    QNa = "docs-icon-img docs-icon-text-bgcolor",
    O_ = "insertLinkButton",
    RNa = "kix-icon-accessible-img kix-icon-insert-link",
    SNa = "insertImageButton",
    TNa = "docs-icon-img docs-icon-image",
    P_ = "addNumberedBulletButton",
    UNa = "docs-icon-img docs-icon-list-number-rtl",
    Q_ = "addBulletButton",
    VNa = "docs-icon-img docs-icon-list-bullet-rtl",
    R_ = "outdentButton",
    WNa = "docs-icon-img docs-icon-outdent-rtl",
    S_ = "indentButton",
    XNa = "docs-icon-img docs-icon-indent-rtl",
    YNa = "docs-icon-img docs-icon-list-number",
    ZNa = "docs-icon-img docs-icon-list-bullet",
    $Na = "docs-icon-img docs-icon-outdent",
    aOa = "docs-icon-img docs-icon-indent",
    T_ = "alignRightButton",
    bOa = "docs-icon-img docs-icon-align-right",
    U_ = "alignLeftButton",
    cOa = "docs-icon-img docs-icon-align-left",
    V_ = "alignCenterButton",
    dOa = "docs-icon-img docs-icon-align-center",
    W_ = "lineSpacingMenuButton",
    eOa = "kix-icon-accessible-img kix-icon-line-spacing-rtl",
    fOa = "kix-icon-accessible-img kix-icon-line-spacing",
    X_ = "textRtlButton",
    gOa = "kix-icon-accessible-img kix-icon-text-rtl",
    Y_ = "textLtrButton",
    hOa = "kix-icon-accessible-img kix-icon-text-ltr";

function iOa(a, b) {
    var c = b || new N;
    Z_({
        id: FNa,
        bb: GNa
    }, c);
    if (a.an) {
        Z_({
            id: D_,
            bb: HNa
        }, c);
        Z_({
            id: E_,
            bb: INa
        }, c)
    } else {
        Z_({
            id: D_,
            bb: JNa
        }, c);
        Z_({
            id: E_,
            bb: KNa
        }, c)
    }
    a.IR && $_({
        id: F_,
        bb: LNa
    }, c);
    a0({
        id: G_
    }, c);
    a0({
        id: H_
    }, c);
    a0({
        id: I_
    }, c);
    b0({
        id: J_,
        bb: MNa
    }, c);
    b0({
        id: K_,
        bb: NNa
    }, c);
    b0({
        id: L_,
        bb: ONa
    }, c);
    pNa({
        id: M_,
        Ko: PNa
    }, c);
    pNa({
        id: N_,
        Ko: QNa
    }, c);
    C_(k, c);
    Z_({
        id: O_,
        bb: RNa
    }, c);
    Z_({
        id: SNa,
        bb: TNa
    }, c);
    C_(k, c);
    if (a.an) {
        b0({
            id: P_,
            bb: UNa
        }, c);
        b0({
            id: Q_,
            bb: VNa
        }, c);
        Z_({
            id: R_,
            bb: WNa
        }, c);
        Z_({
            id: S_,
            bb: XNa
        }, c)
    } else {
        b0({
            id: P_,
            bb: YNa
        }, c);
        b0({
            id: Q_,
            bb: ZNa
        }, c);
        Z_({
            id: R_,
            bb: $Na
        }, c);
        Z_({
            id: S_,
            bb: aOa
        }, c)
    }
    a.an ? b0({
        id: T_,
        bb: bOa
    }, c) : b0({
        id: U_,
        bb: cOa
    }, c);b0({
        id: V_,
        bb: dOa
    }, c);a.an ? b0({
        id: U_,
        bb: cOa
    }, c) : b0({
        id: T_,
        bb: bOa
    }, c);a.an ? $_({
        id: W_,
        bb: eOa
    }, c) : $_({
        id: W_,
        bb: fOa
    }, c);
    if (a.LR && (a.GR || a.an)) if (a.an) {
        b0({
            id: X_,
            bb: gOa
        }, c);
        b0({
            id: Y_,
            bb: hOa
        }, c)
    } else {
        b0({
            id: Y_,
            bb: hOa
        }, c);
        b0({
            id: X_,
            bb: gOa
        }, c)
    }
    if (!b) return c.toString()
}
var jOa = '<div class="docs-icon goog-inline-block goog-menuitem-icon"><div class="docs-icon-img-container docs-icon-img docs-icon-no-color"></div></div>';

function kOa(a, b) {
    var c = b || new N;
    c.append(jOa, Dq);
    if (!b) return c.toString()
}
function a0(a, b) {
    var c = b || new N;
    x_({
        id: a.id,
        Vq: gv,
        Xg: nva
    }, c);
    if (!b) return c.toString()
}
function $_(a, b) {
    var c = b || new N;
    var d = {
        id: a.id,
        Ko: a.bb,
        Vq: gv,
        Xg: bO
    },
        e = c || new N,
        g = new N;
    w_(d, g);
    x_(gO(d, {
        Vq: g.toString()
    }), e);
    c || e.toString();
    if (!b) return c.toString()
}
function Z_(a, b) {
    var c = b || new N;
    lOa({
        bb: a.bb,
        id: a.id,
        $f: HN,
        label: a.label
    }, c);
    if (!b) return c.toString()
}
var mOa = "goog-toolbar-toggle-button";

function b0(a, b) {
    var c = b || new N;
    lOa({
        bb: a.bb,
        id: a.id,
        $f: HN,
        Xg: mOa,
        label: a.label
    }, c);
    if (!b) return c.toString()
}
function lOa(a, b) {
    var c = b || new N,
        d = new N;
    a.bb && w_({
        Ko: a.bb
    }, d);
    d.append(a.label ? hO(a.label) : v);
    y_({
        id: a.id,
        $f: a.$f,
        Xg: a.Xg,
        Og: d.toString()
    }, c);
    if (!b) return c.toString()
};
var nOa = '<div class="kix-equation-toolbar-icon ',
    oOa = '">&nbsp</div>';

function c0(a, b) {
    var c = b || new N;
    x_({
        id: a.id,
        Vq: nOa + hO(a.bb) + oOa,
        Xg: bO
    }, c);
    if (!b) return c.toString()
};
var pOa = "insert-equation-button",
    qOa = "New equation",
    d0 = "character-menu-button",
    rOa = "kix-equation-toolbar-icon-character",
    e0 = "misc-menu-button",
    sOa = "kix-equation-toolbar-icon-misc",
    f0 = "relation-menu-button",
    tOa = "kix-equation-toolbar-icon-relation",
    g0 = "integral-menu-button",
    uOa = "kix-equation-toolbar-icon-integral",
    h0 = "arrow-menu-button",
    vOa = "kix-equation-toolbar-icon-arrow",
    wOa = "docs-equationtoolbar",
    xOa = ' class="goog-toolbar" tabIndex=0>';

function yOa(a, b) {
    var c = b || new N,
        d = new N;
    var e = d || new N;
    Z_({
        id: pOa,
        label: qOa
    }, e);
    C_(k, e);
    c0({
        id: d0,
        bb: rOa
    }, e);
    c0({
        id: e0,
        bb: sOa
    }, e);
    c0({
        id: f0,
        bb: tOa
    }, e);
    c0({
        id: g0,
        bb: uOa
    }, e);
    c0({
        id: h0,
        bb: vOa
    }, e);
    d || e.toString();
    d = {
        id: wOa,
        Og: d.toString()
    };
    e = c || new N;
    e.append(z_, d.id ? fv + hO(d.id) + wb : v,
    xOa,
    d.Og,
    wa);
    c || e.toString();
    if (!b) return c.toString()
};

function i0() {}
s(i0, AM);
Qa(i0);
var zOa = 0;
n = i0.prototype;
n.F = function (a) {
    var b = CM(this, a);
    return a.J().F(A, b ? b.join(x) : k,
    AOa(this, a.Pc(), a.jb, a.J()))
};
var j0 = "tr",
    k0 = "-row";

function AOa(a, b, c, d) {
    for (var e = [], g = 0, h = 0; g < c.height; g++) {
        for (var j = [], m = 0; m < c.width; m++) {
            var o = b && b[h++];
            j.push(l0(a, o, d))
        }
        e.push(d.F(j0, a.Ca() + k0, j))
    }
    return a.Zz(e, d)
}
var BOa = "-table",
    COa = "tbody",
    DOa = "-body",
    EOa = "grid";
n.Zz = function (a, b) {
    var c = b.F(BQ, this.Ca() + BOa, b.F(COa, this.Ca() + DOa, a));
    c.cellSpacing = 0;
    c.cellPadding = 0;
    z.qb.Mh(c, EOa);
    return c
};
var FOa = "td",
    GOa = "-cell",
    HOa = "-cell-",
    IOa = "gridcell";

function l0(a, b, c) {
    a = c.F(FOa, {
        "class": a.Ca() + GOa,
        id: a.Ca() + HOa + zOa++
    }, b);
    z.qb.Mh(a, IOa);
    return a
}
n.Vl = function () {
    return l
};
n.gc = function () {
    return k
};
n.Xl = function (a, b) {
    if (a) {
        var c = z.oc(COa, this.Ca() + DOa, a)[0];
        if (c) {
            var d = 0;
            kc(c.rows, function (m) {
                kc(m.cells, function (o) {
                    z.Jh(o);
                    if (b) {
                        var q = b[d++];
                        q && z.appendChild(o, q)
                    }
                })
            });
            if (d < b.length) {
                for (var e = [], g = z.J(a), h = c.rows[0].cells.length; d < b.length;) {
                    var j = b[d++];
                    e.push(l0(this, j, g));
                    if (e.length == h) {
                        j = g.F(j0, this.Ca() + k0, e);
                        z.appendChild(c, j);
                        e.length = 0
                    }
                }
                if (e.length > 0) {
                    for (; e.length < h;) e.push(l0(this, v, g));
                    j = g.F(j0, this.Ca() + k0, e);
                    z.appendChild(c, j)
                }
            }
        }
        PK(a, i, y.Ua)
    }
};

function m0(a, b, c) {
    for (b = b.z(); c && c.nodeType == 1 && c != b;) {
        if (c.tagName == HC && z.ba.Pd(c, a.Ca() + GOa)) return c.firstChild;
        c = c.parentNode
    }
    return k
}
var JOa = "-cell-hover",
    KOa = "activedescendent";

function LOa(a, b, c, d) {
    if (c) {
        c = c.parentNode;
        z.ba.md(c, a.Ca() + JOa, d);
        a = b.z().firstChild;
        z.qb.Ka(a, KOa, c.id)
    }
}
var MOa = "goog-palette";
n.Ca = function () {
    return MOa
};

function n0(a, b, c) {
    HM.call(this, a, b || i0.N(), c)
}
s(n0, HM);
n = n0.prototype;
n.jb = k;
n.bm = -1;
n.Ia = k;
n.q = function () {
    n0.p.q.call(this);
    if (this.Ia) {
        this.Ia.G();
        this.Ia = k
    }
    this.jb = k
};
n.Pp = function (a) {
    n0.p.Pp.call(this, a);
    NOa(this);
    if (this.Ia) {
        this.Ia.clear();
        kva(this.Ia, a)
    } else {
        this.Ia = new TN(a);
        this.Ia.aE = r(this.Mp, this);
        So(this).C(this.Ia, HK, this.VT)
    }
    this.bm = -1
};
n.lo = function () {
    return k
};
n.Mt = function () {};
n.Yl = function (a) {
    n0.p.Yl.call(this, a);
    var b = m0(this.zc(), this, a.target);
    if (!(b && a.Ve && z.contains(b, a.Ve))) if (b != o0(this)) {
        a = this.Pc();
        p0(this, a ? jc(a, b) : -1)
    }
};
n.rs = function (a) {
    n0.p.rs.call(this, a);
    var b = m0(this.zc(), this, a.target);
    b && a.Ve && z.contains(b, a.Ve) || b == o0(this) && LOa(this.zc(), this, b, l)
};
n.ui = function (a) {
    n0.p.ui.call(this, a);
    if (FM(this, 4)) {
        a = m0(this.zc(), this, a.target);
        if (a != o0(this)) {
            var b = this.Pc();
            p0(this, b ? jc(b, a) : -1)
        }
    }
};
n.Kf = function () {
    var a = o0(this);
    if (a) {
        this.Ia && UN(this.Ia, a);
        return this.dispatchEvent(Mi)
    }
    return l
};
n.ti = function (a) {
    var b = this.Pc();
    b = b ? b.length : 0;
    var c = this.jb.width;
    if (b == 0 || !this.Ab()) return l;
    if (a.keyCode == 13 || a.keyCode == 32) return this.Kf(a);
    if (a.keyCode == 36) {
        p0(this, 0);
        return i
    } else if (a.keyCode == 35) {
        p0(this, b - 1);
        return i
    }
    var d = this.bm < 0 ? this.Ia ? VN(this.Ia) : -1 : this.bm;
    switch (a.keyCode) {
    case 37:
        if (d == -1) d = b;
        if (d > 0) {
            p0(this, d - 1);
            a.preventDefault();
            return i
        }
        break;
    case 39:
        if (d < b - 1) {
            p0(this, d + 1);
            a.preventDefault();
            return i
        }
        break;
    case 38:
        if (d == -1) d = b + c - 1;
        if (d >= c) {
            p0(this, d - c);
            a.preventDefault();
            return i
        }
        break;
    case 40:
        if (d == -1) d = -c;
        if (d < b - c) {
            p0(this, d + c);
            a.preventDefault();
            return i
        }
        break
    }
    return l
};
n.VT = function () {};

function q0(a, b, c) {
    if (a.z()) f(Error(Yo));
    a.jb = fb(b) ? new cd(b, c) : b;NOa(a)
}
function o0(a) {
    var b = a.Pc();
    return b && b[a.bm]
}
function p0(a, b) {
    if (b != a.bm) {
        OOa(a, a.bm, l);
        a.bm = b;
        OOa(a, b, i)
    }
}
n.mi = function () {
    return this.Ia ? this.Ia.mi() : k
};

function POa(a, b) {
    if (a.Ia) {
        var c = a.Ia;
        UN(c, c.a[b] || k)
    }
}
function OOa(a, b, c) {
    if (a.z()) {
        var d = a.Pc();
        d && b >= 0 && b < d.length && LOa(a.zc(), a, d[b], c)
    }
}
var QOa = "-cell-selected";
n.Mp = function (a, b) {
    this.z() && a && z.ba.md(a.parentNode, this.zc().Ca() + QOa, b)
};

function NOa(a) {
    var b = a.Pc();
    if (b) if (a.jb && a.jb.width) {
        b = Math.ceil(b.length / a.jb.width);
        if (!fb(a.jb.height) || a.jb.height < b) a.jb.height = b
    } else {
        b = Math.ceil(Math.sqrt(b.length));
        a.jb = new cd(b, b)
    } else a.jb = new cd(0, 0)
};

function r0(a, b, c) {
    wN.call(this, a, b, c)
}
s(r0, wN);
var ROa = {
    hO: pOa,
    h3: d0,
    a4: e0,
    q4: f0,
    N3: g0,
    Y2: h0
},
    s0 = {
        hO: vn
    };

function t0(a, b, c, d, e) {
    return {
        HQ: a,
        TJ: b,
        SJ: c,
        R2: d,
        U2: e
    }
}
var SOa = [t0(d0, 18, 18, 0, 30), t0(e0, 18, 18, 0, 50), t0(f0, 18, 18, 0, 70), t0(g0, 30, 54, 0, 90), t0(h0, 18, 18, 0, 150)];

function S(a, b, c, d) {
    return {
        code: a,
        Kx: b,
        Q2: c,
        T2: d
    }
}
var TOa = [
    [S("\\alpha", 0, 0, 0), S("\\beta", 0, 1, 0), S("\\gamma", 0, 2, 0), S("\\delta", 0, 3, 0), S("\\epsilon", 0, 4, 0), S("\\varepsilon", 0, 5, 0), S("\\zeta", 0, 6, 0), S("\\eta", 0, 7, 0), S("\\theta", 0, 8, 0), S("\\vartheta", 0, 9, 0), S("\\iota", 0, 10, 0), S("\\kappa", 0, 11, 0), S("\\lambda", 0, 12, 0), S("\\mu", 0, 13, 0), S("\\nu", 0, 14, 0), S("\\xi", 0, 15, 0), S("\\pi", 0, 16, 0), S("\\varpi", 0, 17, 0), S("\\rho", 0, 18, 0), S("\\varrho", 0, 19, 0), S("\\sigma", 0, 20, 0), S("\\varsigma", 0, 21, 0), S("\\tau", 0, 22, 0), S("\\upsilon", 0, 23, 0), S("\\phi", 0, 24, 0), S("\\varphi", 0, 25, 0), S("\\chi", 0, 26, 0), S("\\psi", 0, 27, 0), S("\\omega", 0, 28, 0), S("\\Gamma", 0, 29, 0), S("\\Delta", 0, 30, 0), S("\\Theta", 0, 31, 0), S("\\Lambda", 0, 32, 0), S("\\Xi", 0, 33, 0), S("\\Pi", 0, 34, 0), S("\\Sigma", 0, 35, 0), S("\\Upsilon", 0, 36, 0), S("\\Phi", 0, 37, 0), S("\\Psi", 0, 38, 0), S("\\Omega", 0, 39, 0)],
    [S("\\times", 0, 0, 0), S("\\div", 0, 1, 0), S("\\cdot", 0, 2, 0), S("\\pm", 0, 3, 0), S("\\mp", 0, 4, 0), S("\\ast", 0, 5, 0), S("\\star", 0, 6, 0), S("\\circ", 0, 7, 0), S("\\bullet", 0, 8, 0), S("\\oplus", 0, 9, 0), S("\\ominus", 0, 10, 0), S("\\oslash", 0, 11, 0), S("\\otimes", 0, 12, 0), S("\\odot", 0, 13, 0), S("\\dagger", 0, 14, 0), S("\\ddagger", 0, 15, 0), S("\\vee", 0, 16, 0), S("\\wedge", 0, 17, 0), S("\\cap", 0, 18, 0), S("\\cup", 0, 19, 0), S("\\aleph", 0, 20, 0), S("\\Re", 0, 21, 0), S("\\Im", 0, 22, 0), S("\\top", 0, 23, 0), S("\\bot", 0, 24, 0), S("\\infty", 0, 25, 0), S("\\partial", 0, 26, 0), S("\\forall", 0, 27, 0), S("\\exists", 0, 28, 0), S("\\neg", 0, 29, 0), S("\\angle", 0, 30, 0), S("\\triangle", 0, 31, 0), S("\\diamond", 0, 32, 0)],
    [S("\\leq", 0, 0, 0), S("\\geq", 0, 1, 0), S("\\prec", 0, 2, 0), S("\\succ", 0, 3, 0), S("\\preceq", 0, 4, 0), S("\\succeq", 0, 5, 0), S("\\ll", 0, 6, 0), S("\\gg", 0, 7, 0), S("\\equiv", 0, 8, 0), S("\\sim", 0, 9, 0), S("\\simeq", 0, 10, 0), S("\\asymp", 0, 11, 0), S("\\approx", 0, 12, 0), S("\\ne", 0, 13, 0), S("\\subset", 0, 14, 0), S("\\supset", 0, 15, 0), S("\\subseteq", 0, 16, 0), S("\\supseteq", 0, 17, 0), S("\\in", 0, 18, 0), S("\\ni", 0, 19, 0), S("\\notin", 0, 20, 0)],
    [S("\\frac", 2, 5, 0), S("\\sqrt", 1, 6, 0), S("\\rootof", 2, 7, 0), S("\\subsuperscript", 3, 2, 0), S("\\subscript", 2, 0, 0), S("\\superscript", 2, 1, 0), S("\\overline", 1, 3, 0), S("\\widehat", 1, 4, 0), S("\\bigcapab", 2, 8, 0), S("\\bigcupab", 2, 9, 0), S("\\prodab", 2, 10, 0), S("\\coprodab", 2, 11, 0), S("\\rbracelr", 1, 12, 0), S("\\sbracelr", 1, 13, 0), S("\\bracelr", 1, 14, 0), S("\\abs", 1, 15, 0), S("\\intab", 2, 16, 0), S("\\ointab", 2, 17, 0), S("\\sumab", 2, 18, 0), S("\\limab", 2, 19, 0)],
    [S("\\leftarrow", 0, 0, 0), S("\\rightarrow", 0, 1, 0), S("\\leftrightarrow", 0, 2, 0), S("\\Leftarrow", 0, 3, 0), S("\\Rightarrow", 0, 4, 0), S("\\Leftrightarrow", 0, 5, 0), S("\\uparrow", 0, 6, 0), S("\\downarrow", 0, 7, 0), S("\\updownarrow", 0, 8, 0), S("\\Uparrow", 0, 9, 0), S("\\Downarrow", 0, 10, 0), S("\\Updownarrow", 0, 11, 0)]
];
n = r0.prototype;
n.F = function () {
    this.ob(this.J().he(yOa({})))
};
n.We = function (a) {
    return z.ba.Pd(a, vN)
};
n.xz = function (a, b) {
    for (var c in s0) {
        var d = M(b, s0[c]);
        d && a.a(Vo(this, ROa[c]), d, xM, void 0)
    }
    for (c = 0; c < SOa.length; c++) UOa(this, a, b, SOa[c], zn, TOa[c]);
    this.la(i)
};
var VOa = "kix-equation-toolbar-palette-icon",
    WOa = "background-position: ",
    XOa = "px; ",
    YOa = "height: ",
    u0 = "kix-equation-toolbar-palette";

function ZOa(a, b) {
    for (var c = [], d = 0; d < b.length; d++) {
        var e = z.F(A, {
            "class": VOa,
            style: bc(WOa, -(a.R2 + a.TJ * b[d].Q2), qH, -(a.U2 + a.SJ * b[d].T2), XOa, Ez, a.TJ, XOa, YOa, a.SJ, ly)
        }, tN);
        e.data = {
            code: b[d].code,
            Kx: b[d].Kx
        };
        c.push(e)
    }
    c = new n0(c);
    if (c.Fl) sc(c.Fl, u0) || c.Fl.push(u0);
    else c.Fl = [u0];
    DM(c.f, c, u0, i);
    q0(c, Math.min(6, b.length));
    return c
}
function UOa(a, b, c, d, e, g) {
    var h = Vo(a, d.HQ);
    c = M(c, e);
    if (h && c) {
        d = ZOa(d, g);
        h.xd(d);
        b.a(h, c, xM, function (j) {
            return j.target.mi().data
        });
        oe(h.gb(), KM, a.yZ, undefined, a)
    }
}
n.yZ = function () {
    this.dispatchEvent($E)
};
n.zZ = function (a, b) {
    var c = a.ra().Fa(),
        d;
    if (c.O() == 0) {
        d = i;
        c = c.a;
        c = Lw(a.Y(), c)
    } else c = d = l;
    for (var e in s0) {
        var g = s0[e],
            h = (g == vn ? !c : c) && d;
        M(b, g).la(h)
    }
};

function v0(a, b, c) {
    AN.call(this, a, b || BN.N(), c)
}
s(v0, AN);
yM(FN, function () {
    return new v0(k)
});
var $Oa = "Find and replace";

function w0(a, b) {
    k_.call(this, l, b);
    this.u = a;
    this.a = new v0(k, undefined, b);
    this.ya(this.a);
    this.f = new v0(k, undefined, b);
    this.ya(this.f);
    this.n = new v0(k, undefined, b);
    this.ya(this.n);
    this.g = new v0(k, undefined, b);
    this.ya(this.g);
    this.setTitle($Oa);
    ip(this, l);
    Cp(this, k)
}
s(w0, k_);
n = w0.prototype;
n.Zj = k;
n.RD = k;
n.Cx = k;
var aPa = '<table><tr><td class="kix-findandreplacedialog-label"><label for="kix-findandreplacedialog-input">',
    bPa = "Find:",
    cPa = '</label></td><td><input class="kix-findandreplacedialog-text" id="kix-findandreplacedialog-input" type="text" maxLength="40" /></td></tr><tr><td class="kix-findandreplacedialog-label"><label for="kix-findandreplacedialog-replace-input">',
    dPa = "Replace with:",
    ePa = '</label></td><td><input class="kix-findandreplacedialog-text" id="kix-findandreplacedialog-replace-input" type="text" maxLength="40" /></td></tr><tr><td></td><td><input id="kix-findandreplacedialog-match-case" type="checkbox" /><label for="kix-findandreplacedialog-match-case">',
    fPa = "Match case",
    gPa = '</label></td></tr></table><table class="kix-findandreplacedialog-buttons-table"><tr><td>',
    hPa = "kix-findandreplacedialog-button-previous",
    iPa = "Previous",
    jPa = "kix-findandreplacedialog-button-next",
    kPa = "Next",
    lPa = '</td><td align="right">',
    mPa = "kix-findandreplacedialog-button-replace",
    nPa = "Replace",
    oPa = "kix-findandreplacedialog-button-replace-all",
    pPa = "Replace all",
    qPa = "kix-findandreplacedialog";
n.F = function () {
    w0.p.F.call(this);
    var a = this.db(),
        b;
    b = new N;
    b.append(aPa, bPa, cPa, dPa, ePa, fPa, gPa);
    A_({
        id: hPa,
        Og: iPa
    }, b);
    A_({
        id: jPa,
        Og: kPa
    }, b);
    b.append(lPa);
    A_({
        id: mPa,
        Og: nPa
    }, b);
    A_({
        id: oPa,
        Og: pPa
    }, b);
    b.append(pH);
    b = b.toString();
    a.innerHTML = b;
    z.ba.add(this.z(), qPa)
};
var rPa = "kix-findandreplacedialog-input",
    sPa = "kix-findandreplacedialog-replace-input",
    tPa = "kix-findandreplacedialog-match-case";
n.ga = function () {
    w0.p.ga.call(this);
    var a = this.J();
    this.Zj = a.z(rPa);
    this.Zj.value = v;
    this.RD = a.z(sPa);
    this.RD.value = v;
    this.Cx = a.z(tPa);
    Zo(this.a, a.z(jPa));
    this.a.la(l);
    Zo(this.f, a.z(hPa));
    this.f.la(l);
    Zo(this.n, a.z(mPa));
    this.n.la(l);
    Zo(this.g, a.z(oPa));
    this.g.la(l);
    this.Ga().C(this, zp, this.AZ).C(this.a, Mi, this.CZ).C(this.f, Mi, this.DZ).C(this.n, Mi, this.XW).C(this.g, Mi, this.WW).C(this.Zj, Sj, this.BZ)
};
n.AZ = function () {
    Ni(M(this.u, Ml))
};
n.BZ = function (a) {
    if (a.keyCode == 13) x0(this, a.Cd);
    else {
        a = this.Zj.value.length == 0;
        this.a.la(!a);
        this.f.la(!a);
        this.n.la(!a);
        this.g.la(!a)
    }
};
n.CZ = function () {
    x0(this, l)
};
n.DZ = function () {
    x0(this, i)
};
n.XW = function () {
    uPa(this, l)
};
n.WW = function () {
    uPa(this, i)
};

function x0(a, b) {
    var c = {};
    c.fb = b;
    c.ch = a.Zj.value;
    c.mc = a.Cx.checked;
    Ni(M(a.u, Rl), c)
}
function uPa(a, b) {
    var c = {};
    c.ch = a.Zj.value;
    c.mc = a.Cx.checked;
    c.rw = a.RD.value;
    Ni(M(a.u, b ? Ol : Nl), c)
}
n.X = function (a) {
    w0.p.X.call(this, a);
    a && l_(this.Zj)
};
n.q = function () {
    w0.p.q.call(this);
    delete this.u;
    delete this.Zj;
    delete this.Cx;
    delete this.a;
    delete this.f
};

function y0(a, b, c) {
    this.A = a;
    this.f = c;
    this.g = l;
    this.a = v;
    if (a = M(b, Pl)) {
        a.Za(Mi, this.pK, this);
        M(b, Ql).Za(Mi, this.YI, this)
    }
    if (c = M(b, Kl)) {
        c.Za(Mi, this.pK, this);
        M(b, Ml).Za(Mi, this.YI, this);
        M(b, Nl).Za(Mi, this.qK, this)
    }
    if (a || c) M(b, Rl).Za(Mi, this.qK, this)
}
s(y0, t);
n = y0.prototype;
var z0 = "kix-overlay-find-match";
n.qK = function (a) {
    this.g = !! a.mc;
    this.a = a.ch;
    NA(this.f, undefined, z0)
};
n.pK = function () {
    this.f.Sd(z0, r(this.IS, this))
};
n.YI = function () {
    OA(this.f, z0);
    this.a = v
};
var vPa = "kix-findandreplacemanager-match";
n.IS = function (a) {
    if (this.a.length == 0) return k;
    for (var b = BH(this.A.Y(), this.a, this.g), c = [], d = 0, e; e = b[d]; d++) if (!(e.end <= a.start)) {
        if (e.start > a.end) break;
        (e = ob(a, e)) && c.push(new jx(e, vPa))
    }
    return c
};
n.q = function () {
    y0.p.q.call(this);
    delete this.A;
    delete this.a;
    delete this.g;
    delete this.f
};

function A0(a, b) {
    var c = b || new N,
        d = new N;
    w_({
        Ko: a.bb
    }, d);
    y_({
        id: a.id,
        Og: d.toString()
    }, c);
    if (!b) return c.toString()
};
z.forms = {};
z.forms.p5 = function (a) {
    var b = new Tc;
    z.forms.qI(a, b, z.forms.NP);
    return b
};
z.forms.q5 = function (a) {
    var b = [];
    z.forms.qI(a, b, z.forms.OP);
    return b.join(Sb)
};
var wPa = "fieldset",
    xPa = "file",
    B0 = "select-multiple",
    yPa = ".x",
    zPa = ".y";
z.forms.qI = function (a, b, c) {
    for (var d = a.elements, e, g = 0; e = d[g]; g++) if (!(e.disabled || e.tagName.toLowerCase() == wPa)) {
        var h = e.name;
        switch (e.type.toLowerCase()) {
        case xPa:
        case zN:
        case cva:
        case up:
            break;
        case B0:
            e = z.forms.ea(e);
            if (e != k) for (var j, m = 0; j = e[m]; m++) c(b, h, j);
            break;
        default:
            j = z.forms.ea(e);
            j != k && c(b, h, j)
        }
    }
    d = a.getElementsByTagName(Ap);
    for (g = 0; e = d[g]; g++) if (e.form == a && e.type.toLowerCase() == Fk) {
        h = e.name;
        c(b, h, e.value);
        c(b, h + yPa, Xd);
        c(b, h + zPa, Xd)
    }
};
z.forms.NP = function (a, b, c) {
    var d = a.get(b);
    if (!d) {
        d = [];
        a.set(b, d)
    }
    d.push(c)
};
z.forms.OP = function (a, b, c) {
    a.push(encodeURIComponent(b) + Pt + encodeURIComponent(c))
};
z.forms.y5 = function (a) {
    a = a.elements;
    for (var b, c = 0; b = a[c]; c++) if (!b.disabled && b.type && b.type.toLowerCase() == xPa) return i;
    return l
};
z.forms.P1 = function (a, b) {
    if (a.tagName == Lza) for (var c = a.elements, d = 0; a = c[d]; d++) z.forms.P1(a, b);
    else {
        b == i && a.blur();
        a.disabled = b
    }
};
z.forms.co = function (a) {
    a.focus();
    a.select && a.select()
};
z.forms.z5 = function (a) {
    return !!z.forms.ea(a)
};
z.forms.A5 = function (a, b) {
    return !!z.forms.xT(a, b)
};
var APa = "checkbox",
    BPa = "select-one";
z.forms.ea = function (a) {
    var b = a.type;
    if (!p(b)) return k;
    switch (b.toLowerCase()) {
    case APa:
    case Oi:
        return z.forms.LS(a);
    case BPa:
        return z.forms.kT(a);
    case B0:
        return z.forms.jT(a);
    default:
        return p(a.value) ? a.value : k
    }
};
z.V2 = z.forms.ea;
z.forms.xT = function (a, b) {
    var c = a.elements[b];
    if (c.type) return z.forms.ea(c);
    else {
        for (var d = 0; d < c.length; d++) {
            var e = z.forms.ea(c[d]);
            if (e) return e
        }
        return k
    }
};
z.forms.LS = function (a) {
    return a.checked ? a.value : k
};
z.forms.kT = function (a) {
    var b = a.selectedIndex;
    return b >= 0 ? a.options[b].value : k
};
z.forms.jT = function (a) {
    for (var b = [], c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);
    return b.length ? b : k
};
z.forms.zb = function (a, b) {
    var c = a.type;
    if (p(c)) switch (c.toLowerCase()) {
    case APa:
    case Oi:
        z.forms.T1(a, b);
        break;
    case BPa:
        z.forms.W1(a, b);
        break;
    case B0:
        z.forms.V1(a, b);
        break;
    default:
        a.value = Za(b) ? b : v
    }
};
z.forms.T1 = function (a, b) {
    a.checked = b ? hua : k
};
z.forms.W1 = function (a, b) {
    a.selectedIndex = -1;
    if (cb(b)) for (var c, d = 0; c = a.options[d]; d++) if (c.value == b) {
        c.selected = i;
        break
    }
};
z.forms.V1 = function (a, b) {
    if (cb(b)) b = [b];
    for (var c, d = 0; c = a.options[d]; d++) {
        c.selected = l;
        if (b) for (var e, g = 0; e = b[g]; g++) if (c.value == e) c.selected = i
    }
};

function C0() {}
s(C0, xN);
Qa(C0);
n = C0.prototype;
n.F = function (a) {
    var b = {
        "class": CN + CM(this, a).join(x),
        title: a.xf() || v
    };
    return a.J().F(A, b, a.Pc())
};
n.Vl = function (a) {
    return a.tagName == sd
};
n.gc = function (a, b) {
    z.ba.add(b, jy);
    return C0.p.gc.call(this, a, b)
};
n.ea = function () {
    return k
};
var CPa = "goog-flat-button";
n.Ca = function () {
    return CPa
};
yM(CPa, function () {
    return new AN(k, C0.N())
});

function D0(a) {
    Qo.call(this, a);
    this.a = new v0(k, undefined, a);
    this.ya(this.a);
    this.f = new v0(k, undefined, a);
    this.ya(this.f);
    this.g = new AN(k, C0.N(), a);
    this.ya(this.g);
    this.L = new ze(this)
}
s(D0, Qo);
var DPa = "find",
    EPa = {
        dz: Kp,
        LN: DPa
    };
n = D0.prototype;
n.kb = l;
n.$j = k;
var FPa = '<input class="kix-findbar-text" id="kix-findbar-input" type="text" maxLength="40" />',
    GPa = "kix-findbar-button-previous",
    HPa = "kix-icon-accessible-img kix-icon-findbar-previous-sprite",
    IPa = "kix-findbar-button-next",
    JPa = "kix-icon-accessible-img kix-icon-findbar-next-sprite",
    KPa = "kix-findbar-button-close",
    LPa = "kix-icon-accessible-img kix-icon-findbar-close-sprite",
    MPa = "kix-findbar";
n.F = function () {
    D0.p.F.call(this);
    var a = this.z(),
        b;
    b = new N;
    b.append(FPa);
    A0({
        id: GPa,
        bb: HPa
    }, b);
    A0({
        id: IPa,
        bb: JPa
    }, b);
    A0({
        id: KPa,
        bb: LPa
    }, b);
    b = b.toString();
    a.innerHTML = b;
    z.ba.add(this.z(), MPa)
};
var NPa = "kix-findbar-input";
n.ga = function () {
    D0.p.ga.call(this);
    var a = this.J();
    this.$j = a.z(NPa);
    this.$j.value = v;
    Zo(this.a, a.z(IPa));
    this.a.la(l);
    Zo(this.f, a.z(GPa));
    this.f.la(l);
    Zo(this.g, a.z(KPa));
    this.g.la(i);
    this.L.C(this.g, Mi, this.EZ).C(this.a, Mi, this.GZ).C(this.f, Mi, this.HZ).C(this.$j, Sj, this.FZ)
};
n.EZ = function () {
    this.X(l);
    this.dispatchEvent(Kp)
};
n.FZ = function (a) {
    switch (a.keyCode) {
    case 27:
        this.X(l);
        this.dispatchEvent(Kp);
        return;
    case 13:
        E0(this, a.Cd);
        return
    }
    a = this.$j.value.length == 0;
    this.a.la(!a);
    this.f.la(!a);
    this.dispatchEvent(new F0(this.$j.value, l, i))
};

function E0(a, b) {
    a.dispatchEvent(new F0(a.$j.value, b, l))
}
n.GZ = function () {
    E0(this, l)
};
n.HZ = function () {
    E0(this, i)
};
n.X = function (a) {
    if (!(!this.z() || a == this.kb)) {
        this.z().style.display = a ? v : Hf;
        if (this.kb = a) {
            y.La && this.a.z().focus();
            z.forms.co(this.$j)
        }
    }
};
n.q = function () {
    D0.p.q.call(this);
    delete this.$j;
    delete this.a;
    delete this.f
};

function F0(a, b, c) {
    Pd.call(this, DPa);
    this.g = a;
    this.a = b;
    this.u = c
}
s(F0, Pd);
var OPa = "531",
    PPa = "drop";

function G0(a) {
    this.ua = a;
    this.a = y.ia || y.La && !y.Xb(OPa) && a.tagName == ck;
    this.L = new ze;
    this.L.C(this.ua, this.a ? [Qj, Ak, yk, PPa] : Ap,
    this)
}
s(G0, Pi);
G0.prototype.Ta = k;
G0.prototype.handleEvent = function (a) {
    if (this.a) {
        var b;
        if (b = a.type == Qj) {
            a: if (a.ig && !a.ctrlKey || a.fh || a.keyCode >= 112 && a.keyCode <= 123) b = l;
            else switch (a.keyCode) {
            case 18:
            case 16:
            case 17:
            case 19:
            case 20:
            case 27:
            case 33:
            case 34:
            case 36:
            case 35:
            case 37:
            case 39:
            case 38:
            case 40:
            case 45:
            case 144:
            case 93:
            case 44:
                b = l;
                break a;
            default:
                b = i;
                break a
            }
            b = !b
        }
        if (!b) {
            var c = a.type == Qj ? this.ua.value : k;QPa(this);this.Ta = Oj(function () {
                this.Ta = k;
                this.ua.value != c && RPa(this, a.Zc)
            }, 0, this)
        }
    } else if (!y.Gc || this.ua == z.wb(this.ua).activeElement) RPa(this, a.Zc)
};

function QPa(a) {
    if (a.Ta != k) {
        Pj(a.Ta);
        a.Ta = k
    }
}
function RPa(a, b) {
    var c = new Qd(b);
    c.type = Ap;
    try {
        a.dispatchEvent(c)
    } finally {
        c.G()
    }
}
G0.prototype.q = function () {
    G0.p.q.call(this);
    this.L.G();
    QPa(this);
    delete this.ua
};
var SPa = "Edit Link";

function H0(a, b, c, d, e, g) {
    k_.call(this, i, g);
    this.A = a;
    this.g = b;
    this.n = c;
    this.a = d;
    this.f = e;
    this.setTitle(SPa)
}
s(H0, k_);
n = H0.prototype;
n.Vh = 0;
n.EC = 0;
n.Wi = k;
n.Qq = k;
n.ju = k;
n.Gr = k;
n.jj = k;
n.Az = k;
n.Dg = k;
n.Vg = k;
n.Bz = k;
n.dv = k;
n.Ty = k;
n.Nv = k;
n.BE = k;
n.Zt = k;
n.gu = k;
n.Fr = k;
n.hj = l;
var TPa = '<div class="kix-dialog kix-linkdialog">',
    UPa = '<div><table><td><span class="goog-inline-block kix-linkdialog-label">',
    VPa = "Text to display:",
    WPa = '</span></td><td class="kix-linkdialog-input"><input type="text" class="kix-linkdialog-input" id="kix-linkdialog-displayed-text" /></td></table></div>',
    XPa = '<table><td class="kix-linkdialog-tab-bar"><div>',
    YPa = "Link to:",
    ZPa = '</div><div class="kix-linkdialog-tab"><input type="radio" name="kix-linkdialog-tab" checked="checked" id="kix-linkdialog-web" /><span class="goog-inline-block"><label for="kix-linkdialog-web">',
    $Pa = "<a>Web address</a>",
    aQa = '</label></span></div><div class="kix-linkdialog-tab"><input type="radio" name="kix-linkdialog-tab" id="kix-linkdialog-email" /><span class="goog-inline-block"><label for="kix-linkdialog-email">',
    bQa = "<a>Email address</a>",
    cQa = '</label></span></div><div class="kix-linkdialog-tab"><input type="radio" name="kix-linkdialog-tab" id="kix-linkdialog-bookmark" /><span class="goog-inline-block"><label for="kix-linkdialog-bookmark">',
    dQa = "<a>Bookmark</a>",
    eQa = '</label></span></div></td><td class="kix-linkdialog-tab-content">',
    fQa = '<div class="kix-linkdialog-tab-content-inner" id="kix-linkdialog-tab-web-address"><table><tr class="kix-linkdialog-heading"><td>',
    gQa = "To what URL should this link go?",
    hQa = '</td></tr><tr><td><input class="kix-linkdialog-input" type="text" id="kix-linkdialog-web-address" /></td></tr><tr id="kix-linkdialog-test-this-link"><td>',
    iQa = "<a>Test this link</a>",
    jQa = '</td></tr><tr id="kix-linkdialog-explanation"><td><span class="kix-linkdialog-heading">',
    kQa = "Not sure what to put in the box?&nbsp;",
    lQa = "First, find the page on the web that you want to link to. (A&nbsp;<a href='http://www.google.com/' target='_new'>search engine</a>&nbsp;might be useful). Then, copy the web address from the box in your browser's address bar, and paste it into the box above.",
    mQa = "</td></tr></table></div>",
    nQa = '<div class="kix-linkdialog-tab-content-inner" id="kix-linkdialog-tab-email-address"><table class="kix-linkdialog-input"><tr><td><span class="kix-linkdialog-heading">',
    oQa = "To what email address should this link?",
    pQa = '</span></td></tr><tr><td><input class="kix-linkdialog-input" type="text" id="kix-linkdialog-email-address" /></td></tr><tr><td><div id="kix-linkdialog-email-warning" class="kix-linkdialog-email-warning">',
    qQa = "Invalid email address",
    rQa = "</div></td></tr></table></div>",
    sQa = '<div class="kix-linkdialog-tab-content-inner" id="kix-linkdialog-tab-bookmark"><table class="kix-linkdialog-input" id=\'kix-linkdialog-tab-controls\'><tr><td><span class="kix-linkdialog-heading">',
    tQa = "Bookmark:",
    uQa = '</span></td></tr><tr><td><select class="kix-linkdialog-input" id="kix-linkdialog-bookmark-selector" size="8"/></td></tr></table><div id="kix-linkdialog-bookmark-nodata-label" class=\'kix-linkdialog-message\'>',
    vQa = "There are no bookmarks in this document.",
    wQa = "</td></table></div>";
n.F = function () {
    H0.p.F.call(this);
    var a = this.db(),
        b;
    b = new N;
    b.append(TPa);
    var c = b || new N;
    c.append(UPa, VPa, WPa);
    b || c.toString();
    b.append(XPa, YPa, ZPa, $Pa, aQa, bQa, cQa, dQa, eQa);
    c = b || new N;
    c.append(fQa, gQa, hQa, iQa, jQa, kQa, Re, lQa, mQa);
    b || c.toString();
    c = b || new N;
    c.append(nQa, oQa, pQa, qQa, rQa);
    b || c.toString();
    c = b || new N;
    c.append(sQa, tQa, uQa, vQa, iO);
    b || c.toString();
    b.append(wQa);
    b = b.toString();
    a.innerHTML = b
};
var xQa = "kix-linkdialog-tab-email-address",
    yQa = "kix-linkdialog-tab-web-address",
    zQa = "kix-linkdialog-tab-controls",
    AQa = "kix-linkdialog-tab-bookmark",
    BQa = "kix-linkdialog-displayed-text",
    CQa = "kix-linkdialog-bookmark-selector",
    DQa = "kix-linkdialog-bookmark-nodata-label",
    EQa = "kix-linkdialog-web-address",
    FQa = "kix-linkdialog-email-address",
    GQa = "kix-linkdialog-bookmark",
    HQa = "kix-linkdialog-web",
    IQa = "kix-linkdialog-email",
    JQa = "kix-linkdialog-test-this-link";
n.ga = function () {
    H0.p.ga.call(this);
    var a = this.J();
    this.Gr = a.z(xQa);
    this.ju = a.z(yQa);
    this.Bz = a.z(zQa);
    this.Qq = a.z(AQa);
    this.Wi = a.z(BQa);
    this.jj = a.z(CQa);
    this.Az = a.z(DQa);
    this.Dg = a.z(EQa);
    this.Vg = a.z(FQa);
    this.dv = a.z(GQa);
    this.Ty = a.z(HQa);
    this.Nv = a.z(IQa);
    this.BE = a.z(JQa);
    this.Zt = new G0(this.Wi);
    this.gu = new G0(this.Dg);
    this.Fr = new G0(this.Vg);
    this.Ga().C(this, Ep, this.MZ).C(this.gu, Ap, this.tB).C(this.Fr, Ap, this.tB).C(this.jj, Ud, this.tB).C(this.Zt, Ap, this.JX).C(this.dv, Ud, this.qU).C(this.Ty, Ud, this.VX).C(this.Nv, Ud, this.kV).C(this.BE, Ud, r(this.HX, this))
};
n.qU = function () {
    this.Vh = 2;
    I0(this)
};
n.VX = function () {
    this.Vh = 0;
    I0(this)
};
n.kV = function () {
    this.Vh = 1;
    I0(this)
};
n.X = function (a) {
    H0.p.X.call(this, a);
    if (a) {
        this.Wi.value = this.f;
        a = Pra(this.A).length > 0;
        this.Bz.style.display = a ? v : Hf;this.Az.style.display = a ? Hf : v;
        if (this.n) {
            a = this.f;
            if (Av.test(a)) {
                J0(this, 1);
                this.Vg.value = a;
                this.hj = i
            } else if (Kv(a)) {
                J0(this, 0);
                this.Dg.value = a;
                this.hj = i
            } else {
                J0(this, 0);
                if (!this.f && !this.a) this.hj = i
            }
        } else {
            if ((a = this.a) && Hb(a, dC)) {
                this.Vg.value = a.substring(a.indexOf(Sf) + 1);
                J0(this, 1)
            } else if (a && Hb(a, XZ)) {
                J0(this, 2);
                this.jj.value = a
            } else {
                this.Dg.value = zv(this.a);
                J0(this, 0)
            }
            this.hj = K0(this) == this.Wi.value
        }
    }
};
n.MZ = function (a) {
    if (a.key == Gp) {
        a = this.Wi.value;
        var b;
        switch (this.Vh) {
        case 0:
            b = this.Dg.value == zv(this.a) ? this.a : this.Dg.value;
            break;
        case 1:
            b = this.Vg.value;
            break;
        case 2:
            b = this.jj.value;
            break;
        default:
            return
        }
        a || (a = b);
        if (Jv(b)) b = Jt + Mt(Nt(b));
        else Lt(b)[1] || 0 || (b = (this.Vh == 1 ? dC : au) + b);
        Lv(this.g, a, b)
    }
};

function I0(a) {
    var b = a.Vh;
    if (b != a.EC) {
        a.EC = b;
        J0(a, b);
        a: {
            switch (b) {
            case 0:
                b = a.Dg;
                break;
            case 1:
                b = a.Vg;
                break;
            default:
                break a
            }
            b.style.width = v;
            b.style.width = b.offsetWidth + D
        }
        L0(a);
        if (a.hj) a.Wi.value = K0(a)
    }
}
n.tB = function () {
    if (this.hj) if (this.hj) this.Wi.value = K0(this);
    L0(this)
};
n.JX = function () {
    this.hj = K0(this) == this.Wi.value
};

function K0(a) {
    switch (a.Vh) {
    case 0:
        return a.Dg.value;
    case 1:
        return a.Vg.value;
    case 2:
        return a.jj.value
    }
    return v
}
var KQa = "kix-linkdialog-email-warning";

function L0(a) {
    var b;
    switch (a.Vh) {
    case 0:
        b = a.Dg.value;
        break;
    case 1:
        b = a.Vg.value;
        var c = b != v && !Av.test(b);
        a.J().z(KQa).style.visibility = c ? Gi : Kf;
        break;
    case 2:
        b = a.jj.value;
        break
    }
    Dp(a.Bc, Gp).disabled = WK(b)
}
var LQa = "Bookmark ";

function J0(a, b) {
    switch (b) {
    case 0:
        a.Qq.style.display = Hf;
        a.ju.style.display = o_;
        a.Gr.style.display = Hf;
        a.Ty.checked = i;
        break;
    case 1:
        a.Qq.style.display = Hf;
        a.ju.style.display = Hf;
        a.Gr.style.display = o_;
        a.Nv.checked = i;
        break;
    case 2:
        a.Qq.style.display = o_;
        a.ju.style.display = Hf;
        a.Gr.style.display = Hf;
        a.dv.checked = i;
        var c = a.jj;
        c.length = 0;
        for (var d = Pra(a.A), e = 0; e < d.length; e++) {
            var g = d[e],
                h = a.A,
                j = FA(h, g),
                m = h.Y(),
                o = j,
                q = j,
                u = h = l,
                w = Cg(m, j);
            j = Eg(m, j);
            for (var C = 12; C > 0 && !(h && u);) {
                if (!h) {
                    var B = iu(o, m);
                    if (B < w) h = i;
                    else {
                        o = B;
                        C--
                    }
                }
                if (!u) {
                    B = ku(q + 1, m);
                    if (B == q) {
                        B = eu(q + 1, m);
                        B = ku(B, m)
                    } else B = B;
                    if (B >= j) {
                        u = i;
                        if (B > j) continue
                    }
                    q = B - 1;
                    C--
                }
            }
            m = m.slice(o, q);
            c.options[e] = new Option(LQa + (e + 1 + (ta + (h && u ? m : u ? VK + m : h ? m + VK : VK + (m + VK)))), XZ + g, l, l)
        }
    }
    a.EC = a.Vh = b;
    L0(a);
    switch (b) {
    case 0:
        l_(a.Dg);
        break;
    case 1:
        l_(a.Vg);
        break
    }
}
var MQa = "The URL is not valid and cannot be loaded.";
n.HX = function () {
    var a = K0(this);
    /^[^:\/?#.]+:/.test(a) || (a = au + Kb(a));
    if (Kv(a)) {
        var b = this.J().fc(),
            c = z.fe(b);
        xR(a, {
            target: YB,
            width: Math.max(c.width - 50, 50),
            height: Math.max(c.height - 50, 50),
            toolbar: i,
            scrollbars: i,
            location: i,
            statusbar: l,
            menubar: i,
            Q5: i,
            J5: i
        }, b)
    } else alert(MQa)
};
n.q = function () {
    H0.p.q.call(this);
    delete this.A;
    delete this.g;
    delete this.Gr;
    delete this.ju;
    delete this.Wi;
    delete this.Dg;
    delete this.jj;
    delete this.Az;
    delete this.dv;
    delete this.Qq;
    delete this.Bz;
    delete this.Vg;
    delete this.Ty;
    delete this.Nv;
    delete this.BE;
    this.Zt && this.Zt.G();
    delete this.Zt;
    this.gu && this.gu.G();
    delete this.gu;
    this.Fr && this.Fr.G();
    delete this.Fr
};
var NQa = "File",
    OQa = "View",
    PQa = "Insert",
    QQa = "Format",
    RQa = "Tools",
    SQa = "Table",
    TQa = "Help";

function UQa(a, b) {
    var c = b || new N;
    var d = c || new N;
    B_({
        id: pk,
        label: NQa
    }, d);
    c || d.toString();
    d = c || new N;
    B_({
        id: uk,
        label: sC
    }, d);
    c || d.toString();
    d = c || new N;
    B_({
        id: Ok,
        label: OQa
    }, d);
    c || d.toString();
    if (a.e5) {
        d = c || new N;
        B_({
            id: Ck,
            label: PQa
        }, d);
        c || d.toString();
        d = c || new N;
        B_({
            id: Gk,
            label: QQa
        }, d);
        c || d.toString();
        if (a.g5) {
            d = c || new N;
            B_({
                id: Rk,
                label: RQa
            }, d);
            c || d.toString()
        }
        if (a.f5) {
            d = c || new N;
            B_({
                id: Sk,
                label: SQa
            }, d);
            c || d.toString()
        }
    }
    d = c || new N;
    B_({
        id: Tk,
        label: TQa
    }, d);
    c || d.toString();
    if (!b) return c.toString()
};

function M0() {}
s(M0, AM);
Qa(M0);
n = M0.prototype;
n.Vl = function (a) {
    return a.tagName == sd && !a.firstChild
};
n.gc = function (a, b) {
    M0.p.gc.call(this, a, b);
    VQa(this, a, b);
    N0(this, a, b);
    return b
};

function N0(a, b, c) {
    a = b.jb;
    c.style.width = a.width + qa;
    var d = c.firstChild.childNodes[1];
    d.style.width = a.width + qa;
    d.style.height = a.height + qa;
    if (jK(b)) if (b = b.ib) {
        c = b.z();
        b = c.style[tK($i)];
        if (b == v) {
            b = new bd(c.offsetLeft, c.offsetTop);
            a = Mf(c);
            if (a.width != 0 && b.x != 0) {
                b = QK(wf()).width - b.x - a.width;
                SK(c, $i, b + D)
            }
        }
        c.style[tK(sf)] != v && SK(c, sf, v)
    } else SK(c, $i, ya)
}
var WQa = "-mousecatcher",
    XQa = "-unhighlighted",
    YQa = "width:100%;height:100%",
    ZQa = "-highlighted",
    $Qa = "-status",
    aRa = "\u202a0 x 0\u202c";

function VQa(a, b, c) {
    var d = b.J().F(sd, a.Ca() + WQa),
        e = b.J().F(sd, {
            "class": a.Ca() + XQa,
            style: YQa
        }),
        g = b.J().F(sd, a.Ca() + ZQa);
    c.appendChild(b.J().F(sd, {
        style: YQa
    }, d, e, g));
    c.appendChild(b.J().F(sd, a.Ca() + $Qa, aRa))
}
n.F = function (a) {
    var b = CM(this, a);
    b = a.J().F(sd, {
        "class": b ? b.join(x) : v
    });
    VQa(this, a, b);
    N0(this, a, b);
    return b
};
n.hh = function (a) {
    M0.p.hh.call(this, a);
    O0(this, a)
};

function O0(a, b) {
    var c;
    c = b.z().firstChild.firstChild;
    var d = z.wb(c),
        e = d.body,
        g = Esa(c, e);
    c.style.display = Hf;
    var h = jK(b) && g.x > 0 ? Math.floor(g.x / 18) : Math.floor((e.scrollWidth - g.x) / 18);
    if (y.ia) e = wf(e).scrollHeight - 20;
    else {
        d = z.fc(d);
        e = Math.max(d.innerHeight, e.scrollHeight) - 20
    }
    g = Math.floor((e - g.y) / 18);c.style.width = Math.min(b.aD, h) + qa;c.style.height = Math.min(b.bD, g) + qa;c.style.display = v;
    if (jK(b)) c.style.right = Xd
}
var bRa = "goog-dimension-picker";
n.Ca = function () {
    return bRa
};

function P0(a, b) {
    HM.call(this, k, a || M0.N(), b);
    this.jb = new cd(this.QK, this.RK)
}
s(P0, HM);
n = P0.prototype;
n.QK = 5;
n.RK = 5;
n.aD = 20;
n.bD = 20;
n.ws = 0;
n.vs = 0;
n.ga = function () {
    P0.p.ga.call(this);
    var a = So(this);
    a.C(this.z().firstChild, Fo, this.NI).C(this.J().fc(), yp, this.uJ);
    var b = this.ib;
    b && a.C(b, JM, this.pJ)
};
n.pb = function () {
    P0.p.pb.call(this);
    var a = So(this);
    a.a(this.z().firstChild, Fo, this.NI).a(this.J().fc(), yp, this.uJ);
    var b = this.ib;
    b && a.a(b, JM, this.pJ)
};
n.pJ = function () {
    this.Da() && this.zb(0, 0)
};
n.q = function () {
    P0.p.q.call(this);
    delete this.jb
};
n.NI = function (a) {
    var b;
    b = jK(this) ? a.target.offsetWidth - a.aB : a.aB;b = Math.min(this.aD, Math.ceil(b / 18));a = Math.min(this.bD, Math.ceil(a.HI / 18));
    if (this.vs != b || this.ws != a) this.zb(b, a)
};
n.uJ = function () {
    O0(this.zc(), this)
};
n.ti = function (a) {
    var b = this.ws,
        c = this.vs;
    switch (a.keyCode) {
    case 40:
        b = Math.min(this.bD, b + 1);
        break;
    case 38:
        b = Math.max(1, b - 1);
        break;
    case 37:
        if (c == 1) return l;
        else c = Math.max(1, c - 1);
        break;
    case 39:
        c = Math.min(this.aD, c + 1);
        break;
    default:
        return P0.p.ti.call(this, a)
    }
    this.zb(c, b);
    return i
};
n.ea = function () {
    return new cd(this.vs, this.ws)
};
var cRa = "\u202a",
    dRa = " x ",
    eRa = "\u202c";
n.zb = function (a, b) {
    if (!p(b)) {
        b = a.height;
        a = a.width
    }
    if (this.vs != a || this.ws != b) {
        var c = this.zc();
        this.jb.width = Math.max(a, this.QK);
        this.jb.height = Math.max(b, this.RK);
        N0(c, this, this.z());
        this.vs = a;
        this.ws = b;
        c = a;
        var d = b,
            e = this.z(),
            g = e.firstChild.lastChild.style;
        g.width = c + qa;
        g.height = d + qa;
        if (jK(this)) g.right = Xd;
        z.Ud(e.lastChild, cRa + (c + dRa + d) + eRa)
    }
};
yM(bRa, function () {
    return new P0
});

function Q0(a, b) {
    YM.call(this, a, undefined, b);
    dN(this, i)
}
s(Q0, AR);
n = Q0.prototype;
n.F = function () {
    this.ob(this.J().he(UQa()))
};
n.We = function (a) {
    return z.ba.Pd(a, XM)
};
n.TQ = function (a, b, c, d) {
    if (!jf(a)) {
        var e = [];
        WQ(c, K.iO.ma(), [M(d, fm), M(d, sm), a.n ? M(d, vn) : e,
        a.cc ? M(d, gm) : e,
        k,
        a.u ? M(d, On) : e,
        a.aa ? M(d, Hn) : e,
        k,
        a.Qu ? M(d, im) : e,
        M(d, cm),
        k,
        a.Ya ? M(d, Ln) : e,
        a.Oa ? M(d, Bn) : e,
        a.Oa ? M(d, En) : e,
        a.Cb ? M(d, Wn) : e,
        a.Su ? M(d, an) : e]);
        e = [];
        if (a.Ig && (a.JD || a.xa)) {
            if (a.xa) {
                e.push(M(d, en));
                e.push(M(d, dn))
            } else {
                e.push(M(d, dn));
                e.push(M(d, en))
            }
            e.push(k)
        }
        e = e.concat([K.Ok, K.Qk, K.Vk, K.Gq, K.Iq, K.Hq, k, M(d, pn), M(d, mn), M(d, nn), M(d, El), k]);
        if (a.fY) {
            var g = M(d, rn);
            if (g) {
                e = e.concat([g, k]);
                g.hd(i)
            }
        }
        e.push(M(d, Gl));
        WQ(c, K.MN.ma(), e);
        e = [];
        WQ(c, mn, [M(d, a.xa ? Qm : Om), M(d, Mm), M(d, a.xa ? Om : Qm), a.tF ? M(d, Sm) : e]);
        WQ(c, nn, [M(d, ym), M(d, xm), M(d, wm), M(d, um), k, M(d, Ym), M(d, Wm)]);
        WQ(c, pn, [M(d, am), M(d, Km), k, M(d, Sl), M(d, Vl), M(d, Wl), M(d, Xl), M(d, Yl), M(d, Zl), M(d, $l)]);
        WQ(c, El, [M(d, zl), M(d, Bl), M(d, Cl), k, M(d, Fm), M(d, Hm), M(d, Jm), M(d, Gm), M(d, Im)]);
        if (a.AF) if (a.AF) {
            e = [];
            a.sD && e.push(M(d, lm), k);
            a.MC && e.push(M(d, nm));
            a.yD && e.push(M(d, qm));
            e.length > 0 && WQ(c, K.rP.ma(), e)
        }
        if (a.a) if (a.a) {
            e = [M(d, bo), k, M(d, jo), M(d, lo), M(d, no), M(d, po), k, M(d, co), M(d, ho), M(d, fo)];
            a.f && e.push(k, M(d, ro));
            WQ(c, K.pP.ma(), e)
        }
    }
    a.Lu && WQ(c, K.tu.ma(), [M(d, ol), M(d, pl), M(d, ql), M(d, rl), M(d, sl), M(d, tl)]);
    a.Dq && WQ(c, K.eG.ma(), [M(d, jl)]);
    e = [];
    a.An && e.push(M(d, kl));
    a.nD && e.push(M(d, ll));
    e.length > 0 && WQ(c, K.SF.ma(), e);
    WQ(c, bo, [r(this.PP, this, b, d)]);
    a.Wc && a.g == 4 && WQ(c, K.uF.ma(), [M(d, Kl)]);
    b = [];
    a.u && b.push(M(d, ml));
    a.Aa && b.push(M(d, fn));
    if (a.n) if (e = M(d, tn)) {
        b.push(e);
        e.hd(l)
    }
    if (a.Aq) if (a = M(d, ln)) {
        b.push(a);
        a.hd(i)
    }
    b.length > 0 && WQ(c, K.CP.ma(), b);
    WQ(c, K.zq.ma(), [K.Du, K.Gu, K.NF, K.Fu, K.Eu, mR(c, K.gz.ma())]);
    WQ(c, K.KN.ma(), [K.zq, K.OPEN, mR(c, K.eG.ma()), K.Lq, k, K.Uk, k, mR(c, K.JN.ma()), K.Tk, K.yq, K.tu, K.dj, k, mR(c, K.SF.ma()), K.Sk, K.Rk]);
    WQ(c, K.DN.ma(), [K.Kq, K.Eq, k, K.Gg, K.Fg, K.Rh, mR(c, K.rN.ma()), k, K.Bn, K.YF, k, mR(c, K.uF.ma())]);
    WQ(c, K.RN.ma(), [K.uu, K.vu, K.wu, K.xn, k, mR(c, K.QN.ma()), K.yn])
};
n.PP = function (a, b, c) {
    var d = new P0(undefined, this.J());
    qe(d, Ui, function () {
        O0(this.zc(), this)
    });
    a.a(d, M(b, $n), Zta, r(d.ea, d));
    c.ya(d, i)
};
n.Ze = function (a) {
    Q0.p.Ze.call(this, a);
    this.dispatchEvent($E)
};
yM("menu-button", function () {
    return new QN(k, k, AM.N())
});
var fRa = "Upgrade Document?";

function R0(a, b) {
    k_.call(this, i, b);
    this.a = a;
    this.setTitle(fRa)
}
s(R0, k_);
var gRa = '<div class="kix-dialog-content">',
    hRa = "Once you upgrade this document you will not be able to go back to the old Google Docs format.",
    iRa = '</div><div class="kix-dialog-content">',
    jRa = 'Do you wish to proceed? <a href="#">More info</a>.';
R0.prototype.F = function () {
    R0.p.F.call(this);
    var a = this.db(),
        b;
    b = new N;
    b.append(gRa, hRa, iRa, jRa, wa);
    b = b.toString();
    a.innerHTML = b
};
R0.prototype.ga = function () {
    R0.p.ga.call(this);
    Cp(this, dp);
    this.Ga().C(this, Ep, this.f)
};
R0.prototype.f = function (a) {
    if (a.key == Gp) window.location = this.a
};
var kRa = "Help us improve document upgrades";

function S0(a, b) {
    k_.call(this, i, b);
    this.a = a;
    this.setTitle(kRa)
}
s(S0, k_);
var lRa = "Why didn't you upgrade this document to the new version?",
    mRa = "Example: My header which used to be centered, was justified left.",
    nRa = '</div><div class="kix-dialog-content"><textarea id="kix-migrationdeclinedialog-feedback"></textarea></div>';
S0.prototype.F = function () {
    S0.p.F.call(this);
    var a = this.db(),
        b;
    b = new N;
    b.append(gRa, lRa, iRa, mRa, nRa);
    b = b.toString();
    a.innerHTML = b
};
var oRa = "kix-migrationdeclinedialog-submit",
    pRa = "Send Feedback",
    qRa = "kix-migrationdeclinedialog-skip",
    rRa = "No Thanks";
S0.prototype.ga = function () {
    S0.p.ga.call(this);
    var a = new xp;
    a.set(oRa, pRa, i);
    a.set(qRa, rRa, i);
    Cp(this, a);
    this.Ga().C(this, Ep, this.f)
};
S0.prototype.f = function (a) {
    if (a.key == oRa || a.key == qRa) window.location = this.a
};
var sRa = "Numbering";

function T0(a, b, c, d) {
    k_.call(this, i, d);
    this.f = a;
    this.g = b;
    this.a = c;
    this.setTitle(sRa)
}
s(T0, k_);
n = T0.prototype;
n.np = k;
var tRa = "Restart numbering at",
    uRa = '</div><div class="goog-inline-block"><input id="kix-numberingdialog-number-value" type="text" maxLength="4" /></div>';
n.F = function () {
    T0.p.F.call(this);
    var a = this.db(),
        b;
    b = new N;
    b.append(YZ, tRa, uRa);
    b = b.toString();
    a.innerHTML = b
};
var vRa = "kix-numberingdialog-number-value";
n.ga = function () {
    T0.p.ga.call(this);
    this.np = this.J().z(vRa);
    this.np.value = this.g;
    this.Ga().C(this, Ep, this.PZ)
};
n.PZ = function (a) {
    if (a.key == Gp && this.np) {
        a = this.f;
        var b = jsa(this.np.value, a),
            c = 0;
        if (sc(a, 1) || sc(a, 2)) c = 1;
        b = Math.max(c, Xa(b) ? 1 : b);
        this.a(b)
    }
};
n.X = function (a) {
    T0.p.X.call(this, a);
    a && l_(this.np)
};
n.q = function () {
    T0.p.q.call(this);
    delete this.f;
    delete this.a;
    delete this.np
};

function U0(a, b, c) {
    this.code = a;
    this.width = b;
    this.height = c;
    this.a = this.height > this.width
}
var V0 = [new U0("letter", 612, 792), new U0("letter", 792, 612), new U0("tabloid", 792, 1224), new U0("tabloid", 1224, 792), new U0("legal", 612, 1008), new U0("legal", 1008, 612), new U0("A3", 297 * Je, 420 * Je), new U0("A3", 420 * Je, 297 * Je), new U0("A4", 210 * Je, 297 * Je), new U0("A4", 297 * Je, 210 * Je)];
var wRa = "inches",
    xRa = "cm";

function W0(a, b) {
    var c = b || new N;
    if (a.kc == 0) c.append(wRa);
    else a.kc == 1 && c.append(xRa);
    if (!b) return c.toString()
};

function X0(a, b, c) {
    this.a = a || [];
    n0.call(this, k, b || i0.N(), c);
    this.a = this.a;
    this.g = k;
    uM(this, yRa(this))
}
s(X0, n0);
X0.prototype.g = k;
var zRa = "background-color";
X0.prototype.li = function () {
    var a = this.mi();
    if (a) {
        a = a.style[tK(zRa)];
        return Y0(a)
    } else return k
};
X0.prototype.Ot = function (a) {
    a = Y0(a);
    if (!this.g) this.g = nc(this.a, function (b) {
        return Y0(b)
    });
    POa(this, a ? jc(this.g, a) : -1)
};
var ARa = "-colorswatch",
    BRa = "RGB (";

function yRa(a) {
    return nc(a.a, function (b) {
        var c = this.J().F(A, {
            "class": this.zc().Ca() + ARa,
            style: AC + b
        });
        if (b.charAt(0) == Jt) {
            b = b;
            b = ow(b);
            b = BRa + [parseInt(b.substr(1, 2), 16), parseInt(b.substr(3, 2), 16), parseInt(b.substr(5, 2), 16)].join(hz) + Of
        } else b = b;
        c.title = b;
        return c
    }, a)
}
function Y0(a) {
    if (a) try {
        return CK(a).us
    } catch (b) {}
    return k
};

function Z0(a, b) {
    Qo.call(this, a);
    this.a = b || k;
    So(this).C(this, Mi, this.l0)
}
s(Z0, Qo);
n = Z0.prototype;
n.JI = i;
n.li = function () {
    return this.a ? this.a.li() : k
};
n.Ot = function (a) {
    this.a && this.a.Ot(a)
};
n.We = function () {
    return l
};
n.ga = function () {
    Z0.p.ga.call(this);
    this.a && this.a.Ja(this.z());
    this.z().unselectable = ve
};
n.q = function () {
    Z0.p.q.call(this);
    if (this.a) {
        this.a.G();
        this.a = k
    }
};
n.focus = function () {
    this.a && this.a.z().focus()
};
n.l0 = function (a) {
    a.stopPropagation();
    this.dispatchEvent(Li)
};

function CRa(a, b) {
    var c = new X0(b, k, a.J());
    q0(c, 5);
    NM(c, 32, a.JI);
    a.ya(c);
    a.a = c;
    a.cb && a.a.Ja(a.z())
}
var DRa = ["#ffffff", "#cccccc", "#c0c0c0", "#999999", "#666666", "#333333", di, "#ffcccc", "#ff6666", "#ff0000", "#cc0000", "#990000", "#660000", "#330000", "#ffcc99", "#ff9966", "#ff9900", "#ff6600", "#cc6600", "#993300", "#663300", "#ffff99", "#ffff66", "#ffcc66", "#ffcc33", "#cc9933", "#996633", "#663333", "#ffffcc", "#ffff33", "#ffff00", "#ffcc00", "#999900", "#666600", "#333300", "#99ff99", "#66ff99", "#33ff33", "#33cc00", "#009900", "#006600", "#003300", "#99ffff", "#33ffff", "#66cccc", "#00cccc", "#339999", "#336666", "#003333", "#ccffff", "#66ffff", "#33ccff", "#3366ff", "#3333ff", ysa, "#000066", "#ccccff", "#9999ff", "#6666cc", "#6633ff", "#6600cc", "#333399", "#330099", "#ffccff", "#ff99ff", "#cc66cc", "#cc33cc", "#993399", "#663366", "#330033"];

function $0(a, b) {
    Qo.call(this, a);
    if (b) this.Ye = b
}
s($0, Qo);
n = $0.prototype;
n.pB = l;
n.Ye = k;
n.ug = k;
n.N0 = 4;
n.XT = 5;
n.Bm = k;
n.OI = i;
n.WT = i;
n.ZT = i;
var ERa = "goog-popupcolorpicker";
n.F = function () {
    $0.p.F.call(this);
    var a = this.ug = new sR(this.z());
    a.Ya = this.N0;
    a.Da() && a.dm();
    z.ba.set(this.z(), ERa);
    this.z().unselectable = ve
};
n.q = function () {
    $0.p.q.call(this);
    this.Bm = this.Ye = k;
    this.pB = l;
    if (this.ug) {
        this.ug.G();
        this.ug = k
    }
};
n.We = function () {
    return l
};

function a1(a, b) {
    So(a).C(b, Co, a.YT)
}
n.li = function () {
    return this.Ye.li()
};
n.YT = function (a) {
    if (!this.pB) {
        var b;
        if (!(b = this.Ye)) {
            b = this.J();
            b = new Z0(b);
            b.a || CRa(b, []);
            q0(b.a, 7);
            if (b.a) {
                var c = b.a;
                c.a = DRa;
                c.g = k;
                uM(c, yRa(c))
            } else CRa(b, DRa);
            b = b
        }
        b = this.Ye = b;
        c = this.WT;
        b.JI = c;
        b.a && NM(b.a, 32, c);
        this.ya(this.Ye, i);
        So(this).C(this.Ye, Li, this.m0);
        this.pB = i
    }
    if ((this.ug.nm || lb() - this.ug.QC < 150) && this.ZT && this.Bm == a.currentTarget) this.ug.X(l);
    else {
        this.Bm = a.currentTarget;
        tR(this.ug, new MN(this.Bm, this.XT));
        if (!this.a) {
            a = this.Ye;
            a.a && POa(a.a, -1)
        }
        this.ug.X(i);
        this.OI && this.Ye.focus()
    }
};
n.m0 = function (a) {
    if ((this.Ye.a ? this.Ye.a.Ia ? VN(this.Ye.a.Ia) : -1 : -1) == -1) a.stopPropagation();
    else {
        this.ug.X(l);
        this.OI && this.Bm.focus()
    }
};
var FRa = "Page setup";

function b1(a, b, c) {
    k_.call(this, i, c);
    this.f = a;
    this.A = b;
    this.setTitle(FRa);
    (this.a = this.A.f.Ou ? new $0 : k) && this.ya(this.a)
}
s(b1, k_);
n = b1.prototype;
n.xx = k;
n.yx = k;
n.zx = k;
n.Ax = k;
n.xD = k;
n.ut = k;
n.zD = k;
n.Pm = k;
n.Qm = k;
var GRa = '<div class="kix-pagesetupdialog-content"><div class="kix-pagesetupdialog-content-side goog-inline-block">',
    c1 = '<div class="kix-pagesetupdialog-section"><div class="kix-pagesetupdialog-title">',
    HRa = "Orientation:",
    IRa = '</div><div><div class="kix-pagesetupdialog-control goog-inline-block"><input type="radio" name="kix-pagesetupdialog-orientation" value="portrait" id="kix-pagesetupdialog-orientation-portrait" /></div><div class="kix-pagesetupdialog-label goog-inline-block"><label for="kix-pagesetupdialog-orientation-portrait">',
    JRa = "Portrait",
    KRa = '</label></div></div><div><div class="kix-pagesetupdialog-control goog-inline-block"><input type="radio" name="kix-pagesetupdialog-orientation" value="landscape" id="kix-pagesetupdialog-orientation-landscape" /></div><div class="kix-pagesetupdialog-label goog-inline-block"><label for="kix-pagesetupdialog-orientation-landscape">',
    LRa = "Landscape",
    MRa = "</label></div></div></div>",
    NRa = '<div class="kix-pagesetupdialog-section"><div class="kix-pagesetupdialog-title"><label for="kix-pagesetupdialog-paper-size">',
    ORa = "Paper Size:",
    PRa = '</label></div><div class="kix-pagesetupdialog-control goog-inline-block"><select id="kix-pagesetupdialog-paper-size"><option value="letter">',
    QRa = 'Letter (8.5" x 11")',
    RRa = '</option><option value="tabloid">',
    SRa = 'Tabloid (11" x 17")',
    TRa = '</option><option value="legal">',
    URa = 'Legal (8.5" x 14")',
    VRa = '</option><option value="A3">',
    WRa = "A3 (297mm x 420mm)",
    XRa = '</option><option value="A4">',
    YRa = "A4 (210mm x 297mm)",
    ZRa = "</option></select></div></div>",
    $Ra = '</div><div class="kix-pagesetupdialog-content-side goog-inline-block">',
    aSa = "Margins:",
    bSa = '</div><div><div class="kix-pagesetupdialog-margin-label goog-inline-block"><label for="kix-pagesetupdialog-margin-top">',
    cSa = "Top:",
    dSa = '</label></div><div class="kix-pagesetupdialog-control goog-inline-block"><input type="text" class="kix-pagesetupdialog-margin-input" id="kix-pagesetupdialog-margin-top"/><div class="kix-pagesetupdialog-margin-label goog-inline-block">',
    eSa = '</div></div></div><div><div class="kix-pagesetupdialog-margin-label goog-inline-block"><label for="kix-pagesetupdialog-margin-bottom">',
    fSa = "Bottom:",
    gSa = '</label></div><div class="kix-pagesetupdialog-control goog-inline-block"><input type="text" class="kix-pagesetupdialog-margin-input" id="kix-pagesetupdialog-margin-bottom" /><div class="kix-pagesetupdialog-margin-label goog-inline-block">',
    hSa = '</div></div></div><div><div class="kix-pagesetupdialog-margin-label goog-inline-block"><label for="kix-pagesetupdialog-margin-left">',
    iSa = "Left:",
    jSa = '</label></div><div class="kix-pagesetupdialog-control goog-inline-block"><input type="text" class="kix-pagesetupdialog-margin-input" id="kix-pagesetupdialog-margin-left" /><div class="kix-pagesetupdialog-margin-label goog-inline-block">',
    kSa = '</div></div></div><div><div class="kix-pagesetupdialog-margin-label goog-inline-block"><label for="kix-pagesetupdialog-margin-right">',
    lSa = "Right:",
    mSa = '</label></div><div class="kix-pagesetupdialog-control goog-inline-block"><input type="text" class="kix-pagesetupdialog-margin-input" id="kix-pagesetupdialog-margin-right" /><div class="kix-pagesetupdialog-margin-label goog-inline-block">',
    nSa = "</div></div></div></div>",
    oSa = "Page Color:",
    pSa = '</div><div class="kix-pagesetupdialog-control goog-inline-block"><div id="kix-pagesetupdialog-page-color" class="kix-pagesetupdialog-colorpicker"></div></div></div>';
n.F = function () {
    b1.p.F.call(this);
    var a = this.A.f,
        b = this.db();
    var c = {
        kc: lK(this.A.f).O(),
        KR: a.Ou
    };
    a = new N;
    a.append(GRa);
    var d = a || new N;
    d.append(c1, HRa, IRa, JRa, KRa, LRa, MRa);
    a || d.toString();
    d = a || new N;
    d.append(NRa, ORa, PRa, QRa, RRa, SRa, TRa, URa, VRa, WRa, XRa, YRa, ZRa);
    a || d.toString();
    a.append($Ra);
    d = a || new N;
    d.append(c1, aSa, bSa, cSa, dSa);
    W0({
        kc: c.kc
    }, d);
    d.append(eSa, fSa, gSa);
    W0({
        kc: c.kc
    }, d);
    d.append(hSa, iSa, jSa);
    W0({
        kc: c.kc
    }, d);
    d.append(kSa, lSa, mSa);
    W0({
        kc: c.kc
    }, d);
    d.append(nSa);
    a || d.toString();
    if (c.KR) {
        c = a || new N;
        c.append(c1, oSa, pSa);
        a || c.toString()
    }
    a.append(iO);
    a = a.toString();
    b.innerHTML = a
};
var qSa = "kix-pagesetupdialog-margin-bottom",
    rSa = "kix-pagesetupdialog-margin-left",
    sSa = "kix-pagesetupdialog-margin-right",
    tSa = "kix-pagesetupdialog-margin-top",
    uSa = "kix-pagesetupdialog-orientation-landscape",
    vSa = "kix-pagesetupdialog-orientation-portrait",
    wSa = "kix-pagesetupdialog-page-color",
    xSa = "kix-pagesetupdialog-paper-size";
n.ga = function () {
    b1.p.ga.call(this);
    var a = this.Bc,
        b = new xp;
    Uc(b, a);
    b.pj = k;
    b.il = a.il;
    Cp(this, b);
    a = this.J();
    this.xx = a.z(qSa);
    this.yx = a.z(rSa);
    this.zx = a.z(sSa);
    this.Ax = a.z(tSa);
    this.xD = a.z(uSa);
    this.ut = a.z(vSa);
    this.Pm = a.z(wSa);
    this.Qm = a.z(xSa);
    if (this.a) {
        this.a.Ja();
        a1(this.a, this.Pm)
    }
    a: {
        var c;
        b: {
            b = Yz(this.A);
            a = b.ea(Ps);
            b = b.ea(Qs);
            for (c in V0) {
                var d = V0[c];
                if (Math.abs(d.width - a) <= 0.001 && Math.abs(d.height - b) <= 0.001) {
                    c = d;
                    break b
                }
            }
            c = k
        }
        if (c) {
            this.ut.checked = c.a;
            this.xD.checked = !c.a;
            a = this.Qm.options;
            for (b =
            0; b < a.length; ++b) if (a[b].value == c.code) {
                this.Qm.selectedIndex = b;
                break a
            }
        }
        this.Qm.selectedIndex = 0;this.ut.checked = i
    }
    c = Yz(this.A);this.xx.value = d1(mK(lK(this.A.f), c.hk));this.yx.value = d1(mK(lK(this.A.f), c.Em));this.zx.value = d1(mK(lK(this.A.f), c.Fm));this.Ax.value = d1(mK(lK(this.A.f), c.Eh));c = Yz(this.A).g;
    if (this.Pm) this.Pm.style.backgroundColor = c.Cj() || oB;this.Ga().C(this, Ep, this.QZ);this.a && this.Ga().C(this.a, Li, this.RZ)
};
n.QZ = function (a) {
    if (a.key != vp) {
        a = this.Qm.options[this.Qm.selectedIndex];
        var b;
        if (a) a: {
            for (var c in V0) {
                b = V0[c];
                if (b.code == a.value && b.a == this.ut.checked) {
                    b = b;
                    break a
                }
            }
            b = k
        }
        b || (b = V0[0]);c = {};c.ph = b.height;c.pw = b.width;b = e1(this, this.xx);a = e1(this, this.yx);
        var d = e1(this, this.zx),
            e = e1(this, this.Ax);c.mb = nK(lK(this.A.f), b);c.ml = nK(lK(this.A.f), a);c.mr = nK(lK(this.A.f), d);c.mt = nK(lK(this.A.f), e);Ni(M(this.f, Hl), c);c = this.zD;b = Yz(this.A).g;c != b.Cj.call(b) && Ni(M(this.f, Il), this.zD)
    }
};
n.RZ = function () {
    var a = this.a.li() || v;
    if (this.a.Bm) {
        if (this.Pm) this.Pm.style.backgroundColor = a;
        this.zD = a
    }
};

function d1(a) {
    return Math.round(a * 100) / 100
}
function e1(a, b) {
    if (b) {
        var c = parseFloat(b.value);
        if (c) return Math.max(isFinite(c) && !isNaN(c) ? d1(c) : 0,
        0)
    }
    return 0
}
n.q = function () {
    b1.p.q.call(this);
    delete this.f;
    delete this.a;
    delete this.A;
    delete this.xx;
    delete this.yx;
    delete this.zx;
    delete this.Ax;
    delete this.xD;
    delete this.ut;
    delete this.Pm;
    delete this.Qm
};
var ySa = "Print settings";

function f1(a, b, c) {
    k_.call(this, i, c);
    this.A = a;
    this.a = b;
    this.setTitle(ySa)
}
s(f1, k_);
n = f1.prototype;
n.Pn = k;
n.fo = k;
n.mk = k;
n.Li = k;
var zSa = '<div class="kix-printsettingsdialog-content">',
    ASa = '<div id="kix-printsettingsdialog-tab-annotations">',
    BSa = '<div><div class="kix-printsettingsdialog-title">',
    CSa = "Annotations",
    DSa = '</div><div class="kix-printsettingsdialog-control goog-inline-block"><input type="checkbox" id="kix-printsettingsdialog-page-numbers" /></div><div class="kix-printsettingsdialog-label goog-inline-block"><label for="kix-printsettingsdialog-page-numbers">',
    ESa = "Include page numbers",
    FSa = '</label></div><div class="kix-printsettingsdialog-control goog-inline-block"><select id="kix-printsettingsdialog-page-number-location"><option value="top-left">',
    GSa = "Top left",
    HSa = '</option><option value="top-center">',
    ISa = "Top center",
    JSa = '</option><option value="top-right">',
    KSa = "Top right",
    LSa = '</option><option value="bottom-left">',
    MSa = "Bottom left",
    NSa = '</option><option value="bottom-center">',
    OSa = "Bottom center",
    PSa = '</option><option value="bottom-right">',
    QSa = "Bottom right",
    RSa = '<div><div class="kix-printsettingsdialog-control goog-inline-block"><input type="checkbox" id="kix-printsettingsdialog-comments" /></div><div class="kix-printsettingsdialog-label goog-inline-block"><label for="kix-printsettingsdialog-comments">',
    SSa = "Include comments",
    TSa = "</label></div></div>",
    USa = '<div><div class="kix-printsettingsdialog-control goog-inline-block"><input type="checkbox" id="kix-printsettingsdialog-footnotes-as-endnotes" /></div><div class="kix-printsettingsdialog-label goog-inline-block"><label for="kix-printsettingsdialog-footnotes-as-endnotes">',
    VSa = "Print footnotes as endnotes";
n.F = function () {
    f1.p.F.call(this);
    var a = this.A.f,
        b = this.db();
    a = {
        PH: a.bN,
        QH: a.KP
    };
    var c = new N;
    c.append(zSa);
    var d = c || new N;
    d.append(ASa);
    var e = d || new N;
    e.append(BSa, CSa, DSa, ESa, FSa, GSa, HSa, ISa, JSa, KSa, LSa, MSa, NSa, OSa, PSa, QSa, ZRa);
    d || e.toString();
    if (a.PH || a.QH) {
        e = d || new N;
        a.PH && e.append(RSa, SSa, TSa);
        a.QH && e.append(USa, VSa, TSa);
        d || e.toString()
    }
    d.append(wa);
    c || d.toString();
    c.append(wa);
    a = c.toString();
    b.innerHTML = a
};
var WSa = "kix-printsettingsdialog-print",
    XSa = "kix-printsettingsdialog-comments",
    YSa = "kix-printsettingsdialog-footnotes-as-endnotes",
    ZSa = "kix-printsettingsdialog-page-number-location",
    $Sa = "kix-printsettingsdialog-page-numbers";
n.ga = function () {
    f1.p.ga.call(this);
    var a = new xp;
    a.set(WSa, tk);
    a.set(vp, Ip);
    Cp(this, a);
    a = this.J();
    this.Pn = a.z(XSa) || k;
    this.fo = a.z(YSa) || k;
    this.mk = a.z(ZSa);
    this.Li = a.z($Sa);
    if (this.Pn) this.Pn.checked = this.a.wy;
    if (this.fo) this.fo.checked = this.a.Yv;
    this.Li.checked = this.a.nE;
    if (this.Li.checked) if (a = this.a.RA()) for (var b = this.mk.options, c = 0; c < b.length; ++c) if (b[c].value == a) {
        this.mk.selectedIndex = c;
        break
    }
    this.mk.disabled = !this.Li.checked;
    this.Ga().C(this, Ep, this.SZ).C(this.Li, Ud, this.JW)
};
n.SZ = function (a) {
    if (a.key != vp) {
        if (this.Pn) this.a.wy = this.Pn.checked;
        if (this.fo) this.a.Yv = this.fo.checked;
        this.a.nE = this.Li.checked;
        this.a.AD = v;
        if (this.Li.checked) {
            var b = this.mk.options[this.mk.selectedIndex].value;
            if (b) this.a.AD = b
        }
    }
    a.key == WSa && Ni(K.Rk)
};
n.JW = function () {
    this.mk.disabled = !this.Li.checked
};
n.q = function () {
    f1.p.q.call(this);
    delete this.Pn;
    delete this.A;
    delete this.fo;
    delete this.mk;
    delete this.Li;
    delete this.a
};

function g1(a, b, c, d) {
    cp.call(this);
    this.a = a || v;
    this.f = b;
    this.g = c;
    this.rb = new aTa(d);
    this.Vn = i
}
s(g1, cp);
n = g1.prototype;
n.bt = k;
n.Hr = k;
n.show = function () {
    bTa(this, function () {
        this.X(i)
    }, this)
};
var cTa = '<div class="pub-dialog-wrap"><div><div class="pub-dialog-header">',
    dTa = "Control publishing",
    eTa = '</div><div class="pub-dialog-option-vspacer"></div><div class="pub-dialog-content-div"><div class="pub-dialog-input-div">',
    fTa = "Require viewers to sign in with their ",
    gTa = " account",
    hTa = '<input type="checkbox" id="pub-dialog-dom-signin-req"',
    iTa = 'checked="checked"',
    h1 = 'disabled="disabled"',
    jTa = '> <label for="pub-dialog-dom-signin-req"',
    kTa = 'class="pub-dialog-disabled-text"',
    lTa = "</label>",
    mTa = '<br><input type="checkbox" id="pub-dialog-auto-publish-checkbox"> <label for="pub-dialog-auto-publish-checkbox">',
    nTa = "Automatically republish when changes are made",
    oTa = '</div><input type="button" id="pub-dialog-publish-button" value="',
    pTa = '"></div></div><div class="pub-dialog-hr-div"><hr class="pub-dialog-hr"></div><div><div class="pub-dialog-header">',
    qTa = "Get a link to the published document",
    rTa = '</div><div class="pub-dialog-option-vspacer"></div><div class="pub-dialog-content-div"><div>',
    sTa = "Document link",
    tTa = '</div><div class="pub-dialog-option-vspacer"></div><input id="pub-dialog-document-link" type="text" class="pub-dialog-document-link" value="',
    uTa = '" readonly="readonly"',
    vTa = '></div><div class="pub-dialog-content-div"><div>',
    wTa = "Embed code",
    xTa = '</div><div class="pub-dialog-option-vspacer"></div><textarea id="pub-dialog-embed-code" rows="3" cols="60" class="pub-dialog-embed-code" readonly="readonly"',
    yTa = "</textarea></div></div></div>",
    zTa = "Publish to the Web",
    ATa = "pub-dialog",
    BTa = "pub-dialog-content",
    CTa = "pub-dialog-buttons";
n.F = function () {
    g1.p.F.call(this);
    var a = this.db(),
        b;
    b = {
        rY: !! this.rb.domain,
        Yn: this.rb.Yn(),
        pk: this.rb.pk,
        domain: this.rb.HH,
        Er: this.rb.Er,
        e1: DTa(this),
        Rd: this.rb.Rd,
        CR: ETa(this),
        FR: FTa(this)
    };
    var c = new N;
    c.append(cTa, dTa, eTa);
    if (b.rY) {
        var d = fTa + (hO(b.domain) + gTa);
        c.append(hTa, b.pk ? iTa : v,
        b.Er ? h1 : v,
        jTa,
        b.Er ? kTa : v,
        Ub,
        d,
        lTa)
    }
    b.Yn && c.append(mTa, nTa, lTa);
    c.append(oTa, hO(b.e1), pTa, qTa, rTa, sTa, tTa, hO(b.CR), uTa, !b.Rd ? h1 : v,
    vTa,
    wTa,
    xTa,
    !b.Rd ? h1 : v,
    Ub,
    hO(b.FR),
    yTa);
    b = c.toString();
    a.innerHTML = b + v;
    this.setTitle(zTa);
    Cp(this, (new xp).set(Gp, Lp));
    z.ba.add(gp(this), ATa);
    z.ba.add(this.db(), BTa);
    z.ba.add(tra(this), CTa)
};
var GTa = "pub-dialog-dom-signin-req",
    HTa = "pub-dialog-auto-publish-checkbox",
    ITa = "pub-dialog-document-link",
    JTa = "pub-dialog-embed-code",
    KTa = "pub-dialog-publish-button";
n.ga = function () {
    g1.p.ga.call(this);
    Ei = i;
    var a = this.J(),
        b = So(this),
        c = a.z(GTa);
    c && b.C(c, Li, this.G2);
    if (this.rb.Yn()) {
        c = a.z(HTa);
        b.C(c, Li, this.E2)
    }
    this.bt = a.z(ITa);
    this.Hr = a.z(JTa);
    b.C(this.bt, Ud, this.YL);
    b.C(this.Hr, Ud, this.YL);
    b.C(a.z(KTa), Ud, this.f1);
    LTa(this)
};
n.pb = function () {
    Ei = l
};

function LTa(a) {
    var b = a.J();
    b.z(KTa).value = DTa(a);
    if (a.rb.Yn()) b.z(HTa).checked = a.rb.Zu;
    i1(a)
}
var MTa = "/pub";

function ETa(a) {
    if (!a.rb.Rd) return v;
    return NTa(a, MTa).toString()
}
var OTa = "&embedded=true";

function FTa(a) {
    if (!a.rb.Rd) return v;
    return oxa + Vb(NTa(a, MTa).toString() + OTa) + $O
}
var PTa = "docs.";

function NTa(a, b, c) {
    c = c || new rO(window.location.href);
    var d = c.yf.indexOf(Hj + a.g + Hj) != -1 ? Hj + a.g : v;
    if (a.rb.pk) d = sB + a.rb.domain + d;
    var e = c.Tg.replace(/^docs\d+\./, PTa);
    return FO(qwa(vO(c, e), new rO(d + b)), Iv, a.a)
}
function i1(a) {
    a.bt.value = ETa(a);
    a.bt.disabled = !a.rb.Rd;
    a.Hr.value = FTa(a);
    a.Hr.disabled = !a.rb.Rd
}
n.YL = function (a) {
    a.target.focus();
    a.target.select()
};
n.G2 = function () {
    this.rb.pk = !this.rb.pk;
    if (this.rb.Rd) {
        i1(this);
        j1(this)
    }
};
n.E2 = function () {
    this.rb.Zu = !this.rb.Zu;
    if (this.rb.Rd) {
        i1(this);
        j1(this)
    }
};
var QTa = "Stop publishing",
    RTa = "Start publishing";

function DTa(a) {
    return a.rb.Rd ? QTa : RTa
}
var STa = "/publishsettings",
    TTa = "domainDisplay";

function bTa(a, b, c) {
    qO(a.f.Gd(STa).Lk(Iv, a.a).Pf(function (d) {
        this.rb.Rd = !! d.Cc().published;
        this.rb.pk = !! d.Cc().requireSignin;
        this.rb.Er = !! d.Cc().domainClosed;
        this.rb.domain = CP(d, KR);
        this.rb.HH = CP(d, TTa);
        this.rb.Zu = !Number(d.Cc().revision);
        b.call(c)
    }, a), a.lJ, a).Ld()
}
function j1(a) {
    var b = {
        id: a.a,
        requireSignin: a.rb.pk,
        published: a.rb.Rd
    };
    if (a.rb.Yn() && !a.rb.Zu) b.revision = a.rb.a;
    qO(a.f.Gd(STa).Lh(b), a.lJ, a).Ld()
}
n.lJ = function () {};
var UTa = "Are you sure you want to stop publishing this document?",
    VTa = "Are you sure you want to publish this document?";
n.f1 = function (a, b) {
    if (b || window.confirm(this.rb.Rd ? UTa : VTa)) {
        this.rb.Rd = !this.rb.Rd;
        LTa(this);
        j1(this)
    }
};
n.q = function () {
    g1.p.q.call(this);
    delete this.a;
    delete this.f;
    delete this.rb;
    delete this.bt;
    delete this.Hr
};

function aTa(a) {
    this.a = a;
    this.Er = this.pk = this.Rd = l;
    this.f = i;
    this.HH = this.domain = v
}
aTa.prototype.Yn = function () {
    return !!this.a
};

function WTa(a, b, c) {
    g1.call(this, a, b, Yg, c)
}
s(WTa, g1);

function k1() {
    v0.call(this, v);
    this.X(l)
}
s(k1, v0);
k1.prototype.ui = function (a) {
    k1.p.ui.call(this, a);
    a.stopPropagation()
};

function l1(a) {
    Do.call(this, a);
    this.f = [];
    this.a = [];
    this.K = this.target.offsetWidth;
    oe(this, Zi, this.n_, l, this);
    m1(this)
}
s(l1, Do);
n = l1.prototype;
n.NL = l;
n.kb = i;
n.Eb = 0;
n.HD = 0;
n.Cy = 0;
n.LC = 0;
n.Vu = 0;
n.Ss = 0;

function n1(a, b) {
    a.target.style.width = b + D;
    a.K = b;
    m1(a);
    o1(a)
}
n.ii = function () {
    return this.LC
};
n.Da = function () {
    return this.kb
};

function p1(a, b) {
    a.Eb = b;
    a.HD = b;
    o1(a)
}
function o1(a) {
    a.target.style.left = a.Eb - a.Vu + D
}
function q1(a, b) {
    a.f.push(b)
}
n.Gn = function (a) {
    var b = arguments.length > 1 ? Cc(arguments, 1) : [];this.a.push(new r1(a, b))
};

function XTa(a, b) {
    Lsa(a.a, function (c) {
        return c.KC == b
    })
}
function m1(a) {
    var b = 0;
    switch (a.LC) {
    case 1:
        b = a.Ss;
        break;
    case 0:
        b = a.Ss + Math.floor(a.K / 2);
        break;
    case 2:
        b = a.Ss + a.K - 1;
        break
    }
    a.Vu = b
}
n.kA = function (a, b, c) {
    if (this.NL) {
        var d = Math.abs(c - this.target.offsetTop) > 10;
        if (this.kb && d) {
            this.target.style.visibility = Kf;
            this.kb = l;
            this.dispatchEvent(kD)
        } else if (!this.kb && !d) {
            this.target.style.visibility = Gi;
            this.kb = i;
            this.dispatchEvent(kD)
        }
    }
    d = b + this.Vu;
    d = this.Cy ? Math.round(Math.round(d / this.Cy) * this.Cy) : d;
    var e;
    if (!(e = d == this.Eb)) a: if (YTa(d, this.Eb, this.f)) e = i;
    else {
        e = d - this.Eb;
        for (var g = 0; g < this.a.length; g++) {
            var h = this.a[g].KC;
            if (YTa(e + h.Eb, h.Eb, this.a[g].a)) {
                e = i;
                break a
            }
        }
        e = l
    }
    if (!e) {
        e = d - this.Eb;
        for (g = 0; g < this.a.length; g++) {
            h = this.a[g].KC;
            p1(h, e + h.Eb)
        }
        this.Eb = d;
        o1(this);
        this.dispatchEvent(new Jo(Oo, this, a.clientX, a.clientY, a, b, c))
    }
};
n.n_ = function () {
    if (this.Eb != this.HD) {
        this.HD = this.Eb;
        this.dispatchEvent(Li)
    }
};

function YTa(a, b, c) {
    for (var d = 0; d < c.length; d++) if (c[d].g(a, b)) return i;
    return l
}
function r1(a, b) {
    this.KC = a;
    this.a = b
}
function s1(a, b) {
    this.f = a;
    this.a = b
}
s1.prototype.g = function (a, b) {
    if (a < this.f) return a < b;
    else if (a > this.a) return a > b;
    return l
};

function t1(a, b, c) {
    this.a = a;
    this.n = b;
    this.f = fb(c) ? c : 0
}
t1.prototype.g = function (a, b) {
    return 0 == this.n ? a > this.a.Eb - this.f && a > b : a < this.a.Eb + this.f && a < b
};

function u1(a, b, c, d, e) {
    iv.call(this, a, e);
    this.g = b;
    this.f = c;
    this.a = d;
    this.aa = v1(this);
    this.u = Xe(Ge.N(), v1(this) * this.g.a);
    this.n = [];
    this.P = this.getContext().Ya.a[VI] || k
}
s(u1, iv);
n = u1.prototype;
n.wx = k;
n.ey = k;
n.ip = k;
n.Yp = k;
n.Ii = k;
n.yh = k;
n.Uv = k;
n.Yg = k;
n.av = k;
n.dl = k;
n.Sc = k;
n.rd = k;
n.sd = k;
n.hc = k;
n.ic = k;
n.Gz = k;
n.xh = k;
var ZTa = "kix-rulerview-inner",
    $Ta = "kix-rulerview";
n.F = function () {
    var a = this.J();
    this.yh = a.F(sd, ZTa);
    this.sb(a.F(sd, $Ta, this.yh));
    aUa(this)
};
n.ob = function (a) {
    u1.p.ob.call(this, a);
    this.yh = this.J().pd(a);
    aUa(this)
};
n.We = function (a) {
    return !!this.J().pd(a) && z.ba.Pd(a, $Ta)
};
var bUa = "kix-rulerview-background-inner",
    cUa = "kix-rulerview-background",
    dUa = "kix-rulerview-face",
    eUa = "margin-left: -5px",
    fUa = "kix-rulerview-mask",
    gUa = " kix-rulerview-mask-ie";

function aUa(a) {
    var b = a.J();
    a.z().style.marginRight = bf(Ge.N()) + D;
    a.dl = b.F(sd, bUa);
    a.av = b.F(sd, cUa, a.dl);
    a.Yg = hUa(a);
    a.Uv = b.F(sd, {
        "class": dUa,
        style: eUa
    }, a.Yg);
    a.ip = b.F(sd, fUa + (y.ia ? gUa : v));
    a.Yp = b.F(sd);
    a.Ii = b.F(sd);
    b.appendChild(a.yh, a.av);
    b.appendChild(a.yh, a.Uv);
    b.appendChild(a.yh, a.ip);
    b.appendChild(a.yh, a.Yp);
    b.appendChild(a.yh, a.Ii);
    iUa(a)
}
function iUa(a) {
    a.yh.style.width = a.f + D;
    a.av.style.width = a.f + D;
    a.ip.style.width = a.f + D;
    a.Uv.style.width = 10 + a.f + D;
    a.Yg.style.width = a.u * 2 + D
}
var jUa = "kix-rulerview-face-inner",
    kUa = "kix-rulerview-face-number",
    lUa = "goog-inline-block kix-rulerview-face-first-division",
    mUa = "kix-rulerview-face-major-division",
    nUa = "kix-rulerview-face-minor-division";

function hUa(a) {
    for (var b = a.J(), c = b.F(sd, jUa), d = Xe(Ge.N(), a.g.a / a.g.f, i), e = 0, g = -a.aa; g < a.aa; g++) for (var h = 0; h < a.g.f; h++) {
        var j = a.g.n != 0 && h % (a.g.f / a.g.n) == 0;
        e = d - e;
        var m = Math.round(e);
        e = m - e;
        m = m - 1;
        if (h == 0) {
            j = b.F(sd, kUa, b.createTextNode(String(g == 0 ? v : Math.abs(g))));
            j = b.F(sd, {
                "class": lUa,
                style: Ez + m + ly
            }, j)
        } else j = b.F(sd, {
            "class": CN + (j ? mUa : nUa),
            style: Ez + m + ly
        });
        b.appendChild(c, j)
    }
    return c
}
var oUa = "Add left tab-stop",
    pUa = "Add center tab-stop",
    qUa = "Add right tab-stop";

function rUa(a) {
    var b = a.J(),
        c = new kN(oUa, a.a ? 0 : 2,
        b),
        d = new kN(pUa, 1, b);
    b = new kN(qUa, a.a ? 2 : 0,
    b);
    var e = new eR(a.J());
    a.ya(e);
    e.F();
    e.X(l);
    e.ya(a.a ? c : b,
    i);
    e.ya(d, i);
    e.ya(a.a ? b : c,
    i);
    e.Ja();
    $o(e, function (g) {
        this.Ga().C(g, Mi, this.BX)
    }, a);
    if (a.a) a.wx = e;
    else a.ey = e
}
var sUa = "kix-rulerview-margin-left",
    tUa = "Left Margin",
    uUa = "kix-rulerview-margin-right",
    vUa = "Right Margin",
    wUa = "kix-rulerview-indent-first-line",
    xUa = "First Line Indent",
    yUa = "kix-rulerview-indent-left",
    zUa = "Left Indent",
    AUa = "kix-rulerview-indent-right",
    BUa = "Right Indent",
    CUa = "5px";
n.ga = function () {
    u1.p.ga.call(this);
    var a = this.J(),
        b = a.F(sd, {
            "class": sUa,
            title: tUa
        }),
        c = a.F(sd, {
            "class": uUa,
            title: vUa
        });
    a = a.F(sd, {
        "class": wUa,
        title: xUa
    });
    var d = fA(yUa, undefined, zUa),
        e = fA(AUa, undefined, BUa);
    z.appendChild(this.Ii, b);
    z.appendChild(this.Ii, c);
    z.appendChild(this.Ii, a);
    z.appendChild(this.Ii, d);
    z.appendChild(this.Ii, e);
    this.hc = w1(this, b, 2);
    this.ic = w1(this, c, 1);
    this.ic.target.style.paddingRight = CUa;
    b = this.hc;
    b.Ss = 5;
    b.target.style.paddingLeft = CUa;
    m1(b);
    this.Sc = w1(this, a);
    this.rd = w1(this, d);
    this.sd = w1(this, e);
    x1(this);
    b = Q(this.getContext());
    this.Ga().C(this.Sc, Zi, this.EV).C(this.rd, Zi, this.FV).C(this.sd, Zi, this.GV).C(this.hc, Oo, this.iW).C(this.hc, Li, this.hW).C(this.ic, Oo, this.kW).C(this.ic, Li, this.jW).C(this.ip, Ud, this.fX).C(b, nv, this.TZ).C(b, gD, this.UZ);
    y1(this);
    if (this.P) {
        this.Ga().C(this.P, vH, this.tX);
        b = this.P.ea();
        b != this.Da() && u1.p.X.call(this, b)
    }
};
n.pb = function () {
    u1.p.pb.call(this)
};

function w1(a, b, c) {
    b = new l1(b);
    if (p(c)) {
        b.LC = c;
        m1(b)
    }
    c = Xe(Ge.N(), a.g.g, i);
    b.Cy = c;
    c = r(a.LM, a, b);
    a.Ga().C(b, Io, c).C(b, Oo, c).C(b, Zi, a.DJ);
    return b
}
var DUa = "kix-rulerview-guide";
n.LM = function (a) {
    if (a.Da()) {
        if (!this.xh) {
            var b = this.J();
            this.xh = b.F(sd, DUa);
            this.xh.style.display = Hf;
            b.Va().body.appendChild(this.xh)
        }
        b = a.target.offsetHeight;
        var c = Df(a.target);
        this.xh.style.top = c.y + b + D;
        this.xh.style.left = c.x + a.Vu + D;
        this.xh.style.height = z.fe().height - c.y - b + D;
        this.xh.style.display = v
    } else this.DJ()
};
n.DJ = function () {
    this.xh.style.display = Hf
};
var EUa = "Tried to set limits on null draggers.";

function x1(a) {
    if (a.Sc == k || a.rd == k || a.sd == k || a.hc == k || a.ic == k) pv(a.getContext()).log(Error(EUa));
    else {
        a.Sc.a.length = 0;
        a.Sc.f.length = 0;
        a.rd.a.length = 0;
        a.rd.f.length = 0;
        a.sd.a.length = 0;
        a.sd.f.length = 0;
        a.hc.a.length = 0;
        a.hc.f.length = 0;
        a.ic.a.length = 0;
        a.ic.f.length = 0;
        var b = Xe(Ge.N(), 36),
            c = Xe(Ge.N(), 72),
            d = new s1(0, a.f),
            e = new t1(a.Sc, a.a ? 1 : 0,
            b),
            g = new t1(a.rd, 1, b);
        b = new t1(a.sd, 0, b);
        q1(a.Sc, d);
        q1(a.Sc, a.a ? b : g);
        q1(a.rd, d);
        q1(a.rd, b);
        q1(a.sd, d);
        q1(a.sd, g);
        if (a.a) {
            var h = a.Sc;
            a.rd.a.push(new r1(h, h.f));
            q1(a.sd, e)
        } else {
            h = a.Sc;
            a.sd.a.push(new r1(h, h.f));
            q1(a.rd, e)
        }
        q1(a.hc, d);
        q1(a.hc, new t1(a.ic, 0, c));
        a.hc.Gn(a.rd, b);
        q1(a.ic, d);
        q1(a.ic, new t1(a.hc, 1, c));
        a.ic.Gn(a.sd, g);
        a.a ? a.hc.Gn(a.Sc, b) : a.ic.Gn(a.Sc, g)
    }
}
n.TZ = function () {
    var a = FUa(Q(this.getContext()));
    if (a != this.Gz) {
        this.Gz = a;
        GUa(this, a.f) || z1(this)
    }
};
n.UZ = function (a) {
    if (a.a.O() == ED) {
        var b = a.a;
        a = b.K;
        var c = Q(this.getContext());
        switch (b.f) {
        case Yg:
            if (Ps in a) {
                this.f = Us(Yz(c));
                this.aa = v1(this);
                this.u = Xe(Ge.N(), v1(this) * this.g.a);
                b = hUa(this);
                z.Dt(b, this.Yg);
                this.Yg = b;
                iUa(this);
                y1(this);
                x1(this)
            }
            if (Ms in a || Ns in a) y1(this);
            break;
        case eh:
            this.Gz = c.oa(eh, qu(c));
            if (Kh in a) if (GUa(this, a.ps_ltr)) break;
            if (Gh in a || Hh in a || Ih in a) z1(this);
            else Nh in a && HUa(this);
            break
        }
    }
};
n.iW = function () {
    var a = Yz(Q(this.getContext())),
        b = this.hc.Eb;
    A1(this, b, Ts(a));
    B1(this, b, undefined)
};
n.kW = function () {
    var a = Yz(Q(this.getContext())),
        b = this.ic.Eb;
    A1(this, Ss(a), this.f - b);
    B1(this, undefined, this.f - b)
};
n.EV = function () {
    var a = this.Sc.Eb;
    a = oK(Ge.N(), this.a ? a - this.hc.Eb : this.ic.Eb - a);
    Ni(M(yv(this.getContext()), Tm), a)
};
n.FV = function () {
    var a = this.hc.Eb;
    this.a ? IUa(this, this.rd.Eb - a, this.Sc.Eb - a) : JUa(this, this.rd.Eb - a)
};
n.GV = function () {
    var a = this.ic.Eb;
    this.a ? JUa(this, a - this.sd.Eb) : IUa(this, a - this.sd.Eb, a - this.Sc.Eb)
};

function IUa(a, b, c) {
    var d = Ge.N();
    b = b / Ye(d);
    c = c / Ye(d);
    d = {};
    d.idtFL = c;
    d.idtS = b;
    Ni(M(yv(a.getContext()), Um), d)
}
function JUa(a, b) {
    var c = oK(Ge.N(), b);
    Ni(M(yv(a.getContext()), Vm), c)
}
n.hW = function () {
    var a = this.hc.Eb;
    n1(this.hc, a);
    var b = {};
    b.ml = oK(Ge.N(), a);
    Ni(M(yv(this.getContext()), Hl), b)
};
n.jW = function () {
    var a = this.f - this.ic.Eb;
    n1(this.ic, a);
    var b = {};
    b.mr = oK(Ge.N(), a);
    Ni(M(yv(this.getContext()), Hl), b)
};
n.la = function (a) {
    this.ip.style.display = a ? v : Hf;this.Yp.style.display = a ? v : Hf;this.Ii.style.display = a ? v : Hf
};
n.tX = function () {
    var a = !this.Da();
    a != this.Da() && u1.p.X.call(this, a);
    this.dispatchEvent(new Pd(kD))
};
var KUa = "Visibility should not be set directly on the ruler.";
n.X = function () {
    pv(this.getContext()).log(Error(KUa))
};

function y1(a) {
    var b = Yz(Q(a.getContext())),
        c = Ss(b);
    b = Ts(b);
    p1(a.hc, c);
    p1(a.ic, a.f - b);
    n1(a.hc, c);
    n1(a.ic, b);
    A1(a, c, b);
    B1(a, c, b);
    z1(a)
}

function A1(a, b, c) {
    a.dl.style.width = a.f - b - c - 1 + D;
    a.dl.style.left = b + 1 + D
}
function B1(a, b, c) {
    if (a.a && p(b)) {
        a.Yg.style.right = v;
        a.Yg.style.left = b - a.u + 5 + D
    } else if (!a.a && p(c)) {
        a.Yg.style.left = v;
        a.Yg.style.right = c - a.u + 5 + D
    }
}
function GUa(a, b) {
    if (a.a == b) return l;
    a.a = b;
    y1(a);
    x1(a);
    return i
}

function z1(a) {
    var b = Q(a.getContext());
    if (b.ra().Fa().O() == 0) {
        var c = b.oa(eh, Qu(b)),
            d = Yz(b);
        b = Ss(d);
        d = Ts(d);
        if (a.a) {
            p1(a.Sc, b + Ph(c));
            p1(a.rd, b + Qh(c));
            p1(a.sd, a.f - d - Rh(c))
        } else {
            p1(a.Sc, a.f - d - Ph(c));
            p1(a.rd, b + Rh(c));
            p1(a.sd, a.f - d - Qh(c))
        }
        HUa(a)
    }
}
function LUa(a) {
    var b = a.a ? a.wx : a.ey;
    if (!b) {
        rUa(a);
        b = a.a ? a.wx : a.ey
    }
    return b
}
n.fX = function (a) {
    LUa(this).vy(a.clientX, a.clientY);
    a.stopPropagation()
};
n.BX = function (a) {
    var b = LUa(this),
        c = Df(this.dl).x;
    b = (b.Da() ? Df(b.z()) : k).x;
    c = this.a ? Math.round(b - c) : Math.round(c + Mf(this.dl).width - b);c = oK(Ge.N(), c);c = Math.round(c / this.g.g) * this.g.g;a = a.target.ea();b = Q(this.getContext());
    var d = Gu(b);b = Th(b.oa(eh, d));d = {};d.aln = a;d.ind = b.length;d.off = c;Ni(M(yv(this.getContext()), hn), d)
};
var MUa = "Drag end event for non-existent tab stop.";
n.CX = function (a, b) {
    var c;
    a: {
        c = Q(this.getContext());
        var d = Gu(c);
        c = Th(c.oa(eh, d));
        for (d = 0; d < c.length; d++) if (c[d].Qa(a)) {
            c = d;
            break a
        }
        c = k
    }
    if (c == k) pv(this.getContext()).log(Error(MUa));
    else if (b.a.Da()) {
        d = oK(Ge.N(), this.a ? b.a.Eb - this.hc.Eb : this.ic.Eb - b.a.Eb);
        e = {};
        e.ind = c;
        e.off = d;
        Ni(M(yv(this.getContext()), kn), e)
    } else {
        var e = {};
        e.ind = c;
        Ni(M(yv(this.getContext()), jn), e)
    }
};
n.DX = function (a) {
    this.LM(a.target)
};
var NUa = "kix-rulerview-tabstop",
    OUa = "kix-rulerview-tabstop-center",
    PUa = "kix-rulerview-tabstop-left",
    QUa = "kix-rulerview-tabstop-right";

function HUa(a) {
    for (var b = a.J().oc(undefined, NUa, a.Yp), c = b.length - 1; c >= 0; c--) {
        var d = b[c];
        a.J().removeNode(d);
        a.Ga().a(d, Ud)
    }
    for (c = 0; c < a.n.length; c++) {
        b = a.n[c];
        a.a ? XTa(a.hc, b) : XTa(a.ic, b);b.G()
    }
    a.n = [];
    c = Q(a.getContext());
    b = Gu(c);
    b = Th(c.oa(eh, b));
    for (c = 0; c < b.length; c++) {
        d = a;
        var e = b[c],
            g = void 0,
            h = void 0,
            j = 0,
            m = 0,
            o = e.ii();
        if (o == 1) {
            g = OUa;
            h = 0
        } else if (o == 0 && d.a || o == 2 && !d.a) {
            g = PUa;
            h = 1;
            j = 3
        } else {
            g = QUa;
            h = 2;
            m = 3
        }
        o = d.J();
        g = fA(g, [NUa]);
        o.appendChild(d.Yp, g);
        o = Yz(Q(d.getContext()));
        h = w1(d, g, h);
        h.NL = i;
        q1(h, new s1(0, d.f));
        g = h;
        j = j;
        g.Ss = j;
        g.target.style.paddingLeft = j + D;
        m1(g);
        h.target.style.paddingRight = m + D;
        if (d.a) {
            p1(h, Ss(o) + xh(e));
            d.hc.Gn(h)
        } else {
            p1(h, d.f - Ts(o) - xh(e));
            d.ic.Gn(h)
        }
        d.Ga().C(h, Zi, r(d.CX, d, e));
        d.Ga().C(h, kD, d.DX);
        d.n.push(h)
    }
}
function v1(a) {
    return Math.ceil(oK(Ge.N(), a.f) / a.g.a)
}
n.q = function () {
    u1.p.q.call(this);
    delete this.g;
    delete this.ip;
    delete this.Yp;
    delete this.Ii;
    delete this.yh;
    delete this.Uv;
    delete this.Yg;
    delete this.av;
    delete this.dl;
    delete this.xh;
    this.Sc && this.Sc.G();
    this.rd && this.rd.G();
    this.sd && this.sd.G();
    this.hc && this.hc.G();
    this.ic && this.ic.G();
    delete this.Sc;
    delete this.rd;
    delete this.sd;
    delete this.hc;
    delete this.ic;
    delete this.wx;
    delete this.ey;
    for (var a = 0; a < this.n.length; a++) this.n[a].G();
    delete this.n;
    delete this.P
};

function FUa(a) {
    return a.oa(eh, Qu(a))
}
function RUa(a, b) {
    var c = lK(wv(a)).O() == 0 ? SUa : TUa,
        d = Sh(FUa(a.A));
    return new u1(a, c, Us(Yz(a.A)), d, b)
}
function UUa(a, b, c, d) {
    this.a = a;
    this.n = b;
    this.f = c;
    this.g = d
}
var SUa = new UUa(72, 2, 8, 4.5),
    TUa = new UUa(Ie, 2, 4, Ie / 4);
var VUa = "Surprise";

function C1(a) {
    k_.call(this, i, a);
    this.setTitle(VUa)
}
s(C1, k_);
var WUa = '<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/GLL4aZ0nuaw&hl=en_US&fs=1&rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/GLL4aZ0nuaw&hl=en_US&fs=1&rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>';
C1.prototype.F = function () {
    C1.p.F.call(this);
    var a = this.db(),
        b;
    b = new N;
    b.append(WUa);
    b = b.toString();
    a.innerHTML = b
};

function D1(a) {
    this.a = a
}
s(D1, t);

function XUa(a, b) {
    var c = M(a.a, b);
    return c ? c.pc(vM) : v
}
function YUa(a, b) {
    var c = M(a.a, b);
    return c ? c.pc(Ji) : v
}
function E1(a, b, c, d) {
    if (M(a.a, c)) d ? b.push([YUa(a, c), XUa(a, c)]) : b.push(M(a.a, c))
}
var ZUa = "Text formatting",
    $Ua = "Ctrl + Alt + [1-6]",
    aVa = "Heading [1-6]",
    bVa = "Paragraph formatting",
    cVa = "Find",
    dVa = "Actions";
D1.prototype.getData = function () {
    var a = {
        title: ZUa,
        Rt: [K.Ok, K.Qk, K.Vk, K.Iq, K.Hq]
    },
        b = [];
    E1(this, b, Sl);
    M(this.a, Vl) && M(this.a, Wl) && M(this.a, Xl) && M(this.a, Yl) && M(this.a, Zl) && M(this.a, $l) && b.push([$Ua, aVa]);
    E1(this, b, Om, i);
    E1(this, b, Mm, i);
    E1(this, b, Qm, i);
    E1(this, b, Sm, i);
    E1(this, b, Dm);
    E1(this, b, wl, i);
    E1(this, b, Gl);
    a = [a,
    {
        title: bVa,
        Rt: b
    }];
    b = [];
    E1(this, b, sm, i);
    E1(this, b, On, i);
    M(this.a, Pl) && b.push([YUa(this, Pl), cVa]);
    E1(this, b, qm);
    return [a, [{
        title: dVa,
        Rt: b
    }]]
};
D1.prototype.q = function () {
    D1.p.q.call(this);
    delete this.a
};
var F1 = {};

function G1(a, b) {
    for (var c = b || eVa, d = c.length, e = v; a-- > 0;) e += c.charAt(Math.floor(Math.random() * d));
    return e
}
var eVa = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function H1() {}
s(H1, t);
H1.prototype.iq = 0;
H1.prototype.O = function () {
    return this.iq
};

function I1(a) {
    this.wa = a;
    this.f = [];
    this.u = r(this.aR, this)
}
s(I1, H1);
n = I1.prototype;
n.iq = 2;
n.LD = l;
n.Ta = 0;
n.te = function () {
    if (this.wa.ki() == 0) {
        this.a = this.wa.Lo;
        this.a.XPC_toOuter = r(this.HJ, this)
    } else this.zG()
};
var J1 = "tp",
    K1 = "SETUP_ACK";
n.zG = function () {
    var a = i;
    try {
        if (!this.a) this.a = window.frameElement;
        if (this.a && this.a.XPC_toOuter) {
            this.g = this.a.XPC_toOuter;
            this.a.XPC_toOuter.XPC_toInner = r(this.HJ, this);
            a = l;
            this.send(J1, K1);
            L1(this.wa)
        }
    } catch (b) {}
    if (a) {
        if (!this.n) this.n = r(this.zG, this);
        window.setTimeout(this.n, 100)
    }
};
n.GE = function (a) {
    if (this.wa.ki() == 0 && !this.wa.Be() && a == K1) {
        this.g = this.a.XPC_toOuter.XPC_toInner;
        L1(this.wa)
    } else f(Error("Got unexpected transport message."))
};
n.HJ = function (a, b) {
    if (!this.LD && this.f.length == 0) M1(this.wa, a, b);
    else {
        this.f.push({
            K1: a,
            CD: b
        });
        if (this.f.length == 1) this.Ta = window.setTimeout(this.u, 1)
    }
};
n.aR = function () {
    for (; this.f.length;) {
        var a = this.f.shift();
        M1(this.wa, a.K1, a.CD)
    }
};
n.send = function (a, b) {
    this.LD = i;
    this.g(a, b);
    this.LD = l
};
n.q = function () {
    I1.p.q.call(this);
    this.a = this.g = k
};

function N1(a) {
    this.wa = a;
    this.M = this.wa.a.ppu;
    this.lb = this.wa.a.lpu;
    this.u = []
}
var O1, P1;
s(N1, H1);
n = N1.prototype;
n.iq = 4;
n.eE = 0;
n.nq = l;
n.tw = l;
var fVa = "googlexpc_",
    gVa = "_msg";

function Q1(a) {
    return fVa + a.wa.name + gVa
}
var hVa = "_ack";

function R1(a) {
    return fVa + a.wa.name + hVa
}
var iVa = "googlexpc_reconnect_",
    jVa = "googlexpc",
    kVa = "reconnect";
n.te = function () {
    if (!this.tw) {
        var a = Q1(this);
        this.f = S1(this, a);
        this.P = window.frames[a];
        a = R1(this);
        this.a = S1(this, a);
        this.K = window.frames[a];
        this.tw = i
    }
    if (lVa(this, Q1(this)) && lVa(this, R1(this))) {
        this.Oa = new T1(this, this.wa.Jf.frames[Q1(this)], r(this.Z0, this));
        this.xa = new T1(this, this.wa.Jf.frames[R1(this)], r(this.Y0, this));
        this.PG()
    } else {
        if (this.wa.ki() == 1 && !this.cc) {
            this.wa.name = G1(10);
            mVa(this);
            this.tw = l;
            this.cc = S1(this, iVa + this.wa.name)
        } else if (this.wa.ki() == 0) {
            a = this.wa.Jf.frames;
            for (var b = a.length, c = 0; c < b; c++) {
                var d;
                try {
                    if (a[c] && a[c].name) d = a[c].name
                } catch (e) {}
                if (d) {
                    var g = d.split(pJ);
                    if (g.length == 3 && g[0] == jVa && g[1] == kVa) {
                        this.wa.name = g[2];
                        mVa(this);
                        this.tw = l;
                        break
                    }
                }
            }
        }
        window.setTimeout(r(this.te, this), 100)
    }
};
var nVa = "#INITIAL";

function S1(a, b) {
    var c = z.createElement(Kd),
        d = c.style;
    d.position = zf;
    d.top = WEa;
    d.left = UEa;
    d.width = za;
    d.height = za;
    c.id = c.name = b;
    c.src = a.M + nVa;
    document.body.appendChild(c);
    return c
}

function mVa(a) {
    if (a.f) {
        a.f.parentNode.removeChild(a.f);
        a.f = k;
        a.P = k
    }
    if (a.a) {
        a.a.parentNode.removeChild(a.a);
        a.a = k;
        a.K = k
    }
}
function lVa(a, b) {
    try {
        var c = a.wa.Jf.frames[b];
        if (!c || c.location.href.indexOf(a.lb) != 0) return l
    } catch (d) {
        return l
    }
    return i
}
var U1 = "SETUP";
n.PG = function () {
    var a = this.wa.Jf.frames;
    if (a[R1(this)] && a[Q1(this)]) {
        this.$K = new V1(this.M, this.P);
        this.n = new V1(this.M, this.K);
        window.setTimeout(r(function () {
            this.$K.send(U1);
            this.nq = this.W5 = i
        }, this), 100)
    } else {
        if (!this.Aa) this.Aa = r(this.PG, this);
        window.setTimeout(this.Aa, 100)
    }
};

function oVa(a) {
    if (a.Ya && a.Cb) {
        L1(a.wa);
        if (a.g) {
            for (var b = 0, c; b < a.g.length; b++) {
                c = a.g[b];
                M1(a.wa, c.Op, c.CD)
            }
            delete a.g
        }
    }
}
var pVa = "ACK:";
n.Z0 = function (a) {
    if (a == U1) {
        if (this.n) {
            this.n.send(K1);
            this.Ya = i;
            oVa(this)
        }
    } else if (this.wa.Be() || this.Ya) {
        var b = a.indexOf(Aa),
            c = a.substring(0, b);
        a = a.substring(b + 1);
        b = c.indexOf(Gj);
        if (b == -1) {
            var d = c;
            this.n.send(pVa + d);
            qVa(this, a)
        } else {
            d = c.substring(0, b);
            this.n.send(pVa + d);
            c = c.substring(b + 1).split(Hj);
            b = parseInt(c[0], 10);
            c = parseInt(c[1], 10);
            if (b == 1) this.aa = [];
            this.aa.push(a);
            if (b == c) {
                qVa(this, this.aa.join(v));
                delete this.aa
            }
        }
    }
};
n.Y0 = function (a) {
    if (a == K1) {
        this.nq = l;
        this.Cb = i;
        oVa(this)
    } else if (this.wa.Be()) if (this.nq) if (parseInt(a.split(Sf)[1], 10) == this.eE) {
        this.nq = l;
        rVa(this)
    }
};

function rVa(a) {
    if (!(a.nq || !a.u.length)) {
        var b = a.u.shift();
        ++a.eE;
        a.$K.send(a.eE + b);
        a.nq = i
    }
}
function qVa(a, b) {
    var c = b.indexOf(Sf),
        d = b.substr(0, c);
    c = b.substring(c + 1);
    a.wa.Be() ? M1(a.wa, d, c) : (a.g || (a.g = [])).push({
        Op: d,
        CD: c
    })
}
n.Bu = 3800;
n.send = function (a, b) {
    var c = a + Sf + b;
    if (!y.ia || b.length <= this.Bu) this.u.push(Aa + c);
    else for (var d = b.length, e = Math.ceil(d / this.Bu), g = 0, h = 1; g < d;) {
        this.u.push(Gj + h + Hj + e + Aa + c.substr(g, this.Bu));
        h++;
        g += this.Bu
    }
    rVa(this)
};
n.q = function () {
    N1.p.q.call(this);
    var a = W1;
    xc(a, this.Oa);
    xc(a, this.xa);
    this.Oa = this.xa = k;
    z.removeNode(this.f);
    z.removeNode(this.a);
    this.P = this.K = this.f = this.a = k
};
var W1 = [],
    sVa = r(function () {
        var a = l;
        try {
            for (var b = 0, c = W1.length; b < c; b++) a = a || W1[b].receive()
        } catch (d) {
            W1[b].Ec.wa.close();
            if (!W1.length) return
        }
        b = lb();
        if (a) O1 = b;
        P1 = window.setTimeout(sVa, b - O1 < 1E3 ? 10 : 100)
    }, N1);

function tVa() {
    O1 = lb();
    P1 && window.clearTimeout(P1);
    P1 = window.setTimeout(sVa, 10)
}
function V1(a, b) {
    this.g = a;
    this.f = b;
    this.a = 0
}
V1.prototype.send = function (a) {
    this.a = ++this.a % 2;
    a = this.g + Jt + this.a + encodeURIComponent(a);
    try {
        if (y.La) this.f.location.href = a;
        else this.f.location.replace(a)
    } catch (b) {}
    tVa()
};

function T1(a, b, c) {
    this.Ec = a;
    this.f = b;
    this.g = c;
    this.a = this.f.location.href.split(Jt)[0] + nVa;
    W1.push(this);
    tVa()
}
T1.prototype.receive = function () {
    var a = this.f.location.href;
    if (a != this.a) {
        this.a = a;
        if (a = a.split(Jt)[1]) {
            a = a.substr(1);
            this.g(decodeURIComponent(a))
        }
        return i
    } else return l
};

function X1(a) {
    this.wa = a;
    this.f = this.wa.a.pru;
    this.a = this.wa.a.ifrid;
    y.La && uVa()
}
s(X1, H1);
if (y.La) var Y1 = [],
    Z1 = 0,
    uVa = function () {
        Z1 || (Z1 = window.setTimeout(function () {
            $1()
        }, 1E3))
    },
    $1 = function (a) {
        var b = lb();
        for (a = a || 3E3; Y1.length && b - Y1[0].timestamp >= a;) {
            var c = Y1.shift().hY;
            z.removeNode(c)
        }
        Z1 = window.setTimeout(vVa, 1E3)
    },
    vVa = function () {
        $1()
    };
X1.prototype.iq = 3;
X1.prototype.te = function () {
    this.send(J1, U1)
};
X1.prototype.GE = function (a) {
    if (a == U1) {
        this.send(J1, K1);
        L1(this.wa)
    } else a == K1 && L1(this.wa)
};
var wVa = '<iframe onload="this.xpcOnload()"></iframe>';
X1.prototype.send = function (a, b) {
    if (y.ia) {
        var c = document.createElement(A);
        c.innerHTML = wVa;
        c = c.childNodes[0];
        c.S2 = xVa
    } else {
        c = document.createElement(Kd);
        y.La ? Y1.push({
            timestamp: lb(),
            hY: c
        }) : oe(c, Oe, xVa)
    }
    var d = c.style;
    d.visibility = Kf;
    d.width = c.style.height = ya;
    d.position = zf;
    d = this.f;
    d += Jt + this.wa.name;
    if (this.a) d += Gj + this.a;
    d += Aa + a + Sf + encodeURIComponent(b);
    c.src = d;
    document.body.appendChild(c)
};

function xVa() {
    z.removeNode(this);
    this.S2 = k
}
window.xpcRelay = function (a, b) {
    var c = b.indexOf(Sf);
    M1(F1[a], b.substring(0, c), decodeURIComponent(b.substring(c + 1)))
};
X1.prototype.q = function () {
    X1.p.q.call(this);
    y.La && $1(0)
};

function a2(a, b) {
    this.wa = a;
    this.M0 = b || hd
}
s(a2, H1);
a2.prototype.a = l;
a2.prototype.iq = 1;
var b2 = 0;

function yVa(a) {
    var b = a.Zc.data,
        c = b.indexOf(Aa),
        d = b.indexOf(Sf);
    if (c == -1 || d == -1) return l;
    a = b.substring(0, c);
    c = b.substring(c + 1, d);
    b = b.substring(d + 1);
    if (d = F1[a]) {
        M1(d, c, b);
        return i
    }
    for (var e in F1) {
        d = F1[e];
        if (d.ki() == 1 && !d.Be() && c == J1 && b == U1) {
            d.name = a;
            delete F1[e];
            F1[a] = d;
            M1(d, c, b);
            return i
        }
    }
    return l
}
n = a2.prototype;
n.GE = function (a) {
    switch (a) {
    case U1:
        this.send(J1, K1);
        break;
    case K1:
        L1(this.wa);
        break
    }
};
n.te = function () {
    if (b2 == 0) oe(window.postMessage ? window : document,
    oU,
    yVa,
    l,
    a2);
    b2++;
    this.a = i;
    this.YG()
};
n.YG = function () {
    if (!this.wa.Be()) {
        this.send(J1, U1);
        window.setTimeout(r(this.YG, this), 100)
    }
};
n.send = function (a, b) {
    var c = this.wa.Jf;
    if (c) {
        var d = c.postMessage ? c : c.document;this.send = function (e, g) {
            d.postMessage(this.wa.name + Aa + e + Sf + g, this.M0)
        };this.send(a, b)
    }
};
n.q = function () {
    a2.p.q.call(this);
    if (this.a) {
        b2--;
        if (b2 == 0) re(window.postMessage ? window : document,
        oU,
        yVa,
        l,
        a2)
    }
};
var zVa = "Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport.GCXPC____NIXJS_handle_message(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport.GCXPC____NIXJS_create_channel(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap = New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function",
    AVa = "vbscript";

function c2(a) {
    this.wa = a;
    this.a = a.at || v;
    this.f = a.rat || v;
    if (!window.nix_setup_complete) try {
        window.execScript(zVa, AVa);
        window.nix_setup_complete = i
    } catch (b) {}
    this.GCXPC____NIXJS_handle_message = this.nW;
    this.GCXPC____NIXJS_create_channel = this.IT
}
s(c2, H1);
n = c2.prototype;
n.iq = 6;
n.hp = l;
n.Km = k;
n.te = function () {
    this.wa.ki() == 0 ? this.yG() : this.xG()
};
n.yG = function () {
    if (!this.hp) {
        var a = this.wa.Lo;
        try {
            a.contentWindow.opener = window.GCXPC____NIXVBS_get_wrapper(this, this.a);
            this.hp = i
        } catch (b) {}
        this.hp || window.setTimeout(r(this.yG, this), 100)
    }
};
var BVa = "GCXPC____NIXVBS_container";
n.xG = function () {
    if (!this.hp) {
        try {
            var a = window.opener;
            if (a && BVa in a) {
                this.Km = a;
                if (this.Km.GetAuthToken() != this.f) return;
                this.Km.CreateChannel(window.GCXPC____NIXVBS_get_wrapper(this, this.a));
                this.hp = i;
                L1(this.wa)
            }
        } catch (b) {
            return
        }
        this.hp || window.setTimeout(r(this.xG, this), 100)
    }
};
n.IT = function (a) {
    this.Km = a;
    this.Km.GetAuthToken() == this.f && L1(this.wa)
};
n.nW = function (a, b) {
    window.setTimeout(r(function () {
        M1(this.wa, a, b)
    }, this), 1)
};
n.send = function (a, b) {
    this.Km.SendMessage(a, b)
};
n.q = function () {
    c2.p.q.call(this);
    this.Km = k
};
var CVa = "unload";

function d2(a) {
    this.a = a;
    this.name = this.a.cn || G1(10);
    this.f = {};
    F1[this.name] = this;
    oe(window, CVa, DVa)
}
s(d2, t);
n = d2.prototype;
n.Ec = k;
n.gB = 1;
n.Be = function () {
    return this.gB == 2
};
n.Jf = k;
n.Lo = k;

function EVa(a) {
    var b = {};
    b.cn = a.name;
    b.tp = a.a.tp;
    if (a.a.lru) b.pru = a.a.lru;
    if (a.a.lpu) b.ppu = a.a.lpu;
    if (a.a.ppu) b.lpu = a.a.ppu;
    return b
}
var FVa = "xpcpeer",
    GVa = "xpc";

function HVa(a, b, c, d) {
    var e = a.a.ifrid;
    e || (e = a.a.ifrid = FVa + G1(4));
    var g = z.createElement(zd);
    g.id = g.name = e;
    if (c) c(g);
    else g.style.width = g.style.height = Ba;
    var h = a.a.pu;
    if (cb(h)) h = a.a.pu = new rO(h);
    d !== l && FO(h, GVa, cr(EVa(a)));
    if (y.Ua || y.La) {
        a.dA = i;
        window.setTimeout(r(function () {
            this.dA = l;
            b.appendChild(g);
            g.src = h.toString();
            this.XG && this.te(this.WG)
        }, a), 1)
    } else {
        g.src = h.toString();
        b.appendChild(g)
    }
    return g
}
n.dA = l;
n.XG = l;
n.te = function (a) {
    this.WG = a || Pa;
    if (this.dA) this.XG = i;
    else {
        if (this.a.ifrid) this.Lo = z.z(this.a.ifrid);
        if (this.Lo) {
            (a = this.Lo.contentWindow) || (a = window.frames[this.a.ifrid]);
            this.Jf = a
        }
        if (!this.Jf) if (window == top) f(Error("CrossPageChannel: Can't connect, peer window-object not set."));
        else this.Jf = window.parent;
        if (!this.Ec) {
            if (!this.a.tp) {
                a = this.a;
                var b;
                if (gb(document.postMessage) || gb(window.postMessage) || y.ia && window.postMessage) b = 1;
                else if (y.Ua) b = 2;
                else if (y.ia && this.a.pru) b = 3;
                else if (y.ia) b = 6;
                else if (this.a.lpu && this.a.ppu) b = 4;
                a.tp = b
            }
            switch (this.a.tp) {
            case 1:
                this.Ec = new a2(this, this.a.ph);
                break;
            case 6:
                this.Ec = new c2(this);
                break;
            case 2:
                this.Ec = new I1(this);
                break;
            case 3:
                this.Ec = new X1(this);
                break;
            case 4:
                this.Ec = new N1(this);
                break
            }
            if (!this.Ec) f(Error("CrossPageChannel: No suitable transport found!"))
        }
        this.Ec.te()
    }
};
n.close = function () {
    if (this.Be()) {
        this.gB = 3;
        this.Ec.G();
        this.Ec = k
    }
};

function L1(a) {
    if (!a.Be()) {
        a.gB = 2;
        a.WG()
    }
}
n.send = function (a, b) {
    if (this.Be()) if (this.Jf.closed) this.close();
    else {
        if (hb(b)) b = cr(b);
        this.Ec.send(a, b)
    }
};

function M1(a, b, c) {
    if (!b || b == J1) a.Ec.GE(c);
    else if (a.Be()) if (a = a.f[b]) {
        if (a.yY) try {
            c = DK(c)
        } catch (d) {
            return
        }
        a.Tq(c)
    }
}
n.ki = function () {
    return window.parent == this.Jf ? 1 : 0
};
n.q = function () {
    d2.p.q.call(this);
    this.close();
    this.Lo = this.Jf = k;
    delete this.f;
    F1[this.name] = k
};

function DVa() {
    for (var a in F1) {
        var b = F1[a];
        b && b.G()
    }
};
var IVa = "outer";

function e2(a, b, c) {
    this.a = [];
    if (a == Ca) {
        a = DK(uwa(new rO(window.location.href), GVa));
        a = new d2(a);
        JVa(this, a, b);
        this.wa = a;
        this.wa.te(r(this.rM, this))
    } else if (a == IVa) {
        if (!c) f(Error("Please specify xpc config when initializing outer frame"));
        a = new d2(c);
        JVa(this, a, b);
        this.wa = a
    }
}
s(e2, t);
n = e2.prototype;
n.q = function () {
    e2.p.q.call(this);
    this.wa.G();
    delete this.wa;
    delete this.a
};
n.Ja = function (a, b) {
    var c = HVa(this.wa, a, b);
    this.wa.te(r(this.rM, this));
    return c
};
n.Be = function () {
    return this.wa.Be()
};
n.send = function (a, b) {
    this.wa.Be() ? this.wa.send(a, b) : this.a.push([a, b])
};
n.rM = function () {
    for (var a = this.a, b = 0; b < a.length; b++) {
        var c = a[b];
        this.send(c[0], c[1])
    }
    this.a = []
};

function JVa(a, b, c) {
    for (var d in c) b.f[d] = {
        name: d,
        Tq: c[d],
        yY: i
    }
};

function KVa(a) {
    this.P = a || k;
    this.n = this.M = this.a = this.f = this.g = usa;
    this.aa = this.u = 0
}
function LVa(a, b) {
    a.ua = b;
    return a
}
function MVa(a, b) {
    a.g = b;
    return a
}
function NVa(a, b) {
    a.f = b;
    return a
}
function OVa(a, b) {
    a.a = b;
    return a
}
function PVa(a, b) {
    a.n = b;
    return a
}

function QVa(a) {
    var b = a.P,
        c = a.a,
        d = a;
    return function (e) {
        function g() {
            q = i;
            d.f.call(b, o, w);
            c.call(b, o, w);
            o = k
        }
        function h(B) {
            u = i;
            kc(C, te);
            q && d.M.call(b, B, w)
        }
        if (!(!Vd(e, 0) || e.ctrlKey && y.Fc)) {
            e.preventDefault();
            e.stopPropagation();
            var j = [e.clientX, e.clientY],
                m = d.ua || e.currentTarget,
                o = new Qd(e.Zc, m),
                q = l,
                u = l,
                w = {},
                C = [];
            C.push(oe(m, Fo, function (B) {
                B.stopPropagation();
                B.preventDefault();
                if (q) c.call(b, B, w);
                else {
                    var H = B.clientX - j[0],
                        I = B.clientY - j[1];
                    if (H * H + I * I > d.u) {
                        g();
                        c.call(b, B, w)
                    }
                }
            }));
            C.push(oe(m, Go, function (B) {
                if (Vd(B, 0)) {
                    B.stopPropagation();
                    B.preventDefault();
                    h(B);
                    d.n.call(b, B, w)
                }
            }));
            d.K && C.push(oe(d.K, d.xa, function (B) {
                B.cancel = i;
                h(B)
            }));
            d.g.call(b, o, w);
            d.u ? Oj(function () {
                !q && !u && g()
            }, d.aa) : g()
        }
    }
};

function f2() {
    return z.fe(z.fc(document))
};
var RVa = "escape",
    SVa = "sketchy-dialog-title-text",
    TVa = "sketchy-dialog-title-autosave",
    UVa = "sketchy-dialog-bg",
    VVa = "sketchy-dialog-fg",
    WVa = "sketchy-dialog-title-close",
    XVa = "sketchy-dialog-title",
    YVa = "sketchy-dialog-content",
    ZVa = "sketchy-dialog",
    $Va = "update",
    aWa = "autoSave";

function g2(a, b, c, d, e) {
    function g() {
        this.wa.send(RVa, {})
    }
    this.Wc = uB(a);
    this.Oa = b;
    this.xa = c;
    this.Ya = d;
    this.a = e || z.J();
    this.kb = l;
    this.Aa = k;
    this.M = this.xJ = this.P = l;
    this.aa = this.a.F(Ee, {
        "class": SVa
    });
    this.K = this.a.F(Ee, {
        "class": TVa
    });
    this.f = this.a.F(A, {
        "class": UVa
    });
    Pf(this.f, 0.3);
    Qf(this.f, l);
    this.g = this.a.F(A, {
        "class": VVa
    });
    Qf(this.g, l);
    this.u = this.a.F(up, {
        "class": WVa
    }, sk);
    a = this.a.F(A, {
        "class": XVa
    }, this.aa, this.K, this.u);
    this.n = this.a.F(A, {
        "class": YVa
    });
    this.ua = this.a.F(A, {
        "class": ZVa,
        tabIndex: 0
    }, a, this.n);
    Qf(this.ua, l);
    a = this.a.Va().body;
    a.appendChild(this.f);
    a.appendChild(this.ua);
    a.appendChild(this.g);
    this.lb = Db(Kp, r(this.i2, this), $Va, r(this.eM, this), aWa, r(function (h) {
        this.xJ = i;
        bWa(this, h)
    }, this));
    a = QVa(PVa(OVa(NVa(MVa(LVa(new KVa(this), this.g), kb(Qf, this.g, i)), function (h, j) {
        var m = f2();
        j.B_ = m.width - this.ua.offsetWidth;
        j.C_ = m.height - this.ua.offsetHeight;
        j.x = this.ua.offsetLeft - h.clientX;
        j.y = this.ua.offsetTop - h.clientY
    }), function (h, j) {
        uf(this.ua, Math.max(0, Math.min(j.B_, h.clientX + j.x)), Math.max(0, Math.min(j.C_, h.clientY + j.y)))
    }), kb(Qf, this.g, l)));
    this.cc = (new ze(this)).C(this.f, Go, g).C(this.ua, Go, g).C(this.ua, Co, a).C(this.u, Co, function (h) {
        h.stopPropagation()
    }).C(this.u, Ud, function () {
        this.wa.send(Kp, {});
        this.wa.Be() || this.X(l)
    })
}
s(g2, t);
n = g2.prototype;
n.setTitle = function (a) {
    z.Ud(this.aa, a)
};
var cWa = "newDrawing";
n.Z_ = function (a, b) {
    this.M = i;
    var c = b || dWa(this);
    eWa(this, cWa, {
        size: [c.width, c.height]
    }, a);
    this.P = i
};
var fWa = "loadDrawing";
n.v_ = function (a, b) {
    this.M = l;
    eWa(this, fWa, {
        id: a
    }, b);
    this.P = l
};

function eWa(a, b, c, d) {
    gWa(a, c.id || k);
    z.Ud(a.K, v);
    a.Cb = d;
    d = dWa(a);
    hWa(a, d);
    Bb(c, {
        app: a.xa,
        parent: a.Ya,
        viewSize: [d.width, d.height]
    });
    a.wa.send(b, c);
    Oj(function () {
        this.X(i);
        z.ew(this.je).focus()
    }, 0, a)
}
function dWa() {
    for (var a = [720, 800, 960, 1024, 1152, 1280], b = f2(), c = a[0], d = a.length - 1; d > 0; d--) if (a[d] + 66 <= b.width && a[d] * 0.75 + 129 <= b.height) {
        c = a[d];
        break
    }
    return {
        width: c * 381,
        height: c * 0.75 * 381
    }
}
n.X = function (a) {
    if (a != this.kb) {
        var b = this.a.Va(),
            c = z.fc(b);
        if (a) {
            this.rE();
            iWa(this);
            oe(c, yp, this.rE, i, this)
        } else re(c, yp, this.rE, i, this);
        Qf(this.f, a);
        Qf(this.ua, a);
        if (a) {
            c = this.K.style;
            var d = 20 + this.u.offsetWidth + D;
            if (b.body.dir == Xx) c.left = d;
            else c.right = d;
            this.a.Va().body.focus();
            this.ua.focus()
        }
        this.kb = a
    }
};
n.Da = function () {
    return this.kb
};
n.i2 = function (a) {
    this.X(l);
    this.eM(a, i)
};
var jWa = "Auto-saved at ";

function bWa(a, b) {
    z.Ud(a.K, jWa + (b.timestr || (new Date(b.time)).toLocaleTimeString()))
}
n.eM = function (a, b) {
    this.xJ || bWa(this, a);
    var c = a.id;
    if (c) {
        this.Aa = c;
        if (b || this.M) {
            var d = a.size,
                e = a.crop;
            this.Cb(new asa(c, a.revision, {
                width: d[0],
                height: d[1]
            }, e ? {
                left: e[0],
                top: e[1],
                width: e[2] - e[0],
                height: e[3] - e[1]
            } : k,
            !! b))
        }
    }
};

function hWa(a, b) {
    var c = bsa(b),
        d = c.height + 31;
    a.je.width = c.width;
    a.je.height = d;
    a.n.style.height = d + D;
    a.ua.style.width = c.width + D;
    iWa(a)
}
var kWa = "pu",
    lWa = "ppu",
    mWa = "relay.html",
    nWa = "lpu";

function gWa(a, b) {
    if (a.wa) {
        a.n.removeChild(a.je);
        a.wa.G()
    }
    var c = new rO(a.Wc);
    b && FO(c, Iv, b);
    c = Db(kWa, c.toString(), lWa, qwa(c, new rO(mWa)).toString(), nWa, a.Oa);
    a.wa = new e2(IVa, a.lb, c);
    a.je = a.wa.Ja(a.n, r(a.R1, a))
}
n.R1 = function (a) {
    a.style.border = ya;
    a.frameBorder = Jp;
    a.scrolling = Jp;
    a.marginheight = Xd;
    a.marginwidth = Xd
};
n.rE = function () {
    Qf(this.f, l);
    var a = f2();
    Qf(this.f, i);
    Ff(this.f, a.width, a.height);
    Ff(this.g, a.width, a.height)
};

function iWa(a) {
    if (rf(a.ua) == yf) var b = 0,
        c = 0;
    else {
        c = a.a.hg();
        b = c.x;
        c = c.y
    }
    var d = Mf(a.ua),
        e = f2();
    uf(a.ua, Math.max(b + e.width / 2 - d.width / 2, 0), Math.max(c + e.height / 2 - d.height / 2, 0))
}
n.q = function () {
    this.X(l);
    this.cc.G();
    z.removeNode(this.ua);
    z.removeNode(this.f);
    z.removeNode(this.g)
};

function oWa() {}
s(oWa, Pi);
var pWa = "client",
    qWa = "/relay.html";

function h2(a, b, c, d, e) {
    this.Xa = a;
    this.g = b;
    this.n = c;
    this.f = d;
    this.a = e;
    a = tB(this.g, this.n, this.a, undefined, pWa);
    b = window.location.href;
    c = qWa;
    Hb(c, Hj) || (c = Hj + c);
    b = Sra(b) + c;
    a = new g2(a, b, Vw, this.f);
    a.setTitle(nk);
    this.Nd = a
}
s(h2, oWa);
h2.prototype.X = function (a) {
    gK(this.Xa, r(function () {
        this.Nd.X(a);
        a || this.dispatchEvent(zp)
    }, this))
};
h2.prototype.q = function () {
    h2.p.q.call(this);
    delete this.Nd
};

function i2() {}
i2.prototype.a = ["Symbol", "Punctuation", "Number", "Format & Whitespace", "Modifier", "Latin", "Other European Scripts", "American Scripts", "African Scripts", "Middle Eastern Scripts", "South Asian Scripts", "Southeast Asian Scripts", "Hangul", "Other East Asian Scripts", "Han 1-Stroke Radicals", "Han 2-Stroke Radicals", "Han 3-Stroke Radicals", "Han 4-Stroke Radicals", "Han 5-Stroke Radicals", "Han 6-Stroke Radicals", "Han 7-Stroke Radicals", "Han 8-Stroke Radicals", "Han 9-Stroke Radicals", "Han 10-Stroke Radicals", "Han 11..17-Stroke Radicals", "Han - Other", "Miscellaneous"];
var j2 = "Historic",
    k2 = "Other",
    l2 = "Compatibility",
    m2 = "Less Common";
i2.prototype.f = [
    ["Arrows", "Braille", "Control Pictures", "Currency", "Game Pieces", "Gender and Genealogical", "Geometric Shapes", "Keyboard and UI", "Math", "Miscellaneous", "Musical", "Stars/Asterisks", Hk, Jk, "Technical", "Weather and Astrological", "Yijing / Tai Xuan Jing", j2],
    ["ASCII Based", "Dash/Connector", k2, "Paired", j2, l2],
    ["Decimal", "Enclosed/Dotted", "Fractions/Related", k2, j2, l2],
    [QQa, "Variation Selector", "Whitespace", j2, l2],
    ["Enclosing", "Nonspacing", "Spacing", j2, l2],
    ["Common", "Flipped/Mirrored", k2, "Phonetics (IPA)", "Phonetics (X-IPA)", j2, l2],
    ["Armenian", "Cyrillic", "Georgian", "Greek", "Historic - Coptic", "Historic - Cypriot", "Historic - Cyrillic", "Historic - Georgian", "Historic - Glagolitic", "Historic - Gothic", "Historic - Greek", "Historic - Linear B", "Historic - Ogham", "Historic - Old Italic", "Historic - Runic", "Historic - Shavian", "Compatibility - Armenian", "Compatibility - Greek"],
    ["Canadian Aboriginal", "Cherokee", "Historic - Deseret"],
    ["Ethiopic", "Nko", "Tifinagh", "Vai", "Historic - Nko", "Historic - Osmanya"],
    ["Arabic", "Hebrew", "Thaana", "Historic - Arabic", "Historic - Carian", "Historic - Cuneiform", "Historic - Hebrew", "Historic - Lycian", "Historic - Lydian", "Historic - Old Persian", "Historic - Phoenician", "Historic - Syriac", "Historic - Ugaritic", "Compatibility - Arabic", "Compatibility - Hebrew"],
    ["Bengali", "Devanagari", "Gujarati", "Gurmukhi", "Kannada", "Lepcha", "Limbu", "Malayalam", "Ol Chiki", "Oriya", "Saurashtra", "Sinhala", "Tamil", "Telugu", "Tibetan", "Historic - Kannada", "Historic - Kharoshthi", "Historic - Phags Pa", "Historic - Syloti Nagri", "Compatibility - Bengali", "Compatibility - Devanagari", "Compatibility - Gurmukhi", "Compatibility - Oriya", "Compatibility - Tibetan"],
    ["Balinese", "Cham", "Kayah Li", "Khmer", "Lao", "Myanmar", "New Tai Lue", "Tai Le", "Thai", "Historic - Buginese", "Historic - Buhid", "Historic - Hanunoo", "Historic - Khmer", "Historic - Rejang", "Historic - Sundanese", "Historic - Tagalog", "Historic - Tagbanwa"],
    [k2, "\u1100", "\u1102", "\u1103", "\u1105", "\u1106", "\u1107", "\u1109", "\u110b", "\u110c", "\u110e", "\u110f", "\u1110", "\u1111", "\u1112", j2, l2],
    ["Bopomofo", "Hiragana", "Katakana", "Mongolian", "Yi", "Compatibility - Bopomofo", "Compatibility - Hiragana", "Compatibility - Katakana", "Compatibility - Yi"],
    ["\u4e00", "\u4e28", "\u4e36", "\u4e3f", "\u4e59", "\u4e85", l2, m2],
    ["\u4e8c", "\u4ea0", "\u4eba", "\u513f", "\u5165", "\u516b", "\u5182", "\u5196", "\u51ab", "\u51e0", "\u51f5", "\u5200", "\u529b", "\u52f9", "\u5315", "\u531a", "\u5338", "\u5341", "\u535c", "\u5369", "\u5382", "\u53b6", "\u53c8", "\u8ba0", l2, m2],
    ["\u53e3", "\u56d7", "\u571f", "\u58eb", "\u5902", "\u590a", "\u5915", "\u5927", "\u5973", "\u5b50", "\u5b80", "\u5bf8", "\u5c0f", "\u5c22", "\u5c38", "\u5c6e", "\u5c71", "\u5ddb", "\u5de5", "\u5df1", "\u5dfe", "\u5e72", "\u5e7a", "\u5e7f", "\u5ef4", "\u5efe", "\u5f0b", "\u5f13", "\u5f50", "\u5f61", "\u5f73", "\u7e9f", "\u95e8", "\u98de", "\u9963", "\u9a6c", l2, m2],
    ["\u5fc3", "\u6208", "\u6236", "\u624b", "\u652f", "\u6534", "\u6587", "\u6597", "\u65a4", "\u65b9", "\u65e0", "\u65e5", "\u66f0", "\u6708", "\u6728", "\u6b20", "\u6b62", "\u6b79", "\u6bb3", "\u6bcb", "\u6bd4", "\u6bdb", "\u6c0f", "\u6c14", "\u6c34", "\u706b", "\u722a", "\u7236", "\u723b", "\u723f", "\u7247", "\u7259", "\u725b", "\u72ac", "\u89c1", "\u8d1d", "\u8f66", "\u97e6", "\u98ce", l2, m2],
    ["\u7384", "\u7389", "\u74dc", "\u74e6", "\u7518", "\u751f", "\u7528", "\u7530", "\u758b", "\u7592", "\u7676", "\u767d", "\u76ae", "\u76bf", "\u76ee", "\u77db", "\u77e2", "\u77f3", "\u793a", "\u79b8", "\u79be", "\u7a74", "\u7acb", "\u9485", "\u957f", "\u9e1f", "\u9f99", l2, m2],
    ["\u7af9", "\u7c73", "\u7cf8", "\u7f36", "\u7f51", "\u7f8a", "\u7fbd", "\u8001", "\u800c", "\u8012", "\u8033", "\u807f", "\u8089", "\u81e3", "\u81ea", "\u81f3", "\u81fc", "\u820c", "\u821b", "\u821f", "\u826e", "\u8272", "\u8278", "\u864d", "\u866b", "\u8840", "\u884c", "\u8863", "\u897e", "\u9875", "\u9f50", l2, m2],
    ["\u5364", "\u898b", "\u89d2", "\u8a00", "\u8c37", "\u8c46", "\u8c55", "\u8c78", "\u8c9d", "\u8d64", "\u8d70", "\u8db3", "\u8eab", "\u8eca", "\u8f9b", "\u8fb0", "\u8fb5", "\u9091", "\u9149", "\u91c6", "\u91cc", "\u9f9f", l2, m2],
    ["\u91d1", "\u9577", "\u9580", "\u961c", "\u96b6", "\u96b9", "\u96e8", "\u9751", "\u975e", "\u9c7c", "\u9f7f", l2, m2],
    ["\u9762", "\u9769", "\u97cb", "\u97ed", "\u97f3", "\u9801", "\u98a8", "\u98db", "\u98df", "\u9996", "\u9999", l2, m2],
    ["\u99ac", "\u9aa8", "\u9ad8", "\u9adf", "\u9b25", "\u9b2f", "\u9b32", "\u9b3c", l2, m2],
    ["\u9b5a", "\u9ce5", "\u9e75", "\u9e7f", "\u9ea5", "\u9ea6", "\u9ebb", "\u9ec3", "\u9ecd", "\u9ed1", "\u9ef9", "\u9efd", "\u9efe", "\u9f0e", "\u9f13", "\u9f20", "\u9f3b", "\u9f4a", "\u9f52", "\u9f8d", "\u9f9c", "\u9fa0", l2, m2],
    ["CJK Strokes", "Ideographic Description", k2, l2],
    ["All"]
];
i2.prototype.g = [
    ["2>80.x$<86P2K2UGl18t2OJO6JO6hm-3;f10O728F1f4V1PNF2Wd78?PZl1%2l2", ";oA0FN", "(j90d3", ":EBAi)0rt)0oZ)04E{9)0Ai)0{h)0Qi)0+@#0w<40s8Q3x0L3x0|C1", "Q6A06f5#1H2,]4M9Psv+V1I.V1@3W}8", "2JA0sOc", "2+90FN2U10t2H36^3u0%E6OW6", ";O906$UGv771.Uv46", "w010P3K393R6*2GQm70M%971WO6WU>r80oZ)0=JL4u0>t20X1S1X1Yh2064B@1=cMw!u0D%w02{w0KJ>fw0qM=2E11D^60QF7092M:6o,w0z+w0xo,w0++w0<o,w0b,w0o,w0j,w0P2K1GG]3JWhX3N1okR1H5H5H5H5r)R1U(hR1H5H5H5H5+$R1cL`70Q`70M`I>%80oZ)0T210];Tyw0X1Db80P6=24EoZ)0yG5Fw0z390oZ)0qGjyw0X1fg2C206jEB0oZ)0*G5Fw0z]80Yh)0+l)0oZ)0D4x0LV80oZ)0Dkw0`aX1nZ!jb70ob70jb70ob70d1A7205720N1WRM8M838c:2*2l18M11_11_ke83868386eZeZ19`819`86G8386838!P7K7P7K7V1.)cWRWR6OM15`415`415`415`4#3WcWl1$M:16H8%2V28H211cvg.]4s%e?8Od2WV1PN-B12@8GF18N9O79838}2X4-1GcDP10wrQ1....i3....i3....i3....i3....i3....i3....i3....i3....i3....r210v4v4v4v4v4v4v4v4v4v4v4v44xv4v4v4v4v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v4+wR1w}Q1v4v4X9v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v4z!R1:3w}Q1v4v4v4v49Ev4v4v4v4v4DsR1;}Q1v4v4v4v4v4v4v4v4v4v4v4v4zuR1o{Q1v4v4v4v4v4v4v4v4v4v4v4v4TuR192;}Q1v4v4X9v4v4v4v4v4v4v4v4zwR1o}Q1v4v4X9v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v4zwR1o}Q1v4v4X9v4v4v4v4v4v4v4v4>xR1o5R1v4v4X9v4v4v4v4v4v4v4v44xv4v4v4v4v4v4v4v4v4v4v4v4rxR1Q5R1X9v4v4v4v4v4v4v4v4v4v4T!R1E23R1v4v4X99Ev4v4v4v4v4rxR195A0R1v4v4v4v4v4v4v4v4v4v4v4v4{zR16(2R1v4v4X9X9v4v4v4v4v4v4]3bwR1A0R1v4v4v4v4v4v4v4v4v4v4v4v44xv4v4v4v4v4v4v4v4v4v4v4v4]3Kwv4v4v4v4v4v4v4v4v4v4v4v44xv4v4v4v4v4v4v4v4v4v4v4v4jxR1I5R1v4v4v4v4v4v4v4v4v4v4v4v45!R1^2R1v4v4X9v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v4DxR120R1v4v4X9v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v4{zR1;2R1v4v4v4v4v4X9v4v4v4v4v4+uR1g2R1v4v4X9v4v4v4v4v4v4v4v44xv4v4v4v4v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v4+zR1w2R1v4v4v4v4v4X9v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v4+zR1w2R1v4v4v4v4v4X9v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v4+zR1Eg2R1v4v4X99Ev4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v44xv4v4v4v4v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v44xv4v4v4v4v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v44xv4v4v4v4v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v44xv4v4v4v4v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v44xv4v4v4v4v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v44xv4v4v4v4v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v44xv4v4v4v4v4v4v4v4v4v4v4v4Ksv4v4v4v4v4v4v4v4v4v4v4v4zzR1OI2R1v4v4v4v49Ev4v4v4v4v495H5H5H5H5aNH5H5H5H5qIH5H5H5H5aNH5H5H5H55]R1Y!R1H5H5H5H5b_R1^xR1H5H5H5H5qIH5H5H5H5aNH5H5H5H5qI]1H3]1H3]1H3]1H3]1aPH5H5H5H5]43iNH5H5H5H5aNH5H5H5H5qIH5H5H5H5aNH5H5H5H5qI%1X3%1X3%1X3%1X3%1KP.P4.P4.P4.P4.iJH5H5H5H5aNH5H5H5H5qIv1f3v1f3v1f3v1f3v1CPH5H5H5H5qIH5H5H5H5aNH5H5H5H5qIH5H5H5H5aNH5H5H5H5qIH5H5H5H5aNH5H5H5H5qIH5H5H5H5aNH5H5H5H5qIH5H5H5H5aNH5H5H5H5T^R1w#R1X1%3X1%3X1%3X1%3X1{{R12zR1H5H5H5H5qIH1]3H1]3H1]3H1]3H1yOH5H5H5H5qI6956956956956aNH5H5H5H5qIH5H5H5H5aNH5H5H5H5qIH5H5H5H5aNH5H5H5H5qIuf4uf4uf4uf4uCOH5H5H5H5qIH5H5H5H5aNH5H5H5H5qIH5H5H5H5aNH5H5H5H5qIH5H5H5H5aNH5H5H5H5>_R1M", "9FP1C1W8<g?90c8G72$U]3uV1f1F1G6$Ev7M8MG-1148MO8kGk4Kcq8sAqv0", "^6Z16mcL^O1MQmO1NM[d3{;O1EA<O1V1a1f1t2mhmc_U91E126ut2W|888Z888t2", "oUA0k873g510E", "I)B0bD306GB6h6R83_,", "XFgZ80H1TZ80]nEI0B0D0B0gjh0bjh0g270H,6R83_5Y80p6^Y80c9F8", "A-80PdsWF1GMG6$l7H1!%2N2G|mc18?", "Q4A0F1mv3}1v8,", "YnK0#5A>E1-7", "I{)0%4!P7|%4}3"],
    ["]3P13K2nB=8nBCDXC4DZv2`1W14=4J8", "n8i42c808M%3:1*1Qw30", "Im80Rq1Yw30Lu30Qu30Lv30GGpS26i1MOf2$6a2GGG:1S16Iw30G6r!30", ";g80Mv26y2M{R80X1SD6f48v28oZ806^n2064B@1=cMwt106G,Q)s06rmu0F1H76:2c%iM", "gm808kIr3072v1U8A(t06", "Ig80e91E91686W8$EH1X36P162pw0,12-1G|8F18W86nDE8c8M[6O6X2E8f2886"],
    ["P4,At10,HC,1I,fb,%A,%A,%A,%A,%A,%A,%A,%A,XK,%A,X6,PP,X6,Q]10,f3,PR,vB,1Y,]K,m,Yca0,vz,f3,vT,", "gs90V597@1Pvt2g+20,n3N1]2,n3N1", "9G6eGEoX80Ocm,PI71", "^t206vjEvYcQp10?YeU1!bSW1f#QR20oW60{n705i20nwGP!IS20;Y60^=M1LfU15i20nwGP!IS20;Y60^=M1LfU15i20nwGP!IS20;Y60^=M1LfU15i20IX10IS20;Y60^=M1LfU1+A10IS20;Y60^=M1LfU1+A10IS20;Y60^=M1LfU1+A10IS20;Y60^=M1LfU1+A10IS20;Y60^=M1LfU1+A10IS20;Y60^=M1", "o560EgM10,Yk10EGMo230w6u0}39175n1:aMv2$HCUXI,^E10M%Qso,60@8", "w.80-2o?30EHVM2Us0,"],
    ["op10M(>60UX2Uf4Uo=w0vME;Yt0sD]Y1;7606", "]=gg50Eg-y0V12[0A#L", "(V60gC206jf80", "w-10f4^#206IV10(970", "fEAQ80?P3P4wB40^@s0"],
    ["(y80M8E", "II)08MY=t0En1sGk%2MDRY1*26y13eR.B15K5GxOX4i16K36OOcGl1G!8U8ke,8d1(R(0zR(0gR(0bR(0^{60c8E1,71WO|K:", "f!!^)30oJ30E8?8l18d2X4N32D40XH", "%?71Y`60M[F2926^Py0", "n<686"],
    ["%8=2fE=2%2=2163o;703G3W333+>70=2g@703G3W333r=70=2%2=2%2=2]53J3w:70333123)3>=70=249=21m4J`P=2%H3m333C3=2`8=2XI3G3=2=2fZqIqQ=2:E=2%2=213=2A]703G3W3335;703K4=2;[703>:703G3Z3I;70333P13jj70SI`Q=2]2=2nJ3G3G3=G=2HK3CH=2:E=2%2=213=2]2=2983u33J3Q:703G3+.704I=2]2=2XL3]83KR=2nL3W333m3KJ=2]2=2PM3W3*7=2nA3aJ=2:E=2%2=213=2;]703G3W3335@70=29B3K8=293=2nA3(,703{!703I$703G3W333W3=13913{,703iK=2]2=2]2=2fN3W3*K=2]N3m333]G3aSI=70{{70=2%O3nG3Kc=2]E=2%2=213=2XD3SA=2fD3p3[3p3I,703+#703A$703G3W333W3_3D480=2]2=2A|70333>x703Yy703L_70=2]2=2:E=2A`7035,703*A]Ao,7033333L580=29Q3W333SB=2H>=2]2=2]2=2]2=2XB3S8=2]2=2v5K7f4=2]2=2]2=2n5K7P7K7f4=2]2=2]2=2]2=2]2=2]2=2]2=2]2=2]2=2]2=2]2=2]2=2]2=2]2=2]2=2]2=2]2=293=213=2]2=2*X6Gf6", "]r=i1jKjnjQq40L!401GCpwGi0Trh04pM83:liJK1qQMnmaJQE10jm10(;50Lj50wX50{W50A1i0TJd0bB506(T40v]a8zE50I0105010IUi0{Zh0:7=w*Uc:V%Dih:h`h9X%B41n1WSL1Qau9q`jh_Bnm4lPm*mHn6amfmSmH6;+80j630Lj50wX50{W50QW80P1T#806f=^Y40(d30gtZ0bUi06AL10D9102g70+M70(#80+q80P3*jA#80{z80", "]f3943a23n63K63]23G3gZ703>Z703K232F70I640TDB02K70=C6^640B>]30XA3G3G3+l70vHg670f9%1TZ703`A3^w703qNL7703KG3ol703m3J3m3J3AUa03>zh0w7706P9%1>Y70Qa705a703nDSO39P3oY703Z333{a703G3Qb703G3`Oj6703IJ70+S70C7Ia705a70;Z706yCPP3;Sa03+ia0%1DY703oY80i2{M803iJ3XI3^e703CF^ha0++h03(Q70DY702X70Qia03L>h0P13SB3%M3Ya703J3m3J3m3%9{w70%8(JB03P13YdW03r?h03:E3Qi703{c703G3(c703aQzM702X70X2rZ70IX705g7031HX6I870r6703gX7035g703Yg703G3`Q]Aw^303T(303G3W333aRzM70%EwCB038>]30zJ70^!h03+=h0go703G3G34S:812;^305KB03og703G3W333iS:8jV706%BwL70+J70SLW3]B3983(c703G3rc703G3G3a43y13G3^i70333zf703G3YC708G3DP70;O7081CyB6LN70]B3AB701T3G3=S99w^30+_3012{W703fDn13=O;z703{w703]G3G3Ig703G3G3wNa03{<h0(M70r7703(F70`71Aw]30z_30]L3jx703;x703Z3G3m3^Ma035ja0]1DJ70qD;W70919N`33jx703;x703W333oMa03zia0Iaa03+ia0zS703wWB05DB0QH70jU7038PCKI3X93W3W333J3go703G3+i703G32i703W333KVE]6>F70oH70X2TZ70IO70TM702V701N3G3*V%9DW70(QB0GzDB0Ah70i13G3qWg4403Tx30333`MPO<3>h703n23`D3(t703G3G3qXDM703;T7092>L703f2YDB03+PB0153AH70%AgXa03G3G3Dsh03Irh03n93{qa06oha03bha0cb}6061168E8En2oah0!f9>na0%==?6H2B6%7q7K26:96y7C2]9y7P=i?692f=a=n7i7n7i7S21A`9>}60^}60HA`7%7GB4APApa7C2>`60^`60XA334842XASAvAqAXA6i86n<q>12EP8iAH2C2fALC70(170r1706]328706a842nAa842%Aq8X8y1q6f7.S8f86=Az{60;;70+?70oC70MDC7094S4GA370Mv8q86125z70BntM91cueUOAZh0N1XA6zoZ0O11G6e6O88m11X186", "%81C:WE4jfpS64j]BHXCjvCnd476KjXj8J88EeSk6]j6BP5454kPH:X=46SknkBSk9pq5P3*m69py4M:2in:k*k1lB6=Q`JXCH8XQ43]2`kHlCl6%lpE86G*l:l6=l9p*2KmPmK3.6P2SmXm6amfmam6fmamfmE86116iKMPJnPeP1CNOO6P1S4E8GWn317*26y13eOBGxH36K3[MGl1G!86WU%2W=BgA8038O6", "Pz8_P1*5%4116y4v3K3Ge613B*2f36i2G6:16", "HZ6uP268691s15P361Jd1oQ7068H8cHw!Y?20kAZW0sH26P1l6:BU", "HF8WWO8:A6116v5H6!P3E%KcA170!nR6vgH1vBM8E8?86GUGE8O8M8E86W8.U12-2X.}6;l30HBMvE,et8:2Qtq0kg710N2mN2"],
    ["Ab10S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4X4S4GX444]3448R6O", "Y910=2fH3G3m3G3Z3*E=2]2=2]2=2XB3G3f93C93]83qH=2fL3*FK7PN3=FK7nD3`8=2P5K7P7K7XJ3*BK7f4=2nF3f23K63q8=2nL3913a43aCK7]J3f33yI=2H6K7XJ3=73H83=CK7P7K7f4=2v5K7f4=2vB3%334333333:B3J3KK=2fF3173P134IK7HN3913qJ=29G34D=2vF3a33X33P83SB3y6K7PN3iI=2HI3G3G3iF=2PC3S33*5=21A3XC3SJ=2XL3*83a9=2fL3*83S7K7P7K7]4=2fI34DK7nK3G3463G3`43y4=2]2=2nJ3G3*63$3483%233333y4=2]C3=9=2vI3i53]13q13W3G3q8K795=2]2=2]2=2]2=2vI3qF=2%83y33=1=2XH3SE=2]2=2HL3KG3G3W333W3G3G3G3G3G3n43nA3`6S1=k%f6BZ", "Id40@2mM8b230", ":{=2YM70uRu:AuiCu:Au`Bu:AuK1uKCuRu:AuiCu:Au`Bu:AuK1ubW70a3(d70C6v6xBuB6huh$ja70=2]2=2]2=2]2=2gN70uRu<u)uRu<uTM70S3oX70%7Lb70=2]2=2(O70uRuX9u4BuX9uiAuX9uK1u*AuRuX9u4BuX9uiAuX9uK1uzX70S3^e70K7%7xO6R$bb70=2]2=22Q70uRu<uRuC1uRu<uRubP70S3(X7019<uBza70=2S2of70WhuLX70C5=2]2=2]2=2]2=2]2=2]2=2^Q70uRu<u)uRu<u>N70*5(X70nBze70=2]2=2wf706mDY70C5=2%28=2]2=2;R70OBOZuRu<uRurP70y5(X709A<uB5c70=2WAe70Whu+c70=2]2=2]2=2]2=2^S70uRu15uy6u15uC6u15uK1ua6uRu15uy6u15uC6u15uK1uLW70y5(i70=AXBxO6R${l70eZ", "Q210F12$A0t9P1k", "^-+0cG8@386OG", "^G10MQ^A0-2o,V0-2Gl1$d2", ";Y40V3]3cW2a70V3", "^tB0F48F4", "^l*0V2", "]@MG6OEX7EO71f18GU8E;{(0#6YBt0N6", "(z)0|8N28t1868N1GF1937B", "o_50l2", "oh*0#28M", "g|50N7", "A;*0N4", "oe10g^$0U", "XG%$e68%6Ef26OoN70888888n58Uu88EOu8EOu8E.886:Q"],
    ["gP50VY8]L=LV1nKiKs]JcSKd1*3:3@H83", "wG50t7", ";(*0F7"],
    [";(40V1oM70jM70V11WM;=60DL70V1;J70+J70sIJ70DJ70soI70jI70!8MGk88MGs:PM;=60{E70V1wD70rD70s2D70{C70!8MGs^A70>A70sQA70LA70sw970r970!8MGk88MGN18sw470r47072o270j270s^170>170sQ170L170!8MGso}60M+}60sg|60b|60s;{60+{60sI{60D{607295MS5s%4MQ>60T^60EY_60k8k8k8k8k8k8k8kr07088UZBun3,i3?y1!", "I520t2v1h6<!W6B3=4,", "o_B0-4.", "^th071:N*Nl1PMKM-1fKaK#1%IyI?:H*HcvGuSH6PHKHc:G*G,9F4FM1H`G}1nDiD6nCiC}3X9S9}1X7S7c98C1=6kX6S6#483n1,", "^720E", "g?*0t2G,"],
    ["wP)05x%0f7a76973`6617HN6SUEf7G8:IkSRE176868i7:7689545C86f76G1J6]16G.KU6]7c86f8v96`Q6n8!%7%9X16W=S6H9Ef8:8f1G91*T6P96X8*H6P9K96H9P8%8E`Pv8c:G64Q996C9H9|%FECQHAM9GqQ9Q6CQfAMR%FESQ%AGEX5*3=1=AHBsOPF6qR6%BE86:EE`E69F6qS*5M91UQ=606b-60#1n1496f86S7G6XGS9J*86Be6^n%0+o%06181D`C1D`C1D`C1D`C1D`C1D`C1D`C1D`C1D`C1DqL]L6", "Il10cX26a2MH2423883G38683G38M44C1|m3ZGY?$0j?$08GP46", "g|10H26K2EH2C2MX26a2n2i2EX1S111u6*16]1=1691EK1kP2KcP1O:5,%S?", "gr10c]2UH46%2f6k8V19D6", ";Y*0V4", "gE=0-@HD@8H1M", "gf10#2:1M;>$0!f3", "^V*0l2", "AA,0N2e", "Aw*0F3WF1", "I7,0N2e", "wq10P1O]2[?X21DF18V5GE", "It*0t28", "I!10MA($0-813@Wv1#5G-4v371fAE88FC", "2a(08.F18U886868!"],
    ["gj20kv7q7v7a76Gl1%3y3M8k%5q5v5S5MOA@506T@50S5E*26fD]*6K+6y1,GcC5kv26i26GE.", "we2013`9sv7q7v7q7?19`8Uv8q8UX8S8?f7a771O%5412|506{260S5E17MX16[f]6i^,a4kv26y2!", "o<20*6kv7q7v7q78E8@18k868UO;t5065u50S5Efu6ql,8q4kv26y28E8E", "I)203q96$K16.Of8y96mv36K3#18k8Gf3w$506z)50S5E:96aO6f^6Kx,y2H3`4UW6GE", "QR30kv7q7v7i7E8}18!GUh.Q9506j950K56]8,a4kv26q2E8Mu6", "oZ70,96EK6N2%1ON1S36f1a1V1", "(r60l2n2E$6Ze,K4|W!", "^c30kv7q7v7i7E8Ev9q9F1]7=7Un7i78k:6*6:6*6:6*6kOw{406D3506vA)cS1,a4kv26q2E8E[<", "(h70V3K4,", "Y[20kv7q7v7a76G@18cP4K4868X5S5MOIi506bi50S5Eyb6fl]Y6`Z,a4kv26i26GE$6", "oni0d4q46]6|S3d1", "oo30l1O728!8GkI:406j@406HA*3Wc88sv16", ";A30`68cOE8MO6886O6OEO|`4HAc8<E41,.S5UOE8M.", "wF30kv7q7v7i7E8!n5i56f5a5|8,8UO^K506jQ50EHBPA6yC,$6GBGBG*5kv26q2E8Mu6", ";240:3*368M8M8M8M8M8cu8)ca9PCMaA6f28%66G6v5*CH66gq80L!80Q!80>w80MAx80,Gs5(80k]H6`H8cXA]6ECJEX18EGc:188e6fBs8c86=F,.)!f8E8M8M8M8M8M89141M.).)ca66H141eMm", "YZ30", "gU,0M86es8E8V2WEW!$!", "wU6068AU606e,Gs2*V0}4w|M0M", "(bi0@3", "Yr2068", "Yf20s", "Qz20G93EG", "Q0306", "A|30]4.WWW91.868$n1.WWW91YX#0M"],
    ["(C70N1f46i4N1P3K3U]2=2sP2K2E926C215!y5y4UP8J386Z6e,.!`3,K3V1", "Q`i0t392E8sn1EJ41,a3MC1,f1$6", "^zi0d2eE83C4,n2U", ";I6073H5`4E8?H3i1?GGB6GE1l-2Sn,K1:1,K6l191", "g:3068G68GmM8k8E88G6X46S4M86.GU88cG,q3Gc86", "QK40nAiAnAiAnAiA6%7y7XASA6PAKAf7e`7HACAcn8i8Ef9a96X9S96P96X1*AX9S9c]8S46%1a6]2=2:8*8X56n16<K6c]3MC4M11Ev746c976q8H7C7H7C7H7C7H7C7H7C7H7C7H7C7H7C7H7C7H7S56K36H3C3H6C6q13]7i1K69646WR966C6X3Mq3f7C7H7i7894W6v2`66v36WUP2OJOJ6W", "Y%60#392k$,W6K4d1u6", "2z60t2GU", ";z30N48691kupk91641?q3Gk", "2>60d2G6", "2C606.#1", "AA60}1", "gM60v311", "Y%i0F311", "^N70-3O|", "I760718k]26", "2C606%3718E86"],
    ["ozC0:4K16y1%1K4Qms06Tms0X2E42,GsC2H5C5P19112m6Pq", ";gj0}}-I", "(zk0Vr", "IRl0}}-I", "Akm0Vr", "oBn0Vr", "2%n0}}-I", "^_o0}}-I", ";Eq0Vr", "Q*q0}}-I", "I}r0Vr", "wqs0Vr", "AIt0Vr", "o-t0Vr", "2bu0Vr", "oh4078e76eV7gM80d8", "oJD0#2]5#2IGs0MX5#2OcGcGcGE"],
    ["ozC0:4HI1E`D%FyF613`26fFaFEnDiDHFqC%BSEHFCFHDCD6P2K2UfCaCE]C=CvC3iC6HC6KC1D`C6]C=CM:C*CnC6ZCC6:B$qC:BJiBOiNMi1%1K4Qms06Tms0X2E42,GsC2H5+|B06g]B0P19112m6", "^(C0c17`6M%6y6cP6K6sa7f7V3`516-1Y(s06b<s0UX96f8wqs0zzs06aB%19AH8yMQms06Tms0X2E42,GsC2H5C5H169112m6nU6", "w<C0c17`6M%6y6MHTCT6P6K6cnSiS6CGviaSN1HRCRM]Q=QE%QyQEnQiQEXQSQEHQCQE1Q`PMyE%EvPqP!]O=O]O=O]O=O]O=O]O=OEupupupupwvs06b<s0U1Iwqs0rqs06C96aB%19AH8yMQms06Tms0X2E42,GsC2H5C5H169112m6nU6", "Ag60kK9P9K993H2S593H2:1:1y3a5934393P2a593439312C5E]292n3f1KA]2=2]2P2K5]2=2]2]1:4*4`4]2=2E:4%46W86aAv292*4v292*4v2%2=1H4*7v21291=5%2n2S5n5i5v2q2f4[a5n211f1:147692P2a4f442%1C4X2%1C4M926:1f2n1i16f1a16uuS1X1S16:1*1P1K1OJ6P16GS945Mx6ZeR6R8e).e,1D", "oRg0-18}}-F>F10TuT06e,GsI,U0@4", "Ql)0M", "^%C0996G1MF1gas0U", "^%C0996]8PDF1vRF48@7g`r0N18}3", "Ql)0M"],
    ["ItK071]BYL10TX10kOJE8F192426", ";wK0M8!", "AyK0Ef1a1M8", "^yK0,8E2y30{x30|", "Q#K0U^iL0>iL0EG}2", "Q)K0k", "(bC0c]R]q8O8f2Eoeq0]116$f7fG;(k1E", "A(D0t3(rX1V288k8!8k8868|8l188U8718M8N48E88GE8#48MG@3oA20]G2P60;QB0]9^(20"],
    ["^)K0M8N1", "(+K0N2", "A.K0VA15`4@48}Z86GZG68d39141|8t1", "(gL0V3", "IkL0MY870T8706", "(kL0,gzK0bzK0U838c", ";mL0#1Yw50", "woL0-1", "oqL0#4", "YvL0-1", "QxL0?", "QyL074j%70o%70-1YjR1TjR1N3IjR1DjR18sWYoR1rpR1$M8F3", "Y;L0V58@2", "^^L0d2", "g{L0U", "^{L0l12KK0{JK0|", "w0M0!", "g1M0E8c838,(HK0zHK0U", "^3M071", "A5M0F2", "Y7M0t2;ZD0+ZD0MeZU8|", "ACM0l1", "(DM0V2IS10", "Y]a0l1bBI0gBI0}B", "QcC0}1%P8]qG688P1W6G6mO8;fq0f1E9386H18e11Ee[n16[91e11.G$H1n18611$X2cX5kg(k1F28d292%B6f6%A15P1O", ";+D0@G8l68l49HAi40cQRl0(Q+0uH3v1H788]9@18}2872Gk8E8|8s88E8G-18778@28lF8-6G,8@48#486GF28d28t18t48N3874868-78F58V18}28F48l48lG868d18N18#18!8NA8}28V68}28@98FP8s8}F8N28,8VG8F18tF8}2(s30%U;@101bI-50QE60^{40;X60"],
    ["IGM0}A{E802F80-BIJS1P3v2LPS1d6^NS1e%5{xa111oS80V48U8?8F1IWS1G>(a1P12U80n1P1t18V4HC^QS16+hS1f4@4(hS1X3WrlS1t3Gk%38^hS1136n46v25Gb1wi806ul28?888s122zS1uLPb1Yn80@18sI%S1D%S1}1f3^+S1v1e6WL=S1d1A]S1u+]S1-18,$xkGBGs", "^`M0c^MJ0>MJ0F3IAT1DAT1?OJE8N1", "g3N0EAHJ05HJ0VDH2C2728V28-3=3]3d38U8U_eel88F32(I0{%I0?;%I0+%I0!8!", "QjN0!iXnXF1", "YlN0k", "AmN0EJOU838", "AnN0l1", "(oN0738|4191d2", "wvN0N28t6y6%6#18}18Mi2n2738s$i1$s8V78#2:2y5:2#28d7n1i1d18M8MRWl1", "2DO0@283871", "YHO0t1;260+260#18MRW#3:1*1#1871", "QSO0?OJE8s", "YUO0k2?H0{>H0|", "AWO0@1", "AYO08t4", "2dO0E", "QdO0D#30I#30V28}44595@B8t1y1%1V88kpu?86BGU838E", "I.O0c8E", "A:O0|", "I;O071", "Y<O0t4QEV1LEV1@18kp$!838@1", "^{O0s", "2$K0oM40U", "A}O0@1OJE8-3mZU86x$@2I8H0D8H0c", "(9P0,", "wAP071", ";BP0s", "oCP0d5", "AIP0d1", "wJP0!8s", "QLP0V2mhc8U8,<[7186BGF1", "(gX071[<,8dB", "wud0t4", "obe0", "wne0V386BG,", "(:e0V5", "YeC0#2P=11Wm11686W(dq0G86:1mP26m6%1me%1E11X1OmEf1692Ge6H1%1Gm8GX3kX5F1A,k1}18l58E8EGMP8:5]6]9", "YAE0#18t38?8d18F18F38,8#28V(I!20|I!10E:5fX18EA8k08QQ+0%1u8Gn3v11B1693P2uO91$8OH2H713vMXG%1%K:6]SG13%2H@vX93-G8F38l28}48U8-18t38V18t7868-CGN98N38M8t48@2Gd4Gl28788|8k8}38FA8l18UGM8F68k8t58-68tA8?8VN8db8V38758V28t58F18k8#C8t!8V78V98tU8lT8de8-.8VO8lB8}B8#387987H8#38NJ8@78U8N18U8kgE10(L10v_X4ngA6109Nn2v2Ac101O1}HSQ*1094^.50N2:BP6Ay10Q<40]5;s20AE20V1H9^j20l1%g-3YY20"],
    ["oSP0NRreA0weA0@4]5=5-3;EW1+EW1@18M8V2a2f2d48F2K2P2l4", "Y]P072mhc8!838838", "o{P0-1", "g}P0E2LG0{KG08kpus871C1H1?8}3>*A0($A09476goW1boW1l5b?A0g?A0d5QnW1+ih1g_A0@68?grW1zsh1A0B011k8#5]6IqW1OjxW1-38F24C9Ck8E874GwvW1P6>-W1P3H468l411g$W1X2{|h1^IB0?8t28|{LB0;KB091#2838l186BGkw}W1", "((Q0U", "I)Q0F2rI40wI40t2GB68@12dA0{cA0E", "(;Q0(OF0zOF0N1", "I=Q071", "Y>Q0-1", "Q@Q0F1OJE8-1", ";^Q0U", "Q_Q0NA(+60j_B0(D50t1XDSDN2H1C1718V523F0{2F0,GB68-1", "oJR0!8rS50gS5086868k", "(LR0V2;070+070U", "wOR0@592ryB0gwB0}18@c2R10{Q10F886uOK1Gk8E8l6uH6=6k8768Ev4P1`5l48F18NAW8hM88!8F1m=1P1c8t1", "2TS0E838d5", "2ZS0I:D0D:D0@1", "AbS0F5", "YgS072", "oiS0!", "YjS0k", "2kS0t4", "(oS0U", "IpS0-2", "AsS06WRM8VE8N28!2uY1TxY1P3F18s8t5i6$%5}58V1a1f1}78#1G98KA:168}7872v5v1S7l5G718E8|v3a6H1f1-28k8t38V1`5f4f1d48728Mn4`4Wd48EG*7n768d28@2`213758-1=1]1k", "I$T0!%1y1t18tC8MRWl39444}38,8LuD0AuD08#291(350z#I0(wD0|8N1g^B0nI12DFC0t78Em<Oc871AbZ15bZ1k", ";GU0,jW70oW706", "^HU0U", "YIU0M", "IxK0gl90s", "gJU0l1", "ALU06", "QLU0N3838#3", "wSU0V6r>D0w>D0F4$6)sGF1un1K2k868chuk86<[74", ";ba0U8?", "2Sb0V6", "I]b0#4", "2Fe0k", "Aae0k838M", "^SC0HE}2::MGEG.Ogeq0G$mEm6OGOEWE%1eE916Ou6m868W$6m6GU11OE8W91WEWGMmOG6eM$8e6W6mG611Of371f5}18EH4M(!k1:8e#4G6G-28}2871]7$6", "^aE0]uF98VB8728U8F28758#18@I8#18Ny8E8NC8l4^U20U%LEY`k06AW+0f7HLfkX2vCH4vM(a10gv10IO10Yg30Hzll8ts8#H8-987C8dA8d18E8#98F68}58N28}T8#18@J8-28tK8td8N48FC8E8l68cGNM8V#8#98lK8-A8-A8|8728E8l287N8Nl8Nt8@N8V%8tC88V88-88lC8E8?8@48t38l`;Y20(>101dYk201)XQ6nUv^Xao940kAi10cv3QF40UHdXG|fe8"],
    ["QmU0U", "(mU0838N912r6E0o4E0M8d18,i2n2,8t2y2%2F78Wh8M8F186BG@4", "o@U0,", "g[U0d4", "2{U0k", "w{U0!", "g|U0s", "I}U0?838738k8mhcG!).V1", "g7V0k", "A8V0t2[<,8V42*a1{)a1V2A,a15,a1l1muK1c8k872[<,8}1838l1", ";SV0k", "gTV0|=Q]QN3", "^XV0s^;A0>;A0!", "gZV0N2GB68l1", "(dV0-2^Xb1>Xb1#2v1q1l1G38V1IzA0DzA0N18|4191V3DqE0W(pE0@58EJO", "QzV0k", "^zV0d1", "g#V0N15]20A]20tA5%E0A%E0c8t2%1i4%2t18!upk872Gu<68k8,r.E0w.E0#6", "I5W0-1IV40DV40}18!).!11^L40{M40?8l4", "wGW0c((20", "IHW0N2+{E0;{E0d3upk8}312`1-1Gs).t2GB6", "(XW0-7", "wfW0#1G?Qj70Lj70686BGs", "YOd0@L", "Ald0", ";-f0758MRW72", "IIg0E", "QkC0}1n.O86n1;eq0$f2u6[P1[68$$P1P16926u[[E91$6.u:2UH4|f6O|11X1[Ew`k1V18V3", "AoG0l38ta8M8F78738-78NE;12071n^kXD6I4R1:4WnB9d[15:49lHkX.1pP5Hw]nf]^H20()109d;u101@]2%KY!10:9f.;(307k8dL8}38@88-98?8@J8V48#rWdA8#A87I87Q8748l!8-T8#d8d28lI8FK8#12@30nQI,10w^402B20F22,50-1"],
    [";jW0?8F5K5P5@5%5y5t58s8,<[d213OS3@28E8F5e6hUGl1838s", "I[W0Mr990w990V2r?10w?10|eZU8l1[<,8}2eZU8s838U", "Q4X0@88d2i2n2F3%4y4t48686BGNA8686Ze728.a3X28!8}3", "guX0U838712(d1{%d1k", "^wX0t2OJE8}1", "A$X0?8MLI20;H20W73", "(*X0F5eZU8M", "^;X0?", "^<X0c", "g=X0@2", "g@X0}211_?8718UZe?", "Y|X0,", "Q}X0}8n2i2d28F4{iI02jI0}2bN90gN90@4;pe1+pe1l18V486BG,", "(UY0k", "YVY0!", "IWY0!", "2XY0,86BGE", "gYY071o1f1j1f16A2f1", ";ZY0M", "IaY077", "YhY0M", "(hY0c", "QiY0EY$70T$70768V11AiBf1@58EJOk8U8N28#18d2a7e]6d58V15sG0YiG0v9t9H4(L70Lb70HBE8#38t88@3838lH8E8o=605>60O8N3P7K7N28kpud286H1a1G7188|8cI(60+(60m-1", "gjZ0EDPA0IPA06872", "ImZ0l28}283873a6f6c8t2y2%273%1X2C4t18N28d48k%8a9ut39444t3H4C4M8!8#1H2C2?8|8@1X1DiH0(gH0N18?", ";2a0|", "^3a0}1", "26a06DVE0IVE0t6838#48t2y2%274838d1P1K1F18t2>YD0^YD06$xs", "(Va071", "2Se0l4", "oBg06", "YmC0l2IPr0MemO68691Em6e6.6GO6n1Oem6P268me$6n19112Eue86WWW:168:4?v6G?%2^,k1Wn56XC-28U86G68M8@4", "o5E0gU30VE8VH91dc8tP87AP^(ok08wb+0Q0101Io3102E20XZoi10n>2;10XUPN18e]1;n30v6m6(L40vHvCX1:8;g10A{30HM}}N@X2-48#68F68@D8VI8@(8#D8VCG#L8#68t18l68k8FH8#v8Na8##8VC8#^8tt(j10wB30YE30E"],
    ["g[f0", "^Wa069141!868d3", "Yda0,86BG@1QC50LC50?", "oha0lC]1wp50rr50-18F5P1w}g1{0h1F18@88N12Y50bZ50X1}5", "A7b0N1", "g8b0N1", ";9b0@283", "2Db0N3", "YGb0}88V2", "gYb0|", "oZb0cw-40r-40d5", "wfb0!8}212C593@18czjI0(jI0F48M[S1W,8}3mn1C2c8d1^]h1+]h1d386Bw5i1", "I$b0#2", "2)b0738V1Aa40w+d1TJi1f1772V40{U40F2", "2|b0-1", "^}b0U", "Y0c0!TGD0YGD0}29141|8}B8OZ8E8U.)!OB68k", "YKc071b1J0g1J0t2j3J0o3J0@18>4J0(4J08@4r8J0w8J0-4838c", "Abc0NB", "gmc0c", "2nc0U", "(Ig0", "oaC0XE#1X*en1Ydq086X1ev1[.mn1Gn18116P1[8m]111%1n1v1[G92G6P5kX7|v1o5l1n5F18E8!", "QAE0gj40lFu-8e@88lCOd48c8s8718V62.k06(T,0PL9,AY30v9]_A^60Yl10;N50Az10oi10(I80lp8dW8M8V58Nh8lCuF,8NF8#J8NQml3Glb8N@;820"],
    ["gnc0@3zLA0(LA0-AX2Yf30+h30k8l18N94B9BV48t28QO30LR30%28t88@12E305G3012l4mh8M8F4y4%4@3v1q1l18l2", "Ykd0s", "Ild0cY8j1Gr8j1Uw8j1r8j1@38?_11N3", "Yzd0l58N1jMK0ALK0X1-6", "Y<d0E", "w<d0F4", "^@d0}1DUK0IUK0V7", "g1e071", "w2e0M", "(Xf0@5871C1H1F2", ";Fg0F1", ";qC0!:(Ihq094m.uu14:1]1EWH191$H1m92v1:6X8MYzk1vf7186", "QTJ0l8H1F4O728748d18F4:ss2?j0E2W+0AQ50Q>U0#88@yP2VA868M8FRf1798N#8FJQn30@1^;106"],
    ["23e0k", "w3e0-8", "oCe0V18MRWc", "wFe0c", "IGe0zy706wy7071", "gHe0t1e+eK0QeK0U8,Gkx6ud18|4191#3", "wWe0V3", "Qbe0E", "wbe0V28UZeN2OJE872838-3", "Qse0E", "ose0t1", "wrC0?f)2vq0f298Ef56n8MIGl1N1", "ooH0g520tA8}F8!IHS1:_P32-30ARC0YA40](^b70gd807Y8lBelaW728NG91}Zv1t288-4"],
    ["Que0V68V1a1f176ob10jb10-2(Y10zY10M", "I@e0N4", "o_e0k", "I`e0l211_?8d1WRM8k", "o2f0,", "g3f0E", "(3f0,", "w4f0t2", "wsC0s;Lr0:9nTgHl1U", "^_J077O#9wM(1gQ10#Y]3};"],
    ["Y7f0-2IB10DB10#2[A]l15^l1,8d1eZU8F2%3y3}2eZU88t2WT5L0^4L0M8V1b6L0OA6L0721b`a#28EJOV1", "Qhf0l1>JL0^JL0t18MRWt78]s=s#3838758MRWV18728E{ZL0wZL0O}2", "w@f0!", "o[f0V3", "2`f08d1", "A`f0n1E", "2|f0s", "(|f0,", "w}f0M", "20g06>mI0^mI0c8#2", "w3g0M", "24g08|", "A4g091E", "o5g0U", "26g071", "I7g0V2", "w9g0N1", "2Bg0c", "(Bg0}3", "AHg0E8s", "gIg0E", ";Ig0c", "YtC0#1QIr0692H26ef66P5946H5nE.6Q,k1fYt1", "IDK0#68E8E8}1$F18l78,uNDGkoOR1fk^x102.20nDQf301=^N50;g202j30M^>90od80g320@68lh12t!]1-H8F[GN6"],
    ["AQC0N28M8d7H%F3", "oxC0|", "AzC0d18V2GmOUwgs06", "gMD0F3PB|%CF2[U%8#2Q+r0M"],
    ["Q<Z1f6G686G6W918u]5W6$un2We8Eu]U6nQ6"]
];
var n2 = k;

function rWa(a) {
    var b = a.charCodeAt(0);
    if (b >= 55296 && b <= 56319) b = (b - 55296) * 1024 + a.charCodeAt(1) - 56320 + 65536;
    return b
}
function o2(a) {
    if (!a || a > 1114111) return k;
    else if (a >= 65536) {
        var b = (a - 65536) % 1024 + 56320;
        return String.fromCharCode(Math.floor((a - 65536) / 1024) + 55296) + String.fromCharCode(b)
    } else return String.fromCharCode(a)
}
var sWa = "Arabic Sign Sanah",
    tWa = "En Quad",
    uWa = "Arabic Sign Safha",
    vWa = "Arabic Footnote Marker",
    wWa = "Four-per-em Space",
    xWa = "Three-per-em Space",
    yWa = "Figure Space",
    zWa = "Mongolian Soft Hyphen",
    AWa = "Thin Space",
    BWa = "Soft Hyphen",
    CWa = "Zero Width Space",
    DWa = "Armenian Hyphen",
    EWa = "Zero Width Joiner",
    FWa = "Em Space",
    GWa = "Syriac Abbreviation Mark",
    HWa = "Mongolian Vowel Separator",
    IWa = "Non-breaking Hyphen",
    JWa = "Hyphen",
    KWa = "Em Quad",
    LWa = "En Space",
    MWa = "Horizontal Bar",
    NWa = "Em Dash",
    OWa = "Double Oblique Hyphen",
    PWa = "Musical Symbol End Phrase",
    QWa = "Medium Mathematical Space",
    RWa = "Wave Dash",
    SWa = "Space",
    TWa = "Hyphen With Diaeresis",
    UWa = "Ideographic Space",
    VWa = "Right-to-left Embedding",
    WWa = "Six-per-em Space",
    XWa = "Hyphen-minus",
    YWa = "Pop Directional Formatting",
    ZWa = "Narrow No-break Space",
    $Wa = "Right-to-left Override",
    aXa = "Presentation Form For Vertical Em Dash",
    bXa = "Wavy Dash",
    cXa = "Presentation Form For Vertical En Dash",
    dXa = "Khmer Vowel Inherent Aa",
    eXa = "Khmer Vowel Inherent Aq",
    fXa = "Punctuation Space",
    gXa = "Halfwidth Hangul Filler",
    hXa = "Left-to-right Embedding",
    iXa = "Hebrew Punctuation Maqaf",
    jXa = "Hair Space",
    kXa = "No-break Space",
    lXa = "Fullwidth Hyphen-minus",
    mXa = "Paragraph Separator",
    nXa = "Left-to-right Override",
    oXa = "Small Hyphen-minus",
    pXa = "Combining Grapheme Joiner",
    qXa = "Zero Width Non-joiner",
    rXa = "Musical Symbol Begin Phrase",
    sXa = "Arabic Number Sign",
    tXa = "Right-to-left Mark",
    uXa = "Ogham Space Mark",
    vXa = "Small Em Dash",
    wXa = "Left-to-right Mark",
    xXa = "Arabic End Of Ayah",
    yXa = "Hangul Choseong Filler",
    zXa = "Hangul Filler",
    AXa = "Function Application",
    BXa = "Hangul Jungseong Filler",
    CXa = "Invisible Separator",
    DXa = "Invisible Times",
    EXa = "Invisible Plus",
    FXa = "Word Joiner",
    GXa = "Line Separator",
    HXa = "Katakana-hiragana Double Hyphen",
    IXa = "En Dash",
    JXa = "Musical Symbol Begin Beam",
    KXa = "Figure Dash",
    LXa = "Musical Symbol Begin Tie",
    MXa = "Musical Symbol End Beam",
    NXa = "Musical Symbol Begin Slur",
    OXa = "Musical Symbol End Tie",
    PXa = "Interlinear Annotation Anchor",
    QXa = "Musical Symbol End Slur",
    RXa = "Interlinear Annotation Terminator",
    SXa = "Interlinear Annotation Separator",
    TXa = "Zero Width No-break Space",
    UXa = "Variation Selector - ";

function VXa(a) {
    n2 || (n2 = {
        "\u0601": sWa,
        "\u2000": tWa,
        "\u0603": uWa,
        "\u0602": vWa,
        "\u2005": wWa,
        "\u2004": xWa,
        "\u2007": yWa,
        "\u1806": zWa,
        "\u2009": AWa,
        "\u00ad": BWa,
        "\u200b": CWa,
        "\u058a": DWa,
        "\u200d": EWa,
        "\u2003": FWa,
        "\u070f": GWa,
        "\u180e": HWa,
        "\u2011": IWa,
        "\u2010": JWa,
        "\u2001": KWa,
        "\u2002": LWa,
        "\u2015": MWa,
        "\u2014": NWa,
        "\u2e17": OWa,
        "\u1d17A": PWa,
        "\u205f": QWa,
        "\u301c": RWa,
        " ": SWa,
        "\u2e1a": TWa,
        "\u3000": UWa,
        "\u202b": VWa,
        "\u2006": WWa,
        "-": XWa,
        "\u202c": YWa,
        "\u202f": ZWa,
        "\u202e": $Wa,
        "\ufe31": aXa,
        "\u3030": bXa,
        "\ufe32": cXa,
        "\u17b5": dXa,
        "\u17b4": eXa,
        "\u2008": fXa,
        "\uffa0": gXa,
        "\u202a": hXa,
        "\u05be": iXa,
        "\u200a": jXa,
        "\u00a0": kXa,
        "\uff0d": lXa,
        "8233": mXa,
        "\u202d": nXa,
        "\ufe63": oXa,
        "\u034f": pXa,
        "\u200c": qXa,
        "\u1d179": rXa,
        "\u0600": sXa,
        "\u200f": tXa,
        "\u1680": uXa,
        "\ufe58": vXa,
        "\u200e": wXa,
        "\u06dd": xXa,
        "\u115f": yXa,
        "\u3164": zXa,
        "\u2061": AXa,
        "\u1160": BXa,
        "\u2063": CXa,
        "\u2062": DXa,
        "\u2064": EXa,
        "\u2060": FXa,
        "8232": GXa,
        "\u30a0": HXa,
        "\u2013": IXa,
        "\u1d173": JXa,
        "\u2012": KXa,
        "\u1d175": LXa,
        "\u1d174": MXa,
        "\u1d177": NXa,
        "\u1d176": OXa,
        "\ufff9": PXa,
        "\u1d178": QXa,
        "\ufffb": RXa,
        "\ufffa": SXa,
        "\ufeff": TXa
    });
    var b = n2,
        c = rWa(a),
        d = c + v;
    if (a in b) return b[a];
    else if (d in b) return b[c];
    else if (65024 <= c && c <= 65039 || 917760 <= c && c <= 917999) return UXa + (65024 <= c && c <= 65039 ? c - 65023 : c - 917743);
    return k
};

function WXa() {
    if (!this.a) {
        this.a = {};
        for (var a = 0; a < 89; a++) this.a["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%()*+,-.:;<=>?@[]^_`{|}~".charAt(a)] = a
    }
}
WXa.prototype.a = k;

function XXa(a, b) {
    for (var c = [], d = 0, e = 0; e < b.length;) {
        var g = a.a[b.charAt(e)] % 8,
            h = Math.floor(g / 3);
        g = g % 3 + 1;
        g == 3 && g++;
        for (var j = 0, m = 0; m < g; m++) j += a.a[b.charAt(e + m)] * Math.pow(88, m);
        m = c;
        d = d;
        j = Math.floor(j / 8);
        h = h;
        if (h == 0) {
            d += j + 1;
            Bc(m, o2(d))
        } else if (h == 1) {
            d -= j + 1;
            Bc(m, o2(d))
        } else if (h == 2) for (h = 0; h <= j; h++) {
            d++;
            Bc(m, o2(d))
        }
        d = d;
        e += g
    }
    return c
};

function p2(a) {
    this.a = a;
    this.L = new ze(this);
    this.L.C(a, FK, this.t0);
    this.L.C(a, Ui, this.q0);
    this.L.C(a, Lua, this.h0);
    this.L.C(a, KM, this.LT);
    q2(this, i)
}
s(p2, t);
n = p2.prototype;
n.Ws = k;
n.$D = k;
n.hA = l;
n.q0 = function (a) {
    if (this.hA) a.preventDefault();
    else this.Ws = a.target
};
n.t0 = function () {
    q2(this)
};
n.h0 = function () {
    if (this.$D != k) {
        this.a.z().scrollTop = this.$D;
        q2(this, l)
    } else q2(this, i)
};
n.LT = function (a) {
    if (a.target == this.a) {
        this.Ws = k;
        this.$D = this.a.z().scrollTop
    }
};
var YXa = "borderLeft",
    ZXa = "borderRight",
    $Xa = "borderTop",
    aYa = "borderBottom",
    bYa = "borderBottomWidth";

function q2(a, b) {
    var c = aN(a.a);
    if (a.a.Da() && c && c != a.Ws) {
        var d = a.a.z();
        c = c.z();
        var e = Df(c),
            g = Df(d),
            h;
        if (y.ia) {
            var j = sK(d, YXa);
            h = sK(d, ZXa);
            var m = sK(d, $Xa),
                o = sK(d, aYa);
            h = new dK(m, h, o, j)
        } else {
            j = of(d, Gsa);
            h = of(d, Hsa);
            m = of(d, Isa);
            o = of(d, bYa);
            h = new dK(parseFloat(m), parseFloat(h), parseFloat(o), parseFloat(j))
        }
        j = e.x - g.x - h.left;
        e = e.y - g.y - h.top;
        g = d.clientWidth - c.offsetWidth;
        c = d.clientHeight - c.offsetHeight;
        if (b) {
            d.scrollLeft += j - g / 2;
            d.scrollTop += e - c / 2
        } else {
            d.scrollLeft += Math.min(j, Math.max(j - g, 0));
            d.scrollTop += Math.min(e, Math.max(e - c, 0))
        }
        cYa(a);
        a.Ws = k
    }
}
function cYa(a) {
    a.hA = i;
    Oj(function () {
        this.hA = l
    }, 0, a)
}
n.q = function () {
    p2.p.q.call(this);
    this.L.G();
    this.Ws = k
};

function r2(a, b, c) {
    dS.call(this, a, b, c)
}
s(r2, dS);
n = r2.prototype;
n.OQ = l;
n.NQ = 100;
n.$t = l;
n.oB = function () {
    r2.p.oB.call(this);
    this.M = xra(QK(this.z()));
    if (this.anchor) this.Oa = xra(QK(this.anchor));
    this.$t = this.OQ;
    oe(this.J().Va(), Fo, this.Co, l, this)
};
n.cm = function () {
    re(this.J().Va(), Fo, this.Co, l, this);
    this.Oa = this.M = this.xa = k;
    this.$t = l;
    r2.p.cm.call(this)
};
n.Pw = function (a) {
    if (this.xa) return this.xa.contains(a);
    return r2.p.Pw.call(this, a)
};

function dYa(a, b) {
    if (a.Oa && a.Oa.contains(b) || a.Pw(b)) return i;
    return !!a.f && a.f.Pw(b)
}
n.NK = function (a) {
    this.u = undefined;
    if (a == this.anchor) if (!dYa(this, this.g) && !this.Mc && !(this.f && this.f.Mc)) y.Ua && this.g.x == 0 && this.g.y == 0 || this.X(l)
};
n.Co = function (a) {
    var b = this.Da();
    if (this.M) {
        var c = this.J().hg();
        c = new bd(a.clientX + c.x, a.clientY + c.y);
        if (dYa(this, c)) b = l;
        else if (this.$t) {
            b = Jsa(this.M, this.g);
            b = Jsa(this.M, c) >= b
        }
    }
    if (b) {
        hS(this);
        this.Mc = k;
        if (this.f) this.f.Mc = k
    } else this.tb() == 3 && fS(this);
    r2.p.Co.call(this, a)
};
n.yB = function () {
    if (this.Mc != this.z()) {
        this.$t = l;
        this.Mc = this.z();
        if (!this.xa && this.Ig) {
            var a = this.M.sa(),
                b = this.Ig;
            if (hb(b)) {
                a.top -= b.top;
                a.right += b.right;
                a.bottom += b.bottom;
                a.left -= b.left
            } else {
                a.top -= b;
                a.right += void 0;
                a.bottom += void 0;
                a.left -= void 0
            }
            this.xa = a
        }
    }
};
n.rI = function () {
    return this.$t ? this.NQ : this.CJ
};

function s2(a, b, c) {
    dS.call(this, k, k, c);
    if (gb(a)) this.WB = a;
    else this.Cb = a;
    this.Ie = b != l;
    this.lb = [];
    this.cc = c ? c.Va() : z.Va();oe(this.cc, Rd, this.sJ, l, this)
}
s(s2, r2);
n = s2.prototype;
n.q = function () {
    s2.p.q.call(this);
    re(this.cc, Rd, this.sJ, l, this)
};
n.WB = function (a) {
    return a.tagName in this.Cb && !! a.getAttribute(this.Cb[a.tagName])
};
n.sJ = function (a) {
    if (a = a.target) if (this.WB(a)) {
        tR(this, k);
        t2(this, a)
    } else if (this.Ie)(a = z.cw(a, r(this.WB, this), l, this.Qh)) && t2(this, a)
};
var eYa = "trigger";

function t2(a, b, c, d) {
    if (b == a.$l) fS(a);
    else if (b != a.anchor) {
        if (a.tb() == 1 || a.tb() == 4) {
            gS(a);
            u2(a)
        }
        d = new v2(eYa, a, b, d);
        if (!a.n.contains(b)) {
            GDa(a, b);
            a.lb.push(b)
        }
        a.anchor = b;
        a.dispatchEvent(d) ? kS(a, b, c || a.aa) : u2(a)
    }
}
function w2(a, b) {
    var c = jc(a.lb, b);
    if (c != -1) {
        HDa(a, b);
        a.lb.splice(c, 1)
    }
}
var fYa = "canceltrigger";

function u2(a) {
    a.dispatchEvent(new v2(fYa, a, a.anchor || k));
    w2(a, a.anchor);
    delete a.anchor
}
n.cm = function () {
    s2.p.cm.call(this);
    k != this.$l && w2(this, this.$l);
    this.$l = k
};
n.zw = function (a) {
    var b = jS(this, a.target);
    b && b != this.anchor ? t2(this, b) : s2.p.zw.call(this, a)
};
n.Eo = function (a) {
    var b = this.anchor,
        c = this.tb();
    s2.p.Eo.call(this, a);
    if (c != this.tb() && (c == 1 || c == 4)) {
        this.anchor = b;
        u2(this)
    }
};
n.dD = function (a, b) {
    s2.p.dD.call(this, a, b);
    if (this.Da()) {
        a != this.$l && w2(this, this.$l);
        this.$l = a
    } else {
        gS(this);
        u2(this)
    }
};

function v2(a, b, c, d) {
    Pd.call(this, a, b);
    this.anchor = c;
    this.data = d
}
s(v2, Pd);

function x2(a, b) {
    Qo.call(this, b);
    this.a = a || v
}
s(x2, Qo);
n = x2.prototype;
n.Zg = k;
n.F = function () {
    this.sb(this.J().F(Ap, {
        type: ih
    }))
};
n.ob = function (a) {
    x2.p.ob.call(this, a);
    if (!this.a) this.a = a.getAttribute(LD) || v
};
n.ga = function () {
    x2.p.ga.call(this);
    var a = new ze(this);
    a.C(this.z(), Ao, this.ST);
    a.C(this.z(), yo, this.RT);
    y.Ua && a.C(this.z(), [Td, Qj, Sj], this.nV);
    var b = z.wb(this.z());
    b = z.fc(b);
    a.C(b, Oe, this.YX);
    this.L = a;
    gYa(this);
    y2(this);
    this.z().a = this
};
n.pb = function () {
    x2.p.pb.call(this);
    hYa(this);
    this.z().a = k
};

function gYa(a) {
    if (!a.n && a.L && a.z().form) {
        a.L.C(a.z().form, zN, a.vV);
        a.n = i
    }
}
function hYa(a) {
    if (a.L) {
        a.L.G();
        a.L = k
    }
}
n.q = function () {
    x2.p.q.call(this);
    hYa(this)
};
n.Au = "label-input-label";
n.ST = function () {
    this.f = i;
    z.ba.remove(this.z(), this.Au);
    if (!z2(this) && !this.g) {
        var a = this,
            b = function () {
                a.z().value = v
            };
        y.ia ? Oj(b, 10) : b()
    }
};
n.RT = function () {
    this.Zg = k;
    this.f = l;
    y2(this)
};
n.nV = function (a) {
    if (a.keyCode == 27) {
        if (a.type == Qj) this.Zg = this.z().value;
        else if (a.type == Td) this.z().value = this.Zg;
        else if (a.type == Sj) this.Zg = k;
        a.preventDefault()
    }
};
n.vV = function () {
    if (!z2(this)) {
        this.z().value = v;
        Oj(this.eU, 10, this)
    }
};
n.eU = function () {
    if (!z2(this)) this.z().value = this.a
};
n.YX = function () {
    y2(this)
};

function z2(a) {
    return a.z().value != v && a.z().value != a.a
}
n.clear = function () {
    this.z().value = v;
    if (this.Zg != k) this.Zg = v
};
n.zb = function (a) {
    if (this.Zg != k) this.Zg = a;
    this.z().value = a;
    y2(this)
};
n.ea = function () {
    if (this.Zg != k) return this.Zg;
    return z2(this) ? this.z().value : v
};

function y2(a) {
    gYa(a);
    if (z2(a)) z.ba.remove(a.z(), a.Au);
    else {
        !a.g && !a.f && z.ba.add(a.z(), a.Au);
        Oj(a.u1, 10, a)
    }
}
n.co = function () {
    var a = z2(this);
    this.g = i;
    this.z().focus();
    if (!a) this.z().value = this.a;
    this.z().select();
    Oj(this.TR, 10, this)
};
n.la = function (a) {
    this.z().disabled = !a;
    z.ba.md(this.z(), this.Au + GM, !a)
};
n.TR = function () {
    this.g = l
};
n.u1 = function () {
    if (this.z() && !z2(this) && !this.f) this.z().value = this.a
};

function A2(a, b, c, d, e, g, h) {
    Qo.call(this, h);
    this.f = a;
    this.aa = c || 0;
    this.Aa = d || 0;
    this.g = g || 10;
    this.n = (e || 10) * this.g;
    this.M = this.g + 1;
    this.a = b || [];
    this.L = new ze(this);
    this.u = new WXa
}
s(A2, Qo);
n = A2.prototype;
n.It = k;
n.WC = k;
n.Sl = k;
n.Dx = k;
n.Ag = k;
n.Dy = k;
n.Wp = k;
n.wi = k;
n.pt = k;
n.Si = k;
n.Jj = k;
n.Nm = k;
n.Xy = k;
n.Ly = k;
n.Cf = k;
n.F = function () {
    A2.p.F.call(this);
    this.ob(this.J().createElement(A))
};
n.q = function () {
    this.Cf.G();
    this.Cf = k;
    this.L.G();
    this.L = k;
    A2.p.q.call(this)
};
var iYa = ":2%C^O80V1H2s2G40Q%s0",
    jYa = "Category Menu",
    kYa = "Subcategory Menu",
    lYa = "Recent Selections:",
    mYa = "U+",
    nYa = "Hex Input",
    oYa = "zoom",
    pYa = "goog-char-picker-char-zoom",
    qYa = "goog-char-picker-unicode",
    B2 = "char",
    rYa = "goog-char-picker",
    sYa = "goog-stick",
    tYa = "goog-stickwrap",
    uYa = "goog-char-picker-grid-container",
    vYa = "goog-char-picker-grid",
    wYa = "goog-char-picker-recents",
    xYa = "goog-char-picker-notice",
    yYa = "goog-char-picker-uplus",
    zYa = "goog-char-picker-input-box",
    AYa = "goog-char-picker-okbutton",
    BYa = "goog-char-picker-hovercard",
    CYa = "goog-char-picker-menu";
n.ob = function (a) {
    A2.p.ob.call(this, a);
    var b = XXa(this.u, iYa);
    this.WC = new Xc(b);
    this.Sl = new pN;
    b = this.f.a;
    for (var c = 0; c < this.f.a.length; c++) this.Sl.ya(DYa(this, c, b[c]), i);
    this.Dx = new QN(jYa, this.Sl);
    this.ya(this.Dx, i);
    this.Ag = new pN;
    this.Dy = new QN(kYa, this.Ag);
    this.ya(this.Dy, i);
    b = new Qo;
    this.ya(b, i);
    c = new Qo;
    b.ya(c, i);
    this.Wp = c.z();
    var d = new Qo;
    c.ya(d, i);
    this.P = d.z();
    this.wi = new Qo;
    b.ya(this.wi, i);
    this.pt = new Qo;
    this.pt.sb(z.F(A));
    this.ya(this.pt, i);
    c = new Qo;
    c.sb(z.F(Ee, k, lYa));
    this.ya(c, i);
    this.Si =
    new Qo;
    this.ya(this.Si, i);
    c = new Qo;
    c.sb(z.F(Ee, k, mYa));
    this.ya(c, i);
    this.Jj = new x2(nYa);
    this.ya(this.Jj, i);
    this.Nm = new AN(Hp);
    this.ya(this.Nm, i);
    this.Nm.la(l);
    this.Xy = z.F(A, {
        id: oYa,
        className: pYa
    });
    this.Ly = z.F(A, {
        id: Da,
        className: qYa
    });
    d = z.F(A, {
        id: tG
    }, this.Xy, this.Ly);
    Qf(d, l);
    this.Cf = new s2({
        DIV: B2
    });
    this.Cf.my(d);
    var e = this;
    oe(this.Cf, bR, function () {
        var g = (e.Cf.$l || e.Cf.anchor).getAttribute(B2);
        if (g) {
            e.Xy.innerHTML = e.WC.contains(g) ? tN : g;e.Ly.innerHTML = EYa(e, g)
        }
    });
    z.ba.add(a, rYa);
    z.ba.add(this.P, sYa);
    z.ba.add(this.Wp, tYa);
    z.ba.add(b.z(), uYa);
    z.ba.add(this.wi.z(), vYa);
    z.ba.add(this.Si.z(), vYa);
    z.ba.add(this.Si.z(), wYa);
    z.ba.add(this.pt.z(), xYa);
    z.ba.add(c.z(), yYa);
    z.ba.add(this.Jj.z(), zYa);
    z.ba.add(this.Nm.z(), AYa);
    z.ba.add(d, BYa);
    this.Cf.className = BYa;
    this.wi.xa = this.n;
    this.Si.xa = this.M;
    FYa(this, this.wi);
    FYa(this, this.Si);
    C2(this, this.Si, this.a);
    GYa(this, this.aa, this.Aa);
    new p2(this.Sl);
    new p2(this.Ag);
    z.ba.add(this.Sl.z(), CYa);
    z.ba.add(this.Ag.z(), CYa)
};
n.ga = function () {
    A2.p.ga.call(this);
    var a = new G0(this.Jj.z());
    this.dd = new SD(this.Jj.z());
    this.L.C(this.Dx, Mi, Ksa).C(this.Dy, Mi, Ksa).C(this, Mi, this.lX, i).C(a, Ap, this.JT).C(this.dd, ZD, this.mV);
    oe(this.Nm.z(), Co, this.hJ, i, this);
    oe(this.Wp, af, this.KT, i, this)
};
n.KT = function (a) {
    var b = Math.ceil(a.target.scrollTop * this.Es.length / (this.g * a.target.scrollHeight)) * this.g;
    if (this.Oa != b) {
        this.Oa = b;
        HYa(this, this.wi, this.Es, b)
    }
    a.stopPropagation()
};
n.lX = function (a) {
    if (a.target.ib == this.Sl) {
        this.Sl.X(l);
        GYa(this, a.target.ea())
    } else if (a.target.ib == this.Ag) {
        this.Ag.X(l);
        IYa(this, a.target.ea())
    } else if (a.target.ib == this.wi) {
        this.It = a.target.z().getAttribute(B2);
        JYa(this, this.It)
    } else if (a.target.ib == this.Si) this.It = a.target.z().getAttribute(B2)
};
n.JT = function () {
    var a = KYa(this);
    if (a) {
        var b = EYa(this, a);
        this.Xy.innerHTML = a;
        this.Ly.innerHTML = b;
        tR(this.Cf, new lS(this.Jj.z()));
        t2(this.Cf, this.Jj.z());
        this.Nm.la(i)
    } else {
        a = this.Cf;
        gS(a);
        u2(a);
        this.Cf.X(l);
        this.Nm.la(l)
    }
};
n.hJ = function () {
    var a = KYa(this);
    if (a && a.charCodeAt(0)) {
        this.It = a;
        JYa(this, a);
        return i
    }
    return l
};
n.mV = function (a) {
    if (a.keyCode == 13) return this.hJ() ? this.dispatchEvent(Mi) : l
};

function DYa(a, b, c) {
    a = new kN(c);
    a.zb(b);
    a.X(i);
    return a
}

function GYa(a, b, c) {
    a.Lg = b;
    for (a.Dx.Mt(a.f.a[b]); a.Ag.bd && a.Ag.bd.length != 0;) a.Ag.removeChild(bp(a.Ag, 0), i).G();
    b = a.f.f[b];
    for (var d = 0; d < b.length; d++) a.Ag.ya(DYa(a, d, b[d]), i);
    IYa(a, c || 0)
}
function IYa(a, b) {
    a.Dy.Mt(a.f.f[a.Lg][b]);
    C2(a, a.wi, XXa(a.u, a.f.g[a.Lg][b]))
}
var LYa = "Please hover over each cell for the character name.";

function C2(a, b, c) {
    if (b == a.wi) {
        a.pt.z().innerHTML = VXa(c[0]) ? LYa : v;a.Es = c;a.P.style.height = a.Wp.offsetHeight > 0 ? a.Wp.offsetHeight * c.length / a.n + D : 3 * a.g * c.length / a.n + qa;a.Wp.scrollTop = 0
    }
    HYa(a, b, c, 0)
}
function HYa(a, b, c, d) {
    var e = 0;
    for (d = d; e < b.xa && d < c.length; e++, d++) {
        var g = bp(b, e),
            h = c[d],
            j = a.WC.contains(h) ? tN : h,
            m = g.z();m.innerHTML = j;m.setAttribute(B2, h);z.iE(m, l);g.X(i)
    }
    for (; e < b.xa; e++) bp(b, e).X(l);
    z.iE(bp(b, 0).z(), i)
}

function FYa(a, b) {
    for (var c = 0; c < b.xa; c++) {
        var d = new AN(x, C0.N());
        b.ya(d, i);
        d.X(l);
        d = d.z();
        z.qb.Mh(d, IOa)
    }
}
function JYa(a, b) {
    if (b && b.charCodeAt(0) && !sc(a.a, b)) {
        a.a.unshift(b);
        a.a.length > a.M && a.a.pop();
        C2(a, a.Si, a.a)
    }
}
function KYa(a) {
    a = a.Jj.ea();
    return o2(parseInt(a, 16))
}
function EYa(a, b) {
    for (var c = rWa(b).toString(16).toUpperCase(); c.length < 4;) c = Xd + c;
    c = mYa + c;
    var d = VXa(b);
    if (d) c += x + d;
    return c
};
var MYa = "Insert Special Characters";

function D2(a, b, c, d, e) {
    k_.call(this, i, e);
    this.f = a;
    this.a = b;
    this.n = c || [];
    this.g = d || v;
    this.setTitle(MYa)
}
s(D2, k_);
n = D2.prototype;
n.Mz = k;
n.ql = k;
var NYa = '<div class="kix-specialcharactersdialog-content"><div class="kix-specialcharactersdialog-charpicker-content" id="kix-specialcharactersdialog-charpicker-content"></div><input type="text" size="35" id="kix-specialcharactersdialog-chars-to-insert"/></div>';
n.F = function () {
    D2.p.F.call(this);
    var a = this.db(),
        b;
    b = new N;
    b.append(NYa);
    b = b.toString();
    a.innerHTML = b
};
var OYa = "kix-specialcharactersdialog-charpicker-content",
    PYa = "kix-specialcharactersdialog-chars-to-insert";
n.ga = function () {
    D2.p.ga.call(this);
    var a = this.Bc,
        b = new xp;
    Uc(b, a);
    b.pj = k;
    b.il = a.il;
    Cp(this, b);
    a = this.J();
    this.Mz = a.z(OYa);
    this.ql = a.z(PYa);
    this.ql.value = this.g;
    Zo(this.a, this.Mz);
    this.Ga().C(this, Ep, this.b_).C(this.a, Mi, this.a_).C(this.ql, Qj, this.c_)
};
var QYa = "Invalid Character",
    RYa = "The character you selected cannot be inserted into the document.";
n.a_ = function (a) {
    a = a.currentTarget.It;
    if (a.match(yg)) Mp(QYa, RYa, undefined, this);
    else this.ql.value += a
};
n.b_ = function (a) {
    if (a.key == Gp) this.f(this.ql.value, this.a.a || [])
};
n.c_ = function (a) {
    if (a.keyCode == 13) {
        this.f(this.ql.value, this.a.a || []);
        this.X(l)
    }
};
n.q = function () {
    D2.p.q.call(this);
    this.a.G();
    delete this.a;
    delete this.f;
    delete this.Mz;
    delete this.ql;
    delete this.n
};

function SYa(a, b, c, d) {
    var e = new A2(new i2, b, 0, 0);
    return new D2(a, e, b, c, d)
};

function E2() {}
Qa(E2);
E2.prototype.f = function (a, b, c, d) {
    var e = qu(b);
    c = b.f.Ru;
    b = b.oa(gh, e);
    e = b.wt;
    var g = c ? ss.N() : k;
    if (!e || g && g.a[e.toLowerCase()]) return k;
    return kb(TYa, b.K.Qb(), e, a, c, d)
};
var UYa = "No Suggestions",
    VYa = "Add to dictionary";

function TYa(a, b, c, d, e, g) {
    var h = M(c, om);
    if (!Xa(h)) {
        if (a.length == 0) {
            a = [UYa];
            h.la(l)
        } else h.la(i);
        for (var j = 0, m; m = a[j]; j++) {
            m = Vb(m);
            m = new kN(m, k, g.J());
            g.ya(m, i);
            e.a(m, h, undefined, function (o) {
                return o.target.Pc()
            })
        }
        if (d) if (a = M(c, pm)) {
            g.ya(new oN(g.J()), i);
            m = new kN(VYa, b, g.J());
            g.ya(m, i);
            e.a(m, a, undefined, function () {
                return b
            })
        }
    }
};

function F2(a, b, c, d) {
    this.A = a;
    this.a = c;
    this.V = d;
    this.g = b;
    this.f();
    b.Za(Mi, this.f, this);
    this.L = new ze(this);
    this.L.C(ss.N(), ts, this.u)
}
s(F2, t);
var WYa = "kix-spelling-error";
F2.prototype.n = function (a) {
    for (var b = this.A, c = [], d = a.start; d <= a.end;) {
        var e = b.oa(gh, d),
            g = Gv(b, gh, d);
        if (g > a.end) g = a.end;
        e = e.wt;
        var h;
        if (!(h = !e)) h = !! ss.N().a[e.toLowerCase()];
        if (!h) {
            d = new nb(d, g);
            e = qu(b);
            if (e < d.start || e > d.end + 1) c.push(new jx(d, WYa, i))
        }
        d = g + 1
    }
    return c
};
F2.prototype.f = function () {
    Ii(this.g) ? this.a.Sd(ND, r(this.n, this)) : OA(this.a, ND)
};
F2.prototype.u = function () {
    NA(this.a, k, ND)
};
F2.prototype.q = function () {
    F2.p.q.call(this);
    this.L.G();
    delete this.L;
    delete this.A;
    delete this.g;
    delete this.a;
    delete this.V
};

function G2() {}
Qa(G2);
G2.prototype.a = k;
G2.prototype.f = function (a, b) {
    if (!b.ra().Kb() && ou(b) || nsa(b)) {
        if (!this.a) {
            this.a = [M(a, jo), M(a, lo), M(a, no), M(a, po), k, M(a, ho), M(a, fo), M(a, co)];
            b.f.f && this.a.push(k, M(a, ro))
        }
        return this.a
    }
    return k
};
var XYa = '<div class="kix-tabledialog-label goog-inline-block"><label for="',
    YYa = '</label></div><div class="kix-tabledialog-control goog-inline-block"><input id="',
    ZYa = '" type="text" size="4" /></div><div class="kix-tabledialog-label goog-inline-block">';

function H2(a, b) {
    var c = b || new N;
    c.append(XYa, hO(a.NC), Qe, hO(a.OC), YYa, hO(a.ME), ZYa);
    W0({
        kc: a.kc
    }, c);
    c.append(wa);
    if (!b) return c.toString()
};
var $Ya = "Table Properties";

function I2(a, b, c) {
    k_.call(this, i, c);
    this.Oa = a;
    this.P = [];
    this.Aa = wK(b, qu(b));
    this.f = b.oa(hh, xK(b));
    this.aa = b.oa(fh, wu(b, qu(b)));
    this.n = b.oa(Ug, zu(b, qu(b)));
    this.M = lK(b.f);
    this.Cb = b.f.xa;
    this.u = new g_;
    this.ya(this.u);
    this.a = new $0;
    this.ya(this.a);
    this.g = new WN(v);
    this.ya(this.g);
    this.setTitle($Ya)
}
s(I2, k_);
var J2 = [0.5, 0.75, 1, 1.5, 2.25, 3, 4.5, 6];
n = I2.prototype;
n.tK = 0;
n.Fy = k;
n.iv = k;
n.Wt = k;
n.AE = k;
n.$m = k;
n.qk = k;
n.tl = k;
n.lj = k;
n.Ln = k;
n.Xq = k;
n.jv = k;
var aZa = '<div class="kix-dialog-content-tabbed"><div class="goog-tab-bar goog-tab-bar-horizontal goog-tab-bar-top" id="kix-tabledialog-tab-bar"><div class="goog-tab goog-tab-selected">',
    K2 = '</div><div class="goog-tab">',
    bZa = "Row",
    cZa = "Column",
    dZa = "Cell",
    eZa = '</div></div><div class="goog-tab-bar-clear"></div><div class="kix-tabledialog-tab-content">',
    fZa = '<div class="kix-tabledialog-tab-content-inner" id="kix-tabledialog-tab-table"><div><div class="kix-tabledialog-label goog-inline-block">',
    gZa = "Border width:",
    hZa = '</div><div class="kix-tabledialog-control goog-inline-block"><div id="kix-tabledialog-table-border-width"><div class="goog-menu">',
    iZa = " pt",
    jZa = '<div class="goog-menuitem">',
    kZa = '</div></div></div></div><div><div class="kix-tabledialog-label goog-inline-block">',
    lZa = "Border color:",
    mZa = '</div><div class="kix-tabledialog-control goog-inline-block"><div id="kix-tabledialog-table-border-color" class="kix-tabledialog-colorpicker"></div></div></div></div>',
    nZa = '<div class="kix-tabledialog-tab-content-inner" id="kix-tabledialog-tab-row"><div class="kix-tabledialog-control goog-inline-block"><input type="checkbox" id="kix-tabledialog-row-height-checkbox" /></div>',
    oZa = "Set minimum height:",
    pZa = "kix-tabledialog-row-height-checkbox",
    qZa = "kix-tabledialog-row-height-value",
    rZa = '<div class="kix-tabledialog-tab-content-inner" id="kix-tabledialog-tab-column"><div class="kix-tabledialog-control goog-inline-block"><input type="checkbox" id="kix-tabledialog-column-width-checkbox" /></div>',
    sZa = "Set width:",
    tZa = "kix-tabledialog-column-width-checkbox",
    uZa = "kix-tabledialog-column-width-value",
    vZa = '<div class="kix-tabledialog-tab-content-inner" id="kix-tabledialog-tab-cell"><div><div><div class="kix-tabledialog-label goog-inline-block">',
    wZa = "Background color:",
    xZa = '</div><div class="kix-tabledialog-control goog-inline-block"><div id="kix-tabledialog-cell-background-color" class="kix-tabledialog-colorpicker"></div></div></div><div><div class="kix-tabledialog-label goog-inline-block"><label for="kix-tabledialog-cell-vertical-align">',
    yZa = "Vertical alignment:",
    zZa = '</label></div><div class="kix-tabledialog-control goog-inline-block"><select id="kix-tabledialog-cell-vertical-align"><option>',
    AZa = "Top",
    BZa = "</option><option>",
    CZa = "Bottom",
    DZa = "</option></select></div></div><div>",
    EZa = "Padding:",
    L2 = "kix-tabledialog-cell-padding";
n.F = function () {
    I2.p.F.call(this);
    var a = this.db(),
        b;
    var c = {
        kc: this.M.O(),
        Dz: J2
    };
    b = new N;
    b.append(aZa, SQa, K2, bZa, K2, cZa, K2, dZa, eZa);
    var d = {
        Dz: c.Dz
    },
        e = b || new N;
    e.append(fZa, gZa, hZa);
    d = d.Dz;
    for (var g = d.length, h = 0; h < g; h++) {
        var j = hO(d[h]) + iZa;
        e.append(jZa, j, wa)
    }
    e.append(kZa, lZa, mZa);
    b || e.toString();
    e = {
        kc: c.kc
    };
    d = b || new N;
    d.append(nZa);
    H2({
        OC: oZa,
        NC: pZa,
        ME: qZa,
        kc: e.kc
    }, d);
    d.append(wa);
    b || d.toString();
    e = {
        kc: c.kc
    };
    d = b || new N;
    d.append(rZa);
    H2({
        OC: sZa,
        NC: tZa,
        ME: uZa,
        kc: e.kc
    }, d);
    d.append(wa);
    b || d.toString();
    c = {
        kc: c.kc
    };
    e = b || new N;
    e.append(vZa, wZa, xZa, yZa, zZa, AZa, BZa, Nm, BZa, CZa, DZa);
    H2({
        OC: EZa,
        NC: L2,
        ME: L2,
        kc: c.kc
    }, e);
    e.append(iO);
    b || e.toString();
    b.append(iO);
    b = b.toString();
    a.innerHTML = b;
    z.ba.add(a, QMa)
};
var FZa = "kix-tabledialog-tab-bar",
    GZa = "kix-tabledialog-tab-table",
    HZa = "kix-tabledialog-tab-row",
    IZa = "kix-tabledialog-tab-column",
    JZa = "kix-tabledialog-tab-cell",
    KZa = "kix-tabledialog-table-border-color",
    LZa = "kix-tabledialog-table-border-width",
    MZa = "kix-tabledialog-cell-vertical-align",
    NZa = "kix-tabledialog-cell-background-color";
n.ga = function () {
    I2.p.ga.call(this);
    var a = this.J();
    Zo(this.u, a.z(FZa));
    this.P.push(a.z(GZa), a.z(HZa), a.z(IZa), a.z(JZa));
    this.Wt = a.z(KZa);
    this.AE = a.z(LZa);
    this.$m = a.z(pZa);
    this.qk = a.z(qZa);
    this.tl = a.z(tZa);
    this.lj = a.z(uZa);
    this.Ln = a.z(MZa);
    this.Xq = a.z(NZa);
    this.jv = a.z(L2);
    this.a.Ja();
    a1(this.a, this.Wt);
    a1(this.a, this.Xq);
    Zo(this.g, this.AE);
    a = jc(J2, this.f.vm);
    YN(this.g, a == -1 ? 3 : a);
    this.Wt.style.backgroundColor = this.f.um;
    a = OZa(this);
    if (a != k) {
        this.tl.checked = i;
        this.lj.disabled = l;
        M2(this, this.lj, a)
    } else {
        this.tl.checked =
        l;
        this.lj.disabled = i;
        this.lj.value = v
    }
    if (a = this.aa.Vj) {
        this.$m.checked = i;
        this.qk.disabled = l;
        M2(this, this.qk, a)
    } else {
        this.$m.checked = l;
        this.qk.disabled = i;
        this.qk.value = v
    }
    switch (this.n.po()) {
    case 2:
        this.Ln.selectedIndex = 0;
        break;
    case 1:
        this.Ln.selectedIndex = 1;
        break;
    case 0:
        this.Ln.selectedIndex = 2;
        break
    }
    this.Xq.style.backgroundColor = this.n.Nr();
    M2(this, this.jv, this.n.tm);
    PZa(this, 0);
    this.Ga().C(this, Ep, this.e_).C(this.u, HK, this.AX).C(this.$m, Ud, this.eX).C(this.tl, Ud, this.FU).C(this.a, Li, this.f_).C(this.g, zp, this.d_)
};
n.X = function (a) {
    I2.p.X.call(this, a);
    a && y.ia && this.Cb && dsa(this.db())
};
n.d_ = function (a) {
    a.stopPropagation()
};
n.e_ = function (a) {
    if (a.key == Gp) {
        a = {};
        var b = J2[$N(this.g)];
        if (p(b) && b != this.f.vm) a.tblBW = b;
        if (this.Fy && this.Fy != this.f.um) a.tblBC = this.Fy;
        b = this.tl.checked ? 0 : 1;
        var c = b == 0 ? N2(this, this.lj) : k,
            d;d = (d = Ft(this.f)[this.Aa.se]) ? d.tn : 1;
        var e = OZa(this);
        var g = c;
        if (b == 1 && b != d) d = i;
        else if (b == 0 && !isNaN(g) && g != k && g >= 0) {
            g = Math.max(g, 18);
            d = b != d || e == k || !O2(this, e, g)
        } else d = l;
        if (d) {
            a.colWT = b;
            if (b == 0) a.colWV = Math.max(c, 18)
        }
        b = this.$m.checked ? N2(this, this.qk) : 0;
        if (!isNaN(b) && b != k && b >= 0 && !O2(this, b, this.aa.Vj)) a.rowHV = b;
        var h;
        switch (this.Ln.selectedIndex) {
        case 0:
            h = 2;
            break;
        case 1:
            h = 1;
            break;
        case 2:
            h = 0;
            break
        }
        if (p(h) && h != this.n.po()) a.cellVA = h;
        if (this.iv && this.iv != this.n.Nr()) a.cellBC = this.iv;h = N2(this, this.jv);
        if (!isNaN(h) && h != k && h >= 0 && !O2(this, h, this.n.tm)) a.cellP = h;ub(a) || Ni(M(this.Oa, to), a)
    }
};
n.AX = function () {
    var a = iK(this.u, this.u.Of);
    if (a != this.tK) {
        this.tK = a;
        PZa(this, a)
    }
};
n.eX = function () {
    this.qk.disabled = !this.$m.checked
};
n.FU = function () {
    this.lj.disabled = !this.tl.checked
};
n.f_ = function () {
    var a = this.a.li() || v,
        b = this.a.Bm;
    if (b && b.id) switch (b.id) {
    case KZa:
        this.Fy = this.Wt.style.backgroundColor = a;
        break;
    case NZa:
        this.iv = this.Xq.style.backgroundColor = a;
        break
    }
};

function PZa(a, b) {
    for (var c = 0; c < a.P.length; c++) a.P[c].style.display = b == c ? o_ : Hf
}
function OZa(a) {
    return (a = Ft(a.f)[a.Aa.se]) && a.tn != 1 ? a.pq : k
}
function M2(a, b, c) {
    if (b != k) b.value = P2(a, c / a.M.a)
}
function N2(a, b) {
    if (b == k) return -1;
    return P2(a, parseFloat(b.value)) * a.M.a
}

function P2(a, b) {
    var c = Math.pow(10, 3);
    return Math.round(b * c) / c
}
function O2(a, b, c) {
    return P2(a, b / a.M.a) == P2(a, c / a.M.a)
}
n.q = function () {
    I2.p.q.call(this);
    delete this.u;
    delete this.a;
    delete this.g;
    delete this.Oa;
    delete this.P;
    delete this.Aa;
    delete this.f;
    delete this.aa;
    delete this.Wt;
    delete this.AE;
    delete this.$m;
    delete this.qk;
    delete this.tl;
    delete this.lj;
    delete this.Xq;
    delete this.jv;
    delete this.Ln
};

function Q2(a) {
    this.a = a || Ge.N()
}
s(Q2, t);
Qa(Q2);
var QZa = {
    Arial: "Sans Serif",
    "Arial Black": "Wide",
    "Arial Narrow": "Narrow",
    "Times New Roman": "Serif"
},
    RZa = '<span style="font: 72px ',
    SZa = '",monospace',
    TZa = "monospace",
    UZa = '">wwwwwww</span>';

function VZa(a, b) {
    return RZa + (b ? wb + b + SZa : TZa) + UZa
}
Q2.prototype.q = function () {
    Q2.p.q.call(this);
    delete this.a
};

function R2() {}
s(R2, PN);
Qa(R2);
R2.prototype.ps = function (a, b) {
    return R2.p.ps.call(this, WZa(a, b), b)
};
var XZa = "goog-color-menu-button-indicator";

function WZa(a, b) {
    return b.F(A, XZa, a)
}
R2.prototype.zb = function (a, b) {
    a && YZa(this.Od(a), b)
};

function YZa(a, b) {
    if (a && a.firstChild) {
        var c;
        try {
            c = CK(b).us
        } catch (d) {
            c = k
        }
        a.firstChild.style.borderBottomColor = c || (y.ia ? v : li)
    }
}
var ZZa = "goog-color-menu-button";
R2.prototype.hh = function (a) {
    this.zb(a.z(), a.ea());
    z.ba.add(a.z(), ZZa);
    R2.p.hh.call(this, a)
};

function S2(a, b, c, d) {
    QN.call(this, a, b, c || R2.N(), d)
}
s(S2, QN);
var $Za = {
    B3: [Aza, "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", oB],
    t4: ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
    n4: ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc", "#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd", "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0", "#cc0000", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79", "#990000", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47", "#660000", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
};

function a_a(a, b) {
    var c = new pN(b);
    a && kc(a, function (d) {
        c.ya(d, i)
    });
    qb($Za, function (d) {
        d = new X0(d, k, b);
        q0(d, 8);
        c.ya(d, i)
    });
    return c
}
n = S2.prototype;
n.li = function () {
    return this.ea()
};
n.Ot = function (a) {
    this.zb(a)
};
n.zb = function (a) {
    for (var b = 0, c; c = this.a ? bp(this.a, b) : k;b++) typeof c.Ot == Ua && c.Ot(a);
    S2.p.zb.call(this, a)
};
n.qs = function (a) {
    if (typeof a.target.li == Ua) this.zb(a.target.li());
    else a.target.ea() == Hf && this.zb(k);
    S2.p.qs.call(this, a);
    a.stopPropagation();
    this.dispatchEvent(Mi)
};
n.$b = function (a) {
    if (a && SN(this) == 0) {
        this.Td(a_a(k, this.J()));
        this.zb(this.ea())
    }
    S2.p.$b.call(this, a)
};
yM(ZZa, function () {
    return new S2(k)
});

function T2() {}
s(T2, aO);
Qa(T2);
T2.prototype.ps = function (a, b) {
    return hva(WZa(a, b), this.Ca(), b)
};
T2.prototype.zb = function (a, b) {
    a && YZa(this.Od(a), b)
};
T2.prototype.hh = function (a) {
    this.zb(a.z(), a.ea());
    z.ba.add(a.z(), v_);
    T2.p.hh.call(this, a)
};

function U2(a, b, c, d) {
    S2.call(this, a, b, c || T2.N(), d)
}
s(U2, S2);
yM(v_, function () {
    return new U2(k)
});

function b_a(a, b, c, d) {
    QN.call(this, a, b, c || aO.N(), d)
}
s(b_a, QN);
yM(bO, function () {
    return new b_a(k)
});

function V2(a, b, c) {
    AN.call(this, a, b || BN.N(), c);
    NM(this, 16, i)
}
s(V2, AN);
yM("goog-toggle-button", function () {
    return new V2(k)
});

function c_a(a, b, c) {
    V2.call(this, a, b || GN.N(), c)
}
s(c_a, V2);
yM(mOa, function () {
    return new c_a(k)
});

function W2(a, b, c, d, e, g, h) {
    wN.call(this, e, g, h);
    dN(this, i);
    this.u = a;
    this.n = b;
    this.f = c;
    this.g = d;
    this.a = {};
    this.L = new ze(this)
}
s(W2, wN);
var d_a = [8, 10, 11, 12, 14, 18, 24, 36],
    e_a = [ym, xm, wm, um, k, Ym, Wm],
    f_a = [Sl, Vl, Wl, Xl, Yl, Zl, $l];
n = W2.prototype;
n.QB = k;
n.F = function () {
    this.ob(this.J().he(iOa({
        GR: this.f,
        LR: this.g,
        IR: this.n,
        an: jK(this)
    })))
};
n.We = function (a) {
    return z.ba.Pd(a, vN)
};
n.ob = function (a) {
    W2.p.ob.call(this, a);
    g_a(this)
};
n.pb = function () {
    W2.p.pb.call(this);
    this.la(l)
};
n.xz = function (a, b, c) {
    X2(this, a, Q_, M(b, wl));
    X2(this, a, P_, M(b, Dm));
    X2(this, a, V_, M(b, Mm));
    X2(this, a, U_, M(b, Om));
    X2(this, a, T_, M(b, Qm));
    X2(this, a, N_, K.Ju, Y2);
    X2(this, a, J_, K.Ok);
    if (this.n) {
        X2(this, a, F_, K.rq);
        var d = Vo(this, F_);
        d && d.Td(c.gb(K.rq.ma()))
    }
    X2(this, a, G_, M(b, zm), Y2);
    h_a(this, a, b, G_, f_a);
    X2(this, a, H_, K.sq, Y2);
    X2(this, a, I_, K.tq, Y2);
    X2(this, a, M_, K.Ku, Y2);
    X2(this, a, S_, M(b, am));
    X2(this, a, SNa, M(b, fm));
    X2(this, a, O_, M(b, sm));
    X2(this, a, K_, K.Qk);
    X2(this, a, W_, M(b, nn), Y2);
    h_a(this, a, b, W_, e_a);
    Z2(this, Vo(this, W_).gb(), l, i);
    X2(this, a, R_, M(b, Km));
    X2(this, a, FNa, K.Rk);
    X2(this, a, E_, K.Eq);
    if (this.g && (this.f || jK(this))) {
        X2(this, a, Y_, M(b, dn));
        X2(this, a, X_, M(b, en))
    }
    X2(this, a, L_, K.Vk);
    X2(this, a, D_, K.Kq);
    this.la(i)
};

function Y2(a) {
    return a.target.ea()
}
function X2(a, b, c, d, e) {
    d && b.a(Vo(a, c), d, xM, e)
}
function h_a(a, b, c, d, e) {
    if (d = Vo(a, d)) for (var g = 0; g < e.length; g++) if (e[g] == k) d.xd(new oN);
    else {
        var h = b,
            j = d,
            m = M(c, e[g]);
        if (m) {
            var o = new kN(k, k, a.J());
            j.xd(o);
            h.a(o, m, bua)
        }
    }
}

function g_a(a) {
    a.L.C(Vo(a, G_).gb(), KM, a.jx);
    var b = Vo(a, H_);
    i_a(a, b, a.u, r(a.IQ, a), function (c) {
        return c.UP
    });
    Z2(a, b.gb(), i, i);
    a.L.C(b.gb(), KM, a.jx);
    b = Vo(a, I_);
    i_a(a, b, d_a, function (c) {
        return c + ki
    });
    Z2(a, b.gb(), i, i);
    a.L.C(b.gb(), KM, a.jx);
    a.L.C(Vo(a, W_).gb(), KM, a.jx)
}
var j_a = "';";
n.IQ = function (a) {
    var b;
    b = Q2.N();
    var c = a.od(),
        d = QZa[c];
    b = d ? !dd(Te(b.a, VZa(b, c)), Te(b.a, VZa(b))) ? c : d : c;
    return this.J().F(Ne, {
        style: fpa + a.a + j_a
    }, b)
};
n.jx = function () {
    this.dispatchEvent($E)
};

function i_a(a, b, c, d, e) {
    for (var g = 0; g < c.length; g++) {
        var h = d ? d(c[g]) : String(c[g]),
            j = e ? e(c[g]) : c[g];h = new kN(h, j, a.J());b.xd(h)
    }
}
function Z2(a, b, c, d) {
    c && z.ba.add(b.z(), pR);
    d && z.ba.add(b.z(), oR)
}
n.o_ = function (a) {
    k_a(this, ih, a);
    k_a(this, eh, a);
    var b = $2(this, Dh);
    b && b.zb(ora(a));
    if (b = $2(this, yw)) {
        var c = MD(a),
            d = k;
        if (Yv(a, c)) {
            c = a.Ub(dh, c[0]);
            var e = c.Bb;
            if (e) d = si(Zv(a.Pa(e), c.yb)) ? 3 : 0
        }
        b.zb(d)
    }
    if (!this.QB) this.QB = Vo(this, O_)
};
var l_a = "Optimize style intersection caching for style of type: ";

function k_a(a, b, c) {
    var d = c.u;
    if (d.Kb()) {
        var e = Ev(d);
        if (sh(b)) if (b == eh) {
            d = Cg(c.a, e.start);
            e = Eg(c.a, e.end)
        } else {
            c.V.log(Error(l_a + b));
            d = e.start;
            e = e.end
        } else {
            d = Fv(c.g, b, e.start);
            e = Hoa(c.g, b, e.end) || Hu(c)
        }
        b = c.P.get(b, d, e)
    } else b = b == ih ? eB(c).Z() : Py(c, b, d.Fa()).Z();
    for (var g in b)(c = $2(a, g)) && c.zb(b[g])
}
function $2(a, b) {
    var c = a.a[b];
    if (!p(c)) {
        c = m_a(a, b);
        a.a[b] = c
    }
    return c
}

function m_a(a, b) {
    var c;
    switch (b) {
    case Wh:
        c = Vo(a, J_);
        return new a3(c);
    case $h:
        c = Vo(a, K_);
        return new a3(c);
    case bi:
        c = Vo(a, L_);
        return new a3(c);
    case Yh:
        c = Vo(a, H_);
        return new b3(c);
    case Zh:
        c = Vo(a, I_);
        return new b3(c);
    case Dh:
        c = new c3;
        c.a[0] = Vo(a, U_);
        c.a[2] = Vo(a, T_);
        c.a[1] = Vo(a, V_);
        return c;
    case Eh:
        c = Vo(a, G_);
        return new b3(c);
    case Jh:
        c = Vo(a, W_);
        return new b3(c);
    case Mh:
        c = Vo(a, W_);
        return new b3(c);
    case Lh:
        c = Vo(a, W_);
        return new b3(c);
    case Vh:
        c = Vo(a, N_);
        return new b3(c);
    case Xh:
        c = Vo(a, M_);
        return new b3(c);
    case yw:
        c = new c3;
        c.a[0] = Vo(a, Q_);
        c.a[3] = Vo(a, P_);
        return c;
    case Kh:
        if (a.g && (a.f || jK(a))) {
            c = new c3;
            c.a[i] = Vo(a, Y_);
            c.a[l] = Vo(a, X_);
            return c
        }
        return k;
    default:
        return k
    }
}
n.q = function () {
    W2.p.q.call(this);
    for (var a in this.a) this.a[a] && this.a[a].G();
    delete this.a;
    delete this.QB;
    this.L.G();
    delete this.L
};

function d3() {}
s(d3, t);
d3.prototype.n = k;
d3.prototype.zb = function (a) {
    if (a != this.n) {
        this.f(a);
        this.n = a
    }
};

function c3() {
    this.a = {}
}
s(c3, d3);
c3.prototype.f = function (a) {
    for (var b in this.a) tM(this.a[b], String(a) == b)
};
c3.prototype.q = function () {
    c3.p.q.call(this);
    delete this.a
};

function a3(a) {
    this.a = a
}
s(a3, d3);
a3.prototype.f = function (a) {
    tM(this.a, !! a)
};
a3.prototype.q = function () {
    a3.p.q.call(this);
    delete this.a
};

function b3(a, b) {
    this.g = a;
    this.a = b
}
s(b3, d3);
b3.prototype.f = function (a) {
    if (this.a) a = this.a(a);
    this.g.zb(a)
};
b3.prototype.q = function () {
    b3.p.q.call(this);
    delete this.g;
    delete this.a
};

function n_a(a, b, c, d) {
    U2.call(this, a, b, c, d);
    a = this.J().he(kOa());
    this.Td(a_a([new kN(a, Hf)], this.Xe))
}
s(n_a, U2);

function e3() {}
s(e3, uN);
e3.prototype.Hl = function (a) {
    if (a.id == N_) return new n_a(v);
    return e3.p.Hl.call(this, a)
};
var o_a = "Translated copy of ",
    p_a = "Translate document";

function f3(a, b, c, d) {
    k_.call(this, i, d);
    this.g = a;
    a = o_a + b;
    this.a = b ? a : v;this.f = c;this.setTitle(p_a)
}
s(f3, k_);
var q_a = [
    ["Afrikaans", "af"],
    ["Albanian", "sq"],
    ["Arabic", "ar"],
    ["Belarusian", "be"],
    ["Bulgarian", "bg"],
    ["Catalan", "ca"],
    [IMa, "zh-CN"],
    [JMa, "zh-TW"],
    ["Croatian", "hr"],
    ["Czech", "cs"],
    ["Danish", "da"],
    ["Dutch", "nl"],
    ["English", cf],
    ["Estonian", "et"],
    ["Filipino", or],
    ["Finnish", Ea],
    ["French", fF],
    ["Galician", "gl"],
    ["German", AD],
    ["Greek", "el"],
    ["Haitian Creole", "ht"],
    ["Hebrew", "iw"],
    ["Hindi", "hi"],
    ["Hungarian", "hu"],
    ["Icelandic", xD],
    ["Indonesian", Iv],
    ["Irish", "ga"],
    ["Italian", "it"],
    ["Japanese", "ja"],
    ["Korean", "ko"],
    ["Latvian", "lv"],
    ["Lithuanian", Ira],
    ["Macedonian", "mk"],
    ["Malay", "ms"],
    ["Maltese", "mt"],
    ["Norwegian", Jp],
    ["Persian", "fa"],
    ["Polish", "pl"],
    ["Portuguese", ki],
    ["Romanian", "ro"],
    ["Russian", "ru"],
    ["Serbian", "sr"],
    ["Slovak", "sk"],
    ["Slovenian", "sl"],
    ["Spanish", "es"],
    ["Swahili", RA],
    ["Swedish", "sv"],
    ["Thai", "th"],
    ["Turkish", j0],
    ["Ukrainian", "uk"],
    ["Vietnamese", "vi"],
    ["Welsh", "cy"],
    ["Yiddish", "yi"]
];
n = f3.prototype;
n.Jm = k;
n.bp = k;
var r_a = '<div class="kix-dialog goog-inline-block"><div class="kix-translatedialog-desc">',
    s_a = "Create a translated copy of the current document",
    t_a = '</div><div class="kix-translatedialog-input"><div class="kix-translatedialog-label">',
    u_a = "New document title:",
    v_a = '</div><div><input type="text" id="kix-translatedialog-title-input" size="32"/></div></div><div class="kix-translatedialog-input"><div class="kix-translatedialog-label">',
    w_a = "Translate into:",
    x_a = '</div><div><select id="kix-translatedialog-lang-input" /></div></div></div>';
n.F = function () {
    f3.p.F.call(this);
    var a = this.db(),
        b;
    b = new N;
    b.append(r_a, s_a, t_a, u_a, v_a, w_a, x_a);
    b = b.toString();
    a.innerHTML = b
};
var y_a = "kix-translatedialog-title-input",
    z_a = "kix-translatedialog-lang-input",
    A_a = "Choose a language";
n.ga = function () {
    f3.p.ga.call(this);
    var a = this.J();
    this.Jm = a.z(y_a);
    this.Jm.value = this.a;
    a = this.bp = a.z(z_a);
    a.options[0] = new Option(A_a, v);
    for (var b = q_a.sort(), c = 0; c < b.length; c++) a.options[c + 1] = new Option(b[c][0], b[c][1]);
    Dp(this.Bc, Gp).disabled = i;
    this.Ga().C(this, Ep, this.p_).C(this.Jm, Sj, this.xK).C(this.bp, Li, this.xK)
};
n.X = function (a) {
    f3.p.X.call(this, a);
    a && l_(this.Jm)
};
var B_a = "title",
    C_a = "lang";
n.p_ = function (a) {
    if (a.key == Gp) {
        a = [Iv, this.g, B_a, this.Jm.value, C_a, this.bp.value];
        a = tB(Sra(window.location.href), undefined, undefined, this.f, RAa, St(a));
        xR(a, {
            target: YB
        })
    }
};
n.xK = function () {
    var a = this.Jm.value,
        b = this.bp.value;
    Dp(this.Bc, Gp).disabled = WK(a) || WK(b)
};
n.q = function () {
    f3.p.q.call(this);
    delete this.Jm;
    delete this.bp
};
var D_a = "navigate";

function g3(a) {
    Pd.call(this, D_a);
    this.a = a
}
s(g3, Pd);
var E_a = "history_state",
    F_a = '<input type="text" name="%s" id="%s" style="display:none" />',
    G_a = "https",
    H_a = "https:///",
    I_a = "history_iframe",
    J_a = 'src="',
    K_a = '<iframe id="%s" style="display:none" %s></iframe>';

function h3(a, b, c, d) {
    if (a && !b) f(Error("Can't use invisible history without providing a blank page."));
    var e;
    if (c) e = c;
    else {
        e = E_a + i3;
        document.write(XK(F_a, e, e));
        e = z.z(e)
    }
    this.u = e;
    this.a = c ? z.fc(z.wb(c)) : window;this.Aa = this.a.location.href.split(Jt)[0] + Jt;this.K = b;
    if (y.ia && !b) this.K = window.location.protocol == G_a ? H_a : Jd;this.Ta = new Kj(150);this.f = !a;this.L = new ze(this);
    if (a || y.ia && !j3) {
        if (d) a = d;
        else {
            a = I_a + i3;
            b = this.K ? J_a + Vb(this.K) + wb : v;document.write(XK(K_a, a, b));a = z.z(a)
        }
        this.je = a;
        this.xa = i
    }
    if (y.ia && !j3) {
        this.L.C(this.a, Oe, this.p0);
        this.aa = this.P = l
    }
    this.f ? L_a(this, k3(this), i) : l3(this, this.u.value);i3++
}
s(h3, Pi);
h3.prototype.n = l;
h3.prototype.M = l;
h3.prototype.g = k;
var j3 = y.ia && document.documentMode >= 8 || y.Ua && y.Xb("1.9.2") || y.La && y.Xb("532.1");
n = h3.prototype;
n.ct = k;
n.q = function () {
    h3.p.q.call(this);
    this.L.G();
    this.la(l)
};
var M_a = "pageshow",
    N_a = "hashchange";
n.la = function (a) {
    if (a != this.n) if (y.ia && !j3 && !this.P) this.aa = a;
    else if (a) {
        if (y.Gc) this.L.C(this.a.document, O_a, this.H0);
        else y.Ua && this.L.C(this.a, M_a, this.BT);
        if (j3 && this.f) {
            this.L.C(this.a, N_a, this.s0);
            this.n = i;
            this.dispatchEvent(new g3(k3(this)))
        } else if (!y.ia || this.P) {
            this.L.C(this.Ta, Nj, this.AT);
            this.n = i;
            if (!y.ia) this.g = k3(this);
            this.Ta.start();
            this.dispatchEvent(new g3(k3(this)))
        }
    } else {
        this.n = l;
        De(this.L);
        Mj(this.Ta)
    }
};
n.p0 = function () {
    this.P = i;
    this.u.value && l3(this, this.u.value, i);
    this.la(this.aa)
};
n.BT = function (a) {
    if (a.Zc.persisted) {
        this.la(l);
        this.la(i)
    }
};
n.s0 = function () {
    var a = m3(this, this.a);
    a != this.g && n3(this, a)
};

function k3(a) {
    return a.ct !== k ? a.ct : a.f ? m3(a, a.a) : o3(a) || v
}
function m3(a, b) {
    var c = b.location.href,
        d = c.indexOf(Jt);
    return d < 0 ? v : c.substring(d + 1)
}
function L_a(a, b, c) {
    b = a.Aa + (b || v);
    a = a.a.location;
    if (b != a.href) if (c) a.replace(b);
    else a.href = b
}
var P_a = "<title>%s</title><body>%s</body>";

function l3(a, b, c, d) {
    if (a.xa || b != o3(a)) {
        a.xa = l;
        b = Mb(b);
        if (y.ia) {
            var e = z.Te(a.je);
            e.open(ZAa, c ? Toa : undefined);
            e.write(XK(P_a, Vb(d || a.a.document.title), b));
            e.close()
        } else {
            b = a.K + Jt + b;
            if (a = a.je.contentWindow) if (c) a.location.replace(b);
            else a.location.href = b
        }
    }
}
function o3(a) {
    if (y.ia) {
        a = z.Te(a.je);
        return a.body ? Nb(a.body.innerHTML) : k
    } else {
        var b = a.je.contentWindow;
        if (b) {
            var c;
            try {
                c = Nb(m3(a, b))
            } catch (d) {
                a.M || Q_a(a, i);
                return k
            }
            a.M && Q_a(a, l);
            return c || k
        } else return k
    }
}
n.AT = function () {
    if (this.f) {
        var a = m3(this, this.a);
        a != this.g && n3(this, a)
    }
    if (!this.f || y.ia && !j3) {
        a = o3(this) || v;
        if (this.ct == k || a == this.ct) {
            this.ct = k;
            a != this.g && n3(this, a)
        }
    }
};

function n3(a, b) {
    a.g = a.u.value = b;
    if (a.f) {
        y.ia && !j3 && l3(a, b);
        L_a(a, b)
    } else l3(a, b);
    a.dispatchEvent(new g3(k3(a)))
}
function Q_a(a, b) {
    if (a.M != b) a.Ta.setInterval(b ? 1E4 : 150);
    a.M = b
}
n.H0 = function () {
    Mj(this.Ta);
    this.Ta.start()
};
var O_a = [Co, Qj, Fo],
    i3 = 0,
    R_a = {
        zO: D_a
    };

function p3(a, b, c) {
    this.va = a;
    this.A = b;
    this.a = c;
    this.L = new ze(this);
    this.L.C(this.a, R_a.zO, this.g, undefined, this);
    this.a.la(i)
}
s(p3, t);
p3.prototype.g = function () {
    this.f()
};
p3.prototype.f = function () {
    var a = k3(this.a).split(Pt);
    if (a.length == 2) if (a = S_a(this, a[0], a[1])) {
        wr(this.A, a, i, undefined, undefined, i);
        this.va.scrollIntoView(a, i)
    }
};
var T_a = "heading";

function S_a(a, b, c) {
    var d = a.A;
    if (b == jt) {
        a = d.Pa(c);
        if (!a) return k;
        if (a.O() != jt) return k;
        a = FA(d, c);
        if (a < 0) return k;
        return new P(a)
    } else if (b == T_a) {
        a = d.td(eh);
        var e = -1;
        Pg(a, function (g, h) {
            if (h.Go == c) {
                e = Cg(d.Y(), g);
                return i
            }
            return l
        });
        if (e != -1) return new P(e)
    }
    return k
}
p3.prototype.q = function () {
    p3.p.q.call(this);
    delete this.va;
    delete this.A;
    this.L.G();
    delete this.L;
    this.a.G();
    delete this.a
};
var U_a = "kix-history-input",
    V_a = "kix-history-iframe";

function W_a(a, b, c) {
    var d = c.z(U_a);
    c = c.z(V_a);
    d = new h3(l, undefined, d, c || undefined);
    return new p3(a, b, d)
};

function q3() {
    this.a = [];
    this.L = new ze(this)
}
s(q3, t);
Qa(q3);
n = q3.prototype;
n.mx = 0;
var X_a = "//www.google.com/dictionary/js/api_loader.js";
n.load = function (a, b) {
    if (this.mx == 2) Oj(a, 0);
    else {
        if (this.mx == 0 && !window.dict_api || !window.dict_api.load) {
            var c = b.createElement(tJ);
            c.type = $J;
            c.src = X_a;
            this.L.C(c, y.ia ? kJ : Oe,
            this.u_);
            document.body.appendChild(c);
            this.mx = 1
        }
        this.a.push(a)
    }
};
var Y_a = "//www.google.com";
n.u_ = function () {
    window.dict_api && window.dict_api.load && window.dict_api.load.call(CO, Y_a, 1, cf, r(this.fU, this))
};
n.fU = function () {
    this.mx = 2;
    for (var a = 0, b; b = this.a[a]; a++) b();
    this.a = []
};
n.q = function () {
    q3.p.q.call(this);
    delete this.a;
    this.L.G();
    delete this.L
};

function r3(a, b, c, d) {
    this.A = a;
    this.f = b;
    this.a = c;
    this.V = d
}
s(r3, t);
var Z_a = "/drawing";

function Eta(a, b) {
    var c = {};
    for (var d in b) {
        var e = {};
        e.id = b[d].ma();
        e.rev = b[d].ji();
        c[d] = e
    }
    var g = {};
    g.drawings = c;
    var h = a.A.f.P;
    AF(a.f, r(function (j) {
        qO(j.Gd(Z_a).Lk(Iv, h).Lh(g).Pf(this.W0, this), this.V0, this).Ld()
    }, a))
}
r3.prototype.W0 = function (a) {
    a = a.Cc();
    for (var b in a) {
        var c = {};
        c.eId = b;
        c.dId = a[b];
        c.dRev = 1;
        this.a.execute(DF, c)
    }
};
var $_a = "Failed to paste drawing.",
    a0a = "The drawing could not be pasted.";
r3.prototype.V0 = function () {
    Mp($_a, a0a)
};
r3.prototype.q = function () {
    r3.p.q.call(this);
    delete this.A;
    delete this.f;
    delete this.a;
    delete this.V
};
var b0a = "photo";

function c0a(a, b, c, d) {
    if (a.action == OF) if ((a = a.docs) && a.length) {
        var e = a[0],
            g, h, j;
        if ((a = e.thumbnails) && a.length > 0) {
            a = a[a.length - 1];
            g = a.url;
            h = a.width;
            j = a.height
        } else g = e.url;
        e.serviceId == b0a ? gK(b, function () {
            d(g, e.id, h, j)
        }) : d0a(g, b, c, d)
    }
}
var e0a = "/createphoto",
    f0a = "The selected image is too large.",
    g0a = "The selected image is in an unsupported format.",
    h0a = "There was a problem retrieving the specified image.";

function d0a(a, b, c, d, e) {
    gK(b, function () {
        c.Gd(e0a).Lh({
            id: b.f,
            url: a
        }).Pf(function (g) {
            var h = g.Cc();
            if (g = h.imageError) {
                a: switch (g) {
                case 2:
                case 3:
                    h = f0a;
                    break a;
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    h = g0a;
                    break a;
                default:
                    h = h0a;
                    break a
                }
                e ? e(a, g, h) : Mp(Fa, h)
            } else d(a, h.imageId, h.width, h.height)
        }).Ld()
    })
};

function s3(a, b, c, d, e, g) {
    this.Xa = a;
    this.A = b;
    this.n = c;
    this.g = d;
    this.V = e;
    this.f = g
}
s(s3, t);
s3.prototype.a = 0;
var i0a = "You have attempted to paste too many images. Only the first 20 images will be pasted";

function Dta(a, b) {
    var c = 20;
    a.a = 0;
    for (var d in b) {
        var e = b[d],
            g = a.A.Pa(e),
            h = g && g.O() == Lf ? g.a : k;
        if (h && h.O() == 0 && h.Vo && (a.f || ft(h))) {
            if (c > 0) AF(a.n, r(function (j) {
                var m = e;
                d0a(h.Vo, this.Xa, j, r(this.iY, this, m), r(this.jY, this, m))
            }, a));
            else {
                Mp(Tq, i0a);
                break
            }
            c--
        }
    }
}
s3.prototype.iY = function (a, b, c, d, e) {
    if (a && c) {
        var g = (b = this.A.Pa(a)) && b.a;
        if (g) {
            b = {};
            b.i_cid = c;
            if (g.uh == dt) {
                c = Ge.N();
                d /= Ye(c);
                e /= Ye(c);
                if (d > 600) {
                    d = 600;
                    e = Math.round(600 / d * e)
                }
                b.i_wth = d;
                b.i_ht = e
            }
            d = {};
            d.eId = a;
            d.imgProps = b;
            this.g.execute(oM, d)
        }
    }
};
var j0a = "Failed to paste an image.",
    k0a = "One or more images could not be pasted. Images that are on your local disk or in non-standard formats cannot be imported automatically.";
s3.prototype.jY = function () {
    this.a++;
    this.a > 1 || Mp(j0a, k0a)
};
s3.prototype.q = function () {
    s3.p.q.call(this);
    delete this.Xa;
    delete this.A;
    delete this.n;
    delete this.g;
    delete this.V;
    delete this.f
};

function t3(a, b, c, d, e, g) {
    this.Gv = c ? new r3(b, c, d, e) : k;this.Hw = c ? new s3(a, b, c, d, e, g) : k
}
s(t3, t);
t3.prototype.q = function () {
    t3.p.q.call(this);
    this.Gv.G();
    delete this.Gv;
    this.Hw.G();
    delete this.Hw
};

function u3() {}
s(u3, t);
n = u3.prototype;
n.wy = i;
n.Yv = i;
n.nE = l;
n.AD = v;
n.RA = function () {
    return this.nE ? this.AD : v
};
var l0a = "beforeunload";

function v3(a, b, c, d) {
    this.M = a;
    this.f = b;
    this.u = c;
    this.K = d;
    this.n = [];
    oe(a, l0a, r(this.P, this))
}
s(v3, t);
v3.prototype.L1 = function (a) {
    this.a = a
};
v3.prototype.P = function (a) {
    var b;
    if (this.a) b = this.a();
    if (b) {
        oe(this.M, CVa, r(this.g, this));
        a.Zc.returnValue = b;
        if (y.La) return b
    } else this.g()
};
var m0a = "/leave",
    n0a = "Cache-Control",
    o0a = "no-cache";
v3.prototype.g = function () {
    for (var a = this.n, b = 0; b < a.length; ++b) a[b]();
    this.G();
    a = fza(AP(this.f.Gd(m0a).Lk(Iv, this.u).Lh({
        sid: this.K
    }), 1));
    b = new aqa;
    b.open(fJ, a.f, l);
    b.setRequestHeader(n0a, o0a);
    b.setRequestHeader(gJ, Twa);
    b.setRequestHeader(uJ, aj);
    b.send(a.a)
};
v3.prototype.q = function () {
    v3.p.q.call(this);
    this.f.G();
    delete this.n;
    delete this.a
};
var p0a = '<div id="docs-printpreview" style="display: none; overflow: hidden"><div id="docs-printpreview-toolbar" class="goog-toolbar docs-printpreview-toolbar"><div id="docs-printpreview-close" title=\'',
    q0a = "Go back to editing",
    r0a = '\' class="goog-toolbar-button"><div>&laquo; ',
    s0a = "Close preview",
    t0a = '</div></div><hr><div id="docs-printpreview-print" class="goog-toolbar-button">',
    u0a = '<div class="goog-inline-block goog-toolbar-menu-button-caption">&nbsp;',
    v0a = '</div></div></div><div class="docs-printpreview-frame-backing"><iframe id="docs-printpreview-frame" src=\'javascript:""\' frameborder=0 width="100%"></iframe></div></div>';

function w0a(a, b) {
    var c = b || new N;
    c.append(p0a, q0a, r0a, s0a, t0a);
    w_({
        Ko: GNa
    }, c);
    c.append(u0a, tk, v0a);
    if (!b) return c.toString()
};

function w3(a, b, c, d, e) {
    Qo.call(this);
    this.P = d || v;
    this.n = c;
    this.M = b;
    this.u = e || k;
    this.aa = a
}
s(w3, Qo);
n = w3.prototype;
n.ga = function () {
    w3.p.ga.call(this);
    K.Sk.Za(Mi, this.xH, this);
    K.Sk.la(i);
    So(this).C(this.n, yp, this.TD)
};
n.pb = function () {
    w3.p.pb.call(this);
    K.Sk.of(Mi, this.xH, this);
    K.Sk.la(l);
    So(this).a(this.n, yp, this.TD)
};
var x0a = "docs-printpreview-toolbar";
n.TD = function () {
    if (!p(this.f)) {
        var a = z.z(vv);
        this.f = a ? Df(a).y : 0;this.z().style.top = this.f + D
    }
    a = z.fe();
    var b = Mf(z.z(x0a));
    this.z().style.height = a.height - this.f + D;
    this.g.style.height = a.height - this.f - b.height + D
};
var y0a = "://",
    z0a = "docs.google.com",
    A0a = "/viewer",
    B0a = "pid",
    C0a = "srcid",
    D0a = "chrome";

function E0a(a, b, c, d) {
    var e = Lt(c);
    c = e[1] + y0a + e[3].replace(/^docs\d+.google.com$/, z0a);
    if (e = e[4]) c += Sf + e;
    return Vt(c + (d ? sB + d + A0a : A0a), ij, Bj, B0a, b, C0a, a, D0a, l)
}
n.xH = function () {
    var a = this.M;
    if (this.u) a = this.u();
    this.g.contentWindow.location.replace(E0a(a, this.aa, window.location.href, this.P));
    a = this.z();
    SK(a, {
        position: zf,
        left: Xd,
        width: Ba
    });
    Qf(a, i);
    this.TD()
};
n.nR = function () {
    Qf(this.z(), l);
    delete this.f;
    this.g.contentWindow.location.replace(z.ie.vn)
};
n.F = function () {
    this.sb(z.he(w0a()))
};
n.Ja = function () {
    w3.p.Ja.call(this);
    this.ob(this.z())
};
var F0a = "docs-printpreview-frame",
    G0a = "docs-printpreview-close",
    H0a = "docs-printpreview-print";
n.ob = function (a) {
    w3.p.ob.call(this, a);
    this.g = this.J().z(F0a);
    this.a = new wN;
    Zo(this.a, z.z(x0a));
    dN(this.a, l);
    this.a.X(i);
    this.a.la(i);
    a = Vo(this.a, G0a);
    So(this).C(a, Mi, this.nR);
    a = Vo(this.a, H0a);
    So(this).C(a, Mi, function () {
        Ni(K.Rk)
    })
};
n.q = function () {
    w3.p.q.call(this);
    this.a.G();
    this.g = k
};
var I0a = "gbf",
    J0a = "See what's new";

function x3(a, b, c, d) {
    this.u = a;
    this.n = b;
    this.g = c;
    this.a = d || z.J();
    this.f = this.a.pd(this.a.z(I0a));
    this.L = new ze(this);
    if (!(!this.f || this.Bp)) {
        a = this.Bp = new rS(YZ + this.g + wa, this.n, this.a);
        a.Ja();
        b = a.db();
        c = new AN(Hp);
        a.ya(c, i);
        d = this.a.F(ij, {
            target: YB,
            href: this.u
        });
        this.a.Ud(d, J0a);
        this.a.appendChild(b, d);
        BEa(a, this.f, 1);
        this.L.C(this.f, Ud, this.cW).C(c, Mi, this.CW)
    }
}
s(x3, t);
n = x3.prototype;
n.Bp = k;
n.cW = function (a) {
    a.preventDefault();
    this.show()
};
n.CW = function () {
    this.Bp.X(l)
};
n.show = function () {
    this.Bp.X(i)
};
n.q = function () {
    x3.p.q.call(this);
    delete this.f;
    this.L.G();
    delete this.L;
    mb(this.Bp);
    delete this.Bp
};
var K0a = "promo_url",
    L0a = "promo_title",
    M0a = "promo_content_html",
    N0a = "show_promo";

function O0a(a) {
    var b = xJ.N(),
        c = b.getString(K0a),
        d = b.getString(L0a);
    b = b.getString(M0a);
    if (!c || !d || !b) return k;
    a = new x3(c, d, b, a);
    lra(xJ.N(), N0a) && a.show();
    return a
};
var P0a = '<div class="docs-user-roster">',
    Q0a = '<div class="goog-inline-block docs-user-roster-bubble',
    R0a = " docs-user-roster-bubble-clickable ",
    S0a = '" style="background: ',
    T0a = "Show ",
    U0a = " in the document.",
    V0a = ' title="',
    W0a = "></div>";

function X0a(a, b) {
    var c = b || new N;
    c.append(P0a);
    var d = c || new N;
    d.append(Q0a, a.QG ? R0a + hO(a.zQ) : v,
    S0a,
    hO(a.color),
    wb);
    if (a.QG) {
        var e = T0a + (hO(a.uH) + U0a);
        d.append(V0a, e, wb)
    }
    d.append(W0a);
    c || d.toString();
    c.append(gv, hO(a.uH), wa);
    if (!b) return c.toString()
}
var Y0a = '<span class="docs-chat-name">',
    Z0a = ":&nbsp;</span>";

function $0a(a, b) {
    var c = b || new N;
    c.append(Y0a, hO(a.Py), Z0a);
    if (!b) return c.toString()
};

function y3(a) {
    Qo.call(this, a);
    this.M = new ze(this);
    this.u = new ze(this);
    this.f = i;
    this.g = k
}
s(y3, Qo);
var z3 = {
    i3: "docs-chat-pane",
    kN: "docs-chat-messages",
    KO: "docs-chat-users",
    gO: "docs-chat-edit-box"
};
n = y3.prototype;
var a1a = "docs-chat-pane-container",
    b1a = '<div id="docs-chat-pane" class="docs-chat-pane"><div id="docs-chat-users" class="docs-chat-users"></div><div id="docs-chat-messages" class="docs-chat-messages"></div><textarea id="docs-chat-edit-box" class="docs-chat-edit-box" tabIndex="1000"></textarea></div>';
n.F = function () {
    var a = this.Xe.F(sd, a1a),
        b;
    b = new N;
    b.append(b1a);
    b = b.toString();
    a.innerHTML = b;
    this.sb(a)
};
n.ga = function () {
    y3.p.ga.call(this);
    var a = this.Xe;
    this.P = a.z(z3.kN);
    this.n = a.z(z3.KO);
    this.a = a.z(z3.gO);
    c1a(this, i);
    this.u.C(this.n, Ud, this.tR)
};

function c1a(a, b) {
    var c = a.M;
    b ? c.C(a.a, Qj, a.sR).C(a.a, Ao, r(a.zH, a, i)).C(a.a, yo, r(a.zH, a, l)) : De(c)
}
n.la = function (a) {
    this.f = a;
    c1a(this, a);
    this.a.disabled = a ? v : fua
};
n.X = function (a) {
    Qf(this.z(), a);
    a && this.f && this.a.focus()
};
n.Da = function () {
    return this.z().style.display != Hf
};
n.sR = function (a) {
    var b = this.a,
        c = b.value;
    if ((a.keyCode || a.ow) == 13) if (!a.ig && !a.ctrlKey && !a.Cd) {
        c.length > 0 && this.dispatchEvent(new d1a(c));
        Oj(function () {
            b.value = v
        }, 0)
    }
};
var e1a = "docs-chat-edit-box-focus";
n.zH = function (a) {
    z.ba.md(this.a, e1a, a)
};
var f1a = "docs-chat-message";

function g1a(a, b) {
    var c = a.P,
        d = a.Xe.F(sd, f1a);
    c.appendChild(d);
    d.innerHTML = b;
    A3(a)
}

function A3(a) {
    if (a.f) {
        var b = a.P;
        a.aa = a.z().offsetHeight - a.a.offsetHeight - a.n.offsetHeight - 10;
        b.style.height = Math.max(0, a.aa) + D;
        Oj(function () {
            b.scrollTop = b.scrollHeight
        }, 0)
    }
}
var h1a = "docs-user-roster-bubble-clickable",
    i1a = "docs-user-sessionId-";
n.tR = function (a) {
    a = a.target;
    if (z.ba.Pd(a, h1a)) {
        a = z.ba.get(a);
        a = qc(a, function (b) {
            return Hb(b, i1a)
        }).substring(20);
        this.dispatchEvent(new j1a(a))
    }
};
n.q = function () {
    y3.p.q.call(this);
    this.M.G();
    this.u.G()
};
var k1a = "chat-pane-chat";

function d1a(a) {
    Pd.call(this, k1a);
    this.message = a
}
s(d1a, Pd);
var l1a = "chat-pane-bubble-click";

function j1a(a) {
    Pd.call(this, l1a);
    this.a = a
}
s(j1a, Pd);
var m1a = "/chat";

function B3(a, b, c, d, e) {
    this.Lt = a;
    this.n = b;
    this.f = c;
    this.a = d;
    (this.L = new ze(this)).C(a, [pj, qj], this.ZV).C(a, oj, this.uR).C(b, yp, this.vR).C(c, Mi, this.MW).C(d, k1a, function (g) {
        var h = this.Lt;
        g = g.message;
        h.dispatchEvent(new WP(h, h.f, g));
        AP(h.M.Gd(m1a).Lk(Iv, h.K), 2).Lh({
            sid: h.f.a,
            msg: g
        }).Ld()
    }).C(d, l1a, this.wR).C(e, rj, this.AW)
}
s(B3, t);
n = B3.prototype;
var n1a = " has left.",
    o1a = '<span class="docs-chat-status">',
    p1a = " has opened the document.";
n.ZV = function (a) {
    if (!a.a.To) {
        var b = a.type === qj;
        if (a.g || b) {
            var c = this.a;
            if (c.f) {
                a = {
                    Py: a.a.od()
                };
                if (b) {
                    b = new N;
                    a = hO(a.Py) + n1a;
                    b.append(o1a, a, Re);
                    a = b.toString()
                } else {
                    b = new N;
                    a = hO(a.Py) + p1a;
                    b.append(o1a, a, Re);
                    a = b.toString()
                }
                g1a(c, a);
                c.g = k
            }
        }
        this.f.X(i)
    }
    q1a(this);
    C3(this.Lt.Bj());
    uM(this.f, D3(this))
};
var r1a = "me";
n.uR = function (a) {
    var b = a.a;
    a = a.message;
    var c = this.a,
        d = new N;
    if (c.g !== b.a) {
        d.append($0a({
            Py: b.To ? r1a : b.od()
        }));
        c.g = b.a
    }
    d.append(Vb(a));
    g1a(c, d.toString());
    if (!this.a.Da()) {
        b = b.od() + ta + a;
        s1a(this.f, i);
        this.g || this.BH(b)
    }
};
n.vR = function () {
    t1a(this);
    A3(this.a);
    u1a(this)
};
n.MW = function () {
    var a = this.a.Da(),
        b = !a;
    t1a(this);
    this.a.X(b);
    A3(this.a);
    u1a(this);
    this.f.$b(!a);
    s1a(this.f, l);
    if (this.g) {
        Pj(this.g);
        this.g = k;
        uM(this.f, D3(this))
    }
};

function t1a(a) {
    var b = a.a.z(),
        c = Mf(a.f.z()),
        d = Ef(a.f.z());
    a = a.n.fe();
    Mf(b);
    c = Math.max(d.y + c.height, 0);
    b.style.top = c + D;
    b.style.height = a.height - c + D
}
var v1a = "paddingLeft",
    w1a = "paddingRight",
    x1a = "paddingTop",
    y1a = "paddingBottom";

function u1a(a) {
    var b = a.a.Da(),
        c = a.n.fe(),
        d = Mf(a.a.z());
    a = a.n;
    b = new cd(b ? c.width - d.width : c.width,
    0);
    c = a.g;
    if (y.ia) {
        d = kK(c, v1a);
        var e = kK(c, w1a),
            g = kK(c, x1a),
            h = kK(c, y1a);
        d = new dK(g, e, h, d)
    } else {
        d = of(c, v1a);
        e = of(c, w1a);
        g = of(c, x1a);
        h = of(c, y1a);
        d = new dK(parseFloat(g), parseFloat(e), parseFloat(h), parseFloat(d))
    }
    d = d;
    c.style.width = Math.max(b.width - d.left - d.right, 0) + D;
    a.f()
}
var z1a = "No one else is viewing",
    A1a = " is viewing",
    B1a = " and 1 other are viewing",
    C1a = " and ",
    D1a = " others are viewing";

function D3(a) {
    var b = C3(a.Lt.Bj());
    a = b.length;
    if (a == 0) a = z1a;
    else if (a == 1) {
        b = b[0].od();
        a = b + A1a
    } else if (a == 2) {
        b = b[0].od();
        a = b + B1a
    } else {
        b = b[0].od();
        a = b + (C1a + (a - 1 + D1a))
    }
    return a
}
n.o1 = function (a) {
    this.u = a;
    q1a(this)
};
n.wR = function (a) {
    this.u && this.u(this.Lt.Bj()[a.a])
};

function q1a(a) {
    var b = C3(a.Lt.Bj()),
        c = !! !! a.u;
    a = a.a.n;
    a.innerHTML = v;
    for (var d = 0; d < b.length; d++) {
        var e = b[d];
        e = z.he(X0a({
            uH: e.od(),
            color: e.Cj(),
            QG: c,
            zQ: i1a + e.a
        }));
        a.appendChild(e)
    }
}

function C3(a) {
    a = YK(a, function (b) {
        return !b.To
    });
    a = rb(a);
    Hc(a, function (b, c) {
        return b.od() > c.od() ? 1 : b.od() < c.od() ? -1 : 0
    });
    return a
}
n.BH = function (a) {
    (this.K = !this.K) ? uM(this.f, a) : uM(this.f, D3(this));this.g = Oj(r(this.BH, this, a), 1500)
};
n.AW = function (a) {
    a.g.a() != a.a.a() && this.a.la(a.a.a())
};
n.q = function () {
    B3.p.q.call(this);
    this.f.G();
    this.a.G();
    this.L.G()
};

function E3(a, b) {
    HM.call(this, a, new F3, b);
    NM(this, 32, l);
    NM(this, 64, i)
}
s(E3, HM);
var E1a = "docs-icon-img docs-icon-chevron-down",
    F1a = "docs-icon-chevron",
    G1a = "docs-presence-widget-inner",
    H1a = "docs-presence-widget-content",
    I1a = "docs-presence-widget",
    J1a = "docs-presence-widget-normal";
E3.prototype.ob = function (a) {
    E3.p.ob.call(this, a);
    var b = this.J(),
        c = Tta(E1a, b, F1a);
    a.appendChild(c);
    a.appendChild(b.F(sd, G1a, b.F(sd, H1a)));
    z.ba.add(a, I1a);
    z.ba.add(a, J1a)
};
var K1a = "docs-icon-chevron-up",
    L1a = "docs-icon-chevron-down";
E3.prototype.Ka = function (a, b) {
    E3.p.Ka.call(this, a, b);
    if (a === 64) {
        var c = z.oc(sd, F1a, this.z())[0].firstChild;
        z.ba.md(c, K1a, b);
        z.ba.md(c, L1a, !b)
    }
};
var M1a = "docs-presence-widget-notify";

function s1a(a, b) {
    var c = a.z();
    z.ba.md(c, M1a, b);
    z.ba.md(c, J1a, !b)
}
function F3() {}
s(F3, AM);
F3.prototype.Ca = function () {
    return I1a
};
F3.prototype.Od = function (a) {
    return z.oc(sd, this.Ca() + op, a)[0]
};

function G3() {
    return window.gadgets && window.gadgets.rpc
}
var H3 = k;

function I3(a) {
    if (G3()) a();
    else if (H3) H3.push(a);
    else var b = H3 = [a],
        c = window.setInterval(function () {
            if (G3()) {
                window.clearInterval(c);
                for (var d = 0; d < b.length; d++) b[d]();
                H3 = k
            }
        }, 100)
};
var N1a = "//www-%s-opensocial.googleusercontent.com/gadgets/js/rpc.js?c=1&container=%s",
    O1a = "onepick",
    P1a = "/picker?",
    Q1a = "/picker",
    R1a = "/resources/rpc_relay.html";

function J3(a, b, c) {
    cp.call(this, this.wQ, i, c);
    this.$p = cc();
    S1a(this, a);
    if (b) {
        b = XK(N1a, O1a, O1a);
        if (!G3()) {
            c = z.createElement(tJ);
            c.src = b;
            c.type = $J;
            document.body.appendChild(c)
        }
    }
    b = k;
    c = a.indexOf(P1a);
    if (c > -1) b = a.substring(0, c + 8 - 1);
    else if (Ib(a, Q1a)) b = a;
    b && this.setRelayUrl(b + R1a)
}
s(J3, cp);
n = J3.prototype;
n.wQ = "picker modal-dialog";
n.IL = v;
n.je = k;
var T1a = "picker-frame",
    U1a = "picker-dialog";
n.Ja = function (a) {
    J3.p.Ja.call(this, a);
    this.je = this.Xe.F(Kd, {
        id: this.$p,
        name: this.$p,
        "class": T1a,
        src: z.ie.vn,
        frameBorder: Xd
    });
    this.db().appendChild(this.je);
    z.ba.add(this.z(), U1a);
    this.je.src = this.IL
};
var V1a = "rpctoken",
    W1a = "rpcService";

function S1a(a, b) {
    var c = cc();
    b = FO(FO(new rO(b), V1a, c), W1a, a.$p).toString();
    I3(r(function () {
        window.gadgets.rpc.setAuthToken(this.$p, c)
    }, a));
    a.IL = b;
    if (a.je) a.je.src = b
}
n.M1 = function (a) {
    I3(r(function () {
        window.gadgets.rpc.register(this.$p, a)
    }, this))
};
n.setRelayUrl = function (a) {
    I3(r(function () {
        window.gadgets.rpc.setRelayUrl(this.$p, a)
    }, this))
};

function K3() {}
s(K3, Hr);
n = K3.prototype;
n.cd = function () {};
n.RS = function () {
    return Q0
};
n.bT = function () {
    return w3
};
n.eT = function () {
    return WTa
};
n.uT = function () {
    return W2
};
n.vT = function () {
    return e3
};
n.oS = function () {
    return RUa
};
n.DS = function () {
    return r0
};
n.nS = function () {
    return tMa
};
n.iS = function () {
    return UZ
};
n.uI = function () {
    return HLa
};
n.uS = function () {
    return ILa
};
n.hT = function () {
    return UP
};
n.WR = function () {
    return aGa
};
n.XR = function () {
    return UFa
};
n.lQ = function (a, b) {
    b ? uGa(15114) : uGa(15114, (new D1(a)).getData(), 179738)
};
n.ZR = function () {
    return lGa
};
n.$R = function () {
    return nGa
};
n.cS = function () {
    return pGa
};
n.aS = function () {
    return TFa
};
n.bS = function () {
    return OFa
};
n.YR = function () {
    return bGa
};
n.rT = function () {
    return F2
};
n.$S = function () {
    return J3
};
n.fS = function () {
    return XS
};
n.AS = function () {
    return cQ
};
n.xS = function () {
    return m_
};
n.zS = function () {
    return q_
};
n.TS = function () {
    return R0
};
n.US = function () {
    return S0
};
n.WS = function () {
    return T0
};
n.GS = function () {
    return y0
};
n.HS = function () {
    return D0
};
n.pI = function () {
    return EPa
};
n.FS = function () {
    return w0
};
n.YS = function () {
    return b1
};
n.dT = function () {
    return f1
};
n.cT = function () {
    return u3
};
n.pS = function () {
    return SYa
};
n.tT = function () {
    return I2
};
n.OS = function () {
    return H0
};
n.wT = function () {
    return f3
};
n.lS = function () {
    return b_
};
n.vS = function () {
    return c_.N()
};
n.iT = function () {
    return C1
};
n.qT = function () {
    return E2.N()
};
n.sT = function () {
    return G2.N()
};
n.qS = function () {
    return W_a
};
n.VS = function () {
    return PP
};
n.NS = function () {
    return v3
};
n.mT = function () {
    return YP
};
n.gS = function () {
    return kMa
};
var X1a = "docs-presence";
n.LQ = function (a, b, c) {
    var d = z.z(X1a);
    if (!d) return k;
    var e = new E3(v);
    Zo(e, d);
    e.X(l);
    d = new y3;
    d.Ja();
    d.X(l);
    A3(d);
    return new B3(a, b, e, d, c)
};
n.nT = function () {
    return h2
};
n.oT = function () {
    return bsa
};
n.QS = function () {
    return $ra
};
n.CS = function () {
    return nNa
};
n.wS = function () {
    return q3.N()
};
n.ES = function () {
    return qT
};
n.gT = function () {
    return k1
};
n.fw = function () {
    return lR
};
n.Rr = function () {
    return sM
};
n.mS = function () {
    return aua
};
n.AI = function () {
    return DBa
};
n.aT = function () {
    return eR
};
n.PS = function () {
    return O0a
};
n.oI = function () {
    return t3
};
n.XS = function () {
    return c0a
};
Kr(Rr(Qr.N(), es), K3);
Xr(Qr.N(), es);
var L3 = Qr.N();
!L3.n || es != L3.n.ma();
L3.n = k;
