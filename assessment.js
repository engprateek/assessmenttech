let ObjMap ={};
const unique = [...new Set(awards.map(item => item.category))];
  awards.forEach((element,index) => {
    var category = element.category;
     if(!ObjMap[category]) {
       ObjMap[category] = [];
     }
      let winner = [];
for(let a = 0;a<unique.length;a++){
    if(unique[a] == category){
        winner.push({
        name:element.name,
        share:0.24
    })
        ObjMap[category].push({
      category: element.category,
      year: element.year,
      winner:winner
    });
       
    }
}
   });
   console.log(ObjMap);
