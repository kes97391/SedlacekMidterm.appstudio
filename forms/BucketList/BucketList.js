

btnView.onclick=function(){
  let Display = lblViewItems.value
  lblViewItems.value = userBucketList
}

btnAddItem.onclick=function(){
  userBucketList.push(inptBucketList.value)
  lblViewItems.value = userBucketList
}










