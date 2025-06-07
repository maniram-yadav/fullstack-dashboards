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
import FlipCheckbox from "@/components/checkbox/FlipCheckbox";
import FadeTooltip from "@/components/tooltip/FadeInToolTip";
// import BounceTooltip from "@/components/tooltip/BounceTooltip";
import BlueBorderTooltip from "@/components/tooltip/BlueBorderTooltip";

import ExpandingSearchBar from "@/components/searchbar/ExpandingSearchBar";
import FloatingLabelSearchBar from "@/components/searchbar/FloatingLabelSearchBar";
import GlowingSearchBar from "@/components/searchbar/GlowingSearchBar";
import MorphingSearchButton from "@/components/searchbar/MorphingSearchButton";
import SlideUpSearchBar from "@/components/searchbar/SlideUpSearchBar";

import {  useState} from "react";

export default function Home() {
  const [comp,setComponent] = useState('flipcard');

  const component = {
    'flipcard':FlipCard,
    'groweffect':GrowEffectCard ,
  }

  return (
    <div>
      
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
          {/* <FlipCheckbox /> */}

{/* tooltip */}
{/* <FadeTooltip /> */}
{/* <BounceTooltip /> */}

{/* <BlueBorderTooltip /> */}

{/* modals */}
{/* <SlideUpModal /> */}



{/* search bar */}

<ExpandingSearchBar />
<FloatingLabelSearchBar />
<GlowingSearchBar />
<MorphingSearchButton />
<SlideUpSearchBar />

{/* card */}
     {/* <FlipCard />
     <GrowEffectCard /> */}
    </div>
  );
}
