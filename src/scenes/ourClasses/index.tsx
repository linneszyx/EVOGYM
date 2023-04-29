import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
const classes:Array<ClassType> =[
  {
    name:"Weight Training Classes",
    description:"Our weight training classes are designed to build strength and endurance through targeted exercises using free weights, resistance bands, and machines.",
    image:image1
  },
  {
    name:"Fit Classes",
    image:image2
  },
  {
    name:"Yoga Classes",
    description:"Our yoga classes offer a holistic approach to fitness, focusing on improving flexibility, balance, and mindfulness through various postures and breathing techniques.",
    image:image3
  },
  {
    name:"Abs Classes",
    description:"Our abs classes focus on toning and strengthening the core through a variety of exercises that target the abdominal muscles.",
    image:image4
  },
  {
    name:"Martial Arts Classes",
    image:image5
  },
  {
    name:"Dance fitness classes",
    description:"Dance fitness classes offer a fun and engaging full-body workout, combining dance moves with cardio to improve endurance and coordination.",
    image:image6
  },
]
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
            "Our gym has millions of happy members achieving their fitness goals through our state-of-the-art equipment, expert trainers, and a supportive community that keeps them motivated."
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item,index)=>(
                <Class 
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
