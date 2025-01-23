import axios from "axios"
import { useEffect, useState } from "react"

function App() {
    
  //  const [allType , setAllType]=useState([])

  //  "https://pokeapi.co/api/v2/type?limit=21"

   async function handleApi(){
       const response =await axios.get("https://pokeapi.co/api/v2/type?limit=21")
      //  console.log(response.data.results)
      const result = (response.data.results)
      showContent(result)
    }

    const showContent = async (result) => {
      for (const item of result) {
        try {
          const response = await axios.get(item.url);
          console.log(response);
        } catch (error) {
          console.error(`Error fetching ${item.url}:, error`);
        }
      }
    };
    useEffect(()=>{
      handleApi()
      showContent()
    },[])



  return (
    <>
      <div className="bg-black text-white w-[100%] h-[100vh]">
        <h2 className=" text-center text-[5rem] py-8 font-medium font-serif">Pokemons - World </h2>
        <div className="search flex gap-12 justify-center ">
          <select name="all" id="all" className="text-black w-44 p-2 text-xl"> 
          <option value="" disabled>
              Filter by Type
            </option>
            <option value="all"> All Types</option>
          </select>
       
          <input
            type="text"
            placeholder="Search for Anything"
            className="w-[30rem] py-2 pl-2 text-xl capitalize"
          />
        </div>
      
      </div>
    </>
  )
}

export default App
