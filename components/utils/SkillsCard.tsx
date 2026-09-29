import { skillCategories } from "@/lib/skills";
import { motion, Variants } from "framer-motion";

const categoryContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const categoryItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 14, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 22 },
  },
};

// Groups categories into rows: Frontend alone, then two side-by-side pairs
export const rows: (keyof typeof skillCategories)[][] = [
  ["frontend"],
  ["mobile", "State Management"],
  ["Backend & Services", "Tools & Others"],
];

export function SkillCategoryBlock({
  category,
  skills,
}: {
  category: string;
  skills: {
    name: string;
    icon: React.ComponentType<{ width?: number; height?: number }>;
  }[];
}) {
  return (
    <motion.div
      variants={categoryItem as unknown as Variants}
      className="space-y-1.5"
    >
      <p className="mb-3 text-small font-medium text-text-secondary">
        {category}
      </p>
      <motion.div variants={cardsContainer} className="flex flex-wrap gap-3">
        {skills.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            variants={cardItem as unknown as Variants}
            whileHover={{
              y: -4,
              borderColor: "rgba(34,197,94,0.3)",
              boxShadow: "0 0 20px rgba(34,197,94,0.18)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex w-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-[14px] border border-accent/10 bg-card/40 py-4 backdrop-blur-md"
          >
            <Icon width={22} height={22} />
            <span className="text-center text-[11px] text-text-secondary">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function SkillsGrid() {
  return (
    <motion.div
      variants={categoryContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-6"
    >
      {rows.map((row, i) => (
        <div key={i} className={row.length > 1 ? "flex items-start gap-5" : ""}>
          {row.map((key) => (
            <SkillCategoryBlock
              key={key}
              category={skillCategories[key].category}
              skills={skillCategories[key].skills}
            />
          ))}
        </div>
      ))}
    </motion.div>
  );
}
