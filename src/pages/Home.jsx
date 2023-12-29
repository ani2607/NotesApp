import { useState } from "react"
import NoNote from "../components/NoNote"
import Note from "../components/Note"

// const arr = [ 
//   {
//     "title" : "jallfjsldf",
//     "description" :"fdskfadsfsdfasdf fkadfasd fsd fsdfjsda fdskfjdf sdfjsdkf sdf dfakdjf sdfkdsfj sdakf sdjfkldsa jfdaskflj dsafkajsdlfka sfjdksfjalsdkf fjkdsfjasdfsdafjsdlakfj"
// },
//   {
//     "title" : "jallfjsldf",
//     "description" :"fdskfadsfsdfasdf fkadfasd fsd fsdfjsda fdskfjdf sdfjsdkf sdf dfakdjf sdfkdsfj sdakf sdjfkldsa jfdaskflj dsafkajsdlfka sfjdksfjalsdkf fjkdsfjasdfsdafjsdlakfj"
// },
//   {
//     "title" : "jallfjsldf",
//     "description" :"fdskfadsfsdfasdf fkadfasd fsd fsdfjsda fdskfjdf sdfjsdkf sdf dfakdjf sdfkdsfj sdakf sdjfkldsa jfdaskflj dsafkajsdlfka sfjdksfjalsdkf fjkdsfjasdfsdafjsdlakfj"
// },
//   {
//     "title" : "jallfjsldf",
//     "description" :"fdskfadsfsdfasdf fkadfasd fsd fsdfjsda fdskfjdf sdfjsdkf sdf dfakdjf sdfkdsfj sdakf sdjfkldsa jfdaskflj dsafkajsdlfka sfjdksfjalsdkf fjkdsfjasdfsdafjsdlakfj"
// },
//   {
//     "title" : "jallfjsldf",
//     "description" :"fdskfadsfsdfasdf fkadfasd fsd fsdfjsda fdskfjdf sdfjsdkf sdf dfakdjf sdfkdsfj sdakf sdjfkldsa jfdaskflj dsafkajsdlfka sfjdksfjalsdkf fjkdsfjasdfsdafjsdlakfj"
// },
//   {
//     "title" : "jallfjsldf",
//     "description" :"fdskfadsfsdfasdf fkadfasd fsd fsdfjsda fdskfjdf sdfjsdkf sdf dfakdjf sdfkdsfj sdakf sdjfkldsa jfdaskflj dsafkajsdlfka sfjdksfjalsdkf fjkdsfjasdfsdafjsdlakfj"
// },
//   {
//     "title" : "jallfjsldf",
//     "description" :"fdskfadsfsdfasdf fkadfasd fsd fsdfjsda fdskfjdf sdfjsdkf sdf dfakdjf sdfkdsfj sdakf sdjfkldsa jfdaskflj dsafkajsdlfka sfjdksfjalsdkf fjkdsfjasdfsdafjsdlakfj"
// }


// ]




const Home = () => {

  const [data,setData] = useState([{
    id : 'fadfadfadsf',
    title : "sadjfdsf",
    description : "Fdsajf asfsdf"
  }])
  // setData(arr);

  return (
    <div className="text-center text-white text-xl">
      
      {
        data.length === 0 &&  <NoNote/>
       
      }

      {
        <div>
          {
            data.map((note)=>{
              return (
                <Note key={note.id} title={note.title} description={note.description} id= {note.id}  />
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default Home
