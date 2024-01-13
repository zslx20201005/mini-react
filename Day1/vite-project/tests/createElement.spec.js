import React from "../core/react.js";
import { it, expect, describe } from "vitest";

describe("createElement", () => {
  it("should return vdom for element", () => {
    const el = React.createElement("div", null, "Hello React");

    expect(el).toMatchInlineSnapshot(`
      {
        "props": {
          "children": [
            {
              "props": {
                "children": [],
                "nodeValue": "Hello React",
              },
              "type": "TEXT_ELEMENT",
            },
          ],
        },
        "type": "div",
      }
    `)
 
    // expect(el).toEqual({
    //   type:"div",
    //   props:{
    //     children:[{
    //       type:"TEXT_ELEMENT",
    //       props:{
    //         nodeValue:"Hello React",
    //         children:[]
    //       }
    //     }]
    //   }
    // })
  });
});
