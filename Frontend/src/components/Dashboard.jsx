import ATSScoreCard from "./ATSScoreCard";
import MissingSkills from "./MissingSkills";
import Strengths from "./Strengths";
import Weaknesses from "./Weaknesses";
import Suggestions from "./Suggestions";
import JobFit from "./JobFit";
import FadeUp from "./FadeUp";
import { downloadPDF } from "./pdfGenerator";
import { Download } from "lucide-react";

const Dashboard = ({ analysis }) => {
  if (!analysis) return null;

  console.log("Dashboard ATS:", analysis?.atsScore);
  return (
    <div className="space-y-8">

      
       <FadeUp>
      <div className="grid lg:grid-cols-3 gap-6">

       
        
        <div className="lg:col-span-1">
        
          <ATSScoreCard score={analysis.atsScore} />
          
        </div>
       

       
       
        <div className="lg:col-span-2 flex flex-col gap-6">
         
          <JobFit
            jobFit={analysis.jobFitpercent}
            matchedSkills={analysis.matchedSkills}
          />

          <MissingSkills
            skills={analysis.missingSkills}
          />
        </div>
      </div>
       </FadeUp>

      
      <FadeUp>
      <Suggestions
        suggestions={analysis.suggestions}
      />
      </FadeUp>

       <FadeUp>
      <div className="grid lg:grid-cols-2 gap-6">
       
        <Strengths
          strengths={analysis.strengths}
        />
        
        <Weaknesses
          weaknesses={analysis.weaknesses}
        />
      </div>
       </FadeUp>

      <FadeUp>
     <button  onClick={() => downloadPDF(analysis)} className=" flex items-center justify-center gap-2 bg-violet-700
        text-white
        cursor-pointer
        font-semibold
        px-4 py-3 rounded-full
        shadow-lg
        shadow-violet-500/20
        hover:shadow-violet-500/30 ">
  Download Report
  <Download size={18}/>
</button>
</FadeUp>

    </div>
  );
};

export default Dashboard;