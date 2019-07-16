function filterPostFun(filterText){
  return function(aPost){
    let is_in_title = aPost.title.toLowerCase().indexOf(filterText.toLowerCase())!==-1;
    let is_in_tags  = aPost.tags.map(toLowerCaseFun).some((post) => post.indexOf(filterText.toLowerCase())!==-1);
    return (is_in_title || is_in_tags)}

}

function toLowerCaseFun(str){
  return str.toLowerCase()
}

export {filterPostFun}
