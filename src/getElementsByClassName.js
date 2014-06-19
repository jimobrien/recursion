// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  var elements = [];

  searchNode(document);

  function searchNode(node) {
    var children = node.childNodes;
    
    for (var i = 0, len = children.length; i < len; i++) {
      if (children[i].classList && children[i].classList.contains(className)) {
        elements.push(children[i]);
      }
      if (children[i].hasChildNodes()) {
        searchNode(children[i]);
      }
    }
  }

  return elements;

};
