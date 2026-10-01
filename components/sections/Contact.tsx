import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiHandshake } from "react-icons/pi";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Tag from "../utils/Tag";
import { ContactFormValues, contactInfo, contactSchema } from "@/lib/skills";
import TextHeader from "../utils/TextHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    // wire this up to your email service / API route
    console.log(values);
    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative h-full overflow-hidden bg-[#050807] px-3 sm-px-4  md:px-6 pb-20 pt-25 lg:px-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050807]" />
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 180px, #000 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 180px, #000 100%)",
        }}
      >
        <div
          className="absolute -right-[160px] top-[80px] h-[640px] w-[640px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0.08) 40%, transparent 72%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.4), transparent 30%)",
          }}
        />
      </div>

      <div className="relative z-10  mx-auto max-w-7xl ">
        {/* Left */}
        <TextHeader
          headingWords={[
            { text: "Let's" },
            { text: "Work" },
            { text: "Together" },
          ]}
          paragraph=" I'm always open to new opportunities, collaborations and
            interesting projects. Feel free to reach out!"
        >
          <Tag text="Get In Touch" Icon={PiHandshake} />
        </TextHeader>
        <div className="flex mt-4 md:mt-10 flex-col gap-10 lg:flex-row items-start justify-between">
          <div className="w-full  ">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col sm:grid grid-cols-2 gap-6"
            >
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  variants={fadeUp as Variants}
                  whileHover="hover"
                  initial="rest"
                  className="group flex items-center gap-4"
                >
                  <motion.div
                    variants={{
                      rest: { scale: 1, rotate: 0 },
                      hover: { scale: 1.1, rotate: 6 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className="flex size-11 shrink-0 items-center justify-center rounded-[12px] p-0 project-card border border-accent/10 text-accent"
                  >
                    <Icon size={18} />
                  </motion.div>

                  <motion.div
                    variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <p className="text-caption text-text-secondary">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-small font-medium text-text-primary transition-colors hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-small font-medium text-text-primary">
                        {value}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
              className="rounded-[24px] max-w-[380px] lg:max-w-[450px] mx-auto w-full border border-border bg-card/50 p-6 backdrop-blur-md md:p-8"
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3 md:space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            className="h-12 text-small! hover:translate-y-[8px]!  project-card  rounded-[12px] border-border bg-background/40 text-text-primary placeholder:text-text-secondary focus-visible:ring-accent/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your Email"
                            className="h-12 text-small! hover:translate-y-[8px]!  project-card rounded-[12px] border-border bg-background/40 text-text-primary placeholder:text-text-secondary focus-visible:ring-accent/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Message"
                            rows={5}
                            className="resize-none text-small! hover:translate-y-[8px]!  project-card rounded-[12px] h-24  border-border bg-background/40 text-text-primary placeholder:text-text-secondary focus-visible:ring-accent/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="btn-gradient flex w-full cursor-pointer items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {form.formState.isSubmitting
                      ? "Sending..."
                      : "Send Message"}
                    <motion.span
                      variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                      initial="rest"
                      whileHover="hover"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 12,
                      }}
                    >
                      <FaArrowRightLong />
                    </motion.span>
                  </motion.button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
