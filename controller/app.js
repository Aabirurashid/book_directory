const data=require("../data.json")
// console.log(data);
const fs=require("fs")

const getdata=(req,res)=>{
    res.json(data)
}
//post meraki data
const postdata=(req,res)=>{
  user={
    id:data.length+1,
    book: req.body.book,
    name: req.body.name,
    type: req.body.type,
    Author: req.body.Author,
    category:req.body.category
      }

      data.push(user)
      res.json(user)
        a=fs.writeFileSync("data.json",JSON.stringify(data,null,3))
  }

  //put meraki data
const putdata=(req,res)=>{
    let id=req.params.id
    let book=req.body.book
    let name=req.body.name
    let type= req.body.type
    let Author= req.body.Author
    let category=req.body.category
    let index=data.findIndex((data1)=>{
        return (data1.id==Number.parseInt(id))
        

    })

    if (index>=0){
        std=data[index]
        std.book= req.body.book,
        std.name= req.body.name,
        std.type= req.body.type,
        std.Author= req.body.Author,
        std.category=req.body.category

        res.json(std)
        a=fs.writeFileSync("data.json",JSON.stringify(data,null,3))

    }
    else{
        res.send(404)
}

}
//delet meraki data
const deletedata=(req,res)=>{
  let id=req.params.id;
  let index =data.findIndex((data)=>{
      return (data.id==Number.parseInt(id))
  })
  if(index>=0){
      let std1=data[index]
      data.splice(index,1)
      // res.json(std)
      fs.writeFileSync("data.json",JSON.stringify(data,null,3))
      res.json(std1)

  }
  else{
    res.status(404)
      res.send({err:err})
  }
}



module.exports={getdata,postdata,putdata,deletedata}


	
	
	
