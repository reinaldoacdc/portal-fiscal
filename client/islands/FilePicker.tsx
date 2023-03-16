import { useState, useRef, useCallback } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import  Progress from '../components/ProgressBar.tsx'
import {
  DOMParser,
  Element,
} from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";


export default function FilePicker() {
    const [progress, setProgress] = useState(0)
    const [total, setTotal] = useState(0)
    const onStart = () => {console.log('start')};
    const onChange = (_, val) => {console.log('changes')};
    const onComplete = () => {
      console.log('complete')
    }


    const fileList :File[] = useState<File[]>([])
    //const fileList :string[] = []
    const inputField = useRef(null) 

    const show = (file: File) => {
      fileList.push(file)
    }
    const showFiles = () => {
      console.log('len: ', fileList.length)
      this.setState({
        total: fileList.length
      })
      fileList.forEach(el => {
        this.setState({
          progress: (this.state.progress * 1.3).toFixed(2)
        });
        console.log('afile: ', el)})
    }
    const [results, setResults] = useState<File[]>([])

    const toggleState = useCallback(  () => {
      let index = 0
      setTotal(fileList.length)
      console.log('total: ', total)
      fileList.forEach( el => {
        setProgress( index++ )
        if(el.name){
          console.log('afile: ', el)
          const reader = new FileReader()
          reader.readAsText(el);
  
          reader.onload = function() {
            //console.log(reader.result);
            const parser = new DOMParser()
            const xmlDoc = parser.parseFromString(reader.result!.toString(), "text/html")
            const tag = xmlDoc?.getElementsByTagName('ide')[0].getElementsByTagName('natOp')[0].textContent
            console.log("tag: ", tag)  
          };


          reader.onerror = function() {
            console.log(reader.error);
          };
        }
              
        console.log('progress: ', progress)
      })        
    });
    

  return (
    <div>
    <div class="flex gap-2 w-full">
      
      <Button onClick={() => {
        toggleState()
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
      <br/>
      
    </div>
    <div>
      <label for="loader">Downloading progress:</label>
      
      <Progress 
        id="loader" 
        className="loader"
        value={ progress } 
        height="100px" 
        color="#6cc644"
        onComplete={ onComplete }
        onChange={ onChange }
        onStart={ onStart }
      />
      </div>
    </div>
  );
}