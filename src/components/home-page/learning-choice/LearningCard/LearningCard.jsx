import LearnWithExpert from "/public/icons/LearnWithExpert";
import LearnAnything from "/public/icons/LearnAnything";
import Certificate from "/public/icons/Certificate";
import EmailIcon from "/public/icons/EmailIcon";

function LearningCard() {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex w-full flex-col items-center space-y-4 py-6 text-center md:w-[350px]">
        <LearnWithExpert />
        <h1 className="font-bold text-white">Learn with Experts</h1>
        <p className="font-light text-gray-200">
          Curate anding area share pluralsight <br /> content to reach your
        </p>
      </div>
      <div className="flex w-full flex-col items-center space-y-4 py-6 text-center md:w-[350px]">
        <LearnAnything />
        <h1 className="font-bold text-white">Learn Anything</h1>
        <p className="font-light text-gray-200">
          Curate anding area share pluralsight <br /> content to reach your
        </p>
      </div>
      <div className="flex w-full flex-col items-center space-y-4 py-6 text-center md:w-[350px]">
        <Certificate />
        <h1 className="font-bold text-white">Get Online Certificate</h1>
        <p className="font-light text-gray-200">
          Curate anding area share pluralsight <br /> content to reach your
        </p>
      </div>
      <div className="flex w-full flex-col items-center space-y-4 py-6 text-center md:w-[350px]">
        <EmailIcon />
        <h1 className="font-bold text-white">E-mail Marketing</h1>
        <p className="font-light text-gray-200">
          Curate anding area share pluralsight <br /> content to reach your
        </p>
      </div>
    </div>
  );
}

export default LearningCard;
