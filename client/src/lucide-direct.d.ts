/** Performance note: direct Lucide icon modules avoid loading the barrel export in initial route chunks. */
declare module "lucide-react/dist/esm/icons/*" {
  import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
  const Icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }>;
  export default Icon;
}
