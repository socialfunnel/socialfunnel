import { Config } from "@markdoc/markdoc";

export const markdocConfig: Config = {
  tags: {
    "case-study-box": {
      render: "CaseStudyBox",
    },
  },
  nodes: {
    heading: {
      render: "Heading",
      attributes: {
        level: { type: Number, required: true },
        id: { type: String },
      },
    },
  },
};
