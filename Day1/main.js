// v1
// const dom = document.createElement('div')
// dom.id = 'app'
// document.querySelector('#root').append(dom)

// const text = document.createTextNode("")
// text.nodeValue = 'hello react'
// dom.append(text)

//v2
// const textEl = {
//   type:'TEXT_ELEMENT',
//   props:{
//     nodeValue:'Hello React',
//     children:[]
//   }
// }

// const el = {
//   type:'div',
//   props:{
//     id:'app',
//     children:[textEl]
//   }
// }

// const dom = document.createElement(el.type)
// dom.id = el.props.id
// document.querySelector('#root').append(dom)

// const text = document.createTextNode(textEl.type)
// text.nodeValue = textEl.props.nodeValue
// dom.append(text)

//v3
// function createTextEl(text) {
//   return {
//     type: "TEXT_ELEMENT",
//     props: {
//       nodeValue: text,
//       children: [],
//     },
//   };
// }

// function createEl(type, props, ...children) {
//   return {
//     type,
//     props: {
//       ...props,
//       children,
//     },
//   };
// }

// const textEl = createTextEl("Hello React");
// const App = createEl("div", { id: "app" }, textEl);
// const dom = document.createElement(App.type);
// dom.id = App.props.id;
// document.querySelector("#root").append(dom);

// const text = document.createTextNode(textEl.type);
// text.nodeValue = textEl.props.nodeValue;
// dom.append(text);

//v4
// function createTextEl(text) {
//   return {
//     type: "TEXT_ELEMENT",
//     props: {
//       nodeValue: text,
//       children: [],
//     },
//   };
// }

// function createEl(type, props, ...children) {
//   return {
//     type,
//     props: {
//       ...props,
//       children: children.map((child) => {
//         return typeof child === "string" ? createTextEl(child) : child;
//       }),
//     },
//   };
// }

// function render(el, container) {
//   const dom =
//     el.type === "TEXT_ELEMENT"
//       ? document.createTextNode("")
//       : document.createElement(el.type);

//   Object.keys(el.props).forEach((key) => {
//     if (key !== "children") {
//       dom[key] = el.props[key];
//     }
//   });

//   const children = el.props.children;
//   children.forEach((item) => {
//     render(item, dom);
//   });

//   container.append(dom);
// }

import ReactDom from "./vite-project/core/react-dom.js";
import App from "./app.js";

ReactDom.createRoot(document.querySelector("#root")).render(App);
