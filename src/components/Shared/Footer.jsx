import React from "react";

const footerLinks = [
  {
    title: "Getting started",
    links: [
      "Installation",
      "Release Notes",
      "Upgrade Guide",
      "Using with Preprocessors",
      "Optimizing for Production",
      "Browser Support",
      "IntelliSense",
    ],
  },
  {
    title: "Core Concepts",
    links: [
      "Utility-First",
      "Responsive Design",
      "Hover, Focus, & Other States",
      "Dark Mode",
      "Adding Base Styles",
      "Extracting Components",
      "Adding New Utilities",
    ],
  },
  {
    title: "Customization",
    links: [
      "Configuration",
      "Theme Configuration",
      "Breakpoints",
      "Customizing Colors",
      "Customizing Spacing",
      "Configuring Variants",
      "Plugins",
    ],
  },
  {
    title: "Community",
    links: ["GitHub", "Discord", "Twitter", "YouTube"],
  },
];

const Footer = () => {
  return (
    <footer className="p-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-auto">
        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col space-y-4">
            <h2 className="font-medium">{section.title}</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
              {section.links.map((link) => (
                <a key={link} href="#" rel="noopener noreferrer">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm dark:text-gray-600">
        © Copyright 1986. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
