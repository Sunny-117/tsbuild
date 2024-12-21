"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[511],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6486:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(8957),a=(t(9496),t(9613));const l={sidebar_position:2},i="external",o={unversionedId:"basic/external",id:"basic/external",title:"external",description:"CLI\u652f\u6301\u4e24\u79cd\u529f\u80fd\uff1a",source:"@site/docs/basic/external.md",sourceDirName:"basic",slug:"/basic/external",permalink:"/tsbuild/docs/basic/external",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5165\u53e3\u5904\u7406",permalink:"/tsbuild/docs/basic/entry"},next:{title:"\u81ea\u5b9a\u4e49\u914d\u7f6e",permalink:"/tsbuild/docs/basic/custom_config"}},s={},p=[{value:"tsbuild \u4e0e tsbuild-node",id:"tsbuild-\u4e0e-tsbuild-node",level:2},{value:"\u8fc7\u6ee4 dependencies/peerDependencies \u4e0e external \u4f9d\u8d56",id:"\u8fc7\u6ee4-dependenciespeerdependencies-\u4e0e-external-\u4f9d\u8d56",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"external"},"external"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CLI"),"\u652f\u6301\u4e24\u79cd\u529f\u80fd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"tsbuild: \u6784\u5efa\u9664\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"dependencies"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"peerDependencies"),"\u5916\u7684\u4f9d\u8d56\uff1b"),(0,a.kt)("li",{parentName:"ol"},"tsbuild-node: \u9664\u4e86\u4e0d\u6784\u5efa",(0,a.kt)("inlineCode",{parentName:"li"},"dependencies"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"peerDependencies"),"\u7684\u4f9d\u8d56\u5916\uff0c\u8fd8\u53ef\u4ee5\u8df3\u8fc7\u6240\u6709\u7684 Node.js \u4f9d\u8d56\u5305\uff1b")),(0,a.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u9ed8\u8ba4\u7684\u4f7f\u7528\u5916\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"--external"),"\u907f\u514d\u6253\u7279\u5b9a\u7684\u5305\u3002"),(0,a.kt)("h2",{id:"tsbuild-\u4e0e-tsbuild-node"},"tsbuild \u4e0e tsbuild-node"),(0,a.kt)("p",null,"\u5176\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u6307\u5b9a\u7279\u5b9a CLI \u5165\u53e3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"bin": {\n  "tsbuild": "dist/cli-default.js",\n  "tsbuild-node": "dist/cli-node.js"\n}\n')),(0,a.kt)("p",null,"\u4e24\u8005\u533a\u522b\u5728\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"tsbuild-node"),"\u4f20\u5165\u4e86\u4ee5\u4e0b option\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"skipNodeModulesBundle: true,\n")),(0,a.kt)("p",null,"\u6b64\u5904\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"esbuild"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"external"),"\u4e0d\u652f\u6301\u6b63\u5219\uff0c\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"externalPlugin"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Plugin } from \'esbuild\'\nimport { match, tsconfigPathsToRegExp } from \'bundle-require\'\n\n// Must not start with "/" or "./" or "../" or "C:\\" or be the exact strings ".." or "."\nconst NON_NODE_MODULE_RE = /^[A-Z]:[\\\\/]|^\\.{0,2}\\/|^\\.{1,2}$/\n\nexport function externalPlugin({\n  external,\n  noExternal,\n  skipNodeModulesBundle,\n  tsconfigResolvePaths,\n}: {\n  external?: (string | RegExp)[]\n  noExternal?: (string | RegExp)[]\n  skipNodeModulesBundle?: boolean\n  tsconfigResolvePaths?: Record<string, string[]>\n}): Plugin {\n  return {\n    name: `external`,\n\n    setup(build) {\n      if (skipNodeModulesBundle) {\n        const resolvePatterns = tsconfigPathsToRegExp(tsconfigResolvePaths || {})\n        build.onResolve({ filter: /.*/ }, (args) => {\n          // Resolve `paths` from tsconfig\n          if (match(args.path, resolvePatterns)) {\n            return\n          }\n          // Respect explicit external/noExternal conditions\n          if (match(args.path, noExternal)) {\n            return\n          }\n          if (match(args.path, external)) {\n            return { external: true }\n          }\n          // Exclude any other import that looks like a Node module\n          if (!NON_NODE_MODULE_RE.test(args.path)) {\n            return {\n              path: args.path,\n              external: true,\n            }\n          }\n        })\n      }\n      else {\n        build.onResolve({ filter: /.*/ }, (args) => {\n          // Respect explicit external/noExternal conditions\n          if (match(args.path, noExternal)) {\n            return\n          }\n          if (match(args.path, external)) {\n            return { external: true }\n          }\n        })\n      }\n    },\n  }\n}\n')),(0,a.kt)("p",null,"\u5176\u4e2d\uff0c\u9488\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"skipNodeModulesBundle"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u7684\u60c5\u51b5\u4e0b\uff0c\u989d\u5916\u8fc7\u6ee4",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig"),"\u4e2d\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"\u7684\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const resolvePatterns = tsconfigPathsToRegExp(tsconfigResolvePaths || {})\n\nif (match(args.path, resolvePatterns)) {\n\n}\n")),(0,a.kt)("h2",{id:"\u8fc7\u6ee4-dependenciespeerdependencies-\u4e0e-external-\u4f9d\u8d56"},"\u8fc7\u6ee4 dependencies/peerDependencies \u4e0e external \u4f9d\u8d56"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u5bf9\u5e94\u4f9d\u8d56")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const external = [\n  // Exclude dependencies, e.g. `lodash`, `lodash/get`\n  ...deps.map((dep) => new RegExp(`^${dep}($|\\\\/|\\\\\\\\)`)),\n  ...(await generateExternal(options.external || [])),\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u8981",(0,a.kt)("inlineCode",{parentName:"li"},"external"),"\u7684\u4f9d\u8d56\u9879\uff0c\u5148\u5904\u7406",(0,a.kt)("inlineCode",{parentName:"li"},"options.external"),"\u9009\u9879\u4e2d\u7684\u4f9d\u8d56\uff0c\u5904\u7406\u5b8c\u540e\u9ed8\u8ba4\u8fc7\u6ee4\u7ebf\u4e0a\u4f9d\u8d56\u9879")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Support to exclude special package.json\n */\nasync function generateExternal(external: (string | RegExp)[]) {\n  const result: (string | RegExp)[] = []\n\n  for (const item of external) {\n    if (typeof item !== 'string' || !item.endsWith('package.json')) {\n      result.push(item)\n      continue\n    }\n\n    const pkgPath: string = path.isAbsolute(item)\n      ? path.dirname(item)\n      : path.dirname(path.resolve(process.cwd(), item))\n\n    const deps = await getProductionDeps(pkgPath)\n    result.push(...deps)\n  }\n\n  return result\n}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u83b7\u53d6",(0,a.kt)("inlineCode",{parentName:"li"},"dependencies"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"peerDependencies"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/*\n * Production deps should be excluded from the bundle\n */\nexport async function getProductionDeps(cwd: string, clearCache: boolean = false) {\n  const data = await loadPkg(cwd, clearCache)\n\n  const deps = Array.from(\n    new Set([...Object.keys(data.dependencies || {}), ...Object.keys(data.peerDependencies || {})]),\n  )\n\n  return deps\n}\n")))}u.isMDXComponent=!0}}]);