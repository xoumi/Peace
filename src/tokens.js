const { fg, fgl, fgd, fgdd, bg, bgl, bgll, secondary, primary, accent, hl }= require('./palette')

module.exports = [
  {
    "name": "Comment",
    "scope": [
      "comment",
      "punctuation.definition.comment"
    ],
    "settings": {
      "fontStyle": "italic",
      "foreground": bgll
    }
  },
  {
    "name": "Variables",
    "scope": [
      "variable",
      "string constant.other.placeholder"
    ],
    "settings": {
      "foreground": fg,
    }
  },
  {
    "name": "Colors",
    "scope": [
      "constant.other.color"
    ],
    "settings": {
      "foreground": "#ffffff"
    }
  },
  {
    "name": "Invalid",
    "scope": [
      "invalid",
      "invalid.illegal"
    ],
    "settings": {
      "foreground": "#FF5370"
    }
  },
  {
    "name": "Keyword, Storage",
    "scope": [
      "storage.type",
      "storage.modifier",
      "meta.parameters",
      "punctuation.definition.tag",
      "punctuation.definition.parameters.begin",
      "punctuation.definition.parameters.end",
      "punctuation.separator.inheritance.php",
      "punctuation.definition.tag.html",
      "punctuation.definition.tag.begin.html",
      "punctuation.definition.tag.end.html",
      "keyword.other.template",
    ],
    "settings": {
      "fontStyle": "bold",
      "foreground": bgll
    }
  },
  {
    "name": "Important Keywords",
    "scope": [
      "keyword.control.flow"
    ],
    "settings": {
      "foreground": secondary
    }
  },
  {
    "name": "Operator, Misc",
    "scope": [
      "constant.other.color",
      "punctuation",
      "punctuation.section.embedded",
      "keyword",
      "keyword.other.substitution",
      "storage.type.function.arrow",
      "	keyword.operator.assignment"
    ],
    "settings": {
      "foreground": fgd
    }
  },
  {
    "name": "Tag",
    "scope": [
      "entity.name.tag",
      "meta.tag.sgml",
      "markup.deleted.git_gutter"
    ],
    "settings": {
      "foreground": fg
    }
  },
  {
    "name": "Function, Special Method",
    "scope": [
      "entity.name.function",
      "meta.function-call",
      "variable.function",
      "support.function",
      "keyword.other.special-method"
    ],
    "settings": {
      "fontStyle": "italic bold",
      "foreground": fgl
    }
  },
  {
    "name": "Other Variable, String Link",
    "scope": [
      "support.other.variable",
      "string.other.link"
    ],
    "settings": {
      "foreground": "#f07178"
    }
  },
  {
    "name": "Number, Constant, Function Argument, Tag Attribute, Embedded",
    "scope": [
      "constant.numeric",
      "constant.language",
      "support.constant",
      "constant.character",
      "constant.escape",
      "variable.parameter",
      "keyword.other.unit",
      "keyword.other"
    ],
    "settings": {
      "foreground": primary
    }
  },
  {
    "name": "String, Symbols, Inherited Class, Markup Heading",
    "scope": [
      "string",
      "constant.other.symbol",
      "constant.other.key",
      "entity.other.inherited-class",
      "markup.heading",
      "markup.inserted.git_gutter",
      "meta.tag",
      "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
    ],
    "settings": {
      "foreground": primary
    }
  },
  {
    "name": "Class, Support",
    "scope": [
      "entity.name",
      "support.type",
      "support.class",
      "support.orther.namespace.use.php",
      "meta.use.php",
      "support.other.namespace.php",
      "markup.changed.git_gutter",
      "support.type.sys-types"
    ],
    "settings": {
      "foreground": fg
    }
  },
  {
    "name": "Entity Types",
    "scope": [
      "support.type"
    ],
    "settings": {
      "foreground": "#B2CCD6"
    }
  },
  {
    "name": "CSS Class and Support",
    "scope": [
      "source.css support.type.property-name",
      "source.sass support.type.property-name",
      "source.scss support.type.property-name",
      "source.less support.type.property-name",
      "source.stylus support.type.property-name",
      "source.postcss support.type.property-name"
    ],
    "settings": {
      "foreground": fg
    }
  },
  {
    "name": "Attributes",
    "scope": [
      "entity.other.attribute-name"
    ],
    "settings": {
      "foreground": fgd
    }
  },
  {
    "name": "CSS Classes",
    "scope": [
      "entity.other.attribute-name.class"
    ],
    "settings": {
      "foreground": secondary
    }
  },
  {
    "name": "CSS ID's",
    "scope": [
      "source.sass keyword.control",
      "entity.other.attribute-name.id.css.sass"
    ],
    "settings": {
      "foreground": hl
    }
  },
  {
    "name": "Deleted",
    "scope": [
      "markup.deleted"
    ],
    "settings": {
      "foreground": "#FF5370"
    }
  },
  {
    "name": "Changed",
    "scope": [
      "markup.changed"
    ],
    "settings": {
      "foreground": "#C792EA"
    }
  },
  {
    "name": "Regular Expressions, Escape Chars",
    "scope": [
      "string.regexp",
      "constant.character.escape"
    ],
    "settings": {
      "foreground": hl
    }
  },
  {
    "name": "URL",
    "scope": [
      "*url*",
      "*link*",
      "*uri*"
    ],
    "settings": {
      "fontStyle": "underline"
    }
  },
  {
    "name": "Decorators",
    "scope": [
      "tag.decorator.js entity.name.tag.js",
      "tag.decorator.js punctuation.definition.tag.js"
    ],
    "settings": {
      "fontStyle": "italic",
      "foreground": bgll
    }
  },
  {
    "name": "ES7 Bind Operator",
    "scope": [
      "source.js constant.other.object.key.js string.unquoted.label.js"
    ],
    "settings": {
      "fontStyle": "italic",
      "foreground": "#FF5370"
    }
  },
  {
    "name": "JSON Key - Level 0",
    "scope": [
      "source.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
      "foreground": secondary
    }
  },
  {
    "name": "JSON Key - Level 1",
    "scope": [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
      "foreground": fg
    }
  },
  {
    "name": "JSON Key - Level 2",
    "scope": [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
      "foreground": fgd
    }
  },
  {
    "name": "JSON Key - Level 3",
    "scope": [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
      "foreground": fgdd
    }
  },
  {
    "name": "Markdown - Plain",
    "scope": [
      "text.html.markdown",
      "punctuation.definition.list_item.markdown"
    ],
    "settings": {
      "foreground": "#EEFFFF"
    }
  },
  {
    "name": "Markdown - Markup Raw Inline",
    "scope": [
      "text.html.markdown markup.inline.raw.markdown"
    ],
    "settings": {
      "foreground": "#C792EA"
    }
  },
  {
    "name": "Markdown - Markup Raw Inline Punctuation",
    "scope": [
      "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
    ],
    "settings": {
      "foreground": "#65737E"
    }
  },
  {
    "name": "Markdown - Heading",
    "scope": [
      "markdown.heading",
      "markup.heading | markup.heading entity.name",
      "markup.heading.markdown punctuation.definition.heading.markdown"
    ],
    "settings": {
      "foreground": "#C3E88D"
    }
  },
  {
    "name": "Markup - Italic",
    "scope": [
      "markup.italic"
    ],
    "settings": {
      "fontStyle": "italic",
      "foreground": "#f07178"
    }
  },
  {
    "name": "Markup - Bold",
    "scope": [
      "markup.bold",
      "markup.bold string"
    ],
    "settings": {
      "fontStyle": "bold",
      "foreground": "#f07178"
    }
  },
  {
    "name": "Markup - Bold-Italic",
    "scope": [
      "markup.bold markup.italic",
      "markup.italic markup.bold",
      "markup.quote markup.bold",
      "markup.bold markup.italic string",
      "markup.italic markup.bold string",
      "markup.quote markup.bold string"
    ],
    "settings": {
      "fontStyle": "bold",
      "foreground": "#f07178"
    }
  },
  {
    "name": "Markup - Underline",
    "scope": [
      "markup.underline"
    ],
    "settings": {
      "fontStyle": "underline",
      "foreground": "#F78C6C"
    }
  },
  {
    "name": "Markdown - Blockquote",
    "scope": [
      "markup.quote punctuation.definition.blockquote.markdown"
    ],
    "settings": {
      "foreground": "#65737E"
    }
  },
  {
    "name": "Markup - Quote",
    "scope": [
      "markup.quote"
    ],
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "name": "Markdown - Link",
    "scope": [
      "string.other.link.title.markdown"
    ],
    "settings": {
      "foreground": "#82AAFF"
    }
  },
  {
    "name": "Markdown - Link Description",
    "scope": [
      "string.other.link.description.title.markdown"
    ],
    "settings": {
      "foreground": "#C792EA"
    }
  },
  {
    "name": "Markdown - Link Anchor",
    "scope": [
      "constant.other.reference.link.markdown"
    ],
    "settings": {
      "foreground": "#FFCB6B"
    }
  },
  {
    "name": "Markup - Raw Block",
    "scope": [
      "markup.raw.block"
    ],
    "settings": {
      "foreground": "#C792EA"
    }
  },
  {
    "name": "Markdown - Raw Block Fenced",
    "scope": [
      "markup.raw.block.fenced.markdown"
    ],
    "settings": {
      "foreground": "#00000050"
    }
  },
  {
    "name": "Markdown - Fenced Bode Block",
    "scope": [
      "punctuation.definition.fenced.markdown"
    ],
    "settings": {
      "foreground": "#00000050"
    }
  },
  {
    "name": "Markdown - Fenced Bode Block Variable",
    "scope": [
      "markup.raw.block.fenced.markdown",
      "variable.language.fenced.markdown",
      "punctuation.section.class.end"
    ],
    "settings": {
      "foreground": "#EEFFFF"
    }
  },
  {
    "name": "Markdown - Fenced Language",
    "scope": [
      "variable.language.fenced.markdown"
    ],
    "settings": {
      "foreground": "#65737E"
    }
  },
  {
    "name": "Markdown - Separator",
    "scope": [
      "meta.separator"
    ],
    "settings": {
      "fontStyle": "bold",
      "foreground": "#65737E"
    }
  },
  {
    "name": "Markup - Table",
    "scope": [
      "markup.table"
    ],
    "settings": {
      "foreground": "#EEFFFF"
    }
  }
]