import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

interface Photo {
    src: string;
    alt: string;
    caption?: string;
}

interface PhotoGalleryCarouselProps {
    photos: Photo[];
    title?: string;
    subtitle?: string;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

export function PhotoGalleryCarousel({
    photos,
    title = "Moments of Impact",
    subtitle = "Visual stories of transformation in action",
    autoPlay = false,
    autoPlayInterval = 5000,
}: PhotoGalleryCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play functionality
    useEffect(() => {
        if (autoPlay && !isPaused && !isLightboxOpen && photos.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % photos.length);
            }, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [autoPlay, autoPlayInterval, isPaused, isLightboxOpen, photos.length]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isLightboxOpen) {
                if (e.key === "Escape") closeLightbox();
                if (e.key === "ArrowLeft") goToPrevious();
                if (e.key === "ArrowRight") goToNext();
            } else {
                if (e.key === "ArrowLeft") goToPrevious();
                if (e.key === "ArrowRight") goToNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isLightboxOpen]);

    if (photos.length === 0) {
        return null;
    }

    return (
        <section className="py-24 md:py-32 bg-[#faf8f5] text-[#1a1a4e]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="block text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase mb-6"
                    >
                        Gallery
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl text-[#1a1a4e] mb-4"
                    >
                        {title}
                    </motion.h2>
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-[#1a1a4e]/60 max-w-2xl mx-auto"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>

                {/* Main Carousel */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Main Image Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/3] md:aspect-[4/3] bg-[#1a1a4e]/5 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={photos[currentIndex].src}
                                alt={photos[currentIndex].alt}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Caption Overlay */}
                        {photos[currentIndex].caption && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8"
                            >
                                <p className="text-white/90 font-serif text-lg md:text-xl">
                                    {photos[currentIndex].caption}
                                </p>
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        {photos.length > 1 && (
                            <>
                                <button
                                    onClick={goToPrevious}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white text-[#1a1a4e] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
                                    aria-label="Previous photo"
                                >
                                    <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-0.5 transition-transform" />
                                </button>

                                <button
                                    onClick={goToNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white text-[#1a1a4e] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
                                    aria-label="Next photo"
                                >
                                    <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </>
                        )}

                        {/* Expand Button */}
                        <button
                            onClick={openLightbox}
                            className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            aria-label="View full size"
                        >
                            <Maximize2 className="w-5 h-5" />
                        </button>

                        {/* Counter */}
                        {photos.length > 1 && (
                            <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-sm font-medium rounded-full">
                                {currentIndex + 1} / {photos.length}
                            </div>
                        )}
                    </motion.div>

                    {/* Thumbnail Navigation */}
                    {photos.length > 1 && (
                        <div className="flex justify-center gap-3 mt-8 overflow-x-auto pb-4">
                            {photos.map((photo, index) => (
                                <motion.button
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => goToSlide(index)}
                                    className={`relative flex-shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                                        index === currentIndex
                                            ? "ring-3 ring-[#d4952a] scale-105 shadow-lg"
                                            : "ring-2 ring-transparent hover:ring-[#d4952a]/50 hover:scale-105"
                                    }`}
                                    aria-label={`Go to photo ${index + 1}`}
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full h-full object-cover"
                                    />
                                    {index === currentIndex && (
                                        <div className="absolute inset-0 bg-[#d4952a]/20" />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Close lightbox"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Lightbox Image */}
                            <div className="relative max-w-6xl max-h-[90vh]">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentIndex}
                                        src={photos[currentIndex].src}
                                        alt={photos[currentIndex].alt}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                                    />
                                </AnimatePresence>

                                {/* Caption */}
                                {photos[currentIndex].caption && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-white/90 font-serif text-lg md:text-xl text-center mt-6"
                                    >
                                        {photos[currentIndex].caption}
                                    </motion.p>
                                )}
                            </div>

                            {/* Lightbox Navigation */}
                            {photos.length > 1 && (
                                <>
                                    <button
                                        onClick={goToPrevious}
                                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        aria-label="Previous photo"
                                    >
                                        <ChevronLeft className="w-7 h-7" />
                                    </button>

                                    <button
                                        onClick={goToNext}
                                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        aria-label="Next photo"
                                    >
                                        <ChevronRight className="w-7 h-7" />
                                    </button>
                                </>
                            )}

                            {/* Lightbox Counter */}
                            {photos.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full">
                                    {currentIndex + 1} / {photos.length}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
