const { fg, fgd, fgdd, bg, bgl, hl, transparent, secondary, primary, accent} = require('./palette')

module.exports = {
  //Editor
  "editor.background": bg,
  "editor.foreground": fg,
  "editor.findMatchBackground": secondary + '20',
  "editor.findMatchHighlightBackground": secondary + '35',
  "editorGutter.background": bg,
  "editorWidget.background": bgl + 'F1',
  "editorWidget.border": transparent,
  "editorGroup.border": bgl,

  //Badges
  "badge.background": transparent,
  "badge.foreground": primary,

  //Tab bar
  "editorGroupHeader.noTabsBackground": bg,
  "editorGroupHeader.tabsBackground": bg,
  "tab.activeBorder": transparent,
  "tab.border": transparent,
  "tab.inactiveBackground": bg,
  "tab.activeBackground": bgl,
  "tree.indentGuidesStroke": transparent,

  //Inputbox
  "input.background": transparent,
  "input.border": bg,

  //Scrollbar
  "scrollbar.shadow": transparent,
  "scrollbarSlider.activeBackground": bgl,
  "scrollbarSlider.background": bgl,
  "scrollbarSlider.hoverBackground": bgl,

  //Sidebar
  "sideBarTitle.foreground": fg,
  "sideBar.border": transparent,
  "sideBar.background": bg,
  "sideBar.foreground": fgd,

  //List
  "list.focusForeground": fg,
  "list.activeSelectionForeground": fg,
  "list.inactiveSelectionForeground": fg,
  "list.focusBackground": bgl,
  "list.activeSelectionBackground": bgl,
  "list.inactiveSelectionBackground": bgl,
  "list.hoverForeground": primary,
  "list.hoverBackground": transparent,
  "list.deemphasizedForeground": fgdd,

  //Panel
  "panel.border": transparent,

  //Statusbar
  "statusBar.background": bg,

  //Dropdown
  "dropdown.background": bg,
  "dropdown.border": transparent
};
