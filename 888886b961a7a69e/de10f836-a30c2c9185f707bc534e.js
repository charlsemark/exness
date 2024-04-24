!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = new Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "7eb52992-5f7a-4492-bcbe-7b7324e9dd08"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-7eb52992-5f7a-4492-bcbe-7b7324e9dd08"));
  } catch (e) {}
})();
var _global =
  "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
(_global.SENTRY_RELEASE = { id: "epw-v1-107-14-20240328185838" }),
  (self.webpackChunk_exness_public_website =
    self.webpackChunk_exness_public_website || []).push([
    [5100],
    {
      71382: function (e, t, r) {
        r.d(t, {
          Gs: function () {
            return Yn;
          },
          TF: function () {
            return $n;
          },
          UH: function () {
            return Gn;
          },
        });
        var n = r(34795),
          a = r(96234),
          s = r(46234),
          i = r(82841),
          o = r.n(i),
          l = (r(65688), r(70315), r(43430), r(21515), r(77001)),
          c = r(99611),
          u = r(7376),
          d = r(96428),
          p = r(8358),
          h = r(62036),
          m = r(48101),
          f = r(3275),
          v = r(38562),
          y = r(50565),
          g = r(26229),
          k = r(12943),
          S = r(70381),
          b = r(30795),
          _ = r(65236),
          w = r(99820),
          x = r(4169),
          C = r(34352),
          T = r(12212),
          I = r(52987),
          E = r(26293),
          R = r(70243),
          M = r(77721),
          A = r(25756),
          D = r(4788);
        function O(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function L(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? O(Object(r), !0).forEach(function (t) {
                  (0, s.Z)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : O(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        function N(e, t) {
          var r =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (!r) {
            if (
              Array.isArray(e) ||
              (r = (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return F(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r) return Array.from(e);
                if (
                  "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return F(e, t);
              })(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              r && (e = r);
              var n = 0,
                a = function () {};
              return {
                s: a,
                n: function () {
                  return n >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[n++] };
                },
                e: function (e) {
                  throw e;
                },
                f: a,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var s,
            i = !0,
            o = !1;
          return {
            s: function () {
              r = r.call(e);
            },
            n: function () {
              var e = r.next();
              return (i = e.done), e;
            },
            e: function (e) {
              (o = !0), (s = e);
            },
            f: function () {
              try {
                i || null == r.return || r.return();
              } finally {
                if (o) throw s;
              }
            },
          };
        }
        function F(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var P,
          U = y.n2,
          B = "sentryReplaySession",
          z = "replay_event",
          H = "Unable to send Replay",
          W = 5e3,
          j = 3,
          Z = 15e4,
          q = 5e3,
          V = 2e7,
          K = 36e5;
        function J(e) {
          for (var t = void 0, r = e[0], n = 1; n < e.length; ) {
            var a = e[n],
              s = e[n + 1];
            if (
              ((n += 2),
              ("optionalAccess" === a || "optionalCall" === a) && null == r)
            )
              return;
            "access" === a || "optionalAccess" === a
              ? ((t = r), (r = s(r)))
              : ("call" !== a && "optionalCall" !== a) ||
                ((r = s(function () {
                  for (
                    var e = arguments.length, n = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    n[a] = arguments[a];
                  return r.call(t, ...n);
                })),
                (t = void 0));
          }
          return r;
        }
        function Y(e) {
          var t = J([e, "optionalAccess", (e) => e.host]);
          return Boolean(J([t, "optionalAccess", (e) => e.shadowRoot]) === e);
        }
        function G(e) {
          return "[object ShadowRoot]" === Object.prototype.toString.call(e);
        }
        function X(e) {
          try {
            var t = e.rules || e.cssRules;
            return t
              ? ((r = Array.from(t, $).join("")).includes(
                  " background-clip: text;"
                ) &&
                  !r.includes(" -webkit-background-clip: text;") &&
                  (r = r.replace(
                    " background-clip: text;",
                    " -webkit-background-clip: text; background-clip: text;"
                  )),
                r)
              : null;
          } catch (n) {
            return null;
          }
          var r;
        }
        function $(e) {
          var t, r, n;
          if (
            (function (e) {
              return "styleSheet" in e;
            })(e)
          )
            try {
              t =
                X(e.styleSheet) ||
                (function (e) {
                  var t = e.cssText;
                  if (t.split('"').length < 3) return t;
                  var r = [
                    "@import",
                    "url(".concat(JSON.stringify(e.href), ")"),
                  ];
                  return (
                    "" === e.layerName
                      ? r.push("layer")
                      : e.layerName &&
                        r.push("layer(".concat(e.layerName, ")")),
                    e.supportsText &&
                      r.push("supports(".concat(e.supportsText, ")")),
                    e.media.length && r.push(e.media.mediaText),
                    r.join(" ") + ";"
                  );
                })(e);
            } catch (a) {}
          else if (
            (function (e) {
              return "selectorText" in e;
            })(e) &&
            e.selectorText.includes(":")
          )
            return (
              (r = e.cssText),
              (n = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm),
              r.replace(n, "$1\\$2")
            );
          return t || e.cssText;
        }
        !(function (e) {
          (e[(e.Document = 0)] = "Document"),
            (e[(e.DocumentType = 1)] = "DocumentType"),
            (e[(e.Element = 2)] = "Element"),
            (e[(e.Text = 3)] = "Text"),
            (e[(e.CDATA = 4)] = "CDATA"),
            (e[(e.Comment = 5)] = "Comment");
        })(P || (P = {}));
        class Q {
          constructor() {
            (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
          }
          getId(e) {
            if (!e) return -1;
            var t,
              r,
              n = J([
                this,
                "access",
                (e) => e.getMeta,
                "call",
                (t) => t(e),
                "optionalAccess",
                (e) => e.id,
              ]);
            return (r = () => -1), null != (t = n) ? t : r();
          }
          getNode(e) {
            return this.idNodeMap.get(e) || null;
          }
          getIds() {
            return Array.from(this.idNodeMap.keys());
          }
          getMeta(e) {
            return this.nodeMetaMap.get(e) || null;
          }
          removeNodeFromMap(e) {
            var t = this.getId(e);
            this.idNodeMap.delete(t),
              e.childNodes &&
                e.childNodes.forEach((e) => this.removeNodeFromMap(e));
          }
          has(e) {
            return this.idNodeMap.has(e);
          }
          hasNode(e) {
            return this.nodeMetaMap.has(e);
          }
          add(e, t) {
            var r = t.id;
            this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, t);
          }
          replace(e, t) {
            var r = this.getNode(e);
            if (r) {
              var n = this.nodeMetaMap.get(r);
              n && this.nodeMetaMap.set(t, n);
            }
            this.idNodeMap.set(e, t);
          }
          reset() {
            (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
          }
        }
        function ee(e) {
          var t = e.maskInputOptions,
            r = e.tagName,
            n = e.type;
          return (
            "OPTION" === r && (r = "SELECT"),
            Boolean(
              t[r.toLowerCase()] ||
                (n && t[n]) ||
                "password" === n ||
                ("INPUT" === r && !n && t.text)
            )
          );
        }
        function te(e) {
          var t = e.isMasked,
            r = e.element,
            n = e.value,
            a = e.maskInputFn,
            s = n || "";
          return t ? (a && (s = a(s, r)), "*".repeat(s.length)) : s;
        }
        function re(e) {
          return e.toLowerCase();
        }
        function ne(e) {
          return e.toUpperCase();
        }
        var ae = "__rrweb_original__";
        function se(e) {
          var t = e.type;
          return e.hasAttribute("data-rr-is-password")
            ? "password"
            : t
            ? re(t)
            : null;
        }
        function ie(e, t, r) {
          return "INPUT" !== t || ("radio" !== r && "checkbox" !== r)
            ? e.value
            : e.getAttribute("value") || "";
        }
        var oe,
          le,
          ce = 1,
          ue = new RegExp("[^a-z0-9-_:]"),
          de = -2;
        function pe() {
          return ce++;
        }
        var he = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
          me = /^(?:[a-z+]+:)?\/\//i,
          fe = /^www\..*/i,
          ve = /^(data:)([^,]*),(.*)/i;
        function ye(e, t) {
          return (e || "").replace(he, (e, r, n, a, s, i) => {
            var o,
              l = n || s || i,
              c = r || a || "";
            if (!l) return e;
            if (me.test(l) || fe.test(l))
              return "url(".concat(c).concat(l).concat(c, ")");
            if (ve.test(l)) return "url(".concat(c).concat(l).concat(c, ")");
            if ("/" === l[0])
              return "url("
                .concat(c)
                .concat(
                  ((o = t),
                  (o.indexOf("//") > -1
                    ? o.split("/").slice(0, 3).join("/")
                    : o.split("/")[0]
                  ).split("?")[0] + l)
                )
                .concat(c, ")");
            var u = t.split("/"),
              d = l.split("/");
            u.pop();
            var p,
              h = N(d);
            try {
              for (h.s(); !(p = h.n()).done; ) {
                var m = p.value;
                "." !== m && (".." === m ? u.pop() : u.push(m));
              }
            } catch (f) {
              h.e(f);
            } finally {
              h.f();
            }
            return "url(".concat(c).concat(u.join("/")).concat(c, ")");
          });
        }
        var ge = /^[^ \t\n\r\u000c]+/,
          ke = /^[, \t\n\r\u000c]+/;
        function Se(e, t) {
          if (!t || "" === t.trim()) return t;
          var r = e.createElement("a");
          return (r.href = t), r.href;
        }
        function be(e) {
          return Boolean("svg" === e.tagName || e.ownerSVGElement);
        }
        function _e() {
          var e = document.createElement("a");
          return (e.href = ""), e.href;
        }
        function we(e, t, r, n, a, s) {
          return n
            ? "src" === r ||
              ("href" === r && ("use" !== t || "#" !== n[0])) ||
              ("xlink:href" === r && "#" !== n[0])
              ? Se(e, n)
              : "background" !== r ||
                ("table" !== t && "td" !== t && "th" !== t)
              ? "srcset" === r
                ? (function (e, t) {
                    if ("" === t.trim()) return t;
                    var r = 0;
                    function n(e) {
                      var n,
                        a = e.exec(t.substring(r));
                      return a ? ((n = a[0]), (r += n.length), n) : "";
                    }
                    for (var a = []; n(ke), !(r >= t.length); ) {
                      var s = n(ge);
                      if ("," === s.slice(-1))
                        (s = Se(e, s.substring(0, s.length - 1))), a.push(s);
                      else {
                        var i = "";
                        s = Se(e, s);
                        for (var o = !1; ; ) {
                          var l = t.charAt(r);
                          if ("" === l) {
                            a.push((s + i).trim());
                            break;
                          }
                          if (o) ")" === l && (o = !1);
                          else {
                            if ("," === l) {
                              (r += 1), a.push((s + i).trim());
                              break;
                            }
                            "(" === l && (o = !0);
                          }
                          (i += l), (r += 1);
                        }
                      }
                    }
                    return a.join(", ");
                  })(e, n)
                : "style" === r
                ? ye(n, _e())
                : "object" === t && "data" === r
                ? Se(e, n)
                : "function" == typeof s
                ? s(r, n, a)
                : n
              : Se(e, n)
            : n;
        }
        function xe(e, t, r) {
          return ("video" === e || "audio" === e) && "autoplay" === t;
        }
        function Ce(e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1 / 0,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0;
          return e
            ? e.nodeType !== e.ELEMENT_NODE || n > r
              ? -1
              : t(e)
              ? n
              : Ce(e.parentNode, t, r, n + 1)
            : -1;
        }
        function Te(e, t) {
          return (r) => {
            var n = r;
            if (null === n) return !1;
            try {
              if (e)
                if ("string" == typeof e) {
                  if (n.matches(".".concat(e))) return !0;
                } else if (
                  (function (e, t) {
                    for (var r = e.classList.length; r--; ) {
                      var n = e.classList[r];
                      if (t.test(n)) return !0;
                    }
                    return !1;
                  })(n, e)
                )
                  return !0;
              return !(!t || !n.matches(t));
            } catch (a) {
              return !1;
            }
          };
        }
        function Ie(e, t, r, n, a, s) {
          try {
            var i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
            if (null === i) return !1;
            if ("INPUT" === i.tagName) {
              var o = i.getAttribute("autocomplete");
              if (
                [
                  "current-password",
                  "new-password",
                  "cc-number",
                  "cc-exp",
                  "cc-exp-month",
                  "cc-exp-year",
                  "cc-csc",
                ].includes(o)
              )
                return !0;
            }
            var l = -1,
              c = -1;
            if (s) {
              if ((c = Ce(i, Te(n, a))) < 0) return !0;
              l = Ce(i, Te(t, r), c >= 0 ? c : 1 / 0);
            } else {
              if ((l = Ce(i, Te(t, r))) < 0) return !1;
              c = Ce(i, Te(n, a), l >= 0 ? l : 1 / 0);
            }
            return l >= 0 ? !(c >= 0) || l <= c : !(c >= 0) && !!s;
          } catch (u) {}
          return !!s;
        }
        function Ee(e, t) {
          var r = t.doc,
            n = t.mirror,
            a = t.blockClass,
            s = t.blockSelector,
            i = t.unblockSelector,
            o = t.maskAllText,
            l = t.maskAttributeFn,
            c = t.maskTextClass,
            u = t.unmaskTextClass,
            d = t.maskTextSelector,
            p = t.unmaskTextSelector,
            h = t.inlineStylesheet,
            m = t.maskInputOptions,
            f = void 0 === m ? {} : m,
            v = t.maskTextFn,
            y = t.maskInputFn,
            g = t.dataURLOptions,
            k = void 0 === g ? {} : g,
            S = t.inlineImages,
            b = t.recordCanvas,
            _ = t.keepIframeSrcFn,
            w = t.newlyAddedElement,
            x = void 0 !== w && w,
            C = (function (e, t) {
              if (!t.hasNode(e)) return;
              var r = t.getId(e);
              return 1 === r ? void 0 : r;
            })(r, n);
          switch (e.nodeType) {
            case e.DOCUMENT_NODE:
              return "CSS1Compat" !== e.compatMode
                ? { type: P.Document, childNodes: [], compatMode: e.compatMode }
                : { type: P.Document, childNodes: [] };
            case e.DOCUMENT_TYPE_NODE:
              return {
                type: P.DocumentType,
                name: e.name,
                publicId: e.publicId,
                systemId: e.systemId,
                rootId: C,
              };
            case e.ELEMENT_NODE:
              return (function (e, t) {
                for (
                  var r,
                    n = t.doc,
                    a = t.blockClass,
                    s = t.blockSelector,
                    i = t.unblockSelector,
                    o = t.inlineStylesheet,
                    l = t.maskInputOptions,
                    c = void 0 === l ? {} : l,
                    u = t.maskAttributeFn,
                    d = t.maskInputFn,
                    p = t.dataURLOptions,
                    h = void 0 === p ? {} : p,
                    m = t.inlineImages,
                    f = t.recordCanvas,
                    v = t.keepIframeSrcFn,
                    y = t.newlyAddedElement,
                    g = void 0 !== y && y,
                    k = t.rootId,
                    S = (t.maskAllText, t.maskTextClass),
                    b = t.unmaskTextClass,
                    _ = t.maskTextSelector,
                    w = t.unmaskTextSelector,
                    x = (function (e, t, r, n) {
                      try {
                        if (n && e.matches(n)) return !1;
                        if ("string" == typeof t) {
                          if (e.classList.contains(t)) return !0;
                        } else
                          for (var a = e.classList.length; a--; ) {
                            var s = e.classList[a];
                            if (t.test(s)) return !0;
                          }
                        if (r) return e.matches(r);
                      } catch (i) {}
                      return !1;
                    })(e, a, s, i),
                    C = (function (e) {
                      if (e instanceof HTMLFormElement) return "form";
                      var t = re(e.tagName);
                      return ue.test(t) ? "div" : t;
                    })(e),
                    T = {},
                    I = e.attributes.length,
                    E = 0;
                  E < I;
                  E++
                ) {
                  var R = e.attributes[E];
                  R.name &&
                    !xe(C, R.name, R.value) &&
                    (T[R.name] = we(n, C, re(R.name), R.value, e, u));
                }
                if ("link" === C && o) {
                  var M = Array.from(n.styleSheets).find(
                      (t) => t.href === e.href
                    ),
                    A = null;
                  M && (A = X(M)),
                    A &&
                      (delete T.rel,
                      delete T.href,
                      (T._cssText = ye(A, M.href)));
                }
                if (
                  "style" === C &&
                  e.sheet &&
                  !(e.innerText || e.textContent || "").trim().length
                ) {
                  var D = X(e.sheet);
                  D && (T._cssText = ye(D, _e()));
                }
                if (
                  "input" === C ||
                  "textarea" === C ||
                  "select" === C ||
                  "option" === C
                ) {
                  var O = e,
                    L = se(O),
                    N = ie(O, ne(C), L),
                    F = O.checked;
                  if ("submit" !== L && "button" !== L && N) {
                    var U = Ie(
                      O,
                      S,
                      _,
                      b,
                      w,
                      ee({ type: L, tagName: ne(C), maskInputOptions: c })
                    );
                    T.value = te({
                      isMasked: U,
                      element: O,
                      value: N,
                      maskInputFn: d,
                    });
                  }
                  F && (T.checked = F);
                }
                "option" === C &&
                  (e.selected && !c.select
                    ? (T.selected = !0)
                    : delete T.selected);
                if ("canvas" === C && f)
                  if ("2d" === e.__context)
                    (function (e) {
                      var t = e.getContext("2d");
                      if (!t) return !0;
                      for (var r = 0; r < e.width; r += 50)
                        for (var n = 0; n < e.height; n += 50) {
                          var a = t.getImageData,
                            s = ae in a ? a[ae] : a;
                          if (
                            new Uint32Array(
                              s.call(
                                t,
                                r,
                                n,
                                Math.min(50, e.width - r),
                                Math.min(50, e.height - n)
                              ).data.buffer
                            ).some((e) => 0 !== e)
                          )
                            return !1;
                        }
                      return !0;
                    })(e) || (T.rr_dataURL = e.toDataURL(h.type, h.quality));
                  else if (!("__context" in e)) {
                    var B = e.toDataURL(h.type, h.quality),
                      z = document.createElement("canvas");
                    (z.width = e.width),
                      (z.height = e.height),
                      B !== z.toDataURL(h.type, h.quality) &&
                        (T.rr_dataURL = B);
                  }
                if ("img" === C && m) {
                  oe ||
                    ((oe = n.createElement("canvas")),
                    (le = oe.getContext("2d")));
                  var H = e,
                    W = H.crossOrigin;
                  H.crossOrigin = "anonymous";
                  var j = () => {
                    H.removeEventListener("load", j);
                    try {
                      (oe.width = H.naturalWidth),
                        (oe.height = H.naturalHeight),
                        le.drawImage(H, 0, 0),
                        (T.rr_dataURL = oe.toDataURL(h.type, h.quality));
                    } catch (e) {
                      console.warn(
                        "Cannot inline img src="
                          .concat(H.currentSrc, "! Error: ")
                          .concat(e)
                      );
                    }
                    W ? (T.crossOrigin = W) : H.removeAttribute("crossorigin");
                  };
                  H.complete && 0 !== H.naturalWidth
                    ? j()
                    : H.addEventListener("load", j);
                }
                ("audio" !== C && "video" !== C) ||
                  ((T.rr_mediaState = e.paused ? "paused" : "played"),
                  (T.rr_mediaCurrentTime = e.currentTime));
                g ||
                  (e.scrollLeft && (T.rr_scrollLeft = e.scrollLeft),
                  e.scrollTop && (T.rr_scrollTop = e.scrollTop));
                if (x) {
                  var Z = e.getBoundingClientRect(),
                    q = Z.width,
                    V = Z.height;
                  T = {
                    class: T.class,
                    rr_width: "".concat(q, "px"),
                    rr_height: "".concat(V, "px"),
                  };
                }
                "iframe" !== C ||
                  v(T.src) ||
                  (e.contentDocument || (T.rr_src = T.src), delete T.src);
                try {
                  customElements.get(C) && (r = !0);
                } catch (K) {}
                return {
                  type: P.Element,
                  tagName: C,
                  attributes: T,
                  childNodes: [],
                  isSVG: be(e) || void 0,
                  needBlock: x,
                  rootId: k,
                  isCustom: r,
                };
              })(e, {
                doc: r,
                blockClass: a,
                blockSelector: s,
                unblockSelector: i,
                inlineStylesheet: h,
                maskAttributeFn: l,
                maskInputOptions: f,
                maskInputFn: y,
                dataURLOptions: k,
                inlineImages: S,
                recordCanvas: b,
                keepIframeSrcFn: _,
                newlyAddedElement: x,
                rootId: C,
                maskAllText: o,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: d,
                unmaskTextSelector: p,
              });
            case e.TEXT_NODE:
              return (function (e, t) {
                var r = t.maskAllText,
                  n = t.maskTextClass,
                  a = t.unmaskTextClass,
                  s = t.maskTextSelector,
                  i = t.unmaskTextSelector,
                  o = t.maskTextFn,
                  l = t.maskInputOptions,
                  c = t.maskInputFn,
                  u = t.rootId,
                  d = e.parentNode && e.parentNode.tagName,
                  p = e.textContent,
                  h = "STYLE" === d || void 0,
                  m = "SCRIPT" === d || void 0,
                  f = "TEXTAREA" === d || void 0;
                if (h && p) {
                  try {
                    e.nextSibling ||
                      e.previousSibling ||
                      (J([
                        e,
                        "access",
                        (e) => e.parentNode,
                        "access",
                        (e) => e.sheet,
                        "optionalAccess",
                        (e) => e.cssRules,
                      ]) &&
                        (p = X(e.parentNode.sheet)));
                  } catch (y) {
                    console.warn(
                      "Cannot get CSS styles from text's parentNode. Error: ".concat(
                        y
                      ),
                      e
                    );
                  }
                  p = ye(p, _e());
                }
                m && (p = "SCRIPT_PLACEHOLDER");
                var v = Ie(e, n, s, a, i, r);
                h ||
                  m ||
                  f ||
                  !p ||
                  !v ||
                  (p = o ? o(p) : p.replace(/[\S]/g, "*"));
                f &&
                  p &&
                  (l.textarea || v) &&
                  (p = c ? c(p, e.parentNode) : p.replace(/[\S]/g, "*"));
                if ("OPTION" === d && p) {
                  p = te({
                    isMasked: Ie(
                      e,
                      n,
                      s,
                      a,
                      i,
                      ee({ type: null, tagName: d, maskInputOptions: l })
                    ),
                    element: e,
                    value: p,
                    maskInputFn: c,
                  });
                }
                return {
                  type: P.Text,
                  textContent: p || "",
                  isStyle: h,
                  rootId: u,
                };
              })(e, {
                maskAllText: o,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: d,
                unmaskTextSelector: p,
                maskTextFn: v,
                maskInputOptions: f,
                maskInputFn: y,
                rootId: C,
              });
            case e.CDATA_SECTION_NODE:
              return { type: P.CDATA, textContent: "", rootId: C };
            case e.COMMENT_NODE:
              return {
                type: P.Comment,
                textContent: e.textContent || "",
                rootId: C,
              };
            default:
              return !1;
          }
        }
        function Re(e) {
          return null == e ? "" : e.toLowerCase();
        }
        function Me(e, t) {
          var r,
            n = t.doc,
            a = t.mirror,
            s = t.blockClass,
            i = t.blockSelector,
            o = t.unblockSelector,
            l = t.maskAllText,
            c = t.maskTextClass,
            u = t.unmaskTextClass,
            d = t.maskTextSelector,
            p = t.unmaskTextSelector,
            h = t.skipChild,
            m = void 0 !== h && h,
            f = t.inlineStylesheet,
            v = void 0 === f || f,
            y = t.maskInputOptions,
            g = void 0 === y ? {} : y,
            k = t.maskAttributeFn,
            S = t.maskTextFn,
            b = t.maskInputFn,
            _ = t.slimDOMOptions,
            w = t.dataURLOptions,
            x = void 0 === w ? {} : w,
            C = t.inlineImages,
            T = void 0 !== C && C,
            I = t.recordCanvas,
            E = void 0 !== I && I,
            R = t.onSerialize,
            M = t.onIframeLoad,
            A = t.iframeLoadTimeout,
            D = void 0 === A ? 5e3 : A,
            O = t.onStylesheetLoad,
            L = t.stylesheetLoadTimeout,
            N = void 0 === L ? 5e3 : L,
            F = t.keepIframeSrcFn,
            U = void 0 === F ? () => !1 : F,
            B = t.newlyAddedElement,
            z = void 0 !== B && B,
            H = t.preserveWhiteSpace,
            W = void 0 === H || H,
            j = Ee(e, {
              doc: n,
              mirror: a,
              blockClass: s,
              blockSelector: i,
              maskAllText: l,
              unblockSelector: o,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: d,
              unmaskTextSelector: p,
              inlineStylesheet: v,
              maskInputOptions: g,
              maskAttributeFn: k,
              maskTextFn: S,
              maskInputFn: b,
              dataURLOptions: x,
              inlineImages: T,
              recordCanvas: E,
              keepIframeSrcFn: U,
              newlyAddedElement: z,
            });
          if (!j) return console.warn(e, "not serialized"), null;
          r = a.hasNode(e)
            ? a.getId(e)
            : !(function (e, t) {
                if (t.comment && e.type === P.Comment) return !0;
                if (e.type === P.Element) {
                  if (
                    t.script &&
                    ("script" === e.tagName ||
                      ("link" === e.tagName &&
                        ("preload" === e.attributes.rel ||
                          "modulepreload" === e.attributes.rel) &&
                        "script" === e.attributes.as) ||
                      ("link" === e.tagName &&
                        "prefetch" === e.attributes.rel &&
                        "string" == typeof e.attributes.href &&
                        e.attributes.href.endsWith(".js")))
                  )
                    return !0;
                  if (
                    t.headFavicon &&
                    (("link" === e.tagName &&
                      "shortcut icon" === e.attributes.rel) ||
                      ("meta" === e.tagName &&
                        (Re(e.attributes.name).match(
                          /^msapplication-tile(image|color)$/
                        ) ||
                          "application-name" === Re(e.attributes.name) ||
                          "icon" === Re(e.attributes.rel) ||
                          "apple-touch-icon" === Re(e.attributes.rel) ||
                          "shortcut icon" === Re(e.attributes.rel))))
                  )
                    return !0;
                  if ("meta" === e.tagName) {
                    if (
                      t.headMetaDescKeywords &&
                      Re(e.attributes.name).match(/^description|keywords$/)
                    )
                      return !0;
                    if (
                      t.headMetaSocial &&
                      (Re(e.attributes.property).match(/^(og|twitter|fb):/) ||
                        Re(e.attributes.name).match(/^(og|twitter):/) ||
                        "pinterest" === Re(e.attributes.name))
                    )
                      return !0;
                    if (
                      t.headMetaRobots &&
                      ("robots" === Re(e.attributes.name) ||
                        "googlebot" === Re(e.attributes.name) ||
                        "bingbot" === Re(e.attributes.name))
                    )
                      return !0;
                    if (
                      t.headMetaHttpEquiv &&
                      void 0 !== e.attributes["http-equiv"]
                    )
                      return !0;
                    if (
                      t.headMetaAuthorship &&
                      ("author" === Re(e.attributes.name) ||
                        "generator" === Re(e.attributes.name) ||
                        "framework" === Re(e.attributes.name) ||
                        "publisher" === Re(e.attributes.name) ||
                        "progid" === Re(e.attributes.name) ||
                        Re(e.attributes.property).match(/^article:/) ||
                        Re(e.attributes.property).match(/^product:/))
                    )
                      return !0;
                    if (
                      t.headMetaVerification &&
                      ("google-site-verification" === Re(e.attributes.name) ||
                        "yandex-verification" === Re(e.attributes.name) ||
                        "csrf-token" === Re(e.attributes.name) ||
                        "p:domain_verify" === Re(e.attributes.name) ||
                        "verify-v1" === Re(e.attributes.name) ||
                        "verification" === Re(e.attributes.name) ||
                        "shopify-checkout-api-token" === Re(e.attributes.name))
                    )
                      return !0;
                  }
                }
                return !1;
              })(j, _) &&
              (W ||
                j.type !== P.Text ||
                j.isStyle ||
                j.textContent.replace(/^\s+|\s+$/gm, "").length)
            ? pe()
            : de;
          var Z = Object.assign(j, { id: r });
          if ((a.add(e, Z), r === de)) return null;
          R && R(e);
          var q = !m;
          if (Z.type === P.Element) {
            (q = q && !Z.needBlock), delete Z.needBlock;
            var V = e.shadowRoot;
            V && G(V) && (Z.isShadowHost = !0);
          }
          if ((Z.type === P.Document || Z.type === P.Element) && q) {
            _.headWhitespace &&
              Z.type === P.Element &&
              "head" === Z.tagName &&
              (W = !1);
            for (
              var K = {
                  doc: n,
                  mirror: a,
                  blockClass: s,
                  blockSelector: i,
                  maskAllText: l,
                  unblockSelector: o,
                  maskTextClass: c,
                  unmaskTextClass: u,
                  maskTextSelector: d,
                  unmaskTextSelector: p,
                  skipChild: m,
                  inlineStylesheet: v,
                  maskInputOptions: g,
                  maskAttributeFn: k,
                  maskTextFn: S,
                  maskInputFn: b,
                  slimDOMOptions: _,
                  dataURLOptions: x,
                  inlineImages: T,
                  recordCanvas: E,
                  preserveWhiteSpace: W,
                  onSerialize: R,
                  onIframeLoad: M,
                  iframeLoadTimeout: D,
                  onStylesheetLoad: O,
                  stylesheetLoadTimeout: N,
                  keepIframeSrcFn: U,
                },
                J = 0,
                X = Array.from(e.childNodes);
              J < X.length;
              J++
            ) {
              var $ = Me(X[J], K);
              $ && Z.childNodes.push($);
            }
            if (
              (function (e) {
                return e.nodeType === e.ELEMENT_NODE;
              })(e) &&
              e.shadowRoot
            )
              for (
                var Q = 0, ee = Array.from(e.shadowRoot.childNodes);
                Q < ee.length;
                Q++
              ) {
                var te = Me(ee[Q], K);
                te &&
                  (G(e.shadowRoot) && (te.isShadow = !0),
                  Z.childNodes.push(te));
              }
          }
          return (
            e.parentNode &&
              Y(e.parentNode) &&
              G(e.parentNode) &&
              (Z.isShadow = !0),
            Z.type === P.Element &&
              "iframe" === Z.tagName &&
              (function (e, t, r) {
                var n = e.contentWindow;
                if (n) {
                  var a,
                    s = !1;
                  try {
                    a = n.document.readyState;
                  } catch (l) {
                    return;
                  }
                  if ("complete" === a) {
                    var i = "about:blank";
                    if (n.location.href !== i || e.src === i || "" === e.src)
                      return setTimeout(t, 0), e.addEventListener("load", t);
                    e.addEventListener("load", t);
                  } else {
                    var o = setTimeout(() => {
                      s || (t(), (s = !0));
                    }, r);
                    e.addEventListener("load", () => {
                      clearTimeout(o), (s = !0), t();
                    });
                  }
                }
              })(
                e,
                () => {
                  var t = e.contentDocument;
                  if (t && M) {
                    var r = Me(t, {
                      doc: t,
                      mirror: a,
                      blockClass: s,
                      blockSelector: i,
                      unblockSelector: o,
                      maskAllText: l,
                      maskTextClass: c,
                      unmaskTextClass: u,
                      maskTextSelector: d,
                      unmaskTextSelector: p,
                      skipChild: !1,
                      inlineStylesheet: v,
                      maskInputOptions: g,
                      maskAttributeFn: k,
                      maskTextFn: S,
                      maskInputFn: b,
                      slimDOMOptions: _,
                      dataURLOptions: x,
                      inlineImages: T,
                      recordCanvas: E,
                      preserveWhiteSpace: W,
                      onSerialize: R,
                      onIframeLoad: M,
                      iframeLoadTimeout: D,
                      onStylesheetLoad: O,
                      stylesheetLoadTimeout: N,
                      keepIframeSrcFn: U,
                    });
                    r && M(e, r);
                  }
                },
                D
              ),
            Z.type === P.Element &&
              "link" === Z.tagName &&
              "stylesheet" === Z.attributes.rel &&
              (function (e, t, r) {
                var n,
                  a = !1;
                try {
                  n = e.sheet;
                } catch (i) {
                  return;
                }
                if (!n) {
                  var s = setTimeout(() => {
                    a || (t(), (a = !0));
                  }, r);
                  e.addEventListener("load", () => {
                    clearTimeout(s), (a = !0), t();
                  });
                }
              })(
                e,
                () => {
                  if (O) {
                    var t = Me(e, {
                      doc: n,
                      mirror: a,
                      blockClass: s,
                      blockSelector: i,
                      unblockSelector: o,
                      maskAllText: l,
                      maskTextClass: c,
                      unmaskTextClass: u,
                      maskTextSelector: d,
                      unmaskTextSelector: p,
                      skipChild: !1,
                      inlineStylesheet: v,
                      maskInputOptions: g,
                      maskAttributeFn: k,
                      maskTextFn: S,
                      maskInputFn: b,
                      slimDOMOptions: _,
                      dataURLOptions: x,
                      inlineImages: T,
                      recordCanvas: E,
                      preserveWhiteSpace: W,
                      onSerialize: R,
                      onIframeLoad: M,
                      iframeLoadTimeout: D,
                      onStylesheetLoad: O,
                      stylesheetLoadTimeout: N,
                      keepIframeSrcFn: U,
                    });
                    t && O(e, t);
                  }
                },
                N
              ),
            Z
          );
        }
        function Ae(e) {
          for (var t = void 0, r = e[0], n = 1; n < e.length; ) {
            var a = e[n],
              s = e[n + 1];
            if (
              ((n += 2),
              ("optionalAccess" === a || "optionalCall" === a) && null == r)
            )
              return;
            "access" === a || "optionalAccess" === a
              ? ((t = r), (r = s(r)))
              : ("call" !== a && "optionalCall" !== a) ||
                ((r = s(function () {
                  for (
                    var e = arguments.length, n = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    n[a] = arguments[a];
                  return r.call(t, ...n);
                })),
                (t = void 0));
          }
          return r;
        }
        function De(e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : document,
            n = { capture: !0, passive: !0 };
          return (
            r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n)
          );
        }
        var Oe =
            "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
          Le = {
            map: {},
            getId() {
              return console.error(Oe), -1;
            },
            getNode() {
              return console.error(Oe), null;
            },
            removeNodeFromMap() {
              console.error(Oe);
            },
            has() {
              return console.error(Oe), !1;
            },
            reset() {
              console.error(Oe);
            },
          };
        function Ne(e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = null,
            a = 0;
          return function () {
            for (var s = arguments.length, i = new Array(s), o = 0; o < s; o++)
              i[o] = arguments[o];
            var l = Date.now();
            a || !1 !== r.leading || (a = l);
            var c = t - (l - a),
              u = this;
            c <= 0 || c > t
              ? (n && (clearTimeout(n), (n = null)), (a = l), e.apply(u, i))
              : n ||
                !1 === r.trailing ||
                (n = setTimeout(() => {
                  (a = !1 === r.leading ? 0 : Date.now()),
                    (n = null),
                    e.apply(u, i);
                }, c));
          };
        }
        function Fe(e, t, r, n) {
          var a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : window,
            s = a.Object.getOwnPropertyDescriptor(e, t);
          return (
            a.Object.defineProperty(
              e,
              t,
              n
                ? r
                : {
                    set(e) {
                      setTimeout(() => {
                        r.set.call(this, e);
                      }, 0),
                        s && s.set && s.set.call(this, e);
                    },
                  }
            ),
            () => Fe(e, t, s || {}, !0)
          );
        }
        function Pe(e, t, r) {
          try {
            if (!(t in e)) return () => {};
            var n = e[t],
              a = r(n);
            return (
              "function" == typeof a &&
                ((a.prototype = a.prototype || {}),
                Object.defineProperties(a, {
                  __rrweb_original__: { enumerable: !1, value: n },
                })),
              (e[t] = a),
              () => {
                e[t] = n;
              }
            );
          } catch (s) {
            return () => {};
          }
        }
        "undefined" != typeof window &&
          window.Proxy &&
          window.Reflect &&
          (Le = new Proxy(Le, {
            get(e, t, r) {
              return "map" === t && console.error(Oe), Reflect.get(e, t, r);
            },
          }));
        var Ue,
          Be = Date.now;
        function ze(e) {
          var t = e.document;
          return {
            left: t.scrollingElement
              ? t.scrollingElement.scrollLeft
              : void 0 !== e.pageXOffset
              ? e.pageXOffset
              : Ae([
                  t,
                  "optionalAccess",
                  (e) => e.documentElement,
                  "access",
                  (e) => e.scrollLeft,
                ]) ||
                Ae([
                  t,
                  "optionalAccess",
                  (e) => e.body,
                  "optionalAccess",
                  (e) => e.parentElement,
                  "optionalAccess",
                  (e) => e.scrollLeft,
                ]) ||
                Ae([
                  t,
                  "optionalAccess",
                  (e) => e.body,
                  "optionalAccess",
                  (e) => e.scrollLeft,
                ]) ||
                0,
            top: t.scrollingElement
              ? t.scrollingElement.scrollTop
              : void 0 !== e.pageYOffset
              ? e.pageYOffset
              : Ae([
                  t,
                  "optionalAccess",
                  (e) => e.documentElement,
                  "access",
                  (e) => e.scrollTop,
                ]) ||
                Ae([
                  t,
                  "optionalAccess",
                  (e) => e.body,
                  "optionalAccess",
                  (e) => e.parentElement,
                  "optionalAccess",
                  (e) => e.scrollTop,
                ]) ||
                Ae([
                  t,
                  "optionalAccess",
                  (e) => e.body,
                  "optionalAccess",
                  (e) => e.scrollTop,
                ]) ||
                0,
          };
        }
        function He() {
          return (
            window.innerHeight ||
            (document.documentElement &&
              document.documentElement.clientHeight) ||
            (document.body && document.body.clientHeight)
          );
        }
        function We() {
          return (
            window.innerWidth ||
            (document.documentElement &&
              document.documentElement.clientWidth) ||
            (document.body && document.body.clientWidth)
          );
        }
        function je(e, t, r, n, a) {
          if (!e) return !1;
          var s = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
          if (!s) return !1;
          var i = Te(t, r);
          if (!a) {
            var o = n && s.matches(n);
            return i(s) && !o;
          }
          var l = Ce(s, i),
            c = -1;
          return (
            !(l < 0) &&
            (n && (c = Ce(s, Te(null, n))), (l > -1 && c < 0) || l < c)
          );
        }
        function Ze(e, t) {
          return t.getId(e) === de;
        }
        function qe(e, t) {
          if (Y(e)) return !1;
          var r = t.getId(e);
          return (
            !t.has(r) ||
            ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) &&
              (!e.parentNode || qe(e.parentNode, t)))
          );
        }
        function Ve(e) {
          return Boolean(e.changedTouches);
        }
        function Ke(e, t) {
          return Boolean("IFRAME" === e.nodeName && t.getMeta(e));
        }
        function Je(e, t) {
          return Boolean(
            "LINK" === e.nodeName &&
              e.nodeType === e.ELEMENT_NODE &&
              e.getAttribute &&
              "stylesheet" === e.getAttribute("rel") &&
              t.getMeta(e)
          );
        }
        function Ye(e) {
          return Boolean(Ae([e, "optionalAccess", (e) => e.shadowRoot]));
        }
        /[1-9][0-9]{12}/.test(Date.now().toString()) ||
          (Be = () => new Date().getTime());
        class Ge {
          constructor() {
            (this.id = 1),
              (this.styleIDMap = new WeakMap()),
              (this.idStyleMap = new Map());
          }
          getId(e) {
            return (0, l.h)(this.styleIDMap.get(e), () => -1);
          }
          has(e) {
            return this.styleIDMap.has(e);
          }
          add(e, t) {
            return this.has(e)
              ? this.getId(e)
              : ((r = void 0 === t ? this.id++ : t),
                this.styleIDMap.set(e, r),
                this.idStyleMap.set(r, e),
                r);
            var r;
          }
          getStyle(e) {
            return this.idStyleMap.get(e) || null;
          }
          reset() {
            (this.styleIDMap = new WeakMap()),
              (this.idStyleMap = new Map()),
              (this.id = 1);
          }
          generateId() {
            return this.id++;
          }
        }
        function Xe(e) {
          var t = null;
          return (
            Ae([
              e,
              "access",
              (e) => e.getRootNode,
              "optionalCall",
              (e) => e(),
              "optionalAccess",
              (e) => e.nodeType,
            ]) === Node.DOCUMENT_FRAGMENT_NODE &&
              e.getRootNode().host &&
              (t = e.getRootNode().host),
            t
          );
        }
        function $e(e) {
          var t = e.ownerDocument;
          if (!t) return !1;
          var r = (function (e) {
            for (var t, r = e; (t = Xe(r)); ) r = t;
            return r;
          })(e);
          return t.contains(r);
        }
        function Qe(e) {
          var t = e.ownerDocument;
          return !!t && (t.contains(e) || $e(e));
        }
        function et() {
          return (function () {
            if (Ue) return Ue;
            var e = window.document,
              t = window.requestAnimationFrame;
            if (e && "function" == typeof e.createElement)
              try {
                var r = e.createElement("iframe");
                (r.hidden = !0), e.head.appendChild(r);
                var n = r.contentWindow;
                n && n.requestAnimationFrame && (t = n.requestAnimationFrame),
                  e.head.removeChild(r);
              } catch (a) {}
            return (Ue = t.bind(window));
          })()(...arguments);
        }
        var tt = ((e) => (
            (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
            (e[(e.Load = 1)] = "Load"),
            (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
            (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
            (e[(e.Meta = 4)] = "Meta"),
            (e[(e.Custom = 5)] = "Custom"),
            (e[(e.Plugin = 6)] = "Plugin"),
            e
          ))(tt || {}),
          rt = ((e) => (
            (e[(e.Mutation = 0)] = "Mutation"),
            (e[(e.MouseMove = 1)] = "MouseMove"),
            (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
            (e[(e.Scroll = 3)] = "Scroll"),
            (e[(e.ViewportResize = 4)] = "ViewportResize"),
            (e[(e.Input = 5)] = "Input"),
            (e[(e.TouchMove = 6)] = "TouchMove"),
            (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
            (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
            (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
            (e[(e.Font = 10)] = "Font"),
            (e[(e.Log = 11)] = "Log"),
            (e[(e.Drag = 12)] = "Drag"),
            (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
            (e[(e.Selection = 14)] = "Selection"),
            (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
            (e[(e.CustomElement = 16)] = "CustomElement"),
            e
          ))(rt || {}),
          nt = ((e) => (
            (e[(e.MouseUp = 0)] = "MouseUp"),
            (e[(e.MouseDown = 1)] = "MouseDown"),
            (e[(e.Click = 2)] = "Click"),
            (e[(e.ContextMenu = 3)] = "ContextMenu"),
            (e[(e.DblClick = 4)] = "DblClick"),
            (e[(e.Focus = 5)] = "Focus"),
            (e[(e.Blur = 6)] = "Blur"),
            (e[(e.TouchStart = 7)] = "TouchStart"),
            (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
            (e[(e.TouchEnd = 9)] = "TouchEnd"),
            (e[(e.TouchCancel = 10)] = "TouchCancel"),
            e
          ))(nt || {}),
          at = ((e) => (
            (e[(e.Mouse = 0)] = "Mouse"),
            (e[(e.Pen = 1)] = "Pen"),
            (e[(e.Touch = 2)] = "Touch"),
            e
          ))(at || {});
        function st(e) {
          for (var t = void 0, r = e[0], n = 1; n < e.length; ) {
            var a = e[n],
              s = e[n + 1];
            if (
              ((n += 2),
              ("optionalAccess" === a || "optionalCall" === a) && null == r)
            )
              return;
            "access" === a || "optionalAccess" === a
              ? ((t = r), (r = s(r)))
              : ("call" !== a && "optionalCall" !== a) ||
                ((r = s(function () {
                  for (
                    var e = arguments.length, n = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    n[a] = arguments[a];
                  return r.call(t, ...n);
                })),
                (t = void 0));
          }
          return r;
        }
        function it(e) {
          return "__ln" in e;
        }
        class ot {
          constructor() {
            (this.length = 0), (this.head = null), (this.tail = null);
          }
          get(e) {
            if (e >= this.length)
              throw new Error("Position outside of list range");
            for (var t = this.head, r = 0; r < e; r++)
              t = st([t, "optionalAccess", (e) => e.next]) || null;
            return t;
          }
          addNode(e) {
            var t = { value: e, previous: null, next: null };
            if (((e.__ln = t), e.previousSibling && it(e.previousSibling))) {
              var r = e.previousSibling.__ln.next;
              (t.next = r),
                (t.previous = e.previousSibling.__ln),
                (e.previousSibling.__ln.next = t),
                r && (r.previous = t);
            } else if (
              e.nextSibling &&
              it(e.nextSibling) &&
              e.nextSibling.__ln.previous
            ) {
              var n = e.nextSibling.__ln.previous;
              (t.previous = n),
                (t.next = e.nextSibling.__ln),
                (e.nextSibling.__ln.previous = t),
                n && (n.next = t);
            } else
              this.head && (this.head.previous = t),
                (t.next = this.head),
                (this.head = t);
            null === t.next && (this.tail = t), this.length++;
          }
          removeNode(e) {
            var t = e.__ln;
            this.head &&
              (t.previous
                ? ((t.previous.next = t.next),
                  t.next
                    ? (t.next.previous = t.previous)
                    : (this.tail = t.previous))
                : ((this.head = t.next),
                  this.head ? (this.head.previous = null) : (this.tail = null)),
              e.__ln && delete e.__ln,
              this.length--);
          }
        }
        var lt,
          ct = (e, t) => "".concat(e, "@").concat(t);
        class ut {
          constructor() {
            (this.frozen = !1),
              (this.locked = !1),
              (this.texts = []),
              (this.attributes = []),
              (this.removes = []),
              (this.mapRemoves = []),
              (this.movedMap = {}),
              (this.addedSet = new Set()),
              (this.movedSet = new Set()),
              (this.droppedSet = new Set()),
              (this.processMutations = (e) => {
                e.forEach(this.processMutation), this.emit();
              }),
              (this.emit = () => {
                if (!this.frozen && !this.locked) {
                  for (
                    var e = [],
                      t = new Set(),
                      r = new ot(),
                      n = (e) => {
                        for (var t = e, r = de; r === de; )
                          r = (t = t && t.nextSibling) && this.mirror.getId(t);
                        return r;
                      },
                      a = (a) => {
                        if (a.parentNode && Qe(a)) {
                          var s = Y(a.parentNode)
                              ? this.mirror.getId(Xe(a))
                              : this.mirror.getId(a.parentNode),
                            i = n(a);
                          if (-1 === s || -1 === i) return r.addNode(a);
                          var o = Me(a, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: (e) => {
                              Ke(e, this.mirror) &&
                                this.iframeManager.addIframe(e),
                                Je(e, this.mirror) &&
                                  this.stylesheetManager.trackLinkElement(e),
                                Ye(a) &&
                                  this.shadowDomManager.addShadowRoot(
                                    a.shadowRoot,
                                    this.doc
                                  );
                            },
                            onIframeLoad: (e, t) => {
                              this.iframeManager.attachIframe(e, t),
                                this.shadowDomManager.observeAttachShadow(e);
                            },
                            onStylesheetLoad: (e, t) => {
                              this.stylesheetManager.attachLinkElement(e, t);
                            },
                          });
                          o &&
                            (e.push({ parentId: s, nextId: i, node: o }),
                            t.add(o.id));
                        }
                      };
                    this.mapRemoves.length;

                  )
                    this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                  var s,
                    i = N(this.movedSet);
                  try {
                    for (i.s(); !(s = i.n()).done; ) {
                      var o = s.value;
                      (pt(this.removes, o, this.mirror) &&
                        !this.movedSet.has(o.parentNode)) ||
                        a(o);
                    }
                  } catch (b) {
                    i.e(b);
                  } finally {
                    i.f();
                  }
                  var l,
                    c = N(this.addedSet);
                  try {
                    for (c.s(); !(l = c.n()).done; ) {
                      var u = l.value;
                      mt(this.droppedSet, u) || pt(this.removes, u, this.mirror)
                        ? mt(this.movedSet, u)
                          ? a(u)
                          : this.droppedSet.add(u)
                        : a(u);
                    }
                  } catch (b) {
                    c.e(b);
                  } finally {
                    c.f();
                  }
                  for (var d = null; r.length; ) {
                    var p = null;
                    if (d) {
                      var h = this.mirror.getId(d.value.parentNode),
                        m = n(d.value);
                      -1 !== h && -1 !== m && (p = d);
                    }
                    if (!p)
                      for (var f = r.tail; f; ) {
                        var v = f;
                        if (((f = f.previous), v)) {
                          var y = this.mirror.getId(v.value.parentNode);
                          if (-1 === n(v.value)) continue;
                          if (-1 !== y) {
                            p = v;
                            break;
                          }
                          var g = v.value;
                          if (
                            g.parentNode &&
                            g.parentNode.nodeType ===
                              Node.DOCUMENT_FRAGMENT_NODE
                          ) {
                            var k = g.parentNode.host;
                            if (-1 !== this.mirror.getId(k)) {
                              p = v;
                              break;
                            }
                          }
                        }
                      }
                    if (!p) {
                      for (; r.head; ) r.removeNode(r.head.value);
                      break;
                    }
                    (d = p.previous), r.removeNode(p.value), a(p.value);
                  }
                  var S = {
                    texts: this.texts
                      .map((e) => ({
                        id: this.mirror.getId(e.node),
                        value: e.value,
                      }))
                      .filter((e) => !t.has(e.id))
                      .filter((e) => this.mirror.has(e.id)),
                    attributes: this.attributes
                      .map((e) => {
                        var t = e.attributes;
                        if ("string" == typeof t.style) {
                          var r = JSON.stringify(e.styleDiff),
                            n = JSON.stringify(e._unchangedStyles);
                          r.length < t.style.length &&
                            (r + n).split("var(").length ===
                              t.style.split("var(").length &&
                            (t.style = e.styleDiff);
                        }
                        return { id: this.mirror.getId(e.node), attributes: t };
                      })
                      .filter((e) => !t.has(e.id))
                      .filter((e) => this.mirror.has(e.id)),
                    removes: this.removes,
                    adds: e,
                  };
                  (S.texts.length ||
                    S.attributes.length ||
                    S.removes.length ||
                    S.adds.length) &&
                    ((this.texts = []),
                    (this.attributes = []),
                    (this.removes = []),
                    (this.addedSet = new Set()),
                    (this.movedSet = new Set()),
                    (this.droppedSet = new Set()),
                    (this.movedMap = {}),
                    this.mutationCb(S));
                }
              }),
              (this.processMutation = (e) => {
                if (!Ze(e.target, this.mirror)) {
                  var t;
                  try {
                    t = document.implementation.createHTMLDocument();
                  } catch (k) {
                    t = this.doc;
                  }
                  switch (e.type) {
                    case "characterData":
                      var r = e.target.textContent;
                      je(
                        e.target,
                        this.blockClass,
                        this.blockSelector,
                        this.unblockSelector,
                        !1
                      ) ||
                        r === e.oldValue ||
                        this.texts.push({
                          value:
                            Ie(
                              e.target,
                              this.maskTextClass,
                              this.maskTextSelector,
                              this.unmaskTextClass,
                              this.unmaskTextSelector,
                              this.maskAllText
                            ) && r
                              ? this.maskTextFn
                                ? this.maskTextFn(r)
                                : r.replace(/[\S]/g, "*")
                              : r,
                          node: e.target,
                        });
                      break;
                    case "attributes":
                      var n = e.target,
                        a = e.attributeName,
                        s = e.target.getAttribute(a);
                      if ("value" === a) {
                        var i = se(n),
                          o = n.tagName;
                        s = ie(n, o, i);
                        var l = ee({
                          maskInputOptions: this.maskInputOptions,
                          tagName: o,
                          type: i,
                        });
                        s = te({
                          isMasked: Ie(
                            e.target,
                            this.maskTextClass,
                            this.maskTextSelector,
                            this.unmaskTextClass,
                            this.unmaskTextSelector,
                            l
                          ),
                          element: n,
                          value: s,
                          maskInputFn: this.maskInputFn,
                        });
                      }
                      if (
                        je(
                          e.target,
                          this.blockClass,
                          this.blockSelector,
                          this.unblockSelector,
                          !1
                        ) ||
                        s === e.oldValue
                      )
                        return;
                      var c = this.attributes.find((t) => t.node === e.target);
                      if (
                        "IFRAME" === n.tagName &&
                        "src" === a &&
                        !this.keepIframeSrcFn(s)
                      ) {
                        if (n.contentDocument) return;
                        a = "rr_src";
                      }
                      if (
                        (c ||
                          ((c = {
                            node: e.target,
                            attributes: {},
                            styleDiff: {},
                            _unchangedStyles: {},
                          }),
                          this.attributes.push(c)),
                        "type" === a &&
                          "INPUT" === n.tagName &&
                          "password" === (e.oldValue || "").toLowerCase() &&
                          n.setAttribute("data-rr-is-password", "true"),
                        !xe(n.tagName, a) &&
                          ((c.attributes[a] = we(
                            this.doc,
                            re(n.tagName),
                            re(a),
                            s,
                            n,
                            this.maskAttributeFn
                          )),
                          "style" === a))
                      ) {
                        var u = t.createElement("span");
                        e.oldValue && u.setAttribute("style", e.oldValue);
                        for (
                          var d = 0, p = Array.from(n.style);
                          d < p.length;
                          d++
                        ) {
                          var h = p[d],
                            m = n.style.getPropertyValue(h),
                            f = n.style.getPropertyPriority(h);
                          m !== u.style.getPropertyValue(h) ||
                          f !== u.style.getPropertyPriority(h)
                            ? (c.styleDiff[h] = "" === f ? m : [m, f])
                            : (c._unchangedStyles[h] = [m, f]);
                        }
                        for (
                          var v = 0, y = Array.from(u.style);
                          v < y.length;
                          v++
                        ) {
                          var g = y[v];
                          "" === n.style.getPropertyValue(g) &&
                            (c.styleDiff[g] = !1);
                        }
                      }
                      break;
                    case "childList":
                      if (
                        je(
                          e.target,
                          this.blockClass,
                          this.blockSelector,
                          this.unblockSelector,
                          !0
                        )
                      )
                        return;
                      e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                        e.removedNodes.forEach((t) => {
                          var r = this.mirror.getId(t),
                            n = Y(e.target)
                              ? this.mirror.getId(e.target.host)
                              : this.mirror.getId(e.target);
                          je(
                            e.target,
                            this.blockClass,
                            this.blockSelector,
                            this.unblockSelector,
                            !1
                          ) ||
                            Ze(t, this.mirror) ||
                            !(function (e, t) {
                              return -1 !== t.getId(e);
                            })(t, this.mirror) ||
                            (this.addedSet.has(t)
                              ? (dt(this.addedSet, t), this.droppedSet.add(t))
                              : (this.addedSet.has(e.target) && -1 === r) ||
                                qe(e.target, this.mirror) ||
                                (this.movedSet.has(t) && this.movedMap[ct(r, n)]
                                  ? dt(this.movedSet, t)
                                  : this.removes.push({
                                      parentId: n,
                                      id: r,
                                      isShadow:
                                        !(!Y(e.target) || !G(e.target)) ||
                                        void 0,
                                    })),
                            this.mapRemoves.push(t));
                        });
                  }
                }
              }),
              (this.genAdds = (e, t) => {
                if (
                  !this.processedNodeManager.inOtherBuffer(e, this) &&
                  !this.addedSet.has(e) &&
                  !this.movedSet.has(e)
                ) {
                  if (this.mirror.hasNode(e)) {
                    if (Ze(e, this.mirror)) return;
                    this.movedSet.add(e);
                    var r = null;
                    t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)),
                      r &&
                        -1 !== r &&
                        (this.movedMap[ct(this.mirror.getId(e), r)] = !0);
                  } else this.addedSet.add(e), this.droppedSet.delete(e);
                  je(
                    e,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1
                  ) ||
                    (e.childNodes.forEach((e) => this.genAdds(e)),
                    Ye(e) &&
                      e.shadowRoot.childNodes.forEach((t) => {
                        this.processedNodeManager.add(t, this),
                          this.genAdds(t, e);
                      }));
                }
              });
          }
          init(e) {
            [
              "mutationCb",
              "blockClass",
              "blockSelector",
              "unblockSelector",
              "maskAllText",
              "maskTextClass",
              "unmaskTextClass",
              "maskTextSelector",
              "unmaskTextSelector",
              "inlineStylesheet",
              "maskInputOptions",
              "maskAttributeFn",
              "maskTextFn",
              "maskInputFn",
              "keepIframeSrcFn",
              "recordCanvas",
              "inlineImages",
              "slimDOMOptions",
              "dataURLOptions",
              "doc",
              "mirror",
              "iframeManager",
              "stylesheetManager",
              "shadowDomManager",
              "canvasManager",
              "processedNodeManager",
            ].forEach((t) => {
              this[t] = e[t];
            });
          }
          freeze() {
            (this.frozen = !0), this.canvasManager.freeze();
          }
          unfreeze() {
            (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
          }
          isFrozen() {
            return this.frozen;
          }
          lock() {
            (this.locked = !0), this.canvasManager.lock();
          }
          unlock() {
            (this.locked = !1), this.canvasManager.unlock(), this.emit();
          }
          reset() {
            this.shadowDomManager.reset(), this.canvasManager.reset();
          }
        }
        function dt(e, t) {
          e.delete(t), t.childNodes.forEach((t) => dt(e, t));
        }
        function pt(e, t, r) {
          return 0 !== e.length && ht(e, t, r);
        }
        function ht(e, t, r) {
          var n = t.parentNode;
          if (!n) return !1;
          var a = r.getId(n);
          return !!e.some((e) => e.id === a) || ht(e, n, r);
        }
        function mt(e, t) {
          return 0 !== e.size && ft(e, t);
        }
        function ft(e, t) {
          var r = t.parentNode;
          return !!r && (!!e.has(r) || ft(e, r));
        }
        function vt(e) {
          lt = e;
        }
        function yt() {
          lt = void 0;
        }
        var gt = (e) => {
          if (!lt) return e;
          return function () {
            try {
              return e(...arguments);
            } catch (t) {
              if (lt && !0 === lt(t)) return () => {};
              throw t;
            }
          };
        };
        function kt(e) {
          for (var t = void 0, r = e[0], n = 1; n < e.length; ) {
            var a = e[n],
              s = e[n + 1];
            if (
              ((n += 2),
              ("optionalAccess" === a || "optionalCall" === a) && null == r)
            )
              return;
            "access" === a || "optionalAccess" === a
              ? ((t = r), (r = s(r)))
              : ("call" !== a && "optionalCall" !== a) ||
                ((r = s(function () {
                  for (
                    var e = arguments.length, n = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    n[a] = arguments[a];
                  return r.call(t, ...n);
                })),
                (t = void 0));
          }
          return r;
        }
        var St = [];
        function bt(e) {
          try {
            if ("composedPath" in e) {
              var t = e.composedPath();
              if (t.length) return t[0];
            } else if ("path" in e && e.path.length) return e.path[0];
          } catch (r) {}
          return e && e.target;
        }
        function _t(e, t) {
          var r = new ut();
          St.push(r), r.init(e);
          var n = window.MutationObserver || window.__rrMutationObserver,
            a = kt([
              window,
              "optionalAccess",
              (e) => e.Zone,
              "optionalAccess",
              (e) => e.__symbol__,
              "optionalCall",
              (e) => e("MutationObserver"),
            ]);
          a && window[a] && (n = window[a]);
          var s = new n(
            gt((t) => {
              (e.onMutation && !1 === e.onMutation(t)) ||
                r.processMutations.bind(r)(t);
            })
          );
          return (
            s.observe(t, {
              attributes: !0,
              attributeOldValue: !0,
              characterData: !0,
              characterDataOldValue: !0,
              childList: !0,
              subtree: !0,
            }),
            s
          );
        }
        function wt(e) {
          var t = e.mouseInteractionCb,
            r = e.doc,
            n = e.mirror,
            a = e.blockClass,
            s = e.blockSelector,
            i = e.unblockSelector,
            o = e.sampling;
          if (!1 === o.mouseInteraction) return () => {};
          var l =
              !0 === o.mouseInteraction || void 0 === o.mouseInteraction
                ? {}
                : o.mouseInteraction,
            c = [],
            u = null;
          return (
            Object.keys(nt)
              .filter(
                (e) =>
                  Number.isNaN(Number(e)) &&
                  !e.endsWith("_Departed") &&
                  !1 !== l[e]
              )
              .forEach((e) => {
                var o = re(e),
                  l = ((e) => (r) => {
                    var o = bt(r);
                    if (!je(o, a, s, i, !0)) {
                      var l = null,
                        c = e;
                      if ("pointerType" in r) {
                        switch (r.pointerType) {
                          case "mouse":
                            l = at.Mouse;
                            break;
                          case "touch":
                            l = at.Touch;
                            break;
                          case "pen":
                            l = at.Pen;
                        }
                        l === at.Touch
                          ? nt[e] === nt.MouseDown
                            ? (c = "TouchStart")
                            : nt[e] === nt.MouseUp && (c = "TouchEnd")
                          : at.Pen;
                      } else Ve(r) && (l = at.Touch);
                      null !== l
                        ? ((u = l),
                          ((c.startsWith("Touch") && l === at.Touch) ||
                            (c.startsWith("Mouse") && l === at.Mouse)) &&
                            (l = null))
                        : nt[e] === nt.Click && ((l = u), (u = null));
                      var d = Ve(r) ? r.changedTouches[0] : r;
                      if (d) {
                        var p = n.getId(o),
                          h = d.clientX,
                          m = d.clientY;
                        gt(t)(
                          L(
                            { type: nt[c], id: p, x: h, y: m },
                            null !== l && { pointerType: l }
                          )
                        );
                      }
                    }
                  })(e);
                if (window.PointerEvent)
                  switch (nt[e]) {
                    case nt.MouseDown:
                    case nt.MouseUp:
                      o = o.replace("mouse", "pointer");
                      break;
                    case nt.TouchStart:
                    case nt.TouchEnd:
                      return;
                  }
                c.push(De(o, l, r));
              }),
            gt(() => {
              c.forEach((e) => e());
            })
          );
        }
        function xt(e) {
          var t = e.scrollCb,
            r = e.doc,
            n = e.mirror,
            a = e.blockClass,
            s = e.blockSelector,
            i = e.unblockSelector,
            o = e.sampling;
          return De(
            "scroll",
            gt(
              Ne(
                gt((e) => {
                  var o = bt(e);
                  if (o && !je(o, a, s, i, !0)) {
                    var l = n.getId(o);
                    if (o === r && r.defaultView) {
                      var c = ze(r.defaultView);
                      t({ id: l, x: c.left, y: c.top });
                    } else t({ id: l, x: o.scrollLeft, y: o.scrollTop });
                  }
                }),
                o.scroll || 100
              )
            ),
            r
          );
        }
        var Ct,
          Tt = ["INPUT", "TEXTAREA", "SELECT"],
          It = new WeakMap();
        function Et(e) {
          var t = e.inputCb,
            r = e.doc,
            n = e.mirror,
            a = e.blockClass,
            s = e.blockSelector,
            i = e.unblockSelector,
            o = e.ignoreClass,
            l = e.ignoreSelector,
            c = e.maskInputOptions,
            u = e.maskInputFn,
            d = e.sampling,
            p = e.userTriggeredOnInput,
            h = e.maskTextClass,
            m = e.unmaskTextClass,
            f = e.maskTextSelector,
            v = e.unmaskTextSelector;
          function y(e) {
            var t = bt(e),
              n = e.isTrusted,
              d = t && ne(t.tagName);
            if (
              ("OPTION" === d && (t = t.parentElement),
              t && d && !(Tt.indexOf(d) < 0) && !je(t, a, s, i, !0))
            ) {
              var y = t;
              if (!(y.classList.contains(o) || (l && y.matches(l)))) {
                var k = se(t),
                  S = ie(y, d, k),
                  b = !1,
                  _ = ee({ maskInputOptions: c, tagName: d, type: k }),
                  w = Ie(t, h, f, m, v, _);
                ("radio" !== k && "checkbox" !== k) || (b = t.checked),
                  (S = te({
                    isMasked: w,
                    element: t,
                    value: S,
                    maskInputFn: u,
                  })),
                  g(
                    t,
                    p
                      ? { text: S, isChecked: b, userTriggered: n }
                      : { text: S, isChecked: b }
                  );
                var x = t.name;
                "radio" === k &&
                  x &&
                  b &&
                  r
                    .querySelectorAll(
                      'input[type="radio"][name="'.concat(x, '"]')
                    )
                    .forEach((e) => {
                      if (e !== t) {
                        var r = te({
                          isMasked: w,
                          element: e,
                          value: ie(e, d, k),
                          maskInputFn: u,
                        });
                        g(
                          e,
                          p
                            ? { text: r, isChecked: !b, userTriggered: !1 }
                            : { text: r, isChecked: !b }
                        );
                      }
                    });
              }
            }
          }
          function g(e, r) {
            var a = It.get(e);
            if (!a || a.text !== r.text || a.isChecked !== r.isChecked) {
              It.set(e, r);
              var s = n.getId(e);
              gt(t)(L(L({}, r), {}, { id: s }));
            }
          }
          var k = ("last" === d.input ? ["change"] : ["input", "change"]).map(
              (e) => De(e, gt(y), r)
            ),
            S = r.defaultView;
          if (!S)
            return () => {
              k.forEach((e) => e());
            };
          var b = S.Object.getOwnPropertyDescriptor(
              S.HTMLInputElement.prototype,
              "value"
            ),
            _ = [
              [S.HTMLInputElement.prototype, "value"],
              [S.HTMLInputElement.prototype, "checked"],
              [S.HTMLSelectElement.prototype, "value"],
              [S.HTMLTextAreaElement.prototype, "value"],
              [S.HTMLSelectElement.prototype, "selectedIndex"],
              [S.HTMLOptionElement.prototype, "selected"],
            ];
          return (
            b &&
              b.set &&
              k.push(
                ..._.map((e) =>
                  Fe(
                    e[0],
                    e[1],
                    {
                      set() {
                        gt(y)({ target: this, isTrusted: !1 });
                      },
                    },
                    !1,
                    S
                  )
                )
              ),
            gt(() => {
              k.forEach((e) => e());
            })
          );
        }
        function Rt(e) {
          return (function (e, t) {
            if (
              (Ot("CSSGroupingRule") &&
                e.parentRule instanceof CSSGroupingRule) ||
              (Ot("CSSMediaRule") && e.parentRule instanceof CSSMediaRule) ||
              (Ot("CSSSupportsRule") &&
                e.parentRule instanceof CSSSupportsRule) ||
              (Ot("CSSConditionRule") &&
                e.parentRule instanceof CSSConditionRule)
            ) {
              var r = Array.from(e.parentRule.cssRules).indexOf(e);
              t.unshift(r);
            } else if (e.parentStyleSheet) {
              var n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
              t.unshift(n);
            }
            return t;
          })(e, []);
        }
        function Mt(e, t, r) {
          var n, a;
          return e
            ? (e.ownerNode ? (n = t.getId(e.ownerNode)) : (a = r.getId(e)),
              { styleId: a, id: n })
            : {};
        }
        function At(e, t) {
          var r = e.mirror,
            n = e.stylesheetManager,
            a = null;
          a = "#document" === t.nodeName ? r.getId(t) : r.getId(t.host);
          var s =
              "#document" === t.nodeName
                ? kt([
                    t,
                    "access",
                    (e) => e.defaultView,
                    "optionalAccess",
                    (e) => e.Document,
                  ])
                : kt([
                    t,
                    "access",
                    (e) => e.ownerDocument,
                    "optionalAccess",
                    (e) => e.defaultView,
                    "optionalAccess",
                    (e) => e.ShadowRoot,
                  ]),
            i = kt([s, "optionalAccess", (e) => e.prototype])
              ? Object.getOwnPropertyDescriptor(
                  kt([s, "optionalAccess", (e) => e.prototype]),
                  "adoptedStyleSheets"
                )
              : void 0;
          return null !== a && -1 !== a && s && i
            ? (Object.defineProperty(t, "adoptedStyleSheets", {
                configurable: i.configurable,
                enumerable: i.enumerable,
                get() {
                  return kt([
                    i,
                    "access",
                    (e) => e.get,
                    "optionalAccess",
                    (e) => e.call,
                    "call",
                    (e) => e(this),
                  ]);
                },
                set(e) {
                  var t = kt([
                    i,
                    "access",
                    (e) => e.set,
                    "optionalAccess",
                    (e) => e.call,
                    "call",
                    (t) => t(this, e),
                  ]);
                  if (null !== a && -1 !== a)
                    try {
                      n.adoptStyleSheets(e, a);
                    } catch (r) {}
                  return t;
                },
              }),
              gt(() => {
                Object.defineProperty(t, "adoptedStyleSheets", {
                  configurable: i.configurable,
                  enumerable: i.enumerable,
                  get: i.get,
                  set: i.set,
                });
              }))
            : () => {};
        }
        function Dt(e) {
          var t = e.doc.defaultView;
          if (!t) return () => {};
          var r,
            n,
            s,
            i,
            o,
            l,
            c = _t(e, e.doc),
            u = (function (e) {
              var t = e.mousemoveCb,
                r = e.sampling,
                n = e.doc,
                a = e.mirror;
              if (!1 === r.mousemove) return () => {};
              var s,
                i = "number" == typeof r.mousemove ? r.mousemove : 50,
                o =
                  "number" == typeof r.mousemoveCallback
                    ? r.mousemoveCallback
                    : 500,
                l = [],
                c = Ne(
                  gt((e) => {
                    var r = Date.now() - s;
                    t(
                      l.map((e) => ((e.timeOffset -= r), e)),
                      e
                    ),
                      (l = []),
                      (s = null);
                  }),
                  o
                ),
                u = gt(
                  Ne(
                    gt((e) => {
                      var t = bt(e),
                        r = Ve(e) ? e.changedTouches[0] : e,
                        n = r.clientX,
                        i = r.clientY;
                      s || (s = Be()),
                        l.push({
                          x: n,
                          y: i,
                          id: a.getId(t),
                          timeOffset: Be() - s,
                        }),
                        c(
                          "undefined" != typeof DragEvent &&
                            e instanceof DragEvent
                            ? rt.Drag
                            : e instanceof MouseEvent
                            ? rt.MouseMove
                            : rt.TouchMove
                        );
                    }),
                    i,
                    { trailing: !1 }
                  )
                ),
                d = [
                  De("mousemove", u, n),
                  De("touchmove", u, n),
                  De("drag", u, n),
                ];
              return gt(() => {
                d.forEach((e) => e());
              });
            })(e),
            d = wt(e),
            p = xt(e),
            h =
              ((r = { win: t }),
              (n = e.viewportResizeCb),
              (s = r.win),
              (i = -1),
              (o = -1),
              De(
                "resize",
                gt(
                  Ne(
                    gt(() => {
                      var e = He(),
                        t = We();
                      (i === e && o === t) ||
                        (n({ width: Number(t), height: Number(e) }),
                        (i = e),
                        (o = t));
                    }),
                    200
                  )
                ),
                s
              )),
            m = Et(e),
            f = (function (e) {
              var t = e.mediaInteractionCb,
                r = e.blockClass,
                n = e.blockSelector,
                a = e.unblockSelector,
                s = e.mirror,
                i = e.sampling,
                o = e.doc,
                l = gt((e) =>
                  Ne(
                    gt((i) => {
                      var o = bt(i);
                      if (o && !je(o, r, n, a, !0)) {
                        var l = o.currentTime,
                          c = o.volume,
                          u = o.muted,
                          d = o.playbackRate;
                        t({
                          type: e,
                          id: s.getId(o),
                          currentTime: l,
                          volume: c,
                          muted: u,
                          playbackRate: d,
                        });
                      }
                    }),
                    i.media || 500
                  )
                ),
                c = [
                  De("play", l(0), o),
                  De("pause", l(1), o),
                  De("seeked", l(2), o),
                  De("volumechange", l(3), o),
                  De("ratechange", l(4), o),
                ];
              return gt(() => {
                c.forEach((e) => e());
              });
            })(e),
            v = (function (e, t) {
              var r = e.styleSheetRuleCb,
                n = e.mirror,
                s = e.stylesheetManager,
                i = t.win;
              if (!i.CSSStyleSheet || !i.CSSStyleSheet.prototype)
                return () => {};
              var o = i.CSSStyleSheet.prototype.insertRule;
              i.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                apply: gt((e, t, i) => {
                  var o = (0, a.Z)(i, 2),
                    l = o[0],
                    c = o[1],
                    u = Mt(t, n, s.styleMirror),
                    d = u.id,
                    p = u.styleId;
                  return (
                    ((d && -1 !== d) || (p && -1 !== p)) &&
                      r({ id: d, styleId: p, adds: [{ rule: l, index: c }] }),
                    e.apply(t, i)
                  );
                }),
              });
              var l,
                c,
                u = i.CSSStyleSheet.prototype.deleteRule;
              (i.CSSStyleSheet.prototype.deleteRule = new Proxy(u, {
                apply: gt((e, t, i) => {
                  var o = (0, a.Z)(i, 1)[0],
                    l = Mt(t, n, s.styleMirror),
                    c = l.id,
                    u = l.styleId;
                  return (
                    ((c && -1 !== c) || (u && -1 !== u)) &&
                      r({ id: c, styleId: u, removes: [{ index: o }] }),
                    e.apply(t, i)
                  );
                }),
              })),
                i.CSSStyleSheet.prototype.replace &&
                  ((l = i.CSSStyleSheet.prototype.replace),
                  (i.CSSStyleSheet.prototype.replace = new Proxy(l, {
                    apply: gt((e, t, i) => {
                      var o = (0, a.Z)(i, 1)[0],
                        l = Mt(t, n, s.styleMirror),
                        c = l.id,
                        u = l.styleId;
                      return (
                        ((c && -1 !== c) || (u && -1 !== u)) &&
                          r({ id: c, styleId: u, replace: o }),
                        e.apply(t, i)
                      );
                    }),
                  }))),
                i.CSSStyleSheet.prototype.replaceSync &&
                  ((c = i.CSSStyleSheet.prototype.replaceSync),
                  (i.CSSStyleSheet.prototype.replaceSync = new Proxy(c, {
                    apply: gt((e, t, i) => {
                      var o = (0, a.Z)(i, 1)[0],
                        l = Mt(t, n, s.styleMirror),
                        c = l.id,
                        u = l.styleId;
                      return (
                        ((c && -1 !== c) || (u && -1 !== u)) &&
                          r({ id: c, styleId: u, replaceSync: o }),
                        e.apply(t, i)
                      );
                    }),
                  })));
              var d = {};
              Lt("CSSGroupingRule")
                ? (d.CSSGroupingRule = i.CSSGroupingRule)
                : (Lt("CSSMediaRule") && (d.CSSMediaRule = i.CSSMediaRule),
                  Lt("CSSConditionRule") &&
                    (d.CSSConditionRule = i.CSSConditionRule),
                  Lt("CSSSupportsRule") &&
                    (d.CSSSupportsRule = i.CSSSupportsRule));
              var p = {};
              return (
                Object.entries(d).forEach((e) => {
                  var t = (0, a.Z)(e, 2),
                    i = t[0],
                    o = t[1];
                  (p[i] = {
                    insertRule: o.prototype.insertRule,
                    deleteRule: o.prototype.deleteRule,
                  }),
                    (o.prototype.insertRule = new Proxy(p[i].insertRule, {
                      apply: gt((e, t, i) => {
                        var o = (0, a.Z)(i, 2),
                          l = o[0],
                          c = o[1],
                          u = Mt(t.parentStyleSheet, n, s.styleMirror),
                          d = u.id,
                          p = u.styleId;
                        return (
                          ((d && -1 !== d) || (p && -1 !== p)) &&
                            r({
                              id: d,
                              styleId: p,
                              adds: [{ rule: l, index: [...Rt(t), c || 0] }],
                            }),
                          e.apply(t, i)
                        );
                      }),
                    })),
                    (o.prototype.deleteRule = new Proxy(p[i].deleteRule, {
                      apply: gt((e, t, i) => {
                        var o = (0, a.Z)(i, 1)[0],
                          l = Mt(t.parentStyleSheet, n, s.styleMirror),
                          c = l.id,
                          u = l.styleId;
                        return (
                          ((c && -1 !== c) || (u && -1 !== u)) &&
                            r({
                              id: c,
                              styleId: u,
                              removes: [{ index: [...Rt(t), o] }],
                            }),
                          e.apply(t, i)
                        );
                      }),
                    }));
                }),
                gt(() => {
                  (i.CSSStyleSheet.prototype.insertRule = o),
                    (i.CSSStyleSheet.prototype.deleteRule = u),
                    l && (i.CSSStyleSheet.prototype.replace = l),
                    c && (i.CSSStyleSheet.prototype.replaceSync = c),
                    Object.entries(d).forEach((e) => {
                      var t = (0, a.Z)(e, 2),
                        r = t[0],
                        n = t[1];
                      (n.prototype.insertRule = p[r].insertRule),
                        (n.prototype.deleteRule = p[r].deleteRule);
                    });
                })
              );
            })(e, { win: t }),
            y = At(e, e.doc),
            g = (function (e, t) {
              var r = e.styleDeclarationCb,
                n = e.mirror,
                s = e.ignoreCSSAttributes,
                i = e.stylesheetManager,
                o = t.win,
                l = o.CSSStyleDeclaration.prototype.setProperty;
              o.CSSStyleDeclaration.prototype.setProperty = new Proxy(l, {
                apply: gt((e, t, o) => {
                  var c = (0, a.Z)(o, 3),
                    u = c[0],
                    d = c[1],
                    p = c[2];
                  if (s.has(u)) return l.apply(t, [u, d, p]);
                  var h = Mt(
                      kt([
                        t,
                        "access",
                        (e) => e.parentRule,
                        "optionalAccess",
                        (e) => e.parentStyleSheet,
                      ]),
                      n,
                      i.styleMirror
                    ),
                    m = h.id,
                    f = h.styleId;
                  return (
                    ((m && -1 !== m) || (f && -1 !== f)) &&
                      r({
                        id: m,
                        styleId: f,
                        set: { property: u, value: d, priority: p },
                        index: Rt(t.parentRule),
                      }),
                    e.apply(t, o)
                  );
                }),
              });
              var c = o.CSSStyleDeclaration.prototype.removeProperty;
              return (
                (o.CSSStyleDeclaration.prototype.removeProperty = new Proxy(c, {
                  apply: gt((e, t, o) => {
                    var l = (0, a.Z)(o, 1)[0];
                    if (s.has(l)) return c.apply(t, [l]);
                    var u = Mt(
                        kt([
                          t,
                          "access",
                          (e) => e.parentRule,
                          "optionalAccess",
                          (e) => e.parentStyleSheet,
                        ]),
                        n,
                        i.styleMirror
                      ),
                      d = u.id,
                      p = u.styleId;
                    return (
                      ((d && -1 !== d) || (p && -1 !== p)) &&
                        r({
                          id: d,
                          styleId: p,
                          remove: { property: l },
                          index: Rt(t.parentRule),
                        }),
                      e.apply(t, o)
                    );
                  }),
                })),
                gt(() => {
                  (o.CSSStyleDeclaration.prototype.setProperty = l),
                    (o.CSSStyleDeclaration.prototype.removeProperty = c);
                })
              );
            })(e, { win: t }),
            k = e.collectFonts
              ? (function (e) {
                  var t = e.fontCb,
                    r = e.doc,
                    n = r.defaultView;
                  if (!n) return () => {};
                  var a = [],
                    s = new WeakMap(),
                    i = n.FontFace;
                  n.FontFace = function (e, t, r) {
                    var n = new i(e, t, r);
                    return (
                      s.set(n, {
                        family: e,
                        buffer: "string" != typeof t,
                        descriptors: r,
                        fontSource:
                          "string" == typeof t
                            ? t
                            : JSON.stringify(Array.from(new Uint8Array(t))),
                      }),
                      n
                    );
                  };
                  var o = Pe(r.fonts, "add", function (e) {
                    return function (r) {
                      return (
                        setTimeout(
                          gt(() => {
                            var e = s.get(r);
                            e && (t(e), s.delete(r));
                          }),
                          0
                        ),
                        e.apply(this, [r])
                      );
                    };
                  });
                  return (
                    a.push(() => {
                      n.FontFace = i;
                    }),
                    a.push(o),
                    gt(() => {
                      a.forEach((e) => e());
                    })
                  );
                })(e)
              : () => {},
            S = (function (e) {
              var t = e.doc,
                r = e.mirror,
                n = e.blockClass,
                a = e.blockSelector,
                s = e.unblockSelector,
                i = e.selectionCb,
                o = !0,
                l = gt(() => {
                  var e = t.getSelection();
                  if (
                    !(
                      !e ||
                      (o && kt([e, "optionalAccess", (e) => e.isCollapsed]))
                    )
                  ) {
                    o = e.isCollapsed || !1;
                    for (var l = [], c = e.rangeCount || 0, u = 0; u < c; u++) {
                      var d = e.getRangeAt(u),
                        p = d.startContainer,
                        h = d.startOffset,
                        m = d.endContainer,
                        f = d.endOffset;
                      je(p, n, a, s, !0) ||
                        je(m, n, a, s, !0) ||
                        l.push({
                          start: r.getId(p),
                          startOffset: h,
                          end: r.getId(m),
                          endOffset: f,
                        });
                    }
                    i({ ranges: l });
                  }
                });
              return l(), De("selectionchange", l);
            })(e),
            b = (function (e) {
              var t = e.doc,
                r = e.customElementCb,
                n = t.defaultView;
              return n && n.customElements
                ? Pe(n.customElements, "define", function (e) {
                    return function (t, n, a) {
                      try {
                        r({ define: { name: t } });
                      } catch (s) {}
                      return e.apply(this, [t, n, a]);
                    };
                  })
                : () => {};
            })(e),
            _ = [],
            w = N(e.plugins);
          try {
            for (w.s(); !(l = w.n()).done; ) {
              var x = l.value;
              _.push(x.observer(x.callback, t, x.options));
            }
          } catch (C) {
            w.e(C);
          } finally {
            w.f();
          }
          return gt(() => {
            St.forEach((e) => e.reset()),
              c.disconnect(),
              u(),
              d(),
              p(),
              h(),
              m(),
              f(),
              v(),
              y(),
              g(),
              k(),
              S(),
              b(),
              _.forEach((e) => e());
          });
        }
        function Ot(e) {
          return void 0 !== window[e];
        }
        function Lt(e) {
          return Boolean(
            void 0 !== window[e] &&
              window[e].prototype &&
              "insertRule" in window[e].prototype &&
              "deleteRule" in window[e].prototype
          );
        }
        class Nt {
          constructor(e) {
            (this.generateIdFn = e),
              (this.iframeIdToRemoteIdMap = new WeakMap()),
              (this.iframeRemoteIdToIdMap = new WeakMap());
          }
          getId(e, t, r, n) {
            var a = r || this.getIdToRemoteIdMap(e),
              s = n || this.getRemoteIdToIdMap(e),
              i = a.get(t);
            return (
              i || ((i = this.generateIdFn()), a.set(t, i), s.set(i, t)), i
            );
          }
          getIds(e, t) {
            var r = this.getIdToRemoteIdMap(e),
              n = this.getRemoteIdToIdMap(e);
            return t.map((t) => this.getId(e, t, r, n));
          }
          getRemoteId(e, t, r) {
            var n = r || this.getRemoteIdToIdMap(e);
            if ("number" != typeof t) return t;
            var a = n.get(t);
            return a || -1;
          }
          getRemoteIds(e, t) {
            var r = this.getRemoteIdToIdMap(e);
            return t.map((t) => this.getRemoteId(e, t, r));
          }
          reset(e) {
            if (!e)
              return (
                (this.iframeIdToRemoteIdMap = new WeakMap()),
                void (this.iframeRemoteIdToIdMap = new WeakMap())
              );
            this.iframeIdToRemoteIdMap.delete(e),
              this.iframeRemoteIdToIdMap.delete(e);
          }
          getIdToRemoteIdMap(e) {
            var t = this.iframeIdToRemoteIdMap.get(e);
            return (
              t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t
            );
          }
          getRemoteIdToIdMap(e) {
            var t = this.iframeRemoteIdToIdMap.get(e);
            return (
              t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t
            );
          }
        }
        class Ft {
          constructor() {
            (this.crossOriginIframeMirror = new Nt(pe)),
              (this.crossOriginIframeRootIdMap = new WeakMap());
          }
          addIframe() {}
          addLoadListener() {}
          attachIframe() {}
        }
        class Pt {
          init() {}
          addShadowRoot() {}
          observeAttachShadow() {}
          reset() {}
        }
        class Ut {
          reset() {}
          freeze() {}
          unfreeze() {}
          lock() {}
          unlock() {}
          snapshot() {}
        }
        class Bt {
          constructor(e) {
            (this.trackedLinkElements = new WeakSet()),
              (this.styleMirror = new Ge()),
              (this.mutationCb = e.mutationCb),
              (this.adoptedStyleSheetCb = e.adoptedStyleSheetCb);
          }
          attachLinkElement(e, t) {
            "_cssText" in t.attributes &&
              this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [{ id: t.id, attributes: t.attributes }],
              }),
              this.trackLinkElement(e);
          }
          trackLinkElement(e) {
            this.trackedLinkElements.has(e) ||
              (this.trackedLinkElements.add(e),
              this.trackStylesheetInLinkElement(e));
          }
          adoptStyleSheets(e, t) {
            if (0 !== e.length) {
              var r,
                n = { id: t, styleIds: [] },
                a = [],
                s = N(e);
              try {
                for (s.s(); !(r = s.n()).done; ) {
                  var i = r.value,
                    o = void 0;
                  this.styleMirror.has(i)
                    ? (o = this.styleMirror.getId(i))
                    : ((o = this.styleMirror.add(i)),
                      a.push({
                        styleId: o,
                        rules: Array.from(i.rules || CSSRule, (e, t) => ({
                          rule: $(e),
                          index: t,
                        })),
                      })),
                    n.styleIds.push(o);
                }
              } catch (l) {
                s.e(l);
              } finally {
                s.f();
              }
              a.length > 0 && (n.styles = a), this.adoptedStyleSheetCb(n);
            }
          }
          reset() {
            this.styleMirror.reset(),
              (this.trackedLinkElements = new WeakSet());
          }
          trackStylesheetInLinkElement(e) {}
        }
        class zt {
          constructor() {
            (this.nodeMap = new WeakMap()),
              (this.loop = !0),
              this.periodicallyClear();
          }
          periodicallyClear() {
            et(() => {
              this.clear(), this.loop && this.periodicallyClear();
            });
          }
          inOtherBuffer(e, t) {
            var r = this.nodeMap.get(e);
            return r && Array.from(r).some((e) => e !== t);
          }
          add(e, t) {
            this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
          }
          clear() {
            this.nodeMap = new WeakMap();
          }
          destroy() {
            this.loop = !1;
          }
        }
        function Ht(e) {
          var t = e;
          return (t.timestamp = Be()), t;
        }
        var Wt = new Q();
        function jt() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.emit,
            r = e.checkoutEveryNms,
            n = e.checkoutEveryNth,
            a = e.blockClass,
            s = void 0 === a ? "rr-block" : a,
            i = e.blockSelector,
            o = void 0 === i ? null : i,
            l = e.unblockSelector,
            u = void 0 === l ? null : l,
            d = e.ignoreClass,
            p = void 0 === d ? "rr-ignore" : d,
            h = e.ignoreSelector,
            m = void 0 === h ? null : h,
            f = e.maskAllText,
            v = void 0 !== f && f,
            y = e.maskTextClass,
            g = void 0 === y ? "rr-mask" : y,
            k = e.unmaskTextClass,
            S = void 0 === k ? null : k,
            b = e.maskTextSelector,
            _ = void 0 === b ? null : b,
            w = e.unmaskTextSelector,
            x = void 0 === w ? null : w,
            C = e.inlineStylesheet,
            T = void 0 === C || C,
            I = e.maskAllInputs,
            E = e.maskInputOptions,
            R = e.slimDOMOptions,
            M = e.maskAttributeFn,
            A = e.maskInputFn,
            D = e.maskTextFn,
            O = e.packFn,
            F = e.sampling,
            P = void 0 === F ? {} : F,
            U = e.dataURLOptions,
            B = void 0 === U ? {} : U,
            z = e.mousemoveWait,
            H = e.recordCanvas,
            W = void 0 !== H && H,
            j = e.recordCrossOriginIframes,
            Z = void 0 !== j && j,
            q = e.recordAfter,
            V =
              void 0 === q
                ? "DOMContentLoaded" === e.recordAfter
                  ? e.recordAfter
                  : "load"
                : q,
            K = e.userTriggeredOnInput,
            J = void 0 !== K && K,
            Y = e.collectFonts,
            G = void 0 !== Y && Y,
            X = e.inlineImages,
            $ = void 0 !== X && X,
            ee = e.plugins,
            te = e.keepIframeSrcFn,
            re = void 0 === te ? () => !1 : te,
            ne = e.ignoreCSSAttributes,
            ae = void 0 === ne ? new Set([]) : ne,
            se = e.errorHandler,
            ie = e.onMutation,
            oe = e.getCanvasManager;
          vt(se);
          var le = !Z || window.parent === window,
            ce = !1;
          if (!le)
            try {
              window.parent.document && (ce = !1);
            } catch (Oe) {
              ce = !0;
            }
          if (le && !t) throw new Error("emit function is required");
          void 0 !== z && void 0 === P.mousemove && (P.mousemove = z),
            Wt.reset();
          var ue,
            de =
              !0 === I
                ? {
                    color: !0,
                    date: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0,
                    textarea: !0,
                    select: !0,
                    radio: !0,
                    checkbox: !0,
                  }
                : void 0 !== E
                ? E
                : {},
            pe =
              !0 === R || "all" === R
                ? {
                    script: !0,
                    comment: !0,
                    headFavicon: !0,
                    headWhitespace: !0,
                    headMetaSocial: !0,
                    headMetaRobots: !0,
                    headMetaHttpEquiv: !0,
                    headMetaVerification: !0,
                    headMetaAuthorship: "all" === R,
                    headMetaDescKeywords: "all" === R,
                  }
                : R || {};
          !(function () {
            var e = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : window;
            "NodeList" in t &&
              !t.NodeList.prototype.forEach &&
              (t.NodeList.prototype.forEach = Array.prototype.forEach),
              "DOMTokenList" in t &&
                !t.DOMTokenList.prototype.forEach &&
                (t.DOMTokenList.prototype.forEach = Array.prototype.forEach),
              Node.prototype.contains ||
                (Node.prototype.contains = function () {
                  for (
                    var t = arguments.length, r = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n];
                  var a = r[0];
                  if (!(0 in r)) throw new TypeError("1 argument is required");
                  do {
                    if (e === a) return !0;
                  } while ((a = a && a.parentNode));
                  return !1;
                });
          })();
          var he,
            me = 0,
            fe = (e) => {
              var t,
                r = N(ee || []);
              try {
                for (r.s(); !(t = r.n()).done; ) {
                  var n = t.value;
                  n.eventProcessor && (e = n.eventProcessor(e));
                }
              } catch (a) {
                r.e(a);
              } finally {
                r.f();
              }
              return O && !ce && (e = O(e)), e;
            },
            ve = (e, a) => {
              if (
                (!(0, c.x)([
                  St,
                  "access",
                  (e) => e[0],
                  "optionalAccess",
                  (e) => e.isFrozen,
                  "call",
                  (e) => e(),
                ]) ||
                  e.type === tt.FullSnapshot ||
                  (e.type === tt.IncrementalSnapshot &&
                    e.data.source === rt.Mutation) ||
                  St.forEach((e) => e.unfreeze()),
                le)
              )
                (0, c.x)([t, "optionalCall", (t) => t(fe(e), a)]);
              else if (ce) {
                var s = {
                  type: "rrweb",
                  event: fe(e),
                  origin: window.location.origin,
                  isCheckout: a,
                };
                window.parent.postMessage(s, "*");
              }
              if (e.type === tt.FullSnapshot) (ue = e), (me = 0);
              else if (e.type === tt.IncrementalSnapshot) {
                if (e.data.source === rt.Mutation && e.data.isAttachIframe)
                  return;
                me++;
                var i = n && me >= n,
                  o = r && e.timestamp - ue.timestamp > r;
                (i || o) && Ie(!0);
              }
            },
            ye = (e) => {
              ve(
                Ht({
                  type: tt.IncrementalSnapshot,
                  data: L({ source: rt.Mutation }, e),
                })
              );
            },
            ge = (e) =>
              ve(
                Ht({
                  type: tt.IncrementalSnapshot,
                  data: L({ source: rt.Scroll }, e),
                })
              ),
            ke = (e) =>
              ve(
                Ht({
                  type: tt.IncrementalSnapshot,
                  data: L({ source: rt.CanvasMutation }, e),
                })
              ),
            Se = new Bt({
              mutationCb: ye,
              adoptedStyleSheetCb: (e) =>
                ve(
                  Ht({
                    type: tt.IncrementalSnapshot,
                    data: L({ source: rt.AdoptedStyleSheet }, e),
                  })
                ),
            }),
            be = new Ft(),
            _e = N(ee || []);
          try {
            for (_e.s(); !(he = _e.n()).done; ) {
              var we = he.value;
              we.getMirror &&
                we.getMirror({
                  nodeMirror: Wt,
                  crossOriginIframeMirror: be.crossOriginIframeMirror,
                  crossOriginIframeStyleMirror: be.crossOriginIframeStyleMirror,
                });
            }
          } catch (Le) {
            _e.e(Le);
          } finally {
            _e.f();
          }
          var xe = new zt(),
            Ce = (function (e, t) {
              try {
                return e ? e(t) : new Ut();
              } catch (r) {
                return (
                  console.warn("Unable to initialize CanvasManager"), new Ut()
                );
              }
            })(oe, {
              mirror: Wt,
              win: window,
              mutationCb: (e) =>
                ve(
                  Ht({
                    type: tt.IncrementalSnapshot,
                    data: L({ source: rt.CanvasMutation }, e),
                  })
                ),
              recordCanvas: W,
              blockClass: s,
              blockSelector: o,
              unblockSelector: u,
              sampling: P.canvas,
              dataURLOptions: B,
              errorHandler: se,
            }),
            Te = new Pt(),
            Ie = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              ve(
                Ht({
                  type: tt.Meta,
                  data: {
                    href: window.location.href,
                    width: We(),
                    height: He(),
                  },
                }),
                e
              ),
                Se.reset(),
                Te.init(),
                St.forEach((e) => e.lock());
              var t = (function (e, t) {
                var r = t || {},
                  n = r.mirror,
                  a = void 0 === n ? new Q() : n,
                  s = r.blockClass,
                  i = void 0 === s ? "rr-block" : s,
                  o = r.blockSelector,
                  l = void 0 === o ? null : o,
                  c = r.unblockSelector,
                  u = void 0 === c ? null : c,
                  d = r.maskAllText,
                  p = void 0 !== d && d,
                  h = r.maskTextClass,
                  m = void 0 === h ? "rr-mask" : h,
                  f = r.unmaskTextClass,
                  v = void 0 === f ? null : f,
                  y = r.maskTextSelector,
                  g = void 0 === y ? null : y,
                  k = r.unmaskTextSelector,
                  S = void 0 === k ? null : k,
                  b = r.inlineStylesheet,
                  _ = void 0 === b || b,
                  w = r.inlineImages,
                  x = void 0 !== w && w,
                  C = r.recordCanvas,
                  T = void 0 !== C && C,
                  I = r.maskAllInputs,
                  E = void 0 !== I && I,
                  R = r.maskAttributeFn,
                  M = r.maskTextFn,
                  A = r.maskInputFn,
                  D = r.slimDOM,
                  O = void 0 !== D && D,
                  L = r.dataURLOptions,
                  N = r.preserveWhiteSpace,
                  F = r.onSerialize,
                  P = r.onIframeLoad,
                  U = r.iframeLoadTimeout,
                  B = r.onStylesheetLoad,
                  z = r.stylesheetLoadTimeout,
                  H = r.keepIframeSrcFn;
                return Me(e, {
                  doc: e,
                  mirror: a,
                  blockClass: i,
                  blockSelector: l,
                  unblockSelector: u,
                  maskAllText: p,
                  maskTextClass: m,
                  unmaskTextClass: v,
                  maskTextSelector: g,
                  unmaskTextSelector: S,
                  skipChild: !1,
                  inlineStylesheet: _,
                  maskInputOptions:
                    !0 === E
                      ? {
                          color: !0,
                          date: !0,
                          "datetime-local": !0,
                          email: !0,
                          month: !0,
                          number: !0,
                          range: !0,
                          search: !0,
                          tel: !0,
                          text: !0,
                          time: !0,
                          url: !0,
                          week: !0,
                          textarea: !0,
                          select: !0,
                        }
                      : !1 === E
                      ? {}
                      : E,
                  maskAttributeFn: R,
                  maskTextFn: M,
                  maskInputFn: A,
                  slimDOMOptions:
                    !0 === O || "all" === O
                      ? {
                          script: !0,
                          comment: !0,
                          headFavicon: !0,
                          headWhitespace: !0,
                          headMetaDescKeywords: "all" === O,
                          headMetaSocial: !0,
                          headMetaRobots: !0,
                          headMetaHttpEquiv: !0,
                          headMetaAuthorship: !0,
                          headMetaVerification: !0,
                        }
                      : !1 === O
                      ? {}
                      : O,
                  dataURLOptions: L,
                  inlineImages: x,
                  recordCanvas: T,
                  preserveWhiteSpace: N,
                  onSerialize: F,
                  onIframeLoad: P,
                  iframeLoadTimeout: U,
                  onStylesheetLoad: B,
                  stylesheetLoadTimeout: z,
                  keepIframeSrcFn: void 0 === H ? () => !1 : H,
                  newlyAddedElement: !1,
                });
              })(document, {
                mirror: Wt,
                blockClass: s,
                blockSelector: o,
                unblockSelector: u,
                maskAllText: v,
                maskTextClass: g,
                unmaskTextClass: S,
                maskTextSelector: _,
                unmaskTextSelector: x,
                inlineStylesheet: T,
                maskAllInputs: de,
                maskAttributeFn: M,
                maskInputFn: A,
                maskTextFn: D,
                slimDOM: pe,
                dataURLOptions: B,
                recordCanvas: W,
                inlineImages: $,
                onSerialize: (e) => {
                  Ke(e, Wt) && be.addIframe(e),
                    Je(e, Wt) && Se.trackLinkElement(e),
                    Ye(e) && Te.addShadowRoot(e.shadowRoot, document);
                },
                onIframeLoad: (e, t) => {
                  be.attachIframe(e, t), Te.observeAttachShadow(e);
                },
                onStylesheetLoad: (e, t) => {
                  Se.attachLinkElement(e, t);
                },
                keepIframeSrcFn: re,
              });
              if (!t) return console.warn("Failed to snapshot the document");
              ve(
                Ht({
                  type: tt.FullSnapshot,
                  data: { node: t, initialOffset: ze(window) },
                })
              ),
                St.forEach((e) => e.unlock()),
                document.adoptedStyleSheets &&
                  document.adoptedStyleSheets.length > 0 &&
                  Se.adoptStyleSheets(
                    document.adoptedStyleSheets,
                    Wt.getId(document)
                  );
            };
          Ct = Ie;
          try {
            var Ee = [],
              Re = (e) =>
                gt(Dt)(
                  {
                    onMutation: ie,
                    mutationCb: ye,
                    mousemoveCb: (e, t) =>
                      ve(
                        Ht({
                          type: tt.IncrementalSnapshot,
                          data: { source: t, positions: e },
                        })
                      ),
                    mouseInteractionCb: (e) =>
                      ve(
                        Ht({
                          type: tt.IncrementalSnapshot,
                          data: L({ source: rt.MouseInteraction }, e),
                        })
                      ),
                    scrollCb: ge,
                    viewportResizeCb: (e) =>
                      ve(
                        Ht({
                          type: tt.IncrementalSnapshot,
                          data: L({ source: rt.ViewportResize }, e),
                        })
                      ),
                    inputCb: (e) =>
                      ve(
                        Ht({
                          type: tt.IncrementalSnapshot,
                          data: L({ source: rt.Input }, e),
                        })
                      ),
                    mediaInteractionCb: (e) =>
                      ve(
                        Ht({
                          type: tt.IncrementalSnapshot,
                          data: L({ source: rt.MediaInteraction }, e),
                        })
                      ),
                    styleSheetRuleCb: (e) =>
                      ve(
                        Ht({
                          type: tt.IncrementalSnapshot,
                          data: L({ source: rt.StyleSheetRule }, e),
                        })
                      ),
                    styleDeclarationCb: (e) =>
                      ve(
                        Ht({
                          type: tt.IncrementalSnapshot,
                          data: L({ source: rt.StyleDeclaration }, e),
                        })
                      ),
                    canvasMutationCb: ke,
                    fontCb: (e) =>
                      ve(
                        Ht({
                          type: tt.IncrementalSnapshot,
                          data: L({ source: rt.Font }, e),
                        })
                      ),
                    selectionCb: (e) => {
                      ve(
                        Ht({
                          type: tt.IncrementalSnapshot,
                          data: L({ source: rt.Selection }, e),
                        })
                      );
                    },
                    customElementCb: (e) => {
                      ve(
                        Ht({
                          type: tt.IncrementalSnapshot,
                          data: L({ source: rt.CustomElement }, e),
                        })
                      );
                    },
                    blockClass: s,
                    ignoreClass: p,
                    ignoreSelector: m,
                    maskAllText: v,
                    maskTextClass: g,
                    unmaskTextClass: S,
                    maskTextSelector: _,
                    unmaskTextSelector: x,
                    maskInputOptions: de,
                    inlineStylesheet: T,
                    sampling: P,
                    recordCanvas: W,
                    inlineImages: $,
                    userTriggeredOnInput: J,
                    collectFonts: G,
                    doc: e,
                    maskAttributeFn: M,
                    maskInputFn: A,
                    maskTextFn: D,
                    keepIframeSrcFn: re,
                    blockSelector: o,
                    unblockSelector: u,
                    slimDOMOptions: pe,
                    dataURLOptions: B,
                    mirror: Wt,
                    iframeManager: be,
                    stylesheetManager: Se,
                    shadowDomManager: Te,
                    processedNodeManager: xe,
                    canvasManager: Ce,
                    ignoreCSSAttributes: ae,
                    plugins:
                      (0, c.x)([
                        ee,
                        "optionalAccess",
                        (e) => e.filter,
                        "call",
                        (e) => e((e) => e.observer),
                        "optionalAccess",
                        (e) => e.map,
                        "call",
                        (e) =>
                          e((e) => ({
                            observer: e.observer,
                            options: e.options,
                            callback: (t) =>
                              ve(
                                Ht({
                                  type: tt.Plugin,
                                  data: { plugin: e.name, payload: t },
                                })
                              ),
                          })),
                      ]) || [],
                  },
                  {}
                );
            be.addLoadListener((e) => {
              try {
                Ee.push(Re(e.contentDocument));
              } catch (t) {
                console.warn(t);
              }
            });
            var Ae = () => {
              Ie(), Ee.push(Re(document));
            };
            return (
              "interactive" === document.readyState ||
              "complete" === document.readyState
                ? Ae()
                : (Ee.push(
                    De("DOMContentLoaded", () => {
                      ve(Ht({ type: tt.DomContentLoaded, data: {} })),
                        "DOMContentLoaded" === V && Ae();
                    })
                  ),
                  Ee.push(
                    De(
                      "load",
                      () => {
                        ve(Ht({ type: tt.Load, data: {} })),
                          "load" === V && Ae();
                      },
                      window
                    )
                  )),
              () => {
                Ee.forEach((e) => e()), xe.destroy(), (Ct = void 0), yt();
              }
            );
          } catch (Ne) {
            console.warn(Ne);
          }
        }
        (jt.mirror = Wt),
          (jt.takeFullSnapshot = function (e) {
            if (!Ct)
              throw new Error(
                "please take full snapshot after start recording"
              );
            Ct(e);
          });
        var Zt = 3;
        function qt(e) {
          return e > 9999999999 ? e : 1e3 * e;
        }
        function Vt(e) {
          return e > 9999999999 ? e / 1e3 : e;
        }
        function Kt(e, t) {
          "sentry.transaction" !== t.category &&
            (["ui.click", "ui.input"].includes(t.category)
              ? e.triggerUserActivity()
              : e.checkAndHandleExpiredSession(),
            e.addUpdate(
              () => (
                e.throttledAddEvent({
                  type: tt.Custom,
                  timestamp: 1e3 * (t.timestamp || 0),
                  data: { tag: "breadcrumb", payload: (0, g.Fv)(t, 10, 1e3) },
                }),
                "console" === t.category
              )
            ));
        }
        var Jt,
          Yt = "button,a";
        function Gt(e) {
          return e.closest(Yt) || e;
        }
        function Xt(e) {
          var t = $t(e);
          return t && t instanceof Element ? Gt(t) : t;
        }
        function $t(e) {
          return (function (e) {
            return "object" == typeof e && !!e && "target" in e;
          })(e)
            ? e.target
            : e;
        }
        function Qt(e) {
          return (
            Jt ||
              ((Jt = []),
              (0, k.hl)(U, "open", function (e) {
                return function () {
                  if (Jt)
                    try {
                      Jt.forEach((e) => e());
                    } catch (a) {}
                  for (
                    var t = arguments.length, r = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n];
                  return e.apply(U, r);
                };
              })),
            Jt.push(e),
            () => {
              var t = Jt ? Jt.indexOf(e) : -1;
              t > -1 && Jt.splice(t, 1);
            }
          );
        }
        class er {
          constructor(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : Kt;
            (this._lastMutation = 0),
              (this._lastScroll = 0),
              (this._clicks = []),
              (this._timeout = t.timeout / 1e3),
              (this._threshold = t.threshold / 1e3),
              (this._scollTimeout = t.scrollTimeout / 1e3),
              (this._replay = e),
              (this._ignoreSelector = t.ignoreSelector),
              (this._addBreadcrumbEvent = r);
          }
          addListeners() {
            var e = Qt(() => {
              this._lastMutation = nr();
            });
            this._teardown = () => {
              e(),
                (this._clicks = []),
                (this._lastMutation = 0),
                (this._lastScroll = 0);
            };
          }
          removeListeners() {
            this._teardown && this._teardown(),
              this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
          }
          handleClick(e, t) {
            if (
              !(function (e, t) {
                if (!rr.includes(e.tagName)) return !0;
                if (
                  "INPUT" === e.tagName &&
                  !["submit", "button"].includes(e.getAttribute("type") || "")
                )
                  return !0;
                if (
                  "A" === e.tagName &&
                  (e.hasAttribute("download") ||
                    (e.hasAttribute("target") &&
                      "_self" !== e.getAttribute("target")))
                )
                  return !0;
                if (t && e.matches(t)) return !0;
                return !1;
              })(t, this._ignoreSelector) &&
              (function (e) {
                return !(
                  !e.data ||
                  "number" != typeof e.data.nodeId ||
                  !e.timestamp
                );
              })(e)
            ) {
              var r = {
                timestamp: Vt(e.timestamp),
                clickBreadcrumb: e,
                clickCount: 0,
                node: t,
              };
              this._clicks.some(
                (e) =>
                  e.node === r.node && Math.abs(e.timestamp - r.timestamp) < 1
              ) ||
                (this._clicks.push(r),
                1 === this._clicks.length && this._scheduleCheckClicks());
            }
          }
          registerMutation() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Date.now();
            this._lastMutation = Vt(e);
          }
          registerScroll() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Date.now();
            this._lastScroll = Vt(e);
          }
          registerClick(e) {
            var t = Gt(e);
            this._handleMultiClick(t);
          }
          _handleMultiClick(e) {
            this._getClicks(e).forEach((e) => {
              e.clickCount++;
            });
          }
          _getClicks(e) {
            return this._clicks.filter((t) => t.node === e);
          }
          _checkClicks() {
            var e = [],
              t = nr();
            this._clicks.forEach((r) => {
              !r.mutationAfter &&
                this._lastMutation &&
                (r.mutationAfter =
                  r.timestamp <= this._lastMutation
                    ? this._lastMutation - r.timestamp
                    : void 0),
                !r.scrollAfter &&
                  this._lastScroll &&
                  (r.scrollAfter =
                    r.timestamp <= this._lastScroll
                      ? this._lastScroll - r.timestamp
                      : void 0),
                r.timestamp + this._timeout <= t && e.push(r);
            });
            for (var r = 0, n = e; r < n.length; r++) {
              var a = n[r],
                s = this._clicks.indexOf(a);
              s > -1 &&
                (this._generateBreadcrumbs(a), this._clicks.splice(s, 1));
            }
            this._clicks.length && this._scheduleCheckClicks();
          }
          _generateBreadcrumbs(e) {
            var t = this._replay,
              r = e.scrollAfter && e.scrollAfter <= this._scollTimeout,
              n = e.mutationAfter && e.mutationAfter <= this._threshold,
              a = !r && !n,
              s = e.clickCount,
              i = e.clickBreadcrumb;
            if (a) {
              var o =
                  1e3 *
                  Math.min(e.mutationAfter || this._timeout, this._timeout),
                l = o < 1e3 * this._timeout ? "mutation" : "timeout",
                c = {
                  type: "default",
                  message: i.message,
                  timestamp: i.timestamp,
                  category: "ui.slowClickDetected",
                  data: L(
                    L({}, i.data),
                    {},
                    {
                      url: U.location.href,
                      route: t.getCurrentRoute(),
                      timeAfterClickMs: o,
                      endReason: l,
                      clickCount: s || 1,
                    }
                  ),
                };
              this._addBreadcrumbEvent(t, c);
            } else if (s > 1) {
              var u = {
                type: "default",
                message: i.message,
                timestamp: i.timestamp,
                category: "ui.multiClick",
                data: L(
                  L({}, i.data),
                  {},
                  {
                    url: U.location.href,
                    route: t.getCurrentRoute(),
                    clickCount: s,
                    metric: !0,
                  }
                ),
              };
              this._addBreadcrumbEvent(t, u);
            }
          }
          _scheduleCheckClicks() {
            this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
              (this._checkClickTimeout = setTimeout(
                () => this._checkClicks(),
                1e3
              ));
          }
        }
        var tr,
          rr = ["A", "BUTTON", "INPUT"];
        function nr() {
          return Date.now() / 1e3;
        }
        function ar(e, t) {
          try {
            if (
              !(function (e) {
                return e.type === Zt;
              })(t)
            )
              return;
            var r = t.data.source;
            if (
              (r === rt.Mutation && e.registerMutation(t.timestamp),
              r === rt.Scroll && e.registerScroll(t.timestamp),
              (function (e) {
                return e.data.source === rt.MouseInteraction;
              })(t))
            ) {
              var n = t.data,
                a = n.type,
                s = n.id,
                i = jt.mirror.getNode(s);
              i instanceof HTMLElement && a === nt.Click && e.registerClick(i);
            }
          } catch (o) {}
        }
        function sr(e) {
          return L({ timestamp: Date.now() / 1e3, type: "default" }, e);
        }
        !(function (e) {
          (e[(e.Document = 0)] = "Document"),
            (e[(e.DocumentType = 1)] = "DocumentType"),
            (e[(e.Element = 2)] = "Element"),
            (e[(e.Text = 3)] = "Text"),
            (e[(e.CDATA = 4)] = "CDATA"),
            (e[(e.Comment = 5)] = "Comment");
        })(tr || (tr = {}));
        var ir = new Set([
          "id",
          "class",
          "aria-label",
          "role",
          "name",
          "alt",
          "title",
          "data-test-id",
          "data-testid",
          "disabled",
          "aria-disabled",
          "data-sentry-component",
        ]);
        function or(e) {
          var t = {};
          for (var r in e)
            if (ir.has(r)) {
              var n = r;
              ("data-testid" !== r && "data-test-id" !== r) || (n = "testId"),
                (t[n] = e[r]);
            }
          return t;
        }
        var lr = (e) => (t) => {
          if (e.isEnabled()) {
            var r = (function (e) {
              var t = (function (e) {
                  var t,
                    r = "click" === e.name,
                    n = null;
                  try {
                    (n = r ? Xt(e.event) : $t(e.event)),
                      (t =
                        (0, S.Rt)(n, { maxStringLength: 200 }) || "<unknown>");
                  } catch (a) {
                    t = "<unknown>";
                  }
                  return { target: n, message: t };
                })(e),
                r = t.target,
                n = t.message;
              return sr(L({ category: "ui.".concat(e.name) }, cr(r, n)));
            })(t);
            if (r) {
              var n,
                a,
                s,
                i = "click" === t.name,
                o = i ? t.event : void 0;
              !(i && e.clickDetector && o && o.target) ||
                o.altKey ||
                o.metaKey ||
                o.ctrlKey ||
                o.shiftKey ||
                ((n = e.clickDetector),
                (a = r),
                (s = Xt(t.event)),
                n.handleClick(a, s)),
                Kt(e, r);
            }
          }
        };
        function cr(e, t) {
          var r = jt.mirror.getId(e),
            n = r && jt.mirror.getNode(r),
            a = n && jt.mirror.getMeta(n),
            s =
              a &&
              (function (e) {
                return e.type === tr.Element;
              })(a)
                ? a
                : null;
          return {
            message: t,
            data: s
              ? {
                  nodeId: r,
                  node: {
                    id: r,
                    tagName: s.tagName,
                    textContent: Array.from(s.childNodes)
                      .map((e) => e.type === tr.Text && e.textContent)
                      .filter(Boolean)
                      .map((e) => e.trim())
                      .join(""),
                    attributes: or(s.attributes),
                  },
                }
              : {},
          };
        }
        function ur(e, t) {
          if (e.isEnabled()) {
            e.updateUserActivity();
            var r = (function (e) {
              var t = e.metaKey,
                r = e.shiftKey,
                n = e.ctrlKey,
                a = e.altKey,
                s = e.key,
                i = e.target;
              if (
                !i ||
                (function (e) {
                  return (
                    "INPUT" === e.tagName ||
                    "TEXTAREA" === e.tagName ||
                    e.isContentEditable
                  );
                })(i) ||
                !s
              )
                return null;
              var o = t || n || a,
                l = 1 === s.length;
              if (!o && l) return null;
              var c = (0, S.Rt)(i, { maxStringLength: 200 }) || "<unknown>",
                u = cr(i, c);
              return sr({
                category: "ui.keyDown",
                message: c,
                data: L(
                  L({}, u.data),
                  {},
                  { metaKey: t, shiftKey: r, ctrlKey: n, altKey: a, key: s }
                ),
              });
            })(t);
            r && Kt(e, r);
          }
        }
        var dr = {
          resource: function (e) {
            var t = e.entryType,
              r = e.initiatorType,
              n = e.name,
              a = e.responseEnd,
              s = e.startTime,
              i = e.decodedBodySize,
              o = e.encodedBodySize,
              l = e.responseStatus,
              c = e.transferSize;
            if (["fetch", "xmlhttprequest"].includes(r)) return null;
            return {
              type: "".concat(t, ".").concat(r),
              start: hr(s),
              end: hr(a),
              name: n,
              data: {
                size: c,
                statusCode: l,
                decodedBodySize: i,
                encodedBodySize: o,
              },
            };
          },
          paint: function (e) {
            var t = e.duration,
              r = e.entryType,
              n = e.name,
              a = hr(e.startTime);
            return { type: r, name: n, start: a, end: a + t, data: void 0 };
          },
          navigation: function (e) {
            var t = e.entryType,
              r = e.name,
              n = e.decodedBodySize,
              a = e.duration,
              s = e.domComplete,
              i = e.encodedBodySize,
              o = e.domContentLoadedEventStart,
              l = e.domContentLoadedEventEnd,
              c = e.domInteractive,
              u = e.loadEventStart,
              d = e.loadEventEnd,
              p = e.redirectCount,
              h = e.startTime,
              m = e.transferSize,
              f = e.type;
            if (0 === a) return null;
            return {
              type: "".concat(t, ".").concat(f),
              start: hr(h),
              end: hr(s),
              name: r,
              data: {
                size: m,
                decodedBodySize: n,
                encodedBodySize: i,
                duration: a,
                domInteractive: c,
                domContentLoadedEventStart: o,
                domContentLoadedEventEnd: l,
                loadEventStart: u,
                loadEventEnd: d,
                domComplete: s,
                redirectCount: p,
              },
            };
          },
        };
        function pr(e) {
          return dr[e.entryType] ? dr[e.entryType](e) : null;
        }
        function hr(e) {
          return ((b.Z1 || U.performance.timeOrigin) + e) / 1e3;
        }
        function mr(e) {
          function t(t) {
            e.performanceEntries.includes(t) || e.performanceEntries.push(t);
          }
          function r(e) {
            e.entries.forEach(t);
          }
          var n = [];
          return (
            ["navigation", "paint", "resource"].forEach((e) => {
              n.push((0, D._j)(e, r));
            }),
            n.push(
              (0, D.$A)((t) => {
                var r = t.metric;
                e.replayPerformanceEntries.push(
                  (function (e) {
                    var t = e.entries,
                      r = t[t.length - 1],
                      n = r ? r.element : void 0,
                      a = e.value,
                      s = hr(a);
                    return {
                      type: "largest-contentful-paint",
                      name: "largest-contentful-paint",
                      start: s,
                      end: s,
                      data: {
                        value: a,
                        size: a,
                        nodeId: n ? jt.mirror.getId(n) : void 0,
                      },
                    };
                  })(r)
                );
              })
            ),
            () => {
              n.forEach((e) => e());
            }
          );
        }
        var fr = !1;
        function vr(e, t) {
          fr && (_.kg.info(e), t && gr(e));
        }
        function yr(e, t) {
          fr &&
            (_.kg.info(e),
            t &&
              setTimeout(() => {
                gr(e);
              }, 0));
        }
        function gr(e) {
          (0, u.n_)(
            {
              category: "console",
              data: { logger: "replay" },
              level: "info",
              message: e,
            },
            { level: "info" }
          );
        }
        class kr extends Error {
          constructor() {
            super("Event buffer exceeded maximum size of ".concat(V, "."));
          }
        }
        class Sr {
          constructor() {
            (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
          }
          get hasEvents() {
            return this.events.length > 0;
          }
          get type() {
            return "sync";
          }
          destroy() {
            this.events = [];
          }
          addEvent(e) {
            var t = this;
            return (0, n.Z)(
              o().mark(function r() {
                var n;
                return o().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (
                          ((n = JSON.stringify(e).length),
                          (t._totalSize += n),
                          !(t._totalSize > V))
                        ) {
                          r.next = 4;
                          break;
                        }
                        throw new kr();
                      case 4:
                        t.events.push(e);
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          }
          finish() {
            return new Promise((e) => {
              var t = this.events;
              this.clear(), e(JSON.stringify(t));
            });
          }
          clear() {
            (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
          }
          getEarliestTimestamp() {
            var e = this.events.map((e) => e.timestamp).sort()[0];
            return e ? qt(e) : null;
          }
        }
        class br {
          constructor(e) {
            (this._worker = e), (this._id = 0);
          }
          ensureReady() {
            return (
              this._ensureReadyPromise ||
                (this._ensureReadyPromise = new Promise((e, t) => {
                  this._worker.addEventListener(
                    "message",
                    (r) => {
                      r.data.success ? e() : t();
                    },
                    { once: !0 }
                  ),
                    this._worker.addEventListener(
                      "error",
                      (e) => {
                        t(e);
                      },
                      { once: !0 }
                    );
                })),
              this._ensureReadyPromise
            );
          }
          destroy() {
            vr("[Replay] Destroying compression worker"),
              this._worker.terminate();
          }
          postMessage(e, t) {
            var r = this._getAndIncrementId();
            return new Promise((n, a) => {
              var s = (t) => {
                var i = t.data;
                if (i.method === e && i.id === r) {
                  if (
                    (this._worker.removeEventListener("message", s), !i.success)
                  )
                    return (
                      fr && _.kg.error("[Replay]", i.response),
                      void a(new Error("Error in compression worker"))
                    );
                  n(i.response);
                }
              };
              this._worker.addEventListener("message", s),
                this._worker.postMessage({ id: r, method: e, arg: t });
            });
          }
          _getAndIncrementId() {
            return this._id++;
          }
        }
        class _r {
          constructor(e) {
            (this._worker = new br(e)),
              (this._earliestTimestamp = null),
              (this._totalSize = 0),
              (this.hasCheckout = !1);
          }
          get hasEvents() {
            return !!this._earliestTimestamp;
          }
          get type() {
            return "worker";
          }
          ensureReady() {
            return this._worker.ensureReady();
          }
          destroy() {
            this._worker.destroy();
          }
          addEvent(e) {
            var t = qt(e.timestamp);
            (!this._earliestTimestamp || t < this._earliestTimestamp) &&
              (this._earliestTimestamp = t);
            var r = JSON.stringify(e);
            return (
              (this._totalSize += r.length),
              this._totalSize > V
                ? Promise.reject(new kr())
                : this._sendEventToWorker(r)
            );
          }
          finish() {
            return this._finishRequest();
          }
          clear() {
            (this._earliestTimestamp = null),
              (this._totalSize = 0),
              (this.hasCheckout = !1),
              this._worker.postMessage("clear").then(null, (e) => {
                fr &&
                  _.kg.warn(
                    '[Replay] Sending "clear" message to worker failed',
                    e
                  );
              });
          }
          getEarliestTimestamp() {
            return this._earliestTimestamp;
          }
          _sendEventToWorker(e) {
            return this._worker.postMessage("addEvent", e);
          }
          _finishRequest() {
            var e = this;
            return (0, n.Z)(
              o().mark(function t() {
                var r;
                return o().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e._worker.postMessage("finish");
                      case 2:
                        return (
                          (r = t.sent),
                          (e._earliestTimestamp = null),
                          (e._totalSize = 0),
                          t.abrupt("return", r)
                        );
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          }
        }
        class wr {
          constructor(e) {
            (this._fallback = new Sr()),
              (this._compression = new _r(e)),
              (this._used = this._fallback),
              (this._ensureWorkerIsLoadedPromise =
                this._ensureWorkerIsLoaded());
          }
          get type() {
            return this._used.type;
          }
          get hasEvents() {
            return this._used.hasEvents;
          }
          get hasCheckout() {
            return this._used.hasCheckout;
          }
          set hasCheckout(e) {
            this._used.hasCheckout = e;
          }
          destroy() {
            this._fallback.destroy(), this._compression.destroy();
          }
          clear() {
            return this._used.clear();
          }
          getEarliestTimestamp() {
            return this._used.getEarliestTimestamp();
          }
          addEvent(e) {
            return this._used.addEvent(e);
          }
          finish() {
            var e = this;
            return (0, n.Z)(
              o().mark(function t() {
                return o().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.ensureWorkerIsLoaded();
                      case 2:
                        return t.abrupt("return", e._used.finish());
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          }
          ensureWorkerIsLoaded() {
            return this._ensureWorkerIsLoadedPromise;
          }
          _ensureWorkerIsLoaded() {
            var e = this;
            return (0, n.Z)(
              o().mark(function t() {
                return o().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            e._compression.ensureReady()
                          );
                        case 3:
                          t.next = 9;
                          break;
                        case 5:
                          return (
                            (t.prev = 5),
                            (t.t0 = t.catch(0)),
                            vr(
                              "[Replay] Failed to load the compression worker, falling back to simple buffer"
                            ),
                            t.abrupt("return")
                          );
                        case 9:
                          return (t.next = 11), e._switchToCompressionWorker();
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 5]]
                );
              })
            )();
          }
          _switchToCompressionWorker() {
            var e = this;
            return (0, n.Z)(
              o().mark(function t() {
                var r, n, a, s, i, l, c;
                return o().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (r = e._fallback),
                            (n = r.events),
                            (a = r.hasCheckout),
                            (s = []),
                            (i = N(n));
                          try {
                            for (i.s(); !(l = i.n()).done; )
                              (c = l.value), s.push(e._compression.addEvent(c));
                          } catch (o) {
                            i.e(o);
                          } finally {
                            i.f();
                          }
                          return (
                            (e._compression.hasCheckout = a),
                            (e._used = e._compression),
                            (t.prev = 6),
                            (t.next = 9),
                            Promise.all(s)
                          );
                        case 9:
                          t.next = 14;
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(6)),
                            fr &&
                              _.kg.warn(
                                "[Replay] Failed to add events when switching buffers.",
                                t.t0
                              );
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[6, 11]]
                );
              })
            )();
          }
        }
        function xr(e) {
          var t = e.useCompression,
            r = e.workerUrl;
          if (t && window.Worker) {
            var n = (function (e) {
              try {
                var t =
                  e ||
                  (function () {
                    0;
                    return "";
                  })();
                if (!t) return;
                vr(
                  "[Replay] Using compression worker".concat(
                    e ? " from ".concat(e) : ""
                  )
                );
                var r = new Worker(t);
                return new wr(r);
              } catch (n) {
                vr("[Replay] Failed to create compression worker");
              }
            })(r);
            if (n) return n;
          }
          return vr("[Replay] Using simple buffer"), new Sr();
        }
        function Cr() {
          try {
            return "sessionStorage" in U && !!U.sessionStorage;
          } catch (e) {
            return !1;
          }
        }
        function Tr(e) {
          !(function () {
            if (!Cr()) return;
            try {
              U.sessionStorage.removeItem(B);
            } catch (e) {}
          })(),
            (e.session = void 0);
        }
        function Ir(e) {
          return void 0 !== e && Math.random() < e;
        }
        function Er(e) {
          var t = Date.now();
          return {
            id: e.id || (0, w.DM)(),
            started: e.started || t,
            lastActivity: e.lastActivity || t,
            segmentId: e.segmentId || 0,
            sampled: e.sampled,
            previousSessionId: e.previousSessionId,
          };
        }
        function Rr(e) {
          if (Cr())
            try {
              U.sessionStorage.setItem(B, JSON.stringify(e));
            } catch (t) {}
        }
        function Mr(e) {
          var t = e.sessionSampleRate,
            r = e.allowBuffering,
            n = e.stickySession,
            a = void 0 !== n && n,
            s = (
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            ).previousSessionId,
            i = (function (e, t) {
              return Ir(e) ? "session" : !!t && "buffer";
            })(t, r),
            o = Er({ sampled: i, previousSessionId: s });
          return a && Rr(o), o;
        }
        function Ar(e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : +new Date();
          return null === e || void 0 === t || t < 0 || (0 !== t && e + t <= r);
        }
        function Dr(e, t) {
          var r = t.maxReplayDuration,
            n = t.sessionIdleExpire,
            a = t.targetTime,
            s = void 0 === a ? Date.now() : a;
          return Ar(e.started, r, s) || Ar(e.lastActivity, n, s);
        }
        function Or(e, t) {
          return (
            !!Dr(e, {
              sessionIdleExpire: t.sessionIdleExpire,
              maxReplayDuration: t.maxReplayDuration,
            }) &&
            ("buffer" !== e.sampled || 0 !== e.segmentId)
          );
        }
        function Lr(e, t) {
          var r = e.traceInternals,
            n = e.sessionIdleExpire,
            a = e.maxReplayDuration,
            s = e.previousSessionId,
            i =
              t.stickySession &&
              (function (e) {
                if (!Cr()) return null;
                try {
                  var t = U.sessionStorage.getItem(B);
                  if (!t) return null;
                  var r = JSON.parse(t);
                  return yr("[Replay] Loading existing session", e), Er(r);
                } catch (n) {
                  return null;
                }
              })(r);
          return i
            ? Or(i, { sessionIdleExpire: n, maxReplayDuration: a })
              ? (yr(
                  "[Replay] Session in sessionStorage is expired, creating new one..."
                ),
                Mr(t, { previousSessionId: i.id }))
              : i
            : (yr("[Replay] Creating new session", r),
              Mr(t, { previousSessionId: s }));
        }
        function Nr(e, t, r) {
          return !!Ur(e, t) && (Fr(e, t, r), !0);
        }
        function Fr(e, t, r) {
          return Pr.apply(this, arguments);
        }
        function Pr() {
          return (Pr = (0, n.Z)(
            o().mark(function e(t, r, n) {
              var a, s, i, l;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t.eventBuffer) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", null);
                      case 2:
                        if (
                          ((e.prev = 2),
                          n &&
                            "buffer" === t.recordingMode &&
                            t.eventBuffer.clear(),
                          n && (t.eventBuffer.hasCheckout = !0),
                          (a = t.getOptions()),
                          (s = Br(r, a.beforeAddRecordingEvent)))
                        ) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return");
                      case 9:
                        return (e.next = 11), t.eventBuffer.addEvent(s);
                      case 11:
                        return e.abrupt("return", e.sent);
                      case 14:
                        return (
                          (e.prev = 14),
                          (e.t0 = e.catch(2)),
                          (i =
                            e.t0 && e.t0 instanceof kr
                              ? "addEventSizeExceeded"
                              : "addEvent"),
                          fr && _.kg.error(e.t0),
                          (e.next = 20),
                          t.stop({ reason: i })
                        );
                      case 20:
                        (l = (0, u.s3)()) &&
                          l.recordDroppedEvent("internal_sdk_error", "replay");
                      case 22:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 14]]
              );
            })
          )).apply(this, arguments);
        }
        function Ur(e, t) {
          if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
          var r = qt(t.timestamp);
          return (
            !(r + e.timeouts.sessionIdlePause < Date.now()) &&
            (!(
              r >
              e.getContext().initialTimestamp + e.getOptions().maxReplayDuration
            ) ||
              (vr(
                "[Replay] Skipping event with timestamp ".concat(
                  r,
                  " because it is after maxReplayDuration"
                ),
                e.getOptions()._experiments.traceInternals
              ),
              !1))
          );
        }
        function Br(e, t) {
          try {
            if (
              "function" == typeof t &&
              (function (e) {
                return e.type === tt.Custom;
              })(e)
            )
              return t(e);
          } catch (r) {
            return (
              fr &&
                _.kg.error(
                  "[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
                  r
                ),
              null
            );
          }
          return e;
        }
        function zr(e) {
          return !e.type;
        }
        function Hr(e) {
          return "transaction" === e.type;
        }
        function Wr(e) {
          return "feedback" === e.type;
        }
        function jr(e) {
          var t = (function () {
            var e = (0, u.s3)();
            if (!e) return !1;
            var t = e.getTransport();
            if (!t) return !1;
            return t.send.__sentry__baseTransport__ || !1;
          })();
          return (r, n) => {
            if (e.isEnabled() && (zr(r) || Hr(r))) {
              var a = n && n.statusCode;
              (t && (!a || a < 200 || a >= 300)) ||
                (Hr(r)
                  ? (function (e, t) {
                      var r = e.getContext();
                      t.contexts &&
                        t.contexts.trace &&
                        t.contexts.trace.trace_id &&
                        r.traceIds.size < 100 &&
                        r.traceIds.add(t.contexts.trace.trace_id);
                    })(e, r)
                  : (function (e, t) {
                      var r = e.getContext();
                      t.event_id &&
                        r.errorIds.size < 100 &&
                        r.errorIds.add(t.event_id);
                      if (
                        "buffer" !== e.recordingMode ||
                        !t.tags ||
                        !t.tags.replayId
                      )
                        return;
                      var n = e.getOptions(),
                        a = n.beforeErrorSampling;
                      if ("function" == typeof a && !a(t)) return;
                      setTimeout(() => {
                        e.sendBufferedReplayOrFlush();
                      });
                    })(e, r));
            }
          };
        }
        function Zr(e) {
          return (t) => {
            e.isEnabled() &&
              zr(t) &&
              (function (e, t) {
                var r =
                  t.exception &&
                  t.exception.values &&
                  t.exception.values[0].value;
                if ("string" != typeof r) return;
                if (
                  r.match(
                    /reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/
                  ) ||
                  r.match(
                    /(does not match server-rendered HTML|Hydration failed because)/i
                  )
                ) {
                  Kt(e, sr({ category: "replay.hydrate-error" }));
                }
              })(e, t);
          };
        }
        function qr(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              ? jr(e)
              : void 0;
          return Object.assign(
            (r, n) => {
              if (!e.isEnabled()) return r;
              if (
                (function (e) {
                  return "replay_event" === e.type;
                })(r)
              )
                return delete r.breadcrumbs, r;
              if (!zr(r) && !Hr(r) && !Wr(r)) return r;
              if (!e.checkAndHandleExpiredSession()) return r;
              if (Wr(r))
                return (
                  e.flush(),
                  (r.contexts.feedback.replay_id = e.getSessionId()),
                  (function (e, t) {
                    e.triggerUserActivity(),
                      e.addUpdate(
                        () =>
                          !t.timestamp ||
                          (e.throttledAddEvent({
                            type: tt.Custom,
                            timestamp: 1e3 * t.timestamp,
                            data: {
                              tag: "breadcrumb",
                              payload: {
                                timestamp: t.timestamp,
                                type: "default",
                                category: "sentry.feedback",
                                data: { feedbackId: t.event_id },
                              },
                            },
                          }),
                          !1)
                      );
                  })(e, r),
                  r
                );
              if (
                (function (e, t) {
                  return !(
                    e.type ||
                    !e.exception ||
                    !e.exception.values ||
                    !e.exception.values.length ||
                    !t.originalException ||
                    !t.originalException.__rrweb__
                  );
                })(r, n) &&
                !e.getOptions()._experiments.captureExceptions
              )
                return (
                  fr &&
                    _.kg.log("[Replay] Ignoring error from rrweb internals", r),
                  null
                );
              var a = (function (e, t) {
                return (
                  "buffer" === e.recordingMode &&
                  t.message !== H &&
                  !(!t.exception || t.type) &&
                  Ir(e.getOptions().errorSampleRate)
                );
              })(e, r);
              return (
                (a || "session" === e.recordingMode) &&
                  (r.tags = L(
                    L({}, r.tags),
                    {},
                    { replayId: e.getSessionId() }
                  )),
                t && t(r, { statusCode: 200 }),
                r
              );
            },
            { id: "Replay" }
          );
        }
        function Vr(e, t) {
          return t.map((t) => {
            var r = t.type,
              n = t.start,
              a = t.end,
              s = t.name,
              i = t.data,
              o = e.throttledAddEvent({
                type: tt.Custom,
                timestamp: n,
                data: {
                  tag: "performanceSpan",
                  payload: {
                    op: r,
                    description: s,
                    startTimestamp: n,
                    endTimestamp: a,
                    data: i,
                  },
                },
              });
            return "string" == typeof o ? Promise.resolve(null) : o;
          });
        }
        function Kr(e) {
          return (t) => {
            if (e.isEnabled()) {
              var r = (function (e) {
                var t = e.from,
                  r = e.to,
                  n = Date.now() / 1e3;
                return {
                  type: "navigation.push",
                  start: n,
                  end: n,
                  name: r,
                  data: { previous: t },
                };
              })(t);
              null !== r &&
                (e.getContext().urls.push(r.name),
                e.triggerUserActivity(),
                e.addUpdate(() => (Vr(e, [r]), !1)));
            }
          };
        }
        function Jr(e, t) {
          e.isEnabled() &&
            null !== t &&
            ((function (e, t) {
              return (
                (!fr || !e.getOptions()._experiments.traceInternals) &&
                (0, d.W)(t, (0, u.s3)())
              );
            })(e, t.name) ||
              e.addUpdate(() => (Vr(e, [t]), !0)));
        }
        function Yr(e) {
          return (t) => {
            if (e.isEnabled()) {
              var r = (function (e) {
                var t = e.startTimestamp,
                  r = e.endTimestamp,
                  n = e.xhr[x.xU];
                if (!t || !r || !n) return null;
                var a = n.method,
                  s = n.url,
                  i = n.status_code;
                return void 0 === s
                  ? null
                  : {
                      type: "resource.xhr",
                      name: s,
                      start: t / 1e3,
                      end: r / 1e3,
                      data: { method: a, statusCode: i },
                    };
              })(t);
              Jr(e, r);
            }
          };
        }
        function Gr(e, t) {
          if (e)
            try {
              if ("string" == typeof e) return t.encode(e).length;
              if (e instanceof URLSearchParams)
                return t.encode(e.toString()).length;
              if (e instanceof FormData) {
                var r = an(e);
                return t.encode(r).length;
              }
              if (e instanceof Blob) return e.size;
              if (e instanceof ArrayBuffer) return e.byteLength;
            } catch (n) {}
        }
        function Xr(e) {
          if (e) {
            var t = parseInt(e, 10);
            return isNaN(t) ? void 0 : t;
          }
        }
        function $r(e) {
          try {
            if ("string" == typeof e) return [e];
            if (e instanceof URLSearchParams) return [e.toString()];
            if (e instanceof FormData) return [an(e)];
            if (!e) return [void 0];
          } catch (t) {
            return (
              fr && _.kg.warn("[Replay] Failed to serialize body", e),
              [void 0, "BODY_PARSE_ERROR"]
            );
          }
          return (
            fr &&
              _.kg.info(
                "[Replay] Skipping network body because of body type",
                e
              ),
            [void 0, "UNPARSEABLE_BODY_TYPE"]
          );
        }
        function Qr(e, t) {
          if (!e)
            return { headers: {}, size: void 0, _meta: { warnings: [t] } };
          var r = L({}, e._meta),
            n = r.warnings || [];
          return (r.warnings = [...n, t]), (e._meta = r), e;
        }
        function en(e, t) {
          if (!t) return null;
          var r = t.startTimestamp,
            n = t.endTimestamp,
            a = t.url,
            s = t.method,
            i = t.statusCode,
            o = t.request,
            l = t.response;
          return {
            type: e,
            start: r / 1e3,
            end: n / 1e3,
            name: a,
            data: (0, k.Jr)({
              method: s,
              statusCode: i,
              request: o,
              response: l,
            }),
          };
        }
        function tn(e) {
          return { headers: {}, size: e, _meta: { warnings: ["URL_SKIPPED"] } };
        }
        function rn(e, t, r) {
          if (t || 0 !== Object.keys(e).length) {
            if (!t) return { headers: e };
            if (!r) return { headers: e, size: t };
            var n = { headers: e, size: t },
              a = (function (e) {
                if (!e || "string" != typeof e) return { body: e };
                var t = e.length > Z,
                  r =
                    ((n = e),
                    (a = n[0]),
                    (s = n[n.length - 1]),
                    ("[" === a && "]" === s) || ("{" === a && "}" === s));
                var n, a, s;
                if (t) {
                  var i = e.slice(0, Z);
                  return r
                    ? { body: i, warnings: ["MAYBE_JSON_TRUNCATED"] }
                    : { body: "".concat(i, "…"), warnings: ["TEXT_TRUNCATED"] };
                }
                if (r)
                  try {
                    return { body: JSON.parse(e) };
                  } catch (o) {}
                return { body: e };
              })(r),
              s = a.body,
              i = a.warnings;
            return (
              (n.body = s), i && i.length > 0 && (n._meta = { warnings: i }), n
            );
          }
        }
        function nn(e, t) {
          return Object.keys(e).reduce((r, n) => {
            var a = n.toLowerCase();
            return t.includes(a) && e[n] && (r[a] = e[n]), r;
          }, {});
        }
        function an(e) {
          return new URLSearchParams(e).toString();
        }
        function sn(e, t) {
          var r = (function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : U.document.baseURI;
            if (
              e.startsWith("http://") ||
              e.startsWith("https://") ||
              e.startsWith(U.location.origin)
            )
              return e;
            var r = new URL(e, t);
            if (r.origin !== new URL(t).origin) return e;
            var n = r.href;
            if (!e.endsWith("/") && n.endsWith("/")) return n.slice(0, -1);
            return n;
          })(e);
          return (0, C.U0)(r, t);
        }
        function on() {
          return (on = (0, n.Z)(
            o().mark(function e(t, r, n) {
              var a, s;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), ln(t, r, n);
                      case 3:
                        (a = e.sent),
                          (s = en("resource.fetch", a)),
                          Jr(n.replay, s),
                          (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          fr &&
                            _.kg.error(
                              "[Replay] Failed to capture fetch breadcrumb",
                              e.t0
                            );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          )).apply(this, arguments);
        }
        function ln(e, t, r) {
          return cn.apply(this, arguments);
        }
        function cn() {
          return (cn = (0, n.Z)(
            o().mark(function e(t, r, n) {
              var a, s, i, l, c, u, d, p, h, m, f, v, y, g, k;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = Date.now()),
                        (s = r.startTimestamp),
                        (i = void 0 === s ? a : s),
                        (l = r.endTimestamp),
                        (c = void 0 === l ? a : l),
                        (u = t.data),
                        (d = u.url),
                        (p = u.method),
                        (h = u.status_code),
                        (m = void 0 === h ? 0 : h),
                        (f = u.request_body_size),
                        (v = u.response_body_size),
                        (y =
                          sn(d, n.networkDetailAllowUrls) &&
                          !sn(d, n.networkDetailDenyUrls)),
                        (g = y ? un(n, r.input, f) : tn(f)),
                        (e.next = 7),
                        dn(y, n, r.response, v)
                      );
                    case 7:
                      return (
                        (k = e.sent),
                        e.abrupt("return", {
                          startTimestamp: i,
                          endTimestamp: c,
                          url: d,
                          method: p,
                          statusCode: m,
                          request: g,
                          response: k,
                        })
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function un(e, t, r) {
          var n = e.networkCaptureBodies,
            s = e.networkRequestHeaders,
            i = t
              ? (function (e, t) {
                  if (1 === e.length && "string" != typeof e[0])
                    return gn(e[0], t);
                  if (2 === e.length) return gn(e[1], t);
                  return {};
                })(t, s)
              : {};
          if (!n) return rn(i, r, void 0);
          var o = $r(vn(t)),
            l = (0, a.Z)(o, 2),
            c = l[0],
            u = l[1],
            d = rn(i, r, c);
          return u ? Qr(d, u) : d;
        }
        function dn(e, t, r, n) {
          return pn.apply(this, arguments);
        }
        function pn() {
          return (pn = (0, n.Z)(
            o().mark(function e(t, r, n, s) {
              var i, l, c, u, d, p, h, m, f;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = r.networkCaptureBodies),
                        (l = r.textEncoder),
                        (c = r.networkResponseHeaders),
                        t || void 0 === s)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", tn(s));
                    case 3:
                      if (
                        ((u = n ? yn(n.headers, c) : {}),
                        n && (i || void 0 === s))
                      ) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return", rn(u, s, void 0));
                    case 6:
                      return (e.next = 8), mn(n);
                    case 8:
                      if (
                        ((d = e.sent),
                        (p = (0, a.Z)(d, 2)),
                        (h = p[0]),
                        (m = p[1]),
                        (f = hn(h, {
                          networkCaptureBodies: i,
                          textEncoder: l,
                          responseBodySize: s,
                          captureDetails: t,
                          headers: u,
                        })),
                        !m)
                      ) {
                        e.next = 15;
                        break;
                      }
                      return e.abrupt("return", Qr(f, m));
                    case 15:
                      return e.abrupt("return", f);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function hn(e, t) {
          var r = t.networkCaptureBodies,
            n = t.textEncoder,
            a = t.responseBodySize,
            s = t.captureDetails,
            i = t.headers;
          try {
            var o = e && e.length && void 0 === a ? Gr(e, n) : a;
            return s ? rn(i, o, r ? e : void 0) : tn(o);
          } catch (l) {
            return (
              fr && _.kg.warn("[Replay] Failed to serialize response body", l),
              rn(i, a, void 0)
            );
          }
        }
        function mn(e) {
          return fn.apply(this, arguments);
        }
        function fn() {
          return (fn = (0, n.Z)(
            o().mark(function e(t) {
              var r, n;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((r = kn(t))) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return", [void 0, "BODY_PARSE_ERROR"]);
                      case 3:
                        return (e.prev = 3), (e.next = 6), Sn(r);
                      case 6:
                        return (n = e.sent), e.abrupt("return", [n]);
                      case 10:
                        return (
                          (e.prev = 10),
                          (e.t0 = e.catch(3)),
                          fr &&
                            _.kg.warn(
                              "[Replay] Failed to get text body from response",
                              e.t0
                            ),
                          e.abrupt("return", [void 0, "BODY_PARSE_ERROR"])
                        );
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 10]]
              );
            })
          )).apply(this, arguments);
        }
        function vn() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          if (2 === e.length && "object" == typeof e[1]) return e[1].body;
        }
        function yn(e, t) {
          var r = {};
          return (
            t.forEach((t) => {
              e.get(t) && (r[t] = e.get(t));
            }),
            r
          );
        }
        function gn(e, t) {
          if (!e) return {};
          var r = e.headers;
          return r
            ? r instanceof Headers
              ? yn(r, t)
              : Array.isArray(r)
              ? {}
              : nn(r, t)
            : {};
        }
        function kn(e) {
          try {
            return e.clone();
          } catch (t) {
            fr && _.kg.warn("[Replay] Failed to clone response body", t);
          }
        }
        function Sn(e) {
          return new Promise((t, r) => {
            var n = setTimeout(
              () => r(new Error("Timeout while trying to read response body")),
              500
            );
            (function (e) {
              return bn.apply(this, arguments);
            })(e)
              .then(
                (e) => t(e),
                (e) => r(e)
              )
              .finally(() => clearTimeout(n));
          });
        }
        function bn() {
          return (bn = (0, n.Z)(
            o().mark(function e(t) {
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.text();
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function _n() {
          return (_n = (0, n.Z)(
            o().mark(function e(t, r, n) {
              var a, s;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      try {
                        (a = xn(t, r, n)),
                          (s = en("resource.xhr", a)),
                          Jr(n.replay, s);
                      } catch (i) {
                        fr &&
                          _.kg.error(
                            "[Replay] Failed to capture xhr breadcrumb",
                            i
                          );
                      }
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function wn(e, t, r) {
          var n = t.xhr,
            a = t.input;
          if (n) {
            var s = Gr(a, r.textEncoder),
              i = n.getResponseHeader("content-length")
                ? Xr(n.getResponseHeader("content-length"))
                : (function (e, t, r) {
                    try {
                      return Gr(
                        "json" === t && e && "object" == typeof e
                          ? JSON.stringify(e)
                          : e,
                        r
                      );
                    } catch (n) {
                      return;
                    }
                  })(n.response, n.responseType, r.textEncoder);
            void 0 !== s && (e.data.request_body_size = s),
              void 0 !== i && (e.data.response_body_size = i);
          }
        }
        function xn(e, t, r) {
          var n = Date.now(),
            s = t.startTimestamp,
            i = void 0 === s ? n : s,
            o = t.endTimestamp,
            l = void 0 === o ? n : o,
            c = t.input,
            u = t.xhr,
            d = e.data,
            p = d.url,
            h = d.method,
            m = d.status_code,
            f = void 0 === m ? 0 : m,
            v = d.request_body_size,
            y = d.response_body_size;
          if (!p) return null;
          if (
            !u ||
            !sn(p, r.networkDetailAllowUrls) ||
            sn(p, r.networkDetailDenyUrls)
          )
            return {
              startTimestamp: i,
              endTimestamp: l,
              url: p,
              method: h,
              statusCode: f,
              request: tn(v),
              response: tn(y),
            };
          var g = u[x.xU],
            k = g ? nn(g.request_headers, r.networkRequestHeaders) : {},
            S = nn(
              (function (e) {
                var t = e.getAllResponseHeaders();
                if (!t) return {};
                return t.split("\r\n").reduce((e, t) => {
                  var r = t.split(": "),
                    n = (0, a.Z)(r, 2),
                    s = n[0],
                    i = n[1];
                  return (e[s.toLowerCase()] = i), e;
                }, {});
              })(u),
              r.networkResponseHeaders
            ),
            b = r.networkCaptureBodies ? $r(c) : [void 0],
            w = (0, a.Z)(b, 2),
            C = w[0],
            T = w[1],
            I = r.networkCaptureBodies
              ? (function (e) {
                  var t = [];
                  try {
                    return [e.responseText];
                  } catch (r) {
                    t.push(r);
                  }
                  try {
                    return (function (e, t) {
                      try {
                        if ("string" == typeof e) return [e];
                        if (e instanceof Document) return [e.body.outerHTML];
                        if ("json" === t && e && "object" == typeof e)
                          return [JSON.stringify(e)];
                        if (!e) return [void 0];
                      } catch (r) {
                        return (
                          fr &&
                            _.kg.warn("[Replay] Failed to serialize body", e),
                          [void 0, "BODY_PARSE_ERROR"]
                        );
                      }
                      return (
                        fr &&
                          _.kg.info(
                            "[Replay] Skipping network body because of body type",
                            e
                          ),
                        [void 0, "UNPARSEABLE_BODY_TYPE"]
                      );
                    })(e.response, e.responseType);
                  } catch (r) {
                    t.push(r);
                  }
                  return (
                    fr &&
                      _.kg.warn(
                        "[Replay] Failed to get xhr response body",
                        ...t
                      ),
                    [void 0]
                  );
                })(u)
              : [void 0],
            E = (0, a.Z)(I, 2),
            R = E[0],
            M = E[1],
            A = rn(k, v, C),
            D = rn(S, y, R);
          return {
            startTimestamp: i,
            endTimestamp: l,
            url: p,
            method: h,
            statusCode: f,
            request: T ? Qr(A, T) : A,
            response: M ? Qr(D, M) : D,
          };
        }
        function Cn(e) {
          var t = (0, u.s3)();
          try {
            var r = new TextEncoder(),
              n = e.getOptions(),
              a = {
                replay: e,
                textEncoder: r,
                networkDetailAllowUrls: n.networkDetailAllowUrls,
                networkDetailDenyUrls: n.networkDetailDenyUrls,
                networkCaptureBodies: n.networkCaptureBodies,
                networkRequestHeaders: n.networkRequestHeaders,
                networkResponseHeaders: n.networkResponseHeaders,
              };
            t && t.on
              ? t.on("beforeAddBreadcrumb", (e, t) =>
                  (function (e, t, r) {
                    if (!t.data) return;
                    try {
                      (function (e) {
                        return "xhr" === e.category;
                      })(t) &&
                        (function (e) {
                          return e && e.xhr;
                        })(r) &&
                        (wn(t, r, e),
                        (function (e, t, r) {
                          _n.apply(this, arguments);
                        })(t, r, e)),
                        (function (e) {
                          return "fetch" === e.category;
                        })(t) &&
                          (function (e) {
                            return e && e.response;
                          })(r) &&
                          ((function (e, t, r) {
                            var n = t.input,
                              a = t.response,
                              s = Gr(n ? vn(n) : void 0, r.textEncoder),
                              i = a
                                ? Xr(a.headers.get("content-length"))
                                : void 0;
                            void 0 !== s && (e.data.request_body_size = s),
                              void 0 !== i && (e.data.response_body_size = i);
                          })(t, r, e),
                          (function (e, t, r) {
                            on.apply(this, arguments);
                          })(t, r, e));
                    } catch (n) {
                      fr &&
                        _.kg.warn("Error when enriching network breadcrumb");
                    }
                  })(a, e, t)
                )
              : ((0, T.U)(
                  (function (e) {
                    return (t) => {
                      if (e.isEnabled()) {
                        var r = (function (e) {
                          var t = e.startTimestamp,
                            r = e.endTimestamp,
                            n = e.fetchData,
                            a = e.response;
                          if (!r) return null;
                          var s = n.method;
                          return {
                            type: "resource.fetch",
                            start: t / 1e3,
                            end: r / 1e3,
                            name: n.url,
                            data: {
                              method: s,
                              statusCode: a ? a.status : void 0,
                            },
                          };
                        })(t);
                        Jr(e, r);
                      }
                    };
                  })(e)
                ),
                (0, x.UK)(Yr(e)));
          } catch (s) {}
        }
        var Tn = null;
        var In = (e) => (t) => {
          if (e.isEnabled()) {
            var r = (function (e) {
              var t = e.getLastBreadcrumb && e.getLastBreadcrumb();
              if (Tn === t || !t) return null;
              if (
                ((Tn = t),
                !(function (e) {
                  return !!e.category;
                })(t) ||
                  [
                    "fetch",
                    "xhr",
                    "sentry.event",
                    "sentry.transaction",
                  ].includes(t.category) ||
                  t.category.startsWith("ui."))
              )
                return null;
              if ("console" === t.category)
                return (function (e) {
                  var t = e.data && e.data.arguments;
                  if (!Array.isArray(t) || 0 === t.length) return sr(e);
                  var r = !1,
                    n = t.map((e) => {
                      if (!e) return e;
                      if ("string" == typeof e)
                        return e.length > q
                          ? ((r = !0), "".concat(e.slice(0, q), "…"))
                          : e;
                      if ("object" == typeof e)
                        try {
                          var t = (0, g.Fv)(e, 7);
                          return JSON.stringify(t).length > q
                            ? ((r = !0),
                              "".concat(
                                JSON.stringify(t, null, 2).slice(0, q),
                                "…"
                              ))
                            : t;
                        } catch (n) {}
                      return e;
                    });
                  return sr(
                    L(
                      L({}, e),
                      {},
                      {
                        data: L(
                          L({}, e.data),
                          {},
                          { arguments: n },
                          r
                            ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } }
                            : {}
                        ),
                      }
                    )
                  );
                })(t);
              return sr(t);
            })(t);
            r && Kt(e, r);
          }
        };
        function En(e) {
          return !(!e || !e.on);
        }
        function Rn(e) {
          return Mn.apply(this, arguments);
        }
        function Mn() {
          return (Mn = (0, n.Z)(
            o().mark(function e(t) {
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          e.abrupt(
                            "return",
                            Promise.all(
                              Vr(t, [
                                ((r = U.performance.memory),
                                (n = void 0),
                                (a = void 0),
                                (s = void 0),
                                (i = void 0),
                                (n = r.jsHeapSizeLimit),
                                (a = r.totalJSHeapSize),
                                (s = r.usedJSHeapSize),
                                (i = Date.now() / 1e3),
                                {
                                  type: "memory",
                                  name: "memory",
                                  start: i,
                                  end: i,
                                  data: {
                                    memory: {
                                      jsHeapSizeLimit: n,
                                      totalJSHeapSize: a,
                                      usedJSHeapSize: s,
                                    },
                                  },
                                }),
                              ])
                            )
                          )
                        );
                      case 4:
                        return (
                          (e.prev = 4),
                          (e.t0 = e.catch(0)),
                          e.abrupt("return", [])
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                  var r, n, a, s, i;
                },
                e,
                null,
                [[0, 4]]
              );
            })
          )).apply(this, arguments);
        }
        function An(e) {
          var t = !1;
          return (r, n) => {
            if (e.checkAndHandleExpiredSession()) {
              var a = n || !t;
              (t = !0),
                e.clickDetector && ar(e.clickDetector, r),
                e.addUpdate(() => {
                  if (
                    ("buffer" === e.recordingMode && a && e.setInitialState(),
                    !Nr(e, r, a))
                  )
                    return !0;
                  if (!a) return !1;
                  if (
                    ((function (e, t) {
                      if (!t || !e.session || 0 !== e.session.segmentId) return;
                      Nr(
                        e,
                        (function (e) {
                          var t = e.getOptions();
                          return {
                            type: tt.Custom,
                            timestamp: Date.now(),
                            data: {
                              tag: "options",
                              payload: {
                                shouldRecordCanvas: e.isRecordingCanvas(),
                                sessionSampleRate: t.sessionSampleRate,
                                errorSampleRate: t.errorSampleRate,
                                useCompressionOption: t.useCompression,
                                blockAllMedia: t.blockAllMedia,
                                maskAllText: t.maskAllText,
                                maskAllInputs: t.maskAllInputs,
                                useCompression:
                                  !!e.eventBuffer &&
                                  "worker" === e.eventBuffer.type,
                                networkDetailHasUrls:
                                  t.networkDetailAllowUrls.length > 0,
                                networkCaptureBodies: t.networkCaptureBodies,
                                networkRequestHasHeaders:
                                  t.networkRequestHeaders.length > 0,
                                networkResponseHasHeaders:
                                  t.networkResponseHeaders.length > 0,
                              },
                            },
                          };
                        })(e),
                        !1
                      );
                    })(e, a),
                    e.session && e.session.previousSessionId)
                  )
                    return !0;
                  if (
                    "buffer" === e.recordingMode &&
                    e.session &&
                    e.eventBuffer
                  ) {
                    var t = e.eventBuffer.getEarliestTimestamp();
                    t &&
                      (vr(
                        "[Replay] Updating session start time to earliest event in buffer to ".concat(
                          new Date(t)
                        ),
                        e.getOptions()._experiments.traceInternals
                      ),
                      (e.session.started = t),
                      e.getOptions().stickySession && Rr(e.session));
                  }
                  return "session" === e.recordingMode && e.flush(), !0;
                });
            } else
              fr &&
                _.kg.warn(
                  "[Replay] Received replay event after session expired."
                );
          };
        }
        function Dn(e, t, r, n) {
          return (0, R.Jd)((0, R.Cd)(e, (0, R.HY)(e), n, r), [
            [{ type: "replay_event" }, e],
            [
              {
                type: "replay_recording",
                length:
                  "string" == typeof t
                    ? new TextEncoder().encode(t).length
                    : t.length,
              },
              t,
            ],
          ]);
        }
        function On(e) {
          var t,
            r = e.recordingData,
            n = e.headers,
            a = "".concat(JSON.stringify(n), "\n");
          if ("string" == typeof r) t = "".concat(a).concat(r);
          else {
            var s = new TextEncoder().encode(a);
            (t = new Uint8Array(s.length + r.length)).set(s),
              t.set(r, s.length);
          }
          return t;
        }
        function Ln(e) {
          return Nn.apply(this, arguments);
        }
        function Nn() {
          return (Nn = (0, n.Z)(
            o().mark(function e(t) {
              var r, n, a, s, i, l, c, u, d, p, f;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.client),
                        (n = t.scope),
                        (a = t.replayId),
                        (s = t.event),
                        (i =
                          "object" != typeof r._integrations ||
                          null === r._integrations ||
                          Array.isArray(r._integrations)
                            ? void 0
                            : Object.keys(r._integrations)),
                        (l = { event_id: a, integrations: i }),
                        r.emit && r.emit("preprocessEvent", s, l),
                        (e.next = 6),
                        (0, h.R)(r.getOptions(), s, l, n, r, (0, m.aF)())
                      );
                    case 6:
                      if ((c = e.sent)) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 9:
                      return (
                        (c.platform = c.platform || "javascript"),
                        (u = r.getSdkMetadata && r.getSdkMetadata()),
                        (d = (u && u.sdk) || {}),
                        (p = d.name),
                        (f = d.version),
                        (c.sdk = L(
                          L({}, c.sdk),
                          {},
                          {
                            name: p || "sentry.javascript.unknown",
                            version: f || "0.0.0",
                          }
                        )),
                        e.abrupt("return", c)
                      );
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function Fn(e) {
          return Pn.apply(this, arguments);
        }
        function Pn() {
          return (Pn = (0, n.Z)(
            o().mark(function e(t) {
              var r, n, a, s, i, l, c, d, p, h, m, f, v, y, g, k, S, b, _, w, x;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = t.recordingData),
                          (n = t.replayId),
                          (a = t.segmentId),
                          (s = t.eventContext),
                          (i = t.timestamp),
                          (l = t.session),
                          (c = On({
                            recordingData: r,
                            headers: { segment_id: a },
                          })),
                          (d = s.urls),
                          (p = s.errorIds),
                          (h = s.traceIds),
                          (m = s.initialTimestamp),
                          (f = (0, u.s3)()),
                          (v = (0, u.nZ)()),
                          (y = f && f.getTransport()),
                          (g = f && f.getDsn()),
                          f && y && g && l.sampled)
                        ) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return");
                      case 9:
                        return (
                          (k = {
                            type: z,
                            replay_start_timestamp: m / 1e3,
                            timestamp: i / 1e3,
                            error_ids: p,
                            trace_ids: h,
                            urls: d,
                            replay_id: n,
                            segment_id: a,
                            replay_type: l.sampled,
                          }),
                          (e.next = 12),
                          Ln({ scope: v, client: f, replayId: n, event: k })
                        );
                      case 12:
                        if ((S = e.sent)) {
                          e.next = 17;
                          break;
                        }
                        return (
                          f.recordDroppedEvent("event_processor", "replay", k),
                          vr(
                            "An event processor returned `null`, will not send event."
                          ),
                          e.abrupt("return")
                        );
                      case 17:
                        return (
                          delete S.sdkProcessingMetadata,
                          (b = Dn(S, c, g, f.getOptions().tunnel)),
                          (e.prev = 19),
                          (e.next = 22),
                          y.send(b)
                        );
                      case 22:
                        (_ = e.sent), (e.next = 30);
                        break;
                      case 25:
                        (e.prev = 25), (e.t0 = e.catch(19)), (w = new Error(H));
                        try {
                          w.cause = e.t0;
                        } catch (o) {}
                        throw w;
                      case 30:
                        if (_) {
                          e.next = 32;
                          break;
                        }
                        return e.abrupt("return", _);
                      case 32:
                        if (
                          "number" != typeof _.statusCode ||
                          !(_.statusCode < 200 || _.statusCode >= 300)
                        ) {
                          e.next = 34;
                          break;
                        }
                        throw new Un(_.statusCode);
                      case 34:
                        if (((x = (0, M.WG)({}, _)), !(0, M.Q)(x, "replay"))) {
                          e.next = 37;
                          break;
                        }
                        throw new Bn(x);
                      case 37:
                        return e.abrupt("return", _);
                      case 38:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[19, 25]]
              );
            })
          )).apply(this, arguments);
        }
        class Un extends Error {
          constructor(e) {
            super("Transport returned status code ".concat(e));
          }
        }
        class Bn extends Error {
          constructor(e) {
            super("Rate limit hit"), (this.rateLimits = e);
          }
        }
        function zn(e) {
          return Hn.apply(this, arguments);
        }
        function Hn() {
          return (
            (Hn = (0, n.Z)(
              o().mark(function e(t) {
                var r,
                  a,
                  s,
                  i,
                  l = arguments;
                return o().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((r =
                              l.length > 1 && void 0 !== l[1]
                                ? l[1]
                                : { count: 0, interval: W }),
                            (a = t.recordingData),
                            (s = t.options),
                            a.length)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt("return");
                        case 4:
                          return (e.prev = 4), (e.next = 7), Fn(t);
                        case 7:
                          return e.abrupt("return", !0);
                        case 10:
                          if (
                            ((e.prev = 10),
                            (e.t0 = e.catch(4)),
                            !(e.t0 instanceof Un || e.t0 instanceof Bn))
                          ) {
                            e.next = 14;
                            break;
                          }
                          throw e.t0;
                        case 14:
                          if (
                            ((0, u.v)("Replays", { _retryCount: r.count }),
                            fr &&
                              s._experiments &&
                              s._experiments.captureExceptions &&
                              (0, u.Tb)(e.t0),
                            !(r.count >= j))
                          ) {
                            e.next = 20;
                            break;
                          }
                          i = new Error(
                            "".concat(H, " - max retries exceeded")
                          );
                          try {
                            i.cause = e.t0;
                          } catch (c) {}
                          throw i;
                        case 20:
                          return (
                            (r.interval *= ++r.count),
                            e.abrupt(
                              "return",
                              new Promise((e, a) => {
                                setTimeout(
                                  (0, n.Z)(
                                    o().mark(function n() {
                                      return o().wrap(
                                        function (n) {
                                          for (;;)
                                            switch ((n.prev = n.next)) {
                                              case 0:
                                                return (
                                                  (n.prev = 0),
                                                  (n.next = 3),
                                                  zn(t, r)
                                                );
                                              case 3:
                                                e(!0), (n.next = 9);
                                                break;
                                              case 6:
                                                (n.prev = 6),
                                                  (n.t0 = n.catch(0)),
                                                  a(n.t0);
                                              case 9:
                                              case "end":
                                                return n.stop();
                                            }
                                        },
                                        n,
                                        null,
                                        [[0, 6]]
                                      );
                                    })
                                  ),
                                  r.interval
                                );
                              })
                            )
                          );
                        case 22:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 10]]
                );
              })
            )),
            Hn.apply(this, arguments)
          );
        }
        var Wn = "__THROTTLED";
        function jn(e, t, r) {
          var n = new Map(),
            a = !1;
          return function () {
            var s = Math.floor(Date.now() / 1e3);
            if (
              (((e) => {
                var t = e - r;
                n.forEach((e, r) => {
                  r < t && n.delete(r);
                });
              })(s),
              [...n.values()].reduce((e, t) => e + t, 0) >= t)
            ) {
              var i = a;
              return (a = !0), i ? "__SKIPPED" : Wn;
            }
            a = !1;
            var o = n.get(s) || 0;
            return n.set(s, o + 1), e(...arguments);
          };
        }
        class Zn {
          constructor(e) {
            var t = e.options,
              r = e.recordingOptions;
            Zn.prototype.__init.call(this),
              Zn.prototype.__init2.call(this),
              Zn.prototype.__init3.call(this),
              Zn.prototype.__init4.call(this),
              Zn.prototype.__init5.call(this),
              Zn.prototype.__init6.call(this),
              (this.eventBuffer = null),
              (this.performanceEntries = []),
              (this.replayPerformanceEntries = []),
              (this.recordingMode = "session"),
              (this.timeouts = {
                sessionIdlePause: 3e5,
                sessionIdleExpire: 9e5,
              }),
              (this._lastActivity = Date.now()),
              (this._isEnabled = !1),
              (this._isPaused = !1),
              (this._hasInitializedCoreListeners = !1),
              (this._context = {
                errorIds: new Set(),
                traceIds: new Set(),
                urls: [],
                initialTimestamp: Date.now(),
                initialUrl: "",
              }),
              (this._recordingOptions = r),
              (this._options = t),
              (this._debouncedFlush = (function (e, t, r) {
                var n,
                  a,
                  s,
                  i = r && r.maxWait ? Math.max(r.maxWait, t) : 0;
                function o() {
                  return l(), (n = e());
                }
                function l() {
                  void 0 !== a && clearTimeout(a),
                    void 0 !== s && clearTimeout(s),
                    (a = s = void 0);
                }
                function c() {
                  return (
                    a && clearTimeout(a),
                    (a = setTimeout(o, t)),
                    i && void 0 === s && (s = setTimeout(o, i)),
                    n
                  );
                }
                return (
                  (c.cancel = l),
                  (c.flush = function () {
                    return void 0 !== a || void 0 !== s ? o() : n;
                  }),
                  c
                );
              })(() => this._flush(), this._options.flushMinDelay, {
                maxWait: this._options.flushMaxDelay,
              })),
              (this._throttledAddEvent = jn(
                (e, t) =>
                  (function (e, t, r) {
                    return Ur(e, t) ? Fr(e, t, r) : Promise.resolve(null);
                  })(this, e, t),
                300,
                5
              ));
            var n = this.getOptions(),
              a = n.slowClickTimeout,
              s = n.slowClickIgnoreSelectors,
              i = a
                ? {
                    threshold: Math.min(3e3, a),
                    timeout: a,
                    scrollTimeout: 300,
                    ignoreSelector: s ? s.join(",") : "",
                  }
                : void 0;
            i && (this.clickDetector = new er(this, i));
          }
          getContext() {
            return this._context;
          }
          isEnabled() {
            return this._isEnabled;
          }
          isPaused() {
            return this._isPaused;
          }
          isRecordingCanvas() {
            return Boolean(this._canvas);
          }
          getOptions() {
            return this._options;
          }
          initializeSampling(e) {
            var t = this._options,
              r = t.errorSampleRate,
              n = t.sessionSampleRate;
            (r <= 0 && n <= 0) ||
              (this._initializeSessionForSampling(e),
              this.session
                ? !1 !== this.session.sampled &&
                  ((this.recordingMode =
                    "buffer" === this.session.sampled &&
                    0 === this.session.segmentId
                      ? "buffer"
                      : "session"),
                  yr(
                    "[Replay] Starting replay in ".concat(
                      this.recordingMode,
                      " mode"
                    ),
                    this._options._experiments.traceInternals
                  ),
                  this._initializeRecording())
                : this._handleException(
                    new Error("Unable to initialize and create session")
                  ));
          }
          start() {
            if (this._isEnabled && "session" === this.recordingMode)
              throw new Error("Replay recording is already in progress");
            if (this._isEnabled && "buffer" === this.recordingMode)
              throw new Error(
                "Replay buffering is in progress, call `flush()` to save the replay"
              );
            yr(
              "[Replay] Starting replay in session mode",
              this._options._experiments.traceInternals
            );
            var e = Lr(
              {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                traceInternals: this._options._experiments.traceInternals,
              },
              {
                stickySession: this._options.stickySession,
                sessionSampleRate: 1,
                allowBuffering: !1,
              }
            );
            (this.session = e), this._initializeRecording();
          }
          startBuffering() {
            if (this._isEnabled)
              throw new Error("Replay recording is already in progress");
            yr(
              "[Replay] Starting replay in buffer mode",
              this._options._experiments.traceInternals
            );
            var e = Lr(
              {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
                traceInternals: this._options._experiments.traceInternals,
              },
              {
                stickySession: this._options.stickySession,
                sessionSampleRate: 0,
                allowBuffering: !0,
              }
            );
            (this.session = e),
              (this.recordingMode = "buffer"),
              this._initializeRecording();
          }
          startRecording() {
            try {
              var e = this._canvas;
              this._stopRecording = jt(
                L(
                  L(
                    L({}, this._recordingOptions),
                    "buffer" === this.recordingMode && { checkoutEveryNms: 6e4 }
                  ),
                  {},
                  { emit: An(this), onMutation: this._onMutationHandler },
                  e
                    ? {
                        recordCanvas: e.recordCanvas,
                        getCanvasManager: e.getCanvasManager,
                        sampling: e.sampling,
                        dataURLOptions: e.dataURLOptions,
                      }
                    : {}
                )
              );
            } catch (t) {
              this._handleException(t);
            }
          }
          stopRecording() {
            try {
              return (
                this._stopRecording &&
                  (this._stopRecording(), (this._stopRecording = void 0)),
                !0
              );
            } catch (e) {
              return this._handleException(e), !1;
            }
          }
          stop() {
            var e = arguments,
              t = this;
            return (0, n.Z)(
              o().mark(function r() {
                var n, a, s, i;
                return o().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (
                            ((a = (n =
                              e.length > 0 && void 0 !== e[0] ? e[0] : {})
                              .forceFlush),
                            (s = void 0 !== a && a),
                            (i = n.reason),
                            t._isEnabled)
                          ) {
                            r.next = 3;
                            break;
                          }
                          return r.abrupt("return");
                        case 3:
                          if (
                            ((t._isEnabled = !1),
                            (r.prev = 4),
                            vr(
                              "[Replay] Stopping Replay".concat(
                                i ? " triggered by ".concat(i) : ""
                              ),
                              t._options._experiments.traceInternals
                            ),
                            t._removeListeners(),
                            t.stopRecording(),
                            t._debouncedFlush.cancel(),
                            !s)
                          ) {
                            r.next = 12;
                            break;
                          }
                          return (r.next = 12), t._flush({ force: !0 });
                        case 12:
                          t.eventBuffer && t.eventBuffer.destroy(),
                            (t.eventBuffer = null),
                            Tr(t),
                            (r.next = 20);
                          break;
                        case 17:
                          (r.prev = 17),
                            (r.t0 = r.catch(4)),
                            t._handleException(r.t0);
                        case 20:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[4, 17]]
                );
              })
            )();
          }
          pause() {
            this._isPaused ||
              ((this._isPaused = !0),
              this.stopRecording(),
              vr(
                "[Replay] Pausing replay",
                this._options._experiments.traceInternals
              ));
          }
          resume() {
            this._isPaused &&
              this._checkSession() &&
              ((this._isPaused = !1),
              this.startRecording(),
              vr(
                "[Replay] Resuming replay",
                this._options._experiments.traceInternals
              ));
          }
          sendBufferedReplayOrFlush() {
            var e = arguments,
              t = this;
            return (0, n.Z)(
              o().mark(function r() {
                var n, a, s, i;
                return o().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (
                          ((n = (e.length > 0 && void 0 !== e[0] ? e[0] : {})
                            .continueRecording),
                          (a = void 0 === n || n),
                          "session" !== t.recordingMode)
                        ) {
                          r.next = 3;
                          break;
                        }
                        return r.abrupt("return", t.flushImmediate());
                      case 3:
                        return (
                          (s = Date.now()),
                          vr(
                            "[Replay] Converting buffer to session",
                            t._options._experiments.traceInternals
                          ),
                          (r.next = 7),
                          t.flushImmediate()
                        );
                      case 7:
                        if (((i = t.stopRecording()), a && i)) {
                          r.next = 10;
                          break;
                        }
                        return r.abrupt("return");
                      case 10:
                        if ("session" !== t.recordingMode) {
                          r.next = 12;
                          break;
                        }
                        return r.abrupt("return");
                      case 12:
                        (t.recordingMode = "session"),
                          t.session &&
                            (t._updateUserActivity(s),
                            t._updateSessionActivity(s),
                            t._maybeSaveSession()),
                          t.startRecording();
                      case 15:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          }
          addUpdate(e) {
            var t = e();
            "buffer" !== this.recordingMode &&
              !0 !== t &&
              this._debouncedFlush();
          }
          triggerUserActivity() {
            if ((this._updateUserActivity(), this._stopRecording))
              this.checkAndHandleExpiredSession(),
                this._updateSessionActivity();
            else {
              if (!this._checkSession()) return;
              this.resume();
            }
          }
          updateUserActivity() {
            this._updateUserActivity(), this._updateSessionActivity();
          }
          conditionalFlush() {
            return "buffer" === this.recordingMode
              ? Promise.resolve()
              : this.flushImmediate();
          }
          flush() {
            return this._debouncedFlush();
          }
          flushImmediate() {
            return this._debouncedFlush(), this._debouncedFlush.flush();
          }
          cancelFlush() {
            this._debouncedFlush.cancel();
          }
          getSessionId() {
            return this.session && this.session.id;
          }
          checkAndHandleExpiredSession() {
            if (
              !(
                this._lastActivity &&
                Ar(this._lastActivity, this.timeouts.sessionIdlePause) &&
                this.session &&
                "session" === this.session.sampled
              )
            )
              return !!this._checkSession();
            this.pause();
          }
          setInitialState() {
            var e = ""
                .concat(U.location.pathname)
                .concat(U.location.hash)
                .concat(U.location.search),
              t = "".concat(U.location.origin).concat(e);
            (this.performanceEntries = []),
              (this.replayPerformanceEntries = []),
              this._clearContext(),
              (this._context.initialUrl = t),
              (this._context.initialTimestamp = Date.now()),
              this._context.urls.push(t);
          }
          throttledAddEvent(e, t) {
            var r = this._throttledAddEvent(e, t);
            if (r === Wn) {
              var n = sr({ category: "replay.throttled" });
              this.addUpdate(
                () =>
                  !Nr(this, {
                    type: 5,
                    timestamp: n.timestamp || 0,
                    data: { tag: "breadcrumb", payload: n, metric: !0 },
                  })
              );
            }
            return r;
          }
          getCurrentRoute() {
            var e = this.lastTransaction || (0, u.nZ)().getTransaction(),
              t = ((e && (0, f.XU)(e).data) || {})[v.Zj];
            if (e && t && ["route", "custom"].includes(t))
              return (0, f.XU)(e).description;
          }
          _initializeRecording() {
            this.setInitialState(),
              this._updateSessionActivity(),
              (this.eventBuffer = xr({
                useCompression: this._options.useCompression,
                workerUrl: this._options.workerUrl,
              })),
              this._removeListeners(),
              this._addListeners(),
              (this._isEnabled = !0),
              (this._isPaused = !1),
              this.startRecording();
          }
          _handleException(e) {
            fr && _.kg.error("[Replay]", e),
              fr &&
                this._options._experiments &&
                this._options._experiments.captureExceptions &&
                (0, u.Tb)(e);
          }
          _initializeSessionForSampling(e) {
            var t = this._options.errorSampleRate > 0,
              r = Lr(
                {
                  sessionIdleExpire: this.timeouts.sessionIdleExpire,
                  maxReplayDuration: this._options.maxReplayDuration,
                  traceInternals: this._options._experiments.traceInternals,
                  previousSessionId: e,
                },
                {
                  stickySession: this._options.stickySession,
                  sessionSampleRate: this._options.sessionSampleRate,
                  allowBuffering: t,
                }
              );
            this.session = r;
          }
          _checkSession() {
            if (!this.session) return !1;
            var e = this.session;
            return (
              !Or(e, {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
              }) || (this._refreshSession(e), !1)
            );
          }
          _refreshSession(e) {
            var t = this;
            return (0, n.Z)(
              o().mark(function r() {
                return o().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (t._isEnabled) {
                          r.next = 2;
                          break;
                        }
                        return r.abrupt("return");
                      case 2:
                        return (
                          (r.next = 4), t.stop({ reason: "refresh session" })
                        );
                      case 4:
                        t.initializeSampling(e.id);
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          }
          _addListeners() {
            try {
              U.document.addEventListener(
                "visibilitychange",
                this._handleVisibilityChange
              ),
                U.addEventListener("blur", this._handleWindowBlur),
                U.addEventListener("focus", this._handleWindowFocus),
                U.addEventListener("keydown", this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.addListeners(),
                this._hasInitializedCoreListeners ||
                  (!(function (e) {
                    var t = (0, u.nZ)(),
                      r = (0, u.s3)();
                    t.addScopeListener(In(e)),
                      (0, I.O)(lr(e)),
                      (0, E.a)(Kr(e)),
                      Cn(e);
                    var n = qr(e, !En(r));
                    r && r.addEventProcessor
                      ? r.addEventProcessor(n)
                      : (0, p.Q)(n),
                      En(r) &&
                        (r.on("beforeSendEvent", Zr(e)),
                        r.on("afterSendEvent", jr(e)),
                        r.on("createDsc", (t) => {
                          var r = e.getSessionId();
                          r &&
                            e.isEnabled() &&
                            "session" === e.recordingMode &&
                            e.checkAndHandleExpiredSession() &&
                            (t.replay_id = r);
                        }),
                        r.on("startTransaction", (t) => {
                          e.lastTransaction = t;
                        }),
                        r.on("finishTransaction", (t) => {
                          e.lastTransaction = t;
                        }),
                        r.on("beforeSendFeedback", (t, r) => {
                          var n = e.getSessionId();
                          r &&
                            r.includeReplay &&
                            e.isEnabled() &&
                            n &&
                            (e.flush(),
                            t.contexts &&
                              t.contexts.feedback &&
                              (t.contexts.feedback.replay_id = n));
                        }));
                  })(this),
                  (this._hasInitializedCoreListeners = !0));
            } catch (e) {
              this._handleException(e);
            }
            this._performanceCleanupCallback = mr(this);
          }
          _removeListeners() {
            try {
              U.document.removeEventListener(
                "visibilitychange",
                this._handleVisibilityChange
              ),
                U.removeEventListener("blur", this._handleWindowBlur),
                U.removeEventListener("focus", this._handleWindowFocus),
                U.removeEventListener("keydown", this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.removeListeners(),
                this._performanceCleanupCallback &&
                  this._performanceCleanupCallback();
            } catch (e) {
              this._handleException(e);
            }
          }
          __init() {
            this._handleVisibilityChange = () => {
              "visible" === U.document.visibilityState
                ? this._doChangeToForegroundTasks()
                : this._doChangeToBackgroundTasks();
            };
          }
          __init2() {
            this._handleWindowBlur = () => {
              var e = sr({ category: "ui.blur" });
              this._doChangeToBackgroundTasks(e);
            };
          }
          __init3() {
            this._handleWindowFocus = () => {
              var e = sr({ category: "ui.focus" });
              this._doChangeToForegroundTasks(e);
            };
          }
          __init4() {
            this._handleKeyboardEvent = (e) => {
              ur(this, e);
            };
          }
          _doChangeToBackgroundTasks(e) {
            this.session &&
              (Dr(this.session, {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
              }) ||
                (e && this._createCustomBreadcrumb(e),
                this.conditionalFlush()));
          }
          _doChangeToForegroundTasks(e) {
            this.session &&
              (this.checkAndHandleExpiredSession()
                ? e && this._createCustomBreadcrumb(e)
                : vr(
                    "[Replay] Document has become active, but session has expired"
                  ));
          }
          _updateUserActivity() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Date.now();
            this._lastActivity = e;
          }
          _updateSessionActivity() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Date.now();
            this.session &&
              ((this.session.lastActivity = e), this._maybeSaveSession());
          }
          _createCustomBreadcrumb(e) {
            this.addUpdate(() => {
              this.throttledAddEvent({
                type: tt.Custom,
                timestamp: e.timestamp || 0,
                data: { tag: "breadcrumb", payload: e },
              });
            });
          }
          _addPerformanceEntries() {
            var e,
              t = ((e = this.performanceEntries),
              e.map(pr).filter(Boolean)).concat(this.replayPerformanceEntries);
            return (
              (this.performanceEntries = []),
              (this.replayPerformanceEntries = []),
              Promise.all(Vr(this, t))
            );
          }
          _clearContext() {
            this._context.errorIds.clear(),
              this._context.traceIds.clear(),
              (this._context.urls = []);
          }
          _updateInitialTimestampFromEventBuffer() {
            var e = this.session,
              t = this.eventBuffer;
            if (e && t && !e.segmentId) {
              var r = t.getEarliestTimestamp();
              r &&
                r < this._context.initialTimestamp &&
                (this._context.initialTimestamp = r);
            }
          }
          _popEventContext() {
            var e = {
              initialTimestamp: this._context.initialTimestamp,
              initialUrl: this._context.initialUrl,
              errorIds: Array.from(this._context.errorIds),
              traceIds: Array.from(this._context.traceIds),
              urls: this._context.urls,
            };
            return this._clearContext(), e;
          }
          _runFlush() {
            var e = this;
            return (0, n.Z)(
              o().mark(function t() {
                var r, n, a, s, i, l;
                return o().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((r = e.getSessionId()),
                            e.session && e.eventBuffer && r)
                          ) {
                            t.next = 4;
                            break;
                          }
                          return (
                            fr &&
                              _.kg.error(
                                "[Replay] No session or eventBuffer found to flush."
                              ),
                            t.abrupt("return")
                          );
                        case 4:
                          return (t.next = 6), e._addPerformanceEntries();
                        case 6:
                          if (e.eventBuffer && e.eventBuffer.hasEvents) {
                            t.next = 8;
                            break;
                          }
                          return t.abrupt("return");
                        case 8:
                          return (t.next = 10), Rn(e);
                        case 10:
                          if (e.eventBuffer) {
                            t.next = 12;
                            break;
                          }
                          return t.abrupt("return");
                        case 12:
                          if (r === e.getSessionId()) {
                            t.next = 14;
                            break;
                          }
                          return t.abrupt("return");
                        case 14:
                          if (
                            ((t.prev = 14),
                            e._updateInitialTimestampFromEventBuffer(),
                            !(
                              (n = Date.now()) - e._context.initialTimestamp >
                              e._options.maxReplayDuration + 3e4
                            ))
                          ) {
                            t.next = 19;
                            break;
                          }
                          throw new Error(
                            "Session is too long, not sending replay"
                          );
                        case 19:
                          return (
                            (a = e._popEventContext()),
                            (s = e.session.segmentId++),
                            e._maybeSaveSession(),
                            (t.next = 24),
                            e.eventBuffer.finish()
                          );
                        case 24:
                          return (
                            (i = t.sent),
                            (t.next = 27),
                            zn({
                              replayId: r,
                              recordingData: i,
                              segmentId: s,
                              eventContext: a,
                              session: e.session,
                              options: e.getOptions(),
                              timestamp: n,
                            })
                          );
                        case 27:
                          t.next = 35;
                          break;
                        case 29:
                          (t.prev = 29),
                            (t.t0 = t.catch(14)),
                            e._handleException(t.t0),
                            e.stop({ reason: "sendReplay" }),
                            (l = (0, u.s3)()) &&
                              l.recordDroppedEvent("send_error", "replay");
                        case 35:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[14, 29]]
                );
              })
            )();
          }
          __init5() {
            var e = this;
            this._flush = (0, n.Z)(
              o().mark(function t() {
                var r,
                  n,
                  a,
                  s,
                  i,
                  l,
                  c,
                  u,
                  d = arguments;
                return o().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((r = (d.length > 0 && void 0 !== d[0] ? d[0] : {})
                              .force),
                            (n = void 0 !== r && r),
                            e._isEnabled || n)
                          ) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt("return");
                        case 3:
                          if (e.checkAndHandleExpiredSession()) {
                            t.next = 6;
                            break;
                          }
                          return (
                            fr &&
                              _.kg.error(
                                "[Replay] Attempting to finish replay event after session expired."
                              ),
                            t.abrupt("return")
                          );
                        case 6:
                          if (e.session) {
                            t.next = 8;
                            break;
                          }
                          return t.abrupt("return");
                        case 8:
                          if (
                            ((a = e.session.started),
                            (s = Date.now()),
                            (i = s - a),
                            e._debouncedFlush.cancel(),
                            (l = i < e._options.minReplayDuration),
                            (c = i > e._options.maxReplayDuration + 5e3),
                            !l && !c)
                          ) {
                            t.next = 18;
                            break;
                          }
                          return (
                            vr(
                              "[Replay] Session duration ("
                                .concat(Math.floor(i / 1e3), "s) is too ")
                                .concat(
                                  l ? "short" : "long",
                                  ", not sending replay."
                                ),
                              e._options._experiments.traceInternals
                            ),
                            l && e._debouncedFlush(),
                            t.abrupt("return")
                          );
                        case 18:
                          if (
                            ((u = e.eventBuffer) &&
                              0 === e.session.segmentId &&
                              !u.hasCheckout &&
                              vr(
                                "[Replay] Flushing initial segment without checkout.",
                                e._options._experiments.traceInternals
                              ),
                            e._flushLock)
                          ) {
                            t.next = 26;
                            break;
                          }
                          return (
                            (e._flushLock = e._runFlush()),
                            (t.next = 24),
                            e._flushLock
                          );
                        case 24:
                          return (e._flushLock = void 0), t.abrupt("return");
                        case 26:
                          return (t.prev = 26), (t.next = 29), e._flushLock;
                        case 29:
                          t.next = 34;
                          break;
                        case 31:
                          (t.prev = 31),
                            (t.t0 = t.catch(26)),
                            fr && _.kg.error(t.t0);
                        case 34:
                          return (
                            (t.prev = 34), e._debouncedFlush(), t.finish(34)
                          );
                        case 37:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[26, 31, 34, 37]]
                );
              })
            );
          }
          _maybeSaveSession() {
            this.session && this._options.stickySession && Rr(this.session);
          }
          __init6() {
            this._onMutationHandler = (e) => {
              var t = e.length,
                r = this._options.mutationLimit,
                n = r && t > r;
              if (t > this._options.mutationBreadcrumbLimit || n) {
                var a = sr({
                  category: "replay.mutations",
                  data: { count: t, limit: n },
                });
                this._createCustomBreadcrumb(a);
              }
              return (
                !n ||
                (this.stop({
                  reason: "mutationLimit",
                  forceFlush: "session" === this.recordingMode,
                }),
                !1)
              );
            };
          }
        }
        function qn(e, t, r, n) {
          var a = [...e, ...("string" == typeof n ? n.split(",") : []), ...t];
          return (
            void 0 !== r &&
              ("string" == typeof r && a.push(".".concat(r)),
              (0, _.Cf)(() => {
                console.warn(
                  "[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration."
                );
              })),
            a.join(",")
          );
        }
        var Vn =
            'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
          Kn = ["content-length", "content-type", "accept"],
          Jn = !1,
          Yn = (e) => new Gn(e);
        class Gn {
          static __initStatic() {
            this.id = "Replay";
          }
          constructor() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.flushMinDelay,
              r = void 0 === t ? 5e3 : t,
              n = e.flushMaxDelay,
              a = void 0 === n ? 5500 : n,
              s = e.minReplayDuration,
              i = void 0 === s ? 4999 : s,
              o = e.maxReplayDuration,
              l = void 0 === o ? K : o,
              c = e.stickySession,
              u = void 0 === c || c,
              d = e.useCompression,
              p = void 0 === d || d,
              h = e.workerUrl,
              m = e._experiments,
              f = void 0 === m ? {} : m,
              v = e.sessionSampleRate,
              y = e.errorSampleRate,
              g = e.maskAllText,
              k = void 0 === g || g,
              S = e.maskAllInputs,
              b = void 0 === S || S,
              _ = e.blockAllMedia,
              w = void 0 === _ || _,
              x = e.mutationBreadcrumbLimit,
              C = void 0 === x ? 750 : x,
              T = e.mutationLimit,
              I = void 0 === T ? 1e4 : T,
              E = e.slowClickTimeout,
              R = void 0 === E ? 7e3 : E,
              M = e.slowClickIgnoreSelectors,
              D = void 0 === M ? [] : M,
              O = e.networkDetailAllowUrls,
              N = void 0 === O ? [] : O,
              F = e.networkDetailDenyUrls,
              P = void 0 === F ? [] : F,
              U = e.networkCaptureBodies,
              B = void 0 === U || U,
              z = e.networkRequestHeaders,
              H = void 0 === z ? [] : z,
              W = e.networkResponseHeaders,
              j = void 0 === W ? [] : W,
              Z = e.mask,
              q = void 0 === Z ? [] : Z,
              V = e.maskAttributes,
              J = void 0 === V ? ["title", "placeholder"] : V,
              Y = e.unmask,
              G = void 0 === Y ? [] : Y,
              X = e.block,
              $ = void 0 === X ? [] : X,
              Q = e.unblock,
              ee = void 0 === Q ? [] : Q,
              te = e.ignore,
              re = void 0 === te ? [] : te,
              ne = e.maskFn,
              ae = e.beforeAddRecordingEvent,
              se = e.beforeErrorSampling,
              ie = e.blockClass,
              oe = e.blockSelector,
              le = e.maskInputOptions,
              ce = e.maskTextClass,
              ue = e.maskTextSelector,
              de = e.ignoreClass;
            this.name = Gn.id;
            var pe = (function (e) {
              var t = e.mask,
                r = e.unmask,
                n = e.block,
                a = e.unblock,
                s = e.ignore,
                i = e.blockClass,
                o = e.blockSelector,
                l = e.maskTextClass,
                c = e.maskTextSelector,
                u = e.ignoreClass,
                d = {
                  maskTextSelector: qn(
                    t,
                    [".sentry-mask", "[data-sentry-mask]"],
                    l,
                    c
                  ),
                  unmaskTextSelector: qn(r, [
                    ".sentry-unmask",
                    "[data-sentry-unmask]",
                  ]),
                  blockSelector: qn(
                    n,
                    [".sentry-block", "[data-sentry-block]", 'base[href="/"]'],
                    i,
                    o
                  ),
                  unblockSelector: qn(a, [
                    ".sentry-unblock",
                    "[data-sentry-unblock]",
                  ]),
                  ignoreSelector: qn(
                    s,
                    [
                      ".sentry-ignore",
                      "[data-sentry-ignore]",
                      'input[type="file"]',
                    ],
                    u
                  ),
                };
              return (
                i instanceof RegExp && (d.blockClass = i),
                l instanceof RegExp && (d.maskTextClass = l),
                d
              );
            })({
              mask: q,
              unmask: G,
              block: $,
              unblock: ee,
              ignore: re,
              blockClass: ie,
              blockSelector: oe,
              maskTextClass: ce,
              maskTextSelector: ue,
              ignoreClass: de,
            });
            if (
              ((this._recordingOptions = L(
                L(
                  {
                    maskAllInputs: b,
                    maskAllText: k,
                    maskInputOptions: L(L({}, le || {}), {}, { password: !0 }),
                    maskTextFn: ne,
                    maskInputFn: ne,
                    maskAttributeFn: (e, t, r) =>
                      (function (e) {
                        var t = e.el,
                          r = e.key,
                          n = e.maskAttributes,
                          a = e.maskAllText,
                          s = e.privacyOptions,
                          i = e.value;
                        return a
                          ? s.unmaskTextSelector &&
                            t.matches(s.unmaskTextSelector)
                            ? i
                            : n.includes(r) ||
                              ("value" === r &&
                                "INPUT" === t.tagName &&
                                ["submit", "button"].includes(
                                  t.getAttribute("type") || ""
                                ))
                            ? i.replace(/[\S]/g, "*")
                            : i
                          : i;
                      })({
                        maskAttributes: J,
                        maskAllText: k,
                        privacyOptions: pe,
                        key: e,
                        value: t,
                        el: r,
                      }),
                  },
                  pe
                ),
                {},
                {
                  slimDOMOptions: "all",
                  inlineStylesheet: !0,
                  inlineImages: !1,
                  collectFonts: !0,
                  errorHandler: (e) => {
                    try {
                      e.__rrweb__ = !0;
                    } catch (t) {}
                  },
                }
              )),
              (this._initialOptions = {
                flushMinDelay: r,
                flushMaxDelay: a,
                minReplayDuration: Math.min(i, 15e3),
                maxReplayDuration: Math.min(l, K),
                stickySession: u,
                sessionSampleRate: v,
                errorSampleRate: y,
                useCompression: p,
                workerUrl: h,
                blockAllMedia: w,
                maskAllInputs: b,
                maskAllText: k,
                mutationBreadcrumbLimit: C,
                mutationLimit: I,
                slowClickTimeout: R,
                slowClickIgnoreSelectors: D,
                networkDetailAllowUrls: N,
                networkDetailDenyUrls: P,
                networkCaptureBodies: B,
                networkRequestHeaders: Xn(H),
                networkResponseHeaders: Xn(j),
                beforeAddRecordingEvent: ae,
                beforeErrorSampling: se,
                _experiments: f,
              }),
              "number" == typeof v &&
                (console.warn(
                  "[Replay] You are passing `sessionSampleRate` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure `replaysSessionSampleRate` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ".concat(
                    v,
                    " })"
                  )
                ),
                (this._initialOptions.sessionSampleRate = v)),
              "number" == typeof y &&
                (console.warn(
                  "[Replay] You are passing `errorSampleRate` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure `replaysOnErrorSampleRate` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ".concat(
                    y,
                    " })"
                  )
                ),
                (this._initialOptions.errorSampleRate = y)),
              this._initialOptions.blockAllMedia &&
                (this._recordingOptions.blockSelector = this._recordingOptions
                  .blockSelector
                  ? ""
                      .concat(this._recordingOptions.blockSelector, ",")
                      .concat(Vn)
                  : Vn),
              this._isInitialized && (0, A.j)())
            )
              throw new Error(
                "Multiple Sentry Session Replay instances are not supported"
              );
            this._isInitialized = !0;
          }
          get _isInitialized() {
            return Jn;
          }
          set _isInitialized(e) {
            Jn = e;
          }
          setupOnce() {
            (0, A.j)() && (this._setup(), setTimeout(() => this._initialize()));
          }
          start() {
            this._replay && this._replay.start();
          }
          startBuffering() {
            this._replay && this._replay.startBuffering();
          }
          stop() {
            return this._replay
              ? this._replay.stop({
                  forceFlush: "session" === this._replay.recordingMode,
                })
              : Promise.resolve();
          }
          flush(e) {
            return this._replay && this._replay.isEnabled()
              ? this._replay.sendBufferedReplayOrFlush(e)
              : Promise.resolve();
          }
          getReplayId() {
            if (this._replay && this._replay.isEnabled())
              return this._replay.getSessionId();
          }
          _initialize() {
            this._replay &&
              (this._maybeLoadFromReplayCanvasIntegration(),
              this._replay.initializeSampling());
          }
          _setup() {
            var e = (function (e) {
              var t = (0, u.s3)(),
                r = t && t.getOptions(),
                n = L(
                  { sessionSampleRate: 0, errorSampleRate: 0 },
                  (0, k.Jr)(e)
                );
              if (!r)
                return (
                  (0, _.Cf)(() => {
                    console.warn("SDK client is not available.");
                  }),
                  n
                );
              null == e.sessionSampleRate &&
                null == e.errorSampleRate &&
                null == r.replaysSessionSampleRate &&
                null == r.replaysOnErrorSampleRate &&
                (0, _.Cf)(() => {
                  console.warn(
                    "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."
                  );
                });
              "number" == typeof r.replaysSessionSampleRate &&
                (n.sessionSampleRate = r.replaysSessionSampleRate);
              "number" == typeof r.replaysOnErrorSampleRate &&
                (n.errorSampleRate = r.replaysOnErrorSampleRate);
              return n;
            })(this._initialOptions);
            this._replay = new Zn({
              options: e,
              recordingOptions: this._recordingOptions,
            });
          }
          _maybeLoadFromReplayCanvasIntegration() {
            try {
              var e = (0, u.s3)().getIntegrationByName("ReplayCanvas");
              if (!e) return;
              this._replay._canvas = e.getOptions();
            } catch (t) {}
          }
        }
        function Xn(e) {
          return [...Kn, ...e.map((e) => e.toLowerCase())];
        }
        function $n() {
          var e = (0, u.s3)();
          return (
            e && e.getIntegrationByName && e.getIntegrationByName("Replay")
          );
        }
        Gn.__initStatic();
      },
    },
  ]);
