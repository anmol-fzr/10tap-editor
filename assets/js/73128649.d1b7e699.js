"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[568],{3588:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var t=n(7624),r=n(2172);const d={sidebar_position:4},a="Using The ColorKeyboard",i={id:"examples/colorKeyboard",title:"Using The ColorKeyboard",description:"In this example we will add the ColorKeyboard, and a custom button to toggle it in the Toolbar",source:"@site/docs/examples/colorKeyboard.md",sourceDirName:"examples",slug:"/examples/colorKeyboard",permalink:"/10tap-editor/docs/examples/colorKeyboard",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/colorKeyboard.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configure Extensions",permalink:"/10tap-editor/docs/examples/configureExtensions"},next:{title:"IOS Keyboard Avoiding Toolbar with Navigation Header",permalink:"/10tap-editor/docs/examples/navHeader"}},s={},c=[{value:"Adding CustomKeyboard Component",id:"adding-customkeyboard-component",level:2},{value:"Adding Custom Toolbar",id:"adding-custom-toolbar",level:2}];function l(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"using-the-colorkeyboard",children:"Using The ColorKeyboard"}),"\n",(0,t.jsx)(o.p,{children:"In this example we will add the ColorKeyboard, and a custom button to toggle it in the Toolbar"}),"\n",(0,t.jsx)(o.h2,{id:"adding-customkeyboard-component",children:"Adding CustomKeyboard Component"}),"\n",(0,t.jsx)(o.p,{children:"First we need to add two things"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"A ref on the components container (used on ios for opening the custom keyboard)"}),"\n",(0,t.jsx)(o.li,{children:"A current keyboard state (used inside the toolbar to show and hide the color keyboard)"}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"const rootRef = useRef(null);\nconst [activeKeyboard, setActiveKeyboard] = React.useState<string>();\n\nreturn (\n  <SafeAreaView style={exampleStyles.fullScreen} ref={rootRef}>\n  ...\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Then, into our ",(0,t.jsx)(o.code,{children:"KeyboardingViewView"})," we want to add the ",(0,t.jsx)(o.code,{children:"CustomKeyboard"})," component"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"<KeyboardAvoidingView\n  ...\n>\n  <Toolbar\n    ...\n  />\n  <CustomKeyboard\n    rootRef={rootRef}\n    activeKeyboardID={activeKeyboard}\n    setActiveKeyboardID={setActiveKeyboard}\n    keyboards={[ColorKeyboard]} // <-- here we add the color keyboard\n    editor={editor}\n  />\n</KeyboardAvoidingView>\n"})}),"\n",(0,t.jsx)(o.h2,{id:"adding-custom-toolbar",children:"Adding Custom Toolbar"}),"\n",(0,t.jsxs)(o.p,{children:["Now that we have added the custom keyboard, we need to add a button to the toolbar so we can access\nFirst, we will create a new component ",(0,t.jsx)(o.code,{children:"ToolbarWithColor"}),".\nThen we need to add some additional code to help us know when to show and hide the toolbar\nwhen the native keyboard is closed but our color keyboard is visible.\nAnd finally we need add a custom button to the keyboard to toggle the color keyboard"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"interface ToolbarWithColorProps {\n  editor: EditorBridge;\n  activeKeyboard: string | undefined;\n  setActiveKeyboard: (id: string | undefined) => void;\n}\nconst ToolbarWithColor = ({\n  editor,\n  activeKeyboard,\n  setActiveKeyboard,\n}: ToolbarWithColorProps) => {\n  // Get updates of editor state\n  const editorState = useBridgeState(editor);\n\n  const { isKeyboardUp: isNativeKeyboardUp } = useKeyboard();\n  const customKeyboardOpen = activeKeyboard !== undefined;\n  const isKeyboardUp = isNativeKeyboardUp || customKeyboardOpen;\n\n  // Here we make sure not to hide the keyboard if our custom keyboard is visible\n  const hideToolbar =\n    !isKeyboardUp || (!editorState.isFocused && !customKeyboardOpen);\n\n  return (\n    <Toolbar\n      editor={editor}\n      hidden={hideToolbar}\n      items={[\n        {\n          onPress: () => () => {\n            const isActive = activeKeyboard === ColorKeyboard.id;\n            if (isActive) editor.focus();\n            setActiveKeyboard(isActive ? undefined : ColorKeyboard.id);\n          },\n          active: () => activeKeyboard === ColorKeyboard.id,\n          disabled: () => false,\n          image: () => Images.platte,\n        },\n        ...DEFAULT_TOOLBAR_ITEMS,\n      ]}\n    />\n  );\n};\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Then all that is left to replace ",(0,t.jsx)(o.code,{children:"Toolbar"})," with our new ",(0,t.jsx)(o.code,{children:"ToolbarWithColor"})," and we're done!"]})]})}function b(e={}){const{wrapper:o}={...(0,r.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},2172:(e,o,n)=>{n.d(o,{I:()=>i,M:()=>a});var t=n(1504);const r={},d=t.createContext(r);function a(e){const o=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(d.Provider,{value:o},e.children)}}}]);