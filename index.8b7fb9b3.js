// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cSv3F":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "21352e468b7fb9b3";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3auaO":[function(require,module,exports) {
var _increaseScore = require("./increaseScore");
var _multiplier = require("./multiplier");
var _autoClicker = require("./autoClicker");
var _boost = require("./boost");
var _activateBonus = require("./activateBonus");
var _domElements = require("./domElements");
/*
----------------
VARIABLES
----------------
*/ let score = 0;
let timer = 0;
let pointsPerClick = 1;
const BOOST_BONUS_DURATION = 30;
/*
----------------
EVENT LISTENERS
----------------
*/ // Increase score 
_domElements.ramClicker.addEventListener("click", ()=>{
    score = _increaseScore.increaseScore(score, pointsPerClick, _domElements.scoreDisplay);
    _activateBonus.activateBonus(score);
});
// Mulitplier
// x2
_domElements.multiplierX2Btn.addEventListener("click", ()=>{
    _domElements.notification.textContent = 'Your score is now inscreade by 2 !';
    let multiplierArray = _multiplier.multiplier(score, pointsPerClick, _domElements.scoreDisplay);
    score = multiplierArray[0];
    pointsPerClick = multiplierArray[1];
});
// x5
_domElements.multiplierX5Btn.addEventListener("click", ()=>{
    _domElements.notification.textContent = '';
    _domElements.notification.textContent = 'Your score is now inscreade by 5!';
    let multiplierArray = _multiplier.multiplier(score, pointsPerClick, _domElements.scoreDisplay);
    score = multiplierArray[0];
    pointsPerClick = multiplierArray[1];
});
// x10
_domElements.multiplierX10Btn.addEventListener("click", ()=>{
    _domElements.notification.textContent = '';
    _domElements.notification.textContent = 'Your score is now inscreade by 10!';
    let multiplierArray = _multiplier.multiplier(score, pointsPerClick, _domElements.scoreDisplay);
    score = multiplierArray[0];
    pointsPerClick = multiplierArray[1];
});
// Autoclicker
_domElements.autoClickerBtn.addEventListener("click", ()=>{
    _domElements.notification.textContent = '';
    _domElements.notification.textContent = 'Auto Clicker ON ! Relieves your wrist!';
    if (score >= 200) {
        score -= 200;
        _domElements.scoreDisplay.textContent = score;
        setInterval(()=>{
            score = _autoClicker.autoClicker(score, _domElements.scoreDisplay);
            _activateBonus.activateBonus(score);
        }, 1000);
    }
});
// Autoclicker Overkill
_domElements.autoClickerOverkillBtn.addEventListener("click", ()=>{
    _domElements.notification.textContent = '';
    _domElements.notification.textContent = 'AC Overkill activated! It\'s rrrraining ram, hallelujah';
    if (score >= 500) {
        let OverkillTimer = 0;
        score -= 500;
        _domElements.scoreDisplay.textContent = score;
        let autoClickerOverkillInterval = setInterval(()=>{
            score = _increaseScore.increaseScore(score, pointsPerClick, _domElements.scoreDisplay);
            _activateBonus.activateBonus(score);
            OverkillTimer++;
            if (OverkillTimer >= 300) {
                clearInterval(autoClickerOverkillInterval);
                OverkillTimer = 0;
            }
        }, 100);
    }
});
// Boost
_domElements.boostBtn.addEventListener("click", ()=>{
    _domElements.notification.textContent = '';
    _domElements.notification.textContent = 'Boost activated! Score status : on steroid';
    if (score >= 1000) {
        pointsPerClick = _boost.boost(pointsPerClick);
        score -= 1000;
        _domElements.scoreDisplay.textContent = score;
        let boostInterval = setInterval(()=>{
            timer++;
            if (timer >= BOOST_BONUS_DURATION) {
                clearInterval(boostInterval);
                timer = 0;
                pointsPerClick = pointsPerClick / 200;
            }
        }, 1000);
    }
});
// Title score
let title = document.querySelector("title");
setInterval(()=>{
    if (score >= 1) title.innerText = score + " Gb of ram" + " | " + "Ram Clicker";
}, 7000);

},{"./increaseScore":"dCUl7","./multiplier":"8NDwa","./autoClicker":"e02yS","./boost":"02ggI","./domElements":"iys9x","./activateBonus":"OOTwR"}],"dCUl7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "increaseScore", ()=>increaseScore
);
const increaseScore = (score, pointsPerClick, scoreDisplay)=>{
    score += pointsPerClick;
    scoreDisplay.textContent = score;
    return score;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8NDwa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "multiplier", ()=>multiplier
);
var _domElements = require("./domElements");
const multiplier = (score, pointsPerClick, scoreDisplay)=>{
    if (score >= 300) {
        score -= 300;
        pointsPerClick = 10;
        scoreDisplay.innerText = score;
        _domElements.upgradesDiv.removeChild(_domElements.multiplierX10Div);
    } else if (score >= 50) {
        score -= 50;
        pointsPerClick = 5;
        scoreDisplay.innerText = score;
        _domElements.upgradesDiv.removeChild(_domElements.multiplierX5Div);
    } else if (score >= 20) {
        score -= 20;
        pointsPerClick = 2;
        scoreDisplay.innerText = score;
        _domElements.upgradesDiv.removeChild(_domElements.multiplierX2Div);
    }
    return [
        score,
        pointsPerClick
    ];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./domElements":"iys9x"}],"iys9x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "game", ()=>game
);
parcelHelpers.export(exports, "notification", ()=>notification
);
parcelHelpers.export(exports, "scoreDisplay", ()=>scoreDisplay
);
parcelHelpers.export(exports, "ramClicker", ()=>ramClicker
);
parcelHelpers.export(exports, "upgradesDiv", ()=>upgradesDiv
);
parcelHelpers.export(exports, "multiplierX5Div", ()=>multiplierX5Div
);
parcelHelpers.export(exports, "multiplierX2Div", ()=>multiplierX2Div
);
parcelHelpers.export(exports, "multiplierX10Div", ()=>multiplierX10Div
);
parcelHelpers.export(exports, "autoClickerDiv", ()=>autoClickerDiv
);
parcelHelpers.export(exports, "autoClickerOverkillDiv", ()=>autoClickerOverkillDiv
);
parcelHelpers.export(exports, "boostDiv", ()=>boostDiv
);
parcelHelpers.export(exports, "multiplierX2Btn", ()=>multiplierX2Btn
);
parcelHelpers.export(exports, "multiplierX5Btn", ()=>multiplierX5Btn
);
parcelHelpers.export(exports, "multiplierX10Btn", ()=>multiplierX10Btn
);
parcelHelpers.export(exports, "autoClickerBtn", ()=>autoClickerBtn
);
parcelHelpers.export(exports, "autoClickerOverkillBtn", ()=>autoClickerOverkillBtn
);
parcelHelpers.export(exports, "boostBtn", ()=>boostBtn
);
const game = document.querySelector('.game');
const notification = document.querySelector('.notification');
const scoreDisplay = document.querySelector('.score-display');
const ramClicker = document.querySelector("#ramClick");
const upgradesDiv = document.querySelector('.upgrades');
const multiplierX5Div = document.querySelector(".multiplierX5-upgrade");
const multiplierX2Div = document.querySelector(".multiplierX2-upgrade");
const multiplierX10Div = document.querySelector(".multiplierX10-upgrade");
const autoClickerDiv = document.querySelector('.auto-clicker-upgrade');
const autoClickerOverkillDiv = document.querySelector('.auto-clicker-overkill-upgrade');
const boostDiv = document.querySelector('.boost-upgrade');
const multiplierX2Btn = document.querySelector("#x2");
const multiplierX5Btn = document.querySelector("#x5");
const multiplierX10Btn = document.querySelector("#x10");
const autoClickerBtn = document.querySelector("#auto-clicker");
const autoClickerOverkillBtn = document.querySelector("#auto-clicker-overkill");
const boostBtn = document.querySelector("#boost");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e02yS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "autoClicker", ()=>autoClicker
);
const autoClicker = (score, scoreDisplay)=>{
    score++;
    scoreDisplay.textContent = score;
    return score;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"02ggI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "boost", ()=>boost
);
const boost = (pointsPerClick)=>{
    pointsPerClick *= 200;
    return pointsPerClick;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"OOTwR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "activateBonus", ()=>activateBonus
);
var _domElements = require("./domElements");
const addStyleToBonusBtn = (bonusBtn)=>{
    bonusBtn.removeAttribute("disabled");
    bonusBtn.classList.remove('upgrade-inactive');
    bonusBtn.classList.add("upgrade-active");
};
const activateBonus = (score)=>{
    if (score >= 1000) addStyleToBonusBtn(_domElements.boostBtn);
    if (score >= 500) addStyleToBonusBtn(_domElements.autoClickerOverkillBtn);
    if (score >= 300) addStyleToBonusBtn(_domElements.multiplierX10Btn);
    if (score >= 200) addStyleToBonusBtn(_domElements.autoClickerBtn);
    if (score >= 50) addStyleToBonusBtn(_domElements.multiplierX5Btn);
    if (score >= 20) addStyleToBonusBtn(_domElements.multiplierX2Btn);
};

},{"./domElements":"iys9x","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["cSv3F","3auaO"], "3auaO", "parcelRequire8933")

//# sourceMappingURL=index.8b7fb9b3.js.map
