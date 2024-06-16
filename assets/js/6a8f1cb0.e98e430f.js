"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[824],{7800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var i=n(7624),o=n(2172);const d={sidebar_position:2},r="Advanced Setup",s={id:"setup/advancedSetup",title:"Advanced Setup",description:"Make sure you read the core concepts page before setup advance and check if the simple usage is good enough for you.",source:"@site/docs/setup/advancedSetup.md",sourceDirName:"setup",slug:"/setup/advancedSetup",permalink:"/10tap-editor/docs/setup/advancedSetup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/10tap-editor/docs/setup/installation"},next:{title:"useEditorBridge",permalink:"/10tap-editor/docs/api/useEditorBridge"}},a={},l=[{value:"Setting Up Our Custom Editor Directory",id:"setting-up-our-custom-editor-directory",level:2},{value:"Step 1 - creating the directory",id:"step-1---creating-the-directory",level:3},{value:"Step 2 - adding tsconfig",id:"step-2---adding-tsconfig",level:3},{value:"Step 3 - updating root tsconfig",id:"step-3---updating-root-tsconfig",level:3},{value:"Step 4 - Add index.html AdvancedEditor.tsx and index.tsx",id:"step-4---add-indexhtml-advancededitortsx-and-indextsx",level:3},{value:"Step 5 - adding a bundler",id:"step-5---adding-a-bundler",level:3},{value:"Step 6 - adding build scripts",id:"step-6---adding-build-scripts",level:3},{value:"Step 7 - using our custom editor",id:"step-7---using-our-custom-editor",level:3},{value:"Step 8 - Install react-dom",id:"step-8---install-react-dom",level:3},{value:"Alternative Setup",id:"alternative-setup",level:2},{value:"Update vite.config.ts",id:"update-viteconfigts",level:3},{value:"Update package.json",id:"update-packagejson",level:3}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"advanced-setup",children:"Advanced Setup"}),"\n",(0,i.jsx)(t.p,{children:"Make sure you read the core concepts page before setup advance and check if the simple usage is good enough for you."}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-our-custom-editor-directory",children:"Setting Up Our Custom Editor Directory"}),"\n",(0,i.jsx)(t.h3,{id:"step-1---creating-the-directory",children:"Step 1 - creating the directory"}),"\n",(0,i.jsxs)(t.p,{children:["Create a new folder in your project called ",(0,i.jsx)(t.code,{children:"editor-web"})," (or any other name) - advance setup will let you full control on what running inside the editor webview, so we need to create a separate folder that will include code that will run inside the webview and will have different build process and tsconfig"]}),"\n",(0,i.jsx)(t.h3,{id:"step-2---adding-tsconfig",children:"Step 2 - adding tsconfig"}),"\n",(0,i.jsxs)(t.p,{children:["Create ",(0,i.jsx)(t.code,{children:"editor-web/tsconfig.json"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="editor-web/tsconfig.json"',children:'{\n  "$schema": "https://json.schemastore.org/tsconfig",\n  "_version": "2.0.0",\n  "compilerOptions": {\n    "lib": ["dom", "dom.iterable", "esnext"],\n    "module": "esnext",\n    "paths": {\n      "@10play/tentap-editor": [\n        "../node_modules/@10play/tentap-editor/lib-web/typescript/webEditorUtils/index.d.ts"\n      ]\n    },\n    "moduleResolution": "bundler",\n    "target": "es2015",\n    "allowJs": true,\n    "allowSyntheticDefaultImports": true,\n    "esModuleInterop": true,\n    "forceConsistentCasingInFileNames": true,\n    "isolatedModules": true,\n    "jsx": "react-jsx",\n    "noEmit": true,\n    "noFallthroughCasesInSwitch": true,\n    "resolveJsonModule": true,\n    "skipLibCheck": true,\n    "strict": true\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["It's important to configure ",(0,i.jsx)(t.code,{children:"paths"})," so on web the web types will be used instead of native types."]}),"\n",(0,i.jsx)(t.h3,{id:"step-3---updating-root-tsconfig",children:"Step 3 - updating root tsconfig"}),"\n",(0,i.jsxs)(t.p,{children:["Add exclude on the root tsconfig.json: ",(0,i.jsx)(t.code,{children:'"exclude": ["./editor-web"]'})]}),"\n",(0,i.jsx)(t.h3,{id:"step-4---add-indexhtml-advancededitortsx-and-indextsx",children:"Step 4 - Add index.html AdvancedEditor.tsx and index.tsx"}),"\n",(0,i.jsx)(t.p,{children:"Add the following files"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>RichTextEditor</title>\n  </head>\n  <style>\n    body {\n      margin: 0;\n      padding: 0;\n    }\n    #root > div:nth-of-type(1) {\n      overflow: auto;\n      height: 100%;\n      position: absolute;\n      width: 100%;\n      top: 0;\n      bottom: 0;\n    }\n    #root div .ProseMirror {\n      height: 100%;\n      overflow: auto;\n    }\n    .ProseMirror:focus {\n      outline: none;\n    }\n  </style>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/index.tsx"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="AdvancedEditor.tsx"',children:"import React from 'react';\nimport { EditorContent } from '@tiptap/react';\nimport { useTenTap, CoreBridge } from '@10play/tentap-editor';\nimport Document from '@tiptap/extension-document';\nimport Paragraph from '@tiptap/extension-paragraph';\nimport Text from '@tiptap/extension-text';\n\n/**\n * Here we control the web side of our custom editor\n */\nexport const AdvancedEditor = () => {\n  const editor = useTenTap({\n    bridges: [CoreBridge],\n    tiptapOptions: {\n      extensions: [Document, Paragraph, Text],\n    },\n  });\n  return <EditorContent editor={editor} />;\n};\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="index.tsx"',children:"import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport { AdvancedEditor } from './AdvancedEditor';\n\n/**\n * This is the entrypoint for the \"web\" part of our editor that will be built with vite\n */\nconst container = document.getElementById('root');\nconst root = createRoot(container!);\nroot.render(<AdvancedEditor />);\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-5---adding-a-bundler",children:"Step 5 - adding a bundler"}),"\n",(0,i.jsx)(t.p,{children:"We chose to use vite as our bundler so first run"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn add -D vite @vitejs/plugin-react vite-plugin-singlefile\n"})}),"\n",(0,i.jsxs)(t.p,{children:["And now let's create ",(0,i.jsx)(t.code,{children:"vite.config.ts"})," and configure it"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="vite.config.ts"',children:"import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nimport { viteSingleFile } from 'vite-plugin-singlefile';\n\n// This config is used to build the web editor into a single file\n\nexport default defineConfig({\n  root: 'src/editor-web', // This should be the directory of your index.html\n  build: {\n    outDir: 'build',\n  },\n  resolve: {\n    alias: [\n      {\n        find: '@10play/tentap-editor', // On our web bundle we only want to include web related code\n        replacement: '@10play/tentap-editor/web',\n      },\n    ],\n  },\n  plugins: [react(), viteSingleFile()],\n  server: {\n    port: 3000,\n  },\n});\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)("strong",{children:["It's important to have the ",(0,i.jsx)(t.code,{children:"alias"})," configuration so vite will not load react-native code"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-6---adding-build-scripts",children:"Step 6 - adding build scripts"}),"\n",(0,i.jsx)(t.p,{children:"Add scripts on package.json so it will be easy to run/build editor-web:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="package.json"',children:'"scripts": {\n    ...\n    "editor:dev": "vite --config ./editor-web/vite.config.ts",\n    "editor:build": "vite --config ./editor-web/vite.config.ts build && yarn editor:post-build",\n    "editor:post-build":"node ./node_modules/@10play/tentap-editor/scripts/buildEditor.js ./editor-web/build/index.html",\n    "reverse-android": "adb reverse tcp:3000 tcp:3000",\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"editor:dev"})," - Run the editor web in dev mode",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.code,{children:"editor:build"})," - Build the editor web, probably need to add to your deploy/build process",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.code,{children:"editor:post-build"})," - This will take your built html file, and paste into a a ts and exports a string ",(0,i.jsx)(t.code,{children:"editorHtml"}),(0,i.jsx)(t.br,{}),"\n","which we can then later use as the source of our RichText.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.code,{children:"reverse-android"})," - On android need to reverse ports so it will be able to work with DEV / DEV_SERVER_URL props"]}),"\n",(0,i.jsx)(t.h3,{id:"step-7---using-our-custom-editor",children:"Step 7 - using our custom editor"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Outside"})," of editor-web update your ",(0,i.jsx)(t.code,{children:"EditorBridge"})," to used the html we just built."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { editorHtml } from './editor-web/build/editorHtml';\nconst editor = useEditorBridge({\n  customSource: editorHtml,\n  ...\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-8---install-react-dom",children:"Step 8 - Install react-dom"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"yarn add react-dom"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"yarn add -D @types/react-dom"})}),"\n",(0,i.jsx)(t.p,{children:"You basically done with the advance setup now you have full control of the editor-web you can write your own bridgeExtensions add additional tiptapExtensions"}),"\n",(0,i.jsx)(t.h2,{id:"alternative-setup",children:"Alternative Setup"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"In case you are using Expo you have to use this Alternative Setup for dev mode on your advance setup editor"})}),"\n",(0,i.jsxs)(t.p,{children:["There is an alternative vite setup that does not require a vite dev server as suggested in ",(0,i.jsx)(t.a,{href:"https://github.com/10play/10tap-editor/issues/80",children:"#80"}),". This setup does not require we add the ",(0,i.jsx)(t.code,{children:"DEV"})," prop"]}),"\n",(0,i.jsx)(t.h3,{id:"update-viteconfigts",children:"Update vite.config.ts"}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.code,{children:"vite.config.ts"})," replace plugins with"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="vite.config.ts"',children:"plugins: [\n   react(),\n   viteSingleFile(),\n   {\n     name: 'postbuild-commands',\n     closeBundle: async () => {\n       exec('yarn editor:post-build', (error, stdout, stderr) => {\n         if (error) {\n           console.error(`exec error: ${error}`);\n           return;\n         }\n       });\n     },\n   },\n ],\n"})}),"\n",(0,i.jsxs)(t.p,{children:["And add ",(0,i.jsx)(t.code,{children:"emptyOutDir: false"})," to the build options"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="vite.config.ts"',children:"build: {\n  outDir: 'build',\n  emptyOutDir: false,\n},\n"})}),"\n",(0,i.jsx)(t.h3,{id:"update-packagejson",children:"Update package.json"}),"\n",(0,i.jsxs)(t.p,{children:["Update the ",(0,i.jsx)(t.code,{children:"editor:dev"})," script to watch the advanced editor instead of running a dev-server, the hot reload will be handled by metro and not vite."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'"editor:dev": "vite --config ./editor-web/vite.config.ts -w build"'})})]})}function p(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>r});var i=n(1504);const o={},d=i.createContext(o);function r(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);