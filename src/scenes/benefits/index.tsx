import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-5 w-5" />,
    title: "Personal training options",
    description: "Maximize your results with our expert personal training options. From tailored workout plans to nutrition coaching, we're here to help you reach your goals.",
  },
  {
    icon: <UserGroupIcon className="h-5 w-5" />,
    title: "Health and wellness tips",
    description: "Stay on top of your health with our expert tips on nutrition, exercise, and self-care. From simple lifestyle changes to practical advice, we've got you covered!"
  },
  {
    icon: <AcademicCapIcon className="h-5 w-5" />,
    title: "Membership benefits",
    description: "Maximize your results with our expert personal training options. From tailored workout plans to nutrition coaching, we're here to help you reach your goals.",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { straggerChildren: 0.2 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
          Nowadays, gyms are no longer just a place to lift weights and run on a treadmill. Many modern fitness centers, such as EVOGYM, offer much more than just equipment and exercise classes. They provide a complete wellness experience that includes nutritional guidance, personal training, recovery services, and community events.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          {/* Description */}
          <div>
            {/* Title */}
            <div>
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  className="md:my-5 md:w-3/5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Millions of Happy Members Getting{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* Description */}
            <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2,duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
              <p className="my-5">
              With millions of happy members around the world, our fitness program has helped individuals of all fitness levels achieve their goals. Our state-of-the-art facilities, personalized training programs, and supportive community make getting fit easier and more enjoyable than ever before.
              </p>
              <p className="mb-5">
              Our gym has millions of happy members achieving their fitness goals through our state-of-the-art equipment, expert trainers, and a supportive community that keeps them motivated.
              </p>
            </motion.div>
            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Benefits;
