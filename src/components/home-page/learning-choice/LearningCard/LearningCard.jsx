import LearnWithExpert from "/public/icons/LearnWithExpert";
import LearnAnything from "/public/icons/LearnAnything";
import Certificate from "/public/icons/Certificate";
import EmailIcon from "/public/icons/EmailIcon";

function LearningCard() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="flex flex-col items-center space-y-4 py-6 text-center">
        <LearnWithExpert />
        <h1 className="font-bold text-white">Mastery (CBSE 8th class)</h1>
        <p className="font-light text-gray-200">
        Designed to form a robust base, our CBSE 8th-grade coaching program fosters essential skills for future growth. We emphasise effective learning, making education enjoyable and turning childhood into a delightful learning experience.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 py-6 text-center">
        <LearnAnything />
        <h1 className="font-bold text-white">Excellence (CBSE 9th class)</h1>
        <p className="font-light text-gray-200">
        Emphasising the development of robust analytical and advanced skills essential for success in any competitive exam nationwide, our CBSE 9th-grade coaching program stands as a comprehensive educational offering.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 py-6 text-center">
        <Certificate />
        <h1 className="font-bold text-white">Achiever (CBSE 10th Class)</h1>
        <p className="font-light text-gray-200">
          Our CBSE 10th-grade coaching program is meticulously designed to enhance conceptual clarity and analytical skills, ensuring students achieve maximum grades in their board exams.
        </p>
      </div>
      {/* <div className="flex flex-col items-center space-y-4 py-6 text-center">
        <EmailIcon />
        <h1 className="font-bold text-white">E-mail Marketing</h1>
        <p className="font-light text-gray-200">
          Curate anding area share pluralsight <br /> content to reach your
        </p>
      </div> */}
    </div>
  );
}

export default LearningCard;
