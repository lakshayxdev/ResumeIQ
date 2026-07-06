import ATSScoreCard from "../components/ATSScoreCard";
import MissingSkills from "../components/MissingSkills";
import Strengths from "../components/Strengths";
import Weaknesses from "../components/Weaknesses";
import Suggestions from "../components/Suggestions";
import JobFit from "../components/JobFit";


const Dashboard = ({ analysis }) => {
  if (!analysis) return null;

  console.log("Dashboard ATS:", analysis?.atsScore);
  return (
    <div className="space-y-8">

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

      
      <Suggestions
        suggestions={analysis.suggestions}
      />

      <div className="grid lg:grid-cols-2 gap-6">
       
        <Strengths
          strengths={analysis.strengths}
        />
        
        <Weaknesses
          weaknesses={analysis.weaknesses}
        />
      </div>

    </div>
  );
};

export default Dashboard;