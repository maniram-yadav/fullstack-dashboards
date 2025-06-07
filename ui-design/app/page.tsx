'use client'
import FlipCard from "@/components/FlipCard";
import GrowEffectCard from "@/components/GrowEffectCard";
import MinimalDashboard from "@/components/MinimalDashboard";
import DarkProfessional from "@/components/DarkProfessional";
import EcommerceLayout from "@/components/EcommerceLayout";
import NeumorphicLayout from "@/components/NeumorphicLayout";
import GlassLayout from "@/components/GlassLayout";
import GradientLayout from "@/components/GradientLayout";
import ClassicNavbar from "@/components/navbar/ClassicNavbar";
import GlowCheckbox from "@/components/checkbox/GlowCheckbox";
import SlideUpModal from "@/components/modal/SlideUpModal";

import {  useState} from "react";

export default function Home() {
  const [comp,setComponent] = useState('flipcard');

  const component = {
    'flipcard':FlipCard,
    'groweffect':GrowEffectCard ,
  }

  return (
    <div>
      {/* <button onClick={()=>setComponent('flipcard')}>Flipcard</button>
      <button onClick={()=>setComponent('groweffect')}>GrowEffectCard</button> */}
      
      {/* <MinimalDashboard /> */}
      {/* <DarkProfessional /> */}
      {/* <GlassLayout /> */}
      {/* <GradientLayout /> */}
      {/* <NeumorphicLayout /> */}
      {/* <EcommerceLayout /> */}
     
     {/* navbar */}

     {/* <ClassicNavbar /> */}

          {/* checkbox */}
     {/* <GlowCheckbox /> */}

{/* modals */}
<SlideUpModal />

{/* card */}
     {/* <FlipCard />
     <GrowEffectCard /> */}
    </div>
  );
}
