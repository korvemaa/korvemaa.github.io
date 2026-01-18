export default function remarkSectionize() {
  return (tree) => {
    const newChildren = [];
    let currentSection = {
      type: "container",
      data: {
        hName: "section",
        hProperties: {
          class: "md-section md-preamble",
          "data-level": "preamble",
        },
      },
      children: [],
    };

    for (const node of tree.children) {
      if (node.type === "heading") {
        if (currentSection.children.length > 0) {
          newChildren.push(currentSection);
        }

        currentSection = {
          type: "container",
          data: {
            hName: "section",
            hProperties: {
              class: "md-section",
              "data-level": node.depth,
            },
          },
          children: [node, { type: 'html', value: '<hr>' }],
        };
      } else {
        currentSection.children.push(node);
      }
    }

    if (currentSection.children.length > 0) {
      newChildren.push(currentSection);
    }

    tree.children = newChildren;
  };
}