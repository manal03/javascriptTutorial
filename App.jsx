import './App.css';
import Entry from './components/Entry.jsx';
import Header from './components/Header.jsx'
import data from './data.js'
export default function App(){
    const dataset = data.map((data)=>{
        return <Entry 
        key={data.id}
        // src={data.img.src}
        // alt={data.img.alt} 
        // title={data.title}
        // country={data.country}
        // link={data.googleMapsLink}
        // date ={data.dates}
        // desc={data.text}
        //data = {data}
        {...data}
        //can be done with spread and destructure 
         />
    })

    return(
    <>
    <Header />
    {dataset}
    
     </>
    )
}