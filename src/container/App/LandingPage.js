import React, { useState } from 'react';
import LandingPageComponent from '../../components/LandingPage/LandingPageComponent';
// import { withRouter } from 'react-router-dom';

const LandingPage = (props) => {
    console.log(props)
    const [count, setCount] = useState(1);
    console.log(count, "count")
    return (
        <LandingPageComponent
            protienData={[
                ["https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", 1899, 2299],
                ["https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", 1899, 2199],
                ["https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", 1899, 2599],
                ["https://nutrabay.com/wp-content/uploads/2019/10/NB-BSN-1005-12-pa.jpg", "Ultimate Nutrition Prostar 100% Whey Protein,  5.28 lb  Chocolate Creme", 1899, 2399]
            ]}
            fatBurnerData={[
                ["https://images-na.ssl-images-amazon.com/images/I/61%2Botc5mYSL._SX466_.jpg", "Muscleblaze Fat Burner 910 Mg , 90 Capsules Unflavoured", 410, 599],
                ["https://img10.hkrtcdn.com/9868/prd_986779-MuscleBlaze-Keto-Burner-60-capsules-Unflavoured_o.jpg", "MuscleBlaze Keto Burner, Fat Burner 60 capsules, Unflavoured", 900, 1299],
                ["https://img4.hkrtcdn.com/11741/prd_1174013-Evogen-Lipocide-X-Fat-Burner-60-capsules-Unflavoured_o.jpg", "Evogen Lipocide X Fat Burner, 60 capsules, Unflavoured", 2800, 3500],
                ["https://img6.hkrtcdn.com/2734/prd_273315_o.jpg", "MuscleTech Hydroxycut Hardcore Next Gen, 100 capsules, Unflavoured", 2900, 3000]
            ]}
            accessories={[
                ["https://rukminim1.flixcart.com/image/612/612/j47c2vk0/resistance-tube/7/z/f/double-toning-tube-klj74-fitness-solutions-original-imaev4yxrrhwqwff.jpeg?q=70", "BIOFIT POWER X RESIST CABLE LIGHT 39-57LBS", 800, 899],
                ["https://image1.jdomni.in/product/09052019/2F/55/0D/18C6A11EA1FE5724A41E5D74A2_1557384612066_235X235.jpeg", "BIOFIT PRO WRIST BAND ALL SIZES (General Size)", 700, 799],
                ["https://image1.jdomni.in/product/09052019/4B/62/FD/16B0AFAB03E8482861FE961B88_1557384045004_235X235.jpeg", "BIOFIT LIFTING HOOK 1340 Neoprene(General Size)", 1400, 1600],
                ["https://image1.jdomni.in/product/09052019/EF/B5/40/7D1A823764E1F64E60ACD5198A_1557383129292_235X235.jpeg", 'BIOFIT 5" TRAINING BELT XL SIZE 	BLACK COLOR', 990, 1100]
            ]}
        />
    )
}

export default LandingPage