(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(3),i=t.n(o),s=(t(10),t(5)),c=(t.p,t(11),t(4)),d=t(0);var l=function(){var e,n=Object(r.useState)("# Welcome to my React Markdown Previewer!\n\n  ## This is a sub-heading...\n  ### And here's some other cool stuff:\n  \n  Heres some code, `<div></div>`, between 2 backticks.\n  \n  ```\n  // this is multi-line code:\n  \n  function anotherExample(firstLine, lastLine) {\n    if (firstLine == '```' && lastLine == '```') {\n      return multiLineCode;\n    }\n  }\n  ```\n  \n  You can also make text **bold**... whoa!\n  Or _italic_.\n  Or... wait for it... **_both!_**\n  And feel free to go crazy ~~crossing stuff out~~.\n  \n  There's also [links](https://www.freecodecamp.org), and\n  > Block Quotes!\n  \n  And if you want to get really crazy, even tables:\n  \n  Wild Header | Crazy Header | Another Header?\n  ------------ | ------------- | -------------\n  Your content can | be here, and it | can be here....\n  And here. | Okay. | I think we get it.\n  \n  - And of course there are lists.\n    - Some are bulleted.\n       - With different indentation levels.\n          - That look like this.\n  \n  \n  1. And there are numbered lists too.\n  1. Use just 1s if you want!\n  1. And last but not least, let's not forget embedded images:\n  \n  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n  "),t=Object(s.a)(n,2),a=t[0],o=t[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("textarea",{id:"editor",value:a,onChange:function(e){o(e.target.value)}}),Object(d.jsx)("div",{id:"preview",dangerouslySetInnerHTML:(e=a,{__html:Object(c.marked)(e)})})]})})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),o(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),u()}},[[13,1,2]]]);
//# sourceMappingURL=main.d0ef4d67.chunk.js.map