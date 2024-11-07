export type SubLinks = {
    header?: string;
    subMenu?: { label: string; href: string, description: string }[];
    subImages?: { label: string; href: string; image: string }[];
  };
  
  export type Links = {
    label: string;
    href: string;
    navImage?: string;
    caption?: string;
    subLinks?: SubLinks[];
  };
  
  
  export const links: Links[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Solutions",
      href: "/solutions",
    },
    {
      label: "Resources",
      href: "/resources",
    },
    // {
    //     label: "Solutions",
    //     href: "#",
    //     navImage: "",
    //     caption: "",
    //     subLinks: [
    //       {
    //         subMenu: [
    //           {
    //             label: "AdReach",
    //             href: "/AdReach",
    //             description: "Achieve geo -targeted advertising for maximum impact with AdReach",
    //           },
    //           {
    //             label: "UtilityNet",
    //             href: "/UtilityNet",
    //             description: "Optimize utility services with precision using UtilityNet.",
    //           },
    //           {
    //             label: "CellGrid",
    //             href: "/CellGrid",
    //             description: "Infuse precision planning into Telecoms with CellGrid.",
    //           },
    //           {
    //             label: "SecureSite",
    //             href: "/SecureSite",
    //             description: "Use location intelligence for financial security with SecureSite.",
    //           },
    //           {
    //             label: "ShopSpot",
    //             href: "/ShopSpot",
    //             description: "Attain retail success with strategic location planning using ShopSpot.",
    //           },
    //           {
    //             label: "NavOptix",
    //             href: "/NavOptix",
    //             description: "Own precision navigation and route optimization with NavOptix",
    //           },
    //           {
    //             label: "AgriZone",
    //             href: "/AgriZone",
    //             description: "Elevate your agricultural solutions with AgriZone",
    //           },
    //           {
    //             label: "TourMap",
    //             href: "/TourMap",
    //             description: "Elevate your agricultural solutions with AgriZone",
    //           },
    //           {
    //             label: "HealthLoc",
    //             href: "/HealthLoc",
    //             description: "Deliver Healthcare with Precision LocationIntelligence using HealthLoc.",
    //           },
    //           {
    //             label: "RealSight",
    //             href: "/RealSight",
    //             description: "Build real estate success on precision data with RealSight.",
    //           },
    //           {
    //             label: "InsurSight",
    //             href: "/InsurSight",
    //             description: "Get advanced location intelligence for risk assessment with InsurSight.",
    //           },
    //           {
    //             label: "EduZone",
    //             href: "/EduZone",
    //             description: "Transform education planning with EduZone.",
    //           },
    //           {
    //             label: "CiviSync",
    //             href: "/CiviSync",
    //             description: "Streamline government services with CiviSync.",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // {
    //     label: "Resources",
    //     href: "#",
    //     navImage: "",
    //     caption: "",
    //     subLinks: [
    //       {
    //         subMenu: [
    //           {
    //             label: "AdReach",
    //             href: "/AdReach",
    //             description: "Achieve geo -targeted advertising for maximum impact with AdReach",
    //           },
    //           {
    //             label: "UtilityNet",
    //             href: "/UtilityNet",
    //             description: "Optimize utility services with precision using UtilityNet.",
    //           },
    //           {
    //             label: "CellGrid",
    //             href: "/CellGrid",
    //             description: "Infuse precision planning into Telecoms with CellGrid.",
    //           },
    //           {
    //             label: "SecureSite",
    //             href: "/SecureSite",
    //             description: "Use location intelligence for financial security with SecureSite.",
    //           },
    //           {
    //             label: "ShopSpot",
    //             href: "/ShopSpot",
    //             description: "Attain retail success with strategic location planning using ShopSpot.",
    //           },
    //           {
    //             label: "NavOptix",
    //             href: "/NavOptix",
    //             description: "Own precision navigation and route optimization with NavOptix",
    //           },
    //           {
    //             label: "AgriZone",
    //             href: "/AgriZone",
    //             description: "Elevate your agricultural solutions with AgriZone",
    //           },
    //           {
    //             label: "TourMap",
    //             href: "/TourMap",
    //             description: "Elevate your agricultural solutions with AgriZone",
    //           },
    //           {
    //             label: "HealthLoc",
    //             href: "/HealthLoc",
    //             description: "Deliver Healthcare with Precision LocationIntelligence using HealthLoc.",
    //           },
    //           {
    //             label: "RealSight",
    //             href: "/RealSight",
    //             description: "Build real estate success on precision data with RealSight.",
    //           },
    //           {
    //             label: "InsurSight",
    //             href: "/InsurSight",
    //             description: "Get advanced location intelligence for risk assessment with InsurSight.",
    //           },
    //           {
    //             label: "EduZone",
    //             href: "/EduZone",
    //             description: "Transform education planning with EduZone.",
    //           },
    //           {
    //             label: "CiviSync",
    //             href: "/CiviSync",
    //             description: "Streamline government services with CiviSync.",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    {
      label: "Contact Us",
      href: "/contact-us",
    }
  ];
  