(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,a,t){"use strict";t.r(a);t(12);var n=t(0),c=t.n(n),r=t(179),s=t(175);a.default=function(e){const{tags:a}=e,t={};Object.keys(a).forEach(e=>{const a=function(e){return e[0].toUpperCase()}(e);t[a]=t[a]||[],t[a].push(e)});const n=Object.entries(t).sort(([e],[a])=>e===a?0:e>a?1:-1).map(([e,t])=>c.a.createElement("div",{key:e},c.a.createElement("h3",null,e),t.map(e=>c.a.createElement(s.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")),c.a.createElement("hr",null))).filter(e=>null!=e);return c.a.createElement(r.a,{title:"Tags",description:"Blog Tags"},c.a.createElement("div",{className:"container margin-vert--lg"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--8 col--offset-2"},c.a.createElement("h1",null,"Tags"),c.a.createElement("div",{className:"margin-vert--lg"},n)))))}},180:function(e,a,t){"use strict";t(12);var n=t(0),c=t.n(n),r=t(174),s=t.n(r),l=t(173),o=t(176),i=t(177);t(93);a.a=e=>{const[a,r]=Object(n.useState)(!1),d=Object(n.useRef)(null),{siteConfig:u={}}=Object(l.a)(),{themeConfig:{algolia:h}}=u,p=Object(o.b)(),{navigateToSearchPage:m}=Object(i.a)();const b=(e=!0)=>{a||Promise.all([Promise.all([t.e(4),t.e(71)]).then(t.t.bind(null,181,7)),t.e(44).then(t.t.bind(null,182,7))]).then(([{default:a}])=>{r(!0),window.docsearch=a,function(e){window.docsearch({appId:h.appId,apiKey:h.apiKey,indexName:h.indexName,inputSelector:"#search_input_react",algoliaOptions:h.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1},handleSelected:(e,a,t)=>{a.stopPropagation();const n=document.createElement("a");n.href=t.url;const c="#__docusaurus"===n.hash?""+n.pathname:`${n.pathname}${n.hash}`;p.push(c)}}),e&&d.current.focus()}(e)})},g=Object(n.useCallback)(()=>{b(),a&&d.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),E=Object(n.useCallback)(()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),f=Object(n.useCallback)(e=>{const a="mouseover"!==e.type;b(a)}),v=Object(n.useCallback)(e=>{e.defaultPrevented||"Enter"!==e.key||m(e.target.value)});return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:g,onKeyDown:g,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:f,onFocus:f,onBlur:E,onKeyDown:v,ref:d}))}}}]);