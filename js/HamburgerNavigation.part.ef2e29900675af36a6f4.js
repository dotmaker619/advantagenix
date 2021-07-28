(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    "/2+P": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = o(a("gH0c")),
        s = o(a("cZAH")),
        r = o(a("gtXx")),
        i = o(a("nvnZ")),
        l = o(a("7t8R"));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      var u = function e() {
        var t = this;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          c(this, "isMenuOpen", function () {
            return t.globalHeader.classList.contains(t.constants.openMenu);
          }),
          c(
            this,
            "handleTabFocus",
            (0, s.default)(function (e) {
              e
                ? (t.focusTrap.activate(),
                  i.default.on("modal-opened", t.focusTrap.pause),
                  i.default.on("modal-closed", t.focusTrap.unpause))
                : (t.focusTrap.deactivate(),
                  i.default.off("modal-opened", t.focusTrap.pause),
                  i.default.off("modal-closed", t.focusTrap.unpause));
            }, 100)
          ),
          c(this, "resetTabIndex", function () {
            t.hamburgerNavigation
              .querySelectorAll(t.constants.tabIndex)
              .forEach(function (e) {
                return e.setAttribute("tabindex", 0);
              });
          }),
          c(this, "toggleHamburger", function () {
            t.handleCurrentPage(),
              t.globalHeader.classList.toggle(t.constants.openMenu);
            var e = t.isMenuOpen();
            e || (t.resetActiveState(), t.resetTabIndex()),
              (0, n.default)(e),
              t.hamburgerContainer.setAttribute("aria-hidden", !e),
              t.handleTabFocus(e);
          }),
          c(this, "handleCurrentPage", function () {
            var e = t.objects.currentPage.length;
            (t.level = 1),
              "large" === (0, l.default)() &&
                ((t.level = 2),
                !e &&
                  t.objects.firstNavItem.classList.add(
                    t.constants.activeListClass
                  )),
              e && (t.level = e),
              t.hamburgerContainer.setAttribute(t.constants.dataLevel, t.level),
              t.objects.currentPage.forEach(function (a, n) {
                a.classList.add(t.constants.activeListClass),
                  n !== e - 1 && t.handleTabIndex(a, -1);
              });
          }),
          c(this, "handleTabIndex", function (e, a) {
            if ("large" !== (0, l.default)()) {
              for (var n, s = e; s !== t.hamburgerContainer; ) {
                if (
                  s.classList.contains(t.constants.navWrapper) ||
                  s.classList.contains(t.constants.hamburgerNavigation)
                ) {
                  n = s;
                  break;
                }
                s = s.parentNode;
              }
              if (n)
                n.querySelectorAll(t.selectors.prevLevelSiblings).forEach(
                  function (e) {
                    return e.setAttribute("tabindex", a);
                  }
                );
            }
          }),
          c(this, "levelUp", function (e) {
            var a = e.currentTarget,
              n = a.closest(".".concat(t.constants.hasChildren));
            n &&
              (n.classList.remove(t.constants.activeListClass),
              t.handleTabIndex(n, 0),
              t.setFocusOnLevelChange(a, "previous")),
              (t.level = t.level ? --t.level : 1),
              t.hamburgerContainer.setAttribute(t.constants.dataLevel, t.level);
          }),
          c(this, "resetActiveState", function () {
            t.hamburgerNavigation
              .querySelectorAll(".".concat(t.constants.activeListClass))
              .forEach(function (e) {
                e.classList.remove(t.constants.activeListClass),
                  e.querySelector("a").setAttribute("aria-expanded", !1);
              });
          }),
          c(this, "updateActiveState", function (e) {
            if (e) {
              for (var a = e.parentNode; a !== t.hamburgerNavigation; )
                a.classList.contains(t.constants.hasChildren) &&
                  (a.classList.add(t.constants.activeListClass),
                  a.querySelector("a").setAttribute("aria-expanded", !0)),
                  (a = a.parentNode);
              "large" === (0, l.default)() && (t.level = 2),
                t.hamburgerContainer.setAttribute(
                  t.constants.dataLevel,
                  t.level
                );
            }
          }),
          c(this, "setFocusOnLevelChange", function (e, t) {
            if (e && t) {
              var a = e.closest(".nav-wrapper"),
                n = {
                  previous: a && a.previousElementSibling,
                  next:
                    e.nextElementSibling &&
                    e.nextElementSibling.querySelector(
                      ":scope > .nav-header > .nav-back"
                    ),
                };
              e.nextElementSibling &&
                setTimeout(function () {
                  n[t].focus();
                }, 300);
            }
          }),
          c(this, "handleNavItem", function (e) {
            var a = e.currentTarget;
            return (
              !("large" !== (0, l.default)() || !a.closest(".nav-wrapper")) ||
              (t.resetActiveState(),
              t.level++,
              t.updateActiveState(a),
              t.handleTabIndex(a, -1),
              "large" !== (0, l.default)() &&
                t.setFocusOnLevelChange(a, "next"),
              e.preventDefault(),
              !1)
            );
          }),
          c(this, "addListener", function () {
            t.objects.menuToggles[0].addEventListener(
              "click",
              t.toggleHamburger
            ),
              t.objects.menuToggles[1].addEventListener(
                "click",
                t.toggleHamburger
              ),
              t.objects.navListItems.forEach(function (e) {
                return e.addEventListener("click", t.handleNavItem);
              }),
              t.objects.subItemCloseButtons.forEach(function (e) {
                return e.addEventListener("click", t.levelUp);
              }),
              window.addEventListener("resize", function () {
                "large" === (0, l.default)() &&
                  t.isMenuOpen() &&
                  t.resetTabIndex();
              });
          }),
          c(this, "firstRun", function () {
            t.addListener();
          }),
          c(this, "init", function () {
            t.firstRun();
          }),
          (this.constants = {
            openMenu: "-menu-open",
            activeListClass: "is-active",
            hasChildren: "has-children",
            dataLevel: "data-level",
            tabIndex: 'a[tabIndex="-1"]',
            hamburgerNavigation: "hamburger-navigation",
            navWrapper: "nav-wrapper",
          }),
          (this.selectors = {
            globalHeader: ".global-header",
            hamburgerContainer: ".hamburger-menu",
            menuToggle: ".menu-toggle",
            hamburgerNavigation: ".hamburger-navigation",
            currentPage: ".is-current-page",
            firstNavItem: "ul > li.has-children",
            navListItems: "ul > li.has-children > a",
            subItemCloseButton: ".nav-wrapper .nav-back",
            prevLevelSiblings:
              ":scope > * > ul > li > a, :scope > .nav-header > a, :scope > ul > li > a",
          }),
          (this.globalHeader = document.querySelector(
            this.selectors.globalHeader
          )),
          (this.hamburgerContainer = this.globalHeader.querySelector(
            this.selectors.hamburgerContainer
          )),
          (this.hamburgerNavigation = this.globalHeader.querySelector(
            this.selectors.hamburgerNavigation
          )),
          (this.objects = {
            menuToggles: this.globalHeader.querySelectorAll(
              this.selectors.menuToggle
            ),
            firstNavItem: this.hamburgerNavigation.querySelector(
              this.selectors.firstNavItem
            ),
            navListItems: this.hamburgerNavigation.querySelectorAll(
              this.selectors.navListItems
            ),
            currentPage: this.hamburgerNavigation.querySelectorAll(
              this.selectors.currentPage
            ),
            subItemCloseButtons: this.hamburgerNavigation.querySelectorAll(
              this.selectors.subItemCloseButton
            ),
          }),
          (this.focusTrap = (0, r.default)(this.selectors.globalHeader, {
            escapeDeactivates: !1,
            setReturnFocus: this.objects.menuToggles[0],
            initialFocus: this.objects.menuToggles[1],
          }));
      };
      t.default = u;
    },
  },
]);
