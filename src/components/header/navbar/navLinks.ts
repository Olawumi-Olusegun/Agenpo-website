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
        href: "#",
        navImage: "",
        caption: "",
        subLinks: [
          {
            subMenu: [
              {
                label: "Coproma",
                href: "/Coproma",
                description: "Food processors and manufacturers can access, order, receive, and pay for certified produce raw materials, while being able to lock-in prices for future delivery.",
              },
              {
                label: "FarmSider",
                href: "/FarmSider",
                description: "Farmers can now access a larger pool of buyers year-round for their produce with FarmSider, in addition to the all-important input financing.",
              },
              {
                label: "Korprativ",
                href: "/Korprativ",
                description: "Haula web app is the Uber for agro trucking companies, while Haula mobile app enables drivers to pick up and deliver certified produce using provided coordinates.",
              },
              {
                label: "Certoma",
                href: "/Certoma",
                description: "Certification companies can manage a team of produce quality inspectors in any location effortlessly.",
              },
              {
                label: "Werhously",
                href: "/Werhously",
                description: "Individual produce aggregators can access a broad range of buyers for their aggregated produce and also get financing.",
              },
              {
                label: "AgriGeitor",
                href: "/AgriGeitor",
                description: "Agro warehouse managers can earn and manage their warehouse operations end-to-end.",
              },
              {
                label: "Inspecktr",
                href: "/Inspecktr",
                description: "Quality inspectors working with certification companies can record produce inspections and certifications electronically without paperwork.",
              },
              
            ],
          },
        ],
      },
    {
        label: "Resources",
        href: "#",
        navImage: "",
        caption: "",
        subLinks: [
          {
            subMenu: [
              {
                label: "Blog",
                href: "/Blog",
                description: "Read the latest news and trends on agriculture in Africa and around you.",
              },
              {
                label: "Careers",
                href: "/Careers",
                description: "Check out our available career openings at Agenpo and how you can be a part of us.",
              },
              {
                label: "Produce",
                href: "/Produce",
                description: "Explore our selection of crops and learn about the options that are available based on quality, price and availability.",
              },
              {
                label: "Agenpo Community",
                href: "/AgenpoCommunity",
                description: "Join one of the largest agribusiness communities and grow your agro network.",
              },
              {
                label: "FAQs",
                href: "/FAQs",
                description: "Explore our frequently asked questions and get answers to all questions regarding Agenpo.",
              },
            ],
          },
        ],
      },
    
    {
      label: "Contact Us",
      href: "/contact-us",
    }
  ];
  