import Editor, { Monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import { useRef } from 'react';
export default function CodeEditor(){
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
    const handleEditorMount = (editor:editor.IStandaloneCodeEditor,monaco:Monaco)=>{
        console.log(monaco)
        editorRef.current = editor;
    }
    const showValue = ()=>{
        
        alert(editorRef?.current?.getValue());
    }
    return(
        <>
        <Editor theme='vs-dark' height={"400px"} defaultLanguage='javascript' onMount={handleEditorMount}></Editor>
        <button onClick={showValue}>Clieck</button>
        </>
    )
}