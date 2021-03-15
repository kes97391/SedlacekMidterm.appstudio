let userBucketList = ["Buy Car", "Sell House", "Go to Florida"]

for(let i = 0; i < userBucketList.length; i++) {
  console.log(userBucketList[i])
}

btnView.onclick=function(){
  let Display = lblViewItems.value
  lblViewItems.value = userBucketList
}

btnAddItem.onclick=function(){
  userBucketList.push(inptBucketList.value)
  lblViewItems.value = userBucketList
}













