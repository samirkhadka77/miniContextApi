 import React, { useState } from 'react'
 
 function App() {
   var [a,b] = useState(69);
   return (
     <div className='w-full h-screen bg-zinc-900 text-white'>
        <h1>{a}</h1>
        <button onClick={()=>b(a+1)} className='px-3 py-1 bg-green-600 rounded-md text-sm' >click</button>
     </div>
   )
 }
 
 export default App
 