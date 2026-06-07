"use client";

import * as React from "react";
import Image from "next/image";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { MapPin, Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface PropertyCardProps extends HTMLMotionProps<"div"> {
  imageUrl: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  imageAlt?: string;
  currency?: string;
  period?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.18,
      ease: "easeOut",
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.16,
      ease: "easeOut",
    },
  },
};

const PropertyCard = React.forwardRef<HTMLDivElement, PropertyCardProps>(
  (
    {
      className,
      imageUrl,
      name,
      location,
      price,
      rating,
      reviews,
      imageAlt = "Property image",
      currency = "GHS ",
      period = "/sem",
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "group w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-shadow duration-200 ease-out hover:shadow-md",
          className
        )}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.01, y: -2 }}
        {...props}
      >
        <div className="relative h-40 overflow-hidden bg-secondary">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(min-width: 640px) 240px, 208px"
            className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="space-y-2.5 p-3">
          <div className="flex items-start justify-between gap-3">
            <motion.h3
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="min-w-0 truncate text-sm font-semibold leading-5"
            >
              {name}
            </motion.h3>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="shrink-0 text-sm font-semibold leading-5 text-primary tabular-nums"
            >
              {currency}
              {price.toLocaleString()}
              <span className="text-[11px] font-normal text-muted-foreground">{period}</span>
            </motion.p>
          </div>

          <div className="space-y-1.5 text-xs leading-4 text-muted-foreground">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex min-w-0 items-center gap-1.5"
            >
              <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{location}</span>
            </motion.div>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex min-w-0 items-center gap-1.5"
            >
              <Star
                className="size-3.5 shrink-0 fill-yellow-400 text-yellow-500"
                aria-hidden="true"
              />
              <span className="font-medium text-foreground tabular-nums">{rating}</span>
              <span className="truncate tabular-nums">({reviews.toLocaleString()} reviews)</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }
);

PropertyCard.displayName = "PropertyCard";

export { PropertyCard };
