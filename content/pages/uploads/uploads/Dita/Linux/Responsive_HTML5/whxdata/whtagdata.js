(function() {
var tagCombinations =  [["$"]] ,
  tags =  [],
  caption = "Filter by",
  type = "checkbox",
  defFilter = null;

window.rh.model.publish("p.tag_combinations", tagCombinations, { sync:true });
window.rh.model.publish("temp.data", {"tags": tags, "caption": caption, "type": type , "default": defFilter}, { sync:true });
})();