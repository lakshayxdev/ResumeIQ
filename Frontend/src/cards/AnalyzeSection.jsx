import ATSScoreCard from "./ATSScoreCard"
import JobFit from "./JobFit"
import MatchedSkills from "./MatchedSkills"


const AnalyzeSection = ({analysis}) => {
  return (
    <>
    <div className="grid lg:grid-cols-3 gap-6">

    <ATSScoreCard
        score={analysis.atsScore}
    />

    <div className="lg:col-span-2 flex flex-col gap-6">

        <JobFit
            jobFit={analysis.jobFitpercent}
            matchedSkills={analysis.matchedSkills}
        />

        <MatchedSkills
            skills={analysis.matchedSkills}
        />

    </div>

</div>
    </>
  )
}

export default AnalyzeSection