import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/courseData';

export function CourseTestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#1a1a4e]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
            Transformations in Action
          </h2>
          <p className="text-lg text-[#faf8f5]/80 font-light max-w-2xl mx-auto">
            Hear from leaders who have walked the path to influence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-8 hover:border-[#d4952a]/50 transition-all duration-500"
            >
              <Quote className="text-[#d4952a]/40 w-8 h-8 mb-4" />
              <p className="text-[#faf8f5]/90 font-light text-base leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#d4952a] font-serif text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-[#faf8f5] font-medium mb-1">
                    {testimonial.author}
                  </h4>
                  <p className="text-[#faf8f5]/60 text-sm">
                    {testimonial.title}
                  </p>
                  {testimonial.phase && (
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-3 h-3 text-[#d4952a] fill-[#d4952a]" />
                      <span className="text-[#d4952a] text-xs font-medium">
                        Phase {testimonial.phase}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
