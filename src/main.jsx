import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root.jsx';
import Error from './Error/Error.jsx';
import About from './About/About.jsx';
import Services from './Service/Services.jsx';
import Ourworks from './OurWorks/Ourworks.jsx';
import Blogs from './Blog/Blogs.jsx';
import Contact from './Contact/Contact.jsx';
import Product from './Product/Product.jsx';
import Downloed from './Downloed/Downloed.jsx';
import Home from './home/Home.jsx';
import Grass from './Product/Grass.jsx';
import Vinyl from './Product/Vinyl.jsx';
import Gym from './Product/Gym.jsx';
import Deck from './Product/Deck.jsx';
import Spc from './Product/Spc.jsx';
import Ltv from './Product/Ltv.jsx';
import Laminate from './Product/Laminate.jsx';
import Carpet from './Product/Carpet.jsx';
import Wood from './Product/Wood.jsx';
import Rubber from './Product/Rubber.jsx';
import Wall from './Product/Wall.jsx';
import Pvc from './Product/Pvc.jsx';
import Admindashbord from './Admindasbord/Admindashbord.jsx';
import Usermassage from './Usermassage/Usermassage.jsx';
import Blogpublish from './Blog_publish/Blogpublish.jsx';
import Freesample from './Freesample/Freesample.jsx';
import Enquiry from './Enquiry/Enquiry.jsx';
import Workpublish from './work_publish/Workpublish.jsx';
import Samplerequest from './Freesample/Samplerequest.jsx';
import Grassproductuplode from './Product_update/Grass_product_update/Grassproductuplode.jsx';
import Vinayproductuplode from './Product_update/Vinay_product_update/Vinayproductuplode.jsx';
import Gymproductuplode from './Product_update/Gym_product_uplode/Gymproductuplode.jsx';
import Duckproductuplode from './Product_update/Duck_product_uplode/Duckproductuplode.jsx';
import Spcproductuplode from './Product_update/Spc_product_uplode/Spcproductuplode.jsx';
import Lvtproductuplode from './Product_update/Lvt_product_uplode/Lvtproductuplode.jsx';
import Laminateproductuplode from './Product_update/Laminate_product_uplode/Laminateproductuplode.jsx';
import Carpetproductuplode from './Product_update/Carpet_product_uplode/Carpetproductuplode.jsx';
import Woodproductuplode from './Product_update/Wood_product_uplode/Woodproductuplode.jsx';
import Wallproductuplode from './Product_update/Wall_product_uplode/Wallproductuplode.jsx';
import Rabbarproductuplode from './Product_update/Rabbar_product_uplode/Rabbarproductuplode.jsx';
import Pvcproductuplode from './Product_update/Pvc_product_uplode/Pvcproductuplode.jsx';
import Authprovider from './provider/Authprovider/Authprovider.jsx';
import Adminlogin from './adminauthection/Adminlogin.jsx';
import Adminsingup from './adminauthection/Adminsingup.jsx';
import Privet from './provider/privet/Privet.jsx';
import Adminhome from './Admindasbord/Adminhome.jsx';
import Userloc from './Useloc/Userloc.jsx';
import Grassproductedit from './Product_update/Grass_product_update/Grassproductedit.jsx';
import Gymedit from './Product_update/Gym_product_uplode/Gymedit.jsx';
import Vinayedit from './Product_update/Vinay_product_update/Vinayedit.jsx';
import Duckedit from './Product_update/Duck_product_uplode/Duckedit.jsx';
import Spcedit from './Product_update/Spc_product_uplode/Spcedit.jsx';
import Lvtedit from './Product_update/Lvt_product_uplode/Lvtedit.jsx';
import Laminatedit from './Product_update/Laminate_product_uplode/Laminatedit.jsx';
import Carpetedit from './Product_update/Carpet_product_uplode/Carpetedit.jsx';
import Woodedit from './Product_update/Wood_product_uplode/Woodedit.jsx';
import Rubbaredit from './Product_update/Rabbar_product_uplode/Rubbaredit.jsx';
import Walledit from './Product_update/Wall_product_uplode/Walledit.jsx';
import Pvcedit from './Product_update/Pvc_product_uplode/Pvcedit.jsx';
import Blogedit from './Blog_publish/Blogedit.jsx';
import Workedit from './work_publish/Workedit.jsx';
import Grasssubproduct from './Product_update/Grass_product_update/Grasssubproduct.jsx';
import Vinaysubproduct from './Product_update/Vinay_product_update/Vinaysubproduct.jsx';
import Gymsubproduct from './Product_update/Gym_product_uplode/Gymsubproduct.jsx';
import Ducksubproduct from './Product_update/Duck_product_uplode/Ducksubproduct.jsx';
import Spcsubproduct from './Product_update/Spc_product_uplode/Spcsubproduct.jsx';

