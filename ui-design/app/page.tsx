'use client'
import FlipCard from "@/components/FlipCard";
import GrowEffectCard from "@/components/GrowEffectCard";
import MinimalDashboard from "@/components/MinimalDashboard";
import {  useState} from "react";

export default function Home() {
  const [comp,setComponent] = useState('flipcard');

  const component = {
    'flipcard':FlipCard,
    'groweffect':GrowEffectCard ,
  }

  return (
    <div className="container">
      {/* <button onClick={()=>setComponent('flipcard')}>Flipcard</button>
      <button onClick={()=>setComponent('groweffect')}>GrowEffectCard</button> */}
      <MinimalDashboard />
     {/* <FlipCard />
     <GrowEffectCard /> */}
    </div>
  );
}
