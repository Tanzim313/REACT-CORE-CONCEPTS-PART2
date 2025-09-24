import {useState} from "react"

export default function Batsman(){
    
    const [runs,setRuns] = useState(0);
    const [six,setSix] = useState(0);


    const handlesingle = () =>{
        const updatedRuns = runs +1;
        setRuns(updatedRuns);
    }

    const handleFour = () =>{
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }

    const handleSix = () =>{
        const updatedRuns =runs + 6;
        setRuns(updatedRuns);

        const updatedSix = six+1;
        setSix(updatedSix);
    }

    return(
        <div>
            <h3>player:Bangla Batsman</h3>
            <h1>six:{six}</h1>
            <h1>Score:{runs} </h1>
            <button onClick={handlesingle}>singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )


}