import Hugamara from './Product_update/Lvt_product_uplode/Hugamara.jsx';
import Laminatesubproduct from './Product_update/Laminate_product_uplode/Laminatesubproduct.jsx';
import Carpetsubproduct from './Product_update/Carpet_product_uplode/Carpetsubproduct.jsx';
import Woodsubproduct from './Product_update/Wood_product_uplode/Woodsubproduct.jsx';
import Rabbersubproduct from './Product_update/Rabbar_product_uplode/Rabbersubproduct.jsx';
import Wallsubproduct from './Product_update/Wall_product_uplode/Wallsubproduct.jsx';
import Pvcsubproduct from './Product_update/Pvc_product_uplode/Pvcsubproduct.jsx';
import Football from './Subproduct/Grasssubproduct/Football.jsx';
import Landscaping from './Subproduct/Grasssubproduct/Landscaping.jsx';
import Playground from './Subproduct/Grasssubproduct/Playground.jsx';
import Colorfullgrass from './Subproduct/Grasssubproduct/Colorfullgrass.jsx';
import Exhibition from './Subproduct/Grasssubproduct/Exhibition.jsx';
import Accessories from './Subproduct/Grasssubproduct/Accessories.jsx';
import Granitevinyl from './Subproduct/Vinylsubproduct/Granitevinyl.jsx';
import Woodpattern from './Subproduct/Vinylsubproduct/Woodpattern.jsx';
import Coinvinyl from './Subproduct/Vinylsubproduct/Coinvinyl.jsx';
import Linoleumvinyl from './Subproduct/Vinylsubproduct/Linoleumvinyl.jsx';
import Homogeneous from './Subproduct/Vinylsubproduct/Homogeneous.jsx';
import Sigmamedical from './Subproduct/Vinylsubproduct/Sigmamedical.jsx';
import Heterogeneous from './Subproduct/Vinylsubproduct/Heterogeneous.jsx';
import Plaincolor from './Subproduct/Vinylsubproduct/Plaincolor.jsx';
import Cresto from './Subproduct/Vinylsubproduct/Cresto.jsx';
import Vinylaccessories from './Subproduct/Vinylsubproduct/Vinylaccessories.jsx';
import Epdmgymroll from './Subproduct/Gymsubproduct/Epdmgymroll.jsx';
import Epdmgymtile from './Subproduct/Gymsubproduct/Epdmgymtile.jsx';
import Sportsgym from './Subproduct/Gymsubproduct/Sportsgym.jsx';
import Acaia from './Subproduct/Decksubproduct/Acaia.jsx';
import Wpcdecktiles from './Subproduct/Decksubproduct/Wpcdecktiles.jsx';
import Wpccoextrusiondecktiles from './Subproduct/Decksubproduct/Wpccoextrusiondecktiles.jsx';
import Wpccoextrusionsolid from './Subproduct/Decksubproduct/Wpccoextrusionsolid.jsx';
import Wpcsolid from './Subproduct/Decksubproduct/Wpcsolid.jsx';
import Bamboosolid from './Subproduct/Decksubproduct/Bamboosolid.jsx';
import Wpc3d from './Subproduct/Decksubproduct/Wpc3d.jsx';
import Wpc3dsquare from './Subproduct/Decksubproduct/Wpc3dsquare.jsx';
import Wpc3dsuareline from './Subproduct/Decksubproduct/Wpc3dsuareline.jsx';
import Wpcsquarewood from './Subproduct/Decksubproduct/Wpcsquarewood.jsx';
import Falconeva from './Subproduct/Spcsubproduct/Falconeva.jsx';
import Camelspc from './Subproduct/Spcsubproduct/Camelspc.jsx';
import Highereva from './Subproduct/Spcsubproduct/Highereva.jsx';
import Higherspc from './Subproduct/Spcsubproduct/Higherspc.jsx';
import Herringbonespc from './Subproduct/Spcsubproduct/Herringbonespc.jsx';
import Herringeva from './Subproduct/Spcsubproduct/Herringeva.jsx';
import Stonespc from './Subproduct/Spcsubproduct/Stonespc.jsx';
import Spcaccessories from './Subproduct/Spcsubproduct/Spcaccessories.jsx';
import Timberland from './Subproduct/Lvtsubproduct/Timberland.jsx';
import Lvtaccessories from './Subproduct/Lvtsubproduct/Lvtaccessories.jsx';
import Hdf from './Subproduct/Laminatesubproduct/Hdf.jsx';
import Mdf from './Subproduct/Laminatesubproduct/Mdf.jsx';
import Laminateacessries from './Subproduct/Laminatesubproduct/Laminateacessries.jsx';
import Luxuria from './Subproduct/Carpetsubproduct/Luxuria.jsx';
import Platium from './Subproduct/Carpetsubproduct/Platium.jsx';
import Carpetaccessries from './Subproduct/Carpetsubproduct/Carpetaccessries.jsx';
import Europeanflooring from './Subproduct/woodsubproduct/Europeanflooring.jsx';
import Bamboowood from './Subproduct/woodsubproduct/Bamboowood.jsx';
import Woodenaccessories from './Subproduct/woodsubproduct/Woodenaccessories.jsx';
import Rubbertile from './Subproduct/Rubbersubproduct/Rubbertile.jsx';
import Cointiles from './Subproduct/Rubbersubproduct/Cointiles.jsx';
import Coinrubber from './Subproduct/Rubbersubproduct/Coinrubber.jsx';
import Checkerrubber from './Subproduct/Rubbersubproduct/Checkerrubber.jsx';
import Dimonrubber from './Subproduct/Rubbersubproduct/Dimonrubber.jsx';
import Linerubber from './Subproduct/Rubbersubproduct/Linerubber.jsx';
import Evamat from './Subproduct/Rubbersubproduct/Evamat.jsx';
import Hollowmat from './Subproduct/Rubbersubproduct/Hollowmat.jsx';
import Horsemat from './Subproduct/Rubbersubproduct/Horsemat.jsx';
import Soundproft from './Subproduct/Rubbersubproduct/Soundproft.jsx';
import Rubberaccessries from './Subproduct/Rubbersubproduct/Rubberaccessries.jsx';

