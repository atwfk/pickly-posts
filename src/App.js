import PostEdit from "./components/Organisms/PostEdit/PostEdit";

import ViewOneImagePoll from "./components/Heba/organism/ViewOneImagePoll";
import ViewOneImagePollResult from "./components/Heba/organism/ViewOneImagePollResult";
import ViewTwoImagePoll from "./components/Heba/organism/ViewTwoImagePoll";
import ViewTwoImagePollResult from "./components/Heba/organism/ViewTwoImagResult";
import ViewFourImagesPoll from "./components/Heba/organism/ViewFourImagesPoll";
import ViewFourImagePollResult from "./components/Heba/organism/ViewFourImagesPollResult";
import ViewOptionOfGroup from "./components/Heba/organism/GroupOption"
import ViewGroupOfOptionResult from "./components/Heba/organism/ViewGroupOfOptionResult"
import ViewGroupOfFourOptionResult from "./components/Heba/organism/ViewGroupOfFourOptionResult"
import ViewMiniSurvey from "./components/Heba/organism/ViewMiniSurvey"
import ViewMiniSurveyٌResult from "./components/Heba/organism/ViewMiniSurveyٌResult";

function App() {
  return (
    <div className=" bg-grey-bg">
      
      {/* <PostEdit /> */}
      <ViewOneImagePoll/>
      <ViewOneImagePollResult/>
      <ViewTwoImagePoll/>
     
      <ViewTwoImagePollResult/>
      <ViewFourImagesPoll/>
      <ViewFourImagePollResult/>
      <ViewOptionOfGroup numOFOptions={["React","Vue"]}/>
      <ViewOptionOfGroup numOFOptions={["React","Vue","Angular","Python"]}/>
      <ViewGroupOfOptionResult/>
      <ViewGroupOfFourOptionResult/>
      <ViewMiniSurvey/>
      <ViewMiniSurveyٌResult/>
    </div>
  );
  
}

export default App;
