
function nextPayloadType(currentType)
{

  if(currentType.lastIndexOf("/display")!==-1) currentType="/display"
  // 1 -> 2, 2-> 1, 3 -> 2
  // CV -> List, List -> CV,  Subpage -> List
  const stateMap = {'/cv':'/','/':'/cv','/display':'/'};
  return stateMap[currentType]
}


export {nextPayloadType};
