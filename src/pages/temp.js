/*! For license information please see main.d38a0b5a.js.LICENSE.txt */
!(function () {
  var e = {
      694: function (e, t) {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function a() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var i = typeof n;
                if ("string" === i || "number" === i) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var o = a.apply(null, n);
                    o && e.push(o);
                  }
                } else if ("object" === i) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes("[native code]")
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var l in n) r.call(n, l) && n[l] && e.push(l);
                }
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (n = function () {
                  return a;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      888: function (e, t, n) {
        "use strict";
        var r = n(47);
        function a() {}
        function i() {}
        (i.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, i, o) {
              if (o !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      7: function (e, t, n) {
        e.exports = n(888)();
      },
      47: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          P = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          j = Symbol.for("react.context"),
          T = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          L = Symbol.for("react.memo"),
          F = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var R = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var M = Symbol.iterator;
        function A(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (M && e[M]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          _ = Object.assign;
        function z(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var V = !1;
        function I(e, t) {
          if (!e || V) return "";
          V = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  l = i.length - 1;
                1 <= o && 0 <= l && a[o] !== i[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (a[o] !== i[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || a[o] !== i[l])) {
                        var s = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (V = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = I(e.type, !1));
            case 11:
              return (e = I(e.type.render, !1));
            case 1:
              return (e = I(e.type, !0));
            default:
              return "";
          }
        }
        function U(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case P:
              return "Profiler";
            case E:
              return "StrictMode";
            case N:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case j:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case F:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return U(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Y(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function q(e, t) {
          var n = t.checked;
          return _({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Z(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function K(e, t) {
          G(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return _({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function ie(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = _(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function Pe(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = wa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function je() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Pe(e), t))
              for (e = 0; e < t.length; e++) Pe(t[e]);
          }
        }
        function Te(e, t) {
          return e(t);
        }
        function Ne() {}
        var Oe = !1;
        function Le(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Te(e, t, n);
          } finally {
            (Oe = !1), (null !== Se || null !== Ee) && (Ne(), je());
          }
        }
        function Fe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Re = !1;
        if (c)
          try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
              get: function () {
                Re = !0;
              },
            }),
              window.addEventListener("test", Me, Me),
              window.removeEventListener("test", Me, Me);
          } catch (ce) {
            Re = !1;
          }
        function Ae(e, t, n, r, a, i, o, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          _e = null,
          ze = !1,
          Ve = null,
          Ie = {
            onError: function (e) {
              (De = !0), (_e = e);
            },
          };
        function Be(e, t, n, r, a, i, o, l, s) {
          (De = !1), (_e = null), Ae.apply(Ie, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Ue(e) !== e) throw Error(i(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return We(a), e;
                    if (o === r) return We(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = o);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = o), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = o), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ye(e)
            : null;
        }
        function Ye(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ye(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          Xe = a.unstable_cancelCallback,
          qe = a.unstable_shouldYield,
          Ze = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Ke = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var l = o & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (i &= o) && (r = ft(i));
          } else 0 !== (o = n & ~a) ? (r = ft(o)) : 0 !== i && (r = ft(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          kt,
          St,
          Et,
          Pt,
          Ct = !1,
          jt = [],
          Tt = null,
          Nt = null,
          Ot = null,
          Lt = new Map(),
          Ft = new Map(),
          Rt = [],
          Mt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tt = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Lt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ft.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function _t(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Pt(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Vt(e, t, n) {
          zt(e) && n.delete(t);
        }
        function It() {
          (Ct = !1),
            null !== Tt && zt(Tt) && (Tt = null),
            null !== Nt && zt(Nt) && (Nt = null),
            null !== Ot && zt(Ot) && (Ot = null),
            Lt.forEach(Vt),
            Ft.forEach(Vt);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, It)));
        }
        function Ut(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < jt.length) {
            Bt(jt[0], e);
            for (var n = 1; n < jt.length; n++) {
              var r = jt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Tt && Bt(Tt, e),
              null !== Nt && Bt(Nt, e),
              null !== Ot && Bt(Ot, e),
              Lt.forEach(t),
              Ft.forEach(t),
              n = 0;
            n < Rt.length;
            n++
          )
            (r = Rt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
            _t(n), null === n.blockedOn && Rt.shift();
        }
        var Ht = x.ReactCurrentBatchConfig,
          Wt = !0;
        function $t(e, t, n, r) {
          var a = bt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = i);
          }
        }
        function Yt(e, t, n, r) {
          var a = bt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = i);
          }
        }
        function Qt(e, t, n, r) {
          if (Wt) {
            var a = qt(e, t, n, r);
            if (null === a) Wr(e, t, r, Xt, n), At(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Tt = Dt(Tt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Nt = Dt(Nt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = Dt(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Lt.set(i, Dt(Lt.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Ft.set(i, Dt(Ft.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < Mt.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && wt(i),
                  null === (i = qt(e, t, n, r)) && Wr(e, t, r, Xt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Xt = null;
        function qt(e, t, n, r) {
          if (((Xt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Xt = e), null;
        }
        function Zt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ke()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Kt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Kt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            _(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          fn = _({}, un, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = _({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Pn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          vn = an(_({}, pn, { dataTransfer: 0 })),
          mn = an(_({}, fn, { relatedTarget: 0 })),
          gn = an(
            _({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = _({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(_({}, un, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Pn() {
          return En;
        }
        var Cn = _({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Pn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          jn = an(Cn),
          Tn = an(
            _({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Nn = an(
            _({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Pn,
            })
          ),
          On = an(
            _({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = _({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Fn = an(Ln),
          Rn = [9, 13, 27, 32],
          Mn = c && "CompositionEvent" in window,
          An = null;
        c && "documentMode" in document && (An = document.documentMode);
        var Dn = c && "TextEvent" in window && !An,
          _n = c && (!Mn || (An && 8 < An && 11 >= An)),
          zn = String.fromCharCode(32),
          Vn = !1;
        function In(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Rn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Ce(r),
            0 < (t = Yr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Yn = null,
          Qn = null;
        function Xn(e) {
          zr(e, 0);
        }
        function qn(e) {
          if (Q(xa(e))) return e;
        }
        function Zn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Kn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Kn = Jn;
          } else Kn = !1;
          Gn = Kn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Yn && (Yn.detachEvent("onpropertychange", nr), (Qn = Yn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && qn(Qn)) {
            var t = [];
            $n(t, Qn, e, we(e)), Le(Xn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), (Yn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return qn(Qn);
        }
        function ir(e, t) {
          if ("click" === e) return qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return qn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = cr(n, i));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          gr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== X(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Yr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Pr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Cr = Pr("animationend"),
          jr = Pr("animationiteration"),
          Tr = Pr("animationstart"),
          Nr = Pr("transitionend"),
          Or = new Map(),
          Lr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Fr(e, t) {
          Or.set(e, t), s(t, [e]);
        }
        for (var Rr = 0; Rr < Lr.length; Rr++) {
          var Mr = Lr[Rr];
          Fr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        }
        Fr(Cr, "onAnimationEnd"),
          Fr(jr, "onAnimationIteration"),
          Fr(Tr, "onAnimationStart"),
          Fr("dblclick", "onDoubleClick"),
          Fr("focusin", "onFocus"),
          Fr("focusout", "onBlur"),
          Fr(Nr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar)
          );
        function _r(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, l, s, u) {
              if ((Be.apply(this, arguments), De)) {
                if (!De) throw Error(i(198));
                var c = _e;
                (De = !1), (_e = null), ze || ((ze = !0), (Ve = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function zr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== i && a.isPropagationStopped()))
                    break e;
                  _r(a, l, u), (i = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (l = r[o]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== i && a.isPropagationStopped())
                  )
                    break e;
                  _r(a, l, u), (i = s);
                }
            }
          }
          if (ze) throw ((e = Ve), (ze = !1), (Ve = null), e);
        }
        function Vr(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Ir(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Ir(t, !1, e), Ir(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ir("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Zt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Yt;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Re ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = ya(l))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = i = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = i,
              a = we(n),
              o = [];
            e: {
              var l = Or.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = jn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = mn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Nn;
                    break;
                  case Cr:
                  case jr:
                  case Tr:
                    s = gn;
                    break;
                  case Nr:
                    s = On;
                    break;
                  case "scroll":
                    s = dn;
                    break;
                  case "wheel":
                    s = Fn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Tn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Fe(h, d)) &&
                        c.push($r(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, a)),
                  o.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (f = Ue(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Tn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? l : xa(s)),
                  (p = null == u ? l : xa(u)),
                  ((l = new c(v, h + "leave", s, n, a)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  ya(a) === r &&
                    (((c = new c(d, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  s && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = s; p; p = Qr(p)) h++;
                    for (p = 0, v = d; v; v = Qr(v)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (d = Qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Qr(c)), (d = Qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Xr(o, l, s, c, !1),
                  null !== u && null !== f && Xr(o, f, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? xa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var m = Zn;
              else if (Wn(l))
                if (Gn) m = or;
                else {
                  m = ar;
                  var g = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = ir);
              switch (
                (m && (m = m(e, r))
                  ? $n(o, m, n, a)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (g = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(g) || "true" === g.contentEditable) &&
                    ((mr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(o, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, a);
              }
              var y;
              if (Mn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Un
                  ? In(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (_n &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Un && (y = en())
                    : ((Kt = "value" in (Gt = a) ? Gt.value : Gt.textContent),
                      (Un = !0))),
                0 < (g = Yr(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Vn = !0), zn);
                        case "textInput":
                          return (e = t.data) === zn && Vn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!Mn && In(e, t))
                          ? ((e = en()), (Jt = Kt = Gt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return _n && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Yr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            zr(o, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Yr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Fe(e, n)) && r.unshift($r(e, i, a)),
              null != (i = Fe(e, t)) && r.push($r(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Xr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              a
                ? null != (s = Fe(n, i)) && o.unshift($r(n, s, l))
                : a || (null != (s = Fe(n, i)) && o.push($r(n, s, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var qr = /\r\n?/g,
          Zr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(qr, "\n")
            .replace(Zr, "");
        }
        function Kr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(i(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ut(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ut(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ga = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Pa(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Ca(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var ja = {},
          Ta = Ea(ja),
          Na = Ea(!1),
          Oa = ja;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return ja;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Fa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ra() {
          Pa(Na), Pa(Ta);
        }
        function Ma(e, t, n) {
          if (Ta.current !== ja) throw Error(i(168));
          Ca(Ta, t), Ca(Na, n);
        }
        function Aa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, H(e) || "Unknown", a));
          return _({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              ja),
            (Oa = Ta.current),
            Ca(Ta, e),
            Ca(Na, Na.current),
            !0
          );
        }
        function _a(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Aa(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Pa(Na),
              Pa(Ta),
              Ca(Ta, e))
            : Pa(Na),
            Ca(Na, n);
        }
        var za = null,
          Va = !1,
          Ia = !1;
        function Ba(e) {
          null === za ? (za = [e]) : za.push(e);
        }
        function Ua() {
          if (!Ia && null !== za) {
            Ia = !0;
            var e = 0,
              t = bt;
            try {
              var n = za;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (za = null), (Va = !1);
            } catch (a) {
              throw (null !== za && (za = za.slice(e + 1)), Qe(Je, Ua), a);
            } finally {
              (bt = t), (Ia = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Wa = 0,
          $a = null,
          Ya = 0,
          Qa = [],
          Xa = 0,
          qa = null,
          Za = 1,
          Ga = "";
        function Ka(e, t) {
          (Ha[Wa++] = Ya), (Ha[Wa++] = $a), ($a = e), (Ya = t);
        }
        function Ja(e, t, n) {
          (Qa[Xa++] = Za), (Qa[Xa++] = Ga), (Qa[Xa++] = qa), (qa = e);
          var r = Za;
          e = Ga;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Za = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ga = i + e);
          } else (Za = (1 << i) | (n << a) | r), (Ga = e);
        }
        function ei(e) {
          null !== e.return && (Ka(e, 1), Ja(e, 1, 0));
        }
        function ti(e) {
          for (; e === $a; )
            ($a = Ha[--Wa]), (Ha[Wa] = null), (Ya = Ha[--Wa]), (Ha[Wa] = null);
          for (; e === qa; )
            (qa = Qa[--Xa]),
              (Qa[Xa] = null),
              (Ga = Qa[--Xa]),
              (Qa[Xa] = null),
              (Za = Qa[--Xa]),
              (Qa[Xa] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var n = Fu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function li(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== qa ? { id: Za, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Fu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function si(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ui(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!li(e, t)) {
                if (si(e)) throw Error(i(418));
                t = ua(n.nextSibling);
                var r = ni;
                t && li(e, t)
                  ? oi(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (si(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ci(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function fi(e) {
          if (e !== ni) return !1;
          if (!ai) return ci(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (si(e)) throw (di(), Error(i(418)));
            for (; t; ) oi(e, t), (t = ua(t.nextSibling));
          }
          if ((ci(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function di() {
          for (var e = ri; e; ) e = ua(e.nextSibling);
        }
        function pi() {
          (ri = ni = null), (ai = !1);
        }
        function hi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var vi = x.ReactCurrentBatchConfig;
        function mi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = _({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var gi = Ea(null),
          yi = null,
          bi = null,
          xi = null;
        function wi() {
          xi = bi = yi = null;
        }
        function ki(e) {
          var t = gi.current;
          Pa(gi), (e._currentValue = t);
        }
        function Si(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ei(e, t) {
          (yi = e),
            (xi = bi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xl = !0), (e.firstContext = null));
        }
        function Pi(e) {
          var t = e._currentValue;
          if (xi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bi)
            ) {
              if (null === yi) throw Error(i(308));
              (bi = e), (yi.dependencies = { lanes: 0, firstContext: e });
            } else bi = bi.next = e;
          return t;
        }
        var Ci = null;
        function ji(e) {
          null === Ci ? (Ci = [e]) : Ci.push(e);
        }
        function Ti(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), ji(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ni(e, r)
          );
        }
        function Ni(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Oi = !1;
        function Li(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Fi(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ri(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Mi(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ns))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ni(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), ji(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ni(e, n)
          );
        }
        function Ai(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Di(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function _i(e, t, n, r) {
          var a = e.updateQueue;
          Oi = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === o ? (i = u) : (o.next = u), (o = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== i) {
            var f = a.baseState;
            for (o = 0, c = u = s = null, l = i; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = _({}, f, d);
                      break e;
                    case 2:
                      Oi = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (_s |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function zi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var Vi = new r.Component().refs;
        function Ii(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : _({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              i = Ri(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Mi(e, i, a)) && (ru(t, e, a, r), Ai(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              i = Ri(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Mi(e, i, a)) && (ru(t, e, a, r), Ai(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              a = Ri(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Mi(e, a, r)) && (ru(t, e, r, n), Ai(t, e, r));
          },
        };
        function Ui(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, i);
        }
        function Hi(e, t, n) {
          var r = !1,
            a = ja,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Pi(i))
              : ((a = Fa(t) ? Oa : Ta.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : ja)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Wi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bi.enqueueReplaceState(t, t.state, null);
        }
        function $i(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Vi), Li(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Pi(i))
            : ((i = Fa(t) ? Oa : Ta.current), (a.context = La(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (Ii(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Bi.enqueueReplaceState(a, a.state, null),
              _i(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Yi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Vi && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Qi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Xi(e) {
          return (0, e._init)(e._payload);
        }
        function qi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Mu(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = zu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === F &&
                    Xi(i) === t.type))
              ? (((r = a(t, n.props)).ref = Yi(e, t, n)), (r.return = e), r)
              : (((r = Au(n.type, n.key, n.props, null, e.mode, r)).ref = Yi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Vu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Du(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = zu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Au(t.type, t.key, t.props, null, e.mode, n)).ref = Yi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Vu(t, e.mode, n)).return = e), t;
                case F:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || A(t))
                return ((t = Du(t, e.mode, n, null)).return = e), t;
              Qi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? u(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case F:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || A(n)) return null !== a ? null : f(e, t, n, r, null);
              Qi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case F:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || A(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Qi(t, r);
            }
            return null;
          }
          function v(a, i, l, s) {
            for (
              var u = null, c = null, f = i, v = (i = 0), m = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var g = p(a, f, l[v], s);
              if (null === g) {
                null === f && (f = m);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (i = o(g, i, v)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (f = m);
            }
            if (v === l.length) return n(a, f), ai && Ka(a, v), u;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(a, l[v], s)) &&
                  ((i = o(f, i, v)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return ai && Ka(a, v), u;
            }
            for (f = r(a, f); v < l.length; v++)
              null !== (m = h(f, a, v, l[v], s)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (i = o(m, i, v)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ka(a, v),
              u
            );
          }
          function m(a, l, s, u) {
            var c = A(s);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (s = c.call(s))) throw Error(i(151));
            for (
              var f = (c = null), v = l, m = (l = 0), g = null, y = s.next();
              null !== v && !y.done;
              m++, y = s.next()
            ) {
              v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(a, v, y.value, u);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (l = o(b, l, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = g);
            }
            if (y.done) return n(a, v), ai && Ka(a, m), c;
            if (null === v) {
              for (; !y.done; m++, y = s.next())
                null !== (y = d(a, y.value, u)) &&
                  ((l = o(y, l, m)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ai && Ka(a, m), c;
            }
            for (v = r(a, v); !y.done; m++, y = s.next())
              null !== (y = h(v, a, m, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? m : y.key),
                (l = o(y, l, m)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ka(a, m),
              c
            );
          }
          return function e(r, i, o, s) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var u = o.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = a(c, o.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === F &&
                            Xi(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, o.props)).ref = Yi(r, c, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((i = Du(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = i))
                      : (((s = Au(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s
                        )).ref = Yi(r, i, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = o.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, o.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Vu(o, r.mode, s)).return = r), (r = i);
                  }
                  return l(r);
                case F:
                  return e(r, i, (c = o._init)(o._payload), s);
              }
              if (te(o)) return v(r, i, o, s);
              if (A(o)) return m(r, i, o, s);
              Qi(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = zu(o, r.mode, s)).return = r), (r = i)),
                l(r))
              : n(r, i);
          };
        }
        var Zi = qi(!0),
          Gi = qi(!1),
          Ki = {},
          Ji = Ea(Ki),
          eo = Ea(Ki),
          to = Ea(Ki);
        function no(e) {
          if (e === Ki) throw Error(i(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ca(to, t), Ca(eo, e), Ca(Ji, Ki), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Pa(Ji), Ca(Ji, t);
        }
        function ao() {
          Pa(Ji), Pa(eo), Pa(to);
        }
        function io(e) {
          no(to.current);
          var t = no(Ji.current),
            n = se(t, e.type);
          t !== n && (Ca(eo, e), Ca(Ji, n));
        }
        function oo(e) {
          eo.current === e && (Pa(Ji), Pa(eo));
        }
        var lo = Ea(0);
        function so(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var uo = [];
        function co() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = x.ReactCurrentDispatcher,
          po = x.ReactCurrentBatchConfig,
          ho = 0,
          vo = null,
          mo = null,
          go = null,
          yo = !1,
          bo = !1,
          xo = 0,
          wo = 0;
        function ko() {
          throw Error(i(321));
        }
        function So(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Eo(e, t, n, r, a, o) {
          if (
            ((ho = o),
            (vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (go = mo = null),
                (t.updateQueue = null),
                (fo.current = ul),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = ol),
            (t = null !== mo && null !== mo.next),
            (ho = 0),
            (go = mo = vo = null),
            (yo = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Po() {
          var e = 0 !== xo;
          return (xo = 0), e;
        }
        function Co() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === go ? (vo.memoizedState = go = e) : (go = go.next = e), go
          );
        }
        function jo() {
          if (null === mo) {
            var e = vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mo.next;
          var t = null === go ? vo.memoizedState : go.next;
          if (null !== t) (go = t), (mo = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (mo = e).memoizedState,
              baseState: mo.baseState,
              baseQueue: mo.baseQueue,
              queue: mo.queue,
              next: null,
            }),
              null === go ? (vo.memoizedState = go = e) : (go = go.next = e);
          }
          return go;
        }
        function To(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function No(e) {
          var t = jo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = mo,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var l = a.next;
              (a.next = o.next), (o.next = l);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = o;
            do {
              var f = c.lane;
              if ((ho & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = d), (l = r)) : (u = u.next = d),
                  (vo.lanes |= f),
                  (_s |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (xl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (vo.lanes |= o), (_s |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Oo(e) {
          var t = jo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== a);
            lr(o, t.memoizedState) || (xl = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Lo() {}
        function Fo(e, t) {
          var n = vo,
            r = jo(),
            a = t(),
            o = !lr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (xl = !0)),
            (r = r.queue),
            Wo(Ao.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== go && 1 & go.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Vo(9, Mo.bind(null, n, r, a, t), void 0, null),
              null === Os)
            )
              throw Error(i(349));
            0 !== (30 & ho) || Ro(n, t, a);
          }
          return a;
        }
        function Ro(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Mo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Do(t) && _o(e);
        }
        function Ao(e, t, n) {
          return n(function () {
            Do(t) && _o(e);
          });
        }
        function Do(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function _o(e) {
          var t = Ni(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function zo(e) {
          var t = Co();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: To,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vo, e)),
            [t.memoizedState, e]
          );
        }
        function Vo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Io() {
          return jo().memoizedState;
        }
        function Bo(e, t, n, r) {
          var a = Co();
          (vo.flags |= e),
            (a.memoizedState = Vo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Uo(e, t, n, r) {
          var a = jo();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== mo) {
            var o = mo.memoizedState;
            if (((i = o.destroy), null !== r && So(r, o.deps)))
              return void (a.memoizedState = Vo(t, n, i, r));
          }
          (vo.flags |= e), (a.memoizedState = Vo(1 | t, n, i, r));
        }
        function Ho(e, t) {
          return Bo(8390656, 8, e, t);
        }
        function Wo(e, t) {
          return Uo(2048, 8, e, t);
        }
        function $o(e, t) {
          return Uo(4, 2, e, t);
        }
        function Yo(e, t) {
          return Uo(4, 4, e, t);
        }
        function Qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Xo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Uo(4, 4, Qo.bind(null, t, e), n)
          );
        }
        function qo() {}
        function Zo(e, t) {
          var n = jo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Go(e, t) {
          var n = jo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ko(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (xl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (vo.lanes |= n), (_s |= n), (e.baseState = !0)),
              t);
        }
        function Jo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function el() {
          return jo().memoizedState;
        }
        function tl(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = Ti(e, t, n, r))) {
            ru(n, e, r, tu()), il(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = nu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  l = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, o))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), ji(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Ti(e, t, a, r)) &&
              (ru(n, e, r, (a = tu())), il(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vo || (null !== t && t === vo);
        }
        function al(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function il(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var ol = {
            readContext: Pi,
            useCallback: ko,
            useContext: ko,
            useEffect: ko,
            useImperativeHandle: ko,
            useInsertionEffect: ko,
            useLayoutEffect: ko,
            useMemo: ko,
            useReducer: ko,
            useRef: ko,
            useState: ko,
            useDebugValue: ko,
            useDeferredValue: ko,
            useTransition: ko,
            useMutableSource: ko,
            useSyncExternalStore: ko,
            useId: ko,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Pi,
            useCallback: function (e, t) {
              return (Co().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Pi,
            useEffect: Ho,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bo(4194308, 4, Qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Co();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Co();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Co().memoizedState = e);
            },
            useState: zo,
            useDebugValue: qo,
            useDeferredValue: function (e) {
              return (Co().memoizedState = e);
            },
            useTransition: function () {
              var e = zo(!1),
                t = e[0];
              return (
                (e = Jo.bind(null, e[1])), (Co().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vo,
                a = Co();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Os)) throw Error(i(349));
                0 !== (30 & ho) || Ro(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Ho(Ao.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Vo(9, Mo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Co(),
                t = Os.identifierPrefix;
              if (ai) {
                var n = Ga;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Za & ~(1 << (32 - ot(Za) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Pi,
            useCallback: Zo,
            useContext: Pi,
            useEffect: Wo,
            useImperativeHandle: Xo,
            useInsertionEffect: $o,
            useLayoutEffect: Yo,
            useMemo: Go,
            useReducer: No,
            useRef: Io,
            useState: function () {
              return No(To);
            },
            useDebugValue: qo,
            useDeferredValue: function (e) {
              return Ko(jo(), mo.memoizedState, e);
            },
            useTransition: function () {
              return [No(To)[0], jo().memoizedState];
            },
            useMutableSource: Lo,
            useSyncExternalStore: Fo,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Pi,
            useCallback: Zo,
            useContext: Pi,
            useEffect: Wo,
            useImperativeHandle: Xo,
            useInsertionEffect: $o,
            useLayoutEffect: Yo,
            useMemo: Go,
            useReducer: Oo,
            useRef: Io,
            useState: function () {
              return Oo(To);
            },
            useDebugValue: qo,
            useDeferredValue: function (e) {
              var t = jo();
              return null === mo
                ? (t.memoizedState = e)
                : Ko(t, mo.memoizedState, e);
            },
            useTransition: function () {
              return [Oo(To)[0], jo().memoizedState];
            },
            useMutableSource: Lo,
            useSyncExternalStore: Fo,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Ri(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $s || (($s = !0), (Ys = r)), dl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = Ri(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === Qs ? (Qs = new Set([this])) : Qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ri(-1, 1)).tag = 2), Mi(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = x.ReactCurrentOwner,
          xl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? Gi(t, null, n, r) : Zi(t, e.child, n, r);
        }
        function kl(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Ei(t, a),
            (r = Eo(e, t, n, r, i, a)),
            (n = Po()),
            null === e || xl
              ? (ai && n && ei(t), (t.flags |= 1), wl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function Sl(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Ru(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Au(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), El(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(o, r) &&
              e.ref === t.ref
            )
              return $l(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Mu(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (sr(i, r) && e.ref === t.ref) {
              if (((xl = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $l(e, t, a);
              0 !== (131072 & e.flags) && (xl = !0);
            }
          }
          return jl(e, t, n, r, a);
        }
        function Pl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Ms, Rs),
                (Rs |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Ms, Rs),
                  (Rs |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Ca(Ms, Rs),
                (Rs |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Ms, Rs),
              (Rs |= r);
          return wl(e, t, a, n), t.child;
        }
        function Cl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function jl(e, t, n, r, a) {
          var i = Fa(n) ? Oa : Ta.current;
          return (
            (i = La(t, i)),
            Ei(t, a),
            (n = Eo(e, t, n, r, i, a)),
            (r = Po()),
            null === e || xl
              ? (ai && r && ei(t), (t.flags |= 1), wl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function Tl(e, t, n, r, a) {
          if (Fa(n)) {
            var i = !0;
            Da(t);
          } else i = !1;
          if ((Ei(t, a), null === t.stateNode))
            Wl(e, t), Hi(t, n, r), $i(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var s = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Pi(u))
              : (u = La(t, (u = Fa(n) ? Oa : Ta.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || s !== u) && Wi(t, o, r, u)),
              (Oi = !1);
            var d = t.memoizedState;
            (o.state = d),
              _i(t, r, o, a),
              (s = t.memoizedState),
              l !== r || d !== s || Na.current || Oi
                ? ("function" === typeof c &&
                    (Ii(t, n, c, r), (s = t.memoizedState)),
                  (l = Oi || Ui(t, n, l, r, d, s, u))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = l))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Fi(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : mi(t.type, l)),
              (o.props = u),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Pi(s))
                : (s = La(t, (s = Fa(n) ? Oa : Ta.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== f || d !== s) && Wi(t, o, r, s)),
              (Oi = !1),
              (d = t.memoizedState),
              (o.state = d),
              _i(t, r, o, a);
            var h = t.memoizedState;
            l !== f || d !== h || Na.current || Oi
              ? ("function" === typeof p &&
                  (Ii(t, n, p, r), (h = t.memoizedState)),
                (u = Oi || Ui(t, n, u, r, d, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, s),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = s),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Nl(e, t, n, r, i, a);
        }
        function Nl(e, t, n, r, a, i) {
          Cl(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && _a(t, n, !1), $l(e, t, i);
          (r = t.stateNode), (bl.current = t);
          var l =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Zi(t, e.child, null, i)),
                (t.child = Zi(t, null, l, i)))
              : wl(e, t, l, i),
            (t.memoizedState = r.state),
            a && _a(t, n, !0),
            t.child
          );
        }
        function Ol(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ma(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ma(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Ll(e, t, n, r, a) {
          return pi(), hi(a), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Fl,
          Rl,
          Ml,
          Al,
          Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function _l(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function zl(e, t, n) {
          var r,
            a = t.pendingProps,
            o = lo.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ca(lo, 1 & o),
            null === e)
          )
            return (
              ui(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = _u(s, a, 0, null)),
                      (e = Du(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = _l(n)),
                      (t.memoizedState = Dl),
                      e)
                    : Vl(t, s))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Il(e, t, l, (r = fl(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = _u(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Du(o, a, l, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Zi(t, e.child, null, l),
                    (t.child.memoizedState = _l(l)),
                    (t.memoizedState = Dl),
                    o);
              if (0 === (1 & t.mode)) return Il(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Il(e, t, l, (r = fl((o = Error(i(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), xl || s)) {
                if (null !== (r = Os)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Ni(e, a), ru(r, e, a, -1));
                }
                return mu(), Il(e, t, l, (r = fl(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ri = ua(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((Qa[Xa++] = Za),
                    (Qa[Xa++] = Ga),
                    (Qa[Xa++] = qa),
                    (Za = e.id),
                    (Ga = e.overflow),
                    (qa = t)),
                  (t = Vl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, o, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Mu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (l = Mu(r, l))
                : ((l = Du(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? _l(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Dl),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Mu(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Vl(e, t) {
          return (
            ((t = _u(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Il(e, t, n, r) {
          return (
            null !== r && hi(r),
            Zi(t, e.child, null, n),
            ((e = Vl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Si(e.return, t, n);
        }
        function Ul(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Hl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = lo.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bl(e, n, t);
                else if (19 === e.tag) Bl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(lo, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === so(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ul(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === so(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ul(t, !0, n, null, i);
                break;
              case "together":
                Ul(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $l(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (_s |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Mu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Mu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Yl(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Xl(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ql(t), null;
            case 1:
            case 17:
              return Fa(t.type) && Ra(), Ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Pa(Na),
                Pa(Ta),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fi(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (lu(ii), (ii = null)))),
                Rl(e, t),
                Ql(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ml(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Ql(t), null;
                }
                if (((e = no(Ji.current)), fi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Vr("cancel", r), Vr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Vr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ar.length; a++) Vr(Ar[a], r);
                      break;
                    case "source":
                      Vr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Vr("error", r), Vr("load", r);
                      break;
                    case "details":
                      Vr("toggle", r);
                      break;
                    case "input":
                      Z(r, o), Vr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Vr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Vr("invalid", r);
                  }
                  for (var s in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(s)) {
                      var u = o[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Kr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Kr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Vr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Y(r), J(r, o, !0);
                      break;
                    case "textarea":
                      Y(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Fl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Vr("cancel", e), Vr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Vr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ar.length; a++) Vr(Ar[a], e);
                        a = r;
                        break;
                      case "source":
                        Vr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Vr("error", e), Vr("load", e), (a = r);
                        break;
                      case "details":
                        Vr("toggle", e), (a = r);
                        break;
                      case "input":
                        Z(e, r), (a = q(e, r)), Vr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = _({}, r, { value: void 0 })),
                          Vr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Vr("invalid", e);
                    }
                    for (o in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (l.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Vr("scroll", e)
                              : null != c && b(e, o, c, s));
                      }
                    switch (n) {
                      case "input":
                        Y(e), J(e, r, !1);
                        break;
                      case "textarea":
                        Y(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ql(t), null;
            case 6:
              if (e && null != t.stateNode) Al(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = no(to.current)), no(Ji.current), fi(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (o = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Kr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Kr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Ql(t), null;
            case 13:
              if (
                (Pa(lo),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  di(), pi(), (t.flags |= 98560), (o = !1);
                else if (((o = fi(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[da] = t;
                  } else
                    pi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ql(t), (o = !1);
                } else null !== ii && (lu(ii), (ii = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & lo.current)
                        ? 0 === As && (As = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ql(t),
                  null);
            case 4:
              return (
                ao(),
                Rl(e, t),
                null === e && Ur(t.stateNode.containerInfo),
                Ql(t),
                null
              );
            case 10:
              return ki(t.type._context), Ql(t), null;
            case 19:
              if ((Pa(lo), null === (o = t.memoizedState))) return Ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = o.rendering)))
                if (r) Yl(o, !1);
                else {
                  if (0 !== As || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = so(e))) {
                        for (
                          t.flags |= 128,
                            Yl(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(lo, (1 & lo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ge() > Hs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Yl(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = so(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Yl(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !s.alternate &&
                        !ai)
                    )
                      return Ql(t), null;
                  } else
                    2 * Ge() - o.renderingStartTime > Hs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Yl(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = lo.current),
                  Ca(lo, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ql(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Rs) &&
                    (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function ql(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Fa(t.type) && Ra(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Pa(Na),
                Pa(Ta),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Pa(lo),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                pi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Pa(lo), null;
            case 4:
              return ao(), null;
            case 10:
              return ki(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Fl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Rl = function () {}),
          (Ml = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no(Ji.current);
              var i,
                o = null;
              switch (n) {
                case "input":
                  (a = q(e, a)), (r = q(e, r)), (o = []);
                  break;
                case "select":
                  (a = _({}, a, { value: void 0 })),
                    (r = _({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (i in s)
                      s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (i in s)
                        !s.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          s[i] !== u[i] &&
                          (n || (n = {}), (n[i] = u[i]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Vr("scroll", e),
                            o || s === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Al = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Zl = !1,
          Gl = !1,
          Kl = "function" === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Pu(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Pu(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && ts(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function as(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function is(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var fs = null,
          ds = !1;
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
        }
        function hs(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Gl || es(n, t);
            case 6:
              var r = fs,
                a = ds;
              (fs = null),
                ps(e, t, n),
                (ds = a),
                null !== (fs = r) &&
                  (ds
                    ? ((e = fs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fs.removeChild(n.stateNode));
              break;
            case 18:
              null !== fs &&
                (ds
                  ? ((e = fs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ut(e))
                  : sa(fs, n.stateNode));
              break;
            case 4:
              (r = fs),
                (a = ds),
                (fs = n.stateNode.containerInfo),
                (ds = !0),
                ps(e, t, n),
                (fs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      ts(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              ps(e, t, n);
              break;
            case 1:
              if (
                !Gl &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Pu(n, t, l);
                }
              ps(e, t, n);
              break;
            case 21:
              ps(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gl = (r = Gl) || null !== n.memoizedState),
                  ps(e, t, n),
                  (Gl = r))
                : ps(e, t, n);
              break;
            default:
              ps(e, t, n);
          }
        }
        function vs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Kl()),
              t.forEach(function (t) {
                var r = Nu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (fs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (fs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === fs) throw Error(i(160));
                hs(o, l, a), (fs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Pu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), ys(e), 4 & r)) {
                try {
                  rs(3, e, e.return), as(3, e);
                } catch (m) {
                  Pu(e, e.return, m);
                }
                try {
                  rs(5, e, e.return);
                } catch (m) {
                  Pu(e, e.return, m);
                }
              }
              break;
            case 1:
              ms(t, e), ys(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                ys(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  Pu(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : o,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === o.type &&
                      null != o.name &&
                      G(a, o),
                      be(s, l);
                    var c = be(s, o);
                    for (l = 0; l < u.length; l += 2) {
                      var f = u[l],
                        d = u[l + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (s) {
                      case "input":
                        K(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (m) {
                    Pu(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), ys(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (m) {
                  Pu(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                ys(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (m) {
                  Pu(e, e.return, m);
                }
              break;
            case 4:
            default:
              ms(t, e), ys(e);
              break;
            case 13:
              ms(t, e),
                ys(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Us = Ge())),
                4 & r && vs(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gl = (c = Gl) || f), ms(t, e), (Gl = c))
                  : ms(t, e),
                ys(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Jl = e, f = e.child; null !== f; ) {
                    for (d = Jl = f; null !== Jl; ) {
                      switch (((h = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              Pu(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ks(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jl = h)) : ks(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((s = d.stateNode),
                              (l =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = ve("display", l)));
                      } catch (m) {
                        Pu(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        Pu(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), ys(e), 4 & r && vs(e);
            case 21:
          }
        }
        function ys(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cs(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  us(e, ss(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (l) {
              Pu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          (Jl = e), xs(e, t, n);
        }
        function xs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var a = Jl,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Zl;
              if (!o) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Gl;
                l = Zl;
                var u = Gl;
                if (((Zl = o), (Gl = s) && !u))
                  for (Jl = a; null !== Jl; )
                    (s = (o = Jl).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Ss(a)
                        : null !== s
                        ? ((s.return = o), (Jl = s))
                        : Ss(a);
                for (; null !== i; ) (Jl = i), xs(i, t, n), (i = i.sibling);
                (Jl = a), (Zl = l), (Gl = u);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Jl = i))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gl || as(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : mi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && zi(t, o, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        zi(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ut(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Gl || (512 & t.flags && is(t));
              } catch (p) {
                Pu(t, t.return, p);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    as(4, t);
                  } catch (s) {
                    Pu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Pu(t, a, s);
                    }
                  }
                  var i = t.return;
                  try {
                    is(t);
                  } catch (s) {
                    Pu(t, i, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    is(t);
                  } catch (s) {
                    Pu(t, o, s);
                  }
              }
            } catch (s) {
              Pu(t, t.return, s);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var Es,
          Ps = Math.ceil,
          Cs = x.ReactCurrentDispatcher,
          js = x.ReactCurrentOwner,
          Ts = x.ReactCurrentBatchConfig,
          Ns = 0,
          Os = null,
          Ls = null,
          Fs = 0,
          Rs = 0,
          Ms = Ea(0),
          As = 0,
          Ds = null,
          _s = 0,
          zs = 0,
          Vs = 0,
          Is = null,
          Bs = null,
          Us = 0,
          Hs = 1 / 0,
          Ws = null,
          $s = !1,
          Ys = null,
          Qs = null,
          Xs = !1,
          qs = null,
          Zs = 0,
          Gs = 0,
          Ks = null,
          Js = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Ns) ? Ge() : -1 !== Js ? Js : (Js = Ge());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ns) && 0 !== Fs
            ? Fs & -Fs
            : null !== vi.transition
            ? (0 === eu && (eu = vt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Zt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Gs) throw ((Gs = 0), (Ks = null), Error(i(185)));
          gt(e, n, r),
            (0 !== (2 & Ns) && e === Os) ||
              (e === Os && (0 === (2 & Ns) && (zs |= n), 4 === As && su(e, Fs)),
              au(e, r),
              1 === n &&
                0 === Ns &&
                0 === (1 & t.mode) &&
                ((Hs = Ge() + 500), Va && Ua()));
        }
        function au(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                l = 1 << o,
                s = a[o];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[o] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (i &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Os ? Fs : 0);
          if (0 === r)
            null !== n && Xe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Xe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Va = !0), Ba(e);
                  })(uu.bind(null, e))
                : Ba(uu.bind(null, e)),
                oa(function () {
                  0 === (6 & Ns) && Ua();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ou(n, iu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function iu(e, t) {
          if (((Js = -1), (eu = 0), 0 !== (6 & Ns))) throw Error(i(327));
          var n = e.callbackNode;
          if (Su() && e.callbackNode !== n) return null;
          var r = dt(e, e === Os ? Fs : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var a = Ns;
            Ns |= 2;
            var o = vu();
            for (
              (Os === e && Fs === t) ||
              ((Ws = null), (Hs = Ge() + 500), pu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (s) {
                hu(e, s);
              }
            wi(),
              (Cs.current = o),
              (Ns = a),
              null !== Ls ? (t = 0) : ((Os = null), (Fs = 0), (t = As));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ou(e, a))),
              1 === t)
            )
              throw ((n = Ds), pu(e, 0), su(e, r), au(e, Ge()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(i(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = ou(e, o))),
                  1 === t))
              )
                throw ((n = Ds), pu(e, 0), su(e, r), au(e, Ge()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  ku(e, Bs, Ws);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Us + 500 - Ge()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ku.bind(null, e, Bs, Ws), t);
                    break;
                  }
                  ku(e, Bs, Ws);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - ot(r);
                    (o = 1 << l), (l = t[l]) > a && (a = l), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Ps(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ku.bind(null, e, Bs, Ws), r);
                    break;
                  }
                  ku(e, Bs, Ws);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return au(e, Ge()), e.callbackNode === n ? iu.bind(null, e) : null;
        }
        function ou(e, t) {
          var n = Is;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Bs), (Bs = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function su(e, t) {
          for (
            t &= ~Vs,
              t &= ~zs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Ns)) throw Error(i(327));
          Su();
          var t = dt(e, 0);
          if (0 === (1 & t)) return au(e, Ge()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ou(e, r)));
          }
          if (1 === n) throw ((n = Ds), pu(e, 0), su(e, t), au(e, Ge()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ku(e, Bs, Ws),
            au(e, Ge()),
            null
          );
        }
        function cu(e, t) {
          var n = Ns;
          Ns |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ns = n) && ((Hs = Ge() + 500), Va && Ua());
          }
        }
        function fu(e) {
          null !== qs && 0 === qs.tag && 0 === (6 & Ns) && Su();
          var t = Ns;
          Ns |= 1;
          var n = Ts.transition,
            r = bt;
          try {
            if (((Ts.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ts.transition = n), 0 === (6 & (Ns = t)) && Ua();
          }
        }
        function du() {
          (Rs = Ms.current), Pa(Ms);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ls))
            for (n = Ls.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ra();
                  break;
                case 3:
                  ao(), Pa(Na), Pa(Ta), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Pa(lo);
                  break;
                case 10:
                  ki(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Os = e),
            (Ls = e = Mu(e.current, null)),
            (Fs = Rs = t),
            (As = 0),
            (Ds = null),
            (Vs = zs = _s = 0),
            (Bs = Is = null),
            null !== Ci)
          ) {
            for (t = 0; t < Ci.length; t++)
              if (null !== (r = (n = Ci[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Ci = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Ls;
            try {
              if ((wi(), (fo.current = ol), yo)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((ho = 0),
                (go = mo = vo = null),
                (bo = !1),
                (xo = 0),
                (js.current = null),
                null === n || null === n.return)
              ) {
                (As = 1), (Ds = t), (Ls = null);
                break;
              }
              e: {
                var o = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Fs),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      yl(h, l, s, 0, t),
                      1 & h.mode && ml(o, c, t),
                      (u = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(u), (t.updateQueue = m);
                    } else v.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(o, c, t), mu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (ai && 1 & s.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yl(g, l, s, 0, t),
                      hi(cl(u, s));
                    break e;
                  }
                }
                (o = u = cl(u, s)),
                  4 !== As && (As = 2),
                  null === Is ? (Is = [o]) : Is.push(o),
                  (o = l);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Di(o, hl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qs || !Qs.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Di(o, vl(o, s, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              wu(n);
            } catch (x) {
              (t = x), Ls === n && null !== n && (Ls = n = n.return);
              continue;
            }
            break;
          }
        }
        function vu() {
          var e = Cs.current;
          return (Cs.current = ol), null === e ? ol : e;
        }
        function mu() {
          (0 !== As && 3 !== As && 2 !== As) || (As = 4),
            null === Os ||
              (0 === (268435455 & _s) && 0 === (268435455 & zs)) ||
              su(Os, Fs);
        }
        function gu(e, t) {
          var n = Ns;
          Ns |= 2;
          var r = vu();
          for ((Os === e && Fs === t) || ((Ws = null), pu(e, t)); ; )
            try {
              yu();
              break;
            } catch (a) {
              hu(e, a);
            }
          if ((wi(), (Ns = n), (Cs.current = r), null !== Ls))
            throw Error(i(261));
          return (Os = null), (Fs = 0), As;
        }
        function yu() {
          for (; null !== Ls; ) xu(Ls);
        }
        function bu() {
          for (; null !== Ls && !qe(); ) xu(Ls);
        }
        function xu(e) {
          var t = Es(e.alternate, e, Rs);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Ls = t),
            (js.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Xl(n, t, Rs))) return void (Ls = n);
            } else {
              if (null !== (n = ql(n, t)))
                return (n.flags &= 32767), void (Ls = n);
              if (null === e) return (As = 6), void (Ls = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ls = t);
            Ls = t = e;
          } while (null !== t);
          0 === As && (As = 5);
        }
        function ku(e, t, n) {
          var r = bt,
            a = Ts.transition;
          try {
            (Ts.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Su();
                } while (null !== qs);
                if (0 !== (6 & Ns)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, o),
                  e === Os && ((Ls = Os = null), (Fs = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Xs ||
                    ((Xs = !0),
                    Ou(tt, function () {
                      return Su(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Ts.transition), (Ts.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Ns;
                  (Ns |= 4),
                    (js.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (s = l + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = l),
                                    p === o && ++f === r && (u = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Jl = t;
                        null !== Jl;

                      )
                        if (
                          ((e = (t = Jl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        g = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : mi(t.type, m),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (w) {
                              Pu(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (v = ns), (ns = !1);
                    })(e, n),
                    gs(n, e),
                    hr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bs(n, e, a),
                    Ze(),
                    (Ns = s),
                    (bt = l),
                    (Ts.transition = o);
                } else e.current = n;
                if (
                  (Xs && ((Xs = !1), (qs = e), (Zs = a)),
                  (o = e.pendingLanes),
                  0 === o && (Qs = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  au(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if ($s) throw (($s = !1), (e = Ys), (Ys = null), e);
                0 !== (1 & Zs) && 0 !== e.tag && Su(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Ks
                      ? Gs++
                      : ((Gs = 0), (Ks = e))
                    : (Gs = 0),
                  Ua();
              })(e, t, n, r);
          } finally {
            (Ts.transition = a), (bt = r);
          }
          return null;
        }
        function Su() {
          if (null !== qs) {
            var e = xt(Zs),
              t = Ts.transition,
              n = bt;
            try {
              if (((Ts.transition = null), (bt = 16 > e ? 16 : e), null === qs))
                var r = !1;
              else {
                if (((e = qs), (qs = null), (Zs = 0), 0 !== (6 & Ns)))
                  throw Error(i(331));
                var a = Ns;
                for (Ns |= 4, Jl = e.current; null !== Jl; ) {
                  var o = Jl,
                    l = o.child;
                  if (0 !== (16 & Jl.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Jl = c; null !== Jl; ) {
                          var f = Jl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Jl = d);
                          else
                            for (; null !== Jl; ) {
                              var p = (f = Jl).sibling,
                                h = f.return;
                              if ((os(f), f === c)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jl = p);
                                break;
                              }
                              Jl = h;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var g = m.sibling;
                            (m.sibling = null), (m = g);
                          } while (null !== m);
                        }
                      }
                      Jl = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== l)
                    (l.return = o), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (o = Jl).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Jl = y);
                        break e;
                      }
                      Jl = o.return;
                    }
                }
                var b = e.current;
                for (Jl = b; null !== Jl; ) {
                  var x = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x)
                    (x.return = l), (Jl = x);
                  else
                    e: for (l = b; null !== Jl; ) {
                      if (0 !== (2048 & (s = Jl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (k) {
                          Pu(s, s.return, k);
                        }
                      if (s === l) {
                        Jl = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Jl = w);
                        break e;
                      }
                      Jl = s.return;
                    }
                }
                if (
                  ((Ns = a),
                  Ua(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ts.transition = t);
            }
          }
          return !1;
        }
        function Eu(e, t, n) {
          (e = Mi(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (gt(e, 1, t), au(e, t));
        }
        function Pu(e, t, n) {
          if (3 === e.tag) Eu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Eu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qs || !Qs.has(r)))
                ) {
                  (t = Mi(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (gt(t, 1, e), au(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Os === e &&
              (Fs & n) === n &&
              (4 === As ||
              (3 === As && (130023424 & Fs) === Fs && 500 > Ge() - Us)
                ? pu(e, 0)
                : (Vs |= n)),
            au(e, t);
        }
        function ju(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = Ni(e, t)) && (gt(e, t, n), au(e, n));
        }
        function Tu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), ju(e, n);
        }
        function Nu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), ju(e, n);
        }
        function Ou(e, t) {
          return Qe(e, t);
        }
        function Lu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Fu(e, t, n, r) {
          return new Lu(e, t, n, r);
        }
        function Ru(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Mu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Fu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Au(e, t, n, r, a, o) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Ru(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return Du(n.children, a, o, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case P:
                return (
                  ((e = Fu(12, n, t, 2 | a)).elementType = P), (e.lanes = o), e
                );
              case N:
                return (
                  ((e = Fu(13, n, t, a)).elementType = N), (e.lanes = o), e
                );
              case O:
                return (
                  ((e = Fu(19, n, t, a)).elementType = O), (e.lanes = o), e
                );
              case R:
                return _u(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      l = 10;
                      break e;
                    case j:
                      l = 9;
                      break e;
                    case T:
                      l = 11;
                      break e;
                    case L:
                      l = 14;
                      break e;
                    case F:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Fu(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Du(e, t, n, r) {
          return ((e = Fu(7, e, r, t)).lanes = n), e;
        }
        function _u(e, t, n, r) {
          return (
            ((e = Fu(22, e, r, t)).elementType = R),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function zu(e, t, n) {
          return ((e = Fu(6, e, null, t)).lanes = n), e;
        }
        function Vu(e, t, n) {
          return (
            ((t = Fu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Iu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, t, n, r, a, i, o, l, s) {
          return (
            (e = new Iu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Fu(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Li(i),
            e
          );
        }
        function Uu(e) {
          if (!e) return ja;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Fa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Fa(n)) return Aa(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, a, i, o, l, s) {
          return (
            ((e = Bu(n, r, !0, e, 0, i, 0, l, s)).context = Uu(null)),
            (n = e.current),
            ((i = Ri((r = tu()), (a = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Mi(n, i, a),
            (e.current.lanes = a),
            gt(e, a, r),
            au(e, r),
            e
          );
        }
        function Wu(e, t, n, r) {
          var a = t.current,
            i = tu(),
            o = nu(a);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ri(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Mi(a, t, o)) && (ru(e, a, o, i), Ai(e, a, o)),
            o
          );
        }
        function $u(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Yu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qu(e, t) {
          Yu(e, t), (e = e.alternate) && Yu(e, t);
        }
        Es = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Na.current) xl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ol(t), pi();
                        break;
                      case 5:
                        io(t);
                        break;
                      case 1:
                        Fa(t.type) && Da(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(gi, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(lo, 1 & lo.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? zl(e, t, n)
                            : (Ca(lo, 1 & lo.current),
                              null !== (e = $l(e, t, n)) ? e.sibling : null);
                        Ca(lo, 1 & lo.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(lo, lo.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Pl(e, t, n);
                    }
                    return $l(e, t, n);
                  })(e, t, n)
                );
              xl = 0 !== (131072 & e.flags);
            }
          else (xl = !1), ai && 0 !== (1048576 & t.flags) && Ja(t, Ya, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wl(e, t), (e = t.pendingProps);
              var a = La(t, Ta.current);
              Ei(t, n), (a = Eo(null, t, r, e, a, n));
              var o = Po();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Fa(r) ? ((o = !0), Da(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Li(t),
                    (a.updater = Bi),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    $i(t, r, e, n),
                    (t = Nl(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ai && o && ei(t),
                    wl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ru(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = mi(r, e)),
                  a)
                ) {
                  case 0:
                    t = jl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = kl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, mi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                jl(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Tl(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 3:
              e: {
                if ((Ol(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Fi(e, t),
                  _i(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ll(e, t, r, n, (a = cl(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ll(e, t, r, n, (a = cl(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ua(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = Gi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pi(), r === a)) {
                    t = $l(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                io(t),
                null === e && ui(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Cl(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ui(t), null;
            case 13:
              return zl(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Zi(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                kl(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (l = a.value),
                  Ca(gi, r._currentValue),
                  (r._currentValue = l),
                  null !== o)
                )
                  if (lr(o.value, l)) {
                    if (o.children === a.children && !Na.current) {
                      t = $l(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        l = o.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Ri(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              Si(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        l = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (l = o.return)) throw Error(i(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Si(l, n, t),
                          (l = o.sibling);
                      } else l = o.child;
                      if (null !== l) l.return = o;
                      else
                        for (l = o; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (o = l.sibling)) {
                            (o.return = l.return), (l = o);
                            break;
                          }
                          l = l.return;
                        }
                      o = l;
                    }
                wl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ei(t, n),
                (r = r((a = Pi(a)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = mi((r = t.type), t.pendingProps)),
                Sl(e, t, r, (a = mi(r.type, a)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : mi(r, a)),
                Wl(e, t),
                (t.tag = 1),
                Fa(r) ? ((e = !0), Da(t)) : (e = !1),
                Ei(t, n),
                Hi(t, r, a),
                $i(t, r, a, n),
                Nl(null, t, r, !0, e, n)
              );
            case 19:
              return Hl(e, t, n);
            case 22:
              return Pl(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Xu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function qu(e) {
          this._internalRoot = e;
        }
        function Zu(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Ju() {}
        function ec(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = $u(o);
                l.call(e);
              };
            }
            Wu(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = $u(o);
                    i.call(e);
                  };
                }
                var o = Hu(t, r, e, 0, null, !1, 0, "", Ju);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  fu(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = $u(s);
                  l.call(e);
                };
              }
              var s = Bu(e, 0, !1, null, 0, !1, 0, "", Ju);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                fu(function () {
                  Wu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return $u(o);
        }
        (Zu.prototype.render = qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Wu(e, t, null, null);
          }),
          (Zu.prototype.unmount = qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fu(function () {
                  Wu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Zu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Rt.length && 0 !== t && t < Rt[n].priority;
                n++
              );
              Rt.splice(n, 0, e), 0 === n && _t(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    au(t, Ge()),
                    0 === (6 & Ns) && ((Hs = Ge() + 500), Ua()));
                }
                break;
              case 13:
                fu(function () {
                  var t = Ni(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Qu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ni(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Qu(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Ni(e, t);
              if (null !== n) ru(n, e, t, tu());
              Qu(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Pt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((K(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(i(90));
                      Q(r), K(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Te = cu),
          (Ne = fu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, wa, Ce, je, cu],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (it = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gu(t)) throw Error(i(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gu(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Xu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ku(t)) throw Error(i(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gu(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              l = Xu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, a, 0, o, l)),
              (e[ha] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Zu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ku(t)) throw Error(i(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ku(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (fu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ku(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: l.current,
          };
        }
        (t.Fragment = i), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), v(x, g.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function P(e, t, r) {
          var a,
            i = {},
            o = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (i[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) i.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === i[a] && (i[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: l,
            props: i,
            _owner: S.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var j = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, a, i, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = "" === i ? "." + T(s, 0) : i),
              w(o)
                ? ((a = ""),
                  null != e && (a = e.replace(j, "$&/") + "/"),
                  N(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(j, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (i = "" === i ? "." : i + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + T((l = e[u]), u);
              s += N(l, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += N((l = l.value), t, a, (c = i + T(l, u++)), o);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var F = { current: null },
          R = { transition: null },
          M = {
            ReactCurrentDispatcher: F,
            ReactCurrentBatchConfig: R,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              i = e.key,
              o = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (l = S.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = P),
          (t.createFactory = function (e) {
            var t = P.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = R.transition;
            R.transition = {};
            try {
              e();
            } finally {
              R.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return F.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return F.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return F.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return F.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return F.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return F.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return F.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return F.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return F.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return F.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return F.current.useRef(e);
          }),
          (t.useState = function (e) {
            return F.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return F.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return F.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > i(s, n))
                u < a && 0 > i(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((m = !1), x(e), !v))
            if (null !== r(u)) (v = !0), R(k);
            else {
              var t = r(c);
              null !== t && M(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (v = !1), m && ((m = !1), y(C), (C = -1)), (h = !0);
          var i = p;
          try {
            for (
              x(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !N()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var l = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(u) && a(u),
                  x(n);
              } else a(u);
              d = r(u);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && M(w, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          P = null,
          C = -1,
          j = 5,
          T = -1;
        function N() {
          return !(t.unstable_now() - T < j);
        }
        function O() {
          if (null !== P) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              n = P(!0, e);
            } finally {
              n ? S() : ((E = !1), (P = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var L = new MessageChannel(),
            F = L.port2;
          (L.port1.onmessage = O),
            (S = function () {
              F.postMessage(null);
            });
        } else
          S = function () {
            g(O, 0);
          };
        function R(e) {
          (P = e), E || ((E = !0), S());
        }
        function M(e, n) {
          C = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), R(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (j = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (l = i + l),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (m ? (y(C), (C = -1)) : (m = !0), M(w, i - o)))
                : ((e.sortIndex = l), n(u, e), v || h || ((v = !0), R(k))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      391: function (e) {
        "use strict";
        var t = function () {};
        e.exports = t;
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.m = e),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".258d0ea0.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "madison-olguin:";
      n.l = function (r, a, i, o) {
        if (e[r]) e[r].push(a);
        else {
          var l, s;
          if (void 0 !== i)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var f = u[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + i
              ) {
                l = f;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + i),
            (l.src = r)),
            (e[r] = [a]);
          var d = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a &&
                  a.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var i = new Promise(function (n, r) {
              a = e[t] = [n, r];
            });
            r.push((a[2] = i));
            var o = n.p + n.u(t),
              l = new Error();
            n.l(
              o,
              function (r) {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = i),
                    (l.request = o),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var a,
            i,
            o = r[0],
            l = r[1],
            s = r[2],
            u = 0;
          if (
            o.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (s) s(n);
          }
          for (t && t(r); u < o.length; u++)
            (i = o[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        r = (self.webpackChunkmadison_olguin =
          self.webpackChunkmadison_olguin || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      "use strict";
      var e = n(791),
        t = n(250);
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      function a(e) {
        var t = (function (e, t) {
          if ("object" !== r(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var a = n.call(e, t || "default");
            if ("object" !== r(a)) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === r(t) ? t : String(t);
      }
      function i(e, t, n) {
        return (
          (t = a(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t) {
        if (e) {
          if ("string" === typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(e, t)
              : void 0
          );
        }
      }
      function c(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i,
                o,
                l = [],
                s = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    s = !0
                  );
              } catch (c) {
                (u = !0), (a = c);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          u(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function f(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function d(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = f(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var p = n(694),
        h = n.n(p),
        v = n(7),
        m = n.n(v),
        g = n(184),
        y = ["xxl", "xl", "lg", "md", "sm", "xs"],
        b = e.createContext({
          prefixes: {},
          breakpoints: y,
          minBreakpoint: "xs",
        });
      b.Consumer, b.Provider;
      function x(t, n) {
        var r = (0, e.useContext)(b).prefixes;
        return t || r[n] || n;
      }
      function w() {
        return (0, e.useContext)(b).breakpoints;
      }
      function k() {
        return (0, e.useContext)(b).minBreakpoint;
      }
      var S = [
          "bsPrefix",
          "className",
          "fluid",
          "rounded",
          "roundedCircle",
          "thumbnail",
        ],
        E =
          (m().string,
          m().bool,
          m().bool,
          m().bool,
          m().bool,
          e.forwardRef(function (e, t) {
            var n = e.bsPrefix,
              r = e.className,
              a = e.fluid,
              i = void 0 !== a && a,
              o = e.rounded,
              s = void 0 !== o && o,
              u = e.roundedCircle,
              c = void 0 !== u && u,
              f = e.thumbnail,
              p = void 0 !== f && f,
              v = d(e, S);
            return (
              (n = x(n, "img")),
              (0, g.jsx)(
                "img",
                l(
                  l({ ref: t }, v),
                  {},
                  {
                    className: h()(
                      r,
                      i && "".concat(n, "-fluid"),
                      s && "rounded",
                      c && "rounded-circle",
                      p && "".concat(n, "-thumbnail")
                    ),
                  }
                )
              )
            );
          }));
      E.displayName = "Image";
      var P = E,
        C =
          (n.p,
          n.p,
          n.p,
          n.p,
          n.p,
          n.p,
          n.p,
          n.p,
          n.p,
          n.p,
          n.p,
          n.p,
          n.p +
            "static/media/throwball-vert-noball-1358x2000.469d11a72a521c6aa8bf.png"),
        j =
          (n.p,
          n.p,
          n.p +
            "static/media/throwball-vert-ball-1358x2000.c00c4bde41271259d827.png"),
        T =
          (n.p,
          n.p,
          (0, e.createContext)({
            transformPagePoint: function (e) {
              return e;
            },
            isStatic: !1,
            reducedMotion: "never",
          })),
        N = (0, e.createContext)({}),
        O = (0, e.createContext)(null),
        L = "undefined" !== typeof document,
        F = L ? e.useLayoutEffect : e.useEffect,
        R = (0, e.createContext)({ strict: !1 });
      function M(e) {
        return (
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function A(e) {
        return "string" === typeof e || Array.isArray(e);
      }
      function D(e) {
        return "object" === typeof e && "function" === typeof e.start;
      }
      var _ = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        z = ["initial"].concat(_);
      function V(e) {
        return (
          D(e.animate) ||
          z.some(function (t) {
            return A(e[t]);
          })
        );
      }
      function I(e) {
        return Boolean(V(e) || e.variants);
      }
      function B(t) {
        var n = (function (e, t) {
            if (V(e)) {
              var n = e.initial,
                r = e.animate;
              return {
                initial: !1 === n || A(n) ? n : void 0,
                animate: A(r) ? r : void 0,
              };
            }
            return !1 !== e.inherit ? t : {};
          })(t, (0, e.useContext)(N)),
          r = n.initial,
          a = n.animate;
        return (0, e.useMemo)(
          function () {
            return { initial: r, animate: a };
          },
          [U(r), U(a)]
        );
      }
      function U(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var H = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        W = {},
        $ = function (e) {
          W[e] = {
            isEnabled: function (t) {
              return H[e].some(function (e) {
                return !!t[e];
              });
            },
          };
        };
      for (var Y in H) $(Y);
      var Q = (0, e.createContext)({}),
        X = (0, e.createContext)({}),
        q = Symbol.for("motionComponentSymbol");
      function Z(t) {
        var n = t.preloadedFeatures,
          r = t.createVisualElement,
          a = t.useRender,
          i = t.useVisualState,
          o = t.Component;
        n &&
          (function (e) {
            for (var t in e) W[t] = l(l({}, W[t]), e[t]);
          })(n);
        var s = (0, e.forwardRef)(function (t, s) {
          var u,
            c = l(l(l({}, (0, e.useContext)(T)), t), {}, { layoutId: G(t) }),
            f = c.isStatic,
            d = B(t),
            p = i(t, f);
          if (!f && L) {
            d.visualElement = (function (t, n, r, a) {
              var i = (0, e.useContext)(N).visualElement,
                o = (0, e.useContext)(R),
                l = (0, e.useContext)(O),
                s = (0, e.useContext)(T).reducedMotion,
                u = (0, e.useRef)();
              (a = a || o.renderer),
                !u.current &&
                  a &&
                  (u.current = a(t, {
                    visualState: n,
                    parent: i,
                    props: r,
                    presenceContext: l,
                    blockInitialAnimation: !!l && !1 === l.initial,
                    reducedMotionConfig: s,
                  }));
              var c = u.current;
              return (
                (0, e.useInsertionEffect)(function () {
                  c && c.update(r, l);
                }),
                F(function () {
                  c && c.render();
                }),
                (0, e.useEffect)(function () {
                  c && c.updateFeatures();
                }),
                (window.HandoffAppearAnimations ? F : e.useEffect)(function () {
                  c && c.animationState && c.animationState.animateChanges();
                }),
                c
              );
            })(o, p, c, r);
            var h = (0, e.useContext)(X),
              v = (0, e.useContext)(R).strict;
            d.visualElement && (u = d.visualElement.loadFeatures(c, v, n, h));
          }
          return e.createElement(
            N.Provider,
            { value: d },
            u && d.visualElement
              ? e.createElement(u, l({ visualElement: d.visualElement }, c))
              : null,
            a(
              o,
              t,
              (function (t, n, r) {
                return (0, e.useCallback)(
                  function (e) {
                    e && t.mount && t.mount(e),
                      n && (e ? n.mount(e) : n.unmount()),
                      r &&
                        ("function" === typeof r
                          ? r(e)
                          : M(r) && (r.current = e));
                  },
                  [n]
                );
              })(p, d.visualElement, s),
              p,
              f,
              d.visualElement
            )
          );
        });
        return (s[q] = o), s;
      }
      function G(t) {
        var n = t.layoutId,
          r = (0, e.useContext)(Q).id;
        return r && void 0 !== n ? r + "-" + n : n;
      }
      function K(e) {
        function t(t) {
          return Z(
            e(
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            )
          );
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var J = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function ee(e) {
        return (
          "string" === typeof e &&
          !e.includes("-") &&
          !!(J.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      var te = {};
      var ne = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        re = new Set(ne);
      function ae(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          re.has(e) ||
          e.startsWith("origin") ||
          ((n || void 0 !== r) && (!!te[e] || "opacity" === e))
        );
      }
      var ie = function (e) {
          return Boolean(e && e.getVelocity);
        },
        oe = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        le = ne.length;
      var se = function (e) {
          return function (t) {
            return "string" === typeof t && t.startsWith(e);
          };
        },
        ue = se("--"),
        ce = se("var(--"),
        fe = function (e, t) {
          return t && "number" === typeof e ? t.transform(e) : e;
        },
        de = function (e, t, n) {
          return Math.min(Math.max(n, e), t);
        },
        pe = {
          test: function (e) {
            return "number" === typeof e;
          },
          parse: parseFloat,
          transform: function (e) {
            return e;
          },
        },
        he = l(
          l({}, pe),
          {},
          {
            transform: function (e) {
              return de(0, 1, e);
            },
          }
        ),
        ve = l(l({}, pe), {}, { default: 1 }),
        me = function (e) {
          return Math.round(1e5 * e) / 1e5;
        },
        ge = /(-)?([\d]*\.?[\d])+/g,
        ye =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        be =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function xe(e) {
        return "string" === typeof e;
      }
      var we = function (e) {
          return {
            test: function (t) {
              return xe(t) && t.endsWith(e) && 1 === t.split(" ").length;
            },
            parse: parseFloat,
            transform: function (t) {
              return "".concat(t).concat(e);
            },
          };
        },
        ke = we("deg"),
        Se = we("%"),
        Ee = we("px"),
        Pe = we("vh"),
        Ce = we("vw"),
        je = l(
          l({}, Se),
          {},
          {
            parse: function (e) {
              return Se.parse(e) / 100;
            },
            transform: function (e) {
              return Se.transform(100 * e);
            },
          }
        ),
        Te = l(l({}, pe), {}, { transform: Math.round }),
        Ne = {
          borderWidth: Ee,
          borderTopWidth: Ee,
          borderRightWidth: Ee,
          borderBottomWidth: Ee,
          borderLeftWidth: Ee,
          borderRadius: Ee,
          radius: Ee,
          borderTopLeftRadius: Ee,
          borderTopRightRadius: Ee,
          borderBottomRightRadius: Ee,
          borderBottomLeftRadius: Ee,
          width: Ee,
          maxWidth: Ee,
          height: Ee,
          maxHeight: Ee,
          size: Ee,
          top: Ee,
          right: Ee,
          bottom: Ee,
          left: Ee,
          padding: Ee,
          paddingTop: Ee,
          paddingRight: Ee,
          paddingBottom: Ee,
          paddingLeft: Ee,
          margin: Ee,
          marginTop: Ee,
          marginRight: Ee,
          marginBottom: Ee,
          marginLeft: Ee,
          rotate: ke,
          rotateX: ke,
          rotateY: ke,
          rotateZ: ke,
          scale: ve,
          scaleX: ve,
          scaleY: ve,
          scaleZ: ve,
          skew: ke,
          skewX: ke,
          skewY: ke,
          distance: Ee,
          translateX: Ee,
          translateY: Ee,
          translateZ: Ee,
          x: Ee,
          y: Ee,
          z: Ee,
          perspective: Ee,
          transformPerspective: Ee,
          opacity: he,
          originX: je,
          originY: je,
          originZ: Ee,
          zIndex: Te,
          fillOpacity: he,
          strokeOpacity: he,
          numOctaves: Te,
        };
      function Oe(e, t, n, r) {
        var a = e.style,
          i = e.vars,
          o = e.transform,
          l = e.transformOrigin,
          s = !1,
          u = !1,
          c = !0;
        for (var f in t) {
          var d = t[f];
          if (ue(f)) i[f] = d;
          else {
            var p = Ne[f],
              h = fe(d, p);
            if (re.has(f)) {
              if (((s = !0), (o[f] = h), !c)) continue;
              d !== (p.default || 0) && (c = !1);
            } else f.startsWith("origin") ? ((u = !0), (l[f] = h)) : (a[f] = h);
          }
        }
        if (
          (t.transform ||
            (s || r
              ? (a.transform = (function (e, t, n, r) {
                  for (
                    var a = t.enableHardwareAcceleration,
                      i = void 0 === a || a,
                      o = t.allowTransformNone,
                      l = void 0 === o || o,
                      s = "",
                      u = 0;
                    u < le;
                    u++
                  ) {
                    var c = ne[u];
                    if (void 0 !== e[c]) {
                      var f = oe[c] || c;
                      s += "".concat(f, "(").concat(e[c], ") ");
                    }
                  }
                  return (
                    i && !e.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    r ? (s = r(e, n ? "" : s)) : l && n && (s = "none"),
                    s
                  );
                })(e.transform, n, c, r))
              : a.transform && (a.transform = "none")),
          u)
        ) {
          var v = l.originX,
            m = void 0 === v ? "50%" : v,
            g = l.originY,
            y = void 0 === g ? "50%" : g,
            b = l.originZ,
            x = void 0 === b ? 0 : b;
          a.transformOrigin = "".concat(m, " ").concat(y, " ").concat(x);
        }
      }
      var Le = function () {
        return { style: {}, transform: {}, transformOrigin: {}, vars: {} };
      };
      function Fe(e, t, n) {
        for (var r in t) ie(t[r]) || ae(r, n) || (e[r] = t[r]);
      }
      function Re(t, n, r) {
        var a = {};
        return (
          Fe(a, t.style || {}, t),
          Object.assign(
            a,
            (function (t, n, r) {
              var a = t.transformTemplate;
              return (0, e.useMemo)(
                function () {
                  var e = Le();
                  return (
                    Oe(e, n, { enableHardwareAcceleration: !r }, a),
                    Object.assign({}, e.vars, e.style)
                  );
                },
                [n]
              );
            })(t, n, r)
          ),
          t.transformValues ? t.transformValues(a) : a
        );
      }
      function Me(e, t, n) {
        var r = {},
          a = Re(e, t, n);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((r.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
              !0 === e.drag
                ? "none"
                : "pan-".concat("x" === e.drag ? "y" : "x"))),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (r.tabIndex = 0),
          (r.style = a),
          r
        );
      }
      var Ae = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function De(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          Ae.has(e)
        );
      }
      var _e,
        ze = function (e) {
          return !De(e);
        };
      try {
        (_e = require("@emotion/is-prop-valid").default) &&
          (ze = function (e) {
            return e.startsWith("on") ? !De(e) : _e(e);
          });
      } catch (ff) {}
      function Ve(e, t, n) {
        return "string" === typeof e ? e : Ee.transform(t + n * e);
      }
      var Ie = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Be = { offset: "strokeDashoffset", array: "strokeDasharray" };
      var Ue = [
        "attrX",
        "attrY",
        "attrScale",
        "originX",
        "originY",
        "pathLength",
        "pathSpacing",
        "pathOffset",
      ];
      function He(e, t, n, r, a) {
        var i = t.attrX,
          o = t.attrY,
          l = t.attrScale,
          s = t.originX,
          u = t.originY,
          c = t.pathLength,
          f = t.pathSpacing,
          p = void 0 === f ? 1 : f,
          h = t.pathOffset,
          v = void 0 === h ? 0 : h;
        if ((Oe(e, d(t, Ue), n, a), r))
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        else {
          (e.attrs = e.style), (e.style = {});
          var m = e.attrs,
            g = e.style,
            y = e.dimensions;
          m.transform && (y && (g.transform = m.transform), delete m.transform),
            y &&
              (void 0 !== s || void 0 !== u || g.transform) &&
              (g.transformOrigin = (function (e, t, n) {
                var r = Ve(t, e.x, e.width),
                  a = Ve(n, e.y, e.height);
                return "".concat(r, " ").concat(a);
              })(y, void 0 !== s ? s : 0.5, void 0 !== u ? u : 0.5)),
            void 0 !== i && (m.x = i),
            void 0 !== o && (m.y = o),
            void 0 !== l && (m.scale = l),
            void 0 !== c &&
              (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  a =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4];
                e.pathLength = 1;
                var i = a ? Ie : Be;
                e[i.offset] = Ee.transform(-r);
                var o = Ee.transform(t),
                  l = Ee.transform(n);
                e[i.array] = "".concat(o, " ").concat(l);
              })(m, c, p, v, !1);
        }
      }
      var We = function () {
          return l(l({}, Le()), {}, { attrs: {} });
        },
        $e = function (e) {
          return "string" === typeof e && "svg" === e.toLowerCase();
        };
      function Ye(t, n, r, a) {
        var i = (0, e.useMemo)(
          function () {
            var e = We();
            return (
              He(
                e,
                n,
                { enableHardwareAcceleration: !1 },
                $e(a),
                t.transformTemplate
              ),
              l(l({}, e.attrs), {}, { style: l({}, e.style) })
            );
          },
          [n]
        );
        if (t.style) {
          var o = {};
          Fe(o, t.style, t), (i.style = l(l({}, o), i.style));
        }
        return i;
      }
      function Qe() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (n, r, a, i, o) {
          var s = i.latestValues,
            u = (ee(n) ? Ye : Me)(r, s, o, n),
            c = (function (e, t, n) {
              var r = {};
              for (var a in e)
                ("values" === a && "object" === typeof e.values) ||
                  ((ze(a) ||
                    (!0 === n && De(a)) ||
                    (!t && !De(a)) ||
                    (e.draggable && a.startsWith("onDrag"))) &&
                    (r[a] = e[a]));
              return r;
            })(r, "string" === typeof n, t),
            f = l(l(l({}, c), u), {}, { ref: a }),
            d = r.children,
            p = (0, e.useMemo)(
              function () {
                return ie(d) ? d.get() : d;
              },
              [d]
            );
          return (0, e.createElement)(n, l(l({}, f), {}, { children: p }));
        };
      }
      var Xe = function (e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      };
      function qe(e, t, n, r) {
        var a = t.style,
          i = t.vars;
        for (var o in (Object.assign(e.style, a, r && r.getProjectionStyles(n)),
        i))
          e.style.setProperty(o, i[o]);
      }
      var Ze = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function Ge(e, t, n, r) {
        for (var a in (qe(e, t, void 0, r), t.attrs))
          e.setAttribute(Ze.has(a) ? a : Xe(a), t.attrs[a]);
      }
      function Ke(e, t) {
        var n = e.style,
          r = {};
        for (var a in n)
          (ie(n[a]) || (t.style && ie(t.style[a])) || ae(a, e)) &&
            (r[a] = n[a]);
        return r;
      }
      function Je(e, t) {
        var n = Ke(e, t);
        for (var r in e) {
          if (ie(e[r]) || ie(t[r]))
            n[
              -1 !== ne.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r];
        }
        return n;
      }
      function et(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return (
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          "string" === typeof t && (t = e.variants && e.variants[t]),
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          t
        );
      }
      var tt = function (e) {
          return Array.isArray(e);
        },
        nt = function (e) {
          return Boolean(e && "object" === typeof e && e.mix && e.toValue);
        },
        rt = function (e) {
          return tt(e) ? e[e.length - 1] || 0 : e;
        };
      function at(e) {
        var t = ie(e) ? e.get() : e;
        return nt(t) ? t.toValue() : t;
      }
      var it = ["transitionEnd", "transition"];
      var ot = function (t) {
        return function (n, r) {
          var a = (0, e.useContext)(N),
            i = (0, e.useContext)(O),
            o = function () {
              return (function (e, t, n, r) {
                var a = e.scrapeMotionValuesFromProps,
                  i = e.createRenderState,
                  o = e.onMount,
                  l = { latestValues: lt(t, n, r, a), renderState: i() };
                return (
                  o &&
                    (l.mount = function (e) {
                      return o(t, e, l);
                    }),
                  l
                );
              })(t, n, a, i);
            };
          return r
            ? o()
            : (function (t) {
                var n = (0, e.useRef)(null);
                return null === n.current && (n.current = t()), n.current;
              })(o);
        };
      };
      function lt(e, t, n, r) {
        var a = {},
          i = r(e, {});
        for (var o in i) a[o] = at(i[o]);
        var l = e.initial,
          s = e.animate,
          u = V(e),
          c = I(e);
        t &&
          c &&
          !u &&
          !1 !== e.inherit &&
          (void 0 === l && (l = t.initial), void 0 === s && (s = t.animate));
        var f = !!n && !1 === n.initial,
          p = (f = f || !1 === l) ? s : l;
        p &&
          "boolean" !== typeof p &&
          !D(p) &&
          (Array.isArray(p) ? p : [p]).forEach(function (t) {
            var n = et(e, t);
            if (n) {
              var r = n.transitionEnd,
                i = (n.transition, d(n, it));
              for (var o in i) {
                var l = i[o];
                if (Array.isArray(l)) l = l[f ? l.length - 1 : 0];
                null !== l && (a[o] = l);
              }
              for (var s in r) a[s] = r[s];
            }
          });
        return a;
      }
      var st = {
          useVisualState: ot({
            scrapeMotionValuesFromProps: Je,
            createRenderState: We,
            onMount: function (e, t, n) {
              var r = n.renderState,
                a = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (i) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              He(
                r,
                a,
                { enableHardwareAcceleration: !1 },
                $e(t.tagName),
                e.transformTemplate
              ),
                Ge(t, r);
            },
          }),
        },
        ut = {
          useVisualState: ot({
            scrapeMotionValuesFromProps: Ke,
            createRenderState: Le,
          }),
        };
      function ct(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function ft(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, a(r.key), r);
        }
      }
      function dt(e, t, n) {
        return (
          t && ft(e.prototype, t),
          n && ft(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function pt(e, t) {
        return (
          (pt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          pt(e, t)
        );
      }
      function ht(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && pt(e, t);
      }
      function vt(e) {
        return (
          (vt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          vt(e)
        );
      }
      function mt(e, t) {
        if (t && ("object" === r(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function gt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = vt(e);
          if (t) {
            var a = vt(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return mt(this, n);
        };
      }
      function yt(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n);
          }
        );
      }
      var bt = function (e) {
        return "mouse" === e.pointerType
          ? "number" !== typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      };
      function xt(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      var wt = function (e) {
        return function (t) {
          return bt(t) && e(t, xt(t));
        };
      };
      function kt(e, t, n, r) {
        return yt(e, t, wt(n), r);
      }
      var St = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        Et = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(St);
        };
      function Pt(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
            function () {
              t = null;
            })
          );
        };
      }
      var Ct = Pt("dragHorizontal"),
        jt = Pt("dragVertical");
      function Tt(e) {
        var t = !1;
        if ("y" === e) t = jt();
        else if ("x" === e) t = Ct();
        else {
          var n = Ct(),
            r = jt();
          n && r
            ? (t = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return t;
      }
      function Nt() {
        var e = Tt(!0);
        return !e || (e(), !1);
      }
      var Ot = (function () {
        function e(t) {
          ct(this, e), (this.isMounted = !1), (this.node = t);
        }
        return dt(e, [{ key: "update", value: function () {} }]), e;
      })();
      var Lt = { delta: 0, timestamp: 0, isProcessing: !1 },
        Ft = !0,
        Rt = !1,
        Mt = ["read", "update", "preRender", "render", "postRender"],
        At = Mt.reduce(function (e, t) {
          return (
            (e[t] = (function (e) {
              var t = [],
                n = [],
                r = 0,
                a = !1,
                i = !1,
                o = new WeakSet(),
                l = {
                  schedule: function (e) {
                    var i =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2] &&
                        a,
                      l = i ? t : n;
                    return (
                      arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1] &&
                        o.add(e),
                      -1 === l.indexOf(e) &&
                        (l.push(e), i && a && (r = t.length)),
                      e
                    );
                  },
                  cancel: function (e) {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), o.delete(e);
                  },
                  process: function (s) {
                    if (a) i = !0;
                    else {
                      a = !0;
                      var u = [n, t];
                      if (((t = u[0]), ((n = u[1]).length = 0), (r = t.length)))
                        for (var c = 0; c < r; c++) {
                          var f = t[c];
                          f(s), o.has(f) && (l.schedule(f), e());
                        }
                      (a = !1), i && ((i = !1), l.process(s));
                    }
                  },
                };
              return l;
            })(function () {
              return (Rt = !0);
            })),
            e
          );
        }, {}),
        Dt = function (e) {
          return At[e].process(Lt);
        },
        _t = function e(t) {
          (Rt = !1),
            (Lt.delta = Ft
              ? 1e3 / 60
              : Math.max(Math.min(t - Lt.timestamp, 40), 1)),
            (Lt.timestamp = t),
            (Lt.isProcessing = !0),
            Mt.forEach(Dt),
            (Lt.isProcessing = !1),
            Rt && ((Ft = !1), requestAnimationFrame(e));
        },
        zt = Mt.reduce(function (e, t) {
          var n = At[t];
          return (
            (e[t] = function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return (
                Rt ||
                  ((Rt = !0),
                  (Ft = !0),
                  Lt.isProcessing || requestAnimationFrame(_t)),
                n.schedule(e, t, r)
              );
            }),
            e
          );
        }, {});
      function Vt(e) {
        Mt.forEach(function (t) {
          return At[t].cancel(e);
        });
      }
      function It(e, t) {
        var n = "pointer" + (t ? "enter" : "leave"),
          r = "onHover" + (t ? "Start" : "End");
        return kt(
          e.current,
          n,
          function (n, a) {
            if ("touch" !== n.type && !Nt()) {
              var i = e.getProps();
              e.animationState &&
                i.whileHover &&
                e.animationState.setActive("whileHover", t),
                i[r] &&
                  zt.update(function () {
                    return i[r](n, a);
                  });
            }
          },
          { passive: !e.getProps()[r] }
        );
      }
      var Bt = (function (e) {
          ht(n, e);
          var t = gt(n);
          function n() {
            return ct(this, n), t.apply(this, arguments);
          }
          return (
            dt(n, [
              {
                key: "mount",
                value: function () {
                  this.unmount = Et(It(this.node, !0), It(this.node, !1));
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Ot),
        Ut = (function (e) {
          ht(n, e);
          var t = gt(n);
          function n() {
            var e;
            return (
              ct(this, n), ((e = t.apply(this, arguments)).isActive = !1), e
            );
          }
          return (
            dt(n, [
              {
                key: "onFocus",
                value: function () {
                  var e = !1;
                  try {
                    e = this.node.current.matches(":focus-visible");
                  } catch (t) {
                    e = !0;
                  }
                  e &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !0),
                    (this.isActive = !0));
                },
              },
              {
                key: "onBlur",
                value: function () {
                  this.isActive &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !1),
                    (this.isActive = !1));
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = this;
                  this.unmount = Et(
                    yt(this.node.current, "focus", function () {
                      return e.onFocus();
                    }),
                    yt(this.node.current, "blur", function () {
                      return e.onBlur();
                    })
                  );
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Ot),
        Ht = function e(t, n) {
          return !!n && (t === n || e(t, n.parentElement));
        },
        Wt = function (e) {
          return e;
        };
      function $t(e, t) {
        if (t) {
          var n = new PointerEvent("pointer" + e);
          t(n, xt(n));
        }
      }
      var Yt = (function (e) {
          ht(n, e);
          var t = gt(n);
          function n() {
            var e;
            return (
              ct(this, n),
              ((e = t.apply(this, arguments)).removeStartListeners = Wt),
              (e.removeEndListeners = Wt),
              (e.removeAccessibleListeners = Wt),
              (e.startPointerPress = function (t, n) {
                if ((e.removeEndListeners(), !e.isPressing)) {
                  var r = e.node.getProps(),
                    a = kt(
                      window,
                      "pointerup",
                      function (t, n) {
                        if (e.checkPressEnd()) {
                          var r = e.node.getProps(),
                            a = r.onTap,
                            i = r.onTapCancel;
                          zt.update(function () {
                            Ht(e.node.current, t.target)
                              ? a && a(t, n)
                              : i && i(t, n);
                          });
                        }
                      },
                      { passive: !(r.onTap || r.onPointerUp) }
                    ),
                    i = kt(
                      window,
                      "pointercancel",
                      function (t, n) {
                        return e.cancelPress(t, n);
                      },
                      { passive: !(r.onTapCancel || r.onPointerCancel) }
                    );
                  (e.removeEndListeners = Et(a, i)), e.startPress(t, n);
                }
              }),
              (e.startAccessiblePress = function () {
                var t = yt(e.node.current, "keydown", function (t) {
                    if ("Enter" === t.key && !e.isPressing) {
                      e.removeEndListeners(),
                        (e.removeEndListeners = yt(
                          e.node.current,
                          "keyup",
                          function (t) {
                            "Enter" === t.key &&
                              e.checkPressEnd() &&
                              $t("up", function (t, n) {
                                var r = e.node.getProps().onTap;
                                r &&
                                  zt.update(function () {
                                    return r(t, n);
                                  });
                              });
                          }
                        )),
                        $t("down", function (t, n) {
                          e.startPress(t, n);
                        });
                    }
                  }),
                  n = yt(e.node.current, "blur", function () {
                    e.isPressing &&
                      $t("cancel", function (t, n) {
                        return e.cancelPress(t, n);
                      });
                  });
                e.removeAccessibleListeners = Et(t, n);
              }),
              e
            );
          }
          return (
            dt(n, [
              {
                key: "startPress",
                value: function (e, t) {
                  this.isPressing = !0;
                  var n = this.node.getProps(),
                    r = n.onTapStart;
                  n.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !0),
                    r &&
                      zt.update(function () {
                        return r(e, t);
                      });
                },
              },
              {
                key: "checkPressEnd",
                value: function () {
                  return (
                    this.removeEndListeners(),
                    (this.isPressing = !1),
                    this.node.getProps().whileTap &&
                      this.node.animationState &&
                      this.node.animationState.setActive("whileTap", !1),
                    !Nt()
                  );
                },
              },
              {
                key: "cancelPress",
                value: function (e, t) {
                  if (this.checkPressEnd()) {
                    var n = this.node.getProps().onTapCancel;
                    n &&
                      zt.update(function () {
                        return n(e, t);
                      });
                  }
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = this.node.getProps(),
                    t = kt(
                      this.node.current,
                      "pointerdown",
                      this.startPointerPress,
                      { passive: !(e.onTapStart || e.onPointerStart) }
                    ),
                    n = yt(
                      this.node.current,
                      "focus",
                      this.startAccessiblePress
                    );
                  this.removeStartListeners = Et(t, n);
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removeStartListeners(),
                    this.removeEndListeners(),
                    this.removeAccessibleListeners();
                },
              },
            ]),
            n
          );
        })(Ot),
        Qt = ["root"],
        Xt = new WeakMap(),
        qt = new WeakMap(),
        Zt = function (e) {
          var t = Xt.get(e.target);
          t && t(e);
        },
        Gt = function (e) {
          e.forEach(Zt);
        };
      function Kt(e, t, n) {
        var r = (function (e) {
          var t = e.root,
            n = d(e, Qt),
            r = t || document;
          qt.has(r) || qt.set(r, {});
          var a = qt.get(r),
            i = JSON.stringify(n);
          return (
            a[i] || (a[i] = new IntersectionObserver(Gt, l({ root: t }, n))),
            a[i]
          );
        })(t);
        return (
          Xt.set(e, n),
          r.observe(e),
          function () {
            Xt.delete(e), r.unobserve(e);
          }
        );
      }
      var Jt = { some: 0, all: 1 },
        en = (function (e) {
          ht(n, e);
          var t = gt(n);
          function n() {
            var e;
            return (
              ct(this, n),
              ((e = t.apply(this, arguments)).hasEnteredView = !1),
              (e.isInView = !1),
              e
            );
          }
          return (
            dt(n, [
              {
                key: "startObserver",
                value: function () {
                  var e = this;
                  this.unmount();
                  var t = this.node.getProps().viewport,
                    n = void 0 === t ? {} : t,
                    r = n.root,
                    a = n.margin,
                    i = n.amount,
                    o = void 0 === i ? "some" : i,
                    l = n.once,
                    s = {
                      root: r ? r.current : void 0,
                      rootMargin: a,
                      threshold: "number" === typeof o ? o : Jt[o],
                    };
                  return Kt(this.node.current, s, function (t) {
                    var n = t.isIntersecting;
                    if (
                      e.isInView !== n &&
                      ((e.isInView = n), !l || n || !e.hasEnteredView)
                    ) {
                      n && (e.hasEnteredView = !0),
                        e.node.animationState &&
                          e.node.animationState.setActive("whileInView", n);
                      var r = e.node.getProps(),
                        a = r.onViewportEnter,
                        i = r.onViewportLeave,
                        o = n ? a : i;
                      o && o(t);
                    }
                  });
                },
              },
              {
                key: "mount",
                value: function () {
                  this.startObserver();
                },
              },
              {
                key: "update",
                value: function () {
                  if ("undefined" !== typeof IntersectionObserver) {
                    var e = this.node,
                      t = e.props,
                      n = e.prevProps,
                      r = ["amount", "margin", "root"].some(
                        (function (e) {
                          var t = e.viewport,
                            n = void 0 === t ? {} : t,
                            r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            a = r.viewport,
                            i = void 0 === a ? {} : a;
                          return function (e) {
                            return n[e] !== i[e];
                          };
                        })(t, n)
                      );
                    r && this.startObserver();
                  }
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Ot);
      var tn = {
        inView: { Feature: en },
        tap: { Feature: Yt },
        focus: { Feature: Ut },
        hover: { Feature: Bt },
      };
      function nn(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return s(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          u(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function rn(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function an(e, t, n) {
        var r = e.getProps();
        return et(
          r,
          t,
          void 0 !== n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      var on = "data-" + Xe("framerAppearId"),
        ln = Wt,
        sn = Wt;
      var un = function (e) {
          return 1e3 * e;
        },
        cn = function (e) {
          return e / 1e3;
        },
        fn = !1,
        dn = function (e) {
          return Array.isArray(e) && "number" === typeof e[0];
        };
      function pn(e) {
        return Boolean(
          !e ||
            ("string" === typeof e && vn[e]) ||
            dn(e) ||
            (Array.isArray(e) && e.every(pn))
        );
      }
      var hn = function (e) {
          var t = c(e, 4),
            n = t[0],
            r = t[1],
            a = t[2],
            i = t[3];
          return "cubic-bezier("
            .concat(n, ", ")
            .concat(r, ", ")
            .concat(a, ", ")
            .concat(i, ")");
        },
        vn = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: hn([0, 0.65, 0.55, 1]),
          circOut: hn([0.55, 0, 1, 0.45]),
          backIn: hn([0.31, 0.01, 0.66, -0.59]),
          backOut: hn([0.33, 1.53, 0.69, 0.99]),
        };
      function mn(e) {
        if (e) return dn(e) ? hn(e) : Array.isArray(e) ? e.map(mn) : vn[e];
      }
      var gn = {
          waapi: function () {
            return Object.hasOwnProperty.call(Element.prototype, "animate");
          },
        },
        yn = {},
        bn = {},
        xn = function (e) {
          bn[e] = function () {
            return void 0 === yn[e] && (yn[e] = gn[e]()), yn[e];
          };
        };
      for (var wn in gn) xn(wn);
      var kn = function (e, t, n) {
          return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
        },
        Sn = 1e-7,
        En = 12;
      function Pn(e, t, n, r) {
        if (e === t && n === r) return Wt;
        var a = function (t) {
          return (function (e, t, n, r, a) {
            var i,
              o,
              l = 0;
            do {
              (i = kn((o = t + (n - t) / 2), r, a) - e) > 0 ? (n = o) : (t = o);
            } while (Math.abs(i) > Sn && ++l < En);
            return o;
          })(t, 0, 1, e, n);
        };
        return function (e) {
          return 0 === e || 1 === e ? e : kn(a(e), t, r);
        };
      }
      var Cn = Pn(0.42, 0, 1, 1),
        jn = Pn(0, 0, 0.58, 1),
        Tn = Pn(0.42, 0, 0.58, 1),
        Nn = function (e) {
          return Array.isArray(e) && "number" !== typeof e[0];
        },
        On = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        Ln = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Fn = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        Rn = Ln(Fn),
        Mn = On(Rn),
        An = Pn(0.33, 1.53, 0.69, 0.99),
        Dn = Ln(An),
        _n = On(Dn),
        zn = {
          linear: Wt,
          easeIn: Cn,
          easeInOut: Tn,
          easeOut: jn,
          circIn: Fn,
          circInOut: Mn,
          circOut: Rn,
          backIn: Dn,
          backInOut: _n,
          backOut: An,
          anticipate: function (e) {
            return (e *= 2) < 1
              ? 0.5 * Dn(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          },
        },
        Vn = function (e) {
          if (Array.isArray(e)) {
            sn(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var t = c(e, 4);
            return Pn(t[0], t[1], t[2], t[3]);
          }
          return "string" === typeof e
            ? (sn(void 0 !== zn[e], "Invalid easing type '".concat(e, "'")),
              zn[e])
            : e;
        },
        In = function (e, t) {
          return function (n) {
            return Boolean(
              (xe(n) && be.test(n) && n.startsWith(e)) ||
                (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        Bn = function (e, t, n) {
          return function (r) {
            var a;
            if (!xe(r)) return r;
            var o = c(r.match(ge), 4),
              l = o[0],
              s = o[1],
              u = o[2],
              f = o[3];
            return (
              i((a = {}), e, parseFloat(l)),
              i(a, t, parseFloat(s)),
              i(a, n, parseFloat(u)),
              i(a, "alpha", void 0 !== f ? parseFloat(f) : 1),
              a
            );
          };
        },
        Un = l(
          l({}, pe),
          {},
          {
            transform: function (e) {
              return Math.round(
                (function (e) {
                  return de(0, 255, e);
                })(e)
              );
            },
          }
        ),
        Hn = {
          test: In("rgb", "red"),
          parse: Bn("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              a = e.alpha,
              i = void 0 === a ? 1 : a;
            return (
              "rgba(" +
              Un.transform(t) +
              ", " +
              Un.transform(n) +
              ", " +
              Un.transform(r) +
              ", " +
              me(he.transform(i)) +
              ")"
            );
          },
        };
      var Wn = {
          test: In("#"),
          parse: function (e) {
            var t = "",
              n = "",
              r = "",
              a = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (n = e.substring(3, 5)),
                  (r = e.substring(5, 7)),
                  (a = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (r = e.substring(3, 4)),
                  (a = e.substring(4, 5)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (a += a)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: a ? parseInt(a, 16) / 255 : 1,
              }
            );
          },
          transform: Hn.transform,
        },
        $n = {
          test: In("hsl", "hue"),
          parse: Bn("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              a = e.alpha,
              i = void 0 === a ? 1 : a;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              Se.transform(me(n)) +
              ", " +
              Se.transform(me(r)) +
              ", " +
              me(he.transform(i)) +
              ")"
            );
          },
        },
        Yn = {
          test: function (e) {
            return Hn.test(e) || Wn.test(e) || $n.test(e);
          },
          parse: function (e) {
            return Hn.test(e)
              ? Hn.parse(e)
              : $n.test(e)
              ? $n.parse(e)
              : Wn.parse(e);
          },
          transform: function (e) {
            return xe(e)
              ? e
              : e.hasOwnProperty("red")
              ? Hn.transform(e)
              : $n.transform(e);
          },
        },
        Qn = function (e, t, n) {
          return -n * e + n * t + e;
        };
      function Xn(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      var qn = function (e, t, n) {
          var r = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - r) + r));
        },
        Zn = [Wn, Hn, $n];
      function Gn(e) {
        var t,
          n =
            ((t = e),
            Zn.find(function (e) {
              return e.test(t);
            }));
        sn(
          Boolean(n),
          "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          )
        );
        var r = n.parse(e);
        return (
          n === $n &&
            (r = (function (e) {
              var t = e.hue,
                n = e.saturation,
                r = e.lightness,
                a = e.alpha;
              (t /= 360), (r /= 100);
              var i = 0,
                o = 0,
                l = 0;
              if ((n /= 100)) {
                var s = r < 0.5 ? r * (1 + n) : r + n - r * n,
                  u = 2 * r - s;
                (i = Xn(u, s, t + 1 / 3)),
                  (o = Xn(u, s, t)),
                  (l = Xn(u, s, t - 1 / 3));
              } else i = o = l = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * l),
                alpha: a,
              };
            })(r)),
          r
        );
      }
      var Kn = function (e, t) {
        var n = Gn(e),
          r = Gn(t),
          a = l({}, n);
        return function (e) {
          return (
            (a.red = qn(n.red, r.red, e)),
            (a.green = qn(n.green, r.green, e)),
            (a.blue = qn(n.blue, r.blue, e)),
            (a.alpha = Qn(n.alpha, r.alpha, e)),
            Hn.transform(a)
          );
        };
      };
      var Jn = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: Wt,
        },
        er = { regex: ye, countKey: "Colors", token: "${c}", parse: Yn.parse },
        tr = { regex: ge, countKey: "Numbers", token: "${n}", parse: pe.parse };
      function nr(e, t) {
        var n,
          r = t.regex,
          a = t.countKey,
          i = t.token,
          o = t.parse,
          l = e.tokenised.match(r);
        l &&
          ((e["num" + a] = l.length),
          (e.tokenised = e.tokenised.replace(r, i)),
          (n = e.values).push.apply(n, nn(l.map(o))));
      }
      function rr(e) {
        var t = e.toString(),
          n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return n.value.includes("var(--") && nr(n, Jn), nr(n, er), nr(n, tr), n;
      }
      function ar(e) {
        return rr(e).values;
      }
      function ir(e) {
        var t = rr(e),
          n = t.values,
          r = t.numColors,
          a = t.numVars,
          i = t.tokenised,
          o = n.length;
        return function (e) {
          for (var t = i, n = 0; n < o; n++)
            t =
              n < a
                ? t.replace(Jn.token, e[n])
                : n < a + r
                ? t.replace(er.token, Yn.transform(e[n]))
                : t.replace(tr.token, me(e[n]));
          return t;
        };
      }
      var or = function (e) {
        return "number" === typeof e ? 0 : e;
      };
      var lr = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              xe(e) &&
              ((null === (t = e.match(ge)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(ye)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: ar,
          createTransformer: ir,
          getAnimatableNone: function (e) {
            var t = ar(e);
            return ir(e)(t.map(or));
          },
        },
        sr = function (e, t) {
          return function (n) {
            return "".concat(n > 0 ? t : e);
          };
        };
      function ur(e, t) {
        return "number" === typeof e
          ? function (n) {
              return Qn(e, t, n);
            }
          : Yn.test(e)
          ? Kn(e, t)
          : e.startsWith("var(")
          ? sr(e, t)
          : dr(e, t);
      }
      var cr = function (e, t) {
          var n = nn(e),
            r = n.length,
            a = e.map(function (e, n) {
              return ur(e, t[n]);
            });
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = a[t](e);
            return n;
          };
        },
        fr = function (e, t) {
          var n = l(l({}, e), t),
            r = {};
          for (var a in n)
            void 0 !== e[a] && void 0 !== t[a] && (r[a] = ur(e[a], t[a]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        },
        dr = function (e, t) {
          var n = lr.createTransformer(t),
            r = rr(e),
            a = rr(t);
          return r.numVars === a.numVars &&
            r.numColors === a.numColors &&
            r.numNumbers >= a.numNumbers
            ? Et(cr(r.values, a.values), n)
            : (ln(
                !0,
                "Complex values '"
                  .concat(e, "' and '")
                  .concat(
                    t,
                    "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                  )
              ),
              sr(e, t));
        },
        pr = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        hr = function (e, t) {
          return function (n) {
            return Qn(e, t, n);
          };
        };
      function vr(e, t, n) {
        for (
          var r,
            a = [],
            i =
              n ||
              ("number" === typeof (r = e[0])
                ? hr
                : "string" === typeof r
                ? Yn.test(r)
                  ? Kn
                  : dr
                : Array.isArray(r)
                ? cr
                : "object" === typeof r
                ? fr
                : hr),
            o = e.length - 1,
            l = 0;
          l < o;
          l++
        ) {
          var s = i(e[l], e[l + 1]);
          if (t) {
            var u = Array.isArray(t) ? t[l] || Wt : t;
            s = Et(u, s);
          }
          a.push(s);
        }
        return a;
      }
      function mr(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          a = void 0 === r || r,
          i = n.ease,
          o = n.mixer,
          l = e.length;
        if (
          (sn(
            l === t.length,
            "Both input and output ranges must be the same length"
          ),
          1 === l)
        )
          return function () {
            return t[0];
          };
        e[0] > e[l - 1] && ((e = nn(e).reverse()), (t = nn(t).reverse()));
        var s = vr(t, i, o),
          u = s.length,
          c = function (t) {
            var n = 0;
            if (u > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            var r = pr(e[n], e[n + 1], t);
            return s[n](r);
          };
        return a
          ? function (t) {
              return c(de(e[0], e[l - 1], t));
            }
          : c;
      }
      function gr(e) {
        var t = [0];
        return (
          (function (e, t) {
            for (var n = e[e.length - 1], r = 1; r <= t; r++) {
              var a = pr(0, t, r);
              e.push(Qn(n, 1, a));
            }
          })(t, e.length - 1),
          t
        );
      }
      function yr(e) {
        var t,
          n,
          r = e.duration,
          a = void 0 === r ? 300 : r,
          i = e.keyframes,
          o = e.times,
          l = e.ease,
          s = void 0 === l ? "easeInOut" : l,
          u = Nn(s) ? s.map(Vn) : Vn(s),
          c = { done: !1, value: i[0] },
          f = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(o && o.length === i.length ? o : gr(i), a),
          d = mr(f, i, {
            ease: Array.isArray(u)
              ? u
              : ((t = i),
                (n = u),
                t
                  .map(function () {
                    return n || Tn;
                  })
                  .splice(0, t.length - 1)),
          });
        return {
          calculatedDuration: a,
          next: function (e) {
            return (c.value = d(e)), (c.done = e >= a), c;
          },
        };
      }
      function br(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      var xr = 5;
      function wr(e, t, n) {
        var r = Math.max(t - xr, 0);
        return br(n - e(r), t - r);
      }
      var kr = 0.001,
        Sr = 0.01,
        Er = 10,
        Pr = 0.05,
        Cr = 1;
      function jr(e) {
        var t,
          n,
          r = e.duration,
          a = void 0 === r ? 800 : r,
          i = e.bounce,
          o = void 0 === i ? 0.25 : i,
          l = e.velocity,
          s = void 0 === l ? 0 : l,
          u = e.mass,
          c = void 0 === u ? 1 : u;
        ln(a <= un(Er), "Spring duration must be 10 seconds or less");
        var f = 1 - o;
        (f = de(Pr, Cr, f)),
          (a = de(Sr, Er, cn(a))),
          f < 1
            ? ((t = function (e) {
                var t = e * f,
                  n = t * a,
                  r = t - s,
                  i = Nr(e, f),
                  o = Math.exp(-n);
                return kr - (r / i) * o;
              }),
              (n = function (e) {
                var n = e * f * a,
                  r = n * s + s,
                  i = Math.pow(f, 2) * Math.pow(e, 2) * a,
                  o = Math.exp(-n),
                  l = Nr(Math.pow(e, 2), f);
                return ((-t(e) + kr > 0 ? -1 : 1) * ((r - i) * o)) / l;
              }))
            : ((t = function (e) {
                return Math.exp(-e * a) * ((e - s) * a + 1) - kr;
              }),
              (n = function (e) {
                return Math.exp(-e * a) * (a * a * (s - e));
              }));
        var d = (function (e, t, n) {
          for (var r = n, a = 1; a < Tr; a++) r -= e(r) / t(r);
          return r;
        })(t, n, 5 / a);
        if (((a = un(a)), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: a };
        var p = Math.pow(d, 2) * c;
        return { stiffness: p, damping: 2 * f * Math.sqrt(c * p), duration: a };
      }
      var Tr = 12;
      function Nr(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var Or = ["keyframes", "restDelta", "restSpeed"],
        Lr = ["duration", "bounce"],
        Fr = ["stiffness", "damping", "mass"];
      function Rr(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      function Mr(e) {
        var t,
          n = e.keyframes,
          r = e.restDelta,
          a = e.restSpeed,
          i = d(e, Or),
          o = n[0],
          s = n[n.length - 1],
          u = { done: !1, value: o },
          c = (function (e) {
            var t = l(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!Rr(e, Fr) && Rr(e, Lr)) {
              var n = jr(e);
              (t = l(
                l(l({}, t), n),
                {},
                { velocity: 0, mass: 1 }
              )).isResolvedFromDuration = !0;
            }
            return t;
          })(i),
          f = c.stiffness,
          p = c.damping,
          h = c.mass,
          v = c.velocity,
          m = c.duration,
          g = c.isResolvedFromDuration,
          y = v ? -cn(v) : 0,
          b = p / (2 * Math.sqrt(f * h)),
          x = s - o,
          w = cn(Math.sqrt(f / h)),
          k = Math.abs(x) < 5;
        if ((a || (a = k ? 0.01 : 2), r || (r = k ? 0.005 : 0.5), b < 1)) {
          var S = Nr(w, b);
          t = function (e) {
            var t = Math.exp(-b * w * e);
            return (
              s -
              t *
                (((y + b * w * x) / S) * Math.sin(S * e) + x * Math.cos(S * e))
            );
          };
        } else if (1 === b)
          t = function (e) {
            return s - Math.exp(-w * e) * (x + (y + w * x) * e);
          };
        else {
          var E = w * Math.sqrt(b * b - 1);
          t = function (e) {
            var t = Math.exp(-b * w * e),
              n = Math.min(E * e, 300);
            return (
              s -
              (t * ((y + b * w * x) * Math.sinh(n) + E * x * Math.cosh(n))) / E
            );
          };
        }
        return {
          calculatedDuration: (g && m) || null,
          next: function (e) {
            var n = t(e);
            if (g) u.done = e >= m;
            else {
              var i = y;
              0 !== e && (i = b < 1 ? wr(t, e, n) : 0);
              var o = Math.abs(i) <= a,
                l = Math.abs(s - n) <= r;
              u.done = o && l;
            }
            return (u.value = u.done ? s : n), u;
          },
        };
      }
      function Ar(e) {
        var t = e.keyframes,
          n = e.velocity,
          r = void 0 === n ? 0 : n,
          a = e.power,
          i = void 0 === a ? 0.8 : a,
          o = e.timeConstant,
          l = void 0 === o ? 325 : o,
          s = e.bounceDamping,
          u = void 0 === s ? 10 : s,
          c = e.bounceStiffness,
          f = void 0 === c ? 500 : c,
          d = e.modifyTarget,
          p = e.min,
          h = e.max,
          v = e.restDelta,
          m = void 0 === v ? 0.5 : v,
          g = e.restSpeed,
          y = t[0],
          b = { done: !1, value: y },
          x = function (e) {
            return void 0 === p
              ? h
              : void 0 === h || Math.abs(p - e) < Math.abs(h - e)
              ? p
              : h;
          },
          w = i * r,
          k = y + w,
          S = void 0 === d ? k : d(k);
        S !== k && (w = S - y);
        var E,
          P,
          C = function (e) {
            return -w * Math.exp(-e / l);
          },
          j = function (e) {
            return S + C(e);
          },
          T = function (e) {
            var t = C(e),
              n = j(e);
            (b.done = Math.abs(t) <= m), (b.value = b.done ? S : n);
          },
          N = function (e) {
            var t;
            ((t = b.value),
            (void 0 !== p && t < p) || (void 0 !== h && t > h)) &&
              ((E = e),
              (P = Mr({
                keyframes: [b.value, x(b.value)],
                velocity: wr(j, e, b.value),
                damping: u,
                stiffness: f,
                restDelta: m,
                restSpeed: g,
              })));
          };
        return (
          N(0),
          {
            calculatedDuration: null,
            next: function (e) {
              var t = !1;
              return (
                P || void 0 !== E || ((t = !0), T(e), N(e)),
                void 0 !== E && e > E ? P.next(e - E) : (!t && T(e), b)
              );
            },
          }
        );
      }
      var Dr = function (e) {
          var t = function (t) {
            var n = t.timestamp;
            return e(n);
          };
          return {
            start: function () {
              return zt.update(t, !0);
            },
            stop: function () {
              return Vt(t);
            },
            now: function () {
              return Lt.isProcessing ? Lt.timestamp : performance.now();
            },
          };
        },
        _r = 2e4;
      function zr(e) {
        for (var t = 0, n = e.next(t); !n.done && t < _r; )
          (t += 50), (n = e.next(t));
        return t >= _r ? 1 / 0 : t;
      }
      var Vr = [
          "autoplay",
          "delay",
          "driver",
          "keyframes",
          "type",
          "repeat",
          "repeatDelay",
          "repeatType",
          "onPlay",
          "onStop",
          "onComplete",
          "onUpdate",
        ],
        Ir = { decay: Ar, inertia: Ar, tween: yr, keyframes: yr, spring: Mr };
      function Br(e) {
        var t,
          n,
          r,
          a = e.autoplay,
          i = void 0 === a || a,
          o = e.delay,
          s = void 0 === o ? 0 : o,
          u = e.driver,
          c = void 0 === u ? Dr : u,
          f = e.keyframes,
          p = e.type,
          h = void 0 === p ? "keyframes" : p,
          v = e.repeat,
          m = void 0 === v ? 0 : v,
          g = e.repeatDelay,
          y = void 0 === g ? 0 : g,
          b = e.repeatType,
          x = void 0 === b ? "loop" : b,
          w = e.onPlay,
          k = e.onStop,
          S = e.onComplete,
          E = e.onUpdate,
          P = d(e, Vr),
          C = 1,
          j = !1,
          T = function () {
            t && t(),
              (n = new Promise(function (e) {
                t = e;
              }));
          };
        T();
        var N,
          O = Ir[h] || yr;
        O !== yr &&
          "number" !== typeof f[0] &&
          ((N = mr([0, 100], f, { clamp: !1 })), (f = [0, 100]));
        var L,
          F = O(l(l({}, P), {}, { keyframes: f }));
        "mirror" === x &&
          (L = O(
            l(
              l({}, P),
              {},
              { keyframes: nn(f).reverse(), velocity: -(P.velocity || 0) }
            )
          ));
        var R = "idle",
          M = null,
          A = null,
          D = null;
        null === F.calculatedDuration && m && (F.calculatedDuration = zr(F));
        var _ = F.calculatedDuration,
          z = 1 / 0,
          V = 1 / 0;
        null !== _ && (V = (z = _ + y) * (m + 1) - y);
        var I = 0,
          B = function (e) {
            if (null !== A) {
              C > 0 && (A = Math.min(A, e));
              var t = (I = null !== M ? M : (e - A) * C) - s,
                n = t < 0;
              (I = Math.max(t, 0)), "finished" === R && null === M && (I = V);
              var r = I,
                a = F;
              if (m) {
                var i = I / z,
                  o = Math.floor(i),
                  l = i % 1;
                !l && i >= 1 && (l = 1),
                  1 === l && o--,
                  (o = Math.min(o, m + 1));
                var u = Boolean(o % 2);
                u &&
                  ("reverse" === x
                    ? ((l = 1 - l), y && (l -= y / z))
                    : "mirror" === x && (a = L));
                var c = de(0, 1, l);
                I > V && (c = "reverse" === x && u ? 1 : 0), (r = c * z);
              }
              var d = n ? { done: !1, value: f[0] } : a.next(r);
              N && (d.value = N(d.value));
              var p = d.done;
              n || null === _ || (p = I >= V);
              var h =
                null === M &&
                ("finished" === R ||
                  ("running" === R && p) ||
                  (C < 0 && I <= 0));
              return E && E(d.value), h && W(), d;
            }
          },
          U = function () {
            r && r.stop(), (r = void 0);
          },
          H = function () {
            (R = "idle"), U(), T(), (A = D = null);
          },
          W = function () {
            (R = "finished"), S && S(), U(), T();
          },
          $ = function () {
            if (!j) {
              r || (r = c(B));
              var e = r.now();
              w && w(),
                null !== M ? (A = e - M) : (A && "finished" !== R) || (A = e),
                (D = A),
                (M = null),
                (R = "running"),
                r.start();
            }
          };
        i && $();
        var Y = {
          then: function (e, t) {
            return n.then(e, t);
          },
          get time() {
            return cn(I);
          },
          set time(e) {
            (e = un(e)),
              (I = e),
              null === M && r && 0 !== C ? (A = r.now() - e / C) : (M = e);
          },
          get duration() {
            var e =
              null === F.calculatedDuration ? zr(F) : F.calculatedDuration;
            return cn(e);
          },
          get speed() {
            return C;
          },
          set speed(e) {
            e !== C && r && ((C = e), (Y.time = cn(I)));
          },
          get state() {
            return R;
          },
          play: $,
          pause: function () {
            (R = "paused"), (M = I);
          },
          stop: function () {
            (j = !0), "idle" !== R && ((R = "idle"), k && k(), H());
          },
          cancel: function () {
            null !== D && B(D), H();
          },
          complete: function () {
            R = "finished";
          },
          sample: function (e) {
            return (A = 0), B(e);
          },
        };
        return Y;
      }
      var Ur = ["onUpdate", "onComplete"],
        Hr = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]);
      function Wr(e, t, n) {
        n.onUpdate;
        var r = n.onComplete,
          a = d(n, Ur);
        if (
          !(
            bn.waapi() &&
            Hr.has(t) &&
            !a.repeatDelay &&
            "mirror" !== a.repeatType &&
            0 !== a.damping &&
            "inertia" !== a.type
          )
        )
          return !1;
        var o,
          s,
          u = !1,
          c = function () {
            s = new Promise(function (e) {
              o = e;
            });
          };
        c();
        var f = a.keyframes,
          p = a.duration,
          h = void 0 === p ? 300 : p,
          v = a.ease,
          m = a.times;
        if (
          (function (e, t) {
            return (
              "spring" === t.type || "backgroundColor" === e || !pn(t.ease)
            );
          })(t, a)
        ) {
          for (
            var g = Br(l(l({}, a), {}, { repeat: 0, delay: 0 })),
              y = { done: !1, value: f[0] },
              b = [],
              x = 0;
            !y.done && x < 2e4;

          )
            (y = g.sample(x)), b.push(y.value), (x += 10);
          (m = void 0), (f = b), (h = x - 10), (v = "linear");
        }
        var w = (function (e, t, n) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              a = r.delay,
              o = void 0 === a ? 0 : a,
              l = r.duration,
              s = r.repeat,
              u = void 0 === s ? 0 : s,
              c = r.repeatType,
              f = void 0 === c ? "loop" : c,
              d = r.ease,
              p = r.times,
              h = i({}, t, n);
            p && (h.offset = p);
            var v = mn(d);
            return (
              Array.isArray(v) && (h.easing = v),
              e.animate(h, {
                delay: o,
                duration: l,
                easing: Array.isArray(v) ? "linear" : v,
                fill: "both",
                iterations: u + 1,
                direction: "reverse" === f ? "alternate" : "normal",
              })
            );
          })(
            e.owner.current,
            t,
            f,
            l(l({}, a), {}, { duration: h, ease: v, times: m })
          ),
          k = function () {
            return w.cancel();
          },
          S = function () {
            zt.update(k), o(), c();
          };
        return (
          (w.onfinish = function () {
            e.set(
              (function (e, t) {
                var n = t.repeat,
                  r = t.repeatType;
                return e[
                  n && "loop" !== (void 0 === r ? "loop" : r) && n % 2 === 1
                    ? 0
                    : e.length - 1
                ];
              })(f, a)
            ),
              r && r(),
              S();
          }),
          {
            then: function (e, t) {
              return s.then(e, t);
            },
            get time() {
              return cn(w.currentTime || 0);
            },
            set time(e) {
              w.currentTime = un(e);
            },
            get speed() {
              return w.playbackRate;
            },
            set speed(e) {
              w.playbackRate = e;
            },
            get duration() {
              return cn(h);
            },
            play: function () {
              u || (w.play(), Vt(k));
            },
            pause: function () {
              return w.pause();
            },
            stop: function () {
              if (((u = !0), "idle" !== w.playState)) {
                var t = w.currentTime;
                if (t) {
                  var n = Br(l(l({}, a), {}, { autoplay: !1 }));
                  e.setWithVelocity(
                    n.sample(t - 10).value,
                    n.sample(t).value,
                    10
                  );
                }
                S();
              }
            },
            complete: function () {
              return w.finish();
            },
            cancel: S,
          }
        );
      }
      var $r = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        Yr = { type: "keyframes", duration: 0.8 },
        Qr = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        Xr = function (e, t) {
          var n = t.keyframes;
          return n.length > 2
            ? Yr
            : re.has(e)
            ? e.startsWith("scale")
              ? {
                  type: "spring",
                  stiffness: 550,
                  damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
                  restSpeed: 10,
                }
              : $r
            : Qr;
        },
        qr = function (e, t) {
          return (
            "zIndex" !== e &&
            (!("number" !== typeof t && !Array.isArray(t)) ||
              !(
                "string" !== typeof t ||
                (!lr.test(t) && "0" !== t) ||
                t.startsWith("url(")
              ))
          );
        },
        Zr = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function Gr(e) {
        var t = c(e.slice(0, -1).split("("), 2),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var a = c(r.match(ge) || [], 1)[0];
        if (!a) return e;
        var i = r.replace(a, ""),
          o = Zr.has(n) ? 1 : 0;
        return a !== r && (o *= 100), n + "(" + o + i + ")";
      }
      var Kr = /([a-z-]*)\(.*?\)/g,
        Jr = l(
          l({}, lr),
          {},
          {
            getAnimatableNone: function (e) {
              var t = e.match(Kr);
              return t ? t.map(Gr).join(" ") : e;
            },
          }
        ),
        ea = l(
          l({}, Ne),
          {},
          {
            color: Yn,
            backgroundColor: Yn,
            outlineColor: Yn,
            fill: Yn,
            stroke: Yn,
            borderColor: Yn,
            borderTopColor: Yn,
            borderRightColor: Yn,
            borderBottomColor: Yn,
            borderLeftColor: Yn,
            filter: Jr,
            WebkitFilter: Jr,
          }
        ),
        ta = function (e) {
          return ea[e];
        };
      function na(e, t) {
        var n = ta(e);
        return (
          n !== Jr && (n = lr),
          n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        );
      }
      var ra = function (e) {
        return /^0[^.\s]+$/.test(e);
      };
      function aa(e) {
        return "number" === typeof e
          ? 0 === e
          : null !== e
          ? "none" === e || "0" === e || ra(e)
          : void 0;
      }
      var ia = [
        "when",
        "delay",
        "delayChildren",
        "staggerChildren",
        "staggerDirection",
        "repeat",
        "repeatType",
        "repeatDelay",
        "from",
        "elapsed",
      ];
      function oa(e, t) {
        return e[t] || e.default || e;
      }
      var la = function (e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return function (a) {
          var i = oa(r, e) || {},
            o = i.delay || r.delay || 0,
            s = r.elapsed,
            u = void 0 === s ? 0 : s;
          u -= un(o);
          var c = (function (e, t, n, r) {
              var a,
                i = qr(t, n);
              a = Array.isArray(n) ? nn(n) : [null, n];
              for (
                var o = void 0 !== r.from ? r.from : e.get(),
                  l = void 0,
                  s = [],
                  u = 0;
                u < a.length;
                u++
              )
                null === a[u] && (a[u] = 0 === u ? o : a[u - 1]),
                  aa(a[u]) && s.push(u),
                  "string" === typeof a[u] &&
                    "none" !== a[u] &&
                    "0" !== a[u] &&
                    (l = a[u]);
              if (i && s.length && l)
                for (var c = 0; c < s.length; c++) a[s[c]] = na(t, l);
              return a;
            })(t, e, n, i),
            f = c[0],
            p = c[c.length - 1],
            h = qr(e, f),
            v = qr(e, p);
          ln(
            h === v,
            "You are trying to animate "
              .concat(e, ' from "')
              .concat(f, '" to "')
              .concat(p, '". ')
              .concat(
                f,
                " is not an animatable value - to enable this animation set "
              )
              .concat(f, " to a value animatable to ")
              .concat(p, " via the `style` property.")
          );
          var m = l(
            l({ keyframes: c, velocity: t.getVelocity(), ease: "easeOut" }, i),
            {},
            {
              delay: -u,
              onUpdate: function (e) {
                t.set(e), i.onUpdate && i.onUpdate(e);
              },
              onComplete: function () {
                a(), i.onComplete && i.onComplete();
              },
            }
          );
          if (
            ((function (e) {
              e.when,
                e.delay,
                e.delayChildren,
                e.staggerChildren,
                e.staggerDirection,
                e.repeat,
                e.repeatType,
                e.repeatDelay,
                e.from,
                e.elapsed;
              var t = d(e, ia);
              return !!Object.keys(t).length;
            })(i) || (m = l(l({}, m), Xr(e, m))),
            m.duration && (m.duration = un(m.duration)),
            m.repeatDelay && (m.repeatDelay = un(m.repeatDelay)),
            !h || !v || fn || !1 === i.type)
          )
            return (function (e) {
              var t = e.keyframes,
                n = e.delay,
                r = e.onUpdate,
                a = e.onComplete,
                i = function () {
                  return (
                    r && r(t[t.length - 1]),
                    a && a(),
                    {
                      time: 0,
                      speed: 1,
                      duration: 0,
                      play: Wt,
                      pause: Wt,
                      stop: Wt,
                      then: function (e) {
                        return e(), Promise.resolve();
                      },
                      cancel: Wt,
                      complete: Wt,
                    }
                  );
                };
              return n
                ? Br({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: n,
                    onComplete: i,
                  })
                : i();
            })(m);
          if (
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate
          ) {
            var g = Wr(t, e, m);
            if (g) return g;
          }
          return Br(m);
        };
      };
      function sa(e) {
        return Boolean(ie(e) && e.add);
      }
      function ua(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function ca(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var fa = (function () {
          function e() {
            ct(this, e), (this.subscriptions = []);
          }
          return (
            dt(e, [
              {
                key: "add",
                value: function (e) {
                  var t = this;
                  return (
                    ua(this.subscriptions, e),
                    function () {
                      return ca(t.subscriptions, e);
                    }
                  );
                },
              },
              {
                key: "notify",
                value: function (e, t, n) {
                  var r = this.subscriptions.length;
                  if (r)
                    if (1 === r) this.subscriptions[0](e, t, n);
                    else
                      for (var a = 0; a < r; a++) {
                        var i = this.subscriptions[a];
                        i && i(e, t, n);
                      }
                },
              },
              {
                key: "getSize",
                value: function () {
                  return this.subscriptions.length;
                },
              },
              {
                key: "clear",
                value: function () {
                  this.subscriptions.length = 0;
                },
              },
            ]),
            e
          );
        })(),
        da = (function () {
          function e(t) {
            var n,
              r = this,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            ct(this, e),
              (this.version = "10.12.12"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.canTrackVelocity = !1),
              (this.events = {}),
              (this.updateAndNotify = function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                (r.prev = r.current), (r.current = e);
                var n = Lt.delta,
                  a = Lt.timestamp;
                r.lastUpdated !== a &&
                  ((r.timeDelta = n),
                  (r.lastUpdated = a),
                  zt.postRender(r.scheduleVelocityCheck)),
                  r.prev !== r.current &&
                    r.events.change &&
                    r.events.change.notify(r.current),
                  r.events.velocityChange &&
                    r.events.velocityChange.notify(r.getVelocity()),
                  t &&
                    r.events.renderRequest &&
                    r.events.renderRequest.notify(r.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return zt.postRender(r.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== r.lastUpdated &&
                  ((r.prev = r.current),
                  r.events.velocityChange &&
                    r.events.velocityChange.notify(r.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((n = this.current), !isNaN(parseFloat(n)))),
              (this.owner = a.owner);
          }
          return (
            dt(e, [
              {
                key: "onChange",
                value: function (e) {
                  return this.on("change", e);
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  this.events[e] || (this.events[e] = new fa());
                  var r = this.events[e].add(t);
                  return "change" === e
                    ? function () {
                        r(),
                          zt.read(function () {
                            n.events.change.getSize() || n.stop();
                          });
                      }
                    : r;
                },
              },
              {
                key: "clearListeners",
                value: function () {
                  for (var e in this.events) this.events[e].clear();
                },
              },
              {
                key: "attach",
                value: function (e, t) {
                  (this.passiveEffect = e), (this.stopPassiveEffect = t);
                },
              },
              {
                key: "set",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  t && this.passiveEffect
                    ? this.passiveEffect(e, this.updateAndNotify)
                    : this.updateAndNotify(e, t);
                },
              },
              {
                key: "setWithVelocity",
                value: function (e, t, n) {
                  this.set(t), (this.prev = e), (this.timeDelta = n);
                },
              },
              {
                key: "jump",
                value: function (e) {
                  this.updateAndNotify(e),
                    (this.prev = e),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
              {
                key: "get",
                value: function () {
                  return this.current;
                },
              },
              {
                key: "getPrevious",
                value: function () {
                  return this.prev;
                },
              },
              {
                key: "getVelocity",
                value: function () {
                  return this.canTrackVelocity
                    ? br(
                        parseFloat(this.current) - parseFloat(this.prev),
                        this.timeDelta
                      )
                    : 0;
                },
              },
              {
                key: "start",
                value: function (e) {
                  var t = this;
                  return (
                    this.stop(),
                    new Promise(function (n) {
                      (t.hasAnimated = !0),
                        (t.animation = e(n)),
                        t.events.animationStart &&
                          t.events.animationStart.notify();
                    }).then(function () {
                      t.events.animationComplete &&
                        t.events.animationComplete.notify(),
                        t.clearAnimation();
                    })
                  );
                },
              },
              {
                key: "stop",
                value: function () {
                  this.animation &&
                    (this.animation.stop(),
                    this.events.animationCancel &&
                      this.events.animationCancel.notify()),
                    this.clearAnimation();
                },
              },
              {
                key: "isAnimating",
                value: function () {
                  return !!this.animation;
                },
              },
              {
                key: "clearAnimation",
                value: function () {
                  delete this.animation;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.clearListeners(),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
            ]),
            e
          );
        })();
      function pa(e, t) {
        return new da(e, t);
      }
      var ha = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        va = [
          pe,
          Ee,
          Se,
          ke,
          Ce,
          Pe,
          {
            test: function (e) {
              return "auto" === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        ma = function (e) {
          return va.find(ha(e));
        },
        ga = [].concat(nn(va), [Yn, lr]),
        ya = function (e) {
          return ga.find(ha(e));
        },
        ba = ["transitionEnd", "transition"];
      function xa(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pa(n));
      }
      function wa(e, t) {
        var n = an(e, t),
          r = n ? e.makeTargetAnimatable(n, !1) : {},
          a = r.transitionEnd,
          i = void 0 === a ? {} : a,
          o = (r.transition, d(r, ba));
        for (var s in (o = l(l({}, o), i))) {
          xa(e, s, rt(o[s]));
        }
      }
      function ka(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      var Sa = ["transition", "transitionEnd"];
      function Ea(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.delay,
          a = void 0 === r ? 0 : r,
          i = n.transitionOverride,
          o = n.type,
          s = e.makeTargetAnimatable(t),
          u = s.transition,
          c = void 0 === u ? e.getDefaultTransition() : u,
          f = s.transitionEnd,
          p = d(s, Sa),
          h = e.getValue("willChange");
        i && (c = i);
        var v = [],
          m = o && e.animationState && e.animationState.getState()[o],
          g = function (t) {
            var n = e.getValue(t),
              r = p[t];
            if (
              !n ||
              void 0 === r ||
              (m &&
                (function (e, t) {
                  var n = e.protectedKeys,
                    r = e.needsAnimating,
                    a = n.hasOwnProperty(t) && !0 !== r[t];
                  return (r[t] = !1), a;
                })(m, t))
            )
              return "continue";
            var i = l({ delay: a, elapsed: 0 }, c);
            if (window.HandoffAppearAnimations && !n.hasAnimated) {
              var o = e.getProps()[on];
              o && (i.elapsed = window.HandoffAppearAnimations(o, t, n, zt));
            }
            n.start(
              la(t, n, r, e.shouldReduceMotion && re.has(t) ? { type: !1 } : i)
            );
            var s = n.animation;
            sa(h) &&
              (h.add(t),
              s.then(function () {
                return h.remove(t);
              })),
              v.push(s);
          };
        for (var y in p) g(y);
        return (
          f &&
            Promise.all(v).then(function () {
              f && wa(e, f);
            }),
          v
        );
      }
      function Pa(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = an(e, t, n.custom),
          a = (r || {}).transition,
          i = void 0 === a ? e.getDefaultTransition() || {} : a;
        n.transitionOverride && (i = n.transitionOverride);
        var o = r
            ? function () {
                return Promise.all(Ea(e, r, n));
              }
            : function () {
                return Promise.resolve();
              },
          s =
            e.variantChildren && e.variantChildren.size
              ? function () {
                  var r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    a = i,
                    o = a.delayChildren,
                    s = void 0 === o ? 0 : o,
                    u = a.staggerChildren,
                    c = a.staggerDirection;
                  return (function (e, t) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      a =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 1,
                      i = arguments.length > 5 ? arguments[5] : void 0,
                      o = [],
                      s = (e.variantChildren.size - 1) * r,
                      u =
                        1 === a
                          ? function () {
                              return (
                                (arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0) * r
                              );
                            }
                          : function () {
                              return (
                                s -
                                (arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0) *
                                  r
                              );
                            };
                    return (
                      Array.from(e.variantChildren)
                        .sort(Ca)
                        .forEach(function (e, r) {
                          e.notify("AnimationStart", t),
                            o.push(
                              Pa(
                                e,
                                t,
                                l(l({}, i), {}, { delay: n + u(r) })
                              ).then(function () {
                                return e.notify("AnimationComplete", t);
                              })
                            );
                        }),
                      Promise.all(o)
                    );
                  })(e, t, s + r, u, c, n);
                }
              : function () {
                  return Promise.resolve();
                },
          u = i.when;
        if (u) {
          var f = c("beforeChildren" === u ? [o, s] : [s, o], 2),
            d = f[0],
            p = f[1];
          return d().then(function () {
            return p();
          });
        }
        return Promise.all([o(), s(n.delay)]);
      }
      function Ca(e, t) {
        return e.sortNodePosition(t);
      }
      var ja = ["transition", "transitionEnd"],
        Ta = nn(_).reverse(),
        Na = _.length;
      function Oa(e) {
        return function (t) {
          return Promise.all(
            t.map(function (t) {
              var n = t.animation,
                r = t.options;
              return (function (e, t) {
                var n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if ((e.notify("AnimationStart", t), Array.isArray(t))) {
                  var a = t.map(function (t) {
                    return Pa(e, t, r);
                  });
                  n = Promise.all(a);
                } else if ("string" === typeof t) n = Pa(e, t, r);
                else {
                  var i = "function" === typeof t ? an(e, t, r.custom) : t;
                  n = Promise.all(Ea(e, i, r));
                }
                return n.then(function () {
                  return e.notify("AnimationComplete", t);
                });
              })(e, n, r);
            })
          );
        };
      }
      function La(e) {
        var t = Oa(e),
          n = {
            animate: Fa(!0),
            whileInView: Fa(),
            whileHover: Fa(),
            whileTap: Fa(),
            whileDrag: Fa(),
            whileFocus: Fa(),
            exit: Fa(),
          },
          r = !0,
          a = function (t, n) {
            var r = an(e, n);
            if (r) {
              r.transition;
              var a = r.transitionEnd,
                i = d(r, ja);
              t = l(l(l({}, t), i), a);
            }
            return t;
          };
        function i(i, o) {
          for (
            var s = e.getProps(),
              u = e.getVariantContext(!0) || {},
              c = [],
              f = new Set(),
              d = {},
              p = 1 / 0,
              h = function () {
                var t = Ta[v],
                  h = n[t],
                  m = void 0 !== s[t] ? s[t] : u[t],
                  g = A(m),
                  y = t === o ? h.isActive : null;
                !1 === y && (p = v);
                var b = m === u[t] && m !== s[t] && g;
                if (
                  (b && r && e.manuallyAnimateOnMount && (b = !1),
                  (h.protectedKeys = l({}, d)),
                  (!h.isActive && null === y) ||
                    (!m && !h.prevProp) ||
                    D(m) ||
                    "boolean" === typeof m)
                )
                  return "continue";
                var x = (function (e, t) {
                    if ("string" === typeof t) return t !== e;
                    if (Array.isArray(t)) return !rn(t, e);
                    return !1;
                  })(h.prevProp, m),
                  w = x || (t === o && h.isActive && !b && g) || (v > p && g),
                  k = Array.isArray(m) ? m : [m],
                  S = k.reduce(a, {});
                !1 === y && (S = {});
                var E = h.prevResolvedValues,
                  P = void 0 === E ? {} : E,
                  C = l(l({}, P), S),
                  j = function (e) {
                    (w = !0), f.delete(e), (h.needsAnimating[e] = !0);
                  };
                for (var T in C) {
                  var N = S[T],
                    O = P[T];
                  d.hasOwnProperty(T) ||
                    (N !== O
                      ? tt(N) && tt(O)
                        ? !rn(N, O) || x
                          ? j(T)
                          : (h.protectedKeys[T] = !0)
                        : void 0 !== N
                        ? j(T)
                        : f.add(T)
                      : void 0 !== N && f.has(T)
                      ? j(T)
                      : (h.protectedKeys[T] = !0));
                }
                (h.prevProp = m),
                  (h.prevResolvedValues = S),
                  h.isActive && (d = l(l({}, d), S)),
                  r && e.blockInitialAnimation && (w = !1),
                  w &&
                    !b &&
                    c.push.apply(
                      c,
                      nn(
                        k.map(function (e) {
                          return { animation: e, options: l({ type: t }, i) };
                        })
                      )
                    );
              },
              v = 0;
            v < Na;
            v++
          )
            h();
          if (f.size) {
            var m = {};
            f.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (m[t] = n);
            }),
              c.push({ animation: m });
          }
          var g = Boolean(c.length);
          return (
            r && !1 === s.initial && !e.manuallyAnimateOnMount && (g = !1),
            (r = !1),
            g ? t(c) : Promise.resolve()
          );
        }
        return {
          animateChanges: i,
          setActive: function (t, r, a) {
            var o;
            if (n[t].isActive === r) return Promise.resolve();
            null === (o = e.variantChildren) ||
              void 0 === o ||
              o.forEach(function (e) {
                var n;
                return null === (n = e.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(t, r);
              }),
              (n[t].isActive = r);
            var l = i(a, t);
            for (var s in n) n[s].protectedKeys = {};
            return l;
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: function () {
            return n;
          },
        };
      }
      function Fa() {
        return {
          isActive:
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var Ra = (function (e) {
          ht(n, e);
          var t = gt(n);
          function n(e) {
            var r;
            return (
              ct(this, n),
              (r = t.call(this, e)),
              e.animationState || (e.animationState = La(e)),
              r
            );
          }
          return (
            dt(n, [
              {
                key: "updateAnimationControlsSubscription",
                value: function () {
                  var e = this.node.getProps().animate;
                  this.unmount(),
                    D(e) && (this.unmount = e.subscribe(this.node));
                },
              },
              {
                key: "mount",
                value: function () {
                  this.updateAnimationControlsSubscription();
                },
              },
              {
                key: "update",
                value: function () {
                  this.node.getProps().animate !==
                    (this.node.prevProps || {}).animate &&
                    this.updateAnimationControlsSubscription();
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Ot),
        Ma = 0,
        Aa = (function (e) {
          ht(n, e);
          var t = gt(n);
          function n() {
            var e;
            return ct(this, n), ((e = t.apply(this, arguments)).id = Ma++), e;
          }
          return (
            dt(n, [
              {
                key: "update",
                value: function () {
                  var e = this;
                  if (this.node.presenceContext) {
                    var t = this.node.presenceContext,
                      n = t.isPresent,
                      r = t.onExitComplete,
                      a = t.custom,
                      i = (this.node.prevPresenceContext || {}).isPresent;
                    if (this.node.animationState && n !== i) {
                      var o = this.node.animationState.setActive("exit", !n, {
                        custom:
                          null !== a && void 0 !== a
                            ? a
                            : this.node.getProps().custom,
                      });
                      r &&
                        !n &&
                        o.then(function () {
                          return r(e.id);
                        });
                    }
                  }
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = (this.node.presenceContext || {}).register;
                  e && (this.unmount = e(this.id));
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Ot),
        Da = { animation: { Feature: Ra }, exit: { Feature: Aa } },
        _a = function (e, t) {
          return Math.abs(e - t);
        };
      var za = (function () {
        function e(t, n) {
          var r = this,
            a = (
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            ).transformPagePoint;
          if (
            (ct(this, e),
            (this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var e = Ba(r.lastMoveEventInfo, r.history),
                  t = null !== r.startEvent,
                  n =
                    (function (e, t) {
                      var n = _a(e.x, t.x),
                        r = _a(e.y, t.y);
                      return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
                    })(e.offset, { x: 0, y: 0 }) >= 3;
                if (t || n) {
                  var a = e.point,
                    i = Lt.timestamp;
                  r.history.push(l(l({}, a), {}, { timestamp: i }));
                  var o = r.handlers,
                    s = o.onStart,
                    u = o.onMove;
                  t ||
                    (s && s(r.lastMoveEvent, e),
                    (r.startEvent = r.lastMoveEvent)),
                    u && u(r.lastMoveEvent, e);
                }
              }
            }),
            (this.handlePointerMove = function (e, t) {
              (r.lastMoveEvent = e),
                (r.lastMoveEventInfo = Va(t, r.transformPagePoint)),
                zt.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (e, t) {
              if ((r.end(), r.lastMoveEvent && r.lastMoveEventInfo)) {
                var n = r.handlers,
                  a = n.onEnd,
                  i = n.onSessionEnd,
                  o = Ba(
                    "pointercancel" === e.type
                      ? r.lastMoveEventInfo
                      : Va(t, r.transformPagePoint),
                    r.history
                  );
                r.startEvent && a && a(e, o), i && i(e, o);
              }
            }),
            bt(t))
          ) {
            (this.handlers = n), (this.transformPagePoint = a);
            var i = Va(xt(t), this.transformPagePoint),
              o = i.point,
              s = Lt.timestamp;
            this.history = [l(l({}, o), {}, { timestamp: s })];
            var u = n.onSessionStart;
            u && u(t, Ba(i, this.history)),
              (this.removeListeners = Et(
                kt(window, "pointermove", this.handlePointerMove),
                kt(window, "pointerup", this.handlePointerUp),
                kt(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          dt(e, [
            {
              key: "updateHandlers",
              value: function (e) {
                this.handlers = e;
              },
            },
            {
              key: "end",
              value: function () {
                this.removeListeners && this.removeListeners(),
                  Vt(this.updatePoint);
              },
            },
          ]),
          e
        );
      })();
      function Va(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function Ia(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function Ba(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: Ia(n, Ha(t)),
          offset: Ia(n, Ua(t)),
          velocity: Wa(t, 0.1),
        };
      }
      function Ua(e) {
        return e[0];
      }
      function Ha(e) {
        return e[e.length - 1];
      }
      function Wa(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, a = Ha(e);
          n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > un(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var i = cn(a.timestamp - r.timestamp);
        if (0 === i) return { x: 0, y: 0 };
        var o = { x: (a.x - r.x) / i, y: (a.y - r.y) / i };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
      }
      function $a(e) {
        return e.max - e.min;
      }
      function Ya(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return Math.abs(e - t) <= n;
      }
      function Qa(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (e.origin = r),
          (e.originPoint = Qn(t.min, t.max, e.origin)),
          (e.scale = $a(n) / $a(t)),
          (Ya(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = Qn(n.min, n.max, e.origin) - e.originPoint),
          (Ya(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function Xa(e, t, n, r) {
        Qa(e.x, t.x, n.x, r ? r.originX : void 0),
          Qa(e.y, t.y, n.y, r ? r.originY : void 0);
      }
      function qa(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + $a(t));
      }
      function Za(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + $a(t));
      }
      function Ga(e, t, n) {
        Za(e.x, t.x, n.x), Za(e.y, t.y, n.y);
      }
      function Ka(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function Ja(e, t) {
        var n = t.min - e.min,
          r = t.max - e.max;
        if (t.max - t.min < e.max - e.min) {
          var a = [r, n];
          (n = a[0]), (r = a[1]);
        }
        return { min: n, max: r };
      }
      var ei = 0.35;
      function ti(e, t, n) {
        return { min: ni(e, t), max: ni(e, n) };
      }
      function ni(e, t) {
        return "number" === typeof e ? e : e[t] || 0;
      }
      var ri = function () {
          return {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
        },
        ai = function () {
          return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        };
      function ii(e) {
        return [e("x"), e("y")];
      }
      function oi(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      function li(e) {
        return void 0 === e || 1 === e;
      }
      function si(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !li(t) || !li(n) || !li(r);
      }
      function ui(e) {
        return si(e) || ci(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function ci(e) {
        return fi(e.x) || fi(e.y);
      }
      function fi(e) {
        return e && "0%" !== e;
      }
      function di(e, t, n) {
        return n + t * (e - n);
      }
      function pi(e, t, n, r, a) {
        return void 0 !== a && (e = di(e, a, r)), di(e, n, r) + t;
      }
      function hi(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0;
        (e.min = pi(e.min, t, n, r, a)), (e.max = pi(e.max, t, n, r, a));
      }
      function vi(e, t) {
        var n = t.x,
          r = t.y;
        hi(e.x, n.translate, n.scale, n.originPoint),
          hi(e.y, r.translate, r.scale, r.originPoint);
      }
      function mi(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function gi(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function yi(e, t, n) {
        var r = c(n, 3),
          a = r[0],
          i = r[1],
          o = r[2],
          l = void 0 !== t[o] ? t[o] : 0.5,
          s = Qn(e.min, e.max, l);
        hi(e, t[a], t[i], s, t.scale);
      }
      var bi = ["x", "scaleX", "originX"],
        xi = ["y", "scaleY", "originY"];
      function wi(e, t) {
        yi(e.x, t, bi), yi(e.y, t, xi);
      }
      function ki(e, t) {
        return oi(
          (function (e, t) {
            if (!t) return e;
            var n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var Si = new WeakMap(),
        Ei = (function () {
          function e(t) {
            ct(this, e),
              (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = ai()),
              (this.visualElement = t);
          }
          return (
            dt(e, [
              {
                key: "start",
                value: function (e) {
                  var t = this,
                    n = (
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {}
                    ).snapToCursor,
                    r = void 0 !== n && n,
                    a = this.visualElement.presenceContext;
                  if (!a || !1 !== a.isPresent) {
                    this.panSession = new za(
                      e,
                      {
                        onSessionStart: function (e) {
                          t.stopAnimation(),
                            r && t.snapToCursor(xt(e, "page").point);
                        },
                        onStart: function (e, n) {
                          var r = t.getProps(),
                            a = r.drag,
                            i = r.dragPropagation,
                            o = r.onDragStart;
                          if (
                            !a ||
                            i ||
                            (t.openGlobalLock && t.openGlobalLock(),
                            (t.openGlobalLock = Tt(a)),
                            t.openGlobalLock)
                          ) {
                            (t.isDragging = !0),
                              (t.currentDirection = null),
                              t.resolveConstraints(),
                              t.visualElement.projection &&
                                ((t.visualElement.projection.isAnimationBlocked =
                                  !0),
                                (t.visualElement.projection.target = void 0)),
                              ii(function (e) {
                                var n = t.getAxisMotionValue(e).get() || 0;
                                if (Se.test(n)) {
                                  var r = t.visualElement.projection;
                                  if (r && r.layout) {
                                    var a = r.layout.layoutBox[e];
                                    if (a) n = $a(a) * (parseFloat(n) / 100);
                                  }
                                }
                                t.originPoint[e] = n;
                              }),
                              o &&
                                zt.update(
                                  function () {
                                    return o(e, n);
                                  },
                                  !1,
                                  !0
                                );
                            var l = t.visualElement.animationState;
                            l && l.setActive("whileDrag", !0);
                          }
                        },
                        onMove: function (e, n) {
                          var r = t.getProps(),
                            a = r.dragPropagation,
                            i = r.dragDirectionLock,
                            o = r.onDirectionLock,
                            l = r.onDrag;
                          if (a || t.openGlobalLock) {
                            var s = n.offset;
                            if (i && null === t.currentDirection)
                              return (
                                (t.currentDirection = (function (e) {
                                  var t =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : 10,
                                    n = null;
                                  Math.abs(e.y) > t
                                    ? (n = "y")
                                    : Math.abs(e.x) > t && (n = "x");
                                  return n;
                                })(s)),
                                void (
                                  null !== t.currentDirection &&
                                  o &&
                                  o(t.currentDirection)
                                )
                              );
                            t.updateAxis("x", n.point, s),
                              t.updateAxis("y", n.point, s),
                              t.visualElement.render(),
                              l && l(e, n);
                          }
                        },
                        onSessionEnd: function (e, n) {
                          return t.stop(e, n);
                        },
                      },
                      {
                        transformPagePoint:
                          this.visualElement.getTransformPagePoint(),
                      }
                    );
                  }
                },
              },
              {
                key: "stop",
                value: function (e, t) {
                  var n = this.isDragging;
                  if ((this.cancel(), n)) {
                    var r = t.velocity;
                    this.startAnimation(r);
                    var a = this.getProps().onDragEnd;
                    a &&
                      zt.update(function () {
                        return a(e, t);
                      });
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  this.isDragging = !1;
                  var e = this.visualElement,
                    t = e.projection,
                    n = e.animationState;
                  t && (t.isAnimationBlocked = !1),
                    this.panSession && this.panSession.end(),
                    (this.panSession = void 0),
                    !this.getProps().dragPropagation &&
                      this.openGlobalLock &&
                      (this.openGlobalLock(), (this.openGlobalLock = null)),
                    n && n.setActive("whileDrag", !1);
                },
              },
              {
                key: "updateAxis",
                value: function (e, t, n) {
                  var r = this.getProps().drag;
                  if (n && Pi(e, r, this.currentDirection)) {
                    var a = this.getAxisMotionValue(e),
                      i = this.originPoint[e] + n[e];
                    this.constraints &&
                      this.constraints[e] &&
                      (i = (function (e, t, n) {
                        var r = t.min,
                          a = t.max;
                        return (
                          void 0 !== r && e < r
                            ? (e = n ? Qn(r, e, n.min) : Math.max(e, r))
                            : void 0 !== a &&
                              e > a &&
                              (e = n ? Qn(a, e, n.max) : Math.min(e, a)),
                          e
                        );
                      })(i, this.constraints[e], this.elastic[e])),
                      a.set(i);
                  }
                },
              },
              {
                key: "resolveConstraints",
                value: function () {
                  var e = this,
                    t = this.getProps(),
                    n = t.dragConstraints,
                    r = t.dragElastic,
                    a = (this.visualElement.projection || {}).layout,
                    i = this.constraints;
                  n && M(n)
                    ? this.constraints ||
                      (this.constraints = this.resolveRefConstraints())
                    : (this.constraints =
                        !(!n || !a) &&
                        (function (e, t) {
                          var n = t.top,
                            r = t.left,
                            a = t.bottom,
                            i = t.right;
                          return { x: Ka(e.x, r, i), y: Ka(e.y, n, a) };
                        })(a.layoutBox, n)),
                    (this.elastic = (function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : ei;
                      return (
                        !1 === e ? (e = 0) : !0 === e && (e = ei),
                        { x: ti(e, "left", "right"), y: ti(e, "top", "bottom") }
                      );
                    })(r)),
                    i !== this.constraints &&
                      a &&
                      this.constraints &&
                      !this.hasMutatedConstraints &&
                      ii(function (t) {
                        e.getAxisMotionValue(t) &&
                          (e.constraints[t] = (function (e, t) {
                            var n = {};
                            return (
                              void 0 !== t.min && (n.min = t.min - e.min),
                              void 0 !== t.max && (n.max = t.max - e.min),
                              n
                            );
                          })(a.layoutBox[t], e.constraints[t]));
                      });
                },
              },
              {
                key: "resolveRefConstraints",
                value: function () {
                  var e = this.getProps(),
                    t = e.dragConstraints,
                    n = e.onMeasureDragConstraints;
                  if (!t || !M(t)) return !1;
                  var r = t.current;
                  sn(
                    null !== r,
                    "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
                  );
                  var a = this.visualElement.projection;
                  if (!a || !a.layout) return !1;
                  var i = (function (e, t, n) {
                      var r = ki(e, n),
                        a = t.scroll;
                      return a && (gi(r.x, a.offset.x), gi(r.y, a.offset.y)), r;
                    })(r, a.root, this.visualElement.getTransformPagePoint()),
                    o = (function (e, t) {
                      return { x: Ja(e.x, t.x), y: Ja(e.y, t.y) };
                    })(a.layout.layoutBox, i);
                  if (n) {
                    var l = n(
                      (function (e) {
                        var t = e.x,
                          n = e.y;
                        return {
                          top: n.min,
                          right: t.max,
                          bottom: n.max,
                          left: t.min,
                        };
                      })(o)
                    );
                    (this.hasMutatedConstraints = !!l), l && (o = oi(l));
                  }
                  return o;
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = this,
                    n = this.getProps(),
                    r = n.drag,
                    a = n.dragMomentum,
                    i = n.dragElastic,
                    o = n.dragTransition,
                    s = n.dragSnapToOrigin,
                    u = n.onDragTransitionEnd,
                    c = this.constraints || {},
                    f = ii(function (n) {
                      if (Pi(n, r, t.currentDirection)) {
                        var u = (c && c[n]) || {};
                        s && (u = { min: 0, max: 0 });
                        var f = i ? 200 : 1e6,
                          d = i ? 40 : 1e7,
                          p = l(
                            l(
                              {
                                type: "inertia",
                                velocity: a ? e[n] : 0,
                                bounceStiffness: f,
                                bounceDamping: d,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                              },
                              o
                            ),
                            u
                          );
                        return t.startAxisValueAnimation(n, p);
                      }
                    });
                  return Promise.all(f).then(u);
                },
              },
              {
                key: "startAxisValueAnimation",
                value: function (e, t) {
                  var n = this.getAxisMotionValue(e);
                  return n.start(la(e, n, 0, t));
                },
              },
              {
                key: "stopAnimation",
                value: function () {
                  var e = this;
                  ii(function (t) {
                    return e.getAxisMotionValue(t).stop();
                  });
                },
              },
              {
                key: "getAxisMotionValue",
                value: function (e) {
                  var t = "_drag" + e.toUpperCase(),
                    n = this.visualElement.getProps(),
                    r = n[t];
                  return (
                    r ||
                    this.visualElement.getValue(
                      e,
                      (n.initial ? n.initial[e] : void 0) || 0
                    )
                  );
                },
              },
              {
                key: "snapToCursor",
                value: function (e) {
                  var t = this;
                  ii(function (n) {
                    if (Pi(n, t.getProps().drag, t.currentDirection)) {
                      var r = t.visualElement.projection,
                        a = t.getAxisMotionValue(n);
                      if (r && r.layout) {
                        var i = r.layout.layoutBox[n],
                          o = i.min,
                          l = i.max;
                        a.set(e[n] - Qn(o, l, 0.5));
                      }
                    }
                  });
                },
              },
              {
                key: "scalePositionWithinConstraints",
                value: function () {
                  var e = this;
                  if (this.visualElement.current) {
                    var t = this.getProps(),
                      n = t.drag,
                      r = t.dragConstraints,
                      a = this.visualElement.projection;
                    if (M(r) && a && this.constraints) {
                      this.stopAnimation();
                      var i = { x: 0, y: 0 };
                      ii(function (t) {
                        var n = e.getAxisMotionValue(t);
                        if (n) {
                          var r = n.get();
                          i[t] = (function (e, t) {
                            var n = 0.5,
                              r = $a(e),
                              a = $a(t);
                            return (
                              a > r
                                ? (n = pr(t.min, t.max - r, e.min))
                                : r > a && (n = pr(e.min, e.max - a, t.min)),
                              de(0, 1, n)
                            );
                          })({ min: r, max: r }, e.constraints[t]);
                        }
                      });
                      var o = this.visualElement.getProps().transformTemplate;
                      (this.visualElement.current.style.transform = o
                        ? o({}, "")
                        : "none"),
                        a.root && a.root.updateScroll(),
                        a.updateLayout(),
                        this.resolveConstraints(),
                        ii(function (t) {
                          if (Pi(t, n, null)) {
                            var r = e.getAxisMotionValue(t),
                              a = e.constraints[t],
                              o = a.min,
                              l = a.max;
                            r.set(Qn(o, l, i[t]));
                          }
                        });
                    }
                  }
                },
              },
              {
                key: "addListeners",
                value: function () {
                  var e = this;
                  if (this.visualElement.current) {
                    Si.set(this.visualElement, this);
                    var t = kt(
                        this.visualElement.current,
                        "pointerdown",
                        function (t) {
                          var n = e.getProps(),
                            r = n.drag,
                            a = n.dragListener;
                          r && (void 0 === a || a) && e.start(t);
                        }
                      ),
                      n = function () {
                        M(e.getProps().dragConstraints) &&
                          (e.constraints = e.resolveRefConstraints());
                      },
                      r = this.visualElement.projection,
                      a = r.addEventListener("measure", n);
                    r &&
                      !r.layout &&
                      (r.root && r.root.updateScroll(), r.updateLayout()),
                      n();
                    var i = yt(window, "resize", function () {
                        return e.scalePositionWithinConstraints();
                      }),
                      o = r.addEventListener("didUpdate", function (t) {
                        var n = t.delta,
                          r = t.hasLayoutChanged;
                        e.isDragging &&
                          r &&
                          (ii(function (t) {
                            var r = e.getAxisMotionValue(t);
                            r &&
                              ((e.originPoint[t] += n[t].translate),
                              r.set(r.get() + n[t].translate));
                          }),
                          e.visualElement.render());
                      });
                    return function () {
                      i(), t(), a(), o && o();
                    };
                  }
                },
              },
              {
                key: "getProps",
                value: function () {
                  var e = this.visualElement.getProps(),
                    t = e.drag,
                    n = void 0 !== t && t,
                    r = e.dragDirectionLock,
                    a = void 0 !== r && r,
                    i = e.dragPropagation,
                    o = void 0 !== i && i,
                    s = e.dragConstraints,
                    u = void 0 !== s && s,
                    c = e.dragElastic,
                    f = void 0 === c ? ei : c,
                    d = e.dragMomentum,
                    p = void 0 === d || d;
                  return l(
                    l({}, e),
                    {},
                    {
                      drag: n,
                      dragDirectionLock: a,
                      dragPropagation: o,
                      dragConstraints: u,
                      dragElastic: f,
                      dragMomentum: p,
                    }
                  );
                },
              },
            ]),
            e
          );
        })();
      function Pi(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      var Ci = (function (e) {
          ht(n, e);
          var t = gt(n);
          function n(e) {
            var r;
            return (
              ct(this, n),
              ((r = t.call(this, e)).removeGroupControls = Wt),
              (r.removeListeners = Wt),
              (r.controls = new Ei(e)),
              r
            );
          }
          return (
            dt(n, [
              {
                key: "mount",
                value: function () {
                  var e = this.node.getProps().dragControls;
                  e && (this.removeGroupControls = e.subscribe(this.controls)),
                    (this.removeListeners = this.controls.addListeners() || Wt);
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removeGroupControls(), this.removeListeners();
                },
              },
            ]),
            n
          );
        })(Ot),
        ji = function (e) {
          return function (t, n) {
            e &&
              zt.update(function () {
                return e(t, n);
              });
          };
        },
        Ti = (function (e) {
          ht(n, e);
          var t = gt(n);
          function n() {
            var e;
            return (
              ct(this, n),
              ((e = t.apply(this, arguments)).removePointerDownListener = Wt),
              e
            );
          }
          return (
            dt(n, [
              {
                key: "onPointerDown",
                value: function (e) {
                  this.session = new za(e, this.createPanHandlers(), {
                    transformPagePoint: this.node.getTransformPagePoint(),
                  });
                },
              },
              {
                key: "createPanHandlers",
                value: function () {
                  var e = this,
                    t = this.node.getProps(),
                    n = t.onPanSessionStart,
                    r = t.onPanStart,
                    a = t.onPan,
                    i = t.onPanEnd;
                  return {
                    onSessionStart: ji(n),
                    onStart: ji(r),
                    onMove: a,
                    onEnd: function (t, n) {
                      delete e.session,
                        i &&
                          zt.update(function () {
                            return i(t, n);
                          });
                    },
                  };
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = this;
                  this.removePointerDownListener = kt(
                    this.node.current,
                    "pointerdown",
                    function (t) {
                      return e.onPointerDown(t);
                    }
                  );
                },
              },
              {
                key: "update",
                value: function () {
                  this.session &&
                    this.session.updateHandlers(this.createPanHandlers());
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removePointerDownListener(),
                    this.session && this.session.end();
                },
              },
            ]),
            n
          );
        })(Ot);
      var Ni = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function Oi(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      var Li = {
          correct: function (e, t) {
            if (!t.target) return e;
            if ("string" === typeof e) {
              if (!Ee.test(e)) return e;
              e = parseFloat(e);
            }
            var n = Oi(e, t.target.x),
              r = Oi(e, t.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        Fi = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              a = e,
              i = lr.parse(e);
            if (i.length > 5) return a;
            var o = lr.createTransformer(e),
              l = "number" !== typeof i[0] ? 1 : 0,
              s = r.x.scale * n.x,
              u = r.y.scale * n.y;
            (i[0 + l] /= s), (i[1 + l] /= u);
            var c = Qn(s, u, 0.5);
            return (
              "number" === typeof i[2 + l] && (i[2 + l] /= c),
              "number" === typeof i[3 + l] && (i[3 + l] /= c),
              o(i)
            );
          },
        },
        Ri = (function (e) {
          ht(n, e);
          var t = gt(n);
          function n() {
            return ct(this, n), t.apply(this, arguments);
          }
          return (
            dt(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    r = n.visualElement,
                    a = n.layoutGroup,
                    i = n.switchLayoutGroup,
                    o = n.layoutId,
                    s = r.projection;
                  (e = Ai),
                    Object.assign(te, e),
                    s &&
                      (a.group && a.group.add(s),
                      i && i.register && o && i.register(s),
                      s.root.didUpdate(),
                      s.addEventListener("animationComplete", function () {
                        t.safeToRemove();
                      }),
                      s.setOptions(
                        l(
                          l({}, s.options),
                          {},
                          {
                            onExitComplete: function () {
                              return t.safeToRemove();
                            },
                          }
                        )
                      )),
                    (Ni.hasEverUpdated = !0);
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.layoutDependency,
                    a = n.visualElement,
                    i = n.drag,
                    o = n.isPresent,
                    l = a.projection;
                  return l
                    ? ((l.isPresent = o),
                      i || e.layoutDependency !== r || void 0 === r
                        ? l.willUpdate()
                        : this.safeToRemove(),
                      e.isPresent !== o &&
                        (o
                          ? l.promote()
                          : l.relegate() ||
                            zt.postRender(function () {
                              var e = l.getStack();
                              (e && e.members.length) || t.safeToRemove();
                            })),
                      null)
                    : null;
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this,
                    t = this.props.visualElement.projection;
                  t &&
                    (t.root.didUpdate(),
                    queueMicrotask(function () {
                      !t.currentAnimation && t.isLead() && e.safeToRemove();
                    }));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e = this.props,
                    t = e.visualElement,
                    n = e.layoutGroup,
                    r = e.switchLayoutGroup,
                    a = t.projection;
                  a &&
                    (a.scheduleCheckAfterUnmount(),
                    n && n.group && n.group.remove(a),
                    r && r.deregister && r.deregister(a));
                },
              },
              {
                key: "safeToRemove",
                value: function () {
                  var e = this.props.safeToRemove;
                  e && e();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(e.Component);
      function Mi(t) {
        var n = (function () {
            var t = (0, e.useContext)(O);
            if (null === t) return [!0, null];
            var n = t.isPresent,
              r = t.onExitComplete,
              a = t.register,
              i = (0, e.useId)();
            return (
              (0, e.useEffect)(function () {
                return a(i);
              }, []),
              !n && r
                ? [
                    !1,
                    function () {
                      return r && r(i);
                    },
                  ]
                : [!0]
            );
          })(),
          r = c(n, 2),
          a = r[0],
          i = r[1],
          o = (0, e.useContext)(Q);
        return e.createElement(
          Ri,
          l(
            l({}, t),
            {},
            {
              layoutGroup: o,
              switchLayoutGroup: (0, e.useContext)(X),
              isPresent: a,
              safeToRemove: i,
            }
          )
        );
      }
      var Ai = {
          borderRadius: l(
            l({}, Li),
            {},
            {
              applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
              ],
            }
          ),
          borderTopLeftRadius: Li,
          borderTopRightRadius: Li,
          borderBottomLeftRadius: Li,
          borderBottomRightRadius: Li,
          boxShadow: Fi,
        },
        Di = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        _i = Di.length,
        zi = function (e) {
          return "string" === typeof e ? parseFloat(e) : e;
        },
        Vi = function (e) {
          return "number" === typeof e || Ee.test(e);
        };
      function Ii(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      var Bi = Hi(0, 0.5, Rn),
        Ui = Hi(0.5, 0.95, Wt);
      function Hi(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(pr(e, t, r));
        };
      }
      function Wi(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function $i(e, t) {
        Wi(e.x, t.x), Wi(e.y, t.y);
      }
      function Yi(e, t, n, r, a) {
        return (
          (e = di((e -= t), 1 / n, r)), void 0 !== a && (e = di(e, 1 / a, r)), e
        );
      }
      function Qi(e, t, n, r, a) {
        var i = c(n, 3),
          o = i[0],
          l = i[1],
          s = i[2];
        !(function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            a = arguments.length > 4 ? arguments[4] : void 0,
            i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : e,
            o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : e;
          if (
            (Se.test(t) &&
              ((t = parseFloat(t)), (t = Qn(o.min, o.max, t / 100) - o.min)),
            "number" === typeof t)
          ) {
            var l = Qn(i.min, i.max, r);
            e === i && (l -= t),
              (e.min = Yi(e.min, t, n, l, a)),
              (e.max = Yi(e.max, t, n, l, a));
          }
        })(e, t[o], t[l], t[s], t.scale, r, a);
      }
      var Xi = ["x", "scaleX", "originX"],
        qi = ["y", "scaleY", "originY"];
      function Zi(e, t, n, r) {
        Qi(e.x, t, Xi, n ? n.x : void 0, r ? r.x : void 0),
          Qi(e.y, t, qi, n ? n.y : void 0, r ? r.y : void 0);
      }
      function Gi(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function Ki(e) {
        return Gi(e.x) && Gi(e.y);
      }
      function Ji(e, t) {
        return (
          e.x.min === t.x.min &&
          e.x.max === t.x.max &&
          e.y.min === t.y.min &&
          e.y.max === t.y.max
        );
      }
      function eo(e) {
        return $a(e.x) / $a(e.y);
      }
      var to = (function () {
        function e() {
          ct(this, e), (this.members = []);
        }
        return (
          dt(e, [
            {
              key: "add",
              value: function (e) {
                ua(this.members, e), e.scheduleRender();
              },
            },
            {
              key: "remove",
              value: function (e) {
                if (
                  (ca(this.members, e),
                  e === this.prevLead && (this.prevLead = void 0),
                  e === this.lead)
                ) {
                  var t = this.members[this.members.length - 1];
                  t && this.promote(t);
                }
              },
            },
            {
              key: "relegate",
              value: function (e) {
                var t,
                  n = this.members.findIndex(function (t) {
                    return e === t;
                  });
                if (0 === n) return !1;
                for (var r = n; r >= 0; r--) {
                  var a = this.members[r];
                  if (!1 !== a.isPresent) {
                    t = a;
                    break;
                  }
                }
                return !!t && (this.promote(t), !0);
              },
            },
            {
              key: "promote",
              value: function (e, t) {
                var n = this.lead;
                e !== n &&
                  ((this.prevLead = n),
                  (this.lead = e),
                  e.show(),
                  n &&
                    (n.instance && n.scheduleRender(),
                    e.scheduleRender(),
                    (e.resumeFrom = n),
                    t && (e.resumeFrom.preserveOpacity = !0),
                    n.snapshot &&
                      ((e.snapshot = n.snapshot),
                      (e.snapshot.latestValues =
                        n.animationValues || n.latestValues)),
                    e.root && e.root.isUpdating && (e.isLayoutDirty = !0),
                    !1 === e.options.crossfade && n.hide()));
              },
            },
            {
              key: "exitAnimationComplete",
              value: function () {
                this.members.forEach(function (e) {
                  var t = e.options,
                    n = e.resumingFrom;
                  t.onExitComplete && t.onExitComplete(),
                    n && n.options.onExitComplete && n.options.onExitComplete();
                });
              },
            },
            {
              key: "scheduleRender",
              value: function () {
                this.members.forEach(function (e) {
                  e.instance && e.scheduleRender(!1);
                });
              },
            },
            {
              key: "removeLeadSnapshot",
              value: function () {
                this.lead &&
                  this.lead.snapshot &&
                  (this.lead.snapshot = void 0);
              },
            },
          ]),
          e
        );
      })();
      function no(e, t, n) {
        var r = "",
          a = e.x.translate / t.x,
          i = e.y.translate / t.y;
        if (
          ((a || i) &&
            (r = "translate3d(".concat(a, "px, ").concat(i, "px, 0) ")),
          (1 === t.x && 1 === t.y) ||
            (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
          n)
        ) {
          var o = n.rotate,
            l = n.rotateX,
            s = n.rotateY;
          o && (r += "rotate(".concat(o, "deg) ")),
            l && (r += "rotateX(".concat(l, "deg) ")),
            s && (r += "rotateY(".concat(s, "deg) "));
        }
        var u = e.x.scale * t.x,
          c = e.y.scale * t.y;
        return (
          (1 === u && 1 === c) ||
            (r += "scale(".concat(u, ", ").concat(c, ")")),
          r || "none"
        );
      }
      var ro = function (e, t) {
          return e.depth - t.depth;
        },
        ao = (function () {
          function e() {
            ct(this, e), (this.children = []), (this.isDirty = !1);
          }
          return (
            dt(e, [
              {
                key: "add",
                value: function (e) {
                  ua(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  ca(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  this.isDirty && this.children.sort(ro),
                    (this.isDirty = !1),
                    this.children.forEach(e);
                },
              },
            ]),
            e
          );
        })();
      var io = ["", "X", "Y", "Z"],
        oo = 0,
        lo = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function so(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          a = e.checkIsScrollRoot,
          i = e.resetTransform;
        return (function () {
          function e() {
            var t = this,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null === n || void 0 === n
                  ? void 0
                  : n();
            ct(this, e),
              (this.id = oo++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = function () {
                t.isUpdating && ((t.isUpdating = !1), t.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                var e;
                (lo.totalNodes =
                  lo.resolvedTargetDeltas =
                  lo.recalculatedProjection =
                    0),
                  t.nodes.forEach(fo),
                  t.nodes.forEach(yo),
                  t.nodes.forEach(bo),
                  t.nodes.forEach(po),
                  (e = lo),
                  window.MotionDebug && window.MotionDebug.record(e);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = r),
              (this.root = a ? a.root || a : this),
              (this.path = a ? [].concat(nn(a.path), [a]) : []),
              (this.parent = a),
              (this.depth = a ? a.depth + 1 : 0);
            for (var i = 0; i < this.path.length; i++)
              this.path[i].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ao());
          }
          return (
            dt(e, [
              {
                key: "addEventListener",
                value: function (e, t) {
                  return (
                    this.eventHandlers.has(e) ||
                      this.eventHandlers.set(e, new fa()),
                    this.eventHandlers.get(e).add(t)
                  );
                },
              },
              {
                key: "notifyListeners",
                value: function (e) {
                  for (
                    var t = this.eventHandlers.get(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  t && t.notify.apply(t, r);
                },
              },
              {
                key: "hasListeners",
                value: function (e) {
                  return this.eventHandlers.has(e);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var n = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.root.hasTreeAnimated;
                  if (!this.instance) {
                    var a;
                    (this.isSVG =
                      (a = e) instanceof SVGElement && "svg" !== a.tagName),
                      (this.instance = e);
                    var i = this.options,
                      o = i.layoutId,
                      s = i.layout,
                      u = i.visualElement;
                    if (
                      (u && !u.current && u.mount(e),
                      this.root.nodes.add(this),
                      this.parent && this.parent.children.add(this),
                      r && (s || o) && (this.isLayoutDirty = !0),
                      t)
                    ) {
                      var c,
                        f = function () {
                          return (n.root.updateBlockedByResize = !1);
                        };
                      t(e, function () {
                        (n.root.updateBlockedByResize = !0),
                          c && c(),
                          (c = (function (e, t) {
                            var n = performance.now(),
                              r = function r(a) {
                                var i = a.timestamp - n;
                                i >= t && (Vt(r), e(i - t));
                              };
                            return (
                              zt.read(r, !0),
                              function () {
                                return Vt(r);
                              }
                            );
                          })(f, 250)),
                          Ni.hasAnimatedSinceResize &&
                            ((Ni.hasAnimatedSinceResize = !1),
                            n.nodes.forEach(go));
                      });
                    }
                    o && this.root.registerSharedNode(o, this),
                      !1 !== this.options.animate &&
                        u &&
                        (o || s) &&
                        this.addEventListener("didUpdate", function (e) {
                          var t = e.delta,
                            r = e.hasLayoutChanged,
                            a = e.hasRelativeTargetChanged,
                            i = e.layout;
                          if (n.isTreeAnimationBlocked())
                            return (
                              (n.target = void 0),
                              void (n.relativeTarget = void 0)
                            );
                          var o =
                              n.options.transition ||
                              u.getDefaultTransition() ||
                              Po,
                            s = u.getProps(),
                            c = s.onLayoutAnimationStart,
                            f = s.onLayoutAnimationComplete,
                            d = !n.targetLayout || !Ji(n.targetLayout, i) || a,
                            p = !r && a;
                          if (
                            n.options.layoutRoot ||
                            (n.resumeFrom && n.resumeFrom.instance) ||
                            p ||
                            (r && (d || !n.currentAnimation))
                          ) {
                            n.resumeFrom &&
                              ((n.resumingFrom = n.resumeFrom),
                              (n.resumingFrom.resumingFrom = void 0)),
                              n.setAnimationOrigin(t, p);
                            var h = l(
                              l({}, oa(o, "layout")),
                              {},
                              { onPlay: c, onComplete: f }
                            );
                            (u.shouldReduceMotion || n.options.layoutRoot) &&
                              ((h.delay = 0), (h.type = !1)),
                              n.startAnimation(h);
                          } else r || go(n), n.isLead() && n.options.onExitComplete && n.options.onExitComplete();
                          n.targetLayout = i;
                        });
                  }
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                  var e = this.getStack();
                  e && e.remove(this),
                    this.parent && this.parent.children.delete(this),
                    (this.instance = void 0),
                    Vt(this.updateProjection);
                },
              },
              {
                key: "blockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !0;
                },
              },
              {
                key: "unblockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !1;
                },
              },
              {
                key: "isUpdateBlocked",
                value: function () {
                  return (
                    this.updateManuallyBlocked || this.updateBlockedByResize
                  );
                },
              },
              {
                key: "isTreeAnimationBlocked",
                value: function () {
                  return (
                    this.isAnimationBlocked ||
                    (this.parent && this.parent.isTreeAnimationBlocked()) ||
                    !1
                  );
                },
              },
              {
                key: "startUpdate",
                value: function () {
                  this.isUpdateBlocked() ||
                    ((this.isUpdating = !0),
                    this.nodes && this.nodes.forEach(xo),
                    this.animationId++);
                },
              },
              {
                key: "getTransformTemplate",
                value: function () {
                  var e = this.options.visualElement;
                  return e && e.getProps().transformTemplate;
                },
              },
              {
                key: "willUpdate",
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  if (
                    ((this.root.hasTreeAnimated = !0),
                    this.root.isUpdateBlocked())
                  )
                    this.options.onExitComplete &&
                      this.options.onExitComplete();
                  else if (
                    (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty)
                  ) {
                    this.isLayoutDirty = !0;
                    for (var t = 0; t < this.path.length; t++) {
                      var n = this.path[t];
                      (n.shouldResetTransform = !0),
                        n.updateScroll("snapshot"),
                        n.options.layoutRoot && n.willUpdate(!1);
                    }
                    var r = this.options,
                      a = r.layoutId,
                      i = r.layout;
                    if (void 0 !== a || i) {
                      var o = this.getTransformTemplate();
                      (this.prevTransformTemplateValue = o
                        ? o(this.latestValues, "")
                        : void 0),
                        this.updateSnapshot(),
                        e && this.notifyListeners("willUpdate");
                    }
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  if (((this.updateScheduled = !1), this.isUpdateBlocked()))
                    return (
                      this.unblockUpdate(),
                      this.clearAllSnapshots(),
                      void this.nodes.forEach(vo)
                    );
                  this.isUpdating &&
                    ((this.isUpdating = !1),
                    this.nodes.forEach(mo),
                    this.nodes.forEach(uo),
                    this.nodes.forEach(co),
                    this.clearAllSnapshots(),
                    At.update.process(Lt),
                    At.preRender.process(Lt),
                    At.render.process(Lt));
                },
              },
              {
                key: "didUpdate",
                value: function () {
                  var e = this;
                  this.updateScheduled ||
                    ((this.updateScheduled = !0),
                    queueMicrotask(function () {
                      return e.update();
                    }));
                },
              },
              {
                key: "clearAllSnapshots",
                value: function () {
                  this.nodes.forEach(ho), this.sharedNodes.forEach(wo);
                },
              },
              {
                key: "scheduleUpdateProjection",
                value: function () {
                  zt.preRender(this.updateProjection, !1, !0);
                },
              },
              {
                key: "scheduleCheckAfterUnmount",
                value: function () {
                  var e = this;
                  zt.postRender(function () {
                    e.isLayoutDirty
                      ? e.root.didUpdate()
                      : e.root.checkUpdateFailed();
                  });
                },
              },
              {
                key: "updateSnapshot",
                value: function () {
                  !this.snapshot &&
                    this.instance &&
                    (this.snapshot = this.measure());
                },
              },
              {
                key: "updateLayout",
                value: function () {
                  if (
                    this.instance &&
                    (this.updateScroll(),
                    (this.options.alwaysMeasureLayout && this.isLead()) ||
                      this.isLayoutDirty)
                  ) {
                    if (this.resumeFrom && !this.resumeFrom.instance)
                      for (var e = 0; e < this.path.length; e++) {
                        this.path[e].updateScroll();
                      }
                    var t = this.layout;
                    (this.layout = this.measure(!1)),
                      (this.layoutCorrected = ai()),
                      (this.isLayoutDirty = !1),
                      (this.projectionDelta = void 0),
                      this.notifyListeners("measure", this.layout.layoutBox);
                    var n = this.options.visualElement;
                    n &&
                      n.notify(
                        "LayoutMeasure",
                        this.layout.layoutBox,
                        t ? t.layoutBox : void 0
                      );
                  }
                },
              },
              {
                key: "updateScroll",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "measure",
                    t = Boolean(this.options.layoutScroll && this.instance);
                  this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === e &&
                    (t = !1),
                    t &&
                      (this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: a(this.instance),
                        offset: r(this.instance),
                      });
                },
              },
              {
                key: "resetTransform",
                value: function () {
                  if (i) {
                    var e = this.isLayoutDirty || this.shouldResetTransform,
                      t = this.projectionDelta && !Ki(this.projectionDelta),
                      n = this.getTransformTemplate(),
                      r = n ? n(this.latestValues, "") : void 0,
                      a = r !== this.prevTransformTemplateValue;
                    e &&
                      (t || ui(this.latestValues) || a) &&
                      (i(this.instance, r),
                      (this.shouldResetTransform = !1),
                      this.scheduleRender());
                  }
                },
              },
              {
                key: "measure",
                value: function () {
                  var e,
                    t =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    n = this.measurePageBox(),
                    r = this.removeElementScroll(n);
                  return (
                    t && (r = this.removeTransform(r)),
                    Co((e = r).x),
                    Co(e.y),
                    {
                      animationId: this.root.animationId,
                      measuredBox: n,
                      layoutBox: r,
                      latestValues: {},
                      source: this.id,
                    }
                  );
                },
              },
              {
                key: "measurePageBox",
                value: function () {
                  var e = this.options.visualElement;
                  if (!e) return ai();
                  var t = e.measureViewportBox(),
                    n = this.root.scroll;
                  return n && (gi(t.x, n.offset.x), gi(t.y, n.offset.y)), t;
                },
              },
              {
                key: "removeElementScroll",
                value: function (e) {
                  var t = ai();
                  $i(t, e);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n],
                      a = r.scroll,
                      i = r.options;
                    if (r !== this.root && a && i.layoutScroll) {
                      if (a.isRoot) {
                        $i(t, e);
                        var o = this.root.scroll;
                        o && (gi(t.x, -o.offset.x), gi(t.y, -o.offset.y));
                      }
                      gi(t.x, a.offset.x), gi(t.y, a.offset.y);
                    }
                  }
                  return t;
                },
              },
              {
                key: "applyTransform",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = ai();
                  $i(n, e);
                  for (var r = 0; r < this.path.length; r++) {
                    var a = this.path[r];
                    !t &&
                      a.options.layoutScroll &&
                      a.scroll &&
                      a !== a.root &&
                      wi(n, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
                      ui(a.latestValues) && wi(n, a.latestValues);
                  }
                  return ui(this.latestValues) && wi(n, this.latestValues), n;
                },
              },
              {
                key: "removeTransform",
                value: function (e) {
                  var t = ai();
                  $i(t, e);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n];
                    if (r.instance && ui(r.latestValues)) {
                      si(r.latestValues) && r.updateSnapshot();
                      var a = ai();
                      $i(a, r.measurePageBox()),
                        Zi(
                          t,
                          r.latestValues,
                          r.snapshot ? r.snapshot.layoutBox : void 0,
                          a
                        );
                    }
                  }
                  return ui(this.latestValues) && Zi(t, this.latestValues), t;
                },
              },
              {
                key: "setTargetDelta",
                value: function (e) {
                  (this.targetDelta = e),
                    this.root.scheduleUpdateProjection(),
                    (this.isProjectionDirty = !0);
                },
              },
              {
                key: "setOptions",
                value: function (e) {
                  this.options = l(
                    l(l({}, this.options), e),
                    {},
                    { crossfade: void 0 === e.crossfade || e.crossfade }
                  );
                },
              },
              {
                key: "clearMeasurements",
                value: function () {
                  (this.scroll = void 0),
                    (this.layout = void 0),
                    (this.snapshot = void 0),
                    (this.prevTransformTemplateValue = void 0),
                    (this.targetDelta = void 0),
                    (this.target = void 0),
                    (this.isLayoutDirty = !1);
                },
              },
              {
                key: "forceRelativeParentToResolveTarget",
                value: function () {
                  this.relativeParent &&
                    this.relativeParent.resolvedRelativeTargetAt !==
                      Lt.timestamp &&
                    this.relativeParent.resolveTargetDelta(!0);
                },
              },
              {
                key: "resolveTargetDelta",
                value: function () {
                  var e,
                    t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    n = this.getLead();
                  this.isProjectionDirty ||
                    (this.isProjectionDirty = n.isProjectionDirty),
                    this.isTransformDirty ||
                      (this.isTransformDirty = n.isTransformDirty),
                    this.isSharedProjectionDirty ||
                      (this.isSharedProjectionDirty =
                        n.isSharedProjectionDirty);
                  var r = Boolean(this.resumingFrom) || this !== n;
                  if (
                    !!(
                      t ||
                      (r && this.isSharedProjectionDirty) ||
                      this.isProjectionDirty ||
                      (null === (e = this.parent) || void 0 === e
                        ? void 0
                        : e.isProjectionDirty) ||
                      this.attemptToResolveRelativeTarget
                    )
                  ) {
                    var a = this.options,
                      i = a.layout,
                      o = a.layoutId;
                    if (this.layout && (i || o)) {
                      if (
                        ((this.resolvedRelativeTargetAt = Lt.timestamp),
                        !this.targetDelta && !this.relativeTarget)
                      ) {
                        var l = this.getClosestProjectingParent();
                        l && l.layout && 1 !== this.animationProgress
                          ? ((this.relativeParent = l),
                            this.forceRelativeParentToResolveTarget(),
                            (this.relativeTarget = ai()),
                            (this.relativeTargetOrigin = ai()),
                            Ga(
                              this.relativeTargetOrigin,
                              this.layout.layoutBox,
                              l.layout.layoutBox
                            ),
                            $i(this.relativeTarget, this.relativeTargetOrigin))
                          : (this.relativeParent = this.relativeTarget =
                              void 0);
                      }
                      if (this.relativeTarget || this.targetDelta) {
                        var s, u, c;
                        if (
                          (this.target ||
                            ((this.target = ai()),
                            (this.targetWithTransforms = ai())),
                          this.relativeTarget &&
                          this.relativeTargetOrigin &&
                          this.relativeParent &&
                          this.relativeParent.target
                            ? (this.forceRelativeParentToResolveTarget(),
                              (s = this.target),
                              (u = this.relativeTarget),
                              (c = this.relativeParent.target),
                              qa(s.x, u.x, c.x),
                              qa(s.y, u.y, c.y))
                            : this.targetDelta
                            ? (Boolean(this.resumingFrom)
                                ? (this.target = this.applyTransform(
                                    this.layout.layoutBox
                                  ))
                                : $i(this.target, this.layout.layoutBox),
                              vi(this.target, this.targetDelta))
                            : $i(this.target, this.layout.layoutBox),
                          this.attemptToResolveRelativeTarget)
                        ) {
                          this.attemptToResolveRelativeTarget = !1;
                          var f = this.getClosestProjectingParent();
                          f &&
                          Boolean(f.resumingFrom) ===
                            Boolean(this.resumingFrom) &&
                          !f.options.layoutScroll &&
                          f.target &&
                          1 !== this.animationProgress
                            ? ((this.relativeParent = f),
                              this.forceRelativeParentToResolveTarget(),
                              (this.relativeTarget = ai()),
                              (this.relativeTargetOrigin = ai()),
                              Ga(
                                this.relativeTargetOrigin,
                                this.target,
                                f.target
                              ),
                              $i(
                                this.relativeTarget,
                                this.relativeTargetOrigin
                              ))
                            : (this.relativeParent = this.relativeTarget =
                                void 0);
                        }
                        lo.resolvedTargetDeltas++;
                      }
                    }
                  }
                },
              },
              {
                key: "getClosestProjectingParent",
                value: function () {
                  if (
                    this.parent &&
                    !si(this.parent.latestValues) &&
                    !ci(this.parent.latestValues)
                  )
                    return this.parent.isProjecting()
                      ? this.parent
                      : this.parent.getClosestProjectingParent();
                },
              },
              {
                key: "isProjecting",
                value: function () {
                  return Boolean(
                    (this.relativeTarget ||
                      this.targetDelta ||
                      this.options.layoutRoot) &&
                      this.layout
                  );
                },
              },
              {
                key: "calcProjection",
                value: function () {
                  var e,
                    t = this.getLead(),
                    n = Boolean(this.resumingFrom) || this !== t,
                    r = !0;
                  if (
                    ((this.isProjectionDirty ||
                      (null === (e = this.parent) || void 0 === e
                        ? void 0
                        : e.isProjectionDirty)) &&
                      (r = !1),
                    n &&
                      (this.isSharedProjectionDirty || this.isTransformDirty) &&
                      (r = !1),
                    this.resolvedRelativeTargetAt === Lt.timestamp && (r = !1),
                    !r)
                  ) {
                    var a = this.options,
                      i = a.layout,
                      o = a.layoutId;
                    if (
                      ((this.isTreeAnimating = Boolean(
                        (this.parent && this.parent.isTreeAnimating) ||
                          this.currentAnimation ||
                          this.pendingAnimation
                      )),
                      this.isTreeAnimating ||
                        (this.targetDelta = this.relativeTarget = void 0),
                      this.layout && (i || o))
                    ) {
                      $i(this.layoutCorrected, this.layout.layoutBox),
                        (function (e, t, n) {
                          var r =
                              arguments.length > 3 &&
                              void 0 !== arguments[3] &&
                              arguments[3],
                            a = n.length;
                          if (a) {
                            var i, o;
                            t.x = t.y = 1;
                            for (var l = 0; l < a; l++) {
                              o = (i = n[l]).projectionDelta;
                              var s = i.instance;
                              (s &&
                                s.style &&
                                "contents" === s.style.display) ||
                                (r &&
                                  i.options.layoutScroll &&
                                  i.scroll &&
                                  i !== i.root &&
                                  wi(e, {
                                    x: -i.scroll.offset.x,
                                    y: -i.scroll.offset.y,
                                  }),
                                o &&
                                  ((t.x *= o.x.scale),
                                  (t.y *= o.y.scale),
                                  vi(e, o)),
                                r &&
                                  ui(i.latestValues) &&
                                  wi(e, i.latestValues));
                            }
                            (t.x = mi(t.x)), (t.y = mi(t.y));
                          }
                        })(this.layoutCorrected, this.treeScale, this.path, n);
                      var l = t.target;
                      if (l) {
                        this.projectionDelta ||
                          ((this.projectionDelta = ri()),
                          (this.projectionDeltaWithTransform = ri()));
                        var s = this.treeScale.x,
                          u = this.treeScale.y,
                          c = this.projectionTransform;
                        Xa(
                          this.projectionDelta,
                          this.layoutCorrected,
                          l,
                          this.latestValues
                        ),
                          (this.projectionTransform = no(
                            this.projectionDelta,
                            this.treeScale
                          )),
                          (this.projectionTransform === c &&
                            this.treeScale.x === s &&
                            this.treeScale.y === u) ||
                            ((this.hasProjected = !0),
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", l)),
                          lo.recalculatedProjection++;
                      } else
                        this.projectionTransform &&
                          ((this.projectionTransform = "none"),
                          this.scheduleRender());
                    }
                  }
                },
              },
              {
                key: "hide",
                value: function () {
                  this.isVisible = !1;
                },
              },
              {
                key: "show",
                value: function () {
                  this.isVisible = !0;
                },
              },
              {
                key: "scheduleRender",
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  if (
                    (this.options.scheduleRender &&
                      this.options.scheduleRender(),
                    e)
                  ) {
                    var t = this.getStack();
                    t && t.scheduleRender();
                  }
                  this.resumingFrom &&
                    !this.resumingFrom.instance &&
                    (this.resumingFrom = void 0);
                },
              },
              {
                key: "setAnimationOrigin",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r = this.snapshot,
                    a = r ? r.latestValues : {},
                    i = l({}, this.latestValues),
                    o = ri();
                  (this.relativeParent &&
                    this.relativeParent.options.layoutRoot) ||
                    (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    (this.attemptToResolveRelativeTarget = !n);
                  var s,
                    u = ai(),
                    c =
                      (r ? r.source : void 0) !==
                      (this.layout ? this.layout.source : void 0),
                    f = this.getStack(),
                    d = !f || f.members.length <= 1,
                    p = Boolean(
                      c &&
                        !d &&
                        !0 === this.options.crossfade &&
                        !this.path.some(Eo)
                    );
                  (this.animationProgress = 0),
                    (this.mixTargetDelta = function (n) {
                      var r,
                        l,
                        f,
                        h,
                        v = n / 1e3;
                      ko(o.x, e.x, v),
                        ko(o.y, e.y, v),
                        t.setTargetDelta(o),
                        t.relativeTarget &&
                          t.relativeTargetOrigin &&
                          t.layout &&
                          t.relativeParent &&
                          t.relativeParent.layout &&
                          (Ga(
                            u,
                            t.layout.layoutBox,
                            t.relativeParent.layout.layoutBox
                          ),
                          (r = t.relativeTarget),
                          (l = t.relativeTargetOrigin),
                          (f = u),
                          (h = v),
                          So(r.x, l.x, f.x, h),
                          So(r.y, l.y, f.y, h),
                          s &&
                            Ji(t.relativeTarget, s) &&
                            (t.isProjectionDirty = !1),
                          s || (s = ai()),
                          $i(s, t.relativeTarget)),
                        c &&
                          ((t.animationValues = i),
                          (function (e, t, n, r, a, i) {
                            a
                              ? ((e.opacity = Qn(
                                  0,
                                  void 0 !== n.opacity ? n.opacity : 1,
                                  Bi(r)
                                )),
                                (e.opacityExit = Qn(
                                  void 0 !== t.opacity ? t.opacity : 1,
                                  0,
                                  Ui(r)
                                )))
                              : i &&
                                (e.opacity = Qn(
                                  void 0 !== t.opacity ? t.opacity : 1,
                                  void 0 !== n.opacity ? n.opacity : 1,
                                  r
                                ));
                            for (var o = 0; o < _i; o++) {
                              var l = "border".concat(Di[o], "Radius"),
                                s = Ii(t, l),
                                u = Ii(n, l);
                              (void 0 === s && void 0 === u) ||
                                (s || (s = 0),
                                u || (u = 0),
                                0 === s || 0 === u || Vi(s) === Vi(u)
                                  ? ((e[l] = Math.max(Qn(zi(s), zi(u), r), 0)),
                                    (Se.test(u) || Se.test(s)) && (e[l] += "%"))
                                  : (e[l] = u));
                            }
                            (t.rotate || n.rotate) &&
                              (e.rotate = Qn(t.rotate || 0, n.rotate || 0, r));
                          })(i, a, t.latestValues, v, p, d)),
                        t.root.scheduleUpdateProjection(),
                        t.scheduleRender(),
                        (t.animationProgress = v);
                    }),
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = this;
                  this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom &&
                      this.resumingFrom.currentAnimation &&
                      this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation &&
                      (Vt(this.pendingAnimation),
                      (this.pendingAnimation = void 0)),
                    (this.pendingAnimation = zt.update(function () {
                      (Ni.hasAnimatedSinceResize = !0),
                        (t.currentAnimation = (function (e, t, n) {
                          var r = ie(e) ? e : pa(e);
                          return r.start(la("", r, t, n)), r.animation;
                        })(
                          0,
                          1e3,
                          l(
                            l({}, e),
                            {},
                            {
                              onUpdate: function (n) {
                                t.mixTargetDelta(n),
                                  e.onUpdate && e.onUpdate(n);
                              },
                              onComplete: function () {
                                e.onComplete && e.onComplete(),
                                  t.completeAnimation();
                              },
                            }
                          )
                        )),
                        t.resumingFrom &&
                          (t.resumingFrom.currentAnimation =
                            t.currentAnimation),
                        (t.pendingAnimation = void 0);
                    }));
                },
              },
              {
                key: "completeAnimation",
                value: function () {
                  this.resumingFrom &&
                    ((this.resumingFrom.currentAnimation = void 0),
                    (this.resumingFrom.preserveOpacity = void 0));
                  var e = this.getStack();
                  e && e.exitAnimationComplete(),
                    (this.resumingFrom =
                      this.currentAnimation =
                      this.animationValues =
                        void 0),
                    this.notifyListeners("animationComplete");
                },
              },
              {
                key: "finishAnimation",
                value: function () {
                  this.currentAnimation &&
                    (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation();
                },
              },
              {
                key: "applyTransformsToTarget",
                value: function () {
                  var e = this.getLead(),
                    t = e.targetWithTransforms,
                    n = e.target,
                    r = e.layout,
                    a = e.latestValues;
                  if (t && n && r) {
                    if (
                      this !== e &&
                      this.layout &&
                      r &&
                      jo(
                        this.options.animationType,
                        this.layout.layoutBox,
                        r.layoutBox
                      )
                    ) {
                      n = this.target || ai();
                      var i = $a(this.layout.layoutBox.x);
                      (n.x.min = e.target.x.min), (n.x.max = n.x.min + i);
                      var o = $a(this.layout.layoutBox.y);
                      (n.y.min = e.target.y.min), (n.y.max = n.y.min + o);
                    }
                    $i(t, n),
                      wi(t, a),
                      Xa(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        t,
                        a
                      );
                  }
                },
              },
              {
                key: "registerSharedNode",
                value: function (e, t) {
                  this.sharedNodes.has(e) || this.sharedNodes.set(e, new to()),
                    this.sharedNodes.get(e).add(t);
                  var n = t.options.initialPromotionConfig;
                  t.promote({
                    transition: n ? n.transition : void 0,
                    preserveFollowOpacity:
                      n && n.shouldPreserveFollowOpacity
                        ? n.shouldPreserveFollowOpacity(t)
                        : void 0,
                  });
                },
              },
              {
                key: "isLead",
                value: function () {
                  var e = this.getStack();
                  return !e || e.lead === this;
                },
              },
              {
                key: "getLead",
                value: function () {
                  var e;
                  return (
                    (this.options.layoutId &&
                      (null === (e = this.getStack()) || void 0 === e
                        ? void 0
                        : e.lead)) ||
                    this
                  );
                },
              },
              {
                key: "getPrevLead",
                value: function () {
                  var e;
                  return this.options.layoutId
                    ? null === (e = this.getStack()) || void 0 === e
                      ? void 0
                      : e.prevLead
                    : void 0;
                },
              },
              {
                key: "getStack",
                value: function () {
                  var e = this.options.layoutId;
                  if (e) return this.root.sharedNodes.get(e);
                },
              },
              {
                key: "promote",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.needsReset,
                    n = e.transition,
                    r = e.preserveFollowOpacity,
                    a = this.getStack();
                  a && a.promote(this, r),
                    t &&
                      ((this.projectionDelta = void 0), (this.needsReset = !0)),
                    n && this.setOptions({ transition: n });
                },
              },
              {
                key: "relegate",
                value: function () {
                  var e = this.getStack();
                  return !!e && e.relegate(this);
                },
              },
              {
                key: "resetRotation",
                value: function () {
                  var e = this.options.visualElement;
                  if (e) {
                    var t = !1,
                      n = e.latestValues;
                    if (
                      ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) &&
                        (t = !0),
                      t)
                    ) {
                      for (var r = {}, a = 0; a < io.length; a++) {
                        var i = "rotate" + io[a];
                        n[i] && ((r[i] = n[i]), e.setStaticValue(i, 0));
                      }
                      for (var o in (e.render(), r)) e.setStaticValue(o, r[o]);
                      e.scheduleRender();
                    }
                  }
                },
              },
              {
                key: "getProjectionStyles",
                value: function () {
                  var e,
                    t,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = {};
                  if (!this.instance || this.isSVG) return r;
                  if (!this.isVisible) return { visibility: "hidden" };
                  r.visibility = "";
                  var a = this.getTransformTemplate();
                  if (this.needsReset)
                    return (
                      (this.needsReset = !1),
                      (r.opacity = ""),
                      (r.pointerEvents = at(n.pointerEvents) || ""),
                      (r.transform = a ? a(this.latestValues, "") : "none"),
                      r
                    );
                  var i = this.getLead();
                  if (!this.projectionDelta || !this.layout || !i.target) {
                    var o = {};
                    return (
                      this.options.layoutId &&
                        ((o.opacity =
                          void 0 !== this.latestValues.opacity
                            ? this.latestValues.opacity
                            : 1),
                        (o.pointerEvents = at(n.pointerEvents) || "")),
                      this.hasProjected &&
                        !ui(this.latestValues) &&
                        ((o.transform = a ? a({}, "") : "none"),
                        (this.hasProjected = !1)),
                      o
                    );
                  }
                  var l = i.animationValues || i.latestValues;
                  this.applyTransformsToTarget(),
                    (r.transform = no(
                      this.projectionDeltaWithTransform,
                      this.treeScale,
                      l
                    )),
                    a && (r.transform = a(l, r.transform));
                  var s = this.projectionDelta,
                    u = s.x,
                    c = s.y;
                  for (var f in ((r.transformOrigin = ""
                    .concat(100 * u.origin, "% ")
                    .concat(100 * c.origin, "% 0")),
                  i.animationValues
                    ? (r.opacity =
                        i === this
                          ? null !==
                              (t =
                                null !== (e = l.opacity) && void 0 !== e
                                  ? e
                                  : this.latestValues.opacity) && void 0 !== t
                            ? t
                            : 1
                          : this.preserveOpacity
                          ? this.latestValues.opacity
                          : l.opacityExit)
                    : (r.opacity =
                        i === this
                          ? void 0 !== l.opacity
                            ? l.opacity
                            : ""
                          : void 0 !== l.opacityExit
                          ? l.opacityExit
                          : 0),
                  te))
                    if (void 0 !== l[f]) {
                      var d = te[f],
                        p = d.correct,
                        h = d.applyTo,
                        v = "none" === r.transform ? l[f] : p(l[f], i);
                      if (h)
                        for (var m = h.length, g = 0; g < m; g++) r[h[g]] = v;
                      else r[f] = v;
                    }
                  return (
                    this.options.layoutId &&
                      (r.pointerEvents =
                        i === this ? at(n.pointerEvents) || "" : "none"),
                    r
                  );
                },
              },
              {
                key: "clearSnapshot",
                value: function () {
                  this.resumeFrom = this.snapshot = void 0;
                },
              },
              {
                key: "resetTree",
                value: function () {
                  this.root.nodes.forEach(function (e) {
                    var t;
                    return null === (t = e.currentAnimation) || void 0 === t
                      ? void 0
                      : t.stop();
                  }),
                    this.root.nodes.forEach(vo),
                    this.root.sharedNodes.clear();
                },
              },
            ]),
            e
          );
        })();
      }
      function uo(e) {
        e.updateLayout();
      }
      function co(e) {
        var t,
          n =
            (null === (t = e.resumeFrom) || void 0 === t
              ? void 0
              : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          var r = e.layout,
            a = r.layoutBox,
            i = r.measuredBox,
            o = e.options.animationType,
            l = n.source !== e.layout.source;
          "size" === o
            ? ii(function (e) {
                var t = l ? n.measuredBox[e] : n.layoutBox[e],
                  r = $a(t);
                (t.min = a[e].min), (t.max = t.min + r);
              })
            : jo(o, n.layoutBox, a) &&
              ii(function (t) {
                var r = l ? n.measuredBox[t] : n.layoutBox[t],
                  i = $a(a[t]);
                (r.max = r.min + i),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[t].max = e.relativeTarget[t].min + i));
              });
          var s = ri();
          Xa(s, a, n.layoutBox);
          var u = ri();
          l
            ? Xa(u, e.applyTransform(i, !0), n.measuredBox)
            : Xa(u, a, n.layoutBox);
          var c = !Ki(s),
            f = !1;
          if (!e.resumeFrom) {
            var d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
              var p = d.snapshot,
                h = d.layout;
              if (p && h) {
                var v = ai();
                Ga(v, n.layoutBox, p.layoutBox);
                var m = ai();
                Ga(m, a, h.layoutBox),
                  Ji(v, m) || (f = !0),
                  d.options.layoutRoot &&
                    ((e.relativeTarget = m),
                    (e.relativeTargetOrigin = v),
                    (e.relativeParent = d));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: a,
            snapshot: n,
            delta: u,
            layoutDelta: s,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: f,
          });
        } else if (e.isLead()) {
          var g = e.options.onExitComplete;
          g && g();
        }
        e.options.transition = void 0;
      }
      function fo(e) {
        lo.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = Boolean(
                e.isProjectionDirty ||
                  e.parent.isProjectionDirty ||
                  e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function po(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function ho(e) {
        e.clearSnapshot();
      }
      function vo(e) {
        e.clearMeasurements();
      }
      function mo(e) {
        var t = e.options.visualElement;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function go(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function yo(e) {
        e.resolveTargetDelta();
      }
      function bo(e) {
        e.calcProjection();
      }
      function xo(e) {
        e.resetRotation();
      }
      function wo(e) {
        e.removeLeadSnapshot();
      }
      function ko(e, t, n) {
        (e.translate = Qn(t.translate, 0, n)),
          (e.scale = Qn(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function So(e, t, n, r) {
        (e.min = Qn(t.min, n.min, r)), (e.max = Qn(t.max, n.max, r));
      }
      function Eo(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      var Po = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function Co(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }
      function jo(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !Ya(eo(t), eo(n), 0.2))
        );
      }
      var To = so({
          attachResizeListener: function (e, t) {
            return yt(e, "resize", t);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        No = { current: void 0 },
        Oo = so({
          measureScroll: function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          defaultParent: function () {
            if (!No.current) {
              var e = new To({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (No.current = e);
            }
            return No.current;
          },
          resetTransform: function (e, t) {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: function (e) {
            return Boolean("fixed" === window.getComputedStyle(e).position);
          },
        }),
        Lo = {
          pan: { Feature: Ti },
          drag: { Feature: Ci, ProjectionNode: Oo, MeasureLayout: Mi },
        };
      var Fo = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      var Ro = 4;
      function Mo(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        sn(
          n <= Ro,
          'Max CSS variable fallback depth detected in property "'.concat(
            e,
            '". This may indicate a circular fallback dependency.'
          )
        );
        var r = (function (e) {
            var t = Fo.exec(e);
            if (!t) return [,];
            var n = c(t, 3);
            return [n[1], n[2]];
          })(e),
          a = c(r, 2),
          i = a[0],
          o = a[1];
        if (i) {
          var l = window.getComputedStyle(t).getPropertyValue(i);
          return l ? l.trim() : ce(o) ? Mo(o, t, n + 1) : o;
        }
      }
      function Ao(e, t, n) {
        var r = Object.assign(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(t),
            t)
          ),
          a = e.current;
        if (!(a instanceof Element)) return { target: r, transitionEnd: n };
        for (var i in (n && (n = l({}, n)),
        e.values.forEach(function (e) {
          var t = e.get();
          if (ce(t)) {
            var n = Mo(t, a);
            n && e.set(n);
          }
        }),
        r)) {
          var o = r[i];
          if (ce(o)) {
            var s = Mo(o, a);
            s && ((r[i] = s), n || (n = {}), void 0 === n[i] && (n[i] = o));
          }
        }
        return { target: r, transitionEnd: n };
      }
      var Do = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        _o = function (e) {
          return Do.has(e);
        },
        zo = function (e) {
          return e === pe || e === Ee;
        },
        Vo = function (e, t) {
          return parseFloat(e.split(", ")[t]);
        },
        Io = function (e, t) {
          return function (n, r) {
            var a = r.transform;
            if ("none" === a || !a) return 0;
            var i = a.match(/^matrix3d\((.+)\)$/);
            if (i) return Vo(i[1], t);
            var o = a.match(/^matrix\((.+)\)$/);
            return o ? Vo(o[1], e) : 0;
          };
        },
        Bo = new Set(["x", "y", "z"]),
        Uo = ne.filter(function (e) {
          return !Bo.has(e);
        });
      var Ho = {
          width: function (e, t) {
            var n = e.x,
              r = t.paddingLeft,
              a = void 0 === r ? "0" : r,
              i = t.paddingRight,
              o = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(a) - parseFloat(o);
          },
          height: function (e, t) {
            var n = e.y,
              r = t.paddingTop,
              a = void 0 === r ? "0" : r,
              i = t.paddingBottom,
              o = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(a) - parseFloat(o);
          },
          top: function (e, t) {
            var n = t.top;
            return parseFloat(n);
          },
          left: function (e, t) {
            var n = t.left;
            return parseFloat(n);
          },
          bottom: function (e, t) {
            var n = e.y,
              r = t.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (e, t) {
            var n = e.x,
              r = t.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: Io(4, 13),
          y: Io(5, 14),
        },
        Wo = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          (t = l({}, t)), (r = l({}, r));
          var a = Object.keys(t).filter(_o),
            i = [],
            o = !1,
            s = [];
          if (
            (a.forEach(function (a) {
              var l = e.getValue(a);
              if (e.hasValue(a)) {
                var u,
                  c = n[a],
                  f = ma(c),
                  d = t[a];
                if (tt(d)) {
                  var p = d.length,
                    h = null === d[0] ? 1 : 0;
                  (c = d[h]), (f = ma(c));
                  for (var v = h; v < p && null !== d[v]; v++)
                    u
                      ? sn(
                          ma(d[v]) === u,
                          "All keyframes must be of the same type"
                        )
                      : ((u = ma(d[v])),
                        sn(
                          u === f || (zo(f) && zo(u)),
                          "Keyframes must be of the same dimension as the current value"
                        ));
                } else u = ma(d);
                if (f !== u)
                  if (zo(f) && zo(u)) {
                    var m = l.get();
                    "string" === typeof m && l.set(parseFloat(m)),
                      "string" === typeof d
                        ? (t[a] = parseFloat(d))
                        : Array.isArray(d) &&
                          u === Ee &&
                          (t[a] = d.map(parseFloat));
                  } else
                    (null === f || void 0 === f ? void 0 : f.transform) &&
                    (null === u || void 0 === u ? void 0 : u.transform) &&
                    (0 === c || 0 === d)
                      ? 0 === c
                        ? l.set(u.transform(c))
                        : (t[a] = f.transform(d))
                      : (o ||
                          ((i = (function (e) {
                            var t = [];
                            return (
                              Uo.forEach(function (n) {
                                var r = e.getValue(n);
                                void 0 !== r &&
                                  (t.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              t.length && e.render(),
                              t
                            );
                          })(e)),
                          (o = !0)),
                        s.push(a),
                        (r[a] = void 0 !== r[a] ? r[a] : t[a]),
                        l.jump(d));
              }
            }),
            s.length)
          ) {
            var u = s.indexOf("height") >= 0 ? window.pageYOffset : null,
              f = (function (e, t, n) {
                var r = t.measureViewportBox(),
                  a = t.current,
                  i = getComputedStyle(a),
                  o = i.display,
                  l = {};
                "none" === o &&
                  t.setStaticValue("display", e.display || "block"),
                  n.forEach(function (e) {
                    l[e] = Ho[e](r, i);
                  }),
                  t.render();
                var s = t.measureViewportBox();
                return (
                  n.forEach(function (n) {
                    var r = t.getValue(n);
                    r && r.jump(l[n]), (e[n] = Ho[n](s, i));
                  }),
                  e
                );
              })(t, e, s);
            return (
              i.length &&
                i.forEach(function (t) {
                  var n = c(t, 2),
                    r = n[0],
                    a = n[1];
                  e.getValue(r).set(a);
                }),
              e.render(),
              L && null !== u && window.scrollTo({ top: u }),
              { target: f, transitionEnd: r }
            );
          }
          return { target: t, transitionEnd: r };
        };
      function $o(e, t, n, r) {
        return (function (e) {
          return Object.keys(e).some(_o);
        })(t)
          ? Wo(e, t, n, r)
          : { target: t, transitionEnd: r };
      }
      var Yo = { current: null },
        Qo = { current: !1 };
      var Xo = new WeakMap(),
        qo = ["willChange"],
        Zo = ["children"],
        Go = Object.keys(W),
        Ko = Go.length,
        Jo = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        el = z.length,
        tl = (function () {
          function e(t) {
            var n = this,
              r = t.parent,
              a = t.props,
              i = t.presenceContext,
              o = t.reducedMotionConfig,
              s = t.visualState,
              u =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            ct(this, e),
              (this.current = null),
              (this.children = new Set()),
              (this.isVariantNode = !1),
              (this.isControllingVariants = !1),
              (this.shouldReduceMotion = null),
              (this.values = new Map()),
              (this.features = {}),
              (this.valueSubscriptions = new Map()),
              (this.prevMotionValues = {}),
              (this.events = {}),
              (this.propEventSubscriptions = {}),
              (this.notifyUpdate = function () {
                return n.notify("Update", n.latestValues);
              }),
              (this.render = function () {
                n.current &&
                  (n.triggerBuild(),
                  n.renderInstance(
                    n.current,
                    n.renderState,
                    n.props.style,
                    n.projection
                  ));
              }),
              (this.scheduleRender = function () {
                return zt.render(n.render, !1, !0);
              });
            var c = s.latestValues,
              f = s.renderState;
            (this.latestValues = c),
              (this.baseTarget = l({}, c)),
              (this.initialValues = a.initial ? l({}, c) : {}),
              (this.renderState = f),
              (this.parent = r),
              (this.props = a),
              (this.presenceContext = i),
              (this.depth = r ? r.depth + 1 : 0),
              (this.reducedMotionConfig = o),
              (this.options = u),
              (this.isControllingVariants = V(a)),
              (this.isVariantNode = I(a)),
              this.isVariantNode && (this.variantChildren = new Set()),
              (this.manuallyAnimateOnMount = Boolean(r && r.current));
            var p = this.scrapeMotionValuesFromProps(a, {}),
              h = p.willChange,
              v = d(p, qo);
            for (var m in v) {
              var g = v[m];
              void 0 !== c[m] && ie(g) && (g.set(c[m], !1), sa(h) && h.add(m));
            }
          }
          return (
            dt(e, [
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e, t) {
                  return {};
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var t = this;
                  (this.current = e),
                    Xo.set(e, this),
                    this.projection &&
                      !this.projection.instance &&
                      this.projection.mount(e),
                    this.parent &&
                      this.isVariantNode &&
                      !this.isControllingVariants &&
                      (this.removeFromVariantTree =
                        this.parent.addVariantChild(this)),
                    this.values.forEach(function (e, n) {
                      return t.bindToMotionValue(n, e);
                    }),
                    Qo.current ||
                      (function () {
                        if (((Qo.current = !0), L))
                          if (window.matchMedia) {
                            var e = window.matchMedia(
                                "(prefers-reduced-motion)"
                              ),
                              t = function () {
                                return (Yo.current = e.matches);
                              };
                            e.addListener(t), t();
                          } else Yo.current = !1;
                      })(),
                    (this.shouldReduceMotion =
                      "never" !== this.reducedMotionConfig &&
                      ("always" === this.reducedMotionConfig || Yo.current)),
                    this.parent && this.parent.children.add(this),
                    this.update(this.props, this.presenceContext);
                },
              },
              {
                key: "unmount",
                value: function () {
                  for (var e in (Xo.delete(this.current),
                  this.projection && this.projection.unmount(),
                  Vt(this.notifyUpdate),
                  Vt(this.render),
                  this.valueSubscriptions.forEach(function (e) {
                    return e();
                  }),
                  this.removeFromVariantTree && this.removeFromVariantTree(),
                  this.parent && this.parent.children.delete(this),
                  this.events))
                    this.events[e].clear();
                  for (var t in this.features) this.features[t].unmount();
                  this.current = null;
                },
              },
              {
                key: "bindToMotionValue",
                value: function (e, t) {
                  var n = this,
                    r = re.has(e),
                    a = t.on("change", function (t) {
                      (n.latestValues[e] = t),
                        n.props.onUpdate && zt.update(n.notifyUpdate, !1, !0),
                        r &&
                          n.projection &&
                          (n.projection.isTransformDirty = !0);
                    }),
                    i = t.on("renderRequest", this.scheduleRender);
                  this.valueSubscriptions.set(e, function () {
                    a(), i();
                  });
                },
              },
              {
                key: "sortNodePosition",
                value: function (e) {
                  return this.current &&
                    this.sortInstanceNodePosition &&
                    this.type === e.type
                    ? this.sortInstanceNodePosition(this.current, e.current)
                    : 0;
                },
              },
              {
                key: "loadFeatures",
                value: function (e, t, n, r) {
                  for (
                    var a, i, o = this, l = (e.children, d(e, Zo)), s = 0;
                    s < Ko;
                    s++
                  ) {
                    var u = Go[s],
                      c = W[u],
                      f = c.isEnabled,
                      p = c.Feature,
                      h = c.ProjectionNode,
                      v = c.MeasureLayout;
                    h && (a = h),
                      f(l) &&
                        (!this.features[u] &&
                          p &&
                          (this.features[u] = new p(this)),
                        v && (i = v));
                  }
                  if (!this.projection && a) {
                    this.projection = new a(
                      this.latestValues,
                      this.parent && this.parent.projection
                    );
                    var m = l.layoutId,
                      g = l.layout,
                      y = l.drag,
                      b = l.dragConstraints,
                      x = l.layoutScroll,
                      w = l.layoutRoot;
                    this.projection.setOptions({
                      layoutId: m,
                      layout: g,
                      alwaysMeasureLayout: Boolean(y) || (b && M(b)),
                      visualElement: this,
                      scheduleRender: function () {
                        return o.scheduleRender();
                      },
                      animationType: "string" === typeof g ? g : "both",
                      initialPromotionConfig: r,
                      layoutScroll: x,
                      layoutRoot: w,
                    });
                  }
                  return i;
                },
              },
              {
                key: "updateFeatures",
                value: function () {
                  for (var e in this.features) {
                    var t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
                  }
                },
              },
              {
                key: "triggerBuild",
                value: function () {
                  this.build(
                    this.renderState,
                    this.latestValues,
                    this.options,
                    this.props
                  );
                },
              },
              {
                key: "measureViewportBox",
                value: function () {
                  return this.current
                    ? this.measureInstanceViewportBox(this.current, this.props)
                    : ai();
                },
              },
              {
                key: "getStaticValue",
                value: function (e) {
                  return this.latestValues[e];
                },
              },
              {
                key: "setStaticValue",
                value: function (e, t) {
                  this.latestValues[e] = t;
                },
              },
              {
                key: "makeTargetAnimatable",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  return this.makeTargetAnimatableFromInstance(
                    e,
                    this.props,
                    t
                  );
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  (e.transformTemplate || this.props.transformTemplate) &&
                    this.scheduleRender(),
                    (this.prevProps = this.props),
                    (this.props = e),
                    (this.prevPresenceContext = this.presenceContext),
                    (this.presenceContext = t);
                  for (var n = 0; n < Jo.length; n++) {
                    var r = Jo[n];
                    this.propEventSubscriptions[r] &&
                      (this.propEventSubscriptions[r](),
                      delete this.propEventSubscriptions[r]);
                    var a = e["on" + r];
                    a && (this.propEventSubscriptions[r] = this.on(r, a));
                  }
                  (this.prevMotionValues = (function (e, t, n) {
                    var r = t.willChange;
                    for (var a in t) {
                      var i = t[a],
                        o = n[a];
                      if (ie(i)) e.addValue(a, i), sa(r) && r.add(a);
                      else if (ie(o))
                        e.addValue(a, pa(i, { owner: e })),
                          sa(r) && r.remove(a);
                      else if (o !== i)
                        if (e.hasValue(a)) {
                          var l = e.getValue(a);
                          !l.hasAnimated && l.set(i);
                        } else {
                          var s = e.getStaticValue(a);
                          e.addValue(a, pa(void 0 !== s ? s : i, { owner: e }));
                        }
                    }
                    for (var u in n) void 0 === t[u] && e.removeValue(u);
                    return t;
                  })(
                    this,
                    this.scrapeMotionValuesFromProps(e, this.prevProps),
                    this.prevMotionValues
                  )),
                    this.handleChildMotionValue &&
                      this.handleChildMotionValue();
                },
              },
              {
                key: "getProps",
                value: function () {
                  return this.props;
                },
              },
              {
                key: "getVariant",
                value: function (e) {
                  return this.props.variants ? this.props.variants[e] : void 0;
                },
              },
              {
                key: "getDefaultTransition",
                value: function () {
                  return this.props.transition;
                },
              },
              {
                key: "getTransformPagePoint",
                value: function () {
                  return this.props.transformPagePoint;
                },
              },
              {
                key: "getClosestVariantNode",
                value: function () {
                  return this.isVariantNode
                    ? this
                    : this.parent
                    ? this.parent.getClosestVariantNode()
                    : void 0;
                },
              },
              {
                key: "getVariantContext",
                value: function () {
                  if (
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0]
                  )
                    return this.parent
                      ? this.parent.getVariantContext()
                      : void 0;
                  if (!this.isControllingVariants) {
                    var e =
                      (this.parent && this.parent.getVariantContext()) || {};
                    return (
                      void 0 !== this.props.initial &&
                        (e.initial = this.props.initial),
                      e
                    );
                  }
                  for (var t = {}, n = 0; n < el; n++) {
                    var r = z[n],
                      a = this.props[r];
                    (A(a) || !1 === a) && (t[r] = a);
                  }
                  return t;
                },
              },
              {
                key: "addVariantChild",
                value: function (e) {
                  var t = this.getClosestVariantNode();
                  if (t)
                    return (
                      t.variantChildren && t.variantChildren.add(e),
                      function () {
                        return t.variantChildren.delete(e);
                      }
                    );
                },
              },
              {
                key: "addValue",
                value: function (e, t) {
                  t !== this.values.get(e) &&
                    (this.removeValue(e), this.bindToMotionValue(e, t)),
                    this.values.set(e, t),
                    (this.latestValues[e] = t.get());
                },
              },
              {
                key: "removeValue",
                value: function (e) {
                  this.values.delete(e);
                  var t = this.valueSubscriptions.get(e);
                  t && (t(), this.valueSubscriptions.delete(e)),
                    delete this.latestValues[e],
                    this.removeValueFromRenderState(e, this.renderState);
                },
              },
              {
                key: "hasValue",
                value: function (e) {
                  return this.values.has(e);
                },
              },
              {
                key: "getValue",
                value: function (e, t) {
                  if (this.props.values && this.props.values[e])
                    return this.props.values[e];
                  var n = this.values.get(e);
                  return (
                    void 0 === n &&
                      void 0 !== t &&
                      ((n = pa(t, { owner: this })), this.addValue(e, n)),
                    n
                  );
                },
              },
              {
                key: "readValue",
                value: function (e) {
                  return void 0 === this.latestValues[e] && this.current
                    ? this.readValueFromInstance(this.current, e, this.options)
                    : this.latestValues[e];
                },
              },
              {
                key: "setBaseTarget",
                value: function (e, t) {
                  this.baseTarget[e] = t;
                },
              },
              {
                key: "getBaseTarget",
                value: function (e) {
                  var t,
                    n = this.props.initial,
                    r =
                      "string" === typeof n || "object" === typeof n
                        ? null === (t = et(this.props, n)) || void 0 === t
                          ? void 0
                          : t[e]
                        : void 0;
                  if (n && void 0 !== r) return r;
                  var a = this.getBaseTargetFromProps(this.props, e);
                  return void 0 === a || ie(a)
                    ? void 0 !== this.initialValues[e] && void 0 === r
                      ? void 0
                      : this.baseTarget[e]
                    : a;
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return (
                    this.events[e] || (this.events[e] = new fa()),
                    this.events[e].add(t)
                  );
                },
              },
              {
                key: "notify",
                value: function (e) {
                  if (this.events[e]) {
                    for (
                      var t,
                        n = arguments.length,
                        r = new Array(n > 1 ? n - 1 : 0),
                        a = 1;
                      a < n;
                      a++
                    )
                      r[a - 1] = arguments[a];
                    (t = this.events[e]).notify.apply(t, r);
                  }
                },
              },
            ]),
            e
          );
        })(),
        nl = ["transition", "transitionEnd"],
        rl = (function (e) {
          ht(n, e);
          var t = gt(n);
          function n() {
            return ct(this, n), t.apply(this, arguments);
          }
          return (
            dt(n, [
              {
                key: "sortInstanceNodePosition",
                value: function (e, t) {
                  return 2 & e.compareDocumentPosition(t) ? 1 : -1;
                },
              },
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  return e.style ? e.style[t] : void 0;
                },
              },
              {
                key: "removeValueFromRenderState",
                value: function (e, t) {
                  var n = t.vars,
                    r = t.style;
                  delete n[e], delete r[e];
                },
              },
              {
                key: "makeTargetAnimatableFromInstance",
                value: function (e, t, n) {
                  var r = e.transition,
                    a = e.transitionEnd,
                    i = d(e, nl),
                    o = t.transformValues,
                    s = (function (e, t, n) {
                      var r = {};
                      for (var a in e) {
                        var i = ka(a, t);
                        if (void 0 !== i) r[a] = i;
                        else {
                          var o = n.getValue(a);
                          o && (r[a] = o.get());
                        }
                      }
                      return r;
                    })(i, r || {}, this);
                  if (
                    (o && (a && (a = o(a)), i && (i = o(i)), s && (s = o(s))),
                    n)
                  ) {
                    !(function (e, t, n) {
                      var r,
                        a,
                        i = Object.keys(t).filter(function (t) {
                          return !e.hasValue(t);
                        }),
                        o = i.length;
                      if (o)
                        for (var l = 0; l < o; l++) {
                          var s = i[l],
                            u = t[s],
                            c = null;
                          Array.isArray(u) && (c = u[0]),
                            null === c &&
                              (c =
                                null !==
                                  (a =
                                    null !== (r = n[s]) && void 0 !== r
                                      ? r
                                      : e.readValue(s)) && void 0 !== a
                                  ? a
                                  : t[s]),
                            void 0 !== c &&
                              null !== c &&
                              ("string" === typeof c &&
                              (/^\-?\d*\.?\d+$/.test(c) || ra(c))
                                ? (c = parseFloat(c))
                                : !ya(c) && lr.test(u) && (c = na(s, u)),
                              e.addValue(s, pa(c, { owner: e })),
                              void 0 === n[s] && (n[s] = c),
                              null !== c && e.setBaseTarget(s, c));
                        }
                    })(this, i, s);
                    var u = (function (e, t, n, r) {
                      var a = Ao(e, t, r);
                      return $o(e, (t = a.target), n, (r = a.transitionEnd));
                    })(this, i, s, a);
                    (a = u.transitionEnd), (i = u.target);
                  }
                  return l({ transition: r, transitionEnd: a }, i);
                },
              },
            ]),
            n
          );
        })(tl);
      var al = (function (e) {
        ht(n, e);
        var t = gt(n);
        function n() {
          return ct(this, n), t.apply(this, arguments);
        }
        return (
          dt(n, [
            {
              key: "readValueFromInstance",
              value: function (e, t) {
                if (re.has(t)) {
                  var n = ta(t);
                  return (n && n.default) || 0;
                }
                var r,
                  a = ((r = e), window.getComputedStyle(r)),
                  i = (ue(t) ? a.getPropertyValue(t) : a[t]) || 0;
                return "string" === typeof i ? i.trim() : i;
              },
            },
            {
              key: "measureInstanceViewportBox",
              value: function (e, t) {
                return ki(e, t.transformPagePoint);
              },
            },
            {
              key: "build",
              value: function (e, t, n, r) {
                Oe(e, t, n, r.transformTemplate);
              },
            },
            {
              key: "scrapeMotionValuesFromProps",
              value: function (e, t) {
                return Ke(e, t);
              },
            },
            {
              key: "handleChildMotionValue",
              value: function () {
                var e = this;
                this.childSubscription &&
                  (this.childSubscription(), delete this.childSubscription);
                var t = this.props.children;
                ie(t) &&
                  (this.childSubscription = t.on("change", function (t) {
                    e.current && (e.current.textContent = "".concat(t));
                  }));
              },
            },
            {
              key: "renderInstance",
              value: function (e, t, n, r) {
                qe(e, t, n, r);
              },
            },
          ]),
          n
        );
      })(rl);
      function il() {
        return (
          (il =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = (function (e, t) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(e, t) &&
                      null !== (e = vt(e));

                    );
                    return e;
                  })(e, t);
                  if (r) {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    return a.get
                      ? a.get.call(arguments.length < 3 ? e : n)
                      : a.value;
                  }
                }),
          il.apply(this, arguments)
        );
      }
      var ol = (function (e) {
          ht(n, e);
          var t = gt(n);
          function n() {
            var e;
            return (
              ct(this, n), ((e = t.apply(this, arguments)).isSVGTag = !1), e
            );
          }
          return (
            dt(n, [
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  return e[t];
                },
              },
              {
                key: "readValueFromInstance",
                value: function (e, t) {
                  if (re.has(t)) {
                    var n = ta(t);
                    return (n && n.default) || 0;
                  }
                  return (t = Ze.has(t) ? t : Xe(t)), e.getAttribute(t);
                },
              },
              {
                key: "measureInstanceViewportBox",
                value: function () {
                  return ai();
                },
              },
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e, t) {
                  return Je(e, t);
                },
              },
              {
                key: "build",
                value: function (e, t, n, r) {
                  He(e, t, n, this.isSVGTag, r.transformTemplate);
                },
              },
              {
                key: "renderInstance",
                value: function (e, t, n, r) {
                  Ge(e, t, 0, r);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  (this.isSVGTag = $e(e.tagName)),
                    il(vt(n.prototype), "mount", this).call(this, e);
                },
              },
            ]),
            n
          );
        })(rl),
        ll = function (e, t) {
          return ee(e)
            ? new ol(t, { enableHardwareAcceleration: !1 })
            : new al(t, { enableHardwareAcceleration: !0 });
        },
        sl = { layout: { ProjectionNode: Oo, MeasureLayout: Mi } },
        ul = l(l(l(l({}, Da), tn), Lo), sl),
        cl = K(function (e, t) {
          return (function (e, t, n, r) {
            var a = t.forwardMotionProps,
              i = void 0 !== a && a;
            return l(
              l({}, ee(e) ? st : ut),
              {},
              {
                preloadedFeatures: n,
                useRender: Qe(i),
                createVisualElement: r,
                Component: e,
              }
            );
          })(e, t, ul, ll);
        });
      var fl = function () {
          var e = 30,
            t = { originX: 26.3, originY: 22.2 };
          return (0, g.jsx)("div", {
            className: "position-relative d-flex justify-content-center",
            children: (0, g.jsxs)(cl.div, {
              className: "position-relative",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 1.1 },
              animate: { scale: 1 },
              transition: { type: "spring", stiffness: 400, damping: 17 },
              children: [
                (0, g.jsx)(cl.div, {
                  className: "position-absolute",
                  initial: { opacity: 0, scale: 0.25 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.8, delay: 1.5, ease: "easeInOut" },
                  children: (0, g.jsx)(P, {
                    fluid: !0,
                    src: C,
                    alt: "madison-olguin",
                    className: "drop-shadow",
                  }),
                }),
                (0, g.jsx)(cl.div, {
                  className: "position-absolute",
                  initial: {
                    originX: "".concat(t.originX, "%"),
                    originY: "".concat(t.originY, "%"),
                  },
                  animate: {
                    rotate: -360,
                    originX: "".concat(t.originX, "%"),
                    originY: "".concat(t.originY, "%"),
                  },
                  transition: {
                    duration: e,
                    delay: 1.5,
                    ease: "linear",
                    repeat: 1 / 0,
                  },
                  children: (0, g.jsx)(cl.div, {
                    initial: { opacity: 0, scale: 0.25 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 1, delay: 1.5, ease: "easeInOut" },
                    children: (0, g.jsx)(P, {
                      fluid: !0,
                      src: j,
                      alt: "madison-olguin",
                    }),
                  }),
                }),
                (0, g.jsx)(P, {
                  fluid: !0,
                  src: C,
                  alt: "basketball",
                  className: "opacity-0",
                }),
              ],
            }),
          });
        },
        dl = function () {
          return (0, g.jsxs)("div", {
            className: "banner-row",
            children: [
              (0, g.jsxs)(cl.div, {
                className: "banner-bg",
                initial: {
                  scale: 0.1,
                  opacity: 0,
                  skew: -20,
                  translateX: "-50%",
                },
                animate: { scale: 1, opacity: 1 },
                transition: { type: "ease", delay: 1.2, duration: 0.4 },
                children: [
                  " ",
                  (0, g.jsx)("svg", {
                    className: "opacity-0 letter-m-transparent",
                    id: "letter-m-transparent",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "-5 -5 280 120",
                    fill: "#FFFFFF",
                    children: (0, g.jsx)("path", {
                      fill: "#FFFFFF",
                      d: "m76.615,8.929c0-.648-.864-.648-.864-.648-6.265,0-30.026,36.003-50.261,58.325-2.016,2.16-2.52,2.592-4.536,2.592-2.232,0-4.177-.216-4.177-1.728,0-.648.36-1.297.36-1.297C46.444,26.57,55.301,13.104,55.589,12.601c0,0,0-.216-.144-.216-.216,0-.433.216-.433.216-14.329,12.025-34.707,20.09-46.228,20.09-3.312,0-8.785-.792-8.785-3.24,0-.864.792-2.305,1.656-2.305,1.08,0,.937,2.881,9.146,2.881,16.129,0,41.476-13.394,52.276-27.938.144-.216.359-.288.576-.288.647,0,1.439.576,1.439,1.368,0,.216-.071.504-.216.72-11.953,18.146-25.202,41.332-29.522,47.524.072,0,.72-.072,1.152-.504C46.948,39.027,71.143,2.52,80.432,2.52c1.224,0,2.664,1.009,2.664,2.448,0,.36-.145.721-.288,1.08-2.088,4.177-10.657,19.226-19.802,33.843.36,0,.504-.144.792-.576,4.177-5.616,27.074-35.715,35.715-35.715,1.296,0,2.881.433,2.881,1.801,0,.288-.072.575-.217.863-2.16,5.545-29.45,57.102-29.45,76.831,0,4.681,1.584,7.633,5.4,7.633,5.904,0,11.593-4.969,13.825-13.753.216-.793,1.008-1.368,1.729-1.368.576,0,1.08.359,1.08,1.296,0,2.808-4.177,15.985-19.514,15.985-7.633,0-10.513-3.889-10.513-10.081,0-17.354,22.97-52.853,30.17-72.15,0-.432-.432-.72-1.008-.72-8.568,0-36.075,43.491-47.812,57.101-1.943,2.232-2.52,2.593-4.536,2.593-2.232,0-4.176-.217-4.176-1.729,0-.648.359-1.296.359-1.296,0-1.008,8.137-11.81,8.209-11.881,24.914-33.699,29.091-42.34,30.603-45.437.072-.144.072-.216.072-.359Z",
                    }),
                  }),
                ],
              }),
              (0, g.jsxs)("div", {
                className: "banner-box",
                children: [
                  (0, g.jsxs)(cl.svg, {
                    className: "banner-content",
                    initial: {
                      scale: 0.1,
                      opacity: 0,
                      translateX: "30%",
                      translateY: "38%",
                    },
                    animate: {
                      scale: 1,
                      opacity: 1,
                      translateX: "40%",
                      translateY: "38%",
                    },
                    transition: { type: "spring", delay: 1.5, duration: 1 },
                    id: "olguin",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "-5 -5 280 120",
                    children: [
                      (0, g.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "m36.003,52.205c-1.44-2.809-2.088-6.337-2.088-10.153,0-14.905,9.937-34.274,18.793-34.274,3.097,0,4.537,2.664,4.537,6.912,0,9.289-6.625,25.994-16.634,39.315,1.08,1.225,2.521,2.232,4.177,2.952.288.145.359.433.359.648,0,.359-.359.72-.936.72-.145,0-.36,0-.576-.072-1.8-.432-3.312-1.224-4.608-2.304-8.137,10.225-18.434,18.001-29.162,18.001-6.913,0-9.865-4.608-9.865-11.448C0,41.764,27.29,0,56.381,0c3.601,0,4.824,1.152,4.824,2.521,0,2.16-3.024,4.969-4.752,4.969-.145,0,.071-3.745-3.312-3.745C30.675,3.744,5.04,46.156,5.04,64.229c0,4.896,1.944,7.993,6.265,7.993,7.777,0,16.922-8.929,24.698-20.018Zm15.697-41.836c-6.192,0-15.193,17.065-15.193,30.891,0,2.952.433,5.761,1.368,8.209,9.001-13.537,15.77-29.379,15.77-36.003,0-1.944-.576-3.097-1.944-3.097Z",
                      }),
                      (0, g.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "m43.056,65.382c0-14.905,43.275-63.077,49.756-63.077,2.305,0,3.385.936,3.385,2.592,0,7.849-23.114,31.323-40.323,44.716-3.816,6.625-6.337,12.313-6.337,15.266,0,1.44.576,2.304,1.944,2.304,2.088,0,6.265-3.815,12.601-11.377,0,0,.576.217.576.721,0,.144,0,.288-.144.504-6.913,8.856-12.89,12.745-16.562,12.745-3.385,0-4.896-1.656-4.896-4.393Zm14.689-18.865c14.329-11.449,34.707-34.491,34.707-39.027,0-.504-.288-.792-.792-.792-5.329,0-23.187,22.321-33.915,39.819Z",
                      }),
                      (0, g.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "m52.198,84.392c-1.584,0-3.096-.504-3.096-.864,0-.216.432-.36,1.439-.432,10.081-.576,26.57-22.178,26.499-22.898,0-.216-.145-.359-.36-.359-.144,0-.288.071-.576.359-1.8,1.801-10.657,9.793-16.346,9.793-2.664,0-3.816-1.296-3.816-3.456,0-8.713,19.37-30.675,38.235-30.675,2.521,0,3.385.937,3.385,2.017,0,1.655-2.017,3.744-3.097,3.744-.144,0,.072-3.744-3.312-3.744-12.674,0-28.155,19.729-28.155,24.77,0,.721.36,1.152,1.08,1.152,5.761,0,15.554-9.145,18.866-12.602,1.224-1.296,3.096-3.6,4.032-4.608.648-.647,2.305-.863,3.168-.863,1.297,0,2.521.216,2.521.792,0,.144-.072.216-.144.359-4.753,6.265-22.395,37.516-40.324,37.516Z",
                      }),
                      (0, g.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "m105.768,58.901c-.144,0-.288.144-.288.144-1.872,1.873-9.648,9.722-15.337,9.722-2.664,0-3.744-1.08-3.744-2.881,0-5.04,8.496-15.697,15.265-23.834,2.448-2.592,3.673-3.672,4.537-3.816.359-.071,1.008-.144,1.655-.144,1.009,0,2.017.216,2.017.792,0,.216-.144.36-.144.36-7.849,7.344-15.985,19.657-15.985,23.113,0,.576.287.937.792.937,4.824,0,10.801-5.833,14.688-10.153,2.593-3.744,5.688-7.633,8.929-11.305,2.377-2.664,3.673-3.528,4.537-3.816.432-.144,1.152-.216,1.872-.216.864,0,1.728.144,1.728.72,0,.145-.071.216-.144.36-7.993,7.416-16.489,19.657-16.489,25.49,0,1.872.576,2.808,1.584,2.808,2.088,0,6.265-3.815,12.602-11.377,0,0,.575.217.575.721,0,.144,0,.288-.144.504-7.057,9.001-13.321,13.033-17.065,13.033-2.305,0-3.673-1.44-3.673-4.248,0-1.801.792-4.177,2.232-6.913Z",
                      }),
                      (0, g.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "m133.703,40.468c1.728-1.656,2.016-1.656,4.032-1.656,1.296,0,2.088.216,2.088.792,0,.145-.072.216-.144.36-4.537,5.688-14.978,18.722-14.978,24.41,0,1.872.576,2.808,1.584,2.808,2.088,0,6.265-3.815,12.601-11.377,0,0,.576.217.576.721,0,.144,0,.288-.144.504-7.057,9.072-13.465,13.105-17.281,13.105-2.305,0-3.745-1.513-3.745-4.249,0-6.192,10.873-20.882,15.41-25.418Zm11.017-16.777c2.521,0,4.248,1.8,4.248,4.104,0,3.384-3.168,6.336-6.48,6.336-2.521,0-4.176-1.728-4.176-4.104,0-3.385,3.168-6.337,6.408-6.337Z",
                      }),
                      (0, g.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "m149.398,40.756c1.08-1.225,1.584-1.225,3.24-1.225,1.152,0,2.376.145,2.376.793,0,.144-.072.216-.144.359,0,0-6.625,8.569-11.953,17.354,5.04-5.112,21.458-20.449,27.435-20.449.432,0,.576.216.576.504,0,.359-.217.864-.36.936-5.545,3.889-15.842,19.442-15.842,25.347,0,1.872.576,2.808,1.584,2.808,2.089,0,6.265-3.815,12.602-11.377,0,0,.576.217.576.721,0,.144,0,.288-.145.504-6.912,8.856-12.889,12.745-16.562,12.745-2.304,0-4.392-.72-4.392-3.601,0-5.473,7.92-16.201,13.465-22.034,0-.216-.144-.216-.288-.216-1.872,0-19.441,17.138-22.826,20.666-1.439,1.296-3.744,4.393-5.977,4.393-1.439,0-2.376-.937-2.376-2.593l19.01-25.634Z",
                      }),
                    ],
                  }),
                  (0, g.jsxs)(cl.svg, {
                    className: "banner-content",
                    initial: { scale: 0.1, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { type: "spring", delay: 1.5, duration: 1 },
                    id: "madison",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "-5 -5 280 120",
                    fill: "#FFFFFF",
                    children: [
                      (0, g.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "m105.196,66.173c-2.304,0-3.672-1.584-3.672-4.464,0-1.872.575-4.32,1.943-6.841,0-.216-.144-.36-.359-.36-.145,0-.288.072-.576.36-1.801,1.8-10.585,10.297-16.273,10.297-2.736,0-3.961-1.368-3.961-3.601,0-8.568,18.362-29.522,37.012-29.522,2.232,0,2.88.576,2.88,1.368,0,1.368-2.088,3.169-2.448,3.169-.144,0-.071-2.521-3.456-2.521-12.529,0-26.858,18.577-26.858,23.618,0,.792.36,1.296,1.152,1.296,5.761,0,13.753-8.209,17.065-11.665,2.448-2.664,8.064-9.36,9.793-9.505.432-.072,1.008-.144,1.656-.144,1.296,0,2.52.216,2.52.792,0,.144-.071.216-.144.359-.504.648-1.944,2.017-3.385,3.601-3.744,3.96-10.944,11.81-10.944,18.361,0,1.872.576,2.809,1.584,2.809,2.088,0,6.265-3.816,12.602-11.377,0,0,.575.216.575.72,0,.145,0,.288-.144.504-6.913,8.857-12.89,12.745-16.562,12.745Z",
                      }),
                      (0, g.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "m191.745,3.672c0,7.345-15.554,23.402-36.003,27.362-8.354,12.313-14.762,24.914-14.762,29.738,0,1.872.576,2.809,1.584,2.809,2.088,0,6.265-3.816,12.602-11.377,0,0,.576.216.576.72,0,.145,0,.288-.145.504-6.912,8.857-12.889,12.745-16.562,12.745-2.304,0-3.672-1.584-3.672-4.464,0-1.513.432-3.528,1.296-5.904-2.88,2.736-9.865,8.784-14.833,8.784-3.961,0-5.617-2.016-5.617-4.968,0-8.209,13.033-23.834,25.778-23.834,2.376,0,3.169.792,3.169,1.728,0,1.44-1.656,3.168-2.017,3.168-.144,0-.792-2.88-4.177-2.88-6.408,0-15.769,12.961-15.769,18.578,0,1.584.72,2.592,2.448,2.592,3.888,0,8.856-3.744,12.673-7.272,2.664-5.833,6.912-12.89,11.953-19.946-1.08,0-2.952-.575-2.952-2.304,0-.504.288-.937.863-.937.721.072,1.944.145,3.097.145.432,0,.864,0,1.296-.072C163.734,13.753,177.848,0,187.064,0c3.24,0,4.681,1.439,4.681,3.672Zm-5.833-1.296c-7.2,0-18.577,12.169-28.082,25.634,18.361-3.312,30.171-18.001,30.171-23.546,0-1.296-.648-2.088-2.089-2.088Z",
                      }),
                      (0, g.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "m164.955,36.867c1.729-1.656,2.017-1.656,4.032-1.656,1.296,0,2.089.216,2.089.792,0,.144-.072.216-.145.359-4.536,5.688-14.978,18.722-14.978,24.41,0,1.872.576,2.809,1.584,2.809,2.089,0,6.265-3.816,12.602-11.377,0,0,.576.216.576.72,0,.145,0,.288-.145.504-7.057,9.073-13.465,13.105-17.281,13.105-2.304,0-3.744-1.512-3.744-4.248,0-6.192,10.873-20.882,15.409-25.418Zm11.017-16.778c2.521,0,4.249,1.801,4.249,4.104,0,3.385-3.169,6.337-6.48,6.337-2.521,0-4.177-1.729-4.177-4.104,0-3.384,3.168-6.337,6.408-6.337Z",
                      }),
                      (0, g.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "m194.188,52.924c0,.145,0,.288-.145.504-6.841,8.857-13.609,11.81-20.09,11.81-6.769,0-9.001-3.312-9.001-6.841,0-3.889,2.736-7.992,5.112-7.992.505,0,1.009.071,1.513.216,3.096-3.456,6.553-7.129,9.577-10.657-.072-1.008-.217-2.232-.217-3.24,0-5.977,3.385-8.785,5.617-8.785,1.08,0,1.872.648,1.872,1.944,0,2.089-2.017,5.257-5.041,9.001.504,3.673,1.801,8.856,1.801,14.113,0,4.465-2.017,7.561-4.753,9.505,4.104-1.296,8.425-4.681,13.178-10.297,0,0,.576.216.576.72Zm-26.787,7.633c0,1.225.721,1.944,2.232,1.944,5.473,0,11.665-8.641,11.665-19.874v-1.224c-2.88,3.24-5.832,6.336-8.641,9.721.288.144.432.288.504.36-3.744,3.6-5.761,7.057-5.761,9.072Zm17.57-29.883c-.864,0-1.944,1.08-1.944,4.104,0,.576.071,1.152.144,2.664,1.801-2.304,2.952-4.248,2.952-5.472,0-.792-.576-1.297-1.151-1.297Z",
                      }),
                      (0, g.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "m220.899,39.603c0,3.889-4.752,11.377-11.305,17.426.576.72,1.368,1.08,2.376,1.08,2.305,0,5.545-2.16,8.641-5.904,0,0,.648.216.648.72,0,.145-.072.288-.216.504-3.097,4.393-7.129,6.553-10.441,6.553-1.296,0-2.448-.288-3.384-.936-4.969,4.032-10.729,6.984-16.201,6.984-3.024,0-4.393-1.729-4.393-4.32,0-9.001,15.841-28.803,33.986-28.803,2.377,0,3.097.648,3.097,1.44,0,1.152-1.656,2.592-2.017,2.592-.144,0-.72-2.016-4.104-2.016-9.793,0-24.194,16.562-24.194,23.762,0,2.017,1.152,3.312,3.816,3.312s5.688-1.872,8.496-4.465c-.72-1.08-1.08-2.592-1.08-4.393,0-6.696,6.049-16.057,13.682-16.057,1.8,0,2.592.936,2.592,2.52Zm-5.472-.216c-3.097,0-6.77,8.137-6.77,13.682,0,.504,0,.936.072,1.368,4.32-5.041,7.705-11.161,7.705-13.754,0-.792-.288-1.296-1.008-1.296Z",
                      }),
                      (0, g.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "m231.771,37.154c1.08-1.224,1.584-1.224,3.24-1.224,1.152,0,2.376.144,2.376.792,0,.145-.072.216-.144.36,0,0-6.625,8.568-11.953,17.354,5.04-5.112,21.458-20.45,27.435-20.45.432,0,.576.216.576.504,0,.36-.217.864-.36.937-5.545,3.888-15.842,19.441-15.842,25.346,0,1.872.576,2.809,1.584,2.809,2.089,0,6.265-3.816,12.602-11.377,0,0,.576.216.576.72,0,.145,0,.288-.145.504-6.912,8.857-12.889,12.745-16.562,12.745-2.304,0-4.392-.72-4.392-3.6,0-5.473,7.92-16.202,13.465-22.034,0-.216-.144-.216-.288-.216-1.872,0-19.441,17.138-22.826,20.666-1.439,1.296-3.744,4.392-5.977,4.392-1.439,0-2.376-.936-2.376-2.592l19.01-25.635Z",
                      }),
                    ],
                  }),
                  (0, g.jsx)(cl.svg, {
                    className: "banner-content",
                    id: "letter-m",
                    initial: {
                      scale: 2,
                      opacity: 1,
                      transformOrigin: "25% 30%",
                      translateX: "35%",
                      translateY: "-180%",
                    },
                    animate: {
                      scale: 1,
                      transformOrigin: "25% 30%",
                      translateX: "0%",
                      translateY: "0%",
                    },
                    transition: {
                      duration: 2,
                      delay: 1,
                      ease: [0, 0.71, 0.2, 1.01],
                    },
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "-5 -5 280 120",
                    fill: "#FFFFFF",
                    children: (0, g.jsx)("path", {
                      fill: "#FFFFFF",
                      d: "m76.615,8.929c0-.648-.864-.648-.864-.648-6.265,0-30.026,36.003-50.261,58.325-2.016,2.16-2.52,2.592-4.536,2.592-2.232,0-4.177-.216-4.177-1.728,0-.648.36-1.297.36-1.297C46.444,26.57,55.301,13.104,55.589,12.601c0,0,0-.216-.144-.216-.216,0-.433.216-.433.216-14.329,12.025-34.707,20.09-46.228,20.09-3.312,0-8.785-.792-8.785-3.24,0-.864.792-2.305,1.656-2.305,1.08,0,.937,2.881,9.146,2.881,16.129,0,41.476-13.394,52.276-27.938.144-.216.359-.288.576-.288.647,0,1.439.576,1.439,1.368,0,.216-.071.504-.216.72-11.953,18.146-25.202,41.332-29.522,47.524.072,0,.72-.072,1.152-.504C46.948,39.027,71.143,2.52,80.432,2.52c1.224,0,2.664,1.009,2.664,2.448,0,.36-.145.721-.288,1.08-2.088,4.177-10.657,19.226-19.802,33.843.36,0,.504-.144.792-.576,4.177-5.616,27.074-35.715,35.715-35.715,1.296,0,2.881.433,2.881,1.801,0,.288-.072.575-.217.863-2.16,5.545-29.45,57.102-29.45,76.831,0,4.681,1.584,7.633,5.4,7.633,5.904,0,11.593-4.969,13.825-13.753.216-.793,1.008-1.368,1.729-1.368.576,0,1.08.359,1.08,1.296,0,2.808-4.177,15.985-19.514,15.985-7.633,0-10.513-3.889-10.513-10.081,0-17.354,22.97-52.853,30.17-72.15,0-.432-.432-.72-1.008-.72-8.568,0-36.075,43.491-47.812,57.101-1.943,2.232-2.52,2.593-4.536,2.593-2.232,0-4.176-.217-4.176-1.729,0-.648.359-1.296.359-1.296,0-1.008,8.137-11.81,8.209-11.881,24.914-33.699,29.091-42.34,30.603-45.437.072-.144.072-.216.072-.359Z",
                    }),
                  }),
                  (0, g.jsx)("svg", {
                    className: "opacity-0 letter-m-transparent",
                    id: "letter-m-transparent",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "-5 -5 280 120",
                    fill: "#FFFFFF",
                    children: (0, g.jsx)("path", {
                      fill: "#FFFFFF",
                      d: "m76.615,8.929c0-.648-.864-.648-.864-.648-6.265,0-30.026,36.003-50.261,58.325-2.016,2.16-2.52,2.592-4.536,2.592-2.232,0-4.177-.216-4.177-1.728,0-.648.36-1.297.36-1.297C46.444,26.57,55.301,13.104,55.589,12.601c0,0,0-.216-.144-.216-.216,0-.433.216-.433.216-14.329,12.025-34.707,20.09-46.228,20.09-3.312,0-8.785-.792-8.785-3.24,0-.864.792-2.305,1.656-2.305,1.08,0,.937,2.881,9.146,2.881,16.129,0,41.476-13.394,52.276-27.938.144-.216.359-.288.576-.288.647,0,1.439.576,1.439,1.368,0,.216-.071.504-.216.72-11.953,18.146-25.202,41.332-29.522,47.524.072,0,.72-.072,1.152-.504C46.948,39.027,71.143,2.52,80.432,2.52c1.224,0,2.664,1.009,2.664,2.448,0,.36-.145.721-.288,1.08-2.088,4.177-10.657,19.226-19.802,33.843.36,0,.504-.144.792-.576,4.177-5.616,27.074-35.715,35.715-35.715,1.296,0,2.881.433,2.881,1.801,0,.288-.072.575-.217.863-2.16,5.545-29.45,57.102-29.45,76.831,0,4.681,1.584,7.633,5.4,7.633,5.904,0,11.593-4.969,13.825-13.753.216-.793,1.008-1.368,1.729-1.368.576,0,1.08.359,1.08,1.296,0,2.808-4.177,15.985-19.514,15.985-7.633,0-10.513-3.889-10.513-10.081,0-17.354,22.97-52.853,30.17-72.15,0-.432-.432-.72-1.008-.72-8.568,0-36.075,43.491-47.812,57.101-1.943,2.232-2.52,2.593-4.536,2.593-2.232,0-4.176-.217-4.176-1.729,0-.648.359-1.296.359-1.296,0-1.008,8.137-11.81,8.209-11.881,24.914-33.699,29.091-42.34,30.603-45.437.072-.144.072-.216.072-.359Z",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        pl = function () {
          return (0, g.jsx)("section", {
            className: "scroll-container",
            children: (0, g.jsxs)("div", {
              className: "page-container",
              children: [
                (0, g.jsx)("div", {
                  className: "content-container",
                  children: (0, g.jsx)(fl, {}),
                }),
                (0, g.jsx)(dl, {}),
              ],
            }),
          });
        },
        hl = ["bsPrefix", "className", "as"],
        vl = e.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.as,
            i = void 0 === a ? "div" : a,
            o = d(e, hl),
            s = x(n, "row"),
            u = w(),
            c = k(),
            f = "".concat(s, "-cols"),
            p = [];
          return (
            u.forEach(function (e) {
              var t,
                n = o[e];
              delete o[e],
                (t = null != n && "object" === typeof n ? n.cols : n);
              var r = e !== c ? "-".concat(e) : "";
              null != t && p.push("".concat(f).concat(r, "-").concat(t));
            }),
            (0, g.jsx)(
              i,
              l(
                l({ ref: t }, o),
                {},
                { className: h().apply(void 0, [r, s].concat(p)) }
              )
            )
          );
        });
      vl.displayName = "Row";
      var ml = vl,
        gl = ["as", "bsPrefix", "className"],
        yl = ["className"];
      var bl = e.forwardRef(function (e, t) {
        var n = (function (e) {
            var t = e.as,
              n = e.bsPrefix,
              r = e.className,
              a = d(e, gl);
            n = x(n, "col");
            var i = w(),
              o = k(),
              s = [],
              u = [];
            return (
              i.forEach(function (e) {
                var t,
                  r,
                  i,
                  l = a[e];
                delete a[e],
                  "object" === typeof l && null != l
                    ? ((t = l.span), (r = l.offset), (i = l.order))
                    : (t = l);
                var c = e !== o ? "-".concat(e) : "";
                t &&
                  s.push(
                    !0 === t
                      ? "".concat(n).concat(c)
                      : "".concat(n).concat(c, "-").concat(t)
                  ),
                  null != i && u.push("order".concat(c, "-").concat(i)),
                  null != r && u.push("offset".concat(c, "-").concat(r));
              }),
              [
                l(
                  l({}, a),
                  {},
                  { className: h().apply(void 0, [r].concat(s, u)) }
                ),
                { as: t, bsPrefix: n, spans: s },
              ]
            );
          })(e),
          r = c(n, 2),
          a = r[0],
          i = a.className,
          o = d(a, yl),
          s = r[1],
          u = s.as,
          f = void 0 === u ? "div" : u,
          p = s.bsPrefix,
          v = s.spans;
        return (0,
        g.jsx)(f, l(l({}, o), {}, { ref: t, className: h()(i, !v.length && p) }));
      });
      bl.displayName = "Col";
      var xl = bl,
        wl =
          n.p +
          "static/media/sitting-w-ball-bg-vert-100.d59cb67b369e0eee8fd3.jpg";
      var kl =
          n.p +
          "static/media/maxpreps-icon.e9ca0239295ba0878ad2879a04cb3fd2.svg",
        Sl = function () {
          return (0, g.jsxs)("section", {
            className: "scroll-container",
            children: [
              (0, g.jsx)("div", {
                className: "bg-absolute",
                style: {
                  backgroundImage:
                    "radial-gradient(rgba(0,0,0, 0.8), rgba(0,0,0, 0.8), rgba(0,0,0, 1) 90%),\n           url('".concat(
                      wl,
                      "')"
                    ),
                  backgroundPosition: "center top",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                },
              }),
              (0, g.jsxs)("div", {
                className: "page-container",
                children: [
                  (0, g.jsx)(ml, {
                    className: "mb-5",
                    children: (0, g.jsx)(xl, {
                      className: "d-flex justify-content-center",
                      children: (0, g.jsx)("h1", { children: "About Me" }),
                    }),
                  }),
                  (0, g.jsx)(ml, {
                    className: "mb-3",
                    children: (0, g.jsx)(xl, {
                      className: "d-flex justify-content-center",
                      children: (0, g.jsx)("span", {
                        className: "svg-icon-link",
                        style: {
                          backgroundColor: "#e91d00",
                          backgroundImage: "url('".concat(kl, "')"),
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        },
                        children: (0, g.jsx)("a", {
                          alt: "maxpreps-link",
                          href: "https://www.maxpreps.com/tx/san-antonio/antonian-prep-apaches/athletes/madison-olguin/?careerid=flf7tv0sp6144",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        El = ["color", "size", "title"];
      function Pl() {
        return (
          (Pl =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Pl.apply(this, arguments)
        );
      }
      function Cl(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var jl = (0, e.forwardRef)(function (t, n) {
        var r = t.color,
          a = t.size,
          i = t.title,
          o = Cl(t, El);
        return e.createElement(
          "svg",
          Pl(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              width: a,
              height: a,
              fill: r,
            },
            o
          ),
          i ? e.createElement("title", null, i) : null,
          e.createElement("path", {
            d: "M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z",
          })
        );
      });
      (jl.propTypes = {
        color: m().string,
        size: m().oneOfType([m().string, m().number]),
        title: m().string,
      }),
        (jl.defaultProps = { color: "currentColor", size: "1em", title: null });
      var Tl = jl,
        Nl = ["color", "size", "title"];
      function Ol() {
        return (
          (Ol =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Ol.apply(this, arguments)
        );
      }
      function Ll(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var Fl = (0, e.forwardRef)(function (t, n) {
        var r = t.color,
          a = t.size,
          i = t.title,
          o = Ll(t, Nl);
        return e.createElement(
          "svg",
          Ol(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              width: a,
              height: a,
              fill: r,
            },
            o
          ),
          i ? e.createElement("title", null, i) : null,
          e.createElement("path", {
            d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z",
          })
        );
      });
      (Fl.propTypes = {
        color: m().string,
        size: m().oneOfType([m().string, m().number]),
        title: m().string,
      }),
        (Fl.defaultProps = { color: "currentColor", size: "1em", title: null });
      var Rl = Fl,
        Ml = ["color", "size", "title"];
      function Al() {
        return (
          (Al =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Al.apply(this, arguments)
        );
      }
      function Dl(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var _l = (0, e.forwardRef)(function (t, n) {
        var r = t.color,
          a = t.size,
          i = t.title,
          o = Dl(t, Ml);
        return e.createElement(
          "svg",
          Al(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              width: a,
              height: a,
              fill: r,
            },
            o
          ),
          i ? e.createElement("title", null, i) : null,
          e.createElement("path", {
            d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z",
          })
        );
      });
      (_l.propTypes = {
        color: m().string,
        size: m().oneOfType([m().string, m().number]),
        title: m().string,
      }),
        (_l.defaultProps = { color: "currentColor", size: "1em", title: null });
      var zl = _l,
        Vl = ["color", "size", "title"];
      function Il() {
        return (
          (Il =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Il.apply(this, arguments)
        );
      }
      function Bl(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var Ul = (0, e.forwardRef)(function (t, n) {
        var r = t.color,
          a = t.size,
          i = t.title,
          o = Bl(t, Vl);
        return e.createElement(
          "svg",
          Il(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              width: a,
              height: a,
              fill: r,
            },
            o
          ),
          i ? e.createElement("title", null, i) : null,
          e.createElement("path", {
            d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z",
          })
        );
      });
      (Ul.propTypes = {
        color: m().string,
        size: m().oneOfType([m().string, m().number]),
        title: m().string,
      }),
        (Ul.defaultProps = { color: "currentColor", size: "1em", title: null });
      var Hl = Ul,
        Wl = ["color", "size", "title"];
      function $l() {
        return (
          ($l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          $l.apply(this, arguments)
        );
      }
      function Yl(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var Ql = (0, e.forwardRef)(function (t, n) {
        var r = t.color,
          a = t.size,
          i = t.title,
          o = Yl(t, Wl);
        return e.createElement(
          "svg",
          $l(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              width: a,
              height: a,
              fill: r,
            },
            o
          ),
          i ? e.createElement("title", null, i) : null,
          e.createElement("path", {
            d: "M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z",
          })
        );
      });
      (Ql.propTypes = {
        color: m().string,
        size: m().oneOfType([m().string, m().number]),
        title: m().string,
      }),
        (Ql.defaultProps = { color: "currentColor", size: "1em", title: null });
      var Xl = Ql,
        ql = function () {
          var t = c((0, e.useState)({}), 2),
            n = t[0],
            r = t[1],
            a = function (e) {
              var t = e.target.attributes.name.value;
              r(i({}, t, !n[t]));
            };
          return (0, g.jsx)("section", {
            className: "scroll-container",
            children: (0, g.jsxs)("div", {
              className: "page-container",
              children: [
                (0, g.jsx)(ml, {
                  className: "mb-5",
                  children: (0, g.jsx)(xl, {
                    className: "d-flex justify-content-center",
                    children: (0, g.jsx)("h1", { children: "Contact Me" }),
                  }),
                }),
                (0, g.jsxs)(ml, {
                  className: "mb-3",
                  children: [
                    (0, g.jsx)(xl, {
                      className: "d-flex justify-content-center",
                      children: (0, g.jsx)(cl.div, {
                        whileHover: { scale: 2 },
                        whileTap: { scale: 2 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: (0, g.jsx)("span", {
                          className: "icon-button click-pointer",
                          onMouseEnter: a,
                          onMouseLeave: a,
                          name: "email",
                          children: n.email
                            ? (0, g.jsx)(Tl, {
                                style: { transform: "translateY(-12.5%)" },
                              })
                            : (0, g.jsx)(Rl, {}),
                        }),
                      }),
                    }),
                    (0, g.jsx)(xl, {
                      className: "d-flex justify-content-center",
                      children: (0, g.jsx)(cl.div, {
                        whileHover: { scale: 2 },
                        whileTap: { scale: 2 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: (0, g.jsx)("span", {
                          className: "icon-button",
                          onMouseEnter: a,
                          onMouseLeave: a,
                          name: "telephone",
                          children: n.telephone
                            ? (0, g.jsx)(zl, {})
                            : (0, g.jsx)(Hl, {}),
                        }),
                      }),
                    }),
                    (0, g.jsx)(xl, {
                      className: "d-flex justify-content-center",
                      children: (0, g.jsx)(cl.div, {
                        whileHover: { scale: 2 },
                        whileTap: { scale: 2 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: (0, g.jsx)("span", {
                          className: "icon-button",
                          onMouseEnter: a,
                          onMouseLeave: a,
                          name: "messenger",
                          children: n.messenger
                            ? (0, g.jsx)(Xl, {
                                style: { transform: "rotate(10deg)" },
                              })
                            : (0, g.jsx)(Xl, {}),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Zl = ["color", "size", "title"];
      function Gl() {
        return (
          (Gl =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Gl.apply(this, arguments)
        );
      }
      function Kl(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var Jl = (0, e.forwardRef)(function (t, n) {
        var r = t.color,
          a = t.size,
          i = t.title,
          o = Kl(t, Zl);
        return e.createElement(
          "svg",
          Gl(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              width: a,
              height: a,
              fill: r,
            },
            o
          ),
          i ? e.createElement("title", null, i) : null,
          e.createElement("path", {
            d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
          })
        );
      });
      (Jl.propTypes = {
        color: m().string,
        size: m().oneOfType([m().string, m().number]),
        title: m().string,
      }),
        (Jl.defaultProps = { color: "currentColor", size: "1em", title: null });
      var es = Jl,
        ts = ["color", "size", "title"];
      function ns() {
        return (
          (ns =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          ns.apply(this, arguments)
        );
      }
      function rs(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var as = (0, e.forwardRef)(function (t, n) {
        var r = t.color,
          a = t.size,
          i = t.title,
          o = rs(t, ts);
        return e.createElement(
          "svg",
          ns(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              width: a,
              height: a,
              fill: r,
            },
            o
          ),
          i ? e.createElement("title", null, i) : null,
          e.createElement("path", {
            d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
          })
        );
      });
      (as.propTypes = {
        color: m().string,
        size: m().oneOfType([m().string, m().number]),
        title: m().string,
      }),
        (as.defaultProps = { color: "currentColor", size: "1em", title: null });
      var is = as,
        os = ["color", "size", "title"];
      function ls() {
        return (
          (ls =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          ls.apply(this, arguments)
        );
      }
      function ss(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var us = (0, e.forwardRef)(function (t, n) {
        var r = t.color,
          a = t.size,
          i = t.title,
          o = ss(t, os);
        return e.createElement(
          "svg",
          ls(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              width: a,
              height: a,
              fill: r,
            },
            o
          ),
          i ? e.createElement("title", null, i) : null,
          e.createElement("path", {
            d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
          })
        );
      });
      (us.propTypes = {
        color: m().string,
        size: m().oneOfType([m().string, m().number]),
        title: m().string,
      }),
        (us.defaultProps = { color: "currentColor", size: "1em", title: null });
      var cs = us,
        fs = function () {
          return (0, g.jsx)("section", {
            className: "scroll-container",
            children: (0, g.jsxs)("div", {
              className: "page-container",
              children: [
                (0, g.jsx)(ml, {
                  className: "mb-5",
                  children: (0, g.jsx)(xl, {
                    className: "d-flex justify-content-center",
                    children: (0, g.jsx)("h1", { children: "Media" }),
                  }),
                }),
                (0, g.jsxs)(ml, {
                  className: "mb-3 fs-1 pb-5",
                  children: [
                    (0, g.jsx)(xl, {
                      className: "d-flex justify-content-center",
                      children: (0, g.jsx)(cl.div, {
                        whileHover: { scale: 2 },
                        whileTap: { scale: 2 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: (0, g.jsx)("a", {
                          className: "text-reset",
                          href: "https://twitter.com/MadisonOlguin21",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, g.jsx)(es, {}),
                        }),
                      }),
                    }),
                    (0, g.jsx)(xl, {
                      className: "d-flex justify-content-center",
                      children: (0, g.jsx)(cl.div, {
                        whileHover: { scale: 2 },
                        whileTap: { scale: 2 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: (0, g.jsx)("a", {
                          className: "text-reset",
                          href: "https://twitter.com/MadisonOlguin21",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, g.jsx)(is, {}),
                        }),
                      }),
                    }),
                    (0, g.jsx)(xl, {
                      className: "d-flex justify-content-center",
                      children: (0, g.jsx)(cl.div, {
                        whileHover: { scale: 2 },
                        whileTap: { scale: 2 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: (0, g.jsx)("a", {
                          className: "text-reset",
                          href: "https://twitter.com/MadisonOlguin21",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, g.jsx)(cs, {}),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, g.jsx)(ml, {
                  className: "mb-3",
                  children: (0, g.jsx)(xl, {}),
                }),
              ],
            }),
          });
        },
        ds = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        ps = !1,
        hs = !1;
      try {
        var vs = {
          get passive() {
            return (ps = !0);
          },
          get once() {
            return (hs = ps = !0);
          },
        };
        ds &&
          (window.addEventListener("test", vs, vs),
          window.removeEventListener("test", vs, !0));
      } catch (df) {}
      var ms = function (e, t, n, r) {
        if (r && "boolean" !== typeof r && !hs) {
          var a = r.once,
            i = r.capture,
            o = n;
          !hs &&
            a &&
            ((o =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, i), n.call(this, r);
              }),
            (n.__once = o)),
            e.addEventListener(t, o, ps ? r : i);
        }
        e.addEventListener(t, n, r);
      };
      function gs(e) {
        return (e && e.ownerDocument) || document;
      }
      var ys,
        bs = function (e, t, n, r) {
          var a = r && "boolean" !== typeof r ? r.capture : r;
          e.removeEventListener(t, n, a),
            n.__once && e.removeEventListener(t, n.__once, a);
        };
      function xs(e) {
        if (((!ys && 0 !== ys) || e) && ds) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (ys = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return ys;
      }
      var ws = function (t) {
        var n = (0, e.useRef)(t);
        return (
          (0, e.useEffect)(
            function () {
              n.current = t;
            },
            [t]
          ),
          n
        );
      };
      function ks(t) {
        var n = ws(t);
        return (0, e.useCallback)(
          function () {
            return n.current && n.current.apply(n, arguments);
          },
          [n]
        );
      }
      var Ss = function (e) {
        return e && "function" !== typeof e
          ? function (t) {
              e.current = t;
            }
          : e;
      };
      var Es = function (t, n) {
        return (0, e.useMemo)(
          function () {
            return (function (e, t) {
              var n = Ss(e),
                r = Ss(t);
              return function (e) {
                n && n(e), r && r(e);
              };
            })(t, n);
          },
          [t, n]
        );
      };
      function Ps(t) {
        var n = (function (t) {
          var n = (0, e.useRef)(t);
          return (n.current = t), n;
        })(t);
        (0, e.useEffect)(function () {
          return function () {
            return n.current();
          };
        }, []);
      }
      function Cs(e, t) {
        return (function (e) {
          var t = gs(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var js = /([A-Z])/g;
      var Ts = /^ms-/;
      function Ns(e) {
        return (function (e) {
          return e.replace(js, "-$1").toLowerCase();
        })(e).replace(Ts, "-ms-");
      }
      var Os =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      var Ls = function (e, t) {
        var n = "",
          r = "";
        if ("string" === typeof t)
          return (
            e.style.getPropertyValue(Ns(t)) || Cs(e).getPropertyValue(Ns(t))
          );
        Object.keys(t).forEach(function (a) {
          var i = t[a];
          i || 0 === i
            ? !(function (e) {
                return !(!e || !Os.test(e));
              })(a)
              ? (n += Ns(a) + ": " + i + ";")
              : (r += a + "(" + i + ") ")
            : e.style.removeProperty(Ns(a));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      var Fs = function (e, t, n, r) {
        return (
          ms(e, t, n, r),
          function () {
            bs(e, t, n, r);
          }
        );
      };
      function Rs(e, t, n) {
        void 0 === n && (n = 5);
        var r = !1,
          a = setTimeout(function () {
            r ||
              (function (e, t, n, r) {
                if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
                  var a = document.createEvent("HTMLEvents");
                  a.initEvent(t, n, r), e.dispatchEvent(a);
                }
              })(e, "transitionend", !0);
          }, t + n),
          i = Fs(
            e,
            "transitionend",
            function () {
              r = !0;
            },
            { once: !0 }
          );
        return function () {
          clearTimeout(a), i();
        };
      }
      function Ms(e, t, n, r) {
        null == n &&
          (n =
            (function (e) {
              var t = Ls(e, "transitionDuration") || "",
                n = -1 === t.indexOf("ms") ? 1e3 : 1;
              return parseFloat(t) * n;
            })(e) || 0);
        var a = Rs(e, n, r),
          i = Fs(e, "transitionend", t);
        return function () {
          a(), i();
        };
      }
      function As(e) {
        void 0 === e && (e = gs());
        try {
          var t = e.activeElement;
          return t && t.nodeName ? t : null;
        } catch (df) {
          return e.body;
        }
      }
      function Ds(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      var _s = n(164);
      var zs,
        Vs = ((zs = "modal-open"), "".concat("data-rr-ui-").concat(zs)),
        Is = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = t.ownerDocument,
              r = t.handleContainerOverflow,
              a = void 0 === r || r,
              i = t.isRTL,
              o = void 0 !== i && i;
            ct(this, e),
              (this.handleContainerOverflow = a),
              (this.isRTL = o),
              (this.modals = []),
              (this.ownerDocument = n);
          }
          return (
            dt(e, [
              {
                key: "getScrollbarWidth",
                value: function () {
                  return (function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : document,
                      t = e.defaultView;
                    return Math.abs(
                      t.innerWidth - e.documentElement.clientWidth
                    );
                  })(this.ownerDocument);
                },
              },
              {
                key: "getElement",
                value: function () {
                  return (this.ownerDocument || document).body;
                },
              },
              { key: "setModalAttributes", value: function (e) {} },
              { key: "removeModalAttributes", value: function (e) {} },
              {
                key: "setContainerStyle",
                value: function (e) {
                  var t = { overflow: "hidden" },
                    n = this.isRTL ? "paddingLeft" : "paddingRight",
                    r = this.getElement();
                  (e.style = i({ overflow: r.style.overflow }, n, r.style[n])),
                    e.scrollBarWidth &&
                      (t[n] = "".concat(
                        parseInt(Ls(r, n) || "0", 10) + e.scrollBarWidth,
                        "px"
                      )),
                    r.setAttribute(Vs, ""),
                    Ls(r, t);
                },
              },
              {
                key: "reset",
                value: function () {
                  var e = this;
                  nn(this.modals).forEach(function (t) {
                    return e.remove(t);
                  });
                },
              },
              {
                key: "removeContainerStyle",
                value: function (e) {
                  var t = this.getElement();
                  t.removeAttribute(Vs), Object.assign(t.style, e.style);
                },
              },
              {
                key: "add",
                value: function (e) {
                  var t = this.modals.indexOf(e);
                  return -1 !== t
                    ? t
                    : ((t = this.modals.length),
                      this.modals.push(e),
                      this.setModalAttributes(e),
                      0 !== t ||
                        ((this.state = {
                          scrollBarWidth: this.getScrollbarWidth(),
                          style: {},
                        }),
                        this.handleContainerOverflow &&
                          this.setContainerStyle(this.state)),
                      t);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = this.modals.indexOf(e);
                  -1 !== t &&
                    (this.modals.splice(t, 1),
                    !this.modals.length &&
                      this.handleContainerOverflow &&
                      this.removeContainerStyle(this.state),
                    this.removeModalAttributes(e));
                },
              },
              {
                key: "isTopModal",
                value: function (e) {
                  return (
                    !!this.modals.length &&
                    this.modals[this.modals.length - 1] === e
                  );
                },
              },
            ]),
            e
          );
        })(),
        Bs = Is,
        Us = (0, e.createContext)(ds ? window : void 0);
      Us.Provider;
      function Hs() {
        return (0, e.useContext)(Us);
      }
      var Ws = function (e, t) {
        return ds
          ? null == e
            ? (t || gs()).body
            : ("function" === typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
          : null;
      };
      var $s =
          "undefined" !== typeof n.g &&
          n.g.navigator &&
          "ReactNative" === n.g.navigator.product,
        Ys =
          "undefined" !== typeof document || $s
            ? e.useLayoutEffect
            : e.useEffect;
      var Qs = function (t) {
        var n = t.children,
          r = t.in,
          a = t.onExited,
          i = t.mountOnEnter,
          o = t.unmountOnExit,
          l = (0, e.useRef)(null),
          s = (0, e.useRef)(r),
          u = ks(a);
        (0, e.useEffect)(
          function () {
            r ? (s.current = !0) : u(l.current);
          },
          [r, u]
        );
        var c = Es(l, n.ref),
          f = (0, e.cloneElement)(n, { ref: c });
        return r ? f : o || (!s.current && i) ? null : f;
      };
      function Xs(t) {
        var n = t.children,
          r = t.in,
          a = t.onExited,
          i = t.onEntered,
          o = t.transition,
          l = c((0, e.useState)(!r), 2),
          s = l[0],
          u = l[1];
        r && s && u(!1);
        var f = (function (t) {
            var n = t.in,
              r = t.onTransition,
              a = (0, e.useRef)(null),
              i = (0, e.useRef)(!0),
              o = ks(r);
            return (
              Ys(
                function () {
                  if (a.current) {
                    var e = !1;
                    return (
                      o({
                        in: n,
                        element: a.current,
                        initial: i.current,
                        isStale: function () {
                          return e;
                        },
                      }),
                      function () {
                        e = !0;
                      }
                    );
                  }
                },
                [n, o]
              ),
              Ys(function () {
                return (
                  (i.current = !1),
                  function () {
                    i.current = !0;
                  }
                );
              }, []),
              a
            );
          })({
            in: !!r,
            onTransition: function (e) {
              Promise.resolve(o(e)).then(
                function () {
                  e.isStale() ||
                    (e.in
                      ? null == i || i(e.element, e.initial)
                      : (u(!0), null == a || a(e.element)));
                },
                function (t) {
                  throw (e.in || u(!0), t);
                }
              );
            },
          }),
          d = Es(f, n.ref);
        return s && !r ? null : (0, e.cloneElement)(n, { ref: d });
      }
      function qs(e, t, n) {
        return e
          ? (0, g.jsx)(e, Object.assign({}, n))
          : t
          ? (0, g.jsx)(Xs, Object.assign({}, n, { transition: t }))
          : (0, g.jsx)(Qs, Object.assign({}, n));
      }
      var Zs,
        Gs = [
          "show",
          "role",
          "className",
          "style",
          "children",
          "backdrop",
          "keyboard",
          "onBackdropClick",
          "onEscapeKeyDown",
          "transition",
          "runTransition",
          "backdropTransition",
          "runBackdropTransition",
          "autoFocus",
          "enforceFocus",
          "restoreFocus",
          "restoreFocusOptions",
          "renderDialog",
          "renderBackdrop",
          "manager",
          "container",
          "onShow",
          "onHide",
          "onExit",
          "onExited",
          "onExiting",
          "onEnter",
          "onEntering",
          "onEntered",
        ];
      function Ks(t) {
        var n = Hs(),
          r =
            t ||
            (function (e) {
              return (
                Zs ||
                  (Zs = new Bs({
                    ownerDocument: null == e ? void 0 : e.document,
                  })),
                Zs
              );
            })(n),
          a = (0, e.useRef)({ dialog: null, backdrop: null });
        return Object.assign(a.current, {
          add: function () {
            return r.add(a.current);
          },
          remove: function () {
            return r.remove(a.current);
          },
          isTopModal: function () {
            return r.isTopModal(a.current);
          },
          setDialogRef: (0, e.useCallback)(function (e) {
            a.current.dialog = e;
          }, []),
          setBackdropRef: (0, e.useCallback)(function (e) {
            a.current.backdrop = e;
          }, []),
        });
      }
      var Js = (0, e.forwardRef)(function (t, n) {
        var r = t.show,
          a = void 0 !== r && r,
          i = t.role,
          o = void 0 === i ? "dialog" : i,
          l = t.className,
          s = t.style,
          u = t.children,
          f = t.backdrop,
          d = void 0 === f || f,
          p = t.keyboard,
          h = void 0 === p || p,
          v = t.onBackdropClick,
          m = t.onEscapeKeyDown,
          y = t.transition,
          b = t.runTransition,
          x = t.backdropTransition,
          w = t.runBackdropTransition,
          k = t.autoFocus,
          S = void 0 === k || k,
          E = t.enforceFocus,
          P = void 0 === E || E,
          C = t.restoreFocus,
          j = void 0 === C || C,
          T = t.restoreFocusOptions,
          N = t.renderDialog,
          O = t.renderBackdrop,
          L =
            void 0 === O
              ? function (e) {
                  return (0, g.jsx)("div", Object.assign({}, e));
                }
              : O,
          F = t.manager,
          R = t.container,
          M = t.onShow,
          A = t.onHide,
          D = void 0 === A ? function () {} : A,
          _ = t.onExit,
          z = t.onExited,
          V = t.onExiting,
          I = t.onEnter,
          B = t.onEntering,
          U = t.onEntered,
          H = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(t, Gs),
          W = (function (t, n) {
            var r = Hs(),
              a = c(
                (0, e.useState)(function () {
                  return Ws(t, null == r ? void 0 : r.document);
                }),
                2
              ),
              i = a[0],
              o = a[1];
            if (!i) {
              var l = Ws(t);
              l && o(l);
            }
            return (
              (0, e.useEffect)(
                function () {
                  n && i && n(i);
                },
                [n, i]
              ),
              (0, e.useEffect)(
                function () {
                  var e = Ws(t);
                  e !== i && o(e);
                },
                [t, i]
              ),
              i
            );
          })(R),
          $ = Ks(F),
          Y = (function () {
            var t = (0, e.useRef)(!0),
              n = (0, e.useRef)(function () {
                return t.current;
              });
            return (
              (0, e.useEffect)(function () {
                return (
                  (t.current = !0),
                  function () {
                    t.current = !1;
                  }
                );
              }, []),
              n.current
            );
          })(),
          Q = (function (t) {
            var n = (0, e.useRef)(null);
            return (
              (0, e.useEffect)(function () {
                n.current = t;
              }),
              n.current
            );
          })(a),
          X = c((0, e.useState)(!a), 2),
          q = X[0],
          Z = X[1],
          G = (0, e.useRef)(null);
        (0, e.useImperativeHandle)(
          n,
          function () {
            return $;
          },
          [$]
        ),
          ds && !Q && a && (G.current = As()),
          a && q && Z(!1);
        var K = ks(function () {
            if (
              ($.add(),
              (ae.current = Fs(document, "keydown", ne)),
              (re.current = Fs(
                document,
                "focus",
                function () {
                  return setTimeout(ee);
                },
                !0
              )),
              M && M(),
              S)
            ) {
              var e = As(document);
              $.dialog &&
                e &&
                !Ds($.dialog, e) &&
                ((G.current = e), $.dialog.focus());
            }
          }),
          J = ks(function () {
            var e;
            ($.remove(),
            null == ae.current || ae.current(),
            null == re.current || re.current(),
            j) &&
              (null == (e = G.current) || null == e.focus || e.focus(T),
              (G.current = null));
          });
        (0, e.useEffect)(
          function () {
            a && W && K();
          },
          [a, W, K]
        ),
          (0, e.useEffect)(
            function () {
              q && J();
            },
            [q, J]
          ),
          Ps(function () {
            J();
          });
        var ee = ks(function () {
            if (P && Y() && $.isTopModal()) {
              var e = As();
              $.dialog && e && !Ds($.dialog, e) && $.dialog.focus();
            }
          }),
          te = ks(function (e) {
            e.target === e.currentTarget &&
              (null == v || v(e), !0 === d && D());
          }),
          ne = ks(function (e) {
            h &&
              (function (e) {
                return "Escape" === e.code || 27 === e.keyCode;
              })(e) &&
              $.isTopModal() &&
              (null == m || m(e), e.defaultPrevented || D());
          }),
          re = (0, e.useRef)(),
          ae = (0, e.useRef)();
        if (!W) return null;
        var ie = Object.assign(
            {
              role: o,
              ref: $.setDialogRef,
              "aria-modal": "dialog" === o || void 0,
            },
            H,
            { style: s, className: l, tabIndex: -1 }
          ),
          oe = N
            ? N(ie)
            : (0, g.jsx)(
                "div",
                Object.assign({}, ie, {
                  children: e.cloneElement(u, { role: "document" }),
                })
              );
        oe = qs(y, b, {
          unmountOnExit: !0,
          mountOnEnter: !0,
          appear: !0,
          in: !!a,
          onExit: _,
          onExiting: V,
          onExited: function () {
            Z(!0), null == z || z.apply(void 0, arguments);
          },
          onEnter: I,
          onEntering: B,
          onEntered: U,
          children: oe,
        });
        var le = null;
        return (
          d &&
            ((le = L({ ref: $.setBackdropRef, onClick: te })),
            (le = qs(x, w, {
              in: !!a,
              appear: !0,
              mountOnEnter: !0,
              unmountOnExit: !0,
              children: le,
            }))),
          (0, g.jsx)(g.Fragment, {
            children: _s.createPortal(
              (0, g.jsxs)(g.Fragment, { children: [le, oe] }),
              W
            ),
          })
        );
      });
      Js.displayName = "Modal";
      var eu = Object.assign(Js, { Manager: Bs });
      var tu = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function nu(e, t) {
        return tu(e.querySelectorAll(t));
      }
      function ru(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      var au,
        iu = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        ou = ".sticky-top",
        lu = ".navbar-toggler",
        su = (function (e) {
          ht(n, e);
          var t = gt(n);
          function n() {
            return ct(this, n), t.apply(this, arguments);
          }
          return (
            dt(n, [
              {
                key: "adjustAndStore",
                value: function (e, t, n) {
                  var r = t.style[e];
                  (t.dataset[e] = r),
                    Ls(t, i({}, e, "".concat(parseFloat(Ls(t, e)) + n, "px")));
                },
              },
              {
                key: "restore",
                value: function (e, t) {
                  var n = t.dataset[e];
                  void 0 !== n && (delete t.dataset[e], Ls(t, i({}, e, n)));
                },
              },
              {
                key: "setContainerStyle",
                value: function (e) {
                  var t = this;
                  il(vt(n.prototype), "setContainerStyle", this).call(this, e);
                  var r,
                    a,
                    i = this.getElement();
                  if (
                    ((a = "modal-open"),
                    (r = i).classList
                      ? r.classList.add(a)
                      : (function (e, t) {
                          return e.classList
                            ? !!t && e.classList.contains(t)
                            : -1 !==
                                (
                                  " " +
                                  (e.className.baseVal || e.className) +
                                  " "
                                ).indexOf(" " + t + " ");
                        })(r, a) ||
                        ("string" === typeof r.className
                          ? (r.className = r.className + " " + a)
                          : r.setAttribute(
                              "class",
                              ((r.className && r.className.baseVal) || "") +
                                " " +
                                a
                            )),
                    e.scrollBarWidth)
                  ) {
                    var o = this.isRTL ? "paddingLeft" : "paddingRight",
                      l = this.isRTL ? "marginLeft" : "marginRight";
                    nu(i, iu).forEach(function (n) {
                      return t.adjustAndStore(o, n, e.scrollBarWidth);
                    }),
                      nu(i, ou).forEach(function (n) {
                        return t.adjustAndStore(l, n, -e.scrollBarWidth);
                      }),
                      nu(i, lu).forEach(function (n) {
                        return t.adjustAndStore(l, n, e.scrollBarWidth);
                      });
                  }
                },
              },
              {
                key: "removeContainerStyle",
                value: function (e) {
                  var t = this;
                  il(vt(n.prototype), "removeContainerStyle", this).call(
                    this,
                    e
                  );
                  var r,
                    a,
                    i = this.getElement();
                  (a = "modal-open"),
                    (r = i).classList
                      ? r.classList.remove(a)
                      : "string" === typeof r.className
                      ? (r.className = ru(r.className, a))
                      : r.setAttribute(
                          "class",
                          ru((r.className && r.className.baseVal) || "", a)
                        );
                  var o = this.isRTL ? "paddingLeft" : "paddingRight",
                    l = this.isRTL ? "marginLeft" : "marginRight";
                  nu(i, iu).forEach(function (e) {
                    return t.restore(o, e);
                  }),
                    nu(i, ou).forEach(function (e) {
                      return t.restore(l, e);
                    }),
                    nu(i, lu).forEach(function (e) {
                      return t.restore(l, e);
                    });
                },
              },
            ]),
            n
          );
        })(Bs);
      var uu = !1,
        cu = e.createContext(null),
        fu = "unmounted",
        du = "exited",
        pu = "entering",
        hu = "entered",
        vu = "exiting",
        mu = (function (t) {
          var n, r;
          function a(e, n) {
            var r;
            r = t.call(this, e, n) || this;
            var a,
              i = n && !n.isMounting ? e.enter : e.appear;
            return (
              (r.appearStatus = null),
              e.in
                ? i
                  ? ((a = du), (r.appearStatus = pu))
                  : (a = hu)
                : (a = e.unmountOnExit || e.mountOnEnter ? fu : du),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            );
          }
          (r = t),
            ((n = a).prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            pt(n, r),
            (a.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === fu ? { status: du } : null;
            });
          var i = a.prototype;
          return (
            (i.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (i.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== pu && n !== hu && (t = pu)
                  : (n !== pu && n !== hu) || (t = vu);
              }
              this.updateStatus(!1, t);
            }),
            (i.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (i.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" !== typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (i.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === pu)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : _s.findDOMNode(this);
                    n &&
                      (function (e) {
                        e.scrollTop;
                      })(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === du &&
                  this.setState({ status: fu });
            }),
            (i.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [r] : [_s.findDOMNode(this), r],
                i = a[0],
                o = a[1],
                l = this.getTimeouts(),
                s = r ? l.appear : l.enter;
              (!e && !n) || uu
                ? this.safeSetState({ status: hu }, function () {
                    t.props.onEntered(i);
                  })
                : (this.props.onEnter(i, o),
                  this.safeSetState({ status: pu }, function () {
                    t.props.onEntering(i, o),
                      t.onTransitionEnd(s, function () {
                        t.safeSetState({ status: hu }, function () {
                          t.props.onEntered(i, o);
                        });
                      });
                  }));
            }),
            (i.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : _s.findDOMNode(this);
              t && !uu
                ? (this.props.onExit(r),
                  this.safeSetState({ status: vu }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: du }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: du }, function () {
                    e.props.onExited(r);
                  });
            }),
            (i.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (i.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (i.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (i.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : _s.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    i = a[0],
                    o = a[1];
                  this.props.addEndListener(i, o);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (i.render = function () {
              var t = this.state.status;
              if (t === fu) return null;
              var n = this.props,
                r = n.children,
                a =
                  (n.in,
                  n.mountOnEnter,
                  n.unmountOnExit,
                  n.appear,
                  n.enter,
                  n.exit,
                  n.timeout,
                  n.addEndListener,
                  n.onEnter,
                  n.onEntering,
                  n.onEntered,
                  n.onExit,
                  n.onExiting,
                  n.onExited,
                  n.nodeRef,
                  f(n, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return e.createElement(
                cu.Provider,
                { value: null },
                "function" === typeof r
                  ? r(t, a)
                  : e.cloneElement(e.Children.only(r), a)
              );
            }),
            a
          );
        })(e.Component);
      function gu() {}
      (mu.contextType = cu),
        (mu.propTypes = {}),
        (mu.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: gu,
          onEntering: gu,
          onEntered: gu,
          onExit: gu,
          onExiting: gu,
          onExited: gu,
        }),
        (mu.UNMOUNTED = fu),
        (mu.EXITED = du),
        (mu.ENTERING = pu),
        (mu.ENTERED = hu),
        (mu.EXITING = vu);
      var yu = mu;
      function bu(e, t) {
        var n = Ls(e, t) || "",
          r = -1 === n.indexOf("ms") ? 1e3 : 1;
        return parseFloat(n) * r;
      }
      function xu(e, t) {
        var n = bu(e, "transitionDuration"),
          r = bu(e, "transitionDelay"),
          a = Ms(
            e,
            function (n) {
              n.target === e && (a(), t(n));
            },
            n + r
          );
      }
      var wu,
        ku = [
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "addEndListener",
          "children",
          "childRef",
        ],
        Su = e.forwardRef(function (t, n) {
          var r = t.onEnter,
            a = t.onEntering,
            i = t.onEntered,
            o = t.onExit,
            s = t.onExiting,
            u = t.onExited,
            c = t.addEndListener,
            f = t.children,
            p = t.childRef,
            h = d(t, ku),
            v = (0, e.useRef)(null),
            m = Es(v, p),
            y = function (e) {
              var t;
              m(
                (t = e) && "setState" in t
                  ? _s.findDOMNode(t)
                  : null != t
                  ? t
                  : null
              );
            },
            b = function (e) {
              return function (t) {
                e && v.current && e(v.current, t);
              };
            },
            x = (0, e.useCallback)(b(r), [r]),
            w = (0, e.useCallback)(b(a), [a]),
            k = (0, e.useCallback)(b(i), [i]),
            S = (0, e.useCallback)(b(o), [o]),
            E = (0, e.useCallback)(b(s), [s]),
            P = (0, e.useCallback)(b(u), [u]),
            C = (0, e.useCallback)(b(c), [c]);
          return (0, g.jsx)(
            yu,
            l(
              l({ ref: n }, h),
              {},
              {
                onEnter: x,
                onEntered: k,
                onEntering: w,
                onExit: S,
                onExited: P,
                onExiting: E,
                addEndListener: C,
                nodeRef: v,
                children:
                  "function" === typeof f
                    ? function (e, t) {
                        return f(e, l(l({}, t), {}, { ref: y }));
                      }
                    : e.cloneElement(f, { ref: y }),
              }
            )
          );
        }),
        Eu = ["className", "children", "transitionClasses", "onEnter"],
        Pu = (i((wu = {}), pu, "show"), i(wu, hu, "show"), wu),
        Cu = e.forwardRef(function (t, n) {
          var r = t.className,
            a = t.children,
            i = t.transitionClasses,
            o = void 0 === i ? {} : i,
            s = t.onEnter,
            u = l(
              {
                in: !1,
                timeout: 300,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
              },
              d(t, Eu)
            ),
            c = (0, e.useCallback)(
              function (e, t) {
                !(function (e) {
                  e.offsetHeight;
                })(e),
                  null == s || s(e, t);
              },
              [s]
            );
          return (0, g.jsx)(
            Su,
            l(
              l({ ref: n, addEndListener: xu }, u),
              {},
              {
                onEnter: c,
                childRef: a.ref,
                children: function (t, n) {
                  return e.cloneElement(
                    a,
                    l(
                      l({}, n),
                      {},
                      {
                        className: h()(
                          "fade",
                          r,
                          a.props.className,
                          Pu[t],
                          o[t]
                        ),
                      }
                    )
                  );
                },
              }
            )
          );
        });
      Cu.displayName = "Fade";
      var ju = Cu,
        Tu = /-(.)/g;
      var Nu = ["className", "bsPrefix", "as"],
        Ou = function (e) {
          return (
            e[0].toUpperCase() +
            ((t = e),
            t.replace(Tu, function (e, t) {
              return t.toUpperCase();
            })).slice(1)
          );
          var t;
        };
      function Lu(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = n.displayName,
          a = void 0 === r ? Ou(t) : r,
          i = n.Component,
          o = n.defaultProps,
          s = e.forwardRef(function (e, n) {
            var r = e.className,
              a = e.bsPrefix,
              s = e.as,
              u = void 0 === s ? i || "div" : s,
              c = d(e, Nu),
              f = l(l({}, o), c),
              p = x(a, t);
            return (0, g.jsx)(u, l({ ref: n, className: h()(r, p) }, f));
          });
        return (s.displayName = a), s;
      }
      var Fu = Lu("modal-body"),
        Ru = e.createContext({ onHide: function () {} }),
        Mu = [
          "bsPrefix",
          "className",
          "contentClassName",
          "centered",
          "size",
          "fullscreen",
          "children",
          "scrollable",
        ],
        Au = e.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.contentClassName,
            i = e.centered,
            o = e.size,
            s = e.fullscreen,
            u = e.children,
            c = e.scrollable,
            f = d(e, Mu);
          n = x(n, "modal");
          var p = "".concat(n, "-dialog"),
            v =
              "string" === typeof s
                ? "".concat(n, "-fullscreen-").concat(s)
                : "".concat(n, "-fullscreen");
          return (0,
          g.jsx)("div", l(l({}, f), {}, { ref: t, className: h()(p, r, o && "".concat(n, "-").concat(o), i && "".concat(p, "-centered"), c && "".concat(p, "-scrollable"), s && v), children: (0, g.jsx)("div", { className: h()("".concat(n, "-content"), a), children: u }) }));
        });
      Au.displayName = "ModalDialog";
      var Du = Au,
        _u = Lu("modal-footer"),
        zu = ["className", "variant", "aria-label"],
        Vu = {
          "aria-label": m().string,
          onClick: m().func,
          variant: m().oneOf(["white"]),
        },
        Iu = e.forwardRef(function (e, t) {
          var n = e.className,
            r = e.variant,
            a = e["aria-label"],
            i = void 0 === a ? "Close" : a,
            o = d(e, zu);
          return (0,
          g.jsx)("button", l({ ref: t, type: "button", className: h()("btn-close", r && "btn-close-".concat(r), n), "aria-label": i }, o));
        });
      (Iu.displayName = "CloseButton"), (Iu.propTypes = Vu);
      var Bu = Iu,
        Uu = [
          "closeLabel",
          "closeVariant",
          "closeButton",
          "onHide",
          "children",
        ],
        Hu = e.forwardRef(function (t, n) {
          var r = t.closeLabel,
            a = void 0 === r ? "Close" : r,
            i = t.closeVariant,
            o = t.closeButton,
            s = void 0 !== o && o,
            u = t.onHide,
            c = t.children,
            f = d(t, Uu),
            p = (0, e.useContext)(Ru),
            h = ks(function () {
              null == p || p.onHide(), null == u || u();
            });
          return (0,
          g.jsxs)("div", l(l({ ref: n }, f), {}, { children: [c, s && (0, g.jsx)(Bu, { "aria-label": a, variant: i, onClick: h })] }));
        }),
        Wu = ["bsPrefix", "className", "closeLabel", "closeButton"],
        $u = e.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.closeLabel,
            i = void 0 === a ? "Close" : a,
            o = e.closeButton,
            s = void 0 !== o && o,
            u = d(e, Wu);
          return (
            (n = x(n, "modal-header")),
            (0, g.jsx)(
              Hu,
              l(
                l({ ref: t }, u),
                {},
                { className: h()(r, n), closeLabel: i, closeButton: s }
              )
            )
          );
        });
      $u.displayName = "ModalHeader";
      var Yu,
        Qu = $u,
        Xu = Lu("modal-title", {
          Component:
            ((Yu = "h4"),
            e.forwardRef(function (e, t) {
              return (0,
              g.jsx)("div", l(l({}, e), {}, { ref: t, className: h()(e.className, Yu) }));
            })),
        }),
        qu = [
          "bsPrefix",
          "className",
          "style",
          "dialogClassName",
          "contentClassName",
          "children",
          "dialogAs",
          "aria-labelledby",
          "aria-describedby",
          "aria-label",
          "show",
          "animation",
          "backdrop",
          "keyboard",
          "onEscapeKeyDown",
          "onShow",
          "onHide",
          "container",
          "autoFocus",
          "enforceFocus",
          "restoreFocus",
          "restoreFocusOptions",
          "onEntered",
          "onExit",
          "onExiting",
          "onEnter",
          "onEntering",
          "onExited",
          "backdropClassName",
          "manager",
        ];
      function Zu(e) {
        return (0, g.jsx)(ju, l(l({}, e), {}, { timeout: null }));
      }
      function Gu(e) {
        return (0, g.jsx)(ju, l(l({}, e), {}, { timeout: null }));
      }
      var Ku = e.forwardRef(function (t, n) {
        var r = t.bsPrefix,
          a = t.className,
          i = t.style,
          o = t.dialogClassName,
          s = t.contentClassName,
          u = t.children,
          f = t.dialogAs,
          p = void 0 === f ? Du : f,
          v = t["aria-labelledby"],
          m = t["aria-describedby"],
          y = t["aria-label"],
          w = t.show,
          k = void 0 !== w && w,
          S = t.animation,
          E = void 0 === S || S,
          P = t.backdrop,
          C = void 0 === P || P,
          j = t.keyboard,
          T = void 0 === j || j,
          N = t.onEscapeKeyDown,
          O = t.onShow,
          L = t.onHide,
          F = t.container,
          R = t.autoFocus,
          M = void 0 === R || R,
          A = t.enforceFocus,
          D = void 0 === A || A,
          _ = t.restoreFocus,
          z = void 0 === _ || _,
          V = t.restoreFocusOptions,
          I = t.onEntered,
          B = t.onExit,
          U = t.onExiting,
          H = t.onEnter,
          W = t.onEntering,
          $ = t.onExited,
          Y = t.backdropClassName,
          Q = t.manager,
          X = d(t, qu),
          q = c((0, e.useState)({}), 2),
          Z = q[0],
          G = q[1],
          K = c((0, e.useState)(!1), 2),
          J = K[0],
          ee = K[1],
          te = (0, e.useRef)(!1),
          ne = (0, e.useRef)(!1),
          re = (0, e.useRef)(null),
          ae = c((0, e.useState)(null), 2),
          ie = ae[0],
          oe = ae[1],
          le = Es(n, oe),
          se = ks(L),
          ue = "rtl" === (0, e.useContext)(b).dir;
        r = x(r, "modal");
        var ce = (0, e.useMemo)(
          function () {
            return { onHide: se };
          },
          [se]
        );
        function fe() {
          return (
            Q ||
            (function (e) {
              return au || (au = new su(e)), au;
            })({ isRTL: ue })
          );
        }
        function de(e) {
          if (ds) {
            var t = fe().getScrollbarWidth() > 0,
              n = e.scrollHeight > gs(e).documentElement.clientHeight;
            G({
              paddingRight: t && !n ? xs() : void 0,
              paddingLeft: !t && n ? xs() : void 0,
            });
          }
        }
        var pe = ks(function () {
          ie && de(ie.dialog);
        });
        Ps(function () {
          bs(window, "resize", pe), null == re.current || re.current();
        });
        var he = function () {
            te.current = !0;
          },
          ve = function (e) {
            te.current && ie && e.target === ie.dialog && (ne.current = !0),
              (te.current = !1);
          },
          me = function () {
            ee(!0),
              (re.current = Ms(ie.dialog, function () {
                ee(!1);
              }));
          },
          ge = function (e) {
            "static" !== C
              ? ne.current || e.target !== e.currentTarget
                ? (ne.current = !1)
                : null == L || L()
              : (function (e) {
                  e.target === e.currentTarget && me();
                })(e);
          },
          ye = (0, e.useCallback)(
            function (e) {
              return (0, g.jsx)(
                "div",
                l(
                  l({}, e),
                  {},
                  { className: h()("".concat(r, "-backdrop"), Y, !E && "show") }
                )
              );
            },
            [E, Y, r]
          ),
          be = l(l({}, i), Z);
        be.display = "block";
        return (0, g.jsx)(Ru.Provider, {
          value: ce,
          children: (0, g.jsx)(eu, {
            show: k,
            ref: le,
            backdrop: C,
            container: F,
            keyboard: !0,
            autoFocus: M,
            enforceFocus: D,
            restoreFocus: z,
            restoreFocusOptions: V,
            onEscapeKeyDown: function (e) {
              T
                ? null == N || N(e)
                : (e.preventDefault(), "static" === C && me());
            },
            onShow: O,
            onHide: L,
            onEnter: function (e, t) {
              e && de(e), null == H || H(e, t);
            },
            onEntering: function (e, t) {
              null == W || W(e, t), ms(window, "resize", pe);
            },
            onEntered: I,
            onExit: function (e) {
              null == re.current || re.current(), null == B || B(e);
            },
            onExiting: U,
            onExited: function (e) {
              e && (e.style.display = ""),
                null == $ || $(e),
                bs(window, "resize", pe);
            },
            manager: fe(),
            transition: E ? Zu : void 0,
            backdropTransition: E ? Gu : void 0,
            renderBackdrop: ye,
            renderDialog: function (e) {
              return (0, g.jsx)(
                "div",
                l(
                  l({ role: "dialog" }, e),
                  {},
                  {
                    style: be,
                    className: h()(
                      a,
                      r,
                      J && "".concat(r, "-static"),
                      !E && "show"
                    ),
                    onClick: C ? ge : void 0,
                    onMouseUp: ve,
                    "aria-label": y,
                    "aria-labelledby": v,
                    "aria-describedby": m,
                    children: (0, g.jsx)(
                      p,
                      l(
                        l({}, X),
                        {},
                        {
                          onMouseDown: he,
                          className: o,
                          contentClassName: s,
                          children: u,
                        }
                      )
                    ),
                  }
                )
              );
            },
          }),
        });
      });
      Ku.displayName = "Modal";
      var Ju = Object.assign(Ku, {
          Body: Fu,
          Header: Qu,
          Title: Xu,
          Footer: _u,
          Dialog: Du,
          TRANSITION_DURATION: 300,
          BACKDROP_TRANSITION_DURATION: 150,
        }),
        ec =
          n.p +
          "static/media/qrcode-url-www.madisonolguin.com.dc40689dc5ce4e485bc7.png",
        tc = function () {
          var t = c((0, e.useState)(!1), 2),
            n = t[0],
            r = t[1];
          return (0, g.jsxs)("section", {
            className: "scroll-container",
            children: [
              (0, g.jsxs)("div", {
                className: "page-container",
                children: [
                  (0, g.jsx)(ml, {
                    className: "mb-5",
                    children: (0, g.jsx)(xl, {
                      className: "d-flex justify-content-center",
                      children: (0, g.jsx)("h1", { children: "Share" }),
                    }),
                  }),
                  (0, g.jsx)(ml, {
                    children: (0, g.jsx)(xl, {
                      xs: { span: 8, offset: 2 },
                      md: { span: 4, offset: 4 },
                      xl: { span: 2, offset: 5 },
                      className: "d-flex justify-content-center",
                      children: (0, g.jsx)(P, {
                        className: "click-pointer",
                        src: ec,
                        thumbnail: !0,
                        onClick: function () {
                          return r(!n);
                        },
                      }),
                    }),
                  }),
                ],
              }),
              (0, g.jsx)(Ju, {
                className: "qrcode-modal",
                centered: !0,
                fullscreen: !0,
                show: n,
                contentClassName: "bg-transparent",
                children: (0, g.jsx)(Ju.Body, {
                  className:
                    "p-0 text-center bg-dark bg-opacity-10 d-flex align-items-center justify-content-center",
                  onClick: function () {
                    return r(!n);
                  },
                  children: (0, g.jsx)(P, {
                    className: "max-vh-100 rounded-5",
                    src: ec,
                    fluid: !0,
                  }),
                }),
              }),
            ],
          });
        };
      function nc() {
        nc = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          o = i.iterator || "@@iterator",
          l = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var i = t && t.prototype instanceof p ? t : p,
            o = Object.create(i.prototype),
            l = new C(r || []);
          return a(o, "_invoke", { value: k(e, n, l) }), o;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = c;
        var d = {};
        function p() {}
        function h() {}
        function v() {}
        var m = {};
        u(m, o, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          y = g && g(g(j([])));
        y && y !== t && n.call(y, o) && (m = y);
        var b = (v.prototype = p.prototype = Object.create(m));
        function x(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          function i(a, o, l, s) {
            var u = f(e[a], e, o);
            if ("throw" !== u.type) {
              var c = u.arg,
                d = c.value;
              return d && "object" == r(d) && n.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      i("next", e, l, s);
                    },
                    function (e) {
                      i("throw", e, l, s);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (c.value = e), l(c);
                    },
                    function (e) {
                      return i("throw", e, l, s);
                    }
                  );
            }
            s(u.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  i(e, n, t, r);
                });
              }
              return (o = o ? o.then(r, r) : r());
            },
          });
        }
        function k(e, t, n) {
          var r = "suspendedStart";
          return function (a, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw i;
              return T();
            }
            for (n.method = a, n.arg = i; ; ) {
              var o = n.delegate;
              if (o) {
                var l = S(o, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var s = f(e, t, n);
              if ("normal" === s.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), s.arg === d)
                )
                  continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function S(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                S(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function P(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function C(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function j(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: T };
        }
        function T() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = v),
          a(b, "constructor", { value: v, configurable: !0 }),
          a(v, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(v, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), u(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          x(w.prototype),
          u(w.prototype, l, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, a, i) {
            void 0 === i && (i = Promise);
            var o = new w(c(t, n, r, a), i);
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          x(b),
          u(b, s, "Generator"),
          u(b, o, function () {
            return this;
          }),
          u(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = j),
          (C.prototype = {
            constructor: C,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  o = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, "catchLoc"),
                    s = n.call(i, "finallyLoc");
                  if (l && s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var o = i ? i.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), P(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    P(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: j(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function rc(e, t, n, r, a, i, o) {
        try {
          var l = e[i](o),
            s = l.value;
        } catch (u) {
          return void n(u);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, a);
      }
      var ac = ["as", "disabled"];
      function ic(e) {
        var t = e.tagName,
          n = e.disabled,
          r = e.href,
          a = e.target,
          i = e.rel,
          o = e.role,
          l = e.onClick,
          s = e.tabIndex,
          u = void 0 === s ? 0 : s,
          c = e.type;
        t || (t = null != r || null != a || null != i ? "a" : "button");
        var f = { tagName: t };
        if ("button" === t) return [{ type: c || "button", disabled: n }, f];
        var d = function (e) {
          (n ||
            ("a" === t &&
              (function (e) {
                return !e || "#" === e.trim();
              })(r))) &&
            e.preventDefault(),
            n ? e.stopPropagation() : null == l || l(e);
        };
        return (
          "a" === t && (r || (r = "#"), n && (r = void 0)),
          [
            {
              role: null != o ? o : "button",
              disabled: void 0,
              tabIndex: n ? void 0 : u,
              href: r,
              target: "a" === t ? a : void 0,
              "aria-disabled": n || void 0,
              rel: "a" === t ? i : void 0,
              onClick: d,
              onKeyDown: function (e) {
                " " === e.key && (e.preventDefault(), d(e));
              },
            },
            f,
          ]
        );
      }
      var oc = e.forwardRef(function (e, t) {
        var n = e.as,
          r = e.disabled,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, ac),
          i = c(ic(Object.assign({ tagName: n, disabled: r }, a)), 2),
          o = i[0],
          l = i[1].tagName;
        return (0, g.jsx)(l, Object.assign({}, a, o, { ref: t }));
      });
      oc.displayName = "Button";
      var lc = [
          "as",
          "bsPrefix",
          "variant",
          "size",
          "active",
          "disabled",
          "className",
        ],
        sc = e.forwardRef(function (e, t) {
          var n = e.as,
            r = e.bsPrefix,
            a = e.variant,
            i = void 0 === a ? "primary" : a,
            o = e.size,
            s = e.active,
            u = void 0 !== s && s,
            f = e.disabled,
            p = void 0 !== f && f,
            v = e.className,
            m = d(e, lc),
            y = x(r, "btn"),
            b = c(ic(l({ tagName: n, disabled: p }, m)), 2),
            w = b[0],
            k = b[1].tagName;
          return (0,
          g.jsx)(k, l(l(l({}, w), m), {}, { ref: t, disabled: p, className: h()(v, y, u && "active", i && "".concat(y, "-").concat(i), o && "".concat(y, "-").concat(o), m.href && p && "disabled") }));
        });
      sc.displayName = "Button";
      var uc = sc,
        cc = ["color", "size", "title"];
      function fc() {
        return (
          (fc =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          fc.apply(this, arguments)
        );
      }
      function dc(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var pc = (0, e.forwardRef)(function (t, n) {
        var r = t.color,
          a = t.size,
          i = t.title,
          o = dc(t, cc);
        return e.createElement(
          "svg",
          fc(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              width: a,
              height: a,
              fill: r,
            },
            o
          ),
          i ? e.createElement("title", null, i) : null,
          e.createElement("path", {
            d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z",
          }),
          e.createElement("path", {
            d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z",
          })
        );
      });
      (pc.propTypes = {
        color: m().string,
        size: m().oneOfType([m().string, m().number]),
        title: m().string,
      }),
        (pc.defaultProps = { color: "currentColor", size: "1em", title: null });
      var hc = pc,
        vc = function (e) {
          var t = e.safariiOSUser,
            n = e.promptEvent,
            r = (function () {
              var e,
                r =
                  ((e = nc().mark(function e(r) {
                    var a, i;
                    return nc().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (console.log("handleInstallClick"),
                              r.preventDefault(),
                              !t)
                            ) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              console.log("safari user install click")
                            );
                          case 4:
                            return n.prompt(), (e.next = 7), n.userChoice;
                          case 7:
                            (a = e.sent),
                              (i = a.outcome),
                              console.log(i),
                              (n = null);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, a) {
                      var i = e.apply(t, n);
                      function o(e) {
                        rc(i, r, a, o, l, "next", e);
                      }
                      function l(e) {
                        rc(i, r, a, o, l, "throw", e);
                      }
                      o(void 0);
                    });
                  });
              return function (e) {
                return r.apply(this, arguments);
              };
            })();
          return (0, g.jsx)("section", {
            className: "scroll-container",
            children: (0, g.jsxs)("div", {
              className: "page-container",
              children: [
                (0, g.jsx)(ml, {
                  className: "mb-5",
                  children: (0, g.jsx)(xl, {
                    className: "d-flex justify-content-center",
                    children: (0, g.jsx)("h1", { children: "Save" }),
                  }),
                }),
                (0, g.jsx)(ml, {
                  className: "mb-1",
                  children: (0, g.jsx)(xl, {
                    className: "d-flex justify-content-center",
                    children: (0, g.jsx)("div", {
                      children: (0, g.jsx)("p", {
                        className: "handwritten-text fs-2",
                        children: "Save my app to your device.",
                      }),
                    }),
                  }),
                }),
                t
                  ? (0, g.jsx)(ml, {
                      className: "mb-3",
                      children: (0, g.jsx)(xl, {
                        className: "d-flex justify-content-center",
                        children: (0, g.jsxs)(uc, {
                          id: "installButton",
                          name: "installButton",
                          variant: "secondary",
                          onClick: r,
                          children: ["Install ", " ", (0, g.jsx)(hc, {})],
                        }),
                      }),
                    })
                  : null,
                t
                  ? null
                  : (0, g.jsx)(ml, {
                      className:
                        "mb-3 position-absolute bg-white bottom-0 start-50 translate-middle-x",
                      children: (0, g.jsx)(xl, {
                        className: "d-flex justify-content-center",
                        children: (0, g.jsxs)(uc, {
                          id: "installButton",
                          name: "installButton",
                          variant: "secondary",
                          onClick: r,
                          children: ["Install ", " ", (0, g.jsx)(hc, {})],
                        }),
                      }),
                    }),
              ],
            }),
          });
        },
        mc = ["as", "className", "type", "tooltip"],
        gc = { type: m().string, tooltip: m().bool, as: m().elementType },
        yc = e.forwardRef(function (e, t) {
          var n = e.as,
            r = void 0 === n ? "div" : n,
            a = e.className,
            i = e.type,
            o = void 0 === i ? "valid" : i,
            s = e.tooltip,
            u = void 0 !== s && s,
            c = d(e, mc);
          return (0,
          g.jsx)(r, l(l({}, c), {}, { ref: t, className: h()(a, "".concat(o, "-").concat(u ? "tooltip" : "feedback")) }));
        });
      (yc.displayName = "Feedback"), (yc.propTypes = gc);
      var bc = yc,
        xc = e.createContext({}),
        wc = [
          "id",
          "bsPrefix",
          "className",
          "type",
          "isValid",
          "isInvalid",
          "as",
        ],
        kc = e.forwardRef(function (t, n) {
          var r = t.id,
            a = t.bsPrefix,
            i = t.className,
            o = t.type,
            s = void 0 === o ? "checkbox" : o,
            u = t.isValid,
            c = void 0 !== u && u,
            f = t.isInvalid,
            p = void 0 !== f && f,
            v = t.as,
            m = void 0 === v ? "input" : v,
            y = d(t, wc),
            b = (0, e.useContext)(xc).controlId;
          return (
            (a = x(a, "form-check-input")),
            (0, g.jsx)(
              m,
              l(
                l({}, y),
                {},
                {
                  ref: n,
                  type: s,
                  id: r || b,
                  className: h()(i, a, c && "is-valid", p && "is-invalid"),
                }
              )
            )
          );
        });
      kc.displayName = "FormCheckInput";
      var Sc = kc,
        Ec = ["bsPrefix", "className", "htmlFor"],
        Pc = e.forwardRef(function (t, n) {
          var r = t.bsPrefix,
            a = t.className,
            i = t.htmlFor,
            o = d(t, Ec),
            s = (0, e.useContext)(xc).controlId;
          return (
            (r = x(r, "form-check-label")),
            (0, g.jsx)(
              "label",
              l(l({}, o), {}, { ref: n, htmlFor: i || s, className: h()(a, r) })
            )
          );
        });
      Pc.displayName = "FormCheckLabel";
      var Cc = Pc;
      var jc = [
          "id",
          "bsPrefix",
          "bsSwitchPrefix",
          "inline",
          "reverse",
          "disabled",
          "isValid",
          "isInvalid",
          "feedbackTooltip",
          "feedback",
          "feedbackType",
          "className",
          "style",
          "title",
          "type",
          "label",
          "children",
          "as",
        ],
        Tc = e.forwardRef(function (t, n) {
          var r = t.id,
            a = t.bsPrefix,
            i = t.bsSwitchPrefix,
            o = t.inline,
            s = void 0 !== o && o,
            u = t.reverse,
            c = void 0 !== u && u,
            f = t.disabled,
            p = void 0 !== f && f,
            v = t.isValid,
            m = void 0 !== v && v,
            y = t.isInvalid,
            b = void 0 !== y && y,
            w = t.feedbackTooltip,
            k = void 0 !== w && w,
            S = t.feedback,
            E = t.feedbackType,
            P = t.className,
            C = t.style,
            j = t.title,
            T = void 0 === j ? "" : j,
            N = t.type,
            O = void 0 === N ? "checkbox" : N,
            L = t.label,
            F = t.children,
            R = t.as,
            M = void 0 === R ? "input" : R,
            A = d(t, jc);
          (a = x(a, "form-check")), (i = x(i, "form-switch"));
          var D = (0, e.useContext)(xc).controlId,
            _ = (0, e.useMemo)(
              function () {
                return { controlId: r || D };
              },
              [D, r]
            ),
            z =
              (!F && null != L && !1 !== L) ||
              (function (t, n) {
                return e.Children.toArray(t).some(function (t) {
                  return e.isValidElement(t) && t.type === n;
                });
              })(F, Cc),
            V = (0, g.jsx)(
              Sc,
              l(
                l({}, A),
                {},
                {
                  type: "switch" === O ? "checkbox" : O,
                  ref: n,
                  isValid: m,
                  isInvalid: b,
                  disabled: p,
                  as: M,
                }
              )
            );
          return (0,
          g.jsx)(xc.Provider, { value: _, children: (0, g.jsx)("div", { style: C, className: h()(P, z && a, s && "".concat(a, "-inline"), c && "".concat(a, "-reverse"), "switch" === O && i), children: F || (0, g.jsxs)(g.Fragment, { children: [V, z && (0, g.jsx)(Cc, { title: T, children: L }), S && (0, g.jsx)(bc, { type: E, tooltip: k, children: S })] }) }) });
        });
      Tc.displayName = "FormCheck";
      var Nc = Object.assign(Tc, { Input: Sc, Label: Cc }),
        Oc =
          (n(391),
          [
            "bsPrefix",
            "type",
            "size",
            "htmlSize",
            "id",
            "className",
            "isValid",
            "isInvalid",
            "plaintext",
            "readOnly",
            "as",
          ]),
        Lc = e.forwardRef(function (t, n) {
          var r,
            a,
            o = t.bsPrefix,
            s = t.type,
            u = t.size,
            c = t.htmlSize,
            f = t.id,
            p = t.className,
            v = t.isValid,
            m = void 0 !== v && v,
            y = t.isInvalid,
            b = void 0 !== y && y,
            w = t.plaintext,
            k = t.readOnly,
            S = t.as,
            E = void 0 === S ? "input" : S,
            P = d(t, Oc),
            C = (0, e.useContext)(xc).controlId;
          ((o = x(o, "form-control")), w)
            ? (r = i({}, "".concat(o, "-plaintext"), !0))
            : (i((a = {}), o, !0),
              i(a, "".concat(o, "-").concat(u), u),
              (r = a));
          return (0,
          g.jsx)(E, l(l({}, P), {}, { type: s, size: c, ref: n, readOnly: k, id: f || C, className: h()(p, r, m && "is-valid", b && "is-invalid", "color" === s && "".concat(o, "-color")) }));
        });
      Lc.displayName = "FormControl";
      var Fc = Object.assign(Lc, { Feedback: bc }),
        Rc = Lu("form-floating"),
        Mc = ["controlId", "as"],
        Ac = e.forwardRef(function (t, n) {
          var r = t.controlId,
            a = t.as,
            i = void 0 === a ? "div" : a,
            o = d(t, Mc),
            s = (0, e.useMemo)(
              function () {
                return { controlId: r };
              },
              [r]
            );
          return (0,
          g.jsx)(xc.Provider, { value: s, children: (0, g.jsx)(i, l(l({}, o), {}, { ref: n })) });
        });
      Ac.displayName = "FormGroup";
      var Dc = Ac,
        _c = [
          "as",
          "bsPrefix",
          "column",
          "visuallyHidden",
          "className",
          "htmlFor",
        ],
        zc = e.forwardRef(function (t, n) {
          var r = t.as,
            a = void 0 === r ? "label" : r,
            i = t.bsPrefix,
            o = t.column,
            s = void 0 !== o && o,
            u = t.visuallyHidden,
            c = void 0 !== u && u,
            f = t.className,
            p = t.htmlFor,
            v = d(t, _c),
            m = (0, e.useContext)(xc).controlId;
          i = x(i, "form-label");
          var y = "col-form-label";
          "string" === typeof s &&
            (y = "".concat(y, " ").concat(y, "-").concat(s));
          var b = h()(f, i, c && "visually-hidden", s && y);
          return (
            (p = p || m),
            s
              ? (0, g.jsx)(
                  xl,
                  l({ ref: n, as: "label", className: b, htmlFor: p }, v)
                )
              : (0, g.jsx)(a, l({ ref: n, className: b, htmlFor: p }, v))
          );
        });
      zc.displayName = "FormLabel";
      var Vc = zc,
        Ic = ["bsPrefix", "className", "id"],
        Bc = e.forwardRef(function (t, n) {
          var r = t.bsPrefix,
            a = t.className,
            i = t.id,
            o = d(t, Ic),
            s = (0, e.useContext)(xc).controlId;
          return (
            (r = x(r, "form-range")),
            (0, g.jsx)(
              "input",
              l(
                l({}, o),
                {},
                { type: "range", ref: n, className: h()(a, r), id: i || s }
              )
            )
          );
        });
      Bc.displayName = "FormRange";
      var Uc = Bc,
        Hc = [
          "bsPrefix",
          "size",
          "htmlSize",
          "className",
          "isValid",
          "isInvalid",
          "id",
        ],
        Wc = e.forwardRef(function (t, n) {
          var r = t.bsPrefix,
            a = t.size,
            i = t.htmlSize,
            o = t.className,
            s = t.isValid,
            u = void 0 !== s && s,
            c = t.isInvalid,
            f = void 0 !== c && c,
            p = t.id,
            v = d(t, Hc),
            m = (0, e.useContext)(xc).controlId;
          return (
            (r = x(r, "form-select")),
            (0, g.jsx)(
              "select",
              l(
                l({}, v),
                {},
                {
                  size: i,
                  ref: n,
                  className: h()(
                    o,
                    r,
                    a && "".concat(r, "-").concat(a),
                    u && "is-valid",
                    f && "is-invalid"
                  ),
                  id: p || m,
                }
              )
            )
          );
        });
      Wc.displayName = "FormSelect";
      var $c = Wc,
        Yc = ["bsPrefix", "className", "as", "muted"],
        Qc = e.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.as,
            i = void 0 === a ? "small" : a,
            o = e.muted,
            s = d(e, Yc);
          return (
            (n = x(n, "form-text")),
            (0, g.jsx)(
              i,
              l(
                l({}, s),
                {},
                { ref: t, className: h()(r, n, o && "text-muted") }
              )
            )
          );
        });
      Qc.displayName = "FormText";
      var Xc = Qc,
        qc = e.forwardRef(function (e, t) {
          return (0, g.jsx)(Nc, l(l({}, e), {}, { ref: t, type: "switch" }));
        });
      qc.displayName = "Switch";
      var Zc = Object.assign(qc, { Input: Nc.Input, Label: Nc.Label }),
        Gc = ["bsPrefix", "className", "children", "controlId", "label"],
        Kc = e.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.children,
            i = e.controlId,
            o = e.label,
            s = d(e, Gc);
          return (
            (n = x(n, "form-floating")),
            (0, g.jsxs)(
              Dc,
              l(
                l({ ref: t, className: h()(r, n), controlId: i }, s),
                {},
                {
                  children: [
                    a,
                    (0, g.jsx)("label", { htmlFor: i, children: o }),
                  ],
                }
              )
            )
          );
        });
      Kc.displayName = "FloatingLabel";
      var Jc = Kc,
        ef = ["className", "validated", "as"],
        tf = { _ref: m().any, validated: m().bool, as: m().elementType },
        nf = e.forwardRef(function (e, t) {
          var n = e.className,
            r = e.validated,
            a = e.as,
            i = void 0 === a ? "form" : a,
            o = d(e, ef);
          return (0,
          g.jsx)(i, l(l({}, o), {}, { ref: t, className: h()(n, r && "was-validated") }));
        });
      (nf.displayName = "Form"), (nf.propTypes = tf);
      var rf = Object.assign(nf, {
          Group: Dc,
          Control: Fc,
          Floating: Rc,
          Check: Nc,
          Switch: Zc,
          Label: Vc,
          Text: Xc,
          Range: Uc,
          Select: $c,
          FloatingLabel: Jc,
        }),
        af = function (t) {
          var n = t.safariiOSUser,
            r = t.pwaPrompt,
            a = t.page,
            o = c((0, e.useState)({}), 2),
            s = o[0],
            u = o[1],
            f = c(
              (0, e.useState)({
                heightNum: 100,
                sectionHeightUnit: "vh",
                boxShadow: !0,
              }),
              2
            ),
            d = f[0],
            p = f[1],
            h = function (e) {
              var t, n, r;
              e.preventDefault(),
                "heightNum" === e.target.name
                  ? ((n = e.target.heightNum.value),
                    (t = d.sectionHeightUnit),
                    (r = d.boxShadow))
                  : "sectionHeightUnit" === e.target.dataset.type
                  ? ((n = d.heightNum),
                    (t = e.target.innerText),
                    (r = d.boxShadow))
                  : "boxShadow" === e.target.dataset.type &&
                    ((n = d.heightNum),
                    (t = d.sectionHeightUnit),
                    (r = !d.boxShadow)),
                document
                  .querySelectorAll(".scroll-container")
                  .forEach(function (e) {
                    (e.style.height = "".concat(n).concat(t)),
                      (e.style.boxShadow = "".concat(
                        r ? "inset 0px 0px 2px 2px white" : "none"
                      ));
                  }),
                p(
                  l(
                    l({}, d),
                    {},
                    { sectionHeightUnit: t, heightNum: n, boxShadow: r }
                  )
                );
            };
          return (0, g.jsxs)("section", {
            className: "scroll-container",
            children: [
              (0, g.jsxs)("div", {
                className: "position-absolute top-0 start-0",
                style: { zIndex: "2000", width: "100%" },
                children: [
                  (0, g.jsxs)("div", {
                    children: [
                      (0, g.jsx)(uc, {
                        name: "showPWAData",
                        size: "sm",
                        variant: "secondary m-2",
                        onClick: function (e) {
                          return u(
                            l(
                              l({}, s),
                              {},
                              i({}, e.target.name, !s[e.target.name])
                            )
                          );
                        },
                        children: "Show PWA Data",
                      }),
                      (0, g.jsx)(uc, {
                        name: "showHeights",
                        size: "sm",
                        variant: "secondary m-2",
                        onClick: function (e) {
                          return u(
                            l(
                              l({}, s),
                              {},
                              i({}, e.target.name, !s[e.target.name])
                            )
                          );
                        },
                        children: "Show Heights",
                      }),
                      (0, g.jsx)(uc, {
                        name: "changeStyle",
                        size: "sm",
                        variant: "secondary m-2",
                        onClick: function (e) {
                          return u(
                            l(
                              l({}, s),
                              {},
                              i({}, e.target.name, !s[e.target.name])
                            )
                          );
                        },
                        children: "Change Heights",
                      }),
                    ],
                  }),
                  (0, g.jsxs)("div", {
                    className: "position-relative",
                    children: [
                      (0, g.jsxs)("div", {
                        className: "position-absolute border ".concat(
                          s.backgroundColor && " bg-dark"
                        ),
                        style: {
                          top: "0px",
                          left: "0px",
                          marginLeft: "2%",
                          width: "96%",
                        },
                        hidden: s.showPWAData ? null : "hidden",
                        children: [
                          (0, g.jsx)("div", {
                            children: (0, g.jsx)(uc, {
                              name: "backgroundColor",
                              size: "sm",
                              variant: "secondary m-2",
                              onClick: function (e) {
                                return u(
                                  l(
                                    l({}, s),
                                    {},
                                    i({}, e.target.name, !s[e.target.name])
                                  )
                                );
                              },
                              children: "BG",
                            }),
                          }),
                          (0, g.jsx)("div", {
                            children: (0, g.jsx)("ul", {
                              children: Object.entries(r).map(function (e) {
                                return (0,
                                g.jsxs)("li", { children: [e[0], ":", " ", void 0 === e[1] ? "undefined" : null === e[1] ? "null" : e[1].toString()] }, e);
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, g.jsxs)("div", {
                        className: "position-absolute border-top",
                        style: {
                          top: "0px",
                          left: "0px",
                          marginLeft: "2%",
                          width: "96%",
                        },
                        hidden: s.changeStyle ? null : "hidden",
                        children: [
                          (0, g.jsxs)("div", {
                            children: [
                              (0, g.jsx)("span", { children: "Height Unit: " }),
                              (0, g.jsx)(uc, {
                                name: "vh",
                                "data-type": "sectionHeightUnit",
                                size: "sm",
                                variant: "secondary m-2",
                                style: { width: "3rem" },
                                onClick: h,
                                children: "vh",
                              }),
                              (0, g.jsx)(uc, {
                                name: "svh",
                                "data-type": "sectionHeightUnit",
                                size: "sm",
                                variant: "secondary m-2",
                                style: { width: "3rem" },
                                onClick: h,
                                children: "svh",
                              }),
                              (0, g.jsx)(uc, {
                                name: "dvh",
                                "data-type": "sectionHeightUnit",
                                size: "sm",
                                variant: "secondary m-2",
                                style: { width: "3rem" },
                                onClick: h,
                                children: "dvh",
                              }),
                              (0, g.jsx)(uc, {
                                name: "lvh",
                                "data-type": "sectionHeightUnit",
                                size: "sm",
                                variant: "secondary m-2",
                                style: { width: "3rem" },
                                onClick: h,
                                children: "lvh",
                              }),
                            ],
                          }),
                          (0, g.jsx)("div", {
                            children: (0, g.jsx)(rf, {
                              className: "m-2",
                              onSubmit: h,
                              name: "heightNum",
                              children: (0, g.jsxs)(rf.Group, {
                                as: ml,
                                className: "mb-2",
                                children: [
                                  (0, g.jsx)(xl, {
                                    xs: "auto",
                                    className: "pe-0",
                                    children: (0, g.jsx)(rf.Label, {
                                      children: "Height Value:",
                                    }),
                                  }),
                                  (0, g.jsx)(xl, {
                                    xs: 3,
                                    className: "pe-0",
                                    children: (0, g.jsx)(rf.Control, {
                                      size: "sm",
                                      type: "text",
                                      name: "heightNum",
                                      defaultValue: "100",
                                    }),
                                  }),
                                  (0, g.jsx)(xl, {
                                    xs: "auto",
                                    children: (0, g.jsx)(uc, {
                                      size: "sm",
                                      type: "submit",
                                      variant: "secondary",
                                      children: "Update",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, g.jsxs)("div", {
                            children: [
                              (0, g.jsx)("span", {
                                children: "Section Outline: ",
                              }),
                              (0, g.jsx)(uc, {
                                name: "boxShadow",
                                "data-type": "boxShadow",
                                size: "sm",
                                variant: "secondary m-2",
                                onClick: h,
                                children: "Add Outline",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, g.jsx)("div", {
                style: {
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  border: "1px dashed green",
                  height: "100vh",
                  width: "15vw",
                  paddingTop: "130%",
                },
                hidden: s.showHeights ? null : "hidden",
                children: "100vh",
              }),
              (0, g.jsx)("div", {
                style: {
                  position: "absolute",
                  top: "0px",
                  left: "16vw",
                  border: "1px dashed green",
                  height: "100dvh",
                  width: "15vw",
                  paddingTop: "130%",
                },
                hidden: s.showHeights ? null : "hidden",
                children: "100dvh",
              }),
              (0, g.jsx)("div", {
                style: {
                  position: "absolute",
                  top: "0px",
                  left: "32vw",
                  border: "1px dashed green",
                  height: "100svh",
                  width: "15vw",
                  paddingTop: "130%",
                },
                hidden: s.showHeights ? null : "hidden",
                children: "100svh",
              }),
              (0, g.jsx)("div", {
                style: {
                  position: "absolute",
                  top: "0px",
                  left: "48vw",
                  border: "1px dashed green",
                  height: "100lvh",
                  width: "15vw",
                  paddingTop: "130%",
                },
                hidden: s.showHeights ? null : "hidden",
                children: "100lvh",
              }),
              (0, g.jsx)("div", {
                style: {
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  border: "1px dashed red",
                  height: "10%",
                  width: "10vw",
                  paddingTop: "10%",
                },
                hidden: s.showHeights ? null : "hidden",
                children: "10%",
              }),
              (0, g.jsx)("div", {
                style: {
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  border: "1px dashed red",
                  height: "25%",
                  width: "14vw",
                  paddingTop: "25%",
                },
                hidden: s.showHeights ? null : "hidden",
                children: "25%",
              }),
              (0, g.jsx)("div", {
                style: {
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  border: "1px dashed red",
                  height: "50%",
                  width: "18vw",
                  paddingTop: "50%",
                },
                hidden: s.showHeights ? null : "hidden",
                children: "50%",
              }),
              (0, g.jsx)("div", {
                style: {
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  border: "1px dashed red",
                  height: "100%",
                  width: "22vw",
                  paddingTop: "100%",
                },
                hidden: s.showHeights ? null : "hidden",
                children: "100%",
              }),
              (0, g.jsx)("div", {
                className: "height-test-env",
                style: {
                  position: "absolute",
                  top: "0px",
                  left: "64vw",
                  border: "1px dashed blue",
                  width: "15vw",
                  paddingTop: "60%",
                },
                hidden: s.showHeights ? null : "hidden",
                children: "env",
              }),
              (0, g.jsxs)("div", {
                className: "page-container",
                children: [
                  (0, g.jsx)(ml, {
                    className: "mb-5",
                    children: (0, g.jsx)(xl, {
                      className: "d-flex justify-content-center",
                      children: (0, g.jsxs)("h1", {
                        children: ["Test Page", " ".concat(a)],
                      }),
                    }),
                  }),
                  (0, g.jsx)(ml, {
                    className: "mb-1",
                    children: (0, g.jsx)(xl, {
                      className: "d-flex justify-content-center",
                      children: (0, g.jsx)("div", {
                        children: (0, g.jsx)("p", {
                          className: "handwritten-text fs-2",
                          children: "Save my app to your device.",
                        }),
                      }),
                    }),
                  }),
                  n
                    ? (0, g.jsx)(ml, {
                        className:
                          "mb-3 position-absolute bg-white bottom-0 start-50 translate-middle-x",
                        children: (0, g.jsx)(xl, {
                          className: "d-flex justify-content-center",
                          children: (0, g.jsxs)(uc, {
                            id: "installButton",
                            name: "installButton",
                            variant: "secondary",
                            onClick: function () {
                              return console.log("click");
                            },
                            children: ["Install ", " ", (0, g.jsx)(hc, {})],
                          }),
                        }),
                      })
                    : null,
                  n
                    ? null
                    : (0, g.jsx)(ml, {
                        className:
                          "mb-3 position-absolute bg-white bottom-0 start-50 translate-middle-x",
                        children: (0, g.jsx)(xl, {
                          className: "d-flex justify-content-center",
                          children: (0, g.jsxs)(uc, {
                            id: "installButton",
                            name: "installButton",
                            variant: "secondary",
                            onClick: function () {
                              return console.log("click");
                            },
                            children: ["Install ", " ", (0, g.jsx)(hc, {})],
                          }),
                        }),
                      }),
                ],
              }),
            ],
          });
        },
        of = null;
      var lf = function () {
          var t = c(
              (0, e.useState)({
                displayMode: window.matchMedia("(display-mode: standalone)")
                  .matches,
                documentReferrer: document.referrer,
                navigatorStandalone: navigator.standalone,
                launchMode: "",
                installed: !1,
                showInstall: !0,
                beforeinstallEvent: null,
                safariiOSUser:
                  /^((?!chrome|android|Mac).)*Version\/[\d.]+.*Safari/i.test(
                    navigator.userAgent
                  ),
              }),
              2
            ),
            n = t[0],
            r = t[1];
          return (
            (0, e.useEffect)(function () {
              window
                .matchMedia("(display-mode: standalone)")
                .addEventListener("change", function (e) {
                  console.log("display mode change fired"),
                    e.matches &&
                      (console.log("evt matches"),
                      r(
                        l(
                          l({}, n),
                          {},
                          {
                            displayMode: window.matchMedia(
                              "(display-mode: standalone)"
                            ).matches,
                            documentReferrer: document.referrer,
                            navigatorStandalone: navigator.standalone,
                            launchMode: "standalone",
                            installed: !0,
                            showInstall: !1,
                            safariiOSUser:
                              /^((?!chrome|android|Mac).)*Version\/[\d.]+.*Safari/i.test(
                                navigator.userAgent
                              ),
                          }
                        )
                      ));
                });
            }, []),
            (0, e.useEffect)(
              function () {
                var e = function () {
                  var e = window.matchMedia(
                    "(display-mode: standalone)"
                  ).matches;
                  return document.referrer.startsWith("android-app://")
                    ? "twa"
                    : navigator.standalone || e
                    ? "standalone"
                    : "browser";
                };
                (n.showInstall || n.installed) &&
                  (console.log("beforeinstallPrompt true"),
                  window.addEventListener("beforeinstallprompt", function (t) {
                    return (
                      console.log("beforeinstallPrompt fired"),
                      t.preventDefault(),
                      (of = t),
                      r(
                        l(
                          l({}, n),
                          {},
                          {
                            displayMode: window.matchMedia(
                              "(display-mode: standalone)"
                            ).matches,
                            documentReferrer: document.referrer,
                            navigatorStandalone: navigator.standalone,
                            launchMode: e(),
                            installed: !1,
                            showInstall: !0,
                            safariiOSUser:
                              /(iPhone|iPod|iPad).*Mobile\/.*Safari\//i.test(
                                navigator.userAgent
                              ),
                            userAgent: navigator.userAgent,
                          }
                        )
                      )
                    );
                  }));
              },
              [n.showInstall, n.installed]
            ),
            window.addEventListener("appinstalled", function () {
              console.log("appinstalled fired"),
                (of = null),
                r(l(l({}, n), {}, { installed: !0, showInstall: !1 }));
            }),
            console.log(n),
            (0, g.jsx)("div", {
              className: "App",
              children: (0, g.jsxs)("div", {
                className: "text-white",
                children: [
                  (0, g.jsx)(pl, {}),
                  (0, g.jsx)(Sl, {}),
                  (0, g.jsx)(ql, {}),
                  (0, g.jsx)(fs, {}),
                  (0, g.jsx)(tc, {}),
                  "standalone" !== n.launchMode &&
                    (0, g.jsx)(vc, {
                      safariiOSUser: n.safariiOSUser,
                      promptEvent: of,
                    }),
                  (0, g.jsx)(af, {
                    safariiOSUser: n.safariiOSUser,
                    pwaPrompt: n,
                    page: 1,
                  }),
                  (0, g.jsx)(af, {
                    safariiOSUser: n.safariiOSUser,
                    pwaPrompt: n,
                    page: 2,
                  }),
                  (0, g.jsx)(af, {
                    safariiOSUser: n.safariiOSUser,
                    pwaPrompt: n,
                    page: 3,
                  }),
                  (0, g.jsx)(af, {
                    safariiOSUser: n.safariiOSUser,
                    pwaPrompt: n,
                    page: 4,
                  }),
                  (0, g.jsx)(af, {
                    safariiOSUser: n.safariiOSUser,
                    pwaPrompt: n,
                    page: 5,
                  }),
                  (0, g.jsx)(af, {
                    safariiOSUser: n.safariiOSUser,
                    pwaPrompt: n,
                    page: 6,
                  }),
                  (0, g.jsx)(af, {
                    safariiOSUser: n.safariiOSUser,
                    pwaPrompt: n,
                    page: 7,
                  }),
                ],
              }),
            })
          );
        },
        sf = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function uf(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var n = e.installing;
              null != n &&
                (n.onstatechange = function () {
                  "installed" === n.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      var cf = function (e) {
        e &&
          e instanceof Function &&
          n
            .e(787)
            .then(n.bind(n, 787))
            .then(function (t) {
              var n = t.getCLS,
                r = t.getFID,
                a = t.getFCP,
                i = t.getLCP,
                o = t.getTTFB;
              n(e), r(e), a(e), i(e), o(e);
            });
      };
      t
        .createRoot(document.getElementById("root"))
        .render((0, g.jsx)(e.StrictMode, { children: (0, g.jsx)(lf, {}) })),
        (function (e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var t = "".concat("", "/service-worker.js");
              sf
                ? (!(function (e, t) {
                    fetch(e, { headers: { "Service-Worker": "script" } })
                      .then(function (n) {
                        var r = n.headers.get("content-type");
                        404 === n.status ||
                        (null != r && -1 === r.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : uf(e, t);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA"
                    );
                  }))
                : uf(t, e);
            });
          }
        })(),
        cf(),
        window
          .matchMedia("(display-mode: standalone)")
          .addEventListener("change", function (e) {
            console.log("display mode changed"),
              e.matches &&
                (console.log("evt matches 'standalone'"),
                document
                  .getElementById("meta-viewport")
                  .setAttribute(
                    "content",
                    "width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no,"
                  ));
          });
    })();
})();
//# sourceMappingURL=main.d38a0b5a.js.map
