<script>
import MD from "@/untils/markdownParse";
import Tools from "@/untils/tools";
export default {
  props: {
    rootClass: {
      type: String,
      default: "markdown-body"
    }
  },
  render: function(createElement) {
    var body = this.$slots.default;
    var domHtml=Tools.vnodesToHtml(body);
    var mdHtml = MD.parse(domHtml);
    return createElement("div",{
      class: this.$props.rootClass,
      // DOM property
      domProps: {
        innerHTML: mdHtml,
      }
    });
    
  }
};
</script>