import { useState, useRef, useCallback } from "preact/hooks";
import { Button } from "../components/Button.tsx";




export default function FilePicker() {
    const fileList :string[] = []
    const inputField = useRef(null) 
    const [results, setResults] = useState()
    
    const show = (file: string) => {
      fileList.push(file)
    }
    const showFiles = () => {
      fileList.forEach(el => console.log('file: ', el))
    }
    

  return (
    <div class="flex gap-2 w-full">
      
      <Button onClick={() => {
        showFiles()
        // console.log(document.getElementById('ff').value)
        }}>Select folder</Button>
      <input type="file" webkitdirectory 
            id="ff" 
            ref={inputField} 
            onChange= {(event) => {
              for (const file of event.target.files) {
               show(file)   
             }
            } 
            }
            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">  
      </input>
    </div>
  );
}