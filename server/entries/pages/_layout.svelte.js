import "clsx";
import { s as setContext, n as getContext, q as attr_class, t as stringify, u as ensure_array_like, v as spread_attributes, w as clsx, x as element, m as pop, p as push, y as spread_props } from "../../chunks/index.js";
function createContext(defaultValue) {
  var key = Symbol();
  var set = function(value) {
    return setContext(key, value);
  };
  var get = function() {
    var _a2;
    return (_a2 = getContext(key)) !== null && _a2 !== void 0 ? _a2 : defaultValue;
  };
  return [set, get, key];
}
var _a$3;
_a$3 = createContext(), _a$3[0];
_a$3[1];
_a$3[2];
function AppBar($$payload, $$props) {
  const {
    // Root
    base = "w-full flex flex-col",
    background = "bg-surface-100-900",
    spaceY = "space-y-4",
    border = "",
    padding = "p-4",
    shadow = "",
    classes = "",
    // Toolbar
    toolbarBase = "flex justify-between",
    toolbarGridCols = "grid-cols-[auto_1fr_auto]",
    toolbarGap = "gap-4",
    toolbarClasses = "",
    // Lead
    leadBase = "flex",
    leadSpaceX = "space-x-4 rtl:space-x-reverse",
    leadPadding = "",
    leadClasses = "",
    // Center
    centerBase = "grow",
    centerAlign = "text-center",
    centerPadding = "",
    centerClasses = "",
    // Trail
    trailBase = "flex",
    trailSpaceX = "space-x-4 rtl:space-x-reverse",
    trailPadding = "",
    trailClasses = "",
    // Headline
    headlineBase = "w-full",
    headlineClasses = "",
    // Snippets
    children,
    lead,
    trail,
    headline
  } = $$props;
  $$payload.out += `<header${attr_class(`${stringify(base)} ${stringify(background)} ${stringify(spaceY)} ${stringify(border)} ${stringify(padding)} ${stringify(shadow)} ${stringify(classes)}`)} role="toolbar" data-testid="app-bar"><section${attr_class(`${stringify(toolbarBase)} ${stringify(toolbarGridCols)} ${stringify(toolbarGap)} ${stringify(toolbarClasses)}`)} data-testid="app-bar-toolbar">`;
  if (lead) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_class(`${stringify(leadBase)} ${stringify(leadSpaceX)} ${stringify(leadPadding)} ${stringify(leadClasses)}`)}>`;
    lead($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (children) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_class(`${stringify(centerBase)} ${stringify(centerAlign)} ${stringify(centerPadding)} ${stringify(centerClasses)}`)}>`;
    children($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (trail) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_class(`${stringify(trailBase)} ${stringify(trailSpaceX)} ${stringify(trailPadding)} ${stringify(trailClasses)}`)}>`;
    trail($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section> `;
  if (headline) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<section${attr_class(`${stringify(headlineBase)} ${stringify(headlineClasses)}`)} data-testid="app-bar-headline">`;
    headline($$payload);
    $$payload.out += `<!----></section>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></header>`;
}
var _a$2;
_a$2 = createContext({
  parent: "none",
  value: "",
  expanded: false
}), _a$2[0];
_a$2[1];
_a$2[2];
var _a$1;
_a$1 = createContext({
  api: {},
  indicatorText: ""
}), _a$1[0];
_a$1[1];
_a$1[2];
var _a;
_a = createContext({
  fluid: false,
  api: {}
}), _a[0];
_a[1];
_a[2];
/**
 * @license @lucide/svelte v0.511.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  push();
  const {
    name,
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    children,
    $$slots,
    $$events,
    ...props
  } = $$props;
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...props,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: clsx([
        "lucide-icon lucide",
        name && `lucide-${name}`,
        props.class
      ])
    },
    null,
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out += `${spread_attributes({ ...attrs }, null, void 0, void 0, 3)}`;
    });
  }
  $$payload.out += `<!--]-->`;
  children?.($$payload);
  $$payload.out += `<!----></svg>`;
  pop();
}
function Arrow_left($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "m12 19-7-7 7-7" }],
    ["path", { "d": "M19 12H5" }]
  ];
  Icon($$payload, spread_props([
    { name: "arrow-left" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Paperclip($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M13.234 20.252 21 12.3" }],
    [
      "path",
      {
        "d": "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "paperclip" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Calendar($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M8 2v4" }],
    ["path", { "d": "M16 2v4" }],
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "4",
        "rx": "2"
      }
    ],
    ["path", { "d": "M3 10h18" }]
  ];
  Icon($$payload, spread_props([
    { name: "calendar" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Circle_user($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    [
      "circle",
      { "cx": "12", "cy": "10", "r": "3" }
    ],
    [
      "path",
      {
        "d": "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "circle-user" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Menu($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M4 12h16" }],
    ["path", { "d": "M4 18h16" }],
    ["path", { "d": "M4 6h16" }]
  ];
  Icon($$payload, spread_props([
    { name: "menu" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="min-h-screen flex flex-col bg-green-200">`;
  {
    let lead = function($$payload2) {
      Arrow_left($$payload2, {});
    }, trail = function($$payload2) {
      $$payload2.out += `<div class="hidden space-x-4 sm:flex">`;
      Paperclip($$payload2, { size: 20 });
      $$payload2.out += `<!----> `;
      Calendar($$payload2, { size: 20 });
      $$payload2.out += `<!----> `;
      Circle_user($$payload2, { size: 20 });
      $$payload2.out += `<!----></div> <div class="block sm:hidden">`;
      Menu($$payload2, { size: 20 });
      $$payload2.out += `<!----></div>`;
    }, headline = function($$payload2) {
      $$payload2.out += `<h2 class="h2">Step Fish</h2>`;
    };
    AppBar($$payload, {
      headlineClasses: "sm:hidden",
      centerClasses: "hidden sm:block",
      lead,
      trail,
      headline,
      children: ($$payload2) => {
        $$payload2.out += `<span>Step Fish</span>`;
      }
    });
  }
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