import Bubblemat from './Subproduct/Rubbersubproduct/Bubblemat.jsx';
import Wpcco from './Subproduct/wallsubproduct/Wpcco.jsx';
import Wpcod from './Subproduct/wallsubproduct/Wpcod.jsx';
import Pu from './Subproduct/wallsubproduct/Pu.jsx';
import Pvcsquare from './Subproduct/wallsubproduct/Pvcsquare.jsx';
import Pvcsolid from './Subproduct/wallsubproduct/Pvcsolid.jsx';
import Pvcround from './Subproduct/wallsubproduct/Pvcround.jsx';
import Wallsheet from './Subproduct/wallsubproduct/Wallsheet.jsx';
import Wallaccessries from './Subproduct/wallsubproduct/Wallaccessries.jsx';
import Wetmat from './Subproduct/Pvcsubproduct/Wetmat.jsx';
import Coilmat from './Subproduct/Pvcsubproduct/Coilmat.jsx';
import Pvcmat from './Subproduct/Pvcsubproduct/Pvcmat.jsx';
import Clearpvc from './Subproduct/Pvcsubproduct/Clearpvc.jsx';
import Logouplode from './logo/Logouplode.jsx';
import Logoedit from './logo/Logoedit.jsx';
import Gymflooringmat from './Subproduct/Gymsubproduct/Gymflooringmat.jsx';
import Gymaccessories from './Subproduct/Gymsubproduct/Gymaccessories.jsx';
import Footballuplode from './sub_product_uplode/grass_sub_uplode/Footballuplode.jsx';
import Colorfulgrassuplode from './sub_product_uplode/grass_sub_uplode/Colorfulgrassuplode.jsx';
import Exhibitionuplode from './sub_product_uplode/grass_sub_uplode/Exhibitionuplode.jsx';
import Golfuplode from './sub_product_uplode/grass_sub_uplode/Golfuplode.jsx';
import Playgrounduplode from './sub_product_uplode/grass_sub_uplode/Playgrounduplode.jsx';
import Landscapinguplode from './sub_product_uplode/grass_sub_uplode/Landscapinguplode.jsx';
import Grassaccessoriesuplode from './sub_product_uplode/grass_sub_uplode/Grassaccessoriesuplode.jsx';
import Granite from './sub_product_uplode/viyle_sub_uplode/Graniteu.jsx';
import Accessoriesu from './sub_product_uplode/viyle_sub_uplode/Accessoriesu.jsx';
import Graniteu from './sub_product_uplode/viyle_sub_uplode/Graniteu.jsx';
import Coinviyleu from './sub_product_uplode/viyle_sub_uplode/Coinviyleu.jsx';
import Sigmamedicalu from './sub_product_uplode/viyle_sub_uplode/Sigmamedicalu.jsx';
import Woodpatternu from './sub_product_uplode/viyle_sub_uplode/Woodpatternu.jsx';
import Crestovinylu from './sub_product_uplode/viyle_sub_uplode/Crestovinylu.jsx';
import Heterogeneousvinylu from './sub_product_uplode/viyle_sub_uplode/Heterogeneousvinylu.jsx';
import Homogeneousmedicalu from './sub_product_uplode/viyle_sub_uplode/Homogeneousmedicalu.jsx';
import Linoleumu from './sub_product_uplode/viyle_sub_uplode/Linoleumu.jsx';
import Plaincolorvinylu from './sub_product_uplode/viyle_sub_uplode/Plaincolorvinylu.jsx';
import Edmgym from './sub_product_uplode/gym_sub-uplode/Edmgym.jsx';
import Epdmtile from './sub_product_uplode/gym_sub-uplode/Epdmtile.jsx';
import Sportgym from './sub_product_uplode/gym_sub-uplode/Sportgym.jsx';
import Timberlandexotica from './sub_product_uplode/ltv_sub_uplode/Timberlandexotica.jsx';
import Accessorieslvt from './sub_product_uplode/ltv_sub_uplode/Accessorieslvt.jsx';
import Luxuriacarpettiles from './sub_product_uplode/carpet_sub_uplode/Luxuriacarpettiles.jsx';
import Platinumcarpettiles from './sub_product_uplode/carpet_sub_uplode/Platinumcarpettiles.jsx';
import Exhibitioncarpet from './sub_product_uplode/carpet_sub_uplode/Exhibitioncarpet.jsx';
import Hdfuplode from './sub_product_uplode/Laminat_sub_uplode/Hdfuplode.jsx';
import Mdfuplode from './sub_product_uplode/Laminat_sub_uplode/Mdfuplode.jsx';
import Laminateaccessoriesuplode from './sub_product_uplode/Laminat_sub_uplode/Laminateaccessoriesuplode.jsx';
import Europeanengineereduplode from './sub_product_uplode/Wood_product_uplode/Europeanengineereduplode.jsx';
import Bambooflooringuplode from './sub_product_uplode/Wood_product_uplode/Bambooflooringuplode.jsx';
import Woodaccessoriesuplod from './sub_product_uplode/Wood_product_uplode/Woodaccessoriesuplod.jsx';
import Wetmetuplode from './sub_product_uplode/pvc_sub_uplode/Wetmetuplode.jsx';
import Pvcmatuplode from './sub_product_uplode/pvc_sub_uplode/Pvcmatuplode.jsx';
import Pvccomlimat from './sub_product_uplode/pvc_sub_uplode/Pvccomlimat.jsx';
import Clearpvcuplode from './sub_product_uplode/pvc_sub_uplode/Clearpvcuplode.jsx';
import Acaciadeck from './sub_product_uplode/Deck_sub_uplode/Acaciadeck.jsx';
import Wpcdeck from './sub_product_uplode/Deck_sub_uplode/Wpcdeck.jsx';
import Wpccoextrusiondeck from './sub_product_uplode/Deck_sub_uplode/Wpccoextrusiondeck.jsx';
import Wpccoextrusionsoliddeckuplod from './sub_product_uplode/Deck_sub_uplode/Wpccoextrusionsoliddeckuplod.jsx';
import Bamboosoliduplode from './sub_product_uplode/Deck_sub_uplode/Bamboosoliduplode.jsx';
import Wpc3dhollowround from './sub_product_uplode/Deck_sub_uplode/Wpc3dhollowround.jsx';
import Wpc3dhollowsquare from './sub_product_uplode/Deck_sub_uplode/Wpc3dhollowsquare.jsx';
import Wpchollowsquarelineuplode from './sub_product_uplode/Deck_sub_uplode/Wpchollowsquarelineuplode.jsx';
import Accessoriesdeckuplode from './sub_product_uplode/Deck_sub_uplode/Accessoriesdeckuplode.jsx';
import Accessorieswalluplode from './sub_product_uplode/Wall_sub_uplode/Accessorieswalluplode.jsx';
import Pustoneuplode from './sub_product_uplode/Wall_sub_uplode/Pustoneuplode.jsx';
import Pvcrounduplode from './sub_product_uplode/Wall_sub_uplode/Pvcrounduplode.jsx';
import Pvcsoliduplode from './sub_product_uplode/Wall_sub_uplode/Pvcsoliduplode.jsx';
import Pvcsquareuplode from './sub_product_uplode/Wall_sub_uplode/Pvcsquareuplode.jsx';
import Wallacrylicuplode from './sub_product_uplode/Wall_sub_uplode/Wallacrylicuplode.jsx';
import Wallcladdinguplode from './sub_product_uplode/Wall_sub_uplode/Wallcladdinguplode.jsx';
import Wpcoduplode from './sub_product_uplode/Wall_sub_uplode/Wpcoduplode.jsx';
import StoneUplode from './sub_product_uplode/Spc_sub_uplode/StoneUplode.jsx';
import Herringboneuplode from './sub_product_uplode/Spc_sub_uplode/Herringboneuplode.jsx';
import HigherspcUplode from './sub_product_uplode/Spc_sub_uplode/Higherspcuplode.jsx';
import Higherevauplode from './sub_product_uplode/Spc_sub_uplode/Higherevauplode.jsx';
import Wallcladding from './Subproduct/wallsubproduct/Wallcladding.jsx';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
     {
      path:"/",
      element:<Home></Home>
     },
     {
      path:"/about",
      element:<About></About>

     },
     {
      path:"/product",
      element:<Product></Product>

     },
     {
      path:"/grass",
      element:<Grass></Grass>,

     },
    //  grass subproduct path
     {
      path:"/football",
      element:<Football></Football>

     },
     {
      path:"/landscaping",
      element:<Landscaping></Landscaping>

     },
     {
      path:"/playground",
      element:<Playground></Playground>

     },
     {
      path:"/colorfull",
      element:<Colorfullgrass></Colorfullgrass>

     },
     {
      path:"/exhibition",
      element:<Exhibition></Exhibition>

     },
     {
      path:"/grass-accessories",
      element:<Accessories></Accessories>

     },
     {
      path:"/vinyl",
      element:<Vinyl></Vinyl>,

     },
    //  vinyl subproduct path 
    {
      path:"/granite",
      element:<Granitevinyl></Granitevinyl>
    },
    {
      path:"/wood-pattern",
      element:<Woodpattern></Woodpattern>
    },
    {
      path:"/coin-vinyl",
      element:<Coinvinyl></Coinvinyl>
    },
    {
      path:"/linoleum-vinyl",
      element:<Linoleumvinyl></Linoleumvinyl>
    },
    {
      path:"/homogeneous-medical-vinyl",
      element:<Homogeneous></Homogeneous>
    },
    {
      path:"/sigma-medical-vinyl",
      element:<Sigmamedical></Sigmamedical>
    },
    {
      path:"/heterogeneous-vinyl",
      element:<Heterogeneous></Heterogeneous>
    },
    {
      path:"/plain-color-vinyl",
      element:<Plaincolor></Plaincolor>
    },
    {
      path:"/cresto-vinyl",
      element:<Cresto></Cresto>
    },
    {
      path:"/vinyl-accerssories",
      element:<Vinylaccessories></Vinylaccessories>
    },

     {
      path:"/gym",
      element:<Gym></Gym>,

     },
    //  GyM Subproduct Path 
    {
      path:"/epdm-gym-roll",
      element:<Epdmgymroll></Epdmgymroll>

    },
    {
      path:"/epdm-gym-tile",
      element:<Epdmgymtile></Epdmgymtile>

    },
    {
      path:"/sport-gym",
      element:<Sportsgym></Sportsgym>

    },
    {
      path:"/gym-flooring-mat",
      element:<Gymflooringmat></Gymflooringmat>

    },
    {
      path:"/gym-accessories",
      element:<Gymaccessories></Gymaccessories>

    },
     {
      path:"/deck",
      element:<Deck></Deck>,

     },
    //  Deck SubProduct path
    {
      path:"/acaia",
      element:<Acaia></Acaia>

    },
    {
      path:"/wpc-deck-tiles",
      element:<Wpcdecktiles></Wpcdecktiles>

    },
    {
      path:"/wpc-co-extusion-deck-tiles",
      element:<Wpccoextrusiondecktiles></Wpccoextrusiondecktiles>

    },
    {
      path:"/wpc-co-extusion-solid-Floring",
      element:<Wpccoextrusionsolid></Wpccoextrusionsolid>

    },
    {
      path:"/wpc-solid-Floring",
      element:<Wpcsolid></Wpcsolid>

    },
    {
      path:"/bamboo-solid",
      element:<Bamboosolid></Bamboosolid>

    },
    {
      path:"/wpc-3d",
      element:<Wpc3d></Wpc3d>

    },
    {
      path:"/wpc-3d-square",
      element:<Wpc3dsquare></Wpc3dsquare>

    },
    {
      path:"/wpc-3d-square-line",
      element:<Wpc3dsuareline></Wpc3dsuareline>

    },
    {
      path:"/wpc-square-wood",
      element:<Wpcsquarewood></Wpcsquarewood>

    },
     {
      path:"/spc",
      element:<Spc></Spc>,

     },
    //  Spc subproduct path
    {
      path:"/falconeva",
      element:<Falconeva></Falconeva>
    },
    {
      path:"/camelspc",
      element:<Camelspc></Camelspc>
    },
    {
      path:"/higher-eva",
      element:<Highereva></Highereva>
    },
    {
      path:"/higher-spc",
      element:<Higherspc></Higherspc>
    },
    {
      path:"/herring-spc",
      element:<Herringbonespc></Herringbonespc>
    },
    {
      path:"/herring-eva",
      element:<Herringeva></Herringeva>
    },
    {
      path:"/stone-spc",
      element:<Stonespc></Stonespc>
    },
    {
      path:"/spc-accessories",
      element:<Spcaccessories></Spcaccessories>
    },

     {
      path:"/ltv",
      element:<Ltv></Ltv>,

     },
    //  ltv subproduct path
    {
      path:"/timberland",
      element:<Timberland></Timberland>

    },
    {
      path:"/lvt-accessories",
      element:<Lvtaccessories></Lvtaccessories>

    },
     {
      path:"/laminate",
      element:<Laminate></Laminate>,

     },
    //  laminate subproduct path
    {
    path:"/hdf",
    element:<Hdf></Hdf>
    },
    {
    path:"/mdf",
    element:<Mdf></Mdf>
    },
    {
    path:"/laminate-accessories",
    element:<Laminateacessries></Laminateacessries>
    },

     {
      path:"/carpet",
      element:<Carpet></Carpet>,

     },
    //  carpet subproduct path
    {
      path:"/luxuria",
      element:<Luxuria></Luxuria>

    },
    {
      path:"/platium",
      element:<Platium></Platium>

    },
    {
      path:"/carpet-accessries",
      element:<Carpetaccessries></Carpetaccessries>

    },

     {
      path:"/wood",
      element:<Wood></Wood>,

     },
    //  wood subproduct path
    {
      path:"/european",
      element:<Europeanflooring></Europeanflooring>

    },
    {
      path:"/bamboo-wood",
      element:<Bamboowood></Bamboowood>

    },
    {
      path:"/accessries-wood",
      element:<Woodenaccessories></Woodenaccessories>

    },
     {
      path:"/rubber",
      element:<Rubber></Rubber>,

     },
    //  rubber subproduct path
    {
      path:"/rubber-tiles",
      element:<Rubbertile></Rubbertile>

    },
    {
      path:"/coin-tiles",
      element:<Cointiles></Cointiles>

    },
    {
      path:"/coin-rubber",
      element:<Coinrubber></Coinrubber>

    },
    {
      path:"/checker-rubber",
      element:<Checkerrubber></Checkerrubber>

    },
    {
      path:"/dimond-rubber",
      element:<Dimonrubber></Dimonrubber>

    },
    {
      path:"/line-rubber",
      element:<Linerubber></Linerubber>

    },
    {
      path:"/eva-mat",
      element:<Evamat></Evamat>

    },
    {
      path:"/hollow-mat",
      element:<Hollowmat></Hollowmat>

    },
    {
      path:"/horse-mat",
      element:<Horsemat></Horsemat>

    },
    {
      path:"/bubble-mat",
      element:<Bubblemat></Bubblemat>

    },
    {
      path:"/Sound-poroft",
      element:<Soundproft></Soundproft>

    },
    {
      path:"/rubber-accessries",
      element:<Rubberaccessries></Rubberaccessries>

    },
     {
      path:"/wall",
      element:<Wall></Wall>,

     },
    //  wall subproduct path
    {
      path:"/wall-cladding",
      element:<Wallcladding></Wallcladding>

    },
    {
      path:"/wpc-co",
      element:<Wpcco></Wpcco>

    },
    {
      path:"/wpc-od",
      element:<Wpcod></Wpcod>

    },
    {
      path:"/pu",
      element:<Pu></Pu>

    },
    {
      path:"/pvc-square",
      element:<Pvcsquare></Pvcsquare>

    },
    {
      path:"/pvc-solid",
      element:<Pvcsolid></Pvcsolid>

    },
    {
      path:"/pvc-round",
      element:<Pvcround></Pvcround>

    },
    {
      path:"/wall-sheet",
      element:<Wallsheet></Wallsheet>

    },
    {
      path:"/wall-accessries",
      element:<Wallaccessries></Wallaccessries>

    },
    
     {
      path:"/pvc",
      element:<Pvc></Pvc>,

     },
    //  pvc subproduct path 
    {
      path:"/wet-mat",
      element:<Wetmat></Wetmat>

    },
    {
      path:"/coil-mat",
      element:<Coilmat></Coilmat>

    },
    {
      path:"/pvc-mat",
      element:<Pvcmat></Pvcmat>

    },
    {
      path:"/clear-pvc",
      element:<Clearpvc></Clearpvc>

    },

     {
      path:"/services",
      element:<Services></Services>

     },
     {
      path:"/our-works",
      element:<Ourworks></Ourworks>,
      
     

     },
    
     {
      path:"/blog",
      element:<Blogs></Blogs>

     },
     {
      path:"/contact-us",
      element:<Contact></Contact>

     },
     {
      path:"/download",
      element:<Downloed></Downloed>

     },
     {
      path:"/free-sample",
      element:<Freesample></Freesample>

     },
     {
      path:"/enquiry",
      element:<Enquiry></Enquiry>
     },
     {
      path:"/singup",
      element:<Privet><Adminsingup></Adminsingup></Privet>

     },
     {
      path:"/login",
      element:<Adminlogin></Adminlogin>
      
     }
     
    ]
  },
  {
    path:"/admin",
    element:
      <Privet><Admindashbord></Admindashbord></Privet>,
    children:[
      {
        path:"/admin/home",
        element:<Adminhome></Adminhome>
      },
      
      {
        path:"/admin/users-massage",
        element:<Usermassage></Usermassage>

      },
      {
        path:"/admin/logo",
        element:<Logouplode></Logouplode>
      },
      {
        path:"/admin/logo-edit",
        element:<Logoedit></Logoedit>

      },
      {
        path:"/admin/users",
        element:<Userloc></Userloc>,
        loader :() => fetch("https://test.zrsflooring.com/user")
        
      },
      {
        path:"/admin/blog-publish",
        element:<Blogpublish></Blogpublish>
      },
      {
        path:"/admin/blog-edit",
        element:<Blogedit></Blogedit>
      },
      {
        path:"/admin/our-work-publish",
        element:<Workpublish></Workpublish>
      },
      {
        path:"/admin/our-work-edit",
        element:<Workedit></Workedit>

      },
      {
        path:"/admin/sample-request",
        element:<Samplerequest></Samplerequest>
      },
      {
        path:"/admin/grass-upload-product",
        element:<Grassproductuplode></Grassproductuplode>
      },
      {
        path:"/admin/football-grass",
        element:<Footballuplode></Footballuplode>


      },
      {
        path:"/admin/colorfull-grass",
        element:<Colorfulgrassuplode></Colorfulgrassuplode>


      },
      {
        path:"/admin/exhibitionuplode-grass",
        element:<Exhibitionuplode></Exhibitionuplode>


      },
      {
        path:"/admin/golf-grass",
        element:<Golfuplode></Golfuplode>


      },
      {
        path:"/admin/playground-grass",
        element:<Playgrounduplode></Playgrounduplode>


      },
      {
        path:"/admin/landscaping-grass",
        element:<Landscapinguplode></Landscapinguplode>


      },
      {
        path:"/admin/assaccessories-grass",
        element:<Grassaccessoriesuplode></Grassaccessoriesuplode>


      },
      {
        path:"/admin/grass-edit",
        element:<Grassproductedit></Grassproductedit>

      },
      {
        path:"/admin/subproductg",
        element:<Grasssubproduct></Grasssubproduct>

      },
      
      
      {
        path:"/admin/vinyl-upload-product",
        element:<Vinayproductuplode></Vinayproductuplode>
      },
      
      {
        path:"/admin/granite",
        element:<Granite></Granite>

      },
      {
        path:"/admin/granite-upload",
        element:<Graniteu></Graniteu>

      },
      {
        path:"/admin/coinviyle-upload",
        element:<Coinviyleu></Coinviyleu>

      },
      {
        path:"/admin/sigmaviyle-upload",
        element:<Sigmamedicalu></Sigmamedicalu>

      },
      {
        path:"/admin/woodviyle-upload",
        element:<Woodpatternu></Woodpatternu>

      },
      {
        path:"/admin/crestoviyle-upload",
        element:<Crestovinylu></Crestovinylu>

      },
      {
        path:"/admin/heterogeneous-upload",
        element:<Heterogeneousvinylu></Heterogeneousvinylu>

      },
      {
        path:"/admin/homogeneousmedicalu-upload",
        element:<Homogeneousmedicalu></Homogeneousmedicalu>

      },
      {
        path:"/admin/Linoleumu-upload",
        element:<Linoleumu></Linoleumu>

      },
      {
        path:"/admin/Plaincolor-upload",
        element:<Plaincolorvinylu></Plaincolorvinylu>

      },
      {
        path:"/admin/accessories-uplode",
        element:<Accessoriesu></Accessoriesu>
      },
      {
        path:"/admin/subproductvi",
        element:<Vinaysubproduct></Vinaysubproduct>,

      },
      {
        path:"/admin/vinyl-edit",
        element:<Vinayedit></Vinayedit>

      },
      {
        path:"/admin/gym-upload-product",
        element:<Gymproductuplode></Gymproductuplode>
      },
      {
        path:"/admin/subproductgym",
        element:<Gymsubproduct></Gymsubproduct>,

      },
      {
        path:"/admin/epdm-gym",
        element:<Edmgym></Edmgym>

      },
      {
        path:"/admin/epdm-tile",
        element:<Epdmtile></Epdmtile>

      },
      {
        path:"/admin/sportgym",
        element:<Sportgym></Sportgym>

      },
      {
        path:"/admin/gym-edit",
        element:<Gymedit></Gymedit>

      },
      {
        path:"/admin/deck-upload-product",
        element:<Duckproductuplode></Duckproductuplode>
      },
      {
        path:"/admin/subproductdeck",
        element:<Ducksubproduct></Ducksubproduct>,

      },
      {
        path:"/admin/acaciadeck-uplode",
        element:<Acaciadeck></Acaciadeck>

      },
      {
        path:"/admin/wpcdeck-uplode",
        element:<Wpcdeck></Wpcdeck>

      },
      {
        path:"/admin/wpc-co-coextrusiond",
        element:<Wpccoextrusiondeck></Wpccoextrusiondeck>

      },
      {
        path:"/admin/wpc-co-extrusions-solid",
        element:<Wpccoextrusionsoliddeckuplod></Wpccoextrusionsoliddeckuplod>

      },
      {
        path:"/admin/wpc-solid-uplode",
        element:<Wpcsolid></Wpcsolid>

      },
      {
        path:"/admin/bamboo-solid-uplode",
        element:<Bamboosoliduplode></Bamboosoliduplode>

      },
      {
        path:"/admin/wpc3d-hollow-uplode",
        element:<Wpc3dhollowround></Wpc3dhollowround>

      },
      {
        path:"/admin/wpc3d-hollow-square-uplode",
        element:<Wpc3dhollowsquare></Wpc3dhollowsquare>

      },
      {
        path:"/admin/wpc-hollow-square-line-uplode",
        element:<Wpchollowsquarelineuplode></Wpchollowsquarelineuplode>

      },
      {
        path:"/admin/wpc-hollow-square-wood-uplode",
        element:<Wpccoextrusionsoliddeckuplod></Wpccoextrusionsoliddeckuplod>

      },
      {
        path:"/admin/asscress-uplode",
        element:<Accessoriesdeckuplode></Accessoriesdeckuplode>

      },
      {
        path:"/admin/duck-edit",
        element:<Duckedit></Duckedit>
      },
      {
        path:"/admin/deck-upload-product",
        element:<Duckproductuplode></Duckproductuplode>
      },
      {
        path:"/admin/spc-upload-product",
        element:<Spcproductuplode></Spcproductuplode>
      },
      {
        path:"/admin/subproductspc",
        element:<Spcsubproduct></Spcsubproduct>

      },
      {
        path:"/admin/stone-uplode",
        element:<StoneUplode></StoneUplode>

      },
      {
        path:"/admin/higher-spc-uplode",
        element:<HigherspcUplode></HigherspcUplode>

      },
      {
        path:"/admin/higher-eva-uplode",
        element:<Higherevauplode></Higherevauplode>

      },
      {
        path:"/admin/herring-eva-uplode",
        element:<Herringboneuplode></Herringboneuplode>

        // start

      },
      {
        path:"/admin/spc-edit",
        element:<Spcedit></Spcedit>

      },
      {
        path:"/admin/lvt-upload-product",
        element:<Lvtproductuplode></Lvtproductuplode>
      },
      {
       path:"/admin/tmberlandexotica",
       element:<Timberlandexotica></Timberlandexotica>
      },
      {
       path:"/admin/lvt-accessories",
       element:<Accessorieslvt></Accessorieslvt>
      },
      {
        path:"/admin/subproductltv",
        element:<Hugamara></Hugamara>

      },
      {
        path:"/admin/lvt-edit",
        element:<Lvtedit></Lvtedit>
      },
      {
        path:"/admin/laminate-upload-product",
        element:<Laminateproductuplode></Laminateproductuplode>
      },
      {
        path:"/admin/hdf-uplode",
        element:<Hdfuplode></Hdfuplode>

      },
      {
        path:"/admin/mdf-uplode",
        element:<Mdfuplode></Mdfuplode>

      },
      {
        path:"/admin/laminateaccessories-uplode",
        element:<Laminateaccessoriesuplode></Laminateaccessoriesuplode>

      },
      {
        path:"/admin/subproductlam",
        element:<Laminatesubproduct></Laminatesubproduct>

      },
      {
        path:"/admin/laminate-edit",
        element:<Laminatedit></Laminatedit>,

      },
      {
        path:"/admin/carpet-upload-product",
        element:<Carpetproductuplode></Carpetproductuplode>
      },
      {
        path:"/admin/subproductcar",
        element:<Carpetsubproduct></Carpetsubproduct>

      },
      {
        path:"/admin/luxuria-uplode",
        element:<Luxuriacarpettiles></Luxuriacarpettiles>
      },
      {
        path:"/admin/platinum-uplode",
        element:<Platinumcarpettiles></Platinumcarpettiles>
      },
      {
        path:"/admin/exhibition-uplode",
        element:<Exhibitioncarpet></Exhibitioncarpet>
      },
      {
        path:"/admin/Carpet-edit",
        element:<Carpetedit></Carpetedit>,

      },
      {
        path:"/admin/wood-upload-product",
        element:<Woodproductuplode></Woodproductuplode>
      },
      {
        path:"/admin/european-engineered",
        element:<Europeanengineereduplode></Europeanengineereduplode>

      },
      {
        path:"/admin/bamboo-upload",
        element:<Bambooflooringuplode></Bambooflooringuplode>

      },
      {
        path:"/admin/wood-accessories-upload",
        element:<Woodaccessoriesuplod></Woodaccessoriesuplod>

      },
      {
        path:"/admin/subproductwood",
        element:<Woodsubproduct></Woodsubproduct>
      },
      {
        path:"/admin/wood-edit",
        element:<Woodedit></Woodedit>,

      },
      {
        path:"/admin/rubber-upload-product",
        element:<Rabbarproductuplode></Rabbarproductuplode>
      },
      {
        path:"/admin/subproductrabber",
        element:<Rabbersubproduct></Rabbersubproduct>
      },
      {
        path:"/admin/rubber-edit",
        element:<Rubbaredit></Rubbaredit>,

      },

      {
        path:"/admin/wall-upload-product",
        element:<Wallproductuplode></Wallproductuplode>
      },
      {
        path:"/admin/wall-accessories-uplode",
        element:<Accessorieswalluplode></Accessorieswalluplode>

      },
      {
        path:"/admin/pu-stone-uplode",
        element:<Pustoneuplode></Pustoneuplode>

      },
      {
        path:"/admin/pvc-cround-uplode",
        element:<Pvcrounduplode></Pvcrounduplode>

      },
      {
        path:"/admin/pvc-solid-uplode",
        element:<Pvcsoliduplode></Pvcsoliduplode>

      },
      {
        path:"/admin/wpc-cod-uplode",
        element:<Wpcoduplode></Wpcoduplode>

      },
      {
        path:"/admin/pvc-square-uplode",
        element:<Pvcsquareuplode></Pvcsquareuplode>

      },
      {
        path:"/admin/wall-acrylic-uplode",
        element:<Wallacrylicuplode></Wallacrylicuplode>

      },
      {
        path:"/admin/wall-cladding-uplode",
        element:<Wallcladdinguplode></Wallcladdinguplode>

      },
      {
        path:"/admin/subproductwall",
        element:<Wallsubproduct></Wallsubproduct>
      },
      {
        path:"/admin/wall-edit",
        element:<Walledit></Walledit>,

      },
      {
        path:"/admin/pvc-upload-product",
        element:<Pvcproductuplode></Pvcproductuplode>
      },
      {
        path:"/admin/wet-met-uplode",
        element:<Wetmetuplode></Wetmetuplode>

      },
      {
        path:"/admin/pvc-met-uplode",
        element:<Pvcmatuplode></Pvcmatuplode>

      },
      {
        path:"/admin/comlimat-met-uplode",
        element:<Pvccomlimat></Pvccomlimat>

      },
      {
        path:"/admin/clear-pvc-mat",
        element:<Clearpvcuplode></Clearpvcuplode>

      },
      {
        path:"/admin/subproductpvc",
        element:<Pvcsubproduct></Pvcsubproduct>
      },
      {
        path:"/admin/pvc-edit",
        element:<Pvcedit></Pvcedit>,

      },
      
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Authprovider>
     <RouterProvider router={router} />
     </Authprovider>
  </React.StrictMode>,
)
