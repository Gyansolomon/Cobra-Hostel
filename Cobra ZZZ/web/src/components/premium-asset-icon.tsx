import Image from "next/image";

import { cn } from "@/lib/utils";

const assetBase = "/premium-assets/3dicons";

export const premiumAssets = {
  area: `${assetBase}/location.png`,
  calendar: `${assetBase}/calender.png`,
  explore: `${assetBase}/explorer.png`,
  heart: `${assetBase}/heart.png`,
  locker: `${assetBase}/locker.png`,
  map: `${assetBase}/map-pin.png`,
  money: `${assetBase}/money-bag.png`,
  profile: `${assetBase}/boy.png`,
  rating: `${assetBase}/star.png`,
  rooms: `${assetBase}/notebook.png`,
  search: `${assetBase}/zoom.png`,
  students: `${assetBase}/girl.png`,
} as const;

type PremiumAssetIconProps = {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function PremiumAssetIcon({
  src,
  alt = "",
  className,
  priority = false,
  sizes = "48px",
}: PremiumAssetIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={96}
      height={96}
      priority={priority}
      sizes={sizes}
      className={cn("object-contain", className)}
    />
  );
}
