
function App() {

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
