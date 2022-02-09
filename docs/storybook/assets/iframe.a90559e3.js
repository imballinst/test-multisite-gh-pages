var A=Object.defineProperty,D=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var v=(t,o,s)=>o in t?A(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,c=(t,o)=>{for(var s in o||(o={}))k.call(o,s)&&v(t,s,o[s]);if(h)for(var s of h(o))x.call(o,s)&&v(t,s,o[s]);return t},y=(t,o)=>D(t,R(o));var f=(t,o)=>{var s={};for(var r in t)k.call(t,r)&&o.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&h)for(var r of h(t))o.indexOf(r)<0&&x.call(t,r)&&(s[r]=t[r]);return s};import{c as e,A as F,M as V,P as d,j as n,a as l,F as w,e as $,w as q,u as U,b as _,d as J,f as W,g as X,h as G,l as K,i as Q,k as Y,m as Z,n as ee,o as te,p as oe,q as se,r as re,s as ne,t as ae}from"./vendor.e47ed5dd.js";const ie=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}};ie();const le={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:le}),de="/test-multisite-gh-pages/storybook/assets/code-brackets.9ef6443e.svg",ge="/test-multisite-gh-pages/storybook/assets/colors.ac9401f3.svg",pe="/test-multisite-gh-pages/storybook/assets/comments.f15a6837.svg",me="/test-multisite-gh-pages/storybook/assets/direction.94a9917f.svg",ue="/test-multisite-gh-pages/storybook/assets/flow.275142c6.svg",he="/test-multisite-gh-pages/storybook/assets/plugin.57148314.svg",ye="/test-multisite-gh-pages/storybook/assets/repo.fb4ece47.svg",be="/test-multisite-gh-pages/storybook/assets/stackalt.2ad81543.svg";const fe={},ke="wrapper";function L(s){var r=s,{components:t}=r,o=f(r,["components"]);return e(ke,y(c(c({},fe),o),{components:t,mdxType:"MDXLayout"}),e(V,{title:"Example/Introduction",mdxType:"Meta"}),e("style",null,`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
`),e("h1",null,"Welcome to Storybook"),e("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,e("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),e("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,e("inlineCode",{parentName:"p"},"src/stories"),` directory to learn how they work.
We recommend building UIs with a `,e("a",{parentName:"p",href:"https://componentdriven.org"},e("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),e("div",{className:"subheading"},"Configure"),e("div",{className:"link-list"},e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},e("img",{src:he,alt:"plugin"}),e("span",null,e("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},e("img",{src:be,alt:"Build"}),e("span",null,e("strong",null,"Build configuration"),"How to customize webpack and Babel")),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},e("img",{src:ge,alt:"colors"}),e("span",null,e("strong",null,"Styling"),"How to load and configure CSS libraries")),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},e("img",{src:ue,alt:"flow"}),e("span",null,e("strong",null,"Data"),"Providers and mocking for data libraries"))),e("div",{className:"subheading"},"Learn"),e("div",{className:"link-list"},e("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},e("img",{src:ye,alt:"repo"}),e("span",null,e("strong",null,"Storybook documentation"),"Configure, customize, and extend")),e("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},e("img",{src:me,alt:"direction"}),e("span",null,e("strong",null,"In-depth guides"),"Best practices from leading teams")),e("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},e("img",{src:de,alt:"code"}),e("span",null,e("strong",null,"GitHub project"),"View the source and add issues")),e("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},e("img",{src:pe,alt:"comments"}),e("span",null,e("strong",null,"Discord chat"),"Chat with maintainers and the community"))),e("div",{className:"tip-wrapper"},e("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",e("code",null,"src/stories/Introduction.stories.mdx")))}L.isMDXComponent=!0;const B=()=>{throw new Error("Docs-only story")};B.parameters={docsOnly:!0};const m={title:"Example/Introduction",includeStories:["__page"]},xe={};m.parameters=m.parameters||{};m.parameters.docs=y(c({},m.parameters.docs||{}),{page:()=>e(F,{mdxStoryNameToKey:xe,mdxComponentAnnotations:m},e(L,null))});var ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:B,default:m});const g=i=>{var p=i,{primary:t,backgroundColor:o,size:s,label:r}=p,a=f(p,["primary","backgroundColor","size","label"]);const H=t?"storybook-button--primary":"storybook-button--secondary";return n("button",y(c({type:"button",className:["storybook-button",`storybook-button--${s}`,H].join(" "),style:o&&{backgroundColor:o}},a),{children:r}))};g.propTypes={primary:d.bool,backgroundColor:d.string,size:d.oneOf(["small","medium","large"]),label:d.string.isRequired,onClick:d.func};g.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};var we={parameters:{storySource:{source:`import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}},secondary:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}},large:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}},small:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}}}}},title:"Example/Button",component:g,argTypes:{backgroundColor:{control:"color"}}};const b=t=>n(g,c({},t)),S=b.bind({});S.args={primary:!0,label:"Button"};const j=b.bind({});j.args={label:"Button"};const T=b.bind({});T.args={size:"large",label:"Button"};const E=b.bind({});E.args={size:"small",label:"Button"};const _e=["Primary","Secondary","Large","Small"];var Le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:we,Primary:S,Secondary:j,Large:T,Small:E,__namedExportsOrder:_e});const u=({user:t,onLogin:o,onLogout:s,onCreateAccount:r})=>n("header",{children:l("div",{className:"wrapper",children:[l("div",{children:[n("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:l("g",{fill:"none",fillRule:"evenodd",children:[n("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),n("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),n("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),n("h1",{children:"Acme"})]}),n("div",{children:t?l(w,{children:[l("span",{className:"welcome",children:["Welcome, ",n("b",{children:t.name}),"!"]}),n(g,{size:"small",onClick:s,label:"Log out"})]}):l(w,{children:[n(g,{size:"small",onClick:o,label:"Log in"}),n(g,{primary:!0,size:"small",onClick:r,label:"Sign up"})]})})]})});u.propTypes={user:d.shape({}),onLogin:d.func.isRequired,onLogout:d.func.isRequired,onCreateAccount:d.func.isRequired};u.defaultProps={user:null};var Be={title:"Example/Header",component:u,parameters:{storySource:{source:`import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},"logged-out":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}}}},layout:"fullscreen"}};const M=t=>n(u,c({},t)),z=M.bind({});z.args={user:{name:"Jane Doe"}};const O=M.bind({});O.args={};const Se=["LoggedIn","LoggedOut"];var je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Be,LoggedIn:z,LoggedOut:O,__namedExportsOrder:Se});const P=()=>{const[t,o]=$.useState();return l("article",{children:[n(u,{user:t,onLogin:()=>o({name:"Jane Doe"}),onLogout:()=>o(void 0),onCreateAccount:()=>o({name:"Jane Doe"})}),l("section",{children:[n("h2",{children:"Pages in Storybook"}),l("p",{children:["We recommend building UIs with a"," ",n("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:n("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),n("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),l("ul",{children:[n("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),n("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),l("p",{children:["Get a guided tutorial on component-driven development at"," ",n("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",n("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),l("div",{className:"tip-wrapper",children:[n("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",n("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:n("g",{fill:"none",fillRule:"evenodd",children:n("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})};var Te={title:"Example/Page",component:P,parameters:{storySource:{source:`import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Page {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
`,locationsMap:{"logged-out":{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},"logged-in":{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}}}},layout:"fullscreen"}};const N=t=>n(P,c({},t)),Ee=N.bind({}),C=N.bind({});C.play=async({canvasElement:t})=>{const s=await q(t).getByRole("button",{name:/Log in/i});await U.click(s)};const Me=["LoggedOut","LoggedIn"];var ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Te,LoggedOut:Ee,LoggedIn:C,__namedExportsOrder:Me});const Oe=[Y,Z,ee,te,oe,se,re,ne,ae,ce];Oe.forEach(t=>{Object.keys(t).forEach(o=>{const s=t[o];switch(o){case"args":case"argTypes":return K.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(s));case"decorators":return s.forEach(r=>G(r,!1));case"loaders":return s.forEach(r=>X(r,!1));case"parameters":return _(c({},s),!1);case"argTypesEnhancers":return s.forEach(r=>W(r));case"argsEnhancers":return s.forEach(r=>J(r));case"globals":case"globalTypes":{const r={};return r[o]=s,_(r,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})});function I(t){return{"/home/imballinst/codes/test-multisite-gh-pages/src/stories/Introduction.stories.mdx":ve,"/home/imballinst/codes/test-multisite-gh-pages/src/stories/Button.stories.jsx":Le,"/home/imballinst/codes/test-multisite-gh-pages/src/stories/Header.stories.jsx":je,"/home/imballinst/codes/test-multisite-gh-pages/src/stories/Page.stories.jsx":ze}[t]}Object.assign(I,{keys:()=>["/home/imballinst/codes/test-multisite-gh-pages/src/stories/Introduction.stories.mdx","/home/imballinst/codes/test-multisite-gh-pages/src/stories/Button.stories.jsx","/home/imballinst/codes/test-multisite-gh-pages/src/stories/Header.stories.jsx","/home/imballinst/codes/test-multisite-gh-pages/src/stories/Page.stories.jsx"],resolve:t=>({"/home/imballinst/codes/test-multisite-gh-pages/src/stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx","/home/imballinst/codes/test-multisite-gh-pages/src/stories/Button.stories.jsx":"./src/stories/Button.stories.jsx","/home/imballinst/codes/test-multisite-gh-pages/src/stories/Header.stories.jsx":"./src/stories/Header.stories.jsx","/home/imballinst/codes/test-multisite-gh-pages/src/stories/Page.stories.jsx":"./src/stories/Page.stories.jsx"})[t]});Q(I,{hot:!1},!1);
//# sourceMappingURL=iframe.a90559e3.js.map
