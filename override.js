!(function (e, t) {
  // El override se aplica inmediatamente al cargar el script.
  for (var n in t) e[n] = t[n];
})(
  window,
  (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 44))
    );
  })([
    function (e, t, n) {
      "use strict";
      e.exports = n(46);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = e.className,
            n = void 0 === t ? "" : t,
            i = e.symbol;
          return r.default.createElement(
            o.default.Consumer,
            null,
            function (e) {
              return (
                (e = e.editor.get("nativeEditor").config.spritemap || ""),
                r.default.createElement(
                  "svg",
                  {
                    className: "ae-svg-icon" + (n ? " " + n : ""),
                    height: "18",
                    width: "18",
                  },
                  r.default.createElement("use", { href: e + "#" + i })
                )
              );
            }
          );
        });
      var r = i(n(0)),
        o = i(n(2));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n,
                r = arguments[t];
              for (n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = (n = n(0)) && n.__esModule ? n : { default: n },
        i = o.default.createContext({});
      (i.toProps = function (e) {
        var t = o.default.forwardRef(function (t, n) {
          return o.default.createElement(i.Consumer, null, function (i) {
            return o.default.createElement(e, r({}, t, { context: i, ref: n }));
          });
        });
        return (t.key = e.key), t;
      }),
        (t.default = i);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (n = n(2)) && n.__esModule ? n : { default: n };
      function o(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      t.default = function (e) {
        var t,
          n = (t = (function () {
            function t() {
              var e,
                n = this;
              if (!(n instanceof t))
                throw new TypeError("Cannot call a class as a function");
              for (var r = arguments.length, i = Array(r), a = 0; a < r; a++)
                i[a] = arguments[a];
              return (
                ((e = o(
                  this,
                  (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    n,
                    [this].concat(i)
                  )
                )).execCommand = function (t) {
                  var n = e.context.editor.get("nativeEditor");
                  n.execCommand(e.props.command, t),
                    n.fire("actionPerformed", e);
                }),
                o(e, e)
              );
            }
            var n = t,
              r = e;
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof r
              );
            return (
              (n.prototype = Object.create(r && r.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              r &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(n, r)
                  : (n.__proto__ = r)),
              t
            );
          })());
        return (t.contextType = r.default), n;
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (n = n(5)) && n.__esModule ? n : { default: n };
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      t.default = function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && o(e.prototype, t), n && o(e, n);
          })(t, [
            {
              key: "getStateClasses",
              value: function () {
                var e = "";
                return (
                  r.default.isFunction(this.isActive) &&
                    this.isActive() &&
                    (e += "ae-button-pressed"),
                  e
                );
              },
            },
          ]),
          t
        );
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
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
              },
        o = {
          isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          },
          isBoolean: function (e) {
            return "boolean" == typeof e;
          },
          isFunction: function (e) {
            return "function" == typeof e;
          },
          isNull: function (e) {
            return null === e;
          },
          isNumber: function (e) {
            return "number" == typeof e && isFinite(e);
          },
          isObject: function (e) {
            var t = void 0 === e ? "undefined" : r(e);
            return e && ("object" === t || o.isFunction(e));
          },
          isString: function (e) {
            return "string" == typeof e;
          },
          mix: function (e, t) {
            var n,
              r = Object.prototype.hasOwnProperty;
            for (n in t) r.call(t, n) && (e[n] = t[n]);
          },
          toInt: function (e) {
            return parseInt(e, 10);
          },
        };
      t.default = o;
    },
    function (e, t, n) {
      "use strict";
      (function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (e) {
            console.error(e);
          }
      })(),
        (e.exports = n(47));
    },
    function (e, t, n) {
      e.exports = n(54)();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, t);
        return void 0 === o
          ? null === (e = Object.getPrototypeOf(e))
            ? void 0
            : r(e, t, n)
          : "value" in o
          ? o.value
          : void 0 !== (e = o.get)
          ? e.call(n)
          : void 0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = l(n(2)),
        i = l(n(5));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e) {
        var t,
          n = (t = (function () {
            function t() {
              var e = this,
                n = t;
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
              if (
                ((e = this),
                (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
                  this,
                  arguments
                )),
                e)
              )
                return !n || ("object" != typeof n && "function" != typeof n)
                  ? e
                  : n;
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            var n = t,
              o = e;
            if ("function" != typeof o && null !== o)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof o
              );
            return (
              (n.prototype = Object.create(o && o.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              o &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(n, o)
                  : (n.__proto__ = o)),
              (function (e, t, n) {
                t && a(e.prototype, t), n && a(e, n);
              })(t, [
                {
                  key: "componentWillMount",
                  value: function () {
                    i.default.isFunction(
                      r(
                        t.prototype.__proto__ ||
                          Object.getPrototypeOf(t.prototype),
                        "componentWillMount",
                        this
                      )
                    ) &&
                      r(
                        t.prototype.__proto__ ||
                          Object.getPrototypeOf(t.prototype),
                        "componentWillMount",
                        this
                      ).call(this);
                    var e = this.props.style;
                    if (i.default.isString(e)) {
                      for (
                        var n = e.split("."),
                          o = this.context.editor.get("nativeEditor").config,
                          a = n.shift();
                        a && i.default.isObject(o) && i.default.isObject(o[a]);

                      )
                        (o = o[a]), (a = n.shift());
                      i.default.isObject(o) && (e = o);
                    }
                    this._style = new CKEDITOR.style(e);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    i.default.isFunction(
                      r(
                        t.prototype.__proto__ ||
                          Object.getPrototypeOf(t.prototype),
                        "componentWillUnmount",
                        this
                      )
                    ) &&
                      r(
                        t.prototype.__proto__ ||
                          Object.getPrototypeOf(t.prototype),
                        "componentWillUnmount",
                        this
                      ).call(this),
                      (this._style = null);
                  },
                },
                {
                  key: "getStyle",
                  value: function () {
                    return this._style;
                  },
                },
                {
                  key: "isActive",
                  value: function () {
                    var e = this.context.editor.get("nativeEditor"),
                      t = e.elementPath();
                    return this.getStyle().checkActive(t, e);
                  },
                },
              ]),
              t
            );
          })());
        return (t.contextType = o.default), n;
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t, n) {
          return t && i(e.prototype, t), n && i(e, n), e;
        },
        o = (n = n(2)) && n.__esModule ? n : { default: n };
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      t.default = function (e) {
        var t,
          n = (t = (function () {
            function t() {
              var e = this,
                n = t;
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
              if (
                ((e = this),
                (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
                  this,
                  arguments
                )),
                e)
              )
                return !n || ("object" != typeof n && "function" != typeof n)
                  ? e
                  : n;
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            var n = t,
              o = e;
            if ("function" != typeof o && null !== o)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof o
              );
            return (
              (n.prototype = Object.create(o && o.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              o &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(n, o)
                  : (n.__proto__ = o)),
              r(t, [
                {
                  key: "isActive",
                  value: function () {
                    var e = this.context.editor
                      .get("nativeEditor")
                      .getCommand(this.props.command);
                    return !!e && e.state === CKEDITOR.TRISTATE_ON;
                  },
                },
              ]),
              t
            );
          })());
        return (t.contextType = o.default), n;
      };
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, t);
        return void 0 === o
          ? null === (e = Object.getPrototypeOf(e))
            ? void 0
            : r(e, t, n)
          : "value" in o
          ? o.value
          : void 0 !== (e = o.get)
          ? e.call(n)
          : void 0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = function (e, t, n) {
          return t && l(e.prototype, t), n && l(e, n), e;
        },
        i = u(n(6)),
        a = u(n(5));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      t.default = function (e) {
        function t() {
          var e,
            n = this,
            r = t;
          if (!(n instanceof r))
            throw new TypeError("Cannot call a class as a function");
          for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
          return (
            ((r = e =
              s(
                this,
                (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  n,
                  [this].concat(i)
                )
              )).focus = function (t) {
              var n;
              (!t || e._isValidTarget(t.target)) &&
                e._descendants &&
                e._descendants.length &&
                ((n = e._descendants[e._activeDescendant]),
                document.activeElement === n ||
                  e.props.focusFirstChild ||
                  (-1 === e._descendants.indexOf(document.activeElement) &&
                    n.focus()),
                t && (t.stopPropagation(), t.preventDefault()));
            }),
            (e.handleKey = function (t) {
              var n;
              e._isValidTarget(t.target) &&
                e._descendants &&
                (n = e._getFocusAction(t)).type &&
                (t.stopPropagation(),
                t.preventDefault(),
                1 === n.type && e._moveFocus(n.direction),
                2 === n.type && e.props.onDismiss(n.direction));
            }),
            s(e, r)
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          o(t, [
            {
              key: "componentDidMount",
              value: function () {
                a.default.isFunction(
                  r(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "componentDidMount",
                    this
                  )
                ) &&
                  r(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "componentDidMount",
                    this
                  ).call(this),
                  this._refresh();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                a.default.isFunction(
                  r(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "componentDidUpdate",
                    this
                  )
                ) &&
                  r(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "componentDidUpdate",
                    this
                  ).call(this),
                  this._refresh();
              },
            },
            {
              key: "moveFocus",
              value: function (e) {
                (e = a.default.isNumber(e) ? e : 0), this._moveFocus(e);
              },
            },
            {
              key: "_getFocusAction",
              value: function (e) {
                var t,
                  n = { type: 0 };
                return (
                  this.props.keys &&
                    ((t = this._getFocusMoveDirection(e)) &&
                      ((n.direction = t), (n.type = 1)),
                    (e = this._getFocusDismissAction(e, t)).dismiss &&
                      ((n.direction = e.direction), (n.type = 2))),
                  n
                );
              },
            },
            {
              key: "_getFocusDismissAction",
              value: function (e, t) {
                var n = { direction: t, dismiss: !1 };
                return (
                  this.props.onDismiss &&
                    (this._isValidKey(e.keyCode, this.props.keys.dismiss) &&
                      (n.dismiss = !0),
                    this._isValidKey(e.keyCode, this.props.keys.dismissNext) &&
                      ((n.dismiss = !0), (n.direction = 1)),
                    this._isValidKey(e.keyCode, this.props.keys.dismissPrev) &&
                      ((n.dismiss = !0), (n.direction = -1)),
                    n.dismiss ||
                      this.props.circular ||
                      !t ||
                      (n.dismiss =
                        (-1 === t && 0 === this._activeDescendant) ||
                        (1 === t &&
                          this._activeDescendant ===
                            this._descendants.length - 1))),
                  n
                );
              },
            },
            {
              key: "_getFocusMoveDirection",
              value: function (e) {
                var t = 0;
                return (
                  this._isValidKey(e.keyCode, this.props.keys.next) && (t = 1),
                  this._isValidKey(e.keyCode, this.props.keys.prev) && (t = -1),
                  e.shifKey && (t *= -1),
                  t
                );
              },
            },
            {
              key: "_isValidKey",
              value: function (e, t) {
                return a.default.isArray(t) ? -1 !== t.indexOf(e) : e === t;
              },
            },
            {
              key: "_isValidTarget",
              value: function (e) {
                return (
                  "input" !== (e = e.tagName.toLowerCase()) &&
                  "select" !== e &&
                  "textarea" !== e
                );
              },
            },
            {
              key: "_moveFocus",
              value: function (e) {
                var t = this._descendants.length,
                  n = this._descendants[this._activeDescendant];
                n.setAttribute("tabIndex", -1),
                  (this._activeDescendant += e),
                  this.props.circular
                    ? (this._activeDescendant =
                        ((this._activeDescendant % t) + t) % t)
                    : (this._activeDescendant = Math.max(
                        Math.min(this._activeDescendant, t - 1),
                        0
                      )),
                  (n = this._descendants[this._activeDescendant]).setAttribute(
                    "tabIndex",
                    0
                  ),
                  n.focus();
              },
            },
            {
              key: "_refresh",
              value: function () {
                var e,
                  t = this,
                  n = i.default.findDOMNode(this);
                n &&
                  ((n = n.querySelectorAll(this.props.descendants)),
                  (e = []),
                  (this._descendants = []),
                  Array.prototype.slice.call(n).forEach(function (n) {
                    (n.getAttribute("data-tabindex") ? e : t._descendants).push(
                      n
                    );
                  }),
                  (e = e.sort(function (e, t) {
                    return (
                      a.default.toInt(e.getAttribute("data-tabindex")) >
                      a.default.toInt(t.getAttribute("data-tabindex"))
                    );
                  })),
                  (this._descendants = e.concat(this._descendants)),
                  (this._activeDescendant = 0),
                  this._descendants.some(function (e, n) {
                    if ("0" === e.getAttribute("tabindex"))
                      return (t._activeDescendant = n), t.focus(), !0;
                  }));
              },
            },
          ]),
          t
        );
      };
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, t);
        return void 0 === o
          ? null === (e = Object.getPrototypeOf(e))
            ? void 0
            : r(e, t, n)
          : "value" in o
          ? o.value
          : void 0 !== (e = o.get)
          ? e.call(n)
          : void 0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = l(n(2)),
        i = l(n(5));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e) {
        var t,
          n = (t = (function () {
            function t() {
              var e = this,
                n = t;
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
              if (
                ((e = this),
                (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
                  this,
                  arguments
                )),
                e)
              )
                return !n || ("object" != typeof n && "function" != typeof n)
                  ? e
                  : n;
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            var n = t,
              o = e;
            if ("function" != typeof o && null !== o)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof o
              );
            return (
              (n.prototype = Object.create(o && o.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              o &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(n, o)
                  : (n.__proto__ = o)),
              (function (e, t, n) {
                t && a(e.prototype, t), n && a(e, n);
              })(t, [
                {
                  key: "componentWillMount",
                  value: function () {
                    i.default.isFunction(
                      r(
                        t.prototype.__proto__ ||
                          Object.getPrototypeOf(t.prototype),
                        "componentWillMount",
                        this
                      )
                    ) &&
                      r(
                        t.prototype.__proto__ ||
                          Object.getPrototypeOf(t.prototype),
                        "componentWillMount",
                        this
                      ).call(this);
                    var e,
                      n = this.context.editor.get("nativeEditor"),
                      o = this.props.keystroke,
                      a = "keystroke:" + o.name;
                    n.getCommand(a) ||
                      ((e = new CKEDITOR.command(n, {
                        exec: function (e) {
                          var t = o.fn;
                          i.default.isString(t)
                            ? this[t].call(this, e)
                            : i.default.isFunction(t) && t.call(this, e);
                        }.bind(this),
                      })),
                      n.addCommand(a, e)),
                      (this._defaultKeystrokeCommand =
                        n.keystrokeHandler.keystrokes[o.keys]),
                      n.setKeystroke(o.keys, a);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    i.default.isFunction(
                      r(
                        t.prototype.__proto__ ||
                          Object.getPrototypeOf(t.prototype),
                        "componentWillUnmount",
                        this
                      )
                    ) &&
                      r(
                        t.prototype.__proto__ ||
                          Object.getPrototypeOf(t.prototype),
                        "componentWillUnmount",
                        this
                      ).call(this),
                      this.context.editor
                        .get("nativeEditor")
                        .setKeystroke(
                          this.props.keystroke.keys,
                          this._defaultKeystrokeCommand
                        );
                  },
                },
              ]),
              t
            );
          })());
        return (t.contextType = o.default), n;
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(n(0));
      n = i(n(10));
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && o(e.prototype, t), n && o(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return r.default.createElement(
                  "div",
                  {
                    className: "ae-arrow-box ae-arrow-box-top-left ae-dropdown",
                    onFocus: this.focus,
                    onKeyDown: this.handleKey,
                    tabIndex: "0",
                  },
                  r.default.createElement(
                    "ul",
                    { className: "ae-listbox", role: "listbox" },
                    this.props.children
                  )
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component);
      (a.defaultProps = {
        circular: !1,
        descendants: ".ae-toolbar-element",
        keys: {
          dismiss: [27],
          dismissNext: [39],
          dismissPrev: [37],
          next: [40],
          prev: [38],
        },
      }),
        (a.key = "dropdown"),
        (t.default = (0, n.default)(a));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(10)),
        i = l(n(29));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          return (
            (e = (function (e, t) {
              if (e)
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))),
            (e._ref = r.default.createRef()),
            e
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "componentDidMount",
              value: function () {
                this._ref.current.focus();
              },
            },
            {
              key: "render",
              value: function () {
                return r.default.createElement(
                  "div",
                  {
                    className: "ae-arrow-box ae-arrow-box-top-left ae-dropdown",
                    onFocus: this.focus,
                    onKeyDown: this.handleKey,
                    ref: this._ref,
                    tabIndex: "0",
                  },
                  r.default.createElement(
                    "ul",
                    {
                      className: "ae-listbox",
                      id: this.props.listId,
                      role: "listbox",
                    },
                    this._renderActions(this.props.commands)
                  )
                );
              },
            },
            {
              key: "_renderActions",
              value: function (e) {
                var t = void 0;
                return e && e.length
                  ? e.map(function (e) {
                      return r.default.createElement(
                        "li",
                        { key: e.command, role: "option" },
                        r.default.createElement(i.default, {
                          command: e.command,
                          description:
                            "string" == typeof e.label ? e.label : e.label(),
                          icon: e.icon,
                        })
                      );
                    })
                  : t;
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = {
          circular: !1,
          descendants: ".ae-toolbar-element",
          keys: {
            dismiss: [27],
            dismissNext: [39],
            dismissPrev: [37],
            next: [40],
            prev: [38],
          },
        }),
        (n.key = "buttonCommandsList"),
        (t.default = (0, o.default)(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.registerBridgeButton =
          t.regexBasePath =
          t.loadLanguageResources =
          t.implementEventTarget =
          t.getUrl =
          t.getButtons =
          t.getBasePath =
          t.editable =
          t.Toolbars =
          t.Selections =
          t.SelectionTest =
          t.SelectionSetPosition =
          t.SelectionGetArrowBoxClasses =
          t.OOP =
          t.Lang =
          t.Core =
          t.Compat =
          t.Buttons =
          t.Base =
          t.Attribute =
            void 0);
      var r = y(n(45)),
        o = m(n(51)),
        i = y(n(100)),
        a = m(n(114)),
        l = m(n(39)),
        u = m(n(5)),
        s = m(n(22)),
        c = m(n(40)),
        d = m(n(41)),
        f = m(n(23)),
        p = m(n(42)),
        h = m(n(117));
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function y(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      n(43);
      var b = {};
      n = { extend: s.default };
      (t.Attribute = l.default),
        (t.Base = r),
        (t.Buttons = o.default),
        (t.Compat = i),
        (t.Core = h.default),
        (t.Lang = u.default),
        (t.OOP = n),
        (t.SelectionGetArrowBoxClasses = c.default),
        (t.SelectionSetPosition = d.default),
        (t.SelectionTest = f.default),
        (t.Selections = p.default),
        (t.Toolbars = a.default),
        (t.editable = function (e, t) {
          return (
            ((t = t || {}).srcNode = e),
            AlloyEditor.implementEventTarget(),
            new h.default(t)
          );
        }),
        (t.getBasePath = function () {
          var e = window.ALLOYEDITOR_BASEPATH || "";
          if (!e)
            for (
              var t = document.getElementsByTagName("script"), n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n].src.match(AlloyEditor.regexBasePath);
              if (r) {
                e = r[1];
                break;
              }
            }
          if (
            (e =
              -1 === e.indexOf(":/") && "//" !== e.slice(0, 2)
                ? 0 === e.indexOf("/")
                  ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + e
                  : location.href.match(/^[^?]*\/(?:)/)[0] + e
                : e)
          )
            return e;
          throw new Error(
            'The AlloyEditor installation path could not be automatically detected. Please set the global variable "ALLOYEDITOR_BASEPATH" before creating editor instances.'
          );
        }),
        (t.getButtons = function (e) {
          return function () {
            return e.reduce(function (e, t) {
              return (t = b[t] || [t]), e.concat(t);
            }, []);
          };
        }),
        (t.getUrl = function (e) {
          var t = AlloyEditor.getBasePath();
          return (
            -1 === e.indexOf(":/") && 0 !== e.indexOf("/") && (e = t + e),
            CKEDITOR.timestamp &&
              "/" !== e.charAt(e.length - 1) &&
              !/[&?]t=/.test(e) &&
              (e +=
                (0 <= e.indexOf("?") ? "&" : "?") + "t=" + CKEDITOR.timestamp),
            e
          );
        }),
        (t.implementEventTarget = function () {
          AlloyEditor.fire ||
            AlloyEditor.on ||
            CKEDITOR.event.implementOn(AlloyEditor);
        }),
        (t.loadLanguageResources = function (e) {
          var t, n, r;
          AlloyEditor.implementEventTarget(),
            u.default.isFunction(e) &&
              (AlloyEditor.Strings
                ? setTimeout(e, 0)
                : AlloyEditor.once("languageResourcesLoaded", function () {
                    setTimeout(e, 0);
                  })),
            AlloyEditor._langResourceRequested ||
              ((AlloyEditor._langResourceRequested = !0),
              (t = [
                "af",
                "ar",
                "bg",
                "bn",
                "bs",
                "ca",
                "cs",
                "cy",
                "da",
                "de",
                "el",
                "en-au",
                "en-ca",
                "en-gb",
                "en",
                "eo",
                "es",
                "et",
                "eu",
                "fa",
                "fi",
                "fo",
                "fr-ca",
                "fr",
                "gl",
                "gu",
                "he",
                "hi",
                "hr",
                "hu",
                "id",
                "is",
                "it",
                "ja",
                "ka",
                "km",
                "ko",
                "ku",
                "lt",
                "lv",
                "mk",
                "mn",
                "ms",
                "nb",
                "nl",
                "no",
                "pl",
                "pt-br",
                "pt",
                "ro",
                "ru",
                "si",
                "sk",
                "sl",
                "sq",
                "sr-latn",
                "sr",
                "sv",
                "th",
                "tr",
                "tt",
                "ug",
                "uk",
                "vi",
                "zh-cn",
                "zh",
              ]),
              (n = (r = (navigator.language || navigator.userLanguage || "en")
                .toLowerCase()
                .match(/([a-z]+)(?:-([a-z]+))?/))[1]),
              (r = r[2]),
              0 <= t.indexOf(n + "-" + r)
                ? (n = n + "-" + r)
                : -1 === t.indexOf(n) && (n = "en"),
              CKEDITOR.scriptLoader.load(
                AlloyEditor.getUrl("lang/alloy-editor/" + n + ".js"),
                function (e) {
                  e && AlloyEditor.fire("languageResourcesLoaded");
                },
                this
              ));
        }),
        (t.regexBasePath =
          /(^|.*[\\\/])(?:alloy-editor[^\/]+|alloy-editor)\.js(?:\?.*|;.*)?$/i),
        (t.registerBridgeButton = function (e, t) {
          b[t] || (b[t] = []), b[t].push(e);
        });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(n(2)),
        o = i(n(5));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      t.default = function (e) {
        var t,
          n = (t = (function () {
            function t() {
              var e,
                n = this;
              if (!(n instanceof t))
                throw new TypeError("Cannot call a class as a function");
              for (var r = arguments.length, i = Array(r), l = 0; l < r; l++)
                i[l] = arguments[l];
              return (
                ((e = a(
                  this,
                  (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    n,
                    [this].concat(i)
                  )
                )).applyStyle = function () {
                  var t;
                  o.default.isFunction(e.isActive) &&
                    o.default.isFunction(e.getStyle) &&
                    ((t = e.context.editor.get("nativeEditor"))
                      .getSelection()
                      .lock(),
                    e.isActive()
                      ? t.removeStyle(e.getStyle())
                      : t.applyStyle(e.getStyle()),
                    t.getSelection().unlock(),
                    t.fire("actionPerformed", e));
                }),
                a(e, e)
              );
            }
            var n = t,
              r = e;
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof r
              );
            return (
              (n.prototype = Object.create(r && r.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              r &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(n, r)
                  : (n.__proto__ = r)),
              t
            );
          })());
        return (t.contextType = r.default), n;
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = d(n(0)),
        o = d(n(6)),
        i = d(n(10)),
        a = d(n(12)),
        l = d(n(25)),
        u = d(n(26)),
        s = d(n(27));
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && c(e.prototype, t), n && c(e, n);
          })(t, [
            {
              key: "componentDidMount",
              value: function () {
                o.default.findDOMNode(this).focus();
              },
            },
            {
              key: "componentWillMount",
              value: function () {
                var e = [],
                  t = [],
                  n = [];
                this.props.styles.forEach(function (r) {
                  var o = new CKEDITOR.style(r.style);
                  o.type === CKEDITOR.STYLE_BLOCK
                    ? e.push(r)
                    : o.type === CKEDITOR.STYLE_INLINE
                    ? t.push(r)
                    : o.type === CKEDITOR.STYLE_OBJECT && n.push(r);
                }),
                  (this._blockStyles = e),
                  (this._inlineStyles = t),
                  (this._objectStyles = n);
              },
            },
            {
              key: "render",
              value: function () {
                var e = void 0;
                return (
                  this.props.showRemoveStylesItem &&
                    (e = r.default.createElement(u.default, {
                      onDismiss: this.props.toggleDropdown,
                    })),
                  r.default.createElement(
                    a.default,
                    this.props,
                    e,
                    r.default.createElement(l.default, {
                      name: AlloyEditor.Strings.blockStyles,
                      styles: this._blockStyles,
                    }),
                    this._renderStylesItems(this._blockStyles),
                    r.default.createElement(l.default, {
                      name: AlloyEditor.Strings.inlineStyles,
                      styles: this._inlineStyles,
                    }),
                    this._renderStylesItems(this._inlineStyles),
                    r.default.createElement(l.default, {
                      name: AlloyEditor.Strings.objectStyles,
                      styles: this._objectStyles,
                    }),
                    this._renderStylesItems(this._objectStyles)
                  )
                );
              },
            },
            {
              key: "_renderStylesItems",
              value: function (e) {
                var t = this,
                  n = void 0;
                return e && e.length
                  ? e.map(function (e) {
                      return r.default.createElement(
                        "li",
                        { key: e.name, role: "option" },
                        r.default.createElement(s.default, {
                          activeStyle: t.props.activeStyle,
                          name: e.name,
                          style: e.style,
                          styleFn: e.styleFn,
                        })
                      );
                    })
                  : n;
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = {
          circular: !1,
          descendants: ".ae-toolbar-element",
          keys: {
            dismiss: [27],
            dismissNext: [39],
            dismissPrev: [37],
            next: [40],
            prev: [38],
          },
          showRemoveStylesItem: !0,
        }),
        (n.key = "buttonStylesList"),
        (t.default = (0, i.default)(n));
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, t);
        return void 0 === o
          ? null === (e = Object.getPrototypeOf(e))
            ? void 0
            : r(e, t, n)
          : "value" in o
          ? o.value
          : void 0 !== (e = o.get)
          ? e.call(n)
          : void 0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n,
                r = arguments[t];
              for (n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        i = u(n(6)),
        a = u(n(5));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          var n = (function (e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n.mergeDropdownProps = function (e, t) {
              return CKEDITOR.tools.merge(e, {
                expanded: n.state.itemDropdown === t,
                tabIndex: n.state.dropdownTrigger === t ? 0 : -1,
                toggleDropdown: n.toggleDropdown.bind(n, t),
              });
            }),
            (n.toggleDropdown = function (e, t) {
              n.setState(
                {
                  dropdownTrigger: e,
                  itemDropdown: e !== n.state.itemDropdown ? e : null,
                },
                function () {
                  n.state.itemDropdown ||
                    (n.moveFocus
                      ? n.moveFocus(t)
                      : i.default.findDOMNode(n).focus());
                }
              );
            }),
            (n.state = o({}, n.state, {
              dropdownTrigger: null,
              itemDropdown: null,
            })),
            n
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && l(e.prototype, t), n && l(e, n);
          })(t, [
            {
              key: "componentWillReceiveProps",
              value: function (e) {
                a.default.isFunction(
                  r(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "componentWillReceiveProps",
                    this
                  )
                ) &&
                  r(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "componentWillReceiveProps",
                    this
                  ).call(this, e),
                  this.setState({ dropdownTrigger: null, itemDropdown: null });
              },
            },
          ]),
          t
        );
      };
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, t);
        return void 0 === o
          ? null === (e = Object.getPrototypeOf(e))
            ? void 0
            : r(e, t, n)
          : "value" in o
          ? o.value
          : void 0 !== (e = o.get)
          ? e.call(n)
          : void 0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = function (e, t, n) {
          return t && a(e.prototype, t), n && a(e, n), e;
        },
        i = (n = n(5)) && n.__esModule ? n : { default: n };
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      t.default = function (e) {
        function t() {
          var e,
            n = this;
          if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = l(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(o)
              )
            )).requestExclusive = function (t) {
              e.setState({ itemExclusive: t });
            }),
            l(e, e)
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          o(t, [
            {
              key: "cancelExclusive",
              value: function (e) {
                this.state.itemExclusive === e &&
                  this.setState({ itemExclusive: null });
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function (e) {
                i.default.isFunction(
                  r(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "componentWillReceiveProps",
                    this
                  )
                ) &&
                  r(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "componentWillReceiveProps",
                    this
                  ).call(this, e),
                  this.setState({ itemExclusive: null });
              },
            },
            {
              key: "filterExclusive",
              value: function (e) {
                var t = this;
                return e.filter(function (e) {
                  return t.state.itemExclusive &&
                    t.state.itemExclusive !== e.key
                    ? void 0
                    : e;
                });
              },
            },
            {
              key: "mergeExclusiveProps",
              value: function (e, t) {
                return CKEDITOR.tools.merge(e, {
                  cancelExclusive: this.cancelExclusive.bind(this, t),
                  renderExclusive: this.state.itemExclusive === t,
                  requestExclusive: this.requestExclusive.bind(this, t),
                });
              },
            },
          ]),
          t
        );
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n,
                r = arguments[t];
              for (n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = p(n(0)),
        i = p(n(2)),
        a = p(n(5)),
        l = p(n(17)),
        u = p(n(10)),
        s = p(n(1)),
        c = p(n(32)),
        d = p(n(34));
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          var n = (function (e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n._clearLink = function () {
              n.setState({ linkHref: "" }), n._focusLinkInput();
            }),
            (n._handleKeyDown = function (e) {
              (13 !== e.keyCode && 27 !== e.keyCode) || e.preventDefault(),
                13 === e.keyCode
                  ? n._updateLink()
                  : 40 === e.keyCode
                  ? n.setState({ autocompleteSelected: !0 })
                  : 27 === e.keyCode &&
                    ((e = n.context.editor.get("nativeEditor")),
                    new CKEDITOR.Link(e).advanceSelection(),
                    n.context.editor
                      .get("nativeEditor")
                      .fire("actionPerformed", n));
            }),
            (n._handleLinkHrefChange = function (e) {
              n.setState({ linkHref: e.target.value }), n._focusLinkInput();
            }),
            (n._handleLinkTargetChange = function (e) {
              n.setState({
                itemDropdown: null,
                linkTarget: e.target.getAttribute("data-value"),
              }),
                n._focusLinkInput();
            }),
            (n._removeLink = function () {
              var e = n.context.editor.get("nativeEditor"),
                t = new CKEDITOR.Link(e),
                r = e.getSelection(),
                o = r.createBookmarks();
              t.remove(n.state.element, { advance: !1 }),
                r.selectBookmarks(o),
                n.props.cancelExclusive(),
                e.fire("actionPerformed", n);
            }),
            (n._updateLink = function () {
              var e = n.context.editor.get("nativeEditor"),
                t = new CKEDITOR.Link(e, {
                  appendProtocol: n.props.appendProtocol,
                }),
                r = { target: n.state.linkTarget || null },
                o = { advance: !1 };
              n.state.linkHref &&
                (n.state.element
                  ? ((r.href = n.state.linkHref),
                    t.update(r, n.state.element, o))
                  : (n.state.linkTarget || (r = {}),
                    t.create(n.state.linkHref, r, o)),
                e.fire("actionPerformed", n)),
                n.props.cancelExclusive();
            }),
            (n.linkInput = o.default.createRef()),
            (n.state = n._getInitialState()),
            n
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && f(e.prototype, t), n && f(e, n);
          })(t, [
            {
              key: "componentDidMount",
              value: function () {
                (this.props.renderExclusive || this.props.manualSelection) &&
                  this._focusLinkInput();
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function () {
                this.setState(this._getInitialState());
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t = {
                    allowedTargets: this.props.allowedTargets,
                    editor: this.context.editor,
                    handleLinkTargetChange: this._handleLinkTargetChange,
                    selectedTarget:
                      this.state.linkTarget ||
                      AlloyEditor.Strings.linkTargetDefault,
                  },
                  n = ((t = this.mergeDropdownProps(t, d.default.key)), void 0),
                  i = void (
                    this.props.data &&
                    ((i = this.props.data),
                    a.default.isFunction(i) ||
                      ((e = this.props.data),
                      (i = function () {
                        return e;
                      })),
                    (i = {
                      autocompleteSelected: this.state.autocompleteSelected,
                      data: i,
                      editor: this.context.editor,
                      handleLinkAutocompleteClick:
                        this._handleLinkAutocompleteClick,
                      onDismiss: this.props.toggleDropdown,
                      setAutocompleteState: this._setAutocompleteState,
                      term: this.state.linkHref,
                    }),
                    (i = this.mergeDropdownProps(i, c.default.key)),
                    (n = o.default.createElement(c.default, i)))
                  ),
                  l =
                    (this.state.linkHref &&
                      (i = o.default.createElement(
                        "button",
                        {
                          "aria-label": AlloyEditor.Strings.clearInput,
                          className: "ae-button ae-button-clear",
                          onClick: this._clearLink,
                          title: AlloyEditor.Strings.clear,
                        },
                        o.default.createElement(s.default, {
                          symbol: "times-circle",
                        })
                      )),
                    {});
                return (
                  !CKEDITOR.env.ie &&
                    AlloyEditor.Strings &&
                    (l.placeholder = AlloyEditor.Strings.editLink),
                  o.default.createElement(
                    "div",
                    { className: "ae-container-edit-link" },
                    o.default.createElement(
                      "button",
                      {
                        "aria-label": AlloyEditor.Strings.removeLink,
                        className: "ae-button",
                        disabled: !this.state.element,
                        onClick: this._removeLink,
                        title: AlloyEditor.Strings.remove,
                      },
                      o.default.createElement(s.default, {
                        symbol: "chain-broken",
                      })
                    ),
                    o.default.createElement(
                      "div",
                      { className: "ae-container-input xxl" },
                      this.props.showTargetSelector &&
                        o.default.createElement(d.default, t),
                      o.default.createElement(
                        "div",
                        { className: "ae-container-input" },
                        o.default.createElement(
                          "input",
                          r(
                            {
                              className: "ae-input",
                              onChange: this._handleLinkHrefChange,
                              onKeyDown: this._handleKeyDown,
                            },
                            l,
                            {
                              ref: this.linkInput,
                              type: "text",
                              value: this.state.linkHref,
                            }
                          )
                        ),
                        n
                      ),
                      i
                    ),
                    o.default.createElement(
                      "button",
                      {
                        "aria-label": AlloyEditor.Strings.confirm,
                        className: "ae-button",
                        disabled: !this._isValidState(),
                        onClick: this._updateLink,
                        title: AlloyEditor.Strings.confirm,
                      },
                      o.default.createElement(s.default, {
                        className: "ae-icon-svg-check",
                        symbol: "check",
                      })
                    )
                  )
                );
              },
            },
            {
              key: "_getInitialState",
              value: function () {
                var e = this.props.context.editor,
                  t = this.props.defaultLinkTarget,
                  n =
                    ((e = new CKEDITOR.Link(
                      e.get("nativeEditor")
                    ).getFromSelection()) &&
                      e.getAttribute("href")) ||
                    "";
                t = (e && e.getAttribute("target")) || t;
                return {
                  autocompleteSelected: !1,
                  element: e,
                  initialLink: { href: n, target: t },
                  linkHref: n,
                  linkTarget: t,
                };
              },
            },
            {
              key: "_focusLinkInput",
              value: function () {
                function e() {
                  t.linkInput.current.focus();
                }
                var t = this;
                window.requestAnimationFrame
                  ? window.requestAnimationFrame(e)
                  : setTimeout(e, 0);
              },
            },
            {
              key: "_handleLinkAutocompleteClick",
              value: function (e) {
                this.setState({
                  itemDropdown: null,
                  linkHref: e.target.getAttribute("data-value"),
                }),
                  this._focusLinkInput();
              },
            },
            {
              key: "_isValidState",
              value: function () {
                return (
                  this.state.linkHref &&
                  (this.state.linkHref !== this.state.initialLink.href ||
                    this.state.linkTarget !== this.state.initialLink.target)
                );
              },
            },
            {
              key: "_setAutocompleteState",
              value: function (e) {
                this.setState({ autocompleteSelected: e.selected });
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.contextType = i.default),
        (n.defaultProps = {
          appendProtocol: !0,
          autocompleteUrl: "",
          circular: !0,
          customIndexStart: !0,
          defaultLinkTarget: "",
          descendants: ".ae-toolbar-element",
          keys: {
            dismiss: [27],
            dismissNext: [39],
            dismissPrev: [37],
            next: [40],
            prev: [38],
          },
          showTargetSelector: !0,
        }),
        (n.key = "linkEdit"),
        (t.default = i.default.toProps((0, l.default)((0, u.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t, n) {
          return t && i(e.prototype, t), n && i(e, n), e;
        },
        o = (n = n(2)) && n.__esModule ? n : { default: n };
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      t.default = function (e) {
        var t,
          n = (t = (function () {
            function t() {
              var e = this,
                n = t;
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
              if (
                ((e = this),
                (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
                  this,
                  arguments
                )),
                e)
              )
                return !n || ("object" != typeof n && "function" != typeof n)
                  ? e
                  : n;
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            var n = t,
              o = e;
            if ("function" != typeof o && null !== o)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof o
              );
            return (
              (n.prototype = Object.create(o && o.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              o &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(n, o)
                  : (n.__proto__ = o)),
              r(t, [
                {
                  key: "mergeButtonCfgProps",
                  value: function () {
                    var e =
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : this.props,
                      t =
                        this.context.editor.get("nativeEditor").config
                          .buttonCfg || {};
                    return CKEDITOR.tools.merge(e, t.linkEdit);
                  },
                },
              ]),
              t
            );
          })());
        return (t.contextType = o.default), n;
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n,
                r = arguments[t];
              for (n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = function (e, t, n) {
          return t && s(e.prototype, t), n && s(e, n), e;
        },
        i = c(n(0)),
        a = c(n(6)),
        l = c(n(2)),
        u = c(n(5));
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e) {
        var t,
          n = (t = (function () {
            function t() {
              var e = this,
                n = t;
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
              if (
                ((e = this),
                (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
                  this,
                  arguments
                )),
                e)
              )
                return !n || ("object" != typeof n && "function" != typeof n)
                  ? e
                  : n;
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            var n = t,
              r = e;
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof r
              );
            return (
              (n.prototype = Object.create(r && r.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              r &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(n, r)
                  : (n.__proto__ = r)),
              o(t, [
                {
                  key: "cancelAnimation",
                  value: function () {
                    this._animationFrameId &&
                      window.cancelAnimationFrame(this._animationFrameId);
                  },
                },
                {
                  key: "getArrowBoxClasses",
                  value: function () {
                    var e = "ae-arrow-box";
                    return (
                      this.getInteractionPoint().direction ===
                      CKEDITOR.SELECTION_TOP_TO_BOTTOM
                        ? (e += " ae-arrow-box-top")
                        : (e += " ae-arrow-box-bottom"),
                      e
                    );
                  },
                },
                {
                  key: "getConstrainedPosition",
                  value: function (e, t) {
                    t = t || new CKEDITOR.dom.window(window).getViewPaneSize();
                    var n = e.left,
                      r = e.top;
                    return (
                      e.left + e.width > t.width &&
                        (n -= e.left + e.width - t.width),
                      { x: n, y: (r = r < 0 ? 0 : r) }
                    );
                  },
                },
                {
                  key: "getInteractionPoint",
                  value: function () {
                    var e,
                      t,
                      n,
                      r,
                      o,
                      i = this.props.editorEvent
                        ? this.props.editorEvent.data
                        : null;
                    if (i)
                      return (
                        (e = i.selectionData),
                        (t = i.nativeEvent),
                        (i = { x: i.nativeEvent.pageX, y: e.region.top }),
                        (n = e.region.direction),
                        (o = e.region.endRect),
                        (r = e.region.startRect),
                        (r = void (
                          o &&
                          r &&
                          r.top === o.top &&
                          (n = CKEDITOR.SELECTION_BOTTOM_TO_TOP)
                        )),
                        (o = void 0),
                        (o =
                          i.x && i.y
                            ? ((r = this._getXPoint(e, i.x)),
                              n === CKEDITOR.SELECTION_BOTTOM_TO_TOP
                                ? Math.min(i.y, e.region.top)
                                : Math.max(i.y, this._getYPoint(e, t)))
                            : ((r = e.region.left + e.region.width / 2),
                              n === CKEDITOR.SELECTION_TOP_TO_BOTTOM
                                ? this._getYPoint(e, t)
                                : e.region.top)),
                        { direction: n, x: r, y: o }
                      );
                  },
                },
                {
                  key: "_getXPoint",
                  value: function (e, t) {
                    var n = ((e = e.region).startRect || e).left;
                    e = (e.endRect || e).right;
                    return n < t && t < e
                      ? t
                      : Math.abs(n - t) < Math.abs(e - t)
                      ? n
                      : e;
                  },
                },
                {
                  key: "_getYPoint",
                  value: function (e, t) {
                    var n,
                      r = 0;
                    return e && t
                      ? (n = new CKEDITOR.dom.element(t.target)).$ &&
                        "auto" === n.getStyle("overflow")
                        ? t.target.offsetTop + t.target.offsetHeight
                        : e.region.bottom
                      : r;
                  },
                },
                {
                  key: "getWidgetXYPoint",
                  value: function (e, t, n) {
                    var r = a.default.findDOMNode(this),
                      o = this.props.gutter;
                    return (
                      n === CKEDITOR.SELECTION_TOP_TO_BOTTOM ||
                      n === CKEDITOR.SELECTION_BOTTOM_TO_TOP
                        ? ((e = e - o.left - r.offsetWidth / 2),
                          (t =
                            n === CKEDITOR.SELECTION_TOP_TO_BOTTOM
                              ? t + o.top
                              : t - r.offsetHeight - o.top))
                        : (n !== CKEDITOR.SELECTION_LEFT_TO_RIGHT &&
                            n !== CKEDITOR.SELECTION_RIGHT_TO_LEFT) ||
                          ((e =
                            n === CKEDITOR.SELECTION_LEFT_TO_RIGHT
                              ? e + o.left + r.offsetHeight / 2
                              : e - (3 * r.offsetHeight) / 2 - o.left),
                          (t = t - o.top - r.offsetHeight / 2)),
                      [(e = e < 0 ? 0 : e), (t = t < 0 ? 0 : t)]
                    );
                  },
                },
                {
                  key: "isVisible",
                  value: function () {
                    var e = a.default.findDOMNode(this);
                    return (
                      !!e &&
                      new CKEDITOR.dom.element(e).hasClass(
                        "alloy-editor-visible"
                      )
                    );
                  },
                },
                {
                  key: "moveToPoint",
                  value: function (e, t) {
                    var n = new CKEDITOR.dom.element(
                      a.default.findDOMNode(this)
                    );
                    n.setStyles({
                      left: e[0] + "px",
                      top: e[1] + "px",
                      opacity: 0,
                      pointerEvents: "none",
                    }),
                      n.removeClass("alloy-editor-invisible"),
                      (this._animationFrameId = window.requestAnimationFrame(
                        function () {
                          n.addClass("ae-toolbar-transition"),
                            n.addClass("alloy-editor-visible"),
                            n.setStyles({
                              left: t[0] + "px",
                              top: t[1] + "px",
                              opacity: 1,
                            }),
                            setTimeout(function () {
                              n.setStyles({ pointerEvents: "" });
                            }, 150);
                        }
                      ));
                  },
                },
                {
                  key: "show",
                  value: function () {
                    var e,
                      t,
                      n,
                      r,
                      o,
                      i,
                      l = a.default.findDOMNode(this),
                      u = (u = this.context.editor.get("uiNode"))
                        ? u.scrollTop
                        : 0;
                    !this.isVisible() &&
                      l &&
                      (e = this.getInteractionPoint()) &&
                      ((r = new CKEDITOR.dom.element(l)),
                      (i = o = void 0),
                      (o = t = parseFloat(r.getStyle("left"))),
                      (i = parseFloat(r.getStyle("top"))),
                      this.props.constrainToViewport &&
                        ((o = (r = this.getConstrainedPosition({
                          height: parseFloat(l.offsetHeight),
                          left: o,
                          top: i,
                          width: parseFloat(l.offsetWidth),
                        })).x),
                        (i = r.y)),
                      (n =
                        e.direction === CKEDITOR.SELECTION_TOP_TO_BOTTOM
                          ? this.props.selectionData.region.bottom + u
                          : this.props.selectionData.region.top + u),
                      this.moveToPoint([t, n], [o, i]));
                  },
                },
                {
                  key: "updatePosition",
                  value: function () {
                    var e,
                      t,
                      n,
                      r = this.getInteractionPoint(),
                      o = a.default.findDOMNode(this);
                    r &&
                      o &&
                      ((n = this.context.editor.get("uiNode") || document.body),
                      (t = getComputedStyle(n)),
                      (e = parseInt(t.getPropertyValue("margin-left"), 10)),
                      (t = parseInt(t.getPropertyValue("margin-right"), 10)),
                      (e = e + document.body.clientWidth + t),
                      (t = "BODY" !== n.tagName ? n.scrollTop : 0),
                      ((n = this.getWidgetXYPoint(r.x, r.y, r.direction))[1] +=
                        t),
                      n[0] < 0 && (n[0] = 0),
                      n[0] > e - o.offsetWidth && (n[0] = e - o.offsetWidth),
                      new CKEDITOR.dom.element(o).setStyles({
                        left: n[0] + "px",
                        top: n[1] + "px",
                      }));
                  },
                },
                {
                  key: "getToolbarButtonGroups",
                  value: function (e, t) {
                    var n = this;
                    return (e = u.default.isFunction(e)
                      ? e.call(this) || []
                      : e).reduce(function (r, o) {
                      return Array.isArray(o)
                        ? (r.push(n.getToolbarButtons(o, t)), r)
                        : n.getToolbarButtons(e, t);
                    }, []);
                  },
                },
                {
                  key: "getToolbarButtons",
                  value: function (e, t) {
                    var n = {},
                      r =
                        this.context.editor.get("nativeEditor").config
                          .buttonCfg || {};
                    return (
                      u.default.isFunction(e) && (e = e.call(this) || []),
                      this.filterExclusive(
                        e
                          .filter(function (e) {
                            return (
                              e &&
                              (AlloyEditor.Buttons[e] ||
                                AlloyEditor.Buttons[e.name])
                            );
                          })
                          .map(function (e) {
                            return (
                              u.default.isString(e)
                                ? ((n[e] = r[e]), (e = AlloyEditor.Buttons[e]))
                                : u.default.isString(e.name) &&
                                  ((n[AlloyEditor.Buttons[e.name].key] =
                                    CKEDITOR.tools.merge(r[e], e.cfg)),
                                  (e = AlloyEditor.Buttons[e.name])),
                              e
                            );
                          })
                      ).map(function (e, r) {
                        return (
                          (r = this.mergeExclusiveProps(
                            {
                              editor: this.context.editor,
                              key:
                                "separator" !== e.key ? e.key : e.key + "-" + r,
                              tabKey: e.key,
                              tabIndex:
                                this.props.trigger &&
                                this.props.trigger.props.tabKey === e.key
                                  ? 0
                                  : -1,
                              trigger: this.props.trigger,
                            },
                            e.key
                          )),
                          (r = this.mergeDropdownProps(r, e.key)),
                          t && (r = CKEDITOR.tools.merge(r, t)),
                          (r = CKEDITOR.tools.merge(r, n[e.key])),
                          i.default.createElement(e, r)
                        );
                      }, this)
                    );
                  },
                },
              ]),
              t
            );
          })());
        return (
          (t.contextType = l.default),
          (t.defaultProps = r({}, e.defaultProps, {
            gutter: { left: 0, top: 10 },
            constrainToViewport: !0,
          })),
          n
        );
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (n = n(5)) && n.__esModule ? n : { default: n };
      t.default = function (e, t, n, o) {
        if (!t || !e) throw new Error("extend failed, verify dependencies");
        var i = t.prototype,
          a = Object.create(i);
        return (
          (((e.prototype = a).constructor = e).superclass = i),
          t !== Object &&
            i.constructor === Object.prototype.constructor &&
            (i.constructor = t),
          n && r.default.mix(a, n),
          o && r.default.mix(e, o),
          e
        );
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          embed: function (e) {
            return !(
              !(e = e.data.selectionData).element ||
              "ae_embed" !== e.element.getAttribute("data-widget")
            );
          },
          embedUrl: function (e) {
            return !(
              !(e = e.data.selectionData).element ||
              "embedurl" !== e.element.getAttribute("data-widget")
            );
          },
          header: function (e) {
            var t = e.editor.get("nativeEditor"),
              n = ((e = e.data.selectionData), t.isSelectionEmpty());
            return !(
              e.element ||
              !e.region ||
              n ||
              t.getSelection().getCommonAncestor().isReadOnly() ||
              !t.elementPath().contains(["h1", "h2", "h3", "h4", "h5", "h6"])
            );
          },
          image: function (e) {
            var t = !!(e = e.data.selectionData.element) && !!e.findOne("img"),
              n = !!e && "img" === e.getName();
            return !(!e || (!t && !n));
          },
          link: function (e) {
            var t = (r = e.editor.get("nativeEditor"))
                .getSelection()
                .getRanges()[0],
              n =
                ((e = e.data.selectionData),
                new CKEDITOR.Link(r).getFromSelection()),
              r = r.isSelectionEmpty();
            e = !e.element || "img" !== e.element.getName();
            return !(
              !(r && e && n && n.getText().length !== t.endOffset && n) ||
              n.isReadOnly() ||
              ((r = t),
              (e = n).getText().length === r.endOffset ||
                (e.equals(r.startContainer) &&
                  e.equals(r.endContainer) &&
                  r.startOffset === r.endOffset &&
                  1 === r.endOffset))
            );
          },
          table: function (e) {
            e = e.editor.get("nativeEditor");
            var t = (e = new CKEDITOR.Table(e)).getFromSelection();
            return !(!t || !e.isEditable(t));
          },
          text: function (e) {
            var t = e.editor.get("nativeEditor"),
              n = t.isSelectionEmpty();
            return !(
              (e = e.data.selectionData).element ||
              !e.region ||
              n ||
              t.getSelection().getCommonAncestor().isReadOnly()
            );
          },
        });
    },
    function (e, t, n) {
      "use strict";
      var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
      e.exports = (function () {
        try {
          if (!Object.assign) return;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (e) {
          return;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (
              var n,
                a = (function (e) {
                  if (null == e)
                    throw new TypeError(
                      "Object.assign cannot be called with null or undefined"
                    );
                  return Object(e);
                })(e),
                l = 1;
              l < arguments.length;
              l++
            ) {
              for (var u in (n = Object(arguments[l])))
                o.call(n, u) && (a[u] = n[u]);
              if (r)
                for (var s = r(n), c = 0; c < s.length; c++)
                  i.call(n, s[c]) && (a[s[c]] = n[s[c]]);
            }
            return a;
          };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (n = n(0)) && n.__esModule ? n : { default: n };
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && o(e.prototype, t), n && o(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return this.props.styles && this.props.styles.length
                  ? r.default.createElement(
                      "span",
                      { className: "ae-list-header" },
                      this.props.name
                    )
                  : null;
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.key = "buttonStylesListHeader"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(n(0));
      n = i(n(2));
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      var l = (function (e) {
        function t() {
          var e,
            n = this;
          if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = a(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(o)
              )
            ))._removeStyles = function () {
              var t = e.context.editor.get("nativeEditor");
              t.execCommand("removeFormat"),
                e.props.removeBlocks.forEach(function (e) {
                  (e = new CKEDITOR.style({ element: e })), t.removeStyle(e);
                }),
                t.fire("actionPerformed", e);
            }),
            a(e, e)
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && o(e.prototype, t), n && o(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return r.default.createElement(
                  "li",
                  { role: "option" },
                  r.default.createElement(
                    "button",
                    {
                      className: "ae-toolbar-element",
                      onClick: this._removeStyles,
                      tabIndex: this.props.tabIndex,
                    },
                    AlloyEditor.Strings.normal
                  )
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component);
      (l.contextType = n.default),
        (l.defaultProps = {
          removeBlocks: ["h1", "h2", "h3", "h4", "h5", "h6", "pre"],
        }),
        (l.key = "buttonStylesListItemRemove"),
        (t.default = l);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(2)),
        i = l(n(15));
      n = l(n(8));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      var s = (function (e) {
        function t() {
          var e,
            n = this;
          if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = u(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(o)
              )
            ))._onClick = function () {
              e.props.styleFn
                ? e.props.styleFn()
                : (e.context.editor
                    .get("nativeEditor")
                    .execCommand("removeFormat"),
                  e.applyStyle());
            }),
            u(e, e)
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "componentWillMount",
              value: function () {
                var e = { element: "span", styles: { margin: 0 } };
                e = CKEDITOR.tools.merge(e, this.props.style);
                this._preview = new CKEDITOR.style(e).buildPreview(
                  this.props.name
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e =
                  this.props.name === this.props.activeStyle
                    ? "ae-toolbar-element active"
                    : "ae-toolbar-element";
                return r.default.createElement("button", {
                  className: e,
                  dangerouslySetInnerHTML: { __html: this._preview },
                  onClick: this._onClick,
                  tabIndex: this.props.tabIndex,
                });
              },
            },
          ]),
          t
        );
      })(r.default.Component);
      (s.contextType = o.default),
        (s.key = "buttonStylesListItem"),
        (t.default = (0, i.default)((0, n.default)(s)));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(n(0));
      n = i(n(2));
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          var n = (function (e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n.takePhoto = function () {
              var e = n._videoContainerRef.current,
                t = n._canvasContainerRef.current,
                r = t.getContext("2d"),
                o = n._videoHeight,
                i = n.props.videoWidth;
              i &&
                o &&
                ((t.width = i),
                (t.height = o),
                r.drawImage(e, 0, 0, i, o),
                (r = t.toDataURL("image/png")),
                (e = CKEDITOR.dom.element.createFromHtml(
                  '<img src="' + r + '">'
                )),
                (i = n.context.editor.get("nativeEditor")).insertElement(e),
                n.props.cancelExclusive(),
                i.fire("actionPerformed", n),
                i.fire("imageCameraAdd", e));
            }),
            (n._handleStreamError = function (e) {
              window.alert("An error occurred! " + e);
            }),
            (n._handleStreamSuccess = function (e) {
              var t = n._videoContainerRef.current,
                r = n._canvasContainerRef.current;
              t.addEventListener(
                "canplay",
                function () {
                  var e = t.videoHeight / (t.videoWidth / n.props.videoWidth);
                  isNaN(e) && (e = n.props.videoWidth / (4 / 3)),
                    t.setAttribute("width", n.props.videoWidth),
                    t.setAttribute("height", e),
                    r.setAttribute("width", n.props.videoWidth),
                    r.setAttribute("height", e),
                    (n._videoHeight = e);
                },
                !1
              ),
                (n._stream = e),
                navigator.mozGetUserMedia
                  ? (t.mozSrcObject = e)
                  : (t.srcObject = e),
                t.play(),
                (n._buttonTakePhotoRef.current.disabled = !1);
            }),
            (n._buttonTakePhotoRef = r.default.createRef()),
            (n._canvasContainerRef = r.default.createRef()),
            (n._videoContainerRef = r.default.createRef()),
            n
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && o(e.prototype, t), n && o(e, n);
          })(t, [
            {
              key: "componentDidMount",
              value: function () {
                this._buttonTakePhotoRef.current.focus();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this._stream &&
                  (this._stream.stop
                    ? this._stream.stop()
                    : this._stream.getVideoTracks &&
                      this._stream.getVideoTracks().forEach(function (e) {
                        e.stop();
                      }),
                  (this._stream = null));
              },
            },
            {
              key: "render",
              value: function () {
                return (
                  (
                    navigator.getUserMedia ||
                    navigator.webkitGetUserMedia ||
                    navigator.mozGetUserMedia ||
                    navigator.msGetUserMedia
                  ).call(
                    navigator,
                    { video: !0, audio: !1 },
                    this._handleStreamSuccess,
                    this._handleStreamError
                  ),
                  r.default.createElement(
                    "div",
                    { className: "ae-camera" },
                    r.default.createElement(
                      "video",
                      { ref: this._videoContainerRef },
                      "Video stream not available."
                    ),
                    r.default.createElement(
                      "button",
                      {
                        className: "ae-camera-shoot",
                        onClick: this.takePhoto,
                        ref: this._buttonTakePhotoRef,
                      },
                      "Take photo"
                    ),
                    r.default.createElement("canvas", {
                      className: "ae-camera-canvas",
                      ref: this._canvasContainerRef,
                    })
                  )
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component);
      (a.contextType = n.default),
        (a.defaultProps = { videoWidth: 320 }),
        (a.key = "cameraImage"),
        (t.default = a);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(n(0));
      n = i(n(3));
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && o(e.prototype, t), n && o(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": this.props.description,
                    className: this._getClassName(),
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                  },
                  this.props.description
                );
              },
            },
            {
              key: "_getClassName",
              value: function () {
                return "ae-container ae-toolbar-element";
              },
            },
          ]),
          t
        );
      })(r.default.Component);
      (a.key = "buttonCommandListItem"), (t.default = (0, n.default)(a));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(2)),
        i = l(n(1));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          var n = (function (e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n._clearLink = function () {
              n.setState({ linkHref: "" });
            }),
            (n._embedLink = function () {
              n.context.editor
                .get("nativeEditor")
                .execCommand("embedUrl", { url: n.state.linkHref }),
                n.props.cancelExclusive();
            }),
            (n._focusLinkInput = function () {
              n.linkInput.current.focus();
            }),
            (n._handleKeyDown = function (e) {
              (13 !== e.keyCode && 27 !== e.keyCode) || e.preventDefault(),
                13 === e.keyCode
                  ? n._embedLink()
                  : 27 === e.keyCode &&
                    ((e = n.context.editor.get("nativeEditor")),
                    n.props.cancelExclusive(),
                    e.fire("actionPerformed", n));
            }),
            (n._handleLinkHrefChange = function (e) {
              n.setState({ linkHref: e.target.value });
            }),
            (n._removeEmbed = function () {
              var e = n.context.editor.get("nativeEditor");
              n.state.element
                .getAscendant(function (e) {
                  return e.hasClass("cke_widget_wrapper");
                })
                .remove(),
                e.fire("actionPerformed", n);
            }),
            (n.linkInput = r.default.createRef()),
            (n.state = n.getInitialState()),
            n
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "componentDidMount",
              value: function () {
                (this.props.renderExclusive || this.props.manualSelection) &&
                  (window.requestAnimationFrame
                    ? window.requestAnimationFrame(this._focusLinkInput)
                    : setTimeout(this._focusLinkInput, 0));
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function () {
                this.setState(this.getInitialState());
              },
            },
            {
              key: "getInitialState",
              value: function () {
                var e = void 0,
                  t =
                    (!(t = this.props.context.editor
                      .get("nativeEditor")
                      .getSelection()) ||
                      ((t = t.getSelectedElement()) &&
                        (e = t.findOne('[data-widget="ae_embed"]'))),
                    e ? e.getAttribute("data-ae-embed-url") : "");
                return { element: e, initialLink: { href: t }, linkHref: t };
              },
            },
            {
              key: "render",
              value: function () {
                var e = { opacity: this.state.linkHref ? 1 : 0 };
                return r.default.createElement(
                  "div",
                  { className: "ae-container-edit-link" },
                  r.default.createElement(
                    "button",
                    {
                      "aria-label": AlloyEditor.Strings.deleteEmbed,
                      className: "ae-button",
                      "data-type": "button-embed-remove",
                      disabled: !this.state.element,
                      onClick: this._removeEmbed,
                      tabIndex: this.props.tabIndex,
                      title: AlloyEditor.Strings.deleteEmbed,
                    },
                    r.default.createElement(i.default, {
                      className: "ae-icon-svg-trash",
                      symbol: "trash",
                    })
                  ),
                  r.default.createElement(
                    "div",
                    { className: "ae-container-input xxl" },
                    r.default.createElement("input", {
                      className: "ae-input",
                      onChange: this._handleLinkHrefChange,
                      onKeyDown: this._handleKeyDown,
                      placeholder: AlloyEditor.Strings.editLink,
                      ref: this.linkInput,
                      type: "text",
                      value: this.state.linkHref,
                    }),
                    r.default.createElement(
                      "button",
                      {
                        "aria-label": AlloyEditor.Strings.clearInput,
                        className: "ae-button ae-button-clear",
                        onClick: this._clearLink,
                        style: e,
                        title: AlloyEditor.Strings.clear,
                      },
                      r.default.createElement(i.default, {
                        symbol: "times-clear",
                      })
                    )
                  ),
                  r.default.createElement(
                    "button",
                    {
                      "aria-label": AlloyEditor.Strings.confirm,
                      className: "ae-button",
                      disabled: !this._isValidState(),
                      onClick: this._embedLink,
                      title: AlloyEditor.Strings.confirm,
                    },
                    r.default.createElement(i.default, {
                      className: "ae-icon-svg-check",
                      symbol: "check",
                    })
                  )
                );
              },
            },
            {
              key: "_isValidState",
              value: function () {
                return (
                  this.state.linkHref &&
                  this.state.linkHref !== this.state.initialLink.href
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.contextType = o.default),
        (n.key = "embedEdit"),
        (t.default = o.default.toProps(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = u(n(0)),
        o = u(n(6)),
        i = u(n(2)),
        a = u(n(1));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          var n = (function (e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n._embedVideoURL = function () {
              n.context.editor
                .get("nativeEditor")
                .execCommand("embedUrl", {
                  type: "video",
                  url: n.state.videoURL,
                }),
                n.props.cancelExclusive();
            }),
            (n._focusVideoUrlInput = function () {
              o.default.findDOMNode(n.refs.linkInput).focus();
            }),
            (n._handleKeyDown = function (e) {
              (13 !== e.keyCode && 27 !== e.keyCode) || e.preventDefault(),
                13 === e.keyCode
                  ? n._embedVideoURL()
                  : 27 === e.keyCode && n.props.cancelExclusive();
            }),
            (n._handleVideoURLChange = function (e) {
              n.setState({ videoURL: e.target.value });
            }),
            (n.state = n.getInitialState()),
            n
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && l(e.prototype, t), n && l(e, n);
          })(t, [
            {
              key: "componentDidMount",
              value: function () {
                (this.props.renderExclusive || this.props.manualSelection) &&
                  (window.requestAnimationFrame
                    ? window.requestAnimationFrame(this._focusVideoUrlInput)
                    : setTimeout(this._focusVideoUrlInput, 0));
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function () {
                var e = this.getInitialState();
                this.setState({
                  all: void 0,
                  keys: void 0,
                  new: e,
                  old: void 0,
                });
              },
            },
            {
              key: "getInitialState",
              value: function () {
                var e = void 0,
                  t =
                    (!(t = this.props.context.editor
                      .get("nativeEditor")
                      .getSelection()) ||
                      ((t = t.getSelectedElement()) &&
                        (e = t.findOne('[data-widget="videoembed"]'))),
                    e ? e.getAttribute("data-embed-video-url") : "");
                return {
                  element: e,
                  initialEmbed: { videoURL: t },
                  videoURL: t,
                };
              },
            },
            {
              key: "render",
              value: function () {
                var e = AlloyEditor.Strings.pasteVideoLink,
                  t = { opacity: this.state.videoURL ? 1 : 0 };
                return r.default.createElement(
                  "div",
                  { className: "ae-container-embed-video-edit" },
                  r.default.createElement(
                    "div",
                    { className: "ae-container-input xxl" },
                    r.default.createElement("input", {
                      className: "ae-input",
                      onChange: this._handleVideoURLChange,
                      onKeyDown: this._handleKeyDown,
                      placeholder: e,
                      ref: "linkInput",
                      type: "text",
                      value: this.state.videoURL,
                    }),
                    r.default.createElement("button", {
                      "aria-label": AlloyEditor.Strings.clearInput,
                      className: "ae-button ae-icon-remove",
                      onClick: this._clearLink,
                      style: t,
                      title: AlloyEditor.Strings.clear,
                    })
                  ),
                  r.default.createElement(
                    "button",
                    {
                      "aria-label": AlloyEditor.Strings.confirm,
                      className: "ae-button",
                      disabled: !this._isValidState(),
                      onClick: this._embedVideoURL,
                      title: AlloyEditor.Strings.confirm,
                    },
                    r.default.createElement(a.default, { symbol: "check" })
                  )
                );
              },
            },
            {
              key: "_clearLink",
              value: function () {
                this.setState({ videoURL: "" });
              },
            },
            {
              key: "_isValidState",
              value: function () {
                return (
                  this.state.videoURL &&
                  this.state.videoURL !== this.state.initialEmbed.videoURL
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.contextType = i.default),
        (n.key = "embedVideoEdit"),
        (t.default = i.default.toProps(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(10)),
        i = l(n(12));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          return (
            (e = (function (e, t) {
              if (e)
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))),
            (e.state = { items: [] }),
            e
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "componentWillReceiveProps",
              value: function (e) {
                (e.term && e.term === this.props.term) ||
                  (clearTimeout(this._timeout),
                  e.term
                    ? (this._timeout = setTimeout(
                        this._updateItems,
                        this.props.delay
                      ))
                    : this.setState({ items: [] })),
                  e.autocompleteSelected &&
                    (setTimeout(this.focus, 0),
                    this.props.setAutocompleteState({ selected: !1 }));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this._timeout);
              },
            },
            {
              key: "render",
              value: function () {
                return this.props.expanded && this.state.items.length
                  ? r.default.createElement(
                      i.default,
                      null,
                      this._renderAutocompleteItems(this.state.items)
                    )
                  : null;
              },
            },
            {
              key: "shouldComponentUpdate",
              value: function (e, t) {
                return (
                  e.expanded !== this.props.expanded ||
                  e.term !== this.props.term ||
                  t.items !== this.state.items
                );
              },
            },
            {
              key: "_renderAutocompleteItems",
              value: function (e) {
                var t = this,
                  n = this.props.handleLinkAutocompleteClick;
                return (e = e || []).map(function (e) {
                  var o =
                    t.props.term === e.url
                      ? "ae-toolbar-element active"
                      : "ae-toolbar-element";
                  return r.default.createElement(
                    "li",
                    { key: e.url, role: "option" },
                    r.default.createElement(
                      "button",
                      { className: o, "data-value": e.url, onClick: n },
                      e.title
                    )
                  );
                });
              },
            },
            {
              key: "_updateItems",
              value: function () {
                var e = this;
                this.props.term &&
                  Promise.resolve(this.props.data(this.props.term)).then(
                    function (t) {
                      t.length && !e.props.expanded && e.props.toggleDropdown(),
                        e.setState({ items: t });
                    }
                  );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = {
          circular: !1,
          data: [],
          delay: 100,
          descendants: ".ae-toolbar-element",
          keys: {
            dismiss: [27],
            dismissNext: [39],
            dismissPrev: [37],
            next: [40],
            prev: [38],
          },
        }),
        (n.key = "buttonLinkAutocompleteList"),
        (t.default = (0, o.default)(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n,
                r = arguments[t];
              for (n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = c(n(0)),
        i = c(n(2)),
        a = c(n(5)),
        l = c(n(1)),
        u = c(n(19));
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          var n = (function (e, t) {
              if (e)
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
            r =
              ((e =
                ((n._browseClick = function () {
                  var e = n.context.editor.get("nativeEditor"),
                    t = e.config.documentBrowseLinkUrl,
                    r = e.config.documentBrowseLinkCallback,
                    o = n.linkEditButtonRef.current
                      ? n.linkEditButtonRef.current.state.linkTarget
                      : "";
                  a.default.isFunction(r) &&
                    r.apply(null, [
                      e,
                      t,
                      function (e) {
                        n._updateLink(e.value, o, e.title);
                      },
                    ]);
                }),
                (n._updateLink = function (e, t, r) {
                  var o = n.context.editor.get("nativeEditor"),
                    i = new CKEDITOR.Link(o, { appendProtocol: !1 }),
                    a = ((t = { target: t }), { advance: !0 });
                  e &&
                    (o.plugins &&
                      o.plugins.creole &&
                      !r &&
                      (e = location.origin + e),
                    n.state.element
                      ? ((t.href = e), i.update(t, n.state.element, a))
                      : i.create(e, t, a),
                    o.fire("actionPerformed", n));
                }),
                new CKEDITOR.Link(
                  n.props.context.editor.get("nativeEditor")
                ).getFromSelection())),
              e ? e.getAttribute("href") : "");
          return (
            (n.linkEditButtonRef = o.default.createRef()),
            (n.state = { element: e, linkHref: r }),
            n
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && s(e.prototype, t), n && s(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return o.default.createElement(
                  "div",
                  { className: "ae-container-link-edit-browse" },
                  o.default.createElement(
                    u.default,
                    r({ ref: this.linkEditButtonRef }, this.props)
                  ),
                  o.default.createElement(
                    "button",
                    {
                      "aria-label": "Browse",
                      className: "ae-button",
                      onClick: this._browseClick,
                      title: "browse",
                    },
                    o.default.createElement(l.default, { symbol: "folder" })
                  )
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.contextType = i.default),
        (n.key = "linkEditBrowse"),
        (t.default = i.default.toProps(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(1)),
        i = l(n(35));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = this.props.handleLinkTargetChange,
                  t = this.props.allowedTargets;
                return r.default.createElement(
                  "div",
                  {
                    className:
                      "ae-container-dropdown ae-container-dropdown-medium ae-container-edit-link-target ae-has-dropdown",
                    tabIndex: "0",
                  },
                  r.default.createElement(
                    "button",
                    {
                      "aria-expanded": this.props.expanded,
                      "aria-label": this.props.selectedTarget,
                      className: "ae-toolbar-element",
                      onClick: this.props.toggleDropdown,
                      role: "combobox",
                      tabIndex: this.props.tabIndex,
                      title: this.props.selectedTarget,
                    },
                    r.default.createElement(
                      "div",
                      { className: "ae-container" },
                      r.default.createElement(
                        "span",
                        { className: "ae-container-dropdown-selected-item" },
                        this.props.selectedTarget
                      ),
                      r.default.createElement(o.default, {
                        symbol: "caret-bottom",
                      })
                    )
                  ),
                  this.props.expanded &&
                    r.default.createElement(i.default, {
                      allowedLinkTargets: t,
                      handleLinkTargetChange: e,
                      onDismiss: this.props.toggleDropdown,
                      selectedTarget: this.props.selectedTarget,
                    })
                );
              },
            },
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return (
                  e.expanded !== this.props.expanded ||
                  e.selectedTarget !== this.props.selectedTarget
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.key = "linkTargetEdit"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = u(n(0)),
        o = u(n(6)),
        i = u(n(10)),
        a = u(n(12));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && l(e.prototype, t), n && l(e, n);
          })(t, [
            {
              key: "componentDidMount",
              value: function () {
                o.default.findDOMNode(this).focus();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this._renderListTargets();
                return r.default.createElement(a.default, this.props, e);
              },
            },
            {
              key: "_getAllowedTargetItems",
              value: function () {
                return (
                  this.props.allowedLinkTargets || [
                    { label: AlloyEditor.Strings.linkTargetDefault, value: "" },
                    {
                      label: AlloyEditor.Strings.linkTargetSelf,
                      value: "_self",
                    },
                    {
                      label: AlloyEditor.Strings.linkTargetBlank,
                      value: "_blank",
                    },
                    {
                      label: AlloyEditor.Strings.linkTargetParent,
                      value: "_parent",
                    },
                    { label: AlloyEditor.Strings.linkTargetTop, value: "_top" },
                  ]
                );
              },
            },
            {
              key: "_renderListTargets",
              value: function () {
                var e = this,
                  t = this._getAllowedTargetItems(),
                  n = this.props.handleLinkTargetChange;
                return t.map(function (t) {
                  var o =
                    e.props.selectedTarget === t.value
                      ? "ae-toolbar-element active"
                      : "ae-toolbar-element";
                  return r.default.createElement(
                    "li",
                    { key: t.value, role: "option" },
                    r.default.createElement(
                      "button",
                      { className: o, "data-value": t.value, onClick: n },
                      t.label
                    )
                  );
                });
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = {
          circular: !0,
          descendants: ".ae-toolbar-element",
          keys: {
            dismiss: [27],
            dismissNext: [39],
            dismissPrev: [37],
            next: [40],
            prev: [38],
          },
        }),
        (n.key = "targetList"),
        (t.default = (0, i.default)(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = d(n(0)),
        o = d(n(2)),
        i = d(n(11)),
        a = d(n(20)),
        l = d(n(4)),
        u = d(n(1)),
        s = d(n(19));
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      (n = (function (e) {
        function t() {
          var e,
            n = this;
          if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = f(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(o)
              )
            ))._requestExclusive = function () {
              e.props.requestExclusive(t.key);
            }),
            f(e, e)
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && c(e.prototype, t), n && c(e, n);
          })(t, [
            {
              key: "isActive",
              value: function () {
                return (
                  null !==
                  new CKEDITOR.Link(
                    this.context.editor.get("nativeEditor")
                  ).getFromSelection()
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t = "ae-button " + this.getStateClasses();
                return this.props.renderExclusive
                  ? ((e = this.mergeButtonCfgProps()),
                    r.default.createElement(s.default, e))
                  : r.default.createElement(
                      "button",
                      {
                        "aria-label": AlloyEditor.Strings.link,
                        className: t,
                        "data-type": "button-link",
                        onClick: this._requestExclusive,
                        tabIndex: this.props.tabIndex,
                        title: AlloyEditor.Strings.link,
                      },
                      r.default.createElement(u.default, { symbol: "link" })
                    );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.contextType = o.default),
        (n.defaultProps = {
          keystroke: {
            fn: "_requestExclusive",
            keys: CKEDITOR.CTRL + 76,
            name: "link",
          },
        }),
        (n.key = "link"),
        (t.default = (0, a.default)((0, i.default)((0, l.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(2)),
        i = l(n(1));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = "cols",
        s = "rows";
      n = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          var n = (function (e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n._createTable = function () {
              var e = n.context.editor.get("nativeEditor"),
                t = new CKEDITOR.Table(e),
                r = (o = n.state).cols,
                o = o.rows;
              t.create({
                attrs: n.props.tableAttributes,
                cols: Math.max(1, r),
                rows: Math.max(1, o),
              }),
                n.props.cancelExclusive(),
                e.fire("actionPerformed", n);
            }),
            (n._handleChange = function (e, t) {
              var r;
              n.setState(
                ((r = {}),
                (t = t.target.value),
                e in r
                  ? Object.defineProperty(r, e, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[e] = t),
                r)
              );
            }),
            (n._handleKeyDown = function (e) {
              (13 !== e.keyCode && 27 !== e.keyCode) || e.preventDefault(),
                13 === e.keyCode
                  ? n._createTable()
                  : 27 === e.keyCode && n.props.cancelExclusive();
            }),
            (n.rowsRef = r.default.createRef()),
            (n.colsRef = r.default.createRef()),
            (n.state = { cols: 3, rows: 3 }),
            n
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "componentDidMount",
              value: function () {
                this.rowsRef.current.focus();
              },
            },
            {
              key: "render",
              value: function () {
                var e = (t = Date.now()) + s,
                  t = t + u;
                return r.default.createElement(
                  "div",
                  { className: "ae-container-edit-table" },
                  r.default.createElement(
                    "label",
                    { htmlFor: e },
                    AlloyEditor.Strings.rows
                  ),
                  r.default.createElement(
                    "div",
                    { className: "ae-container-input small" },
                    r.default.createElement("input", {
                      className: "ae-input",
                      id: e,
                      min: 1,
                      onChange: this._handleChange.bind(this, s),
                      onKeyDown: this._handleKeyDown,
                      placeholder: "Rows",
                      ref: this.rowsRef,
                      type: "number",
                      value: this.state.rows,
                    })
                  ),
                  r.default.createElement(
                    "label",
                    { htmlFor: t },
                    AlloyEditor.Strings.columns
                  ),
                  r.default.createElement(
                    "div",
                    { className: "ae-container-input small" },
                    r.default.createElement("input", {
                      className: "ae-input",
                      id: t,
                      min: 1,
                      onChange: this._handleChange.bind(this, u),
                      onKeyDown: this._handleKeyDown,
                      placeholder: "Colums",
                      ref: this.colsRef,
                      type: "number",
                      value: this.state.cols,
                    })
                  ),
                  r.default.createElement(
                    "button",
                    {
                      "aria-label": "Confirm",
                      className: "ae-button",
                      onClick: this._createTable,
                    },
                    r.default.createElement(i.default, { symbol: "check" })
                  )
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component);
      (n.contextType = o.default),
        (n.defaultProps = {
          tableAttributes: {
            border: 1,
            cellPadding: 0,
            cellSpacing: 0,
            style: "table-layout: fixed; width: 100%;",
          },
        }),
        (n.key = "tableEdit"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (n = {
          propTypes: {
            editorEvent: ((n = n(7)) && n.__esModule ? n : { default: n })
              .default.object,
          },
          getInteractionPoint: function () {
            var e,
              t,
              n,
              r,
              o,
              i = this.props.editorEvent ? this.props.editorEvent.data : null;
            if (i)
              return (
                (e = i.selectionData),
                (t = i.nativeEvent),
                (i = { x: i.nativeEvent.pageX, y: e.region.top }),
                (n = e.region.direction),
                (o = e.region.endRect),
                (r = e.region.startRect),
                (r = void (
                  o &&
                  r &&
                  r.top === o.top &&
                  (n = CKEDITOR.SELECTION_BOTTOM_TO_TOP)
                )),
                (o = void 0),
                (o =
                  i.x && i.y
                    ? ((r = this._getXPoint(e, i.x)),
                      n === CKEDITOR.SELECTION_BOTTOM_TO_TOP
                        ? Math.min(i.y, e.region.top)
                        : Math.max(i.y, this._getYPoint(e, t)))
                    : ((r = e.region.left + e.region.width / 2),
                      n === CKEDITOR.SELECTION_TOP_TO_BOTTOM
                        ? this._getYPoint(e, t)
                        : e.region.top)),
                { direction: n, x: r, y: o }
              );
          },
          _getXPoint: function (e, t) {
            var n = ((e = e.region).startRect || e).left;
            e = (e.endRect || e).right;
            return n < t && t < e
              ? t
              : Math.abs(n - t) < Math.abs(e - t)
              ? n
              : e;
          },
          _getYPoint: function (e, t) {
            var n,
              r = 0;
            return e && t
              ? (n = new CKEDITOR.dom.element(t.target)).$ &&
                "auto" === n.getStyle("overflow")
                ? t.target.offsetTop + t.target.offsetHeight
                : e.region.bottom
              : r;
          },
        }),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (n = n(5)) && n.__esModule ? n : { default: n };
      function o(e) {
        (this.__config__ = e || {}), (this.__ATTRS__ = {});
      }
      (o.prototype = {
        constructor: o,
        get: function (e) {
          var t = this.constructor.ATTRS[e];
          if (t)
            return (
              this._isInitialized(e) || this._init(e),
              (e = this.__ATTRS__[e]),
              t.getter ? this._callStringOrFunction(t.getter, e) : e
            );
        },
        set: function (e, t) {
          var n = this.constructor.ATTRS[e];
          n &&
            (this._isInitialized(e) || this._init(e),
            n.readOnly ||
              (n.writeOnce && this._isInitialized(e)) ||
              (n.validator && !this._callStringOrFunction(n.validator, t)) ||
              (n.setter && (t = this._callStringOrFunction(n.setter, t)),
              (this.__ATTRS__[e] = t)));
        },
        _callStringOrFunction: function (e, t) {
          var n = null;
          return (
            r.default.isArray(t) || (t = [t]),
            r.default.isString(e) && r.default.isFunction(this[e])
              ? (n = this[e].apply(
                  this,
                  (function (e) {
                    if (Array.isArray(e)) {
                      for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                      return n;
                    }
                    return Array.from(e);
                  })(t)
                ))
              : r.default.isFunction(e) && (n = e.apply(this, t)),
            n
          );
        },
        _init: function (e) {
          var t = void 0,
            n = this.constructor.ATTRS[e],
            r = Object.prototype.hasOwnProperty.call(n, "value"),
            o = Object.prototype.hasOwnProperty.call(this.__config__, e);
          if (n.valueFn)
            (t = this._callStringOrFunction(n.valueFn, t)),
              (this.__ATTRS__[e] = t);
          else if (n.readOnly) t = n.value;
          else if (n.writeOnce)
            if (o) t = this.__config__[e];
            else {
              if (!r) return;
              t = n.value;
            }
          else o ? (t = this.__config__[e]) : r && (t = n.value);
          if (n.validator && o && !this._callStringOrFunction(n.validator, t)) {
            if (!r) return;
            t = n.value;
          }
          n.setter && o && (t = this._callStringOrFunction(n.setter, t)),
            (this.__ATTRS__[e] = t);
        },
        _isInitialized: function (e) {
          return Object.prototype.hasOwnProperty.call(this.__ATTRS__, e);
        },
      }),
        (t.default = o);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          table: function () {
            return "ae-arrow-box ae-arrow-box-bottom";
          },
        });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (n = n(6)) && n.__esModule ? n : { default: n };
      function o(e, t) {
        var n = r.default.findDOMNode(e),
          o =
            (d = e.context.editor.get("nativeEditor")).config.uiNode ||
            document.body,
          a = getComputedStyle(o),
          l = parseInt(a.getPropertyValue("margin-left"), 10),
          u =
            ((a = parseInt(a.getPropertyValue("margin-right"), 10)),
            (l = l + o.clientWidth + a),
            (a = n.offsetWidth / 2),
            new CKEDITOR.dom.window(window).getScrollPosition()),
          s = e.props.gutter || i,
          c = e.getWidgetXYPoint(
            t.left + t.width / 2 - u.x,
            t.top + u.y,
            CKEDITOR.SELECTION_BOTTOM_TO_TOP
          ),
          d = d.getSelection().getRanges(),
          f = 0,
          p =
            (!d ||
              1 !== d.length ||
              ("TD" !==
                (p = (d =
                  (d = d[0].startContainer).$.nodeType !== Node.ELEMENT_NODE
                    ? d.getParent()
                    : d).$.nodeName) &&
                "TH" !== p) ||
              (f = d.getClientRect().y - t.top),
            o ? o.scrollTop : 0);
        (d = [
          t.left + t.width / 2 - a - u.x,
          t.top + f - n.offsetHeight + u.y - s.top + p,
        ])[0] < 0
          ? (d[0] = 0)
          : d[0] > l - n.offsetWidth && (d[0] = l - n.offsetWidth),
          e.moveToPoint(c, d);
      }
      var i = { left: 0, top: 0 };
      t.default = {
        image: function (e) {
          var t =
            e.selectionData ||
            (e.editorEvent ? e.editorEvent.data.selectionData : null);
          if (t && t.element)
            return (
              (e = (e = e.editor.get("nativeEditor").config.uiNode)
                ? e.scrollTop
                : 0),
              ((t = t.element.getClientRect()).top += e),
              o(this, t),
              !0
            );
        },
        table: function (e) {
          var t = (t = (e = e.editor.get("nativeEditor")).config.uiNode)
            ? t.scrollTop
            : 0;
          return (
            ((e = new CKEDITOR.Table(e)
              .getFromSelection()
              .getClientRect()).top += t),
            o(this, e),
            !0
          );
        },
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(n(40)),
        o = i(n(41));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (r = [
        {
          name: "embed",
          buttons: ["embedRemove", "embedEdit"],
          test: (n = i(n(23))).default.embed,
        },
        {
          name: "embedUrl",
          buttons: ["embedVideo", "embedVideoEdit"],
          test: n.default.embedUrl,
        },
        { name: "link", buttons: ["linkEdit"], test: n.default.link },
        {
          name: "image",
          buttons: ["imageLeft", "imageCenter", "imageRight", "removeImage"],
          setPosition: o.default.image,
          test: n.default.image,
        },
        {
          name: "text",
          buttons: {
            full: [
              [
                "Font",
                "FontSize",
                "separator",
                "bold",
                "italic",
                "underline",
                "strike",
                "separator",
                "link",
              ],
              [
                "paragraphAlign",
                "separator",
                "ul",
                "ol",
                "separator",
                "h1",
                "h2",
                "separator",
                "indentBlock",
                "outdentBlock",
                "separator",
                "TextColor",
                "BGColor",
                "separator",
                "code",
                "quote",
                "separator",
                "removeFormat",
              ],
            ],
            simple: ["styles", "bold", "italic", "underline", "link"],
          },
          test: n.default.text,
        },
        {
          name: "table",
          buttons: [
            "tableHeading",
            "tableRow",
            "tableColumn",
            "tableCell",
            "tableRemove",
          ],
          getArrowBoxClasses: r.default.table,
          setPosition: o.default.table,
          test: n.default.table,
        },
      ]),
        (t.default = r);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.embedurl = void 0),
        n(126),
        n(127),
        n(128),
        n(129),
        n(130),
        n(131);
      var r = (r = n(133)) && r.__esModule ? r : { default: r };
      n(136), n(137), n(138), n(139), n(140), n(141), (t.embedurl = r.default);
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(14),
        o =
          ((t =
            (n.d(t, "AlloyEditor", function () {
              return r;
            }),
            n(0))),
          (t = n.n(t)),
          n(7));
      o = n.n(o);
      "undefined" != typeof window &&
        ((window.CKEDITOR.disableAutoInline = !0),
        ((window.AlloyEditor = r).React = t.a),
        (r.React.PropTypes = o.a),
        (r.VERSION = n(153)));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(15),
        o =
          (Object.defineProperty(t, "ButtonActionStyle", {
            enumerable: !0,
            get: function () {
              return h(r).default;
            },
          }),
          n(9)),
        i =
          (Object.defineProperty(t, "ButtonCommandActive", {
            enumerable: !0,
            get: function () {
              return h(o).default;
            },
          }),
          n(3)),
        a =
          (Object.defineProperty(t, "ButtonCommand", {
            enumerable: !0,
            get: function () {
              return h(i).default;
            },
          }),
          n(11)),
        l =
          (Object.defineProperty(t, "ButtonKeystroke", {
            enumerable: !0,
            get: function () {
              return h(a).default;
            },
          }),
          n(20)),
        u =
          (Object.defineProperty(t, "ButtonProps", {
            enumerable: !0,
            get: function () {
              return h(l).default;
            },
          }),
          n(4)),
        s =
          (Object.defineProperty(t, "ButtonStateClasses", {
            enumerable: !0,
            get: function () {
              return h(u).default;
            },
          }),
          n(8)),
        c =
          (Object.defineProperty(t, "ButtonStyle", {
            enumerable: !0,
            get: function () {
              return h(s).default;
            },
          }),
          n(21)),
        d =
          (Object.defineProperty(t, "ToolbarButtons", {
            enumerable: !0,
            get: function () {
              return h(c).default;
            },
          }),
          n(17)),
        f =
          (Object.defineProperty(t, "WidgetDropdown", {
            enumerable: !0,
            get: function () {
              return h(d).default;
            },
          }),
          n(18)),
        p =
          (Object.defineProperty(t, "WidgetExclusive", {
            enumerable: !0,
            get: function () {
              return h(f).default;
            },
          }),
          n(10));
      function h(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "WidgetFocusManager", {
        enumerable: !0,
        get: function () {
          return h(p).default;
        },
      });
    },
    function (e, t, n) {
      "use strict";
      var r = n(24),
        o = (n = "function" == typeof Symbol && Symbol.for)
          ? Symbol.for("react.element")
          : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        a = n ? Symbol.for("react.fragment") : 60107,
        l = n ? Symbol.for("react.strict_mode") : 60108,
        u = n ? Symbol.for("react.profiler") : 60114,
        s = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        h = n ? Symbol.for("react.memo") : 60115,
        m = n ? Symbol.for("react.lazy") : 60116,
        y = "function" == typeof Symbol && Symbol.iterator;
      function b(e) {
        for (
          var t,
            n,
            r = arguments.length - 1,
            o = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            i = 0;
          i < r;
          i++
        )
          o += "&args[]=" + encodeURIComponent(arguments[i + 1]);
        var a = !1,
          l =
            ((e =
              "Minified React error #" +
              e +
              "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. "),
            o);
        if (!a)
          throw (
            ((a = void 0) === e
              ? (a = Error(
                  "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                ))
              : ((t = [l, void 0, void 0, void 0, void 0, void 0]),
                (n = 0),
                ((a = Error(
                  e.replace(/%s/g, function () {
                    return t[n++];
                  })
                )).name = "Invariant Violation")),
            (a.framesToPop = 1),
            a)
          );
      }
      var g = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        v = {};
      function _(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || g);
      }
      function E() {}
      function w(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || g);
      }
      (_.prototype.isReactComponent = {}),
        (_.prototype.setState = function (e, t) {
          "object" != typeof e &&
            "function" != typeof e &&
            null != e &&
            b("85"),
            this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (_.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (E.prototype = _.prototype);
      var O =
          (((n = w.prototype = new E()).constructor = w),
          r(n, _.prototype),
          (n.isPureReactComponent = !0),
          { current: null }),
        k = { current: null },
        T = Object.prototype.hasOwnProperty,
        C = { key: !0, ref: !0, __self: !0, __source: !0 };
      function x(e, t, n) {
        var r = void 0,
          i = {},
          a = null,
          l = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (a = "" + t.key),
          t))
            T.call(t, r) && !C.hasOwnProperty(r) && (i[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) i.children = n;
        else if (1 < u) {
          for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in (u = e.defaultProps)) void 0 === i[r] && (i[r] = u[r]);
        return {
          $$typeof: o,
          type: e,
          key: a,
          ref: l,
          props: i,
          _owner: k.current,
        };
      }
      function S(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o;
      }
      var P = /\/+/g,
        I = [];
      function D(e, t, n, r) {
        var o;
        return I.length
          ? (((o = I.pop()).result = e),
            (o.keyPrefix = t),
            (o.func = n),
            (o.context = r),
            (o.count = 0),
            o)
          : { result: e, keyPrefix: t, func: n, context: r, count: 0 };
      }
      function R(e) {
        (e.result = null),
          (e.keyPrefix = null),
          (e.func = null),
          (e.context = null),
          (e.count = 0),
          I.length < 10 && I.push(e);
      }
      function j(e, t, n) {
        return null == e
          ? 0
          : (function e(t, n, r, a) {
              var l = !1;
              if (
                null ===
                (t =
                  "undefined" != (s = typeof t) && "boolean" !== s ? t : null)
              )
                l = !0;
              else
                switch (s) {
                  case "string":
                  case "number":
                    l = !0;
                    break;
                  case "object":
                    switch (t.$$typeof) {
                      case o:
                      case i:
                        l = !0;
                    }
                }
              if (l) return r(a, t, "" === n ? "." + A(t, 0) : n), 1;
              if (((l = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
                for (var u = 0; u < t.length; u++) {
                  var s,
                    c = n + A((s = t[u]), u);
                  l += e(s, c, r, a);
                }
              else if (
                "function" ==
                typeof (c =
                  null !== t &&
                  "object" == typeof t &&
                  "function" == typeof (c = (y && t[y]) || t["@@iterator"])
                    ? c
                    : null)
              )
                for (t = c.call(t), u = 0; !(s = t.next()).done; )
                  l += e((s = s.value), (c = n + A(s, u++)), r, a);
              else
                "object" === s &&
                  b(
                    "31",
                    "[object Object]" == (r = "" + t)
                      ? "object with keys {" + Object.keys(t).join(", ") + "}"
                      : r,
                    ""
                  );
              return l;
            })(e, "", t, n);
      }
      function A(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? ((e = e.key),
            (n = { "=": "=0", ":": "=2" }),
            "$" +
              ("" + e).replace(/[=:]/g, function (e) {
                return n[e];
              }))
          : t.toString(36);
        var n;
      }
      function N(e, t) {
        e.func.call(e.context, t, e.count++);
      }
      function M(e, t, n) {
        var r = e.result,
          i = e.keyPrefix;
        (e = e.func.call(e.context, t, e.count++)),
          Array.isArray(e)
            ? K(e, r, n, function (e) {
                return e;
              })
            : null != e &&
              (S(e) &&
                ((t =
                  i +
                  (!(i = e).key || (t && t.key === e.key)
                    ? ""
                    : ("" + e.key).replace(P, "$&/") + "/") +
                  n),
                (e = {
                  $$typeof: o,
                  type: i.type,
                  key: t,
                  ref: i.ref,
                  props: i.props,
                  _owner: i._owner,
                })),
              r.push(e));
      }
      function K(e, t, n, r, o) {
        var i = "";
        j(
          e,
          M,
          (t = D(
            t,
            (i = null != n ? ("" + n).replace(P, "$&/") + "/" : i),
            r,
            o
          ))
        ),
          R(t);
      }
      function L() {
        var e = O.current;
        return null === e && b("321"), e;
      }
      (n = {
        Children: {
          map: function (e, t, n) {
            if (null == e) return e;
            var r = [];
            return K(e, r, null, t, n), r;
          },
          forEach: function (e, t, n) {
            if (null == e) return e;
            j(e, N, (t = D(null, null, t, n))), R(t);
          },
          count: function (e) {
            return j(
              e,
              function () {
                return null;
              },
              null
            );
          },
          toArray: function (e) {
            var t = [];
            return (
              K(e, t, null, function (e) {
                return e;
              }),
              t
            );
          },
          only: function (e) {
            return S(e) || b("143"), e;
          },
        },
        createRef: function () {
          return { current: null };
        },
        Component: _,
        PureComponent: w,
        createContext: function (e, t) {
          return (
            ((e = {
              $$typeof: c,
              _calculateChangedBits: (t = void 0 === t ? null : t),
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: s, _context: e }),
            (e.Consumer = e)
          );
        },
        forwardRef: function (e) {
          return { $$typeof: f, render: e };
        },
        lazy: function (e) {
          return { $$typeof: m, _ctor: e, _status: -1, _result: null };
        },
        memo: function (e, t) {
          return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
        },
        useCallback: function (e, t) {
          return L().useCallback(e, t);
        },
        useContext: function (e, t) {
          return L().useContext(e, t);
        },
        useEffect: function (e, t) {
          return L().useEffect(e, t);
        },
        useImperativeHandle: function (e, t, n) {
          return L().useImperativeHandle(e, t, n);
        },
        useDebugValue: function () {},
        useLayoutEffect: function (e, t) {
          return L().useLayoutEffect(e, t);
        },
        useMemo: function (e, t) {
          return L().useMemo(e, t);
        },
        useReducer: function (e, t, n) {
          return L().useReducer(e, t, n);
        },
        useRef: function (e) {
          return L().useRef(e);
        },
        useState: function (e) {
          return L().useState(e);
        },
        Fragment: a,
        StrictMode: l,
        Suspense: p,
        createElement: x,
        cloneElement: function (e, t, n) {
          null == e && b("267", e);
          var i = void 0,
            a = r({}, e.props),
            l = e.key,
            u = e.ref,
            s = e._owner;
          if (null != t) {
            void 0 !== t.ref && ((u = t.ref), (s = k.current)),
              void 0 !== t.key && (l = "" + t.key);
            var c = void 0;
            for (i in (e.type &&
              e.type.defaultProps &&
              (c = e.type.defaultProps),
            t))
              T.call(t, i) &&
                !C.hasOwnProperty(i) &&
                (a[i] = (void 0 === t[i] && void 0 !== c ? c : t)[i]);
          }
          if (1 == (i = arguments.length - 2)) a.children = n;
          else if (1 < i) {
            c = Array(i);
            for (var d = 0; d < i; d++) c[d] = arguments[d + 2];
            a.children = c;
          }
          return {
            $$typeof: o,
            type: e.type,
            key: l,
            ref: u,
            props: a,
            _owner: s,
          };
        },
        createFactory: function (e) {
          var t = x.bind(null, e);
          return (t.type = e), t;
        },
        isValidElement: S,
        version: "16.8.5",
        unstable_ConcurrentMode: d,
        unstable_Profiler: u,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: O,
          ReactCurrentOwner: k,
          assign: r,
        },
      }),
        (e.exports = n.default || n);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        o = n(24),
        i = n(48);
      function a(e) {
        for (
          var t,
            n,
            r = arguments.length - 1,
            o = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            i = 0;
          i < r;
          i++
        )
          o += "&args[]=" + encodeURIComponent(arguments[i + 1]);
        var a = !1,
          l =
            ((e =
              "Minified React error #" +
              e +
              "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. "),
            o);
        if (!a)
          throw (
            ((a = void 0) === e
              ? (a = Error(
                  "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                ))
              : ((t = [l, void 0, void 0, void 0, void 0, void 0]),
                (n = 0),
                ((a = Error(
                  e.replace(/%s/g, function () {
                    return t[n++];
                  })
                )).name = "Invariant Violation")),
            (a.framesToPop = 1),
            a)
          );
      }
      r || a("227");
      var l = !1,
        u = null,
        s = !1,
        c = null,
        d = {
          onError: function (e) {
            (l = !0), (u = e);
          },
        };
      function f(e, t, n, r, o, i, a, s, c) {
        (l = !1),
          (u = null),
          function (e, t, n, r, o, i, a, l, u) {
            var s = Array.prototype.slice.call(arguments, 3);
            try {
              t.apply(n, s);
            } catch (e) {
              this.onError(e);
            }
          }.apply(d, arguments);
      }
      var p = null,
        h = {};
      function m() {
        if (p)
          for (var e in h) {
            var t = h[e],
              n = p.indexOf(e);
            if ((-1 < n || a("96", e), !b[n]))
              for (var r in (t.extractEvents || a("97", e),
              (n = (b[n] = t).eventTypes))) {
                var o = void 0,
                  i = n[r],
                  l = t,
                  u = r,
                  s =
                    (g.hasOwnProperty(u) && a("99", u),
                    (g[u] = i).phasedRegistrationNames);
                if (s) {
                  for (o in s) s.hasOwnProperty(o) && y(s[o], l, u);
                  o = !0;
                } else
                  o = !!i.registrationName && (y(i.registrationName, l, u), !0);
                o || a("98", r, e);
              }
          }
      }
      function y(e, t, n) {
        v[e] && a("100", e), (v[e] = t), (_[e] = t.eventTypes[n].dependencies);
      }
      var b = [],
        g = {},
        v = {},
        _ = {},
        E = null,
        w = null,
        O = null;
      function k(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = O(n)),
          (function () {
            var e;
            f.apply(this, arguments),
              l &&
                (l ? ((e = u), (l = !1), (u = null)) : (a("198"), (e = void 0)),
                s || ((s = !0), (c = e)));
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function T(e, t) {
        return (
          null == t && a("30"),
          null == e
            ? t
            : Array.isArray(e)
            ? (Array.isArray(t) ? e.push.apply(e, t) : e.push(t), e)
            : Array.isArray(t)
            ? [e].concat(t)
            : [e, t]
        );
      }
      function C(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
      }
      var x = null;
      function S(e) {
        if (e) {
          var t = e._dispatchListeners,
            n = e._dispatchInstances;
          if (Array.isArray(t))
            for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
              k(e, t[r], n[r]);
          else t && k(e, t, n);
          (e._dispatchListeners = null),
            (e._dispatchInstances = null),
            e.isPersistent() || e.constructor.release(e);
        }
      }
      function P(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = E(n);
        if (!r) return null;
        switch (((n = r[t]), t)) {
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
            e = !(r = (r = !r.disabled)
              ? r
              : !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                ));
            break;
          default:
            e = !1;
        }
        return e
          ? null
          : (n && "function" != typeof n && a("231", t, typeof n), n);
      }
      function I(e) {
        if (
          ((e = x = null !== e ? T(x, e) : x),
          (x = null),
          e && (C(e, S), x && a("95"), s))
        )
          throw ((e = c), (s = !1), (c = null), e);
      }
      n = {
        injectEventPluginOrder: function (e) {
          p && a("101"), (p = Array.prototype.slice.call(e)), m();
        },
        injectEventPluginsByName: function (e) {
          var t,
            n,
            r = !1;
          for (t in e)
            e.hasOwnProperty(t) &&
              ((n = e[t]),
              (h.hasOwnProperty(t) && h[t] === n) ||
                (h[t] && a("102", t), (h[t] = n), (r = !0)));
          r && m();
        },
      };
      var D =
          "__reactInternalInstance$" +
          (he = Math.random().toString(36).slice(2)),
        R = "__reactEventHandlers$" + he;
      function j(e) {
        if (e[D]) return e[D];
        for (; !e[D]; ) {
          if (!e.parentNode) return null;
          e = e.parentNode;
        }
        return 5 === (e = e[D]).tag || 6 === e.tag ? e : null;
      }
      function A(e) {
        return !(e = e[D]) || (5 !== e.tag && 6 !== e.tag) ? null : e;
      }
      function N(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        a("33");
      }
      function M(e) {
        return e[R] || null;
      }
      function K(e) {
        for (; (e = e.return) && 5 !== e.tag; );
        return e || null;
      }
      function L(e, t, n) {
        (t = P(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
          ((n._dispatchListeners = T(n._dispatchListeners, t)),
          (n._dispatchInstances = T(n._dispatchInstances, e)));
      }
      function F(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
          for (var t = e._targetInst, n = []; t; ) n.push(t), (t = K(t));
          for (t = n.length; 0 < t--; ) L(n[t], "captured", e);
          for (t = 0; t < n.length; t++) L(n[t], "bubbled", e);
        }
      }
      function z(e, t, n) {
        e &&
          n &&
          n.dispatchConfig.registrationName &&
          (t = P(e, n.dispatchConfig.registrationName)) &&
          ((n._dispatchListeners = T(n._dispatchListeners, t)),
          (n._dispatchInstances = T(n._dispatchInstances, e)));
      }
      function B(e) {
        e && e.dispatchConfig.registrationName && z(e._targetInst, null, e);
      }
      function U(e) {
        C(e, F);
      }
      var H = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function $(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var W = {
          animationend: $("Animation", "AnimationEnd"),
          animationiteration: $("Animation", "AnimationIteration"),
          animationstart: $("Animation", "AnimationStart"),
          transitionend: $("Transition", "TransitionEnd"),
        },
        V = {},
        q = {};
      function G(e) {
        if (V[e]) return V[e];
        if (!W[e]) return e;
        var t,
          n = W[e];
        for (t in n) if (n.hasOwnProperty(t) && t in q) return (V[e] = n[t]);
        return e;
      }
      H &&
        ((q = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete W.animationend.animation,
          delete W.animationiteration.animation,
          delete W.animationstart.animation),
        "TransitionEvent" in window || delete W.transitionend.transition);
      var Y = G("animationend"),
        Q = G("animationiteration"),
        X = G("animationstart"),
        J = G("transitionend"),
        Z =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
        ee = null,
        te = null,
        ne = null;
      function re() {
        if (ne) return ne;
        for (
          var e = te,
            t = e.length,
            n = ("value" in ee) ? ee.value : ee.textContent,
            r = n.length,
            o = 0;
          o < t && e[o] === n[o];
          o++
        );
        for (var i = t - o, a = 1; a <= i && e[t - a] === n[r - a]; a++);
        return (ne = n.slice(o, 1 < a ? 1 - a : void 0));
      }
      function oe() {
        return !0;
      }
      function ie() {
        return !1;
      }
      function ae(e, t, n, r) {
        for (var o in ((this.dispatchConfig = e),
        (this._targetInst = t),
        (this.nativeEvent = n),
        (e = this.constructor.Interface)))
          e.hasOwnProperty(o) &&
            ((t = e[o])
              ? (this[o] = t(n))
              : "target" === o
              ? (this.target = r)
              : (this[o] = n[o]));
        return (
          (this.isDefaultPrevented = (
            null != n.defaultPrevented
              ? n.defaultPrevented
              : !1 === n.returnValue
          )
            ? oe
            : ie),
          (this.isPropagationStopped = ie),
          this
        );
      }
      function le(e, t, n, r) {
        var o;
        return this.eventPool.length
          ? ((o = this.eventPool.pop()), this.call(o, e, t, n, r), o)
          : new this(e, t, n, r);
      }
      function ue(e) {
        e instanceof this || a("279"),
          e.destructor(),
          this.eventPool.length < 10 && this.eventPool.push(e);
      }
      function se(e) {
        (e.eventPool = []), (e.getPooled = le), (e.release = ue);
      }
      o(ae.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = oe));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = oe));
        },
        persist: function () {
          this.isPersistent = oe;
        },
        isPersistent: ie,
        destructor: function () {
          for (var e in this.constructor.Interface) this[e] = null;
          (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
            (this.isPropagationStopped = this.isDefaultPrevented = ie),
            (this._dispatchInstances = this._dispatchListeners = null);
        },
      }),
        (ae.Interface = {
          type: null,
          target: null,
          currentTarget: function () {
            return null;
          },
          eventPhase: null,
          bubbles: null,
          cancelable: null,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: null,
          isTrusted: null,
        }),
        (ae.extend = function (e) {
          function t() {}
          function n() {
            return r.apply(this, arguments);
          }
          var r = this,
            i = ((t.prototype = r.prototype), new t());
          return (
            o(i, n.prototype),
            (((n.prototype = i).constructor = n).Interface = o(
              {},
              r.Interface,
              e
            )),
            (n.extend = r.extend),
            se(n),
            n
          );
        }),
        se(ae);
      var ce = ae.extend({ data: null }),
        de = ae.extend({ data: null }),
        fe = [9, 13, 27, 32],
        pe = H && "CompositionEvent" in window,
        he = null,
        me =
          (H && "documentMode" in document && (he = document.documentMode),
          H && "TextEvent" in window && !he),
        ye = H && (!pe || (he && 8 < he && he <= 11)),
        be = String.fromCharCode(32),
        ge = {
          beforeInput: {
            phasedRegistrationNames: {
              bubbled: "onBeforeInput",
              captured: "onBeforeInputCapture",
            },
            dependencies: ["compositionend", "keypress", "textInput", "paste"],
          },
          compositionEnd: {
            phasedRegistrationNames: {
              bubbled: "onCompositionEnd",
              captured: "onCompositionEndCapture",
            },
            dependencies:
              "blur compositionend keydown keypress keyup mousedown".split(" "),
          },
          compositionStart: {
            phasedRegistrationNames: {
              bubbled: "onCompositionStart",
              captured: "onCompositionStartCapture",
            },
            dependencies:
              "blur compositionstart keydown keypress keyup mousedown".split(
                " "
              ),
          },
          compositionUpdate: {
            phasedRegistrationNames: {
              bubbled: "onCompositionUpdate",
              captured: "onCompositionUpdateCapture",
            },
            dependencies:
              "blur compositionupdate keydown keypress keyup mousedown".split(
                " "
              ),
          },
        },
        ve = !1;
      function _e(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== fe.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "blur":
            return 1;
          default:
            return;
        }
      }
      function Ee(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
      }
      var we = !1,
        Oe =
          ((he = {
            eventTypes: ge,
            extractEvents: function (e, t, n, r) {
              var o = void 0,
                i = void 0;
              if (pe)
                e: {
                  switch (e) {
                    case "compositionstart":
                      o = ge.compositionStart;
                      break e;
                    case "compositionend":
                      o = ge.compositionEnd;
                      break e;
                    case "compositionupdate":
                      o = ge.compositionUpdate;
                      break e;
                  }
                  o = void 0;
                }
              else
                we
                  ? _e(e, n) && (o = ge.compositionEnd)
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (o = ge.compositionStart);
              return (
                (i = o
                  ? (ye &&
                      "ko" !== n.locale &&
                      (we || o !== ge.compositionStart
                        ? o === ge.compositionEnd && we && (i = re())
                        : ((te =
                            "value" in (ee = r) ? ee.value : ee.textContent),
                          (we = !0))),
                    (o = ce.getPooled(o, t, n, r)),
                    (i || null !== (i = Ee(n))) && (o.data = i),
                    U(o),
                    o)
                  : null),
                (e = (
                  me
                    ? function (e, t) {
                        switch (e) {
                          case "compositionend":
                            return Ee(t);
                          case "keypress":
                            return 32 !== t.which ? null : ((ve = !0), be);
                          case "textInput":
                            return (e = t.data) === be && ve ? null : e;
                          default:
                            return null;
                        }
                      }
                    : function (e, t) {
                        if (we)
                          return "compositionend" === e || (!pe && _e(e, t))
                            ? ((e = re()), (ne = te = ee = null), (we = !1), e)
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
                            return ye && "ko" !== t.locale ? null : t.data;
                        }
                      }
                )(e, n))
                  ? (((t = de.getPooled(ge.beforeInput, t, n, r)).data = e),
                    U(t))
                  : (t = null),
                null === i ? t : null === t ? i : [i, t]
              );
            },
          }),
          null),
        ke = null,
        Te = null;
      function Ce(e) {
        var t;
        (e = w(e)) &&
          ("function" != typeof Oe && a("280"),
          (t = E(e.stateNode)),
          Oe(e.stateNode, e.type, t));
      }
      function xe(e) {
        ke ? (Te ? Te.push(e) : (Te = [e])) : (ke = e);
      }
      function Se() {
        if (ke) {
          var e = ke,
            t = Te;
          if (((Te = ke = null), Ce(e), t))
            for (e = 0; e < t.length; e++) Ce(t[e]);
        }
      }
      function Pe(e, t) {
        return e(t);
      }
      function Ie(e, t, n) {
        return e(t, n);
      }
      function De() {}
      var Re = !1;
      function je(e, t) {
        if (Re) return e(t);
        Re = !0;
        try {
          Pe(e, t);
        } finally {
          (Re = !1), (null === ke && null === Te) || (De(), Se());
        }
      }
      var Ae = {
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
      function Ne(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? Ae[e.type] : "textarea" === t;
      }
      function Me(e) {
        return 3 ===
          (e = (e = e.target || e.srcElement || window).correspondingUseElement
            ? e.correspondingUseElement
            : e).nodeType
          ? e.parentNode
          : e;
      }
      function Ke(e) {
        if (!H) return !1;
        var t = (e = "on" + e) in document;
        return (
          t ||
            ((t = document.createElement("div")).setAttribute(e, "return;"),
            (t = "function" == typeof t[e])),
          t
        );
      }
      function Le(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function Fe(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t,
              n,
              r = Le(e) ? "checked" : "value",
              o = Object.getOwnPropertyDescriptor(e.constructor.prototype, r),
              i = "" + e[r];
            if (
              !e.hasOwnProperty(r) &&
              void 0 !== o &&
              "function" == typeof o.get &&
              "function" == typeof o.set
            )
              return (
                (t = o.get),
                (n = o.set),
                Object.defineProperty(e, r, {
                  configurable: !0,
                  get: function () {
                    return t.call(this);
                  },
                  set: function (e) {
                    (i = "" + e), n.call(this, e);
                  },
                }),
                Object.defineProperty(e, r, { enumerable: o.enumerable }),
                {
                  getValue: function () {
                    return i;
                  },
                  setValue: function (e) {
                    i = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[r];
                  },
                }
              );
          })(e));
      }
      function ze(e) {
        if (e) {
          var t = e._valueTracker;
          if (!t) return 1;
          var n = t.getValue(),
            r = "";
          return (
            (e = r =
              e ? (Le(e) ? (e.checked ? "true" : "false") : e.value) : r) !==
              n && (t.setValue(e), 1)
          );
        }
      }
      var Be = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        Ue =
          (Be.hasOwnProperty("ReactCurrentDispatcher") ||
            (Be.ReactCurrentDispatcher = { current: null }),
          /^(.*)[\\\/]/),
        He = (Nt = "function" == typeof Symbol && Symbol.for)
          ? Symbol.for("react.element")
          : 60103,
        $e = Nt ? Symbol.for("react.portal") : 60106,
        We = Nt ? Symbol.for("react.fragment") : 60107,
        Ve = Nt ? Symbol.for("react.strict_mode") : 60108,
        qe = Nt ? Symbol.for("react.profiler") : 60114,
        Ge = Nt ? Symbol.for("react.provider") : 60109,
        Ye = Nt ? Symbol.for("react.context") : 60110,
        Qe = Nt ? Symbol.for("react.concurrent_mode") : 60111,
        Xe = Nt ? Symbol.for("react.forward_ref") : 60112,
        Je = Nt ? Symbol.for("react.suspense") : 60113,
        Ze = Nt ? Symbol.for("react.memo") : 60115,
        et = Nt ? Symbol.for("react.lazy") : 60116,
        tt = "function" == typeof Symbol && Symbol.iterator;
      function nt(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (tt && e[tt]) || e["@@iterator"])
          ? e
          : null;
      }
      function rt(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case Qe:
            return "ConcurrentMode";
          case We:
            return "Fragment";
          case $e:
            return "Portal";
          case qe:
            return "Profiler";
          case Ve:
            return "StrictMode";
          case Je:
            return "Suspense";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case Ye:
              return "Context.Consumer";
            case Ge:
              return "Context.Provider";
            case Xe:
              var t = (t = e.render).displayName || t.name || "";
              return (
                e.displayName ||
                ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case Ze:
              return rt(e.type);
            case et:
              if ((e = 1 === e._status ? e._result : null)) return rt(e);
          }
        return null;
      }
      function ot(e) {
        var t = "";
        do {
          switch (e.tag) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
              var n = "";
              break;
            default:
              var r = e._debugOwner,
                o = e._debugSource,
                i = rt(e.type);
              n = null;
              r && (n = rt(r.type)),
                (r = i),
                (i = ""),
                o
                  ? (i =
                      " (at " +
                      o.fileName.replace(Ue, "") +
                      ":" +
                      o.lineNumber +
                      ")")
                  : n && (i = " (created by " + n + ")"),
                (n = "\n    in " + (r || "Unknown") + i);
          }
        } while (((t += n), (e = e.return)));
        return t;
      }
      var it =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        at = Object.prototype.hasOwnProperty,
        lt = {},
        ut = {};
      function st(e, t, n, r, o) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = o),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t);
      }
      var ct = {},
        dt =
          ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
            .split(" ")
            .forEach(function (e) {
              ct[e] = new st(e, 0, !1, e, null);
            }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            ct[t] = new st(t, 1, !1, e[1], null);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              ct[e] = new st(e, 2, !1, e.toLowerCase(), null);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            ct[e] = new st(e, 2, !1, e, null);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              ct[e] = new st(e, 3, !1, e.toLowerCase(), null);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            ct[e] = new st(e, 3, !0, e, null);
          }),
          ["capture", "download"].forEach(function (e) {
            ct[e] = new st(e, 4, !1, e, null);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            ct[e] = new st(e, 6, !1, e, null);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            ct[e] = new st(e, 5, !1, e.toLowerCase(), null);
          }),
          /[\-:]([a-z])/g);
      function ft(e) {
        return e[1].toUpperCase();
      }
      function pt(e, t, n, r) {
        var o,
          i = ct.hasOwnProperty(t) ? ct[t] : null;
        (null !== i
          ? 0 !== i.type
          : r ||
            !(2 < t.length) ||
            ("o" !== t[0] && "O" !== t[0]) ||
            ("n" !== t[1] && "N" !== t[1])) &&
          ((function (e, t, n, r) {
            if (
              null == t ||
              (function (e, t, n, r) {
                if (null === n || 0 !== n.type)
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return 1;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return;
                  }
              })(e, t, n, r)
            )
              return 1;
            if (!r && null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || t < 1;
              }
          })(t, n, i, r) && (n = null),
          r || null === i
            ? ((o = t),
              (at.call(ut, o) ||
                (!at.call(lt, o) &&
                  (it.test(o) ? (ut[o] = !0) : ((lt[o] = !0), 0)))) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)))
            : i.mustUseProperty
            ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (i = i.type) || (4 === i && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      function ht(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }
      function mt(e, t) {
        var n = t.checked;
        return o({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function yt(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        n = ht(null != t.value ? t.value : n);
        e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            "checkbox" === t.type || "radio" === t.type
              ? null != t.checked
              : null != t.value,
        };
      }
      function bt(e, t) {
        null != (t = t.checked) && pt(e, "checked", t, !1);
      }
      function gt(e, t) {
        bt(e, t);
        var n = ht(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? _t(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            _t(e, t.type, ht(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function vt(e, t, n) {
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
          (e.defaultChecked = !e.defaultChecked),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function _t(e, t, n) {
        ("number" === t && e.ownerDocument.activeElement === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(dt, ft);
          ct[t] = new st(t, 1, !1, e, null);
        }),
        "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(dt, ft);
            ct[t] = new st(t, 1, !1, e, "http://www.w3.org/1999/xlink");
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(dt, ft);
          ct[t] = new st(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace");
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          ct[e] = new st(e, 1, !1, e.toLowerCase(), null);
        });
      var Et = {
        change: {
          phasedRegistrationNames: {
            bubbled: "onChange",
            captured: "onChangeCapture",
          },
          dependencies:
            "blur change click focus input keydown keyup selectionchange".split(
              " "
            ),
        },
      };
      function wt(e, t, n) {
        return (
          ((e = ae.getPooled(Et.change, e, t, n)).type = "change"),
          xe(n),
          U(e),
          e
        );
      }
      var Ot = null,
        kt = null;
      function Tt(e) {
        I(e);
      }
      function Ct(e) {
        if (ze(N(e))) return e;
      }
      function xt(e, t) {
        if ("change" === e) return t;
      }
      var St = !1;
      function Pt() {
        Ot && (Ot.detachEvent("onpropertychange", It), (kt = Ot = null));
      }
      function It(e) {
        "value" === e.propertyName && Ct(kt) && je(Tt, (e = wt(kt, e, Me(e))));
      }
      function Dt(e, t, n) {
        "focus" === e
          ? (Pt(), (kt = n), (Ot = t).attachEvent("onpropertychange", It))
          : "blur" === e && Pt();
      }
      function Rt(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Ct(kt);
      }
      function jt(e, t) {
        if ("click" === e) return Ct(t);
      }
      function At(e, t) {
        if ("input" === e || "change" === e) return Ct(t);
      }
      H &&
        (St =
          Ke("input") && (!document.documentMode || 9 < document.documentMode));
      var Nt = {
          eventTypes: Et,
          _isInputEventSupported: St,
          extractEvents: function (e, t, n, r) {
            var o = t ? N(t) : window,
              i = void 0,
              a = void 0,
              l = o.nodeName && o.nodeName.toLowerCase();
            if (
              ("select" === l || ("input" === l && "file" === o.type)
                ? (i = xt)
                : Ne(o)
                ? St
                  ? (i = At)
                  : ((i = Rt), (a = Dt))
                : !(l = o.nodeName) ||
                  "input" !== l.toLowerCase() ||
                  ("checkbox" !== o.type && "radio" !== o.type) ||
                  (i = jt),
              (i = i && i(e, t)))
            )
              return wt(i, n, r);
            a && a(e, o, t),
              "blur" === e &&
                (e = o._wrapperState) &&
                e.controlled &&
                "number" === o.type &&
                _t(o, "number", o.value);
          },
        },
        Mt = ae.extend({ view: null, detail: null }),
        Kt = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function Lt(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = Kt[e]) && !!t[e];
      }
      function Ft() {
        return Lt;
      }
      var zt = 0,
        Bt = 0,
        Ut = !1,
        Ht = !1,
        $t = Mt.extend({
          screenX: null,
          screenY: null,
          clientX: null,
          clientY: null,
          pageX: null,
          pageY: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          getModifierState: Ft,
          button: null,
          buttons: null,
          relatedTarget: function (e) {
            return (
              e.relatedTarget ||
              (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            );
          },
          movementX: function (e) {
            if ("movementX" in e) return e.movementX;
            var t = zt;
            return (
              (zt = e.screenX),
              Ut ? ("mousemove" === e.type ? e.screenX - t : 0) : ((Ut = !0), 0)
            );
          },
          movementY: function (e) {
            if ("movementY" in e) return e.movementY;
            var t = Bt;
            return (
              (Bt = e.screenY),
              Ht ? ("mousemove" === e.type ? e.screenY - t : 0) : ((Ht = !0), 0)
            );
          },
        }),
        Wt = $t.extend({
          pointerId: null,
          width: null,
          height: null,
          pressure: null,
          tangentialPressure: null,
          tiltX: null,
          tiltY: null,
          twist: null,
          pointerType: null,
          isPrimary: null,
        }),
        Vt = {
          mouseEnter: {
            registrationName: "onMouseEnter",
            dependencies: ["mouseout", "mouseover"],
          },
          mouseLeave: {
            registrationName: "onMouseLeave",
            dependencies: ["mouseout", "mouseover"],
          },
          pointerEnter: {
            registrationName: "onPointerEnter",
            dependencies: ["pointerout", "pointerover"],
          },
          pointerLeave: {
            registrationName: "onPointerLeave",
            dependencies: ["pointerout", "pointerover"],
          },
        },
        qt = {
          eventTypes: Vt,
          extractEvents: function (e, t, n, r) {
            var o = "mouseout" === e || "pointerout" === e;
            if (
              ((c = "mouseover" === e || "pointerover" === e) &&
                (n.relatedTarget || n.fromElement)) ||
              (!o && !c)
            )
              return null;
            if (
              ((c =
                r.window === r
                  ? r
                  : (c = r.ownerDocument)
                  ? c.defaultView || c.parentWindow
                  : window),
              o
                ? ((o = t),
                  (t = (t = n.relatedTarget || n.toElement) ? j(t) : null))
                : (o = null),
              o === t)
            )
              return null;
            var i = void 0,
              a = void 0,
              l = void 0,
              u = void 0,
              s =
                ("mouseout" === e || "mouseover" === e
                  ? ((i = $t),
                    (a = Vt.mouseLeave),
                    (l = Vt.mouseEnter),
                    (u = "mouse"))
                  : ("pointerout" !== e && "pointerover" !== e) ||
                    ((i = Wt),
                    (a = Vt.pointerLeave),
                    (l = Vt.pointerEnter),
                    (u = "pointer")),
                null == o ? c : N(o)),
              c = null == t ? c : N(t);
            if (
              (((e = i.getPooled(a, o, n, r)).type = u + "leave"),
              (e.target = s),
              (e.relatedTarget = c),
              ((n = i.getPooled(l, t, n, r)).type = u + "enter"),
              (n.target = c),
              (n.relatedTarget = s),
              (r = t),
              o && r)
            )
              e: {
                for (c = r, u = 0, i = t = o; i; i = K(i)) u++;
                for (i = 0, l = c; l; l = K(l)) i++;
                for (; 0 < u - i; ) (t = K(t)), u--;
                for (; 0 < i - u; ) (c = K(c)), i--;
                for (; u--; ) {
                  if (t === c || t === c.alternate) break e;
                  (t = K(t)), (c = K(c));
                }
                t = null;
              }
            else t = null;
            for (
              c = t, t = [];
              o && o !== c && (null === (u = o.alternate) || u !== c);

            )
              t.push(o), (o = K(o));
            for (
              o = [];
              r && r !== c && (null === (u = r.alternate) || u !== c);

            )
              o.push(r), (r = K(r));
            for (r = 0; r < t.length; r++) z(t[r], "bubbled", e);
            for (r = o.length; 0 < r--; ) z(o[r], "captured", n);
            return [e, n];
          },
        };
      function Gt(e, t) {
        return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
      }
      var Yt = Object.prototype.hasOwnProperty;
      function Qt(e, t) {
        if (Gt(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!Yt.call(t, n[r]) || !Gt(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      function Xt(e) {
        var t = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          if (0 != (2 & t.effectTag)) return 1;
          for (; t.return; ) if (0 != (2 & (t = t.return).effectTag)) return 1;
        }
        return 3 === t.tag ? 2 : 3;
      }
      function Jt(e) {
        2 !== Xt(e) && a("188");
      }
      function Zt(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) return 3 === (t = Xt(e)) && a("188"), 1 === t ? null : e;
            for (var n = e, r = t; ; ) {
              var o = n.return,
                i = o ? o.alternate : null;
              if (!o || !i) break;
              if (o.child === i.child) {
                for (var l = o.child; l; ) {
                  if (l === n) return Jt(o), e;
                  if (l === r) return Jt(o), t;
                  l = l.sibling;
                }
                a("188");
              }
              if (n.return !== r.return) (n = o), (r = i);
              else {
                l = !1;
                for (var u = o.child; u; ) {
                  if (u === n) {
                    (l = !0), (n = o), (r = i);
                    break;
                  }
                  if (u === r) {
                    (l = !0), (r = o), (n = i);
                    break;
                  }
                  u = u.sibling;
                }
                if (!l) {
                  for (u = i.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = i), (r = o);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = i), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  l || a("189");
                }
              }
              n.alternate !== r && a("190");
            }
            return 3 !== n.tag && a("188"), n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) t = (t.child.return = t).child;
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      var en = ae.extend({
          animationName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        tn = ae.extend({
          clipboardData: function (e) {
            return ("clipboardData" in e ? e : window).clipboardData;
          },
        }),
        nn = Mt.extend({ relatedTarget: null });
      function rn(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          32 <= (e = 10 === e ? 13 : e) || 13 === e ? e : 0
        );
      }
      var on = {
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
        an = {
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
        ln = Mt.extend({
          key: function (e) {
            if (e.key) {
              var t = on[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = rn(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? an[e.keyCode] || "Unidentified"
              : "";
          },
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: Ft,
          charCode: function (e) {
            return "keypress" === e.type ? rn(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? rn(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          },
        }),
        un = $t.extend({ dataTransfer: null }),
        sn = Mt.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: Ft,
        }),
        cn = ae.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        dn = $t.extend({
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
          deltaZ: null,
          deltaMode: null,
        }),
        fn = [
          ["abort", "abort"],
          [Y, "animationEnd"],
          [Q, "animationIteration"],
          [X, "animationStart"],
          ["canplay", "canPlay"],
          ["canplaythrough", "canPlayThrough"],
          ["drag", "drag"],
          ["dragenter", "dragEnter"],
          ["dragexit", "dragExit"],
          ["dragleave", "dragLeave"],
          ["dragover", "dragOver"],
          ["durationchange", "durationChange"],
          ["emptied", "emptied"],
          ["encrypted", "encrypted"],
          ["ended", "ended"],
          ["error", "error"],
          ["gotpointercapture", "gotPointerCapture"],
          ["load", "load"],
          ["loadeddata", "loadedData"],
          ["loadedmetadata", "loadedMetadata"],
          ["loadstart", "loadStart"],
          ["lostpointercapture", "lostPointerCapture"],
          ["mousemove", "mouseMove"],
          ["mouseout", "mouseOut"],
          ["mouseover", "mouseOver"],
          ["playing", "playing"],
          ["pointermove", "pointerMove"],
          ["pointerout", "pointerOut"],
          ["pointerover", "pointerOver"],
          ["progress", "progress"],
          ["scroll", "scroll"],
          ["seeking", "seeking"],
          ["stalled", "stalled"],
          ["suspend", "suspend"],
          ["timeupdate", "timeUpdate"],
          ["toggle", "toggle"],
          ["touchmove", "touchMove"],
          [J, "transitionEnd"],
          ["waiting", "waiting"],
          ["wheel", "wheel"],
        ],
        pn = {},
        hn = {};
      function mn(e, t) {
        var n = e[0],
          r = "on" + ((e = e[1])[0].toUpperCase() + e.slice(1));
        (pn[e] = t =
          {
            phasedRegistrationNames: { bubbled: r, captured: r + "Capture" },
            dependencies: [n],
            isInteractive: t,
          }),
          (hn[n] = t);
      }
      [
        ["blur", "blur"],
        ["cancel", "cancel"],
        ["click", "click"],
        ["close", "close"],
        ["contextmenu", "contextMenu"],
        ["copy", "copy"],
        ["cut", "cut"],
        ["auxclick", "auxClick"],
        ["dblclick", "doubleClick"],
        ["dragend", "dragEnd"],
        ["dragstart", "dragStart"],
        ["drop", "drop"],
        ["focus", "focus"],
        ["input", "input"],
        ["invalid", "invalid"],
        ["keydown", "keyDown"],
        ["keypress", "keyPress"],
        ["keyup", "keyUp"],
        ["mousedown", "mouseDown"],
        ["mouseup", "mouseUp"],
        ["paste", "paste"],
        ["pause", "pause"],
        ["play", "play"],
        ["pointercancel", "pointerCancel"],
        ["pointerdown", "pointerDown"],
        ["pointerup", "pointerUp"],
        ["ratechange", "rateChange"],
        ["reset", "reset"],
        ["seeked", "seeked"],
        ["submit", "submit"],
        ["touchcancel", "touchCancel"],
        ["touchend", "touchEnd"],
        ["touchstart", "touchStart"],
        ["volumechange", "volumeChange"],
      ].forEach(function (e) {
        mn(e, !0);
      }),
        fn.forEach(function (e) {
          mn(e, !1);
        });
      fn = {
        eventTypes: pn,
        isInteractiveTopLevelEventType: function (e) {
          return void 0 !== (e = hn[e]) && !0 === e.isInteractive;
        },
        extractEvents: function (e, t, n, r) {
          var o = hn[e];
          if (!o) return null;
          switch (e) {
            case "keypress":
              if (0 === rn(n)) return null;
            case "keydown":
            case "keyup":
              e = ln;
              break;
            case "blur":
            case "focus":
              e = nn;
              break;
            case "click":
              if (2 === n.button) return null;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              e = $t;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              e = un;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              e = sn;
              break;
            case Y:
            case Q:
            case X:
              e = en;
              break;
            case J:
              e = cn;
              break;
            case "scroll":
              e = Mt;
              break;
            case "wheel":
              e = dn;
              break;
            case "copy":
            case "cut":
            case "paste":
              e = tn;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              e = Wt;
              break;
            default:
              e = ae;
          }
          return U((t = e.getPooled(o, t, n, r))), t;
        },
      };
      var yn = fn.isInteractiveTopLevelEventType,
        bn = [];
      function gn(e) {
        var t = e.targetInst;
        do {
          if (!t) {
            e.ancestors.push(t);
            break;
          }
          for (var n = t; n.return; ) n = n.return;
        } while (
          (n = 3 !== n.tag ? null : n.stateNode.containerInfo) &&
          (e.ancestors.push(t), (t = j(n)))
        );
        for (t = 0; t < e.ancestors.length; t++) {
          var r = e.ancestors[t],
            o = Me(e.nativeEvent);
          n = e.topLevelType;
          for (var i = e.nativeEvent, a = null, l = 0; l < b.length; l++) {
            var u = b[l];
            (u = u && u.extractEvents(n, r, i, o)) && (a = T(a, u));
          }
          I(a);
        }
      }
      var vn = !0;
      function _n(e, t) {
        var n;
        t &&
          ((n = (yn(e) ? wn : On).bind(null, e)), t.addEventListener(e, n, !1));
      }
      function En(e, t) {
        var n;
        t &&
          ((n = (yn(e) ? wn : On).bind(null, e)), t.addEventListener(e, n, !0));
      }
      function wn(e, t) {
        Ie(On, e, t);
      }
      function On(e, t) {
        if (vn) {
          var n,
            r = Me(t);
          null !== (r = j(r)) &&
            "number" == typeof r.tag &&
            2 !== Xt(r) &&
            (r = null),
            (e = bn.length
              ? (((n = bn.pop()).topLevelType = e),
                (n.nativeEvent = t),
                (n.targetInst = r),
                n)
              : {
                  topLevelType: e,
                  nativeEvent: t,
                  targetInst: r,
                  ancestors: [],
                });
          try {
            je(gn, e);
          } finally {
            (e.topLevelType = null),
              (e.nativeEvent = null),
              (e.targetInst = null),
              (e.ancestors.length = 0),
              bn.length < 10 && bn.push(e);
          }
        }
      }
      var kn = {},
        Tn = 0,
        Cn = "_reactListenersID" + ("" + Math.random()).slice(2);
      function xn(e) {
        return (
          Object.prototype.hasOwnProperty.call(e, Cn) ||
            ((e[Cn] = Tn++), (kn[e[Cn]] = {})),
          kn[e[Cn]]
        );
      }
      function Sn(e) {
        if (
          void 0 ===
          (e = e || ("undefined" != typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function Pn(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function In(e, t) {
        var n,
          r = Pn(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && t <= n))
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
          r = Pn(r);
        }
      }
      function Dn() {
        for (var e = window, t = Sn(); t instanceof e.HTMLIFrameElement; ) {
          try {
            e = t.contentDocument.defaultView;
          } catch (e) {
            break;
          }
          t = Sn(e.document);
        }
        return t;
      }
      function Rn(e) {
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
      var jn = H && "documentMode" in document && document.documentMode <= 11,
        An = {
          select: {
            phasedRegistrationNames: {
              bubbled: "onSelect",
              captured: "onSelectCapture",
            },
            dependencies:
              "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
                " "
              ),
          },
        },
        Nn = null,
        Mn = null,
        Kn = null,
        Ln = !1;
      function Fn(e, t) {
        var n =
          t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return Ln || null == Nn || Nn !== Sn(n)
          ? null
          : ((n =
              "selectionStart" in (n = Nn) && Rn(n)
                ? { start: n.selectionStart, end: n.selectionEnd }
                : {
                    anchorNode: (n = (
                      (n.ownerDocument && n.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: n.anchorOffset,
                    focusNode: n.focusNode,
                    focusOffset: n.focusOffset,
                  }),
            Kn && Qt(Kn, n)
              ? null
              : ((Kn = n),
                ((e = ae.getPooled(An.select, Mn, e, t)).type = "select"),
                (e.target = Nn),
                U(e),
                e));
      }
      var zn = {
        eventTypes: An,
        extractEvents: function (e, t, n, r) {
          if (
            !(i = !(o =
              r.window === r
                ? r.document
                : 9 === r.nodeType
                ? r
                : r.ownerDocument))
          ) {
            e: {
              for (var o = xn(o), i = _.onSelect, a = 0; a < i.length; a++) {
                var l = i[a];
                if (!o.hasOwnProperty(l) || !o[l]) {
                  o = !1;
                  break e;
                }
              }
              o = !0;
            }
            i = !o;
          }
          if (i) return null;
          switch (((o = t ? N(t) : window), e)) {
            case "focus":
              (!Ne(o) && "true" !== o.contentEditable) ||
                ((Nn = o), (Mn = t), (Kn = null));
              break;
            case "blur":
              Kn = Mn = Nn = null;
              break;
            case "mousedown":
              Ln = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              return (Ln = !1), Fn(n, r);
            case "selectionchange":
              if (jn) break;
            case "keydown":
            case "keyup":
              return Fn(n, r);
          }
          return null;
        },
      };
      function Bn(e, t) {
        return (
          (e = o({ children: void 0 }, t)),
          (n = t.children),
          (i = ""),
          r.Children.forEach(n, function (e) {
            null != e && (i += e);
          }),
          (t = i) && (e.children = t),
          e
        );
        var n, i;
      }
      function Un(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
          for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== o && (e[n].selected = o),
              o && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + ht(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n)
              return (e[o].selected = !0), r && (e[o].defaultSelected = !0);
            null !== t || e[o].disabled || (t = e[o]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function Hn(e, t) {
        return (
          null != t.dangerouslySetInnerHTML && a("91"),
          o({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          })
        );
      }
      function $n(e, t) {
        var n = t.value;
        null == n &&
          ((n = t.defaultValue),
          null != (t = t.children) &&
            (null != n && a("92"),
            Array.isArray(t) && (t.length <= 1 || a("93"), (t = t[0])),
            (n = t)),
          null == n && (n = "")),
          (e._wrapperState = { initialValue: ht(n) });
      }
      function Wn(e, t) {
        var n = ht(t.value),
          r = ht(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function Vn(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && (e.value = t);
      }
      n.injectEventPluginOrder(
        "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
          " "
        )
      ),
        (E = M),
        (w = A),
        (O = N),
        n.injectEventPluginsByName({
          SimpleEventPlugin: fn,
          EnterLeaveEventPlugin: qt,
          ChangeEventPlugin: Nt,
          SelectEventPlugin: zn,
          BeforeInputEventPlugin: he,
        });
      var qn = "http://www.w3.org/1999/xhtml";
      function Gn(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function Yn(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? Gn(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var Qn,
        Xn = void 0,
        Jn =
          ((Qn = function (e, t) {
            if (
              "http://www.w3.org/2000/svg" !== e.namespaceURI ||
              "innerHTML" in e
            )
              e.innerHTML = t;
            else {
              for (
                (Xn = Xn || document.createElement("div")).innerHTML =
                  "<svg>" + t + "</svg>",
                  t = Xn.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return Qn(e, t);
                });
              }
            : Qn);
      function Zn(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var er = {
          animationIterationCount: !0,
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
        tr = ["Webkit", "ms", "Moz", "O"];
      function nr(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : n ||
            "number" != typeof t ||
            0 === t ||
            (er.hasOwnProperty(e) && er[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function rr(e, t) {
        for (var n in ((e = e.style), t)) {
          var r, o;
          t.hasOwnProperty(n) &&
            ((r = 0 === n.indexOf("--")),
            (o = nr(n, t[n], r)),
            "float" === n && (n = "cssFloat"),
            r ? e.setProperty(n, o) : (e[n] = o));
        }
      }
      Object.keys(er).forEach(function (e) {
        tr.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (er[t] = er[e]);
        });
      });
      var or = o(
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
      function ir(e, t) {
        t &&
          (!or[e] ||
            (null == t.children && null == t.dangerouslySetInnerHTML) ||
            a("137", e, ""),
          null != t.dangerouslySetInnerHTML &&
            (null != t.children && a("60"),
            ("object" == typeof t.dangerouslySetInnerHTML &&
              "__html" in t.dangerouslySetInnerHTML) ||
              a("61")),
          null != t.style && "object" != typeof t.style && a("62", ""));
      }
      function ar(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
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
      function lr(e, t) {
        var n = xn(
          (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
        );
        t = _[t];
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          if (!n.hasOwnProperty(o) || !n[o]) {
            switch (o) {
              case "scroll":
                En("scroll", e);
                break;
              case "focus":
              case "blur":
                En("focus", e), En("blur", e), (n.blur = !0), (n.focus = !0);
                break;
              case "cancel":
              case "close":
                Ke(o) && En(o, e);
                break;
              case "invalid":
              case "submit":
              case "reset":
                break;
              default:
                -1 === Z.indexOf(o) && _n(o, e);
            }
            n[o] = !0;
          }
        }
      }
      function ur() {}
      var sr = null,
        cr = null;
      function dr(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function fr(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" == typeof t.children ||
          "number" == typeof t.children ||
          ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var pr = "function" == typeof setTimeout ? setTimeout : void 0,
        hr = "function" == typeof clearTimeout ? clearTimeout : void 0,
        mr = i.unstable_scheduleCallback,
        yr = i.unstable_cancelCallback;
      function br(e) {
        for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType; )
          e = e.nextSibling;
        return e;
      }
      function gr(e) {
        for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType; )
          e = e.nextSibling;
        return e;
      }
      new Set();
      var vr = [],
        _r = -1;
      function Er(e) {
        _r < 0 || ((e.current = vr[_r]), (vr[_r] = null), _r--);
      }
      function wr(e, t) {
        (vr[++_r] = e.current), (e.current = t);
      }
      var Or = {},
        kr = { current: Or },
        Tr = { current: !1 },
        Cr = Or;
      function xr(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Or;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var o,
          i = {};
        for (o in n) i[o] = t[o];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          i
        );
      }
      function Sr(e) {
        return null != e.childContextTypes;
      }
      function Pr() {
        Er(Tr), Er(kr);
      }
      function Ir() {
        Er(Tr), Er(kr);
      }
      function Dr(e, t, n) {
        kr.current !== Or && a("168"), wr(kr, t), wr(Tr, n);
      }
      function Rr(e, t, n) {
        var r,
          i = e.stateNode;
        if (((e = t.childContextTypes), "function" != typeof i.getChildContext))
          return n;
        for (r in (i = i.getChildContext()))
          r in e || a("108", rt(t) || "Unknown", r);
        return o({}, n, i);
      }
      function jr(e) {
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          Or),
          (Cr = kr.current),
          wr(kr, e),
          wr(Tr, Tr.current);
      }
      function Ar(e, t, n) {
        var r = e.stateNode;
        r || a("169"),
          n
            ? ((t = Rr(e, t, Cr)),
              (r.__reactInternalMemoizedMergedChildContext = t),
              Er(Tr),
              Er(kr),
              wr(kr, t))
            : Er(Tr),
          wr(Tr, n);
      }
      var Nr = null,
        Mr = null;
      function Kr(e) {
        return function (t) {
          try {
            return e(t);
          } catch (t) {}
        };
      }
      function Lr(e, t, n, r) {
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
          (this.contextDependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.effectTag = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childExpirationTime = this.expirationTime = 0),
          (this.alternate = null);
      }
      function Fr(e, t, n, r) {
        return new Lr(e, t, n, r);
      }
      function zr(e) {
        return (e = e.prototype) && e.isReactComponent;
      }
      function Br(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Fr(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              ((n.alternate = e).alternate = n))
            : ((n.pendingProps = t),
              (n.effectTag = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childExpirationTime = e.childExpirationTime),
          (n.expirationTime = e.expirationTime),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (n.contextDependencies = e.contextDependencies),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Ur(e, t, n, r, o, i) {
        var l = 2;
        if ("function" == typeof (r = e)) zr(e) && (l = 1);
        else if ("string" == typeof e) l = 5;
        else
          e: switch (e) {
            case We:
              return Hr(n.children, o, i, t);
            case Qe:
              return $r(n, 3 | o, i, t);
            case Ve:
              return $r(n, 2 | o, i, t);
            case qe:
              return (
                ((e = Fr(12, n, t, 4 | o)).elementType = qe),
                (e.type = qe),
                (e.expirationTime = i),
                e
              );
            case Je:
              return (
                ((e = Fr(13, n, t, o)).elementType = Je),
                (e.type = Je),
                (e.expirationTime = i),
                e
              );
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case Ge:
                    l = 10;
                    break e;
                  case Ye:
                    l = 9;
                    break e;
                  case Xe:
                    l = 11;
                    break e;
                  case Ze:
                    l = 14;
                    break e;
                  case et:
                    (l = 16), (r = null);
                    break e;
                }
              a("130", null == e ? e : typeof e, "");
          }
        return (
          ((t = Fr(l, n, t, o)).elementType = e),
          (t.type = r),
          (t.expirationTime = i),
          t
        );
      }
      function Hr(e, t, n, r) {
        return ((e = Fr(7, e, r, t)).expirationTime = n), e;
      }
      function $r(e, t, n, r) {
        return (
          (e = Fr(8, e, r, t)),
          (t = 0 == (1 & t) ? Ve : Qe),
          (e.elementType = t),
          (e.type = t),
          (e.expirationTime = n),
          e
        );
      }
      function Wr(e, t, n) {
        return ((e = Fr(6, e, null, t)).expirationTime = n), e;
      }
      function Vr(e, t, n) {
        return (
          ((t = Fr(
            4,
            null !== e.children ? e.children : [],
            e.key,
            t
          )).expirationTime = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function qr(e, t) {
        e.didError = !1;
        var n = e.earliestPendingTime;
        0 === n
          ? (e.earliestPendingTime = e.latestPendingTime = t)
          : n < t
          ? (e.earliestPendingTime = t)
          : e.latestPendingTime > t && (e.latestPendingTime = t),
          Qr(t, e);
      }
      function Gr(e, t) {
        (e.didError = !1), e.latestPingedTime >= t && (e.latestPingedTime = 0);
        var n = e.earliestPendingTime,
          r = e.latestPendingTime;
        n === t
          ? (e.earliestPendingTime = r === t ? (e.latestPendingTime = 0) : r)
          : r === t && (e.latestPendingTime = n),
          (n = e.earliestSuspendedTime),
          (r = e.latestSuspendedTime),
          0 === n
            ? (e.earliestSuspendedTime = e.latestSuspendedTime = t)
            : n < t
            ? (e.earliestSuspendedTime = t)
            : t < r && (e.latestSuspendedTime = t),
          Qr(t, e);
      }
      function Yr(e, t) {
        var n = e.earliestPendingTime;
        return (t = t < n ? n : t) < (e = e.earliestSuspendedTime) ? e : t;
      }
      function Qr(e, t) {
        var n = t.earliestSuspendedTime,
          r = t.latestSuspendedTime,
          o = t.earliestPendingTime,
          i = t.latestPingedTime;
        0 !==
          (e = o = 0 === (o = 0 !== o ? o : i) && (0 === e || r < e) ? r : o) &&
          e < n &&
          (e = n),
          (t.nextExpirationTimeToWorkOn = o),
          (t.expirationTime = e);
      }
      function Xr(e, t) {
        if (e && e.defaultProps)
          for (var n in ((t = o({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      var Jr = new r.Component().refs;
      function Zr(e, t, n, r) {
        (n = null == (n = n(r, (t = e.memoizedState))) ? t : o({}, t, n)),
          (e.memoizedState = n),
          null !== (r = e.updateQueue) &&
            0 === e.expirationTime &&
            (r.baseState = n);
      }
      var eo = {
        isMounted: function (e) {
          return !!(e = e._reactInternalFiber) && 2 === Xt(e);
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r,
            o = Ni((r = Pa(nl(), e)));
          (o.payload = t),
            null != n && (o.callback = n),
            Oa(),
            Ki(e, o),
            Ra(e, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r,
            o = Ni((r = Pa(nl(), e)));
          (o.tag = Pi),
            (o.payload = t),
            null != n && (o.callback = n),
            Oa(),
            Ki(e, o),
            Ra(e, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternalFiber;
          var n,
            r = Ni((n = Pa(nl(), e)));
          (r.tag = Ii), null != t && (r.callback = t), Oa(), Ki(e, r), Ra(e, n);
        },
      };
      function to(e, t, n, r, o, i, a) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, i, a)
          : !(
              t.prototype &&
              t.prototype.isPureReactComponent &&
              Qt(n, r) &&
              Qt(o, i)
            );
      }
      function no(e, t, n) {
        var r = !1,
          o = Or,
          i = t.contextType;
        (t = new t(
          n,
          (i =
            "object" == typeof i && null !== i
              ? xi(i)
              : ((o = Sr(t) ? Cr : kr.current),
                (r = null != (r = t.contextTypes)) ? xr(e, o) : Or))
        )),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = eo),
          ((e.stateNode = t)._reactInternalFiber = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              o),
            (e.__reactInternalMemoizedMaskedChildContext = i));
      }
      function ro(e, t, n, r) {
        (e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && eo.enqueueReplaceState(t, t.state, null);
      }
      function oo(e, t, n, r) {
        var o = e.stateNode,
          i =
            ((o.props = n),
            (o.state = e.memoizedState),
            (o.refs = Jr),
            t.contextType);
        "object" == typeof i && null !== i
          ? (o.context = xi(i))
          : ((i = Sr(t) ? Cr : kr.current), (o.context = xr(e, i))),
          null !== (i = e.updateQueue) &&
            (Bi(e, i, n, o, r), (o.state = e.memoizedState)),
          "function" == typeof (i = t.getDerivedStateFromProps) &&
            (Zr(e, 0, i, n), (o.state = e.memoizedState)),
          "function" == typeof t.getDerivedStateFromProps ||
            "function" == typeof o.getSnapshotBeforeUpdate ||
            ("function" != typeof o.UNSAFE_componentWillMount &&
              "function" != typeof o.componentWillMount) ||
            ((t = o.state),
            "function" == typeof o.componentWillMount && o.componentWillMount(),
            "function" == typeof o.UNSAFE_componentWillMount &&
              o.UNSAFE_componentWillMount(),
            t !== o.state && eo.enqueueReplaceState(o, o.state, null),
            null !== (i = e.updateQueue) &&
              (Bi(e, i, n, o, r), (o.state = e.memoizedState))),
          "function" == typeof o.componentDidMount && (e.effectTag |= 4);
      }
      var io = Array.isArray;
      function ao(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" != typeof e &&
          "object" != typeof e
        ) {
          var r, o;
          if (n._owner)
            return (
              (n = n._owner),
              (r = void 0),
              n && (1 !== n.tag && a("309"), (r = n.stateNode)),
              r || a("147", e),
              (o = "" + e),
              null !== t &&
              null !== t.ref &&
              "function" == typeof t.ref &&
              t.ref._stringRef === o
                ? t.ref
                : (((t = function (e) {
                    var t = r.refs;
                    t === Jr && (t = r.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  })._stringRef = o),
                  t)
            );
          "string" != typeof e && a("284"), n._owner || a("290", e);
        }
        return e;
      }
      function lo(e, t) {
        "textarea" !== e.type &&
          a(
            "31",
            "[object Object]" === Object.prototype.toString.call(t)
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : t,
            ""
          );
      }
      function uo(e) {
        function t(t, n) {
          var r;
          e &&
            (null !== (r = t.lastEffect)
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
            (n.nextEffect = null),
            (n.effectTag = 8));
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
        function o(e, t) {
          return ((e = Br(e, t)).index = 0), (e.sibling = null), e;
        }
        function i(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.effectTag = 2), n)
                  : r
                : ((t.effectTag = 2), n)
              : n
          );
        }
        function l(t) {
          return e && null === t.alternate && (t.effectTag = 2), t;
        }
        function u(e, t, n, r) {
          return (
            ((t =
              null === t || 6 !== t.tag ? Wr(n, e.mode, r) : o(t, n)).return =
              e),
            t
          );
        }
        function s(e, t, n, r) {
          return (
            ((r =
              null !== t && t.elementType === n.type
                ? o(t, n.props)
                : Ur(n.type, n.key, n.props, null, e.mode, r)).ref = ao(
              0,
              t,
              n
            )),
            (r.return = e),
            r
          );
        }
        function c(e, t, n, r) {
          return (
            ((t =
              null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
                ? Vr(n, e.mode, r)
                : o(t, n.children || [])).return = e),
            t
          );
        }
        function d(e, t, n, r, i) {
          return (
            ((t =
              null === t || 7 !== t.tag
                ? Hr(n, e.mode, r, i)
                : o(t, n)).return = e),
            t
          );
        }
        function f(e, t, n) {
          if ("string" == typeof t || "number" == typeof t)
            return ((t = Wr("" + t, e.mode, n)).return = e), t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case He:
                return (
                  ((n = Ur(t.type, t.key, t.props, null, e.mode, n)).ref = ao(
                    0,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case $e:
                return ((t = Vr(t, e.mode, n)).return = e), t;
            }
            if (io(t) || nt(t))
              return ((t = Hr(t, e.mode, n, null)).return = e), t;
            lo(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var o = null !== t ? t.key : null;
          if ("string" == typeof n || "number" == typeof n)
            return null !== o ? null : u(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case He:
                return n.key === o
                  ? n.type === We
                    ? d(e, t, n.props.children, r, o)
                    : s(e, t, n, r)
                  : null;
              case $e:
                return n.key === o ? c(e, t, n, r) : null;
            }
            if (io(n) || nt(n)) return null !== o ? null : d(e, t, n, r, null);
            lo(e, n);
          }
          return null;
        }
        function h(e, t, n, r, o) {
          if ("string" == typeof r || "number" == typeof r)
            return u(t, (e = e.get(n) || null), "" + r, o);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case He:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === We
                    ? d(t, e, r.props.children, o, r.key)
                    : s(t, e, r, o)
                );
              case $e:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  o
                );
            }
            if (io(r) || nt(r)) return d(t, (e = e.get(n) || null), r, o, null);
            lo(t, r);
          }
          return null;
        }
        return function (u, s, c, d) {
          var m =
              "object" == typeof c &&
              null !== c &&
              c.type === We &&
              null === c.key,
            y = "object" == typeof (c = m ? c.props.children : c) && null !== c;
          if (y)
            switch (c.$$typeof) {
              case He:
                e: {
                  for (y = c.key, m = s; null !== m; ) {
                    if (m.key === y) {
                      if (
                        7 === m.tag ? c.type === We : m.elementType === c.type
                      ) {
                        n(u, m.sibling),
                          ((s = o(
                            m,
                            c.type === We ? c.props.children : c.props
                          )).ref = ao(0, m, c)),
                          (s.return = u),
                          (u = s);
                        break e;
                      }
                      n(u, m);
                      break;
                    }
                    t(u, m), (m = m.sibling);
                  }
                  u =
                    c.type === We
                      ? (((s = Hr(c.props.children, u.mode, d, c.key)).return =
                          u),
                        s)
                      : (((d = Ur(
                          c.type,
                          c.key,
                          c.props,
                          null,
                          u.mode,
                          d
                        )).ref = ao(0, s, c)),
                        (d.return = u),
                        d);
                }
                return l(u);
              case $e:
                e: {
                  for (m = c.key; null !== s; ) {
                    if (s.key === m) {
                      if (
                        4 === s.tag &&
                        s.stateNode.containerInfo === c.containerInfo &&
                        s.stateNode.implementation === c.implementation
                      ) {
                        n(u, s.sibling),
                          ((s = o(s, c.children || [])).return = u),
                          (u = s);
                        break e;
                      }
                      n(u, s);
                      break;
                    }
                    t(u, s), (s = s.sibling);
                  }
                  ((s = Vr(c, u.mode, d)).return = u), (u = s);
                }
                return l(u);
            }
          if ("string" == typeof c || "number" == typeof c)
            return (
              (c = "" + c),
              ((s =
                null !== s && 6 === s.tag
                  ? (n(u, s.sibling), o(s, c))
                  : (n(u, s), Wr(c, u.mode, d))).return = u),
              l((u = s))
            );
          if (io(c)) {
            for (
              var b = u,
                g = s,
                v = c,
                _ = d,
                E = null,
                w = null,
                O = g,
                k = (g = 0),
                T = null;
              null !== O && k < v.length;
              k++
            ) {
              O.index > k ? ((T = O), (O = null)) : (T = O.sibling);
              var C = p(b, O, v[k], _);
              if (null === C) {
                null === O && (O = T);
                break;
              }
              e && O && null === C.alternate && t(b, O),
                (g = i(C, g, k)),
                null === w ? (E = C) : (w.sibling = C),
                (w = C),
                (O = T);
            }
            if (k === v.length) return n(b, O), E;
            if (null === O) {
              for (; k < v.length; k++)
                (O = f(b, v[k], _)) &&
                  ((g = i(O, g, k)),
                  null === w ? (E = O) : (w.sibling = O),
                  (w = O));
              return E;
            }
            for (O = r(b, O); k < v.length; k++)
              (T = h(O, b, k, v[k], _)) &&
                (e &&
                  null !== T.alternate &&
                  O.delete(null === T.key ? k : T.key),
                (g = i(T, g, k)),
                null === w ? (E = T) : (w.sibling = T),
                (w = T));
            return (
              e &&
                O.forEach(function (e) {
                  return t(b, e);
                }),
              E
            );
          }
          if (nt(c)) {
            var x = u,
              S = s,
              P = c,
              I = d,
              D = nt(P);
            "function" != typeof D && a("150"),
              null == (P = D.call(P)) && a("151");
            for (
              var R = (D = null), j = S, A = (S = 0), N = null, M = P.next();
              null !== j && !M.done;
              A++, M = P.next()
            ) {
              j.index > A ? ((N = j), (j = null)) : (N = j.sibling);
              var K = p(x, j, M.value, I);
              if (null === K) {
                j = j || N;
                break;
              }
              e && j && null === K.alternate && t(x, j),
                (S = i(K, S, A)),
                null === R ? (D = K) : (R.sibling = K),
                (R = K),
                (j = N);
            }
            if (M.done) return n(x, j), D;
            if (null === j) {
              for (; !M.done; A++, M = P.next())
                null !== (M = f(x, M.value, I)) &&
                  ((S = i(M, S, A)),
                  null === R ? (D = M) : (R.sibling = M),
                  (R = M));
              return D;
            }
            for (j = r(x, j); !M.done; A++, M = P.next())
              null !== (M = h(j, x, A, M.value, I)) &&
                (e &&
                  null !== M.alternate &&
                  j.delete(null === M.key ? A : M.key),
                (S = i(M, S, A)),
                null === R ? (D = M) : (R.sibling = M),
                (R = M));
            return (
              e &&
                j.forEach(function (e) {
                  return t(x, e);
                }),
              D
            );
          }
          if ((y && lo(u, c), void 0 === c && !m))
            switch (u.tag) {
              case 1:
              case 0:
                a("152", (d = u.type).displayName || d.name || "Component");
            }
          return n(u, s);
        };
      }
      var so = uo(!0),
        co = uo(!1),
        fo = {},
        po = { current: fo },
        ho = { current: fo },
        mo = { current: fo };
      function yo(e) {
        return e === fo && a("174"), e;
      }
      function bo(e, t) {
        wr(mo, t), wr(ho, e), wr(po, fo);
        var n = t.nodeType;
        switch (n) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Yn(null, "");
            break;
          default:
            t = Yn(
              (t = (n = 8 === n ? t.parentNode : t).namespaceURI || null),
              n.tagName
            );
        }
        Er(po), wr(po, t);
      }
      function go() {
        Er(po), Er(ho), Er(mo);
      }
      function vo(e) {
        yo(mo.current);
        var t = yo(po.current),
          n = Yn(t, e.type);
        t !== n && (wr(ho, e), wr(po, n));
      }
      function _o(e) {
        ho.current === e && (Er(po), Er(ho));
      }
      var Eo = Be.ReactCurrentDispatcher,
        wo = 0,
        Oo = null,
        ko = null,
        To = null,
        Co = null,
        xo = null,
        So = null,
        Po = 0,
        Io = null,
        Do = 0,
        Ro = !1,
        jo = null,
        Ao = 0;
      function No() {
        a("321");
      }
      function Mo(e, t) {
        if (null !== t) {
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Gt(e[n], t[n])) return;
          return 1;
        }
      }
      function Ko(e, t, n, r, o, i) {
        if (
          ((wo = i),
          (Oo = t),
          (To = null !== e ? e.memoizedState : null),
          (Eo.current = null === To ? Qo : Xo),
          (t = n(r, o)),
          Ro)
        ) {
          for (
            ;
            (Ro = !1),
              (Ao += 1),
              (To = null !== e ? e.memoizedState : null),
              (So = Co),
              (Io = xo = ko = null),
              (Eo.current = Xo),
              (t = n(r, o)),
              Ro;

          );
          (jo = null), (Ao = 0);
        }
        return (
          (Eo.current = Yo),
          ((e = Oo).memoizedState = Co),
          (e.expirationTime = Po),
          (e.updateQueue = Io),
          (e.effectTag |= Do),
          (e = null !== ko && null !== ko.next),
          (So = xo = Co = To = ko = Oo = null),
          (Io = null),
          (Do = Po = wo = 0),
          e && a("300"),
          t
        );
      }
      function Lo() {
        (Eo.current = Yo),
          (So = xo = Co = To = ko = Oo = null),
          (Ro = !1),
          (jo = Io = null),
          (Ao = Do = Po = wo = 0);
      }
      function Fo() {
        var e = {
          memoizedState: null,
          baseState: null,
          queue: null,
          baseUpdate: null,
          next: null,
        };
        return null === xo ? (Co = xo = e) : (xo = xo.next = e), xo;
      }
      function zo() {
        var e;
        return (
          (To =
            null !== So
              ? ((So = (xo = So).next), null !== (ko = To) ? ko.next : null)
              : (null === To && a("310"),
                (e = {
                  memoizedState: (ko = To).memoizedState,
                  baseState: ko.baseState,
                  queue: ko.queue,
                  baseUpdate: ko.baseUpdate,
                  next: null,
                }),
                (xo = null === xo ? (Co = e) : (xo.next = e)),
                ko.next)),
          xo
        );
      }
      function Bo(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function Uo(e) {
        var t = zo(),
          n = t.queue;
        if ((null === n && a("311"), 0 < Ao)) {
          var r = n.dispatch;
          if (null !== jo) {
            var o = jo.get(n);
            if (void 0 !== o) {
              jo.delete(n);
              for (
                var i = t.memoizedState;
                (i = e(i, o.action)), null !== (o = o.next);

              );
              return (
                Gt(i, t.memoizedState) || (ui = !0),
                (t.memoizedState = i),
                t.baseUpdate === n.last && (t.baseState = i),
                (n.eagerReducer = e),
                [(n.eagerState = i), r]
              );
            }
          }
          return [t.memoizedState, r];
        }
        r = n.last;
        var l = t.baseUpdate;
        i = t.baseState;
        if (
          null !==
          (r =
            null !== l
              ? (null !== r && (r.next = null), l.next)
              : null !== r
              ? r.next
              : null)
        ) {
          var u = (o = null),
            s = r,
            c = !1;
          do {
            var d = s.expirationTime;
          } while (
            (d < wo
              ? (c || ((c = !0), (u = l), (o = i)), Po < d && (Po = d))
              : (i = s.eagerReducer === e ? s.eagerState : e(i, s.action)),
            null !== (s = (l = s).next) && s !== r)
          );
          c || ((u = l), (o = i)),
            Gt(i, t.memoizedState) || (ui = !0),
            (t.memoizedState = i),
            (t.baseUpdate = u),
            (t.baseState = o),
            (n.eagerReducer = e),
            (n.eagerState = i);
        }
        return [t.memoizedState, n.dispatch];
      }
      function Ho(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === Io
            ? ((Io = { lastEffect: null }).lastEffect = e.next = e)
            : null === (t = Io.lastEffect)
            ? (Io.lastEffect = e.next = e)
            : ((n = t.next), ((t.next = e).next = n), (Io.lastEffect = e)),
          e
        );
      }
      function $o(e, t, n, r) {
        var o = Fo();
        (Do |= e),
          (o.memoizedState = Ho(t, n, void 0, void 0 === r ? null : r));
      }
      function Wo(e, t, n, r) {
        var o = zo(),
          i = void (r = void 0 === r ? null : r);
        if (null !== ko) {
          var a = ko.memoizedState;
          i = a.destroy;
          if (null !== r && Mo(r, a.deps)) return void Ho(0, n, i, r);
        }
        (Do |= e), (o.memoizedState = Ho(t, n, i, r));
      }
      function Vo(e, t) {
        return "function" == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function qo() {}
      function Go(e, t, n) {
        Ao < 25 || a("301");
        var r = e.alternate;
        if (e === Oo || (null !== r && r === Oo))
          if (
            ((Ro = !0),
            (e = {
              expirationTime: wo,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            }),
            void 0 === (n = (jo = null === jo ? new Map() : jo).get(t)))
          )
            jo.set(t, e);
          else {
            for (t = n; null !== t.next; ) t = t.next;
            t.next = e;
          }
        else {
          Oa();
          var o,
            i,
            l = {
              expirationTime: (o = Pa(nl(), e)),
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            u = t.last;
          if (
            (null === u
              ? (l.next = l)
              : (null !== (i = u.next) && (l.next = i), (u.next = l)),
            (t.last = l),
            0 === e.expirationTime &&
              (null === r || 0 === r.expirationTime) &&
              null !== (r = t.eagerReducer))
          )
            try {
              var s = t.eagerState,
                c = r(s, n);
              if (((l.eagerReducer = r), Gt((l.eagerState = c), s))) return;
            } catch (e) {}
          Ra(e, o);
        }
      }
      var Yo = {
          readContext: xi,
          useCallback: No,
          useContext: No,
          useEffect: No,
          useImperativeHandle: No,
          useLayoutEffect: No,
          useMemo: No,
          useReducer: No,
          useRef: No,
          useState: No,
          useDebugValue: No,
        },
        Qo = {
          readContext: xi,
          useCallback: function (e, t) {
            return (Fo().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: xi,
          useEffect: function (e, t) {
            return $o(516, 192, e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              $o(4, 36, Vo.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return $o(4, 36, e, t);
          },
          useMemo: function (e, t) {
            var n = Fo();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = Fo();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue =
                {
                  last: null,
                  dispatch: null,
                  eagerReducer: e,
                  eagerState: t,
                }).dispatch =
                Go.bind(null, Oo, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (Fo().memoizedState = { current: e });
          },
          useState: function (e) {
            var t = Fo();
            return (
              "function" == typeof e && (e = e()),
              (t.memoizedState = t.baseState = e),
              (e = (e = t.queue =
                {
                  last: null,
                  dispatch: null,
                  eagerReducer: Bo,
                  eagerState: e,
                }).dispatch =
                Go.bind(null, Oo, e)),
              [t.memoizedState, e]
            );
          },
          useDebugValue: qo,
        },
        Xo = {
          readContext: xi,
          useCallback: function (e, t) {
            var n = zo(),
              r = ((t = void 0 === t ? null : t), n.memoizedState);
            return null !== r && null !== t && Mo(t, r[1])
              ? r[0]
              : ((n.memoizedState = [e, t]), e);
          },
          useContext: xi,
          useEffect: function (e, t) {
            return Wo(516, 192, e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              Wo(4, 36, Vo.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return Wo(4, 36, e, t);
          },
          useMemo: function (e, t) {
            var n = zo(),
              r = ((t = void 0 === t ? null : t), n.memoizedState);
            return null !== r && null !== t && Mo(t, r[1])
              ? r[0]
              : ((e = e()), (n.memoizedState = [e, t]), e);
          },
          useReducer: Uo,
          useRef: function () {
            return zo().memoizedState;
          },
          useState: function (e) {
            return Uo(Bo);
          },
          useDebugValue: qo,
        },
        Jo = null,
        Zo = null,
        ei = !1;
      function ti(e, t) {
        var n = Fr(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.effectTag = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function ni(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), 1)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), 1)
            );
          default:
            return;
        }
      }
      function ri(e) {
        if (ei) {
          var t = Zo;
          if (t) {
            var n = t;
            if (!ni(e, t)) {
              if (!(t = br(n)) || !ni(e, t))
                return (e.effectTag |= 2), (ei = !1), (Jo = e);
              ti(Jo, n);
            }
            (Jo = e), (Zo = gr(t));
          } else (e.effectTag |= 2), (ei = !1), (Jo = e);
        }
      }
      function oi(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 18 !== e.tag;

        )
          e = e.return;
        Jo = e;
      }
      function ii(e) {
        if (e === Jo) {
          if (!ei) return oi(e), (ei = !0), 0;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !fr(t, e.memoizedProps))
          )
            for (t = Zo; t; ) ti(e, t), (t = br(t));
          return oi(e), (Zo = Jo ? br(e.stateNode) : null), 1;
        }
      }
      function ai() {
        (Zo = Jo = null), (ei = !1);
      }
      var li = Be.ReactCurrentOwner,
        ui = !1;
      function si(e, t, n, r) {
        t.child = null === e ? co(t, null, n, r) : so(t, e.child, n, r);
      }
      function ci(e, t, n, r, o) {
        n = n.render;
        var i = t.ref;
        return (
          Ci(t, o),
          (r = Ko(e, t, n, r, i, o)),
          null === e || ui
            ? ((t.effectTag |= 1), si(e, t, r, o), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= o && (e.expirationTime = 0),
              vi(e, t, o))
        );
      }
      function di(e, t, n, r, o, i) {
        var a;
        return null === e
          ? "function" != typeof (a = n.type) ||
            zr(a) ||
            void 0 !== a.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Ur(n.type, null, r, null, t.mode, i)).ref = t.ref),
              ((e.return = t).child = e))
            : ((t.tag = 15), (t.type = a), fi(e, t, a, r, o, i))
          : ((a = e.child),
            o < i &&
            ((o = a.memoizedProps),
            (n = null !== (n = n.compare) ? n : Qt)(o, r) && e.ref === t.ref)
              ? vi(e, t, i)
              : ((t.effectTag |= 1),
                ((e = Br(a, r)).ref = t.ref),
                ((e.return = t).child = e)));
      }
      function fi(e, t, n, r, o, i) {
        return null !== e &&
          Qt(e.memoizedProps, r) &&
          e.ref === t.ref &&
          ((ui = !1), o < i)
          ? vi(e, t, i)
          : hi(e, t, n, r, i);
      }
      function pi(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.effectTag |= 128);
      }
      function hi(e, t, n, r, o) {
        var i = xr(t, Sr(n) ? Cr : kr.current);
        return (
          Ci(t, o),
          (n = Ko(e, t, n, r, i, o)),
          null === e || ui
            ? ((t.effectTag |= 1), si(e, t, n, o), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= o && (e.expirationTime = 0),
              vi(e, t, o))
        );
      }
      function mi(e, t, n, r, o) {
        var i, a, l, u, s, c, d, f, p;
        return (
          Sr(n) ? ((i = !0), jr(t)) : (i = !1),
          Ci(t, o),
          (r =
            null === t.stateNode
              ? (null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                no(t, n, r),
                oo(t, n, r, o),
                !0)
              : null === e
              ? ((a = t.stateNode),
                (l = t.memoizedProps),
                (a.props = l),
                (f = a.context),
                (u =
                  "object" == typeof (u = n.contextType) && null !== u
                    ? xi(u)
                    : xr(t, (u = Sr(n) ? Cr : kr.current))),
                (c =
                  "function" == typeof (s = n.getDerivedStateFromProps) ||
                  "function" == typeof a.getSnapshotBeforeUpdate) ||
                  ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof a.componentWillReceiveProps) ||
                  (l === r && f === u) ||
                  ro(0, a, r, u),
                (Ri = !1),
                (d = t.memoizedState),
                (f = a.state = d),
                null !== (p = t.updateQueue) &&
                  (Bi(t, p, r, a, o), (f = t.memoizedState)),
                l !== r || d !== f || Tr.current || Ri
                  ? ("function" == typeof s &&
                      (Zr(t, 0, s, r), (f = t.memoizedState)),
                    (l = Ri || to(t, n, l, r, d, f, u))
                      ? (c ||
                          ("function" != typeof a.UNSAFE_componentWillMount &&
                            "function" != typeof a.componentWillMount) ||
                          ("function" == typeof a.componentWillMount &&
                            a.componentWillMount(),
                          "function" == typeof a.UNSAFE_componentWillMount &&
                            a.UNSAFE_componentWillMount()),
                        "function" == typeof a.componentDidMount &&
                          (t.effectTag |= 4))
                      : ("function" == typeof a.componentDidMount &&
                          (t.effectTag |= 4),
                        (t.memoizedProps = r),
                        (t.memoizedState = f)),
                    (a.props = r),
                    (a.state = f),
                    (a.context = u),
                    l)
                  : ("function" == typeof a.componentDidMount &&
                      (t.effectTag |= 4),
                    !1))
              : ((a = t.stateNode),
                (l = t.memoizedProps),
                (a.props = t.type === t.elementType ? l : Xr(t.type, l)),
                (f = a.context),
                (u =
                  "object" == typeof (u = n.contextType) && null !== u
                    ? xi(u)
                    : xr(t, (u = Sr(n) ? Cr : kr.current))),
                (c =
                  "function" == typeof (s = n.getDerivedStateFromProps) ||
                  "function" == typeof a.getSnapshotBeforeUpdate) ||
                  ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof a.componentWillReceiveProps) ||
                  (l === r && f === u) ||
                  ro(0, a, r, u),
                (Ri = !1),
                (f = t.memoizedState),
                (d = a.state = f),
                null !== (p = t.updateQueue) &&
                  (Bi(t, p, r, a, o), (d = t.memoizedState)),
                l !== r || f !== d || Tr.current || Ri
                  ? ("function" == typeof s &&
                      (Zr(t, 0, s, r), (d = t.memoizedState)),
                    (s = Ri || to(t, n, l, r, f, d, u))
                      ? (c ||
                          ("function" != typeof a.UNSAFE_componentWillUpdate &&
                            "function" != typeof a.componentWillUpdate) ||
                          ("function" == typeof a.componentWillUpdate &&
                            a.componentWillUpdate(r, d, u),
                          "function" == typeof a.UNSAFE_componentWillUpdate &&
                            a.UNSAFE_componentWillUpdate(r, d, u)),
                        "function" == typeof a.componentDidUpdate &&
                          (t.effectTag |= 4),
                        "function" == typeof a.getSnapshotBeforeUpdate &&
                          (t.effectTag |= 256))
                      : ("function" != typeof a.componentDidUpdate ||
                          (l === e.memoizedProps && f === e.memoizedState) ||
                          (t.effectTag |= 4),
                        "function" != typeof a.getSnapshotBeforeUpdate ||
                          (l === e.memoizedProps && f === e.memoizedState) ||
                          (t.effectTag |= 256),
                        (t.memoizedProps = r),
                        (t.memoizedState = d)),
                    (a.props = r),
                    (a.state = d),
                    (a.context = u),
                    s)
                  : ("function" != typeof a.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.effectTag |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.effectTag |= 256),
                    !1))),
          yi(e, t, n, r, i, o)
        );
      }
      function yi(e, t, n, r, o, i) {
        pi(e, t);
        var a = 0 != (64 & t.effectTag);
        if (!r && !a) return o && Ar(t, n, !1), vi(e, t, i);
        (r = t.stateNode), (li.current = t);
        var l =
          a && "function" != typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.effectTag |= 1),
          null !== e && a
            ? ((t.child = so(t, e.child, null, i)),
              (t.child = so(t, null, l, i)))
            : si(e, t, l, i),
          (t.memoizedState = r.state),
          o && Ar(t, n, !0),
          t.child
        );
      }
      function bi(e) {
        var t = e.stateNode;
        t.pendingContext
          ? Dr(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && Dr(0, t.context, !1),
          bo(e, t.containerInfo);
      }
      function gi(e, t, n) {
        var r,
          o,
          i = t.mode,
          a = t.pendingProps,
          l = t.memoizedState;
        return (
          0 == (64 & t.effectTag)
            ? ((l = null), (r = !1))
            : ((l = { timedOutAt: null !== l ? l.timedOutAt : 0 }),
              (r = !0),
              (t.effectTag &= -65)),
          null === e
            ? r
              ? ((o = a.fallback),
                (e = Hr(null, i, 0, null)),
                0 == (1 & t.mode) &&
                  (e.child = (null !== t.memoizedState ? t.child : t).child),
                (i = Hr(o, i, n, null)),
                (e.sibling = i),
                ((n = e).return = i.return = t))
              : (n = i = co(t, null, a.children, n))
            : (null !== e.memoizedState
                ? ((o = (i = e.child).sibling),
                  r
                    ? ((n = a.fallback),
                      (a = Br(i, i.pendingProps)),
                      0 == (1 & t.mode) &&
                        (r = (null !== t.memoizedState ? t.child : t).child) !==
                          i.child &&
                        (a.child = r),
                      (i = a.sibling = Br(o, n, o.expirationTime)),
                      ((n = a).childExpirationTime = 0),
                      (n.return = i.return = t))
                    : (n = i = so(t, i.child, a.children, n)))
                : ((o = e.child),
                  r
                    ? ((r = a.fallback),
                      ((a = Hr(null, i, 0, null)).child = o),
                      0 == (1 & t.mode) &&
                        (a.child = (
                          null !== t.memoizedState ? t.child : t
                        ).child),
                      ((i = a.sibling = Hr(r, i, n, null)).effectTag |= 2),
                      ((n = a).childExpirationTime = 0),
                      (n.return = i.return = t))
                    : (i = n = so(t, o, a.children, n))),
              (t.stateNode = e.stateNode)),
          (t.memoizedState = l),
          (t.child = n),
          i
        );
      }
      function vi(e, t, n) {
        if (
          (null !== e && (t.contextDependencies = e.contextDependencies),
          t.childExpirationTime < n)
        )
          return null;
        if ((null !== e && t.child !== e.child && a("153"), null !== t.child)) {
          for (
            n = Br((e = t.child), e.pendingProps, e.expirationTime),
              (t.child = n).return = t;
            null !== e.sibling;

          )
            (e = e.sibling),
              ((n = n.sibling =
                Br(e, e.pendingProps, e.expirationTime)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      var _i = { current: null },
        Ei = null,
        wi = null,
        Oi = null;
      function ki(e, t) {
        (e = e.type._context), wr(_i, e._currentValue), (e._currentValue = t);
      }
      function Ti(e) {
        var t = _i.current;
        Er(_i), (e.type._context._currentValue = t);
      }
      function Ci(e, t) {
        Oi = wi = null;
        var n = (Ei = e).contextDependencies;
        null !== n && n.expirationTime >= t && (ui = !0),
          (e.contextDependencies = null);
      }
      function xi(e, t) {
        return (
          Oi !== e &&
            !1 !== t &&
            0 !== t &&
            (("number" == typeof t && 1073741823 !== t) ||
              ((Oi = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === wi
              ? (null === Ei && a("308"),
                (wi = t),
                (Ei.contextDependencies = { first: t, expirationTime: 0 }))
              : (wi = wi.next = t)),
          e._currentValue
        );
      }
      var Si = 0,
        Pi = 1,
        Ii = 2,
        Di = 3,
        Ri = !1;
      function ji(e) {
        return {
          baseState: e,
          firstUpdate: null,
          lastUpdate: null,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null,
        };
      }
      function Ai(e) {
        return {
          baseState: e.baseState,
          firstUpdate: e.firstUpdate,
          lastUpdate: e.lastUpdate,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null,
        };
      }
      function Ni(e) {
        return {
          expirationTime: e,
          tag: Si,
          payload: null,
          callback: null,
          next: null,
          nextEffect: null,
        };
      }
      function Mi(e, t) {
        null === e.lastUpdate
          ? (e.firstUpdate = e.lastUpdate = t)
          : ((e.lastUpdate.next = t), (e.lastUpdate = t));
      }
      function Ki(e, t) {
        var n,
          r,
          o = e.alternate;
        null === o
          ? (r = null) === (n = e.updateQueue) &&
            (n = e.updateQueue = ji(e.memoizedState))
          : ((n = e.updateQueue),
            (r = o.updateQueue),
            null === n
              ? null === r
                ? ((n = e.updateQueue = ji(e.memoizedState)),
                  (r = o.updateQueue = ji(o.memoizedState)))
                : (n = e.updateQueue = Ai(r))
              : null === r && (r = o.updateQueue = Ai(n))),
          null === r || n === r
            ? Mi(n, t)
            : null === n.lastUpdate || null === r.lastUpdate
            ? (Mi(n, t), Mi(r, t))
            : (Mi(n, t), (r.lastUpdate = t));
      }
      function Li(e, t) {
        var n = e.updateQueue;
        null ===
        (n = null === n ? (e.updateQueue = ji(e.memoizedState)) : Fi(e, n))
          .lastCapturedUpdate
          ? (n.firstCapturedUpdate = n.lastCapturedUpdate = t)
          : ((n.lastCapturedUpdate.next = t), (n.lastCapturedUpdate = t));
      }
      function Fi(e, t) {
        var n = e.alternate;
        return null !== n && t === n.updateQueue ? (e.updateQueue = Ai(t)) : t;
      }
      function zi(e, t, n, r, i, a) {
        switch (n.tag) {
          case Pi:
            return "function" == typeof (e = n.payload) ? e.call(a, r, i) : e;
          case Di:
            e.effectTag = (-2049 & e.effectTag) | 64;
          case Si:
            if (
              null ==
              (i = "function" == typeof (e = n.payload) ? e.call(a, r, i) : e)
            )
              break;
            return o({}, r, i);
          case Ii:
            Ri = !0;
        }
        return r;
      }
      function Bi(e, t, n, r, o) {
        Ri = !1;
        for (
          var i = (t = Fi(e, t)).baseState,
            a = null,
            l = 0,
            u = t.firstUpdate,
            s = i;
          null !== u;

        ) {
          var c = u.expirationTime;
          c < o
            ? (null === a && ((a = u), (i = s)), l < c && (l = c))
            : ((s = zi(e, 0, u, s, n, r)),
              null !== u.callback &&
                ((e.effectTag |= 32),
                (u.nextEffect = null) === t.lastEffect
                  ? (t.firstEffect = t.lastEffect = u)
                  : ((t.lastEffect.nextEffect = u), (t.lastEffect = u)))),
            (u = u.next);
        }
        for (c = null, u = t.firstCapturedUpdate; null !== u; ) {
          var d = u.expirationTime;
          d < o
            ? (null === c && ((c = u), null === a && (i = s)), l < d && (l = d))
            : ((s = zi(e, 0, u, s, n, r)),
              null !== u.callback &&
                ((e.effectTag |= 32),
                (u.nextEffect = null) === t.lastCapturedEffect
                  ? (t.firstCapturedEffect = t.lastCapturedEffect = u)
                  : ((t.lastCapturedEffect.nextEffect = u),
                    (t.lastCapturedEffect = u)))),
            (u = u.next);
        }
        null === a && (t.lastUpdate = null),
          null === c ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
          null === a && null === c && (i = s),
          (t.baseState = i),
          (t.firstUpdate = a),
          (t.firstCapturedUpdate = c),
          (e.expirationTime = l),
          (e.memoizedState = s);
      }
      function Ui(e, t, n) {
        null !== t.firstCapturedUpdate &&
          (null !== t.lastUpdate &&
            ((t.lastUpdate.next = t.firstCapturedUpdate),
            (t.lastUpdate = t.lastCapturedUpdate)),
          (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
          Hi(t.firstEffect, n),
          (t.firstEffect = t.lastEffect = null),
          Hi(t.firstCapturedEffect, n),
          (t.firstCapturedEffect = t.lastCapturedEffect = null);
      }
      function Hi(e, t) {
        for (; null !== e; ) {
          var n,
            r = e.callback;
          null !== r &&
            ((e.callback = null),
            (n = t),
            "function" != typeof r && a("191", r),
            r.call(n)),
            (e = e.nextEffect);
        }
      }
      function $i(e, t) {
        return { value: e, source: t, stack: ot(t) };
      }
      function Wi(e) {
        e.effectTag |= 4;
      }
      var Vi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              n = (n.child.return = n).child;
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        },
        qi = function (e, t, n, r, i) {
          var a = e.memoizedProps;
          if (a !== r) {
            var l = t.stateNode;
            switch ((yo(po.current), (e = null), n)) {
              case "input":
                (a = mt(l, a)), (r = mt(l, r)), (e = []);
                break;
              case "option":
                (a = Bn(l, a)), (r = Bn(l, r)), (e = []);
                break;
              case "select":
                (a = o({}, a, { value: void 0 })),
                  (r = o({}, r, { value: void 0 })),
                  (e = []);
                break;
              case "textarea":
                (a = Hn(l, a)), (r = Hn(l, r)), (e = []);
                break;
              default:
                "function" != typeof a.onClick &&
                  "function" == typeof r.onClick &&
                  (l.onclick = ur);
            }
            ir(n, r);
            l = n = void 0;
            var u = null;
            for (n in a)
              if (!r.hasOwnProperty(n) && a.hasOwnProperty(n) && null != a[n])
                if ("style" === n) {
                  var s = a[n];
                  for (l in s) s.hasOwnProperty(l) && ((u = u || {})[l] = "");
                } else
                  "dangerouslySetInnerHTML" !== n &&
                    "children" !== n &&
                    "suppressContentEditableWarning" !== n &&
                    "suppressHydrationWarning" !== n &&
                    "autoFocus" !== n &&
                    (v.hasOwnProperty(n)
                      ? (e = e || [])
                      : (e = e || []).push(n, null));
            for (n in r) {
              var c = r[n];
              s = null != a ? a[n] : void 0;
              if (r.hasOwnProperty(n) && c !== s && (null != c || null != s))
                if ("style" === n)
                  if (s) {
                    for (l in s)
                      !s.hasOwnProperty(l) ||
                        (c && c.hasOwnProperty(l)) ||
                        ((u = u || {})[l] = "");
                    for (l in c)
                      c.hasOwnProperty(l) &&
                        s[l] !== c[l] &&
                        ((u = u || {})[l] = c[l]);
                  } else u || (e = e || []).push(n, u), (u = c);
                else
                  "dangerouslySetInnerHTML" === n
                    ? ((c = c ? c.__html : void 0),
                      (s = s ? s.__html : void 0),
                      null != c && s !== c && (e = e || []).push(n, "" + c))
                    : "children" === n
                    ? s === c ||
                      ("string" != typeof c && "number" != typeof c) ||
                      (e = e || []).push(n, "" + c)
                    : "suppressContentEditableWarning" !== n &&
                      "suppressHydrationWarning" !== n &&
                      (v.hasOwnProperty(n)
                        ? (null != c && lr(i, n), e || s === c || (e = []))
                        : (e = e || []).push(n, c));
            }
            u && (e = e || []).push("style", u),
              (i = e),
              (t.updateQueue = i) && Wi(t);
          }
        },
        Gi = function (e, t, n, r) {
          n !== r && Wi(t);
        },
        Yi = "function" == typeof WeakSet ? WeakSet : Set;
      function Qi(e, t) {
        var n = t.source;
        null === t.stack && null !== n && ot(n),
          null !== n && rt(n.type),
          (t = t.value),
          null !== e && 1 === e.tag && rt(e.type);
        try {
          console.error(t);
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
      function Xi(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" == typeof t)
            try {
              t(null);
            } catch (t) {
              Sa(e, t);
            }
          else t.current = null;
      }
      function Ji(e, t, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
          var r,
            o = (n = n.next);
          do {} while (
            (0 != (o.tag & e) &&
              ((r = o.destroy), (o.destroy = void 0) !== r && r()),
            0 != (o.tag & t) && ((r = o.create), (o.destroy = r())),
            (o = o.next) !== n)
          );
        }
      }
      function Zi(e) {
        switch (("function" == typeof Mr && Mr(e), e.tag)) {
          case 0:
          case 11:
          case 14:
          case 15:
            var t = e.updateQueue;
            if (null !== t && null !== (t = t.lastEffect)) {
              var n = (t = t.next);
              do {
                var r = n.destroy;
                if (void 0 !== r) {
                  var o = e;
                  try {
                    r();
                  } catch (e) {
                    Sa(o, e);
                  }
                }
              } while ((n = n.next) !== t);
            }
            break;
          case 1:
            if (
              (Xi(e),
              "function" == typeof (t = e.stateNode).componentWillUnmount)
            )
              try {
                (t.props = e.memoizedProps),
                  (t.state = e.memoizedState),
                  t.componentWillUnmount();
              } catch (t) {
                Sa(e, t);
              }
            break;
          case 5:
            Xi(e);
            break;
          case 4:
            na(e);
        }
      }
      function ea(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function ta(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (ea(t)) {
              var n = t;
              break e;
            }
            t = t.return;
          }
          a("160"), (n = void 0);
        }
        var r = (t = void 0);
        switch (n.tag) {
          case 5:
            (t = n.stateNode), (r = !1);
            break;
          case 3:
          case 4:
            (t = n.stateNode.containerInfo), (r = !0);
            break;
          default:
            a("161");
        }
        16 & n.effectTag && (Zn(t, ""), (n.effectTag &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || ea(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.effectTag) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            n = (n.child.return = n).child;
          }
          if (!(2 & n.effectTag)) {
            n = n.stateNode;
            break e;
          }
        }
        for (var o, i, l, u = e; ; ) {
          if (5 === u.tag || 6 === u.tag)
            n
              ? r
                ? ((o = t),
                  (i = u.stateNode),
                  (l = n),
                  (8 === o.nodeType ? o.parentNode : o).insertBefore(i, l))
                : t.insertBefore(u.stateNode, n)
              : r
              ? ((i = t),
                (l = u.stateNode),
                8 === i.nodeType
                  ? (o = i.parentNode).insertBefore(l, i)
                  : (o = i).appendChild(l),
                null == (i = i._reactRootContainer) &&
                  null === o.onclick &&
                  (o.onclick = ur))
              : t.appendChild(u.stateNode);
          else if (4 !== u.tag && null !== u.child) {
            u = (u.child.return = u).child;
            continue;
          }
          if (u === e) break;
          for (; null === u.sibling; ) {
            if (null === u.return || u.return === e) return;
            u = u.return;
          }
          (u.sibling.return = u.return), (u = u.sibling);
        }
      }
      function na(e) {
        for (var t = e, n = !1, r = void 0, o = void 0; ; ) {
          if (!n) {
            n = t.return;
            e: for (;;) {
              switch ((null === n && a("160"), n.tag)) {
                case 5:
                  (r = n.stateNode), (o = !1);
                  break e;
                case 3:
                case 4:
                  (r = n.stateNode.containerInfo), (o = !0);
                  break e;
              }
              n = n.return;
            }
            n = !0;
          }
          if (5 === t.tag || 6 === t.tag) {
            e: for (var i = t, l = i; ; )
              if ((Zi(l), null !== l.child && 4 !== l.tag))
                (l.child.return = l), (l = l.child);
              else {
                if (l === i) break;
                for (; null === l.sibling; ) {
                  if (null === l.return || l.return === i) break e;
                  l = l.return;
                }
                (l.sibling.return = l.return), (l = l.sibling);
              }
            o
              ? ((i = r),
                (l = t.stateNode),
                (8 === i.nodeType ? i.parentNode : i).removeChild(l))
              : r.removeChild(t.stateNode);
          } else if (4 === t.tag) {
            if (null !== t.child) {
              (r = t.stateNode.containerInfo),
                (o = !0),
                (t = (t.child.return = t).child);
              continue;
            }
          } else if ((Zi(t), null !== t.child)) {
            t = (t.child.return = t).child;
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return;
            4 === (t = t.return).tag && (n = !1);
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      function ra(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Ji(4, 8, t);
            break;
          case 1:
          case 3:
          case 12:
          case 17:
            break;
          case 5:
            if (null != (m = t.stateNode)) {
              var n = t.memoizedProps,
                r = ((e = null !== e ? e.memoizedProps : n), t.type),
                o = t.updateQueue;
              if ((t.updateQueue = null) !== o) {
                var i = m,
                  l = o,
                  u = r,
                  s = e,
                  c = n;
                (i[R] = c),
                  "input" === u &&
                    "radio" === c.type &&
                    null != c.name &&
                    bt(i, c),
                  ar(u, s),
                  (s = ar(u, c));
                for (var d = 0; d < l.length; d += 2) {
                  var f = l[d],
                    p = l[d + 1];
                  "style" === f
                    ? rr(i, p)
                    : "dangerouslySetInnerHTML" === f
                    ? Jn(i, p)
                    : "children" === f
                    ? Zn(i, p)
                    : pt(i, f, p, s);
                }
                switch (u) {
                  case "input":
                    gt(i, c);
                    break;
                  case "textarea":
                    Wn(i, c);
                    break;
                  case "select":
                    (l = i._wrapperState.wasMultiple),
                      (i._wrapperState.wasMultiple = !!c.multiple),
                      null != (u = c.value)
                        ? Un(i, !!c.multiple, u, !1)
                        : l !== !!c.multiple &&
                          (null != c.defaultValue
                            ? Un(i, !!c.multiple, c.defaultValue, !0)
                            : Un(i, !!c.multiple, c.multiple ? [] : "", !1));
                }
              }
            }
            break;
          case 6:
            null === t.stateNode && a("162"),
              (t.stateNode.nodeValue = t.memoizedProps);
            break;
          case 13:
            var h,
              m = t.memoizedState;
            n = void 0;
            (e = t),
              null === m
                ? (n = !1)
                : ((n = !0),
                  (e = t.child),
                  0 === m.timedOutAt && (m.timedOutAt = nl())),
              null !== e &&
                (function (e, t) {
                  for (var n = e; ; ) {
                    if (5 === n.tag) {
                      var r,
                        o = n.stateNode;
                      t
                        ? (o.style.display = "none")
                        : ((o = n.stateNode),
                          (r =
                            null != (r = n.memoizedProps.style) &&
                            r.hasOwnProperty("display")
                              ? r.display
                              : null),
                          (o.style.display = nr("display", r)));
                    } else if (6 === n.tag)
                      n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                    else {
                      if (13 === n.tag && null !== n.memoizedState) {
                        ((o = n.child.sibling).return = n), (n = o);
                        continue;
                      }
                      if (null !== n.child) {
                        n = (n.child.return = n).child;
                        continue;
                      }
                    }
                    if (n === e) break;
                    for (; null === n.sibling; ) {
                      if (null === n.return || n.return === e) return;
                      n = n.return;
                    }
                    (n.sibling.return = n.return), (n = n.sibling);
                  }
                })(e, n),
              null !== (m = t.updateQueue) &&
                ((t.updateQueue = null) === (h = t.stateNode) &&
                  (h = t.stateNode = new Yi()),
                m.forEach(function (e) {
                  var n = function (e, t) {
                    var n = e.stateNode;
                    null !== n && n.delete(t),
                      null !== (e = Da(e, (t = Pa((t = nl()), e)))) &&
                        (qr(e, t), 0 !== (t = e.expirationTime) && rl(e, t));
                  }.bind(null, t, e);
                  h.has(e) || (h.add(e), e.then(n, n));
                }));
            break;
          default:
            a("163");
        }
      }
      var oa = "function" == typeof WeakMap ? WeakMap : Map;
      function ia(e, t, n) {
        ((n = Ni(n)).tag = Di), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            fl(r), Qi(e, t);
          }),
          n
        );
      }
      function aa(e, t, n) {
        (n = Ni(n)).tag = Di;
        var r,
          o = e.type.getDerivedStateFromError,
          i =
            ("function" == typeof o &&
              ((r = t.value),
              (n.payload = function () {
                return o(r);
              })),
            e.stateNode);
        return (
          null !== i &&
            "function" == typeof i.componentDidCatch &&
            (n.callback = function () {
              "function" != typeof o &&
                (null === Ea ? (Ea = new Set([this])) : Ea.add(this));
              var n = t.value,
                r = t.stack;
              Qi(e, t),
                this.componentDidCatch(n, {
                  componentStack: null !== r ? r : "",
                });
            }),
          n
        );
      }
      var la = Be.ReactCurrentDispatcher,
        ua = Be.ReactCurrentOwner,
        sa = 1073741822,
        ca = !1,
        da = null,
        fa = null,
        pa = 0,
        ha = -1,
        ma = !1,
        ya = null,
        ba = !1,
        ga = null,
        va = null,
        _a = null,
        Ea = null;
      function wa() {
        if (null !== da)
          for (var e = da.return; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 1:
                null != t.type.childContextTypes && Pr();
                break;
              case 3:
                go(), Ir();
                break;
              case 5:
                _o(t);
                break;
              case 4:
                go();
                break;
              case 10:
                Ti(t);
            }
            e = e.return;
          }
        (pa = 0), (ma = !(ha = -1)), (da = fa = null);
      }
      function Oa() {
        null !== va && yr(va), null !== _a && _a();
      }
      function ka(e, t) {
        (ba = ca = !0), e.current === t && a("177");
        var n,
          r,
          o,
          l,
          u = e.pendingCommitExpirationTime,
          s =
            (0 === u && a("261"),
            (e.pendingCommitExpirationTime = 0),
            t.expirationTime);
        for (
          o = s < (c = t.childExpirationTime) ? c : s,
            (n = e).didError = !1,
            0 === o
              ? ((n.earliestPendingTime = 0),
                (n.latestPendingTime = 0),
                (n.earliestSuspendedTime = 0),
                (n.latestSuspendedTime = 0),
                (n.latestPingedTime = 0))
              : (o < n.latestPingedTime && (n.latestPingedTime = 0),
                0 !== (l = n.latestPendingTime) &&
                  (o < l
                    ? (n.earliestPendingTime = n.latestPendingTime = 0)
                    : n.earliestPendingTime > o &&
                      (n.earliestPendingTime = n.latestPendingTime)),
                0 === (l = n.earliestSuspendedTime)
                  ? qr(n, o)
                  : o < n.latestSuspendedTime
                  ? ((n.earliestSuspendedTime = 0),
                    (n.latestSuspendedTime = 0),
                    (n.latestPingedTime = 0),
                    qr(n, o))
                  : l < o && qr(n, o)),
            Qr(0, n),
            ua.current = null,
            s = void 0,
            s =
              1 < t.effectTag
                ? null !== t.lastEffect
                  ? (t.lastEffect.nextEffect = t).firstEffect
                  : t
                : t.firstEffect,
            sr = vn,
            cr = (function () {
              var e = Dn();
              if (Rn(e)) {
                if (("selectionStart" in e))
                  var t = { start: e.selectionStart, end: e.selectionEnd };
                else
                  e: if (
                    (o =
                      (t = ((t = e.ownerDocument) && t.defaultView) || window)
                        .getSelection && t.getSelection()) &&
                    0 !== o.rangeCount
                  ) {
                    t = o.anchorNode;
                    var n = o.anchorOffset,
                      r = o.focusNode,
                      o = o.focusOffset;
                    try {
                      t.nodeType, r.nodeType;
                    } catch (e) {
                      t = null;
                      break e;
                    }
                    var i,
                      a = 0,
                      l = -1,
                      u = -1,
                      s = 0,
                      c = 0,
                      d = e,
                      f = null;
                    t: for (;;) {
                      for (
                        ;
                        d !== t || (0 !== n && 3 !== d.nodeType) || (l = a + n),
                          d !== r ||
                            (0 !== o && 3 !== d.nodeType) ||
                            (u = a + o),
                          3 === d.nodeType && (a += d.nodeValue.length),
                          null !== (i = d.firstChild);

                      )
                        (f = d), (d = i);
                      for (;;) {
                        if (d === e) break t;
                        if (
                          (f === t && ++s === n && (l = a),
                          f === r && ++c === o && (u = a),
                          null !== (i = d.nextSibling))
                        )
                          break;
                        f = (d = f).parentNode;
                      }
                      d = i;
                    }
                    t = -1 === l || -1 === u ? null : { start: l, end: u };
                  } else t = null;
                t = t || { start: 0, end: 0 };
              } else t = null;
              return { focusedElem: e, selectionRange: t };
            })(),
            vn = !1,
            ya = s;
          null !== ya;

        ) {
          var c = !1,
            d = void 0;
          try {
            for (p = f = m = h = void 0; null !== ya; ) {
              if (256 & ya.effectTag)
                e: {
                  var f,
                    p,
                    h = ya.alternate,
                    m = ya;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ji(2, 0, m);
                      break e;
                    case 1:
                      256 & m.effectTag &&
                        null !== h &&
                        ((f = h.memoizedProps),
                        (p = h.memoizedState),
                        (m = (h = m.stateNode).getSnapshotBeforeUpdate(
                          m.elementType === m.type ? f : Xr(m.type, f),
                          p
                        )),
                        (h.__reactInternalSnapshotBeforeUpdate = m));
                      break e;
                    case 3:
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                      break e;
                    default:
                      a("163");
                  }
                }
              ya = ya.nextEffect;
            }
          } catch (e) {
            (c = !0), (d = e);
          }
          c &&
            (null === ya && a("178"),
            Sa(ya, d),
            null !== ya && (ya = ya.nextEffect));
        }
        for (ya = s; null !== ya; ) {
          (c = !1), (d = void 0);
          try {
            for (y = b = void 0; null !== ya; ) {
              var y,
                b = ya.effectTag;
              switch (
                (16 & b && Zn(ya.stateNode, ""),
                128 & b &&
                  null !== (y = ya.alternate) &&
                  null !== (y = y.ref) &&
                  ("function" == typeof y ? y(null) : (y.current = null)),
                14 & b)
              ) {
                case 2:
                  ta(ya), (ya.effectTag &= -3);
                  break;
                case 6:
                  ta(ya), (ya.effectTag &= -3), ra(ya.alternate, ya);
                  break;
                case 4:
                  ra(ya.alternate, ya);
                  break;
                case 8:
                  na((b = ya)),
                    (b.return = null),
                    (b.child = null),
                    (b.memoizedState = null),
                    (b.updateQueue = null) !== (b = b.alternate) &&
                      ((b.return = null),
                      (b.child = null),
                      (b.memoizedState = null),
                      (b.updateQueue = null));
              }
              ya = ya.nextEffect;
            }
          } catch (e) {
            (c = !0), (d = e);
          }
          c &&
            (null === ya && a("178"),
            Sa(ya, d),
            null !== ya && (ya = ya.nextEffect));
        }
        for (
          (function (e) {
            var t,
              n,
              r,
              o = Dn(),
              i = e.focusedElem,
              a = e.selectionRange;
            if (
              o !== i &&
              i &&
              i.ownerDocument &&
              (function e(t, n) {
                return (
                  !(!t || !n) &&
                  (t === n ||
                    ((!t || 3 !== t.nodeType) &&
                      (n && 3 === n.nodeType
                        ? e(t, n.parentNode)
                        : ("contains" in t)
                        ? t.contains(n)
                        : !!t.compareDocumentPosition &&
                          !!(16 & t.compareDocumentPosition(n)))))
                );
              })(i.ownerDocument.documentElement, i)
            ) {
              null !== a &&
                Rn(i) &&
                ((o = a.start),
                void 0 === (e = a.end) && (e = o),
                ("selectionStart" in i)
                  ? ((i.selectionStart = o),
                    (i.selectionEnd = Math.min(e, i.value.length)))
                  : (e =
                      ((o = i.ownerDocument || document) && o.defaultView) ||
                      window).getSelection &&
                    ((e = e.getSelection()),
                    (n = i.textContent.length),
                    (t = Math.min(a.start, n)),
                    (a = void 0 === a.end ? t : Math.min(a.end, n)),
                    !e.extend && a < t && ((n = a), (a = t), (t = n)),
                    (n = In(i, t)),
                    (r = In(i, a)),
                    n &&
                      r &&
                      (1 !== e.rangeCount ||
                        e.anchorNode !== n.node ||
                        e.anchorOffset !== n.offset ||
                        e.focusNode !== r.node ||
                        e.focusOffset !== r.offset) &&
                      ((o = o.createRange()).setStart(n.node, n.offset),
                      e.removeAllRanges(),
                      a < t
                        ? (e.addRange(o), e.extend(r.node, r.offset))
                        : (o.setEnd(r.node, r.offset), e.addRange(o)))));
              for (o = [], e = i; (e = e.parentNode); )
                1 === e.nodeType &&
                  o.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
              for (
                "function" == typeof i.focus && i.focus(), i = 0;
                i < o.length;
                i++
              )
                ((e = o[i]).element.scrollLeft = e.left),
                  (e.element.scrollTop = e.top);
            }
          })(cr),
            vn = !!sr,
            sr = cr = null,
            e.current = t,
            ya = s;
          null !== ya;

        ) {
          (c = !1), (d = void 0);
          try {
            k = T = O = w = E = _ = void 0;
            for (var g = e, v = u; null !== ya; ) {
              var _ = ya.effectTag;
              if (36 & _) {
                var E = ya.alternate,
                  w = ya,
                  O = v;
                switch (w.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ji(16, 32, w);
                    break;
                  case 1:
                    var k,
                      T = w.stateNode;
                    4 & w.effectTag &&
                      (null === E
                        ? T.componentDidMount()
                        : ((k =
                            w.elementType === w.type
                              ? E.memoizedProps
                              : Xr(w.type, E.memoizedProps)),
                          T.componentDidUpdate(
                            k,
                            E.memoizedState,
                            T.__reactInternalSnapshotBeforeUpdate
                          ))),
                      null !== (E = w.updateQueue) && Ui(0, E, T);
                    break;
                  case 3:
                    if (null !== (E = w.updateQueue)) {
                      if ((T = null) !== w.child)
                        switch (w.child.tag) {
                          case 5:
                          case 1:
                            T = w.child.stateNode;
                        }
                      Ui(0, E, T);
                    }
                    break;
                  case 5:
                    (O = w.stateNode),
                      null === E &&
                        4 & w.effectTag &&
                        dr(w.type, w.memoizedProps) &&
                        O.focus();
                    break;
                  case 6:
                  case 4:
                  case 12:
                  case 13:
                  case 17:
                    break;
                  default:
                    a("163");
                }
              }
              128 & _ &&
                null !== (w = ya.ref) &&
                ((O = ya.stateNode),
                "function" == typeof w ? w(O) : (w.current = O)),
                512 & _ && (ga = g),
                (ya = ya.nextEffect);
            }
          } catch (e) {
            (c = !0), (d = e);
          }
          c &&
            (null === ya && a("178"),
            Sa(ya, d),
            null !== ya && (ya = ya.nextEffect));
        }
        null !== s &&
          null !== ga &&
          ((r = function (e, t) {
            _a = va = ga = null;
            var n = La;
            La = !0;
            do {
              if (512 & t.effectTag) {
                var r = !1,
                  o = void 0;
                try {
                  var i = t;
                  Ji(128, 0, i), Ji(0, 64, i);
                } catch (e) {
                  (r = !0), (o = e);
                }
                r && Sa(t, o);
              }
            } while (null !== (t = t.nextEffect));
            (La = n),
              0 !== (n = e.expirationTime) && rl(e, n),
              $a || La || ul(1073741823, !1);
          }.bind(null, e, s)),
          (va = i.unstable_runWithPriority(
            i.unstable_NormalPriority,
            function () {
              return mr(r);
            }
          )),
          (_a = r)),
          (ca = ba = !1),
          "function" == typeof Nr && Nr(t.stateNode),
          0 ===
            (t =
              (u = t.expirationTime) < (t = t.childExpirationTime) ? t : u) &&
            (Ea = null),
          (l = t),
          ((o = e).expirationTime = l),
          (o.finishedWork = null);
      }
      function Ta(e) {
        for (;;) {
          var t = e.alternate,
            n = e.return,
            r = e.sibling;
          if (0 == (1024 & e.effectTag)) {
            e: {
              var i = t,
                l = pa,
                u = (t = da = e).pendingProps;
              switch (t.tag) {
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
                case 18:
                  break;
                case 1:
                case 17:
                  Sr(t.type) && Pr();
                  break;
                case 3:
                  go(),
                    Ir(),
                    (u = t.stateNode).pendingContext &&
                      ((u.context = u.pendingContext),
                      (u.pendingContext = null)),
                    (null !== i && null !== i.child) ||
                      (ii(t), (t.effectTag &= -3));
                  break;
                case 5:
                  _o(t);
                  var s = yo(mo.current);
                  l = t.type;
                  if (null !== i && null != t.stateNode)
                    qi(i, t, l, u, s), i.ref !== t.ref && (t.effectTag |= 128);
                  else if (u) {
                    var c = yo(po.current);
                    if (ii(t)) {
                      i = (u = t).stateNode;
                      var d = u.type,
                        f = u.memoizedProps,
                        p = s;
                      switch (((i[D] = u), (i[R] = f), (l = void 0), (s = d))) {
                        case "iframe":
                        case "object":
                          _n("load", i);
                          break;
                        case "video":
                        case "audio":
                          for (d = 0; d < Z.length; d++) _n(Z[d], i);
                          break;
                        case "source":
                          _n("error", i);
                          break;
                        case "img":
                        case "image":
                        case "link":
                          _n("error", i), _n("load", i);
                          break;
                        case "form":
                          _n("reset", i), _n("submit", i);
                          break;
                        case "details":
                          _n("toggle", i);
                          break;
                        case "input":
                          yt(i, f), _n("invalid", i), lr(p, "onChange");
                          break;
                        case "select":
                          (i._wrapperState = { wasMultiple: !!f.multiple }),
                            _n("invalid", i),
                            lr(p, "onChange");
                          break;
                        case "textarea":
                          $n(i, f), _n("invalid", i), lr(p, "onChange");
                      }
                      for (l in (ir(s, f), (d = null), f))
                        f.hasOwnProperty(l) &&
                          ((c = f[l]),
                          "children" === l
                            ? "string" == typeof c
                              ? i.textContent !== c && (d = ["children", c])
                              : "number" == typeof c &&
                                i.textContent !== "" + c &&
                                (d = ["children", "" + c])
                            : v.hasOwnProperty(l) && null != c && lr(p, l));
                      switch (s) {
                        case "input":
                          Fe(i), vt(i, f, !0);
                          break;
                        case "textarea":
                          Fe(i), Vn(i);
                          break;
                        case "select":
                        case "option":
                          break;
                        default:
                          "function" == typeof f.onClick && (i.onclick = ur);
                      }
                      (l = d), (u.updateQueue = l), (u = null !== l) && Wi(t);
                    } else {
                      (f = t),
                        (p = l),
                        (i = u),
                        (d = 9 === s.nodeType ? s : s.ownerDocument),
                        (c = c === qn ? Gn(p) : c) === qn
                          ? "script" === p
                            ? (((i = d.createElement("div")).innerHTML =
                                "<script></script>"),
                              (d = i.removeChild(i.firstChild)))
                            : "string" == typeof i.is
                            ? (d = d.createElement(p, { is: i.is }))
                            : ((d = d.createElement(p)),
                              "select" === p &&
                                ((p = d),
                                i.multiple
                                  ? (p.multiple = !0)
                                  : i.size && (p.size = i.size)))
                          : (d = d.createElementNS(c, p)),
                        ((i = d)[D] = f),
                        (i[R] = u),
                        Vi(i, t);
                      p = i;
                      var h = s,
                        m = ar((d = l), (f = u));
                      switch (d) {
                        case "iframe":
                        case "object":
                          _n("load", p), (s = f);
                          break;
                        case "video":
                        case "audio":
                          for (s = 0; s < Z.length; s++) _n(Z[s], p);
                          s = f;
                          break;
                        case "source":
                          _n("error", p), (s = f);
                          break;
                        case "img":
                        case "image":
                        case "link":
                          _n("error", p), _n("load", p), (s = f);
                          break;
                        case "form":
                          _n("reset", p), _n("submit", p), (s = f);
                          break;
                        case "details":
                          _n("toggle", p), (s = f);
                          break;
                        case "input":
                          yt(p, f),
                            (s = mt(p, f)),
                            _n("invalid", p),
                            lr(h, "onChange");
                          break;
                        case "option":
                          s = Bn(p, f);
                          break;
                        case "select":
                          (p._wrapperState = { wasMultiple: !!f.multiple }),
                            (s = o({}, f, { value: void 0 })),
                            _n("invalid", p),
                            lr(h, "onChange");
                          break;
                        case "textarea":
                          $n(p, f),
                            (s = Hn(p, f)),
                            _n("invalid", p),
                            lr(h, "onChange");
                          break;
                        default:
                          s = f;
                      }
                      ir(d, s);
                      c = void 0;
                      var y,
                        b = d,
                        g = p,
                        _ = s;
                      for (c in _)
                        _.hasOwnProperty(c) &&
                          ((y = _[c]),
                          "style" === c
                            ? rr(g, y)
                            : "dangerouslySetInnerHTML" === c
                            ? null != (y = y ? y.__html : void 0) && Jn(g, y)
                            : "children" === c
                            ? "string" == typeof y
                              ? ("textarea" === b && "" === y) || Zn(g, y)
                              : "number" == typeof y && Zn(g, "" + y)
                            : "suppressContentEditableWarning" !== c &&
                              "suppressHydrationWarning" !== c &&
                              "autoFocus" !== c &&
                              (v.hasOwnProperty(c)
                                ? null != y && lr(h, c)
                                : null != y && pt(g, c, y, m)));
                      switch (d) {
                        case "input":
                          Fe(p), vt(p, f, !1);
                          break;
                        case "textarea":
                          Fe(p), Vn(p);
                          break;
                        case "option":
                          null != f.value &&
                            p.setAttribute("value", "" + ht(f.value));
                          break;
                        case "select":
                          ((s = p).multiple = !!f.multiple),
                            null != (p = f.value)
                              ? Un(s, !!f.multiple, p, !1)
                              : null != f.defaultValue &&
                                Un(s, !!f.multiple, f.defaultValue, !0);
                          break;
                        default:
                          "function" == typeof s.onClick && (p.onclick = ur);
                      }
                      (u = dr(l, u)) && Wi(t), (t.stateNode = i);
                    }
                    null !== t.ref && (t.effectTag |= 128);
                  } else null === t.stateNode && a("166");
                  break;
                case 6:
                  i && null != t.stateNode
                    ? Gi(0, t, i.memoizedProps, u)
                    : ("string" != typeof u && null === t.stateNode && a("166"),
                      (i = yo(mo.current)),
                      yo(po.current),
                      ii(t)
                        ? ((l = (u = t).stateNode),
                          (i = u.memoizedProps),
                          (l[D] = u),
                          (u = l.nodeValue !== i) && Wi(t))
                        : ((l = t),
                          ((u = (
                            9 === i.nodeType ? i : i.ownerDocument
                          ).createTextNode(u))[D] = t),
                          (l.stateNode = u)));
                  break;
                case 13:
                  if (((u = t.memoizedState), 0 != (64 & t.effectTag))) {
                    (t.expirationTime = l), (da = t);
                    break e;
                  }
                  (u = null !== u),
                    (l = null !== i && null !== i.memoizedState),
                    null !== i &&
                      !u &&
                      l &&
                      null !== (i = i.child.sibling) &&
                      (null !== (s = t.firstEffect)
                        ? ((t.firstEffect = i).nextEffect = s)
                        : ((t.firstEffect = t.lastEffect = i).nextEffect =
                            null),
                      (i.effectTag = 8)),
                    (u || l) && (t.effectTag |= 4);
                  break;
                case 4:
                  go();
                  break;
                case 10:
                  Ti(t);
                  break;
                default:
                  a("156");
              }
              da = null;
            }
            if (((t = e), 1 === pa || 1 !== t.childExpirationTime)) {
              for (u = 0, l = t.child; null !== l; )
                (u = u < (i = l.expirationTime) ? i : u) <
                  (s = l.childExpirationTime) && (u = s),
                  (l = l.sibling);
              t.childExpirationTime = u;
            }
            if (null !== da) return da;
            null !== n &&
              0 == (1024 & n.effectTag) &&
              (null === n.firstEffect && (n.firstEffect = e.firstEffect),
              null !== e.lastEffect &&
                (null !== n.lastEffect &&
                  (n.lastEffect.nextEffect = e.firstEffect),
                (n.lastEffect = e.lastEffect)),
              1 < e.effectTag &&
                (null !== n.lastEffect
                  ? (n.lastEffect.nextEffect = e)
                  : (n.firstEffect = e),
                (n.lastEffect = e)));
          } else {
            if (
              null !==
              (e = (function (e) {
                switch (e.tag) {
                  case 1:
                    Sr(e.type) && Pr();
                    var t = e.effectTag;
                    return 2048 & t
                      ? ((e.effectTag = (-2049 & t) | 64), e)
                      : null;
                  case 3:
                    return (
                      go(),
                      Ir(),
                      0 != (64 & (t = e.effectTag)) && a("285"),
                      (e.effectTag = (-2049 & t) | 64),
                      e
                    );
                  case 5:
                    return _o(e), null;
                  case 13:
                    return 2048 & (t = e.effectTag)
                      ? ((e.effectTag = (-2049 & t) | 64), e)
                      : null;
                  case 18:
                  default:
                    return null;
                  case 4:
                    return go(), null;
                  case 10:
                    return Ti(e), null;
                }
              })(e))
            )
              return (e.effectTag &= 1023), e;
            null !== n &&
              ((n.firstEffect = n.lastEffect = null), (n.effectTag |= 1024));
          }
          if (null !== r) return r;
          if (null === n) break;
          e = n;
        }
        return null;
      }
      function Ca(e) {
        var t = (function (e, t, n) {
          var r = t.expirationTime;
          if (null !== e) {
            if (e.memoizedProps !== t.pendingProps || Tr.current) ui = !0;
            else if (r < n) {
              switch (((ui = !1), t.tag)) {
                case 3:
                  bi(t), ai();
                  break;
                case 5:
                  vo(t);
                  break;
                case 1:
                  Sr(t.type) && jr(t);
                  break;
                case 4:
                  bo(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  ki(t, t.memoizedProps.value);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (r = t.child.childExpirationTime) && n <= r
                      ? gi(e, t, n)
                      : null !== (t = vi(e, t, n))
                      ? t.sibling
                      : null;
              }
              return vi(e, t, n);
            }
          } else ui = !1;
          switch (((t.expirationTime = 0), t.tag)) {
            case 2:
              (r = t.elementType),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (e = t.pendingProps);
              var o = xr(t, kr.current);
              return (
                Ci(t, n),
                (o = Ko(null, t, r, e, o, n)),
                (t.effectTag |= 1),
                "object" == typeof o &&
                null !== o &&
                "function" == typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    Lo(),
                    Sr(r) ? ((i = !0), jr(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    "function" == typeof (s = r.getDerivedStateFromProps) &&
                      Zr(t, 0, s, e),
                    (o.updater = eo),
                    oo(((t.stateNode = o)._reactInternalFiber = t), r, e, n),
                    yi(null, t, r, !0, i, n))
                  : ((t.tag = 0), si(null, t, o, n), t.child)
              );
            case 16:
              switch (
                ((o = t.elementType),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (i = t.pendingProps),
                (e = (function (e) {
                  var t = e._result;
                  switch (e._status) {
                    case 1:
                      return t;
                    case 2:
                    case 0:
                      throw t;
                    default:
                      switch (
                        ((e._status = 0),
                        (t = (t = e._ctor)()).then(
                          function (t) {
                            0 === e._status &&
                              ((t = t.default),
                              (e._status = 1),
                              (e._result = t));
                          },
                          function (t) {
                            0 === e._status &&
                              ((e._status = 2), (e._result = t));
                          }
                        ),
                        e._status)
                      ) {
                        case 1:
                          return e._result;
                        case 2:
                          throw e._result;
                      }
                      throw (e._result = t);
                  }
                })(o)),
                (t.type = e),
                (o = t.tag =
                  (function (e) {
                    if ("function" == typeof e) return zr(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === Xe) return 11;
                      if (e === Ze) return 14;
                    }
                    return 2;
                  })(e)),
                (i = Xr(e, i)),
                (s = void 0),
                o)
              ) {
                case 0:
                  s = hi(null, t, e, i, n);
                  break;
                case 1:
                  s = mi(null, t, e, i, n);
                  break;
                case 11:
                  s = ci(null, t, e, i, n);
                  break;
                case 14:
                  s = di(null, t, e, Xr(e.type, i), r, n);
                  break;
                default:
                  a("306", e, "");
              }
              return s;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                hi(e, t, r, (o = t.elementType === r ? o : Xr(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                mi(e, t, r, (o = t.elementType === r ? o : Xr(r, o)), n)
              );
            case 3:
              return (
                bi(t),
                null === (r = t.updateQueue) && a("282"),
                (o = null !== (o = t.memoizedState) ? o.element : null),
                Bi(t, r, t.pendingProps, null, n),
                (r = t.memoizedState.element) === o
                  ? (ai(), vi(e, t, n))
                  : ((o = t.stateNode),
                    (o = (null === e || null === e.child) && o.hydrate) &&
                      ((Zo = gr(t.stateNode.containerInfo)),
                      (Jo = t),
                      (o = ei = !0)),
                    o
                      ? ((t.effectTag |= 2), (t.child = co(t, null, r, n)))
                      : (si(e, t, r, n), ai()),
                    t.child)
              );
            case 5:
              return (
                vo(t),
                null === e && ri(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (s = o.children),
                fr(r, o)
                  ? (s = null)
                  : null !== i && fr(r, i) && (t.effectTag |= 16),
                pi(e, t),
                1 !== n && 1 & t.mode && o.hidden
                  ? ((t.expirationTime = t.childExpirationTime = 1), null)
                  : (si(e, t, s, n), t.child)
              );
            case 6:
              return null === e && ri(t), null;
            case 13:
              return gi(e, t, n);
            case 4:
              return (
                bo(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = so(t, null, r, n)) : si(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                ci(e, t, r, (o = t.elementType === r ? o : Xr(r, o)), n)
              );
            case 7:
              return si(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return si(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (s = t.memoizedProps),
                  ki(t, (i = o.value)),
                  null !== s)
                ) {
                  var i,
                    l = s.value;
                  if (
                    0 ==
                    (i = Gt(l, i)
                      ? 0
                      : 0 |
                        ("function" == typeof r._calculateChangedBits
                          ? r._calculateChangedBits(l, i)
                          : 1073741823))
                  ) {
                    if (s.children === o.children && !Tr.current) {
                      t = vi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var u = l.contextDependencies;
                      if (null !== u)
                        for (var s = l.child, c = u.first; null !== c; ) {
                          if (c.context === r && 0 != (c.observedBits & i)) {
                            1 === l.tag && (((c = Ni(n)).tag = Ii), Ki(l, c)),
                              l.expirationTime < n && (l.expirationTime = n),
                              null !== (c = l.alternate) &&
                                c.expirationTime < n &&
                                (c.expirationTime = n),
                              (c = n);
                            for (var d = l.return; null !== d; ) {
                              var f = d.alternate;
                              if (d.childExpirationTime < c)
                                (d.childExpirationTime = c),
                                  null !== f &&
                                    f.childExpirationTime < c &&
                                    (f.childExpirationTime = c);
                              else {
                                if (!(null !== f && f.childExpirationTime < c))
                                  break;
                                f.childExpirationTime = c;
                              }
                              d = d.return;
                            }
                            u.expirationTime < n && (u.expirationTime = n);
                            break;
                          }
                          c = c.next;
                        }
                      else
                        s = 10 === l.tag && l.type === t.type ? null : l.child;
                      if (null !== s) s.return = l;
                      else
                        for (s = l; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (l = s.sibling)) {
                            (l.return = s.return), (s = l);
                            break;
                          }
                          s = s.return;
                        }
                      l = s;
                    }
                }
                si(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = (i = t.pendingProps).children),
                Ci(t, n),
                (r = r((o = xi(o, i.unstable_observedBits)))),
                (t.effectTag |= 1),
                si(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = Xr((o = t.type), t.pendingProps)),
                di(e, t, o, (i = Xr(o.type, i)), r, n)
              );
            case 15:
              return fi(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Xr(r, o)),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (t.tag = 1),
                Sr(r) ? ((e = !0), jr(t)) : (e = !1),
                Ci(t, n),
                no(t, r, o),
                oo(t, r, o, n),
                yi(null, t, r, !0, e, n)
              );
          }
          a("156");
        })(e.alternate, e, pa);
        return (
          (e.memoizedProps = e.pendingProps),
          null === t && (t = Ta(e)),
          (ua.current = null),
          t
        );
      }
      function xa(e, t) {
        ca && a("243"), Oa(), (ca = !0);
        for (
          var n = la.current,
            r = ((la.current = Yo), e.nextExpirationTimeToWorkOn),
            o =
              ((r === pa && e === fa && null !== da) ||
                (wa(),
                (pa = r),
                (da = Br((fa = e).current, null)),
                (e.pendingCommitExpirationTime = 0)),
              !1);
          ;

        ) {
          try {
            if (t) for (; null !== da && !al(); ) da = Ca(da);
            else for (; null !== da; ) da = Ca(da);
          } catch (t) {
            if (((Oi = wi = Ei = null), Lo(), null === da)) (o = !0), fl(t);
            else {
              null === da && a("271");
              var i = da;
              if (null !== (c = i.return)) {
                e: {
                  var l = e,
                    u = c,
                    s = t,
                    c = pa;
                  if (
                    (((m = i).effectTag |= 1024),
                    (m.firstEffect = m.lastEffect = null) !== s &&
                      "object" == typeof s &&
                      "function" == typeof s.then)
                  ) {
                    var d = s,
                      f = ((s = u), -1),
                      p = -1;
                    do {
                      if (13 === s.tag) {
                        var h = s.alternate;
                        if (null !== h && null !== (h = h.memoizedState)) {
                          p = 10 * (1073741822 - h.timedOutAt);
                          break;
                        }
                        "number" == typeof (h = s.pendingProps.maxDuration) &&
                          (h <= 0 ? (f = 0) : (-1 === f || h < f) && (f = h));
                      }
                    } while (null !== (s = s.return));
                    s = u;
                    do {
                      if (
                        (h = (h = 13 === s.tag)
                          ? void 0 !== s.memoizedProps.fallback &&
                            null === s.memoizedState
                          : h)
                      ) {
                        if (
                          (null === (u = s.updateQueue)
                            ? ((u = new Set()).add(d), (s.updateQueue = u))
                            : u.add(d),
                          0 == (1 & s.mode))
                        ) {
                          (s.effectTag |= 64),
                            (m.effectTag &= -1957),
                            1 === m.tag &&
                              (null === m.alternate
                                ? (m.tag = 17)
                                : (((c = Ni(1073741823)).tag = Ii), Ki(m, c))),
                            (m.expirationTime = 1073741823);
                          break e;
                        }
                        u = c;
                        var m,
                          y = (m = l).pingCache;
                        null === y
                          ? ((y = m.pingCache = new oa()),
                            (h = new Set()),
                            y.set(d, h))
                          : void 0 === (h = y.get(d)) &&
                            ((h = new Set()), y.set(d, h)),
                          h.has(u) ||
                            (h.add(u),
                            (m = Ia.bind(null, m, d, u)),
                            d.then(m, m)),
                          0 <=
                            (l =
                              -1 === f
                                ? 1073741823
                                : (p =
                                    -1 === p
                                      ? 10 * (1073741822 - Yr(l, c)) - 5e3
                                      : p) + f) &&
                            ha < l &&
                            (ha = l),
                          (s.effectTag |= 2048),
                          (s.expirationTime = c);
                        break e;
                      }
                    } while (null !== (s = s.return));
                    s = Error(
                      (rt(m.type) || "A React component") +
                        " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                        ot(m)
                    );
                  }
                  (ma = !0), (s = $i(s, m)), (l = u);
                  do {
                    switch (l.tag) {
                      case 3:
                        (l.effectTag |= 2048),
                          (l.expirationTime = c),
                          Li(l, (c = ia(l, s, c)));
                        break e;
                      case 1:
                        if (
                          ((f = s),
                          (p = l.type),
                          (m = l.stateNode),
                          0 == (64 & l.effectTag) &&
                            ("function" == typeof p.getDerivedStateFromError ||
                              (null !== m &&
                                "function" == typeof m.componentDidCatch &&
                                (null === Ea || !Ea.has(m)))))
                        ) {
                          (l.effectTag |= 2048),
                            (l.expirationTime = c),
                            Li(l, (c = aa(l, f, c)));
                          break e;
                        }
                    }
                  } while (null !== (l = l.return));
                }
                da = Ta(i);
                continue;
              }
              (o = !0), fl(t);
            }
          }
          break;
        }
        if (((ca = !1), (la.current = n), (Oi = wi = Ei = null), Lo(), o))
          (fa = null), (e.finishedWork = null);
        else if (null !== da) e.finishedWork = null;
        else {
          if (
            (null === (n = e.current.alternate) && a("281"), (fa = null), ma)
          ) {
            if (
              ((o = e.latestPendingTime),
              (i = e.latestSuspendedTime),
              (c = e.latestPingedTime),
              (0 !== o && o < r) || (0 !== i && i < r) || (0 !== c && c < r))
            )
              return Gr(e, r), tl(e, n, r, e.expirationTime, -1);
            if (!e.didError && t)
              return (
                (e.didError = !0),
                (r = e.nextExpirationTimeToWorkOn = r),
                (t = e.expirationTime = 1073741823),
                tl(e, n, r, t, -1)
              );
          }
          t && -1 !== ha
            ? (Gr(e, r),
              (t = 10 * (1073741822 - Yr(e, r))) < ha && (ha = t),
              (t = 10 * (1073741822 - nl())),
              (t = ha - t),
              tl(e, n, r, e.expirationTime, t < 0 ? 0 : t))
            : ((e.pendingCommitExpirationTime = r), (e.finishedWork = n));
        }
      }
      function Sa(e, t) {
        for (var n = e.return; null !== n; ) {
          switch (n.tag) {
            case 1:
              var r = n.stateNode;
              if (
                "function" != typeof n.type.getDerivedStateFromError &&
                ("function" != typeof r.componentDidCatch ||
                  (null !== Ea && Ea.has(r)))
              )
                break;
              return (
                Ki(n, (e = aa(n, (e = $i(t, e)), 1073741823))),
                Ra(n, 1073741823)
              );
            case 3:
              return (
                Ki(n, (e = ia(n, (e = $i(t, e)), 1073741823))),
                Ra(n, 1073741823)
              );
          }
          n = n.return;
        }
        3 === e.tag &&
          (Ki(e, (n = ia(e, (n = $i(t, e)), 1073741823))), Ra(e, 1073741823));
      }
      function Pa(e, t) {
        var n = i.unstable_getCurrentPriorityLevel(),
          r = void 0;
        if (0 == (1 & t.mode)) r = 1073741823;
        else if (ca && !ba) r = pa;
        else {
          switch (n) {
            case i.unstable_ImmediatePriority:
              r = 1073741823;
              break;
            case i.unstable_UserBlockingPriority:
              r = 1073741822 - 10 * (1 + (((1073741822 - e + 15) / 10) | 0));
              break;
            case i.unstable_NormalPriority:
              r = 1073741822 - 25 * (1 + (((1073741822 - e + 500) / 25) | 0));
              break;
            case i.unstable_LowPriority:
            case i.unstable_IdlePriority:
              r = 1;
              break;
            default:
              a("313");
          }
          null !== fa && r === pa && --r;
        }
        return (
          n === i.unstable_UserBlockingPriority &&
            (0 === Ba || r < Ba) &&
            (Ba = r),
          r
        );
      }
      function Ia(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          null !== fa && pa === n
            ? (fa = null)
            : ((t = e.earliestSuspendedTime),
              (r = e.latestSuspendedTime),
              0 !== t &&
                n <= t &&
                r <= n &&
                ((e.didError = !1),
                (0 === (t = e.latestPingedTime) || n < t) &&
                  (e.latestPingedTime = n),
                Qr(n, e),
                0 !== (n = e.expirationTime) && rl(e, n)));
      }
      function Da(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate,
          r =
            (null !== n && n.expirationTime < t && (n.expirationTime = t),
            e.return),
          o = null;
        if (null === r && 3 === e.tag) o = e.stateNode;
        else
          for (; null !== r; ) {
            if (
              ((n = r.alternate),
              r.childExpirationTime < t && (r.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t),
              null === r.return && 3 === r.tag)
            ) {
              o = r.stateNode;
              break;
            }
            r = r.return;
          }
        return o;
      }
      function Ra(e, t) {
        null !== (e = Da(e, t)) &&
          (!ca && 0 !== pa && pa < t && wa(),
          qr(e, t),
          (ca && !ba && fa === e) || rl(e, e.expirationTime),
          Qa < Xa && ((Xa = 0), a("185")));
      }
      function ja(e, t, n, r, o) {
        return i.unstable_runWithPriority(
          i.unstable_ImmediatePriority,
          function () {
            return e(t, n, r, o);
          }
        );
      }
      var Aa = null,
        Na = null,
        Ma = 0,
        Ka = void 0,
        La = !1,
        Fa = null,
        za = 0,
        Ba = 0,
        Ua = !1,
        Ha = null,
        $a = !1,
        Wa = !1,
        Va = null,
        qa = i.unstable_now(),
        Ga = 1073741822 - ((qa / 10) | 0),
        Ya = Ga,
        Qa = 50,
        Xa = 0,
        Ja = null;
      function Za() {
        Ga = 1073741822 - (((i.unstable_now() - qa) / 10) | 0);
      }
      function el(e, t) {
        if (0 !== Ma) {
          if (t < Ma) return;
          null !== Ka && i.unstable_cancelCallback(Ka);
        }
        (Ma = t),
          (e = i.unstable_now() - qa),
          (Ka = i.unstable_scheduleCallback(ll, {
            timeout: 10 * (1073741822 - t) - e,
          }));
      }
      function tl(e, t, n, r, o) {
        (e.expirationTime = r),
          0 !== o || al()
            ? 0 < o &&
              (e.timeoutHandle = pr(
                function (e, t, n) {
                  (e.pendingCommitExpirationTime = n),
                    (e.finishedWork = t),
                    Za(),
                    (Ya = Ga),
                    sl(e, n);
                }.bind(null, e, t, n),
                o
              ))
            : ((e.pendingCommitExpirationTime = n), (e.finishedWork = t));
      }
      function nl() {
        return La || (ol(), (0 !== za && 1 !== za) || (Za(), (Ya = Ga))), Ya;
      }
      function rl(e, t) {
        null === e.nextScheduledRoot
          ? ((e.expirationTime = t),
            null === Na
              ? ((Aa = Na = e).nextScheduledRoot = e)
              : ((Na = Na.nextScheduledRoot = e).nextScheduledRoot = Aa))
          : t > e.expirationTime && (e.expirationTime = t),
          La ||
            ($a
              ? Wa && cl((Fa = e), (za = 1073741823), !1)
              : 1073741823 === t
              ? ul(1073741823, !1)
              : el(0, t));
      }
      function ol() {
        var e = 0,
          t = null;
        if (null !== Na)
          for (var n = Na, r = Aa; null !== r; ) {
            var o = r.expirationTime;
            if (0 === o) {
              if (
                ((null !== n && null !== Na) || a("244"),
                r === r.nextScheduledRoot)
              ) {
                Aa = Na = r.nextScheduledRoot = null;
                break;
              }
              if (r === Aa)
                (Aa = o = r.nextScheduledRoot),
                  (Na.nextScheduledRoot = o),
                  (r.nextScheduledRoot = null);
              else {
                if (r === Na) {
                  ((Na = n).nextScheduledRoot = Aa),
                    (r.nextScheduledRoot = null);
                  break;
                }
                (n.nextScheduledRoot = r.nextScheduledRoot),
                  (r.nextScheduledRoot = null);
              }
              r = n.nextScheduledRoot;
            } else {
              if ((e < o && ((e = o), (t = r)), r === Na)) break;
              if (1073741823 === e) break;
              r = (n = r).nextScheduledRoot;
            }
          }
        (Fa = t), (za = e);
      }
      var il = !1;
      function al() {
        return il || (i.unstable_shouldYield() && (il = !0));
      }
      function ll() {
        try {
          if (!al() && null !== Aa) {
            Za();
            var e = Aa;
            do {
              var t = e.expirationTime;
            } while (
              (0 !== t && Ga <= t && (e.nextExpirationTimeToWorkOn = Ga),
              (e = e.nextScheduledRoot) !== Aa)
            );
          }
          ul(0, !0);
        } finally {
          il = !1;
        }
      }
      function ul(e, t) {
        if ((ol(), t))
          for (
            Za(), Ya = Ga;
            null !== Fa && 0 !== za && e <= za && !(il && za < Ga);

          )
            cl(Fa, za, za < Ga), ol(), Za(), (Ya = Ga);
        else for (; null !== Fa && 0 !== za && e <= za; ) cl(Fa, za, !1), ol();
        if (
          (t && ((Ma = 0), (Ka = null)),
          0 !== za && el(0, za),
          (Xa = 0),
          (Ja = null) !== Va)
        )
          for (e = Va, Va = null, t = 0; t < e.length; t++) {
            var n = e[t];
            try {
              n._onComplete();
            } catch (e) {
              Ua || ((Ua = !0), (Ha = e));
            }
          }
        if (Ua) throw ((e = Ha), (Ha = null), (Ua = !1), e);
      }
      function sl(e, t) {
        La && a("253"), cl((Fa = e), (za = t), !1), ul(1073741823, !1);
      }
      function cl(e, t, n) {
        var r;
        La && a("245"),
          (La = !0),
          n
            ? null !== (r = e.finishedWork)
              ? dl(e, r, t)
              : ((e.finishedWork = null),
                -1 !== (r = e.timeoutHandle) && ((e.timeoutHandle = -1), hr(r)),
                xa(e, n),
                null !== (r = e.finishedWork) &&
                  (al() ? (e.finishedWork = r) : dl(e, r, t)))
            : null !== (r = e.finishedWork)
            ? dl(e, r, t)
            : ((e.finishedWork = null),
              -1 !== (r = e.timeoutHandle) && ((e.timeoutHandle = -1), hr(r)),
              xa(e, n),
              null !== (r = e.finishedWork) && dl(e, r, t)),
          (La = !1);
      }
      function dl(e, t, n) {
        var r = e.firstBatch;
        if (
          null !== r &&
          r._expirationTime >= n &&
          (null === Va ? (Va = [r]) : Va.push(r), r._defer)
        )
          return (e.finishedWork = t), (e.expirationTime = 0);
        (e.finishedWork = null),
          e === Ja ? Xa++ : ((Ja = e), (Xa = 0)),
          i.unstable_runWithPriority(i.unstable_ImmediatePriority, function () {
            ka(e, t);
          });
      }
      function fl(e) {
        null === Fa && a("246"),
          (Fa.expirationTime = 0),
          Ua || ((Ua = !0), (Ha = e));
      }
      function pl(e, t) {
        if ($a && !Wa) {
          Wa = !0;
          try {
            return e(t);
          } finally {
            Wa = !1;
          }
        }
        e(t);
      }
      function hl(e, t, n, r, o) {
        var i = t.current;
        e: if (n) {
          t: {
            (2 === Xt((n = n._reactInternalFiber)) && 1 === n.tag) || a("170");
            var l = n;
            do {
              switch (l.tag) {
                case 3:
                  l = l.stateNode.context;
                  break t;
                case 1:
                  if (Sr(l.type)) {
                    l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
            } while (null !== (l = l.return));
            a("171"), (l = void 0);
          }
          if (1 === n.tag) {
            var u = n.type;
            if (Sr(u)) {
              n = Rr(n, u, l);
              break e;
            }
          }
          n = l;
        } else n = Or;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          (t = o),
          ((o = Ni(r)).payload = { element: e }),
          null !== (t = void 0 === t ? null : t) && (o.callback = t),
          Oa(),
          Ki(i, o),
          Ra(i, r),
          r
        );
      }
      function ml(e, t, n, r) {
        var o = t.current;
        hl(e, t, n, Pa(nl(), o), r);
      }
      function yl(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
      }
      function bl(e) {
        var t = 1073741822 - 25 * (1 + (((1073741822 - nl() + 500) / 25) | 0));
        sa <= t && (t = sa - 1),
          (this._expirationTime = sa = t),
          (this._root = e),
          (this._callbacks = this._next = null),
          (this._hasChildren = this._didComplete = !1),
          (this._children = null),
          (this._defer = !0);
      }
      function gl() {
        (this._callbacks = null),
          (this._didCommit = !1),
          (this._onCommit = this._onCommit.bind(this));
      }
      function vl(e, t, n) {
        (t = Fr(3, null, null, t ? 3 : 0)),
          (this._internalRoot =
            t.stateNode =
            e =
              {
                current: t,
                containerInfo: e,
                pendingChildren: null,
                pingCache: null,
                earliestPendingTime: 0,
                latestPendingTime: 0,
                earliestSuspendedTime: 0,
                latestSuspendedTime: 0,
                latestPingedTime: 0,
                didError: !1,
                pendingCommitExpirationTime: 0,
                finishedWork: null,
                timeoutHandle: -1,
                context: null,
                pendingContext: null,
                hydrate: n,
                nextExpirationTimeToWorkOn: 0,
                expirationTime: 0,
                firstBatch: null,
                nextScheduledRoot: null,
              });
      }
      function _l(e) {
        return (
          e &&
          (1 === e.nodeType ||
            9 === e.nodeType ||
            11 === e.nodeType ||
            (8 === e.nodeType &&
              " react-mount-point-unstable " === e.nodeValue))
        );
      }
      function El(e, t, n, r, o) {
        var i,
          a,
          l = n._reactRootContainer;
        return (
          l
            ? ("function" == typeof o &&
                ((i = o),
                (o = function () {
                  var e = yl(l._internalRoot);
                  i.call(e);
                })),
              null != e
                ? l.legacy_renderSubtreeIntoContainer(e, t, o)
                : l.render(t, o))
            : ((l = n._reactRootContainer =
                (function (e, t) {
                  if (
                    !(t =
                      t ||
                      !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      ))
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new vl(e, !1, t);
                })(n, r)),
              "function" == typeof o &&
                ((a = o),
                (o = function () {
                  var e = yl(l._internalRoot);
                  a.call(e);
                })),
              pl(function () {
                null != e
                  ? l.legacy_renderSubtreeIntoContainer(e, t, o)
                  : l.render(t, o);
              })),
          yl(l._internalRoot)
        );
      }
      function wl(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return (
          _l(t) || a("200"),
          (function (e, t, n, r) {
            return {
              $$typeof: $e,
              key:
                null == (r = 3 < arguments.length && void 0 !== r ? r : null)
                  ? null
                  : "" + r,
              children: e,
              containerInfo: t,
              implementation: n,
            };
          })(e, t, null, n)
        );
      }
      (Oe = function (e, t, n) {
        switch (t) {
          case "input":
            if ((gt(e, n), (t = n.name), "radio" === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r,
                  o = n[t];
                o !== e &&
                  o.form === e.form &&
                  ((r = M(o)) || a("90"), ze(o), gt(o, r));
              }
            }
            break;
          case "textarea":
            Wn(e, n);
            break;
          case "select":
            null != (t = n.value) && Un(e, !!n.multiple, t, !1);
        }
      }),
        (bl.prototype.render = function (e) {
          this._defer || a("250"),
            (this._hasChildren = !0),
            (this._children = e);
          var t = this._root._internalRoot,
            n = this._expirationTime,
            r = new gl();
          return hl(e, t, null, n, r._onCommit), r;
        }),
        (bl.prototype.then = function (e) {
          var t;
          this._didComplete
            ? e()
            : (t =
                null === (t = this._callbacks)
                  ? (this._callbacks = [])
                  : t).push(e);
        }),
        (bl.prototype.commit = function () {
          var e = this._root._internalRoot,
            t = e.firstBatch;
          if (((this._defer && null !== t) || a("251"), this._hasChildren)) {
            var n = this._expirationTime;
            if (t !== this) {
              this._hasChildren &&
                ((n = this._expirationTime = t._expirationTime),
                this.render(this._children));
              for (var r = null, o = t; o !== this; ) o = (r = o)._next;
              null === r && a("251"),
                (r._next = o._next),
                (this._next = t),
                (e.firstBatch = this);
            }
            (this._defer = !1),
              sl(e, n),
              (t = this._next),
              (this._next = null) !== (t = e.firstBatch = t) &&
                t._hasChildren &&
                t.render(t._children);
          } else (this._next = null), (this._defer = !1);
        }),
        (bl.prototype._onComplete = function () {
          if (!this._didComplete) {
            this._didComplete = !0;
            var e = this._callbacks;
            if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }),
        (gl.prototype.then = function (e) {
          var t;
          this._didCommit
            ? e()
            : (t =
                null === (t = this._callbacks)
                  ? (this._callbacks = [])
                  : t).push(e);
        }),
        (gl.prototype._onCommit = function () {
          if (!this._didCommit) {
            this._didCommit = !0;
            var e = this._callbacks;
            if (null !== e)
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                "function" != typeof n && a("191", n), n();
              }
          }
        }),
        (vl.prototype.render = function (e, t) {
          var n = this._internalRoot,
            r = new gl();
          return (
            null !== (t = void 0 === t ? null : t) && r.then(t),
            ml(e, n, null, r._onCommit),
            r
          );
        }),
        (vl.prototype.unmount = function (e) {
          var t = this._internalRoot,
            n = new gl();
          return (
            null !== (e = void 0 === e ? null : e) && n.then(e),
            ml(null, t, null, n._onCommit),
            n
          );
        }),
        (vl.prototype.legacy_renderSubtreeIntoContainer = function (e, t, n) {
          var r = this._internalRoot,
            o = new gl();
          return (
            null !== (n = void 0 === n ? null : n) && o.then(n),
            ml(t, r, e, o._onCommit),
            o
          );
        }),
        (vl.prototype.createBatch = function () {
          var e = new bl(this),
            t = e._expirationTime,
            n = this._internalRoot,
            r = n.firstBatch;
          if (null === r) (n.firstBatch = e)._next = null;
          else {
            for (n = null; null !== r && r._expirationTime >= t; )
              r = (n = r)._next;
            (e._next = r), null !== n && (n._next = e);
          }
          return e;
        }),
        (De = function () {
          La || 0 === Ba || (ul(Ba, !1), (Ba = 0));
        }),
        (fn = {
          createPortal: wl,
          findDOMNode: function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternalFiber;
            return (
              void 0 === t &&
                ("function" == typeof e.render
                  ? a("188")
                  : a("268", Object.keys(e))),
              null === (e = Zt(t)) ? null : e.stateNode
            );
          },
          hydrate: function (e, t, n) {
            return _l(t) || a("200"), El(null, e, t, !0, n);
          },
          render: function (e, t, n) {
            return _l(t) || a("200"), El(null, e, t, !1, n);
          },
          unstable_renderSubtreeIntoContainer: function (e, t, n, r) {
            return (
              _l(n) || a("200"),
              (null != e && void 0 !== e._reactInternalFiber) || a("38"),
              El(e, t, n, !1, r)
            );
          },
          unmountComponentAtNode: function (e) {
            return (
              _l(e) || a("40"),
              !!e._reactRootContainer &&
                (pl(function () {
                  El(null, null, e, !1, function () {
                    e._reactRootContainer = null;
                  });
                }),
                !0)
            );
          },
          unstable_createPortal: function () {
            return wl.apply(void 0, arguments);
          },
          unstable_batchedUpdates: (Pe = function (e, t) {
            var n = $a;
            $a = !0;
            try {
              return e(t);
            } finally {
              ($a = n) || La || ul(1073741823, !1);
            }
          }),
          unstable_interactiveUpdates: (Ie = function (e, t, n) {
            $a || La || 0 === Ba || (ul(Ba, !1), (Ba = 0));
            var r = $a;
            $a = !0;
            try {
              return i.unstable_runWithPriority(
                i.unstable_UserBlockingPriority,
                function () {
                  return e(t, n);
                }
              );
            } finally {
              ($a = r) || La || ul(1073741823, !1);
            }
          }),
          flushSync: function (e, t) {
            La && a("187");
            var n = $a;
            $a = !0;
            try {
              return ja(e, t);
            } finally {
              ($a = n), ul(1073741823, !1);
            }
          },
          unstable_createRoot: function (e, t) {
            return (
              _l(e) || a("299", "unstable_createRoot"),
              new vl(e, !0, null != t && !0 === t.hydrate)
            );
          },
          unstable_flushControlled: function (e) {
            var t = $a;
            $a = !0;
            try {
              ja(e);
            } finally {
              ($a = t) || La || ul(1073741823, !1);
            }
          },
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [
              A,
              N,
              M,
              n.injectEventPluginsByName,
              g,
              U,
              function (e) {
                C(e, B);
              },
              xe,
              Se,
              On,
              I,
            ],
          },
        });
      var Ol = (qt = {
          findFiberByHostInstance: j,
          bundleType: 0,
          version: "16.8.5",
          rendererPackageName: "react-dom",
        }).findFiberByHostInstance,
        kl = o({}, qt, {
          overrideProps: null,
          currentDispatcherRef: Be.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Zt(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance: function (e) {
            return Ol ? Ol(e) : null;
          },
        });
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Tl.isDisabled && Tl.supportsFiber)
          try {
            var Cl = Tl.inject(kl);
            (Nr = Kr(function (e) {
              return Tl.onCommitFiberRoot(Cl, e);
            })),
              (Mr = Kr(function (e) {
                return Tl.onCommitFiberUnmount(Cl, e);
              }));
          } catch (kl) {}
      }
      e.exports = fn.default || fn;
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(49);
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = null,
          r = !1,
          o = 3,
          i = -1,
          a = -1,
          l = !1,
          u = !1;
        function s() {
          var e;
          l || ((e = n.expirationTime), u ? O() : (u = !0), w(f, e));
        }
        function c() {
          var e,
            t = n,
            r = n.next,
            i =
              (n === r
                ? (n = null)
                : ((e = n.previous), ((n = e.next = r).previous = e)),
              (t.next = t.previous = null),
              (e = t.callback),
              (r = t.expirationTime),
              (t = t.priorityLevel),
              o),
            l = a;
          (o = t), (a = r);
          try {
            var u = e();
          } finally {
            (o = i), (a = l);
          }
          if ("function" == typeof u)
            if (
              ((u = {
                callback: u,
                priorityLevel: t,
                expirationTime: r,
                next: null,
                previous: null,
              }),
              null === n)
            )
              n = u.next = u.previous = u;
            else {
              (e = null), (t = n);
              do {
                if (t.expirationTime >= r) {
                  e = t;
                  break;
                }
              } while ((t = t.next) !== n);
              null === e ? (e = n) : e === n && ((n = u), s()),
                (((r = e.previous).next = e.previous = u).next = e),
                (u.previous = r);
            }
        }
        function d() {
          if (-1 === i && null !== n && 1 === n.priorityLevel) {
            l = !0;
            try {
              for (; c(), null !== n && 1 === n.priorityLevel; );
            } finally {
              (l = !1), null !== n ? s() : (u = !1);
            }
          }
        }
        function f(e) {
          l = !0;
          var o = r;
          r = e;
          try {
            if (e)
              for (; null !== n; ) {
                var i = t.unstable_now();
                if (!(n.expirationTime <= i)) break;
                for (; c(), null !== n && n.expirationTime <= i; );
              }
            else if (null !== n) for (; c(), null !== n && !k(); );
          } finally {
            (l = !1), (r = o), null !== n ? s() : (u = !1), d();
          }
        }
        var p,
          h,
          m,
          y = Date,
          b = "function" == typeof setTimeout ? setTimeout : void 0,
          g = "function" == typeof clearTimeout ? clearTimeout : void 0,
          v =
            "function" == typeof requestAnimationFrame
              ? requestAnimationFrame
              : void 0,
          _ =
            "function" == typeof cancelAnimationFrame
              ? cancelAnimationFrame
              : void 0;
        function E(e) {
          (p = v(function (t) {
            g(h), e(t);
          })),
            (h = b(function () {
              _(p), e(t.unstable_now());
            }, 100));
        }
        "object" == typeof performance && "function" == typeof performance.now
          ? ((m = performance),
            (t.unstable_now = function () {
              return m.now();
            }))
          : (t.unstable_now = function () {
              return y.now();
            });
        var w,
          O,
          k,
          T,
          C,
          x,
          S,
          P,
          I,
          D,
          R,
          j,
          A,
          N,
          M,
          K = null;
        "undefined" != typeof window ? (K = window) : void 0 !== e && (K = e),
          K && K._schedMock
            ? ((e = K._schedMock),
              (w = e[0]),
              (O = e[1]),
              (k = e[2]),
              (t.unstable_now = e[3]))
            : "undefined" == typeof window ||
              "function" != typeof MessageChannel
            ? ((T = null),
              (C = function (e) {
                if (null !== T)
                  try {
                    T(e);
                  } finally {
                    T = null;
                  }
              }),
              (w = function (e) {
                null !== T
                  ? setTimeout(w, 0, e)
                  : ((T = e), setTimeout(C, 0, !1));
              }),
              (O = function () {
                T = null;
              }),
              (k = function () {
                return !1;
              }))
            : ("undefined" != typeof console &&
                ("function" != typeof v &&
                  console.error(
                    "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
                  ),
                "function" != typeof _ &&
                  console.error(
                    "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
                  )),
              (x = null),
              (S = !1),
              (D = I = !(P = -1)),
              (R = 0),
              (A = j = 33),
              (k = function () {
                return R <= t.unstable_now();
              }),
              (K = new MessageChannel()),
              (N = K.port2),
              (K.port1.onmessage = function () {
                S = !1;
                var e = x,
                  n = P,
                  r = ((x = null), (P = -1), t.unstable_now()),
                  o = !1;
                if (R - r <= 0) {
                  if (!(-1 !== n && n <= r))
                    return I || ((I = !0), E(M)), (x = e), void (P = n);
                  o = !0;
                }
                if (null !== e) {
                  D = !0;
                  try {
                    e(o);
                  } finally {
                    D = !1;
                  }
                }
              }),
              (M = function (e) {
                var t;
                null !== x
                  ? (E(M),
                    (t = e - R + A) < A && j < A
                      ? (A = (t = t < 8 ? 8 : t) < j ? j : t)
                      : (j = t),
                    (R = e + A),
                    S || ((S = !0), N.postMessage(void 0)))
                  : (I = !1);
              }),
              (w = function (e, t) {
                (x = e),
                  (P = t),
                  D || t < 0 ? N.postMessage(void 0) : I || ((I = !0), E(M));
              }),
              (O = function () {
                (x = null), (S = !1), (P = -1);
              })),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_NormalPriority = 3),
          (t.unstable_IdlePriority = 5),
          (t.unstable_LowPriority = 4),
          (t.unstable_runWithPriority = function (e, n) {
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
            var r = o,
              a = i;
            (o = e), (i = t.unstable_now());
            try {
              return n();
            } finally {
              (o = r), (i = a), d();
            }
          }),
          (t.unstable_next = function (e) {
            switch (o) {
              case 1:
              case 2:
              case 3:
                var n = 3;
                break;
              default:
                n = o;
            }
            var r = o,
              a = i;
            (o = n), (i = t.unstable_now());
            try {
              return e();
            } finally {
              (o = r), (i = a), d();
            }
          }),
          (t.unstable_scheduleCallback = function (e, r) {
            var a = -1 !== i ? i : t.unstable_now();
            if (
              "object" == typeof r &&
              null !== r &&
              "number" == typeof r.timeout
            )
              r = a + r.timeout;
            else
              switch (o) {
                case 1:
                  r = a + -1;
                  break;
                case 2:
                  r = a + 250;
                  break;
                case 5:
                  r = a + 1073741823;
                  break;
                case 4:
                  r = a + 1e4;
                  break;
                default:
                  r = a + 5e3;
              }
            if (
              ((e = {
                callback: e,
                priorityLevel: o,
                expirationTime: r,
                next: null,
                previous: null,
              }),
              null === n)
            )
              (n = e.next = e.previous = e), s();
            else {
              a = null;
              var l = n;
              do {
                if (l.expirationTime > r) {
                  a = l;
                  break;
                }
              } while ((l = l.next) !== n);
              null === a ? (a = n) : a === n && ((n = e), s()),
                (((r = a.previous).next = a.previous = e).next = a),
                (e.previous = r);
            }
            return e;
          }),
          (t.unstable_cancelCallback = function (e) {
            var t,
              r = e.next;
            null !== r &&
              (r === e
                ? (n = null)
                : (e === n && (n = r),
                  (((t = e.previous).next = r).previous = t)),
              (e.next = e.previous = null));
          }),
          (t.unstable_wrapCallback = function (e) {
            var n = o;
            return function () {
              var r = o,
                a = i;
              (o = n), (i = t.unstable_now());
              try {
                return e.apply(this, arguments);
              } finally {
                (o = r), (i = a), d();
              }
            };
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return o;
          }),
          (t.unstable_shouldYield = function () {
            return !r && ((null !== n && n.expirationTime < a) || k());
          }),
          (t.unstable_continueExecution = function () {
            null !== n && s();
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_getFirstCallbackNode = function () {
            return n;
          });
      }).call(this, n(50));
    },
    function (e, t) {
      var n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = de(n(52)),
        o = de(n(53)),
        i = de(n(56)),
        a = de(n(28)),
        l = de(n(57)),
        u = de(n(58)),
        s = de(n(59)),
        c = de(n(29)),
        d = de(n(13)),
        f = de(n(12)),
        p = de(n(30)),
        h = de(n(31)),
        m = de(n(60)),
        y = de(n(61)),
        b = de(n(62)),
        g = de(n(63)),
        v = de(n(64)),
        _ = de(n(65)),
        E = de(n(66)),
        w = de(n(67)),
        O = de(n(68)),
        k = de(n(69)),
        T = de(n(70)),
        C = de(n(71)),
        x = de(n(72)),
        S = de(n(73)),
        P = de(n(32)),
        I = de(n(74)),
        D = de(n(33)),
        R = de(n(19)),
        j = de(n(34)),
        A = de(n(36)),
        N = de(n(75)),
        M = de(n(76)),
        K = de(n(77)),
        L = de(n(78)),
        F = de(n(79)),
        z = de(n(80)),
        B = de(n(81)),
        U = de(n(82)),
        H = de(n(83)),
        $ = de(n(84)),
        W = de(n(85)),
        V = de(n(86)),
        q = de(n(87)),
        G = de(n(25)),
        Y = de(n(26)),
        Q = de(n(27)),
        X = de(n(16)),
        J = de(n(88)),
        Z = de(n(89)),
        ee = de(n(90)),
        te = de(n(91)),
        ne = de(n(92)),
        re = de(n(37)),
        oe = de(n(93)),
        ie = de(n(94)),
        ae = de(n(95)),
        le = de(n(96)),
        ue = de(n(35)),
        se = de(n(97)),
        ce = de(n(98));
      n = de(n(99));
      function de(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function fe(e, t, n) {
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n);
      }
      t.default =
        (fe((t = {}), r.default.key, r.default),
        fe(t, o.default.key, o.default),
        fe(t, i.default.key, i.default),
        fe(t, a.default.key, a.default),
        fe(t, l.default.key, l.default),
        fe(t, u.default.key, u.default),
        fe(t, s.default.key, s.default),
        fe(t, c.default.key, c.default),
        fe(t, d.default.key, d.default),
        fe(t, f.default.key, f.default),
        fe(t, p.default.key, p.default),
        fe(t, y.default.key, y.default),
        fe(t, h.default.key, h.default),
        fe(t, m.default.key, m.default),
        fe(t, b.default.key, b.default),
        fe(t, g.default.key, g.default),
        fe(t, v.default.key, v.default),
        fe(t, _.default.key, _.default),
        fe(t, E.default.key, E.default),
        fe(t, w.default.key, w.default),
        fe(t, O.default.key, O.default),
        fe(t, k.default.key, k.default),
        fe(t, T.default.key, T.default),
        fe(t, C.default.key, C.default),
        fe(t, x.default.key, x.default),
        fe(t, S.default.key, S.default),
        fe(t, P.default.key, P.default),
        fe(t, I.default.key, I.default),
        fe(t, D.default.key, D.default),
        fe(t, R.default.key, R.default),
        fe(t, j.default.key, j.default),
        fe(t, A.default.key, A.default),
        fe(t, N.default.key, N.default),
        fe(t, M.default.key, M.default),
        fe(t, F.default.key, F.default),
        fe(t, K.default.key, K.default),
        fe(t, L.default.key, L.default),
        fe(t, z.default.key, z.default),
        fe(t, B.default.key, B.default),
        fe(t, U.default.key, U.default),
        fe(t, H.default.key, H.default),
        fe(t, $.default.key, $.default),
        fe(t, W.default.key, W.default),
        fe(t, V.default.key, V.default),
        fe(t, q.default.key, q.default),
        fe(t, G.default.key, G.default),
        fe(t, Y.default.key, Y.default),
        fe(t, Q.default.key, Q.default),
        fe(t, X.default.key, X.default),
        fe(t, J.default.key, J.default),
        fe(t, Z.default.key, Z.default),
        fe(t, ee.default.key, ee.default),
        fe(t, te.default.key, te.default),
        fe(t, ne.default.key, ne.default),
        fe(t, re.default.key, re.default),
        fe(t, oe.default.key, oe.default),
        fe(t, ie.default.key, ie.default),
        fe(t, ae.default.key, ae.default),
        fe(t, le.default.key, le.default),
        fe(t, ue.default.key, ue.default),
        fe(t, se.default.key, se.default),
        fe(t, ce.default.key, ce.default),
        fe(t, n.default.key, n.default),
        t);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = u(n(0)),
        o = u(n(6)),
        i = u(n(2)),
        a = u(n(1));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          var n = (function (e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n._handleAltChange = function (e) {
              n.setState({ imageAlt: e.target.value }), n._focusAltInput();
            }),
            (n._handleKeyDown = function (e) {
              13 === e.keyCode && (e.preventDefault(), n._updateImageAlt());
            }),
            (n._requestExclusive = function () {
              n.props.requestExclusive(t.key);
            }),
            (n._updateImageAlt = function () {
              var e = n.context.editor.get("nativeEditor"),
                t = n.refs.refAltInput.value;
              n.setState({ imageAlt: t }),
                (n._element.findOne("img") || n._element).setAttribute(
                  "alt",
                  t
                ),
                e.fire("actionPerformed", n),
                n.props.cancelExclusive();
            }),
            (n.state = n._getInitialState()),
            n
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && l(e.prototype, t), n && l(e, n);
          })(t, [
            {
              key: "componentDidMount",
              value: function () {
                (this.props.renderExclusive || this.props.manualSelection) &&
                  this._focusAltInput();
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function () {
                this.setState(this._getInitialState());
              },
            },
            {
              key: "_getInitialState",
              value: function () {
                var e =
                  (e = this.props.context.editor
                    .get("nativeEditor")
                    .getSelection()).getSelectedElement() ||
                  e.getStartElement();
                return {
                  imageAlt: (
                    (e = ((this._element = e), this._element.findOne("img"))) ||
                    this._element
                  ).getAttribute("alt"),
                };
              },
            },
            {
              key: "render",
              value: function () {
                return this.props.renderExclusive
                  ? r.default.createElement(
                      "div",
                      { className: "ae-container-edit-link" },
                      r.default.createElement(
                        "div",
                        { className: "ae-container-input xxl" },
                        r.default.createElement("input", {
                          "aria-label": "alt",
                          className: "ae-input",
                          onChange: this._handleAltChange,
                          onKeyDown: this._handleKeyDown,
                          placeholder: "alt",
                          ref: "refAltInput",
                          title: "alt",
                          type: "text",
                          value: this.state.imageAlt,
                        })
                      ),
                      r.default.createElement(
                        "button",
                        {
                          "aria-label": AlloyEditor.Strings.confirm,
                          className: "ae-button",
                          onClick: this._updateImageAlt,
                          title: AlloyEditor.Strings.confirm,
                        },
                        r.default.createElement(a.default, { symbol: "check" })
                      )
                    )
                  : r.default.createElement(
                      "button",
                      {
                        className: "ae-button",
                        onClick: this._requestExclusive,
                        tabIndex: this.props.tabIndex,
                      },
                      r.default.createElement(
                        "small",
                        { className: "ae-icon small" },
                        "Alt"
                      )
                    );
              },
            },
            {
              key: "_focusAltInput",
              value: function () {
                function e() {
                  o.default.findDOMNode(t.refs.refAltInput).focus();
                }
                var t = this;
                window.requestAnimationFrame
                  ? window.requestAnimationFrame(e)
                  : setTimeout(e, 0);
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.contextType = i.default),
        (n.key = "imageAlt"),
        (t.default = i.default.toProps(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(7)),
        o = s(n(0)),
        i = s(n(2)),
        a = s(n(1)),
        l = s(n(16));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = AlloyEditor.Strings.normal,
                  n = "",
                  r = this._getColors(),
                  i = { element: "span", attributes: { class: "" } },
                  u = (c =
                    (r.forEach(function (r) {
                      (i.attributes.class = r.styleClass),
                        e._checkActive(i) &&
                          ((t = r.name), (n = r.style.attributes.class));
                    }),
                    this.props)).expanded,
                  s = c.tabIndex,
                  c = c.toggleDropdown;
                r = {
                  activeStyle: t,
                  onDismiss: c,
                  showRemoveStylesItem: !1,
                  styles: r,
                };
                return o.default.createElement(
                  "div",
                  { className: "ae-container ae-has-dropdown" },
                  o.default.createElement(
                    "button",
                    {
                      "aria-expanded": u,
                      className: "ae-toolbar-element",
                      onClick: c,
                      role: "combobox",
                      tabIndex: s,
                    },
                    o.default.createElement(
                      "span",
                      { className: n },
                      o.default.createElement(a.default, { symbol: "textbox" })
                    )
                  ),
                  u && o.default.createElement(l.default, r)
                );
              },
            },
            {
              key: "_applyStyle",
              value: function (e) {
                var t = this,
                  n = this.context.editor.get("nativeEditor"),
                  r = { element: "span", attributes: { class: e } };
                n.getSelection().lock(),
                  this._getColors().forEach(function (e) {
                    (r.attributes.class = e.styleClass),
                      t._checkActive(r) && n.removeStyle(new CKEDITOR.style(r));
                  }),
                  (r.attributes.class = e),
                  (e = new CKEDITOR.style(r));
                n.applyStyle(e),
                  n.getSelection().unlock(),
                  n.fire("actionPerformed", this);
              },
            },
            {
              key: "_checkActive",
              value: function (e) {
                var t = this.context.editor.get("nativeEditor");
                return (
                  (e = CKEDITOR.tools.merge({ element: "span" }, e)),
                  new CKEDITOR.style(e).checkActive(t.elementPath(), t)
                );
              },
            },
            {
              key: "_getColors",
              value: function () {
                return (
                  this.props.styles || [
                    {
                      name: AlloyEditor.Strings.normal,
                      style: {
                        element: "span",
                        attributes: { class: "text-body" },
                      },
                      styleClass: "",
                      styleFn: this._applyStyle.bind(this, ""),
                    },
                    {
                      name: AlloyEditor.Strings.primary,
                      style: {
                        element: "span",
                        attributes: { class: "text-primary" },
                      },
                      styleClass: "bg-primary",
                      styleFn: this._applyStyle.bind(this, "bg-primary"),
                    },
                    {
                      name: AlloyEditor.Strings.disabled,
                      style: {
                        element: "span",
                        attributes: { class: "text-secondary" },
                      },
                      styleClass: "bg-secondary",
                      styleFn: this._applyStyle.bind(this, "bg-secondary"),
                    },
                    {
                      name: AlloyEditor.Strings.success,
                      style: {
                        element: "span",
                        attributes: { class: "text-success" },
                      },
                      styleClass: "bg-success",
                      styleFn: this._applyStyle.bind(this, "bg-success"),
                    },
                    {
                      name: AlloyEditor.Strings.danger,
                      style: {
                        element: "span",
                        attributes: { class: "text-danger" },
                      },
                      styleClass: "bg-danger",
                      styleFn: this._applyStyle.bind(this, "bg-danger"),
                    },
                    {
                      name: AlloyEditor.Strings.warning,
                      style: {
                        element: "span",
                        attributes: { class: "text-warning" },
                      },
                      styleClass: "bg-warning",
                      styleFn: this._applyStyle.bind(this, "bg-warning"),
                    },
                    {
                      name: AlloyEditor.Strings.info,
                      style: {
                        element: "span",
                        attributes: { class: "text-info" },
                      },
                      styleClass: "bg-info",
                      styleFn: this._applyStyle.bind(this, "bg-info"),
                    },
                  ]
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.contextType = i.default),
        (n.key = "backgroundColor"),
        (n.propTypes = {
          expanded: r.default.bool,
          label: r.default.string,
          showRemoveStylesItem: r.default.bool,
          styles: r.default.arrayOf(r.default.object),
          tabIndex: r.default.number,
          toggleDropdown: r.default.func,
        }),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      var r = n(55);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, i, a) {
            if (a !== r)
              throw (
                (((a = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                )).name = "Invariant Violation"),
                a)
              );
          }
          function t() {
            return e;
          }
          var n = {
            array: (e.isRequired = e),
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
            resetWarningCache: o,
          };
          return (n.PropTypes = n);
        });
    },
    function (e, t, n) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = c(n(0)),
        o = c(n(3)),
        i = c(n(11)),
        a = c(n(4)),
        l = c(n(8)),
        u = c(n(1));
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && s(e.prototype, t), n && s(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button  " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.bold,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-bold",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.bold,
                  },
                  r.default.createElement(u.default, { symbol: "bold" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = {
          command: "bold",
          keystroke: {
            fn: "execCommand",
            keys: CKEDITOR.CTRL + 66,
            name: "bold",
          },
          style: "coreStyles_bold",
        }),
        (n.key = "bold"),
        (t.default = (0, o.default)(
          (0, i.default)((0, a.default)((0, l.default)(n)))
        ));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(28)),
        i = l(n(1));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                if (this.props.renderExclusive)
                  return r.default.createElement(o.default, this.props);
                var e = !(
                    navigator.getUserMedia ||
                    (navigator.webkitGetUserMedia &&
                      "https" === location.protocol) ||
                    navigator.mozGetUserMedia ||
                    navigator.msGetUserMedia
                  ),
                  n = e
                    ? AlloyEditor.Strings.cameraDisabled
                    : AlloyEditor.Strings.camera;
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": n,
                    className: "ae-button",
                    "data-type": "button-image-camera",
                    disabled: e,
                    onClick: this.props.requestExclusive.bind(t.key),
                    tabIndex: this.props.tabIndex,
                    title: n,
                  },
                  r.default.createElement(i.default, { symbol: "camera" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.key = "camera"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(15)),
        i = s(n(4)),
        a = s(n(8)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.code,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-code",
                    onClick: this.applyStyle,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.code,
                  },
                  r.default.createElement(l.default, { symbol: "code" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { style: { element: "pre" } }),
        (n.key = "code"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(7)),
        o = s(n(0)),
        i = s(n(2)),
        a = s(n(1)),
        l = s(n(16));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = AlloyEditor.Strings.normal,
                  n = (i =
                    ((u = this._getColors()).some(function (n) {
                      e._checkActive(n.style) && (t = n.name);
                    }),
                    this.props)).expanded,
                  r = i.tabIndex,
                  i = i.toggleDropdown,
                  u = {
                    activeStyle: t,
                    onDismiss: i,
                    showRemoveStylesItem: !1,
                    styles: u,
                  };
                return o.default.createElement(
                  "div",
                  { className: "ae-container ae-has-dropdown" },
                  o.default.createElement(
                    "button",
                    {
                      "aria-expanded": n,
                      className: "ae-toolbar-element",
                      onClick: i,
                      role: "combobox",
                      tabIndex: r,
                    },
                    o.default.createElement(
                      "span",
                      null,
                      o.default.createElement(a.default, {
                        symbol: "color-picker",
                      })
                    )
                  ),
                  n && o.default.createElement(l.default, u)
                );
              },
            },
            {
              key: "_applyStyle",
              value: function (e) {
                var t = this,
                  n = this.context.editor.get("nativeEditor");
                e = new CKEDITOR.style({
                  element: "span",
                  attributes: { class: e },
                });
                n.getSelection().lock(),
                  this._getColors().forEach(function (e) {
                    t._checkActive(e.style) &&
                      n.removeStyle(new CKEDITOR.style(e.style));
                  }),
                  n.applyStyle(e),
                  n.getSelection().unlock(),
                  n.fire("actionPerformed", this);
              },
            },
            {
              key: "_checkActive",
              value: function (e) {
                var t = this.context.editor.get("nativeEditor");
                return (
                  (e = CKEDITOR.tools.merge({ element: "span" }, e)),
                  new CKEDITOR.style(e).checkActive(t.elementPath(), t)
                );
              },
            },
            {
              key: "_getColors",
              value: function () {
                return (
                  this.props.styles || [
                    {
                      name: AlloyEditor.Strings.primary,
                      style: {
                        element: "span",
                        attributes: { class: "text-primary" },
                      },
                      styleFn: this._applyStyle.bind(this, "text-primary"),
                    },
                    {
                      name: AlloyEditor.Strings.success,
                      style: {
                        element: "span",
                        attributes: { class: "text-success" },
                      },
                      styleFn: this._applyStyle.bind(this, "text-success"),
                    },
                    {
                      name: AlloyEditor.Strings.danger,
                      style: {
                        element: "span",
                        attributes: { class: "text-danger" },
                      },
                      styleFn: this._applyStyle.bind(this, "text-danger"),
                    },
                    {
                      name: AlloyEditor.Strings.warning,
                      style: {
                        element: "span",
                        attributes: { class: "text-warning" },
                      },
                      styleFn: this._applyStyle.bind(this, "text-warning"),
                    },
                    {
                      name: AlloyEditor.Strings.info,
                      style: {
                        element: "span",
                        attributes: { class: "text-info" },
                      },
                      styleFn: this._applyStyle.bind(this, "text-info"),
                    },
                    {
                      name: AlloyEditor.Strings.dark,
                      style: {
                        element: "span",
                        attributes: { class: "text-dark" },
                      },
                      styleFn: this._applyStyle.bind(this, "text-dark"),
                    },
                    {
                      name: AlloyEditor.Strings.darkGray,
                      style: {
                        element: "span",
                        attributes: { class: "text-gray-dark" },
                      },
                      styleFn: this._applyStyle.bind(this, "text-gray-dark"),
                    },
                    {
                      name: AlloyEditor.Strings.secondary,
                      style: {
                        element: "span",
                        attributes: { class: "text-secondary" },
                      },
                      styleFn: this._applyStyle.bind(this, "text-secondary"),
                    },
                    {
                      name: AlloyEditor.Strings.light,
                      style: {
                        element: "span",
                        attributes: { class: "text-dark" },
                      },
                      styleFn: this._applyStyle.bind(this, "text-light"),
                    },
                    {
                      name: AlloyEditor.Strings.lighter,
                      style: {
                        element: "span",
                        attributes: { class: "text-dark" },
                      },
                      styleFn: this._applyStyle.bind(this, "text-lighter"),
                    },
                    {
                      name: AlloyEditor.Strings.white,
                      style: {
                        element: "span",
                        attributes: { class: "text-dark" },
                      },
                      styleFn: this._applyStyle.bind(this, "text-white"),
                    },
                  ]
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.contextType = i.default),
        (n.key = "color"),
        (n.propTypes = {
          expanded: r.default.bool,
          label: r.default.string,
          showRemoveStylesItem: r.default.bool,
          styles: r.default.arrayOf(r.default.object),
          tabIndex: r.default.number,
          toggleDropdown: r.default.func,
        }),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = u(n(7)),
        o = u(n(0)),
        i = u(n(31)),
        a = u(n(1));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && l(e.prototype, t), n && l(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return this.props.renderExclusive
                  ? o.default.createElement(i.default, this.props)
                  : o.default.createElement(
                      "button",
                      {
                        "aria-label": AlloyEditor.Strings.video,
                        className: "ae-button",
                        "data-type": "button-embed-video",
                        onClick: this.props.requestExclusive,
                        tabIndex: this.props.tabIndex,
                        title: AlloyEditor.Strings.video,
                      },
                      o.default.createElement(a.default, { symbol: "video" })
                    );
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.key = "embedVideo"),
        (n.propTypes = { label: r.default.string, tabIndex: r.default.number }),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t, n) {
          return t && u(e.prototype, t), n && u(e, n), e;
        },
        o = s(n(0)),
        i = s(n(11)),
        a = s(n(30)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      (n = (function (e) {
        function t() {
          var e,
            n = this;
          if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = c(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(o)
              )
            ))._requestExclusive = function () {
              e.props.requestExclusive(t.key);
            }),
            c(e, e)
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          r(t, [
            {
              key: "render",
              value: function () {
                return this.props.renderExclusive
                  ? o.default.createElement(a.default, this.props)
                  : o.default.createElement(
                      "button",
                      {
                        "aria-label": AlloyEditor.Strings.link,
                        className: "ae-button",
                        "data-type": "button-embed",
                        onClick: this._requestExclusive,
                        tabIndex: this.props.tabIndex,
                        title: AlloyEditor.Strings.link,
                      },
                      o.default.createElement(l.default, { symbol: "plus" })
                    );
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.defaultProps = {
          keystroke: {
            fn: "_requestExclusive",
            keys: CKEDITOR.CTRL + CKEDITOR.SHIFT + 76,
            name: "embed",
          },
        }),
        (n.key = "embed"),
        (t.default = (0, i.default)(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(15)),
        i = s(n(4)),
        a = s(n(8)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.h1,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-h1",
                    onClick: this.applyStyle,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.h1,
                  },
                  r.default.createElement(l.default, { symbol: "h1" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { style: { element: "h1" } }),
        (n.key = "h1"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(15)),
        i = s(n(4)),
        a = s(n(8)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.h2,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-h2",
                    onClick: this.applyStyle,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.h2,
                  },
                  r.default.createElement(l.default, { symbol: "h2" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { style: { element: "h2" } }),
        (n.key = "h2"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(3)),
        i = l(n(1));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.horizontalrule,
                    className: "ae-button",
                    "data-type": "button-hline",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.horizontalrule,
                  },
                  r.default.createElement(i.default, { symbol: "hr" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "horizontalrule" }),
        (n.key = "hline"),
        (t.default = (0, o.default)(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(9)),
        a = s(n(4)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.alignCenter,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-image-align-center",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.alignCenter,
                  },
                  r.default.createElement(l.default, {
                    symbol: "align-image-center",
                  })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "justifycenter" }),
        (n.key = "imageCenter"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(9)),
        a = s(n(4)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.alignLeft,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-image-align-left",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.alignLeft,
                  },
                  r.default.createElement(l.default, {
                    symbol: "align-image-left",
                  })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "justifyleft" }),
        (n.key = "imageLeft"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(9)),
        a = s(n(4)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.alignRight,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-image-align-right",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.alignRight,
                  },
                  r.default.createElement(l.default, {
                    symbol: "align-image-right",
                  })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "justifyright" }),
        (n.key = "imageRight"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(2)),
        i = l(n(1));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          var n = (function (e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n.handleClick = function () {
              n.fileInput.current.click();
            }),
            (n._onInputChange = function () {
              var e,
                t,
                r = n.fileInput.current;
              r.files.length &&
                ((e = new FileReader()),
                (t = r.files[0]),
                (e.onload = function (e) {
                  var r = n.context.editor.get("nativeEditor");
                  r.fire("beforeImageAdd", { imageFiles: t }) &&
                    ((e = CKEDITOR.dom.element.createFromHtml(
                      '<img src="' + e.target.result + '">'
                    )),
                    r.insertElement(e),
                    r.fire("actionPerformed", n),
                    r.fire("imageAdd", { el: e, file: t }));
                }),
                e.readAsDataURL(t),
                (r.value = ""));
            }),
            (n.fileInput = r.default.createRef()),
            n
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return r.default.createElement(
                  "div",
                  null,
                  r.default.createElement(
                    "button",
                    {
                      "aria-label": AlloyEditor.Strings.image,
                      className: "ae-button",
                      "data-type": "button-image",
                      onClick: this.handleClick,
                      tabIndex: this.props.tabIndex,
                      title: AlloyEditor.Strings.image,
                    },
                    r.default.createElement(i.default, {
                      symbol: "document-image",
                    })
                  ),
                  r.default.createElement("input", {
                    accept: "image/*",
                    onChange: this._onInputChange,
                    ref: this.fileInput,
                    style: { display: "none" },
                    type: "file",
                  })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.contextType = o.default),
        (n.key = "imageFromFile"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(9)),
        a = s(n(4)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.indent,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-indent-block",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.indent,
                  },
                  r.default.createElement(l.default, { symbol: "indent-more" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "indent" }),
        (n.key = "indentBlock"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = c(n(0)),
        o = c(n(3)),
        i = c(n(11)),
        a = c(n(4)),
        l = c(n(8)),
        u = c(n(1));
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && s(e.prototype, t), n && s(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.italic,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-italic",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.italic,
                  },
                  r.default.createElement(u.default, { symbol: "italic" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = {
          command: "italic",
          keystroke: {
            fn: "execCommand",
            keys: CKEDITOR.CTRL + 73,
            name: "italic",
          },
          style: "coreStyles_italic",
        }),
        (n.key = "italic"),
        (t.default = (0, o.default)(
          (0, i.default)((0, a.default)((0, l.default)(n)))
        ));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t, n) {
          return t && l(e.prototype, t), n && l(e, n), e;
        },
        o = u(n(0)),
        i = u(n(3)),
        a = u(n(1));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      (n = (function (e) {
        function t() {
          var e,
            n = this;
          if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = s(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(o)
              )
            ))._handleClick = function () {
              e.execCommand(null);
            }),
            s(e, e)
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          r(t, [
            {
              key: "render",
              value: function () {
                return o.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.audio,
                    className: "ae-button",
                    "data-type": "button-audio",
                    onClick: this._handleClick,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.audio,
                  },
                  o.default.createElement(a.default, { symbol: "audio" })
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.defaultProps = { command: "audioselector" }),
        (n.key = "audio"),
        (t.default = (0, i.default)(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t, n) {
          return t && l(e.prototype, t), n && l(e, n), e;
        },
        o = u(n(0)),
        i = u(n(3)),
        a = u(n(1));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      (n = (function (e) {
        function t() {
          var e,
            n = this;
          if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = s(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(o)
              )
            ))._handleClick = function () {
              e.execCommand(null);
            }),
            s(e, e)
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          r(t, [
            {
              key: "render",
              value: function () {
                return o.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.image,
                    className: "ae-button",
                    "data-type": "button-image",
                    onClick: this._handleClick,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.image,
                  },
                  o.default.createElement(a.default, { symbol: "picture" })
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.defaultProps = { command: "imageselector" }),
        (n.key = "image"),
        (t.default = (0, i.default)(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t, n) {
          return t && l(e.prototype, t), n && l(e, n), e;
        },
        o = u(n(0)),
        i = u(n(3)),
        a = u(n(1));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      (n = (function (e) {
        function t() {
          var e,
            n = this;
          if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = s(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(o)
              )
            ))._handleClick = function () {
              e.execCommand(null);
            }),
            s(e, e)
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          r(t, [
            {
              key: "render",
              value: function () {
                return o.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.video,
                    className: "ae-button",
                    "data-type": "button-video",
                    onClick: this._handleClick,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.video,
                  },
                  o.default.createElement(a.default, {
                    symbol: "document-multimedia",
                  })
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.defaultProps = { command: "videoselector" }),
        (n.key = "video"),
        (t.default = (0, i.default)(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = c(n(7)),
        o = c(n(0)),
        i = c(n(11)),
        a = c(n(20)),
        l = c(n(33)),
        u = c(n(36));
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && s(e.prototype, t), n && s(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return this.props.renderExclusive
                  ? ((this.props = this.mergeButtonCfgProps()),
                    o.default.createElement(l.default, this.props))
                  : o.default.createElement(u.default, this.props);
              },
            },
            {
              key: "_requestExclusive",
              value: function () {
                this.props.requestExclusive(t.key);
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.defaultProps = {
          keystroke: {
            fn: "_requestExclusive",
            keys: CKEDITOR.CTRL + 76,
            name: "linkBrowse",
          },
        }),
        (n.key = "linkBrowse"),
        (n.propTypes = { label: r.default.string, tabIndex: r.default.number }),
        (t.default = (0, a.default)((0, i.default)(n)));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(4)),
        a = s(n(8)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.numberedlist,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-ol",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.numberedlist,
                  },
                  r.default.createElement(l.default, { symbol: "list-ol" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = {
          command: "numberedlist",
          style: { element: "ol" },
        }),
        (n.key = "ol"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(9)),
        a = s(n(4)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.outdent,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-outdent-block",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.outdent,
                  },
                  r.default.createElement(l.default, { symbol: "indent-less" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "outdent" }),
        (n.key = "outdentBlock"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(9)),
        a = s(n(4)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.alignLeft,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-paragraph-align-left",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.alignLeft,
                  },
                  r.default.createElement(l.default, { symbol: "align-left" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "justifyleft" }),
        (n.key = "paragraphLeft"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(9)),
        a = s(n(4)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.alignRight,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-paragraph-align-right",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.alignRight,
                  },
                  r.default.createElement(l.default, { symbol: "align-right" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "justifyright" }),
        (n.key = "paragraphRight"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t, n) {
          return t && u(e.prototype, t), n && u(e, n), e;
        },
        o = s(n(0)),
        i = s(n(2)),
        a = s(n(13)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          r(t, [
            {
              key: "render",
              value: function () {
                var e = void 0,
                  n = void 0,
                  r = this._getCommands(),
                  i =
                    (this.props.expanded &&
                      (e = o.default.createElement(a.default, {
                        commands: r,
                        inlineIcons: !1,
                        listId: (n = t.key + "List"),
                        onDismiss: this.props.toggleDropdown,
                      })),
                    this.context.editor.get("nativeEditor")),
                  u = (r =
                    r
                      .filter(function (e) {
                        return (
                          !!(e = i.getCommand(e.command)) &&
                          e.state === CKEDITOR.TRISTATE_ON
                        );
                      })
                      .pop() || r[0]).icon;
                return o.default.createElement(
                  "div",
                  {
                    className:
                      "ae-container-dropdown ae-container-dropdown-xsmall ae-has-dropdown",
                  },
                  o.default.createElement(
                    "button",
                    {
                      "aria-expanded": this.props.expanded,
                      "aria-label": r.label,
                      "aria-owns": n,
                      className: "ae-toolbar-element",
                      onClick: this.props.toggleDropdown,
                      role: "combobox",
                      tabIndex: this.props.tabIndex,
                      title: AlloyEditor.Strings.row,
                    },
                    o.default.createElement(
                      "div",
                      { className: "ae-container" },
                      o.default.createElement(l.default, { symbol: u }),
                      o.default.createElement(l.default, {
                        symbol: "caret-bottom",
                      })
                    )
                  ),
                  e
                );
              },
            },
            {
              key: "_getCommands",
              value: function () {
                return (
                  this.props.commands || [
                    {
                      command: "justifyleft",
                      icon: "align-left",
                      label: AlloyEditor.Strings.alignLeft,
                    },
                    {
                      command: "justifycenter",
                      icon: "align-center",
                      label: AlloyEditor.Strings.alignCenter,
                    },
                    {
                      command: "justifyright",
                      icon: "align-right",
                      label: AlloyEditor.Strings.alignRight,
                    },
                    {
                      command: "justifyblock",
                      icon: "align-justify",
                      label: AlloyEditor.Strings.alignJustify,
                    },
                  ]
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.contextType = i.default),
        (n.key = "paragraphAlign"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(9)),
        a = s(n(4)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.alignCenter,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-paragraph-center",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.alignCenter,
                  },
                  r.default.createElement(l.default, { symbol: "align-center" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "justifycenter" }),
        (n.key = "paragraphCenter"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(9)),
        a = s(n(4)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.alignJustify,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-paragraph-justify",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.alignJustify,
                  },
                  r.default.createElement(l.default, {
                    symbol: "align-justify",
                  })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "justifyblock" }),
        (n.key = "paragraphJustify"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(4)),
        a = s(n(8)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.quote,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-quote",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.quote,
                  },
                  r.default.createElement(l.default, { symbol: "quote-right" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = {
          command: "blockquote",
          style: { element: "blockquote" },
        }),
        (n.key = "quote"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(3)),
        i = l(n(1));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.removeformat,
                    className: "ae-button",
                    "data-type": "button-removeformat",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.removeformat,
                  },
                  r.default.createElement(i.default, { symbol: "remove-style" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "removeFormat" }),
        (n.key = "removeFormat"),
        (t.default = (0, o.default)(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(3)),
        i = l(n(1));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.removeImage,
                    "aria-pressed": !1,
                    className: "ae-button",
                    onClick: this.execCommand,
                    title: AlloyEditor.Strings.removeImage,
                  },
                  r.default.createElement(i.default, { symbol: "times-circle" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "removeImage" }),
        (n.key = "removeImage"),
        (t.default = (0, o.default)(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (n = n(0)) && n.__esModule ? n : { default: n };
      function o(e) {
        return r.default.createElement("span", { className: "ae-separator" });
      }
      (o.key = "separator"), (t.default = o);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(7)),
        o = s(n(0)),
        i = s(n(2)),
        a = s(n(1)),
        l = s(n(16));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = "1.0x",
                  n = this._getSpacings(),
                  r = (s =
                    (n.forEach(function (n) {
                      e._checkActive(n.style) && (t = n.name);
                    }),
                    this.props)).editor,
                  i = s.expanded,
                  u = s.tabIndex,
                  s = s.toggleDropdown;
                r = {
                  activeStyle: t,
                  editor: r,
                  onDismiss: s,
                  showRemoveStylesItem: !1,
                  styles: n,
                };
                return o.default.createElement(
                  "div",
                  {
                    className:
                      "ae-container ae-container-dropdown-small ae-has-dropdown",
                  },
                  o.default.createElement(
                    "button",
                    {
                      "aria-expanded": i,
                      className: "ae-toolbar-element",
                      onClick: s,
                      role: "combobox",
                      tabIndex: u,
                    },
                    o.default.createElement(
                      "span",
                      null,
                      o.default.createElement(a.default, {
                        symbol: "separator",
                      }),
                      " ",
                      t
                    )
                  ),
                  i && o.default.createElement(l.default, r)
                );
              },
            },
            {
              key: "_applyStyle",
              value: function (e) {
                var t = this,
                  n = this.context.editor.get("nativeEditor");
                e = new CKEDITOR.style({
                  element: "div",
                  attributes: { class: e },
                });
                n.getSelection().lock(),
                  this._getSpacings().forEach(function (e) {
                    t._checkActive(e.style) &&
                      n.removeStyle(new CKEDITOR.style(e.style));
                  }),
                  n.applyStyle(e),
                  n.getSelection().unlock(),
                  n.fire("actionPerformed", this);
              },
            },
            {
              key: "_checkActive",
              value: function (e) {
                var t = this.context.editor.get("nativeEditor"),
                  n = !0,
                  r = t.elementPath();
                return (
                  r && r.lastElement
                    ? e.attributes.class.split(" ").forEach(function (e) {
                        n = n && r.lastElement.hasClass(e);
                      })
                    : (n = !1),
                  n
                );
              },
            },
            {
              key: "_getSpacings",
              value: function () {
                return (
                  this.props.styles || [
                    {
                      name: "1.0x",
                      style: {
                        element: "div",
                        attributes: { class: "" },
                        type: 1,
                      },
                      styleFn: this._applyStyle.bind(this, ""),
                    },
                    {
                      name: "1.5x",
                      style: {
                        element: "div",
                        attributes: { class: "mt-1 mb-1" },
                        type: 1,
                      },
                      styleFn: this._applyStyle.bind(this, "mt-1 mb-1"),
                    },
                    {
                      name: "2.0x",
                      style: {
                        element: "div",
                        attributes: { class: "mt-2 mb-2" },
                        type: 1,
                      },
                      styleFn: this._applyStyle.bind(this, "mt-2 mb-2"),
                    },
                    {
                      name: "3.0x",
                      style: {
                        element: "div",
                        attributes: { class: "mt-3 mb-3" },
                        type: 1,
                      },
                      styleFn: this._applyStyle.bind(this, "mt-3 mb-3"),
                    },
                    {
                      name: "4.0x",
                      style: {
                        element: "div",
                        attributes: { class: "mt-4 mb-4" },
                        type: 1,
                      },
                      styleFn: this._applyStyle.bind(this, "mt-4 mb-4"),
                    },
                    {
                      name: "5.0x",
                      style: {
                        element: "div",
                        attributes: { class: "mt-5 mb-5" },
                        type: 1,
                      },
                      styleFn: this._applyStyle.bind(this, "mt-5 mb-5"),
                    },
                  ]
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.contextType = i.default),
        (n.key = "spacing"),
        (n.propTypes = {
          expanded: r.default.bool,
          label: r.default.string,
          showRemoveStylesItem: r.default.bool,
          styles: r.default.arrayOf(r.default.object),
          tabIndex: r.default.number,
          toggleDropdown: r.default.func,
        }),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(4)),
        a = s(n(8)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.strike,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-strike",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.strike,
                  },
                  r.default.createElement(l.default, {
                    symbol: "strikethrough",
                  })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = { command: "strike", style: "coreStyles_strike" }),
        (n.key = "strike"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = u(n(0)),
        o = u(n(2)),
        i = u(n(1)),
        a = u(n(16));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && l(e.prototype, t), n && l(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = AlloyEditor.Strings.normal,
                  n = this._getStyles(),
                  o = void n.forEach(function (n) {
                    e._checkActive(n.style) && (t = n.name);
                  });
                return (
                  this.props.expanded &&
                    (o = r.default.createElement(a.default, {
                      activeStyle: t,
                      onDismiss: this.props.toggleDropdown,
                      showRemoveStylesItem: this.props.showRemoveStylesItem,
                      styles: n,
                    })),
                  r.default.createElement(
                    "div",
                    { className: "ae-container-dropdown ae-has-dropdown" },
                    r.default.createElement(
                      "button",
                      {
                        "aria-expanded": this.props.expanded,
                        "aria-label": AlloyEditor.Strings.styles + " " + t,
                        className: "ae-toolbar-element",
                        onClick: this.props.toggleDropdown,
                        role: "combobox",
                        tabIndex: this.props.tabIndex,
                        title: AlloyEditor.Strings.styles + " " + t,
                      },
                      r.default.createElement(
                        "div",
                        { className: "ae-container" },
                        r.default.createElement(
                          "span",
                          { className: "ae-container-dropdown-selected-item" },
                          t
                        ),
                        r.default.createElement(i.default, {
                          symbol: "caret-bottom",
                        })
                      )
                    ),
                    o
                  )
                );
              },
            },
            {
              key: "_checkActive",
              value: function (e) {
                var t = this.context.editor.get("nativeEditor");
                return (
                  (e = CKEDITOR.tools.merge({ element: "span" }, e)),
                  new CKEDITOR.style(e).checkActive(t.elementPath(), t)
                );
              },
            },
            {
              key: "_getStyles",
              value: function () {
                return (
                  this.props.styles || [
                    { name: AlloyEditor.Strings.h1, style: { element: "h1" } },
                    { name: AlloyEditor.Strings.h2, style: { element: "h2" } },
                    {
                      name: AlloyEditor.Strings.formatted,
                      style: { element: "pre" },
                    },
                    {
                      name: AlloyEditor.Strings.cite,
                      style: { element: "cite" },
                    },
                    {
                      name: AlloyEditor.Strings.code,
                      style: { element: "code" },
                    },
                  ]
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.contextType = o.default),
        (n.key = "styles"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(4)),
        a = s(n(8)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.subscript,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-subscript",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.subscript,
                  },
                  r.default.createElement(l.default, { symbol: "subscript" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = {
          command: "subscript",
          style: "coreStyles_subscript",
        }),
        (n.key = "subscript"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(4)),
        a = s(n(8)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.superscript,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-superscript",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.superscript,
                  },
                  r.default.createElement(l.default, { symbol: "superscript" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = {
          command: "superscript",
          style: "coreStyles_superscript",
        }),
        (n.key = "superscript"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(13)),
        i = l(n(1));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = void 0,
                  n = void 0;
                return (
                  this.props.expanded &&
                    ((n = t.key + "List"),
                    (e = r.default.createElement(o.default, {
                      commands: this._getCommands(),
                      listId: n,
                      onDismiss: this.props.toggleDropdown,
                    }))),
                  r.default.createElement(
                    "div",
                    { className: "ae-container ae-has-dropdown" },
                    r.default.createElement(
                      "button",
                      {
                        "aria-expanded": this.props.expanded,
                        "aria-label": AlloyEditor.Strings.cell,
                        "aria-owns": n,
                        className: "ae-button",
                        onClick: this.props.toggleDropdown,
                        tabIndex: this.props.tabIndex,
                        title: AlloyEditor.Strings.cell,
                      },
                      r.default.createElement(i.default, { symbol: "add-cell" })
                    ),
                    e
                  )
                );
              },
            },
            {
              key: "_getCommands",
              value: function () {
                return (
                  this.props.commands || [
                    {
                      command: "cellInsertBefore",
                      label: AlloyEditor.Strings.cellInsertBefore,
                    },
                    {
                      command: "cellInsertAfter",
                      label: AlloyEditor.Strings.cellInsertAfter,
                    },
                    {
                      command: "cellDelete",
                      label: AlloyEditor.Strings.cellDelete,
                    },
                    {
                      command: "cellMerge",
                      label: AlloyEditor.Strings.cellMerge,
                    },
                    {
                      command: "cellMergeDown",
                      label: AlloyEditor.Strings.cellMergeDown,
                    },
                    {
                      command: "cellMergeRight",
                      label: AlloyEditor.Strings.cellMergeRight,
                    },
                    {
                      command: "cellHorizontalSplit",
                      label: AlloyEditor.Strings.cellSplitHorizontal,
                    },
                    {
                      command: "cellVerticalSplit",
                      label: AlloyEditor.Strings.cellSplitVertical,
                    },
                  ]
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.key = "tableCell"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(13)),
        i = l(n(1));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = void 0,
                  n = void 0;
                return (
                  this.props.expanded &&
                    ((n = t.key + "List"),
                    (e = r.default.createElement(o.default, {
                      commands: this._getCommands(),
                      listId: n,
                      onDismiss: this.props.toggleDropdown,
                    }))),
                  r.default.createElement(
                    "div",
                    { className: "ae-container ae-has-dropdown" },
                    r.default.createElement(
                      "button",
                      {
                        "aria-expanded": this.props.expanded,
                        "aria-label": AlloyEditor.Strings.column,
                        "aria-owns": n,
                        className: "ae-button",
                        onClick: this.props.toggleDropdown,
                        role: "listbox",
                        tabIndex: this.props.tabIndex,
                        title: AlloyEditor.Strings.column,
                      },
                      r.default.createElement(i.default, {
                        symbol: "add-column",
                      })
                    ),
                    e
                  )
                );
              },
            },
            {
              key: "_getCommands",
              value: function () {
                return (
                  this.props.commands || [
                    {
                      command: "columnInsertBefore",
                      label: AlloyEditor.Strings.columnInsertBefore,
                    },
                    {
                      command: "columnInsertAfter",
                      label: AlloyEditor.Strings.columnInsertAfter,
                    },
                    {
                      command: "columnDelete",
                      label: AlloyEditor.Strings.columnDelete,
                    },
                  ]
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.key = "tableColumn"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = u(n(0)),
        o = u(n(2)),
        i = u(n(13)),
        a = u(n(1));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && l(e.prototype, t), n && l(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = void 0,
                  n =
                    (this.props.expanded &&
                      ((n = t.key + "List"),
                      (e = r.default.createElement(i.default, {
                        commands: this._getCommands(),
                        listId: n,
                        onDismiss: this.props.toggleDropdown,
                      }))),
                    new CKEDITOR.Table(
                      this.context.editor.get("nativeEditor")
                    ).getHeading()),
                  o = AlloyEditor.Strings.headers + ":";
                n = AlloyEditor.Strings["headers" + n];
                return r.default.createElement(
                  "div",
                  { className: "ae-container-dropdown-xl ae-has-dropdown" },
                  r.default.createElement(
                    "button",
                    {
                      "aria-expanded": this.props.expanded,
                      "aria-label": "",
                      className: "ae-toolbar-element",
                      onClick: this.props.toggleDropdown,
                      role: "combobox",
                      tabIndex: this.props.tabIndex,
                      title: "",
                    },
                    r.default.createElement(
                      "div",
                      { className: "ae-container" },
                      r.default.createElement(
                        "span",
                        { className: "ae-container-dropdown-selected-item" },
                        o,
                        " ",
                        r.default.createElement("strong", null, n)
                      ),
                      r.default.createElement(a.default, {
                        symbol: "caret-bottom",
                      })
                    )
                  ),
                  e
                );
              },
            },
            {
              key: "_getCommands",
              value: function () {
                return (
                  this.props.commands || [
                    {
                      command: "tableHeadingNone",
                      label: AlloyEditor.Strings.headersNone,
                    },
                    {
                      command: "tableHeadingRow",
                      label: AlloyEditor.Strings.headersRow,
                    },
                    {
                      command: "tableHeadingColumn",
                      label: AlloyEditor.Strings.headersColumn,
                    },
                    {
                      command: "tableHeadingBoth",
                      label: AlloyEditor.Strings.headersBoth,
                    },
                  ]
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.contextType = o.default),
        (n.key = "tableHeading"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t, n) {
          return t && l(e.prototype, t), n && l(e, n), e;
        },
        o = u(n(0)),
        i = u(n(2)),
        a = u(n(1));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      (n = (function (e) {
        function t() {
          var e,
            n = this;
          if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = s(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(o)
              )
            ))._removeTable = function () {
              var t = e.context.editor.get("nativeEditor");
              new CKEDITOR.Table(t).remove(), t.fire("actionPerformed", e);
            }),
            s(e, e)
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          r(t, [
            {
              key: "render",
              value: function () {
                return o.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.deleteTable,
                    className: "ae-button",
                    "data-type": "button-table-remove",
                    onClick: this._removeTable,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.deleteTable,
                  },
                  o.default.createElement(a.default, { symbol: "trash" })
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component)),
        (n.contextType = i.default),
        (n.key = "tableRemove"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(13)),
        i = l(n(1));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = void 0,
                  n = void 0;
                return (
                  this.props.expanded &&
                    ((n = t.key + "List"),
                    (e = r.default.createElement(o.default, {
                      commands: this._getCommands(),
                      listId: n,
                      onDismiss: this.props.toggleDropdown,
                    }))),
                  r.default.createElement(
                    "div",
                    { className: "ae-container ae-has-dropdown" },
                    r.default.createElement(
                      "button",
                      {
                        "aria-expanded": this.props.expanded,
                        "aria-label": AlloyEditor.Strings.row,
                        "aria-owns": n,
                        className: "ae-button",
                        onClick: this.props.toggleDropdown,
                        role: "combobox",
                        tabIndex: this.props.tabIndex,
                        title: AlloyEditor.Strings.row,
                      },
                      r.default.createElement(i.default, { symbol: "add-row" })
                    ),
                    e
                  )
                );
              },
            },
            {
              key: "_getCommands",
              value: function () {
                return (
                  this.props.commands || [
                    {
                      command: "rowInsertBefore",
                      label: AlloyEditor.Strings.rowInsertBefore,
                    },
                    {
                      command: "rowInsertAfter",
                      label: AlloyEditor.Strings.rowInsertAfter,
                    },
                    {
                      command: "rowDelete",
                      label: AlloyEditor.Strings.rowDelete,
                    },
                  ]
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.key = "tableRow"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = l(n(1)),
        i = l(n(37));
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return this.props.renderExclusive
                  ? r.default.createElement(i.default, this.props)
                  : r.default.createElement(
                      "button",
                      {
                        "aria-label": AlloyEditor.Strings.table,
                        className: "ae-button",
                        "data-type": "button-table",
                        onClick: this.props.requestExclusive,
                        tabIndex: this.props.tabIndex,
                        title: AlloyEditor.Strings.table,
                      },
                      r.default.createElement(o.default, { symbol: "table" })
                    );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.key = "table"),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = u(n(0)),
        o = u(n(2)),
        i = u(n(4)),
        a = u(n(1));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      (n = (function (e) {
        function t() {
          var e,
            n = this;
          if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = s(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(o)
              )
            )).handleClick = function () {
              var t = e.context.editor.get("nativeEditor"),
                n = new CKEDITOR.Link(t);
              e.isActive()
                ? n.remove(n.getFromSelection())
                : n.create(e._getHref(), {
                    class: "ae-twitter-link",
                    target: "_blank",
                  }),
                t.fire("actionPerformed", e);
            }),
            s(e, e)
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && l(e.prototype, t), n && l(e, n);
          })(t, [
            {
              key: "isActive",
              value: function () {
                var e = new CKEDITOR.Link(
                  this.context.editor.get("nativeEditor")
                ).getFromSelection();
                return (
                  e &&
                  -1 !==
                    e.getAttribute("href").indexOf("twitter.com/intent/tweet")
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.twitter,
                    className: e,
                    "data-type": "button-twitter",
                    onClick: this.handleClick,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.twitter,
                  },
                  r.default.createElement(a.default, { symbol: "twitter" })
                );
              },
            },
            {
              key: "_getHref",
              value: function () {
                var e = this.context.editor
                    .get("nativeEditor")
                    .getSelection()
                    .getSelectedText()
                    .substring(0, 280),
                  t = this.props.url,
                  n = this.props.via;
                e = "https://twitter.com/intent/tweet?text=" + e;
                return t && (e += "&url=" + t), n && (e += "&via=" + n), e;
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.contextType = o.default),
        (n.key = "twitter"),
        (t.default = (0, i.default)(n));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(0)),
        o = s(n(3)),
        i = s(n(4)),
        a = s(n(8)),
        l = s(n(1));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.bulletedlist,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-ul",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.bulletedlist,
                  },
                  r.default.createElement(l.default, { symbol: "list-ul" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = {
          command: "bulletedlist",
          style: { element: "ul" },
        }),
        (n.key = "ul"),
        (t.default = (0, o.default)((0, i.default)((0, a.default)(n))));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = c(n(0)),
        o = c(n(3)),
        i = c(n(11)),
        a = c(n(4)),
        l = c(n(8)),
        u = c(n(1));
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t() {
          var e = this,
            n = t;
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
          if (
            ((e = this),
            (n = (t.__proto__ || Object.getPrototypeOf(t)).apply(
              this,
              arguments
            )),
            e)
          )
            return !n || ("object" != typeof n && "function" != typeof n)
              ? e
              : n;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && s(e.prototype, t), n && s(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = "ae-button " + this.getStateClasses();
                return r.default.createElement(
                  "button",
                  {
                    "aria-label": AlloyEditor.Strings.underline,
                    "aria-pressed": -1 !== e.indexOf("pressed"),
                    className: e,
                    "data-type": "button-underline",
                    onClick: this.execCommand,
                    tabIndex: this.props.tabIndex,
                    title: AlloyEditor.Strings.underline,
                  },
                  r.default.createElement(u.default, { symbol: "underline" })
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.defaultProps = {
          command: "underline",
          keystroke: {
            fn: "execCommand",
            keys: CKEDITOR.CTRL + 85,
            name: "underline",
          },
          style: "coreStyles_underline",
        }),
        (n.key = "underline"),
        (t.default = (0, o.default)(
          (0, i.default)((0, a.default)((0, l.default)(n)))
        ));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(101),
        o =
          (Object.defineProperty(t, "ButtonActionStyle", {
            enumerable: !0,
            get: function () {
              return b(r).default;
            },
          }),
          n(102)),
        i =
          (Object.defineProperty(t, "ButtonCommandActive", {
            enumerable: !0,
            get: function () {
              return b(o).default;
            },
          }),
          n(103)),
        a =
          (Object.defineProperty(t, "ButtonCommand", {
            enumerable: !0,
            get: function () {
              return b(i).default;
            },
          }),
          n(104)),
        l =
          (Object.defineProperty(t, "ButtonKeystroke", {
            enumerable: !0,
            get: function () {
              return b(a).default;
            },
          }),
          n(105)),
        u =
          (Object.defineProperty(t, "ButtonProps", {
            enumerable: !0,
            get: function () {
              return b(l).default;
            },
          }),
          n(106)),
        s =
          (Object.defineProperty(t, "ButtonStateClasses", {
            enumerable: !0,
            get: function () {
              return b(u).default;
            },
          }),
          n(107)),
        c =
          (Object.defineProperty(t, "ButtonStyle", {
            enumerable: !0,
            get: function () {
              return b(s).default;
            },
          }),
          n(108)),
        d =
          (Object.defineProperty(t, "ToolbarButtons", {
            enumerable: !0,
            get: function () {
              return b(c).default;
            },
          }),
          n(109)),
        f =
          (Object.defineProperty(t, "WidgetArrowBox", {
            enumerable: !0,
            get: function () {
              return b(d).default;
            },
          }),
          n(110)),
        p =
          (Object.defineProperty(t, "WidgetDropdown", {
            enumerable: !0,
            get: function () {
              return b(f).default;
            },
          }),
          n(111)),
        h =
          (Object.defineProperty(t, "WidgetExclusive", {
            enumerable: !0,
            get: function () {
              return b(p).default;
            },
          }),
          n(112)),
        m =
          (Object.defineProperty(t, "WidgetFocusManager", {
            enumerable: !0,
            get: function () {
              return b(h).default;
            },
          }),
          n(38)),
        y =
          (Object.defineProperty(t, "WidgetInteractionPoint", {
            enumerable: !0,
            get: function () {
              return b(m).default;
            },
          }),
          n(113));
      function b(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "WidgetPosition", {
        enumerable: !0,
        get: function () {
          return b(y).default;
        },
      });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (n = n(5)) && n.__esModule ? n : { default: n };
      t.default = {
        applyStyle: function () {
          var e;
          r.default.isFunction(this.isActive) &&
            r.default.isFunction(this.getStyle) &&
            ((e = this.props.editor.get("nativeEditor")).getSelection().lock(),
            this.isActive()
              ? e.removeStyle(this.getStyle())
              : e.applyStyle(this.getStyle()),
            e.getSelection().unlock(),
            e.fire("actionPerformed", this));
        },
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          isActive: function () {
            var e = this.props.editor
              .get("nativeEditor")
              .getCommand(this.props.command);
            return !!e && e.state === CKEDITOR.TRISTATE_ON;
          },
        });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (n = {
          propTypes: {
            command: (n = (n = n(7)) && n.__esModule ? n : { default: n })
              .default.string.isRequired,
            modifiesSelection: n.default.bool,
          },
          execCommand: function (e) {
            var t = this.props.editor.get("nativeEditor");
            t.execCommand(this.props.command, e),
              this.props.modifiesSelection && t.selectionChange(!0),
              t.fire("actionPerformed", this);
          },
        }),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(n(7)),
        o = i(n(5));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = {
        propTypes: { keystroke: r.default.object.isRequired },
        componentWillMount: function () {
          var e,
            t = this.props.editor.get("nativeEditor"),
            n = this.props.keystroke,
            r = n.name || ((1e9 * Math.random()) >>> 0).toString();
          t.getCommand(r) ||
            ((e = new CKEDITOR.command(t, {
              exec: function (e) {
                var t = n.fn;
                o.default.isString(t)
                  ? this[t].call(this, e)
                  : o.default.isFunction(t) && t.call(this, e);
              }.bind(this),
            })),
            t.addCommand(r, e)),
            (this._defaultKeystrokeCommand =
              t.keystrokeHandler.keystrokes[n.keys]),
            t.setKeystroke(n.keys, r);
        },
        componentWillUnmount: function () {
          this.props.editor
            .get("nativeEditor")
            .setKeystroke(
              this.props.keystroke.keys,
              this._defaultKeystrokeCommand
            );
        },
      }),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(n(7)),
        o = i(n(19));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = {
        propTypes: { editor: r.default.object.isRequired },
        mergeButtonCfgProps: function (e) {
          e = e || this.props;
          var t = this.props.editor.get("nativeEditor").config.buttonCfg || {};
          return CKEDITOR.tools.merge(e, t[o.default.key]);
        },
      }),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (n = n(5)) && n.__esModule ? n : { default: n };
      t.default = {
        getStateClasses: function () {
          var e = "";
          return (
            r.default.isFunction(this.isActive) &&
              this.isActive() &&
              (e += "ae-button-pressed"),
            r.default.isFunction(this.isDisabled) &&
              this.isDisabled() &&
              (e += " ae-button-disabled"),
            e
          );
        },
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(n(7)),
        o = i(n(5));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = {
        propTypes: {
          style: r.default.oneOfType([r.default.object, r.default.string]),
          styleFn: r.default.func,
        },
        componentWillMount: function () {
          var e = this.props.style;
          if (o.default.isString(e)) {
            for (
              var t = e.split("."),
                n = this.props.editor.get("nativeEditor").config,
                r = t.shift();
              r && o.default.isObject(n) && o.default.isObject(n[r]);

            )
              (n = n[r]), (r = t.shift());
            o.default.isObject(n) && (e = n);
          }
          this._style = new CKEDITOR.style(e);
        },
        componentWillUnmount: function () {
          this._style = null;
        },
        getStyle: function () {
          return this._style;
        },
        isActive: function () {
          var e = this.props.editor.get("nativeEditor"),
            t = e.elementPath();
          return this.getStyle().checkActive(t, e);
        },
      }),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(n(0)),
        o = i(n(5));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = {
        getToolbarButtonGroups: function (e, t) {
          var n = this;
          return (e = o.default.isFunction(e) ? e.call(this) || [] : e).reduce(
            function (r, o) {
              return Array.isArray(o)
                ? (r.push(n.getToolbarButtons(o, t)), r)
                : n.getToolbarButtons(e, t);
            },
            []
          );
        },
        getToolbarButtons: function (e, t) {
          var n = {},
            i = this.props.editor.get("nativeEditor").config.buttonCfg || {};
          return (
            o.default.isFunction(e) && (e = e.call(this) || []),
            this.filterExclusive(
              e
                .filter(function (e) {
                  return (
                    e && (AlloyEditor.Buttons[e] || AlloyEditor.Buttons[e.name])
                  );
                })
                .map(function (e) {
                  return (
                    o.default.isString(e)
                      ? ((n[e] = i[e]), (e = AlloyEditor.Buttons[e]))
                      : o.default.isString(e.name) &&
                        ((n[AlloyEditor.Buttons[e.name].key] =
                          CKEDITOR.tools.merge(i[e], e.cfg)),
                        (e = AlloyEditor.Buttons[e.name])),
                    e
                  );
                })
            ).map(function (e, o) {
              return (
                (o = this.mergeExclusiveProps(
                  {
                    editor: this.props.editor,
                    key: "separator" !== e.key ? e.key : e.key + "-" + o,
                    tabKey: e.key,
                    tabIndex:
                      this.props.trigger &&
                      this.props.trigger.props.tabKey === e.key
                        ? 0
                        : -1,
                    trigger: this.props.trigger,
                  },
                  e.key
                )),
                (o = this.mergeDropdownProps(o, e.key)),
                t && (o = CKEDITOR.tools.merge(o, t)),
                (o = CKEDITOR.tools.merge(o, n[e.key])),
                r.default.createElement(e, o)
              );
            }, this)
          );
        },
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (n = n(5)) && n.__esModule ? n : { default: n };
      t.default = {
        getArrowBoxClasses: function () {
          var e = "ae-arrow-box";
          return (
            r.default.isFunction(this.getInteractionPoint) &&
              this.getInteractionPoint() &&
              (this.getInteractionPoint().direction ===
              CKEDITOR.SELECTION_TOP_TO_BOTTOM
                ? (e += " ae-arrow-box-top")
                : (e += " ae-arrow-box-bottom")),
            e
          );
        },
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (n = n(6)) && n.__esModule ? n : { default: n };
      t.default = {
        componentWillReceiveProps: function (e) {
          this.setState({ dropdownTrigger: null, itemDropdown: null });
        },
        getInitialState: function () {
          return { dropdownTrigger: null, itemDropdown: null };
        },
        mergeDropdownProps: function (e, t) {
          return CKEDITOR.tools.merge(e, {
            expanded: this.state.itemDropdown === t,
            tabIndex: this.state.dropdownTrigger === t ? 0 : -1,
            toggleDropdown: this.toggleDropdown.bind(this, t),
          });
        },
        toggleDropdown: function (e, t) {
          this.setState(
            {
              dropdownTrigger: e,
              itemDropdown: e !== this.state.itemDropdown ? e : null,
            },
            function () {
              this.state.itemDropdown ||
                (this.moveFocus
                  ? this.moveFocus(t)
                  : r.default.findDOMNode(this).focus());
            }
          );
        },
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          cancelExclusive: function (e) {
            this.state.itemExclusive === e &&
              this.setState({ itemExclusive: null });
          },
          componentWillReceiveProps: function (e) {
            this.setState({ itemExclusive: null });
          },
          filterExclusive: function (e) {
            var t = this;
            return e.filter(function (e) {
              return t.state.itemExclusive && t.state.itemExclusive !== e.key
                ? void 0
                : e;
            });
          },
          mergeExclusiveProps: function (e, t) {
            return CKEDITOR.tools.merge(e, {
              cancelExclusive: this.cancelExclusive.bind(this, t),
              renderExclusive: this.state.itemExclusive === t,
              requestExclusive: this.requestExclusive.bind(this, t),
            });
          },
          requestExclusive: function (e) {
            this.setState({ itemExclusive: e });
          },
        });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(7)),
        o = a(n(6)),
        i = a(n(5));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = {
        propTypes: {
          onDismiss: r.default.func,
          circular: r.default.bool.isRequired,
          focusFirstChild: r.default.bool,
          descendants: r.default.string.isRequired,
          keys: r.default.object.isRequired,
        },
        componentDidMount: function () {
          this._refresh();
        },
        componentDidUpdate: function () {
          this._refresh();
        },
        focus: function (e) {
          var t;
          (!e || this._isValidTarget(e.target)) &&
            this._descendants &&
            this._descendants.length &&
            ((t = this._descendants[this._activeDescendant]),
            document.activeElement === t ||
              this.props.focusFirstChild ||
              (-1 === this._descendants.indexOf(document.activeElement) &&
                t.focus()),
            e && (e.stopPropagation(), e.preventDefault()));
        },
        handleKey: function (e) {
          var t;
          this._isValidTarget(e.target) &&
            this._descendants &&
            (t = this._getFocusAction(e)).type &&
            (e.stopPropagation(),
            e.preventDefault(),
            1 === t.type && this._moveFocus(t.direction),
            2 === t.type && this.props.onDismiss(t.direction));
        },
        moveFocus: function (e) {
          (e = i.default.isNumber(e) ? e : 0), this._moveFocus(e);
        },
        _getFocusAction: function (e) {
          var t,
            n = { type: 0 };
          return (
            this.props.keys &&
              ((t = this._getFocusMoveDirection(e)) &&
                ((n.direction = t), (n.type = 1)),
              (e = this._getFocusDismissAction(e, t)).dismiss &&
                ((n.direction = e.direction), (n.type = 2))),
            n
          );
        },
        _getFocusDismissAction: function (e, t) {
          var n = { direction: t, dismiss: !1 };
          return (
            this.props.onDismiss &&
              (this._isValidKey(e.keyCode, this.props.keys.dismiss) &&
                (n.dismiss = !0),
              this._isValidKey(e.keyCode, this.props.keys.dismissNext) &&
                ((n.dismiss = !0), (n.direction = 1)),
              this._isValidKey(e.keyCode, this.props.keys.dismissPrev) &&
                ((n.dismiss = !0), (n.direction = -1)),
              n.dismiss ||
                this.props.circular ||
                !t ||
                (n.dismiss =
                  (-1 === t && 0 === this._activeDescendant) ||
                  (1 === t &&
                    this._activeDescendant === this._descendants.length - 1))),
            n
          );
        },
        _getFocusMoveDirection: function (e) {
          var t = 0;
          return (
            this._isValidKey(e.keyCode, this.props.keys.next) && (t = 1),
            this._isValidKey(e.keyCode, this.props.keys.prev) && (t = -1),
            e.shifKey && (t *= -1),
            t
          );
        },
        _isValidKey: function (e, t) {
          return i.default.isArray(t) ? -1 !== t.indexOf(e) : e === t;
        },
        _isValidTarget: function (e) {
          return (
            "input" !== (e = e.tagName.toLowerCase()) &&
            "select" !== e &&
            "textarea" !== e
          );
        },
        _moveFocus: function (e) {
          var t = this._descendants.length,
            n = this._descendants[this._activeDescendant];
          n.setAttribute("tabIndex", -1),
            (this._activeDescendant += e),
            this.props.circular
              ? (this._activeDescendant =
                  ((this._activeDescendant % t) + t) % t)
              : (this._activeDescendant = Math.max(
                  Math.min(this._activeDescendant, t - 1),
                  0
                )),
            (n = this._descendants[this._activeDescendant]).setAttribute(
              "tabIndex",
              0
            ),
            n.focus();
        },
        _refresh: function () {
          var e,
            t = this,
            n = o.default.findDOMNode(this);
          n &&
            ((n = n.querySelectorAll(this.props.descendants)),
            (e = []),
            (this._descendants = []),
            Array.prototype.slice.call(n).forEach(function (n) {
              (n.getAttribute("data-tabindex") ? e : t._descendants).push(n);
            }),
            (e = e.sort(function (e, t) {
              return (
                i.default.toInt(e.getAttribute("data-tabindex")) >
                i.default.toInt(t.getAttribute("data-tabindex"))
              );
            })),
            (this._descendants = e.concat(this._descendants)),
            (this._activeDescendant = 0),
            this._descendants.some(function (e, n) {
              if ("0" === e.getAttribute("tabindex"))
                return (t._activeDescendant = n), t.focus(), !0;
            }));
        },
      }),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(n(7)),
        o = i(n(6));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = {
        mixins: [i(n(38)).default],
        propTypes: {
          constrainToViewport: r.default.bool,
          gutter: r.default.object,
        },
        getDefaultProps: function () {
          return { gutter: { left: 0, top: 10 }, constrainToViewport: !0 };
        },
        cancelAnimation: function () {
          window.cancelAnimationFrame &&
            window.cancelAnimationFrame(this._animationFrameId);
        },
        getConstrainedPosition: function (e, t) {
          t = t || new CKEDITOR.dom.window(window).getViewPaneSize();
          var n = e.left,
            r = e.top;
          return (
            e.left + e.width > t.width && (n -= e.left + e.width - t.width),
            { x: n, y: (r = r < 0 ? 0 : r) }
          );
        },
        getWidgetXYPoint: function (e, t, n) {
          var r = o.default.findDOMNode(this),
            i = this.props.gutter,
            a = r.offsetWidth / 2;
          return (
            n === CKEDITOR.SELECTION_TOP_TO_BOTTOM ||
            n === CKEDITOR.SELECTION_BOTTOM_TO_TOP
              ? ((e = e - i.left - a),
                (t =
                  n === CKEDITOR.SELECTION_TOP_TO_BOTTOM
                    ? t + i.top
                    : t - r.offsetHeight - i.top))
              : (n !== CKEDITOR.SELECTION_LEFT_TO_RIGHT &&
                  n !== CKEDITOR.SELECTION_RIGHT_TO_LEFT) ||
                ((e =
                  n === CKEDITOR.SELECTION_LEFT_TO_RIGHT
                    ? e + i.left + r.offsetHeight / 2
                    : e - (3 * r.offsetHeight) / 2 - i.left),
                (t = t - i.top - r.offsetHeight / 2)),
            [
              (e =
                (e = e < 0 ? 0 : e) > document.body.offsetWidth - a
                  ? document.body.offsetWidth - a
                  : e),
              (t = t < 0 ? 0 : t),
            ]
          );
        },
        isVisible: function () {
          var e = o.default.findDOMNode(this);
          return (
            !!e && new CKEDITOR.dom.element(e).hasClass("alloy-editor-visible")
          );
        },
        moveToPoint: function (e, t) {
          var n = new CKEDITOR.dom.element(o.default.findDOMNode(this));
          n.setStyles({
            left: e[0] + "px",
            top: e[1] + "px",
            opacity: 0,
            pointerEvents: "none",
          }),
            n.removeClass("alloy-editor-invisible"),
            this._animate(function () {
              n.addClass("ae-toolbar-transition"),
                n.addClass("alloy-editor-visible"),
                n.setStyles({
                  left: t[0] + "px",
                  top: t[1] + "px",
                  opacity: 1,
                }),
                setTimeout(function () {
                  n.setStyles({ pointerEvents: "" });
                }, 150);
            });
        },
        show: function () {
          var e,
            t,
            n,
            r,
            i,
            a,
            l = o.default.findDOMNode(this),
            u = (u = this.props.editor.get("uiNode")) ? u.scrollTop : 0;
          !this.isVisible() &&
            l &&
            (e = this.getInteractionPoint()) &&
            ((r = new CKEDITOR.dom.element(l)),
            (a = i = void 0),
            (i = t = parseFloat(r.getStyle("left"))),
            (a = parseFloat(r.getStyle("top"))),
            this.props.constrainToViewport &&
              ((i = (r = this.getConstrainedPosition({
                height: parseFloat(l.offsetHeight),
                left: i,
                top: a,
                width: parseFloat(l.offsetWidth),
              })).x),
              (a = r.y)),
            (n =
              e.direction === CKEDITOR.SELECTION_TOP_TO_BOTTOM
                ? this.props.selectionData.region.bottom + u
                : this.props.selectionData.region.top + u),
            this.moveToPoint([t, n], [i, a]));
        },
        updatePosition: function () {
          var e,
            t,
            n,
            r = this.getInteractionPoint(),
            i = o.default.findDOMNode(this);
          r &&
            i &&
            ((n = this.props.editor.get("uiNode") || document.body),
            (t = getComputedStyle(n)),
            (e = parseInt(t.getPropertyValue("margin-left"), 10)),
            (t = parseInt(t.getPropertyValue("margin-right"), 10)),
            (e = e + n.clientWidth + t),
            (t = "BODY" !== n.tagName ? n.scrollTop : 0),
            ((n = this.getWidgetXYPoint(r.x, r.y, r.direction))[1] += t),
            n[0] < 0 && (n[0] = 0),
            n[0] > e - i.offsetWidth && (n[0] = e - i.offsetWidth),
            new CKEDITOR.dom.element(i).setStyles({
              left: n[0] + "px",
              top: n[1] + "px",
            }));
        },
        _animate: function (e) {
          window.requestAnimationFrame
            ? (this._animationFrameId = window.requestAnimationFrame(e))
            : e();
        },
      }),
        (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = o(n(115));
      n = o(n(116));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, n) {
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n);
      }
      t.default =
        (i((t = {}), r.default.key, r.default),
        i(t, n.default.key, n.default),
        t);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = f(n(0)),
        o = f(n(6)),
        i = f(n(2)),
        a = f(n(21)),
        l = f(n(17)),
        u = f(n(18)),
        s = f(n(10)),
        c = f(n(1));
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          return (
            (e = (function (e, t) {
              if (e)
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))),
            (e.state = {}),
            e
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && d(e.prototype, t), n && d(e, n);
          })(t, [
            {
              key: "componentDidMount",
              value: function () {
                this._updatePosition();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e, t) {
                this._updatePosition(),
                  this.props.renderExclusive && this.focus();
              },
            },
            {
              key: "render",
              value: function () {
                if (
                  !this.state.itemExclusive &&
                  this.props.editorEvent &&
                  this.props.editorEvent.data.nativeEvent.target &&
                  !this.props.editorEvent.data.nativeEvent.target
                    .isContentEditable
                )
                  return null;
                var e = this._getButtons(),
                  t = this._getToolbarClassName();
                return r.default.createElement(
                  "div",
                  {
                    "aria-label": AlloyEditor.Strings.add,
                    className: t,
                    "data-tabindex": this.props.config.tabIndex || 0,
                    onFocus: this.focus.bind(this),
                    onKeyDown: this.handleKey.bind(this),
                    role: "toolbar",
                    tabIndex: "-1",
                  },
                  r.default.createElement(
                    "div",
                    { className: "ae-container" },
                    e
                  )
                );
              },
            },
            {
              key: "_getButtons",
              value: function () {
                var e = void 0;
                return (
                  this.props.renderExclusive
                    ? (e = this.getToolbarButtons(this.props.config.buttons))
                    : this.props.selectionData &&
                      this.props.selectionData.region &&
                      (e = r.default.createElement(
                        "button",
                        {
                          "aria-label": AlloyEditor.Strings.add,
                          className: "ae-button ae-button-add",
                          onClick: this.props.requestExclusive.bind(
                            this,
                            t.key
                          ),
                          title: AlloyEditor.Strings.add,
                        },
                        r.default.createElement(c.default, { symbol: "plus" })
                      )),
                  e
                );
              },
            },
            {
              key: "_getToolbarClassName",
              value: function () {
                var e = "ae-toolbar-add";
                return this.props.renderExclusive
                  ? "ae-toolbar " + this.getArrowBoxClasses()
                  : e;
              },
            },
            {
              key: "_updatePosition",
              value: function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  a,
                  l = void 0;
                o.default.findDOMNode(this) &&
                  (this.props.renderExclusive
                    ? (this.updatePosition(), this.show())
                    : (l = this.props.selectionData
                        ? this.props.selectionData.region
                        : l) &&
                      ((e = o.default.findDOMNode(this)),
                      (t = new CKEDITOR.dom.element(e)),
                      (n = l.startRect || l),
                      (i = (r = this.context.editor.get("nativeEditor"))
                        .editable()
                        .getClientRect()),
                      (a = void 0),
                      (a =
                        1 ===
                        (this.props.config.position || this.props.position)
                          ? i.left -
                            e.offsetWidth -
                            this.props.gutterExclusive.left +
                            "px"
                          : i.right + this.props.gutterExclusive.left + "px"),
                      (e.style.left = a),
                      (e.style.top = Math.floor((l.bottom + l.top) / 2) + "px"),
                      (a = (i = this.context.editor.get("uiNode"))
                        ? i.scrollTop
                        : 0),
                      "auto" !== r.element.getStyle("overflow")
                        ? (e.style.top =
                            Math.floor(
                              l.top - e.offsetHeight / 2 + n.height / 2 + a
                            ) + "px")
                        : (e.style.top =
                            Math.floor(
                              r.element.$.offsetTop +
                                n.height / 2 -
                                e.offsetHeight / 2
                            ) + "px"),
                      (e.style.opacity = 1),
                      t.removeClass("ae-arrow-box"),
                      this.cancelAnimation()));
              },
            },
          ]),
          t
        );
      })(r.default.Component)),
        (n.contextType = i.default),
        (n.key = "add"),
        (n.left = 1),
        (n.right = 2),
        (n.defaultProps = {
          circular: !0,
          descendants: ".ae-button",
          gutterExclusive: { left: 10, top: 0 },
          keys: { dismiss: [27], next: [39, 40], prev: [37, 38] },
          position: 1,
        }),
        (t.default = (0, l.default)(
          (0, u.default)((0, s.default)((0, a.default)(n)))
        ));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
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
              },
        o = f(n(0)),
        i = f(n(6)),
        a = f(n(2)),
        l = f(n(5)),
        u = f(n(21)),
        s = f(n(17)),
        c = f(n(18));
      n = f(n(10));
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var p = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          return (
            (e = (function (e, t) {
              if (e)
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))),
            (e.state = {}),
            e
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && d(e.prototype, t), n && d(e, n);
          })(t, [
            {
              key: "componentDidMount",
              value: function () {
                this._updatePosition();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e, t) {
                this._updatePosition();
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t,
                  n,
                  i = this._getCurrentSelection();
                return i
                  ? ((e =
                      "ae-toolbar-styles " +
                      ((e = this._getSelectionFunction(i.getArrowBoxClasses))
                        ? e()
                        : this.getArrowBoxClasses())),
                    "object" !==
                      (void 0 === (t = i.buttons) ? "undefined" : r(t)) ||
                      Array.isArray(t) ||
                      (t = t[this.context.editor.get("mode")] || t.simple),
                    (n = "ae-container"),
                    0 <
                      (t = this.getToolbarButtonGroups(t, {
                        manualSelection: this.props.editorEvent
                          ? this.props.editorEvent.data.manualSelection
                          : null,
                        selectionType: i.name,
                      })).filter(function (e) {
                        return Array.isArray(e);
                      }).length && (n += " ae-container-column"),
                    o.default.createElement(
                      "div",
                      {
                        "aria-label": AlloyEditor.Strings.styles,
                        className: e,
                        "data-tabindex": this.props.config.tabIndex || 0,
                        onFocus: this.focus.bind(this),
                        onKeyDown: this.handleKey.bind(this),
                        role: "toolbar",
                        tabIndex: "-1",
                      },
                      o.default.createElement(
                        "div",
                        { className: n },
                        t.map(function (e, t) {
                          return Array.isArray(e)
                            ? o.default.createElement(
                                "div",
                                { className: "ae-row", key: t },
                                e.map(function (e) {
                                  return e;
                                })
                              )
                            : e;
                        })
                      )
                    ))
                  : null;
              },
            },
            {
              key: "_getSelectionFunction",
              value: function (e) {
                var t = void 0;
                if (l.default.isFunction(e)) t = e;
                else if (l.default.isString(e)) {
                  for (
                    var n = e.split("."), r = window, o = n.shift();
                    o && l.default.isObject(r) && l.default.isObject(r[o]);

                  )
                    (r = r[o]), (o = n.shift());
                  l.default.isFunction(r) && (t = r);
                }
                return t;
              },
            },
            {
              key: "_getCurrentSelection",
              value: function () {
                var e = this.props.editorEvent
                    ? this.props.editorEvent.data
                    : null,
                  t = void 0;
                return (
                  e &&
                    this.props.config.selections.some(function (n) {
                      var r = this._getSelectionFunction(n.test),
                        o = void 0;
                      return (
                        (o = r
                          ? e.manualSelection === n.name ||
                            r({ data: e, editor: this.context.editor })
                          : o) && (t = n),
                        o
                      );
                    }, this),
                  t
                );
              },
            },
            {
              key: "_updatePosition",
              value: function () {
                var e, t;
                i.default.findDOMNode(this) &&
                  ((e = void 0),
                  (e =
                    (t = this._getCurrentSelection()) &&
                    (t = this._getSelectionFunction(t.setPosition))
                      ? t.call(this, {
                          editor: this.context.editor,
                          editorEvent: this.props.editorEvent,
                          selectionData: this.props.selectionData,
                        })
                      : e) || (this.updatePosition(), this.show()));
              },
            },
          ]),
          t
        );
      })(o.default.Component);
      (p.contextType = a.default),
        (p.defaultProps = {
          circular: !0,
          descendants:
            ".ae-input, .ae-button:not([disabled]), .ae-toolbar-element",
          keys: { dismiss: [27], next: [39, 40], prev: [37, 38] },
        }),
        (p.key = "styles"),
        (t.default = (0, s.default)(
          (0, c.default)((0, n.default)((0, u.default)(p)))
        ));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        n(118),
        n(43),
        n(142);
      var r = f(n(0)),
        o = f(n(6)),
        i = n(149),
        a = f(n(151)),
        l = f(n(152)),
        u = f(n(5)),
        s = f(n(22)),
        c = f(n(42)),
        d = f(n(2));
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p(e) {
        p.superclass.constructor.call(this, e);
      }
      (0, s.default)(
        p,
        l.default,
        {
          initializer: function (e) {
            var t = this,
              n = this.get("srcNode"),
              r =
                (this.get("enableContentEditable") &&
                  n.setAttribute("contenteditable", "true"),
                CKEDITOR.inline(n));
            (r.config.allowedContent = this.get("allowedContent")),
              (r.config.toolbars = this.get("toolbars")),
              (r.config.removePlugins = this.get("removePlugins")),
              (r.config.extraPlugins = this.get("extraPlugins")),
              (r.config.embedProviders = this.get("embedProviders")),
              (r.config.placeholderClass = this.get("placeholderClass")),
              (r.config.pasteFromWordRemoveStyles = !1),
              (r.config.pasteFromWordRemoveFontStyles = !1),
              (r.config.selectionKeystrokes = this.get("selectionKeystrokes")),
              (r.config.spritemap = this.get("spritemap")),
              u.default.mix(r.config, e),
              CKEDITOR.env.ie &&
                !CKEDITOR.env.edge &&
                ((r.config.extraPlugins = r.config.extraPlugins.replace(
                  "ae_dragresize",
                  (n = "ae_dragresize_ie11")
                )),
                (r.config.removePlugins = r.config.removePlugins.replace(
                  "ae_dragresize",
                  n
                ))),
              r.once("contentDom", function () {
                t._addReadOnlyLinkClickListener(r);
                for (
                  var e = r.editable(),
                    n = t.get("extraCommands"),
                    o = Object.keys(n),
                    i = 0;
                  i < o.length;
                  i++
                ) {
                  var a = o[i];
                  r.commands[a] || r.addCommand(a, n[a]);
                }
                e.addClass("ae-editable");
              }),
              (this._editor = r),
              AlloyEditor.loadLanguageResources(this._renderUI.bind(this));
          },
          destructor: function () {
            (this._destroyed = !0),
              this._editorUIElement &&
                (o.default.unmountComponentAtNode(this._editorUIElement),
                this._editorUIElement.parentNode.removeChild(
                  this._editorUIElement
                ));
            var e,
              t = this.get("nativeEditor");
            t &&
              ((e = t.editable()) &&
                (e.removeClass("ae-editable"),
                this.get("enableContentEditable") &&
                  this.get("srcNode").setAttribute("contenteditable", "false")),
              this._clearSelections(),
              t.destroy());
          },
          _clearSelections: function () {
            var e = this.get("nativeEditor"),
              t = "function" != typeof window.getSelection;
            e.document &&
              (t
                ? e.document.$.selection.empty()
                : e.document.getWindow().$.getSelection().removeAllRanges());
          },
          _addReadOnlyLinkClickListener: function (e) {
            e.editable().on("click", this._defaultReadOnlyClickFn, this, {
              editor: e,
            });
          },
          _defaultReadOnlyClickFn: function (e) {
            var t = e.data.$,
              n = t.ctrlKey || t.metaKey,
              r = this._editor.config.readOnly || n;
            t.preventDefault(),
              r &&
                !1 !==
                  e.listenerData.editor
                    .editable()
                    .editor.fire("readOnlyClick", e.data) &&
                (t = new CKEDITOR.dom.elementPath(e.data.getTarget(), this)
                  .lastElement) &&
                ((r = t.$.attributes.href ? t.$.attributes.href.value : null),
                (e = n
                  ? "_blank"
                  : t.$.attributes.target
                  ? t.$.attributes.target.value
                  : null),
                this._redirectLink(r, e));
          },
          _getNativeEditor: function () {
            return this._editor;
          },
          _redirectLink: function (e, t) {
            t && e ? window.open(e, t) : e && (window.location.href = e);
          },
          _renderUI: function () {
            var e,
              t = this;
            this._destroyed ||
              (((e = document.createElement("div")).className = "ae-ui"),
              (this.get("uiNode") || document.body).appendChild(e),
              o.default.render(
                r.default.createElement(
                  d.default.Provider,
                  { value: { editor: this } },
                  r.default.createElement(a.default, {
                    eventsDelay: this.get("eventsDelay"),
                    ref: function (e) {
                      !t._mainUI &&
                        e &&
                        ((t._mainUI = e),
                        t.get("nativeEditor").fire("uiReady"));
                    },
                    toolbars: this.get("toolbars"),
                  })
                ),
                e
              ),
              (this._editorUIElement = e));
          },
          _toElement: function (e) {
            return u.default.isString(e) ? document.getElementById(e) : e;
          },
          _validateAllowedContent: function (e) {
            return (
              u.default.isString(e) ||
              u.default.isObject(e) ||
              u.default.isBoolean(e)
            );
          },
          _validateToolbars: function (e) {
            return u.default.isObject(e) || u.default.isNull(e);
          },
        },
        {
          ATTRS: {
            allowedContent: {
              validator: "_validateAllowedContent",
              value: !0,
              writeOnce: !0,
            },
            documentBrowseLinkCallback: {
              validator: u.default.isFunction,
              value: void 0,
            },
            documentBrowseLinkUrl: {
              validator: u.default.isString,
              value: void 0,
            },
            embedProviders: {
              validator: u.default.isArray,
              value: [
                {
                  id: "facebook",
                  tpl: '<iframe allowFullScreen="true" allowTransparency="true"\n\t\t\t\t\t\t\t\t\t\t\t\t frameborder="0" height="315"\n\t\t\t\t\t\t\t\t\t\t\t\t src="https://www.facebook.com/plugins/video.php?href={embedId}\'\n\t\t\t\t\t\t\t\t\t\t\t\t &show_text=0&width=560&height=315" scrolling="no"\n\t\t\t\t\t\t\t\t\t\t\t\t style="border:none;overflow:hidden" width="560}"></iframe>',
                  type: "video",
                  urlSchemes: [
                    "(https?:\\/\\/(?:www\\.)?facebook.com\\/\\S*\\/videos\\/\\S*)",
                  ],
                },
                {
                  id: "twitch",
                  tpl: '<iframe allowfullscreen="true" frameborder="0"\n\t\t\t\t\t\t\t\t\t\t\t\t height="315"\n\t\t\t\t\t\t\t\t\t\t\t\t src="https://player.twitch.tv/?autoplay=false&video={embedId}"\n\t\t\t\t\t\t\t\t\t\t\t\t scrolling="no" width="560"></iframe>',
                  type: "video",
                  urlSchemes: [
                    "https?:\\/\\/(?:www\\.)?twitch.tv\\/videos\\/(\\S*)$",
                  ],
                },
                {
                  id: "vimeo",
                  tpl: '<iframe allowfullscreen frameborder="0" height="315"\n\t\t\t\t\t\t\t\t\t\t\t\t mozallowfullscreen src="https://player.vimeo.com/video/{embedId}"\n\t\t\t\t\t\t\t\t\t\t\t\t webkitallowfullscreen width="560"></iframe>',
                  type: "video",
                  urlSchemes: [
                    "https?:\\/\\/(?:www\\.)?vimeo\\.com\\/album\\/.*\\/video\\/(\\S*)",
                    "https?:\\/\\/(?:www\\.)?vimeo\\.com\\/channels\\/.*\\/(\\S*)",
                    "https?:\\/\\/(?:www\\.)?vimeo\\.com\\/groups\\/.*\\/videos\\/(\\S*)",
                    "https?:\\/\\/(?:www\\.)?vimeo\\.com\\/(\\S*)$",
                  ],
                },
                {
                  id: "youtube",
                  tpl: '<iframe allow="autoplay; encrypted-media" allowfullscreen\n\t\t\t\t\t\t\t\t\t\t\t\t height="315" frameborder="0"\n\t\t\t\t\t\t\t\t\t\t\t\t src="https://www.youtube.com/embed/{embedId}?rel=0"\n\t\t\t\t\t\t\t\t\t\t\t\t width="560"></iframe>',
                  type: "video",
                  urlSchemes: [
                    "https?:\\/\\/(?:www\\.)?youtube.com\\/watch\\?v=(\\S*)$",
                  ],
                },
              ],
            },
            enableContentEditable: {
              validator: u.default.isBoolean,
              value: !0,
              writeOnce: !0,
            },
            eventsDelay: { validator: u.default.isNumber, value: 100 },
            extraCommands: {
              validator: u.default.isObject,
              value: { removeImage: i.removeImageCommand },
              writeOnce: !0,
            },
            extraPlugins: {
              validator: u.default.isString,
              value:
                "ae_uicore,ae_selectionregion,ae_selectionkeystrokes,ae_imagealignment,ae_addimages,ae_placeholder,ae_tabletools,ae_tableresize,ae_autolink,ae_embed,ae_autolist,ae_dragresize,ae_uibridge,ae_richcombobridge,ae_panelmenubuttonbridge,ae_menubridge,ae_menubuttonbridge,ae_buttonbridge,font,colorbutton",
              writeOnce: !0,
            },
            mode: { validator: u.default.isString, value: "simple" },
            nativeEditor: { getter: "_getNativeEditor", readOnly: !0 },
            placeholderClass: {
              validator: u.default.isString,
              value: "ae-placeholder",
              writeOnce: !0,
            },
            removePlugins: {
              validator: u.default.isString,
              value: "contextmenu,toolbar,elementspath,resize,liststyle,link",
              writeOnce: !0,
            },
            selectionKeystrokes: {
              validator: u.default.isArray,
              value: [
                { keys: CKEDITOR.CTRL + 76, selection: "link" },
                {
                  keys: CKEDITOR.CTRL + CKEDITOR.SHIFT + 76,
                  selection: "embed",
                },
              ],
            },
            spritemap: {
              validator: u.default.isString,
              value:
                (window.ALLOYEDITOR_BASEPATH || "alloy-editor/") +
                "assets/icons/icons.svg",
              writeOnce: !0,
            },
            srcNode: { setter: "_toElement", writeOnce: !0 },
            toolbars: {
              validator: "_validateToolbars",
              value: {
                add: {
                  buttons: [
                    "imageFromFile",
                    "embed",
                    "camera",
                    "hline",
                    "table",
                  ],
                  tabIndex: 2,
                },
                styles: { selections: c.default, tabIndex: 1 },
              },
            },
            uiNode: { setter: "_toElement", writeOnce: !0 },
          },
        }
      ),
        CKEDITOR.event.implementOn(p),
        (t.default = p);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.debounce = void 0);
      var r = (r = n(119)) && r.__esModule ? r : { default: r };
      n(120), n(121), n(122), n(123), n(124), n(125), (t.debounce = r.default);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        function r() {
          for (var r = arguments.length, a = Array(r), l = 0; l < r; l++)
            a[l] = arguments[l];
          var u = n || this;
          clearTimeout(i),
            (i = setTimeout(function () {
              e.apply(
                u,
                [].concat(
                  a,
                  (function (e) {
                    if (Array.isArray(e)) {
                      for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                      return n;
                    }
                    return Array.from(e);
                  })(o)
                )
              );
            }, t));
        }
        var o =
            3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [],
          i = void 0;
        return (
          (r.detach = function () {
            clearTimeout(i);
          }),
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (CKEDITOR.tools.debounce = CKEDITOR.tools.debounce || r),
        (t.default = r);
    },
    function (e, t, n) {
      "use strict";
      var r =
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
              },
        o = /^#.*/i,
        i = /^[a-z0-9\u0430-\u044F._-]+@/i,
        a = /^(?:[a-z][a-z0-9+\-.]*):|^\//i;
      function l(e, t) {
        (this._editor = e),
          (this.appendProtocol = !t || !1 !== t.appendProtocol);
      }
      (l.prototype = {
        constructor: l,
        advanceSelection: function (e) {
          e = e || this.getFromSelection();
          var t,
            n = this._editor.getSelection().getRanges()[0];
          e &&
            (n.moveToElementEditEnd(e),
            (t = n.getNextEditableNode()) &&
              !this._editor.element.equals(t.getCommonAncestor(e)) &&
              ((e = (e = /\s/.exec(t.getText())) ? e.index + 1 : 0),
              n.setStart(t, e),
              n.setEnd(t, e))),
            this._editor.getSelection().selectRanges([n]);
        },
        create: function (e, t, n) {
          var r = this._editor.getSelection().getRanges()[0],
            o =
              (r.collapsed &&
                ((o = new CKEDITOR.dom.text(e, this._editor.document)),
                r.insertNode(o),
                r.selectNodeContents(o)),
              (e = this._getCompleteURI(e)),
              CKEDITOR.tools.merge(
                {
                  "data-cke-saved-href": e,
                  href: e,
                  rel: "noopener noreferrer",
                },
                t
              ));
          ((e =
            (o.target ||
              ((t =
                (e = this._editor.config.linkCfg || {}) && e.defaultTarget) &&
                (o.target = t)),
            new CKEDITOR.style({ attributes: o, element: "a" }))).type =
            CKEDITOR.STYLE_INLINE),
            e.applyToRange(r, this._editor),
            n && n.advance ? this.advanceSelection() : r.select();
        },
        getFromSelection: function () {
          var e = this._editor.getSelection(),
            t = e.getSelectedElement();
          if (t && t.is("a")) return t;
          if (t && CKEDITOR.env.ie)
            for (var n = t.getChildren(), r = n.count(), o = 0; o < r; o++) {
              var i = n.getItem(o);
              if (i.is("a")) return i;
            }
          return (t = e.getRanges()[0])
            ? (t.shrink(CKEDITOR.SHRINK_TEXT),
              this._editor.elementPath(t.getCommonAncestor()).contains("a", 1))
            : null;
        },
        remove: function (e, t) {
          var n = this._editor;
          e
            ? (t && t.advance && this.advanceSelection(), e.remove(n))
            : ((t = new CKEDITOR.style({
                alwaysRemoveElement: 1,
                element: "a",
                type: CKEDITOR.STYLE_INLINE,
              })),
              (e = n.getSelection()).selectElement(e.getStartElement()),
              n.removeStyle(t));
        },
        update: function (e, t, n) {
          var o,
            i,
            a,
            l = this;
          (t = t || this.getFromSelection()),
            "string" == typeof e
              ? ((o = l._getCompleteURI(e)),
                t.setAttributes({ "data-cke-saved-href": o, href: o }))
              : "object" === (void 0 === e ? "undefined" : r(e)) &&
                ((i = []),
                (a = {}),
                Object.keys(e).forEach(function (t) {
                  var n;
                  null === e[t]
                    ? ("href" === t && i.push("data-cke-saved-href"), i.push(t))
                    : "href" === t
                    ? ((n = l._getCompleteURI(e[t])),
                      (a["data-cke-saved-href"] = n),
                      (a[t] = n))
                    : (a[t] = e[t]);
                }),
                t.removeAttributes(i),
                t.setAttributes(a)),
            n && n.advance && this.advanceSelection(t);
        },
        _getCompleteURI: function (e) {
          return (
            o.test(e) ||
              (i.test(e)
                ? (e = "mailto:" + e)
                : a.test(e) || (e = this.appendProtocol ? "http://" + e : e)),
            e
          );
        },
      }),
        (CKEDITOR.Link = CKEDITOR.Link || l);
    },
    function (e, t, n) {
      "use strict";
      CKEDITOR.plugins.load = CKEDITOR.tools.override(
        CKEDITOR.plugins.load,
        function (e) {
          return function (t, n, r) {
            e.call(this, t, function (e) {
              n &&
                (Object.keys(e).forEach(function (t) {
                  var n, r;
                  (t = e[t]).requires &&
                    (t.requires = (r =
                      "string" == typeof (r = t.requires)
                        ? r.split(",")
                        : r).filter(function (e) {
                      return "toolbar" !== e;
                    })),
                    (n = t),
                    ["beforeInit", "init", "afterInit"].forEach(function (e) {
                      n[e] &&
                        (n[e] = CKEDITOR.tools.override(n[e], function (t) {
                          var r = { phase: e, plugin: n };
                          return function (e) {
                            (e.__processingPlugin__ = r),
                              t.call(this, e),
                              (e.__processingPlugin__ = null);
                          };
                        }));
                    });
                }),
                n.call(r, e));
            });
          };
        }
      );
    },
    function (e, t, n) {
      "use strict";
      function r() {}
      CKEDITOR.plugins.get("ae_selectionregion") ||
        ((CKEDITOR.SELECTION_TOP_TO_BOTTOM = 0),
        (CKEDITOR.SELECTION_BOTTOM_TO_TOP = 1),
        (CKEDITOR.SELECTION_LEFT_TO_RIGHT = 2),
        (CKEDITOR.SELECTION_RIGHT_TO_LEFT = 3),
        (r.prototype = {
          constructor: r,
          createSelectionFromPoint: function (e, t) {
            this.createSelectionFromRange(e, t, e, t);
          },
          createSelectionFromRange: function (e, t, n, r) {
            var o = void 0,
              i = void 0,
              a = void 0,
              l = void 0,
              u = void 0,
              s = void 0,
              c = void 0;
            "function" == typeof document.caretPositionFromPoint
              ? ((u = document.caretPositionFromPoint(e, t)),
                (o = document.caretPositionFromPoint(n, r)),
                (s = u.offsetNode),
                (i = o.offsetNode),
                (c = u.offset),
                (a = o.offset),
                (l = this.createRange()))
              : "function" == typeof document.caretRangeFromPoint &&
                ((u = document.caretRangeFromPoint(e, t)),
                (o = document.caretRangeFromPoint(n, r)),
                (s = u.startContainer),
                (i = o.startContainer),
                (c = u.startOffset),
                (a = o.startOffset),
                (l = this.createRange())),
              l && document.getSelection
                ? (l.setStart(new CKEDITOR.dom.node(s), c),
                  l.setEnd(new CKEDITOR.dom.node(i), a),
                  this.getSelection().selectRanges([l]))
                : "function" == typeof document.body.createTextRange &&
                  (this.getSelection().unlock(),
                  (l = document.body.createTextRange()).moveToPoint(e, t),
                  (u = l.duplicate()).moveToPoint(n, r),
                  l.setEndPoint("EndToEnd", u),
                  l.select(),
                  this.getSelection().lock());
          },
          getCaretRegion: function () {
            var e = { bottom: 0, left: 0, right: 0, top: 0 },
              t = this.getSelection().createBookmarks();
            return t.length
              ? (((t = t[0].startNode.$).style.display = "inline-block"),
                (e = new CKEDITOR.dom.element(t).getClientRect()),
                t.parentNode.removeChild(t),
                (t = new CKEDITOR.dom.window(window).getScrollPosition()),
                (e.bottom = t.y + e.bottom),
                (e.left = t.x + e.left),
                (e.right = t.x + e.right),
                (e.top = t.y + e.top),
                e)
              : e;
          },
          getSelectionData: function () {
            var e = this.getSelection();
            if (!e.getNative()) return null;
            var t = {
              element: e.getSelectedElement(),
              text: e.getSelectedText(),
            };
            return (t.region = this.getSelectionRegion(e)), t;
          },
          getSelectionRegion: function () {
            var e = this.getClientRectsRegion();
            return (
              (e.direction = this.getSelectionDirection()),
              (e.height = e.bottom - e.top),
              (e.width = e.right - e.left),
              e
            );
          },
          isSelectionEmpty: function () {
            var e = this.getSelection();
            return (
              e.getType() === CKEDITOR.SELECTION_NONE ||
              ((e = e.getRanges()) && 1 === e.length && e[0].collapsed)
            );
          },
          getClientRectsRegion: function () {
            var e = {
              bottom: 0,
              endRect: (e = {
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0,
              }),
              left: 0,
              right: 0,
              top: 0,
              startRect: e,
            };
            if (!(d = this.getSelection().getNative())) return e;
            var t,
              n = 0,
              r = 1 / 0,
              o = -1 / 0,
              i = 1 / 0;
            if (
              0 ===
              (t = d.createRange
                ? d.createRange().getClientRects()
                : 0 < d.rangeCount
                ? d.getRangeAt(0).getClientRects()
                : []).length
            )
              e = this.getCaretRegion();
            else {
              for (var a = 0, l = t.length; a < l; a++) {
                var u = t[a];
                u.left < r && (r = u.left),
                  u.right > o && (o = u.right),
                  u.top < i && (i = u.top),
                  u.bottom > n && (n = u.bottom);
              }
              var s,
                c,
                d = new CKEDITOR.dom.window(window).getScrollPosition();
              (e.bottom = d.y + n),
                (e.left = d.x + r),
                (e.right = d.x + o),
                (e.top = d.y + i),
                t.length &&
                  ((s = t[t.length - 1]),
                  (c = t[0]),
                  (e.endRect = {
                    bottom: d.y + s.bottom,
                    height: s.height,
                    left: d.x + s.left,
                    right: d.x + s.right,
                    top: d.y + s.top,
                    width: s.width,
                  }),
                  (e.startRect = {
                    bottom: d.y + c.bottom,
                    height: c.height,
                    left: d.x + c.left,
                    right: d.x + c.right,
                    top: d.y + c.top,
                    width: c.width,
                  }));
            }
            return e;
          },
          getSelectionDirection: function () {
            var e = CKEDITOR.SELECTION_TOP_TO_BOTTOM,
              t = this.getSelection().getNative();
            if (!t) return e;
            var n = void 0;
            return (
              (n = t.anchorNode) &&
                n.compareDocumentPosition &&
                ((!(n = n.compareDocumentPosition(t.focusNode)) &&
                  t.anchorOffset > t.focusOffset) ||
                  n === Node.DOCUMENT_POSITION_PRECEDING) &&
                (e = CKEDITOR.SELECTION_BOTTOM_TO_TOP),
              e
            );
          },
        }),
        CKEDITOR.plugins.add("ae_selectionregion", {
          init: function (e) {
            var t = void 0,
              n = Object.prototype.hasOwnProperty;
            for (t in r.prototype)
              n.call(r.prototype, t) &&
                void 0 === e[t] &&
                (e[t] = r.prototype[t]);
          },
        }));
    },
    function (e, t, n) {
      "use strict";
      var r = {
        table: 1,
        col: 1,
        colgroup: 1,
        tbody: 1,
        td: 1,
        tfoot: 1,
        th: 1,
        thead: 1,
        tr: 1,
      };
      function o(e) {
        this._editor = e;
      }
      (o.HEADING_BOTH = "Both"),
        (o.HEADING_COL = "Column"),
        (o.HEADING_NONE = "None"),
        (o.HEADING_ROW = "Row"),
        (o.prototype = {
          constructor: o,
          create: function (e) {
            var t = this._editor,
              n = this._createElement("table");
            e = e || {};
            for (
              var r = n.append(this._createElement("tbody")),
                o = e.rows || 1,
                i = e.cols || 1,
                a = 0;
              a < o;
              a++
            )
              for (
                var l = r.append(this._createElement("tr")), u = 0;
                u < i;
                u++
              )
                l.append(this._createElement("td")).appendBogus();
            return (
              this.setAttributes(n, e.attrs),
              this.setHeading(n, e.heading),
              t.insertElement(n),
              (e = new CKEDITOR.dom.element(n.$.rows[0].cells[0])),
              (t = t.createRange()).moveToPosition(
                e,
                CKEDITOR.POSITION_AFTER_START
              ),
              t.select(),
              n
            );
          },
          getFromSelection: function () {
            var e = void 0,
              t = this._editor.getSelection(),
              n = t.getSelectedElement();
            return (
              n && n.is("table")
                ? (e = n)
                : 0 < (n = t.getRanges()).length &&
                  (CKEDITOR.env.webkit && n[0].shrink(CKEDITOR.NODE_ELEMENT),
                  (e = this._editor
                    .elementPath(n[0].getCommonAncestor(!0))
                    .contains("table", 1))),
              e
            );
          },
          isEditable: function (e) {
            return CKEDITOR.env.ie && e.is(r)
              ? e.hasAttribute("contenteditable")
                ? "false" !== e.getAttribute("contenteditable")
                : this.isEditable(e.getParent())
              : !e.isReadOnly();
          },
          getHeading: function (e) {
            if (!(e = e || this.getFromSelection())) return null;
            for (
              var t = null !== e.$.tHead, n = !0, r = 0;
              r < e.$.rows.length;
              r++
            ) {
              var i = e.$.rows[r].cells[0];
              if (i && "th" !== i.nodeName.toLowerCase()) {
                n = !1;
                break;
              }
            }
            return (
              (t = t ? o.HEADING_ROW : o.HEADING_NONE),
              n ? (t === o.HEADING_ROW ? o.HEADING_BOTH : o.HEADING_COL) : t
            );
          },
          remove: function (e) {
            var t,
              n,
              r = this._editor;
            e
              ? e.remove()
              : (e = r.elementPath().contains("table", 1)) &&
                ((t = e.getParent()),
                (n = r.editable()),
                1 !== t.getChildCount() ||
                  t.is("td", "th") ||
                  t.equals(n) ||
                  (e = t),
                r
                  .createRange()
                  .moveToPosition(e, CKEDITOR.POSITION_BEFORE_START),
                e.remove());
          },
          setAttributes: function (e, t) {
            t &&
              Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n]);
              });
          },
          setHeading: function (e, t) {
            var n = void 0,
              r = void 0,
              i = void 0,
              a = (e = e || this.getFromSelection())
                .getElementsByTag("tbody")
                .getItem(0),
              l = this.getHeading(e),
              u = l === o.HEADING_COL || l === o.HEADING_BOTH,
              s = t === o.HEADING_COL || t === o.HEADING_BOTH;
            t = t === o.HEADING_ROW || t === o.HEADING_BOTH;
            if (!e.$.tHead && t) {
              var c = a.getElementsByTag("tr").getItem(0),
                d = c.getChildCount();
              for (n = 0; n < d; n++) {
                var f = c.getChild(n);
                f.type !== CKEDITOR.NODE_ELEMENT ||
                  f.data("cke-bookmark") ||
                  (f.renameNode("th"), f.setAttribute("scope", "col"));
              }
              (i = this._createElement(e.$.createTHead())).append(c.remove());
            }
            if (null !== e.$.tHead && !t) {
              i = this._createElement(e.$.tHead);
              for (var p = a.getFirst(); 0 < i.getChildCount(); ) {
                var h = i.getFirst(),
                  m = h.getChildCount();
                for (n = 0; n < m; n++)
                  (r = h.getChild(n)).type === CKEDITOR.NODE_ELEMENT &&
                    (r.renameNode("td"), r.removeAttribute("scope"));
                h.insertBefore(p);
              }
              i.remove();
            }
            if (
              (l = this.getHeading(e)) !== o.HEADING_COL &&
              l !== o.HEADING_BOTH &&
              s
            )
              for (n = 0; n < e.$.rows.length; n++)
                "th" !== e.$.rows[n].cells[0].nodeName.toLowerCase() &&
                  ((r = new CKEDITOR.dom.element(
                    e.$.rows[n].cells[0]
                  )).renameNode("th"),
                  r.setAttribute("scope", "row"));
            if (u && !s)
              for (n = 0; n < e.$.rows.length; n++) {
                var y = new CKEDITOR.dom.element(e.$.rows[n]);
                "tbody" === y.getParent().getName() &&
                  ((r = new CKEDITOR.dom.element(y.$.cells[0])).renameNode(
                    "td"
                  ),
                  r.removeAttribute("scope"));
              }
          },
          _createElement: function (e) {
            return new CKEDITOR.dom.element(e, this._editor.document);
          },
        }),
        CKEDITOR.on("instanceReady", function (e) {
          var t = [
              o.HEADING_NONE,
              o.HEADING_ROW,
              o.HEADING_COL,
              o.HEADING_BOTH,
            ],
            n = new o(e.editor);
          t.forEach(function (t) {
            e.editor.addCommand("tableHeading" + t, {
              exec: function (e) {
                n.setHeading(null, t);
              },
            });
          });
        }),
        (CKEDITOR.Table = CKEDITOR.Table || o);
    },
    function (e, t, n) {
      "use strict";
      (CKEDITOR.tools.jsonp = function (e, t, n, r) {
        var o = CKEDITOR.tools.getNextNumber(),
          i =
            (((t = t || {}).callback = "CKEDITOR._.jsonpCallbacks[" + o + "]"),
            CKEDITOR._.jsonpCallbacks || (CKEDITOR._.jsonpCallbacks = {}),
            (CKEDITOR._.jsonpCallbacks[o] = function (e) {
              setTimeout(function () {
                a(), n(e);
              });
            }),
            new CKEDITOR.dom.element("script"));
        function a() {
          i && (i.remove(), delete CKEDITOR._.jsonpCallbacks[o], (i = null));
        }
        return (
          i.setAttribute("src", e.output(t)),
          i.on("error", function () {
            a(), r && r();
          }),
          CKEDITOR.document.getBody().append(i),
          { cancel: a, id: o }
        );
      }),
        (CKEDITOR.tools.merge =
          CKEDITOR.tools.merge ||
          function () {
            for (
              var e = {}, t = arguments.length, n = Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            for (var o = 0; o < n.length; ++o) {
              var i,
                a = n[o];
              for (i in a)
                Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
            }
            return e;
          }),
        (CKEDITOR.tools.simulate = function (e, t) {
          var n = document.createEvent("Events");
          n.initEvent(t, !0, !1), e.dispatchEvent(n);
        });
    },
    function (e, t, n) {
      "use strict";
      CKEDITOR.plugins.get("ae_uicore") ||
        CKEDITOR.plugins.add("ae_uicore", {
          init: function (e) {
            var t = [],
              n = this._createAriaElement(e.id),
              r = e.config.uicore ? e.config.uicore.timeout : 50,
              o = CKEDITOR.tools.debounce(function (n) {
                var r;
                (t = []),
                  ("keyup" === n.name &&
                    27 === n.data.$.keyCode &&
                    !e.config.allowEsc) ||
                    ((r = e.getSelectionData()) &&
                      e.fire("editorInteraction", {
                        nativeEvent: n.data.$,
                        selectionData: r,
                      }));
              }, r),
              i = CKEDITOR.tools.debounce(function (e) {
                n.innerHTML = t.join(". ");
              }, r),
              a = CKEDITOR.tools.debounce(function (e) {
                for (
                  var t = document.querySelectorAll(".ae-ui"),
                    n = void 0,
                    r = 0;
                  r < t.length;
                  r++
                )
                  if (t[r].contains(e.data.$.relatedTarget)) {
                    n = !0;
                    break;
                  }
                n || o(e);
              }, r);
            e.on("ariaUpdate", function (e) {
              t.push(e.data.message), i();
            }),
              e.once("contentDom", function () {
                var t = e.editable(),
                  n = t.attachListener(t, "focus", function (e) {
                    n.removeListener(),
                      t.attachListener(t, "keyup", o),
                      t.attachListener(t, "mouseup", o),
                      t.attachListener(t, "mouseleave", a),
                      o(e);
                  });
              }),
              e.on("destroy", function (e) {
                n.parentNode.removeChild(n), o.detach && o.detach();
              });
          },
          _createAriaElement: function (e) {
            var t = document.createElement("div");
            return (
              (t.className = "ae-sr-only"),
              t.setAttribute("aria-live", "polite"),
              t.setAttribute("role", "status"),
              t.setAttribute("id", e + "LiveRegion"),
              document.body.appendChild(t),
              t
            );
          },
        });
    },
    function (e, t, n) {
      "use strict";
      var r = CKEDITOR.env.ie;
      CKEDITOR.plugins.get("ae_addimages") ||
        CKEDITOR.plugins.add("ae_addimages", {
          init: function (e) {
            var t = this;
            e.once("contentDom", function () {
              var n = e.editable();
              n.attachListener(n, "dragenter", t._onDragEnter, t, {
                editor: e,
              }),
                n.attachListener(n, "dragover", t._onDragOver, t, {
                  editor: e,
                }),
                n.attachListener(n, "drop", t._onDragDrop, t, { editor: e }),
                n.attachListener(n, "paste", t._onPaste, t, { editor: e });
            });
          },
          _handleFiles: function (e, t) {
            var n = void 0,
              r = void 0,
              o = [];
            for (r = 0; r < e.length; r++)
              0 === (n = e[r]).type.indexOf("image") && o.push(n);
            if (t.fire("beforeImageAdd", { imageFiles: o }))
              for (r = 0; r < o.length; r++)
                (n = o[r]), this._processFile(n, t);
            return !1;
          },
          _onDragDrop: function (e) {
            var t,
              n = e.data.$,
              r = n.dataTransfer.files;
            0 < r.length &&
              (new CKEDITOR.dom.event(n).preventDefault(),
              (t = e.listenerData.editor),
              e.listenerData.editor.createSelectionFromPoint(
                n.clientX,
                n.clientY
              ),
              this._handleFiles(r, t));
          },
          _onDragEnter: function (e) {
            r && this._preventEvent(e);
          },
          _onDragOver: function (e) {
            r && this._preventEvent(e);
          },
          _onPaste: function (e) {
            var t;
            e.data &&
              e.data.$ &&
              e.data.$.clipboardData &&
              e.data.$.clipboardData.items &&
              0 < e.data.$.clipboardData.items.length &&
              0 ===
                (t = e.data.$.clipboardData.items[0]).type.indexOf("image") &&
              ((t = t.getAsFile()),
              this._processFile(t, e.listenerData.editor));
          },
          _preventEvent: function (e) {
            (e = new CKEDITOR.dom.event(e.data.$)).preventDefault(),
              e.stopPropagation();
          },
          _processFile: function (e, t) {
            var n = new FileReader();
            n.addEventListener("loadend", function () {
              var r = n.result;
              (r = CKEDITOR.dom.element.createFromHtml(
                '<img src="' + r + '">'
              )),
                t.insertElement(r),
                (r = { el: r, file: e });
              t.fire("imageAdd", r);
            }),
              n.readAsDataURL(e);
          },
        });
    },
    function (e, t, n) {
      "use strict";
      var r, o, i, a;
      CKEDITOR.plugins.get("ae_autolink") ||
        (/MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/.test(navigator.userAgent) &&
          document.execCommand("AutoUrlDetect", !1, !1),
        (r = [188, 13, 186, 32]),
        (o = /[^\s]+/gim),
        (i =
          "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$"),
        (a = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/i),
        CKEDITOR.plugins.add("ae_autolink", {
          init: function (e) {
            var t = this;
            e.once("contentDom", function () {
              var n = e.editable();
              n.attachListener(n, "keyup", t._onKeyUp, t, { editor: e });
            }),
              e.on("paste", function (e) {
                var n;
                "paste" === e.data.method &&
                  (-1 < e.data.dataValue.indexOf("<") ||
                  -1 < e.data.dataValue.indexOf("&lt;")
                    ? -1 < e.data.dataValue.indexOf('<u><font color="') &&
                      (e.data.dataValue = e.data.dataValue.replace(
                        /<u><font color="#(.*?)">|<\/font><\/u>/g,
                        ""
                      ))
                    : ((n = t),
                      (e.data.dataValue = e.data.dataValue.replace(
                        RegExp(i, "gim"),
                        function (e) {
                          if (n._isValidURL(e))
                            return n._isValidEmail(e)
                              ? '<a href="mailto:' + e + '">' + e + "</a>"
                              : '<a href="' + e + '">' + e + "</a>";
                        }
                      ))));
              });
          },
          _getLastWord: function (e) {
            if ((e = e.getSelection().getRanges()[0])) {
              var t = e.startOffset,
                n = "";
              if (13 === this._currentKeyCode) {
                var r = e.startContainer.getPrevious(),
                  i = void 0;
                if (r) {
                  for (; !r.getLast; ) r = r.getPrevious();
                  for (i = r.getLast(); i && !i.getText(); )
                    i = i.getPrevious();
                }
                (i && i.$.href) ||
                  ((n = (this._startContainer = i) ? i.getText() : ""),
                  (this._offset = n.length));
              } else
                (this._startContainer = e.startContainer),
                  (n = this._startContainer.getText().substring(0, t - 1)),
                  (this._offset = t - 1);
              return (e = ""), (t = n.match(o)) ? t.pop() : e;
            }
          },
          _isValidEmail: function (e) {
            return a.test(e);
          },
          _isValidURL: function (e) {
            return RegExp(i, "i").test(e);
          },
          _onKeyDown: function (e) {
            var t = e.data.$,
              n = e.listenerData.editor;
            n.editable().removeListener("keydown", this._onKeyDown),
              8 === t.keyCode &&
                (e.cancel(), e.data.preventDefault(), this._removeLink(n)),
              (this._ckLink = null);
          },
          _onKeyUp: function (e) {
            var t = e.data.$;
            (this._currentKeyCode = t.keyCode),
              -1 !== r.indexOf(this._currentKeyCode) &&
                ((t = e.listenerData.editor),
                (e = this._getLastWord(t)),
                this._isValidURL(e) && this._replaceContentByLink(t, e));
          },
          _replaceContentByLink: function (e, t) {
            var n = e.createRange(),
              r = CKEDITOR.dom.element.get(this._startContainer),
              o = this._offset;
            (r =
              (n.setStart(r, o - t.length),
              n.setEnd(r, o),
              n.select(),
              new CKEDITOR.Link(e))).create(t),
              (o = (this._ckLink = r).getFromSelection());
            e.fire("autolinkAdd", o),
              this._subscribeToKeyEvent(e),
              (n = e.getSelection().getRanges()[0]),
              13 === this._currentKeyCode
                ? ((t = n.getNextEditableNode()),
                  n.setStart(t, 0),
                  n.setEnd(t, 0))
                : ((r = n.getEnclosedNode()), n.setStart(r, 0), n.setEnd(r, 0)),
              n.select();
          },
          _removeLink: function (e) {
            var t = e.getSelection().getRanges()[0],
              n = t.startOffset,
              r = this._startContainer.getNext() || this._startContainer;
            (e = e.createRange()).setStart(r, 0),
              e.setEndAfter(r),
              e.select(),
              this._ckLink.remove(),
              t.setEnd(t.startContainer, n),
              t.setStart(t.startContainer, n),
              t.select();
          },
          _subscribeToKeyEvent: function (e) {
            var t = e.editable();
            t.attachListener(
              t,
              "keydown",
              this._onKeyDown,
              this,
              { editor: e },
              1
            );
          },
        }));
    },
    function (e, t, n) {
      "use strict";
      var r;
      CKEDITOR.plugins.get("ae_autolist") ||
        ((r = [
          { regex: /^\*$/, type: "bulletedlist" },
          { regex: /^1\.$/, type: "numberedlist" },
        ]),
        CKEDITOR.plugins.add("ae_autolist", {
          init: function (e) {
            var t = this;
            e.once("contentDom", function () {
              var n = e.editable();
              n.attachListener(n, "keydown", t._onKeyDown, t, { editor: e });
            });
          },
          _checkForBackspaceAndUndo: function (e) {
            var t = e.listenerData.editor,
              n = e.data.$;
            t
              .editable()
              .removeListener("keydown", this._checkForBackspaceAndUndo),
              8 === n.keyCode &&
                (t.execCommand("undo"),
                t.insertHtml(e.listenerData.bullet + "&nbsp;"),
                e.data.preventDefault());
          },
          _getListConfig: function (e) {
            for (
              var t = e.config.autolist || r,
                n = e.getSelection().getRanges()[0],
                o = n.endContainer.getText(),
                i = o.substring(0, n.startOffset),
                a = o.substring(n.startOffset, o.length),
                l = 0,
                u = t.length,
                s = null;
              !s && l < u;

            ) {
              var c = t[l];
              if (c.regex.test(i)) {
                s = { bullet: i, editor: e, text: a, type: c.type };
                break;
              }
              l++;
            }
            return s;
          },
          _createList: function (e) {
            var t = e.editor,
              n =
                (t.getSelection().getRanges()[0].endContainer.setText(e.text),
                t.execCommand(e.type),
                t.editable());
            n.attachListener(
              n,
              "keydown",
              this._checkForBackspaceAndUndo,
              this,
              { editor: t, bullet: e.bullet },
              1
            );
          },
          _onKeyDown: function (e) {
            var t;
            32 === e.data.$.keyCode &&
              (t = this._getListConfig(e.listenerData.editor)) &&
              (e.data.preventDefault(), this._createList(t));
          },
        }));
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        (this.editor = e),
          (this.window = e.window.$),
          (this.document = e.document.$),
          (this.cfg = t || {}),
          this.init();
      }
      function o(e, t) {
        (this.window = e),
          (this.document = t),
          (this.events = {
            mousemove: i(this.mousemove, this),
            keydown: i(this.keydown, this),
            mouseup: i(this.mouseup, this),
          });
      }
      function i(e, t) {
        return e.bind
          ? e.bind(t)
          : function () {
              for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
                r[o] = arguments[o];
              e.apply(t, r);
            };
      }
      function a(e, t, n) {
        (e.style.left = String(t) + "px"), (e.style.top = String(n) + "px");
      }
      function l(e, t) {
        return {
          left: (t = t.getBoundingClientRect()).left + e.pageXOffset,
          top: t.top + e.pageYOffset,
          width: t.width,
          height: t.height,
        };
      }
      var u, s, c, d;
      CKEDITOR.plugins.get("ae_dragresize") ||
        ((u = {
          both: ["tl", "tm", "tr", "lm", "rm", "bl", "bm", "br"],
          height: ["tl", "tm", "tr", "bl", "bm", "br"],
          scale: ["tl", "tr", "bl", "br"],
          width: ["tl", "tr", "lm", "rm", "bl", "br"],
        }),
        (s = {
          bl: function (e, t, n, r) {
            a(e, -3 + t, r.height - 4 + n);
          },
          bm: function (e, t, n, r) {
            a(e, Math.round(r.width / 2) - 3 + t, r.height - 4 + n);
          },
          br: function (e, t, n, r) {
            a(e, r.width - 4 + t, r.height - 4 + n);
          },
          lm: function (e, t, n, r) {
            a(e, -3 + t, Math.round(r.height / 2) - 3 + n);
          },
          tl: function (e, t, n, r) {
            a(e, t - 3, n - 3);
          },
          tm: function (e, t, n, r) {
            a(e, Math.round(r.width / 2) - 3 + t, -3 + n);
          },
          tr: function (e, t, n, r) {
            a(e, r.width - 4 + t, -3 + n);
          },
          rm: function (e, t, n, r) {
            a(e, r.width - 4 + t, Math.round(r.height / 2) - 3 + n);
          },
        }),
        (c = "MozAppearance" in document.documentElement.style),
        (d = "WebkitAppearance" in document.documentElement.style || c) &&
          CKEDITOR.addCss(
            "img::selection{color:rgba(0,0,0,0)}img.ckimgrsz{outline:1px dashed #000}#ckimgrsz{position:absolute;width:0;height:0;cursor:default;z-index:10001}#ckimgrsz span{display:none;position:absolute;top:0;left:0;width:0;height:0;background-size:100% 100%;opacity:.65;outline:1px dashed #000}#ckimgrsz i{position:absolute;display:block;width:5px;height:5px;background:#fff;border:1px solid #000}#ckimgrsz i.active,#ckimgrsz i:hover{background:#000}#ckimgrsz i.br,#ckimgrsz i.tl{cursor:nwse-resize}#ckimgrsz i.bm,#ckimgrsz i.tm{cursor:ns-resize}#ckimgrsz i.bl,#ckimgrsz i.tr{cursor:nesw-resize}#ckimgrsz i.lm,#ckimgrsz i.rm{cursor:ew-resize}body.dragging-br,body.dragging-br *,body.dragging-tl,body.dragging-tl *{cursor:nwse-resize!important}body.dragging-bm,body.dragging-bm *,body.dragging-tm,body.dragging-tm *{cursor:ns-resize!important}body.dragging-bl,body.dragging-bl *,body.dragging-tr,body.dragging-tr *{cursor:nesw-resize!important}body.dragging-lm,body.dragging-lm *,body.dragging-rm,body.dragging-rm *{cursor:ew-resize!important}"
          ),
        CKEDITOR.plugins.add("ae_dragresize", {
          onLoad: function () {},
          init: function (e) {
            d &&
              e.once("contentDom", function (t) {
                !(function (e) {
                  function t(e) {
                    i.isHandle(e.target) && i.initDrag(e);
                  }
                  var n = e.window.$,
                    o = e.document.$,
                    i =
                      (c && o.execCommand("enableObjectResizing", !1, !1),
                      (e.config.imageScaleResize =
                        e.config.imageScaleResize || "both"),
                      new r(e, {
                        imageScaleResize: e.config.imageScaleResize,
                        snapToSize: 7,
                      }));
                  function a() {
                    var t = e.getSelection();
                    t &&
                      (t.getType() !== CKEDITOR.SELECTION_NONE &&
                      t.getStartElement().is("img")
                        ? (n.event && n.event.button && 0 !== n.event.button) ||
                          i.show(t.getStartElement().$)
                        : i.hide());
                  }
                  o.addEventListener("mousedown", t, !1),
                    e.on("selectionChange", a),
                    e.on("getData", function (e) {
                      var t = e.data.dataValue || "";
                      (t = (t = t.replace(
                        /<div id="ckimgrsz"([\s\S]*?)<\/div>/i,
                        ""
                      )).replace(/\b(ckimgrsz)\b/g, "")),
                        (e.data.dataValue = t);
                    }),
                    e.on("beforeUndoImage", function () {
                      i.hide();
                    }),
                    e.on("afterUndoImage", function () {
                      a();
                    }),
                    e.on("blur", function () {
                      i.hide();
                    }),
                    e.on("beforeModeUnload", function t() {
                      e.removeListener("beforeModeUnload", t), i.hide();
                    }),
                    e.on("destroy", function () {
                      var e = o.getElementById("ckimgrsz");
                      e && e.remove(),
                        c && o.execCommand("enableObjectResizing", !1, !0),
                        o.removeEventListener("mousedown", t);
                    });
                  var l = void 0;
                  e.window.on("resize", function () {
                    clearTimeout(l), (l = setTimeout(a, 50));
                  });
                })(e);
              });
          },
        }),
        (r.prototype = {
          init: function () {
            var e,
              t = this,
              n = (this.container = this.document.createElement("div")),
              r =
                ((n.id = "ckimgrsz"),
                (this.preview = this.document.createElement("span")),
                n.appendChild(this.preview),
                (this.handles = {}));
            for (e in (u[this.cfg.imageScaleResize].forEach(function (e) {
              r[e] = t.handles[e] = t.createHandle(e);
            }),
            r))
              Object.prototype.hasOwnProperty.call(r, e) && n.appendChild(r[e]);
          },
          createHandle: function (e) {
            var t = this.document.createElement("i");
            return t.classList.add(e), t;
          },
          isHandle: function (e) {
            var t,
              n = this.handles;
            for (t in n) if (n[t] === e) return !0;
            return !1;
          },
          show: function (e) {
            var t = this.editor.config.uiNode,
              n = t ? t.scrollTop : 0;
            (this.el = e),
              this.cfg.snapToSize &&
                ((this.otherImages = (function (e) {
                  for (var t = e.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = e[r];
                  return n;
                })(this.document.getElementsByTagName("img"))),
                this.otherImages.splice(this.otherImages.indexOf(e), 1)),
              (e = this.box = l(this.window, e));
            a(this.container, e.left, e.top + n),
              (t = t || document.body).appendChild(this.container),
              this.el.classList.add("ckimgrsz"),
              this.showHandles();
          },
          hide: function () {
            for (
              var e = this.document.getElementsByClassName("ckimgrsz"), t = 0;
              t < e.length;
              ++t
            )
              e[t].classList.remove("ckimgrsz");
            this.hideHandles(),
              this.container.parentNode &&
                this.container.parentNode.removeChild(this.container);
          },
          initDrag: function (e) {
            var t, n;
            0 === e.button &&
              (((n = new o((t = this).window, this.document)).onStart =
                function () {
                  t.showPreview(),
                    (t.isDragging = !0),
                    t.editor.getSelection().lock();
                }),
              (n.onDrag = function () {
                t.calculateSize(this), t.updatePreview();
                var e = t.previewBox;
                t.updateHandles(e, e.left, e.top);
              }),
              (n.onRelease = function () {
                (t.isDragging = !1),
                  t.hidePreview(),
                  t.hide(),
                  t.editor.getSelection().unlock(),
                  t.editor.fire("saveSnapshot");
              }),
              (n.onComplete = function () {
                t.resizeComplete(), t.editor.fire("saveSnapshot");
              }),
              n.start(e));
          },
          updateHandles: function (e, t, n) {
            (t = t || 0), (n = n || 0);
            var r,
              o = this.handles;
            for (r in o)
              Object.prototype.hasOwnProperty.call(o, r) && s[r](o[r], t, n, e);
          },
          showHandles: function () {
            var e,
              t = this.handles;
            for (e in (this.updateHandles(this.box), t))
              Object.prototype.hasOwnProperty.call(t, e) &&
                (t[e].style.display = "block");
          },
          hideHandles: function () {
            var e,
              t = this.handles;
            for (e in t)
              Object.prototype.hasOwnProperty.call(t, e) &&
                (t[e].style.display = "none");
          },
          showPreview: function () {
            (this.preview.style.backgroundImage = 'url("' + this.el.src + '")'),
              this.calculateSize(),
              this.updatePreview(),
              (this.preview.style.display = "block");
          },
          updatePreview: function () {
            var e = this.previewBox;
            a(this.preview, e.left, e.top),
              (this.preview.style.width = this.previewBox.width + "px"),
              (this.preview.style.height = this.previewBox.height + "px");
          },
          hidePreview: function () {
            var e = l(this.window, this.preview);
            (this.result = { width: e.width, height: e.height }),
              (this.preview.style.display = "none");
          },
          calculateSize: function (e) {
            var t = (this.previewBox = {
              top: 0,
              left: 0,
              width: this.box.width,
              height: this.box.height,
            });
            if (e) {
              var n = e.target.className,
                r =
                  (~n.indexOf("r") &&
                    (t.width = Math.max(32, this.box.width + e.delta.x)),
                  ~n.indexOf("b") &&
                    (t.height = Math.max(32, this.box.height + e.delta.y)),
                  ~n.indexOf("l") &&
                    (t.width = Math.max(32, this.box.width - e.delta.x)),
                  ~n.indexOf("t") &&
                    (t.height = Math.max(32, this.box.height - e.delta.y)),
                  n.indexOf("m") < 0 &&
                    !e.keys.shift &&
                    ((e = this.box.width / this.box.height),
                    t.width / t.height > e
                      ? (t.height = Math.round(t.width / e))
                      : (t.width = Math.round(t.height * e))),
                  this.cfg.snapToSize);
              if (r)
                for (var o = this.otherImages, i = 0; i < o.length; i++) {
                  var a = l(this.window, o[i]);
                  if (
                    Math.abs(t.width - a.width) <= r &&
                    Math.abs(t.height - a.height) <= r
                  ) {
                    (t.width = a.width), (t.height = a.height);
                    break;
                  }
                }
              ~n.indexOf("l") && (t.left = this.box.width - t.width),
                ~n.indexOf("t") && (t.top = this.box.height - t.height);
            }
          },
          resizeComplete: function () {
            (function (e, t, n) {
              var r = this.editor.config.imageScaleResize;
              "both" === r
                ? (e.setAttribute("width", String(t)),
                  (e.style.width = String(t) + "px"),
                  e.setAttribute("height", String(n)),
                  (e.style.height = String(n) + "px"))
                : "width" === r || "scale" === r
                ? (e.removeAttribute("height"),
                  (e.style.height = "auto"),
                  e.setAttribute("width", String(t)),
                  (e.style.width = String(t) + "px"))
                : "height" === r &&
                  (e.setAttribute("height", String(n)),
                  (e.style.height = String(n) + "px"),
                  e.removeAttribute("width"),
                  (e.style.width = "auto"));
            }).call(this, this.el, this.result.width, this.result.height);
          },
        }),
        (o.prototype = {
          start: function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              (this.target = e.target),
              (this.attr = e.target.className),
              (this.startPos = { x: e.clientX, y: e.clientY }),
              this.update(e),
              (e = this.events),
              this.document.addEventListener("mousemove", e.mousemove, !1),
              this.document.addEventListener("keydown", e.keydown, !1),
              this.document.addEventListener("mouseup", e.mouseup, !1),
              this.document.body.classList.add("dragging-" + this.attr),
              this.onStart && this.onStart();
          },
          update: function (e) {
            (this.currentPos = { x: e.clientX, y: e.clientY }),
              (this.delta = {
                x: e.clientX - this.startPos.x,
                y: e.clientY - this.startPos.y,
              }),
              (this.keys = {
                shift: e.shiftKey,
                ctrl: e.ctrlKey,
                alt: e.altKey,
              });
          },
          mousemove: function (e) {
            this.update(e),
              this.onDrag && this.onDrag(),
              0 === e.which && this.mouseup(e);
          },
          keydown: function (e) {
            27 === e.keyCode && this.release();
          },
          mouseup: function (e) {
            this.update(e),
              this.release(),
              this.onComplete && this.onComplete();
          },
          release: function () {
            this.document.body.classList.remove("dragging-" + this.attr);
            var e = this.events;
            this.document.removeEventListener("mousemove", e.mousemove, !1),
              this.document.removeEventListener("keydown", e.keydown, !1),
              this.document.removeEventListener("mouseup", e.mouseup, !1),
              this.onRelease && this.onRelease();
          },
        }));
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.config.ae_dragresize_ie11_captionedClass,
          n = e.config.ae_dragresize_ie11_alignClasses,
          r = { figure: 1, a: 1, img: 1 };
        return function (i) {
          if (!(i.name in { div: 1, p: 1 })) return !1;
          var a = i.children;
          if (1 !== a.length) return !1;
          if (!((a = a[0]).name in r)) return !1;
          if ("p" == i.name) {
            if (!o(a)) return !1;
          } else if ("figure" == a.name) {
            if (!a.hasClass(t)) return !1;
          } else {
            if (e.enterMode == CKEDITOR.ENTER_P) return !1;
            if (!o(a)) return !1;
          }
          return !(n
            ? !i.hasClass(n[1])
            : "center" !=
              CKEDITOR.tools.parseCssText(i.attributes.style || "", !0)[
                "text-align"
              ]);
        };
      }
      function o(e) {
        return (
          "img" == e.name ||
          ("a" == e.name && 1 == e.children.length && e.getFirst("img"))
        );
      }
      function i(e) {
        return (e = e.widgets.focused) && "image" == e.name ? e : null;
      }
      function a(e) {
        return e.data.hasCaption ? e.element : e.parts.image;
      }
      var l, u, s, c, d;
      CKEDITOR.plugins.get("ae_dragresize_ie11") ||
        ((l = '<img alt="" src="" />'),
        (u = new CKEDITOR.template(
          '<figure class="{captionedClass}">' +
            l +
            "<figcaption>{captionPlaceholder}</figcaption></figure>"
        )),
        (s = { left: 0, center: 1, right: 2 }),
        (c = /^\s*(\d+%)\s*$/i),
        CKEDITOR.plugins.add("ae_dragresize_ie11", {
          requires: "widget",
          onLoad: function () {
            CKEDITOR.addCss(
              ".cke_image_nocaption{line-height:0}.cke_editable.cke_image_ne, .cke_editable.cke_image_ne *{cursor:ne-resize !important}.cke_editable.cke_image_nw, .cke_editable.cke_image_nw *{cursor:nw-resize !important}.cke_editable.cke_image_sw, .cke_editable.cke_image_sw *{cursor:sw-resize !important}.cke_editable.cke_image_se, .cke_editable.cke_image_se *{cursor:se-resize !important}.cke_image_resizer{display:none;position:absolute;width:10px;height:10px;background:#000;outline:1px solid #fff;line-height:0;cursor:se-resize;}.cke_image_resizer_wrapper{position:relative;display:inline-block;line-height:0;}.cke_image_resizer.cke_image_resizer_ne{cursor:ne-resize;left:auto;right:-5px;top:-5px;}.cke_image_resizer.cke_image_resizer_nw{cursor:nw-resize;left:-5px;right:auto;top:-5px;}.cke_image_resizer.cke_image_resizer_se{bottom:-5px;cursor:se-resize;left:auto;right:-5px;}.cke_image_resizer.cke_image_resizer_sw{bottom:-5px;cursor:sw-resize;left:-5px;right:auto;}.cke_widget_wrapper:hover .cke_image_resizer,.cke_image_resizing>.cke_image_resizer{display:block}.cke_widget_wrapper>a{display:inline-block}"
            );
          },
          init: function (e) {
            (n = (t = e).config.ae_dragresize_ie11_alignClasses),
              (i = t.config.ae_dragresize_ie11_captionedClass);
            var t,
              n,
              i,
              u = {
                allowedContent: (function (e) {
                  var t = e.config.ae_dragresize_ie11_alignClasses;
                  e = {
                    div: { match: r(e) },
                    p: { match: r(e) },
                    img: { attributes: "!src,alt,width,height" },
                    figure: {
                      classes: "!" + e.config.ae_dragresize_ie11_captionedClass,
                    },
                    figcaption: !0,
                  };
                  return (
                    t
                      ? ((e.div.classes = t[1]),
                        (e.p.classes = e.div.classes),
                        (e.img.classes = t[0] + "," + t[2]),
                        (e.figure.classes += "," + e.img.classes))
                      : ((e.div.styles = "text-align"),
                        (e.p.styles = "text-align"),
                        (e.img.styles = "float"),
                        (e.figure.styles = "float,display")),
                    e
                  );
                })(t),
                requiredContent: "img[src,alt]",
                features: (function (e) {
                  return {
                    dimension: { requiredContent: "img[width,height]" },
                    align: {
                      requiredContent:
                        "img" +
                        ((e = e.config.ae_dragresize_ie11_alignClasses)
                          ? "(" + e[0] + ")"
                          : "{float}"),
                    },
                    caption: { requiredContent: "figcaption" },
                  };
                })(t),
                styleableElements: "img figure",
                contentTransformations: [["img[width]: sizeToAttribute"]],
                editables: {
                  caption: {
                    selector: "figcaption",
                    allowedContent: "br em strong sub sup u s; a[!href,target]",
                  },
                },
                parts: { image: "img", caption: "figcaption" },
                template: l,
                data: function () {
                  var e = this.features;
                  if (
                    (this.data.hasCaption &&
                      !t.filter.checkFeature(e.caption) &&
                      (this.data.hasCaption = !1),
                    "none" == this.data.align ||
                      t.filter.checkFeature(e.align) ||
                      (this.data.align = "none"),
                    this.shiftState({
                      widget: this,
                      element: this.element,
                      oldData: this.oldData,
                      newData: this.data,
                      deflate: d,
                      inflate: f,
                    }),
                    this.data.link
                      ? this.parts.link ||
                        (this.parts.link = this.parts.image.getParent())
                      : this.parts.link && delete this.parts.link,
                    this.parts.image.setAttributes({
                      src: this.data.src,
                      "data-cke-saved-src": this.data.src,
                      alt: this.data.alt,
                    }),
                    this.oldData &&
                      !this.oldData.hasCaption &&
                      this.data.hasCaption)
                  )
                    for (var n in this.data.classes)
                      Object.prototype.hasOwnProperty.call(
                        this.data.classes,
                        n
                      ) && this.parts.image.removeClass(n);
                  if (t.filter.checkFeature(e.dimension)) {
                    var r,
                      o = (e = this).data,
                      i = { width: o.width, height: o.lock ? null : o.height },
                      a = e.parts.image;
                    for (r in i)
                      i[r] ? a.setAttribute(r, i[r]) : a.removeAttribute(r);
                  }
                  this.oldData = CKEDITOR.tools.extend({}, this.data);
                },
                init: function () {
                  var e,
                    r,
                    o,
                    i,
                    a,
                    l,
                    u,
                    c,
                    d = CKEDITOR.plugins.ae_dragresize_ie11,
                    f = this.parts.image;
                  (l =
                    (((u = {
                      hasCaption: !!this.parts.caption,
                      src: f.getAttribute("src"),
                      alt: f.getAttribute("alt") || "",
                      width: f.getAttribute("width") || "",
                      lock: !this.ready || d.checkHasNaturalRatio(f),
                    }).height = u.lock ? null : f.getAttribute("height") || ""),
                    f.getAscendant("a"))) &&
                    this.wrapper.contains(l) &&
                    (this.parts.link = l),
                    u.align ||
                      ((l = u.hasCaption ? this.element : f),
                      n
                        ? (l.hasClass(n[0])
                            ? (u.align = "left")
                            : l.hasClass(n[2]) && (u.align = "right"),
                          u.align
                            ? l.removeClass(n[s[u.align]])
                            : (u.align = "none"))
                        : ((u.align = l.getStyle("float") || "none"),
                          l.removeStyle("float"))),
                    t.plugins.link &&
                      this.parts.link &&
                      ((u.link = d.getLinkAttributesParser()(
                        t,
                        this.parts.link
                      )),
                      (f = u.link.advanced) &&
                        f.advCSSClasses &&
                        (f.advCSSClasses = CKEDITOR.tools.trim(
                          f.advCSSClasses.replace(/cke_\S+/, "")
                        ))),
                    this.wrapper[(u.hasCaption ? "remove" : "add") + "Class"](
                      "cke_image_nocaption"
                    ),
                    this.setData(u),
                    t.filter.checkFeature(this.features.dimension) &&
                      !0 !== t.config.ae_dragresize_ie11_disableResizer &&
                      ((r = (e = this).editor),
                      (o = r.editable()),
                      (i = r.document),
                      (a = e.resizer = i.createElement("span")),
                      (l = i.createElement("span")),
                      (f = i.createElement("span")),
                      (u = i.createElement("span")),
                      (c = i.createElement("span")),
                      l.addClass("cke_image_resizer"),
                      l.addClass("cke_image_resizer_ne"),
                      f.addClass("cke_image_resizer"),
                      f.addClass("cke_image_resizer_nw"),
                      u.addClass("cke_image_resizer"),
                      u.addClass("cke_image_resizer_se"),
                      c.addClass("cke_image_resizer"),
                      c.addClass("cke_image_resizer_sw"),
                      a.append(l),
                      a.append(f),
                      a.append(u),
                      a.append(c),
                      a.append(new CKEDITOR.dom.text("​", i)),
                      e.inline
                        ? e.wrapper.append(a)
                        : ((f = (l =
                            e.parts.link || e.parts.image).getParent()),
                          (u = i.createElement("span")).addClass(
                            "cke_image_resizer_wrapper"
                          ),
                          u.append(l),
                          u.append(a),
                          e.element.append(u, !0),
                          f.is("span") && f.remove()),
                      a.on("mousedown", function (t) {
                        var n = e.parts.image,
                          l = t.data.$.screenX,
                          u = t.data.$.screenY,
                          s = n.$.clientWidth,
                          c = n.$.clientHeight,
                          d = s / c,
                          f = [],
                          p = ((t = t.data.getTarget()), void 0),
                          h = void 0,
                          m = void 0,
                          y = void 0,
                          b = void 0,
                          g = void 0,
                          v = void 0,
                          _ = void 0,
                          E =
                            (t.hasClass("cke_image_resizer_ne")
                              ? (h = p = 1)
                              : t.hasClass("cke_image_resizer_nw")
                              ? ((p = -1), (h = 1))
                              : t.hasClass("cke_image_resizer_se")
                              ? (h = -(p = 1))
                              : t.hasClass("cke_image_resizer_sw") &&
                                (h = p = -1),
                            "cke_image_" + (~h ? "n" : "s") + (~p ? "e" : "w"));
                        function w(e, t, n) {
                          var r = CKEDITOR.document,
                            o = [];
                          if (
                            (i.equals(r) || o.push(r.on(e, t)),
                            o.push(i.on(e, t)),
                            n)
                          )
                            for (var a = o.length; a--; ) n.push(o.pop());
                        }
                        function O() {
                          (v = s + p * m), (g = Math.round(v / d));
                        }
                        function k() {
                          (g = c + h * y), (v = Math.round(g * d));
                        }
                        r.fire("saveSnapshot"),
                          w(
                            "mousemove",
                            function (t) {
                              (b = t.data.$),
                                (m = b.screenX - l),
                                (y = u - b.screenY),
                                (1 == p ? (m <= 0 ? k : O) : m <= 0 ? O : k)(),
                                (_ =
                                  15 <= v &&
                                  15 <= g &&
                                  ((n.$.style.width = v + "px"),
                                  (n.$.style.height = e.data.lock
                                    ? "auto"
                                    : g + "px"),
                                  !0));
                            },
                            f
                          ),
                          w(
                            "mouseup",
                            function () {
                              for (var t = void 0; (t = f.pop()); )
                                t.removeListener();
                              o.removeClass(E),
                                a.removeClass("cke_image_resizing"),
                                _ &&
                                  (e.setData({
                                    height: e.data.lock ? null : g,
                                    width: v,
                                  }),
                                  r.fire("saveSnapshot")),
                                (_ = !1);
                            },
                            f
                          ),
                          o.addClass(E),
                          a.addClass("cke_image_resizing");
                      })),
                    (c = this.dragHandlerContainer.$.style).setAttribute(
                      "backgroundColor",
                      "rgba(255, 255, 255, 1"
                    ),
                    c.setAttribute("opacity", "1"),
                    (this.shiftState = d.stateShifter(this.editor)),
                    this.on("contextMenu", function (e) {
                      (e.data.image = CKEDITOR.TRISTATE_OFF),
                        (this.parts.link || this.wrapper.getAscendant("a")) &&
                          (e.data.link = e.data.unlink = CKEDITOR.TRISTATE_OFF);
                    });
                },
                addClass: function (e) {
                  a(this).addClass(e);
                },
                hasClass: function (e) {
                  return a(this).hasClass(e);
                },
                removeClass: function (e) {
                  a(this).removeClass(e);
                },
                getClasses: (function () {
                  var e = new RegExp("^(" + [].concat(i, n).join("|") + ")$");
                  return function () {
                    var t,
                      n = this.repository.parseElementClasses(
                        a(this).getAttribute("class")
                      );
                    for (t in n) e.test(t) && delete n[t];
                    return n;
                  };
                })(),
                upcast: (function (e) {
                  var t = r(e),
                    n = e.config.ae_dragresize_ie11_captionedClass;
                  return function (e, r) {
                    var i,
                      a,
                      l = { width: 1, height: 1 },
                      u = e.name,
                      s = void 0;
                    if (
                      !e.attributes["data-cke-realelement"] &&
                      (t(e)
                        ? ("div" == u &&
                            (i = e.getFirst("figure")) &&
                            (e.replaceWith(i), (e = i)),
                          (r.align = "center"),
                          (s =
                            e.getFirst("img") ||
                            e.getFirst("a").getFirst("img")))
                        : "figure" == u && e.hasClass(n)
                        ? (s =
                            e.getFirst("img") ||
                            e.getFirst("a").getFirst("img"))
                        : o(e) && (s = "a" == e.name ? e.children[0] : e),
                      s)
                    ) {
                      for (var d in l)
                        !Object.prototype.hasOwnProperty.call(l, d) ||
                          ((a = s.attributes[d]) &&
                            a.match(c) &&
                            delete s.attributes[d]);
                      return e;
                    }
                  };
                })(t),
                downcast: (function (e) {
                  var t = e.config.ae_dragresize_ie11_alignClasses;
                  return function (e) {
                    var n,
                      r = "a" == e.name ? e.getFirst() : e,
                      o = r.attributes,
                      i = this.data.align;
                    return (
                      this.inline ||
                        ((n = e.getFirst("span")) &&
                          n.replaceWith(n.getFirst({ img: 1, a: 1 }))),
                      i &&
                        "none" != i &&
                        ((n = CKEDITOR.tools.parseCssText(o.style || "")),
                        "center" == i && "figure" == e.name
                          ? (e = e.wrapWith(
                              new CKEDITOR.htmlParser.element(
                                "div",
                                t
                                  ? { class: t[1] }
                                  : { style: "text-align:center" }
                              )
                            ))
                          : i in { left: 1, right: 1 } &&
                            (t ? r.addClass(t[s[i]]) : (n.float = i)),
                        t ||
                          CKEDITOR.tools.isEmpty(n) ||
                          (o.style = CKEDITOR.tools.writeCssText(n) + ";")),
                      e
                    );
                  };
                })(t),
                getLabel: function () {
                  var e = (this.data.alt || "") + " " + this.pathName;
                  return this.editor.lang.widget.label.replace(/%1/, e);
                },
              };
            function d() {
              this.deflated ||
                (t.widgets.focused == this.widget && (this.focused = !0),
                t.widgets.destroy(this.widget),
                (this.deflated = !0));
            }
            function f() {
              var e = t.editable(),
                r = t.document;
              if (this.deflated)
                (this.widget = t.widgets.initOn(
                  this.element,
                  "image",
                  this.widget.data
                )),
                  this.widget.inline &&
                    !new CKEDITOR.dom.elementPath(this.widget.wrapper, e)
                      .block &&
                    ((e = r.createElement(
                      t.activeEnterMode == CKEDITOR.ENTER_P ? "p" : "div"
                    )).replace(this.widget.wrapper),
                    this.widget.wrapper.move(e)),
                  this.focused && (this.widget.focus(), delete this.focused),
                  delete this.deflated;
              else {
                r = this.widget;
                var o = n,
                  i = r.wrapper;
                (e = r.data.align), (r = r.data.hasCaption);
                if (o) {
                  for (var a = 3; a--; ) i.removeClass(o[a]);
                  "center" == e
                    ? r && i.addClass(o[1])
                    : "none" != e && i.addClass(o[s[e]]);
                } else {
                  var l, u;
                  "center" == e
                    ? (r
                        ? i.setStyle("text-align", "center")
                        : i.removeStyle("text-align"),
                      i.removeStyle("float"))
                    : ("none" == e
                        ? i.removeStyle("float")
                        : i.setStyle("float", e),
                      i.removeStyle("text-align")),
                    (e = (r = i.$.querySelector("img")).getAttribute(
                      "style"
                    )) &&
                      ((l = ""),
                      (u = /(height:.+?;)/.exec(e)) && (l += u[0]),
                      (u = /(width:.+?;)/.exec(e)) && (l += u[0]),
                      r.setAttribute("style", l));
                }
              }
            }
            e.widgets.add("image", u),
              e.on("selectionChange", function (t) {
                var n,
                  r,
                  o = e.getSelection();
                o &&
                  (o = o.getSelectedElement()) &&
                  (n = o.findOne("img")) &&
                  ((o = o.getClientRect()),
                  (r = new CKEDITOR.dom.window(window).getScrollPosition()),
                  (o.left -= r.x),
                  (o.top += r.y),
                  (o.direction = CKEDITOR.SELECTION_BOTTOM_TO_TOP),
                  e.fire("editorInteraction", {
                    nativeEvent: {},
                    selectionData: { element: n, region: o },
                  }));
              });
          },
          afterInit: function (e) {
            var t,
              n,
              r,
              o,
              a = { left: 1, right: 1, center: 1, block: 1 },
              l =
                ((t = e),
                (n = []),
                (r = void 0),
                function (e) {
                  var o = t.getCommand("justify" + e);
                  o &&
                    (n.push(function () {
                      o.refresh(t, t.elementPath());
                    }),
                    e in { right: 1, left: 1, center: 1 } &&
                      o.on("exec", function (r) {
                        var o = i(t);
                        if (o) {
                          o.data.align === e
                            ? (d(o, e), delete o.data.align)
                            : o.setData("align", e);
                          for (var a = n.length; a--; ) n[a]();
                          r.cancel();
                        }
                      }),
                    o.on("refresh", function (n) {
                      var o = i(t);
                      o &&
                        ((r =
                          void 0 === r
                            ? t.filter.checkFeature(
                                t.widgets.registered.image.features.align
                              )
                            : r)
                          ? this.setState(
                              o.data.align == e
                                ? CKEDITOR.TRISTATE_ON
                                : e in { right: 1, left: 1, center: 1 }
                                ? CKEDITOR.TRISTATE_OFF
                                : CKEDITOR.TRISTATE_DISABLED
                            )
                          : this.setState(CKEDITOR.TRISTATE_DISABLED),
                        n.cancel());
                    }));
                });
            for (o in a) Object.prototype.hasOwnProperty.call(a, o) && l(o);
          },
        }),
        (CKEDITOR.plugins.ae_dragresize_ie11 = {
          stateShifter: function (e) {
            var t = e.document,
              n = e.config.ae_dragresize_ie11_alignClasses,
              r = e.config.ae_dragresize_ie11_captionedClass,
              o = e.editable(),
              i = ["hasCaption", "align", "link"],
              a = {
                align: function (t, r, o) {
                  var i,
                    a = t.element;
                  t.changed.align ||
                  ("auto" === a.$.style.marginLeft &&
                    "auto" === a.$.style.marginRight)
                    ? t.newData.hasCaption ||
                      (("center" == o ||
                        ("auto" === a.$.style.marginLeft &&
                          "auto" === a.$.style.marginRight)) &&
                        (t.deflate(), (t.element = l(e, a))),
                      t.changed.hasCaption ||
                        "center" != r ||
                        "center" == o ||
                        (t.deflate(),
                        (t.element =
                          ((i = (r = a).findOne("a,img")).replace(r), i))))
                    : "center" == o &&
                      t.changed.hasCaption &&
                      !t.newData.hasCaption &&
                      (t.deflate(), (t.element = l(e, a))),
                    !n &&
                      a.is("figure") &&
                      ("center" == o
                        ? a.setStyle("display", "inline-block")
                        : a.removeStyle("display"));
                },
                hasCaption: function (n, o, i) {
                  var a;
                  n.changed.hasCaption &&
                    ((a = void 0),
                    (a = n.element.is({ img: 1, a: 1 })
                      ? n.element
                      : n.element.findOne("a,img")),
                    n.deflate(),
                    i
                      ? (s(
                          (i = CKEDITOR.dom.element.createFromHtml(
                            u.output({
                              captionedClass: r,
                              captionPlaceholder:
                                e.lang.ae_dragresize_ie11.captionPlaceholder,
                            }),
                            t
                          )),
                          n.element
                        ),
                        a.replace(i.findOne("img")),
                        (n.element = i))
                      : (a.replace(n.element), (n.element = a)));
                },
                link: function (n, r, o) {
                  var i, a, l, u;
                  n.changed.link &&
                    ((u = n.element.is("img")
                      ? n.element
                      : n.element.findOne("img")),
                    (i = n.element.is("a")
                      ? n.element
                      : n.element.findOne("a")),
                    (l = void 0),
                    (a =
                      (n.element.is("a") && !o) ||
                      (n.element.is("img") && o)) && n.deflate(),
                    o
                      ? (r ||
                          (l = (function (e, n) {
                            return (
                              (n = t.createElement("a", {
                                attributes: { href: n.url },
                              })).replace(e),
                              e.move(n),
                              n
                            );
                          })(u, n.newData.link)),
                        (r =
                          CKEDITOR.plugins.ae_dragresize_ie11.getLinkAttributesGetter()(
                            e,
                            o
                          )),
                        CKEDITOR.tools.isEmpty(r.set) ||
                          (l || i).setAttributes(r.set),
                        r.removed.length &&
                          (l || i).removeAttributes(r.removed))
                      : ((o = (u = i).findOne("img")).replace(u), (l = o)),
                    a && (n.element = l));
                },
              };
            function l(e, r) {
              var o = {};
              return (
                s(
                  (e =
                    (n
                      ? (o.attributes = { class: n[1] })
                      : (o.styles = { "text-align": "center" }),
                    t.createElement(
                      e.activeEnterMode == CKEDITOR.ENTER_P ? "p" : "div",
                      o
                    ))),
                  r
                ),
                r.move(e),
                e
              );
            }
            function s(t, n) {
              var r;
              n.getParent()
                ? ((r = e.createRange()).moveToPosition(
                    n,
                    CKEDITOR.POSITION_BEFORE_START
                  ),
                  n.remove(),
                  o.insertElementIntoRange(t, r))
                : t.replace(n);
            }
            return function (e) {
              var t = void 0,
                n = void 0;
              for (e.changed = {}, n = 0; n < i.length; n++)
                e.changed[(t = i[n])] =
                  !!e.oldData && e.oldData[t] !== e.newData[t];
              for (n = 0; n < i.length; n++)
                a[(t = i[n])](e, e.oldData ? e.oldData[t] : null, e.newData[t]);
              e.inflate();
            };
          },
          checkHasNaturalRatio: function (e) {
            var t = e.$;
            e = this.getNatural(e);
            return (
              Math.round((t.clientWidth / e.width) * e.height) ==
                t.clientHeight ||
              Math.round((t.clientHeight / e.height) * e.width) == t.clientWidth
            );
          },
          getNatural: function (e) {
            var t;
            return e.$.naturalWidth
              ? { width: e.$.naturalWidth, height: e.$.naturalHeight }
              : (((t = new Image()).src = e.getAttribute("src")),
                { width: t.width, height: t.height });
          },
          getLinkAttributesGetter: function () {
            return CKEDITOR.plugins.link.getLinkAttributes;
          },
          getLinkAttributesParser: function () {
            return CKEDITOR.plugins.link.parseLinkAttributes;
          },
        }),
        (d = function (e, t) {
          "left" === t || "right" === t
            ? e.wrapper.removeStyle("float")
            : "center" === t &&
              (e.editor.execCommand("justifyleft"),
              e.editor.execCommand("justifyleft"));
        })),
        (CKEDITOR.config.ae_dragresize_ie11_captionedClass = "image");
    },
    function (e, t, n) {
      "use strict";
      var r,
        o,
        i = n(132);
      CKEDITOR.plugins.get("ae_embed") ||
        ((r = /^https?/),
        (o = /<a href=/),
        (CKEDITOR.DEFAULT_AE_EMBED_URL_TPL =
          "http://alloy.iframe.ly/api/oembed?url={url}&callback={callback}"),
        (CKEDITOR.DEFAULT_AE_EMBED_WIDGET_TPL =
          '<div data-ae-embed-url="{url}"></div>'),
        (CKEDITOR.DEFAULT_AE_EMBED_DEFAULT_LINK_TPL =
          '<a href="{url}">{url}</a>'),
        CKEDITOR.plugins.add("ae_embed", {
          requires: "widget",
          init: function (e) {
            function t(e, t) {
              if ("div" === e.name && e.attributes["data-ae-embed-url"])
                return (t.url = e.attributes["data-ae-embed-url"]), !0;
            }
            var n = new CKEDITOR.template(
                e.config.embedUrlTemplate || CKEDITOR.DEFAULT_AE_EMBED_URL_TPL
              ),
              a = new CKEDITOR.template(
                e.config.embedWidgetTpl || CKEDITOR.DEFAULT_AE_EMBED_WIDGET_TPL
              ),
              l = new CKEDITOR.template(
                e.config.embedLinkDefaultTpl ||
                  CKEDITOR.DEFAULT_AE_EMBED_DEFAULT_LINK_TPL
              );
            e.addCommand("embedUrl", {
              exec: function (e, t) {
                e.insertHtml(a.output({ url: t.url }));
              },
            }),
              e.widgets.add("ae_embed", {
                mask: !0,
                requiredContent: "div[data-ae-embed-url]",
                data: function (e) {
                  var t = this,
                    r = e.data.url;
                  r &&
                    CKEDITOR.tools.jsonp(
                      n,
                      { url: encodeURIComponent(r) },
                      function (e) {
                        !e.html || o.test(e.html)
                          ? t.createATag(r)
                          : t.element.setHtml(e.html);
                      },
                      function (e) {
                        t.createATag(r);
                      }
                    );
                },
                createATag: function (e) {
                  this.editor.execCommand("undo"),
                    (e = l.output({ url: e })),
                    this.editor.insertHtml(e),
                    this.editor.fire("actionPerformed", this);
                },
                upcast: function (n, r) {
                  return (e.config.embedWidgetUpcastFn || t)(n, r);
                },
              }),
              e.once("contentDom", function () {
                e.on(
                  "paste",
                  function (t) {
                    var n = t.data.dataValue;
                    r.test(n) &&
                      (t.stop(),
                      e.execCommand("embedUrl", { url: t.data.dataValue }));
                  },
                  null,
                  null,
                  i.HIGH_PRIORITY
                );
              }),
              e.on("selectionChange", function (t) {
                var n,
                  r,
                  o = e.getSelection();
                o &&
                  (o = o.getSelectedElement()) &&
                  (n = o.findOne('[data-widget="ae_embed"]')) &&
                  ((o = o.getClientRect()),
                  (r = new CKEDITOR.dom.window(window).getScrollPosition()),
                  (o.left -= r.x),
                  (o.top += r.y),
                  (o.direction = CKEDITOR.SELECTION_BOTTOM_TO_TOP),
                  e.fire("editorInteraction", {
                    nativeEvent: {},
                    selectionData: { element: n, region: o },
                  }));
              }),
              e.filter.addElementCallback(function (e) {
                if ("data-ae-embed-url" in e.attributes)
                  return CKEDITOR.FILTER_SKIP_TREE;
              });
          },
        }));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DEFAULT_PRIORITY = 10),
        (t.HIGH_PRIORITY = 5);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o,
        i,
        a,
        l,
        u,
        s,
        c,
        d,
        f,
        p,
        h = (n = n(134)) && n.__esModule ? n : { default: n };
      CKEDITOR.plugins.get("embedurl") ||
        ((r = /^https?/),
        (CKEDITOR.DEFAULT_LFR_EMBED_WIDGET_TPL =
          '<div data-embed-url="{url}" class="embed-responsive embed-responsive-16by9">{content}<div class="embed-help-message">{helpMessageIcon}<span> {helpMessage}</span></div></div><br>'),
        (i = [
          (o = { CENTER: "center", LEFT: "left", RIGHT: "right" }).CENTER,
          o.LEFT,
          o.RIGHT,
        ]),
        (a = [
          { name: "display", value: "block" },
          { name: "margin-left", value: "auto" },
          { name: "margin-right", value: "auto" },
        ]),
        (l = function (e) {
          var t = e.getStyle("float");
          return (t =
            t && "inherit" !== t && "none" !== t ? t : e.getAttribute("align"))
            ? t
            : a.every(function (t) {
                var n = e.getStyle(t.name) === t.value;
                return !n && t.vendorPrefixes
                  ? t.vendorPrefixes.some(function (n) {
                      return e.getStyle(n + t.name) === t.value;
                    })
                  : n;
              })
            ? o.CENTER
            : null;
        }),
        (u = function (e, t) {
          t === o.LEFT || t === o.RIGHT
            ? (e.removeStyle("float"), t === l(e) && e.removeAttribute("align"))
            : t === o.CENTER &&
              a.forEach(function (t) {
                e.removeStyle(t.name),
                  t.vendorPrefixes &&
                    t.vendorPrefixes.forEach(function (n) {
                      return e.removeStyle(n + t.name);
                    });
              });
        }),
        (s = function (e, t) {
          u(e, l(e)),
            t === o.LEFT || t === o.RIGHT
              ? e.setStyle("float", t)
              : t === o.CENTER &&
                a.forEach(function (t) {
                  e.setStyle(t.name, t.value),
                    t.vendorPrefixes &&
                      t.vendorPrefixes.forEach(function (n) {
                        return e.setStyle(n + t.name, t.value);
                      });
                });
        }),
        (c = function (e) {
          setTimeout(function () {
            var t,
              n,
              r,
              o,
              i = e.getSelection();
            i &&
              (t = i.root.find("[data-cke-widget-wrapper]")) &&
              0 < (t = t.$).length &&
              ((n = (t = new CKEDITOR.dom.element(t[t.length - 1])).findOne(
                "img"
              )),
              (r = t.findOne('[data-widget="embedurl"]')),
              n &&
                r &&
                ((o = e.createRange()).setStart(r, 0),
                o.setEnd(n, 1),
                i.selectRanges([o]),
                i.selectElement(t)));
          }, 0);
        }),
        (p = f = d = null),
        CKEDITOR.plugins.add("embedurl", {
          requires: "widget",
          init: function (e) {
            function t(e, t) {
              return i.output({
                content: t,
                helpMessage: AlloyEditor.Strings.videoPlaybackDisabled,
                helpMessageIcon: Liferay.Util.getLexiconIconTpl("info-circle"),
                url: e,
              });
            }
            function n(e, n) {
              var r,
                o = !1;
              return (
                "div" === e.name && e.attributes["data-embed-url"]
                  ? ((n.url = e.attributes["data-embed-url"]), (o = !0))
                  : "div" === e.name &&
                    e.attributes["data-embed-id"] &&
                    ((r = e.children[0]),
                    (n.url = r.attributes.src),
                    delete e.attributes.style,
                    (r = t(n.url, e.getOuterHtml())),
                    ((o = new CKEDITOR.htmlParser.fragment.fromHtml(r)
                      .children[0]).attributes["data-styles"] =
                      e.attributes["data-styles"]),
                    o.removeClass("embed-responsive"),
                    o.removeClass("embed-responsive-16by9"),
                    e.replaceWith(o)),
                o
              );
            }
            function o(t) {
              e.fire("error", t),
                setTimeout(function () {
                  e.getSelection().removeAllRanges(), e.focus(), p.hide();
                }, 0);
            }
            var i = new CKEDITOR.template(
                e.config.embedWidgetTpl || CKEDITOR.DEFAULT_LFR_EMBED_WIDGET_TPL
              ),
              a = (a = e.config.embedProviders || []).map(function (e) {
                return {
                  id: e.id,
                  tpl: new CKEDITOR.template(
                    '<div data-embed-id="{embedId}">' + e.tpl + "</div>"
                  ),
                  type: e.type,
                  urlSchemes: e.urlSchemes.map(function (e) {
                    return new RegExp(e);
                  }),
                };
              }),
              u =
                (e.addCommand("embedUrl", {
                  exec: function (e, n) {
                    var i = n.type,
                      l = n.url,
                      u = void 0;
                    r.test(l)
                      ? a
                          .filter(function (e) {
                            return !i || e.type === i;
                          })
                          .some(function (e) {
                            var t,
                              n = e.urlSchemes.find(function (e) {
                                return e.test(l);
                              });
                            return (
                              n &&
                                ((t = n.exec(l)[1]),
                                (u = e.tpl.output({ embedId: t }))),
                              n
                            );
                          })
                        ? ((e._selectEmbedWidget = l),
                          (n = t(l, u)),
                          e.insertHtml(n))
                        : o(AlloyEditor.Strings.platformNotSupported)
                      : o(AlloyEditor.Strings.enterValidUrl);
                  },
                }),
                e.widgets.add("embedurl", {
                  draggable: !1,
                  mask: !0,
                  requiredContent: "div[data-embed-url]",
                  data: function (t) {
                    var n,
                      r = null,
                      o = this.element.getAttribute("data-styles");
                    if (o)
                      try {
                        r = JSON.parse(o);
                      } catch (t) {
                        r = null;
                      }
                    r ||
                      ((o = this.wrapper.findOne("iframe")),
                      (n = this.wrapper.$.getBoundingClientRect()),
                      (r = {
                        width:
                          ((o = o.getAttribute("width")) >= n.width
                            ? 100
                            : Math.round((o / n.width) * 100)) + "%",
                      })),
                      this.wrapper.setAttribute(
                        "style",
                        CKEDITOR.tools.writeCssText(r)
                      ),
                      e._selectEmbedWidget === t.data.url && c(e);
                  },
                  downcast: function (e) {
                    var t = e.children[0];
                    return (
                      (t.attributes.class =
                        "embed-responsive embed-responsive-16by9"),
                      (t.attributes["data-styles"] = JSON.stringify(
                        CKEDITOR.tools.parseCssText(e.parent.attributes.style)
                      )),
                      (t.attributes.style = e.parent.attributes.style),
                      t
                    );
                  },
                  upcast: function (t, r) {
                    return (e.config.embedWidgetUpcastFn || n)(t, r);
                  },
                }),
                window.addEventListener(
                  "resize",
                  function () {
                    p.hide(), c(e);
                  },
                  !1
                ),
                e.on("selectionChange", function (t) {
                  var n,
                    r,
                    o,
                    i = e.getSelection();
                  i &&
                    ((i = i.getSelectedElement())
                      ? ((n = i.findOne('[data-widget="embedurl"]')) &&
                          ((o = new CKEDITOR.dom.window(
                            window
                          ).getScrollPosition()),
                          ((r = i.getClientRect()).direction =
                            CKEDITOR.SELECTION_BOTTOM_TO_TOP),
                          (r.left -= o.x),
                          (r.top += o.y),
                          e.fire("editorInteraction", {
                            nativeEvent: {},
                            selectionData: { element: n, region: r },
                          })),
                        (o = i.findOne("img.cke_widget_mask")) && p.show(o.$))
                      : p.hide());
                }),
                e.on("destroy", function () {
                  var e = document.getElementById("ckimgrsz");
                  e && e.remove(), document.removeEventListener("mousedown", u);
                }),
                e.on("blur", function () {
                  p.hide();
                }),
                e.filter.addElementCallback(function (e) {
                  if ("data-embed-url" in e.attributes)
                    return CKEDITOR.FILTER_SKIP_TREE;
                }),
                function (t) {
                  (n = { alignment: null, element: null }),
                    (r =
                      (r = (r = e).getSelection()) && r.getSelectedElement()) &&
                      r.getAttribute("data-cke-widget-wrapper") &&
                      ((n.alignment = l(r)), (n.element = r));
                  var n,
                    r = n;
                  (d = r.alignment),
                    (f = r.element),
                    p.isHandle(t.target) && p.initDrag(t);
                });
            (p = new h.default(e, {
              onComplete: function (t, n, r) {
                var o;
                (t = t.parentElement) &&
                  0 < n &&
                  0 < r &&
                  ((o =
                    n >= (o = t.getBoundingClientRect()).width
                      ? 100
                      : Math.floor((n / o.width) * 100)),
                  t.setAttribute("style", "width:" + o + "%;"),
                  (o = t.querySelector('[data-widget="embedurl"]')) &&
                    (((t =
                      JSON.parse(o.getAttribute("data-styles")) || {}).width =
                      n + "px"),
                    (t.height = r + "px"),
                    o.setAttribute("data-styles", JSON.stringify(t)),
                    (t = o.querySelector("iframe")) &&
                      (t.setAttribute("width", n),
                      t.setAttribute("height", r)))),
                  d && f && s(f, d),
                  c(e);
              },
            })),
              document.addEventListener("mousedown", u, !1);
          },
          afterInit: function (e) {
            i.forEach(function (t) {
              var n = e.getCommand("justify" + t);
              n &&
                (n.on("exec", function (n) {
                  var r,
                    o,
                    a = e.getSelection().getSelectedElement();
                  a &&
                    a.getAttribute("data-cke-widget-wrapper") &&
                    a.findOne('[data-widget="embedurl"] [data-embed-id]') &&
                    ((l(a) === t ? u : s)(a, t),
                    (d = l((f = a))),
                    (r = a.findOne("img")) && p.show(r.$),
                    n.cancel(),
                    (o = new CKEDITOR.dom.elementPath(a)),
                    i.forEach(function (t) {
                      (t = e.getCommand("justify" + t)) && t.refresh(e, o);
                    }));
                }),
                n.on("refresh", function (e) {
                  var n = e.data.path.lastElement;
                  n &&
                    n.getAttribute("data-cke-widget-wrapper") &&
                    n.findOne("[data-widget] [data-embed-id]") &&
                    ((n = l(n)),
                    e.sender.setState(
                      n === t ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF
                    ),
                    e.cancel());
                }));
            });
          },
        })),
        (t.default = CKEDITOR.plugins.get("embedurl"));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Resizer = void 0);
      var r = (n = n(135)) && n.__esModule ? n : { default: n };
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e, t) {
        return {
          height: (t = t.getBoundingClientRect()).height,
          left: t.left + e.pageXOffset,
          top: t.top + e.pageYOffset,
          width: t.width,
        };
      }
      var a = ["tl", "tr", "bl", "br"],
        l = {
          bl: function (e, t, n, r) {
            u(e, -3 + t, r.height - 4 + n);
          },
          br: function (e, t, n, r) {
            u(e, r.width - 4 + t, r.height - 4 + n);
          },
          rm: function (e, t, n, r) {
            u(e, r.width - 4 + t, Math.round(r.height / 2) - 3 + n);
          },
          tl: function (e, t, n, r) {
            u(e, t - 3, n - 3);
          },
          tr: function (e, t, n, r) {
            u(e, r.width - 4 + t, -3 + n);
          },
        },
        u = function (e, t, n) {
          (e.style.left = t + "px"), (e.style.top = n + "px");
        };
      (function (e, t, n) {
        t && o(e.prototype, t), n && o(e, n);
      })(s, [
        {
          key: "init",
          value: function () {
            var e = this;
            (this.container = this.document.createElement("div")),
              (this.container.id = "ckimgrsz"),
              (this.preview = this.document.createElement("span")),
              this.container.appendChild(this.preview),
              (this.handles = {}),
              a.forEach(function (t) {
                e.handles[t] = e.createHandle(t);
              });
            for (var t = Object.keys(this.handles), n = 0; n < t.length; n++)
              this.container.appendChild(this.handles[t[n]]);
          },
        },
        {
          key: "createHandle",
          value: function (e) {
            var t = this.document.createElement("i");
            return t.classList.add(e), t;
          },
        },
        {
          key: "isHandle",
          value: function (e) {
            for (
              var t = Object.keys(this.handles), n = !1, r = 0;
              r < t.length;
              r++
            )
              this.handles[t[r]] === e && (n = !0);
            return n;
          },
        },
        {
          key: "show",
          value: function (e) {
            var t = this.editor.config.uiNode || document.body;
            (this.el = e),
              (this.box = i(this.window, this.el)),
              u(this.container, this.box.left, this.box.top + t.scrollTop),
              t.appendChild(this.container),
              this.el.classList.add("ckimgrsz"),
              this.showHandles();
          },
        },
        {
          key: "hide",
          value: function () {
            for (
              var e = this.document.getElementsByClassName("ckimgrsz"), t = 0;
              t < e.length;
              t++
            )
              e[t].classList.remove("ckimgrsz");
            this.hideHandles(),
              this.container.parentNode &&
                this.container.parentNode.removeChild(this.container);
          },
        },
        {
          key: "initDrag",
          value: function (e) {
            var t,
              n = this;
            0 === e.button &&
              (((t = new r.default(this.window, this.document)).onStart =
                function () {
                  n.showPreview(),
                    (n.isDragging = !0),
                    n.editor.getSelection().lock();
                }),
              (t.onDrag = function () {
                n.calculateSize(t);
                var e = n.editor.element.$.getBoundingClientRect();
                n.previewBox.width >= e.width ||
                  (n.updatePreview(),
                  (e = n.previewBox),
                  n.updateHandles(e, e.left, e.top));
              }),
              (t.onRelease = function () {
                n.hidePreview(),
                  (n.isDragging = !1),
                  n.hide(),
                  n.editor.getSelection().unlock(),
                  n.editor.fire("saveSnapshot");
              }),
              (t.onComplete = function () {
                n.resizeComplete(), n.editor.fire("saveSnapshot");
              }),
              t.start(e));
          },
        },
        {
          key: "updateHandles",
          value: function (e) {
            for (
              var t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                n =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                r = Object.keys(this.handles),
                o = 0;
              o < r.length;
              o++
            )
              l[r[o]](this.handles[r[o]], t, n, e);
          },
        },
        {
          key: "showHandles",
          value: function () {
            this.updateHandles(this.box);
            for (var e = Object.keys(this.handles), t = 0; t < e.length; t++)
              this.handles[e[t]].style.display = "block";
          },
        },
        {
          key: "hideHandles",
          value: function () {
            for (var e = Object.keys(this.handles), t = 0; t < e.length; t++)
              this.handles[e[t]].style.display = "none";
          },
        },
        {
          key: "showPreview",
          value: function () {
            this.calculateSize(),
              this.updatePreview(),
              (this.preview.style.display = "block");
          },
        },
        {
          key: "updatePreview",
          value: function () {
            u(this.preview, this.previewBox.left, this.previewBox.top),
              (this.preview.style.height = this.previewBox.height + "px"),
              (this.preview.style.width = this.previewBox.width + "px");
          },
        },
        {
          key: "hidePreview",
          value: function () {
            var e = i(this.window, this.preview);
            (this.result = { height: e.height, width: e.width }),
              (this.preview.style.display = "none");
          },
        },
        {
          key: "calculateSize",
          value: function (e) {
            var t;
            (this.previewBox = {
              height: this.box.height,
              left: 0,
              top: 0,
              width: this.box.width,
            }),
              e &&
                (0 <= (t = e.target.className).indexOf("r") &&
                  (this.previewBox.width = Math.max(
                    32,
                    this.box.width + e.delta.x
                  )),
                0 <= t.indexOf("b") &&
                  (this.previewBox.height = Math.max(
                    32,
                    this.box.height + e.delta.y
                  )),
                0 <= t.indexOf("l") &&
                  (this.previewBox.width = Math.max(
                    32,
                    this.box.width - e.delta.x
                  )),
                0 <= t.indexOf("t") &&
                  (this.previewBox.height = Math.max(
                    32,
                    this.box.height - e.delta.y
                  )),
                t.indexOf("m") < 0 &&
                  !e.keys.shift &&
                  ((e = this.box.width / this.box.height),
                  this.previewBox.width / this.previewBox.height > e
                    ? (this.previewBox.height = Math.round(
                        this.previewBox.width / e
                      ))
                    : (this.previewBox.width = Math.round(
                        this.previewBox.height * e
                      ))),
                0 <= t.indexOf("l") &&
                  (this.previewBox.left =
                    this.box.width - this.previewBox.width),
                0 <= t.indexOf("t") &&
                  (this.previewBox.top =
                    this.box.height - this.previewBox.height));
          },
        },
        {
          key: "resizeComplete",
          value: function () {
            this.cfg.onComplete(this.el, this.result.width, this.result.height);
          },
        },
      ]),
        (n = s);
      function s(e) {
        var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(this instanceof s))
          throw new TypeError("Cannot call a class as a function");
        (this.cfg = t),
          (this.editor = e),
          (this.document = e.document ? e.document.$ : document),
          (this.window = e.window ? e.window.$ : window),
          (this.box = null),
          (this.container = null),
          (this.handles = {}),
          (this.preview = null),
          (this.previewBox = null),
          (this.result = null),
          this.init();
      }
      (t.Resizer = n), (t.default = n);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t, n) {
          t && r(e.prototype, t);
        })(i, [
          {
            key: "start",
            value: function (e) {
              e.preventDefault(),
                e.stopPropagation(),
                (this.target = e.target),
                (this.className = this.target.className),
                (this.startPos = { x: e.clientX, y: e.clientY }),
                this.update(e),
                this.document.addEventListener(
                  "keydown",
                  this.events.keydown,
                  !1
                ),
                this.document.addEventListener(
                  "mousemove",
                  this.events.mousemove,
                  !1
                ),
                this.document.addEventListener(
                  "mouseup",
                  this.events.mouseup,
                  !1
                ),
                this.document.body.classList.add("dragging-" + this.className),
                "function" == typeof this.onStart && this.onStart();
            },
          },
          {
            key: "update",
            value: function (e) {
              (this.currentPos = { x: e.clientX, y: e.clientY }),
                (this.delta = {
                  x: e.clientX - this.startPos.x,
                  y: e.clientY - this.startPos.y,
                }),
                (this.keys = {
                  alt: e.altKey,
                  ctrl: e.ctrlKey,
                  shift: e.shiftKey,
                });
            },
          },
          {
            key: "mousemove",
            value: function (e) {
              this.update(e),
                "function" == typeof this.onDrag && this.onDrag(),
                0 === e.which && this.mouseup(e);
            },
          },
          {
            key: "keydown",
            value: function (e) {
              27 === e.keyCode && this.release();
            },
          },
          {
            key: "mouseup",
            value: function (e) {
              this.update(e),
                this.release(),
                "function" == typeof this.onComplete && this.onComplete();
            },
          },
          {
            key: "release",
            value: function () {
              this.document.body.classList.remove("dragging-" + this.className),
                this.document.removeEventListener(
                  "keydown",
                  this.events.keydown,
                  !1
                ),
                this.document.removeEventListener(
                  "mousemove",
                  this.events.mousemove,
                  !1
                ),
                this.document.removeEventListener(
                  "mouseup",
                  this.events.mouseup,
                  !1
                ),
                "function" == typeof this.onRelease && this.onRelease();
            },
          },
        ]);
      var o = i;
      function i(e, t) {
        if (!(this instanceof i))
          throw new TypeError("Cannot call a class as a function");
        (this.document = t),
          (this.window = e),
          (this.events = {
            keydown: this.keydown.bind(this),
            mousemove: this.mousemove.bind(this),
            mouseup: this.mouseup.bind(this),
          });
      }
      (t.DragEvent = o), (t.default = o);
    },
    function (e, t, n) {
      "use strict";
      var r,
        o,
        i,
        a,
        l,
        u,
        s,
        c = (n = n(23)) && n.__esModule ? n : { default: n };
      function d(e, t, n) {
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n);
      }
      CKEDITOR.plugins.get("ae_imagealignment") ||
        ((a = [(o = "left"), (i = "right"), (r = "center")]),
        d((n = {}), o, [
          { name: "display", value: "inline-block" },
          { name: "float", value: "left" },
          { name: "margin-right", value: "1.2rem" },
        ]),
        d(n, r, [
          { name: "display", value: "block" },
          { name: "margin-left", value: "auto" },
          { name: "margin-right", value: "auto" },
        ]),
        d(n, i, [
          { name: "display", value: "inline-block" },
          { name: "float", value: "right" },
          { name: "margin-left", value: "1.2rem" },
        ]),
        (l = n),
        (u = function (e) {
          var t,
            n,
            o = e.getStyle("float");
          return (
            (o =
              o && "inherit" !== o && "none" !== o
                ? o
                : e.getAttribute("align")) ||
              ((t = l[r].every(function (t) {
                var n = e.getStyle(t.name) === t.value;
                return !n && t.vendorPrefixes
                  ? t.vendorPrefixes.some(function (n) {
                      return e.getStyle(n + t.name) === t.value;
                    })
                  : n;
              })),
              o ||
                ((n = e.$.parentNode).style.textAlign == r &&
                  (l[r].forEach(function (t) {
                    e.setStyle(t.name, t.value),
                      t.vendorPrefixes &&
                        t.vendorPrefixes.forEach(function (n) {
                          e.setStyle(n + t.name, t.value);
                        });
                  }),
                  (t = !0),
                  (n.style.textAlign = ""))),
              (o = t ? r : null)),
            !CKEDITOR.env.edge && CKEDITOR.env.ie && (n = e.findOne("p"))
              ? n.getStyle("text-align")
              : o
          );
        }),
        (s = function (e, t) {
          t === o || t === i
            ? t === u(e) && e.removeAttribute("align")
            : t === r &&
              (n = e.$.parentNode).style.textAlign == r &&
              (n.style.textAlign = "");
          var n = l[t];
          n &&
            n.forEach(function (t) {
              e.removeStyle(t.name),
                t.vendorPrefixes &&
                  t.vendorPrefixes.forEach(function (n) {
                    e.removeStyle(n + t.name);
                  });
            });
        }),
        CKEDITOR.plugins.add("ae_imagealignment", {
          afterInit: function (e) {
            var t = this;
            a.forEach(function (n) {
              var r = e.getCommand("justify" + n);
              r &&
                (r.on("exec", function (r) {
                  var o = e.getSelectionData();
                  o &&
                    c.default.image({ data: { selectionData: o } }) &&
                    ((o = o.element),
                    (u(o) === n
                      ? s
                      : function (e, t) {
                          s(e, u(e)),
                            (t = l[t]) &&
                              t.forEach(function (t) {
                                e.setStyle(t.name, t.value),
                                  t.vendorPrefixes &&
                                    t.vendorPrefixes.forEach(function (n) {
                                      e.setStyle(n + t.name, t.value);
                                    });
                              });
                        })(o, n),
                    r.cancel(),
                    t.refreshCommands(e, new CKEDITOR.dom.elementPath(o)));
                }),
                r.on("refresh", function (e) {
                  var t = { element: e.data.path.lastElement };
                  c.default.image({ data: { selectionData: t } }) &&
                    ((t = u(t.element)),
                    this.setState(
                      t === n ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF
                    ),
                    e.cancel());
                }));
            });
          },
          refreshCommands: function (e, t) {
            a.forEach(function (n) {
              (n = e.getCommand("justify" + n)) && n.refresh(e, t);
            });
          },
        }));
    },
    function (e, t, n) {
      "use strict";
      CKEDITOR.plugins.get("ae_pasteimages") ||
        CKEDITOR.plugins.add("ae_pasteimages", {
          init: function (e) {
            var t = this;
            e.once("contentDom", function () {
              var n = e.editable();
              n.attachListener(n, "paste", t._onPaste, t, { editor: e });
            });
          },
          _onPaste: function (e) {
            var t, n, r;
            e.data.$.clipboardData &&
              ((t = e.data.$.clipboardData.items[0]),
              (n = e.listenerData.editor),
              0 === t.type.indexOf("image") &&
                ((e = new FileReader()),
                (r = t.getAsFile()),
                (e.onload = function (e) {
                  n.fire("beforeImageAdd", { imageFiles: r }) &&
                    ((e = CKEDITOR.dom.element.createFromHtml(
                      '<img src="' + e.target.result + '">'
                    )),
                    n.insertElement(e),
                    n.fire("imageAdd", { el: e, file: r }));
                }),
                e.readAsDataURL(r)));
          },
        });
    },
    function (e, t, n) {
      "use strict";
      var r, o;
      CKEDITOR.plugins.get("ae_placeholder") ||
        ((r = CKEDITOR.env.needsBrFiller ? "<br>" : ""),
        (o = {
          1: ["<p>" + r + "</p>"],
          2: ["", " ", r],
          3: ["<div>" + r + "</div>"],
        }),
        CKEDITOR.plugins.add("ae_placeholder", {
          init: function (e) {
            e.on("blur", this._checkEmptyData, this),
              e.on("change", this._checkEmptyData, this),
              e.on("focus", this._removePlaceholderClass, this),
              e.once("contentDom", this._checkEmptyData, this);
          },
          _checkEmptyData: function (e) {
            var t = (e = e.editor).editable(),
              n = t.$.innerHTML.trim();
            o[e.config.enterMode].some(function (e) {
              return n === e;
            })
              ? t.addClass(e.config.placeholderClass)
              : t.removeClass(e.config.placeholderClass);
          },
          _removePlaceholderClass: function (e) {
            (e = e.editor),
              new CKEDITOR.dom.element(e.element.$).removeClass(
                e.config.placeholderClass
              );
          },
        }));
    },
    function (e, t, n) {
      "use strict";
      CKEDITOR.plugins.get("ae_selectionkeystrokes") ||
        CKEDITOR.plugins.add("ae_selectionkeystrokes", {
          requires: "ae_selectionregion",
          init: function (e) {
            e.config.selectionKeystrokes &&
              e.config.selectionKeystrokes.forEach(function (t) {
                var n = new CKEDITOR.command(e, {
                    exec: function (e) {
                      e.fire("editorInteraction", {
                        manualSelection: t.selection,
                        nativeEvent: {},
                        selectionData: e.getSelectionData(),
                      });
                    },
                  }),
                  r = "selectionKeystroke" + t.selection;
                e.addCommand(r, n), e.setKeystroke(t.keys, r);
              });
          },
        });
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return CKEDITOR.env.ie
          ? e.$.clientWidth
          : parseInt(e.getComputedStyle("width"), 10);
      }
      function o(e, t) {
        var n = { thin: "0px", medium: "1px", thick: "2px" };
        return (
          (t = e.getComputedStyle("border-" + t + "-width")).indexOf("px") <
            0 &&
            (t =
              t in n && "none" != e.getComputedStyle("border-style")
                ? n[t]
                : 0),
          parseInt(t, 10)
        );
      }
      function i(e) {
        (e.data || e).preventDefault();
      }
      function a(e, t) {
        var n = void 0,
          a = void 0,
          l = void 0,
          s = void 0,
          c = void 0,
          d = void 0,
          f = void 0,
          p = e.document,
          h = CKEDITOR.dom.element.createFromHtml(
            '<div data-cke-temp=1 contenteditable=false unselectable=on style="position:absolute;cursor:col-resize;filter:alpha(opacity=0);opacity:0;padding:0;background-color:#004;background-image:none;border:0px none;z-index:10"></div>',
            p
          ),
          m =
            ((this.isResizing = function () {
              return s;
            }),
            (this.move = function (e) {
              (e -= Math.round(h.$.offsetWidth / 2)) !== a &&
                e !== c &&
                ((e = Math.max(e, a)),
                (e = Math.min(e, c)),
                (n = e - f),
                h.setStyle("left", u(e)));
            }));
        function y() {
          h.removeListener("mouseup", g),
            h.removeListener("mousedown", b),
            h.removeListener("mousemove", v);
        }
        function b(e) {
          i(e);
          for (
            var o = t.index,
              u = CKEDITOR.tools.buildTableMap(t.table),
              m = [],
              y = [],
              b = Number.MAX_VALUE,
              _ = b,
              E = t.rtl,
              w = 0,
              O = u.length;
            w < O;
            w++
          ) {
            var k = (T = u[w])[o + (E ? 1 : 0)],
              T = T[o + (E ? 0 : 1)];
            (k = k && new CKEDITOR.dom.element(k)),
              (T = T && new CKEDITOR.dom.element(T));
            (k && T && k.equals(T)) ||
              (k && (b = Math.min(b, r(k))),
              T && (_ = Math.min(_, r(T))),
              m.push(k),
              y.push(T));
          }
          (l = m),
            (d = y),
            (a = t.x - b),
            (c = t.x + _),
            h.setOpacity(0.5),
            (f = parseInt(h.getStyle("left"), 10)),
            (n = 0),
            (s = 1),
            h.on("mousemove", v),
            p.on("dragstart", i),
            p.on("mouseup", g, this);
        }
        function g(e) {
          e.removeListener(),
            (function () {
              (s = 0),
                h.setOpacity(0),
                n &&
                  (function () {
                    for (
                      var e = this, i = t.rtl, a = (i ? d : l).length, s = 0;
                      s < a;
                      s++
                    )
                      !(function (a) {
                        var s = l[a],
                          c = ((a = d[a]), t.table);
                        CKEDITOR.tools.setTimeout(
                          function (e, t, n, r, o, a) {
                            e && e.setStyle("width", u(Math.max(t + a, 1))),
                              n && n.setStyle("width", u(Math.max(r - a, 1))),
                              o && c.setStyle("width", u(o + a * (i ? -1 : 1)));
                          },
                          0,
                          e,
                          [
                            s,
                            s && r(s),
                            a,
                            a && r(a),
                            (!s || !a) && r(c) + o(c, "left") + o(c, "right"),
                            n,
                          ]
                        );
                      })(s);
                  })();
              var e = t.table;
              setTimeout(function () {
                e.removeCustomData("_cke_table_pillars");
              }, 0),
                p.removeListener("dragstart", i);
            })();
        }
        function v(e) {
          m(e.data.getPageOffset().x);
        }
        e.on("destroy", function () {
          y(), h.remove();
        }),
          p.getDocumentElement().append(h),
          h.setStyles({
            width: u(t.width),
            height: u(t.height),
            left: u(t.x),
            top: u(t.y),
          }),
          h.on("mousedown", b, this),
          p.getBody().setStyle("cursor", "col-resize"),
          h.show(),
          (this.destroy = function () {
            y(), p.getBody().setStyle("cursor", "auto"), h.remove();
          });
      }
      function l(e) {
        var t = e.data.getTarget();
        if ("mouseout" === e.name) {
          if (!t.is("table")) return;
          for (
            var n = new CKEDITOR.dom.element(
              e.data.$.relatedTarget || e.data.$.toElement
            );
            n && n.$ && !n.equals(t) && !n.is("body");

          )
            n = n.getParent();
          if (!n || n.equals(t)) return;
        }
        t.getAscendant("table", 1).removeCustomData("_cke_table_pillars"),
          e.removeListener();
      }
      var u;
      CKEDITOR.plugins.get("ae_tableresize") ||
        ((u = CKEDITOR.tools.cssLength),
        CKEDITOR.plugins.add("ae_tableresize", {
          requires: "ae_tabletools",
          init: function (e) {
            e.on("contentDom", function () {
              var t = void 0,
                n = e.editable();
              n.attachListener(
                n.isInline() ? n : e.document,
                "mousemove",
                function (n) {
                  var r = (n = n.data).getTarget();
                  if (r.type === CKEDITOR.NODE_ELEMENT) {
                    var u = n.getPageOffset().x;
                    if (t) {
                      if (t.isResizing()) return t.move(u), void i(n);
                      t.destroy(), (t = null);
                    }
                    (n = void 0),
                      (r.is("table") || r.getAscendant("tbody", 1)) &&
                        ((r = r.getAscendant("table", 1)),
                        e.editable().contains(r) &&
                          ((n = r.getCustomData("_cke_table_pillars")) ||
                            (r.setCustomData(
                              "_cke_table_pillars",
                              (n = (function (e) {
                                for (
                                  var t = [],
                                    n = -1,
                                    r =
                                      "rtl" === e.getComputedStyle("direction"),
                                    i = (function (e) {
                                      for (
                                        var t,
                                          n,
                                          r = e.$.rows,
                                          o = 0,
                                          i = void 0,
                                          a = 0,
                                          l = r.length;
                                        a < l;
                                        a++
                                      )
                                        o < (t = (n = r[a]).cells.length) &&
                                          ((o = t), (i = n));
                                      return i;
                                    })(e),
                                    a = new CKEDITOR.dom.element(
                                      e.$.tBodies[0]
                                    ),
                                    l = a.getDocumentPosition(),
                                    u = 0,
                                    s = i.cells.length;
                                  u < s;
                                  u++
                                ) {
                                  var c = new CKEDITOR.dom.element(i.cells[u]),
                                    d =
                                      i.cells[u + 1] &&
                                      new CKEDITOR.dom.element(i.cells[u + 1]),
                                    f = void (n += c.$.colSpan || 1),
                                    p = void 0,
                                    h = c.getDocumentPosition().x;
                                  r
                                    ? (p = h + o(c, "left"))
                                    : (f = h + c.$.offsetWidth - o(c, "right")),
                                    d
                                      ? ((h = d.getDocumentPosition().x),
                                        r
                                          ? (f =
                                              h +
                                              d.$.offsetWidth -
                                              o(d, "right"))
                                          : (p = h + o(d, "left")))
                                      : ((h = e.getDocumentPosition().x),
                                        r
                                          ? (f = h)
                                          : (p = h + e.$.offsetWidth)),
                                    (c = Math.max(p - f, 4)),
                                    t.push({
                                      table: e,
                                      index: n,
                                      x: f,
                                      y: l.y,
                                      width: c,
                                      height: a.$.offsetHeight,
                                      rtl: r,
                                    });
                                }
                                return t;
                              })(r))
                            ),
                            r.on("mouseout", l),
                            r.on("mousedown", l)),
                          (r = (function (e, t) {
                            for (var n = 0, r = e.length; n < r; n++) {
                              var o = e[n];
                              if (t >= o.x && t <= o.x + o.width) return o;
                            }
                            return null;
                          })(n, u)) && (t = new a(e, r))));
                  }
                }
              );
            });
          },
        }));
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.getRanges(),
          n = [],
          r = {};
        function o(e) {
          0 < n.length ||
            (e.type == CKEDITOR.NODE_ELEMENT &&
              p.test(e.getName()) &&
              !e.getCustomData("selected_cell") &&
              (CKEDITOR.dom.element.setMarker(r, e, "selected_cell", !0),
              n.push(e)));
        }
        for (var i = 0; i < t.length; i++) {
          var a = t[i];
          if (a.collapsed) {
            var l;
            (l =
              (l = a.getCommonAncestor()).getAscendant("td", !0) ||
              l.getAscendant("th", !0)) && n.push(l);
          } else {
            var u,
              s = new CKEDITOR.dom.walker(a),
              c = void 0;
            for (s.guard = o; (c = s.next()); )
              (c.type == CKEDITOR.NODE_ELEMENT && c.is(CKEDITOR.dtd.table)) ||
                ((u = c.getAscendant("td", !0) || c.getAscendant("th", !0)) &&
                  !u.getCustomData("selected_cell") &&
                  (CKEDITOR.dom.element.setMarker(r, u, "selected_cell", !0),
                  n.push(u)));
          }
        }
        return CKEDITOR.dom.element.clearAllMarkers(r), n;
      }
      function o(e, t) {
        for (
          var n,
            o = r(e.getSelection()),
            i = (a = o[0]).getAscendant("table"),
            a = a.getDocument(),
            u = (n = o[0].getParent()).$.rowIndex,
            s = (s = o[o.length - 1]).getParent().$.rowIndex + s.$.rowSpan - 1,
            c = new CKEDITOR.dom.element(i.$.rows[s]),
            d =
              ((u = t ? u : s),
              (s = t ? n : c),
              (n = CKEDITOR.tools.buildTableMap(i))[u]),
            f = t ? n[u - 1] : n[u + 1],
            p = n[0].length,
            h = a.createElement("tr"),
            m = 0;
          d[m] && m < p;
          m++
        ) {
          var y = void 0;
          1 < d[m].rowSpan && f && d[m] == f[m]
            ? ((y = d[m]).rowSpan += 1)
            : ((y = new CKEDITOR.dom.element(d[m]).clone()).removeAttribute(
                "rowSpan"
              ),
              y.appendBogus(),
              h.append(y),
              (y = y.$)),
            (m += y.colSpan - 1);
        }
        t ? h.insertBefore(s) : h.insertAfter(s),
          l(
            e,
            new CKEDITOR.dom.element(h.$).getChild(o[0] ? o[0].$.cellIndex : 0)
          );
      }
      function i(e, t) {
        for (var n = t ? 1 / 0 : 0, r = 0; r < e.length; r++) {
          var o = (function (e, t) {
            for (
              var n = e.getParent().$.cells, r = 0, o = 0;
              o < n.length;
              o++
            ) {
              var i = n[o];
              if (((r += t ? 1 : i.colSpan), i == e.$)) break;
            }
            return r - 1;
          })(e[r], t);
          (t ? o < n : n < o) && (n = o);
        }
        return n;
      }
      function a(e, t) {
        for (
          var n = (u = r(e.getSelection()))[0],
            o = n.getAscendant("table"),
            a = i(u, 1),
            u = i(u),
            s = t ? a : u,
            c = CKEDITOR.tools.buildTableMap(o),
            d = [],
            f = [],
            p = c.length,
            h = 0;
          h < p;
          h++
        ) {
          d.push(c[h][s]);
          var m = t ? c[h][s - 1] : c[h][s + 1];
          f.push(m);
        }
        for (var y = [], b = 0; b < p; b++) {
          var g = void 0;
          d[b] &&
            (1 < d[b].colSpan && f[b] == d[b]
              ? ((g = d[b]).colSpan += 1)
              : ((g = new CKEDITOR.dom.element(d[b]).clone()).removeAttribute(
                  "colSpan"
                ),
                g.appendBogus(),
                g[t ? "insertBefore" : "insertAfter"].call(
                  g,
                  new CKEDITOR.dom.element(d[b])
                ),
                (g = g.$)),
            (b += (y[b] = g).rowSpan - 1));
        }
        l(e, new CKEDITOR.dom.element(y[n.getParent().$.rowIndex]));
      }
      function l(e, t) {
        var n = e.createRange();
        n.moveToPosition(t, CKEDITOR.POSITION_AFTER_START),
          e.getSelection().selectRanges([n]);
      }
      function u(e, t) {
        var n;
        (e =
          (e = e.getStartElement()).getAscendant("td", 1) ||
          e.getAscendant("th", 1)) &&
          ((n = e.clone()).appendBogus(),
          t ? n.insertBefore(e) : n.insertAfter(e));
      }
      function s(e) {
        if (e instanceof CKEDITOR.dom.selection) {
          for (
            var t = r(e),
              n = t[0] && t[0].getAscendant("table"),
              o = (function (e) {
                for (
                  var t = 0,
                    n = e.length - 1,
                    r = {},
                    o = void 0,
                    i = void 0,
                    a = void 0;
                  (o = e[t++]);

                )
                  CKEDITOR.dom.element.setMarker(r, o, "delete_cell", !0);
                for (t = 0; (o = e[t++]); )
                  if (
                    ((i = o.getPrevious()) &&
                      !i.getCustomData("delete_cell")) ||
                    ((i = o.getNext()) && !i.getCustomData("delete_cell"))
                  )
                    return CKEDITOR.dom.element.clearAllMarkers(r), i;
                return (
                  CKEDITOR.dom.element.clearAllMarkers(r),
                  (a = (a = e[0].getParent()).getPrevious())
                    ? a.getLast()
                    : (a = (a = e[n].getParent()).getNext())
                    ? a.getChild(0)
                    : null
                );
              })(t),
              i = t.length - 1;
            0 <= i;
            i--
          )
            s(t[i]);
          o ? c(o, !0) : n && n.remove();
        } else
          e instanceof CKEDITOR.dom.element &&
            (1 == (o = e.getParent()).getChildCount() ? o : e).remove();
      }
      function c(e, t) {
        var n = e.getDocument(),
          r = CKEDITOR.document;
        (r =
          (CKEDITOR.env.ie &&
            10 == CKEDITOR.env.version &&
            (r.focus(), n.focus()),
          new CKEDITOR.dom.range(n)))[
          "moveToElementEdit" + (t ? "End" : "Start")
        ](e) || (r.selectNodeContents(e), r.collapse(!t)),
          r.select(!0);
      }
      function d(e, t, n) {
        var r = e[t];
        if (void 0 === n) return r;
        for (var o = 0; r && o < r.length; o++) {
          if (n.is && r[o] == n.$) return o;
          if (o == n) return new CKEDITOR.dom.element(r[o]);
        }
        return n.is ? -1 : null;
      }
      function f(e, t, n) {
        var o = r(e),
          i = void 0;
        if (
          (t ? 1 != o.length : o.length < 2) ||
          ((i = e.getCommonAncestor()) &&
            i.type == CKEDITOR.NODE_ELEMENT &&
            i.is("table"))
        )
          return !1;
        var a = void 0,
          l = (i = o[0]).getAscendant("table"),
          u = CKEDITOR.tools.buildTableMap(l),
          s = u.length,
          c = u[0].length,
          f = i.getParent().$.rowIndex,
          p = d(u, f, i);
        if (t) {
          var h = void 0;
          try {
            var m = parseInt(i.getAttribute("rowspan"), 10) || 1,
              y = parseInt(i.getAttribute("colspan"), 10) || 1;
            h =
              u["up" == t ? f - m : "down" == t ? f + m : f][
                "left" == t ? p - y : "right" == t ? p + y : p
              ];
          } catch (e) {
            return !1;
          }
          if (!h || i.$ == h) return !1;
          o["up" == t || "left" == t ? "unshift" : "push"](
            new CKEDITOR.dom.element(h)
          );
        }
        m = i.getDocument();
        for (
          var b = f,
            g = 0,
            v = 0,
            _ = !n && new CKEDITOR.dom.documentFragment(m),
            E = 0,
            w = 0;
          w < o.length;
          w++
        ) {
          var O = (a = o[w]).getParent(),
            k = a.getFirst(),
            T = a.$.colSpan,
            C = a.$.rowSpan,
            x = d(u, (O = O.$.rowIndex), a);
          (E += T * C),
            (v = Math.max(v, x - p + T)),
            (g = Math.max(g, O - f + C)),
            n ||
              ((x = void 0),
              (x = (T = a).getBogus()) && x.remove(),
              T.trim(),
              a.getChildren().count() &&
                (O == b ||
                  !k ||
                  (k.isBlockBoundary && k.isBlockBoundary({ br: 1 })) ||
                  !(C = _.getLast(CKEDITOR.dom.walker.whitespaces(!0))) ||
                  (C.is && C.is("br")) ||
                  _.append("br"),
                a.moveChildren(_)),
              w ? a.remove() : a.setHtml("")),
            (b = O);
        }
        if (n) return g * v == E;
        _.moveChildren(i),
          i.appendBogus(),
          c <= v ? i.removeAttribute("rowSpan") : (i.$.rowSpan = g),
          s <= g ? i.removeAttribute("colSpan") : (i.$.colSpan = v);
        for (
          var S = new CKEDITOR.dom.nodeList(l.$.rows), P = S.count(), I = P - 1;
          0 <= I;
          I--
        ) {
          var D = S.getItem(I);
          D.$.cells.length || (D.remove(), P++);
        }
        return i;
      }
      var p;
      CKEDITOR.plugins.get("ae_tabletools") ||
        ((p = /^(?:td|th)$/),
        CKEDITOR.plugins.add("ae_tabletools", {
          init: function (e) {
            function t(e) {
              return CKEDITOR.tools.extend(e || {}, {
                contextSensitive: 1,
                refresh: function (e, t) {
                  this.setState(
                    t.contains({ td: 1, th: 1 }, 1)
                      ? CKEDITOR.TRISTATE_OFF
                      : CKEDITOR.TRISTATE_DISABLED
                  );
                },
              });
            }
            function n(t, n) {
              e.getCommand(t) || ((t = e.addCommand(t, n)), e.addFeature(t));
            }
            n(
              "rowDelete",
              t({
                requiredContent: "table",
                exec: function (e) {
                  c(
                    (function e(t) {
                      if (t instanceof CKEDITOR.dom.selection) {
                        for (
                          var n = (h = r(t))[0].getAscendant("table"),
                            o = CKEDITOR.tools.buildTableMap(n),
                            i = h[0].getParent().$.rowIndex,
                            a =
                              (h = h[h.length - 1]).getParent().$.rowIndex +
                              h.$.rowSpan -
                              1,
                            l = [],
                            u = i;
                          u <= a;
                          u++
                        ) {
                          for (
                            var s = o[u],
                              c = new CKEDITOR.dom.element(n.$.rows[u]),
                              d = 0;
                            d < s.length;
                            d++
                          ) {
                            var f = new CKEDITOR.dom.element(s[d]),
                              p = f.getParent().$.rowIndex;
                            1 == f.$.rowSpan
                              ? f.remove()
                              : (--f.$.rowSpan,
                                p == u &&
                                  ((p = o[u + 1])[d - 1]
                                    ? f.insertAfter(
                                        new CKEDITOR.dom.element(p[d - 1])
                                      )
                                    : new CKEDITOR.dom.element(
                                        n.$.rows[u + 1]
                                      ).append(f, 1))),
                              (d += f.$.colSpan - 1);
                          }
                          l.push(c);
                        }
                        for (
                          var h = n.$.rows,
                            m =
                              ((h = new CKEDITOR.dom.element(
                                h[1 + a] ||
                                  (0 < i ? h[i - 1] : null) ||
                                  n.$.parentNode
                              )),
                              l.length);
                          0 <= m;
                          m--
                        )
                          e(l[m]);
                        return h;
                      }
                      return (
                        t instanceof CKEDITOR.dom.element &&
                          (1 == (i = t.getAscendant("table")).$.rows.length
                            ? i
                            : t
                          ).remove(),
                        null
                      );
                    })(e.getSelection())
                  );
                },
              })
            ),
              n(
                "rowInsertBefore",
                t({
                  requiredContent: "table",
                  exec: function (e) {
                    o(e, !0);
                  },
                })
              ),
              n(
                "rowInsertAfter",
                t({
                  requiredContent: "table",
                  exec: function (e) {
                    o(e);
                  },
                })
              ),
              n(
                "columnDelete",
                t({
                  requiredContent: "table",
                  exec: function (e) {
                    (e = (function (e) {
                      for (
                        var t = (e = r(e))[0],
                          n = e[e.length - 1],
                          o = t.getAscendant("table"),
                          i = CKEDITOR.tools.buildTableMap(o),
                          a = void 0,
                          l = void 0,
                          u = [],
                          s = 0,
                          c = i.length;
                        s < c;
                        s++
                      )
                        for (var d = 0, f = i[s].length; d < f; d++)
                          i[s][d] == t.$ && (a = d), i[s][d] == n.$ && (l = d);
                      for (var p = a; p <= l; p++)
                        for (var h = 0; h < i.length; h++) {
                          var m = i[h],
                            y = new CKEDITOR.dom.element(o.$.rows[h]);
                          (m = new CKEDITOR.dom.element(m[p])).$ &&
                            (1 == m.$.colSpan ? m.remove() : --m.$.colSpan,
                            (h += m.$.rowSpan - 1),
                            y.$.cells.length || u.push(y));
                        }
                      return (
                        (e = o.$.rows[0] && o.$.rows[0].cells),
                        (e = new CKEDITOR.dom.element(
                          e[a] || (a ? e[a - 1] : o.$.parentNode)
                        )),
                        null == u.length && o.remove(),
                        e
                      );
                    })(e.getSelection())),
                      e && c(e, !0);
                  },
                })
              ),
              n(
                "columnInsertBefore",
                t({
                  requiredContent: "table",
                  exec: function (e) {
                    a(e, !0);
                  },
                })
              ),
              n(
                "columnInsertAfter",
                t({
                  requiredContent: "table",
                  exec: function (e) {
                    a(e);
                  },
                })
              ),
              n(
                "cellDelete",
                t({
                  requiredContent: "table",
                  exec: function (e) {
                    s(e.getSelection());
                  },
                })
              ),
              n(
                "cellMerge",
                t({
                  allowedContent: "td[colspan,rowspan]",
                  requiredContent: "td[colspan,rowspan]",
                  exec: function (e) {
                    c(f(e.getSelection()), !0);
                  },
                })
              ),
              n(
                "cellMergeRight",
                t({
                  allowedContent: "td[colspan]",
                  requiredContent: "td[colspan]",
                  exec: function (e) {
                    c(f(e.getSelection(), "right"), !0);
                  },
                })
              ),
              n(
                "cellMergeDown",
                t({
                  allowedContent: "td[rowspan]",
                  requiredContent: "td[rowspan]",
                  exec: function (e) {
                    c(f(e.getSelection(), "down"), !0);
                  },
                })
              ),
              n(
                "cellVerticalSplit",
                t({
                  allowedContent: "td[rowspan]",
                  requiredContent: "td[rowspan]",
                  exec: function (e) {
                    c(
                      (function (e, t) {
                        if (1 < (e = r(e)).length) return !1;
                        if (t) return !0;
                        var n = (e = (t = e[0]).getParent()).getAscendant(
                            "table"
                          ),
                          o = CKEDITOR.tools.buildTableMap(n),
                          i = e.$.rowIndex,
                          a = d(o, i, t),
                          l = void 0,
                          u = void 0,
                          s = void 0;
                        if (1 < (c = t.$.rowSpan)) {
                          (u = Math.ceil(c / 2)), (s = Math.floor(c / 2));
                          for (
                            var c = i + u,
                              f = new CKEDITOR.dom.element(n.$.rows[c]),
                              p = d(o, c),
                              h = void 0,
                              m = ((l = t.clone()), 0);
                            m < p.length;
                            m++
                          ) {
                            if ((h = p[m]).parentNode == f.$ && a < m) {
                              l.insertBefore(new CKEDITOR.dom.element(h));
                              break;
                            }
                            h = null;
                          }
                          h || f.append(l);
                        } else {
                          (s = u = 1),
                            (n = e.clone()).insertAfter(e),
                            n.append((l = t.clone()));
                          for (var y = d(o, i), b = 0; b < y.length; b++)
                            y[b].rowSpan++;
                        }
                        return (
                          l.appendBogus(),
                          (t.$.rowSpan = u),
                          (l.$.rowSpan = s),
                          1 == u && t.removeAttribute("rowSpan"),
                          1 == s && l.removeAttribute("rowSpan"),
                          l
                        );
                      })(e.getSelection())
                    );
                  },
                })
              ),
              n(
                "cellHorizontalSplit",
                t({
                  allowedContent: "td[colspan]",
                  requiredContent: "td[colspan]",
                  exec: function (e) {
                    c(
                      (function (e, t) {
                        if (1 < (e = r(e)).length) return !1;
                        if (t) return !0;
                        var n = (e = (t = e[0]).getParent()).getAscendant(
                            "table"
                          ),
                          o =
                            ((e = d(
                              (n = CKEDITOR.tools.buildTableMap(n)),
                              e.$.rowIndex,
                              t
                            )),
                            t.$.colSpan),
                          i = void 0,
                          a = void 0;
                        if (1 < o)
                          (i = Math.ceil(o / 2)), (a = Math.floor(o / 2));
                        else {
                          a = i = 1;
                          for (
                            var l = (function (e, t) {
                                for (var n = [], r = 0; r < e.length; r++) {
                                  var o = e[r];
                                  n.push(o[t]),
                                    1 < o[t].rowSpan && (r += o[t].rowSpan - 1);
                                }
                                return n;
                              })(n, e),
                              u = 0;
                            u < l.length;
                            u++
                          )
                            l[u].colSpan++;
                        }
                        return (
                          (o = t.clone()).insertAfter(t),
                          o.appendBogus(),
                          (t.$.colSpan = i),
                          (o.$.colSpan = a),
                          1 == i && t.removeAttribute("colSpan"),
                          1 == a && o.removeAttribute("colSpan"),
                          o
                        );
                      })(e.getSelection())
                    );
                  },
                })
              ),
              n(
                "cellInsertBefore",
                t({
                  requiredContent: "table",
                  exec: function (e) {
                    u(e.getSelection(), !0);
                  },
                })
              ),
              n(
                "cellInsertAfter",
                t({
                  requiredContent: "table",
                  exec: function (e) {
                    u(e.getSelection());
                  },
                })
              );
          },
          getSelectedCells: r,
        })),
        (CKEDITOR.tools.buildTableMap = function (e) {
          for (var t = e.$.rows, n = -1, r = [], o = 0; o < t.length; o++) {
            r[++n] || (r[n] = []);
            for (var i = -1, a = 0; a < t[o].cells.length; a++) {
              var l = t[o].cells[a];
              for (i++; r[n][i]; ) i++;
              for (
                var u = isNaN(l.colSpan) ? 1 : l.colSpan,
                  s = isNaN(l.rowSpan) ? 1 : l.rowSpan,
                  c = 0;
                c < s;
                c++
              ) {
                r[n + c] || (r[n + c] = []);
                for (var d = 0; d < u; d++) r[n + c][i + d] = t[o].cells[a];
              }
              i += u - 1;
            }
          }
          return r;
        });
    },
    function (e, t, n) {
      "use strict";
      n(143), n(144), n(145), n(146), n(147), n(148);
    },
    function (e, t, n) {
      "use strict";
      var r,
        o = function (e, t, n) {
          return t && l(e.prototype, t), n && l(e, n), e;
        },
        i = u(n(0)),
        a = u(n(2));
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (e)
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      function c(e, t, n) {
        var l = AlloyEditor.Buttons[e];
        return (
          (r[n.name] = r[n.name] || {}),
          (r[n.name][e] = r[n.name][e] || t),
          l ||
            ((t = n =
              (function (t) {
                function n() {
                  var t,
                    o = this;
                  if (!(o instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                  for (
                    var i = arguments.length, a = Array(i), l = 0;
                    l < i;
                    l++
                  )
                    a[l] = arguments[l];
                  return (
                    ((t = s(
                      this,
                      (o = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                        o,
                        [this].concat(a)
                      )
                    ))._handleClick = function () {
                      var n = t.context.editor.get("nativeEditor"),
                        o = r[n.name][e].command,
                        i = r[n.name][e].onClick;
                      i ? i.call(t) : n.execCommand(o),
                        n.fire("actionPerformed", t);
                    }),
                    s(t, t)
                  );
                }
                var a = n;
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                return (
                  (a.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: a,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(a, t)
                      : (a.__proto__ = t)),
                  o(n, [
                    { key: "toFeature", value: function () {} },
                    {
                      key: "render",
                      value: function () {
                        var t = this.context.editor.get("nativeEditor"),
                          n = r[t.name][e].name || r[t.name][e].command || e,
                          o = ((t = r[t.name][e].label), "button-" + n),
                          a = "ae-icon-" + n,
                          l = {};
                        return (
                          (n = CKEDITOR.skin.getIconStyle(n)) &&
                            ((n = n.split(";")),
                            (l.backgroundImage = n[0].substring(
                              n[0].indexOf(":") + 1
                            )),
                            (l.backgroundPosition = n[1].substring(
                              n[1].indexOf(":") + 1
                            )),
                            (l.backgroundSize = n[2].substring(
                              n[2].indexOf(":") + 1
                            ))),
                          i.default.createElement(
                            "button",
                            {
                              "aria-label": t,
                              className: "ae-button ae-button-bridge",
                              "data-type": o,
                              onClick: this._handleClick,
                              tabIndex: this.props.tabIndex,
                              title: t,
                            },
                            i.default.createElement("span", {
                              className: a,
                              style: l,
                            })
                          )
                        );
                      },
                    },
                  ]),
                  n
                );
              })(i.default.Component)),
            (n.contextType = a.default),
            (n.displayName = e),
            (n.key = e),
            (l = t),
            (AlloyEditor.Buttons[e] = l)),
          l
        );
      }
      CKEDITOR.plugins.get("ae_buttonbridge") ||
        ((r = {}),
        CKEDITOR.plugins.get("button") ||
          ((CKEDITOR.UI_BUTTON = "button"), CKEDITOR.plugins.add("button", {})),
        CKEDITOR.plugins.add("ae_buttonbridge", {
          requires: ["ae_uibridge"],
          beforeInit: function (e) {
            (r[e.name] = {}),
              (e.ui.addButton = function (e, t) {
                this.add(e, CKEDITOR.UI_BUTTON, t);
              }),
              e.ui.addHandler(CKEDITOR.UI_BUTTON, {
                add: c,
                create: function (e) {
                  return new (c(
                    "buttonBridge" + ((1e9 * Math.random()) >>> 0),
                    e
                  ))();
                },
              });
          },
        }));
    },
    function (e, t, n) {
      "use strict";
      var r,
        o = function (e, t, n) {
          return t && u(e.prototype, t), n && u(e, n), e;
        },
        i = s(n(0)),
        a = s(n(2)),
        l = s(n(12));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t, n) {
        var u,
          s = AlloyEditor.Buttons[e];
        return (
          (r[n.name] = r[n.name] || {}),
          (r[n.name][e] = r[n.name][e] || t),
          s ||
            ((u = n =
              (function (n) {
                function a() {
                  var e = this,
                    t = a;
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                  if (
                    ((e = this),
                    (t = (a.__proto__ || Object.getPrototypeOf(a)).apply(
                      this,
                      arguments
                    )),
                    e)
                  )
                    return !t ||
                      ("object" != typeof t && "function" != typeof t)
                      ? e
                      : t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                }
                var u = a;
                if ("function" != typeof n && null !== n)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof n
                  );
                return (
                  (u.prototype = Object.create(n && n.prototype, {
                    constructor: {
                      value: u,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  n &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(u, n)
                      : (u.__proto__ = n)),
                  o(a, [
                    { key: "toFeature", value: function () {} },
                    {
                      key: "render",
                      value: function () {
                        var t,
                          n = this.context.editor.get("nativeEditor"),
                          o =
                            "ae-icon-" +
                            (t =
                              r[n.name][e].name || r[n.name][e].command || e),
                          a = {};
                        return (
                          (t = CKEDITOR.skin.getIconStyle(t)) &&
                            ((t = t.split(";")),
                            (a.backgroundImage = t[0].substring(
                              t[0].indexOf(":") + 1
                            )),
                            (a.backgroundPosition = t[1].substring(
                              t[1].indexOf(":") + 1
                            )),
                            (a.backgroundSize = t[2].substring(
                              t[2].indexOf(":") + 1
                            ))),
                          i.default.createElement(
                            "div",
                            { className: "ae-container ae-has-dropdown" },
                            i.default.createElement(
                              "button",
                              {
                                "aria-expanded": this.props.expanded,
                                "aria-label": r[n.name][e].label,
                                className: "ae-button ae-button-bridge",
                                onClick: this.props.toggleDropdown,
                                role: "combobox",
                                tabIndex: this.props.tabIndex,
                                title: r[n.name][e].label,
                              },
                              i.default.createElement("span", {
                                className: o,
                                style: a,
                              })
                            ),
                            this.props.expanded &&
                              i.default.createElement(
                                l.default,
                                { onDismiss: this.props.toggleDropdown },
                                this._getMenuItems()
                              )
                          )
                        );
                      },
                    },
                    {
                      key: "_getMenuItems",
                      value: function () {
                        var e = this.context.editor.get("nativeEditor"),
                          n = t.onMenu();
                        return Object.keys(n).map(function (t) {
                          var r = e.getMenuItem(t);
                          if (!r) return null;
                          var o = r.definition || r,
                            a =
                              "ae-toolbar-element " +
                              ((t = n[t]) === CKEDITOR.TRISTATE_ON
                                ? "active"
                                : "");
                          t = t === CKEDITOR.TRISTATE_DISABLED;
                          return i.default.createElement(
                            "li",
                            { key: r.name, role: "option" },
                            i.default.createElement(
                              "button",
                              {
                                className: a,
                                disabled: t,
                                onClick: function () {
                                  o.command
                                    ? e.execCommand(o.command)
                                    : o.onClick && o.onClick.apply(o);
                                },
                              },
                              o.label
                            )
                          );
                        });
                      },
                    },
                  ]),
                  a
                );
              })(i.default.Component)),
            (n.contextType = a.default),
            (n.displayName = e),
            (n.key = e),
            (s = u),
            (AlloyEditor.Buttons[e] = s)),
          s
        );
      }
      CKEDITOR.plugins.get("ae_menubuttonbridge") ||
        ((r = {}),
        CKEDITOR.plugins.get("menubutton") ||
          ((CKEDITOR.UI_MENU_BUTTON = "menubutton"),
          CKEDITOR.plugins.add("menubutton", {})),
        CKEDITOR.plugins.add("ae_menubuttonbridge", {
          requires: ["ae_uibridge", "ae_menubridge"],
          beforeInit: function (e) {
            (r[e.name] = {}),
              (e.ui.addMenuButton = function (e, t) {
                this.add(e, CKEDITOR.UI_MENUBUTTON, t);
              }),
              e.ui.addHandler(CKEDITOR.UI_MENUBUTTON, {
                add: c,
                create: function (e) {
                  return new (c(
                    "buttonBridge" + ((1e9 * Math.random()) >>> 0),
                    e
                  ))();
                },
              });
          },
        }));
    },
    function (e, t, n) {
      "use strict";
      CKEDITOR.plugins.get("ae_menubridge") ||
        CKEDITOR.plugins.add("ae_menubridge", {
          beforeInit: function (e) {
            if (!CKEDITOR.plugins.get("menu")) {
              for (
                var t = [],
                  n = (e._.menuGroups = {}),
                  r = (e._.menuItems = {}),
                  o = 0;
                o < t.length;
                o++
              )
                n[t[o]] = o + 1;
              (e.addMenuGroup = function (e, t) {
                n[e] = t || 100;
              }),
                (e.addMenuItem = function (e, t) {
                  n[t.group] && (r[e] = { name: e, definition: t });
                }),
                (e.addMenuItems = function (e) {
                  for (var t in e)
                    Object.prototype.hasOwnProperty.call(e, t) &&
                      this.addMenuItem(t, e[t]);
                }),
                (e.getMenuItem = function (e) {
                  return r[e];
                }),
                (e.removeMenuItem = function (e) {
                  delete r[e];
                });
            }
          },
        });
    },
    function (e, t, n) {
      "use strict";
      var r,
        o,
        i = function (e, t, n) {
          return t && s(e.prototype, t), n && s(e, n), e;
        },
        a = c(n(0)),
        l = c(n(2)),
        u = c(n(12));
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      CKEDITOR.plugins.get("ae_panelmenubuttonbridge") ||
        ((r = {}),
        (o = function (e, t, n) {
          var o = AlloyEditor.Buttons[e];
          return (
            (r[n.name] = r[n.name] || {}),
            (r[n.name][e] = r[n.name][e] || t),
            o ||
              ((t = n =
                (function (t) {
                  function n() {
                    var e = this,
                      t = n;
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                    if (
                      ((e = this),
                      (t = (n.__proto__ || Object.getPrototypeOf(n)).apply(
                        this,
                        arguments
                      )),
                      e)
                    )
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  }
                  var o = n;
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  return (
                    (o.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: o,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(o, t)
                        : (o.__proto__ = t)),
                    i(n, [
                      { key: "createPanel", value: function () {} },
                      {
                        key: "render",
                        value: function () {
                          var t = this.context.editor.get("nativeEditor"),
                            n =
                              "ae-icon-" +
                              (i =
                                r[t.name][e].name || r[t.name][e].command || e),
                            o = {},
                            i = void (
                              (i = CKEDITOR.skin.getIconStyle(i)) &&
                              ((i = i.split(";")),
                              (o.backgroundImage = i[0].substring(
                                i[0].indexOf(":") + 1
                              )),
                              (o.backgroundPosition = i[1].substring(
                                i[1].indexOf(":") + 1
                              )),
                              (o.backgroundSize = i[2].substring(
                                i[2].indexOf(":") + 1
                              )))
                            );
                          return (
                            this.props.expanded && (i = this._getPanel()),
                            a.default.createElement(
                              "div",
                              { className: "ae-container ae-has-dropdown" },
                              a.default.createElement(
                                "button",
                                {
                                  "aria-expanded": this.props.expanded,
                                  "aria-label": r[t.name][e].label,
                                  className: "ae-button ae-button-bridge",
                                  onClick: this.props.toggleDropdown,
                                  role: "combobox",
                                  tabIndex: this.props.tabIndex,
                                  title: r[t.name][e].label,
                                },
                                a.default.createElement("span", {
                                  className: n,
                                  style: o,
                                })
                              ),
                              i
                            )
                          );
                        },
                      },
                      {
                        key: "_getPanel",
                        value: function () {
                          var t = this.context.editor.get("nativeEditor"),
                            n =
                              ((t = r[t.name][e].onBlock),
                              {
                                hide: this.props.toggleDropdown,
                                show: this.props.toggleDropdown,
                              }),
                            o = new CKEDITOR.dom.element("div");
                          return (
                            t && t.call(this, n, { element: o, keys: {} }),
                            a.default.createElement(
                              u.default,
                              { onDismiss: this.props.toggleDropdown },
                              a.default.createElement("div", {
                                className: o.getAttribute("class"),
                                dangerouslySetInnerHTML: {
                                  __html: o.getHtml(),
                                },
                              })
                            )
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(a.default.Component)),
              (n.contextType = l.default),
              (n.displayName = e),
              (n.key = e),
              (o = t),
              (AlloyEditor.Buttons[e] = o)),
            o
          );
        }),
        CKEDITOR.plugins.get("panelmenubutton") ||
          ((CKEDITOR.UI_PANELBUTTON = "panelmenubutton"),
          CKEDITOR.plugins.add("panelmenubutton", {})),
        CKEDITOR.plugins.get("panelbutton") ||
          ((CKEDITOR.UI_PANELBUTTON = "panelbutton"),
          CKEDITOR.plugins.add("panelbutton", {})),
        CKEDITOR.plugins.add("ae_panelmenubuttonbridge", {
          requires: ["ae_uibridge"],
          beforeInit: function (e) {
            (r[e.name] = {}),
              (e.ui.addPanelMenuButton = function (e, t) {
                this.add(e, CKEDITOR.UI_PANELBUTTON, t);
              }),
              e.ui.addHandler(CKEDITOR.UI_PANELBUTTON, {
                add: o,
                create: function (e) {
                  var t =
                    "panelMenuButtonBridge" + ((1e9 * Math.random()) >>> 0);
                  return new (o(t, e))();
                },
              });
          },
        }));
    },
    function (e, t, n) {
      "use strict";
      var r,
        o,
        i = function (e, t, n) {
          return t && c(e.prototype, t), n && c(e, n), e;
        },
        a = d(n(0)),
        l = d(n(2)),
        u = d(n(12)),
        s = d(n(1));
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      CKEDITOR.plugins.get("ae_richcombobridge") ||
        ((r = {}),
        (o = function (e, t, n) {
          var o,
            c,
            d = AlloyEditor.Buttons[e];
          return (
            (r[n.name] = r[n.name] || {}),
            (r[n.name][e] = r[n.name][e] || t),
            (r[n.name][e].currentValue = void 0),
            d ||
              ((c = o =
                (function (o) {
                  function l(t) {
                    if (!(this instanceof l))
                      throw new TypeError("Cannot call a class as a function");
                    var o = (function (e, t) {
                      if (e)
                        return !t ||
                          ("object" != typeof t && "function" != typeof t)
                          ? e
                          : t;
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    })(
                      this,
                      (l.__proto__ || Object.getPrototypeOf(l)).call(this, t)
                    );
                    return (
                      (o._onClick = function (t) {
                        var n = o.context.editor.get("nativeEditor"),
                          i = r[n.name][e];
                        i.onClick &&
                          ((t = t.currentTarget.getAttribute("data-value")),
                          i.onClick.call(o, t),
                          (r[n.name][e].currentValue = t),
                          n.fire("actionPerformed", o));
                      }),
                      (o.state = { value: r[n.name][e].currentValue }),
                      o
                    );
                  }
                  var c = l;
                  if ("function" != typeof o && null !== o)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof o
                    );
                  return (
                    (c.prototype = Object.create(o && o.prototype, {
                      constructor: {
                        value: c,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                    o &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(c, o)
                        : (c.__proto__ = o)),
                    i(l, [
                      { key: "commit", value: function () {} },
                      { key: "createPanel", value: function () {} },
                      { key: "disable", value: function () {} },
                      { key: "enable", value: function () {} },
                      { key: "getState", value: function () {} },
                      { key: "hideGroup", value: function () {} },
                      { key: "hideItem", value: function () {} },
                      { key: "mark", value: function () {} },
                      { key: "showAll", value: function () {} },
                      { key: "startGroup", value: function () {} },
                      { key: "unmarkAll", value: function () {} },
                      {
                        key: "add",
                        value: function (e, t, n) {
                          this._items.push({ preview: t, title: n, value: e });
                        },
                      },
                      {
                        key: "componentWillMount",
                        value: function () {
                          var t = this.context.editor.get("nativeEditor");
                          t = r[t.name][e];
                          (this._items = []),
                            (this.setValue = this._setValue),
                            t.init && t.init.call(this),
                            t.onRender && t.onRender.call(this);
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this._cacheValue(this.state.value),
                            (this.setValue = this._cacheValue);
                        },
                      },
                      {
                        key: "getValue",
                        value: function () {
                          return this.state.value;
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var n = this.context.editor.get("nativeEditor");
                          n = r[n.name][e].currentValue || t.label;
                          return a.default.createElement(
                            "div",
                            {
                              className:
                                "ae-container-dropdown ae-has-dropdown",
                            },
                            a.default.createElement(
                              "button",
                              {
                                "aria-expanded": this.props.expanded,
                                "aria-label": n,
                                className: "ae-toolbar-element",
                                onClick: this.props.toggleDropdown,
                                role: "combobox",
                                tabIndex: this.props.tabIndex,
                                title: n,
                              },
                              a.default.createElement(
                                "div",
                                { className: "ae-container" },
                                a.default.createElement(
                                  "span",
                                  {
                                    className:
                                      "ae-container-dropdown-selected-item",
                                  },
                                  n
                                ),
                                a.default.createElement(s.default, {
                                  symbol: "caret-bottom",
                                })
                              )
                            ),
                            this.props.expanded &&
                              a.default.createElement(
                                u.default,
                                { onDismiss: this.props.toggleDropdown },
                                this._getItems()
                              )
                          );
                        },
                      },
                      {
                        key: "_cacheValue",
                        value: function (t) {
                          var n = this.context.editor.get("nativeEditor");
                          r[n.name][e].currentValue = t;
                        },
                      },
                      {
                        key: "_getItems",
                        value: function () {
                          var e = this,
                            t = this;
                          return this._items.map(function (n) {
                            var r =
                              "ae-toolbar-element " +
                              (n.value === e.state.value ? "active" : "");
                            return a.default.createElement(
                              "li",
                              { key: n.title, role: "option" },
                              a.default.createElement("button", {
                                className: r,
                                dangerouslySetInnerHTML: { __html: n.preview },
                                "data-value": n.value,
                                onClick: t._onClick,
                              })
                            );
                          });
                        },
                      },
                      {
                        key: "_setValue",
                        value: function (e) {
                          this._cacheValue(e), this.setState({ value: e });
                        },
                      },
                    ]),
                    l
                  );
                })(a.default.Component)),
              (o.contextType = l.default),
              (o.displayName = e),
              (o.key = e),
              (d = c),
              (AlloyEditor.Buttons[e] = d)),
            d
          );
        }),
        CKEDITOR.plugins.get("richcombo") ||
          ((CKEDITOR.UI_RICHCOMBO = "richcombo"),
          CKEDITOR.plugins.add("richcombo", {})),
        CKEDITOR.plugins.add("ae_richcombobridge", {
          requires: ["ae_uibridge"],
          beforeInit: function (e) {
            (r[e.name] = {}),
              (e.ui.addRichCombo = function (e, t) {
                this.add(e, CKEDITOR.UI_RICHCOMBO, t);
              }),
              e.ui.addHandler(CKEDITOR.UI_RICHCOMBO, {
                add: o,
                create: function (e) {
                  var t = "richComboBridge" + ((1e9 * Math.random()) >>> 0);
                  return new (o(t, e))();
                },
              });
          },
        }));
    },
    function (e, t, n) {
      "use strict";
      CKEDITOR.plugins.get("ae_uibridge") ||
        CKEDITOR.plugins.add("ae_uibridge", {
          beforeInit: function (e) {
            var t = e.ui.add;
            e.ui.add = function (n, r, o) {
              t.call(this, n, r, o),
                (r = this._.handlers[r]) &&
                  r.add &&
                  (r.add(n, o, e),
                  AlloyEditor.registerBridgeButton(
                    n,
                    e.__processingPlugin__.plugin.name
                  ));
            };
          },
        });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.removeImageCommand = void 0);
      n = (n = n(150)) && n.__esModule ? n : { default: n };
      t.removeImageCommand = n.default;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          exec: function (e) {
            var t, n, r;
            (e = e.getSelection()) &&
              ((n = e.getRanges()[0].startContainer),
              (t = new CKEDITOR.dom.range(n)).setStart(n, 0),
              t.setEnd(n, 0),
              (n = e.getSelectedElement()) &&
                "img" === n.getName() &&
                ((r = e.getNative()) && r.removeAllRanges(),
                e.selectRanges([t]),
                n.remove()));
          },
        });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = s(n(7)),
        o = s(n(0)),
        i = s(n(6)),
        a = s(n(2)),
        l = s(n(18));
      n = s(n(10));
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (function (e) {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          var n = (function (e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n._onDismissToolbarFocus = function () {
              n.context.editor.get("nativeEditor").focus();
            }),
            (n.state = { hidden: !1 }),
            n
          );
        }
        var n = t;
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        return (
          (n.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e)),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this,
                  t = this.context.editor.get("nativeEditor");
                t.on("editorInteraction", this._onEditorInteraction, this),
                  t.on("actionPerformed", this._onActionPerformed, this),
                  t.on("key", this._onEditorKey, this),
                  (this._mousedownListener = function (t) {
                    e._setUIHidden(t.target);
                  }),
                  (this._keyDownListener = CKEDITOR.tools.debounce(
                    function (t) {
                      e._setUIHidden(document.activeElement);
                    },
                    this.props.eventsDelay,
                    this
                  )),
                  document.addEventListener(
                    "mousedown",
                    this._mousedownListener
                  ),
                  document.addEventListener("keydown", this._keyDownListener);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e, t) {
                var n = i.default.findDOMNode(this),
                  r = this.context.editor.get("nativeEditor");
                n &&
                  r.fire("ariaUpdate", {
                    message: this._getAvailableToolbarsMessage(n),
                  }),
                  r.fire("editorUpdate", {
                    prevProps: e,
                    prevState: t,
                    props: this.props,
                    state: this.state,
                  });
              },
            },
            {
              key: "_getAriaUpdateTemplate",
              value: function (e) {
                return (
                  this._ariaUpdateTemplates || (this._ariaUpdateTemplates = {}),
                  this._ariaUpdateTemplates[e] ||
                    (this._ariaUpdateTemplates[e] = new CKEDITOR.template(
                      this._getAriaUpdates()[e]
                    )),
                  this._ariaUpdateTemplates[e]
                );
              },
            },
            {
              key: "_getAriaUpdates",
              value: function () {
                return (
                  this.props.ariaUpdates || {
                    noToolbar: AlloyEditor.Strings.ariaUpdateNoToolbar,
                    oneToolbar: AlloyEditor.Strings.ariaUpdateOneToolbar,
                    manyToolbars: AlloyEditor.Strings.ariaUpdateManyToolbars,
                  }
                );
              },
            },
            {
              key: "_getAvailableToolbarsMessage",
              value: function (e) {
                var t;
                return (e = e.querySelectorAll('[role="toolbar"]')).length
                  ? ((t =
                      1 ===
                      (e = Array.prototype.slice.call(e).map(function (e) {
                        return e.getAttribute("aria-label");
                      })).length
                        ? "oneToolbar"
                        : "manyToolbars"),
                    this._getAriaUpdateTemplate(t).output({
                      toolbars: e.join(",").replace(/,([^,]*)$/, " and $1"),
                    }))
                  : this._getAriaUpdates().noToolbar;
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this._mousedownListener &&
                  document.removeEventListener(
                    "mousedown",
                    this._mousedownListener
                  ),
                  this._keyDownListener &&
                    (this._keyDownListener.detach &&
                      this._keyDownListener.detach(),
                    document.removeEventListener(
                      "keydown",
                      this._keyDownListener
                    ));
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                if (this.state.hidden) return null;
                var t = Object.keys(this.props.toolbars).map(function (e) {
                  return AlloyEditor.Toolbars[e] || window[e];
                });
                t = this.filterExclusive(t).map(function (t) {
                  var n = e.mergeExclusiveProps(
                    {
                      config: e.props.toolbars[t.key],
                      editor: e.context.editor,
                      editorEvent: e.state.editorEvent,
                      key: t.key,
                      onDismiss: e._onDismissToolbarFocus,
                      selectionData: e.state.selectionData,
                    },
                    t.key
                  );
                  return o.default.createElement(t, n);
                });
                return o.default.createElement(
                  "div",
                  { className: "ae-toolbars", onKeyDown: this.handleKey },
                  t
                );
              },
            },
            {
              key: "_onActionPerformed",
              value: function (e) {
                var t = this.context.editor.get("nativeEditor");
                t.focus(),
                  this.setState({
                    itemExclusive: null,
                    selectionData: t.getSelectionData(),
                  });
              },
            },
            {
              key: "_onEditorInteraction",
              value: function (e) {
                this.setState({
                  editorEvent: e,
                  hidden: !1,
                  itemExclusive: null,
                  selectionData: e.data.selectionData,
                });
              },
            },
            {
              key: "_onEditorKey",
              value: function (e) {
                (e = e.data.domEvent.$).altKey &&
                  121 === e.keyCode &&
                  this.focus();
              },
            },
            {
              key: "_setUIHidden",
              value: function (e) {
                var t,
                  n,
                  r,
                  o = i.default.findDOMNode(this);
                o &&
                  ((t = this.context.editor.get("nativeEditor").editable()),
                  (n = e.parentNode),
                  (r = new CKEDITOR.dom.node(e)),
                  t
                    ? ((e =
                        t.$ === e ||
                        t.contains(r) ||
                        new CKEDITOR.dom.element(o).contains(r)),
                      (e = n ? e || "ckimgrsz" === n.id : e) ||
                        this.setState({ hidden: !0 }))
                    : this.setState({ hidden: !0 }));
              },
            },
          ]),
          t
        );
      })(o.default.Component);
      (c.contextType = a.default),
        (c.defaultProps = {
          circular: !0,
          descendants: "[class^=ae-toolbar-]",
          eventsDelay: 0,
          keys: { next: 9 },
        }),
        (c.propTypes = {
          ariaUpdates: r.default.object,
          eventsDelay: r.default.number,
          toolbars: r.default.object.isRequired,
        }),
        (t.default = (0, l.default)((0, n.default)(c)));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(n(39)),
        o = i(n(5));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        a.superclass.constructor.call(this, e), this.init(e);
      }
      (0, i(n(22)).default)(a, r.default, {
        init: function (e) {
          this._callChain("initializer", e);
        },
        destroy: function () {
          this._callChain("destructor");
        },
        _callChain: function (e, t) {
          for (var n = [], r = this.constructor; r; )
            o.default.isFunction(r.prototype[e]) && n.push(r.prototype[e]),
              (r = r.superclass ? r.superclass.constructor : null);
          (n = n.reverse()), (t = o.default.isArray(t) ? t : [t]);
          for (var i = 0; i < n.length; i++) n[i].apply(this, t);
        },
      }),
        (t.default = a);
    },
    function (e, t) {
      e.exports = "2.14.10";
    },
  ])
);
