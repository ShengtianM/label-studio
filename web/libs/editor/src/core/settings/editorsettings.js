export default {
  enableHotkeys: {
    newUI: {
      title: "标注快捷键",
      description: "支持使用快捷键快速选择标签",
    },
    description: "启用标签快捷键",
    onChangeEvent: "toggleHotkeys",
    defaultValue: true,
  },
  enableTooltips: {
    newUI: {
      title: "在工具提示中显示快捷键",
      description: "在工具和操作的工具提示中显示快捷键信息",
    },
    description: "显示快捷键工具提示",
    onChangeEvent: "toggleTooltips",
    checked: "",
    defaultValue: false,
  },
  enableLabelTooltips: {
    newUI: {
      title: "在标签上显示快捷键",
      description: "在标签上显示快捷键信息",
    },
    description: "显示标签快捷键工具提示",
    onChangeEvent: "toggleLabelTooltips",
    defaultValue: true,
  },
  showLabels: {
    newUI: {
      title: "显示区域标签",
      description: "显示区域标签名称",
    },
    description: "在区域内显示标签",
    onChangeEvent: "toggleShowLabels",
    defaultValue: false,
  },
  continuousLabeling: {
    newUI: {
      title: "Keep label selected after creating a region",
      description: "Allows continuous region creation using the selected label",
    },
    description: "Keep label selected after creating a region",
    onChangeEvent: "toggleContinuousLabeling",
    defaultValue: false,
  },
  selectAfterCreate: {
    newUI: {
      title: "Select region after creating it",
      description: "Automatically selects newly created regions",
    },
    description: "Select regions after creating",
    onChangeEvent: "toggleSelectAfterCreate",
    defaultValue: false,
  },
  showLineNumbers: {
    newUI: {
      tags: "Text Tag",
      title: "Show line numbers",
      description: "Identify and reference specific lines of text in your document",
    },
    description: "Show line numbers for Text",
    onChangeEvent: "toggleShowLineNumbers",
    defaultValue: false,
  },
  preserveSelectedTool: {
    newUI: {
      tags: "Image Tag",
      title: "Keep selected tool",
      description: "Persists the selected tool across tasks",
    },
    description: "Remember Selected Tool",
    onChangeEvent: "togglepreserveSelectedTool",
    defaultValue: true,
  },
  enableSmoothing: {
    newUI: {
      tags: "Image Tag",
      title: "Pixel smoothing on zoom",
      description: "Smooth image pixels when zoomed in",
    },
    description: "Enable image smoothing when zoom",
    onChangeEvent: "toggleSmoothing",
    defaultValue: true,
  },
};
