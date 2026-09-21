"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

/**
 * Wraps next/image and renders nothing if the asset 404s, instead of a
 * broken-image icon — useful while real assets are still being added.
 */
export function SafeImage(props: ImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  // eslint-disable-next-line jsx-a11y/alt-text -- alt is required on ImageProps, enforced by callers via TypeScript
  return <Image {...props} onError={() => setFailed(true)} />;
}
