import React from "react";
import FeatureBox from "../Components/Home/FeatureBox"
import featureimage from "../Components/images/feature1.png";
import featureimage1 from "../Components/images/feature2.png";
import featureimage2 from "../Components/images/feature3.png";
import featureimage3 from "../Components/images/feature4.png";



function Feature() {
    return (
        <div id='features'>
            <div className="a-container">
                <FeatureBox image={featureimage} title="Wisata Budaya" />
                <FeatureBox image={featureimage1} title="Bantuan Pelayanan" />
                <FeatureBox image={featureimage2} title="Penawaran Terbaik" />
                <FeatureBox image={featureimage3} title="Aman & Terpercaya" />
            </div>
        </div>
    )
}

export default Feature;