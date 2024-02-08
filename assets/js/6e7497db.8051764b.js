"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[768],{9936:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=s(7624),o=s(2172);const i={sidebar_position:2},r="Custom CSS and Fonts",d={id:"examples/customCss",title:"Custom CSS and Fonts",description:"In this example we will be adding custom css and fonts",source:"@site/docs/examples/customCss.md",sourceDirName:"examples",slug:"/examples/customCss",permalink:"/10tap-editor/docs/examples/customCss",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/customCss.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic example",permalink:"/10tap-editor/docs/examples/basic"},next:{title:"Configure Extensions",permalink:"/10tap-editor/docs/examples/configureExtensions"}},c={},a=[{value:"Adding/Overriding CSS",id:"addingoverriding-css",level:2},{value:"Adding Custom Fonts",id:"adding-custom-fonts",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"custom-css-and-fonts",children:"Custom CSS and Fonts"}),"\n",(0,t.jsx)(n.p,{children:"In this example we will be adding custom css and fonts"}),"\n",(0,t.jsx)(n.h2,{id:"addingoverriding-css",children:"Adding/Overriding CSS"}),"\n",(0,t.jsxs)(n.p,{children:["Each bridge, has gives us the option to ",(0,t.jsx)(n.code,{children:"configureCSS"}),". Some bridges come with css already configured in them, when we can override by configuring.\nLet's give an example by overriding the CodeBridge."]}),"\n",(0,t.jsx)(n.p,{children:"First let's define the css"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const customCodeBlockCSS = `\ncode {\n    background-color: #ffdede;\n    border-radius: 0.25em;\n    border-color: #e45d5d;\n    border-width: 1px;\n    border-style: solid;\n    box-decoration-break: clone;\n    color: #cd4242;\n    font-size: 0.9rem;\n    padding: 0.25em;\n}\n`;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now let's configure the CodeBridge to use this css"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const editor = useEditorBridge({\n  ...,\n  bridgeExtensions: [\n    ...TenTapStartKit,\n    CodeBridge.configureCSS(customCodeBlockCSS), // Custom codeblock css\n  ],\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"adding-custom-fonts",children:"Adding Custom Fonts"}),"\n",(0,t.jsx)(n.p,{children:"Let's add a custom font to our Editor (we can also add custom css)"}),"\n",(0,t.jsx)(n.p,{children:"So first we need to download and convert our font, so we can inject it into the webview:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Upload your font files to ",(0,t.jsx)(n.a,{href:"https://transfonter.org",children:"https://transfonter.org"})," and check the 'base64' option. When you download the zip file, there will be a ",(0,t.jsx)(n.code,{children:"stylesheet.css"})," file there."]}),"\n",(0,t.jsxs)(n.li,{children:["Copy the contents of the ",(0,t.jsx)(n.code,{children:"stylesheet.css"})," into a new ts file and export it as a string."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export const ProtestRiotFont = `\n  font-family: 'Protest Riot';\n  src: url('data:font/woff2;charset=utf-8;base64,..........\n  .......\n`;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now we can use our font as follows"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const customFont = `\n${ProtestRiotFont}\n* {\n    font-family: 'Protest Riot', sans-serif;\n}\n`;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And inside our ",(0,t.jsx)(n.code,{children:"EditorBridge"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const editor = useEditorBridge({\n  bridgeExtensions: [\n    ...TenTapStartKit,\n    CoreBridge.configureCSS(customFont), // Custom font\n  ],\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>r});var t=s(1504);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);