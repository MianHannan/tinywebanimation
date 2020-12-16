import React from 'react'
import useWebAnimations, { bounce } from '@wellyshen/use-web-animations'

//component import
import HeaderSection from './component/HeaderSection'
import FeaturesSection from './component/FeaturesSection'
import UsedBySection from './component/UsedBySection'
import Footer from './component/Footer'

function App() {

  const headerAnim = useWebAnimations(bounce);

  return (
    <div>
      <HeaderSection ref={headerAnim.ref} />
      <FeaturesSection />
      <UsedBySection />
      <Footer />
    </div>
  );
}

export default App;